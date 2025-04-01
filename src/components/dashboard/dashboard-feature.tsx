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
    "3r6XCzNFjLgVdFTGzknocFxQvJwqw1j6rf3MV1cxkokKMdJ77362umMe5Jw3Tj2wrtX5qeyyvvhE6hfSC6sRZSFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juVtwWe4Hiv6vJkrGp99UAMoG5UBzZhmfWcm94g4fLMiXymCwMBX2mvjuAWhwuye3NEGdvHLCZcNkjWtY6quUWL",
  "key1": "5RfkXN9o7dy8SZG1JcHxAguPCHGte3FZ5zstqbiyed7D2cLDfVe4ai2CPwUpvZ2Y8rLyyFJZb8PcyTF1pRKNFi34",
  "key2": "5GQHegbz2bSwQqUMQ61P8X5h2hCEhvrPE6uMaHmij3WCr5o399UjprQd78EPkPTyY3XhupdBvffFWMTxn32S6W6A",
  "key3": "647h5e3FtJbZGMe7Dy4VyGqxWCPTLmHRrLzxZv52kfXQZq4Brmynn3uCUerVXLMYspm1bDwkDgCk3h3y8aPr9oR5",
  "key4": "3BRWHHBhWgzXSBazEGSSCHDffFKnArBMvCAqjavpgxKLGeMUqr8DVqy6tLtCPHBLQV7AHWNbgn6xX6DA9fKTfTtM",
  "key5": "5MgRpzipkEE2eTJMS5oz1YvaFkpTgNaBbHGEQgFumARHwLxHSu1wtLreg9r5itRZ8qx6r16thECnEHsnLEWuUMHQ",
  "key6": "61pHYhsAFgmn5dwnrP5gEdyRsBuGsEZiYcfyfHhLo4VVvWf9ddyMm6NwCfaZJZefnZQC1aXpsmVi7JEw9PMCLqqM",
  "key7": "44RARecrCFQhF8knZAG9nAmYvLaaCikLmaLwyJmTyK7XRKp9ALGnfArbmkMh7Cz7cskK1ddG4KWbiJaWZjASxQPR",
  "key8": "2cCiCiivbccKqqpNrn5AhrBrnoaKfonVifWxjEvs1vCqjqUmsQjKKk2eWHcPahvaiQrCL1pgE8x8TJKTqPN6GUzL",
  "key9": "B3WeHkygtG1KbzDHSxa6x79DhXEubqxDp2erFhb4oCWR76EKUCnmh5j3fDxQdGcfdXSJF3VhBYzsYGdfkWxmLoG",
  "key10": "3Pe43KapcgQnd4SxTrEA86WwdvZJg2byoEt7fH99eXCfhoiiT6Npkwfq73gPbfqdwouMpXCuDd9K2A9eJiU5dqyn",
  "key11": "3Cy3qion9BB8GRG6z5LfgmDMqBAfkLq21VCtGRJnQLLXULBmbntf8QpDwCEFF4rLogT45cRE3tL4YxnFWG73KMit",
  "key12": "3XTmv8gv9EJdGeJbwDi9wr8rmm2Jcyu94bfsm6YUt6PEktbxbwp3wjGRyRuVRhvPynpojvBvb2a24y7JZBxnmu2g",
  "key13": "gLfuwqFRYjRvfGedc2wry8RuRYKsynDwBt4bqHybYuXtKQ6Cxv6DxpopT8WXUsrrtPUAwczMTCo3oT29NZnoxAq",
  "key14": "uTjPH9Axb2kEc5Ygmg4WCEcy846mwZMnEbCg7XydLECUFNozVdP4cLSp42c2GcUyH6PsWEhXZC3Tb5K4iMzjFkg",
  "key15": "5F4v1vTzyTz2HVDV957GC6XpApeUkLES34ZuNcYfBgrggCqnMJbzyqVRDXv3DxSdic6oSvLZ54qvojcBPeYMMvtu",
  "key16": "4gDReLqkSxk2tVZGgx1uJJyj1SDs7cz7ybrLWMH5BibBmyinPWQXhWuZhyiEy6sfPC3s3QZm3ZnxsrZyRwXNnuoK",
  "key17": "4bpoXRJbCvm8Me2pSkFkpvM74Pd89idLS4W6yWyyaLXfZzoF7caZw29grQxCdpe6uUK8D7zxA5wAr3jLasNQwKks",
  "key18": "5Y7ZgGJkakT5dp1Beskib4N4uwLhnKfsDZpoG4oDV4mywtNK5QMeqphQzX6eYutMDTjcp6bY7fB5mQu6TnrMS89u",
  "key19": "5yv6EtXmeDbtoviJzGkeXCC5Ysyk842QpQA1XH9pk27Am1W2APsQkiDCKfZ19ETpYXfv1mNj66XYdJ9Rm2m6fiXT",
  "key20": "5KhURYoeC15sreokZUBCEmh46jnwBPJHQRAhTfPuvLkKug89bKvpM9Aa8vi3aQ4fBeJ8yd8yFeZY4Wjab6tKskEH",
  "key21": "2FWf99VPyvwoTP9MQUtxoDU2xUVh6LMs3JHm16at4rzZyX6SdRcmnYzxzrBfWMr8pXogjsKaErC7Y1sH1GYS4wjX",
  "key22": "3FTnEtfCkLA9DfTEgcy5KDk9Yf9xAh1AkAJ6depBhnNT67Jb7fyMgQFQ8TzvKpkUSwD65AoJzzw6Qvz2DV8SzXx4",
  "key23": "7fKLyb23L7Yff5PgsaaKS66aJXhpSpy6Wm8mYozuLarsFfoHvYcLLKu54eHJCxVPDw7G7PZbR3HBYGui81eqb2U",
  "key24": "3eL8K1ru2iJXaRqVDtnMc8q7fAz9ZoEcE12fZeTFnwKVLQ1385KyUfjwBJ4n5597jyjqVBMC2Q5qCkt7diqFRoTM",
  "key25": "35g75oY3soZG618DnNF1DJT8qc1yVbuhka8jen7nfmhL3rD2ceC5vR9L28Ec5rstebMsD3LLrd6yzZPL3ZnYCZEr",
  "key26": "5m1UgNhuC4YAroYb1noH6urPdYLpKgd8rgm5Qzw3KXsLeWDMUnNAfX1bDmYDKj9MozNm9Wm8E8gGiTGr4dtycU6F",
  "key27": "XV3W6Ntn29sb14YodFKYg1zVbDGh7kHzz8YbjZhMdHdZitT4VeJMA1S9hL3r4a7Y874JPsPtPXematdusmXxtpu",
  "key28": "33MbjFDpMDUzNgg8dVDZA4D6NRpRYtc4RP36JGpYStgEcrFh5dfxRcdJNRbAnk4eam74dx1MKKTvVK916cGbCRCM",
  "key29": "4JtXodyTPrSYZJhA8wa3hUkmezwihsNZnCK21GDmtDdHukDjfUmfNgETEWovtWLDyyznVTotKcea13qJHnHuYLQu",
  "key30": "3jM4offNBabe1ZrYL1R12jXgpCEWHv4NBBJ5wnYc5XY4aeambrmfNjRyXc7BaEdx5rRjwTYmjZLwMgqntKaeLNA4",
  "key31": "3Vwr4QYXkRVCMnYpd5bipjumV5ad7JXT1iCKXH7kVzpRN6BsLxnk6GxNhzvacHe2fJNtYpxCDcYTh5gfV15XGC28",
  "key32": "57GZVwfsr4Aw7ZSATjgQLPFfMV72fWZT5Gj9hvRrLYDwZVpbwdsES5jFjXFaoKNTuAfNrjUoK7HBb3j7VY13wyEC",
  "key33": "4ZrU99Kzpy1Z1NLvDaTJ1Qmr4KvNfD3KZRXV1B8FxYkY5YX4rerYx4ugbXPQxqiL5GtQjNFCXoYpBRECdSwx4eMn",
  "key34": "2UQgqiyCPRf8xbC3DWu4S8ojhd7V4Xqys7AAQagN2e726X7frCvyyaL92aQBMeXDBCiQApLtMwiiiGfZSTHHnSMG",
  "key35": "3GzM18wDq1WMrqwZpqnpBwME79RBzSTLMbcZutJR95iSvxtosNGj2HwY2aDWwGGoLAvysVBqV1B8GTmX6wqDLM7a",
  "key36": "66QNBYSJ3H5R8RiDScFkQJ7cuqtEjQMKV2YsQsQqXHupfrkpD6J3h2rD4v4FcEjTeurDdMnsFjv4HqY2tHg19VSy"
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
