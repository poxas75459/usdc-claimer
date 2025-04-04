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
    "hpHfCFxuoF6WuShbz8hMzjXma7Lc1xLNKpVQvZcrjFiwu7PBHQtcPsBoXjyN2XhnC4jj2mEsw5ydKC4aLn7ZRFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKx7YHSTUwjcpare89TQybe4E5ri1Eco9bvNRqwgRt2Voj6QhuMA9PQAHYwzY6oNieH6NTqohsfwuT6sedTJBxm",
  "key1": "2zamnVAS8upMhpyzTPBqREaecBSUj2NNENakN5sE41wYXx9qfU2PyDtZvkrDU3vHxM2QxgMhcR9eJ99Vgdhk68wJ",
  "key2": "2ApVWU1NL9H8fcvZKnmkP9tDgC2HhFWr54hvf9vsWGsvkPDXcEDDE67CDFooxgbQTqNKHPQuqoYDWdVNgAPHkg9y",
  "key3": "3Xv3swZhnGnZ9NPpTMtu2xA6urfDUGWfrTuXbEEPAnWz1yvjABaHeVYCL3qtJhU1gkpnmTnq4ZG8tH9poLxhvgXf",
  "key4": "1Ho64z2KMFUtuknSnZkSeDgdhKu5MeYLXGDuawqC5uYkN2hnkdgykto6fXuXkuAvv9JzLHQbguP4bdFrtVt9KPK",
  "key5": "4taTpQvkhH65fpTxnYcEwhq9mW1tc2xXDbWi8AAap8vHAbxRTzo5wHy6ddF6bcfsXFrLLmQpEUJe94gY3PNV93ur",
  "key6": "4xCL4HekSQGYrKKGZuPHU7P2ZrJevU3xqPPjb2fusd2UcQPHcnfw2pPJN7cgHvt57smukwwnbiKwiq9AxaDLwHxi",
  "key7": "4cWPkkGCtEgU5xZD2KT4KY84VwEaoznk8gKs5Rw4hXHS4Na3WNhh7vdYzstd3t2itK9j85nYLjY8hK8s4ttrQfHm",
  "key8": "61DsdDA6PuAegvEpZqQ4qtmMT6rUBiUzwVTCSzytbjJDXxsFKK4MfnmrrvZKu8VVzwvnS5BPKRRdbMH7LhHcWvzK",
  "key9": "4RE6QfcZjLuG4xkz5KfzGjwfh77pUSkomxXK7msmxzp51rv8w37hjcSAESdoBKmTbe7KukEaRBff5Wjm4D7f5v5v",
  "key10": "3Aekv9XdbyGbBSsGPcyvxyaFG6zyz4nGbmVwuMtz8EWAj3RgJ4HZzuaW7cuppTSDuHykMSuryinsdNy291WDFBv3",
  "key11": "5w1eVn4GkVe35t8XbvmLTTPdatddWXS27SxKN6qiyQEELT3YRYbnRhtY7B77q3ES3dJaKAemLHBrTnhEfici3ttc",
  "key12": "51ivZw3EAiJHhhTBDWKj7uJqAvskHbgTN19v66PDrXax1hJCfvtnqqDSyLjCKHYk2mXbdp2TWagoTWWj2WQuomqx",
  "key13": "444Pcc4b4m4tBmEAQsn5946kE86DkgUS2XZPsMU5hWndfyVSVDbT4fmB8SJ9zA1dDsWbt67fKWdAddpJq9xkmreY",
  "key14": "DE9C6RZX1QuSXAWwqYLW9WkMufWnUy25cjSo9qQkag14DgwwfKfbB11GREkaY2LfQZuLq3rytJtwJijXunip9wE",
  "key15": "245Uvn8MPvb2Tuu54iERWqWeV2xjZ9LNmxxcLAh29M7yfWyuUkPkQT37xvhxoXiTFUbVH4iXihNqXNYDKXLLcinw",
  "key16": "3hHPys5cwHMiVhNa1mxhSHhUoFsAR5Qib8gELxLVpwdrH7xqSp66RPMKRW3UbbeWe8etBgf3Qrk53sDZAGpzSvxX",
  "key17": "63nymBrGh1iWqrKEPFNX99ijDYCDcQNzzCRugsx4H54QbDc1MXtHUeGehfmHuwXRMbReSADiyBna5GeUPNLyF1dK",
  "key18": "37gUbeLwyA2PbPPn2C2KJKkiy1D3YUpX3jLG3WpXnpCxcw5A11VWfgiHFNeRLrWNAyGNUHX21FKQBofeiiQr6cY1",
  "key19": "5MApCuT9H57o3KnnDknhTdQ42gB465KJLg9wSU3ixnGsYjzfVSwvxqKkWfaspRpAnn2QmGnnh3GSzCLyC4671qXr",
  "key20": "3FCqcLb2prLsnmqi4HtAKcBrEukFXkEUp9Xi8Qpx4uiskyzFEwVMcEWht8EVFRtVoNEXiaxeuh6MuM8b94tr1rbt",
  "key21": "2ex2qGNyBk6JoMayGJkdZhfjebE4PFYuR7k14h2GTFzRZGpZuDtrbmV2tyZ46FmvoE31bRtzmjtWyrXyYNX7Zgv",
  "key22": "5oq4hDb83p6xMeCngzt2yFzR7xXXZcD1TQ1EHWUrp8z64Vdg12MWXSA2iy86kTbtQTmachvxN9dpppTiVh6vJy8x",
  "key23": "2LY4Si6ouZC6h1xAYkSvPxDrWVfyuKyvib8sLatLqFBWzVbfe2FFYdC131JDyzJyKnXTwE2HXMDqPGiyGgqHHbJd",
  "key24": "26xpZ7JoKom9YyFdVo4BNkBppDKLqCyrzb2qVAyFeAC2TmpYPDK1i4N6M5rHytDYtibLrUEAEjStSqaXcjCUL9XP",
  "key25": "4CQvEQEbBNQfdNwCKMP6hmNGWxihZidijq8JEmS6SktwRgtPZcazM4NCFacUuUcTvKfybUCZSigLySDpqZobXynn",
  "key26": "4kGS8eP7wG8ETti79moXg83B6Mub97QWwVxEY6pnjP7XRqkgskny7UtJDHV1MH1C2YnM8z7Us8kWg4wpa8WfZtys",
  "key27": "3Q5KQwVLs1crbhkBW5MTA5kxGJwUnqKWLT7srWRbmf6GgpsAokHCCBPq37LgELg7BeVPD1yaHrJhHmfX3sb8Sc8e",
  "key28": "3qNDXLq8wrjoLjDbPpWZ4KEPaP87gtK5saefHUh9LFP7WU2FUeK6cxSvPnV3tgadrjeh67qhxmGmu38NTiKWE1DG",
  "key29": "PQHwAf2H25hKuSXffTPkdiDNTNCbDeeopVgHFBDSVJ1rzCZyvNiHyqTVEtE3pkjv4VQe9jZ8Y7d8sAcM8apapCV",
  "key30": "AeraXvdwcFdMf6e8QutoGgHAB9YhSc9F47HDQ9iZ8ZLt9h8ktu9v1St87NoPk7Cxd5bqqSZztJh8xAfWDPYXGsy",
  "key31": "4xqP65CGSrgbeLkbYebVH257u77m864VzqWPfN4mn5nTem14c6xK5tNR3QRH9f38FC2H3FyCruznoV8XLp2Wx718",
  "key32": "3jsjQ6y6XK9GyU4tHps7EKpqDJU5YBjnUv3HYBswQejzrAunA5noNZW7jpEJykuyDMcSuse8Bk3Rugz7wi4ubz5Q",
  "key33": "3VM9KsHX68su2Yq43NQ2rsMw2wT1LV87dbiJLD3VBTdteVM3qDu3Yu5b7V8pggHpEEweaXMqpXpJHZw4NFTDz4Y5",
  "key34": "4FHYjJgWt9AHL5QL7RwHkzQpWxHqKkALNYvYGJvYsBe1BjPikeVvrtDUNvyjQy72e51X2utFagrB7dffPPr5CuFc",
  "key35": "5DDGELUgtnnrdxLYZwbyVeAAuYbkStzLLV9b6DCQjdGvtLSXUtQhqg34isYogWBWdpCmGHBwXy99DePQouEbFkFt",
  "key36": "2gRQBqZLb81dJYxsB7GR4LWGTz5ijXjZGpoqNkL8g6FFPiF32TzsJs8RjAbHM9PubE66bhJZdMp3fRnDq9rztip8",
  "key37": "3vo1bTpiKEMfBvKk6cbgs4fq9Ek6i89X3HupZZSFM6oTar1QoDTs5JdYwJ3SqJZ9CnERFYAr3contDQP9jpeJ1h7",
  "key38": "3CC5ymMzrqPeF8NAF4Cc5NiazJocxZWtxEM4QZazZzvxgKEYANvqgrS3HWLZ61T4j3Nvwfh5Xo2PVz7nexn9LM6j",
  "key39": "2tWDhhCJrGj51j9mGhLAtzpGcvbUkD8S1hfZ9tDiEwZwNv2rUfZp1fZtmSmtYT4meQsWjtPAki9W5Guq6AuhYqna",
  "key40": "4jfqR4LKUzp7BCZCRenWd1qrg234XcyKqNTPobJe7sS8nYMzqvUTLSY2oxatRSiDBPbe5zb8Hwui8ByenWAUAZhg",
  "key41": "44k3vFSE8K7CTHNRgAm4afvMUD3655NfK7NdGMUu818dWL7otqCqp3jrfKvm2X1v9gVCxxgh7D1nV1skPZMgF5iV",
  "key42": "4k4y68owrMXWGXBcYnNpuDXpC8uATDCkWTr6LZhcdyio8am1QQ2zNFv6xVjexFkKFZvKviG8mN6ehgjDMYHtUFBx",
  "key43": "4HN6EQL1HPvQqwyJ5DLU9nojpHAYqiJZAzaEWUwFoh2EKMKK1kvg2WaCdWqkbmKj1VmiCdvrZyibJyrPkw2twKyH",
  "key44": "9vbxfBC1Hf6tqUVjiiGcRwFVf1JEqfFBpYvn6bRjNSv3wZ51cPaEa1jZjqr9sq7YX3zWfdzifvHMuTL15Zxm1Tq",
  "key45": "3tu4NXxVN7j1KuK24zAeRSp8NxAoXSWcXj77RS3fZkKsmMvhRHaHUHWPB6wwDFBH4RZ4SXP8mdL1HxAtzyuBTUT8",
  "key46": "5VoBykGvRfN2phpD1fwU8iNXfXFi6F1dZ6YaSgcAbqRKhdXUDzzRRQGHNefxShEKR3C7TDBSEY4mrxei3NTgRvcw"
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
