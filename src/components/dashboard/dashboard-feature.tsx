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
    "5xcSsaqm1qq3RHr9T11eGXnHwnu3xp3izAWSvHwbF8U5MzBn7pBgisK778McZ4cAw8WijyWuBZmDi3MWfA2dY8gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6cQxgSsDFSHM3QkLJWtXjmHUrWQfbpnEsHGrCHBf2HrALobtQZswvmV4HqXeeE1wkL3rWeCgLfwezEL1j2axpL",
  "key1": "2Ln1b45LktKqpsCU5XagB13FTavQzZPCTSXJFfUhYGD7K5LTC4p4qyXwzKxbv9Tvs1RimnWvp1sEf2K9NEwCj13n",
  "key2": "qZhLHRpZAR8tMaW4xYatwg5uYT9ctFkcnJzsSSqVaiqsoc816KHry3DPaR6SyfTD7vxeFw74gCf4tDhENrva3wv",
  "key3": "5qmtcgBicEWpcK5thNpwjMsxokcEBjLmFXqJePTvwoRUxA8GMnxRi4UtC1ErG7Pyd867guaKbJdL9z4Pu3vc1uAp",
  "key4": "5Qb1TGBTvenKdxBpZn3wLJXxdhZCD3KChEw2rkghQkphFaquLKiEnTCpUHGySPPL5pSFPM2MHvG62bsYxwHhAbcw",
  "key5": "4AH2M66TQai18opFSyNLz6yigNbrUUBJTNn4LeipuLaM1GnzS3dYPsAkMjAg7Kfu8gdfJMPMBTsZnEqQYyMbhjQV",
  "key6": "5NFQ7xq3QAEPtQ6jajuiK3488ECsQLvMuNauc7qovvB3LV1KZxc3fp5LX1cKSTGhGSzWc6dM2PXRsq3X4YgckVk7",
  "key7": "riHA2SSHhausRhzeTuCUYPzgyiGEruCESG5GE8TnVHu9jCzuwZgqMXkkAXjSXQZLWGEMoJti6FRiJPSCn7SLb1Y",
  "key8": "3Vbsnsqd8MydMezidjt3Kvdc8BVKRFuUaAZoej1n4qM9m8VQdGkSXZGUuFxaJU7hk2bMjn7xM1PAzKV5Vd665Qy8",
  "key9": "UyNLRm3axUy8hCYDCLeufxqTmGq73EjFVACN6vWA5XxWXYtQu1aMYPBu95amoTHGPyed1ZahhyfYMgLNrzERNPJ",
  "key10": "5cnhktyUb812oqCT1j53BjMyjkCyMvyGn1SsoaGuQmFvWqm5XiMPBGmHy19Q2fpf1HujuxvhamEUrp42HvrDVDWf",
  "key11": "3RJUrnqCGnNtyL7dsLqeEx4mVdKL7nWu9upAhtLb7ZctSAG7EkS3QbHPQ7S19nT7ySxx9wPNVDnw1AeWfTr5AcJh",
  "key12": "4YkUUhxq5NXGAWK1K66TC63A6GU91w9cWvBXQytECXNL3NryvCdPzKTGp41oeNGbn7iLDrShd4oLSbgTBN7doELb",
  "key13": "4YEJCkmaKySSxaSvcwyXhdWzJrbpjiwASndBEc15gTnqNTx4U5HUq8iajVAeZSMFZAHaNyZa1RVPMXuLHxrNv7nm",
  "key14": "QySVPFCQMbBR6XhK7PXde92e6ghje2hYpxPe7QpncE2Sw3eq8e7QpNU15xBm1GNu9QxDXp9rvLLCAmDdB898efk",
  "key15": "4xnnA4RbHpBJtz8yCWSgzzhdmcn7TfxNHsEDjY8gmhjfTTvLUeQ3ZPviCJLJpQMedS2Lkfoeg2zKMzkUujYBJBB",
  "key16": "4yM3WNVzBAp13CwthjuNq1VE5eC9XaUoZLpYVmK6rGTP5zstamACUxR2VyM2tbswaNFgJfrmF6cNube1x1NHuzDf",
  "key17": "2b6sYyygu1Eix4ai8dgrVPT8CQERmB2iiMTe864rt5b5AvGrDQWV3g5ZPZJyJHXfuivTtNfok13tsuzKMULnd9z6",
  "key18": "MzzjayU9mtsT7HR63nqSdrCFyobJYmSydxc3ui55nxoMCYj8NyHEUnKrkbXFaUR3EKcWKujhL5HomA1zoY4e2h3",
  "key19": "rvHPTWi6LcaVSiHd6D8FudjJFNvZ4XSmqNLooVHaMtdQcvVMz3uTpfMrNPap4cUHSR7zd3S8uAGuLWLjXPw4g1a",
  "key20": "51YjAyY8uvvo4htodrMSVsm5BNX7PcBZZzVV58eD41Sn9STpDhMY7t2serd6eL7PxMcf4HePucUezrQ9xNx8gG1g",
  "key21": "zMdCo8iwCwa6UuCv14hc17Mue2DhPfhF2N2pLgC7M5zMZ6yetpD3hCv6h6qb6ib97Zz1st6ZtDpySirAggwMdGD",
  "key22": "3eKVc29s8z7G9Tthyszvcg7gVExzv14spa9kRQkrz6wCm3eThcMfAEnaUQfbZuFQGfqbU1LNtE2S2PfEtCkyj6x2",
  "key23": "2z5XFxqzf2a6wseM8QW8q3oMMQF9rfYvvwArZmJiHrrXY5s3fQYUtP2fkWBJxdkrncppPonREcUxXgKvJ4ru3cDp",
  "key24": "2dFELQaUXKyBmHjyXRKUXSobtZ4kfsLmJ9JcR3AAEAxBcJyGsPZwHxGqSAeHghxLocyjq5M4gmcyqxHAe4GUYqkU",
  "key25": "4A2CZubuxv5YZpJ6RkvLJvBRVgvKLUE16Nt9VokgVQGyWUWzDvmDotcPMJFCU9Meh2NFobgksfLPT6MLnERHSMWF",
  "key26": "22ZXJxYD1VMU5L4e4XtGzkfDbEUaZARcCf9YwbHias9sfhE5ZchHcbUJQfTMaMBvyq3zfYCbiKLLsP2aKof4isZH",
  "key27": "sv2sbLHQCQyvwnexfxiP8tvdd9bdaUXKZefwEZ6fQ81Td3yeqeSuCQE1xTn6HeEbcvYnBnFU24iKZoyZ4EbsGr6",
  "key28": "61KwyvkhSQw46MKY2n1Gi67Chn5PMKjhjcZBvQDZhyHyvywBmwPQyFqoXx38mmBYAijF1vgzKpqGGXfFvpP2xF9",
  "key29": "cXJ4H3u5bni4Q71utJdAEMaw16ALAeteSfmcf76wigTgTJ3C19zHHHFVAvoeLgPkEbgxcSg28wDGscczmRpmmmu",
  "key30": "YrbfvY29g9aJhz8JubCwzDyVpgW8NQTD95L2EYkAjkegoV6msSYWwT3Gz8cmAvWHJ5C1z8RkFZPrJdwq18VB4th",
  "key31": "4KqCNiLAoNrGJ8c52xBn6VkYmsF3RPvPBum7BvtRfJkaj2db8WQUBVBxutHExeUKoyvxpseJYZnZdXTRKzmgAStj",
  "key32": "43apkUif7CkWqawRjtGchiVwM344AyHyMbnXrQdtXrtMXQXpcoBfQosJ1H7nXF4VSDN2WZ5o3y3fbBBRVsWTy5st",
  "key33": "4sEciXHHqHYXcQyfG99Xh9ai1mecpj3ie9V5gqDCfgyHp1wprfmabRCDNHhj9ppQVFYx9KNw6BRqGHmYHW1rXkcz",
  "key34": "2mhNqMH9CiQM7age6yZbJAzyuxB73QaDT867SzakCAxG2a7HtNzpAF97SD9krRFKHqNd9BNodmNxnPAqYjswbBrw",
  "key35": "2CfXTB6JCiLYJARg7jrB6einxwLJoxb4STFQMavbD8yYRzrHABfyNTQg3JMSAb853FjXf3NjcP4iUAoTEbu2ajzA",
  "key36": "3NWFF6HKcgT7oQ6WX9bhpDm3SqBorykoAosLAkao8Wscr25Vv4DgsuLkf6k6XTZeeZbkTGY29M5nc7msp9qLtRjb",
  "key37": "3E77EQZsdd4L6nRWndqydNaYSNb3p138MHgtgSE79oGNnqdHY4FwTjSJEK28BAx1aH6KFZcaPS9WYuHoxrpXYFmT",
  "key38": "5wKeF4uWehaerve5G7xYQxvgCGHJbSXkExw6HyRNhfvFCqFbmE2M2bTUoMcJFGrmHvu6WtKL1fnuJMB9nyC5YA9f",
  "key39": "5h8WnU5cFGSdoyFjtbJwtQevFwGzFrDerFC7SZKNYKf1h6gWvVKKq9ZE9pDNXiy3VAToSwLJzJ5JTAxatXas2sQr"
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
