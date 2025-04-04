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
    "4aPzZJ3xndnZbqj6cXQkhemYkUEgQSkdCLkhUkG5aCWATKp5j766JK4LCvVL9nmGVtvjKwemCWhphkoQ8ffTv9uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zqsbSECJFM1M4qjFfh2LKbmNpbjAwLqhWauG58TzD63bv293v4jtF6TNhXN9GVN1Ygi3x16tKZHPT45qmkFeVut",
  "key1": "5kVu4K539PxaWcTBDFXmC2zApravBRtQrrogz5XBdUQKpyAjussQWzc84tQzTRfgAc5V1Hj71nnDH1r7tnTvkREz",
  "key2": "2mGSSbkDuQ8BipzdKGu9f8gvovhWoiSRf8dZH2DLdv4jMqMs1tn9WumMbJ2cEZSazRqHo6ejjZZxkhEe2X1TJs3W",
  "key3": "3HbDzQ8XB2KZXkAaAYjqnjegBrvaqRT3zVnnMaRHKzFwhhvWPhakvC5WhwDDUdjPMa2R25zvT4BBw667ECqiHgXe",
  "key4": "44eFZ4EtgekqKPbhM9esmLtM45qXymC71PRUev5trjyCDiykcSCLwZp645x8iNTKJwzmWJ9YUZwJRdkDpgH5pVzy",
  "key5": "32Y9a8CHV3cjosf6V3qQZPQjPe6N6yEWzDGFvd3GxPGcqAaCLayF2f5dsFS8oz5orFZ7ySkvaJSMBWiCWhTquUEK",
  "key6": "2t7e3coksqnmzh2TJDF7WdAVZMdWidNyt7BBjV7j4kWoTPjF4bLaKY6JBcVunFgLXRZTD7ojo5j8mqhbSAyZhZcx",
  "key7": "2Wr2mNBD5kxjS9c1XCoTK8ULWtcRwyqCZfLjGvtBwZCgVcnht9utEYQbkk8x5UfJva9L1dP5fXdmPdoLEJmeTgGp",
  "key8": "biWbCMnpFnRWMYB3MUQAr4UhY9YwbGexGETmUg2c1HWJN4NKZNFAEL95SpyVQDFCRKmAgp516dpmQnojuocF9Hg",
  "key9": "RwBkHLi2zRghZbjE138nwV46E22giv1LCii2LFopxMv4LPC9r4WHtEzxHFqBVt79ENPJAbTawCc4w6Y3YVL3Lcp",
  "key10": "37oHcMz28Ho7tQCHyNbEUSBfpFf1YZMuqtvkhMGh8YFf3u4eqLydBo2tKqfQKVCKnzPMEwE5dr1gACyNW21MRCh8",
  "key11": "4bvnUMfZeLMz63MJLFs5MT3DDaAGmWTkL4rq5CNN8JhrAdU4XTWCyyifSJfFKTCmjZRFenWgBohRTvUAfaW5hwqj",
  "key12": "3BVyrFu6SbEtetVLwd5H9hn19prLGiiym8Gs615HtdgBwEy5Um6Az1SubJ9DfYeqHrPWhtFAsFpzyukfe4nm4bBx",
  "key13": "46a66XF6BPKCirDUTzJMqVVa34J6qdA9JHGs8Uw4CWg6LvLRUwePaDXLqYNVTrpyNuSm2iHBHrqjYswkgQ7vircy",
  "key14": "4VQa5q1utYFqNf6hxFECV1pUkA7p22jHgzE4Zb8AThpgE7fAHgHjvepR1vCz3mbyz9AY9UfQTKTyyBZR9ocygjeE",
  "key15": "QoxqWTrzmx7E1hhpBJ9h9dESMB8i7P1L3vQQz1ZwKKyAiNR955SWEM3VoWyd6EHSeadyRAdQCQ86oxQ32Zoeaww",
  "key16": "43oyr3aKCNVNzepRmQN5QJGorKGVbxTHM9mdCKQb2DVBo2SU7ogvfacy4SA6ByWRqp7XFPt98fS4dUar4cTWBKmf",
  "key17": "2eSso5QK2igk4BsqP9B2kFuQjRe393WBa2kndnMpm5Ue3ob4XtYKsqpsTPB2wJ2sGmPq51Ji2Q3gX4aENATdHD4o",
  "key18": "URBdmpeH2YuhgXUcccnBHCFegxdkFdye6ALnX3d6rKtZSyx7qW4pSsdbZeHUTvJp6P5rKX9aoVPDNhYsM2ddLd7",
  "key19": "1kvBRhFVin5KA2wQtKMn6zHhBCPuhiYsdFCDVxbmh5XefRUg8YVe8U6AcyZHyntrPQbBooosFigDMLis84rNYhh",
  "key20": "3MN6qYeW8AThHX4xXGxKV25KLUtfL1LHn18jzvxRBR2n9Sx3Yv8z4BY7nwypiTUv8ajpwQjKyK7icS4C6iu6Gt9m",
  "key21": "g4iyFbCm61gSzjE99okLHYetJmtn7wwm99FGB8ezRLP3nzu5NL54jaYwTmpajjG6p7Fa9uGspxgP5qH5pP4A1sE",
  "key22": "5ZQNzWrfu3YdYbXYtvbSD5QrDBJLGacGYoAntenL6SgwPrgKNaXtGtxmzsrFLhNKMSPF29K3QusT7xxepmm3hfd5",
  "key23": "3cUTEwR64z3njGXqeS9oe8BW7oKEyFofF6uSamzLzrK6MEVUnrFYsL1cxCXtrs9ZGXEm4uDT2rN9VZTjL54iMoKE",
  "key24": "3e3sprQ2QVXMF7krz9H2BF6obg7uf1ncx9pYYhDYwz1iwBGbYEqbZVnW6pUGbqqpJY8wiSLb4qDUkdy9HWdJxfT7",
  "key25": "4ieZRhw7tY5gYcSXawX8Aqw9SAf2XzuRhtstrccjGYJAEhPommxSGYaGcgkAwbfweUEfBHPndJRt3CSGie2x3CZX",
  "key26": "28ZGoKzMBJVwGvuZjudDJfCyPdbe14a8C59BfWahf6q3SFU69XDmwBKqKygmi4LcFsNngWLigmW7BtRtdrZijcAW",
  "key27": "4rXz9wRGj1Euisg9NvGjGAZi1gvr72iUTbtbrxYXNH83zxobxEDouHyQZt6TiFw3xUD3ExN8Ysnmwr6W3LW5HwkW",
  "key28": "2pvhpDhNAyJ2RkEnnzCNT5kEVbjugKpmHEm2zeXd2TdqiyXtX5UJLhWARaECFaFgsHtR1987s1bYUMHDrjEpTiYk"
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
