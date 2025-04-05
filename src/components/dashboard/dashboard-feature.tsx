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
    "4ww5soXbVUVSM5SbSM2TatNGAvTYgS5PXrMi1tdZikjC8heQwrQvvV9PCdDLBng9qmPd4w62NV3MhBt4yk3QjPxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAGEXUz98KJkWR3SJzJGsN2v6yvAMdcW1XT89iSYWLhqt3v4TPGde9hnYy2NPAPVJcT9AKpnDBfw1tr5mft6Qye",
  "key1": "2Wk8hZycuFo5QzGZQe17KD4HZB1kpUZBG4iCvJWZKUDVExznuxZd52Xk7dwrQAhdAW7wpxLp2pP7FH9eCFxLJyZz",
  "key2": "5fxcA1Jw9SBq1HfiFi6UwkTtvgN1dfo8fxZ4Eknw7mRe4phWoz38Z6R6T9Gph64TYak5dDaqJDr1BkD9XfePrteP",
  "key3": "456Jjfy8TaATdekr2gJx4uTB1wib2msXofCVRWDMUQ4Tbf1PJ9WpphDmM7WH52EqugYdQ8gqwYZhYgUdxukqJ6qG",
  "key4": "5EJtih1dduC4UqEKhAsKPqPD9JsaCoPbb7r9hkZDTNmWvU7nMr8pCaa7UtaSGzFqWVCsSyZZAjMkwjQRxiAZMYpW",
  "key5": "38xc5LGizpiPdoCwV5Krbp1vCGbUfYcFBuPwisYDj4bTiVTQDFE53hjokyMRbBCGazbBJDdees2TGGc5gPdyv4C8",
  "key6": "4QG6aCHb1zL5QeXHzWUPLL8U9bsZXxYiyAogN4WRvX83VrzLG4TS9MRdfhcsa5aLkyMGm6FKj28xyxEHQYJ6WpQ4",
  "key7": "2n7Pv2eE9CER1Hr7x3WS4UojNbCNT13GSGPtkbq4iW7UHRcrJWSXDjfHh7s23bgQ8CTgfaoqmGR4ssW89qfWnoxy",
  "key8": "3iNCbbXFpZfNBh5phnFCiAqtc8ER7DR43oUnk2V1JYhmMorzJuS9iq3h9A8PZhoBtSk3b53NFCSrTsbSg4jQbqoP",
  "key9": "5o5uLuTKzfaitZM8THr2dG2ScmnQC2sue4xxDSCivakJ7aj4og254o2DjtAn3GUEJA7KNJPqe4gb6Pez1hsPb5Vs",
  "key10": "2tRp2Khr5MBS2rgFYk8CAsroKW9GSph6XfB36XZiV2Fiqsxf6eEAeahHrAdaJS1KEtqdZWGtiU89fdRArEJsUSxm",
  "key11": "z2nAmVtDP5BKsT7X5FsrbVwDPyQouwdfeSQB9LAkGcuVqVHqYA29bdnwsNa46fGc9ycvsQYjT3cHZ1zxsKE1qkD",
  "key12": "5WixiabF6muBAAGCVAjpTPLJkapq4KxTKinBS5nPQQu3Ymdc7S5sAUkswUcHwGY1gyoNckAE1F4PEQHUd2FXUSYf",
  "key13": "5hyb59FjFDQd7i4X6uQHMrHUTGrNKwWKbu9ogYMY9yueUfF2CuF29HCbmhoq6KN9YQTbf3fhs1j9s4663ic5xKXT",
  "key14": "3NwL3mQ7RWDRmvGxkorAUtQwMVWtkuF5HRqdc7r4LB3LXVHTnuCKUkgtbEUoY8zhfW3LtHjfj9qfedLyh6vBPxDB",
  "key15": "fxrZ5MVazGGyZJHjoPKSiDFC89cc6JRLaaqzNYV4tqC3zTYg2JqbkBxscpmeNDbqE79mjB9nqFQbVzkUR1ThfD1",
  "key16": "4emU6yvHG2B8vKMA3onAiJj8b3CDqfmHF52rXAY9tfT5v1KFfLPCvUyEtBPRgC6R3PdkB8d6PKTFfCZD3rAuMT5D",
  "key17": "48PY1mdN82ACNJaqHZUzoM6yPd4XfiDVgzzC18hm1oqag15SSGRi5DKf37Wyd3fkuHZEpr7ym41bh8x6W47eC78A",
  "key18": "2GWNcJHBrtcUgeS3uBYRFaNR8A8Lamo3uy8SYh1gGoSiaNfij9f54cZKgCuQfi6EHLoDkHa95eXWJ8TP6tFeXWss",
  "key19": "sFnjory1VTr2ZboYBtXRp6Dtru5HyW3hDwNJrfYRLKiXSRUjCsEFZT6eJoYXD3U5fT9KJoaBuWNnRQMRoA36iPc",
  "key20": "3Dqtymjrh19EvNuaYVUL6FGCvp3XAiQUFmNwqBsTffYEBU14t3TxSsSUugSJCn5A3JcKm7yaYyFG4CH2PKqzwogQ",
  "key21": "4UTTwPpyJqaKcJ8pumhVkHx6NkyYWfb35fNoKxdNxWt5XbtLH2Dac76ckwuLNoNwiag6YjJaEdqpVkuNpCTMhAk4",
  "key22": "3Bptcfd8nKVZNVXVypZaFL8SNxKDgb3sErSnX1XDUk45BRMRkEGZ7xpQUi1y9fyEJGahbs8yXzjEqFHxzbNeWnwq",
  "key23": "2cbNXuD4bK895kZFTo26VrjiVXv32Fdir7sdDgY8fBCUYSJuvwpkALnVeLnk99ix5MYfXHySgUgyo3yF6Jh98V4q",
  "key24": "3rjgUT69RqqD1BN5KPPDz9D8QkvtSwJqJkcuhKoCqPWxPkGgDgwG6Gzw2Zdjd1Zzz4d1rpVbwLP2A4t2oKibsH8q",
  "key25": "2cz98dGvaqqQYeyUkQFdD1ZFstAfq3RzfdNVckkRDHJxPahpK2ancojtppY4g7HY3LgW366EFSuBgoCwVkwPSQZS",
  "key26": "3H3m5PQaWhHhYCjtAJuV18hpqNhj2GxxCJPAe2tQkkEnC9zHL7dr3htrSwgJ3pvZB8t7hK4NaD5BgJxhc3dGWpUb",
  "key27": "v7cymeKD2qBjG3dFGFfWmvFVqxQtKTtzG2QUKMj5wPJVtexrE35gQD6URWKtqY6M5QzG7eT58dNsvw6sSqtUVhk",
  "key28": "8F4KpstDwSaaFeaH7Jm5GxaxFhDyWXCq2GJoTSYhKYDhZz3XJrcQS9GoY7z1oeyH4XeLRLpkvpUL27md6gnRvzn",
  "key29": "3L3VR5yrFy7zGhCWqi5T7Znhc5dmhCxkQHRZaHttYfw7j56iinYy2NvKeT788r4v1WhTmh7HUi75cFhmi3dnufcQ",
  "key30": "2am9B2rVQzwYo3c57W1pHiRUQKDv8AjWS4ww7tUesd1EpgGTcLtxXVRV5v85n95ghmXBjGhrQKRkKnv6tJVy5ftA",
  "key31": "4AMPuM69cH4VYEtwkHns6MaPJvpAZ1UQJJ2BaEUM17H62gmrmUuBcrcdgXm4npyywrLXHT9DafX5db41G6L3yakU",
  "key32": "3PnxSvftJ2Hy4RWP5Y6YgAzQo8eoaVEGB1LfTRfKDBtt9o8oNUqyt1BuiPTSbnm2NH189nGqRZmzdr1bCv95ukt",
  "key33": "2g92ffifStpaGFYPRmD2xYvec8wzgYy5f1gVFRRKoeWhZzMc9cxA6hq5qjkqb4m6JXmCuiwdXKMFzGEj7Ryvsyt7",
  "key34": "1AHB5oizRK3ZCmykZPuRr558FSgXuSjCYPfL2eeb3a3C4nBiHkw31cfddty8E4xXRbARPKjN7mL61ixPfDBCzV2"
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
