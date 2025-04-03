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
    "4W71GcHDQ9jqRwVNWwFjwZ93mHWr1NjwBdU6SqGy98H479HpBu5Nww5AFKixTg5ynp5R5WyqgD2aVH2Y41oLxH8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LemLwvmrj8d2Q8fRw4Ms7rfTLrax1dHUZ4Udn2acbmp2GfCnRWW1S3fkZ2FUp9bgG5nhNWpWRuWV7cmZKh7S5mi",
  "key1": "451NUsndkncMABfXsJTcACmrjRvTjJbY4MDTyYnTn1hmxpgNCjhz3Hp2QtyhHjzzJsKFHpy79zHXe3q4XxDcGUmb",
  "key2": "3aUrHTzfjN7dM2M1qmtasZHVBfyQEwZGpXGkkEdEoZtCXgFAtvJnSgXuDPp8n5QXvczY3hv4TnBn5RWJW9BQHcpQ",
  "key3": "zw9knUkXUaBY4bAdyY4VqHKBTGNKKjDTmYwANfPm9aWT74tvYaEEbiuGsj3kHA3AwPXCgmHcmCnmQmKaDkVzMsc",
  "key4": "4U9cF4CuXdFGkJDU5pTn9aSK6ucprzk8NA9aVYmC6BBorebJD2iseB8hF42eSFYKpnDWBpEMHHG2aJRQgCPHkAQC",
  "key5": "2hHZpzRyox1sQLKtoW5wzuyn94a4ks1NA8bwKmoFHXvEz7u7xJHAbLBZAeW9cNYtDJCuGb5pgCCEbJyMPvBafisx",
  "key6": "2Y13vg1oD9rSUqe4S4ajvwmvQRGuo4donxeE3N8Vr9fquyyEAvsz8MmWHLoVbf9MHt3dJEXsqo1xW88N2tKrbXpE",
  "key7": "5dMDGZb2fEvXeANbUsNeaZpKcVyUK3afSbUiNgQxzzpogFdDG1XLVGLx6oL8QGc2FPD61G9cJcrkBrWwxj7E2TVX",
  "key8": "5vwo5gTx6wJrqBdcrBZKat8tS4Qbov1mderiNmfzsVT4D5zh5BELgonxBJ565tGVc21HxSoVK393c9VTzgKM2wwa",
  "key9": "4DD8TWoeBecGipgGX5ceALKRh56gErZKmWfecsjogqSRE9wTfDw9ApsmWKSBVNTz6FWiyYKz1mLYGM8fxM6AxVLn",
  "key10": "x8cdTRVB7a7kceunWE8dkco1Gi8JTXgZ6oTeqqeN29SpSAL2m3b8y7DjB4sPvPcXKthkQ822j1NCYnHbCKFscqU",
  "key11": "3cicoD1cRNE3QvgcMW3pmGEWdpwPecWvUN3HhxBP2EtAW5i1cEntEkJM6wBhLLpuHiMVHViAL9QCV7Gb9EHVBoBs",
  "key12": "QLHFzVVj44LoZWKtBjUE3mPgNTV1vBARzMB23nzvjDg3YHcC6rUr5jVtiSsHwk9jv9RakUPQiLVVaxFQVU39ToT",
  "key13": "2syoyzTmZoKQFjrQmuh3vLGppqEB4hPejKqgzdoJ6UqHuthZp75gotaLNJ9wBxcwpanL5mYB2sV1ukW76LUURnE3",
  "key14": "4oT9VMjnXFgAYNfHsD7AHfPhLcb8hP9PCMzLJysfWhU1ApYcyR6AL3ZpT9n32R4F4h1sD6vhia3PKGtwpgNvjtZy",
  "key15": "3Kt1h2fwPEPd6DZLs7UK6khNLDekBxe3aMwV2wHxh1CqRJ9KyWKdW7NahVd5wy4tdCwE1xzebmKxgLECwHesCXMu",
  "key16": "3hMNtfCVZXLJfMKup38Y2TevPTE2F2UvT4YSeQGJhkkvexkwa1VA7daBNXyXRZoesGPzbSumFcKGz8ynhiNDTZK5",
  "key17": "3fcFakJ3Lynnw9FVndSdpJc7wQXW9dGPhVfEDXKsTgpsXgHjPhYLj5GYBDsX8g89BDwvPRw5Q7pMj1YipJhKNjrW",
  "key18": "zrfNwgt3MVsh38JqFpWsy457T9SkcRDkcQ4rrivJ5XukYKHaQSiAkrL9pg1HMwkaJh1WMK4BLRvkGJRDFL7bmyx",
  "key19": "3S5SpB5oxc7cmz9LXTzzPWH1B2L3E8Ekvemc6QdLuohnnW85Du96rMoKVMeDj3z6jhrYu1PhBoAE98JRzgPBdQJ1",
  "key20": "3joyDWmYMaMbCFW2NcnLAUGdwkZx9TZakinjsmiin2JcGmPJS9qFwKqvQhKZhatheSQUjfKYBaBNHLRKqgThaqSR",
  "key21": "21qYQyADaS1Hkit85FWhv1CeiFkpionJCuV7ShSPLTHKmBoeg7yBUcQ4iV59s4DwcKcnc4YyRLNKyh8TdanS9iKW",
  "key22": "4umyuH18fcBRCtG495nTyinfXMPZSGdNpvgaRfEHo8tPHCF1DwarYy6CLnGXWfgJRafsGE7cc55o5QpWhAeffBFr",
  "key23": "4LZ5cR7AVBrHxnjX7U9Rz2mRi3uMv8nKhKrx6xArfYLGnHXDGooLbT19befk95tmQEW92nbVpfWXqzF4rvkCcrbr",
  "key24": "3rvzt9TUwfSNjK7gXBrrMhDGeWPjGF18Z81WEAeUHGmF3cekhCZF8PbEQGJxwwmqBJSu68ETkucwDD1H4hsD7c8D",
  "key25": "h7R6MePiFcU9qknHoU7aqtfdY59HYjHGcoqTxgLxefsxPrdrVv2B9iSztrV23TjTmdjbcxhGh3E4nRtbeccr5LH",
  "key26": "4ZJXtwov9PqsqDmkw7ZAdkvAkKg8u4newY23WbjA7NMrKPrpQ1BP6nhYkDjLMyauv5NXQV3TDJgV55cEahdSnMuP",
  "key27": "5YLjyixPRSvAD5vh2hTmSnsMBmnMAMMhkAEJQeQ6ZvPrVDDhVs4Tmi2xm1XvRCm1ZDKcSB93dovhmhrUNf5cvaVT",
  "key28": "58gDsmwUrx5xwZNNGK7qCXvL4WVonnLmVtou7KWKjch9XnxNnhByvuFksXv11zY7x6xEy5GgirGXYDiydjunBiph",
  "key29": "57E23PYVwJZ23erLRhsSPov6ttsR4FxVKcYQRsqcL1QJTmuDvse29u2RGniY8pxGcZU8gDXeCkhutGPncUBvptiv",
  "key30": "8UF5M4iCkDPgzK2FjvwxGPMd5Ybofv3x5F9ZfCComBc4aE5jKQTTnJsS39oykRA5MGdmSyenz7mscvWLDtT3KKq",
  "key31": "414QPtxtL2C95aqZhTq5tqsPq9QPCYcXuPZeZsvkknjcn2ZkSRyJcoUdipAqsW3rrWWWrYmDw8bGYe2SvZubnXrP",
  "key32": "Z27U4wdqAkEkUn1ZQCGGyEdYjZvVGwAqXDcTQhJCJ3N5azDR4hi6HuEpFxZE1evanoKtCCNDoiDxXqpZpdtFwDL",
  "key33": "vNScCPpq5AMsWufD6aKvPj7znh5iXTdfak3W2vPD2qkk2w5LeV74wSV3feE8rQpLEN9yT3uy6m5kUxQ7XF2pDew",
  "key34": "4NzGCcvH9Z86VzZMJuaDiqQSjYhSfVdHPwoxKR2W6YsZJbkiWoDtHDYVha1Ya2pzQsDuZcUrchbgBqRa7nGkrucu",
  "key35": "5XGB8iT412bRSYPtbndbndTGfAS8CfdLcEUyVPMFPhNQWA9mzxKdBjJ2CxEq1LGd3Zgbx434KUUwG5ifQuKv33oo",
  "key36": "5ZWfxfSwAg6LYMSJuJEYWMFA5CQfSMjpVCZEZC2WUbehysZvg4b4QRzGMFRd5ECMbrLSSWMgvGfxVEp1jwX2baLi",
  "key37": "49nsDQ9iMkXtqWgYHof7T2tHnAJdLDy6My8VLHDcd75VkQVon6k8QVtpVJaY9kWWzHiuoiikc5sLrnYGmfQgfG6G",
  "key38": "2caE6TXWCCsuR8kyCaZBMZEWQc848FzgMrdQqY8RmAsUXFE78Bboed4zo38jq1bLyosZ6Axuja943dga72DukHff",
  "key39": "hnBkavKyQ6EKA16fUnK8kpwA9JD2zjv5i3P3ufh7fDZBshd8xWmoNnScaxf8nuPQHNQjJPvM8w4VYaWHsBY6zgr",
  "key40": "JWR3EbddRxMgphcpjdJitCBt1eNcEDMWv79fbFPZ3iq1ieEgfRznGSk56BokN65z78hs7WzBPyA3PFJbqyC6cJv",
  "key41": "44MwzKWR7WigENdJXV1sGdTjxNGEqR71PTCFt5XX3efdRDrCg5a2hC21ZHBoRVqmfz73wUVFqDcTKH5Wjc14X33t",
  "key42": "QFzSqDrUGzSBTLKKJEyXdHDGNiF2MgVYxNgs4d9pWZ1xMcqDbNhWek3krtSx9X1araTMN2QewtFwZjgnQbreAQa",
  "key43": "3F1apq9zW7jeT4c2UCSqg6ZCw4EuMAbjoY4zPwPKFgUeJ5EgwxP6XkbDXKacAcR3kiTPzxwch8RMRmCh7CULueXe",
  "key44": "4roNMA3HeX3ZVGSjfGJYvVgkbZKmWE6jR69T1aiZi4zXZTVdQcfJJ5fGNvSuyTZhkNcsczeHL3JuKEqwL1punYEK",
  "key45": "4zc2ZPwrWA1Sx9RoMAfTiTNRi358f3zH3MGfuZSVvwCJrmP6Yx1jV5JZLSavNSSwzySfoC4jX6RMbTivPL41VjbR",
  "key46": "2Uo9fMMhg2tNVwU8fmxBz5ZXMBt9qCiu1pjtfLQcYfVoiaExt6EXCCyUiQnQcknjnBpZbQ9e9pUJyXgLf1XVKXaZ",
  "key47": "44Lp3WzAfQJLV9cW9uTGBQBMkmYXbWGCEAED1UAKSi7HxSAthQLL9MmBApuJWDLghzyqX6PQn9HwfMCD3H6A28mE"
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
