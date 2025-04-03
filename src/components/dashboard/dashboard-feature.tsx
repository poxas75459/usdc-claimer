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
    "4buumKYexrmxMr2UzrzByR8cXPXGq8NtHyQ9RAKKZByW1X82D9oT7DCJV9x4vYhqYoy7RMZHBwF7FAbk8jWy48kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zJuTAoZKoagsBNqViBAbxrKxeFQqqG5KNfNEN9Fx32YuVf1d44JzWU1Ma1K8sRZQBJpsGxWiM8gQAeL3zgF9sS",
  "key1": "3ZLTu1c1sSDwHscDvC8ihAPLHYewjpX3bqq1ShcLtH8NX3LFyz28HVn3DMLvXWzQvrYuZYqYDfv87rE6mresPZa7",
  "key2": "4eBBXRBuQaZfvauy1pK1YhreeW9K2D7oSiKuXSDDhWAycRPZ2Ptjc1F8PFKStZNn2KWaE7YLqxHPeGPiA5LXWAfm",
  "key3": "48wnFm38k5QqTAe4GkaWo2Z8SMY6wA13LSekwqe8Lzc5FhMNrNu76dpLwF41kGEKCaRNE3fkUu9JBCUG8gppsXhU",
  "key4": "3TffUhx3qriHieahBwCjwJqbnbFy8VpovHcUSqu6Jj2vc96XJc68W3oV7XSVthYSzt68Coep3ocNoPGZh36p6C5o",
  "key5": "2uz88KvrQewSk25DkgJAUt54raHBwBMciawJiz7bqTzumU8gvNAB9mdmKJeWPjrf2Me4krDABWsMvGkdfx8Ehknn",
  "key6": "fqQPSVfQMtoKXenvtQRtVyB8bVfo9GXHb8k6TPiSrMvaGjCTLb2ZoTPbiENxVFDtv1tL8gL8qqo1cnkkohdDp4p",
  "key7": "61p7eeKpJr38AwG9VNDbts4XH3cqstsKFfjp6tRvb6Tgp6gNwwKca7Re7tRgbDQScHbxk1spoWxghFuFsvMmM3p6",
  "key8": "FpYvmwwyRhgKVyFrgXWNByrxJLKW1AKG9EcUL3Zf836T9bnVXGeHjezdrzrgSkqq169ZKPzcmM6pDxzspX3KJRi",
  "key9": "4EcPUyiHT3z28STRzMTMFB13Pi7Q8qimGgRhd1xLRRa9wNsCBMQMt4MiTmagtF7a3u7Gefj6NXkBa3UKpm2Nw527",
  "key10": "3uUF3trk5oTxuiu6xCuzNU9qviYKJR7AtccToZBqa54UUyk2vcrsZx86VicwdmtBYQjyKdQ7jVoDshqy5aH5DjzS",
  "key11": "59fXsTkQ2xHhbm3Jy9vwLDDTbumMKstSuWWP5c9M9TidP93ZxwPttS7CdbniD1MDtaq8h2B3Co2hyGnvhKFmjE2P",
  "key12": "GeXj6GCwujB6Vq7HMXbaUaQvBHZjd49k3cu88iXRjYPDqtb2asQqSXyvvxBo9Qst4YHRYxa6L7CtYmYdGpjTZCv",
  "key13": "3cyRQFD6wutVqKBawu9L3frydRYEWScnKyCPvaG7byquFF462re2Uw8tkAz3EztyVUqhHGeKZH5byQYJgin8yiDF",
  "key14": "5Ry54gA8ftrXtkx88hNLko92ztX9VkZPJscSRd311GhjVveFPwXLjARa1u8REGgoHdTEhwkARhF5JFnrC9XfJndc",
  "key15": "5nYoTfZ9eRd1Wks924WcTm3wZS5kbmVvj5dQ6hSGqced7fSXtWD6X7pUtiKwtz59QKfQXJimtbE5wUBAMeHi3c6i",
  "key16": "2VKLpLGwJrHWYWHPZd5Sgvja69VYGuFNA8kYZ9JeedwkRoFnggTGdEhZYeQiPv84rkBqrj9L8osqbWv6a3X3puXx",
  "key17": "2q49pQ8eJUYX2WSEccoTAXsiYU7t4X7jwTWYhYikHtkmLx8qpJt3qpjDzKFUtB5vYV4J4zgvwR7vAWFsUQxEdDbf",
  "key18": "42pZnaggzx3XE86bYUQH79ejmToujj4E397uKDYBLo8rUzrppEGHPCV8oDAXHY1fpYsmAvZ5ujHf2AJgr4EdHxRi",
  "key19": "3aSgm9HCLw1pBaLizge1xA3YNSpT3pvm8Z3sMs1uAmkxxLNH5D6cGWPY6ZhQxYLWAV3iNgLYKnL8zeRh4kdx5vfe",
  "key20": "4J7ZPEYefyH65e5Pb5FEnqjLZf2pZ2LZAnkmL1SRgS6anGyrXJSR4tAzciG6g2HNFSFiWXvSrthu2kD4VdqXsu99",
  "key21": "5f66fWquDgT7m2J2HdPMZdxfupAQmhkqj4Ar7QEhN69LJKMkWZvgigLPhkAGUYEgQN7NLnZq4C29qW297gmFQJpZ",
  "key22": "isvXDVSDdVd4dEfyCY3DuNAsXJEZxjwvTK6xHVLHmWho4ixoiLiDfP34DHRGPEo1266x3kSLJDi25jmUzXghZV5",
  "key23": "2hpuhb889qB6Wz1QAmXKWYoZza62K8ZvMTwdc2zFHszKjVynLJYt7DrH61ZcMbALs3ag49YTf2k46Enj1HcbveNy",
  "key24": "7YFZqxwpCLuKBQJqCK1DrBPicukceTt9e5htRhC9vXKecGchAh1aKVoZnWUHYMHJJ49uKoEScA2gazWQTTn1cUB",
  "key25": "5vsdYC4YArxXzcknRPihTt6PwsS8srHR7suTr7iArW9iBWZpdEMy6HaBxRPZjRUJ6b3hUQYZ7LpfkWN3o3iwNrz7",
  "key26": "2sN5eZAgaHwHgAEXshVCx3ZTup79odVRhuf4XBerdcfGA7W7nV4NQG4F7uMvDrv678mFH78RojccNN5YxfNqCfVN",
  "key27": "3ArA34EnQUo8dCNGHoUtJQcQgk3qfvzvp372mLnh44q8LEtfy3o5HuMpK8QoZYtfAkxSoTQfmZ3n713FCgHm4JoC",
  "key28": "42eUTZqeUHd38xFhwCjdvAyx6oJLzhb2s3hNtYzMftgg6ZF4khELk7ZSjXxfTmtFBbk28psWqzneCYeqvRLeYiJc",
  "key29": "3hmHwJJzoNVPMnG9GuWxGDUmjqYkxm94Yh1SKjEsz3YWAsa91JoXe3Gv1VtkapoXyePxMfYE7FRHuABo9EKDddsA",
  "key30": "5ap41XtdgWhvRAzNt4y3shFFRrkPW7hyk4VNTX98Tc2iGtNR8FnhRQxHNMXeWmF9DdBA2yo4zJ4Rq3h4s4G9rR1E",
  "key31": "3Q33NZmyRNErNMLWo34R6rx9ZDgoi3sGEMFqShS9bBThBgCPSTBqiG66WXyyDw4eCQw3vYtd4uSY2RLasnCLERwx",
  "key32": "f4a3ExpexfZc7nnwa2kdSxCqJYhf7da5PhX1HMyP6HrwiAL1XC32dcDZhtAej7QrKYbPeVMVKSTB91uJ3Z9P9U5",
  "key33": "wXuN3Xsq3Y3iSAhrZbj9jKATJ6Z9S8eDWyVgEotu7Yy3pvTyax2qD8SpJocKMSFPtwqm7Jr29ZTqKSjYgUteo9f"
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
