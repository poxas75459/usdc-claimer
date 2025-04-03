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
    "2hYPgnaAvD7JwJxx1UVFSd5DCuxfvKz7MuJPZspLo34apacpBuyAosELUnqLdZ2fMdmiB2YRsDPv1rSJ96RhmpeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ygh9qWTA8MyLBuT3kQBALFmL5yAdgErhub1z28henQvchr4tXYv3oykmXKAQnY4vjnfHz9j7BmpWGtx96KQXeQN",
  "key1": "2Ke9uDebbKJTCXivR48UVd2x4mJeUrw61DF26b64YMVHWCtYWQRcd9GMb5ycBbPtBmFpRFyDk3HtpmxsmeZRteKy",
  "key2": "3GhUYQ8qVW8wcDtepB9k55x1iueeR5XUxRCCwaU5XkLVxSnLYWY2zzE8ZRJTZqtnzHPr4YtkM2cZzu4uqCKBkGNG",
  "key3": "3izYPaY9qM9DCXAz2yzawUuNeM97Q6k39EsU9AnaJc6VXN9RqDDmYmBHEpMLeiaznwiCVNoZoz8RAa1N8ZsmQqQw",
  "key4": "2iHq5X9bW4m35om5TQPgfdDxQNSdgxuTgZ3W8HAwoLpqcM5wcCajTEVqjhS8AnH2UvvpRQW6cMhXWg96o52TVrH1",
  "key5": "NnpRrFWUU5Tfi9nopkTxFiiJqqJNNLqVgdRBzi6bVtYk6aDHfXCzDduDRgMSohWFKiohsfsGSFtLRzso3GYzsjX",
  "key6": "61YJDDEZToKZafwbydA9dmSAcfkAaHQc7evxq1JfgTccy5BrSJLs1CEr6kmr8V1icepouyBwoQzDNoPn5JASiwpy",
  "key7": "2rTH9NuuUBMqYdNFzasH9F2DCNPkHCn9LtiYKYzoMw9wNQLwLuqGL3W4KhxQQb79vmUAqT1CcYgCAcAmb1VrQcCG",
  "key8": "4MQ3yZgg44z7uCFVGU6W7umkWoW8c3qeXP8CGz6qEPQANx5BaQjMUbdVfnwv7pQDJEhSU1eHT8eCryn42XdP1ELX",
  "key9": "Up7h45qsmhVATc98ttvtVBUi1zCvkRSHMFp3fGfYchUtTZU5h333uuZNQML3CkjzLBFoEhgAq1c9XGVqCLsPt9n",
  "key10": "4hiDYQmuqGXKVv7cYpuo9zckMmPLyf15XKigZDe5NE5gR77XBz4ifm5vbsaQdFnS4UADwT5t6tTamR4Nq3ZzhDA7",
  "key11": "5YsPybfoa5uZrwdngeKkoVJSMGeNLuXwH17q1fft2BM91Q1ZMDCZw6RBmxWWgc9uk6T8FvFJUX7VKZWC9qiAEbz3",
  "key12": "Sy4Ep6xwomiR7B2v2CfeeGr57eHaETmBD8Z3Ubd1KEZzQW883bwGaQui4XHvCLmj9zSZuothHimx4DjG3wp4zxb",
  "key13": "DmRWrrjp5gSNxHvsYqp7fkS2QrV7jAZMPyu5Jmmt15tndnUBvgEcxFwCrgbmc63QBJf5frD6fpWScvhE6dAzbTM",
  "key14": "3TMccwVs82cb6zsVGPijZSDAXcTZwH5KRSU9GZZErvcAXp4xUUW4XYsw9tMpgxVT2KD1fbjzzFzRQD8MGQ2VmsR9",
  "key15": "319eTug6DYMqFZFo4AMAtxLGSuwagLq6TJDVE166nPvnr7yH7W8RwDrev64LKKNYPbw1viX1LkSBkd5mU4wKeZQc",
  "key16": "Pu1oVB79voNvWaRk4tvxGZeMQ3vb9fUdMkpigSiBRTVMyZdPBVb5dHjR5K6y38qRRAF61mP6VZVZ8yC1sQBa4YZ",
  "key17": "4oLHxsUUH5HkYjvAMekmU5eHgNpqeeQrVuDei3xEMwbm5Wkw4XYCumbTJ43vHTHSkF15HBM5P7Lxp2AkKrhLyAak",
  "key18": "5Ch2iFar7yFW8XAEihKpBFcZVKtrZ3WVi85WemKheJ1yFCRd5BVvdE8NXqrJxdx3oci1sdR2ZHLWnksKFZtyqpEg",
  "key19": "44WaFg5hmgML5FjPuzeo8Gwiy9mc3LDTTgNYNGGyytknV3gxdLebK13oi4mQW47qtCEegR7X7fx16yjpvDxPCAJW",
  "key20": "2B17XAJgLwHRdLbQtsUQtvx5s33Cnpebb2TonRGDHVvsTGt4BSuesHP2qXgfTG4dET8sNc4NiNkPF7WtoV3L3B47",
  "key21": "42nnT62e8ogVYNK5nTjpKocVDqxmw2m3dWHJ1jfDEemjv4PDWZauTT4efiUqRyz9pZ2QL7fGiK77Hw3peKJdzv17",
  "key22": "42VoZCGLxcxFMnVCuFYVEoKgASZvN42Evwt2rxTVdK5Zut22K8JJ5EGuaGBdtsrBdecpuVLgJcKDot2kPG48CM3N",
  "key23": "5BjwAqbVMbSHhLcRQTrD3dwS7mm5DZgeq9VHDY5244TRrLZM82FcirJsxbfQL5PKzoVWXDKtHxQ7DGR2zoWhxUn4",
  "key24": "5XnRRree1oEzHksXfz2GaoBZLsxhs4crASbgpqHzWHVcP5FEoVN36P9W1V6wKmikSoJYRG7FRzi6jm3rgEyj5GTA",
  "key25": "5zikDYk72JbHCWrTJXCkhzbVTBXWeF6gE6uPRijxtckSNJ5pQMLNoHzGkSJbzWiRBA3R9PmqiRV16fLeL8j9H31V",
  "key26": "4Yaedkvq4XPdcNPrRXmqXxKZgFeU3nZqJ9pgUxttYJXLJQyZciNtPc918LoeR5iKZRjxKB2bqs5QrrzkcMoJh4Ha",
  "key27": "362zh1WuUWYLiwFKjMp4RY5Reahzyg2t79LMoUT2qvFPack8siFA8BrW64RH7Pr5819pNEpSMg2eNBeD9VxDVozs",
  "key28": "3WHDzbWhmnyQ8a94wEpRKCPdr8seAfrq5BAJHifVnyj9sGV7KTgg2z8zk5M7WGNZmCPyGZopsL5xU8KFoX5wxx4i",
  "key29": "2M27N9Ba7BTNvrkSPT1BRT45yJdjyb5R3QCA9dbmQQQp899eUaPYuGLxTVbQmm74cPoyzSXEGWWtTvKtmFmkXMRj",
  "key30": "3QsmFfUUjLAmH2J14oSMiUkz5hdfoGi7EiYd85K1qcmC3oLvty3ksr36o8ZVpGnWaJPeVTvzk4bsbgV3ujGntmaN",
  "key31": "4JvGRb16CqXSdEidyYaGTcRgPv6LaMSJU1qMDcxPCcQFA6xSq9ADAT49zUMiw2Hp324JShV5D4JxvBXUg9JjNLP6",
  "key32": "ec6mbek59bE2HQtmKw8W4rdEr1VHQhsya1GunSUAwS7ZMAw1hCMzmvZoBjcGzsq2Wu8ATkSs6cdvJqpEnVFRHTw",
  "key33": "4PbvUw1RHjBEPZrQYy8AX4u1ZbUiQbSbma1RLKUnNZkjnQuggeVkkfMegCrH8ovvE8Zq3CcPpH8U3wvCr8hcF3gW",
  "key34": "5AY1PeucxHEKzpqxhJ75xTqnf52Jzzv74f3rpemDn6h6iSDLeN24q9hTb7RVhg8HwhN8tP77VDovDGAfQrWaHhpY",
  "key35": "45p3jiBv898w3qY6ZMUtnZXi85co1Zw4asQyg8Aw9mzPbEWbWPEconfJ2iGHHBbkSBS33kHsUwfLbrqusMz2kogV",
  "key36": "46WJRchtZHNpKJsXDfgTWLmRBvciyYse2zTHVpk67hwkStPznjuxDtEwWvTJzRhBFWJyEXY8U4Hxq69iTxghmZfY",
  "key37": "5zrYcmoWNVT9p8h1nrfKX1zfK1nGeUs1HGZj6kczwb3csBbSgUno2BSrQdcmYEdDNVCpoB3pin3Kb8YudULT9MKn",
  "key38": "5kNWitB7qCXeUXXQU5mUQcAwCAtg5wjPQiV8J54R9vLRUKeQoEa9Z6Lig1ez9pLLJHCMnEoGY7RGEHNQmFaiR1pT",
  "key39": "3zyFUk5m3DKiR7NkYHGMMjqDysiVWfSCYb4eKRXosWWTwULVJgYE5LSm19tStNHnjkwd4mW2c3391wyHga5qR3C4",
  "key40": "61cXrohGyLaChXPW6RGeJ5ptBqtLzk6F9tAUQ3N8p1PCxtcXRgF9LhGDNP47rTrNHDshLhbAYkozzZpEbfcnxB1z",
  "key41": "ousYbwezzdeW2gb5nXrbJoyPR7s6Da4WeFnb2gExqt6eTYGSZc8jVGdSHfQcpepsmWdMCc9SVhEftKvby4zNSo1",
  "key42": "jL2kXibzg42HhyZcJ8D1uLkBg1n6rvEdqX6hgrXgVhkKE3QvVB3za2SUfY52uFJezcWASbjdTvhaGePLkpYBKkK",
  "key43": "o5Ft3QjyxuwnUffjZHBAiT1pNz92S1M4MdJgCKHsDcPhGvKKLxXtj7n7Yh4xV5nt2HncKLjUvPFRvdR6UiWVp3n",
  "key44": "2QdZTbmcoEqwFd1M7T4cdVEF1LdteUTsFL6T5upDa1BetQeRxxpdFfLyYhybbdUnpw5eg8CYk2jz9AtyAtNLzYtw",
  "key45": "vNMVXfyEj7kV7FSkXrC7CS3kVQAURhQgf9esmbTQAm9oo9xTpDtxx4EbKommiVSKx93ATBH7QNcxwRTwkzo4JLG",
  "key46": "51b5kZWiPQs1N1wc9bYud1qzbZdA8gtWRNC5MYVbYYXx9BneHpunHNeZQhMm8AFWhcZ15GJBqLZnm8R1AeEhuPUX",
  "key47": "5KNi1Zu7cFqarsKBLw9j6W6Rev3wieUD3WsH5rF4LTZDbgY2U7Nhf2S14awrjEEKqkBJ24fQmVFJ3UEXJ6Sro274",
  "key48": "219ydYkBb9B5QTMj35UcxvFbr6W4D622UDf5gKJxfTew3vTJJLSfk5gnqL4WuoD5ApQoKHQ7Zx4DHJkEPzvYChPH",
  "key49": "JbHC96ApgSbaUVt4bRMRJyKuD9XbUWBmBaXKwvANE9NYN8Rbd9nn1S3iJhNptWiSiq1nFAVK6yxws5Q7ssaJvpr"
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
