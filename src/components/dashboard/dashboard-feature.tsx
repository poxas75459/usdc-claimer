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
    "K9rHuD6DiME7MqnMM9FCLUfSnV9vaAPc3XbfR6m6W36J954EwhLPK1naRpamA8Rd21iU9PJbwDX9nQ9gTUAimcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgwafKP7GLMVVMZpteYuLcEy65QkbMEhRryneCCQmGNCTqJG7SAowRWYEvNxW9kyDPHQFTLrGvVtMJkD671QGab",
  "key1": "1SVmBPaMmusySULidycnpiWRN673qY7daK4rZDkBFtAUdfS6hZkkiCwWAwT8Jefuy2YbuVTUjYbtsNBPzj2cHPx",
  "key2": "6unnZUvF6CiWMLEjJknnTbyNAddzC2vnxaGaCB1v7m4nvmVubAFh5E5VMGKorPJjhAQY2PEeeBUXudQii83nNKv",
  "key3": "RZPdiqt8vdtBoA8ZaDHw858cs1efruKbsCQokcjcm153XmZio9pCFnRyJbLjTxoaD2ccLQHXJyJxdpvnrUuZyxd",
  "key4": "57ju5118ocaYr1Qc4AQnRhXRBBzQG9iXy4sye81buckWjzEQG77cS5BtMersVRHJpZaZSujf8VkJetUFNjnQpTfP",
  "key5": "36kmvHrvnb2HVio1uSVbZLgJnp6WAr6p7qThKgsUKGJhjcA3Ep2KMv83ftRHjXJ3NGZhhV3JHb5mVkuKHmtRnNZb",
  "key6": "3aZpRCZJ4KqVLzAqRQmKheP5pJEEbjAhuXQuBn7m1QLnu8UrqsTurppL5wT5D64vMoR5AzXfiudXob397Jczthry",
  "key7": "5pkmSax1SXN5f8H5Z2fa1gvUmiZmHhLL8daJ4KDboU4NSs1yTN5oRHwrUwK71QWEyK4MdBWpsf9a9sDjXVM56E6F",
  "key8": "2FVs5mNLrqKACbWJgew1xzrvDW5BdLfDPabwucCKQ22owjHvVENuToUccjN9Mj7yvhNVoUL5ZtCoFaGr4BGL5gfh",
  "key9": "4QSaWViMNgGjYYknsg3kgyUUGrAvEyRefzaFjxReiXJs18foqwK3fmimcAbhZ11vebhP1Qsp77SvvhvDX1hxFGkJ",
  "key10": "3Y816k5yKoe8oZ5XTf1QbndmXrgWmRW196jN1V6sjrRcR4PnR3hbyeyGkG4rLrRvP5kQTMd8JqLHKhCJgYMoJnrJ",
  "key11": "5u8MhQYR5TjBFJw7DTmGuH53sc6YHg3QiXAeJPe3ZWS8xjK9Kfm8rR7B1ZJugr9PJAAhKwq9KVudPU8Tr18ZRHtQ",
  "key12": "63SoYoB9nk9kjbZkKLk6PMDi6Wy5qSYMjFdJaQDuePgeXKRRkb3nfgKYQD7H2wu9YgCMAiMCou83tzFFUPehT1o1",
  "key13": "5BKKbi8WeFZQmfkv3mHnMJUgGaCgCRcp34WGJ2YhkJ7NdPsGi1vMe6xvaAQK68dkSTQbXEmUkTBGe85jEE6DH3B3",
  "key14": "2qrjzTGfrtKHco17qPJPMm1BhU3au4jVZA5an2cGysxeAYdT8zaEzXfbWpGyVuhqquPRea6HTQfhE6MuYNoqi8P4",
  "key15": "2yA1M11Md9sMhhmLsjjGLkXtEiZeXz5CVkQNY4LCDJ8F7i8BMWXrpqvQoMjrS49hfwgTXWKK3pJuLjRFwiEJxg54",
  "key16": "4fV7qKbh2xdMtXBvWXgoJ9HNMMmKM85eougcx55yCTDRdtfUWYLuWqeUqxSLnfmkamYcSe8jYBXeJQkfpoF6nHta",
  "key17": "4W7WarJaVaRyTZfivi7TVk5omsit6sed4FuEgYkVtis79ADDRid3KKnMDLixYWkQWxjooRnYwK328tAe74e1P3Y8",
  "key18": "5tmZe68cKuVSravBh39qLHt6eb4Eqp8Xg4thcXrDRAZQQhFp6E93qn2L8EWbacJdjVWtN6RQujosJ2ibfErmnacd",
  "key19": "bkjFwY3bHbmK8egdw6JSb4YasD2jEVh2G8G9oQYh14H2xVLSLgDCegxM4sWf6cTY124hs9MZF7ksVtynZEUo5Mt",
  "key20": "4ZEBwyPXJNqxtV5W5ksGyU8rz25gWhq3VNGRFJE3CcZzXwxBgQs4oWRmc4f29J7gLshrt5VKFsg3ssQTc8jXx9nn",
  "key21": "526GVrR7tsALihAYC31D5pzcwAcoFXuXMtDENRt7Pq64JwJoLYay8EfL43X9XL2FweePfeWjGYUwbKgBgPc4t7HS",
  "key22": "5DF42G6kgnKSxnkcd1VBHcLZoifNZnB9AYXrBJXXb8kMMaUZceuNT11rsEdhfXGp6pCqR2evKAf3VaWm3GG7kUi1",
  "key23": "5zG7umTNb3oZf7obBjycNf9Y83nZH9qEN3MiYuwhMmTanDitSNbSyeYvwzE3GtRwrnxKkKDQ5ZzdbVzz7YFT7S2T",
  "key24": "3NgJANpygHefK43ZWqSMmwjHMVtMGNhy3TssSRYsLkFyVb6vUAj9BWefWDadVTyMxHmofLTqi1AtiNxTV2H9GtZs",
  "key25": "56QSoAq3UxXmygthtnuN5G8XxxX33WyXpDS3CGrm2p34mn4FUqYc441s8UMMUX6iiZs2CJPaWDpd7MLDTfqqR65i",
  "key26": "66ShxBDZWygaok5xfL8rZrYZE6gZdmgN2kADSMrfZ4Ee3UCcVp2Ux9hvZFfFzy3fw2KvzgVtnCynsSzpqTSqF1Ht",
  "key27": "53gjYGAVJVDKDQ1SCZ6FjkJHZwZHqhJfjbfWgPNLd8vsvNbcnwfF3kg2A78A9ry1tXmz3sptAZizbfAgnHD3eyAR",
  "key28": "3yomgXaAF8Bq1DHUZdibYpKrXDEaX83BcbwvnbfTsqHHwZqTc6mSt4NMDpt45EYxSXRUPrtUGPcJmD6xZBgn4wzn",
  "key29": "2T8xZx4ug94ZHLjV6LWNoSxGmnKocEDiHbFBPEXDkXtYK5YQbeQwrAbe6eAKuf3GdFWMLgKCpwWwGranhTej6UEy",
  "key30": "Gy7XjvHcFtzkeZyzqb6qiAj2yi7hETFcXtJYRZRseaWL6kNdf6XkKwvPxyaNcZoWufWkL8ZqSdd4ktYJ4rPjpn2",
  "key31": "2GVCzRdA3EvtYbCxxoHNXsUZBG8Huo2hNBRJG5qBjRbfrceHrBGspFsbC31RMcKTZWmAbxniZQQ7XyuCiFmKZF4r",
  "key32": "61jLLZsPtm675LEBinT15PpjZ4xzLga77eWHfqEF6TfKsDqWtQZVncu2VPBvqz82cMAVH6nWmZfojER6gzZV6ysT",
  "key33": "5ZwZhpDUhCs4rBZ71pk2tZNn5RztGm2hsBn8h1qoBFnqbDC7JwZPopEUMGjoMxDVRZ4PnZg3Jku5CaWv2bn2CmFg",
  "key34": "BH1mVuTqeoi8nEy7fug2C4BkGB8uqdn58MNt37xS1aB41mNPPA48J1pVUs3oi9EcunEpGE4rHhTZgng7rgPjx65",
  "key35": "3VtPSUk8bQBJQ5jjE4TRGGb7mx5ft29qSotakhVwBE9F4pfkCAqha7mehFnN7hJB6wFZZwDbcK8KEpX1Q7NhqPEj"
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
