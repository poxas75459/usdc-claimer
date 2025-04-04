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
    "3iYJAD2ookhRmPLPocPAWzGm66S2cCQjoxebqwNddyCdR13iJwBaoBB4zyXtqrASMAia1y2PWe4F16RWwyHxtjgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nC9Ax68S8v895PFwdgTk1sj1KhyjBMnetg4VBRE3txjnzKFtYauGyxM4zLLBJFavxRMUUwr62gNz3miTDwdUn9B",
  "key1": "61hLpmyN84SVG2eNYCk4EHgafzXoswrJLsxUVvhbZP2udh9kJJzQc5oJUKndEV4KucaT8QpPPUyYgcFC9mzNRck7",
  "key2": "53MZjJv4JqsKoV8PwcYFbDG9u42R1ZszLrVDWCqgq2DUKGX7jaAYVZsXqy5VEkufnn6syQuc7pvKyLuyNhh4jQ6Y",
  "key3": "M6W2j7dikvYPgLKAGhLnt7SrWTHRAGbC1WbNHYBF9vXNkxToeh3gtHNyk1VKtVhhYjKPorH9n9UskisdaJnTt8R",
  "key4": "3DMa8xTujvpv6PgHhk8a187vKtynJpiq7FAXMB7mBpAaJ16nZZNnX966go2bzSsPEuJPSBWLiwdZeRf15ruH41S8",
  "key5": "pXjds92ExWBoWQtsmqkBM8Zb2Bw2iMaaKQe5vpaa68DEHj6GF76SSjQUEvgKAqgkPjo9seT2YqXZJ3Q2jGitkfU",
  "key6": "3wGWMfEc8gWpywEGtHMFB6ykzrc48EpgCPr9bLxBKafbjUkvmeKpKbKwdMfdA7pstLDi6xqPqSQ9eFK8X31DyJN7",
  "key7": "2w1MdY4bgPmSy8mrJcJBxSGohnMnnzYGPUA5MVCYz8owNQz22hA3ph6jbNKYdadnTw2WhymLC9Zrt96zaDji3RGG",
  "key8": "2eVQxMFQnZHLhMH9yXb928v3Z4QZEcbwuviZSk15F6XEnV3bSR49SemxrC76wvjrSSQhcRF2QZcRfmMZaKZNC8mN",
  "key9": "4UqTb43X8kGK6tYY9wVonarSe2bNgjQsH1oP31CGN2u8tjoWcnLN2nuBCsGkceJi2GUw1D7aXj2mSwnFqXqq2Tdt",
  "key10": "RykyQRCxP2zehmhLGpPnJhfERLiNak3TKpcNaRkbjqtUn18yzS9TLw5bhTzon5dL5oRpc5t3ZreynX4W7q3uGyw",
  "key11": "5t7rpWyjBSSJFVqrjb145yWn1ydsuVrQjNiF7B2LKZ1T4rEiACMMZTdh5SvJzCPvGYdeQUd4RtnpHd7bMhAZYoQz",
  "key12": "22oYreMyDdBikwr2ftR8FTt1V3rWQSVEHym1sNWLr79DWsAQkGTHQqYtpoYCKiquQweryVAfjUij4rpJGdPDfKhS",
  "key13": "57mKFMzBa5Xr261rbGHp1eu7WXyBh4MsCRapVFmYeTTJHp54Gu3Hut57HN7xvGBnZJb74GRyTh6Vqn1dun2z5b3n",
  "key14": "57EtJYWC6Mgsf1ouAy4MLBjVvV3G8DN5m2gXsXBqMFq7QHGbJUj5zHgYrAJDfv67urYupbQvEWGx12sSUZbYQzpG",
  "key15": "2os6hNzQTBMajCsUpyBDBUJQjXU4fNTxHxtobWRhpJ8BJGTzWjnFeCQtFQbHnegZ65j4pZ5nc5wk3e5HqikWHw69",
  "key16": "2c5LasF2XC796SsuuVZqXEgoY7TQHLUeGcm9RT2wYShL4x5a6D6FS3SuiWipna5gRctgNfb3HpmowFtJTPGXw6Rt",
  "key17": "51fovoHmTmqDW3AGnWtTBfKzwn13ESXo53n3ayo34LowFVW5LnjjciHjyvFZFqbkGi7EBgfDwYFRSj1pGrueMavj",
  "key18": "LJBCDamPPKhQ7ymNN2NmpJ3sEaheCFMs5vcVMcv9Qa6XegyDqpXGpHhsE8x9CjykqT2va78sy8q5tqh4Ymft3gu",
  "key19": "1gKKcLbPKZNdcqwY4ihhJ5fAchVQLtu9z42RXC5fdK41pqV9ehE92hikZrZrWzdiRs9iouCeVpLtk6QNuwMwF2J",
  "key20": "5wj6NBrn2c87tahUT3T1LuBdD4BRVSrWPjuMAKm12WXjDXArPh4EdMTdQ82zKqJny6pn4rtFA4rH1gkCfskfWbDp",
  "key21": "3RDUSnKmEcugdxtqNnjKmiG1baGDEhLFgfJPEfojwy4gcgwJzJAfhhiupHzFqsGnC6LjALyNXmH5fPoYKywWLeXp",
  "key22": "4it3EaqTZocH6FmhTCGBUkZQWeVxEVCqvRjtzPwYy2CZCseCnXSixfwfyKAG5vZmzJX2pMNAMboAWKtGBcWsvG2h",
  "key23": "4wPYwgnEmYnKrCR7jeQVfn8PEHQpadEvu4apaJh9jUkhgoDdRVJ8SjN4zELpxcmLXEUrowRrSpxNjic1Qk5tKKgS",
  "key24": "5SVdAWbC5jD9ub4rAF4ww8dPhjJBrtS7v5ww8uy9v2JvakErkPf4ek47byYGWeToKgMMbUpYHZqJFkv8NEjRSjY8",
  "key25": "3J2eJj57isW9CJ6fhENQ8SdR8WKnzFRSJ4p1bYUT8WQ5SqERxNdotMnkoruWrvYoJrFqWqmPWkTKSxSmu2Vm91d3",
  "key26": "3utRWN1KHFR5i8vEDBaMyMHBnh9V8fqKVpSTdFXbT7JWeS59RiCiTCsjJRZUPLHVr2Zbh1pPtaUZtBiLBbjDpT79",
  "key27": "53Z86jM35D1LaGY3b3rToHyVcMvDkUhxowNWmUdUycRdPcR9uPRKfRhMoS2LfNaNEXJkCnTn9nCjqNKEzir6JWJc",
  "key28": "4fhyrFAZnJVVc3VrtSdbaYtVhj2FCuDE3DWQRaVV2L8kbYi9WzxQ7VTA49j5kFhiFerjhsv4C9LZwU8yfifcFJTU",
  "key29": "phKsF7o2KvxfGqRnF7F8Ba9DJnKsmtUEgTjSGVbFPVMQYby124CQGfoWUpWdFmYi69N15LTiBKTzQA4a4iWHuBp",
  "key30": "2KGt4wRFHPuVKU9ooZPP6Lj7ouqNvyYCHxh9kaneXNTotHe6PnMWWpftVBWwmrer96tEdxM47QHETk9WkfDuvTdH",
  "key31": "3hebFk2wnRvzMMz2XnbH8tuo84Z3igZD4HaBwQkCo4cBPkBZHmzBEok6LMNCgwoV9pTEZaPWXMnKh9bteZnTo2qj",
  "key32": "3DYm1ApaQjc6TgM3Nj75rhY7cNcVoJLSc7SL9yGtyLRPSnLaKanjdaL46EmnvrdbW9kzdtn6Dp6qSC7k6whHeqYD",
  "key33": "4XX44yMBcv1ct1sujRYzJHwX9oPjYBKeTA3hmS8RCFF3EW2FiEkHjU3mudYshSZna4u3DENk5e54hc5nnkTRYXQa",
  "key34": "2xwuZyCAYn8wbVXmDZS1YRrEzjhmh5VNoQNBCssF4KCdy5YLwQbXZapv55g8m1MFTakeT3ASwZ7XjFtPjxYsNoXH",
  "key35": "3ahJ9pUsQDosziGwc3XPPQDYLKH5KiXTbStRGe65ovZ5nTrWScZbTyXgHzaEvmUcDtz2VjeqpmejKTDB8nHnaJeq",
  "key36": "2Mheb8rdNzV23ctMBT1pXxWZz7cTojVwYfKbdmQcNhqdAtGpau3ULNCw6fQBmmQi4DcAX17EzjAHjGb9uj4UH56y",
  "key37": "3kMmjhbBo4HWWxVKLtdSuj89mWbidoWqe3ipAKKSDi8oJpi76THRpso6ZhbegTEKFdVYQeGWSRddg7o8BTcM9bYP",
  "key38": "4RWvVnTrV3Zmsah4YGbJDmb5AxmZ28TCWjCcBZX9wMA2UDVSYEcj2XGN7rThKzhsre6AFLBh7SSDCue6NAUugteU",
  "key39": "iCthrtQGbhAWNG7kAs9jS9vPEYarspqw8XLpKYSALTyETwjYLRDXCFfv4LuQy9VJtAE1rkJ7LaHR2Vf2FVivAXH",
  "key40": "55U3m5J6VARYSht3tZFJx2Eyg89GAgK94Skn7uMxwEwE7Snw6x5JUfmbbV95fA1GhG1TN3dSwS3ozMTYBU8pce9E",
  "key41": "4SvbQZDUXzRKsrgJ5hEL27Lgii5j3iMAeMaCWUhrDnYX2Tag6qAD74gozmdkCpReuFJYjhfSZwaRV1UFPvhLMkUv",
  "key42": "s29dnW61zvGLKBr8L5oezaYDsJ8EuUaejK88oyD8LpiMo2ASix8qLuaA7nQZR3zTk8YpqLZ5Nt9jdQSVcgURgFj",
  "key43": "2ZnqVRR89Pk5P9FzxrBRENhTxjR89Yb3ongPxCpcQyijacJDGm3XgR4X4vVm5f4pjzV5sWspaL8ftXdF5Wq2GkZj",
  "key44": "32omHoYpPkKkDfKRhbSj7CJzRiMZoGBDdMSQqM2f9nPgGFZqErcTrbP369TMJhGb8tRmKFaFMP11WvttMU6YcjTt",
  "key45": "5HGZuj99eReptGgAHqTTAJHRiWdH6WMtMAFce4yjDofBKbDFtDdok6rqWs7oNYaViH7zLD9DK7z6nQ4a3rNciaZn"
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
