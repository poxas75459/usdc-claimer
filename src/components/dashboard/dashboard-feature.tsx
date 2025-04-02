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
    "5oKZihR9zsGCc5QfshwWSGgDm9JbCJMgP4ecyE7TRcqcTFbtNscaPXAvsbDQQACP4ngGFr9aKF4PVCYni2hFkV5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39CPaEwEqsQJSoP1xBxjzzRA2SXvDDL8yPMXweBhLkBnQ3PcRPYGnAoqWxPBSww3ngtDQATNyNWzQXngbBmV8CB8",
  "key1": "Vk7xCbFpCCmK1PJMsofCxU91L4fqMs1HAVkUPAGD36j3VYejPmALmjBHZWeFJm7PTXm3RozPYCyhyvhbCFsrjtY",
  "key2": "53Qy5GgsbUJQ4yM9cCYTgx2CBz1jaeqvVRso7dP5J99nyAmssQawzoAFRLDQAVHNrEg3PSRWwSmwWBtr7FKPLUdS",
  "key3": "5z44U66xg3Y56c6EpnwR9aBEfvW6BDDeGMfM7ijRYWwtMFmcSTmPmtWpfqQYqcGTE26XRJMzAMWen9uNrFLEpqbz",
  "key4": "2dEsdLUvKEUF89ecEv6sgt3vP8pk1nMNhRS1Z6G4WHuWLmEjuJwV5SvTq2jUfHP8SXpRn8aRnbqZQcYvJzGVoqRH",
  "key5": "5cH5Z81XnrmTqb6o3qVaU9E9hNPpex58rDWzYrPNaeug6ZFaoc9Ywn48pt6CYSWJTocRDnFtC5Z8DcT2vT65Boav",
  "key6": "3AL6hexv2ivcFes8rzT15fSXe2mVnTmsRHmyiEZcGtVdgW56gZPxnWJ4pSrQR2c23pftwUJi7RPEZpXLKdXeBEuj",
  "key7": "4Lgvnk23xdt3Bkmfb93hQDosAm5WNQdW41DqVCZeCe1VxSE7ZkBZz6M9RXhipWujbuWfcJHsiu3c5WMgLyVgS1RF",
  "key8": "34MtEN3C9v7PnizxkLobwGcsSsbvcNBZbr5FhHzorDvjWciqh2B1ghftyztytVGMK1dZGoGAXsDbp2a5oKFzTtSc",
  "key9": "5TFTensWWaD5ZV9moHXZjBpAuX6dmzcpA6xDLyAhQiBp5TyhkdgU3ResvMW9baEk6MuKqqWMtMGTBkjvKDGHrrPm",
  "key10": "5YLSXcYjPCfZMC5V4brkwdQ2uyk9nvGdCa39PZjpJhHHGfgyEwUwMmotKQJHogzk53ysobdAm8tEM7RqcrcYAdi8",
  "key11": "5XFJUXgH8jW5QqHJrfewbtMCF1g8PJ34Q7RPrngw4TMdrkub7vEVai3RNtceQDbLxGH8rHY2tx8Q2WZT6ebxHZyX",
  "key12": "58PZqFdWaqYrK5PLYsRWbsw6T5QTJ8qDkyewPKLvEUmjPVPX9S1vbwnGPwtikDxwvB897MZvm3U8Qxtc82jWZRWT",
  "key13": "5LJF5k8ugE2FLiLMg4Siv8Qo1aXfFxshMYAuL2Aaw1MyLJKhkEx6VZsqMMZVurfGkMvhGnCL4Fo9jGQyMMBnrFQM",
  "key14": "4X7FLP4ek7oq2p2eAgwcWp4nX32NZNycLehNTYBJoVnJ2eXL8gbeXfB6t2bT7nxuQEWfxMNRqit7WgpyXT4KJPaQ",
  "key15": "3sB3breHpiwGoS1nMTJDdsqANe7hwzM8jVyT9eCbXzkrsA7g5TphkE9KpNAnHHsDr3zNMdBsWQzsoCwrN9eXp6S6",
  "key16": "4JtFi67Qm7EqhL2tE9RfD4T6wPHG1Q4FWWCqnwAfuZRNLaEHa7TSibtjEeXqhGnRuoMkt4AUoa1wJErAGzHfuPBf",
  "key17": "3s51oBYNZaosD6g8g1XYVYnwwnpdYkfJ5qejiRGMdTwB5tMfafjgWSqcFwUBSd8aU298a4KJ7TVZwZMebFNNVky1",
  "key18": "2AKaURvKCyFhFHN23t79ipX6vXM9F7dV7pUDETzwtYrovXVpobWF1zRr4GCk7iBXQZKF1gjub2e8R8riWfGLya5T",
  "key19": "5tiATXHfod8v9d8oWBWCkUzNXQL1pEc8bG1XvKwZ7k1K13MpnTETidmmZjJCzSV9RBkpuh1y9eEnUCsTD4i6ADK4",
  "key20": "3TbYgrpZvgjN4dbvDfHYXxWW5yuSjsjptzz95pcV2DJUrqeLrttPxZ6EuufAG5oEiBZHs2ivyGLPQ9wKLd9QVASw",
  "key21": "tjVY8QasrARpAhoUxDY6AmWSEHPTZM2YwCX6EWmfWngdeFTQiDGGEyeYinJ3Pe3G22H78nsYVfuA2YbyhgRWxcL",
  "key22": "4GjC6P6gsRafHPvSuZANt7t1mThQH468MNfEZVyvmnihJ3eGxZhfsLKtx7niDR5NWAr5ArJED6FWiMYPRqFeUgud",
  "key23": "fw5hjUgvTWqqQRLhBgWYEPj7MFZtfGZutGzgHFDsxaSCqdUsLc1yp3pL6E8e8MsZMM1aK1hBNZxTUYzKs5cCXcc",
  "key24": "2oHHXqNQxuWnVJHH1LYEANr2xnH59bu4fX7oF13x1GtMfQwFyuUmoJDhiWUfRrWnEJuXudDtJDCRvQT82DPHBL3C",
  "key25": "5hX6bXDBi2k6nAtVr9gH8cxamm7nfU2z7ka6kt47Cda9K7BAn9JdgKPUyntJAnV9MFU12Q23LNX966ptKmrbgHrV",
  "key26": "5N5Q3AyUW7WFz6sf86FGPY7XWSVPkC8K9GCdr83XN1Z31bCVNrnjpTon2LvXq6MfaAXDBedrfsy4Dbn8N9kiwypT",
  "key27": "McHGWoR55xLHsBBvg6JCFiFxUWWbAdoLT3bWUEdE2znXgV69d3HrFmiKumWrnPpYbVjgMAudJ2czGntrPwECMCF",
  "key28": "3mEryW9G3iZTkx9A3VJ7wtUz5iWrd89E13szcYcPrk3U9qqiGq5ySKbL53GQwg4x5mLW53jJmSi9vrzBxm65bz7a",
  "key29": "4iXgXX84xrPZ5J8wUtc3bwqPrBxpWmvssnhpcbzzFZQDgTZ56J8qQBq6vQ1n9qSUVm9mES6xcXXyXuDn4Mg4JkwP"
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
