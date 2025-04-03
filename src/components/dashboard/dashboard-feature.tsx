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
    "67CR3m7MetRFRKSrAWoo9Q5WdWZnqHFWBCxhYksG8J4YaKNEapGHMYhjDmh7NDKDM9iA5sucuQgNpVqC1K4pJH3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gb562RB6PzxcLcRE2W9Mvwd46AAfdZycq6iELf7So64htn4Q4owenSAaNSXa2wxE7cJZ4FftknTwTRfusyUk2E",
  "key1": "aEU2zhRZodGkBuuBqothrkN6X7rHvx62eLcvfwUSyaiYputpaMVAyF9RuoywenMztTxczs62QehLTQi5BibcfAa",
  "key2": "4tYzPHziEdGTpzM2LksLbH9wZ18jrCbKipgdqcWRWrt4GHzdb6ezz2KEZBwv1N7ZoZSMu3bnYNSEjYmGVZZe8ahT",
  "key3": "7avibYnXJKpsyEM8qFkbm3pU3yWyAWFUgJKDrnokHfFvtKdYytdoooU2ZUdMrqCveh4pCLpAooB4WPvDgPSiV7w",
  "key4": "4FiH8R7ZfqTXg1j8xrHxtS9gjJ5vgvHUnbfx84kyxBLXfFeqZPQFXWP5fp52A2tNmHo5RVzmowF7wgwXCuYu9688",
  "key5": "3qnsqGUikUNVtHiivwGQTVpoaJNWbPsEuD8zmbfaB5dX91a4cwcRJn1WS3xTBLD6dmztnFV6GmKDD1soJ3mpiVVh",
  "key6": "4KFa7CNqKbxGuckk5t7R4GWUAA2jQxNVdP96zv1gGzJpfx8J1DZZHvAPzjtZR9EqPm5noJd8Y5jraEYZNNCbZ346",
  "key7": "4E6s9SLqaYz36NoJ88pMPWXiFKEy74H3cuRUM1SWrqPa6oSCgRdAjKhEnDWdx3E6tcPub38mk7aVtRdV3apx3g2R",
  "key8": "2MrkvGD7YcfUUhppsG6oxZcrfgao8LxaCLPsAvmtwLo9b5fsb87ZZ1dGVjLpzezBndDUUGhiiqr56BkAjMknakvz",
  "key9": "1B6gVvUT7Gsoiy5tnCe5sUJpuXYn5JjCfheu7QdQgBoq44x84ETUpUBXk2FG15B1fdch2X797jFxkVhsjMEAHwF",
  "key10": "2XrdnffHB2vGgazA4v6AjUshZCbpGA9mxyTmBwNEZzFVvD1Qej7ffsxMiYFiMbbPf32j1U9kYBHWiC8e2L53TRep",
  "key11": "4owN5nutWsuFHCzuFdHGbHJmQh4ZfRV6VdXRBgNiGyRxdvPG6kqM4XRcPZm8pKUpbGjg2wafzeJefdaGDgD7DtS8",
  "key12": "2acCj5D7fGWBskKVeUAFphkEm7sChrntih21QcDk57eQBrDmWuPQy4WQdAJN5J3PWC5N57kXkoTySP8xjfM8yXKp",
  "key13": "22Aj8PbaUYfP16jLS4tagEsJbQAH1EyHBnSKTof54xja94smDWknTJSwrbqDqSUdQgM3dRHB6YML87aqrG5rZPaf",
  "key14": "34yn7twSxrwa334vpZoZ6r7AaA89CZuj484hQjXoUvXXHxwbkv7eeKapi1iQS2Rd3GLuuv7wzkm2Wn1y5AemXoUo",
  "key15": "5wsmGWDocuK5niHLfoceW9Po5D3oxJKw3Y9faTKtvCYHZejHWXs1c3o1Sj24umvLRVxEUPDaTz8DnUJcGiEEpSH5",
  "key16": "36kPwWGQLv6f6dd3KcYEm3RkSvNEdQkjQDgZV6dpWDnFArxUrXDjqMQJ75QcboXwJnnCaddPbbZ2TsCdZWjM7YGf",
  "key17": "5J2y4CiWrqwpD8znYbs2J8Uri5xvDzxJsGVyCT6xwLZgXgiMunwy31ApxVDxTkqBLvk4Grrzb3JDxw9RWHwDT5Pp",
  "key18": "2dzQwaQXYH3eWASzMCpCa49mtAugQuAwVWunKCDjMjiA6bXD8D8wUWmbwB5Mz1BfDZBnV2SLgjzB3SJE3iuuAWJo",
  "key19": "37NmtQjKqZf9BkWpsEnCmPr64c6BSnZp2GoNiJvW4JwwwCy5FsDPR8vtLZPKtPoQ7xvtuxBW6kbdzUKJzePFaeB",
  "key20": "4Y1zHvCGSLxNhcGthUgmDGsyTtPnTygmVVDDJTNN2zEH9hgQmtYUm1sQVtopVZnfzDC8eTmY4Udweu6jUXpV42Ao",
  "key21": "4CQqo1bkfvv1Hm4tn3aVGSY5yQrSNWPovuEkTc4gcUE7rTG9pnacYfmJ2bvE7rQt9sXVuZsNP67TqiAs8V7yUwfM",
  "key22": "4kNcDbSw1KYHLuf3DWCFU3fZDnwxqYs5rqMtwVMRu57u43xpZJC5cYaEcRrPj8wA2YPGDmnqVKr9mEAznXQhBHbX",
  "key23": "3Pp3DJ1FSQ41iBVumHcRSNCzYy68KcJCucA6jWRMhYRLZBaqt4Vk3nJmRU4MPRGk85WkwNwsWNNbWggpNJnGD37A",
  "key24": "3aqbKqGNEqmAgrrZTqqK3srushSJSPhdWA5BAG9gmdR6YY1tzamTsVNXARF1Ha87YATCuA6f42M9ZctkZ1VeDCuS",
  "key25": "m2UzDo43vXQuy1oDo8KEdWPswHxhUvMSjXHBDYfbMdE3yHz4vQ6tpW3Fj83B7oesAsRYUtV2Jz497GezkgMgQDw",
  "key26": "3oD4to25ZzRWZoNjr2w3mKNpVCts8A6N5msCkEEfbCKauLXKJBg6istwSeFRgsVHF1NXRS9DU8rbgyuhLfMpoYvH",
  "key27": "238pJooJ8gMwGttSoPoS915ZboFGxYcZRHL1u6F14LvoojG5sbE4rmB2BPPRsBK3KkXYckp9dkuRgYD8XgV48E7Y",
  "key28": "2HGerAetXeWo7JG3DCSz17irpes6BiGBE7s8nP96LMrXbmqg7QXdzW28pZLyNehZSJxkcfK3isohVxUWJE2mmWg9",
  "key29": "5dSWccsf3JssviPHZpPs9RJ6ZrwnBL6SXVTZvNUv5gdg5drYZ5iB8vJ5nQFRWdNaopnHUU7bAti32UaUtPv3ci7h",
  "key30": "49Zrrs678RPpWp2UDEfb3G3Cmrw4x9G1fkwUmmydKHjMzDv4pbM1H23MuYdq7LuCASoEaw2uJboaoR1ESwEXn5tr",
  "key31": "3texxewX1Fjkv19xwnXeJqnuLJN5UuiWtBmWantfEFKZramCYuooyh2gk1ww6iZePh283kuQgMoEoTCiT27jdcAj",
  "key32": "2up2LRSxatNuPM6XAjPCgTtvphyn2LLx7GQQiVKgjX9FQtESG9dEMWXVcz1mX6tiVPU6ii25mE5hpjXeaX9icgFk",
  "key33": "5EWxwvRm2nEyDPRFbb2k86pDJdjYkqmhQEjvGbotfkKXjSPWcw8wndEmvnis8A3CHkMFmYP1yMUvfUHJS4pfvdvL",
  "key34": "51UGohqURE4SbLeRReCxrUMp5yqtVQ551z2Nadon5oiGMfNGckjonsxkY2LzHV57fBk8cQVCRB5pDHWa6Z8owKMa",
  "key35": "2oZwEpXBKDvACQKnNyHdcavkbRZDpJweN5U5DVVSfbojr7roq2kcuDsevXSQ5SWdpkjPRdCTLgSsRjyLZAsdfcXA",
  "key36": "56FNLeHkWohm5ZxnBFuLHgtozZFJmCYb8wn2gosyCwkbsUrKNPC76KcVSkGiqwXFywsPPjHGA5grJr46vGfyLuFb",
  "key37": "KGiPKgjg72KziE2ZTMPGWxjuET9479VYNazUZmm9Uri4SiME82xV5vFqx47KyrU6w65yRGRtWJAGG6wPE6uZ8cE"
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
