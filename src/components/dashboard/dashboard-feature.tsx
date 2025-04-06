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
    "3zuRdLCz63mRzm8ZRMSL3aH27kkTK8Dcv77UAiEf7eeEDUtoPpmvccHHFhV5YnL3tKjUZ3e7sXafEJeGeEkAGLaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGNGcPXYjsqE572BWXDUJbaBrU6xEA34eRP3vD35QkLYK4fP1c7GNAW5E5CUs2vnDPjBVfjjoeByxhrisDBY2b2",
  "key1": "4CE3DMyfBhty5wfN9C82FGHukpWiSa1QzxfpfHJgqsaT4heFqkg1yQjA7xTig1hWYywd56d5sxMiMccr2nxh6mDE",
  "key2": "3ogvGUYPXPvRkpqH6TzMpCqiZ287Pzg8NBhM9JichzkkTUu4ijpktREWv88Czv5QTLiALxy1g2h2pkVA3t7yFXmB",
  "key3": "AktVwN3EbNsQU7X2mhgm11w7dVAnb5shgYfMBjNsgv1Lu8X2uJaSzEMtyM29Z5SK1sxWnXTHsLCQBN9YQ4VjXPH",
  "key4": "4gpBs81sH5ekVJ8Qs1GUs3XXjvNESkJAe14j5vxcshFacruRgE9KUiVdrJ74c4f72VtGTvaiTheQbheyqDrPKTUJ",
  "key5": "4BAAPkZSTCvnpfVFjcqLQSjvUcHfe85EqMufKyCX1d7Buqs41ix1AN7Aq1SswTs4v2UMumh8UR91KDYetGYNhXQA",
  "key6": "2J52AVgUwkpvvZBraBDDPdhGig9pxTQLKWtVr5Gt9rqGAtRsqy9Z1r4MpxDJwaYewEMFVFJGrZWe2ptL2BJrUNqv",
  "key7": "3BKNgxXc7PRadyC9ByjBsWzeCxbBRK5J6vwdWDK7yYKicSxJMhahJvqQjki6BD49emyweC58Y7mxMPBrQSoSgobS",
  "key8": "2MXP9R9o8mxVFZRXDmc1TdK5zdikYdn3Qy6JMG6q5SWiwtGJEYd3ZXbPg5KEDiHLa2vSFuiizhHrTrrdb3Gkd2Ha",
  "key9": "2vMsiAKY1tTQU9wg78xAokSS7gQAQ5bsYXdp8vGxyRASuRs5jWSGY2XsPx2Dv1K1UwbBCvmRpouNArrKw7D7Sha3",
  "key10": "66fM9dLY8WPssBvmCXxxSb19YJvrn4YrqYu6F39rUC6C6qx1s51s2XZLjAHXno8UeDyuticBXNfp8UnxjSVzG5nN",
  "key11": "2B9L7goznqJXxga8XckJvP2yKeijGNwkn3AeHQn5Edu7LJqB9WyEmRFAAvf5sthTN3pwUakhVEnC2HtPP2quX4hi",
  "key12": "4kAfqs6EfLU5evnnbr6pSn8C9xWnYgrGDrEyXWZmkTN8bbLJNP7bRoGsfkdR8twGqnCuePKJLFbChEXtBsTuox6w",
  "key13": "2589Ft7xVqyGBihit6n2R1YFkTRBfJKpfbPw92B57CTxNShvqEKNeagjbAjDjkg6NtvYE1eSRV6kuy2Du76Y5XpC",
  "key14": "2rgwbinfRsqHAKsyWHpqh5tWzbvUT4H6pgkryryaEeqJmRdAWnn7CCxtc6SFbiMU6M6TqczEjsB2AKwRbq3HWQEM",
  "key15": "5xCtYLjeXAcuroBawPmtBxiriFBFRL8S9ydha6vz82v5YBiBs8ddmsHRiYzdJZ8SJDLTgMTH879yj8ViKYP91nSh",
  "key16": "4tq36ey3qkqrqbPBrSNskocdxmwH6fqRtq72us37bMjsnXi6PELPZpmYAT7Kp2fkjg4LPVGWr1KXSJWJzugq1S5s",
  "key17": "2QnEs1UDrRTvcfpN7QjTbj9n4zkzFTd7Zqh4kakNVkj5r1UggSAZZ7z4ijbLr9wG7dkfXAJNAJ94LPF3ir9jWbYP",
  "key18": "5jy3PDBcDwXznuqzgJ5wtD3H1vyu91uWsTwB3xH2VzLN1f1rbxtyZLWEwGLAsUeVQhQ9fWHdmKH7QdWrkq4U7oXR",
  "key19": "5FDiJ6AKQHD9Xb5n29vokExmcUq9C12EX7jcbhSUwVrHhB8MfDq6dSoZAAfLMyxdxB6NXFubLkQ2qfHHyy6h9Ne9",
  "key20": "43jL6MjZoiQjRGf221g1875KUyYmRavazLwQErcgCJWDE1WE6aqfeTZP3rZ8p23rN7RGv3gPfdftV3f5BENFr5xD",
  "key21": "xmCo8FjzfEAR46PeRSAx4emXQBHRQUJbRtP5tjrRbveQKM2K1t8AukveRDP9NC2Zr7FrvwGkq944MqwAysoGz7L",
  "key22": "5AVkSEp9w3bqdiMtMiibhfgyPgos17ddCPNUcRkTLp4MtGgTzCPWMVe4eZ83TMK1qaXXCbD15YZqRdYHGjKR542G",
  "key23": "2CaPRwifkbipmLcHDCr19nrmW7J9eAMwF6Q8dZkEuRLQ7E87NNeieqL6deunfRxqDoocLdLqT8r5RKqN38nuX32y",
  "key24": "2wk9GPDwFNMfesQGhjHZA5JW25zEegKXF3h7LxCZLr5jGMMpCrMMPJmsLFAWZxPT9R7B2BJm71JDRCqmhRgPwTj6",
  "key25": "5YMsTWf1Agmp6CCuBiZSvGuKmYTDQG162Mw9FgZN2g1izrQJf525suR6nYgEeSERDZPGDa8XS1fJ7nnLAcAF17Dd",
  "key26": "3RhZCNEk88JY3BBE6D9biRf49BRfip7yXjnCve9voFWu8rrwjx7gHYyd42GN7Lpo5ZwJcYmq9g7MKmtQkdHWoUwY",
  "key27": "3miewPaiMG4sJkFLx23KvgwD9gb91QgWbq6V1kdmPGcjNeVpCoCexiSdibd8s8aCXagd6dNf9qMyFpFjWGJsnQaT",
  "key28": "3qULULN59FxwMdYBsWjyneyGqnRmS5Zm2AujsJPB5FoqaCSH1k1P4u3XXTYRgbEt6rgamTUH5rKkSREd4aTJk6LR",
  "key29": "3EojTN6tUXP1yemyNLK15emrVM21RdPCWYHGwk5KEd4nMghY1V9c4UNqACnHNhBeU7BXSyRrCBN5p81g28MJ1g5b",
  "key30": "4KdeC7PLNpjmn3h77su4R5bKhD5wCt5PGpF1JPckqTLBfGLkMfpZFeSjXvDfU4sBXjTggMyrCc4TjgRpyszYrzZp",
  "key31": "qwzTCrDdwdbF4DfipoStwk5NXKSsnugRSfG2VrakfyHZsPJMw3vQ8FGGddSCYkMNm6DjQjZrGdhcbhD7Tfut4hM",
  "key32": "4kah1u2ipipe3YJpujBJojQgmTNFaknqJeLpnA9Jo9kRp2q4rZPFsFVsGyk2M6JTpdHdKFikha7TNkF2kF6kgEYT",
  "key33": "5wbkrhyda97NbfvyQZnos1J2riG7yzJc8ffb84pd14eVxHyQauEX1RwLrCJk6EYsi9TGkVhfwvSURmCYDX7s19nY",
  "key34": "5UVXbV1GY9qSghNNetzbnDQSP3LsRvm6FehYAbxphhrKRw3Dw9QrMnfAdYuypgR15YscZEqhKkjp2w1VqsUZBpE8",
  "key35": "5NEt4CDTYvDRaS8dw28VZxnLn7QaQKhsBhPcN7RE5Kx1RK5qpET9rpX2YL2SxBZndvhguBAkmsjWc7gk5RQHGBPK",
  "key36": "3cw1BrmdCkgjtxEiHgu353zoMK7DhoKGySbgoHcvAXF4KvRaTtcR7iLUhyHceiZVD8ER7DzZpSKsnuYuMPwkMSKV",
  "key37": "y81wcMeFuZxLviDGScSSgkUcVRmCVBuXggfVzPfWTn4RW94rby64jQvSJpoVNBf9Qcm5nH79SJgM72vdRiVtQ8p",
  "key38": "659Kvqrb2Tcadbss6hGm2ox981Y2VoXuyM3YyRLRLp2DJVmQnazadFM1ohTN7vySgms1P6Hb8HEe5SdFjeQk3dP8",
  "key39": "vTdsvQLb897kcj54dRDeHtk2boRdPPYNqQGNrX6J2LqYXqyrK7p6oWEMthVtHG2of3M1MjqmgfnuQ8WqGBVFgoM",
  "key40": "31V2gJRAa6DiJZZheVFuPV1KVtZX4j3vtmZny8z5DfERMFb5mYJNwZkauxMPNCZAY6aw4TFotCWdQTMwi3Pp1YbZ",
  "key41": "37KjCcLabH8k3MSJj7mTH82aw5oSCjEbhH3AQDjSGqPUx1ZGfPxwVFenJwgWht1UtahpebXuBeV4sfZvaJ7KwgYm"
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
