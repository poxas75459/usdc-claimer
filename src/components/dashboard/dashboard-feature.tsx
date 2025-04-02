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
    "3ft28Rbmo6nubCSgj8qqB5i6hLavxj2Q7Zf4FgSXxAnHWVZveuqTRg83AbH9sVCDj755YuPcE9oBHTEWh1t4t24E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXxjET9simfLKNDfdebC22EunjwMfjCiUsqg5Jn8i8AUvvCizcZ1zUgoRN5uMgx9no3wB4ViuR72FgtnMdBgvE6",
  "key1": "3hbuXAc3zQHhmj57Yw1SW5rxypfQtMWDrTycPsLWMv7WzCSNmzZGTKn15KowsZtuwFGbKiCUVxcWp7au5ZdjQJwe",
  "key2": "2LpBSL9dWRraeXpDCmwk1hA74pp2brWc7JRYhcY8o6qERrdXBMaaCjNcxayMV21wEoNzbk3nLbFU2dCpV2PFYgJb",
  "key3": "5cnFirLUoqqfAXBawMZdAXp3ex6xwFrzmR3JP7LJ27kk7ZNU4chm3CJFnBn6vffkm5KUKcs49VrVp27JWL4Qbmnt",
  "key4": "3AqwwHD9iKrPx6TFnMXXzfwqpfJJhBsP1rFn57sWLPvwCL6v1LCxav6eAYqK8v7jMZUtLvUNUDMXy1QKjENwG82U",
  "key5": "4s1m8Tgr6AbbFe4zsEfspKWuUqGBmgt47Kf5rH2KxydQiDMdeZ8SHjb5jctRMAmwPBv1soExBwL9UQ5FZsBQbqSN",
  "key6": "5Ti3vC6MJA5uwpPKi5JZajsFki32uppsqqHynUcbrxkqWB3rHK1LuuLd4HbQJoMM7NpvCE67yKnSBHR3zc8d9tnG",
  "key7": "wc6vYmGtqxaWaoQHY9fNGhBQ6zVWav2AVgLiQHitbdCPjQowct8ce3rJ3LWZA6L9N2n3toZ26c1rdE87Q6rpuGY",
  "key8": "vf7dwg1MPNKQVkyAMBGwaWNUBpR3rjC48jsYeKE9et47vD7z97Sk1FVC3JJ1Ptn3L4sM2yHznJbbfWGHP9CyXvh",
  "key9": "3QnUoQ9sGtmYYLyYjkRAuQp1wkrqVTFFWR9PTeTTkc58rghFHTRKETXJepTeB9tXQuRhoarrjbhd3MiWoySy2DQN",
  "key10": "3KS76otR5qnsDnPmBezFbjsNVqqdXaAPF4gRzUpssa5sbHqi722DGhQKtWMQWJ6ZSj6z81KEWxHXBNyYke1GQcHr",
  "key11": "2fKXXTjqzN2EFkKC7Ao83wkDhp6CUB9h3kB45VjWqnto2oVHs4rnrU3SnfbxA2Vmey4jgXsTdoy1MT93GnfWhoWN",
  "key12": "5cmFXKKgF3DEm1obfFFpojJJ1i5Pehx6HKTMCGcxFKprJVyEYyrMgk7aj7iDtSBysGUJTJsxFQ9E3beCv2A4SHuf",
  "key13": "4yF6x97fUKVGmBXRRdrVtx8wrbUHGHhdkdsruvWpcCJuiUJKnBh628iNx6zs92Bh9TwUfMhwNkAR3QQT59z4Ebmh",
  "key14": "36uJ83b8xxbPqU9BDyu7ZYeXJvehniXdghL4hM7NqHdGacywsugnSrkWPCQV5H1fX43W71NXkEAYRYgcqumTbjMd",
  "key15": "4Qswq393beR3qY6ixGg5nbY5BotvpaSgqkGzYD8S88m9Tiiqr1eEsuZQDPPQnR6dZY9YNJYBtQyyGuUGE8bMsJMT",
  "key16": "5sgfdDpM36GPGVJjaV6Q1uv5LwVkdCyuaqsqofyV6p446sSR5S4ZsZax86ta6Ua4b3anCJoN9G8GFarSajA5kTF3",
  "key17": "2AqrH8vLZzwbAtmBrf1VxW1YDCaJyM6Nv62W84MgaCmbJ3fyDHuRmjDsusBQZTkLUSyLK1HyXWHhZDb2ddVGprcN",
  "key18": "5R4iriAge7LbAPnUaQRhoRKBhmrceyBYRKyBguZvpwZku8ggmfWpjP5oVy8zbWgQM3xXhtorXBpURgDUwnnTr1LB",
  "key19": "661e74uHkCBMSsTryXDThHN6NQ6JMZzSviSAXus1pDnC7xV425YoAjpqASsXE4NimXpzFCFhn4qkmQFhNE3dadjY",
  "key20": "32FsDEiYPeVgJT8iFF1szBBeFHt7umgFCjnY2Kqw4yMQd4AxrBTvAkPSHHf3cMosHmh5n6XhZWzd2wUvJV6QUAZs",
  "key21": "4WgeLUSxFXWVtr4wC7spRnkEHWKWXucYwVscrgG71PCz1n9Ug5cHqi1mizfGfU5ge2Q458RpZBDKPLSvX9SqMowi",
  "key22": "24EpkvyMrfTZBEYemaZ1xdXwtn5T3EWdkKgarJH3ZvAKcqsTnYcgEPNihUhAjHEeToW92WTCB6H8Kv9FKvcAcx7o",
  "key23": "3UFf7VpP1NYyH5E7Gau3aVCYKHqybRsUiDsRASv9aryDJboqT4Ky8ucUpe3HUQ3Jvq17HJYsyTunEBmkxSi2Erdf",
  "key24": "f51FmmraRtN2xDKX2Jpmxp9i1P2cov4o7HYeP7SjsDJedgC9miNcMGsmAL7Tbkxv9CgqJPPrSe26b1kAXx7wNwH",
  "key25": "21SvUDZuA27iPHAiLsuSK8d3wz8JvJNvpk5w81Vx2jN1Qzxqmq3FUSZE6RbJXXBKuhKCxdpzNVNnWqXp5x4kB6tt",
  "key26": "4tBRr3C3gxNWsLYpLc8RuUXn8JWLgpGoN5C1rDnVc9ivJC7npnhmw6BVLe5qyVnbYFg3Nw1SFpY6WHHgE3r17P5N",
  "key27": "39Goc32TNqRYkJBMb62ichwCc66CW2GE6THjrzUueWGNZoaCm4FyVFCeuHLqzsnfgeAGLZi7UCw1aBcEVcafchCm",
  "key28": "4RyDzQXXte331fL97CBsXxmXYzdmmgCJPYToAeQxUSwSPfYPr7tSbTqSxkUVnyb9CN1bpifdXLGWx29zrWFAxkkV",
  "key29": "6WimwSBsZ9T7BH3if69LsV9pMf3q2u9pgV8eko4DuanU3UKHPbopnZPEJzhPw1M79pHRuhDc3xUBeb6KMSm4Cu2",
  "key30": "XWiZReVn2ds8ATAsnBQkFGCQtxDXY9r2YmXp91HTz6Y6cGYxVdoiqzb24aC9jPSXbdX1uAfMbnhDvHA4CaiLmqQ",
  "key31": "NSrwzdBWpRiwugkSkPUcL1QDgQvVyDk8TrJKov9qA2rDNnTMhDia395xPGwxT9tat9GN9GarJ8Q96Zv4A1WY94E",
  "key32": "5TQpz6gpVQwHYh9k4ZH7PpD5ytj4pTg6STepcvbRat4KPjGh8S87sb34Vt1fPeheZc5vsRQk8m1ANF3dfSw4Perg",
  "key33": "45JHecoUtrpkHWsZHyCaUGePekqvv7987H8bsJCSguzy3c3si8bHKAppp4FU6Wq9TZHYZCrHpYgYG6e7qHFYoAPV",
  "key34": "2oNs9tEzYPL1ZMzbf9qEnxihnBYTHfHki1BMRPEqfJcxRGHh8LBC4kTfgRd4hKLvzz6mUj5wiWXmYcnjuAkP7A9D",
  "key35": "5AWc7UJFdVysS7icPnZY3S1RJwFvhgaQbWqtyoaoa9P5MGCrB2KAKy4SzRfE4X8G1Y68ZYju1ufzZ8bys2x4Rxon",
  "key36": "27ZUBuUQZYvND3qPezijkjaphtR72gDaQidVBEapLZiFeyjr7rUkGZwLCZ1rnMDTsRU28B37Hj2KhpBz9HbkkmdK",
  "key37": "62Wi3zvELWoFhV9yMLb9aHb7PpefRcSWXMC5LGBjKczdjR5LvgsTy2gCdqWJWrmaM3uurGrYiCF1nZbxNY9Y3nne",
  "key38": "5iTG3C3cEBJti2Xo5qPS6WS3kGS1jEriANdWYYZEd2C3RyGGq6vADZnbJboCnHjQLe92LoHJn8nmrmsQf3u9MFqF",
  "key39": "4NJ1TBy3hjneyYjhK378AcXo4ojZ93YiJ5knVKVrFdYu1anvVVvETrPuFpoUvy1hrPhQPeybu911M93gPsVrvqn9",
  "key40": "4xKvUX4u7TfhQ9m789FKXjKUG7F56a3pv2jPQPz35tH9aEXULwizgWaNieXrNmm6vVctFnChDxYaHwZJ9pH1pn1i",
  "key41": "42XisEPkwx8DpJrifg6mL2DKQR1W9bkB1hGn5tydbabRb2XT7gNxx3sjQwjFswwrfLdzK6Cg4skdXfLJsPYD3qRq",
  "key42": "2K5dcvUQXwdMxZA6YQmKQeaNArhfAsMfAQSfnz3i5sMfyqcAj1Z56wyLTUwC8DrvpdLvqxUxeQFMt7MnL8vw7c4x"
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
