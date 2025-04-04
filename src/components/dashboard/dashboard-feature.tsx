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
    "5ASkjQ6peKnJx1cznkz4aTTaJGFq74iDvfNa485XNkTFAE4WirZEEFW48Apj3r7AYfU3WWwe8fFPCj2U4e2MFQRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNtBw3kZnAS4xUANTU79ytLLLmtTDifYDE52a9dx5XjXJpyYTzYsiHW72uKfp9HDFaEEr57Ko64waEzuCZjUWQj",
  "key1": "4DQG3BNrunQPKLYRBcRWsjJfiQYnJiJrFqfUBAQVr1uGUTwYFwMU2CGiMTLZJGiJsr8C7RX7jfmjVkBpdoPXJDSt",
  "key2": "NmNTdUm33AbqoEbuWb1VraB7PXMqKewzVGWkHad5KTpE4RKqvuRmsEUn65eyNa2u1C51xfuLmYUU2oEkkNRqrKK",
  "key3": "3Hce7pMv6iXxXNrZXdHt4aUqkW3saacFLyJpZWz3hraBgiRsZY56Ce6rxsqxdedkMYPpywUWiBLxDgH1kS4Q1SzA",
  "key4": "2eaTTXSvrLiRaLd5Ko8aEViXnKxsVQD1mn5tEYy4jABYWijiJY7yqGot6BwSvmP3uqDQgiQzTJoL7nYobuHjSC3D",
  "key5": "5ncUsR9ubZT6xTpLQysBMWZd2Si2qXKXovkdH1FVDWDGPeh2MCd2CNF2dXewmJ6yYm8T222m6bQdb89bVgxtwGv",
  "key6": "84vW9qGBR3b9Usp5BbKgCJ4As1tLENUV3ND1x6UwJ4BMeYUPzSnCEumqc5d9sofWPeioiy9PhNLjY7ASNjL6C25",
  "key7": "2eemKssWtHpgYdw99dUY88aLkfnvBJc8MG1zHkZ4w9xLc9uRWbtZ86n9ZpKSrAXC8J7S1c7xbFsBSJsagqDTLkk8",
  "key8": "3JEror6YKuQZFKPhiEpD5YHQ19JozwJFx9FeLiwFHyxZSdwaQ82QanzRnD49iUxhdnf827DJNriY7K1KeWxkrsmt",
  "key9": "5kko8f1kT15iXkofjmMsN8yEdZvyLdVkHTJFVns6CKeiJEDf3wJmscgeTpCsaZ8LfmRzJG4StbCCyXN4xWoWshWK",
  "key10": "5s7nyLmSTS6qXu67JSYnnD9wCox8FnEgw3rbYxxrYxFozr899mCzjBV9SowxNDv59T29ZsoHvGMGsqmR1CQnEJgm",
  "key11": "4hPL5ssoRpkWxuRSWsHjErUkrPBB9DxSD236rWhX6WnW64wiyASyQ4chG6e9r6Yb5kwbv8wus9jBFivUmQDRkGwM",
  "key12": "2F1t2FPFYRwv4yj9pcXJbg8puukp7kge9Y9MWecRzCE7BcDm17mTNrDTmTTwV6K21X41QF1n4CUJknLoM6KnXLPJ",
  "key13": "2eVUj7AmXpNWwfAJDkP6uZDeuGoxsjzUAUEjvVQ5FuWhvBxrVqvG6FXzLrXWeNoWpscCnTynMbao5g2rQcx8kaKW",
  "key14": "5agod6Xw6VKTLx3ebsfyLRmcgreUvHJoQz1pSdyxmB29wxVymxif47wC1E3BzAgbwoWGnfysxuXJargFrdKShEw4",
  "key15": "Duwh7FSvSsA3uZnhAAd2xcXsSbtW7MJSnE9JPXfcBnPKDFvA2LKu2xeJmpQva2dm7f2WF5k8L8nB5KccPAwiYVR",
  "key16": "4sfpGoQg74dThko4JEJhQ3ZFC31GvMQsD1sAe2XgHH9BgVSn3oVEXtgAwosxwcG7u7jjsv33RCZcDjApDFtjk1FH",
  "key17": "2aEcmJZLqyppzkW5aFNNnZBhDA3gdknfr3iqmyAb3L9pzc2g6xPQrCtoY8vF25NXNn4qe91mK1sa1zC6EyU2RyfQ",
  "key18": "hgUKZahAi9cvBr6vs78a4XMTJQWgB31voSEV9ipGjUG5gABog3jwgKdf7nfp5aUahBF6uxkJ5fpoeNJBiPiRA3f",
  "key19": "5m7qoG7hRkh5HpKMeZJVnep5tb8xK5cfXUD254Chvu5Z2PsbQ1Zq88F3WYr57nZDR6Q1mJaPknEe4QaArcP7m8oF",
  "key20": "5naF8d8c6uDbWiBMqsk2JZhH1HAqpDr3sKvtWaPUPkHQv6Ahkqj57vBcZXmNDQuieM4dVpGcJY75qfJmqzcq6xdf",
  "key21": "5bMcMWwmr8He7a1K6ry9HwqcWgtA1bxddxr4vFpfHr7s1oCftyNQz494tXyX66ZFHthA1WjZAkZ5o3n5MKqqPFiw",
  "key22": "3iLpkWUzHnV2nHDDQHmrt4NgBwYWTFUCAkP7w7Trvjk91ujdfz9C6b4Zc8DKvq2ij2EPQroqRFhEkJVweZCFjoWf",
  "key23": "24wu9GZfVKdDLcomdjPgLm4qf64zD7s5FmftPeVAS85BiAgyJq7XGsjesu4swbTxKLB3vCMA7BfRydtnrQVSAjTx",
  "key24": "5ftu26UjtTtKgDCmZvi6rrnNZG6WHPCwrnyCPMDRHJgHgtdh387U1Ka6mWtVcJ7oHcZQ1gnEoSFzb5tNjEoexgxP",
  "key25": "4GqMKMwgS4dzUZsUWwVTwxCc5SRXy2QtAWw9VNssqozGpo1kcXrp9dqhUknsC1nRdHjQDnvTBjS4bhgZxLpPFeVb",
  "key26": "4Tmv2kfZeffCKY8VDEcN4rSmmeciU1Aesr6AH6DAS39FZ34ZpJoccN6YT3xuwZnpgJDB2QNJm82sDidh3hKyMxxD",
  "key27": "pMi2hrmdKizK9tMrr6H6uuzpAFcbofbwLKezvXME1D9qGiTGxRJ9Mk5i5n8aovzU3piXCJRUtJWXnd15Epmpg9T",
  "key28": "4ctbgumpsJYs5zg6MErMcPcz5mXiYVyJPasRoLrLECWm2nBv3WCfz8WjU5iKcX7n47BjWhJJ5EXEKp6SzXY3NZH4",
  "key29": "J3mz4dt9WsV8Y3ZNMMHLG9GzopTn7ZVZZhEgg8obVN3e8FsKkcnbnbbw85CPjbuZd9B6jMqMYEhE4i9d2yKkKJQ",
  "key30": "2Vijuz2aEP1zJWLGngs8YR7AmcMke3SncseBorDsuN7qkkg5LPxHSdiRb4Dy66YACoc4XFM6FaddYpdZjzey5eqg",
  "key31": "Kf29iPmcQtPpXZfYt8QALQRgLNWU5vsAHkF5q7Qv4QyDHoaVKjeJ8MEZUjh3ZGeCNGzi7bSRod32d9ZumceutUT",
  "key32": "5169VLrU8WmvPvywVLhmYY9HQ59viKmDQ46NHiKD6ETd34SvTXgmZj5kna63JtLodFFZVTCV7z7BrUp8FHPqvEE6",
  "key33": "2ti6bc7QWMW3ey22bcogo5C36JG3STSTfVLH35LUrMnhmUKZPoEr6owSNFNBTYNBQGfVqcSJuZBN1hqA4wExygbL",
  "key34": "5pCRgECceMGRT1Z9bqfj2nkvk9vq4VyvMAaJx2GLmvYwMN66NLCZmrafDs3YhPZq41zQbE9YJ7YMigkW3b5U7sLG",
  "key35": "23vz7iwHquuzhgJFxZw2oM9v55yZsfLuPDojWu18FwMvSYuN48C9CrekPcPsE7r8tCG7FzpKP8QrMBUfDHhWaRrY",
  "key36": "3gi5L4zHEuh6d7uaCDx5DpUhFrVJR34R6YKW1tiamceZR4rj561L9uf7pMoUuhujfTdWq5EyMgdp4eeVLS3XAnLz",
  "key37": "5b9Ju8UARjNjrGJ1Jz3Yrj7LGQH4Q9WUFqq9zVRtw9WuGY8TREpJmtqpJSPofbNUELKLipbE3ekkt7iwNExNN6g2",
  "key38": "e99yAXyx6yRPfduPGrK97Y8RhY7buCqRXzXUA1QaBRHxfjXkKsXinLQa63jGaHmAToq9BGJPsEDSFPvXmGdbqgz",
  "key39": "TGtQ9Q23PwBgy7M2AJRkh97GsdNAiLut77KCBaT8VNgkpsQZvEBKaJrmppDsBSBNYjc3x531KYWyKyWGaopADEp",
  "key40": "ah2yVnaVudS3yYkd7aeqa2QWpncdCL8VjxHwHtanrEgpse8xQMC8RucrzHNxKpfySFY8EV2qaPedT1pBm8UWFe3",
  "key41": "3sMvuMtdhJ6g6uYpiWMGrKKTutLFTZ5TzJhjwFszFnd3bzwkzUZE5oagwMJAvCQLEh4mHQDnaNj1pPxbzt6ACVre",
  "key42": "5UaKaMsy9DtL7jQchEqPC3zxfuZEKyTd3xppbKBzBnBmCiR3SRHYiaV2iFiB4coDb1Vo7ZDdTeYtru4Xy9RmvTGn",
  "key43": "2B3HdQYAfAXtgqzffQR8DKwQrx25h93qUjf1UV8AF5tpa5SyFBNCMEwAD8T32xFEcdmD1dwRNnycLjGSuvpvyDXn",
  "key44": "4wkeL9hANCUEqMo9QAEed97AqBKqjHU955YMLsUED546UFDCQm9tBckZfVeyPjJjPAzre1TjPSCCu1GkYBkwNGMu",
  "key45": "2pRMZRS246kYriSFsSgc5oCoqzm8wAckLFhHMDdSEuBHRR2gKk3XwJFBZmos4EfShui4j7mYd7zbtAPvvuhEiy5Q"
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
