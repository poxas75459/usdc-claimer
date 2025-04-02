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
    "65w4b7RfnzbEqTU4LRxjjr4EeedKja7tAnKf9SMvYp4NrFix3tSgChNYtnWKpBDcZGEFmMNAG5CJMPcNHTFJKK4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGigW7EfFowpPooc78uya1BzWXZ1gko12cp5YwSjyE5W4KBbgHsQMNg7E5dtvaS9ZvrfzyWD3fAXvfpNAuBwjGj",
  "key1": "Sh2GQBznD1GgG7ScccmrSsju1hHRmcpjQ17eK3MxEmHiXYVrVgZE2RV7HNSy7usdLUpRma5y9nzCTV7dENg9RDu",
  "key2": "33b2xRK82Cwk8QP7bzC1fTAANtyFjRSFXLQDxjcKNFiDEnEny2PdngEA2sGANsF9W2j91BN4PAZpK96rS8PJ59jH",
  "key3": "4ofdJ367MTY1kr86xg1uPSC5fDf1LURfrFk4C8kxXcArurbQpbhhZ6fCYT84Ch6WC8gTMNVNxCQupsH3iSDo4arQ",
  "key4": "3FieL2i55j1YBAin6zrZfbV6gJX1FvSjgesXhYwwrSsC3k2rsLnuNeH5TqMLha2jXqbRYiHELDpA7PWphgs2huRo",
  "key5": "3SEnapPoN4pFeUP7TPyJo9ixQ3DRPqsakkhix29Q2rJpUBXbrLohYmFjWYhRTYkhN5P1CBB2wFR1oTrj7Fuo2wRS",
  "key6": "2ivVQykYLPqSUZsTpN7RTVSWnADa5kfHVzd2gWSZgkmtMxrXits9RDALun3bFQcpk1aUKUUf68GHhT5wGfnxsrxt",
  "key7": "4U8WBdVFwoqeegKur286ZuysLCha2Z9qYTMWwZyeGxCkhHNffbMBxZmhbexBT7ekNcdAnNHTsnVmLzAzwZfdVUpT",
  "key8": "2b8b4DibjwV5xN7xPMTbpJcSzqL6Lbba7Sq882pYC72FjmGau3geifi2QGo1xrUD3R7JV2wGryHxx2vcSKNKLft6",
  "key9": "4ww6xtrzoXMbtXx1mi3frc598GpAhD6N2umaAJGAWyuk5u74LH8SDxzEcBgVBBd8mhHsSAHsrJBT8sNAnBumYmzr",
  "key10": "3crAG1YNsBvzzLgZpUDA2YKdhnXjQkPqg5bW57bjB11wVfdTMLQc6q1iyggEVWHmeZsGVYckifbBw1QbBnyzuwg5",
  "key11": "3mLqKbit7L6SfByqrQqZUfJk5H2rQwCxrd133JR6XdnfKdaKww1wzLxYjkRaQwHS64dtDrj7vjUKNLoLbNyzKFRU",
  "key12": "65nG2osKoAzrj4EyUNrpucaQfLds1hKLMeN5doeRnLKFNnm6DpFWuKoJNMyzjXew9VwQnyeeA7tQdjjdw4vTXEbh",
  "key13": "5wjb9HNFdTT6guR6xxbGSkvGnmrtq9teYQbpnzahtEVLcDXAV1uB92u1er4Zvh8SNypb59C9F3CrDKGQPyCfTXw2",
  "key14": "4gKVRpDBVqs5vSwwMJgME24izqkNLmv3WRLtNWQ7mxPgTgS1QTpZNRggLAiRdoqQjjzrcso8e4nBtmuyhJw9FZVo",
  "key15": "WYUqNqm3QG2716nvqcRA76oTmBaE8kRP95iSjEZfHE4pTbgTa64SfhEuHtxvrAF96Pw3Mu35gHUR6M5jm7VDUTr",
  "key16": "2jrkoKLv8s9fZXYAJwitebpPPU3uy3PEEft3Bp55Ze7JCNmThza1pZ8vccY5e6thU4qLrb4wnsJmHwHp2xyzmzCb",
  "key17": "4y93m14zop5ePkGATwUYTF5uy92Yi1mZ8gvseLEERXSz4YoXAMpSsKPsnMYgtPycMzTkSiYQ86wG1jTssb8piZeV",
  "key18": "2N6KHmhjYHLxjorQKujYN5NSy7KyhavmcEGcnF8x5WwNDyfFvoUfjSbVgBtQmsKxM3y2bcDKwxe8LLqFW5CiQ8uS",
  "key19": "28JsAZnw8qCrwXpGhhCfCvf5cMrk5ER6tNvHyBqhBDgZirQsLBkHxLjk6pMaz7rNKvyDwYWAQh6pUXQhTXsaLfC7",
  "key20": "2dPmSQgcLWY4r3S436z2NTATHGfspYtPHgdH1mkkaEd8XFTCnmTqnJK1P7EkpDm24Vrc3oXxdmMZjTfwbxxRZtHf",
  "key21": "4pCsBHN1F91KajCiiRvRdjqGVohXxPgcizkWeFDYfvYnYFqAB64LBp5hXaseUBzxCnzepBKBtaaiibNsk8GyCH6Q",
  "key22": "4VX7scdKcLZmJdFGSfdeBTXUu4FdWj4e7sP4xXEer2iu9Cnmqm8eo9MKg6PsnG5AZd8Y3vFsF2i8CYouNFy4JnRV",
  "key23": "2i6kAMbCJUQSGtDBbaLoBAqwvDF3iXcjo2LMqN8oT6iUn3yq2MobV6LXDtPMWQnx4io6MMhNMALm6PX6ZBS17pQL",
  "key24": "5DtWdeircqT1andGS3SQ7Ya2Vj4inKiiZjAnywz4c9pBERFfHTA56TuHG3bPUG4wdbmnrDe8MYnXRZr1QPUc3jP7",
  "key25": "645QEKuLFMmLkFKZQPiwptD6f2gH2A2uXX1cg46p2au3nb94czKf2BydCcmtRUFXjSMFUf5nC4x7LWaPzNayb4Pm",
  "key26": "3dBUsVhKsqhdnZnDvWHdznvPagdM41y5kwQovErmJmUskgmuPV9rXrwgNLiiXRFKc1vCD8jbTqfDfcbSKPEEuGMU",
  "key27": "27j5TB2BWX7xmd5rRvvorkoZ6Am2SQmfcXPCHsSHbTWBGjrukyzgXkHbyaeKiHfieR5tfrhfm86s5R3o9xZH5GgS",
  "key28": "Jw47tHxCAXRyMTXSHHpMXBn84ftWB43PHX16T3D13EEzrxbt1VNrHdx2MReQppUAYkfWH2jKzHtpCY16ug3gGcF",
  "key29": "52t13gc8BAv8HUjTP6t2eZupZQkt6Pq8SpxwgBuBF7cwTcPqrzg3CN74eKJdHUzqp7khtBH76BqebEPWN4qydEyZ",
  "key30": "3jfKiknWs35MP7RE339c8XuQD17UQhVAFyNf1kbboas26f38mV4dbReKqnsJDT8XDJyB9pcEgsLiBCph1YedmJNP",
  "key31": "5yxGqtdEEZ59tcZ7WRQnzAPD29ciKbambgeXLszj8zWfxfsCs65tUkgidLRHZjsBc34C66eX7fzrK1ZcT1rpxfeP",
  "key32": "a4tU9GJhaHcvhUCYtmHHpm7uLeSLim2xSjTC95mxn32E9H1Cw5Gyi279VwEuwPRYr9X7aki6SM8YRMDSipnEae9",
  "key33": "54pbNvaB7LFzaaFVcX7ELr62DuiNzQver4EyTrAgk2cbxMiggPQ2FPEZcmQy7YRsr78Euz6YU8CV56b3wyjyMXBg",
  "key34": "57ZRQo6RYUGyBNvZzJwcUn5ym5eSfVKdpnDrBpJ2hxeYNomCaKYYTd1Kv1u46LnRHfLd4hfdDFTm3DuNN9GwVvUW",
  "key35": "28gsb5W7PaCxrApXDVv32eHbymL6PkGor9ySDvgMZqLuTfVQqJDkd1rNWXTXpgePXDcRf1x9AXAKVHd4nKhg9mat",
  "key36": "2LqPE5itd3WAp266vadJPK1DkdanSWTfi6yKC4KjLcA6bkvSTMVFgGRSiTNDkF87qhN6VqeEL1dpEw4mowUj1mib",
  "key37": "5ueAvE3VDuiN7gBcy7949CfzicfBfVaFbtpNSPfBsj6RcEBvy6uSE5m49B8Zmp7YjK5iCA9see4cpf2BSbdJuWbn",
  "key38": "2zKAcR5GkckoewUvW3WUt6VZYYiy3zBFKPGU9tNc2PjQJuFL2F1mJcG7gnrpeEZMxS7xVe8iBsP88LFQJJpXquhw",
  "key39": "5ZHQg3cZFkghjUyysWdaTXYfA47zuPTVa7Crb1yt3FvHdaCF37qAh7B3STTxSXZ2utDPqt75iuqyZ9q4mTx5fKmv"
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
