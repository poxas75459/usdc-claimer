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
    "4rbtxYYZc8JJLgT6UHpdWJwfvV5DfD2JAsbMH1pcc3Tp2aV8aVueeoSFoSdxLBjTqmG5WUd3LrLK6YKsFb345Hfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c129wKWBiBxuG25x31CtCpPGYYjHHTXDeQ2aPwBoDByFRdHXCTzLqXzvi7YQkDk6Goeij185viCTzejBQfW4mko",
  "key1": "3mTsYwDLH4Cq7QDqqVMqte7qKmGZo6afQ5REnemmwBSyCGKV1AJqUb9UYT6YdPpBswdmUY7gw1x46chYYUvwBdCy",
  "key2": "P9PUfrN61etdF2pV1vrRtcVqjebMgpxcQaWYkmQRYu3oYteFeTu6o7RGTjyN5EMbKwZ32VzvYyEMXjLi2vF7PLK",
  "key3": "2tnPk3m8vjE7RSfE6dzTpgBHZL9B2bixxGYVF4wyhCoKqzWvT9geQ5xSZv9iEFBjxrV3az5mdQrJX3GCJGzLXru",
  "key4": "s12gFq3gDd8AnhQKdymFKx4HQPnNo1kdauvzA4TbHsmadWyWR5uZ98if7yabJxyd3oMKaGyGB8PhJmDb8xAXJAu",
  "key5": "59vu1Syw92KUPrHUR6NxQWtUBvjcSQen7esg4K7g1Z6DpdM48jH5Piv8tQxvcVgxymG1ANny5KqN7gLYsAvqbunv",
  "key6": "5hhFCM1xZk2zc1C2EF5i5WezSyrNM8bkYWCPXNdkQsmWNH9R4zwW5ScE9BkFhespcFseynEgxNH7oGABRbe2x44J",
  "key7": "4Dy7UPv8DnEkPyZSBsMQb6vaHnqDFJUpit2AyMzAZcQKCaCGqY2rTm1ktUt4fBmQ3qow1L9K3CFb3CxptS1WjAaV",
  "key8": "3SKwvo6T3gjE6ty9WUA7iuEkBCS7zW8iUA1kddVxGvE1tM84wLYCS7qAMDa9NhPUVpXq3xbjrLqxry77TNPgLgpb",
  "key9": "5vHFpYu1BXLiw8zh5WBeDU2HdtCA5AvbSUabLdzEWdTEkzLjs8gnZTMQ26zjrgMWHEaFQ2ztnGvciTJ8b6f3gTbi",
  "key10": "2apJp1CjSgYbZcvRGYhF3irTQe4D4wbbc5gn4Y9VjG4tNZeq7BEn1Bwv5jYzTXBxsAvkcRtqLMG2JDSTC3qJn6th",
  "key11": "2EMd4Y9wgxB7AAqZu1cVdmM4hh29hoksWKiozkVf7sVwHDZVYx3yuPiaCiyMYQMAft9UPfTKpJgAVwa4NL6J55aA",
  "key12": "2ksa1CqTUc8TkPCQSVfuTbEZJmDadot2fGEKRVXLhpAXfpMvFrXPvznx7xyQt8BdRQVzQ8aJpEu6je84AiSd1n7N",
  "key13": "5vGbwi5UUusC2DZAm8pnyWihd3heQerX2g3NCaFc2hEa7zydgHV3iH7uDvkMTgrGSZiQv614mJ6KUW1c7fXXnEmj",
  "key14": "4pKuv53oYVFkRXyzfjCQftwGS9aweS1gfDAcnbG2Mi1Y9ZRYWGqWkNi877xH487BmhCKRKhZ8ASWfVCLRsvcC5br",
  "key15": "nUYeAWrxEt7tepiRtN7twf3sJbYzpYFXBcmeD9vrsudLTnZEUhegyqhf5TcwPYiwzFPjPPbQfSREC3kgsPwe9jH",
  "key16": "4MekgPdZVameBfuZvzxWVL6h9cedsTCdjT96gvhLeqejBEAVTVB2DvKe9QuNHJdktxWpw4nGAjYypxgSv813e5AX",
  "key17": "2uZcrr5tQneXbDhoKk1TRehzRy75YtBLprthusQPS2AJVW8iQV9y4amcR8YgERQcjiH8Ad9u8eGiy3MWQFurhNcm",
  "key18": "Tc14o4ic1wvRDk6GkAmj3G5cX76jXRxh9FBTQQY3jyj7TVxzna22QCiZP1SJjiLXbRCpsFMRpyWLsiZt2VASaT4",
  "key19": "4tFjiM2A75rYyZyW7juqveyrUcxRJvLBKxZdjUU7BZ3JpGTV4aQFedFparR5ts4sLiw1R7kcThWeaMeoDoKUSokx",
  "key20": "f7GJm8LE59mEzF7rj3cDMoV587W6fVb85zPFGoUypWEV5W52Z8ua3iFbfrqUidWvCTgREhMkBTB8gynko8T9it6",
  "key21": "2wL5vhevCh1G2M2hRg333qXUVZF3zLUGiTjdethbsPGTpurdw3psQ7q3gzd1j2kUWhGuMcW7yV5HsK1AzLG6yjqr",
  "key22": "2R6QAS2RGhLJRtBkuRJjPxdwNW8eWuRRhuTfXx9RBrUKcmBMtq49KBK7c5hJxNZKP8LfvUnjqLcMDUyB61QPDtii",
  "key23": "AFMTvgLqpWELpVmb6roxToQJqxioJZDTQqJfBYEMGcNXDWsXdteT5VQiyRsy3dav6Po9prfDHaowzK8gkceS1ub",
  "key24": "2BzCNVCfYEq9BbZ7YsgruDB6mYyady4oStvmiHtsmU1ZhvyQJVRXKASQ4VoeWodHjjEjcBZZTBj23ZRAfcwpBSwG",
  "key25": "2qcRw6k1tmuF6baWfA8G7FtbB8WnfEK6VDsFyCXtqseLq9dGBQXhFRQFpsatLShrpxHhzYGFACDkE7wbMxpa4Kvx",
  "key26": "ANToNRqz6kY6ZvCpuEKUDYwrvjg3PYLfMAnEVkCnvkpo8BzVg3DTdnFRopghm82cTcGb1xSXZJEzbdLVJ5wEoh8",
  "key27": "2oyFu64dHudnjRisBG1w3jjMwicruUHLtfXiqBGctcXqnGQGLHztyQNMS7RL3KWcTXYFmg8Z6vmcASfvtY6ZLKRQ",
  "key28": "5fhdH7zPw2SQSMMkKz3wVNGjoYFPGG98qn5swb7WwjE3ADmXTGQoLknAXxf1KeqJQiQcfoQiP5MYb3gPMGWRZwhC",
  "key29": "VrsnNn2dZjffF1u8mo2mTKR8isueiuD663mjpn4JjxKFjxUunzKatgMk7MQweJN5ZLL74p5UNmQ9eMvb25R9qqe",
  "key30": "5N3YuEvSgVN4Xuh9FM9sC34nqf7QLtAa2Tu5Kt9xD8m2pWSqSk1o1Sxugw8urooKcDGnBTjRidn9cKf3GTZBaBP9",
  "key31": "UerQYaLXY9jB2BsV1Tu6C5V4TH7GiKLFzjdc8HffE15YPg1zKFkxgXnF4LAhsrq23tPt3jpSuWqiaPyvzWRgPoH",
  "key32": "5KRm6PRy8EzgNwWz6B3kNyuj8enUixMSNxi9AanMk9pt3DgSoNyL5jvM3UvsQ4bV2FzwQKVJJACUkLQMtXeoGQZR",
  "key33": "u1EbWWdJzN1jHg8iZMLpGdqqFaaSe14RERfmW8ucGqNDaCQuT2wKPy1iWjnPyx8UAjk1wzq9TikxsrymkJ1F5gf",
  "key34": "4gRXHc9F4dQcccHoFXtLFyK8A7fwq5hCiwxx1duRyKXg8nunR7MbVH4pnYRMstFVpBx4tBtCuT4RYR8RP3q3z1pF",
  "key35": "41WCs9hRCuWu9rJaSv5RnDnHowHCpjCPW77A5Nrf4h32rUe46Xj7oErMWXZ9iSDwDfYbeck4GAHmPn7HZWaTNk3P",
  "key36": "3Ys35ZiYynqQqS59KJcFQWHePcri1WsNewrxxZquWXA4MKkivERJA5NJUUP3ntExFsQ68C5vwAaHyjCuFoYfgksM",
  "key37": "479PbJ8rKYzusg1S5a5NStQiUyoeKLzRtjuiErqjirarcpRnAJJsNJtPvzbqmGuv3Vxv8daP8HpJCUHdyxzpNqGf",
  "key38": "aa6G12dGCtKv1u3poVMaewnU2XtkhYtTvm2LimysBobwGwGn3SYkLcE4tY3nmmvAVomXCZzKXnydXM6iXB51P52",
  "key39": "dNcYNgzpgtXrmno9cJ5yyioWVPRL7z8PsfgjzyeZccXtgKm6bKFr1PijYP8J7q5W7UJz4W4fjXEmk1Xd5hhMZUe",
  "key40": "2jdDSj1Kbn3Sr41pxhhkNV9xrVBMSoGKkz2u5F3KeqJ99PAsK6cR2wvoPBnfpcoEFFbM4RtAgK1zosDHMgzXRtuA",
  "key41": "4M2vpUy3FCzHWtrhacxUgHRo7Yn2FMnZJubmKJESQFR3pmDqsxN3zgDGM1YwAUCFFJmEzsgMx34JY1oWkQ9fnF5b",
  "key42": "2cRhGJBhZTvbPhp3mz8fqUSf9cqbCzJfg9GNDRo1cW8iUUivvS3H1yM7LAAUTk1EDTw9Gnerj7vd469maHarXA9w",
  "key43": "4maNvAciJmdhRQa9gWHLwsSoRYEv4nZPCuRrMws4W3XbohfzDMGD9DMNfxELigr3trQWmNAVbzHpKMUKvjXuzkjT"
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
