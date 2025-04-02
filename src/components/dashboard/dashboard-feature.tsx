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
    "2jukmiFQwponUYBcPpTeXRosko1CQ2HiPtEt6aUFy2nVG2UdoUc6ern3s9jJ6NyvH7npKo65Q84yp1gUtX2NhBWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JppU2tk9ryMxaonFhX6ovBhyuCP4mpVhVauwYEgnhGqBPkbvxQGCDP8yuTQKEGruPmDJhzAQouh9n35DjYefbaQ",
  "key1": "2nbDCvt4LxTtrpPmf1TywpupG5yZXcGGAtLcHVzwEf17xmV8ZkBbvPucWDkuZBuGr3BD9oCa2ieAQL64CYJX7Hdj",
  "key2": "4hRTMkGc49LMWfb6ZbhX5T2risNkSWQXNfpjA2VDxePnEPV9JsLqLqxYwMqHLhQb372qFBXSWQccVFYNqCX8tKW",
  "key3": "2pPQUco44EUnU8rwHwdhps8TybmdhuQtsHtQ4qmoGH95inZyy11vEXHjEmApxBSVwXVE1vR3DShPeJ2agsK2UEcv",
  "key4": "3pSKDabcCrR3hKEzJntkX9LBk2dDcrxToZDGB2dKtW2KYCo3JKwgnP1vaNrBDVYikvRHw7i551sGoiMvWrZBVAaw",
  "key5": "5UQGewPJtsqNTyJgUmF6R1jifHuJLcB4oKFWGDyBfFPqqB6pRUmxWfqGZXgHXaoUQwhvpqgkgRk714USSaHUWGTR",
  "key6": "5tFE2ob47tkL8VsGyV6riGJDmqgeXKGpMwt3rM1uqykPzgKJhftvjkQuZtn1XTnTwHHipHApo52PyWLuWh7NhoYF",
  "key7": "2WJ4hEBrdYFBsXhp77yap2XuY8bKengdgPhZEM5Fqh8pDNcB1DPzUj7ADQNFhdnKbhtYtEymNUPJevxVvJtmAisv",
  "key8": "4BP2aVviRnN6aWbawbU8GbLMPx128z4nmk1kPUg3Pvb2kKza3mQdQ8wspUdSKGXfasSzY2c9nC6QWRDX1gmhqUBK",
  "key9": "2TJrwTQW9NxAcMagC9Nf5DVAEf78JztcCPs9daCSiuGRjWdyeTJPkBrENz6NgZ85Az3uQvhYiyKNhvDYuqJbtTpb",
  "key10": "3SC1JtJoHKn9Dod1NEf2C5D58bGjYTFrDygecPqXKY549aTQwRLPRr5B6sNy2vXeZzJ6PmUk5GXPyJ9mUwiCdZ7A",
  "key11": "4nKvuCqkfEmfny44yu77tXSKg4zCCwv4HrmEBtVAnHSrmS6Q8ZH9SvtT83szd8kwSPjFrbEAa7mABk68ubxBQKSJ",
  "key12": "4qRZRqwmyX3Q76jydgUkxLQndWiAWzFveah6ccVzv7mdrCNooYngdcPQZYMUbRug1oxw6RXF7S1ZAFjHeS1n1MSX",
  "key13": "2XDrU8Vd7dxtzFueE986WQrzRHboAz9Dh81JU1ME7AtVjnbzSsjK4qyq9KYkDPecfABJ2daxdYcanFWf2rVRQano",
  "key14": "5bWnebTgn22MYVBhDaSrTarvPxLokFkjpARjefdfs4PkVTVRb1U3ZFdMHNcNs6UkXUnNU1edFEfrbZbf1hoSRWow",
  "key15": "2i1x1AXpdGAb54cfxAtPeCNtwmrwHFuGYuaNvWmiexJ6FZQsfBS9i53tv8vskY1SgEvRdBwRWz1vAFq2thbe6CtY",
  "key16": "5v97x7SLY1eCcKb1vGNqEJ4oqqMfw7xX8yrJVPyyCGk32ZQsupCFJT4pfBcAScUr1PxtP34GnU2F3vuCT1FJU12L",
  "key17": "3Mwt4A2KJhkiK9tfoekknm2NsFNAbiV7iwfik7GdY96BFUqNK8PLE3LzsZWGEaNS4FbqtDGMW45PQpNZPUfs2j2H",
  "key18": "4BfUnP4kRUw7GbKEG4KQo9jxkirfGvHicf3FcLYDkPeCWpMt2nRv3iVbLGw1p9FvBVd2PScNdyUAppv4VuL4tUVF",
  "key19": "4yJqfez161YKyQAQi9hKEuU4oCMKTt1PcT37FRAtc3pF8R3s5ik9xuXPh1MgSXxNrXSjon2xGnZ6rFtTsh87NnF1",
  "key20": "28PqvpZdEJHCHHzmSWDtAW8DaMeK9ACy1994u9vrwzGt3iu1RYiy6xEU3jKKikbSSqc9PnHuSbvifFoE5Gt91qZJ",
  "key21": "4z6Hv9k4Y9wE4VsHeURj78qcbWi9U55fJkoQTmrSjPHdfJc4qhyxWqxsbf1Gx7L2esaMvzVwnFmsHQbRd7DcSQsn",
  "key22": "65pRqfC4k5gGqzXPnurb186AkzBTvSCQ3NNodyKcTDHmHmQuB9rDfFE5cDYT7LZB9wPTE2nnAGfkpcKKx1zLQzDb",
  "key23": "4H71jW4TsiNPTGdVYeKvKze5xzRAjmiHkq76fmKkXbJtEopLAZ9z6Jkr5FVUGQeNnjBqh7JhVUaCuoSvcNFfDiFC",
  "key24": "5SDippxu2s9G24M1sFe6V2ayRcDxuSgL9fg3RJHd1nZcHC2AiZwsVZrioFNvmAb5p9tUXJazFR4uLprYFFiBV9HU",
  "key25": "3d2kJDnmHnf3WzGz2uCe9ULsDEJ1yR2Jexsj6fio84yn2x5hxdisnHvEKRyFWFzF85TnqvndLSJQ7Hh2dXtXQUiT",
  "key26": "5vNGzYX3HH6nAYeNUyVfL2Ukxs1KVYopeAfqn5Wwvha6WKia8FPsuzYCmuUxZSPVNcdAhFphCukkty1p2kYPq6rE",
  "key27": "4Xbf9HYeZq69Csek1BCo5ipgacb5zEV44qW2pm79W4GzgeRS5KCs6nhf5VtEe8KDsKWcXzghojyeC2rx4tfgUjc3",
  "key28": "2iHXmX25hgqrzqYSuXMt2sbk4nLZLJTYTd2uYdt67asUSwvmuhKwyDDJniADtfVad4LaVrnjATStJdnJehNqwqeE",
  "key29": "q7wcGA4PqopnX9VG2otPLqiatrkvE76cFCvFQ9fqx5qBxjYbi3UfTmuThj6QPZfspNa8pKRdyocwwatqwdUdEBX",
  "key30": "5BNrCRCETGxAEQcHb8mzHNPZEEN2z5iJGcgyEWBTVcuoVL72Q8RZRZmVRoLMpL6w76KXVpJ5Vh8mzWGtFimRFbvp",
  "key31": "Lk3Q2BABhFCGR9P5hGaHHc3XyhczHNDk5rXovZjmpfAL62nbfnJErLEpi5n8q8A4oRtTKNwEx3Rr6sAk2PXWvrQ",
  "key32": "f83kkaH8ZHksuVLFSS6if4tHK9BRnvPukw4CmeArrNpuCHyq3vC13JCFydyFqcTof7BotRQLY9YKi9VpxruNALF",
  "key33": "4qxVNYhRHaVpdH2GHEDj3FJtqFERhvRxF4MCYyNP9d82bG7T4Um1uS3Er6rXkdRXKhAU2Hfh68rwD5k8Ca7xtj6D",
  "key34": "3x7K4JNfiaRf4fcV4MAhyTYjJuXwNU34YzBQgv5FreGaKs3m1CdqXmrA4MbNn4ooTsQnR1gNAFxWadEXJz2DV5H8",
  "key35": "4UJbTVCX9NMj9cDdFdTXN36JApr6zXogybELgTkM1aQ43XUC4iY2gJEPopsumCgvorm7WTd9EXZ6UB987KBXB1u3",
  "key36": "4Xvm8fSrwfpj6Y6KZSg8poFCnzNpAKwPmRe8MDSGe6Wn568TFD6xodtk2uZu3Dcj2rBi4qUUTPSeHSHnCbpxCtRa",
  "key37": "2qLAQrq2NVjsej4dFHmfdCLQZbUwXAEknbrDcixX1KYnZPXTbSwiucAhDe7PqkNghJonP4oCHiVQ6EwGmQxo3fxV",
  "key38": "4FicrFrNG5f4uUhbqfb8Dkh3m2kcQ8jshNZVeN6FZ8L8KnMYjQUo8mJ6ZT6mDvqmLXcfzeUDvmRLL7HnxBtppZJp",
  "key39": "5WNvQzq643wjSV6HzBdpGmqece4hLz5oJx5RVrhdD7kit1NjKADPxUHsp3EFmMweomzoetiLcfrAde28zCHmsxY3",
  "key40": "judTxZ5NwtnzAMzpfgb95iyo64mcL1LnHSQEUCyVtjKQZBekVbQGbkQGWZ6Z3qQ4RKGH7KxZ2cSN7qhZrSFEyqV",
  "key41": "5euWFkiP8xiSi6mhGsw7AayrZtypi4KdBP6F7VB9iFj9Nr7Zvb1WKu366mmRdcSW1cqpdz68MjWgGonT6UBgPSbg",
  "key42": "59D1fnrv8xx9ayvsCzGTnCc1hSVhbRiBP2PqPmidqwsh21AYtJ8RkfUyyeVkb2W9dq6YCYDQfiNcj7xCPtqm4cmF",
  "key43": "3tf4VorZK5sS7QFQ3rCTTZU5TihNiDbPDqoxbKvCRhY673eATqtN9AKsT8h45dXiJBhmViigw1tcK8r5VVrQm1K6",
  "key44": "UqZpZvUGbxoDo6hZxB9MDjyZVHSntvSTAEhRoskUGYP7AFi3AxrnaXy7LrcunnKaCZBznbvKp887Y6NU9rePZ7n",
  "key45": "2n19dd6ijkAn5YB7XEx2aBExjTd6P6ujUCaumWpj8DPidiLgjjVoFpZaCz5gkWwfUQNVxfwxm4mQ9aFK8rhmRuLj",
  "key46": "BXNzA2bE2CDYpnWVpjPRYSwThTusCr9Cxn2hhmbtNMmydokr1gE4URvhNy46MXyVKJAw2k5ErVhDEV3NmHQySgb",
  "key47": "4vq4VHzT3L83EirFpu4qUvQN5Wssm4uKWWadhBEpaouzE6uE9fp2BsM1XBR5pX3jA6zL3P9G4BPGGtEb5DwNE97Y"
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
