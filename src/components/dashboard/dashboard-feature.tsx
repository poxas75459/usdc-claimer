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
    "4xDxNQvhBF9SCkeZ9wWqX56xFP4Q7gaoEg1PTqDaUitHVog1W6wU9k3GLQ7nfAvkATdKDCtHuTLxF9XQAB5aGxKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWF42SGC9vEwiWweSiQ4eTBckp4nNWkxmxWbZWMuzcQZHbuJGceBAyhiZv44Hc9Mj8nhDTDKsodCYdKFPi8vjoi",
  "key1": "Pah15yvtVDY1fSWXzMoMoNDXGEWDRci3rc43xDGoPzXRx4o2bvigGhEwd7SqeC8Xvq3bWFuqsHYS45J5XpWDx3k",
  "key2": "uNxmB8uBJLtmbhnXuVq7WxZVUBM4PCshbJUAsz2Zj3v2VPrLHdpLWVFkjQU71x6f5W6rawzfRjwiAKdBPkZPqqR",
  "key3": "5U9p5TckKLfJkRc5RbYDCwuq1aEaZ3pL5GjvhhpiQgVkgSQGg6we2HaoXukyPj8xVLHsNX6H4at4AgTiGTZiRnFZ",
  "key4": "5Dh8Xi3gTdsRw5rBKTcRhYKVb1YjDTZJQQM6qaCG3yAiyLa1pPuBKXztciHtvzJpP25FR6yWG8uZjptRMa33HwtG",
  "key5": "3SmT3SGX7TZia6e7BXZ19VgvJhtYkDCRPJRbkqeSqk2X971UhFTxEbcf7wCWwfXbwrCCwCQUSibmeivVRL756MUF",
  "key6": "3SJ1xWoepvUAvmfa3Wb3Zo7bEUnyJgChzGZLNCvhNgLcSvBf8zNwPwCCHCsxZfwW692a9ed1bGK8mYFqo626dew8",
  "key7": "5MwAfEGQR8qUW6vKdpwqkxtfqzpSiJStwjNHsBJ2wD2tFGCjxa73YZv4tfRpK2yWW8cByn8vEyEiUEQxgefahyiM",
  "key8": "5PJgz53keNKqhaJy6u5nK4u44TFKs67DcyatkdAztJsPtBEdyhZHxkXkhMypo9koUshGtdYeq9qBS157ck9XhWp5",
  "key9": "3CoibWn66feMxkRUTiGb8H1evxDNkCkiNnm1TVHcTEMf8DQdnbCi85DuT35o42eddbuuiFMvFoZwLzCWyifrJL4y",
  "key10": "3Fn6jN9FQKGStVGLVsA4XZvfLTg3hWY1ij4cfSTM7sRthsA4jpJzvFuhehamSEGTcYhpzBCKTzaBmk8yEnH7Nw4j",
  "key11": "5XkEnY2sjRwNY4kqNSpLKWXQgjduap9F1i3wrYNerPQKDCg4gkFue6EuikgvYFW7cuRg9u1Aby1MM7ydG2MnYwif",
  "key12": "4LLFRQbthwnwSUCUGTf4dtFaz3eXJK2kgZdbKb2xQskKMwaWB1qPuwtoB8NSiGnpo3z7Y2vxNG4pBXxWc47Q8mAQ",
  "key13": "3RJkx5Yz2u9XspPcrXCnppM3Zjs5dYtSteQNz76d9U5fKWBvbPPgYK5cirtHprAd3wHRUtQzHCk5BwuGNpapEnMC",
  "key14": "2q1fkrwpFQfoGeNn6Rt9hbrZrXN3wrhNG1PFZKQGoH4kYZQzJFbx9Pr5fJRxANbeMfFkT237LszjsmzWDz6ZmhD",
  "key15": "2vofnsoD39u3KEfHdYvP6Zd2Jc89WACaCtRiehQSWk7pgrzs1924MM7LoqWzbJYyTL6qyMCxipRrF2Csn8oXUm8W",
  "key16": "5XNycH7K33ujEeJoQ7yYrthWbYwuWf7GvBLYpqtoSawcmkikp8GgzVdWoDoy65taZVVBZDDp5b3qn3QktmVyWegS",
  "key17": "5r8CBYxKc9AsK5TVqdU2ER9goikkaiZfRNTteqstrcJ9EhCYHChypERFxDegYhneHASC4C2TYMQ5GBDKCLfSK95n",
  "key18": "3oWkMzmfrKw1aCxHntfJCxkQ5c1QUnn8gbNWKJt68PerYNQVpreDXLidzvHP4RhzqToE9VzMHo1X2xpBBt4Dwtha",
  "key19": "345i9g3xvcNC8HJCRTe3KHrBArzEpaXxNSga89GbbihdBfbthrcyp9KiKcoc11DXDbMDPe3S1TTQQhGzFuhqB8pE",
  "key20": "N1BqfDfg22yZpqKQHpiySPXhHNda2Z4Tym4sUWHgob3BMC8dhnoNL1afReW89WaqRYuzhKYjpiujaV8qvBa5qJx",
  "key21": "5MrSeD3rWa97tRqghCu638wdeZwT1HrH59bTZuheNSkrAjqH8qtce3Hkx5JP8kDjfdMtcnF3h8oiDFWDXeet2JVK",
  "key22": "3n3stDVzYzVR1Q9zhYwGUYHsK6GKiaKs2rjGUnBoRAevoZZsnUcyEWqF1BuyC63PQP8TGd8eud89CAXo612W6i9U",
  "key23": "3UVFGt8mdRU7oRzn5nCDNjV7JnHi34ArBcuoeD6M4abYHdNtgdbvRBLX167YbDNy9Ske1owurehdNGRB8wFzWMzH",
  "key24": "2VWtEcQEKYWCBqqwgNYaH5iyQfUrffhaUFmsZFDyvRtkFwqxwJShkPikquvu5B8o7CZniaXk6uUuYxcD1ir3Vyfd",
  "key25": "9jh7m2fRzoqa8tw9VEaZBJmCaXgrJmJY6KjLafp4YHEoW2MMBEWJVujG2VUZqgVgHhsDLrXBz6tVYvsA3wLTCV3",
  "key26": "3ZwkNHDcoP3QS4c8PtCo9DTriSHQFKwhKKHQU4L7n9mxSo9ALEuK3jnDfBN2fkAXFMJxdJgqzZZtu6eRaBifQPF3",
  "key27": "43PrCLcRsW5Dza37nbZ1NhzZVAhnVihc5HLFR2qU7X4TBrQq75RKHRr66hbCxnpqA8dvntC1hgTQEsGdZuSPpMmS",
  "key28": "HcQdmL2FYjDi14RhrHTqKg1qJBfhLbtLTdPNVUz7cCXQ4PhPdRUiDvHZW21QUwCBo4bPE7kwuLGKTczinqcMrYB",
  "key29": "2nb2b5MX3vxWevz6tMxAqxj6aEGtRe1LzNdYoUvE7cX7VniSqBeXUTDNgZZU8kCrhWKBkEFs1WgWBKFYL2utr5VM",
  "key30": "44ycrSuYyEYAE9e4RojoFUAT5VanUonSSYAeH4z9hNvzw7Hi3LncosR6BAyJaMEvzgz4x9J9z1WNhKerN19La6H1",
  "key31": "54YYaAyYc7BTwhfbnyzJZu6t25HYmrWkwbQXWatEynj216tjyAG5scuVLhfV79X4GeYFuuc8xZyHkHLLpBJ4nGEQ",
  "key32": "aLz3vV7WE1aKagoabEC113gxMkV4MZZ9waHLYGEHjsxqF1FrLhQxtMcujM6qU9RfSDcc9MsicGqPxYrtgvrEYLC",
  "key33": "4yP14c8cqQazx2RqRAJG3UTALHT7r8VyuHtdtniWgrjEFSBuuj5UbG1YVnb4RwMq7tXH2EBhUtcpTEKwSbkyvvrA",
  "key34": "5YRjyeF43LWgzRZo93j4eWEMxbchMVx4NXXsW5g7dywYn5CCtX8BXZhQHMGFaFiBWcYUuFZnsdiXYnL16cUDX6DP",
  "key35": "2oNjKQCFQoMdoGFP7cLxd3awwCGHRivZF998mf3cDWrcNM8Lfx5TwoGW2pQtDfYXvRUgupCyxVjepNVZE6shczeJ",
  "key36": "66saJSwXTQVmTowax4a76UguF8Zj9REYsBx3nKneLkvD71nahhPuyb36tJGPks3G5H22GBKKzDToGgryKrtQ2DAS"
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
