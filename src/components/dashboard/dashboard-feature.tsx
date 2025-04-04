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
    "KnjWvqFwQde1jzBoprPrdGAz7cCb8Vi2N9CMDZm7AmjtCBufff8Zr1PiS3UojBAbJh4CEfcj9XZfKSQxMLPoBRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3dRXq693NZGtLWsbjUicZ1BGBhLx1xefWe2EfUpdZ5kqjNRdAGG8gJgdiAdnpno7Ffwo5NWWyPz9YqFtNizBKg",
  "key1": "217mgJkjwsnhfvUHJcfXZrqvPLwFBCLWRQbrkawYso5tCakrVprJjiLzsSA8iuJ2N5qb8T2EvCAYu1nq7GKzMyqz",
  "key2": "uwU82QdLXkZDN4KWmvqJZe3m7G58q9HXwhCF9v3VccHKHgYQKjiwCQ8UXJCtfGtguzRseBLyp2Db9q7s757S9yq",
  "key3": "4PguXgh9R7PqEiiDXzTVTjvxX9wzh7SPdiu7kqkEvJy7gEfWv1acvsxzyVbpjXWnG4fmJF2yKwvqZzEeFEf2QYiZ",
  "key4": "22q3TBA9HHFpLBFi3LPRChB1YKooCyM7PYbzbLEtLvv6vv39rWX18RFpxoUuST1X6TnPQpLxDf2r1d61ppcbwRQU",
  "key5": "5n9MfyhRDCFUhiJtBx3EcPe2shBemEAG5DxKei96v8GkYmx6s4ThbZZvb7qC8zWdjqnybuUzAqa2hT1jonSnV39B",
  "key6": "61dtzmFrrCaXJwCMauY7UXM8ugdK7yKrproysr53qXBzjBND8fS9hCJ1JNBDCaFwxoNeMnc2kKXGe5WgRbyjVi8C",
  "key7": "4JhzA41hABUEBhxEpEt76GCZQdGU91BR9XSz8zYZdMT6ybdRiWw9Go8UWqo5Tua6V7hTJHE8zhyxT93tXR7gB6hG",
  "key8": "sg1czQLz2ekBheiy8NXkChz6bZJdXdDrFgag5FwBeXAeGny6mwpqdEe6p6bvX8U16CVTok56bgaA7JMUM5WAB9U",
  "key9": "2L26ie4oP7i19WcWXDZDKkRYmh9ZwYsz7YPoawv3MccQuLoLQ3VMwPkQABXsizrke1xRg5VieNY4FSsNUqV8gvqg",
  "key10": "3Js3jYtqpDn6zSZwE4X9gCF6ipTsvY2hVRtpD2PYAPh3vHDfU9hAPmSeUuwk7djcoxLbn8pW6WKVzFJtq5ba1QVs",
  "key11": "4KcXXQQfBtGGy6qYDykgDSpyJDCMXuTTgQJDAiT9RpiSQfAUBLByoDKxULFBkh3HqABYouAcng57foGPDwRUmP2z",
  "key12": "fepNE9ywDRTfBwsY9FSjBEafDVjhtPqEtPmcHt5WoTYPCB28S9jLe8NtsUicYEXMB7CCizxFayKUeVwe1fLm6wz",
  "key13": "3WkzqgZh8mmRg7ndCGUHEUZjyVnw6phiurZUtdgvrLH5icfPR9UPsrUwTYcUFa3S969QRpjzFGAmsku91psgJtPS",
  "key14": "4RHCBfRxZq58sXEmXrLYNGABtyHAE4Xsg8TCmVUtGJUihDuy5gEjPFvfJGeT78jocncFPvMujQS1BysY7wfcF8x3",
  "key15": "5M5c7eKhsWFEC25wMpxD8FRqLeFkoe7QSa6VPg3RrRyzz25vGJB9iJbbBJjmctZSVoCLMZFJqc2Smp6msm8By2jE",
  "key16": "PFoUwpyHLX8De6xoZD2VQGTB8Fyv6DGjFVAVrRdrKpJk8p1LE7oEE6cSFZNCARXnJqrp7fRHMC5F3jDLpnHswHS",
  "key17": "4mzUNCvoaSd7eyYhAPdT1kEKMb5Xn8XgKXTEE15XegoNYnEKzBpicZ3dL8cg12duCH3eUj8nsyR37UkuHdpUG2Sw",
  "key18": "wmGEHezv3JJ4phpZQP4Zm2Ys9HBMFosVLP7cgRzpszJBktHrYF5LEvmhvPrpdVwv21dsyJ393RTBA44Jz1SbFcD",
  "key19": "QxePuT47L4woUcaAXMn1f42ksVuFAwou2egMXxYiGnLdJQYWiyxxjQ8o54CTpYHcXCJJu2M96DKH7jsSN1L5uaw",
  "key20": "3JdWhqRnXRPCjyd458zk7qQv8Raq6UwQwHe73rBzVSYgVqB2HtzYq4WpV67ZAGSCnDki7DB55Ngn2DztbjnEVCgt",
  "key21": "4a8hqUBF98ApUUEZvL4kPpKhyot4ap4VcCYXNpLZ6m9LKXr5YCzEukdU5hSdc3sgh8TFypJZKCEdGgAm1MC9g8RW",
  "key22": "4h4FEWk8Dy87JfHn4yW79UmtgCFQ3cSUPnUPfzgBFcifuKE6Uj2Vdf9aMcMWwueRMytsMLLARkJUQS3J2eNc4AFr",
  "key23": "61gzTn1Bzn289DA1Qteg1uQMHxnRUZ2ReqYTbws9VBAfUykrZULuLQsMRG485RoPb3GfXwguRP1tGMqSabdnfT1e",
  "key24": "5bXWZcbhHvRuQ1oDZBGPMNLYCVVdLzR9WmWBcB5mLxDMBbZ25As5KGob3ptJ69kiPjsgUyD3nPpGdtt2vjz3XZXS",
  "key25": "4dty4m29YNt5nR8wZPdrBPiYhUvpET8JG3LEbetwVnN7oN4kXuzZByCiZrkUQuTSctphdvrw4Wdr6fgqpFLPBast",
  "key26": "5KFfbwBvNUHSNzwo8YMjtoEezSfxBWvqmZj5dvtP6Es9fVeHRVu2p5wL7Bp49JA4dmjUBot7ovKtyVDuWtTJmPwS",
  "key27": "2gAUfdGQymsLgHgDLYHG4rWgXJwTtLsSTSVZV7YF3UeSaMryGurmMryDkDqPxF3EJHLJmRLGrFzMh4vpby3xx62P"
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
