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
    "qX9wz2doHnqEJSv6SGuJqbuxPgzzcWGPnBhcNyrXet4TJFcmQdmYuMCFwXsLyZ5u1CddUqaEPNpwqVfG6gT8Ndw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejTTmuoD9NVERKyG2VcWEnp8WA3pM99BQSSvExrwiyhrB4VSx1rTFrfe2aKXTv46wnAcaoLQpJfKvpZQmrTACjH",
  "key1": "3A7L5aUR9XFsyaLuHAqRDxqjUdr2CcPTwuhCbYhrAszbDnNvpVhC1YNaWqVpkZcdSs6DNXzCN1bBXzFJYxchP3nk",
  "key2": "yTna9wsCQq4QqmA9A8e5pdQPcG1fkhdBebXDtXWeeaiadFszdfGQBSUP2zxofnAxzKCCj3oKcNfFhiDU5WDvjvM",
  "key3": "3Qhp74J196C42yU2VNUaBEEzR9X6o8nBLBeykR64d8iZvN4ZZULW5EBZm67CUePqqMJZqvtMscZgvVDzwMYVMf7X",
  "key4": "55ZaoxLsmgKkAPo9unPNL5WmaPFYkZn5tQbnEeLREK2fvVHHZwTNiWhSxSVDnGwQhjWwxgyr6YNBWgDa57sJkSTN",
  "key5": "2KAnajau3Sd2FVGn8nmWBJqcvpshVUUCfrfFXQLNHVxr6PsEF5DT79E7pNosPruSRXe6xMZcR9tyaLavmhhJRMf6",
  "key6": "31HxshbL8WnZngq3DmoRv683qXA4pWs9ZH7wYwf3fo1HS9FhnyNJVCLBNo2GDLFcfXpx2tS56sVupXvuZcoMTgfA",
  "key7": "5Q9WrddzhdZXX4YFawrvT3W7eiM8Mji7GXSMG3GaZsCbB9vvEaZ9De5EaP96oKgQ5Q2uiP17P4B2PKhosi4RfCjE",
  "key8": "5wjmm8q2SYJm8G2Qt6nQJD7T1idPZfUMVdCYRzhR4Yn4cULw38AR8Bgz763kojHn7JiRgaZoSrcCg83iCQerDFKF",
  "key9": "51WoAsDwEJfyqDsuogLNjXnnR89nL2FXgkrRyhwrCvv4zNyHSdiHdWNLHuPNCFrJdQHjvEWg3UrTzPRrmmUpmJHm",
  "key10": "4H7CLQRjYQna6TwvrTJhuEFsv4AqRow1vwcTH7oKZnkhahvNGxUmjYgQdEUybhoR9986Xc8VupsoPFDPPzYLnvaR",
  "key11": "36BGC5EGmd9dLX3Hx18mLamPH1BXYW4pF8MXscFmzKmcZa9wQfXj5n879nYcxxdis9THSYetgoq5UjweXW2QPJWN",
  "key12": "ux9Wn24AWaBGyZHp7paL7Ah2xAGbjVRos9HKgvhABVJzWMjAF4LtNMDQMkndsRx3qztnZqYRGiTgunyesVrqEnw",
  "key13": "4hTNufUvEiFePpqNPivnS1uUGZeEaaQKUhGtsQFxjbToZVQDmNFxtKy2MfRpyhTHEPjf3uQiucTaNxe5XyDir25a",
  "key14": "23rTHLfo7A4v5C1SRkGafoXPqF693vSrcBcuAKM8iDUyhU9LPfNdTeyBFxsFmP4ZTxjxrTLwHxDE2RWRGefEBBQP",
  "key15": "3pw62zRJhatLwabovnjHeSQUeh23RNAB4UtsNBTeM6ZjyAUJPbUgJX2HVwVzVZAnGT3wzvXYrgQsbzY4iewirW1Z",
  "key16": "2EcJXs7T9UZRGZfg27bi3BzfL25iAZPEqVMhEGhmrYmtS2YoeWQBaz2BwdnAoSsPsnYcSRdGeEqdudLUg29TPj1p",
  "key17": "AunAYzH4kTTMZJTPRAmVpR1YieUPJJwE3SeW9ZyThFguprT3Wet9G3osDCN8NnmdnxKyTnrXK85syvvbT3g6Ekj",
  "key18": "oqorzLX6Vb3guUtuTZPz2RbqijisTsScWg6CkNCfZg5kz14xnEHMqBzNR76Q4NXZSxGLHPKM6riHbmmsLaHvLwh",
  "key19": "5ohCYjwwpodzhTZ8FnxAq9VaNEbgXpRxnpS8UEecKvC6s3yH6unbRNpknw2EZURW8PePAUNAi8oaRu9bXbLtS9nt",
  "key20": "5NzTqqn6VjjHrxqQUh8HShrGkxDW1nRG1Xey9xkR9nFoBtVV5FkDTSqJ8dqKBhuira4AJ5oboMNHC75feRi9oGU3",
  "key21": "52xvtBkwjnz3EWBHJ3r6zgsrVc1D8JuobCoRghMn9ejk9EEwzLw8RHym3kVDrDfKn1hbvDfpmcJDkfFuVnoE1Y4T",
  "key22": "2De91E5monpzTonVbcK1VwpiwLG6wkBESu6vtELZtdgHBNVPML626LMSS7DzAqQAJLJNG6KWFRvNbb6yRAvFg6S",
  "key23": "46CFvUYsyEB2mRqyUoRX1aPMHvBA6TRyC87AnUnh43v7Axu9JpqJRtkTeFcqg7VYJYiPuWX1CbjWDk6B74y5BwH6",
  "key24": "5j3MYTZkYymTVfGwxAFQWEsVJ21BG2uetNcpVfYynWs3ZdDFpsNYZxHVJka6oX1FT1kU6DkrGAMzqsrNCjQfijaM",
  "key25": "jRBcBQubZJZXWDBoBrGVMPR4VfdgJ2gBxb6dHPKUp4dvhnQdP9cpwd5B8qmALbjsR44wHbvZic74YQFMVnEUFcS",
  "key26": "623pTmqCoV3WWyvsLG1dBGf4pzyFZcWdpAQiWb8LV2TDXRecsGTusm6FXCMBSfzTFr5qBA5yuNwbAf8cD3jSFwYT",
  "key27": "3PscmmSYF4grs1NosNeNi1i8QwUU9NCdEiUrySybKuyKRRkjLN6T7kkGDgYkMtXEjJRb5S19hJNheAYKRUNr6zCs",
  "key28": "3yWGVmjUYTAv3NWzeh2R2psdeUFgbP9fijaH8fZpPgf2fANKqquE4Qd5ZYp6MTGj6iMCtC6Z3UmymYmfmCBdKtKF",
  "key29": "5HDneAyGVvfHntvTRVVffB5YZHrV3iWWAjmEhom5b92JKxTwxesWuPL1NfhzWxxL6fTTf3t7Yx4QkwXebgsaMgDc",
  "key30": "5HBNCvkMVo4xJDq8BEL75cuGaD7HF1TZefeL4BdVNtrJmfnbeZDzyosCHL4ho3FoB2fjYndbi1uDjQUzqGwSQCLy",
  "key31": "5dYe9S1oiQxpNJaXPDzZPbn6VC5iXF58rP3T9sLeubWPFHHUwgN9Mobrf8wKQQiz8Parg3Dze73yhEEBvPe7PLNR",
  "key32": "2joWuQusj1AA6vPsgmnyrgusQmB1k56HSK77jBQs1iMwrRrRjZ6GTZJHtox8tz2ngG8znD1oEppktdpfthhVVVWh",
  "key33": "3dHF6wQve99b8usjFRkg8jWk8H2EfqgPBKPT69QeanXJQeECzw3PZ6ZqtTpR93X2H2eAoihCCiyYKhS1QRXhLuBx",
  "key34": "5Ee4s3XtMpwFQhKLhxDL9yw8GzmNSg6ogskSHmbB7x77M8mZnZg3QqpGadvqqMwSAMA5cj7qzBu1DUBRGGLukaA6",
  "key35": "5SY1CGHmiaLZcSk2EE5n4DF6QnmWyic5hcCMLztCS91ZPtC5FKgwEAKuzW3LYPR9iJbVpWvqHmb6FmRUYvLApbJe",
  "key36": "42M1B3JEwkiXQPmyxaiTVpXz9JGaRY945wNQSdJ46MJBDrU2RsaMoJGjAwbMoFeFsdLas5DxgRh2puyVJgJugWFK"
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
