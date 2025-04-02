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
    "13vKUsGqL7x4GhuoHaS7WgZyg2Mvz8WcL8CWkKXnBDrjGCyM8ruc8qx6bdLD9WMzVXcyiB7tBp9KKaeF73eA7qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6YXYAJCcozWfhDqzpuhv2XtAx9wUSXANuZe277mawB4BMiiPm6oJSrfRYXeyPPgjTghH7q4cCtjJG31jt5o55b",
  "key1": "2EHm24RLo48ewShxqQaWPiGVTXpt158fprjk8CPHJJ3A7RnLLvpmu4vf8Ny8tDv4VSC5rUG4h4eGTPhZL4F5dHaA",
  "key2": "5h5Tu1YahB3SGpnub9RmBCdoAFZErNuiGku2JcjpQECsgmmH6kNLWQeXsz7Qv5gscySGqLCNsK7qR4wVAymkjAKh",
  "key3": "2UPvYScHMzURF8KAkxFG5sYdJdFLRG7h66fu74Q2waPaC4Dt7Fv8MPEFpyu7ti5ZyMVFYoMR5WYBvwW4V2k7Qvsd",
  "key4": "4rXsUH6gBLHmgDaA3C93FjJG53rhQCANoN6qdWXBaBhhfiLeCqtCQ8tLUw2Cv834hAxMKvxXgSAUCR5favZg1KeJ",
  "key5": "3g9d6nsPKeKRZXjiaV1DUVHT2HJsEVRThcaLGaboyUN4dM7oqjjuN8KNdQbhWuTXwcFjNWWnxZ2Uj3yxAHpxNGqe",
  "key6": "3A8CAeD7x6Ghu5Tm6sd8Er4gThVZdU4nNSmTWjAiUAxnYqeGofFunbyo9sW2oAGHVw3Z5yX4G8F4ixwV7vaC6W6m",
  "key7": "47aWztHoLNjca78841EVWYLnSD5EfUYxDQXzRhb12YLssjFWu6GrRUvhQcE4yBEitSNobiLoPwdarfK36HCnZp9Q",
  "key8": "4iUawm5GTatYzcALRtzZjUBCvi6YJBXVUCNvoZEwEKnv5mywqdyNouXuQaTYBSkzYxXbru5xeGqN7Un6gLydMvV9",
  "key9": "2yFJjNhKmfpG8eTv2nBs1JUuBS4km9mkYH52UBCe8yVA94MHoakvM6bdyfJVGocECjoZr8aJsqhk1ddnSVBaGde1",
  "key10": "jfsfB345uQMxFwtE44x3kwFyFCu74R4F4PiXS1WzheQJe8yvymGEc3xVGJznSfmCRf5Q7QTGwhZiuRVPbsmrWVH",
  "key11": "YNmD7GiQcXKj9sTgBDYA451iwWhE2LLqoS9WtxvsNNPkRDi5e96YiHLgYW1tzymWb4ouxVnq2PBPDsUqPQ14qhX",
  "key12": "2si2Gvxqx33AoJnJUqLHVmcFwxpLJmqzMPRd1tH3M6YyhdDBjbezkU2DV4S6ovAuW5MeaL1PJ3xNysT8viHEWpwF",
  "key13": "5QtYTreq4Afmb86v4a8PVqspF5JaYDxGSEcMaM4Xe9aagP5PUMP11BtvAkXwGzGh4DPJ32Xh9uZ3dRZ4RkNmsceT",
  "key14": "4cmmEk3she1NPV3SJaCzoiaByjiWXwm3HznX8xSNz3hJrewAwz1ZBkUDKuUpZ7jgbsRetjyUbbeRx3TMGDY5jbGh",
  "key15": "5BKyHRzbRS9hhrkX3NmV6nZBw4214gQo9NdWSJAVemJDaeGzsu31SEzAsT45Q2FTKkrFWdWaAxP7uTuSLDADMVwm",
  "key16": "G2oc1Yh38xk8SmfXZkPgTxHH4gEj67UziJbttAcVgvrAW6KY62hVVdhxXJaYDuY3M4wrSpDtoXz7kzrhn8rwHWs",
  "key17": "8vncnvKXgUSs9MiBti6PjYzRCTm1e9mRAuQarANGsVUxm2Y7GD8Za7uLMWwK2b1eff4UB5dWDpXSnuusorWRVW6",
  "key18": "59nVBvg9KmJBVquS9RGkwY7EUu3URqHW889pVKLwteWzzm6AcgNeryUVp9zaPEFmX5H1v2fH9Ss1vQgXnaoCC1ks",
  "key19": "4WwiJkNqJFtV44pupeJKa6dvLvHZm22bSZ4Qg9fvH5QK6aXygsQZNq7r11c1UHpsbdzrkDS6a4MSJ3iqtnHKphsQ",
  "key20": "39KjPbAkLwUXrnttFYfq5EmN95q65mcfnXL7Wj4QR7sJJrn3r58FveEict9RfFNTEewCgZEUqzddDQLwXg8Lzavk",
  "key21": "uJMwcNcQWpdjbgeRMyXrV2uHrNrZFbxNTeEPADphZqg54VFwo56cbKTQ5VbZ7ReyqXn54whKY7UkD7xKnMornZj",
  "key22": "NUtAfQQmtXyoFpM7MD9jaP3DK2Eb9EPXrYA6shqXRRyBsN4iYr2zGcuz1u3ad7EBbD35yh1JchrLyx2N4yTkKd4",
  "key23": "V5emX4ZGQ9dsbGSFbuP9BXzHjt9qJbBTaK2mj437AgFqgVM6nggPEwf6PGmUW2KembrJQ7mQjBHxtKcjCkMmE2Y",
  "key24": "nN28UdHRXBNBHAmcLntcKviRfcArx8YQyRUN1tfhFPhdR87x6YfYFq21C13ogVjkHBMToRH3Wpte5KZtWSLTTfP",
  "key25": "Ft1jaEfxXGfmhoiqBbuYCBVSnkFScQj6Q9HCgMpv42xitQx8k2sR7HFT1y2K9rjpFkyEt98fhLv1jGGjRfhHhsr",
  "key26": "5iCyuDhWRqHpr9GoUo7kVmpF36kQXDREkdLYp23fEbzg651AxUc5hGcuFKjhn43Rm5hBvDVi4pyJKSBkf7MXiQEb",
  "key27": "sSN5f3qQACZNYqEkrMoZ4DEf8S1YW8WVEiTgcTKfrNNT5uc3GsuPaUimrTHFrWURiSegvjhbrCYtG3PD8NNDGcq",
  "key28": "24ofNAzxUxtNnZoaNHzdTQyFE2hy1RPfxC9usS12QW5NTdsr2duQRKjQctVhJYUCuYWWMxM7D2r5xKknRdQUiKFL",
  "key29": "2AiQzQYkn76VwmjtT2sg2aUN71cWLFjGV1gFnYVCHY6CMCBW2bjsxifvcGXacxXpvt6Nc88xtsU1VnZeh2a15NtW",
  "key30": "4pd1drDnMJp5jfkGfG3nZgssdrM54fP6S3CeBtpW7j9m1GuvSBxn551yKYBG7KpZsQhSkBP57hKbVCYy2BXbnWbK",
  "key31": "5iKhL4ZH1zFo4vxR125Tk7zd1uaUA3WavtrcufgJWXH3y3JNvm7Lzdshr4injXs7hkc9wSnRpHJ49nhsPAAEUZYS",
  "key32": "2fYJiTcFhAFtcbSyYiZxXp7hvSgjue9iD2Z44Qqr5DU5DzUHJHonzzrtqgZWYtTwEXtkoEwe3xfenX37znv9Yq3S",
  "key33": "4X4DfvsRAitnDqzCf2RJm3ug8Fzr8D8aX2K2NDHrmveNWDeqVrjudNu1qCGycyp4x8E1WZr995joCC9ifVp2dRqw",
  "key34": "URqf8vUvzNnzYP64aYBEh7gDBaziSWzLWbwmJQcpudbTcR3tX5C6s8bcfzcsEYZtAwRfc35pNkVJiY76fSjLXkD",
  "key35": "2iBnPYvuCBWxA1bUCDxaZYto1TmLVmkMCeiSU25LfH1fpyzTkJqgjLrBQgqPTgd47phEvQR1keAqY66T3fueCPwJ",
  "key36": "4w54ogbGr87LdXF4sg89gLMe2VP9BiovmcqNHeFXsHD8AofmoDcWaZjw4i1xAivTagtQKJhRMeG5BgwBgN5YmCHZ",
  "key37": "32uqTYgnHksAMnYSkUHPFSgBnnYHB5oYtHd3xSovsugh6o2n8kqGgCSf3Xj9rhoVs8JqhAj5TRf1PPfACMd8hTDe",
  "key38": "3vMxPicgzgt4zRvr1sYggTAGxubToFbyrAkpDB3eyqfYXMQUuGudJBTvzVREpXgJjQ54gk7mJxVtxnGcxRmTF4MS"
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
