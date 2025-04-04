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
    "2vvbFrthZhTm3ZsN6vJsiEymKtyvEnX9kMNLb3LYzboTgWmbPZcaUPtivweyyMBz2NtN6a64D4fYbVPDmXXy3fWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Kw51Hv9s6roM6dU7uy3Q1cG2E6iYJWWGennU6VwrRnftX5kziatEpczC1Q8LyaKVewxBLZSu17tYGAoW43grKg",
  "key1": "4wA68jGAYUFpp5i8qGjs3Dbvj5rZ7TavT6cdcxXHP9KiiAqtG1J3o4U6WLq4CiUu4on3w8Wf6pWCa9vrfFn6u4jV",
  "key2": "94VCwoWz15LjbehxfkPfN2Je1UfAJ5b6V1m7JXvTgvrvku9uaeBuyrq9MEr9BxhK3i4yMSGr8XsWBHhZ53SzHte",
  "key3": "3yBZ2eE9qjEe7abJoZPvHUi8y7FmYySc5hbjKSYsy1SF8aWSuB1hC8fpqa6Us7ervonY3Nat9tUa7pT6nPmQk2P5",
  "key4": "3ADTwMPnTzd9JQSbL7tvTq8h2SQCuCnHw8j8Xv3fy2pWiU9rN2aj7sZ4CWLXxv2FKvE5ZC1mefkxcA2ybjxnFRFh",
  "key5": "4Q12KXb6u26cTdGogUebiLTTmQrgguEdUMEdrKCiv4iFgSNsnMNjf4Wn86mxx4y5ot466NQirZt9iT9U3Lym9BY7",
  "key6": "2UZWUcnFGEfA3EdiKk6g82tgsS61KBCnAC883J2Ah5LapPhiouVc49aPrpoAMSsrVTPVrLHVgVTNNnTUNfP8sDWX",
  "key7": "4YiCnyTz2p9Srx1hGzm7StntL6VJJMty8wSCVb4DZLQhmzBtPqxKPucveo8eQQRwYZq1aZooNkzqh97aps4JqsKv",
  "key8": "5TPshueoVfW9Zr1e6GtziCRHFMjro3PLWhk6H17vwFFPF18rbZqX3RaNW2psUPu7b8AUqaZrdBD5F6VG9w1XAGiW",
  "key9": "dF25N7WpNcfDo5z3LNCwmqecBCpTAgktvGaqTPWzarHsSsVJ2z6f61L3f6pN7z5WgBi7yD58xdHkfZmDXVWagCi",
  "key10": "88dugYjmBsSNSyCq3jVjQ5gzbdWgjyXxmGqLxjFWRTe7M46raEmfWWJaRtNXPE1i8ba8aCP854CXKrHjJCoQ6Fk",
  "key11": "4Btq9pfJXKdanZdjLdtuiJDXr3bdFtgBscSCMKJNagNjNmPfAc1Uo2UsThspMfLq8bjZw2hf7zaBnT7ZhNHvZFKr",
  "key12": "2xf2q5MC6L1RHyjqxfmSy52CPQhXhHWv59NQWiGaLgBHYbKFyKwPjKRpfydJz1CDNdywVVMibx7mvWamM16abXsz",
  "key13": "6aCtKQBVbRLawuv6PPtsnzHKq58VNjmwT9rTuH59WopoBeZXTVpD6BHuxzJPygsZEk3yQWrThTwEhXugiSzSxD3",
  "key14": "23AoLnmDdMBB2uL2RamsX1pE712zhium7MjRUpEQV6RJzepph2NWLhUzRBKaj4XRNWZKuAkHAs1N6hFQdaDupyZr",
  "key15": "5RaudHnhAH1FgxGgFq8NYreYZvLBbMyRKwMMJZGxU5WLNrD22zTHriwE1VEezhV7XQSLtydk9qm4MYxcqr1LpdG9",
  "key16": "dPWvc2YsqLY2wp5xc9vH72eEMFAu1UfNhBFmLMupsRFLVNtkqX55RZpCjs2BGwR5LPeWmxJrbggoGLT9FqzzJpx",
  "key17": "5KbUq7ZZJqVw1Ad8BePc1RYPg8MFQ775vxNhEJW8DE1NwSvgQ9vU1dVFZszsaCD94vw5RSZx1Qqxz53wSiWX7c4e",
  "key18": "cP5YMK158bbraGbjCsy1BKh8jbetULhZN74v9CqXB57Gn4iFL2q6Cpjx3tNAH5LBCjCBDNJ4ysMqfP74FtGnkT9",
  "key19": "YSTf5kmaNkzuQ11i5NyQL2qHTfN9CoNCzhwQh1gkhMWkyX6Z4T4GzmwKRXn7N7qXwas6ekjfSpwERPcZ5Eetfk4",
  "key20": "2AfHoBcP6XQ5pCr5mph7SVv8yzhpC12gEh6tbdtb2oeks9hRmJuz5gehShbTGZqgBeNw3bxRdknhfjNZGcxNxUsa",
  "key21": "28HxmJR1BAxFw1j1mCsEf9iAJArURuMRXVGH6UQHCoY4K5MNf6k7QWwsNJwDSfNiQodqGQ3yUWW8Bdmom2xbguN5",
  "key22": "2Xqu3zhRdgteb1Dgbw8JwecxbLTqtnW9y5UZbjAaL6FLgELnNykTMkj9tTFK1nRNjPQPXJpgX2QtfYP66g1aybrN",
  "key23": "9rEGE2iHjHAAhjaHZjWijSyDTFMn2ryDXs4uFDERxzBNEkHcVGTgGfWXpsd3mLuY3Z4wMDWhYgE5UtSNWp62jY9",
  "key24": "5JncwtbmCRm7HssTSDvfbHTZHsES6tRzveLxiT3cfxBqPnVE5pBsdQwXNUAN1VH1FyuyuZHRE1pDGUCFzXzVTBFw",
  "key25": "2QtSHuWEuFNfSzkkvTSbJS1gvNSXSvJVpT7vppWfcdT3FecckMum7XLEGxQPSJGwBNJVi4ELENRviZ4jppYQLVtv",
  "key26": "3J7LS7mYxzgFmnucF7A3cQz8ndsprsNaKkTP3G4x5kW7dxHhH5kWNvMjRZUzVTW4GrsBkWvkq8AmGCw9HXVzhiYS",
  "key27": "4T3KpTuVXNfgDrBS9Hm6kLPS3SosBcu92EBaZwocvPJTPELUcVxEhiDwinJFdD9uungPYvHCWg2dE6BK5rH9j24E",
  "key28": "M37KRBvbNApcAkpVN4Agm6j7cHHhwFo6pxkdxYcuT17xYXsjaMm94PF73eeAGPR6zNqigXG9kaTPtGqk9n1Ftmw",
  "key29": "2ZnxDzLYoRHWpoHB1JmCvenUJmpyHgTi8ZLdo9spcuoyPsYT879QHy6KoN65Bu7EaHhyN6cMtsL3K9hb81AXbuVZ",
  "key30": "66zuNambspLrw54YkktxoZXVDqKQ6wFKTEyPbTdhPW1KGZXttMfE5NNuCjAgmU52SgPhWMgsKSo3abHqGkxjCLCW",
  "key31": "3VVy9GoFQU3uByjX6DKcUT1puC23na7HSvsAedAK9nNDzoGvQi4orCKAwigyAVGrESdzz5bho53bSzczuHEsyUGK",
  "key32": "3L5QDFFtSndaqwN9zCtbZepsHR66VSxv8hdLZuRGGnKpVuiCA52XDFUvbcdas7Z9oaa687uTkXRbGgQYkmhyp2Vm",
  "key33": "4vTLCu7BaccUyzSZSq2yazFhUd4euEY94grF4kUJKE3LEYrPLEmnnXGS2VuxdgC17kGj1Ls3ajng1bmwX27vHzVM",
  "key34": "3WH9dDHtyPRE9SEosf56S83VGQGMmwuEWVp8gZBPYTaEBstv1oCLhtnHD2hjxXihbhhAgCDP7f9qsSr1DRPuXZzq",
  "key35": "3sx5ekk987WRxcmXLpRAyBNMcDHFyArWYHZvxEpwwHAD9zKg1xfYuYJjBjEtNYFsL4ZyLnDZkEumFFtEbdKDVTe1",
  "key36": "4kDTJhnRPdRpsmR2ssNUbtveCdEJMHhetRV7rfsFBBiqgass7h4zMMtGNNS59JSAAcfCu2599WyrXTiEgieRXYok",
  "key37": "qrXdvic2MVtZem2fAUaf9UqcG6AW1KYJ8MMwkkVdkQSpSgYLUd3P4R1h8CqeCfK7H7kjHWA8wewFLb8UUHAFCiE",
  "key38": "4nahp5TztjWWdfpCMs3ppHskBupq4nsXMWZ9BsLpVEje1bKoCE3qKbvSe2egQ9t7iFfuR8z1LnLdHUxVYi9mnjUK",
  "key39": "4SEmXAocufFQEsi3vjxU7zZP5i5b4yRei99gqZgS5nhLZ2Z44ju9cpvmsQCq2g23yh1tEXcSxNR1ErdjU9KnN8dS",
  "key40": "24igjHbwfHqGpLa9By4McFW2NBbvmQ9gN8eDRybXkXrUzhDELtMsduxN3seHuDGHZunu98DVTrvZUgJZsg82j4wg",
  "key41": "3vYHUMXe2YGvMcf7cmD6QcoowdfdHnL9w61Cwp6A771uTEPSB7tH5pEQnGxctpoLegh4fo78MtYfveY6XbkbRAAS",
  "key42": "2NoRqV7BXRpiWuCPcfXkbyXipgpSCE9Noix6Atft76PN86fkmgxhzBH4jjfqhTwakb4xobi6VPwSHXvCJv2x97ts",
  "key43": "58CZSueQ9c58unzLXLwwp1p4qZ1ynGjEgfBNwQ3XBsf5dpkRcjVwAkWqqqmo3Su1jTq559Y6Q77C7rVbtE4CBf6V",
  "key44": "626VbHqQ3wPxCZ6NCmKK54dxyk1nyEDbEnN8rDKYm3gkLZVHV3kSmwqoC3dCs9t1LqwfgySSfAhrk3f1rwYzL68r",
  "key45": "QpfwxGbRsPKVeowtFkLwRJVu9b5X8gWX1PFu1og2kADP48aeGjhBEqzZpC7xEXqQocwZPtRfL1AffatwoNSq3Up",
  "key46": "3N2YdQnjirw6mNidKKgqpjTb8qxudz8WuN6ZtESFP8iMmnaPebrCQbLY4vu2tf7RshNv1Qwjh53pcjCaTwKz4DX1",
  "key47": "4zs9b6M5FFQBDvuNjnFSTXLNymjVoXS6rZ3SJgxRxFBiEwnhL6XeqKzyWjhNu9bcwCXkRA2thXWkFpo66uAGy4cb",
  "key48": "4YRP88APpfC3VJv2v1VcfTuQpx7WVnGiz7XV7kwPgZZU7SoB1zp5ouuXYuRaRUNczqbL3Bf4AhurfZ9YTyuzAPTU",
  "key49": "5zaZevGRURvXtGCvkA1kyPxpDFurpktxFpGPumF8LPxGdhgKo2bJ5ZLqJxPToMYtJ5dDwqPG2SWb96yuSGm21GXH"
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
