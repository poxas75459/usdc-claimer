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
    "2FEU6oWvmEoiw3j2RqGmRzg8dkvhcY6KjcjtZ4ARWKtRt73wBk2w4U2tkFn9yA9FnPSdkCj145NPTr66N6ro6CcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ab17GyAdshyGU6LXtxECU6AMDofgRmmYRVJ3y27odGEwupdbsV8jSCC7dtHZCLjyqWXQtgFmUxMuRfneNfiVcUZ",
  "key1": "5rnbhuw4ocphF443CYiasdstQHd8Anu564RM8bfCQxgL9DQurLbtGxMvbRxg2Q6twpnG8hAHQbZkyd2HDgVZPXZf",
  "key2": "2wvsHugEpoXJAJXR5wtKETHGsCdBvxdDuPSZ8EXkcBhvVPBnXydH8WKdSSTS2tSDt1q6fXKk6tBF16CTXkwak6qD",
  "key3": "3bLUXEe6kDp9pAFYm3wuu1FAdRLwLmg53wANThw8pPN7PmwfpJ7GAHPvJfS1c9KSvvQBYC4ey6ZUvk32W8aCWVZi",
  "key4": "43rv7NTkkrSMwTqYB2dePXMbSpNYLfvqJ7QDtQGASFNtB5cTtXxXnqoAG4sv7QQtgzNN2shVC6gWBGZ4h3RfegnT",
  "key5": "4BXFr76gmXDRms9o9RP2B2U6tr2zsQkgNU8RoZgKGdRGvBo9YMvFi8Dx13GbnAFLWRcxqDbPzUnECez5GiMtT8XE",
  "key6": "2MSc7uegZWpSpjFjiT9LLUChEd5kW8mhKZ6eJ4FBWNPpArgsX1exmuEqNZNUbANH6MBShAiZxp4jEoM1F2BQieX8",
  "key7": "3MbqYFZeFeo84efqJWBDisPWKJJX3DADA8nd5iT5rjpmHUB34XX99iqWXeadk4YGuYtjTAQ8VQBjZrcgnH24acXZ",
  "key8": "2qJUUsykUgrjAzi8mytfJp9ih7uQWgRDFBjLgWZo9JVnHhJXGHP1QJZGCx2TCGACBqMMVESFe4io4ycA1s5KWC67",
  "key9": "5Vp9Y7o5UGqjAWjcX1QbgT9pCMa5jibvfbuKDwnrMppm2aY5VaMq3Ff5mgNRGiegtNdnMohh4KRZCWFBoXbBLx6p",
  "key10": "2sJ3LzFnJcZiegVJWqdrREWANdRjuLk9KDxFykyohKn2ymAb1f68DqwYyQ2UwM66fnR6TZc6TcSghVrKKh5z1Z6w",
  "key11": "p9EL2Khn1kv6zKAsmJubuq5XoxXFGDWaEkkXxA7y1MhuKhZpj9Rj9Pxg1oL1YRjGrVwbmXyeGLQDAV8TyDerXAg",
  "key12": "4ogggDZbHKMNUcKAg7fybAMZuq6uJ4Abby7daU4uBPvbttzMESoMBcNq1FeqV4nEDL7AwtErtWrcuKfhAYZ35nRK",
  "key13": "3jFq5z4WzYtqF1aT4eTwExqGpTf3QznmRxfvFGhWGu1rW7cC72qvcDMjYjCyJejBe4kwH79R1HFBgE27v7n5wz6X",
  "key14": "4emA2KirRgMksdjZ7td1S3gL47azfasDbn4EjameBwB3HK1gxoruH2dWVKkHHVVXxjWR8Pu5T4YAw4jEwpqTNSY3",
  "key15": "4Qg7DJjhcATqdudHf2EdXmkjABCf2Bu26bLxHxAE2ajpWQ968sSbtNAB24ubPswcRqBc51WvKjMNDn5Grxcqmwag",
  "key16": "2U8vhfx1hMdnweCYuGp5ZQQ7gH5zgCD48d7DCD558oxchgmE6Avh153S2GYXRL86iKNPUbTpfgMZEXUyp3ympJNk",
  "key17": "2xkLi2RZkfXLyB12GEAm19x14PKadttK9XWBdJQhgtwkdGninJTekafhvvXjq88AWoMj11q4Tiq1Un9QfPSHdaie",
  "key18": "4MNKRc2EGFVdSkK4FsbdEuF2aEixCZV5zQgZ124H5subv2snsPp2UvcEAJiaGjmTCzkbUf4yugQAqYeLTjACFKi5",
  "key19": "5SVwUVhgD4RGtenrP9NpnP7bT9GmUDGvRQJdbMBkXSqJFgSMLDP2Cz9PBs1BLkUosqZxPm8bfA6LabgoYPGtrmjy",
  "key20": "4XsfjefXB6QWR2n95VEN4THBZp3j2Z8jpNP1W1Bbk3NT4HL6v9Z7LDuCXdrcLP5RpeTGFPtVGtMHt2KRu9Ge9hAh",
  "key21": "43DYp42qNvpMWWkf9rC9uVYku83SeSAqaukAy82uQo57B8Se22CVrujG8yGBDrNwGxsDo5jawefzWQKYfZ8Rwv5k",
  "key22": "3ow4Mjc21BtnECXPwMgbHrJtXoa69HDJqfAUYXWcTm8TDBCTvMf88g6Maa4okWSBL2tR1eK7bWoAABySgLgRT1Gr",
  "key23": "3GV6Q3DUhEz7y7rKVWZrDdYiZetriLSXqnHxR5zN46tJqdeobtJM3DDQEuAkdWmEUgMi8VXZ9Dkkmch4UgFKPEEP",
  "key24": "5bExnKTZHYUDLuSwCuF2Y5k7bkq9AQ7jB9sd4Kn1W6V5uhwonpkTXpxfAYYLp4uE3cX8tqkqDkj19DTYieSrM2cJ",
  "key25": "2akGqxDYzJfrRLUzqzFem7ra2w8dPTukrGdTjiqSJX9hCDshUttu7WCYKXR8T32WEKbVoW4hxD9CJvXfiy43kzar",
  "key26": "4k58MiZKSxyMPBB4dwRHdx6ChyZrM7tjnEnoCFxm1vugP7o7oPRw6BscJvzKcVweNYNjzaEz7Vfchgg3jUWUJnea",
  "key27": "2nJAA5zZC9u2ASzVPyEgvhN6bWVWxxAmCAzrodA45VcHDQs8jdEhtYtQzNBzkxahmuAMyQYX4CZpSq3Cp5Dhh4vC",
  "key28": "5F4wMNqEUX4TX8W4qxTLgPTbvM9hZeND5LoM4yU2K3E7dvEoEMb4FJcyb6nNsNP7WU5n45m8N85Q8D1VZbpdZYdj",
  "key29": "4EoDpjmpSgaaN18VxfS5efHHrVaXWC73UFaCJh4Evt4XXVi41vU5xAEtkk13uqkYyxXyfZyc2yhfpNKiXfBc3MrM",
  "key30": "5ohAjBSFbQ5BvXQhaMDa7t5B7uDs6HH8okSSEs63ReRN9ftN4cF3UtjnEpXs8R899X8sKRoBB7TmcSjTWa85g5EQ",
  "key31": "2XSFzgPRH4MsrmmmBYNWjAGuaQjvomy6ARfUXQEacXopeJSGGah126d2fyWem9QrNL1Bzu8TugWYuBeFCwkPAksc",
  "key32": "5V1TBDubyGvG2iLLMGVmrykGVSQfsCLXHThwskr1rW48HdjxKC3naURgmEYNtjbiy1JpmY73dipDbLii2z9d6Zdh",
  "key33": "2uiYs4KCbf7fnULnpzMLgLEKsjAEZNJ6CoKBcpP5nW1hNHGhggLiNAgDiWV5rSNq5QJ1YYHri69cRtep2ujxzoy3",
  "key34": "5qtMTiuz9keKyD2qUfmTd7MvYt5vDD1C5xNXgndsinFHzdLamZoDYQadSgDPNJwVo4LbsXjwxUJqqfYeaR4vjCGq",
  "key35": "4jNUVsMGVkjXBEgto67Q5ev2XbEFt4Ak3GAai2XBo9SD8YvfeTjvquYDXUvadzGqeBaBUF7PDkpHks5NBDVvUA3A",
  "key36": "zuE4qmY2djgYRzCgDxa4h5qCPV3xPD5FjRwyKhYEMWJBYYg9ThAwFrXT5Fh7jUfbEsUfonFQZ3SXqknffSv2zpC",
  "key37": "5JQAJ6ytZH3BgLj7W4bLxqGBpYnZ97NmwQBZ1wo5rmxLLQR1jGhTMBqK2K5u8ayYSWwBeroXkASxtQZF3MT7YBZf",
  "key38": "3b2GZxnBcfhbW4yZfc6FHuEpLm3RcSbknA1PLFLuM4K6Pmhmz4m5ag86yAEy75EQRc4SqLrR8p8vn2iRppBFZKL6",
  "key39": "63jASYukGjaq5RqWV9uemfHiVHQnnqn4kmwrwUMw7nKdZQTytm9zTgZcatL4A3CQUqZWmxDodRQKvtZLAgCqwdXV",
  "key40": "2Jx6KFYJgzUH2xwcvKkEqMTWw3R7hc5Jv7xUMPMwg6mg2yPRqB1LrBhQcPVenKbQCK1R1X4owL7ZBNGC7PgJqF5N"
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
