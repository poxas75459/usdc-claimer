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
    "4muNfD1wmBoxnj5NCrHx9K88BH4v6eRfGKa3d3jPJZx4uVsGBMR2HG7zZifJYhgsSqsYmiAStDpSSRd7EVvY85hE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QxqJDUSkt9NDZNuhHoFGmb7knhPQ99dqCZXgRwvudepkMufygDirJjyYJdgdX9ZSmNhdffUjpE49TmaSqokqFL3",
  "key1": "5oNDzfM9bTFGXxoKq6pajhgSVH1sVbEF11bMHJmMe3YZY3gfFyQ2RqX27dPqZa9XBdjHZZ9GrRiMrNT25DYWipwV",
  "key2": "4axFTf2BPsuXBCLcPMzkNNWcwPrNiRgfKEYvFXLUcSASn8zzxG5KN47yHzHhUdR4qzWuAgEPT5ZFNcsecSe99SFZ",
  "key3": "3Sv6JVJHJMQZhe2uvcS98gA1YrLNUq9VtkemL4AiaWKeRP3HTaCvnwUm4PhSi3AGVhUR2MQFcLYVMyNfdKVKfruY",
  "key4": "2oLiLEeySe2D5k2K9xAjauDVZXoU8oJeCykbUZm8T73EU3dHXgp8ApTKsN18yVdezPfvdtdTWjBsx65oTwnKzr1z",
  "key5": "chFRK3KuzTLLVUC8DRHbfrSvjspAMKyAQJqhffbgozbamdqztghCkXMPgg6r5n2r1npd7yXBoHSAh8wfXEnfaKh",
  "key6": "62jBccrD4oWXzGzYdUw1fpqpPkcQ2ZxUT2ohSHXKneZHVwgTZWyzcdvJvH7Qh2p5ctcMFWPzsRhVMvpyCBd9XVQA",
  "key7": "zvKv85F1DL23M21mqDFHTn1grtur9ZFXTwZV8ZrB86X1dq6U2ybVL1Esq7FTNfKqfEFs3gD9nCdVg4njMuT9NCY",
  "key8": "MAVjbapU5ggJ7Ebc94H9SrLoPbGCfWTuqNksuC6PSPfkum8gnDfVr8Sbdyta21qFxSVr8KSWTURrzFkMJZToKBy",
  "key9": "4Fd1CE6FK5a4ffgT84WjkyML9znZWcj9Cy6Byc5V1w5pdmyCmKhm1HxtmKfyHumH9jw2238mCZJbenyFuzV4fjeJ",
  "key10": "5QeiWs7svzpW5NMNHktNDmHupYX7QZ7PNi6vomMyBUSagR7hXjgNjFdLzdujhCMpD7vbPNmBVT5TJ7msup8Gswef",
  "key11": "2V7TwHA3scTK5rUGxtMQaFnqVDisMWf82dTB8J5cJZbJevsMbMfmrW87S5bGjM5MDBQXJYfxkXEzpFs5DRyf71xG",
  "key12": "2rNmT57HiFzMVMzNWeCKjBNjs4xhFKCn3ncDW2EpBkc24XPLM9uCm6BZTXcXRNHyeoxFjcQUsb3GWGfmLMALik9i",
  "key13": "3aUpv9yZY85RmBXysS8HLVhcBbQ3PMbAuRZ2PRrtCMS1zB8F3E4KqHBBdPZFPjRdoAhXwQzHmrJXmohEMxoxv2hM",
  "key14": "2dQG38Ex2hK9qzTvuggDLQ3BBaMMN8dE9ChjELnPySnWay8fZCXKZoC9i4RCq99mMH8iTsp1MYAfcBTQm76fGmHM",
  "key15": "wR72wrEj22UivLCxH2ZgMAx7o5VZKue54MfZYj2Z3LQPaLReAGtJrkBPHXWkJp4UG47FpDwGwviomVdFnRZyCt6",
  "key16": "L7r2Ysd8pNFrY8FdnLVshiCw4UkGGy7jZh9xQSySsq2dcK9vFaCV98U4mtGnmvuT5qwPHJdD15sywQgnhgi5XFa",
  "key17": "2D1mpKab1zhKaSah8DpHtNL2CGFQxa2TWkNjCJwfLzmkaPnN8epEZGckWYLFErs8n8odPF7G5EkwyVrKNMcX1H2Q",
  "key18": "5Cii9fHmaFwDZmspkmLVbRxcfebPnmqnemYnQHSgAQiYSWG9U77x2nHzcfQkkjrGCPrh4kK6rQfRGveyLLvYMdmW",
  "key19": "55kAFphvDcfvpucwkfeYBUSnszaP59RhLsW5nJWgFVgH44Vn4oPJuXtc7re1o7GrVtXYv1PqC1oQdQZrEZnZNYrK",
  "key20": "5TtD2h4RuxArJeHj3xfLhnekb6YfLgGHNGmzauaoi67eFHWJfQoR8u2QbBEmjM9Uv7SC3AdufXB9uL95B3za1KAw",
  "key21": "3fpmm77KH9VEaXZkeLFxGSVivaKLbhideUiXP8trtzdSq8JJEY3fd7b7sxXL5AcGSYgGMP6EHoA89LKHKu4QhtRD",
  "key22": "5HbdG5eHLKCcMBY1j9aCLjPnPAA2wAaJzHso3JeP6FwfS1tcomxGCr9Uc2fC5zSBVvKhLgas6qCbgLyuMNpVbMKm",
  "key23": "qkMdBs2JtVBeJ1cEqfVbsi2vYU7zg2mG9ZtsD3aNka8gKnsFH5nYPohhBrmSkn1h4NSNvbqTHtwKR3LNNam5QuN",
  "key24": "2DdKr2e3LbC9evioTCrwdjsgKix4kZ7eNM6zHQVPLfgf9V55gDqUgM1aJ9wFe7YmjKUWHP5PWJN9wvSHHjX71Jfe",
  "key25": "3abdgRnNsHiDbZMWmWb4Ez2NU8LnCeRSrrLsfQpkwbv5QLxnXEdYtSMA24oFmUwA6wCYqcPUoyPeZTzU14xghKPQ",
  "key26": "3igPjR5JGkey6d8H8hFiG5DKZGKxZ4mV3F1gWXUe5wVZAUNbKqaUBfRj9JABkE5CiqQQECb6rBVbi9SDyCAadZHm",
  "key27": "5e9PZps7WU7B4wR15HyBzAdCNznozQoM7sJwhUJTpkTtU5X7mx8VFFisLytU1fKcF6eDkVuwwtWFRmhtxNpBQ9ud",
  "key28": "4fj7hjPbQ8skCGJru3ouUrj5EhEaUd27NhVzEvwcgLuaF4y48TA2CZAnazKF5b24cqRKrLAAHpEYwyAmqSpDiF19",
  "key29": "3TDAcQ8TL5oLaZLKQGeBrkNRXdVdH2BS2JB83ZMvsZtThixHNd9x2X9F2YkRQzGfZbWid5HRqWcnBotUnXrgu2rx",
  "key30": "5dGZNqBqaNjaX59GStjsMbLEewVScdqw6Hj5fvKKAwz7oCaFkSCJc7fd6vpfFzMCu6Bjhi3jWKnCy5WKqLzNEcvj",
  "key31": "3m79WqsZKYnKjbjDnQ2ZdbTbrv7WG2h4Wg9muAiTVmh8M2A4iVmwVDws3VorJsbZmjNeUAjyB5u19dVBfAyf3686"
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
