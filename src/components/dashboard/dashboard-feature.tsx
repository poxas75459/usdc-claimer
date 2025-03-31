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
    "3grpkVePTSQzYVmXo8BDqMiBCF9G1Chyp5pF13CzoXhqa4ntqsb8fHc88QZPuX2ZoWHPcRdMFKY1ALfLiq4wwAHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eP98EpYhLDy3dYTHXRbWFFTjQxRhB6DWCoHVJrmqMxHjrkfo2EDwYoYMnKS1FLd7E3HQrvyDEMnwG8erbMwTthn",
  "key1": "4QMpWiAFa3yFfAjiyT2Ba7WCMfVwPcAjwAaTvGe39o9sucFasRn5vJPFQzMpsM2Y6VgRTE2FzF4ouQUJC1VPuQE1",
  "key2": "3akFWhqpRhEHeGwREYj476iFUqm2wnGV9rKg36sRSbPTK473aJEcijuwQnymZ2XcYzGk1QaqvceSi4GmfrkSWBKJ",
  "key3": "32qd8CAPAoL4sx5mpws2BG53upPQHtNUyxUXK2JWDRDdB9qfo3CwzQyJv2yUw4WwTXbUNSZSso7r7LctaXnsFkVC",
  "key4": "NkRCZCW6oNCN1tm4phzHDgtdjrPw8Frsb5mPd7vrv7dxcQFmMd3957JyrykQ6C2wzPRM3JYtwihgXPN12xEZuhy",
  "key5": "vZU7NC737kArC9c8jRJyfayLGbcYQFS55JtTXL9P3bwd2yauVJNFwcR9Qx7t6ayR9q9TnDzjzdhCbC7kuFWcAsW",
  "key6": "37m1BfjhCMKcuwVa29YXhhVP84iswxsa8hPW91PMSfTsCxwHYe6guDb1nGa4B2uwzraikbeqWBeHce9QWdwDHqJB",
  "key7": "22WwmxGUqZZRzfCCHUH6LABnHkGHDMbAZjKstpKSatf7uYgCjXSijHkXJmZsY7UHbh4pfiniKKg8JHu5N2uMBeCC",
  "key8": "2spLAFWCGVbFAdViWY8NvdmeoxXWevro7iUXCEAmoGvaNUStY7n44cDDT8i9ceJnRmzXS9WgNWL6ta3TssXXznML",
  "key9": "4LjHnv9camgnUeviunhqoWxak1b59EbdJH3nePKw8fWjmEn917vYG9uWqLk8fYfo7yVzvntrPacMyaC3GopLiT6c",
  "key10": "3L7whntG4sSkRKc9Y97F6ng4CFtXWBw3apcm1BBZ1SopfwwBjsSc3epdJsqurNGBzGyACgePTCMv3RCb9KvKMbLv",
  "key11": "4rAQmxNb8XX5zzQQAYtcWyTQVdmJ8qdxTKr1PedCZj5PkTaVpfnwUe3TEmXHwGkANcMFfXg5e3GCmH4P7TfH7Xaa",
  "key12": "3c4LwPwzXpijVXDwKJaLpr8tQ2cfQPYyU44DaxwUccGkejWUgeKLTzCXRqkgba6CBcpqMFENcpbT4o8k84Gg6qZd",
  "key13": "2ASBqPeobzQPxwmxWm6EvTfGeTo1rEH1Pt7wswM2bWaRKns6VmGr5RtJf89oHrCNSVF566WUfmhXbK3KVZXYcKWs",
  "key14": "3fdvNV116VUbxqGhtJYb3WVJoVU1MKiU8juLA3Ma6cYpLoWvDNMSnVCErMbQPdXPpTfg4AvbWAt4uWtq3A7bQaTJ",
  "key15": "5bMGCe7LLbC8AG5obNfKTKJC5C7njQr2YV2qdhkxCGi7HjhXChdy3oNG5KdjjTX1xG5bkVLh4RxL9JsVSqsZUNAT",
  "key16": "2w8CdPv1og1sxFvZxZT7PBFVJ3YU96zmk7xH4vFXNERRdkVAVVtQhhQXGApwTpbUTQE8iZfrpRoADaAkYseoEC1G",
  "key17": "36W5Vg9A36e4Rmtv2VR2oepGaTHTgUhJagtCvZjHDRGL95uURMzR2a1t4i9VckUSreEbAtEhpnwCKy494oroaYSw",
  "key18": "4p8oV2kuEVWpFrrYBoXRkBYJfQK1cWpmsPsbNp98D4UKez9emEQu8KCB8FpcPy2NwDTMftiBrvDfrTrVnpWUpwGP",
  "key19": "3w8Gf4hgATWL29YgHy3jVpLVUZEfvNaDeSLPcW4TXM4NLW9cdGEDcsgRuNKyex8kGVYud1MEQnJpdG3rSAyW6f3K",
  "key20": "AbyaY9e3WeGnX9Kp2KYazhSaGbC69ziVCmoKTbnPrYMVSAVcH4wBTF86HhQBn13qSgRKHaLaVMnmVFboCY9QdxW",
  "key21": "SSzHxcjYQsZakfmxqvGXZLhsaYPLC2yUfxLhsFcbshKNHdshGp76sjAFsKhDG5qA5cbhSMneKMXtvxFNgZv6sL2",
  "key22": "3GL44vgNGR1pgBq8ospTvDB4YGJMuUjAEpDvwXjbiMbCQCJeG6VsoVJ7P1bVwAu2N4aSayPcgugxUSRKSLA4UdNm",
  "key23": "58NKBvivzktav8WsjbotVG49xmCG6YFn93GcCtFJXXrhdC3MPa7mZcdCZiGEsV5EYQCRuWkuiUy1xhqi7g1DX52a",
  "key24": "4zYgW7jh4gRmdgLQBN1huT5UwDJp74EpKcffrDnCcu2djSX54sPHcCT5UhJHKHwg3BSM4TRxZMQ3uPmXCKKnnM9a",
  "key25": "4XX8BgYtWKhfjuwbdUu2GbXqNX9uZCz8tqZzcXr5ZFU8bgwF4LM6Gesy64BA3263PrqWPCRkR1FCTbncKNLxo8sD",
  "key26": "4PoxFtgfxcNw9iNBLw7ykfdmWKJcJmSQWEaF8VkrvEzwsmTonh4Dq1oZBK29RvGEV1mSMUp3K2ZfJTN68oMzW8Ar",
  "key27": "5Bh8mtKioY9EKpkm5Erz2H1ddWbYfF9moECuddYNw3v4J9ucK8fWsAEe92pk2qKmHsgzbHDmZMCUzeA73m6otFnP",
  "key28": "3ERVmg14nqxQHEq1fwVHgwsYLu7w2W34fpgWbXidtr8fevcVHnPSPaVyyztQYE1jJgU3mfexJN2KBUHuLcqy5fq6",
  "key29": "5wndBjL7jsB1cf2zAnEYCApAxmzHk4Ys773gh8vGH3aLswqwZog9u5hL8cxgKvTYkWJn6wH21PxPUrwk68XjueBt",
  "key30": "3PExSQCtvdQrANbxdfZQbdM4ceH6g6aC2ryBzXnJnge3WAvQakEwqPqWCGFiwJLciYAkpe9g6ksUX2R15JgL9cHm",
  "key31": "kJo37DnbVkjHn57a7N7KNNoW5RraLYanHL8FbP34o9WLwgjrEQy94J9u2ZGV9t9SpV6xP6tKxZdoirj55zgfasj",
  "key32": "5s6M9vwx6wDzASCk59JBE73njJhfFqjhd5rGFEfZQcJdk3t4FcGFw1sLabGSwgYfP7WFjoXUoMBd8T3zrUSS6LV4",
  "key33": "5jcxJQeGmTtB7tZtexGHKmvkB9PeXTSJDQ9LXZvY4hr248iFwknFE7REejjtGBmouaXEEQcj7oSuMqAgcxwd2r7R",
  "key34": "38WFP1Wk8RPedELNkJVCFvbNhMFXfchZoqcv3qghFxYtWgfPwMCxNo6QxTrFMTfNU31cxfsEgJyYRg8SQQBwrdq6"
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
