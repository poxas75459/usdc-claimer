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
    "3JGTPT1hswgUomuzuS67x8t3GhtDFEzyQ3u5B75CbHpg9kwRj7taAf7mx5nENpkLTBmSBMyqMXS8kJX1naqgXa3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzZ9dqXXnRXEqiK3aXXM2dPEL8soSW3wav7yCpKVbqDvL4XZ9Q1EkcnPu8bFCg1xHWt5xqpPGKuN4rRZpBBeRTf",
  "key1": "dksMY181Fr26BaSXD6mhC4x7SUVNt8zTEXyoB6K62QgrpHwieL7QgrBd9EXX2NmtfE1Nju473G1TfqCX58kpnHe",
  "key2": "4edc1viS8GTqD81KfgjTE8fWhG6TkSw8neGuXSr15GAHJevLLdbqu3fcuEqNLBFdXj6Am8J6DREf41H3w6GyH9B6",
  "key3": "5vX2JzhcELr1rz4ayFDo7nnLXfkbUjTsAed6E9y5pQ6Las3iPkTAB2AbYxXBpjW63ujABbSBZdUbjQKaV8UkhMpJ",
  "key4": "5XKyKDFubHsjfHHuTPicQ4iC5kWThmRcoBapyHhkaNLCxjeKt5NNqb7wrLsWXANMnTZ63d1MqmG47jzfyc3vW4cC",
  "key5": "53dmzZ6bqVovccKmXYKUaPFEfcjXpDVYkw5iGr6CKfaMzm6NBUkRibTNiE3bSx8xnjhYGxcthw7pWssH2KCvoC6K",
  "key6": "52BiV1zeryepozwVGNzAAXjQ5M5ATuMGJJyLygyXRJFu3zoEyUGva8Pxnh8xGGnU2Ug74FeRFVbsLN5V6pa5CRty",
  "key7": "2AQFxXVFQLXfZSZiqr4cK9NfMGfrpMe8Yy3hQRucoFUxUsFpx9XTTCN7KofoWx46DyuL1GC4TuJTUAs5xwRU4uv3",
  "key8": "488TDTW63DnpBFCu6L8WKL1uftc2x7vAtBwbNcqThAVnsXRkJBAPDRJdgL822gJnJbsYyJBv3A6eLXSazNRAkN1u",
  "key9": "5UpsZWHcujxqmSxoSXyiJa7edEBwntFuizSu153jS6M58uKJRb4JjjPmAxivDAqkeWEixuCcza4Rmtb1X2s9NbJn",
  "key10": "2rVz7UUacr3r641kc5fXoQ9ugfPNRUbciBSkjHarMi698B8jbx9DjaDqWjKiZw7NH4MgLH4TbqA9VzDRHJ2XSNQo",
  "key11": "4p1bJGkSYTzoN4Ccy3pf44QY1ktxYVtt6rh7FZ7tn73kRMD4LoGHFJLpWxMdbRwXR4C1f15DwEuPDFuA4eRtPugU",
  "key12": "WYSNTUSZPVi17RzktpR8X7KX9X4LteVrRwdiGnoqodJ8jwaXUe9ohsqhkDLcepJZRfdPkVTpDTYsXfHP3N9Mv79",
  "key13": "5sq4CxFWFTbd1qCR2nDbmFNsD1u98R1UxF5eTbNEfkjSECyfeHGPxRrGmuv7J6EuaBGHC6PyAHfFEeNY1xRHG8eF",
  "key14": "hLstPbjRAVEPe3pyhxz7NZ9ioB9tzDxzQyWKZp3rqgJ8BUYSB5P9w8Nv7Pk8esyhLtmJHEgM6LdeNDrgWj1DBWc",
  "key15": "5Yax4qSyQxPm8HwmqZGTPP5FKgxkcZ2peFJAaQmpe152ucHcvcL4feWt1DcedVP1No3eM7BCCPKZtwEW3xe98wgQ",
  "key16": "3i9z4sNwUj73Z89bxFHGU2Mx4NPrN2ywUe3yHDmdGoVm8xeu5TVMRRBExoX6pezgQQxxLC6e1JzcyVb5gWoGtprF",
  "key17": "2rEzmtqxr92ZRpV4kcYo33WpW7tNarPKPBAu4kLgbBr1p2nd8PQqbEMAPasoTHQMZJhFE4qFYGvt8F7zP4ajxwY7",
  "key18": "rBeF5fPNrfCH3ZaE1kTsLBwCH1i7V2kiYHQNKeenhgx6Nq9BkoKA2t3QSxGM2aDVF9sG8BvcjzyqWZaacZ394Wv",
  "key19": "RYjujK4wLxWv7HtaqQTB7rLbBu4XMo4GLmuThsS1iHKMXHAC9Pq792s55Q6EtSTmGXhPC4bpWNfoFRbFDZaw1Y5",
  "key20": "LBmdYk2XvQ8gFDLiSpvUcUsvEUiEVS1Y2V32eEkgSzsw7nNjaCVqzXX2yBXKAArg6LSmHNw485Q2Tu9D5BAtRzL",
  "key21": "39sTXxTEyGTYr8o7EcT1BG3RBjq5teJoWCzdBPcb4W9Gp8zC4dZB9qmXw4AqkLCADzz4fvNMP2kxeZWzBUVNjwpX",
  "key22": "2rp1ws3NVbbd9koA6wByGLWKjNgByFyn9yeE53wSM4xGHBDDH4sNEtFd9sF9hwb2gWaUNQb5GkLPyxaUvNU4at6P",
  "key23": "5B8eWDd4VzpmPhJXmEVYLShTRCo63ZuqgDtcaytTuDCDDDRzQ5Cd6hmdRSDMrDBSEe4zfGTRtBJWETyN3PQin4oB",
  "key24": "2LzLD6bt2kEF2DRtghNJUQqtW8vPrQyXG6LPJXbaq7HiroZGUifLaMduAofStfSYUjhL8kiwJE92z1qMAwnoXqBq",
  "key25": "2F2BMYEVMfp46gU9SsX5HFfbLmJoS5dPND4To7M84RHEyKFuVuvPvxjsLEq8r9ax6tE7inGNBsTFnehU7zpHytR3",
  "key26": "5VL3HmrYXjFTQ2keGDaPgJXnzPbNKsLqJ2pd8VjXYTkLr1s7qaGc5dzrHrBq8rE6J7RL3RC5oz7YnRjXBUHDUpZf",
  "key27": "4GPbiBKp6XyB3dgLYcJZjPYSBGrmsUnkpoJECLQnCrnVcK1wJ2CL9rvqFX5pPLJAaxAYeyeX1RDWhFVog9sgT7bk",
  "key28": "448HEiUPvBWRPqwiA1ZekPidxBM2rmwfmNE1YvzPUgHibLt8NcStivBzLj42h52oRgdAFRqmcb895z5t8CGsWgYK",
  "key29": "bD9u31tiHLw81iv2bTnAxmXuSh9bXxeyfPLXBuVfono8JnHKSY46PYJkx8ndV9PGMchc8jLfEjvxmM6dnMgdBcU",
  "key30": "429S9fG1EfoxdTWxrxL3SJXRmAUmvSA5tpUXJf94tHGz8umyQY4WgjworyeZNXfDEEW7HtcWX7XFAggrkoZwCasN",
  "key31": "5qMwiADHVHYHP41E97iJTkLD2645WVeYoiq6devid9arLK6QTKQvdGjxSWLueRPzSECGgnjxVbSWT7UHVgm7SbTV",
  "key32": "AMFkHzdPjvpepnw137CAPPDSSDT4sNeeLUVgDvEKmx2AUG4k6monkAANPMTaHX59MfNJktkmY7sHYKQ7VUJwXuM",
  "key33": "PFHUGvfbKVaDUdtwo671pEfhCo8SqefEfHmaQC7GmSdUXUi2Vxy7zozGsFChiA1tgWCGvw7TwqKUBn3UQfG9LFM",
  "key34": "3zwps7ozYsCcY4EBd7GaBjYVfvS9jZJnpEqjXzAZiKt1pKjNaFNhuyBEgaQDRFVKCWBt9ZK2uzqwK4JL3v3KHTnt",
  "key35": "2WcMqogWnZBZ6nZSx77BMxGNzm3zQqXLFo8PoJUa8CE1LsmR6494gYk6z3h8AjzArgnSztPgQ3qypvgyYfGXo36j",
  "key36": "aYZPsChuknu8mFuGD6NpRbL4mb6fm1wEg1sN3AUNthbisWxqNHJCFxKpsvdRVGwaQmBLgrQH8bqa243TshQQeYn"
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
