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
    "5wzwkJ6LjCTW4ABh7RaEr1ggv71eWHddS2vCKdQw9DodoT7E2oShVq5oxyQZfWuvQ8wfvt9mkb2ByKEHsjdb2DSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHksP7kTL6kiX9vuaNPJdfrA7xWTgjVYXeW4DKdH9if8EJXDLog2tUyLBkEN77fy6TqM57fpeBsJEsZ8MPV7NVV",
  "key1": "2sWHkSGkUsppDqLaqvn5ppoQoQKocmAvTXL38V57auJ1HTR8252AFaG2vsiYvvc3gycjYZbBomK6QpWa3751a8e1",
  "key2": "66sGiwrLYTbZbfJkQuLpZsyykSS8JNHRV4vJXtUmBJNtH43XDXNnj1fSAJD9DFp9EoVe5y3MSTjPTCZfMTtiG7mp",
  "key3": "51VN3DJc2YirANGetpb5nU3RGK64q8HKcyHzAbkfo5RXTUm8We1BBLWTJjyoerQTWkJyaEqLRKvtwh26XWJCTRTU",
  "key4": "2sSTEpVWveQtnoiJLFwEN1y2AHxyK4up7dbFmcERUnmwx1WKc6EeK29SWwbnNTWqAo2z3hGZ87t8mJkF9cD5d2Up",
  "key5": "25D7oGLHvntAYLgHy2LQmfim8neV114J4o86xE4YWmCWuurS81VKwM6Tw3akciMFWrz9uj3dEDjz1bUdLytvWMkL",
  "key6": "2JmwvRw7VvCygEqaq8wfDyNxnFtE6QNjxXcy2mZDXwzam6vr15LTuo9vsPNhMT7ANfecjzXskoFLTs8hhGymcU3J",
  "key7": "611f3xNEFAyEAK9LeWoFKQzyDAvPQRtYoyPunzY35xPHRTg3dYmbh3yXByuiDvQuEshbfL2k5tZVary5zwT46N3Q",
  "key8": "4iPsfxNwtXozVv1uwG7bSrVgitiPEYUXYdudfE2NiBKpEV85krz1guw2fJdS4hcSSJ48aTqfEZEdEkfXrA89daKw",
  "key9": "4LuhiBRt2xqWEo5PjHLphGxcxGLd9UAPBwcxbVAV744B7WjtYbyXSrYQ1P2gxJxQYqSoez7YABnJsdP5yj5xuNZ9",
  "key10": "4sML57ks94p97vo5guNcxqaoKHCZJqiiX9nYboXk5qmLpS37F6tsYTrQHgt7LYxLDFHEHiU23pbjEDYexD27USAR",
  "key11": "5pXXe1AYCVwybm1F6FuQTURgNL6dSAE6uNU1REVKu93kCtDwiT9KFE6gkjitQuh4zop5bj7XZ86arq2HGUidyL2f",
  "key12": "3HHWDQdys43Q9PZwopJw4GqD3aLyv1VPgPHHtGUn2RD7JGxQMKgQB1i1ABDLJKXh7uWwSM19EwCMRvgJzKA7zSqs",
  "key13": "qjYe2k6zpzhepHRmAZ1Fhc7LwVZwaVXMLXNo5t96ud4NUxA5BfDmVkbU8xbeM8u61Zud3dYEnZuBcoDF779sLKX",
  "key14": "4gariWrFkM5QtKMX5L8FMjfPJN268AkkhRLZCqb8bPrGJoH1U3kZQARCiGDbp6HNErsV4Syc57CEBTrErPBjdnTg",
  "key15": "mnTF5PQDzcgttK6VwjxidYtyTEBXPhSnt5otGXX7KpxPtPUyiKbgcgmoc7cKUBctUhsPaih8mGWZkExTZpF9YQn",
  "key16": "3Qd8PoPgGtYHrAyNb9fotVsLxccHqdm6a8fMWL7uiopw8CUChm9RNgbnejUVKbforxzJjj8tGurnRfyfYnPBsxGe",
  "key17": "5Ca2qZFQnL32SmGJRxzSQRewmU4GUGeNxy3HBDxJqSTwFCVViQk5DJff2nSMZjArx9trWx7dSupt6aeg8TWELqMN",
  "key18": "5RAbvjCA4S6WwiMgQKXWD4p4knHQ4PHe7oygw4FJuajq9QUpiSSipbcTG8zep3MW1tRUcnBj55RMC1bR3Y6tv77p",
  "key19": "65Sv91g2cqwsJfowhvEQ4CKruwy7aNUzPUTsaabjf74BYvsqLVBJzPu21S8Nm2NqnmPT2q558ckbysrdSuVDgeaZ",
  "key20": "67MYfSFfNP9CGbiA1dWdXtsGYM2Wpgc4zgT7MTLd3cDQnNjG4rBroSEHZthKD1QfZkKmfMizYFSoQoEpBJ6gVtfC",
  "key21": "5YRf7QbkToeguxp16xrece8fMhTwKLxZBGmEw3rCBi8HBwRdgvTRsJhyjsnDU6kH3fWGt3Avu9M2Ehk2hE5LrjKZ",
  "key22": "3NFjv4vLc5YkNg3Aprh7edgutWiYZn6qq1VSTM9CEtg5SKJgbkRuZKAer9jfsoLWJVWFJDwQ2iFBi92B2p1F87c1",
  "key23": "4UwMfm15rYZd7gu8oGSMswUEGcfCD7HMNNvG6Lqc9ZJttGWTubJDeEWDPGFMNazWEQHyhtbEZqb3s4rMzxGpE54X",
  "key24": "31GPyhjKevTevjjswBA8RrWVZGuomsJArL9pBPf5A5dENMgMWNrizBF4YvczVZ8wnLwbedtJN5TKjqhkeDEFYZtR",
  "key25": "3DqDJnQk5aQ7NHgdW66CBceK2PPda9Aw9DQ3pT4LymMQLMGYknRD6fy8U15FMJEmopMQKCuNJvnGtDtDvkSo8D9S",
  "key26": "48F3oJKwGiiNp5MLojPFD15FspBJforme8wvdscQrZzqWd9ZAuJwx91WMFVNNCzqSjjnvyRMMzbaNxEqk3KTn5r3",
  "key27": "4G5kxSe6TbGb6CxdQa3nM6ADjtj42TgHJcdPCDH1gyPj7APa62td63JdrjxGznC6agY6PbjurEnCdce5zwM9LbM7",
  "key28": "3DSC5ikunNfhiRdWaCEVJVsN31tfvEvHm7q6ifP9LigvbAfL5zbR3ct2BffBAYdAk2rjdjHd29JbZiEMb1WEhrzC",
  "key29": "SABmdS8UQCUJPuTpP8eiH2fDEXADFAYt9Asx5CLnHfoFMc8X5Qqv4u3MtuyKuG4sUj4ez4rgvEKDAvwGM96e9LG",
  "key30": "LMhzCgWGDzw9wdbNKWPYYiGzdMnHJt2sP9onp8pEpnQyLiFPByhNh94zYr5LnFz2XCpGYrBbEC514DcvcHt5edt",
  "key31": "3afxopnkJuJPJsf2UjjCLnqdzyjcV71HGWEsktVE6Le6M3tBD1xYfy7QiF6wuL8cNpEszkghfiaquV4JVSmTdmRK",
  "key32": "37yUfxuujo2bcGquqHYRJHhsouYwk3CpNLe1QuAKmu4eYAjaSGDS8vQppQqrW6mWDNc2JQ9i3rpH42nvnqgabnFG",
  "key33": "BNpgqFnGvv856CzXiwYocy5G2HTyjefJfT1gkLJewFpCEcjgBCpE1GK9NFmZyEScLQwosVQAMoJVXmWhiAxd2ff",
  "key34": "2k6uF83SoGVVS67E41pwxRQ9tfECbdwiCLLjmnKyfSdE2FGqdoaFrrE7t13rT2e8aYJwk2RdZfpadJUoUg5WHTrC",
  "key35": "6aBNbHX5h3qraEAE5KbrgWucdbP6bwn3MMqXwTNfaJaCrKZZZMQ8KVn88qJcEw18m6qmpKeNAxX2ZQkVYanMKTB",
  "key36": "3qtm3oCFuFcxK67Got8h6WSvmaUFBHtAfw9RwxnNnAecV7tKcxjNtp3UmfsZG1ZCNKMZvXNKgu9EEa4xo3pC7Z1G",
  "key37": "3i5prwD3DN3rPa81dZyLn15KvCKYwRfJFWnpxcU2xMTyZ9PfXunNUYmXXfKMEebiY1cohbDqRAbxBs3etZNrUinE"
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
