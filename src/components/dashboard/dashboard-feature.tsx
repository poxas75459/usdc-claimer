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
    "3x9L6d8RzTwDTJgCDCGdcuTKyk8xRXnU2TMStwe3maKazHKVytrQJ3x7KeCUwfdni9xqRXnZgYsf1iZB32nLGQy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prG3B9MJZpfa6Rrd5kwpwSSQpkpuFpSpHFZUHevohiJsRGnAgCoLWeuTcyGAqy3fM511e8nUnVjPDUKA2ZVPwvZ",
  "key1": "C3ycmo4qMZCAcuhUh7rio4zLJD8U9SCna7sNkRywxJ4gTGjVoQvEZDrseAG4ogsEJ57mRd6PzeidGYmWEyaBBU1",
  "key2": "2FxpQuqs97vR39jeNGgdZbTHfSusL3jYCQcU68qspjLk5jR3dD3gSNkkrBJikNPHwwBWGha96G1Ry8tg23YrXgWy",
  "key3": "4P9hJmqpx7HWkBE8w662WEuVbyS4ywCCwdZNkepszyTwm2GoibSeXSBCkgcJJx9nkid22zBXRRiW6xtvpbY2UgNB",
  "key4": "21NtqAV63c3zPgBoWZgyQUMNTQDLiNgpgZ2uH3oDH7JwMEkYEy7xGCSTdf9FPo6yFuCp7iwMjepD7xWDGbzS3jQm",
  "key5": "kh7Z5Awc1u7ADBZXjNRsMXNJCp7HnWvc7u32dwSt4Z9urU5mF6C914kdXdukPZy14YN1Ngqx6q6w3UUcNhdGvqo",
  "key6": "2qYcaQKWKiw5pqafEJySQE8TNt3BvcKE5NvFRQFri9ohp8vTg556ApMzL6ghJoCwaFdDabYovXkvDfuh1TEWX7DW",
  "key7": "4qFL6HfadSGLXwcP2PeVCBWyDRHigRQZtDXfajJk2GXBVXDTC1QLvFDDYpZUZAXorKftFzyjeT2EKJipbbtGYw77",
  "key8": "2YeBD47wNg39oevmqZeNqYGDSmaKvwjpwn2j3Qk6vF5bNzBwrkQjxb6QyYLJd8ssGJAhsoMdXb5cL2mQJQrmCNsq",
  "key9": "2vv94MP2wJeaXQWNk1Xmfe8vcTHMuKQEYgPWd3PgqP7WLpPUaye9MKh75t6axxTwRGfqzhzY7wK59Xxhz97mamko",
  "key10": "4LjcavxfAFUGG6aZccqtZWk49MKraPQqko9UAuNCx2gCJozYGEAs9pBY6C5Xw6P9vf6h5tYpHtUeXn2SBPzWcwhy",
  "key11": "2TgisYk5XHPVwZtGhaED82LDKBxg8mM5K9M9danTS8ZVDbNWQrWkHpmLfek7NBvbg7vrcb5iv5X7r8oJDDgPxHwo",
  "key12": "5kZSAS2FH9NNqkbyBr93cH1enobC5h2dSG317UX4z9edi5j1WK8gvyxvDCugMWPaQyHsCpMvpsM79fWEDximpLyZ",
  "key13": "2XGACUcAoyb2a2X7S1sHWBtNmsjCkexrHoXuNuR8NNKbSqfv1TGjRvQeLkSuPSYEHk8EKHcrWAZoyLWVmBKHbWZ2",
  "key14": "4MmuTAz4p9yNLB2dP6eTs24jvutVqek1AbpufF85BGFsxoRQFYLJPUZ2C7gduMJCH2SnBEFCJPPinR1ZK7DvnCtJ",
  "key15": "2MMnXJkNWY6qKeSH8BGtXB9nLD4tK2wEXRiSoVoAXW5ALAbixE3siosUG3w3YwSyCTweUUWcxjDRucPyieS67Cxt",
  "key16": "ZSSv93Ap2wFEg9JXkuQ5ckHyuzsWRhFhFbWxHmzpVawRqZsWVVnzHRJ4xe1DfuYX1rp6q56Rr1K3tNcexr9SRmA",
  "key17": "KqSTkSQ8RKHQV8sMeFjeto3wK6VJi5WiGQjrgCBCdfVbL7Z3KnANVfb1iJJ8C3R82H4iNXHahB514wkcVVoR1mJ",
  "key18": "34jCiLXueGsBvSrMFSfYtibwoozk8JYeQWP2Ck8GrDRfpFeh3Knb6PGnTXgQUsMofwBX8DSdX5C8dr7pnch6hPmu",
  "key19": "gxgf1TK164Avx3YfvhQDtrG57gFfaHCzWMnJ1WofeNTf3JPiKvobYLuE9Myu6PBpsvPgeaQV95GLSyGdcHccayA",
  "key20": "2mRWM31xddFKUxJzAyDLfX1HSMrPyGietWF5oaapMeVZZG8t2Z774hnZcB2qTX3XErDpqWasJ9RxC8prdm3dvYMs",
  "key21": "4uKRDGBHoZ72hXrnrWWEYbx896w4uW1nmKetzgEPgk3QWHpVfo5jkndiqJK98yMTK3s9X67wgok6FMySSruG7Kcj",
  "key22": "4zz67U2o6YA6Tu7WPRPei2wSPLAmCdddQFkDZvj48XPJzhRbt9BnBB7ySAjHpM23ZoGKaQsMG2BbfiiNmu1Vidpp",
  "key23": "3rMQrEyNo7UHaZ3TCcLZfQhjW9mZuZz5uwWNjJYt1XqQtHpgcrNsgwTfi5wQLCU47N1r9pMFLxJnFYTnfWqPkV2c",
  "key24": "4bNkQg22maxz6hfcWhJMzZjApLQX3z7VY42Z5mydemJsAr9c2hrzF8iXTPMxqb5ArPAswU9Y2VJsnRfDiahBvG5k",
  "key25": "zhjf6G5sGVrBFY7rD27arw3gFquJ8hvhyHaSHVaBFphnhw7URYhFmGTNQXbpzHw7Tq3nxgFFdSrAsvQLH9iLdsY",
  "key26": "2q3HC88pKNdVambsNJfwHXq3eQyoZVYmT5o3gSRCPrNwV3AXH7h9pCye8z7geJ4RF73FBZmwcy7FGdi2CUBTMrj",
  "key27": "4CurNwyps5JnggqxcEkzvkM11xGfAokRVQpwyxkdBiYf2QBvrKsrQJHRs9qTk5XbUwx7yv8Jsjvpkho68iBLqmSQ",
  "key28": "2wwXBztAJ3CS3fBKKYFacdFcHn2T5JA4TKhqVheqJQMn65JQnqBTykDi3RsAP6t8AeGzgjp9ghwaah1UqnkxDGJj",
  "key29": "4nJNY8xpirvcNcy4kbwcLEE5aigSusc8w5AoiFy9ChTfjcPXxRnwsQNebRBUeB9kHjmd7FdB56iG4CzyaLGnXqXQ",
  "key30": "5hVwZaCEURHwpHKMcyiDu5ZVrXiLP9jtbByiZfFqnNYNwe45sqhPZzLe4hyeZeHcZFkJzeNkmi7tDBSurKUCXpjn",
  "key31": "3H1N3j7y9Kh4Hk3XaLDCekGFnEN7Jjg6iEz9BWBiXrNAXbmS9hpqvwJmK33vK9k5AUQVht28bdWePxzyBxrGz1B2",
  "key32": "2JcKDxRXEv3TbdeajwLi88Lu8DFg8n1qwTSQTNZy5z8qXroiD2MR1DcP1zEr1UyTwKUWZGEo8Ue9s3M7svqnRXzA",
  "key33": "5P511UEbtYAaNxHQWdJu963cJ7dQ2SdK9LqsSD1Lv49YqHPdxFGmuD6EK8c7dps2MnupfvoE7yTxkYdSeXmPbFhN"
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
