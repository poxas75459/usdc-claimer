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
    "5ZWEQ6LwPuDxEk4RfVbb2W8rWeHUGqnmT8TLtexd7XwuGYHz5yxRFYcbobYt8QSAm9ncQanWBWnrNeEMpU1vC8mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMJAXdd2RoRfgx63HtpChkpwdKZBo1Xk6b8Sr4tEfMwc1E5jud99Dx3bCYevm6h19EtBDufLh52sbBqjPuQ55io",
  "key1": "5J75ZJpXZzV9ee1jjLWQw9DdixJUG8k5ijGxRttV4DeHf1NSVVFzhwGJv2WDBerqKgsyJahsmJcNMkyx3A8JWKNP",
  "key2": "2Q1YJvHLrrverXYoLKNj6Gde2M8wCBj2LBGR2oubPNPiU3az5vU6RUJA76thidB8igRcqA1bKSNPVmNsz8qZu3gc",
  "key3": "3fVNh69wdD6ocmDVCRSLJp2CZjjeSULTr6bBbUB9KfPVekPz6ydsCNojvA9S58E46tuafLViQZDSnVxDCJK2DMcW",
  "key4": "KP9UmwDcvyzjpzNwbedxncUQzhqGfjsPUehqADPHkTmyfgBpLt3Btuuqnbk2iWgnfMsz365u3wSihaGwj6EUPue",
  "key5": "2eAzEre3CxJNw6zGEY6VfFw4bsT7PUa1VD1dbAkuPW6S7Ea3utj3JJ1RopVrthfLvCY1XWVocmQW3DXdAg4xLeA5",
  "key6": "3UCHVqJYBkVrjVpL2HreR3gdxkARLrC4y4YbLTheHEdfNLa5zjNuxsK4Sn8jwNENd3TcvfL4BU1XnkdiLHdyZ3ef",
  "key7": "2g2gYmL6iVoZGsbbxA5Vq5kXHoDfpNnKGxxH6TgyrfLQ9u39LXruUnf41j8LsHHrY4Lpa78RASLwRLcTsteBphGs",
  "key8": "4KFkCfn9JiAkhH8MuXDF7ixgZJGsXU2uuCQ8QjDwUDPekFq2jarxibxXvQJFXPTR31MwzcZLbeX27Qe4R6zqBLWX",
  "key9": "VePuPakceRhDkKL92q47nLTMCyMBTxMSJh7YzVtSo87yfw4iL57v9JNMsdKBmdhSntnquyQ3VMohwjNKCmBxpwn",
  "key10": "52bPBDei32Yr5NkVFuBrqvAeBZ7HKLZ2JQ5zaN9kMuvG6dha31mzDQzq57UL26VPnvsDTgc2YEW5ZifdtcKkhA2m",
  "key11": "UNKNzmGJn9JKG4pzVDgsv9TRzQnwvvxRjrGs21JV3QeaqsQncybu8VQXhJfidDkAuYTiguFS7XWGGrDG5ifTw4J",
  "key12": "XK5XzkA6V7aEJqcuK3H7djuKuJZoK6MUwfeJtFLXxAWxsoa4ADpE5ZHNWmEy4Lu71DzvFsuTjBTz62gAs5YoiV9",
  "key13": "31Hribw2QYUNX6qYDb52edd7TP2kJdN5yimQMyutWyKdC3wgmguYvGJ9bxdVtz5QnGbUEoum5HScUxu9Mj8bswP",
  "key14": "2ms9syVtTgetuxuHwyeyJaB69hs4zQA5aMLFmFyDS1BBFq2UcHi3dH8Kw3hr8rfdq17Y4qziUFgC1kufD7JyhygL",
  "key15": "2dX4GGWMSnTi6wkuhiCvrQiSNwqmwaQBxTUKXUPuRQFu5dVDHJ5sE5bKkWeWVE7qD3vqNe7JkMUKC6AfUxx4b8Tw",
  "key16": "3M1KLqQhnMwWmuG88c4owiPKvikkMwPEaWJro4pQbdeoSfgoHaYYgZWNtwtvghD5y7m6wAiP5FB4VsXg3sc4zFEQ",
  "key17": "3atm9fwWhzqCfJdbBwCTKBpiVvewkHFqp3AANDzMT5wZxK58VnyGCiVm3t9Hp1BtJtvYQPqJD2ABEF9ihprzkB2N",
  "key18": "59NfC3V6xH2UKZuwuyrnKznq2bnoBYufGnCPSc5CS5JuSuMGjYS59imLmS8V1WDEA6gtqJHznHq9PP9QDxPMaBs7",
  "key19": "5qoBhedyUtWmhvfbZW5RU3uvtCJ8wnr75R6Vd9iBoqDGF9eB4eb75RJ3cKDtDG2UTu7hGjtfTTpdY7XrjZKX4uYi",
  "key20": "5tqzQwpZyfSaYks87pho5Ge9SarUKdRMH6qSwet7NCPbsid6fhUpAzcwdf7nztpwUAvqzrK5XqsemzyY3M9zzPEs",
  "key21": "4xUUQLQimtPqgqrZa5gQdmBWsTxExwPgXSqpH1nXzxi2fbHr9uc6GM2aZXcnE6rCbcdjUyBemzXaToPeiCbPAQ2v",
  "key22": "4RL9JdLMJCa1uaaf24jVoRLqKVbQRf5uRPtJNv4hgkxHe6ojXBEs3N1D5LSVWU5enE95Uj82JWy6BravoA3ov9BQ",
  "key23": "2cjhvJZPWK4LZFqW8qW5UrdNw5TpWuNjKqBH8UeULgRLsPeTFEvJvT8CBZzpbyYsqgk5kZmGJXtkTSYkEtnRS8Wi",
  "key24": "5qQbz3xwAoRuZq59CaQEyeLqM3cYdYCuinK8AjFgquXmiQLCBWVd9GchBowWPoM4kSaGJbaZF2pvbPKaxeGWgnEZ",
  "key25": "31qWbr6grKWxBaKVUZmWFv5cHzQM7ri33xoeKKyv5fJPVbVUmHZT5SPtjHfhWFvxRVobYxs53Enwi2ZPaDhsKgAt",
  "key26": "2Ar9y96vaoeX2Dkv4T4pSboWwo1W52GMwCviV6gYezaen5nStwyAW8we6DLCCauTVfVE2LaAwW5sJn1tKwvJbW5N",
  "key27": "4CU3YLa5h3T6vJYZ4VBdpnsh3b9tYRHgi628oR5iYnJfRQdY3QDiJ8DXF8FEzHmmcfJzupriJykUd9ZLnU8DLU3r"
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
