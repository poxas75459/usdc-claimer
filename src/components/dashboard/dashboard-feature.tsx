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
    "2DR6PPxjYVeXWXNeGhWCdi67aQ3HTmjuFPRgz1sJTKCR7pxYWqboQz9s9vrmogqZkqM4cHFLHvvjHR67g336GabP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgaCZDHZKA4hd47BcUKq8ZV1VhxiwgfZw5SfKfhKGSc1ZVxGJWZqDkW1heMqRC4gUhqJG87Sy7PRAZu6FUH7trG",
  "key1": "4a2fAz3An1RaJr9DCZctLMShZu3MCJqqqAfHrHDzbRMas2KCzVwfpjeUSk4p2fh3pWbXcbUrBvDgtPimAYwJfHWA",
  "key2": "o682su5S5V67qrqtvMHkShXAxgwCpWxKitmqztWdfsPDdyWkzkuVGiXHeqCWpdySvvpn5QcsU9tVCeuKZgEsAzn",
  "key3": "23NyVSeFNd6thCT1dK61vXy467tsds9YSED2p8ZN9iQKBR4gEaTMMYs6EGfGPzNdMGB8KGiFoaf5obonM2hNU2BQ",
  "key4": "5Y8ffA4knQPzx9MCTrVJ4X9v3FMH9jztPAgzwkxc8P5XDVBTBH1dDa4CtRHgkjV4GAMLEQ9LzeL4z2k5JmBYUz11",
  "key5": "4e9oaEfQ2LJuD5b62p3fReCqZ6jRX9JtDBFFbUosGjfsweRKtAqe4feaaFAVVF8paSkGLZTP3yDPyarHwoWhDqS3",
  "key6": "p8K7ys6ftyaBLgfbusoSvdi49HWdMQrrPLNHxCXUiERZjRoYM3FbFpWsRfDhf5z2WQXaV3CmXqkf9SWcVm1SLTY",
  "key7": "5E3qfkNYF1XPPeBGdcwk4mBUgfQbaLgqPTrQnUm9A7vRhVYAi647FLYNtyyrPfQor2RCGCf2NisSSWhFgg3QXBTj",
  "key8": "4PAsKxeKHukqniMVwq8pxqL5tiqXJ5AVZ4eGgKFrgvihUHEHidAL1Zx6UYWREE7vqNKB5AveS5BkWoyFDPjfj5st",
  "key9": "4vaA3ecU6M58BJKoX59M7DvB3qm7TfB7FBChtLQp1ZMdjPFsxV6fy12XwtboRJ4SaLWyJFaYsWMpLqvegSvmoKGN",
  "key10": "3SikTVue7jCXXB43m1RcRUq2eqGShdf3kBvjMq6nGontPSFFnSu9uM8P6ZvQNnGJEyAeupqAQ9W6XUEEtjdXAgoS",
  "key11": "cCiytxY5UcHqaoPTyMp3Bqg89wgagyWXWz3C5PbdK8pnfxzsfB8dkcAdFCJYxG64ExVWHRRs9GpkbTiMZXqFJg5",
  "key12": "4ZZPtQUjUGCpsVEo2CsNuDM1ZzxkwRyxL941eZGznuCveiGHD5N89SRH4JmJcBY8Nt8LrfxmTpH7r5AFQxdxMtEE",
  "key13": "tPJ5ViTXv6J9H5ydKU6321Z6EDKDPK7aH7vN1W4EZVYxk2qEfHdztCJ3rqLFa15R4vWVEw2Lt1LRExLyhCszkmZ",
  "key14": "WbmHnPYg6vrC5563iQBj3fV5G9Nkrp37TpmwKby9AAsJTU4HCjzBadXPPp9a6L7ddyMb6je3Cxdgppiw6WXkcqK",
  "key15": "4nMURWKFrzxA3uhkt4gYMjhNbbvgKRMJKFTz1s1v1nPdGH8YPkdj6JUiDM8AAFf1h31rqhqguumDddD1xMfAAaQQ",
  "key16": "4vgeFtasCkXCYDnjDUBDDkE4gkMpUZxJ96mYcBGTpGLza2M5Eg7MWF1YQk2AAkDYZaitqQfp7CHKY6FBEpBStkER",
  "key17": "3nuLMSAYSp9gWKtP8CPgpgKMyyqut5KXZ8wVbRUFNknEjnJrVXUKpUWd6hvN6WjTwYDp82sy62Ggwkrssj4PSYDj",
  "key18": "3Yhy11pvamiZN9k8mEtmdXVepa55N75DpGuGChM8EHuezY62XyR9b5g1vBL16V93B9uzPu4bchbaBHaf3aQyfTGt",
  "key19": "29jnkiaqgpYPKBTABVSQVmSBuxw8h6magukzYwznjZHZJrewGaJmt4TxvhNcuiigrdzjduLbLdoxcAr8RQX8bqmE",
  "key20": "4Rki38ddwyTv88v9ZEcGUP5vZni2RASmWECgMDMpcC9hdv8FHgt5WxVwMaAGKCBfdaM7K5FdgmrttYLce9xqWTuf",
  "key21": "3EtphiuqwtNitLREpjyoXMputy2phFPUgzZH1cqv2Y3pKJWiieMaz9vupaVnHLsNbCSXa8dDyubx6o1PMcETeE4m",
  "key22": "27ve1AuDQaQFx9172pa8Yrn5Z3FLHZZBJBQRMhu7rQ7AtytH1BCKeFKKWgHP4d4oYzRmDSMHiP59nzHWa1jBVKeV",
  "key23": "3RBQRpZy1MuBJ8kAY3g1jrdetJ17fhi2GePRWpuo5q3B3ioRPvEfGnyWcKNZ5sXmyj2eMDh4FaszKpJMpdFV8syo",
  "key24": "2Lhne353UPcMPkVYpsxaN25ESZ7zSMRA8ZM4QBBYDjvxNdRBoSEu2mhYRrbx81Fy2BP9f8k77owwaS5KPRaBAwRw",
  "key25": "3PSnEq2kRuDNoy5thkn2zc2qDPdZ3KCfS8gvAjnMzwGdXdqfLYD3yTpocqb3RGh2hmkyWeytZpVta8WEc65dqPph",
  "key26": "hEKpdATHK1B9DCbrVDsLMFZKgDQR2Bq9GHLxBTxumEoRx8MJw4jZ8UCrcCmDcvJqdTTEjinxifERanJTv8jtP2w",
  "key27": "5avBaPDCfpwPS4YWdA92bgJr3QoX96WUL1JmeVJpGNDaixhmYk6EiqDgwH3YhDRzZohFURUMwH3nLYT44Z64UNiz"
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
