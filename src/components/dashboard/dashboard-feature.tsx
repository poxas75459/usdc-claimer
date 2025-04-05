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
    "4dbMjaAWegszTExpeM4saa6Cg3Gx7VCbWNwKRx1qBsYFbhu3kS9WEXDPDvc7gZBHBUVqwGa2MFFXz7H3VRqDwU8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KSdvRDPKNWoZsGa2uhowoGU1G3sf1y1kL8pffwGs4NafSrrNFTzeV6zQjxMgXemUQYQx9wwcUUW3jUxCnB2aRX",
  "key1": "4VMzj19a53Z9o7g8akYrHPFJmVrBZhHGdMhWZBjz4q8usUCEUFdmYtbJWvhNTADtfa9DSoVxDAx5NowKt8Yphquq",
  "key2": "3ZsumFzz9qYnraoqMPZ1gjTh7AYrSgZASrvA3VEL9SuWVceSzayodYGbj9maHzpmzDDR6ZDBeXMBy6kNFHDLTnQy",
  "key3": "3PV1VUDiM1J8vidLzVCrq33GUyXqpvToUWgwnthXwmC1GZg9te4pYVkcmk7Yj5SCKDa4P6qxLSEjpJX7nfUcvGwY",
  "key4": "2HYTK6xHBHxnzTcWcb3WExhnewNAyED7r25hi8ftbXHJRe61BwFSerZVGwBywYXFykJ6rXFkaA9EvjksaT7tvwqz",
  "key5": "iBLDJqpvHUXuFEpDNPNUavDYcTkpTCZKwScUWfnspwrxZVrk4ugmctjzD88KvCYwoc6ws9SUL7HF47wWYVjC4WS",
  "key6": "5MwY6oqC53dsFVnrXUoJ6hXehu5EuzXukPhJgxkT6iLvdCPZrGPWQrmqxaSx8Jt5ViK7txX9pVwhrycqNBip2zyL",
  "key7": "3RPVu5hGyfqiJVMCNffUScHGmBJCBh8N8aBLDicbxTgQcESA8PccucF2ioLEEbPjseBLGVqf8x75kf1AzqAPMGNw",
  "key8": "pULM8Jj9L8PiYoaoBV2teAqmtfFzE7vBxkeQFHyW5Ckh4TX93AgzcbLQzXDpZC5Qvqgfu3uKB7B6zqdjF88DCT9",
  "key9": "3ET7JqR23Qv1AfYDNz9WVUY53WMHbrBjb1FSTQmUvurgBhPGMNs7ptozbQmahV8sPoiBhqrz2yTXakQLJ4SAUfit",
  "key10": "2qcFQJnzcUwzrSKd7McT2gUbtCbiFndSjMjsLXVQDKn4S3oa4dsjktzeAKLX95pGRDV57WDDd8dPoPSJDtfymfLr",
  "key11": "RpnFH8C7ykse9oatLrEz1izjjcrdWyp1KNwKo9RadsFZqwZp86wddadeJkRsmSDtXeaVNNsmwSySsgeovuWTLW5",
  "key12": "5jDVeTVm2Mn2xVJFjESpNxiUqHyiLeEW62Zz7rBVjbTqcbYfywthCgkYHkfetUBtJYwW2wu8n26zqg8YcbyTn9eZ",
  "key13": "2p4LZP12pPAvs5LDxAL3HAyjdftSr9RwPYHjYnqX4WZCs2wTZZPqcbEnR1T4WCHyX4jTGP28j7b5CZqqmrrBgsyU",
  "key14": "58RNJcv786r5Hy8piG8Ds9orAadJ5Fe9WJsddJWnuifiAb8N2rW2AoQmHPPmEu3not1VuAimxPnMVAZLLrvUAdCi",
  "key15": "5ULLsL6QtFNPwTheumAX2SPneU8k2PGywAo3UPArTuGeWXXvgppHhe3kF8km6Dusyvxy66mc81E1y1aMMsNs6ZPN",
  "key16": "5eNy3FBo6CsNgrq7mCmFqDxnKHPLrGeJEJQxJpKQ3ZEAHPHrAkdE8DEeJyxhpj7P8y2RghZ3XyeeVZjJwY3gkbKm",
  "key17": "4ZkuAi5FfutWEU1mZuXWGMvh1n9s13DrMy22kNeryejpvAGpUQPTcywe2vYbTiqtvDk8PE4qPXnbhiNt7MKgR1xe",
  "key18": "2Q7JhD3nDmv7pANEQTUdKf6zRL51xkrV7CEUYEuzuBcqTYBbtPdSrGZExbTy3nnNNTk8xy3MRJEbaBc15UvKNCqk",
  "key19": "1JeoJPeZ1cX5bbjU9quZbXWiurf3sQGrYrtC6834RUaScpZTi6AeeheVL9UmsQvufT1LsziRRi6vcko5sjSKDmU",
  "key20": "2EBEC1bjBgKXsSyBcD18zCi1yjW52QYefYoSSgnG8U9tKLVfNaZLNyfPN8RZXn4NMPgoWJqZYtxaKPAEocPNvohM",
  "key21": "R2KYd6iWhzRJ1SJRvqdeXpAR2nCi2HKdwUSFejfqACyeqLMmtWqUMMXzAheunpm3Sx3zhRgFZt4hZNcaSNYdWrk",
  "key22": "281k1W8zfoPRrRSqAg7ZdVjfdTQ4e5y2ruHx5bCm5wqxCcPcTDFtEgT9wxFwkQ8FXL6sKwrScUzsAfYY7BdbXnAs",
  "key23": "3Ztevy7Qj1wi2aBLvyvdFZv7AA4AiUEKUBCC152YRuGBTcCyyedukJQpgGchtQj7uJGwCp7DFmoSFCsqiCwxtARS",
  "key24": "5miZQBG47tkb8aCC84mCgUrcWJfPZQotP4o4fmfrxSGBbWUS7RrZjA5ugrsCav1uvi6XkvhRAXCtNJaoxrPFuad2",
  "key25": "2VK54LXcMzZRkMwmD1WTFgZwLaDVUaQwKTDSsD64qJqnQtERbmAK3AEsiQpasoSkiD7rvmgu1hzvqrz2fExoPE5n",
  "key26": "2SnWKMusZdxr4NrLCoo62jJQozBr6exUyPfH9SYM1kFA5wuZxB7QDqTPqBBSQSqaMHiXgGvRHBN7ZruMrnsvbrDf",
  "key27": "3wuovQv7kxS4T3sQUuoXBPeyY1GvGYy9LDiMcgZB2NRCmzbd4G1xRfEZHF9xtFLYpc2CJ5HvWWNC1oce5PsoEf1N",
  "key28": "21Hg3WyzG8NXVMnPQoXEQznue9mwT56n9pzXohgGrJJz3NGqoYhWKp4dYj1jAMGfJZVuwC6Wp7w8qWYADq9BrtGp",
  "key29": "4m2e6p67SiTreY9gZwbjGUc296JmNhXjaMzKkTT4NnbVt3bGKPjxBhy25nikAdsT811s1j3xTHdTFcASC4eZMJaW"
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
