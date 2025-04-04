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
    "63pdXsxxcPWQBEJb6kCgC7LZeMP4RdjTVe98nFPkz4Yq3D1HquLDvJko2eyLAB68oXCL7Q1PA2QyeWiUL9peqsPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gpW6DTUsZnZJwzctrY2a9TMfrAVmfzvpxUVyoVsv68Y9hBotmdm2z7VLN9vfdqYUdSZJVn4seB18JCEDbTyLnR",
  "key1": "4JBy9KxHC59qFZqKr73j9q9mTLou6no9ubhkGdv3GSJLGzFfuTcvuLviEvvy1BH8WbuaPw8AmMP8WQPkUEswM3o",
  "key2": "5PVU89yGcEQj1YT4HvhNz4dm6YvVdDyCq61nibmPmdVur3J83LajoVtSDDqE6oVmWPrC1JxA3cYbuEb9MzfYyA7E",
  "key3": "65LcMSK3b86CajnHRK76gBn7jZk17kNmBaUFsoqdrfUz2KjhoQ2JVGJmXX9eNSESRXw2bcfQnezDQswVGuwz68qM",
  "key4": "46mQTYwvsLNicJHX8Nsf7hgzRmTi3RHLA3t1wgiDNYV1G2WZ8tSjwvEn9RXNDiJs9WtEuJNVncf1mYWuBHrA6VEi",
  "key5": "5VJxVPz3aWLM6AiEsbYm2iYGfEB6p7BiVE4U5jbzKD3DxSxLY3ZTUVmcAy7c4enT49GTtYdMMJeiG9KyDGua51i2",
  "key6": "5fLtXfVENAxB44gpgLbyZYMzAn5ztUjiAPo28cvE1CDNpUz6xG9K1cS6bhiGEzjEkyGXeCnmV8AwKCyNAa3inxZY",
  "key7": "5qw7cUcyvreLzBN39SxWGWKYwvZpT78nLsWn5MyrFM7VcQPC3SXNZBRGYpN1LaWtdcnKssuW7Utd2hLYv2Ehvjt1",
  "key8": "2aaxsDQrKEiHMXrLXygcMr6MVqvZnhT9G3n3mPBr8WAoSQABLj8JG6LADxuHY4HvEGDoSC6eR6vcarBNbcuoZbmd",
  "key9": "ovPuTEvdfApqAe9zyai3LnSpBAMon8WMRs9cey4jzxJmC6XSDFfcwfxoyT2xnjL9qoHHbCv8ih5Yv5gwsUDpvZi",
  "key10": "2HcMtRDos4s95qvtrfTEVJnbsNUTejTcCeD79io5SPzxwDKNYK5k219676xswhwbwqtzM7GGkVVkx2o4TtqDfj2g",
  "key11": "3A9XDbVZEkHHhSJAZu1Wfwyk61g1xKeqyFn7wJ8Xr4mkTUgVcFsQXo6wda9ezqPWH2XejmNmvWo4wjKNUBdL9LqD",
  "key12": "W6M1CMhzNQyfJa95fzV2QPSGfLeBscZf2W9NH9E9QarH5YbuXumnyWdjso8peJQFiyTUvCmPaz7ZyEniKcWGtot",
  "key13": "eyoBQBeXfzFj6vqYHXiPJivTg1Cx3J8mdS6oUXuGP95BkPsUeZTrnjLWb7D7Qdmfp7TCxDcUrLYMaVT5tbdiTM9",
  "key14": "RppNU7CXfYr2s51yqAVoJbbTHsZLMsUJbUA9XQrA5XQreuVw1LCaFtUSEq7NBe4E93XteGQ9sZ9nuDvYss3M7gS",
  "key15": "5zvTYBcH6g3WLJPTitabr36eSdPaT6pBQrvPC8aXuyT8emrnH8V538fAaVDhVWSBFf21mqHWTn2jy8ie1fufu5sV",
  "key16": "49gEVJSjr2uqF1vRxStaFnYUe3GvqF31oF66yngArDgCkTaqRBJeL1Y5Q8LcmBnh8svwgR5oNSYwsGHEdZBSPMpf",
  "key17": "4HEmDdvyH8w1ZskApafVnwRUrQ2N6N2nycCGtkf8rHo7wCvvHF23Vd37JchdJ8xgR6ZURmQtQCURPJzYU2p3F4qv",
  "key18": "2WSuK93ru1LnW4vJaYZ8nzpJdVmidhW2gMkBNsmsFBQVb6whrHEp7YcW38gSNjG5gC4ok1Cu6zHbUt3FCkXxkY7t",
  "key19": "4aX3HULXD3opdW6PXK71aGW7ekN9ZaZMMmSQcLzuihp2d9oMeVizCcNJU2bF8A43s4F4u77iuNqA2knrDLGJLkmT",
  "key20": "4oG6csPMJzjvXEfygmqDiWMJA1T9HKQ2nnFnApguicqBU18y5DMDUabeEZgHRQawsqR4phEwzbsd6C5XGc4Aqm84",
  "key21": "3tFKicFFNU1ZdgkPhKTDPw36nyn4X9KCK1rxfBKigeSNqsZsU66QMe4ss72nVuYfX2E8vtiNsrDNVBToXrV5Zdjb",
  "key22": "33SMVFQqR7u8qzCpoUnR1HKhW69oFJJuxirFrexwvgj4weuLXA3ZaZQEdzzrBwPkviLfqUdbTSjxhxNcXX5KZaCc",
  "key23": "3LuSCexQLuRdoWPofdYnEWH2z8zRGg4b6DyCb4BgH4q82sUfCpbtFcURRbASExw4zp8fNisJUNYWgLG9HiU38Lu2",
  "key24": "2tUXVHRq84sQGUCrWVcdAK1xqRrWroUGoHkvX85BXvuCdmASpqnGGGpjAuopsK9PkUELJBChm3jttGQ54NpjcNC6",
  "key25": "F7NnNUMR35WLp6u1GXnSAob4YtHmYKtEgWXHTnYuGYzd58SPfegATkKsNSL8KXok7XX1qZGq2MH7WmDC6ifaRux",
  "key26": "2tcujiMvQW5EsvgCFneScuiDXQviyj8iiWZvWc1h5cwo3YtMzUMNUEZv5TUD61crcizKTvfTP1Ff5226s4RRahbp",
  "key27": "35CHqVMYTb9nc4c2S5e9tSbAo5nRR2xrL52fchMjk4b9ZnHsEMziQ3DAfkAh3KDbfovDiYbuBeT6z56LkSde75iz",
  "key28": "4oM3HPGJBUm8NwzfPq3wTuz5hsrKvpK3nGTF8MmJHPjiuTMqhyytewz7hVDtLq8A3LXvLo4Yy4QNSM7zGEGyspYT",
  "key29": "4mpDN22AcCW3YppoZ6s1Ck4wki47qMfBYsuPSMj5a42qNvnZZPqpuV5XskitoAknYW6xXUVRn1KtreMvqknCCxe6",
  "key30": "2mUffTjdV3TT45hqyCVp3h92vWFaxwZMDAX2spUTh6KyXnjBQ5jxVZeMZ2UEtFZgHwLJqwi6CxdoRYsvqd1a5PtP",
  "key31": "45WQwvzgVHAazu2hAdpDMM6qmGKyapCMjoBSJ3efQM2fCf8EvsH1C9J54wfE4QiPwF2LqMca7HzfpV73NmqLfG4A",
  "key32": "3x6fJh2SwX3y5U53BGeJQfh9a1Z3M7QJsA3PMew8bLDpXUWLBS6vJVSJMQaQi5h6QCjUeS2ssNCaMkDeckbqFU8p",
  "key33": "2UfRiaQnnZDo3bCaF3udSjsRN8LQkkQMUS3xKVBmD2N387GAcgs9GP1KejYTtBSuSbcFQBcLUsWRSzSfnraDgL2D",
  "key34": "a53jehPNdb2WS4McUAFp7wUfLh9bosyfYDYtyVfex5hkGfx78Adu1h9HzWsQQpnwE5Rbj1zw6Cj2DnTj1pBRRU9",
  "key35": "5evVkTjvG3VQbs3W5RWfqLT2BxbVj7Un4r5TurUyKRVuUQM772vtsgHxmUMEj4XAC2Zk5fWU12Ne71DwXXZ7rUS3",
  "key36": "5KxVak5arsRM6a8w9AGjXxzpw6kHHtS4Wn7WpqAKhVeJCBJ4WsLWPHUyRKKwSzCeDVdQxJFmAnsr8thWzpxGhmqE",
  "key37": "2jURyDTwCNcZ41dYU9BNqSao2HTWbCrzFrqhnBFNmATCeweBUCuuwS1Xcw4fwv5LQpGxqcCBRp8QRseWMJSEz8Wz",
  "key38": "dyrndeUyy6QMny2fNzdiBTyykTjtT8S5gxhNXgSfrQns7oPUv5mz9vPG4DuphsMVeDtTKV3EJGtJgLBkproDoY3",
  "key39": "4E3uo9q4ZZ77xHYxQJPANTCFDBTS7kJPsZvExLyShEPGr7P6rwVKXueqDJHTw6MsnXECmSvGEiM5dHWT4TY2zMti",
  "key40": "2NonhF2oeafAVcHk7cR3ugQ6SWDp4TVC6bSSP5fMPs6cHRX1pJnLgfQSZbCPQFPv5Gf6gY3AwfBmbC6FKruaK3fN",
  "key41": "61E1AutayT7E9RGkgHGVuemCmFFffQAvEnWsYc82Cy3kC8qdQuZxQCqdkTDfxYgoBTMDekn4cn7Xjve46Hz5zSoH",
  "key42": "4fQ7zKHTZAMA6v7d1G4CS2Z9zryAeECHbdmR6x3KexWYTw2QLLPYfncMrkDkMnFqfnkpPHcehDvXWH3XTvN3PZsy"
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
