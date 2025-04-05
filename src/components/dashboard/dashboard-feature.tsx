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
    "GpdCE5bijzH5jN1hzLtnT899gkBZfNAqpYsnznNxHe3i8jeo6P1LvAM3U7fQJcRowaRfvj5arXg4ECdAiPa1vLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gTRQPg7e8SSaGishr81PdWP67XxNrG71gCPXucD1Pts6PUGDaQjW6P7ZayWFfz5iKPdhVPiZeF5zZgqtYavGehV",
  "key1": "4MFH8P4zYqjfSrU2EZgYKDBCdo3faKKEN2T3SU1NqzozWS8EwNp61msksgcR9xkbzsrjfpCVHToYYKSjuFfBkTjJ",
  "key2": "2aeLUuhhakTQgckhADb31PefX4K5ti1vkUJapGCEoGbtA4m9Ktk7RKoxx63JWmrEWtUE8jyiMPfEFi5RDied7h7W",
  "key3": "2Zt2pv3BW1Qrwh41C1an3ECTdVwW1koG9ZUeGqCiE6f9cVps8PNPKbyS6qDLWh8qdsuFhVLAvuqmGDsWQyVoUBCc",
  "key4": "3T4SB38SZYE76pjwMxWFcFptNyp24iLHdtPomo4MRcyCcLTDKjMvmRknWjZtN3dfYw6aD3vbqmkb88ZmjiLLz7dk",
  "key5": "4bDSKTanMYgCtSEX2cKtvRmSPBj5cZSBjtze3q1JmT9hhRFfWLgvJYdrs5aP6RYNQQ2akYAm9x4diaPATguRPaec",
  "key6": "LskrkEG7MaNYygCw76bB7zPuu2N4QMMWwXJMbvDUr79s4Hm5wJrnAK3NH5enzx2k5qC2CS2E1rpKG1XEEg3cdLb",
  "key7": "5Ao8YffcdCRubHMGPJWuJP2KfLg9zzh4X767d1r7xgmU43LDGtgERdpS1yxsBMFDLXrKoqRBJ4CANCkqFNSyz2xi",
  "key8": "2ZH8p2ombkN9zgRGhBwptZHRk88vSGYzvGJLjDaKUkra4nTXeZqZB9dgrr7BsXitpMKCa4GYCfhEzN7Jp8HpBb6p",
  "key9": "1n5D3i27d7hziKnpQoTAsA3DPreDh8R2qAfSukosBgzN4JA3oBfLrESrPSTvg7hiSbThojdkRp8CU9vSa75BaK",
  "key10": "5c3323TqHUUUABMSGbhF9ydXTHj3k8EKnpw8mgzLYW7osVqL6qBWR49iNVsK7arcia4rGmaw4J8KQuARktwaCGrE",
  "key11": "4vR3BJdTwTTZYDViySfF18jxuuvYHvU5whRJMPYuPetGJJ5k8iUZEHGBVYy5trMQKohQ7kkEFYEEskUiYELHkVEf",
  "key12": "3UFhuuQR4SR4V7C6AVUxMoMiyGmjXNjqGM85j3q9V2ZNaw5iFXr8ux26rd4roec6zxHfET3tXFS8nJCpRz2BdneB",
  "key13": "4XNDERQgMx5XdZbHdERstnpb2Qg9Hz8m46eFbmQ7JFBjN8rAQhPvpxuVkwZFdsprV6ZQN1HCEh6oeyYYApSpY94V",
  "key14": "2Zno1o6aBJ4ifeVBCwbxPNhHCsDizre61noggi6TRQHhZHtQVuoEMMMR9fay2wTxwdLn35HYezsCFHdAPKW1CwzG",
  "key15": "5kvk45abaDv1ChVZUGaqUd4WQxqVY6m7QdiSzcvQ2pkCqegThCpJfRt1DDqTZRHqRi2ZyuzRcffMHbF4NM5pXzsT",
  "key16": "PJGCRwEXWAEx4Uj9J5WE3CxSx3shpXw7nKq7BJhQWichALYokZgvU5owaM8WtgXDr84JrW32Ss6m8sZjmA8ViDq",
  "key17": "Mbne6L8FgfFmaxufxcdpy5wAkvdoF4T4Sda9Qi8PSjzJpEzHKim2ZxzSTacVfBuk7NK21Q2rjtihqEtNL3EfsYd",
  "key18": "322XuXEUfLt59uHw7kEcdDmH347rp6bb1t6341HM8mgHJiT5ThVZkPQW9WEcL3oGqzTep4jGExcJajuYmUkyLhyd",
  "key19": "5CrevrSqkL9zz6pY8D6jMfV6J6AkpSPjwhb5KN45HnSa4mTwobHr52cuzVi8fqDck93dKWSgKLsJVc2ErMSN8qTx",
  "key20": "4MmLowAQ2nRvbQNZcFPTaw5MWhZTAsYR5pu5UJL3FsRGEVGkTrNXtYuCMoFsfBsGw9dWUjX4jwQwH5zFojYXYtoA",
  "key21": "4YfhyEFRncWE34PrSbxtsKs3XyTdi4VGtGJLsHKyqMDsxgHshZQ5eLFhfAmFzbtf57Umerj1QfNM6Ca2CssYsJvv",
  "key22": "3AUDVoBVLNu79hMebUoA8Me3kiGmEqgzDC8uHyymkWkr3Vd3bFkf63upfu7JiWTYsUeA4qkJJXBsYRUuBxViqcSM",
  "key23": "2Fo3KqXnvhP3b5vas7gRRT83zhWkF8vDX9zKSMMDf528bZZUxPWqt8wmuhPCcd9ArrwvpZr5nNwkvKpNfBYyayLo",
  "key24": "3REDaznjXVeGCbq3w93a8vP8Ft79Yn6WDSnVA6fs3a9WiQCWGVWGxmZnyr3mHfiQ1eDx5BBUtMKd1YxKetW71kRi",
  "key25": "2jKGTUxk19w1VSV7fYo1QqCfBcaXncWv5kBmMv4hotmc3Dx82PxazpyXCbxVixDVj3CJDsL7KNazH5wb8NhXWreZ",
  "key26": "44469uCrYH4wC3TudR3Lmw3bMXvfHLWW2qz3jkMiDwi24XbtqxcyYmFQBNrnot4fBQrjjGi4Uxy2gWBoQsSxmWD1",
  "key27": "4TzHctNcTcsnzgGavaZaqXGEWwbWqUobRGDQr8HDywqVQzuKoXfXpTVTabA86mMnGTjKLgA4yc68mMcErvAxeYXA",
  "key28": "4YGosR8sxMzASZKPCBTSofEQe3jrKcfkAvQu1toTJmuRqqditWGzaXYyoYYGnPkfTsYreC3xELbufJ3Z3Vr16M5X"
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
