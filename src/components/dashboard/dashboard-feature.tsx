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
    "K2wLrNwYKjXY3PWZbQvUGqKR91wPEqJmjsCZKM1HiSEhexioWMwzgzJncFruHDu1ewbCe4kPcXLPaFstGkDFFA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2seRUgHfvoCnUB5kK7jcXwAMJbNZVNzmTDAPYFdCHsvZCkyYEgVaVw8mJpnynvyVacQM5vHbfsqx7urfgHAom1ju",
  "key1": "2wFditC9H237MncwDnw9Rr3vPY4T1uwxEekaR8HJizpuCLvSCiBAKyYoUhLPMERAsFrM8TSjC3SE3DtLmy6wciX7",
  "key2": "39mgzEP2E8QcRJd7ZSvuLfYx1gR4tBG3J5G5tdsXfZeRBdoyP9dbQsZE86SPjaF4ks9x2eQTxSKAXjYxxzLSVU3B",
  "key3": "2bdJwRXiP4kJ6AE5Wt2s6Uf48H3Bki4itGLb1m18kCwvr51ryBTEwVovNYqHXoBfzQWFEzHgSKypctyP9gWDwY5L",
  "key4": "3779kWGv9zdpiWV7HLBj14VjYDGT1p9gaZhBMArtXcTZUvXnLNzzkhyDA2JSCk71c5Ab83uoSWM1u8RUEUD4Qkrb",
  "key5": "5vtwRAoq7SjdMvD3UD3utNXEbQzxhVs9d5EWsmLehkmkyQdELCwZ8TpDMPkwrM39vpBr4siQnjT1ccYSWSgr5Lsx",
  "key6": "2vZyBcqhHSL7c2YpBXkaXqv4ju4jwpUfwu7VmDMfZZSAMTy8CFWuY34j8x2mmPUV6qaohayDrYXtnmUygd2ADCTQ",
  "key7": "5puK92FzoUiwFxAtw8cxQrRwTeeoPLpRS61hJgsUdVVJXncwSG5Di1DVcMxUDDV69eGjzd2d5yRVhA81812zu9ka",
  "key8": "5Ygzz6bVAEMeiaTt36S3t6Qm5jc6YjK37eCFK4umC6V59txAXaAJTQsnwh1NJWidSD1meghz2jmX5hpWdqY26xPU",
  "key9": "3GCMXzVzZ6KUR5eNZmQpBqVhVSmuWJZqSbcqGYHDk2w829jjN927ecwFpfuor5hEkk36467D8n9jiL6Jw2xTTh7U",
  "key10": "5Hf6vbBZk3MdqPChHiZaTtuvL4CF2d3ogdN7sdVRBtKTrjsRXvpTyy1BoLfvMQ18Ancq3gtmnqmu64FxV89iAPvA",
  "key11": "4w8n8msbGV5ims1AWBL14CATT8mTAWYGKZg2B1WtFKp2ASKQnUQDEK72oArQGVu68BAc1Ko2DpijKkFavbAZrhfd",
  "key12": "2EDZwPUmnBqZawcWtkxEmiBAga3yN6JMEJPpkTLBqGCftLy61P5az4NzxTUCtwT3YMwiPiQMryzNV2BtXg7JNEr7",
  "key13": "CWmZ2LbijXvVbuYshwRc2HL6Zi8jwTLVs9GSXerLsLkqh1VoBqrheYKQJiy6jF7mb6Md5MFJVUNV6XxWYAKWomK",
  "key14": "2EcGfPfiekEwkvddLxHyUpgeGLPibhLtoPkafqhunabS7RkFFARat5a8gU7rPsK2L6Me2kgP6J2xhX8u26QMcrSd",
  "key15": "3r7SZRvpQgAj6NiFuPbosiRqbHu6WXqx2Xdw6wafXUjgpoMb3pPpezm93ezuaU3J1DS982Tn74rUU2UkRmsZeD1e",
  "key16": "4WyJjPZ9G2M86kAKDm3iKc9LSwXsapnQ5qZ3T7pPXe5cv8epCWH4Da9t332enVwbc6TtQUMRAsgGp6mxF686kAeK",
  "key17": "8pqeHxsQUdyvhEwubc6RTUaXB7k9nKJvkZyBx4YS4HiaDfhPJwXk1vLwH4YbRJkyJfrLDwGzjPzG3EQAVtfSu3N",
  "key18": "55BR1sH8CRNHU9nGtuuRzFMKYLerxP13zUs5jWNuZMqST2JMmvu1BHCUXnFDGMgMkKx9J1kpVxuqKZgedrab18gx",
  "key19": "5Zr7dJNZsJK6JoFGFHdGhNNtEHfSqbnrexaZ8C9yD5bbW2BgbgQcx42hK8stw68cecgCau35fesU7bvSKjuSgz2h",
  "key20": "2DUgpTqUsorDSqLSDMDUKcCHrUowaJM9ymCjmEaRWkVgGrmSYWFEt3Cm4Y7jhpy52wSVLyUWEtCHXbTBKfXDyFCY",
  "key21": "2ZXqdfvV5Zv69mtDCiVhsdgUo5hbfvKBkVXPpHArQVE2FWZNsboP91QWUqdHndVj36HzwjXrEnUgNBUhDCk6YYT9",
  "key22": "5KJQFnKuCGv5QHRXAS8mVd4pj7YTE7jv53ndiY2VBJ4nvTSd5CgPJi6H31nThTCRkc5dbyyZi9WFhCpf1WzqoSdq",
  "key23": "2vCA5C5KT2boR733nvMtCqZFfCALBc1G8YGmDjzbLu5rJrn85Sbf1AF11cgGnki7mdZWEKtpYossZmaLYuYhxGzk",
  "key24": "54XP3h9Pu2rnFaJL1ZBkxXfffTxKkhxwvLjjoFRX2sQaASiJ86VzXLseJ7m3T7CtQN3wisngYMwj5vDE9GABdaB1",
  "key25": "4J6LvyWhtS41bwS9cKvnjsc78fpt6exoVWZ5zgQNi2mZJazTyKNp2rdnGQFa6hyHkJC4BEGBqXgDNDS6R7yAdJ9m",
  "key26": "3SeSWLkDepwnE9TW7Q1v95xz6JxGE2WjciM5NK3GupM6qe8uTbJbQDwPbv6ZP9WNSRKiiMuZP2VPgdQZHuZEMRKF",
  "key27": "E3b2mAxR4QoYpa1GoLK2NLN2vyDnPbQSGKMFGmW3wDWKjLoN42TXwtFsrSUxvuk6wkB2h55PR36DQfHJfceBmHc",
  "key28": "53kkQh4BhTWGWfcdQa6YjAkBQqXiVwxTaj5TRitK5evLom4SqyYAvddCgKM8Ah6U1rasL65Q5og9ZpDqBCj6RvjG",
  "key29": "2qVcgLiCj7vSsY3uRa4vZJQ4aMWHYjx5nNmNBj8PviWDR9fRw1rTmLByWoM6CD1yi5AwfuvkDDsJNj2EV3HqBTXq",
  "key30": "3LpheKon9jZz4jBWrMc1JuNQCzeNfeRFrdvSynmPNfX6dHAuVcfndcwScKjuTnAsitXBGogxPUrYBSXQ8jEfYvGW",
  "key31": "37sHahF3NV7D8YPgVGbRZeQCRciD1H7PCknZbZEATZpWNwYf4fA6GVHpUv8nFjqqM3Groms4jPiYNNyJ8wRcqLrx",
  "key32": "36nXhP56ERvrLj2zSDvWiFExa8nKShhHoo68ndRqh5wLKKx7HMVehe5PykxfPfvfSYeCU711ooQswxDmdTfD6idR",
  "key33": "H3pengVZXcY7eT3PCpifH4VjCSy4HofpdAgtLaLobtw1WuZUmZDmwF9nCZWGSQCjthyiXmatg54n4abpMffYvmg",
  "key34": "44i9LzksK4GVPxCPTPeWUezzEf4fzny6GtAkdSGQEq6aU9G68qJAW1qE92oQwpwaXvADseaTkdPgwqFjWfdtNvTo",
  "key35": "3TuRWds5q3GWdnByBhMTtYbwH9nW96fRNuAfjPvzGG6YpbCFjr2gSWnAnj4jHU7nK4TvME9GCvCn6WoBnNmVVzJs",
  "key36": "3Mv3h5D1hc57ZdoNty3caBZZoHTy196ANTMWHECAWZ1pmt614GxidDcjfzFNeX2wXm6cBM4N2yYv2G95q5pWoTk2",
  "key37": "3d5ksk73c1hoeH841YQMtCt2qhvwZTHWxocBbAqbvUzMKJ3S3Cd4L4m1WGjbrN1jgEBJQtCx4TXR9Zggq2sfja7F",
  "key38": "2ReY6wUgn9B4Kgj9wko4kj92X2pnYqSti9ibB6fmBxUud8hEHcuk8hsYGKPggkP47gYYE6xqnfCs7JUjn8bEXMnf",
  "key39": "51ZpUXbNevRiSke2oQXjGD8qU2DGHXNMp2ggGoDq16d7HBkvKF87JMsdbhiP9QjQ8Ffu3goXzZY4b8G4i7ppHotB",
  "key40": "4Vm22EhCJcBbYgLZ5vxgmpQHkZ1bNH8dG3qfScR7quXiMiYQ2myH8FqcAGB7RHQtg52RRneCpZREPLp7u46nKpsZ",
  "key41": "4SencqxAnS3VzsqyLbeRW23DhCSVQchFKNG42rj7jQifzH9ABMotkVn1NagoitUp6tW6wtAZZMLPd1wXAfeWmDjr",
  "key42": "26LLzRwtnMeScNkFXTWAqry6beafzzvNrXkJsn33DGDVh5JELJJgDBvkmvDRZTc9KmZiHocd6HiyXqZGR8q5dRHQ"
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
