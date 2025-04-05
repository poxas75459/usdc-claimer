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
    "2e7bjkaarCm169QsmpACtyCD6P2tXtPunie6AAUWivV2AgU4BkctRZ6VyEw752QbaWtw7iHGR1QBdGwWv2wRDYcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mXyVB7RWW9umvfKp54VBkwACJy5iYDDPExjBGDU2nHpeDceKUXav6aGe2Tvr7cfyDeMoyEYmht78PVUUsFHHXX",
  "key1": "2BBj3YZRD5bbTE6tu6QNCHVEqgXkAYdLZQqsaPvMuHRnHuUpaiSdEdPW1ar9JMEaumY7Zt57sG7D2uwW6KqGM4d5",
  "key2": "4ngJkSMUkycXdyY1cyCmaysSMA7eJpjkuKtpumntEz2onM8WkvAkjWkbtHvCnhUYbM3VTcYW2USqPYsEkCjowxxR",
  "key3": "49uegnGWoWCuB69si6dFCgGGxDNoZB2RJ6ZUxkqqbj3FV1fAuLHfwmdkUfr68s9xZnGSQ5LD9gvouaH6pHbmX2uP",
  "key4": "2Aeyn14dytSEAVPkwcYM7bREjeFrsxnzMAQq8F6wXDj8NAwTihje7mASiTJ9P3e4H2FzKyARhjnuRqW3djqWv3n5",
  "key5": "5kjpnaGVCuvTvEDo4HfsJjxtr56x2xXY14gQgvBHjquKCBVKAD9xEif4Z4puMGmuJkbv1F1YMJXjBbFuALeYDrgq",
  "key6": "4mydeN6bM4uAqbQxr1sbCf2d1Z6VU5Hxhga9NnQUwg4H9UWxAZmJFDQSTagc7sfEL37j4zjbun3G2UNi47PfpdeM",
  "key7": "4Db1ZzDLrsf9Gczd5PuFxPYdzUYkpsLzTMfeVME9V6PBfKmKcPat7F5EkkXTsgR4qTkyRVEhXdauKciRUgdoxRG4",
  "key8": "3Xm1KUV1ZVGAvbdEd5HRmQ9uqmA4rqw36wRwjL1D8TTT7tKUTZbPyusp6V3bbgAgU9hay95K8EoMbSM16fGqBFUb",
  "key9": "2716Xvai1N7aCGNtRSQNeMBXZiR9M6AxEhfxXvhsHutW6Rae2DTrrZSssyxXibGAXGTF2Bh4X8GCmFWVykgDL8j5",
  "key10": "5gF9XVtDR28KTXNBh5f8db4PPQ6Qzq2frozucZRjbFeign1pVgeC68m5vv18iQ3eMbAoSSFKmAQ9PzAp6QgcvENH",
  "key11": "5gA1k6TcrNtQRy7JTEaTijpvzAMcsVWyJBJS2TrCm3UEfhysgb5NGfDWpJsVVYJp8M4cQCgWeppMAPYzU3fmvhjD",
  "key12": "51v4FP2nP2NHcaBQr1qvC8VDzz2JUy9Csdzi1DfLHmkiYLsKnsn6u9qCY8hpWDxkXyV5opjKapSdXxTJLsggyQmu",
  "key13": "3RrxH8fMkGeaU2goT4wp4nLJykiD66jHFu2E7EB2dnDW7XmCgH9ENiEbgBpXHo8qvXDsRecptiAwkHrLWJDPjwGL",
  "key14": "5Kf8pmGugpKVx1TDep8wtTku2MNqgwqG3dywKdTFx6Ai9j2f28YvuwWsZq8kM4R7UQsbrcq2SPxFxM8cN2NwdsGd",
  "key15": "3YKDYXMdVoAJ9wTuq4Vnq3aE1KubLqkuDD9xj9JRRfYxJgc33U7f6W5vwUQYk1yR1txKgrj6rVAkxR8tYowhcwvZ",
  "key16": "46PmAqsnWrodwkNwvGVWs1UnKvPTjzC6oXHHrJPR1eXNncBcTHtDQMY9UnHSF5uqPuqaN6SbbYZE2sJpoWiHQa3v",
  "key17": "BkAcyFAKjeDMNjAuuAoJ1ENMDfW9ZW98enVR9qVhSbSU7sndBSicstS1NzdVzgRyVZKi23GXyQJXCbmfi6RwLfH",
  "key18": "53BwUJzseTVPS5WLtMt1KAPsfXkaTD6QEDq6yDJydee3qLnxgNf74LFm6RKdkh3yo4p5KYYv13sgXAypD1w8VRF7",
  "key19": "YXuuHxZEEKcEaxY4SaBawFuvD5sjMLkfmjEoCqSuinjjjPU2ERxBwo5RGwuKLyoRB5SYX5GFzWCwDU5TogjAxu6",
  "key20": "4G4Ja6pdqqVLPcumxBr3DmJJs6VVHvww7TzFGLEaCop8WQGrkdwrXSSdiQdW9bHXRhp6ynWhhm9K59jzKfwkf4Ns",
  "key21": "EV68rGP1SDLgXWUzHYEzar4FjCt7NqPiiRQDAqKdxQhByUMkLRf8HDAgGxpWXNBE581nC3qMZyEjLJW9ENyjZsB",
  "key22": "2p27JRLm2RYmasAaWCWD9fvyvcKXu1ZgXu1AxCbjpw7k5g27Qd14R2YcuiLzMA1xujJUiGfkRQzTr8w9EEiv4aX7",
  "key23": "2iTq2cxCewSSPu2E7xuFdBfJms73F3yfCk6sHN5jjW83Xq2thHzpCiScobNN9JWcnY6ZAnWpGroFHuxEMvuEHzC8",
  "key24": "4rJwQBRx8XWyEYHCWQs7x1GeyEUTNYFWifEbpcEEH2FreBSfZXcMRTTvqyyM7ADLdUPsH3cYtnznJNNgCeCQGQh5",
  "key25": "4W3mb2WUSsTc7aSm9FWMdHsLdxVBPnUmKdANL5egC9YKyjAFjgbXAMMDFt5bFQVvv3YKg8t3d7REPP3oxESzN1pq",
  "key26": "2J1RgxQvqV1jrLAKsDxEk3HqjycEjtxFzK6cNKzCWbUa8YFyNtasEaKBi3rRC99kVzizhSmmdarYLcASXXwv5gtt",
  "key27": "3NdWgpgbUwuoKXqEzbyrP737Kq4ETBz6o4TJmn7qsth7dSKfa39XWYQWwxDEuzayAMtok6oCJunAPbQoJUFnWZRd",
  "key28": "5CkLhXLabjQv56FiCsT8MuHvxST4fJzhiiQNCU67hREZrY7boTNbpMPdDNrNsbioTkHCC4KrYBzbCgQpQH8J4o2F",
  "key29": "3BYJkVDGmsTNTRyjaJ2jEuyzMyVwEK3izskdCA8cVwXfFmDtvvdvZEoPzVBZ8tf9qhWMrShgQ7uaZsMyvjCBW57C",
  "key30": "2U1Uk9yzzTj7v44bVAxCgth9Pacj7A76zJeqHhyRXWnUAoxxcyMxbijVpD68wZJy7WzWgpqxfcpzEqEJsPtV8YCQ",
  "key31": "kahrNGxWZQZLjkQFdRsqpUSkHRtovxFHWwBJR5QCuwTuQCXYfubAJwrTxroqoFrQAe2HPxuW91FPbaLxgRHsHmL",
  "key32": "2qe89siXGveWxiYxaveR6kGcqQxMg6BVjC4kGRhfsjJU6qARktRTPbyRsJxXxyXWRyNBQQBsBvy3vUcNF6iAf1W5",
  "key33": "2K7fZm85jVXWpJRKibpvPC3xQTrAFr58rK4zJ7fodxUo3429KZedJPodMfjGgRy4nk9QwT5hUuEcibGBC3e84q3a",
  "key34": "etdjWZpqpJUA1ZYfMckzCxt6y79do96TdoT9tugSQGiymyebXGiwvTbS161T9nXAvddqcCSXAQ564GCp2qh7Kdx",
  "key35": "3esHAjceZugYQwB38ntMEyEjR26kQmLmseeVngK8KXvGQHXEojkSujXxtgc9HJnVwoUsFqLH9TtzdY256L3A3S33",
  "key36": "4xTYikTH2rhByPGL12g1URnxfgZTWhRSy7jDxhYZhSGaXuNkd9j4hi9WMfTafTExpQxcYydx7MdGgVNvnCU3u6b",
  "key37": "2x4cYxfMT1rdHTAYU2xYsP3qm6TQJTHMe5ptfjxNQxGwc3aiFWCs7Est6JCcrZKwpMkWsvnormWUPca5YEtcQAAD",
  "key38": "2GHXVYV7pn6rdW7eMF881qCbBt6pYajMN2SHtKMcBvoEoJNLoyXnzLih3WGUACSZZqyfhdmfgrYFFpmMgLK1gGZD",
  "key39": "2PXRPFUY1pwq9XdfNiwmZvrGhLqCvrpoiH55ZQiQCtUbb6SqwmEMwo24wSbeDqR3mC4GuZu3K6ubH5dNHKg2SWka",
  "key40": "3HuCzmUWA1mPPq3SiV8srYTL3LQCkWedxkzYckSjk4UdnhCc1UBGBVwFbYWBzkNKcFQN9mPbQhnfRzBdLaC4ro1v",
  "key41": "46KrcUmSEppxLzgavrfL9f4p3uShpuowVvdUDR7kryHSTLDnJHcCwZEhDCmRJaNutkFte4xPgJiF6M6hJiPPCtcr",
  "key42": "2GEEMY1CtuvDTMYYW6FNKSVmsA64kQ6a5FYJN8YfQdBWfs8KiJGAxkLDRqQVmqA4bAhfdSHu723ta9CYKEexN2AT",
  "key43": "hPK6ym6G7zqDiNwFAYkA6BYJzMYDE9q885cLxES4aPQeX1txakmzoVCosAtwqFBjFESWGUFQCyonXvvdYG8KVbD",
  "key44": "ytm3JsbavrhXrpZduefDdQswUTGKmrup5KETZNHTiL9HLLvm9qo1xWwwDBeVDjQhmPHeKYbz44YfVpg64KsbDko",
  "key45": "3XGZB9S7nMkVb6v6ejhpF1QrPjzS9x9C6CTj2S12ktjMatnVVX7RA1KHWHe54bCnv1geL1xKqS3acsbTwFn9e34V",
  "key46": "5yFrkwinyFgiyoBW78Nr9kr7eaVyEhFKAYJLEPwQpfbD55Ng4vixRKywtkkm6KsaxbTMexBPYehwxmP99j4D25rM",
  "key47": "59kEttqQ4UaFccnqrFJHhcRxptDrdPtJ4m8myma9QK1aURG92pQ3LE25FPhGwkCMubjg6shM4W1QCuEZY3G4QdG3",
  "key48": "2Gwqoc6cjFYuPBTMpmiPnfYbapcnu8SYgyy9AfFQeNhaEQtVvhw1cm9WxNPn2BiygxHUNVeKkjH7KYnKGAB9WQmT"
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
