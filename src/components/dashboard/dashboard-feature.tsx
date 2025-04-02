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
    "5y43VbTjyrBPo3GX4mXSR6s8Y4nbbof1jXTR684g2NAYrikJSwm1V3GW1bcn674qkEW3Ev9kB914jSpePAjxnQy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G6PiYWBY8RrzMtH3Vunsht98gB7C3gXkwg6YE1dsgP6adgdeebwEZPKbFbwrFBHv9zxnwMMhLm12YyamR853chh",
  "key1": "2TEgS1DZcMGoEmkSzgkTi5aqoETEXW8BuRPJw9ZPkppywuRcwkd4Gqc4nKCqSb5P5CdXV5HQuGrwJt1v1HryTMTn",
  "key2": "61yYz5cMGmjWutUg123wEqEP7nQqJ7V82N4ZG7KXr5MqGfGf8cAqpdpwPseJGzHoUCpbiYX4cHa6SrtF1BqGtfaa",
  "key3": "7AwobWPMjwjfQUZ4prNrBaD73WoNgo2wVMcjXPKqTYEKov284Gp2yZUqTQdn8c7jLcoPL1piDGbuqE42UypYQej",
  "key4": "3TVCRSJ6u93yEzVeyZEMNcvV3uR1JFPLMZ4qsz6Nvw1txRsNPC5gz45e5yJWtjmD5p6xc3NmfBVh6j6ry5gMmL7J",
  "key5": "2MLjhAQb4LXUfGk9SHH7mNw3jxkL3nDv93CvTeF2cyEtgAa3CpAqAxRzJpoXckKyY4UmaqhhUu54wpKV9GCdWLj2",
  "key6": "3tKCkuA7c9R2DaPbSA3F8GdQk29d9A6GhYexWgJo84TwhSGUM8tNwxtDZyGwvJiFEcif4sfq14JxozUrYg3jeKkD",
  "key7": "3CVpaSKyab27E1fehvvHXsZ7e5Jrup5MQQsd41eeNa1rk2DLeebdLAbqZQNYUuvSb4Lcaay9wHqyVUNDYEV3eWbP",
  "key8": "fnwa2DESPtHSC69R4Q5svZMhkxj6XX5UvgU9xUgLur7f9Ft8Zz9LwfxStg8aznkGh97VDZdAvsok9cVjeixzPad",
  "key9": "2HqbgU8dx6nenpvZ1NL4tR7TzbEt6vbkJvkGPYspziMT3DWnLthjH7eVRL6UbeTfgvCh43nTyq15i5ajd8VzcCqZ",
  "key10": "ePohAXqnSDugrkQPHEuvivGxhuus7eJctWQ6FvGMukrgq8Tbpie5JjRRLUF3hnp55MeEnHF6nF4i8XHXiJ3w9gb",
  "key11": "26ecwSVwV7RX1QotjGqzw5YZudFLd8tq11qQ6T9tgURknam1FHZJDMmL61JErYiFG6LMwWRh9TZ4UsbSKpeJ7U4R",
  "key12": "4wHtq9d8PKf2aKiViiNmZ1uCtRKoUu5krSLs4KjzdUKwgqBpsQjr2iXHZ6JjUy5EKfGJsGVEu9UFuGQthyiLoeNY",
  "key13": "3druUF5mc9XKeLm3oRvuyY9cjfKchbopHizY7i6bPbaxEACkgHjUuT1PwYcdvPf8E2mCZ2zDWvYHEwDZXjuuj8kC",
  "key14": "3bgBeF4wrjc3wv3upoeXtSHMN4tu61gASSmkmLngYWBDsyxSoEVrSr6uggtkXFxSFG7jZLVciAtghTB6t5Krpvu5",
  "key15": "2Zz8nvjMN6PiB4JUi6fr4gFs3xDN8K72ZrHTc6wM82rMWhGLDGVKWo8gK1Zh5Umj8W43Sa6xbh8E1VeFVQrQFRJ5",
  "key16": "5jkAscdCUoHM4rVSVkNdtMSmLAw2AkRgZmHw6SMZBaftQi7XJY1MWz8koxZxUmy46SWVXEXGV52wP8KQK4ym8Wr",
  "key17": "2FNuzEd9MnLd7B1Gc4rW7nsG7CrnChGCBDumDgH5WtHb4pimH5U4gJ26EfWx8FMG76mBNzRsid72nQEVdcQakzyX",
  "key18": "39LTjzdSMbeePFKZHTDLGh9BNLjiCrbp47wjbazjK8DRxPGnM4QjJ1qUxZNzw278jZ5XXR1s21Q5cEAXyApx3aJt",
  "key19": "5kK1Na7xK5jbfwhNAQNBBQn6P1poxYiuXYHAKx8oFEZMeDQFvscBsiC7TqqmPW1Z6K7d4pwnhQxbU9kEp1QvMEBE",
  "key20": "3bHpREmkiRp4MmWM4j4rVz9W9dLRF9PGg3mGmphgXZfEzVzkf5k5VBwwxxpKBDK9jD5Nrdt2TCrFx8X4Yo1XQoxW",
  "key21": "3wicCbxqnPz7xJFs89BRfXqZbuSLRAJBBxWQvQQ9B6eN1GDXk4X3jpWC5edXH9CY663AXxqL9yxpjrpebBfkvpgr",
  "key22": "2tVh5bUAdcsobz9WNWZwcqj78QFPL7LDqU8ifebDua2KdQZJyg19TtqpDR4ArUmDY5xH73GernkCgmrQ7634eXAx",
  "key23": "2MAT1gvg1saWLxayHVgxqdHjqdxNXUN1uKSx4xuUfDXsM9iYNkFTVZBEE9rr7GmAmRo3QixcSYYjkUWefoZr9KMf",
  "key24": "5pxEq3jRUZ8uX8VPg1iVHfPrB2smsdhn65utau76oY2hWJMAVcxmUg3VWrmztuhT5yYZvPAdFk1hNXvMUsPKCy1t",
  "key25": "5aiUXhwD5N3VmXfQ66bnXseMGK88a2SBKQLmjWou2un5yaQVTUeFwBT7mMeMbY9tn2Xa8qTVmynPkVqoXM3G5NTX",
  "key26": "3MFe7tEFGv2Y3d82HgNnHjiY5j6f55FuRcoHrhnaYNZ3eaKohiPZhzLSEV7B4w5Ta6iH6TzMfxtR4fxz7Fob2gUR",
  "key27": "2D7w9SqRbFWLhtWbqbgpszAKFTFyePW5ziqQvoLo784hicz8AJTRSfxHWjAi2TE3Vy1Gh3Vj2Lz8eRoxRiyBaNkW",
  "key28": "5Ykp6HVLrtJqeDrU1sHYA1bYXQSRMn3j8d7unR55iHiGCFVSpj7UaYtMo4TcpVbwTvEsab2gnrTVd2zBe7F2TTes",
  "key29": "64nT3tWPZLWtxThZec9GBX9pYDD6Zvfjy9YAMWzyMLJPjFEK61sxeEQ1BJhMTKCKwjiHXXb2hqp3hDTwRybhE1Kc",
  "key30": "34zVhfii1VWMZXKvBQsRLUm1iAFg86FDCD4nKmXxVRMzXeAUKHyc47gjRByhz4wWUHCPxAbdTNAuVjNe6Swgkjhh",
  "key31": "8h8VQw66MNp33CAQvKyEU1pCaZpem8eV4wAbGWUdKSoZP5otKRTf7oYDXBDYgRMi16qvNCbWf3CKotRkKNZED1j",
  "key32": "48mLpq76Gc6tQ33VszQesWQJGTLueJprtQKP62qC8ZVj9C1GhtsUuDA13SiMp77KBqQT4jHLP4CxeYGj7x7Qoh3B",
  "key33": "2hk3GnwfE5HbHSSi4ErpeRPby3nKgS2n9p7ejHaWqNHCZ3JUEHFP42De3RKBJVRWAwyip9XZ6nKLWb1wyz41vRWo",
  "key34": "3BwBFRrMpfwTjntZLtjxdueVgpKeRpWry1z8Rbjm81jqFYS1NRhXGR2vsGZvsNARDCYHmnL4KvcW225mMt6DjSEK",
  "key35": "4YhskuBsdTHwouwNejxarQt9f3ngcEPb8CWzwisZVi8SEv71GfgTPK1KonjRkQ4zagy3bqnf78E2xvU4Yvrdut5L",
  "key36": "36T5bgYfDKWkYMQDn6SrYysPA1B9YPUo1di1xyuQkLdMG6f2gZHZygd3weATaYQ2zgwm9zaB5eqs2Dxi4KJh5aqH",
  "key37": "2Ts42Ahp4bGRhsYCeo7LbYUfEq8a37NdvrTWMq6YGDK3s5n2kftGcmAwJUVaizDEXCkYXmhRw7LgabwGtX7KrhLw",
  "key38": "3urEELWbZRFjkodVV6oH87qA5oZ659WsECstydDbvdsnEX8T5FYQYHiqZmZoYDtSJ3G5iMRHGqXroVeJmc3FBto1",
  "key39": "35W7fyzpZcu6PVRt8w7oFmePM4F46nKGvyU19eFTQCkdPw5HaTX6GX4ywmUCmTz1byNHaxzVN1EkU12rpSjks63b",
  "key40": "5MHKsjbu79AjYzAtxAV8jjDsoEqCKn13Th6YGB7yvgLPi4n1DWknMo1CyhFwx62pHQsouA4yWZWL9CRCKHXQhDK3",
  "key41": "3Rdkf6UuoFMk4Dpst1U4Dqe7Jg6Vqd49cLHDQQKuqaNgEtT1uS1R2fJH5qnYrihzqeTFGZ8wfmNCQ4x7HuUGnzBu"
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
