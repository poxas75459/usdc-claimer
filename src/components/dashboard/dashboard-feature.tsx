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
    "CSLNxQdyhoZn44LYFf2q6HveFYyvHGVkH1SVPeGUEBECAATPiKSQAzuGY7nTzfWyTPauGDMczuSDcRFi2YLURd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1vF6QTcW35nVwrQBbmkCkwposCg6dXHRsQbUEknMpBMMujiaenPTMgNmNFHdHTgrki2qyBeoCFCb9evithWE3p",
  "key1": "5Digoc7FbPLMmvcYLFFeA7q45LwJrVvHpUGfB1X2yFUCN87qNU38vjAnzcnLQESpHBZQGNptFWocYXbRB29tDYns",
  "key2": "3dBUTKc53nsVYJqVhxNa1jAK7P2TsnNTinPmbXNUrmYFMFea2tMLuQj7S33ZEQsJMr3ZUbeoin9ghUN66pvHeGkF",
  "key3": "5LxQTZEAkgJZr4DBhG4FTSDVGs4TChj8eXaTDNtGuKhCNXfVPmXx85qwhmLUmshxV9pHECCKmAzSomCC1zcy3967",
  "key4": "pnktjMcfq1AjUBtiroedqD28VqLTwEsyoDw4nWLJhDxZhCfWYcYrLwuPgYM99vfou5ZNXP8EE7RPdFWoczyhcTS",
  "key5": "4k642z5NyFTaXXgfj94MJ3xZZzLyi9vyRoZVxAUfBmUDN8KhwSFHik77BXMTEuN3oLAV2c3TQmET272g9MmR1jEx",
  "key6": "3tDWnqPukxdm6nECmQGJHbqxiL4xpeQvRAKhKtLQrAwDMnSWjwvr6s9KFtQMC9x6VWBkMxuJxtvLa58vfLMB8twA",
  "key7": "5pzFbX11nu64iWWn91LEjsCJzt65KdPchUjpUB4Tvs9jGdAENXYonLcg6P9c53NHyJf15MsQW5JRN5Sx2bZF1ocz",
  "key8": "Av29WcWKH6y9ixi55FM3677s6Xc7VZ3kGtbSuxVwztfNmgoNtpccjn1QjwprysrDqZpx2BRKdZHWyFzz1EVgKzM",
  "key9": "66KyjJXsCk7CKdYhpiGuwxQNyjvLnd8niFzgJWTz7WYeeHyQ4fBdhSCtJLpVZjtnLtN4TZDNm8baFwYkpdBLmreX",
  "key10": "3FYqzZ8PnsAu33akto4hEyr3mFQmuniC97CmoRhUBqnDC2xV2yMSRY9yyKQvcdsb7ZgAqyqWwtTqWgv9n9L1K1ej",
  "key11": "5RE6qgFcjPZT8d8Q5uzKS3SgDt48Yz6z8rexhYUS86165sUq48sHcQ539CVpXeyTkkyugLvTkASZ5Zj1BxSmjv1L",
  "key12": "2gnvSwZGKxwaj4N68xAgCveChTCpR8Umrch38NTu7FPAvyfF3KDcUXCnJkaCbU9PqRTTMkmRUSfC3qU4dt2sh2xo",
  "key13": "5qAaqTnn6cRfA9yTXur6Ura3yxHS5rPaTdANMqAsq6UbAJLNxXgT9gwrxMkLmX4NjhZgnwhv2wWaZVXSwVrq32Pz",
  "key14": "4KDVC38eKtoxhzeD4Eh6iF9xY2CiXS2SdZvBhns1zra5xXc7bqMgpPs1aFRKATQVt8AsxV4rVN8ZSZAR2oW2hFxo",
  "key15": "2hk1SVDLhL145TwzuH9UFmE2hxxWPCf9inLwR7FbpFPC68ngRfDRsLQLAFZG3rs3EQostBPicD3m3GT2soRNMiyb",
  "key16": "23zLwUew5CuqRM7vTbtHMw6Uf7ETEyxV7JqpvKxN1BpdcKdbYwovy89L8CXhtBqe1km5tMNqdA9fezeFCs2pkRo5",
  "key17": "2tD1rqCGfstjKaRDQqQgbj6TmrULAMbUVt97eikNvStGSUHm9qRNb2dca5yBbajdF1tudBfHN6v53XAqnUTo9eA6",
  "key18": "4vb8GAaaEVY7VbUKVwC5YcxCvZdM48uhtZDEheXuqvZuBv8D25SzZuK6VqbPVETZdv8rWEDmPT8RC39Mmr8YxgyC",
  "key19": "4xZjaRioCymswmj6oGfvftfzLydRkYfBgEaDyyYBAjU25rSnhYJmcJzKr2ZgDujAJMBxz5b3zrZptTkSqNvpus2p",
  "key20": "3zdqkx4eXik9z3q6RHMMGnDNnLZawhbWQxdznUvME7Yiop7hhvZS6hyvvMzTWNdfS8NXoPc6cWjZnFEqkk6TSfgu",
  "key21": "28gqTeffhcV5RyNC1pwjLTBZGTMGxgkwJBVL1h6JmGn6xCTb3vC7msBacpQFDTZs9zmmf4MUdLjdmab9yds4qqzv",
  "key22": "3qwpjh7aVzGvsbhycHXRRAUanfHgg8NMS2s974L4c4QPpGRPW5sqDyse2aSKAacNhhbhLmRvxx7bTWjoJQbrbjEc",
  "key23": "5XJe3Jf4Usrzto431zuX3UNVQkNWTfzRpDAfoBpdkHct3cgKLnWmsSTECq1wTojFX8beieB5AswsrTMSsFndsef",
  "key24": "653NPMF615MK1gBnxSHQ7HopXaA8LLmUGDLA5LW1Wg3SZmStjwsg4gwg7Frx6ah7pCpiFEHzzFF9vXKdeUr7U1AM",
  "key25": "5XSsFzwHC4QXXNs1eesKjRkdBDiARWsCYQSp8GEmdbmvgSsmYKEf15teekngBPYqkZsqPaYZMMqZFNGKDLmAyuU8",
  "key26": "gCuimTic9qPRyq2NdwiSH1PeNySvQLk3CQ6Q4gKFquY2FBkR3Wry9qAXJYMgZbSRAwb6wPcDrkdVkHB8o8UoHYR",
  "key27": "5LQHx4DpGyVjgwHp4pJbQqu8L3u98xwhxsSZSvgrB41U5oWsx6x1QVC3brVVeDDxoQKBXV8zUBJQhJoQDsJRJYLN",
  "key28": "3AWoDW7mrvsKffS4zCb17tyCCkuHu9dGhD6MJ1NAdC2RHkHBxzhx9VvBvB2P1XRkm2617EvA7DS2BMHcMJSPkFTA",
  "key29": "5JefCsCdhYa543v98zLFsbFe6URY1Hm362ojd9gM13Ngn5c9dbL6AXZHfBGCpmi84KGbB9RwyybCwwUUJi2YyC32",
  "key30": "2P3iUNaoHp1avPRRWod5yHMF5o7bb87LxRPhR6H4Yi6d3v76EKBRuSXY1GPdgCe4tKJR2nuYpn6iKv57NgSPhcTf",
  "key31": "4ZdegtrewepJAz9aufeJiLi5iFC7AERsVkTfqrm2N362t24jbaVD3P7uozVQ5CgUpUYk1LDrtDMvdTPuE3K4nHvB",
  "key32": "2K5yHtp7gj1kovnXb8yjDeVXmUNEnnqg6cowEUFuZELBY22LxzB2gBbUWTo3tgSX7k9C2bxpnaMJDHDSSmy4BKfb",
  "key33": "4EUwm9Wvr9Uov9PFwxJr8x91SivEJmJVgGizj5JQsgcZtpMxbHwqUZ8o2B8Xj4rJsY3fVPbTwy4SrYKqKDj7ktxU",
  "key34": "42zrxWxkFN2rxNbUbTWgSLtErSjDR6448XLnUETiid5TbnXFKbkCQa9f4tYdNF4HmnP7hNRd7vs3Rg5CBZenA2LV",
  "key35": "2aAwgxJedudKJ51U1WE17yEdq91LmnQkMYkvR3MPea5ZYgM6CTGUyTouyCyfM6ScwZBmsSDh3btSMwn8Ywxv8URC",
  "key36": "3P1RXdmExkVxm7UKVMGkiFYVGjsxzcxLYgo9t7sh5KhgxqmcNUhoRVTFMk33HrjfC5chnyeTMnNYCimDyz2evQmh",
  "key37": "5AReK6QMbFUuj1LyWKi9z99JnXG6zhVevvVMJ3NMtRZisKBY9uvWdEHiAvMysr5veEpgSMx6Canu3Hf3LGvcXh29",
  "key38": "54zHrLTViqk73JZq2RQja955r11gYTnwq95d7t2zWJ32tQSjwbBohdfzCmRP77gYPUWuU8pRcFKpE1Qhzr3QVobR",
  "key39": "yikgpS8MtW1DHL9V9kigKaRoL9ZyG1rEQ86Us7sjVbVDHd7TmHdMK7F3Ti9GceiVT4bph7tdDKXEntTWTrZJS2X",
  "key40": "3yk3rDUqNTWD2kg6A7t25ECUP2QcDghjqgzMHtChNrkr7KEbU76LGsNUCYDda5uT9pJBV7fz92wefZQjZvSrbmfc",
  "key41": "3hFc7EhU5ih7NGCbczA2hvVSor1G6Ed7sEqnWxjeLi2Sfhqh9JHADpC7shr5sfVA3QPvvCXPt984KVFCkctTfxwo",
  "key42": "5aPi6emfSLqu84jrUbAhfSNj8BgWRU87WvFZDYJo3qvk4rRJ9dXHijTnz4C6URWefFkdReHfhp8jyJyqATDQH6P1",
  "key43": "2ByrZ8GWqdMzDbXE9athtMsXFj1z17VDqrGrR3HhV8PHqo4K6qd6EWGPt1kbRWDsumY6LmRX4VzmpjmV51zYqcTM",
  "key44": "2aABBCBNwz42VvQWwjPqograxvgzWMeWfpJZxHpm6E9n7UfEbJJ9tYTgQqZ6XYYSCXvjFvWV7Kduva4HVaWj1Nn",
  "key45": "UEi5K5TsAyZrSdmT2JPg6XtCWFpQfbFsiJjwDo5hzNAhd99YwP4BxW5Zeoifrea5YLvcNCbvUusKb5U7qyhUjbB",
  "key46": "Uw6pGsWnaEA5wKfAiczZrSnctUDBtMmMqRvta5UD7CaxM4oJ3hDRiMk27yrnyAobEzqY4cEMpXQBeVP2fEdrJF3",
  "key47": "2VNduVqy8ow8R1x3Fs9s3hime2qj7XhP2pvcijh1nJ98rT1pzkVh5zfQEBHg46ZGjSV34EKxSjfug6GANzTb89gh"
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
