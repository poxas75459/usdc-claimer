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
    "iAr2HxEphgp5265MG8tKknh7GBH6qSn2feDsFM27bQKrXCutpsVF7xisJHB5HDQCYs2BLusVT1Y3gHWC2WD9PuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G45NSCeDyuQnr5z5EzvBSviDwjLTCoN6WLqSaVxuFCQhPvVcKwxaGPTziKw8zT1YqBhLGxXH5igaeBR9PAremoQ",
  "key1": "4ZRncUFtY7GsS9KCk5NgyvbTpaCEjJ2jgbLikBgQb5Tv3qMkpr5AYP5AC2dVeMBxodPsu21VwxVRDAVFcXyvBQWG",
  "key2": "2rZeWsVmtWWSjaZhH8LUT3JoiRPHbtf8YvQKfiBCC2nhfT2WjNB9iQvQJRR4W8PjthM7XpKxBvcjkSMpKRdqxuvL",
  "key3": "4wtrMunaHktBbQwPCbxNS2FnLJzpkGgvY3UnZkecBEcQPd9GRbtKd82qDyCNfJZGWhwndr2BJCb5Zb9HijPPdawc",
  "key4": "4yiSb2NZFBpWYwFYkvbLz3xNgrcsxnKBBYmT96BoEF8fJx793HvfCDqUcCkvkdtKuTgYqUtmzHwPCq3sskoXzPW7",
  "key5": "pj7RwyfurmFhpUxbhagWoJxDTyhvaHchgEjahqtusVcefA4Er7Q6w1kUm2qvuSSbXbnNPeTRmPrqHmdVGo7922v",
  "key6": "2VzMK4MK6URZK5zovhGcujDjPw8tsaAppWVceAfM2vX5Na7v563V9nYborydDVj5PFzTC8mWfp5c5YcpTbPvT2B6",
  "key7": "3EuxcyFkbeob8LAvGCJnGNXmM6CYKzLJGMRodVYYysaUajGwq7rcmg9KNrdkhv3BEc7CuJ8NzESL1euxTJCGxE4N",
  "key8": "2ZLbTygAtRWyYbZNhgJRSEyr9xJj3wd8wCLYj7dCSPkk9RX1pGPWodgCRHnnJdgvTtYTt3ZxU6zPVa8nDjDRdhPB",
  "key9": "28rEEx6YW9BuEV4Rr7xb2c9AQUK9gVEiweHfm2fzJEX9TKifScjdUwQacyuxD7kCZef5ZpJhMbVG59P52VGwH8ry",
  "key10": "5cD4gSzmRkZG8HN3poD2RPzJma2vFoKYaHZ2N1pPAZ9pU3aQXFxwhJ23aykA2wiLqXpVDSsX7P1pw6LDi1ZghBto",
  "key11": "5YXVXqKxVhz2RaqqG5vAJw9M9gzf8fhPf2BPKVREdf553MP4piYx3UX76emmEmN9yTufLPbBGUWNrqupKjZoBGQ4",
  "key12": "zdCAPbreNwcqoEmLgMGeL5hdPWasD4zxzPRFnTd7BE9vgwSHXCBz6KKXxFTPN5MrAg84ABvyGfkcuhqEGzCAbR4",
  "key13": "2a5LRNpo21cWF1D73Nh3JvLRgq969FVtJ5vkq16Ku63uwREyDmhttVWu6M8s1oaDnwbUhj3rU5gvR1njsQiLAgUv",
  "key14": "dxinefZkSmtAFfpazuFmNGhXuWTo3jxDPEU81TqHp4eLxZsBT285YPbhimTGf9232UFEFvmh2z5SN8rFBhZf58n",
  "key15": "Q4HZDhNhw1anwKVLratJST3xbkoPeo7g7B9rMRz288ZH8Nakrbp1izzb5xzqz8PStLgvLb7S9PcyBFhPhF5cgaM",
  "key16": "1oApipupLFK5mZ4AVs35Mo9HWf5SqZgGeUaXkZHw2rLK11pHw4p7YwgZQX8uqVVoA2bZaWz84WnE9DvDEc6s2qh",
  "key17": "DVM21o65QBBnZHUDY9nYQWp1XUh8uFNXZjmdbjSnWtMZjp5tTvwgpHuDVnhVGKbCKYqMTgNF8Jo2RzmrgidrXNz",
  "key18": "5deGzYQeDDdn1qQc7RHq1QZ5MQM2o7QpGLg6bVmQLxc31nV7QWKpQawDUfrX8iGAC1w1WC8QzrQdat8WkivkFEoL",
  "key19": "4kYiz6TauEJR51ojVQhb9oZ8cf1LcET5UW1oAUw2ndW2nVBaWhmpzpeHgjWDz7SoRW2xXPoQ1fi2KfBWbSvyitFE",
  "key20": "5cLWY28kfJyNxHx74Vj5U9QvFQhjvJwhL6JT6DnnLAMMSZLM9ZZFVW8qmiyxL7wkHTQ5n6a4adxRRxhEjKr8RXPB",
  "key21": "U6wKNGG7gXxmeeunVadxZZikb5DbFjYujs2wxUfwgZBqf3ozqTNw2mfARKwVELx3wxvGreHXcVkvN9ZL16QisoN",
  "key22": "552SrANoRuLqoRcny5dWWKmX8zE7ivfoiHyFozNnvNHeWoh89vJ92DqLdaL9ttBCj4rgGUswSDtb3wknBErLw2Lc",
  "key23": "h6CjFw3QELmrNoippyaFQQakwMdQ1YaHArWjmGEvENpAERqw9k64hByPCq7C2yphwgGRgGNgpadqJwyeTCxWH9g",
  "key24": "31twkbVVafBE3q7iviZrBj5JRRW2YCJqdDuZpaXUA8bHNhzLd5Lc8uQ7XVHfCoi98EqU5atDfS2HoG6XAqqQCm9q",
  "key25": "5YNUTrL64QnaJog4xToh5oEK6ac4efG6UAait3nQtsKpaBTFBrk7g6tWYJjAbn4QY6CDgnVJpRY6cpha3EDgxAv4",
  "key26": "4HCFhH6Rf96xn1Utkx912TEPBMZHbbyTfpzPYFAGvK9DdpHBmFYrxpqkF3h7bRyJs1nSz8uFEAhhVGV6vSRhgeV1",
  "key27": "25z8LikguUy2fYKZdiLKwhQ23RThhg2zLD5L1xQU1mJsX7K2zD8KzrKRdSfcTbKaFkVKnqXno6wTFEsLUMVTaedh",
  "key28": "2UZs1PAYdwFZNrgda6p3BKe9GXqa4N3AX1ZNChcxYTkErXS8UjJp6rVWoXr72AhEkTQ26YL56QqrNwzvKGHY5CFS",
  "key29": "9Vf7NeQTqZaVwTk9nCwro6tX6k3s4sDz5zzQxF9FujtcjjnkvJv2B2qFYTjwnrcEKg5eR6521MRru2KMMS7Rn92",
  "key30": "4ToBEQNQH83bwvpcKnd3JvWnWwz855QyFFfVuqSLkNUTz6FZ111RkhxwFpmWCfpTzMdvAVJu4Z4nZMLixwVjy4jy",
  "key31": "31B478sEy9RrDJ3uhF8sVu7yxEpWYXE2ukahyVicgA5orv99E8xMAruDGCY5pmZkJ7aakQNVDbHq4qpgVUyqyfKt",
  "key32": "5yXCZdCd2dqSZVnTeG6G1ZzZ8w8rtLimbjydU1qHbQxvsVGjW9RM3LCs77A1YSL4yoeaYiHoDmSezYE65PaBmVZp",
  "key33": "2aitkC3hHM5aCdP2Tn1TfukDDRkFwK7SDPMRbfiVcN9S1UBSpBcCkYpJRjR42eCwatkCPJZrbMFVYtbxo3oVWLDw",
  "key34": "5bqPMbYKACzPRpefy4uoS2HLEiF81yftZ2GoajYcLLiZYtgRSgBRpYwXbUPe7eWbiEPDHZLjwifQ57Q4yv3eV9kD"
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
