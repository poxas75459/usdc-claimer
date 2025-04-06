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
    "5F9cN8A1d39RV6NxYUZ1CSXsxQ2CMudcJ3MS4u4ho4KDA5PNeVFHeMm6QQ1eeWXWYMd5k3F8HGeED3S3Qe1Fsmj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TsFigNHX3u15J445DxBPAjXwgDc1qLdJsozXnBbNiZKGUwj652cg4VY3muPJkxivANbMyS4AkMAvYcYoZR9YURx",
  "key1": "3SmBp3KuqVigpJYdhwCu3h6aRozoV518Qhkf9RRqcgTnddHju5HPngwEs3qvUbScQDEDqFsijRsAyhTCnpiBh8Vo",
  "key2": "5UyWk29hZxEC2nf24qEgvgUtce4RoBt5Rn4hiSy83FJvRSjthWVaa3L4cCwzCfmrTdUXAtze1dq44eygBoKuuKfu",
  "key3": "21XnpjhdREFUhyTBkfLjQcNPkES4V51uxG3SHfrVqjFAUKeRZeLaYHYqn8drFSxNya3nKhx9ySp4ommqn7kKFhPb",
  "key4": "52KohKRp6wWahNyfgwNMwiPMu7kQuNwN4QJZv8Kc49JMYZGjTJC1FRrMdP6cmH32HfogADs962aJ5PjcycsvSiJg",
  "key5": "3W5zH6xw861TJnf2V38KtDW7fzAkWSoMuC2bme4g9k38ChkXhKr51kkvwZCfn1M72LMUWVHaSgsu2WC7JPzBbctQ",
  "key6": "3ph5pXvg55dQRNmEg4SFLyYVn9shz6ostB14gfJKcyMebCzLCAx5fdyy7K6jbodVtQeWgoVgfTfDULj9uY8w48Jb",
  "key7": "3LMfiAkN9FyJNT168g9dATSVHuEDobgVsfJjiEuQCMzbC9skfMkXvU9K7HCmBAy2oRuFZyKjarZKi1EgAbvpPAwL",
  "key8": "4xLgjrt1CcHPptohE2dttWcmQUCaeFEbVqYLGG7eHiX5xtN744S4Wg2Kiv94Vp1bsZfdR1Dt6ydv6uH5SsmY6tju",
  "key9": "4Yuyfg6kJbapZ6BeVRTGhcjypnd48kscRS5aU9YCbE1pxNqTHjfWZsoikadgeG9KHFAWHtyb2TQkCmeXsQWou2Ku",
  "key10": "5oRJPmVsDmmLd519GjaddUF7WQcLgzgG3P1xpkmahHGGRjRtbb8RfR1CqL57Hb9f5ZFukWeRJbz9i17jCNv4atGF",
  "key11": "3TdWBkeTwHMMiHzTCX2pphJLUUJ8uXr2y7ZtxzP16bCNv399hvTkXfjTHaaiB4EJ2ydY7iWwe37wsZj5F29sndJY",
  "key12": "4sx91ZP4t6J4zWMTKCn5s45sKTYb3KZcUhmvpyexwro66pRfv6cYLaVe4UbokJkcR3ZzUpbhsMkzQ5iiJ3sUBhVp",
  "key13": "34gRqnKnR5wVxcSwHPKSFnDjcLY6piK5tiqHMCs2q4ot4EN7o3L3PNs9GtVCn1ZUNDCQ8tSKgtuhktfLwgXtUd5a",
  "key14": "669Ww19pyBmfjbfNT4q8GzhKJexHjfwYNGLHZWRCfE1tHX3qW42Rq2tBH9QPWmcFs7qZmVDMVX3Qkq716dUELbUs",
  "key15": "66YCgeiqkouduSi8JCEKjKPwJiA5U2K6QduF16PAeZghgPf7xYkCWLU4fKw3q3GvwPhwunf3d6qmqs5LY6J9j4He",
  "key16": "4uhUMa9Qo6kxMq2Sbw7UKKjcysvX3ZFBbxKwES8nK2cfMdFcnBqxtFaJHZEfSE8hm425CVQGBhHtjfrHrHuWjP9i",
  "key17": "2LvoxLnLe5KUQhie23xbko7yAKKh3YvmTeBNBonpTwHezThScUfWGqmc29Tj1m99ncPpRVrh2AfnQeoRXZcb3EPE",
  "key18": "3zBdzvrRj4RFYR9gbndt4FTS3hqvVeZSfLAKa9gVbGEf4czydqtAiEJyK8aajRn2Pz8yAZRm7z9zeUkBouu2GBHZ",
  "key19": "4N1KTThA5jvTvrd5vVVqxMXJirTaVa9bs9D1m72ojCwzD69Hcd7377RTxTfsUjpiGRa9ftZRMDpuGVnaK9qE3FBj",
  "key20": "2rxsumNyaL4wuQgKDF3hJJXzRt9dq1aGwZZAxkD88MTCHRiHHnvu7oMpx31vhFc7vZCXHykwsooo5fRNUpVcDvUB",
  "key21": "3nEa4xxBb3wrDTwu2XZ8JyyuLTmL3CSorKVhoKA22GfF2jqk5fB74AQjfw8r9NKo4TBUfcuL5sVL5avF7bo3VP7o",
  "key22": "4Mae3ooKhbdbuLkcAYPd54Z6e532fWnZSxbyUFgSBScA3EeGWiuuTGYwhEpCtq6SMugnLc5YJKJEYb5ZxQrjZcuY",
  "key23": "6LWKBdpYrGv6fFE3xzxG3PaP9xGjj1PpuFHWaS6XyT19NQxxXgGG5akQ1vJiHGgCyXPyqaJxe1honk555Wg2bR9",
  "key24": "2HJXxX5ckg32GGXjBbLmXg1ypVYfCT1achHwZAZWjyWaBd5mmtR7vRVQ27ipXtypByB3oaPLCgQ3PWYLehL17nwf",
  "key25": "5rnX9oiUz4PM5gTxvHEd8V2248hNAjk43fsmbZ929fQfKskvbWm97aDkeVZgybtsXJB6nukDvf2ZwB8YHswLhbFH",
  "key26": "U2owzqHuUQusz8yKGtXtCkmtquGpfaXUdtXaqYrnZvasqfapfi3fQpkG7ZRardr7EioU11D78zRUZK9ifJw6rkQ",
  "key27": "5sMERnhu2bJHkMgtFRSeC11jeHJZGCcHP1LHdpaB3q6VFnFdNgKWuybq9EBi9qQpWGSmbC7gv4ZospoiMVBahAZ3",
  "key28": "4uDDxsKUhCYgGehmLDkAEH8KWfK8gmjsZcpz13u9Y7byTRqJzGa39nXWhSNer12KsZsX9q3MTUXjbE83gwkPcDhD",
  "key29": "5tr9MHKrNemTsKVGjfEeHosrb8dato6HScPKi8abXNG7KoP3z7pU55QL93ojttw7odfnEEsZAH4WWuQSCLYk747X",
  "key30": "5ntnTMMrEbcSpyT1N7XrDfSboygcWQBfLJnh5jb7SjtKNmoXD3UUXp9u56KrS3gFt5dXjbCGcc9eTKLkZSdjdovH",
  "key31": "4nr9E1kzy12XeJUkAeqDagFrRAJxtJJsQMbxt3ZUPJZoDfswZ5mBBJY5vvmBXYN7i4YbiA79AFErzLDFGNZxLKSb",
  "key32": "3DZrvk5XQ8cWNqkQaHND6T9NdciSLWi43vBQSxBo4MewaGrSpzLNLGgxnj9cjGwrYT3rSWFTomcf2pjVXpBLDgDE",
  "key33": "568MFyjNCjgdQNpSWp66kHTcvVBEctFDNGWE8fS4Y97PhUJEv4PywXo2ZPbnop2icToVaPeK8maNYsZ2eZJXwjPz",
  "key34": "4q6EhrU8QFRqgtqJiZHKnceeYd5yN8E3WCEmQd1SU2MY4V7xhyLubSUuiJDmJwK8axKvNNtrmSoWKPmmSkGepP9",
  "key35": "24zPTveBhBRjFMd1RCGBQy5dFH228QYuAv4mDLVBQuCCHFQ5S3tuptbKhvSqJp4zdB8D9Y8bQHsab7HsqDdDtiiS",
  "key36": "4DcPCEMAtNxS7tDeiCcP1PRvFC1f6RARQ4mXNQmBGZDddDtriuYUe86GbPsmkJC95HPYqMYdNoH64iFDK6hGymZf",
  "key37": "YxTDox67t4tGcALQTt4fC6fmG8phEb24RbA8wBvV2bb9Uhcu5jBdg32c7JZbUAGXsDnms6bWLaj5yhEztQPHpK8",
  "key38": "3EwTSpDpwQmiZePFdikCoHBJtvAK9nZMfnDsAMpM99LnqRGvJYjxGo1ErVpWhwcEodtpx3E1me388yKwTc2LQesM",
  "key39": "36ak6mU458dY8Pwdq7AaiH1zW8ezrF9LCRiRLbDbcZfzpHcG9BKaWZpJKKZ6tVaEbJLWmVaExyBBw7AAHn1wr8u5",
  "key40": "59i9yJZYbMeSRuM7SsjU454q5M3KMYFkxAPPTNQmS4BU9ZMAS9cxmUNEWyRcswGX6tEF4hfd7zC4tr8QKKutpMtn"
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
