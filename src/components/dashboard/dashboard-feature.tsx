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
    "5YvzZpcjHE5pNhyZz34UiXWCKVY9yvqXRBkKZKrAuUEaDQTGG2wBq358JUzYkJHbBf36nfvfHXLih2RBuHe1uT23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUb4yvh1SNqewienVMfn9jqzwRAab71qwEESviNRSij8zQgHP6HMt9BcMXRudNsYWHBrtQUAxbnfqhatXJtRkVi",
  "key1": "4w2nhxGY4mL2nkMeD9aUBcvw3Mc3P1kkSkuhKjF5M3Qd1qqn1GKxTG92oAqCNuyWEtPcCYJimrvs2cJV8q2JrhHD",
  "key2": "4BKe2px6m4WtQmT1Sdffo3VWtnUV7PGnzfgyQ1fdMjQdkmgysf3rUPSxJJdE8T3nGXckL4hhtDKX6pAbGu3FBNBe",
  "key3": "nTVRHaHXZyv3UjM1fEhJukvdRFA4wEJQergPcjQK4jaineRSxPwcaPiJgduft1hXGbC2PhC9yWTabM5U3D13KhP",
  "key4": "HGfTuPviCHfPcHuZy8w91km1PRCuuHSxz32GyKish2aNmWQaPa52QkupFkNLH4CFtWKhaHLBabsQXxzKzH63YrB",
  "key5": "4vFNo3VmEGn8VDNaHDQVeiBAh7E6ijVGqwbH9uByF7zkTrAmhPjE5exp8GrkqyZn6HgkrPGpXZHig1m3Av6be2Sz",
  "key6": "3S94smCdXj7u2eVyPscLP3tKfM89o9DSCBSa4CeTxwt9zE7FQq9rywADYJajh63vS4iVVkBQC7htXxk9sUtjNQ1k",
  "key7": "3ujonpV3a1aZuQ1ugTuq6cUjStdQvJAFC3cFJdrbPRh29taaPZsSKqpUWcp9QdfoHH8W5Yb5Auuiep1aveFwQaiT",
  "key8": "44zJWRwYD9rWxwXmGH6a88FpvQFFwhFWZbeUaPNnb2UPCTtnooohGu8jRBWQRtmPMWdPMNq5CL2vwSnwbHYPZvV9",
  "key9": "4Zat4spjPe12ees1rn644HkZMtGfuZr1QaKcYf7MLHeHzszEd4DHPJPSGdQ6HNzrMakb3nPYMGR6PHuM1f7Dh5xF",
  "key10": "5Xx55E7ixJ3ZuZhGJsnejknWh4u1Xhe1DarNU56GF2UVdKY4qc5pEB9VbR8XfX5DQM7ggk51R3MMujJQvZBdHQHm",
  "key11": "2anWCfxRokzx2nGK75A4CXv5SmbRNxGxKCoajz28aRp2PbwQ8Hoqjyy8RU8f63BjEJfESAwn8tfwMKK2Dhwoex1Z",
  "key12": "5gaDn7hWLBxLCZRo9FLrXC6t84t1ijgbGLTPenww89LB4b4YLnUWwE6NTuwKJKi8zsTxQxbAfoYMHeXixdJwZdTh",
  "key13": "4QDxYKLLtehMDXMZrqtfFqcTpMhpr7vXDQHW2HYGsmaDwyyA9pwnBPxfkhyvyqnuhUwqrANYPSa39S3Lw3LPXEHq",
  "key14": "5oBd3Mn5Th8LTifB8omb5CFva6votif72F7CAZMX4aWSQCTobzB1D7kdb2wW7AK2tpktAQFMCTSAcAE3gGnfYtbt",
  "key15": "3GTguk2ipLU41zW6bvP6wvkjZxjXCHQ93RPx6pP3oFJ1pAX3dWjY7VDo1k4ZAidtCFtEPHcG5hV8SBJ2BaQgf6PQ",
  "key16": "49Tw9JRKMyLjDGGAtaz9XBE2P37mrNcVmB6JNVBxFssnvo3s6oYUQGEpPc9cyUSCfUYK9xdXrVza1JZ4rWQC5gk5",
  "key17": "329JnamPXsVKKkRSWh6ZFKohghyQbjm1xXSj1sCdWhP8VWCv2XmN6PprYEm1fPaiEycv27SfsnzYCzbcCKfedBou",
  "key18": "5X2LBgq7u2jsH59o5cvpKMihLAhaHiVSKn9eQrsxk8EJBf7nvwDCy9gVekX46iGtCpFLKSVbLnCG4gz7o9TpL6Wh",
  "key19": "62yWEfMuwSdd4vDSM6SM7TnG2Ex5NbHM32yhzkmjBscZ4Nit9axgMiw4mABH6DEkNp5wQoFV3Maid3qccNvfqy74",
  "key20": "E2ywBMoFotTULncrXVuzywTSmCUADRmwAA2xTGzcorQAHdaC9Gizv1UBaDPyPhZ6cc5t3YxgGHrU48WwNgDhRNa",
  "key21": "2LMoxw8mZiADW74zbyf2B6VP22EV8T4Eqt2DP6Ct9Nm93LFj8k65fWrAKxnHBbpqBavhfDZXSxLUyNJTHWNwnjfc",
  "key22": "63tA1iZLfzoYSbeZdokJXqmqCQJuSsSjdL4TQB6UnZL1GW3tSKs9uXsZXrdvCxbQZ57ZhjJ5bNS8dBn8CD5TtyDK",
  "key23": "35fjZe7zhBjYq5S2AYuMKntjV5asW95CHeEZk2jMmgZhGwKPXwDJ9k9Umfy5DgHUQWdgWdLnMbES9JQficNNAfB5",
  "key24": "4enN65uyRifP1khrNpEmL6fmQdGdBaoCxPV8TFY2oDHeMcgnQFN4RQ3S9czT6Yc96ob16UmYnwg8cLnZUjCJeQAX",
  "key25": "gF6QavDEsVxy1bGSeyrdEuG5WsLhE3fM7yHGRoRdf23G2dMaePNn34zYbxpgVtpRSX1aNfY6b5Kv8TKzLN7ioFe",
  "key26": "4LnyxxcgdgzpmNj3Gckbp9rQTJdbukX6qe5qAgbGJJsKdFcFFyHCYBmzjkv1fLsp1HezDavxT758yorEzvjptFxX",
  "key27": "3sBrAp8ZGDDXjjPeGzoHDZPDeG2TshW3vzubxPcmNesPfNQrjmdpN5nRMvH8mnDVS9nm16HHqd7z4HtJJqEeqkzy",
  "key28": "ncPXsu2traVr8SxbXGfHHs9PeXokVypjmxFcXTFbmnzHibosKaZsNNeWLqRzPzEPXhGmMFBGkN9U9gTn4iDKvG2",
  "key29": "23W9jMJQERYvcCixCUTsgd8d3X4djcbMXusdxpp9BYBxi4RSc77tsuocqabAXd3pJch7Umqn77HRYmguvPt39CcC",
  "key30": "28L2ozViAcAgbD7akP2VofSazyUPNzGiBUPPJrzLTMkfvzU1sJKpqhvP6UF2S6GPcipFBXLqpLmkBrXDgCTsCc9N",
  "key31": "4reVT6ap7Q58pKuQbWi1FKS3Bb9AHmnGXAaekrAaZv1gkGG8yu9qeLYVoT2zcs7rT2dwdDTodZWjN6xNacsKsuGD",
  "key32": "67mNNLxahmsXP859cw4a5WC2XKGkwzaLjL9wRTcUecRhBBcArnfBKsn3HLo5jSMGHNiugJWcTcEJ1VrjAd2paEeX",
  "key33": "2Phmk5YWVKdpvepvdknGFqbiGAdDzaK5QoTiWp6hNvCcsXocvAvzoj4Edtvyk3cVf9P9Z2qwuX5qy6aJDEn8LqpE",
  "key34": "3YgGTTshKAKR8CZeuhHoHH4WJsCvYVadLBL5ykv8jW1rTDuCX31YmMH4CrLVMg3J4L5Gn3s4XJWRwEuwV4bzXDfj",
  "key35": "7B4CFeErRJaHWLfh7hP7pqGcQhN8XPaXMHRtfRKDMUtTk9kqn1NTKVKuwpTA3sp3fD4obGvXWuef9o4ifpTe87B"
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
