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
    "43HarQRGsp8i9Ee1akzxwCeq4Bn8b9sBevMGuiEt9QvEsgcrcKZsEHoc3rgxAy69USqMMxj3KU2P9sgue699hXP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHaw4TN3DdUyjCEpBE6fSmaguYNnmeqX7tECwYki7oxr9HyRxVq25zmc3qCqRdJw8n5YuC36LKhMcNdZuXQMVzN",
  "key1": "2ZSXUcga19ThLfWDVLR87VvYRD8oAvcuZeWvJWdxZHNu5BvnuwPEKbz7z7srFJTXinx6Sr3e2snXHgQ3XcoxEwTg",
  "key2": "4ummTa916JCDKt2jdvNY76yWGQUdkMmc7xWJGcYaVMa8jicLqHhbCd7G5Yw1BscQoWbesta6FmDKic9bv7u21HL8",
  "key3": "2SBVmVbnHMZdxbCX7dfBuR1UxdpToM8QT6KMCyU3cpDWjwvqRVXDp844S8c2ZtjuVTVymYXQQ3vysarTXubTKyRH",
  "key4": "57EEEEoUxnjMFoyZ7a8AHSdutgzXsKDuLj8AKfAcJcXn2FQfvoeHC9UGNo6of2rpRWhMfQUzhw382iQhhBLJe2zc",
  "key5": "BHEQsFEq9o1jpPJhXPX6Fm16xSHgfWNs9mEHifaQwbEStHVDgiVdZ2oMGkmpbRyhFc9qP2pc3yTf1kcSUbi79UD",
  "key6": "4gyAkQioqPx97ZHWRUqniu2poUJgWCNx7EmPh5WRpf2HwM5VxYiStLrkafsiKzSxm6xQ4WvVHLZL4mRgwy3hmaCw",
  "key7": "5QJfyB5TfYLeRX1vpVybjpmTPy24opPBMKyd3xstASTggnDk6wwb7yUJoCbxrBZmuVYLv733jfNwpiZthmEk6ina",
  "key8": "2AciTZGCznWTGjqt7oYAL6iqTU5Rk4YD7dMP5zsUzSkQKzusovHokzmqcHQuQRujAiAD5NLX2dXno8F38DteCMhU",
  "key9": "3wxPKT3jZgnfHxPitmYkk8Kb8LQbcbYqMFKaeqjMxHk2NqQNTEfcFtgNg7WpGmuFypCcwYwFDFtXM25SvGGtAmqt",
  "key10": "3ZCZbNm8KgQqjFNhrF3Q9a7rXFH1sRBDCzNK2fFsUBeiqTGZ6HWwtq3jdpwzAQi3PWKgtnTrq3KERMo4P9fFtTQi",
  "key11": "2f3HZq7zqLrVHqMzB4QyN1N5penK86hNyfGTVp6S5iXWtaRfsmq6q3CWGvMNxoNnD2bso59SyuyT8JCNsgtWuS6t",
  "key12": "4zLKWJeRgd1imFanMZgxkR8YJPjY87jCW3JexjFkPguS4rfNnDbu85nkSk53vvh9F9MuQ4Fgvuo6VoUhtTPVPyHC",
  "key13": "2ekbnxX4bR7yoYXFWSuLLa6tB6hQJn2L3ns3LXjRNKYciqkuSn82ixGvDwgbBCXs6GfAXLNNxpUWb67zinJKA9k2",
  "key14": "5MS7DLreKEuQbCcsejp9TeHASyW6K1izNfG22e7kLW5r91ftbrfd4Ypcqsm4wz8LQLSbGPSaRBbsSMiwRw6AZVc9",
  "key15": "31ExwZUVWKEdF5KMpJdLVHwXFU9ReJTVmu9YpnLDfpFPMr9jZXuQxqqvxqf7y3nZA5nhUSZuCZdmYPo2abVfHWH",
  "key16": "4Y6H2GpUgC97PUWLB4xnFvNCBJybvPEiZ99ssnsD3hEGu6QaY6SR2HZKGCsoKW1tKuRSZivnyR1Zum9zJT1NdFvG",
  "key17": "Tdy5rAgzAagqw5oaS4pQWhhMJ274PZqaKEnUg552GopXMy9VbDnxp87HLWRmTvixViuGRyBnvNe59EEvqJbpWYh",
  "key18": "4oEQAWtYZPweCeX4VeS2fFN8YBmCs37mpkNGvbifXKh74oux9Z5b1JfScx4L7328Qm3zJrrMoTXjFUKkcpYsHz8a",
  "key19": "2rXahtQYKvDH27Aoq98WiEV6qx1eWY77n5xJXeZg4HNe4EEWozLzAHRguXp2BMxjZwwsDPJnj7x5nnyoCgd3Qt43",
  "key20": "db5FjSn1ecKn8Q9Zt6DUHfyrgCgLH4XyutMFswUWAquqbD4SyHsutukkL73GoDG49RY2AivjxvuUrfGzJqXssnJ",
  "key21": "5wXzaFcX9XX9Qx92Wrh1KDdxW3EU3CJXnc9gFCXTnvNN45nSC7GJM4j6eHF2tQefaFLJ9PfF6BFPnYpRksH1EPKv",
  "key22": "8E2ycu4r7xbCQkwYJ5PaafuB9jWzfkj6yLU83uYtkpinSk9eMo7aoqU2Aa6Q8HuTmBV3ruRKVABBg2AypULsZws",
  "key23": "2ibo55qcVvb8ftRQjP72jmQmskxcsx55cKTSUocTKX1g1hRbT6oj73UDYkVoyjGGBia1S16CzEgbGau6kKok2PpM",
  "key24": "52FeaNCaXrDQRFMASwLZsFEdSbhQDVm1DYGdjJGarZLhtnhhTKQUr9GqMfTESNZWxYeiUcMHmd1txjDeomZMPsfe",
  "key25": "5Xt6JWzR1ox9E7ehEYnbhGiA5RvynHnbuTkQHXtFVip22wtNLofptP96DJPAyCMXyTtnFQ5z2Z3AoMZ41gqrGgc5",
  "key26": "5K5ME99WJbyx7sFgXACNMptmjE23bFCA41xKRPS2br462xgJY87RCSj5EqPTcpg6t5N19gFiVnbBJdWGRWqwJB8Z",
  "key27": "4DgMHrD3qH8g99KjSdiupT1Cyewcx1ST2Fein8B2X2deWVemAdW5hmpsrDPBq9SDKcYxJdkyYPeikE8uL1yPBns3",
  "key28": "9YnxC8WvMUNTf1GjTVieEjPJWTFZWqAkzS4CFgQdy7NGnXFiZFeFMv72ozmaWHLPMFqFDTVHRzTgybsMLTJGnRx",
  "key29": "382qdcCamYdsjcjCnYyC3hiFxoaxCWnKyjmYnhhdPm3FEAkWcTK1sz3K1KiKdawYzxEWXuHSKELaEAb3dRwoBHaa",
  "key30": "3jhW1H4XZPF4e2K9Ki3Re5MQKVPRbmjrBPWibCCfG2Pyf63UgqQoPoaJX8ZBXTKYxqvrCWAFRcW2ZEewEotG4sec",
  "key31": "3f8e7t8i1sW3ckFpTDRCvZBXYRAESxgo5ovf3KncHupQYq4MyHYeABYCqNB9DbDkCX54BD7A7cdZExdLUmY738q4"
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
