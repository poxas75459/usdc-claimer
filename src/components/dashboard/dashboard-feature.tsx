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
    "4WHbqGEjKzRnNF5DBszgUrEtPe9UwEApA8V85hdLwhfBwFKuryGBqq4xoQxt8LwPfVtnyRg8Z3evR4yYzAtGhXcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cqbpVP3UdnaWwq6v3BusTRhLUVUKjfm57WnTgfof6m79tp53zDtWDjzTGp7XZR3DyUv7aTuwtok57daZ3JvtwJr",
  "key1": "4dj7HJDYQ73zzSZ78J2kuj9iiSmTkQqFFuc32ETGpDpWEXMub94XnqYcSuVfpFcW9bEty4WhRLz3copCKMwbXWqa",
  "key2": "2GpGpzmEegN4CuWJebdrEiMMjyBxNCHcsfGM39F5ffwwLYXAVLk3pXf4NTACwc38FR5AErzJ8znrghc3wRLw1shB",
  "key3": "KJRTkfgi3yJHBAPrFmZ9PweFCWDvkxA9ZPUPxaiuJofPyPKhy5jbKmF7bCpXw2aRoyq9FFKACnyD6g1duHDuMKg",
  "key4": "krLNTrY2FRrLHsGqCarS7HMLbWAWQcNzW4nf1wXQCMnWLdzNkVQ58UjkgLpLEQcqXoztCgesfitCUi2tdbNvhBo",
  "key5": "2G5vyRs4pTJ4ETeQa8LXARejTkqohxCudLGCj5PRZ1tGhyT9GamA4qpQeXshQct6L9QvYmjxB8fh1Ka4YxpHLWKK",
  "key6": "4ghDULAP1gvmTTYhUzpXo9Pa1SzLgCshZgUrNuAXVsaEzVkaqRGeAgg97AiQCNQuKXPpqpJNMFiyVmCBsAxX7seC",
  "key7": "4BzA7LQavhwWWSvvhCH98ZYk92N55aQWrToLR5WEgLbC9LdiwFkmwNXbJ1Jw1mdv9XF8jnpSh5n79HA4HZeXCFUU",
  "key8": "3oakSNjN8uRLVYYQB3h6Fdw4usWs9u95R8ELfJALbzbLqaBEmfkZwPRCT9sR3xaCLrQHZWkY4mGALb6YeKQbCwtr",
  "key9": "BGfaUBAm9ahyjr2QCwpdmTj3jRo9LvD6broCz8aK5yCwjosWh4HsbHU39fZpbkZqtW28YDxG4dcDb2sj35GVEVZ",
  "key10": "23zKtabVA4bXUCbf85CDLRcsLZpvWK5GFTFaf2Zge1XDzKAhb4kkefTqc3dKvi1ESSseL3sf4ZM78zckm2r9UT9u",
  "key11": "3AXwpfBofVYpaneprg6rG3TtKd7jXsT47jr7X3i98MpSkxQjysrnrFyFWkrDT43ygRGiCCgZMh3wVAvwQaH8hLoN",
  "key12": "45Kxyo44jb4dFqpxsNWLpKoZGL1LD8dHmzS35wzFBbj1VwoVUWZYMBa1GUVYW3iwaHhUJEpar37HUoPrWuUhrMa9",
  "key13": "3vhJZw4sQbR5Vi1VwnA5jhJHXSsJjshavsmFGAJHSW47rj2pSzhSrCJmrqPpekpFGns8or7iDoggE8PsxpjwpK7S",
  "key14": "4jXg81nxW852qeYKVX9nZkq1sxQstzfpfAujq7tkRwuuJ1MYpYFGgpAap72urf4jDBmZcPYsX83UBx9WCaDBeeiv",
  "key15": "onu1iECmuKHCbySQA21qhmDwCNDSgrvEtzKXxnEcer7Sf1Tr5MtVnZrcScKrKPH739hLWHufsx9b2ZbcJWts6W9",
  "key16": "2f1X37vZofMGbAB82RKh3G9ZTm1KuYvuWS2C2Szvy5o3uweGxSZT2yjfncmpuLxrAujYDpAw9F2sahoNzzxedzJ9",
  "key17": "5RsmwN4EU6CJscGJ2CMGTn3nnGveYqxQJMpPw55RSRa11uoRx5cFzqY4xifohvkhQ5SBn4g1M6gMqQLAygGxoXpm",
  "key18": "3a1jiay3vU4jeNbpCfbwPgCTtA8mVRCmFRfYrwEcQ5ewvwMbuVNkyrFu3kzvRUN4kpPWCfcsgg1SHdQRZrRQPKMa",
  "key19": "5K3HjBBWv2xohYFKHF5UvLFbmPTt6sWkxEbG1JQqa1gKaNBh2je7XduFHdwkWPtaXoJXQxEG6a4C9EZKNrFcZjqM",
  "key20": "3hg8jK7UTAAy7T89bhnnBZTBPxVppAYavE79XEQf6i5uZQX6MHnabbPqFqVgPAKRgceKCgpJWfFPuJP53S6etrDA",
  "key21": "4Y9tts23gsh1DguYRo3hcg45aPE9B23qTziZVBs9Sw3SZKjYHZqzLsBf9856ipd5jhHe7MZ9qS3EGozsBrWnviwe",
  "key22": "24H4SKWWG5pkNrBvTVb4kYjrGNZqMtZELMJyzBSFhqpUGCnA81CtReqzi75VDprjTbhqpcoH6fV3NEBY7Z1B4Rqc",
  "key23": "2WXwZxAaZ9C5p5ry5J21KLfGectTZbtgBm172a2TtyPZrSK4USGK3SiCPfMKZsrKpmoGQPB3GLJTeNpEB3vL8Q2Y",
  "key24": "2mjbW1ZzGS5Doqe2m6RWgD4iFiY2eegseznBn5reAtVAshCZ9b15onj5NA6CiswXsynQyeSe4sMSTHFmin9qC84z",
  "key25": "wZG9JkTmNSU2EhrcvavC7187HQNSqHJdmbzmRzpNDXCw2QHHPYXfQT4W1bgDTDtUNdYTf94XMdbLMr2PdfyK47V",
  "key26": "3hbbmnxwn44qU58o88v8yEA5zrh34TLaJ1nQ6QoTzU2FLxbbC4qz6oydeiDqJTP5hBWDz9ncPELGb4YAcvgRa135",
  "key27": "2JvkxhazMxg9qJLonLMbA8ipD2VNbLKZNM81igf7PMiy29gu7x7JyiHzirfZzwLTxsRizDCdrK5aeuwuB13SnN3M",
  "key28": "3yJGwqgN1kimzYEHuDqv8YmhdFaKuatPgcW2w47NXM35Zw8UwtRrBm5ZnrG54BZ4Z8o3tTLzXPzJxEzGv639cq9S",
  "key29": "3zFGdmTA419exjkK1zs9LByGmrd7c8A616RZQ6p5rBCzJBBCZbpJVWbRqQv7QpBGAgtCDAwkDJEzpgpXi1w9fNU",
  "key30": "4fHFJeFzwcY55bG8mxwbrzfdqYS8NYTdm34dDKp147jtxKu2dBxhah8ALqRHZn4a9tE5KsB6R3tmMJwRCUayBeFT",
  "key31": "2YM9FHddzZRKGoNq6P32XAKM2kA9bXn66gjDjrUv6VhpMj2VqQrWsNqKWXR9wUWxKrotMg1tmgKciZZzdAA8HYze",
  "key32": "3e5sezdZad7iGkjYVtBJtZD74PUucZp8MVFsgMjA7SKXUwScWonosAoivMqed6Dn3VicDJN7j6jmWgRZ15z7rFtf",
  "key33": "47vhAQjTr8Ez1YepEskFXZ2Nr69DhcKiXbrADk63yL4RQuqhzipJZvioz6WchnGwgye8AZx4PwWhRafuipPBz1UP",
  "key34": "HdyWQBvcozpBS8RxPcUwqf8Psdn244CK4uoeBNnJ3uynQFGyXGzjgQwazohR7W571HoNvuycNeJ8QroMxszK3Np",
  "key35": "3W1UvH6FVL61zS3aUXJARoHKwm3ScoRoC3uvC2SCqHAZffARUEKExtvuUYwws6cnfWzmaXMh2y67SmMkqpwcaJ1j",
  "key36": "2ZHt8VRxdR2uRemKgCTswMMjLS6Yzj19PfLVHExgBJ4U1nQYPGNRGwR4ARH7a5cuuDErmtAkxn7vu4CQSjwLbv4M",
  "key37": "4pn3qYoJjavajsRVbqReJH5EsS1c4xUMa63DtVpYZb3ANZ6Q5WfHgynyynqcdXZPhouDUusiM1fLG12jXMCy6mdB",
  "key38": "5rKibnBJSUmZgD9vz26EVHUUgSqnHDggjxHStui39z1uXm4b12vY8f3DFFJ9RjWnVV7Totxv7GXUZdvbtnPWU6hF",
  "key39": "47QQ69ZyXsfT2NFaj7JRyuWAHKC7fpxHmos7eN5xKNXZchgaPtU2DtL3VfnDkLokg4CxJ3ej3164gY47keigweJA",
  "key40": "5o2cP6xtkDTKi6JFadTYbBKgLifsF1zk9pnjcUycVJQvaF8o525KJBHxsPfi7ZcUKHhQDAHdGuBMVwdfMNqbs4sv",
  "key41": "4my32gZt8jPZfGZP8N1dCE4G5VuvRLtQ7kzxugEwAgpAzQJnmraLTa5io3CxxpUY9ytG7zqoWpxXViF5mbFc1zCV",
  "key42": "3zEfocZeWijvavuLytsHU4pF8XUb1Yc5iwypjmsfVirxc8PxB6boNVr2a63ujoHahTcmJ9hPSpUJ82EMAwZifyg7",
  "key43": "4GMFPtHLGxeHNhFCimWweSBV7EEED5TupJUsGLXwFcmXnqTt1zxWimTgFspvD5mRUASP5rV9W2M35DC7XHWNDZNb",
  "key44": "jxCf84WLkwGtMAwnn1srajvazDBwbrHkoKGuaeo2qpqBuAjMt6whF9ao6qGaypAs2zH7ayNQXpDGCNN637DjpQd",
  "key45": "3WXYygQNVr6zd8sj96D9TKQCiedwBnsD9eihiPr2PEpFNVMfejdRrHfagFR9KjjPeybQLmQxGZEqjTRPLHUPGLWZ",
  "key46": "2HN5vzB1XaxapK1BdvGfj7kuKNVEkQeuRxEacDgsggSyGxKYomPbFVFStYNNTsNSUPL7KATo9x5FSw4w1FMmQNZv",
  "key47": "3psh2HJ4ENbamhZ8aHwvzqUYXo27eMkePvfmTadNtwgGA8PdenhPcYwMpis2wqbfmt5QfACUEqM6fi3ANmLDY1TH",
  "key48": "5KxRgSWEUMToW25KKGsdeJSfTGrt5pMhQQsreboR3fEZnZD3HShtM8fdkmX2panSzkJFTAYsQWGNEhVyvXbygwT2"
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
