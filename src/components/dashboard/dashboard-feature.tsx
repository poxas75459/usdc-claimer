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
    "2JPyaDNfVgSWeWzFfjPWC63kZUX7LxHB6LitWeVaEsa3kjCLGXyBtCjoBrTU5Hmy1aukW4ETLCfiDSdLE3jRtCpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLpvNW4kHqHgeYGp8hjfg1knpJhr18Z16ha1592nVsfSS2khrkszHUagdfyGNsNDsLAaZcJ3FDmhkfGEYhGqqQr",
  "key1": "5GZPWddn8TPWUGbUWmXSzVu5Zg1fpb1WnfrjBWPS5qWkPU9mAKsa43DcViaEfdmgaBKjiALB66NFzNFx86HE3PDD",
  "key2": "23wrDpvLMwP8KgKjb4HCnXuhkD9N9WaEFguaWxoeaoHTnKQxZ8xppEhZwHSdP1wmbFe3LfsfPiQWY6SLxZJySL8u",
  "key3": "5etJ7P9dxqWcapJbkJcMdd7MwKmNRyVJWrmrBBdt3U1Ax3SwWzzj2JAdQozG4YHrhnnKB65ACXQnvuV8MUVJzve2",
  "key4": "22L2284FgrNtNScD1xGwzkqiYXHGU7wrSRWBqDX9Yhq4DGsDcyf4kBjzCAwdDfRAn2EXZ2kg7JkZFtP8Qeuy2mEb",
  "key5": "5SLze3PVUvPbJN1jrXLcQweqjWjovFYZVskiBzBhB7azApGgwjF5PzXE7YMx3npcGxJR6mm8PDbGjKkXQiqkDB1D",
  "key6": "EmBAjWnnMg7rzDjqDukKVb6Sfc9bY9jqU4ex6yWD5SPxhXqB8YbG9Hxwt6zdPiR4AcEv9qDcjHgBzrgYBVt1YBY",
  "key7": "4PPK3hR65Uk5QKNFgKJCkVguCqQsZct6DL2qseqNBeN6HcRUFAUai2YiVWaDEkKFBeX3Z1WTRBjJhHvQ3nS6XNpU",
  "key8": "4zbURSja7ch5fhKxTCGmmmehuZ9m2u5L8BYqvBc7KN2ifzJHi4UFVQR83R1Y2spWJ2ur2cAgQhPoc8wrPA2i3u7a",
  "key9": "5N6sPQSde4HXuojcrekQNH1FCoXNpTJfoa9Zpqbzoewyeh3YSsKajNmT4GZEbgRwKjf3aE15neMmdajehCm8teri",
  "key10": "2zCVQHDn8ayvp9pFZL8hjGowqHLwndkKaBtreRy54QoYi9mCXrBocYKanqGQJuXyF2osKTkaMxqjMCkzKHeoebz2",
  "key11": "3La28UjbXkiKZYwvvBPU8o931c1kvFmRhHnAPWXn1Z6qtFAqNsZ9umvzE3EEjLSSBzDXMsfSTZGKoYGoEzrNTmbj",
  "key12": "3DFNcoTnMMJi3iKHKWroVKhoajRxad8Yq3ejDCJNu5SqbkV8hZKK6eoTA8bZQDv7wWK2h23VPskLKbh3LY9Pru1U",
  "key13": "5NyPD3gFVUetPr1akRZbzc3X8azVhMXZ3wBNkor59SBfK3GC5p53JY6oUSrLap9hySKrw9pbz1yLn1a6xPdzbkQc",
  "key14": "ZHTcJfaZdmmGneYCQLjkZ62habfzNEmchc5u8tquCjUkFv1T9c7Cnx8FnhVcJisRBH8YUYxHkprP9eesJEriNam",
  "key15": "5rH89mr5z2HFJ8rzWXyRky4WZfH8yFbtEsBAkCqgco8LBDTcyE3UeMpSxoqSHfsnMFAvrm9TM5Br8Hz9jJRNEuY2",
  "key16": "2R6y9TSjPjB8XRf9ezX5uX8xvkTkWhkiXGXiyYXTME6qPVzx8K7u9ryNTxG3Ja5fXvWP3jRL2dW8irrDPmwECzZm",
  "key17": "3oD9Brur6wiE7bBWG7eaHqTzsdLV5fySPLzsuBtG32hhNt9mYrmEqtY2bNC4CU4j7sS5X2AcPt9EEQS9jpa2gXqJ",
  "key18": "3NwHcWBWFvPeZYs3Pd3VkKayfbKtqA9FF7VPbozz2r9cdQso443B2TMCwakTjVoNR1hgWTFuLE6ddrVCkvZhhuPv",
  "key19": "iPZbU9fBXJxBbmrzJVMSok7VmzZghE8sy3iPdJnkEdihw5pv4kS3cYRpFHxoSZmXiqydVQrT1Er2wJSXNEruqU6",
  "key20": "3qRTqumfPfkMKTKfpTpNG8rTJiCe2pRanNv3PsWtYoMmAsTFkLdQLf5VQhG8gd7W2SsRSHADD1UMFan7Baw9SAhj",
  "key21": "3RLvWRy7fJwjos1hCctaCkqGWBC4BVXoXxAJ47sccYiG35gdwWVZ9E4quVQuCH537dpFsjnKayhrWi3DSn5EJcV6",
  "key22": "3YJyWmELe4CPZPhEjNSiMHPj8LVttDuEztyo6BfN6DhoFeAHbZFrqCRgdcJuiECsmKkKb3Zmi8At1iwW7P7AjZjY",
  "key23": "4ZDjyq1i9caqkGeEeG7UvocVRMx7UT86KoDnNHwihS73X9pn4qfwXDT7TH4xBQkV5z3uiq9VpU4pJFZS8JpUFb6K",
  "key24": "52ZpGBaLhaFCam28UnJLPfx3D8bWY4sRsGVsntcqbNuB7FLCcz4RWrHtBcgSTiNxcVjMoLSP4TgPUNkqwZacCReY",
  "key25": "DG9ZBsQLYFCH4HmCjDf5wWUwvUSBV1CLMDRRMKXm6u1FGKbKHBA6JZMSFN1Nx25WgUcEKmekf2CWdKC6GTabLoK",
  "key26": "LP9T8XoDzMJuejRfsbE12ZdaGyBuCmn63qZ17ikv9rxBsTkYfKnRzMqK2GvFjZyFmRjjjuVFUAFr4Xbz2LDqnEA"
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
