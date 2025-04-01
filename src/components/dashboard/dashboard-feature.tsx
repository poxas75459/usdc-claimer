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
    "NNCq145cCfK7kpTnPtXLHZf6mTtcNgT2NU3czAt1Sh1BYb8J3w5c2eQ3qeVE3MDNux78kks54B3HU3546Nb3ftx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PcBVnixWdvugNgsAUUjwiLLTtuZxAkk3U9udAikpUrmnaGcuCrGYfAe6kKrR84qcefp58FSoTEStJKR5CWpkT3x",
  "key1": "3cWSLK9kc15ngfPZCYTZZoQ6hNRpuceSCPgu4V4z6PtEGuPoTNhm7Ygm27rnYB3ouvSj1bs6PCXXiZxjvKJ36txt",
  "key2": "fpijYqGKqfVs23c4KzLTckNDR1vnsZ7Cfixa7MmRcgVAkGMzDCV8uwJtbYfbpwuikTCvbU3QVHMwoanXHDgdani",
  "key3": "4iKobbsRuw2sazJjKJecZsgjS668QU6KqN8nU3gAYMzpYWbH9j5YmRb4JbNo2KA1PKhRtoZrN89NgdLKvvTttfFo",
  "key4": "4J9Q26xy3Lo6CNiYv8kN3cRPUTqWscvzUJ2R98Vqir6x34vEAQ1Uwau9KQsuhkb5NkDxWegx6fNwUVA3XXWQTd9x",
  "key5": "dUk6A3iT11poaZAGXnvfnuVV22WKAr8iGq7z1sseQe1KStb6Ftqrg99eg4rNSgZSZUvcrAA4fX5JJdNbgit8mE9",
  "key6": "5JR6Zpa8FE6b1QQfcKZsENvumCkjKoEU8GWcBSZGhRDKvkoMobU8dthHA62yn2pbjjXo2N3Lh7R51dK2L6jP3ph2",
  "key7": "3GGMMhDahjia5LJSfCCDMfws3EhDLgi61CQSLt9Rqzxy1jfsY6LPHjTypZ96SY57bohvSPduPWvjEJRyaafzVjBw",
  "key8": "XJXKWS1e8tAusmB6P24VaXyRmtNHjZvCbgwR473ZSXWp2X1RLU61degUbHSwmgcvTvYLfk3GZtcoxsmzkF3YfpP",
  "key9": "y2C22feKh2SpUC2uH1DXjs1YzJAEV3naoWzKpgjNX9tgWHBPtJ8PLYM7QvyicmBTs3Y9AZGTvmWaGywXBFoLFML",
  "key10": "3DeqGew8sgfXv7q46e3ei6133bHsz7fEDMksXawN5Hzwg15pxaZ7XkWDjpNhDpDw7CEJer56nRL3asBNpNvSG9iZ",
  "key11": "25hS3we4PAuVxeAYjMZBHKsbQuV47mep7ZUGfmWH47sMs3JkVZm39b6nnv14VdgHsL66dRPbn2wgHZVc2i4sdkvp",
  "key12": "5CxmVJb5o2S1HSXshS9rraT2kEtyFPsYzKdZNk3qRTgYAtRAiiNtvMZQXRTqMEvx57n6cCXAAPqNvaxAaeCniWkv",
  "key13": "4YoqfEXxd3ex56nwkEdXneiqyWUZPvtqQJmsgs6EKqWyKMy7RaZjtvPWzoGfa2H2XW9UWeLdAG1JHJmeCjF7MLDn",
  "key14": "3Loeqjhy3ocPrgHbvJNxXCyJqMZK7wATCmFEfG8CrVF3oPnQKbSDxCFKU7aGFXdiWXoUqY3hwSrM2DcCA52K7Vs8",
  "key15": "5cxknPkHhRPNBcZYxDtPXPf1DeQnGaUDoxduwDEBtMTmcyDqmZzCJANZvQ2QUVWQPeFPz12GZeVGRQYRucHDr1Jt",
  "key16": "2adUCZ2cgKmWs1RuwiWc6M27GSDcmj8uRtpjGY8cTycE4hYfDq6d8rbC8uQVHdf1qfMtWA9rbiu2GqSt8JoypAXW",
  "key17": "4WMn2v8f4NVuPUGzrxs2cRSpwfdto89AL4NrKuoRFW2zf3gAbLF5Ca9vf1qDKU4pEVJcmbTxgbFVwwYrKjUyWz5h",
  "key18": "58YfLxn74wg362CSptrvjdMDWDwGvVjxfoMLg3NuSZzKFo1zTJgaieRxjqgeGrxBN2PaQNUPsRZscStjauAUtvUH",
  "key19": "BbGVaq1y9jFqnXECynQvEj5zV9e7Ym8yuAWAkveWaAAt4nDwk88pMCWpZUVbh1vP8fefdxdUpEfqWmL9HXcC73K",
  "key20": "5txKmSrVEuKwETSRVMh6wcarvByw3RjwyQkjQCMJX4vssswWSHFiiPq7rNvvKgs6MfWEZ3sN4wd5Xwr4yG4VJG88",
  "key21": "4bSWxneRfcriNRTXhDU1tJRbAVMZTzTEXEasc5NxqQ5Jf1AuYhGdy2o8NwjNg4Wzwg3RwjVFycc6nGHSkAESo1bm",
  "key22": "3JTJ22RDpitZ53qZK41FaLU9xnQk1DnKonmPqBGRGzbrjUmGRQ4SChToSL4yoG1EvRKWfHkQZ3nENbwkWT81UXTt",
  "key23": "56Ny6DxE4tMgocXAUQ523NDXbT5d8fWPJpEJokWUU9Ar2FeV8D1hgjZRgZTjg3f1WhkH4AXJYVLmePaPUkzSEzxW",
  "key24": "5xo9Fc3h7f1ZsKbRoKh2ZJNqCBGTWA7AypKTNtt6KoQJsVBWryQjcJkg9j2uABUJVS6NW2DCvoBSw6QuX5L24HjW"
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
