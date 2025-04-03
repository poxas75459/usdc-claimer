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
    "51h8Te7jNkG81qgwEuTYgWzTAQknJBKHnP3rr3Hu9pGy3uqvksZrFrn3s7pd97VEaeLxmrxKp9rrNxhDSw6qZXLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgvdaBf6uH2D8FdPg2ZBBacc6fnYnwKakzgRE6a66agoqHj6VmtrF2ncnjjXeTbE727iYrZWNFrkJUZmEEZs868",
  "key1": "38mASfe21P28rys9a9k2MKcnTNvo8jpiukoUSjvawqFgnNF6vVN21NLDqqVwGducoUpk8Kk8hvKVv1stTrWD79YF",
  "key2": "2Kr8Ts5A7NtV6rHgHoHmk6AYYUyDJLbF1oXGm31qpdZDvjqZAagz7DYHxrjvD2p522x5tSL1gGEzCmUiP53JKiB7",
  "key3": "2uBzkpd4rz4TXwpggAbk3CqSJntUqhhXv8f5L4xn5aNGBR4eJtWNeYMZcXamgPEnBFoQHJQMZkQNvLkQfMTF3wNn",
  "key4": "2dzPwMrZEakdZy5Br2Vm5GJ1R9WyijsvxQ9XKsHrwY5vfviRoADXbyLmghQCJRLDaaoKwiTPQVpovK7SJsfCdSJk",
  "key5": "5nKWpr68uxakhNSMuc1TUnLBjFU4cHAw6jFqLKm1puQXap3r5wJ1sz8zkXbURgi32ABXFYdCZ2kYXNNudi9ve7pc",
  "key6": "49ij4WWZfMtt3PrncbQ4DwNTZY9gvzfByr2xQi9yu3NLVCFqDRAgreht9Rkn5zcUSXRdKDjTaHWqsg7VgfVuziYR",
  "key7": "7uuGiPfJwPNXfDe8mVepm335kKaqQaeqb6ezXguDnt5jne4UdgyiZmnMvwxGQoNA4s3ZaSDWxHDe86bh34FgpPk",
  "key8": "3sbWD88u2BrpZH8NPMWkgLA7WPioKuCVD2mUpxoVnx6hqaythbBVVR6Zn7LQFjyz87wLq3TRAzQtauDFgrQJwdtA",
  "key9": "3NGpaZPhUqTDc4mQstVc1QdP9vYnYT6kBAGV3CURfXGNVNa2sMYsyGqmmkCv77FWZRjkWtYETmsU1sRrLnHC1BnM",
  "key10": "4CDvokcJiN3429byMQfrwuNit7w2Gmu5jDD8fLjYbhxWGny3GXhdGRYegKkraoFm8Km7jN1AGHmStKbSR8gbQeoj",
  "key11": "5AiNdurSib1JAKkRid1FJxvPycdTNWUmUjfdDXijyQwJL9SoW6pR76AP8CMByrdSEAdrX4hXpY9VjVkd1jAktXr2",
  "key12": "qx8YpjMp3EVDGLz8qSaqCD5d6YuY2YS6KzvNf5zBXiWVCcQPCtuGET8wvqGrsaHLE3UYR6xwt8PbvnCmfFXhjVd",
  "key13": "42QMggup4savcjzSCNWCo7ZPnDrkNHn6HG4L37P5tokTRii9RmGWea6WS1xdQhR2NC7pFinK2uNoM3dmKrftXyMj",
  "key14": "5uc2EQ8rNMXB5nMUwbSumEVWRaJieUfdQbviZDWXsoTwCz1NZTu87YpeM7UPH3LiU4EC6ydXXynsugh1YNZ71sHb",
  "key15": "4tQShXfbFvRDauaQaMXUt4b1bzj5DUFKPmH3DCPhPpV4jPrXmxgxCjHvVcjPnEDPsrVoiQbaFmtoBKEQ12qhceiT",
  "key16": "4jDyKdkhjspzVzLy83TXS3EZQ4646kgAoAHdve3osrYvGwfMUAx5Fbs8c1RzUYzeTUGHrDVrRmGCd4hT4FCo4drX",
  "key17": "2FFr79ydT4s4U2ovWYjnbVk5mHYoqQXkf3Paad5oQvBDs6HCNeEx826epNXHy6gpzzWb68DgGamxmNLB2C61v1in",
  "key18": "QjTHje2yd73cCVLZNZQftD4RUrFV4iRxAmhdSD8As2TweE7WvGpDdzGG59QQnDzu2XaMqR9bdoGSqEDYuEotgKy",
  "key19": "4p2Bc8nvh9HNNGgajQcEbDjA4Lu4ULteZLkh8cNQz9HfMSgoCHUL72fKwtTmm8BHi7X5MpeyMHAPPHSXPyrA8sR3",
  "key20": "2PyDtSkNwTnb9U8TZC1GXnDhNK1t9STAqCYdjFqG8PnCcgyadEB6xNt63v1rS2JmAPuTmuvcynbZpndYd5rTyGNw",
  "key21": "2z9MiCy4SDVfYXmeecV7VsVZMPSgbBvU9XSpJChwjMqv3EdTbyTErU4q8zfXoysQbkDXZft7MseTb4NY7bFNMEtw",
  "key22": "55sgRMpStz2qbTsX27YrRPsqKxHnSzokJxU6Nk2zyKyAcnJQB3LbmqW4WzaX1B8Dq8i29ehB7bEhjNdqJtJ9SwvU",
  "key23": "4hnK1Q4bnkjf6ew5y6xfejK4wtvHhSD6XWb8oeZttX4xoZrzcwxEKFSmFihzgMHjFpQpWzQEQaUYQB4jaXzYhA7D",
  "key24": "4pocRPh45ya6AtGMTYHw5PhJ9sJ6KKT1mypRyxk3x9wJrFRLo5PSsLs1eHv8shEjkDsQFWt2ada266Av2zHF7kGp",
  "key25": "2GezMMDUpD27Fw5a91hgGhYvwRc92PViWjQoFhj1pokXiZp3oAdzYQqhjXERLf8MXPqeoNZHCV1cV9wFD1qBUjrV",
  "key26": "2RK6U12Es5MukLmZNjVLGPp6rmkwp8kbYURQk3k4erbghC5gzeN7wsnnAHqWJTA3y5Yv5mxhc89PPFyfjiyucj8k",
  "key27": "3F3QtNHCPhKdCuwjeVvgWcZiqBFKLLjfSqEGUhte7SykmnNDFwxtFuvCCNKKUdQmUnReaSfXAdjWo4agr2mVx8TP",
  "key28": "4Kgi8Tri1eQa12SQBDrrpUokAVQNC2Tc3RBYbN4jJwfeGLCfT8UEBYy1rfxFJjdEE9pP1fFBPivLNm8YgLtQR9XV",
  "key29": "AcKZxpddNY8pwZdTAwVCx9mZG9Gjz6oG5wHUdoqThcq5Rs3qjTZSDxnBDPY11e1sW5viLvRtvworCZqkbmsHxg5",
  "key30": "YZ1FjFHWzgWrRjMKUH8LjbbAwaK5HopyKEhXk3bE5LVdrCEfqhvT7yvdwgCfFRjYDu69VADUJbCPRiTtnTN2Np2",
  "key31": "2PMoKGsuqPEmeEAWRc8ofyUji5zuuhRntregCeF3A5nhbascNf2rwgXeWssPL9ijMPfQ8GaK3Zwj2bg8sUzn6kCc",
  "key32": "31S8jht1MrL9o4rzpz2p8iN2LaqYinhXo9Msy4y4n2kTuFZXeVJVk162V7QEULZ1L4wvzYV39TpoVPw6VEXakaXA",
  "key33": "5WswDzfjT2sGefpECPTpgyCa61bTiuShssxgJqBVRCofGH1r19iTD5j5pUujmNbKTtsRyyXacMAxWqxn11DK9PL3",
  "key34": "2D4eEs4kfTB5epGaXMMuHizVm7uRuNqKdf1XArhZ7ihir1BqUcr1UGJhZZWMeEQzXXKKkpKWJRhG7jxBg4KiVuhG",
  "key35": "4G4UvvoZgzdLVkGSn5ySnmMNnGdW8UcaXW8ZLMKMNgVLdEhp5pDHR1oL4Za6hFruwSDvn5t3ibPHUWpkQGrVMtQ2",
  "key36": "4VCb4F3aJY1mnudqAKtrJbkHrSPJQaQnbLAhS32AChFtrdkgm763sb9SSTjG5ZaLRTPq27bp8w2XhDQQ7899SrEx",
  "key37": "2VMRDH9HVKHFpCNNcKcEjvhMys6DdvoFEqssyaz5s2po5MsUuzphqNifqcGytWywgjQve3fPextVNHPTLRD3ERV9",
  "key38": "5b417yXaz9XU2GPQqAhC2HV9gwiHenRUYssmffwETsNRjNx8q3hVxdjbgc5dtqRbtPLswa8uf5C56WuFAkCfDAgV",
  "key39": "rHot7z7qMuDyF2RV3rp4QJuqP5S3jAvvgiZZtykwpeK5jRAcfbU699qNqxpxMgE9ScUh8C5Ny4Rnw8FPtwfPRUd",
  "key40": "2qsJbsFwaSipvLzfEivLJPmkQRjDBieLrTU1kXM2ux51Hz5nejAknGtS6hF7DGGq9eraVFpzVBvRwrKmiAPvRhs6",
  "key41": "uwsHJuEKpsMg49bph4FLB7hCPYubE6R44AbRi2M8Pd4KuHdr815EhDBcA1w3wqC3xKnDAgCTVoJrkw8Tc4kHcPX",
  "key42": "5BEaSHXvpSGaNZAz1zx8yAxvJmowyNQViraLAXeQuDneSq4ShJ6bidVPCYWDrr7Szd6Lu5c8DMSABTg7oJ4Ajt7K",
  "key43": "5nmsB1rkA18JL8J5NnFp7mKVJpeEU127MRVFQSkTn2GYA4nBzkpLonQCW4kfUFBTYRTdTqA6CebERL2afAjdCmfR"
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
