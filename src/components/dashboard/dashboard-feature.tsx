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
    "XQvwjWZEWBFkGrMLYrtuc3bR6J4GaQDX3rK87jZnejBtDf7sChQRWS9nrBp9jfEsoZ2zV8rBtEA3MrA7fuJd1J4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pU3hXJv2S24YExCiKJ2NQS6UHJixK4xxT1LY3DyGBPrK8w8GbYpztpMRDutGTBc2QKh6eArdyt5E6Dazq7JAN9o",
  "key1": "zXP5RXss8uHEEYJSYdp7s8Ftnv1ajM43DdZpufVorXJW4sVC9mGuY58B5zgKVKZK14wVNqWLGTs38YYkzsigodj",
  "key2": "58meoHLxmnvJxY1SV6btk2BTSschtvUHaz5eBZMgSj2sKFq3G5uJxdWg1bukfgUYy1VR3amWqHJQJRhS7FsXaKEX",
  "key3": "3e8Pmcbhon3Gy3uBpoN4ecq5518Za1nQxAchXkRhZs37MKnrQZj1yJgFJFeCRuKJmjib2RJGCfvQ7kcQuwWUToJ5",
  "key4": "3fTcgtpMsCZsxTMdxvT8R2U9sTaiwchW3NFPXCMzZtkQpj2BfNJd2J9pmgGb2iruQPddVX4jhNpdqFTKZJyNMNPb",
  "key5": "3BQn8n6E9nMub7WU1XTJ9jKu4wtWKrrAFRqQnYfuDLBsPFztsJPuZpmvaUM16FxebekPas8qGf4vkJ2oXQCb1H1n",
  "key6": "soXnLBdsJqHwDQBXdPzVexFH8HCEzNFEvkdxFxNRGCvrpc4Wme84RfRuWK1Jx4JtvvUAncmLEvZzErqhHwDVG8h",
  "key7": "5QAvLX3gQn8QCPxY4xkSHjXMrHXy7u8ToR8L1BQigpMuNYSD6znQ46nFxBVhHUW5TfiAoQeTP45WGHcw9HN24FhR",
  "key8": "2SG5RcB8dHauL3wCDiAWJwmDVth9vMxy1pSu8ijfony3AvNaB8q1rVmwycoaHkZHT7Ly9U3mHUH21tsyYFJqKnSi",
  "key9": "2SVSJgcmyEFCaQPrJAt7PxMAnwBMcTggGpQDPXCybMjw4bVXecbLT5smWLCDVSgTsctZekRyeniJn48GF4auXdvf",
  "key10": "4iT5TKdBXzjmoyb9cENd84UmbBgV49qoWGqwPXxCKpghXGy8AYmJu1tFkq9vDfCRRJdkNiQ2DVCTiX2vwHJZ9KUL",
  "key11": "QyzmcLVPUVg8rcyXEdQsKi8Hk9jCCpHrHPb3qdCabQV9ga4pCmLf7WHmZjigPUzAvcS3DXjYGycTVUVYytf15Rk",
  "key12": "4RTHJnYBP3JDBBApbNU3qxdYJVwPdmrCKSwBrPDugt3BVJGeKLSWw4Ghk6DVdPmde5xFx3yKHm6n9ujozx2y7V7E",
  "key13": "22AbFoP6nVyC7GmaSFg8JT3o43aqSWZmDzb3UJfbHHY3PLSXwYYuVNuYUzKmj9FxL9AccwkoU4mgNbwRXvwFd4bo",
  "key14": "aLJdiuavGC23vFSBqxHLyQqCwnmUEN98PPu3hw5CpWs8r5WkaTFsfa1j4XcMvCpTvUZtzm1tLEwHTSCi4tGh52o",
  "key15": "2CARp9hMdRK3AfNYQejeuQshRh23y7UjB4xy6Ky97enrpAMyYXKyDKeqvxnUVTBNgEKN2cHwxB1qaRtoa3UZgydp",
  "key16": "37VkSE77Q82b1YKZpaWn2gfNtCYgzNoTRydivLPQAtp7Gp41Am4ZD8ci15ZHUjRcHnnV2BLQJtZhci9hNVrgsUZP",
  "key17": "33hwrTgr73UXrfJwgf5BSwxQZW3Mn7kgk1expr8bCGvCimN3G3eNZc3GuN74d8gzThEfX5ir7iAp9Ccfncedb9wG",
  "key18": "4vscGsn7MAWv5gam8xEoaCLbmMLwMEAD1sCGmvP4y5czCkePFARPe2VPbEfgcid9LBCT6ECoKyQQxB49HZKUaGXG",
  "key19": "3DJjgKxj2WyWEukJTcssFQyAkXKRMyJ8UNh4ab7oWxgnF12Zy5cwXgfg54qNYRr29hdUcVKT1BCqU1VTQ5RVR7Vv",
  "key20": "5iwYe32o2pCn8pefDpoM3jv8jxgHBY6i9T9JMf128N354QpBdVGssrCJs4YzB6pxvgvsxLsP1mZRegtbBWqkRhpz",
  "key21": "41FM2Gec98zpHtQnTTaGi8czDYBi3z3pn9hEJdZLLpWKGU5UkbZnP6Zap1iUq6PBFFBMSkPA9NU9PfQcHMyGrPoC",
  "key22": "42WywjjCxf2fGUVrcYaEnPumWvPipdEu48Vmt7UzfXkcLNPF7Fi16RySbdwGGHymgkiKuDL9Sx5CTU6fsmhmDGEe",
  "key23": "4Gd59SYTt6v2kSs7szdZ92RHxtAN6NBQwivUDaNVU1dLBZ8Sa9R8BSfAVZg6udiDAJcU55YrJYUnczCBJLQa4of3",
  "key24": "3UWdcahMavnQRtNN5gLuSriyiLqrRx9hEvQQ9DzHk8Bq3jmaaUPu5uPaJVuZb7nWT6Db52rEPQSeUXKMsZkf62Pv",
  "key25": "4huwuGySt5w7PV5dL6F8sNzVzHGJVWCg94oPMgX2AgY7WBgAhCu4ux9XuEcbmhCRBHzd8awpzqo9SbQPUj6R8sLt",
  "key26": "5S1m9CuM8BZPQjv46HtHqkyCtJHJaHKtfycHmSv1xm2bLqTKy9e7ttEwgZFSgATakNqudsQrqyLDbCrFTGJ17j3",
  "key27": "5nPPjkdp4rgqqwJLc21v9WgXq72ULngytCqwTFfnRFZ7eWiTdbfwLMj6Nw8FUwY12EPmHef3ZkG9vd8aN83EkAaX",
  "key28": "4qSepPXoVCRKx7CHqFAfHB94oyXafcLX861FMd4EPRg5ZqcptbKz6FprcUTtF8yZfZchxRCqDCmKWpaw5b8byUtv",
  "key29": "umy7wZWLDHZyHLDF15PNJJEKARCKP5RN98Jn8GLX5Gp4wuzKozrZmDrSBtTbqgyxiBGH1DneCewxA5sttQ2SqmV",
  "key30": "3GEhq4i1HHNTkg61UTJiRJSLAamESAVvJq7HxQR1nzYGsDG2bGxP1ovQ8mDX3b2kou9EUqPaHfwP85FnFwqxeFoV",
  "key31": "56ViQJSqbUsntmrsEHvCTWYDtB8jitoyksCRinC8q3tYR6JtfjAoUfEPxNu2YQjiG774Pk5dyW7z1aCM7vKdiKkW",
  "key32": "4zLEGQi3FkEtbhVdV4NTsqZXXaEErbw9e4mEaRt3kMdF11op9JJchYnUTQrpVCeapwaRPysf6YoyPrDPu15YvFKD",
  "key33": "4Fec2tiKkSs7BZcyJ7JHzUeH9FEJxCqbEZ47jy6Vicixi5qnjNww1TjVpUaMxgJbUV61h7K3phh7z5Kaj4S4rXiU",
  "key34": "4wJDXhFpZJ8TA3EiAQwNW9Gk5SgxfwPtAS3BBvCRid5USLGmj27iLZARTawEJZmQonxZBhNMHAhsQ81bABveLTUU",
  "key35": "2nurdP76u3VyN1bzQAXzpJs99w2pzw9a3L3ZFJnkKZjqdqCA54uJVzkgNPmqzph5TyaoKXdgpgsM7D138YgfA3YH",
  "key36": "4eYn9pSN71veAAK1T1kZ4o4ZYmmxpQVquuZm19tY5avX8cLaSPTYfoLH9Ynkspf3uzwW2sHxjctD6aX9CrEUmouf",
  "key37": "58pKfrzcTruaGhsq5GShrgcwUx1B7A4jVmbLbujrbNnmcJKEBjfdPSwPBJWkR6XnFUygPMUmjYr4rZHmNS8ygW2i",
  "key38": "2gMpgB46tiFWr6Ak2YkcDZBQmnpbxagSGAbAs84iga5yrTdYVnuBmQcErJwUBwhUG5cfBUXWKHXmqceCs9VXDEAb",
  "key39": "a9AQTYUjcApunRQeY4ujGQF41CAfG4N4H9Hq15TcE1KPfxvseEGzpeGxzAgQVCLa28D7PQUqbTqZdNHZhyzqnoc",
  "key40": "4rSpTYrm2CtuMjHEg8R8hXmPdjpU4Dp1VkJezdr4X6DisYFXxhtuFJ9YP5YSoF7WzYx6Rkt4XwpNSWoZKEcMUon9",
  "key41": "3SCm49g8NyYUN5PSgGVzMNMoGB2gpPobXuxFAHLmYkRhfNnarXBU6bCfTtngyHcUfN1dT5E7LBDGH8GkDrLgEsc8"
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
