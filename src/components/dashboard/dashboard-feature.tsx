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
    "3GMr3BxBV9tr5JtPRSgmuHRTDS8PQWKbNi7CEeW9sydMQCAqPGWWvcM4inHY5GmSXvamGEFFShBDzHCfkBgW7VV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6dHnM1G6CgTTaq5yBUz3kDEbhY2VLf7AjhM8AmJP8F5uiEMUpSDLA197HZMy9qBXFitd7sae3ExsdkNBNbu8bK",
  "key1": "JK5AviX41YAq5z3j9PwfdBvSvmJ6UbudkmN9DPv7hcdtfmiQe4RCqLD4a14nEmoChDL9Cf9P7Vui4Tq77uSFiP3",
  "key2": "2yavJPppqqH741wAPswAdVr6YV7DWjHQ88QUdwaaDYFoukdykGSdogoR86yiJSBU6gBTtfTRWkhww7ENpzcMsRD1",
  "key3": "2AGmS3sF99suyXhtvCD6gdFXs3MT4F6yQvDNVwEpuPTyHU28KTrrmmW4dY5DeV7GX5kfeidZx9KhaSEAaUFcwttx",
  "key4": "2qWMq1mQdXSiuPUQ9GGNigPQhXLmU5QpPqcarCKW6eF4yQCyrq7KGNAnVnHsC5hbjoSBZUy5tAFsZWEzF7rLXtwP",
  "key5": "NYuNXbzkyMPpucRdnCqkmtdVqrycYC8SqYEuPTdSX33uVXbgnv4p58N3qsFN412ecthSPC1efKVhncKUGhtRpyD",
  "key6": "YcWWqRrLPVfjvv1rETKNRGZ9fnT6GNUxijXdDM9eU4n5KxiynasX7eYFuMVu4HSYxENZ4vnvhWxPmJ1eNpLNABo",
  "key7": "3rtRDpymL4GSJZvxUV6jzAbGQSsKMEwKFzcZyJoL63QXTSScCyGNMcPZusfbaKJwQJuJTvCiGipufhpikGm48SUa",
  "key8": "2Lb7WZtVfR3bCTrBdPxbAP9dRp1eRCpej24UHhaBkV4VfoHLKD9RgtEszZVR2DVX2pxWRnTZxXg65RD334z47UdT",
  "key9": "5KCK9dApsRoV1tSDH9QMVgNmUsAYJJK5ZhMrERy3GtbGcTzMZx1hNMHy2zwGTnw5RMW1DVwqmyfb1FmGkFGyGV3z",
  "key10": "rAiRycfrR8F5zu9vX52Le5xX91i1WMhoRFfzzQdxXsWQQ7vbKH6ZMmCF37kxxSMRde9WXmzTQp4VKPsYQkUnyEd",
  "key11": "9zM1DankzzBGkRsVQLMSf4KTPZzm7L9CvNnVZMwWNRixgvKXw25fGc4bit2W9hMECSWNCVpD2qQR6HNyHSaUqow",
  "key12": "3LxFgHgzBXYhWQtNdUxBQ54X9U21MDXmjVnD2N2rV9WL3F8MuKn97sThEdHQS4btPpiu5eW5SsrvFqgN46yis6K1",
  "key13": "5x8V3L7pnMFqA5s4nbbpgyFW4TTMqKDeW5pRXTTsja29k7fHhH6QLWjJqwN6VPDV9aDDnHrY7gLkDQ5SyggxMhbt",
  "key14": "cG8X8K9Cy34mVkw8wL5VR83LYnM5nRH6Znc8omuNrusHpYM2SMujmbkDZa8VPta4VNWmyZvAYEGnkyBfGYXP9iR",
  "key15": "6126wo6iUmCkQGQypbKAJCFomff6CqRp7vk6zHVJGDxiaDsuSv2EadGtRYvX1YhkhQmz4bu7kFrXEbApBiu1JRVN",
  "key16": "65re7pKRXe5EWrHVPUffpgkoxm9XdRg3wmsMDRbBwSumfGpxuaRPswZTxqjzYXmBSDf5eQoHEgPCPRbF8N5XLf7Z",
  "key17": "R77TRF22tU2A7BrDdh5SVygvihPASW7ED5k4niLDDyhYWRLkw5Q48bqYiFy4UmhottgysKx9swGuNmo1NyJfGiZ",
  "key18": "3oScuzLghhwPLkawNJdTEFWWYuJRnWcacu1YnfH7xvf5pkH27jQiSh3iDfYUWzwWBNaGML2tfFDyiSWivpwHSDmP",
  "key19": "5CvNyAAmZcy4eU1Tz9PTNzbiHgFT9N7XwbSmmfDWgoU1bXUfrsDxnvaESF14XNpQrDEweNTW3xohYKvEAtENFacu",
  "key20": "4NaXdeohzJu6bSKunmBCq6fyWqxaUqRXA9MC3ihuztvo2oKw5GhvmsMgqFtms27hxjjthQP2ny41GuotvYcDhCCE",
  "key21": "52o3MKwbngynJZXb84pK9mGCssStw3judCsT8TRmfEhmc5RbZuMZd1ZqduXbqB63J4JELcby5ZkG2GvHR1RfTTaQ",
  "key22": "5Ekkz7pbs7kfE6pAckBVRS8JFFq3ELwQoq5Z2gTTiGme2hfFpiD8RkmYdje8jtpKevV4dqwu3bbo7wdKDKX6qVpV",
  "key23": "4GmCvJKvAbSxofyqKFRQSnXY7PDXQXD5XGVaQR1fbmSSVX9TAESvB5ugGLP1npuH35tzGPd97hTpT5quoX7QTfbw",
  "key24": "5sonTmQZpRPCu76v4bHiCgdYsQUoqzFLK1iEX549FN92hFHSsPMF7FE59d9RLTgiV6gd458PFGqrsuji5cHH2ftQ",
  "key25": "3GKZCdrrHxuJASnBJ9e4r7YCGq77ZEKVdwZpTFqt32MnDYiWPfnbwGt4VHzWuneKcYrU2rG9722QkW1NW1q9uE5x",
  "key26": "5kLaBHr8KtHTnxMmWtuV2dcRokXMerWJRX5ipU56R5vxuSJ165qdfyvJEGbjJrDKN6bnhJmNh6zekkKrfb1zz4mb",
  "key27": "2WRCvuBCBDwytt3JQiSeQbesJzphmL6gNGfssBPgsYRGKSwFg4UJA8Z8d9FVdkwbN3DhUp8RpqUmbNXrBXgrAZ32",
  "key28": "45rXfcWyZpcbGU3shbW6PRrYF1GZ6NMwZMkHscUWYyJBjZTKAbmxgineMiAVgZBB9vQN9pCkGd13orh6tjp5ze7z"
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
