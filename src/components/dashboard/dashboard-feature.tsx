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
    "5paHM7jEJGRKDXtVeRG6NFHZkNafDExDp8PrENz7mpngJrqW4P3oLikUX4EtDo94sVqb2P3AtU9qaLnYD7Zf2tXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahkcwv27ZbznDNco1jhHPVMEXPar5tQxstsAo4yGFpB3kpphCz6v2ouqBMM4JQhXdYMLVZbkSvMYcb3Xma8uBV7",
  "key1": "5btvcTpDmca64ynJ9B8LWqeTpAm7wZ53EJwfeTgHNFG4rpvHLCckzKT2nfsiNxzynGk2x3f2agxpt7ErNsye57oT",
  "key2": "JvRcRxu33x5m525MEYnmPUKwAsci1v8tS96XUQQVroHvfpmwE3MckqBxF5UB1T7kRwkJ9FpLVNCQ1R29xRwjPrx",
  "key3": "3p6zhVVte2RKJqhbMfWJGT1fQ2bytdnjVLp5zbQxMAgUwYm2mGfAjNbXQVdgTAXNuyGFpULJwcJEjDktCrcS5QiG",
  "key4": "4HC5X937ZZSCZvQNjy4MpVNVUTbxtcPtjvTnrngMnawA4TLgR96XCJPfYMBKFhThyDdMujeuZTg2XE4h11EEiJKS",
  "key5": "3QjtVoZ8Mwb4X8h6ugTKByVUQQLTixFaompRM81oB6NQZnmK5x9nrnN5cTJojNS2xeUuZtdvooASQCmv4Wg4MjpR",
  "key6": "21sVViLwGPe12d8rzSaWbhtWzuCLwxCmn2X3HGmf8Nn8En1xEHsqA6hpPqFmPjBf6UqxDNaY7UQAvhcMRVFsSYaB",
  "key7": "5EcEKmkRfZCUTeeTbcAMBvcvWvM1uGnPBPRe4QdYLS5yvf31ZDxpJmTyjsagMjb15X4jWY8G4Rkt3u7RrVQfsbZE",
  "key8": "3f5h2ZuJL3pa5GKKzq1fVN2a4QsTjHq1zPRzaiF9DB1j8PPU84jbaz9W29PBUiATCHzPCBCanQzJk9NGRJuHvJnc",
  "key9": "KSKdfBvTe2y2Yyuc1rvyxU7NrE6CtPgDaeqBsDEm5x7DvpBWdAy2rQZU2SE1LjU1U6CJHnT3RAbZLwvrHxJhSKb",
  "key10": "3VRZBRDA5FJS1tfh47sANx5soFqFgbhdfL1ueJDJm75141DMnkV8e7XpgdRZHFajzaiPvhoAcouGb1Vr8oa55tLq",
  "key11": "rHyAHcfQH3o8pSEpvi16ar5jHMvC4MKiZ79Ya1MTDRzBH4Js5CQWJCFjTmEw3FSVhcT96nFhSjGpo9GaVRuFVc9",
  "key12": "2zvgwjJvcXNSummNt4XxzE3sVq3acD3M86Gpr78eWanNyHd1d4Ys4uYsRvaqT14RUPucLX2tukueNyCXa7hnaHe3",
  "key13": "YokYnyCCzsuBVQBp3Nem4Qyi6JjviFTHCYv7T8QNJGAVbg4Fm4oG6SfAioe1m8asbT8Gt8XGUvm5uqP9pBLCMvq",
  "key14": "2sfXad9Kp9TVaFfxnJEbUbVegE2FgD2hU54ajfKNK3oan2S76LeVmusHJbJBChVeWyqGTUeHCJL4UVU9BsYJfAnS",
  "key15": "2zFLDgTnjEdbKovhAt7dTRFysnE2GtsUYQcvMEqUKQxJixnQ66Kdk8GSaVDyBwvEhytsz8yJA29p7bEZovECeREe",
  "key16": "5yC3bTkPK5fEhRHuYPjXzgduRP8zDxoHhHYRPsk4tSqPEsbdQiYqXF89QdNK64u2MDqn1unDUicjMN44dJrhYRGt",
  "key17": "3wJdoPswrKPE9sJhK5MDaXfKhrwEJcdmb1zPdVrKTK3DTu9ke1m59ngpEdJC1PAkC11X26JPg2UqxmuuguFaZZTp",
  "key18": "4W9XmfWjCLacp3LqpDtx3pdS79ZQ3gxkwoj68x7rjrtmfAU8butRQVqwh8SAaAHWRjRYNTTJPEZWxhvH3TDDLDy1",
  "key19": "497XV4vTRH69ovyhCXVi6ps7oR5ukSCMdyFHM8Um361n77RKFsJA7i8wLBrSVu9J3tqFzAi5WR7t2p58dAb2Z5FH",
  "key20": "jiMCCgHePRJy45AzwmdNrfBz53gqAV7QwDda1mSUh4yMkhvnDo9Fda6nbwHEUndkGMnWdSwYFDspYBuvRYKaHh2",
  "key21": "63NusLQQa34FRWm2m3CcwF3f7BJfRzEYhs14K6ckEXPgknehN4bmrTgjqHHcr7sAUCLaSUiqeGN5FpM1mUPtw8Td",
  "key22": "4GwccDfeTBF7TVcyeB9dzGoxrnA1QjejeeBi26x4MMYPzppTnPr42wyHG5UZf19QoQNEn8xgExSyLwFyjQnpsahz",
  "key23": "2pP2fmUo4R4WFg2Uz3g4cqtz7TXkUFdq4rMCoeXCVcxzvtp64wYWBcf5DbqvhiMderXZfQEyMc6CsosN41fFx6ik",
  "key24": "5jgkn4mTKpzs44xgnQzWNt2vf8957HnZhrkedvF4KbTXaJkRpr6TYSiB6TwJ2vdCnPUicyyEqAsLvh5Jw9L5HAma",
  "key25": "3Kz7531zC7oq1FNC2oFQuz9gXoDbifWko7d2hhmHHeXVJcMd8MoCuEBHfFRmbfMhKwpDSrXZRLrh9a6WrLJQ98W3",
  "key26": "pMQ2srfQsB81NecPzbL9tyjU7ffWCoA5ca8sxzwmEuN5nk9az2RekSVkQe4PwvTcUZ75RXcypefazMiL1bhtwvi",
  "key27": "tNgjMm5Ld2rS1bBGcfhp8erAZdqeYLRY57mByvAamrrRosSM9XsYreYu8nYMyfWK7EePJTVXt85BxM81wiD61JJ",
  "key28": "24EYTV9v45LuZFhGSUhveEe2o2RVKf1cB27w91DLNyWwB6hLj2QsRAXMQfgAhorA4ihHBNhBWM7kwKSAwK3TtbXW",
  "key29": "5Rbs1DpkVT4Cn9gVK993LGYMxGzAsbcadvYtycPhvZJhtvmmDamiBoKgj4um6PKbbwiuoeMkScR3sYwSAs83EkqC",
  "key30": "4QGZgdP7zEugN9nQPDuH81FLUp1JvVUV1jrEGmNM7WRoCB1LFzdF1zDcu1iCGLRn9SzjiRFuL9oyKLi6uFKRyDLp",
  "key31": "4GGrWVL8c32n3PuC18tBUdbTeU4JE2PCforpqTAG4dUaTqivo7qxs4dG7L6vksRNHHkQzWT3KLJSuZQ5MK1RMXYp",
  "key32": "G9wRkPWU6GdpSV3Uq4wx8mNGN8L3YJbEoas3c7G2qZqC6XDPkKTbrSaoB9kEzUCiC7eFoegd9KD83AsNMMhmJWy",
  "key33": "2TrEZUP48n8XEtJcFjFNXqs6SL7Wuu8Jh6VtL7L4sDyHYTJJU1Fz4Xe94ayM57PpQRn113P6oRzf54ag85dBu8NE",
  "key34": "drr8NbdeS7ToDN2RB4PLK9jndQCWz1ykBRCDA4vDQNNa4kzVKAtbDmC5FZQLw4ecHEbH913FiC3CjhasMcHHyat",
  "key35": "4EMs6XAR8bKZytxJVUyM56F91z6NnH49fRaQhdf6mRDXfPaHZNdHbVTen7yG8NCXBGeu6b7nuXuRaBaHa7cHqBb3",
  "key36": "5LDhHjCsYCayDY6uWMhaTxUAgkAT6n3oxHRQKmmjQM4aU7HG2JUf5hwPURoggFjnSdtuFw3PqaShpcByirdcM49F",
  "key37": "3Z2oExSdKBJcuWhWPmSVxcVv2175C21XWE5GLpZbavRJ3mV6GaFUvZVX2YyB66h4D4Mc1XNbp3b5S5Dz2we5y21g",
  "key38": "3vtrAxfaAiaxmsrXNMs2Vdqud7TmVabp2HXA3AwtncDE1GbXBnaKfJpxj53w5eXBR7pkUqQFf5zMkMRg8VEBnFU8",
  "key39": "CoyQ4PoBvMFw4NarJEqYTPvED3pjuwBRivmsq8PdFM3e7D1KCx77tMpZwmQ9wZRMPzd8xTyqwPFskKLxudydYug",
  "key40": "4bEBvaWbzri6QaSi4nYKspk4XcN4canyQNUhjsoBnSXA8PaUkaKtgJPpTWnp69WTJBgWxEu1edLeZYUaJkez2b3t",
  "key41": "Mqz5vF42kE8DabCnkg5k52fP6osWhSZWNjqfzu5rSWDZM29L1tSp9WKgT8tojQ1sYhEsxNa2m4LDkzQG66owAp6"
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
