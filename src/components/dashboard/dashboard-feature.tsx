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
    "2P3BsmD5hF4iw5SN6W9gkT4gZ9sKEoL9c4YSoF7Nh4TbhVLEzfbNNU2nwSzueP3pdZvH8s2PS1QC1CWtHTHLS47M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33D3W5RmUvTaMWqtNmmYzoKfVDQBkzKFxJ62BWDKH7n53G5RnK4RewykzsR2VD4sYEpfMquYMnDUMNJZrWicZBnn",
  "key1": "2ogGpbbb8XiRmXu6cQubws4VQG18NkC3u5o9x9m2ynzx5diDJsoW3QopifxMzEa3WN23smLQLBzTJA69f1h1ckMY",
  "key2": "3HXR23gvP4efxuvXWhoRVBXGMguBYx7yk9FU4BA1QcmPiqrcqRZMuCBzT37VPZh27QWX172Gjh2deuvNMcJbDmTi",
  "key3": "41YbKqQMuwcDqoW2T3f5yy8BTSi4RNYtnHSPYE57zTD9wWjnxeCxqF9n5M53GiNyZuB6wuuEpT5BVtBFHjiDKsZZ",
  "key4": "1vwXdKMQHj7WSVYjuoHxRAwR4xbfETGEXDcU4p85YjpNgXj3FZP4K563TeDQYPhPKenBzEcX6WfP6xjRiU1p9LB",
  "key5": "4VScXxPArUcUsXE1iXtq3QiV6vexsD5TUNcAJdKk8sMFStsrjRRmi1YrDd2fh5B3WHa9NnRrURiAzvvKagMbkgtA",
  "key6": "p5e7H9AKA6NEDgriPEKJNhBvo4zRabuQPEodjLrCitEcy7LTZroKHRPPx1bci3fWtAbedFLAMtfhnLCTif4iNJa",
  "key7": "2pszNHTZKZoUiPjfNfRfZV58sr4pjZCkimMB7JPRdundHfpdqQF5W6byXKe2emEishZURXnLgsZx54ZpHxTAPzyA",
  "key8": "3rkW2aUKkPVHAyrEqWzHVYVagVcfn53SXhoTFQVLXqvUjY5KTZmLR2beHYtXe6eYndteTQfqbqjpRSQvrrJKGbCr",
  "key9": "5asQA1Gh8cniAiVwmcM3tmzQP3U1Gjqv46kjnzPXp7SmoHe1gSk5fJQ5ZJMvkDCmuyE6GPAJYnHaBFmqyvoq7XjR",
  "key10": "3CVixELS8J6kjxHFTFGEbyxBNNMvvEJAYXdA9iskYSbACzYCydqPtmhkKL3qU56EoFAN9pH15J5TbK5SeSrHQHDp",
  "key11": "52xQi6mk9ErDfyMGjHaX7W1resF38dD9FcQuCvcursGGpVz9p6TNViECY2XYE6LSJvGDKHJTmiHkgeUsDFMkfFQm",
  "key12": "3j4P7SdfaM3MZBTNSAmZfQ1DzYbPFLCpbsMknpaRyTR48KmfHtqrQ7JanYPftwf9pu3vvC3FRi4yvJjukyb52iBX",
  "key13": "4HYhHjBxedf4vbJSzRNny3pN6CZfmHp1n6pgX7yZYzunojkfvgJYXajCB3oHThBLWkrmvJCZ12qqHrd3y1xZ1QEb",
  "key14": "5k6nqZD6D8XMTxN5q4jvNsj1jbgQi4GWThMuaVPZBYDhXd8Ygh7ZnbQGLQXdyEo9wTaDkwyaaridMEFJr8TdqTXF",
  "key15": "4WZdeJyE4oY7RmaLgnVrHaD9J5hQ916dkk6DBeWsDSomYv1AX4qGRUi2ndgetX2mP2aFZPBriBdaoA2b9U4NSvCv",
  "key16": "458UWWEjJ1eHsTq878CeoGaBwiSSxTPEubR3eZrwXeaeC9XaL6v15AynF6gYNphBKRKfrNLmXD5h4VMf3Z8z5Xk8",
  "key17": "5uAPRxNWWxs3EZKmdKq4TZ6Bx2ss7Gxt4uf9AyARGtV7xgK9tw4vjN9Tohk944Eq17yP89FA7CPBT3zWQzcTUuHV",
  "key18": "23mLC5dzPnwV7vB5yUCbA5UcArEkv83RTam475zye3ThsLQ7zdJfuGZGgpv1UfFDnnTY3SqQXAM8URsJT4qcd7Sc",
  "key19": "4vVrd3w8oVvRFBQ9MrbFeiAZYszQYxLNt4Hxrc8yaJ1vXGKuwR2rcL9LDQ9cgqhufTPNtGniij5oJHMW241GTALA",
  "key20": "28iaeEewbwekBe8gNqXqZFWNCCn11BBZi1Mk4UqqnRexFeuEoFJ2entKz8muGDD6rkqgSLH6c4iro2MKd8chNesP",
  "key21": "57qfrEmSEgNftQSeCHdQyU9x6QYZXcDYZCMbyu5oW1Kk128ALFm2kzzDsaMtGLXqidrGRBd6kaggVUJFe5871cC6",
  "key22": "5xUWMqusABvJCP9QgxUtRfeoxp2jehDv3RjoEg244SSn66KN1zumsvn5xGwgjBfRLAvGbSNHKFKXCBCTsqN9HKGD",
  "key23": "4RwJJEY5CNHwaooxkaJwgUG5tZwnotmKvndmTvWT1XQvNNgH77gDWu3jtRj91PhcaUPbYRHrodH94v5UWQaGwbp",
  "key24": "614uxL4B6ZjCExRrZ1Z2rh7i2YnZKEamcH6rJb4wrCX6kRDSnfhDN3ptqTtAdE6jbkgDdZPo6fiRDoMZEz1DJmvw",
  "key25": "649yThffXx9o9qdBT67mA6nbw8uRAyZdJHVSqADRUyR9RSQKviru6JtaQsXUuwVH2BvJxeffFPwn5YTNmis4cE2B",
  "key26": "5ZJrVq2ZtX3FsWRoGZihc2PBEhCozx4KFFXSi3ctob36daNjjkYvYtphFDHYiSkkYMaorUWdH7UcKSiQszS8oP9a",
  "key27": "dWJ8cakudYnAY9T8b5An5FgPPA3hPyDkJJrjvub5zFpW8Mwk8QTuKqXD4aq3fiGYhZZXzv37K99ExuiEm45HRZE",
  "key28": "28U9h4PhDxbzEPsJzTw4nYQhdyUXLDLRNYGJvxTAEd1bNfrJDToNatsFTWDfetGqtzeztovfoQHU1w4Hw7X9jSqa",
  "key29": "4yjZgmTriZneWqD2cWNfogGhd9bQ7199aHWcb8hon7MqzUocdDyyHLcTuJkGPxYeXr9vRGdiiaVQGKwayNavaNty",
  "key30": "3TVwLE5x7g1FxS6L5Mv5ssWrEgeYJrGenBP895VYNDCeq5YCVtsD5UwpReznHVvR6FzVt88sNefEB189pVeE5xcH",
  "key31": "3fhQTMcvcuBh5ipMsbdnM4UY5cpnS1PoYytXHkBtTAnaCsiDNLkZRW7XGUdiwMMHTXbkHDWgKnckEDAAdG7LKZkf",
  "key32": "4WnEwVxn2F3i8estp4MGY7vtaNmqD3DnUq2CngcY5REuj2gb7qRhVedxwrpDYJq3DQcukC2vJgCvRNYGBrCces7Y",
  "key33": "4zzRTdUioVk7jDXkMvqiRDgjmkVWHjtiC9yaop3fZSphY9r7MJ67hkEcPD9o3Aa3DGqdL4t8BUy7Q25r4XCKdF6a",
  "key34": "5FckX2v5naTwrso9tsggjFwvgwWDBgwA6YpuspFRLnptsvp6Ghywk1iknRNmEXZaom6guoHjhdFdXqJgqDpRsx8v",
  "key35": "56ejhgMCBANuqUL9rGegdmExU1j9c2HhXfcFYLfrcFVVJh68eMzv34Lrr4eYhWDbBJ3qV1Xma3YTvfeFuCJYEp1C",
  "key36": "52GeXFDSdzhYFkJqxPkGgtVbDNtmB4uArpcsoLMqTz6CTBQs25uHnFtYa1Ta8o9mQBXD6B5VpJUYdBNL7r2i5neD",
  "key37": "54mFgtRD3NWza9x48rtgUs3CiWHVfarxrdRXr8Cez7feaaMZvgum3LUygcKmzMKgiawEuwGthndxREZmNw5YVmuX",
  "key38": "HqqkggTSBi9UfWKS4Ua61FH6FHH2gXaD31ZWqThjrTbewtYpeXDCpSdTTbL1ZGxJ9toAA21Wc1fGQdbjqV1gpDM",
  "key39": "3uDf7cf9VYUknsnVHQnDHeGS8n6jWgv4uQZ8cXKJrxTAgLM7uwZVcrLTSAvZ4RWejxP5bMhMn92KDg82fex5k5eS",
  "key40": "3XfdfkqcY1rY4FjU4Pm8LgnKm8tD1zAeUNCjv8TGjrGFp5MV8JHj5QdYvcJXQX5q9wvi71s5SqDasd5QXw8ccq28",
  "key41": "3LiscgsdopYx1jV7oM1QgoG3ZoNMRidYtXstFfm2sDwNvMLmrX12pQfr6QgsT3hiSfd4d5E2MJhvLG4ZhcmJBFaL",
  "key42": "4iJnkCe3XcYv8HPZySLN5HT9Q9z3Dr5XuHKrXDLfW9YBn367dvPbZWA8S7hsGefurQgYeNxMvcEkFLZfDbW3ZxSo",
  "key43": "Hoam19k5cao6CQxRW1spHhPJ5Rdcf7hutxvpcAgbBPapw8FGUHg5jjpSVw4kiiFzHUVs5pFxi7Bsdc7MA4HGdyt",
  "key44": "3VVzWsZLFadGbgWbxit68dB7YW2QjvYTkGu8rA4JdHNXN62Q5vUswjHmGjFBZKjGkXVBEizkMdAEzt5H1ntWy7vA"
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
