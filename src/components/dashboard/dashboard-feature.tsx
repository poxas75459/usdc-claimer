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
    "5E2tm8mUo24Ggnkp8yRQJCVeCeisFsBLYRdQyN6gRRAEUyUFK5qmD8m4KeRihqFPyxFok47bWZcVqRU2vGZWhT68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igizS57YUoWFrKcvjmbKrr4UXVo9qyez5RH2SNBvGeVkCQPn3wxijUTYeTqNzWxiBJMZD8b2Gmje8L8Bpsrjgzk",
  "key1": "kT8SntW94Cm8U4Wx9NbeJPrKwYNbdeB9WGc179K9CoYjgMupX5K1PsyBYjw66YaexDvcx5KWWyKDtYh8hnyJYpV",
  "key2": "3U6cY5bwhG6DWkcph1mBTAZnY3LAfpbK1bhw92zbHeaqobZPVzFXc8y5d89fTdmGscfQ4kZy1M3oiPeGiQaTsozD",
  "key3": "2J4rtGgQX2A6zzwJN55wY6jyYn1rZsMrSzHGrF3QCwiGrhSiXMvShvArvdvybKfzGoCPj1yoXknrCKgBDAeA4Nt",
  "key4": "4m3ksPUaWwZUdGrGhsNyjBX3Zz1N8ShG5hrmSMwekoBsscvwiCvKY63T84FgK9zDZoYVhHvbM1TrBidZdPk1BSa8",
  "key5": "3u3RXZg1BrTw7zCuoQUV5HCpd7ZtuXBkLYjSmAgjTPCkgyuXp2ZfMjvaMbP22A8bT6vxFHTCEw1HjvkStq9nHkBp",
  "key6": "3AhC6QetouYTHGZEMJ7u9nN5fz2CHo51vJjfZwG6LdF2UVyQHK8yMivjAdwS3Go5p7mPZ5viCtJvUgp6kLxDSR3f",
  "key7": "maXyF8CbLdjSAePGyhfKDJGHuc7991x8rSQHPgYakKb13rjmdYm2ipBhdhGqsjGgGAX6aw2TAKvuBwCmsRC6jiX",
  "key8": "deu7xYkQuGkPy5nwdvTy9Z1WjjDN6qZzSmzCRFF8vtCmf3hP1EHwYZmuVLj7WPLc8QCzvEHVwWinDvy8VQXrawK",
  "key9": "5ioFky3SRZCFCPi5e2aWehjMNq32uGmZrrA9BBQD42AsSWJ9x2GTVzdorZPuwm7wKWqZQwntbYxCxQfoAt5RKiE5",
  "key10": "5U57JF5GGMaG2fc1pL9pzPaFp6Ev8zUJCFfyEgcbQ7SsEK6P4yhaqsBuLvFMk8z7Y1p1aMSryPhqSN48YE4rqptT",
  "key11": "3Z2E3dgE2vAi27uZwKLmLqaoDG81WiXhFnN4bxXK3w9dd5kb9MSs4gCSTjyNxePPWdYJThXw5eGcCu4SpNBaYtiB",
  "key12": "EPQNmsrAqnMguNxb8FfcBGqauuFp5ejh3npMwhwYjjtqPGbCCfHgWg1XkZDL3D8R4BeAYB9VrFiBmz3zHtvXAQ7",
  "key13": "3UcQxHGpttZu9RzvrxT3b5riGcV5vkmyQeDwfWqR1ymV8ynsEAAsUaYc12Rmj9HzW2dwQPuCiey1Fjgxie6utEah",
  "key14": "F8JyTv6fiujC8Eea9pvfUg2x9oKhpW28szpzGqvm9Zhz4CPEn6S8Xc3fr2DZ72hZfRXaEUWa13VYRCkanxdrLFt",
  "key15": "335Fpw1mp8uXUzUqKm8cReYiQVEpr2bndtFFfSu3xFUDscXd6dJZMMoKFpp2eUkngA9gEaUkbNtF9VuigM2pKxvX",
  "key16": "61i2A4CqVM8H3LMmweFuatqQjyTwBftn3S2r91hyHrUxatC7diZS7n7EK7iaziEYc581jYVo8GUckLML2UyVQRMj",
  "key17": "3a443zBYhufcBDunRMye5hjpEbBq9CuXhG6fvPik5jt3G5bPotFtB9PNDeiA19AeiZaxDoMKCpysUmWxLCP7e61u",
  "key18": "4Yok85tW5x4KSXLgpfUruTk1e2urk3Tc5RiGdqHVpyYWSfa75mGCqtTbUA5KzXkJuFRzPSwvbyZNK3TKKPshDA9M",
  "key19": "3TmWJeMJNaN3z77rA9CsxQyX8bjKs7hMVk1eZBfXn9owiRfPwtsb6LeG8jn6FnJMsQPkvMMmayrHxxRzUcHNSzTU",
  "key20": "2b5ChdYwDQCS1zB76V4MgT2yYHLtZReJGvkDxx7WM12MXpCTLxMJATML73Ypz3n61Rx5NoHbWNN8MU3YSypa3aRQ",
  "key21": "3Xzoene87T42EJnaEXWjtgXH8FfRxUxFAKzgNQCJGepfwJD9RCjBzygRV4BQeZyqk5bkXzHzL6ZrPvLPYAN9FCmP",
  "key22": "4r75QMt5N5p6euypmRQFtzw69kFrqdDoiqFfw6Z6ua7c88YE3Cs4aDYU619un4GfdvG7VaFa1Xa2nduQrhiUt4wT",
  "key23": "3VXDYbe1zjGxE6ygQioizYTKCmX1P7KXUHWe228Et7TwsLoEzCmbwAgk2APQ8kCDThSuHzb6a5dPWSa6eDAvuz1N",
  "key24": "3nRoGFruf4HBiyGuj6YNZYJJSH92h5EREvzgvWz3kR7gEYrvvLZTV5f5dbNFYgnT9FMpUQoE8jWokAsePjeYxHPd",
  "key25": "2yUHsuBmGN44GV7KYmtmQhr4ukVEDcvBrf7VJvgJVdhZ1a8pGxeL9rxWSJuSQ6NrRxAbirMrN41n3dNJ91Gd3Qs",
  "key26": "5coybTuQqyc6SBbb7C83HAafeWxudGYzD9uQ91RZeM7M68mU3Y6z9KZ4hYrTNda8C87wMyXfQgmd3XVP2Nz1gbCc"
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
