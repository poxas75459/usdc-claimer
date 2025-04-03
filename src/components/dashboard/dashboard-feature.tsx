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
    "549ekUyPvXpFf5C7u7APqkXZNb1xXxR5cEWXnXx3XJRq5LGUCgMnYk8NCLtfpyEMpHa85DeeHGPYeQ2eseBUNcPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SnHWkrEaFCbgZ2ceQhyJ3qwUBWy3AY2uJTkUndTKSFknUAE2F3kr3sn13yABtroi2XxkgQp9cP8Kkr9GQiMNHP",
  "key1": "2iQX4Y5XaPZVMqwB8pHjvJ7eN15CRpnv7BS2YFh2rZaMh7JKtwizRb6183Vg2DxNLUfE9dWwQ2Ei9yUs2kKufhJn",
  "key2": "31T8VQrz1wq846juNyj486GpERpfCow5QRmAxXPuH2r9nkqkimtdK277DHZ13QZP65JmdPRwxWZo7jFgP7DqVvdR",
  "key3": "28MguedVdNhdX1X6G7kqZF4H2W7tfKEg73FCNnz4LwXHnKnQb6N2acJokZfhNy6BVpNiXgPNSssEDUDoZEX4SDik",
  "key4": "66u4scZonkyswgT93Fkb2Za3gNjpSa9GD3vpFHwi2ZfJc9ZGfqZyYY9mkgBtWUP3xDHpBbCe9Xk3x7gj5cq1Nutm",
  "key5": "5ER2hiYuGvUDYid3HBNDCd3qJPigE5mSDxVdwESbqupWiEscTAdJKRbQsNBwdX56xJNvMPZF7V6VUQsKsNVihkoE",
  "key6": "233Hwi4BD49qJKZDUFYn9JSqJeK2pWiJgxBF3EKRqvLwiWnaNbf5d8m7zqQJf5SJJZ49DFNzqWmygYeum6pXiD36",
  "key7": "3dnakvVZ15LyETVoqCG7isqCRnGt1x6szxcHEe4ryFETCnwBBhS8gBRGH19efYZEdzwZLAkh3TJfSck2nPfShNMc",
  "key8": "3sWcHcuWgcRXrWmiMVFEioiUJZpMwiJr6HGea7K4ra9JpHXcdrgaEKzZ4KipjqBfRa1iwoUJzGkSYRH78WRzP9wH",
  "key9": "3bs7XpgJFxEae2WZ5w7gmZWqPYxk5uQZjEtw7JhHC4BPvJwkQ1ec4u6gESVrF9XLfBL9HLuoJ2RXsSZbVHuNZF2F",
  "key10": "3gLCJxJNiHM9PXii5eVNmcVysqNfivq9XDJTgJzo82317GQBM1dZM8NaSaWd3cMjLNLPDvD25M15unBTrzMe4nBm",
  "key11": "4HTDpDSiCfChgje2dt8muSJciJRY3EZ5zCQNUF8uzu4MV7VACXUKMdUUjSV9CbDs8VkYwXfduMouC7ybBq3SNTf2",
  "key12": "5G1WEjzrKUYyBvi27FqArphMAxh6DJdeYfmzL3va1KcnAq2Q9BQ7oPfPghvqHGaR4NeAZruXY3UoDyMGtwrsSTcn",
  "key13": "2yKgzM4tJUoYhV7Ag7mxgRsdkXvnF4DQskNaunru4vvSRu3jDmVZoWXGgxn2g3V8N6MEeNYm2L8yjhUyoPq6dDq3",
  "key14": "2QECKCV64wHzqckMCXAmBrdikDzfTPeBARD6BGTuzVqGJGi2XSTQsSCMzB3ghoD6DpPxcQmUjmidsRRn4GLHTY5W",
  "key15": "2uwLGbw26etBnJN4i1amBLaFwAjRTdEi2Avp45fEDhvPZ9FBNNeN8bCdTd2m3v4dMNTK1RTGBZsqBmgFbDBTGMpv",
  "key16": "2gFjPkwm3R2p4qPxffqxZKCma7rVc4LQ5B8Tf4heRuDXk8APk2bcXBYnDMRLFetjypvoBWdDX3LN7zFvgRw1Ma1j",
  "key17": "3LmxVb4ZYxPdqGhcAaHCm9JCJ3FGToXHWkAYMTxgY7oX44wJutWQkUdLPndZr3pCPz7anZeKELmgUwQn2PzQ9aG3",
  "key18": "4Qs9HgMKGgw1vajMpmR9nM1v3CXAnSXgHDNt1ohVC2AsM44SXVt4LYyx1ERLRDLanr5gcprUgmeWBHCUUvMYAfDz",
  "key19": "5pdiTAbLUTrqB59DNLwg5B5WdySs8ofc1D619JsZVb42j6mRVEsdS95WSiLuWQHseX8CzQ9U4z2NYqNRH45tDvfb",
  "key20": "5vpp92EEeeWjLTkHFugWaVV9tHCvU3ifcJAcga53f5veXdKDGQ7B1YNPy8hi4rw2bDUWfGHZhvEymwCDCF5uJvH4",
  "key21": "4rJxP3wR8MBUCerJQRHnLzXbqddbzVk91FRNiTZZZHZdVYt7jm8XpMewdXzmpL8j8fMmZ3kmS4Qjo16Su3rfzEz4",
  "key22": "2jCaDAhuXBdJoKCwEfp9EQwUD35ijGGq8yVBYbEPYJC1UVeScmz7EmbhmpS67NQjoQvADCo3VB8P5iemeecg6NqX",
  "key23": "3mYVqcYmCdikrR8YKok9PcgCVqrWCmbqCcNMtapDyWPpsWiwQuXjtj1jnhUuYS8tYrP7osqgQqLeRogZCMEwzrL8",
  "key24": "291jsA2V2Z7EGfu5yg4EQjhCNJvZmhHZET11t34eqBvEZ3PpGLyupuVcoooSXnpoeuQLA2EvbaWwuAwzS3XT3YbG",
  "key25": "66PhYtBMeft9JQPTtB24STXd2BcDnt9rqCJncLRVBTus4BHVpDLqJRWbn8Un4cbzwr6q7Zad7BAjjPoJCD3eqA8x",
  "key26": "4LXwxK6UR5sARGppmVApvhTuMH7CM7hrsgVEuLofs6PVbfpjP3YcrATsum7amrEHVkT1aySY72S6yoFikM4mieDk",
  "key27": "539deyGuKWCNehG1s6L97Ep28Lp25mZF4HiDCQeZBAP4bLtr4ay8Qh1S92Xt91ugu9XNSt7XnQ6hvYfVkxRD9ujU",
  "key28": "4EaWztMbLiG9kPPDCfp8r8rjtUnZ96DNQnhZs4CyFQ3AANvPUwzkS8n39b2w8Xez1GjoV3FtsJZbwHot9PhHrchS",
  "key29": "3yudX8tSr3Fw1bHuN1uCtdEHacMAsdNH2Jc1AdzmjD1y9dLyzddaWnmP9ifz8BQbCgZX8LsagBdUQjTbUaQRyTvr",
  "key30": "4XHA2LBFvWqjWJerJUiQbSAL2FDJXMxPRTwh4jGByEjuNxLtavaDAviGE1ARAs7y88ySSCcRArYKm5p2rJ9GZkG",
  "key31": "5FqjYrupDep4vBPFG19bvtyKVN7575gNYKxBywNG8KvrpUM1ikPRgaAaisgk9ozU2pWaWbPDY3MkANdP8BCyH2FE"
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
