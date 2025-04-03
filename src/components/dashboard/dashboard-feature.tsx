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
    "5nV6DuiG3hmXXVYLJS4BvUXWWbGvq9yYBSLMGBCLSoJth3SNm1XHAKFAMGpir1GtVC1C5PqBzKHUjjTnAqCV2zxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AjgvL7jE7EwtbMEjNxYSu8nDt9WRL83GC4L74Cb72DJPzWeJrfF31gCE7Hiu2n5P5vbdrNrNXuvHiTu5RFajLL",
  "key1": "3iyJponiXdyRBKt4Pk4FzYEhSacmuhYZEUtnr7qREL6BkUCmhu7tbJhHrdkM9vLbpRZRKzCs25tVZvELKBoFGQwt",
  "key2": "1tM5BfTRxu5eR4csRGjdpG23a7zMpXnvesAaPG93SPdd586CpBKDLgMs16ogjtpCCBEMuYogYyQvtjedfurHnyn",
  "key3": "3pMCsbRhtwBPaJsxo2Y2LF89YKfv3W6BY1er3WgczuW9YT1GFGDvqC4hHNJ8jiJmqmwuUAUsyY84wCSJmGbyURTR",
  "key4": "56RebHLzw7NisBMMTp5fpKpC2Lk97wtTKdbE2qXmGAcBzkvfwKVswMCXZsapETX1Jaj4yehE6YZzmqqpH6X3YNyo",
  "key5": "MUJhco7yYVRjwxtWvMV5Sp9kLJWAWmYczyPAiETKFJhBXsdTeFKe3NDkF2RBaykNfoKcefqw6ytLxoxJMfbtJ9M",
  "key6": "2jLLCd3gSsBTnec6sUrgSD6iywk6tqfEiPotK5LfstXLtjW5nEwqv1YvJno7jRiv6Q1XtU1DKScr6iBtaVU9U9Vn",
  "key7": "aeStGjFoAthwuYwvAwbWXKqBzokuuHdoJhdBSLJx9DviVpHYhQGMJ3FtyZv3WGEmrGL9ynSjfmjK5jqdDGzJ4Kf",
  "key8": "2tZeop8uPQZopHaGNF9nV1prgGd3EhormvqY4p7Ud29tcZjUrEbkzzBNeKsBqswUGBtp4jpR9h6eNbNQwaJfD17m",
  "key9": "5VUKRyV2Fwgffi9pLYXnb4oXsyMB3aKmk24ob93HXcEScjX1jyeSMdrkdviKfwhLmqCUa9XA8XudzGaWosUMWR7M",
  "key10": "5bDManN2baxyX461hjTNffyzELsSswknGF3wfZCx53S8WHz6UnJRzd8UbT88BVngodMoNKtk8Em5H4SFUq5cjBEo",
  "key11": "DvPDxVc1221VDhZQmQVqAkMNBLFUnHooJvXSa8EEQejJa3kBx8djpykJ6dxeiWTnYHtxSpcsKLkPbDSfWrtGJLi",
  "key12": "335iRUPpRwANee7HibkHmNbx48RRFcaK4BSsNoV3X4iFapUfYVJm2UtHTDMY5wmQ3zu7JiShM1SEXbRDM5bJDe2y",
  "key13": "fsRN9pujpxCn38EvD96ngJvw8ygB2yjhZiy8wGuFZdkdJ6h7ii6FPBs8RFuWA7GvxDqEaLNZ796E8LsnqDMjTrw",
  "key14": "5pyaEpPFLXxvwwmWVFYRKPXdWYaJXAeJoyVFCZU4mVBgGnxLzxBfPDCHoxekaiAfvFVJBoQjzNkquxdBpbCm4eav",
  "key15": "2oAagRA1dfiasFnsuuh5CY2g6FoWZekuQ9S8XGDo13VpRnDCnKzDvGeAeBGr2C5qy3zJdi1HQXyBkd2LvWaPFSoy",
  "key16": "QSph1TZgMBBxGvyErToCxtneBQSQ7Rihb9wZWj2Bj7nzS3jgLBSQnkEQ9EdpSQmmqxsM6L8zT8jir8RvFu8u7Zj",
  "key17": "4i3K5DuT2LDeRBotsjmitGLxQa8NMxsS8J6ohFkPcFQxWWnFSXgbAsq4bMEPNXoGcunE8B2zJvuUCfxx7awUoVgE",
  "key18": "3hixXtnR5z1dhmuhmhCaQgndsJX6aaK54oJtZpDaHvyWFEsv7yzokhfjwAxuPqBmD5iUPX7JpRHKeDNohgc9BHDS",
  "key19": "4PRWvvMUfAa5iFkW85ZDTM12byhsNxyVcYfrBa79FBiTtieXy8haZSgCJaZkj5Kxi1VcXLr2VuxQzEjW7axnEHZp",
  "key20": "2JSGRRAnxNMNAzMied2vT4b1Qk9tGjoKWvTYNna4rsCWT2qaUUnEBGYGYQbczgorSWZHfkcNkD7aQUDB97bd9CB6",
  "key21": "4SysR2K8UyCon2RjEdQ6XRAxcpvB9ZJ1eMEKbL5ejnukoKmbQXkVQ8Vo5s9LeB6zeDakZbFnETWro9SGbxxSgmoE",
  "key22": "5LiDwTnxgDbGKMVRyaZG73CyzbZbmbvSNALv6NXdeABvb3PHeFZrDjVPWg1NLdk8XNabmqq43rZojKSuJmxSfYuS",
  "key23": "57YTgLNtehYLt1CctqmKLLbnXMCR7rPWZFzeEgRDzwkn3VVfLzbjpy2aaExXCmxTZD6xzMCvE6gH9uwtZ8kF2zQi",
  "key24": "2ZaTX1fm7TCrfs8ugYmifH3x5XvhJsEzbh88MZs5nCR7gW7x5iRA6PpKHfKmEmQR6xfAvaaQguCfdrSgVNfMZnoF",
  "key25": "arGf1CmAV857VXQxoodDa9rQgFt4BgbhdzoapYZFE1BYoecrxxJcF4VBTanWxqHBP52LfF5bjGxeyFnUbamhjWs",
  "key26": "3EK41A4o3NoqFZgPb7yDRDVUDxe1T5Vg8fprUeoF3C3eDG4QGFE5QU7Hpm3VxmEH5U1T1sin88W8vYRxBCewFKtU",
  "key27": "3UvnnUGH8VG8Ug9HWLk2TBU4nHThVnbgbFZNfiiKxFWT66UyjnnBZLAMrnQithxL5o4vGeJUBvU98neTRSdCqXpx",
  "key28": "5yxf3tRvW5DxwMnE8hcukGjp6bukqJPDYxXf3scZcKwg7sgqEN29BJqheTKmpXPVWDq7pBeFSYhMY4qAmtAYEsEd",
  "key29": "2rAxoSAPn7FYRj9eZMsFSuonTp5uhm3Lt14c7xhjkqsu3qxpVB21LTASs44p2L5siZboRSt1rY6eadzyfpJkuKSD",
  "key30": "vQsnWB2rFMLf5TeCRS5iAgjRWDTzHEnwQeHHXuK2LM9UkfYo1SA6j9w1Z1N8tXZxyia4JYLLLUwUfRTRuSMv4nA",
  "key31": "C5AvRRxVkkv1b6nnzPUPDRGn6mhRAHsJo7xBj6RnnThfkNyPKoMBc5Up9kf6Qye5eMXTShsTcLKXeJR1XUuC6ee",
  "key32": "4YAc5DccLvRsYZMJGwAAEvf5pv6uThXtUFvZUBt7XR1pxYF5qowgoNtkUu2ZaphVUarotGZDuqzZcCjqrSBB4qA8",
  "key33": "3cCoagkCP1KudhNMAF3oUfYHN6Gm5aY776Gb4vh6Jd57jo72K76iUWraAYaRgxNFBt9e42bCL5VCCnaetAxqxcDW",
  "key34": "2bgRxT3Di6FR3TJjKzmK3GdZ7k2ecBwBEteSRthsscSy3gMnsv7ts6ztVNArtpv6RNiqDf5HPYu9rsoCUQKMMNfa",
  "key35": "5C412sCwwMsnXEBxX8QgE8saAbQfDadjzDe9cWcgMFKk7M9CTLJrqau4s2ZmFnJi9vWTsHu7JUWsYaQo5a4ZxD2S",
  "key36": "A5ToDTibzFcrQ1XkGRbJaznKqZFT9q9mRjBHrAA4LBBrWfEzjTytJsKb4oonA8FMhpZj4owmxBh5esU9H4sQcx7",
  "key37": "49awCyvpkD92Yr4GpaQPev7EgJm1jFGPLSjvzi34zUKqqgxKMbWhroatWaWqgXHwpvXWswEDWCoH7zQxvGVU8oMR",
  "key38": "4tCo5AULhgT2Vdng6EDvT4v1WMUgmf576RHuTQnvgWA7eZP1q5ELpAsNXKsKEs9Bb6ddjgA6iASdPkmi8isfUp5b",
  "key39": "Db4BVDD1tQW3LosfMkYJ7tJXsQK4V2ddiyRUE8XUVMD6cafAteToUJvdbzqLsCmpf5EhX4JbTtuiMKPfusEY9JQ",
  "key40": "5PwPjz7WGUYTXcLKBpRNC6SMGUsTC7ECqgCmaUwcViTh2wKt2SfCNJpjaHkaT37oWaA2oQMbs6JcZF89r8TuiWPU",
  "key41": "5TEdZVFm2oJJNJZc8vY6fDBn6WNdtNTyjMDe1rwvcLpP4XBqykSx4zLzTDZGfjx21hucP8Z9K5Kfz7bXJf7ufMbL",
  "key42": "39gUJJfB9a63YyKkhkKgy7vVtk6dsrzUH9uV1QnUiStfCRzuTdNWsrZZ1teA3CMjgBse6NQzenTzCTiwC9icsyBp",
  "key43": "4zyqYnzhxauJnP7h71DCGhLEcsERpwL6KSqvzk8DfQVKtt96j3FVvW3Bc6wo7uGhf96WbiPnrALkH9MT1poruFJt"
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
