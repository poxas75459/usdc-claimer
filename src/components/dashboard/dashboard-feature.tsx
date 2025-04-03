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
    "4ifFwJEY7mbzM16jfGbfsmC6MoJD544Lgbk4gABR5LoAGXTfDPFD6XKeH9cBeUhqJiQNs5EpQzLTk8hNf6stUNRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKUXJreNUPf2gKQP6fjRaQGvHeMzjanRdTk4gCFaZQAMXUdLnbuHfKM2Ar7YEygCcmPbUWYf6VNY2cJ1Jyk4LZn",
  "key1": "97bxm2QEJoKweynrfr16ovwSNfUqCdoTnQwiu63ni23KqKLUH1hvUGJussRrKvZ9wwmJHAud3LEqtggxARiz4Dm",
  "key2": "3DtvC8siRSNSWFyXZa6C5siKd4ZY7a7LbkBgegQ6uGcPAMSrcTwH7zWHqTd3SShnNJCi1fibKU6EGvkENmqutxPn",
  "key3": "3cm8LWYkkdzHUggDAb4g9RGC3THc31h6wRfWtNA2vWLyHFAupTKYA2KaUkLGcYeuiQZtWjFDGMetVBQdrNWhm29v",
  "key4": "2uFX2vmZJYdXit8qEYNbHqiK9bDiDD9pKvNk85vspwRwPhBbDDEJhCaMLwXSYys5Fu9pyMSTyj9DEfSd3cbM4wXN",
  "key5": "1hvVpQ6rS7h7kmpQn8mtcwftFArhb5ZjX7poCCCjkRE4K7sQv7BnpHN5Wg3haq5yMNRxrM3LJwhh7VufVtBP5S2",
  "key6": "38FTx7LAqJaJptP4hidS8QHMMyPypWDWpTPbQWqnwPYbBXy9s41Kqvg7pbuWHMdL8L8Fe9dohaCncHVy6UekaYUt",
  "key7": "379ksicA9x4dxsumNzWLdVthaZVU2FGZpDyzNA2aGxtmkbGmLT84AjFsQgvz9PCJrVsmfjFQqK482KiJiS5piuqm",
  "key8": "4XWBANX8uq4CVuzQ58CgQTyYpHcAEgp1FU8ewneL2TeNNbwwn1guYxJx8V5NcsmcvSFBevEWS6jhGC6pN4pDHLDg",
  "key9": "3Akv1BkNu43CVWxwPtQM6ZWfCXShsB8t8xu3RguFAT62auqHdz3zVAXWUyQKUwYeCm8eBspfXwmxxTrvtSX19F4a",
  "key10": "46yGWh4ABBUr8tK6kg6SZewXcAMANq9s5s8pQe1uAUdnu8Y615sr3o77D63Sdgi6CVjF1QNkXkfnxet1aywypaAV",
  "key11": "zrmVKmRoSpuSsB1HHoz5urVyYCp6A3sUtAe4uXQuShvzyAsxHXH1NLmjDuKryFQfdYyncowTNWkRGgUvdxuNSbC",
  "key12": "5YCHT53JF7jbPi7CQJBVaA2qB2rMy4iTHhdSRDx4WjNwLK5HejsADfmqyv6YAYZx9PzvDPX7iejE2JzqYMAq4W7X",
  "key13": "2n4TBqmbPfXUqFyR6PJe6siKCQWuT1h7Si2w9kAXFeofzSHnQyuNLshnmkGndUyofjkTpfMNDeALNEmrRro1PWZr",
  "key14": "zDrsaeASZsYFJsmd4fDpbAx1dfuYJwSx755Kea37FfWW6xC2k8VuTMqGTCvwuQJeyV6NhxCBp8WtopmuvvhcoQL",
  "key15": "FymazdU9HK1V1y1w9xAQVvdqfjhbvAQYuniSW16mmX3i5kYzP5SDHPsjEEX6sNhMHdnVGFm22WYeHrJRTkcKBRr",
  "key16": "KEwwp37ndrKgrxSNt16bQzSMx6BvpS63VzqPNvbXc5qYWj5qcyfomnzSms9mhsUAA4zGPqWSW8ieZNeJnjnEwp1",
  "key17": "3Gxxyz7A9g3G54YpDcGkLbWRfMKTtNLUw7fv1xZscxFJDdnC4gE2qcA58koGP93FS3ZocdkQvPv8WzcDhYy9RrvK",
  "key18": "2vuxGmoteqFd4iMyxswDcvwvzJkxELckb4c6TvGBY2oUL7iB3cQRyVngjecXfwSTb8QdDxqECLhCgQUhjYKgupdT",
  "key19": "3AU8SJAes1T9YrXadU7iQpj7FFE5pX7mAMvMjAM51dKom4gRP2uG8j1PRFx7xDGEuAVeygQ7iJo9eV88SnWKw9DU",
  "key20": "4VgJooqyCQJcfkvwFKc7hWgBWiPZ6RZ1CPVMfAAVpFjxdhfV4xNwC78redw6AJsND689eeEnKQ7SXUqVF9stpzdb",
  "key21": "ChomRvy6rxmNwgbfeti1vSTmd5Mg1VfP6etxBLrYYzALJDdys9F5VqfYx3LCdYpPFGoiRoxzUJ4BMRCCpvTU6tw",
  "key22": "2zvmBa2sVFFp8xAoVdGcnJe9rAGEATkbtmAGYSHyya8WnXgaWrLRd7DqLdDAQ1x22kHbnC42DtzU5ChrGAqKC7wc",
  "key23": "3RAA2XrxUGNKpAvMM5bfziMvcS7yqZqEqvtCiXZtH9Mp6XhhnB52JYgn48dXCBPaGpSXEqFxah7hE7dCsKw4ZAbj",
  "key24": "3nCkyiXsGET29WtykzY3ZovJsUnyvZKcjNM5PLBpdbd3Zk9bcGhosSnPcJ52fze7LEJPWptNbRFdfZKemzPnRjDq",
  "key25": "eGdKxxWK47SLmh1NVygUk7wjbeZRHJLbNn5jBpgdRtuvbB7NauZMe9CKcU6YjfSNsNFqUNX5NHNknWzVGru7M6V",
  "key26": "4T3GCVVaQRPCkhpAJ1S9fu6aZRwAn4nb5gxyCdvE4adRWWn9JRoETBJGzTGXr8s5bZSxTtX8qboPTAUziD2JrWjW",
  "key27": "3JchQQTyLQqSEftpAZCNiCeVQmfcpgYF8JdaPWAfJ7YuNGaEyAaMHeErcd1jHepaxJVWZdCH5fHirDVCfk5SFznp",
  "key28": "4N3z8MrnmnvN4vV66jiaDawYSkaF554bjtdkoeRZC9B5oFHfJrKL5Gh7UQAbr4zinPSdpZccqnc2iDFcQLzBn8yQ",
  "key29": "4tqz5TS1J5WLUqhhenztR76EL9HdZcdSym3NwWiZAfNppodKMDwy4oBshUNE1MR9CD74cXwYvQetGLx3fmrH3ByG",
  "key30": "3etqbiR3ndvkbnqaKnhkrhBNWo8YEABVnHemjc91Y2gqz6yUYmcBfRcBBsqSTJa4SxXLTrQRKVscC8J9MMR1wiCy",
  "key31": "4mAwQHbzGSezA5o4q3ek8tHDT2Ut6UE3rSaYhCGU7eJ5uVvX9m9tGJqw7vh6Tg7ptPwgha4hmkeBJqKMjRzgWJiF",
  "key32": "3qYEewYhJrVrzzCwkVbGPfrrcWr6W16Kt1KDe8qLMRPRH4irXtf4YXe8jt1omHeahWHCQdvy7w9eZeJvQKJr29YF",
  "key33": "46nbJAc5Yu6scwQng79App2PNLuLbFyh7YGXPU1uNiaigtefcDv8tHxnYH2PHtRGnoBSeqEfQSmvKPcXumKMpp2s",
  "key34": "4HLmYywbEq2NaSLsaj3Ta1tCWqb6nNCKA7ehZt1rusWuQVEfbyo3aGimq4EGad2WEV2j8B18hrQg68PtfrnkcjQn",
  "key35": "5SY6rfLXQvkzhQca4t1LQvejy2QXoMoXmTKoQs8GczyHeEUmhHTwbwqLuSVfutUYbfxg7qXKoMV5Emey3jHUEkHX",
  "key36": "57Gt4oZZ35mqjERXT53Rq96crsFjyyrirfJZfgmNd7qNjQnbtYzMtym549b47vKVEf5AVW3EMsGjPpuFccZkpNto",
  "key37": "65eTsiae1Avs4o2D3GDPCFMZxt45r1auWiaQnLU7SovBTeiQcok9VdnjEkQ4SmV2t3nn4ycQa4q8KBqThohgb4yy",
  "key38": "4QtG5NWGYD25LynNeiKi7EaZBeVQcQFyDw2AerZgZuMFEDXR2MvDhmbNZUYtgGS6JU1XuLBeJ8ZfLBGXBLGeTBoA",
  "key39": "fBYcY3GLuPUfuTXNFwxNe2Xzv22GjxnuW41HeAGyfKtZbc16f6PG8EtBFis14kHxRyRHXyDMoZ1yLXv7inf9yiS",
  "key40": "33EsV1S3dLbAHPwKoKvo3agLWK5ujpPhr1pAoxYCBKZxJ4bA2kmp8cJGzSUnNK9x91NQVCPFtzVvcQwpmFW39Ymb",
  "key41": "5JBZTdex44pdGP1uUfcLQX4iDD799xAcGpmhsY4G6eQLNxXwFMqSKTtmD5wrXTg1oT2K79JSx5FzA1oWVitMFh2D",
  "key42": "63w87gkh38W8o89aRGwm7tLJ7bjau4drGwHYVD7UwBHoJ7uCYuxGpEPcNEm6Row7naSdGmqtBSQJKQHHypwvUug2",
  "key43": "493VkKx2QxoCvZEApYrWUXkmqRDUPdCRfSUejntnpkf9jYnZxuypYhSqvoXH3yZFEY5uQmca8SGpoJcgx3CXK5ru",
  "key44": "4GcMC8ZzpAYxeJytK93gvvVdxMQwGAVyFKKzMywZ5AZpLeWvpsen18yqLJnYBFtZzMGFeKnqwhbnm7G5STTeX773",
  "key45": "3wCRtgWqMB7qSupSbtdvh9QgcyhhJyHynqK67RtVT8a4zXvYjLp6rFgogdyDimFgATxajUtKks3BKMDu5etc5dXB",
  "key46": "2xioVnv1LcgfuyaNWBDHCXyx2qVJaCv2FwMKVjmfiHYgU7LSbKg5py3gpYD5USdGhEWZHez4MczZm9hiM5YCz1xi",
  "key47": "2ajzbHirNhEGRm35pNcaDBogjCXNoRsLCNpD9gkPgPZXFu2N9GaStq9tRb5QDztZKfWn3iTZJC7p8wYA9kXRSUTj"
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
