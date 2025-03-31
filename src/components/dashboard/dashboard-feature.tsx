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
    "AtXSnoja5XYgh3ENwMCXq3yBVxqsKcBpgndBBAANtXTncVkQkytmUUQZE7NjzoQ1eimarxGHgx2HhRt2EUZ982D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B19k2CxgTByJhqMrbhEPKM1LVBR859oU7TQYjBS8dGKz99CnN1Vq17SgM9a5D5HwLQqghVETRop1CgZEQzZDD9q",
  "key1": "3KPxvJiz4JrBYBTu97yGb2d3PP8QAVPQ9ukT3PgGjhb3cJk7ri7hEWPF4xygsqUCeyXabxBTvKFTsdngDmUvkDTH",
  "key2": "umMQQoLxiPmUcA5DEjA3asxnojXNnA42GJo4TuRsWmnbvSSy66KNy23utdjzeWs7k11oYvPL9p3SYwACHjTgt4w",
  "key3": "2TCSRUSYgk5W9R56voiNcCrAHEtDNG74ymhHgjt14xvWaVEESfaQmp2Ce8zZmDZmwM4AC99WfFpiD3Sb5WjY1VdQ",
  "key4": "AX5fgQk5DJUf5z8uN9G9huun3VTotM2VmKQvKEQRX3mEYTTU6kZChuURngUHaLL7nK6VG5cpJ7BofgWDEd9ueVU",
  "key5": "64TD8e2jyhkn7vqTaDdVAzmG7GWXxFz4Gkg9zgNQEow2pYkCEJMzFiEaXfVDfbgw52WjQTZFLm8QZsL7V98JKAcE",
  "key6": "4eTmXAuGtCCstLAzQbXMhr2WgjzPJHhhFRJEsqnYVRKGrFoNaTgmNkXzmdABJ2fV1F1p3iLGkK8m1do7ACaR4bNr",
  "key7": "3ba4mjseLfURFqoyWzcfCj5Zt4iKjUqtMwNxnhgbWA5oNNmcWXccR4b4oTCd79ghj2mBf6vEwpewFBoFMX7aX5Vn",
  "key8": "4DX5QmRwqgpBzx2sAUJbNUKMymywF2nPiY6VzGRg2hhmzwakjWdYLEu963fLPy3EMAeZ4t5oSqcDjHCzFYykdJoM",
  "key9": "3KXCf1865VpmW3eVec7bLxnqNvyCiYd71fsDW9zZ5X6TouYcKwGDiz1Pf4MXo5n5GdhoxuX9D7dMmM4tECaKGCwb",
  "key10": "oH7SNhFNpZ4qBFyDki9dd7UdhHX6mN5AupsJa2oTaTSX2CNrKsbs4FqGAVk1SYtXq8GwMoZ7tTiMNqF1zDVJcw9",
  "key11": "2US53pYL8xHDyRUEEHNGdsFrFYLCyUyoFnmEf9NtUvZJdEP8tkP84r7FB3zKs6GPh8KMg8UxMYgUui2ECWEr5moZ",
  "key12": "67o1bbeWj67jUFQndQhfpfpdgFgKwBFVnSqVPQwkpBGRmbiPB675Q2dQ3Ut2pwnzYbZBen5kYJhCgcJvU1sTbmPA",
  "key13": "3LJ4VjPHmVwMb3VDvFUrNwm9QVWhrPi5C4VD89sJdeaB8TXZJHFc4kgPFHbQhCjsQkrg1hrs2euFd1QDZ7ZVnDuf",
  "key14": "cYdeUUFvKdPHL7wMLGR5AnrqB2Tb8xdMa22nSrXp1FtPcXZPmsAbAPea5mGjvkRyE3uTSTnKxAjmJ1J64nv9MPZ",
  "key15": "2oyHZ9Bkyg5h5yqqUhJpkYzWxWTrMunXm4dsn3U4RmnSX6dcWktiMUWAKr1mJgoVqC4NzExqxbyAmctKay3Duujk",
  "key16": "5cPkx4KGaUzHvuBK5dec9E3PrAt83YP4pcKFn12JAowXncnyRD6pFTars2V1hVca9rsak4HGwJSfbmfWanuFUZDV",
  "key17": "5yrJrCF6Ktm9pP4jwiNhVycusWqHfMGZ4cbcPsRTYV9z3SgCSRLboGqqMMdRP6hijADAGbU37Xx31TtG9UCsDnWm",
  "key18": "2aFCD9PQpjKhiQFAhehE4TxhmXttQU6UkeJ6dynxB4zboLKXprEMGLKnaSCgTKp4Y9XdCo9PRUdj4Etf9k5YvbRt",
  "key19": "3YFKcQYZs1k68pbPz14EYvLJKREt7NGwETJ5eK13fqvyEySMTrwz7rTRvU8AXhJ12821BsUadm2E8kGYkJdjSMxx",
  "key20": "VUgrnEJkkQL8GzMcnBp5jR28m4Mevfe199Um5D7ocfEe5d4M6PRkVVQceF516vA17raSDpnWQeJw5LwMxDzHpui",
  "key21": "2oowvBkfSka5nN7t2oZYYjoAqRxbzh3P3MYf3zWUJAvarxMiubEUvYLtGu6yXzAbE8xRrKpqiyMa81hC47xF9jnP",
  "key22": "55B1sYe2G1XB9VKkva3kdAjp25gv79HAfZaHRRswmkovSpWCXQZLnBMNRGR5yNWfVrBFFXKFpM7XnWUKDUqtd1F6",
  "key23": "xmohFSWo5fjHS4uad6xZEUbjb71RnsCQHftbGkc3gNfwkn3w1xWtuvgPYbY7kA8SLUnNAFosggSvE6wYbzkiK5c",
  "key24": "2uCUPaLNFVWJHxZvjJeToLqGn98cqovTdjsHiQNoM7Saa6dTspYRcqkatcgrgvogwjxSRZUQWCsSvfhtJbaZc7NH",
  "key25": "3bMjr5ABkT15fcDud1SqnQB8g5E8SCdcCT6Pa1h3iMxNFyvYyvTktANRxzC8GxWPtsciESqpuSYwNuxZA8GUVLb7",
  "key26": "FGEhn6WBfy2ZzpdSnpdbZE6srgHHEDemnZAYWAUTwXYptkCyVct3NS55b53zw1MaMV1mX1UeTfE6TC2N8Fix1vG",
  "key27": "Nibj7aXFnL8fy2gWjAiL12dGzCx1nzmD8pc8u6t5pZfTaCktyRukuJDYuprCXZC9LfUu9ngGddqxLNTsaPPYnFd",
  "key28": "cMAyBC37WrgXY7zzxzghW6NHQKSJcLoLh8zAifcEiBPNBF23sMNiarfpDFheRBH9PrtgMrNfmwNues5xN2WdtXp",
  "key29": "FXYJPPCmodhzS3WUENCPHoqq4axAP5iptNMjFVv5jr8D3S6mAGN9CFwsXMYYY65Hy6C5kuP9ULWdVbE9sgZiQig",
  "key30": "78aKDDRW3v7MutjgYpB7EjL6t1SPKmhPTghgALwvz5RSz7Bnd7QcCyY25R38ngQzJ8w8AyqpV3vJcvfEu7ZxpW4",
  "key31": "2mPx82RZKmm5nfwLEzkEfAhFVHvffpjxLk9SViMkWHYTPb1Jf1XFW5b2CvrnMW5AaWiGf7JnWowRhgDThn8t7CLR",
  "key32": "5UHG21SXZr329fEUT7LzSmJhQ463q2rmWYobPrzD7RDQh1y5yNbDz5RJXEn4a5yv2Xah2Bzsvr66caj8ERj4gVY4",
  "key33": "2jrNQfeamu264T1Awvs2Prscf7oiWSv2oRMZ7m9uNtav4MojzF2wkYZLZywsM3STZDnGNuAGoaNZrZmbMUBs9GSW",
  "key34": "RgNePB2SAXe4pYug1hYV59aTMaazuEyBpjddyAnuQTiM9q6SmNm4gzZDjExeG9Aa5i2qtfEHxKtK2N3VzA7576s",
  "key35": "2gt1ybFkweCndV91M58JVBuDZjFZ82BtXZwHkYUWJYSELpwfFKgzM6BTM36mZowpZEKSKbGCV8WKGm1yX5ZSCjfD",
  "key36": "4hs993w9qFjFr7wWUSRjQ85rAkFkNhJZfSj9Ut5fnQVCszCSJtH6UmmTXixR3DJuw5aVHjCHhiGoAYcUEsp6GtiJ",
  "key37": "2gUBGzjrpUJXpR2bSxBEyfvZNKdDZxaqBBCPELUS7tiKYq4iZ3Zv3bPqNn6eoADvasu8UwbCpaH4kadYhCc9Hjnz",
  "key38": "48TeQ1V5FAFKhGeXoYhAFPmQsvF4RrH3RKdXNnReDd29ntECuZfMMxb8MGhGyZBeDFvrm3NwCco9TQeTkCiaBDyS",
  "key39": "25jtS94wPtHLM2CvvWh7ePR63rBMaX1xFyEjYuLGbLCXpjaVfvW2RkZmuveSR9sSU6pszhu2MosJQr8EovT6z9cu",
  "key40": "4TLrbwW7AWkF8497d8nU8sfHNnzQTvYQQaBDpEm7Hv37vPKDTcZLaynodHxmmbeup7qkuVLakUZNdwrs3WyaA5bM",
  "key41": "ecLCzbJNKUaHa8Zoz17wCpeHWakW3QzjdGHJZDBTvML9u2TAfq47HVjPWKELqELmTHiHNZqVMSPpgH9qXaa4qcZ",
  "key42": "y9R2scE1GxV3bzzmPLgKaauBfUGm1pxj6SN9DEyFxFnmJZyMn8W1Jx931ejwT9rYFwt4nm1mPZc3x8brGRbFwkE",
  "key43": "4tjSH87CC7az8112PdRc3Wy2qyXouVwk6n3RtDZ93BDuVCeuSxdPovpHQSBjurLpSHT25vRpXoCRwGCXGDewsXV",
  "key44": "5UTB58V2PC9ZCM4KhhEQrqScDEqUxT8NtUaLbf7iJLbWfakUsrnt9e7YeT7ABNsrE5mdAW8F4csJH1Jpv2gRVeqL",
  "key45": "2kuZhnfPTussS5MjDaBcjWszsZfZxf71dNBHPr2WdpJRtu4nFCFa6zcSJXNp1USNXhW8xy5bEiLR3FL5yDM49vzZ",
  "key46": "2pJ5Qsp3WskCcAQTw22AF7h7k6TQjRJRnZuLiL83wQxp9WsJSrZ9s98rLwigiVtwt1STyZ7pJU1w13t7v2SKQae9",
  "key47": "rcf4BJvsxt9v64Acw1sp9i2bJKDDwT3r8MuN8Wss3jNCWPEsZN5p1wfgEz6vdMyRqGCqiSYR7F6VqjP4wxsGgvu",
  "key48": "3FcysqN5CYqumioQwcbMhwjDur1HGSq7NzJEdffS8MSLTyqAaAew4EuKJtQoXAazjQfRusztNV2rVz6XdUEnCzL7",
  "key49": "3zW9NaabHYw63idn4LLbghBtPRUJKxLENFrvCkHt9YtENMavBmFrM9bXHNvWQdbc7Mq6XsmDLGFjkSw1ASFyPZHb"
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
