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
    "HBfxun6fXpJuDf1RQ4xAALiLyfkRD7WXSpNd9aHDi9ugYXEV647CZWHsQpmhXzoQE3mrPEfWs6Q7sxSTjqhwH8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DJsL3p1kkNfRheTeXn32RPvtpuk1iRmnx1VLWp13iPtHRdbmfdRqSaouofJbFLgbCifuBFAC869uWjvgLrJCCuN",
  "key1": "58Dtnpt4xLBoxu3nwuwXcHFCqcXmk73JV8jStQDfuhruvvBmCtx3cHEH88vonSBcbvQsjejNS1Bwf97ygzFcseEc",
  "key2": "4L5s7hhjVZGzbqP7QE93CRazsaBGkRSVEH6Tch29pFd7BZafUQPw5TruZNdPEqBtzF7Bygyc5T9K851z8i3NuJcT",
  "key3": "48gXJp56YnkkwzhswVpZNraqpgsyD7QUkzp6V6yUqX61EqGwuZHCgxbVJ4buhhhQ7ZrsjkiMTToFvEnR9NW3ikr7",
  "key4": "5fE4hN2VEGTnQWa5TRTXxC5DNbfYHeXFXoa6pFN3ydk2f7gW2KjkUpvoBpJbRrNwBXyvXkBxdQQ115vZYH6VTfmi",
  "key5": "3Z1Bs9didkUSLfPNe4mSENcqo5ZFquqaWwnLv6XLzCgy6namJi6CFXJNAATUP2TD1cb1RAq8paJSdj9gQLoLh9pH",
  "key6": "2WUKo891TQsi4jCqgy1aRUFKQgeWgVmW65Sycm2zsmi3eKiNYJpZef4ixhGepbaPM2b3FTisyJyXQp2ssX5ZBF7g",
  "key7": "2rnKQLUwUHLLeqt2ohvUsa53j8hM4Ba8H1wNDHCkXByiJHKpjE98RAVkwAz5ZtAzfb44h6mMHBFCbCqLEcj2kvRU",
  "key8": "KbEYf4Nq8w6JakpYvkqjaqMuZ6WnirixA3Z7M3HcWzWkRaZqXaZgPKReQrFD2pdoW3LQAHTmPV7SriLEq4F8XKH",
  "key9": "3Bvp29mTqJY22M6Sw5cJDT2Hs3kShFGEpNFkG9ZReEUTup8UZvxkHmskXoxyvxyrBWXnQzBcxZsAWk5m2ekrhU2o",
  "key10": "21ArVxY813nY7usB3EVCDE4mvwo9uYCBBFqbTiqsdm2TMqqqzsS7471RtYHBwGpkjPYzCUHZP3GWyKypALSeY7oq",
  "key11": "3XEFxHqwZqKsQqHm9RifQFc8REnBYY9WkgWaN9DAzy8ThnffdTrWduEgcU1PisMAUGYTYv1Cbv3yMgSPwFrT9ygZ",
  "key12": "3Cs3c5juSUCZ3Uoe7NyYVQR2x7WaNC1o9v9UbTd3XYxgyzBNRVM13ARn3N4U2dNEhFFFeAVQUiyWrec98YxKMEHN",
  "key13": "Q8c9fNs4qxQP3dCY5p7PaY5eHUHGZPYmRCZttYdXU6dmMNNnfcjTLyJZgsvbYQMXch3ydFvV3ZsCtFsWc1LdxSW",
  "key14": "37H69hx5MZHX9D9ngQWKWaAUF1CTZ6jP1dMJUuFbmb4Up3xwX9H28fhaKkNiu9xhpMDZzvnpWeNWBkbZjC9dLi5E",
  "key15": "hPcNQBsehpA5rWLqrt6TCJgqY6zj8bpfgghJrGw9oBiLn4244SdvmuU46Na7Jaz1bE3yogiiqF8VErRfNsGCX2j",
  "key16": "3dT1dpBS8N9nnTW5gwerudokwnAiHXFYrY4akngVpcFzBRNNJfojXz7KXEqbjH8TuhYVA5o5XjKF72YvKKoQRsyc",
  "key17": "5Wew8UJjSP69sGwxLUzbCnAbSn9T8RBzitiR85BVh2HmCJDq8WYo8Rdok48gcZEqeqvURf2es2j6M1nWvQW6UtTv",
  "key18": "4sRxUmiSwckrQbpUJ4xYJtZhCdSABN3fNSR5H4fVurMMWwvu7fPJSerkucYgCEmR5a2bqo8jnt1hAd9zMFVpNs4s",
  "key19": "5GJgGWkXXP5rcu51fAeeUHb1Js1guzbh9PTpoB369DN7agmF4CqreNaMtdgpCS3BzgBychJTx7w97TsNwCvpubnt",
  "key20": "5Z6Ro8u168H7TE32BBkULqhuMDqDpFmyAFhMtDCFst3MhPRvMd9tWH9tXE6LfGPUxP2R3NFWD9QAE71uH3vpofS1",
  "key21": "48QX6ouWLqoJPRnbjmTf2nPckpF1eamDZha78DWcNRXpzwEygxViAAvbwES1kcih163e6RPvDkUbDaALuH9eo1Jc",
  "key22": "4Q9ojgumZF9s1nkQikkkHLgk7W6mZrUaGG9MDgEFbgPXgZN6mm1jUw4rngxmHdqq8N6Q6AVfHSDvs7N56ZGesTLi",
  "key23": "5GnErav68izEGGQT2KGVQuo2KvWfF7n2RqyVFMJPx4padRa8B1NoY4R2ny4ncLK736ZcvfZMDbprSstkfL7MtCdt",
  "key24": "5Fy7BEMA3Ke68bT7W8G1aVJYLkY4mMK217ySbFWihKPjRdaU8XFXzpMjPeHsw4eP8T3hjyzBqnVvSNUwQkm5rDEM",
  "key25": "4qDQDFgDJK3a1HeNxvbvwCR3FUtzJ3zvX2WT7KvxUQ7v9ercPJ3Rp8KzCg2U5e2mR4SM6xTbFPZ26tm6xs1jDJJj",
  "key26": "31fzyyFx7wkV6tEm343T74kk2PaNCNWP2g4eLMRPZKJ8LBp5JGKRpN5f6mDjZAm69TrZCDPGUXi7pQo9dDpU3TFB",
  "key27": "2758zWVrG3hhGQgnr2iHdogxtX3XMoG6N1pz4F4VMZVSNbvXyMeZSeyZ356wrUTfHmihULCvgXysXwVwFvboyZhL",
  "key28": "3Lo4RxuGiRfYmhFeb72k6saGNB6SPFuJZevEd75cApw93LdndVUXuxJXaBgXkAzvrDcUbYsv3ebaJC95WgzaM6Q4",
  "key29": "2RZ7ytSwxVWzbS9ZhKwVaU6ruzW7DpNSyKbYe9aJdw5PcZdCYdSb3MURFcUvrL3sNXmCyujw8hwhBALYt4RhxwzR",
  "key30": "2WaJn14mXjV13D6RYLDUpz59WyFGsYwdFsDg1xudzT8FQPGxx5z4fhe6kvtjD66GJ7DaXhHvAeAJfdXQzsjfdhL6",
  "key31": "15CxQLnRZJUnePf7qqd4BRjPqbmtb8kSN422Nt8PLAu8qUKbHck9H7wXS2hvpSNm8LxR9449uk7eqLcNLRsh7Tn",
  "key32": "3k13ND9H2SbZVViqHsQpRYY54Fzkt13tiPcn8SJAYXN3PAzpEUquJveYio39h44iHFpVZJ6C4aYHxTUxrEFLX6TV",
  "key33": "2heZhNWxwm7ckq6a6sFYNqh6DuE7Yh2bWLEjNQyn1CpqXqkSPFQ5UdaEFNnU9G35LBLLKcXE9jsSTWhSN1Vi5RNn",
  "key34": "VDZ7Pq4p652ZdQTKeEBbHMdG48ZcrHE3nWSAAfPBQxGNHuiJStgq7duERt5EeJXxYaCmButwi5PsZDe2txfVaFx",
  "key35": "358h5ZyEm2BWVHxTTt2AVjs1QmD3ibk3BNZBTNaGGo7HcN2vEE1u9qkiTu7S8yB7k6MoxAJ9S4R3Beb2iJH1eDc1",
  "key36": "2c2z7WXeLx7MMfpZhGrZQUW5g1HDtTua11XFiZTWv5BPFdq7RW6DAaXoK1PnvMjVfezZiWWdCnFP2qAGFihAzrUJ",
  "key37": "3shzrx6mpmbjnvNQDPoa7BJoioBqQRhRM5QGuQF3C79gUJcL7xkktGrEbdb7gdDRv1n7uiLU7NkhVoC4MJiwkmqB",
  "key38": "4oN2FoxM43MngzW15k5eZjMXGFv9YGMYD9eYFL7G7egNEHipyEnJhg3zXXPqiCM4VKpLPJFU9JxsvzQJGaxJvKCC",
  "key39": "2FNFDzfaoutfdjCphJ76scHbjyXTvL7D34Fh9cH5K74g7uNE4oSpiE2QLNik1w9WjXGQhwU9fkbdz6onpczKZiLg",
  "key40": "4Rwzf7646CSm5sWMBmJ3CfHeewveDpRTEKKaEebfsiSdnYxjDrBNoXs9aviPeg8M6tPYrJrqa9QhG5f8fuD2G1B1",
  "key41": "4hmasCTNh4ChbtndUY5oTh289zEUCZhckYwiAtfuNr6PcL7SvHQBLrwxNbbE91qQnP3wuTbz8csFpLK76U9YBXrs",
  "key42": "4asSf4cBU8mDV75btoBskp5jbTG3qpHmMzgSY6YUzd2iDcTjhWrKGxLgja1fhEGndvRJ8co8G8i6wcwLnie5bobR"
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
