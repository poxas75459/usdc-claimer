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
    "3AyGpoC9kcgHbPp975j2kW4BDRV2ooPJ8YRBggHDnWCV54mdF3xNh8HNqhZSaUT88ygsg5D7wW4FEDLpJaDyfERk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRLHfHneLHKc9PzcKb71Y7MpiG2fgKFbxVvbq8EZ1qN9WGTEviPWwEdQThrzMYQC8vp4f1xq7zyJGLKGNgkSug",
  "key1": "4oQE3AYXmjCGkjp63pXkSGngh7dYcggZJXop2jarFG6s5joYaghwo4Kkth36nXFWnx4Kv6kQYRCRyG8LWg8JLLRf",
  "key2": "5xdVnJdwdFHXNGK8CjGGZnJioARBpJwTYX25FbCaMDWsu6peUu1iS2HC7Mi6wvtVu35gZEqpNtffRxxwPfUMFhiM",
  "key3": "4xo9VCvZCP7FsvtKjYJJbBTrxXBArz9Byiwe3XyzK2uATpSizdSz7wbY2ZjBMdpim6S5sZ2NmLT1XqU1en2rpsxt",
  "key4": "4cXtHCKXGrpyraSpmr81Kmr597ggaZKuVqZMCGQdzb4pGvtDtZvZXhGxufHpg7UnLeMqQKpbxMCwzYaBgkXEevKK",
  "key5": "4NLNoMLSXBkPuBoFk8Q35eYaCJphZfWtJzk9gY6QgfR4UAA4gx7orjtzwZt15qWGEiea7Jdw2SigUDrJfxPjpUqn",
  "key6": "47gBDBNW283XpoALTsj8EChnUCU9SmECAMYzc39PH1UMXFmLag9hbJSN465DAM4BnmuU4Z2WAU2Su3J1qJY4qeaM",
  "key7": "2EydFWHkuF4ghxD1ToKhh3N6WJK9RigbRaAsBibCdQnprXcNAze7Wy4paDKXXLhXETvYWWjrCsuYaQuzzUYU5DZ2",
  "key8": "2fYzCr8fzpjQZ2dMEFL9u32Q4SGFHHUkDLG7KBzQT7SBeCCDRWZh5cJh2PXsviiVzNwcWJzN7fDLiQGKp31veLDW",
  "key9": "sVBaFTG7hLbq9158khF5rf3wn2m4M1Y2x4fVrPwjhCVNTB972v2PWaT7UgdbcUeiCLsdSTatVhhnwBUf9849P4D",
  "key10": "G2jZEiS5tyGRxyyHd1VVP8DyhrLYtTR1vLywrQYJPphKRV3BCK8dV37d37n4ayoKPqPPbNzMA7VZbXgQGu6AaNM",
  "key11": "3xJY7Wreyi7h4UkTrvMj9yfW2cpeGTVae21LqNa6DNWP7AcMjCPvoVyd4NNiyh49ES9DvJWBqxmwzasPhAD8ZmJq",
  "key12": "2NqBCxWFAmSNd2h232354TSWFxHo6j7vpfhgH9R4PcVbbyXdBgmiABQMmmVoJJsimyDGregrwEY9mz2ZcUn8N9Sq",
  "key13": "45acArsTSKQHUa5Lvf4dHqKBYG1Cd8Dg2NJ2fTv2tgiDH4EEF4P93eSDwexW2vt9vpMoxw7caKJ7HcjUZ9FkPbAp",
  "key14": "5YW5Lw6waCNtnCqNJXmzNy852sHBC1pYkACpssV9ayqS44FxZroPFU7UXf4vN2Jjdxw3LBve4Lu4JepLJyfwrAZh",
  "key15": "5FvfZqnqV4nevxbrJfSemD47oKTneA53YNrmcs3kEHddhTZ8hhqMh9hRx2n4xnqb3CmfFXSMo8nrLWJHdst4SaZq",
  "key16": "5jr2pGQZ1CuPeymT5eMvuheLw5i1k1TKZBTbhnabfJqJdRApU2xvn4Nfzct1wrnM2T2g8iyYBPrHduWG7CJqwjgQ",
  "key17": "4R21Hf6kuPHpbk7R7qXaBrEuSeED1hdMdpZDgycDdgEPWCgRGsqHFxkRCMMzo6vcVWABLHBUU8mzWrSj21bT59SM",
  "key18": "4iyEfGNuLZMH517b7PXvaHMkTkKb5W3StYiv6abUe7vsToE7bAsaDHVAhrhJ9J8C15VVPnqJ8hPzwpKgdQVcH6nr",
  "key19": "3K1F8C6L29d5HtGYfzitCk83bcfNMKKa4LqesHdmdR3iYTcfBKWDkE1a2i21w1pW3SEtbGwVs7WhLi1ySPAbZDsJ",
  "key20": "3t3xdrtynstnKBMK3bFEgdTJaXxKPBTShUeWANRHW4jgqfxck2ZxdSahprf3DToK6siAAXodq3jNusDb3mWbgXTh",
  "key21": "49zb1cFXCmbnUU5VmC2rnpENLe638nz3JiougWzPmj79UG32jFqq8kviTCcnVFqpksDd8BLumpYw7qhFgQomifU5",
  "key22": "3LHGvr6Rv49SZky9AaK677dpaZqu4hqyRoyCgwccim5zFzPu3ZfyXa9mqso92gimRgCnjtUWxA7XH7eBGH6VDLah",
  "key23": "TaEEewH82xsm7KCzXxy5g497MgrJS2b44foFL5WziebZbh22QFfHbRMhrXmU2YMexFT1Ytw59TkuswBCSFy1ujT",
  "key24": "5FQzuX61W2bwS7sUXaxLUK9SfHwR6wZV5yEQ2YPzakZbmjtmxi6HS9t4o5S8mnVezJVprpL3N8qYHtEKERsX7H2P",
  "key25": "2Bvrc8A2EJuym9f1vTNwW6EoJFTxnJhX7iGdDaVN3iC8M4tnNfxAcq63qryRCUgQMPnVa2kKyfjGoTo3wgw3ePqE",
  "key26": "5cbuqHmccHfXj5WtQmHbToFDnT8WuhBdaBM8AwcZYh2DG9rHHMraZvo7G3AzbreDhcc5rkVFF259pPFtLXDgC3NP",
  "key27": "5GKvTFP2snHqcoyD4gqqDzAJK4C7mBWitSoncQ6qZAcHJBPcspFEYryNjb2NjBj5UtWiomKYG4ZQKuuuhv8t3KvB",
  "key28": "fVDqyKBbrF9RXS6bXAAwSgMqCBuRcg6yCa5sr65kHPM8NUmTPxyZHXP7pVxLUYXdRnHNZBfrcFHmmgg9dKicAPj",
  "key29": "4t6u58jFRr272deQHLeXvmTBWAVh139PVqmbkofxACdA4tr4H2MxwoV7MrTR6uGQGZBA9ANKwKAVTPvVZdQHKpSC",
  "key30": "3VGzoDYxBAws2gLp91xjLipkBcZPWdbXBZ2dHPP73iVbgVjrDPxRBBe62mQonhECpUWaBieAgM1P66eN1a28cn85",
  "key31": "kx2wfsvjgNQtGvjsmosiDAfJqqGC7m5dBoBhtw7AeFgmQ1oUpymb6uQhyyfLk8patzhApnP9SeUVtse8gsjBBph",
  "key32": "2JWPLqb2Sws7R2EUXcnyT43KNYjxLPkp8w2YjARYa7qHNC1NCs775nQocJQjjDxpCpQpwsnY8YdhJHjqybwna3CA",
  "key33": "tEyErZYfv6Ev8DHf7sBkZVfGAvkWdNMiuzU3EfdH1PRiznpAAdhWQTPx5PbehQyzHZakstCC5XhZ72Fm87pnmSh",
  "key34": "3UdoNRvqVZ7uuyKigV1ZGBkuTAtftANk2Et9W5JHRiYoD3bMwM9vGgeDqsBvbgFy8oBhwRrDip1fpkaUrfSkgfFF",
  "key35": "5TTvwjYup1ohuWV82YvXFCvUHGb7iZmbvmQ6xndynVyuUGrkUEf4huFU78oNTKXxvjmMCv5g7YuRsV4Ye3DBgz8q",
  "key36": "2kdeDfMAERYqGcDPBfkD7gyUAJQnBV2cjBTC4Lrcd3bhiHc39HP8RnrsnrVVcvwi4TSruz65st3pYBWdkWXaDTnQ",
  "key37": "5GQUagiYYjTgfYfCxss8bG5Dv11NdQQq4hPF97Xr7XfLgDeooMP5sym5zmw6Yigs6pkYr2NbergvbH8i8GcJfXbZ",
  "key38": "3FYpsh5zAe3SNRSkH6crHgqSnFwiu17xrajhuxtUqbjPEBmj5uyL88Aytfjjs293HWwU53HY5KXaeoZqYexWZ6LS"
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
