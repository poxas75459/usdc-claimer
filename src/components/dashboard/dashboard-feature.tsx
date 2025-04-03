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
    "4cH9YsMT1UY4qdm4hvLg8kmy3zw3bjcwsWe43woMBTVLD5Td6k8WAs7svUoAQnmHSC7feR2b1qLG7rJ4fr6PPwqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFdezrycUg5auN9m9YH34TEQpzYXs6YtLUv5KcCbfsqRnkYdRnSuBbTy5vtzgTqKfVSobRhpiaz7LihtRG4K3ko",
  "key1": "5uw4mQB7MkLXeCJhYpcbkGWvRdbFziGwUSNdC2HMLGh6wEACagwvWAA2VEQXubcrYqoRZfQ2Pb8GmF1wVkjRRtC6",
  "key2": "2C43ctcx79wxfbEmimkwHbWd6wCWdqCNyQTc3S3HTbr9sLXWzod9yQPNbB4sBYAa21gxRb8Gyks8TxkkBZJC7YJJ",
  "key3": "5eEUw9fJ7LksCKyJhzKRzup3Py4HCHhGEZwoZDppHFJ349acjNBZjUfkcHbgta1YPJoc7Y3xX9cmjAnprvzDYoek",
  "key4": "3GFUEgPdUPzhnFo6q77EBq8LycwgfyxwRbLHPWm2yadtKCNr2NeMdzKD17ixakzMZjBytgrcg7Xw27tsqR3LmuSX",
  "key5": "31moNj34Esf9rTCjNDAGE1bDBccnhP4djjJsbCcSaJgEp9XRT5Byd5up5X7oAonSFxjxSXqVEkQmpf12Z86h8ScK",
  "key6": "2cR54tmBnGQmz7wAHVYnT3NbNMng9uRCmEXZm9uKGgAPfeXhPB56J8yMjkFkuf3q5hMJ3fK2Peqt7eFavuZHTXA5",
  "key7": "3geq1M4v8NKykXoLJ9zh1ThYHDKnVXih9aWcQmiyrogphk1uLQhbEPPQSWRXxSAyB6EeVo3YDp1mCrmohJik8Qic",
  "key8": "4tq6uRUQhXkgGAcW1HwQLzpxNGHHqdKhnjvZWofcjnDi6X6seKk767sWRh1GeVESf8FRtC3BPWkkQdCeKFP7ULfv",
  "key9": "4dPaUD6eL2dwJ3WePUnwm3eDMQzLCzpmCNEH6BYfr1gxUbcTKhUxKKCnR2g5KF8bziJwbN5Jgjt3mPrSzZPCjAqk",
  "key10": "wcbUF2XhCdCfwv85s7DwgHWjjwCskS8gqUwcaaTiW77g4zP82hHysdVRBHjT958k59CBSvZsWTxYckcHEfHwDnR",
  "key11": "ViNpZ73yC2knjtL8PhJWinFGei1ezDXs1FsxqXrU99pqVhjEvVecNN1DzERbv9cgrzkyFeeRD95W8yQprUDHAis",
  "key12": "5uQLrdxbyyn1yNa14cocMbDS6F74MfspAJMJJCSJASJLVacG7c59dVb3yam9tvr6BanwUZPefgXnibFMaKiTEem2",
  "key13": "2XGW5nUgKrLmPCCmCAxVHYRxD4zgt6UXsfJi9mozghB9XxSKEvouBqVWbtxVvFP4qvmq4ySws4kCoW7xrs6ZruiG",
  "key14": "56Tg9VctCZ25JfATeqhtBLiNb9mSXRyZN3oqjrfVyTUhGbFuXCDGBWhzKTrMV4W1EKDjDwtT65ecJkV6nRFHkye8",
  "key15": "5fgQSZXj6SqG9Mr5eaBrSGaYYwqJG2r5n5H1UYaJgHtdZeaoRB8k7MhWubrD2zncxF8pA9E7Q1ma1mHD9HS4VR6E",
  "key16": "JBy8JQ9iYvPtBGdb4EYEWZ3KJANqX5pYKeLGGk3KWAxHzaaxG98xAJh226Lestixr3je5iN7ntTsFPo2zsVBju8",
  "key17": "NUMF5by3Jd1qotFbZKuZqH8N2HYUENgSL31avfRTKsjm2HPx1aEbbxTNgeKhx9mYapsyDeQKsg95rkFBRKiRdXy",
  "key18": "5wzueBPYB6NysTuDbbQgTceie3io2f4ZtzZZkayCFdg1V6weeJDSr1fZv2DRqrBLWASv7R3a9TAew8cHGqepxVCA",
  "key19": "prhqZ7RkbZtWCVL7k2XtByb2SmKWKwFzq7VPBsektHT8SgJeZF1vTb1Xd8HydQ6U6jft5btjrhwBjfQoMYC8oLR",
  "key20": "5WaqQ3a3HV4HVQXXkh2gAxEcU87gKvUEMUtsuVX9t7Fqfp84vW9ZBehf23Mkr2zTWM1V22RZCcYpxfcVDEL3F5Zh",
  "key21": "3KtNbkTEZp1GBs25hxrSUhKkYJoVhG2gNQ4sTqX6DXT2LWZqKXURLzxtCapqMat5DzG5Rzv7NrwwvmNA4yjehsEU",
  "key22": "5voHy2wpopJxceYWUS1ifZPZCVnqR68dp9FkprHCSoibAfqgtQ9PnWbRNRSJ1KmnwHdM4FZE4eGbhwBrYH9PVDUy",
  "key23": "59HxHpwYGpamSEHL2hnfn3DsSQKrF8dDuiYfQhNDVkYAcoZfgPuLSerqduGTJ755EUYbY8rjiL4pVGvuis47ZCKw",
  "key24": "5nwQnjUsw3NxHQa2jJ7QpMivM7wcZ96cgsnxKT8H8v58mWUCFnnxvJiDpjingvKZCgtRTGxydw9jgjR9db9PUKKz",
  "key25": "3YKXVkgUtt9eiZJzMN94aTfDR2tpBMkjmHG1W7sqjMQ2zJ9pwssY8HMH51MQZNWHSK6WQpgvgkXpGbRrB2EZAc43",
  "key26": "5yNR8QfRLCSXZRHzxMAjW448rmmLKh2mxddjGZgNSm4Qp3abwXjyn2VYoy9D97jx1198UhQn1F5soRVWFGTwdmYx",
  "key27": "As7WxvQgsi2YdcKUBmUKLJh7B2ph79N6qrGRbEdPonCmKej4zAWa4C1q6RqbdC1WHgcnDL568AFqVSepax8CXs8",
  "key28": "5Nx2Ydu24RURrSrWSbeX6D3DT94pVXh4CfT9mZ1inJB7Eoietf1M3tmX9p1fJja3kWco4QrupbQGYGV5SNSK6teY",
  "key29": "5x5YwxH4uhazxw3fTNoQt1HRDteBcBMs8LhLo8DKJcP8sDfWkuGw5ixjQ5P31uEapkS4E1iV4yHs871TzkN53ib9",
  "key30": "3mEogq8JpwA4T86Ai8vfF1zEU677iptGMAkeaH4XyL2jPpSt8uSm9mkHbNfdfJpYfFp1RYQfnEW5gXGj1nMD7QTv",
  "key31": "5X8mmAGom16wjn2B6XQcKJeMW1Z5nJ8sWFDtLdADED9MLMayd7hXJ4xcSJAuR644pHdZtSBE96KDstxehqnwGAH1",
  "key32": "5xcDYFF5We54PwUryPjnZMyLcRNaLpECJZwjvycKNoC6Bj7DACg8GZyAyjpVtTNvG55TgH1XYAELcAB1GUxWW8Br",
  "key33": "2ody6pk9nj9jMjmqvSvH23hQRwaQA3hayjtEkGcSzeYChXAZsbtbeJSDStRaHSQk7FNRdsv417RZjtFCazNrjvU5",
  "key34": "5TmTT4pwBUmaWZZNGNUCTW6nS1UyGWRXYXxUKbYsHzxnXFGgP5tkJ6Kojm1sZACLvMWnEQMV6hNwT5nwywSGm6UY",
  "key35": "4xaY569KVuCB4bjMSSC2PQbQZvcbNgzniUZJdgcAD11voCnjMs6kCt8yGLdAdYYszRWMUqmzNDbcvVVH8VUMo9Ht",
  "key36": "5yyALndJWZw8aVTZdh9pk4it2e3DAPy1wLXiBBFZbhA7UwzWBz9yoy5p6iJnaRKSTJt7SUAXfoa3tnpwGUndRndd",
  "key37": "b4JiWP4GHdxyezGYj7nNWNuKJuF9nKrNTANXhbDohESVcshHx3s8YyFn92QMaHUQ5MW4zbz9Ya4KKZ7FZSgAnov",
  "key38": "3sSZSPuxK1H5drE81TmHi2Z2K7kkH9NfnccsmUxHaPhyCYQok5vK87TdAJrY9eDNh8BQfDYCRozDRAtN1smtF8EQ",
  "key39": "3VVT7dDRtSBgvGEL5GMDXxFMfjcLjhamnfkby1JJCyWHfSXz58WPMDEd5GAMigoPLaXRsZRkKNuswz6h4PnY6gBw",
  "key40": "5QnRhD6YBumup6a3GVy5neqQ9ZbAJ3TnEYh64BCJBGQnfFMAR2bqyxiU3MFfG725mLvkBqbQ8KtZeGK7ZTPuA7LN",
  "key41": "492h5GaDNZbk1RpHBzwUokjTp3x6GiCx7WpiZtLD9wXFA3KQx2kTyAQHgbGvGJxZJZBgUrFpM8HyH1VYu2Gxb5Te",
  "key42": "2AscnWV1y96B9bsG1VefZAHgtpnybsFigCiiiACFqqesXABaNbUYd3uJu1ofEg5bLg4AHVc55F7iH7FCNaQsaYv9",
  "key43": "2pLhxQxoetWYjaSEbw2ogbH3wu2kZpsSagSAaPwLDi11fd8Xr93gTBE88pq5opb39GEoNKybLatBGwgXHbW5Lwyd",
  "key44": "5qWfk6ieSgtixWesHZoksVfU9ho293rh1CG37yjRstTtrzns3oLKjjL58ttaAdgsUrRf4fZoNJBSXVzC7BAf7enB"
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
