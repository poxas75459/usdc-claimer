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
    "WmL2nDBm5r5nH2JETkFoeidiTURbyANvB7dHitxw5BCQirFh8Vrffpi4QpUvoJMZrBpJcrySs9RmzASyEK1GUDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJs49EHuGkyPhkLJ8AoaKRAMUNgK1CgSH4XiN9P74KL6A1bCREDE8rEJjtYRkiWqM1k9srUEfLfcjCmjvTfeuv6",
  "key1": "5xgfWWrnCKJDx9qo19WDLQzrp8WNh2kGwDVxuVTvvusPGf8QZ7WBDayDKLaHWUGLQFsutEb9TmQ3yQWgi7RgYrDb",
  "key2": "5aGXhKGyuZELvadGTuVXZffzF8a82gpwAe1bKY6ReWjHkL8yTuQd8zVbnS8wkgvQA1zywmA1faAZJpfPULNwyWkd",
  "key3": "4uJarEK3cueC79eibTf5ccuBZ146ECnX66bFpHMmBPuUizmRG1aXE3z1RBqzXoPrTW7ZqDE8JLf6wiwQ5RhxCjzi",
  "key4": "3N3hAyxa5ZpcTeT1WvyJVJUuZ7xeNodSpLsEPzwquj82FAd919hrcdABj4aW2oWsTxy6fVftU82JcZoQFUWodUFP",
  "key5": "5K8KgDQPSVih8vrAcRfu226HSP2s8kDo21nGjkvyjUsPyp2H8eGyP6gtGGPSZvorU2rAcDhf6jd1MvN6h5VkKW9h",
  "key6": "DYGBFJwXZqv8fTfsywd2xRw9iScBr1gCUWiU7iCp1Tgbm19YucRWff9C6yMQVxVv2aJvubhcYKDbje3JkPeMYRs",
  "key7": "5iZmGA1hXvSyJcX1sVFCYJnjGSXVV6q7vM6EgkGvWQW7riXR7Y7RbeiizU3Z3Q3sDdnEMRqTJGrf6terAZKsZ9ZF",
  "key8": "31Mmuu9Tpwj735EcqruPYoeh3D5ccV5F9yJ7Q2Ggm5eRxEhNCFgovQ45D4RAEBxxeQiAUm26mqbvgmYcAHcHCZTf",
  "key9": "33J3W15mBAPhXdRXCaK4rHHpeZZCGURCkTNNsk13dBbjmFvpRp9uMdfSdtpKJiZxLnhjnS1eN1o2QsuHKdDi4R3A",
  "key10": "3Gvy68VcXuVAVZJxGNH7CnHjrjS6iNEX8BgHtPxTATXaX8gaw4Z4ECTf4omcYsQfSjatYsZEM8s9VTQNBzDhPZGf",
  "key11": "5qD1pHCqfvaqCA53qm9EYgELA1VC3ZAuXFFdrD7QFH3VFDUL1Mt6ESrrk4v1UZNyZrE25XVAnSiDWme1wBABhspH",
  "key12": "29t6P87XFbm1DLuYjBPs1dC1n3tMrvJuS8TswLrWqB88dY1N6d4JPzdMwYt7MTwR6ZmfdZLGZZ1zijLvjuzSrwQA",
  "key13": "4q2jyohyNX4BdXfKAVZTRzPZah8QJ54kAxJzYcN3281VcQoK6Cuxcegz95uVDsUY8Efu2kFqaoxvNb1FQyajEMYM",
  "key14": "4VKNjpRtbzdAA4C4s9m3LzfGvUTncteCncgW8pP93T4r6MQuLjYujkg2vjfM6UfS9EHStxj8dhAhXTZa8hKXMT1o",
  "key15": "2wzByuMPuzWCfyQi3EDkqBmAvHAj923Gp84JAZc7S91nsvGtPCe3KYnV5wT7xarFCD1x9zvdqxcYfD2gshms18Nj",
  "key16": "2ZFcYuZgEXrCnNSMJQcPKocWD6Fjj1p5TS5jjBvyYnyiZ5XwU1YitZ9CdJi2ZQ7uKAshYLNJvcjig9S2jAw4Qk5q",
  "key17": "eXeuiuqdPV6BDSR9uidZzZqKoN5LKTU6isV6yTexjpZRsumQKsDD9LURAQqZ2rd36jq7ovA7AJn5oikN9Fgp2mv",
  "key18": "59LUjE6rbLeokUr6SQu1zYv8M865gDMEb6zCy53ED7xGz5xc7het5mzu9V6haaxJnneFa4RnirsB8Etp2sJfizB9",
  "key19": "4kXmM28b1Fg1nxcGTPnGNtNaAWxEui4g4m1nJtaXbqf1DdNFv3K5jggASpUp4cR72jd2yBizGugrC2YDvousu6uo",
  "key20": "56XAuci2F6QamhgQDLrcQrV79T2NMht8bDt3251v6PsStGk44oP16sLpcPLfBFcmo6wKLLvD3tXm61Ls2JHGsKjb",
  "key21": "325pazG2BywGQS8xzd7mLPyqvXHy9pi5io7qcJNnKL6Aq8W3haU5yfNRkWCdNGkUAKjuSTgqkhztfHVHvYUqG1w4",
  "key22": "2xR6CSZ1q4EC9Eq4wWsqcUzSSGLN8LuNvJmsBUMkWWW82KUCTFKuSsRZ53dTR53LwThWX82DRnRTZBPac2194BEn",
  "key23": "ct6ydLkwEz9QZhnoMx8bjL26E7Kb2dBjEY5SwQpSSv5CEQsJSc1NGgh9Zuzk8MNRJcTrHUBPatE5HLhYkfaoKZZ",
  "key24": "2GoL1BRZpCmrNSc9BG2s9EBnf43u7wiouYpAJoFGFcEnoQspsNxcKhaGqFMN11yeuKkWw9htA6cMv6ak8g6y4S7j",
  "key25": "2tqe3nys4BH6Q2GKNgs2haaPUu9F2tNTrAXMbBMMeb779Ze2bEaJK9Vc5o8ZE5uEs7WN7GdHD16wQWq2qZVfVrke",
  "key26": "2LMXd9E2RuEVc3YJuqQnPUdhMEw3UNUD4hRwk9oidUdVFPgfn9LJo4syLpckuraRYKgdsQhdgqg7hqCFZSJQm5vk",
  "key27": "3vWrkmhb19o6o3Yv9ng8DoMasXE2owarvCufA2qgCCuRCNyUivyF8GNhxCez6zMmZMVWAXUdGt7U8XmeuGnNiwKc",
  "key28": "26yt3gQKa2suNiFsYme34ecEr4y69zUDyX3SbyXmTbtbcnSpUbuML6XDqRtS4WGEtEpJFTS2hBoKxQ55dHW51n5S",
  "key29": "4WgW8NiPQiEKdWxaMp92igEg7SaDgkQvnXwqVFcGCxpAsRtpobyvUNa26GEtARYbxYLepSRXzeqXttxu8PRtHVoZ"
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
