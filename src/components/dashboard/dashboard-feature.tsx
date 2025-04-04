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
    "4s4J1n94EzGASVqHquYQ2AMxokJcuZfMmBptTLYjjZZB5P5cmytNMBqTm8ZXgPb3hXWog4zr7ycDLaQjJ8AWNMRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QcA88Zvd6P3aTxeTUE1hSHZXizexEUNyvKxPLEBiiKh96pnoc9JmuLuF6jdHrb7SFstXe7dQLpThG7ftEqwZaWd",
  "key1": "hdQB3DVoUAKGRoADLEnnP98p5JB5Utxhw89DKsv5GUir1wakspV2LYhbWdHm9RTcDLDYAFSkDYyimzVWJCqxdCr",
  "key2": "2vMGw1Gk1kxFyv17tRhvcq5vb97Digh9afF77Aoo3BCxUpB56zQHgz9LzEo7gemzNz4KhGrxRsADbvPMbpN6FSup",
  "key3": "3JzhzSzZYMZaqBduszdUjMaA4G32YYmobU5Gdh97mDBiqK3FKNisPkaigzCJis4RkaK3RcMyb6mP5uPDrCXm97wQ",
  "key4": "27jWHrbLaxkMeiq5VettGuBge2pggXDBsYPikQrEjjKuQm5oLHy87uMHePbsvJFSEPGH5Pg7sFn5uAY73sYTcGK8",
  "key5": "4VqDJuUcQy9awS5V4D3QbxRoYYrdzdZhvWSvkA8WpgKLk6vaGX6CFHG7A6hQpBFytM9KHTwjcLVyVzDrscLEXNk4",
  "key6": "55jaW4JXoEGTQJnCW1vjRa7QoeNksXbW89s72iarb4JUAixBr8f19vVcYXJtJaRxh7h5uDXMg9rHZAbdDjJ5ehf7",
  "key7": "SUSzTR6bhN9v2RBnpbEJzPAFBKffhf6jyNTqjeeja1kgSjuG7hDwyiNu9M33uf3T9aexbejkLCvTuuRbh1xre1W",
  "key8": "5ib2dpCNHoMUnGCu9tBfNZh6xFAbo42JcHeXXvJd21YTqUo3Xs474MftwnZGfR1jPncG5ABxiVRmv3CY2msC8UsL",
  "key9": "4jeUaAoKRr1zKFRzJ1bdwXjvZfBGF4FPwYwrYo1Ck1f5txF1diDkhSLkhPx4LZJofqPduK3N7pXMviUAUREpr6Vd",
  "key10": "3E4QHk8EQZtubDwU95Voyyd5NydMMntdxV71s6dkCnYj33Ur6FPtV6GDDaLmyKGy33uSYFsVMcfeSTFF1RtWnAS6",
  "key11": "3rbULVLbwpvx59fQCAy4th5V5vSMGmggNxGRWbYaZt7TeuKrbhEeFTHELBnuGEZvb7FaTmsXmMxwaYhqKhvrzPGv",
  "key12": "5Di8BL6xDwQpjkuJJFy9AzYF4dPJ9RHbUmZeyuEupQRRyg9cizJm1WzqXyxTWvv77j4QeGP2GdN9M2x17mXCT8Bc",
  "key13": "3aposjNqiKeuAh9dpCbXKEWbqzryqWkxN4P4mh4tG8pRVj5Q1MiPge5d9cg6NM3sR2XbCvJNSWqFMGEdcaTACJ84",
  "key14": "2yibY5XdWi1AUhLzsyhG1ot7nrn3vnNxFU6RrtgM3tque98f8KNbAousTw4WYLAAYYrLonoP5emCXckPEYntWFqT",
  "key15": "1QoHWDnovvLDZx8DzH1jhcX7UoLz4JqiJXwSPXq1A46CJDSVCHLa9gzPV1xbK4AVhnVFBcK5f7sirpVEomVU3pC",
  "key16": "22BQ59iX2RjvuMUjDSERfF4HJSA3frY3K6Hfy3EaNQkwpTDSnXAXF1WEfjCf1jc9tzR12ukwkuc8j58T81GBCJd6",
  "key17": "5Nu2h5mFNSurBoEEoYe7yGxYzjqEV1ufeZqHvgAkKn12ueaAWU9zPbeTyY4YhMLvuph8LCVc22FvpcTzrPqKjTjx",
  "key18": "L9FJiUNzS8mCZ2UWsmXHyM48jpbwmuE1JjwMBgojNAHPTMyKiY1F76xT4RDeYCQ8AF6J4H6fLoKqU1oki6kHNEr",
  "key19": "5u5aA1QAvW9cFetya5DmYZ7aJ5Zee8dy2rWnfEQcT7RFgapv5Jb595P8MGRaVt5gBL6QXjoUd7oxbhyUUHhJqaCM",
  "key20": "3pzPeBcz7AG7VKz9AVU5gD4HDBYoCnL66xNio6JnewZ3qMpQeQXCrq28AQhZPq6Ja8JFHRwoDzsq22fN1nJ1Uifx",
  "key21": "4gAF8aCsAjDTHAoo5k9EPAm52APCj33B41A2vocSgdcw1mZ9k2r2upBsoPtCEK7mhke9Pp9gtLcCv4o8MZCpQPSG",
  "key22": "2mdBTqeudcaVWkELiavrqr9CZBksBnpLzXE2UbUiQ2q8DDLtddkALSVwSccSu8uv6HJwTtKgFmTmKH9tVe56vEhx",
  "key23": "3J5b8G2MiYGw3nZZQarEHHCqzQWq7ATMvber3EeD53cNYvR4rsCAbcPDMtneSh5bx9v121rHhndrpZ2WSML8Pq9r",
  "key24": "64NUVkN9kbehUsNFxo84Ji8Sb6a8b4MhQnKGTQuUaPdERL1XTHj6TCqqLHvrdrN6qSiD5zbogvTpwRS8uztshNxA",
  "key25": "4Uqt2CAZP6aCb495Vq1pQnTLqAN3oHy24fnn7j86LdpxnrB9zARdy8wt5mnBch2mPfo8QfRAQgGUy1bfFFL2WbAc",
  "key26": "4XVTnrqaW9wruqUoFyDSCe7YYyorXFmU6mZ9EGE249vB9ZpEm1py3HsbZdNCCVAL6STKDZFSSyDmz7MPktYwdoHu",
  "key27": "P3RuzSKf4gBthjCHcuzE6cKq9k1wfwiEmX8x1nxQ8nnpoJMwwtqLEFRUwmHpzd3E5vnWgrcgtqTyE27eiLteHvh",
  "key28": "2kwnhJWS3gcvVv9sormzDzLd8os2WwLRY5dMz36tWUVZ1AHg5NG2qmVfEupMRVYZdAxNRGyN9V93mCDZbFxBXes",
  "key29": "2wVLhiYrBwxmz8jRk9M5ANY3qbHpyZHRu68UfauZd3EQbXFHFmroxyge1WDjeib3AQTEcDu437tvBoCerepLEzPk"
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
