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
    "3KKHZGB23QYdQA4Trh2mT6CaMtbzp9VzSvgJvxx6p2PNT5MEWZr5izugf5i5BRniHC5eM2mqxXZBqrmzM7gf4XjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53P1a4cMhPgwz5ZWCYkzfe6WK35WRMiQghWDhfbyzZhbxB4vP6VcRoTq4tuLAo4VLQG7qc9MxiijPaMmYCfYWmQy",
  "key1": "5HJfsziK2QZPrpqMG6rwEHDpEKc7bYRqAS4ag7cJQPEPNLCBL5DB2mFKPrGyXziCAjxoCajUbsMwpq57hi6quF5",
  "key2": "5vtfTwCyPe84zwSxeNjhFJahLznh4JNEtZ9sfVAtvYavSctnR58o2UiBRNRJYW3y5b1BkpfuEyUfpDoBmf8BpXp1",
  "key3": "3x2RB3bw4iq5dEXe1uz3zjudwbvVwse1xAGiqwsjLqQaPtJeG9ghHYAUhykT63Um826j9C6iWGyAMXyr4zXvsoNc",
  "key4": "45MeqQLBpiNb9sLGvngk5ZWqWPXcXpMzGLYDtAvBJtGqFtpeztHcWwg3SnKvihTC1uXEYxXpUk6ueypvvvLvA2MQ",
  "key5": "2GD9ADuCzJmm8RDox5FkdAwqFkXdSqEmjx5JXbaRh1W81Y22zPBK5RNHsPPPmT3y424Rd17C61jrighCNwW5PtCk",
  "key6": "44oeuvU3rbaSyH8srrjaQy96JRxwra8dRBzBtR7UQ2LxbNBDmHhpmKt7JSZ5Mk3pUzGzxUat8EKbECsC4md6AbcY",
  "key7": "27q7vnXr2ZZNw6NkohS7NPZHrJ6sWyPtnFcWt5zLjdtSWAt6GFCsUE67bXXbbA36hKsagwKoayNRo39nSZgYYySv",
  "key8": "3cGPDYDv9MEVf8ghissJT1TTowtPWN5pnC6uoBrxEFecKG9TwxvBdDvnueWKhied5XsGDhfzkP1SKzYqoDNWAZx4",
  "key9": "2gCrLWegYKPu3ERG9xWRbQDEQnsKxm1h4oA6mLozdPefJYPWxJUCQ4QBpiv9KuyjESRQurXsDSpiPDiRqShzM3T3",
  "key10": "4g9ihXRBSFAyaywtjKVcQ4NmaWR8YkEAmaT1rrnsaYa4rCSk8DDyV7uW57dUhPsPM7Drf4fjGBF3Jrx12HHQgsjk",
  "key11": "5iJ7ffY6bt3tLN7tm2uhhFbnKEFzwZn1kcYP1DmFgRP2NQa1GLwc28QRmYdVzvEDEYZJyvpz6zpKfHL7HigKBJEM",
  "key12": "5dDCQuNBipuW8LU7wWY3J22ppZze5R6W5VQCjVUW2osoEgaijUCcsE2hx4tnacCSHs9pnYNE79CxjczN2bcBJh3J",
  "key13": "3xLCFr4JgjSaf2Lo8JtsjgDTDTYRWKnx8iAHEkm3eG4mrctMB4pCxqWwCsV6VkRUTZJ2XQ6Gpb8sv82ttP3Mj8Me",
  "key14": "yR7asHGqWYh5vCruyNAJYKGZfZSTR7Gn4tiQA5LjUUH5zLTZY1ajv8bGiFM9kTufaxSZ1RGUqLX1xRg5Wv6sW4k",
  "key15": "3RFk7GsFgvT612GBYWcMURVS5JD4eVGRCZzeLZmfXfgAzj4BsWomKiJcwtaTYqLtQYdfjMWJxX3QJtGbFKRbreBH",
  "key16": "5V9MBGWNWEPEoEZezrrg35oCTrLGmprknZU9qxN3EDKatnZNmD57RYvvDswgRKeSwFYgUQZw2yBeGRwAkN5kDTGZ",
  "key17": "5wnZi32jtowxr8HgWpnBv3npr5Wy144HFTt5zcQKWezBhgWvyXB95yfXA7jSWM4RHbfgz1W8eoh974fgHxnR1Ztg",
  "key18": "49kBpHXFYwMJrheHnvzZqMMzGV62zKZPZdBK2AbRZ7zkeZ9aN9vHwMEnAjBiBKEqy5j91osEvk84L4dAfisj6NXR",
  "key19": "mWcp9siXmmHqysRCZXGbuC4R66X2MaGgrUMeeyjKMeezSQDhkBjNjNt9fZbyyCzVbopJZ7WjTn5en7PnhxzboAp",
  "key20": "59MnzS7m2EstgAQaow2CUJwp9qW8tBQLAUHZWr5G2FUogppcWbJ2wNP8d2iEMerDvLkm3pjYGPuR8RPWoN3WopEx",
  "key21": "2brj5K1884pKKpfxkXDTaPK8hwRqfWxWXbsWgEUnRAY1W1QDcVUsGa914Hiw9bzts8T6Tvue5zEra9FFo9iAJKYc",
  "key22": "5yKxUTDEKpxsDbvQzygA59CfBsKdcyMXtQUVu2oBKMEgigjcgeewTRLFXrB7KNKHM3ttJsv2G99qhbTxe5xX84dA",
  "key23": "2rBtMq3uwWJC42wULDKsHc6DEGXZpRdVdQtsb5cmrj9JkP9wRUD4k8c2CSuYfdJoCua4LzymdvJ2Ap3x9Qhd1WgR",
  "key24": "VVNopxBDHXhbkSuv6rVg42HM1jctSnkmNYZQXfYongn1jfqzURW6fA4Pr8tyTEYTUpDGL3VynKKHoJCYhuwnhRd",
  "key25": "2hSVikSmm6nPh43NcyUHHK66H5JvSQ9oUNucrbPaxuHXRW93wR4krs7TNGpcPr2T3zaZDYy7sLAXBTPW4Gzn4Kvg",
  "key26": "5egodKJcARrnEgGU8X8Q8Rr4YyMGxNaz8ugbay8CHXbHsBcS9pirDBUTFxGTGG6bqPwc1eNBwQ9QSQQK3YvNuKoo",
  "key27": "5HCmffavB4JEYDwF6u6udr1E3nd48Erco7jMJszqKHi35E3pjyHfRMfKgF1tNDhXDvFTawrXSYNRehiTmLtgrdK",
  "key28": "4nbdBnhh9JMF4YHvc5vBMUhE59eyqyBcd3kPPKBrLjCnTsApvCxFpHtTNdns2fJXA7o3z36sciwRhCNXq6H5i3Hw",
  "key29": "67Wa3e5DSFhZDgXfUquxmBiRnKAEFXYje1RAcUwTQumpRAxWQd2W1YLvUCMRtmuHXZZiVR9yCQYaqDBRbcPDuPqq",
  "key30": "5Jmky2jRpe663LGCmjVbNLBEZpUCRsvoJzNPn3FBrH25YqV6sJRuzassGvPYCi61k7WjUsRKCXjnBQHic4JPcGvT"
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
