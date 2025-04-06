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
    "4gqncnWXHNHd2mfyJSN63Ff68QCU39zuWFx6AXKsuMr8oMfAnpCkfDHaSErUh4j9SYvP3sDPS6DDYerighW8fDqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rd5ZYa1ccvaXZQNAbRvW4zQBmqW5n38TX8DeHZvsedDQ1KdyRmCcFmC14iAzS9cw5D8nomzCX5WXJhMGRe8rZi",
  "key1": "2FvaJ3nLGmfhhriDV2ujWHb7eph9qfZjkhRSCW5BaiqKiFBs5nx6xvqQFVeuGN8Z5jLzLtUGqTeg2xab2tyzhfTS",
  "key2": "2axLzgkj7LFXH9oSvRPb8dA1iHXkgDzG2mB9JqNiydLJeDCCKCUoPKPhQ9PxcH89RUVcJwHZjkFAraoABbHRjihS",
  "key3": "3U2hWSmJrmsqwv9p2yZtGCSLncsYZGwecaAe6C7ebtAoamhV7WUc7TJmv96DuM4voiG5rQeBLrCtkktFfaMSgng4",
  "key4": "2ChT5r5NnFMAPVMJnY8eBJkBcihGMSzWUW19hd81L65P5srL8zDT6YS4tRrtyDjpQAyfanZxAqnmNPEaAMFbz3Tu",
  "key5": "41NUznikrPkMZ3nWpjP8Ac4gmQjE1eSsDSRLDHJUabK4r8qRKbMNr8Q6r4tvZB2PSiwSRygRiwV6wqwM9v7LJ4NT",
  "key6": "2QqESPbNyfp5EphfuuWjLeKxzwk7XbpDWhNT3ukM2iTZWFYNjiG4vufBQU45KQP3qZyT1xMvcJLLcaCKJoe5yTEr",
  "key7": "3yM4yJpkfFdTVQeQopJEXtr5AasJJoHYY9D7vy5Ttjo63E8zXm8zdWY2r5mHDTGqrxgmLWt4hCepsMvwwXSCJRQj",
  "key8": "2X9r2Fmik261JMXUUY9j3VcHkkQiPgV9f9uN9imVwHgPEvrAYRQ8rQ2gVLMZXr3zeychtEqVA4gdcBPHeDMVfbdd",
  "key9": "4pZYgZw55dvvhcGpWdSovPahJc8xZkrgzQ6VHikBjB7bXSGeh4SkRnW7qj8bvJEwuxhkztWkvpa7CwiSsXXKB8MA",
  "key10": "45itA12ggCBUQJy4X4YiAweWw8DKStPpZv7pPCeqxHU87PoHHoZ5yTzzFUygrFPC5RS136r9UwosYzDXgbMRT6az",
  "key11": "3Lg3euLANQdvV5t1od8CQBpqQWY9ygWB3WoFZyvktUXVFW9U8EndioMNswVvK29ppdaDZx97s6WNWrpKLZaGvSow",
  "key12": "67a9icbseabCaM8NTbTA49Z5iMej8a5vNUGa4JX757KSjSXzACPvzKie9ePxb9pSuVV2WDJJxsUzLwmXFpWXr6Ai",
  "key13": "5aVLJsUmPiPqSCPxF1C86FFQ1FNe3yJM7PvSU59MfPkFDofMY8ofCsRosyFEpiXcQp9XGhfi8p8HpietQ8QkBxCR",
  "key14": "5vCU7F7WaQBzBpjy5rFctvryVQeRrJQdzTZuxeaoNjTFAzgDPSFwvQA6NCRhMxJA9xa7i9SWQHLuioSUTQZv9NDt",
  "key15": "5dLfeG67boRkJkLGKiSzuJXMyv7ZcSyjZ6zUjJgdyhYXBYnu7TJFTQLt8yAuCQBQWkMg63KTxRnZHvhjMvdQGhK8",
  "key16": "4f1M1sVgVCW1X1WofqWDuRHwCy8LZrQESUBhCJtkoDSRDBNwhFZfJByboGc3Sja12gU5DzUfEBpBuEVtEdtGq4H5",
  "key17": "CAr3fBPYzgEo1SP3iw22X9z6kAkoCijaHSLWU515cqCa6NHD4KHhoQZjiDaW3Er8hB841wHbBPLUnm3rq2mMCPp",
  "key18": "4hqFHykomL2cQ5nUqdzhBPKgTRmGALd5uHu3guT2aHFMy3RrgaxvWp3P1gojo2NnssrssDUWBphGK3v4mwgPYJvH",
  "key19": "3EiPiPnqRMz6PhQ5zzTRg6asL3mih92ECmxvgAwqWW6Ea5oRitC7oqiSS9U86SvaCLWKgTWcpfbyo1LSniJQwdtf",
  "key20": "3gyCNLBTpGPZLbsXKJjG8RFZWz4dmoEbCrSKBczGvkpVx9LhVXrcotL57A6oguHwvCWh46PWW2N9mhwS8WSTP2NH",
  "key21": "5hYj2VDkcA9DWphJTFJMRb2cuEveqmVZMwEGyThjJzPSpxMvrHLuWqz68spHZLdWN367iL9DT78CmdTpwitRxzeX",
  "key22": "2gAtzrrqc7sMsPAgDfq6nwfzp1dDatKxc8FBeWHGq5FkPwQPyeV3QpH1bD3rRsHcDxFFzijwVAhG3EUheKQmiKmb",
  "key23": "2CQig52bA5fBQB8qeYZmE4FpE8DFoPXiQk3C9PLmcYGnR7sHToep1CMUASezn8CvbAjJjmMtibdYbjkW2wYRFEED",
  "key24": "JSKUSzeB2xgepbTj4fp8k6ANtgfUMVRT2NkNQ3BBbocKRSYHpdAZAgtagLGuq7sw5AEG6FueGDgTeBeLRMmLyU2",
  "key25": "K2TzqDqYizXTjm1pvPZaqNbs9CHEe7gDddsGSwXAcpRSJSfPpYn3q6nveYxJz39yaWvyKgeoNFjiHzqvL9DNGLo",
  "key26": "27wZxWTG9WnKuPPGMEGjEicuS2ThzGUac8bJo1bsSiY5L9yrQxdAgA6uQv7rEnR7TMurn5QWh51k6YJeiwWYi7kA",
  "key27": "YR7URMK9394vDWrejfRuMr4nvQXTA5HBwe4skdHCswki7cBhLi9yS21WfoWVmZ9N6L53PRcrXxQpeBY9B72KshJ",
  "key28": "4yA8WU5fjB8nWcwRuKphDEuCtX6vZVs2YnZiVFppnA6iHnUuztHf5Sg139fQva69rgTk1WSuyc8RkwMVgtFppVg6",
  "key29": "3sfgEjHKqBZRHr3bYoYN2jzkP6FQXbor79jDdQ86WEJoKPYch5f38LEbBcHofQT67UrXY2veo6wjJJjHb3oK9UU2",
  "key30": "3WuaCeL4YBt8WpYvAbwU5QtC9ZL5ZdYwx7Kjp3pQ96bFfC2neBEwJwxZknqrqgTNKVTAB9V4UmovrhAv3nnhuzms",
  "key31": "2nj9Y2qrGDYxL1QFnxaYzHrVmy9vvxuPdLLftsMoEVy9zxBHfGtAaQU3x5sfFodfiHXzkUuKsRrynfyiR4Xr9E5i",
  "key32": "2iX5XHNkt669B2zurZ38yKVuZX3ueG89R9JXfmBYG5NweSkk4zVhAewUSNhAjGcAx7hC61kzQbTTEaDJ6DwJaerQ",
  "key33": "3mWn4mSi7jiqoeDnGVhpQHPYMvayqjbwzoscXiscAUz8KBbTnRzxVoyqWqHMqvZNuw1cE1V5N5Lb5tVR47JjZARu",
  "key34": "3W5GD5QWJdjWuCURWertyUgeV7QbCV1wofgan4xio23jjVgJpgG6qNSRmBFvX76MuwtdyvUtQrcxsmszZmzED8Wn",
  "key35": "3JCkT7eSddsWKBB1qucwx4KeUFUnmhTqb4SC4zeuPifHNpG9Zi9wJaNCE3QRbrse6KTWeajSGhVhL8GTEiHm7ue4",
  "key36": "4Le6qSMhJdZfgkXSKWnWzMJrQV2jtmgeYtR11bcoKkJAGAhUSGiQmQpGdvGaWnrt36B3nwP6KvseP6YqbCJF196g",
  "key37": "426Lhd1ZsbLMtSzKpbVPXNJUoSohRBxnJSSCvGifMjYcSNkfmA4qAj4sF2dW681n4KpHhVncEnZrBK8SrJjmWWXF",
  "key38": "3qkYKCstNB29jFCUV3cG5MUD9oYtfdTBQYHyYy57A1gzaqa789LF9QfynokcpksRCmWM3ggEKd5TJjmcpDLsGAMv",
  "key39": "4yHEveEzTjwtMCHom5oxLJigNf1LjBJVwjiZ2nDEr5Zred4NCpakg8uimrWctA1qcNHhxaqfVBCo6PSUZr6KGnVL",
  "key40": "4J3TER7pAbN6hMQSom1zJDVe6ZehF8EqdpzatJPaYSYE3SsvNiAxhtVkR1zLU7HkU4KMj1sfCy7LCeNM8FX92jwq",
  "key41": "5vYwTBdERqZ7BRKtHU3kLQC5NTFadujZWoWMm7ZZLFiUEULpeNqh7yxnPa85NjTvRZCdJf9XibL2EZ3sFpSF4r8W",
  "key42": "2oqEPUGtGPNSFhM4TDPsznuD6ym61dmounGrqiwWWTtp6ZSkRERUHcFTf2FsxtmabVEs8jmHgACquyKHgy62uJLt",
  "key43": "5KG2FGPeCWKquuX6mFf43tuVeV82uawyW4mBuCxHa9XJCXvAgKbmRL6598fmEKraaxGEA7c8mtoDd9Pe9TjnhYSU",
  "key44": "r2GAUG9oyzFfVuJjYD7uDGyahdzKwBMeqdEC3VudywPiJnAu4ThcvQXwRu3aG4ouYXtkF85wLv8LRQidkTrN9zM",
  "key45": "4Fr4WthwJjmw8zvVTbmv7AGjbaN9bmkwfSSx4pSstKPcrm5QLNGoj8HDipE7JQhhHadRKhPp2dd2K668kncJekva",
  "key46": "4Ww7HU7ZwD42MjiMt12iS7tGpWrHhHZ2xqFR6w1mToQzKWiz9Dk8WdZf1F9pvwimAiKLNw4SejheGKz7eCN5sjvp"
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
