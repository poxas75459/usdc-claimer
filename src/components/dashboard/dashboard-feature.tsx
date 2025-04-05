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
    "3utugR38bJqK2t4XjiUjduJztqc6L5QEaocALxjuVkrVPEwrAd1dsEGcwpCPuFLJxGzjt5mNRBwb3eDSdR9KenKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C6ZdcJv4nBfQCALbZSSvHkDsUivms8UEUFMAJTEnZ7M47a4ERXz1kR9gqnHHaDNRDHrzJoLQtfqDxuJi8T6KNdj",
  "key1": "4jLwiQ2DnQ3viyfKjxWkkCVEVJuJjaxbGh7FH7fzUtCDwmbCqGFp1CwQ2uEmK4yYPp6hrpM2gB4JJvkgkjVdC6EZ",
  "key2": "52wFKTd1HpU2rhewKcxdS8nrjfusQUyNmUM8yWN5Gtwb8yWnHxgHnipBHhJyZsFMKshgQyd4w33dJ3k6opEvwzBa",
  "key3": "63Pa6GyutxTHk1iqo8Br81USmtB51rKxAz42TiZEWYp3ygeWALPpi1pJn4uPhXghJoqf2sGEF8yYKbSgiccvgJVb",
  "key4": "252BaMWF2Uv3mJraz8dDqkuGaWvGLYo1LM3fBfS1MTzpD3Au2FmjiVj3yT48XQUZk9RKDxsXUzBriDy9TDQ2jXts",
  "key5": "3rXUbxKxLksyDhtT7nXPawf2fj2SmL79k9Laz8FB94VjF94DyrWurYsVJnAgVDjB3hD8EwLQZcPFhBcfKZZWEBw7",
  "key6": "3KzFr4SXE6qFHV3vCPcwGznSF2vEQZz9gXzxKhgZ6wYtpa1CBW6pUdMULkKWwuFkyHL9roemEuowJhgSmQ3VppYs",
  "key7": "2jEAmh6TQ5UTDA36uzDbGPwxBW7kjLp4cbj6QeFbfZ5bALTWkBtiKwBMektmzeTtUced1xw7XeLU85KMivKRAXHt",
  "key8": "3hPgkLf9gXLuBZ3Q96srXD8N2mriUss2ZKYQtUvs4a8ixk5FUbpbioypUA5tJmNN6rBg3Lgc3Kkn48P7y8zi4L4z",
  "key9": "4X5WHBNZ6JCrNxNK6ZhFLG5eVtzNma9WqFucpBU5nHLNrmSFJq7SD1KteKpdegTpqHjwbUAG3SjPL8jtCibrSXnt",
  "key10": "ktRTDJ3VjJAwdBpswrvhZZ41SNMqwBZi84xrQubxMwzAJtdSJtQAU7k7YLZRZX3ZPtffsqTk1AKsPKx7V4gUEUh",
  "key11": "5u7KM6muctncaKakizeHMjzJgoT8CzTZQudiZM1d5uGBVCG1XomFGGMUYKc7NSC8KG7T4ohxse3rcryaRLyDnFS",
  "key12": "2jFBudZvGAaLE9HpmLUThtyXcnkpLVq752G4GHgusbixDrFJyEVQKQsuLUeuS1g2sV6MaYD5cZ1STxsBWxg2X8bQ",
  "key13": "4KTYFRr8CALux4TG7Ky1w1UJmme1WBADeL8qnc7nGjNFHmCSowzS3x5eH1U6Mm3qaXXWRf9Ct4k8FAXEscAd9K6R",
  "key14": "5ySVtYrctqqvNgF6thvmxHkkDBuBeGSzYDgEsjTLC9FQ6ucLALgCAkRCTHy2y616SnVTQnHqa693GFBA4M8Enh92",
  "key15": "5DMSPhayTPKMtQTrmb7JqmVjCFJZzRBLbtCDHsPAgoxCjA5UJBu6ZZbdRxeVghkXo7B9CYsYCJYJVNoHVe3NUCko",
  "key16": "XQdRTB1Hai9RZ3kpQ7NjEwiS5xo8A95uXK9cb2i1tHMwdV2idYVXPjB7DYHkbHiFrmZobs9Js94rMoV5AwG8d7R",
  "key17": "5QMyHGEup3vrP5mAMKTYu8NKEWDzNZrDwuhz4KxkJHZiQPmD6JqemQjii6jHNmyQd7rJdC4fDXJwB1MdrJrDF2r8",
  "key18": "Qts7KGaNjV7h1XWaR4T4WtMYiw4bzwv71LWT2zabZWC831HDhqtrZvkWF5L9Lq4mYiaN8oAZvqxj5Go44zPEbN4",
  "key19": "2nNjDLqMCdkVMkqXrggMGjekjHU79Tt6FLAykgEMENd79ce1uftSApnxSJRY4p1v9RfX2evbu76DsPQBGb7xmS9M",
  "key20": "3j9Q5rhdv3QrpJ6R3hDh1fUqmwKbAc6qYGH7jZThRsBJxY3NVL2evrwco5L79Gx3z1Pyi8CnZ1hdHnLx493up3Fv",
  "key21": "6737ZGwyGxWp9uTv4MrRqCCvFCExi2iFyQetdCH4mPgZ5Up13wmf1swfDFLsrEENKjF3xPNWVc7nJiGmakJtpd3s",
  "key22": "5fVTj2jJvw5mGFtDtRdJuxyDqAsqDLMnFohZKQDXmursKVG2MaYbS4qxme24P2yeDVgQTTTFg3zz8ytsasqGs7te",
  "key23": "N6xavcm3dL76Jgr16SmkGwMMpimKStrqc96bXQVaJ41SypnQA2yc2GLHS8YFFKK92Lp3zi11R8fh8PvhbsYUSPk",
  "key24": "5gLJtW9guiSgZ6ZvtR2drJ3k1bVy8dbdsLGrqhTBr4VaNhznv7vy8JgKKqUQn5JHKve6Y8nXE1AjREPRt4c83Y6Z",
  "key25": "45nznBihXPxShGVF7fXjfyi5u6oRwa8JWauoJ2RvS9BJ6fbZm6iPNST4L3EYN1sdVgh9YLc935YMDzDpF149mqYJ"
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
