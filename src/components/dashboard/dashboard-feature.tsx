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
    "Uw2bXpr7RvPPJwHiDqmneEZ3xw42tznsfcZ2Zs3VrCaUBJKrV2CPw5V2XZh1VLz5wUeJBDnmUiP5GxNk6yKYCDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zpoQWGoV7EP4zxKQtL5tjEP9A37yHFpiF57YHKsqKBsaDxfo8jWjh5rZXQr2GBeUTrMWHics1pfYx5kb4qqTa1",
  "key1": "3bxHGxW4PrSXF4jWjj1LuHcprCnzr2MY3ZMx5LxwH32BU4PdFTBU1AX8TM9v73uD1KzApmvo843G34aq7hkSPmRY",
  "key2": "Y3Z2Aoa6cQFsVrCjnYTuWihBHfTYduQzvJPxMnSAE5Qu9mCGcKoiaMv9tm3vDevBvMvPUnj4nXPrjGV7LBUWE9P",
  "key3": "33oM7sGKo7EgCbgtnbjfbQ49gJTXgvNtuHFUZbK7Db5DR4G47hHgA1LEiuWEaw9hUu8iL5CntMyxzjWyMumpK7EF",
  "key4": "4LksNvhZgbrXy8cJwUsP1jrs1iKiRsjdPVvGkzDNLJMrjTGNB5tZdUMQDAuPvsqFDpTNzrBgFpX4sY6892U66RnD",
  "key5": "5gSodcAvjheenwKgzz3xGk84myCxbXom1grvWayrmdRsqqZCVv1oR3UEx5bVGrm5GGCmsmxQASDFSafRVoToDY1t",
  "key6": "5wwLhoZNgPzWKKM5soZTjLSAN4jiU3iXipMYNBcoeo6pzGcQVKwDCRR1S1XxHHiCRBuP6xtKDTMgP78yiHV1Lcvv",
  "key7": "KDPPAs3SEmdZeMNUZ9U9kqaddY8CGVqEQgio5rs3hv4aFTRT5xMFshgAtHzmrwwratpCCYP6YPotX4pqAFj1gDj",
  "key8": "4u7ZxxqCwaipcKkAgCqgP37VbkwXBnZ89Urkzb5KjetHCkNNQDgewH2PcRyEo7TmJkJmtJMftH9DCWMVEEDGZV1s",
  "key9": "5Fe7gBAbdsBaBQHNHZBCLS2BHjDJ4MKwEo6k91EvkpwCzQRxUhNSe5914z7S7rqfhe2Pi9tZ1H9MvCrUjcuh8ius",
  "key10": "2dPoLgezJUfkd3sdbmP6GFA3U8S1aQvihoastFvpCLuXfx2BXyoMr7f1Vdm39e9NhHAeK1LduoME8aFwqvuySnL6",
  "key11": "4DKDZHoCSoBv5JaMZxkhGdwaA99EokW5SJJ7qoXKZhMAg4cM9h8CK6pjxXcy2Tuczac9fvBrWXHt239d8F9rWHRF",
  "key12": "Aosz8AcchMznYSN5TgNCKgvvqHXydtMXtE8h5dLE8eKMFKzXYsaLTJcWxQoaanhEajLCmcBSgAH1qsHY3Mg7agc",
  "key13": "5nTZdxJycCu9gYVdUWNvQo1sPBdqTi7EN3E4PskrxgRaUwKf9FU1eYR2g5vfeTKDS5Gbt82bbLGuA69TU6nQgeH5",
  "key14": "5rpSf6k8q9YQegWgQfQrpkxewTR6Yz7p97zzFZRv4L8gpfnDrC5Be98fjPZFp54SnsX3TGgAVZHSZVaueXmDWtFq",
  "key15": "2dxNxtaUxw6SxjDYSnLbDbu2vGZHZ2LEJy48NdswDEFzKwHShMbs48TAsiSAd8fCHz3WG3LPkj5vaQQQtrsdZezP",
  "key16": "25MUkZVgcX66k4e3Lbioyj586xgvTTLQWcCK8fmKrmbMzaJKUQe35QaSA212nDMezHrcyJNRUEsewtVnmtPZvAbT",
  "key17": "2PiASXTbVANRqnNRieHfBRhRY45VCJ3i7pRHrStxHhdoFgaJ8uGQ6yRjaREKbHC7vosNWajC9pPu6MqZSyhbWG6p",
  "key18": "3QbRNoS5k4sftVp6VZnYApvPXwooc4NiRVFH9NL8fgiDmBKXdScGWdwVGZCVr5acbN7ovvYH8gcqZ8NPPoNaUMLP",
  "key19": "5h5PTn9BSxvj2SMh1eqE8QXX3zA1VJb7pQGqbxiFZNAJo2LXTVHwL3DmrDm1hqvjBdtHG3KBZo5Prcj5YYzs51uD",
  "key20": "7GBLhM2r3fa9AHddXXLAEnJnVh1Z7ADhh5SdGTR1txXiBquHCxkdMXDb2fUTgh1HUP4kpB4HQneMwgcMpwdJXet",
  "key21": "3tCACNpxHBNk47p7ft9ztcmUzBuLAA8gV8dcE8MHC6CuUgsEm5u9rS6aSANJX26L8967Pnmi64BKKtaTREhFcJVm",
  "key22": "37cdcSEi7vUTVSRXn5S9Ne2N5XbbgyF7LZqXBsb8ZTyf9Zsyh6KS18WGWS3wdBKuKbfsBkNwn3mSDrPNK7UbgZD2",
  "key23": "37H5QarFASWhLDbWmXd5Vy5b9rvw64oWi3yvSPwyctJ9hrvt6WFnY3q4rk878u7RspTZU4aHVnt48pUUBS9Te7fs",
  "key24": "3BYzahArXLxz5zTtXyc9K411CgR16CjnzcTvPn8Q8Jwb8XyFBQz9nLMLfN4C9FQGB71MREmgujiEEVfeL28AQaEh",
  "key25": "2UPj6pGNNUx7bzz7j6hipfC1oYScr2Zyxf57AYiSGeqeV8Zuo9zRq3kucs1AjcSYKFzBB8apNBpAgpibSRrB32EU",
  "key26": "52ZQfzdD254s3sumKMXjzUp9sx4aVY48bj4SefX7y7UQddFz1Uf8seMqPnZRWhpVVKUSRbsScnENsxc17nfV7R8x",
  "key27": "5qtYAaEAW76Mz4nEMtmf4t7ztwtCNMnPjinnigFP1GP3763TuKa6AwxQawkzAyabFT8ZSRALUgGfzRd9j9ykba6H",
  "key28": "4mkJWN6tbv7bFhEcA7XkFt33LJ24rdwNon5ix4Ms9LCYBMrwHoSS7CpUgXP9h5iPkDMYTbzuKiSjKao39Aovw9df",
  "key29": "2FwRngRNbTKV1GZWFXkT2aNA9De493DEKtm2bTyAM9v17VpGLiAJ4teJtNUfS7pauMv7XktvNKLqrtEejqD7qHMT",
  "key30": "46wcD9wFpNRZQWboth3uY7JRC6tfU5qEsnFVJkdgfhThzh4myXYywHYtXV7WWoGxu6Ji3Y1NfrPG9pG5Zz2ddctM",
  "key31": "scFXjrPjpQxFKGNrtE242rus535atZ95aGFaMhZx6AyG1ofUX23DTQntWaBnJuksUpR37n11esy4FqocLEuJYwY",
  "key32": "4aTZL9gNaKN2JVwDveSYEuD1TtK9vSg5ViphggvGEag5KTFer5YdFnD8u68xmTRFpLhfGWbwcxHf8VxeJ6YYt9Lb",
  "key33": "2Zupmh5EeXUjyqVdxCh9kea2EYhgjtA4j6iTMHwYmpbHUNbUZuuczgjUjXvhzjo6An8KUiRbLTo2NNx6aGhW7rBh",
  "key34": "5EA4uU8BAdAa6YzUmK5DhTzGsMx8rKcCTRMsmwx2iQ5DRAzFAJGDqSEpw8MUQJ2A1cik6ShJkhbnXcoGP6MMFrDy",
  "key35": "BxH8je2c3jyLFK4jMqxsW2oWSKdC6jWD7RSGoV1vd5PtrTbTChpacuBiwfxXyNz9FBnrV68e4w2xUfSaBqAZXhv",
  "key36": "3GE7turhMSj9ANZoJhG44S4D6eh2RYb2ZNY44D7ZmkY7GtfM5yMBhqpDrPJfUd9CzdqAkxr88V1enwf6Whx3oHNG",
  "key37": "53fn139YdrD8QUwJLKgAZwXMZnVw72MXSVsXLU79MkWFTpcftB2asSh2PAQuRcg5iazx7SMNqBHPBxgMf2qBbJFs"
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
