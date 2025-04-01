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
    "4wLqso5mvG4kxRJbvi63XRVVSiGcwsywEaUXoBjC6omfeqKxjrRrYGE8hVCe8zxdvWNFT7Nisf9a1NrjD281rdTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55M4kSURvCYTjGBFn92RQWcS8Wp2ztJqUd8ipY5HmxK1CQRz3roWrm2N8bCouiPgb3bGvyczxrQwZsj1h295kWsN",
  "key1": "5mpk9NqXriphv9PwbCe87y1ee26qg9oahVyeBcKDEokhWBSmVLMXMFqFeJm1kHfup1UsB6wg4UvYqeKW4tnoEZ1Q",
  "key2": "61Y6QcsVPbAwqTQfFvrTCoV4SbBFvJET8EASH4vw9e5r43kALt32ZP9hvNpLrgpBB9R2U1LQ37dcAJZH4NuZeQkH",
  "key3": "3b3Enz2Bt8d2H6kuxxFhp3xJvo7WPXPrrk9vpmopFBpjdTci5qGuEafVHA4br2wCkDV9eddo14uV5uxAtb5xNBXP",
  "key4": "3FnB8uM4tmAKM2Xmyp4rH5uNpJmCBbW7bdjE7PeqX7wYoyvPVskL6hFRsehLGJtAtLtoru3MwCQvoqyW4Q6iBQ1K",
  "key5": "2hzgc9vqq6KYorFb6NRxLoXREhYz1EUwxwWVjQ3b7Rq1dVboXug6ifUyGRZDHaxRrKNBSEMtuMUtkibno6dQ9BoL",
  "key6": "GXyh8KyRrDd4fWVYUCaemHqM5rwge46Zv83JZr9ZFWqYTJSQf6BHL6VCxj8Y2a38ZxmkLXrtdNmrZT2cvVWnUCv",
  "key7": "5LJZ3kcqsnSCAXCt18p1XcYL3UfUuhCZ2Dcdv9kYkqjkoi395ggh3TYYUgB3X8atFi3aUpmqRgD2vXCmcGPowwaw",
  "key8": "3jhc4svKQVxvkwSoxXexTYLBePthASmPcewezJbz9xSwAKYaaveq7BUfoXGN9Sh2JwtAtaR2PrWkEZd4yQQJATK7",
  "key9": "5A3M9aj3drRoF2BEmdhr7ijdUuztmpNCVNF6tYdxfexJubY3kJrWc91EaWzzZUAo4RvLJejZvBQ3V6DpoEWCvPyh",
  "key10": "C3KBSTkzFzLsbZz4bSEoRSysGUNGCYEJy7knyHfwJ1QVGmjzrAQDfQGLvwunZBAjSsTu9EX3SgoiRsGKuzz1G2u",
  "key11": "4GcFWFT3yLQyFcAVMZvhexdfsSypLspXxFjoXJTYebyTtDHEnXZZH63GdaCw37HjPkfVDRsGSiub6SFFh2pdV5Cz",
  "key12": "5udqbWMh3EfpLDyx8hbiXmUBqyZ62AvLZBE4GH5JKpFwxBbDRqPBYpoHPnDrDQfDiyst2BiZaKtXSQRwjbHnB6eQ",
  "key13": "4an5AinRjD2UKPPmrj3SWBpxhWnpgBT5BvWu93MftGZAS7r4XhJsdzRaq4nvWfvj6rmugVDuji1n3NXACMDGmVEn",
  "key14": "373EyLxwXd6A2tf98MhYX5Qds51aKG3TCXHSq6gZds3ewS6DQZJXnNsWBpmW47DrKYvGyGqMfhhmZpCdaKgwndP5",
  "key15": "2DiWZqj3BoVwMQ55brF3NpGG4jYcjbv9fT3zxhX3Ta1gz29x4R6ZgmJCMjEZ7DWBx3YymCn4y68yRbLm8fgDy4Ns",
  "key16": "3WpjbAUBSnfWE9nTZD9btmvXP8KfrkFqb79q6gdgJRLys7kkP2ruBU6MDPt4dEAZKhZA9JgucfDkJraEtc849cyx",
  "key17": "3Ev1czgEAR1UNhAkKGGNPRpqoUg8C4jZxkjUFraGqYaLfLB9uxL7CyuuxCkwsSXamXgiVQ3GjKLFwWjdtaLVFtJK",
  "key18": "RtJrYWLkmbAmvsj788CjZ6ry2shJfi7xqGqr9Dd5aoHdYAAHW9gwdL47vVnYDviYH9AGMjv2zHqn5T9AXH9PfZf",
  "key19": "4YufS251qZvpocXxNnGiLEPcNHvTR2Eurh2TxUdJNy4SnN4eUrmq9Yc3Arv4n7uCSbG2NEEGR4jRVKJVD1JSdc1c",
  "key20": "44UNF4urbbSbaFcHiGo6RcxUGEeUj9Z3EcPaKYKcFaR5gKzijSMxNTBtwSFXmHVentRhqcjttWqt14X2qVYcuruz",
  "key21": "4NPuuEv9nBmWXgirUnZxBhbKAmEBXARomMC2oXctzrEE3iUTG8HsYPgc4qGMtmXfurBzB1261vL2x2b2Qe4RfsLq",
  "key22": "2b3GR9BNBTrQxuK874nh9ZqygGHdahhfiCmqCYjDUyEh16HvRv4xZUkSP7xDsY4AzZVfVX98YMSyG8TEnPfoYYcb",
  "key23": "4ggrpCYwhd9x9smDZq5XohtxeanRt6DUX2U7EAYLmMJ2mgaFJUuLyEbhgBMnkzxzLmRPy8VRNEkW8cqfZFGzcL4b",
  "key24": "3srx2Y4Nb4x4dhuxYJa9fnj4bDU27Ak7SBcq7STc1Chu3XrGf9pZNHQdwh5TELQWvLyJpoug1yhnZRaSd2zQ4M7z"
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
