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
    "nUJ8ZRmipvTwiptRchkQMf9waZSyySxccjkMB1CfqNa9DBF7UxP7dAaN63oFSSp2SkvnfmgyfMAWLVENfErtRPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQNkqSuxU5pMqPirkwVqkwGRPoqwrXcN9ijoWPtyjCpggefUrWT9Y3MPmWdMaxu7Y2ByhB2onk2f1UGqf629jCH",
  "key1": "5Gq6YLrsLF5rx65v8doEsdbcYTB5AETuaXahbK3NNgbsqYUKMTNwKgQQKnkC6ntFVkBLcReUQjVcFysyNV6QPkvr",
  "key2": "4ivQ6XkAwcTxxLWSmvtThRaPam8enBjT6CcFMg3piUSqaMW9FniYfPZMSNvr9rsgMrkFkqEqZBSK3ik2ni6KzFCE",
  "key3": "hYQYv9SUNpaNbMuNVBnSKqm9NHAJkkJuGPDrJ65P99C1NxFGteBKj92rup27ZjEL1DDX86sdkiYqtQoKqDCGfw4",
  "key4": "4T2PgJa67RCfzx1JVx2wcKo8nEWsNBVShdPjcVBVEPPwYXCmCiYMqEDKQpLKtRFmcHHqHTyD6tWmsfskQ2LR3DMQ",
  "key5": "4fVGZ68MFjpNGNUjAo6KgwY6cVE3SieG1UAjsz6dWS9gUxS249fDUkh9m1y8i8pyUKm2hD6k16H9pVe1SwknXc28",
  "key6": "5q9GRqTJ8wYvmLe5pCsLhRWt58DmiZyrqyt93TmQ5APmRJaU6cNCX1g6d5MU263uUNHo9Maw6bmWgTzotkJtdPok",
  "key7": "4YBtSD5n9NBXfsKRe2pw59hFTVmxA5E5h5DtMUWuUztXhtBWYAYPcK5miEzCZsm19VjENiqLEZQXCMgd5mG5geJt",
  "key8": "22NkcqpQb1mbaCHZknYMQ5CN6iEUSi7LUVHhPZEJdHqsdxPGBRt6EHcvZ3atHB8fwEnobSpAF5fqXtsqu2R4wXX9",
  "key9": "5hRCUL173LJbtF6TbXVLxWNAsiEnXdQAyivmXjUAZuXi2htfaLD4Udyw3ATpzaJvjLnuPxBrmbTCGVqxsyo4ueyK",
  "key10": "44UacWhdDE1fxUxn87npB6VdYFVRCh2dxK6eFokrXEJy7htnC5b7rNFV7ZcAeDYXEnqmDDnHhtsFjaKuURFxT6Nm",
  "key11": "4XLAnYHp2eePJCbaK6XfXTkpAADQci1Jm9g5nTKvFBGkrGrHYcvdM8UjAzXrK9nFDzxi8nNyALZTVtDwHHMLK9eU",
  "key12": "3rQ3QsTg3eEadpmfNpVh4j2QhkBEW5WbYyoZozV5ciDhCu1m5LvZuJdVLgDdzrTDpus1HQwRxy1HJwQgw3MbcMX5",
  "key13": "PHQ74zjjtEN6rueR88zBYHRJLnMxjWqAixeptFfn3JR4YYn6yHc6Y1LcstU9dyZJntpV6MfsZy95x147UEDt9uR",
  "key14": "2miuBasJVZ9wyRn1VZ5LQhAcaSfQcq9gHNj5jgeoCLNmSvK8XNckn5r59XRMpWkcVVffVQLZpMVydNE2kja79G98",
  "key15": "AY4yZgZ8TRDHxM1nuRaZSPjEfL2rDtTJhBmPaam7Fw1qZZR5qi3b1E8qsCCSfm1ArH9FnM83Sbn3LDDkGXZVGat",
  "key16": "3oJd4ryrAQuzEdshHRNWcj7MXwQURyRKnoPxnL1H6W8W6YfLcP46jgmLPGAkriLwkRFZUpNdwtctwCxTK5kGwYQE",
  "key17": "4ZU1HVJfRhn81HKn5vNJHNwGPNzi9mDGUYad4VD2RXLXbsf8WSkz1zwo6UUJbE3FSBMCRSu9MCpuWoe6LwwEj8tt",
  "key18": "3eChyy3NU7fWjWi1yTm8ra1v2oGLvpDXNXb8eQGyUcTcjs4nL8qfXYGH2CwXtqRfM3W4MeVBzmKFYnu2JhC4va85",
  "key19": "3aaUGfhpeRASe1pb2tBaRM2zhEvUdEq6y9i1hn1oG2Nt4S39KEyv7fqp64jEtQTnBJoUD5YdvhBa2tCyyVj1Rqem",
  "key20": "wELyp6fyKxZVxXGVP9GW5mqrerFsL2XJMQaqorZFbA7vETgWHDSkPMbUaBCWbb6DfGRDx64kAEhzu3dAx3pmhDc",
  "key21": "5VBkCZpCaBW2N929ReVKMLjwprMFVixe3RfSUzWyR5Hh1hmeeswSKt2RptzRef9Qbk4bJGoieeamqy2dVjPYQXYV",
  "key22": "bj8YEkmnE9dyDbsv6yv7vKcYPeoqrFwAKVGAbjvvaY9QGvxVP6wLdiV2genyrSDEiwmWd9sLZm1oWjFXXtZWawP",
  "key23": "2iamNHUE6sz1xdzT83sYM7bGHMQhCtysMAa3YU3agAsRwXS6JiKYUdGsdKinPHPhtcHdqCfQZHwQHkKtKuSchrK4",
  "key24": "4VP4s4dtR3KDwDi2NoDGKYDNJE673Ra6MJUyKnGEhvrgcTmTTG2AjKYcnwp9eeJDUGmSESyAsyZpspKZem78d6ZK",
  "key25": "3xqKq9XjTuPA6kSAZLtXuT97rCdQ6F2KV29cJoDdV8mQVdC2KGviD6PzsBizLJcU4h1jY4pdNmcETYmiU7zvbNDd",
  "key26": "5c43sJEzBjxxg8UTPSD1dVVHKd7B9v4aJWGfActDDxYJs1B6SCeY3qEsM2fyEKXkeVqxDycYbywqXFZ2mkaoEmnh",
  "key27": "24dNAesGXL4H4Y9kjUGLC4LtV16pHA5kQEe2qLevwsLHhw3yGscdkpzEsPqqgzdcopK2wpLTSDKSZj5GyFoVdy6y",
  "key28": "3g8jcwd6PqSKPVP35h8peZEP6T5W8cdrsEmwna5oEFD3UENCAHkyzJzxS8YQptS2rN7Ah3puKLVALbGub6fDJjvr",
  "key29": "5ybDGiqZg1y2kquDh4SFUxKbNKY3PSfzypc7VjVHHNus9w8ZrsEfPp111CfgUayLgv2gmauKus7t2FMCKPjjPQ8t",
  "key30": "5DZGpFShuZ9LeWAq388zgUXBRKRJqKPBctG8gfEkC2vKtJSFKXvurzCtoA7AkAQhpJkL51P1rmywciGYcmdc4bFB",
  "key31": "QPAZevUrwwuzxtkkZwKkC9nohkDmH7xgvgoVEmAeQtz6i7UPzR39qZ16wLVDGQaKYXgLH1uF69AKHk3pszqX9hW",
  "key32": "3DpvRjNGz1VfJHw2q315wnQRKgD4USvsjP3D35u392vTH5QSKj4JHXkw9BWsLMYFo4aEgn2sv8RRCmdDwZdGNQwx",
  "key33": "6V4QfrbRvRroUHwShpyLWNi9DnKxFubcTpvWB5QGGBz7RcFmRxRUNtiPGnyc6WGpC6xjALgcV9qRmXSzWm2mroc",
  "key34": "3hdEV4SjtqKPSXc5Grz3eKGAgfjQtxVH5aGPqAFMV1FDxRzELRvwTan6xkwPQx8jK3KFxXN2eMYzv2tF9YRi9gP4",
  "key35": "2tJ722WTtG42d3dqjL3RgTgJfS3Q9FHjHbAfaEAfyqKtiAxPw8HeQzQoX3LnggJBJQdo5zPBFhbTLLbcC8gtwp7f",
  "key36": "5jaJNE1DHeck9dWXpr94bGHf5o8WaPuwgJNPqySQ6HMhrSfKVxfdkkSRYLPnyR8CMAC2fsVhmHZ9ybeXJXdtQsE7",
  "key37": "5Unz1W5x19k42Q1kR3FeuTfRTx2j9R4ixopyQz6DwSphpomvWBqRnB7Q77yNddcWGenHXA3zQAJ3yKnrWMqMY83a",
  "key38": "4jH2UErwLZrsXYCsR6h3Xv3cQ9UvgfS1KxMEEh1bBGjphkrqALjawWgyXbKHY3nwjCtiJS2TEkbMTLxKeAhZTRiP"
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
