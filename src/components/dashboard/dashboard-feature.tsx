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
    "3yBbHA3GY7tRATMyyfcYXkvqp8r8cMBhrcUxR2kU4EcX6uGpJmak4shKH6AHvpA778BQmrXbU6KpzdBHGsG4FG3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pyyer4KvoKKWZXMhYQGxvW7zJTWGeGebi3upFwgBcnhD3zNUzJWXGmUGPfftcqPrnbKqsU5jBtp2rUYwAYcU7tL",
  "key1": "3araLQzHMNGsuVcAU9cDJdQYJweNoSWtEKZ1bph5MEvxAAnQih3DdoQw9omgJ2gaaToAk7v8hQ5qWCrMkAwmBeNr",
  "key2": "j9HFeis9iu8rdCeP5to2gEmLxiknkNTe8ucMcqMafAFn6e4RWWdQzD7EHDDxMvnWu3k3Ei2fJwgLFgJ3VUVMTgy",
  "key3": "3ChaTWnWz6BJfMcLAWBFcuFB9ZWoETVMRCMn5K7ZZfZuu3AoQPWT3izbNqSC3rfkzEoWRtoQUnsXjq8eLcm4Juie",
  "key4": "2r5br3CPcUr9Mg4Kai1rtAm1tfzr2cTysA3F9i9iofcUqveNbfXoyLGxRknwWbgJRVdd3yPNYT8ERe11a8XjChjK",
  "key5": "4trbqT1wTJUxQaS4Efn2Mcvsatvm2h9sNcf7kg3RR8sRQXdUcDbix328dUW27ckZ2BuSoaQapkKA2yG5sxJGRefY",
  "key6": "p4e4w6XYoU5TSj6WQYm7cfycsNP2AMJqN1APRm5fjam5f8CiJ8QhwvxaBieQjuheV7W1HLBwy9bhG9JT87r8pXP",
  "key7": "4K6qs4jcwJKyh2P2MDJxuNkFxLDEQs41mK747eQg38d2N13qSZUDQTm2mtE2hg7JHt9Mt5v5zUqBgKUzbFCzd326",
  "key8": "2QxH3vH7v3yM4vuRLhi3TuaS9h3pSiwbR7rGX8TBxUy5QDky6o1rPxwFzQGL2PZxe42k8i9EhdzmfBRtChPG1h4D",
  "key9": "5RxndGJ5Bq9uh1SJC23EysmPBYvQ6VEHpsCHZhgmcznxzatydcwPGLFyG37iAAQC6ctfbDq9KphRUbQAsxoC6uXs",
  "key10": "WfT7yQ2KkwZjs6EeGryyUEACcwibpFWiPB5pQndf7Meeg4TteEqiTpGnormNKwpBSYfCjib2JsBkTdDZYec77BS",
  "key11": "UszwBLqG8m6cabRDn4btCfcXrvDsmzUqgARM9cssF9z4jGM9Jzn51Hv8j1DZ5BLQNMh8uSFzqf6trjLAnmaM67h",
  "key12": "4gYpgKRXEkiUmwQH6QZfgXVFfxQuChYZyxpFKrVnAyhBsPcNwMN8tvx4jeVoybdnA7TDaQBJz4J8fnd7oL4wEQyM",
  "key13": "rHnSBosE6NESDY2i8Y7HaSP31kKgNsdJuNAXNb3X7RTiAWF51emVB7FgrUBgvCfGrF8mP39EBPUmoqrpRQpcKi1",
  "key14": "7JToxtCvsapVpkg5GPkpTbpKN5YZWojg3r3efMKaGymYY1f6YCeKeMtsbWj5Mbun4dVaQkz2JsrVEp6LC5sDQ6T",
  "key15": "2yUSE1JLak58NQudXgcSHnH7htsHPmfDXLDchEPucBJK3QZKCRZHxfK7EcSSSMzTQFnH4gyJvccBssYDS12FKN3v",
  "key16": "AS3kzH9SapGdMLoSgfnbCpquARD72AWmvrB13i7cFaRE4QgiYAsptDSFRkLxBXcbeVCUx5Qxc22XmSQp5or4XSa",
  "key17": "5RDH8S73kQQL8qduKgY8tfzTXJdeyG23YMpAAJFkVJRCSngo86oF9CcdRxAwgw1nz7qZP556o5cTZEM75v2BhrJu",
  "key18": "52NgfXhWNrDQsft1GttMpVmdf7zSYbFduw7HQGWB7eFHMukz1PgVFE2NEuT4Xjrv5jogsfnvq2sRdBwvQacQu5o5",
  "key19": "ABYuxaz1ktgSzrd4PU9XX5u3depDyErRarbfqDosXP3fMAoW2qbYQCDtoPLKcgmgf56jjyaJdrgzVUKn2bUf2N5",
  "key20": "34AXTGXNoQL7nhAQppdcGg5MNxE2uSKQs4Uc5LNFhwjMDgfUvddhVZtj3mN7psBsR2HK1MdPqEEqxQuhMxCafx3j",
  "key21": "44SKWX2cga79SmbfccrWwGHRwjB8vX8csbxdPW2iRQ9iTSsbPVYvFiVxjCcfsTuUW2p7MWAvZzFqGdyvZFajsUqM",
  "key22": "wsf1RYPinidZJyUm6k6z3mSr6Vi4zmp6HjtWcJ25dVDzDmsg9g9KKQybsytbHRCSRTGxWEeus5W2zxjmLFKAonp",
  "key23": "5vB5tnFH4MgabWv5Sgwss52TKpGdJSK98JwsiUk99nDdx1CPA6JQK9tm1DtB17vbL6BXZLYWp5ME3oTx3BGmaSye",
  "key24": "56fwvjyKShZm2yEKP7GRisbKzCqnCiVh7ywVv3jiq1wsaMkTpE8ioCxTfFtrwLG7npMPfBQwy5Ye224RwH6jKLjp",
  "key25": "5go6tV5zctkXgpXkybF7Kwx7oTBRt6f8EBWkM9jraDTU2HrR1LAsKsUQdxxzMpQmyoQ1dma54JCJnXQatFUaDR3s",
  "key26": "2WYLGAkQ4hxshgbnjcRP7GhucEa7d54siLfocx35PKkEWQbqBGxTU2SwuFrznZs37j3u3ZLBZ2mVDwxhwxWWWbwW",
  "key27": "ALTT69b54wQ1qFksXdf6LiAxb9nPBs6LVxXMUcuGa8CvnDCYDs4oHkwDzzhn1qM8AcKMRahTWdK2XQTY4Ksp1rU",
  "key28": "5dDhf1hSb2aB34PhPsXNxZ4WJrJncVtMyU6YV2r8n1ik7eUQGSxAYrCczhoDSKoWdqpPrMZGiYUEYMWVXbr1aQqH",
  "key29": "2BYDwuAT5pswtjmphmz9bwrvZN3CsKzfmjm7xJPSrqSJTMXeRqeHmP7Z6Z8ofoEJb3JPM5A52ERoNzuBpQaQF1mS",
  "key30": "BdUsbfGP4GU9oJKk523zBXf1V79YkssrrszwhER1gN1aVJg7DonEw2bx3kXZRgwHojz1v5gdRM2nQDkjtu3oXUF",
  "key31": "4TKStX35jeUyR3yMmXpDsPddKK1g5txXffqiHrz8JEYT8hq3ZN1k1PEntzCUmJPYCLKweGDDhunpfMRckPE5nAan",
  "key32": "jCShQS7WmyvPtWDzVLCCPLRTqEokg9SS7w7idiDpJ2hToVEFWTdjBKwM7PzvB1GLc985vTiXKg8zix1CUJcmXeR",
  "key33": "2jyxRXFThXr7xCCLqrp5hi6B87Raf3AJFH3ThMg5eHGwxVSLa5ggSyHnLdDbexx1qHE5QVANTgrUfTZFogfrUBY4",
  "key34": "5LcatxsP4gEW5hqp3rS5fJXXMnHea4pYq5s3enCdmT6sHHcAiZJNi1EzCsRxF9YHE8BSaHkWVJNAJKX1rcnq1rvH",
  "key35": "576xhFCEdrFU2GqDPJEm8Bi1isVKxETbvDbrT4rP4WcRRePr4eKYM2U4rGA3AmGPEZXRPhYU2fG4bMd4nP8F2q6S",
  "key36": "5fXDd4xU6ZyLo1D9b581nJpSZRAQCQvAsmtVouanS6FVxBZuzRsZYKSN58DTDFqfkZUzTtyVueZEzqui6gAgAFJ8",
  "key37": "2z4ZAhTbLu5ZbqxgMkkmfJs75S9cUB7gaVoqUG7MdJusFu2yrJXnQEdwH4i65B95pffhjDWUWZS8qkuvpdXCsgPu",
  "key38": "3UKPAwpeFbft9pWhU9E9h3FviKGnn1gdYtZ8ntQb77yPwi68dWojx2qgZSbdaF49EusEFvPFv5Z29BmoX2Gv4LoH",
  "key39": "3uh5kQpN7fnf4dkiHRRM8VteuEZGYd4NHharKUwg2GND1qeQ6adaU2oNNTGthdf7DBWw79p8ggNrX5dnQCoJZZB3",
  "key40": "3QebCpTmS1mq2vbW8v2qwydYV8rVt2zX4QqBiS7bPzF7M9q7cKT2c45gGgn4QLEuRAuveuha87fpvDTdN3LwGu9K",
  "key41": "QtWYxdJyHKnBHFP6UkNkjJVbMDMVWZdsE8hTZqs7cU2wAhBhdBxvT4Ab1Tcjwf9rNYFzCpQomH9EweQSRgGWcrB",
  "key42": "Z9s5kPqVxRmaW6ADqppC4pcwKVD1jahkY4JZ911adshjnvjm5SY7cvmHKha7TzLuqSRpBvwLad7pvfgx5RhcpGM",
  "key43": "3axHfxbseksr6ev7DimFdCXwc7PAnzTJR6FYFZsP5X3QQvJ7pyan92fvwZRJ1ja3mA5zGPAg8n6geDX6aG59UMEy"
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
