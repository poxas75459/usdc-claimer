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
    "61MPz5TovJgVy3MBWVPA3j8XegwoawNWg7pFG4tEFHCThFpcDMfpRK24inejpY55oF5dRQ7nv4cvyqdbk9RFjQxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exSYWRZJn4iqzsETBotciftRmGfRqFCrrfWwAAr4ddtFX6ZfMEXs9iPQGP2T7kxZMEKU96ePYUnuDaqv2NCgD3r",
  "key1": "3Rr7ALcgbWVWJ64ERSmQcvtbX8BxhL1D4Tm3EZK44EX5mQUKDCTMJhxLmrgpSA5MYRK5Kx36QvKRxopHoYJ1JPJP",
  "key2": "4gjBbL6HFQoXy66EHcu7mESAexqJDC9J832PpFnmFXqV2khasBBd9GCQboGZxfLQAZDJy2UYkddnzK9zGntkZg8e",
  "key3": "2Jc26vREgk3nyBREtpfE2uk18tqTzqHtK41xK3yUmV1aanevLynSiFGbf1RGc2tkCRSiXQeYh5TH47146iwdQdF9",
  "key4": "44DrzXhmop939D8mBH766Y5pPHngFbMa2iWBZGghkTeRauSMuCERUw6TUwketk6j9X2ahPxcwZV7F4VazUEcAief",
  "key5": "4yQsTHYXE2iQAAet1Dc3Bc1gpkpZpiCPMKmHJA7EMAijT5XFrZuPtMvapkHgaDw81maditjovGh6ykQTacBngCRS",
  "key6": "5eupaJ4WCBwPru8jnNXuhd13xgg6vnmzNBqYF6d9qXNUvHwKSnhHypVsbvZniU1ssPLVXAEd7VdUtRRR5nRrjoHB",
  "key7": "31Nz9fbXcGNo1okSzxjFYVvsVkcPLBLQusgchNeum64yqWEVYdaDp55TGmiwZsLFZ4gTCpGKezof9gChGXnYQVFq",
  "key8": "5ZgUS3hHeh11i1PiUJBZ2bppUHTGKjgusg1uigBME81RV5WWfrAXyhngZZ4vRwjnU4y5yMz51sY2j5Ev99zHhJLX",
  "key9": "5g9BhyCejEnpBChriRCSpbWyiCY3wNhYoxXsruxbF69M74ZZWV25gfWqQxkWsiYY72zrEvH56u4xcT9ew4UDNpTV",
  "key10": "3xJ6AkJV6FHnfDykzEA2uZUv8qvjsfuucYf5DyoyoG73zu7XnReFeFrKKZwf34o5S3Z5RwSriP8Y5iXRjnE1m8RX",
  "key11": "4Zsvv6y54NWmoWLe9V37jWTsR9CTPn2CuMYMUb5Cd3H1NttGGyb1CHvML9sg9HW1p9NxhjGdCSpvoTeQewDqH9B1",
  "key12": "2gVVa6oeV5m6u8SeuyU6CQeFY6wto7LCzWGHbo82LnKovpwLuiC6g4CTzqUZFWdwsHgRiwcvqRi7yobiCdJKMJCS",
  "key13": "4VKHLKgen8kxrzGmogkxi6D9agWthQgDHo6FDnLov3pAzhtorZ3fFYWnEJP4z1iV2TWJGdjq483MGxEyNYHWENr9",
  "key14": "vn6aJQJ3W6TAuZr3szTjn58biLkXjnjSbrFx1CfGhuh34e4cTnWvoYGoLe4VR74mBVA5rxx9R8qXrgLnfPAKtD9",
  "key15": "5wu7KoHfPVE7tJu2qixWFfmTpVeXS3PMi7NLcYztkRHaQxVWYoBG34cCQtTRCjFG38W8NsvhjJt41KrLVjP4UP6w",
  "key16": "Aqm5Z7uAD21tE4Q6ZP2qWgaHXZTtcrSvjxeZiXxWxZXSiSWqW2aJrKY39u56GJvtm9jHCyYpJSEKqubELpQFpJy",
  "key17": "2phPDRjW8HE7ZBLQ93qV4SumRhXNtTZQUDxGA9RFvENNovWqFp6s1nnA5Ur1iDCucyyRwYbhkQXC8JnUjN5X6Vvk",
  "key18": "2EQGJBtWn7BXT5oax7g14kDneYjwHEaFCgCzY1nA6UimPC7AmvcAmDSJu93RRiMfAbVm1U7dkv15LKNYc4keLx4E",
  "key19": "4oKLkYykv7pH9Qd69QGweoZF1f1zd3Lg3YpvkWQ2FZzUQetFC9fKXsGGu7gYBhdGjLgffsrqgoeKvFi1hePH38WZ",
  "key20": "5x4eZeUgAh3CNem2HoxiLPVyY5CPzese6HNYEoEKkoBW1T6QnMQTXbwLKEE75UTXskZ1ERA9wWM1iQ9kNpePBWN3",
  "key21": "5cgxP23kkZoJcMCxjFkPSBLKAZ49sqGEpqX267aWu6kuRmGifatYnCJTZNvVnQ1a6WTMQBoKrwrJXpW1HfrfhJF1",
  "key22": "2Xejf5HL9cTfi38hssmK8NHEfvtmnvuPT5X6QBb3XySGew8zKu4WfSb7rchbb2eVHyuMTwbN9xmBdrBkKHRHBJ2g",
  "key23": "2NMENVWogb4Ffyjsk2PFyvA4RDhJr2pAW7xk7Bo2x6veagmvGSMB1H6W5nQtYufC8njmt4PMASvci9sWiqoCzGTo",
  "key24": "219eaykQWb9H5fbV4CUZULm6L2vxq4e4namL3Vb52onTXhgjMnrmbvx4ufnLzgQCxKAVpvunaCTPtWCMi5jiUcEk",
  "key25": "2SEWxKVKjp71QqAAiAwBSC6kNRVuViPUT2HMpcXKYC4jvGyev8dUFNsqrxzWMtwokpmNt9DETqvEEugLvdvUbPuH",
  "key26": "5PDuDgUomMkmeBott6Eg6BTR1iqsu2x6GMSEpBfnbddrGKgSdQWipsCtikKYQMV8r5fQK7htSjmTEKoN2jr84Gqo",
  "key27": "4iiXp5fZZQykLss42R7iq4jB3pmoMHNuHvJPVkmtPyr49MYGNe6sj8qrG1KxKxYZHaNGXzhqxRr9pQYnR3wcjoWf",
  "key28": "3TQMqe2MH2WNCZx2pfi9aTMMgGTNQANcSR5yYBR2ELidGRWc5x5zK6z4hpvJGriL19P3RCF29CJhG2dCryypJcKH",
  "key29": "2bk9HDKNGBX2Um9y4kGgkd8rREzLtZZc75Vw424CbttZG9RgJEPjwMQCi2e4wAaoCHQNG4Cx8BxLgsDyoyAHQrq2",
  "key30": "3JRGMLf43si2CWrZG5xmpW23fGzsh7SEE7wYf4vqzY6ymMHZyWmX3e45sjc6jjCz6J6pkDHcd1SLZTGkfFhJhXqT",
  "key31": "4WQY2jCNYkzHGAGJkjWCTNZYBj9VSzTJMPpczj2hg4msMoL98CbTwH7qL43f1Hmk8EQJ1u2UtRbQz2ngP2Xz8HLn",
  "key32": "5pSRUWMfoUpJKX7ZzFFK9bG939g1rwtBxCAnYawGGx5qWZTXVqAzqShb6fLsJ2zMc4FQtJndqyFJh5KnNpFyDTpM",
  "key33": "22md5wrx2kUCa9DNwqLqcsZhwoQW7ZAPaEibtL2Ndju51YGyEYhWGE1rWE1n9JsdW5we8d1hzS6yMerfmminsg3k",
  "key34": "4PtsHNAcXVU8wnbysJ6XFihJZXDCE23ikameJoofGQR3M7Dddg7vgP5La9bM7hB9T3nbNa6nhG8tm2uMQ7iFsobN",
  "key35": "62C7PZ2MXsGmTMdq7ALfeaEPTJqau9Fb3uGFVzMHLdqWzFX9QZY7Br52qqYYqcmh7NW2XYN1zT1GXMrULVsY3QVc",
  "key36": "3TdjYssd1DmheQWVAQLxyLqzbXaV8hjqtGgWFRM6vaDhrm4BWbuNop5dqm7GLpPXyNSgT9XAHB8rH29jpF4kwu34",
  "key37": "66jT8rPNpE5FtoC7AdLXmgAW89tgsvGToskyBFNGh954CACB1QPC1v9cPwydYvU7rr93RgFqKgsft4c9sqL6jeFT",
  "key38": "4pidB278gmu6VYfrRmjhTDfjwgFbbGdNFUEjTAiEV7945mQc1gZuBwiEcQRmytqZqGzTzrWjxbgkPmPtczWwkfcp",
  "key39": "5UDrDmxZ44etmEQKyspZBuEadfCq9rdHhiqUup3SNNQJAPSK1ZeRwqcy5XfXkrwEe1dnyfKSW33AkzJcJALcCJC4",
  "key40": "5no2e45nckNg28FNGAidVLvp4QXe8BKCUYX5yMPY3X5yX6Vas6JHWFH9Qe82Pm4UvsLtsd6TFvdoG2UyUVykk7Zy",
  "key41": "2uQu6v32pN4kXrGoJwFaE41CHd3NqzuZPNALCUXdcpLkBCtzpnPp5q93V93Yf3uUGHLwh8nwqYiJL7LhaeTeByK8",
  "key42": "5hdJtSkYGwWgo6CduB2eWiP5n1YnFxMfSvWD75D1cYTiJ45b97WVbrvSesPr51R7qSRs1AndS6EDgj7QbX3abQ6Z",
  "key43": "umFJqFmmWaksBAvuf1XxsUyuSU2dCJm1vo8sKrBHxY2NxNBXGxvoBPaoBQi4ihWS2CQ763dJazETRW8ACufumHL",
  "key44": "5juKvhP58nyu7h2g2NSMZjTEF7j3nNjcPEPg9gaVwsL96brYBK4B6izF9Z67ZRyPBPcvL1D63gc7781jCPXtMuar",
  "key45": "2weAoB3UeQvtVFFVXoRgdGpe6mYTo9bRZfepj8jRq44hZs4yRXfroqg6xngCzYWwpdcGN97skgyc43WbC8KEVWBS",
  "key46": "53f4QhtGtBVxBwynU9ioJzhrXC6qpdzETE8hD9wKAGUmqchhYPbjcCaiDR1Nbyctb7kUpGN74NLctoSrgxLhtnrT"
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
