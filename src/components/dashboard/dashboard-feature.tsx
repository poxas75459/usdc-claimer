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
    "5AALAMZd7ZCAp66bt2KXryJT7qhHdJZx5Q3yWE5wEJLKGqehmE4u97dqcszeYhZSBC5TVTZUXytszkJzKZce24id"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWGrbroD6kdngepqs48siG929K37YVcWfM2nnHuH637pc4dx4Mmw5XdWHyXpktf2GNm8ecGm1ZyZ8tJceUnsAUW",
  "key1": "2uMpRLUuT1WCMAM7mVv8gwPi4kHDXnUzKuK7Dgwq19LUUGonwtfuHqH5ZwBkViCzUXkEofmpd8ikUJX2XVQ63twu",
  "key2": "qrwgkeKKkYV65Z9GPMXbBRV5UojuerNLJwnwuBtCEgT9EKVwDrAsvsfxRi2BbG72fkDopZseMd5xrfitgPCTDrG",
  "key3": "4KdKNKceruySnSo45y8V1sZR88macuHc4ff8h53vyRMPSwYkErex9dkju33BqLVBNcHmsNxQG9PVGJk4HBEp4W21",
  "key4": "5EZBNSYgEWHQ9WxjYHAHAbUX3BxmnyXL1P8Nc6oyMzQqs4fnihmu9nmdBmKy3y8MT5L9WHZvw5XrhV48jQek3QT3",
  "key5": "22S1BpU6HaiyETm8BEgZdXV2kAxj5jD7RFeQbXgCPoFPeLroACq3xwpoE3KBwKwQuJezzamvjWzjphA8UfdEBLh3",
  "key6": "3A72nAQQHBks4A5GkzoVHkPLRvLrZhvGdVQ5Pk1NMmCmFViv3V5hqUyn7pFRWw5vhbB9TCDyU5Y7tuaxGtzEdyp6",
  "key7": "VA5GDoAoCHvddrLuJFAYuhpndoAEhqmWVpvBsoJPd14DaL5YcN7R6jtX8AcnZQMKgMaVUvoVBJ1bNt1gXSthJQf",
  "key8": "22uvChJ2C8Wx7YN1Hu2rudzY3vp1Y7dMnj7sEJHb3tzbtYfsmPwJxd464BPia7kq4NXVrw9VW6TRb4PwgzDsPuXf",
  "key9": "5qRSJCnDv1uFMeNZb7hjxpEvzATgGF81LT5z1kSVNJBz7UJp94zKiUnfQF255ubPoMkTHoUufYcZ88YKBvWA4ik4",
  "key10": "xnj6z3U5YnULsVBRGN3QtCwJtcQCSV9s86mrsVf1hCHmRB5yh1RBCWYhDxFNZP4EDEzXK8x5EB4sUNiQ2umeedj",
  "key11": "4ebSA3Vy44BQG63fdTp9RA3Mpifdmr6Wu4uKJJpfw2as2egpJ4VvEBq1oXdTYCpFgrCmiCGdD4YycFmg8t614xq8",
  "key12": "4CUyXpVBLTnSErzvAwbwNpfMB1Dbrm1UoXDkD3mjdmnKTR5CyiFvZvAPbe9d53W4uZxipw7TwFxCfgpYYD52aA4R",
  "key13": "5CxTAVDR3txurjKG8vLQ9BgpSKiMDVYpR7yZxiz6BBJ7FWt4ySFa6bT61mFhSEWgpU1CRiqvyxREqg6wFSj9TpLP",
  "key14": "3YCUx2qYDPxQPjwuwi5LbkpTgkSGZ5QKbufgQeT2Fw1mcRXU8HmE3YwUdpGuyz4PwxrRdeVjz7ztsBt5Shr7r7SR",
  "key15": "4wwox5AMJRDhazRGUZEM4PgQt5zE7jzocQxW78qVbhcE2rWmPmBozwKvupiU5nW6vS63k8xV91iRY18EuMRE1w9i",
  "key16": "5vq9357TppHSrCihvR5Z2dNeKv3L3vfMX1nYdThQ36op1kB4rAKYwMHS5PCSAo3rtfBZLcXdEj3dJv83ojtYMQ7r",
  "key17": "FfZ1nQcPBrSm3tNrNMcQoJLxn1us4qHVmzb8YPucNwAFSNTfNARAVUGErsq3WWEmGdkmxw8aAsXxkd7NV88uDuf",
  "key18": "pYg5NtUuM7g5an5K12A4VxYjtkr94qyb5VU1aoxmSb1YmJSncvubFXt6heAPGDzNWNmwcoJymqHaF3PvkbwcgNu",
  "key19": "MvWr1tiWy6awpD1LVsmnfpMVQVji7iP3bpWnHUH2SnpNKwAZx33Rkzj6MH3UG1takxkYaJRTZFm4bPpSKvdJzNL",
  "key20": "5W498jsjHBgd1TvHefP1Mp7HLBrrLE7DkfsUmuQAtByCE8EqAWuKkomCCHFY66rnbdSAtK6i9s3ooAU4RNJx7kAD",
  "key21": "3Q31FeffEiDhDE78h8tw3LzJ6gC8CgPqXuJWgjHwEq18cCzQw1ooaSZaTH953heXGQ3fTuKL2jtzJ7FJyedNG6vJ",
  "key22": "2dCatAtZ9jrNW3f5FGG1RLHre4M8KQZMWCWXEBjDUCR2wMfxDFEFVNLQRuvUXAawMgmBAY3Np3rA1u6o1atC7yWF",
  "key23": "5DgoS5jCci7z9DCpnZZBQcr48RqEbnnwhrkogyLxgVCSz4oJxhiyGPwYJa5NTNnhYzP8P9UcnC47U2ACENshGxqe",
  "key24": "2yVQSJnGfgZ1gRkKumn1uN5XNZGG8MAoq22H1QYG1jA8atVS9UuigtfC4KXx3H1nwxwjW7i5ejMkfiUMGRuWoyYE",
  "key25": "5Qo8H5qqTwgTzTd3m2WCaPqyjrp69ytoLndZV8eWM4rFi2R9xveDgQZYCaJW4JFAsdNcvvGNQxGhj2EXB7mYKgzV",
  "key26": "2jsz5CmX4s325r4gVAqPHzANvDMZeoNuVNZhaDiUFwvz66yvcUBj5VjrBtKQNF7xNEyYfHTY2VEo2TU3cNxfPHo4"
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
