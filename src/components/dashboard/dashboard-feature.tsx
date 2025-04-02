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
    "5byWxHBK9zQQoSXWNrT9WKA2hUf8Uz4pmZ1rZLe8m3yspNPsXmMS8tRa4Kjr1XeYD5auRoE8w45pyA5w1uWdT9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCd8jeD1SgLFidMW4VMmrncpvEap7Zx4ZxtykPphJbUmyFpFgQYJYkX3Gmww43fEDFzgMo1rtb8VPtvS7PShYpj",
  "key1": "5PUemR5njWjDKf7ePNgMpuoz3XVYwNDFv5Nk7U7jAh1zpndaS8qjGbWjHBifd9YmGxhVDAa5LC1K7qHn31rqQZPP",
  "key2": "t2hEBwKpcESBELcytEZxtZKN2VGEoFxS6JcZEAGBhigEVPV92xp4bmtuz9BGY9vMNn3yAxxYpx9fsXqerYjY7Zo",
  "key3": "5XyboZHtayeU6oktsZ2cWSH8iiStxw5QjqRHAzgmJL3KrBe2Zv2nNrXC6RhnKLck6fbansG9Z1KS7Bfcr3eWiZkV",
  "key4": "2HyJbFMUVPXT4Fmds2RB1HRYzHaNffYZGVo11YegUCFdLtf1NzzFi1KYPAnxfWVEUUYyPM6c7HTStW2XcRcC5zP1",
  "key5": "bM6GyvBX7X8RUGZnCCntEkncMyuQYpmKb3KdRPK8DFcuDWCD2z4xhbSU99xekGgbjkgQgc1kamSXE5MeEqaNVbS",
  "key6": "3v5Fogv9xo57yzqNEAgAR1PtiSpeaJKqPPrnHU8oQZ9Dx28XKeWY39wywU4VcXFqrmsuGbNVzKWf6swcFqAzywaA",
  "key7": "4D12b8EVDc9CNVByR4SfejDxcsB3X7FFfnQ2zFY7LvckZGRLZH5ViSgj4MqdHHw4iqGWtMHh1uMYUxCLP8EN3fnL",
  "key8": "4LKr9zUXSxRijAfMnskpLdTMxiVRoEFEKjuAePLBmctSQ1QxmPnmyBQJvS8TYczvJDSQU5TMG3NZ2jH1qFkrEFTr",
  "key9": "679hWFBScyc6ZdV39gvg1wJqN4ubZRLNv3KpHPku6ehRsMcWVJsebFY7M4c4trii4Vv2Eptdns2v3M4fDKBp7pEn",
  "key10": "3qEsfd3nsNvyfyYvZidYLrhGWkYdSWXPB2zm2rwH2znzfdXitRMNRF2nHq6TfRcMF9iVYtU2pfKbgNtzzC6Vpdqe",
  "key11": "44dM1ZeRum2e5tLGZnDamVWx99wRAMuxn7PsmnD2u28Xs2YisHxBuNhW6mdHAeRwt5wsAHbYPGpYSysNzV222h86",
  "key12": "3c672WfnEQaqQ13mjkaw3mMRQKbJUY2CkcKfg1RhdXjsR9s2ie4jMScZL4aTex6VPSAqTj8nnYADK4Jqiy1btwQu",
  "key13": "5Cm4nBdT5Byq49sLMKXT1NQs84okc5yfw8Fmqq1sQK2kAAWdZNE7JxwUQ4EJ8hRm8AhUMhV6sqNMiu3kAxe1DuHL",
  "key14": "5VnocLATzX7oEgXCuWJRHWH6GfBkeSFzeh1BZK36QrhfETw26puT8vzX578yVbn8e5drBybWSWxrscR1mDc2PQyH",
  "key15": "3FbNtRWoypTikKoV3ZvS3vfjN6ye3ntvT3fLvpQJXM61nHAkq7Cr7Trov3ZkG1HUeAHifCdvhbaz2VkmSuoWswPY",
  "key16": "5oBCwLe2gpYDh5hjGadkjNjeqkF3bSY1AnsJ4wb3mnThKaN139M5NodrmTjDZmRbzESBLoznirZsvgj6SaPeZ6mS",
  "key17": "63kYH4upJbsP6Wowtsr9nMJHJHiA6myWMCop8d6zniwXQRdhTMZmwrp88bDgqovWVytfPYVu4fEAFvk2oq3sBTHN",
  "key18": "41tXCzJ5PyhCbjuQiUp1pwPpen3JAT7LT6NCVzD2LgkCnqNUMq4Tuahy6LEycRnNXBaUEEJ2X2c3MAn6u7QRuE95",
  "key19": "46tE7mmjAZLChWcPKUp7Z41x8ybjFFoi8etcwDat2jDq9myv2jx8P45aV6LRSh7TYB5ymbjV9EeLRKdWLWuQ3Abn",
  "key20": "5wN2wxP2jAd2UosZ978DiZ4ofMedvy1kQQ26cHkgoXn9bn8HRdcSVbKh2fnGtHv7rEu9K5qySXFtXSMqKeARQi4m",
  "key21": "4mJ8FLeRW335QnvaNn6Q7BFVViSgiohLBFs2djoKZDFS6ek8fkCwVf8VXcw3ZyyLRC96ycptcMdWJ4WKQiUvqaGy",
  "key22": "59cpj5nrtfUYYTXK4DQhaGf9xNxfst4r4qxSfFedR43ScEfrLY81UAi9QREMB8WmcYQVB1QAtWu56tYHRmmg73uC",
  "key23": "39UZPxKZnDR9Ce5XTV2d6Zys9aHvZuWp6CeXYZj5iGVFYAtthvrjjpMXMnRm2Yaf5e2Zur8ScyMB9rsH7FG6VuRD",
  "key24": "3hJuGhz6ZLyFsKSg9fWeRdZhbW9vTWxKPDDQH51GSgFj1qtxQWD6oPZYeTt8bDYUCUrXcP1h7k8q3Rfi5pKMudGa",
  "key25": "28MTk9PsqLyRuQTpLLaVFB2d6RvqF5z4yeknXxryJYgDDfhimVfi1VnwzCP6BkTsDmGszELdKnPWfZ5xdDiW1g2Q",
  "key26": "rC7HaHHuvicP4QErPpy3RrYmj2s7ks6v7RQUKEKHF87kSNSRu7xPCKHcrQHSKD45jkLT8z5h4eRDkrFMLR2ZJf5",
  "key27": "4ymyhK5w4c3VXMyh6Ego4qBwvsrfHkakh8BZ2Wyz7JtkEHfKaYv9fVCFHp4MQHbhqYUcPwfW3sdLKmfdjfDd9ufM",
  "key28": "61UTnkCDA6LaEyf6ES3Mre7qNJyKcLHZna9paSofjvYDKSKcSa4fNSZPTgKS26bASYUXW42rD95MpfHXAYe3Suoj",
  "key29": "VbwfKF8W5r3CHek5mmHjJeaQuUKsxzh5PSdTLYBZuXi8NpDEnW9E2SAn6R3vKemgmqititJNfXdGoLVmyrJMQ4N",
  "key30": "3fZ6BG4KYjE312NLgZFBMC1mi3PAFseRcTWLB9iY4wjjqBWb5sRm1FFxsw6SSvbrXr2wnbGPGGnLf73pMvLkD1Hn",
  "key31": "5dmyppE9eShVpWwiSgoWSS9nAQTua6ap76LVg4VrjTdJe2GeXyc4L8jNm8AUpwe46f6hMddGJbqjusqdH4WgNNSK",
  "key32": "3igddeQsJNc4nid4Dq2DQLdaQaoH9cS9RwcnRoFqEJqHAs4HNoi9qkfPAqZ8wT4Heyvwu3p419TDHYpXqg216Mzu",
  "key33": "4v69R3mrYy299okHhQArtVY9nYsUWPs39zxaUTrbYcrfJsZQahzKgqz54ZHScknxCsnHihgsAtJMGuvg9gBZBzE6",
  "key34": "sykbqsC7fqtEbfszu5dvfsYEreP3VDXoazNsfUjKeVySFREV2wp8RGxdxq7aUxr3rbsTfNT6RTkm9ArF7icPJhJ",
  "key35": "5j8URsBqqFTXwhqkr35ovXyvUKD1gZPPaFv26eEDhzMSGTtXoPxCEQUsZqhtG1c1MubgdrbFfzEpnGsUrjeDZjGp",
  "key36": "23AQGnebVSUimMy2nurP4YLZjJknb3UGnZXDm9MZxXcZqFU1iMBe4DPqFVaPSKTVFvY48XEzgQ45FCQ6Z5gwhUVV",
  "key37": "3UDBmTi16QXSmxJAZkh5GeUBn3extFvRoLHHY2qDL1JfYZnVyACQ9bfRcfPZyx9MLCrifMMfVBA8GPvK8CVvk1U4"
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
