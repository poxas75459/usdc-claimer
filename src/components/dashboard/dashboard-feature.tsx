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
    "4KK7gtX27vAJMh89fxmPNR7fFsWWpAojRf2yEqcQZPoUWvddRbbFTQjM4STiXuiLhyY8ggLzApNyJMsAcKdmr82A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPgK9xeuknroqGhJ3MunRACuHMkVGF5hbZcpwa5oksap66v63Lj1yBTEpDCs7UMb5d5FnXF2kAWXtTBRcJ3uykv",
  "key1": "5bdrucZoddQnatgrBMX3sNbukU7ohCoTvBTS1dZGbswMaDgmPCX44w496XuzCGujpH3gVTtX3JNrgHVj27jyQ6Yv",
  "key2": "2rDRB2Vr2y8jksvPjvAApUrYBGY124gUtufSFE9pEUAseKe6Y8VHqPzq3eCj6DVEsRpM9pqEHd6hXCbiammy2ZfU",
  "key3": "3cG8PQpn52xQXGQStT72CnouufvWP8jDWyeZukB76SnKEBpVgRNPZQvD5KNwxbfW8E7LNZh6z5t7uxW5vc9pbiRV",
  "key4": "3Rkoy6QSmrFDyatZPLdyqCQw4PowcVdE8GDJzxRqBNQt9fzGnRcFajZxJggEm6ULYhGDez8rVEmBDc7fnysfWWJa",
  "key5": "74WitsMrLmfMjikcwHxuYoaDqsCJuDtGbTHgYbhZwx7ruWpeUFRMPrNWbNCaLAXjHegdRgLA8qY5t5eYnX8KuM7",
  "key6": "y612efBsoexuBfoUiGnV7Zx6yn6wW4QhZY3gaFg87jT2yfzouJpwp6UYWkQGPtqVWqs3DQQKRBdY8RdQs26C6pK",
  "key7": "5FPQqkzYevw8kBZvZf7ZzRB7FwhWqP3WTfozb1LVNieQ5Mcw9vstHZxnjUKuhgvQ2Bn9oNbFruDHncp68biRCRuJ",
  "key8": "2wE2ApNz23V1L5uWCyfm3fYXzNsTDdUrLzTZcuSFRaVa1x9KsfxUPqk48M5f9xQqhgWaEfJ9u2EZmYE4i5TZcjxc",
  "key9": "54PCCkiiaqkRKyMNpBWW98vDkEyrNA4yrBoQZV8LumQbCK8mGaMj1D2CnpmH9k9BuYNiTLeYV4ww9cXp4LzpV6fw",
  "key10": "gMq7j8at8LCx8Q2fuZdwy6oCoT9ce4Dig61i3fADfU8gCVEfTdg4AKbu6Rx959pJBEHTAfHWAhfibKiw3mw8Gr6",
  "key11": "CaKJxFhFJt6yo3u7w7RDUxDmDQMbPz1wEVEvuBZxKjuA76UhowPE2LEyBdWBGX67V9bisCrexDNjRXprb9R4nBA",
  "key12": "3rYzWxMWdM4eiovu9h36qYQh9kt17mENhbSoiM8iwsFbxtJjHAL6FwCUTUCeQkM2yTL3Da2EtH7CVn24H1wdHeQh",
  "key13": "S8FuZs86q3fKrAK1wUWPH9v9ELskf1ekwKfL7Z6Bq8cZK9jjhWPKPgMGfcepJmZkQMw1sucGiLH9eiTomVm82Zk",
  "key14": "66GX37iZxYUBprx5w5MXPyLkQuhSmwF9eJpo5CHkTJPsjBZosgpg2hMxRxbTTCRfRJ4YwAVpAMz5ktB1Fmpk2Zhw",
  "key15": "263fmhwskFDUPiV9bPTEcvSFtpDUKebRiwotE9dfGCRFUvjgkusfpPaqz7wcCpmcsccMfUug9pSYDodgveHXk1e1",
  "key16": "4zUtfzZrsof33y61qh1KMvGwvK1sNuNZ7qP5P1qVfEodq927JqYwKJV55g3rbHshHa8ysd7uNe8nZqRQb9FvyxCA",
  "key17": "3V33T28AoNgsbAR3yYuqX3x6qViYUdNJVkkJbDPyJ3cXbsVxbVHYs9pguJj5mzVFYMdZT8Td2zx3Q6nYT6KiUxbn",
  "key18": "5th8VmicryNT96Bwshw6QtMjcF986b6zgNFGnqb91qS4FjeEpCgLaXRW6F9Ev8Y5k12qoG2WusQ1RKQAwXPsNgTu",
  "key19": "qLqptgLJsqZciXpQkXMTEwZkLgACm8zMZdH7p4HBdnn3rCagNj3rGxas3CAPwSr7mLwwjGviGDykfEmtPYKihSJ",
  "key20": "2ajSjDv5gauvfq7cZM58wr1EN8rvRPQWxvC4MrbmKfKK56DCYHGujQTvZZJyHVnN5YGLZbesnTk3xeGAyihBE8Tu",
  "key21": "4E1qDcjyRwZzfJBRyyTuHowkQ7yzrcYv4wNuaKBhAyvhsRFMBW8J2x1HKwAktZWWNUvJsDTDjF9dvw6rwZjvyNud",
  "key22": "2ZVeNb7tuQqDqZXsjSZTLwy6mXyvv4wJrjk7SadFLe9a93ij47TiuUfjgTTy5Agd4H9kfw22i7X1uvgWdhybxEwh",
  "key23": "UavZMZoxNtgqGafnjc6easXyRAzyB4a5WHMeNF7Raxp6BVPwdyXHFr4bACzdeaXg4tL9jDA6VGsFYHs9UeByAvw",
  "key24": "5WZcuekvRZ5VafwpShu6CqpEV9iy1wyrepM5nJ7yEMPNkmUhDsN49jvnwYky4o1ZuRJ1QuyvmQHWJRXN6Mz6Smsp",
  "key25": "5SY9jEsDw8EpPj31rVSgj8Pn8ptNY4aXuSQss7rm5F9dVY5KansWMqvMCPGYr268V4bt4wKYS8Gw2sK48Gen2Hqi",
  "key26": "PHGijJuSy8sbBXQhM9iigRKDPV2jUhnNqTHt9bFwe9ZwaRJMxfGfWR3hFp7zgiKtnr1yvhR92TUjqFojyyLoES5",
  "key27": "4TKoRaMeN9yJWmsfTxYKBfJKWW4r2cRHGbi1HPNJ9oZBnsSjLpUorCEaqQSBScKBoW9YFw2qDibvonDoxo1ivv27",
  "key28": "dcZvsri67kDrgcXKS2Gr1od8zYHuwQrKzv41RLjqsUAsqDABqpAQb1r5KAqncvyioSYok2wKs1mEJe27Taj58B7",
  "key29": "4Q3kMoWhPXXy4xAxNo73oyBaHwFyNVGhzCABExhSw5dntJdJEryea1XPrx9S8MdHgH7wH8x437u56gY43eLrA4dZ",
  "key30": "5sNWbtY6uQPgjEK3mEnmHvHvi2CzpivBYEVQyZ1fvTYxw7kRm9ht6UCRyu2ZD3XMR7WMrfDJEhdFUWaPCNAyXGKw",
  "key31": "4oDi3KYfyyMS9eSmZATsCfSKumdkuJahfFeYiR3xsc6sxMGYEPVsmRNY5UXS6YoaTQpGAEkKtznXgjQ14baxgzPt",
  "key32": "32HbiJrizEsghHsWmhaeCdW9C87MRSFHqMkPDGc7wdB71fxFQQJNfCh7KwDWFEBu3osyhx8advNF7y5zGab8kEc7",
  "key33": "2m6iLMDDi4NEG1sn5c1uysMN1ikpm8soFw3oPDecJweZAdLAQvbP4TtB4KFspz6mxUcCx4TW1hJrFHyq7ABAAXhJ",
  "key34": "3buEDLed6N6K25VwSjGNMfvVoiA5ySP49UKSKNUmAhs14LFb2cCit5uQWL5KDL6aRFgnMzaDnhzVFixzn5aEZArJ",
  "key35": "otSgNtBozhaWnFYU9UwHoqRdMoFMdyjm8bnvyPoh4Eq62aHspRgTxm1FFW9BwxqVP1pTx7pzGMzvUKRb8oYh7jQ",
  "key36": "2zjHCnfzCgdw5pZ4uoRVUZi1KW7ew7yQZDhDRFtgnJpsdSVy2TknS2MF1hmobWVjmNc1qENo2h4Whmt3G8CxJjqY",
  "key37": "5XT3cogABzVfUxXcAFy6FbT9UoF78N7iPDngoYbt14X4xiZRLJuhyeTxnQHiFjDYt7FjThfZ8mkNyXcDxFdTCLvQ",
  "key38": "56NxKb8yyPpxJ8eiTgXrBbLRgfp8xNPqCGPDRgcZ9iGR8BcsB158UeeVzWqm8VLq2Dpms9357pkv2DnNwQLkyZ5R"
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
