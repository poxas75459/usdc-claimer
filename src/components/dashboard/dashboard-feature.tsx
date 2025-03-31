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
    "4caLBSw6dnBEVPRbpL15W7Y2EsABz88fxTs2p4bZP9TRtH43ipnsrN9WvUV8e9SenqNz9SLCcCBTRKvkWjU8stAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MD5yugqtMpsig4cfgBBEriRkRfwf9rfLrfuJiC9T5e8RdhQVbtQssWACucKHxshY1pfyRV7a2UfeZkbheAvy2hB",
  "key1": "3tGNL1wu4eMEMdaJk7RF17GsYksCVi8zLh4X45i2VtjasdFQXbfP9r88LVyxL9EuKjNzN7uZsnrZsoF3iFHaC8D6",
  "key2": "5FbkHjfsHui7VGYY7qGNouxbyLBfwYTfhMpkqwJnv2k9PkU7QzcMj1wWNbxDbtZEYG8uij7uA9a72UVFhfC2jVXV",
  "key3": "5HkB3nm8MnNTNQTx3w7vWJcxwGbEqcKCmPmSJAK56ttpeuvEDGSMZ8sABPWLsXjRQezVvTqqkBwyrJ76cK8chtuB",
  "key4": "3aYL9xatytLL12AMFtnH6MDBmk8FEffpdyLdhuJ5V1DeCsbbfJCcFH8HsrWrEpz95k8KSdnFZJmsHSsFfAD6ETmH",
  "key5": "3ySCncHfMzBv2qdPEZoGZ2XDmtS3rVxYDhtJmjMv26BVmCEuKBXhdeVbUWgmbJ6Dsb9Ws2thdtr4C5TE7TzQLUbx",
  "key6": "4ChYx5iLXyWBrEUSuSECx1qnt6kvAZuCJxvYt4FirmjjofvN4SsLJyEcSBhKeipSkBzbJZyB12T4Qp6b7autZr1f",
  "key7": "2y139vv74vg4RNk4Tm4hoTM5vgJKsiUKoK3EJgyQ2byRezUG4aQVa8zybvEEfChJLFxrsBuU8mB1o2pttPcmBpex",
  "key8": "5fwowNT9Vgw6GLaVCuemrRW2gPVkoxDR6pSJLPzC1zDR7gKRtQ5mjgQgsQf1E3jKLYedxe1grZgZZjyaFkWzuMo7",
  "key9": "HK8iMLYzzKyUXS4m6bcSoyuuFsRwFigv6mGeK5Qv6M8wMpzMFeSBDvR4bbfv12Nsugo6bzt97PbXWGChJeF3Vy9",
  "key10": "sdwuRfGuzKXnQ9ZHzzyLU15FDjtHhp3oXgZgEs3CxzB4NS2bzyTMCAkn7q8qSenwxHrdSWpyQ8PSKY7Ata5PXW9",
  "key11": "aNHBK78mk4ehUrAssjjboyLW5t7Uw3iEHc5KruWu7SfTDKoN9ZzxGZNUjfs2QEFkBCcqqkdiX6yx4rqgjE4L2i8",
  "key12": "5oEaUcQctAzXrcEVcpbWQspeDdN1Hv1CfkF4ab2qSSZJYC25bMQveVrhxNgHaR41227JEWbMkbGcx3r5Wvy1LsE7",
  "key13": "53mRT2xv6BgwFx43UUCftwtQnB7W6utfPtSyZKauvgeXx9ucwiE5iFKxGNpMjkBTUnduXUL9B1eHZMmsLtT3TKrp",
  "key14": "4EcbfnrRfE5oBE9Ugk6U2Br89Uj5VQimiNSQRZXrSDSbDaQXKDcwhHzQtC2kjwYrb93MCLnARF2mbyscTMRfJyrw",
  "key15": "3Q3rWX2waX5ZyLfVwE2kqpMVm9Urgt71MutoLivRSxAUvwqdw2JSwDKkgArGPxY3nWG3KTnXibW7w2qppQbx2KMQ",
  "key16": "wWGgK6yR62du49uddKGqoHZW6wdvYA1Yq3sVrKMzguuvPv3u97C7heXRKahwsMD2bWYW2FJLpKV4VNgasKpkN2T",
  "key17": "2bk3KriX7qmmgnNnBz7pwSXCA5fVMhoqMWFdswEeuunCwo6bqHSMjoqSwmpNpwpaR9YqLZmQNdXkeHFcJ8NZ2Ghv",
  "key18": "jYNpF5DLtgUMbFixf9ffstBvEvq7yLHdT2BNdZRr46JKTDpgXg1pHQT5sLe43Qvkg3FG3ipfPt4oC6LaiiZ7FYQ",
  "key19": "26KYKNrcgzGkS2BSGjoypZGgy2YSMFDPKqGZzc9fsHGXojaxuAQT1beQX2ddqgQsdCGQbNYD9BfBNDHu2w7En2dJ",
  "key20": "3g759FfbobLEMSJiVP19sCYo3obZZk15VUgEuLMC6MzUSzVUouj8kYWqJfnBTQyeU7fMyDoubmXrXDhvuUcm7y1H",
  "key21": "4Upcr3bpyuXn2hbNWQJSKfHhoX8uKejvJEYhyYmNb1p7ZPX79YAjR6NFkuToSgrvWS2rWXB86gR5ogGgkAVRUD8n",
  "key22": "2UmMG4XXRFSuUpERSAnj7szePmgWt5nJcTiqLx3z5iwL8Ydh67i5kgKEtLTRKS1wyknf6SbmF7uMcF1YAYiJhTPJ",
  "key23": "Bi9LE5n4mswc7yxoV2XZSSW6VKF6MiQQDrqgc1UBJWp6maWVCaaMHSm7LwNAo6u2YBFz8JYR1Y7yRkCDpuXrboT",
  "key24": "3gSxZsTW4XyxzNPyX5sMcS4Zx3wciemouBL2isrL9ZZuKJDpbGyAr2y9SASarGKAQWCSJzRy56DPNYxuk66kdpGk",
  "key25": "ta1M3DCy39p4iFfZcpPEKah9GrDFZHdsLbBpQg592oo4XeeiKZvdpmkX5ZefdAX6BfzS3sWS2xHAWfANWoqjHjq",
  "key26": "5YfZq5uSCQtobd6462TApT48QVZyCBr61fEkd42sQvLy2HjoUeNU5D5qmS6wWsL81MSWuydJRoC5pgzFNLy7KadM",
  "key27": "2HzezAcFGBTQqeTgSrfu9mG32zkbyLwsPa1HBC7P8tD3jXSLKTgQmStA3FAvr6MZmA4jS8HzMfrt6LsVZ8Mxd2Vr"
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
