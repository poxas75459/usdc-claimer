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
    "46yEjo3cGrYH359WVoCstbsYWCKa4FXWTFZm3rV62LnhZ2KU7PyeSHpDgeFAes2ndm3rC1XXU5uCPJtaGQaNTK8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2efRw8Mh5R9iGPmJt2eg7GXRqkpL8JUKPEq3DT6D7rpHJZm2YDMLzxnQ3SJSbXttKnvi14mY21JrdJAijuJ2644m",
  "key1": "3Mk4eTwtVgFadFbFjMPHkpcgvEhS87Hb8ibEorQJwYxb1nzbGTn3Had7gZJjaq4tG9s7gtEVpXVscYobAnAGTCJT",
  "key2": "2QTZzQTCMvg1KAaifrDwVUNSLnbihxeb5QPthAdwzhAfppWDpTJgxFv1VCa4DeVjtARSWfCXiu71vRX3cNbBmAHt",
  "key3": "4zzaK7firw8Gx6LB4vVgwBwp7N6VbjefQbheoUGiRnUrfHd2QT5v7QiUvDReo6B5afoUvzbgr3Cm8huWDEdRse5q",
  "key4": "PspvenPqSrFF2yxJXkxMaHhs31DPrtbcerUt3iyeTZVv768aR8FPtydzjgyhFEj8SftZmWWazVAv4yxvDczg2vV",
  "key5": "QMCugCbhkDATnzC9sdGCad38iHma7LStRWGstUPdXhhPZWu6kWZgeYgJ3yVWzy7jZQiSAxnzdcF8nkQWEu7M44x",
  "key6": "d1BTuqY4DTdqW14qRpPhVc9uXSTP6FMvBrP9PT1WPNLFwurVNBwt9ma7ABsDuq3ZeywuAwamCk6gpJaFF3wD2Ba",
  "key7": "3PX5bZncyv7c78bcgQpNSDuUb3fLDPX2S6Ws83GALXGMwqH5XJGF8a4d8iPudaBt7bXgivtiYkkDk43ZSbrzPe2D",
  "key8": "24xRDNX75MsGGGHy6oibfsrxWQDDRDbuoR68vzbKMdE5KHQscYkPDQTDT3NHCfFM2VBKm2hHz6t4cHA3D6bbTT1T",
  "key9": "2jzgt4juMMDe6PHBX8bjQx2zbAc6xx1dLvfNv3WdZKi3CRiaiUojkxK6fkox7fKK9eFcdk5Jpf5is9KLfsYQtx46",
  "key10": "2n9LER4pCPX1y774xhezyscRRhWZN2rWTvx2ThNpovUpbWL9nju2x9fCkvqRARELvMDa2quuxTMSaKmH1zhNeZfy",
  "key11": "4NcvQSe5d8vcHoYQB5mM3a4hUjuwyasbN9taC8VkBaJW7j6AgXt44F9prB4xEAykLRTtvfzKxJDSwpdrF4m4PKpe",
  "key12": "63cDrkuep1y61XgUCvtDFSgo4xtdEuLJpb2FcEF4HgX5vomEDy9v49RmQahT8JRhVsmqaQCudjhveQsZH7jPxx3v",
  "key13": "63Zkh7ndvj6rvBnY2amdefWY4aaEYa4SUNgKuKxH8AKgZ64HdzySXvZGzveqrussBYficj59i41WrfmicHopiMT2",
  "key14": "3pdbUXx5reJNpTdFx4Wxz3YPRfE4qbY79V8yvjbe37wr28AVsZY5JApbrvamdRZ8cJWbp8KQMeNcrxUJvSw53nN1",
  "key15": "4nQ8wqUVGLv3MFxi4EW32VXZZ5ZmaEoj2EzKEPHUpNjXHwWXJ9crCzDVDwyCuWFMjYZ3dGZkrdVe7W4eeVe38Fqg",
  "key16": "hKcfFnmQAaKGUbxXUSgSVSLJAJviv5X6yVD78LfxzXTzRZs4XBt8zq2KmvRoqMsJmwgEER5bfmYSKcnu9VW5Qf3",
  "key17": "4E2XLs2SHKEatE5djSa5jmgZgzRxLpVs4evVsAJQoMHQd9g2gA1r9Ny7V1WP6ftXRgoUiPqcTj5DuSKc9UCUVgGv",
  "key18": "2g3kH518uqrThXVbrHeWqBAu33BxLd4L1vQpQxGw5okkRWCqujKcCiKjFXEVJmyQ1aHRH2rhdBXLQh9itTopbMof",
  "key19": "2UXTz221hCDAVg79akvXSDCqqy8zZK7exj7LQVMgpkjkHBwq1WNm9exTZM96wiJn8NJqpjf6dBA7DAEt8Au7Luv5",
  "key20": "56Kvkha9Zs73BH2xbvX75MoishW3pyk81rXhiUwjW6WbN384xLjTcMCjfCHoCFG6gvTmGU1NsqapaVs3wZKF8y3Y",
  "key21": "pEevJ1E4q1H66oPFoTwJq8JNJGezzokqaucJtFUdySTHUfYR5NETyiaZCcGxU4HtywtndRaWLyucTfHR4YygG78",
  "key22": "3Eqy8TcHeepaNECESqWndovKTPhCBoj58ZdYW4bnEjTKP7mi9dcqnyVxbXKvVK1XHvd6yqpVqSaKTxJbvugYXdwG",
  "key23": "45Psr2KiYWbaxrTtLeZgV1rktmdNZ6vovSrgiho32yD2mVSaq5hTBTJTpjCCDcJzfXoj6uG5BBGdgvHMr6s9eSj4",
  "key24": "4SXRnh96nEYNzrv4aSQ4p8EEjjqomuQfZ2RBvEi1a9HzLeDigUwgX8TLHQfiDA2bqVxXShkF19rPsoxSLUpUFQe3",
  "key25": "3PVgiVwYTt83SKnM7hgApqR4JhDXJwUC87gzVew2fqsg1KSDu4kSzFzP3qQk6qP8oPCiG5G4pD4TyfJEhmE6ANBT",
  "key26": "CMaH253kJ494MmHX2uSoThBis7HnzAoTKozMw8g58qwX2D3vTiXeJzbizxnAgpXgLgTAit8LXJ1QWr5UGpDUaEc",
  "key27": "3hEiuVhKSyXpVDWnp8RsQgVcGDKp4s5z265bLc9Xqd548sqdFkxaATHh9Gixm3gnHRe7JjPKTT2h61jfF8ADKd2T",
  "key28": "5ugbndMkzQYLkaDwCGJt5NUJYh4sDk11vYz7Lhjn5jZ8mhjhkuQcVXk4nPmH2P8spx9t1TRCCWWRkVBDUBgg4pfF",
  "key29": "4n6voYBtd62abLga6UnDfmkMoxRBPUmicS4XeWYGZQZzYCkRkfTqZQgRg9YMZFTTPPNGjoMv27aYbxX2NFNtJGcH",
  "key30": "5yuXEthFUFQLQAonTYcG96hnJHCe3ZSpA5J3igXwmipLTxLGBrsKYddoSL8UX6mSXQqoMBw2VCYmkE2ueqvqVj2g",
  "key31": "5DVwAdrWwWjY3GyDJtngNN5Ep5ccVMLzKRXPRW93AhyE1vZvte7XpMvzo1GuzucX6Ud9XEuDxgUZU5tdVpEgJiGt",
  "key32": "nBhjHVYgCtUGPy4df9RRhxorwzPd6QFyjCwFsCYFZi3piqk6oYdtFTqeDBTWUMRGym7onUckmJN2UQ2ATTpxqoq",
  "key33": "4HL9xMV43AnubvdXbsRxrj6Syen4TGTmX2vuqk2GEvaRnUqwFh7pnvDBbZza11AoarPSqNa5RpsCHBkDHzHA5Xa3",
  "key34": "Jzcw4ixFf1D5XUrWc78BStUNKNM9zrRuFRrG4MqwjL8CqcmyjR3KEQcj1vXUDggvygecu1T4sXw1epZ6X9Y3SfR",
  "key35": "3NhAJWW2r1dvhWPCVYuzaH3nkrBugRxHXcPMQKAmopkbmZQN3SReyoq47G8atqVK2dPiWaiWeZx4Q8vTp19DKDC6",
  "key36": "2mmabLCznCYu7Uo9tT87MjRgCjqVienARXQ7oPetWUuBnH1c9o6oe643dZKQqF4wvTgGqKYvnx6YLg33JPiU1fHr",
  "key37": "zq991rCyut3n8VSzURE4eQZATgXBXLi4uYPmhGavkCUvubbRtp4MUybNe9dme47b5kJQQLnnK3DpwSeTfcVSttc",
  "key38": "CRQcZtjZrSjAnFHG3QMzT5CSD8SX1aLP8dAMNKTaytXGn4N2fkevEYooAY94dNo1RvUVKE94emxdQjtB838NwAU",
  "key39": "FXHvoAFRgb9XZnVCg3KVAXcQEPuNXsgNPh12FiAPDkjKZdUB5yH68iNBe6BmyGg2hrXpMsBtUitckPYzwYnxjFp",
  "key40": "5w5rJqFxYLnm1Np1RiBbigtFHxNALafvA2h8PXQMZTJcd5Wtfmsd6TPfAmc2Mmfn89HBkLzuA2qqp4Hgey9ZU6V4",
  "key41": "3Tn323Mv4XU8EMRDqHuQbzJmAuhgtAM4Kjti5fPnqMgLYXFFa63mVa4Bm3JXK1VrprqN1wGrFFLFQEVtiMUHkdMD",
  "key42": "4yyvDh4FZcYCwnT9vDf2RDsaJFvZEDAuttxQm9Vuer4VNH1UB2cbqTUa9dWd1QLVMGAdiX7rWz2zBhr7ZWdH3uhF",
  "key43": "WRYgx3ZJs2ry1BMVMKWFo3NabYZ39ukK1jEVQn1nMWePshfQJ1u8kgTM9SVMtnLbj1u5MTqPy8AFXSauErGchi3",
  "key44": "65163LM1wNFXfxxwNHddeuxGoa7kb7LAYp7D5DcYs18ybxWagpZkzy1yzqgX3oLbeR8d24ggnybY7vL41ReN9Ydj",
  "key45": "52tDyz2MKQihMZpWx4v6onzvq16k6GkMya77gHQVZg4p13jh2RKLMihuVCNvDLwzdEFLvzQmy66E1RxE8mzMNfwT",
  "key46": "8AkFc4EQsZw3y5HHUj2udVZaYUSxen3XHuAmQV352ujQXkX3AEdWojcVJPCmgpNnh4VjJDH2vKeTEAQ2XFz5fuo",
  "key47": "4iSZ5cBAnZMDx3ejAEJZN6GizbadBbMV6wKZt5F8WiRw3tV6qK9NTmMm14wLgb139YAfgsrDcNtb4VQUhMdfQPui"
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
