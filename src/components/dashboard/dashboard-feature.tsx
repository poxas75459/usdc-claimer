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
    "4y2mjTKwJiJfhGnRhq3Q98LcamhCBvKmRH4CgDB1ei4HNqJd3z9owf8xy83M1QQwr2EBaexsp8dWGznr4hnqne2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPnS3rnjMPbL1BFKSZjARdPCnSsWGDSAuDcDdN2GPjxehMXWf21PRQ8a59zfHb4gE6ScPJ6wXNfGJgvbg1ozBYB",
  "key1": "t1RzAfb8Ur5pFRPRBed9m217FgF8gGtPWVaj5CmCeKRzeRY9Wm6corpZVrkLtXzwnhmCJbiDgZDCVxngNFzoTve",
  "key2": "3hg8oV8y3s1TcLNRK768LfoDT67khxDEsoDBRsBdHEaaCJjUj6WavobuMW2jFG5TMdvNRwCankYUXomfksxopaFb",
  "key3": "5VP6xwGmvYvVXssPtVVqvSV1xW2xqX5c2L5MXxxSdifiKXJ7hhQDn4thXgSLW2gyRn7Cq3BF2MskZF8wGTh9pzEN",
  "key4": "3aC3WAd4ELNqvNFgZKZGeg9MF8hWo8QTtdmpSsPubx687P3QiBvWsgzZx3sm3DLxmzF29JbrWcFEaFwkrsxWLsen",
  "key5": "pUnzLGY4BP6oQ2jVqbJYb6RAb31DiPcab1proM1KLQtmKy5xHsuFmSCbzZ8hX1zoKvm9ukgdP97J4JbceXp9QiF",
  "key6": "5ekQeLMcBpqHMxLsx56V2WacXsFbt6bVXWKQy2L7i5nqf5Z8utvC2GXaYV3TYcnUa8BGDed65rFhEGa7LYUgAHLc",
  "key7": "39mUECfzzHYLAPChUQvHNgpVGFmC5ne8YEZzjmVwfpERwyc6n9owKFinuFBLwPPsRRosK3B2mQLgpxKfr8xsUWUv",
  "key8": "28U576uduGHSZv1wBt31bQe6Ekgn7JfSakEcZUxXhzzC83U5b13tVGRqMZAP5CVN7BRFDoscxSMuRsUZ7rRWBXQ5",
  "key9": "2neTNNnc8CPFpajEnzZc2npBLx76quMQ3Cp7dpaEtRTPj9bqQWoCfMEYNEWb29hVtYgptWTDxLYUYsfHAU4s6AxF",
  "key10": "xSzviFyWKdjL5R9QgYdjoxW4GStA1FLzL9VhBMzmv7XVqN51mjHMLu8pZXP7kyDaWyCGvpWU8CfEHcBkUztc9FV",
  "key11": "2NCostZA4ddi5RFM8nQDJdVZk6D5LhcnGDrV1eGNjk1QpssKEjAwuLYK4EK6nL1nywi5nNy8Xa5VQRuhxWk5GCt4",
  "key12": "4NTxQCJ2JZ7YnMGVHCRxjGZfX7oQmHbVGw9rCHenbBHZ8phyjhcWZYsSQN1jcqMsPqGEokgMEkHiPsyjxgGHTruu",
  "key13": "5rh1FYDTiFjU3ZtX2vnCy7u1r1VuJ1GyRYRmst79oYkiErD4DfYzA2cU9GE4XUX5eKWVCBhrqHsR2SErJk576uF7",
  "key14": "ajnJfcvF93x4pkhx1yaRxKSvmRRGgQW7ZGQZarr2MJTNFYzwmthmhWzy16D7KDo8V7vKzpqFVZzR8Pu2dSebCES",
  "key15": "s6Z2Q5omTNgs7VZ4zi6m89JDnDVtMVAzbLdyfgFvaDg6weSJ4tE6gT8RXH8jJjEBZqNTn3bdg83tGeC1zQM7zyM",
  "key16": "3AB8VzrjT3w2VoCGqF2Dnoy8fwXxpiqyY41X9oh41RfnSjyXWpza5XE7FeHotvcgpCWVm5Gf8HikYgKtkwak6MUo",
  "key17": "4bpdgQ3hDc38o87nxNwxNMEmb1huJ6qnZYvQw3nQnooaVDRwuvMJLoEErZp2uoAYQMRppyuiHHtXpMWL74g5srun",
  "key18": "3eHkyQzVcmwXzVVYenw9t82ArgxL91WwdVgrSUcAtugouDM4kVnrt7mZjX3PAJJw6oFxbTf8Tn6GNfoQ7DPPKi89",
  "key19": "3ziadvLrbCHq3BtnzXR2GUnwhUuqqTSKUPxDcHLNKqqubKNiksSTvWcKASGEZ2ejQZDL4Un9J9c3nhFJivyhweb4",
  "key20": "3gA2SEtw2gMZe7xsuYjgjXwxXjFQ3F2omhd11M5ZdZcWbMaCodi7H6qwbmkDWgVFAjK7yHw7NoFBtEMfTn98pM59",
  "key21": "4ywmS49cYsQA9MGGFY44VM5KT3TMauMJ75Gq9MRLdtddCmpxAANSJFRivv2NsvnhexmGUfCasvXodp2xLQTTEjKD",
  "key22": "57b9cQWd2vFHvvqT659WMKJbfzz8PaJsNcLm4JC9NqD3iMzXXXdiYWTcWReJ5RUphZKfYLSWotkbh2YL1fJmZvAH",
  "key23": "3K4GhckcbCzPF7SYUXQXro2oqi13dkrF9UdpUSEgKsH3GydoAJWu8sfRj35ubfDetyfT4ZiFvxwxy3KaawPKe24r",
  "key24": "1wx9bCzHF5XBnP984mL8D5Qe5zrJdTD4vbpvUAuxe8P8cVAmvitCJcXGk3bHxRJnx5YEWLjxxVshAia9UaLtsKU",
  "key25": "vUjdft2Ss1ms3nvobkTpPnkwSY65D5D6o7wrrpuQuQDV36SVhwkR3hb8Jn3RHBy1tpK6AQmaXWfpUbEGe3L3qf9",
  "key26": "5NWixyTixUqat5zQPPgbeWKsGETnfqGuEAQFZQmLXXLjozoAcQ1kziCGhYujUyFjZJitMiMQxuaG4dLLJXs1ELpQ",
  "key27": "27daZ2eFbCdN1e7za4k1c8stsWR1YtTeK315SN3eQ4zWS5Gn5cbgjA7d7uy4jM5XSY1a281RAup1njdKzXkB6NUL",
  "key28": "4vh8ukmwizrThsvDvDap1N9V67RcbGQNiWD1g6tZjxidzQpBEXHN8wLERczHkBPZhuZuvxc5SeKuza2k6aE9N29r",
  "key29": "591UoVSZT1NNwGRFnrBfAHLHGa9QLGJjGs9jLrt7mzLejnp3Xhb4VHcwRMSgMwK9ii36yCCudmiL8VGsBninARWp",
  "key30": "37if8EBr4B13UEEKW9tFg9PQYotEw3zjvvmp6YBwPvoATjYSkkqA4XBxBf8VVrciwWdgDLciNXLYnZLMmb6VSgTq",
  "key31": "5Y8vG1KD9Jeuv16P3xQZcF4GEcYsGQy8NbSiwtihY7svvjkjLqqKgLW8bDZGz5F1Dmkgkm9F3mFPKCEm82CNFaDj",
  "key32": "2fs3Kec5BZQwEp2yye1iBEvvNWkZ5Rvy6pjnEVCyaPRyKPr7dWefjwbph3xKyU3ajLafVDx6cH1kjiaWJ8QXgnuB",
  "key33": "3H3NVru3akxygnK68BgNdaiBA9evqcjRt3X4X6emC2P3a1XZArhZqMzzYv7yQV8eSEQDz1h6SwNDn98ay1sftF8v",
  "key34": "5YWfpk4sSmLfV2fLxWVDZqwwPLa7bWsKu8PPwQ7wwJuNrWyCH8jRV2KW8Cdd7vAU6c1Vp9t83t7m977c6yC6g37N"
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
