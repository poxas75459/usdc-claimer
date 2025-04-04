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
    "4VtpXAMfs8gQ1LoS3Es3rLQdQmdxbncjV4EpZVupHUHRHBE8vZanmTJHvDzkCgAWWQ8sVbuFaJfxFv6XLbiBhX4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1xu5o86PojBsPfhD9LXFuiJBy8u4mhAk3TbkjR6mH9zrv2NUMfgoHbj8TW2e8FHJpJ85QMq4feVP6xMrzQZ9z7",
  "key1": "61x4f5njCLvAHp1LQneezHr5QJyjTPUwA9kC4qMbsvZH6ZqwyLjLwMr8LBy7Pgr1BqpLZt5jAurx1THAN9t3ufsP",
  "key2": "2o88656enzCfUSVKjJHrsJ5wqE4Kziw899qgUQ7yLJQ8bqDh4D7kMuaPMzsFi7EkpyWuhYMpXx5ddnMD2GMPRubK",
  "key3": "2728ZSdwCAQREeaSZyA5zeSbBHKtnu5Q2MRbwTJBqAocMQ1Zdsbs2YG6JCWh1CsmUME6WbQ8jzRZVqzTsH6gGNxr",
  "key4": "5vAT52rrSibEc33zAoN4SESZakeWu8kmaHERaaqR5Pq8FskTHW4xPsRNWMcYjgESywTQXEcEGgagcwoDa9V863Y",
  "key5": "5Yz2Ro8bUrhkFnfqntrhSDah26PRidTgeN8Lc98g3c2giMktTmtuGyCLhuZ5o7j861xKSnR2RQBcxZFofjy38P8Q",
  "key6": "3Yb8tFDQtXVeX9K6MfZ2hGLrcbwEqMiFLgqSiq1eqqYH6DqUw5hMPX2LSVoLzWhnHwfKktyHNAvdv8rnAr2duXpu",
  "key7": "4aiR3TYTFetiiLzCu5hNR9K7hyZ22SW6zbHe2qbVQKjxDnVAnHCMuZnutF4vhqJzAaiKUrNueBV2R87GU4R9Tiyh",
  "key8": "2vyuz2tHo14HMw4CVu91B755bVpbzsYkncsrvpp4SBtevQ9rBKAvx9GY5NFrzdhLU7fCxFuU16o1bRtJBkCkDkXr",
  "key9": "nNmefP6SHiCoDkXRi7SEhW4sGtykjCM8NkjTtGUvMPMitA7U4cPBzkhX6hjYGTDmw5ujdRs9Hr94kRoJaT7xW5K",
  "key10": "3ADokrN8jiAJbyfPA3xTAWwPau9DzkSC5AN1FSMj98pB8YQ6XAxykLc8z1n7EuVstdHGExkM6LB8WKBcEc9MuC6K",
  "key11": "5ZCswPVJK5TNdurt6fQ26RBxQzAeTDMTcbtdNux5Dc9U8iVsFwubN4YznrWMUfD9L3pt4v57apiCD59g5Lk3JqCo",
  "key12": "29GVbbwddgJQhxSZmv5E42AEzGYwA7s2zGcUY6dhhNVF1bGECwTiQAdUnFqpyevnsw6TyBpiSLfj7rQydXK5ox85",
  "key13": "2VyfnJ9CmxkCnhBFFcM4ZhtJKkQdr15uETfH9xNRTpSyx9T1GHfaxAxzH947aAuiKoEtc2G34D5GjxDiPhHoUh6w",
  "key14": "ZA2ZUFT9n5b9qk3pVSy77QCuh5DQknNWRxeGV29Aaf7GJZadcHKkJD8WQ9hHCt3of62QLqDd2wNQm8Z8c1c9pCC",
  "key15": "E8mBgWFd6ftA1dSbtALRY4PgtmG49sqUsAHYeGPGV7zbrauoKeYhHqSLbxz3oif6Dx9sw6hZe5wBAPNKayVcf9e",
  "key16": "gW8ye7XMVMWpCyxEW7aipnnZfdGvxR66J5EoSWUj1LGXq1RjhQMZANtcjTGXCzqEEVkgQHKqLc2ATiMjFAdYFKB",
  "key17": "5YoqSAGfCpUVwmgHpKeFjzQwWR89xcwD9Yog65kTCtE6Xz7inszLrQWx9DVH1vg6uDqqX3FhdbntGGc6cLXW1Ki4",
  "key18": "4mNFkgpBBF717DiS4CTngyN7JwbVKPhNTy2HJ47TED7ZXzygAsdK6QWUyRUd64YDmwuUxLbscopv1JHmr4ng4Aqj",
  "key19": "2B4EmrneSbtTtKqLoc11B4TMBpsfvr4x7AXf3x4CGCHXaKe8gEPBUQWxx9XxaN3zzDPEegrJ2xp8BNiwdvyqGR8K",
  "key20": "3Tyq3HnZ9qeck7rw3MjMpDwmdmHkJ1LDcE5nwN8NjHW5PmWh1psyniJVNtF2xuvC84r2CeS2gtUaFSSYmrNmupHA",
  "key21": "5ch4g2xM3TdKc1fi4QdMF4M2zY2CC9C4LEUook7ybgh8PGHNZjd4SQ4UtTDNviAigt9b91RuMaofzciDjYhpkJp4",
  "key22": "3HjpdhfSu1eWKVxrnZ8Vb7k9nnLGnX5jmDSb29kT5rpUGML6XG4SeAaKAFD6qZ9wB73K2QfxW9ASYsNbZNyfrNom",
  "key23": "4ZJW9wDBxA2pr8LSjmbm558ebbMdZNtS2WdbK5bvmPVTxhXHJrEGcud3rG95zgh3DVZU51skGDRV1SaPhz6Xq3sg",
  "key24": "2AUbVP27qnBHMvG6ehCDp5uNNpYRVve7dAXGaojoZycTAL9bZvZSppzCFTGohsyoweQc5JNrZU9WpQZmeh4LPJ2c",
  "key25": "5guZeezdXCbuiV7hK3fMATo2xh7HdPzFHEsQCKLZWYdBKk9XheoQDtvf4YZy5srDAFSntJq7KBtZbKp9mUTi1AvT",
  "key26": "5zZSdxSLpDVadxV7pPnkPaVqCdM8bX95z27P3KkkGG6WmfPRu8qX24vWCeXRNKnqZLJFrZNY6M6d5JX7tdMdNHKY",
  "key27": "2n39g19F2Ex7hCHPT9G8bBeTeFuEdBSw9pdhNJa3ocKt1kAcJrt41fPrV2nEEd89Uadqd7FyxZBF4JZYLvgPkQ5B",
  "key28": "43YjvqqdTyEeHbCHFqkWFFmo9oMpsnZ8wH95jGwyLBt1NvvoJGNdTX8giHwNM5PkTwMgnQJzUXFVpH37ZZDsJJeB",
  "key29": "4mqJKcvAGhbTCRi4z9nvfERS96hePegLsn7xEgbaDvFrHTnYvACc74HhRooQWQHzCb9S6aGjoFE9hRTokiMTEzhj",
  "key30": "2amMUCQb5EN9sacEd3rrZifux8jNWcdEoNfvUGMnwvUKTmgMgynGAK8hgCzokFesBtMGKn6qowjfSb4erpPyQf6c",
  "key31": "5WRBWACJgkmRAQrtuKabWETbnwb6oj9Y6sRq7tZKkdXWNxvNW4tXfgp31fcNDuC5Eu1VZygM2bbmbzUeFP45YeVB",
  "key32": "5e7hD7rZvL9PV7R8w7Rih4ptNRvwB89AyUKZ3mTKrrVmgCNoaA2kSWRB5yXFCBzecmqANRfJSEHDjZxHRYQpKaex",
  "key33": "5ifEaHZgCeNjoEfhE1aHNmq5M9iauBtch5kqc4f2c1yRSGvPDbm5wpKfXDQBqSz8WoAwewy7CTPmKKEj71gkaVcQ"
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
