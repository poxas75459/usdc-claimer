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
    "5x6Dq6ZvTLgfjm2NaHTHo4DEgptfoMQGtR5m379rLARk8931KWYuywCFFzZCjvq3sRzUNVxWPMMGqnN3CKwEgYku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43o2XyiJXi95haNTENahqisZr78MwoXun8zNz8ZiqbrULTcUq4tzeofvmKciqRPbBKDAXVXTHZP6H4nTaLfgALsT",
  "key1": "NyemttRjmYfPLsVUq11z3owiWR7FB4wgkUbUf82cyjdpFp2fQ4sahixELUg6WwwPN8z2TJf2bJbFDZuzjxPXbCx",
  "key2": "gQCWJLdAzyWJAagbpUaXnghbdbta1uByaHTaSecteSptQERJADVApx9fJAY2aM3Z2ESMUdyxcT4MCUG2vXkPhnC",
  "key3": "zqWpfnCKo76hH8JAQrFevbhHUrvXXdAW7DUoni99FuNVH1CDUyPSo6cKxvNi8YmftbadytQS7mLDrzo3YwwVXBb",
  "key4": "4fTZuJScwrKNWE4tZD6wHwfRHebZuCytAiGaGgBLV9sUGGfRD26gZU7wsihSzamvoo2iJ9CtUSSi1Tc46nWMLPax",
  "key5": "3hVNYGjBDrGLrSbTmSppcC8wHCzejft8gHyGvxmUFDBR3o3HBtf8NjwVRprDTVS97Cey9oS6M9qK51iNx6hiychB",
  "key6": "35PTU5ochqVU9uWyJKZH8U2ASgBH3kCfoonBcqcx2kjosrT7w5XK7n8bCqCL1Z4qmdVEBmbChQ6WnTomc74Mdq4A",
  "key7": "397Ftyjeih1mYemAYwXySWvJHP7xGizJrBvytEvF9Ht1TxYxCX1NaAAnyKbnGc2n2KPxxQpqcWJ3c5AvRhStfmc8",
  "key8": "2w4TFUTZxbsUcRb3wA4CWd99oCn3AjcRzWtC1PxrThQ6QGkmF7XD3BDw4LkwuivojrbRVCvTCiuhLDrQjjExGWLS",
  "key9": "2Uuwme9L7NFaQ3wowHndPxvUkoEM24vggzeeLugX7nL1nLzoY8U161ykfaAzr6RUR3W9UXy4ASenKiVqKfUE2Kmm",
  "key10": "65dfbpfzxn7WzUhHPdUEftmMz8Rd2i879SAG6war6PLZgAD45hhFZmYnbYbhZ5nhRdQfNFddmeXrgRvf3Awur65Y",
  "key11": "2v4W8tWTkKC8YVD3sKSBkfj9kZ7fEPFScuz8zHJb3VHWm37HWFpC9HTAHhKCfrfhhodWjJZF8zXSLKx347xbWWPN",
  "key12": "5FnAzD4bzQ1KdiCWAoayE1NXQSZsCMUsNyoZzJHoYLgmW8SyzMzi5joNbPM6HtSG87S27edEAzH2G5DQdYSaLrqs",
  "key13": "2wiHCbVksb12uY9dmUH9yekFVGPiMnJC35uB1pvcKHzJ5QSiZfiTPJjVfqZFAf7zbyLQqBZwvMMu9ZxQEY1GbEdM",
  "key14": "58Z4PcYHYt2M4vEB17v2ZYjZ4nkpbgyuaRJ2xkPGW2E7XZXpBxHJq1oaHYAZEHnaaXkV91EXQ5JuSPFymjf5SbA6",
  "key15": "4jBjo1gh9wKk5Kd8Wc6ME18LxqXaaSbrzhyeJnfTbvmWrvf8WWnbneAj4pd4vojsYLHz8YdWbg7jeFkh4eWNkqaL",
  "key16": "2dUggMVzcnrj1Ry4DvasQUyBRhqdj73whnpPRMXiSk1EgzgSCSCfx847UiPUfc9DnwMm7CHXysRQtiwrrMMAqXA9",
  "key17": "41nbvdsWgT5KLF3gtpNnQV78R8sgbPrWXH1PZ4Jbs45pSxAXeLqy7HgrxTd3gqCLpfzwS7oXpxMEgCpdwQk1Bv13",
  "key18": "28vNvJXr2gnVYTWYKXTu8mjGXHNr8juqUyBiJYd2DE6HA8dx8QPmwKfbYwSg115FmCyPu8d5rwDfrfqL5JRKVX18",
  "key19": "5XYxQNoVmYknHc3sbk8rRQ9ZZtYWSUxCBrrYzjem4LyDgkuMFQerKvCU7UX1bo4Z1fACn8ZTFve3qEBoBgMcvan8",
  "key20": "4LH6LNJUpLCDH3c6BTK6pAuR8gLBtGbaAvPugQd9Dnm155Hi66uX6dBzrmPvxoyNjAZC65Gs3GQdC5ZeP9oPqRHN",
  "key21": "5BSVqY4eDs5pvtia5nvMKHcYpVmEKhHXVvkhpgZjEcqjZyahtXdTcn9RW4PSqXeiwjk8az1HRxHNAqG92DCn6fwc",
  "key22": "646NvwtX6gydpDrT9gBAw31Ap1LS4k6rCdWu4rUqS7BcVmtkCoitZEdvYHf87qC4drSsjoXeV97CB12FMFXbrCXH",
  "key23": "54LPA5EYhnah2A2wrZyniWD2wtQGZkURWaVCWTAS5wULN8ijBfabsdyLaLNVMzGWkAiM36hrcWCvcvRNMRvghrZa",
  "key24": "2svoTrJ6mZw9bMeMtfMr5GJ9siD7hNMW7vU2evBD8kJ79ZVcPdQVeZLVWwDAnxs1Dq4H5DkdV77ex6Y8mMyWGceJ",
  "key25": "67N36pwrYJbNhHkQfJEMJSWGt3Wj1CLbhNN8jTEHoPf9onTLK5sLQb9HpsPaf3SJt8kxmYkLHx9ycjF2aYd4y1Jh",
  "key26": "59vSs7LL6cLPwvV9NsnwN6oLnyKsQfZwdjYDvVNEbYHVt5R5vzQVhT9MKFygbRmTPgv6ViY5S1GWkAbA1fuBgrjj",
  "key27": "3VZ8h47BToBCjs2Cm84jdyrVTTswghmMbUZw1dptgFuBtnsezJnrY2qyjuH899fXSvfxxW1iiKv7pbnLj3pvHvSn",
  "key28": "5X8mCGkHcPfc3MJpbkuDxQcHpxTsxeQ63o3cAuM8mFNwdSyBQvoApWswoFpnazJyknW4w1is7C6cXnHxMwmWTn8",
  "key29": "3VvDBBDRqWmSo1mbRjBJZqQZXJJx7SnH5zQ8TbuAfvZUmNGjDoMc821hkfurLT6xw1sVs5gSyxM5KBeT696uBPJr",
  "key30": "3VBDBRbNTo9tHbWeavu6MkCX4ssJpZAci3PmzJwPJUWV5cw8sGZGEC3y2g8fdkFbzAoVGLpA5i5zs2jGPEzEix6k",
  "key31": "4XyxXoytsnWFKni6vJziG5HgDBKB1VWUey2Q4zQDzQDtBc6vegs3mrHLh99pW3c5VQZFMVSgv1ix6jW1KUqnNdu9",
  "key32": "3JdEFV3rs1nHkxLZ8UbGapL3LJJQVHenMGVqJu3nVk8yxA2unf74Cs4Yks21cJ6XnBBWdEoN951MGWeP6hC5Dofk"
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
