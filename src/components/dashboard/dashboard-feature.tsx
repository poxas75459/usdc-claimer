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
    "NwoY2c4JGnad7cVcFZk71teW8gSPTzqA5cALtER1VEngMHDu6PhqjX83NJR1ezpQA9fVRP74W2DPCRbmARHaxWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pg4QGmVykHscjBH8Pcf54H6Udiu6qGiACoUZ1WrDZSZ52Vqtwvft4q2x87iFLYpXyrkvv2mpbqFsEEutrHR8WsM",
  "key1": "5YgNGBGfTaquZRrz38B3eYoLKvxkHsco1SViMTD9PgTNvc3xJErgCnbx6jksjcJEM3kGEjH3mnKeDkeKpc2ZLjCV",
  "key2": "4fHdeQZR2AbgjwvmJ9Pp2GWahXE4KtGqQM7RvyzYt745hx66vzDckpBVcHaj2KTEG7aRs87dRw1gMyH4x5Bx6LiM",
  "key3": "4vjSzervUpyksGe4qzdwBU8ge4oR2YzmsyzMZSLcYyQ5gZefWVeE3wRz1VjQKQcGoy3e93NxLgjiuMPawN7ygZh1",
  "key4": "2pPXTPwH7c3xksMWHuoPvXsm7rDmTTe6iuzCSNLzfkJCs1pmtwaWKn2zHeghXnatf9wiTZSBMXuUMCXdV31Gk1UX",
  "key5": "3bWKGik2PkiSDqSHZRK1EvgAKxEYjhV7wte5fL6qf7kvMo5iD5SNC3xP9ZHdz3s3nzN4xTUNqwMs6NYcVTZgNoE1",
  "key6": "4yCSiSxyLkE8FG3otXvwWTJPmiBPByNM6bMST8SkbT3bc8kYsXVrmXH3Mv17hFAcA53cFHgiYsPxuGkQVyhpY9B2",
  "key7": "5feenk4BUoh1AtsuVT8a7nQtfoR47jpJicha2qws8s54MjxkjUxbfcw6cPQjDxhyXuwiQFuv9raUXYJ44xRFzyeA",
  "key8": "2RGKp4nQCvdDKkFAQkLatdbtHPeTqBgDBXu2baHcYRKNa5Ew1etsEQhgX9nomTd8Qpx1gArsMNz5CiRzMbjRVgZP",
  "key9": "1S7p92YJzQJYM8eFYHsQbGHpsA1QbZna2a7DALaWBWGgeH3GXpMH4fmzA5c15FmZHnijW5puSythw7Eiq3V3EcJ",
  "key10": "2Cug5tRP1NVNyk2cHuAQmxDvXAYifCi6b7JXhgNDM9GfsGMKM5X5m9tERNjKkDwA3nJS3fVRhYumwqKu5Q2LHJw",
  "key11": "3PNkAF6zWy47MN3hXAN5hRf2hUEXi9AG6kaxfMmSV83zbcv1xz7w5c9fs5FVgPcHenFrGg2n4VtAJsLPgzsHRWt3",
  "key12": "3umhuTMWMieja5BFbdPVivg3bDjBzkdGgqzKAvEbP7tih81hnEFxDwirTiZmuCZkCvFPdrqLSS33aGXoBCqahwtf",
  "key13": "2AVBivpXFZYainnzWZqzfGPcKphiGPbWfqy7TgbLvCvvPosp1xWUNHnHGHrKLpZbFhmuW1ebeaDsoXAK19gn1PoG",
  "key14": "52We5jrB8cCA7NuJswi12CpTPmi1iRmZjPPNivKAfS3M4n7Kc2oC8Gmgt2MZZkePfbjGCiRbzs4uJFPGYcR81CfT",
  "key15": "5aDF9rC5n4wH8z77KkmckxoM9dCvEhzZAa2ya3CTsWaJpjS86icgar49M4ReYfjMWQziWowCDvLwXozWnSYSSPVz",
  "key16": "3FGy9z9fsjCwBctgnKbL3Ua3gvpRP3tUGhqxbqhVhqhqzhgTzGymQPRpF1yt1QhVEBdsbHfDUHHbAckNSVxUEMYi",
  "key17": "3v8KSmcDLuw9XXTAUcdWBCM79r4JmhP6iBdtctip94NyssSRA9gRNYG89JoSFBU3AtWAuRauwFZJEVxTbJAGTMj5",
  "key18": "UF1qXZo3msobYvRii5H9Wsmq2MTKZk1t8hn6mM4vFP8znVowTAbT8UFNvZv3PdtWyKVdZUKRJXeCkKpifPwPQ2K",
  "key19": "5UYcGzJV3xuLmRLJZv3hhrde3pA8YxdqbwjoJGXCgBGdR8PxAmbE9LUX7AEtjFwYofcLmY9E3qGU8jt5VcXLSHXx",
  "key20": "3iWsiYyTq6j6mt2rtbqCPKU3XGxMGvSg9vEB8oAmMHUzowYdf1r8rQTLkcGBNZ4thqw3GQywbzvsHPPMH1iM3WCb",
  "key21": "5zVzicmbFW4UYqZHonWWmfHScXkW9NeVGyPE7CiAL31c853mr1QxUcUGeNetE1MzvmPKuc6SMgQdwBLERoQ5G8Qv",
  "key22": "4wQLoEjCJerUnYtuN1gJcVi8VBTsRX2vSE4er96SR9kuuNQ5zjSam7J2Pai1rgq6NSpF73QYyWsJiEv1KTsimrHs",
  "key23": "2CgjjKvy6pjCazwCVj3Y9BYTLhdRqWScjQEtqYEw53Dk5vQBASXuKRJGjhHwhSbGYvJcBH3epV1zvHCWS3DYfrcb",
  "key24": "5G9rFjsCgXMcksdce1cU8TvvqMBLNTb44gVfeEE99nde7jrxPWBYWLmYsnpSBBT46RYoPetJxq88FSz3wrC9fMMo",
  "key25": "5JNZgMLyYVS34EWKhkniwEFnFqRFuyhy5RVB9SMqHKy7mKzuiucCz5K4pEZuHDSTgNSzh9xSx8a9U4YxmsNX7zxc",
  "key26": "5FgsuVq2PX3v46jTs4KBfdiNicAnJYa7Q768gXqhFmvU5d1xMVWbBNR6dCJeg17Jono98TKG6aEuMUiKujKSNXJw",
  "key27": "4RN5hZUmt6uJEcqFPTPg8qmXX3rskuonCqr75LCqSpZAiBEWDn5WqUrqo5iuvuxsN4i6rMd97k2kAMUoLfC798Cu",
  "key28": "2KqBsPLcxNUMf82572Udmz2nw7jWkPKVG9ZjtLCQ8iDjLXFmBhy5LpoF3AudYvEeAYBQy6sNkaRbqWtcPcgFPxYa",
  "key29": "2gbuVdjQSQ59RcJZ1bctEzz1mjEBQ5ktLC1ZXpRQRSttxhcu1ZGPsFgu77aGXtiwfrSiKf1Peshy9vhhsQTQRQFo",
  "key30": "58qUyo4BmKkJDD64sUcpeYYowXZWuaHSqq4zb3wih3hopqK1LSaBs2ySkK6bbECYskeWMD7khQPhXVTbsEvcujGm",
  "key31": "5FVjyS47yQ1By4MKAw347ML2bvQEDSAxbrq6CuJWRf1AWFFywLisoAQHmH99SL9nadGQC3k1rAqnSkXz1V9D5JTG",
  "key32": "5mFU1vZ2UBHDZaVGHpphfYuu6JDQiqPTK1w9EiCq7MYdNkwuTQpYj4us3Bs5MZyzVsQgZykyaWaw4mu5DRiC8BsE",
  "key33": "5FCbgT4XA4dGm1znGtDLCxc322XH7pxPGaGRHBZ9k69DWrcuasoMYFxLFQZ7Crp9r2vPPrQS7Kyo6Xjm2XAyqquH",
  "key34": "3cUfCNEmaDCefhiAMpyFCqJoQwhD13knp4MoRVbXAhjgoh2xVHMGFYo63vKxkDsY3yPRygLCTsBjwj5MbQmVoymd",
  "key35": "3Q2nSXsdQFar1cuxBNbikqFuSHfxadBzGwt6gRiifi4aJHXP9dcZBiuNTGzhLY87pwv6j6bhUT36uiRmWp4SybHT",
  "key36": "PhRdPh1Yay8avKVx4KwmBoZWhzsEvqAuAm2yn1jCDRpaLHt49iqyJDqUKGqpv4AAc6nWFcP8zdfApecVRLwWDYX",
  "key37": "27ogqJp7Cob1qRDGcvhcMwcBFSVL3J1NAtMvQsaKD67FLxma8RvrvATUjQD3kjNa2UTB1bTwZUSAikuNgEMXjbn3",
  "key38": "3Mni2CNch9zwqsXJ134dHofmccBKS2FZ3Qvu5ZSskAZZDWHgu3vR4y1oZkTfPdpmvkwzAJ9nvwsnZKcG59wQT7wN",
  "key39": "kk5fXHt3MAyovJHP86hVEaGm7mVAAdsYPdg2YhiYV9mVpunbVbuBQXXm8DtG9MCmyDpyzY9vcLrygXBcHv6d3rz",
  "key40": "2Wqf541Dt1r2t5opu7mJZvpQmX29avSwfHLeAPGo144Z9jWj9Ct1HzmJifV5MUJ8LsmnUJQmncjB6w1WBGp9XCM5",
  "key41": "367MvXPk4ZV4wpdtte8Qn942gtkeYJNkAL5BPmqph77wXqqoS5X48WeAfU3M9xHHuiKfTdRaHEW9DDjznNKwfji"
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
