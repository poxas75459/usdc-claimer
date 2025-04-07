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
    "3nsbpivk6phmpuZeGUJP3n2sHsUu9g2oHcaD3zH8sub27GxmibwcvojJbDQv4J8rvHGBFeXTT6kQiKYec2kuhj3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rNHqfqV6Uw7gfxk9RfTuU8RmdMetKtQzP69tQak2eNNcesFyCDTX8UxQwux7LhDryt4w9ooaGSSucC3eKz2Ro53",
  "key1": "23DKbDfKPDooZwCjhRkecWeYhyd4mRo73ixVDjYq7jgN6ghGmS9SjHZoLkumkqYonHY87LqRZAWUmfgyqYyvtgWB",
  "key2": "43g8BzJQppkAj3E8bKELqV87qfJeKgZ3zxhTjWug4sSn3AL2S7sYpJXTggTdiDixAW7L2s15VdCNWgW8PMejyVSe",
  "key3": "4G6KkzzeUwuBZcShaLzr2cH5JATGNSAxDvxruXfziYNTECvUMUuxvWuKp7eRFYUCojekrjKPyjMcPKB5HwifRJWj",
  "key4": "z9kF12rCKZudh9Fspsgy3uxumEELejgiaZ8ivM5cdGubv4cMn3F9nK2svnPAiv3HjGoDk2oHkvWGhQp837T19Xk",
  "key5": "ANvqcpyZQnh8hyzuYWnoMaQp44vcFQdf5wez5GatGiaaUCHcQ77g4SipK2A3CkgitDMoA1C4NydMZciaf7SuaHb",
  "key6": "5Zx6mDaJCS76u68AcTkQXehfYhp91DSpML7Edyw2zEBS356PSsEtkj4UwVNP1GR93d8VFuNPRMWaASR6hQUfqsKR",
  "key7": "5eRbdCpXmaLCn2cBQJpgjpi6CzTULEQsZD3hPVSp5VpdmH2BK5MMHKtDLJzjkQrrqtQiuSZaZPWq8QKLLCguvzDi",
  "key8": "5kFGWeVsGSm62UjHyi5U8Tbh4Z4YhjxeEdu2u7euCLzAB4bJBWDpF1g5AjGML99KCCXes1JP8cXV5NEiBd1LMU1A",
  "key9": "4yQGQdXqECcwPttpkEZnatA3L9KtSWC5nYhhZ2TBfi2F42UQ6VcKkEMxtDGpsbn3r16w76YXKzaRV9adzDeHwLbi",
  "key10": "xNYEDwyMSA9CVkP5nR9bobZtGL4B7t3EvJHEKZn1qCky41JQSWwBGoy7eVse3GRPX8Bmp5gimpaVmDtdnytf4Ps",
  "key11": "3zMGZXT1roGVNgb8BCQJ3tiy7QqFXqM9cLkJ5K7H2Gp7wTbdCqEMjbGjim5dJ67ftbwkEiEJq1hVJadgRuszmqCK",
  "key12": "3VTjiadatkkF49GfoZRcvJ1aWj5MHfrjhCFJ3p6AMG2RcsmHRD6q6Qd8NiFhVeBGkD7HQguAfxiApsvV3waPGSjU",
  "key13": "248kbDu45PTohLftXba182mGHueAucN2HrQkQBxioDCGb5x4WEzohxaS2URwQWkMR58Pmk6rXpabcmZNpSaDe2F2",
  "key14": "3y5sVuepBbxT6aU4gFfwGDWTnttxn6JSXdbAkrmszymM3ruHraYkHFgASyM5ZeZte8sjGPGv9udiK6t8ETbwyar9",
  "key15": "4RnTK6S2WMziyoz9CzqxkMESLWWvqxPxo1m4zPz81T2wmrvdiMWusd8Tft1dx7obz9VEY7jTCGUGRemsp3gPh1RT",
  "key16": "31ri8ooJM9YWADkauHDX9n7ZiuCbprkYArbZpyjYrVYmnuGgrQu2Yhm2aaZEB8V7qFBGVgoEWGGe9H6YgvoCFY2a",
  "key17": "4ttdr52KmELaY9JGqYRGbJHZb5PeuZ4uZZVi2ciFptbMAkfaqLVhAwLnXoqm74anxW3tLUdCQJFtJeppBvcdSHMM",
  "key18": "3ieqne4m7UJSQYvKE5oxa7ni7aju5FMYN3oDk3TtxqdB45a4DeBCodec8ynAqvmPdiR9h4uc172rCvRr7jVxR5wm",
  "key19": "MWsujGfnQ3JrxCVeQ3cqJ2w8bxqjhRmZ17XQmiwFU2VzSkx7CwMqJxSDcWYrD6XXyRmiP8s5n3PZLDSGsdbatSa",
  "key20": "4LAHjz8qm6L88miYvkj5qZ4xLHj9ndme4ZF633F1gzJ5kNLwf58UqDMXAxf1UNKzPMcHhuvLDqiSjEeRRDJvC6HB",
  "key21": "5HA8kGP4uNRYa7yAzohSDKCVrZNUbpLwrUQCZDUUXQvHQFPEYA8dnMEkoL5DCpRGSHfgH1sxCejXDqWbEFJcuveX",
  "key22": "25ceCJPZVB79C1Cj3SeeU1muZtGtFRUYKL2edfLRhYzek1Cc8e2WCeCeUUpPnguQXqKgqdWxZfrS8rQCrvv9v99U",
  "key23": "FaELKeXJ327z3DPvF3ZYeUmAFw6KZhSbtD3RVCirkMmjKWkNWcB4xZZpcEfpMw27AiDyTgUxh2VbsJ5Ep3f6Cn7",
  "key24": "43ZnG5bQTjEaRAvBAa6NmcN1uvFGv2e9x8RafvDdjqxYaw9b71JGmJqyqH6NsHJJBkSF1EbjLVr7JMobvfBHeRPz"
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
