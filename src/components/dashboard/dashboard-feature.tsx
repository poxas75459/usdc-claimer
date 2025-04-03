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
    "4nnDs4J34exguibmJYzn9tevr1DsSqJ7AwKYcDB8T9zEMpVsmB4m42odaBnm211xbV1DRHRBhZn9Zr7jHY4jBWBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWJapb45Y9grtSJvdG7ZbLHGbQcawPG1ha3NiVV41eNca4gLBTFLMUnY9UjEqY8GSHGK9qv7S3mBv2Ji3GL69dA",
  "key1": "5b1KLEbEwEY8TZUXVq6MoeByKoQmCtk3dUaWSWFVNbNBcg9gET6i8NtJGoTmNfnFBLYmVEC5tvqodRTSUehbo78r",
  "key2": "4fcAX8d45PNTYxi65Dm28de6Kei8fGnouxCTLBUALByvUZhqEvDozRKjpcTEnL1fwsVjvA2qiqPx7sfLLWmEzw1N",
  "key3": "emV1gzZnxMCCYXaWHB8gtaYS9xmJHyWc6pMZgemqYYvrXrdZPEiDhRDFrrio4U319ofbaYFhEsh6y71zX9FmyAA",
  "key4": "zbpMPyxrdhe7C4yV6knaucYumEMWzAUfRMSCjMdiEGYFEt6bwdTk9msX6cPwtfTDiCMEeYwLneTaKRuYVLdogsZ",
  "key5": "512F8oHP4ZvQEWKoJT9kxpFeqAxafYzEH1UC9fCVsipHDhbw2FhJRwmgi4GEdL2awakvosWq8d2n6H1C7FAUcRw4",
  "key6": "2ducwZ8hoXiMtv1QWQsL11eqLipF9ve5H8XoHvD81zbJHuKwwR3CnCAaYf4jSTgF5kwFDVx69P1vGZzUtg5Atsn6",
  "key7": "4UL8Pnxna3tEvYneC6xFCfhNqphQSV2Ch8moVYWFnVkTP1KmpUJDJPcNsCGa5ERCUimB3HZCCmyedh72TTi2wGnM",
  "key8": "2ajN4PW3VrsHavfdWmu8MfLdovc8JJx9x734tNbLAJjQYX7X8M1jw45jhNNWEsdzZvT1KQGdedtPsxNHxcWNYthS",
  "key9": "545sSerjJtxho4LqaZ2xB1SMh3kfPZicfcYGciMGPomvJBqWJ8U47vAJ5Q6XhyTdGKtgVGCFCZVdNNNhYeVuUUVX",
  "key10": "FD8yvtkbBHXf55cap6NTsnvuFaoK7UChPAmhodhRDpUAYsbr6dYBebnPryrvxuZBGJ7LXuVCbki749tBWJF5EFG",
  "key11": "2FDg9BYR1b4bbitTBdjSDkKMRnD4j3nc3kADAwVjh825DPJ32Z4JoPbbHurnXSzZN2JL2gFGXh7nmpT4xHR1Xh1w",
  "key12": "4WTHVwRMsjTUqjoWE39uDZB6rn1J8GphNBxyB8Wh8FzCTqquVXrpEigbxgz9vA97JnYpc3bAYfiZE4AH3rJD9JCH",
  "key13": "4DnXiAHfaQxTX2YvvEJUkA4QdKP68C2Krzee6KCUAjK1JF1zrCjVmPipJXMw3wnUdL7xNyoxEHMREaGHDD57pwUe",
  "key14": "3PfQtfLvUjyNb7HVcfGYCct9QLMbH8Ns16UgYjookAMeHWDUndtLT1VgjRis5ZbYfAKf6wTr5UVP2VX1nRq1s1Fw",
  "key15": "4YMs8BKmSRHidAXG4jnM15CVzyua6GjWNY7kZXiiKEAhw1QJvduPCoDC1azjcEZH8TDJpf4zeXUHLED7g6NaGq5Y",
  "key16": "3egP1Msjh7p5NtZMQhqyfSeXNzua4oodDGt4ZVRpuYkYiKTAgqUqG6i32MLPJyAaJmwMoX4Tm7Jj8AuwfqHbBcaT",
  "key17": "58Q54bBVg64uiPhxDWmbMpJvFdpShaK869YYJwUttC39E5tww5rPfYZduTe4PgqUAV2qmeKvZ4zqmw2vGi81Co7U",
  "key18": "3Gn39q2P737JESeaPP7Zw72VKUXiemK9TX7YrF9W8H6JfrBowm6fi2YpN5XL74VrNEZCLZNDK27oVSbAtNjFeZr4",
  "key19": "24KTQYA4siFEZdaVHw3MuagfjoyZXUBm8PK8Rjc7RCF4tiGHwVre2As9gFa4AXkBx7A61Jkih5bpQJGjFFqcMERG",
  "key20": "44cE12y6niv8fiFQMbC5x33Txbe9EYfMz9gMBmynFYPqus2tTMfBpg4sr3bnyD4qGWGAUdSrNzD8UkjPdtdEoH1e",
  "key21": "JgZSkYCRnoHPWwQpW4JZoPxqkbpEoYCozscoSbJhQsztuTebT1X5Pc2DRqJuXsC9qKQDJc9aY1Tqe7akVZP1YMA",
  "key22": "YwDRHx7trivRG53PPk6r7nhPy19jnuW88oQMPiKA6ZaxYuGh85XJWRW12CuPkzpQSnj8fbHDKR3roYMvsVJUEMw",
  "key23": "2JyE2YmvdQXkXTwoLkXevwMrvwXiYa4xTrSnuXL31GHTHKK8PMtcsf8UhaMGM8q7XZAxSEpPmAzANf59z9kua4ZS",
  "key24": "2a3ZJDjNz5AnNLGfdSUZAwc1bGCvP1sb5FJHdWfZgffJ5b86T54bbmyZfPxhai9669qLBRtwwanvfqM6Bk4Ex5jG",
  "key25": "4n5p6i7memAxYEyPzmXoKJ8JSKGFZzWEcS7D66wz8XqsjGnZTcf3aTCuQV8sXeyToD3yUiE9Hv3s3Mh6Rse3jrxo",
  "key26": "45aVjyee3EKpRuSQ3TxJd95Skz6YUMrTya7NKKn2gKFu9aupmTCk7UNtUUpdwjmLwqYf939XCbqQTpsRjzdVLscb",
  "key27": "3fhz7zaTXQ9sLeNgxf9PXinAnHTfXYX5eFJSmUPtTxJjNwac1xRRjy7wS8uEFJib8Dqv3Yf7PeCXZRza8tDYAmoZ",
  "key28": "29kHcnKwnwXoh79ZyvXuUhUd2vbGWySnekjGoEuKmM14ZQyVPYzmPFzoAt4ELVfX21Fomsq4PMcovEaAattazE8w",
  "key29": "an4nAv2NfbANmZN24MTgLRb1KbVMxs4k9NDTrSE8rz3VJ1fg3QcPnBSJwBcwqMFg1r3sAoZxVYWN7fTFk4XzM2f",
  "key30": "4kiVzgRVFWJFEtCEnGZ9nJXKvc2nmLWRmVVFmxmqgthdwqevKC3eZLkmgPTyfhusjpTEEFGWahcSs49E2JDmonrQ",
  "key31": "5fULzQBHKfyeBpxJykU5dbYhA1AKtqjkcG3aUojvsEyGQcWDfav9jVNmAA8zeYnNAmqW1ZuGD4RNRL9FxQ1xbfZP",
  "key32": "ZTLXXkpMtGVJBtwpibw91NcXUvNmzWRTBrXG2pQHwjQQRYDs96LU19x4kiwZrvKx6CdstecDhwFn2yWdceoP1p8",
  "key33": "247AqFe2ahasSBBq8D339hJN94K5YBcR14scg1VYXwfAyWcwPxR8n3R8NS9huSxwJjSpaPCt4WG16VCjjJApkkiy",
  "key34": "KZ1FN4NnyxwtzpNbmk9ApjuiTvz8EfL1auTUhSdq8XiGMQB9hGwnDCx74Z3bmTYEfeb8rJYoqfhb9rCQi9aAkpY",
  "key35": "3r6x8CqGGXNDe3hKsAgmxtAQEbNPxQVCW8gKsoCvgPFXiDgqJxz3E8eA1PC7Rr2cdGm2tcgL1s1PTi8qMPYv3usD",
  "key36": "f8p8JMLxrSFqNRZCgnZ9xb94uVHGviEya8fZwZdZ5a6Jm9daQ1JVCgHVMrLzu44pkHfAFALoTa3k9WqiSJcUfLv",
  "key37": "5Tc1kj5azd1kFxZ2vCS2eDk3C8dQaMV127FrRY7Mpgvnb8mhe6qEEaPHFzKyjuDyJ3rBUhxVLbhrrR9DCxXvg1Nt",
  "key38": "65gtQrq1BbaoVbxCVFGZwWv2Shd3DjZnbrjPkkt74fvRgj2uom7EKFqUdqciLLHiGP53GQjGRRs7qDmdSwxSHMHo"
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
