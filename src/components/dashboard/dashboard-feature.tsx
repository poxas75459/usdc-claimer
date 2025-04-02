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
    "ab8ENgvaYNDLgBx1LJMNBTGYJjoESaVGu4AGrT79o4tpGpJqZfAzHUmo7WNDFxqyyBk2nitdWUP7Gz23TpFG4YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMc5uVJ4WaX6u1kF3r2KcXBevgyyxWbrukSbtZB9VG4pVqR3VbSR2NTJdbHWXqmg431FRoQTpCUk33u4kbPS4rF",
  "key1": "fNf3NXBejo9UDHsLKESGYFvX1jPUZ6v9D8WETm2DDejYvujKHt5yifDUdfky4PouoQfYMKdf2cY49AoaKvaeJp2",
  "key2": "2iUpfrJi5ikXtABDeUhfWeVxABq41TMUHLk2abJ1dP2gxiUfQpxrUGZajJvypj8wyFb87oLfVphYWojZvWoD9nbM",
  "key3": "Jyk9szeiQpFbi67zKvKZx3PeSZfsRFS9EKRzkYKhSjG5dMZnr4tiEJhYizUhjWNHCe2xbdcNQCdPQqp4Kb9DDvp",
  "key4": "59CosrJHU23rMAh8TrbNNgbE2DgznJRygPUS8yvLvA5RZt6wgqSTMDvskCZkrM6ybjdtWLfVyVYBPuLsazZrnU7H",
  "key5": "4n7uA7KtiQsUzaAUMh5ac9UYzBCxkGTh2JdfKRjE7rYkK6AXhHKkyjPHLuSnm9kxYryPR8J7qUDo3b42Zwazraa9",
  "key6": "3AbKPfNKdnJVbim4JgaAFY9ExH8G189AdaqDbrXEEu2PKqCZ7RgjJkKogmX5KYDWbe3t8FjadgFzXdP91Zy3Ei1h",
  "key7": "5rPkZKQBKeRgTKUpf3aPR6C2EzDdGE94SeJBK3Wmf8yv4QS7tTuhvismhybrBFeRz8rFoi85CyRgy7N4x45G2HoU",
  "key8": "57wVceshmmYjfnbBXBU3kwZUxiGenksmnv4ib9WcCWAdWvDrvzMR2Xhe8xWxNrDyWLfoye1HBYRVcno7V8oVR4K8",
  "key9": "XwQzFHvawPAbsu53SxkNRyShyTrS3iFzajnJmN8yzaD38nojSmAoE6LSvTpGx5vNinynAvD3K5D1pJGkduZiSAa",
  "key10": "5HsR6yRg3JTG2YWfJ4fRPtX6nAxyWLYDSp3K3KB8iArNZUqrhzVfabvC5VeKL8fKbBx7a6x18dduxGQdjDFUVcmf",
  "key11": "5p3DF7r2eSk1LVP1VqWEquW6USQdiq9Pr122GoUBDHqR3D24RQ3CuXErpyx7cpesa4bwVBgdJx5y8Fcrx4KjGg2j",
  "key12": "3MXkMwy3DHpEhwrB2kHLCv7HbFwhKpYEtrpPYcGdhitGMwwzUexcKRkkWYcxhvC4Rz4Lt9Sj6bUJo4cC1SxSA6pT",
  "key13": "5YyzY9ikwZfFG3wQBvv7bck1yYaSLDdMmVZLZi4oEd8j3cVmifN4uzVPs3fWZvuH8T8QKZ1guqgTqAmFgie99QpS",
  "key14": "3B9kY6fYv9rA7bQukR7VbUSN2YJdckrbU8ALAue7YJjDhzpSssqEFGR5MPPtcBSmPKgRWrTxN7sa7nriFww1v4F7",
  "key15": "4BZTSbxkE9Wk9dPMCBTxG8KSNr6F2zsGkkVi7XbttgixreJi9RNzMUe6JDegFZv7TNBsiAPxvDRjJbAUtuizodaC",
  "key16": "2cuNSoxvHeTZKSYoX3WZysf1kkdycLokKtUbN6k5nkd97bq9egfL48hbVomRLwjow25tJVEkw9MksVcRC2XsvAcQ",
  "key17": "4CgukkABHBEaUAour7hbcTf6hd9xo8XCH4AGuHrJoS6SRNiPxv1v4C6cWUjrEnAea7srg46FELPyvJDmJPvBR4LS",
  "key18": "2GLmfyDZ3dLQy9ARGT1LBpTArkPm9nmetFoaSpfi9sUKpSJQBYpvaAPK6drrYLA99nBdw8WaPYmvps9Yk7TAp1JB",
  "key19": "2hTaqqrqtetcMsp6SLJ2QySWtsPgNGA5Hh8dMEyZ2JwuDiGsYKabF8GvJS7dLviGh8vmRGtUocRf9oR716jMJmTQ",
  "key20": "5eUKUoDCupCB963E2MZYRMJM6aFcdWn9YrfCdvNpnRucSK1kSAJU4h2Xr3SPnQBHVUZUcrL5QfEXzZYYv7rv54WP",
  "key21": "5LTbcYpHyHK2kG7PPeJfGFed93XekdcFuA5StkQd9GCqb3gHZtzp1wsc52gVokrkvQ8NX12CCXrJPREuCcdBUeiK",
  "key22": "3wLA4E4btMsWibt6WmDKgoAvhvRqQUDAf1tTd8ytTsAVthBMYghvE7U9KYkCWQ4pfroBu4VEgkff5Yzu1j1qg981",
  "key23": "2TDR5mL1XK6qfXGnXYsJunQouWwbYy7qjhAB7QG1krzh46rGMs55PCEbqBYocGTauF49dM8K2jPb1i7RCRsiQVXK",
  "key24": "4rgSPCvzkyxFVoxXtmHHCFhQj2x6SMU3ZpEaTKY38fBg2RP7ijg8LMQ2Fj2TpPgvZgxRpjqTyLw1Vh7zedJjE2g5",
  "key25": "5zgdxcsfhZ9ooVRJEEgavJ1YPSjtH6CM1pFzr7nVrA9nVQx55Aoc6VvQSQpgGDfdFeiJDZeGE3jYEy1hdQdD5veh",
  "key26": "3NpYDvoHa6FhTtCjoPUC1NeaYCCMa4AxP1i8ysV6K26FkU4qJ7DKyYepY5y7SJQCa67HwhGoMVFKz2RuG7HT6qf",
  "key27": "4489ZyMf4kn6UotxtPnNgnSagab9vD9dFZdAztJPmFRFVJGFy8ejbhLBp62YHbLVupz5PjVaAGNQUx5QvVKiasSE",
  "key28": "2QaeRMfTAtA37puzBHXgvfduxoR2hBhgcapk2SRkn9LqMvDBWauDZT5Md2LdFsYQzPg4SbLQTTgJzsJtpz1uVXAv",
  "key29": "4ZCd9GvJgkyYAut2KD7Qg7XpCLEY2Syeicn81MtG2LNdPhmm4Uyc2MRhHTjuJKqaDscTHCGRUHsu1CmvGTSy5cBW",
  "key30": "gbGQKJAbbW8o5T4k2sxYmuu3Q8z6AffoQr4fJKd4xzKwFPUV9YBTy5BWfhxM6s5QgenXdStiodLxQZNf6hC9Uqv",
  "key31": "617i6RnxBW1dWwFvLwg4u7JU6d8jQJVwGXCHv2fhP8K2m5i1UNXxRdJ8ZVwXdWRBtP72stZcm8kpK57K2U4n7nA1",
  "key32": "2V2X3UU9qAm6pGZazvKxJ2xsfF6fLvqwQ8o5AWGxxQdqyM7khqEN14EVpwTb3MAEkoweto1rfG7H3eotK4WQoM3t",
  "key33": "4fytT5ufcdFBhrSRAryj68VUAj5kGCRes9oLEF3MjfTjvuRm7yjt3WDTq9J8Ask97zUeoV2SPXEjcyzntsDHKL4D",
  "key34": "4tCigGkrvu5n3KC7EHip7wskQczyz2NNfkfvPvtTadL1Sstw1o9nZJuTk6LKBHDZykD1scRbG893ndD779Vk5F5E",
  "key35": "2Z1DWDDNVj9JHxog6sSJc3ZWhHLrqhzmqJVgYSbF3c8QDJQhj5p6WzwxowJVQ1qmCp8YFGTqMKxwRPusziGCxhKf",
  "key36": "tYWvyZMsz8GSiKCv9LTQW6xsvwMXBWqyrAq8Hdijg1Tgp8cmWVVjJueTmDx7g9sscvaAaETiMtbnNuKkABpFcVL",
  "key37": "2u3hQkk7BjY56VuPihHtPF1dHpUVzs3e9FjrABLJWEGpPghaLTGgCgZMjHEmAkvCkQ1uQEd3sZXLaT4V3DCeeN9T",
  "key38": "4bCv7WYKs3jotoz9nDY4ocRd8BJgWoFM8ASLNEb8piwEdnd1zkpzCDXQnNvdeeevYA6cp97WUdwk26fveSgq1bfx",
  "key39": "3M99YoPcxSxgpErAtcNbk4MBD5rFMXpb7i8tn8f9pHZks7HX2JW8SeZF88LA54Kw6Gx6dxtv9zXU5gzzm1AnKRQA",
  "key40": "5fqyBq32D3QwxdqNTmLfSKGubhuZMEV4RKEMSxAEXXxE8dH1mTB4aagBhBDNRDKuVxxAoRoouCgkKQ9WDqkFJLrf",
  "key41": "Cubq3cGny4zdB1tPsEgoUs2xwFmbgiPgjBkypLakfBtqaQQ3pwouovA4EUE46m8NKFE8CLYL9n5Eox9qYqncUpH",
  "key42": "3ccRPcAgxrn7HofwVeecum2GQ611uu8PmTPsD1VVcZXWfKioXiwnmgZeAsFePo7eFTwuiE4JABszMwyU65coJaDe",
  "key43": "37u3mgCK6thhj8Bh3FjaRw7Q8JxnKwYEWApybHqUL5Q9MJQSPpcXyufQrgeGyGTqgsCq8DyjR7kedvDsX1hr8mAp"
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
