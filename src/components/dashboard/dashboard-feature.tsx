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
    "WWvETzYm5XUU5cwNZL5TrEGUxpy2ALhHhbNNDsr6ej9bgyZP9Jkh5734ZfA4DY7fnJxb4ZMWiYk5zZiSPFE4KUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2nadVY7zjvqmGdNQ6fJNNiQNomz6moNdFAVWF38sgosnMbwCDtxcfouWWvS66FXUUyCPGv12CsSMDpRLaFsQbm",
  "key1": "2TyY1A5tkvSTAtyAduE7BsmTR2JRjyrDdZfAju98skdAJmuH78DjrRD2GDUaUstb5K2i8KSQyadDktdbD1dhmB6X",
  "key2": "3b8L263tgZxa6jhZL61hQcAy7RffHe7VWLBSX6jwXzcW5XCQ2zGNdSTwCyKVpbcJkQByoJ5BMPg1ZExucJdsgmUd",
  "key3": "5rkNHTGQVayZWYUuzDsX228zVtbcPBpgAmNnZ1JGrckGQun6rbqeyQC2BjFfoBpea2rhMbvwHum2RR8a24bmXm3Z",
  "key4": "2Xq6HqbiqsENE9T5v6xTQ4Y9pPRnDCGBBfMuijLn8BtcK6XuWkkyCZ6roDTYF1VFZkRCU6nuD3Qo2abJz168eUS5",
  "key5": "3wufL1i11J8yMBZ6sWXxTP59ThSFE4weumaa2XCAffDJNC2UMjjbQM3x9Gu1yMm2zoxEUWuWwYULWB8TM9CeJXzR",
  "key6": "4c97Ai28WrWCUYrPN24q7sWg97qtTYrv9FAjrjDrUfiUQgWekrLkPsRiXEvFu8HVMEGAAWGjgkb13Z6CND7szgnA",
  "key7": "3BiCBNhGCwFWTsUYGLpjfLwfNxfUng8AWeJhnDhUzhDD7GxVGuKUd5B8eWzoxpJG3NAMqNQ4rLenUsaz8FjbjvKy",
  "key8": "JkmGVYwCnLsVnWPxjDtBsMVDpGi1uCZ7aNbsVs9G18ViTsh6Y21vPUa7nb7qPDehh6JRPG6qakpWB2YwKTEDHK2",
  "key9": "246wkTX46tnfptJbcf1ihmukqktPD4CGtmDs2CpPFs6XZKmcNwfeo3tuaURB2qSmxWQoV8LHLwCAUhXMc7SWnCRB",
  "key10": "4S6cTmxPqAtAJJ5eyuHtsJMFL9XTQaaRWndJNJcJqP1g2gBx2nsQfZcaj6r2vicfhR8THcxurVqJvFmyjxbRJKUs",
  "key11": "2pmVsJyt2DZkApw6JMyStTAMAh12CK2g2aENWBPeBzCgP3SMSvpBrBb7mxdLtEBAcjPT31FXjkiiNAZN1P5Yi3RC",
  "key12": "3DcycAL2aGHNhLRXeoDTEps41dwrKhXxfb9GH5CLyhqk8bpS34KFkardNSrfeNTEBiWPR7uuTd2ySV4fDJcrXkfj",
  "key13": "5P6sfwbhe2qXjSd64sTf2HSA3VJ3nFmPu1oTpBbXo8A8X1kzSqPZDbvRpvCABWH8ptgCNJv9Fd2Gt4Zj6g4ugWwr",
  "key14": "3XaX5WA9dZGGsAxAoZxLAcWpYqFK1YGSJBkFULRi2u4Wy4sz2Q5WZbK79kSMirtJhyHjuEp2DnemGbjyUxZNpoYQ",
  "key15": "547RVWUNFey2Xr7uQjFGEYodBYY8rUoQDZimRdDrYKtSk7jmCSVcDEuNCQ1YEcMkV3qeVwFfRRTpLC1EMC8csdmF",
  "key16": "2VkiXVDV7YsXhgamqwkC2F5rwu323aGSHWaGng5peHTzXVCbsrtLbPhuB5xUpatoZCpnWhb5EqHGcunSk9RBhgrM",
  "key17": "31Ckpjn3MQjs7So8gAbpJfDvQATy1wUwQXqRbZTKKMWihUts2CWxB21KZbDB6ryqv77CYc5THQEb9Sf69RQQy1AQ",
  "key18": "2tJUhhWn9TWNrJ3UBbroFh2zPwK1NQVzBd3pxn724YYqxqyq91Dkt6SmkzZc7Wfbj36LokgFAEgewbjisFC9gfnf",
  "key19": "4vU1DTVrRhQaDK2XCPBg25LbEq375gtF9g9MNyug2juZ8cUfyuuxRLbeybustn9Zwyxp1KqxVV4Xv3BpsPdbkeQ5",
  "key20": "2kpZRZzPH34WiWRxCHLZQLWDUzBUbQE2XTGftigrBWwSHCuqGaAr1N74LtZtMcBBFe4exf13J1PG4EEesdPihRLz",
  "key21": "2RsB9fkS2cSNrZKgMJk5VHTizsRGfQREN8MwvftHAvfD7sZmCQsGVfCEkgj2dGJDGsF9rSYvp6U9awPv5X2WB3nS",
  "key22": "3q2WwuxiE8E5dPdpkfRHCq7XKCme6wjtRpg3kcXW1R8pVdBFz83VDGDDDcddUZvUPXx6bEHbLeGm8xBCVn59Y7KM",
  "key23": "8ZAsKKU6UQHY7cGFCZaV66uJmgejaLQCgseXtRwzMvnVqfhTN1kYesr2kwYqTP5reizkoWJjYUZufnKaxbStP2N",
  "key24": "4sWEWXKpQQRQcqTo52A8xKDFjySnY54xjTeodbJgxWGRBfMZTBrXVWPupRBfc3gNjLTQtFVd79PiexxvxkgMnRbY",
  "key25": "2Z4PNEB3oFYbKHjzEb3VAAEPjunqAcFhGRx4n7Q5Vtehj1P1K6BFk6PVkfdbDQEuwmiHDFYezawektw7oAYoYa7i",
  "key26": "6tegpLtkM5ELQ6tUrE4JjVihB3Fobfp3qS43pNPQxXgeGC6RLuJWKUw8EwEDCZK9Y4uDo34pDS1AJrBGW1wboth",
  "key27": "3iBE7jkUGf5BnpbkNDSVWrzfPWfjZdaQLBZMGhbMaC2d2V6fKBBcAvYUFQLCjd5r7ozCwMTzmK9hdBrJiZxUmdRw",
  "key28": "SWFiW41wPTh7WXaE39eyBvbP7DLcSuBiijrkgMHa88nNUPW84AJuHimyHENFqmPoHD7ofeeCnuMsaeeBkyRfeb2"
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
