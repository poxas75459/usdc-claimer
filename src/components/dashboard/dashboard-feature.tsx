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
    "5QKsEo9qpBXUHLTh45qfoqsPBVpxGehAK8b24WscuoLtuY7ZMjZ1AqnaM8WMHgAjeDLGbmzBbvXBAn4kPhdi6qoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ckGGgJD6gucLfSW6jnAtUp7ZhnMN3TUZc92vQGwwzFsvx8ti9aoaQc5nPCZk9wikd6v58xPnws7AbtxFL87DBN",
  "key1": "358ZKazniyMvT25p47mSKFoa8MnkTzgnRoKEmamdc4BApPHzLZZch6kycBrt5vCCVWeAPccgkk6PBFp9kUJD71z1",
  "key2": "62Kwz1LZJpgkFzAiVTiYQxoA1ZghtC4LApM22dURvjRLdQTzi1kRwTjb5xozjnN4aTm8CEAERkVxrbiwnq4RkxAm",
  "key3": "4vNTS4Jb1NSDjWufZgyCAfUFvCVrbcvEYe3JPAMm1QksRFNte6T7ZiC9Ng5EfPQ8Zw3HV5nMcWGYoUwdeajc6sNJ",
  "key4": "eU8QH26J39V5dytmJoJbutK5FJeYDDogNhE4bYj4UAfPkyZHvpKfNXSAx1EqeZKUup6VaombBuRVY16aQXHFNoX",
  "key5": "56zD59wysNt1AqB8BgUumBbWSRjy6zoDu1Reyo6MmsU3XaZarUmAkDnkS5LEotJHsHgZDwRM87QmfbkEp9zTrbDZ",
  "key6": "5A7kT7eh6PfYdHuAmSXMUnxA47LZ9Q2hquwzEabp3YburpRAfz19NRb8M1sevE9UfQ9b7EE35pusz6iwPhmT6pvE",
  "key7": "2Zsdc565iMWQS4Riy8HX1gFfBynLhf5CbDQqj8AmPoJG4DoN2DqjD7CRiJonQSGGeUjcRunkspC4uwZFtUt4qpYV",
  "key8": "5joQQJAoTTAecVbkr7x2zHcTYMfBu2XdzLdiw3SDkXs9BxgKzidFnoevS6XqHhTvV1miD1Mkde6rPotENzRR7VTb",
  "key9": "3CwuKbSXbv3CDWNDPk87f1qAMRb3yuN57jru3iM8NxaWcRZUXkDUxPeUK3uXSh5bxFe79ZzAT45qHVf43HdCjRcp",
  "key10": "4JgndXZYhxNiFdS7VbnzrN9eFMHG8Hy977gTyNNMKWawiERxDzQwTj7utA3ZiKXAXSiDyPVwmHwzAEFnUQYnyNv1",
  "key11": "5kZnSgSXBMcKyiPmupZehjf2kQnXhNjfyXdBRCdHzrC9GXhLdSzSp3Nx1AZavUpBpwbNvABR1YrfzvcM6wEqPdko",
  "key12": "2zXAPm5sP3ehGa3znefU7MScoqs2bzCwfbf4HjHbErJjdVC9o2oD2N6nQkYoxgn1ymZak1yMoegQK5WbeYtkxttr",
  "key13": "3yhxFerptcGPW3n24sYsBknu2CRLEy7s7RDuqN8BpVwfpBs7mgzuJNjHtgcn8KHbHEZs2DzSLabavX5cg7NXYrRQ",
  "key14": "3ovZXAjfjz9PtdrJVPxaxnUdVDHbGtVXTxDuavBwNMggVfbJNqoUHhmscES4b1idFytsAucHUoZnWEdS1tpiMXe1",
  "key15": "2KfMHz1dHjqHUL1RqdQXgUoJbJWzsk3DUNmTPdwsujczwdAFXRecfwyfKXGzb2hdGJ4eG2nMdX18WVXoHKwrjyka",
  "key16": "5NovpusLMsqHUrJ6LNRVWbRUbHUpnYr3n489qEQSUrJEQN3cJ2P8FkTwBoimu6UBFP3WVnd1n8Z7z4Ajkm7Y4CHV",
  "key17": "5tQa62H3NEhC3f2e6RXQMXnWkAQQT2og8G7gUtFayeMbSNdA6RhU57DpyBc54Y1xH476unmD8tPXfNhTmW2Djpux",
  "key18": "53NaYEJ4sAio5ZLCC49eZ4yC9Bv6eboGehAhTmDGczboc145wwpPN3ygDDjgZUJGFGKRKRkkaer9KtoV4FScSFe3",
  "key19": "5fe3nMe5s8aYY8AxMsRbM7SE7n6qwBBC2AEXjLoXV8tCLuVyGcYbtkkeBDhkyCWg4gNJaw3gvZ6vRnBoaFhrBL1Y",
  "key20": "5ky3X62PHaTpbrfVX4jHZqtNRGDRXW5cf8eMYg89bCpZ3tGzLYJMoRZxWQBpwYD545pN5AtRhhYnnzu75kPomUmM",
  "key21": "ujHGDkSvPdNAPgfx9gDEZQXDv1zsPfiY3p3PQZo6LCStaKJDSqLCgyTByNDteQh9n92Mw8y1P3TZDuxEbdDct75",
  "key22": "253FYGXs1QYhR6ygue3G2a7NzWUk4CJa1pR4H8bL7w3kJZbPEzQRYShEKomaMHdAeWPrmASx498zLEXypoXt3CoX",
  "key23": "JthFDcS3KMgTJuFoJM6vHZqnSHXbdFBqRiFAf5kjWs3BJGHcPQbM2u6vwk2B8697ctabyP1HQSbk32itwcRhfn5",
  "key24": "qZTnDPHS14Z2GKC5rSzi2SjmdKQuopqyCotVGnUsr3SuDNBFhkCVXpqrV1L3rAS1wmCLuLm3XJAYJ7XfTcrPvdR",
  "key25": "5Tvzb7yj5RjdN7E72D7DGQ7WeqWdTEEHJbax5nEhfhWnqKj3MxPx8o5UJfFRCYsgDii51nstMfHVGt1RucHJNPQ"
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
