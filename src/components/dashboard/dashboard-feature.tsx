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
    "EZiW5ir3YW7m7uHHbz3m2jUiwoRrdpNW9AwaehSyZcia6VA3hSFWb2szw4bkCHLfHQJYWf73bps7xQ83abD5Y4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAZX37DJFTU6oMYYqXNABepGw9JA7MPXdhMFaYWBkCPiv5gafMuDRPh1Fwdu4rMu4mv8t6oB9J65NY4QXEnVT3J",
  "key1": "2R6eu62gLVHLUuDqphtYWzhdtsmtndxm7pYDhMYE13SRhsA1x7YbRppp34THjjhpnkfbMx6wW5dFLT1rgGwHemfw",
  "key2": "Qvb7vuGGyy4ibiCQdKSunyaEPEmFGfWHix1o3ZZLpRLq1TPstNkBZT2aS4FmgNuRfcxGqE4Kngw8CnTybaNQfQV",
  "key3": "59nn1NoAuMkWiGogYDbz2y6GGBMMfuECVgPpywEs1av6SBwzYboPybqBvSe1EMBLozm7jaiSquBB5kQfsLjkr7Bh",
  "key4": "24nEJDE2rFmRY9KW1yh9LWy2aocqWEWViLZHeiohG9WAvRE2yyr9PNM2oLu32dnRyXAatZWGgBsUHcQkzwVZt1BX",
  "key5": "usUCVZaoG2UPpdcrAhwQvzsHNCMFwAvbCJBTzFGedvpzF4jvhjboovohYUrirgKQUNPa2x3CLHJVzUK7TfWfD4U",
  "key6": "4zNQjepwzgSjC8MqunVGYJRoRMYJEkuyVR2jVj7MuAfSszXW1dWS1soAA9vg5uvERqxTeCKNXE74momTWN1c4ZAx",
  "key7": "gu4s9RpzkygbAxtSCBdzkVXz5HGhNH919wqojB736WLJoSNSbDBhiHcEACyFeDrCti1sGCZfC8zNvaXbHiqXV6a",
  "key8": "3pgNAbrYGxM1JsPBuZVPHtz4KQcELDFhTFaLmf9DsqN53oAcHW9wLgjzv8wTpHuV5NMKHq3LU6bvGBkHjDaTjxUP",
  "key9": "Vp3f9WaS6zZjaqaczazkCFAVPrTySRBBSgJpJt6ht1ju3TT5YAUMzbv4oTE5mPJ6pCyEVriaSXiNtDQHUH6cbtk",
  "key10": "5ExCUBgpwyegdaANBqcLKxvLZdeBL439KgPNbTJdwA76yLayYjqvb9KMK1uGsunBUzi1XnSz5e9F5x3FVnZkx4bw",
  "key11": "4UF4jQVRwQY2xvoyMXk3zUGMCJHCVPxLkbAktjf4xJPQpNQAyetfJueHXik3VwdDcSQ87wkzDEDHTUKUSr5vy7PE",
  "key12": "2FwBvygkeYygECosRrPVgRRZ75MHBMDQ6gqEvHxNUiRZYFiHyJXQjSq4BEVKn4UgMW86VhkiTcRzqqfWqvAsmvdQ",
  "key13": "24zjdnNCmJ3aQ9MZG6Dju2EAEA62ZN6FC84hcH253m8t5QGUS16HMrez2GYgWt9DxXBCRrsedhA9a6w75Pczz1HJ",
  "key14": "3EYjhR4xTu7iWVRc69R7qibvX5vLeu7mEX2B9ooGaZE4yzXLGi52bpb7UAwUyss7sQWX4CGRfRFWVVJfmr8SYRAQ",
  "key15": "3v9s1in2oRiJ2VFPs8MnU7o49H1bHeyfUeAf2hjFUjjNrzZDwyU2m9w88Jc2tSic5FSgtrMcuK9N7H8JShwQyZx6",
  "key16": "YumCuQLFzeFyAtLZn2NtEYKGyBnqRF3JHHwyYC3xyPY1HNG6AuPobyVB6cHHZUJHdeBZrma73sHC5zupe9m7ApU",
  "key17": "3seHRc4nSgZPJTSxhEYCbsynMKii6L3btC2UmGpa8TnZLJpf8VzpR3npSPNysBQJu3FdjrBcJCsnHjzWkb6pWiEH",
  "key18": "3t5BpHJgCDTCa48gaPAHEXRoYSB31MUp9RvHuKWy7Gagk3BzjeUhXSJ7cxbt6wBPUhwwaQmyXZTAeDMFnd8D4nUP",
  "key19": "rQYescVbAq8mV8nVkZtCpdn7fwWySEDDFUp7aLPdHE1RrrmTfJjpH3J9ThtDrzuqPPHBqz7asLoE5CUfnCojS3C",
  "key20": "2hq4EUSdnxZFhXfjoVccKCk9EUNnkcfnJ5aG7QK68tMXPqm3x58hQg6Y3PU5p4yELav76DdxJjtRVtS7z4eHtvti",
  "key21": "2mUbbFooE3TyCASqwtd8iT3NAjE12EuCKiDHB7c8oKjYJZuT9wZAUAtNYe9YoAp2XkFu2QwGx8fpV7hmex9Jazjd",
  "key22": "4UWtHZg3U1j9Rni2N1JhambRCiCX8PgDCkdJAjJdiSr5U4n44Zs7MU1tm7QidhatYkSFS1fqt7qTcSS2Ya4VH34T",
  "key23": "5zonZUFNsGVH7NGcnD9CWBYaa3H13s2kXn9RKXz5JxqvoxiPNAWcnwKsxpzC6Z8oruD4114tmp47vVYCNiM2bRZj",
  "key24": "43MoVveDS2sR8MtcqaiUGGcxBtsRXFCATs6LAvTKW7oce1uVARQyMymuBeP1sMNdHmw2VZdVybmUzRDwu3zfMDZj",
  "key25": "5SiYo2FF3Zv1AxzQkzQ2u2SCH2cB8e2bi2jYfj8rZYcQjTpk9MBmw8WAcVZfbtsc7s9fjQfwJLwxTPxXDH8vKCut",
  "key26": "9vvSHF7bP936JenJSP1xq4nassTfwVE5mfULsFhz7cnLNuvGiX32UqAC4qmzNhqdzxDjmTub43As9Sgn92KqLxX",
  "key27": "2j1DX5WNfkWNm1skHJG4K5CPgJfKyCmRzn2JkJpmaMgeBo5ZCLVMNAVw9WBrdLSu8qzUbBLRgv1QhzBGrkcBbjJ9",
  "key28": "Mk715nvgEvk5bxpTu2AdCqTt9o1QcUKcH2FEy7Xc5hy86VjGLQVkRJ6i8Fozn7yTA1UdtL8h23asztSrGYcbFv1",
  "key29": "2rpQUiSMqMNCpeNgJz2G3CDDaPnmGgaGRjzBeTytBKgKRUwq21m1Qb1nMKtSPH7utJWHz17cPFUfqpQz24bgbFbf",
  "key30": "3jsMgsxPGTXeFCgPXoi4VQX7N2CMBaKzP4bfeLAQJZPY4xFgva11L5tN9Q5c3HXcsbggd4sUKXrBzDN7JqQSLXAQ",
  "key31": "2KrpHWBKie1CKT8uw7wgWvRG4mxBqHUUnBq93ohRWnnVFZG6FsUy75Rz2xSFBf7TXbDQc2pvo89X4CzgPux12Jhs",
  "key32": "SmMCmarxPBrXnSCrGzp95qR2LB2xKUVSVSRHnPnjE1pSBPSczxZDMMbYuzWHtdT6LRp8a1HDLdj6y3t53V58yZ1",
  "key33": "5ftMwzXQ1vWotxgzXTtzD4g77Z1KaYrJQUiXKZZCX7kvDEUSR6VQXKW7JPoECbCMcsEBbsxgE5LMZYjRme1dN4nR",
  "key34": "32x2zsCjMmezdNpUo69svV2SWKzb9jD8edWoqWP2fFG7Yczf18UKszLz1UT8hZcosxTA1wdeWM9CMSjXHedanCp6",
  "key35": "ky1UtwJhBotoAQ6dXZZhboU6V7Faqv57tkrciKNcUZNXJcbDkGRe5Ls6SkMiSsv4JQocMdaA7mxVoPHh7hNNGmC"
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
