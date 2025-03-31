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
    "ay9FUACgbv9UfQYYfT4kbBA2Lgy5pL4JK7Y2Tvn56LjBrkoxnUkR51XSvJmkiYtoFnHZD45cnvsuGdCgm8CpM83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43oDmnTu3cH4c6w6U3RCv6RxbuFyUoKNFtsccv2cNdFvoMPiBd5yUhjQQNZxotbDGyTfYiLmupKBob9ZGkJELXrA",
  "key1": "3UDSmYqsV2TXz7SazFC1K6yGAnh7Hfn4AKUdofhK5WuqkP22AmXjiu4kyxj4WHDZ7RQv6ZP8BW5Ld8S3Cb46vne2",
  "key2": "4eFqDePWeHXcxsWbVP2nFjJNvHbmQ6MjRPDf3PvpMbq8FytkGHGmY2U19kWfqsdweqpUmcUdkcqGowM5Q8m8dR85",
  "key3": "4G6WkQA8UB8UZcp7bGaxJg75ebuyZ68cMQMezAoHTvHph2keWFu1Mg78wTPMsFyRhM76pQDgngusnBPsPMc3Qvik",
  "key4": "5S59thmhagc76cr7q48qQR4NUxEUhsp2QgAkwyzzQjcMZRZmD95e5szGDpCZJC7Y7mjSsVipibtsHWatC8NS55e9",
  "key5": "39d7NFSW3d7ozcW5L1ikhCf1W6aDLG6yWW39CR8gM7uNZnCqT6HL1gyWcrLMYtkRSyWWgexP8bXpmR6Yj6ZamCs",
  "key6": "gKoiXcDj5wdn1tiXK1idYPsCPFEmconCjwrNBSnPaZNBMh5VxFpqBHmJ3o67guYm4ojdoCpewb4Nj9ufmRJhEfu",
  "key7": "2PUzNDLrH9tUDctECA2dpLTsRE6u2NCVKj2G5UxnkTbJPD5QMfmGzXBTCzQPSHXYGDT1tnvXSy9dnGBMT4aZHdS8",
  "key8": "3TiporBaUnW78ovXnwKyoeTButU86BT8bhERYX8DYENfd161hP56CV6x2AdRbxkpF2nEqSFM2FDLrAVmJanNrYYE",
  "key9": "3imKkdy5XcW9oVSd838CZBqhJCHd1AHqBb3TkevJrm9JyGzJbHzi3G6QJA8aJq9YwBCcxwPTQFxZdoCpVmRcSnuw",
  "key10": "2r1u5Y24bUtZNuVsP9jVj29WWwzowBeiirvccGP1o53amoHvFztPvMGJ7HT3NaVaRevVWjGnR8hXsikLQmeFkfM8",
  "key11": "3E1HLad3GWLCWeqVuf7SX5krnH28pEy6yaEw2DkCq2qGmCeykokwtVxw2mvBABtsTbPYyizSVP8vU1vuNNNk4CNk",
  "key12": "35ShcTCFuBRotE93oy6kayYAQW2G2YuH5DEi4vjZRphwL2sYrzv37J9XJpcS8GoCJRKvMbWcqsMCLAVa4BWbvBK3",
  "key13": "4AS7QaQGyzvUnUtgj7ytCBDZT6bNSnBCQ547wRtXjLcDz8W8wJwkYG3ofrGLKLhkkMSYKg7NauwJ3xETiB8C6QU6",
  "key14": "3LGnGXnZXUBFh6oqfEkN4cZ43vwy7gtLpvzbErpnUem4KF6GfxXTN7ThMu82hpH3CHgEh7Nm3b2q8ysW9kaRspn9",
  "key15": "oMjDJiAdjTjmbdZfgd5PH4QaezYRgGHKcACzzZWnqvUz4U2f5CmrKoke8mG4FknZwZh6kxC6bqBkkRRzTcYBtjf",
  "key16": "3Ftxp4NnKHazUcfVdhCBoeyr1EYJgdVaYfeYf9knVoEHmsMGoTu9e1nRHy46CUXdwRA2T49oXPpAVbDoj2DKAe4h",
  "key17": "mZhzaLpmbTKTdnD8heRzvNKvfi1s8xatW2ckrQmspwMRRtQH4LuuCy5KHDRhYkhwcYLMGivu69dMGqudt9vdLY3",
  "key18": "AGmv2e9HVTRUWo2zGp66XCPfy79gQhywTDmKiGuAgTdMJvcTQAfF45uU4hXRTM64sKT8XE4KACanW872tDKTF9A",
  "key19": "2rmDc1pF9avFmnG5iUqZiVJEvmmRi9BGSjxonYGBDCUqa1xG5rVqVbL6Fhmcr8fusFxhanT8xdce9nbchpMwpjc6",
  "key20": "5QKy7BvN3gmYXgZTjEoQNnPMhHmy4NoCekkEv8kRpAj7aAURg3G5d9AbWKbsoH2YwFynj89CmqYzSaRohn2JtDaE",
  "key21": "kX1t9qkzkivYEFunKPoVn2kgCKAeW1MoZR2jCCdnGerkTRvBKVfyDZTvV34ddwm5pKfQjak4HkB9SVDFn76jUVs",
  "key22": "4iosAXLZm1u9FzX9biETbDqbEWj9JyhCFcUFyvsBXVxHBTy5TEeoCapUC4hMnkrV9mQJdF6EHcQy43qtX1itgJsu",
  "key23": "55AmqPiirHHdze8ofr8zuzPXdJPTxvtqLqQvaSSKfKLKny2bkA1J3LJAZUchyKoqubR8ApKcZa7KMVSpqsJmHAKC",
  "key24": "49KuQiokNW1pme8cs2pJU5uD5zQCK6Tq4GjHXFPsRWZTeuYr7vxF1c5tZrjVy5Vp8zzeRPYcWyuGXDpYSHFtY151",
  "key25": "aksjU528HXLysLQjnGWb3b6TNEHTUuXLfTTybQLnhRZ9RjLDYDytaquBvQ2uYyHe8XQWemUJg6RsFBrc8xtmh3Z"
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
