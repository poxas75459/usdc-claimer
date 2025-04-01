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
    "3nSAygFu6gUAFyvnbajzmhqLjcxYBYD8yvGyGyi6MBANyM5cdrQNKuwtwt269bAkaMbGaTAqjaccvt9vvJdkpNuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QANbZUFoKRZysaQEwMuPJ4XNUZ1VHevQWb5apUZ6bgrM5zgJCsTCNtLZM9aoj5pzduk5fzKYyyUppFy1FsDwUyF",
  "key1": "4ARpvzGFVKZpLdmTjYX41HVAHtesuUB6u1pXmCtDdHhrEXom3t7WEy4kbU8cLYvkL1ZViBKrrpKsMVjnDpoLzcL8",
  "key2": "7catqhxfXb5Gb54dSDHjdpCTpDhbhg5Jt7wUPF8KXfUoUDnve6RAzz3R7kmFd2uiYoyged9SqS4YJzGV2BHi1sA",
  "key3": "ec6EG1KiE8Z9MizDykuf2jGbfmrhF514LZavk3bcxz9By8WL1BsAyoPkuQwpaZPi1uWbv1NaanNDFdoBEhas7G8",
  "key4": "nupAiF2dFT3xRCZaJ87fkLM4RJw641DeNMwkqKbHGfZGQTTtxprkHzZH8H3ZcxvGZ2RK8DdMpJDitU8gUvTPJGn",
  "key5": "2t1DFw1TdsTFKvVrtes9jS5eZoseRWF1zMxAk8s5dSDDmQ87o3WqGLLNXKFUuhVSQLvD9FF8TAAVRLin8GNB6TKG",
  "key6": "Z9ZaSM5ehNAX7JtAJxAknnbS6QNj2QKXsCH7FF3sMnaw3YP1W5ea66LKj3dRH2FUEB5WVh53FR278kvV9cgZN1S",
  "key7": "2y9zJx6e92iJiLwAEov3RWoS1Ttdfkz25Gqp9tXfaRxVczkd12Z4khEuW7uipWtUw1yUFQQk3yARG45UnAR5HqL8",
  "key8": "HxXjV7f8B5uMpV5aazgX8LYdCqBBV4CyPe7uFQ9EBdHRPVT5Z9zGgccnmQfCojDBzJfQVm5BcpyGLzYQb1XmuL5",
  "key9": "4K2ZiByWh6Ti8vsiiHSSguQXtGoGh5tjwZSr9pycmi8eQXjB6GKgK45F6Y512Bm618wNZgJb38bKC5UVLgC3dhDP",
  "key10": "eRmBwdMBZchiXsN8FLAX67AptPHWae8y3gRNG775dvU4skukXr5c6YnHvvZDwGRiBAAR8WGwFt2FeXdvmox2rn2",
  "key11": "2h2sAimH84LDqFBWRG6E6QKT2rkQXMo1yVn4C1wAZDbmuni9BrJAazxNX62n8ZJRmkw7tDtkVCKTcCYMWAodVgsy",
  "key12": "2ANLRvNUPmrRT2xZeTdqRiJ3Gahv1BDzoj3QovLKqbm4gEe7cQTBtik1aYNvSDfhH3naBV7QuPui3DgQgrGMmrRy",
  "key13": "foBDDe3CCc4ajEp8VkLy7UkYL7zaySqj6wzfJPE6wT6cy5aLZur2kphwCZScAJxAe4g3YTEvW2Zg8CnY3ST8ShY",
  "key14": "4vrbEFTSqmi5h4T7b3qGx7JqVipCJXkyv6ANUtRtMzzF8UinAeUPAtMK8ukwECiqxtuSS6p6W4nJQZdLAsqFyffL",
  "key15": "UaxBCzXD82MTQbyL8ot7WBRxvhu8HUcasjboXXRDC15DTZQEXEZ5RfzD45JXoTZsUnCYrcbYxrASms5m6z2Ft8h",
  "key16": "3nzgBKx35x8vq89JnPB1r2yS65F8xdB5PzA396G9vBn6KNfqKsENSfNXsxWnDU5DP2JcjB752bW4DKZi4kvq22uX",
  "key17": "3CpmHiaAbJxbLafK2MEDJPXPZcy74ysdempW2QHucym4S9egu9oZ9wrxLcxChxJNWngech3R5DgAyWiF3nFtoVE2",
  "key18": "3SWrx27a4CuXX824UQ4oKhFp6yKDX5WZorYjQpDqsESWVkS7RFNzZEe2npowBgwRSNb5iXQhCob7JehZ5MKwGTmn",
  "key19": "4v7U3uD5Gdt8bFrUJLjMnQaUU63uCq3wd6Qq92v8QGdpYsQZK5y2WBjk66E1YpnyAZrv97WSFUHg2PgaJDQ2ixfz",
  "key20": "kZ3bgSgttiu63k5Gy5gbqPnGwBb5617FDKfMB2rL7K9G1jpcHfwHQ8dcYrAovetcja7gJyDhD4QpJSa42FcKxoP",
  "key21": "3yzhACWcPunAp5ALqQ8RjjuXjjm5LzGjjVgobzDqgt9rAzk9wGKynRnvPkDcP1gzydtUV5Tp8y6YeBogf3xr3ton",
  "key22": "23YejrS6yXFXuZYpNAbHvZeV37379uJAU4HSRov8nqA5Ea6NaRN3rQMQsBjeV74eSESHthmvtQgdt2z1KfQyXpdd",
  "key23": "5zspRpjoBKQhpkyAhR8FoUr72W8uxBLXeqWzQ3BMXDjmmMn4AXyr6Gk6iy7cf5bm1hhkF9PT4U4qXB7iZ7s4CEV5",
  "key24": "f2vHa4hZZn1Da1dPpqJ4c7hU8mVkKTfAeFCCKam38m7NfTURpXJw5WBAzUwEPUtg7R3HFGYG2R2DCcm15LbMxPK",
  "key25": "2ABkKbLhcVQDEbEyNmAmVD2Gr2Zhg7WZKfqtXAmAPWWERkJNpa3miXDgMXRuowuJeRQSmzKnYhPBTsPaiqa2Jpiy"
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
