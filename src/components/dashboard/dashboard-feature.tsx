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
    "BbRXWUkjQoh5XDUmS5o1ZCzkmdCGocszYxPjmETyxJ44XC3sTmSJGNvkW4HYw41vk4Yu7MxzfpJc7Y8Y1wibBt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D1tMbDrYiiG4zq7vwcxFWGg2GhS1zokt4rLLQvA4yLe1xc52rbBdPwNWMT6eEF2nDN8AiSrv33MmrTGBDcFwxXH",
  "key1": "4W8jpjCBaycxMSbqHdMV3rHwC8dPmWpwvqHXpfYNdPY9HV1zxqz99n3D9Fuw5nAEJukzEhE82XPeZ8FMbB9EJXL9",
  "key2": "3oNAcimSYfh8a6eNhtsmuS2CmcafwmAg7pEX8pmX15kJSMQ8JEVCB6t7VnBLsP8t4jnNBpswc24G3wXTSnDGrKKo",
  "key3": "4bwbhDhZNULoCxAG7gN5qf38BU67Bz9H5ugDsi2fcRVKvxGspWwuH2T4JyPTdkXbqJkoZP9zLu2jrQnEtyxB7C32",
  "key4": "3gLzAWANB2PjUeKKbPLiz9UkUjoJnL673ycw92rxSwHHHdmZauNsxNQy6yWhrSXjSj4DGdBgNsWTT9EoDaLaKauH",
  "key5": "2o8Tw2SWd66VUUuoQq1VDcz2wdKX8utoqzvSmLb79f9KWCQTERGitnrrFZ4ZhbVjqZT47JrwKZKK6z8DzwcCrKL9",
  "key6": "5NwSY8RXnfuaT7vgp6Tn6gUfUWeNchFf7NevXg3NMkskb3rrexj3psPYveQFHCv1e8ZsYRsTpmAUEK5hP6ChCjLw",
  "key7": "33apN3K96J8JoDNd8hLfgzC5FVuqyuaNAa7fhutVgaAGFdRdGYv1totr7YkYDPd88E8hVpVQ8NN9NHPpCFwXHwk8",
  "key8": "3qzWgYKEwzfD77c7LpnURSrSk2LZCmjRHG9gEdUaL4khQKHkPZeEC9JZaCZ3iQN7J8rRez6ZFb3WkXyVUdUhyH6M",
  "key9": "RJDvVJEREFCgRBRSKvs5pQpmgCMwEpEEPw9LUe9trcHqNVSp8B4cKEpoCCKhcScqMmEBAHehCN1onQMKvsj8jwm",
  "key10": "32CqRPJzQV1j2jh7GpYzTVvwnMNzwH5red35iu8VNeSgNaqKyuXP9bMr6u26Ps71yCdEgLzKc9nFyU1JUAaa6K5r",
  "key11": "5NsNBvw4wH7HgRNWSAgeac5qdWK2UFNKPe11psGussLAMVk7noBkTuHqQ2kjbK1TZnJVbwH3FaXWaxDkcbApPYKr",
  "key12": "5aN2ck5XHVrTb9Vggc8CpdA9nHXqW8fDWZj5yq4PAtaEnYEQQJ5Tr1KEjhBCwj8MaRRboNmB7RzMwmF8TQwP6t5h",
  "key13": "3HJewwnero1fE8yEwzBafP9PCNTFEkG82y1YJxXGnxFj32uSWU6J1KT8bV1wbC2FSnPHgNuJWtmifTDNT9zzzSgQ",
  "key14": "59Mx7w5QYcJfxAFbeWMEnte1vRRxWmaAVUHwPM66KFr1cPBAjiHNAR85ZVSXfZv3zRkkk39KH2juWt1vxL61Pojb",
  "key15": "5iVqzjK2CHLSijjiK4HThH7kcMKXY3RfPkHtytRDzPbP79zS9EY9Sw2VBDdRFSUqk2MyNDkKGVMrWt8GokWmZcUj",
  "key16": "AcRJ6q7ratfjwdEMTbWVmPqUzdazDg3YEjyQ4MWxBo5Z2VkPk4hB75yegXtwxrZsZZtDKTVPm1Lgv5j4h5tv9mz",
  "key17": "5fAv2V3gDPcBhCALSW6GjembptAzyn2MPVFceY1s2Pk7nsFvrT45Q2vqf2CRCFroy3jJwwmakL9AuKw6wjkbiK1m",
  "key18": "qb3xrX63uEX9mQeqdoBnXxB57pgC4M4vBSR8372wL3HDPHy18zDGU9YHhU33Z7gpEvhVUWiFymn7FhudtgN5K9z",
  "key19": "62abn1HZZZutehZ2RygLUVjYse5WkuyB6nUqAbrncReEskyCz7M3odzPtytydfP71F7RZbZhBHJKeijNZ1H6wWm9",
  "key20": "4np9cqmdi1oD5jKh9h3B6kbc7VYyYwYuCxHGpRdWQjXi63FnDp2sXySTimm9JkfzCrEiNphVkoCQzs3nyz3YJfpP",
  "key21": "72ZYizDM7xgFfiXR23Q7moFSeXy3a3fxHUwBU7LfidPtM7ccxJhSVGMMR9WhSL6dw2NZNuGGNowYuwFHeyb2LcK",
  "key22": "46XrsQ3kfXYMkW6vap1Q7rceCKuJKXvnUKiJcm5fhjDSe7LQSmSUfXVJeSUoEPXhWnWsfccA8n7XGN8awpeAxS6y",
  "key23": "4663sxxWL2721iAwW467J8bX4kPiHgD41qsQvuq4nbTWCiMiUsXXvszstcotFg88oYL4eHg84s1bXUUxRkdjHyw9",
  "key24": "2A7tW8CCAmyiYXZxGVdoaaNvvN2AuCLX9f6fZyY2VGF39wcRU8Z5JWFSN9p5Zid1o9JtrViktKEosXVSADgtnwZ2",
  "key25": "5M2mJL9VyApp7sHqBByjuKWEN3LCeHpaH3DtkMQVeujfbqavpnt6mo4T9zEFLeKdBKNp1g54WfKk9TPCpcGLCL8y",
  "key26": "GvG5xxsSKiQz5scY5zUqDeXRnUXm8qoVJtewTiMoChB54gMoMF2PEKiUku7uP1uNTbux1qaX2MneeSZWaGzzXC4",
  "key27": "362WMsZSHEvfyMaFM5VA9rBFipg8rDy3nNg9Z5NWQsM6E1Amkwhx3PM71aYB3XdE9zrWj9i4vqsSAZrvNNe3Fr8e",
  "key28": "VKW8tBNTpGdzuze7HMQ9gsNeavmy52RpqhkGe4EHD9M24Ur2Eat3gyfzYHRtYNcdZY6Uhys5s8FSH5WSPXMm4QG",
  "key29": "2pX1C3dYNY9nVJtsnRooZFNwkwAhHTdfzCWHoe74SVJik6VTFzk2u15yD8kAZ3wFuR1wsj3auTLZnNQ4myMxpJq3",
  "key30": "4zzjkJY725PGyYiT5K9JVTSA8K3VbnnKzKGoL8vABFwT5AjDvb62xzm47Y7GTfuTDF31WUcVT6knc7cYeW4zmKaY",
  "key31": "336vW1UyZvnrN7W6TUMBnmKCH47uUF2vEdRYxMBAzN625Y3fLwpVEk4LrnoyooFkVyKra72DyfNdtXAKedwDYaiE",
  "key32": "2Gh6bPBLmjeYbVvJsM6i8R4H1atNoxixL1hGYGJVKUVBM5yTBii2HRRymuvGoGx6PRgiM3pFCpPT8p8RuNSRtSvi",
  "key33": "4jRQgmejgEsC8cAiGHVRQX1pkqva63FNHyKHQoH6i8tQgsqR4AiiTKnr6u5r6yuPKvBsYoNvfEhbwQgmVN6ehTyW",
  "key34": "5YZEdwkFVThqBKNxpQuFZuq1YiSALXCVWpoModgkiD69pMVu5wYCdVDqsUAtc9D9AyyQoEJZZdazt9zM4r3Hp2o4"
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
