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
    "5RZtSspYJp9wD48opFYLkWNAQVvGeCZaD4tAtJJUkLZURjVvMdS7vn871uq6eujbXv3DmZSx8nN2NLuWTHJYEDxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PsXPFMG3zj7kgCTk7ijGRmY2jguAfh2yU7zmDjPerrHUJL1J8MUBTYCF4NCihNKoZ4cmS3mSsFXXskjYTBrC4n",
  "key1": "5buHn888akU481EvTvKrkrtmgfbGi4gQwRZTrRKvarxMhVLW2XkKchjqa9hFXffJ7mF7xNWQ3NyBdakB6mCU5sRT",
  "key2": "3dAp6FnmRcunBFHHEsY9PBqmvuHXB85SR5V2sm4CtSzUee6D97ai57Q9igsFFzugX4JextJBa1zL4PiKnRU3F1UE",
  "key3": "3yAVReNDk1NrA3JKU97aXi38HrjuNkhNKaKpjcC7Zxewkk8FG9krZm2D4MRbs4CZyocPHyEaTAuMDZt9RVUa8MPG",
  "key4": "5iBpUQ9RRG2WBie1E41zMBxst2k7pehqPvM6Hivj1779gK8UR1gG88AExojUnmnromdAixVFKxiW6KkdP2q4bnjR",
  "key5": "5ATUamGgR5EzMMhjAbGshFvMxYNKUsgNmEgSajCq48PfG5vE98au6B3ZXkfhhKgAsqWV1auzXs9gUso5MLjqyXNz",
  "key6": "2742tQw84ccZtzXB8VjRNyMW8BPcgtYS9UPVPo65NX7dPTJZezWJExjW3pv5bs8KgrdpHHUy3gJd1QBMVAFdu5cz",
  "key7": "2o3ZNZPCrKh3uPqstZbhLLEwZynVN5ksRN646c8XNkSHAMQqvo1PWLk9ApezwjY2nJYvftGNHY3aqzN8763ZmH9e",
  "key8": "346MNdobvj3hJhP9FQmG5s9Uzr6gtsMiPV8UDETAyf3SCBkAMti5exVPJPPk51e6WEZYm5Rfa5pekGSGm5aGKoJV",
  "key9": "2f2MK3SXFwudJLPqg2U461df9XQgCbsMFrkQtwLv2cMec6fSkfvBBhp5WLAuiPzPjLrmzRyHbAxUpVQGC2UmVFLE",
  "key10": "4pQsE9Qw3rCTxYrkS2j3sbhsD8mYcjL4Pmzv5HBezWWVgnuvqueTEEMz79dAovsbSe8k1KnzKGT9rbyuY2Qc1dhG",
  "key11": "2qphvqzpAH4Lfr3uVFF23n87A2MFHDZKyRBLATmBKgekWDv9tMCA4nsTHDhRRjjkzSPCfhVwvAZP4wEKBYfbpZgm",
  "key12": "4NKPZr6m61VobFXxbXRQzvseVgwkoBjYoU24TAdxaKomPf4cu6StW8SaSsxq7w5aT1QJB6gNMoNSwfKixL1PHp8W",
  "key13": "5yuqqX8QhK3r71oi8gafs3ffH92KM9ihCmdFsX2UYNRUCLDmytSdo97cKnf8FQR2YGYUfNzx2yEbosAiToDaukzf",
  "key14": "o3AxaJf8SjAyWQnjFS5pua6h8AuuteFWqKUTriaWRQ1PupchozFU43J2ExHnowMcyz5QmwaYuYP9FcswJoqjNte",
  "key15": "2cY1GBoMvbwZpe5xRwd68bggMPoNmCS7vFb3t7CGCVT52euTZY3S24vb6nDYz1QsXJV8b6o7Exp78xqy7Nnyu8a3",
  "key16": "3QMbwKePb2tea7SBLaysFp3MtSdewff7qD56kTZRaAjrYx6EBALTW4hHe2uHWA2UaS3bwitZ3EtCvDZqTqFUTWVH",
  "key17": "4NPLTFeZ7H7w94bKxkBqNecTYRgcrK28dHSeojEiB1RKLqu3k6M7kRHVaB6HmuiszhSu1LUxCzLxXDVxo4dabPBi",
  "key18": "zSyJ1HYDWmhtVe2BYuPdwQ5nwChQE3C1ZnnByfzopNPu9Pdt3nwkBHYzBYbBxmveGAQEdLCUoTt4ohan1egJCB8",
  "key19": "5V61LKHhXwGC4fULqgzSQQ4AfTBqUXiXpnrco9oh9rwGzdzeg44ixR5PqcBRyfUqNrJBt9nEP9uuCFRrX4jZAe7Z",
  "key20": "58DXfGBcSY42mSLHtDZJzhL9yKwtzXKLKbNBwqEnhVy2MvPk2htujByL5SFX5i3DFzynZe5RMJMztn3Y18XFsjTV",
  "key21": "5HxXQHx4ppcRzd1h6ofcgquhR72UTL3hRgCyFNXxiyGWMvoTCEwrpcHQoBaSJ41SAnSCKFHDXki7M3zss6E9ybjU",
  "key22": "2NVcfHJeZqY1FJh3K14sQkSc19WiE3P9BTaPB28c7Pmer1Yu2Cs5xd8DDr42fyxr3NBDMHGuaUvsn9dPamAEZ4rd",
  "key23": "3FWefAMUTXHJjSVjpJg3UWuwyTVjtabPAbPbXkZm4N2DE5vHNH5JgfRvU8yySurKU69BfiYbxLTFPx41Q342CPw5",
  "key24": "3TuQfP3SHrtBoWUny5gkCts6cb7QFmU3n8Za37HyH9DfDTwunhBi5G8AJ5DUTvQ3pUv52xMe6fapck1P9Syd2s4y",
  "key25": "2ngRevGSa2DaiQeJSkRmMu33kGuhhZ1rW1XpN3D7CrmyqciA64HeHd7dbogGCUihsvoGsmwMmmt5tpsdjPLQv4MG",
  "key26": "3Qk5Ujiax9kFUoKyGFs4LrqCvjvQVxmTpsJjWhtVxdMtudU3nZ5etbpEkG6QnxnLGpmnLWgLDbdJYFC26vJHxEDD",
  "key27": "2qfrfUFpghNDdgejb9HK5YTZidZKdKD2HBvB5ZNyAeSiFyunwkceyzX7oaUDtPPWQK3wMF8CTnTPszmxVkRc9di3",
  "key28": "2w9nMJUn5UKFpZUqkd8JZWJyNJtRRk9bSNMnhFvHgcfDcDxZi1iJRM6aBUrYjvWqBGRfytR1UtHksXBFzFL4x3kV",
  "key29": "62cbjQi3xXxvnqGjubz1XtbmporCMFWjR8RG4eNHuGCHrtFgc7r21p8wT2oHKXW6xFGop166ATkvrgc72frhcNQ2",
  "key30": "fEc7g5GCkS2kiU5YU5UX2aVe2GQ36kgyT5acU2rPWHSPGCjZrQoqnhGsBXpjoB2az58y4TJCP7vHDoTWSjFgeV6",
  "key31": "28o3GEFqDAPQR7YuRv3eUjPUrVPX5zruSdCUtgd1u5QHg2mAG62UG12mcoEKtL7JFoHFBFmHVrR8L1a6gWfhZ81v",
  "key32": "gMCPVqq9heQizTffNHbgxSEtVM76RxcC6632GYp7Z4NMo4Pz6DQy6GTbbNdLv8fwotMGzvDr73VbsYKQKjUyek8",
  "key33": "WHenwrEmXZRViGvAM7q91EM5zu2WFdeuv9WXtDnHH5Pu53BHghRrHUeVpvhyAytmBGWzryatso7g3mXrzNxcCoB",
  "key34": "3Yk2sV9UkeDCrPS1bbMbig45Vv5StwmAsJWxpubxzaETPQCex22zTno5UKv8n1WoPYFHnWWv5uwe1LVu6eEGcf2S",
  "key35": "5f8Knn6tik2BRKy3QQ125thJb8SQ6VgRogfoGTTSrHWCpAaVAYJQThrV2TX3RYdTapYC6pMSR4VqSQSKLYRfEzzu",
  "key36": "5k9DZBPnWBBEaQsyxfcDFDGNaiFyP8rDJqWdDr3ZVUjPRd7RS52qjrurUZAdCVt48dQdE4oUGoaFce1NH9aAVkpn",
  "key37": "4Ea1JHSmjfnZYZEQg9m3fgxX3JAEqRKLp4NYjMq74CrzLE7Hx72LhLeaMJVyo34dZFiPLNzTprwfEvC989y6v4Ty",
  "key38": "4EkCgxNYRNoZo2XJ75M2srwAYZFeCP6fHazGQPshs1aVv3s4DAwCHUUSz7kpFYEuUQkpbfnyBv5bJ1aopXGSGRru",
  "key39": "5Q3iBeXwAQ2WmPxT2acVDCQTEDxKyG2ZoNq8mBLcPwgQgoUZVJ4g54mCRQrGDBvHeHjoK9h8VdRtKF4rnWUQqn33",
  "key40": "2nQDZviUbTSefrR9s146XzPAVF5QsaVJjPE61rDV8U5AJxdZ4a5h2JSPcPhw57upTo9sJyMXw7ejpRPEfPyCXxMm",
  "key41": "2w2gjSuuDUsZhRwQsbQzCDWJJ8vwAsjCQYdaT825aoM2CXtFe5YUaaFLNA6jg57P5bQ1cCWme5Lt3SfPZZng9M4A",
  "key42": "rBuYHUL8LBWHboicmGSEwG8CXbMbAxL67GRFuThhCaYMQEt4pMCfN1C23TJRKnJSbVo2s1YYcV7htne3GRXJv8c",
  "key43": "oeSSGCGjzhDY519ypZPa4RDRnzm2ieMGAWkiTEK6TdBgKudsXNB8z5DPtFxJHXmfYhe42MQwseadamDbCzj712u",
  "key44": "2373sbUmc3tKwUB9vJxbRFTgd8ph8PXSGqPqfEQLnUHkY9nAQFq22K8r4Lvz347RvfqwZp9Dc2e4dHXpXF4Hjxiy",
  "key45": "vGtJBhXoFDFo5iTkttTFvW4Gkjg4jA9YekLrGP8Zp4Ju5MMagKjw5DSbt5mccg8Zeekampb8gYGDGXqqQVos1XD",
  "key46": "4FFP7u9Dv7Y3pWhKPeBUU6GtvozbYZPon6rysaRckYusZqeKFHjNK87UaVUViTLESv9gfJxUsLPimtGMWDWAghRL",
  "key47": "2ZNbTdDi97SY5Cjt3yacZdqDHRVUb41uJXXSHr3hg9pL5fpT5ZJxonpquPDeWr9qcxwRcbWNKUh5vbS53UoJzodd",
  "key48": "DchQWL6tGMWhjw4M3pweiLKMcZWNeMmyEDDyjcP82oNZcnF8qsPYnWErGuZtYLScsPa3UHjkXsLd6zqVvJV32oB",
  "key49": "2bYS4BxYMgYELDL5yemk87STRT1LFLSyTaRVJkfeMNjUePaUyydUSc4L8nDCRvAhskAeRfMALLzUgTAszxWFN2mm"
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
