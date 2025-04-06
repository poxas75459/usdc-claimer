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
    "5w8WxMyesoH58mi2sfmvUKCPuGFog53qZjngRJLXtGHxvojz17YyCg4EjqtfEuqzYm1fUYxwRgTnpPU14QHBbgh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NntsroM2pLPhqKswwWuMnHJQZr1b7XtKdDViEm6RALK16FKBMSXEHvenEurWjdLGNvYkEuksaM32S4p5Pf2dXTo",
  "key1": "4SJscfF5u4mtiZu4JzuMx9GppH9Kn4iR2j63Rr6shg2K6pkSpnJZFcSx3E8yuSQEdGzsJBdZL9XAWeQazH8NFaic",
  "key2": "NjYUZdY7YfAQKgUeRLD3ovLXg83bJd4QkNGHT459pX7NBEF7pSYYUqXvVPLxTkED373sSYEww8VJ1HXNw3vUVAr",
  "key3": "4bizuNzRdX7McrgX1qJsTE3gMHaWpR2EKUSWQDBvK5VDrYTJHWpGdvJgcLpYL4X2rEerHrUYqQSSrbFEYuYy2ofU",
  "key4": "64cfpJ1er9QLcWfXgBxv2jx5bhrkP2MxDuwMMxe7ruJeRKYjPQ866br2YHocwyC4iqc58AbFKwsvckdSExBmp9dK",
  "key5": "3CMu1rK9KQJMhsdhcgivqq79LLdaPRcUW68XArbrBn1MnFHBHwLnwSLZtFPMRtp7ALvD1eDZyympQ5fZWieE2knQ",
  "key6": "5GZk8hw3udAZM6jFVeUtwUBvBWwYX4KwJTvdqVptdFT7i2YghwwHftRYSQXpHFDQn67cvkju5frPE7XMVD7BdaPL",
  "key7": "N9oVKqKVFKotC8MdzYY1rskxNRycfhEK9J7TDt8kNzeRLGxZ2FetCLtwn48XFpjvxrTSB3dq5p4vKcTUZAhbRyS",
  "key8": "2RE7Z4rBhQTacq7mntHJTWShVmFoMTS3EpuRv3EJZc32Ktzsop8HotLp2DkRcyknv2SMEPkdKpy9HfMq637aFwsU",
  "key9": "wBej2NQdvFeR4uwEEVyQKGHwyqH87qe9UM81ikCony97efdPLQdC2GmQYmruy1jgpJNBTTxGPhNVCeKn9jGZcFJ",
  "key10": "4Yd1tBTDbK3nq1DRQNTSqHbYhuV822jmBUdcXCV8uxPgghFUdmXvbPQfjj4X6yq1XTa4RhEqP3Y6etFgLv7D4fbm",
  "key11": "462K7ZH8jeWf1FLNe8vvbSkY7Q9YWy7C2voBi8DRDKEPZmauy4uhiNPLYUHYuhrUVnWeHjBtuCmXoRuWuqMAVV9s",
  "key12": "2P55jXrFCeAy3XVDrs8smwWAkby1bRRYUYxFVw54ER133Sy7qcQpMuopACkXUGGNDkpVsh1zjQnjsrDXrJuNNhS5",
  "key13": "2MMnxGVevPQAJ66LqN9skZiXwzSduNBeLsYjereuXwUVEiWyXCUjG5neSj5sJbnFVEV8c7SVVzQc9ziGYBFcmKHu",
  "key14": "2SE5TgQQkRvwra6hYqtCsUmQtb2DVqyeq4Xou4Vpduoq3fhunsi1aaTxyRaUouthV5LjeWveerq5MJa52sWuoPW2",
  "key15": "3jkxLEhAR8ffk5dGrREor3nu7zBjSrjcUrNjD5kwjnkVMkc47xrA5FhJ5EkyWeoSWvGnBXWaEzJzZfM4wVj6SjB3",
  "key16": "5HECigjJ2hFU3EZfsNPCXiQC1uozUE6u1GbGYnC21dktkc22EqjoTViHquJkmPA9zTXkJRnQ1PTGNK7SKkHmnMZ6",
  "key17": "SxswfqEz1QfXuaHaTKoj2iMrJQQjPUNff166WS7ZDYwsvgurF9j226d4esUAiG4Lr7pkXXfxXgA62VL5NtwVX6L",
  "key18": "2wgp5PMF8LfStd7v4YMHFxarB1StsT7KraYszm9Dj16Y9WeF3PQMHgnZGR5xwSv9HnKxRJKVvox9cfAoGVtJrYpk",
  "key19": "h8yrCzpxSFaWJ8NiJzwPAsPgJRjNvFkDNNBmTzESX22Uc1bf65xCBd96UHu8sbsbqBXvbqyvsV1ESVP7SqBztam",
  "key20": "5Na3igvsi4DSPtKguvGUB5ds1DJ7ZGC2zyRPn4g2s2QtVoGfkkjDQSEuAwRQb2wk9qECm7e6b4ySiR1bB7GDXBsu",
  "key21": "4faWttKxK6JWDdYQgdMrnf43fFrap71vPhwv95WCqGu5e2SGWKECW6hoByfc6czj3o4n3vpwjnt5TCHvsWfifDEG",
  "key22": "4vgPvBUCcuiH273PzeiFxz73ynYku8PTZ97iM2bida2WB3jKuC7KD9QZoKNsi8HyGQr5o1PCuzpx2wG3Ww9fs71Z",
  "key23": "4J2Gg58vvyJu8yupiLPAnMKGRXVttY9EHJMNgBZeQVwGAa7pw4XDgGWud5QtvXo5WfcVyERT1wumMTzLeyV6bnpP",
  "key24": "5foxEW9YJgBUv48TYNrGeNv1CE6TbXhj6qrQg8rCt1Tc1Vyig4kE9QckUAtH9nW8Br44saj5DDJeRma3KioPM9Vq",
  "key25": "3uCvHxWrsVWdDvwxnN28jmRKeyYJdtEgtT7SAm9fiCrqEybjKzmKc6TnAM6Pp4NvcDWnjXHUY7Ctvnz4JJk3mQJ8",
  "key26": "47SKcS9XQEnR66ueGywUNoZCHdfojnhJ5GW65oVSuSp46i5N5o1uNmtws8wjxYD2z5PZ4VKPNoZsiQJtpx3QTSAL",
  "key27": "GhaxboisKy9bH53JYzmjCYLNGEjafa1B1JAcwZwTRVsmzdpkJuJNAogngCSbvsFGs8g3husHxpuw44e789CPdtj",
  "key28": "2brybSorNmLNJ3Xj7FWryj2GPUuAoCQXfHpwjWRb6SXUJwF5FGpX5qtzGsRcr2r9kv6XmBawcKHyL63Qa1bSz16z",
  "key29": "3iLGHBbAdmZoiw5Qay5rvDj2WCegyCvP9Fa7j4fs3qY3XhoivDs3HAg8bbT1mP8pBXLWUwNxcizb3sXe9GDBLxFT",
  "key30": "3MzuUfDiRwGLFe7M2gqp7sXa171UpmQJcx6gMCXxTj6w55UD23Zc67TxN7uBdb5PG4iT7xJ86gCQs7vWeCZ41vvL",
  "key31": "2tLJFqEDvAGLyVy3qZs8nDsCr4ppgsp9ruN7UCPyKbpB5ZmDeFYZKcBW649mPfi5RN2mgjf6v23HdUKWLHzGitoX",
  "key32": "2x9zQz6oE65d2rtQrFGVRHBBCBqRxfRzTTtcuataHESrPTgfLF8XTcwjiTB9rLszu8eBwmKNgD7inZ37H6URDbEE",
  "key33": "5AaR4HiGdEXiRyRDKEuEz3rbE5RuvUjty587RY6KraW7eGHKauFbmgmqe9HVtqCruyJQB2BSpoyXfgv7kN8NudGZ",
  "key34": "2k6rDTu1aPHdpXHLVKvpbvJg9UGz8iXBnEz6WhRYTU1jewTJ2XSKLXYz4Wj6Jk2zUuC4JzaYspELY6Dm8GrmeCPR",
  "key35": "5LHou4WnNTK4GeSwq1tFgwCCHeAwXVAAUK1puDGnR1BzruCV77NLK9rh3gG1JhTcc4CgVsKv3kgZpCiZ56642miM",
  "key36": "2hqNNCV7mSahkz4j7yC3AUCR7XGaCgUvH8bsYAdw8EkJiPYr6cugWnEX5R2FGU4ejpfEbaLDSmJWbDg46VsExUkp",
  "key37": "2rA3pGKxpK4TZYcBbiiBu8cFeVh41p4bRUf6CaVT5534vYRiDBpaGq8D4dGj2tghZBbvGRdxvTnV2ChYYdKPvm9H",
  "key38": "3rjtyqPQfkL2m9CugTsZWj5V8ik2AoWMCEhKiTcJ6cKAk32PMCwWUZExFnitavLizCZBXu37ZV5wyNUeG8RPto8W",
  "key39": "L5n6KyngXR6zErxPaAoz2P11MBNsMZJ5tqfNzBY8DrMZCpiru9Wkg2MecBsQpVhZ6cz6NB38qkTvcc9pmPvbXb2",
  "key40": "2bcmJuUVjJaWQZ9XXhZAAicr6wDS7dhB6SDxnv6pN2uypcxipf2C4w6SVNZ4tHxYQspwaMwCspXMHqhEUaK7jSZ6",
  "key41": "49th5uU6AzwX8ujdXMcGRwY2Kd3PByBHFgHKZD57omuQoEMwWFASqRSnQdXCWNB76hjcpjHkqjr4t2Dujz6dgCxM"
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
