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
    "3N1sTAc65jCWcsKwyZNVg9bC1oviHGWPsKy7dNFX5njhRTrYJYkRatCFT2hrtEDRkWtBY84nvdUGeBpi5hTz8HLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MwCf61g41CtwdH6SAcQnKUQ7rbZHt38w2rAjHFy5v6ESiZny2FwhpyK8hD3LoaoX8bn2916xGvsQaxx4LrJCgz",
  "key1": "4dDeC4gsGvS5BDA3CxJZ6u4SdMGACZ6YKVQNtF2jfnE1oazHvKELEqHauA3jEdWNEaJEd6vTyjaAXK5kbpcc8Pa",
  "key2": "XVJuryvsbmviWwNfZxrJb4iAv1LktUZE2orHoUpzA2VMEijkF9uXotBpHEEqiKkoVsnApBCFR3eQFqUjmQ1Z4kH",
  "key3": "4ZcMtQd7ft8uyJ2QyHSp17qcRi4kt1uuqSqfWGw3YohWNmSLxccq3VtyNUcB6eouuzyM3PddDNp4uuDv6bRnVLDp",
  "key4": "4tX1tnH7QZbnYkvHzfqh75kagfHMJ2Dtfw4Pa3QihgRnnnpkbbp8ZiS6xZ8B3yMNwGe1MQDJLsnhCDiZwT1GYTHz",
  "key5": "5NATJoqjmMAFrrVNUeP6R7cvEJbFYL74hbtaumvpgfRhjCcb39xjQ1n1Z32GZfpiV1Y1SecX4MXYDedPYGWAjbp",
  "key6": "5nnWiLtAJgxFb9eSEy25AMWmmKFpKx3ABzSfqwRGMwFETFhb4HkZoTdh3U77aT9Be5sE3Ksg79ZcEb7aRdspT9EY",
  "key7": "65TY1C32P1rE3DaStdK3XvPwgzpQQ9ustakD4rkuiEfNaJZQPpiNoerRXW2iRdoszPnE6hmBRPeSFSD4xC4ieQzJ",
  "key8": "iwChwXL8wwbdk8M84AJdiCBjgwGv6MDC5QN8HvQVL9jUCxqLpuKuzhL6TfSjRH8UA4eFPqmtb1Wqoj9NrBX2buZ",
  "key9": "5LaW9YzTndCSDj5jjEMcuHnXgYRAs7JAEdoHgDKud5PDokvN4g7bbTzTpABMX8mxCW5zd1SJ7Q1Pmghn9C8oDCBm",
  "key10": "5NFpTx3R8K7tbQW3GPxtyM35gP8H9CZ72k9B6mTEjVuYLPtopgmRryHGFBgxGsYRzJ8RPXfWMQBUb4dRvyCrQ9hL",
  "key11": "qP1qwZUgtBCFTr8hqhVAjizi8ge2rbJeu7eRLdfDf5XpTYvVp4c4sxg7uMKCKffHXHP4AbXTsmbRiFYNEhGmf35",
  "key12": "eBGEubCXLEJ3VBrPFY7LYmdYPJ2VQhodyjZMvAUFSrWFyQTdaqniVvQytxR7bWVw1btaxYXAvhGAtduH8e1vAfq",
  "key13": "4Bfy8Dd7TC28asg34z5QgvuwhqQCVWTCEDLBHQxQHuAzJxPjPvMFni4LSHUxrFYdj2B93ev14bBm4B9XEGt8Mm96",
  "key14": "5v4gsKT36vGP1k4kspKoAVnKEJCgBdAs72WGmYXkx68CLeZi5Mjh1kqKe4qpMEpzjjFiyVkNHK5W4YrcxByjFf8o",
  "key15": "4pqq1GSvF7mHKcMcKn5pA91fU3BSWjuCqbddNpQa4a8SQi3L5ezvDGYZtQrLCj3Py7YfL1FyqLUevLDrjHfbtVVT",
  "key16": "4NF1iUHfMkhJWVyQjqJU1C73gBkCVVXmgXWdKHxULjaMrmzLwdTx47epv7ArqKFUvi7bMyhzvRqGfCyCAs7B8DEt",
  "key17": "3ykH6Rdw4XfFF1EW4GwsXTrvLSs16z627Cm225aJeeCukfTJg5AeBHMwMiL21o95smXpJzCLSTBRKEuKrBHSPn6G",
  "key18": "3GyvtTrXFt8KTuP8TF2X5vmzBKaeHYD9dCZrqGwUhG9aJHzCiXqEW5TxBqxJQhyRKUx9b8YpBWwj3mqcjLkM15Wx",
  "key19": "5m8mnp9aQQF3f4JwijgApNy16dvx684GwwyHqwbPShkayabGx1Xe3eruKkZ1XNHHj8uB9urjsFWuZSgbHmnanSdn",
  "key20": "4aqdMZJWHYh6TMM3jjQ3eSsPPjUhYLrSR5zFyaWti7hPk471Uf3A7Frd7uxY9RVBPkhaTtBKBAuAJwU7vw9XA2Mn",
  "key21": "2bCsNuYusqkM6WmtQvPSwMqgnG6LQHTAb4AKdjtWAn97zKk3eH69NNR7u9NqqEB84khRak6n2APLMJdUqzovT2ih",
  "key22": "3Pn1mT3dfwsAdAhXh1m2kurJwGN2qNKiTEnyPbZrWWBEecRZaAK78RbtW5cdqDvrsdfW2mjYkfsiuEDzRLPJSJCf",
  "key23": "4wR151gqD7iUVd7TmiAK3mLmqs8TnjCnuG61H1zDoCFkoL3W3ExRDENU5iLnL1S3r5MK1FpipdzaC4vtEBTMMd8f",
  "key24": "4eAS3GjzCLxpZfGsP91Nf4aTabAd5fMc7qtqT5Ff1FhWg3MtLoiYuzXpE568W3TJbmEb5GmroBFbcBiDpcvosT5i",
  "key25": "3QcQk5PThzNve7fU4W1khy6vuLSeVz42dESNXAkSjFhDZTKex9qc9JngsBtJBDdGaGRa2FuYiLEPJHxzATHTgeFh",
  "key26": "3pCSGJsYMXwPMrLCsMG95w73wJ4WryUvUsTtWcofrfbbk7UD5Y4yTTDtu5Avm8jtpZDa93VPRYSovixqgqgfvUgE",
  "key27": "4Gf41YD7Hu3dNyfpZjc73u3k148FtSYgUL5L2uwK7kp8jAb19hU4dCjYy8JCYF6wkEV7cLp5Tw8SRjagHhJHkpnh",
  "key28": "59sPjqgLLnsEVgxJ2QmUDXuN3tC88tL1zZssvnT4cMwGBSrqEwhLmY6oFW4YWYq6mJ7KPtuYHiUVka63iEZCpSed",
  "key29": "5CxrT7QHuuNCgMU5k1MTbyuRGfjUP5cC9zpDmR2ETPRLvzBppwbzSU2VQDdvxUd9bpbiRryuqTU9mPbPerdgw3MN",
  "key30": "43Nu2uDZidqhdz7QEYrqJRmQR2iDGVPypMTP3ygs969bpzxE3EceLc7nqb3QU3nVeuLMUBKjHVnNoAk8uGjfw4Q3",
  "key31": "3puC4PAQnNT5BdmjfkXX8vkP5SpwakAAfPZ1FWNU4wjBUUwdS63ga6VVLgU4aBbyxsxTnrY7KLhzXZy6zqrC6S5S",
  "key32": "4Ki7YrB9udro8wFMn3mmXGJNxjE2cZYrPqGD4QmFbsLHMEwmrZpcUJmXhnCwb9whYwhiVkacj3cU4xe5MZbZQurV",
  "key33": "FDVhPkd7KH4JJTP8fLB9LDCTDVDduUENmb4LujF83iEFbgA3VhE8zUoeCV9rMFCdTtJj2rJDsQEUqbycsppK8ww"
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
