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
    "58Z6HzV6Fe1mgJsYPupVs1xJWaLXPXaw1MhGxvJkqaacHRtUjeTEdUgGoCDCNtE9dmBxUYBQeLJzSeLRtfWUhsb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "679bcD6ynZk1N1isJkjVzznZiyAHgyY4UwcxiHmdQ9oW1QW473jqZV7ZJa4A56d8pT17DPZeAkj7ZUpfWumFAbfk",
  "key1": "4NX3FYf8DJQuToacf4imLYAsUE5e1q2r8DND1xmui9XPseGLBJw8eRrszCRXZ28raiMzmn4AZyTJj8TyxNntD6N3",
  "key2": "YRKrGXrVBzCDiJBuMjQrARhH5ooosCiqDXCNSNikq9sp1rzDAwuE8vaiY6daBSmbGguCSNBX2WNHUh1LjjocWoi",
  "key3": "23rebmtq7Y3pNgYaRN6oo2GnroEiQYmSwo5353d1VrEo2Zag7gRFypusGsyFJ2ab6uMYUtAjVNd6owX5fv7jik7j",
  "key4": "7N3Esj9dyeKb3VF4t5Ng2bizBmaEknFWKiYGnXv2bbgPFKPFmJTs5Ktojn4PiWghdN2QgFLvxUERXrXPJn2d73W",
  "key5": "49AnVfmphgfnjCYgZe11YfBPzXFG8SGbZkjyL3jm4gcL3jfj7P41AtfdxcZNC7fzuToUrrPnwowNeBc1Wxj4T5Xh",
  "key6": "4BR617cU4YoCzDHDvvPYE938LsmcUHjMycVnbK79LFw9pfwR5oBqswRpU6hwXfJQRRZvJ7FkApMakNJEkD27Eabp",
  "key7": "4BeM7WEm12s3q5A3QvSUty7Xiyn3WBgMhnUJBdKWHnZTN15CVQc45hYZAWtaacP79XJk8USWD2LfPupmjLzjdekN",
  "key8": "3YPgoYFL6Ken3kbpfEH31GeBJECeuknRuHdoeLbukfREuFrBXcbzQ9ornWLkVZGf9ccmqgHHuWPwS7zay4ppSh3s",
  "key9": "4xwmkgQU3jSGCXQo17NPZWT9vE9hCp5pVqksGUiLxcrZXZhvUcnQNEnPYVy3f1tiQkbr16XtQXA4HCDiuL3JGTPW",
  "key10": "5gL7nNPqZ2G8mfEqWZ41eQrQmKxR31twVk9ADBNR9Za4XdmLtWbDgcyjZDTqnswzr2jSdhJvy5qPaRt9Y4PQrdhy",
  "key11": "V9VPfQTR8XsBCimgWQhEDVbG1Sbgpz5dsuFHZqUoS1zzCjetihcL3brhNwmh8eHpRsNxTSR23f2VbhW2yKUbc36",
  "key12": "3hKC4sV6yZp1WWSa9jm8vTMnVmEFf4HUz8nByHHz85dCMQnkTP5aaqpb7YAiH6anQ7kLU1GYJetLAwuw36Uo5mtb",
  "key13": "2XXXxYFcnexKCsYwKoUzE3kSjMWTE77iKfuH3KiGrodR2WRZSNnm1ftbZBhk8oVkRkgdk4Jzb9errLXpdHT3aVti",
  "key14": "2YE56LtuJHcmksiXNjBuGrpP5s694wEoWgDLTv7xa4Hw5nPkVZisSjg3mu8FXghtJQPr4yq9TrKgW6VRcyuj3js3",
  "key15": "5ritzNLxyVwQNUpcMGxD834DgDK6cXnK8K4xfwp83CmAmWPcnQineBMZ9rcQ6H2uBGMXZKcMEzjTx5yQAMH1v2pC",
  "key16": "5Vu6SzncMe6sY1PcW6k6hrUzrFReY4Y5BAUAXWdaRWdpmBbQEMSJLLu155mtmfMCFpFc5EHHvqXyJL1Ry1yL6vZY",
  "key17": "2GrRTwreAPYbixMAdKPhhUbBA1zSNW2u73kFqpeUUyTQ2BhD81gviU3rW9Qfie8tP9cYtz5zxM49mA6zBDQNUFmW",
  "key18": "P5otg1t84onqKPt6FgwDQRhCYW5E8HhWdHP2KvPVFBdpPpNDQJgGumm76U8XbDhbDNjmoiDiyhLNwcexxnsYjEW",
  "key19": "L3qA4RSabSFwLJQS8QrDRBCkCVfUJJuFFf7jGLKUraxxXTSGhLNAGCSY7QncZS2p1MEsTNoP3a3qAbj1prH4AFn",
  "key20": "2X1JXuZr1twULDW26GEJQsrpSXqh55NQjUEv7WDC2dCnBiR6hTPGkRq2Vxk5sKLuU8NqzkDbq8L5yeVeAZsY2Lpw",
  "key21": "3fdKLezJBGEFtYGJhsdHFQDgQDg1skMAhTSxKiKXCj5eCnQkdyHjiEc4QJ1ft4t2kYEuUPAZSG6ufJN31BLcCkgQ",
  "key22": "kEbevggKbzh67ctomhoNEAbJNHB3xSVdGu2yoX16P8Wv5Vm48NNfz5He11y1Mqe43H1jSLUUY3hKcoGCWxx4rKZ",
  "key23": "WTAvaBGdmpvAX2fTfPxNiiq2ALPZY5Lv7WSVaXA4rXb6WLahTg1ZcgNvRThENQu6a8EdT91xoqDf86ubWFsQxrp",
  "key24": "2FsEDiobHNxycs2hvHgfA7vTf2P36GrWXfsPgDEkE9d4Wt5znQEM8mZJEsTvdG4so2XaYfopsHo1UMzCJMtoULLe",
  "key25": "2ybWuDfadrBkwuXVYgVszekGxCpsJoCrLLwytpW8dakuapxbft2un4np83nrbEXUs7MSrHqMfDGxWVzuEcdT45tY",
  "key26": "4AnYRWJJsDy9PoiQZsnrJUuVD5swRvUV7u3WZUduXVGtKraxaTpWEW1g2mupdG4FT6kpVrfFWXCpr3osdu3jrxSB",
  "key27": "2kp1HVju6nnqyPgRmN85c5WCqeruzHqe5taZXDqXYTb9AybvD78EXhnZ7UeMV635QwfWvAvdVcTVT68AwzanCfar",
  "key28": "4Y2QJ3DBuV4jjhT7Lnz7kdRB9Ez2oY5N9ftJdsF71tq9JQjSJ7wWJDaVJszuuY8zYEtnKJyMEAfkTnNBe88M9ZTb",
  "key29": "4jcpkinn1QA5UR9bfzWzyETCb6DyEWahygSxPKRvM7HhBJjC8retksmBjDcBnRj4E9xTTfSrVokiZkgfFfTqpe3p",
  "key30": "4gP363gQNtj4BcY7fGVFRfZ5ccL1q7GFcMaRqVQnkk2BXgNA2gb2D8yDnKV3DHuqX4hp2tHojaV3QFacE5yZ3cRU",
  "key31": "5EjuBi3tQXKWHXGfGKnA8JjbrcmaVchkvVzsJkJpZqEonEsWbfery9EJd4VUpYQr5edcbRUpNDqPaRes31WX5ZBB",
  "key32": "59h7LCDkpa47vK7PkbVRAHzWp6dv6TdDkFgqZDFoD1eUE77TZosuaPPHEZc4QdFj1HrKat2PJigujWXAugxdwBkc",
  "key33": "2A8dzSZYaMYQtkFtx8GzacoDjrAqeDq7xJXYREXxHKKKP4Yb1DnTRx3nyuuyRaTjzRiQL2b85m3XtbMvcji1RoVS",
  "key34": "4XRJj32aqfTAitamxh3WAEtJiM91RwiZSknoCfLmsnQ8GBtdHDpPJ9BgSQ7k2TRYe1GXbzuhTj9B8cUp4dJSxqDm",
  "key35": "4Xy5LoEt1qtTNN6GX5BwL3gf4faNBdxRNg44LhxLQk14sEKd8CuuJ1VqL7nHKBM2fuKnuJ6XY2yUXFAhvAgo5Cie"
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
