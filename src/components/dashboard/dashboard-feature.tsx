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
    "5aTTqR415gL3qVqu5eFyLqecHsavXUvAiv7ePTfMtKMEUgV6x9cN7T2jkw95CDyVLxEEz7HKJRY3ynxa7eKDxGow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28trsdumgaMSVWDYo1d2vwXxRvEhiJriUbsY7e2Kju5Uz2yanthX4UYgWKybE9EXFxTHg8SefR9wJ9eW2651o9ND",
  "key1": "2weMDgs45eXRBdbhgoTPsj4M5ffZBXJYRuXDpH8xNewAiacEqJpdsMh9VQtbLcnuQFujtNkw4ETtTrh1BeEyPG2s",
  "key2": "5yUbjWtrgxXepEQvMmtP93ZA7wTmQ1BtVB7mFU6oC3wCixG88PCeG15e3ecfDyMaEe5stKPmamNQgRGqQqEeYZbG",
  "key3": "uRkPScmiJmzmGcEVGBr6Ts6VJKVEcHE9VwAXCThDqvTYqB1jdKYYvFMYhTxEG3JZetaeiQzC9GepfpYtDKaCN8t",
  "key4": "49AtHNfBKUWLpXSgbBakH76L2PsovNnhYjwiZmj3VDLekANeDucQQmTFNAkKbQWDwvM19ZnK4TskMcMpDh9eoKGY",
  "key5": "25KAqujUrPkcUxbXrqGo3ncaAVZzj5mD2bcCh8fHahwyj9Uf6LPZT1K4ZzRhjzcEzRFg3X5xZB3qVHg6iSHm2NmF",
  "key6": "3ssiSsu5VYPLNb8knkGSMymMc61AwHpK2wwMhkJM8sgtBN34TdKPrGG5FTkkZdUGSLAiFyv3vrSYXUt4gRNf3x51",
  "key7": "4qGoUNDzauJg17mYwCxFkqgGRj9RHr8LZA4orNshR4uhQd52hMjFwZKcyqBxo8Ea2vS4cdaFBGAArjWmErdRLyx6",
  "key8": "4DJ6ubSXMVkTrXja4pC8dKVjcvcQsTnf7Ptvya8EtMnkWtzv8QnPRCNsvCmUcsn51KWiMHA2PiuZ5GEj3bgPt7UD",
  "key9": "2JvJSwPqj4kkQdd1Ndam5ZHRppCmhpHuVPrDQXhABa1kfEkZEzM47VhJGyEDAWntz4aUgyeBGj3AskksMJganmmn",
  "key10": "knK7krJ2FNXGWYknyo2RwGYTzvv2AkZhEAjVwXuGhteeDqVMgZX7fMjQZu2Vp3nHPFLc2FdZMNTWPCyEEvBrAJq",
  "key11": "2Q3ejVakyRhgLu48GxYUKwTdThiEDDMFghmfjs1omBL4fuxknYnbDfcyse1EkycGLTBKJXGhtdwNzjs5hL9was7v",
  "key12": "3QJkrVopX7DVzxind1816nU3LiXjLay5pYSk4fCFtFGARnLuYULgdRnFEJeKYZPUqd1c5C51XLWimr2TqZcvR5Wn",
  "key13": "4bcqV9DbNP4WvHqyK2NVY5bPPz5hBWai3WYwmcBku6ZHGYmoH3ob2niF8viqYYkoHj3ktnvaeQ5e5ExamYRqATJw",
  "key14": "4hMoMvpq2ttRdfPtzAm2sXgMnYBr31SBkJEQt7iKRGRBTK9ckiEfhRcFetUMXM4tUVFcYvwUr5LQ2xT8AKcaqAnA",
  "key15": "4HWXsb5rVRTXFyVDgv4w357TW5JncYq3NECWvZbL8wWm27L5JcFE6dA65tpzGqEXUW31LtKrY8gNiyqNKnTFkmCC",
  "key16": "5AUzQeWWv7aWSfi9fnY1wxZN83riXpKiXg2Evyye2dFvx3MGKEo5Qb4HipqgmYSbrvVDMFjYd63U4GQomP34CjRv",
  "key17": "4J85v7e81YfiRHHRzF9p421ia4m4DRSDuJaGJZCbp6uCoTv6CrdaDQco7kPPqwUVD8VsqADSPjSwLGRDXVrQw1Su",
  "key18": "27Nxrdn6n31RhZ2Mi7KL5M98ZXxRgXaXcJgP53DABh2CjFP6dzPfBC69bTkLa6sYmuVNAFsS5TNcTK9TXGbonJuu",
  "key19": "2kHpx6ReJ5nu8UrFxd5tcSfHuNMq81RQ6zdbS3bqQCqu8avrJig5PeAw35utAo977NjQ4DM1nq918BBjNVgE2gQT",
  "key20": "35sknuqQu9CsRQwTyAHW9Jhvn4w7hokF1P6UBPNvDJ14yoTk8kQUdMK7CxTWfwnuPbUd18dtWgvJreaDB9MWfdjs",
  "key21": "actFZ4aJAWhtPGApBnXwUweHg2GAMFiswX8Xon7rv8rUdUpukJKWj69D1XVZEULhErVPhm5k3gHUeFsuiXvPre1",
  "key22": "2WzYDLPKDsUxFySC383pQaKkDyfUW9fa4EMwQNfNK1bFiZciFCpfmjovCxnA2F7CdC3SdoK7ssBiQgzL6ioBszeM",
  "key23": "2ayAdv462yr316XmrhjVeF826qHJpzAzpY6qUdhz2LjGGX5kxFoTqqRcsKfYwvC6eMY9x7oZuUjtbxXQS1AYo6bF",
  "key24": "5Kg5YwXpGcbWirgKorVFQd4zjoYLVZwa6XZ5attE9spwKDGGZ2HMdB4txW1uCZnXnU5Jq5xLsRXyviJow9coGL1q",
  "key25": "67G6aLwkNNRJ9E4PcYE5vixsjERQEDHtEc1Jb4rnsXBRP7KLd32b1TAhJeJHwp4q8RyFv21Jfcid3BXPsM5CpL4z",
  "key26": "ukPgarbqiW34UsB6WES3ukJzt1xgubNhfFHkpjiREesByBG4JKLizee5kP9eUQSswZbnUGQ8xDNPzJ1fhAsBBtX",
  "key27": "5faqMeHahVayfXwEYvpt2881ceaTGjubh58UjPSoqdnmFMRv6qUYfsJCqNsxzTxMfTiV1bxDbPd57MCk3azSK4MJ",
  "key28": "56DuDT9EACvfM29hhEZg9CKQGqAmYZjiQwG794ymjuDvLq8xKMmdjKjfRaAzxh1E1a6qKXFPpFHsvGM9JmMxGz1N",
  "key29": "3hwH42DMtAAKoUm9JE18imvVggHEyB5TbWUvwUyfKh24XiWHnmQecoNdtU8ndrVHZGdydJ1JsY2grPXvTqfyEg7B",
  "key30": "2qJ3bqYP9k1mn39vn2qzuYNDECcfJbPrKapBgL8PykTgGQbAg9LozctviVhG1qxQgFXbjwSd4z7cQ4RiU748e9BM",
  "key31": "5AHTTpqS7tFAvp3FcnPn2c8bgoFMXo8jGYwzTr2nRJZ3ox1TrRVnhDwrwQejwCsUXsFKiXqWFXn7iMNZY9U3RB4K",
  "key32": "4rjeqq9VgD7zmUZFDFJPTxDeADbX6x6HJSZcJAfwu1HGPmHroR1bdpz2ST1xdStNTipnL1QcVrZXq9iuPr6PW7nY",
  "key33": "3p4WgozVJ1eLmbtWBBMwPnbetAox8WLqCqb3nhUY681HRBygfk2iMuK363VPnz7mGxszpGjkyMrEuaJNxJvLKmjz",
  "key34": "5Xx173R4g3aHQstVsGERKepL6RZyWvSBZVFo2WdjqwaXCd9NUE4uEerNJgvindDiMUYXvBVhuMcWsY69aL8G5TWE",
  "key35": "2QHppgJ6ujHfU2i6sxpWVKH7uwkqAVwurtPP8bxBsowQ5bcVtJvvfzdBu3RADj6FvxKC3AYJFjXQALmLwQ3u5uTg",
  "key36": "3iH7MzdFWJy65PF84D6R39cniLjCkvy5Ef5wM8imj3qkYxQhoub5m48bM3MpDTagEZ6ukESkggsFyPNrVa8NaK7K",
  "key37": "2hD14h9D47oY6inTV8iRkmNcJHpsKfeYZqWMPKeQw2vrv3YqR14d69b7wMcsGxP9mpZQT6bdfBdmwMKbDTmQWGt3",
  "key38": "2JnQfH9iJLJKf6Lt2oDCx3krT3eEGXXVH2HAHaVyCazFjXvqkV1W9UsbyBRLqidozcWbR7pBwudcDJYViv1f3hqW",
  "key39": "hir4Q34ZKgtyo1LuNHmnfbVAxm3Lu78LK3CwsNRdt1RZdzvRzxD87NbvvW5BSBzKSMC4dbh3LzwHoanBohE4Zq6",
  "key40": "26xSDzzXRUj4BSoGdBo9updckNLBjkstjMSizjVe9M2qapboKXz7SN3vfhMahf9Q4U7zfXNDhcFNpBACMrwPUDdc",
  "key41": "3c3vmFN8rAUYwHBCGCpp1cJP9FKsxhyp2m3j3UYgxbFqkFwQJVKFgn1iDQJW1emcwaYazusNYVf1LczzrsSXe2dX",
  "key42": "xGh395jVoAB1ZcXm7GcCmCFYmFGXtQ5sMapMSouwp8JArEa3nWn8wGyw5HmadkrxKqVMrRgrgqNK391NjWAUAj8",
  "key43": "4QcfqGyywbHrsSJQmHzRNYaS24MXqdY8VKSa8SVvScTE885GCMZzKrkV3zyPbnWHitXNov6fhotLr3VSB4eyqaF3",
  "key44": "67KPfTfzGNj74cb7QcuddHQ5c8ep2PqovTTjYQDtFNZKu3ioavgDYfFKdFhiEgQV3yZ9dY5AntRQjEZP85UA4jYn"
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
