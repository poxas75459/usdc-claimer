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
    "3yKgFQrUrfwajYVemQ3jQNXMnybZ84hUHXQy9RwHXj1PEa6GhWD2bFbsSTzn8ndRtyVLFPJ4UrBTyZ1B66bDcxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3XWtfrv8NkcF78FMy6Qoz1A62AtSDhk7FdC77o6AMSjDqge373otZXCXCQfUQnww9LJcJWvDVisVX6N8fR5itG",
  "key1": "2YdZ4axTSWVYW3hQXtJ8e4dptBtaQbxrJVLMfKJdTQamw3bJXYEGygkpeKkzvXyqLEtByAQmNXQ7rqg3ifhHzeLX",
  "key2": "2vdp5K3p6nwRbxURic3pFTfJfVEnMVr43zkLCcPCH5iHyo6Z7maNs2ccZ9HL14rkneEpfk5LxC3h9WzLEGQqNCTZ",
  "key3": "352kRfhqoMuYTQjuHLAYVnTuq3AtiEHgpyWGt9atAvekUnS43UHCVysCeWLbrqgpbmUgoPLxDhNdJaQqkTphBJ12",
  "key4": "4LryoZAZdRD7eWQMFgDxbpnmhC1BPmgAw1ehXresDb6PUUJi9GezcJNmo6cZUsHqZquhgcuaUs5eRnpaXQ2aiR6L",
  "key5": "2PmATwX2WHjeeKLvHg3oC7mD7uoKFpzkuVi72s83mgs422C2UUg9NDeFZUBqv5Fveup5A7bYWazQv4kfm5PTXMQj",
  "key6": "5bsLHZyspvdVUPyc7TLqLW3GsFqbmuYmJsEenY2QLqRWvaAeR8Jy1gLS1jqoMFpxwfkeM6YMUUUGpug9nrzhErP4",
  "key7": "yo683YifxVX594xmJXFm4o6jPuv81oBzg6c8RsakWYGk7t3CmZf4hgCf4WGsLp1kKjE1qf6P6aJdFA5UNHb7yFy",
  "key8": "3SrWuzVParAckD2SeaPgP3mZjDqWZkoZQ9xuoampEePSiTERuXD1o93yCUEQ31MfsrFu5XCUfocoPHkw7n6Bv6gh",
  "key9": "5wTfNTnrYxtZTzXKPovhk8K67d1U7aX69wEwAKKoo1f3hVSV3hd7Y54mmWGZGnmX7Jr2mHofvn6vaeDU8n4kRf4Z",
  "key10": "2Na9ewREGtPHssCnBkXxP6WhcdeHW9x19kr2E6uYAW2Tt1aAkMV8K5geeF2c4kvPVmCiasPi3q4fzzhXPD7uWE9R",
  "key11": "5cy9P8otYN52Wy2eVXgXnwsf7N3xEBNLDTmAfpngmq9WJNUA9Be7J9nA8RojDVchjq1121m8Frry39uB8rrgPx4d",
  "key12": "47gK4MHCYUp2PWqVqtQjfUFZsbPGSfnPKMdHnR4LAyZg7GJojZc7s81Byc5eHg7a6kdHduLhV4H1w2cmEXhRB84C",
  "key13": "4twGsF6mez6FKxH25DzGSUTqpxQZ7rVGcdtDCTHwiN33BNDbwkwF6LptWiyn39FdJxtNMBxp6hF3LQrQKoXuGSGk",
  "key14": "2w8Lhq1Jt4Mrvh8BrBVttn2F8xET5fXYVpXrfMnSkQHkcdvsJr89b9Vu7eHS73vKFAAEr4Wb22GkA18ASSqtw6bz",
  "key15": "WFg9bS1L1DEeDPm8yKpAGKWJ8J3kiJ6mSNvBt8nBuuiw6K3BoQNWCzTnG2PmvRHWY9xBPQaDdTNjaDo5VvrYHka",
  "key16": "3GzgMZxG3in4fRCeVYxuiazYZqncpCLxyiT26pMu79T6RwJzqoQSnM5pS7eRNVRtcVETghuLmFQATRDCGsSJdkbc",
  "key17": "5hkkCVPthhzFzPyX1JZAdneBWCY4CxR1s3anWxdSwLUWL9tWCNAWGb7t9mXa1mF6bLdbJ8X7SEf9qrJEmhEZZH9e",
  "key18": "37nJsmEN68GmY9owCptQdTxXcQ5z4rss7ue2DJJ7JGtRwxPtEHEMNr8SQ7PhKgejKCjxDTrsKvTatcVPb7B7oPZ4",
  "key19": "6gYqdsYo7FJAw86gc8bpXughsYLSCj4S79nBVvfGYZWCz7pCewHz9vwT5xVUiLf1CCgftSAAExJB3iKM6pzrYjJ",
  "key20": "5qYqddQr5fF3fcVZi6YoQAt9Wea38n7Qz9KZjpXYT6jf1szNyB5uWHoPcMDe5FwXKgTCFDze6VtRwo8BEPV2nwJ5",
  "key21": "oF8UD4cgDGRnEgorq8krasML785mqiSkCkauzYGCRG2sGbYtoma6CyLEwFuVKHWuSKL56gYN3PKGwfciZYqGu3g",
  "key22": "2vYAzpRk7ekXrea28ZbTfr8otFMDhQDpX92FNWtwSyq9yT9Ff5NbdQ8X6NDUJYskvhEHfru81X2jNUkJFjxmL2aL",
  "key23": "5BfFP859ww5hmXk5gAcg3rgoHuHe6sF1F11AsVGRQdeyj9ha3pempmiiTUjMk7ExR3iohbMNHvzkEHSdXkGjveMQ",
  "key24": "4YDFqkMNqYjDj6LLu7CTNtVjoPCx8cv6pDSMoNQKi9ysG1dp3vy7XWLC7QFzuxbqmVjTpqAoBu4ansDVvWyS7jb7",
  "key25": "2wPBxBha6yB5qj4vU4415jFBQtG5xoQCHoZxpF92Z2XWZpG6A5vMYJqh3SYnt6D4eRT1ARmrpMr8Peum5zshj64P",
  "key26": "2wgQYWeAzV2Au2GwAjfC6Qe8vfXtjxfnWtyWSMeKjxQ8HyhUzXd31SQ1HuiLiVxbW1MX11EkdNz1JJX4fxo5jh1J",
  "key27": "3xFJQFMbJzmgamV2ss1GaLLDuKcepNm1vLu4k87J33JnH2SKWcYovhvR5gY1wYZbzDHevn73Z2WNuScJfE1Pfqu7",
  "key28": "4jGYUUZi9GwJeEriCiDiX4JmJzC1ApAV1GXqey9EHuAFEXb8ibNaJ4GZAjqv4Ky7SrikSc9UKEYfuZT9P7Nc5NpC",
  "key29": "5XhKdTdqTx2vWZ2Wu7jw7TEjmPR61fpUzxSSjB5WXLM2RU1mKsgaxgJBKZkgoAGE9bhcBevpf9PdRpaJWQDrFGb5",
  "key30": "5bSqEizNzqCmjJgdsAqvxihdeyjwruX8qm6fhmtohKXTktbFwo735QC2UNA2V97qywegG4Kc4L436cby4THmENt8",
  "key31": "4YFdFtnfHPxxdqxHfgyVjEvA1mDbSn6f2C3yjx5R2cTj6jncv7SeFqX8Xj5vtr36oFqT7Biqv255HMBmZmSNtFti",
  "key32": "3AAN8zoP7taN2A7XTTfBrYXyoCLW3e5vBxfQZFd6F6toFbpLVZbmmAzWYhDcQZv1dDzsTXhxvRP95Agefbfwdfn9",
  "key33": "DHMqKQQJjmmz3Ex6A3GPHvuL9vrcrSE1akRiWgCLaX8Q9eidGpbkHXgAzQ8Nv8uhGJwqpE3wbmeJ4fdHfF6hsKV",
  "key34": "2XfGqUUfSJT61tLtBSBxTGme8Mq7b5q353W5yxcDAvRP4ZUwpg6EE3c1d7NKaCy5yQJMvbAVpNzW8pRdGRTD2fX6",
  "key35": "2uXSBEbXVkbPFf5E7ipUi3LSeSGfPNLCw7xd9mqe22xRw9WpHqeFUqfmxiN3obnPTEdW3oX8VYvHzhmZFsNU4S1N",
  "key36": "4c5YScBhhtKqAdcjKpt3xkgph7sM8fHfSrQxY81AZBTowiumMuMw3WfMvLJT2dth8Jmx5rcAW2tTvvfKdegBqLKE",
  "key37": "3dSMZ79EcsZghg4P9Cgm1q4seTqY6FnEwv8LFW8ELg5NMNsTV8uXu9cb3Qe1ySDvgab9ygQLphc2DQdH9mG1mxak",
  "key38": "eRmdwJfSh3shPfFinRxq7k5HXSTcsVT6t4XYWSK5f8UT3CkecEujnsjVWd7yACfd2HgzUpvW7SUD8rfLWtqSkgm",
  "key39": "2qnTxcUk1eyZboPk25PJXmcHUBd9MJrcNcY3tna62oJHaRk9eJP89hX4ZtGpazwS1dPzEbtoB9HAyik4Cx34Hrdv",
  "key40": "hus3mEAHWaBysNHQQbsrXE47w3QCzMu6nmMEZpy8K1RBmPvqsKq78T3Z9Y11F5twHtx3E4ta2GtNFNAhvgWvQtV",
  "key41": "2ZbnZoenWbp7xdY4NStCn6LA4YpAhDLzHBVCZpVpuZmZwuBFWc6bWuSwAzgFWXUn3cs4QDL6bqyjCrHUVvDQkoeL"
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
