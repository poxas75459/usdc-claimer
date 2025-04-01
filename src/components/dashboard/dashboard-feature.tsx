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
    "5vC6qryy9KZHUyWEHMJwxjPWyzFNkSxXAdon6jfZUVTxuufLa7cUKW7thzoFANdtSrR4MduqTYN8h8VVeQ98ynjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qWkkwJnXvgeDz5Qs7Lz2acH8zbeE2cVc8J4qFWnhYAFG9LZEEdvXgSKkd2ySSeYs95iR4LPB53JbdecGrLLbiA",
  "key1": "4uodJNJLwypJ8UhB8DkAJ4pNH8vx835oxNNLrDXAgu6ctU3yaepM8tMahDTQd7F4MGDN8AAaZxC4jaciaHXzuiQP",
  "key2": "5K43o7u4hbh9ibvvjd6woWYswKUoEBhK3694SkVKHRxB6GhoFvpLYgVWzxF7vWZ2KTSb8ybtPF6fRaayWZ8DDE6P",
  "key3": "V65Ls1yR6e7h9U6uN1msG1RAmNsy6ZJNuBduXbwDrqz3pXpagPGbKRTe9nNTCie3RHmbgTot2DhtkYT8RLRgDCa",
  "key4": "54qUGf9zvas7GE8qmbXSN6wqh9ATNQSYvDtoq9YDb7Sw7swtNRr7Kcs82GsctHAGLF7vbjW5puQ7fLQ7nFtZVyFR",
  "key5": "2iBCpLm9F9xvdX87bKd5FE28K8PvWfcSuzpq9sKww9GbJesNJqhSGbUErkzimxz3DjsZJtdyirH8ErbbYx5uHGgf",
  "key6": "4xssxg6kEvkR1wmKQvSGcz2ta6T9wQesbid5HKUZ7TWDVAMuFcR3cHpQMiAnpgYnq6UMusq53aeLCRWWz9JNxFND",
  "key7": "wd5gG7CySmzCEFmf6w1jCxuRPbo2vTShMjoZYh6Kqrm6CgEigA5TrnfBZwhhhdX9sktrfktVAvaHH8C2kJPkVER",
  "key8": "2cC1dQQWUbTBPC3CcPJmJgJBNvM3MVT793K6hQJvCT69yAWN94BuovpysRomkfJdrZwob9r8moSh7Cr7NT2L1Dag",
  "key9": "4ULqmNjzAN1mQGJDTfwGXnEKyPFHPDcyMdT2qpbmrJE4XyRMxWMmjGsS8DErb6ySHr9jNNGZ9npa9puLN5RJWry7",
  "key10": "2Kp1zCx85Xrahk83WZuzT1qsFCp9x5DxpH9K1JyB65xaAfWE34YYLJuCEvnWLxPUtKkxe7TfRiUjofCtWrVs3Xj9",
  "key11": "2Tw4aSyMrATfWbF4vPYTHnxz7f6UE9vUv6omsEzNEct365HfngR7sKfK2Bh8VNvRNKbg4cRp6rqt9vop3f5kY2SG",
  "key12": "54Py2QT8PmEhn4gwX9J95caX1gdqL3eTu7UMs2ozkjksPuKgVBdYctzMRDo3XQCgeZCieh8ZJYapmp1XxRkTfPZt",
  "key13": "57Xxieu29CLgKfDFkRNQvxcY9BzYM3EGCZf8Gy3HxbvMpTYznpsFrp7eu6BHGgJ5GvemAHHuPj26qmWSms2N6hqf",
  "key14": "3vMoJWF247qK7vCnfSMpBNb7r8wYyChEDHmBymwQkSr3rQQL7UsRgjCDMkNeDvGmiiwk5Va6xZXhUDiRqNKL6sPh",
  "key15": "LWXndAtUjP68aQvhRKoCxzM8AYFnJn3YSeNG5i163jgtrrZogFsBs3Hz4UxzD949Wg5uWWebjb99G5kZbVRczmg",
  "key16": "vLtFBsQoTBeC6tNYZ99LskEmPPtH2D2JezHP5dMWdG2ipZpERkm6xDPQuhXX2fHHMkgrTaVKvNCsaLd1oSq142Y",
  "key17": "4fXXWtS27Ksk2p5H6CNTG1DrMTdBvMv4iiim7rmLG1qatoaD1AmtK4WuefUXWjBPGbuYHEXwQxUFN58QbCCrBHVA",
  "key18": "3NyoshqQ47vTTAAw24ouiFstVMTRBwRbQqYW2TU4Uy5UHtkdCsKXNgpvFfjYZREvoiGuHod4QTx1Q5k2wo9xzPxV",
  "key19": "2N6HsTjbDqVZyvHAMao16XsRDRou5tEr1xqj7TfSHsdK9AXH298H24sQ3fZKp6W8NqyyHhdyX7FAB7zCwXcY7wEH",
  "key20": "3xCUaXxHGVfuujFAL69d68r92S8mqtcZVBWZsYXGEhfNPAr3R7sC2uuwXxjjvgtHiMQ3skdvYpWt6u1ZxMEyWNq7",
  "key21": "2ZpXM1RYMr6Skn6Vot3RUu1zs4LHYR7XMyViwJDCaiqA7roYj4MWjGipEMRmKr3ZhTRiLyzfuMiPnUyVBJNzDNpF",
  "key22": "2eg4wWKodSXA3mQRyjueFmE35522NnRQWgqjTFjqnqqAYPjLSo5zRULyn1VhnGSXkYubkC7n59dt4vYUfCycQgUs",
  "key23": "4Po2ubdB3eexzpVKFvdC8H6JomouYBqRjMNg39HZFBj7P1MimG1VKR5tmHPFpqT6VnqtT9FMA978GEq5fe9WQaZ9",
  "key24": "46qJQNjZ2bnU2B1eWvbUPTd1m6h1ep6D8vsvVRqhyVTa8ajANe2cyZZ719MXBvNn3tRsHqg2TMzc5QZM4ya7QCVT",
  "key25": "5ac3QH7tu7A33XBNZbjZ32gw1tng3Che11DXNUpnEbL9Btfesd2yZLtnVy1541NuXiYmCuy4L362TtNvbiQL9Ctx",
  "key26": "2Tbd6EAWjB6FApZLQ2uGxB9S574JQ91Lwem8iKqPqo3Ev2msPxLSeSrM6biHDUx9EUiaTMWBRChi97NVgNkqPbTv",
  "key27": "2bvhxDgtEsk4CxigGdY9p71RJaKmfEQRakB3KFEckirH9E6HqSmpTEHbTg8korBvWgAyVg5mFBtUSsPYkGBPsHhH",
  "key28": "heqoL1Lv4roUMinnHwgdGuwxfeFn2LmbtNYhV3dKxkovJed5Dn8YmkSm3Vbq5i5LjuCTYPnTxBgJTicFvWW4jfp",
  "key29": "2KXiPnjTockGTWZk5C1DRvYkXEJJtPz6b9wi7LBLEwKxzaJggYBGDb88Bz4H17xtsdpHSiU9VVGBzCFzhnGP1o3i",
  "key30": "4LQVeqcXYTfdkQqBMsX5xdcC3mMHgKjeidzSCXZQw8hNnpvTWhF3CHWXTDawvrnYPajvav9ShqRgRDPLAxBVutT1",
  "key31": "35d5sCFfUVD2eEM3zRAtdD8dVJBFDnB9kSyuys2q7URtxMqWFbA5sdRjGMbG6k7gH3DxKJBzwyXtzmrme8pcJ1S4",
  "key32": "3FpgAa3tXvWZJVaU1b8fcFw73sGyjzAmNxcb4vDYbUZ22FTYYCJzNB9uMqHmCvpMtHDbfuoTBVAQaydQKaoy3WFv",
  "key33": "3yo3Kg8g35DAv5Ve3HiM7A3K1hAoiqM8eWKd9Rd4tMyX8ZAFmtKfZcUSD4rCCUfRZnGBRR9dtjwoRziqRWxEZXWG",
  "key34": "4oCnQxD32GvVygQpskyrVgN61dEM3CdvnZDmykVFYh4giVs991CLxNMzbHbtVRsSRatJvmDCjTBBsJowDFrmjQi9"
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
