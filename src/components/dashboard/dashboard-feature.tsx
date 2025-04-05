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
    "41WFsL6wPqUXeTEBS5Tm2RBVdrnRJbLX61gy1BYwAZM1GB4PsD6dJ5FuGaHm3vMVLAEgqf8Mc6QB1iXhsBNVrHAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMz2isLZmLJjgkomRYBRPpQt2GmbK8QuMgzaDhrj7QZBDV7egMviipN312kyQwsDEFNqLrBvdV5x54J1NZ7aWMW",
  "key1": "jk26Ry8VAfVXDy4aMx9y7GK1LKGCSsuQ2tZUMDwQgsPxEKnhGXCCK6tThSCtsJSPAQe2CFgeBaMvMikmdgp51ka",
  "key2": "2Fh7FtTCffbomKWzZVCDDxoqDtAmiDrVRBshzo76vzocDGnsrnjhV9nGAPVZSAnEgtDhf41ys2aAnSBtiKNdWiMd",
  "key3": "yC2xhx1YvgnEK1iRPDRzPUqJCtXmZysX3RWxyQab2rEAtDq5gVPhjRtemrVk3C1A28SmdgV1FcBL4AnNcCLR5HT",
  "key4": "JrGLosCZvacDT8LUPq16vBQrFmX7cJYS6MAES314DJAbbGYKReZZBfZbfTiA3jKWtRoo85r19qHYoxg1Hdgnayc",
  "key5": "5FEAvWZoJ1ZuXZuwMgD8LsG52WnLVSQRyjJ73YTFUZFdQBiEcbcUf3AbzegSnM823xSYy6BQGMEEpAE3QnGwrYEf",
  "key6": "5e9VUA9xaBxWGEXd1gKRj22yjBu4wN8C3czZU4GhjPfoPzThH8YVu3gw9c6wbD7z3mVf9aWHqwFcMkoa3mn9ygjG",
  "key7": "5DBPFxjH2D85xZQCxCGqcHsYHt4cf4JQzW5hwCPmLdX3f9YKkWtecYST6uwiE5fjzd7tmQnJtXegzdZ5zECT6Dxe",
  "key8": "5q9GRDp76Ncs7teFo9sMSNXnFghcxq7PTTrhGEFupTXevfLRWM56GtRx5uFVZL8BaJwAa4hJnksd9RDSfEe7Vfci",
  "key9": "2GFjXKGSQxcryFfmATHNZh2ECfwmSK3BrdffG5Lt4ZzuHoduaa17ivA3u2qXEgVEfd5j9LXXK5ohkok6fPRfMkAc",
  "key10": "5HY4RCHHvwZUGJRLPh8xkxcgU8EkGuuZgVVeNPBcSV7tCC5GswDDmtuLYbNKfsq5AEv5wqUthQqsc5111ZyHFn8D",
  "key11": "4UNyNFJzvBHKCsRdEoPqgAieaCTWzQEPPHvHNx8f7pD73CFBtxLScQ9TsSaMHXiCPFeoxGvYLqtnTD3JmGBj3g2v",
  "key12": "271Wi6td1kHAzkFZAKH8UiDi8buhGm1ehJqbeKndKEL35zKXxPXZhyjD4Fe7gDqFdJtgtPiqPeUreSbj7zGtuVkD",
  "key13": "3axc94xmxZABaeTyL8c8eafcqWBdF4M3gfprZSb7iyEr4Dzk9J3FZNgJmVcW7a3ssoqL4MG3s8fPeKUbu8BhRFwS",
  "key14": "4HhzdXtuJhyy13jaj6otiJTSFUp3WhAKEkEMVR8HTe59vzsDjre19fMEpwSiWFP1e9ZUeQvQHfNSqG32PdUJCyX7",
  "key15": "4ihwjdU846zcnDkCvemZPEJH2LcDb4NCBRAoXbc5bwWYuquPzbzV1myn5Nrmnsp6m6cwXnLME6bu1BLq1B4DCzRr",
  "key16": "fDraeE7bsyLFUKjqPwvsQj2nEXTojGBDsuQR7ay4fgW6xPrTe4zb3AkDPehUmLPR9nueP4MwtBSfYX9fJcsdnuY",
  "key17": "4dqnRGh996CbG6Jcn2wv3v5WAiy5HBfukyQKTH7wiDH4vs3abBVYzs2FLywKBETeYX4vRTD7KAfjbHv9sSUHad2b",
  "key18": "HQGas9sc4WPmGYUn9MbT77QG8eSj7ztykAn2qjidYUBY2fysAyzTxgrXwwiU4rd9fvnCMVC9o2AorhhAijzvkxX",
  "key19": "U1462RDSZ2qJx5niDHQBHpqQRdfkNz4kmXXLV5rDbKeBctxRWWzVumM3K1PLaY4q8xMF2C1UtKMisaChginQtwb",
  "key20": "3yBZjQ4gv1gWVDJo3oRcJtYBSr5g9K9R7rY8xF1i2Km75JbUJFA4T1M7euW6j138xZNUzbPhV8Gu2u2FVhJ7UVEF",
  "key21": "4CVnToyy2Zb2pjBdXwtRieAUeooXZvTHRDa1b4yiimUdPkgFivRtyEjQMfaR7cdSpWAkAiuDhuC3sz1Rrg64V3ii",
  "key22": "5krwh42zvL2MWJHBskD1qrdu937d84MYo3g5QgdpMFKsdudXV4VxUYLAG2BDr51gN3DHitWWFUjKnzFhWAecMuRk",
  "key23": "5q3UByQCvMTFvvHpfxHaReetFkYpEnGuv4B4S1EuYDawtEGxpaP1hN153onF6TnQiAwA7NfEtfZ3AYamr7cAcf8Y",
  "key24": "4WLenTWaQQCe45VJHLSRke91SkLCj4ANJhNozcgyNaRPe3RMxsjLKfqpRZ4Fu4sB82kNAEiCBT334nbP2i8EKuqy",
  "key25": "4RKAapVcbWSk5zMNRBgqvqXYFqhUtVVupLxpzn4MwSRANCXXdyaDNdDnMhdKgcwzUGvqtFJZPG44wUohQ6CUmQtC",
  "key26": "3LUYpCqxQ5NkLWY1xD7cc6cPFrpWfomgxjMDqKyS4xYQpWbAqqJxgCBRajeYadq3ihuYMrkAnUZMHZnmUmD6oaLo",
  "key27": "5jsfaKauHGAsRFZ3GyDrHAppyUvDWP4RtfgTDrpC4qDHZNiWkneDz9Fmq9wEmB4dNH3qTMX9RRzqTvwi2ktcJUoi",
  "key28": "2BKUB2LnvNsqgytaPZxAbzoWkTNDcwrkwePq9RU3AikTtYnmV1Jn2QYmfvjKaZrd2vqQzoaQvy5rfNiqgoxVz4Zg",
  "key29": "wALxPJ2DUkJfjMoRLWWbknihW9Dhm1sPWKG58iVHRsQcnKddFs3YCkwZCZg9epn2hURRYjX8kHs6gyudSMRmpEw",
  "key30": "5JaMobsi1PhhDYZNexekru8q5MyNoVLsrw4VU3tg2bDrt3Kpupo88RxydXbbr5wdNkf6QMtFeHGQL7z7GNFQmhym",
  "key31": "5vZtZknmuDFWvmZiJoT9sdZNLsgyFqGb8CQboUHb2cPeH7u4f4iRmQPJwWKw7YTLW6aEFXRAEexjieVc8RsMddXf",
  "key32": "hJkz9vAA1JMeFG6osrLgCqEbcHu4A7YxBj5km9s1fxwRqG1AapozJX8pbWztJqu9eV3ABsr17fawmDXuPcqCNwq",
  "key33": "5EU3diJuSoN4MxJCjSjFr7aHY2bgANxJrGBiXceJeyuv6uLt2jw34vWLEph5CDoZn2QeK8hj6G8PULX4uoyzLHWd",
  "key34": "hDHaaV14isiMqAnG3TUqRCu8dTBGCmHiXqR4ARQXWn7i1o4RmtdcLoqP9anHMwzi1SVyKwzq4mxLv8pm4RLFn8P",
  "key35": "2wzCPPaNxcjtkhYyVxG7RJSQMpyWKk1HmEJfX279ya6TEY2S4EPXbdknicQBpUpRB9AEyJjbqomKrTe4E3ENz1cj",
  "key36": "4gMGCLCghEQhrWZVsBXS9bKQ7PUHVdjCBe1n9hZDnB325S1wnpdjzCNVLpBVvzVRuLVym2U8QcVqSyaxNas5C5mw",
  "key37": "2nyjuUQMErkyogmg6RBtTjdboCzqNXaDiHvThMC6U24i24YRpog5iKEz77XSiHQCMdjKEw6LpLDF5LoxYdJnJMiv",
  "key38": "k6qLEgcSN2kQNPYribpDFBhwyVYiSzmnH6zfKgFxn3isHeeFeVr2knEFKj3gSSsoppfRtiDAgthQtqgKuwxrpmA",
  "key39": "YFgEMNHuEhBqBjTZPN2vH2aQqTGLZhtfrhhsxiSBcreYx7uBHKppCe9bEv4Cd6JFypzUsZWpYPLXSeVq4CxLQ8V",
  "key40": "5wUP9o6B3y56njBZcrxFH8VmUsEEUFvt3VkEcLvYDP2WUaRKCkC5RHWDMTBiPAymc89WM8aFpVTBPbkBvArionHk",
  "key41": "5Jh1j2U5CXmEsmtrGn1TgjCiKtcxArz7Gxhe1RrYNX3haHh214XygB8pFK5ce5mtyFznNTzG6FpGUAbzZeQeqArb",
  "key42": "5YHjFdvaMnAk7S9PVGaKXF3WLSVw3kMmcmcQCVEhgvn2to8uqazSFLhSrgZiz79CGjnRJGw8FuYmRcjfDDJzrzR6"
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
