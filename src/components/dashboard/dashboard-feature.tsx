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
    "5q1jK6RFNyntFqeDvfh2trFbx8zBZ15oMgYwCqTVLQb1EBSHerBRiqAfJzfgmRumfjDGe1m7eUNY6skxFS4cAPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35g1pJqQyoNafppoLGJSmLBEz6WLHkE4Qyja5GKzdtR9XpELMZc8ceMFfqAMvHgzM4oi47rB5YVkiqRzNCcfUSWL",
  "key1": "Rm7CWgfbPanLZ8zZjnAi8JY2j83HiBP2NuH8zy5rDRMurFyXuwqJXAvSAHGi8zg8s4yw5Es3HKbFFWBae2MTMh8",
  "key2": "5Yo6TFykeMywWxTaaKqDbLDLDvLdnYTz2dZnFNHtDJG5VwM5B8zBYUhHmdUXh3cawbWtDJKZ24Xw4qTYxB8SMxT",
  "key3": "wR8vG1qsp7pb4XKGWGuvTGLfYv2ZFtjC5z4LjroF6JrZ3PNBbsnsrbUTFuGNw7Pi6kwD359kk1NXc6K5wFbWqHi",
  "key4": "3sgohT5xDyeoh5VrCBcf83sZKge946iWHUFZy17DKvyn7VJJS4MVWZz2GMcCQNGdR9DevjenvUYUCnjNETCKVWmm",
  "key5": "5TPqtGwb8vt24MVyZ8kxGLbNTJqainkU5Q1rocMGwUShy2sxUpC5hzSrnoHwAWXeWVPJtNVPpK5dhUwGgLNkWKsP",
  "key6": "5uPAXBnjUDXAQixsqPdk4p3DTwactVLDWmno21cTaj8wWDH9uA2GSpJg5aPnhR1nJs7b9PUifyMmhqF1h4LxZ8c7",
  "key7": "spobDnFHZMB9sas68xRvKEpp9RPRJDs6WgPDBV4jQRporDo7v1yhS3oFdLT5nxaWVU6zciyYxtbehEaqdZmR97W",
  "key8": "3B9ruhvJYgKpistQAtsP41HCJjQHac1EHG8SbFef32VaLGvmQYnsmtEvYWqSXPM6p3EQNsZKpLGToqnv9QuKhcZA",
  "key9": "yoGrsdrZBTMWTc4uQ2oSrdkUW5sCvULEob6By58tC75x1isUxuZrw7ZSZMeT6m5zTgwHaamp6eb7PKZfrrzqN13",
  "key10": "3aRohttBjGKX8hN4R5AqFxzPS6z8yeWFS5kDPwJUcgwKvWfnJN1CBdmxuafrc7sSvksm5etx876eVqyn4m1eSv45",
  "key11": "2FGSv69yB1jxQCHacXvp7pkfYYdV4tLJLvuwqknSf523eAhmQx4Wn3Yz5TcQzcL9XWFuyATTgZNt4LEWp28UokPL",
  "key12": "4R29XgVsiGa2hQZvwKgLdaoRuniMyB17NyN5R2mBALnWAgwhafULNMMpYkM64AUKjUoGbyTiugHEVqhN2SqcT3Zq",
  "key13": "Ztxv1bGps4A5dHGRHaPGnfR5BVhYy5mSiuuiuiwL1dopseTJoRJVLPMniv2cmTdbSF2LMW2z54qicsBTsT9RW9W",
  "key14": "wDBeBHs8KKgzgdggfYvppjdCzmS3fzYh5NkywVcGxjPK11G4XMUb6dLz7yrZA2Wrx4HCBAQ4Z7BQ1yUNNKS4cAu",
  "key15": "rcExP113D2FWWAehBGsb126qQ9Y1uQrhmgUM8HpCzhBm4oexaxoDejCfb5cb2ErzLa3Kd8FZAzg3Ebynyj4i1zC",
  "key16": "PZYMJYxa2uQdswFm6TixBuFXUTeSXAKkE2GT14nCdLA5LnWGRbS1AVBQM9DP182VvHwmq7MtakzDwjSmVhqdBH8",
  "key17": "27c6gxrfhcvwVEykWEzmS55XK9L6LBbsq4ENKiz6utNRqS77Q9QCSPe6giLbP9T5N6Kdtq4EAAqqNh2fFqVqyiyn",
  "key18": "4zaQZE1yGMXZBzaTPfjRWCaPHrxi4aRydTuEoN78Vr2xcJ6G61589rg6qZXbHfwPhqhNQBvyjaeW3ghpQYErf1Kf",
  "key19": "3JxgUYmDdxNkEXpurxK46Ar1ufNTqybvLJoFQXgZri4jcr2XPjnxSqFyEhZFmhQaHmpqsdfLHB6RCo8jmwSv2hAu",
  "key20": "35zPzxQXQcad2HnU3Dhbtp2wDzdM67yCysfcezJQ6Z173QBRuyh4BthCpTJg9WU8pecwuzLFBH7Lot5VVSsPMYz5",
  "key21": "65AFEKbtfRxbGfc3veTunFBYTMGVqKxSoADZKtWn72fyMsYQYLuFqQFV2uAXKvfziLxunbVsZv4HK2nrgFuz2g9k",
  "key22": "57X7rPqkHKCZTzpatSpzkFuAy8TYZMcdYJG2WzqEFAS4TRfRKxFcQBBsgw9ENi88qBHcijEehpJ9p9ewCDQztijt",
  "key23": "2u4Xx5AvX3PaTcJzu3jjNXPZ923W6Xzx57SbeenM2n4WQs4PJ21FMHpHHphv2q4aVBnJ65uU3PgFodMH8tzce3uC",
  "key24": "WozD5WLm7hAAGidUVnxi8VnBnrhCqumANxy5S2hDSSHNCjLLmA7WxAhM2kSNEScjS4UDXY479YB2wXqBTaTG7Wb",
  "key25": "BZx7192bjKrVCmqgq88NvvDZ1h1jgrFwxczi2L1M9tXsZBR6N6y4j7HHmtCsiw6t49ppWGuoZ7YcoE7QTHAbBat",
  "key26": "5gsJQy6pqLs17LxRKCSVvTvFCMQF41Hf1QSn7rq5m8u1bNoNEZEUAEGPdr4spp2EPDBKUXzWqWgsrs2TQ1bYDGed",
  "key27": "2qcce8WNfhWQFkQgQTK4qdBqMBQfLv4ww5VRD7ooU3eZ9VQvz9WCTBkkfUmJmJP3nVJ2nW88UtogReFnuwa9gG6c",
  "key28": "2HkDt5pMpb3T7hDaAzPcRkNXZuKm8nTGKJPpccaV4XC3VZYQEbZ5kzKoFXBzsbRKNmFk6KeYwjE1f9Bu1dJjAEjc",
  "key29": "ZwH9hvEKvG6SpidjAamL7orv1AZYJ8Yypems6tJVNDw7kyHc8Z3K3NNjzHj5f2ZiAPeqAQPprRckhT3LMqT9XfK",
  "key30": "5DPQ7uG4GAhbQNa8Cs1Xdn1gXprEjojZcwEHvTJNx6WNDrXpmZcxaKfNSqBm9JYwhdw63cDStXP582ycV82rksqJ",
  "key31": "3vU5YywmXHvmxgqHrmGsFMi1895gdHP5UwLbSJsRMFTqMNC6SXWmLBVGar6MKYxW1zxXmRvLYsRUmt2RgZ6nFgPY",
  "key32": "7nzRnoVn7ZLmMFCh9RePktZ2MFxhaCzENePvihVguytyMwsfgwN4qiQb1JDCN5eXoWpdsJHxZzkhcCGSgwC24iF",
  "key33": "2qZXeYHdCHwhUAAmQgpsR5tnBMjh6oDQMGEoC6Yd19yk2TE52YSFEF96aHpfp4JExVWPR7HTH72kmS28id2pKLdg",
  "key34": "4gWobqqVH1gLhkQxQsGuTPUg3pE7exR96yF6g4CUHE3arNNmGM67mYNab4ZcfEFdypyyEyRndT17BxCAtkhFjghJ",
  "key35": "41AjTTKydAgvUVFG1v4jcoCPcausjoMaL2FbY51bYAGTbdEKABqmACPTEAT1vJ3iRtZdsHaXU64NKs3MtoMuTbDP",
  "key36": "3FRmBnFPTTnyj4xokgig3sNyk4FeqvsLKX2joK8Jm8EYo5us5bkxnFzSj8w1VCALeoryC148f2ybyPjM5pqKS3b8",
  "key37": "5mS3DuD6WbCeZoaNf8jgKkG9wvfDKiTqiQRJJ1hEh2WAAy5U3H87rWjSkD82V6pL5kYUH24AjwDLRQHjKnvhiVdx",
  "key38": "vLKAbG27MrLo3LbB5ZAkpDvfXtwb3F4wggmGub7Rhj4ZTNHijcF2JGKHJxiKEP5kC2M8YrwoZtMTS4Hf992ovE8",
  "key39": "4SCSXuRSEg43M5BUpjENitKYuCaAqLNVbsUx1kyyMoG9C1ahLLpTq3TR3y3YirSCxetQFhgWYpojsqL4rThCmLDa",
  "key40": "BGExdhpt5pG3SDfpbfNb4XxLT6kuEmQ43NchtNJbbUegBXFSteZNwLazooHiVLYQJF4jgfqW1gtgqkaygphEaZA",
  "key41": "3YDKjG2SUamAMBwA51oVa4sQ37ZRuNLn57XTLD3TCeJSwkzMkUfyHNJMLmjXux1dfcW2AnfQnwrfmUbWMEUPCVku",
  "key42": "38hD67NJAL4QLhMffW2XGeB9QCFGSZmrpBWb32JohRL9r3ngvwsyFHme2PJ9wC1UEU5CTSmQm5AeBM1hzWeTHPZB",
  "key43": "2tpzMgXXgAyYkpSdzGhbeU9bzkbG4p2dijYEPuPZF5kRXJnwZC4K9tTZYLYHqrEjsw5CYKSktfFgn99p1QkntQ9f",
  "key44": "5p5Wokuj6ZopvYLSLisbPYWEkL2zC6gniKMFH3CXFVWQL8VTArpRusKi8N8jSBUindrEvDgG745iTXosuhLQNsVr",
  "key45": "NReYh5dLcsPauztqQzRSXchjXPacSDXH15ErE1f4g9CLbrqxy2iJpTMHQJwa1EwEZ2tghqmimMAQT34HsWr6zJZ",
  "key46": "A63ZQp4CJh8qSKrigyLXwtD2unLSmv7JvgRAxPSJycumTSnGFteHceAe65rpftWUD5rvQvuvupupuuUHPspmnxp",
  "key47": "5qzgkMtT35kXiSkq32xiLsbdS22JdJUYPg1bQeL4sfAE3V5TMLWuSGZ1uGqeyqpqgQpN71Ri25tLYDsUXKj4DwHA"
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
