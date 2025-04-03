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
    "3yyYSjKN6kCCky9F5gKsy74ndnBa5gCxwmN2nvSPZBqd3ek7xCF1VrdDY3ZPWhbYnrKpVvG1J3Gbc6h79W5FTCDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqHG6kUbHxAnZXRu8xdJf7CAdBiHSbQKVgfcTcucksHuTWE57j8gRbtB3zZ7JVQfKjoqMhgMnWJpLvNKGSFcFdF",
  "key1": "5W6uDS3MKuibuvVXfrD9FJ3ocXDb4gBsehcBouvBQTLTk7s9zidHjBqskMRtXcgvKEjLbLGai4YBdgHxyQpJEuJG",
  "key2": "2bqDtgRop7iTy93bwsFuyxQHid23EWaQGMLUjsEZr1FdMvq95QP2JV4YdyXF1L7vv1EJxzKagWH1QdDkyNVVsXkH",
  "key3": "5jNoqEv4uEXuSD4tj6vRxrpjPbGN8Gvwcb717JTLP4MhEqMWcqmRfPy9CUzW26C2EQRHMKtdJEMAL6Gdf5eZCYg8",
  "key4": "29hpsaWxvRFR34qVXMBS8T2D7UkFsA65rFuJC41Fsu93UXjYjHRUP5U3vCDfLB2hyb3hp9g4dpCX8H2DTaUjLoGn",
  "key5": "4iPKkWPqiMSMB1wXMHWm9LvMGr9bTJJvJQjujy5QcgnE3v5PHh3P25VndbtX7nzfTFT2fp3s93WtHfufaGW4JgwY",
  "key6": "5rt6cRcoqBNZsXYpW2B1SjzhHrqmMCmKp7UykxH5m4oP5mfgWm2NJKP7Yzwe2CBUqmb45GCUTJdMzwMCDt9Ym43Y",
  "key7": "5gbjBnCNxCe4XEp99a5eFnixaXjm4Xqux9LpQrsWYxd8RKpQWHyHzttvcHin2BtMojyxyUmPkHKGCtke4HCUHENF",
  "key8": "5Rp765ptNpEhRRjqsG5soMDWERN7ko9492bpbp2cJjD657PQCmVNGGpovwuaXeHVjRcQEZRSVJJu4EgF4eraxo57",
  "key9": "3DjUbWBB8NiGQNUThnCakG9pNSAiiFGU4AtYTw6eJESaDPAxsxhff6z8ob6EYkHK5sd1pPKhkjV5ePbdEYBUtrvV",
  "key10": "2FvVX9GJoxMMpz4wLs5EssCBJRhuWBNSd8wfiLdmBgWsrvuWrwPXY65mPsti7WbtMP1B3Kpo2DWGDktWWE1Fyh89",
  "key11": "4uHFwywAdvXWs8Uq4mPgfzZM5wQgduLybzNmAqMVrpKSfd99xes7YLQQCAdU7pMpJUUr2HYUAHCdLeFZv66NKdpH",
  "key12": "4kMxRdGKDYkjMGS43EKBQY9AV3Lbk9pf3gP5DwVxruupgfKVbD8yuMVTFG9SW2heM5M5AcgJ3BzSuo2thpdKFZR8",
  "key13": "3ntH6fRbjKhpjbSSaJ4UkubfThKQMnPtBnoddM356A6p81bnVP6GjVGJUMCyxLtHKmkCRg3hEMFbGbhB2dW3E5R2",
  "key14": "3x5xu4cY5Zv9D54kwwdabvqGLj81C2pTD69Qub89HTBGHeTdtnEoN2hqyoxVyzRQiwKdPGkH6Z3vRJdbjxYe9bUY",
  "key15": "4i3xDvwT81mA6XT4eVqY3DJoGZThicu5Js5MCNGgkuoQBD9j8diaCU3yQhHXAGXRrNUougsyWwmNCig4aVueLNtp",
  "key16": "25yHhmCB6hrmm4d3dDi3skr1JBxmnLsrRJ6XZGyfKdabhR7hcdkHaPmewgoGAG3bShhEujyo9Rv4a3RYpVM9Vh3Q",
  "key17": "5yexVrsMAG5BS9R4LcDYUBbJAPhsfs4yHhwMLH77kJSfe4fSZ8qd56NXJimE7XmBbmoWMQCjG3sx4axheGzURFjD",
  "key18": "2pWtqpPfrpnnXiUJWYYPcxKJ17iCwEGDqEtn2u9q1TEX4ibRmohVAVLMu1zQw58V6WeYHpnTQXu2JQZ6ktXwg77D",
  "key19": "3gwLbo3fbB3MQJtMXBbQ7xAKM8UKjbNrFV3dNXVFBJbhZbWSToJe6HycUrh2Gx7P3eZX9Rg7YpfqbFdbshgCKZwf",
  "key20": "4SGTmLWbYgiHxQ5tsKRDpCjDnPwmJaQ7RScnuLNYKWXq7jUsmsqJAYmdbN3Woj2VPXsofswm85XpLntitFPpEuXL",
  "key21": "5xD2BceArXFap57zVbPmpDBkCT5zgA3e7jP7eJbwFCdTFmKDi9GYzVzgQomTVWEEtbCS9EZjLUks6PDgHmf9ePNn",
  "key22": "unFs7aaY7nAvfeP5UDsFSdCnpRd1hZCq8HyatwAjcCB1b49fmNPAprkKJj4H4TfJ8oeNqBiWxRw6ZUnLJiYdVxr",
  "key23": "2tSDCojeDiLati4bXW8zveKPnzSg2CuNXmyTwoU7QDtZiYoYmaq115wwHwoffx6hygQK3KhioerPGmg1RsbekQfj",
  "key24": "5AtxmeR7apZn4WJJooAZHgQzotKf7vZZ2Ffcc8pr1YpXpDVvH7Hrs225vvSUUEnurJdmSp4jce9gdD6sWtt6jSMr",
  "key25": "4MYEjrYE3W14yJ2mBM9cSJcZv46NKJfRYQQD2Jc9SLbSk7g3deb6ra84hLRCa6FWYV9gjTCreTXVUHVqxAQQ3hpr",
  "key26": "2RCc7R2Ew4gGi4bzxuPo8Dg2WZKU2W1A7LvXxggwBuFHELbjkCecJGcYB5DUmjwqCRLmHQmXuG5ZsP4oEkt7wy1h",
  "key27": "3pZQjqgJfnHLEoEo3pYGRujSxLhMVCXXWfQTCDJwsTfDNkUnTGam9wuXF2qccHFdXVLz8akjbUysM9S7MH3gXZs9",
  "key28": "4xeKsnG5ErxKjc9REFn9fcMCmkdkfE43KYKxPVMaYoV7RqCWTrPW1ntmv8yhPDqFsCMG1ohKLGRHDnHqv6Dd9tqN",
  "key29": "4VN8v9JipHw3aG1RqLUeZNXFZcC7FGYoZUtjLvGWQZYW2kqdsQX8Sm65dnLZNMGEU1AtD3u78gt41Vod84GUB9VN",
  "key30": "4Esvz5dosAKDtyY2KxFtQM9mz9w1PgFjaxgb8bo1Fqej8QP3kSyZx4RxFmbk664uvb3Ur66DPKHqeCTHEeft8bcT",
  "key31": "2HDKBpjrTZ99ZLK2UKx7hperYGAbTHMD2C2js7JQMLAAuub1wxvhAKhTxx8bWhkfNBCPqAzsqMdVAuaf4nusW1JY",
  "key32": "55c1EWNdJe4bmbh3VtFP5fQbQ9WJ3fiPsfxS1nnQMfmRBnJVqJG7xhmBzfpWTnBHAhYpmpzDAhMBRiHSnRb9vmzq",
  "key33": "3CFWGsWGHyXTS5XVF3b3JAse1b6qJGx2LpL2U69kovuYnPnVGQeHVeUdayvU5ajk1frHKLgXNbkV1oKHhhxUTrwP",
  "key34": "3d8ENK946CDc91N8CBdqU6ShrkRUznbMcbQsgCh3GGXNRWpU1jrd8zgdHoM6ZNCZKGGBdtz6WZT79v9oSUA44UGN",
  "key35": "2ehCpt2ekKeougLXm9gBKJzDQbDU9WLo1UiBkA5suuDHC3vEjCE9sWN4o2xnYVPuYmTme6GBDrx8vf3vRHazWdaT",
  "key36": "Bz4bF3gHBwSabEJTkoAuqmNeFrxeg41ovroFKLkDesWm3AhPysBDm8U1Zzy7ZLd8eVUADpJevyM18PFW1J5nKCB",
  "key37": "5nz2vDs93SBWyrQvNMLXx2E22U5Bdrd66BPQ5oiE4k6f8wnYcT5JpikRp7AejPYwjbWhFz9ipKozBKLNJHTWHcEf",
  "key38": "3ZgrrhExMRmNEqCRzkTZ7GsfaWeiuDu6VosfwKNS3EhxtYekVg2sEWDruS9A255oSmriBJTXc4pMzbAvtHzfUwAz",
  "key39": "6ibfjoYUZ4zYmUW7iggkKBguH8pDwVgHnxHKswtagCZFjxusxz4MW87fF4tFHccponZtTxfVUx26m6jCFABa2dR",
  "key40": "3gWbF4aWwKPEhpVsbcHgxQ1SE5rFXCFtP54AUXuUw3egQbnZNTLuvC7P5tyDz12eDa4NmyUtN4M5vNbfWHjeWWmc"
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
