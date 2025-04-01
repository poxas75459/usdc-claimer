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
    "4HKFekfEUcpn1RdB5VMVSMKCZZ7nUsgMb9xMptRzhfWp94Pq7b1NbTaFNZQAi8v5PNcx7DfCCRkahwxRKA5AncqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZEcpq3XKxLRGnyZDgqcPd9g1WdxG6ZRd2sizV77cup88i7o665NFzX9TWYWUCcxy9VTv5iZUq63KM8Nk3nSE2j",
  "key1": "3P6tvVzznRXq1ZVbJSbrQbYWiyumfA4jnYTkXLNVzTXD2tpM4s1SKKqsuxizQjHeYGtqTD1BHhABaQPJWRgqoiMQ",
  "key2": "aoBDhZUnLoTJYZwatFFZmGdc42SvAutbBdBBQYPFibcVqUtfSytsbwBS3gXMckEQJUXn4Rmt7XRYH6zvn1sUNhJ",
  "key3": "5fuhyQyGj1JZDzuGTFTBKv35EP6vBkV14YqMzt1okFhnwz4LSYg88EdiHVZxK4vPiy5LNu1g2MoK22pPqfSMh16w",
  "key4": "4DYCwD9BQJbRns3cdQCToXRqrQUqwYU2y1fqJ9U39MTnUFZYXAg3iUaaWr4o7gEkQ4eChbdKcEhgACGGo93HPZhX",
  "key5": "42dFzFKzMuCzGWWqSeueUgR1KmxDit4t7bpxyvr24Fb1ECeELBXSCGmKvSKFJwn2c11EDW9JMBQ2r7AMPFyZgnmg",
  "key6": "3GzMfoAPSr7Z8XTVuiycNA9Dv9bviuAJmm41ZpqvbqxL7f6ukeupzb5ifpPNREVYxckehjpeDxsS431Uwe5ZKjwn",
  "key7": "3SNhr1UZb1YCCs7SGZVrioy5tQb9PdDkWMsc5jNuUtdu4TgX8E9LEdN1J1nQnGSygooudyEvmgrfcV4AJqwAE2Ff",
  "key8": "3L2W66P82xkmVh1QQQ4Ai9sgf9R7wz5pAGcPiVGNYsbpZYoJQnWp4YC1WLP4gxUtapGSf84JYkcmsVfNRz8AfYGk",
  "key9": "3GLHt6LdKjnmR9sbG4seBkX2NTfGxQxZv3zMxm1cXHtnHGuH1oDbeRxUTxwfUx2vHzYV3MTwwhJrdSxoYtr5TY1y",
  "key10": "3uRSk611pncVMBT4XkrZdaVURp39rRGeyy8Fpeqv9UGfDCPs6v2bA9RRhAvg7qCoCotLr8KZmRENHBTsuHeSd8Ja",
  "key11": "3kbui2MBTF3Nsd16EPi8fASUitpdWEa8w7mEjDRMUQ5XyaJA39efDeHPPEE6dSyFj3zamFrkwmR3fTwixqatHwGZ",
  "key12": "2imd417kqQaqABkx5MZzrWhssVtQ9FWYzUsJjdfJu5PJaxGXiNnDi7KbFkuyBAhtxBJyMR2NAuwAs6HGSzMkfk9a",
  "key13": "45zGRDXafNR5wYEjfbqBY5YSzAP4gSjVFYL3TeJGcvM6iMcbfnP7kE1CxwphSjPQj5JShqLXggobiBLw9p3cCbQs",
  "key14": "F35x2B6gZjBQqiX4Njmm1m7TGTbcMLMMNJoow4F5XnY3jyhbouc1cZcs2DWT7nUYxVLUk8t5hRucY2Qo62Uu5Pd",
  "key15": "21nPhgnUok9VH6CWHzfsdWsKA4ctbGQubWnMWPYv6qHUWnzjjiTikS6onZMYzdKj8dmPRJV47ZPEawHYhgdzzcyJ",
  "key16": "2z5ktkmFuFqFadRWAaBA6KytRPaEmwApp6gFNhVCmTt8NjX8UtMJf4Vz1N4Fczd8bB3n1ZdjmVJTRTYPevB2322h",
  "key17": "4ZmYumQhE6yG7P6J4H8QiriCTnQVq51Fjo8BpYgZS1nob1k8DUmAmjHXWzuVBmFBkAayjbT1DMsJzJaoN7sPJjGz",
  "key18": "St8BFPHYPmkdMYRGZqo4H4RKm9YQ3SE56knmx8NHq2UsSbojKZt4mM9CcRQH7VgBq2T8NARvqk9cwMcYUxmW572",
  "key19": "3ctQoaT7t4VpJm9dX4MihyMWGHxjjwZjcqQnYunh7vT4Cpc2QfnH4DMY8EqPi8c8Vv1h7rytoVUxatGgnD46TQPA",
  "key20": "4EeFvpS3iCUFi4EjzhjacB5z8BxHCNY3h8T5Fd8XkcafbfWRBXqCke9mvinEM4DqYxocydem2SDVVdUcDRyoPzy5",
  "key21": "5iABPf3zroAhyrh83KnqiMmfSQAN9GRwfDCMjWUAmTm91kWBcm6S6PcB7QhybcKBy52aDxDDutWJ1ZJ2BfnpE3oA",
  "key22": "JfdAnLSP59mj9n4JLkjp3hzpmgfaRPRNFSia1QerrXp6pSjMTvvvAdVfMq5xCw5vVQKaije98xPXPyiqwoDACg5",
  "key23": "23BR2LQg8ZH7XzWvFrrVMYZUeJPopzE1cP7oK3fT9vc7vfFczDQnQkNie9j1BTBQiYEjpeZTBdH37So2y3DJTX5G",
  "key24": "JP9HBaTkbkq8LSXLY7PoDBbsjPYqkTtrvh4RkzVmtcqhHdXTyg5kx434RCkrrenfijN8KXD9e6AvopKbshrUc3L",
  "key25": "2PnA2KSXQnwAFBc7V1V5NfndzXNdqoR2ajoNQbM74syGHAcRa1UFS82dzBAK7BLthxoCcT8aHMsegq2zpQSi4v2U",
  "key26": "3vyNKwZL2wUnt8wBoGrs94swQ7WwBfLigD6UQ7zfmSBKenUHEePmbD59JhMgyo3yuSMZyr7XruxK1uKZtS1jopYk",
  "key27": "uBzQ7vrt7mPhfBR6VebUomx1W3cNK1tidxFt4M4CgL42mDMHXV1x6n4wRMeEHBDSpGX1FcmFhE5S25sTBsBbdSz",
  "key28": "5XHHMAwC7zKxGsbFTUvMpqS8QWDg1LvZyGtqeX6pF4eQdUtEodGVJh5CNPB6GbWkr3wbiLFjngSs8zE3iEALRM8r",
  "key29": "3Fmtb6gBpNbZexSfBqUsJAeY7h1vkNj3sk8MHrVqNjRrf4Cm4cLYvzinWQCTXrwL3uxcmfhYBX5FRedtVsBSuknm",
  "key30": "5F3e1AdfPBRKQpBz2xSqtgHrVWMArn8r8VzXKNGz71QdyFKfBgwaFMG1iWKXu9P1hb8vVc9ErfGXYrkjb7eYEdhk",
  "key31": "3qaTqph4zrnjvX4BCNBeiLUnR6G5GkwkN3wHR6MVx66xqJ8JLcX6JzsHb7ADo2NnwYbxjWWxgB572gYJCtvT96Vk",
  "key32": "3xyvp5gWSGhPURbcktfK47oB9pB1SiL5F5HDEK5yKQ2URBD1q14tmV2EFjuGu3mq6A9guj79yETp3QA8yChMKAKM",
  "key33": "4WYDpXHprdaiSEPcyr7SiEvQBW3RC7P2gVomQU2diBtKQSgHcytKJAweMhFJRAt7biib4RL72vrU4TMiSMJhCSRN",
  "key34": "2hvC7FYgcdbMWnj7B8RX7Wxa58dsxVbqnJPxVXSwjZomJXVxZumF3YT4DpfhjBHcPJwS5HcRpqf8Mfp41x6GgheF",
  "key35": "2erEkTCnPaaZ1rajTwzJrXyre4KGdnwLvixU2CENR9okkGca31uPNGLsKUebQYFBQcwuR7bNZvdGfjxKxUGeRa5Y",
  "key36": "5KAGGFncu1aqJmPsCcdqGcPYBDjg6LVfBMKMbA1AQPn9oGMWtqu4qvcc5Zu7Pn3sPBKHGRhAWGJQU4rHB9kMTxan",
  "key37": "59UY1xTNLBhgFKQtdWvWccQna3wtUGae4N4TncTyM2aCGbJPLFcroSmH3M9P1DtP4JzuVUxL492yCfvyMqkLsX62",
  "key38": "4hGWoGFXWEHPYAuy7mcpiSYjz7UQqTpoUXvgjjAQDR2jDi14AxfeKLx6yLyZfiW3dK7rFRwwxNbWpfyLznXH6wWM",
  "key39": "yovSHyQyytpnMLW9nXGyRewBVnBNVLqTQDrVFkurZpFykp6V1gzYr9E3j27JrhFJVwbtYC3G4kWzNhCLkxND9aY",
  "key40": "3h9pCfM19dcycQVzqudMdvMZLmYCFCHkZqMfseTq2gTQLX14Ebtr4HmbbwbcKRrEH45e55qnGK2AQH8fHx3UdP7b",
  "key41": "2WMGa8WgMybt6VhkjLzCS5qJZSHYq5FXDmaJeSH4MSxgeYcTMYnLEgDUhTHnLuCh9GUhffQtpD5mwzr3C917pHaa",
  "key42": "2we7zK2W9kA5pweny5Qe7ZUaFBQWG1awAqfoNDRf6Nt6s27j4nqdqn4XTPfYbe9kRCfW1Ge6HwuCjkqcK2kcL9We"
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
