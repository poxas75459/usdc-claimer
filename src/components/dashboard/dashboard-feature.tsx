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
    "3w2MT3csf43A77YvyZtXvfmAYQwhnZsGhMdkwNaunKKs77t7VjnckDHHJGdsHwgVJqC8XCBjstC95mkm1xubtBah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3LQnbdBFV1EA1i6XaGJY22ZxFJhPJqZLS6f7J8UuXgygAMquZ7WA9V3gKz1SkwRxkXKZ7ADHbZ4Rv7GbLUJh1D",
  "key1": "jNM3wW95Ge26r386PqPzazEtif85F9Fum23iCd4VnTx1Nca1DMoksbfJ84CgMBt1X95CfBru6fYQu7kro6FUb1J",
  "key2": "65ge5dpMYha8zD54VbbUUENQpVJaaVW1XRovRaSSE8A9yDjb6wazJzVw3Yh86UPvYLzEoBAbCBw5BpsyJ1Ew36xi",
  "key3": "2T7LAqtJ3XDrddZBsnXoNb2xVaPt7821GTmHKSk635pYxxVtMcrL2wbcLtJxYdpSxZ2tZmbY6RRqafkQGPmeW9UA",
  "key4": "625cMocjKozB3rStHgrGQ8HZpZevEwJfaMgPdYCNnZV7JHGSyv8kviCCvPA7Cya6NEWSw9HbVMPNGXMVrviQwQh7",
  "key5": "22spLhyYXNnxBpPuqrZyXH5oKZ5q74uNiC5U9dWoek1dQwWGxe7TWZ9S9RUtVRXrTvLWwt7QYhZXKamqqcZauYXi",
  "key6": "37S56AStwHYCerxcBhJUfVu8hK6p8g2BLVnqP8HAKVm1f9LSyxrmqz8jShn6o7TKV8Kfifriue3mteVDZPfJzJoc",
  "key7": "5oBk3i5gXY2ubiEDsYAsRf6Ld23SmHe1oJMtfNdNj8HAFtaMDt32NFBXMdAG4sXsAQeBcgafhFjqHetWVNELuhDU",
  "key8": "4HoTb51ZXRwGXdGBPfP1EkKuisv2TBAABxC1PDt5ikdKdKtzMWnSLfpUKEMjZB3hFSjR3881LFJA9dCD9waKTL3h",
  "key9": "56gtVu7wobM3okKk7VByKehAJ5WrnXDJ1opQdTXE57zn3NrdvkDTXjECHMkE8xkV6aSH4N6eYoNFMdwgWDRcoxcq",
  "key10": "4om6EU3qNG3Dc8DzExsB8EiV2Fv8EWSGY8qvgGLTH4zrBZDxwgU5wQVmbxRpNmCU1FajeWAjnSKBx8DyGbiF33B4",
  "key11": "5oVxmCReaTd4RgfVYXrRAF3AkcfZ6j3xSCWs5N4z7jmwb69zctTygjYFhazedkYdZtiDQRsvX6z6JRsDcer14QcC",
  "key12": "2YSLsARUyTBED71tZgcEG1w5nas9L18M7JNHRrnba6yce1MECSAnfVvNw1rtwhKmZVGkGdvnt2muJGAPcvtMNTsk",
  "key13": "fkMgcztct5eY2Ck3bVWfmcBbVaRxxQgXsNJNuG37k1ff3KcYpoFWfXPGwFLjVGA4vy2mXFVbgHEjwUwoYnPZVH8",
  "key14": "2WwcXthWCziCSVKZJ6yhcQjcwvgEZWYkLUUABujThsoxAt7HXrGLBTW5dpXgsTjtAVKdJtPhN9ptbBpmHtQjHpH",
  "key15": "rKhV1pgw5iew9z9MN838jwG5PvAVv6FHjWjmLSFw75VgST3WnGJnCtUCdHpPf861nDbpNVDp2ASZ33snw1NqQzf",
  "key16": "5eJJrT2fzPaLCgYA7tcjvXhqYXdLXg8WfmVT5Lz16JYkwZ9nFzSbjvLNT28FRB5U8dPs24nE4aZ1Dk5ke92VPpuz",
  "key17": "4u6h7JTwKYp5uCrxowXkxepbu4kX3zGYDLXg6XqGJgZ9byFhbNtLfFxteASCYxxM4ch7HNWNfeSRqAXVsNPka78Y",
  "key18": "77wvqUAd1LAQuTvnMdnQ3bJA13oKDVmZFLb4LRq8gydbKeEpSCsi5ZbBSRC49vL7jr4t28xCQuPE7fPGT2dPs4Q",
  "key19": "22cVkAtCYh8Y3bLGRtaTPwUyXiK8pbEypu8Y7vzJp42b64anT2Mxq8LEWuKQjWEqWUMS2pub4hgHU6zUEJwYhnHr",
  "key20": "5AJpuXVqC5SqmgRv75AaBX35HQj9d7aDQVa1t1JMWAsddy7WxgNZCvfSULLzLFhS5L6M4yfRLPYHCn5VWYVNd8ee",
  "key21": "asGHGpZARaMrD7EyV7TA9mRX3uq6CaBcNeu4L1pJJSEhgweTmsmMD7dmBLpraH9TQA7PV7quibEyKU66GqvjAf1",
  "key22": "4usew8AxaqXT7reDujRKYx5e5pmfiGvobAX9LAVH3yJiV62Xcthn8cjWA1p1oK7Te89fGbWuP2gyEirjsfvt1Pq8",
  "key23": "5caskQ9V7btfUMsD13D9sUsmFji3mbR4X7n1asHYXzyK1Hkd83dkE4uU26PHeyojpoRgm89E85fu2fRdYVn5Mptd",
  "key24": "2FcPaBv8Vb94oHefhFMgcFdnDBZvHeZ5Fb6WG7N71cYMwmAJJpuqc6phE6Ee8iao7heoRiTLgwP2deQutHkSQHwu",
  "key25": "7CHgPBhnCmHiH1HeqxUxZYcPi9fdfpLDbuPDnCoDf8DcxVv9ZsFtvB5f9h4wa6DWbis42t3UgJFYEGjBRGt2C5R",
  "key26": "2HN5vtFWV86i2oBtbvYQC6Si68qn1ht3u31NiHRoZGpLrgTg78zk7B9APdPqwp4c5fuB7Zgtc4uJYxEY7rMNCzJy",
  "key27": "446BDiJc5u3bEDBfJA57iyffa1CdkweQuxiinmMEu57LL86fyH5tv9Mhn9oxGRkaaaQcr9TuaaSVsARiNZpJHUug",
  "key28": "DWh9JRFiJCMw1y8zoCzYp9bzqQT3VAS4XaTC7JLSdptmoQtcVuG2e7wirLR57VCDcB1tunnySximvUHDrw9XryN",
  "key29": "458GZohFhNJjECSAaRgxXKjentxLs2WcAZhx6u8mV159hy6NG3ZteyFhMUppZEmC16iDnesFpqi6qWZuEpQivb7t",
  "key30": "UD2fEWEqL3WbRBhHJWC7cSaSEP5vN3mAzh5aFnbJDaZBZ1z7ZpSNZd942BGLn29ba4yxxryZRzjUk3nA4ueys2c",
  "key31": "4FnBv4QV4b7ujZ6mheq1rfxWoPyDQt2ZBgycNcSsLaVGTYKhRMKEh4MMUkHU5dNKUsn472vTaKaDwhGqEbGikKcj",
  "key32": "58rYMbam8MH5BufwH6BhT4C5uZhyvFq15gcjv5XRfJj56JFn5XcAAXLfZN8nBawkLKbdwPAwo4NG82pLdCj1pNFV",
  "key33": "2Q9zHL6UM8JFaKP319X5HPawuRrdQvVW9jRv4JENAoBox4oubXDRfNWaRHyg9ZQSV9SchXVAUH4AFzL8JU2LBoRm",
  "key34": "4mUMBogqbsaCeCWTfnQTkphiezmqEQyBZBJsetoiVCNcertFpHDxE2wThC2RyDvYJh6z78Vo6v5wx4MHhoMDcgev",
  "key35": "51fpd8EB1VhVzBL1QLeNXrKJ9DYcf6pXNfwDSeAwfzxVXPbSoFkTQU5P4wGgd4u2mmaZKMRfis1jkTFgETHERAZ",
  "key36": "4b9vDWNXLuRJ5XbBDckdGvjhEaGV9feRtjszs7NPC4GbtX1o9rcRwbTqFMA5UE9i535YFoa7CVqNuchAoLSgfFzm",
  "key37": "24fqVgDdnrZkWd6Gf1asTdUdTGdymt4jiGgfdZZGaWkJUte4EtDQxtR53RGRUiqKjnBQCka7gJUnC6piFmh5Npfq",
  "key38": "4MsaaAbuu8ErPmyGiEd9tvt7UpzJfMHia1vWeYsyS2ZQ7er5mjmAEUaTHpqVmBEmg5w9UvtsuPiKRsma8wSP6RfZ",
  "key39": "2X3aoVSrn5kPoBdmuLk4QqSpWRZjJHhtWkdpCRax9piuW7ywsKXXh2ovz2B5NKpqbFZwub3RSiUTDSV8PRE8AB6A",
  "key40": "3GENezS9mmNW4fYpcZLZiFP57pQCZoxCuu4RkBEpzJxkgzkBmm52EVxaiqVJRLNuchRyDJGUDVdE2LYQDCcwa6kM",
  "key41": "2Wr3g7mbazXeEmpY3JG3PT4WYa3MPUSYUWRXKdTZeXjdmsBA1UakmuuvaZqKoKdTR31kfEMhE4Bx5aLd25Qt5PHq",
  "key42": "48rADtjFKtneBGfYxTRGjSCz57poZrAaXzNqvboHFFmzJugwWxNkMMhmjVAZGyWtJcdGTzbkbZmpcHvULT8U58Ae",
  "key43": "2gcMkQ7iVBf4RfDGFnN8epk6XgaTocmJC4yiXT9MiYs8eMRz1yNhZp2NGBr7soR6dwaKg33XzHnv3qGV4fBu6uA6",
  "key44": "399PDqkPdSvWN9YfaYCDCLVE9TqC3BjfuNSK3v6zXxHExCKGeTsSUosY79ts3v1t7C1gRkUjx88J5TaKTyx5ZMEH",
  "key45": "2dhh6yLR5ZxoWodh6VL85199xx92ozjj5EvLVxNZymT3XP6BcdDPvt7Snvu4CgMdoLhQPGSfdewAZcNhCSH2ma6m",
  "key46": "2jAJ2N9RaVEPVQ1wnQ7D9dHRosFr5bh3GZWyGf29Ec7mrPhYegT63K7KD5KRoZzYycHpumwEYtkNc8zJgpzRZSxg",
  "key47": "5JywAJD6jL6W3YecMjDknHSvHG6q2gT9QgDgfXWdNGv6nNya4GzmmVyj7V8aTqa5NDTMf2zYxxzgzw7VVNAU6h8o"
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
