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
    "K3HjpC5oVAnihpaLC693stVEbCyZ49oj1GB6fFQipg2tJQmoteyewx4YDD3kJBeWcDGnEBqQ58WSxQHLoRERUJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEWeU5ciLLjNVy6YppXw1f657dFJygywcmw4vLLdDesn8FGh7qmDaKKm2wciXyqpsELJr8UUrXJE6rvteFvZgac",
  "key1": "5dMpJUbYVryXX2M113925pdkSei54yVDbje9udrPTExmAduF2Twuyi2ez1PF1R8cmhNC8DB9pU4yyS5Lg84jvhGN",
  "key2": "2hd9hBXdhvu54hdUVLXGU4cW14gYnA1nGYKcsnYZEPt93Bva3YWkQu6XyweznntvUwqPPvzv1scK8b1Lp4n17bZe",
  "key3": "5yaCJ9CEEAWf8HakdhNihdvLefZewBqVdiRkAeP56GknDyo89AzLDhWf2nC4du8BESf6SeJ4KsucJWpbf7Yid9SS",
  "key4": "5Fhh5yZnVvD2PRkvA5RXioZiQPA46hEa3WRFvKwEdamsu7NktsmSH5KfZLeP9rEPjoTGURosRy2Eqp6prDUNjwEq",
  "key5": "5cWCdWHurLritipcTafpi9kd8d4zqRn11fohLLhuxPvMqeqfpQy6uSGkY8QqtKN1snd8ZPtaWbZwkr7WGcs5cNqw",
  "key6": "4Edebtu7DaieXr8zBWGA6tgSKPXfsH1v1wQUw5HPJ7LygaUNTZtm37M3MpuRw1nrny18gGedny5R1tKwZyu22j4k",
  "key7": "2S35VqcVdTcviX3pacDTzzdbddssgJk7aqbvhKJ1HQCtTEnzA7EUDvFcGWHVLqxLtbw8u2QrvsKma8CTPvKRWsG3",
  "key8": "3K4NToQkHk5RbzoXMjB9YwBbKH4CjHbfL73wUKsd5zSXZiE7hp9UaX2VePMCDKgGpjxQRXdKjeXMV2dP7acppLaz",
  "key9": "pErnzUAn2rbxMKCP7ZHCyfaTL5dabyc6dKFvhf414Gy57b1XyfrNQDpnwkqD31NKozQhHdp6ZPtPmDff4R49u5R",
  "key10": "56c3AaKzGWP4Ac7YLGCnMowTxEHJKvG3FWWbg2SQHfs9n7GihyxcCMxFcbW5w3hjy4WcrXeQjQNfwWa9PGEtX5i5",
  "key11": "2zXbSufKdYLFjjcpvTBPK3ZAoyvSzPiE6GX48joNwDS8UPVBqW1qvTAB6DaGwnkQGXmJmxRYFHwtQm36t5UFaQdc",
  "key12": "56FyVkUWSVNm3PGSGJa7U1zZSyE8EW5JeGBkvZ4qVXBMpgFwJEvaog18Bvhz1XhrivhQBKipuacscPfEyQQfVPDn",
  "key13": "5i3f9vYiWEdsBqdgmRMC51PxwnzsVph8c8pN1gsKgTRcVJ3rX1xr1gAuS7ta4dkoCotcSvp1vqkqz8LJoGvfLr6c",
  "key14": "4CJEsJYTfpzcsmHdXiwurt2s6nct8nCT1JUqt64HFPGS1Pm8nCk5ywpQoi6GNjiLprh9e7TuBhswwJhdMUg4UmrJ",
  "key15": "4PFMxonMSQuS3fJzeZeLwNPgmppUdWt143RXBPAy8tzJVwkridHYQpLZGVtKXiPeEXJ2ETpLMhWTzeFf6rhb72DQ",
  "key16": "522UeYZx4i2QD71Zhnhsmmy6iEpdmLHorVa2DjiQw42GgrHpPSUrvNproph8CDGdh7td1imDjGJ8eXNdM8Nhbt15",
  "key17": "3HmUMyS5Hi5emu5SWxhMqGUWzd3qpB96jqZdvzUXZkJjCm8Urr4KtntrAS6EY1TD3j92oDspMP8kUpqC6T13QNLh",
  "key18": "3K1ouC6qvjadpq13aNarfD8X4DXw1oEwHZq7dvVGA8gSCPR2pMyivCKLRfzRHWCuqTz6poqm1ytc6yfKFs64HAMr",
  "key19": "4rvPCnhBS86tZag8twcgC5SE2KBDXLuimz6SWMKkKCnGzsN1HXcroubAxT8VRib8B2ADN6A7iGCYQtfTrt5ejjar",
  "key20": "4aio1dkx7NenUt81g1BcRPLapbWj4m6Lys7P9gzyxfDnmWqQaykMXaVqL6evw8de1XVCiXgeEBB3spUXHo7ZyY9x",
  "key21": "3yAbutJQbdB3LJrR4YLjeKvfYQssxRaUr3rB7ST9wu5dmQbvrWV7WXXDwZXs6DaK6N7KbSAWS4diW9FzwcSKF3pS",
  "key22": "2m2QCWVbKnWhRitBAohSpnnd5gegPYh19aHfTCxv1mG4Qmx5aZ5LRtwjhxM7Ayn4u99NCoaub684p5iQaNmmw4px",
  "key23": "wDCDag6nF6FbbMCeXevL8C5tWYi2j7b9d5sL9GGaLaq3NjJ9Wc2yx618kG7DAUJP9V73gy9yZpamasVmhmBxoYB",
  "key24": "74WzngS8mXb14ExvTWX3cRRLyyT797eSRmRC8AcQ55SmdptjC81ZCvn1rKyU9Lm1oCi8V3NyZQfmsAhmXcpZh4x",
  "key25": "5aVKFGKbXPoyY789kVGEmZR2cbRmCWKmzCkfaEXDbd391RoTZU7SWi3Q5RGPPJbM3vJiQJQCchmP1tPKmGWSTM2F",
  "key26": "3S5sh3EtvMjD3wHoABCD9Bw69nERMZzBg2sXV4jL11iRKEtVzJCWsRiUF6M6GdFoihGBYEaEcWHerUcEkKPy9gns",
  "key27": "4qKzR19GiVYnNaKpRapmNvMo3Dc7xrZgaQW5xu95LUaFxR2LpN1MViJ8D1fBAQCoLucefGjwruXL2rcF3u9ZYVt8",
  "key28": "2w4PKTr8GRaTSC92eGpy84YzvFBr5cV6gT2dqAXRuscqrAwJF5R9nuq51XJQ3tpnbNnk273czki5vaYRUZ2B3M1y",
  "key29": "5NdQfPgqypCN642PL132SLxSNkBaP7prggwfPjimiw8cutSNwzcxiBAURhzQCGMXy3nw4nwXCvHmPvdbQzEAvaFU",
  "key30": "AQv2VNyJ1XVE8j6P9NMWXaHF8MuUPfd9244JPG8zisnmFpiF6wZyrBEWyyknSMRW2bWThvp2UgcoocmqDXYmZ9x",
  "key31": "2oNzBiTorw9F9E7dEmyxa7GzMNDHQHuqKpEsomNyGKNdr5UuuYMpmrZdiWrC5vj5e2q4vTVia7h5SF74eftVx25W",
  "key32": "5aCgjhtHaYkUaAQtUzRcRTNQu6q3aHVaknumTskyXFQHwYvSZWBkebB95v2n1NN4SiuGdY2Uakdvh3pHJaHXRBu1",
  "key33": "g3Qt1dDzPMpyhXUBDntDRBiEUueuHvjtKV7WJV2NRQaYw8rcRtQLdhQPUEVKmeza1CR2gqG66MtC9gfhcezhskE",
  "key34": "5pPihjNptkHGX5qcJnAWNUuiHdiLdjhFAd1x9Xs4ju8MTyZ7cEoUce1adncJDVztvuZrVY2JdiSVov5qhgpoLFW5",
  "key35": "HFyE3UF7dEwoBMwa5kVCUMm3M65MdFKuvdzweU8Db347S4q4vReX8zkseYzxbDi5qHeZptBjrPnu4nVQLmdAbmU",
  "key36": "3ygmHuTGDVtDdzYEu1yL8C4Bafm2Dogiey54hGi2LDgFnu1NsKJtnKmEyQoKSMaoeiXoAqNW32DZVgUgkywrhCMY",
  "key37": "oj2v7s3VhTg6JtAXVC8XLrz9xc46RMbbbTWGw6SiAAi6cA3FiqR5f3LmD7FCZNpCGjrMJ9rywW2exXXfLXn4rXw"
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
