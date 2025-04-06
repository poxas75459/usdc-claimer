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
    "4BiAxYi9F9kVb6NqcsptVqs7HN9B4a4LoZyvJSubaAHKDwmpAvgK95bJGAzAcmDqxBmSSft6wT8SHbpaczLrqwpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPUEddZ7ytnqtGBHWUJiHanN1fRsdeGs9vfsQ3YvCFA2wCJ9FUC1TC1GoohnRb3AkdCcupb5vDiSnCjpsG16q1t",
  "key1": "5AVDtNU8Ng5YW5RdYTfXzgfAKUQCqFVVgkohoLkefRhiukMCPChmZgvnXnh3qunnUTtsGuv1KJieW1Ab6NXnJkmF",
  "key2": "5wFiFRx5u1ytkeiM7L9RD1WYp7Pcr28jdqRuKW1C6HBUEU4zTJFWmrvsT9awYmru3FWoGFR4msZzkKy5KQesxfx4",
  "key3": "MNbptYR2p1Py9omFKq5YycdjBUisBxmPogsXmnpARa4shUma3apF4c7wENkEdZHhbGvfrZkg3WrPDc5SuGhUvGS",
  "key4": "43nddCoL5c2eHFYpU5jAAHJ49W3TUL2AP8yhXdcaFu3A6gDnRGH8kv3wf2D862ErRQ7NzJ4Po5i9wdCP9wwKq5vD",
  "key5": "hoNQNYvpY2ZweutHsPmGqVBKsFbmUt1Aqb1rxyPteHsxsqCaz3CoJduREMZEckV1UjsRws5R6xSAfc42enqcHwF",
  "key6": "5aQ1C3EufAnUWZ8dBPzzaRHSxDeUhWoGyzp269qYH47jVKqiTgiPH2LUUX4vUdhY9MKJ4TMbEpCSX2HgFLDx65nS",
  "key7": "2Fnoa7DdVtsPhAr9BvBPeTdTm681EPQ6XmZ3SUYgRZfCRAAcMPi75U6mbVuE3v5P1VoesYyP4A3m9LAAT7eiLeF8",
  "key8": "3ee4VC7JFuv6N8iJb4T4dGpW2dimjnpnVS6ZDY3zsmYkC6GQhP2RvA55QD6satwZ2qWVaiJCaJidXjvxij7M7ii7",
  "key9": "36rhzo31AKmqnuso7ZYHywXMy5GmJ8r65PCQyLZfZG5NTsKrVa5tH7Rir16APN3Ja2SoJSZ5a4KXAwZtKbdpqpyf",
  "key10": "3J4HCERR9gse6JdtATt7BXMn5me7ENfaXXeoSB4zsymM3HN4t6dsPXgfS5ocmcKMqWZMqxPzXHZNgdXDW1qPhCsr",
  "key11": "5e81QYAgHtS5mW7PzyVfQUMhSbLPJ2EuR9nsvkH9sEMrMkkNcaATMkoz8TzyXaUTuusNyjKmuPEZ8wV5wuVYcdLo",
  "key12": "1285juiB2rm9PEDtk1SHDexw9MLxWcTLz2TFXT6eJWbJhunMyzisNhvYVd79V3EsVoR1fmVy3uUShVH1Qno17kY",
  "key13": "3ocrckxFq5nC5QcjZMoLa3UgA8SzPmvVrHaoAsr4r5fZUd9zWcoG8qz8y8SaEguF83TES5WvhVNkWL16k11puZK3",
  "key14": "3xLWGw9ScLkA7yhASMHWyYdNknYjztTfJ7bDt8xUNdgLXd9JVRvxmf1twF6n7drvgLjBRaiscmdnAQr6VXMWne44",
  "key15": "4LiJ4AcYS9vNTaCnYwTa8LJ4Zc6DS7CkApCmyDvqMV1jycNZiGo57nEo2VnkEXHnGXxZXTb8kQxeQrM6zciboieb",
  "key16": "2gu3mmTURTeYMfFsy3ymtkrWJZhPmFBi9u8mCN2Y7PHAUbC7MKjAkaommrpuVaxF5WzXa8FW6J6c7RQQgMBMYiX5",
  "key17": "4qAJUxVH1VHiKT2sL12wdb1d8pWPvHs7RmuGans8z1rWHQzKkSGxLZutjfGeFE3Mig7DbBKuD9utjjh2PWyyWUhw",
  "key18": "3jfyAALQPU9JwKyvRRrnF58ZxMSTcbtx1DkG2SLnLF1p1WzDYXoZSURHYY8aZemUVmVT6UPE4dD7HvJ7CQRUkowp",
  "key19": "3M4P2xp7PKsXg9Y1SW5ppadENusMgzrFCmPvoHoFRzs9RGLPMjkQSp79ABX8apviEoicpPRjWjwmXGGPS4LrZ3z3",
  "key20": "273Z66gFtMK4t7d6t7f8gMotnpcoy4shDQh1bGDW7D2gJKDc3oyqZKJb78BQbtAMQZztokRZCgsBGFmxNMEeW4Ha",
  "key21": "2aiBwQ3KeekGBQrZEzFgtuC66NN6XZpPDsAkXjWiwLNdsAa1gv5LmpXfU83rHov6h8qv6n1hZb9BNem1t5KBoRgX",
  "key22": "2zs6ashEKxKDMHDzB18EPvEu96w6CWwnRSfAiX2Nvn89xRyua813qJzKZRpe3BCJv1iszVwoKPjFnpxVSzYSynGR",
  "key23": "PuvRoZcaKauBuLjRiHDDbmBayWVspNiK4K6TTfk3Sk1gUypcEawxhKev4dyXE7XSQA9YKZb9DFfZ5q4KdAJTvRX",
  "key24": "5nGyuZ73o4tncGQztuN9vftaLy4yTczoT3z3zRQqXqtAzuLBMfXskMWfgewaQfQ2nDc7sMtXmgwDiLnnojKHPEYk",
  "key25": "2cViPx5vcp1X7w1BBEVrbrXAVmR4jv5QxeXbuqLktapugNybK3ZC7WfKcMzNAoqki7qJsPixRfa3SEWQcH9Uod4w",
  "key26": "2cJEsgV8VpkM13X4Ex1ieVSmtvV5K4DCp285bns7g8ns8xe8WgUQJsnygFtmAm8VkR84F1cL91pDXNuVr1Tpwb2M",
  "key27": "35EqqjYPuw5Wj6q4uDboGZeEtAUCaWJVnNPyug2Fb8Qg4eiU9rqa8dJbpzvPbPB3cJLyiEq5p8mb1PMWVFwZmU6h",
  "key28": "TdZCGVS15YjX5roAioSSqRcTHcPoK4fUszXjcraaFwukQM9vJLQTorpmxJ7HiFgWnb6U6EFvUcCvraZQqvXzZy3",
  "key29": "3X5EXsu4o9YPcGaSvTB4WeHuCrzbAMwawFidermybr41xgpyaAwjy5qNczDCgeAexWzKLQhtQ7WqCFa4A3Hjhn6X",
  "key30": "3BaKjGFUUgNPG8PwdUcUpS2xiNgNnTVMvxFcyCNCNaSPrPPiE3ERHsxSVPDNbKdE6wNqJpQW5zdWB7Uubfe9yXZJ",
  "key31": "5ze4MzAYhNwZNBzB9mLvSyRLbAQtqRV5gasRj3GakEiLJwxL8QM1uHtN82qTo9hCCwwYH2XQ4DT5KBvvojCSeppV",
  "key32": "EBhf6zDSR4dPR5DvqADnputrV1PGUTcB4Zy9i3tEcZpe1u5QBHrjM3zCcJLCLEgXABDWoFQ4aekVtSagFsXNLFb",
  "key33": "4HiN58ZHJXWEh7EshVzgEFwVa6qE49tHW1n4uHpxXgprcLit7LxA5KXrybzwZeKaAjkyeRGw8YF8LMqp7KBoRdQK",
  "key34": "YNB9mJq5SyrEAKcybA1LLKr1RvV6am5HDVdfyYPrxfDpFxM4FaSyH71ew1dhqQDLrC2p9Y9GpY2FR4Ya7c6p28S",
  "key35": "23TDsL5Nkd3dpo4xnXhmyQrK1K6qCebDPsQTG7iNoefrYpRR94U9c7BrxvN87APtbsyqYVPj2dLQnANsyAE8RHoK",
  "key36": "4S9DZG9UXUGjW27X8hR7FwPq75Sh4z3yrA3pYNX16iVzfM49W5vVtALb4ghckjCMeVrowutpVjPnpjw28tGiQcQv",
  "key37": "5AgSf7xnJDR59V6paC6n4QxK7cZP35hVXWFCnLiofATAq5JRh7KTzm2Xb9Mnzt1jP4xCQk3Yf4oia8AuDNtgMLmS",
  "key38": "5PALaaJ1hJ1f6y1vHUThqM21fPuAv7Smn13GDfspiF7w6duGChpKponX8LxV8xwLzbH8jPksjQna5sHPqvYtcy9e",
  "key39": "2tKueVSrZQ5oVrSxSi2TZpQBTSVRi6pNxhLM31xAavcuqNN3QRHjGriVHFaLeF3aZyY1WF4CuJjco7pxWcBc7Pwo",
  "key40": "ELQzsiUEBtuRPw77spTifokwQB8HAXBYN9TjF8RTJ2m5fsKoZQKVr53yvrGowyZrtNYSMNiieoMpdpow9R3s2mz"
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
