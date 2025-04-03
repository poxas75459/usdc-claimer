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
    "4TZmc2Hg1TU6Qmwfkq3pSdTq1Pw5MF7TRtg9zv6hzQqnQwa91gBPrRCacdxqAHKeu4wBdFK2akWo5CzV4QGnNkYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjWU95PSYw23FX7Jxibcq24PgYJ2VEM4gyRkf9YXNFtu48woYhugCSpuAv7fgiKEGM6XxL4qeXEnQn7G75S2A7D",
  "key1": "5pr4cDjWnq511dmkTRQcdL29dscU2eegbqYQznx3hjrdhTXtfiftbMiCV3K4aDMzMV3FsaqXH9GdnXDiDmWKpsV9",
  "key2": "DNqD5Nod22yYdvdwkDwHp4aM6Nx384GbvoLAdDYLEzkeVMbzb1cAFsbp9syL3XhQLLu2Jjzy2bSfBBFDa5W8YBM",
  "key3": "2nsBx2s4GuFpzwAruxJFG4aYUU4nhU7vAvAZQRfELfcVtVz6nhvGJbqboQqnLHFftgtF9nMg22SwvV3WFtgSSxUf",
  "key4": "AMg1QvDcnWENVWhRHGogcp1aRtjLdyMTtgjBkEmhMuHdJH6vKwDPVThNEuc2K7VEXDBXzjCiYY6GXVaQbapdJeE",
  "key5": "iWJV5A9SuZJXLL76gJTqn6U5YCLgy8ohw5P8qYwVUfHcMCdS1YnV7Fa4F41GgGt9CY1VsivxrQQ9LXdYc7GNLhY",
  "key6": "4EKqGBxUb3f63B9Avzy387U87TAqanMQ1HTnKEJraMwUJWbG9LmPtw73FNTEgopH5tCdr91atzkTPAjwcKLVZ1pk",
  "key7": "3CteEJneowpZFWiHPZoiYi4pEaktCp5EExmKNt8wZ4iUFrV95JxKJAX7LQE7qDHihjWu3kkWBq4p9djGcbN5c9hf",
  "key8": "3XiP823srxzMvwJUFMMLWyfsm8hberDXtddNNr3BHm8peXyekZX1U166Js923vZph2JtafXKfD4EhwuARkEwdPxE",
  "key9": "pEEjqKc7Qzq7fuDgrMXEbEJqF2HXM3Ft9m6H68y7vQTrVot6QuxLqP2m2g52kprWWmh34Fw3t9V9zNXoU6s7WMt",
  "key10": "3Dq4DcjgWVLRSuy2MGTeuoyLjQss7ZxQ2y9uNufsEHeEAJbeWipaSeHr64GL3KyTFLWoLY6rsx6CKRoKUeMNi5bw",
  "key11": "2zjpe4NG5Ejh5R1i8QGLe9wAc9QAX77auKkXe8SH4uJiCvjAGGBgSWAqWPYY9oiULvKSKxZd4vEtVBbR17jyPXon",
  "key12": "2XBjeEVZQkDdHxCaUm5mSs2uWzJEWmAFoZmk9MpGNoQPoqNN887J6rndnrFB71JJNuztzQR1BePF5JbkHFisTcSn",
  "key13": "64yR4u4JYbGZTQoqComqyvv8aTNUFJKyMkueB87uLCK8K7LiRmpQM3fV5y6fMXKzc16TbfsWmDiRvKESXxx2X78j",
  "key14": "4E6S7hAn8DTVdKbvgKo13woVFarwEL4U49nVJpVJuJ1K9iVzgSULXpN3ny8sHXt6TQT464VY2RaMWbDPCcxiwLZB",
  "key15": "3ghVizipRoP97nEvYFyqjuboN5cTQkdVSKmH5NRGaBKeDJUK2HAn716kcmM8fw7Z6ixffYXeMJaGayTGzwFZqouq",
  "key16": "2sTsm9CpyzEMnv5ht5orT31AjC1J4UHYkAU7VGaK7iS72LWEcV2MdwLDXWKR1SeKzfMg5tVSwiKEjDXDCn4q1ApZ",
  "key17": "3vYhZ86Qi5xK8CokaRoESREjVA9pMb533mZePmYuyAA2Vq9Wjvhj6NzBoGhdmo72QguWcTrbr7H9inHq7o6HZv12",
  "key18": "h6iQsGTJ983jmodkPhHRspC8xmrXgePu8kx8g1rhcFvwDeudvKDwR67MRbqbnNUbo8RBotKfjtkRakN8oCEkXEX",
  "key19": "3kMPQqqD418hYaK7mArduZhixFY8HMzERYitqJt25xXAry3HVKK3RKtkgPTij4zi7yW82Cpbf1kjpjA3SmNQ6jhb",
  "key20": "3tbSCwtLBeoi1BitVs33PHfHUBJdMLj9VPyLQRzWjFeaobnVgWQyykandFb61cqTp4hQGXKivJxv9PsWenKD4amG",
  "key21": "F9Tyb9d8meZLX6RUsK7s57yk9xevLwxWgRUuLbmodUvA7PDgDycz1BRNCZ7icvAXGZnHCr6x4RJkJ18gKsvmMuT",
  "key22": "5X64fZG7sgHvMcx4DAFH7UQYhvUiHLcfLVrpqtWsPP8XZZ4JxQqjJEgdBcSXrRuae5u6mrCd5H3pfexaqDB8y9nn",
  "key23": "2aYHzr5hc15SbBJqqfD4hEmxe4xAxCbnr54Hy3dnKMN7mmNNMf1JXFvpQqx9mf4tvcrjSVuLCst8qc8tvXEjwBt7",
  "key24": "2rhxoKekK6umYJfTYmuCTQKmgdkTt2Z1sYJNZYpJ1wmEHzB1TZLMuBDjArqAko8K8fR6BEvCAAUAi78mdfE5uWq2",
  "key25": "64SPSATNg6Bctn9FhqjduR8r68fhywk1EjLXQTVNPzzc6RSWkYPneSJoGXdvcB3tFP8PSVtT8z2ZCyQ7LvtxfKnv",
  "key26": "3K87ZLAxRBDg5KJPjoJD25iDTxCGQ334NXvA3aVoyuk44fWuryfKehRmW7XtGWqc8VshWtuu3N7conNd97feiga9",
  "key27": "BvPfbUyqpS8tTfVkY34sc6qhB6TapiEAaVYS62x1yGBXQ3op3g5x5K5hkRMCQHB2bkU7nQiF2ZrCsih2wsFrgN4",
  "key28": "2zdp3tXCzAoBpLmmKkFu7z6r79JTJsaJFEqaeTKwrLfSMEJ1UtFgobyECLuvTmfCQUP1M4BXkwbDduU3eY7BQ1Fk"
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
