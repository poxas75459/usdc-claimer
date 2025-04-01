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
    "3bxZQt3xiuQZuZTm519HjS5vhQ9oNEFzMKiTuVCfPzQh2Knsuwx77QFgewBpXgZKVWTzWcMFe12sHxJBSu8nRLrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DtT7Fs6zytunEsWGLxepFGTZ43st3z4FMpsATuCmHatbbEixCjwDUVr6vVYskMfiKdRNXApjYtbUGc55VTuiPZ",
  "key1": "4nbCHK2zYJSSDqywwxg6MQHXZQDS8dTp5PGB2AyGFB74RMRNoQV82ZYNjeaSFHwRmAGPtm9LATgL6hXSG48LBGp3",
  "key2": "3tKbsbmKZmrHNyxcvSer32gwXe5tnYmmoUoj4ikhgbZtuMqUCpM9b7S3sjm2okzLQg24UVCnyge8KnkAtwZ9LUJS",
  "key3": "5zmiB4jQ4hjT4tvuDhizyWvSsmM74hs1V63u2SfaVcjTHbNgPmJqbdZ426M5behKMFMV4n5147MdGSJGZqZ7UT9v",
  "key4": "262QXmGycpwH7oaV1fYk8m2EWhYvckoV6FmLnpZEpH6vrm5JhFmFyLRbufvsKbk72zC3dAJov1Ht6SFXB9UwcUic",
  "key5": "3TZY6KgTKAVMrp9LakL5NC1kBUUm1p26qDeK71o2qumCTRX2NRtoV6GDYsRAHKUB2PjE9XT5856waxJRYZ4DRxtv",
  "key6": "3jZgR9us6H1U6AqrpLhYS5auU8CNRkDa8DeWtoDY6QUkcqhY3voX2HwQqfbp1MqgJRs3UF3pPdgcFWDd5LMpUnWJ",
  "key7": "5xEb5zxEz7arrSijrQLpmHHmFTWN9mtgj6vhBtChoHfezxpGCLsYxJD6xNhD8kGva2mXVfd3FjLZrM6NhMMjqMd8",
  "key8": "5GiJtG7fHkR1rHCip7XCfDks4bzV6othXSFXAioepBoRr4XtukHbf7uMiVWmb6q6DMUkhc9g8drEPhTdugaajWwU",
  "key9": "43Zpw2MMBZDoidrVSKynxipyiB9yDmaUKzLWA3Ch5HbiV3KpodYiCfLvei9WZo9fY8zqKSSrHrEhW2boWpoC3JXu",
  "key10": "3eQ1ZJ6QP1BmETFpAso2LYugwt6m2SkXrCnJwp2KWkWTXVqqsA5rRuakZ9Azad9Fnf3rWyNkvbpxa5sWpt5d1G5v",
  "key11": "2RWC5PoGvDiwZpKd1p5GzLxSqVXUnHmWwFWhi47Rzxvc6e3cGnGMAX9AippWynNpnw6qokXE38zhpPDYZiyzMFqX",
  "key12": "zyduqGwnJDZ11x6oJA3VFbQy7UxWx8vJTye68w5obgFGVxHywj1q7dJKWGSe54sXUxj4HcU7TwwNEXqCdbLNnkj",
  "key13": "4jdtQymUJFzibnYhNm8uUMHJLJae1oGWjFY4rAmi49MZ3SwodQNmZ9JrhQtbeZW6LYN1JUNNumZqExhMSAc9svzh",
  "key14": "26oxZLeEcL5xEyZxdKCkFVpa4dX2ztMDHgYxkZSHLurdoYxokWEaCEyYLAoaU4H5ww6FjXfdiGQDCCP6mXwMdLTu",
  "key15": "4QySWpMff72xnu3ARjhMSsw5Gk9cV8We5ReH41T4tQXU3UGY8xyG3GiXJHukQvK491DAstpDnVQSsEZhxqakv3Vb",
  "key16": "2mdM3udQTqRhvgCBsxjarrxhFxLEVq8dmLqTbLrumAGydJLYtXPChJ6p2YwTMZBd6d42rSk7UU47b7WaS1gdE6M9",
  "key17": "4QRyRxbQXB5oWMF4FL8WhvtJ6X396bseUdCi3Ai7p8u6MkKHbiSnVz36vy7sdEaDK6jVeApBjJJDNGZ3N3LS17TP",
  "key18": "4knuW4GxuQbfz5MVsVmU8v4oRwAHFb7Ec8u9euUYq3RWeXLzUfhaMaUpsSdezeaNfz3ZA4SeFHsjRw4s82NxE8Qc",
  "key19": "53C82HZqgysSgXL58hL3tsZpoZv8GzSY4tMpXdBUeH7oNuCZZBgNcr5FnWTVxgyMjcGGTjP1YxPiqw9BK2qRB2fg",
  "key20": "5NyHpikLetiSTohpHkXn2gm7HaArMnGKfpDT4JYaKEokZi952pgH1wjBC952nojWBv9pbXsFA1hSo6N7S8X3sw9q",
  "key21": "cUWD1oWp6dNLfFLc4EnzucqdZFLG44veSNtTVgMwhdok5ecg1dSuUVU5xw86h1NTHf3oDEkrFHYQu2H49Da2SQd",
  "key22": "5kFU4K1andcmvVTd4oUxv1TkAWtccUBXMDxVPF2RwkYYDu6TKhinbD2Q1BTmVgTV62vMcqtRKPHWMm1zFhaQBjjv",
  "key23": "2tFp9R42t1AWcQ4q6FVffhwRmuBiUXFXWM3aq2LSF2BECg644j25DGujS78wQ4jt1mKAqJx1r5P9EArtESYCfsgB",
  "key24": "grGn9rHjouWBw1wCWKHetS91wpDQNFuCiuhKEDJYnykzZQth9dVEGb5gZGyALUPyVicimmqdZtUdsF6eW81bGVq",
  "key25": "5bSgswnWTTWAKcZC6zo3g1p4ke1Xi8d4L7BBpJNdfShih5e7K3TpPxenkzbW62Bb7ocStwAr5NtMJWVWVuLdutz7",
  "key26": "3Bvn79RxuVxVSHxfcX9VMqHC3X5s2q3TRnVTHbeUrqy9f2FkzxJq5dTwZk22kR2rDn2fhqViyVXxNRGJh2kMXo8z",
  "key27": "3Eb5euieBusfjzfb7t9tv3gaHcVpGZB5SrMGDTofa9A8aLVQzHwba7GB2vp5T38FiwvuasBJiCMioH9MmXMA6BPv",
  "key28": "i4ndkENKZMQJtLzBVxWBjP9XkTsbwpUPYfdmrAgkkyQs7U5FCeRUP29BbzFUsKj942WUUFJiZt1pRwpqMFhPe4J",
  "key29": "27sCdHAfHACf6JTaAEALRw5ipE6cqvsg3xbTipHzYNgUeKhMpMK6hhTkUNTdgA8C2afXoyjLKEpUuT4r236HrV8w",
  "key30": "52TvTLoS8EUbgVwAhGxXnQRk6i8o3RACtD2piujKJDu7wqAAgDSsx6wAacbfYsp5wH1FvNWeBr8mryZhhN3jVtce",
  "key31": "36upbTFYrb6TbpMwo2oXaBmc6eXgdsUhR2D5rmFSY1YAS25Hg8zMsvco4fZSUjFtqYo8axvnvusWJKa9ANfvTLyB",
  "key32": "gYaV1vyVxuRngC2Soc2uGEMJJE75JqK8oUiZQTs2diWg9o1unvfQPd5gbBsq58axZke4M6L5ZBhGpnSULWYtNtR",
  "key33": "3THx9JVFu1mkNR43dDAMdWps28XJtxFp114S3q8wUfyYTSHV7RJqaSHmAJyuoLgJLMjhzZpsqjnHQLrZXxnhKsUg",
  "key34": "4KNGBXvDhVZNc5NKA4JmqxMEt3Z4r2JNpBfoePvJdM6Z8vLtFa5RXYy6wH2UnEQLnh2NJWdZqYKvBWgeuj9YdMAQ"
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
