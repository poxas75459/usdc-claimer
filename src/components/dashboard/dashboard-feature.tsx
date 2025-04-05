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
    "55jDTwbdTCxXeZeUKjGVUQisxhHEd1N5grfH2ZXhu8khpXF5kRQkX6CxENP7sJ7W6F3HjcUTANMqYDfjuNGnKPRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cMviALac1fHNmZ23TWanzez4Kda3wAtj23soaWKvrF8r4U44bAMFZk63BdBmqpzNczYH9NG5CrNZ7PpnQf5bLtj",
  "key1": "419wBx6YSjB1bnXnpxdcaT5jvE2sMd5YkX6dWyMdAmpnGg9ZU2BpjHseBZDe42vg3c42MouxPU33Rx3NYpr7NRug",
  "key2": "3yt7BrekXQgS4HM1hjcpVtz23KCqSDboY9363AQkcAHvydLW7iETuGCLkjv4wFqdDDh5k4t6eFSkVSD9vizQ28xA",
  "key3": "T5NZ1w9n9dKoBGkwx5JK6EhrWU4zpn3Bz8MUoBh5Z9CUaA9a3jaK3Aq48PZWHbik3D8LedxWPwkYGJhcDWqZTeD",
  "key4": "5NK6nhZX7Se3arZqj9fwKuVE7tsmzSiJ6qmMnP5agS3mWm4k1Wjc562QeeV8NJWrGCpDiu3vjwdYq6LLv6sLyq4n",
  "key5": "3MGX2xFzX8vKo2VfeSu5dBg3wLgrRnvvegAsLDM3Le39AFJB2YYarSAdEh1fgp85LVpKVHzdURAaryLgCLi8h7mB",
  "key6": "3WaY6Qwr7Pi9prLxTH66q7sa6WC4MUYEVdKtDFUZ958L815f7bF1PEnrdThNN44jT3pCUdtqUZSCjTvng4cuecoc",
  "key7": "4yVX4jQSCAStPBDYzx8X2F4EGSMSKp6L9q5JJenCHhbgSobPJjifEwx85yUgj4eGBVwyeQ8YzsiFsBNJUTVD9td4",
  "key8": "3A21Y5EFSkzVKkWkfSJzFVJG57F5SzyXCwSRZf5WnU336oJm7qqNb8oEvaabBqvsuMtyP2T3rDEsPrHBNoo4fHPk",
  "key9": "2fQSw8j9VF7D2joYL3wPxhAdqxZsFJ5KAhrAhtRHyrujcwnzGtx4pMsGvw2UEjpbuMwhUSHPAHqe3VucjJRH5CKX",
  "key10": "Q4dih9heJZUtoGRcxxRXfNFpA2ohGKeN8NfRExwxKkgVdjXrcesXBuuyLWoNap2N69Jqy3F61HMGoJPFX65VjY6",
  "key11": "5U4bfyoCjjryeXGEUMRFbc9b61Jux3caf7UtRCJsQBuGPiT9LpGcJx4eUC5W3jyqJkf8N3q23snQwdzcL6ShuDmu",
  "key12": "2DMqoV4BzfSKYMbYQC2jorEr9MjhnWJxyec3TWma3D2PbePet9wUWykn3cS7nBVaAjbhqeiXgoeowegbxSfXCw1x",
  "key13": "23PkGAoULfmFWUUqkykj2SfPX5TeWCNrDQy5tvBiM8VSrKPbbWQSF93CksgioMHN3fShbw4zXMDheM89fitExJEf",
  "key14": "5p6TEjiY472coUQ49t5jUPYr7AaZ498P2vA5WpxTKuGHVhEYpkUe2rsPAaRJ7CspVTfHkQbWM3r5yBXdKZN4v3ur",
  "key15": "4tg8GeTLMVN4FAffjyjxudWxMSAWqZ7fJQLewV2kXQ8F2PibcmediVDnWNPpAQrME3MTYSU9RwbZhKnd1gsZ6inq",
  "key16": "2t95VGojwUBL3Pn3nSFSREnLZxjQ4wGfSZiN9n9tzqx7x3WM34SnxqjoWp8eL5ASGGG7kPCJ4yqfWhqYoHWKaUNL",
  "key17": "4ihDSp9Ra9tdn7VVQufuHyD2PaGmMXVJk9o8Ty55MrkjT77hyf3UauHeFi9vzjxxas8HUZqUvS6hG8XN5Vt6FcDV",
  "key18": "3emkYNFcEPaBjTj1VVgfMFBUcLDBWMaqqdP7TCne9oADdYhXs2CuYothfgWtWUf4vcErrCPXf9FKmDvDpiFEWah1",
  "key19": "2Q9AFb2yYvgZEfjegjx3mbm4ZgsFHbm95cL3m9sLiQbRJRZZaEtrZXP4a3ZE7B967y5QJbRYPXxyPQWBKGSGqZsg",
  "key20": "2ajWAKvHkCyQGjKVQ5idqYriF8gaZKYoeZvM9UmxB4mznF561dAnWi8JDCiGiH45mbJ9tqbY7sd6Rp1V2ZtWGgoS",
  "key21": "2BqZC2sybFyiDDrQGi2qPrVMwFc24sEKYjjyo5eRi5CavEzNn7wncmvriTYHdHVGXUm11HwrXYEEB6Z2a7RGJacQ",
  "key22": "9vcagaJmtXJRfRCNhmAKaTXnQSrRy3y9kAnLDsB3k8Qu9bCbqtgyDs9TpN4d7sogHPs69wFesn5kirek3AEuRJF",
  "key23": "5B9SQ64y6vSQ73TQHbD7CNahM2LavR3A5b5seyyuyjQDSthUAVdTHqKeXcX3U9BVpGSKzsLdLYJB1fENjZ1ywYXT",
  "key24": "3Jrozy4mEVv4p4K6zcVsN2a4MvQsdSE3hb1VuYXvSFs1KabqmeRCsUFRdY2giPhdfmeQ21C5kgGzteEHcQRkn5RY",
  "key25": "52RsXXShWMCnoo4gQ3cXPCDubANuLED44P6nA3ZVDGT4roEnM7Ybn1GLBqMUmmz7P36DZyLDawJkZHa4YaFmwVLs",
  "key26": "5KwnzerztRN4GDdqMhwrVrdM4o4xXy3su3sK93rtKReFt4dJkbMMg2svJNtKPm9GsZajMnEYK5s3BkcF4m5FNFa8",
  "key27": "2ziZw3oonKHuWQR2JHZWGqDCZPRcFUZzibiXytGynTNL3tq4PKzKhKH1JtDKRmoTdCv4DGPXgdujRuKCFtm3ai2s",
  "key28": "4nD21GiWyG9saHLZma3diFynAsPMtEGnVPZySaq5FXSEE2XYVzDxWPtYuJZPTWu7vNnv7CMEK77sW9A1jSnwLa2e",
  "key29": "Xk4hQ44uwbF9JAMhBKpBCE5NupQi4jCxECQJgC2VpTT7S9AtjMUgUNp3Gx2tYTTAe3GZfNb36fXaFQxHP4MEjuX",
  "key30": "49CxACpT2DJVj9N9zQerAZXjBCGQATLCJtJRYbJb4sHHeaHy97qQWKKKLNqYLzavoA5g4pn46TFfXbA44hYo2QeC",
  "key31": "4Y2p8DzSyo96DF5CsdTodFyyLYGxhXVyS36k7a9ukVQ7KwJWngo98wpwDr325CDytaswFPGusqbbEsPMA5rUJkeF",
  "key32": "49jfVueah223nsr3vnXMQMYwiYA7aWX9yg2H3UWH4KLyJyx9GsVQCz9jnFLnRYZuQ6DrrTZLYgxuBjkmxy3E9Ggv",
  "key33": "4n7qpWBVek21WSXBSbG9S5aDhpjeG4p1v5Xh6TCUJMGgtQXKAHaytizKGhWeUKxCDdTYJkvuRD1K3zJkrVv8rWhH",
  "key34": "3RhNmZQpXujZFnAfU2XteUuGhPZ4UXY125uWsjRBEZAFUWKWJYB3qP3wsFNqqoy6mp8AoQazKmp8gpnMZLPUFatM",
  "key35": "3dqdL9BVL6fAroRkhzeByi9EoeYCsspCXnCcDNPzC2dDVd8qFMEwnde9TaZXEQxnwm3ReGye8YL4J7r9f4c6Ft1f",
  "key36": "MyQPmyvSMsoqqxoV6uFp1iPdEjVvb7enTjxN5aSgubrwoQ7nTkncVihD6Fh1rtVZWnrkiRKdTTrHYwztg6SQNTo",
  "key37": "4rAxZiAtgQ6ypPSqh8aLdKeSmr1DHuSo975j3wqgHRAqKB9gqDcLZT26kvbQFaUyEXj6GoaghbJq2RqMWFoei7Tn",
  "key38": "3SJ7v3z9gpDWwMR1E86tRoNVMUC4JXT1K3xaseJLKL3VMTQAxHJ6y8GnRXefGMqxu85JsQN3nVCUxJ8d2DqZ9AST",
  "key39": "5r837vNJN4isJCoAUTjMfESJyid8NKXkzmrPosD6ikvcLCwRCGFxEmgh29f7srPjcGQ7WnNzQTWXNVQ1kunGURRG",
  "key40": "3SdnPEaSZEDxMPAQstLjJ9XkbCLxGcJUuHPtbbaKkM7ReBhopnUduXDSPS6FL16v1h9oaL4gpiRcgqVqxMK2MBss"
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
