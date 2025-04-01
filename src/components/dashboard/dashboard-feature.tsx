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
    "4SFwSts1qDbFEQ84ydmbHQrm9G2pa5AFcsn5GDtrqJazVVtPF6vUh58X1JZC1bqZh1iawxXYUADQpFqdFzPSzYJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mV1CbkiAcHkBD7TD3bUUK5UqtDD2pRwfb3CigFb4oDgcDELFhXznfHmXr55Pnx9JGU2v7Fqg7yBpH7Ux2MNURQH",
  "key1": "3BaexMEpd8UQ7Fk5qKMPEEWwzkwczD4VXD3cDzfKa2W2bKR5B29eR7bu1Nrvqnu4N8hw6XBrV2ZJHGfZWsDoCp3P",
  "key2": "r3T9C9kLfzt5UozjfnJd25qeU3EiKKjXQUYc6Pkth78iq97aQUPNpA69WAFnku9g5fySm9wcAkW67RBm97W189h",
  "key3": "5hxGHvp9xyQY2Wwa2Jq3LWgXMBxTNLKUCB9hm66MUNwpPK8UZMZXDe6y8mNCzvzgCNZ9TLfNguoXgdTk9w6fENsL",
  "key4": "5JpSzyh6waDE2LhUdTtCGajnz5PHKyWqiQNQ3Y5KKA7WNvBVHmtCreFyBN2V3V41as8Jf74A5V1bavyyfg2xySwy",
  "key5": "uTag8emw2Gue2WeGmZxMi41jFuXpgZGKDFkFy72HmKmP5ULCL74pMdaWMfzbVxvvDVC8erCczUBZCXi1w7nGXxn",
  "key6": "3RfnaeXxzbki7uB3ug8e18czbAreFrf984BhTdWMydn4QkVifT5a5vuQcvhpiqWbivoAG5VQhoSgeXrQ9r534ssc",
  "key7": "WVMf5obtH1UNLftZ6FmFCNnztFxFGNR3efMdVBYuNEeUSuELSe4E83Ek3QHxXhvrqYH3pVazfM34zRReA4ayf5E",
  "key8": "3fudS5S5L5X8uJE3HA8c1M3EAwuWfmByZQSCN7Js9S7KYWG5s8ohtw1FH19P7MyGK5np2UNb32177RhoAxKkVpUM",
  "key9": "33CiwLSDZnj7MyTvoxbviZmaTzvaKXzFHbssZ2ErE4bsK36kc5hf7uctcAdeVNGBY99Jmxovt4ZGdBWsJCYUnKoi",
  "key10": "3vDefQTK635ECe3Luubpc9mq88rQiAxDyHT4yMKj8HKoh5Vgdndh8pS3Zd2hqRw3pJ8eQaQvMkb9sazZkHPA3ibc",
  "key11": "2qLpG5AjTQaetfqdrWrqPgAYFnuxAtL6wNZv4GKhowRZefjzEnhoZaj73stwsVeyrtiow1qkZ6FufRvaAHuyAKsK",
  "key12": "5XjEX5pbcLWqYJqqHLxUg42wUxZmfaoXbrp9Lk2fXQswAdH2y87Hpsq5hLgJsg6kQyc1ikQEjAJf818iDFcGXdhh",
  "key13": "3CPpGWeaqRBHAg7mSLbnzYE3xojCojhzthjgoq1i3vfcajBtLcrGjRAgRiB2EcvBq6w1eDzBeTjxZHk79ymxzqz1",
  "key14": "2yfp1CdumwvhvsVbnGvaJHG34GSNQ8khyXje5oJduGjkZdDXXNf2XkqV1KZmpcnN6zpPgVhUG7T4aHVNR6RaKEJd",
  "key15": "5HVjGhpCY9HyqpUqgFbwiKp4x6rhe2uBDEGzzHanW69LYrMhHxfw4dAisf1SG46T7N6j7mQceANaYg367FDsiei7",
  "key16": "3oR6Np7Je2bWY94k17aZ9ed7FJYTWodhJTxz4Lfajq3rdRju1TyMULAHwFJ5s7GUf4XtfSftUPAj9yAgDNbt3n7w",
  "key17": "4rnXsjfiVY3eQohPQC7JgPtxWsbXxh3ihBB1yW3PCzbXbR5Gjd2vTmsLpndojkmfieCK7fRhwTygMpTsFdTrNSuq",
  "key18": "6TB2R7M6ZDzBBzf1us9JPPXBZcN18N68nHQhT71kWdYjRUYJa68ZHpzxZEFMFdLNEpapJBVY7qXzDdDwrF6w9nV",
  "key19": "2g5YNHJ9WnoFMnnHmfNEDdK1nndJYakxZqBLgaFtGhVoS6Ycz56Bx9FLTTMwwib7sKLuiMy2n1yYusXjHMkpiL3s",
  "key20": "3apXwUiGsdTMeBCwG3VBWM3kDqSj7AjBhUHC1ZBbCJRueRBz57s6kanXoL8Spsr52FNGsCDmht4zKMDQ4wdQWxp",
  "key21": "2ZSNrEVyS1DbWVRBpb1sQFQYH4wQSsDkZm45LCayhwYWCwk7obFVNe5bwXSc1GRQ6iAPZkKvQWLTwyEzFBoSK7vx",
  "key22": "5YowNpc4xquzv1PEA8juJ1SMAns8XD3zswyAy61Fg9mhV5eoheyxKEcs7knWGJKKqm8v1n8Hmhu81GHheZ73thVX",
  "key23": "4XJvionVcyzWF4ebwA6QvTKxtrEsjiZLeJ94vazgDy3aaQcd8sm8op9oTFTuHSnyVtQn3EsEFQVi8SnaSRPDkamW",
  "key24": "28thegZWHQpbEAFDtSrA7YM79eYwdGBgXsMokWj3RoZKUWYZKfgCiD98vjNjcFrwoNqkeXnaUGDxWn2i6HAAZvwY",
  "key25": "22qjY3H6hXEQACDjERbfz36knaP3VzcJD96VF6vtNxA69gRMssLxKF7jLDEvZe3DHwMjDMWZLgCVRTCSkWEWXBKg",
  "key26": "2bCg8mezB3hPXSmY8dYw3iQH6u9JFXWt4ncDnsAwShoUaeYU79JnrVVZPyrqrWmj1Ko7aPCmdixrXsQW9LcUEGiy",
  "key27": "acConafDHcenmMMY9e47mXpEZUETTUXWmWXckcuw6EGDikm4FpL3rL9NtXWtsN4V54v5Hm6WPoVkoke3HkcxJLR",
  "key28": "2B7373ou6QBQHu4AF3924UUA4sTsA8aZMXFvUAYquwQ7Z9Yj7yACXBcgtbXBDE5riJvb2FpYy8qF7qq8YZowpUf6",
  "key29": "5oWrpepaWu5cWtJdFf5vLQPJcC8Z6xzVoG91XQCknnaBCfTHZXqqnidMyWd8tECPVv66SLPTWhyoSvRENcuktawp",
  "key30": "3mNPLau6SBjYMyPJGrpe8UMsKpwBtHuaLunivKTVCuWNXb5BZxRt3jJW26bAZjWbx3z4m3Uy24h6F4jH1pJSpcyK",
  "key31": "3SZ3HCTsqMvbm4od4S1z4R5mmUU6x3pCHHZP3zY5maXnDmgrLFcdiGk9KJ4W6YXgeTzoi2SeHE6eoaWnBBGPAtT7"
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
