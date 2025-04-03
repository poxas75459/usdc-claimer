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
    "5wkGCAPxwcaLGsqzLc8Q3EewThfQPSg1tru3gASa4YSxGmqDC7PXwghXkxz9G1qpntPdeHH8YDMr28rSW5XXQTA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ocgmoBuN7YK4sMUbSi9YLmfrouJvxrtPBMxBcrfdkRSCaw9NNeWnXHRJDhokaYhHF3dzSkSWkGvU3Ndsewg96hy",
  "key1": "4fGho6Wg5iLBQPwR9tsPGzbE6eZ3jbNary9ACg7Q4dMQtVUfakZdxKGKGJD9BmLcErUqaWSFew1rGqnsuVn21HDP",
  "key2": "2DgHzZFWQEMUL7xXgPgM67cdotuxC5TC5BrAXYmyT3u2dY7Grm1GA4ow98bgWMrWq4WyKR5DkcZYa9d2AXtyDKv7",
  "key3": "5AMvA7PrbuKu7vasp7kQjbYLB3f3jQXgearyr3mmduCCdDTxXrVfKFSdLLKffRkxEbR2X23AWK2eFuHALRJZY3Wn",
  "key4": "5u3Wjn39wdqbGu7NLksuEcxquFEuiQULe2wqeqqUA1NdXPsBdWzdV3SQ3P4Y5mwBy6KY4FNNPmAHsTLbWemPCE3K",
  "key5": "5ZqjrRNVZ6kgy9F4nMD42kDXh4G3cPtByss1EmfEBEHAc7ZGLzuavessAZ1bntJ8Gvqd3TUCguDCtjf5pAMfmGTg",
  "key6": "3ykveo6VzcprxrLY2DwdhxiLWU47oFWAD9V29xqgZseKyDricnL6tvbZ3pui5QJ3sWUuyTe27qkYVg4Sc9g83EAo",
  "key7": "4SNyoZS3VFhB9URTRcjaGotbX1aqMxLJYYskJjQpxXhM7LhL7DUocsk84ueeAgraVKtSjxts2SqvRenNgjYtVTBM",
  "key8": "cFByWuSoQ5iE3MNpb5NXmMh4tYZ9TH2ta4h1N475xQDmN1YAGKbdeAFNLrHE6kDcpbHTUkppmabf7N67o3b2ehd",
  "key9": "4DXyUNVuyHaLaobeGpTKrmin22siV7LfrBUBbvr1ZrsbUfisG2rZ5qoZ6Vi3noonup9p94UpaZ9XMKW8BTizPhWp",
  "key10": "3kNpkwbL81K22HvFhQnNqUm6jsMWVtEPPGwPWZCCjWoicFmhy3XNVN4uRHiRQX8Lmv1kwrAKcPdGkfg9fPP3K1UL",
  "key11": "4RS47LR8beuVnbY6Eb6B2apRgFNDTELLp2qeqxUDdWmVGoD7fTWbyj9s9an6wFFT83ZvXwuadwu7xbDcVd5FRpim",
  "key12": "2RTeHAe9VTgEp1nNb1rfRdWnjPfMaJVT9SuwHNoHgnhSrecZwn82Cp4MBiy1DuUpYJNQgMZSXWqdUDEfzV8QEbg8",
  "key13": "5TkNGSu7KCqzXwwa2XTawcfGo4TsXCifsFmfBhuK3xHNTMZ1Wrj73iDj2orQKKrrg785cDMCg7ApcybT5HzLatPY",
  "key14": "4KaqxevLmZATDvaa55n13X9E83JqSssSn3Crirb4eWm2foqbsEJ6UgtPb85sMV4auCumFqVJA8rXNKNQfC5zHd7d",
  "key15": "2BBw8mpotFsJpQvwHiy3cmY6AaMkDHpVXDB8HckdUYonDfkB5ZVzKnMyBGAR3XrxxSKQbxau2LzPEck6Fzcqt1yo",
  "key16": "44iA7S1GxoRRvRKDFLwhRR33cH1pbDrDT4iGpgsT4W19dcwqSU4Zt8uvLYMQ3DEAEaHWf1UCm3cwsZEWgmMNTBZT",
  "key17": "5Q94gRK5JBd8ExgBvjcQy5Pb3WtPEWjmsTFqCeX5edeLpVTJBnT1vuU8UAaLSDBBc8tEqir8XTnXD3CbrTNJQpBM",
  "key18": "3m7eRsmaRv1fnxNWPsXzwUhv28YBSWVe1ddFyVGAUtz4vJemdYz1Ki99nCrN1oM7HZ6fYpASq6S2wBwBH7QTtjD5",
  "key19": "5CektGWJz1MTbNgNaCGMDFD982jHqRkcnJ74Q7V7gLPWFTdBrUnpFwfJyqG14yd9MDGZx9x4TGD3HmfskZeLAfgQ",
  "key20": "HFZ5jqJNLbG9G2LjrXrPo5PyWhYCHN41jXJ7ubvFSo1LTp8BgaZGfgFvz3j4x9t52qc83TFK1yPHsbHmJ8LpJ4j",
  "key21": "yKudd268TDfFyrrPc9GehtkuHvAi1WThc5fwTRavs9PE5socxDDb2skyicia2zxZHJbDy8ybo8pK8rxD9nvbXnx",
  "key22": "2NmA7ZD9SHc8eTNP3gkZogLY3oprHjUv6AggbCXqnatmGsPuH9PGa3wJeBsYxDzzvvNtiPoCcbdGpJdVvYhAZQDq",
  "key23": "RjmDmxnShafeXNnqMJs6XhVBEUpXoMAih77uTbVik46AQuZjc4yqoYks6uJpBeY79enejhMHRmVntfTCqmMo1ax",
  "key24": "4tgvcjP4zVFP9fFdQWNJv4WgKZXDrUoLwU5hvGSeLpoU7pdHFK1coroMgoHvHjsmfPEPh3k3BRtuWwujEvYeEYmu",
  "key25": "47136jutQpoWUS6LkKmzD8X48hUqT9cFaMkrzRALA5hSbSs5DoRPBwrRoLNsHSKzsoYNXuC8BDvq8FpsjG6oC9iT",
  "key26": "3fRdDf4jWyfDNHktjkVEp2sUiNDycTJsvXCANpwe4sFtHdafFf8Br6n78NaUtjhA1rwu5G2wyv5w9i1aFxzVhoaC",
  "key27": "KuNso6wGJ4AkPmsVfBRbkBEA1navGu29oJvKgoZYoXXs7vVn8uhVTWNJdi9W1ivuGWhxEwzuazCZnC2cGBMzr1k",
  "key28": "2wxZiL68SNvrUJatN32QUadCXGeki95StLkJoMW6G2svLjnYApK5wuZx8u65ntNKkHpZveCm6hB5fSeKHcL9vPTD",
  "key29": "3M3UYjRfjU7YXsEG12cx2pRXH1L51GwGeKjUYT8fvpguvaAwEbsMu94zwgHrngJ51MEdwbS8mnjtU58RCtVxxDft",
  "key30": "4vwaCBbW6E48nDvtmMTShmDHyNF9nWctpWbD3vUBhjNRho6Bqr4A563HYkQh1ixMJjwnShQ5A17vqzsxtiNRQtsj",
  "key31": "4r5KiTtmPW7tTU9dVoWozXb2SjjrQdmjUiC8bNCQuLUcib9Gjxv5A9KKQhFffHQuHcwd1kanhSF4VTXeXqD4eMJN",
  "key32": "29PiPTHDpjawGYAcjryg9FEKezzPp8UrivVmZqg1sjK3k2mHBgudxwshUuwakhQERs7XGaDv1wm8dwMbwdzUXLF2",
  "key33": "62vfhJyTCcfdoSZqJpmg26LhjJN9sDSpzBEbNZEwgc5BjnV8qRMFk8ePwdrpywLXu5V72nYCGeNucrTqP1P9G6Bk",
  "key34": "2fPLGLTrXSBqMCwxgLJZkRJg7N8DVC126qrXNeHzzahpW1SAbSksJ33BXAcThu87Y1aSvcum7ZvDesmiApzEh7Ci",
  "key35": "3KndpeWirn9GNTSYCMCfo8tKwT573oUtY51aEexEG3SUzV1RUWNCgMznomKcnMGCPNiMEoY4g9PJcww2xYisCt4w",
  "key36": "3Z4oMv4U2nVTQ5sEymUiXjQkcULtVrCbk6kGpq8yeSUZptySDVfm1C7ngWzwEfa3bKxwqbSvMHgJwCwrBRTGv2Ck",
  "key37": "HHCB8xb1Dz5CahFikx4uWdLZkTX2P9eZuNhGJSN3ArufYQhpWHcUyBFkjSh9tsgAbRBAnH1zetUCerhb7XsH8q9"
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
