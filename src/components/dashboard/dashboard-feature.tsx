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
    "4DYnN1jtiqLqveEmhoFWNd1jPrLNqdDRGMMdDJTSRdmApTdFQ5dSLPTgevDdVqSpkSvrHomRXfpQcXxdqZ6RE5ZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udsDoGVUxWYR2UEG5EiBZTpGmcUYaKZc6iURKsQQAJZTyJZbj2Xkcq56UYMjXdwBM2U8iU6SBY5YDyzJHXQw9sq",
  "key1": "5gSyHvWrBw5LczQmNvbC9dHkPKJMExckB7s4rBoqJmjPnGp28siSKGAuaC4795FC7b33P1TYkjL2SkgjfoBSPDvn",
  "key2": "3bESS8EkbhdFoJ7bXG6edTxKaLFLDxbBvNeAGmwnmnaHjFS13ZZgiuuoPLXutXJURaMFbExWMzpmK36kdG77GemS",
  "key3": "4zzweQeMYErtV32qFrX98uPeDB1KGwQQiAjsBoo7rW7bmyGSgooakMuupq4sJQ7U1brpsKf4vaxTmZq9TfjiHyzj",
  "key4": "2WTmjnBthdeigthQkJt55Auk4jAX2qDNBS5FV6qERg5QkFo3A9VJ7GqvnJNpudVqUt8pwJqJ7YrTPAyPHwzwdr8u",
  "key5": "2YohA9rqcGSubbpFZykt3aRoFR1RXxaZeugbtiyV9iaUdCnT7JN1HGT6VA3MioVMMm7KE7z9m9zwd5EfisooD3YD",
  "key6": "HMoZZ91gjdwpLRHpLCbSsg2LNzDvoaBYxuNoMc94pj11rsBGxAv1noUKHNaNb5j7L1geebMx6LF6qj3eBaZ44cz",
  "key7": "rTqVV6W96beYXu9cUVoRnGHmaAYYJxak28ZF76guEHbYxq6GAaS2hnzWrv3B8Ejqcc9HCxgPQJ5mzFaK1RvHqea",
  "key8": "4aoDPvHjcCggWbosViKRrUvjhYcHd5wzsFu3P6BNFePVtHL5uQN717WQStLUgj8Ug45oNL3pUnbGFqYEFzXCuHWe",
  "key9": "uDJpkdFnhYtCNYoywdZp8rSbVCdP3SCpoyDrXAex2tc1BMiwSXu8XXtUkjziP7FqSyqv1RNCCip7Gm8YQdpiVvh",
  "key10": "4mQN46XWDXm9C8ZTxqE2oMBTqga814f97zgQAMUU1p2RNNH8UBBJ4TsqzyB2u7ePHTfnc6xzJVTRaHqP52PmVFLH",
  "key11": "2LDCbTEizf2zNMucg4RiCzobXPrjFoqrtPzjhaiiQoTKiN8kwfvJNjD8uAX9Cxgmr17j6xN5hw4wPyhyHveaqVnT",
  "key12": "5QF5UnBwfoDMr6kJbvSUQhzjjBtUbNH3R7F8cHeLYuhiQ6Em7PmEBCfFACGaLjftcVMciSWHYufXEYYPmyrU2jc6",
  "key13": "2jbPCdv8TDZvYHREpytF6eiDPcXZkkjxRN6Suv89Zu2rDXAP3JBaq1wSZf3jyHjgNXHkEB17mvCJi7nPamd769o1",
  "key14": "8r2mm68CzuyKNyVYRTw8WMiYXmf6GsefMeLP9in8Fb9PXHZmrfu9eTyV8yWrApubQwdrsUgR7NmvCXbLvTDnx4P",
  "key15": "5PeMfMot7cpZ2VjzzuJZSbQFcrV6axBojinwNQFSUg7m5qW8yGW9uhzekmUfJ2ZtER6E9mZPfyJ2NmY32SpvMPmw",
  "key16": "5u527t7imRS6MNtH6jRP9teVqmod3M1AqGqaLbEGdbVnu5n9YweuAg2NMWVpZpY1qYBNT9Yp7Ra5VSZozj4DEZfN",
  "key17": "pJ2sK82wowzx32jVuzkMPq1FryeWZS6nQgYNEa9Dp4B28oPvD79MQC3eX3owbkBhRWgvsApBD93f1bkwo7fZPbK",
  "key18": "8Yp2vX3AMPLeJm7kaY2ZWMhJfDKXBp6bTE4tJDD5iBLN8tt9WmhFHZwLLKGbLZpCB2Fdj5m3RjHrzqrexyRHCbx",
  "key19": "2kBSAEhvzq4hTVVX9AEN8CKmcF9V84B5mDkaF44dVo5tHksEiBusQaixvbYAXXwYhhqWUzgx9orqb6uqz5X54jyv",
  "key20": "5b1XnehW5uXsv3A4wstMDGFrWNFw8Yg3XKH4u4Txd2KQQpjqKiGzqAGGCTFcjJsm7rvu4EorensUXRgiBqkx5W7H",
  "key21": "33CkYFSSKQm4kKSGR1vEs9NmzBbgVrKmz17P8dJBxuQhmoVRKwY9xifybFnMRPGZqZM7S9hSheG1UXtcTb4LFTjr",
  "key22": "2GhCwPs6Wk417HfjjHf31DD2vVjQS2VdhgSMNqa1Efm1kjrVXaqh7dq6JUcso4zqk54m43TXNJdUzMtkiQKtohCJ",
  "key23": "f7PgaQr4G2gJgtX5KfA8KVq6V56oMKNMdvQ43rVtBM1N5Rp3QhzqgeHDz9TfNE4fxoXZEYmQf7wkYAaNDgZQzSw",
  "key24": "5aBmXyrM1xvdJJt4eRjuvLHxZF69nVfJFsDHpx83vuWmeNhKt85ip6rDhMGkCD6PCm94Dpw3Xx45h2SFfrBMPury",
  "key25": "3KLyF9UoPDBpsLp3g4ssnXy35YKGFWsdp3MsKuYDHnJSSMCzdFS3LKJHv2RkBJiyDaQUCHvCaCkJAQnpTAWhR9Ey",
  "key26": "5qZvbqPHZpJuTp6U5LKyDBu5n82F5paX41rwRxaTf2p4Lhs7eTQzKezTzv3iKHzMnnNTCbqetKCWJpEzGGYW7HhA",
  "key27": "3NqDWh9zHQaLHMxrKtYp3tuS2LnU3dVADFZN5Nn4vVpsdzRB7xxB6PdqYT4PbEwpjLceXUh2RcLiGjpUApF6vn3x",
  "key28": "4xYoHzRk9tjJfc4bcEe5fqriYLFjd8vNpuFwyHQ2aX6B3QyXdpVw33y4Dw9WZjMMXJPtgpjyQqDkmGGtg5amtftB",
  "key29": "5FPuRgamZ1awZFMBCggfpCAEatb9HSX6HEkixhTgR71sdQMpeA9T1QFDsCMf1Mu7Xt6THm6ESfhcMv6uSdGmShmA",
  "key30": "4Asd5xCm1GUs2C3TwYumtfFU1pGSg4o74nnRbZiTSdyj7vw1D8yVUQTbBSHa3U7XUtumvo7XWy2wdGN5kHZXU9dW",
  "key31": "4p1tDCGRZXmgVJpt7K5oj67yn76jPKTEkPJYKEikq6Vk6gLxxphh6Uv8CEKvZi2otQnwHQ6RgZEfNwYthSNt8Up4",
  "key32": "62SKJUpr5gG2LcinHqKVDxWVoho7Scy5TeBFxDx97uwansdjm6R9w86NiuAXyus77xEU3bVnqWGsY8imvxQetc7B",
  "key33": "n5JmbjEua5Aqamwh4XNWGdNboKjP2QNmt6Ssz9ygnnyY4Rq1ynEFBidoDe1mwwfe97WUeHh6592tv79dm6Hy9vX",
  "key34": "2RdRe6BnuXGmorq9jN799npaUCP4ugpMmoKWkp8PjEM4imxFAREB8CetWqQGwnDZLPekk9Lehc3kSNaU8r5wuhoS",
  "key35": "28bnvEA5yd8T9yeA3u8gzQHHBKoeoBE3t8duPyRxcMsn3U3SRGGuvDUY2p63BZdnQtnik784hrZBd3yd6njJGpSz",
  "key36": "3gME9WrzcFbUSNmfmRqRt7sJA6EpAZzTY1bq6Xxr4C2vszip2PCX1qWggDptgF2xwFzwD36cpE9cgwCYGzzFRKmK",
  "key37": "35Th7qjVELEbcVvyw8xC395BCz1EnMmqiXEtT3JnXTc7HB3zhPqCkjtHYvRoyZEqkNfrq6ntTyTGAKgA24TziKei",
  "key38": "SkeJoxJqrNGCYoaaKb9WnnXhj5Zg2RC7TucHdgDkBmkXJa9Xi8bQ6T7YgqsK5qSeaMWskop33YZ6v9XqfZK986U",
  "key39": "5z2n99r2qma6AP2XCVaXdoXmyYC4NqK29bvXrAb8o1vC7KEkZ41wVc5SX1tJCtKh5mKLqEDF7zpneULfBWtWdH3S",
  "key40": "3NAoy5xUh6RwA8LiAA1MejHA6T7SWKyaSexuYtYbetQnug7DkJRtqGchxrFhnqzs3UieK2ZZkE5SYYSgK5Je1w93"
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
