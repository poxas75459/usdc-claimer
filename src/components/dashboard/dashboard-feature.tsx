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
    "nRcxEbJ4Cdh5NAy2gjKveCYWMcKRey31icepKwLrxVD9tJcNZKUf6dZFAXNeufGJi7kc86Wth1WrXixiFe4vfUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZobNHaTtSoeMxJ3Bmdmt7fbv3f98MqBCW8WzWL9Xzfw3f1gq7FF1GCiwJ2tZ7zYmk5x5xMtiFNdWBk58sExZNfA",
  "key1": "3oAdkgo7SUigHARw89kpYhNeZYt5mBcZ9z3PCbrkXFot8xK9mnQXfjQ2YrBJr81xDZbR1J5iqz4CGsJMfRY62bbZ",
  "key2": "QyZyuX1r4csy4rEwi8dKyqGtnyKkyEMTNqezFkU57P3tdK89eRtCcg8rEgE1dDvfhhqt9XM8Xbb2zMvuyJ2QdWc",
  "key3": "4kMitLH6P92iPLB6AGG7sNzDhQzUBx6XhRcyF32dpDYLaDKH9cAXSUrBDRzb4WYS3XhrfFg1wPXJegoKMyTtqgQy",
  "key4": "3F6noTXbj5L57gpFcYHU4XGLUuUfmQKnTmDFJZWetKD44J2jrCRpCk4uqcYibPqribDfz7jw3Gk6dH7DCo16xiGK",
  "key5": "2V4BLXFmZkh7VfLTdZh7BFxAfWipgjv76SMGWNiRcezGAvxrmYjq951Uzuusm18KSMN8jf88daaEXyh3mEtzHWiK",
  "key6": "4eEufCQtAn6EQQ3X15kX7VTbbwrvpzyQmc1D8Uh3V5e54UTfzwihe7QhqQC6DaAmU7Vbxso41f1aE4yW7GDb298q",
  "key7": "4X6ojKD6gvmLxvx32qY9kubqZaP85H5qW8knxw7fLRWQcKNH339umbpsZDMpHqZi7vbQRYjHevcA64uTzk5hct5u",
  "key8": "5fAFRfsFyobfLiMdfnmBWNGa6rjYK24u6GUmaq1NLxoctRdkcRF212XiffUrcMrvRsQBxbN81D4mbVGuzmJSWegE",
  "key9": "59xaZA32giU5SQaZuZYJaCTbhmxoaQszosFYFGyzsXnMdrdx4TnkZWxR7fRkuk7VEsg6QFadJGC9vqXzKw7dyUZ",
  "key10": "5qrbM1fHwVQifHtV9cr6wU4xyP9WvKwRAMKP9qYAdnrXqt4cdgKVEG6FfbPLtU79izNmtHFYsHckKd7xVZoDz928",
  "key11": "5ytvrPRvBYkpJ7r1n121JsNzbefYs7TxARH2Do1GsUwVqXbdHCMHihA5yasNhDJgXeJaRoWFBpzNT1pGffy99SM6",
  "key12": "5xckBMFvNYn363aFs9YzdyVkJcRXHZGCuWSxk5r2fo21yC2mSs7a7WtQNfgqrvq3sQr5szgU6GWjZH5XXy5sm1tL",
  "key13": "3RpmqsgsWSWi2aKG81SzcEsSNcEDGJ3koYbvJ8xFJX1kyeAg8Hu8vmBD8PTeb1ooKwjCiTNbkoKJfTnBnrBLVjQ3",
  "key14": "3ukpwKgTNLDNzTSmDHE8XGsU1ouBN3zeM3SCA4xxKMkN7wJHPcTkw62VHUcsyRwKYASMLnbsrX7fxvpewyYW4Qyu",
  "key15": "3auCSLJpHeBUaqnWi7wcjLK1xfhvLXikv1n48GYzwqZSWaeYsAUjeqZT2SzDJ1m111UAYyvciLe7hdP1Ru1j26Re",
  "key16": "4ZvzeJ4fYiU2pdEh6ZexXkp38jiksTfY3pmt7eLczqBvZXeHttAQoBsTxThE5AGh3aaxteu5wATJzQ8DzfY12f8K",
  "key17": "4qwsffa8SBkgmxkezSz8NPbKME2uw6rgR6cKMPvG9vudNb5JFRtrYPQ4p5i2YYuPwnqL3Du13iFjTpdXcUg9LvCN",
  "key18": "2KPdHQCKqjgJdLKnmA76JfaXzQhR4ERCfQAvrked51B9pBSVMUr6r1WUyTMx3Bxxu8kheRcjfxccr2xmwBBXfLpr",
  "key19": "5AHJoPrhjuxmp6oUVpZvqQVHbdkRLFJX52xXErKK4p77fjxLPZNUmZz6SjtBZThWAK4pmEALN93bwRMfoQExw7eN",
  "key20": "67hJv4S86EUuek6eZfT2Yj9AWoW1En2Pn4eUPnPQPNjC5aYthExmpaLhVs1hwXgKZCSnc96yYC4hqgz5SLWMDG3W",
  "key21": "fXDVnPkzx2heYAC3SggJShwdbJXxq99xzUuYmxwf4AGHvVuY8ArfBcmWxqEa7EEGrFa9UjNq4v8k7PzpZWLFcJA",
  "key22": "3JLBo6U3furfW9XbAQwyzzqVKq6xhnAvUTaps336DZ2aaFFTYzNL8aeNBRgKFkgo8wpRhnjfV1q8wfUzLiNGXQ4A",
  "key23": "2KdjY2ENZDua4CufkZya4DtyNbCWYi41LFYgRYX92ENXb57i136d9k7dMJK8RP1PTftT5weGas3Z6ZxYVHyybLfJ",
  "key24": "4SEHLCZoHTnv7J3MYAGcFoXTVoUaxFs3BaYN5MFuH5BbNS7m9RfuvSvTk3KJR6L8qGSefDLPxLVnpALxNwkyyYi6",
  "key25": "AsnCpot1aEFWREwquwiHsBwz7kZT17tEy1vNabDSPUYYAqjBAykFm1HiGaZr4AjuQJn9FQyoeprB7ejP1ZqiNib",
  "key26": "4bL2FoLJ94MWb4Y9wVcy4T3gede45sW1tUnLFCnSAsrxCQ3SuH9vwVMCS9fbDNwtwB4bZeGaEr3HM5BK1Kxt4Rts",
  "key27": "4AVCMqofcdRUeAzbQUEF62VpFpcdGD63fSZftWFw7zeCNV2jak6CB5dGB7ktT33eNs2FziNhJcURV2tYS1Co6nCh",
  "key28": "592dFTRzDtify1CW44GMmus3jidBCxtoYYGkiFp8xpx7hG8pTYT9LrSpBsP4AzkLBSox7PzFai6fq5s4m3qYkcTQ",
  "key29": "4g7iTpjG2H8yH8u7bYWnSVN1PMw4V56JWEK6PHJ74eJHnroXLa8XDyNBY5M8mVEd2gnPJrvvj2Yj21HMe97m43tQ",
  "key30": "46Eq4Rp7YTzd9xzu5K3ZCaUELoHs526Z7KoFdc7cjWa2qUZHYoptMbvN1YXWqYf5hhodtZDQWQ6BFRa1g9Zqcxqa",
  "key31": "3pZAsnVzzTk1pvby2nUeN7A53r5kXP9rAXHc7yRwjgURapZAhG4PjaDy2CpTtVADfqXrZbVvYWs33CySjjmdeiWb",
  "key32": "XCvBTnQyZ5Ut82G7jBVAw4ugui43TuRCYfb1uuya8JxpT7K1uqFqfzL9yUjYEPLiuLUQTVWfi7tRSWJ1A9EHeQW",
  "key33": "2wadE9kM5M16qnNmAPauFSPRfPJn9sy6agzegkMBLLgGJxqiZKEZMdNM8qPzLrRxzdmoBTsR1nRFn5gtPNXNeRea",
  "key34": "3vhNqH5H7t2MjgZHx4GaJCV2PfCrLuDYUcjwctB9QgWXaDApbDnSuJn2PFN6dRfHQUfCWHUGK47Af79PTA9RqEMW",
  "key35": "4FTLUP14aM9sbpTH5eju4nFHm7fp9XERu97z1bx91VY5JUKbn2gd4Zpp7cr7vyZsYrHEeYXP6yrp5Bttt7jtshfS",
  "key36": "3Z5oq1Eyez4iTqA8pVUrXt7Gxz6XtuxG4Sa4yARc1QGc3vVnkyZxBUn1ah9MtQHhHwPqfUjNEtxPzqUDPWrmiFzx",
  "key37": "3XU6viE5t7vSU7kgGRkWVCxUaEifLXEwPTifgP98yxztN4WqhDNfp7Cy5yTqwDbu3aEhTQ7npeLu3h5zgZBSGrot",
  "key38": "2iwTvJChQCvAkePVFPETnTZwCtpMWjAZwuA7jS3nSUcwWpFUQPaS5wPLY5Yn2CvxqLfGjJtN1qonxCeDayAGxubG",
  "key39": "5zBwVnsCTsQ2g6yVYHdMSe33672aZKFJ82Pd1LbX5GaJ87c68mAnGpML8bhYQCVK3Hma76TSPDbZARoXFDxdPiqq",
  "key40": "3tEMfukHrnNaZYeSuUU49wHiGh5bKSW4nnLwum4PNniw1HXbi1YRgEJRjLh4PzY7uEfiFXBTNgr5iSHTnf4bC9cU",
  "key41": "5M8EUehSWKZYvijPsxjuS8ZKaHAtZiqgw29uirEsRaYe7Ctpjd6CUnmv51dpBLgwHfqaPzRyqRMkjwE6szkjC1cz",
  "key42": "KoXxgBqZZF6SiEPHtEazqEtSNhiMh3Jx6aCyaiRBHfNoq8DrmkGCvXwdmTs2LikcdZ14aWWareSVnSKsmWF7Vu2",
  "key43": "3rWVSmQ3uRJAPa1Z6biMAGktTRqmm7UfrAsM7R5wK45kkLunaDiNbd88px9jzfqxeGykXHNotcmBWGw5nnQeA9a7",
  "key44": "35p4LqwVGM3ne1Snj2xJvwj4v826VJ5tN2J8AsBJZtQMT2H3JowXU5mBXF1DSEH5VAkhi8XnWtQAm2NUWa7chHJ6",
  "key45": "5Bh6BKmSFhxetTJSCS1VF4nk5Yfo2muZai3UwTBGC7YsuYgt4baEcgeHFQb47ZEPxbug3Zi6cboGsiS75nTJy6iR",
  "key46": "iYmJRLFsXZvM9tuKU5J5nwwjcKesP3thvkHJ5TTJPJNk78SHS9QaUeCz53dEgBUNYm2qVGp3Rgsit2aYbciGc4p"
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
