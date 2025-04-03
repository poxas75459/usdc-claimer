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
    "4mzS1kRdk5ijKgyNCPfD59Jtg8RiACvNPrQiyfx8uEwVEqtnjLBFW5ZkQJiFxZpKotE2QXKBhbeNiUzC6hm6u8qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9GR1ewRWsZiwtzaw2gah36BWbxEmaM1mtqLT9CZgLc5vYJcdCF4D1jWe8kMKLVaVumxKJjx8BtDKhWqeS6ETix",
  "key1": "4ZKZg7HbDMfLZ53nLPWaydaGPXHGiNZPCoWyXVhPimP5WdAcqdqH6CC2Z5C94JG1ScJ3xFVghsxY7UXJTrFJoxeR",
  "key2": "4LRWDDmcwVnpSjRYisp6KUz6ypDhZ4gqjxNs1iXWdiwhEmKdxZGuoZiZ8Rc5Ni2sMDHncj8KoquygifLc3zhbfDq",
  "key3": "4ypDagnCdwmRv3Y2Tj8GzzanhdPGnZtnqKhNpFdLJHYSUQaMtFtf6CbY7ZrCjUwz8uTnDoqim141RvN4fAeGKDzA",
  "key4": "3HkQg3AhjJ9cwiNcYV8m3MCAcxxBQjEhaqHMMC775J8BLktdBiCEp9twdXz3zegH7CRkSwD4i25xvNsPUhG5Xiq7",
  "key5": "5bHvNEM2tLKUhYB4mSHVKGNG6NGymL8q2kernVWaknWJkXrEpwudEasRkdso9tdBVJqPWX8PFHw7P9BUmfR1Mohq",
  "key6": "5VEGdae9DLeGfqxrbjQS45ENEaFDyxc5Kp5HZVXd63ckiq1jkgRhtgTUyR3MZToKru1KWYC3eXNdcYZ3Quyse2St",
  "key7": "2Q6ESEyTgujaZd539YaiCiKA11PbgjYfrKNiZ8qrvNEU6kYHxMirqtt1Q2ooREbSNhApPR2YPETeSmabjt8FFM9z",
  "key8": "8FL6CVB3sZrqFci2iRAfdf1Hnrrw456uj7QvZk2LiMTYGjmS3EJVFep7YXfKCrpbRFM9Xcqo4Wu9UEtteiB7XDf",
  "key9": "5PbxKYWWJLQXKTamg3rQauzcS2Vy9LU4H814Lqcd1Zrf7sE8PXn35EfHzBSNoJZpeNkNhsUrMc6uevBvBK5tDGfM",
  "key10": "2nArc836GRXspwJtrNBUFtJnH4WVefvmf3wyYdAQT9qsTzEgYJkLQC42smthYG31kpEXRH8fEFEsmzXijdpHYjJG",
  "key11": "2xPEaRs1JADeyJmCVvVDYHZ35K4j1vbCywW4fwZwdqCjvwKBoBtxn89paGn72TYKrzSKehApCPop3xygDs9spQuU",
  "key12": "5N47LQZz5fu5dRBHrFKfqL3NPTW3aPktR2ozhutgxoT7jwFAkxCTNqMT7VT7X5ceodfkcCENz1R8r4zN5rkC6Zg8",
  "key13": "32qLnCowUXpC6bTjuQcWF6ZnJ98pSrJbcJVCsbddETDkUzBxexnqM5XTZPo4wfpLd77sYcEVkysscPL2smU6pbJa",
  "key14": "4zJpdj18axx1J9rof6TULvc8sgrGgtBCW27AAR7KmEgFKygJkmbc3QXD23VJU4GkouMrLzLQa2xX46qLV2dbcJau",
  "key15": "3qkVhACRytMFyoVZH15baEtXmNDbYGrqAVgjKhNnGAKjSkFtgFeKNLtGmkEoN2GXXU6tHdsAZKRMav5SpkUcLSGi",
  "key16": "AVN1vnMBCyjnyp7aAwWdr3yTyFmunWgJTadAMAzQBEkmFfevHQVF8bDRjqW77uLrctEQG4EVKF9dzPngLzcR1Kf",
  "key17": "2udpKh4av2tJb8iHi9qZwTy5mtxDmY4oqTscZijHDq29ZTi485xXHcQJRq4MZqx3AvuSGW5oDqwVEQFcwU4kkENh",
  "key18": "2jzxYbwkaLBFapy5JxjwzumBnpRq99mPk5evgZmsGhszotZUxysgmUTErrF5y2kdwSgvnJrcedZDS5dGa7JBfu5J",
  "key19": "3ZpizxcjX3vXniHAuEMBRvogN4CgyKGEPZcsu6qb4WozoLtjFJTz6M14YZtX9558dvMyiChrtBd85sqp7rZJt3uN",
  "key20": "3b44X4uWfkoHyehPUwJksx2VJ9XExX6x8oC9dmekDZMxZseat97VHQo31H4nnFBVKfPj6HZdgHPEXNDo1uVF1Rxv",
  "key21": "5wYR53ueKJaBt6jZE3NNUCoYaSifMGztAq3fuuMJh4MgtBEpQw4ZQLDMnApQrVU3VvruKkFbVs3KNoXiAhJtVZY8",
  "key22": "eY9B9hfksE8CFaAaGEKVNaUXeXWX6sc8WjUNnMhETCpN87j1pQe35RdYJfDz3EhfduEbWhfUtRERokBaL46jear",
  "key23": "3YcrZFgCa36h8FdktJo1QfgHGfF21RgsizmzC4ks45uwchGdXVLm8csrzWaA7Q8zQg6eZrWMu3wuVYYMpuB75jv6",
  "key24": "64tZY4DtG9YLATVNLx6nHGxyymMtebP1tTDNXbpxiwcJgPbwyeDCCB9H89MSFz9r1ffvmmKxdddgrfyyjYuHF8SU",
  "key25": "2F4ziKhuZBe73mRZArGf6rEcLeSMNyVR5cacYhDWCvbp8bom5DagaEmRZDZ4ET2R972oVUrycQheVu2DGY4m9hof",
  "key26": "5BxaRDUubjRuxUfCxq7ukqRXjviuzxwoHZ955pDDBmZ3F8PEwZptPS3mkhvTbtcW37WGQFHfRwSVabTMvQexJ81d",
  "key27": "3tM4MowC424yNGAK1sxgn6LXHpcUpkwtvEJDeH9QawpwAGb9j2iXYMQybmdzWj1oioUqhHpM5cSxLhHUuLkdusu4",
  "key28": "5ZHbdTPqJhMqDL9gHU8CGWbLxmJgYxtPjhkeF1boRzDb3V1fo7fFD3akgQD1SDgy5Yu9aitctSziAnovGVJLB7D5",
  "key29": "4dedGR8guBHWJmU4aimmpHecWa7mPG2ZAh6ggkgWvA6bQhSCNC86mdL7FXb3nnbNLobYSNeCJCm8DrQgQP6UpFcv",
  "key30": "4wg4r5v9eWJGScTjtKhvmuisyfNmQqJdiuPkdkAUMV7GhV4CoBG9b7TMbvcRzDShCwfAA17X6natmu7ZV8RLYfy9",
  "key31": "5Ra9AGM7wfVgdJmXQ6VYr9eiJkaWQHUev1hLJpm9Qhg37ZjoLyb8G8idfxodea5WRYB6Yvj6tZdDWtC5R7fQSZAW",
  "key32": "3JX4TcEpXtAXqPnGuEx9iMybKDByrJSkqmDFjPAzZ2u862qSc57fq75N61Qb6gYmmXpdgN7zA7B4dpAhtX2osGiV",
  "key33": "5GJ7M3eNejWSEPSZe7SjSYY4hbgvsWrQixcp2SrfQdA7bSw4fbXg1ZxoGJMdDb1RExE5LyJ2oFTUKKhicUeksnQe",
  "key34": "3pBhXGobjCF8YgNR8haKVJcQXxREfrBXFXykPe2e9CMkJe9iMdkZdNR5XMhrjgxVWdwWud2Zyo2uc5gMzwo8uWVh",
  "key35": "678WusPxkzVq76HzrbZUmGxVtaR11y9QF4jXNCNn1YNoPgEsrGdNtWMFRWkZQtvp98wjpJgq2Nr2eReTx1zvP7D2",
  "key36": "4WyxxQW7S29HpqW9GSddEmnztA5Fcov4e5sDortyCruuAmJcNpDuWyGaXS3RcKBXYGVTqNUyF2d3M5BC9wksJUKP",
  "key37": "5cE8WwUXEY8sR38hBwvNW8gtq7JiyvTvYy43PBAb3651vVNdrZZsx8nbHdyR7Zkryi4cAsUyigifTL6uFEe3gjv6"
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
