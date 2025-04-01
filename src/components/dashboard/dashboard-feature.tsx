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
    "2ZgNC3Vptz1SFKxGCQrnKaxtEu6eBKaDUBroTDjF7mP1EZDGuQn3e68x6Dij25u4JsL9ji7UTvueNQmknZw3FRLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZsKtPN3GYirxejBZ5c5ZY8A9CySpFxtDDxwqRS2RvyFtiSevAY3XimSfF3Uv8hhyFDauSWdrbBDd2w9QRwzQyf",
  "key1": "UeyXm3hjL1SF5D9RnmyCWTxnEEtYQeadhdmM3eKTDrYj47pz8P3yPWB759SwBenYtQGXDmguVtocmfH9dNXygvt",
  "key2": "hH6pUtrrsUQRkqAR3V2JnxUPiTxXXB8gZQcvTbgp84zm7BVzzpm6SSfWS6sbW7UwcykB6NTHp6oxoxyh45s5CUT",
  "key3": "2AhbXfWfbdnJd7Swf9sGaAwHU3hHmxVqooK5WSxcByPNynyatSGcH5VsUVaDTijxPpa4UQrf3EXdFVM6FkGC1vPw",
  "key4": "u5G4MATqVq4yEb6f1Z2tyJJ1wZPQhfeVosmn4KLj7YSJofj6KxMK57SkT7DKU7wE5Vwm8DnusLcH7GDcVnjq8H9",
  "key5": "37HvWn1Q4EniExtpETCQtKThMPKES5ADieXaLJGtpGMRTPNnddKhREwQYF1CBWSWcYevREVhAt5YLuLZkjsu3pPK",
  "key6": "6458C8f32JwK5SkphrQS3Z9KnmDEu5zUbQ3yyP8cgqe64X9CwYhnDDu7VqgVJmPEWN9P3oFob6Yv2xpJ69HCcj1r",
  "key7": "58vV3mHx4bGW7UNzG1Ld7jfS64Gb53UNt6baCQaAaFubqkNZ9pdashSYhSitq1h45UbiW88VynkpEFUVvTmRigHv",
  "key8": "4znnqJH5z2FK9oyhvSVxANzr1zo5S8QCpvTwdsLW9G8WAAfDkPNWvYVUJJGRCxM9F8dx8M3gGWdxTDXeZUWpLxEs",
  "key9": "3okdrwmmnct4wJjP6VANxVwSAcnhLHco61DhRAYVgRs3wy5bkZR7e4HpysK7ASNJqG5LwgTEsTM6CzmCzzY4aNen",
  "key10": "4bkCMZn55EwmSDbnRfagqn7WV2PfWLSNtnSFSorWt1qzG35BJBTwzJRzEnoSrh2YSqsiabBz5SJ2dicdUv8eXAtY",
  "key11": "RxMw8Uo2MaSG4r8sXcb9XpiPWM9X8xEKNhgVssfk1fQJgWo9CMKyHAC7icrPEjiQVrYgYKW26Y7cUUgpntYEYyV",
  "key12": "66tDHuELVe2yiEgqtSQZQvEGFq64aFbbG2Wax2M52PnxxsgyaBc3R421SAqzVFGVvApiEC5pwVmBWBvkSMYqUoeq",
  "key13": "4zMXo6DBrhZcVtihkXF7qoRDaLTFoMnytiKqUXtpKJPoQwJm8CTFTjSJfhx8FvHzQ6xDf3qobVoGoBBsYWs2FyM4",
  "key14": "5KJbuhfB8nAQNj1qy8LTMENZdepjYRKwvuJs3PWawwhweCuZryZqCZZxovFAaRT7L6SDnMWQPJ7V88KLQdjH1GJ4",
  "key15": "2NnUfiYybG3CQxDXSx25gzV3BwYRcxwKumkmBMDceEUT2jGgcrTNvjrRYesnkSLs1uhbRtWVtLkqHsK12vhHXbqH",
  "key16": "TnfZNu6WiY2JAvk6kFaUg6N7EJMwazHci8gMxWut2htyoWXCPQCjCaWaHtka1sGhRy5JsmsV5C6WQ2X6iBg8AEQ",
  "key17": "5PTu4TKk1SVSPuBStrxeUgysmLJPRm6hYKaBPQY8w5a55PWorCSMZugTYErhEMxWPZ95uDZ16kRCsU8mJgMCav4o",
  "key18": "61KhTsTL9A289xu3dAAFB8ohgiWzSjngoL6qmME3u6kErQUhYNL8MKtUiMTswivip3nNis1B6BaNyWMgfzR8tDR3",
  "key19": "43yXH7HgEFKXJWTo6Xr87BsdVV4Rp1VXkXVEE3iqk2Rf2UTCJAV63qtMDeuNmUgmqUUm19ncVvzfquaGrUcdpVEE",
  "key20": "63oASN1ECjRnCUt8N9ftu59yV14FQMu4j23eExWqisv6J14XYX1ZEVYheF44z3VM7pwMRAWJErwUnvANHyDKQ4tQ",
  "key21": "vpod9xhQUU8dWLuvokcGqGjRxu2S13ug53spYvVhqte9wbFjXYxjFSsdFuRSzCGssHC1YBNJPs4MXzf5kviXmb7",
  "key22": "3PQaMqT442MkwyjfGeyn8DAurNLJdiweyPJua2R7ziWtxyNbAcHsMdDrWbQex5bEK7ewP6iKtZjvBgdWAxyWxYHh",
  "key23": "3YgDphLtb3irnqNaFek93zcFu9j2qwvz6R7KwYVVyMGG6WgZ3ckWXr1rsLhGtxFwg7SW1CKXYcmhBiiZVttbuhVB",
  "key24": "4KZGPuKbRrKKnKQwnxeFTJ5tadG2GQ5BGKMdzJiURYkXGnw1ZYgnKsbDzr7EXHyYaSK5PYHkx333Sm2A2kKWMZH5",
  "key25": "5yXHJT8FUy4mKWTUei3sqjEEg1UzUa3wSCsKJhLXC6R5dDAw1niKyjTzrxwmD1oi4iD8bR5uj2KhAgajqsYQdD7v"
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
