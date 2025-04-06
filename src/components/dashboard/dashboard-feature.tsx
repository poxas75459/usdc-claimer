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
    "61289GbqUFadxvb3qxBpS1FiADh2nK5GkpaAiwE6eJJjw6fvKSgFBpdE1wzhTJtSf3CgeTxWmj6jjJXvdxbGaALB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzzJ9JjZnm7tDzAesUka25eV4MnKYFfQ85VK6iq5ovf7tXSNnHYmEZLy8aBfdpx3xLoTrnBmdPPwSzc3JKTSxF7",
  "key1": "2q2ku6KTB7tJW418X93HJvSbN5A4XeSgA9dp7BGfzBapenZXn3Nz6nvz571EzQv7aJ8f3wiLEhV7EhgWBcDBmGKT",
  "key2": "2jMiR59ftz7jYxFyPNhBoBSYtafF3VdATDZBxtJe9o4S68DMfV6A7f15JNv4Nyybu1paH2YdagpKr7QYATN78TJM",
  "key3": "2K7rhGWMhZ56rGfq7YXcudWXxKyHaXhzfycQFMkroecRswmVvMgWv5cic7YxjnS3QayASekMC9MDVCcDNx3BVGCh",
  "key4": "2AWnDSYiLuMuzpA2SGwx4J8865GisFtiL17bE8v1GA2B2iPAyjivwFWG4mgRqw3VNQeugBySAjSLnHyhLyCizWTK",
  "key5": "TV4ZeDGPWJjVWDe7Rv6evmKdmuPxWAGNd91YNYAAGUD6UjH7riBgoaToNxAbDU3uRXZAwy9doLr4w1oLANugBfr",
  "key6": "61b1FnrP2wbsFsG57BogcXhJ8rBnLPAvQvQmtzjnEXER8BFbTxNAMGY9b13VmhMp326CgU14ZjSifgP89CXbCFdw",
  "key7": "PLeYFhfYn5mFmWmdMTPfWr2o9NYmpc9uUQakEiK6tWUZibAzYfScdbHLpWq67QpTWpsju3Ho9uhURs9asNroVez",
  "key8": "5P6YSAsSXQxSmKrCDQghoUACdZUU7NTda8nxrbYeofotHPvQxeeFqPanyC5zVm8UbHVVra7dVeZer6fvACfMUVQH",
  "key9": "2K5MgFdijMDbRNufrLNt3rouC9rRd1qPEjkeMEo6KdmEtpQxmQzV5AnFYfL6tTmE7LiZ8roRHc8AeyJyKxhVzDL3",
  "key10": "2Ah5fRDCrXcg6XmooHx8uRB47thJPMD2RFG8Sga4ncVV7vBMPW4PFW36Fp8KFTKePQkXTc3nfQPxk44hoHLZwuTc",
  "key11": "3jsZkVP69GdRZu3eDEH7P79xMCMVmGNjbqhuPYCzwSFXkyfinC6XkDLs6MfDqaPtpvyDwoszwdEH91msQ98yom2",
  "key12": "2nUjMuwAtXfjVsJJwfNGMYYPjyaroAnucx6iykV1XTNq4h4yNsSorWmom62Mj3QFfRTdvjJMWcz4mtxB4imRFseL",
  "key13": "2ixRPVsGyVSLYjEAhef2t7KvqRk9Ck5yZCXLpJEErhcLnAEpAjMkWwmfKBNqKdmPiq4cVzh25eKDWBm3bNQTwuFX",
  "key14": "2H21189MDxCGgUhLwhg9uLReWZom2hWbK1HWKGWGhevw4rcKkHnbNgYJjak6QGww2yrEoaRstoESngg4HVzKugLL",
  "key15": "4wVFEmTjWfP76GuCHEkM57NkRSusogHwQDXf78FcMFYkqnd1o3QoMMj1ZnhcsCMkkJzas7SpwZkGBhec5KUQcWqk",
  "key16": "4szGaaQS4zkKFBJ6UmPz3KRwhVwtdSwYNzBpwCUCDEBNbSMyySwC6hRKp1NBWuK3ppXyJRjUNdLLFHd2PspRJyMG",
  "key17": "5bZRZo6Ww1guYtCjwA78rFki3yfqGz9vM9ZaQzsJ576S95GUf5DGfaVWvTFYmRf1MBhSscXqeUZHmraCMU41w3SG",
  "key18": "2TKzVPZQthKhuadn3oXQmvP6cY6Xpk1TCrZJSQq2kdDsUFMMuTUNYZPYxKEcfsNAhs7Hvjj7kLi2kyUX22TYAvQ6",
  "key19": "2FpRjXo16o12seV9qHKroNxmwkFBDpRmWv61Uf8xzLoTH9wMea1iKVSvk5anvxQ6EDJtyMFidWYNrhwppwAoqqfq",
  "key20": "653KLhvkEiqBw6nUQmD7HfkCJ368FYvDEKLWXYeUfARe8f21ZBKhR1a7YVXtrzH2caD1hpQSozkQoVQgaBPtERqJ",
  "key21": "62aFDb5E96bGEErU7oYBgkCgL5uAQHXxnRyDG17G8WW7ziS71PWGpr9fctujXrzN6nZwBn5hnHqxwuyWf14s2NMN",
  "key22": "mqkNpKKHcQkCQcd3XWWyevws9zJJe4BcbxAd3X8Hx14uDpegAhKyUT6aKSeuF4imiVxG4Vtz1uEpchpXmFJQQjD",
  "key23": "3YFk7PCXEUg6qkhP8ypjVnmmn1xZRB4yRncsiTP8XdDiunvkFBb7RkesZcrcniwBkKDVDnCije6FpHQBU3iWtixy",
  "key24": "24aK9W3Q5swgRyLvpUX5DHq9B7YkqZ7Tn2RskdEodJqfeCLHUHCcRLU2zTqjhALx1qKQxNHQdsorvAbRtWBKNFgt",
  "key25": "2TXhT3dhdERcFj7HGq4sqykAeL6Vgs9pfNNoYNCKMJj9RZQ5yZv516XTpo6ZKXBqcVKqdBSrHvEg7d4ZqNCZystf",
  "key26": "4nT32XJYi6oPBBFav9xq7qHNfjRkhAZMfcAAWQVQAA5yBkX6rFCW2ZX5UNZgM35D1WTuVk9vLGe3XRcyR2fKWDBa",
  "key27": "4a1kaXd2otgHXHDSBAmiwta5dMESD6aFRgvvJvirPuQGjWv6hx5uWDoFvrc5uGTMdY5QrAi9z8WeeDH1WdGkoA6m",
  "key28": "YpcyFh7b3YP3pooixHCzZGauWGKqWWA6wyFGb7bErMKbUsVPXn9pPYR9MWDpbi8sMtKgotuGusEreLWC9oBGLxn",
  "key29": "4v6FjV2Ta2yibofVPnuAPsXqqazT27Ma5iNZCUAPxcXmUcNtpcbA9bByioshXaCeHMCzsyapjrME4v1eVpvJu4Sh",
  "key30": "2Xi7kZ3m45Mj7dxyERbZwDtf2fGobahN8PqEqGR5NeriS9F6bL6ER2mPxE8THRY1v7A9sQjEUoFAsjvGiPT3zSUn",
  "key31": "2pdvQ9GFDvUbzGyFdp618A484Fo9Bod8uuN22wybfC6LgVdWYgtdEgTBfzTDNbKdrpLYRbKMM53qCReuQxsSU8by",
  "key32": "46zEihVSnSc5LXcFj5aoTUzRVmgy4hwTHDcbRYgG1aeTiWuARmt8xkvgisFmi9xDkLk8gPMXngTjZ9yYPqu43UF9",
  "key33": "4yaF4eGwUVSwwNdNS11bXUwzfCmHmm7zcm9qeqKXeR1e8gZEg9wCLF7WBXHiJaD63tYGBsaWGJMePGZuewWZub2U",
  "key34": "23Y6EEnSLvi5QpWWvRudy3vdXQBr1qmuMisznAaWZRVDBxKgq18Bn3QvE2awpNPabGB8iuUEKDLZAUoFVRBV3QCH",
  "key35": "ZbToWwdbr2Fv3obx9YPk7Vrqm7VKTvKdQceDGrA3QPYDTBpoNTcw7hQnZ5gY15WmZBRKiiAaxW58ubzg9Qqeaoy",
  "key36": "55XEWoc7uLiRdPqbiXPaWEJozc5Xfvs6zaDUNB6aykrANXFoTfAuKR5Q7HtVmDfdMPfmEqKdsQfwSkCPu8pUBbAp",
  "key37": "4UXHWz7yskanWJBq4mtyA2F63ATQTL7RiBjgH1mi9D1GpAPHKjrLtQLfrGHw1kQGcUTmb9cDZaY8wsZAWxgjaGAh",
  "key38": "9ueC95pBBxSvzhiwtn9XH3DgQgnfiaDoM9Gni24CP2kf9a9duNVFyoQJYFncubwdRUZq6vuEsDknyPFemqYkVTh",
  "key39": "3payFSLrNcrZDupB6zadPuBRMb87Uo9crb6zb21btgutLhkH2uJjYRazGS2Z2DWzYEkqswhVCQ1PTQa9aeAkzjww",
  "key40": "C2SRAo7WEU5UZWdTCmWPxq5dCCZjV47qptSoQRhTrqzsRwGAbjUV1w857gHtT2XdUofipxkFY3Hs8pWc2aRwUVD",
  "key41": "3t8r653ShftRFWNTTyggb8r6ebVdL65nm1GoZmAHzWgBCxhvEWU3eXkvoq2kCvaFbtvZ2h475pdq8mYbNCKG5RP9",
  "key42": "32xmBndAnoChJ85kZiCt8nHua86BXRnEWYepuZLKZKP5ZVzrFxXcwBi3QZrkyZ4q92QaSwVWNyu6X6QZRgFLxcny",
  "key43": "5wu2ADYVDuYMFRtatAh9UtVgTL8VUKoh7mthkhgJ4Y8mVZhDpcS5NeNqmZsHZRFbkzujdViBtBbNuxkJgXViXMK7",
  "key44": "HzG7bendKgwAQodLfAqQvtSh83tYmSGzgiExbXavHYMRPgrYCLp768GzHVb9z3KXgGkgwfnmmmg2asFVJEGQpqj",
  "key45": "4Yuiqha7PgHR8pjYkHa8hMN1K3VcvgQFxk3vg1yxF3FqLNZg2ojQTyE6HNLgAHwpF6R8vJoHrytR33HqTnd5tDtB",
  "key46": "ZXxnVnHUFUkvCX87Wx4tGdL6w9drJT3tSAc2PtYfDz5uGanizBVLhbE6AfCoKT7dQKHF8Kci2yjYsw3WWXP2b62",
  "key47": "4GfRBgcvGb3XcHoMsRg8hrgZNibemXtD2Ybb4svRsLQstnMaUgqUhCWjfb2Pk58xnUAehd9DeimM7YMo4qwX72dS",
  "key48": "E7EMUYwDzgqwXD4C6wQbr3AkhrYDqmkdUV6XShhkDwLe9NoWrNSTkEtDzZauQwncytoW2M5cex7j4pwEHjAqN3p",
  "key49": "4QEGofT5nQ7K6veGxxV6Ep4yQn2xAHi2V4LEYwN7WLU2UesX7KwshJUiEQkPoiMjqCeMxPvyTbY5Fiaxzufumzze"
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
