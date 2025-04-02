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
    "LivYagKP975Ap7aL9UDLeL8M93ZWmquo6rtvUgMrDpTEKAj4LTeRd5YToR4fRvRhBbuxNUX2sHGSFKzgXwT88TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hBcvziNSqCE6H6LVBctgVrZY9Bpz8e4VStk9hjJGKjm3MpTExG4CzPQ64gGQ4Eq6XMccxtumnufhtqwYAiBjTZ",
  "key1": "29kcbRQfet4bsBKuqH2zPakcST3hhRpDQoe8Nm8UWLDnbRJ755kf3gNXADGkEXeAzwoUSALaMEUwV8DAGwJL2AYw",
  "key2": "35iSxZHoj48SwvLzTFhZPn5ovmU9BBhifN17ifmpruHB4VXpgun5phciZdPTXMftw5Xw3kzPbRMEhSmHViy9Aq2V",
  "key3": "45JVm7pwL44hPSetc8DithrfoaThZP7ANKmbdsKSkaZhZS2dr6Ham8pHLbYEPigmQkcDjCXrmHv9dSiLp7upMUrS",
  "key4": "5nFx6y3ib7WBNJjAC5Jz5hmfrYRDhjgAruFjtURwVBBpBu5HdkmerMYXqSw6ipDLDNdF521t9Fy9xd75q1na753r",
  "key5": "3U7uELKqknyAHdvyFo8J5iPUbJpw3iPXqLeMhZ4Cep55uivUdFqePmTTBmisieygw3X5oWs5aLgMVi14eo87antd",
  "key6": "MYt6a3ByqSCnACSr57sWrEY8vd5XsJ31yMi8fDGBfmoTbQD26eEqV5EJRPTJ26DxRpktQp6Y2mfJypHPCCnK8Xg",
  "key7": "5yE9tRHasxRegx6k9QVWCyejiBcaRidKUGiK2iJBTfAnTcXShGALb7WScgEg7HTonbGae8EDoS14PMcvPWtR6YGb",
  "key8": "5GLHp98biwjmA8H3V3mTCLrNeRC5u6cFp5NrMAbUtVYLcHH1otNbuZSDHDYEE8sLNtD9DMXqEVDJfFveNtJqtSAE",
  "key9": "3JbUACfXpmbF7Q6D5cgDr547VuEJLsMDc1dewENUbKUMj6rKvMVvvDV55JaxDxwj2ekSrTBjw5ARRgHLT8tU6X9Y",
  "key10": "yuGP7PS6S5e6E7gKduHwTNvtnmfHDZwRv51C8ww47Z7vid71ygFDCZBYGcgdRD8B1ihzfMtKQeiRvdTR2u1QDtG",
  "key11": "5wUJpafXH9FDt3yepsjWYHSRhZUCHaTeAUPtkDuhLEgVCjXVd65NkSCcmentqPXGFHq5cVj1BU8LJJSFoBMk8WxM",
  "key12": "2EbLk8cbnePS8UnXpF2vmXPVSAyZ4TUcBTSeTkS2khxP79X12cGeMbHpAUoCHyP7SDTHvxuLU3PRDdTmvtMnkY6n",
  "key13": "UYAAgwx8JjNXNdeGMHKjEud4nk9Ygk1c47F7gQfLqNi2ekb4uASPXcq7iqzfCTMtKjqm3HzQv61EW7ZQYeGNQwp",
  "key14": "9d21K5FDEZsZMP2LoeVnNw7CVyNFc1qMVFa22Z8L8aBW1c6PYqjA4x9URDCScRA8o9StyrZ3kStJYu6XpHQsv5G",
  "key15": "2cB8epn2cpNZ5cPzoSEWXUo5cQ1JjkUQXzJ8aB8gcHzEhGRZNDCLpkQuvf3UWrk9mUi4zwuVFPhGvgziZXs4S2Ah",
  "key16": "4PcVZ9Tuj3KzZXBVCPzzYNbB5N1nrRwG4QceUkWSz1zK11MbPauNdQj289EK7Zi6Mb1QiCy8Ffftfk5H8i5nwnU",
  "key17": "3gsbScbN7GCLxnNU6XkYDiRDM2kA1DzXNNArj1EpQV9bJWK4yGyvYrAtG32VxQ1AJBi3JbQFLyyFF7EYJzAcDGcN",
  "key18": "3n9848ZYLkVVP3afFX1kX9rZLHKrgcmHXFcetuzJDg8wDcCY4E1ifuWNViKZTDgFHpt63XYBWVogwR3wNWCAics7",
  "key19": "4hMc5EqUiB2DXv95m2c2xg3Xwoy7y92nE1A4vyughCjL9M68f1LUghu5v8noHnxJLaQX4RSjzRiDiZa3A1fydZCC",
  "key20": "5FbRbKcMe41jSgGqmWWr8qQQgNygmi7cdQ9TmWA2fsk6YeXfahxCcVfZDahtzLw4nF1nWufFSVAPoQW3LcmRu4VQ",
  "key21": "3ZAqaQamdX1Jrm5UYggN8SpfQkrSJmXmwQiY61rXexwcCnNssYu9z8D5hD2mYszT1MsisZAGu8U5Xh1wUpRuvtUQ",
  "key22": "42XisJFpzBtp8VYU6uyTrXJX3mJrAUA4ffYy5ooaTC1M3h9DmKQ4jEZ43RNwU3APuBAnpAWrbsF7qrYDYtyz6Lay",
  "key23": "4fC9K1o8jLeec2Hvxhy5WmzNyL2J6d2wv75zjNLEEZbNFPcoxXr7by52r1k2mEhT5biX4BPu6jyRxHbSXZ783JCh",
  "key24": "4ZNbPPUZ2RAeFoXkwQaoa56G2pJV5KKTxPunygt2YnPv5afdKv4iY9TB5uBDJ2wDUAuaZLgvcru9WYvV8U3Lezf8",
  "key25": "3x43xCDUHFKBnzp8VVhEX3wPFj1gfppgfnabcNvx24AhTK2QM1Qw7RRPPGiiTMcCENoc6Kd27jGy9txLTuqkZdWo",
  "key26": "cP2cAEpE3gN5fpM3BsEAjkmnCJGatKcWQRARNQNtjng3ct2XiV57PSojpm8VufzpPLdXtVCkJJig7gxdribCZWb",
  "key27": "ciUq7NHYrcz9Da26UD2LmDhb72aRzac5zRap3QWGHxjZKPC9NDC1w9LiGubJerzvBrU68YN1tqMkNb98oeQd9AS",
  "key28": "QhAdSCqrVYM21EECpqvjrCP92XnsY3Eh5DF5eR5wVSLqi9FvbvEBLC6Ge2FKXy2CHLoeMG9n6iatTazc1ikiysG",
  "key29": "5SzzhbxbBsWeqnWsPyHBpSnzrnrLFatqX81LXudNpzwvcJ3CB9G7XBvJNAdoZLqpRFDbLW42xwMTd4oi1yP2qZMR",
  "key30": "4q6wzxwimXsWjYfMAymNAKtTJXh9BmtDbBKicRFoqDSQzbWkt7Wg2XWQsCXBwitHXjb4tvHFAcbnjXV9Ga5Yuv3T",
  "key31": "doywyrc9gteH28kmoZJsPTrkeEExAM9JwZDCSpZ8gZfG1YMecGHNZXV36YfAye9yUR6iS5iLkpTwQfrGhRwF6tA",
  "key32": "5hTA8eB5wVAmhCqt9FFJUZyZFoL9NoGW56f7Bgen9sF2DJ9FrYkVfPYBf4my6L1QW73uCaEa2jmxBBSDUbieTJj",
  "key33": "4Mv2pTQkSM54CgYiTCvLHaJGSeComq6un4UgfwfKptLRXbvrMD9aocqYhEGTHtJLYE4mJYRfghvtguBZJ8bJMy6f",
  "key34": "yXsAcbbT2CLJv52PR91c3EjsRbVjReW46gtooVBsxFo9fosAmFW5AxmPnjXV5vnJh6vB745Qpr1cA1kmjgw6XjQ",
  "key35": "35BESNc2GvsUyoU3fVrjAqmkNAdspFpQ2cf21a9tUudddsQdNDGWEbNbjTXG2LHc2FjQYpvhySt6C1ohKRKF3yyA",
  "key36": "2oDuUAd1JdrcTh3TfSCA8P8uiQVkofumBhZmV3tjLygVkhmi9RxKNsfAtKHKjC8q3DenovcfEXVgnpVhnEiaV3Tz",
  "key37": "3QZLbuGsjvudmrz8xSsXAmuTBGnGorT81MtSHAMAseu3EsnaQBrZHocYmuTYDqmSBtRFNTAq69ygVawAGQBAFrZD",
  "key38": "5yPYexxoYZjqgekGgSfL9zw9WyuiJontahQNrCK4Hhvps6SDjxC3EadukL6X66rrL4cydR7GyDFT4UiNpBQZRBQ2",
  "key39": "5PjNTxATSVWfvbYb8P1h64yMM98g4m7tAWHFYJ4tmbAxfV3iu3imh2E3CK5s93QckNMHv6gxGPA9CgGEiattJ4wt",
  "key40": "2mDHCbH95A2nxpihqcEj5AEZa9Cdr6upuf1mChnJdKc5eP37NMuQnSkWJNaHV8NJn9KVjRMArYLy91Af17CiRoaM",
  "key41": "aUBVuVZhxMv3ic1gwbJniBqQ84pmMiTkQwgN7EtdVCB1oxNGct2DsWjWzPB1kQooYGJWCgzSHChHVFiH2PX2vCY",
  "key42": "38sezPTUraY7HHyocy39VnNCSMvkUzZAva974PT3XawQFoab91j6fqVjoDsZAQMxErh8trB5dhGPqTHAqEnUfnXE",
  "key43": "4UzG9R69dDWxg9HpFc7nJdVT4yqeyz6F8Ya63ub5AKQ6LMxedaCkXa23RLYsMR4Arq1k23kzvxbmrQQDxTgLAphS",
  "key44": "5DHcbH9GPMDd7CkgZhUL9JzrsLA8AWNyWgHPZhpLrw8TmABhyMuhHJnF8JweN96j4vtrtjUQtffn46CzMms1RUGw",
  "key45": "33Nsg6xe3zgaQf8L5xzxmz4VmktUcgebWLwtmokd1eLioDaWKzaDurfgPCUyGNdBV8SnHcpm8sSMKi6ASVUTHJcF"
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
