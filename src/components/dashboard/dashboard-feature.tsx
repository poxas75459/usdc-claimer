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
    "5EVrhGoECBb4k35V7iEKEycALU828QChtkndKgNpoiXCDwo7ExXUyNQAyzrbPKcJii46C1y14w6GPwrJfVepLTgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kk2GrzNkh1NUbotHRQrP9kSAhnruZy28rGGTHYqJDNdXmp8S2634b6EsJ666w16JDfzvGuxGwjgEAMeX1azeUhJ",
  "key1": "3Bi6Q6iHkp9ZRDUdtUw5phA6iXiNHwcf8DfnSTDzdWD2h3dtxUcpnkjACohXRrSEPfwgtBYvoFvDNpdc3eLfSZej",
  "key2": "3qCMSFPFFaCLRjqF53FxMkBQgx77o9iawaXNNA5CBVxsS8aL1JzgLHqcggEQmcZSKbuPppCzasFnsccE9GdXE9tH",
  "key3": "1m7GaTPwMSmYvWqeUVawnc4XzyLrK3LpWg2p1me7RVWtReFV7sYgsjipzFkdq4sudRFjBgDgAQAzASs3m4VdX3r",
  "key4": "48uBmqLK2cuTvvUecx4sKYucmRaHwsuXtJ7FcqzoFJhjtQsPscByi1vX88b77GjMLdzmJacSsgDn2uxwem1y6oAW",
  "key5": "3pEdPGd24L7MsjKffkytxgkzUeMtqWD1UJRyUJNQX1MsxwHfM3sJ9hwVorjQr761BKJ7TqxtTaCAWR888P81Dbjj",
  "key6": "4seKBUtTiqzJyFkLSffqxt1dFb75G7ZLWibQGZLBn8Bob1FwFiNJFA6Sr5aFkz6iw4mn687bzo7YTXG8JkUhWGBh",
  "key7": "374wK9M5Ai9HA198xWMApSkVu9ts9rAtxtEVLSqkZFizbo8pUYfqvQNYxBn8R6PnrZAR1cK4yAwSX2W4DnzHgBUe",
  "key8": "NMiDwfoaRUdkGDa3yaWopMoVFKFYqgt533FuvWTjA9DFprkRj3XbEHuZtoPFoTSd3z4EUrER4BpRtJJvb9Zdr6f",
  "key9": "63tBH2HKpoP8czRfYcofgSTznEJnoW3jTKaLs1J7YNw6CcQ8cM1fUbunSEzLCnv257pERaRdUm6hziKP4RuRrhgY",
  "key10": "5uAfpDecX9tawErbjgczGUUqe3DNdoj8Y9d21FNnfTE2DtgEo4BkmQd5mdqg4b95QLvxsCjogkCtHWwxKAn986KF",
  "key11": "4xjWRRxRkbLGjZBQzETCDjepc5TC5gz6wXiq8Mx1AxYZSxNXCw4BfAVLsKTAh6JnUy4G4MUULxBpWmSQQYCgY56n",
  "key12": "21ksgRHMn8fM6RKVDoXbMML1vD51GMxMroY6FtPMyVwn2QPWLdRzcAqGcTF7CnyVpXTK67PoubQSirkUbEHNyGBX",
  "key13": "7ZV5VkPC2Uvxcstd8XsNKMugqJ6LvmzPZyboPqYr5ZbLBXoeprsZaBnrBBAvhCXLxGNKvTj3dpqaZQELN2AmGF4",
  "key14": "3E2UHFYDF9HrsYbM6hHbTMvKXvLWnbHsRzbfrhmX9uPU4DfzaqvRCyaL3JVLJmDXguzt94PaNJN4jMAQQVh4j5Kz",
  "key15": "62euTe7LusAau5sUKFTmtkebu5a6MUWWdk2Ku5drko6uSwwTV5vmM6kt9SsLqu6STxcfh62MKS4f4hSvX7q1kN6S",
  "key16": "35beFBR18Gw1De3Eq5huax1hCWhM2HAzJMWnkaBwYeZagCdLLnoEHgFPqRgFiLPFSZsW3ektFz1jamiabEiDuc6Q",
  "key17": "4217oeEHU7WqwwrhE9CBQ7rdnGkt93zfLbpe4Qau3EzYwJCBhhCyX5QH5YoMh4L3QtffwBYe3YTato1oAy1bxEh7",
  "key18": "4jELRWV6aAPoWp49QLqmB1DZPwQTTKoRxT6PgBceKCSpLkABGhhK6wzUBafzRn3U4BnhTUqGqwyx1DvYeHhXxxxT",
  "key19": "3RGMkQHUGpuZ3tTs4ThyQ7U4gi9JBXrccV8ekXmWQjxqshMfmMG8gLh43LNsuzitBZEtpVfL2K7z5LDcRD48NX5A",
  "key20": "63s9GGTaoc2psbQGaSpkPJrCqEFkMqKsQojqDjxMiEuoJ9YHiP7zzn5qZWs3FSMPH4rWmysYBxiKfv73ZJqgYniN",
  "key21": "2veCuWQRh7AenBRqGbmX4a6SRrumCf2H3wmi9sNiHKYxYoVjQhFBewAT3FdisSNnrq9Mk66cN9beKXJFJTArCPyw",
  "key22": "44GC6e54KQRBz1CW7WjkXLsy7EaV9QxDftHpaLg2QefNhiPJ7von9GFeURDvbQDUi7ZE8ZjsLrN712fwwDZ97Xgz",
  "key23": "44LpxLMgdBvXjJWHFQje2fGoXPosfEUnuuSg2NARGseq5cxeq5eiFuHtQULNXvbuHrP85twgNHjobc1C6xgSri9F",
  "key24": "4qmLtt5e9jXeKw4xysHBJrVocPWSdhjb718yRx7zzYfceR13bDh1S6m1AnDC14ADnh4tx3eKs6akMguvARumNRR9",
  "key25": "4NJdi22RJswzKMuQ7pk48ebMHGoUWeiAmZgHg9BA1JDofmiYsrv8i3SiEsngMv85y9BYRGZu7VbRGgcfL6JYLvPm"
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
