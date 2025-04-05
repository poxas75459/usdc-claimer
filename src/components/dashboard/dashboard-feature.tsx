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
    "5bTHY9NZxcP64zjCLWvDVu8gWsuv88iiLgyeCV5u9S9fMsNdwUTb1eEqATPdSDzG5462Z5rhKN2Jx5GAiHb57chh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSZdmMAgLiR2yRZ1BDVL1Wxjgnkgc5qSbDRWRghM1okPxvY6aKzjBBwqcKk7pNhux7hJnNNkDnuUrZ1fzpEk54r",
  "key1": "3rTywrFczFWHGncdoAA4811x9eHyzLQGqK2sUYfPq1TMuG4eWudNHx1N6jR1FM1jBad1mChDUs6Eqn9hmGJadL5N",
  "key2": "4tvcusiDE2pXPMWgYneftPH82PmfYooPWtwtpHNhW42tqTn9MVmLkAycaisyEz8vMuJSMSFT9QJkGqeduEVWdnbc",
  "key3": "65W2i97hgMFBTq6TQ98Z97nixzcP1r362rGnYPYsyiBVAmpJ5hwNWMPi842GKZrMFEAc8y4VLvtYjuHVvQdrm7Qt",
  "key4": "5PBmAn2ah9CpcjEgMsRbhjPm2ofzQR5yoU45EKnFCwQzmpEcj9iwDrGbRyu87VG5myJ3nnAFkzJcuP6VUcRsAw9h",
  "key5": "SVFZ5Npo4cv8FNe1ftztVqWixvUhCizfDEfAjhLCmT81UTTC17hz1CDpHujAQxwQLznnudfpns5iwRSYqYAaCKB",
  "key6": "jcNocNFpQ4aXiJPTeWfrbZvw7bKixceRkrveTAi8ukpJrefHZvimVKWLrMYAcy3brrWT8HAAtiumgNUuFyfPbzk",
  "key7": "381udJ4VABhk24s4DnpnZohmcDnpvD6vJcwTVfS3o2enCrE7giCx4BEUzimhQKYLApGkgHHJRS43dbGVtZ16QDGd",
  "key8": "9hdwTSrN8epSJ68TARG4iy2bgMu7TaDLWqZ8nGhNfix4GrFB7fxkCB4iNxEuigUci66G2iyUCrsJicXW3TVDxyv",
  "key9": "3tG9JzWrdjJosE3GCsmKxYF2m5whkfjtHyZirGYcgph8S2Wh43KwN7gqtGeiHR2tv9R5uy5TEWFdcFvxezFWuGU3",
  "key10": "2QksUAmhh38EUYZ5AxMbsfN7S8sXhCKGvPSH2Jvo5HMHb6DMKgE9qg7iT77EPnuerJZbx3pFn2doBg6MPqsa4o1Z",
  "key11": "5GkJrnbDGC8KY2Z8cMe4ZTuu2Tu2LusQRPAxAXcDBwWcWQR6iwdLo52xVG3R2qqBAcD7RoJrY3zxKpYwm3j2JyC1",
  "key12": "5QWyD9YiDthE1ZVaZMLAiFRUY4PRyoUcHZ3XdABS8Yr91HL3P7ST3us4DT7Do9kU3MheGypUKa3jeMr89o885Giw",
  "key13": "5atqDfEKkmGvz9GzHPWYB4BGZGuA9EJxxq6ZWNirMmRKgjVbpibMak4i8GZ6hwBxJ6uCm5esU6WF9AXjmnS6Ukee",
  "key14": "5cbmNswg99ZcxfuYsewGzuWTw22p1oD21kM6Wf5M6uVcPUTdS3EZHUWxh64QV1NbXQUc6vBUpWMDzZMjrSZ55pa8",
  "key15": "4ApFjf9GaEavWKnPvLgkj5jY4kgn1rdAz52oYxspBfAWQ44fT9cAm2wNCGoRMVhK3c6qKHfTtPEBrXmXRYbBCvjM",
  "key16": "4MqWZZZQ7LpuLsd2pNiS3MShGQ2H2opu3ZNLg7bZmPVv9kWtAA2NeszDnBgKG8EDbTPziibju1LG49CzodguHUED",
  "key17": "2ma7LNDDMy2AnXRrUE1ETMAQsmQRV16Ec6TFAtVJHxYGgkmAdxwmCVQjjPV1H19NSFVAzykjijUoHjv65THGCEWg",
  "key18": "AZWDk58CjdnnGmN2V6mmBJ5o4YvuVS79vutcj7HD7mQJcKD9MdLzYSKpwcfout2hEUpcLZwdUjonh8SiY6viLt7",
  "key19": "3sgwoMCNqSLMdmELYbkBhE9c1jqy3WdmJhpAJUmygYj71y8CETxqQ9REMjAr2JoBMSj2bQ77VxEoH1fo8BsbMD9m",
  "key20": "5EEWrVoDi5SM5cUbVsKHDcaGAYws7YamZ3doMRbuhpg4sB6vL36ZFNajjyqAZvXQVeK36HBzRPQKRZMkw1WFS6tf",
  "key21": "yMsCtaiFEyQZBvAnUM72ZKm4qgbA3bnLvZEoZfFp2x3GcivMaBANwZWoQ9PuDwVpvCB1gqoQMfzA6qaqVYhXuhZ",
  "key22": "2BBmdik86avatgbYehJ8mB5Q9e16ov9UZScY1izBSZzYVJgmFx2txQjztN3MVr3Nzi9tHP4ssh1zwKkr82mTV1Ez",
  "key23": "4SEAEYPagRMzdajpiYFsr7q5EFKehQ3SQC1BFbo7RXnnv4Ts159hV1HnhfTek1Jj8enmnAjcWjRS65kQ1o9BuhkJ",
  "key24": "2oViyBCMiiz4MfEx6j6Yf4Q68WPocmiaSbk1o6cbB9YgrcjVDo42FLDAyo3Epf5gnyQhDV2VTXDxKARvEzMh9VMk",
  "key25": "3m6eHQ1wQtCdxUt3bMZaG8cQX91AxXRMQ6vBbvXTjL9Kdf6HjTkwUMHfpsGs82iqxxpMftz1VyqFSGbGNzVCyCLs",
  "key26": "5UADVtdPyiaqceHh62SKscSC7Qmib4rWny5MQcWofiXC5g8Py6hbJunVsGqq8hx4dnTtjEK6Lg5ZdAyiCzMeA3Cw",
  "key27": "5GUYq6Pg1YuNXHWSADqSNknkkpWv86LrrFN6DesUiCy4J6X3CdMCJkH7TAqh15w2hsi6NDVfGZQa9dHM1vVEzqmp",
  "key28": "2fqvhi2RQCvvpu5YzLubV8jnqZVWC8RQrfZdgqfMJwgygdz5RghAgBmAVdh5fW53CjqUKb4tWghpVPcY5cdzmajH",
  "key29": "4nczXNtNG4EHYJo4zy7XManbfG6MwYGb2rZWiaXA7bskaiqjJYFfkd5eubj6jfNYZpXDQee46eQxtm49SNeXjWiR",
  "key30": "rdTefZpz14v5fhnmVSS1wcjkPNx36cvaLZAAnfJmFZSWrU8hbhqGLAo4186CRk9UX2uG4syCAZTQAAwUWMUm9q1",
  "key31": "615abmoFEcj9MAivF5kwUYUo8k35HqZn3pEy8JxFGtMmwDT7A86Z8GwZo6xhPAwnZXA8QdyHYY6v2Qth4vMFxsbN",
  "key32": "4CVMvWhew9J4tLjCVZnuSsgCjMstLmo6A1Ejnuff9yJWMgFRVCn7f6cJEiLFoVdRtVoALjEuUV1EhE9DSunJVUcL",
  "key33": "3D8UhMb5qa4mog5giwLYiU1SdJsy4eVYXSPEdYmGHskazvpqGxjXvTi4LtLgNnB8Vmm3ELvD1LEcmvxJF85irwLk",
  "key34": "6sn3LrvqFmoWvtEzkgLAusaKv2xacZsB1gQZpxSSNg2W4FU5RbqgmnqzQhyVNqsKZZ82Gvtu6keNK48beoAMzNE",
  "key35": "4sDk36TJgb6TyfMp7Yt1WBSeUKjLRrCE7YnS2qhhinsPoPYCZ8mtQnpd5ZvVcfKaqJ8z6bD7gBw76bNK5Qae1NA",
  "key36": "63YGyuvvsRA9iX2rgtMRisApCL9KLvDLRTNHZNeXY5mnCd3EwbU8Ue1MCMvpDEaKFmX3mebPY5EyY2pJ6BAuNCk3",
  "key37": "5GYrvTQQbL3jHXUDqJvQJhn7FhKD4hYTJ3XvVvLRJeT7g8iUEsRnYeT34GxYGmaVCgDnXk35yzkEyBQ1UuFx9cu7",
  "key38": "3dccLbh3UnfVgZ15UJvu4ByXarfNsrEbapBbuG4H8ivyPasR5f4GspLuYQ821PogheCmKAseCx2CX7spnukLKyVX",
  "key39": "5p8aePy2QdEDdsWZJpNLv6BDhiVZptn51urmjFKgRYJqhAG6UNNH7V9HVZzkjYZecqrX2mjCZZqfev2ztxEAiunS",
  "key40": "AkUsaMW8dE9dACpdd2SsZHtMR9qt2z6NY2RuUHXYg4PfdzDf3dPUnjmDz8ZU8GbbQr8S4seVeWxMNzDBkLBnrCk",
  "key41": "NPqbvg7c3XonT9TmXzcLq6b97VA9AY8kWTVPNAdru5XuZroZtpL28Erg5wudV3crGjh93S8DDbc8DSdTwiPmep1",
  "key42": "2jjbbhUfjDgXkLXjzipt1uGunCVgsF2KNFumeNTLrPwEf3nVEj6nh7Dyrxq6Duk39DMSWWRxj3nHaSfqEcZRZFy2",
  "key43": "5TfttbCwZY6SqGA9t4itBtbyERJ8N9vp8KmioC17zBKPcAFCDCpEXH3eh4nBdkfH6j2s8bya2gdGYWAseqiNAdk1",
  "key44": "3jDKRH8v6w4tXF69E8czqfs3eMPzpyjNLqky6UoFyULpkQgmttA39hGP9LUF4hjyaEzhWnSzYnAaDC6tbyF8NvDw",
  "key45": "2daqYNVk92HuHhTt8N4Fe4pEcXH22cyMy1juvi3MKUSiE6zsemwmC3TTdK51Vf5ok3k9yrjUvRUUQxZtpRwS8kuL",
  "key46": "5bTyZgd9aWvvPamViyt4egHYHrTv4szfyci9JDLSTFb7S9NNJG1hFnwQ6NmUPcda17RXF3YSzTBczJWPetow8rga",
  "key47": "4iXJSSicZx4vu7VjbDXREU6EJymbCt9UoJQtxt855TBjqtQddE6q7i7wy1jMda4p3gaRUZK2dG3mDKgsm3jMZhqg"
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
