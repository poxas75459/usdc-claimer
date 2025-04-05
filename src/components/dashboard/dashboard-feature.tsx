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
    "5ok3c1LLa6ngZ83sxqF3JkYCbdbGoEzzQEqJXcWh5MbYvJaD6cbSfgCkv9aicrpKyJTWfpGJfB6QtYssFvTA2uTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7AYeHMDE8rDi2WFbsZLUb87Fggpty87bn9DcQSXYdNbSsJYT3LukvpXbAgYpYmQDzjgoWS5Juvserqzh2YhADo",
  "key1": "5HG1utLqYsrdgewcXZ5s73Rs3YbiZcFMvX5irM39HKuD7sxyFDCYLoJvEcNR2t1Vx9W3jdajD2HjLBUh3jLME3da",
  "key2": "3WP7u8xCHU1WB2zHQqnbtSAxwDCkkorj73HRUA5SgbcVvTmbywJTgAjorUNV2JBNRMuWmZwjVKKxxFeo7f6sbWM2",
  "key3": "46351k3N7m67ucRJStiwrgnfKG7PMXdBmg5qiE7ST87jcrYf7QECSW1AzexHn5PyrgNzAvyPgBwaYaNc8Uc3QLQ5",
  "key4": "REma2BqtrRsERKvMKZhCtSTPoUM9XMZfMoeky82WDHTFGgcbwFe5AcZxjjJLGWiX6w1eteZiz4EdDghP5jGpPsV",
  "key5": "TbYCacm5NmqZEbz7J4iWNvY9YPrH7LNRRumno2np8QEsZtAXvA12YZikakoPGh9JGiaA1NqZiycEQLefTUQxmM8",
  "key6": "41oV1hGybzMHenHjRWUtkwwL1uyD96aFKsF447oqeE78JJcqRB3JcKL1E4oL9nu3NTKSKaJtnUdtx1FKpc4TH4gi",
  "key7": "2ktdwdJMYbaLttssdjsduK6ktcZ5gRHMF1VHH2ZomcqXVzgCxMvLATzmkqbZzk2nnBqUynJXcF57dXt2Z2KqcU7d",
  "key8": "3T9Nir5z215gmNbYdwhFzzLz7Pxd9omujmq4v9kBP4YKqbFTERyAgeAsnQnbGDYghwCkiVMHq3FmqVjQHppk7Hqv",
  "key9": "3koYS9VRfoSFGoatfe1HL5p81BEzzDaR8xHwA2EXWTxPMwKP2c14C17g5K2tKo7pjoDQX17Nmx5cQA5gB21sTwUz",
  "key10": "5RYRmh3Ue8jdA8J9GRqp61ft5deHh36niSFHdqv7cvQMHVbwcUwBEjw2cbgr4wBYedBAYK3wfD7NKmvkDMVjG9iB",
  "key11": "5YmYi72BFgFnL3rG1v6mwJ4V1wHobU4MW1mc8mtfRsHcsnK3GR1jAGU841N5EvgcNc9aJk6egkhVFFFKSJFZyBeE",
  "key12": "5wX234Gpt3Q4UmL1NWQnPp7osnYD2Pq2vKkRn99cHBgCSpzE3rPKB5XS3jxc4amdzM1kHhHP41KLKyTR3rLGSKDN",
  "key13": "4W3LJRdFY9zwXRTG6fteCWoRKNcvJjrmwXt1UL1Wu6wzybteHLmT8xESgZ2jv9fxkUzbxqcqQ5NAKazi9NAzyABi",
  "key14": "3fp9meABFPD89ciL3qRnibAGfybKzs2akuFoLWCtEM6Axh94eW7ViA9QGdVajhEMGgU7jX2bjpJ3173uBqByoKat",
  "key15": "VrCuh4Dv35jc25BSys5MtUvA81VWryCMaAo3u3MKJ7VP7P4vTHDHgc6SZW93CC8go9TXukLr5XZz91TdvWVwwYi",
  "key16": "4rsxnXHcLLHoiTECZPR8rvMWEzPPgGeKoDLdnQb7ikwLAtHbsiHj9FPoo1ATvHJ3DfqP93jMAp8ejqMfP1v57ReL",
  "key17": "4HCGDtsevUoPdNYVtsg9fgEuDZGQuB9zUa6Uu5qeGNY5xCbixs5pbQ9GicZeHybyuidqFRMeJvHCD7eK6MJwmKQ1",
  "key18": "67W1mdXPzWPM9V3geHB9DvRvxsdnqFn1bSVWP2sNnWeT8RGvoiSn4Wn6SBWRkM6zvbx84jwAg9yfzeSKBVMHqftq",
  "key19": "4HbyW5qyc233hcjmxPW72t2ciuJBWRbbee951tUbPADGyHh63AzZfR4ZhsLKS7HJmC2gDZaFE7gYFnSs3Hem7JFx",
  "key20": "35hctEGvtXfSydLWZNfxeipgg1L7V7rS7N4oUcwzhoeCh6xnnmYi8P5g8FfUKxJcaiAiDczPjk9Mf1YsifSsnsxg",
  "key21": "4Gbb7vt5BHtHysCG7ReorzxfKenGacC8dJM5Yp9XwpVKWhaLNcCxv5cncpFn746mhJzrGVXPSwvuLFwSmwKqfLrt",
  "key22": "3ZfhYD9stnXNcxnGZcA3EsVS8G6CzKZahxhS8RGVPWDWNBqY2hkfkk4B1EDX5QVLgBmAdgZ1G6AQE4gqxRtpvvHN",
  "key23": "5fLFgLJHHu4LC9uczT8NTBQBoMfMiF56DEdWWePaYdtRux4VhrfLZoHNyin7EXWrdA7nuz7HVcJhq2DeYRXYYDpm",
  "key24": "4RyaJSpKENwCtQLxPr6ngKWTmvnX8SstMPYCkFVr34BgKCUDoGYse1TFvfD6BoEAHDP7TMeunhSnrrABxy7uHbbS",
  "key25": "4cxuB6iNnwfCfSffPMbro9oAitLR9uiumQcFPinKbWpBVNwiJQYnFzwxkZ4zNUoVUcA4FNGsqQMPM4bNQ7wsz6SA",
  "key26": "3Z1c7HE6q5Z5ArY1ZRhQT6MaJxPVuXRYWX1Mdp9LUWgJx1Mud4YYRUUtg2obWtqHuifvjiEgc2kjxkbk8qf9f3Nz",
  "key27": "2riUvLVV4pabqALUBUcYw4QTvmwt2r58SFix38n9btNpUDZsYoUXN48woqFV9GMcqv1Zmb2yMVUxTZCgBkZGAMJ6",
  "key28": "3jyoQqSNAmqAUEiVPBuvW1wXQCcvAtKWLAC45BevYDwHs5nevKHLhaHCpkUtQoea2nnmWCFfPwpJSwarXYaYCcSD",
  "key29": "2AcDzZhKQmoV4TgFt8ayQxFYMR7TX4xz86VDaFDzqovGNMuhjbc2QSTQ7SdvrEWbEAU3Vm3r5bEZwFtvKUoxXZsf",
  "key30": "5ivHWQ4dtrdcYxbNb2TsrD1gQpj9tkqafyAKoEMMiAHtasGpaiEkA7VQm3gHDdDSuNgkFBvaEQYtVh1zQAZEeCwm",
  "key31": "2RppKeSJAGiHUb8gwiArxXJ4RPveRbxawhS5YDDmLLKydU8KBkJ2rtoV3S7EKroreVkGpPzXm9JXXNDVTj8HFWdt",
  "key32": "2NkL8o1ZkKQVsc1jwmBDRBaMjj7HNWscr8DTVvTAH3QhXNNPck5R8LxhEYNhmmrhCb2rBTVEjnsHsipDc1iYc9oF",
  "key33": "4Ttuty4Bqhsdn4npNHvUjiBgSgnMkYzu8cnzD127GCpXfTR7yqgwQnx9Tcridyd3Gy7UGv51erTLdC6nkk7ED25y",
  "key34": "FSub7ZiTVdzQFf2npyXL7NmQCDJrSKXpT8GgP5DiU1S6PJXjjTqqeV7QJHn9L3EsHnBTtDNQkbnPmwxiUi6Z8kU",
  "key35": "2HosRBkwvLpkAvh9pbNbsBWU8a1FyeYVrhNgdtnGCX3dwyMxYkCopwc9UHVrPMTv7fVXdCJ6auCtmsePtkb39gAs",
  "key36": "5F9abYBXbTd5YVGu2uZWyn7SkA7PyGE4nsdbK7nqwHLP8BzL1Bg4vce31CQRhnJzXQHTohPMXBWcnnkirKFUVNPm",
  "key37": "4dfPUiz1qWn9kYNSEYPLdxbhukq6ktTiWMFXbpVWnVPsvSg34QVHrjZoNrnrPB7for88EkAijzCpVJNY9esqyHiV"
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
