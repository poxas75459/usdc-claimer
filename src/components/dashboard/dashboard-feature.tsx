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
    "2ZFySTwZMDCXRpHDSnfNDDFLyD8y9PmFm4nT4F1GdAE8AGqYGK6pSo2DXEqmb5C5pocjoYg6dJnMMLfFDDcqZF1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDcR67rpn99ok4zAEPYAA7riz2qBKApLPyKbBNkeBsGMf74GYyCFekj97ksyLEDg2ikc3mPuiupsbA6YGovEjgX",
  "key1": "2orALRTR6RM4627UpMpSe7ppbo3C7DZuRXLJY8McUAaJD7F8FqNYmUjDkvyxqKFP2nVT4HtAiuAeNswhBkAZFTdL",
  "key2": "qERX6HojSDP45JtGmv3y3s5RnZ4YkQstj4UhrWBaFnifh8mmENtPZiVpjApS8CDXDQk4oP5L6cqqaLPBKSig1Gd",
  "key3": "21TnPa1XchNGzjzJNgVd5NP4wA3CTn8hHfdomKLqJzS3P8D4gJ21DkZdZRjxAN6SPAF6gtniK3V3wzpxE8CRftDc",
  "key4": "eGc48aNbYQaADsyoqeowKtQB6178hJop34yYRddrN8edsBET72W2xJePn2nKTv452VAkmcAiwNPqCmHoW9qBR8H",
  "key5": "ox7n7gwk12LYeWkdX5zLCaMm38eNo7K6SZY66f2kH6tiwRXpftoMxnDc3VGYPQyP1VChz4D4D8h7j5193CrQTdc",
  "key6": "3xD8m2SfUaAgVmNXTUYRwJWX2S1KEYqdiE8DS5fi6NBuaaST6tk6k9edhbKFJi7LEMFCLcHwjHZaRo72sKHCy2Yw",
  "key7": "35UWRjgkimBruRmN9vUszNMvxuKeDozMqbTqFUaK6MAXKqhy4hxXR3NLcYUwFNSyyybdsuxxwcqdZxfFoJx5rb9H",
  "key8": "Z84mt9W6QECXx6VxnHv1qSPs3R3gihre2YAKGx2YdnWqNVpxy8eY8MwM76EytaAdFRpDtngNZZpBP9q42P6esk7",
  "key9": "VSdy6QcgnG3oKKMtV2hwDpPLpGFUcQf4TtL2NhdPoomyEwgWtC2HQhFCpdRXnmdGMqj6yGkVrwmTNfwj8bY4zfB",
  "key10": "2eqv33nrY8gwrevrRc3DAb7TUwC2SzRyRKUDFTSNc13QNKbCdvRphbCEgV3StupDUD4ZMtm6fxEkBaz62Y27oeGB",
  "key11": "42y1GoLdSwreusko67MJtzP1Xfyz54Wci5hNKPf6bP5GcJhMmcRzM7hY46oNJzxW3zNrb95FhwJGrn7gHEvnRpsU",
  "key12": "JgvUxsqpsVMrFNhT3hSkf4ECkZfQfw8r2k25d4wVaj5oXXTjEyCjgBnKmUdRJye85UJeJ53me685aeVjGLxd8sD",
  "key13": "2HpmTWJpqmecnTEcbMgHV7Pkc5YbBkYbfgPprBDYyjFUNEy6DnLpSZxBtBVTBnHXakV1DUqKGXuYoM1seLvosKQe",
  "key14": "tZxAv7qdkRFsrfuccLPrpE5wEyG9DGkyNqtpmfXha2wtPhKi6rivSCpdin7xSZbmWJQzV8tpRsFgiDBdrxnQ2A7",
  "key15": "64H4gDEFZNp7FUMpkmqM9o4PkWdfGucq8Xa4XcZbHrczPnrNzMCZkBRZ4y814LEJb4PwfEe7pvoyWsngpAzEoZYj",
  "key16": "rfFtmejzn9MgVy4aeAkbNjv84Nkd4JSD9zc25tJ2EKq1w28LKpN16a5tGULuTvoL4mkEHQkbe9mFH34gXE1b3GJ",
  "key17": "4T21dWeytqzmYeysv9eK58Z2uyJuBDkRLPxZcABQSYCEUP4wXGNBhLK95VooW84bGF4zTfSoPFmqWypWnSo8EjRe",
  "key18": "Am9FudAihZHuefY7cHwE8NeZ1q1HxhYmsyK3byF1iPtkd2bXppJbZ2SWKwsKG6s5rAPNutPxwDXKhCzQ8ZvGroB",
  "key19": "5fdJv5nVnWz4Hd4vPhBUHUVqyyErRkdoUMnCZAZEGZeUv3JFLaAy8uCb6M96Szo4XSvNQTVJ5W6xMBVAuWQzkC7b",
  "key20": "A2KKHMCF4hEp2t6tNBHbGskwbPVdM7EUHvyqygGX9wvuYxVKV7oyCUgYzrFNj2eBgA1CVYKoXAyTqK2F2Nb3ett",
  "key21": "3K2Ht3W4137NUGDEegUYMCmTsQFjpzHf2oa7QskmHkdDJkZPvRpzErLPoqzu4CkMQtpjnd9xpeCGQSfgRxcbCpRx",
  "key22": "5o15wjPJphn2K9tGHaQFKL7fPJHekPrNYUCxvs6gVMaivUSoReRGJbeeYHw4NNUadtP11rejor7viLpasRHAWxbt",
  "key23": "5WWw1ZZxEFE8YXSxmeVR7hmukZdraAzD3p2TXLDfcdko1gDdrE8XmsmqsM5LvXhn9e6MmR8ivLS7UydzQcYbZnU2",
  "key24": "3vLCrhYTK2K3H6uLpRNDeragF5V5aB7Wia9Xv9EsBD6EojUr1s8QH4YjHeBGRvBXmaEpQByEjAp1iFkZsRovjzw7",
  "key25": "5D9m2cCVFH5ZDvyzQu4wGkWGff8kvcEbvoXYwf9hLsau9637cH3RhSaov9jmmXQGKydcD6jafR737fX9dMtYfqSf",
  "key26": "5Rk1W9wnSUYXtsPRDK9LGvFAtgVrUSUzjK4uMcV8Qm7jfYi9t3ME9t59VNLRUk2N4Frj9nPS14oASrdR5tsbZ2eE",
  "key27": "uFzLSaj8e6ZKGoB4fdec5WYHQTC7CidHHxyzV755nNczcHzPmbXfNxDQATfrerzoPcPDHNPacACxuP4M5dRR21c",
  "key28": "44C2f3wAi9SfYY4BNCHwWofzPPD5Gvv7rStJp1Qx6nfmNTpdLXuVRhe1wNZtFoLnpBmR3jLxXhmj1bKFrDDFuPoK",
  "key29": "5VCYcVXhHMYmqoRAkqhtWpUJM46LCT5RCTtdDYXQdeCqvJ7fDBqDoHNfWUVKNnUJxmyhKb2btMTMc8kBeq47eEzV",
  "key30": "5QiKy4C7K2ScA6d4i8e9Zatuv34pf1dp7DCrtmbGXUYjLULFPioYJ3c2BQnWTqMLCiyD7DmfQWjk7Wxm8QcrHora",
  "key31": "3B48GCvejef2i1pskwpbWP1VYBGWpna6f8KhgTv9GgCK4wfo1H1HUReJTGPxcbCoJEF8m7Rq57wqbgju2KD28ho3",
  "key32": "2zjc3WdDneuxad6qpn3G5EumWz5qQGcjT1phWpaDY9xQNYj6eofwM9XHnPqk6tL1cxwxUDb9TCjNCqGnmr8NXW6p",
  "key33": "3jm3qbK4oZ8DYZ69w73rybEa5eZwVT8hXmvJmgvnnDk6MMP1UJvw4DTFX8mbSFB9dxVvXe1cwZnTGV1HtvM7tkCL",
  "key34": "5qrQtHZe9hR5Kg8aTxDNDLLVbCJnrjm8X4QXFQjxqNtQ3ekUh35wdZJEBkRWxe4mX6MXpGh7x1X1N7YEJFQ3GQA4",
  "key35": "2qMgG62F1gFPgrtjq7NLbpa95mbrEfnEteX6skYtGirsg8vkuzgvTFHXbJ3PP4RjWt99xkG2K5WfXeBbC9T8YZ2h",
  "key36": "AGz6fJYcg15MaXbHwZVzhAErup6CCi3AEf5WF4A5Rta4BRAd7CCZyS3mmZCxuttfSDKUmNbPZxvj2JCFSLQeEiV",
  "key37": "5N5NoEh7Z1jDnrNia1VJFskZPz7P14MgXMEifu4e8wiu1v2dgaGUvQUKHGhnE4qQKdxsqQd7ymiJwTgmgFjFUrd3",
  "key38": "2Grfi4ZjmMsarLtow1yDyrtGdK6yMepLbK3qouWefDkFtKk21KGW6hWGKSNgQkPhdmqLD9BpdsWWG8eBRTmLaN8t",
  "key39": "3hWLiSzU39oMc2ymEdn8tfWT4yNE2JXUBxsY3oMUoZqPe7bffBkoWAi4vRapQ7fSwtps3vjpeGPVmv3gbKMF2NLQ",
  "key40": "4b8ppqLXQ4ANduu7ofdGC1JTXLT8ht76Movcz9AzRyYzSZzbFAEWVAYZDem9qtgbi4tje96pWdjoDZCryFVkQrR5",
  "key41": "2JfUhdFhQhYHjm9ytdGft1fvLosN7isSFpzCGJ5xxxz3V1a9C7PrkNWzakKDWVrXx5onqb3Cq5VVufF46gK8Fhm3",
  "key42": "2uoh1HvTctvg1XCiAFWAy6fAGybcXGJdA7ucnDmeBr3FYJVYCG4cPZoCgCaLV3DWZp7gwAQPdFsWXe4zzmjhymmu",
  "key43": "59HzPQPWndwzZDUfHgiK4hs3C9LoJFUqoZERQNCBywEwB8T4JR1nJqdfw9Lmv488WqLwi3Dp2hNfodEUxfwK96AT",
  "key44": "2V5pEwuhaa2VVPsPUTBwgesGaDeep6CLBosJSKo3a2snnFQ7s5HFZvoEz7bwRydkrNBtM4fMDDdpQN71RBosxWqn",
  "key45": "Cs7KQoW8fWRKPS47XbFVFHoqqrTSuE516y8cYD3X2j9Z6KuEE81a9REG5fQnsnUim6YBK93wnf6NNSwAhsCPyaz",
  "key46": "4ZD9fqXPz6GGTGVGGfFaG3b8oi3HLF7NYJ7WDFGsyRCNspFhgEor8njHuNkEkT2YivQciyqrffnphyux4MFDeDSj",
  "key47": "27NUUauWamYLPuE6uiY9mgSu16kMXqsiWWKm4jwskiATYQtyqR9Z3v4PGWVcXzocEWMpcd3NP4NhjwW6kqohgrAf",
  "key48": "27LJv6xYGVJzbiYRSxSuvrVzeFF96EqtxzhxqyoBgYnkD9seMUD5WzohxxYKACpEdkLQ6SduR3Nn25FcqoS3JqdF"
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
