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
    "4HtUeN1ccTdj8N3gapPfEjd8SAjR3z7pKHTXFuQ5UAriEfzkeadB5bjEsBJ6pMebZWgEV5z3fuVKvgyqaChQAWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWKoVuieBUosJrsMNPrMs8gbwKify3Sy7qFrz9vfpGZ8fQSwZ1XDUixZNxpV2n8byNpZCBLde7JTaBXzLPmH2JZ",
  "key1": "1VqZyRn3zZmaC3fJqgMnFLNumFTk5E1epQZbbtBaAkh8LFWdfQc6CGuDZ9hRt2eqvvpf5uR7yvTVf2EE7XfjBui",
  "key2": "5V8RsfPDcC7aQLmVMvw6Dw7j9v4Z7SAvbKqHT9AXqRm3fMbokmwCRRYzUohpGtyWXrS2Uz6mZeVKLFnDeQiPQ5LS",
  "key3": "22jn7J47tALZPDcdcDySMaSL43sBz2ZCfTv3fDrHRodGQ6hH71xCL5Z8ZcHnvTLM8AZ2PacWz4AENukbRwmy7bbm",
  "key4": "2a2BtK7UupAMwbyNLpVyEJgbpGcyTM5SB5y3kdbXDvq8AVmJadj4yzhwwLd8B8PfdhzDKNrsazQj6uFAk7zocMUF",
  "key5": "5DmpGbTMpEJv1UVK6ckJFdoVTDeMsbZVZekQDEWpdb1a4HiZBXMAt7GUiM7eh4RcPMPnwcmpMvGNgCf2NsjxdjPf",
  "key6": "435NrmYkbPdgHxNFqFZGjBdDQUXLKjeV7nMUU97QMHVAqS4qwXsUbdwBuYJVw4gTPpvCDppRWF6MvxuvDvu8bWuY",
  "key7": "4Au4R6XUYzxyYmGedVUu7xEeFA6TcDX8fCycJUt7vcKeUgC5LVALbj39B3nRkEVkJ6sQ7E4qP6XFMmTP3PtQbn7s",
  "key8": "5N3jD78Y9L1pvSP6ckL2YZeuAL9JRXE6quMoae2ipnrAY5n8saBaEWf2UhCpzWZ357ksk1KvqyHCh2X1uowh6MN2",
  "key9": "329nH5CLp6ZPiKzLAY2XhTwvMdCKXqw4NpjY9527ody1Ej5GJESFTH7Fbb6AqZKw1b8v4Hz3tBKAo11sJApbVjgE",
  "key10": "63uxD69pj4MZ4kXU1vTpyPiVy5Z9MLnfMWEJ2JULTMpBEkykRiXx1PxQeMG4cnykuyAvsMxxbRTtzo5By7uXZXP2",
  "key11": "5dKRbMzCFSrxhDUDENR6ZvccTHDtLhGi4dHipakDELfk9VK8LJuEyfsm2ArimF1DVAMVzjwb2kRC2LajRGYxEqy9",
  "key12": "4HuMVU9WN5mXEs7CZUyo3qufDXh7jTH7cVKdg4d5XfG9zkyRFV9evL6au89n8h5JQrMmfS4sthxV3CToJ5tDM3H5",
  "key13": "2rSHJDCByQwaFX9WATx3BoqwsWspokRWec8Y9E4oXBL7zokYWNJmzx1f5wCg2RvHr2bV64JPjW886ehUzU9poL4s",
  "key14": "5eeqsi3UNcZTA7KNrimiiinmUnr48Vr5Pi41JEoVBUx9WJj5XUqV7U5CM68SuVMvYAMa9Po2gmxJnRgZmQ7j4oHQ",
  "key15": "3MiLYNik9B1mtEG6tu8M9wa8yaBUsSHERiRzs2GoxVC78uXRyKvUhMaE2EzV8V6QVdkujsvcfuHgMT6V5yiLgr9h",
  "key16": "4C1zpxH5ugyLJDBi96StiWXkDeiKGSHdscjnF94F9fCZCwoUTp145yAfv79efqDfaErgNHVvKXcEfpGntjo69gfD",
  "key17": "3FWnnWFoAVNQKTU17aQqSqnvV2foDEZYWahgYGEApsghUyh66Kgk1YZap8FaQCLQB1psHiWpBZaHqgJxHfJGDtuH",
  "key18": "5TGtkaH5A21szDrCVzhjY8QpPgJUxZLom1VwfKVhFfMsFCc2VpskLynpJLZXrB7NW4ANSvhvASmyFU1KwossSc8f",
  "key19": "2v1xCJcivVoSfDoRS8bjTBZ5oNHJf6wAECTmUUFe5xx2PfhrKme7Tu8DgH2K1PZjphLQMQjjwqYnbqLAXDv5fFBk",
  "key20": "3HU6L1i5QcqB3JFNnnVCLCJ2niyAVBoQzi8j38mA8yHwrkqxT2X7xFSj3UTSYmAz1uT8zM8EfBdNuMLf8Rx7iXpr",
  "key21": "3DJYZBqC62X1j28c3VN4kKv4PRp7xFQ4bHWYFPJQASS3HaHBCQY9f77xcn2WMYC7VdHCw7sniLtEbdWm6nkigA9E",
  "key22": "5v93izPZCFsvpGwBTJGkGEDerhSDb3fvnYxcaVVMKWGaKm8B4tL27XuacfVeurpMtWgNDr23Dt9X5Yc7kEzAKDcy",
  "key23": "4rAEBXXfXFR3P877fZfV2e1RJw62xAjjWQ4kPcRsa3RMvgUjKDpSpxMapkAiTfmuWcQbXsqBCkELU4AVqg8v5pqd",
  "key24": "2PPun69ymhatuiMTw3vRgNVnuNEtft7xq8E6kRsaC1wB2D8CKKMQd7E7Li19sbo8cdDxRfuociDu5EnwrnQTUENV",
  "key25": "45tfoEXvVMiQfp161RjnLWyM2xqaQ3F5gBKWTiRnBb8Ph3U48z87hczD9R6KpMKvBgy8cvKtQUq113P6gUnEHWNn",
  "key26": "5e7kcWobNNZeH8NYfumQSgNvzPkmqz3xa79WEXrb38itovTZMsaVKxAXthGtvAZ6UW33MURavFBDfEQGPwWJTV36",
  "key27": "3puyZ7teLBuM8oVqAeR9XQWSuNxqw7Ku3tWCBiRA9Jw9r1rxbsqQzY8TKFWqftSLDoWWrK4QsaxnasK6uyzSnKWy",
  "key28": "4uZhnC1HnZeAm5EskhPXgfkoeywcgaNHKXY15DCibhQrpeEiE6BzZokTcynuF3W2wPYAdgwtVuoQoDZa2wvALCep",
  "key29": "6oUFWdS2GdZzvUfrZUfFdzrjPQPMj5FHE6DuHUk17Tcu7T2KynxGJEhPy6tH998pJnw9t3gXeQRhyqVccB64gfG",
  "key30": "5GemUUDEWLe2tprdUtMzMprDvTJLNkiMCeCKb9UK2N1s2ydJDARJdH5pwUbfS4ie1hw9vrjtYLFwwrbv8FrdBLpF",
  "key31": "4diwa32DnCCFNCoypopNt7VB71ML4fxmXy9tUtCBw6BHmKz5jejL1Nw8AxDF7adLwg3ggVLKE7BcYuhYdKTa1WZi",
  "key32": "4ejh5Tzg4LqVxnm2k3ZfTziy9vd8S1UzM6FSuFTy2P3rtRWcWRWx1o7s3vuuEkUyvBmVserRwoCD77kjdAoZHreQ",
  "key33": "2YbreqiQH2jmZR97e47YwsYSxuoazyzzXQB4B7x9pkudDVtkWH7UKiYu6tgHDZNL9G4mRPmoi8J6knLrWoTkufvc",
  "key34": "2jLpXXCotLKvam44Lb2eMfJp4eFHRjiHKyxhYmoAx8rqeodxWo6KvDG1expZptzWt9MG4azQ3oFGDLbWhPngSNVc",
  "key35": "iCUhxQGYrZC1f8qqCEZMr6Z5pMrDjK42r8FceSCMmRNUhfWFaNXBF3mXz8vsEoKY1N8nGWphwRcfxLSYvLKgRGt"
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
