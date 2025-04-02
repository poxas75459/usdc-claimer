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
    "5WajqQGWA5s14J1mcXzWStkUKTRwrg1ZzXbKR2CtnqreiNzjmCz1b4zKZrY8euzzjueSe39j3dJAiYHg3h2k2VGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLmKaesN5m8E7DqDeFmQGYniULdjoBTrZseSYKbaipu67i2sQ3v98MeRXXQRbik7DjB8qRLpCZNQu5AEjRf3bAB",
  "key1": "3WDP4aZE4ygamAL3uPzrScs7fMEnBCHhTb7ZmwDyssUzLxL3KaFyu76nMFDxAM8yZh87R2Houoe1R43ierPouND1",
  "key2": "5Dz4gLYLJD47cpGJRr2JrqxGPsY66sLmBJNKCVaQQMyiKp8Mmu6pLPQ5ZrGbmTeH4g3bHfTyuopFZ9y2oG1yxGEV",
  "key3": "5ZCQpYsiwwPWkFwsy2YRC1hSNfKxTQNxXEroPzZsG5j9zQiD1nc8dC8fG24SUqRuChziXV8WRAk6192bY7M6iuPH",
  "key4": "o4iPRz3sBR2agvGLE4o8ygbnnd1VdgQrQMSD1ecvUUmRF4b9nCuhaDKa3ycLZYSFMVi2VL7viu2codu5RdaF1od",
  "key5": "3PPEyhLrw4477qNMNDFeQwJhECaAtSKR1RZTFSF42fX33VExRhqp3YHa49ujWaWVKBg3By88Dxy4ttKf59n2vyaJ",
  "key6": "38GvwDDKUUGHMhimb3QmyrS9TUe4t4BKs7ikHJ2aNPriqtkwkegkFWHt6zA5PyGvafuPFm3g6EDMqLyKppH7VUEb",
  "key7": "XmyDGsxDRkQjSSkhVb3QhLuuSgJJ2Hir6eQRbyB1UFRPAzrpr2y2fYPTWSAPV4CeVeRwQZze1c4xA29ofdchJKK",
  "key8": "31iZ6o3DevjGpGowqtMwdJm9RQCMQFPnCUXmQBKS49ou1oDKGFaaPBW2RZswSYP1EYnigjvdRt4JFFUCwT82Rers",
  "key9": "4Z8RcgcrLCHBvKT7RQoTQpoPZUEHM19B22fyAEF8eTUEYFNKou4DNUCMcSu5JUk4q1vf5oqC9b5adRvtNGYhLpTQ",
  "key10": "5hg5stoZP3qfRgGwvSA54icbB6q8nHWmExkFFQ9wc7Km2Ncwk7xj1e4u9YrGcoFHT12Ufp7U4JVsAx2sa7XvjUPU",
  "key11": "4E5s4n7Mnm3Z4KT3UFHBUBipu1LCKJJhytkEVTaZJz4jaBoUba43LW5NgmhQnPJ8xspxMp6erLfYJGipsi81c62Y",
  "key12": "278tipgQhpH3UtFHcFU2VXm8qDTLW76gAQTu1ZqA5D6AHi6ABNDTGmdyhXrTE83maCGgpeGNA3g4GConGGZiF7rw",
  "key13": "2H8E31pG9hLAugv4q36t9WCddkkhoU6YfXnxd9tAvSM3Y4qCexJahrkSBncVQES1sQAynLEBG8acAgkgwamJTD6i",
  "key14": "mAUH7GPCfP4YmTpBh14vdM9BGJZYwPaHWpCtjE3vSyf7nCQ2SqgKd48eWjefrj7nMANP7sYBXiFJB2mCuTvsr6Y",
  "key15": "52pEgXsJWYY5HuPV7nCo3ft8iSTUsJstia3nv9oMkFrjns37Ni6wtsgpgzEC2kcX5M6N5PwkqoG1fnieNy5A9jBX",
  "key16": "hNZSREpU2M6JnMW6z5UU1SA5DTWJtxjx24gZStcU6WPMgbii2NeF65PFx2X883LyExR52Cuy3tmHCiGy5xtXHCs",
  "key17": "2NS6jUMaYTJ7Zv3CataLn9xzUxaXokkiUtBXXCwDq2BGfuUdgmwFMFLTDXDJ8CdsV7GqK6JfQkef26ES8qLTognB",
  "key18": "4m56J3SsmS3KFE4UCJVU9HnMkCnWQDNkgyvb2YbiKh7DrbGEFrpghYbGhf13N6LRbwtoyvpZgXpLSYyeu1BpaWyK",
  "key19": "n689CqYktDmjxF92vuBTNSaEj4yHWkni38Wd1FnEhGsifd3yJFMbLpWFKgwHqmtzCjpsPxnNigN5Fnajy5nNk1p",
  "key20": "4BiCBvqFCtfCvMA8NuzoD6njN1FUAP4p5VW94Seo6N1w5DpKhjBxfMJyTUdHcm2QAZFH6jdL4vHhstmzrYBRQLng",
  "key21": "rt2ZJ8FxS4RL1yo9wnGeQJ8JctSuZLQxG7aYrgcTrWZgrvDGSJy1nBQZj38VT8kyzxVz4xXAoCSbAh4fgJgdaD3",
  "key22": "WhzACs4996CJ3nikP1Cc4LtNDd1Ge8TWvc53VV5hX4KdgSwJ5YiCVxo6eBaNKknybhiFyp65pMNfvM5yt4vCMJV",
  "key23": "2HWGDXaukr1f7TbddzshCvc1rELCQVDeSYdmf4nK1VcfXBjQcwnhLRYXRDixUJqzSHzHEXLbzgCqjEqPtwGFgwi9",
  "key24": "5xfdtXVmyWNbH9c9NaonpKaxsN2xNCLVJ2NjWyfdmNnUtqkiauRwUr34Qc8nhmTHYJEWzgPb2h2HsPoE3C1UciN3",
  "key25": "2b6i3vtVJS3GUiCWTtbq5HeTzbeCarWcQTMfj3BGxxWnt9xgvqeK4odbRgcnRPLpq9EVveg1pWJYsHAYUYGHq4hw",
  "key26": "3go6Z36eb7cx1W6QKiafEc7Abwbni4tmKu1Mzipicx79DQSS8SdPKRNy6sZe2RSFXg2KJnKjMPCMnnaavVwj2ix5",
  "key27": "4XLQi54Mipbn1o5gQXvoXfsYzkGrYkJXUv3m5vkSttksNhEtyauUyGFH4HoDsboYGTFBX4AwmgzEZtQhi3tfAkqR",
  "key28": "2AnSkqKNa4dev8oqzwCjesqLz61Pv3Xd4nskaV8hPF4ZsCdQbbHYjUZfrJ9tLaJbJvhQVF5gnMQi3zcmu5e5jSum",
  "key29": "3EpCGZpHASwTHKADMQH5SYDuyguFEVJAUBG8xGDFkCXBRW95YPWfDSRmhuGaRcURzsKR9sDSJihowMfMEsS66GCg",
  "key30": "43ofvhqFbz67kTZTtRLu75Q2YyXUqBsfjVX7MfVV81gTqZqK7n3asjUdocBu2cNQSdnsmjjXyvuUnbLWbFpVXiBW",
  "key31": "3Kv1NQU4638688XyT5XoG2uD3rfiMX6TPPwGkGrYFkUBH5JQAHaR2XteZrDkmv2sTZ2ZvxXjgnjmzUJQJFeyJFqs",
  "key32": "2eTMu7aucKPYkimmPBuq8cZZk3ZvmmgtKn5Wv3foQQ2XvZaX286PZf6xtsPeJzSMKfDfRUZUU8uTEYCdqpKeXLAz",
  "key33": "4XSir1i5GGJTiqKkWejVvNk3DGRt1AMhoGMeWchvGXCceS3s6NX2Yq2FU9jp2PR4rxg3WLz64twnNrTxErKoSdUt",
  "key34": "2cajCffmjn8fmq85tL88DcoLvsK4nokzAT4n5FjBADFPj1f4wz68SwHaX2XQxNSQ2LWrTodEzYnvsYx2Ec3spTiX",
  "key35": "5hrEKpLntmMfjUaXiXoGydMGiZTKd1UWxAvNUDjcdxMkgTitLS794wLRNPHnxCQRYzvXeCSNX84YXxhGPWEjjkvU",
  "key36": "3m7KEyXQoMX3GQFRwJsXrZNesE6AzFEUc7yEwiJcPJpejEy3AQ1ZjyotWGZayAgfzvBjV6cHTyzy8HUSJQ71TemT",
  "key37": "2WZfN4c5ziTUx5dhNuXatjASgXcXGhfXQkp8FreYkdAkeKqFYgKc4BrTgoh9CXbpZegzNNSaY9gTaV4gj5MX3j28",
  "key38": "5QrwgWCcnrjXFQajBBSj2o8QqfZqrf1bSJSMFmFpepEVwSdhsVAbmMFcH6EM9Ddogi5S2ek8QiKBNwvLiMKLrm2k"
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
