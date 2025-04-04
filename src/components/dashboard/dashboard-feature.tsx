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
    "3bwCMkd3TRWc2QsoHQRtgiXgnzTRqbfiBCPNm9MD5nPoXQZ7YNFxKMF2LBCopgpyPGViPR3mAyqEGc6uj8JAf2H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xArVhfyVVJ2o9d1uztrB9EAQdqp9z5ziQXMpeeAfc34msfKawcPK7CEJVBof4KZGA3KKRFZDHu6dwKyzQREN5cH",
  "key1": "5LD1SdeWgN9zYmhRgDNzRa3h2zapsFjx2SvdM6woReyH4PWZkv7G288ZFogVkdjbgYdfpm7wmsfbahD4YwJFC5Ka",
  "key2": "4GPghtVdyjLs4jCmr9z1g2KqodXRryrozREnymPSqAquQhw7SmZC3xXvYhJLEZ61yRGBTeTdRpsyNG7SVKyYq8tR",
  "key3": "3pKHmWg6hk4gy6VPJFZYqbctX5LnC2ou6FS7VXh4iNTTDLxysHzjKPyQa2eJxJqpFPVuvZWPXZAZ39KjWp5VaBuy",
  "key4": "xfD9sbyHkJzNjcB9b3kFhQFjAGxFoNuVN4TgtoTaGKoNPmEJLDM1KkTq2V2yhYoLNFrmxpmDDNBhGuQcpL5SU1T",
  "key5": "Nxt915kFNHCdm3CRsbWciFSUyeNsXopJrKQ38XL2KWQQyadNYhn8Gk6qde1aUzdJfz45PQ95zhjtN9a112S7Xw4",
  "key6": "46kGfKbGatLmiQRKtZeYjnmTr7UWdwPppiaADqMvCxkihoe7uyoKqXYoaYKVgFCCnP4T5pGoE1TF6kgk8ASztFMp",
  "key7": "37tBx7hH87yikEST6q7vCveoTiA59cpiMP4dUCTXphwo7GY2DvaXf7AtKsC4zDz8Xjq8T1nvKNCkA4ppxsN391Ah",
  "key8": "5T7eKvupwrgegmwG1xzdAvRoSDDwWQTnGwwwz2tnV3fALvmTnPPA7BtanvuNFkUUx9ihvNvZXinG6x87NBgziJew",
  "key9": "2hGtBTQwKfDYavN4faMtDxeg6r22Uh4wxVSikPx2zH7sNNZnBFCVKhagajs4HfDnvT2EvqEUBbSuYMCNxEzrMx1R",
  "key10": "34mz6yvSTNTvpqLaPt4vso2nNCABJuzUcoXXB42ZRFsLXHT2nm3JwP21W9GkeqyRc4JnfW7Ym5Pm5DVN5PvhAqau",
  "key11": "5RZT2XsDEjeyJ5Nr8uceKjU4YWeXNRAFzdWWhpdwJfkUbgRhxeod8AZJwfAFa9eyL7dSFpfdrWbHUAQrPqZxE1FK",
  "key12": "4pnYFAjJDV7TPXYNBZuosdz9P5oyc4AxcyzHB98iykpkicB2SUJr9PorvNMQ5S2axFM6Q7oZi2tRbLrcNZMWGYEv",
  "key13": "4afpEEwNUNmedrrb5aPqZuX7Ukykb7jPhu3gJjxBsQ9x6f33WtCjmyJN4NcCKeic5kEpEjYuKeTCFpovYN4JEYKz",
  "key14": "46Fv8sXgdicUmt8uj52WPLPdaqATKG41fYTSj5ZYBwX3WdegFHmo9FN6UJeqJzhis7YTcYZeb6cRWFfwCkYGRFnC",
  "key15": "2E6gMsaiSAeM6SS5D6s2ogXmLCgDdSH5xobfR6mqRwED2whrn42RfCb65g8E4QGJBwwbd5QXjFZLBRBwe9wvv7ud",
  "key16": "7Sq8e71KWAQ3KttjBeqZtfExHh8j9oSs1xV6X7HsvdfMQmPvbRB4bydc1VWY2emYo9nYDXc2R92S4uxKaHqrKJD",
  "key17": "5hGTLT5aHdW7FiB7sFuEGMGN7Mpqz6ZsFF5a7NT89udf56qhjUJBMMWZfuWm8fQ8Sobfn6S8now6BQ3qEvQ3NAkZ",
  "key18": "4UgADT7LdbgvZELjugoRMmLFjPKefPLJd5yqt68aQ2A7ebRB7jSW8HxNr37EVc3LfqJKyozHju4pSsry4pZh35xG",
  "key19": "3CMn6fbk1WijbReP2dJrfZCsj3gJ77MDq1AsCwZg7ag3ZiTYqrqnniCsmpB9moPKSoEMsTvT71QvED5xVv9wd6Qv",
  "key20": "44JeeKDUzaHwtuh7GK4ANmB1xq725K6i7mMnn38SBfhx4eswhJeXMKTGd9utT14NK93XtFLDQCaMkz1aFwgobWes",
  "key21": "4wSYrvj1473hpqALtWE4KNBdJrBKHqUbedWg5boPmT6S29Ex3mYhZfR9LFTXw7XydDM4Mkan7kVoAh3J5tSy5ykr",
  "key22": "5UDzJ8fhKJdseeSSYQzaxz9s6yPHptkvmhx7dQu8jh5a2bQpf51XwShdiXPHEx8oWpGe67GGcaUuwEqzv2wSY9Yz",
  "key23": "2Bmboz2fbfW6aRLgyNihJN2ZaYL8cHaGkHrPesqkvbK9KKfzBnnyLQzhbN1dFoYHdk47GPcoEMDQR9JgwHBHzb5q",
  "key24": "3XpmJZs9CjZrN73vQP4etVkD81fSYbnt966HnFFT7u7ksaGt7g4EBRfAcEwHwMJKHu6gx5QRB738gG1ejuB17s4W",
  "key25": "4pnmyV2fxdry41Ea8Kqqsi1DYyhKZ9NzagKvh6jZNU142jkCdtWK3GQtFGtBpyG7SokDyNrbubxmRpZxnMjEfxfW",
  "key26": "2JJJzpApNKNKdnzeU5vCBGvyGAieQ45GDJQ12Aio6ASo8FZrMCzJxgnCXXEn94CVCs5rSWihG7DNssRjARYuoti",
  "key27": "3mq3SrC3HaBGr8majHr98UnGoyjD7ZAJyBw3TpKYZsoAc8b1T65HXqcpfsf5JkKygDkKgELZ4AwVxiDbVfXnFY4p",
  "key28": "3desBWrAaMXRo6BBpQieuxADdxZtULgzL1fdRUGNbExQCXTEir8LFiskzjyQGXY4dhDRnj3UqckJob6Wnk5yoit7",
  "key29": "4qLFSMyTKjk8dEX6nFrSdDJJfFCKxiDZfA9X9P92uLQFD45bqmRHqxP6zKGALHALaawGBXXCM2h6cbuXw2dwno5T",
  "key30": "2uxY3ZgcTXvpLDFBC1NoHpGkCGC2KX1ReYj2dhoz2EuhwHamK7nQeysUj9gwsgqLWjUGwRmGtuM9P9kaUwtANEpx",
  "key31": "4FLAVLfMWeUCCfKt5ohEfsU4RWttzP924uya2KZkYWMYjNboSwBLnreZuk14YBkXHAygFN2LuN8gJQZotE8m4Yd4",
  "key32": "hZzN2HeztDQyX7TGvZEnA3TtujmxwMt6sVKLeTodPbWH5oc5U9Jd1E2wkLn586Sd3V84LvkzYruWAiMT4yiJNMJ",
  "key33": "tqyrTtguc6rhpvkAfRiySdixcR4PUSoJHq9AXerq12UiGxJttxFNSkpfyu1hm33sQ7b2V8oaq1Tb6BBXUu2Snre",
  "key34": "qAkju9YzsS9oV6zNhhuwunqEDswi1gfAsNEd5NXx268bC66X4Yjp54r7sWWaYzQQtHrESrS5V8muSxg8aeNXGGv",
  "key35": "WeS9hA4evSVP9WFnmwJMxvYmefADJAZW9dfVFJ4rCmPgs7E6wKCbbCc3McAAKBPinEhvcS4LgFZEJUN283fvBN6",
  "key36": "3SAhd3yg8aRiVzLj9kG81wsE2xdGxzjDmS16SknWnWHyo6pJeJqRXDDNLGUWd58YnCaFgxkTwnCHBFyDNdrAJGE1",
  "key37": "4gN8ULejc4Cf1ZmfhZtqWD1shdrrTwfRVaawFyeT2ACFhH9yAEzzgtYjT6mdDj7zw5uExk1L42mRkrJZVHAmBMnq",
  "key38": "3Kbg6SfizXcjqXDmUoehmvvWFShACPM5uCx2njYJWeLrbjWBdtxWSikKnCBmv4EtxSQpSNMDyNioYBVPtRtbT2RG",
  "key39": "2zt7diK5y8jgWWLZayZQLtNfuXYTwWVGSN6aPaMp2Psv1nY31Ffe7pSGVRtoKefHFxfbZd89q1JnKs4JDA1pARQy",
  "key40": "5FX28YEazQKHbRq27tY3XsaUmvzwvYVALvN7BtbLMJfkLrSaZjVQRqm3VJyBuWR5rq1kLgAtLk9Qd1DAK6wcTg8f",
  "key41": "4wsQPXHXZtHJLpfHriYzWZz5wXn1Nfox4VLCDmQcKGvgyFboQUdYQTpKkBjbwXM27YzHB5HdH75rW3dp5UtpDZ8s",
  "key42": "XbPsHKHmCjqCg9Nv16EHPasz9bnLS6uf4AmP1abKkXaUKqiy2kutVt9R6yXkr8YAT4YCMLuzyTDzfbP91hTwixD",
  "key43": "ivp7vDFpXEUTbWyTxKpB2pSJK9zAacx23xsHesLCTD6PMbiRUHEtvVtVbvFBe3JCsdtfV3XXFEKD3tedbHNwp8U",
  "key44": "2LPyroAX2KDzFKBoaN1B6e8TdY16uBGPRPL2BqMhU2ACX1fAM7F3hNC4Mw5qyzrg8qf44Byh2HCga8f9kfaHDg8d"
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
