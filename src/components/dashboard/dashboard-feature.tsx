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
    "3rp3SmxZnUvh1SGhPht9BsbfrPVGXptFtQfoqWeZZPe7FTxLa4Wbme523Wt5bx5VXZmiak4oirYJVDTe3miDBvav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QziedDUmejjgNNQdudrw1ve45thavL8k2uwJE5bdANQPHcHkBi5obBFfPHd55Wp5WCqC7WTToVWWbnxdJtsw65g",
  "key1": "6i8g4xyBdTcFjHskBCtL1Re4KSf14bAM1NbpFnitb4ckM7qLvyeWBJ9T2fmQ3zS7PmqJLLTqvqu9r6ywMxAHkmc",
  "key2": "2byYmdaogkwBcM4hAMEYHiBn1spHrSFqvry4fcxd3G1YDKxH2t3JzezBs6oKn8TL4p1hvuNjQxgnQAAh2BwtNnT3",
  "key3": "5drdLc6SREiKRu37eBYcGbYWnUUfmM47mqYicJoMysEPoQBtmukZbbwoLMrwFX4oVZSTirHLuWERBxGEYwirnHbB",
  "key4": "3gpVpMQuiFiGRZJjDY9yiz2wG46avZg9XCfSoM91XMgia2E5oWnk1ryKGwXaycgMvfeT5jh7Drh9Cr3yAGDPcSFT",
  "key5": "4FGfkKWEVjAt5RtV8WdcDfxihrGhP29S69T6xEjPTByZ6GaSjAi2J9a9DwNcie1sMaUPK3Xd1ZGqNYeGnMRwxqUs",
  "key6": "3i7N4G9Myf6e8XayqwULZhYLBNZZpe6Eht8uVjRi5W4EKxrT1Zy3MnjjAwg6WMJaJ8sJSfLAZWrn29zxeQicrCEq",
  "key7": "3XKACS4YXbNAnAiQhMdWz3gUM1vo6wiFxqvBscFViHogryWdJSPa7RXtpPBiLjeJURYqzWYM1y7U6XjGUH3cwR2D",
  "key8": "21VQsNgfzB2p9MVmnNjG7uik5nn3bsBgW2Q976fnmnHxtNDJ7sZB5YzyD1rxevkz44pX8WnSZUTAc8kTk5SgRcDP",
  "key9": "4niG1UQaa2YNxE1ARFwV4Napqo2tMAFGWAZLLESASMdFEEoP32twYv7gT8zAHjQ79fo53rQxHG7vTDAyQvszUGtk",
  "key10": "WsyjbHaLZFB1AXbXiFdiFkfmvcmL11qGUL34K7Q6tRdiTEdkFLFRizJqD4SAgRpmj2MXJC2W7AZ4xewkqKi7DsR",
  "key11": "2DVf7GGU9fCTndFTiCPgzaKoJuksLEUGiazEzRZ6F9pRjRyuEgCy3z4huvR25hagAiDDEBtWSkqASDRUZkQQor5Q",
  "key12": "ZHsmCDLMXYeTZV4UpJCBaxLpBSvk7cFeigQgi3bKgftNij4557wZyv1CHrSvhuQJ4iUCrcASHgsCmaVMDm7nT4p",
  "key13": "Hpt1VtB2NHPf8HGpitcrqufhFvjJrtiy2bvnB8twMPPzw5EY5FSxy3TsWyqCvnZXnHaBYBs1qM2XWcLAXpqQKQ4",
  "key14": "3Pt961aYgwWLjLjjRmAL6XZb6skm6BJKHnvBeztXGiVRdSVj378Cb1K2awsGSHhYfudzV3aeSGCxZ9qHJTespYNr",
  "key15": "5Nmzuq99z8oFJmtLQjMBEWCQofRzrCTvEq2RoryaxRphohC6G1PFMytPfPpskZK8Y4sF53ePjtw7m1m9tQMK54V8",
  "key16": "2NzdoQ1gbapLZJcivZcW2EMqmDGXZwqEHkiKXENC9PZYAi48pf7VhFieCM7jSS6pAEpqJRNik92JaVY5vLVNTrto",
  "key17": "2dNPP7YGpxaJUQzZvekSt8mvvVzpJYjiGyd3NMhPzEAjPYqXs6HxsF8xGHea1TSVJTugLPpiyCEQBBwoAouHcT87",
  "key18": "2tPJeg3ZFD8CMwmLGsgfaT2vhguzFGcL8tVZQvME56mGEL9JhQ1ahr3Z5G7uGZyv8q9Rpn3h95ti6CxU9C8KoCfq",
  "key19": "4LWdBTXiB5aXNzKWwagWr4thKEUD1uRgAPPCYMY2qDmhL5Gr3iX4fdrPsBxJ5YXEahp8kAGUCi89FhYk7aP22KVg",
  "key20": "2wDKcvuSTvCT9BEZ9FGJUPvSaRf8yvkmuY5bF37mGSpJNkjRJoVNeVmcUux9nYs9LmRHttNDPLtuoJQnmozuAyNK",
  "key21": "5YfogX6JipcMoWoRhew72XbcUW9au51QdzwGqBQkDewRGv4VyBMPvL4ZquEUREx8uLn7esY6aUh8pZaond4eHxGt",
  "key22": "EVxrkhgUfhcof6p1fHYZvFb5Xwq3rqUQqCw9513zpqmVDvYBZB8UCPqVhuBW7zphZb64VnXr9U8PXpaEkAKWWDZ",
  "key23": "3mZiEfCaNWoPfDVfHUZ9QwvxKiJsrfSupbamMjr6mTQVV19g6MoxLmge7KzWf3AkZdJg7FoHGVZWUwNfMkYRcijW",
  "key24": "3WnuwfpLqJUxqK6qryHtaLfMZeGsM8KJoHwAcU8qFRdJrV4CqovyYiRUkqGbKxBkgHEZHpdEstKYQ9uTLkcsLtXi",
  "key25": "4vKCwQDXJgjyHJL3dzorqMMc2HLy9pSLMxLz8TdDwuJVgYFnvbJDoFVYuWjmTo4qssyCAjBzrWHbNqrrxLAwEjkX"
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
