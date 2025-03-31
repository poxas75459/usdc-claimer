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
    "4nHHjujMdTXpMA6vLF5byffmoYg5M6eWRCdwEoQbKuSVi9Pg2YxBLnaD66WdbxFM9L9PEQzfXuVYFycBg3rJ1wXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMpzVvQRmTrVCzhdDYmYTppUtfo9m46GrZNL5xqrkhX8FffmRCHS4ha4rD64Jiz53E42pVbw1Z1MHfhmD1uot8J",
  "key1": "3wBxivZELqXqPpGwZjxG3FaqH4SASEvEhndf9BTE6rjyXfuFUnCk3EjGtJ947ra5mEXi3EwLm51FgtpNqib4JFf9",
  "key2": "3c7EhEPzUX4kqYhsECikf9t2S9JsZZ6somu9vyWgCXnrceNtKpPzd4kiSrNP1vYbGs5zK3uzKppeU7xN76cDd7bu",
  "key3": "42TCsdDr1BHAgSnGE1AEsj7Erjmg2vuPRwdMgsJLVQ8rB52aavtVHhVgsmPqXf2TxxnpQTgqbkGLxgot5PH5fLid",
  "key4": "5oFz8tWUELRePueGKySgZbcTZVeauUbDkL6D3AdxQpFrLgGYtHfjePVSHj1KSQaPA8xyL44qoDYxgPup4WZkjZvj",
  "key5": "4ivZjT6g5GC78mBnp1hQpVuwxoqunKPZfHaZfkC3e1w9YkiNVtPnC1K2EYkQrkFmxWvYEXbD34ezx8SxKyh5S8ZC",
  "key6": "4JVtwQBNaVzARFHZWCYY8Z8HbTtUVpKYj7pa87QZ4c8o7x2M7bZgh4tCXPtJNkBWseUdLNyFQGAP6UkCJbRqq6NZ",
  "key7": "2tzJHQPLFafvACj9YUwDnmfS2Z9E1DTmmyHVVsojK4vYLoF2Y7WDgcKiTbrXYW1KP1sTiKf1Zhyx2aMaV7YXCdri",
  "key8": "jYTGAFzsfCBLexU4GBpCM4nGUkfKmpPAhBofLrY6MrZ98kRn8MAnd2EX3eAKiE1mcBqC3gLgnkPJ2Pdq62YFdKU",
  "key9": "3KgnBwpEuPGaeE5fETjt6A7ZxmESnahBXT8GQPKzZFRtG3pPKLnJxY8sNjk8h1W2yYZEzkFNUxfeNnTPd4RM6dq1",
  "key10": "3HVkbTwDNNcRkNSStFQTyiEdpDc1vxYqMPVS4WVmqZTxK4AuJDMQZrAKEntsWrffQTj56L3BXCNrMrHv3G2snnmF",
  "key11": "44kzsJMJUzX5LMioqLaqzoMgJRain9AgBmJrWPdPM8Hye1yYH8g5WgkbJ11c3gZ3VxVaEUNhPeBFBbwuKuinAJ2h",
  "key12": "42Vatbo2wJ1MW2fskyjKK9ReTF1pAFS7VZo58fxeo997RDHioq6mejo5wMYp1mF2fBD6w9V8oAa7XpqCSZgv2dN2",
  "key13": "55oTw8Rc3yvtsX3Vrp5BTMLtQ5ir9TWhUTQQzw4FSfEVAy76UqEpXbDai8hVP4jKpBXFyYCGjqE4CpKiUoQ5AJGi",
  "key14": "4aZKgsG34ecJnVGoCWgsK6hoKCEeEi3DktEHHCNk5vr8BsFjUz2SQbk9i6FTabMyN4iXELb5hjgmXs8xviJq1ug7",
  "key15": "2uQke3kESxJuvRozZ7evHuzGQDChYqpvbUwKKaXdcwM2iZLw8ttFvVTQBhrN9ZxUnKwAHHV2Ja6zrVVR3eBe1EUy",
  "key16": "4fLiLpa94FpKPkkrNfHhBVJzL42B5FcDFuUPbZSRvV8upNrZaAJRsmwTyH2bdaJigbBbbWpZ9GzraRPVm7iWFhkt",
  "key17": "2Eqq9oSPd19aBFuc3Wj1ocT9DPV48AhtbCTyT9ykX4W2uCAxHZDkAuqjk63Vf2hNbYk5HrUu1FdAEeMReVtsEHs3",
  "key18": "5o7LXSm7UiJwF9GU6wf5AWQcZwXL7yAMkF1eBNQT3uYSjXvKNChUX3MdPTQ5gMbTppwXXVgoXEEhm7cCG3GWzA2k",
  "key19": "4APLAnMpshR4LYaEFvBiXE4Y99JYs6sU5a79LmCKjw91RZnzhR9BtJKt8BgCXWFdxJhwtE3FjeDMdQ9twvTAxDKV",
  "key20": "5TSVPPmdfCPaQhUfuc44d38CkzyRdVSYNyqDRMAy2VfQYjteWXfibXyg27vKMk1m2FMrswKhNCTPh24XNmdfgr8s",
  "key21": "4BjDBoB46rQZ6SXexV6GAfcu2JSZqKERvBrcx6Kmz6DrkcyEEvVmvTkKa4r4h5BFodPR2XejJptfk6UbbZFCD5JC",
  "key22": "4qGii9rFMxiNRHGsGuxP5Qjz4KR7msARR348NrW7JsYfaGiWbNAkpzjrXD8scaKvSbnHM798EUepSp9KPo7FfMZ",
  "key23": "4x1VeRW9zzj7kWMknsJcxJfzqTADKVb9v6XPfQd5z5mzvtK4oaKznjZCdYaif3EqkxQpaj2wrMCCdHyzfGLQZGHZ",
  "key24": "4cc9jUcU7R6yEhZfUtpCA4hQ7AxpSg6Y6E233bjri35fVvCAxitjyUkUpC19pAdpDr7KuD74qg67J4JcnRRLEguo",
  "key25": "2en5Eu9njiCBVLXg5wcJsjq3groRDRZ9eLVMuqEBg9qdDkpAxiTe4ZnyawtydFCv2MnvSSSHuLmPwytUBHDLf5JP",
  "key26": "2uLSzPnCX2u8XvGEsgryckM6kkyiMe6RG22o2iJ1KoY2WjKWCbLMqGvonJhNVzoL8uQWeqGKoiwVaqWvAw6GTcpa",
  "key27": "3g9fXznFaCfR9Jjfzyssjy3Jx2TsZDwQX8g2nRkThuR769fk8Dk5XLA12Aj1fjKY3e18a89mnjx9GoWKTj9nWBxA",
  "key28": "4PWzdRyjYinUXYrRjckgzyJMXSoHss9v9eJC3WRCDire9uySywUZPCRgUb9ajYni7L4osoDTMGmboAqB1KXZkXRU",
  "key29": "53v2fnHZJdQ36g9kdBV7pPh57Rxyzois85W4LRauemohQbGLMmytY13mhQVTzcLS848MteUzLWjHqcxLU2RSKPap",
  "key30": "62JDnwrtXMeCMi2cdReTvboXsvjrWFkXYv1F4Mqr4C32BJ5MMcZa4hvqtxLar7aiHrSd6QTKbNzNtUfL3nh28GkJ",
  "key31": "5BqpfHt9L1aBDVPYC6cH8adfCiVXUbMejkkUxPhq23W1ZMp3GiQWDGkk8fiQH9Fu3FzbphsKMQLAMcrdRPTSrzii",
  "key32": "5BYEHJ1Z9GFcYp2fCnd9JN4y1LMc7Jdx1yuVQiWZSsCnjp62eLLX9r8U6APjxJMZdnjdE2zJhy5M7Jih2fh2yaas",
  "key33": "2CrsjWtJ5ZVfpZsRwfZP2NeyCfNvNkqh6EmC3nYoRyvoxuCSxLLiG3MubTCvq9FTx2ucrxn4qppvDCx4ksHw89dw",
  "key34": "5mo8vFsgr7AvuunsyDhJoWvhzfDu4K7wswA6bXG9Wb8Q5qsypqfd9dCtSa6To4Y92AXxsnNE8vu9CHxxUfUh8AST",
  "key35": "4AHw4VQP4q3mn6pzzAC79dSxpbtE7s8rqvMFS4tGfLWdmoJUEuyUr2UY1UZxNEocBT2smuJRDsRY5hz5WQNVoChR",
  "key36": "sE4pBT83NpYy4qCfc5pv9vTPmUEdSR4ScQt71ASasdQrLpqShT7jLH1WbKESCvvj4AiLWc5uatbj68j2XjueF11",
  "key37": "26F1GqJnFS1pouTUdWTcu54cBC3dZHaE7GmCv5J6NrVzMt2r8JNBKbzrwTEgrh7B9stY2sgaz3bUA3nKCmAxqZt5",
  "key38": "3xRJtR3keEbfpPjEHcdFV4o55PxMW8YRvwRhygFj5MRtkvkGvUWiLakFeGrkDp7QyPnbdmQXRsnLcGk8cDBDEcAX",
  "key39": "2ejTrJn27fgk4ChsWTXXNF2AGxeXyVa3zUZr1kUmd78jygXmRcizPr2m1kQ2bg4K4Njsm5XKG7XPL91E44FEHMaL",
  "key40": "5oyKfvH5LfMoru95NQVbQs6wdJPXGRtHBLnGBh6aJS972g6iFoP1H8vXNQ1Q7yEyw6FSJXGfBTzEZM7aG5R3xGbz",
  "key41": "5d3nd7yWB7QFUL7pAbmtR7DLNjp39fiWzRFfXUZFmJGHiCax5FXEtTfoHixKAsr5VcAKykGwh1LCg7yqXJyNQ8Q8"
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
