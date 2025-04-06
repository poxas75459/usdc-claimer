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
    "3zDrHqVpNNQWGroKYkvYnmbjLRTYNQ9gxRweV3Xetc7YATcdTFy4uEjHz8ypMquNrjkanDFbD6LBxmL6SNvXmbEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQgJF1i2PjcyBhwbkKh5sfi9Fq7SLZN6WQvsy2BktffcLe33cT2WNUDagiaHdSmumzjhHtRUcfV9Yfo5WydYAwh",
  "key1": "2DhB4dmxFyiGcTmokHwN3q1v7UZUrt5H8UHTwvydzhLYpMxA3ev15diWeQJPnvUuzKYdJMMf33USTgDUdziWsGBs",
  "key2": "yBTjYBb8DbWc9KYzTBnyfnzmxpSJe659EdS17AZtuKHEvVuUqroY8TTYraoYWdkHSiNWagKdDtQc53jABBCt9jR",
  "key3": "2fEnrSr4pBQdaNRqPKToHHeHtQVXwLz8YtXkXE7JS4kwqkF9VHPQ3gUWw7smpt6dReDqbhu2g3xyK5htNdo2eCMT",
  "key4": "3g62fhcpu9muBWTFuMxToCeW3qmF6XUNjb9y6dKR7GZ1b5KzCBJmRdXFEKMCmvWmo84gRi8XnhrThZ7WfHsHY3XN",
  "key5": "5iAcPT2mWtuRgSvyzudo5fiRpKidjeGkkr2tqx7tzgUTiZoaJs3x1Z2UkReSUJQ6defykz93eCLSqGfZBecNWqs3",
  "key6": "2Qjb5bXaUU4qZMdNidQAZ6Sk5Dn44XcHP8xXxH58NbRDVQxDC74bzy3i29FMFaoSw4ce7HFkuRPav2Fr3oK7EDHx",
  "key7": "hty1254x1qbQfbp66DFCm5bpcnCD4SngiqeJLpGrLNQYnVWM4wKWgKwMZhUyBKK5ZDauBYGt6LumPawmxJhzyYZ",
  "key8": "5aeWPhZWue98cXPYdKRECaCMzuSTPLWKAXkqerbAEZA7cEfFj2dSY9PqVVX8wrXLdQKXnpD49ctWXmvJr21KXprm",
  "key9": "P54mpgNwYNH4cCEh4ndvPpsnAFxav89Qm1tvTHK9RpacEgvk7hu5KXVLN4y9kZLWB26uZyrjSCEwctm3XJ9hoPR",
  "key10": "4uNs5ZHsJV2TCHnn3wz89ojgCDwtSo91ZJmdFemSomcdm4bEQtLHD8WpSKJVWbqo7xWXiV7ABFYj6tqAEoyx3gBK",
  "key11": "4iUTdddT4EEfBkA9k1z3NJNMVGwfJAa6wuzNAMVRKuhdYwpqX66fiJU4iwDg5SDLLu32hC7VC1rAjtfLdzVFVdmx",
  "key12": "zv4sSWR9k85DPEJtX7rYg3wQKd4pJ3Pt3VLsB8jSYJXkEehGiQqE6HHRtQjpUAMpTs22WpW35j3sNC4RVvfHvJs",
  "key13": "38CNw15u81pGdocGNjyCu9t7orc3pN9Boszt9H5jZ8ezevvwEAJ7ECcCi8hHMjeHguhzP1fK6TfHg3Tqe61wNs7z",
  "key14": "5SCb7whh3VFvaN1UNiX3z1gjLsXxZHGAqpKU5eZwBhUnAyrSSURZ8aoS1eKi43gBWbrxkT8E2MsV2Rx8aL6ZjLRU",
  "key15": "oacLGe4dBuDz1iHT5nLSLKXZkEvnirbJ7BMmB1FZaHnvsoqa3xnYt25xLmYbX4KZ9fLVLe9JGyVYZrKu1URK1JN",
  "key16": "36iLz1dsrGwEcUxjHfC8eDV1oehfri3jdkCMfJCiUaySErJ4MGhErEK2U3HxsgFnP4dBoRmJPe1EyfbFHJgn2Vxw",
  "key17": "XPGkqj3UpUcvd3ynaXZr8ZqmGecNUBnGTaGs6qAH4tVvZAGa4FZCq6rrEoGtfyhYW2XTNhzmgY8gn2QjQQY9iLT",
  "key18": "5JFJwqa656d2HquSfFiGphY4jTvTdpVNakJ4vF7oae9oMfvX8zodJYCgjY8Nm2g7uuEaDtuzi1BJx8Jr3K5UPXH1",
  "key19": "5TrqrWAx2tdTpJxhBtd3VWjG1VqZ66GVbk1tNuij8pcAS6qFgjLSS1W6P8gAg75UQSwKC1rTv55tXeVFzdwfv5Kt",
  "key20": "4DyRk4L1VeGwdMe78K4bMfuRJaYmGqFB7DvETyW8DVfuMqNbmSotQQwabSg7TUoBc1TbRwUKqXASToMqVyip9Hpg",
  "key21": "124Zf7Cz9UWtWJHi8FvHb4WqzMtXrJQid1CcHrZU8HoEzB5cHgDxf6rNFQh5rYghJSaaXqfdMv3QJrd6nSCHTaFq",
  "key22": "7a7qmpJ4UaoWQvh3XHUisT6pqPAscLmdk3FYcuJnrV5QrXcMNQqZaFsSa5Y7iqZZEzrDRuPdBCojaDB12xYe7ru",
  "key23": "PGoSNZ94YhB2mWAYs22X7Kr3QtuXRbp59tnd1zB3Gx4AYVpMEz7vJVmt4G3FNtXV1A1z1APHfucfB89KzdMxHDQ",
  "key24": "y77UhqDpfhg3UNK92xKdFLMyEpRGpKqFZmtzYBvyjzza6WiiAFG9fdJ1W1RCmxP4puucEe9UjAhREAwqLzC4paR",
  "key25": "567zxupC9TwnF44j9W4kTv5S5GktJ1z1DGRHfACwFTvSKw2bWyaRn1SX8RgPxzZcDoa6fZW9TFH8AvZHFRfUzm8V",
  "key26": "Vy1KA9dms8ZCzaDzygsCNsk38nXHdP7zha1uW7CtKjxs38gWmt1BBeWmGQue4Kza2doA9SprBsra2FLN5wvZNEq",
  "key27": "2CjzEQKZSkch9GbjJsWjTNy1oc9uig89SppGLoXngoEfckgSizsJV7CWABHQ7xTTzatw1zQFr8iu38GQJhYq3DD6",
  "key28": "4LqQCWo5Xbrn2Qgzot7HweJvNpWSNVH449KGpqZwdfgXvNTiKRNP4aMeCjTQMzqgeXEMiz4zEPKnJUYw8fR2R2E5",
  "key29": "4KDyea2MS9LR5WbrnCiJXyqLWbSVCV8Y4MsuJhYcj9dPAmVB9zYRF9UidTj4QhKZRD7np4CyGkjye2U4gE24CFKs",
  "key30": "62B5NPPGT3h4epfn5yttyU1NzvKjEpSjMLGM8k5oEhA7Wu5djPm474VvTEw17m4YGG4gZzPhpz2aR85SEuf1wYYz",
  "key31": "2AAVuhS7nfRcPRfCCUKhAu61uebKciUMe9j5wzGfSLTjcMpq9Hs3XZuYf3Vk1uyuMhiEpbWNkJN3cSp4JiGc3PnH",
  "key32": "4vULPtYBh3zDfcHCkhxUNxPL7fVLPZr5224TZue3dgUnZ7VGxMuvhNfUr4inxT9X6BtjdmTXBiHENcjW2Rmrq1fo"
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
