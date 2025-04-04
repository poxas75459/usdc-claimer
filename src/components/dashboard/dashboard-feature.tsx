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
    "48ryGNMfEBgg1zSTUGjLp6veC5WoLTAVBv2p4vAHGucDKMru86tzV9cUrkfndCefxDqgXxG68pD6f5sRrJLesKZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eh8DbnbSXhbPPWwrxngbVQcsrVqtk1NXQz9AUpTJLsdsPWN7tdmATNEUKoLf1jDZWCcw7L2Lk6Ane8cB1bJdLSK",
  "key1": "4rdZHCVspkrVywi5vZiqmijS7aPBQ62e2NVqcRD7aFNVW5MyFKfHejNJ8mmGV4wsWMBRyvVwsf9E7VY3LkT5LmBx",
  "key2": "2grxo5dwdpgsmTMSskpceuBqFPB2FUTqEmrurLSMFof3yCpuvo39mAThrACtqiR9Pj4eZh61TsRDzYJXZVaiDbwS",
  "key3": "2KbMAJsKdtucmPBxHKKFPFEMjvQqgzyinfGdVSueRm8fyBKFCcCsuscaFy73yfKyoC9sgib7zSG8Jtx136WzL9Hc",
  "key4": "3hnVUk3wtmBQSuvvAioyiyurQtjV6FGpKpjc6b8R1mCgVVEwjp7Rh4p98fxrvuPDkGycW5fr5qTPH9tCoPkeiXPz",
  "key5": "5zthiwe65Sao22677dfz5SDjJ6K5bWuJoZgH2xtKbYshdECjjZiU8PtuKfBr1f8JxfobhRHN5ACzMi7Fx4WhcaFC",
  "key6": "2Z2p8mWWtbwmrjvJGZiyZjswbRbk3Bt9vh5UXXu2BawqSTaWHpLZCTVK6cSNVW24hnkscowpzEMXKdoLv4ortv5d",
  "key7": "JvyejcbL6bgQcgXD8wUA1pxzV4kR47mptXMsWnV3t9iNJh2fAPq9LChG4ZpifVFKGKgi2hwtPCy56kHnjyYDZGs",
  "key8": "2Lr9ugYbQPebzgpyN4MqKeUapcGYQZmw451S4tZqM55Zebv1bfCbTQNu9Gf9RCPm7gbwuKvTU7683cRJAdZq73eK",
  "key9": "4t7pDaAePjvHCmEhypaLfXYLDfWgsnesH3nvJDaJVxREXL2hrg6sfAw33shYDARyRd4VvgYFbKdWdVUp9kcvPDnn",
  "key10": "2LjpMDikAnuKuMwyvec71n4yZwdXeMvbiZDwBG9qKP9tRHwuBUPd3K6oa8yArtrM66QvWag7z2FPbnLi3ZP5r13b",
  "key11": "3yQU9GUQqTJk8zZ4a3QNXG5EQSk5XZRYFk8sefjiBvDTfyfuYUixKpHjHGJxNo7wjTaH6u6obwH1GyZf6dLZmWAH",
  "key12": "NmjvK6pmc3kWgKPN4eKPqmsmV9JQaymLqh2Pe5CJ1Cb6b9pndzGHBANiir4T1Ti1psHEugcTPWTWXDBcfPFWAaA",
  "key13": "5vaBsJ1KtKc6b2yft7G4Ls3b5aNNM39VjpN9SV4XiotDLGET4HEzfrVY92E3wH62dMcotyKQPfV7Ej3rz53UYTk2",
  "key14": "42BT3CLa2rwGXGs1ga5M2iGR6NrvvckAUkECJEMXPCzHDfwLLLSuELgaMLqTk9bchfj7spR7hod7F4swCoqqS4gQ",
  "key15": "5W6pTzVDqrAwsc3DoMTtkRNGqrN6KEBFv2cUqXbYLB86WAdo5sy92v7BVVoKUNdSW54yxvHDedjj6aEq62jAntEX",
  "key16": "4ZA9KYfBcCK9XAooh8qg5YrEbh7UnxmMb7M29YFiW1PT7uUWZwqbq6VsW9vMS1xDpsPDp5VzRExC4nzHQmmesHNC",
  "key17": "5ApB6B3kLTfS6gJ8Wxm5rfbcvknjtThfY9VqcNb1yKFKKr7wqsK7dTqQyKyyYBJK3MzcN6s51HP6uXiip1uPxwz2",
  "key18": "jhwhBRskHhmZgfFnJtDVtXB391sZBLhiJmJQg8FUdoqhfWU78JAR9p1xDQSGF2YgTGEn7Fo1ZPPhVHKpVZYMkX8",
  "key19": "5GL5JYYXzNWjhwF8NDRwXU1e51kAY2kAJNHkSfs8UH6HHCnVL87huo2z9ZGgQCi1os5y3k6B8du2HxiW66yavJiw",
  "key20": "3TeFi8aCjqgGapkM8FmdLxssLR7AYXTsbWhMEY8aF2azW496LwaSyxXa53DABQ6FVQVqQbDyPvYwpnxnu1k425YS",
  "key21": "3kZee4ZW1r1bovmhvxnCWNGY9QNCcTKYMQP85VTZCyZpYu41J2T7JdbKrb5wDPNwEc85jKbYQFBrsQCHg91cftQh",
  "key22": "3ZkScPmepfBSMrK5u1Ler84G2ZgXZVXhv9jLVhde9AjtTK2DMYTRpEwJ3b6wSx3n18wQdfm9ZsEemX48iqqR4a3w",
  "key23": "4hkpHGQec2QrBe5vcAX5tmCotGGQmSaGNy4MPLCohtxL8NZziLy7Fek7WzpAPnb3xrNBJCFg64Aan7VPGF5HGBue",
  "key24": "61Y5xuQy9gkHf5ZMUfB4ABg6Xqr1ms3n826DQ1ydga9kqekU1ZNBY31WmioKKpWbVCiSbkL7CJpYLf5PhmzHZjxR",
  "key25": "2hRt88JEEZVK28dE4bTZgkpHeggUzsSPkFnhresNBwrLstvceqLhbTocQMPuPRph3JxVxcCKhfL1wkZNLKkqjnpb"
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
