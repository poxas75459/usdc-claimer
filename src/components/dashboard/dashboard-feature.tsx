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
    "2NKvJA1hYrJ95gaNW49cHXGfTLbhExdY194EwVEiCy4uB2MkMRnABpLogbQk6ij4RU4i7vaoS7d4THuR1pJcTi8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKKXhwfe8GXMJAnhHiDH83tYs6QsoG2esD4zPXYvZpKhc3CqhA5mF6EUcpPodjzvYa2fkMMxbQ4AsfRsB6VRT4B",
  "key1": "2bGf2Tx6irMPF6yGGwjmYm3GzSYkGawQKphic4fvmSPpmnJyQNrM8p1ksgtMH4AFyKrpU8ezMMSfq6JRgMRoGnhV",
  "key2": "UFRpHvjYN6CpTMd3xSfHgyYbuPU7SKMnXWsTtzCCmU7jdmYet2TZCcEbp1cKo6oPcSAbCpua334CzMiDHZsq259",
  "key3": "4LB3HJyjKxetKDPFadXYgJzW8873eDQ9v6gDxYqNcD4J2BXksdfXVdFVKnxYHL2HJRaExSwHWW2Vxwig12dMMMje",
  "key4": "2Akap8E3jGDnzTroZEsEBzRtHog2U4yp9bbUcZmTyxDqK2CiViVhXKDRRGxDCuL4nDR885TuMCimydeqCbdHt2F6",
  "key5": "SrhqJREanPpMn9d2BHN1FhUXQKaSKc9MPr2syy6ofHh9zDqW7yVUXKaSLFVx7mtK2KBtF2wku3UtNus19cUSPG9",
  "key6": "5CE3VdEQ3JK216giyvHPFL3zmziLAGma7GKVY2B7ZQSQ72ppd3g3t9yJHwHEB9HPGtJe7hy9g7gxsS4hpEKwrUDD",
  "key7": "2fSvD2SHEaA8edwA9c3CSfgxemtoJWi4mqcDA8ogDRDev5Mm1cxJVDqZcELJMXFQ63aHaeD4JmzJzDDZeX8FRmRv",
  "key8": "5gm2fJghoqSi1rofUsYMRGiGPnDtimryE4Cakh7izeveHRvv7ADVaDaVpwJRV8EP5ve8AYDMDLbpNNSDysHYdsRB",
  "key9": "4Mwh9WmWGE5XcmGgodP98PTNBd994roNJ8JCBWEN4qXunzLXV3zpqPjhgBiukrXM9MM3hcUJJzitnA2rCXYWQ9Uf",
  "key10": "5oW1Zi7qzDkZPoKgJigendhAoZfeVoZ815RhzRoRFh9Q2n55kjMZVqCv2P1Wf8nHm21auVsCSfCC7BEVCwkht576",
  "key11": "4Q3riZkm2Z6k8h7WnW9hp2j9sc7q3V2ddJ9eSypYrmK9pXrXNfYANRLiumyVmqwwJ6cLAmGF29qm8B3JNp3AmPDL",
  "key12": "5uSyrpBsJsMHz6crs9J7XZy4dJGSFQJQ9YeAqihRhKgPMMJSWCEKCJZXsZeWBzpxAuGTb21LoBZgnx4iJtrx72f",
  "key13": "66kDVDSH7h31U38RkU8kzVwUUJ4iFWf7YiS439jRaGoruMqTKzJsmKiCppFKmPh5u9NALSYBbCkCfr33XwY1JYpt",
  "key14": "5XtpdKZkBkDTb2Vv266eqewhv5bKuKwjYH1emydmRaHgsYJu83Fs1Thbx3b5NUvULxeZ6FwnsG8cM6rXBFq6vG7r",
  "key15": "5im9Vr87xKLuPASwox3chqtMERvwPcNTn5KgtUZ8cqRBnHTYf3r1AgcoetR1cQ3cnyXNWBfGcrxPGwCzuXnUhbY1",
  "key16": "64ioPjwfYc975FG8zFBu9VdMvYFAQDBPet6HYnYxFiQBrPakZXko28ZnQUFJqnUr5zvvFQXkuYz8298PVuzP3D2R",
  "key17": "3C7qsotGLfKaKyfUDmqXv265a4n1BjYNBFZLmutzsuUj7sYEBmrVqPMtAChcCK7eeKZyQhS2ANn5axaLW4E1bynG",
  "key18": "5g2DyawDtoQtjSW29jUG9eLvVGJh3BDa3iSHycrENfy56cb7nxFGMkbvgqmmVgqP43m9cW8tbRYNvYybAe6GRon1",
  "key19": "2AVarWy6dqDzzNk9jxhoH3aKYPdUxE5h9Cs4U7PqLu1cCPXWmbXHRXFaSFUzG2pTrUkVudDdrivrzg3obG3udBGt",
  "key20": "3AV2w73xf4zprP3TMVrsSan9RB1rNZtUPEBanPW9fXRnH4z7SfND3GsXBrqenmpRibVfdjTy6AnfchHAa5PLezqA",
  "key21": "4eCBNR6nXsFW5ct3BSyXNQLKjumz8ZakdkDvZwiBfkeQoUSWL3KPtbXSzurKfqk93Kh14Li8kSYjvFMFY3H4YAyJ",
  "key22": "23CF5t9ZNkeF9JKUnckthByc5s8Fcd3V1uHogSgfNvESeA82UDj8USCZS5RLoUzBHnRjYSmT7hu9Y29HbkjPoPnN",
  "key23": "3HqcQ11cLGCRmKEu6o6vdbiN54eHrR2J2zGctcj9pfuYBKFvwFAU1rBtHC3srokBA5Q15aurYUXtWL4ZojzNJw4L",
  "key24": "JoXrdfnyiukD2RHdXFrCqNJhPe1434S5ABCkK5XiwazPUsgp5Fk9A2mUs2eXr7ZnEGeUJqEZtzZFL9qRWHoUs9X",
  "key25": "3zjsBMpPgYzzRuVbXSj2MAwhtWYFdnyeK5dQgAd9aRXTNd4F2Rpa1gucXenQUfMvJViZdmYQod9QArPdo1mBBTao",
  "key26": "53vQiPm9sN4FLPvVazx4vTrSV8bkoYoyZxNZauEBC3TPJHdpYnQ3SqcfmjiaCGW94RGukoLPNp2dX1soNS175N8C",
  "key27": "2QMs8KPeMJ5Bmkn98T32oJvrAsv5XxFn82JeKUXM3RhKQXqFuvszfm7Qpz5sUeFPYWjcNvNTuPLRjb8MjBJdtH4Q",
  "key28": "SPHRWjeSnH448oSwdYxQ6tMgtAVaK6bZ8Jqcruccj9c8yLn8BsnM5AhF1WVeRDjcFCjhs8vkuCuMxBHL4V6qHgf",
  "key29": "K5dtbpMxUd4LCReMuKxotyy9xAfJV2T16L8QgvsKMffw9wnVxuVKaYt4VZupxt8bzds7ArZsXo5fg5BefEtajQT",
  "key30": "yov3QBxY8Xy4T1xMcTT3rHRMkRtuxY8dRzz7bosakspQAUjBLa3KqE4fcdubt4GW2gfsQN31w7GhneQRQhv36oC",
  "key31": "293gdtBBWdZuBaFbACrCgG9UvCoBn7GEmQZTsxEZbBypoRGh4tx2FiFR3e5nencq6aRo8wzWQYLsLr3XNjNKH14P",
  "key32": "QG7j2wGdNXjNk9ynQMK9iAgJVT5gXjGgSBVGMKEi3iaNbdtXdWoM9WoVmUnKm8r8LpgKh6vpvyjVSLvzVx2wyav",
  "key33": "2sA4WGVTeC3kzaRFuXaMZ8cYvvQCtUtwEpsgXPtu8XqTMnNNJdBieXvmwgj4amjuBL2eTTu2GB2Sv33SWiKoxN7n",
  "key34": "3cJ8cjbRHNxFeo6y8keJrCe7i5CKAYHEnn8qJwhi3kD9CN6Wo8tVpQH4FhLxKfbnMCs4q15QzqE5rgZrL1jG371H",
  "key35": "31KDMatVRYUxp6QG34TgRygHnCupqEM6YX6taBw8NjGHoHbQT6muFPiAk3YWJYecjHzx99QK7fuoN9Mgj8Ae7xUp",
  "key36": "3kNHVhzB3iBS3opCxeKabrM5Cmct9kDtX2e7ykbAPdW8Qfk5hNou2w5nkC2ArQEpQ2ZstHVTLHgBTcFuK5jJpbVd",
  "key37": "4aRVjAxgGnsdJTQojeQGaCHVuYM4WPVPv8LMNpzaK1mpKgtoKAn4YTFWmKY6q3KgCyuc1kmkVqDHimoZnEnZRxCQ",
  "key38": "2ua7BAPE5bcsthxDZguyLRNK12Kzk2W6rw9Yyu9Y1WguaXBfKxAsq8hJQCUimnm1mQSMetBtBPFQJHMzdKhY1FkU",
  "key39": "3ienUjNeb1hPigcxxX8ddc3pY3VQeTTRYh4KqwyUn9WQuEeiuvF2oWrenYckTwGDhARAHmpvfkEwN9bhwSyjpTEV"
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
