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
    "2hzvyg7jKe5esZQZiPN79D7CbPZATRiVKXLYwWnFraGkdvP5NpaGo2ry6igaVr8AmxCFrHtBvkFnFS2LnbEPohCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiWuen4qoBgTUiPogZj1rHHB2joLABoYGiApW4AGSTKzE3keHgpvbmn6SzmkK14Qh4uqwUqpNewHkEC97wqohFG",
  "key1": "34DpLwVqLsATTH8V9GXeqsE4BT8FViprwNiRWqcNKuGrUrNmNRcCes4sR6ywJMA51QamcuD6FMjFQ9PBkXvRUpj7",
  "key2": "yfzLodJvPexWwz28pvkyoccdX9EbtneZChVqnhQC5Fz54PiSwfKYpdfWYbu1Bb3Wv9kkcQToYvroFp2xVdiYahK",
  "key3": "2BijZh7AkkSZH5QYpWmZWkNxgTeJY6sDHBtm22npCUB5cituL6qKob1Jgo8MXymHXz5cKKyFFdZzM2T8MTFMkvqv",
  "key4": "4V8Be9gJkjeciVaNTDsz926UtXVYbLWRuzuTMEoShV2mPK64ekUBNue3qNwjVB6hYdP1M5UPZmVPt88ixvTiYXKu",
  "key5": "128tij2YjSfMRYhxHCbHmKzUFQQ17Q3vecjRd7eiZ13ZsdnBHM4kECpRgB7RvzAdWDs6NsViVTP8yRHS33qBf7B1",
  "key6": "2gSQUnQECmCDrBq295iFoaePBN4D7T3ubb3ipoZqkmY8FraJr2bt3q35M7kR741jVEWSiA6EeMPPZy5uLdFH6ZQf",
  "key7": "3B1QmLTYmhNqi7UD6VUWSsbWjXPosNZVyVuNzjeift7P9CbPCuxXbWXrt5GuWsA9EGsPLzED1ketU7M1hSB61USx",
  "key8": "3T3G89Vaf7HekouQneRZNhuhgvGRs985swf1M41cYfDXETC9VyCmyw2scfWgSRFWrh1urv2hMikkHTH39YKgoFSH",
  "key9": "bvEMBoxQeuiGP4XdFi2FmT9jKpo3kUrS7pa1anuzMjBYN9yLZs25zYu1zrBtjNbnimAUrmgQNKiMB3d22KXewie",
  "key10": "43FE93ph2haTGC7U8wgkeGu4H5dk2XkmTjDvQtQAKVSetYjePoFVqfCrXfivQEfvTGerM2vcaMyKyjWhB7EsTMMx",
  "key11": "1jUq5fnvYYUgEXMNe8CFsHbk4WULTfLMCrQCXXLPaJYKzS9C5eFMT1xwhiBoyVoVGbzFKRn7uHk9KtM9Ss1xDKG",
  "key12": "2AFy6voYFgsbQ6iBLzTmtyzKWg3P8QRtbQbm1gdZ1efdu4ddvaJAfXKMitWxYLVZ5DzBMaW7YS1rvezNcH9XoQ8o",
  "key13": "5USvoVt1GFvk3qqWbRN5z8mGJhmDp87a4rZabzgq1u3P3S43zZ8PgG83fNV9cxhn6rqwhDbTEX6EQyCr5k6Qr52q",
  "key14": "5nb2FFCn1BPngYo541mBjSCe7oyLysXB7m4LUzYbqcGeAe5crdPjT3DDQDHc8raWmyKDeGCnTkfh5okgZspgudGu",
  "key15": "2s8AKRwJXnZWxVZk1DwySNrCEvhqK9bt4imkSzD16shEQ27JFeKusT3eyXiQcXTzLYrzviYvuQiqv3ugm2Y9FTEZ",
  "key16": "2gyGxruh85XpbBdXQaoi1NaX8TZvVhkZB2hhSrF1VytLreN7VcZGbcBHs8ztS65Uvq9aQFVE7SFabUdMNeaZN6LG",
  "key17": "rLrcd5ca6FTCPzAMVren6XYNGKccJddxti5djjpB5s8boyv9JH6QRM3e2wUbATVGvdrh3UhWxXvdooo2HwqAvxx",
  "key18": "2892viS8oR5MWDwbPzwrcgdM5SM627hszmaMMmFx3kV3P4FgEsF2WXCLmz5SPEiWfnAsuDshaGJzCz6ccyPs1KL3",
  "key19": "5LpsmMM6pSfTVTtpYXA7vwyqr8cgMhkBYpkvigKiRtFNLgweVmsvJ4AGyb89bsatBbopFLrbnwKffkdrFSkFwgQD",
  "key20": "RgfP2CDrnRSY1iT8wTAvSAKvxxGdUusxu4WML7bJ6dt2kqG7RaZNDWq7Fr3g8C7WHpLnBy8yoNpLukxq3bxz9r5",
  "key21": "3CkmTMVmUvuT3q6VTYRd1QbNjvuLbwk33PZ9DRdJywLbXD39qEykXJsRpqybQiv2G2DdCL5seG1WuDhBov6qgxAn",
  "key22": "jsx3SFzD5az2MPToR23TyQNZU3cdjrKuu5H8j21tDpSfGmdysCx1SnwvRvtXVsGHrgakKZC3eG8vtMcmQmVG3Wq",
  "key23": "395zPuwDm2tAhEH4R1Qk4Z9boCxtrkvMZLSHjNWxJ2T27kjeMFjypt97fTHhLWikg6MQJFNg6rKMJck8PE2eHuQa",
  "key24": "3BB8dwcWEDBx7z5mwpRsHTewM5Qf528YmviWAGJNGXq4jasWe7m4Atnnowtq36p8b1LqDhM5xNJXHB8fSirL8SSo",
  "key25": "pJiRNvBzcLGK1L5ZP2zgXUGBRhKxqNKtsA44GSVifogztqMWQATPzgG7c6AJVs5CGiUtYr8qGwmQRbJCHSA6JEk",
  "key26": "3KnmAhKpSqn8g79au3Z4mXe1AHNaevJSQRUrsMfVrNiDjJMWizVydA8VJix8JD5LH3j9RkiUWYP5zNwuTtsLvP8g",
  "key27": "nxMk92Qs6o8aBdMTDpRrjrjqNquMbyq9kY3ZwPAYzfnseHESgiPWLN7x1NZqGX92aXaeqWh5dtYRMSVdkJYNdpq",
  "key28": "5iHyNtEg4MKfw5RFR4cwnnGxYuBqypBKw3iVTw4FtMLkC9518xoUkvKm9KLRLkqeD478gr4njLMNciwbVXMFLAMY",
  "key29": "4snUc1RzqRBpovjTjZvcdMxvxXRQ4g6QydH5jsbwF4tXTCMLnddJ1LmGvN5EY39SP6GbM4QMvQFhk59eJRZ17Pv8",
  "key30": "326v5J6yHL2V1WXo2qquDnyzXAUJ3p49KvXwMh6G5yiyBbpxXgdrqDmNbbwUPQbWdqbv8RRDUehAKnDbfX99gSFR",
  "key31": "2LzRgH9YUC321LQP9j63HjpDqjxG3BTdzZkjS1P8a3aPovBdNuFKnGZMbzZDa7bV78vHukDMFDxn7PUSkwUx86ZS",
  "key32": "3KR4QPVpKUEw8ByDkJaSzaCNk8dEMapWPircftCT499cdPAsHaCnEDfS5iv6DruMdPfkxyZZH7m2eDknYxJ2Gcvf",
  "key33": "5jQeu1AyH1BpkpmSB6QALGqaDG6xpYBi3VZGh67oHb2HBP4uirJc9wnJjSTQs5sHPVBT9isjh1mfHzGHtZMiq4Jp",
  "key34": "5JFtGZsEeMwWwm7pSMfeNBWTwnny2u1AWL3Kc5aBaGbQ1nkBc8S3VnJ2SUW7VAmAg5C9t4u8fnVbtea4FCSzEK6e",
  "key35": "5kpuAuDVGdjL7LGrkjeVEDXJoBCzmfRLKoHiQrMFJVfcZeDyUVgnzjY9VCaM39hdeojWasQcsTB5PGAE8RRRToNq",
  "key36": "2R8nQ8RGLyn8ffuf52igwerCv9Fd9GMvioxp7T29yDR84kDcLP4XSmidGFNyHKUMQd6QUiBFidFygUwrrV6kcvBq",
  "key37": "5ifuXdrmEK6RJ8sT4fm1Qf6hwuvxauBzhLaChceMYk7cEaKhnuqJypFLRzm6bf9k9ZRjsEvHji2VAicBQFub9od",
  "key38": "gHfPK2j4GHMDER7SNw24c7PkRaJncFV35UzuqNzkfV2iHbVpRzHRRPwZCLCpPU5tB3QTtJtDCHZYcmsQqxkbvXa",
  "key39": "4GeXjPAoq4NDu2YeDPDXFdiRN3QiegQ7zrhhL72yU9UfHLZSH9gVEQJn1FC5Gu7bNDDfxZ96CZRhRyMf9d4tRnmE",
  "key40": "5WBNKysML7RGBqx8KPbnAC74scxqSdLpnvQ8NRWcjLfvNTPHL7VpzLo8CQz4sn3NoB8zrtFFx8Pp4X5cXsGkdpUH",
  "key41": "3E5cZP9m7QVWvDjMEYyvaoropSrevCVmNWDub3yAxpyzBJSmNGXsjFn4bSdkz8a2HDBXcSsya2vpgE256k8rMTWw",
  "key42": "5Up1qMzigHTrgZryUMRyDz1fC4djv7cf74ZurgbTXx3JM2VmSQ6Rj6L2aPfWHHWxZhhope2Vb8KJYHv9grJ4Yxr5",
  "key43": "49KewPFWD2TumHwPgrShTHdS6zG3vLfW2wzhRtsn1LpcPHSx6LKKDYyCSxg5vpBAYkSGjNcotqvxZz5ztXptacHT"
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
