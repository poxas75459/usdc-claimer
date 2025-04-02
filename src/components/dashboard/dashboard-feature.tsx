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
    "3ufGTgiNa2xAVy9g7AiykF7LrWMESeyJ3Gf82gbNhKpxHMf81AjLoFx84t2e4pPM1QNPcEa2ShLRg6XG92y9CiHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2U1YfTmu9QdAeFJ9fi1ZY3qzLCeqRagmdvRpvJjDB6MkMLgzBfmjjj9xGQ2iMP4E2qwJEzDNmnkAVM9T8MBTdq",
  "key1": "5bnzc92HU2N5EG4r7qQML3k1AS8sCRHtXw7hfZN94WwTo7K6JfctwtTnWD7ttE4QgYFrYkMQbX1cETL5MbYG9Dmc",
  "key2": "AGpMtefGhuNE9WYA7MHCgZ7eRhaguednJPN8j1L1baERMfYfUR2ZftmW1NrapRywXGynzgyQWuCWtynjfxAYFrZ",
  "key3": "Rf9mG72PG9FftkDQFMK8wiSipxyJ5Dhi766HpU6VEEFqqXp9Zmr65dwmdf9NYG6Mwj87G6bDVkxpFapcw3UZDhx",
  "key4": "2dCqCfYLzFziMKSCP3aePKSPZBzbgvjRcrLswnv444M4jWutd8bX3asiy2bSsw6yyta59KutuuRiwyvyuDQ2nJKk",
  "key5": "249fkYoT267PseXhMUmwiD2t5eFnrF1hmPQUBD5Nb8mEatDSK6QGDB5V4S2SuZBoDi4x5B69kk95en9Jvu5KsVh3",
  "key6": "3bqDiHVsKJ8evEcKPPXR5YtJLDQiZAYXFWinoqDUz7q6tFAvnHnnHxvfgya3DmAdZjW1KJmCjmHrAiVYPe5ef67P",
  "key7": "zA8YfHgLKoH2m8yMPo8Xkh56ZTdqFcUYmYxJ2y21vKFum5XTT5nyigGBbz4athRfrdaWjLo2oGNcE9DKgeLWDSk",
  "key8": "4avoT4KKhssboNGgu1iXSaquvSCeYunNDaWJnet9czZZ9C8exi2jBJxaz1SU7wMCcMA4JbxZQ5Y9z2v3LKCTShHu",
  "key9": "2dSo4PBv2nWzWvZoAiQVQ621f4KcbJWwRA9bH9kLt5QaPc5TaAXtAQZR4r2SEcVgw5uL4wCbymer33WMZqH5Fhwe",
  "key10": "3jPkA66oDRnkWgxUpdpzHNeHcsF5MZKB1BLsaJ5imD3VEkpTcupTw2gbn1DBQAkgJ9vMButshgjUe8Hu7hwcyWRC",
  "key11": "4PeELBjg6puv2svuY1mcsATmCJ5kaLQAmSMVb7FMUMkrkzgKqutgmrhLwK9FS2juxfeWNMARLbdFaER3UUTckGst",
  "key12": "2zKDLtUvpY3hG4fXdikUsevzxXcEx75dCPLGqQtSj2mCze2qvLyDaeT25SmXZ8GF2oQWJf5GPrzodSMUBHkNKESd",
  "key13": "5CMdJoQzGZMgRMbFosde7zb3AvnY9vzNqqeqcds7PjDAfRv38M3DAM1Yev5uqu1D5mTYtD1JiS81dp8MYFJAK3ha",
  "key14": "2RXjGY2HtfcJUo986tgeUAsDcjRWw3hyWmZyRwspyFrNGE35NmSZWVD9hXBgonmCMpq93XJX8pyAFsy2aQNzKmyc",
  "key15": "dJWNQk5dGLkM6aqkGCSoaXNKH6KT8NPg4ENTR62KdWzSoviKubshdb3LMHJPaqVV5Twe7rma6Y4yof3T8JN2FC8",
  "key16": "21kT2rBmJn4jdzh7KpirVC2kM3jjvykUGoAoLF9ENL7cd6ezn63hXq25ypsa9JDBfyJMetczS3Pe2BiXBqL2Pmz6",
  "key17": "3wCLAVMLEbmhQzZcGChfcgVNnxerLg96zMt61zad35Yw8P7h3oRZk3wfLdoD1fd6bykNi7QBeDPhMCmLbqNNwJxK",
  "key18": "355Dy7bEjz5fjraDAP5vviCmB8ogykECrgjvHZ4Rytu1pnDk83LcAaieS39L3nqiTjxNt7TEDdKKz82RhgsTxPAh",
  "key19": "XTEdpA7AFZMA6t83Br6Dw42nXxVrejUd9hgCWX6RKe9ZyJSwkoqiTQi2mSEQ1LGDTNW8qnJCbjPn9hcSioGmVMD",
  "key20": "aYM6vRfouiD5KpxeNEU6nTakckdCgtVWQCASFRvhTSXoD91iw4FwpzUxtpYKvzfdN5RR3noHnXooV1ivFiznFHM",
  "key21": "2jADikHn37zQuxCPAChcBBQYDNbsTBHRBPcHqxfokB9dthy1gVR6bco4xmQf45r9LvsjLWtDtKREzqu1mcKmqNNx",
  "key22": "4z3SZ2wtzWNVzmBC7L1mhkEn7eyfzkCQjA4ESJqbeum2b8LPWU9HYNJoh3Lwi4azoFEURQ7L9A2kCWNRosHEJtUD",
  "key23": "3U5vcX16aEey5PyShHM8LMHVaJhRbtRagHePW8hEMoaNW8fYG9uCBuYfBNgQB8XaoUmGXragiyaweYPqXZc9b8Kk",
  "key24": "3NghtzaNb76gGN3CogLzEqqubzTqEDn8i2dhAXvhoePhiK9sazy9nF4zTCHJus4L8mR1opfRypksojfvZ19HZHQt",
  "key25": "k8zNiaVrybus2625ZNKtu136zaKB3KmMdbazQ2fHLYktTpLxebbBZbVKYuMV9P7aMHnJogjHqFGsp8TpAp7eafm",
  "key26": "57WdyjMwmgjhwBptmQDRtp2raE4cV8tyMVmCdkBPZXvmsNjS5x93bmxh6vcFRvbfBk9GeZEh2WHC9W2wDFHybgyy",
  "key27": "62r3wpfnqgfq8EF85vcmaX4ikLGKNrjwACv38VD7DorXS2TfasQwAC4azCLvvQ9P4GuN7xdabLoKiQWSoy8uK6TP",
  "key28": "2ktPzFDbi1NTdUMZj58Nj4tLoRGGYzNHCHJX5HiX1cJXnZ767VYoNZg9ueXHM6UxtScYdbBQLmQ5s7AARBjeFPC3",
  "key29": "2gtvV4N68JHBdoAgByRebYurQeEiG6gmzVZYEiQgs8EqNkGDWRFAbbsFqkYVL1wBEaT7Fb2m8aRa8sipmC9Me2mY",
  "key30": "GW3WkyhZtDvUcVdRyFssK6HgeaWh81xiCJwbdxWTtNg5SYReGWUuNPHWEf8HU8ceUhAkQNQcvKFVukvQVubpqhj",
  "key31": "67oiLPXs91qpX9fGMZBYbgCX9EhVgrhfKqTcaxv31xoxKwfmVnBAhszEjReqcCxNyiuvNVyRX7tGsaSSCXhZdmUy",
  "key32": "2o2Zx77hKZCimsyvMaerUZL9hPY9bt9Bfc8oR52xTQQCL8V6rvFdoeZhZNwJ5B3ivMgz2kjstyeKvuwqdExSKFkf",
  "key33": "5uiKnstNw5AHk2DVdvuJwaGhRghMM7N9i23SGyxFzQazWs7xxH7BuEvKBrDRqGpyJQxhKdftJGJsVNqy8Xugo4UL",
  "key34": "2GQNtJNf9vJsptYPxEqpgCaBZbVosR1zfhab2qL5KwDWGwM3hNPT9Q5C1nTZYEdZtXzq8vKf6hfCpVUUCa8QAk4S",
  "key35": "Ln37iN8NSztvLDB3CNyeAcjQk2fzXfqkNqn7vBZmYdX2FTUf7SaqPnorvYPbB9P82LRi43Zf8SHEFNhvsXwMMxm",
  "key36": "4tdHPEti578T568xe28wVs5XJRPqmbuZ4FBB75b6MKp45a2LyBenKjo4qMCNrTrXUFWD5NEkXEDfUqLXBXc8UhFu",
  "key37": "5SkHJQnqWa6J7b5uejHxaGLpZDyoAkiQgNeZjiqD5JGdReYb3jK3UswtRV32oxr9ddTHxajgsFKqqMUdoFmmDKDN",
  "key38": "4DEaKZyRCorFbtBYHMFayasHcqNSrGTo48GFUTNcc53YUfMJxMbY3wqiTjVT1964aj4XzYosxQaagP93nUUh6qzN",
  "key39": "5BfWDATHLA6i97NhXMZPNbXVn6K4Wr6VQgnx9MMtd16E1NqdB6d5YKhvBzLs8Pt6NyySy5crpi851UPxdP1cznNM",
  "key40": "5R16qyMuqCpf9DQPhJEYqCmV3p2zTjn3NTm9dN5HyZARGfTEyPK18SfRxtcnsr3D1QrjDonbZbmQEEEXVhPGz1Hz",
  "key41": "4TGeqEw5LARHLwAZmky9iAUVpgj33Hye3bv6ZHg3yzfS8H9zyb4hNuoiaXnCsjdp54RLWPWvvtJ5ZtCvUJ7LJ7xq",
  "key42": "2NGb95ENCtDzewoVyqvSQqgtp82CPbT6YDdsPJFSbc7dFeXupHQ3a8K7hUVbFu9JKL7QsodA4Cd6Bzx8m7L1XiG9",
  "key43": "3oXK5aHNcWzcTiRz44Zxu55NxpWVF7pSDW1PPCK3nVaHtd2cqP6uaQvUZdJ1CBJ8KwY5u4dHKQKiY4g68e7W7G7d"
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
