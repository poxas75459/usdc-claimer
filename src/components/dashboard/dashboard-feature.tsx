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
    "5B4KgpEmUYZaDNyNbXPftPGHVARn2pRtap4My7FhJEY9KgrEPHqgX9Qiki6QhxUg1CJyJAfHoYzooJWJp6vkmHB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ro6tPpAcaodHFsfDisqY5FyY61eWLkuRkFDcgxsExjbNEPn12BArjyR29darx7GDV7QtPN9qAdVFBkmNAdMw8dp",
  "key1": "5NAP99Ard2ax68wtvi1JFFNQbxFh2ZLogxh9dtwdpWPA5G742VtZBZHeXoRocso1yeNukokCxd1AQS9uEdFJSd5K",
  "key2": "ZUi2w6JiKoWo6yTf8hXwQCRDJARE4va7yyGxSEDLPHPsr46GPABxarPxgh4brAgJmJBNudvzm8LX8zsXD93jthm",
  "key3": "gqHkHtKxsMa8bDAucu5L3SXaqHzAkv397Nc7dYXixBYaEgwyB4F622NWekQxZr4u9v7S45b4bPY8padCTHQAxnM",
  "key4": "4WYuGRL1KmPDULQeAj8BodQR32qBa3bXoUuLTFqC88N9TuR3D2pukF4EjBdaaJQRRoNFunAZgmYgVDDqSbW7HtMu",
  "key5": "2Sz5uaRRpPZmtVPfPf2P6WxHDKCkuDsZFRSTv1LcSya5wx4uUwGTtZ8U1yr4eRKmCgwce5Txopx8v2YLKvJku5iX",
  "key6": "4dv9unwvwHKfCSKERwo8QbgnTmNvp6S6Goun1kNMRngQECBaDNqo4q78uBhTVoPEELAvE5qKE1rrcjLi5ZswvLga",
  "key7": "3b8B8HbUvLMJJJYkazGWkwjvNFueQo5H23ZVCoLo3UGKdPMtYdFBzZN8KcFMDNFVgRQSHFSUM43Yn8DGUDXNkSVt",
  "key8": "5X5S5ioK6YKo2DczozQZaUyZgXv2nd8LJfaFg5jQ1uNGWH5LBSpVfTU6Hc8kzxfw2GiEUHWCrQjdaqniiTfDbxdx",
  "key9": "3JZeNRNEEEKYTRVYwoFbQFN7q5ArAqsgsPZBNDXSJeyTfsXSPkvD2jsgpQL3bRW5e9eoBa4bMDVRaFUSnGaH8b1E",
  "key10": "5yApPgbqnBD26EbNwQb84QXQ1X3u7L4DmN87iZdFFpn51vGK86a7XMLYjdweHVJ3agCvtPdfPE1rRCuHemRP7MXs",
  "key11": "3LgGWsgMfRUK5iDgrhmLpb53mXoYk2rvTFa8wpUs7LSM2swpQTyy9M4oQuFZT2uVWsQKuVtZ5CqiJ7hdMY9eNUyT",
  "key12": "4HAz73NjMcXxo7JYEGBH9Vtjo3H1n1wPTb5safiW6VwE4pZ6ZQAXVAkGi18MCkdzMR4u22bNSwZGCPCoQUtbbPVo",
  "key13": "KWLo6UZ51GmvMmSQHVrUgEddfPp26GaA3UF3nxp61Dx7mjj5oEgw2mDBqi6z8N1ibowvm8mdt4x2AotonDTXR4m",
  "key14": "5TLWRSPptyYoas8bT7dFDS6ayL3yJe4Cun5QeFtLUaXR6cqtNtupbr28tpq6RvC8vyGm1pMK8hhcrooMK4a8EKia",
  "key15": "5aPLP641nK5bx6HZmkE54VZAroup52u5Y83GfShPDRrGtjvLbtsKdo621gKeACEUsUU2WdoePkdEknxa8EsfyKcr",
  "key16": "2Xcmf4M3eE26oV7K3ih3jz3md3tAhUKHwbbVont9skcLFMpamkBoTsddBhn2Pgbc5jgBake3S843igc472LFBigg",
  "key17": "2uYPDtLDFJ39ds18yX753DMNRsuBHKjy512yBgR8HgZUn1HXGiBH5fUL8Hsk6KD3z2UoyNZK7RdpxiFv6P3nMsAB",
  "key18": "2TS1zdETTnuXkep5ZREyU1or6zjJNTVNYi5AXiAocoxmFudA24p8ecHDP4VqWCr2sKo5jqawRuQFECtTFYyFLmb8",
  "key19": "3TNX9sdZDbmY8qHuh4RexrnhYdhK1KUGcNTRwr1jG7zcPJJxuQUCdZxmQcTTzXQGQBgFAt3DAwhKr8Hcr3XEcvQh",
  "key20": "3ZZm2XwH1yYGHUQDsnGv5pXtWmDvNuRMMYyZXtkiZC5EvTAtH4Rwk3CMLiCte9QV3pCs8whLmcnvoDDZtqBsd2Kw",
  "key21": "66gGnBA6uxWXZ3V7nmWtRfHXAH3zStPwF61gJtr9NrnPimBbotjFPoLn249mBJFxognhEJhLBj8DtbyL5vTedY4W",
  "key22": "8LVDKsiGsdQijdEQXWu6xdvYTEo57PFisVqed7x2N9DA7FAwAZAHf43S2h44JfWT5AnfGtaDtsoStc5jwc3n437",
  "key23": "5uLGpzEgYaJXZYQWaiDL4M8522bJ5csv39uixrAEtxT9efPD9REcJwMR4uDvEX89PefAwXwNa7Duh1ryWx6qVeVv",
  "key24": "36ABeqmSDE8gux6Jqa6n5Nv8HNLG7mCwajT13xvkRexy8dUcSWVAXpciKeLSUuJCY2viMn5LoCp7DF625931e2B2",
  "key25": "3LiLxBmjSYdctMAAN7mKedpusPLzfc9snfHyFXYKQKiGYEKYD6JFuKgwP9VfYn9vJdXL8NDUwVLo14QU8es3QLZj",
  "key26": "vD6vvwpbz2PBA1SekQi7R55KG9MRdP39N4AH6FbTRZ6NLuM62R8NSAtGZMFfBckXa4wnBupW8nfgcNzeME1MCTu",
  "key27": "WpwsKebPWZQWJUXmrhxnzeeSSVJoHJuLnmpFVPp5v1NTuPLrus3B8W7DaatRtTtFY5Qtrk13BFCTZDvcEXMgEiK",
  "key28": "32CvR3siK8xLqxudrYW1JvQqsaBLmAPMwdCcx4UQeFdZa7BxZQCjESb1Sd1djh6NZhfrLPrRbeGUMG3F5ubcJNMw",
  "key29": "3rVy6eR6fbhjTKycSMn3RhMQo2hX8Wy8VPNvmr1DnQkYPSokC4sgm1CHusamCc4t62SBUDLwU5QeCKVzqghtBKYk",
  "key30": "2goLpsqhCs14tRVroo2ZjRkPy5g3f9ygRq4J1xSGd39mrNSydCt6HNcd6S4SNBpBPvieQZ13Js71hjsZFqLh3Kwo",
  "key31": "4F3dpKSeueqfJe7JRU8Y7rHNr4XDpStiHCkjPkAM76a7WnTQHH4eNSqWHGFCbUiUawHNRdkSwqJ3bzA83bWJhb5U",
  "key32": "4wMdPeMa78mki5uLmRSNvN5KpZWuznGC6udkSdTvgXTxLqnVR5jzXsZ9FdGxEEvTshjKS8LrxpDedEh5rTGRwmGk",
  "key33": "337Z1vecRHEfgAt2yXADXK51p3YtAU5od7cBCH5ABBGQhEGAmK2JDkz8FRtvDuoLLT3DDWkSGaqrkP4KWZChLFdx",
  "key34": "2wiTGHbS39H4Ss1qukiaBG8nBJ6bemb34ZxWGBu6pjqekZKsVa9Bbpihw58ZNVYX3KBsFtBFnL48z9iALx1E6uFe",
  "key35": "nsahLfYenkoDLwjSp7Vg21gpmGRZ3EoW2iaK1VtdDuJKtmrnmy9o2wTGcr1hBmLCp71pAjES4aYWFZAgJBxtVRS",
  "key36": "2iSNVG6xxgwTQAuiSadKZb37WQPZugSES6kEUpWmrnFheH4gXD7UYFu4ajCouteXNeBNsmFHjbv9ejSUkXSWqojA",
  "key37": "3uf3ZrShkoLGAofiwj55jirGyGBSatDNfgvgHescGuwcD8CSWke2S1x4PrthG7zcjcKUoJSEbWmtHUXm9DMd4Zmy",
  "key38": "3E1DrzFh41Pec6XA1WRUUXaKtTGCfpvqKgN9zhvQfUa1T2iWAT6WHxR5LCs49w8UHhoG2Ci1cvYtRZTbUhzyGGr2",
  "key39": "4UZLFbLAYAm8KHMvwYYHhricqz9tHrE644bSTDXu4sC87VBDnTQs58J2QBBxXxvcpwaECVf42MotHUS9SuxABpTd",
  "key40": "5DLaLYNVMT7PcGVmuAmmT4LffSwVmhtMYjCxVWSxnQHAy3UZ5bJNJzpv2DvA1sNhbxQmPNgbfGbAJQdA1vScefyV",
  "key41": "4JLWtJCkmdLDt5xNahRZHh2SJiBZ6qdUdSnp3NCPbFXHw7F3AytNbBvwX8asMXMUhRVSkZXZXUBdDScLRbC8idrS",
  "key42": "2voyxRb7vny3efVVVajWJgt89ftuSXYRiNAdZWpAYXPw55n99JjQ3mFEuUm79LET97UdhR5RheXt5ApsxejSEyRz",
  "key43": "2aYViW5wGop1cXWzp4RSV2uDjGfTNFAKTKfSD2vJQtadqUUPZspiqmnNBGvyU7q537q5Rvxk8pZ1Tp6AVGxcu4Fs",
  "key44": "4R1tUTGwAw94sngJfeMTpRYE9d8fthfT8d51AxU3RR7TSqSEeeV446oMqBBcKLxfaJTN7VNUKuzDRzLZtK8b38un",
  "key45": "4MM6JZb7XCcmzPUbXEsJ3vboiFZPpSHN6UZQXoexQQuAwMNJNBvi7QQ71Xir65prkwvZ88zh8C2Tyot7JZG3CC9G",
  "key46": "are1FuDyAqipD9bzgvVJCAKjWfo6NMsfK6119Qog8Zty8GQJ8Fh12GR1yQRLjzquSMN1yDzndepn9DNj4hiE2cN"
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
