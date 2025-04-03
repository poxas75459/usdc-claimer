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
    "2gRVsme3nxNomcb5aLPJLuH3hzutXpX3EqvGaJungCnyyjB2aoQ4CmzhBCkXcdgaArBGk2BC1juWdFwMFxeGX8pP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKpu4fatJ1h4S56FRPZoyMNNpyyP2wFmhYmo1MZxmsCex7bXcnJPAZZEVND3hStgph5joH6Z2AxEYBh39kvDbe6",
  "key1": "7cHAsoUjXfUkQyGCiy6tzXayhpam94hNZaFAxxULYzhnFLzHDYktMvExTCXoq8of4vicaSVbK9ydrmutShJNppR",
  "key2": "8oFKwpsJHdrK4N7ikuj8kf3kfGpZ5yewrdg3DhDWtVgK7uQ72NmXvqHdsgbWSd1AMFm2ggfFKMKkjh698Cvz4Fi",
  "key3": "4aSrBpeRsVyjBXYfF2ym7NtT63pHCZLte4A1Be2ahU3F9YUAUQC4qXmF9uHmtA9ERA9RTWeErS4Zw3CZnyquWMDZ",
  "key4": "9wLavgaMHspP5MxQnGgbKuZandsKuVwZoA7i1Jp4uc293rkzptnsmSVYoggVoo8K3FU8hpPS2GwG6zxB89pPJtU",
  "key5": "34Ut6NsWeyiiTF1ceH4fsYm8kydAhAg9aWGQLterEL13GikWc1yRoTyCGVX2Goo1HVf3wKe816ST4VkwBCZJogcJ",
  "key6": "4m3kKsCJ9eBDoC1DBxBC4bkQog2RQeK5STJFr9GrRgCh6Cc9sZjFdpkUk3GJadco29uCcagtCXEfnHKKzhwzE54u",
  "key7": "4CWuAyXC9kiGJrVHFRSvBpuVC4RzV5Zbuzg5vTnbbzGf9gBBKkKz3eqsY7zMpNzGBcUpSEYzt4Ye51okuiCQ8r1p",
  "key8": "3pZCcjTPC99j2vwRfKCqMejCHw7taC2jaDBQYRRVeC148oRdPZWtmvS11MjPHiDA9EfThdrqX9jJvbeNchorCSnH",
  "key9": "3HK68QyTt9dpbGT5Zh4hEj4u3bom58dQA1Vd8Toyo3T3d9ufMdEKBwn7AVNDAY3Qh2SiPYXscj4Nrouxj8R5r7Q8",
  "key10": "2pv9ot9MpfqPAKHpiXaCySAnHxYwDTwm2EbwLw6XBGBRWQ2TKbJetxegjS68FV6VqVL2qXh735eNiGCt5feAUM4a",
  "key11": "N2mxC4MSLJUBq6Ca24pRiSXshmtz8uyqNC5i51wN5XejMBYYtofJgpsuLKFwpZD9p7wMCWGYBCwJ2MDqagbLQ2C",
  "key12": "2ybiKHLnW1AA3ujm3n9FLtffDYGbAw2PQB6EKj1iCK2MPXZiZDcruP9TYdECWG5krVGq8JHDTeFCYuu22DL9Kps8",
  "key13": "5bRLk2mg4Veh9USTCNjQPNKpMQATVTPuhwHQiBU1JHPw15zSxDDGscyuj2V5v7MZnDtkGJuKhnJRCTBbBguZPdPk",
  "key14": "RSZCCSdyttZSU9pRbNF6jkw9UFPBjPC1xnWDViekc7ght6bchjxcvCsfttboYfd4PyZTtfTukknBpSDLjVtvnV9",
  "key15": "6AJoPDvByiTjYyfB2EoXVL4wuAQcyLX4akYwXDFrEEm4km7f971kC3fs7yFaLwHd1Y9RWMTLdCkAT1WB2ug5CkL",
  "key16": "4cSxtwR9QMBnJQaowjfuzJ65TJDsqosfQY8btnz2AhKGGsBR5MHg7UjqbKDS1z9Sr6nHuyZywaN2zbtdT8PY9PGV",
  "key17": "4eUfgPZVun43qkyGUXEeuXT1X98kE1VcDcvbrX3s4yffBRvv8aEnrWmYLSipJyTQKve7VMqgQagRoQmNUnJSJxyq",
  "key18": "NhA8dtkcocVT1D352uyYvacsRCqnf3ugog5J8jPnG91dthUPxWLcnrd2Stvzr1KfsyXgMytDr92wgjycjXLxp5X",
  "key19": "47KPkkrUeHxfLqDsXVqesDVPmfCqDX5oiWQ6xnkvZeR7yBjCwYJ8e6L7f3vc5P21Z6YktwxFHZGCG1hwHSGQpCDS",
  "key20": "4D5s3iE3oZY2jL3e1SPKv8uwaQTyN4rb17zGBTfHJFpvzXNrm2kVsPpTNVV6U3Ee6Pbeyp2HtczrPdtJ7A8ieaJQ",
  "key21": "4DgCsVC4fPmy4Eakdn7Ln3E4Sud4JFNwAX7EzHDKCGBHkb3wi5GJBJBkJ5fYKZ6zRjEw3xRUFmwuRWfRTMjnqP3F",
  "key22": "Zuyg4AT23FpqJx7XwzD3vruhUgZMTqKYgYCfozCrugjDTnjR7kuAPgupKTvsKNpe8mxVTfUyWacFSDS4ScnAQrq",
  "key23": "2hpwNoaB9TzQ3dJcBycD3F56p3rNBbVjsWYsWFusK7sqPcvQrZn2EWmLHo4LHFNe5hVQoNQDp34NdHAdttJm1htv",
  "key24": "3Ecykkrk9rX11m1GZ76tpDvt1552jiCLMu2tUZTE1VtRunNexgP3npCxL6MtQkcd3BbCnghH8bTbvy57dnAMxE41",
  "key25": "2RDBmG9Y6nVZ5PRQwNm1dacCnnM17MbLjnNBDLSjH45D1NtGJ55tfjjVkqWtcNdE4AUHiQ7hwuQX9479se4nacGK",
  "key26": "2nNUHVy1x3CwbQ5zjseGd8K5dFmpNDf9yU8ee9fj5pppYqoVeTbjnQWyjt48kL7UwVABe1tWvVwWFeP1NRk477bR",
  "key27": "Y8osQ6tNn49SRJHjQhi5L6ShgAbwLDo96cHtXRBDZzLUYe21CrHDk2uQ7ah2y8ymQkb4qBt5kkxAYarGC9XuFnR",
  "key28": "5dUUkvvMQ6G1kpWdau9xaWXTXn14XN5w4G2ydghAZJSfNCXGAATNXeRLLQBAqzCr5ceHeLjFZAXaS3gEuFCK1Nwj",
  "key29": "4kAfPkXL6AWc5vDJXNCoXbaH8SSMszUmnmEr1atbUdH3gn7yZqi2pzcuthsi9wX4dzghBcBZjC935psQomH8b8ns",
  "key30": "49tspwfRuK9KR1YdpZJqot7xYV3KHzeq4i9oSEJWtYEeLDFjfoScXyLvp4gdmkcnbcG6vUhakeRmZNcbueR81G25"
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
