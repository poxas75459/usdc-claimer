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
    "b75UMwiAFe82zAii6s4iFGBKzwxVkSgLMpRhEjZRCbL5u3oPqE6gqvuPc3Zo44QAX3KhuS4oTg6dYoYoDvmTPdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o77oHFV1NHicNowvZrAETUYTtLVrY9qCSD7JvuB2EoikpKWSPMBG1548i1jAmZBK1LFmgXc1DKGD8BpFigXJLcA",
  "key1": "3QvD4U5zW1YRMJZuQ85nFjCB5NkKkvVueQkkLKLsnHeFXCC3ifeggAB2SngshC2wMrtgo9cwwCFYCTLAAH8Kngmg",
  "key2": "3yFPxuYge5PxdH8FVH4g7sXW27hyv6JzPNTpD6TT5qeAkzTBH6qCtvXyHMLR1KUikSoFEN3285wxg8tK3iGwZQ2U",
  "key3": "54BtEKfohDawik5hnBQG4CHbyF56VfqxxNNSrdE1nmjymoGLJWybE1qGLw1AF4wWUqZRK7PfyY4fTkwwwvAS5uzb",
  "key4": "2Wyta6djQS2Xi2PFuyww19Watm5LMURcahm2GpTkpM1fbEnd6F8HZSzYsY9W8Ku38agbonCfPNDe8DNxRtwFSncg",
  "key5": "4QaWQEAUCxLTNN4L2FufwrYupeJPhA8d8NwwPwxJ5TBCDKTUU2toyYyBYk72oENy6gvbrdUPoUEZLjHxhBcsgYRQ",
  "key6": "3wBKTJNL9ZgQmWUGq2uhA1BB7tu8chajpN7mGqRSvH3cmG4BMTdoU48budTvH3otXAk4JDn5Zqpq2mWUHUypPwd4",
  "key7": "nb5GV5NMGEgQdx7Yqd8c6Te861zafCCf6X1UvbwoT23Gfbq4GbuymcQMeQon6Hw9jPs6tWS4qcB4nBvBHzgW2Uw",
  "key8": "2yWkmFAn1k2Y67bp7H9HXd1F6cgrAkBVSzkeMPYB5f7NmBdyN3GkRiJzWt1oHjdcANrkA92R2MGQwMcXsFaadpUa",
  "key9": "5ePW3J6HqyqCQFeMh8vpgMkhPXrCZomdmrKxfnQPmTJ55wziFPAyZH3fKxiuGTtX2515LeM8ifugx6uWsGqcA5dr",
  "key10": "4wC2DFqfp4KqzvPrabPLswtrXiaij6QYqQNqjZD8HJMkDs7AJ7WWhmxZg99LgTGq9RdoGqXGc6fCaCFyuhnSwjud",
  "key11": "oeoGU1F77TPWd35jzvShT8MNzo2ByVGppjYNYLPHRNHARwY7pqAo5JJ3H6LqosdNtHKJPinhotxg9ty8TuqtzrQ",
  "key12": "3zmVSR1ga342QaKbGpftAVNKuGL9Agcuby7SWW6cC1G7MQJkfBEexn4q1fVkQ8dbU2smyQ44biUBgXd2efETiTvi",
  "key13": "2fgLdEQhdVGLMoAb215yBkdJZiwYQH68dDgoutBXtvqvAzykkx9EevRemtS7RTd2iSBSg23uQBW4aV6pHE7L79nY",
  "key14": "5btWdAXvbZDNm1nGXgtmHSP3Pzz3MfWiun3mo8uZ6Uc6wSn8pQvpj2SuKTCtKKTg31CoWqRrY6ek1MbAVAtdM4nC",
  "key15": "4i8C5ry7NfeSfbyXyEQozsx67BuvATQd3gF1G4yXHthBB1cYTTbfNQ2jo3PvSCBFVLmKdqhxcAHmsUwFKes7YXW",
  "key16": "4H4Bobvfvt14CBrvNyQfN2c5sJ2EXKpRvMdFtSG2NSaRagSVTf4Wyt6njdQfAeyHACjBkdc2m24tcuqnzeBMrTy2",
  "key17": "3iwygbEX27g4FweWeKq3anbs9MATceaWd4xA4ps4WwJ94cW1fboMZU6iiJWFuEo7Q78FuHjvyp8FQK6pWNh9NE81",
  "key18": "2mMykQLVX4fzoRBovk8mdYmeDAWtqZdXuaAQghtropPdgQLUsvxSz3yrwjUqJHAUM2d6rWiqYQv1Vsydkgr8FRR1",
  "key19": "5G3QtKJDm8y2MMEP79uHJjrMEnU5XZ5P82kRkdoT4vfxLf5Hfo1AGZjYp8iA1B8H8NMY2kwAqu1f884UbSwyvKVs",
  "key20": "1eEzisYfd8DR21A8Q4wSkP2HbsyXDygjyw2fQBKMSsyyHZMJynzj6SU8whp43WKy8CdQUWaZ6Lif84Erpno2GxT",
  "key21": "tofFsDKMCq51i3oYbU3LnK7ZoxTfinMUeeFNzGbb2kwEEcevp9GjGD9mmZgQmBzwryWZwpYzxK2YhZmDwNFvCnV",
  "key22": "VUfLnr9athxx4YvR8GvVe15FR93QjNNs3n79S77goWrUukQJTkVurRR7ZUHmLjag4ZXTzwpCv7gepFXz4W78stS",
  "key23": "29fukUERpEVfis9fa5cb6scvuDssYon4eNFXGr9NpQVxoYhsNRPazA7GUC9F1Zge2iF3UjoTKJFtn4vcNBvq7ySu",
  "key24": "2qxjUtEsxrrAeQYXbTBTL2Z81g5CnV7uyKwqzG76YBjf9fjiLjD5j9xhmpx9egtJVxoptMTVwTmztvJ9kCrLSgD7",
  "key25": "3gt8KQxLbEW7k4iRzDwbFoGerSggYKwzTUEeFAbLwtTwmjtgEny8Gqw9BQJAvMdf7oJb3hoEkFPx5Ma6tw43gywT",
  "key26": "3DfkRsDfkuoScp2kEt6u7kXGQq7B69PmsH254TCPFgVp5DEacdz6hiALP2mF1uy8pEkTdreMNRYLnVdwZvvi9nNT",
  "key27": "3MwryVmTuSLVv2pXnr6GBdKct7Q4EaVGqVFfBDN4rQNfBcGPCoTnCmwoXf6Ada3bcyeGaJeTWCAPF3koGtmmNiL9"
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
