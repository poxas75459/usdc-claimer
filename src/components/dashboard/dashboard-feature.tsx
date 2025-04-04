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
    "5HaJCtTb3xZi4ZVKsVJjxQRJuFytxNKnxFWFJ7FfXdTV1NC49od6y6FdBVXovuTRZZfQUYVUnCLwM8LgkhKXQBqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1MZkYyyWKCkpN2Q2QmZhb2gedJBUv7bJ89MAhX5kyMfqbVR7R4rEgdh5vBvm15o8JN6n8cTcbMGnMgPUquuacd9",
  "key1": "3i8gL8KAPGuaK6sjUDzqFztDBZoyz1SBJuD5xGPLa4Fi7WadYvTwpK6xemgJv8eWVkGExSxMEfAN2cGDrEEhN1R3",
  "key2": "2aWKskrb9bLYPhffkCkNtjz7Pqhppz8wLkDMZ5pP8xzNkHfkERESVVVD2DK1BLMrpnmKF3m7Vwy4j7ZbrJxJFgwC",
  "key3": "3b6Y8aduW6k8JPHncvjV5JQYp1XbWWfSuguNRcD1h2N94RpiHQJND93vWZYN7hEo46cZpraXERogvk3paE9FmVhv",
  "key4": "5GF7rgHa1YXzX8RhMs2pS165ab5SYq4TZ4sK1exi5dCVeFbmocxMfcVyndeigVf8sSPg8SxXYSH18f9zjvTQjwTP",
  "key5": "MTrkc1jWovPFrBTJcNxdBjyEmYvj8f1UFgcaDUoFeZGXh5kznmumhaS2KeRws8PxNn8g8kJGDrTTG1joHNpgAy2",
  "key6": "5sKQMHfsc6arSkNoAqh4VA4EYX124HEpUPzp5Hh7c8ze4AzjzRiYVYJLNqRPErZ2ZFaXdm3dCeAin4qtzi3QxQUZ",
  "key7": "n7UxvTWKuRyumBTWWsroANhAFPobv9EDKJHTm1fkRyTs431hu1PMYrdC9Ztz2GcEXFv8jUvtYquYdAUsNHjVwqC",
  "key8": "2Q5fxuCb34B6HnP8aX9bAh5zJZH8ZuPnp8E5uobDebUsxvLbG9byd6AQxSgmiWLKhweatFcPo6e5sX996Eu1s5uF",
  "key9": "2PGk6c9SNhpGPGAyFJRJvySEvraNySq2Z2THR3A6xmwRaa8jzuAciY7JDDMFhCKRD6aV78y3HnKTTQqDScVgkHZ8",
  "key10": "613PhPvjZpnJhgardkD2A7WBwCaNw2sSMWFm7ypPDv9gY77oxiTS1cCwyf6eacZHpEajdMtuEfLms9aKuihYomiZ",
  "key11": "2NVpMeuiRByQtAKh8ZEmA9Z6wGukvdaRssupjiyGDhR4BWXJYEtrqk667fAEJuVubiEqvKA113XcYzDKRRwtVfC1",
  "key12": "5zfDW1aTMduTBYMJpMPG15xkXnbWAFbvqCZKgL3G9qqUjdVqqW4mgmZs4KEgPs148n9nwXheTFvrfSbeDkfdHrK4",
  "key13": "Rf2c2G2EQq7e7VCjdwDX8Z2BDTdMoBsBWFUNajvEegF5D3CaJP6bnSX4MG8AVVHF1gEqNG7VdWy1yUz7uGKzMzw",
  "key14": "5g6bCkG5C8no2c8Tx8sGhGC6t4hjmKMXG9f56B73VeNghRp1JZfVpdukMCBZiuFELFgu9L1NWrQJDn2AzSyNSHDE",
  "key15": "4S7FZa38wkctU7KQUiqErzBL8HJWV4mSGxCxc92E4cffZAqma4sUuWGXQ5gde8WCXpL67ATdb4DKvUfikiRJfgdX",
  "key16": "2naQg67VNy1LZuQyjXCSjBHWepCq9fwRf2u9M6DiuHTrhgkCLTwMi1KpWcK8HuivVJ2RXAe7ow95aD85Ld2FA5xU",
  "key17": "4wXRnGhQKPuQu5KdQe2aCbjWVAWUAeXN4EkXJxE4LbMQkFLupLMTxPsB7CBFhEAEgqeWckLqmGJ6PJYWo8rDf7nf",
  "key18": "5h7cCc3CWiwbisZygkgsbCZxe37vQgRhAmFvRD5TC27bZE3k9KWCwAPJoBZEUgHFHEGPP3KVDVCQWk2tKhoRqANJ",
  "key19": "3AKzzrvPtHoaM5ppgpgyZSD4DaXbswdvZGcqK482JkYU92aJ9geq4VhG4qYbsoq5nvGgDWopEPrhhftPgg78KVDB",
  "key20": "5thmpeyT2cdBWcJa3tiUruywscLhdv51BUU4etSntjAMefraPxksickrE3ME4X5cFdGsgwWFA6aNR1nKonsudHjj",
  "key21": "4LwaHRpofWkFibWFsJ6iHgT7KySTNijC4MQ5FjiSjxDSKF2JbWVLH6Mqw4V4eztpoSM8gfyRwsYmqiEnYUpapVqi",
  "key22": "61Y2K8gMmbaJyQupdv72v9Lpu2C9A7CHVDWWbnC4Fk2wodRUddEndEn76pYr8Kg82e6ChG5tsen7xRuGLaARUYbv",
  "key23": "4kkCcwRiKy7ZoAXyDKQRbmReSTuSph3cTK83T8EmQY4rjwgQKSRpB274U1BL277SZaZZv4V32g3i9S3yrEjAoTyS",
  "key24": "5c4LVW2HBRA87m5NyeudYcT9RYkGvJ6oq544cVoeNzDypXGLknLcmMi5xbJVEruEPLw283F79jMuuwVphwQX2Ezy",
  "key25": "2gZszUrao1ws1GPHPktcLdGZMgKUAmEczJQ26DAUEVWUMznNssqQVWZCNn1L2kD6LoRGPGfz2frAuuLqbnbuTzcV",
  "key26": "5JjGW7jfufiA88QRyNv2sts4VFB6JFmwoa6RxPavNpcjBLYZpxkReLch1XkanX6fSUzKhtyBVFUVSotK4jsSHJNS",
  "key27": "2PF8LLgDvoSfo1hZp7e7Ja8m9TSnfyuvbGeGfdKeUuDeAkZF3LXh4s55eFZfXtPjXud5cVYDCB7KqVordnRvzmCH",
  "key28": "2iAqL8qMEvGGhq3VZdfJUMpJVgBwCRuiDBsochHrYDPGENm5N7JyrKijjay7xChu2HTYzaWd6MCakdzG9vaixLUv",
  "key29": "5Bp364ZcxQsRDPLUAuT7vFErJgGBRqMHs2od5s8wuHmiqAVSm8PtrpUEDZT5ERXgJFCci1gtKux1otYV9W5F1fce",
  "key30": "5B5gUaW6E9rMn5H8NroRxkqHp7Fq7T5djfiypn6ffChYyS7Mi6hJYTrARC7LyvkhjHBL9vhdtvmChGftnwMAn2At",
  "key31": "4jBZq5HvFspiWF1BZBg8qzrSeNzAJZNRSfJoPELg34Nt2Gcw68rzJbdbnnghF32shQCSz9YRRLRn3w6C9Xuma4E2",
  "key32": "4cN3iJFn5k5fG1zBs9nQjES5MiMQh3CtYQB58hCFo3RHCkUtHhSNX3ExGiZ4pLZisA1sbKjodSiCbBFJBULnmqSL",
  "key33": "5jhi7eyJ3PybEKai99P13eUvECgmdCztQKZiKV5ZqzHZwdofXp9iXrQbBGoqgBTt71WpUG4z8rugNKyUHpi9yXkS",
  "key34": "2iWpXoGuzU8HTBQJsTE7WryBFKCdbFrfhipdqYqyHgTvHBen6YfNuKKgNJBaGZrgPcn9hg9uZCkThf9kfwYdvYfU",
  "key35": "34hA4tE4u6RcPmN1FE7d1Mbi1B9AKQ57z5nQAN7o1MGtWUYbhJq3pt3T4TQ1zH4D6YVoC5oQTdzCK8e9bSP4MURH",
  "key36": "4gMkeT4g8uWh7v2LBW3tuhpJiNwCjanLLjX88C2yCckYTvqE7QWbH8rTevf7cdenmv5d5osYvq7Au9B7fgutp6tA",
  "key37": "x44MK7GWK1prPscQJtxcpc6jyn9A4qLCyTyQK9LuYx63ZeEezrDBsNyMXyvHtxGoekhobJy3yWy3cV6hWHU8BxH",
  "key38": "3AspSy4FCMaQSsLmFWQwAuEKDEqvZMUHfFXdcy5vbu4EaPyFpwGN36j5Hhb2B4FDuHcLejMvTL9Ja3HcvYS6x5RC",
  "key39": "5WQiCNvsC7mwAVR7G4Gw5NjGhXabQd9FoFjuiPnCR92bsXfhP46qtxxj9BMUeZcwdysYjYuEFXAk2cSchmeFJPoG",
  "key40": "4bzgqcLNRcxJF71Xrf4Ww7fUgzfnvt9Yam5sh63mCsEfqp5Go5pXqmn1BUtCoSofnn9XPvtcV8LkM4VBA5pjzPQC",
  "key41": "S5jaXcyCwScmKp4maWRJpy741GhJw7jvA1kTAFU9zbThLTK4vXmvoWcW6Eb1AWPd88zZJ1R1weFtXXeue6t2a7G",
  "key42": "5tbH4Db1t1nSrZKkcDXandvBW93FDVEKfZ612pzJmjcMuiWTW3tNgK7uZW6qf7Dit4ep9nHUJnvDddfZ1PRceMnr"
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
