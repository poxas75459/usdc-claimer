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
    "ituZzjGaUvTRtAJZ7cePdyPrWTzBc4HYDLwDXh2q8Xz7icG8BM4ajAaoP3xWrM2fuYnCHj37rTrhD3X7WzrdAjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YR9iNLPpKnixdfRYKfTWw6bbL6RKd8RL1a5tzU6MUQFdw46a16H6hoxroKskrSgYGJ2rxDoVbVfgsErZ92ZiJj",
  "key1": "AsZGhQLHbyXT9s1fKErYudCP5VnSZkKY5ntL11QeHyx29NdB92MNRvNGHy1jPibVqgNp9EqKEKLEiscj5ZpnLPF",
  "key2": "NqWPg7M6JbWbxbSnmQSvGxV24Rpv3TP1psRsGVit17A8A3aubbDDRZZektxiMhMqaNuTrTo8DCHNXcM1L2n52Ls",
  "key3": "3V9bm3Vo4KCXsc5ysjxceJMxMfWZ9boHmQEzbdDXCxstoXbnibfGYFSDgSeftma6KM6efPPqqHy92mhqwApy4HRi",
  "key4": "5uHyTJdBHd46hzYou4GweinsdP5W2eMT3bq4ar6TAZAoxaCbMArqaWucHAGBeqUssSB53hDJpRWdHRU2uMKpnQVo",
  "key5": "27JMTdLeV7mCofK33JisGrTsPh94y87FMNK84KePDF8vNGJZpVyxcysxy9HWtuDNTW2rhE1z5bnxfSENJycCHxyU",
  "key6": "5EBXEhnsxnjAbRPzWb2CJNn7gfzB7epmw4St3kLZN6RojW8untJUH6ZDZqv8aVd88ckd2gg8YATfcdUkbbFdYYc9",
  "key7": "5Kx1QKUrQbnHRgL9GbtwNpXwCAKy3P4PtYj1JGfjSpKioWzUUkUafdvCX2gzo2tcvrQSnSrGCRFHRoCBcQraPrTT",
  "key8": "3Y5tWauB1GoZ4i7pL2kR1AUSkxfyLM9rRTETa99nbXVGuprTS2k3KUdFtoMgvgfN7Wj92qMot3FKqnSo7iX5ox9x",
  "key9": "5XRYxZMtqx62W457QWp4Kbrewc7fWpw2hjSyFvrLFJcFnwMieMPjdLu7PSp1HS5jStH4562U2Mwv8FeinMLezJ2W",
  "key10": "44QAHv27JFaCkumWGo5rLJgoV8Td5nJmvNFCJpcPouUuFghFkkA14N2iZbKbbWmVCMhSSWFVazGkRfZiTkfdn3PZ",
  "key11": "qVZ7GuRqg4yoQvgG2GLYnRgdk4EuyLand43YjRugi1Lm5ahGb9HKDTBfvpzbeNmeiotPdKVkgNNRDL44zJ79i51",
  "key12": "3qXPBSLNg9LdNnoHSikJFrnZymCqrXVQgTdSGw15gWwZbsR4tF8ndVRDNQ23VWyh1vMBqt4PNnoQcnvkZXqGWrA",
  "key13": "pFFgQqmV13FRZRn7b4kvdcHDtcuw2PxCrp4Aiikw4wQC6AkDuqdypFkhVkzgVvJVYA8UcekvR2vXXX4z8n94MJG",
  "key14": "2uN1voJ3xnC5VaN3BJW9rGsfnKzQ13d2eXNfXG4MtnWTNyDzDGJmAZo2H5twiacrAEVABTAXiShdtRjRdvbLoX6W",
  "key15": "5spvxMqLyZachyYWN7ZzagEKdCrfg16e4eEZ1hoL7Aw6jtsR5tYrQo9zfZgf7Gj9R67UWorqM9hbsyaCAS44xuZH",
  "key16": "34ts5Yw8QL4iAawDXqFHoi8cEUakarFr44xGMmoqhQsmXVbHKMd686wPP8Q9Mb1nu7DnmxjGCeAb1tv2y51vgjuE",
  "key17": "3KPR9ta4598pp9tqQ4mKiqHwEwWBTEaWuaBPokH1VY8iN9aeHqx3Kx2Fb2AVDnuk3td9gd62d2B2HFEXYNfe4HBE",
  "key18": "3wvwNdCYw3BtjxnVpHBo4GWvBnnnaZPBwBGFZBQiCEo4UNqhzrPoQbsbmijUYqRUeeuc9NDAnt2RfTxE5YTeRh5i",
  "key19": "5FSi4qyjGKHx5wfReEB11xnXTdRgqWGyxXb1ncF9qHnGSmPLQ5ajMfWbvMw7LtbYNCtzGChnHcZSZMCurn7fDG2z",
  "key20": "4d9zsJWG59NZ9neiyTBqXSLDGW5iJ1bi3Cbi3Lpr8hcFBhfbLCvMsdXVw6STJePQwhbAZ6gaA6ATeKNp7ned9CtL",
  "key21": "5q5YTBnzoBVEqfeJK7DDMXD3PPe1pTAbVfKmLhpRox312hd7JEsGYsQF38nHJAdUX3k2m9bpCV5kPdHnP33bQ8CT",
  "key22": "3pQpiXntDDrXeev4UyYKZNLT4U7nBin1MxSj9pYwB31ELghgAUAFj2Jg77jvHAYnyUByuWSbsD2JDBEJLXU7hFSb",
  "key23": "3ymRYqZaahz9BKZPezHPn6YS5aiSfK5UWvQPSYir84bu16Yi3Sx2ceHXJL16KSo2QFtTZz5cVgC1cKufyCDj6691",
  "key24": "41zeSh83LN2dsWbvfpde6MK34f44Y2YnbcaM69us3WG8bcJhXZfdE2aGpnJccomcMs86RDS4BN8iFLvqLMACVE8U",
  "key25": "3ZJyNb8bR8ZiLgh43gi1m9MHhMScKCUFRBcqNyqBMSmVBxhN2NRixHWCfjPR1worNojP8qcS55iQMNUu4vAb2c4N",
  "key26": "3akdBJQjaWtmgkpCyb88VV9LPmWS4H3fZk9hbnkG5JNpn3AN89gus6mz6uMt9ESivurPepwHvzDSPsk4sskBrhYr",
  "key27": "ghLBHmeRZodEaZNHqCTJany151FTtVxifxoXhwwkFHvumJBgw3eVqwjfqBm77FhNreXyGfmh58bYYkQ7nivbih9",
  "key28": "3kjtrxmz7mMFPxX8E6mCGjanbHS7VpqChEdv7ec2G5wGFjaRUWtgYPVpCkdKs5QpJfiju4t1peoGz1nJxHNvkKSa",
  "key29": "5vD5czLqY5ib8qegNzaLfpysdpKTXKkfR6v9sHXwxvd7FpWgEJUnZTEmtr28cSY1EZsU1AxfioikemWkt3P5Dcj5",
  "key30": "4eUqTbZuYKiFESTS4g27BQxB1DKffHRa1BgRHhkXRBAFt8MX1W88R7GPNAya4UKkCocUzEi1P7uh6yjk1z7cJC6h",
  "key31": "ai5b5bC1WH3T1V25un7uemCKjJuVysbVpY1DffcnrQrr963E6MgKbumYJGHxzpcPUHC71buspnU9vmMVW7sTRHh",
  "key32": "4WNiearE7WdUwt8idzaBxFRe5YueigdvzyJc9fnN46Z4SFDpe2MLSnAksgd2vrx6pqGUzrNryaF8zmiGXsG5rkgP",
  "key33": "4da5Un66BuR7g6N6XkHJDZirBSh1Yu8dW8HhP5cFdHJZYw67XALqw4rnTEhe73M3deyGPPZSrMRVbHL7SZQSxYt4",
  "key34": "3n9B16aRsPAuRZbZaGhcFdMYuitXgLpKxQ5SQwE7BGHw5a8TofPxjKEzj9tZTjxJz2uGg1Yvnj2ukdbQ3vzmZWSD",
  "key35": "62ZpMrj3JP6GtcadWpF8VwXmxQWNvKQX19NVde5cbStnP3KTuWGcf18chmro8RSgHoYZmDBXz3LKKch8rp4Kt6je",
  "key36": "Ntiws4kLn6A8BUkns4WmwnL3oYSEKtcBfpyU1SGF1jsqYiGRpoZ7WnGgSQsNNZMjtbWuG26kfNXmPoD1yLvWWFf",
  "key37": "3uX4NoCNj6wcEoZ3io4tThRroJ5WwUnfzy2asphpLXQNZLYxAHhppjsVTBxMWSzDoupWKsf71ktttaHuCVAmMkL5",
  "key38": "92oBKYsXnY32Q9dokarYZZ8fp42dkQfofHuokYqCf4ULRAej8S4trhnBArnFoJdbcG2Y9y6dzyGPRpjHZNbziT2",
  "key39": "42icssbS9Q7b2TMCWATbHQ1hpG9E1PJXrAGwK17ueK9g5XsQurPk7bX2FixvttgxYDYNYkDZeEEWo18v8FXtDA8s",
  "key40": "XxuLaBRkRQpJYnaruepSSWDsmTUShureyErp7CMDQYNBhxMfndY8MKLDqqsgc3sEfjHgvzBe7xhnryrrfPw66mH",
  "key41": "5Q2Ki1vr2Bek6wL8symTswJpasLzQfwNtP7QQJfdyfUT6yjpwXFkfWgJ5xXG8CqX9Zh3Aex2Ba4avvGojmXsPncv",
  "key42": "3ivY23YevK932mB8k2hboA4mTAtCUhWsj12AdvZ5pLQxuyeRybpS5qWz9JdXkMVZACbb5HzihpXdGkXGpiWTjXqz",
  "key43": "2oUt1eEjZ256NcD7Yp9cmEb3SAYrhDgGKveU6EkpQ1tm71pWaKCRSMgdFr6z3nz7yhTkdf4sE3ZpJosKsdaa8LJ7",
  "key44": "3HkMHiZk6JCye5xobWeQzXFQC8Qtk9Emdny6JLdW2uSvPZobjhVPkzbvikbWtyLzcrEGKAJfmepCi1WAmkLAKi4n",
  "key45": "5uNqM6fbwpHQpcXHiwnX4cm5b9nmKyhqG5HvjfKCzy8CniXUYiR8zz2eCM7fCtHpXHNtfFr4TTQpEdYcNmk6kbrq",
  "key46": "etHMBsNn2q26i3CRUi7cf3mt3ifUdCSr7nwRYvEuc1CaBFPMBmhZ7Z6bk9KvD425py77dy4es38nBLTEnnPCx71",
  "key47": "4L48EBXTzHQmjCE4jJ66QnmZTpkB8hJnz1EaStLztWKiPhpG9ax6Hey93tRtut2mdWCz7SefznpLXvxT9YtUsDmG",
  "key48": "4vePeUfSTUuv9SFLHTEwbDZM5jxsiNcSAEzSd1PWXSKqEskotYw2fGCurX5xvpnAqoSZ114SJvJis8mf4Mz79nJm"
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
