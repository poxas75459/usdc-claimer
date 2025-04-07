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
    "4tSTo8TQC9RoqFkppZn1cJJuCXZG1r9PVhqCJFKypze6hwLXyCfCQD4P1XQ6v5KPBqzjuWQMc4DFAtU9GP8KbsJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pX39HKkpszhdPmdTouxf97PhdX6cJmTDS65gBQUviQi9j53fp4CrpwF48w6sLjvw4zLTzjtTtonAfVWjX9bf2s",
  "key1": "2CKMUdAabsD3q9tdUQaeKzBZniwogu6Y46Mp3azp6ohE7wxfCrKPAbap39F1eQysZZSrh6XsX6TUDUGDynJRZRE2",
  "key2": "2Cs4rPpjy1nzto83XzPEH2AC6xXk61HQV2J5UZuZfDQGT95ACYzYe4dNJgSKJLx9iHr5993P28oa3bHeZuUhNzm",
  "key3": "5U9WSEzuQnogALjQgEG935dP6xNnba9rWJhRvd55yZo8q2cgVe3tDVHwW2fXjrq9q5dgjS9X3eVF3Pv376gjFGUp",
  "key4": "6383xoDTgqTVCht398jaGxZu5QLcR1jAQ983zitkx9eaikJscmXCsMowkx2CmvQNxYLNvnsKpZxaCKtZHkcPCPBy",
  "key5": "4u8KimeESGBA6uWt1UcdaLauioN6P6tGUvnUDqkzBCyR19neArfzvemEB5UkGL2kvTmSGfpQoEcSkLj724aYeyXi",
  "key6": "5Kvh46RPTbaNKVumtz3mwyFT3o3dh9JLpsNEnB3VD8zTZBeso6XBB2a1psYxVPciJdojgmDbhRQ4RRyj5Avk3F9u",
  "key7": "4o8Cn8goUKRbRHUxT9RKYn36zh7bfnuj7rxdRLKiW7Ydmf2rq9sPsTenc5cKKcLP2hcvqjZ8dYbmaaz1Eavo1dHz",
  "key8": "HEJttG8FbYZV2VcXDpiQB9Wx2HkezdYcNTkvWTbAJoS1t73HcJHzSzAqmZcGzN1tezAWQiZtqhs1NiA1uAZxjvw",
  "key9": "43iFr67f9RXHjsuKqatQ74E3uZd1cAADii7fD7PmYEqbJsuyKbDSK8L2aU4qXfaFBccTqNNjwGT7qfjWhZ2ocZXs",
  "key10": "3tcjQkfWNyAiqpmCMwn3VJoxdb3jQ7AZuVdVQPSUHX2wChKaqN7KDcmZSpBk31zVUs9dZNodJrnKKovuqCzmWBvr",
  "key11": "4PNhf6uENaUVEacdk2rsnx5Qf4Ck3TNe3DbYmKNyEU7EFwZtVRAzgEPwd2U1ja7nxF77wmA2YbsGbdNhNgRwvCn6",
  "key12": "3PgLZQ5QYzZEFKejYtg8JSeFPu55eveF91rK4JppRxsUh38BXxvDLtRYZbkH1xkm3rHXcDTJ2sqP2wRNerP9vxKT",
  "key13": "2MfxzqkHsvFTE8KnUwGSPqX6xajzdUtaWLSvbNKomznDSjCrdAftpaP5AbUe74oZs8t6ByxoXtqawisQqSW5TfB6",
  "key14": "55EyU16ccK5rb9VngUz77GjR74vTBTQzzo6i3hbp53Uo9ZNGU43jdkg53gL5g2sc4v4HtujHpxQoMS8nTDtN9CNC",
  "key15": "2Zisv37U6BvyGTdEHJShawqSWPMZq9X4tGW3RptiMq9dQHfaxhmeSWkCQ1xXmU6uPeQn6b8vhNtcQHkjfyVNVExq",
  "key16": "uEypRuEwp3WHmBmvKv2i5H8J1FKXuYWouATTFboXEfnQxKK1w91PwG6a12YuBQXEt44QWBGGE59WfGFsDpuLdLs",
  "key17": "xqzQd3i5WfxwhfqpabuAd7cac57XbPAwaEWDroxEPrFfSgESgM9NncWnMEFTcjRbC48FLQkifqkvf2odsMneuxT",
  "key18": "2CQEcvGSKDzFBJM8iCpLfVQfdGFxcoZird46R1YruHjfYkqqYg3MbqoGqXBMAngZvJ1uKZjb8xbBwP1H4n5HX6kM",
  "key19": "5MfySTYW7uB3Ve3mfaxHhENQGJyApwTZAJtgB8NMJdySgNLRdNHwv4jiwCUXmpQLffXSni7XX6geHXaz92Deq69e",
  "key20": "53jCNm57iefB2zKGM87r8vWQiPDMRYQCVZ7RjNmYTFhTdY8eMNLcXY7QCyRC99ddKsBuPpGF9dXWa6VrYeavifov",
  "key21": "21eHFEt51XmZbFoe3vQgmyuRP6fUWB9EEDnqj49XgDXt8xndCVRGY89XFoWxDRzLjc13TtzCmW6nXTieWareDZoc",
  "key22": "3X4fL37vMnppTFFpHBgknEET4RGavqeaHpzz8Ya3nEBNCMgr3qTyyA5wumqS2KQYz4oNR6u1RA1gkQCLWg8xoZnc",
  "key23": "5vc4fh8xNkhVi5pSX1rhfuv7j84sEkZdDGBMhqtwtr3TxAEGAm7k5h1MgUrukWvSLSmukFRp8MwoU9VacMx5CEzH",
  "key24": "5W2jBMv9Cr7yMjyXLJqMNxUtq4MCJ5TaWL69jwyPsHSpqdaCH9Xu1wS6vY4hZGz6tR7S3XYDDNKQJpM6VVy7j8as",
  "key25": "wfTReCqGqexMkUE7jsb7qfLmyCosProvrzv8MWKc5urVp3DLK2JDGRvAZrXrgeUzeDEHmgHLdTFNvv1gmfyJcvd",
  "key26": "4kvBCA4jSWMJuK3xREUqbkuhvXdvyqMczGnKN5gFNm4THKiebPfXB7SXemzSzTekQpmWyotnB5bvyFSsMDorBcPk",
  "key27": "4mv1GAqwcibXgdV6KJEKGRbfgN2o7eHXamyhS8n279Hog83zAoTwd5dC8nvFkS8Jm6jqfEw2H9T2hAci4UoEmJ9p"
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
