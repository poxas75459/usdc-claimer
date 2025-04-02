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
    "45TJasVVfHy9Q3mFouG9gLUiCpSsrSjx6yYAD2cQZvcKDKanNx4hepjYGX6ycVHAMoJhNf6UAXTdGMKsRX2tcu6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqVLBUdK7JiWAmeYAz6VFZACt3g7gDW2pVvt79SbwMfP5xYRVmmtwKAPFKuYWSbDvW61KYnBBKxpRd3hUXcHqj7",
  "key1": "5DA3bA9EZYFV91Woanmvj3GpRKhveKDsL41bWcqYk8UZMaWYLe6pbtDkpuPcprxDy8xBdRdj3ttb8QpA1EggAog4",
  "key2": "4YPmPSqkGrh3wtvFaKEas2YJSd9Lhm9a7Q9iDqLqKRZnJSqEfQxPyNrS9wB9upEBZuzFhC85sxYX4qBhPebYeoig",
  "key3": "4KZwiJivgDvefiuGh5LgFdLLBSVWmUGb74AodE3VaH2giADr73HSY4QEqk2w2w1Q3kZVeip9PPPXKTuVmfaJhQ9G",
  "key4": "2HTPCXpBV1rvb1sFxoN3cHSFMMoq659p7HKY8fW9Z2AiRynhoRoTcxS2gqJ19R7aP7vQriCqfPocCm3J2r6xPuU6",
  "key5": "3LF4HzvgXptCoFswVwYbDak7KDmRQtC3moUdEXeknzVmw1mDtE2KkyZ3MetkUW3BZeCV92C5CpMQW2pByvZLbKxQ",
  "key6": "5pBtNzkZTureH7s3jeqMouU8t447KSYRnmop3HQNpJXm1sKW3iCLCUotWQbpoWLyhgTCfSPisD31FuppjfQgBtxt",
  "key7": "3vttcJhAT59gFWBYN2wNdpTe7YxwYh8GoPENJpAt9EWzG6rP7PLvcVxYFAvdfrtqvWusigrXSp4L8tvnioLsr8LL",
  "key8": "4UaBrZa5ifk4nRjWuUwAEYiJTr45EiWLvEsgvSYCaWhUmEVyx3Vx1E17VzCkMQibViVNTtjLkctc5wxgfAc6fF7x",
  "key9": "DgsxVcXY9tPW8yTCoHyhmuzBjJQaJLx26zeCWcTWSJZNrwDCG7BeehszhRrrSpjNSzyYsPVYcFg8ibGwzhcJweb",
  "key10": "3hc1E9snnwi2sQLhqGTAB1G4kcQXw4YZcfZRNia6qpm239grABDPaCYGD8jwp88jFM41s5nEo5vbHzd2SAKigWrY",
  "key11": "2DcSzZd61SqS999gBcTSt9qf5dn1q6ToiyJQAje8SVJ1isbUrrS39pguEe6HRiomPNXNDB3p9FXv9fBNrV7Naf1U",
  "key12": "5DDxBkuLQnB9unfiFxVHe4GJw7b9taxxEafpmEps36xvcbHL3pNGaWa4wtQh1jvoi35u8j54eDp3a9tUWnNke7QK",
  "key13": "66SKmeH9TpyKvGtkTXQ3CexhZGRbQqrFdTMjgB7M5LcrTLr6SF6dgHvkuooLUh9ug5u6JW6K1NDUZj9MApKUfkQW",
  "key14": "N73LBhhfhqgsXs9ZAehBGHpeDSwTgQrTTH4XW6uJXqs9hzk9Eh6WCUvNMdutgt2usWgqSoyLeA5PoHpmX2V76dB",
  "key15": "63sEWNJpF1tAAN4hGQeCfuKpBvgXAjJMosbA2GogGrjcPc1FuXk2i9ciUPjC8q4kajRroPthoyxgASS5guyQzczj",
  "key16": "ZsWQa97xSEMkd1MpPJ3QGLk2jppDMPLRSQYYGv5x1QtMKW3APbZCS2VtLr7895f8tRNW8fxWQpKAaoRuCBefD9R",
  "key17": "51E7UUN788MkGps8vUtiVDzLvbXRvqgFHntWD2JvrX5iXtG9sYFZ1dgMAYfiSwUqwGxN8EfcJu28QXpw32T2QM2W",
  "key18": "3gdwuxVhbHZDKC2QFGFUg4gNFch5oZii5xWB4sKBTMPSm2FQHjFE2fR6uTENTzAko56w6GtXHkjkxQQkcWeDFxx7",
  "key19": "61ucpTRXcckeG8644Z5YFCV9ZBvV8dxc9UiSHsLwhLWKnZYKAGYbyHT244s5Wc2pe2LQwKAfXiwXTr4S3ST8QRup",
  "key20": "G1fCbwA8fiothRRdwg5qB988VQ5xJHKmSr3duzeV6zKPa3WkFshWcxvQh1rKaCkiXuw7vEENc5aMAnLzHY5YVpn",
  "key21": "7LdGEuVvSnTuK21zhizVWRvocfKDUw4b64EoDV2pn8zMjoYGKByE2Efgqi5DU9isz2Jbj1f3eCkXuMzM8j3ww2j",
  "key22": "5M8FVtd3WMzC6NQ25F9Qcc2Jyqdjsz1kfv5Rikq4gSUS73yhzyG6xnKyfLJgKDt9ssDYAqWwgBtfPnaQCZfEK3fN",
  "key23": "XLEhU227jje8ApLTisz1nfem5BqBRT6xpooTwXQrREsC2KbUacaanFNSC87tgZk278N6yyqRKoFVdUj8rZXao5v",
  "key24": "2cRC3Lwiza88ALF7WGCQL3q2foQF1ZyTNrsCbf5gmo94VPipKwvXAgr2oSV9o6S53K4CXvB3N7bTwXnGbzwLEenN",
  "key25": "26vRsp46nD7A2ubVEx8ZGVfFat5DJEvDkq2b1rBvq558YufQaRdZaKPKXRo5WJ524x8rJ7A7poucDRVjasDLdw5s",
  "key26": "2atd5VY69KeoUpFC8NhTtWKxQbX3XEnzhEUrFxh7D4iUNJyLSzPWZXafG1Xz25hfYvryf7juah8ZGhsUqaM24q6y",
  "key27": "4bovZbXqJKx1aUefKi8ToHUiiSVjWRXA2fZLBRvhgDSjfy8csZkXDbBMtrVAtY87JnqcqaQignKyRwRwMSTuAhp9",
  "key28": "3qkmUc7AdSdUaZsHzugrrZqbhck6F7mBBMV24KT2gCb9KPvjixf97SXSTN4VaBabNULyLR2EUiuDquF2DTQE19JW",
  "key29": "5uZR7LiaPT1A91JYEoWoMBJKAngP42iCobdxzFV5EJndsqhdvLcRb3YHM6QaXVrseV7MhtD8F2zrm4BuHqQXSVUr",
  "key30": "3EYB4bhvHLAgKLVtPc2ysVHXkCQbn9qNYjStMhJKTUiVr1pCYy9do1C7F8LV517kygBqhMX3szeCJv8zk2q1Eu5X",
  "key31": "3PndUtXJHSrn6GxR75Hj4Rv8xLVs3yCwkAJ37oMeBLLywjKn8k9aeHZdEWpVKVAfJPt951gUpnfHrxs7yFQCoNtn",
  "key32": "3KnUeCpC4sNLGjLGk6td2huu2EnKhLm8D45Kv3R9c5fBA7v7kNE4jrWYwjgetpYsJ8G7VktfncE5Dbua4koqX6nL",
  "key33": "4LRnfqJyiMf5EE5qNCgJU6BZ1HPx8g71er267gcqjpEFv7pbdwBKLDKjpeo6tjhRuJ7yiSYV7c1VrTjRssjtEahZ",
  "key34": "2BnwtQ53KRLTZNP6HwwvWtgXhZ6CSaTwPAi9Aor9dAMZDVoGhdk1iZmxikw6NUNDcAvh2Maq5DV6WAXHBYxFJMrG",
  "key35": "5hvAvuBfPaYJzJmUaWZ7e63ZwxzMpyu4HcpqwYQeozogB9hkrotssoHWxagqZc1Cp31yLAJLgfp29fjenR91mokQ",
  "key36": "5NisGEER2EZs7StqdnGfizERw7rkEchmjWp6Lee9ga9q4KHH3w4b5V1PGqHh798oiHEA5Xy7yfCULLhzYUeSu44H",
  "key37": "5N2BS9DdyKrhobUMGNNfNZjoHSgRiLGx2LpcqxD9sMVw96nFTeDZHp8de2sDH3VdYPPHVwZbbs5Z2AoZTZrYGZq2",
  "key38": "2MeoURRBczUQpy6ZZXRXJ9c5UtjWU69Tyq6QrCdURrZcewUzktVrue5o4pqgxGUxk9U36UQ9gW4iT3kH1WK5djgp"
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
