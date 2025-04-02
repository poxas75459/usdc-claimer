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
    "2F7uK1ziy2LGUduUCNxXS1BZZ4fxWebRd9qFStMz5atfkt6XGjD19c1KUuQM4LDrKSNNQYC6faPJywSpkBgHG4MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SKJWJaCYagst4qWhx5oW8qYchX3GG7ZPuhYzgGAHWiPX1tGeqSR6vDS95iLzbS64QfmVMM8mGBwWf92HY5VorG",
  "key1": "559535Ere4oNGBbRYg9LHf23PAYuPpDAyrPCzUYC9oZD3jAnmHyZxUUmsGGhbZh5YTKidsWrxWYU6W5rGwm6aU8o",
  "key2": "jZRwr2fTYg24G16GnDJLyKKzww4SzuqTfUKgisUtr2sDi6N4VDjDeFLTAmkE6iHkZbP2DBe1HHgVcjcNiNPTLcU",
  "key3": "4oYj5k4JRhKXZP4ERci2RC9SnDsK53iWXfBDfNXrt8QyWPWn7vWE3JTU2LFyvFwAJkeWazcumBoxwF1Pakrq6L7X",
  "key4": "4Th5Yn64Nzz7ixiGB74w154ftpdCLavyWsp9RWtQvAGLAYQ95DgR6JrbukiZd2NfeM78u3gk4Dy6HFbtAg2YtggD",
  "key5": "51BTCSNEjF3Dn5NqTzePADDWphthjybErUxqEpV8kkYTJFXJ2dFqEmyg7d8MLmEeJNdsdqwNz97ry1qCLrAX1nBY",
  "key6": "2iZgFxSjvXRoCw2c4gjcEwSLLKivX6LCNev3UUabQPd1GQTQBDkpCDcpNRmt2XxHQG37b78ZKo8vHa9P8ayMy1mX",
  "key7": "5cr5HoM8exRJyAhFDJNUEJBGfPj4ZPP2MNJhQ7UftpF1dzMP3ACjTnw5LGuZq5EXDeevMQCsw1rebrxNUssevWrM",
  "key8": "4H7PWp53hMwurQPwKnrMJCFLHKNypt2gahxQ58v1pmzUJTfrUBL5ByG1TPZB31jpumXPm4PtjLSY4TcL9RR2ceRP",
  "key9": "kjzbkXc1ocaZ7zs8ULFUiwdnn2JRiNTbhXdZ9bHDUNwCNJqw4ax5K2oSC1udCb2gRxPb8AwbU7BrhBB51jtK93a",
  "key10": "27nJ6kH7URqGByNTK74mi7iPeUxYU8hwXFEuaV3s5sJobsAaLv3mMfmof8AYZgnnB2uHiTNjGJZGqFymNBJq2tNy",
  "key11": "3rM9BPm672Zy52FvxfpaVHpkwutWT6ZE4f3dKdiVpwS99XQ6vsTmFjtHBXAghdEbhhr6iZyuDDVa3CwdbxwtUryT",
  "key12": "3MDnobXhQ5ZnbPnc184y6gi77iaCqLicz91ZTbZmD6vp5ZCR2t8Y9cjimrRG3MZv7yyoULiKj5nyJhmWbCxBRqrZ",
  "key13": "3HvKBckDDFaxGPf29mNhjJ6sLHAjcGcTC9nEjCDi3pSenQo995U5bH6GW1DSbzaKQameEw6wuKiij4zpj6KTLkY6",
  "key14": "3CniP18GikU6WKa7NjVKkrziTKazjcrZE6qGSKbAC337JJcNNEQeyUzHawSgLCytZpVqc3zLs6ckCL9qB5D8gqNq",
  "key15": "32HfzjPdbg8YeG91M4YdRJYtRspMGFEMGqoS3jEjrCBmQ9Y8XHyNPHQFR8rwetfV1vA1mByuhA9DrGQdVi4gFEi3",
  "key16": "2ZmxSBXE7PKWwjSNWtDtNtEdzdFvXxCZMV8YvdTTPVE9eD7uKvYMH66tSDYzktsEXRJwxFFmavfb47dA8Lico4bQ",
  "key17": "5Ea3NdJxBLbtRnU54bduj1idNXwWYgMjiBnq34QFodNYZjR5oZoFTbo1nTcsKXkWGbLjLkK9JFR79R2Vzq4b1eKb",
  "key18": "2voYtSL44JQctXxjDSUkQwUr3urSAc19fCiuHS8AHyeZrdjJhpDYSJN8MK3dXr6DVDMZutTHf8GzY8xq1HpTvukb",
  "key19": "5QZXh4UEvfP9ZeExJEYfnqnn1BSJLXSpwwt4fGeg2DGztFCLSsLx1238zKRnd11ZdLQu4FZA98K9ZKMJLsXyJWBv",
  "key20": "54ttA2D59EbiFLAgUzUibrVPc1yvRrTd7zGcaJ2fExcu8vB4xWVoBhaSeXs76dSfy5KgbDTJnpCYf3V8a98sUqZR",
  "key21": "3NLShwKXUtdgs2yvichK4YMbnNBDRe16aqppXwMosHM16v7NeRNZXU3U2rkiJGq9TBRZrbLq8YfYY3yhUMMymJ5",
  "key22": "Tt9g5Hg74GPorArhyEEBPcMecYD1kare4zLsAJQgjHfzy84C7gxkTaiGzYffUGsyPVbZzReH6J3Yvx77C6BXUPY",
  "key23": "5pxLhoMwnmN7NL9ArrPkKWS81kcGuV5hvArpgvx4zxEGsGxSrF6Va9Y9NkfCMBPKoovzJBMpHCQe4NTovjEF43zm",
  "key24": "5r95PSqmpeNit6LaT12UEsFoa2gnd1BqCuKUGfz76xUicro2eY7HdFN25LiTk81gtd2pSgoXF3XCja5QP3gjBpgT",
  "key25": "2jcy9edvmV5Mp6WcMRNy9Z627RwvYEHxWg9H79v1G7oETS8Fhyiu6xphXa2AB4fmHF3ugcKfb2QR4FnimcBWzoWx",
  "key26": "4vvCk46sVeVFWY9rNdBssgywX3JdhoG8GaN2eQA4RzDSz4q7LmAFqzPqg2xfLuvEftPAr4EbEeL8q9a5CFYdqEmY",
  "key27": "cBwkr6sLfdm9WvsKDqmaCSwZ1TkPgeEetzHTkfpt7yUdMEcPrBiKrDGNLaysKKe9dZdgEHrJkY2FhvSKUDgjdgw",
  "key28": "3TUhppJwvGsLQo8P3K5eTQBHnnZrpk48ekUTppUdxGm7zKnYjQx8Ww5LZy9FeGq99vKFXwPEbNrd61QLwM3kzW1a"
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
