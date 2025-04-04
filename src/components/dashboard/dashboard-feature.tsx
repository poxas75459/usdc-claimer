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
    "2RSjSKUFveaEs12Uva7uzLAmhqiAtyfqFZfwtDKJMKLKLzJ1mdLRBH8E9MRXjKw55A8VM72Gi5kVzfa5iqBXG8ZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8VqV2KJrE3pEDrcCV3MmiYovuDFZoFR1pSTEAPBRtii6agS5GdQJcuUtsyTixakh7zjj3DKJ3P9D5vUo1VGXjq",
  "key1": "3WgdCvYmPebQ9jjDS7hPZoCpc877Q21HPtfAjT4RVS2Vff9oKGd9yMXYE6kddqZDetxsZcnWfGvKoFQ139u37zW8",
  "key2": "48GXLS2JwWpLF9EUYrRYSb5rHDi7cMoDpXoEE4SpYax3wyXoX1xH77AMadTVnpkEP6rPfpw8fraHKXpnoRwU1dqA",
  "key3": "28qYnojTMvwYu6xS4YmcztG7APUH4gvCo45fNbbHqippaNdyrYd8fn95fn9YgxtxoWMbeu6ASmSrcp5nPfCE8iyx",
  "key4": "3CJkyv6knB9i7McW4mU6uGBWh4eoZBeRaDZpGuXgNTAQLtKb2xXvAQJe4GKVa5Bf4Z6Sc9afBKeKYuPTFbUDhmy7",
  "key5": "3DocpBLAdDHDNJgCHeCHbmTft7ARGwbQgnZ7CRnJpquo95ZZ1gCJ15B5SBTfQ6wk8Z9PErbKLFQZW6FqzvhK1ZkB",
  "key6": "5Vua4BmaMh1odauwFHaev4RvMUEpv9ZoSocGtToV7DLvMBFgRSgR3ing4MEMBm6fa6d9uQAjHyVzxfv98CbCfKjt",
  "key7": "3ffM4NNwfQj73TdwYpaizVXTwZbZoTGKm7jCxfQL5gxsNoRsB3BdxXGXkFjxxznjCjkS9gH5nehoeN96dGPmY1T5",
  "key8": "UUx8eW9ebzBkXAvssm6GZQ5JNtAFD53L9nWK1i6sqjif8gN4LiCV6LraymeVbGDA8VzXKdzj3L8ek7yKgF56bf8",
  "key9": "p1DQfR5RvoWrAV1H76kJSkyNSpMBQ9J6kDp6ZpgBpYajcoGe9tQXp2E8cubs1VWK6K6Ez3dhwqvot5gAexnmZNr",
  "key10": "4fxQbJ21G6xh9uSF2bZfdVF68LrBeKCswt4rVRtm2fKbpwrnJm7EXgsJMBvZQbhkUtCu5HoVChBfMVTR89DLEFUj",
  "key11": "5VyW4k77vEMLachbM6SAoptr1yvgoVf8KaDzc5b79jM4AXYG5QK5ixBnEKDU469KcywHpdLAp5h1iDegc7KsoVUQ",
  "key12": "3kkTHCLbrtLz72BBKzRjae6dDPNMnSCqF9zmFnNKZCiMemX5ZEYYktt2d9eyy84wuuqWFKB7AWknqREw4ed9vY7u",
  "key13": "43Zus7rMXc2sLfgC2z9AjBDniPzcoSokMAx1tNdUkFu3QR88RKv6mxnMGCuCw4FiqgG5Y1YssM6XConJipBKhah5",
  "key14": "q1WjsnW31JXNKfXSkm8yRNkUoWT13M4Jie1v3FhukmWx6tNURM9Q6juJq6MrRaX8suhdBW5AeRfXQ2iWe1Px5p4",
  "key15": "49u2XoVoBS53RtwxEtzRPzqHu2ur4bgxWADP7y7sVgXp5U3LdthWGqkPaBCJc2zH6eAEcBi5P9CBHhnV1EFwmgZZ",
  "key16": "j9Az8LHFbj5MNn9j5SvEVU4rqSiD7ymwc7vGtLEndF3ycNWY5AGg31CJ6tsXTCqhhjsGsmEgxFo51E2Uc38D2Ps",
  "key17": "4z6tXXMt7yiy4NmVbLt6zPnw8u1gFR8Y4GL3tnfcc9z9KGqdW2A6w1aELPpwgRWd6rWqqFoZTvQLnQKUqgAFLD73",
  "key18": "5B4VjZH8s6eVYB3bohbgLEMZubknwYZQ6e9xqXr7Wy9q55fwEpgdMy6YJNPeobB4ER4SekXXdMKDzQ8uJLfYRpYd",
  "key19": "4kqoj2DvLB6eCN22hRpbYs4bnzhpPgqw9ufFWMjAADpMVz1gjXUDVrGBTWNBGoW43KRQ5jHHVAssDqPxrD27XS6J",
  "key20": "wZfAxyp9zpkAkau95tQ3KnWfccY54J6pwsTRas85i9Kgqx6WcUEZ9F9QgRssKCbKsW8TXdcKsz22UGgaaD2hw8r",
  "key21": "5Ca4uaZtDfmFSbGkPmLZ2bzQQDYaxTzc4k6cX5fZtdGdcmYzurNetNLFLhXtb7BAKjjW21SLn4aHB942QP4p4Tfa",
  "key22": "3hLneHk5Gzx9JeDZRDb1geJfAyVZnDbkBv5zepjqbuajuuo6pHqXe2iTQ1kyh6DKKLYx6Hsuw1eFqeKDHUS3yL7",
  "key23": "5snDqw2jnD2jBkoDupjiEa9fBZyMf2VTKubsNJDpgfiQSCamTjHLA3DJ3YL1MPhSz83XUwK4LPNUUS2j1rau8Crm",
  "key24": "51Z6BPRU5rDPH3cCvHwEkjbZsgkjbzdV9yKUrD1wGoQEfnyBgGsDYVfHJQ8yXWZa6r6r6txt9GDMZd7F8SEwXL4k",
  "key25": "3JuJ9zXrmcARdrz6sW5poKXhJV42zqWmXuZdie4R2zSyAKnwZhspifd5cUJjPP85ecfrgKaJPgLayEKDdtPKZ4DL",
  "key26": "3HZQbW4BZjG8KtnzMzXR8LveMEs1CFVKkZzQ6dunT7mJBcBcuRBMqaW5ZUvHSDGntqxv3atHzw129n33UzSfRCn3",
  "key27": "rS9FSB6p9C1PEsHBRDczKM8Dd1GfwNiqcYwVtQQtix5xWsowCXRZyRu38hk5GNiLM77AZVLKcQ3Larhjcc45zBT",
  "key28": "2gfE3Q8qCAb3khmxgepubkmtbCVVPpiPDMr9UJHJjSdC86JN4bxTkz2PhxAuMuzJDQNRweLZwCuZVuA5MKcWzKMn"
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
