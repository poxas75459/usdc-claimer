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
    "42iEAKxLFZFLsaBeLz66ZnthzEySiCu6JMvkK3LGHppC2gE6gACHeDg7GbWC1L7TUsX9eofAka5y6VxXoKSpaBbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYRF5tvQCaP6V9XkTxoAC2X3DKXi3XLdew83BMyyUAhi5bmr3sx4ZnLiUB2DrRyT36kwq5836DcAiCa1ZJJt4qP",
  "key1": "3J1TE1hPbnrY8VXQL6Cgh2wzx79QwBwC6NUAXocfNzJeSDwnVH1uXMBQ3VdiTx7AMtXyd3sxghUJs4Kuj87FJL4F",
  "key2": "oeB7rndvjpEBz69vRVCUsZHpBgJuQuaTG3iBrFdoDRa8bc9E1Fy2WcoCnPoBoJD4zjKaCTYn7nwXNFa6h1oWsUy",
  "key3": "3NMTamcgADLErNPh3vagSMomvz6fkAb8JpPJsbCR6ZE3kkdu5KiUU3SrcnyecqcnGHuw778sVYwwUf12pPFFiNQH",
  "key4": "5dZidqZXuSoPuwRoNrD8ZKMzQ2u95arEhs6gFXMVDufJpTC8LBzGUHx1QnQMoeiT1e3fchcm4tYk2mVkLtoyWkkn",
  "key5": "2ePY5J3iSGi9YRJkkFL3JubnPiXfAL9DDRECrZGdrfHDHFv5g4ATYk7XdZW8E8d9YYxEXXe7avbZFdeVeT79h8hD",
  "key6": "1dpxoZxWbhPCAkj1zfuYu3U6wLGxSpkQCsaP6kfM2XkAyv8q4QGWQ97k4XxYg2q8Xkc3wiUPDk5pEhKmYGqd9BG",
  "key7": "2YxWBkYiVWH4chxgQ8T6A36Ly5qp5HnoBp7ggF1kzzSzcsXyQ9JsdRsQySu528YgXtuu83x7JEiTR9oFQN3FGztN",
  "key8": "yy4syUH8kpQnkV49LvXvPnh9sNZc3B6LJ5pBdGGV4jwMusagYEPmasUrJ3GYKWkvaZhwh7iPy4o28sxGPLqyL8X",
  "key9": "4qTd8MKbXoqvzVnmwerK6btiVKRoKgYR8fr8WAyLUXzVZ6oQjd9QUeDrgDpf9roNZd1iq3BDt4szYzNcFt6br6BQ",
  "key10": "24UdVagKA8rtVmUrvyBSF6XSc2jE2iuQxoqzGg5FTrziamrZ4u6nWEM8cDpuYfViaztngo7kTiwyQ7hEfJR12qJR",
  "key11": "5w9MvpPnC5wwLMPkpYqUW7jancAez2axNamzzYVRja9iJ8j4nhNsdvnhZFK1VoqDdMFF9x4WQwJwUoTovvSV8sMn",
  "key12": "512bypPqHyi1aLToD4XT68Yw9Aa8wiyWDRhS43pMZNbPTqh2pHYsdLoWbejtjrcQ4BCJrXmLaocMjTN9Zmrv8oJX",
  "key13": "WCEhjy2K22rtg6Md9HFqhHsyyRVTXJYHbinoRuUr47z1N4R9CooGGdZzz9QcJVMQo6F3w3tPXSis6GkTRQcrmJ9",
  "key14": "5ekg6MbNS3ADt2tSykRPG3EsfiQ1VG39yZoxmwSBBAXBNM7v7QqCHNCnGnC3vGWohGDmDuYDwGVnfEN2M8vGzXuP",
  "key15": "2M3Uuhf9i8MLugy7yWobhcpHUpWPnrpD1vGXdZMovV4FZpL33D5CKqckiqu8w2kqPfJTooH2iG1qXMRc2Q84ZRoP",
  "key16": "55t4DtwbLCqP5EPCsWuGgXet5H2S1cpnZ7BYLq9DhdwhdZudkg7enVNL8b1fUqGgmHTKDhwWbJszjRCFyMDvNuAY",
  "key17": "5fiXDcq7oPUxut9omZZNhJNNoyVvLHaZNJcD5ymJZ5Hb1rKFrEiC6Uxm9DLSe1UxZG8f6UfJLYJsCUYWmvgkN7ST",
  "key18": "4aajk8D8dAWAQRphHHKECjWEran5enLYSRNwzZmGQJDkjjSL3BzAirMfxbv6Zn8YCLfwNtkkNRqKG8dt85cVP5to",
  "key19": "3cywCRL9aBPUwFetHTx1pXmxZZ4fydnQWz1U7xbnvNTo4o9x6XGv8x9SWzrWQXBsN1c1vRH3yAtYo2fCj2nDqUAF",
  "key20": "bBk6qzcgYSunNEnYtrkEdfKo9UgmJXhEnudW64XbhQ62jnebVFNQTLak6pzSBcjd9JVp56R8sdMEk5ZeYtCYWkv",
  "key21": "UTyqrYjVZT1yz5ktBnMtNHU3jL3j5RfPMTfZaaH6WQVRuAAPdT8f9QWdhVtsAFbRqQuUbjDzG9jE2mA47c65YY8",
  "key22": "45msfzfXDrWePghxJagweJJeXz5U618us32CTbSJmMtTgDtdGbDBUk3UPdeRmSg3nG8xdshmLTtAyxMbARtBMGZC",
  "key23": "2vhJw2UeYi9Bzu4UbRLiBWC1askzwY3t1PTrVybhUZEiXtXRBRgsgGFAMk7V4w7Nwk4PJ8CBXzdSD7wNoB9fKWTT",
  "key24": "4RDiKVoph9HFfDbKvKg4GdExYpzzWhd5N94EzzwhFCZBrfAV8TEDHv24xNh2WTppcYQCTMAPzZYTtTpDK7CkKcbQ",
  "key25": "2bLUprbDKAwwyqDraGxRm7YmaAehvsdTLKBTUKS7QYuZzvFhnBBx2ieSe38Kqo6N68mDPVLWktTcZjHne3BLYESw",
  "key26": "5ZHbwnxWcZSxgwe1tJ9bSQHQ7jFC8FheY2puVkfewnDXpd5yL5XYHKRX9aTK6gBrU4w8QCZ7tH8H5Xo1JkrEspYc",
  "key27": "aa6sySLyrwAeuvXLZbo5VwRgWJcrF5RFKYoYb3MrWTFepWC8QByi5QsS9C65P5HooCpfcxjfgsep2WyhBEBNPXu",
  "key28": "2sffVEWNrqv6b9priTycc628Ym89kXN2YRVKBygsEboEWTUaeZos3UYkj8RUB9PyJ6ZM3dyeYcQs39kdmJVe9Yst",
  "key29": "2uDPXUDzwVsDp3rdt1UyDpFHbaGBMQtdGntHz15SqaPo5SN1k288ZetnepNxXQuBLSXo3vZZ5KoQxi2G1LG2Fg7a",
  "key30": "424CL1dkh1ww1WbnxvZdUdCqiCFRHUKF3HqEZT9NBycYjWsN9BjLx4p2b3wEUWfFQGK4F3UiN8UnFzxyGiLVTYyZ",
  "key31": "5t9nFaVKv9CL6KnJwarpuF7iT9MUMTVaUCfV66WwDQGsda6bhUXHB1eJGnRFWnJy2UXBLY5P126Ac5rBJt2ecYJX",
  "key32": "ij2kmftC6JocXLg2HkWfDgFHD8FTw5RhJhCDxFhiYMcRvWKtiJM5Gutr888hgT3Chi2a4ShhoyeTXNastpyURME",
  "key33": "2fopawPRVpYJtSSAtrfYCdwywcxBLgtoH1iQAMrWf7LsV1TkKrhquWMCpCeoAiCbNWeyZr8QkuxrKrSMfjHGauaz",
  "key34": "2z49HxZnCgFoxuMJp3taN4H3H65RfQXsA1L6SoZ25K33SFBvHNW1ygkzPEcAT5gTbRhVTgGSPvG1M432qs3DFVS6",
  "key35": "5Z4k1ZbhPuYXDyGpDrLFDWseWzYC22Auhudsxptuo5kc42qzMqdUKDDEd2xGVDHq7X9jf8ym6TGaVDkvJiA4aDR7",
  "key36": "4iojnbfyLCWJfutB9xJ8TZGiBfAq8QCwPedQkySJMKYfLhWEDZvsHy1uoWN6Dj2CqUYt4tJvoZRbCbWb47RvBcrq",
  "key37": "2QyUQcGHRCm8xE5PqnC92HgV2WYk1AVgVXuShKM7Mo8wvkoh1TakCGDacTMzYofZU7JLvrntPB6BjpfXjU9EtCo4",
  "key38": "3RxJ3rMCzBhbKE5Lop6CxNJYxrVMfqG5m3oEQf1vuHQt1efjVFJq7yWBP9xYaKn9NEjToL4cmzQ8seqGN5yYvpNK",
  "key39": "3qT2PbtUuUCaBfRkhwKpqquD5Q14gTjg8snriYBvU4DhEXy9KJ1xfEGcTafQv2PyGRN1BCV5eTGtB7DjNt9ZqYPf",
  "key40": "3juKNNHR1MfQ1E6JMFcMMq42SacRrpH18DQdkdnbAcojkfBXeTHuW2mUc2TYHbYvQUTnJy7fYZ5F1ycnvQBrCZbi",
  "key41": "5EGHH5NxPRJ5iWKmws5FxtjrqAhZepmJEABF9wBUCJRCLvRHEaZLZKchBGHce5sgeupw9fLbmdgBpxrERP3jxiWe",
  "key42": "3umaZEKehT7XWA1SqsGrZdtN3Pa28FjJ111vQ6d3kkiDt14Uuc6uY756bakNKK1BWSwK6oKn6ncBWbTkK9sFUZmY",
  "key43": "2HV4xocSSXVjUnKdGJYqNnL3bpYsYAtYtEaF1GGXYtNWxdgvso7wK7beypMDyxx6UvcEmdsHJjvDxPzpC5xz4wf4",
  "key44": "4AeyXwPNuisixwSHkA4Up1RrVBGfmZpCpcL2cnommxRiMRdzaKmV8yJQWxo5wtXMiF45Yc1AYuiUtUHPJqFQAEX3"
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
