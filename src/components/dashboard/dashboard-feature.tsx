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
    "4pJEUveSku1wiRM6ti2AWNnot7cSe4q6HgfPRfUZ2E42usCSDmJqJadUGTgtrV8ZKdzoqDVRTMjUm39dELYSxxTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FpF8ugJHQuGTHh6hD33LxTBLBECFFmoLWgRFcmKnKns66Ndt6hCaXe5jzCzjDXHz9nEr76iD8Bt2BB5rMqhMLTv",
  "key1": "4GBxg7YkkzhrbmGYWEHtJM8pPPaLCE2rQzAz74BFhHMLZ8Dx9fk3k5pgYEYnD3YMwP2eZBrL9QMaDqYBfHy9BQVg",
  "key2": "2b7mA1ejhEh5SLBioBKFdvEusGFfgfzJHzHUn4LS129zNBL6MWFsZNpXK3BCHi4V2nPJDr4cqbxb8RNa6Rum6Q6F",
  "key3": "5tpVAX7R72wmUEtcW7eVufBGFxpFnf6CwzDMvjQHV2HGNnn6ZFdLD5hidrXChtSAKKPQUMvfgzG1E4VXGKR5vdE5",
  "key4": "i1rAYt3Edozb7Wwa7WqQyLv6hY9S5YYwEidua23kn3m3hqzXMuwvfFyNA99nH9DPtjgRYHNWtpTGvXbVhZorntZ",
  "key5": "3McbAaUsm6y9GKCMMdwFQiFaoh2WdxT93r6zDcKEKbP3YNabGzV13SXwn83FimaqYTqnuSF8CzEZLt2vtGPTFPkw",
  "key6": "3vQyWVJKaidkZT8dqyHTDfiU6gLXrS94Xrm86GbX7XzhaJ5R7ZbmwHYrDhSY3pYwUH2NgAfZfJFD9BUngvBJ2eXR",
  "key7": "4pbEdMGVEf6cQBei81excb2ww375cN49bukCqA1Mq2jo6WP3eXJzb7853ZiP68RZrqf689aEUN5dfLb85PHwNoUH",
  "key8": "sEKNdEgQGPVjgvwjc8MUSyQWP4tA5EKByz2SE5AFPQ6ZoHuUt37L9VRA1Grwc32Vj66NdNtLnYaLDFTia2xb73g",
  "key9": "wBAT4tBpbAymBMUXiA9tXJMnsKEJjUVi1RAtvisx5zXr2osxmo46GBUEgsTMjAL26LA5UQ6LLzHDtuKd5Sark6U",
  "key10": "zpKP3fXgPsjCzRxiaEFV276TYWSeV78x6tHZ5QHgfaHF7PhHpsZ5DxLneFnCpL2JpPNXPX9HobmR1dih4vhshy3",
  "key11": "3gvk4sfYakf6ChjwmwEyphqDALmg5HhGhZDxj7kyHwfkS73v8BYC8JDz3vJ5ECcGxFYPaHdL8m67YykQVFS93yLg",
  "key12": "DSopNS3R7ntRo6WVYq9JjNf6fVxHkWbrRqv4ctKAvPFfnUcw6HDfRzwkBbCZJa8HauxFeTpcWpLnJtKaYKxJUmr",
  "key13": "3BWek4aP6Ek33MezsBA7cGYPygQRh9cWneF8FqDReFHaQ5myfd7vTpjSN2jUnjp1so3PXkHXss3DZfuiCexW969b",
  "key14": "26jVw5NGpxbjsFySiZN8jbtD5gNvwiJyozwJwVdKGdbecQt2VNUb7BUB2hh4arGyqQ18VUUZ5quxPPLheakDEGA9",
  "key15": "2AF2dPA7SMZBUaUEwnyW8en3g2knkw4sjKu2QYDJMv3AKJRsS6StjCxBaww9iQCnJeLLoan3m9jDYSCcHpZ7iifz",
  "key16": "4TYoMDgUJ4yymDEYVYCAPQ7AEcEV4p1t6zTZwbpJ1JP1QRA9W4sQJvMDqw9dVoAKm1AmWdFKiCq4qji1wUwGkzey",
  "key17": "5uUwe44tC8sAduwtmGQ4HtR7zvQT7AMsYtBGcr7RLUTCk62YUnSikqzStBQYbDYPiSCmL3uH6ZrSoZdPUThmT2f8",
  "key18": "4yUf3Y2imc7DgL3DZg8DJi78HKQCpyvwuAS7VckkAzrjVr1MLEJXaWjkm7ZRNgxXW742AE6WScnUwRJPgq7rLst2",
  "key19": "3RR523kEnz1FuDkC6urm1y9Sb66Exv3fncCwoSbdHo9nkobWYveQLxkh8n6tJJ8dsexvcAErnmnY7YcfzRKaKYdp",
  "key20": "2JuHkZPJnyRfnzQA19fkvH7aRg4E83kWjsPD1TeAK7jhnnpbmwSmBJU4yEfPRxfWxgJ8JrSMLzNuDNud955hun2S",
  "key21": "3YwewpQ1TCMAr5Switw8un2MDfKUQHJCxGKuxJLUJFkyteGSMaT6PQDeZsFsvBrxYPoa9zskohnSPc3BRqF4asFq",
  "key22": "4iHCMP3wWrynzU7LjHNC2pnKjiYb9cUoLjubqfpmfVEaz1wMd74ihCrA8MjRCcm5gNu34D6vsrWRc1KBhZBz9Ege",
  "key23": "23be4FxGEw1VzvdXpSmr5gRpTovE7H55W5yB7HUEZUMT8aL5o78iN27bhiMKwjYwKzbCjoY8H7Vp31oWisc4cCSQ",
  "key24": "dNvQkG9pSU9TjaxZyN7qzG7kRRyjGbQiNmoTXQHkQvb7W8eAhfqQUr59GyKf25h89D6bNqoeKRPGgLZfTEdH7cG",
  "key25": "2ieAdossyZgFsbWKdTLCh8YYoM6xmKwqvZMR2e7XsBiuKJo9jBhgjp8tc89uXCh2u8KS53UPCB3K33yE89JbsnMZ",
  "key26": "2Fibgd2aLvLNS5qmKmf5mAhuM5irtRAA8GMdK4sUwn59GjiWLdi6M3LXq55EApf2Dx4uWLipWBAXfaLjEjEeYCY7",
  "key27": "Fa4q4LtMuWiiPv4mhY9gwzwqqLJ2bpukq1mbfPAtABMdLyhJzmwcwe8LQCdoRZHKL7CNE7kTUJJWsCr2efkcHr6",
  "key28": "5YswHBwtgE2TU2AJeJdNTCUYqkXrCDwgVSVvVyTw6QwCXNpyfhta4QFJsfFCk68JWbEdoWHw5N2Xv4nBjvjdDEZ9",
  "key29": "2EnwCHA7b128HEv2iq19iNtNqz42hxfvSxRaiG5yVEqkb1hXrHEz3VAAM4vujj8h2G4B4Nf9tcJZhxGjEtSGa3Ws",
  "key30": "qEGkHYHtYQDEU2CqBpT2XhatuipNXqRcqPgoXGhrrsxC1jtFR6MNeX4gXjpY3nnC5wE8U44C4XydVRdB1242YiW",
  "key31": "2ktK2yCWh7MUrBSj3sFB2RaLMx9LpwEo6cTemjGdeVcmSZ8FaqLSgGqkDZUgGMswX1PafDBqiDbBpEHJJfiFjP3s",
  "key32": "5Rj9EGr2QH3pec1zBD1HpCuHUhnMBXg8CJmVaEZBxcjb4AJzPuUxPhPfPFb8UntjtUtfy8K8Mm4DVVDjoZtz5jqF",
  "key33": "4snPfcbaVNN2j9fdm6keizR7BgWSPdDM2D3WbBBJ5rhC3Q6Qh5g5cqrGnxHHnhEAWC1kTLok9j6Wpw9kum2inQdH",
  "key34": "2YLRNWpCmqdB2wbiRxbm36CyVKd4ynqTbMVeMDJXoeYrrFucccFak2NhDhXjNG6LCS8QoqDFNstdBTXFH66ocLVD",
  "key35": "3h2FvCmUo7uLsLoNMsA86vowvTtQ3FMTJnYPuHf4FGgvtdJsaS9bhCUs3x2yymZS7pzfXZbq12u2eZkDRhdHLtCp",
  "key36": "7iWKs4QVBJ841qjEFqtr3ogwTxBmd7DKHWbdY2WwPiEuume1r1QYcGu3u23FAdgmqGMHzmDaok6SFRYXCjj63Qx",
  "key37": "24fC27LRKqhYP3ao8Uc8Jii1dFDhJs1LghGAgjGK1o5CunFL4PkiGGkagXJiKVqnCjUrLyrkQJv5JvsY4MyRPuET",
  "key38": "5uHLcr6kHkaVwKkifVqC9asB4qAbJp6pRhCccKM5ZbsetXKb7FBne7gCa82yKqefh13cx1bxaaUJJD2dsPLvKfV5",
  "key39": "SiFdJNJFCo9gouKsPEhe8ZeWC22yEnGFbe2bLYA7uPtzJovor39NFoSoTk8P65gEmc1B76zkMohDyHfE9j2E8rN",
  "key40": "5V7mwBhfSTPmd1SLA4uE59NS3xd2hmESnT5G1dbYxwikb23sARVEpzBuLrY65fBYseGTjW2Vz2XjPTZJUnsRRZyS",
  "key41": "5eRpc6qRcvmvqhVSNBi6dZuanmKVUaAxf2fLrkUFqLEVoQ3DM9Buh7oUWHuoA9RQFz4f2zGVcCiXK397cCXEdW6S",
  "key42": "52tRR3kYVJMPbN3TrBSjCKeQaFYZXQfiKvrP2H6TQX9LvyPBGaFGW7BdUuT6TR4Udvhgd6rwr75iLWkuu9W5Nh3t",
  "key43": "3Gqk43SvgkGvgg9h19WomosZvqmsCsJQhjzLqZMaXtsoAs9FxLqSGyRpMV6xFxLPzQdDhHrpFhjnXhGkNESw7eF8",
  "key44": "4HqNrME8pt1qysyY2o2F4GLptiuDh7fFAFmUQo23ZiMLLKCTQESr3DqmvseWMr5TTKqU1e2vL7TPnHzVUndbnBP6",
  "key45": "3hVyjLjopucsUWKqNSQFhzFXN9GajwoP16LDPdZjd6QY599FbB7Hqw5KKC7GmJhLjyPBAm2dpekCC2t6bL6L3Yb7",
  "key46": "5GTL2NjDnWdohnwyitvakVMqhCjEBLoq2A6XDkvpP8UbjUk4HJt4jHY53dqgFQ2aKAVpCgdHwxSD6oAMG1WD2wpA",
  "key47": "3av3ryAGGzFxHawDn7EEXUvohPGMW8Rp8STSdDqiQaEhSjLaY7numWikDmVtYD75KPkEH8C27cyrKwq4BAcnqfwS",
  "key48": "5B6tiiDdnpbGMUrx1GXgKyVfB2K3jXuqTqxRMeBDUkLccNTKh6bFLnGyy4MF42ieBpyQHkXzErcZLwb9nyWxvaEx",
  "key49": "3wiev3RPoQvQGjuoJLG8JiJ17kB4LPpGT6HJnumZFnay9MAQpnzZMZKTMJFagz2rThwopHqYyoxwBa3yv6t7Tw59"
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
