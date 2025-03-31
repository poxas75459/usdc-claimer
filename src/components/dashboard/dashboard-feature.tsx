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
    "2yMwtrvtzP1HjHxU1z9eFMEM2SQbLBYeh8vuonS9if25GxPtpKnEvovJeoxLcvuEYzwsH2BEDDEPzpYdpPH43nqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDZSAe8hezutY1s1PqmspXW7zf9Q7pt4nDM8ZsAMyg1H65pLAw5d6NoPvytgw5tUjsx2sof7wGqD8a37MfVfZ4r",
  "key1": "YGQdbUAH2pM8aEdJrB95pbTgkiud3i8DLA3mS5sbePqC2WFNLNDn6Lmi2meoz7bmNvzpgx2kmpY1t5Q5P8pSztz",
  "key2": "3w75wpEhyVequUxBced7XVprAS7qLGtvnYaj8u2GWsBRkSy45RecF6qopXbsxN54Snki6Q5euZyJbZVtis7TxN5a",
  "key3": "28vqRSUG2Fjeib3VxzfLe4nmH26LZ7Trt5ZbvFjcncvZrqqAzaKChGvby7e9rsShBa2mW2EXCWdyrs38ZRGgyjx7",
  "key4": "4AfLWr9WBwueYfNzN2pZZ29hhiK2eUTYwariAfkMCp1L6TqYUD5Ev1m2kowFp7Z1MpoWWMZnd177z4DTHsYJLrAx",
  "key5": "24VBEd44nqD7LHBHjU3ahUDJ1M7JGpFytqXkdBCJT1umoQ7PrDbh1qwccgX2ktPbHD85wpVKV1GVF614bUgy2Gs5",
  "key6": "37Ng3UkucjziKqixPPHdxmfJpLLBwdKiY5pjR5yqa2934n5BAv6zunTerNC9qqLReTHH6WvjzPyUCPDduGrfSfrT",
  "key7": "5QXC4qFZpxWBkQVTCyavgtFdtjxjQ1r3gLNAoaUgMr4tGHo8JEtYBNv5dZC5ZZPeNh27XaQHy41BLntyYLgY4fNW",
  "key8": "xN9TdkVngywi7PhDN1bwDfGBAkjkHhPZXE33uK8nhvq1XHKcNtvYeXmnTtnFjhLFqqMv2j6Wc4zivP9Y1CvWYxW",
  "key9": "2oTv8cWt3zaYDHnGRrPangMwf6UqqYDVchH9FKB5UDj5GmFCxzCUP3FBsfShrSx3gAnLBZKAU2w3pKoH37x47tDZ",
  "key10": "2PGaRCrKBPecH4KSWjhcBQuq6nG8WMtsJPPeqSTrgPQexNJVgmxcmBeDJz6xHigib3HvisQ2v4cALMvowmgDySrV",
  "key11": "66sn8LpGBc5iTkqGhrTZdPg3Fz8rM1TgckSUShzLSRbqXFRqQDJFTLu3PRAZWznB9H1La75Qr12fFmJpSADAa6VV",
  "key12": "4rGXGPfBjhmfdZ3WGmYzNoR9t8PKnc5tbguZdxbBtj8b862P5GuCX5GqLWLYwQPqdpHY17BhpTEX2Pyg3ihmZBix",
  "key13": "5tvMhn5u8TDaiotAyv2y5cJcSUExDYaC5MCkVkXEbgcFUWaoTisXNEgKt26dTzHaB2bmZ9EZW1159hZGy4Qpd5Jn",
  "key14": "2tonigtvTDcvb8VspgraQhG7aWDZR5Z8r8vhsD4uvffFmw6VAKP3ESwTvyHrXSBLp1X6oSowiCMUDC5KgyvSqh9u",
  "key15": "5fndafEABcrptHWFTa2cCPsWzjVaSLprKRanGuRfexxxLegQng2C3en34JZm6c2ih7p9RAoWMg1wD143FcLVx1vr",
  "key16": "5Cm4xjj3SmPJSLPWytSPi7QrVdwJx2ZWGh2mAcQupgR6k5Wo3h7RRhWeZ6DCUQcFR4ZyZapvcN9m1E9au7G8jQRo",
  "key17": "59Kak3hn6q5wvzfVvNm5XJ5TwJU946hQeYMKQSUJyNkPbApwdDeurVJAyLjUAWurYssN62SBGJJ6tSfuZA9DYBjS",
  "key18": "37oGQv47baUNZKapmdSF3TCXDW86iTUBVWsdHkQt8fSN8bB51h9ZPNznULLN5M37UEJ1iu6SPuLdFxrEXnKexs7y",
  "key19": "5qMC3sdSw2NGFUQMo65hWnfmZfjB5992pNmwGaL8VD3X2zVFmAC1BpqPabVYDE1B4ZR5FuGKf7fLZVAWRzBijKBD",
  "key20": "39qvTBwJ35EWWocmDrhWrQv1wMKL3ZYU2buDEfzqxrPFLcBnuZFvxfLZBJKo9muV1PZt9kfJkYSx1b1G9DrvtV52",
  "key21": "2t1qZycwyWw3pZFsw8Qf4HrZYsBZN38PxAkx6xMdScw12TBgmuo8scHFCdgmzkiz8PiE6zEzesb2uGDY6eE98rV1",
  "key22": "2x7nRe67mt4WYwcF5AwfBNAQxS8psPzaah6DSoRmo8oNUW35rLD5h19w2wfQ9V2ZfHi1bYFTxuWzEdMQpSxeQcFW",
  "key23": "2D5qoe5Rp2dSBTKyxWeiWPzXg5jUCJAxFasGs5qEBrDzhUEjNF6NcZToKZnLkifbKZshv1qF6Ue7QruJX7b1SF7d",
  "key24": "3c6dmdhBK9XQXLrVdJHyLEAFttD6TUQeVkZoGXJJSZXYcHU6rQQkqfP6G84AEM3MyNNdxsta7ohESmnRrAqfPWjr",
  "key25": "2rw5KWkSNAoUtn7Bt8p7eeTjqBpjvKGrKPZjfWdA5dohYURrYSrFsjs8N1bnrCK2cN25KeUkNXpUjZcjHa6VMwMb",
  "key26": "KWq4aEzwDkbL35XeuchNwcm771y8JKWchLrXp3peZYC8GG4hxYCCF9j8L5D2UAj7NaaCp3UWo7ddd3do7bArZwc",
  "key27": "4MZ1odvapnCTQz5uiwVTgMdPCrphjoWZ9hyZCHJo1YumDWDSbRovR5uWxsgEJM1uEyH6fkZbPv5khm2hKusGDYUf",
  "key28": "5HCFNd5fDcZmbUFYPdm2p1P1oRYrDJ1k24RSnBHUZ7B1NvYRRdvdZnpRAgYDaEvkSUnCAdrZk1e3J9N37FqZNVYd",
  "key29": "yu4u4Swan12MaHZEz5aChVJGxqtVqCjabnuYAbrrzpvibogoTSkQqjexuYYAivngh4x9X192nk6ijVktiLzpVDL",
  "key30": "5G1d3dAiRvTh9nFvPCm8va6HJHUXCkmQt53SV5gM9eR9gFeE3xBXaqb4FTifvVSzDDSGLK6q9UqdmdoT1JsTVUSM",
  "key31": "5T1pkihWFUuXHJW3sof2bAMCYPBvcmKMzgtHpcv2N8bwSeDLVEgAdn9t8V8UUMNBfeaioAU7hmov23r86ZSn9EGc",
  "key32": "21xUhFS7XKnEcp7iCXhRd6JXSxgtTryBeyAhBbUPDjXQ5vW6gZsuBDm4prrRKHiShKBqSteqvwYYnYTQXzsXym1Q",
  "key33": "4TFpMbXCbX1CCj7f5pSB32UeXFXDBn1eZT71F1RvyEsB8vkY8No1WUxszZ4S62osk4pSQVrZ9qmnE542ANLChk9F",
  "key34": "5WSgtyjF58Gvj24gkDgBQd9e5EgFrsu5tgfrEyYEAxkTD5TrQxoV6aaFpY9GTN98vY29rAF8VDSkbu2jswa43Egi",
  "key35": "5fAfDYSK7gzX7VJbgAeMtsk5mnjtBjgsLfJQthjC3eFNwdSkjhmofYTSdkhAN6pmmynYDWAragLW3iqz1M8RXMR5",
  "key36": "F2912uHbuG2ixNYQL7JjQbac34L8nJ8PivFYdQi2Nt1mgehNgzRiS7yzyRjeFMQc9wkYbu6tJodzeiD5MkMiUg6",
  "key37": "6wbBNRyXtjQYj2BkWpZvRkRPrvgNjKK9wcd48LXvMGEGbm2pDb89Kc5CuuYZWRwmsDjGAGA4wDrGPpGjs5XxM1G",
  "key38": "3Y5f2sEeE9DaCkzKGLvmbPcYQGkB5KNLdbtXkBd1jeCUN9cSjt4tbgFH7YtvxTFLTCtGkSnjBAem2wvm9XXGvAwU",
  "key39": "4zNvGLJSybgm7ADKfPinsEnkfjBSH1R58aQfvePeWMDesJtjh2m5EFsYscvZDMzUE3jSsQKFLFiLwVm624zzZudg",
  "key40": "3TKTGvNdSZgw9kR8nV3ZvxTz5RTbBeUSDqrvRti5dBXTU3F5vUbMhg6dX8aR5MQH4KCzuvDKQJGdrKuwvt1vSXkQ",
  "key41": "5rZdM72Zg4vP2qbXQ686rbFYFvW7bWsQkFvPV7Rd9iMNDqL6N6GZwhS3Qe3GapaKA1CxWTv4AeMnCMw3siumLwDr"
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
