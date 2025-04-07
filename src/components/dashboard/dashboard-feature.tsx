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
    "4KCERAiZMhwscuk87sSeHMkF4iUWh4akt3uhmojX2Qb9c8HqVDVVDU32kftJSBCexnn98X4bHhsQpXsWAqjoM9Mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5554cDs6GudkZfDkGhDbkBZ2GKqhMbeRnbFDgnpGzu6heWnhyaPSbK1SzamPcHv8QY9vLThbiS3J4MRBhLTPcDnj",
  "key1": "5qJAxpGkTLYsNoKhNDe1MRbbsVcA2eseErm7avdY2ARi13em8zjBx6A12aGzTXcSknvwLpadxW3dpmJLgoMPqFVf",
  "key2": "5oVwR6PDh3wqcuzb9vXC9fcGzaCCJq311dR6muZGybFExrb43MRbioGBEqzhCcLyg3vGVwWNTgKMEy9xoYKPdmek",
  "key3": "6sD98AUcWdGx9H2wH1ePWBPX8oGQ16F3JRgGNbMo34UWYawLVXsZ1573MkVNWL7cXoDJtCJErx3d2iDQHmRjex4",
  "key4": "4sE3VbkP4kAXPT7pqpRZHKa1LchkePa2mWRvgXKzKk45Fjn9JjYZcCLY3jqQ3zvwPSzhdPXnoC1qqgrMipLNimrW",
  "key5": "m9q3sHMx2KKYiZEMDyNgyfmLdFTa2WnjvPBmksGrYHqNZHJ4TLnP6PFWHqchSumzAkrMUECywEwETg2HLKf9A9A",
  "key6": "2oPuovtcGKV1YwgbFPRdVdyj8SP1BTFo5SVKEzct2fVvgRxUvWBScz7aerXPNE6aXPKLLnpUj9agmPbXxwPCvzg5",
  "key7": "4LDmQwdyKhy16y1RcoeK4RRJbh3UGKhD8TEnr6zR3XV3XwaEB5V7mrSmShWkfgYPwfzBLUBdbZYCogAnAtjAUqFU",
  "key8": "scm4mHK9trK4LF5qwV3RWGUC4ktbzk5RSvNdLf78VGW85KnYpeoD8AE1rmzz93no3aijVvwpbRBJcRRZcStXY4h",
  "key9": "5xoTojvDy2RY3AeHUNGsxesiLsNA2UDqtUNKE7qYe5zVDCXdoWARw4hG4Ztm29JgW38tBVTQNGc1NqQNnifk3fxC",
  "key10": "3WsZxLvbvo2wYySP8HobwqJ7iqyXqhPyRbVNmaMnTxkiUqh71hZQJMUMZvCxVoDqjrzrAhZXpmQX45XEsxAwNL4h",
  "key11": "3Wj6CpZjNZiNpupUMCWB3MrMk1ijS2HWwaX4GNw1Put98PC9gzMEMendzRzTH22MHPBPvpoH5Pienw9hfbzHQTYg",
  "key12": "4S3SkC9wiKEFwbQXboDM5x2pG2Phamvqahp1PxwmDHXNbnRwAP14trT1gApswVSJVURpgKvMdSsPdFDC7Kds1hB9",
  "key13": "5TK3GRfLrzc5294MNH2yZND5RLrktT1C777A6TB23DSJughmdDzdt5YCZDELB4cqmQhkCyddbzJmGeaMSwy7cTr",
  "key14": "4EvLBvXRHGeFGtgrpJpXpBpv3xN7bzBCDdUYoPBBjizBvg4DnJK8gcSGt2sZr5NLsRHADtEiCh9mvPtUtJ9hALe9",
  "key15": "5H1vH6jaXQRzHPuvAMhLHWUH7DE2oe2b8v4pZf4LUfRdGnZ6hUo4JTAcApb1J2egjG74BT6DTT34NFA6CnngY1hC",
  "key16": "4SZmxcRBgngCvf6H24hLdHbG1DfAzrrunAB47yWwe7Tche5GfJFyJaMVTwcoLEcNs1nhZ5mEevs95wLrQYZaB5Rz",
  "key17": "3RaE3ieQZK1yMCPbsAT4JNXPTdZFBF5wyVgWnhvuaBptQNU8ZnxcSye16rcHhGqBX9g4XwZMBKsfFqZHVGtzk8hd",
  "key18": "G9FRfQgvuHUKptU7pARhubBifRtQHAoZMmrd5Lk3hCW1zWdNbpsNLjhKiiRiFGpDeWBmgfWysnxkq6vT5bDwUZq",
  "key19": "4eCEvzcEFzoVNrMunhiXif56aoVLrQrVJVWXaEomWkGitY3QA6t4EtzZWDLkyr2R75U3kiHvZjKe9qD6pAyE3odF",
  "key20": "48p5wW1axFy7qjXP1LZEE21gDu22potdXshC1QwR4m7DJmWzebGad5qtuDKzDjYdQepN6CGajLYeePsxUYhgY23L",
  "key21": "2MJbvbyxUSnDHbTKa8tXxWSdtLx45KM3GfzqfbBuEt7GWQt6zb9v8BdDkZci5mu4fVyqXtHwWF24V17jLzdXMSPc",
  "key22": "5CpocyZaytQgpeoYo6gmbuhEoJVSUwMu5UvKFqGgs1S1JtTjCBSh3XieUxvTYqMoBpTSQjDhJfUVRx8vyd9VvXMs",
  "key23": "3MC8CQW9B4AH442s6j9CkHMvSqrBKGaURLaqKGqYJwGms3WuBmcwzFXWxDuEbTbaYSJxFwYsQPHf6JD2mrz18Zc4",
  "key24": "4HNtLWAuXS1u2eXVzsV6UAMsDAk52HbTrQQ9naHFA25jviUD4WeoSfovfn4npupDYSETq4SZumKgnn99S92UvULi",
  "key25": "3jDt41iVbFv9wpfvXLVEzr4rP8rbiLx18TxbuKzWpXb115r5NYWgaDy6RQ9LbMs7n2153qQZyja6V8B7DHQNJ2CQ"
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
