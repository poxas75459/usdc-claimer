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
    "5rpYCwpHL3KJRsq6Sbn1dEiiF8TsjQQzDhRhPjv6nDcbetEzZLUpwpQWbPbDGewYUJGAmP8oADQed3VVBoRsUK2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjEUYBNKi1gbeZXArHf9XUWfWQVJTosnShFsTWkA6DDKxBs26ktKBiA8cMiJsimCqtH3SgG7GZajBokXnyha1p2",
  "key1": "3RTUa4eB2pj8NQAhjM9f7ivHk9pbx6mCrWxGvWSGDn31ooyjPc86EUCzeFFwhnTDLMayyo33iu6XdHiEb3xYdnhX",
  "key2": "cQjdVryT6XAjqMQfAWv6uHcvaqeUMwECV7MZRz5eL7XauCvmixkAjWVL7xrEqGHDFzjtLq7qanVHNbBfXx8LvYt",
  "key3": "KGnTrjrfgkcRRaP61VLrCKJsZAYYpbhYCcd3zokj1p4M1GXzkZHYTRLDA6sHb5CgzfGr3a8gVRDQMoxpd1YvSJm",
  "key4": "3QhF7SdhmX5z6TutSCcyhqEEquCY8FKSRYeVCPWNqDtkooaYnoh2r5h7KgCSjzafCpYhY8Z6T9V9Ca2biqbMWvyV",
  "key5": "2CrDQGSDYT9bxdDX6UHm6qNVQEFHxoqVCU39iHmswwgUHPc8ZnuHFg5pbzLwYxermmULjPArEtE6xUzYPQVBBLus",
  "key6": "32ikYDAQDis9BpgrDt9CYPAkA5wHB5J6nELPmbNDp9ohTp3zmsrYcEKGCgaVmLYpsDWjSkpYciFUivYwBZHQPV51",
  "key7": "2R6UGusJqMErQKioTGDNFYRgwgZyvuoGuoeiNpDjQPDs4qg3fmS9w2aC3z6773pAU7rRqJetuKWxumrjgDPLaADT",
  "key8": "5okmJYax6NbL51zkeCVbKs2cUu82tgZSGhc4WmPPgvZ2qjY71WqpQqJDFWX7HP6qgVBx5o7S9jZeHUisuvsAFTGm",
  "key9": "5XfMdtYaxUwd6oaKnKB3wTeGwLFjzvn1KSRsJbvuUg6psYKqdvzKy5gud5ZtFZChnqCwMKCCNgbqU3ETse4wyTn6",
  "key10": "3AQTMASQDwYhG1UQFcCdaa2vjLo8sDRNYU5WBzTxjy5jJEcgs4yUZEdBshYFDEHujTS1VK3gALRFGCpREe29Xfnu",
  "key11": "4dxTdoZHz9THMzunUu4sB8hapEwCAng6C3PH3preGcRrmAbJBLngHWKm7onX1Ff5xoyA3QZfgiB2yEF2qk8wNVHh",
  "key12": "5m9QA8V1NsmWh1pkMTZJxgWMrkLzuYgP19pazqp25Aonk5bs7J7yyhsrDYLUmhYQmGcYF6o257j3CScZf9AUisK1",
  "key13": "5Tx5pd3L3zE4UTRx8rrj4PaCtbqjq6s3u6fCxM7AWbGPYZrkftcwNtNycuKifdVeRyxNei2LYq8YeuMg1jeZWH7C",
  "key14": "2FR8AautkPNcpoAvTPQCNQSejGGBCxhnMHf57qNyT3NnATxiijNTXSym5govZx8vxqJZ9pnktF1yhcNdGeMMxLU8",
  "key15": "1jzBhgDUWLxJKf1xbeEjHSewbDNxWUanDtEZFkBdTmie2PuZu8zaXvzMNV4kR1xzwcRHKGMf3c281NS99pJJyfm",
  "key16": "49jHx8n45WSMEn7JREHCUWoh8rxPKSiTV7XMtC3nLy8C2UFLiwPPEPMmoUHUgWNeWHUeYowAe7ineBiABURVFpHD",
  "key17": "5r7PWmq7yt2Ewr4z9oUtPFs93dF8VWmTAPaV8dgVHSi3rL2SEyHFc8Y9GqBEkc6UGkTyCcmfoon1iCbGVHzxHy2C",
  "key18": "3aDq3Z1ar75nVpFNtue4Mr7zw2ixFPSDKsgpuF1p3rL3NEe4ETjVTt67tqbu5VfPYPc32kSzaC5n2TDYd62aUte2",
  "key19": "Uuj7hTcWxYNxKJSJ66ARdwTYUh8Tef8qkV6x8wibo7iJSRw7FBbVbnsh1KyvcpsE9LwDqAhQoZh1CgTpZ5D1tGv",
  "key20": "3yUpTTwByZQMU1afrfK9CDdZRvbsSCKtLWS4PfNnjfh8GHpD1rCqcVdswEvzBdGFrn5aNxL6hRUprPvuPHD9TMt4",
  "key21": "5Fskrg48vWPDJj2EjWpoK4rr8EmJJwNaRHgLPGDoegbWAEuGVm42seFhpUAiQfT3ZnesS9NeRDPWgPqZAwCduWYZ",
  "key22": "2SUyxUZRH7AQoX7DBmhz1Ca8TUYVSmNBpFNQHcH3TQYpdfF8LU5xiyPxazGTJWKzXo5hjV9znLfbdNiiQM6brbcX",
  "key23": "4z9rTxW4ZJQ9YZgU92ANn92ASsXAZYLmATExWFduzvnCHda1AJ5Wf7Z1sBPRV4obrNnT9Tstey1BuGicYsGF9m6y",
  "key24": "5agvCdx1vRdHtNnmE95ebwyFdpu1cLjuoKEX2XbzqyJ2Be8an54c3vs23bPCNBpiG7za49F62k1qJPsUGbsMLndJ",
  "key25": "3TpzrEPaCRGqt3uHMij3VaQ9fzQYoGyBiA8jU9pWtU2SkoNtnLc1gmM7iRFvJNk3YsF6sTMWxmcRZ7ZxSL7wUJhv"
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
