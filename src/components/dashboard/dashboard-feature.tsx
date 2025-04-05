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
    "5Q4hXthB9VT2SuzV2bQZpreKLMG9Jy6xwBomom189vEzeBNwWzcZ9xFhdUVmANbGAwbudvfQEbpTJKpysSseBTMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JPzrxQ6mqJ77NM28mvphPpNWuZ7V8MTd6rvp8P5TeTPjjpbuUrHfKis2zEgNNrpyLRTSVEsEYh4PeQQ4myMyFTz",
  "key1": "3UQqgpn1DUB7eX7RR5sN6q4bYdGrGgqt5ZVnDjmahL8CrF4fdaUErx96DNNoKHWaPtw7yPSshgiLejawVRaj3inx",
  "key2": "3okh8Vn69nAe2ApEykCsqfRVv59vhywifNzaJ1wKNp4UFvSRMiXvhA9aT2w8VqF7zKYti6UoiaSrTNXmqouL4WRj",
  "key3": "2H6uHmQUFxjtgtary1RnTwPiAUPeFsrVRXn1didHF7Gq7DmoneXj8kLwAddVSpDXrr5Ua8XRSfTN24rCwcpojXVy",
  "key4": "5uwHt3h6PV6NunYPFHRWDgsFgzQmzhwP9aADjDGLqUtu8LByy6j9QKnLFQ8R8YcbES1vhAdszUdDxXnPYFiPonzu",
  "key5": "22kJ4fNyLYBYvT3gQSStJHKWL3MbZB5a7j8XdUvxcPPKjzVZeESup8C8i62XBSJg4Rk2ftD94Tmg1GgWMJ5xYFgS",
  "key6": "44RnJN1bKcMJkW2F3e1aGLd8wvf9JTdKF73vxwAvUoBmnQ7X8xL9Kxak3uqmxPbKpr3QAMRhUc7LYoKhnSJYA4b5",
  "key7": "2JnhiqzhtiNCatRX4YwKZQ9STBT7RLPC9dvY2uxwWWriV9x3D7RuGvLPmHd93iGCxE6GcoGu9wPTVEYNaivmbE5T",
  "key8": "5wdKfYY5Ld9BctoYkrd6vrcgzwuy921pJLdMAsYeeZ2ktitzcijmVpc2mknL9opnW4JwfSAV8y3tsEZaNhWa5Lvg",
  "key9": "4hJbdjnQ5Rg3kmxHGt1VfM85FXwTfVaFdyCQxxTQJSBzUb3xqYakAL4qdZaZ4JonD891dNTE9yudKXoKzCD51CUx",
  "key10": "4bxGEKSSttrMzTw7j83tdux2x98iXi1LkYEf3gNphbaA1MkqfNxZR1n3QL82v4TizrAYy45A7yWq5SyzVFgfMjEg",
  "key11": "5B3qosuh5ecSN7fH3tSk4egYbfYCWFy7X21vPgv9gKCKJ5XRpreXRmu3K6PPN7Rh6HqxKaJkF5woCaKemKz79MjF",
  "key12": "48ZFF78mxAuTaEcj6vo4cmenL8LcVhJF3QmQqLae1UNCmkkEtXw5ozK2EBw8GS7iAx36G6oeswK4aEKS6XkKYQ21",
  "key13": "caoCK6ByMzE1WxLG4LLscGp1R5r3g1AoEbWMxFgjCUJZvMwcXBF3T4FCgAvS1M6RBjYkJYSJZmq2BEqxXnmx6Kn",
  "key14": "46DzF6HdFXSr7sBUsxRwAWXtYu7DGSfeivDcqv5eUzVD3ZZYyQ2fz8dSy21VrhdvBtV7SmKZGYC78CP4n48r3YTp",
  "key15": "5Qpaw2oEJNrayNYLoM4TrsE13FbYBwscfoao79hfeKyJCdhTfUKjFDk2ZoeQishvagM7LuC9mUNGp8S4w8AdCmTc",
  "key16": "6hvXUVKL643u8HLTRGMm4Qj1dPA8ZFnxLRkncVcZZBpzYS7GTtyWWSCbb7zvM146Hig46AT1TKrgRbu6EEZsKDu",
  "key17": "33Gr38iqAuGK8yrWx9KuqPEiT9PeDJfbUJUU7e7Nc3oVVbm1RVK3eTKze59TNfMqmAWDtEBK8rZLSt6w36t1Yyn5",
  "key18": "5cJEC7deKf1FmA4H7166CNZyEAX4Z3PSE16ZAyYcu3NfQfvSzH2tRkcae76bgF5Zi7hcXnJbZdZSWYYZmZUcBZmN",
  "key19": "66DRxeNnnxtahwkiF4mZ41PuydMRNa1WsnXtmYLrG1nfCNKxALk4iGqrWY5Gbyj3nVQ1vSNjViPoTHFnMfCAuMcD",
  "key20": "2FHSc89kwU4Sx1WmuxJhXrwjfmXywBeXPxZ5QzutfH38V46oJLFa7xA3DKHaMyeX8dBTtgC17kKBLRenp3R5citd",
  "key21": "3H63VBiVEWM98fh4wNKNwrqNr1jDTMZaaEH8RsHjSab5BQ9x1fBPLavtLEKwtFr9v3yCrTGwYw3z9qNoUh9VTTAC",
  "key22": "5kWAGYTqfc3z7t5MoHk7wj2PHVR4KrcQbtM5vtPFPFxEReF5rjjrbLF7GJeS7Qk1vFdoWGan16F8Dnb6dBJasiuZ",
  "key23": "3JeFH8Fatddasxw6bCLKHBDNwc2t8kQzqrQCFyCp7mSEuUUbms1D2wknrGESZ9eMCUkrrHsCXuAbAbzK1Y16qxC",
  "key24": "4kME7qn5gRNsFYNRVVrqjiWtbnWUF7i6kH1WmpY5e5PvRyVzQdsoxLTrFPUuXuAe4GcG3BcZsgpUs76WCQMpBLMc",
  "key25": "2y2rpGZqZV4njvNYnFCHqo4uN7aABihGAJ8QN7kdvHYAk9k8V4xc6Kt2SQr8j36LJMyckZmEtniBvxGYnaApiwGj"
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
