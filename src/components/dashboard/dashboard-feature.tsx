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
    "xGCH6o84B2ppWCXhHHvrxg1QoZP6SKDMDW3tQxxTp9ZjZLDAsN2taTuc811X9cPtSu3uhxpv158M78ZxY1xjFYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHdncpXjKJUHamuNaiWY3otbCWoXFaaaeTyRQn3UXwCdWeYUmAapxLpeNTCwnYEhmcT4UrWnFRy1DXt6Q81iVps",
  "key1": "VdTemxchwmHaZnkUaQC1hmj2MeTeJsjq1e5U6FA3DWETFdCXhJZpNTpLXMgUCY8iCm4GMoFE2TJx8WzaR37BSAs",
  "key2": "4nHfJpP3T99rkvKYsPpCoUq64eoRK4ZUBBDwKwPpjhBad369xfvuHYGMd11tJMqAuV69Lp8j2GhoaRhDFzd8xCP8",
  "key3": "2vWBSLzuCY95Vz2K64x2udqw8G1jHftVuQYViJwEP6jHUFewd6QBewynEtiKnzHJPFxqXhGqwQU6Do5tXH7Hbi2j",
  "key4": "5rZTKr3aSbnpnkDeSCRZADAKhohN4dbjmd5jAHmR2DYCk1JKCfrtXdtNKp9UxVjmyMfohm5Z8mM9tifRDAtCoeV2",
  "key5": "56WY5krU5KTUkbzUiY2K45LYwJPMWniukKBxb4AgUNspTM58tSPfTXSqD9JZ5cVeb7SPgJ2U6UenyjTj2tGogFTD",
  "key6": "83RE8XFzviz4mbh2NffFtoJRFYDhNkUgVvk3K89WwGX64Q3jV6jhzKuWC2MWzAmmTTxjXPoN2hiZKUpzYtZd4Cy",
  "key7": "5dZN2z2rm9Qk3uEvNMRBVN86pzq2cgD2y7uw7sZKbgiVj38dA3r4eDDNi5CMk2Rg8VRHjK5Fq8HGF93ZwBcbajEF",
  "key8": "4P7zzJBf1d5FixH5tecVHeh9dHJnikv7mt1JiqkWhdAaydFevfWmorgvNyfp7DbXtGoxPh8XGEcDs7uiVzqAzHQa",
  "key9": "5SSm4ocDngATKn7vZfgayZx965UK5b5YRhkjog3V6z44HUfzRPn3NAjCSLB1frYVxmKv7PhmX1ixfsP8f5cSh8Ed",
  "key10": "5BG49NTmbtKtqkuuNbbNoYUKyAjVLAoSVcVtbbqFQ53gxDNLo71qKjJUy2R18UYBycZXmP64FsNhXSkZod4UDhEV",
  "key11": "xy3ipYZREHj5m4oYDFy9ChVS5Z8fzgTLCMS1GZAcwZTgkU67odd4G1av4AASE7CXfmLQxiAf83UoZrVGZsNoCto",
  "key12": "VNkwwwwZStkWERW5pt5BkZ3RSdC3tb9KffHZu3eSBQtiUtmXFeE5R9YEgvXTuhb8df8ta56fiKMBv4Bg6bEySAf",
  "key13": "3S6KEaNxEMXEHfgHK2LaGk85wnmKuVenmmQxC8Z8nG3WWoRJvsqDR5b27nSS4QuTqRQpoaBYYtEWPbiwhZ2SqDCj",
  "key14": "456tn8mSuMeHaXJ2uAPbDq6iJVafHqXj9KeFxnadQ4jNNppxSCcHYo8gS3KDUX9czvrhZgf2G2E8HdzcrjEXQ7Nm",
  "key15": "3HtcyuMUVMxumXwhJQwzqYFR7m9Weyb6LDGLWjstkUMnA5XgRU3PJ2Z4sUALtAAdFTaqzkGYFZ6PmVFxSU15tHjA",
  "key16": "2rzbXqcj6nrtTjkr7ssoNCcq4dGxuuPLciJg9CeYEvrsBd4f3jdmKMCaQxwisDrjbGwR9PG6YcayTgfGdCpEna1o",
  "key17": "1e5YaWN9fKfsti9hcWa87pSASvaLGujyUJFD4u6SKJRinz1GEDLHfFiLUYRPg5vL36CLyvaQDW3Mw3tAgXTASip",
  "key18": "4jhyDNHcT9xmkc8TCaN6Wtc2E6iUsBuujfndXSEro4oqeZtxPoLiQosCi61CuWBUUmYmvEj5XBuZ9hGw5YDBmbSx",
  "key19": "2bvVNfKdVzZpokHycDmztxq9yUgvKbJ3PQqaLp7eroujxzqXDz7RwhEEeULyFo4Ks6PnfNxmuUiofhgwSAf6uMKT",
  "key20": "3o6izo8Cwxk7T9HiwngBPWY2ELhS2v4aT6Nzd9z8jmfFJyJT5eeJ257kn6ADFmhKZzopWt483MpHgTTUhEMWqZci",
  "key21": "5JRmsegQyd611VW1RHxz8bskP7da6uHncKRG5T47tH8tW1sp48icesV3heotuCKWDehF1KTMySP2vhqjmjAHhb9x",
  "key22": "3tU1ET3bGGg1BE5hXqAHE8ZjjErj3TvUAqvru5WwUkUaH2vtD7z5rVxZAWUHhjK5g1GwJZBxu2zo62ZBg4YPLC2N",
  "key23": "26KSgSfeJmNB43KF5FzrTFTvHwBRbEvmeeqvdqBamKV9rTXS16ro6UrS77YHeHioPMBEsWN2BoqZs1gTwVc65wE4",
  "key24": "5XVwPKfzPE8aZP8usTtJ4LQgnEhWQHkNHMPbcsJNpT9taaqYv8azWA7u4PVCPy2XKbHZw3dwkFiFrinKWTgMYdVQ",
  "key25": "3MVW8fyB4NcjXYsgmkxuBGXvLUFZaEkmht7j2Lvfsr62GjRLbakdtZEDe1KmdLyGHTo76n9e3JPdqjJis7iDtR1i",
  "key26": "bf5m9m3rhwby2gAYWydayVfr7uAnDxdNTiapz7yVFRWCTtyR3tqCLPRKzunaJgXCER4Sg2x3FXjThCc2CtoSeB6",
  "key27": "3j9XTctiaDmBYhCpeTfpHnnz4sNYy1xdUF6uA56EHbenBfvTi2CZuUJF1pZsWfCGu8WQcR7VuxQWs5DggzT688GZ",
  "key28": "5hCrUv1s9nGQybCAmSgmGNLL6kaSiUwoZ2Hk1BXJYNuvpfviLqRGZsKy6y2VvApvcgJes7MS8sTXwWd4tkoN3y9F",
  "key29": "3hv7kitffiyu8JWa5rLnuPixDwEnTVbLJXrZJ8T8EzWYueYtEpbbphQbzAsxDYrVHXdfM57AabAYMZKcAH9gqaug",
  "key30": "4aQkmYaFxPUwKnZHDRBH358KYHH961pceRL6CLmYNPGA4UZeNCpPPGprnEphHjsuYgvp3Kgq1EX1JfnjsfhK3nPg",
  "key31": "4bQrzBKs2bSQEdkauJ3nTqJuBCXzUMCQmsgvf37cLQTdoiRqKjCcSYq5bhGhzymPTfcYZZxwxot6xMgdnwCK8gZ4",
  "key32": "3KXnaAnaWN9SrgKnbZqXHgHtGt93MVRwCfcuwLxkmsDnJzvzADUC2XJaAq2LBuuqmwT42CQB54xqgP5VSbhK5cox",
  "key33": "3SUHoKFYT2s5soBSdf3ARftAEqBywXhyeWPNfSg7oSKgZeweqongo1KBEwzvRCtQ2Nm5GmeWhKt9KeQCJBqajg7D",
  "key34": "36jkxMLDCpSNCehw52HBRhpUYAhXDJhD82NvMLRPX5op9RBywvY1kG4ZY5RN6PStDpRAJJJZY3oKULS2JszaMvYW",
  "key35": "4JiDRP3pDb1LM3Sj2p5Yda46piG37LGUgiTVG3v5W7uv36xwepHczWVXacyXbepRxzDvbJuULzHV6gimM6SabmLx",
  "key36": "25Wif2Bq3hWdkxEfeWKAGf3k5j7QCnBmV882CW9KAeEWA2uAFrN72Kw4QeRwkQPj4RHn8ZzYnpVNPYVsXRfKxSh8",
  "key37": "5yYWWtb6bBM7sB53HMsoXUrt8U4erKGEd4GKBZjVohT2ub5oFoi12nWSPb2AdjDqkY2gNzsQ8x3ggPusFG7pSHAv",
  "key38": "4iG9kGyXi2WxfNi82xxzSmocw4QUXa8vWopCt3nRKvu2EnU4FWKAVyVjBJa1qs7ei9SNw8td2upT1VwF1TNEoTRB"
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
