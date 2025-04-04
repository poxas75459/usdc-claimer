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
    "hDzW4hdd2kcaZ3q7U3ex2czkogrsfKAibsuAwidggtyQEZbWnnjQMbQkQbVT89cKBfVUREKFJLvva5qGPXyAgcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3F7ADeDfSjqhdXThQ8KDjPv816cjg8ohGHnSZ24YmGyS4kL3HSyh8DCuB6gJr7Uy9TCrxrbFAffvaTXBLTWF45",
  "key1": "25Km5YKkxs95U1epmSE9Tcurngk91VJqCMZ8kcwZ5bNPRsZLXNDa2a54sJ2c35PjCHwNVSB3tpc1wJ4F7sjfqcSj",
  "key2": "gesuNUqX6bHFzjVzsX9bjoHEg5ugJgpAimSiojg1QumjyqkRvNU3fPYDhLn8XoHkPovjVWYHABgL3f3twWdnXdZ",
  "key3": "dSi6YSftnGR1kBBwtdkMUQFCSJ5AB8jkAMbbr8F9dGR4vkf4W9JWdQ5MKZL4ZChzawkYWgpD8WbZenqK3rVnYGy",
  "key4": "5JAW95DcEmfesfXrv81qRrPS1vSzHJByViQ6AzB2E28nrsfSvgQGdh9Rv7zeBtEDLUMyc18Y5qKVPfRBB1RzAVZv",
  "key5": "2s89caHdJshjiAjc4EaLWSD43ydKiKeM4pHSya99tBJNMSnRWvDS7AkB1RrcF2J5frQcEd28NUCc9jVXNsYGmnjx",
  "key6": "5XP9Scnqaf8SZtVEupykV119VYJ4mMu6yGYtY8au5dX3gD3XffZkkXM9M81kJEVGwyAVuZfZBDPaGdchpUCb4Q3R",
  "key7": "34aTCHMnXKpBZfyPPrQUsdKhss4WX9S38fXiG1BNB2R7JAJdaVv5pMbJX12uErccALiTxQcfx2thxAf7hJjUqmCc",
  "key8": "2m2SK88omSZqS4s5i14pTQEw3UGYdVTxhzyhuzv1ztgBiX4Ph6GunL2uNozmQG4iZqrAknsHDEeNUUiqYmamRpft",
  "key9": "5MnbKffnEymLRRd7vdRXu6XmHvCSiF3UERH4pPenc5dAGbXverxcWmM923a3uaLLiBZvCzSm7nNFTJXcvG3SSk9o",
  "key10": "4yRrL7QAv4hTqAhHFv8q73ATv3U8RK8aot1emumXsmV5Jsj79Ci3xUocuXKUMvbZM7rLP19w6oq1d9DXZBxQUhUe",
  "key11": "5y92UMcSQYkQgPVnKCqSUwthPoj5v5TPHA43r3tUCZJnkdxzefjCBheyEmE7WNKfD1xRx7aq2eCEpyX3nozcPCXy",
  "key12": "G6BVmvNEkqymWmRYCsZzZBJmDNkJDLtHxALva17imx6bRQCr5RX9FGgDJX6f7ZDfJo6DxcokvAHMuEGujz4bfJ8",
  "key13": "63NZ4LQj15mDUmp7AsKNFQ5qkBQSKdtfB73DqN1dgwVL4G986RbYEaMtgQQayALZGf4HuYhGeJjdFykPyirWgUMe",
  "key14": "671Z9uiZGDPbHyvzcjmCmvmqJ4PLqyQbGDdFeyhhNjkp9RDGTQTRdvpPN2JSyrA25dTLhbrxS7ESPWgcgzzbk2pA",
  "key15": "4P9KUYC3VcmcpYTHry7XoYeStpyGkVnfHypkpArKH3AWuBBSAukSc4KH6YWSyrgy4Um1iJKVjKcVfWw1DY1xMoR3",
  "key16": "2ectsDYvzaoNeUoV1JSzoT1BZdcjV7xUvDDbjFExV8739yE1Rc6UhGEfhj1JMNuZVV3QgWRtgVsCjZjyA7VUgp4Q",
  "key17": "yBFx8XziTrCiJRvJ3jDYxagVtwz25hpfUh5745LpjtXGFu5ckZKofQu2nhuBUN4Jt4SZJ7TJuSgYoe7k3vkPmGY",
  "key18": "vW6AZF4ohH3QBJsxWqNbf5jhAHChC7ug9txGXns729ZJXmqzcp82ysiMm7PM6jzBkvxN9sfUJTN7kPVs4MSQMjy",
  "key19": "4eHcVShq2iMxesscDqeqbPAb7bk16yGJn6HN6AqhTqCLfk1g1rPCtM8gwn3n9zNAZTWFuUjae2X28YeCVQQAoK8u",
  "key20": "2Lom2kNkXa3YFgp9Y5hYPDJoUN2BzqRzToKqxtE15D2iG7PSzZDAV43Z58MTBEoRxqydCZbZ38j8kQ9tbaQgYTf1",
  "key21": "awrMjgUB1JWhRMtF3bAVZ9cRBHjkjUJvEy3YGkNNr3bTcB8KwLqKEHzVE7zJ7pdP2jLncdVdXek7hT9dSQHpWCW",
  "key22": "22mbLKukzgqD9yufajdTbonPM4A2bL5LctBhkzwYm6hPH537zZkHBgZ3ymhE4tjcoJdMd3bTuTuFqKanRay7Ufdp",
  "key23": "4KKLC8Mw6MckpFEFaem16YZvUiGXQ3HEZUQ7Tk3hXui43knQSQ8RbWKmuprWn3BH8hoTTofLQcP844WcGt3hpEYY",
  "key24": "2beatN8HPkp8BHSMZ3ZktCQY5Tsp9UAqS8BeyjqP68Y4yZg4ZjUCyUEDAJS9u8VKKTmw9aKvQ9AP8Lr2n4sHXxvC",
  "key25": "64ozR3qzN91vehRfg8MqC9WCWJunNfcp5d5Ffdoyu8eZbUAUfCqap2ae4YWhw8AYp4ipY75F5GyXuwVvsfbzUUBJ",
  "key26": "2dLrgrqrD8BoLmQEqVGJPjNMF9GX9ePFC2ReJ5dh4wvrduaDdXQHNQmN5BH3mtsuRsgmLUCcC3uM6FUr3jBJaYdm",
  "key27": "2fA6EDrdv3V6hXWVbhJzj48ztQTy69boV83gofcWt2UPsa9gJZ9zTXCUp2tjktqYro6xkYM8ZEF3eNVXuRTFNAmg",
  "key28": "bLiCzEqBqvigUUPququGE8M1RsF5adPJvJYpYNiciMs7MbeQswdL9SW6T2fsLp87qFuwgZ6SSvwqJj4bb1jHznF",
  "key29": "2LjChnM6PEmpBN47Z6XXa2V4hb45eiAdLNPATAxNaxvXQ8wHo9oQ5fuKxjgNYLJvvNhM5wwnzAc7brDdZ1BD6ZwR",
  "key30": "4vvg6cTaCDZa3y66guHwpBkuSnwHHjAdHJRXLA4bYHBJvRqfZFPvPwVZJ86tMUqLFsNWsWetUx6zG1fMf1pcV6R2"
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
