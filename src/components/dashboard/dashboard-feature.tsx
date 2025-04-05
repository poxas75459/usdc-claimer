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
    "3N1KA12UjvMQPpMf4Vj7kQXPWLFb1kUEC96cuorfxtAAfwid2v74rssRZrAThysGB6biqHUpLcqnL1nXRZyJNynC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCGEekktSvwz7Rohb1dQktYzKNwtu4Rkeb8iM8FcKNuQLEMgTCvrkmHERgrNVyp166yh7t2qLDiw2D1AWhEtuX6",
  "key1": "379wpCJxMFTxxy41ezRzrm8sBbZiRumtcP7zsqN1RV5GcyRs7m514Go6qLzJXArW1GXiWS3DhpagkKgr6AAisQDc",
  "key2": "7vbhB4gfx8XbMdqRd732DoE1VHFRKgg1notDB8a63daHZC1dSzaktUkriPMkcQmTiZfCBHpqdPu5tt2KVJf8bLk",
  "key3": "4KeuL8EAvnghUokNvAFXBEF36HSrS4cfKG1HERFvSZ5C7WApufqTSH3HxjSSwLJog7nrqzKDYZgp7cuXAEQAxAuH",
  "key4": "2CnEwHWPGMxLbBtZefUDUwZAkqb4NFVK4pJRKWgBNehDn1xPKK4FKqGrnQjPqVyHjQ551E8c7SiMJ4s552Eem2Za",
  "key5": "5xjydgnRrDiWDPNhac6CEdPkwFg9msGWiYN3KMLXt93Jz6zMRU6T2xmz9FD51hFa4asbEJ7AjRfFBSpvEohBS4hu",
  "key6": "3st4bbbwHjjvm6wQE8fgoHK4x7pQdtZhv4NREuqb4bX3f9ccG5BDd5vvBcJeVXvP4HhwwsAwdCiifhxY2W7yxfqP",
  "key7": "4MgG3zoLQAzrXcxue3f4SAJq4wMjZ8osTmx4FhgibnV75mLu7CkM31FfYaXGqmnDH2y3ahvBhmaqCE66nwk9CZJf",
  "key8": "4MzQNcVKhP5kG5EZVcMjAebhq696T2hqjzMnuHDWHsogx9WJKaymZTjDapgKVYLZh2VqaWGLVkbKc9qryPpbDh3W",
  "key9": "3qmXEu3S8chE7mjBSrPRzxT2Q68uj8C9LaJCfoWWZRXCGyhMUPL96xz3bEaUdi8vHSfV7FiFBEoDwfvbCJYrVmqW",
  "key10": "5euBRPsUpvL7htw5c3MjFwXePn2xKSR6X5fbmTYeQ6khyiKLcVhX6RUmdgcx5Qu7FjXsLsnuuCxYGMFFqMs9fwTp",
  "key11": "4ESNjFybBo9L4rjXCuXhVokWiz8QPmABtkkQjgnXH3soGATd2SMVtCfiEdGjNvnfQnQgT7wKDMxGsVJkZ1K4BCMB",
  "key12": "4v7b24ZsnMBXwTW7G5gtNNzuYA6Vs6uFczvMrdL7geZwH5PFWqY9ESotaR9QDu7KD1RE3nXJ1XhsNQB9opCDP7mn",
  "key13": "6YLrqGpj161ZJ1NfbJioUmDoHTF3ak4UJADZe9iYPMoYUWa1dDZPYnLgzLzGTshmq7jLy8gJS6vXzntwhRattVv",
  "key14": "5FebLPLfeiajZKUGnRYU69vSZi5jQbUC5745gmMrScMUwgeoS1sH1HiuajQoPJbdJ57Wa1VVHbsEA6t7Nr22BMHZ",
  "key15": "3c9dc8ghDpEMYDkoiXwDG8UVaNBzQ1s9dsLmgLC1ikKpsoR4rb9n4zdVSSWtqtsr6zgX6PxVtQvFwZTP71GdrFhM",
  "key16": "4Y89qtwkQ6aaE5PGAgKZwJGCTkXk9y55LcUsKj7RvDPy5nMnwFfNzFUU9LY4gmeYFCVMvjyzgjYYaNAAQg7jm2Ut",
  "key17": "5fF2G9zhAEtSZf5RJXvxUx1zw1RLFUef5EBcfT46dwJQzgFXeCjEqnv3CjVnyvn4gGYAE1wUXVzAWvv6mFAm5ktP",
  "key18": "5DsfiRteKNGrj1fVZ4kMXDohv5bhYQpkDJgvT4WfaikX5Ba1Ut3WzF3wetrhT8UNQjwHc6naUxa9GXBNxJbTNTR8",
  "key19": "4q81BeicJCvZ8YGhyvMkyGX9Akzwd1Ko2w2CYMnnjsuzD57cTZ6z9RRqtA2b2rVWWDFKmAD1iLqo7jvA29aDN958",
  "key20": "4jAcBVoSkrF5Uxi78oQfAq7i9Nh52QHQ1BdB2juvUGjW9ZgBbv7carN1EnrHXunoNv7gYukQEVAPdfwDDKJ7bmno",
  "key21": "4HFfJM75PxERHKEYSmgbKedXjh1VXvBf8YMCYRDqgnWM8KLN7AtFRcM585L2sw8GfFZRNXetxLXgGqnye6z1noHB",
  "key22": "8uqGUr7nEbsex8EYVevQegNW7PVmMxc9TkQ6g7D74M3DXcfshy6iCY2NVSxpJ3FqwJsqA7LYHtNhiXpXvcZiRUJ",
  "key23": "M2UCP29MQ8XaTdwgimdSbxtEuT9YS4WmoAREbxXZR3kVfBCPhNhR6JpWYM36dX2EySvcHp4vbi5Waao61uFCfWz",
  "key24": "2hWDoaFxgXj5zYfubPf5ArFTe5Z46GYzraHZGEs3cFdTDDQTJwxXjLJxTzkzvUqmxJHPVVgyMuT9aVKuknsrhKZP",
  "key25": "5ueE4JZPSP29Ug74zc3JvkJDeHBYW5CzRHoxMqAHQXJdBPEN4Vy6MCwbYJFgLLqzXUGBnoxJCmrkDdtPdm2wFvCk"
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
