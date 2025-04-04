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
    "27n2PkpVgjgAyjJyW8GGRQntEFHsDwHHWtADoNp8biwWuxMzc6EZkofa2FPrX5U3zhKsJXEHeACZnGunk8D72vLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTh3TZbAYgEM7AKzSguNxZRvCTiKikXP3erci8LUdNaYzd2HZ3G4nCV991D8CNVCh8kicKLuEEzS1casnTKmXi3",
  "key1": "5YAn1r2YLee6ZWC5PdcaXhmcQb8PQYicBLQetERBTk1YtJpN1Zg5aHA51ZDc1fixsqp9fpBjDYLaspTkqK6dTf5F",
  "key2": "3QZnupwdY8rCxufzzqVXjwDudz5iFgaF66GA6h3FP7Najjowxmr7f2e86XMo8Bw2csX2z3BDgFGnNayLjnAqkL9L",
  "key3": "2vVe5ZuTJzjgiTtg1C73fjWAXfMHRDtE1xQSqCFxEUHF3LNKZQBd7yR9UPrjY9wwpGQpK7Fgcbve9bHf9PB61ASq",
  "key4": "4dQm7c6xiSASX3ua9r6WS4qYz7vfRnAv9HcryN3U2EWWrQ5GFKTzvJi6ugQZEzvY6dM3T4h9eBjrjjY8eBppQBBs",
  "key5": "2MLmwZ25XMvea2udRn3ieQxFpPr9KVxmaUMEvF7v7mSn5XMM5H5Mdf31QSeLTrHC7PULPM1N2xrvfeRKMSnvg528",
  "key6": "5oFRNtQLH345k9WNR2afuCahKFxE2M1VKRSV88qVzFDLqiULN6Gk3wfatBujiMtqJ7PzNtdzMz7aXh3KU9y4KxPu",
  "key7": "3pwtim2DVznJqZmpJfoGY6iuWexKxDGHNRArs3WSiyeY2inmJTMkvxzWUgsm3ybGqYPJsjrLmJe7Gjer3zo4ABdK",
  "key8": "3kJqvhWXaeinrqHfPAjCy4rDYQHftBnBv9Yw7QF2wQSwwuEao11JYYNYoHY3rB1SHT6gp3Pbhh9s4aDg3j1QniV7",
  "key9": "5yMS6EcsYPesnNgQzRRmp2q6HscJh4qmwNdTJMMHaihUGQzqnZnUSuQC1k8PR4HGuVniU4CKq6Pz1ix6zBWaiPvD",
  "key10": "Bip4WRc2PsX85aSgfFvjgSwjqivBEgrbgfbDCmAGgqvfA4Ew7P9s9d6AZfsjSWAALATaRmffk6Ppqa1y2pMStWX",
  "key11": "5ozg1X9FV3mQNZkNgLGdLasNsSDVn2cGTLtw9oybKypT77urJS6JbfagHeGJhVCCnSAVpZRTRDXtDRs56Krwnwyx",
  "key12": "4MW5zvoeHKZzDpKLL83tKAN8pNmEjDPdiv8ekrxLjx9gxTbyt6RSZShN7frmBdb4bEAnxSVWFMYkPhZBrSmXwDmd",
  "key13": "39R1BGJaKpX9aCFitzrTbdt6cNcXe1krw8fnQhjpFwBybVvJ7EUeG3JR6QFAhEnBkbc5VHkNEp6Pmo7P3rWvwuMe",
  "key14": "4nLKb99UPaczbeDMmcjKckGFqhjcdp78sJhsu3xpbV9SUR3mJECxq5J9JkdQBTDr5ur7NwQPPM1EwGKQbmVT5pvs",
  "key15": "nZjiQJPhsGskFU7XPsgYXuj9WahsQLdK9K5S45cKmt9Tz7UPdRhvSrm92wu5JswVXxnhHCSsZkF5vXcgUCWBjpk",
  "key16": "5CGCCzEqvWpTER3f2fYEoyugQsLpNisPbkQ9yxsF6YeouJLQigAMPTsKAiByxsRPbduKiGQdicAn335NzsgRVfnV",
  "key17": "VbmGPUf2536naYkLoeCYJzWQqg6uPeBEFaxb3MYSvRxAcEWiiGk7ZPxep6xCb8jD5BN9qHRRh3bRJPivzGsCYRQ",
  "key18": "3K6VwbphHxSwYkzM56KfBfw5b9YrdK8WaYtsYEnTqCDsduTf2t7QZb9f63Zc2YMsz7gbAknC7pCAiorgkv2RTRBn",
  "key19": "4dNakaoBeTF7y3kDU4zZysPv46aCDZjn3DsagtGj91W4TqdK6nf2kwuNhP1ihrFrhQMyc7sy5LRW62PabDaQ3TQ4",
  "key20": "5Kyq5fQbDbUq6W9tdxP9tvRHF2aqaBuxMZdukTNF9k5xCKmGH2o4Mh9c4vaPwd4FMqwnMT1vt7SvnM3MAKMvyphS",
  "key21": "noGxvC8FE26TtniBJ7A5pLBbtcHZJYwoKJL2oE4xfo7J8A97xKjcv3SUNrWxuoRjdhpUFQM4eQ2HdV5adneC7EX",
  "key22": "3jt7sit4nCAa7rFBL2APvnzzBvHJJQE2vyztUed28mGZvKeu6nbtndX5vm8KUnYfEDF5R6qa8abTGgfUUxhX21Nr",
  "key23": "5pwTnu6W6kgW43ALeGRerNfGqWMdctcHLwDHNDWrL1eo1AxrpCKM4BybUifuxX4j8LW9q3fpDwBJty4nHrzdQ45W",
  "key24": "UxtgAE27u1rnD4UKvwM7GPfEd1etqpiCvhN9AzfXrRc2prr2YeZP33bgsw4dgRQxEJ1nQ8iZ3GRutHZ8a5VXUR8",
  "key25": "5Tc5TTPSCXckKFhQzQAbQ3a1rarrsC3UFTfoksh89VUKZK7x23PT4imGmRx1YaZwS1GVCf445EJox4QLxCciJ2u1",
  "key26": "39amrrGDQB99jWzgf4ANb3W2Gw9ZdBugUUTMCMk73ZvV7wuLifzKwDRMzgD343MkoZKmRrWg3gsvBSb9YnSS7Cni",
  "key27": "2ef7ie8ioRf4PounbqWfHkScLYSYyGHfqhvpq7rUm9crzteU8ZJNKS1vhVYW9rhrrouxxe8RWjTRkEU194RTx6ZE",
  "key28": "2ucSdez6pB5aB45dPG1xyLHxcQWbfTfAasVaF69uo5HMuJTDZTz3oLgtpPJok7pjrtxkb1t6vawpXN1o3zYQ8ZoS",
  "key29": "2F4EHpFodzgJC75H9QjdUEeuEyPGTJ9vfNzchmSDQgPoeoVkZfx1kq8Zj2DiTzxufxgywebw8dFprK833rAznqcK",
  "key30": "3NTh2vmySS1TpEEdAjGhboGUifeMaK5wkXT7sGSQuigBtkfH29yfRkp8R9ctR9D9S3wY3UVy9QiobwiijJVBU1XY",
  "key31": "3fryTwFnVw6h8sGcwUW6SHTMCnL43iZGE4GgnTBVfsa247mtDFjyGffiQiDdzz4dBvSpPrE7FLcxEAtdz9zCwecK",
  "key32": "5EbHuf1EP8k5csWVkcMTe9GeJY37RKCpPS3xFsjCNJoF6nebfphsMaVHL3EkJ9RGyZGe5KECy2DsJbjPXfmX8r8H",
  "key33": "ZofQ58FA2nB44sG3YjbgiZRKgpkC81WL6gkVsdgfggfBPiYbQXSM98ctwpaJdk96CgoaiwzLHZTju3FfjiXXwyK",
  "key34": "4BQuUSdTD4n7xk2zw1kkn21S3CxMFXqTwATTd5k6gFAwjYw4E4TYczVWSBCqtRNmdYH7gAhZPFjtcDBsRZp1wzCr",
  "key35": "4mU4sjkiaAjmh75DYbnyGRU7Yv472HN3EMF73WtQWU4w9F6Gj7v3EKqFc3c7V3wc82ivRhVcmydxJCUCtEPEyBn",
  "key36": "3vpxeYnvoZcdfduocnUeU9ao276QtJGKsaGDoSUaaUGKgBLLSzn9TqT5ve2Qcf3nGVQ6KxxbwFTFJVLEa7gQDnx4",
  "key37": "37wSDtTJJny8NsprrpNCzDBULXF9wRNGkob5WG6Ynd6v3CBhhJEr7HGzNs62MHkxaowtg8u4JABMGpJkDoj2bnaj",
  "key38": "24fCxUPQkMoPm3N2bJG4cA6EUgf3x1cTDyLpX4YaZ8ebB2YHuBQa72TaZjCY9dgfgEF8qAXRH5zc2NMpBBFoNPKi",
  "key39": "5XECw365zaJA2arVN2XZe4m57upUygC3HgtwpNmGimD6kZXvnPSeS6S8LjQE92JzPkJ1kYduwzE43bYKmgpsSuST",
  "key40": "4TZVKq35x6vDzakAex3npvnKHuV7ms7qRTYdwFjeQNM8E4qKofqvAz8JMVyVfP6r38L5JdqBnjYnCdFC3chUCpJo",
  "key41": "2F1aHGRgAq5Xp5CxAgFUTktzL5SvayahKbrwY5pMhbUdMu5Kh6ko7SZG1cNfmkWY9yyBePLHUUCnmPDh56LWZsEQ",
  "key42": "3e7GJg2pxoQ1HF41vCtsFBSXhmmgcHR62zW1y7sYQBL8mMJZgVjZMCk4ojitigDGZNbrBP493vCmuXJ6DPadYTMP",
  "key43": "4zSBerFdXAbknH7aXbgpqarqcAuKj1tuzJH3Rc98jk2NAu82EBRqnvfB6bW7g26EJEr5Scc2km89WrrFGq4YemhQ",
  "key44": "2Yj3bVfrD1ZccFpJdghvVtjH4Az3RRbtEJKBope6Mf1TUBiHZz5DyU9WbbhTHsU6JGdExwgx8udYxerS6ncqDgAX",
  "key45": "cMgYHnqpTxkVwHLSNZtnyvdxo1cXY7Mp7K5MKiGLvFJZNRxv338rUgcwPazviV3JWYR3tuiEoxpwCcrmMjpzw8Y",
  "key46": "2rQag8MKbJJyBqECuFzoQEGdXrNaLKyxKzLz3r6ASHG8Wt3F5aHXwrxV9L622JJhY2qjNXNNLYcRdMpc3QnYFTDp",
  "key47": "4mG1nZTPScuAbyHL28EPnM6Z5LKfjJdURWmAzuMHnE8GNewX9FYhJSLcwJqSHYY74vYjA7MFGsmKhBjPV2mW1RiP"
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
