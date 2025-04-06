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
    "BjSheXyaUD6tyg482hqBNqsJb4rdyJeAFrLTEPSmQ9caj24gQxbw692tubELPjtHE2SW1SVXYqBEQCtokT7p8kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wP7VCQ6oPB34bqGrJp6GKhuQdJR3xATsFwpvELXcgkhXByT7CyNGMNvWdgHfkVdktDnC24mySMXLV43e9vkGhHA",
  "key1": "5SRpSSzqrsxezkHs75rJLrpPwhEBi5sZjYXfRdvQpiwiD7Jxc3KM5Sx2DmhcGQ1DHt8UPcmmSw3kYzht4ExkhjYG",
  "key2": "4VDJc28YkQ5Licy4gLfeARvVZhX6vLCw6osWNWmL388CGevLCD2YFtBjZ49yXUa14ud5nB8f3i49547JGtnJCUB4",
  "key3": "2XDgFVfHEsxE61cn44tsNQepqhzDWpmctnugayqR8Go5EKQUydhVtbk2yAuC2oDaP6cm1ZqteBL7nZSZoDSLAWsX",
  "key4": "4WHj1uobUinZmviN9xSWHKjNSmWTp1DKWyuPrwvbNp2MwN5vBcmrEKEoqisTmPHAzPv8bFE9diwyzfSUM9sMG33d",
  "key5": "4B97DsggENGUnmBqUaTE9fEf9SN4pgMt8VdkEFX6c65LKaCGVtyyitF2Udv9GyuZqepAcANpFwS9zTk5p7yMTkCy",
  "key6": "2QM2KD7zmr9X38isbzweDSTByeMiTPWaZBvv3fiVW95GQV53vJ3piDvpHxYRzQ1bMkgZvZqickxuaCRz5tZRhgbH",
  "key7": "DqTjuoSohsRR5tmBtNhx6KPWznQVf59spUkTvUiV7pKsXPicG9vvSsEd8ZTmZiEVTGAu5vHGSh3cUWPkEuDG2gW",
  "key8": "21XwxxeTBMWWmfmfo1E94eNDUrfu6prAduZk71jLC6tpUKmbiRjNjeakZ6NuvUctDA6WDnRVgETcxGHTEV8WUzff",
  "key9": "36En3hJbJUwPwWuaw1MpBnYayEBaqThpodRWmiBi3X7nzu7aTySzwrVmW5L6n6QjuhYuKAMkmC9gtYARuNYiKQri",
  "key10": "L1eTrGX8NnpDV6hkLZgCQoLpKsHAWQNKqkNucMPoXWEkkRT3KC4sDDgsUjgvR3jn8fPrZaQArkAaPjP4kyUb51K",
  "key11": "2K6dnV5euDJcExWhNT9ZtTRcHi1Lh374SPhMyxLMvdJyCkV1WFNdyASgZJ9umYmhuAh3snrHs7BvoddQdTvcUYhG",
  "key12": "2kZxVDNJzXyYw69aNgqnzkSHsYLAeEh4xj1VQssQgLfTLd6jjsuYGWHKo6tnYRe7CwxYCrAbGvcx8VZ8idsZYJXi",
  "key13": "4fsP31zZ6dvXMrDEgBTMahCaZ2DsBrxhHGQ6cHJngcDR9eCWgkewxm1duFK9RoN6SAspsps6orqhYyvhEHWjnjWe",
  "key14": "Bxro8nSfxbc6UKam7UPGRDWZnv8DQEjmeh5NsyFLJ177kaBBRaUj4qtzFueGL8bx5spPU1CDANPzb2SfRMt3Vmi",
  "key15": "MSRYunbc2NV7J2MggJSq9VLQrA3FT2TaXtbkYp7Zr6X9Hdxd78XWjUgyz4dGW83YQHWKFECkQ1eJAs7xRZMFNko",
  "key16": "3WSH6hvP86MN8tH541cw36xGfSwHNsmPpszN487uVAsiuZthyMQou8Rk2CWE4RxKeDhnyoMP6SDP43D2LDL8zSuG",
  "key17": "3BULevSePSp6nYF2UtPUErNJnNL7PYv9aXjHxVc5no8s9pnb4Wyi5t2gWu4vxp1867Tkm4y1Uwm2Krg4aQ8oMjKo",
  "key18": "5dtpA1J2DmFuRUFWgZyjwuaQH6jD2j3ZTQcSnNHGp5AzYfps3oYQZfMQToT3QVAecWxbexutsR2WNFaKAJ9LhjrE",
  "key19": "33xKTFr1awoZqky7w5qPEN7XZKRHhKpYCUpVUd4M1apToRXzqsW6RacTwj3Efg3ZkcfaPcphdv4BXigW2j9QQTY1",
  "key20": "kjgLsr7yimyzgebN4o1nvaGWHggAXFNgXLMn4FJb4MTKBoRzmY64zWm2mTzQjyxM1SG75keUvihSbpxuRU4wFdy",
  "key21": "4uxsANPCGE6CmXY7eNRHAATPH4fmkuivaCefvF1BmYUo7S1CtMFvxPm6ZoeyTt2PsTuWYcyBvZ67mibXLVpZYRu6",
  "key22": "tFiRaNoYsZPhZyLYEaBAprKLxhrfupgfjNo7zYkeWA55syUCLdKdjxXdfELtw7NUgRA4hqCY1gmo2Xd1v37pWRf",
  "key23": "3ecAGBLbEqNuuifUixf8d29QUkBuvZrzgeh3tSWRgwnZcMUCaYHkLoorPd8Bhu3TA2M2kmBBgfiZXStkaNnEh52k",
  "key24": "3MY7aFQNrVhKxQhM9fjUppR4G4Pp6sXZNipmaxE1Mio5Y1cQMS5BGrH8aCCPZWpqsByhpo54ahFXg7H3TyLTdjZ8",
  "key25": "3wQ2dTp77NUN97fqLsUhgtJtkSWZw2R8w7RwPiwgDncNTewRGzYkiCEUgRbdQq4dxUk7csuAeciURzPSF6z4dD9K",
  "key26": "qJYg2ALzqcXCrsgZpbskAcGN95HcA8odhEJw7FMXHtx5hJE8onMPobeHgYzvS2LD5dat5MY63LtxdcZumUvN23X",
  "key27": "47TPMDaKGzFbUxEvwSAivnTAHypqmx6LK7xnjRcbgvw9E2sBsk9YhN3YA9jRRaw9ZbbJsKAUDvbMoi4oKYqT7AFz",
  "key28": "2x53xNUz3oaLBrAjk444CQhWoXkCsxSG1VrVaTdFhEUmAB8CyM29AjoiUctadqkoH4khwUjBBSWHdZTDfYJL5Egv",
  "key29": "5ae4rje83zpJFAoMoQjuUmBKexGBCfS8uc5i9Qff1tVE9tysYn1oR6e1TBJ3daUaKVg8tVe6ZcKNCBnaTMik5TB7",
  "key30": "275A3ts8wCJvVEbfr6nX6ojC39zuCiXZ79dsJkg3WrZAixx9mdMi7Hw2hZpjeTQp4h24obN9shk9obmgNYFSq84C",
  "key31": "3vKwhCq6MUAQEY2wJtXHUHqw6VPfXKNxVfcPiKRiqD6RACXZRaC72ada2pkrwqjFyh28uUwHFMfRTJHfxHN57Ssr",
  "key32": "56UHkuPpTk4fbPpkByV4Kszs3jmSaMs693r4VWAif8rF5ZPHTkaSpdrA9npUoSrfnhyRt8j9XdDPuv7SCrVUnxm4",
  "key33": "2AA5pP8PChWmoVwPA5iJYubp7cyaUDmWW6xy8SxfTMPNoHXjvLdy2YFN9yeXiV5FiZmFSAQBtiYSveKPNNnBnm7o",
  "key34": "DWdfLQGYjd75HQkFuULPpR1cs6Hij8Bg7mKVfhSwN4QsYWpnoyn3jtKVxbjLwKpctfdE7RmAS4pjQecMfwiuExn",
  "key35": "5LrfUt69y3GyromsSKrLbF2H5SpwQYUHzbY31ESMAvcJFrPcJ8y5eWjGWqxihHA1PT6FNA1kAW5XVjLKCAumyfv5",
  "key36": "5MhE1kjjXETNeRHPLAz6J866JLemDHjE3pt4rxqe7qS6JMPKCxUnhca2LT11WTDCnEUJqc45W8vEFtPNmRFhB8U2",
  "key37": "5Ne1mEdUSAHKZJnaHBSPr9bCb1HwMZEgnYpcHzVKq9Y2Dm5CUd18QvkQGoUXn15XZ7i9nfvCo3tUQGCSTB7cqCdo",
  "key38": "53ikNj72Fh2Zh1YuWtW6YePmp9uYV3yzK2tTXWD9F366XTL47gMQBpS9Wr5dmu3imiyMLghG4sjkBLY7EQv4ayUg",
  "key39": "39jrD5modxwuKt6YiWepZqAXTA1KPMqHo5bHWwmBuPPbgctddBCSWJYiaap4jWmVv7YpU9n3iH4biZsPEdnJTCgs",
  "key40": "3M3g1GRtoyzM19oEGADztRcLtUjKhy9XbVhtjXqF2eX1PBvsoHedS6TXEdtKSuAv6D8U9nmNnv4KgoRTZZ8Rbhr8",
  "key41": "5q7Whm3HJz7TiVemcXD7dz16QLAzhCfN3wLbYdTEaHLn8MXbrH7CbsUV3EbkszRjXSFGnt1NTb9HRjognTCRwmrc",
  "key42": "3CtiWWPoYx6PQgqbQJdcm3BwN4KL6q8o62MSMN9PYsF65gcLP6SZWkdNkNW6azUaFEYLrKvmcPRKEbsbvYvLNuBi",
  "key43": "RMV4ePs5wJ9TZEZkKjXuj7QveG3qEPVcq2kFt3gDQwGE9zKKD4b4h6paYmQbQgaPZ7ayDftBjPY2bVcheHDg1bB",
  "key44": "3ujo9UWhu1hzoL8Nc76b2g7ATQx4mCmQ4qbce1eTCz9pxCX5aozGD1TH3Fcp944GUbvT8w7JjMa945aDaQNfNxaW",
  "key45": "4JvJukgyMqbvT1XcwuDXt2GxBhkiFapuAvpscQqvFvDMFyzBdhXyUjZcvVngHoQYn9JZ9zGkLgrG7TxQwfESUrt2",
  "key46": "2Wx2PQDCHBvU18dqoaWSSvZPZCm6XbZXUuCU56S7kLGaVb5Ln52PumfSwNu1HwJ1w5mBSekfeAAVLrMgJZ3RzKZ6"
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
