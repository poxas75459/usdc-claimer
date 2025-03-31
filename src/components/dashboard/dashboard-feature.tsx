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
    "5dJbdtWetSwYZWzbESqfPQJUAGEJRjyFcFaZSHpNSWazwFvEq7fRYYSvez5Mf62HntuvrVNwCdtWWmpozcBa16im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBq5FLHDbv4kVfguQPJfMwXrL58f16GysxUdqmc4EvHTTgdb1bSpJwMDFG8k2rZ77MGHZhinPWb62NSVvWVpLeH",
  "key1": "39GDZPTVqZPsZDDQLvxBX9KuXD6ydQzSPuBS51gHsSqt1vzHSCzwG3kvJyrTKBMtDWQ1MG4kXPpAKnqbin9cDE3H",
  "key2": "3SEP9qHtz5dfL4QvBRtu2iJ3irdV9NbXa4XcoiL1gmGCDZU6FSRPosvcTWQJmMF3saTB2kioDhdg1osu527Fgfi2",
  "key3": "2JWBieZFgJBZSG6GNBbow1dCZuxsfa5BNW7GkFXQhTLYwLvNmqB7KM6mWAj72SVqmXLGuDF7WVz72AwswC9owqgj",
  "key4": "3NKzfmDYo9gNxFFtyr3PZUMqPYEkDBunQAGm9pey3QeSykMsnuDkcbRYBd7MNsS7kCA4XjXxpmePydw8mrCepk9T",
  "key5": "4fE9dS4oqd14TqXzU8vbZKBbg4aGnKsiMAWE8FLhKzSFM5siQ4g3xwsJze36KTPDsMvgfdseg53kvMGidCswt3xN",
  "key6": "5tsqzKKFnfgyUGpcFs7nKNEGLdwFHa94cMCpy3fbiQaKDgL1HwVmmRKGBowmG7SAB9uV1CxNGLF3r24z99r51nEX",
  "key7": "38fNMNosdAaiQh8sZdq8vHBgeXKfVvKMqdi7k7rxdnWUwzDHZhzHVchRghaGDcuAR94mWwBNdpKTBF7DG8CKLDUX",
  "key8": "3XYDQtvxdADyDuGBJ5wdBwbSCFesTz5MYdMhnupbj9Prmm9LmWFAwhZruc3GsV6RSdVtdZiPv95kNKXT6XCAbyAN",
  "key9": "4oMZB4jYyi95QvHBZzoKwj4NRccRAfRsHeduBisLoSGvuBaR4qgdsBpeBcpeAP3gPfuY6EuqNn1B2BYCWG1GQ9Wp",
  "key10": "P41CcYyJ6qAqXp7wVNg5YsCs9bJ7Pvs6jTfYwiAiUPpgEmbf2jzht1EbVPXSqEQxVdnMUbARDFknViizVSbYG8Q",
  "key11": "5WggyCLoJedHDwejpVPFrw65ekVGe95n7bZYRPEz1pJHQ7TLBzU4dy7d2xJXwnAoMACS91Z928kEXnBmLJwdPtec",
  "key12": "3h1YZoutF16yKRExuPmksc5puZDzFXREYBrFvwmSfMhGgVndrh52ncz9Ts5iZnVUMpsxkwdgXr4bYRbs82Wd38mJ",
  "key13": "3WGxJqThEVnDRjn7uhCNQhTNCLJkiBmgEXVo5VdTpLx2qJVm37UfgCWjEy8Ah6kWU5BE2pmsSDHauT4prVbnHs2s",
  "key14": "2CwuJiXQ2KtbaN2EskYi5c3xaRfcY42cL7PSpozah9hjcG1xo2ZACqPZ2G1kQLVyqxcMAfHrapZMiTr8ZYLPFWwo",
  "key15": "26BbAWxBbeBYFXvsm6yS9X7dA9Tjc7Zq4a74CuaquakJf4bhgwCTCdGYz5cyqPnSRqkjvsNvxHNH2uQfZZsN1DNr",
  "key16": "ePnxdfvxPLdb82K4NVYM1HkWRshMSuocXnvzUyeN9PSuS2bNDDJywoQ6Ja1pxMo2DYqf5HbpwH3zeuvXDGPGr96",
  "key17": "5HZoNrKr1VsCczdgkxVvGV3mcxyQqcnQ39DYjDzU1AjtwHuL4cKbxG8kDdkX3MeoxH78Kq5QUEX7N7PE9g2MPNuw",
  "key18": "5mpKVedAYfV4j3HYrkrWeZsKvqJYsSPYwtCZCLjJCVroibUwexT9o79v9UfdKt52Kw7oP7CSZwHk1fvoMaGTH9Bk",
  "key19": "2tQBtcJ4qSau1Uq7jFgAPzrqkg3JHLwyA6k54r5wunETJBeB7gHLixBEVsGCSQthfv8LSLhCj31sQ4Cp1LXBvf15",
  "key20": "5X3iD99vbcPrdQK6RgfEkCSL3VjpWAUq1Dg8ECU1LRuZyoNNZBuphv5tSe4ox9cjDekt2sajtWvTV4f3isRaJSrq",
  "key21": "2KuX6SSECXUeZuhcg4KutqKu9JqiS6RNoF9p6etwJhBicE7JeHNfzRUfBVPTDv1ys4UChnYzazPioXFjLj75KVz6",
  "key22": "2fMZg6N9M5ybWisGdxJxjX94EgynvLTLQqY6TYwWfLdeUUvnMa6qYJQr9zHCBurTMAuN3Yf3Nsob79N75j4YF1mQ",
  "key23": "8GtMzMW5Z4YFBYGMT7CbBcvpCqrzmofGmnJzor98khsN9g12LHijvqtuuuLFz3Hf3GtF2iZDrQU3cqk77L1t9Gd",
  "key24": "5dz2qgUtMpS7dYemNVTAXsF7a1bppQQcQLL4LSrr1WznVxTGcDyi5jzivjzgejTqHw8eH4bL5UuYZDYoMWzFHot7",
  "key25": "3VA2X5rtpiLgR6ANHx1gLE56CGgA8pM12AdWNg7GCpkemw5UQHv2MbrFF7wYFfTT3UUsk8aR1Uj9Pku6aGKqorsU",
  "key26": "5BFVxZDqKe5EsRwSmnz1H8drxmPFek4tQQjc8uvMcMLVv8rz8ng5SpWCverwzqEypzXDUu7F8T2BQTiTTAopgJt1",
  "key27": "4tQNUveVxiEfTci7FuNopNQXrJgxZAUvhAdwo3Z9xJUZSUEq94DZhBYVgafPcB63eAh6TBne8Bgkw6czhvpbcYum",
  "key28": "324Qza5MuhkkziqLrJK1eDqsxNQnqzvvTjmMrXpcksxNMzDTKWH8Lgw2FGnT6fHWJGJ7HDfaDE5xkD6hURN5WtKs",
  "key29": "3q17QrDNKfxJnkzGUgZ3eT5Pzs7HiYE7pngKnpWJ5gBoFcBryP4eQorVzEJfYnxKdh3MdwmuUgJ5J497jZsPtJnD",
  "key30": "53pcs25Cv9s1aupxwxwqJTtK4rttvG9H8sxK7ksQVFS64dk3DoX4r126rcyQLxueCdBHUGbTt8koC5R2FEurduEq"
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
