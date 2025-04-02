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
    "4NJvtku3E7Cvbtess59XTq6JJ5yYrSkk5aTaas1zep7zac2Fkc3VpYMAqN3bFEt5eNXYNEA86YZPrpZQPCoZcdZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cEYChiMYozG2NpL6gUrHwhXRm94uFo7qbT9GoQC8BBg52L5TzHqWPiVxzXZHsgFc4wGs1vv6jQgPkEA6cTDehcY",
  "key1": "5ArzNWpibyVGcSEVWJNoFUAYoFzR48HuZT88mtuBFv9yMvQirKUNXjwtzkbbiUNeHsRDFkxphM2Kf237ExAMBgL2",
  "key2": "29G5581HjnPkspgj8sXLTTEEcgtAMF1tKuZEdwTMMkQBnhE5RnN2DV3YySBkHkaeie16drAsPDtTuSiRzLSR4pcM",
  "key3": "126HHbexEMPpDb7xWxSCMvjsgYPDHDpfkDdBscY28FhcAmfmNkypRpJrfWw4fJKCEb5cJbJbQoUMGLk7sDJhx82V",
  "key4": "gTVpx3cmQvjWTedjjN3MegvPguhPyRVHTbjZGCvSQLtJXEek1YJvn4U9ezsaEuqpMgJXVkN4jkZgsaDoG4HUSjs",
  "key5": "5Cp1RGVYhpUfek9CYeG2Ztg8PDS8BBZspcSvALmEKKfjqiFLUYZFgYYuWoDKHXb3KxqKd9pAVQV9pjg28uQz2jzS",
  "key6": "2y9aWiLdGEZUZpXfbGXpCKShUg6NVpK7kDKDxTkgUxUhNrrEbfA7D76jabYG3tgoGRMUG9KQSEFnFjyykbC6FUU2",
  "key7": "54qrQWf34ZAXYFKd4Zu6F9LoD26FU3d1NajSs8R1q3toY5DdyTjeDxsXYznAEqqWbXKZeBGvw3pKfhD5LgPtNMto",
  "key8": "3fyZoNQvtwYUBM1A47AmuJQEXxgF8PrmmkKgm31GBh2zyaPoVfary9u3naudhMEJ7j8Q1hMTTNRFawADYVWSBswu",
  "key9": "4pv4kYiQLoxaqXwPQNgNxctoegKkDuEno4GMk6nm3k3HT997jUDBPmrCr8AhxnMxthAT8vgAfdF4YQ7DBrnNApJo",
  "key10": "kmUvV9kTDD9W97SbWSG1XSUca4kNqLkrFTZdvtAdp2k4iCJ5t3rA2ZQq78TgV3uxMzVbDcvWv5uDx4rQ4HPu3Nw",
  "key11": "4Ez8aLyLeo1HswmMhcn1hwZmz2grbDLh2PzP8XmSMS6hsMBGtcAZVSfX6c1aPzG4ZLENaczJscNAVoWu58ACSAoV",
  "key12": "2mmQq6VbPXQ11whKt2qKJubkyuEETJrd5nCK8G95sHSHDS9VpQusaX54rc6EyXbFKNUuhztiHuBZRmqaBxWZe7Vs",
  "key13": "3vayhWXm7Ainmm4cNLrwJF29ooWt8VTKdtYZYsDbmdhdL776ESZg8rHCG42VJCKS7jsDXAM5rWiTVBksRBiSnCEm",
  "key14": "5oeHcUaj1MsRD6UorkVZTmeG5mVnoWnDCr73iEaofZsDV35t4NeRV2LLQaFDv7zzaKFHh1Gn676GUnEP72CEbwL7",
  "key15": "52Ra7agVZDm9PXNJexFfjD8bmxP6dyt3TJHZNQppeuFuoG62YLEWF5QbcRSob3SiziXphk2YEi6S6AiKmsmRcud3",
  "key16": "2tmFutbw1LDpJPsgthWeZhTgo5x95vi648D9SuxpwdLWSyPauwfGb7W9sfHmLapRUrB9xD44W8Yy3DYKTMC7VcpQ",
  "key17": "3N3692jZPXsn5uiPVnsm7jyYztePGk4TJEPttEnkVjSJCbamzgpVsb1aG9DEHpNX42JeCj7bd7ygiF5JSZUDPVSJ",
  "key18": "2FbThHUt2CXVA9dbHP3TgtrvRDB1WWTfXhgTLDx2DSq86CWWFvrJ5gVzYbYrvmtya42NEsPvcA9RXDbgPfwckQE3",
  "key19": "4iTDinJ1UJCPaQBng2qXzWpMyivjiSFBEnCUeV6y9JRtdTQuNqHZ4hUxQP6iEJLWZf2WGBwPEBYnbKDKuAutZ7JF",
  "key20": "3BYLNpE1XqKdsou3o1MVqF2mm56wra6WDPe7ieFfrw5sHBeEbtE3b815gegKQdxuF6RrC4RbhUJGv9qeapSxPUyo",
  "key21": "5kRELcckdw6EUfY7jCGUy1X7RUatXFKkioeLLhuoPnRdCFZ3Z2Q3G96a4zg9fLDwerNYDhJvTNECymV2aLHXfkp9",
  "key22": "ct66svfusvyBaC7ESMrn6R2QZggeu3sQgZoUKNBavmpBdJ2WWAX52BLMEDT85su8zawiaZ9GmhfrQ4tKXcra7nx",
  "key23": "2m7YvkfCioVRzz1sXk3DiHiovTtYTSgH8y9mkwg1QQ7JzJKxZYHoF9uZJSBjD9TnhX3dhimdZ3rTZJ3tqz6d9uRA",
  "key24": "5G75dUvtjE3YGN1pxPfDaj6SF5WXDhCf7ZY7V22V5jAgn7vukZ3zAR6RfzZs1hxhQr2KLe1fuDs9FC432zdpiQmX",
  "key25": "UEMteQiQ5Crn7Q5PN4oKuQVwwBNXVNbGVfBBkCa3ETK7RyEks52yNRPvPKoiMtte1bCuapi54kA4DSP9fCnqxnC",
  "key26": "4qTYBmftvwdnMCTRaSPDc6yCNYmtnjhr3ri4tehe5RdCAxKmbKS372gBUFvmBcVLf59Mc13cB7Etfj6HYhJNK9ie",
  "key27": "34bT3kJTMNdcFc13jVyAv1La7rYfjsx5zyjimZyKoSnyybzeAB2S1gjfKu7EgkiMgcHRQ18aezacRDjXGeJvxwvD",
  "key28": "Y2VNZtW2LA8kTxeA53sTAKYKSXQuGRreLNHBBY7qvnRSQUa9Fg18XYwkPsUQLFyuR7EKngKUHXiJxzYcA3SRqAE",
  "key29": "1s8A6qnwYDC1xBsfGb36xsgdv2DaC3CAKvEc3LVjCkTbGX2MoxVQWwFsJRd8A4q4fTYssLUY1ZrESncUE49MPju",
  "key30": "2L9TyRN4bogTuALW5F8rfyHreqWjCK7QHpm6LTBdS2X4c4NvzgJj4kvh1CibkGJSCviByipJ2Y467dvKjB8Wka2X",
  "key31": "3hNSnbCd3weeRYNvXK7Ks6uF35qPQjK4NBEhETd5aHU8rLCt5ZUKop7BiSREpoeXPGPNzNQUULemGk8wgacg78vA",
  "key32": "4uYHBgT6hgoGpivhWBxKiigmrkaZbmdBHknWPgRGxxZHEMMzvEaCh4BV8TgQsWfF5cnmiiRhFWsD14keqpHVyc1h",
  "key33": "5bwSm5K8aMDeE75VxoNj4ef8n92thvk6w43XDBdbhWvMxAeNFkrrmGvUtF1bRJyK6ihBym5HSrjsScw6x8onbFDz"
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
