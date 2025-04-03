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
    "287H6PfMra7ZepbTfrTCRmj9xKL8JDysLHWdFP3c6XaqEX5PUb8X7fBF9nNVNwKjXKd1pBUnycyLqoN1nRUFRYGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGa6awhgWrQYrhkXqfWVt9TdonNopWW25mWKNF8ULU2ZgaVumSroeq5CCkQK48q8gYcZHSCDdhHgHK8Jh4sE8AH",
  "key1": "4znxibvrtHiP1w9TwdGz4wo4XHFUV1DGBfWrePoYHXUiy83VEg39kmKFaYCtCm5Hx5zRzmRf4c5HB5NxdAJsE2xg",
  "key2": "4i5ujTbeX4n8YNAiqYVfxaKzhYx1h1Gz8jkjjFbfsn1fEcmXTpvVMF56p3AN5daRawuLRWHqyQwLMeRfW9AfG8uA",
  "key3": "2Ei3RjrYJvpNfjZhqu2ivqYgVcEPxeTiQDtxQSM9knZ4q6fsLTgWMZaAtnUfNVR3sUyd9KTBhhbcBP7RN2hjLAYY",
  "key4": "3fh46aKLjhHY8X5wegzPXS4hPfqsY1pbjFhUw53pPeHcCTfzjv9f4N5edUoXprt7mGa836Myunen3CU5KLVuz1Xi",
  "key5": "67rfHkt3NvgUE8ycnrnqg3cZg6xXauZouUaM6xSddF84woum9RtEPCXZfDHr4vd2UdBU1Q6gzZiYeKDTg23zKr1f",
  "key6": "3rjVnZ47udCpa59VHN7QioZGGScyh1V3yjrqo2J1ByfqjPJfxXhEfcfxYbojMzbnLr4dLKkY2s7HmYYZ79jWBa4i",
  "key7": "54JLnmAjxrqVs2GXREQwgwDaM52cEJxfRWYXPsjaxfUpDgMtyxdV4Utsh4tEarRrVkANc4xsK1z4vz9EZgKC7F5C",
  "key8": "Y1ZwByMb2eREtKzaovMMZuk5mS7G94QRgHZbBKhcW3sVuK6cBy5pJea9B6HnZxZUaNe6vTijoB5DYMieWSuxjxj",
  "key9": "5ksE771MfsJ9HBoR47X2fJ2YCMLgY9FodjodJvoyPCyKPLyHFNUESCYHNqPgV6MmZrhk75kK43WkahUaqTbkasFa",
  "key10": "2vWZUgdEd4iQkxJ6mt7qJbVPFtqX9s95kGu5ob1fxv94Uc8o246VsktjUouHEchiC84wXdgaT3ogaqFnzPE8sWEV",
  "key11": "22b6Ez3h9pZTvSAxJafLyz6sWKTdfqseQCquKsH8FuSctC6YurBbkd8gnUbmmGftvga6dUwwwQucoNN2B3ABHJvo",
  "key12": "4DNMpwanhJ9j5KAPscmKAoe1hAdn9FLnQsN8E4UJSMQXWyhXFYFWr3xonHLTwWbMK7NwTjoCCYU7WwumqNYfJDC",
  "key13": "3oeTP9ea6sUZt9KVHgZVgrNEZWVuCJYNR16vzQ2ZkRqAYK6i8xmEPBgHsM8a92hX89d8eR52YmntxzsDdBaZ1KGu",
  "key14": "5BE3to1WYyGAbhNWH7RhmA2Xo9bPcFGhY4vUoF2xQwG3FibWYatH7N3UbPgUz5umKkbmKNkR6BhLQrSSYrPVrFZ9",
  "key15": "3GwewrDsNxPT7eEFS5zSm5RkzJdBUNnbBuj9hYKKXRjcHTUepVfQzs1nbu1zJNxcA8Kmpo6V4xhHgXJ8W6WxK8e7",
  "key16": "poCB2XYUCq6jH7GyajHJyPTu3pauvGu1VqSM2A5YR9hxL5pRLbw1An1aP93ZWkDtCvNzNoVxw3dx9AeJAtADCmJ",
  "key17": "4k52U6uevPG82dchv6bMhvqPYyJTjiJA7Bf3VUTC55wfYoeVx24SJS6evjQeNM45PprCPXQ3KCkdiLQabEcsK5B",
  "key18": "5htFhoXrGRzhEg2bDdB3Y92ktPLAyBgeAz4sddn3xDe8GU7GjtEF4D88mRPvs4oo8fDWHGN8CTmW3XWFrRoyLPhD",
  "key19": "TNWaU2EGKgay5XM8iqk8fvuC8zpvQj5ys3AzXLE9snatFv6bXaNBGKFLcpi4dbGxTiapKWT353RkG3J2RmE7PT9",
  "key20": "2espNEQ16tWcC22xx6QH5D13fxRsbo3S8vfckSaH6LZeFy2BLZ7FRji8GUY9Sv1PayGMxyiiZg1LUfbcUJoJubam",
  "key21": "5UWL9WuqJj4d1ZTLFG8oEVyFMa9p3afjZZNphkzp4moUeuBSNy54x8M6FeQToj1zzpammdBizoe7U28YFoSNibWE",
  "key22": "43sXhbx77biMCrGoQguC7WnNUcoABpdxHbdRjxBQ2yzwSgDP7qS5oJatLB1VngW8BfReAfxKE5N9jjcsSJ6UF4QN",
  "key23": "5Gg3iUn9a7pG9pV761oCri27dycePrnjqsNPUQ9Cif233erdAhUFbqEsairQVqchczEcFKXT96mnWyhPhiMkWtYA",
  "key24": "P19tfqcohs63vKpLDEzqyVGsRRZHhZ2pNQ2XSybTvECWdBPWcJYvv4ENa7Y2yEEu75ZQE3i6syFY6eohcR3rUgn",
  "key25": "35QjpEHWR244MjzddwLpGw69uo22yAQJ9g4ewJUNw2e3ACiMiefEJpXa7ypqW8kbFXhgDx1koYXRitHNyuANUWWT",
  "key26": "2e1GrP3eWgz8oiXighwRC5QJ8SEX36xVysH44jjBXmeLJjFYouUPB6p9U4JYJXicTM8x8obgXfDe5ZTQaaaAHTis",
  "key27": "XAYWWyRGYdHsF9pzghYCsPEgi7gMNWDnvRf7MTaUtX8MrDbkvBoKb8aWPQ2hhyDpyFCwY7qsf4yk8hPpDdwKMLJ",
  "key28": "f7jL6F3ivp8YfAsuKKdfDsep2nbSyho5fRdqsVZ7EK2iU6ERuHHiPp2X5hCzVxHw1rRjJPc2wtEjNasZFJLfSAe",
  "key29": "2knHwtuvgV26FoEH3nqHSgyDXY9smtMXuDk8QKtJXwutozjWQCGxMnX3MjLaSr2SqsuZh9v69dZtbmq65E3ZiZ2c",
  "key30": "7gkDB94oaML9YpZJWuHwzGdpAWF2x9xVDv5aXjwjTudSsQ8nYQs8CAKHGyBimShuXQFRgiLvvM4ACKSQo2RYFZJ",
  "key31": "dACiK5WpUSonxZJcjZZmgkd3zaFtgxXo93nyXvmboC3UsqCuHK7nfWxAwPCYG81ErPLt8epfSQmDYowz47yKmGr",
  "key32": "BzPoHty4zs68m24adjLj6yJVcidsGF3HmD5iaj31LUK2K7tVR6hwPAnLhwQvzMZ8FQ33neG73AFF1NJ9qBNbLae",
  "key33": "5XnGhnpGjKU3H6LKgpiQydN41TxjSWr6GBdT5pU1fmVGeXhQ6hQyu1szWN2xbuCfiAfaJL8dZT6aFEmv1U7VdSir",
  "key34": "3D7GCisDySTBNjMx5GbXPRFxX6Z47bxqVRnBawoBuSMVcBSrmdjV1HnQcWXnezFNcJBrCRJ33gVw7TNoUGGmMARY",
  "key35": "31NV3mfgrBqgaZAjg8MyoHRbtfjmASkhcUVTPFxU5bquNPdpQYk9ac4ifWw1XNHhSHdeAoR7pgz2j1ShWMkMpQJc",
  "key36": "4FWFmYo8BK1tyjnLHi6pVtPgrBPeab67y1BZ5WPQVjvk9va4b36WEMgohUYMQTFeHTx8WfD9qFU8pGVAZsMneuvR",
  "key37": "4H3pKhkKNKQzLbZifBnuyh7KvrrgoD2ThoLdPwqzBN4beLWh7wsr73vNRdFp9xR5CLR42CWQXk6Z1rviRBAmrao4",
  "key38": "3xnu1uy4Gpz7mdvFVapbWmMRpd3JyFAtL3mgehZR6pRs6GBHKkUrQWvQirzt1VyVPNAarjCyagw1BowY9hQ2C5dJ",
  "key39": "2pTmuu7Wg1oNyVBKLT4Q31hWBZWt76XSPfPFE8DWHtcVt2D6cFu5jCSWEnPxFJgqiiq6B9vNLig3SW17Nw5oPkCB",
  "key40": "4Dx8JtKTs2WGbted5i4u2dEXFkXELFgx6CSdo5uVoGdaoe8Tyo4kWHcCeussgv4Gns1K95pq8KTUutPoGYa2gbkM",
  "key41": "cjVCjoLcbj7FahpYP4seJtTrCgmdf1rGpRNdfr42o2wDqvARNSSSNCFqbfTVfqGJAcLEqW7DFHwsPWY7hQqZvXG",
  "key42": "5i2CnK6KSjdzmhHWd6br6AwxHGjxZbZvKJsPmJfYR1efNQYBRYWjijLpHebui3S7Fo17LocYZnSce1b8GRmECsmf",
  "key43": "VSYVEjmwfn71bvfhzmXoJymejDi1qJhe5UwPWUYnnotzzQyccGHdJZ3UXnoZu1RDueEPVwjcSVCBvpyyRC3wtgX",
  "key44": "2CgqDAq2qVwuXmvF8GbpscNvL8ybFjor47C7k6zu4abYVjahq5vLUiwjQshMAamHZgH9DaS5HfEcFjZQ2Ykjph5T",
  "key45": "3FyQ3snWAYeRvEurE2TmRFV4TM6skB8uZNgmkPCpTPU724JkWmRxctGFMTHgffPEggSSDwJ79NzAbiNq8Wrn363v",
  "key46": "3ZdutdBxcs3tHtZATH2Rdyjk5MVDFWNVkFjDF9GGApLJ23BQzWXYxD7LenwCo57ueSBbFDKLbDfzVK8vdULc57ZE",
  "key47": "Pt4zPevQnuHRsC5PFiEvs35eqUiTQrMEGYD6KNsZezPujyGFNEbHsboEDWqdf69nXAp7MXoAizqiX1s5Xv9EcCF",
  "key48": "3ah6y1DfUAiXLr7yfvfukwJLZf3526gVA8ejSDmjhCi563vZ563hFQdoQgEaPmL926VCmBqNCV6YByz25WELuhkz",
  "key49": "prse8yHVrn1BYKkXmMAo2TMVZBahRUQ1PYqa3zBRaZHAdi4BnEUmEGpBFuihU8quzjo78Mk2rnUmtqB3GnktSCT"
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
