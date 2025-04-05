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
    "3yvcS691V7SePtH5Vd6Z51cE6QukT75Yuni6AigAoe1rhK6xLSBv2pTvWQd8eRE5ytBjAd9T5PzPpnBq7UagyCTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQwFENEVb63G9TXxCPDEFwHAuKGXtGftCXrMkuF12DTxrh5RvF8dvW6FcmFca6V828EoQk4CeLepia8SGzURC7A",
  "key1": "3KbzSQ2ZVpiFgk2hKZ2HtD4H1xKEhDt3QCSZfYLwkDRQcHsxPy9Xx6suEPpCWyLFGTGbhS4p3XQNYhHL3LjAgNNj",
  "key2": "4Qi7koPnyg8wJNagiZj5vzpTfn28afAtZhjj1r5UKxFdeCBGk86WWSBkEpCJdduhMgDXv9mHUiuyrNXaLidXsj1x",
  "key3": "5cNTL4jF84CEMaTRcwQ7zFgTGWXqmi2VM1mdYeYkUy84d5UAWGJ21epYbMaJm2Fg1WAHWbEfvUWmAhdqjYyeA14m",
  "key4": "2UxYJm8peSqbD3Jwa9gwkVFJRA7Jc1JVELtr8QopoBKG8fwY1GA2hsVjgVZzUoVkZSNveUhvfNFVtRQtL3dCeXht",
  "key5": "3LuqtaThznnS9iu1hvvAiz2vcSdubmXw7fZYdR3TxxnM4hs56mMemHFabc4qodhudBLrYuFy9swRr1TzMmyLDqkh",
  "key6": "5KPTgELBvnNviGoUuZbyLNk1LWZy2RPtFozrJfvNET4v84BwebY8K9uS5y5TUqxRby4ZQQ9Q5zX6Hfov5DMqH5Fs",
  "key7": "21pk3R8C2WVae2Bo1Xkic9PUTsjxXUjSgUuxVN9UwdMbB5EHTMuCKZRorutLektxS1KbH4GtvtSZLmAwCJ9MdPEz",
  "key8": "TKi7nSVeEWgjCpF7LQFPsVV8nGGwP3GuToXujmyze2aNoLww2Wa3YVjTbHWLFEMMcE1faFmmgw1NRSMfJqe1jUB",
  "key9": "5d2cCFbmLdN1HYi59CQjrmPCK4if6cF3jHY27zmigF7v1fa9p27agWyM1RPQnQiHz1BbEWGGfamkw22kMXBW3M8z",
  "key10": "4v255cZcew3ZH4xr9SGcV8qmPSRBNgDSLwPpn647cHgsncQrwRjVRHf7fNKSu7caqvnEdwfFWWy3NGEaoMRmzvSA",
  "key11": "376NKnQqZ1ustxAMBSgCn8aLLHuoMs4BdoLPdSLVjEP8f3YJ18unqYKU8Be2tPLvZYhaqazHK6975Jj9c7MKdiqK",
  "key12": "4LjFxiJSR3G6QMCc1STZi1EWzyfdi9yWcjWMjFVJmcbgbKbk9Nvops4JED87bC4rVy1Fsc3NUrEZ7uodTh4zRzoe",
  "key13": "4TzaGjxYQn5sKuaQCCQp7iVUq5iPKUqSbKEYtNKCdZuwjqxMBH81jgKkwSpJUYu53Db4REvksu2tDj5JuXjQcLJy",
  "key14": "2tHVWpZrLpMpiNVodUn9Yh1RK88YtdEmfiPxgpkm7dxnEg48V8rAHboDzBcs5trbVkG7oM7Y8wG87KXrgLL4DFZC",
  "key15": "25yibQ6VKggSfmug76a455B36d86F3BRzULdTR4q1BRhDSwNyHDDkdaBRdpqk3orKFJnwFvMnGKAB21uyU2KxNkG",
  "key16": "3J4Ej2pU4UiSouU53Cv4cM91j227g2pyrG7iJAGzDWw7Mf1QpGbjoLvQrMF1McX1QDxvCP9ZPLHtWL2TEarwgSxW",
  "key17": "549LXY5Y8H3HM12pCW85vZe9kkuKUdAxdvX5T5fZDoVurifG9Aq37qEdXPPn6cQuio3BU7bXb3JsU82icK11gReo",
  "key18": "3YS4JF4256GvZ5VPGxADcSzqZsGXoef2zqmrhj8hwhE8JyBJJ6xFkQGbtJKRCLTzKhrN1rZsoxTqkf51xzsn7Ay4",
  "key19": "266ZEcWLJ5rMaajpEUPPoHecRx5hHaotiuQdHhsSHzjHsGszXE6xqP2Ce4iDaFaWUzE1zeUooTt7Qiqkg9DE3cur",
  "key20": "52gW8S1U6vxHCsnEXwJZwe8Ubnqo9ujE9mEZsTwerGeajQH1p456pMnbmShN8L5qkLXoRL3gZh28u1STHFxociwH",
  "key21": "4bKUiiDZ2FVcuGShkZthj1UUrgShmsyP3sSm9QuyWCXr9K6617JTDgReS1tubjNp9RCsWYx9p7JGV31Yuj8EbMjT",
  "key22": "4D79fRY53ASNekHRkawtJ1soE6yh1DidsxUKKnvV6oAGe3ufFxkv7hf114DPC2fTWtJWVaEJhLv6annxKsjpbM7q",
  "key23": "5GKoN6SkFRyLmKecoALTwYiY8dcHQtpNYTfKssvjVRtkRKmcnP1Lnb7pCNEkfY1JeMHbaAzqonW3ZFF1XVNL63sP",
  "key24": "3w8VXjUvhA7Skf8ufMU2ocbhpLdJ8vZeuMNPTNWcdeE7xf86h61ux67NysCWvpWzNUd6y2Q9DmcJbpsRfTjHgyR7",
  "key25": "27PkahtJAubphcSNoqfGE79Hm5xfFoZWxb1n1c1tor4ypSBM7nHPxWEeH5oRboVBMpd8ACpGM1SdTGwDAPoev7bH",
  "key26": "3hoGokyLHWuVGufy566admq6WFXLCKYs5setgmwsY2xaCgNVsKXrdCv5qFhZpbMXZ54Vsx2GdEAWF2CgvYyPxu1Z",
  "key27": "5kz8EJ7eu7sPcCcrFArctpoTfa7MeisYvQ6gEvUzSWgUaXJZ9uwXMKT7XXi7PKn58UinxBerSgP1MSBrTRi8VLGY",
  "key28": "3CbdEyeJvK9ZuRNXNXW3krGMxdjCopaUxec7BMi5GiUaUC9xFnkZqTxJur5Utd2xwGGcbY7vSAhqcg2fe6j1DXee",
  "key29": "3LBgkgT2Ak8ZbH4YMrFuYV25buLLwocJstZpLejK1yeERXvNU19QpwamZrqpo4XVM8GUCVdPxzrFu7g3wmBaQ451",
  "key30": "5LNhQA99ZB5LwQAZcE2nVpa25FXVerNtRXTzsAGtk7uA5cFyDKsapKTT188Yz2wzo7H1WF6DFbvdbDV2XHBnk1PR",
  "key31": "GjkUMM8EiU7JeGZGV4HmVjxmg9WoqwM4E4euGCLe2nEYASAxTwdMKcY59X6jDU6PDVQDMiAuztJeNWHkSHk6vtD",
  "key32": "4FfoLyncdvKFB3WbnngR2qAxJV1oFa17TUMiwWAUbdrMftC6uEn77wtcGJKRtnGbz6jzDtTMHjWmniGSky7RA9Hk",
  "key33": "3uWJkBN4L4PGUBFjF3ns17vW7MPzCDtAXGF1ZtTqCAtwatf13XhQE4DzEpe2vEXShq9sdFeaM44gVoH59nAypKKd",
  "key34": "5Y8Qfck4D7XJ3BHtC3E86Zeuh5Xgxuz4JLtjbrSGUAeY7mN7ALPwUXPvU8Ahm1RXzVcUBStsxK89uAVpe4zUZabt",
  "key35": "5BYFjZPcVBu6XZcbgV8LzD69PBvjKGVG6Mk1NKdNFQK2fpPvRL6p5NJ9LFDkSd5PgFgcmczsRUTHnrbsXTvtHV8w",
  "key36": "BzdGzedQA2skNfX5NJevw8DVxKgTkQv86sWP4nZEXhX3PVvzAo4PeZpiksmRAMdbR2m3CxSGxNkQgbHw5Z3mo5x",
  "key37": "5EpSqPnUQ9jUypWpce8HEWNh1ud9oZMQ4j7x7LZuQ7ucobhYVLYaRX8yHCJ6xNZd7ozRJabpf9yAWYaopmsPgnoR",
  "key38": "4NE41oRabU59kNWKbLMSQzZi1ADC6YYbV6EewCKXb8i33vAfLCjFRhevW7hLeYzxLTHMJTCkkf65RiKDKFLzxdFB",
  "key39": "3BuMQsgS6keiQqoFkrcuDYTEV4MgnhiykkxgN1sLr9oep2yowdiVrLwJvrxKrNbqjdwFo8sExLxyethwofQcKTvq",
  "key40": "4Vi7AeVRpJj7kE6Npp4ou3Hp9yntwPBqsmYHH8phEJcX7euL4jwsSh85Y66E5hQ4fMo73H6qYRNUJCth3LQyxA9B",
  "key41": "5bVziZjwUChAqT3ejYCa75iaJmazHXXciyG9GXkFxbAkttpwznQsU2NuCemJV4UMwGGk9cHw5XKRo8XAAbohwAX"
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
