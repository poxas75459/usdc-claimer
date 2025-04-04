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
    "45pVeMdEF8iLjua2RHB8tpg7CXSv9H4HoZcusA6zygYmuBBzCwEnszwa1B2K2wCyokBZqfaBuefo6LcHAQ1WPazo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMGew53TU65Her9pvY3qyhiYnAtP1PVtDdgwLxdnHj41EUjdouSpj27Z9tgzEiRkPuzZPtDuWginvYgKhPpHgSz",
  "key1": "2rGqqWnskFBTEZ1a55TdeY9XX8RnkPjbsvZ5gQsRF4FYAdhnmhGHMzpLxgBwPyBUcKoSMeCBd7TUn939XUvH9Ukr",
  "key2": "5CzMF2W5osDJZ969Si7g1Xrbg98xhV4yuxhgQDsPUookGNEST3qiPbwR7JQCf7kEGXZLF48kGsGB11LZmKG3unWW",
  "key3": "2QgxXDWqdUKiTS2BUoEGamQX4h44xLx8LeKzfEVqcJDwzcwebuLYM5WCSnecH2S7W1MTdvgGD7cXbwXYC55syr8d",
  "key4": "cHr7emGs7pttYBSZnHkN4Y2DtWVKbL5XNeRc17KNt9VR4FJMKb6X7j576Dmr9JHKps9iw9o5RU3QN8kQ6b7wz3k",
  "key5": "25GZ1koG4wmuyRTCTQwqNuGVU9pVA5qtDAwVDiTUz6REjMCmVo9Nt5vtMCH3P9SSSZBHhshRDAztGf9AVZmxxz4U",
  "key6": "ZAK2gvwLrAmfDvKmThKyvDEDJ5qHiaNQu52F1i6F94W9BwCcSYQinSVdvvNcfPnMswqUdHjcqddjHMgmi1WtzbJ",
  "key7": "5wkY8uMZAzDFUNzUa96ShyeKZtcPTE1RMnEeoHHzAD7Uxou47i9TygEUVrn1nZQ5SNDBiws2Kfrm1Fko92DNH2LK",
  "key8": "2cgB1sC5sajs6votfERDNyoq7jfHZGoc1n4F6VLrhwCjhHRVwrq8SKHLqEkCsDq9cMjjWhhwkZxj8v2Ys7V8c1o4",
  "key9": "5wwFSMD3xqR9goEC8hSiqGFwCugeDHHZ9hrpMsgd1G574CCex6MWVePfvg8aFav4S6VUnbHRwUK9mwv5WARMkNqX",
  "key10": "2YEpepzccSjpzNLFdEn43kf8xEhHFNWoBw4L46j54TUtFyBCaXi4VMP6k4QhvYfVWDy34BAkdwyhk4m8VWVK2r9Q",
  "key11": "3bVrcv6FqkaFC77UnnLeETvvZykiURFu5bqDvoEePFeys69FTrLcrBxNSaphe4wHzLsi7cBbbmgZviUdqjPNzDpU",
  "key12": "ttF2k1q4iU8qBd3Q1JCiD9RPyL9gN6sKKjfn2gdF6E9HzediqYADrpvsEKhj8rq8kaLAsRAXAoWEnWSHznGYUQH",
  "key13": "4Q2FmsJHbqk8BSdCdbhqoHKxwMbCw5MfZowLJJiGRd4bx43VrWNgn9bMhtC24arZD9sPfgQsyAepy4ycwYLTicYY",
  "key14": "5ddDoS2MraC49fjqEL3FMYTyNQkTc68pvugtGe2SUp1v5V7Zec7R4pvTi6afYq7VnX4tT1h6eQZrpBtCQYQ7ZW6e",
  "key15": "4J4jVJS8rGRjSBGXBkMDMkmsa35v8EQdcj2GyoVvwGcnHrCnE1uLffV8pJxE3UfNfgVL8jYzEHCRrfvGUBv5TBm",
  "key16": "AtXaJsfNdL5o4TdS52X6wprQ4CtmVgJtzGbPwb6XbseD4SbJAph5MSsqx5pp25QDSaf6yZEK7ExHxepTALSyfhE",
  "key17": "3ARz427rcLWR6fVMByH67KiKNwkXK7LVKvG8o7LziDB2X2FNMwHgYBqNtXXaAuWNLdw7rSUiveoxuXe3L3jsKPwd",
  "key18": "5o9JRdPsMGVNNf8tYG6VFPHcWrvqJgwXsbdti8gmQfJFoFdVPScmpSkkf83QyfDfS3CcpCKYT1KA74rg4m2qFjuj",
  "key19": "5uuPsJfdXCxqnssAzGWwAhgzrTTAyM3vywHVLeVtdrwUoK3SEpuF4LLPi5FCD1TVvcj7NujKSWRMAQKG4qm4Up3i",
  "key20": "dvtSXDFz5sFASJAaAV9LdqTQoxk25SviHfboyB9rJxPCBi2okVwFy75DdZZnKTqwA4yDXyuLWZqmfWs9BJLypG3",
  "key21": "2mneEPzC2FoT54Uhz87N2a54ki6u7EgasBHvTRpyNEePEhFs1Hzr5WjeHgEQFR6Gyq6ptxvyuTEgPLfUfbQ6QmQa",
  "key22": "5PUJZBzMUkhxZJr2RnuvygANNCcRxnrwmEAHpQ53VEY3wFD4fajzBtg5gGMi9jsy1TsowchVp4pdeJpt8CnzZQE7",
  "key23": "4qPvmo4X8zcv1aJqRdKsnE5QJ1THQVyiBeVncMaXTnWybHVYhzSJ8E5Be4wUQdDFegrex2PnZ9DhVizTnHfPKdug",
  "key24": "4R1svX2Mh1QftrNrv9MA91ou57rw2hDJKtrpJNEwgLTNE2trtG7zcpALXutGgqD7dquHgkM4q9UEmQX31YP8XsWA",
  "key25": "4S59JSHiBNTSpwpsmfznDroCY4MYUUsmBiksJRT72wkFqbywuMBnZNdknFUZhUcHQDDzinEjEdf3Ygkeq7ScLV4s",
  "key26": "4RqBKizs78ypKFCzme6QpYQxUtiNCQL34xP6pVn9xvZs4kYyhqTREFqf3HN7vkUdcqvB5U86Zxui66bTPHQF5Sj4",
  "key27": "gCc1Q784RVsk1DyVF3BRs53CL59Q28cWAsvifGuyetZDzKVFCmUQZskfWM7HH7v6fWrJbUVN1d5zqxppEAQHAqM",
  "key28": "4Z9M5ug2JgSnyduv2HPq8UVEFwMmiPK4hrPis5LybS2gb465wwHrBVKr5cf9hfhT4GofW6y717BgGdW9JUNb4ARZ",
  "key29": "5EcGyrZcJZYM4zG1pB4NoGJGKf7QmhqcRdQ64soaFPN7jnAhCcrkB9Wk2YqAvnYAsjGH3RndXJMQnBcZ73xMTq4E",
  "key30": "BPbcDcMk4U5R2HV7LgtrovdiBrMx4sdYUPDjnqmNH9q1V49uUZTGorDRPr58WEZ2EZTH63FPoDq7LgWTgXReCt8",
  "key31": "T8RvDQ8BzZpzhoKvGuViQCjK9aFyEVvMxPe5xHase9xCfRputM4xw4xWpCBSc12qh9DUWXeA7aciFGEt9C2n2D5",
  "key32": "38ZPDdai8znLUPAppBj4MTVUN1HpBdhnDAjXUfrgBsmNcSC4mBVJRec2FS6gqDEKvjwMbMWAeriiiGqSUZXYnsjB"
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
