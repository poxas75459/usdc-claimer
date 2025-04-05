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
    "5dKuXseHVLYd5Lo1LRTFY2f4Za7nnR5D8v1q6mh7ejxL1dwBVoThSdxxfF3owT285Gq1WPpqhWREMFz831rXmoAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SRzscMTLAES3VPM3Bz7vWCAmw7o8cNf4STKXVXzmDn5qTY3JG32MqBYf1XhZFJcTKL67S6TZsz5RMKJseStFHgX",
  "key1": "5soX3a2AY4Hv7Q68hDTg1vCunZH7wCLAERLGo6bNGZ15Vk9ELxNQc6E6dxkk755XgUnMoX8LQG3tnJ7dmkKnyixA",
  "key2": "5TJNA93gGGxn7u25LkxXTnNkdRf81PyYYJPf3m8XqLPwcNUdfQ8Dno6Vyzre9jD46FG5HG1tZXsTsMQteu5XQPpP",
  "key3": "2pZ7CrjGxwoyXWzzKgQa2xoB2YEVJoGjPTM3HK6Zt2x9D14BHZP6JSgXXWvMBbF5jkzGzQ2D9FBD8pdkZxTnfqm1",
  "key4": "5qHjRapAn3tTpA8kbgaKSE9rr2aUmmTkv9VyYeTnygxguToygL8EKYYejRJ5r1PQ6tnRRnrTw5Bnw1cN7dnZckq5",
  "key5": "5FvbS9it1zeH3xVuqU4LhV5fmToxsDv6mnhaCJsosJDzgJPhKsHug5NJm5nvFzonuUaiQAXSeNtwnXKw8ssVhs5s",
  "key6": "2X3e71TqEV9yDd9rdfEhSCJLq4aw9regqDa7zYYTcrs8xdkvhj4rfsGyPerXz42iPzpSaoSAvKbCGviSjUqXqAZ6",
  "key7": "2mYAcmnmpZ3rsr8BKD1vdVCtNTYZg3iTTrJVSCTeMLm5u8qy3J9y4TZJLZ8rXsZyiAqJDQe5zbBqk4FbYh9rkE4p",
  "key8": "4ePquW7FBT8CL5p41tWNcTVywHhsrWPenbCobfUh6XhU66VsCUCGwDYmbCbRJ5L1M7Zwdh6PYae5zKkXESNf1vsy",
  "key9": "3GFiRks5Zbuys5gMSsvNY8Z75SBSjEgt5CMfvnqmd4xtAiQs5D9mLmAxnw23J88khPtkh477vqtteRfq3XbBnEyQ",
  "key10": "4KGgQJewzeSGAhc2aHMTWpcm2vqua93LiS8RF1Vh8x5F4JjSR7PBEGxTkMj2caAPWZyb1kjJnfeZtCtWX6ECvMe",
  "key11": "28hr8h7MBwWiq5reLS15yaTWJNtDfhxHz2ReLu9bJPkdK1edNhxzD2faewQETmSc4nwWpB2BAhfvtBJPNZFjAiTG",
  "key12": "wrZaHnTMAazYzgAdha91Lbdam41i5t5G1akJV2owyZhGFWeYiR54tAdPFQbeBPchuPe3ZYxgbWNVGwL4Bz4HAAs",
  "key13": "4pFtShRc3kWPewXxwiF83dQnh6qgQmyyUwXBdCt1HcTtKfP5XqR65YxRdfsiwBaayhRnFN2ZHVrPdWbArUW5fn19",
  "key14": "2FgFjUmMKpYDDSfL6wCxyCMmkKQ5PikXJQR5K54tU6wCUPBqLsriu4at3uJSGytRYR235JdzmfH5B71z2k4sr1jn",
  "key15": "3EtQtkGWNi5iV9XtrRtDW8m1wSjrQ5vDnTiBnPYg4WbfoymrE8nKUFxVRR66zxki1hRq9BGrkNVyHBKbtutG3F4a",
  "key16": "2Qp1uwaAKMnK6hTbLuTdSfTM3j2qP7NogM9h6uzquEGoyVhcMcfZCuYqemBGQ84JS2c4Wa8W9ojG2Kgz1NbQhwE1",
  "key17": "53bfraWkP8XbssQ4z7prmD8osEycmcgjgoQT5HMaifBumpRGwTPcZKum8BMvrTqc37FduRRCD1onwpHvqajEPU5E",
  "key18": "24VrzKqsRPCKGhgr27WYBHbBTjXCMLJSG8eMfmBhVkCk1sxKQHFyTK4GCsfjFTdZ5iCngZ7MV2jTcMhGx2qkWpV4",
  "key19": "3q4SNbUmybE4EHepPp7HuNGHS6sbiDWksb6NytFnenfCKiNcPDVkJxjLgDA2snQN7Fojp4puF8n6pT8gLGgszb8s",
  "key20": "4GN5cyqv3tvEzZe871V993WagfnjGX5fSfKbiPGUwU1eaW9zd9cSjnofKJdTdY2bvBmkcNsycbVenMMiwFNXB1qp",
  "key21": "3T7RA2f1jhYudXMsHjVQEtmKMvTeJ1WvCCSuxucAYDvCaaou6JMvy8i8NzdbrTJBx5HM1LJVT8VvFJjzywYthMR5",
  "key22": "4LgsVtXjnGdgjQWFQfqhU9nMYqdBXWA7VP37AjM68Z4WJFDCAi3iS3Q9wZHmbn5Yg6Dv2W1rFUkpMEV31ZKU9LqH",
  "key23": "285Fpo3bAocGNuR3JJTotfoJHxffDxLU8EhhC5ETGZ72JDdKQdKuVbWKBFbuZzx66kcVzpF4jCYjw7M7mrxHxnq7",
  "key24": "KeYActo5MoTWbG2YsQUVin49tsS3cXWM1UB53nYqv3gUpRJJ3MWEGLjt3uxgTPaBUjk4HVhavKVf9MkSmfvpXTZ"
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
