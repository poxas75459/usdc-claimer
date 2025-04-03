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
    "saBXKbFLLx2U3FtnkSnnuXhmpsryZS3MYm1gH2VxCJuKeFm8DoGwbTUpjko8YBctbt1s9yNGGkLvx6pq7em5akf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBRMpkaS6nXYq5sdhsFwsPyXqQkFjdduxiL2hoxiWpdyxFaKLWrXNgQ2TDdbAZxr3uQcz2MVH7ao83YjRpPbU76",
  "key1": "R15Db6WG7T3er7fmXJcDK4PeFP5hH8UzVqoHh41BoX4QVZkfWRXsyJ2iqVqFTFehKyDmJxiM4sVhZubnF4wTMh1",
  "key2": "5vgz4CDTkDXiX2EqoiRVLqEL2FhJmGjNCFsEBEtydEKMkxZP5L1xKXpyEmhzZERXhecxDxRqHsgtcvoywT56uvhv",
  "key3": "51nYpMcUWdrNrnASxFozJB6TFb4hfCRgKyUuV9czbvYNwZWmr1ijwXVptfvhYZeCPAFBiSzppcACJe1z5JcYRQJ5",
  "key4": "4FNe62G7CgSa8Cx3zZpM62ZTUYP9Aw5NAmNmczaLmjPu32BBcQRnQSi7pcYxnwYxvicPAdAkVSDe45yMak6FH1Wq",
  "key5": "2U68Bkk9XD4NdzNtR3su9p2u7E2nu5pjDXJtXFaTAoAF5uXHp1x1bNY5nxrWqF9C3bSWFVVdDWSoWKDaZCPm1v1W",
  "key6": "3hXNDFcAdhpTtqju7ZHcoHqjUQ2PvWwB1j9PW7fCUGoyiEUUPBVCSR7nwJNPzNtyKUf6xw8q5RwBi2ezg34rsJm8",
  "key7": "2SUY2YrZJtj67TykiKjbouCxxUiLss42cTVTX3vPRjTyDtWyRyvtTJQ19Q5NoKTzwhsiF1BBGemGEDhR9fUmB28f",
  "key8": "4Y3xbW36oQtjznWUS1e3KznTCyFcEXDobv1DcmUHeCWiQG5ifjLUMxyUCASQNPk2fjaSyELDYWPiYVmV5HNP6znh",
  "key9": "5YyVAt7yovBiXAcVuBFc9DxPs77m2ZLN5H2XL6eQfkDVbpXRxBEWvM84hLwpTKpvv4YubfaEWx3QtzCLXwx8QxcW",
  "key10": "2BJUct2vgchKWS81V7st2tQXnePcXC22gEzPXRrG9F37swELY1sQWeaHHtFLhmMFcE5fXGexYKZYrg8VQ4NDZSnu",
  "key11": "EekJ4BZLpFXbNERQhn9bLh16Vvs3v2V7eb7vsgArLXotbe5zpMGT6VJPVwvf4VCocPA9pJohKgPbH3q2okRfZs3",
  "key12": "4aDdXNUaawSx2uZWExA2sEDqQS1A533seU6KLvP5mG7WNGQFf2R3aHRaV4s9HbmxFA7osfvP5BBL3YGnLGgtcQG5",
  "key13": "2NQT1NqEZAUUtqNQC3JHujpGqsFJG6DkHZKWjDhQgooECVwuwiVyHJMtvb8m7RTYQvSJax8KvWKfuAJadhEXfTHv",
  "key14": "4g7F8CnH5ebCAwhEeLjxCqRLB9NkcpgftUJg2GYhnBkwR1nUQFn41WyEvVrpFmahQycqdGtMMHGdUMq767S1aZYw",
  "key15": "2Q7aiWjCgmdBM3YktkfMjGsSDBebs6idEs2iWXoh8vDhAdVJCAPP5qh639KhA6dH7sLjCWu4dBG4YUcRtsJCb96m",
  "key16": "4voiEAiKUUCRjsxrwMEkVcYerSMJzNFX2ksurT5fn35S2sE5Qkp9XJ5FTYSWLJULm9wTRrNDRPAjVoNiRjWqBeAe",
  "key17": "2ipJeojV2ARGrvNZfBGGC6uNSXmZzBdunWDraB4LExy7bCFspfK7E12RvXc5LmdEZgcoqPhMm7uG8HGrT1f9yadb",
  "key18": "2uh6Y3pTLpgJZvgKxk3tJWbPcfEELGqchw9isheTTEdskoig4pmzL5KFCjZR91KfUaxtPAiWSWEpmctEYzTjRDqW",
  "key19": "45mQiWuQhhRerRLbYKbRevRCanYF3ez6zMpZuAsfV2FThqpas8sBwrQ6BMMQnkLA1BgzFsNb8uQLfWonCsqFH6DL",
  "key20": "259DDjLf7kvrt4bmLfZ572WyppVV4joKMyKdyrUt3fDt7xJZuFzepPisAksFnDiiSYDVnEvaycSBxFJ5oUchGgPJ",
  "key21": "4RzCVTgrL134fEghWvT93w79fSXCz8DHDr9WjYUrnymBp3nMhSR2BhVqCmkYuyaLpi5hZj8VsXq7iuxCZ9qqqRsS",
  "key22": "3NgNWmSGxKTtJ3WjQKWFEXqW4UrMxrd6tKAZxWjYhRDiQkYCAuX7mGA5bLhGuHcqUsTWN9LrXKdRv9kCGfnUDqMu",
  "key23": "456wtWhM8qNVNNPiG5gH97rPWbPiihPZffUkdi19Lvw2WUugy4QPtfkLafRU1etRo6n4qiUxGrV5aeGgwtPscSh7",
  "key24": "3NFhuuPCNabi8xDwP4TAyzdx27qhL9GdBJ5xeAkPeuydz33ZWKiHpFXXugxb59jGypEUSgBWCB7u6h3NhVxh2LKB",
  "key25": "3JtJB9u7XdtGFFHd39y23KqYD5Pg38MqiMJhHCF5FmFMBPPM86GTeNDq37W8FnkyPb46rEWqZJYtspQpbbMVUeN",
  "key26": "3gmHg7uN9fsPfCazX1YmkK7famZTW8LVqXH25RAUT7oukuUWvA6UQN6dmYiqvmHmnao4uZGiw54bcCQnHjdaj5Hw",
  "key27": "2gp2dCMMkLjZGK1w9p1a6vyLbCeB78rsHw4pEV6vn49D96DKJMY2gUpjW7Gr582vAxfdowPPDX3xeoUFCchL73Rg",
  "key28": "2sT4TrhPmHLPJqJ9Ne5SdqWAARh6gENrnCZQwsDFaWmKVDiLf68AZWH6jgrXsoEhLTUS5fa2fcPDASMs77pKWJ8N",
  "key29": "3xcRNdHfFt5deGaMNezMukfies6CKdPiBhGbYcRHsHV9NHJJv1h4Y7NYAh3r4hFPkZEscEuUjejauXEejVaxmUmv",
  "key30": "5R9rkwpMS8DyrdJASE2Fq6h9Rjy5Eu2ETxS5jQEfqkXR4pEFeVgwsgtXUzMEuVAwTerq8KYf5xS7vnzuJppct1Gn",
  "key31": "YocQPJQjgvMErondCBFZjxjCjG9Ln2cxcFWWi4bqdsLmjL5FESKDQiHcMUi81K1T97T3NS7896wKdXXtWf4tTet",
  "key32": "2gX5AnLEYLgLwt5J1MrvsoGVR1hfLFXgH9eWU1c2YZWzqYYGDXQxb8nq1Yuhw2GRfpH3HdYw24DHDUYceJiCyM9G",
  "key33": "H6g4ZEyWjX1HJKQjcRkN7GCsSnAQpiZpXztvnHWmjWRY5NeCsE1TJtm6zAkz7UR2TusazS1LyVYYGyisQPhFpgs",
  "key34": "6uMbJeDREryjqVFR6uMPqkxyicqcf9V2YQ8MnYzcK9MrJo7NhHBSbrHYNQyL9VZ77KfaEnWwb1ng9C5cesib2KE",
  "key35": "maim7Jmq6xLbThVi1wJJGsdkPpGMKE4mSzajGm8ksMFQXRAQGNhcPdcsDRv3wkutvwC33561vd3NHVP1M3nfmsy",
  "key36": "5g7trP2iaSLq4x1ewee6haBwZRia4qEYKgNfRwW3DRYNuSyNiDCm3D3dbMRKNWDmraZnqvHgyJNGLK3LnppaDaeg",
  "key37": "4Yw7yk9aRvTqmAia2hLNs1dYoagWkr3zpDSbyEhpkiEoD3UpM53YzbfrXHZfyGaBpdMKPGnQHudiRWHYE7p1pjW8",
  "key38": "5NHeR4jUe4zrpezi7PVhuQEh5jqu7CzXt2bc6TxmPQAcVkdStRMrbGukp1hrNJA5uhhQnQP9iBfCwZZSL5ow3MYo",
  "key39": "4VxxRh44LQaK8Nxvjm22NwAfFuSxMMnoQEeVms8UDy2RgaMNmBzbokzzGQiHtd2JfeGzAar1dWd2oZHXrV6uqs4H",
  "key40": "2CNaRRTBFxkhCYXvv8pbDESXptpDy6hjCmSvsqpJFaubEr7nbMjhDyNvrdPV2Zwh6qTHAK89fHbSBvRSUhPtASWy",
  "key41": "YcpQ7Bd6VpUfjukfmmU9sX1eCLLrYpuy9P2NBhf2JNqP8ZN7ioo6HQhcaBv8yEoCrEVsJHvKWGo35vjZ5EeNWQN",
  "key42": "4MCmWpN8BPrShTZyX5Fpd4j1UDuw752UyzdfL9uQaKUoBJ2mynJr7bd6vxGyBRD3LDA3BS2H3Aknsx634TMKwR2A",
  "key43": "4utHLiYUaaG58NQR3JTo4oJZQAcs3Luq8F9x6apNHffoEVxsupjscvyNPzjvUukLDEHHa3s4TMVtEeDgsSLB5ALH",
  "key44": "Nv68kL7DnRd5aeVv21uDWKtyrgnMRZgA1aZpUZKF4GLjevQfWbxMaRsZvzH1843JRSjBhPUtG8x47zMhNhYAFiq"
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
