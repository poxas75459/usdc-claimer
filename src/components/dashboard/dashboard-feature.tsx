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
    "4crE7n76VaNHrUR9i2T6YL2UDXVBQE2yEGpyoRXtmKkRaaP94euWABryqScAMVErPpEpAkyt7JJogxod7jCJywXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrGmDscN2SoaJQM8MAHYxVsKo5y5uGonzaesjz2WwCC1wmANd2FjreJKT43Cpb17xFfEE8GcF1NYrgzzaSoafNd",
  "key1": "Ujz2V535HKFv8CX4zohuaw2p2a8dh75DKvheNbBshJTBwuDfx7n2tvZke2WsBp17EjWT5L5zddk992Nmsi9H8Kb",
  "key2": "5MYzNNV11ERn7CBvjfRduVaa7RicFvDkizQmM1cnxXqJr9Mo8akPP1ErC1SEnLKU9rpBaq7RKaTTLfNQXcMgKEEM",
  "key3": "5marPsW2rpH3bZm9jJJ5wa292dAGUR6ANWznNk4RzxecoF8QPVjJbPAExZB6gMdT5WR2YB7BAbHzfKimp8JZiayV",
  "key4": "4oa6BeMham2zhxoKqNqxAbHWMkn9hcbCjBhf1FGneDye5VbS9Gv2kYBxfsh53vprUNyas4kgQzyxbhPNPLWNUXcd",
  "key5": "2PpjucNMcTNNciEDxxB854fneF2HUh8NqnGnnvZjBQ2o7hqkqrYx8U7ZDCsT2CYbDpo5AUyMM9zdUj6uoNrXjodp",
  "key6": "4nXX8mna9T1HUHumj132hjdkQpr5wPoRwqZAMHBVP1bi3AEBN4GQhMxxSrZ3ZiFiL86yfhpPFLi4od1aQbREGazL",
  "key7": "1TKKuHtdZCjVzmU7JQhh9j9AXvDugais2AxbBGVFGb45Q5iod23M8KTKRUZMzuTF3ZjZeRZri4phmineqHoc7Aj",
  "key8": "66yTcVccfsSXupWbvr1t27Gm9WRD5YkJhFoZZGZWpmLDTxHrzFsAcV7hQ1mjLkWyH52xCE6RWsCRqYNYUvZSzXNW",
  "key9": "3PL737giRjxNWgM7nsqnm3zY7DZV3kSGPvxoGMNQdpzHp7mMniCTqeK7BazkQtG1FZhxB1ft3oUYmMAQ25SMLMK6",
  "key10": "3t73u6T3kJU7RfMBfQHyuN2bGAtapwtuJM26r6RLCitnmRZ4n4ADZCWMRCuSDqDfunubJ1YgB11f8QuTh3yiyn1v",
  "key11": "5JFhREC7Fx6P64SU28BUTW4z5u3uRSF3PhUpgBgqexc77zRxFVe2WHudrfUMnSYeMHbnCnCcJu5H3jZYrXyz6gx6",
  "key12": "7JtAkLqo5FKBrZ8jCt5Stq6SHXPGYdCry7Rrx6WbqkZ8Bm71M6ADW76WWZXm8ZxNDJeKnrka58UGDakZrETFLFM",
  "key13": "44Wnism5CeAoReTB3EwUVBBsxXvpPM95Y1pNVz4YpSmSMkqm7pJDaWU4G5mkjTWXwo2DW1igYaU3nLGVqSgkU3fX",
  "key14": "23JUnoN35qFNgKoadr1iGSdNEh2SE3XT3n473y7y38u5TWZbGBp6Gagt2hWP9a46s8j1DdQTFKmeL4dSeVCeZ7Ls",
  "key15": "MtW3dvpRUve8nrSmf4SQxMQPSuBY1bQqwBF5MyCPYkyAXTqCoezX1VDYNec8pCEPfEPX6Sb2qXzmkFjRBC4qTQS",
  "key16": "VHStysayqDV2Rn7mNAutpYmXJ9wM7StMHWiwGLAM78ou8UGgYXcytfKHCwwAxCBxjtrekNKSYmptQH8mioVpkAj",
  "key17": "5dHpWrgLkwhFz3dxSbkoXUREd5bDHyDnWDqdwARHDCEG8JPRryWRMYbrqHuKSuL7THrkGqfC8HAGPskFdbxew7qL",
  "key18": "494WSuJYYNGWx4SPZAfn9qgTbbeP1kQd3EWExdoHAVX952Gq3u7avf4gXr8sX2jHzV3QV3WtWPvbJrJpzk3wkccG",
  "key19": "4jYEeeaNMasDn4cr3y2xm4dKLA4vENTkEh5MBuKAy8e5NCgCzvX6tgU24amuwbwpTRFTLTZVejpqactHSqiNQsRi",
  "key20": "ZWj1Jbxh7X5BdN82ue6DxzYxHFX3EuMjtWguMnQFYkbFRvqGiEryTvtcSVoCEMBfonxC8V6VD55wueLjpjVAhnN",
  "key21": "5h9h325FwaqSLvbYVSmUrUs3hGhGoqLRM4dFsy9fk5v1pXVYYCzKqKLuuoK4bmMGpR41YQJ2XwRWDfLGKkbHrZDD",
  "key22": "4HQneBBJFYTLmMXbQuBLsjBCUMXs24ywhsC6WHqQCJ4S6gMAp1mKFTSbKHi36SEKC6KqT7KBWV9ntrPoGxypvhdU",
  "key23": "3vfb55csvcDCRgo951jSPVy6YTvLAMvhw2doDATpDFd2ds4Cbu5asCkB1HoAEjyZCHDQitJx2Jk2VgQu4DerKEXz",
  "key24": "5uFTpFyTtVbQtDg2RFkpmtMC7zaGM4N67L5y8z1tdxX8TR8XkXUjprhgr1XGBqaXcpEoCiFdzQbnPdwbkCXRrej3",
  "key25": "5WkjMyWAW9xcWidj7WSQgy3p6eBY23KVLJhgGBhZpyk28n1FPpYeu4h635BWoUxAQdHsGUZVdey7q46MN7ogsuSQ"
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
