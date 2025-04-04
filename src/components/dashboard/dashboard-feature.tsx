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
    "3wT8zqe7MhRBUA2AX4RLYd2rtS9rQbBk9veNTNtanppkxgt4JSfErBNGbcSaUAP9fNp32JNBaCdHHkqiRHYMD26z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vyokE1JgUg4zwQwhiySBqkhVfFzJ4eB3aNW9Dcx8iCjGMzb6mRBXkooEzLZdMttWxb7awEdrpnx47WBfEQuFuAC",
  "key1": "5vNYNtx92dH9WMHFsnmzMbPBBdQCJhuMXVyAZfvpFsm484EWybTe2taD5HiXvDD27vbqAPyXSF7JwmytocvTqBaP",
  "key2": "2Q6u8HomVEYEWasvcrDJYLy2Y9jULU7KmMD7F521Rw3zBDV86BBn2dggye1Wk2AdGX2usePDKjbQEPUNzFGNCFfp",
  "key3": "3QiUstwgEv6fLxY4p1sYR9ykcMzFaqWssPCRvqJSCvZwkf8EJR6arRP19qBCXyayyBFK4m5xHGnd5VtKs6GuB3KL",
  "key4": "5iFeZ9oC7xcXyHfNSF3Kj4gRgZFMVVAoGxShADvyhFV4stxXew6oqJGqDo4kaBGn6umnhnUwqU9oVvY1NsEazF7c",
  "key5": "5YCbxFRGE1oo4MeCR1paVG3ATaTMNNHyoDKAUfohwEtvZJCqDYXEToMv5J5uobsSJfs1rFMbbovs7vrvfzWVAqaR",
  "key6": "5QGa1r2XJVid64UQtVGDgkPGW1NZnKUpYFxrKYFa89sfjyz85Qf3CF2wxW2T25gWVUgspjMQzjPgsjuHSx92shu4",
  "key7": "5L1e6Fm7ssFA3av4bUZ6WtvVaQ8TzkCceGtsr17XXr9XQXBgL2GtxbxVVRZEqKLwzTuQW2Q9wcEncNLupWcapooh",
  "key8": "4SppnwBdhSssTNG2SfihnkmZibA8pDpgZY5KeAi3GjBu9jf439D66yLjBndPa2hQhrKSvRFrK9LsDvUDZaR3ktWR",
  "key9": "5X6XnpeV6BiC2ZZS7nGT8PMZHoHd7Mf1ZVSvSnBQhHACU8LnPEweGexsyUvv4wajUucTdFJjS8r4Vz17pxmFddMv",
  "key10": "4uj9gauWPey4fSkPGJ12muLZsKYCe8w6nPW2DD6mjuDghJjt5P8cuqbnkeZeBZa4L71R4ZY4B5yxUvTbvfmHwnEX",
  "key11": "4WwwjZZ9bZRdieWkKXN1ZP5v42FGZSVs8ZDp27cTYzKPps8YoJR8t4DP46up9qkYnptH2ghF22edGLsk2go7gS8u",
  "key12": "2gwhr7mmuVfp3a39XdvWuVAdcqpW5kuKJXnRsPo4F4rhs2JthU885Mk1K5r8rx12U2giZdnDwcKrGXMsAdMWzwev",
  "key13": "3vxejFtsL4nMK9rQ2nyi1KLnchncA1jGL2ECQpRWTpzfxmBJo6LvPRzqCMLF97kVBjwyFCf22boRLtV8dPZfQcoi",
  "key14": "5CeZR6FrSYzcAPH1DJLRxXePDXcZqk1u8FFcED1eqRHsob9KRqiW5C6RHb56aXRbC9BqhD1VLixwmakHsVXm5Sce",
  "key15": "4JDJT2EufLtFMjgLedaHxJwkqpr18tUVodcsdNisTssKUcEgw9dvc8FvPfWTHKLoaLBA5fwMH2DMZh4e3mRh5ViC",
  "key16": "5hhzeobg4iE77fHBjSaEzHfdaEpHuAuDnf6nRDwuYy4nLrq1W8Ba67jzstrUTM3Cz3jUzYWVeceeb6s6VrTyGAfi",
  "key17": "5oLHez3BXsnjoGsJmnBGieYhG3iWsKd9HEgg5LHmpr54o2dB2WqLgmwPuoAge7LayR7zaxehjKsQaodyjSHYosb5",
  "key18": "34P6DkToYRtMMGLR3JUBjGg5KPjc3PuKUUHA8dL6Ssqhj6u1oM1i4UEvxa1Tg7ZfkDBnN3J6LdQsk4BRh8p68T57",
  "key19": "4ofaitkYCVkSupQg48tX9vRheU9PfurBAJyMU1r6EzbJK4n4pFJ6RvMvfmxSaEm9QcFeqBNMed4FPvzDKeaiZUaa",
  "key20": "5W2Q2g8hNQ4aEzCh27LSUAVZC6sZ4iHDAmkjc9dGHQRL3fhLy1Dik87xdoS9H6hSpuoHb8TQAJckVM9sB9rnfw4V",
  "key21": "5rPMhb3GVWzEFDQE144vNjoLERpzLgiFwRLizeLLJDVGeCZAhX2reZacYAZw4u4uVnTemVcaiZS5tofrEfJ7zKN3",
  "key22": "3j8vbb1hKy6s5dWA7Ca2dwpDRt23ozYVkyxe5AGS2TW8bvoRkz9zYSQtxt6vVnincxbcc5qA143ioGqBie9J8Sg4",
  "key23": "Hnxdg5eCifaVHk9KDAdQK77dtSKs4etXrqVBm7ZwzhPEKDMRwAtSjMJoY7Mkb4MMGoBQYcudTHLA8Urf2NEXevd",
  "key24": "58GuGmmg3dKch4qGZDooEivisoNHFEwdfQN24BQEjhtZCg42uRW8WJBArRhDM55HTS6bbxGfLTQ1t97tAQfECniY",
  "key25": "2JPCpLTgyRZ12HAmeah8TyGRcUrN1PfQyCoxNcF8N9gWJQ437qZArv9ETNcP8C6vuxgAtGTVYz36bkna3Ytk4Xmu",
  "key26": "4QVsPonri953JNBUSQ61fGA77b2gULaDL2RY8DtvuD9vN2ZcVg93uvQ4iwyXGyz4ys5MNmhChgiq4ssnuszA5dko",
  "key27": "27pbvcj8s8AYnQ3rKtLjWj7PuUefXNhsnWYHEYi3DbxAyiLtGe68in72PrqDiwvpp5gHfT1wDpL6pdViLSKvJbY7",
  "key28": "2LKAUnLFqYJWJQb4buvvj68zWX7cF9ezVAiZjs4TsHAspBdWjWaJua6MLz2uTctGyB913kwEbcxszXo2KenEmQ8z",
  "key29": "4bH96CzcFSicoLYoD2ibUiBP4GdDQji54zM5bkC8wFMLArHLcPKYxWJaMyN9fELA9dpYdxsN6k7vaZj7afAf5kRA",
  "key30": "5y4nB4fQEtjzqtoGjaz3yThjA2MRrf9Rid2g3ZgVCPKL67eAif6cJkguBRtXAryGD2skxNrUykETSngzjsHgBXfN",
  "key31": "23jLCKyMzbyKVifX4vsqnSDs3qPY3P9VEpcTgwTJCFAtRVoMKjSZrDrXSBFpkhqXWB1cTNWVx5ESwudQyMM2SyBP",
  "key32": "5hjssHwqDGhiFwVmQyQgrkVcdWZqrD4qG6o59pyTAoHehT1YZLewJu1GN5MZpo3iHMqerFCCuL3sZea2CjsNn2Xq",
  "key33": "2iQZDbzGjfqo6fWcpb368LbhPLuhd476Rb9zDBKSLw2PEX1w7pCivqifNVExSeGXtiZBDy3dAAp6g2USAEtcuPJF",
  "key34": "5cmPbcKeCrT5XbEJqdXFmPwUic7kjQ9rdUPQYo47FCF9KMuFErdwuWquzhCAdv6FgAWVFxnLgHz69WmoESrTHmEH",
  "key35": "3JzpLSdsdUax2mxFYXLPFkGnY9EuT6hrUzD7NMzUeVU1zz1zLAzEBCZZ34ejQ9hwfPvSz5KmofG7znKekQy7E4Gw",
  "key36": "4zNBaUTpCCuyXXN1yukXzB77wqtDg3LtADrPrhSqu1wwJWngStnxGMM4CLFhwYENxy5pyuKh7mhpZruS1whNkwF",
  "key37": "3S4jLEvkE9ZAxoxt68e7H4RLajVoEeEqqLpf7LYgytRGq3hFUJMtgEUq7yZkGdsnBF56yaFy61ZEBKT6uui5GZax",
  "key38": "2mSPke9jFvs2x76HYFqkRZAay1srgNpELNSHsQBz3gd1CfZzeTUWXA51yTN1LojD44oi7EZRvvGuA7rbB35HiahN",
  "key39": "4fSbtLpBy7dSSF49uFFvvDexjGdkWFYmsoDvMMyXmeedCog1Q2oNe8uNXsJ3R7YH5ePVQ2jD5znjfkLsmpQU1qcU",
  "key40": "9AYVSuNECtcquyQTnq9UumJiHb4478QBQyfM7c2caY4FX1iFskSNsrerp8sGfmk63PEeYG8GaTsZWdfyWvAow7o",
  "key41": "4CkmywHWQ5Lb2ET5ExRKo67F1XbKkabd5Fefwdk5xtKL7YymEZR7bDEkYqfM1yoqSFC7g1c4gd8MPKDuECyd7q4x",
  "key42": "5KitumNQjDzUukSk7SZw9SgCjZwBXBTM1BWacZBDZiYNSPwa7xBjJiPc7NfK6Y4nUiz9VjsB5rLSixwLGTmbZR2H",
  "key43": "4zDWBPqH7iFoR9akdApe7NRGvE3Qr51N74TuYgvJNimrf3U6xXpMwTTXVa2uF4NKVTnhcmoShUXxNL9snTrY4LiP",
  "key44": "2NPEEWGgW8NAaTTCTqURZgFnYVDdvygwtTuzsVCPy94qeLJ9mwXaWmbNMXE4NJrwM9bb4xE1btGXx386jFkeGMBT",
  "key45": "2XAdMueMoDeqXVqF4NZewJbAxJGyKhNjASibL6BfEXyCBGntjaZ7HeDrepTYDeuCJUwndnyagoPuL5A8e1V7J7XG",
  "key46": "4xvn94bQ4G5tYVFdUakKUW1n7ywSBD1UCn69zNTmcKPMC6vc1Fs9CSBZoSNNUre73rNEpF4NVf5MbJPJ1kWcm9tK",
  "key47": "3WnKjNtN12dG68hVkQct6efsjXZbkxoJwrYXhUUTxfUNgHn52acu2JjVayq3GRRfwaMxiZgsQbhzpz6VrVxMWtwW"
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
