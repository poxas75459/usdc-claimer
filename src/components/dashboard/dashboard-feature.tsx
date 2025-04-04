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
    "PJLabGZyh1rYCiRA2uM3KWsi2jT3q6qnV7cQFHACWCZCEJmqqmSchvBBJASH68DpVLyymUnJSYCvyPQ9Bs1aqKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428KuCDnku99h2XvzToDRSsqxsaSPmU6GCtTx84qQAD4ArCevZUDMJWjFr9WcTx3Fo7QAFo2Re3nqsyTsC2GuTUR",
  "key1": "5gWo4ptcB7rbpAAAmYFd1iP5S4AF6C5MD2TAMTJo3fuDSjEuPms5QydKhG8kJsR2RzVmRVMVbJk6xUSWKjtE4hb7",
  "key2": "CeG1trKWbhPVqcfhUHV2gLsEE3xuTaHwe3kERQ534gn4WJ62wog9uejx6MKAsBqPv76turRbEhKBtPLtQN6C7uW",
  "key3": "56RhtH49TxTes77qFJp7GFRMVTHWVAEXtzZFaJxgNUgyiGdL3wPmehBn4wpp4BgTBD7m8sYyWNeaHpqPrZLZJjaK",
  "key4": "ZNqeE9pBxmaXB8wKtKn2RYPfDDPHskTEZVNKLj6UdMqtjCGsqwKQpZjDRJaPeEnagLexjoKmtb3QhxhuZkPb2Wu",
  "key5": "4FokmT8D6AFPmqVBWgpzPKP9oGhrTxkYxHnXaGwoJLtpJirGR5fDrASwtBCkTbvhmGqcMnp19epaWYkuUVn4FJWw",
  "key6": "34skwGbSFbTho2Vzcxnj3DLAJdAKa24cVpGgGD45Sow7fwuk9YypTexX5BC8fnieuJacTNrXkaWsiNfH9YKAEq5m",
  "key7": "2grSRXkXCKfeqHesrHqNGogkh9aN9cEZkLEBe5fs2Pf2921FFLJULivRWv5F6K1uLd6poQ5HARU8gYQA2pdXvxN1",
  "key8": "2ugWs6LouLPaud9Hgy6P7pewUbScee7UrNViY8v36EeY6oyXWovnf9WR6Yjs9BZS1bsdoSuMHfFbJPAPkuLrBFnz",
  "key9": "1kAPiyuJn62AMpN4USEHyT7sYnhLQRdgvfXfoZdZaKXbGcJKF6ZSedcbR4tdnWS4oQKhm9AqpmnLawrFo1PvMVG",
  "key10": "4NiQiXNjakQsRhzo1Gsi9Z1dazEvt9zz33vj6CvMkNBXXmHj5gD9WAz3bnwBrz4XY7gYsw7Vf3ojuVKyYPoXiLQU",
  "key11": "2SZaXRENX1LevhyFikZgMMAmDHZPaGkMinRTbNMNyEDMp4oVJ7kUkczzxyM6oL3k998AaDcxF6n6RGHaqmwovVnC",
  "key12": "2NA4hHeKiWyZiitqwvamvEsMjzr1P1qK2Ab5LLr5Xw18wFn1Q6MnbiEBwXwEVu7D9ePeVb3RzEC3oK7jkkevV9LK",
  "key13": "24uj3ihrUHdzADMUHLxM1KRbgEf3Y7o72GV44tAyu5JhfVaMchkjaPY4MZdQu4BoLfSmSRuPNJ3YYq8XLQpJy1WL",
  "key14": "63XeyxHPdvR5HUqezBWfTiEt7sNKc57estoJ8KY4zkkUZ5BmTHbwgWxbQgVbHYdqr3tZQ8u81ZRRNQFXtiufBdyc",
  "key15": "2T7hmFEwAefARySMEZbMQV4ZGyeAL6fXGvGfPHVUE5MXQ6kvvRUsVRR78TZri8FZmaJfABw9nTBLuzr3V7voj5Kt",
  "key16": "5D6mvgtAnxA9Au8fCPugQeCHRxpPDEBDvZwk7QGsb4kN5B6cU8nE3LsUnkh6kmmzC3XXM1utfjj16Eo853uRUitC",
  "key17": "2yk5txzg4GWPLLKBFN36WN6pjhggCNgoLCp8icGjLCeJacdAUa3qX4w2uth6q96d1e6eJeqhiBxCpeSQw4pWNE52",
  "key18": "582Lr93M5Y57qWNq3wiSjPhWKJWHdJSW8dv48QfNUCBSpqCGRLFRJCVRKnkUw2SoQjU7ixEuXQ99GnxFVsrxjqEk",
  "key19": "5arM26RxZyZAnc3ZDLsHdjEqwS9B8XQAnbKWgm7CN6GypCsRoKHmguJYP1BVoArf7TsfDsLG8LVxtDTJfWvV9VCq",
  "key20": "3DTFsBVcQGv6gcJEjttPxGem17VmzacXqQ7tWdZC1JycMvxHtkmyrmnjL1JoTisPjZ5kdy7JQZMH9GWKAuvsWz9C",
  "key21": "2qBwgM48W3jasf4RFtMiHMYYia9nVd5oZeA7GVbRP8mHDCiKordQf8fcNjCiNKP9jdXgRkhGT5krJk4toPhSi2Aa",
  "key22": "57NtgW7nmsB2oJFLrLaTt5XkamyxE5mrUng4oE9mVsafgo9DDEJvAwxPhXE6NJWCogHh2z7VTU1irQ7qTMU7mcGi",
  "key23": "3Mqry5NtNLtCfQABGZTN4sCk7zQkPoydvFgiVdV8y6UZRfUTQVmX5MBAE2J736kvcYf2fYjgp311GJHKcoFNXmVW",
  "key24": "5ENBfs7trRAyAqDXGf5ehoiJvQTCV7MiiYAS9ygNiDMfgU6wo3nA9epHBXhXwnMLdzKFWrBS8YgHdJSsvKvZnRoB"
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
