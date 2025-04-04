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
    "5SF1Z2dDZFBeHXiSZqfbF8bJKgDEpzrtTadwWAcGvPMYMiZJgkhXUq1EhM54Jm6b3XFmGN2q5cv6UfDrXZJ2yodD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bP7V3uqzpfKbvKeDh4UGHuGnnJCMW8a7gwsBrGr9DcUxebRxxUVA7wSP3wDoVBGDmi4F3kUV2KdHkvNHCAhRcpJ",
  "key1": "34L8PMqsD2vUFt9mQbPCvmHFUwFgyHxhB9TfbLwyfd7ewq6UfWPe8BkNxGAtJAdgi8fo6TA6h2LBvxJk2RWDfZWx",
  "key2": "w2F1okCvTApVVTneRaxMoBci4cRV3QcwqncxpyyyDNpzbEK44msojqeXWoLaXVyA8FGD6AywtS3rFAxHJnbFXzb",
  "key3": "gZhgJSAoX1eVg5LttGsYRG8VedKoUvkZjzT7T8HfPSLDuHLa5yZTHZSKg8QMDLW4Ypf5ZA1YiynWB5bNsj4xiLX",
  "key4": "4KUhSA3cBq2GW2BsKmMzkhvK5XYz764vFMLjogeZVpDSWwfKYpRPGi54wiyNFE9fBKvb9ErmPXZcDP9FFQYuBBsE",
  "key5": "4oG17NuVYh8EeKwxAJ7xApScRzfneE2MoeaazAPBwP52HZ7hVVAKF2yuGnfbXoDrwr7Nhb9YxucVwJk4wnXkkWfi",
  "key6": "A39veAbU7crKuCu3eaVSATVembK7u21yf2NwMYmgFGzzot4wr2YUd768KZB2LUJeRfn2FqbVGboKcn7ydoed9AW",
  "key7": "54ncE5vDkZ8VoCiJGK9AyVZFBDua5exv8YYta97nEM17twuazxWPVn3FW61vFhJEEYA5iKmSzzxbpJqqJ1pJ6EX2",
  "key8": "5AoCZNFAA5r2dvDV6u5LW4QnVzbV3nCeta1WDGR1LdGSQWfmUbNiyDVkGRnBkdnfzeaZVE1oRKDdHwEqxE4CPLPB",
  "key9": "58Qw9855pq46SLaVZXnZjYD6AYGR3nVrBAtajCHUdV9FKAMqPDf8PdTEa3D9cbAxpqiCwoabkEzqDgSTTUdUySrG",
  "key10": "5VKFXmHXgh2LtiY57RazYTTM7SFYQQ1h1UKUSBLnzTKjXrWTnjcoF6mS5y7K92AsAW7G78xXhhfnWNhUHDgSQBuf",
  "key11": "2qGuB6aWwDmwaba8nR4t6F6SycpRLPKGxf7X2XkdzjH7QEMbEsDneDj5v7s6QvQQsHR5JHomVeBkb3oZqtnw3XKi",
  "key12": "4XwsnBUv71Kon3zaLRwMpkRhXydxqR6yHYRsryviWHwZS7wgnqJKhjmQe1W5JDXkAzxwV4ATsHUCnXm4YNZucKYe",
  "key13": "4H3ZsY3jcunhd5ybapExZC4pKyfntkSXVHAiwESN75a6cWbsAKAxSnFcSHek7zanqzXfhzzevhZuFc2uMzUqR3vd",
  "key14": "3r2ipXfZkSHDhAJu6mQ1o9BarmP2yvEfj9unKPUEqJGfh4qcu5GGQDK26PnHyPYWPunWaaHxMsvP5iphan4nyXyd",
  "key15": "5YErkn8ghPWWHfMvs42WFkBuonN54TKRfQENw27DHgBJuHCHPkZDTr4ygsBtbjcedFwyuGoUNx3qnfoeEkntF6Xm",
  "key16": "4xZt5kuPBtxnKZwanxTTxHDs7Hu7Q5dF9tnGDfULwyezuXtL7x4fzodQ5nh2BeV8RE6PAR1rEmkT2aRbP4ZkP26r",
  "key17": "R1onZSYtxFRSiiAUKniWn5r1sxCJJatVbZp7JURMan8ATYEq9qWaC2TmxnsMgnpZ58qFY26coy3sLmw4Ya3Fgsd",
  "key18": "3NoDgnCYLX3ct4ghHA9b1EGGPRViercJekVKEwbCTTETTr5gynqXy3GHuMRGVzBfhBTN1kRQCHWCXAAm97UitouC",
  "key19": "aTrrvJARanEWR4JqZoGkZJeN3snhbZtFJvuT5W1o5JbjpeUb2f3fmL7m8jaxWkC5MJnLcYPHdsivaAzPktEF6wY",
  "key20": "3vVTMUixwwEZSL5EuuNiSWC1DXpJBMym5M3StdercNvjCoxK7BQpLpGH7QU7oGfPeS1L9fjNeTGgqV1Mmo3oT1jz",
  "key21": "2SzbCaE8rmhVYVSXfuUuoqUo9q65n3TFj7DG9EP9JJpoatqawVzWrdgcZv4oULH9D86p5hCtV4iNiCB5yq4fPc1G",
  "key22": "9qvN88cuuvZawNnCoiKqvxJr72vfsFfJJVcTAX3qz9raiMdtVNPp4YsiiS1ByCmCJHJvUuxZYyquhDCVBxTVUF1",
  "key23": "2TgAvSxw2gCKDPob6yjynvU8FxPwtdGkRCTp2xetBm9DfKcyzY4uVyZZp9N2apwoFEWYuUKfckWLFaWA4DBqVNse",
  "key24": "5LHxofbbSAQHFztgBWs5iEMfxc54CS5qw3xzYg6viXWEN9vmc9bQybjFGVZpgmfBFAMH4GtuiKAgv14iC8vbQxKt",
  "key25": "2Afd4iM2qhDTahFahwk53YpriWSpGkn325WVuJh5HbkFkzuoViynffYFYQu3UD6ykAL2xhRbbJjVgxTgs8vskvPA",
  "key26": "Xaxfx8oVbD457NcioZHtoA7fEpVzBqfSp7TtdFdVFUYZP4XRtqvCbqFqThcyZDst7Ua3MPsNJwoXzgY87BaSQJ6",
  "key27": "3TFjkMhCTDWJKuwMDeqBNcTCX8MkLM6Kp8q1yQTuFzSJbLq5GgLkSCFTuUedimgsApEJHtt6D1biQA5uvpjA5NTo",
  "key28": "3FFoB8BysxZRAZ1szc1kbdx2eckhVbmPEnUAAxSV8YjELwqPHeifiVh4AnKAEqWUaVKLonwd2YMD9JNcZAx4Sira",
  "key29": "41G7zWzVX5fDQW31dQq1CD3Qs7pNCfVvncEjVPpxF4vgW2KBRryXgUitAAnxjS6YoZycytr1oZrxF6JdCxfh3NFj",
  "key30": "4CfeNwym2y7zFdpwwQKvPp9J4E7x1wygmjNTFzaR6E8kzJyabF8rFux4jM4YnX52pm5Aaz1Fyaot8Dgdbb8ZoWpJ",
  "key31": "gmNTfnPC12w68apeSNRNat5A1brG9q6CMtVHVVBHkoWv6ByNFXromrXaRWB7W7AJ5qhLDsppUQ5px61j6457fzn",
  "key32": "5hLsnPHChUkjaXgVQWah6LXcENuUqyrzkG4rPYBiH59Kxaseqgf43GG6HteNgmBrauMnitUrre7jDsmax8NJGUMq",
  "key33": "5QREhAv7GLR7AaZgC8AneHbt4dCqjdBakB8LE3mnL85EP4v2uPP8kox8Vd2HHBVTQkAhbyn5g5ny8poQuxJAnHi7",
  "key34": "5Nj8cu9Ta1Li3mi52b55PAd6oeEC5A5MbyPgsL5Ea1nZX7pYKsLWzjf6eA6tEBXr9p675Tsc34pFcMW6qSBAmF5K",
  "key35": "3x9MnvMuLeTYswFSzdUVD3xqmrixAhjjK4r4ydkYwa27SAYgBtrqrVCEpxdtYzbjE1mzFHTXmco85YdMPU6JNZ6z",
  "key36": "2ufBExEd3ro1tntXmzExXRdc45WEpXrkXxjx1ojEViaZcW5EiVgPFVLLjtUfzNaixLS5TwvE7nMaxnRvu1Ux9rn1",
  "key37": "4JHC51t6Ac5CdPb2FCw4GMdi31EovBKSV8pwiP6d3NVjR4zModn9AiCLMuTLH6mdsWJ8MH81jMdma3ersDUFqG5t",
  "key38": "2jwi6vj3SrQEx12ayWA7WnoTZnawdjeg7w57jK1D2cW7PbuYBawVqWwdk8LDPRVaFbD19aU7P32DsupsXFHwHgH9",
  "key39": "519EgkKcyfDnoXEi3keCZu8YGnm1YJSdHzgtSyGrQkZHEPNguBXALb5dnuH4u3HSaBBeaAkCiNGzUTFwqBoJaAM9"
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
