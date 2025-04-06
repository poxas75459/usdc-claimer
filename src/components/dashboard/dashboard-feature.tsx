/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2Sg3YqQcX5DPt9daiJ3JBynkTXydkzcSoztPuF1QyTw6uL7rMh6Hwx5jeT3d1dTwkSNNTNjGdCeng2RFfbEb6nfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4JyFiPyX8jfnffHhSFzPMQvewuYHjaTUGzXaUPhWpeGtgEzEEdQMPCAkWU3XC76dv85ngNEJpDyER5upv8Dk2T",
  "key1": "2nRNDBdFvkeBFxM3fX67ocKkovEvzGecSdSbofnpj5n5APrPHg72x1FoDw7dgHWv9XCHFjcX3QTUAGn79t9ewotw",
  "key2": "3Zj5G29zizNLDcfd37DfnP6CVJ1RubMpQ5VyQ95Q5QJhm4dQrhrUA2qFREwbGANW6UsvBfKxDjKG848e3NNc2A2B",
  "key3": "5Sqr71HFBJqvz1ZSR3PH8LTZYC5TCTVd8z46JJgiCV29mb7XdLMX8YC1asFMEXPn1vR66cBDkoniE91trQ9rgjPa",
  "key4": "4QhbR41n9uJ8uoNZAdU9jV8U7UiNqcFYCoLPQ1EAwxRX4EQqyytX6QhEgjeCk2mHtveTAZjmc8doQZ8GvtiGKNG6",
  "key5": "8eHBFNjmJrMSW3s6TgMitrb7wuXv7VKaRL1rQkQb1RJGRn4McqLhYDYRGahgp7SjdW2W1bjutjHrXos62JcG9iT",
  "key6": "5HwMJQ4aGgPDJVUD6cMESFMuRyfRkSSTnSVchJanmuSndgPDFG2C3pn8W2qTfmFPTrJTgNFCWTbKv7KdLuRptwUq",
  "key7": "5KoCBNkjv8DcEVuSx6TivDtLZE61v8rFFaNsvefxruAd9iEzVTtCWPcdipKfh6UaSKgpHPRStbdRsdZUpgmJhWKz",
  "key8": "3AtmodNsVELq5Mhs8JsNfzVcNx31YS7nRYdzkkkLrRVPAQFp87A9mzaYmYGHxn2y9c9hDtq9jxjkdv193BFvM2SL",
  "key9": "4smsoyNBgFZ9V6g2PyWatdHaAPz3h49YkBdA656SpqroGAkwERDSG3mCwXZhUnLdnJ2Wj3g1PQjx43Krz8U1f4ND",
  "key10": "5SNzrqh1suJg8CRccen84GZBPPRtBbfmBt14er6JLks4HNWEyHD5Bu7pBeRLz5qxk7vjvPb6zwXRnwUd75tXVqB",
  "key11": "3QR1FpHWuaQUeZgPiEqHfQDtVyx5Ws4Z8QG5yRLE2feVCcWeTy1JVVP73csZ13yMS5LwKinpRZdoE4fahLd5xFeh",
  "key12": "5rcJmPPFHByAThMRAYD72vU8fjjPNFgZsinLevFCha9VT9Cup6uoemTGgGh4ZnHaUjMuLQHtC2jvxBa6wKTDGkgt",
  "key13": "yPpwvcxVGsGdD1uhrFPyoUsMyV7sBQVDaTYM41x45ttpv4xpicTgagZrh9AnHKL5zjEp7X4tfLorMzLULZ6DWi1",
  "key14": "3kbkKZP28vr8dMLgjDjjrFkxp24fvYAs4cYTTKPAKwtUqeLNqT1r4ebFdboBv9Ee8eX1VwVSuERtQnV9GpptgyJV",
  "key15": "5A7PJMq5nRQhmRYWP2bACFYeQjRTRhxpVQ7jTi1wktzdE9UhFZDmfjxKt2ZK187CjBQHTenYwrKSNE5txLqqgm9a",
  "key16": "4SCJrUMZDcfEAkUVnmeiERJDgfiWtwPQwVvDB7zHmcKoqRsRCQpk1vwDSggi2youDPoEo67GEi1hMY1b3EAmXkuj",
  "key17": "5pbERBJHz1g4EJ4hVbpL1DS8rAx43jbeXYsFEFuzNduojEsNrRtW17Z3YDsS9s4oknb8w99DGacsJaaWpuQ5esvw",
  "key18": "2pqDVA4www4rpa3XboRmB73r7YLdUHxz5VvnTWNSm3iptzcDmJVmBi7FMHWzgaKgP6XgrPtNht2c6Lp1xf4xeP9X",
  "key19": "3oDUeE5fYvbYFyDLdpfkmg2q1VxzQf5qJzBTj6XdZspaZ69C9YTbor5MtdHB21pxKCtjRjFEyQD8PBjzjdtfbTSX",
  "key20": "ihmSYraFxkBf4x3ZiMAEgLkB22pdYH1QCwH77ZEMxoYHeV5CioHWCjXuKdwx7yENEgHn7kR9wST1YaFxN4NPoZK",
  "key21": "3zNWcSiVUWQgtstWHQivT2gv5vdePUBHSfKxopU3SgVK3MVQ61Qoz69yqR2RUytkfh4HeJZ2TtKMKLPB5Du5nqT9",
  "key22": "5kRp73ziphyshGSQ4wSurSVDc31iXPsbYKFKPc3s5dcdbUdmWiLib373zquD6BsXQebvTeGn7cuYpThcHeVWoSbk",
  "key23": "5cP7LCsqs65Qv3aLbfeJZV8UXBfxLW8QSzdgh1VxaxDM9Ecg9w519RiChw19XDBNN4XzyKoS9qThkqtSTigB2Wdi",
  "key24": "2U4YwczeZGhg8nVFLeVmHAcvP6mXEGKKbq6MeNaY2raUw6tHzpkfuSGJ8Mw5kpDgZdXxgRa9zjzisyqBdZU5ddGd",
  "key25": "5hTezDe2eUQwQ5t8p8D66JUMfBVyQnN4H4Kk9dzdb7VKFqXFNsD4aMzenR3hfRyuMCyKrGJ9QScr1q5Jbd8nrj2H",
  "key26": "5GJ4bgRPN88ztBLX7BEBenqxjJSe6bdpRdciGKUJWG63inxBkzrTp9epztgHpy5wPC1ccRVBncNP8RrQHrgiXc87",
  "key27": "5si5HzXHhJFnCrkaJEw2SoAYGHYSytkjN3Q8qzbTd9cq4VpkHhnEwXp78mDeihBa78C2i6wHsuhb6ZiyT7GZVtyZ",
  "key28": "4P3Mu3EHdGW2cQ9cXnqxbuGiwoARRfrKhkaft7T3bNgBzoxi29tw8AdN7qspQ88o3vF41RxEJQ4rR5QNkrcyvH2o",
  "key29": "3oriVHoBPYVAg6Px2PCzxKbiVPpKRdqWJXfftGxn7JwzwrPbwwQWhmvoSu4BPVjsKrA7UYNtw3HiCDitrUHZqEhr",
  "key30": "38Aq7VMQHR4ZAYQuXW6aGEkBncDUwULCfVzKpNzGcrpRZqLw6cs4wzBcTagn23BbE8CZQ5yids6nHDEHeJUKk7iR",
  "key31": "2LKEiotecsZ94MDtbHqGgzr7J4jgxvGgANcLRPFe3GpBhoWbhMrpoiR2PCXTR5LTM47KBkBFM7E6sznpFswL3fwT",
  "key32": "2CddKn6RcNJUYwLTmG4E8qzMze1u6sNiFeNpt28Wh2DQDjRXC1VA5dHinaQJ1Ly59nif3jMAnZy4mP8iHTNyk6Kk",
  "key33": "3bKhGHhRqXsm8gNr2BDLJHuaYysa2zeuNvx8xJF8RMDVVyZRGcWoHZNYaUoEkiNtGksanD19gPPG6KqwxfWaSXkD",
  "key34": "42DaMzDF9DwiZR24HqeeQ23m3CkGwgqZNiTuyVCE3uZow5XHEMUgf7s775vnAjjMjdYa8U9phymDyRgScGDr7oXp",
  "key35": "cE64S1wvqYjwi8CCjXKUprLTJf85Fvpjg3GZbrdvPfjRcMAiuzUpJyU4jiAwmPL5sMdya4vhmboKK6FFsJXV6i9",
  "key36": "46WLX8EhumgEsVXTVevx3EnPNA7LW3Ssrr71L7wZBPX8gHqufphJ9FDVwz3qQ2gFFYQAivV9qRz2RXuhBpr7ZX5v",
  "key37": "g5vgzTSZUtjzcMhu6WTDWSSAHCFCrnqq6pqGUZsYVKWSAjeFrkzpKXUowKUnADJEdGRgRdbXLeCULYVx9TcSc75",
  "key38": "KFig2nzLdZ5nQTpTZVxESqHJNVWTF1N8bCrHckM6UzQeRoS3rBaEpF5Pqck9vEEhXSFtj7QhzQJNL1CaST3tbXa",
  "key39": "5FEMUw5Kgv4jxK7v6HBqqytwy3byGfmfXuSzXp5tPoj9uu2oG9CHMsS8PfLFzKXo8QnVkh1qtijB52MBFmr8y8ec",
  "key40": "2DgHZ2xYfWr3ubZZW6pvMzDxJC86iaAKny9kK4piTWcWW5sP1eZ9fsnxUu4B3tfkU7oPm76Fw34CgS37Xe6s8TyL",
  "key41": "66tcfegmMefyxVrX5uRjpZkPrVzsZpyaZ9NzbFGJvHycNGgrGCFTXE9CnneYTt5t3XSJ6yV6FTg3fGmnG9yXX6zv",
  "key42": "4VkfqeSE51mpZ2Taw6kdJGD3R4w9MnaFPsPEZUsJjt2ZnSn95wYHeUdyaDGvrh3zJhAUtF1N3PxN4BQBn3sck5Xc",
  "key43": "58WFbzFGjuSZUgBnvCJwLAFQGyALXNdSvbR7M7EFHnjYV4PFSDrq2iDS2Bxu5jiGcFkY8WPJWXrASV43AGUJck36",
  "key44": "gjhxA6jVruyWQcrbgMfksbFdAiDXPSVprp1m4yM4scnv4HEu4zsspNDkwTYri9h9nG2otMUuuvsGYCu684wdUvZ",
  "key45": "4XQ9d6ngWNqLxbrXXb7MHkffgKWsrx2FyRRxMy8fGcpVZ8vXzcRDBy7cWkFUJoXgb5M5dMBewGnkbidEt5iypMHP",
  "key46": "5NBoyExeejk291WoQjhxnbwxsyuLCZPi7xrfSY6mvSXWt13NJGYUeBPpHqMtMgcqCmJUGWMvJdwE2n4M89wzHmzT",
  "key47": "2pDYmGuNJJn9KqW51ppGvjwA9MCkU1KAMBVqMeBsa9FDegR248apuRLeUWcZeaphis6aM3dEEdFDbVJqqogVsPgS"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
