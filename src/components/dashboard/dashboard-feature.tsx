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
    "3whSEEGvK2kBfNf2duZ18Q4Mmh7uTWCocRP5v995bp224VrJzCztC3eWewx4oySydkQqdvKNVuJLMyXKhLkYsYjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26w7y1UxJH5cAzNAG3VgxZTJ1npUDPciRtiyN1xTtnwfcLiki2yXauwafkB8JY8LV3WJQELbeBKm6fEjVX3TFUba",
  "key1": "5AuD7KRdFFh4c8rpvL4Sb7bc2DeyidTyshAjZBPkHkY6B6gJ7fs7YCib8Gfu46SjJKLbSsWfwFHGa9Zk9Wc5X4KD",
  "key2": "2NEQrpC5NxSJFcTFwWHS7Xgy9cYnbjAhwkt1pLgXhVCakHjhStZP4iWNmP2TER3ACewguZg7Pvf1YyGVL3vxm8W8",
  "key3": "5j1tMfDq9VbwWgDrkUVvJyU5wLqP6nFZtWV36fM723Ew4djio9qivxpztQu7Er9QVGdniQXDxpsvSUknP1zPDDCo",
  "key4": "4r1nKoTZabPHdM5fZXQnmAhAoxMMUi7oJXrqXwAPvEefQzYgHC3XuTtdaQ5gqoYjRoHa44Dr2Hwh7XtkHLLk3HoE",
  "key5": "48sCL51u1o7S5iPChZMa5je735yA4HSzxKcEQRyJWeiqsgcssksKxV7QwtAyA9WztBtuEtzoUpXcpvBJUPEGHj3M",
  "key6": "5qzeCtJHYnATbpB94mTzf3iDi2XH78HW3evvAVcyDQYJY88zG28KP2qbCsYuNg4kqDrKBFvAbhfy9mnSQawHe4sr",
  "key7": "4jMyP1m3k3SvnZaomeZrWxCGW3CBYefWPFL3o74zQ1emhLvFeF8dKPJZu6azXTB9QAeCSTAc7C3Jn6LWBqzj6QHd",
  "key8": "3VCwTaYehd9etkyBnaN2wLoQjZ3N3E9g89ECVEue4txzJUZbTAifLS7Dd3GhqovUAHeW9zBdivhahF4Gv5sVsrBu",
  "key9": "42cfcu4CShvix46jYJey48p8ch5qyhYJ5t518w3hgaPB2KgTrBWrHj8f3i46qw6bad6nzc4aEmdRRz1wynQEVhMW",
  "key10": "58v82ScZEqhT2L3D5rhKc6TKk8U77cH9Tu3seFiF4RBNdgqNx6sdr2ACbEkhTkzRdWk2UPNy2XqZWUNPXD5SvnzJ",
  "key11": "3VP4bU47fF8pfkC2QaxabqvP1Q7fH6wy6NYYvfEbqyKi8LS4Z83tE5i8aBb8Acn94GvJEzf7JEMEuvwSoQByw53n",
  "key12": "fu7URvhjhWAP6Scf1qBtYXV8n9suLzTByMdX8Gho4qLsbLB6RvyWXGNMhFQ8fWE6mCXgCLJ6Fh6UJT1EpzAvMRm",
  "key13": "2MuJCYzZ5EDoaJNCygi7N4PUuMWQvpUukf2M3himRnMVkM3tVrEEmQ2ThtJSaRv3U2m2vSxV6TDkt1Hyw4EDBFQ5",
  "key14": "2DgVWRjjxcGoxkhrvHenkCY4q37kabd25VBcxyPB1rdecfeLjn9YHHbHi1jeRKpk6Hp8JBZfG4tTsn1sHPrhPMXp",
  "key15": "4siw3qdJfHJrPUZxLM73cteMvy5qoQHmjecKQouGnrssjTtdJEMMLFp1YGNBvi6ZQNNL1Bp4tRvj96XdLeeHQisr",
  "key16": "4pZH7cfHWkdq9rMKBRYVFbnV6pW1jcUegSrDX6c2oeKhDGRBqPQnG1Z8hKL5wpF2842aGbi9pP1cBdg5kLTXUC5t",
  "key17": "2dLfubKaSLd2fTEd64q2Lse1aTdqJufU7VehtFJqYFVkwDdzXFhWKQZiisiLRrg6sirf1wWhCqcGffVHVEcvDrQQ",
  "key18": "RMjGUxPG6NmbwjrnH9PH6dyuVMzbQYoXDpGHVBekdLACYcz94PLV9nVFbzVXfNnrooqgobvJtDvhykB8qWfY55w",
  "key19": "BCHGZhZasjN4E8zSmcuX33EAUbUQDckL8Pei17HZQU6Any4jwbUQRuHDbtU7iA47xaRoGxL5XBHHfmp3LVn9eSi",
  "key20": "3h9Tm8FjFwkAshXDJEqc8PoV1xACd5HWSjWjsyzecYLJJsGGFcnZ2QocktcV1TAKZ79aH7R6VUkr6rUPf2e43zXM",
  "key21": "3dojfFqa2H8Edq378wcNs6uMAZH4PVjLQrTEMua2sjokU7ktGgvciS4f3TJfhJMRh282P3yh8Vw1Uasi6xSAWHo5",
  "key22": "3Jgtk2WJhMbAi4TvLGUp7VxnAQgHGjYbtVh1BNCVcw5rea8Kxz6VeAz3Zzj7GWwxPhMupeWLQptJ3P5nJyk4XPt2",
  "key23": "5iLsmSyLs6gt2RevFaUYjXV4BRRjpSHPeqvyiqR9mEwd6QYHkZF6PKazCRFp8uKDrTMrPUiPDshZa9o5gngmPGD9",
  "key24": "3J4EDaDNNchnNWNb5MzF9uaeNn6JMjEEL1d6Q6ckpabiT13MpPCvAuh1SE3d49jZdxP4woF8hALHoWZRVB2jUKa5",
  "key25": "2d38yhcpRYaMTh3WQz9uoCiZMPppQVqA9YrmdW4FUhu1QNuG6n6u4C5BvvL3xN23844ovBBzTitaQDvzsmrWRNiJ",
  "key26": "62ioKWyptBrzUE3FcVMyfJGcWNrKobaAZX2YF9xmH46oyaaMpX2xeTtPgJaCw1F6Byc7Xa71HWwrV4if2rDybATV",
  "key27": "Kok7ZLve6iMs67DSviTEPCLu7jiDSjAnMfwSp9HKvuaDf9ZUaYu3ghBTXvgApW2QVJFaBM61SjNgtznS4tfRxXJ",
  "key28": "441PFoVovEBtseR8LCsxnXT1ov8j87xVjkhimLowKSHYkwUYEUNazbdcBCvykURPZibiiymFhKsMLEEBbKf8bban",
  "key29": "2tMbG47n4ZH1RPMnm6TGtHVZ2rJnBXeUjtFt5NS2CWC867Wpa6scRZ5DRqLSeuqNKLsX7dxyA2AJPNEC2Po9e4tv",
  "key30": "4PoZ6p6CaXVfP4F2naH7fEh9rw9Qn83iwA3WszwEKUXMQTHj6BJJWrNyLv2Nzn3ZseVwowS9ZXmiFeQKLpqGY8Gh",
  "key31": "cePHQJk16HThrLAo99GAfFcZFwH5m5cdfKR8bLHJdiqmVrMorXBSYsNw6wXA3hQa89HtMChJeqkHCMpyEJSwK7A",
  "key32": "51qsoLhUMqLSbrcvxMwQ8zAmNcvKyK1d4ersRH8iSdKDfuzggX8thr2x31RVvGZ97waDyPLEgAjo9bFrYaip2YDw",
  "key33": "4K48FMMnnsDPgxrxGyqJvSuhjnCMMSmw3GfT49X9bTy6xv2QP6sGi6mNTvwHWnhb9cxNcRF1CUfvW2QJJrQU1Ue1"
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
