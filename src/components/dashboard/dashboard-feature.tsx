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
    "2HzKoyZHHiTtWGE4ZdPX9vAhg7cLtENv9HhAUYZ4SpJLLJqzfaJ65SaN9CpYX5F8KVJs78rtErSnc6SFMqiLz2SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57WgC2zhWH6RGm1pEUwWyJhDbR27xKdRkebj6kUeCZCezPWZm77cb15oJm4bfBXSw8wBkvwM3npgQKocg97UGzP6",
  "key1": "4j61G3z6fq2Px4P46f4fnuZ3u62yYu8F1uuKzt9XbmEUfRSFscV4fVKGRPYh6NG9mZL9mrrR9v8E9mXhGnR44aFw",
  "key2": "4jwNEKRM7GJtpbWa39YzJFUicCQSJ9hZmWzWnJxLi7zmZV8WK6sVqXc7wujaj4U4x15qrScMgAAUV2chu9jzNbrJ",
  "key3": "35W3WN27cipF3fMEB6gc37ReA6PFQrnDEsJz84jv3Z8gpVKDb1hU4bivtN911X7KrNtNR5DghnLu1vxSoTHULvsm",
  "key4": "3SnFtxKoPFz5jzYLz9LzsdgUDdHruDp9yhBgyX4aLtyVxKB6avUfxQSdsjexVZhPqXx4YwpyZu44nq3np4F9Hbus",
  "key5": "37imXLqxbyrquM3LqZWNL99sCeeMwAKh3xk3bcajikPaQ25QCrDsNv5syumdPMpmnUBjSReW3KYKE7ygfUrjoEfS",
  "key6": "2ePUE4pxPaaZCPFfibJaZXCXvkNG6hwHMUamSXSnMgQMp3mpP6d5oEnCVt184kcuZP1sKkgJ9b84tkC46Fj5vXQs",
  "key7": "3TN2A56B1FwD7HNLPNFPSuM8nNh1gHFGteR348stWcjJvRMHJTD1zWecVeXFX9pBy7mqk4cygcjLMDruEqzuwFAd",
  "key8": "5oKzgrnsci7B2vpWNzDSj99yZLd5guLCdSroqi6NhBvChoBXh8BDrNfsCpthMDJK9Psrnvsfn1yBZaa6BWM2JNDy",
  "key9": "5AqPJxR46ccFZz66BovJFw4KUpGYBNraBR8JH3RGbwRJZY8rdcf6hsgjv99fjB8MqxLioGPsqLiASMtC6zFskBVt",
  "key10": "26KUGUVMv1WEwzL49eHp2wdwRLM2kU48NLJZA8GqyohQvPR9bq1cFcVQoq9TBTyrcbExeKzAU8hqpon6StHJUdAh",
  "key11": "4vXxB4kd6fkMqzxbF9kdbN2EWt4Jgbg4zqGNHrYhKRx4yv9osa5xnZXjp3VeoALRzg8maktD4sTXpbLQaWW42TYb",
  "key12": "BgQmzeZP1ALFFBDNhKbfdK1LK185MLfupkgf3VcwEfbAdLgEwXKXS5wvidt1G8dskDZFs9JfNCjeikEd4yssKDS",
  "key13": "58LPJ89ijVyC4VDggUuwehk5KTTJ8EKvHbBff3T3UWyYdCPa2Y4p1nu5smmWBjnQHYRumikyUrBANscytmjZfdYU",
  "key14": "5f8Zd75TEuU5wwK82kr4SpyX3BGqYwvAswbjNQmbq5Kjnp6PG4eTQJtooo8z7ZSYpV4UQeeoBLTmAhuvNjGe36Xq",
  "key15": "2zxpMdJFvqLng4J8UveBMKREvivHPCUnMov5yek2pGdsecKWNvTGkKqT8wAp75SNQVPocxQRfwZqKKsz18xU4uCh",
  "key16": "3x2D3ymXRdAGs9HdB7Bvdn5fbx2rjheCbJMG9rNLL5bMUvaPwBjjomdihKwpKXZWDBGLTYMdC9P8B8cZUmLWcamc",
  "key17": "NTTDvq7Eb3Fh7iKKPFc4QUbVFSuKYNdwdzPhPczMD4VLs6Ac7Ci5b7jSRHaE8gmz2Q8orwTD4siw1fnBiNJLQGx",
  "key18": "2kyTDTkNjjusWotPB5QEDkAa82fsyXWb2prpRYFFUwJtmQswsKE61vNntrqsNrVKwFzx3Q9jTQZsi5TZ9rBq7L5C",
  "key19": "2y6hwR8tsYnr5hpXyzuoC6ASiszdGkQJ9B8CKpXNE1oMid527CWDm42jZ3h9TARUTCj3PurPKh5Gse66fRnx6PTU",
  "key20": "5VqaohSpmzhhTnaLmC5kdufyu7FB9F3Rghwdo6PbBK4wFRsAGRtJbq5wjySjbEkU2YyqkjUbVFmzkvFhx7h5637m",
  "key21": "3sdXpwRP6t8fDZUSDYUjkUK4Uj7kzQk5xUGYPxtKfXBHNTZPu4zSekzyrWegHD3Rd7o1wUsREfL8KhDcQCL3w63m",
  "key22": "L3GCMovPn7CAkKpJvwL31BLxDmTnzQUvF5PN9ktRsuF9JExPmq6hXqMxDwKhkBafxqLRvACKb21sUQ9VVZxXsUc",
  "key23": "7CTbwhcJw1ssjpuH6oq3YnWh5xEQfmeSq9dvahzcqKS8UXr4m5KK1sCsYF9MgeA7myy5h22n54H4Tff95R2a4bp",
  "key24": "5Tr7zfmmTTBL9g6TqLdnXLN1EDMLXquNjucVgxM74hTMnZo7JyFb8M6R6GmjL6xTdz92UfUGcQzyX8aoKTmvR6yA",
  "key25": "5uNZ1AuMqKnkmM57v7JkxxvSkJZ53TyzVZLGX22P6fjSUUctj47P2qbH9vHSTYiZTLDRGcftnvpfqs3d9Uf1PPij",
  "key26": "5fQ2BMb6MDoysdUNSczLW7vokuRtXvEP9c6hXsE4mzYyzhEmHi6rPou3CU1P2tfgYFdBAgDCQXYhvGgC77XbMXLC",
  "key27": "3Y13NGkkM9PksqevF7d3wK6zBCmgTA5nwrpHdys1iKzwePwMEqJFpY2thahpseZAhdCYxNMMg3XdQNfKigxZ66Np",
  "key28": "2YeQMbKcAnY8GWo5vyevQTETFb1JD1VPpEATTeiSRBq3nQiZivLTgBQJtC3urnxpn8kNw7ktBxN1W2w3ZkHQ3ney",
  "key29": "5B1iFjRjp9V1BC6MdT16hDyvS6z3q7hq6AC1Z991CbeWLxACxK39RM76HzZxqwTpXMSussVZFbnVvzN1AcpMuXUB",
  "key30": "5pXuhzqmKh1iVA3s4L14BCfhcTKeS3gLAG2MJEXeypfUoZ3RQyAqz1JemEVvJa4yJ9WAPdSwEqtbcLnm87JwBMR3",
  "key31": "23is4uG54oejr5pggso6nJTUagesYfkAqw7dcc5Hxy5UACvkd2zhyy8Pu9fbHbL4gC29Dd4NUVTxn63u7Ueo9edk",
  "key32": "9rr2a7vqXCHHnrfrcLoQUkrxUiEmUfutBaygh3kU8AKBRac9jDivkBA7FTsPPMjFcqnCjNnx635Ga1GzXCqekX2",
  "key33": "bEZcnXdhGDHxJdhKy63CdFuoNJU5KBRak7rSMYvwuhPayTm1EH181RN1jkw5aP5ySe2rRipr5xBxbcEbVB8CrVM"
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
