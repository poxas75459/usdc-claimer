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
    "3RU8U2aox6UtM2ijQfoy6V5gV1PZYr8DHFxq1QrqCoXmrHeLrBG1TjSZ6kWi6fxyJzBZdTVAUxxp26yGS2bqrzvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xrDrpmBPs3NHsDwHcCfntreFPeMDKjfFCM9zY66djzcCGfAhhwzCPCGygvcbmkHjJ3rH5SMJHb4yJKppm81Vgmb",
  "key1": "2vs5VtR9nBGm7g9FSke8hcSL6TNwiuPxDAcyBGY5wwt5o8ddHU3Bx2JaLfjKSQMNd1TZTatJRJhvf4rHAqsN5sFQ",
  "key2": "29Vagy41ZJ1AstUWxXwMAKv6xC3tN3xtUKCpWPT1p7kZ2NVb5SF1k5qZvQENemN23QzTGbuv5BnrbJ3wdZn7wm9X",
  "key3": "5nCcHc4BdAjitzr8WQSoezo5SwMPjmgDDHYBcjeztvLq9yLiPRbnkrY6JqqrUjN8KaGWYztWigDwPL166JcW3THC",
  "key4": "38YVtk1WY7tMZkb6Lb6BrYtsW2t45odatHGE2m9cSwEqzuHttprFeCnZ778MfLTGczi7ihXcqmsTAj4qery5EHRJ",
  "key5": "3BDyFY9eAvGarVfY1FfcceBLCaJxJ7gJQrksFEUuWzR7frHL558mdektbTAJvimS928WnkCCiETrXcikpntXu2CD",
  "key6": "4YFmmXza5dgau1cFzBSuFRcQVr98wWpC7r1yNSMeSBxfzkYXyHqvKFP4UQvXydRRhw7xmAMGJDMTtGiVPhAaFa3w",
  "key7": "37DLuvGxh2J4DA33eL4Bo2o9Lj9RWYa4NSp7U842Mz6tWzmLAiCQFVLSKA5xCuaKSrXkxsJfgDS45uhYd3XcuK2e",
  "key8": "2Mpi4vGcyxPJXLHJyFCDqb317g8P5yAegiY7d8VNSYy3V8DMhWbcDB9oT6CY2hQaZnC9eEH3ytTgB7tLVBWfhVoG",
  "key9": "J5UtNLWcBiEWdZi11F4p36TuuuUZMEYSB5j6ru1485KLn1ufoiTuL7FRiz8YMsPpuHtARTTMjMNp6CG1i8XU5SF",
  "key10": "4GmNEVQDHsuVamuRkYKou7SW7PqWKRc1WU9C1hiUn6YifjT63xRLUFBnLx7Xw4Y8MydRzv75sWiLXuaRrAQiLwNW",
  "key11": "2gyEpjGijf5z7WpBHQemWyTgktcg1QjV4HYBfoKmgTWUhBKYdS8AcV6XcYcCcvgnDPGh1ZvzXSGB82ucPmHBqQR8",
  "key12": "46aafQTzRWiu4E3YzBmycR25eKpj4X1L1ffcyKLu85GF7oEhjrpuzNwcT3aBKVVSQN6M15Ji6yWV5ULfe66VEJcS",
  "key13": "2ijJ4eVrPQp8M4PsvzCSmEshvCjmLrrWjiFMLJ1q6ByWHm9AnYp65bbtsy5st1iNQUdHh4UoFwahofkcLgPbNVHv",
  "key14": "5pw3FjyJhCCN2no17BRoKobRiHZZDft6PdHAhjBkWVNPWjxu1nfarN4ZYQA6hpq6vY4hgyVv8uvVhe8zgcofFTi8",
  "key15": "4519dhMXdMjoCvGi85PPHs8RP6mo7pYYwoz7z4JncGd2gX3RXLsJF5FCWWmh3QnAYPip4zqq1ks7f1ZXAebV3jNG",
  "key16": "APbi6D96HLr1mXMJfAxGKTj7MXFDVsFUPLHumN2vj6DoGVvws9Fsv3B7SLie4nBySXJtTacKdpKSB2YMfeqRFMJ",
  "key17": "2ojQ3Fw3Lz6GhrQd24ymZyeHhm5yLhonPDUSEBt4jFyLyTLnzUDJ5eDdETXxEHhYsLLBuBjk9odUJMkUHrNJ8WeB",
  "key18": "4xUDH5m7Des9eRcMgKdskPdZLtj7LDyoK5wqeuHxX36xzpjibU5SmhKbVa63F3QQzehX792u82ZN9oS4joBiN6ck",
  "key19": "5hyX2D2D9WvVfiStxMbp7C6caPCyV3PVFjhFAW9bdStpfYs8CH3zoTL3vSHi5kAHuZiLAZrruW9Wm5v931curGoJ",
  "key20": "4GCD6STCsAyWJ4e3UqcS1p9rjm55Vgp7tR6LA49KQmSqXKLGDqx2bmKvgMXQ39h4bXhaPKEaRksR9QWCRPC2vSCe",
  "key21": "SNWGuFYvb8tDYXxrnD5vio6svEe13iB1pLGgeR6jPEoQdMoPRpGyhxsVisgCCrsXa7qGn4pjWS2YsU3AstV1c8c",
  "key22": "5cc1GaKZPWaua7zG4CVuN34J9m1kuJ2Nw4kedZHR72ttjB3vMSaTuHAAFFJf9AKv6T7d4FhHrtHZQ3Gin4dHhvG9",
  "key23": "2GnzXcasj89xVWErLoc8tGgumiyp9LN8ZBvmj8xBiEmPsNoJgRAEyxWq6qcnc8WdXDDqtcsGerAF8TxFCC2gV7mz",
  "key24": "kPeWntKFxo24Dyf3pwt3TFejUHGTVSDfGMYFyQ2oKhwiBsU2K9SBCu83ggkjPR1UP3HkmZNDFUbSwi1xUG6DYee",
  "key25": "5bN798kYqbTZ9uHqRuD3b5hrnnt1GXjb19Wm1Hh7G5v7RVYDfvLXWki9bqmjYXWAEnYZiFrUGbBtXXbKZLW7c4eS",
  "key26": "5kecSHusg5ZAGQBfCEiscXNv5T463YTC6LtXS1vpPfYiXKay72yjeaBTtoHjGETAZLLRoTcdmLkqvXop5bGfYp4P",
  "key27": "5NdujHQCqZZyouDnL1nxyvGMptGzZ2wibwE4Ncgt893Ed8rq6yfoWoteAmLCLMpjZMddCKYKvELTJdk3LnNBu6Ev",
  "key28": "5h233m85odW5c4HA9EfwdNx8omzQTJojC5oZBraoW6HxeYCMFohNMfd4qT4n9TjUAz8GojrJWC33VEMLMD8Rw3Fi",
  "key29": "5Xw2evhPnPRTrjV9FmW5szKrZSDY8QnATWZ4sSpTnyarTp6jrEK489Y9fQwszJCXBUdEJU9K9WceCsKdhrf1tibS",
  "key30": "5Nn7SvTkimdjPSaxFzUBYwszKrYjhqSjho4FJfAfkpMtBvNzcAVANwLHZjq4GbbjbBpBrL1JXTKTMTBoKeRYNAoD",
  "key31": "2jhXPXL2e1dnEptd7RcWtHmTGE6NwRHRvZzN6gNDy6DtVfK8WLrQXJTNRdrF5SHJF3aQiVZydc6CqrwoBVTvmsi2",
  "key32": "52Y4HkdbUUGQUhP5VZKhbsXrG5CF8TSxEBQwMRnmHFYsqx49DsdqrGqDpqptm5DNWUzYo8s9pMoEqseoxDzRFF1p",
  "key33": "4Sktz3KnCka5q1LL2ie7MnqL7iGvoaK6MqadqESds2dSbSVQDqKcVx7EE9YYGJ55R3EmdxYGFzHQPqWzX3d7do4g",
  "key34": "fAMC6BgLvvv2vXtAqizhZbrmrFzBS5FWNnE8kWVuKHSjMpYdAfEyU6mmj61umH4uKZrF58HyALouFXm2W31d5Ae",
  "key35": "eNXHJoYqfihbau5TEFX9hQAGXnVJ37qcS4UfAn4uNtzDBrvvD24ppEDKvk3antFxCZ7Y6XrB1F6MLgqeAGU1z9a",
  "key36": "4w681zC8fbhqkQEbvmszhH8wc2FiuUzDe9xuTPXHvx5PuVWJtemYQcMju1QEQJY9QJ84TfYs4uYEpn5H9QxM8J2o",
  "key37": "ZrsFWEYGqiobXQQSLE4ftxdYX4NrkMrQkHwdGAwGEwXesmiP25JwZSQ3HE9G4KW741T4geJpjfvBEi1516ucR2r",
  "key38": "3F1wxteRCrCWnhZ557TKRZVcfDCkYgUgMrH5TBesDyqrNE2xxdQEV5jixwemCDR1MB6US69FaySfdpSCNyK2Byoi",
  "key39": "cn9Nc54bT2k4sZ9ppadPHHsUHgL69s1fA3WcYB9odSUFkapQkxjcVZprztsdPrE2RCuReShJijYh2Mqi7SLurZH",
  "key40": "3msnRbHZi4qHPQyvid6HcKkHHSXYC3EpnSpCuXbLt99miX24eNoDdUtfdut9TQiq9igE27LM2aPWX9EBuTSh7Emx",
  "key41": "2ejYUBwoCV4E5LGxXWszkC9swjxM5iKhhiCnJENPc3ZrjHcgiJXJhHnwNPtisd1cdNqEmSYRumRj691aDs1t7Aky",
  "key42": "2RLoW2EXjBB5bbWvTMtdy3t2noAFqB1KeFtXmNri8JVhofi67CxxVmtwdmWRrhRcHcLeWK6EAsn7eW2LkgA6tyQo",
  "key43": "67nHRy1pSQARw2xUV9wCrqGMYVEmjSaF2QL7eq9TbFQ6aQDDmWP727cHpnk6ekTBtqjXQDWmto2fswiHiPxUV7PZ",
  "key44": "34j42GdxSj95NA61LtjW7AKYqhGh1TMHRfFetpyF6ZokeW5DvB9DhhjYKsz3KD5rXvBjqnnzEvac6qZ2RaLcqdjs"
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
