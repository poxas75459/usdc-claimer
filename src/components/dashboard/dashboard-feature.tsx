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
    "58XVAwS4qSZSuSaoUMuHazCMbm9sSPSmBddGfrh7Cbjz9iaSnrDDcBmjtGFPAgMMynNjHXofqegGZJx6a9CAcfxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zy4TgPLSEK5uY4MAUhbr295e8kW6WQJ68pKRuDbWpWSfKgYei4cfRhx34fjs7F7fpQLsfxqAhhGEaCURNyb8uCR",
  "key1": "22wuTeH1dVAqDE4PeaE7xGcL5Am4Mxdz1tncaW9VKh8sa4CGQxWhDQdMyn8W5BwFeq6brQ5KpHAAothqitcxaL68",
  "key2": "4gnrp9F7fE9JsQgZn3hn2SqFnk338NPfv9Jj3DsAs4Cywxyck4gZoksAECmqy8qSrBcjHh2URkva2ivfKoKcA5zV",
  "key3": "5a12oj746btufcsCusgF17kJ71tmjVPwMkUzjC9KwRvKXY4VctmAeKskwoKkw3EqfMnCjjgMsXgwoA8CqLcsYnrg",
  "key4": "243CzjmGvrs2u7JTd1csNxKzZ2qBRURn5rh237fQBHzwx77wTCZh4XUAjLKHpFMSnXi6mAJYfVqPNKQAy9W4G1ks",
  "key5": "56eK5nTZjneUpPjvaYEsdUPnf7dTBxsqqGXDYa6kQ3Yc1n1iC1YJJaeB36dwxayxt8umgPBQ2CoaPfxsx2ziBdmn",
  "key6": "2ivJeVctjRTuG43pv9J2BQoTrQgKyFjTkjEEXZQZoRj3GsmJWayJnVriyXs1EYz77wdh8eWud1KtvYQhs4y5memF",
  "key7": "3Eek1DmN5aTLtPMm67oLJxB4PdFQhu5aHUpB19WaQSorF2Gw9TXxYWJpboVrCMiKpM6pPbsXL9ezZ4YxWQBvAGBa",
  "key8": "313x5CXg79SZGusQzuc8Vrn1xEjH6PDU2oJhwWZrfrCddtfNgJ4ZsK18bmFduUoCyXZ3gJc1Bgyao2KJhMwxn5yg",
  "key9": "GN2A1jZn8tahdiffJdJmbXAzx5kzKEL3wYPutVyfuTVZgnnzBFc8JBKG6LQ6zxNiYZjDsKHj2UXGtafMUdSN9Nz",
  "key10": "5KBLejobhE4S334ttfMatwywDeppvHhMPQZ3fj39kw8LymJ5iLQidkGCACnbhPmjhRAupFnTBJJfKrwh8JoR8aZJ",
  "key11": "5hijL8RfUKSKSgtqxdSYRYgwvrXHK2YinkoaQJzk3jURChpGyvxGR1U1NbHYA6DokpLYhDb3yz5dmCZJs1DNksB7",
  "key12": "5X43c4m1xJjSYwr9gEyjpCBgKiwjMkKhdUqF1QvEoFrvPiUdm93hGpv64w4oJJoLojSXFAL8m3pZNGtndaMoMKcH",
  "key13": "2GDv8oPiLFKBZNeGjbdriXWffLZqiZysyp2qveSvBrEamttKbS3o3SACqNZ4RGyeyqtYiWumCeSdPbSY7hKP7yw3",
  "key14": "3GoLkFNjQXXv4NvMhguZixTrhKdHwZXS1RUWR5QsLij4JiK4iUKTMMiua6BdTmujnCRSYYWB82wDgvezqjM9uMvy",
  "key15": "WpdGY2fVV4Afuas4nirk9nJqBY9nbaYV83954DMk5Z5ygvnwT8ELA9vDgEPy6cqbefRwhkeXAm43hMWrL5ySwrG",
  "key16": "R1ZFpfmMRRX9UQbCmbC9BzMCpha5fDRJNcjEHDcQusiY3CHj7wdJF5DHm9NjXbkzXJDuaaryPhfcSNfAeqMuzeB",
  "key17": "3ovtCLWpeE57XCpuoyRc2YFrgH6GL4gN1P5Cxu2N5thVpQu2SJnMy2iS8gHrFCF1fAbwMtVrxSi4WiM2dFLW6L3v",
  "key18": "2JksCfh9Cka9dccZqRW4p2ACTpgdG9rQHdpagTsVuF2hzcN4mtUHUUqTbFJYn4zbUxYhQFasyscxi8puJArbWPHG",
  "key19": "5YFcvNzVRYFhNzP2heBfpxeda9s8eypscrjDXC7PhyAp6THgVSPkVrTxAPzSYzik8pR6YpiFZHS6fKKsvvkXHdyz",
  "key20": "r5eUpw7z8qQ3JStorW4Xi3W8SM7o4w67UXWJDcLEJs3J8cXdW6SjmKxBC6AZuWo8maQnATvWwN2tjbj2xdp7nHL",
  "key21": "46X1Qk5r7L97pWKMuLgBTXPSWmo5euu8hYQczRgnvLAmbrJG86ov4ymjcrazsxoZQcHD645rnAbr7ZsD7e64z3Rw",
  "key22": "3R9yZQbkx4CfgVDwtuomYhAkXZA4YNiwnXkHijs69i4yEFNwnFjy5KbfhRQ7jVuf2T1dB3Jf6bSTz1Mv9niLBuZg",
  "key23": "5hBVLS3Ek9MfXHikK3HvzXHU16AvrDif4D5xoBTrmAjGD2CstTa66sDZHuBNEoxnEiozhoF3wHqnNJL4bk33zae6",
  "key24": "dYMMjpzTYT6jw1zKbrwe59EbdZATdBxkZGvFq7x5LxRie1wHaG42pbShVgXTvnn46kBVM7FBfLmk6HiooFAkCyy",
  "key25": "27KxbnPipL7HM9GSkjhJgzJ3XPXwrwJsxQGtbQidWM3q112ob8qnh3Y8ARznr1kmA1iGSFkqdDS4eATaVLEhJne8",
  "key26": "3wrvbLRibvT6CmvwpKmqbgXCs3HJKVMuV8ZHCmNr7iYjdTCsRxFxNhqmfU9SxAPCdXj3ZsVuNHvcsM3CUoXfWFxD",
  "key27": "4hDh8MK1YCFiYPTjFmuVgLtcnCNncSp9iwuJX9WVRPU1ea3XFCM2HbSkiKNzVwPWTpcvUKQQog9Lqms9iH2VQFrK",
  "key28": "33JHz5tqSM2N5bpaTc6QRZac7whfhiHNLih5RmcQyKeh89U653k7jJFFQFtDTWUis9jwZZpDw44fYtoDCUmHYKAM",
  "key29": "2uMXiDMiz5AKRh4v9oMW4MkCztyNigy18WFoQntcYUeZ41SWeSDSJkTk1RWiXa1pVFeYsUFAQyfwRVN4YYYfy8bA",
  "key30": "4JmYF77RNkxjNzSYEPMhCTibPgzsGAaBt1pet4n5ZJdSX8tJ7PxaBxYjs64LDo8LNHYw2AnwgbAqPTEN5CE28UWt",
  "key31": "4sLUcQEw3Ytd31AVG8jpz8p5oieqwdiN8DfzujmeCGwjt2hgV5YBTgWnkyAvKPAqm1VRYLB2bSCgYZaWyZE15rCB",
  "key32": "3wPzPdZo9XFDR7ajXfRD5h5LieHbopaigJs8JapHnjex6g87t4UJrmkrNn2C6jHt3sy5qv9cQHZUox65QyejaXQ3",
  "key33": "2uiZPstyS8ErsjqfzveevnKkksNJwR9ZmciiRowZWMGaFXJiFNYC5vNkZ4TjeyHrzzP7M4SJQQaCqZigohRsdwJm"
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
