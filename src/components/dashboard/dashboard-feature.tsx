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
    "3q7AP3a6XRTvDMcBmdQqrPH7ioUXu47Um3mxwJG4MbfpYhkPLwPPYsrQrizNEmqKeH2xZqW8gDa2WHqPiLb5pxSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CjmmjJaBjA8nxfxESbJkksSLtprfqo3hPSxnri5e4d7CmWTd7EavXoJZYo8BGdtnm3FQdScwWBz4EVTs1kLiEi",
  "key1": "5RjQRZ2TzpNWxGvQnwWdGzXsT8tjvmFY3ybtU3TmifmaMTPSyUfTuUaXibZxXvF9NNvk6LMekqxh6Lk1v7f3E8xV",
  "key2": "629q1Pf51cwtPHKZAeMyDrnThsfyWCSsYEMQg4y3pZa6tJu59Gabpd2sVQwtsQdECdHZ5uczsrkht6TFti6uRQpB",
  "key3": "oGHAzCaauD1HrJxgfmibXtwCELBRmJQpp1fa21RZi6eJang5kN4U3xwyfbQY49vHYFoviw9rozznzHPSEMBDjKB",
  "key4": "MhYveuYWhPRggoc3k1shMuY5b896vsGEK2MUdrQ6Es4Zd2KUwczY1C5ur2Ghdiqpay7GkU22fAefBR8i31BMA2o",
  "key5": "65Z199uNjAKUqe7MAAzYf6FA1LhcveRnmgosRYeJUGDKmD3xYbEVNmcyerkZZokfY9FDPgUkwSWEwk9nHrGEGcFC",
  "key6": "5Xwrfe9CWV4kJmvt7HpxHTQ1pJ4zPYaVmaV7yYAPiffRhaeNTo5cLuyjQSJNTs1jP27KPD1r4Bcn25aMBCw9HWbA",
  "key7": "3oYPiwyyA93V5j6pGFb896YbsJw59MmK7igx2nwkB16iiC3pTttXa3dsUGMZTJvU9sCsUvPE4TiotpeCCPD9jLpD",
  "key8": "3v8rJ7TGrjm57wpzqkFVPpnLhEN9JfoyS1zg2mtfwRwwAGjC4s4B2kiYJXoJH9gt6okbNuwe3jkeT56XV5GB5dDP",
  "key9": "hH91DMzQWMy3rJKxC9bF5VZvQNmJEM3rUpePW9RXEPXZAfnF3JhMPJEGDXXucNGRztoiSMeuJQaWrgtPTAyhN43",
  "key10": "3EAxZ1dsZUSojdgxT3xJf973FqbDaNXAtuv7Dj49X8XgwGJ9iybZmqcxh1JQdbHFtX4Dmc5S9gcjdFRAyEcXqGYT",
  "key11": "4nKdJSxPiUYqR7fXaVDggVJUX7bjeyZdMLEJ1pNEvfYipoJCfhrS9eCdz7iakBY3LP8w27airr2C2jSQzpvTcCPS",
  "key12": "4AkcnWYkvAKzo1M2hAURXxxqQ6GLaGsVvEZ6ckpVxFt4e7pAS3Gu9YLEhVf69H16CB4B4gdWHb76HwmANVnyaB3W",
  "key13": "24qsrMuUuaQk5vh7t6vbENQ2UqWx8sYjKMsyBCNruB5vAzhBmRbo62r455R6bHuq9YCHddd5taMHSUMsAeGg3hvD",
  "key14": "3Cm9K4K5QnD8jBX8NCABzJYvVJtqsW2upf9kgp4RvKB9D7uwWQbH6JFjRMjv6Tx61iAstEgsKT7Qs2XXx9fbKVG4",
  "key15": "3f8REUTsEfw5TjWQtiv7GSW6hSKBiKv4nLFHcBGEF374Wei28EtCcPfSYZLFP3uDR3rUA7wjSC4qsNgmnxmBh38B",
  "key16": "55tod86EqJPpyGz5vbvvC1CCQd7mTwPVuuCBTs9Pzzd4dmHbSTQtL894eW6uB4yBK3r7DCU2rVh2HJBqTmqJr37T",
  "key17": "3HY6Gn4buAkmHUMbxcYXeh1e1aefhCfEjVLt6XHShm8DsrA1ee15a7G5GLp42KHwBnnynxh3UaGZ3WmPArfiWJ2R",
  "key18": "Qb3rBWXUYVZSDXq8MDudczWnUBGGj9oA1H8a8DB56niPbA1C3axnXD7ovospgDTHHRC9kE7iGd4VNMb8hft8Sjq",
  "key19": "24yTZ3dh5ToMEWwxSHEonJyMvKarBk7vQHSyu9tdKLwL8QHFMMBiJMyWvzcbTgMigQKdff9Las6eyS5wyCsaZGMP",
  "key20": "5QvTUiVdvJcuzj4XCdzKpMq9bTFkAC1YCAUvr7tpdahEF39w5BvES27bbs17YcFyg3XuUc7Jxa8am9JBPwF2fXUS",
  "key21": "52FpfdMNXVUrWadvLEVp7F5e6eTYbHgHVTpjLS8efnAxXwNvGWSXp1fkaQQqzfQzqoTiNVX4WjisXeXzPSGw2RpD",
  "key22": "46kH5HmKbsHFcCG5gypEK8iYTTfZsRYj2RE9DCqCZn2o1RwhfigmDHbpFa7sBtU88xDnLBbNYGtd3BeJG5hVesYE",
  "key23": "4BqkNBi7dVp5Tn7CtevGe8Exu3zgwmxP6PiZHkLn8Zm9mgPdznUZkXVK7xuhh8c4Sk3aqjnMPQ5eMM4knyPqWv85",
  "key24": "2yoc7SrbdDdtBg6pE5cWPeW798QkHLgs8j6TLPVXCvNcbLnSNpb3a47iudn55wi1iBbmDqGyReQjAdvn91hNUWeF",
  "key25": "5AxL9S3KNk9xUzDQXvjkE2zZpe4uJt5Ja78D51RiQh54Z6DiZDLfJ7V4UjLg56wayyYtvaxSXv258ghoJ8byFbiW",
  "key26": "2ajfM9niPgq8gJRNU8Zmf7EMmMN1oxVMw5KdXQaRSc16oqnE7orh3a5SoiqJ9dzvGgzqk4zY9tJ9jTTWw4tuQnQ",
  "key27": "4dhTTPqDXHMqKL8Yd3Q7P7SqSV6mcxusCBqDUZCdLb6cbPuNVGQV988gPMhax5nXxn9fCcYnX7Uqunkoxn1ErKRG",
  "key28": "27bLMTVJZAjHV3QpkZHBcsCsArGGMH9tNDfzWUDFjywYd1UmG6XCFEB6CJmNr7H1azQ6mFmwKoHajFYYyhtc2DTU",
  "key29": "4ga3GYG9hVMHgYjboZZqbs8CHgKary5LtqAD4r2M3QbZiBY9RtLwtjciiJh9hzJqwDG2VFwnZMPxrZZLj1EM65vy"
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
