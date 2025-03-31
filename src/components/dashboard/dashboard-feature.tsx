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
    "3r7FqdPXiX3xGhHUg5fL8hkZzeeoQUMqSb3enjwreaModyjyGnU61M8U6zYhSbsRt4kKfyn5gDvBXMz8sD7RCdwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewQAo9V1GFnpZUuYisiEE4Um4vsePvZibmRXEMDAdtUEF7yDimg5uQKUzbJyJoKn1aKBKboxnxh7FoPNHnFrHEh",
  "key1": "4usYjKPqKS8N6ho6wZRyiC2A8CtndE7UjH9W3kb5Jrr3iKHyCo5SMqtrBdvXLEXFvRkFU1Fx99GNPy3La1MsrV3m",
  "key2": "47MiwdMatSB44ZFCpY7m7Ft6jaFb6QXzQw7jMXegfacKZZmavpBh6Rw4LUfbghcJiDJrYXNpnYEK5FirpHGdvTuq",
  "key3": "ZZ5cNyLwCZxSPuuvdqHq6mXCJEkzNuMTqAqYexaFa4RAMqxpAx6CCBCQt4h4E4QGCPyCULXu9tftAu2FtFYw9a5",
  "key4": "2Mn7U5zdedq67wSoDbqW5aemfwirNzgRLUkcRLGXAu5SkpgX5J6uLfixfiz263osFgX8uPGSTLDxhhvupx6oPTHU",
  "key5": "3zcN46R2pmtWdpF6mpMurCbKNAHo56rmdcQdBquCBzcuN7B96JZpVXFFnEyNHp1RKmYWgvE2Umdfj5tc63v9GMpV",
  "key6": "53yG123PmRTTgbUXmPGmxBtkdbMCyhsGRHghHDewUyScycKmTJGPy9HPszk5FqM4JKucVip7xrMQezY9vCr7fz8f",
  "key7": "3UxUiuq5JAorqq9wiNQE4kyQKu53416mT3U985yGUaGFeePr7QtNe3BTe7dow9cSTizf57UCtq94NuyyqT9czH5b",
  "key8": "6hpLz5UF6UGuoN4Dp8EYc9MaGdXyzvLu635ftiUPVphFv2sdBmQ5wYzWMnHy5dzJH5zLYgk8VFhuTTr5ke9p3La",
  "key9": "5ua1xhoXfYLPsW2s7nUdSwUd7i3VDHt1Va9XdZcS6i7QUvuwePP93B6eZN7gSV1ZhWVt8CcpGfTqWuE18DfSotJf",
  "key10": "3UUf6x5Xn9TvnRs8WCm2Rp8QdLi2fMk1rY9SEEK8bz8sSbhV5AfC2rtAqWzHxfXpzyitbrGG5PMtMP188yodXUs4",
  "key11": "24axgk8GpwXxt8vYAWzbGuB4zpk2u4T9jM9dtwfrbjSyF918apRkN9aXRq6AVyvpVokRLdre9oaJ932cZFVDUYsA",
  "key12": "4QfuxZRRwueoZ6K1Kz7XumUvCjPD1GR98Eh4zjvQdEBMuoV3aXJVwAFP7UDDSmynHDRwjV8pRLPhMCxhWvaS5xTC",
  "key13": "33JZjLExL8C6b5k4oT1JFHLyfYBb1aQtEK25p2vMNFGy5pWDKjiTysxGHHBpzKK4ZpRXV12d7nrRovrch849re5N",
  "key14": "22RQ4bBZqiVLhYDhrvscG4gdoKDRyXb8Le1v5R8dQRnKJ3tbr4ea2ScuYLUbkTJu3PejaeQfNRoBUgzQL9BdEbYN",
  "key15": "5XaNn2R1GeMwaD6GJmKW8nUakFukF6uV7CEvUaC6u2zeyw8QDb6N163SA3hgMQgqbW526UKGYDmoLBx8KJSPa5zc",
  "key16": "hDR8nE8hHEY1kFoj53H6K26buvHkm1ZrdHw7iUtDg3ZgEC7bPMJufLMrJR1QW9EzVaHKfeSnNiU17Kr31X2Xw1Y",
  "key17": "5NjSNxjii8C7xt97xUVKKAYVN4B3FGwpbSPYV8TKq3f6RdFmzRETzmL7WNK1kezVsuLYJzhPYaoBjkMDvUPhGVaE",
  "key18": "3dgQMHsx2o96b1JyztQdJQ4VyWtrLcF6dAqHdB147spMGJ1yC2o2Bqqd2xLa5bARUfjY7cnT8pSQiS4WNc32Wegg",
  "key19": "48oZQyqXmJpuoFox7MdvbT4KaZZJf9idLELcg436oDXgWVTbBax1Q9gRFktJZPMzcrubNdkHtNovWiuvGpzVYxZT",
  "key20": "54buHw4r4F5UvgATcfyJn7mRVkvBqHQtJQD9SdeH3Bn6B4XF5BrKYh8A3ffbt77qEdJh7G2rW2bsXFsWTUsEahcH",
  "key21": "3THCNLzc3Gu4jc9XZ2uxh4pXwkWKrTM58ejTNMrqXTTTcFgzgLK5czNnyNm8iHrE6Q3sJCGLHo9k7v6cQwBGexfg",
  "key22": "5Rn9hkjoEdN81d3h21817fwyWx6LdP8ks4aUwbhe7JNSUqAKVihLPuQSMteZ1X2A19ThoeYVwSVuLfGXino8tvZs",
  "key23": "5RqG5QbyJwGAWzbRvvRTVDyPRj7g8FrgbEPiuDg2srMidV7LC3RFfFcDS9H2pypHchkihjym6WEgXJGmVs98oKvM",
  "key24": "668tDrG4Ub4FRNdXvAQb7jKeF6bXnYojmBhbsau6FiqoqgrYxFKD2W9o7RabpvYqHNfdyrG147DnMCTTR5nzpoM3",
  "key25": "4mTVNCQe38Xs6Sh8Z2xJKwZBJQuZedVCvfhYQuc1moUtN6V5fgFm5N6ATLMgN8ZhGhkjnLuLXGR9W6hJ6Nvfesmy",
  "key26": "4J46m47uKBz2fpFhXX9gxL9iYL6gnYznn5MKcHeo7rXzDjiAA3S7GCWhgY4doGSGtJaWfu1A9dbRhou5ND8WenhU",
  "key27": "4kF9SzKNL4c5jQECsdqMartEYhuGop7fF6FjyUzwESyZZTwJu9iN8j4E2hkvKFxYjzatmnXG9ZM64KdGLNQfTKoG",
  "key28": "wbwL2FkUxWvTbiCx4oMVEm7mkhLwgy9QTLJ3JFWRuY9iK5PSiaa41KgmJi8zE4NnsfDFxpJ5UJg6jvVHoHMj3Dq",
  "key29": "56dUWemRkrR8j4BD9aZMeTLjsY7r4wRRfd6gjgm13oCSCgQgmMCUhV6W1GDhG3virxGeXhkTpbZ68ugA9aDMbJnw",
  "key30": "27F7cNtC7ZWTxX9jbRbVeZxu9onkRARD9v6CcD367xTUVJZNJABzAHa6jNciWwf9Ndm5nS8ZcV9yV4M3H2aDR7Zj",
  "key31": "3etNH3VpZM3jsVw2bvqXb4SmYjx5HteAepWRAhKMU2BxHv37v1dahYTMvvgHxWbM98MaqUbFWJjNB54teZUu3DuC",
  "key32": "2iE1H7wCLj5b2S4BaeTbWfdACQkdaen6TXD2K9zR3m3dhft5cgeCvEtrPb9xoQv8tBDP1xu68GbhHekMjY674DTy",
  "key33": "5R9Qh64GAD8DSerafvVup8Lw27yn2RpwGAGkMQKgD5KZK5WfVQ71ea2EjxYrKdyRFvk1KoKCtGYk7ZQwRQYKiWSH",
  "key34": "3ufinB56JwTRgPjyRTi4yCo6EhEYzaAN11RFZrrLV4eTkELw1xFS96BGJwMKM7HymHoH5iYMToqdXxhD3qSEhxXt",
  "key35": "5cvzuzf4dSB4frUcGJ1Sov4Hhi6DFoP9Kuj1vLCE8wLNN3mnhYhhbyFT5Uz8akzsTxNwEETkARBCsELdekMpYsao",
  "key36": "2jkDgWfTb6WatB9kHvuef4FmhsncUeMRdSGzkmpyBiJmtNmLPGh2X1Vdq8v3MzSP5vXYPN5EATB2KqgkR45jNnF1",
  "key37": "56hercmWokd8xn7a4muhzF3ZrhEFxnuSf1RL6WWjaX3TMFrgM8uvsEwm8odDzERoPiJ8bHRe26YCJASTsbMjw27T",
  "key38": "5HDMvgBkbtBuW3bNVpTmJ38wdVRYo5vJ6Xhn4XKk3Yj9BVZ2ULqoTw3jYWrwEgQuvRum4yoyfWjsYtJbvoQuypcZ",
  "key39": "3T8ZHtvccP3KiiJCaMTsMJoVPgwJ8zEwAxiSMSYGzK32qkySSjskDrE2zQB93QE3JE1DFcFZgwrd1BpGTCarFZWm",
  "key40": "3wQR2SeESTywFUcCGAounGhsWcuPM6pHqsycyoMCVB8NUFWiLpCaszJxRvamzwxnRxBdxe6yKNWCrndHqWDXPbHy",
  "key41": "6XSCpeczvKewA47CgTpmCzxUPiWyPYVjn948J8kofUvTNTnPGATbjGemb5nU6gwYDSJJ37VR4buovrwaoYmPqX8",
  "key42": "wfaGSv9W4dJ353fTMQdpF9MzQcjfmcoFhLXMHLhGDtD4SEnctjex1Gh9X45o27kLWTffQ9ZBZGT58ffAjuYBrNe",
  "key43": "44U3WXB2gHxEsgiqdwEnLEnHkQ7UG6LVxrmtHWEF7zrAtcGyKLavZhupTnREoTFAaiR3gLoLsmQnzDux9rSjS6pV",
  "key44": "48z8omMWpj2GUHFLYNYhhjTzrfb6WS9DdAJrMnpNwNch6KuhAZNbttEuPouegXD8hYLLGxAq162TpzJzVnFksjxR",
  "key45": "2nkLWm9UcFuMpVb1ef7CVfVahWBBw6eZeY2cjJmD9AsEnbRTDbzXFDr1S3AQ1bieR87wfX1FzeiBaT1k5f7QJHXj",
  "key46": "2ZRjEp9bT5dh1AYsASbKAwsgSQXSCP8GqZ3xWRjK7PBNQZ6kZHD4HJPahpXHmt3mVzFqHePnB69S1ba1KYxzwxSd",
  "key47": "2y15WuFP98woXaeh9Hwf9LF1YYq2N1cuPcPB97q1hrzp1AMoMG6Ycdn1bumJaJEYbczc5qAF4s9D1K23wU4gsf6e"
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
