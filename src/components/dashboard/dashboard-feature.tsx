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
    "VNj61Pu49LF4K2VFQq8x1PiJvb17c7YWkzPekjC4PriNa9RuMXNQV17jdWZA8iWdWXwo4b9L38kefs9YjHBCyme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViGwKTG6K5Ffdxb7WEwFzsiKaLQHoXbvMwrTgJmXZr119XfVoqPG2Ttq53H5xt7A6gLpxDBzAgjjscvgqtWVFTb",
  "key1": "4hpaf6Scv7H2hjRTUP6fo5qNAPQhG2M9CXiAhxom3fvDkAYxGYTWajtMnTuh72iohFFL6Yw9w6tCKSVJaRxTzXF9",
  "key2": "4E9AzaZP8NAwcwLC8M8wocmvXLi3sY21tsnuXGPbZ9zJnnoryco6ecW9hunr6d2yDoqs8YMQqdky4EKMxw6MRURL",
  "key3": "3nD7GeBoUV8osycRLENS79wSjiiYwVbVfmMZqu4WtHTcmUr6hnRrobP3En6njLxof1QjMZhV5qfP6oxrhsfykCqU",
  "key4": "2qff66REoKfVGFuWY1Jus3f4ketnjnNaio7PNAN6qzyvbJMPu8PiErG8P21dcQJAkf7U53VFFaGiFayqppDgmH5d",
  "key5": "61j1ugMDrtdDfvDfz2AhHKWnHDuNf3vi2nJGYEqRvwkfPBJrhT77B49YSi8jP56ht88amhJHgHJ96wBN72UaDAPH",
  "key6": "39peL5pKvepioxAK8LRPMav64KLFA79kAsKGUiR7PjoNgkHd62TAaKbo91JpjPfDn6EXhCv8Lcr2AdTs2NcFBDVQ",
  "key7": "5Q32AehyCYQJjRKLZR7qKTRdRajgWRzbG6oNT5ReiDVKLXEsQ2WbV2h39kDpTiUbHx3XL5gpvgNEEtuQaQbueek9",
  "key8": "4hu8u1VwThca77dWRC6FUjK784dGg43D8iT7GQdWG5Quv2JZeHUKhJJQkVw16UwXVk2k5qi94Qh6a2KqwthZDYxo",
  "key9": "3C2ttUEj7i2dUhtRdZ5ZfC47eqkwsGNJrjDvEDaGx8A9vXEbKPmRQ9siXhwq6G65Gs2qxbUbcFr9xTcZ3dmUgdQQ",
  "key10": "4STkRy14yHxWPj76NEbPJhc16xLWwM7pgE8u4zkpDHxvXov7imbS7c2JkAuxiwGKofhYAFcBsT5hdsP8bNe9cFek",
  "key11": "4QBJh7qpwrGiradKmtXeNbPpjRtzHRtVaMzh8RfWG2D5VmZ5VH2hRoKZMvDgTjgjLKfmuUPqqHQ8CA6RBEJR7K1e",
  "key12": "gkoUUF8HnodhuLCt1zFfPkhwJWYFj9E6Y3aDq4YeKE14UJ4JTPNAsFjcUrvEthFQ3n76kMQgizup2KbpTitEkHU",
  "key13": "3R3yLKYzaYo7gHpGM5MdzrE84tenxd1h4o2r1ms6pR6EKC8kekRHiLShzMoX1FS6kBKtabC5du3JNEfRpyRy8twE",
  "key14": "3DULQZtAwtSaAQPq4ErVNs4U1h5nCQy1LSgtLUENnHBGo5DMmFMmpddpEL4KH4vDRDmoJ8YktvYarVvYa1h1Y3Mh",
  "key15": "4fqUeBgDoGPe9zEbkfULakcwZCYs4jTjFG8TiECFL2s3RJH8kin327vi8264zcTVaagrpW2kP8LDrnsVtdLVwpzT",
  "key16": "4B73w4Ar513Y89yjYqFtyxSAweHtoW9XLEBBkrV9Q99huLasdMpu1o1yF7HBN8bRpKVxjFAQ5AWhnKKaZ8hGpJY1",
  "key17": "53xn6qKVftYgUcXd3rFZe3PvLcfUzYomJz5wQ9HA9bBvwfp45mRb17CpYx5e4KQjSYKaYfq56ePoixnSxXC8Zbsa",
  "key18": "3QiP9BiKCzk7dMsjB8tdKfP8xc415SM4y5sGMrEkqSQocH6he7izsNecwvDJuV4TB2Mu7i2Xhd9S4SDZjtogLVn4",
  "key19": "2kP4cQRCLtn5ufXb6GRpTrxs4iRShNFtq2gH88Rd2a9m6BuoeLyosGLZrvtA2o2jQGRYHXmwB47mckdvQrC4dURh",
  "key20": "Fdo6tiXif2p6yaNQ9tQWoUmd62jvcCm19ixAcqGZViF4x1bpRftLJmWMmBUu2wuVyTq4apYgYoJRgimmfvrpaoZ",
  "key21": "4qXmonA5rXk8XzzLCgYDEgu8B415AYMDKtNyXBkRXwd2XVUA11TMe7WybhHbHocmyrer9DE6BkNPqWD3vXHKX2nq",
  "key22": "mPip5eYiPAo4uDKBpZxwq9bpoaCfP8EYLfqeXzY5zxHV1nLwdhwnJABMDnC8yecG14mswYkJgJ8NHgEhZT3mDbF",
  "key23": "5szAa7NF8SYQWns3DysxjAjYR7vnrboSr8thiJqcoGBWN3NswgYRRNtotw3FENA6WqfvZXh634ntgqECur9iAP7S",
  "key24": "vMS4NjWTEaHUYoFH9v5pZvHEPE2D7BkipCA873Hjz91bE9sUyCziaeTdjD9uv3xbcRp21fBDtNTMXWUb39XzVB8",
  "key25": "tQ4nPwcjoZmaoCwmVeJiGNMEAPG1w81YmEC4EfJfMu3Kyfm2ms2FgCTtzZhNxn5Fn3yhnz2MGufaw5eqA41Yd5J",
  "key26": "T3behctXLauUUsMYFBhtCZadXyQ3JQ13vv3QW1jwupc2sPAxPcCeGtkrFykUcY8NurHFEtXNRsxbn7dMNvdP3R6"
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
