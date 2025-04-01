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
    "5Pb7YXGECtq68m79ZtpTbFnFuka9aTJdX7MtEiLZzcsvoiNntiWdsW9nfBxPuzG9axYD5oYPD8eMfKetxHDTtmYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYGQ2VNEjjZLn4VW4SXiUhKvMka14BSR4SDV6diFpjYCoergx8BB7X1LpBSLxAtDTmw2GX9MEfnvnm4pjUuNSmp",
  "key1": "24bg7yy3kgNsNzPnfXFP7esUFq1ZdgZAVAvDhJF9kDh8bQvFrgaRH7G4ELKS7TxMG8nB6HRjN5dccCcqdGrjkrhj",
  "key2": "2WjkzvEyGKpkV6sEeCHhYyrAbGUhfdMCRZG5S22n2BVfjD7H47LaTerCPxzf9pU1aefYECyHKqNYBo5fcbk9KQ15",
  "key3": "4HbRcwWsH7PNW2Gf8NReMrGSpBW8q8ZVkwFa6d25w6BeuJwcpRMQUhXCx5xpWxCpBnZNRAuVhFMwRTSXRmPZ5URd",
  "key4": "3vhwyN6GP7qEtwP1G4t7qWDzSyzYEXmqRZiAkkSBUPAdqeuXTAGKSKptG5H9VXAWeF1fi41KE9ZoF1iSNrrHMbdr",
  "key5": "2EQgcX9HRkWLM1CSq8pPw8SYz3EK1KNSV563ZfaqRxdJj5YraBifWAYHqaFDTyKeSEL1BmRBHcA5qKQ81u3RMa3n",
  "key6": "bFUWuqJrWWFC69WhG2U2ARZqiNqAhE1djFWZ2ioqWdGH9Gu6omoRrciYo8QYhFwLvNfJtoR5jWCqpetF3qX5pXd",
  "key7": "3kTNLq2kE62opntB6fwQqE7uRmvbG2ATxWSvynE5RWzqmKN1bC4Uw5BaPESzbtnAWRXNG7dqSusqQ9Brhevfx9sy",
  "key8": "metmniZ3PnCmAYdRz8vzhuCRRQCAF5JHXCJS4JNqqsc8hWasUCc587opDyAmvJ3nUbJ5BLD1c9xN72zEbrmwC6m",
  "key9": "2r5XvzuYG41qgEoBk9HY1dMbjGNPkWwJeDczwrGYugMVKeq3TM8apHNknGK15Boh6sm3Ns3D9cetbU1wV8VsExCo",
  "key10": "5vuJvPQXoM5r3HDmrh8CZQg34Ky6NsiK5pntAzraBb2rf3qEQmMaLicAf9EodtvpCBShaqsPdscoE1RFMYtyzxnj",
  "key11": "2VopCaxmoEUViprdVKesEVw3vpt2LcEDekVshB8whji2cVsEMkcH7KqkifaZ2EqTTYiyJ7bLjdhQVLykoSp6PLsK",
  "key12": "4HSYUQz8d5KB9LYY6rY8aCoZhFNQFREPUdHXUduy6DhpTTdcxmg1nypvENp3RQfGwc7jD9tLQ4V8Lq4Pn67jTjS8",
  "key13": "2a3TXLMU3hDfE8weuZLKNdrK4QQWAZSVBHmd6xE1tBXWYCs2tYXJNfUKyrDSGEQoxpZi8ZPUiyoNZWPt2FeTapDd",
  "key14": "461M5D5n1XXqz89gpmY5K7Yttxgqb9jpos1djpYvH9ak9LdnoW1ykXBLNdhmT7z5WebYSYFiJNqLqfdyGERJsDyw",
  "key15": "4WZyJ3yzTwr6MDjkrvNbC378GDwynzcqcni2uDWD99BGyhXuabRvVvTYCBXoKob7zw6BYSy4BdZf6W6abpFpUUaC",
  "key16": "2b79GfXHZR561R2ZMdxZ3DrEAXPgeunaBNPBApudg5eFka1NftTG9PbNdWSUTxWa5wmfmLgo8GhEBHyCLkhWpes3",
  "key17": "4WnSPvn66xcrpw9gtAPkEcMsfXyUHb2YV44itaTPvdkTkVQy4GF9EUoG9eMd827arEcvVH8tMJdBUuwDTFzaTDYj",
  "key18": "2oLcZbM14bKJ1UX4PUXUnr8K3SMEwTvx8pbKjjYAeSWpNhqwC1KR9yTMs2bUgvxChjsVLsMKTrK5qRCJymy73JrT",
  "key19": "2uagtvinTvxDR8ZEDWp2BLqDuyorVeV7e2aNDWcseRNny3ue9thuKS7BBtyEJNySDGppit2Z4caBW4av3JvkbsYx",
  "key20": "5b7gagG6mWHmravKUvoKc8L7xVJsUXaV7Rj6vmADKtJp1acbaui6RYDKb8Z9uf1WQEDo2Q2soqV1waEhA7rY7yJ",
  "key21": "3WD87omJuAZXEhJWWvrw4PowCpdXdFrDKwBtsaiKm2F84bRhGWMbu5PUStPc1FSBh9WAgJWc5w9ebznu9kyifKvr",
  "key22": "2bSaqHSsKWdg5cfVda7KJBCUDSy9SMVTF9tVTWk19QpdMwuBx7cvvgQ1CSaZrriZz5h2vpTDkweXYVMrHRi5Kabh",
  "key23": "2gP7qUJhmYNxPG5kcCDXSDxHFosfzZfDhnkWToFMHBH1tQ2CyfuP1csz1AWLBxrnGCFMHM57yuCAiH8hWZp2AuRd",
  "key24": "2zmkZQ2twnKYZGCtjpafdJxEpR6nbxKdpU3aAuMF6729A13G1HC8UWpptZGv4denP8uvECNAqKs5ss2p4Nt3mXqE"
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
