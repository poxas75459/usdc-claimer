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
    "TTB9rCxuK6i9wBpN6voNcAGVH4agc7MPLmb7qbAqCrXJVHNV7NhwqrVQbkmkKP5syvYGkiKoJ7qXdacfnAGS7cP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAPNrdtzFStNaGqYLqjVgm9VCUyjhsShisCgNN5uBe7HjSadFZ5Et7yEzPKqLTjZwXd58UYb24TwRyGGKQum9Pn",
  "key1": "iqeDNbKCKK5o4qtEoanf8oPHB2khpmJjyJ1zFaDfWsPcPXF8CRJ2RRNuFk3MsGqr2YLmmWxXtxdC9p8MxWBg9GS",
  "key2": "5nJPitSard4PuUm54hibw49FvvUopMgctReEpmu2engnnEiGHRKE6qa3463872N3oKGoAHzcapNkKTGT9SUJc1Fe",
  "key3": "2kXXkGPswg3WSU3xf7orLZhwmuKEFKrs6KJTTtvywFtWMipHFv8dDaXV5EZDgYCpPdAJs5eyvjSKNJypYHDbtKRK",
  "key4": "d3keDiB34ZdTUfn8KuvKoVu7MZ5akiUreCBQV9FXwJMqNgiM3xTNWRaDYGpbhgqsbAsnHSr71Y792Zta4MWYB4C",
  "key5": "3oi1o1d4Zjs1zyWgT1Xr66AJBwMs9PgdEG7ANbiHow6HmQNf7KgT86gJ1MVK4xYV3rQG9t3a6kxa4cRmETQdAzr",
  "key6": "59Udpati4KuRqGx5Zkfpmk5Kh3wjwBvqi6Yx65K16hRX9XA8owoZABVqALx7HR13EmDwju8bjpsSRV5gMr7W9NZU",
  "key7": "8hbJM7nAhmhWdcp3ubrtgfGKxHVnnFY8dcaaHXpbTh27h6Tc1uuCE2sJ5BY77Ca5zdL662ULfWq8MRCK3Vrr11X",
  "key8": "3R1GVNi8etscmf9hZrNZHjinef42PV1mDtiixtKmxk2E6m4Zk1XvmQenRgCZdnatQfzC74xeg6UNriQ3wwN2iFoj",
  "key9": "3JmLvu9VgbrjGZHyDQyk1cC2gX4a71FumiHDXbacHgDpEL8TLemje327zBf1Ey1fTrDM3erq5juxUpYDsGWt8P6x",
  "key10": "4v6Stx2RJyDjCr4uFjXgzYsq23DJGxMqvuZggij9oh8FjUyH1943XySJ3Sb3VeHtRq6vQLppJB7GECUtY7WXvNkV",
  "key11": "5BjcuZcyDy8gmnKtUcriQcjBUNFfTT1WH7qudyR5TLjHM1neuPBPr8GGJ7NAZTvDaKxr2d4JFJPzt2JEEqxA4opa",
  "key12": "5hpPfvEFuxZcSoNhGbXYsbQVDLzRVknX1ZiUsjLwGGxzqQ6DRsX27g5oL1NAhWnZFNPVBTeKcbZmNYr4kVpSbuYu",
  "key13": "5QedsEsecRZ4StNJvbFibkbfAGNqoAwpQF2NiBLLWCjDuSYEaH8MvFKZjFQ92b4RXtb4JBBJ3xrcBtM674BF93fA",
  "key14": "5xKn6KprTEuz8rGQVGcsDmBikBF28rG6EmLA6eZ5MKSqpPmvi4dhZb3U3aX5iDCDUvNnV6M8fCWqESY51sLkpzVz",
  "key15": "2sbnVtDozQa2X1WQGpAPJxqRE7Jt1n4tKFbvbBwbkfbtYBQ7k17bibFfWU6UWMGLZubujVe6sQ5F1YXzqyxxPhST",
  "key16": "4buCRvVcxe4TMra4aTpJj1Bss4bscECWqHZKCSUTuLdFQLGrWrRCkVmSusAZ81pMfRGLVQCARRFziUdF1hSY2FYo",
  "key17": "TAbtQTAWufPZ1uNUUNkXtMXnByZAQZCM53dTNkP3c5TL74TLgoPrEHuqkQzNP1MjF6EjNsy3SSGS6SibxSpvT1x",
  "key18": "3fLCSjwqHx9GvaKZbSWaVaqKWsmcRE1WMp7HvJUj4HYNr5Yd3M4J11HGrW5Wjuwo4kM5CSi2Km15U5orfuE8KzxE",
  "key19": "42EFLT4Xy9J7e1e2Rg2aV2hU77KZWSX7FLmp9V2rWpsoaxqrSiBck2pW3XggZaoV1M2t2vjoJ4ajvE6kkPubDJuQ",
  "key20": "4EqeoaMjzu91f4fJ1DJJnU5xZhJFbKxGSD3bqKUr4sbDQVnDJKv1i2mSrX3EBksJagPtkHXsL5opjDXHHzXXjB8p",
  "key21": "2H81cJuggaMWR49bycnFe4dFRiGcKzi4akFerSyNpdARz3zN1ryC8E78pY9DsEjf59oqhs3wbV6LKEJy2vM2taaN",
  "key22": "Au9PPQuKxssuboYA1SYnAFaULZ2mtt18kTm2i23VJQjPd575iBNDC4g1Kd48gRFAFSo6wHZo5jxe6gobFBoLePK",
  "key23": "2r5ffsETwV8YSkrCW6FtfWxz7wDoSvhT29LFpgbRS7Hd9CxQ1F8o6YwQrinjuE9XHZo8C8L4J7uZm3Zq2HjxjBCJ",
  "key24": "2c5NayHBmvPy8ayUxkC3QdkDFz8zSE5gEFqMQi31WFGU1Yj18LkLakocZKSvDrDXzDpcuV2vBrS6wefYQYwqsx9x",
  "key25": "3jsRLH2ncXPxzhsvqB81upxhGwEHGpMuieomTpzxFJdcir9Y2iu8o4YXzpF5XPCSFDCbPgcffTeX2AAhQ5FVZgM5",
  "key26": "4aBZByJs4htLnHGHHcsdHLDTYt953mBbA1NevMe14KuXfvePR3GezHYRZwgoSLYE6Wu6MzK1D91EeyZJwNSmVp71",
  "key27": "3mGjy2t1xBXfBDsyT9iNSSSqjo1a9jMwBHcHLFEeYV7UJbaGJNaNnXY3Ek9iNJbySUr2R5YFFxWwERsqWYFdFYJx",
  "key28": "3XAdraJPGtTQnh6GSR54jtnh3DhGpASJUwsWTzvgfnngKp6KWZSdBZmpfQkngauy9yAiLPJo21qdqCat7wxypjiu",
  "key29": "2UHbTZrCcFZ9boUttbPiwPom4fHXqjM9tGkfzU9kpVFxceJz66F1SDjz1u5GGysceAwFsoVMeVkzU999CNe6yCBr",
  "key30": "43Kmnghjh6Nem7cX5e9asXEd1iM4Lv3wx4owtj6ULKyxVLWAnN7JAFt6u8NVHHqCn828pGS7WbRK5EUMUQyT4LFB",
  "key31": "zyvkspe9q9shrRojQTWpCphPho2w9E9o44WPggrEVBRTQLuMaLfEjgEsebdKJjrFR2KP81XChKt6XMjj4kp54zg",
  "key32": "5SHwDQmySrF8oct5ngd6vhbt4iCPoWJYE7HGE15FLTHEgC8s3MYiJ9se3jGW7tqP7B8QMMGuNqcbbe5dUmkKafhz",
  "key33": "4fYL72fVkWdArvNy3wpiU3kZ4WhXksokieDwhKfJgDvrW3zbB6k5k9Aj4hNjX1b3ZSkmYWrNyYFFXWd6mBZXdoFj",
  "key34": "5d22pDFzzC85NoHuPVqEDRNVQW5dTWBEXLnYekJwH33dvDb1vAGfav4D8R8aUW7ajud9MEXp9ivq8za94UxBeCVC",
  "key35": "5jwfB7wHouAuJRPfni8AboUbrRGQYXcZs67f8vASZmYindwtRhmMkfthF7beYjLLdyYhMsbVXCjwf9CEJ5GtQ1Ru",
  "key36": "4yCuAgchY6yrpWrNK8yAKRKHShKXbDnB9TewmuFvPcCme4pA6qprwpqva1QdBWa3Tjq5uPKRTZPjEQeDBfK9bxQ",
  "key37": "yV5gFdqkoMGPJRnRAeEwPVfZmJc7YPgJrt9UBMRvAoyX4qaZWbADUHiiFrbeiJR6BLtANZKxGC8SjSNAvRVzejn",
  "key38": "LFpujFuYJ5JKEQcfrU3yZANYrjaZX4n5Jzdy1LLZQzJ66Tx3DaZacRmKeAipX4xdn2rMYdZuj6CLBGXrkYpH8BE",
  "key39": "5ziaAwQLeFqhJQSZbYfhHrv2ENXErXVvcBeLADR193RVbQbbrhHbRqtWm2yXY6PxPtE2TZg6u9yM7njzmtfUG22B",
  "key40": "23J3QAsQqoQJ2fPtUR9peF77phkY8vY7zc2KVYod2ctQnSUjTv6MB5Vwx2HFNcYhWe3WPSQn5XXEsyLJbceYQ6LD",
  "key41": "26QHh7LprL9xAHhNWRbio5opLRceGuoeSkvHnS8KtSMa2f145pUF1KgYvKPHcgYs6BVoj484zkTWThFSReswzhXm",
  "key42": "3VzkW573FYLe1mjV3BnCPGQA83X122X2rYo647wWdHVhtnr2oC2kQhBfJ1aNnaLNPEinpMs3diaZtMB5HaUHQc3W",
  "key43": "P6kGc3Vw9SB2jvRZ7DY4BWozqhBrtVmexJvfw9MbzHRLak1xVDDyYz4aRRNr5PBDKwssbyGTbEmELzPXH9NNoML",
  "key44": "SWDXwr6UwdEGgpR4cPvjH1gfJri1HDspoU7zsYpnQAVUy1mqP8Kjh2LtbrsD9mqcDc2fFMqGPFyLzK4sj32yf51",
  "key45": "tUX8rcA4yFzLZMSE2S3CKHavC386Dxy8V8gTQbvEkjgoQS7eQr1pgCbfVoHdconvLbnST176TgxSET2WiZgQ9zC",
  "key46": "4ANgNDWpRwjhzdH7h5rE6A8gry6i56SbcDNRY1mxvZ8zRB8HSvMEUWo1mwjgbnuLDGcy3JdzhxzmZAUK8jUDd9Hq",
  "key47": "2c9wje7UFXtNsiuaKbDSXxfJukuHoEZB8wopnVcjvh4kKbJsQycHzxm7SXmLhnGFjJqpM8f28Qu21scVwKwD3Bgy",
  "key48": "4ccT8urZFKKgViC2GY4qh5Wp5B6mfu2B33vSHVNyfZtB4YEQKizb4KzyPUjdcjDagbUQCARWxaJsmitzLEfDtjBn",
  "key49": "26i7iDS8PRoUTcFbgMHTbpqH5EDo6CJpjSWfN9ofJ3qT5P7YYNsX23YtYDAQy2qn1p3GdumRWA4K88MazsuviLSN"
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
