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
    "4TXa5D59MSyDxk5P6nJmXwSQcc8JD1hSiX3iRkJTiBNANusYF6jBaRZPvp1d6LaySXZMFFS1RxMr2C1JiNemWpNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLu99ttbJj8rzXNTVknoGEvFuV89Nzg7HUjPed7967KPBnUf7FmWCYoyCJ1vz24uKJS1VwG9L4AP7bfNWRUMJJr",
  "key1": "8CMBfMsmm1k4P9wykbPLQab6gKKQf32feL9SzX8yArZvq2qGGiBUppo9vbkyS4vJfT2vTRQwtSD6nZbnsuMLJPr",
  "key2": "3pUGb2NcfacapWrzJGhdUb9Cj78CWwYhFcupBbUFkECBd29FPX6Ym6jsqcpuzBBLoez5XZFXWM6CAxKXM6XNwijp",
  "key3": "3XpEXAf6sSXW9XUCUf53NeQnpokzbm6Dbk5FcPQUxvALZoNYughrAwhJfd2Yp8FXZg1m7nk2qp1GRwEzXSXEQq3D",
  "key4": "4dsFUnMTwZxFKiafGijufxz7YdwrngMaXZgRrvx8V1ipSYWrVuSBDfK6QMN65ReUwMHfdcZvt7KHAz6mbmykizzs",
  "key5": "5oUpJtm6EJiH6N93G2PdGzhHLfpGzY8W94x8N7QPZWt43cMdmpUHchLoRko5nPBLJ8qRJyUx4JNftWWPJaZT4MqK",
  "key6": "2MkvmZuffBYwCDDUWctUfrf9VxkB7qxHrXbbKkqYUFXonXYCBQRxAXyVsnSF9hP9y6eWX9JHG1p6G26MANar7seB",
  "key7": "2NToenjxfP11jZuoYoyhNFfYwgZu7AyHXje72hDZXeqBTBaFGsPwwj9y9QTYcSj6u2WrriqLxEakYek7mrKR8zCE",
  "key8": "2eR6u2n6NUUx59FM7pL7Hp72eCSRt2wATpqy6xGXcLSoEqPCjpGdExt9CUDuEcUB8qXqaRPzLczLfupxZbzHuzoM",
  "key9": "3Fh9sVpkxrRrJ2HAVFGNEdzggd6MN6WLMveYnvgmoxg4R9b8XmK1tzJFGgGoYcT5wVbWTkd6xCKEFGm26JV9fTVK",
  "key10": "5nq7CyyEFkDFax8ERjkhAYNyC3ctSSyvoKKwm1dU1pfvfzpeXeAbK8U1jqhdgPXRanKE1byvFvexPeaTHR6V3jJn",
  "key11": "361nCh7f1a54i2ow5ZHYvN6r4kz1MFghnRSnsCAz3ibC55vvczusE68w5KYm54Cjk9gdEgyrRS4RpoakCkCVwDAe",
  "key12": "2XbnPmN4TnuP1vn82pwbktCcp7wotMDeJACp9shgUjoJkSYJcai6dM1fWiEXQmXmF5h6tZR4JoyAyyrULbKA7Sng",
  "key13": "2mZETp6ZzTNZ3paFwK7TNbKiinV1RT8kzi64r8MGhLiAW5HGwRXrVWfJzdqesb4LoYLF9ZMm8D1FYFrNHqwZirBG",
  "key14": "dekhfoUXEnN5AuoxvxKQcJ4DccRfzSuPrfXXXhsdW2kxRANw822KEP169iwNYmmYyzkEs2AoEYF6RSPFWDgq1dH",
  "key15": "9DVWzPN7n97saqGnSYxe8dHunbVJA7ha9m8u3euKDy54NAodiNfPZi7cs1UBEQTWYhCwKyLFRktYa5ZDXjPWMN6",
  "key16": "4wsdBdpc5hv7A85dzvey1qeFhosa5Xtwq54Y74RYRoLLnfBgJzFXyDx9YhV3hX5zLJg2jTCZ3RZEsKUjSiiZAFA6",
  "key17": "2D3kq3stXyxFCdtfjHtcTfVPe2e9Rq6epJ9HMD95xygDRn9UoW1DQwe6hUzgS6wbTxMc1L23LjgBPFJUvBCzuLVB",
  "key18": "3iF53PaZ4tcyxTGiinZWJQ9Uk91VKAP5QCL7sttf7NaL5srS6RmjecZGTWQ2SUrkViva8tbyrUG7fqSRki72Xkz8",
  "key19": "2mdktkJ5TPG5oxtNt6hXvsuXquttsgzmLnLSJknGVoc4dR4VW1MPbppv7kr84XSQKnApjsJ1jDdQjHXenLXApJn2",
  "key20": "4knedvXYaPgwQJEe1osvhDwUtkdsMxN8LVhsadCaVCbMiybSUNnt2AYrfq6Bjb6zpu8yu3qZaxVCh2XBmwrVZ4T2",
  "key21": "5tmpBpmrSFdk7LJYBNwqtG5LFH7YHpiRwXpAs56ejqyg6mdcVDenLGptDpNCRmMK1BfEjxeY5v4quAt79KwRg4vL",
  "key22": "3axoruiTQuSNeyNgajjXYT7S3sYWvDAYTCJ2GZqDSPwwsTC5ybcAahKGrp1hNgtXAAyJmKaxE89VpGZmLPjMLd5J",
  "key23": "2e6Hq6RZV3txBPF84bAFyhcCcYaZSHnLx5pQQ7UANZSrJZN6zHLp6joU5FHKH8FfRZcMX5qunpNsKxzy5FK6qj1m",
  "key24": "4FSETgSYqW9vwpar9EJW4t5E5meTLjLZmdZji42CiDTq2FgRRpPKkZQcBLgtsrdXB98LMPYUqtqMn1bNKnKvofxC",
  "key25": "UdJ1nNvvcbyx9g7Tzx436hDvctoza6zi94oX5QbNFskvEvPLMPCtG4G2WgeWEgwB8xBDSu6dCzzgJ8U5Xr1LngK",
  "key26": "2HQ9aBk8Fn6KzgHh33rqHvTriUz8ssuMxBbDAvQZZv9cKbr2ZABt6ZkvB3FQ3JFsVQvhqcNxYqeaDEstNx5U48A",
  "key27": "yfgoc26GCWRhMRFwpLnxuFgCgdrHYfTxzuRKYQFWzXV15bH47Lr1nsBFbsCwQzXyb7f6n4R9jjb4YdeEfXNXxSh",
  "key28": "2MVprt7ma3uPae9KeMwuzkt47LJqrjN5hZFu9G3ehP7mBEc2aAbECPv7YxGVQmMoT3aZ5bD97zpLtLxTnm2XLGjB",
  "key29": "pCuaRpMYQK7Sgo8qz7GuAsuqnSTgabhTh3kE8455kF8gnoxoMGBJkwbfUEvSpunSUwSALKZYAuyf7pYegHwhsZ9",
  "key30": "3N4eip4t2JQsvCaizJUxxzYEoCK8XvouVdq1EpGeas5nBK1finkGEdX4qhFaNHWsnkA6Ypk8HWayiCytNwJyvoHj",
  "key31": "RXAe6yKdn93sMZ8U6wc9cDKbJZBRFr4Nn1FU6yfFSvNc4WzBetvrJnejuysbwVktYLKytd9AsvxmBPw436arSNE",
  "key32": "Ls1SgmGkGTBy6nTEbZiYZXkj9AuHzSDWetGpw9DyETnFM1WpFW4RoGmM4swS4JZJjJDv7oj8c4ekvccbD1rPCES",
  "key33": "3ZBuD9ULWCZQcmsFm5S7WkqyGRFRgsbaud7KoHhA4nbEtysaFaQYgmVxX6tizctSMj1UpQAfC9JVUvaXX9rSRj3w"
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
