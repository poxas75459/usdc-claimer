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
    "tRRqvRauHNU4jGhBD7zEjFQjzkKPCViQF7isETR9pprprXJ3tPQwZRjEfhuqcGW86W1e6e6RuutiFnsnbi8WC7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vbvzaKf3TX61retRD1sWZKdBsdUAvv3H9ozQjwW8XAtBMVBRHNqDGsniWFooTiVWwPyDNS3CZVYkcszBcf6cLPE",
  "key1": "5ardLn1zXjgiVQT9pNdvE5SrpWzms94xoPcPARUsvJXo5ugp71Cn1xnCdoStW5mU7PvBnit8zNXqdRZbR5PRCDSh",
  "key2": "278Mqmvnk9fNX337gpLmZ2TNTc2tNQHS1ogYtyXWrBKgmg6ezPBf6BpMmHPgdj4uFf2ZFFm9kjgyFXyGMjZQNMCQ",
  "key3": "5ozJGXyu9Q5jFgQQaZYchCcvsfNKNRhwEVirTzvYkBfysAVBnKmjjQgvAfksBsQ5JoRarmGqc9MgnF8ZncYVGDQ7",
  "key4": "3dmpSSaMRA3JhXEeqLENgU9r13MmwqT1RkPxp6bCwXAHRYGcUtsz1ucjHGskPtaffuGjYrsDjQgTN6ppzswD43R9",
  "key5": "23bn6UMZtfavQ6j6RnS8pUTxQH5x2x93J9ZwMfLZaFc3V9KdybeS4NKfpgYYf9PDTpuC5AJmeXPXcNHJKNCmUJHn",
  "key6": "5WPeG1MRDcrpTrf8b352PzdgK4mvaxTJaYaKtkcirZudpEAtXHKQhfTRWtmkkyK6ej1cvcQ5rjFyENYyRbvSYRMQ",
  "key7": "3NoGomp4hM65LpYVFm2ez8Rf12GJpoUGafKYShAWaZQTCoDRgihouqtPQ24vaEvL4uXEzGFsVFLvAaSqQzW6Prz2",
  "key8": "3gAmw7FuEHPqJQ5vh6vdUba9we2wzubyQHregdo7CPo9QZGgFDL8HacgJry7AVzmC4MbhzUqaj2CdyNmazbiGFyJ",
  "key9": "2PqshCZidwymJ8uWUuCRn9qumWei7mjBmfSkaNszn72KNXxvHP6ZU9hzheyeSbCpRydhZtRjg9YqyJugD7fsn7bG",
  "key10": "365y1x2VZeJS9nZhoPdRzEdG23v9WAPKoZKGciNTLksqPytAY6KxTZbCBkBKeYb9c9CTBv2jKK72nQLq57rd28aU",
  "key11": "qUY5ZvmApTCs5a7RDnyw8nEamAxpcWojE1KqnE4jZmUSr4JPeqUkseF9xCwZd7eFLrnj4r6ZPvXqJpaGCqT3Y6Z",
  "key12": "4vEUJccDzoxZs7FagbccRhDGUXWxEVtMqTrWBCHHrsFCwTMdmWZJws8Ni9aLoEzYupTgTJtLKgaGfLmj6dMeKF26",
  "key13": "tioSpruZgVjhFNa8hFEFhiQ4qELs9SCkgpfynWCsAFvtfu2sraKEQcnXZLY6E7wn3fsocqx4LprGhRVxnmCtdG6",
  "key14": "3acgWnvqA4qLH4riv3BzD1r9nFYEffZLt1VisAbrs5DZAphhqv5dWWncbmcLBjPcCKVgpQNdvsMYXQWNYttpc1GB",
  "key15": "63UbX5jvQSHaMYoCDZDEL7FjT13fMyWBV5nxN2CJC2Z1gN7rjfNtwYQXbnMyjf36XtyEpwkgAVKA9J8LpwWhfuBv",
  "key16": "3o8E4wCBzfzVJS6Tev5cDCk3hkhTW43fHrNGaNd9AGqypKcDDjvW7GQpGo8osDqxjn8ToKTxGkkSkNGb3AAxhmN6",
  "key17": "3CqwSEFtPeKg2oLA3qvHWNhLSncm6MHVsYYkFAE5dJrA8xdDDS6FjiGVHd93tUEbuC5zcxSSq5d9txY5eoKPFQYf",
  "key18": "2BDWTGpLwPK4Pm3ZD6S5kf2Qt7hvZQXevc8pSP84NUapgrDhNEtKPfn2ttWt4D923QM3pbKiQovTXmGiBy8Ugp3U",
  "key19": "2hGwV9D1tqceazZz3XsQiHZjQHk5b6WiaB7Sby8sDv4pPXKT6tokqvhCmiMrxdxwWq4oQXkVNAK36mQqFinBpYEi",
  "key20": "AHMAvN3Qq5McjkshTCXCSfBCz3EYM7Q5pDEiG9TX8csvdpJzyfRxHyVkS2mRYARZD4VxhGSaigUn97P3zeT3Yyp",
  "key21": "43EF5buc9rk2Fo1NBT8kjtmz1soe2tBYBeemPH8MaZCp4zTVxmMCTd5UKMWGGVvS2y4t7saxcHWvWnn6xnnMfh4N",
  "key22": "4dBKwhUNSDMuiNvRc7oAZ36Rz2Szvfzy2cNpzQqeWA6b3ARq8heU8htXVA6CjjWaYZVDR2WVTpX9uDMGGcmqAMB4",
  "key23": "4QY3pSYjZMB2qkB79MBd6vPiKYVNUwfxaoMsKrkz8JJdBRXAq3RUToCvqpZmtyyDs1FuyvNmxNMXcu2Ph6BCdqMa",
  "key24": "46gW81o9jeAFP8cLcUeYrLdykNsnrjFUoxT4iA46CeP1eFE49sowRrEUEheU9cN76MmmWWfzsNZmTt4TMxm7tTAt",
  "key25": "5q1Ee9iA54kJoK3HJKTbGNpdtYC72dCN6iaTK5ZuhU25w7DPMsQUeyo5FS6fiKN2iQs6WiMiExC7MQc7tJmomvzU",
  "key26": "p9nt7SyyyTW3oYEGZLtQNkxf5GxxAKzSPtFYqPvSPnUGSuFREinUCDmwVeMZqswV3kZXzvuED5FPXcBj6x6wPk8",
  "key27": "4UsHDAvgERtjPQAWyJ9uHzaadK7cVdufgQ8UZhKqiHyWhabsM7bM6qNNvyt3iWPuNoRKdrvgJyCwQqYtyy9EENFP",
  "key28": "4BbV8SQ3ts1rpD7LAogMovZ9Uxg4KvBb5osibd39n7ySxV8hqa9Myjb2EPn5SWPR1p37adciEW5eBRWDLVKbuD2a",
  "key29": "4mKKvcWNACxF2G4Xme8LFHC7CzSHPsxBm3nZqaqczhxKAPcw3DkVRt3RC7gCpNVoGtekSTX7GAVqyJgzXYFGjiUd",
  "key30": "52yydQs9BK3M9RrTvw67e9njr57Ljyb9HPM39AyNGPaZph58EWWRGWZR45Ri9G4oqaXadxNapYma2DdF6mhab3wE",
  "key31": "3YuseignJajgATVzP6PKRyy8tbXVpLbiosVtrcPz2j7SRaae2pYA9c9AVvv5YYFrnqiWXXJP7q7NsDKQTzBWauVy",
  "key32": "25E1VZ4ePQnSfx2GjK5TMtMYrpepZ5fhwwqKWPEgrbkFQRCyvxyFa5Mo5uzBfRr1xsM5dhD3CTqipcB2yRUfeWkE",
  "key33": "4TaPj4L8tEQE3xFdYPE57ss7YW8SRebNxUyPxNm27emhjSHqWHBtrjJuM8Sd4aJdGHbKk5ohNXZDXhaGMpjHi1rp",
  "key34": "1B3ZAiLen8MMyN3vtZ5YiCAGUhufcqrjGaabwKCvfbcm4h1xEbPUTqHxYaoeqDE7MAXVRkG3VFyMe8mqSXAkw5P",
  "key35": "LwEbQRjGMGSRSacXbFxrEHaagk3BUz8J5Ndss3R8yRSgrbBoDngTUF6d8YhjPn5HJ9N2qAcmi79MoAFf3vAoyFR",
  "key36": "3GEh24MAYFfwMrqiSbHBNjzQJKhib5iYKjJVA74TD3Qm2pTL2ze2neYC8GM2aTEtedq7iQumWXwzNjY5ZNJk4zkN",
  "key37": "5abC4WraV38M5KEYSf447rKmDEuxrjk7KTtAR5c6Kim6VYfjnaM7Z5GommY9WFKpSfXxjcJZr48kWiJL2G6poKME",
  "key38": "5P9Fo5c6RTD18H9w53L8GjajYanxia1wz5YeMMTHnhxPofzCRykPTxLAqJKAZghqcC9Uvuj4VPGjAj1gKud1EBep",
  "key39": "26nVEYxx2ysJVjSnRnWVUtXXuqXPrNhPiCK3BbDFnxCD4tEMWaBfEKU2PNACVR96foeRsXq8j2PqMSkmmZUsRqHp",
  "key40": "2WGxNhfLsPTixh6pemtQrEYpvCN4FkMi9ike6X9QoRjhCwTMkcXzBuaqhit1KTySZmkCryExW2fVyHgZVtD3YtvQ",
  "key41": "4PvqDz3saeB72rvzWpj9sFnAkG1VjcfikWSXMGy6heCxeGX9ro1k4jMxnyjbDzjCBgJJheNDZgaZoLBzkhMcHHUv",
  "key42": "65dFdZp5G1GZXSBdyaWbPMjownts3aweiEWneKHd2FBzPQJ7PgBVJivAo5pQCvJYnfUNN38xoA1hEkkJHmB1Dr3V",
  "key43": "6rfDqF5MW1UAnf3DakJ9SDuiLKfpCK2Acvd3wceJ6n12eiwChC3BCH9R9ohgSG5wvZFPRx7SCuzGShivMyJfRqW",
  "key44": "52LGKoVQTzUh69YcHC1kzCgdztEdLKwvYY882fDW2xagNrGCA8dpUDeviUTPWXTwBEpeDxWbm3kHJyWpnacnmwYp"
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
