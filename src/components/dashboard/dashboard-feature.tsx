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
    "4642jv2gN82FBHeaiAhcvPyxeXmziPsUgMzbPoSHouVzBDJNjAtygd1i7yJsHdRCy2Cf3CA7NHBSduRYFCotPTRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4LBC99ipPTpAVPfJU2NrWsB6yzTkDQi7JSW63YSMYhVUmV1u6PcM3jV358rWMvj5LnS1aKHnmDSgEotZvfEqQX",
  "key1": "4tgxqoDmEE2zkTnNsTPmYSQU5x8EMtPQvY7GzTGSUni4uGZ63iSsTVcwNfex9zwhgGrS3mNrk3p1YkkGwFs17dRe",
  "key2": "37xMPj3s4wLNuURMMgG2KQKKvxSemAucGSYiUkDwB294k9TZ55wqXi6xE1XjSSperaw27n7b7j9EwLhRBzPUMDkm",
  "key3": "4CTDtBTzVmp8qLB7gEoKJZTK4XK4EznfW81cm2sQZ1cAo43XDTo2mq3Lbh9uL5Ejo2CSVN38pAuK9xLzNj3wCjcz",
  "key4": "2sLAzDnu2U49tSPnU8xnwWEbGGwrYhmSjEsPrQHs6x3wfVYTY8FP7AG9wPnD26E7Ho1yiNTbkogogLaEEDnJLG6h",
  "key5": "KcWKpb5c5BC3AgkDjjCN6p78oMmxLeCap7SoMgWYyEuMTewDZGVbXnSAvJ4xcjAPkZpLGsLDrSU9ktMKkKMq8nL",
  "key6": "5ApRxPa1WbvAEr1H1zyDRHkqYbNWx53o6z7hUdW9X8BZdD1ApH3F5bJtJQhudWG7w8sa857rq1nC97kNgfrYfVam",
  "key7": "3LrYy85Qk1XvebwWtU78xsX8Jbca7mGXv2XZo8oo8rj6n7hDDY3y7amZnVxkqdxtfk1hy4zAVDEjBKkswapwqWpw",
  "key8": "3xGeV3RcDumcBFmGE1tsZo5gNybwBY4cuw3c2vt5ic8mfdcBzu124AbrBUkK5f1DVgqqAk3VWyfnjpeVm7uYspc2",
  "key9": "51FYrxXomecSyBkHSEmn6bFYdVTV2snBQUviRj6JBm763Y8W583vc91XnoYvSWJT1aW5diLMSUZMu9gvHBh9pX3d",
  "key10": "28TjRJEXodnSWNas8qtCto8VKnwXgXV5DCp67qEFoShVFYfWhHqrJybAaastv4t4hC5DYWMhyNLuRJtr8sr3uJpi",
  "key11": "2qsJWBsVYVss2uM4mTSkZd5CWAsRx9nZiLFTaXL7nWTHB2s6xtSbsGrxgacoyiPbfobfTYAWj18FM7Du9LSCXyJS",
  "key12": "53hG8GL9eH5vRGgjh4aFdt4SFSkHqVCBgYaNNgqR2VstQAV4DqcHTqEpLnrY1ALgjXsNYCNZ8zB9KB69ZgZyrxJs",
  "key13": "4U6WRUk3i9EqsGyRmhDHToF9AZazp9xkmN18Hs7QHbLXFjz7X5SYapuykWDagmr2Zu9rj48vEjr455X96qm5ZA4o",
  "key14": "4wyyyohDWGKVbC1EHZpkZMNmFasNaYf9RQVkCcpSXYjxP6i3k71ad8C5kKKm7AcMXR5ACApqLVYZHzbdEX3JFjJM",
  "key15": "514faYyXeZxHm49DXkCyPYpNYAVjvomMWNieR2K6156zqyskuhPf6KxurPXJiJXna4uRnG94tqsajoGDqTRW58Jw",
  "key16": "3ANirh2znaULb6yMuQL3x7uovqDrKqL1AZE8hsF8WwcsqGGXvxmm9tMsxbYvUybWZ6kKKiP7kM7hy8pKB68EpqBm",
  "key17": "kyGAt3tACrhKHwXj3LJKre5yuajzAR8aJBGSZsbCfFVa61PdnLfV96xtyXXfYWVrwYspWa9xtUZGHgFMicneYZj",
  "key18": "2RwX87FtP6s3HYSvkHVtQ1LG3jzCqGXjxx1GBER1UFx1rByAcpWguTqUgbRRo91RAiBK2ZVThEnqtTewjaDkYrXV",
  "key19": "2TEtxn3me8CJ98Qoreqz7aGrd67cT9qU2rVsP2Rt57uTJ7ktwxpu3VpE69ikR46zQj3qHbkY8Q9xTV1VgiX7ggR3",
  "key20": "3kSDS5hdN6y5vxug4z72jM1NEnsAhHuBQwEqsDywMHoKdpFAGQujz3ZBnoziCDJtxhcNxW9pjvsYVG6NbmVHeq7T",
  "key21": "5ocWukET1Usx4cV2aJu7CAm65bcmBwYFREwgBtvMa2yx3dYK6LCWy1X3NCr9EAc2HDrJE56EKi6tTtDQjhoNKjAG",
  "key22": "4o1ngoCeiac6d1r8z5fn6kqS4V2Uu2CQVy6x5E9SfXo2cvEwUF1z4rjga7Srn88D2cHQE2jtJxuDwgSrShWEHoaM",
  "key23": "DA4mbZgZrmcDNVdM6J7DnNk4CrzZJ1gpFBQv9VEF3y1HdDeMeGZbFYnMVSnyg7Yh2PPEADaJqEvHfBiw3N9jyqw",
  "key24": "491Cf8VbJ8b6Z5XqjGm8KTkV82pQg9nhB666hDjwQDA7Wy32ZKknrZEYT1XNQfgpjEma6Pzy3Dmmy7FUZCzccsCi",
  "key25": "3z9WGxDtknF7VNCWRAdJ2pHhSHddfMKzPfuDeJUWHhzvmpf2kupZTTVvz4P9rid5XtofLdDXDPWLJKVyTcLDWUGu",
  "key26": "4GVbWkbxAJihV2GG5KA4jiq6MDBBwcCQqirpf39qVVxQi76wkz4wyxpJRHqMnacZnDWxDCbqEdjJKnioWdz43nY7",
  "key27": "2btKbY447KpbLUhjgAhQSWmCLNLnWHC12n65YXrko9ETwFaAcPsiESCP4ZeoiB89FKL8CTXgTBZzkykvhidWU1G3",
  "key28": "4VckhamV36wkHUC1upQQsmsWtNpEp1FrbQT1esFut4KzMzqf7Vr2wHfdH7LgLDwmBwuMnixaCN2SPnmgdFK33FP1",
  "key29": "4KAta9RAKP9WrPfe6KERUcuwkRPYYQDzvPSdRvVa3xeahVP9snzS7zApasi5MQAT639TEZ8KC7KU58QbCHu7umV8",
  "key30": "5UZHAb2icE18DuRCp1r28deZ1L393jv7KNMB8PHccwfkJ1nxEd5uVNWmWizriG4hEZWH8gD8yijkLDEx5qunHgzv",
  "key31": "5JgRo1dnmM2nwnPS5DopZr6n7CSHniCawVKZc1BhnU85rC6JX9XfDUsAavehZfSd3p91nqQnxKMSecHJnZ5cVL59",
  "key32": "42ADe4krZkmvHbWY3FbpQB8XE3qhmG28rZKw5k9cH92oX61Ej8MqXRDD63dX91TrHvPi14sMVPQU7JzT6WSSRZYF",
  "key33": "4UfKXVpoWZna2RD3qRK3M6a1JCcgiapkpnCvzWXb216c6dExbzE35fRRGjkvu9PugBTx8swjoZZySwMtN3nnFdQp",
  "key34": "51U8qYi6eCURj1th8FAgpaRWMPdWYLnv7eB43Kqf8DfwdrUvkvtnY1TERorHSQebRZBzAJ9JBXNdcrKLpy8JLm2M",
  "key35": "3N9QDKs94WHBQxkUcVrQKYiH9Lb6RB57iUPqTGXW5qKpNZFpVSpL1kAtVSWejb53cPBAwT6e9ZPZLuqJorDiM1mY",
  "key36": "3ER6au2fKrEkRGA4DNxJWjvML4bU1hU7rR7D3QYNp72G29RZoXChRS6icgJ5YNrMEPb8kNEcPGiCYBVnG3gRqMEK",
  "key37": "2TXz2xupJkUAWdQ5Ho6MTKJ7YDUAxKynceBwVhGDRq8bAnF1bjnPS5ErK73c9FSJJ9bizHJ9XzWdRQyZLJQZF565",
  "key38": "2F7tE8G34Ase3AhbAt466v5HcCQDDaWe6SuW2BKeUpWbDFcchKrBN8fr58gsMuAXiR1jBoitZveXQ9Yw7JRUyYsP",
  "key39": "5gVyFwee2AudwX5id8JdD4mVDN8TCgPgJ1b83rcxtLoz8a2U1hUoyMinqQwksDuxF2PyLG1MeyrN3HA6v9RWaSsL",
  "key40": "4z7UUzDKvgWggG8sL3FjGTbDxSnrpDFExuk2oFFnLuGCidmmBbn9H8tvh7VF4B9cq4WeozFRGQGgWbTfhCGfUuhd",
  "key41": "2VsuLkXN8HoZCTxWm7Sn4eaFLEktWdyb1CaEgnWuo5iZXABFztJqjr5ojWf5YgvN4CzDmLDgHi8rGUDrv9J4Pq7F",
  "key42": "3FbYrMJcR7VZ66aFDabPF9fbWnouvsqHZdm8qGRr6skFYpSiRzDjbsCmeugoA7xQsyxEmzhhJHFhgPB7Zp9Ku1XG",
  "key43": "3jvSWgwTPo9aKNfeAqeJFhRgjQ4JFQP5p1AwoTo1dTQq5DHqVYr38LrsSUzR6WG18D6CowswVSfEC8GL8tZwxUgX",
  "key44": "3pfC8RDsV3FxyppUSC9hMPvjBV2JLhbGEu1ZxAEQ83wq2qRZmA29upyWgnMjJfceCLr5ncKHYTyRm7xMFMhEW3v3",
  "key45": "4wWYjBL2wt4N3qU7jCus219sgadeEamV9ugaXfxjDQxsDG26PiHkCrVA2FDTDc3v3GVsEpAs7AFwopKySeT95ZVJ",
  "key46": "4g3CUgQ4Potq6s72KcE6kXhnwx76dAPwtuXatQohYbsbrDQTqP3A82Tj7kViXhrTXuLZLRqzgMSUZyqPXFzFLfCH",
  "key47": "2eUT15nf9SPittkgvnPxpLqWA3RHnjx8sFYVnmpPzrQjchBwu2Y9PdiieXUJvBANGh1JJSY2wYsjxmXtDcVG28uY",
  "key48": "4GWJ1dKPWhGCbJFbpA5fFUCwyNH3R59XJj65fJ3FCi6H4vEAtCd4FxPsJJZAoSHmkgs6434v2iYmR5fCU7HD4RJ1",
  "key49": "3XJXNEd2mLujBcj5iodQMwnq4zy1fZCXBXYZ3KHNXTaDxJa7ntewMbga7xfb853AAypmyaV1uEhku6hWPfhgv1kz"
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
