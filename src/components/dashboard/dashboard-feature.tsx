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
    "j9hLHd6KP4ZXxdqUSKdsUEukpHYvjCYytt4SceCvXC9gpS7wsmk8pooe8xtL5B7RLARpVtPpvdwXwJ49Ea8h87K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ytq8A4xj8RLr7jMdbdPtkPGBMpXvfSpyn6HRPocGqpEWR4n9zzxGWCiPgBijtDZP3xrmEKRVwcrsUXyBgN9zfey",
  "key1": "paH3gjgUhY1UiffxyWb6Fw3hSvnX5J32WkSqcPS4gKDZzbkssreMn8UPBV6QVT28TQobNZGfgyUDFTBuDFLop5J",
  "key2": "46TSPjTEtzGjivvEpKqvWYjwaLtnbwM5cYhXkMRgYcnYVQwU3AsnbfNK3jtsPPgsT7xqL6DXQQ1zwXmAwAuzGUFw",
  "key3": "dbMicA7WgodHmiVLDG3eBT2oqnpntLUkqPQFsFwrKHL1vfGggCvyRTBDE8XZXvFg9vW2seQVRHM8eAURxTVxwGx",
  "key4": "4Xg8gR3MztvVNm31cwYcsebbnwLXG853qUty3vh2v7pon6CcKNjsPJ1nsjkT2o6iTUYeLrgFrCdVsxxCZSYdT2Sy",
  "key5": "32L6kgcYRfKDCdq3js7yirfPxqG1bFZNXfE2jVdkVStMkZYKUNRsLKwpzVRxUXP3c3o2NSvBhvvT1ZaLCz7zBeb5",
  "key6": "4vngPjnaUrZibEwKmpQJmpZ6e8rpiipStRiVeFCxLGciXw4cXYhcbW75Fc2DbJqkViDsizdpcu24KU5ZcitMvizi",
  "key7": "pDEiUKTuMAUJeDDt6cLz5smD4Tfv2MLRkP1MGo6iygfVqStdf7Ho2ybj9Ksu5aAZbHXr6GufJNs9ThDMMFbEAwr",
  "key8": "3opp1JU2DBBfboYifEchA1YNxFoaaEAVAFewbECy4iqBZwpRrDufy3Z2f5AqtcY8h52yMbv7WC9vWBqZxWx7XCR",
  "key9": "5NAr5LStYShbLCgaDiKdojnTbo2ehwgQesQmg1Veb8iVyMby37dHgpHhNz64EZcm9ycE7Ea7hx9aRDe29t3gTcfa",
  "key10": "4LJUYq9wBtaaEk4Z6Kuw6iNoru11Q8Efvp6t1S4jSJWhq3aTfUtuabb6XfZrm5xcX6kHnDafYCosk6dfcpKath5c",
  "key11": "5c8miPoGVPcGRrsSXoscMgcWBUYjNCfAjjRQxpEujgR6hxqHf2myA22w3Xb5jjMKYRCrZaXKbwDWF3xCmnU3SzFz",
  "key12": "2i5JwFuGen9rnzLWPFxuXsV5jyeUhTruWqr22rjD142gNxEtq3eeEgeaBF8h1b5bhEvV6MSdjLbsdEGDPDNVhGP1",
  "key13": "5FibfGCWi72Cd1oYUB1p2XCwQtSZYyQviumz3oS9ztfs4KZ8rkVhrZBrEVhJUuE46FhBnRbXVQgyFkPiUYkUfUKb",
  "key14": "4wBqUFMyufUGogVZryVBhf384LzLpztjQar3nk3LhzVPk9b7u1D5rgUjdG65BSSNfDmt9tfNVJ9qug5WFUxgjdPr",
  "key15": "WY2cqYxsYZ5HThFC5Du1KFvdxXitkczCapeSKa9eP2UVLAVa7brqDB4aZf9iHi3yxQZXZrWsCAZ3TF1sHq6n8SX",
  "key16": "FWpEnfYER2uLxavKfv3iF17RK9bLBfDNeh8tcXff7XECqjNNHsQJFMHMmWb6rbhFJcWM8F1CJN9KKu9C2mutGzK",
  "key17": "gPVAr5TrbTNgEaQsJ1qPguYYKZNkoZgs6ASbtaDqSYkufXZC16jaFT1Yd4EQYCrZfVCdHeKxbnDQQxcanEeWWoc",
  "key18": "4wHfiWW5hVSbPhuXrJ2LJRJJE8cSKduN5rnbhZKbwRQuTufftrXczDgCBaLyzFvP8FAGnQ8sBfQL71oCqp1NDfgT",
  "key19": "4NS4MUUEWkf3ZLrsrdWdQK2fovZbXiQn2dFGNyTiep5EP9u2MkRbZdgG8cPJ7VJBKgnewpfTZk3KySaCSFS3CbRf",
  "key20": "eyT5SBz6uUEQjrzc6gNjKhJhBAUjvfyEb1fJ9XxWdoc5RfDA2LqY5SF4RXenb4fkyoCiDAde5k16tMB5DuD2QAf",
  "key21": "YL9SC3BexUj7UkfbVUvUjxaGJGMXDQehYGKikwB8YpCAa8kXBmTykAxG1pHmfHpjMjqitxUeSvvhqCrVxDYHesy",
  "key22": "3iVckngiDz9nmHr2rouz5ss34dcRBvD2LXCBW4GFXv6KpzjtAQjtJe9zTRpi8Fb1Fz68PJCDVcL1hCR2GUCKqJVG",
  "key23": "5rrVSSN6TkbSbWCFsD9kLyTTGAAW7SEegB3GUtDbxMkPLXWvRy9yLxxLhMFgJ1N5kqBYCPmPwmE5x65ahGUJdwLV",
  "key24": "5nqYA2Qcn9RPYu4fXe2woKFQ6odBr1vC7up1KtFbFV53zc6fX7B72Wcrs5TrmPveD17YF1TV6TjLfgUJAY1XpjTx",
  "key25": "3P3vURpi8LmRNyGmV9Y9qs4pwH2tJHsPC4t8CMdHjHHziDEsycsn2TVt5gHYLqCcAiNY9sTB3hBtzaEpQf5GbN6W",
  "key26": "3VNTgDSxFm2xkBWZaNb953bMqGhGU3jCJuADhcpxdwMLJ5MnSz5iCyyoN9CTnQTnsyBxSFxsyZfj5egHosKnYSmh",
  "key27": "5QdNC6RNubaruAj6cEwDvERwL1mufDAsHwhMNY6W5opSe6jitBf1VsfzNwe3UUQdSsyJR2Pyh4f264K36grVjVaZ",
  "key28": "59CTBxiPoGwaidNJHTFzxugseuwFmn3TcuffAREA7986r3jcFCcCtGkyPYrPzoB23P1PsuCMg3u1ffbMfTE22uY4",
  "key29": "HNc11uj5fRbxqdHHvSXsf2djfpGz8tNqfwujUB1WNQVr8UhvAPWMMmntDSnoyFehYvFZbajvLcqtadYb7LNAk2y",
  "key30": "2hoqdoRp2PZ7ZqoY9JH6Dpbpe6k2HRkoGropwuwskguAkEBjfRLubFnbCDEwKytVnGw9VdDNd1DhwWFyvZevF4YX",
  "key31": "2hc13J2SYZmL7roBJtWE2yw1LoC3v5u9tYABDH8eVcPccbZWsLr5GobpSdPsEb39fMunhWzi7L8t3pVV5o7WbNZR",
  "key32": "3gYqnvzeUR5tEipYPuiqQngnCaPq9PyDUfJXzWradEkQ5k9XFDLq7T6q2YJgvGnaYAqm1yDNonNmMduzrPbiNwDE",
  "key33": "3N8YGdEMDrJ67VPeLfuhpJjCpWBE6pfEvXegNY5VPh6cmpAGpRQZ9dridmeJndtoRk7thHGBtAJb5NgbKYUsm5uN",
  "key34": "2TsURcekuYdJzC7KCu5qz4KmAm6NSnhj8qNEqKzGeBseZztMwpSRYoK9ZwHmsQjQqta4DfCvmEeGX9CwibSF7CRB",
  "key35": "jSdx8vACrbnS42NULidQJoQXbkQ2TiW5gU7LijuboEAmuALoLg7EXyGDLLRgBaptxnyHfkjAD7dvTVQzGfcpEkF",
  "key36": "53cPhaUYXDUWtRwC52YcauCHjKgcVif1H3L7s5xNuA9fMEVqpbvFNgVtFbZomfFC7VVz9UfKDncizeovLQcS93ps",
  "key37": "5Xo4yfn3w1vGtyJ2WczFwX4myn583yu7GEubi3H2zbRvofgwse76fECyuVEu1nx6Ludz84nfokxW1gbqt5zDPCYm",
  "key38": "LcYXZr2cTeFyuLadx4aDQXmSzejWwE3S7s94EAKkg1qcBxHdiSwPniXcCUnMpHjDx2WHshAQouj4Ke14226Xcyq",
  "key39": "3uV13758NJVXv2eXbs7Rj8YwCPnySCxRwa3Mv4xPKj7e5Qqhmoa53y9uYsWfxNQ7B6N5EfhC41TPkfwgziacsfPA",
  "key40": "UaMEa4BUfKskk5GySX3AEdavwwSPtHiFXwXza9HPMGwALkHX3VCp1vAFgAVz2GkqxPUsHx1YUAJ9fSeHo5dyFa8",
  "key41": "3ovpP3stom867XrAxx2rXX3rZeF5VRVeimkwJEVVZaUhVv9mCV9Qm11c1SZGhkM7QJAyyEjFmm39qk6cwpa5Z4Wk",
  "key42": "51zMURQykZ8pYhURDyafQUSkw8Q2mskjMqpE3sEBLu11a68kveJbQnNK8vXdPwakfooPw7SMySFujt4AEfgNCPNi",
  "key43": "4N2EuseeYEmfPLhpze4utWmp19woEzffVjbcNGJrD72AXcRbawhbZ5JYNE48GNNwZRukZc3weivFkkSZ6RJnYYcf",
  "key44": "5zwBoCb9tkbmhAfHbF336uVUfyK1nsTs7ir58JUKuCgAswVd2DQzfduvJdd1xyjk9FmtY7BDzbffnNdiKFUF1J5F",
  "key45": "4prmeCT5sEJo4GSQ6JLgGGrmiUXeASd7hRrrFdJm8uQpYgz37AMGWWfFSLBJ56jTsX4WnnRx8oXWMWSdtHH9AD2f",
  "key46": "D91mhSxiBb76fLJ99ekdH51au7LyFAfTfJ4BmAyoPB4bgrKmsk7T5zM3AEkYE4RNKg9x5Rry7RW12VTPsBeMu7b",
  "key47": "jSLLwsohr1binNSogosc5LjSgAayYLTHZhLuLvtoteEZDbTiEAKDN9ShwWV6dHhMGDrs4kBkLmLjjH8wQvoFUy2"
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
