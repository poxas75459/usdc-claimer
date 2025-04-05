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
    "2KkHT4HBfKc6bhBZa1R3YNFDWBAiK84o6Lnnf3S4KCW8q54ujmFpacuXHJrBSLJpgiZbtP6WRQg5bJLAoSAbHMfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ze8yC3RhdA8ehQwtk5cerETvhtyA9dhy3hR1uuHTupYZRvm2ANrBEpy598GLEY7bLs4dRW6djyUQ5uMq9SEDCN",
  "key1": "5EueTb4dqBcmJtEQdeUfq6RKj5mDYVeNz584foCUN91z2TMf19K6Q4PygD1zWo1Yp6VnMaWpaZN31uPW8C7rJyeF",
  "key2": "4S3AiRRn7pvSf22K4rAxDi9x55eMzm5o2ef1zV5uxqrdBgNppQmBBTH2vWhEqQ3T1GzuV1RchcdDXooVhjxQRpRy",
  "key3": "5mJX3JmqNqd4SvgGQyvV7mGMeExbvhDMU5GPJCmup3QFQqSwr3wn2p9vREtopF2xNV49RVhXpHEaRgK2cQHUSLd3",
  "key4": "4he2rJc46tvviNKkRYvK6ks1cXNjZs9BA2FgRacPQLk4VzWUJb3yfzzmv2rA8zdCdAXUifwCQrqvaKWxPzpaoDtN",
  "key5": "2A96BBqKsRzUgxscShUjTLHmoxZp84ReR34LXCYMCZ5UH8Bav7b4sxaoNq8vXDYVSJPMfXRuaygAzPzoNGEW89p7",
  "key6": "5diBkZrCQNxeRkqvAEHkQRdrnc8iXA4xwVoovHVw68KCZWKU1QmwT3bz36nGng12Z8MSqaCzVA3LCAr6BfUtug2f",
  "key7": "1nacmLGPAmkcAusRsSQfn6WqzkBL5VVUUiqUpnGGLeoE37iCHRLbvmCYsgqBwwZbGiM3s42FioBAFSh4AWR1vMk",
  "key8": "4YwHQLHm5XiBV1cMCum8DeEgcD5jepYa3QqUYHktdSxJKb1p6r3zYMQv7RpdAE5K9dzg8b7nmX7YUuEdRsTq85Vb",
  "key9": "24r1do7R3KxK51aCJ6t3EZ1BPqgV3v8mYZM6qFTFG1iCWsp3R7x1SZDoZVjvhMYKnW9wfM3RjhZ4oZgND3Q7R78t",
  "key10": "57tb7UmpmqgdFjG8vGRnPMy53vshRxHEWwP6jGG8KrniYzLDxFZdLSYRsrwycK8Sq9tnThdPCxDghHpFXXzWmMww",
  "key11": "r1UPxWC5Rusp3ypRKUMWXEpmscMAraLn3DhsnTUnHmP9B4baMs8XvNPQE5ERh2sScSK8c8uQmwoRpJ4zzCYPLvs",
  "key12": "iqKSiTXa6w4fFjvhheNPoaLSLgU3PcSSy9GpRh2Mx6JFGuN4U6uqu4ovC1NSKBAkKdmfzSP1BzkfFKUcokbxHwS",
  "key13": "3ByFSWykoL2zSwQzeUzjvyT6uHXjo8LnCTbAqv61u9fzycHiuE5Ef39PZBqEaUKHU54GFysmp8zFeiGMUuyU2fBQ",
  "key14": "3BvK13dwXxWV7CuCAwn6wGEkgnVuFt85kjBUqpS8t9MDf9iyNTQGmnTHrvbVGG9ExN5maRFZcnRMHKG5VoySXPii",
  "key15": "ope6fT3iQe77icWW98nay5yTDqofQ2YiXRRu7JR3vLm84sKMG4avZs1RUwCNay865ZMgtUcxzYkg3GVeuqEv7g3",
  "key16": "3HnTr37PF42DruRWCAgnTVm1HwkWis6djcgQZCfvJ4m1DMwMStg44xQWYfXtA94A47x2xqRS1rac6ps4jtPiUQ38",
  "key17": "62M6TCBYJb8BVgU3LUYA9AuJ8Q5xTb4jsDXTocNmLD3rSJVJLHFvNcvn5gLqto6BK7sG5kjV2ZgG3E5yqbUX5M9p",
  "key18": "2ZGu687SGEmC2TpD9BGbbrKEnZ5nGnVQwmTFnRYQ1E18FMgFfwoUmEAbCe2v982HUNyq3ih3qVhF4vgqKWPuUhAJ",
  "key19": "2h6ZH5cJBJj4jfGff6Lxrh82S1hK4bZtPGoM8vmHuKTtemRMQBpFTvHxkc597r9J9g2bT35H2MYX3JzwSkhGQ4iX",
  "key20": "4rmgfswn6kCDJSQEwDmtEaovenmuL2eEZSYoURGwbw5mSR29mmEAvtTMjMfs1BUVSKwBqq1Jj8z7taB3N4JxZ7So",
  "key21": "6eogK3xvsfUrbjDAjQFsdgRDYHXamii2GQGgc6sy6rs3rr9E2wnxTwSQjVkaTwmCMUm2tN39hc3ZGnLHk6sMRpv",
  "key22": "2BBebZwj5MKotupwFWMLFmEwiiYYqfi5f4vjqB3xi8wPAfWijFjHcY2DFxcfYEPJxyfkxntfbCf1nnZHzD11UMSk",
  "key23": "jPFh6UpQ1Pob8ZFpjuXJpeuL29q63SSvAwryEgUEVsfbZpv7ZCT42Pw7XFqVGoRZb3fJg2Wqecazcw11XdRpoWy",
  "key24": "BUsedUjBqMEtLBkc8TUpobUgWjKYN3S685K1Egh2VZsGkybcWfvDm2bs544J6HRBjzB93tXDQcHT9nu98iWpufa",
  "key25": "2zP61PsPTSbWt9vKDgEhaNggUiZD4ZVGFauVc2YSNrL8JpbvimHvCZHyV6oGvt9ahG5wJp2CkJjnZ3GPcB8B6seq",
  "key26": "62oBJsQrqKqabUMG8psYfa9AADedEeBkSTrjUG1boVv2bePNn9C4uWATRTHnFUSt1F7mBfDj1KKtqfNzCQ4yHR6L",
  "key27": "3EM4wfrf32zBVXMFGdWDVTd85AuQxRiR8vayRS3qixjeE4E89324A1kiYJ3aUyAP5exZ1Q5DWyG4Ed9MkfDRYJYG",
  "key28": "21jmM1vAG4RBrS2fPvVsftGGUrTX3vGYukLPaWCFPWQU6caw8g9VinmN3ndGUVuQcAGsZ35EhWp9DEGkMTivsjEQ",
  "key29": "5pgcWXhbZHfHmttnYvKadT2rB9Zne8XKXHcviGzTwqubKP33SnUrhbeFseGRn27pkBEV8xSSe4ZYvSHvAS8bxDsP",
  "key30": "2sAkSszMJtsgz5HYbk9z7ZQNbogpSE82mi7u81L7N9zDpFcQhHFWYfY32wte8LZgkPigeeHsYL2uEKttGzXAdUPU",
  "key31": "4BoCjEX643NmNGdwMEfFVtaXP8SRnhi97gyzqKQ9h38DoPoW1oFTFVZkV8jyM2P7ePzqHkPgxBMxYWYVn9fDwCvn",
  "key32": "2xZsVHQg2YsVUjup1uRYKdQXw2dNq8rkJn7whzkSrpFPagu1dnovLonn5i6MiSuAWLaXFxebvjmeBe1KedXAoviq",
  "key33": "2T7UR3T4Wod1Ev4jPZZtW76a4XnF9QzLwGF5dgbHwFC6wiZDkMmo5q5UwMx8zFpNVZD4TN36oAWD8SkLRBcayyKs",
  "key34": "4QTRRDXGrZ5FzctyBB7pPw8n9DVxGSzT3MhSwrHs1JnrLnK4QRFaGkMimPU7HyhFzuzj4ws2d8WeybA9mwUD3wBv",
  "key35": "5jdh5tBvAP3yfZ82pJqE5Wyg4X11pCTD7zqqHQbR7KcMCi7staLWZCpAr573JFSBLd9YBLRoy1Qr3goQZauFx6u2",
  "key36": "3iMC3eeGFs3SNsW3TBDe1edHxL8m6ecM1VeFaUqbr8Re7XffRKZvSW5CFaBYoCYTLRihehBieuyXkKEESfMxoVgY",
  "key37": "4fXBEP6KZzbkimwBVkeibT8DvvByHVKT3ZT4JaQirWBzhcKCcGKEH2NtTLzwGc6ZLWVX6qq3wDFZ3mCAoAzvmokm",
  "key38": "3CcUSmc4jKxmVZ5W4W2cT1Yfkpjy7CKDbQ4UQSwzZ9jcZVoV8xrgRkL8theDU7oqJeNaXREqcj92989JbUkT4fTG",
  "key39": "3XGsWNeSFFtUAvHwLe6VJNB6pZHmJsu4HBpxeM5yZia21bLK5Ko7RCGZcZHANmXY2kZSuq3rJ1wSH4mUqzbrP4qd",
  "key40": "4vJWGzi3CKdow8wm4ewzE8YD9yxttT7kdkSoN1v3BfUzEiyiAKV2o4JhCifoJMwNxQ6rpAH34DJfLWCKu4JL7L9w",
  "key41": "5irZ66o5XxpvSvyscFPXPvJsp47HfwWdB2c6oXy93zZ6MLrHYzmvbn1BsUq5tunVBuhiqBVwiiyV2if1NZSgTcJE",
  "key42": "2wWLbbd9MQEy7WaC4wHw4dgTSN4cyh9pTtM1BD3pPhhKEnFLLHsiEQMXGpxg8hhcpH5UCmKaRJSSPWrT1YoeA9UK",
  "key43": "54BHxvDZLpCZqq8oZ88zgvgrnme9SnnoS4sQ2SrAvpdKJcygbepJHzQAHTRwscSDBFSgmSrvGat5mN5NeLiVvyvn",
  "key44": "Cpv9AnsCM28LorR2xrp11yGzcBbGePZM5i3awyCCFPEheY7DmUbLXAKDMk5oHVvqaQ2JTbnaMu4riDzUM3ABG7x",
  "key45": "43aPQukDts2FECXa3Tf3AwFrzXrtDfnmpzhv7xzRV3WRRWiE2TZwqczWmUD8MvcSYAj9sKwnGgt8yAnanX5WtSKd",
  "key46": "4Yg4oiS5CbmGCjPvykTUu9YbuptCoGstW4tmdH9auhFGztArAZQxx9PoWqXAEMzCUy4PatpAyNJjwnyjzar34E7j"
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
