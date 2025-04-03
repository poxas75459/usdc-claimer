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
    "4Ms9KoWYAXvFC7hZS2ZarxR3MyR8Y2TD2LqPwi4qiFEiDFjwQidZjhmkaWJ8u3GmBi79Xodn8sWz4eJTU2FnEyF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tFJNAyBXjxP1d2e7rt3c34WL1agGF6v9teNYfGfrTcWBe2YqiZmR8vWL6C2XK6uz94VUJMSv94CcL64tcaYp4z",
  "key1": "5ZbafN5BeDSKhdYyErqwJrrYvG8WEvyNaejgamp495m53YtnYPhCTz1bqHDasg4rHwNy4PfPxihdH5dRkM8Yvb8N",
  "key2": "3VSdR3ByYT6VPrx7wK8vVFuPC92hYtNFSUatFjUnPHAz9RyQtBUgUxr4kXLhrfrHJmjgQC66kAAJvegK5ySAV3gA",
  "key3": "5LweG6kabYt7CPWoQAHVzVp3ABqeYsJqbXYgM2k2JozPFCezNUefcLq3cWyBbvNmFVmmVew5yhdTN6KWrZUGh3iJ",
  "key4": "2hAgqDHXn9sPZWUMtKjoiq2x6kGMxJ3f9r3weLbZ16HjfnMew3QTjvKzM8hCgV7XBrL5QSBLJsaULZxaJxnN7G7i",
  "key5": "4p7ZePzmmM7CocQUwY3EXr59UEZ76CCb8xWxbQaji6JdpzYWtUHgC75CjDvAFc5XM4py7urWSeLvWK4UvNKqSES6",
  "key6": "3ULXWKNoRGbs3KiqqDyMRhWrci49CbTw5PwM4Kc3bWDiHt3URNgpaQmtQYy2zL56a1xvyirhTdtNzcPdyUVkJCgD",
  "key7": "5BNqMJ1ARx7g3Qt7vxr2cFZvGB4c8qMSkqJHYEhaBQpnayWCCyRN4UwAeCs8pb8WWbRBJFyCKkU7JJkuaBnAWaVh",
  "key8": "3VGe6wLAz93gc6FEyf8dDqWzMcnTTpk9kHAoPmeBoCuGqoFYkDCviBrSbD1cC1PhwEj5Nu2jPgRtbvL4Doeuntp",
  "key9": "N4L1E69EuTYteV3cBEFPfde76JEPfv61ecJrpsCrU9xMEMKWJZfGCLiprgfNk3yY3xucomnHiJ88Jz65iWGEpUK",
  "key10": "5au7jdtniuBUQPtxRsXF1p4NcCBtu2SR6pdEiN5AVnkHc3Qbb9Lbj3YqE3FV3oJxwfg9dGtf1RW3zjYPGjUGw9sS",
  "key11": "WY1g3y1X3z8FnEUocBjnHV1x18dyJXmdhAuLh7tx3QiabhL9mYJWvz1RRS7eUbgTRcUq2Wtbf3G76aqxSmeRcMA",
  "key12": "2JaeoRRTnCxYRtVABdC5W1jCRNwHZAxgZPuMQQWishCcUqxnUGKsnjgTqwBqxTtzkTknYaweRr6wXzJQMKf3K4gt",
  "key13": "2uGFMXwMyskqTFwyE6GGXUS5Ggy2RUqMRj2whTf6jfKVcLsprWi9b4jnpMiB5diQG2WQSPE5XZu1ptAUioqP7VZ5",
  "key14": "5RHKVSFXLJdLyyQos4mVN5eEr97cTRKw6pJoqRjwhApUieGPHCuERhopGEswjKUk5G2MH5gzgQi3ECGsKGgbhVYU",
  "key15": "28zccyGFDkxkh8wc4iHLkUt7GZNT1qHWs5FHUBcJzC9SoKzfGq3fqns8sfgskLorQkEoH5UDyZQM5XSN97tpCuY5",
  "key16": "4bcmeJJkcA5pTYmUbZeeZDk5uK5cR5JfKQDdkwcZanDJ7tgkobubzMh7vCr6d625XT5CKLAzWASq3EEQ5U7afag6",
  "key17": "4suGnKBWUEwbNYmtwbCmqYkauzJ371jzzawf9JG31Lw1ugG7b8TAw2MMupufiWVNcTYfswF7G2GguQ2V9bJgZjmk",
  "key18": "2cww2uDzBxFGveCmzVrxqXVnW9dsmQh9obSybVMDNDKQDiVtDKNkciccqf3m4mtJuUWjLBkKpkc5YNZsTHNEnGyP",
  "key19": "539tEYcpMQUqYgtsJPfXBT9g7hrqrj37rZGkAnupNbW4h2fnv7ufFtZzvN7EQH7emY2uZmiG4po5sVwxT8qAghXQ",
  "key20": "au229A3A22YXk2YYqtut2KhNUTiPzJeEQaWEooAZGdqhNg2hLduVcBtaT4U46YEC1SLvFhR3AazpQ5Ggqu2qR2i",
  "key21": "5wui8o3uQmw2KCEQ617AGBPoKctBKT6m4e6grq46FPBApYKuyJCnMwsJxdHnrQ5rZoGefHvwePJNmqWV4WBr8F2k",
  "key22": "56CMa7waDeUxrdZPbQzbZxzB184BD1yZfNuGuaPty3ye3grWNHdCuVjdiT6hq9guTUDEeTBcVirXK7zgevs2x69s",
  "key23": "24kbimZT3QUeNUWWyu2e55aJXDhth65Gec5Goekov6Dy8aBFb51b9pphePttDUHQ4PhRHHUZ3URG3v8feAorJjK4",
  "key24": "5Hv23YrxRpKxacm8Bk9eR5C7fgATgk6ykWcxhoVzCGKo8bT4DHBMr78xLjQpfUQpEtYG8KqHPCZn7rAgxeWt5uYQ",
  "key25": "5HqY9LhVQxGBGm1rfPMp5bbqNDgm7PKhPuK6D5BZQe6gxp59AixovkZ4cWZDNGdaeT4Ycyqgi46z5VoDyJY294Qm",
  "key26": "5uiaWVVJuTzJN4wbaN5kbXFqHD2q4GF67gNkQU2R79htSDfYGs1DeSCgHdy6BE2KEE1AzoX93YVZGwq286WV23FH",
  "key27": "usvN8YECWPkHFqMeeUWnZ1y6gDh8E2CFbwpk3QnYrVAAyugjzQHpQYnhxraDYDecJr5witwJv9iUUuvMfmLmzvc",
  "key28": "5Fot5FkKDzcddmp85oAN5x5SLrKnDusH4ddLwHRhDHxuG6eQyk6QUZdTAdxHFruS1LKFBiMv9tNt2eD71GY88uqs",
  "key29": "3NSv2x5A3G8yPKb58Fdx2CrghCbuEbSdK1tSaKD63AtFz4kvE4TrEHf5CAsBbAK7J9wffysJXczHCENCbDBnSSbe",
  "key30": "61RkKJosTjqszeUML1Q8jogSg7TxLTN3Vii3a1jYtNpkmU6rRW9kAi7JiY8F2bYUzG9tVJKv2cDT7Lgjsee9CtYm",
  "key31": "2nEhccPWdCUtagWJSEMVZct7tNPCm1BGD1qqUNz55Bbv5jopFHnixVEB322c8RBBEFbC8FSnM3AU72bkCTvTN3Vi",
  "key32": "2qmVbcGyrPTV2dV1t3vC4C4VhJARRDKaEYx6MT9ncoxn5SeP8Zw9hWotbTZm4wvnPJVP5aX4xgbsg8SZr6ciUxF8",
  "key33": "4hyEuaPB9xUVdkU6cWMZtd1eEEVr84pp8KX7qoyPFDtJd1LdkRHSKXr2zKPDVqydcduoD1g9XjByZkmUcU6iBdt7",
  "key34": "5RaHKAXm5fb3wPio6qBX116woj1prHDmnjPnL49KJzJUTYVUzqKGFWJoUqL9fiYj6YsF87WZ6LJskmetmL28XB79",
  "key35": "f26aDNPfhmiKTiJQ8RD3pJ85CJL1rRSqjjxKkPA8rx7wF9ES36f7jk6HUCPuWGZB7VL9uawHuiwJNH4LHLWGJjw",
  "key36": "3Tk8PdpLCfTJFoctCrQkjHKv8CTd74rE5TRow2DjTMHRfnBf5jKYirtXNGhd39UYVMW2BpHfVTCNG4u65oRWqHCF",
  "key37": "3ykRozh51zZL7FZUwWix3vYPMf3Ubt7p4JwzJYvjnVUazeoei9dSPhMzK5emVeaZoHczjtWN7zfxcrzuWfvjn2Ao",
  "key38": "62zrrrxAsgLnSqzfeaisV39Jq2sQbeLWbY5FKuEbhvndhTyxyvfvnz57KQfncfcWcyxjfo7eHfeuczbVijpAZ8AJ",
  "key39": "moWkwH14xhABsyHpFYKRFboSkKRzBtMi1d8HWaj6FWidTaP1LWNTcdiemLrzFyQUiMQbBoS5SBwDf9wBYrB6iPY",
  "key40": "7z1NjUQHKJ1J63UVQhF65QTmRx5nsYu2s717ocoNsJekmcL4PwEuj8NuNkZwEWtUzVxJmkUps2bQN6Kkbxkhvyk",
  "key41": "4avofc3E5VAtE3TcvoXeqFPJT6u6Ut3kA9cig7Jf3gBgRzBu7D2iVzmBakqeXgXv8E7nExyUN5hrkZrymbLhc3iS",
  "key42": "2jTi8Vk7SpCBDjGf8RB4duxqnenjRVnkHu9SLrfbi1ZTpg3MzJQxfciJwda2QwzEWE8AzWZuwBFugNkdCN8uRe9M",
  "key43": "3EmWJuyw7GXbAor1VebBfmdBhNbXEZWQ6dCfMJnEwfXV6JQ8wWgRnJuREgwkwob8eA7SvCnKze27zWDayrNLEbap",
  "key44": "2xCUPhyK6yQjdsZEQekuAzH2s6prTtEoMxE6BmeWAhTFYHzs31EbnvvCuvLcPTLGHVcC19sUfV5AX7HzLWcuDxr7",
  "key45": "4fg5fnrbTWiyR2cgvUJUcWqEJemzjeX1yJ9zfam8CQR8tuvzZ39vt8e3riAJLz47brmhfJNns3P6EXmrcve4K2yj",
  "key46": "5gC2eGFqXseQLwhiSJ28ZRK97C27eVn2JP2CMV9qdTnheFpwS4GY8rctrp6AoT2Uh5ECgKTE8JbYzz6ZtZgwsKXq",
  "key47": "5v5WUcxyNW2jSvxqdwmW2kZfPK9bgtziM39QcuSNPKjxtyy2KVF33X1PrL1kCCpNMGL42BvARAerFYCUTPeDZzZ9"
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
