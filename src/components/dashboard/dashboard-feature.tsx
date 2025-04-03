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
    "59uNV3WnYTLHZJGXbWsdnKDJc6SUuT9hXCBSJE67KgYz4UjKPnDUfd6LBpYDViFRmq8JAwkfy938sxotRb84kisS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXu9n51Sn6u25cFqcJ2F8xYUVpmWLoF7ESZmSdksvum4J22Q4ZhAgDnDjUPUZDHWwN7Sj1NWty6BAgVpr1UjEsN",
  "key1": "5XHvtzY3sQ26rCYuVxH9oiBLr5Tk3HPFVqZscKrWR6FQY15Y5YjemnhmFZiPwaghp9zAhxGRQWh7iXncZi2baE5j",
  "key2": "i2CjUTRjRvqyUuhLcd6GcWYkKQp7evwaYa2h4KkJYpw9ZfYxCDgAi6hNiU1wwwS5hjfjzTgJVr7G6H3ZPLzCXCr",
  "key3": "3jCsQJgEGcmkPe5BeCtEyDxBJrcHZm4xSMeDFJpKvk9g3jszxMPZngTYAjkYcqrjSxPYR1ZXiMTENgbykG8anSPs",
  "key4": "26axsTxvGoyhwK6RsjM4MjkRvwcP5vzTVW4Ej2zt2fW9QHcd3dxRhxJ8zuopFwWKs1uB27DhMqrBzu7d6GMbhSYA",
  "key5": "5yGYu8HttsJTtzKDBBL63DHCNwJyNKrzxDM2QsLMQGfSCpogoSXW1zcY4y1LBm1CtDeZsDHVaTYVvDcX2S99PxZu",
  "key6": "wdcfCMcZ5xsNhw9TZ1cJnKyHLWFBkGVoKfWX1SaG3zfHgw2xHMji6RMmdzDcJBkfWHnzUagNprAubjp18HwX8uF",
  "key7": "2dY5HDfyxPV3cUo7R6PrmkfPyRLPQFQ65NcqzgmJxi86yy7s1iHihrz9rwtZyo4xuoye53aqU3DZpwi1eZfNDPc8",
  "key8": "4YBoTaEojuFS92o3572ZTQD1dbZ4My5gGxJb5i898HBXwronoX2bYivWLeq2YxiWdKXmL6cfzkNT6JGUzV3vNFvM",
  "key9": "3D1Pd4eRbPAPpeLkb9XXaN2wpdgmwFg6oUnLHXk6KE3jRUxk4aG3UkNbr5KerVY4Gt7FAHH2jRgPmT6QFMaQxBTZ",
  "key10": "4tZkqZmB9twQFnxpLVESv3QJFnVfTqWpPRvCeGNYyRVJuwK3hh9yAin5f9QwrNE7YZxMCq1HHBTwcq4rovTtds2M",
  "key11": "S1qZpPDafrMtoZUmSb4jp9hzpTE6HBikc1DiTWtc838murvFwKZJ95bpmNyQWfwgBVuh59bpk2atQkrGcdcp3ox",
  "key12": "29ahtfQBjo42ePc88cyUNaTWmkd2BVgEVQ1GDCnmJS3PACUcBv893hZb639WUJKN56kBsSpu2fVTthPomzr3pXUy",
  "key13": "4JEheQY9Z7oMVGyvjgttKUqjb3d5UY3vTXEAGaGq1FZxjHtsQwCtnZrrs5K8CgYvSzb2cKDrMKkKM6cm8xhfTZKu",
  "key14": "qTdrnf8tJGEWnuBAEB6yE7qYwu6zZVtieZMD8G1p6TtQSCvZg6VXamJyoGYKEGcjpveBm6EuWieD37bRpQU6pQs",
  "key15": "5taswx7oLpeimAbJiRPKmGVDVShAt2MCkXASZJM2473TMhWub2A9WuTWtcibAyYR86zQykuSvxJ84UcwkvszGLT1",
  "key16": "3YSm6byNZe69qmrhRL8CEcfKQeXqgYksCuZ6ctiFvqz3WxGExiKPGwg5aTPNW5Rj1SYKZqa435f8tfdnfDemzkUe",
  "key17": "5QcvMJYHinzNkT1Zs3atTDGFebTxEWwbfwPJDXbcvwi6fzTHvjzq6iUsTLLk2wYVNzcpXGVDmdj3Rvqhi21jbsLL",
  "key18": "3hMbZSY8oMvdGT7ZJX2tiPMM1jF4aRM8Yp8us7NUfN6dbNBTutJWE24pEqJ69LxDH7wcwLLMCnAZn1zM4MMzUAqj",
  "key19": "4V1tNXGV7QS7SprHabm5xfR2rhFe8n86B6sxUQ5ZGWVUV1gDvZQyRh43pbvg95ccTpE8MQAGvBcpMWkLmjWdmhEq",
  "key20": "22GabxtKrFk27KQPkCbu2A2LEGJg9e1QRx5qb9SqssYmQLF8XHpipSs551msZuA2meXL8uNCf3N7QePpa7uammoR",
  "key21": "21bdNWWdYaoLtcCVHezBXeEgYPXw9LJPE56u4FbA4Z6UvzeJitgHH8BugFoQDBWr9FTenmUVcEz2PVMmoVEtLPjX",
  "key22": "5feYUHD1uaZcyb2cAMV2khVasSsZqtMix6BA8VDDYR4EKs3kU9jYh5YjoSvVqt45TxGJuKkbVVcfFRWYYgQG3u82",
  "key23": "2rkzwJgt3cDJwMmYvSu318k1CtRTdMkGi8hDNf1ADRE18UTjU5BFKdnSPVVyWMajoiqTZVhn1GcK6spqRMHa52L4",
  "key24": "38S7khic73P9DbtzcFRJJDseiXcxZAnQjrPQacxfjgZadqNdh2QS9nD9SusynNJ4XUXqk4URqdbUBwe2DMChDvYG",
  "key25": "zr4D8xWz3VZTHe3ej56WnMin4qThX5G1EXPpowCPw3MGKCycZr8T8SudFPSuFSpThVwwM5J783NHC4CV1Y1y7g3",
  "key26": "44egQCLi6wM56DLhwdeXdwXWa7juXqi2XzSL95Ywxxg5Hrn2qbmEt5myznw6T6ziQhSiJDtvAqWYzw3ucM986c9R",
  "key27": "28NPVZ8JyahBZg2Nu1rc2bs1TxQQp7ynSMbyqWSF2kbq9TspZMrkpxyRK4iyieVxMyENiRWBqLo8988nfgTxtZtX",
  "key28": "545w3Bejjup2nuFbY4JKnYgyovzk8kq9ujLyHXVVN8PQ7ETForeb8n9Ewk5PC81zYHhfEyFkjcMvDpRXWeuYdA8V",
  "key29": "23Ewq9mCkRX2pbsnXZF3TobdJnc87WX8EY9PYH9eXKb88Qmmv4MGhjCSpFGvo7y3HR9NpsTv7tnzMpLWDprT5pB6",
  "key30": "2kvGLZvopUujmWgAaMpemN8R6PzMRQ4HWJueX7uCVx6PHmEdN7qRk91VYM22Dg4NGsJVgnXw17fth11E54h8MbD",
  "key31": "4F7sv5ekfTdRoNcFhcg4muhkpSgTr8TZmfGjqBQ5zT9nLX1zYEETMLiV3VtANmTuKJkGnTfpgJwcA7rxbierwCfD",
  "key32": "53ehhc4YVj3JkzoKpAGhXwbSoxSNKxzZ3dk7RYtS1zz2BzBed919EfLEopZ9NMmpgrcPCLfZPyTPmizURj4xP6xT",
  "key33": "21MZSJ89AGPHHoNj88H5pPzeMFm6zQNKyzdgnUZXGsVst3HCdzvS4Q13hrb1HMHZiXbarH7f8eervm8LiUKUyJkt",
  "key34": "2V5MLUgjYVB2A9bUM9GFP7E9r9JsmK8x7NxRUUwcsXthDsNVNhhjvY6yx1zpEvpg8onXmpkWySTYwT7Q5hYAXAda",
  "key35": "2Csz3zFwfMW8n9XJGegJMAgug8HHDehTxdpHRKeqiiWwvVeDi4AkSSsxXnekgVSG2V4Da4MrrLXuoH8yP3nsb5Kh",
  "key36": "4ziQUnB9xokJ2GzfepFyKQiys9ebkQpTjr4zB1ZWetS5YfMLoTkY4H1hdYoCfgfLdxaPEPhfHyqwaZV8kaHzmMad",
  "key37": "5BQ6zULKS5zGz1F13fCt1Yva8uKTkCxxASBsGMZWwufkHxyuKgJzfWnXZpnf8NWf7q8AeGMwn4N9653qiaEJcbMi",
  "key38": "4oJZJLChi6drUzmtEN5REzdfJ412H4Fwv6wtLSi4Qu5rUb7TLZehpi4HRMdECx5bC6LqVm9KKksqbAYoQiKpccBa"
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
