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
    "2qqkR4VCK3PKUV5PXTD8HmBL9NJuHoJcsdxCCjH9FZZwRSuXEmnEeyCcTXgLpBYZDw5EkrGMd17kPmZj1wqSW9q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWKX3bJWHTbcv1nmKxhrbVUkBTvyEhvvDegD7rXVF6JvDVFHtJ18uNhVkijr5kNNCffYqgW6nEeE7oVmnLnHNNG",
  "key1": "5cAV8uzqgHxF7aSN8pyNRXVmfJRfPduAA7ZVS2G1xovLXsWzBNB5h5qXWaEgpm2JKRRozdTqvsShN75zJk4RG5aJ",
  "key2": "5DAFJJfJRL5YVauFuwpGTGTkUtE7UPxAYri69qELYYXCWpMWG8AxuCx3UaLFwPCM1nNpfFodxSBkRy7CdkDUtbmg",
  "key3": "2yJCGb8XZsYPmjjVVTLgmhNDmT7DzbaKqyt9jncwQSgkTDUs3ZXh6nrWqMD1kbxvYqbw4HFr9cF8HjRz8QFTaPB8",
  "key4": "4C3GP7BHvmhQqbCrRTYTVDRD3ihLZGfu9HUppghZNsQ75P57hkqZjGpyNdBEKmTseVk7tARJ9MyXrzXwCJKcYKbw",
  "key5": "4mLB44dTm9jPmrSejth5mn4nzU2V3T8FBM8p3xMJ1hdBPvyNKiskvpYQWyRtLKjsUfpxrj3EWvZSdkvRyk56Zt5x",
  "key6": "3Tm3TFYbj8opEnm6LyGLPa9QcYHWUMu3sCJ4Kqf7crXwtMyBTqWZKrEHVgTj8bwxtyBYnhhjcikxkTxERSS73kg9",
  "key7": "2uqbxkNGSqf6dW5ykcxDgJ6nd59aqgEVdg113y9JGcxyTsFvTkQbdRcxL9iDo6SKweG2tdN43Jw3nA87WBVwifhS",
  "key8": "2XNY5z1NER7gexseVLdvCF85NXb9P7bg9DsJemhNav9VZCBCKD6BHDda5nWAoMvThcUpBp78uynXPFcYEssp8w5m",
  "key9": "k4fXH9bTR8RNjR6zgUhRGKfC8KuDmidsPXUnfgoDTNKMB2uM2DWp9ShoekoTayjQsyBm3YJETCMUnrFg91Ud2JX",
  "key10": "4qPcs6osQnviSEYKdwkS8A7UPX2vMme2Vm3TGcLoZXoERc37cD5MK2bez5hYmfMdcswEkEyFv7ok7izrdntVZXVk",
  "key11": "4ck9qMRwETMHYNSvGVrgGK9YYiRwPRywpTBaVQU2pXbkwzcqAvTiEHCXfiBLmXgxLiXVWZUAh9xwom8EFcXgaZjQ",
  "key12": "5GxjZRBwqHiyozhz2PkPG615zypvLxeA8mhHtnC1mtW3TAbTQuRuuebRBPjuJLjBnDfJzdsjbDnvCZa6FqFrY8di",
  "key13": "XB6aHR3R8CjCzXrvjm7FrCUBZkGKdrVXoswV6JR2XsUJfJ8G1QMDjeqKffsNZGNDrbuw89KCHnopY3Eqv4k22ns",
  "key14": "5bspQm3SFXdr5vfzfVSpojDsYkscaNN27ysu7oZNLoyE2B1XotsMMxeFweEWbrStSzhLwdjX55Y4PhgAsZ9hRWSL",
  "key15": "4zjmTGDL3oDYh4YWy9Kze1nLnAEHBu14xD86gdUtUCnR2s6hSCriqRyYMrvoojpxMZ1mPQyKu29MLvoT8UdaqKoL",
  "key16": "5PE8nxVqVkfAxDEtv574QoQrGGmAZmjEFCAo7M1VmWhL8hrFKBBLYMDtCnJsDnyHBcAmuHdiP8jtWLA6pJLHB5Vi",
  "key17": "4rTtiVt1mGYtVvajReVTrtpZZyrF4uB1oMQnBzhjWiMXq5LcGmq7CWxGAEfyz4TkEbrTKFSC1CoMfQxSTsUCQ35v",
  "key18": "62pEu7MpUARVsHSY9sZ1EYVzAzgbHs44wpdhDYSRTqsKasTttMGeWwdHN359hCakeCboyNjiydnjLGZ7wtfjaaYj",
  "key19": "5bTgyVZEvi6UmzoZeDQZZkhCMHi5RkzPfsBp66zTLyFfoVQReit6Y4Ktz1GNvFUk6denKebm99cNC82fCjuC8fkP",
  "key20": "qZPnQvar81N5tkVnHLBT76R9oMTQCsjKDtjx3fRm5TCyqmGPBARWrCNXvGfnt5CSqvQEEJrjcvRtxrPS9QU8DyR",
  "key21": "3mKdERDKnMi8rhZM4yY3BcLp4dUkmkzKbYE5KLs4qzcHFUraw6N3kKC1EtiorQSjnSmDGecBFw3V7Zo84btNPb3o",
  "key22": "5M1cUuug28QmZcq9E84czar1dBpBgpwNHeqQJr72ZG9wZiuyes3m8tNEJWHwbXbaBNtfRsXteB4en3nrWD7tLd2C",
  "key23": "4fcN5nWqhCo8XAfhPsayZ1LvMnB6AKLvSR5MrjKMCzUaW3zeZA2dUTRDruQGKegVoGskypoevvY2a8mtCBkTRUfd",
  "key24": "XE1ssvJ3NovzNZnQSAr7Xovo7S9iToj8CD4Gu6JkFqiv7A75SCzosjsAp32XuiLuBgJrGtbdC52GSjCwYEAtLEr",
  "key25": "2NbSvZbeXqbcgJtsZMVEMAZrZFyVP3BPTD7pJjoHqsfYwX74qiv59oQiZWmBajLN4FbN6Ln9gTick2y7ZhoWG9YW",
  "key26": "5PUN9h2pyc7GGV4tP2xiYXNyA5cpoZ6K9dtv7KgEWEVyT46wLmiuczCRdsMkySK6CwbuE1cNZreT1z3Lcc2H5XVh",
  "key27": "4QWTdjni3fzn7xUwYAExNQfvizVH1Ssj4qe1kNTzTpMaazRg5JmHVDAo4ZqcRM6BH44NVRQgSyyc8S52Jtcw4R4C",
  "key28": "5yxw777ra8GLLXUNGd4vMunApB4v5VfuxabpvBGsqJ2WSqx2fEi7HYF3ZrK16hwYMoVCZwwfseKg8Pcf328hvZeu",
  "key29": "3bFgLyJDoFPJMPp2TvXaSQmQR6d22Hg9eMsG11Jis8SpDCk6VYfVVnmFvZ7z4GrNrpvVDzJgoQLgW5JFh8teLntn",
  "key30": "5vvvBZqQ2LtWPRZdieGkn9PfiPG5Y5XFuYuFGjPEoJ1Zhpgmnnz9Z8AyF75vpSZDE92SsNrJ2jGSHqmKedeRrYoE",
  "key31": "2pTKLrNp48boBtwx2xtwsxU276QDLeAmAbfNcyfbV6ezzSGZ7KEBQm21mtXcENhWrsujptsWXP2bgXPFv4ynbf3B"
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
