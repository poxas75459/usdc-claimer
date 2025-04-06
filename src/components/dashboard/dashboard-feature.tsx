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
    "2fYX7hu3KGBL4QdLrUU61uRUtAefBcJgmU6w79xhoHRFZbG2KvJqg69yc8kFNTM91eDYVX8ag447Lg7phFC9a8A2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A277Cr1oKCFmcc4mm5W8TVjmJfm2NEXynW4B61tNGowAJGaTv9aUjCBmkyUvJa1jRC62RS7xGFtg2EAiFYgmN2k",
  "key1": "2B3R37vEfa44SuRunErmRyZcWnZAj5q2bzAPTbxzzU8h8mD63DjuPSAUcgnwBWrhi26E46HctCsTzzifSr9Nq8Ub",
  "key2": "2tgLdv3pChA3Kc8fRH2GmRDXmrxjxEa8ydx66JTP773bQvGWcShLu6rgeooBc4uHx6C8kj2i2ww1L6GjAa7jrVBE",
  "key3": "24FRZTG6gM9CX8dVc26j2dinBRqTexxwtqP2ee4Gpu55AsZxb4VLzXMZCimpDsoigCHNqJQp8qxgpKUy3qh2WKY3",
  "key4": "5VfbZJb65Q4E4j5BEoSdDpzteVUnE8VG3S5xACYw4CAQx5JLHbkzHi9AmqDLxsh9WFi6XB4u1tP31qHwoni3wkaN",
  "key5": "4rLPyEu3dxYvcrsLdVESG1QDS7wBYr7yZgHaSrffvqpWBxEAutvHBAhMtczR4wwsFAaTtRPA4sYdNetMuARHBz92",
  "key6": "4cSYL3i9crniXPFLsEWRE6ZG835RwdXHqKoM3ymrTMe3Q8c5UjSkXFEK6grYWXPKx3Fv1RVDSDgmVgPSPJhV4fC4",
  "key7": "3taCdcB76mixogHWwD6nN3nBeT4LUEPuCreU1gTZZ312QWnLtmqSLnaCCT9VjnfmLUdLsFvoL8kXz8iQCF8Rt4fp",
  "key8": "5edXrXugke3fFaZ2R3nMoAqB7mjanok4j5ac5dFAqKGcj9zQWkwEJq5YrSmViJR7P11kRkfnqg1Zctu4eYRBxMQm",
  "key9": "F6hrDYQPTozSzHfizpUV42FUSca9HhbYTYx2B76HzbHn5r6ztaLzHcxYWW8FW7dgeK5ZbWEWSZvwuE2dbSFqpns",
  "key10": "kQA7ekHN8eg4CoNds1VtTdfDi19Utd5pyaKMPmjNHBuu5UoD1R9t23tMjGzt8kYSqGc4nUeGU3KRDbfDdCEeVmw",
  "key11": "4ry5YFMu4JMzyoPh9VZnvxqnexMeT5xxwbJnKiXZK3HsZektfgFyDgUbkp1cMo2WD5erde4QdhVYxspdUyrnuE5P",
  "key12": "55G7hLkumKzXu5595bGirnV9muVppf3hEr7RfD9qKVPFSxigyZrVnxAirBx4PHRiUfgnDkKHYLQiSt9wdXiMi9LY",
  "key13": "5ztsB7W3ztk2Ssk5NYa7uRzabQgJeRa4iviNAkAdyAMEPa4RjBo9fYhnmJGrbDezZzFFU5ZNVh7F6rbautJUpUKV",
  "key14": "4ofdeQUdNdXSvgwPTeaU6s6GVzyBEMeXwJ69GRtMPHF5UPp6vdCHx425smM5XRr6bRmntoKbpHQzDZqBLyPdXUGU",
  "key15": "66Q97btt6YXGRTaiJNL3G4LaxqWsRzVuz8FBf2BSUskc5aLy9uuh6DFMPw47jtoSLz1bBkbwr6Mqs23druArAu5x",
  "key16": "5mBGFDceUx3cCue9ZoEoeXnVELjx8tUHhHm2VK3jMdWAZJmJXjFdrsBE5Fq1WBSvgKg9uSRSXZ9JApQYeFGEuVzp",
  "key17": "4R6vvv8FsZRAKGKPXZuemsEWi5dAYefLtkoLEtbprdkgsqE2CwGLdvNCcucJ1jpMvLfJsCjMouGVtG6BVqnpTahU",
  "key18": "4LtQ9EmRLZwYMWYY6YrHAPyBhTN8yQUP2HLc9evoFHy4ny5j6EqEVgXmXpwk7fzjW5LaX2ymarfHGH5BGo93T8hZ",
  "key19": "Mii2WqR3YPkZTH5N4JFDCe5DiqcbrGdrJQDvPPQwJ2kvNr2DWX8Bc7kquRermLYFTTizXDrgKntnRgyhdgydCoh",
  "key20": "2awB8uYXBYHXQMTyguzpsBrVmhFJXsxBud2e4PaGfEABX3zUtHTsDWvn9YWQfwbZ2cR6FMQ4veMWxCp6zHgHdLwM",
  "key21": "65g6J7ukL9DFyTabnMRFKU5aUPtW4XBw3dm1LYdRSSSirtgsk4h3zyc1PAR3afbLMuQaRQ2XTUmyEoBhvqbHD2Sc",
  "key22": "2VzrFH3GSUDU65QQt5Z3Rtq58mKYyVsponZQJWHiqJK8eaZ5eaKUhCNgM7U1Tegr6eH6t5RKtF3FfYyst9jdUWr8",
  "key23": "3VcQeqUTV9n7xwTz7MxUvKXcGJzZwHL1iL9aiKRYfu9aCCtWjUGLA6BZXuG5jY1A2GW26K8fmdDZcPXjSBnYUFCQ",
  "key24": "2WDuYRQj7e3okM8q51NMuR97cDQdqT7SaiXLdiDZkY3rTVz2GXERHsJroPe2T3QfutMpHtEK11D29uQDYyNma5jq",
  "key25": "tiGt3WniWFTeWmiAK5j7ohauh1Bo4fXom8dZyhQyu4JaLcsDRfLwYqr9anBV1TfXVsBjDptN2zQTBiS7QDVuA9o",
  "key26": "2EHtf6faq4xkdkxbC1W5zwWVr8YXfXqSWRvciZssQsJrsxajTaVDbs2rX4SenitHs5fsopMoaZUgEcQVTrbiTfvE",
  "key27": "21o8cU6htWspYysbbaHG3nmDbauBSuSz7fWbXQaosGKDzW6eFkcu55ftXtv8UTRMCyajsvmCY7ufMSNtD4rAC7MU",
  "key28": "4DNhRCiMrkBjYT8Qu6gW67ttBmMcVwXSqAnVQWaqE4FH8wnY3ttS9k4z4kzcYxPdAWiyzWWThF7QaV1pXcRjUyfr",
  "key29": "2TfXmpArB7sDAsMgp9g6K8pdU6KsFSnq67MGpEBJc6GNLiqS1VhgkRDCnyYxxYbfDMXzLjD6sERMEnMED75yofvh",
  "key30": "2mnjRGGinX2Uo4zb34BzYHt1HjdBhHFwY5Q8NE8f2AmXd4fmikZ6uLEqYemhNLUhgFB8BK9bx6M5BkVMjX7Ru1wD",
  "key31": "5zFq5bPEFid5PTxfuCMmYpd2WdjHGNSUYXN9qQ4hVFuMrfied99QqutfNYgKB7NJ3QBuZsfmFLV6Wyq7ZJ1sZGc3",
  "key32": "4baxRpgP2TmqEvJ7hHFxWq4yr8RWHd4v1LHtChGMyV5tysTCxGSQmdn7V9oQMFzgEMLtRDdkSmcJVAXhTJrt1MRv",
  "key33": "S7AJfQed8rAL1BhMFsbWpxooj7wEPQo9GsLZXEqHgiFeq7ACvizC9jShq6dq81fXuohuNWdMdFXgP5txhsrwbZi",
  "key34": "66Ahzfp3FPFgnb877XGGyehcd2o17hYCDGJCtnj3Ykbfex4WaWvLUsZKPEDdZ585qQbq9maMekj6LLVTTfsBXV6t"
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
