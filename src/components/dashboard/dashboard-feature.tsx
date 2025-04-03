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
    "67eGgEcU4GiuhiV6wk3yvcaYvJdKqjADqEHQnRSLc5kziU8k6GgQXeSPLg7VZ8d4m19sc9XDmnUf4GPLeRpcGatT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyCudKv7o3yfAPy9GyrGp4rQfRBoV3ytPeLH8YiTjXnV1FcNVtEs5FTwEjHU8GM8FDZmCezu7kYfpDhB24pc8Ea",
  "key1": "7jc7wZEft3j5cJ5y89asWF19KscV7RpTQquwXcbsjrxRjnvP9EpkCgRFzCDxW5b76CyoG4i4JeLSbRSZn7QZD1p",
  "key2": "3hXWz7TUQ8iccNyJJZds2t1PSGnnudGSrNWDu4Mq41Vjv2RYWy7GM4pW3h8YGDyHYkyqRwDha5PShdQqFR1bsetL",
  "key3": "4GRsHKPohBaj37epNddd1VNjjkcxaJFYdyBQemUkkeaNxxm9FLJLHFZF2RWhKPhYLALycAEeKqySBWwuLSouc2Y7",
  "key4": "XyXp2XZho6dgVxpj4FViiHbrhMg6fqZN3DP7zwnCTHC1dqAMoKFSXjTW5wCuddiwETMY7X1iwUxNPL48zXiYskV",
  "key5": "4GpijK2twED38bghwf4tWj2uMzJLEG23se4fW74XJH9AtPiKq21Stf1p1Cg64jtoh4hWY2WtksbppgFXYJAySMk3",
  "key6": "yPoo8Q3RH4vqBajFzbcS41X8zmoSjTgArSHc1wo16SDYPCeaLjjTSZabitU5XZGENEwh6A1Bf2mLWK4Fd1Adp1B",
  "key7": "4MZ3aEtBTkw9NwTWw5B1pQhqjETpm2axzMKrLc5YA1rpYb8vQf95xB8vqBsoMhVJQHJ3xQTT4U2TY3qC7DPgW8qX",
  "key8": "2fYB1SpRP1vSjqF4ZzyxiVGdknrNuw3AoH1i2UYaLpz97nziGkMpaUXdc6nUF7xpDEV4Jh4eecNcjpSC5MDfhHek",
  "key9": "5UpxNEeGnhyqZq1AvDMwsfU1wyeyAdXHCyi767QAc82Fm2fd7Ljf5HwPJ4DeBLgRXPCBrrmptQ76YSeRkwaXW255",
  "key10": "Lz1NiCEZttb8be6gLXZ28yi3kWeXoVnJ9AptNJQGV2BUb1aS5Kg2RYrJyijB3n6YBkADPTpuUyGZVpNoeTNAx2u",
  "key11": "61N33nj6kunBaXN1zgoc4c37mULMp1VxL8ShQd95D1sRB6gQ3Ye2gTGuo6d2tHvRv5sB2WDuTDY7GXQ8Ph9RpAtw",
  "key12": "4o2B4BhqfwGrVrchF8BXB9AFrdRzd2TZHriXNfSRjtdJagukpZ5BqRnwWAbpCeN4xz89VoWohBw81ESRQsCSCveT",
  "key13": "3iniRWH4HtrEpHZzrkhXofqysiBX4WyFh2aJt4Z7fJheL7ESsGBBdJwhJ7fS5gmu9WnvnSjH2MBCCvPAfdFPXW22",
  "key14": "4AEGfFcmKJz7t9XetJkEUnhreWXTaMsRfG4XrwgpxQcte4xJ5oMt5CAV88qUxkRLhMZ9oLSRYoeVMMa6zuFz2DHR",
  "key15": "62fcbUw243914ETdzbMuynbYuwws1VscDfSZfNq4UVVe5PaCKsmNWqwdivxVJGjiXBhoQFAD3wGXbm6HTjbgbbc7",
  "key16": "3JGocaA2JBh591QHLTsqMmEc58mhARSRTGDQAjrdFxpquRSDv7fbByZGyRUsw6P9dU56vLWua7mchEWKmtcaASR6",
  "key17": "dyYZZzzABoD47it4nfgPMyGHd5Dtb3CZP1fEqbR1d3LA7Ksre9LMjkbvyo7QVBomzHSkWLmcu1sXbfceHCVgmm6",
  "key18": "4zQrKKrf5JhJR7us5wq4tcZNwXYDQMKCUfyPAP8vN761iX572mKkAttssMUHy2ZiGX9vKtepUoUwpeio4VYDfK5u",
  "key19": "3SQ9pdKpJ2cbdvHnuKLjj2Kjw5y48TughssZBPuG31mz9o99s1g7bjfs1DBLya4sb25WAb66MwLH7a8JZsKtwPpK",
  "key20": "4DEbuVe81CvbK2LzMQDQdnbjFCLBdHcWsxqghiuLdM7EatUCjnoheUUQm2KVdbv8BrSGMjfr5YZQd8mwZvM2HCQf",
  "key21": "4wnC6qK4X98ER75jUbByR1hFzBRE2assfYgYzqhKyZUZ3uUqUUD8KLyEEuibqjL2vTLFHv4qKMxntET2teSxcc5d",
  "key22": "4FrBhqfF6BogdZTuBFPcBozpMmgYmETJ49G69yQscZGu5Bw56sbwDsEB7xaD2cpjsBGayKkx7UitBgDEctVbkocv",
  "key23": "2xN6tqsvWBNwZFEtBxZjjqMPGzHurUDTBr3xfXPgsaEwc8Heoy5oQGwT4gNyFobhbuhEFKEXxfoQnJ9ZAG5d9AVo",
  "key24": "2gQyvyzchFWBZEaEaZgFgttqBSit9zXBxZCH16B2ZxE9t7bC8JH9r1Ukmf5xa8C3rxLib2DT1XMEUzC39CFnDaL5",
  "key25": "2qMEd7V1TFSJZLAPsZsQU7d1L2EMumbeDq3cs5gh6bQ3HEDYKmGQCYpY1a5tYuPxeQqFHjg2skosR6ve4hQBrhEd",
  "key26": "4C1KT6MTj1GKxdLfP4qeGivrjwdCWJCBH2fMzfhVhJMsDzgDuVTVDxF2RsDcw6tCQN62WBD5EHSSZwPWReJqXhtK",
  "key27": "3Dj2nhXuSGZ4i2aMnyKNod4728CwNSHDvVTeVYs3Gt6yRfKeL75RcNe2yXTtrxF8Z9wdjMvsaAyGgeSq4rwXLhPv",
  "key28": "5PjP6Mir8HNqmGC3xWPc58YMWTeoyfVgcYLmNMYnx6vVhvr6ZcP4jHn4rNe6VJH3F2j2s8tcKZWiyR6jmfcd6uGb",
  "key29": "2n9kwGt6vcKji8AduJcMaFR25swMXbWWNhH4XvvWRQBuS9phmbTmFXFzhErS3Y3FBwkqocsXCXqaF9hQSNkSNDPn",
  "key30": "n8RxNVfEGwa3u6rWsocPgVnE3UfHpLbyQbQtSzWgGZqSP8KWiNsvidWYwvuE4PMVqRimF3VGMHpx3gLH25nfAoY",
  "key31": "3cBXKS3QLv1VQq7RDo4mA5x9LuMFufRMPXSCgAyGhJ2THC5stRSfn6B4a68BQguzkwgKd1eA9uYQhDvAgpWGtm4D",
  "key32": "4JjjKpX1cb8NB96N5qpur3b1XAweDJ81ZR2PZbYZkHxuj3bpiEMhppMN9MwuLJK7G9eZfE3B4jkRyFtVVpGDPzSA",
  "key33": "Ga5bpodRBG5rwfwt7TpRsUS2Na6mn7BJsem4u9k7bQGY7bDnBWY5J5CJ9JgzgCyQUU487hn3DAkVCEv6cg5jw3c",
  "key34": "62njRo6rctN3Rs4ZMyJPTkFKYVXF5uPGstzzpAch37yiaCefaQPJGjMNEikMhNhBUK4hBZQ58hYbtGwaC9Pn7RgG",
  "key35": "5G8CmxULp51tGffRELkQxXRaC4R22c2HU76ycGrExxDVn5HZKCiJQSbNZjFXU1pB6cdbMtCzEyfQoy2gjHXKtM8c",
  "key36": "84CTpPDgjD7HEW89dZi4Gh3wYZ5QZ5JAKk3BVBr42yQ2bVZWwm8jDKU4RvR6udeRoxSuUtiKhomzAJuwYYKRX4S"
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
