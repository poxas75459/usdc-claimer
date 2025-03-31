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
    "4SsoEJ3SXDu74WFbdH9AHpp7VVM6d7gzEy37FWWZkWPHv9coX2NDnkU17L9g3DSpDiv8qEQGZVMczRoXyHQCmo5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vi5Cxnqc2FKsxkM6Z341oEkY29E43PZX2dfj6bxshCBidhoFZTEa4z89iJa5p7rssstiCBT3M4Ct5MsRKRjt5Er",
  "key1": "31kfn4TmjUFNfbXTr2c3MX3vsa7f7ASEououY2AgezrHQJSose82qsbQ6C7Ciqvy7TfDFqiQNpKoaUDf5VmE6pMr",
  "key2": "3V4cR3RF9nA528Zva5msMaWnrQEeDFhiwMm8XLayvdjh19aU8iYhudesq3B1jz87UFsWfdCED5HXuJoL4fhDJdRJ",
  "key3": "4YUTG11ujvNRQtBaTMgaWD8Bq83nQH8ke14JRJDjDm1CESCiKxJJU8YMvUBKVZ6LYie4uUxUgSVisgRHduwwyLpK",
  "key4": "5W1PqjfCuDbPnH9PsP5LS4CgMwzR86KohXyHu8kAataxkjzZgBMkBXcDBVsdZxm2oGWuqS7P69yiPzdaM6HGvd6e",
  "key5": "3bN61h3a8JN3XKW7SF76JvMGCN3SxPVMXyEP2vG2GmHeT9in8ofTF8K5vA3537XT5Wjwud6u4ydZ9iFAcNZvnr5m",
  "key6": "26c6m3yjFQYGkdj5sAUnvdKbogH6LH3o69UytADhYQwirQQJRGReMzFS1sZqCvWpjn5cbuyrLkkBjJgcntBt1TgD",
  "key7": "48ifbNY26psWLG8chpkC2bkrouanQiVEzMWn6v7JpubFQCSfA56P5UVjVsAMrJe923oqwYBTW5oxZL2b8k8w439W",
  "key8": "5j52A2BrD97u4SY8vGyGsDGSSBhTzSqAtr3UXNEosbKfNzi1AC9ZZCXpyy8dD97xNLsAC95F9fg8Nr1bdCh2WvpF",
  "key9": "3GWvrawpESN28Acd1NopnWvjbFp7Dp54ZQbW8NLKYNf7AtMbGSxdg8SDChHhrPqyrchcGXGt7Bv64DRNjfcHgKdb",
  "key10": "31iNThetqqKJfPaachuigLSdTRRkRT21VEMcrayihhZPN3wMw4aKEbahikamK6BJSEoXmWZxVgPpeedJcW9KhyAK",
  "key11": "ZZuTwpC9kaqR56QtXSwCCi5jht8a3aYcJAEs2KK1k3hvB2g9LoM6bEh2njWukyGqgGtvy1pZEcokZ2xhcEpgQUC",
  "key12": "2XNzT8zN4eAQPv9cxm2cREtxrt77L1KuTN6FuoJ6Sff7TFcqAMkXsGH3CUwz8REUiWr8BSsvTWzG1hExTCV9UCPY",
  "key13": "jBRsbh6xJyZUkuQynNWi5qyLDfWHBepomVCVVtgnNc4A7Wwpt15c8Spimi73qKr8aL1o2w4sR9J5zwUximuK1Tw",
  "key14": "uvJpEDiN747EVsW6ZGjUS3Sf6RfqXWgqhb7Qpb3DKibppXVZafq6fpfBoaQjXnvD2o7u4ebry7C2Zh18MWXhfe3",
  "key15": "3WZVEaefzTzg1pu5rTxCHrMcEG5cFiVZp5BCJA2GnwxhnoBVaPoHWLJ7qMWfPQfpLkfRGYBb1DBpkabro1XU5t3b",
  "key16": "443pNXgCT9LLDQorqdMmxkfQr7ku6gSUp4X1Veog2qouTfQsrXkkUaTpuGLChjuJEnvwLSmtvw3uhjxYLmvpp3WT",
  "key17": "3UxpzYsmarYaPKroBdaGqQvqxsvFSsqSDkskAQ6TBzJrnruF3sZ2D2oGxcRutHg6thvYmFcVsrpu8PWC6SRCV2kH",
  "key18": "5eGJ83RBMK9FEU1dnPjagMP6XE5oCGRt9AzfXtUdsMrgdZCE3B8Bnvd6B6E3fUQpuNowm58f6EASk7vwDqUFebqc",
  "key19": "3dSmZ97QvUmuf4Mmz7nS6Y67kRcbYVYDwiJAoeXns6UW2DSSLvqfEUjxgAxpvyxgZVdGPsEXmjBFc8KrZHUtumcs",
  "key20": "3fsroAVMUiweDt3TbfWxZdkHS62XSEQWYUCA3BEWJA8WvmBd8jXFo3oBop9VPkBGQogt9Qf95aPgHKZEHgQDYQo2",
  "key21": "2eiNtvvKnnka3kbdGiZbiWJLyYndhRCq1iVMWPQtCNpfnFgG29t7SVg9dQbRCvJWPw3wGWPnTkqjKiJfB3ca6fh6",
  "key22": "34Ya1wAc9KrvyZFg1MxdAtF797nNMGCaPftS4yFsvV5LZZ9tWzLgDbdQR85RTTQXF7P7tbepGRSN9hJeMjbd1mEx",
  "key23": "5P9FHD13wtRC6cS9ukW73jBAshf6uGtNnhkE2Wsasz2u9vnyW8aUc2dW3p8PEaZG9EVrLQyfPUMtY8RdLFCAhCPw",
  "key24": "4JdqDiyL7PZmdDvySHT5mLarcGgwH7EeepynGQAG6zTti7KBFs6oUuQTj7G7UR6R3Y7X7yibzLgJjuQQDNqBsNVF",
  "key25": "5pG7VsHn3eUbMyZXywgRu1vKgTPpfSiTbsYfjDXoo8zcvNNfbnQVcgLYVFMeEGmPwBFBX9m277kgEskuRYvX9oY2",
  "key26": "3z2BnJoxDCdUuUzm93xbSf1FptYQ9khjPFSUq5bbppuCUETt3vAZqE6tcx6e2wxEcBNmDEAjBYHaatFNXW2pp9nX",
  "key27": "3tfY1CbxdQAKwgTwcd5JAX4AsU6mmxiuyCBH8nxWJvdAANshu71wtQz3LuQ8FXcsmC5yWoF8m1JD95TRmBanVJ7P",
  "key28": "5bEZaMx111HHXixWt3S3gg7WTQCSRNRyCmnhkkE6p52VUHRgeVTZNy7m8oyZUvAbfStDmen9ChEe1cvJsqKScVRR",
  "key29": "4ZZPVEAzZrYHH5x6j4rkpDTp1ddNUWEiV2X6dYF5PmiTtCaBdfVjtN4hFqoBZRZ7r3KRPjU7pcPhzsNhe5pebQ74",
  "key30": "62rq8Nyusm6pbfGapY2TTtXfkQb1UEHTLXiZNnaE7CRXDymcZze4GXwu6tCrH7mtX1HSyc2JdRZV4KRbQKGBeUGh",
  "key31": "3wMRUxnFPEHLcRQXPtZhyhfyUCGe6jyP9z629ZvNemfJvsgscr1E852jHvYJzoumvXKHiWoesizcRnTwKVYsXpim",
  "key32": "4oC1scWrKiERi8MgULsxHJN6YUfBt1wyasctApfES2q5YvjDLmZ7EZJm1cuNgM2pieziT1kr8MKrxbSjW9PPRrFC",
  "key33": "67XxyyXmGWhk1xgWoaJVWXX4qELAAVBZKqUCoweBTLRqiuNQZdKE3Xu3JnU8LyWo1fLqeXArM3KR71HxGQH2den9",
  "key34": "3b4mAkgbtSYEDRWPShre2VNEZrqYoVKw15KvsY6cpepYuJ7Z4VcuHcdCd7uKz3PSqkBWPcuZMfGzDddbdn7EmGjp",
  "key35": "5DDLbAjKBwz3Vz42coJt37H6k1qwKYCiSoLk5F8tARhrTAbR2w4mrk4psg92xHcXVXQGMLyNVvnGYqmtRK9etqDM",
  "key36": "5GFJZWNfuEtkTwrwLNqcnUcHV1KzEx9WH5DhFnUtFM9W2NKimaFBvUZWWoF3ihwJ6qUxzJMHJj1TT6AK8TsWCxcc",
  "key37": "5JSTUG4uosdX42PGJCbWXbcE9tjBhUybsHV3MteU5A9Z1p1KCi9t1fUtVfBzVc2geWYoUUHFf7pFJsMdoqsFFBRY",
  "key38": "65jARThdzdp52hU2aWnmd74Hx9EQ9J4eSWNghx4axH6DTztEuj4GGATNu5enNdmmd1TcW6AjbL4dF27iWf194Qot"
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
