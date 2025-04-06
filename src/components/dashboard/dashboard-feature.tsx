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
    "45B5D3Kict555koemNBnJcKLmhFsEHS68eyNLFyMadgNLWa4fZZ5sEyioyJxMV5ZLELX55xgo8sHaJRjHA2izYkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDh59bHWjpQH5Qi2VCMJJx3MxH2jKBB7RApKwrCk5TdpfWPkMg45wycKq3pPJyq9AKvc4WcheXBngXZpqCGVTUZ",
  "key1": "bUmxhRQLoYLQ51voMoszwnkHCjjtnSSSH5HciZWo8UArFdmWqUdRDri4TFrjTjY7KMps4Dj4ujpYsUxe1mTokP2",
  "key2": "3TkEWbVUNri38BLyszTPDN2wPLLN5P8P4PYX5aA3ht8Sj3YTdTrWHDTPye4NREwG1gv9RkgJygp1SDB8kgFprtRo",
  "key3": "JMznD8LV9cAFj6cBar7oNNQ9ySLEakcDkYNBRyk4KnuJau9gHCFL7gsDAooexm63YBj1ecCgvzCn5RLR4CFWDLd",
  "key4": "QQTw9RdbSDS1rVr9gJVW9CwJEnTnwTwMPGwGDz2MkYeuWeYo1rWxwpv1Cnm4etwtEsSjPQ4ukHxKxQE3RuZJCuG",
  "key5": "3R6uVEZGe2BpavYa64m3ZAyqWHse6FvnSN1fu2NAdaomEC9dDGjJ7GmCsqQZ9uPGybdGY7vf335XwkziQcXApqdm",
  "key6": "2SidwYgJHuFi3zHCgHqT4rZrKXkWLetGebXt4Apjm6ZufyJV5vpnYKagber8YxoHXX5zcqU6iGoXSzbEx2PGrP5",
  "key7": "4HzvsfnBygCgCFZmEHTgBSZVaP9cSNiHtw9KZihbb5wK1nPxyS1LyuNz3F4LF5KGYj8xPxwLbxmrRHLDjJUCYGoz",
  "key8": "4coZj8Ftzx4qxGbaGMAAcdNeyf78srFRhTAW4v9Q64gLDn7wHpVyzdfkhxzRxLzdrsHQ2Pvqz2VhP94uPg3TU76k",
  "key9": "2MqJEUKcXeSeE9D9rhJaa5pWBQvW2gbBhTr5wUVBRViCEeTunDcsejuqmMx6eryz5ocRSMh2NyEniUxo1kFwpCJc",
  "key10": "3peZnbfRTjrrU44v5GGwPXDE4RupN4S7qAj9RoPv1Aa9j4kGCUDWnpU6brFK3w7PLzph4qVWb45xz88q7gDJCrpC",
  "key11": "35Chy1wmoGwuhKA48MbrmjUHecrJS2fEYajiBRpTwpp2AecxT4ZHBLCA6qFWgdgdB8kwCYiV8s1hb341E5ZEFTPs",
  "key12": "TiLBEfVWg2DKF2uStGinZah5AjfLknSv4DsZ7DoE1JUngYCKGMwSid4dAqUiUUVtYzTLkmP5tcrZXuLBLWhGKX7",
  "key13": "4DYUBqbnbYESiUse12ju9QkgA3dzpvDbDftEGVuWSMpYnHBZ3GiVak1XTkJ8JN7ZJJPKVLotPyRSLfM8EJHUZBY3",
  "key14": "45zXjGht49mEAU1jRLXsztriTi8FYnb94DG8QRZtY4wWZBFPgG853xYqF6oUdiC4Fjw786ij2XzBEaZNpXKJsm4V",
  "key15": "4GAniaSZmBFe8ZGoMKBQvccLS8326ZpNYgewMJp9hmRVLZU297G31RNCtjstmmBc1HRTvPuz2UEif2mCDk6aUP4L",
  "key16": "3PFwUu5VLUkDn1rdG7PyRdSghvC5eXKSe9wJppVyVEbZzVVHNzSC6NEobX1CWvvqQkRzpt8AMXtCoGHktXwFHLyv",
  "key17": "3ttuos2u32VrUXyG6gyE7DBC2ikPLMmEULrrjsfPt3DtHWUsLQHixgGk7GJ5tUG26SAQJHv2wBnvn3T71Fgs69pP",
  "key18": "66NwtHZpdwhRWaSchHKJXKBS5hMRRvWgTZThG5vPz9GREHqAtf7FN2SDbhBWyv6mgro1BE38fdSNFh6XrqZCvh3R",
  "key19": "EhY6gLZf7UQo7AgDVmuERCGvJUsfSaNARtT6ATVMgSWZ2QqTjePc36FGbRv17MAhXkGKH1Av1i5dWmYiVeLdPz8",
  "key20": "3xDAnWky9Ga6yXTtAPJESFNNqVGeLvm8aMiZ278mQaeAqo2K3NouQUqn8GuFYfBUS9CtPmn6f37z1AfwyJsfB4Je",
  "key21": "3tEPnuzTZetDBEfZutU4Ym7tfCgSBDaCSXW7ftVTSLW4yBZ5kvi8iWMJ1ivMJLYoL8tJd1DS4vvWbvxFGPmCoWia",
  "key22": "59ikjCfLTZjhhk1wAoQkqBFtBvQE8fyCfhJU6hMC4zfosTro6WMyGUhxYr31629fSsMGrJz8jdYyAAHSAvU5tQnx",
  "key23": "3faCPbKNHwE6UT7Rg4FS1ZKeVpqXN7JwFxPmEPhrsVtaRq5LZFXGBFHSHfMcRKsrH9tPHTsZR35RtLitvmDZB45F",
  "key24": "4qN4eKqXdHALx5zvX7v6BvKRp4AYD5AKBV2wprco1pNxnkrz4CZJvnT4nB3nUesdgLZWmifSFwCWgx4osi6M3hjC",
  "key25": "2Q8MRehfj4oixhBv5dZgwxXXn49N6CxXvcKKfKfuwFGsEjDPape9SL25gR5dtx4QG6zJ5dUyqVpQi2PX6H2rSHwx",
  "key26": "4MEdLRAZxtqRasf6NGQRRq7J1abNSBtcdZJxUebAt8EKf3EmiMy5t7PSWYNC4cXtsY3GDzsBBjt5SKVxZinQsxSq",
  "key27": "4pwyeo411tvX4PM1acXgX4E2i6ErQwqib5eCkwk1eJpPqTAGqZDPV2qrPA4FSGWVCPaHFEiZo3SExzpjFgVFS5wW",
  "key28": "xLVeye3AiWp5FF75CEHVAFQk7y8VFYJNUtNWi9eUrCEG4WjBnjztgKF14Xsv6VsLNMfpFvTCRWUsEKdsjpUGKBC",
  "key29": "3FeVKdp7mtujNpNNLQSkSeZhNRfij5QuddMSq3u6x9MBQ6MFManLjqCkFiHXpjcb5BgxD7ULyE6ufJZo5wya74En",
  "key30": "37gt2KzQAXvcrxNFh6RQGyf4VqkUHKQb9CHfsnvMBWgA1ohJ6fBtBJJPGbnZtEfnRwDsq9StstUKVgWcqH88pBn4",
  "key31": "9A34gVqTsrqjZBeozw31eJt9v9cNb7cRPTJCkhZU9JgNfNRyfNN2o25wzDv6Bk5rDUGPWQApEc9w7AKAwm9pzfa",
  "key32": "2cYX4ugfm4PGSGfoRSp2toVYuUjp8i6PLJuL5yYfCCPHB1TzBf5YSCdFtTLbuhwGk1PPHi74oAciJvcaPkLNGZe1",
  "key33": "2wRR5Tbut71nS4hh1FDG5fW1vdvnuCuBXcAr7dmnEpJgbhZUhSSkJgQRGmHuG3w2k6iyHWxSwjc91cwPzFgjHYF6",
  "key34": "57eLVHzKuR64P4pGPzahmPUV6FpPTiteWLki7EQnN6RxEyUv8D9TYN4bK768pWHXcJbqUJtjTtvogfwMqSYdcvy6",
  "key35": "C4uWtXUtXpkRNzDLzS6xKmZfZiFxcPfN3q3dNxT5yvQAJ81LKAuFUxcyPheeZQHiB2EAbh3pYk1bFSfdTCH7GxW",
  "key36": "4agLg9YSjFTUnvV14evybXPDXSFShpYT9BKeiniWKmToaMFwgGJxyR31MssNYCEuy5VpScZQ243qFkYr1kaWwftQ",
  "key37": "EAXPbQNXhoCtH99oxJAc3KufZUby98H8SnpN133HnqaAhwVkM21G6PjErGCo4mNnwztDr9pHork5kN5gjAu3V1E"
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
