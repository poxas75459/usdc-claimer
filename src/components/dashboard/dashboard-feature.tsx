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
    "2Zs1eZtZUhHgpkTuQN7A8FnNfBbspU7cMKCfEKCo8oqEvPwg6XiCkmkCeUwFMCMtukYBfFc9zWXuYqprsrReffBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkiek5TJC8UWGhvktn13hAtcvrzPno91Ff5exN7YfBN8iMyGqb5t6hSxHspvEjuNNN8cWNBc7JiW6Fr51XhpGVY",
  "key1": "41nF5wPXrkfgCnDnAkaYuQdpgNVtRZStHCQFyTmCAhcs8wNkAZwYfNyd7ppeQFCUBMJwoDEZv4Uhg9UhK6fPDBX9",
  "key2": "5h6d8C9Dn1rQcSQUywZ94dLtRmvopySDvZDMXhNqWZkkwUGNivBsxAszWLXtd43p9ZU8tNrybzVZ1BCjUyo4feri",
  "key3": "4sbk2ttQXuFafeNRZBmjEAGEyXNY8UgXGJdDcgQ3eMTw9vQQm7xEvAjvWCU4of9nPZVSKQUvmR8xV467Pfxo8zDY",
  "key4": "2ciYqqpJ2ZfnRkckbTAf3KJovfGenhBp5VeeXUR6TaNcroY61Vo57dUuKXiHzsZpgWY8g4DsV3vsKv1uYY5953Z7",
  "key5": "uFvWwZLWAjNnmku85UhePffVh3iYJkhMgh6w3go5jo7Hjya7xZdguybXd7SeLuSHpDbQAsqXjRHhbVdAvyvntef",
  "key6": "2xkyBZuX8itEMX3m3X51owLMFiFk22uPy83DTx3eH5kiLmk1TdcWV7TbPWNyHYkqyM1tAkLUrQA8EB6HY2rzbTaG",
  "key7": "PJsujyzh4gxMUdozkXD6kXhkoEm7V1h8PDQZsFzyyfuuAx4ALYui2xCj4Lkjz46Cd3aLrZmvapPt6CjK6qrWXtM",
  "key8": "ud6xV8jNwdkpqab68wHdcdckVvYUWkhoJ2UTxvh9ix9RL1qFaFKpAPj5V373qByxcXthQgNprYkGYhYhX9vGFzv",
  "key9": "3ACVbtHB4Mkzf3mM4VjqFftowbcRcawwArXpB6T1ve45bmETfoxV7G9esh3d6skruiSkccTe1xtwCDUQwZSwjEhF",
  "key10": "53KmemMXgvR5d7zys169zfSE8M8NQPSLgFoY7PvqRzXdZSapBC6QdHBoyzRXWWHVwxh1jS4dyqJSGLVwwmd41TSq",
  "key11": "3etMbfrXwDaa1PR9V8k9ew4kN64DWUCPB2v9WeGeGv4NTxm9XMViJGYuiwJWMLkurCfhpNhGCAtQF9EuLUFfd1sd",
  "key12": "47fTrRfPC7bwwsTiDm5WerWW52uVJM5nAfAirsC4coVUxv5cYXjgNvvohCqohS7jKgpjjsM8K45ZhjVSzpy8AZ7D",
  "key13": "38wuiHWsAm1Lx2p172AUj9YHV7iKCm6DEWRsDDku9MBv3eKeacRxdzEoGRUfdryW3Bm1DrEimmjgbu8trPZMUf8j",
  "key14": "9FNPfDxqfbRRmzgoRxqY4M1okdyq5vcVNmW8wzbCJesDmGrukSrZLRo7yvrPa8VTvSJ8rtT2DmGPa7NMQrZLar3",
  "key15": "4z54drFQfuKg5FhkGGZ8kWGCkprEfUsnrFtsEuJvYp6mmtnY1Ji4bDYLwhjjWmPmFJuApG52hDCNcDCWRQAUv2oK",
  "key16": "5nmcyCTa6hWbqttLTH1Q49APn5zSuGZmYVaGSmnAEgZdoJkiSQaCtEVyrPd2zy2X3EmdGExUDNZddXKFY9bhuUMj",
  "key17": "57wz7V7EC26YLpoeX1K3FS8L9CLFd94KLcdyiKB4UT5NCzrwJhaymLfqxfT7S32Lmy9GoPehrQVKQyvqqa2kSpxQ",
  "key18": "uGJkJEaXEV67ke2qwpV7hnRMh8hke6tdxmVcLs8uDvJ3ruodk7g2wVPYwLEBx7Rv4zF5CR5NFYpRSay8LpE1FRt",
  "key19": "5jGFtKKyYR8XCF4h2Y1MmteB7iybXEqzC8NgGU36mDvs5G2nc1YobUnE6zh5y1zzup5ak39UZRDEsJynsZaz2Tjf",
  "key20": "5R37ytPwTQyELpewg3XgGQcMJ6FvPjconSsnQUPZsc4nRDv4xMvS4P7M4Gc5KpS7VySrz9rsyXYQ11haH5EKv3G8",
  "key21": "4Jex4UF61WBVB19YMC5iSBHwigLxJjEMG7KkByfd9TxrffCt8oCrjnsRFgizBXim5kDdW2STCST6MWLCnShNVBDs",
  "key22": "3sByK6ehUcTuRepgzXdFhorU9U3JBLp6eUKHmkLbbnoKXqAyGBXNo81cJ6QoCndwu6NQq4NgHMjvfmkPkoKJfskp",
  "key23": "3VjrE8bEUpVVCeTFeMhYeTTXcj7RZx7wMQjbPwjR9dV2JnHYC7NgzpYXR8Em5k1Cr7ryZpRyXBAWPhKjYsSDLPNm",
  "key24": "5NHhphwtDLmQH3VyZVtGpjp5ZRFt18J7Bx7T8p5jds1mE1GPgLaw6gLrdpzSSxiQNFiwZ7PUZj84zxvLTh64WjSA",
  "key25": "5ZFy696iNaSr2Dwtn9FPjNRTUUcCvFiDibPToj53DrryGdtEvF1Zg88K3z1HT5AobsSKmntoe3zXRb7HzGV3oHpD",
  "key26": "Xo1nTT8749n9wCaabzwpr5u7fJLZVFXN3eyKSxi4mCZuRjVX8o6dCySouWZbuqtVh8izkqCzU2TWqN7X5Schr44",
  "key27": "iqbhVwk7sugD7KJaMGD4rAG6ANRsTuS9jqpWSBRCU3kCydmUgoPSnaD1y6BNe8dHcFoMyeUJSkv4NDVn5kHnpAa",
  "key28": "42bif84VgKvhCM2vWmxeKNkgYt88rdVLzRjyQQgtFkXLoyF7m59bNTf9f8PoKAkHheH7358K3p8qZmBYbubZ9hFi",
  "key29": "5DdHtLAZ6ykKiq9kYc8iUcw2CHVjiuThXKeRzD6g7uMYffHdkGsJcTiumNUok7MVzK7GX217FQgvPsxB3tqZ8Mbq",
  "key30": "SbatGQHxQP7Y3CfzgBzCuqsL7ifNRi2X9DoMmubQuKmfsdck2n1VkWQMp6adLZvH8iZ3J65994wCGTeip2eH6VV",
  "key31": "4fswAhxQbhWdBbuMVWWiEZX29yYHjWcLdTXMzXT4u1CE4t9nhasZVZte6w8pDYRESu2mttjohjtftN3vP3wMuPEE",
  "key32": "28K6qteAocVmn8c9tEPgynJ85TnVUqu5247ChayXZjP3LhK42bYvmenYuLmDAAyWQEtcY4cEM9LJMk8woRfzcxpT",
  "key33": "2DpQLGfXeMopD2SYo22i85J2RnvfUvDAWbTQkw4WZ15JrPHb5C6GuxQeZXymnW2snJHUY4hhsy1F8XVAomJTHAG3",
  "key34": "3xuSe2bRYJnicHs9LBtMcmSYPeAQzZ7qQt7Euh6ioms4HFkD31UARHQvY8jm2WZuEEEMebeP9si9z4FVHNQrGqDK",
  "key35": "8H3VSAMCb2iMS4BFpTyJ6nKxggZQik2wKScEKe2jPXdZ3HHQVXjYcDKxzxQ7yTuGAPBPwLapLd28A1TTuSBWCnp",
  "key36": "4jAYm59zKeAMnW9nFUxaYrXR6wH5tAsxncTqE611tUAqJuojN6qRR45uPcUyigmV7znc1QoLtELtoxBVj4eidyZW",
  "key37": "2Gp8uBrAxGSJkBN9kBUaVRtzpLrpTUHzhha712wNnmL9iaGQEnNBC6bFLZNeKjmFCmep5gwfWkMzYVa4TL3aAGBC",
  "key38": "43mKMah2XmDTyb4M1AYP4xuxRgcMcq9HZmtBunuwQNn4HqR7VEYq139LUNNiKwodEEkiyfJwVu2ngcxakW5Qddjc",
  "key39": "496anQdYohp5sAaXvcb1GsaopqaJzbDFzs7nMGc6oiLCTvvmQaAoKLQCzRJ49oy2op2RPCR6mKjKY9PLE3zwaxDE",
  "key40": "mFzAgtTHXJ329QebewDCh1DH3B7bRxHrhRVwZfChENmsNUy4TisN1HfbbrvXpi6JNXKuzQeAo1ubMZr91HvYd6D"
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
