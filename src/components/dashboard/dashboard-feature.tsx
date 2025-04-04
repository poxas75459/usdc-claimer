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
    "Fdzgop7v7FHZsixaKQsLCycSJKEatPmeWbnmBeAsnozVd5D9fEnr5WtfxEahwvWwM5TNSinRXyT9puJQ9Nsi3z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "To5N6te1oXEbGwi6amfeuWun3sjyMEUcV8KJU7JrvaE2XoSWzTj7sGx1GttwZ7XT5g3TVqZW5TpLfhqjAp39LpN",
  "key1": "4ajyVCmz17Y8krUEwXpWP2RocMYLfGQPpcyQeESnMohDpdaMp5oVeCtCFMSRuQMEnuXSMEzYB9Q1k1AHzEwCmFL5",
  "key2": "67c3d2ThCnswVrcdwUeAo2GgL2dkGzejwW1VFA9RQo2B232kQc4XaHfEB3Sxn2PK1YywGaNwnMTjjGmyyM4cfKtq",
  "key3": "Ej7TZkoznpufLnAU4Y1nThztT8YeT5UdGTU7N5WMh1PMLTXkaSeJ9Xwh9eK9DkiD4f1nZs8aErirgvTxoMfmHq2",
  "key4": "mJMhx4m8ggqBB1VNjmBXbK9QZjrADqhVnq417KP6T7epj7Xh6z3jirAzmNDAaSUyKJySJtNmQhV3io9acQTejZx",
  "key5": "4GB9HXzpEHTTLACspU9W2GcUF1KxWYjMFVQ5jHdekZoepCdsr8g2Uv42wJSFhdDTngJCF2ypGTgL8kryp6uCFcEK",
  "key6": "282LhY7Vgm8DPHPdr2J1DorDy8EH8VJKfFAAvyJQerWQf8EdpyDKe2gBrndN6BNtLBPdTGkDZ5WYiY7dnQXer6pw",
  "key7": "K8Yp1VGCroXFUa4PriXNnoLh83nsksYuARhmu6nBS5TnzHHAC51W46kPLUhJBc23PQgqmtqacyhDrFY7rujrmYN",
  "key8": "29d8VbiiX8C4EYxswe4sFyKF61Y5vufgGJyeqswLTRKfwxMedswChQeNxBavjaRAkNS4RMdAnqeQFN8jJdVnuwYu",
  "key9": "aunENrk4owxHTysZqZrBY6TTU5kYHW7sQvzYfQiVYaFJXeu45JjCAhT1uhWst6D2v2vexbGLUFWDpBLMUZiPGjB",
  "key10": "2d24WNTCzVMBTM6gh8NdppP4pEqRbP1jfKFjupkf1qbfqWUJHGhnkB3eow3G8sRU7b4aNxS9yJRyWonVBypXQiNu",
  "key11": "2KovozDY5dYn9R2aqD9vYfNS27z7V37mV1N39XSqPS4Le24p2vpFMwc87dLyFKBKb1x9udssiKKkiqodaHc1LRHY",
  "key12": "3fQecu2iDnUb1FxmRLs9HADjPzrAjbULY59FpZEJWg4B6Y7Szt46bxJpEvU1YJnneCrBUx5MHedt1Qr78iYuCo7e",
  "key13": "2aRLUSLPdZrcjnFkMDAWAYYdVqVfXU8heoSyeSz8MCqAGhVeMwptJz3xWPbdfdbCynWz4JrRsX2qiuzUU5vsoH4o",
  "key14": "51gHB9rZDGK51kidFJj978h4cMp1uaQJ5D845zDrrNDBTghjyGrPaoxkCtqf8M8P2F1RPVGvp6j9AiNDU1cGAMco",
  "key15": "d6TcjaZz8FkxLEHLDPxxSEUZ21TQ739pek3faMTwRqYwbufJxAkhsaTcCmCWw2FZvqCFTZA1yX7Jhq6wvges9g8",
  "key16": "2HXX5z5px8zxaYZt39qqN8T2aj7sKzMV3HWVhkCrHFPsGu1k16L6iFZQGtcWHuJE6nrEnYZN1Go6Lg9FoVY3Whta",
  "key17": "3YBgwKg5yi63EcP8qntQMMBVZnewfejMxrTqNE2LE2L2LTqsMCpf5LZas1U2GGALHTVR91QXPiL2a1M4tciQkaYG",
  "key18": "3F6fCU5RtXbiPjFGJKiMtiBD4XPD7Phae3hfei4JznQkd8gXXKxP63U2ALy6U1CDx65Dpo1BAEbdHme21aykUJ45",
  "key19": "3446JYpC8awJ2rktAQLxA1t67V3XuNTiFeYHXKqfrESZrS1PwZU5ssXQdsbwkbcfzimqU51NS1PYGfC9CzGPovuL",
  "key20": "3eST6EDNrU6UUR6e8BJH4AE5BnNdR3uUVdxDQ2RnMtbD2WEtQQ178VReQxo7g4LhqR9W7UWfoMHbzVf565njTvqq",
  "key21": "3w3bzjYgjfvaSLZUiQjePcbZygbXJ83e17C3XPi5YxHR4bT3J2U7VFFoxxBQ6t91FnTAN3JF82bQxYn6nskGn6rx",
  "key22": "5Z6d9GJ9Ty8dNiRESxV48BBuhLFQvHScjGtVp79qSuEj9K6bpFxSoQBJowkKzm5K9kvRcEgtE5atnX3BG1iZseAn",
  "key23": "2wp1zmVDniq89PC7cxFGE5vAeD7keF81QcSiyxd7tFnC2F3jmXNCrwGm5jvdsbqXrE4hyMrHG1EYPbAc4bDMFih8",
  "key24": "43NfnpwJr78rVsSRTjuczACFaJUJZpUZ722j5dGer2GumNLZbbhZxfpLFy97yYdQewNUohKJjpaMGTegUkinBEzC",
  "key25": "58kKrFwjjZa2KRyZoEQmf7WMDBHERRTpQmFNXoeL6WqgStRQULdUsriUBtULbKiyrju1aGQ5wJARSj24Fy8eEQvd",
  "key26": "2ZaDvdkbtEQfvLdxpdogBoC6LdXpf1EpnmePZ25EaR1ezXHgoRzff9WiGb9ZkFGJnysk9M2k8JoXRW5YDdT4C5tn",
  "key27": "55XrB9rN5vo56F62tKZFkeyCoWrxPdoHqPufhA4fdUNWjudnRxGrqjwU2K6ndANTuUwFZm7HcftveQyHSAwmCURs"
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
