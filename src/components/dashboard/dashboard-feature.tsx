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
    "PgmziPzmmVChUVXwmufKe1dzABvXNGhUVhmXmLmTCGUNiDhmG6yZiczS7iuXnrwoZfPLp88fcb84sTmAUTF8PBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqwEU9WDoSEFjryQKFEZJfDEb7cK5NJJK4TpWaUXiarQb2gcMa9NfqXzqnSb4towNFXazr8yCTAbXkig2nf8Zny",
  "key1": "2PjSxoEk9z18raM9mFMTu9u3LkjZBHPtNCJKCUHuEmu2RgkxfhaBnUvdiTFjS5oTdenvZjWLmyUn8XG1VHWKM7DN",
  "key2": "392V8VoN5Jxx5sWZtfzJHQsD53E2YuuD4tfUnAhSqojyLVnKpgGk5i3fffWPrvQSptLDrvK93Wa8eroPY5xR2G1j",
  "key3": "2UyApF8JAusjeAxu2hReUpw5iiJVfdXArXSNJW2gadHmHh6uA24uBYp8pcToe95iTHmbrxCi1LezoYmCf552V2DW",
  "key4": "2QYTofhZhmJdGERSsLY6m5jtvbXBEkjiPng9speyNxqYqahGSCUmEZiH9pa7pQYmgPjHheMw8NnXQxGfHANbjUdo",
  "key5": "3cGb5BbkdzNpv56dW5d9TUxaxiY1PH3omjkBNLseuSXDdioN5WkzNyaTRhRXMVAAibmQaTpRuA7SQhZER2DGcmST",
  "key6": "3yoNr3HE2PGiRexxymPdjni3hnr8pwPPCMtKJKcmWUnSDRUZcJJL3TEtUC6fRiGoJHUJG8H3qRNWmdJFTYinxuAo",
  "key7": "5fMCNMDmYR3gTPi8nNAft8T22QyyNsHYAKQA2B2Pne8gAaCyQ1WK9UUNZSZeBf9X39oxH5YVNY5aa4Cjfh4r9Yfx",
  "key8": "5kSGZC6T7wu3wd96Y2zkBEh8B66GJrai3cSctry1czdKv7N9oVsWTQTtacSwPa9V83e4Wa61iGWnuFoAXvsRz8Jf",
  "key9": "FKXULtSqHYBZhL4cjjdLEcbvtvzC3zELZAB5Ut4MuJ9zpKrCRoaeYvEKtQbpimX4kjCFaf8JfJ9MjnKNJHpXeze",
  "key10": "3U2HT9mSJQeis4P7Tjpb2Gmm1dB4PSYDTX8fHkZn6g7wvVaja7rHEJRfVWgoJ4PcEFXNQ6woSHfFyMLZo4YpcNHm",
  "key11": "3PZd4jTpjoech9tmgG7pfgRQvmT9DcCznHer1WAVh2u5qcpSoRAAfvvbDbQJv1Ht7vXJRKTZUN9xfwfGT6ZKX3ok",
  "key12": "57uSnfx7Z5JJsdKZacH8nWV8zQoH4cvnLNY9KDkVx4Ah8ewRgwgdbBG825tdxHkdvdpF8hKuYRD2T3XbvEs4Y67a",
  "key13": "hizMib7oxDpgm2593dtA1tQeLB2Qi9A4Lr7WmwfF8rgS2zcnAy4t297WbyRjJ5wtJUB8u31TT18q2Cuf6FS69M7",
  "key14": "4ztzD6ZoN9GgdEB9oqYs8TKWLphfK5BcJ9Q8dkNZ9iS3mLztwQXGhuuWUpCspM1JaBq2iUWZvjPoDvsavq48yYqH",
  "key15": "Qyov81eqdTwiifyfdtrePNWQvMAHM3V9ZuY9dyS5VXDn6X2ycNVEVRzZSH2PE9CbAADBhGwUFXsSJEs5Asow7Bu",
  "key16": "4U1TrgEyzJkN2CuGdj9vMbfgZJigHJXyV4UznSfzrsYVvomCVaC3yrcbEUYDi4T5EhrurXXMogqNFtqtdAiXdAdg",
  "key17": "2fY8gM1pfBf4EqWQcjxFNbLiCustU8zveqJGwfHiQ1wBnuDTvDrmHBBj42rpDh4CWLAPjzECYadEu7WqHKRDfD18",
  "key18": "btLqDm1D1QZBNkgUUXyZS4EvbhN99Lm3HwGYBmdDEW4KEXejnu6yebCaycyJngXUu4x8mKCvWqkb4LanMh6ijeq",
  "key19": "4sfzjk1v41RKmxZNX1MnBdV3rasEYahKV9dgaX295Uk5Tv2uSyyfjqSW7CEtE6BeHeWdr3QV12MVMuXx1UUX43ZB",
  "key20": "5ZMsjmHVFh9tKX1TLrXAy1CB2B5wjAyBzh57auiQca7Dhc4ueWyFZbGatzmmzdw7eF4Vh2ptaFKfqYABe8tVo3vx",
  "key21": "2LW4mLpmDEo9ZvhRN8vFVE2rftTGe6S5a33pgxoGuQHUju5UFJKN3FaeZC6zP3fstdApamUHtJzkudAy2o6ktWdX",
  "key22": "2Up51c6NxFrLa8DgQTfkTHhWSa1dFx3hsuKRBgz2LUcWvw1NEvKiZw9SUtZ8CwWoxYspj7vCWNupGHRP2KPLjVdM",
  "key23": "8jGuRBPBaX6SLwtdBreHfCh6a75iaVnxNgc9tUXWLKpfc5AV4wLzQSDMJ4My8T6uo6xBDJE5FrJEP949AFe84V2",
  "key24": "5194VK7bGoAiD8mJY2S4XpuKUHZfbCCEbfuDDoHvknMaXvMNNujQve7GXhnNTkgs3jtUQMNbQQZAgbHNdSTLdBjH",
  "key25": "5tUSg3R6VdUmhmk38AvTA6oH1kEFNkb9PE4QKW5CwHZ7QSxmgF7WQiN4GTTp53AtSHJ88GXfat3P21gtdMdQ58LM",
  "key26": "5vLxvJeCHgYathuFqwmxNWh3ELqqqd3Ct6NGeasViA9fHorBE12dM6uG5znh75Mz3TAkTUdUCtdne5t5bCrqZifV",
  "key27": "3FpDrNM8JfgiDH2zxXuG8FyCjCztwFw2Y1ABgvyntX8tjTvrDjjLq21MoiDeUAudHe1t4ydgwxJ6MaoFtrMMu5Gv",
  "key28": "3kgopzDgtmuks5zqkxX4bru51gsHtXJfa2vP695AhzjqszKBAtq4u2SjHMWZ7Pk3TvqVqGsPE5jnfJsfMCWNYa4S"
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
