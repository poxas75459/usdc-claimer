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
    "3zoXrT4MBKJFtoYEQawjkvtwG9mdmTvhfkuyDhYDrk6Mq2vrtkwBbmUT5txWJVYPuvTzceoHSXAQhZyr1rMd4Q3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DVkBYEmXPki2eSSP8LxSsFYVEEHidUfZDvW7y7HSdHrXjJQa77P7YttAJzVdZEFW5dcjGyJCgoWuQ5quj1tSPJ",
  "key1": "3tPuNMM3pQ9cBLqEVPt2UM7WTiNQCf88MS6HcmQdJPiGuY3hvHwB6r9eYeaAX67Qg52S5iimixwXpiVjExdidiQ6",
  "key2": "3JinsKKEKZazMAiXH5Hf9BMdhjZ1ZsnneEZ641RJp75yUKuqhaCT6FzdHJEErMg7FtWVxYdLGVHjatPKuCWLRXDe",
  "key3": "47xZx8sP5b6LGnv5YMkq9fPjZHfbdRLj8dujayQD5SVyHV13nFsNH6hprNVASmyZmEEEgZXaQ9wQFfMbLZi62diG",
  "key4": "32PNu4FhpkUVyVbQdyTNtNCWGjLT95uCPKygUKBVycmgwBHd6iiNr9tpKkAeuumFvaXs96f1SXMj3BuZxwnWamrV",
  "key5": "5Vrh8wZ2R2GpyzBWdQmGMKjPKG5YXrsGvZ9HC8EPuvNyFrVn9fbENWDkq5pRQ3qQhLcACiTCnAYMamfYGeTWFvot",
  "key6": "53nLrbTc6ooLKtEirGGFmBh7KtWpBWe9ysD1EpRHFLudyLPrWy2MbrDXdreB7XFeDfm9pms2wTEDghs9Ta6a7spC",
  "key7": "541sxiKq75hknrVDAMphGRc7F9ZvqmGvrbkuqtYtyDKvp4cfnHN9vUZL5wVoSNkYda614JAnUVFf7mXM2JMHcm52",
  "key8": "5AnhrP6P8BCZPrD1ZbfaKEaNaAHKxnmYMHoGweTY83aHpAPZdNgQS2U8SZBgJtXwUxNfb16usWvg7UHZnYf47hng",
  "key9": "4DQMCxvS2U2FWq9behEUjxsXWs2fvGtRq4FVesLv5ofYHW2Z9BJxgo6BVzTqqFRNptKpLjXpqSLK1hpYikj4Gbtt",
  "key10": "32Aw7LM5Ev2DHKZg4scCGLjRt23LZwPSBxxvpfbd3zcupsCf4xPALmEzt5tFTGdfCxTTuhpXr1QRaoWdQjx16fs7",
  "key11": "4Kjn3M7rYgNXJjvGS2GaA3Knzmuuhb9s7sgjKEeHGCX4mVHjv61P3kNuxsjdH4eqatFBPeAUZn4QemQk7Q56aM15",
  "key12": "3DtH5Qq9iTZCAdcJf1nPrxD5euYCKeVNbcW4846tUfhMjf4R72DLyDHzmzVXDAWuwcn42DrYcz6psZfgSgeDUqjh",
  "key13": "27RDW293NWPNHSPHusLFU5DSYSv9VwHnqDHroQXnRBswTSB671Zgyj18hrNrpndY4fQcpDNLukgLi1wez2d5uWbC",
  "key14": "4GM82C4Fd17sfUvphvi1SUTu9euGfGxquux5xQfChZJzkvruFHSY2hLAq2vzNVzzzHExnrCoD9Wd2DUUt3TokJBf",
  "key15": "4Q9SyP5gUScVLsgHSkLrLMkuVECnPzpRrmVK88hEsXv4VCYhhNjqwe2NaiMHRcfhPJTQYUW3svfRGdao4BxLuZwP",
  "key16": "31k741mdMTwmjc4aigN5o24nnVknibvGkJjGmGVzAmWSaD6cZKdQH3ThzteZUATjcjWxJjTSp24h283npnetEXUV",
  "key17": "3nm5uLza5scR83fqZks8SvkkdtmXotVMEF2JCVyk8YC6XwdnmWy9nvkbkbqUazDsik7Jb7a5WdQNLnNDyZqdhFjt",
  "key18": "64M3nAEM6vXA91sSSGXsVAraJtFjzWkam2xzCLTnbDDbBcUgeoU6Y6iYHKNVQmj13Nx93A8bWS1NJvw5dB94EgaY",
  "key19": "T5DtWyZ7HRNcdHLeegsgGrpg9Q8xPa1bbPy7iu57hkFyhiidGUUSg6dNYJKSuLP1cZoYojkYFuRHtam6yvzikUS",
  "key20": "3MLXTSrMPPXfHEqDJJB2aCDdWC939M2w6pFoyNQLQDsiZBAjFrPihpXfLcaJAKo24SBkGdT7xR3JBTdzUF5dnUsy",
  "key21": "4p21SbbmmRfNuyN1pFZAbbzS4fajoYTTL3CH5hJgTXu6vigVMyE43w2hKYRSocFDd2LnBHj34divQXaLjcR2vg3B",
  "key22": "5ztvWGDZpoVTZLoTfq4eG3WYxLnTNqbJJQfKMuB12732Rb6YfzfFENmDUYMVPBWx6boGE2P6feTntEtoAjbYJgPB",
  "key23": "56vGVjdeZFEh16ZMtyC6tm38BuhMR6rPcZRMn5rLfubQDkNvAXekG2tQPRD6NtHDunbRM7NrZUKeKB4e1kWeTXom",
  "key24": "2DSyJASxyqeMNgLc2eus8wQ4882brLKPxyL6iweSRGq2Eojnpje7dehhawWV9enJSnzyH2mbTovZRtVPMBq3L3RS",
  "key25": "3TJ7eytD92uJtCXBdS49Pw95qZb5SFWAygtWqXxuatKqnjbWy6b8izHwRnWRGu6BJoGvk4oydy4PPjDcVbbFKzyr",
  "key26": "3Kvxprm7cJcL1oETLJgg5u6qLj2wUYKMARAGjJQ6FD4LxfzTDcr5nqaf7CULdyAkPBoybd51xxjDDEMYTvXjYWSh",
  "key27": "4sqbYjRGqWEPGMCx2FtwdrpbQ8QpRj4zuVGkD5ksGBGxjpt6if7psshLSZbXhPY1G8yiJgAgEZVVdxMFzq5tHWnt",
  "key28": "3ZmYAujNCg3MPsWgsZj18aiGiUjoakrWazbJm9pZSJGCXhVBRuY2TA9SVatCqWDxb6ruohDWXmFruJqcWz5xXsoz",
  "key29": "5QSCsoaY5mXBrEVfxU6DuLwBt6YYMuYjk2L3jdFCoyXakWNRxP74atSj4H4rzuErtMt6jGsbdxNwGnuNBMkw9QFk",
  "key30": "4meuj6btNhV5yry3wLXrxXcZRCjsUVahfDCtGFkN5MboEbXxCGD1jBGsV7xqBQwJkvrckCcBhTgoUwPkddUNQssa",
  "key31": "wrthrMQjue48oMwQJCYiiwEtUdVHtu2Nxa4rEMdMX5CGaMeRvZcMy7rqCK86krqTXGq2Q2hmBbHEFCXLrHd2RFV",
  "key32": "29kFLVASaGW1HDAeXbeXggvZQ5wRqq4pm3FWc5SoU8kG4wdLC1EmY3xTCofvX2yHWeWEEhzc3wo5BDTVwKpUhTBN",
  "key33": "2qEiVWschHTyz4EMQVXUVnXeHfJmh7AHKvz1VWQQgLXYBgJiVDFbg2Ezc4z7qDsRzR9uaR2PUq1pGwZ4pFzrFXMX",
  "key34": "36yfckHy1Hbdk4NMiezGa1jYHvpqRXq5E4bD9NWDfcp68aBX2LNwGEXcrGUr5SC4iT9dyprGtd8ojSf3K1T3YArb",
  "key35": "3qEpQ45tB6RV14YfkFQiXhqfKYdJ1vvW5NMF2MkaC748ZhcQ7iY7hnriRUfarj5Apk3dcbXQsHRtEkDGgGvqUCKV",
  "key36": "4y1Tr3hyCjJ92xUzFaQNFmvZwfdWrtn7pAjPaYAAkFirTak2m7ZU6dLiHngpXTiUWAebuWWbqqFS6fi65Hb5bL71",
  "key37": "5UE8a3vd3yW4fXYpU3Aj6WqFWAjex4anNzmAPXygfrXpCqFPFtuvaFqosHd8Ex4W2QnZPNL8kUSCkWYSPEADeykc"
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
