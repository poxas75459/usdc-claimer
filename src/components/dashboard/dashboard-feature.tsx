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
    "4SsiXy27K9WtLvzEUST9V5Ekn6Rvmsjjuai4YXeyXCKtUR4LJYZJYVjQUjm9fE8PUjft2U8wmJrNxxWjg4EH7FPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nwJbian8WYDVDGE2PT4PCd3waWCjWUFab2XKbc9iL8UYN94ZMxnVuU2wRm6URVQCwMMwGdbp68pz8EqhbhNV78a",
  "key1": "5pzN881AZkg1i93mZPpRWDCciN69YgQWnqFJ9iffPvCrC7Nk4hmPQ5a6t5Pv8Bq9LNyA6pF2mz6xToY2kc6KFzwh",
  "key2": "4wMgRifqmarnYEgLDyPkJn7Cyx9UNaCufeRx2cuYvo8dM1ZdnHqhpQsYgsTBfYj5ieqazEFEEYJosioDvx8jnkJa",
  "key3": "57nt7jWZDZDd87kNrkPHfCKXFtLtXcBt431T9NvsovAkW35hoTyjVLHhShmSgPXFmt1hkwmUGdbBAWxxTkJ8FCzo",
  "key4": "3C18WpdSPyGZ2xNGtrMj4KUHMrg7A52jnhdNKUEXAekcFgTBGphDWEa53ofcrs9JVvwiRccecoHEjt5rCj9pkMNf",
  "key5": "3Eo5eJ4Ack3ZQRTUB3RZfpPwRk9WkxJze6JFkPfu9uALvrkByQhw1tbS9ZG5NNvbUdZeqoDrUFhy2QTg2vVgKmmu",
  "key6": "5w7125V6h28QWJvPyWRD8nGUJ7onDeiM5M2uPLs6UGeCu1nbRqTCrJpQWhRPeg2WEEkj6LiPZNJYXmmDrJWXeZPq",
  "key7": "4UaD4stFQwqukFqVFEz86zKWHQXDHowemCZ3dHDkJrrzzxm3GXZrAVATzm9eZGbqrK45UA6WvaiqUDSFBtNHan6D",
  "key8": "55HKYv4jKnmPmdsqA5L8ot6Ey58UYDK85tZ1xdUayADFQXsd8knHS9gf6q9fEHAR5basQhiHH9HUCRo6vRaCQLfT",
  "key9": "88dpMZDySNrf6fXoAuRpRfHczu2E9Bf7MHTgeDDNjmiwQVjTcrwAViTqjpHQJV6b8q7ctWTiHQw7HNziGQexjvf",
  "key10": "58VewG3BrC2ixjduxwskVFSi5Cc7bUGR9q2NfVYmZuKfott3vq9CTTJrA5qN1znUxwWvSjurQSbqbUkj8FojDv8g",
  "key11": "3CXZ5ewsU4qk79uZQC4Xz19MF9upjAxKC2QAabRu4Y9e3QkfsaHjz3HCusnSVFmKQsoyTUDZ9ukU5XtJdf4sjcEd",
  "key12": "5NTYkogSjgccwwDdFYv7o361ShxTXNrTT8ZpMGcscKEPG6QReNEoVJEjP4umaFfHq7Nax3HVSHPP6o5kZvgQT4yT",
  "key13": "4bcKsynS1npe5euXEffMA9UpXowr55SwsHebDASqkAjwza6K8o49n528hpcytiAjP6UC2LTEmP1v5KEExtePFjMD",
  "key14": "42Skhiu2VWQ2aECeCMt8sVn4p36qodd6QtPN1MaSBJDSqUbZ4tSVeaKkvXKC1yin8hHQRqGMyQxk9FvGKnCK49j5",
  "key15": "UX3Ny1Ta6hGXTnMYr7kJJ1duhWz5y19wfNo6ZHb2bALR5oNpv4gqx2UBqc55ZumjpKZLmz8uyfeFF9NqQuEEid7",
  "key16": "3Ydmxnb4KsdDKkLwmEJQELTD72W35m73GbXhGvHUUkmBsYgKc42M7hxh1t2h3ubRd824WekwYaikRwpskXy8W3Tm",
  "key17": "4YMhqJbACJK3AuSU4mtR8cD61JriXwP4sySRTYmf3ZZP9w89vDGMv9k2bo34vxcqArfHxcBzhxsdvRULUjj2M7wR",
  "key18": "RQNMbwEBMhTf7ikxEaioi3RjBXUmm1aTP9n7uYG3ujPNM2ZbiopJD493PoE2muMat8QY5gAE7YCvsUWbTHKLyD3",
  "key19": "bsFE4va643VVEdVyufjpAPwTMUYpoBqKhWLFAfLco6Q7n8DhU1P9uJw1FQL12zErkL56n728FsjEqo1ZR1c89VP",
  "key20": "4BtZ97PwEL2FSvEcESbh8c6CTmRcrobvVnFSbNEiFFaNX3TWD31bfgsct2knDdUVwrmGW6qHkNFLsgPJDmN3JJGC",
  "key21": "3hKwR2Pw2s1idJENeDj5nkJzYMdRWxb6WVNYg9BDewSBhXvAuQks9VRGziCe9DrKEEaJqK3N3TYeAkWKRsSXBB6R",
  "key22": "3dUj7r1m9FMu1vd9dktCTZQB4KvrBvcoErh7jbsaUwmgaGcyYuCud9SYbNfHwH4VzbtvachGbcHnYmi6LrATpVXJ",
  "key23": "64oWwJaNc46SybxVKS1dHx1FsbWQ4dok7RkNLjAdfjB2gjsavaMF3FJyNef6amLqykM7gmxQATn5TXjNCdWP4xCZ",
  "key24": "4dPuM1K6rN6rRZmRJiaV3SJReaUTWMLUjhvZ2aRqLcwDPLZ9JFdu2zdcqj8Bn6oKaq4FriiLSPyayPd3Snw8yUKx",
  "key25": "42Az4P29WxJNRruKjACjqzJMbxx7J5cgB3S3jGzWAXCTXr93TFQyd8LUDzykumDs2zTRsHYdUj8ZPb96jPoLEku",
  "key26": "HtqF3gn5AeGNAJUt9aLMcFXzZHfzvCcmcaDYjYWQVjibGU7xVC3PniB3uTqwJ8RMFVDv4rThfQNm3yUufqHiwyH",
  "key27": "5NqcrJtEsTTJPdL9vHmpm1HmNShagBLQpZrH7rLK3AmD4rYwcqGw1P7VX87H2XV7rWcqSEZYfufv6jyhgcuvybbJ",
  "key28": "4GLLaPm8gLToGgY3DCxtrUfpfKMVdXMeFVwbUgzwcN81dGYQaXmALUWMToaSSg3E5UNexCvEe2msyH8gy8mW5MSK",
  "key29": "2HC24sbNAAi7SY6rPQzv3kL7k9mctzwSLiBe1Tk6LTkcYsybYQYAjVh4LqMr9ZweQA9tbHL5pPromrSjEBK93JXs",
  "key30": "2HXutYG5pbM8f7DoAuyda7dHTVBYhxavvs8CUJAhBg9kc1X1LqCkRjLabzF22B35uuVw3NtH3wa8jbSgtcccxBkf",
  "key31": "235Acy59MHy9BTKRPm8WfpbPqCS3TLMcuPiy3XPWkj4rh6EueiuQXRfKASBsAev2DZd4syrEEK2KZZ2S3cmpH3we",
  "key32": "B8sA6oJaPLTFovWSNoYzvXNwKANptmvFNPsQN8J7LFujtWgVQZAmerrzak7ttAFfz3MWVft5kvPMRqHwfNtDzAe",
  "key33": "2xk9Q6xFUjpGS5xUaa1z5fQ2uiUoPHYSXNgVB32f1k2wCkYiBttmQXbDppCi9Hf9Q1u8zhmktXQnYXGLc5KjtpdU"
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
