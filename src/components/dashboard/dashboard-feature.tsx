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
    "5gxbwmmNdkzWVsE7qVj4qKAV5t7teQhWNQpFt2YNDR28KpWGid2asgemnHLgjLDJG6yHVwz2w57VHDx9YkAk59ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ecRKfcrGhW294zvTVYgWajCkeywtUt6r3AYVaagrJnh9deg7FzfAtpdJL2fvVKFdvwsAHFo4sFQpe9eHWqYVwTL",
  "key1": "2bsNbrRisWTErNekhpc7sZhKjJmJTt8ZTMb4ZXxHhT9pyrjsvfapaH4XKoMaTgr9tGm3eLRMJQXREojzXePEhhCb",
  "key2": "2cdy7rw3Dr7KSRbzVzbpRRhn9zbxZYxVyVY3b2j6Rzm2bg2dTfiD67M5qJqN3qEC2LcS7yYQnGeqcukFam5L6B2G",
  "key3": "46ZQVR61djL8KL9vMp5QSQgX7FqQWwBgmP5Dj6gXRfRCpTaw2Z1gHAXFzV7s78dHJopECrDzSaLA4w9qYKszASrz",
  "key4": "5BkX7qeo4L2v8Eyikd9QJE5YDcBouuVgnMY54CSkVkcG9sJkKedeBqUaRmNCrY2FTuF1F4r9QKPH6Th3UzaDwR3q",
  "key5": "2xTsA4qy2LN4fbPKYDqFSASqnUw9kwM46FbeQew3w8yQSiovUkwmGg94RpZbTCzNbup6hjF3YTJumjq8csdw1gPN",
  "key6": "4fJeWww8oXA5ThEFCzdheMtDJ2Cj79BUvUG3cyVD1bqsTMeX4WMFJ8F9UQbuSwoFDEMeHTN7s2h26iPRyGxVdFZM",
  "key7": "SSXhhRHVkMTYMeigsFukUZuRUQJ23RNhsi8sT6qmzFLGtYwj9M61crpDqWAsndnLh65rKXwYtda4Zpac8fpQEcq",
  "key8": "4fs6Zmd7YGBBsNWNL3KwYHrhFyP73JEEJ32tjeyEECqR5gH8FP4dfsRPa52z8BAXAGsJ5A7xkCZ6X5gQXGsmcvnX",
  "key9": "3oCTSWzXcMVoJ4kZ4aPKkwwhSAzAjHtchitBpZkqFb6meH9QWU2ibSxa7GuUuBgHVHaarQPkgpmiVHko9xFLjmxw",
  "key10": "3WuZqGNmLTkUfcHoPZftW72rBpHujUfMxEzMDgUZjN4Ai1LAQmoGxjK2kZ7813yiFwubL3S8tYZz9avBzzDTyFux",
  "key11": "5GgZyjMYmw8xU7WkPhqWwBMZrfNEoiTLz6XQtsXsWf6DjmsFCRtn5xXN9RtUYCuzeaRfToqrcsNG5sBCHaHHbDBy",
  "key12": "4Q5Vzvg9ffNkYNcCwMb9sA7AdGgt9pcsLZKRPt617jsd9kGnCm6t3CEc2nKBLAjHMBAZrvsXdm4uJrrH9QDCVx23",
  "key13": "3XkXL79pb5pMRTzt8xTYwZqtRQLa1oPWu2XF9dtbpb6D5nicgYiQFv9KVqoUiVFPDekb2wt2DiUCzRYuueWUeLkU",
  "key14": "1VGsKR5GxSABvAUxaam36PRE36PEBTR8qU2cxQTxAxT5PLWqFPcW5AGk9ptFWEgWbFxnsQrxT5V42sYRVf3yufN",
  "key15": "2vtEKRx6GAS9XWEjWiPnehSNLJATHKzEjxA3qyJy6w6Fjee33vGjDB6BG379AazrJ4rDv1diTMb3748VDsod7JYC",
  "key16": "2UxFJrsC1Xhp3c8JEiwKczNo9eRsoYsxj7tqU7RE7KxQnGFNAcVmMaj8ULEqhNHm7hFmcZYGcXmr1usfbSiQNNNA",
  "key17": "2h3k53br34m2GzEovg7We9D7rHqsvhpSBm27S46eo5jDh4t4km3u2HsKgr2wZwyHy13wa3x3V62V7DF44NtZHaot",
  "key18": "214nQQGkg73EGadtDpqxhBJnAbG1S9jpTCjeZJhxH7y6ocvv8yK9agMdRKyKDNtDgMytQufrZM8N7xhhvHS7tjNM",
  "key19": "5pEwAKXBaCMjRQu3cjpWMq62jeywu3AH2jgYKZFvUKKsWPx2t1AHGQQoGRya9med7hgVi1GosChzoHdFfVRTw97E",
  "key20": "xksCfxk58KZG8ac6CKPocQTURQjSMWQZrUakxUFQCWFv68xPBPNFaMufDzzkon4ApayLf4vk1FZbvW2bw986WHw",
  "key21": "3KQ7RZWKG5iat7Q6dvxXJN9bM9wjhQxQjXYHNnhvesaumajLyEupU9g4jfpuUhYNF5MHFpEGh6KjABT8DoVyUTTG",
  "key22": "Z3xaK7SCPHAtYhzvvursSv7zANbYBEbBzpPw8qACqYVcTjF6VMvV53bDuc6JrL6M6idurPi8U42qF5RS27gnvJQ",
  "key23": "3HMfcn6fAC2S5V9Vnw2xzSgiBek5GmLLrYQVgaDbyHp4eMb8tuQ1pdxRhA7DSfEfopWzjMk5dEjvioEkajGs3QrB",
  "key24": "5uSgzWz1b4QJA8cqUgsAdjS8CtrXZ5Fc8fGLiPNtWnASGp7Wm8UZ6HoUF6UsB853M9kSSHsBt6KiNWasinFgeEW8",
  "key25": "3qofKQbuFU5XtBuUHg2rxRh7KMwYNVNFFM2UeefBSjdRhsydkKriJhL1T8s41tZpJwR3eR49NEpunQTPJX3fyNb5",
  "key26": "2iCYYmFhQwpAfJrJ2TUBZkkqHvsUY4V6smjmaJTdLFJmccm5ffxini5GLgSAVgteK2rZZsfYzTDS3h43yb7cBo9K",
  "key27": "5CF7nHGcNghEuhfx51iqTiJ1TT3xNsxe2aQLP1k1DAdZiXiwNvxmmWCpAtunR8ucdvQeWqsH4WRDVoQcWybNxRub",
  "key28": "4Zo6NaZiApbrAGEqkGWEprswuK8jWSCMyvdBkFK8pDjjp88NamUrCHkex9Pb53MZ3ycuEScchs3Vgi7B9iTGoKa6",
  "key29": "NRZuV98LTBiFfzki2ooEuNu82QWbpAhbbHk6tmDdkhbVYBawLbZJMQDZA5ue4WHM6RAWGyfdawkkshXXWrALKLa",
  "key30": "2JkA43GuVbyXBiUBTwhBezSbXH9iqj8pbkRnP51ztA56PVeQZ8kVESNbUe4atHTdnCDtB49zPvkpigGkVNC1EdLo",
  "key31": "wZcsxB5uSE8sYnTzZ6VXFVuSWhXLeTvC7kfC9pqqBWrQ25gfWwpfQk7XiEmfgsKK2DrrDvRJciLivTWkYBm3Dnk",
  "key32": "3njgS4BM3u5oodSLwRe5pxYgmRCkZukVm2P7LJamkFr3BrUihHf2xRs7CUr6U7S6yQ2VzGZ9ozFgJhMb62wGZSKv",
  "key33": "ZU7mH5SHWuqn4NUar4oEZJnQUG4dxyrMro26Q9YfrG61CCEKQ6uiPzYHQrwy2hhUh2A7U2GZePFtjaM5qJU5eJa",
  "key34": "qBsDu3LzAvEUC4HZFbP3EytN6w28jEKRUcWLCTx9Mxrd7TXxNn6pvfztN3ffzDCtZEpZPNP4m2pA8BFXPKctUPy",
  "key35": "gCdR3zPokh5fJsWromXS5iQ2SWgTBcuKfPVLtZHcYoCoEfNDuVpV3JU9M4UUzyzJu5MR82vtHhKkYiyCXX2ocQ9",
  "key36": "5EDS1rqcwhTnC3x5bGWbHFChvJUMfoeenEYPnDJXT8qQ2a5qDkPxG1aPVsxosRpKTfE1qxjrgun1Y31CoMAohemr",
  "key37": "2NekP3FFGgGgRc7TvZsygWCxiEHQaZke6kQyKNZ8bTRYtozbZi8aNUsBeXYttmiPm8kNYRH5RH6mVy5pJmrMVUR2",
  "key38": "BTaQ2U9LK73hkD9782HrSaQRXv9UL8WxPtYBNo2rGgwVS2CvBQUbXxY4We18pqiXKQSopNbV2M839bi2yzQ73Gs",
  "key39": "4G6UoSgGtu9WjirLFPAGxY8e5njPLJvD6D9rcD7Ba1MpsfdXoUNQMDsy29PQqYEGLKErKhNkHsvWRpb4bJdzS5xM",
  "key40": "4GMGJzCcV7prcKQ7GVMXKFAyokXtsfT76hsdm48kf8nLMym54KkFXoyiMSTg2QZCy3Fk4UAJRM8k1f9TfvkGeAid",
  "key41": "5BXjvAQUoeA8rDsVr28M3mXPPqjEWYSvMoyioMvM3iAa3ZP3dF2VP9ZYemZsNHNNCSYJ1XqZMM1QXpZ6JomnXuzW",
  "key42": "3CMqQqQDs2jd3zjYzBnTc9xdWPF1wEqkKHCpfdULYiuDwzbNqiDTxt6bvyGjxSJGAFEEfg2NcdMFvQLtamRKJqXf",
  "key43": "gCeBZBSM3KWRcZq5b2x3y8AWgdrrzp1uorUD1daJMzneAPiMsPzeEyCzw6TvQEsm3SGkccxr9zfWoZKpRm2WdSD",
  "key44": "2NrGGuzbx9FBBrKNfCjoNYJN3rzxCqBLpYG5KjfaSeuysQZqq2gXSzgFSjHRsftsgC19x6cBeSmmDeotbLNJjRS6"
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
