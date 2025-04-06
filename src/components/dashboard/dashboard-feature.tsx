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
    "3z2zncv6rEtiXFYxw2NSgrcf3zk7a8st3QqqVy6Qhx82JY31uyy7ZzXeZG4sRuVM9dmS12eaG8sp4byzogw65dKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDeVtjGb5NqkCb61Du35H782FBNTtMww3pAbrdY6oJ8Rkp14v6M7DYeiJyUnQzwVq11a1HYbK84bs9fhk17kYF3",
  "key1": "4XDXSerT43CEdcewPh7wdPKtGk8zauTE4689EGPPnKGgv78Tm4b1SxTvSmkYZ9339jPUAG1r3UczgGM7Zt5fX3mc",
  "key2": "5QY2na5NwpbrdR3XL5fUU4QimcZEG7Ggjj42TDeJRX3RjfuXZVKiQC9aPr8C1NdqvmRuoNd1VrnAYC9xsDa8qoCd",
  "key3": "31xKbfzB3AMA6V4UdenK7dkcUqeyzv9bAxbGQ4ce8oyLXgLTu6JbDr3nFM5VDiPCVb6N38GihK45VfqqT5AxD2iX",
  "key4": "S2of681SctLn8d7wunmRnLKJi6wjv8q37nSEZRhTYv3qPdG4ffP7QzAJKr4TQp8mc7k7WbocLgMyV87p2KanhRx",
  "key5": "5oM8HiJ3iR1zys5iYF9tvb4kaUhHVs4SshiiusirKhj14CwherVe4N2CdT8pNm4YGjigcuLBF3A6i1e74rxJaFzQ",
  "key6": "LJLzUqxhazBQtGgLVJfygDM1Qbimo1au7HLmRJE69b9Ujn5BVzSDcChVHXEF7JQmfhsVSrhsnZm2FiNMSK9Gd9W",
  "key7": "2a4Gk75h8MY2ucsdHZdCKM5UTvm77nA9dPaZKezhk8STpEFJpcs7gmWAc8sY4x7xs2T2vMH5YnkTffmPd8Gy5bxq",
  "key8": "4qBqNQQsoryUSxZNJJTRH6doZNvfxV7zEqZYAN5e755NxehbktnDpuc256GwL9XAPXwsX8HLAWFsoc37ZPiRhyEV",
  "key9": "5KV6Yo7r7HGF8MhNPi17NnhCw6T8Z8LtMWLtfZUpcKz9zrAPWua282XUL9TVjXcS2MsLmh4z8QC58ajnpxN52cZy",
  "key10": "476KAH9KbmNxJLpZT7f93g9EiP8rajuEHKpQ5ujyJvzTsTBVPammnCfoU5SL56q3HY6eQduExA4TfdXkEPVWF1jA",
  "key11": "3YSdBXTfPVqcF8rEVj1Uq6vgK8hMnaVqtXybQSTVVX6T7jqRRYnUmsA3asF7suGNYWRNZ3RjiY63QSCtXEyhVTJx",
  "key12": "3oxo2oSxxjceUYbhhCMqpZb68P6GbjsAEGgj4oLBt1rhqKTp5S3pJXN7xdxTFwrYR4sQHYbkftTzMpSpJdphiByf",
  "key13": "3P6tQHCasQ4R6jjZwrD2AAL8ijE6LzzABatTD3qFDtWH5CHn6HpmxqjxNL4iV5KuNRqCeR4vYrbUtJuis8R8bZze",
  "key14": "5zDLqhgBuaRLbUyq2212PKVAUApknKtVfXpMWoUqe5r1ySf37r6fEWTnXZYgQH6qQfgzQ2GK5NgHsSPoZF4yP8Ui",
  "key15": "UNNiYBDaqb3EhWWc1FHLsHNQ1tQGAtrZCommQ67T35rH7Jhp4T8TV6sdHyqo9Z1BAPmSAB2gNsrGqNd578UXKPQ",
  "key16": "d4V3SLJncf9gjhg3p6ENrJP7CFYVBu7j4gcWiw71jPVavtCcQq67J5xHxwa9UdZK1eABrzXAao72Tz1sfELYjSE",
  "key17": "2tm5CneygqUr4j7DpYNSVtVFNUAUqvgrG7HPx2dnh7MJck8q8Vy2rxfH4ZD1ooHuWg3uK4H9eH9FehGELyGVC3Tp",
  "key18": "2GjezyW1ofnZQXVC44UHk3kDBsLjshhtr5i1KU5sQchH3cdR6hkGxfGgfy8UVBq38anoF6donjh7vFF8vX9T2ZAS",
  "key19": "2wNJMYp8wF5T3xEpMtBs5D6bqvpvM1inNdHWE7cMD44XJHruwEip3YNtQ9Ebhy82TKLqBUepDYambh3LVgtgegYf",
  "key20": "4vWm7aboKhkcW9Dugxm4sSiYjLJU3uiy8HpqgxCDyera83BaruGb6faniPvvF2LrjNgnVo5VGPg2DctFkmPqrAWV",
  "key21": "2Sd9BPzp4e6GeFejdhHLWHQbLK5o3XKw2rKCh3HxJv9CTEjSgqEFa5XgfSu9jnJZAY1ZvfK25TDFkAC3upxVUocf",
  "key22": "27YG4HH74AsFN2PhW6SJEeWMzJG9hx7BqrtHYNe1XZWEH7hABJG4JRzfmA8zdC42ddqcYdZNPvYehJwooVGMGRK6",
  "key23": "4H72Wx1o3niC5xMiK4ETY6Sxjk5rDwPWcdjDuAtrHun8LavKmZaVWiLyxGPnmSXqa95LuhGAsJipaECq2hk5s7fb",
  "key24": "256z8wg6fFYtbshJE9CicD9Y1GLUBnM3J4AgCftz7EtF54GiUfacZ5r3dX3muPmgt4jx1v1WWHPKbgsnDqvD6tKj"
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
