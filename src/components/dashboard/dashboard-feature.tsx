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
    "46mVehZiSxWGxZSNmS4ZdzqkGCa12w5XhMYcXSEXMVsEK37dThd8tjQCK4pZn4hjcGvaUQB4keg63TPb6AcsxbRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uN79nsLsDKAB2wnknhJ7XGQkBCKHq4i7rgy9qf8uwcMjNq5GuNJd7rAssZA9szu9t6EeYLLzn4vjS5qyGFAwf3M",
  "key1": "3s8gLiX8L8FJqYKcSRB46uYG4ihnU3gor2bDKG3SERNaxyoHc9Q1YUbcY8fWCErfFemz5E5obQt9qWrTJJJc98gX",
  "key2": "3wJddceFPC2C6y4WiCSqLLbAxeTgiHWNmDj7PceoPjsmPzDAnWi7Pw3Bcd1mU43KPSTNpvKdVtY1WPN3SMTxLZL7",
  "key3": "5RwETZYzNQ1qUQTAvxodxCxVPtyRsqJgtjE5EaMrPmsWTXi3mPbcff2Lijjh6vBk2izeijHJsfPAKTK35BW5Ba8E",
  "key4": "3HtCarRdMn4Zg4ZjVBa9A3atSafyTzNPdKb2kEjwNn7XYcHSCwwe25vK1NaC5Jrb1F2AUBJPjyAGTXQTtr3N8Adm",
  "key5": "2JjpGBQMyAhemKuxqZdMhCmbVs8vwgFVU3CmvDba2xLMbCuynQ1x37EExTMpddBHw4jFxZs8rKFsDEGdhtNWgcqA",
  "key6": "5ZihbzXZ7ApDKK8Q6JHgFuqCNSRY1Fi1Nj2MZJupGKnRGKDsEZbrkYGLJH2rsZ8aNqJgdPQi3h6X9khXjnFuw8jX",
  "key7": "3CBiRmhZ8FxfsWULdJzNViKpFxrwsN7sRhmfuQXFCVtXsu6cdaKsQiGWDNg1GgFhXfu7uAmuzrmrBELgY9EPuHFY",
  "key8": "4Mdcn5KMgDiSs6Zuz8G5fEQwnGQhNYaMivk43phMpchAHA548waaGSXwMYVDC6bynNXMj54JUVhbxGbowjD5gFra",
  "key9": "YNSpgMWpreVivMCGaRMrPwdfAi9ETJJMwKb5GAGkA9kNs8wJ1DVHiH2vEnM2YZrRYanPfZwYeBmH3xiBbcKNPXb",
  "key10": "3vtyd5KJ83fRh5LzKBT2aQHkdPWr9gVnkre3QN4HPkfQapsABUSteMKTctTGmpnbjdnwVAcMApwBHsc2q3uTyhW8",
  "key11": "4xGmRWbAD8EWx5hwbLdW26bxqPSP6No7crocgstXec8o8DW7jVpX7w2T6hTMxsSFddYELufF91vXYjzjsfvR8BhC",
  "key12": "4yVhz1viezePZGgqEjGAcmEYL9uvE99RuYfTSX1mUzmr4HPb8BEkgz2pzn8U7Lhu9Gyx8utTpeM67PmDEDYoj555",
  "key13": "5bHmu5kryiBzmY5JBjZe5nuCGZwhbRmpbGiKqZSdUR2gwcEL9ZxWhprvbheqUEnKTJBGna6aADbyL3uzzSWKWPYg",
  "key14": "2pgt8H9Va4BmcxdRyKejViDLpk1tPxXEbghMKpGckcT7ppsK8ybCuuYTEvA8Deap1Kt7GGeW5ekPqknEqQNx6wn3",
  "key15": "49F4PnzuxWJdpuCXXwzkpEJ9qWhdneqUg56uNixdMfZMUMuQTqFTFxh6H8AgAkRYWYqDPjDdw6KvEVan61TLCSHB",
  "key16": "UUn4r3scUYeTK53nZz2z6QR6S5Azehm8oNVe6cAStn6u2KBdWjdf4ULSuKW1uDWPcjAzqJQuGQFJ2RssKBhMdGu",
  "key17": "2FejfsnaZuTor4upWKXg5fC3kG91G5rqGgBEsqySyFitB3dzQUvET78N1CDMvRcudbCukLvKFHjjQ7wpmZhXzbkQ",
  "key18": "464eATqZNGbVQnEbbRtbMExFBzMLCvDgbU5j9whPt7vvDcJgkaav4yrz5gb7oAqs3SDvCeTavc8seJQa8qw6bfmt",
  "key19": "ago2NLvP9Ht9aUaxBZM5hLCk9Ms2nGBY1m483uGGcw7ewQH8tW2Sxwq647pPk2M8BC8mkRS7n8vSw8mzHWk8jff",
  "key20": "5yY2ncyBvkwRFwXsagXyfXyuwwk8DsXXASqvpTspT1qLqMrcgmH5j7ehkxGA5b2WGPLEPRny54WNDNkrCWYDDM1q",
  "key21": "5KrqVuHpA65M1Lrk3Z2mSP65shir6F1hfSDmAQ9Fk6PSRAuWWaXSjirbV2khqbuG2Vbd9WwVC2HcTjwZZThXk5QH",
  "key22": "3fvUeV8rPBBeNtmEeqwyc1Dwy1DcArsstCNrNny7MrLjjouKEjM3qgGMPB1iXGuRXNiGXRKF6qX4otEFFv8cbdTV",
  "key23": "5EzNnebgzSa5Yd7ofZuA6Vh5BmJf3jTah4nqozP4TPvw5RqQptMbFh51WYv23mtnvK1RERvfdenRQDQWoJ3X7uNb",
  "key24": "8eDJmDVcGR8McbpHMy8dYJ31s9n3VG2jpTNfiH81QXqcEUr5tQXiAR1N5nNkjAPjJFTXLvib1wgtNWrPQwK4Cm1",
  "key25": "zoTvZsv8HBmz1sVqDGRi2RQLqt2YpQCEz5U7CEY2pmBakGwPSPFvZ8vnQzdpyZC5NrFuRyYMxZDr5vh2jpUEme5",
  "key26": "3BfmHFyc5Jev6RTcfAosWvbetogbWqqX2qLcQVXPWbQqsnyfQLde9QB5xb7rGbMWACPhe26mDkE7ngvBXGWPMzpS",
  "key27": "5GG1PjL2f3XpmaR94VoGBwVqTSJtZL1y6jVVs6FV6QNajtXgAYGLRm6bgPpqK7UcT7Tvyb3KachHs34pboHTDKnU",
  "key28": "3NExowvZ6AguerH5YHxYCvfFAPskbyfw4eGJJ11E1phwV5MrKu4rcua2UnkNAeSJvGquq1yqpnY49BwQvb2kRYcS",
  "key29": "5QEKJGa1yeQYdZ4YoVBVTKD2neJz1UwMMLU5VVxBbWV3ZWffkaodKNJe43emSC7y2kxD2YEQj68QSBCSJYXdh2yQ",
  "key30": "YX67BYeE1j2Qu53euzG6P14izb9LD21C4NaJvQ3ft2ikXtxHoCgpTGydN3rkqQKWot7ytEHZyTXwF5FCLg2Y5f5",
  "key31": "2AHD9HMFbBmfrYfpbv1atMbeSvCHzsKg5NwerYzQ7XuHvibewoJN6jjS1xexYS55XyNCc349VJdik3btnT31KRvB",
  "key32": "2KB1T1hQXQi6pUCAecdeH6YTzJJVvjhTE3FEh46XfD9MAhDarJtwd59A1AV5y31fBN3Ep5hvPwoBN2p3ekgAbY37",
  "key33": "4sV33X73CFBZWibz4GuRWnLYfcVzSwk89pmfQ8JDTLFdD71Kx5YTHvt2JXPYw6WQXAQp3zPjrZreoM3vcgJtTDN1",
  "key34": "2GPek2zibtAPgQFn3WUmcLZZmvti82n8gvmpZKDm3ykaSRA6VxeBKxHbJGoGAVJwKNc1XGahAEx969gVmPNYRdve",
  "key35": "3r76hSkJ7daU8b49Xwm8b2pmiUn9GatCkgJbrgqJcS7jRcdoVtXFG1SePjKCn12CJtAPcVnKbYxenu91gYNq1J4G",
  "key36": "5DPMRP9VsiKwVsjLNZZBYwQ84M4tiNFhHyRrAzz5KPtJjhXUmRuBYdHnPmcDxXeixq7BTtitHLG4Wu1WTxCfGXnA",
  "key37": "4QevSNAE8D5FoDcm47bqBvTEVkGQcY4PS6Y61AiijDaHNLKrvYYuxc5d3T4b9L7dCwZZMs7VorSiQ1etfY9w5NFe",
  "key38": "2EwZr2eKbVCPxrjVZXbmvU7htYtS7z1p5SYTzw2vgstS6JpK8oENF68UyRJRoShdyokznotWzjj73Ruwn8TTMrq",
  "key39": "41vW1UpUqrt2stFsPXaqZW4Zzryf8xWuwTLNmVNbMDLPUpCToXDXQj1WQqKXTGE2CiKCzQQQjWYFhnf834Nzi1Za",
  "key40": "Uf8QzdNty9dzT7fYaEhfJaQS4CGjZpxMzEFnoAMNorcMQ78jfR9unaRQg5vbc8b6HDDWvztcJJ2uft81zvyZmRc",
  "key41": "5nryFF8pATrmjovDpvBQyrLrX1LnUjRNiTwxwpRo3w81ZxYGVUNa69FJis5gWguQxQVvJSsTV1z8eT1PQugae6Me",
  "key42": "BHRyboZ4evDFgTLsQusuRjmkxzqVyKfWUFKx7axofPpQALhcgRmnz8qa8VDDe1nbkG54U6eHzBsyzfY37EbkHtS",
  "key43": "4BYMtcz7bVTa29CuW54MW8suRqEgANEzeAudfLwB1TqGvLTC3Duwx9qfpjcyooPyVNQ2QR51cmLdKVAuPv6yrqhW"
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
