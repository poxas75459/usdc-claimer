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
    "2oL7EeivaFYDeBudXdZEy3PAMChhCVHVdpwQbDN3HVrdFwU5pShk35Rwym8dgHav6pv3Rdfnw4KK5nX3ULf2QcY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YY3GQVimuF4KmFXxozDQM3sGdAaZxQFWpoUdZh6ajYmwuq4881RC39PfofrGPZ2vq7bXSCB2zVapMA1HXwZMSG3",
  "key1": "HFjhGp9uQvv5S7BH6ygPyAsY2hy63vTKDyiVbW8E47oA5ggoyrGCC37tg55WAAeWg4bbHhaPqPuK3q2MiTdEoWq",
  "key2": "pyjDXhaJAi3B6MFfxWy9ENfBx8K8tBAXSB1f8eradP6zXPeqbuaCcrSxriepAJ63gh7fUB5BeMzmQv4pqftsiiM",
  "key3": "PtSA3QPhDmy8DYTymVD93oebQJVkrYGeDmW7WLtRUe6hSVMu1XifGerzM5MgE3wTemxG3oiDL3pgPeyFwffdJi2",
  "key4": "632wJbWRoiP7H5mqrN2cvMHxRLGfNvucsWjLVgKaVR5ToHFBpVkm3bPXdXwEsRYsgoZyvh1EvJv9HXdHXVqkGL26",
  "key5": "5W49mMz4rLK3sC5VaFsa6d7LVD83ZbV8k9w3KtnKLoxAumk1ZutWLnPuwnuN1PnqBtvPhzqp7RSAuwoTekQmkbJj",
  "key6": "22JVw51TDfYi6Cr4AqcfNVBxuuDjiqK9JQR8wtW6aVCpaVT6xN9qpqitv7gEXsDG6G1KsxUJE7Bi8LKg8soYe7r3",
  "key7": "CU46FjFKsczL9PPwWL39mYHjpa1f2kV3g45BaDQ3zJsbEwjmxcFFpzpdAFpQPF94AkU2BKQD5T8NDyUwiAq7pb5",
  "key8": "2gb1BNMLK1o68fhq2SH52fqkTLupuYhA7hfhKqMUiyE6jt5JgPHpr1w4rBbaWrcUepKc83YNPYKAd5rNteusa4RJ",
  "key9": "ZanXde3jYuzsvAdG8pXnVTXE2vVFTUd2V1mXdvzABEaVPUWBE9doN3mg6AfaXb7ivNZ4W7BhhubNKHvxVasxaHv",
  "key10": "5SyLCtW9RLKFAXwVr3HeFgpWiqNaur5K8HhW7TygnynEPTtd1kSaYAd1vRs1oiSMqaA56W3aoZcFbKVbpfhhNwTm",
  "key11": "4FCePR5L8xvMxhQn684zbUmGoevLXW3d3NgLSLm1QdjhsKiM3TFgRDRPvYxxghpdK4C1G9rtcHBRifCPpXvHbtyy",
  "key12": "ni4878FyTUh7YYnjibyrxyX9HHpmNdm3sbkca1z9LNFysn6cNc5MMCvsvXVYPbJmed2JHytjkDPhneMc4FbG8wP",
  "key13": "5FAmmbRBm9GDa2CNTCFBsAhsGMjaN3UwmWpBn6tDpnJrho4EnFStCpeapFZFdgYszKENWVfUuVwW7P7ceRVJM24r",
  "key14": "2Xw8CtobgkBD7gNGdmpa2C3G1owJJ51wHJV1PchW2c9aPDyEQ54nTR8N6PaoFqPtGxt9rfpCeoGU4Eu6E7VGvkgy",
  "key15": "2Ydn373bEkF9L9CRkut2mBh9nKERAV4PZWrvWye3nurkScMY7eeTfEinwQ6drcuttbS3QoL5qT8hMFL8dASbDtCf",
  "key16": "5xEKavUa2ha2L9AiwioLVTiTMqfYdH9v3xr7fciHbPb83jpJ8UTcyyyvuXYVH2aRrBs69cBHqSKaw9N2eqwm82eF",
  "key17": "5JUc7ngcagu6BgitESkhhv3Wy53jF3ReEkEWiRnZB8iKsWQ47QAEcn8HWUsYuP4iaZPKvfbLmKyTpAXmjL7ixsL6",
  "key18": "3wibtNFBCPR6HLxkQ8dfHp8H3qp7cCFswySTtzhzQUZXbhaiDimmcCWoCwcbNtx6r4sJn8Gp5MGDXPgp4EpHX35j",
  "key19": "3bG2t3iCyHtNFcsmq4rok23tSyXJ7FnxBJk7X1ic5Ge5bPjEYhXQTohZgpC1AXi4HhjA3ZwH3gJBGCa2At7R4U7S",
  "key20": "2yPM6jSLTDgNSHnzz6Q2DXQXi2q2BQp4ZhxfWtnjuFwT8F7HtHRAfqaoLiBnMcCbyoqDbuDyhUcswDs8ohKfiJ2z",
  "key21": "wBvT3xRsWiggJk8bKnTb24duV17nsTyYLtyUqmBXKwEYcgT5qv3iGrTVvRbZ8VuFg4E4txqtdq2JFR8WKpy1NpU",
  "key22": "3RvHzyK8oaVURqhLW3HQ8KU9ddoJbSKu4TJSFfwoASq5M7HcUd1H6trUX4jcwwMb8V5mDjJMzXTkyXjkiMheMVCY",
  "key23": "3945ef9Yx1SunafCb2iBAAFxXdAJfrLbbLFyKcgFmn8eczQNxDVc2nbJeB7sz9nuNzvQCydC42YiVvX5bkeir234",
  "key24": "3tfAWgR7ybxS3V742yQUtqTCtjXWMdHre41x8wzp7CCmbAQev54AX4bqqR3fvoTJQumPCGJgtmiyEywT3eMStGpv",
  "key25": "67LTo6vXvkFBUdqpjP6uNb8y1hB75nVNpQUnyuiQGnNZ3orKAwsZmzYTrrG9XoWGDHPHFEBR3CLw35HbrLTGPFCL",
  "key26": "2pAGQgCvgVLmjYonWGXovvdYhkF6XN95N6G79ecefEA9kanYykXP5z8MYppbFGrjbDwSrzYJyXdqLoDG77VoguJR",
  "key27": "5moaF4R5NJexv4vGoGH4dgDGyitApEJZYzFgpQreyS3PGMpudGiSYiuKq4TJR892shQ5qpFiwkTBrW5esTMsVa3n",
  "key28": "2WH3hkRJGnK8rQYsD8cQUjZk2w82iJf77hY79hapYPkBJ9kqT1QmV59f7nS2MZjr38errbUMwQUFzys6a8nD7U3r",
  "key29": "38aniJ3GrGtGaBbhLYfEUvi8F5jBxVD3VMiJJ51vtpohYMdQpfUTKvKHRVpdfrmcBVAvxC2ikZuBxcmKP2wjmajV",
  "key30": "4pBd4ejapCJGX6JiKPNYVVLJtfHw39AaHYgKDyxRuh7KRtsxFkFPVcXT5Eu71r3HEocYEN2ksfmAsoi8QMw5UmjL",
  "key31": "4a2LaUojTnSeDvjdhBuKPWkhXuM7MTqYPYzArrVe2xLYj2mrfXbKvbHw89vtZ4wAun3tg3M7WXzSwJwpxmtuGPdw",
  "key32": "5M7wEqPTb5XUKz68YeDuXBMSoxd32Ahb3wMzogPAMnhMTwVSTc7btCjjSuHzWXNCd5oNv38z4JdwM99YDBwMMpo5",
  "key33": "3Ld19eiLsQMpUuoqtXcE8GDWeqKATJVxokuz9Pezu6MAMLkMzJQSejeLqSS33ndkAGyWaLDTr5ug8UzJyni7YJZp",
  "key34": "553yqpFLfvBfJns3j1YKPzfS5qV6ooP5AbT8xqB4bJALRvsqhuuCWAS5cGJ38xaB19xe37qCnhHZLocrkHCnEamr",
  "key35": "jjQoJ1tVhpwFTN6PHDXCr19gzibXKAq9N5dvduJt1aoeBxjLmq4oHDcG6GXwy8xpG2GMYU74RtnouRiJm26uTmw",
  "key36": "4uxmRXgUJMy9MfCvB2joPXrPDkmXtobaxNaUKNs4Yoy4ycyV4kbELb32WqQbwBNmVixc4rbqxdNjcwUkpmr3DYBY",
  "key37": "65XcSeXGxYJ7wP2JmvUgLba8HfPamdys66ZoYcJHs9J3tGcjsM23aDVWR2Yad4kcroGz9PYeZVCbBQYwXYn5uQXp",
  "key38": "51w7FG7H6Gsjm3RSHL5LptppfRyDJ7amqVfCDxTBpEfSGiZDHmiuVsp7cjVCNNUwkTQXtpyTdhAsMwScQCeAomAw",
  "key39": "5RdeDVSmxE1Bk4opZAGPm6CnZbkezDtoGcUXhdZfeJ764CKJgk4h8GWBxxK9oLt5v7rTuCkXepYxqjt6KXSbYpbX",
  "key40": "5xi7TwJZXwxrVQDkGF67U5wxgYEPbJTA6eRoVWJ26NNkv2V4W1Hj7xLUoSRcAWpfr1k1PE1GD7qye1Lq17pFYXyQ",
  "key41": "5NzPWn5rv1nNnsfquxSWHYqxC4ZknF9L5AGhe5dCQRSW4XgPU2NKMcAhCPPLDcMpkCKXYi1F1Bz4HDiYfwgNd6S5",
  "key42": "5fr2jjvw2rnZHYZA2BK811TB8KgtP96zW4ehVN773w8StL1ixDBx4BbeeJAYzscZCXdp7wX4PDZoTMDgv4eYEgPb",
  "key43": "3eeP3t7NFGE8cGHyeQTUjDrGHfBZpG13sc6bWUMySLzND95r9f8mgSpybr5i5rkVAFY7sbzwWGhb7i62EEfxsi7L",
  "key44": "4XRwsvTVpcFvBc1sJB4YtEm4JhFmknvUxeyfeUFSWhDo9NYd9SeXJKMeiRYS4WLjg9vBT53r9rZ7MPNSZKR19jSu",
  "key45": "4D3WAPmH63npJunyvUEGcnT7HXbVV2R3KRHrB35Lppxou75QHt8f6yAiBkpxE8qC9BegqNi2gYmtUpsHuxEwBz2F",
  "key46": "LrCiF3TjFyki4NXfsorGqkSvETmYPfCsrtZvEEfVU5RwR8ZKQ9yP5TBhg4hNP3DTPwy9mdDZkpQWaPKWBSjWyLV",
  "key47": "RQFa4zaDQN19nUUtjYATuXp5KJUon5B2PmpZj4jynYYtXVUskFwkWLoZQhJDdgVnguCpEc2h2RUST3wES6DPnSz",
  "key48": "31aswVRhH8Hu8vkH8fcL1e6iiw2GwjMPkc9AzaDpsXq6mPDSzmVV9w66y2js4gWcnzee7kFFdrSXtXzWmA3BBZXr"
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
