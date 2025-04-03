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
    "z2obSkztUkCFgcmiEGJk5KSAAtiFYpGBJLwXabY9giJjKWq6ao4tsjUQUkZGS93eSxKHLDwuUwVF1Dy1S5unw9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPs4Dzg4jFg5fdVaAWCBso2zSnJb3bTaNAHyzDao9i4VhuLxQTYCxkFtFXeDNrNSoDatNdzWFNhJJvp3wD1UKcM",
  "key1": "2G2qE7EagsmBRzi5V6MfwRVGqpTVGAaV3byvVHn2d9VX9R8PSfqty97mttJFoNJBUKLa43AHYNkMYqDyorhBa3PD",
  "key2": "k67RuY7UrWB66K9kXQHBYczRLsdn4g7TDCEbH2dbm1axfapz86Dd3ADLaMuvWGBQ14d4mRfNBLb7caQ5QQo2njz",
  "key3": "5GyJPr2U5ztPLPjL97Fjw8oNsDrjB4auuA6wzfUfVjkZAUGQoB3umR8JDjdAxb6oMU2ZkW6CucFUEbwV71gaSWrt",
  "key4": "3mom6uTHEw9xasGDKLVyvjw2WVC3cXdMMwoki1msUDHN2kXsiR3RrLemcdCTvUCadBRva7bkxwr7biutbGtxQmeH",
  "key5": "dvoG4fPVdQTUFioHsSihqCovkfcX1x7odnGPszSTnZdRxVDKMCigNvkpRRMMrfVQE37k7tF9nMpP4xVs3sS82vX",
  "key6": "31hnNuvqvzBD65E5H5EUzJrf8a7JZ5UWgGxL4fYmtb1GfUmfzhzjedc8Pc81TX3NBEtymRATMszryrSRDzuQ5Aif",
  "key7": "3C2cXZubUzRWSm6QUtWiA2BvqXfT9bJp6j1xSmiTUY5MyX9xd4G9Dz6LaC22ugZZSpJFZSdjYhV5aeikipifgEdY",
  "key8": "5j41QQNBhW3dE3eRAMtTxGX1t7PJF87Mb6VykCeMbA4kyhFVbH8x15b3Y5JZJahAZb4K4fQF2yDRwRom7Fm7nS73",
  "key9": "3moPFhLKN2mwaKCZmCgVEY4SCkMppGK382VxX6BDMGKjcJSDSJjg2DzgAjzRwQTq9ojJ6aBHf31ArNyUaLxu3Z5b",
  "key10": "5jE91ttNiXbBKLfYvDZDiGoDEjH7bTiAaQik7L8Tgs57igoe9mDTsdv1zFKsjDRkWJXH3y8SkKYNSKd29g3prthi",
  "key11": "4wpW7pxDc4ReeXpWCfcFPgHCKCEmJQhFV6wQaaLYqmiptjKqXMFVD9LRWCTZ25rU2eSdpQnKPorHBgfbvMcTjo91",
  "key12": "2nYbKsvYRUFg4otoQR4iP4x29XhUjsqeJVJJzeHbVKAevo8qe8L6DG7PAKpkKemKbCmHU69xBaT11J2tPGazvUoT",
  "key13": "65naexBHCmsJrHbWvxNVGBjNUphJjpEUZ4BA4voSLU83Bw9QE2Wgsu93qFwgCttjVkp3Q3h8gSpeCKyejPbk2Mmn",
  "key14": "2WKjsJrgUuTjpufhFnLr2wNKyevyu3qkDdHWPG1Q4czEZTMZPr9SLbws4Hgq5R82mPpxeEvn88oJoBoZcSTDjxaM",
  "key15": "2eJBAY1QG5eJd1JHRYTYT6Yi2xS43LW1Mv3r1jj8oeUgnxXXiUtqS1f3PryofQ9ohNGHT2oY5tuizqT7xGH8N55i",
  "key16": "611uHqoZtYctQNqbywKBJq42gof3jjEXV981TxWYzHkswUWVG86akDR2gTMfR5Z43jeofm7wqz9GAGimnNx4PnJN",
  "key17": "5p4VRvmXZ6zaZ1mbhViMEjiB6y6JeRKhEt8oY4jm2C3Y36W9MkaEBwnYM8uYfes4V5SZ6Y2RAL5qDTsjsaZCDHdM",
  "key18": "3kGt6FRPcuMqQhZcSxUFnz4u8CWTHjHau7wwPY2gKq9KigQ8duJqZhA4ebLwSd4SYWMDQh4KvcFuoS86yuLsgzpC",
  "key19": "3ogtjUEYh1sbZSHDQHaCKqVtg8Qz89EpGpmeJqwvY2zXBSQwtcDjnEqNqu4hwsTrwL11M8GRbqXtWe4UVqLy7whZ",
  "key20": "5YfLMcSqBPaTjDL9z4ua7SYP1H6fBVLpaZRZ8gyMAurgY9Tf642N9pY6D1rjDdUtzLpqJhogS9hCZ4tJgvh5Y16r",
  "key21": "2XCgKaJ7aBBDh9Z247WkU3QgNnQTYa6e7TGZjPRWb6sk51Lr6qT6NW7pTxSZgsvRy8VvyEF1jY4x9RHWyNZi1YDd",
  "key22": "316Xem5Lb2bgsx8b4fHTWuYVQNeWBN9AG5Ggj9SFgykJjMFv5B2BpCy1tQUcr3GDzvvikbBbLznbzsLP3ECrxCbR",
  "key23": "35gyoeQE3hKvFnnk69X195iibBMmm4aQiC5JprNSUPL9Y2uc4YVfGdsZysLCYJZnmBNT74Cx4Ta9weCxC5VqNpt8",
  "key24": "39kLqw7sDwh8VpWuzfUS8xfmraKKZhsU8KoLHYLYQyfKQ8xkdNnZJE17aiGWCnb874kRJHa92Gb6TXEiNPUASxU",
  "key25": "4juP5UnigK4XRLjRzjjRqAEh8kfyQEUH5TVykKnJvQEiNyxyi2SAQ8yD9JhddBmRPphibZoL3i6m18jNH93qduPn",
  "key26": "DeCfBXgA6tE1xkRARFVU7R82xEPochrHLp97TCadxumNZvVVhB3Suq1mejVv7K43AzgSdD9S9wH9LAa4z9ybiZB",
  "key27": "34g6smaj8mBLgYHN5zzrfWY1J2WzAqVzVHFq9JPAYjVvFMiy4zSjoNKNdaH7phiR1GHtL1q9eWWPwJ4kgPny8h7R",
  "key28": "2b3zY6iHoYyitGpYnpUpTEFu83M5sByR4a24BBnMf8V7jyegwa1z9rE4BfWAFExiV81DvmiJDTyV1e5JJWuJ9ZgV",
  "key29": "4iE38rjCuUH9AuhWHQLZE3Kn5QRs2Nk4UFPTBFdaX935Jbg1mWZCJVCd37WV5iqxSqioxRSYgzy53DqJRujcWvUK",
  "key30": "5XRsgfc9gx3uKmnwwbQgC3nbBd7PEJJzYM31zRQzQw1ny8oC3mi8hu529mqvuchAdkyxwmcp6vztPQAKyjGenbmU",
  "key31": "5Ufh6KsyxiBWh4AGi2p49tibTa5FZPTs5242uh4hwQtLKVVZdHbbjb1srFw9ip5NLt6HxZLumoCWVhxbX6JRNYLZ",
  "key32": "4XJT7ezdMy7Db3yBqTTbPEw8RuKPRBkgc1WQWhmg7fpfrgngmf5LVhnNE97PEGZJqMquxDsofKj7LLHddJbJrs6s",
  "key33": "3xDrqnLPvgswLXQu9B5JEUx4wkyRdcG5cKyincdcv3ywRxrc2bUVYk2xycJkFxEreinx1pb7whCpeXSTULGFNRrM",
  "key34": "333AL9pS4uY9aHnKEf6vMZUgrrnwiRAPqVvsphH8KbhADMZa3Hcvr3pzeEUhGmykQnPVA6KHuPcpqndeuxZ1ua2Z",
  "key35": "3S8hc3xDeoF29DqU56rusUtGT9C6uaqYcQNdWACYobozok5RuT4tZq4tky1zfo4aZCxJ7H3rMNMriEptuUpjMhZv",
  "key36": "4qtVYVzE9Zsk8XFmxki2HtEpLo3ozCg4RtXjJNdZ2mveWdHHXdVkKYPN2w3twtZvX4ZtqErmPxLPBrfGkguxM2CB",
  "key37": "2QAA66M2kmENCDaxMu8UG562rXLPaYhKw2gkmZmeFwfWDCwGU1m4AtAcEhaNipCUdGXWyx5YXxzAckSpsnMTpQqJ",
  "key38": "4KreguwL5USZYhCvJ9AwoXozT5h5qH2m15eZgN4mqs83KVF5fo5n5Y6zCCGkEvQ7YSLrsrE4rHE9mN7DYX4dLdQF",
  "key39": "5GLZhdLUnwz48YCCMxsVTrELsyHL3fc5oShW2BsBW1mCWmp121rT1YCufh9uqYLsHHjdhtQjHDVQkZtbRENtXydL",
  "key40": "2cDGmhNgEaja5ywm9dSsMvdz5JxMyPcZ5oFiutwwdTMBfF8ixCR4AqLvTzAy8c93W1PTTzHmkYwbZHg3SkZgAWRk",
  "key41": "pRx6pSKb72CKwzjiE1XtQUPiMYQDt7FbCoJU9aDkvLXwDp3K3TzFYcVxD2Sa3s78JmDZeYQW9Zr9ctR4Vtgiezh",
  "key42": "4xUV42dfPtxeNkYDZCsYkc1hUHvpiqfTBHZUxdPYpRP4BEV9qpjasGWruLf95BMQoyt3dGmB4HXQZ9X2GMsV8MMg",
  "key43": "5KubhHpsicijUeQ3Bas7hRwmLWSFtEFza3bB6epMEsvDAMgM1wSpciao1R9WQryvqXELFLJX4tRCqrPi9Vf1rPfn",
  "key44": "2fGCewKy3Vba7YznJaXvbccv9mYVxS4JhZWDMWwEY2eU3PNZbJSRw4sNJ1ddT48emKaofce87Q7eihxMao1uocKn",
  "key45": "29fi6S4VZLDthNavzEwQPasgqcwcC45rWqhXJVxn1E9iM1eKHoJzNXmw1mQiQkxpFkk9aY9NvcooX7kYB9d6fxuM",
  "key46": "2RpoKte5CsNWDfVBai5o2NrQb7u4GZgStsHfNbZJMPpMFFFF4vfSpbSrktZ7Eu9ueraSLgnhKnmnW24kyTqWNNJ",
  "key47": "4inoAgsb5XWL3Wr1y5Un6pabNCrXMT7d4QW1vCLdqMxWDFThmg6BvayscyQumS41wV6TMwqaFEaTdAquAKAk2gm6",
  "key48": "3TAGRK73sbtEcfFKoVZCnsjw4HqZtCXrFdoHKnHPnpTxnNmPUwJN3MWENVvq6FyWiFcM9jQhYdAxurYgHbZCwJKA"
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
