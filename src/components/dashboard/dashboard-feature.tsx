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
    "5uzcGFz14WzuBovP8a29P3ShJDk2NmVJEHpSTyK8G8fZUmHDLmiTHRBRLhkGCLerqyhZ4Z7Xhy2WtbS8tQnNAUUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwWtUhXUD871qrRmpRAo5Zz4PLZJTmZPmBKvnVDkBZE36UY7ins5qMeWh2zdonyPk4Zh1nudvD38RM1C5LgsZWh",
  "key1": "5CdWejdTLgnDTj3Nfk6DKJfSmWbyxCYwWCXH8dhaMQBXS65jyuNZoSRRAWLwT51DtJ8uvesbegQ7hVRY1iX4RZbu",
  "key2": "3yW5UhjkxKAanNLRFjGWM5GbFygjQWh5PaJM5tKERJnYr8DUWnj2G3V6YnVoxFpXdKh7oSfGK8KMnegjMwsMnmdn",
  "key3": "2rNnSQPWZVAUMFKrzbPKPMScU7ndiNkmN4jcdJXjmL2oacnJWk4pgrJVrbEiXCi9SpjU32GUR8C8cuX3ExKgikMB",
  "key4": "4BPdDxmWYibt6FC8UgjeDnoL9MUonCNrfMCLDmZnuy44rkduavZwqhsahiGSEi6TR3exNzKqAWmSLzdSEYAUr1Bf",
  "key5": "3aFvHrg79ZUEBVoPNaC8ABBZp4FzV2ivm4qHm6tYEPdwdpZi7TxR6idMJYZbv6q2mMPt4JkXGofitjp8uKhb1SQv",
  "key6": "4w9pNPpPuzb1TYw5vghve5QpaNU4a4tD7T4MMQvSMdb6AiztH6uUGitL7tuWoVYCnwWcoLtWMiiqDAPkk3hpqkfz",
  "key7": "67p7puP9Kt5N27Zu2auTRSDxUMMjw3RsXxDaezPefbwq8hU48KRykgw5WsxHhtHHqs3Zcrbo36qgNUCmuDUpQMWn",
  "key8": "3uKxhA9Q3d21FxuJyNGt5kaAdENZiUfKsi5dWsv4LanzjKqFjVrUGjxPutNRvrSeo6jZ261apQQzwdtyMGDWJPzd",
  "key9": "455X6sZizxjzuCK3irMhMiBjsU36z8k84BiWjFB8R3w6dYyE8hHx8JuBibA4guG5BskXmRCUsgXGjfVWU8GUnHr8",
  "key10": "53HwuXXvny6gr59S2384SMtPkd2TuLF4zYGNG8a8aUX18tBJ5CUgABQHnfbH8JyoTaCADmGoA5PF8VpJ5ZmsUuXt",
  "key11": "5pAP1pRdVgKVr3VgysGEZhgoS9fYRMcwuURHywXHJexdDh1aEfAcJprMPuDpLeWQxpHke7s9DJQQTcwqcQUpZwcf",
  "key12": "5qUxLcQTLe2D72jAm7gVLzQq5bTVkgmY5h897tSSdkjvir8wPwBUS3MqYhUbTRq9NSwcXuCCnC1UKfexrsjRt4Mu",
  "key13": "21oAGnLXLKz4suKkq8wodBscPY8geXyhEKKCPtsGk7Sk7F1AaG7P2RKMbboHD33AJTBHjiLcRZwHAaxRWgQaM1mj",
  "key14": "4XnsQF8kR3yaYVn14ym5Z1uzuc2LX3BXccYTnB6Go7qkP5j4cB7ZHuc9XFGves1xPVctPix6MnikbatfQebC54UQ",
  "key15": "298T6yCMsLHv1MM1qaHpp4Vb4uo4FNq6dWLjpdUTqtScdiFHcgGAs6RtWiFDWjQFQyqRq64xw3tkCDPjJhwTSZV1",
  "key16": "2LJ3tLfLTESmwVoetaDRR3r3UkgEiQ87JwmKYw3erZPXgLYDGyN4hdBBTTRMeSp6qH5A4QmakffYvH36nDZ926gE",
  "key17": "2pWYF7FdzBUE35NUrZGQLg83KpCvnUQbhmqJtUuZisxca5YSb56P8ikvZBiTG8S7YqBW8GaSTbgZiQEMuc2Hgwjt",
  "key18": "25NBNGPzknKMP6uTjVAQ3Cfwag1dRJr8o5pmQXWamjnBvRBgzCwaDf3eDvnFYwZk5g7TDbdak75b68KZMAd7JXPS",
  "key19": "27cDnwA2AawruWJYV6mSDUpAVpu6LhwNmunQkiQTE77QGo5CeLnp1oWadWZ4AdDZnnumkuP3xRS2uHWEbYrhrcWg",
  "key20": "4BN5FbE4zZ51Q7xDHzrdHRNqER25mBjvQZ3fuP4QGWhdpPLWfXPF2gb4XqHwHLTLEySSnt4g3uDR7R9AqHYioovy",
  "key21": "5Qbv7gzMUCogxJJVpCssjg1Ci34YDEzqMLECRE83jhk8nqgaxLh4CZz2HTgKwRMwLMrL9syteEXnbi9KMX3nTGrc",
  "key22": "4QspE5WG9VrVjKew3rrPDZK6MSxURyKFzupuqLwdxz3mF5edtD1FjZmT5gewE5iT8Xu1L7gjoghj8b3kgL314JA8",
  "key23": "5dhzM6RxqGKKXpSnRRQAnc3T6hdYVaxXRjq2stNE2CB5q8qy6UdfgCn3QkPz2sT6JgRtspnryKqgBAX1dRWyzWjn",
  "key24": "4FgnyyZq5KFkizVmFDfNBfLAVFkoBiEvdxUFEt8Wq6BDoeruNJ7F63RCzYkmye8yU6cNqJYxeHjdkwFHqnE5MiBL",
  "key25": "eeyky9dKTiBCkj7P9p6DGvKbcNt8UEB9xsPFhxeTT2a3tLbup9eg1TLMjcQ6jVW7i39R7cJcaJR6Bpb4tTm7wGj",
  "key26": "4M8fnrHgFpnHEGLr1RYxiJ54BYavwBiq1vmxWn2JfhqQPhUz4RD84jva26du99ZX89vdwuZzsozLV4n3hihxbVWw"
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
