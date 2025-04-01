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
    "2rcMaM8t9m2G4wBYey1Y9VuRYBFd5V7Q8q6VKS3AD6droaXjjHA7cCywKombohXNJxtAx2rdpQUho7FxZo4nmkTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33AUgzNFdHm2v7vf9FdjWvxZmK6fBHNYyUBFzWhFuM4AZppMWW7BPYSQKPuHssT6ThmNPJvz88KWxFWkxkUKoxJ6",
  "key1": "4DzwguZ6GEiHnQ8NTQDEk8JYeheZNAdaWFwVXX7R1h5cXFKbDE7HvfFvLGSThSbWXNaVvkvKZecCRm7JSuNJAzYE",
  "key2": "53w92gnJZFeRM5R9C2ZR8ZbFYo5cL5PWGPsesJrD4i9tEQryeKxRB5ft63qu6rt43MdeMgNEbPJVaBQhBaAzTT93",
  "key3": "2qpoa5tT3u3EAbSXSgrYJgRgPcbfg579HaJE4vav4r38adKnxaj3VrTJb2V9Y4GJceZYiwnbji2WCKnHepNZWqaZ",
  "key4": "2rvYuSmBwEd4gSAeJiBULC2cVu5zDmCeFycToNKvLcPaxbifw7qwigp6wVMCFsBrYqMeJMDjrvKzQfeAE4TbjxCE",
  "key5": "2dFj7u1WosuVvFBEmpoDhASQpEUykQoH2nLCHpSecKaRG3xgT1jimRfxTByMQwXzvNa1fQZUcy2KcddchSxaFis7",
  "key6": "24YdcMbgLtf5n8Pvu1ZfhFsx1P2wP2QToZ4iGH7AwCRHb2nSdQhHVZEeNy9hXEMaVaDWyirpNXeosJtCYZJdtrpe",
  "key7": "2dsyqDnkc6ZwW4VCWMEyZvmZVBn6VGKSBg4xiZziVii38UNHyxoWyWSuLT2TJ24LUDgXCD26WHgUy5hxXCf96Rw6",
  "key8": "291Ca8JmhETXrcWrYvesiHWSTkixLKa924LgdyRZpfiuJ16ukuRJwQ4JcoEbNFRfuDagQfbieTPbTmkx99f3rC2i",
  "key9": "5XLbwjujDBiJPVz6izcNEqFVRKvvH4XcZ4EDLfpCCsbgNaTrPELopwF2zuWciXDrRcz3xdGtRxDaL5WkhjrSNqt9",
  "key10": "3c76m5yGNeSFJgnWvGuS6EDGu7yTnEKxqFgYph4gjQVamvJj6D8XoLMmFXsLdCJATnfYnHL4xeYL2KkQmjnKtnhC",
  "key11": "5nDt3S6NairQAC7NcGG78angyxTTHyjf1pmRyEGLWneBQJo2VgwTmu3j6zzyDkkcz2v3NwFazjX48ATTTJaJcj8R",
  "key12": "5nsoQcedNR3aw2ZxRewYTUKKnkM9ycNK7EF9VHThmpuuEZgjCnCAuj4BZ3kZdMnyrWYbWV68WY22hWbDEKp1DJab",
  "key13": "5PobAL7kDc31tz6bfzgf2S5bAamPLcEy41EGn8SagbVfWFsFQ2xy4oF25yJ6qNjGi4trJXbYS3RwHDoHsSC3F21o",
  "key14": "2mJKoE3Gc764UcxW7augoNhmZ6F2Xx4WJM4QqTQ1ddBtvHoUmZUK31kMakZ9WPD9dst6LDvV1hoTkWLi1TBNfZvu",
  "key15": "4nrcf2nBzfbMk3vUoD7TDLGkM9YHZBfesgBnxVCTTQBeshXeDFLiNLnWgRam8f4X7nwsKWEB7PiVDDX58f67hurj",
  "key16": "UxH4yxVcgA1TS7Ah2CkPMMBx32uE9nUWMxQbgYz6PbypobafLWr2HRah7niU2RdVPzrJCrUd37EoLqdaq2M2rbw",
  "key17": "4zwZGEQt2bNSx6MyWx3mdoi7woxv8RgxcLm2WD6XAzT8Vp6CFNRmq8CjfHQn14w2EEoZe9ECgkg9hagVxLWdKBWM",
  "key18": "3Fn8QvZH9bvfCJC1F4pS9UVjEbqWaDbxgmTWV95LnCXNxJyXLExAmgJUxyNRDQEJRkBZnFb3Rwfgb3kAaLFhd8E6",
  "key19": "4B1hUHr51rakSsgayQCLCZpYshhJnKkjeUtHpdc4PrpSGecZFbzEougyA2H1P6uXJE62iEVBLdwgybE1wUC62wMT",
  "key20": "UW44XatCJxo8mRW7o4Y8r5LLfjxeDLREencXCTMPYFsTDzJTmvinxjjFNmYKffaSoXKVKA7LQZGASRnS7wSDWbg",
  "key21": "3oZKDj2Dnavc5NJfENXwke25xLazdbQ9wLowhssKEfrXqaxZWw6wHpuw32wyg3wuoEtSbArRtiHERZPYKsbVgZNB",
  "key22": "2GAU2nv43zBfWHbErvGELWixSmfaHBaDhA2n1EK6NjeR2f9yKboMgs5JNCtDMwA5hjj5RANtcWZxEyyggWfXD3Su",
  "key23": "5Dk2umEVk4bbgeYScNidGPtLAE8Zc3eBBamjiLJXYc2kRW3xv4mM2PQKqGKeQtbZBKSknyRhvJTxVjMNdfoVNU1R",
  "key24": "FfJ3hNX1hWHR2aoxcyn3drZ5dAu3VsLx2nPdNKPd9xzNCmWTBk2heZBPuob9EfTo1pnXZDQhoau3fLJ9f1fPd2j"
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
