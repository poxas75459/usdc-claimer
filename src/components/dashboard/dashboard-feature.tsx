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
    "4dHJXHtKZ7QKwbchDjgjSK4mCc4tVLo2UsfF34aPgfQ2riSWv94dbaFyde3HvJxds6w2EStQbMnV5iU1fXiGiQXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waimdRPBmKxxY5CTBSwfzz42PTdwDEadzbZqQbeKAbg7y1WqjhUvYG7PpsVWdXvqfAZ5XP6nD4ZqoY1QmLw7uUW",
  "key1": "62qwnSTZwNqC6YPZsd1aMcGShaM6GH5Zfgx9Pq8EjboyykV1np5PT1QEGrGpGN6XE82toScAb22QJF6eKSFxntYB",
  "key2": "2Jx2cCDybg4Z2kWfyMH42B4E4hcSbDuoJJ9L4N89Ms43KJS51VyJHwkQcT83uEHizkBBPupqCpTqeiGuhAQgAyWh",
  "key3": "5LjLDC6Y7GMSBTbnyRwL3pZBondfWsD3sjgppsdQrF4EKgz8t9b5T7P8nBKj72aiJzY6j1onKQep7DVdzjoGgxjV",
  "key4": "65iWdzsW74hCev82Egto4ck5WQEKaw5KCfYufWEasbdXPuR3kzm7ex9CLkPd2awVPY1FoPh7AUmUwdPDcMYsLGeN",
  "key5": "2GnJxP6oA1rRqMNqebUXeNsoZMmZfdYzAogpj3TjzbSJM4Mh4zHbuYWjE3GzztxkCimfiqcgCPogZM58AttUgdtY",
  "key6": "3QmxgcVXEUVVcTqwQzVv9ut6RtDTMtagdTg72eukQVtFuMGWBxXWd7PeBc2WxSr5JNngwwNFzi6u5WbTDXA2gJcY",
  "key7": "4CoDiaXL32UBrFPyJNbxwDmfFC8pFfuhaYjGErCKYxohUVoNj5Mz7zX6GqJUgC8UgjzbbeJTw14vS99aRttGZJgX",
  "key8": "x8XC9ZqHrUwMvg9iNLm2c2Z77yVkcA98M4PWRx5872N79abupZo4obSuvH1HWLPByeHGD1ErihGLoZACJCXf4qh",
  "key9": "2uLKtW5aQ3D2TywuHDV42BgrSVbYMu6NPUg7tBbvhJMxWymWwWJUe1aoN1Qc4G9aGMTVs8p4YRvNMfFM9f9yaHUj",
  "key10": "46GUpDJV2TYjaUJv3cXaAgfM4vYYa34XUBXX8KSW8iBbt7SD83tzUBN4B687WARFuTRvBmRem2kT8F61KRiY9ddQ",
  "key11": "4fRzG3ZUHKSzAynjMxfmVZXXatYdACTfBrtftBu4d1iDN4BiA9MFiaywK5MCWTB6L9KvCpx7gu7afWDUy7fHQNRy",
  "key12": "fHcir8jMEEZFrNjA1nnB7gNiX2YxkWQLZUWxwLHw4QaqjMaaUJ1sB4Wv4y2ELTDpUi76hGAhB8iM3Kne7xyvHPR",
  "key13": "4zZujDwZHLXH7oDX2U6MEKVixzjBymyARvUpFTPkN2xois4PbPSKBVUvZZsZ5epVWhddGeMDiFDreZGK2HyLqFxH",
  "key14": "5fZSF3LBJbzh4fSu5j7qip2J6hyiaw1AL2TSXGtKyBrkE5NoxAuCkqZmmviPZJ8LUiavy8qisVRZ5F6buMDsr68R",
  "key15": "FtAZTEeYGk4e8qUnpjeLwMVjbZ99YR9aEea79xNsnqBHe3YaKq1mw8wR14KQcjvtUKBj1xg1ise6BE78G85yHR3",
  "key16": "4N29xFtot1ZJoZGdZJSKHS2PVPWJWPCW3qDD1x8A4S9jZhsG5WrHc1RWwfZc6SLDUfo8bJ9b6PAj2GULL3RmEQsb",
  "key17": "5fQMzByrjis4wbpzvHV6xt8wWcN2k1ZzYJ7yxhwN98hgybwsuXUa5rhhokTDKSAWcFnwsE15nhWKZUeWSX1o1f3K",
  "key18": "uHXpKuvD5eZrc9v8jxNHu35ubdq8VJ6YcreJf4mu2PXH1xHJdtnNUxKuUfhSrnTuRbKsu4qLsy2QcgkAwgiXeys",
  "key19": "fUXn1jGhDp9Vy2r5xdUMVxDFV9yHxxKi4qjDXQ27R57TNp3QbKv75X4ggXBhdViqS8sMv2SZbFxchmAuEm9LR8j",
  "key20": "51bcVCAPuXLKS7gQqrjiAtMVkp7hF644aRSrkhi74JS7orhDudSvJNgPXrRzanGyy6hCoj6KkRoXAZPFhMuRi17p",
  "key21": "2JAmbFzrmUP54rQj7J4FVEmsrie1qky7hqkVwEqzb2UGssV5tph5Ex9gDdwLJqCS3xvxU9EfgL3tZWF4aEdd1bZx",
  "key22": "41DTg8pmCKKavgEgbeo2UrYSqbzTrts1YSwbTFok5ac6BgNxufHX8wmis1yJTbwWMcr62xemJ8xjJ4R8iRbvtnvA",
  "key23": "5zqQnVfCAoYxTrjQZq6CthWnB4Aijk9kryCGLzvAYqq9HyTmvm5XEnASaRrRaHa8KcW5aL2LdbmbzWGmRmQbHuMN",
  "key24": "5saiFaVeAq66uouWQENCidfnHy443PuVPFAnU9Px3VQZLFoztQVdYWvXoz7TQKNMQnS998ZW1QyQkZhxt1XDtqqb",
  "key25": "wYyWDJu63ga2B2wmBvVQCwMEhbfSJ5VdDAte2d9LRQGrQgGfc8J6rq84hWBSwt1V8jEkDXjheWAihEcBV2ux8NK",
  "key26": "4N9TNNnUm3vqgaqspq1gDhAb6s7HqVqSuUeVXn9BZxLbCtf8fTe6YhyCYBr6onjKpNm4RWCFovwcuvvRcjBX56Nn",
  "key27": "tf9edfcBU7SmXyFith4EKTAVDTugVt2xM4jMCL82H7T2A84EdKp16df11Rrtqb9y5CvzuM9tqRAbaXLkG2rBcJs",
  "key28": "3snicNUbThW9pguBXRtrNztg55mJAcjkUSytpjjhzvmauZQ7zgSC9r9pH8ZmMrNWcEMtmM1iWyrDYvDErZ4eF9w6",
  "key29": "52NjUoQNc1R668XJNtwGCPsUx13SgsC5bGk8dvEp9zsjZcEPD5CYr9uHwBaEenSvwKZUiWuminEVQDTjCpa7UbnH",
  "key30": "4wbnka1GrHeGWqarYUZGqCXssRTNdf9U116Vcbb4tBK6hDvbryWzrsGQvDjXGyYb9hxxeekm5RHeUcMaGDdxLw3e",
  "key31": "5XWXsQmZSsCZzd6AgATcExUMvkxnGRWCDi3FEqDoYWML8gwEBRhkZqj176ouqRq8juYDKWXSMxNrzMmAafivY1S6",
  "key32": "5Hr27dFerzi3dfQjDBPEazHHcf1wvTF63N8qGcyGNb58zvVwVaRGX7WYJJR7obNhm1wM7UT3rigJAAXExvapphTp",
  "key33": "5PbRnYcxCiWQFoRpnHsj7ZUvfGptw5maS89XVGX2N1PVeP5aDBoWTdpcgmtL2oSK6NFN9yhnUA5s4oF1qdwXXBoH",
  "key34": "3r7ukJ8kWzQnta4Ne5JtL29DxYT9t9SS9RJtGucfrz9ccvkm2V34RqnocSJamzynSaqPJLrbmK8pGA9m93PUjEz4",
  "key35": "2FyRpytJb98kcj8uN7am1hyVLHUrnGRpT7C3drCraGNLdMspnNvuwvXy3GPPmx8HABhdceFrS54X1iP961RLYsAz",
  "key36": "57pGns9Tzw46Dm4dJ193xXQ3AwcQxR2wBZS5ajCEkcSnvYkwk41wbAyrtXsPbzXC4ZwcGzwszS2hVipWquW3xwuB",
  "key37": "4yfFBCvgXabYDGT5ZmUCY4vPzmRhAomzc7Gbj8qJuWgKhLEjv2tSRAQm6BKtQ1ZMzamqSQUxZ1QA2qcnczFeeT2D",
  "key38": "3CPpGf4pMGQ3GdYyJS6FJxTVvfFnsoNNtFeS57kgJbHhSzcU6nnhqJjoggApnuXPUQf6uvZq19mXckd68Heu9h61",
  "key39": "4sryqtwrf3WCgG1UQVRTx9pywkxkHJgHtNm3Jk5Cxaa3SGtesJ5mxbDYz1XTS99wmiY3fC9ZAcKoAVU7EyZWWnze",
  "key40": "4NvvY28LTXg2fmYk7SDAVfzS8UzvnXF4oPJnGrfLdHmqYjjFUKqKMeysKej8RJJh1tf4oLvXN78RJncEHPV2i3GQ",
  "key41": "DrbixvfqACnHZvcyNwoXwFTJXs3HeDb1CtkP8mSLQhyx5uHC7Ag36tArMXV1Rnjv5p7f4uR7Rd4etLmoFNdLngz",
  "key42": "s6Uu57ggrtdF8Kg2WDkuEKxovYtPv8Rpzfb7YhvaMRy3nqsHWXoPdwziTajEVM37BDgmn3EeosFpvkfni2o5Psd"
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
