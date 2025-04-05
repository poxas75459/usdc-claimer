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
    "5Av8WPYa284VrAa5F385vGQRs3tPJ5uiqdk3VhhNsJ8ohcUt7pLNvCK64i869nXaLA3W5jrMRTnmEnLvmVD86TFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caFM79dNhM35rttCtcB9CUwN8FyWm2rUZBjMY2oJJfUvBYiFJzV1Gf1kjXwYksDmzwQGaMGsQuLgjSHaCGZwbHU",
  "key1": "cb1KBAFoow1wxCba3JARhJLfL9nsHonGkqTx5wrDX5wmSe9yshk6bbJuCcziMDkyicgJ9bAUrwPznsZwy7H1Nu8",
  "key2": "29QZ2Hgkx1qKrqwWu3shhi2PdWZ7XZYbp5B5XrN3hhAgoc7SWYqoZ7DvrETfFtG3jd6h8CaDZ946LVC5B8s6ZmZJ",
  "key3": "3bbbLBDfv7ivqtRryrVbRwkN67hwJ2Uj13EG7xiv949RtMqbn5Q5b4gGPvPuaHXSMmrPZwuDzo2m2gGuzkXUnNeV",
  "key4": "QBKMLSPnpXUZEGR2cQwqrabfJzdjq2MWPy8oiCzdJuDq6QQ356D8qoMS66RJdwvF73zLAeaDEHQj8QUMHkqjrXd",
  "key5": "3i2XUMB5oAN1yahNF55e8ijdENRBfnEBVekSDoiZCnoULQroMHBjpXauei5J6cZWFKpdpHJZWmTQg3daRYhKminH",
  "key6": "5dgnhhZDKKwPPAvtyVA513gRMShGwJLgP254H8QYdhnP4H499AMN8jsud6r4DVMwEiNrhuhqKJXywvFHWNwNtZDz",
  "key7": "3PR3T1sgWQCzjQvojgTVHTbkn9E38rcR21ix1gWPBDpirhW3JcyBq1crwiTpNamfx9sDA5Vr5ieqxVAyk2xxjGHM",
  "key8": "4PoqxfrrGRUvoGj1Cv7PFteL8uaTs5HZB16p62T9tvyrMoVrQ4jBKLMu8CUnM64LeePGfjHJQAqq5an8VGYC9aq7",
  "key9": "4iAkQ25voh3FT7RxR5NczmVxtKYgSybGRMehFmUw8cyrQm3oVNtQJ64vDH2JHEG1QL8f4ozLTA4syoaJ4jNn5Ngf",
  "key10": "5PsYqdeVUqqXVLnBc8RNTi768aSiYEue4Dqh8bQaoUvqZjtjUpy1mExngwPCGYySUs6ZS6ifH8ACWbhghhqZ9KM5",
  "key11": "5MAd4K5XWpxXWeT5adQHHTw3fcnTHMuL1KVvy8PBAiUotwkP9UJ7b93ecR9b94j4A3VVi4bE8SJJtvus9N9J769n",
  "key12": "47UnH8rQ4gH2jQgd995hjwNYzTx2vuX4wngyZmHBejpeXkpKHWShd7gHY6h6LL19kk8vQzL4Fp7TUxgFdJ2nz3dg",
  "key13": "3eomgGjwynZDihp2PR4nxWKBp64AR4MZhFwv9JcuYJGNeAzhjm11LyFoiebfYa7h53jnnS7FdfSAMMPGK8SRVyTd",
  "key14": "479V9fMqQCiv3pGihonAh1MbfwdFXudiV1YuXzbp6vWdJMTsaWRaxE7LKQd6P8dqFKdU2RhEy6xj4ZRguS9ZVLZm",
  "key15": "26PV6b2VmuV1BdwYmxpZppBErtqgSeEKgDd9tpkffhC4rbNXjqg4pwKYW3wcw5cnQFBe6FGGMcMGNTtJiZaFLK9R",
  "key16": "YVJNsPAd71suMgebX1KiKx9srJuPHFEjsAuKzfHjdo4j4BjWJbWBHdmJbfttg5uwALxuaJMgASVJoVWd1o6GSx8",
  "key17": "3cCSL56xLoHk5ggYS69aRAH8rEGHgryLdVSXQ515FgZHzoP5tzuHGTo7E5s4WeuSZZhxyiiV6Qg8T9h1dqqTph3P",
  "key18": "4QSczePKVrCqGah49o9aUVA2BBvPNK8FsxTQhavySrbFU75rUAjTeBiHRTyNKeCovQLqdCCjzQVKhEfSYQ8opkTq",
  "key19": "kZNjUWrBh7LfhjoU3Kx51KLB7PdnUmCngcqsuhJsn4rfntKJgdcfub4jA1GfUVHu1aUb8VdXkiL3xUPu55MqDFM",
  "key20": "Vt3GF68JCLJ8mDmdGMFQtqMJrhoYda1EzPVwr7Fu3udqZmetrDP6SzxyyFYeey97zu1SfWkDWPKmgHhJGGG18wN",
  "key21": "Luv8UVAjy6e9HXqggMAfGGPMvP4ak1wA8KR6EgYQQqSMfijn7L6H8wSFi7J9nhxKRhniXqATKDBAgEA4Qcds4yR",
  "key22": "5THvQHkBzYGMtcsDDKv6YTzauBCgeXtFGxLekK4cW7yrgLEsWAKnKfMdeVUpHCNiiSteieVnLXGNXNmiDCAayTLH",
  "key23": "Tm2WCZBAxEVXRXh8USrq5GG9gcw5vzJDAyvkQxNKcEWqmaKHHGTxaNLYHWkm7QXqxr4hLAHtBUw3EGu4nGvQ77M",
  "key24": "2LNExqSStPnikwoiKyjENtk1rimt6LBFptptVyuwk1FC35kJwD2W9QwQgQU8rUvD7bGKENtxEs8P5mN6moTpGX9x",
  "key25": "31VUoe4rvpyUNQKMpvCQABXuWgCgFkYiGDtSZhVzvaiqAfF4kRDhf2UcTzyBocNW5f99LTunC9FKdvZWBQBvCRS7",
  "key26": "32oGhbJxQ4kNzoE4ep8s8QEs4eyYthvjsehxCJfcUqMGZLi4SniQMWjBcFhJFqwSo7L3QMB3RGbkCoFeS1GcYGNd",
  "key27": "43bGvd7pRWVM117dqNnSJsaBtkQsTaoC7RKhZyr7YUrKE35RoyNi99Pa3ecaTyxpMBE7Qgq6jiiBppVo32xDucgq",
  "key28": "4DoadbKJWtYVnYRA4rHafe8atxVjgB8WMhD3XvhZtNcdxA8gccwHWfhwcPJ1DFj2aAUFxAK7JRvLQrch5qwiQ5vV",
  "key29": "3RJse3hgDHDWbvjF2gBxPtanj6y7foCYb3Juukc1kyQBVAsdSUenX2f8nzbfhg349LN7fSN7zg9FkzK5LwWNw2pb",
  "key30": "1nWUoxdV9GiMCTveNLoS3i6XN5RN6qasyohtis9n147njXywxKm5A8fAX4fnHXDWGnLFqcMUQU3Y8UJEjkRBUdu",
  "key31": "2LihbMrygcXVUiEk5qnHkKo7Xh8qkVxqGQLnfa5w1Ld6Q4Vnt7RCGdsKvrXyQ4hT2JTQRXU5qX66YurPszqv9A7B",
  "key32": "5qarbwgjR8N4eeeCpiY4yxCL5S48HXda4fUDmngUeNJmVL556knUCRaT92cYVhfVWURjqyY14qWZ5kigkxr86WsG",
  "key33": "34ADRZyKkEZw89R91WHptLabTzEsXNEwaVVn7s7NhqeYPjommDAjPJCdGRkxo233CV66rRzv1yPEWwUxHpbbMU2V",
  "key34": "RgjgchXSLWUXqZDnrsx56BbsH85k9bQ9AyJSiUwVB2eaYtJuF4GQdjhM5XwA7oNNBRC6F5r3zkRC97jMfwzS9rh",
  "key35": "XK98s4C13aqE3rpv5uUx3otXKDjpitcuH5Xd14CS5AW5quqTr2Dk9MQcYdWJJznr5sDcUgXY9vTgAJ8tXfkaGWx",
  "key36": "2J2YBkrZA8pk6UtMFFuxGNCmncf4PJma6Jzhe8MqwZZiBBv2r4TmHx8mvJxbhCvnhC2oPLVCzD6fstMJCcnEBaMd",
  "key37": "Q4F2nTNUy6bnbginqYmh5vvaaHcJjKsPYBkwCBhA5VYaxv4qCHxZwJ7TeCsNBxm6XLz4A6nuRFaAHbE5m72NEY2"
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
