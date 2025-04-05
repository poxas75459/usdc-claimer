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
    "2pGqTfxz7PHsbSmfLN9AufS3dzXFM2p1KyNvH8knDeK6aWmA4fjj9kMGCmfBoaso2EKPaVrnLZT5o7kcU4fbc95L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3fwtrA5Qjwg1tWn3dUosHuZurGhzsgc4xsQJ31JjvXmWEqbbDD6h6nVSiq3feRRnT4QUZpLEHv3rQ3CxZKYRbc",
  "key1": "334yBegsGrkVPxr4zUqCvqfynW7RFgvP6CNpwC4tcc7BBxHfopsmPGB4VtioGPkB4z24R42YBJA3ghVQLN3UrBXX",
  "key2": "3mCuYK1derjcJNTwcWwqhHfgBkvWrjKGDpBKfAQ8tfyjW4Q3ooeac7fawErGAjSraetkaAHSyszX6GT3K7u978V2",
  "key3": "4xdvf6UFMgiGawq8q9JH1JJw4cwTPR5GhqSC9DKihJquSYGMEpB8uskV6xwsHj6ArPdC61oXeWPmqCNqX4jTsEPQ",
  "key4": "4xLUZBG8Ywkt2sUCvwxVN4wdkEoPVxz6xj9uSi5exzGMa4GPNX7oLLfRCFVoQgVgKPSA7XoHyAYX1FXDSX5CEMBf",
  "key5": "5RAZK1fg6dLCidwdfp4s1MHNnkY59TjAayjytbNUvTPVq9UtTgKVH8CJyisSFSjXfC6svDFTvRqHmV5LvBba7WQj",
  "key6": "3qx1jcqdNFQhcniiDGj8rX7Y2UsxEj6GJbbXky8yGKfvjdUUpoLqjeVaBvCnVgy1LX84eyysESBZzEYFtSbc67Zu",
  "key7": "ujgrZV1S3Eo4WNqwxgRkGQHxxQDPE38ewHpqjC6WDNTfUnDDULkJCMyewayCHEZ1pevV8tc7pSN83CJCwd1vPtx",
  "key8": "4J6XQPNTyDVWXY12Yvu1F1G1AsHJQWBxuM8YDFVvrGjkv6uBWLEkPthZSGNevtJtxx3dbpMo7yuYeXkdX6ZmVAAF",
  "key9": "KEdxCRmHMiHMXe5yc2gbdTYavVV2N5T9UEXkmPmYHEdCXEGYqdZ6cPJYAB94c8K5MZE46oQVXZsyiHDfdptG8Rq",
  "key10": "5GeHYUCLLCYpbs5aWk9C2upPaetRb8j3s2nR6HmR3av7JTuXrapbfmy3ZBi1H1HpxhRaZvswyzWWURGMeNbCoPK3",
  "key11": "4e8jXqwHtSCLDd1iPsZAJgyocgziwvcBdabjT9FcEdPpkQP7PM2b5DB5QDFst6pEsLTi8Xy9EvNQBJa1wt4BhZYJ",
  "key12": "2gpeSB9dc2eiDNy5Lb2Jt38CxftLWMWrrQsBb5noLzd9XBg2U8K2Fr5Y2dSjUjDb6avH3yP7sAqjtomKPz83o17b",
  "key13": "3rAtQchtX3cdkUprGgt4D3SKvRE11iRCgsYgqYdsPcx2Fycruw8APiWMiQr2biPkNzbs5NX2yiJUGvbzNcm9bs2e",
  "key14": "64UJusQ4wk68QSTVqZ7w1GeKyV8ynGKEb15YoD2tgCeWCRxLSDUPmeETZ2XYGUbrkRbCsSUpattjEzmasP7Ti6od",
  "key15": "5mWfAPsA6pAxwpoeHFsb1YKWZHvpJczZyY3kmce5zxVcJwWS6z9NvCE6z7pbL9sAxn2NU7MBLRUMVDZzFGcBEJMf",
  "key16": "43CDL1gCMHtFGD2n2aFX5GJ77o1JcFKWpD3SgvWRvjJAb98tZ6Z5VmSXe7EQPGWy971Rrn17DtPHh6W4xDuGQQdY",
  "key17": "Y65HSqBB9rbUUCtsrNBLFeBnPF7Xo8bXCM8bLMzV27LxgkNtnNfyoMzNm3HccKSgsVCpZmb2weiEEnbKWa6MMQW",
  "key18": "5X3FLCJFjk3pGnLCEXCsA4ib6JE6uXe2ZWYkSmR2a4EJpQrBwBfjy6mGhFEtcqqpbdBNQyQCfgPN9PNWaQ5VtYpi",
  "key19": "4rrQ8vC8vLh1aznjLsswyxXApoYqFYeANMWv6jJRSPaR1NTbmEb3yknKF5R9qoqoxZD36xX7YRFq9A1FvAfPtVgL",
  "key20": "3CXpAedQBsahpFAVttSuoJZHCcVpSoSvfVzJZrc6hk4Jv6fQ51GrxcYazKrdGko4BkPWt48rdNQWYu6fUu15TSwK",
  "key21": "X6aiDPMoz9Gor73Zwp9kYakMGTYBZRMPVQLhjERTvAoPm2fkPN1nf9tbPskwrwGUBs1cUbUgtcDUPWpWSZR8vUQ",
  "key22": "55ijQ7LR12MWTHyU7uRqXJxracn39LGGK3eVZQ8ngqbmPpkeVJA5vgAjHdtFpbrQaTzeDoi236NLPC1ty94tJsMp",
  "key23": "4rgfc8QFscqx9qgrDqGLhUX6VSozDE2orZLRCoVp5hKeHJhM8WnoBCVohJqykcipuPC89rwYnrrfq3Qh1ZDv7SAK",
  "key24": "5LFm6ZrLE2YTcfohRt6RPF8sPqKVYV9QSnW6GMKJcy4P3sWuaBKjKDaNnmSLj29UuvfALTGHxhowXuMuG22u8pYo",
  "key25": "3Z8nk6JGEwy2MQj91v92185hjr1WwBjQVFm3R1zbMkzFa5u7Qc6ceBRnA9er3npRW8jYwjmHbF8VDBBiXZiVBp8t",
  "key26": "2viquAJ2krGEEYvmu6vGMuTfQA3WUhZtVJ6Pe24Mc2eRDpA9Sxd5iE3zpxEipNHfcs5qQW456NMy2dUz3fx8LqE3",
  "key27": "WbMgeB2b4yWibFt8qVrgNaLN8GBan7uJBHL9Zn2kH7au16mL9juVXY922Ee3kSh8cVWiwh6Dxm19VjtWT57SUmb",
  "key28": "ddcyywwSBeyVu3Kg5raL8tWerkgu6VFrXFYvsDr4Yh2Jv9uVDqhhQKSUTG5jR63h4AQpXVzRWBg7scJmd9eqMms",
  "key29": "43bDwVcrXWLUZGb39Kbxe7boEVfqTzXDgGUHLTyh3ryPy4Tx9sAHV1LyeUGGhbSYxEbv5E3WDx9o2pu5TozTUXE9",
  "key30": "4vtfuX7dS4X2NEUcpVdzxNhaUhb1SjBSXgH2CRhjxrVxnTZ9YsFRB1v3GryiZ2Msma52qYgryPDzajDjZs3wb4AW",
  "key31": "5XSWSu72oEKkkayVdNqbNYpUfTtxFg1zR1uWYoAKDLjhLxXTGUTLAc3txjNmD1qhzWwoH4RmXtVbsLVjBfxaJHBh",
  "key32": "d4voGeoFUeRMN4D4BzE8bqWpZudPTHMpWw2jwfHEPHXxHBXcw5AVsW8ZdzZaitrBKixHtbqhjNM76mCZEy99CmB",
  "key33": "5K8Gzdi9LLSd3KdmVZdfKG3FoZti3B9xz622SmbFYWe3Ezx3uFQ9oMLHr6tVneq9T96dchuSAB6niikB9uaQGakc",
  "key34": "4KhbLGhqTRb6BDLRbVUrtKRZ4r7ek1Pw19puNsFAq5yxxSupCCpzwwkKMrsUfBkny7FvvrxnwwJ5r7thJvSq2aiA",
  "key35": "3UJonvMifMBqyGpCzQA3qoy3bNp256EkFDY5D2b9vYXQdNdbEK9a3XShSN46aH4GVxpsGURCi1KutcG7AnevqdwK",
  "key36": "4Rv66QkKxoZ2QMJ6V84gFgBM6dZgpojAYvaeMX44D94PihgdeLPqadB6SLqXrDuLZo2et1EqfvnuAJf54PjS1Jzj",
  "key37": "VBic1dB8aXP2UNT1cXVm6eJqnLH1QWgXFXifoGymJy75qktMrtuBbeDtvZjMbmDL9duuejtFLb8Fk4299fcCi2n",
  "key38": "4VuSaJhnTsCyzn9nKTxhwaFBu8CvJVDCyF7pR5L1855pRHb7WU2kcbHfRQrMAe8hiR4TqwsKcxzhTNycR8y1RPmp",
  "key39": "2av6iHFNvRP18GUrNS1Yf5z8xYLXfPACwZjX7y76bVkAxezNxBVeEm9wrsq9XdV91Uk778h3t1sm7f63n6yYF7NR",
  "key40": "4qPV4jSSAVoJ39C4UVx8eZKLiBEiWydNDjdNPpZs6ze3WcHDZRw8hvyLry5Tr4cuajshPZJBhgiZNJfECACr3AUs",
  "key41": "octUYuR7sF5yt7FqmZuDw4WqGg38KjW4ff4xvvk9qfHCuXpzHXCegiqTrxMtoAZps4KShmqA7uUbdfjuFzw8zUL",
  "key42": "49QghKWKnwk5cPuMBrELDBsFsWVPxXvEZ1hmh5zQZ3a84pv9hYRmmYvAkYaFWYGo9gP2LXmS8cgzQ6NLrVmBKFvy",
  "key43": "5tejJ4zzUjg8HGymetCa3WHVnEAbeGKtKYdhknmwcgLumgZ3Pc7LHH8T1Hj54j6MCPADvo3aL6f7wLdyQeqDreRe",
  "key44": "21kLHoHT4wk1iyDecmpwhpunzji9gc2BVtSCCP6C5Utk9xGwVQCtXyYbkECdvQLux4cS54TYV7rEz6VBCa5c9j7d",
  "key45": "4WJgrmz3mKjiP2oTy4GHEf2DpqWnzXM98UvByB8XA4YsqSTCcZ3Uon1SpTExzef7L5RcJGZ3FpiJb8s6QnJMF7vB",
  "key46": "2KzazS1T6aw3XFjieWgjHk3AGKWLezN4DwQC7T2uq6T1rFdA7fPy58s2jLMfqzXNQoVzyNzhMoY2ZNVfBdQKXayW",
  "key47": "2WYcM4ZtSanrCfSnojYt6bxPyK6BGX6npGPr7ChLNiBYSnWAyKfyuWHCU4ScF7LffpgsDvFmU88GTQZLhrbGgYi1",
  "key48": "2Ykwxbww7bDttvWL9dpuptL8T3Bae3cCNRe41GEkaSRFUcjsJ98KjQYRFWxbeAupuWDadSEMWPdFfxhUhZKxZRDo"
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
