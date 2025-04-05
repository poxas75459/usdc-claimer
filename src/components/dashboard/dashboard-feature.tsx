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
    "4qM8KYptCwK84iK8YQyN9WxVzrsR9xAWpPhwP9S5Sah6bAZMPKKUt39fvWhV1T5UBwFFbGh63JK6xfC58UPNrnpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1WSso13U8U1vD2QZ3z1diZXDLytCzBxL65pUUV4NLcVi7jgAEuESgbUj8jfdRFDpg9dbKSWy9t9wJA9w9QB9CHV",
  "key1": "65JJPfAifJcDE15E5mAVbVrQu3QEb9C8YVDyBC8nVRR82GQNsEsXQtJTuhwYDARXQAEdzvrd6V3mDx2VWNWZRB1j",
  "key2": "33SKNJUbpchaoPsEq5Jfx2nJXBEMqrRafRkVB993WD13sbyNdJ1JuFbBKAZQFMQMAoYwaEi3nBYCanAPorTQPDeN",
  "key3": "3Pncp2SMHppUFLETJccAoDbqiPM9vvcWNBY88mkXdLhaqyDU6ZTSDMTWxpTy9jNgnRC8sQDC2HHNhfyxzpVCwKvn",
  "key4": "54u9Jff1tvEE8yCLCfvfTFQBP8LndTXduybfHa7UDZuQv76iJi7vQwXSHsGzywPKseQMPne57EP1cYVKU36JJ6U7",
  "key5": "5CWzffXndrguis62ds8FkyhHLEUtBUobEdhpjRm4ZHXPa2Bn7jWm91ZBmBw4TDcSFyJBw9ihBaMvCiYc7T8CcSUV",
  "key6": "215uvJmLdiDo5hMaGfXxpzaiWwwQeko8H5fV2b1XGq4eQpsxhY7mT46pjtww8evru6QDvKEE81nWVWvqpJL5ExX4",
  "key7": "5nCx1DowFLJnLGFEsdijfoBuUVPv1C46GAXwEgj8opGFoWSF2dmMWmPXzJpAYb58J5cF9YUXK7yr3DmhJs2GYiQL",
  "key8": "5xoHbzyHgGKYyzMVtb85LRmohqCb4f9cv8MjLkMEkBswzs8wEBgvssChaGHFK6yVRfvFXg6W7jMqeVWiqEgeUYE4",
  "key9": "4y8azUAksuaCAzag1LdVcaoULaWntNDRh83SnEUnnHYD8ywfQ79BY7Xv6wbtxywVPigtdD7UJmG9K68zTqtNRtuQ",
  "key10": "38EgNDKpH1sdB3pkznuuGFrF2N7WM8fmTGrpMusnKzHxHr3kzTPpgjWjctmENhGM14L2q3gcd23iMS7Rr1E2wBBD",
  "key11": "3y85d8iftFo4Txag99dYKAkWSbJMmYKrEixkdUvWbpVNQN12GmTY5FshKMgT6fD8VcWdMMDYbnSc1CdG5vBuGe1K",
  "key12": "23NMBDAgdJDXxaDTUTcDdfUJWFNLCTTR5KtwGdCFXmcmE7ZfXrnFHEoGXPSQtLx5JQyvyWzNoRzC2ceiCftwoU5Q",
  "key13": "VWmAbdTiwdooLyMeNRHDRh9VocvPfWe6HuFZ7yhKmayWAbmxPCp3rAUvPLU8dGYADgTbinqFaXZi1izFQe2ehiY",
  "key14": "4nfYzEjw9x7h63UABC1iw4RPimLhVNyWNstZGjrpBNQWRxc6DQXYhS9VjCv1s6nKtFnvLK9CRsdwxbJ1GqQVusD2",
  "key15": "5T3vYiUKsHTUxiREZNmCYRU1gfyBRvJKjw1MrQvCm6U7ZuH1qjhZCMHNefQViQZbuPeLAUD41h2VHX6prGTKD6NA",
  "key16": "3VMmGD6uFDV3HsZigrRAqQWbknGY2deMWttXU3s6xzXKLQcpRRSndmcmxvgMkHt2jsu29GgiA7FfXmRkm1yQw3cB",
  "key17": "5VncoB4qYcGy6PWGZYEpVpnzwxA3FY24koj3PrcRmD6XrFFenKcjjcjxrG8ZnvZgeoAqxkf7M6sAu5QNcDyvmod9",
  "key18": "3jXsdpk22xPe82NDEbmoNax7gEuskk4jv9avn236MDBuj5kUhAcVcuj9hs8ohK4v5fThgbi61zTPy3dXxdL3UkJx",
  "key19": "3B7GgY2zVyxBr5cjJTd1S17pUyn2dfj5XN1P2u96D6poH1YukdfaGqdQpQfuhCkroRRW8wR4RSayFyNeeVr36cLB",
  "key20": "2A825xuwLGsF6U37WmZ9fHKc7m7PN12b61oY3tek31gT2sRZpfzNE94FnDdtP3hK9ybWR3jFkSCNAc23K7VuKjd6",
  "key21": "4NpRH4pNDDqGXTBv3mwbVTfBdVWvdTovjSjH9VBPMzF8op9rCqazFkhYPorb1fbTt8tq1sXeeHb1srK1LZ1kp942",
  "key22": "4BJyfPU2ep97ja5W3juAvGJWJysN5sQKsGZHiVeZiAuputJuYRnhTnKxnyyaoajRX3saXuwLMBDq7et63XiUXNVy",
  "key23": "yzTNxJwuEp2WZhoYSoWuBvzwfnjwjGcwH4yGidtgHmhn7CQW6ZxzZTZmciiRNScxJGXM6REZCLwHmfsQkV5pjvn",
  "key24": "4tZeF6B2xBhSjEgi84Ba1SCs2yU8mxQHKmq7wihheU9SRD6jhb1grdkQmRuVSjjpfr9qojXNQ5SxQuCeUmKn6Xsm",
  "key25": "2PuRz1bdd2sVo9jaD44eX1np5nNkFtXpmgytmXoG1uS63DoQ5UTdteUW2oJGDJXPfJGBG1gx6r2NLCrJYHkwd2Ps",
  "key26": "5UWe9SMgeyBEq2py64hPFrZ2noK3iPEDYbqpCzKGpVLgofsUkvEM3zPFNfd1LjV1Vv4CkVCSxwgRjk4g1cW6tUKv",
  "key27": "CLEgwiUMtTApSqzZvcbSf2uoqQEEFUKQxfGq3jUoTW7XSXg3WshEDLoCX2mhre4XfC5kQUcFjoaRS28bThDfZQd",
  "key28": "5n3MCa98yZKEUcTo4SWhpmjfzPXa7o9ninDWdCteDRH81DmutTBSstiPrG665ES2HwfPussCYY9yyj7NKFjL2MiM",
  "key29": "21FuhxGhKeDR7Fsfk8JwMUeW2wPjJJe4UGbpY6kdRWW2PxbbhrgLz1PPf6Hh5pouGfEQZ2k7BbNsMFyVTKSfaoCr",
  "key30": "XtHWqVTuBH33ZZCpBDKwoVF2Za8ivuNG1hKg4EvX6XoBDeSi2dZU5TrbsdEdwtXyMNssnyWx3ynV4aUTzGZArpX",
  "key31": "5hmemWEJjjatN4r15gdxXjTfvzTbjk4rznEcaZMzhNBPPSGNqRLkdDw49agg7v1dnhoQV1tk7LtWS6zLZTPWw9uX",
  "key32": "2ckCiu1Du8pvowS4edCXKr55fh1ZUamwdFqahTN5QMVBPZVRwF7uVmL5h2NpyBaWTckaPpmDBGC7QfmN1E81aZKK",
  "key33": "46UiUwASLSodXtcwWZwTjkXRoCbTrK1oJHJy7XumPnoTvXMpb1tSk2LmBtrQM1iqjEPyifwUbcyy2yXebVScqo8K",
  "key34": "64K4CZZyG8ZfpsZVKdF9KRrHEK4MxtN9Z8KuAGgS9u3H2FDcnzgPFgMQWyvoJobCRrYV1vaMZXhFRzpcMKct5tzK",
  "key35": "54QcQz6jSCxWLgZqh6vkYPqXD27No8fNHvRpn8MfnUG7xxhacrphHQp3WWVUTyitppAE7FbNZM36DkxNFry4tWyD",
  "key36": "5NyP9dupuUPn2CZL1FuAg2DxcD4qFzVL83JHVAzCdF5jvvJN3P2kajEJiQe9te98VFZoZLg6xpBBWsXKh2d9njS4",
  "key37": "3H7XUTjXB3U3o5v1nQrrvbwdi7k7eLxTxuCfPeWKk6pynAoTFuk7zYw83YFxLr1uYBZPeeiF9DjB26Nniy64yeUc",
  "key38": "33Uxojaxag3qkS9aMhoMN6LEPDNMMHCqCxCBEzHDtit8kYkwdTrapikVFU7XA3mQQ8Fvd3ugi17fEitxemUKaUNC",
  "key39": "5VRBzWKA6gatUFF3aQJEFXKi5Md9WaZVehYTdBKM2a2gFfDyP9RnLojQSaYRepvUVDtYseHffv3hVDNHC3cxAafz",
  "key40": "5rfaMxQLYfQ5KFMnP9Q6LTLfNpyWaH2f82rrKLxxjmLqS7dN4rcLF62AKoS9Srf3cFpL34ZggcC1piDaR1JnLzTz",
  "key41": "58464JxswsiMpjPDLeGCUbE7PyML8fBMQ11a9EiyY1iRL4XszficJW1G89ggxLcSqJMS9vQitkreg6KVWwySwoCE"
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
