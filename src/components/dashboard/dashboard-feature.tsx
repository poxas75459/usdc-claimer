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
    "53YtP2RLudVFLHRp6SUkmXmwXbxaNDk8Mpjij376hcbGpSobwduQY5Nbx2S8agVki99SonrroXSNQbJ4S9Eh5Rqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bskRGmWmqnor88sWaqqqoR9CLMixkzuTFiP4wugTGpXbxJSC2c3y9vgwAGAAtHBD7aCnb9i5z6Hhie7RPFnhwx1",
  "key1": "wnJx6qDJApUEExMjSeCjpj4GgArbpprb6dY5GCvpGZ8P7U3NXnzucNq3LqzvgkZ5iYMA8AqADJbbPPFLohK7Cga",
  "key2": "4Vf3FEor9ssBqezdM85q5bZYvaU86Ze1anHiELTQQcx6JSZNraWmTAYtE2EQ37yfbCDPR22SPqNpHWkCM3YhxavZ",
  "key3": "512LwH2nF5yGck1TCgVGiUNYrfGhW5rT4vQSkn8CPzpratrYQVfPRW7cPndJwmRWejMGYEbABGur3gAZgi1zDebr",
  "key4": "4e9Grt7E4BKqXC3YfvMyaxSi3FsTSMVQ2YvSAB3bHmrv9AmqJa82SaEgjTB6oDzmG2jViPCp2a5nUALwWxmwLBdy",
  "key5": "2VE9MLv8kXduX7qFsvtqLxFsAukY4PDtgfVrneinYGvAQkRaZDNcsdKYCnXN5b2pdnT7DsX4MaMa87tcnokm689m",
  "key6": "3iA2pJTK1Gxek7qxmU1WPKw1HqBEt7Qw89Fvf6WenMf6bnwWdNCMLkkgqFE5At5TxxUV1t5E3vfQK1DSnbZYK4Tb",
  "key7": "4aJC1mMKg5qBCYGqWdYVQzYDPbDBTAhtcQGpGpntKG1uJPC7XsiDhQ8E5E6E5b49yqrVKYmzXbcg6gfoys9REeuv",
  "key8": "5dk45ZtZdDfTrP9ZjZMyiHq7uAdab8EPXZKoUALRNMLmN9wPfLZsuQHbYzjHRscrUvg3XinLMxU1RjQLjTbFviLm",
  "key9": "2956QmutxadLcmhjyXW8srXyhJYd9SpgTyqx1czgcYBesCuhJc3j6mR4HYaPfyLwvbApdyR8wvN2EYX9bDnXfsSB",
  "key10": "2Gch5dZ2Yc3uePeRNme2GMQdduBPgT7UsEF4tGMNCeCyyu62PUy7WZ2b8U387N358FZUE3fbL8mNXrPmagvuvcku",
  "key11": "5ERHD8Y11GKAdV4qhcZX4kwgBjDEjuCsXb5LyUkdALPLxBnwGkbYJym3Dnk2bU5mnr7RQ15riEc3rhQxXGwP48A8",
  "key12": "5jZPcSHRoUACBwGhbNYH8kTPNVsf2ssuojdbAZLVZsR8xHzijAqeJF77VDfQy7XFv4fwrx71ZJQUtjMygP9uT4A5",
  "key13": "4yeZszcb4ntGkiX6dKy7eMqojwoR9csHPk47Ac3Ze1hSQfx5MnZ1iP35iNwE6Kpfzk7HBNp3CavkSck7iVwsQpxD",
  "key14": "5FSZ9RxcvHdK6W1kD4zTMrwaDCNbYUx6Y4akaCzv4vZphYbe76uSv8WWmu39sXJRKfWAp1kqj8newRNADfgLsovK",
  "key15": "4CA2PV78PumkssKn4zZEwWQcYv6LemydNsiySZGDqC6jHHDdBbwzFjRoPH3kLNgmq1eQxNCBvycUvfPX91mFvgNU",
  "key16": "3HEgTeakTam3fPGTfYPefJnLzWuYQUmb9vjwM1DiDPgXgr7YSLxvoxLXBKSfuiRiPjiqesrGF2qHU5AXvaK3zU3F",
  "key17": "3jdhMiarmt6JyQkuPukAbDRVjG6RkxRgfKAWQEBW9xR9utSU9CLvSkx6n9A6jfbscHQpPLkFM2ZXAPZZmQkWDr8p",
  "key18": "NfTXtha9h1Ve8Ygbpm76XjoUMf8zAfjVxZLKPDPrV5rzsWFhX5mNKQLTzCbZoezdnhRARy3e1RmsPs9TRmCrews",
  "key19": "2kyCxrV55abBpdcD9zENZf1fjG5H1MyRqTncAygrMc1UFDSgiqYpDjg3JMfnEKswPUWvekZ9giW7WKddgeHdeRAL",
  "key20": "2amNt7NgejfmbZ65yKHNkMSVkSYDW696RbkfsCH29pDoyXhs2oYnjBWwXnwRtxoFZEoPg5DxjksYbKpthkRNhbe9",
  "key21": "4T1gdjik8PeLjECkWjVwLcvDVpiW4a7AZisGXSJJ3gMEAgevFQphubW9Yrg2e58HfszTv8gpxz2sddgKkzL9K6gL",
  "key22": "2LfLpTkcUxotT544pmnALvXmU4Z7dBEWuHfdmbxznyUeQpXyLyhSvi37jDjumGgGpVb8RrTE6V63i2HViszmbQLp",
  "key23": "5VPrCH48RZ2UNW23stDZqVSJekDVReB9uFsyKpTpn8D6r6KsYVJJQbyj48FqY61Dxk5MWtvYszSgB1H9wQV4zFEC",
  "key24": "4ZLox86mvfrnY6dry8s76S27ZhXPuUWb6V9hR48AgiEQj1aEgyZ2x64bWfo2EwVNKSjkuebx95BLVhJDg1CYBjrr",
  "key25": "BZybQL4K8muhdnVu6zmngLK5uKLdbqrtMMyw2uyxk5SpgcfLGT2GZQQBU5q8eKMjjCrkJNp5mNGDsyWUT9AzoBw",
  "key26": "2T16xBtds4SvvABSPVfyaP1Hfbpj7Ea8JaEwdg2RWqu4t2PA8NbpjoQ8w9KZT9nwW6GsGengfdwKuSN66AB33HEX",
  "key27": "2hz2oViJ9m2fxzRaAGK12spKmdqpMYbuDiVAC2Mz7ga4HDnSGLD5f4xBCTZM7tDtca7xxZhf5HPWxE8F8kYC5myB",
  "key28": "2DL6nC5t79H4XeJXik3ro4JCp15YvGxNZhAi77QQfD81VA4FLhnNCUtNFaphCUmU9xqgLFwiwG2djNWKbLHb4PZg",
  "key29": "Ce4TafFbWr1qRtgVmaB2ojbapW7UBxNTJSJ3juPdedeX7fNoGdDPkVZNUHhRUuSmbrVvSDCdgGnLHZ765PDQRn6",
  "key30": "EWZj4azXR4e4TMHvGHdn4dn9Y3yzhHg3sCbeC5LVUj69YwTZKQazXM7av4yP4YjXJEFVgcHD6WjBxNKJ9EvQ6mB",
  "key31": "4WBhu9YdxdJ2X8RR4Y6JyHW7aYTCXhEfoCwSkEcm7SUEQWqo1fvqb6C1LfwRareVeFyCvu4taRsbjLE2Jxrzyd4H",
  "key32": "nVeUVYVcZKnnmSCMFQamEidfZJjfUu9cDomWebAqnJugw9v6mqqg4E6zqiJPjUvxqnUdei8nTjTo9QeHjHAPtje",
  "key33": "4ZtVueTPACV1mG5wjofP2WFtpbPS4kHeUsze1eCifzzBSHdqaTLaetq3Z8LPbftRQ34BH9TcH2D9yE2KFTtfNpHQ",
  "key34": "4pLWD3boM2za9qkfHC1E6Lzyxz4HbLc1A2KT3hDyhYCcjKAtrgFC6KqHzEir6V97c2ZZ8FXnCom4K4BoL45Tm4aj",
  "key35": "5LU8FKyd8Uq3a6HFY2HkLWB91ZRDRJAeDWCvY8F5VfUjNXzrf9xtqvqcKSfiKvVRPqmaRkBZiMfepmq4fpZLihgi",
  "key36": "2R7zE3YZJckff2iQWNs1mDuzJ287oUQSbEKhQ7xwQP6Fo2TrAUv82xzgwKRJ8K2TcH9F1kjamLHhf7yMfAFT9dXJ",
  "key37": "3NFLSBsaHDvg6mKPmyr3k6no4Z4nP3s9LLAwpQcKpWjMupsWJH5KaQDTRgEB15PaMxJWCaTMnPy3HUZEoiZgj2ef"
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
