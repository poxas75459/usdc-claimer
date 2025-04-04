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
    "49GUakJK2awVAaivM7mxfLDStgLPCGnxzRPi1HPxG54qZmHMXocPXJ21dH15a2zdMbporJ1DoAa88QqGwLhqpRw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5copMRMF7pJarNggyxZ2kRo7R45Ckf5yFthsmRdrLmYU4hPd17eGm7txoAYAurPYQesq585UCP7ngVFnzUn6ehYN",
  "key1": "4HH1uJouhWHN3mpAm7qEWERC5sd7Xz8uMEMbDatiovRgzUPvPztz5Wvd4yDwkkZVhbqGgaSwUTdit5cHxxPF1K5E",
  "key2": "FRNnASaQKJMe7HAknQ28yh7C7LBum8khVuSRyazuxAMJMkHW3GdV5MyoL1B4EFe4noViJgAU5XBQ33aQvj9PNbk",
  "key3": "C3cUF2krkpTgWYTqioFH57xSaUGJqFSRTTPLEqe9LsFp72UQ5aM8UMYLiTdepn6Rir5q7nSQmYUDDpDCaDxYrMd",
  "key4": "5PnP2E57iLebxwKjbPojxD4U4VG6Svfju1PBAysoudLXvyhBozrujqmkrh8s3o7apboMJy63hXASHnsaWNctxXon",
  "key5": "4oLGWgF2FYBvyTqxRjFJunHnCT9EU18B1drWnjuX1sQQ2KBYiNiYcpakPdeA5773fBfpZFk3r1zUXExT2LUhovny",
  "key6": "3WDALEyNXHfvzYsxnLJhud1orLfdgKp8a4AMJXL37fLU4m3yBqNn8Sd8N22YKSdGZtowvPhiaCBnGiAvA29jqtHr",
  "key7": "2U72uPsCeQ4GRtRVT3Utzqr3FoeCjW711jtZruNGJHdML84oSmNk9v7Evw8P2Ezr4bq1kGECgG31Wyt4gcyAbQcb",
  "key8": "xYqFaV4Zrx1x3FN9W1hL846sJ7BVmJQHHdGefnqYmJtof5RKK3rW5mWd7YCWd11jzTCwfCAXxui85tSVBx2Ltb2",
  "key9": "3Uoz6DZPex11sPKCBdWBkz9i56EdwpssDcLMM1sQ2Vx9ru5tRRmeufUcZSALs71UfCLN9F7nfPW12gcLzuzsxPSB",
  "key10": "4f8dYpDEWmYUZJXxTtPqqtKHmHmeHJB66AxSE83Q3MKwagHRwiZ1F2gAXTjFGWLaWmQhbWPChdVa1jhkkH29HK1N",
  "key11": "3YDyKpdU7toVrdonjwuT3aouTC397w9m6YdfEx2emsh1Yw4wchWX2tSvNFLrJd3qJPTyvTY8SEYCosjA62rzWynA",
  "key12": "4hNyckvf5oJBpqea22X3tTMutn3tYd5bzfcJttVz7jtc6YQHXu4YqF4ktr14Mt8ujwoSpPKqhdaFcet4DmQ59Rin",
  "key13": "3oPa5sfbccQVv9MHnr6M9Bfn2oWqckYrU2G1N9XtWhtnHT4H4iK3nLwwmtbvX2c3svGbwnnpt3mrXdQ8kccjEa8r",
  "key14": "2cbk3zySRfJT4kCBzeea73vibNHN56T6ZPBQMQ9b1XVKNHXWWFtKRoAHKf5hvoRBzxE3XRmNRo8DV4G7sKUUgYht",
  "key15": "4TvfcuKPQMtLrUuc7gythwU71KnPzdjumFXTyuCWh8VPBACriecDmxKcexf2mvKCeCGzYnodDSyzRwEiDdEp4i2g",
  "key16": "4d7nyV1XaonJopdswpGXLNmjtZRjKNYpFptR1Ph3Zy1yvr76QNWsJATQPkG6Mi8sSwnkT6oKtiX83kfbhnP1HDcY",
  "key17": "6Z9njWC2DpQzaqUgQ3d7hKrb238wc3tQVFT5PjRpFkp4oEkxVUgcrwkrCQHzFzW6ui8ArLgSzAPV92s1KCHzFfE",
  "key18": "5qUTz9Hvnuf47XvUzbFDasbQ2gDMo7FNEouZCooizHhM3oJ3BMAvkZy6VdvdAn2WpVRJQuGTLYBHaRPLMWnJHkyX",
  "key19": "2TLvDEtQ2kUEd6YhdYBBs4NAjJ6j6YJciE3VMvJ2Atq7nx7N26TgBYvffaXhhVTa7ijK3L14dWkzp9trPnpZYCxP",
  "key20": "4pXzM96WreRU4VbDGyHW6MrbajT3eG6EpFQNTAsUba9H49y1CweTygwcJB86C74hv7RgZvn4XxajDoMrKxE7gay7",
  "key21": "4cFsJR92juk2Pn1Ax7wP68VcCF4mykkw1zotALqiS5EfzRM4apmE2QAarpQRS67AN9LDCCw1KVCD4CbVrcDhpqPc",
  "key22": "4wRKcYXwjiUjZ6jnX3jTunEZecomEENRD4BC6QnswvBk1JJS8b1GVoc4m84pNGaGa21jq86Jwn1jwHQbc6RbDGtH",
  "key23": "34MY4cFPkv5MtVAmgaC2Ao2j3CMRPopjPLLUAdkhuL32kJamaor8RTp4ZXGq92UeBFCLuVAv1n8EbQ38bt8SHGxd",
  "key24": "52eotPhpChJUMJAp6sQzxSEyomVnbhYMQ8BRRmJf5UNw8V8qzQF3qcHthKVirki6yDM8BJDag8SQGJtpqiaD7cRG",
  "key25": "48Cu4iVSNeVCUqXaQkjn2KJTkQAfzcb8VF5t3kdm6cKFZLrm74Un6wSuhSZmjdgoBAJmXrnZNesptKmkA4hNt2eZ",
  "key26": "5mURxE9xhRCFuH64QW3TqVvCJYwAF57XY7kGwH5md9dezcVcmKxoQdpDFSSLetJF4eq21gpin8dFdqK4Y9ZTPDXa",
  "key27": "5vGtfXq8nFuEnLta5eg8Gni4XLuabqJAKX8dqnBsFkii7ZB99gZ44qtkTaZ6g23eSr2Jd2RaKu5VcQda8Z1KCTWQ",
  "key28": "5BppxgCmvuN9X2JwP79hXBqTR869VUHFy1M2ST5tY41QvHJvtAeVtffnECcaef49rg4NH73wuZKjfquPrcQ6LYx5",
  "key29": "5YeE6wp9QwQQV74BuzQGpCVmHskiyUu3xvMt5WG26J3xoLwTHzHCei45odUpb9Y64KMiEGonfeCuXmqgxupQpsZ5",
  "key30": "4fcRePpohF3PrKQjwvDcdu5Q6gAE6eiB8hdCepUdGuXmxaQT1NHcsNBE2LEXAFZLE5eyKaLZNpvvNC7r1xFXAFFs",
  "key31": "4XfwqbXLG7jJWMnte9v3ivF8KqUyEr2cFRqe2xKLrBiyBENX19ddGnTwBj6U3C1Ea12HGUPeogvtkzRuzZJ7PQSw",
  "key32": "272fT23PQ5BF7aNrV7UFPV8A8MaPsAG3NELZFqa92r6WTpRtrtkj1ypSaDSzj3opXPK1qskGb45t5ZpmJe1i4GDx",
  "key33": "2MWWSL5QzaJ8M54JQ5EefW1Yux9aTaGNcfsk7NbRyi8AFJdmFjbqzW33GJrbQGUgPQkPbdVpjvt8hqvBHqBNFGB5",
  "key34": "3KFQmCruWY2Xafib3mR3kwmCghznYSAaaSrjqB1MW1gxFa4ovd2BP8W4KVak5PqmgTVXZCqJKgRxyvCf133848tp"
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
