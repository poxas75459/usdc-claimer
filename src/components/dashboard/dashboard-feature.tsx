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
    "4Noz9JdAc5ei6VoCVXGq8hA9AnXqU1AoZ8j58JMEWUVFnjsGtNcX7qkcREYi8Ncu6PR9jB9PAv5jCxaw79Acvyt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkRLyr7Not3NcFSuP7uRfSqm9HqxSjANE3xDaASpndWj38vbura55uWb6zZoJz7R7pWgcxiCLgQ136FbR76RyB2",
  "key1": "4ugPRkDdPgc19tzuiEq8twsLp6sX69ydEeBAcy1RCQ92eKbMX9HV6BWhrUk6QN7Rmg4ARynJMya5ZA7moYgWn5nk",
  "key2": "5WxiHFHWDBqHNoQfomLVMQtgMYxeesXWk2MhcVuSrsK1maGyV65cHKpXDChtCW24EkT4SkwE7vw7SXUoPtkvAQxw",
  "key3": "4ETV58oFbgXbgTG2VhaUgzeoFTmo5t8cq2GBnnh4vuE4xTQj6YkWK1d5CdRRdveFWZQYQHrzKhYay2RXwqQuesMP",
  "key4": "fi5mFXMppRmCisUenRzbwkydZ33dDEZSMPFFFsxDVKoytqnM8M3gpLTMsa4ei2uuKNAnjMjfVGpJwZvryLtFCP4",
  "key5": "5RGbJKVPVJ28dpDX2ZeZNGS6Q2ba9p1SbAamyBUhwzCXg3jEjps593jAuvph7qscWctrWPaHW34J1cA1rUCHpPEf",
  "key6": "5twW3GXJ2cZXhZVvhVSAkajkuzxhm8PbwPQMBb7GBHEFdNYMGHUGAhVEjVXVQmuQwPtLLYYD3Y63VqBVkwjfXL54",
  "key7": "2PAJDYHsBjBQWGTwn2eVztsuowWsMr1M7owaACBkKQeUHtUWE96hSuFB75yE9LjJfZBiisDJPN6gw6Gf44v8raMG",
  "key8": "4z7JNgGsQL98cNfjVfdUyKoxWikhxwEAk9qzw6QQLNva3umZDeuRUWGh7iZPCa3iGTspHQL4ARWemXAoMxTAZvnt",
  "key9": "3goEUf9TmcjkVio7Lqnrpb9ABKw7BNPuPRuYYX65bB6bbQmBnPuHNAp1PBh9UqByJMd1pVyH4Zt2MPAarqDBMbds",
  "key10": "R1Kh6BkpNAmUypKj1Q8ASnAMuJ7x7eUzQr3KM4NLbkfN5uPT7jEQDnCSNPzjKfNoJ5jypTtPMybKi7PWzaWS4Z7",
  "key11": "2ak5UutiVAX8XtXEn9yshv43NyHi4d3coK1Crom6zGkC8Cmbe6w8LHrhPDWxEmCUM1rwZSnxUFfE4Zc4JC3DSoKC",
  "key12": "28fFoVeNAM6owDsafDr2ZiJ3JuHUc3thJFEbEhHoNmTESFZynhSykSGbfCetnDMPw6JZrNLRB83b3vLaJKH1YJo6",
  "key13": "56UHKv1oazTai9sSwjCGTz4PoMRZk4iBpittwDkMafSkWdCgRCMxj7oXCKnAP82FPExJ2iUvTWuPxscYd7WCYf3Z",
  "key14": "2VCGpK7q8bNFRwDvMm6c4ktTAR2uqqRVmAtBaYBcvmqRnWEsn1h7AhN3GvDeAqAHRj34ePMMcmCnerzmtfUBWPTD",
  "key15": "22FUrs8ijaBt2ifTKGsBHzTYystaxD5SKAmUUqy9PmBWRditpxyBGxQ5ajAPFWbzAbdavyeRC4Rt43q6sHe8fV4b",
  "key16": "5aaQc6dP8npvKuvhAB8gpchSxfdAWi2uwY2QU85CxhpejN7k5VENwhjWt2a19SzfHagdzUNKcieobk8LX6BaMKzE",
  "key17": "31punt5mrsAJWgnfkSkoYxF8JBGSNmYjjGsoNztmzBp1kacqYrWwt2nbBwkYEiBgcq7UfbajP6D3bSSW1Vubjfsk",
  "key18": "2nznuW53Up36ahtWXU5KzGn43n29QCLYVsReisCuWszY8HRRiyivb1Dnn69sd7p3kZJhdJuHYcVWEXdSrormdb6y",
  "key19": "3GXyAjURRtmmeuqzqWuWkujhPTPKmyhQvGW61mHkrSS9yHzUxUCEFs8HtKtQxhuRwGSrp5dtZsN8ZRCKMqYNmwbi",
  "key20": "3qmSuy1xanN2VxcUAzovZrieoDvVjCjoKrS1xtMBtLXduY1bk7reYLk3H98iHLNj8rjcBtZYmbcr1GG4WEFGVnRJ",
  "key21": "4enbqXPoGBCeCHAKkupk3CdoHtN5ESnUNgcigX53jTKwAE5mpdWwfXJyy5BEkazajpn6EoFeAH8ozTguvScAeq2h",
  "key22": "2DcCVcDfvzMXhR6FVBRud6PiBWZMbwYPcfePH3RKJeVcXCYSUbYLnMPc8rMiYmQHUMec8ze76pBALZbfoUA7Zuyf",
  "key23": "2x3KH2yXadDV8CVdWwwKEybK1WGkLhERVpqLqRJZKjxfCqvKi823569vU9g314EYG1FZWSbm37gppNkk6wuK8Hai",
  "key24": "4DKVkQGyskJwFTzzCp8UHCpuE5CgEDitK6QtgvhAvooMoFFZJUBG8E1MCEH12iN7kMq2BEzcXxEEqQFhCuwCDJMB",
  "key25": "4CDpMkJbXumJhReiqAMdKZdX4MQsbyzxBDZFF6ZHTXsp3EbLpSuWPZcTmzUyaZeikq5VHdXiFQEv5n3SYmwPkdn4",
  "key26": "3y1obEykRDyEhu67y19ajJFB6uq1awMfgVQxfvVwgT6T7ch24T1Lhtg7uS3LkTgQySTjJXgPa25rafHuskXcnqP2",
  "key27": "krKMQTfwLSgRB6ijhdQoXXHLo69TSE2cj5XWFScHLYqkhJTgw6ewvb5fXcwkGaCG6Jdp6U5c68BpNCV8vtAjjeh",
  "key28": "2DhvNWfoTdVQWL6kkhw1P9ZReXu4BkZMUx5nvZrxLh2Q1opmphxY5terpejGFaoZgoNURBFjTpGZJh4Tn8dHi8yM",
  "key29": "gz7fNfKRi31oyqumLv7ubUAAWeSV9ayWMAziycrEmWRShxkJCyG6CTPFQP2LTPmcFghJZ2eRPyVcDheRcf7CQXJ",
  "key30": "2GLz3h6KKvmNoiPt1dAFudsR83Mfr8dKExCE6tmMPzmX2Rwqm3MhbpqSpE3rXfK8vW71h143WCJRZKM9mofsN6Cg",
  "key31": "ESxyKokhTDibeMvpV4jrnV1VryZKNHQCvvFXEcFMuqcHDw1P6USKjLtaaUQDkwufzD6SXofZJqr6WEeeU27KJmr",
  "key32": "5M8ELQ5tpXY6qRAcFTzSLkmuoLFXsdMziYoRJpLZXz8FDVf44N2ppwyzk6VDhhkeFfg7dpZirRbgoEy9ikFnjokC",
  "key33": "4Z713sMXEU9xKy8Yv8m4rYhj6NBkMCqBmy8rphjmjhmQJMNzhibSKd5iNh4bsFPcKGRYLLhvfsLsZsCEnAF7X7ZC",
  "key34": "2b6Pb4v8s8EjWwTuxVtMxC7d7ENPCNuZMWLwuxjeZZuh7P9YkQof2vEogk4ksKB9FdmXrBNPJF9T75eC7dNxWjLB"
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
