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
    "22AnkBTQHYP1Q1onBGqUwRzxghT2ibtxJ1b8feX92PbTL5emrTmeuni6ed3eaFXE4AoBaXLyjAnM41rDh6VihqSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CZub8FZRQ5khws27WMNjtuZU9czRYL1sYa968DCDRsB9voK7zeN9LfuJtEsfq5HxpnuPP1Qf3notnXaNu8g3zZ",
  "key1": "2Q8jS6UuQVXXYNfoMMxWMmLekvGwor3G2RSNhKPQeMFLuTkLWcdR7shBXssvkMZnyvnC8VtnfEuZSCSNW2HtwHfo",
  "key2": "124hCJxxMKUqnAxw811dEj3J38t94vyZKtxmoDcyHiGfVW8HPZjfdvbfTzW3vtnse8tCyWt2zUdYKHPzk9hZiJ5a",
  "key3": "x4z6EQiyR1UxFoppG2z4ptJigd77vjbtYKuoZ1bGBoC41BDqET6hS4TmAH42e7TmMKYWVQNRNnnLaDwDtvTLAro",
  "key4": "2g3SHAyCR3aqLiGCVMFzytqtDoa5Bs6ZbBSkAJz49TqwLHtbWTh4Rfy2XFteLtN4eH7XEwQT1jijaBY3jdZsmGjk",
  "key5": "24WJHJNJiMDgpno36KeAfnjeppKqSf8Fbfqx1tsLVjoNypNAnwT17az8etWAVxYp4J3ojH2Nn4LHJKcU8W63vVS2",
  "key6": "2f1jGqLMtdYqjEbtaZfyVvMymy32GW7v1CwQ1JiMGHdg1qRkShMXsmyFhVjbWETw9dNrm8j9FCWqhZeYuVZyZkPb",
  "key7": "SG4Yntrk4oFTFF3ADtDnaSnUXfJ9RVfP8eZd9dbKPTJUDVKhqggi46rQNB7VHk9DXQcQHQWJ3VWGixXZtMZqAzW",
  "key8": "ghTGGpUUih5ALQmtzSfgT5qk2LKSp76yBkfn61bHkcvEuad14u55jQCRv94sjWrfYtj9FhWswFZ2BfQ7GTdZpMe",
  "key9": "fM71Hh4m5Hp419EQ4RNs4X8TwW4djh6AtBDTc4zwhUCbL9iqfLSvRPDPSYmhM3c4mezWSmE2qm8rHsT5yitsYRV",
  "key10": "4qvpNQXcK94dXzVfnXYNzCLVhqZWppuUgHmqa3YknPFsgWVbu4F2BqoxsbDonCA3QRKX2W8M4rvhcjxQ2ZrWbmXJ",
  "key11": "447Z4hLa9ZSR9rzNyC7UjikcucuvjDRuJND3oUFAHNyhua4ACZzb6WUmCDe9TY5CyrrYX6UgYz5w1GoHSjj31hdF",
  "key12": "3BpLEKv4bTj9XeQVMrUDBPTbpnZWkHgeDoUeEj6pBdPLoSHuzoAoNViFGHbHSu6eP8zrPsWrHirztAkuNke3MJJd",
  "key13": "s2bdtTXkKvboiBkh4NjKkGtJVCuGN2bJ2Kz2SFrMKN4ke89N1hX5rCTVsL74KSb1T99axMDJz7j6QBAp1cQjzq6",
  "key14": "4L8nj66enqxKRuNu35xwicKNuso2LrsHoNYh3npKSapaddE521isdnRptrcf7Kca8CYtG63T9VCC4mDMfMMPVrSM",
  "key15": "2i2Jwjdhv9mYQZrWYriBrLVK9afNrvuhtJGFXgvpqVBShQSYxzu9vyNGdF99xz92gQVxfov31bbGHCmaxDRsCK4a",
  "key16": "DiT5W3Q7xNJ1A4hU99rgcPcK7gJVrktKA4LFnPVg89Fz4B3wuQPDxeBxdNEnghuFcZAHcEeddHyJSjdd2RkwhMB",
  "key17": "JoFTCuQW9QmzmAgU7uzNVLQVt5cywxERyZHbipr7WTVCbvjZ6xmQPPgK5We6r7LF1Xo73bc6vZ6Qh8RNDV1m8XF",
  "key18": "5ogLBwyPPab67RKgzM32ow1LVCVr8zknTex4SyXVAeCw595mrKxPVWjx2UTcBDHTsYrSDRKv7Vzm8iu5b4PVufAP",
  "key19": "5x24QMyVcnkag1a5gdBGf4ZrJtv8srZHeK7k5u9Wfgn2ohtHaxkWAyQ4EUzWHBUaHMxQxSWnt2wwfj4gtR3Wdnaq",
  "key20": "FNZR99BsoKJbpiSTc3e4rNdCUr3Y2yoemArXEUZRRHE9cbX9zihPwUTArkk4atfVx8HmC1jTE7kW6GikMn2MdcB",
  "key21": "vgn6he6Hr4BymqgpFaKaBYqhcVeErMb2XAc85WSvDAT1P4Sak86uCLGcGZqnK173iCoPMxqLrC5VDJvYRiEJUeS",
  "key22": "2xXehWSZJJpFSbQx92XjzUcmDxCw9XBgaEfis4NSubfX4HegAvVeqLm3aUfJi1UHRU4k5MHLJErKyZsH6nhgnbFs",
  "key23": "4XjjhDaxaiSdFgMa1HhsPdG48FziuKzRjoKXt5a92P2ZxAWicffUCW9sq1XM5E6fPSv1QL99UEPoPiCCUcvu8J71",
  "key24": "3e4PeXAJno1gRCfiyACfRK8X6TnKchWkRargWtQ8e5CZKeSUPy3GVDhQLzCtVoLQEu9k5tR2QQmoyWBhyRPCeHoW",
  "key25": "3et8qnT5SyrbjEzEBGJQx8dtiFFrm3jN6rXAPk5o1QhzMyCwoaPhv3XDiZhBMmBP1csDmTzEbsqamuACALDYBMs2",
  "key26": "3RcMqGKh2y9Xgk3ebKbGoyrbKLVitNZswjLNecbNfady9xX4vxuR6wXhChTinjKFLTcpF2Yma5VhjgLHqPQgDJ2P",
  "key27": "kpwRPPdegrFkw9QSdKrPV6WPA7ZWXPJ7Py9LyUHGf3nUTN1gk4msd7Qi1fBHSMEaaYJiEd6u3tjb2zbV9swCc85",
  "key28": "NimxJZtsasPdh6Fqo2oK9QWsr8CdDEVLpXDtVbhkSJ8jc15XS2kBarD3dzADnz8LmGznL5HqKARMSEBQD1ftWyz",
  "key29": "2KH2AY3tX6Lj2qstz4LUYNSVd9uTJyaUUgqzDyD1wJeuZPpXanwh5scVBeYzQeBHBgMoktSfgJCaE7ypxtyYHA7z",
  "key30": "5iUXPRgypYEZn72iiYkb67tu5GK9zQ6baKAd7HKzqnRjYBBMvF8dW4ynucTYP1cC7vQSLA1gD4eh7HMYWhDm2wYp",
  "key31": "3gzpyG18Y9itmjYCdJyCmabYsWU6pLAtuZJpoXUf4TeNpGvT4sgN9Y5pHhFMr9z5eNnCPLSP7DrfXD2sTWLakTH7",
  "key32": "cXd1UcUvHf95z4mJ1qaLQyEG8G2T6gmQKmEQ5RNuGtu2SNPqcqZSTH9TeU3vMH4ZKgXFDWCx5USkD9VfrzrMbsx",
  "key33": "3gpBxpUJkHpoYG16bknSVxkyWjDHjXq4QxcdwQ7Xf4rpd6hpdqjA6vQFJpjFDTP8vPmkN1QHLaMfPxJkuYCjzzNB",
  "key34": "3Vo5QTdDrSaeCLTx5EhsQYMEZ4ToF4R4tayVnsy6h6iPdQQUZy3w3hYuV7HRAVWGVMVgVhDBnUpLQ6mMzXWFMMd3",
  "key35": "2ickdrkK3RtJnT9qghMZt6u9v2zn2wRfjMUJkQ1yjNeq8k74uq2oYxBkye46w3PWLht22Fi5N2eQbUxybVS1zER3",
  "key36": "CR4Sj8U6qsiNzraauLovrv3iYyJtMN1UZWJLhqC3uqM2kcxHewyk12HGtjh7y9buqZSEgkCL8asHi9cCiANgrWi",
  "key37": "4519e8H6HpH1UXDncDsYiKC1sNMZ4m3f5SWpcTHzJHQ9RFEsLUbukqtTgcbndTkL92m4ER2ASo26wUZDYMswLNV3",
  "key38": "4QsjX4bQrfAQsRKBb3ojd7hSa7PgnyEMJxdxnP6ddQZ78uAiMD4rr88bsPPKUoNcsBtVa5s4BpYJXHE3oR2gHFaw",
  "key39": "2z6Cf9dfiEWei6MkVZPfdd2DM5ABDMkhmQJTpQffMeofeLAsPAGEPJRcRcE8bYRFebTwFaD2NVtQvavd5QrZ4nas",
  "key40": "45YndodXbxkgs249JDQCVGYYwzdaKw3LQ113thLg57wuMe2mberoLRwKEkU9vaW6RuBHm4zDGCdMpTkdhJHYytrc",
  "key41": "4xVnuJeyWV6U24EJQKyGWfCNxKBs67qpyzcKvLqXBFKfSSaQU2kESpe945gBDsSyCUo8mYeEnUov8tJy4hoYrBtP",
  "key42": "5s4wR3rhSt4Q8dLrqV5nv3SVdpKDQBCSM8rxEw1sHV1g9TKt3aVoFTCQ7j79kkHSys3ZVoQagpXe11y3rkdyDJzc"
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
