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
    "U4SPXgNGdgwDxZQz6Gsd6EgoX1HLsYsGmJsDbHTjR6rXyqyJPSw3jDRCiYzTYvh3XW1WnksrZCGThTgA8c36kPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vRo5njaTmqEmYvLP2JgApFtZEETDRfpBeab5yFtePgMJdMAinK6LsfJs3PJj2uGgviZBLRAuqRsSzvZNWFWopFW",
  "key1": "5a8faJu5ZxFrGzAUY9QmZ8CzDTxcHBp9E84hzYuwVMjWPZwmcommortciFecbo4eDYDbFPrV1pKEPqoEDdTHZBVm",
  "key2": "Vxo3QZVkcSaKubLBsi7eVMTEqvMzbHq8hkXyDABRCkkMSxRuxTTq68QjpCJfAnTaf6xT3AQgVsT61YKJKGW4CUY",
  "key3": "4Y3dJxE2ECmfctTohKUXGHfqiKuuRvrnMGbuubGwAAFTd2EV8XLJ8EfRCYgPzuroNNteCAKBkemrRwSb9t2GBe1F",
  "key4": "xNMnN6AJn7zR6JT7QQTeso9eddFreDtiRDirnPEjrmnsruAfmF2ioc7Zd9g1qw51H7R8hgcggPWnPTLGt4CHiAx",
  "key5": "3wZ24QjJ65nEd7dDEHJLUC9pD69CdeAJUBR762KAqLpPcdtpANcARUFkDh1MzqrGRfbuXjyp2WUoGtJQDqQZj8su",
  "key6": "5VzCsjEHejPru5j1W89ypwew56uuf8dViHM3enbRKj8KmeAiRDur9VgULumMYmLTeTY7uSb64UN1DJQ6U88LFD5X",
  "key7": "4zjknHHgsDseuTk2aRKaAn8smbRSz6weum3LGFu78TxuCwn4VHqu9ysMiAwaqBWzj1bhnB5MeXpMau3pCEjcnsH6",
  "key8": "UXG9QhPXCxKiVhMSQ2y4nzBz1pvy5KfQbtmktUAaUHmiNALMp9D6zJAMjQrmM55yQVsGDiuQMKBqccLU2p3tt15",
  "key9": "SSvqVKcTuiZjKb99wXSREojLw1tjDYVj51vwpDZjYJUPhCkqnLLDLzKtbFjwZgryH8SDRLEs7j55otKxPwuzzXX",
  "key10": "3432u7XayrAoTAQFhDDBqFfvHE462SAwJTcRLvsiKqd3PxMJCibjmKYggn6LdA18wtcWf3Vuw9CJjEL4sbLA8ZKe",
  "key11": "4zPi4Qz56U2qvthiPHBq9ZsP77TTMB3G2v9wptYMNkbpKENqhqwEtCC2zV5rbjnCEPcuirBTPtwyRBbQPaHTtG4p",
  "key12": "4KV3RGKiA5yWYUwHi3jLf5GpcKmdAo224HRU68vZZQGhob4x4W9hzaV5GAKTsKPKg46iwLUvnYAa3TX67HYWdNAJ",
  "key13": "575eX3oumWciR99JXE4RaWyg6xV5ueYAyYpdbK4PzEuQa3r6WsciHbsGNuUyWZwHRKqcjZrTak999b3Qg7XsYdGn",
  "key14": "3xSAv7WQMVUA3Q2YxLia7cQnsBW8F57jeh8t9QTx4hWRHCRg7S2YMABrvF3z5WpXhWiSB5nsAEuUkmnFaodSrjDq",
  "key15": "5ru6cCPDr4FyKcW18giqDpdLQY9GXBXEGbcqm3Z47AWi2Cc4hWMYhNERHCkQymqcC2zNYZ6Uw6dDrEpTsDEcbhDk",
  "key16": "2feVfNYUM7Zee7VekZUYwM57Cf7RSUs2ZKpJxtgVssqpjmt1YBJzxwA7u1QrpykTpFd9usC4VeL8aQoy2TxTJTqZ",
  "key17": "Cj9iMY33hWzrHtKgN2DGxwFz39B3oTM6cMrkpRBjxNmF7vznFaMCL5VxgLM6dxGdA2wRwL94znSEwahR3k8wKxr",
  "key18": "2aAKFA8V3J7aNFddt7zoqxeP3hBeonYHn5EWAB6qLqs1o3S1H42tVsXEC57ZMjNshbdGDotwqoiQGnKiJ9CeKyMV",
  "key19": "oGKgQV3zqEbfYbniFS19oJyLKjqm6sPaFPxgdctPXLS9z1BayAmLRL5zjMD6ZPMRJUtXSdhuGTXb3vkXUuPaC3r",
  "key20": "2ZzTFiwj1tM7UvphweLS7ryhWsAABVSeFy5NQ2mCK6MHFFH7thfMtpyUV7HhvKtAnDWKjCBfksvD13brVrwSs7xU",
  "key21": "ZACeMQSrobpjzVnTfQCGLtaDpcYzBK8bv5xeu3567C6EkjSSHpZopZZ768bzLRoy9M39raLgMH2ARDDiZfUZKVx",
  "key22": "5SbBRkj8HxTJrf6tAcq3uEhW5y748SNR5MZd7JwKtJmfYNRHGFgjWcqLfBiRY474bzS1LUynnRzDm4YRbokxEyS6",
  "key23": "3VNaF2TrUtkC8RJihVbzyLB9DqHgBBMxhuervK7dZRU7PuCWhHjvZ4n2JHdyiLgnH5gnGVTjPokQbkXzANzVMpQY",
  "key24": "5C2E8C1ZBgj6TTMwoom41fUvAtyZ2b6c9dn6mMfYSNFsBx1ho7v9N94oWbRPgVcQKAHu6GpB83LJt4SRjpG4znfA",
  "key25": "PnHjAVhgCnE5xMqo4yvAmwJAq85pJ1t2YPFfdtqVurFJNnFZPU1zZCmnrsZgRvwLeNE3JKpvJDjYopiNDWyR2zW",
  "key26": "4ZK7Nnq43wm9GxxbfiHXQGVCaWHfoJLc8d4FcA3bCJBFR1LLozzL8kSQyh6EhtZW9dJ9ifaXEpCKUqsoeHwnmRvT",
  "key27": "sL5dyL97iUbfswy9VEMRTeNuxUNC3c9GnB68iCysCteEWVXqJp7aceDkK2eSswpw63stdXCsAPwaUYMt6m1yrPv",
  "key28": "4F9WHYxL2AYrfVCTw8HQi4w1BUgVVxPG5mY9RtUfJFQmiLkHuezPdCFU12PMVNoTQJRmRPSsHPFdLeMYpQPiQuME",
  "key29": "26cdgfr5RNGvZEB1Lf9MFxNBJKrNs7NZn2rrj29iEmdreZjbv2WfCG1SyhgA26NAUPN7n7kDsQkTtQNnffiNZJK3",
  "key30": "2tj4JfrdzVw5KAsiasmgtFNqcH4P5JYwbR47c44chSGsfL43bRJqu1giu5dAcKNMrEte8srAUWsj7hUJgE128LWR",
  "key31": "5nCqiz9Uxg4Qysho6K42np8xzJZvpx2keoUB88QD5ATF7b46ZRdTeS1BTYqVkijWEXkDBJWRHxJKsEmYssKrkoUx"
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
