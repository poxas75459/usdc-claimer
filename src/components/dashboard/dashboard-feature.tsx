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
    "545sPZNBa8stoKVRJzhwmwFepoey8dZB9f6ubsixhdjg5HThdntJJh4eRG5ShHyYJuModP9rYGo2GfdGCt2Wrabo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5odBu789FHNEHBCvJyQhRy56vsLQWcCeH1gvCkJfZpqqTgEQE7RGY7FFsCCM7w9ExeZ3Wp3uXiQh3DUJAe43dXWz",
  "key1": "2goCeBoHhSqpQ6AYyvYCNAKRiBZrtijxHEdnd8LXcHWqQKNpLGsR8cDTgEK4G8V2CDoqPvxomT7mihUP9Vzb8nHX",
  "key2": "4jfehezNk4DZ22SHSFPG84kNvHrke7QBrdMexctt7ZfkxMzsFXNeNzZc3tbpqepbPxBPQcos29iGvtej8GHFijvf",
  "key3": "rGATM4tkxR3r8JP3VVyTFoS4MnZ4fxwFMerJ7xPBqfTNJUAvhpprWTKZFNmdEYM34SsZdqaBYo9dsNv3KNDtMPz",
  "key4": "22VXYMJrPqoJ4yjP4g7hy2ARXFxHmp4hS9ZuRkMDMnLh4GYci81otjhjGLVFV28ZudTiXxq3cFFw9tjVdBWi8uH2",
  "key5": "4PfFabSN69CRin8FsZSeni1R84JTYhgyrLcRSTb9yTJVaFW61n6E9WpwsMtkg9FcDg8CPZsqg5DQ87NvrtHs194t",
  "key6": "5n4KmQR7ZHTXc2k5qS57bvrJ9XHiAycDCchMJeaMhKZtSN9h48amQevPcGw9SmEnapZqo13g8UkMN32ZYHYkQ4Ty",
  "key7": "2yo2MejN7iW9Je9Q5tHHbTvJfutUeC47fvmT5p6TqduVcYhteJZ4xwzMh8h4y9qdWmoWajkC6oru6fARaBBzC65o",
  "key8": "2C2uCvFMU6s2q5bQypVQpgHEzmzedkvdiAsNQVPvttQMZR3dqzeUYe4ib8H8oW3J4FxQghjBY34rEPPWX6zBuJHV",
  "key9": "5SBTmavQmwwsRdAC97uB1jC4UjH3Rh2ogqGE7ziyUqX4YopssebK4wSD2TyRALuSfPv7gsFr3vhJMqkdhQHQuMYT",
  "key10": "4YY3KbvGy5g3KweFV4tk3Cor4crNmd5ZuUPC8CSpqZ1nRoYVjdryVNTXh2D99TtU23kFkjytt8gMT1LQMwNHMrb3",
  "key11": "3ZVoL5fpDhspBRXc3HLvEsgQkxWx18Dc5WHrWKL685TTTCc7ZJCHR1JdVzX6xGykTRxYUqeR6YKFU6aBXzr3yDnj",
  "key12": "2uvVorR7BWMGrJL8CCR2PeXYtgSimoyTLdaSQpGQFfZD9ZTJPbsPCq11ZfDQ475xJV6LV81n2dAAUuTcJju9GSUa",
  "key13": "4pJt1iTtXAS5ZFbUDgzkSFRS15iNSKiyujMqDqcecSTEFWN2qTDCZBhxmFx2JvMHKWGrXsy2paZJ8BJk4tfo5mwJ",
  "key14": "5YqA74sr1anjS6FVbtLtPJP4K73A9evK3iFaRJ7b1QA9BeSQy7uhEYVQ21MBaWefxjiy1mg2iuQwCUh5YcAzY5qV",
  "key15": "5nDaBNLydbyeGpgjubtCCPHYkuqSpFqWLueGz2uBzPA7GUbrT9UDQeaaMPSYHQhmaCSZzwJTKPM7ZpbnnxcYrKGj",
  "key16": "3NCXzMbJ5TtVUmrhiLy64qqCDt9GVVeCCQdGRDxVdYGRzgjj3xFvTdXhv5CMwwb73zW5yLLaXef1DdVN1mz6Xzqo",
  "key17": "Y72kyGCzdeJKczuJoTRmWT7dRSMw1biWBqjwK3FUjyfoj7vUx3T8FsVEXP234PtJtcYHvxoNAJynSzUdjokqbxJ",
  "key18": "4jagyQFUg1qGrJ8ymFR9fKhda9db7fxBVKU9mGYZ6hXrD9Wamgd4Jp9AYXy9JsjAhPC8Jhk38y1frsxDxfJSrcpw",
  "key19": "2wsWKTYxEefDJkJBNeoqEymQTmXqRRmFQebZbmdrF9nuDdUzvEHWLu72MFFMiCcCQiY2bSkkP8Y4wVxuYsNbDnms",
  "key20": "4ksXtkBNkXvn63PzZZkGoJGceJobsvi3TjhXEhP7syNzfPyoXEzwvGNgh7J7uVKM9y9ZxA2EtAMpD6cT8ffwzFwW",
  "key21": "4TLrWMs3CrL9HZUwE3XJLzfjBQ6r5XWX4BTFeMBqtPGmPZJee9efEabY73rk1BUqq47ktuBTseNNWYhGbZE8Hpzf",
  "key22": "51ZpmHk8ZQV9Gm2vucmwsoZUGHCZazMCfLhGuw33Zfhn5Hm6s4ofjhST5PudqBCct8tNiK7cWzC3cg1uVwqnXP7G",
  "key23": "5FVuJDm6VeMqu9dWnzF9YecpfCvPWzVg5ymqkLet5sJBNDo8XCUH3Xop2VF47fxF1yz7NdJSeYPSZRBg9M7hGWnk",
  "key24": "5rVh3hGspUfPFGZ93pgXcheyQhDzxmL5eNsFSLX6dRmufQBcA4hUPH3BZufxnfRSyX6wJ9uv2MT8voVJ8PN9hWsB"
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
