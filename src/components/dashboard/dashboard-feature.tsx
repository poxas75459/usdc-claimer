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
    "4froQpXQpATNq7egsPemfLW9omcfWX4ddryDcqUAvF8BQFmuzNezuVUQjaFgVoPHtomS256ehHeXThgU5Um6QM1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3bpzHqL5JJRTg5PeqxzTqz2b7LQjNyWdmJN1xX1WHTdvAdyHe2mUEoXtp8tXa1rx8nqU4pfEq1dA8pWmuAocLa",
  "key1": "BwHMGyR3uHiuaydVrmuZkkbPGiDkvBkkjUcvxbrEiBWqPtXCicF5S3QuWmNDFaA4UU2HKt7oSD5M8FWRUon2vo1",
  "key2": "567AXwvbooidPAdZceGdGuHmW3BFuEFsB63HLCXcbC4sYPbpsASCEj81qZUHAqZgRAvvEhWYjiUdBfQnbRJni69b",
  "key3": "2vjLBJr1SLARRfexq6jkkPCSXEveEGZkmJArHCruvHRPjNMb7R1Fck8LubXFQotVEWTPU48GpLawAQ2oWXBPRhTF",
  "key4": "27cXFB9jvXbp4E3yK7R42cLgtoCxik5my7E7yNbSxXZn2tcq5cW9aHjNpCsagyibRvfnKscqSkNCyTBajJN3JCbf",
  "key5": "3arauh5nRLbXfmELWq8GTDJoWDLaswsYMSDjxiwj6aibTziZ6bMwpfhXDSWDqPLDoaTiTu2WuqfNRif17YFgzK5u",
  "key6": "LyUKNWtVqFwr7SGP5gS9GeKt3nzEmuKwAzytL3BhUas88n3NByXJhDGPhD7bXc9w8h7TtphmXECbstQPPukEnx3",
  "key7": "669CTdnmpepEL2AwYxA4LJS6RKrpUPqzWwWGaRPiFA84ismY5P16CUUmT95d7caKyqbZoSQxVWr9wuy9LCWPjEwE",
  "key8": "3um1iPTs8UeJfCxaUXQ1baRVJ7F4V85CGPZXJz9kjzN5A9abNQYjEZdmJfnkixChcU9FbDgG3gizcQtYQTh7msDg",
  "key9": "4RVGng3GujXNEx8wEMS37sHBV6JhrHCQ3LpWRY6JNJCtxWeynsfpqppaDgensbaTco9hcAZP79nAEgTo1UwSdU6q",
  "key10": "26rqo6nLf65C2LcaBkCBsV4D1JiFZUQ2JLtGKwhKss64XjMSVyyudAuq8ZQCxAov4geUfcNGdcc2umQRHqEenFfu",
  "key11": "duTsTEx83EMtpCVsbnLKQmbqmNmFYQpk47eevtUhizDVB2hycuPH4Wy5xHcR8JvtghKWzQad5Nx2PeQWmk25JNn",
  "key12": "4vh1kN5iiKuXBPTEpYg96zhGXMZTst6XFHvQzzZsXxq2495bK5X9rSa3nrq9SCZED1jbHBr7NuUMu8B2f2S1WdcT",
  "key13": "5EN4SDK4pExTVyuRaxequW14NiYCbma8h4ocmWpZnpqtmf3KurZoAxjFEknW4Wng8YcTW8JxpJ8ZGuGt7J3kJb3i",
  "key14": "5nrLhHp5ZFpMuLyLffQ3t76FECUdshuPkGeDtrQouaVdVN6NYr9EJEu7PgnHH9mFiHsy6fQEsZgeKMHFn8Ct7HZ4",
  "key15": "5nUboGTQR3v3GgomvkLM7mMNk2CHcB2XKVPbGfnXjuY46uk1CmumwTNgB6p365miEViUMyGKd2FyfEjxHEKAddJm",
  "key16": "GzpvGMZ2gbssYpyfbZtYCSSe4xLrgD8p5681S21PkpsFJi7QSyjijt8FtEZUbNDaybMkW24LDN3h1FxE4mTCisT",
  "key17": "KMXTwyXZeTp7yMMLnuJuqsMQDrmffUxfGXe3WrRsGz2pDkrJTxCCgb8bMgPnoy5BDcpgeA2Uq4YZygh3aZXfQQw",
  "key18": "3NTR1zqut5dmpsoRKhCFWyj7xc5gYVU8QfUxy8YWGziyrpaPcVqovQqnbSdaumXeAs9a2d8pCQAepNNE28pETYYT",
  "key19": "2eap5QRAM4bBrzjinzqCVoMjJfUAo3JBnkp9ca1AwmfqVwoJ7JW8rQEScYwrXzPDhLHge3rqRzG4KPZVcyxuz2q7",
  "key20": "3RcJrmxBW85G8SwAXV1NQCSWxHKihgxuNMJMoUHtzVL3TqmFgpnwA1Bh5EPLhw3RMUkx3Sj9nuevgawAXj6GVsHi",
  "key21": "ZKdNHE1JNfHJ8fMgkcyRuDjJeAaDncfpDku59bKVotKUYYq5Jn6amkaUAimeJy2QVqSBaVMbsbS4SKXGxWX9hBm",
  "key22": "2JxwxDQdYjT33Kigdz8cyHacgTHSz3yeX7Z6wDbXST4R1d8YoDZHC4K4NV4F7mjUYgAhcGwfrYFN7pwbCDqhC4tw",
  "key23": "3tKt6tDy2UKuCBYmYYL14pSK3YUxdFGXFp1cBs1ajn5v8QLdxWLqHh4pAffbmh7CrJ64rZmwzKCJHS54mBtbjoYW",
  "key24": "6BE5yvEQ5L28wtVUfCT2zHxPeopMmtfhogscDk46jwYCwtE1RsfmA3xj44WFu3nXi3pRBuHSiLgYcb4Cc8BXxZu",
  "key25": "1AoR3qdB4gzBkPKmgZDkdVPbJLuT9bMkhtkT6wVU8tw4V2Eu7MziLwgv3urCSNyqZ3Qfo8tdQWnzxeBw9ymsX96",
  "key26": "rLQ7tHHWcUz166P1UbQv1C8tARtd94owHBt1szKJmt59YHUfPHSrs2ssMWJK6xPoSayJxxGMHS9XjiHiXqgeEJ3"
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
