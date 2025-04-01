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
    "2asQKvN7kopmUcpajBfccbLRpxt9DY4zLNSfZBY2CJr4DbX6Ur4mdHqhcMQ8TEAxgxWs7S4Kas9Roz6YNiFb9k4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JydBcawHKmDCF15eEz76dgPhhUzvWLmkny6R6TzXXk2uyARBarbXnCCY9NuebLpRPqYbpu4NBn4hTED63czKEMe",
  "key1": "2iMHpFCE3ne6PFZcGv5qv4pnBN8rQvWiY5zsw8pi2Zu7JzTN1yJfc11ECucs7Ct7ojxBU1bNNtwZU6LarwLLiPMB",
  "key2": "5cK5tMQsV7iYfPWYkSv9HWDExTBuCxQRPMqWzWozcp3DoygzwqVXqd1W252c7Bv3V3P3tS2CbpEgAPENw6cvXojV",
  "key3": "4i395jvRoTVCazxRwCKqTgSYyUk1cCr9qFD659zeFtipBgEV7BiudCwnm3ZsUFTtqDJStm3rNNqqjGSdsBw3P9am",
  "key4": "4o5BwSgi8zC5Fg9u2CKaXKFLVh82M6ZNjuHGvcQL6J8HBMrtiNJ43moMryZvdVLjDtHALJQUQtoKKf6pPssRAvwv",
  "key5": "3t3eXULGSnAopkN3XcJcbVbvgbvgmpiGanHHTTTRoTzStnudR7TB3viV14CXGv5iwqx7PTPiCkdVtfXjjSV6zY5x",
  "key6": "6YE2ftpPEhDCrWLQpkbk6crR6Z4x8r91oYUsGnymP149neEra3W3LVmp6tUmaFFUkQDqNuRSiPn1mTQQ9ExLrck",
  "key7": "Lh9gTvGZwM9BSsF8QdAdfbyL4pikJaAfxCyQ1RowaT8cwtPnGeE7uPs9zCqU81ZdyGHVfYsAUhhQnGiGMRpJXGo",
  "key8": "2FBdppcuU1ZvmiiPEMGLvRasTYiWFnKz3NVCyj2x7ghFkPoMs4tGXpGa8FLdu4N8VNCQw4TtsHrx8p6fF5qc4MpW",
  "key9": "35xw8trG99bymmQoiQ3TY1uSHsRqkT161HysMWrzY2M89GowWtnXwV9tQBTzUXvL2xxLZm3EH3J4zWqccK69nsRR",
  "key10": "2Y2EKnXD9gxGQPHkkHrvgKNdHwMb9DJUTqSZZ4koFR64NZAu1mBDnYnQWDUmBwzRMD4UxxrXpVWaYPX9B2DhwF21",
  "key11": "2BxKvHR54S8VJ5PvKKUDpxMCMDdBMjY3FAtfinfmD7suxJMsM8Hm3QRe6Lg9apWLBZvvxL6efZF34Q2wCMZ1H5C7",
  "key12": "2bzZtWc3YLPSrNodvwhJa8tbohfMe67V9ugcRsEcjzDDfshn2CeRQquL5N8koRTmSQ5Pbbn8UY4HtLR5ccWSdhj4",
  "key13": "37VsCuhM9A7ohhP1eu7s9TZfRsCU5BZqJ16iK2ph8dkVMi7Y55jdLstPqja79UwVykwoWeYT2Ky4xfDuwTndNkU4",
  "key14": "63oT1sDoyh5B8ddpRVDc6MGbk9syTaH9dtncAUp8Q5WnfxxLp9RjZVcLW9WSXG98wSNRREaTRAs4guWFmB8e6E9m",
  "key15": "3dbWFaheBXFnYTHPonotK2LYW6m6SPqEWEuZ2tCdh24UkRBPENmKWVJJY9QtFZTQYkoD6wq4krYLWsXkC9DDTmm8",
  "key16": "24vfR5cAWRGFadpzpJWnSLWmwQy5bJgwDTUY4sHxCehps9wsY6wqPwPotk1Xie5G3sWuUwkyTPyHquYS41UESgNG",
  "key17": "43t9F7BuQEZtNGH8iSoGbNN42M7iKhP6BgeiP7Hk8sKWN9KsoakVfwm3Rd6JD5z5tw7omLhpDmWgQTftcyiheFKW",
  "key18": "uF5VEC65KYabjVXT5uKwE8pADBLk2q8CG9MogP4frCXdzatSwVdTP7VoqFB5FKFoo7ZJCf9AtwDfaywWCqbc7HU",
  "key19": "32EWC7iUUcAunFR1cVEzn86SW7k59RXiqQ8Sfp16zpKd2TQYDWmA9q8ksb8iTRQ28fibvknxxcqvDeV4jrXH4YVd",
  "key20": "3e2tTruv2jAujJbTxyp3LU4Dy2bHbCHZQosMSEnvePMheRnFSpftScwAjvDrGmFV9NurYiXvEfhoicuiTUceBoYB",
  "key21": "3xFFVsTB8MAj5tDrPkrPH2fvbjdMxKXWQ1tu38yLGfyQ5X8ZZHSkitd4nbt5C3SyAkqH3g3Hb1gSEQozxKBVBf3X",
  "key22": "25ut6TepmG99gTXxbHHaCfzHekdfVX6CqkaVHJXEghsmv735h5wviaGSpYafgvmKbUjkYkWrh276gz39cKGxEhNB",
  "key23": "3wJdtx8CK6HMmSUjVHyN3Bwq4qmiyJ49YRcW9zpNiHyhuXtGuBKMhTTroZD3X73d5cUa8aA3scxfmH1xT29V79TR",
  "key24": "2Ko1P93omi1Um22Y81k2JgTyk9z7Gz3vfSZbYr9FrErpUE3LbTE95FNGScwTvLSQ1ae1BtnE6MgAbMpEzyQUdUim",
  "key25": "5YRvQsD8NCgsDq9s15FtveFVHguf5yaf3JnwUBFGSW24SmiWk1B6evAdShntgLK1PXhdUHGNhGdMtZiPnJGgR42E",
  "key26": "67ZJKzhmU3PFtxPj93tZm2s57SFT7UFvKCf1ZcM9bNMKw7JEuXijbvpTgYy9zqAaEWkTqnpx9PBWxAzG9C68PJgE"
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
