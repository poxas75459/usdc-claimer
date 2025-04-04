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
    "8tyYRTMxKnhQ3BVvony6c3RCKfv3m2LWN7dwGD7cE1NBMFQSJtLU5javLF9VvAshyX9VFqZh6HuAdvYkqJKNFrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Yt5SJdqPErVKgcptguzDkNvFemLWv17C2u52tqnkwNC5BacxmjippvZP9BJ16R5V4J7Qsqk17YViK89s1WnCZs",
  "key1": "4UwN3YcsfFSmFJt1ffyPZEqFg1T1RaWkV7SW7aoBepySRKTP21LeGgZR7M3arai3xXfrTaAR1Sre6zjnw2SZkt6v",
  "key2": "4WXkwfndP3pvzH3BTDo5f4uaBrtuTAgG92wFCNYFtpERHtX71qPtn3wuRmCDNGScf6MRwfw1YmVDjqzzrAgXGjSM",
  "key3": "4MeA9LAsChHaeaDeF3wN51CLYQEWLTYD1fSo2UmkMtTgT4EupvbqDCxjUFFfYSx5tLLtzecFdrD4ZbM9yTfZS74M",
  "key4": "hVEe9mi8bsxWSVUUNgkjX2cM1AsWvK4JvzwAS4TicJnAAjgbKXXy6MCKMcZLE1YTA5fqrbkxu6ZvqQfnS172FFZ",
  "key5": "36Afj7AtTc4JU85ZF558b7vs3mKBr2A98wR8y7SxjKXHKG1v7ivfDWVxX5uia51fQJEEfzoiw8r6fbyTCXn1hcBW",
  "key6": "2LdUGcckEsAt6FjCkPugqsBRzPmekgNMabLo6S3hQPPrYvRxE8bQrdUcMAfDAAkX5DCsY51KvzCgKw8ERBFbnjCF",
  "key7": "3yAuQgkK5aujLTVp7AqXPhtBZTWJsYk7Dcit8B6xsSyz5uxK4bqGHXjwn51AVe1SrUw2ezxPaKkfH5oSgGwNny68",
  "key8": "4aRUFiqMTovrcpnQwVc4T3XmUFTwtZL954fVRhacakwn5bq1U3g44fm756zvY5UjD36mH8oKLFzw7C7aZdhVNuJX",
  "key9": "4aGz9Tj4RcVW1ZteCPaX3sa4HtaVrzf1r9sE2MtEGKEk4fyAbwfKLPzaokn2U8UXz6CUqhXh3ZoNSw4eNpx8bvrA",
  "key10": "om57q8Vsqc2USWoYdqghBZmvysmWDi512sqYr5N6FYXA9QUiuypyLw97fD4SPx5yYwEZBxn861u8c5KUXyzkTQb",
  "key11": "3SP5MCPS3J7r4cahqYCMuk4cWVgxuoVBwZ3Tj9tTTkGgQC8RFE6JmTcEChT9yyrhZ2ausEeAgeg8YLreKCbyKHPw",
  "key12": "4ooboBqv4DucoaU6DCqDE8PYa429KwaVqK1Q1hLTRgVU6oXVeqxFcMZvfAqpMr5WvtRBiWyUg4NSuZFX9r9satyX",
  "key13": "5vpvRNyBtGKdVFvtwdEmHPpS4xzAweiUXDEQqExd6wDunvXkU8oDkaXQCQShhacY1WQtj1ipNjNbYEWKp8vG5gwj",
  "key14": "5UzVVQaALwrdSvkaHkaSQUP54SjDobR3mRJUscWXCuKkSxcu5XFK7TZQyMQYv2TgqVF9UnHUVYGqeFhbSdCmGBwQ",
  "key15": "4Lm8teD3eZ9WC29chmmt3xzm2y1yDHNv9dju5Ps1AZXEJ6YFpVcWg8S3RruvoTKLNQ1oDiA1cdbCeZHZrucK564L",
  "key16": "5LkHRsSZvy2yWe574CMdAqhAAK8G3FBihSHM44LxCTeGVT8W1Yrh25wsdC5HFiU9PuGK8dtX4HkeRvMhp2PXRtBM",
  "key17": "VkLXx348sEwVnhW2VqHXe1iurSvf4vEei24PxgZTpxaTahatNYzJXnqxD27XLDE71YgxUaveRbiobg4cQPKusf4",
  "key18": "2wWbsrXCSri4yssXVSFi8MfZC4Ucn7MsbEtH5cnyrHottc5hQXU7Fmhk5cF5XsdsRRpQ92Sq9Q9apzE1KJTWPNLV",
  "key19": "4BhXve4HFLZddHqq5aCevog4m4XtbY3EwwzeYMVEDPa82vW5yfyqJsmo1RrbgRN2svntMzSTz1tDjYJ5RFbMxde7",
  "key20": "4ruhPcV74AW6zm5qA1Y9sXkS1HVqdhBZCrp9M4ggUyCzHJT8gUcQwn5RQan65dHhMehviJCSnQuc6PatQcjV94rF",
  "key21": "1RgxPQToJQuPfFnP7CZqGPT4bHehKWzZbGYmQWVv3bSNkdSz4gxmiC5QLzDgSa4JpqgxNCudrBs1uy3pCDUFYdc",
  "key22": "2LgnkyfPww75xcgpHE2ApQwazF9gRH7DWoGK1XHADQA9Tx2g94je8dMXTDGJJLehMMfV6zpqAEpaVRcbaXqMjtRL",
  "key23": "2oCYf1kAo6FrP88f95TKCjVKEbdtDnJx92KzqukeT6VY9k2bqRwriG3cdYKxox6ZbgrR1CNZx9BxziqVagg11T5v",
  "key24": "65F5e7TwQCNHSAXVHvxAcoc8g1USahaNuCmXB15wsYihn6xy45Gs1FZdperHC5923mERk3rVd7R3USeAgdjNEvgP",
  "key25": "4s93wQieLNUZyhSxhMgLapuJPDHk2TMCmyGRDYHjU1MbukMzevZwwZZnXZ1zAfvTpWGwzh1X7b5MyjE94k1JLLPm",
  "key26": "3fZ6k8yXyEC1Lcsv8TJ8UDr9A3Wick9phs4YPC8rv1w9VpmuRkaAHbJ7BcnDmrd7nt11WwbHCw5vzwpHiR9CpVqg",
  "key27": "4VhhoeiBwsRFU2BtmTqpGDss1reDQYkBapjBwcxEmSeRgCfhNPxxNc4Fct9dr1Lzt6Es4cL6FCeoRTHVV4u28uX5",
  "key28": "4gJynFRqLqqVVRTXjruWbuUG3DK4gXFrcYAV6jLHNU2e9zAS9fG6eNiHR4m3dAqHZDXv9zgEwZfprPtowX6MQgzZ",
  "key29": "QYqkXWja8ufnS1ZgXXawtd8NtQya9RSnUKtSP4nPgppe4s2A2aEtRfmnoCgKUxjoWTHJM1MQkaP489fk6C7SnqZ",
  "key30": "5GiNHVPwbxNgURphxxAu2p7BSgmkQJMbsvPGBGGDbNifSVSYjMMRuLqrp6WtWXojfZb9bXi4o25QP3rTqCKvHtDG",
  "key31": "5Ru5S4Ys1g5JhTVEPRUziUxNgTc1rdKVCBAMwT7Qjwn632feAamYc8RpWizPAQXUVM3fPsX3nUiaRt1RqsMG3ux1",
  "key32": "371mSVjtQ5UiPbJCwnCnxgTWfzu9sSBJW2pmP9UqMhtRNL5YbQg1Sp9tU1cWypA3gWUpNpnccEjy2dhLLwU1fWEJ",
  "key33": "3TsPh7mwCPfwEe9Ux7CbidSyPNsvhYiA6hwyBQ14uBQwy46LoFDTt8NqnDpATUfcA17nRLCJangiSMt5uz3U27T6"
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
