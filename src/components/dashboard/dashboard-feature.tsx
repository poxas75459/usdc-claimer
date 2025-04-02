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
    "45r8bvA5xqyjbroJANyFLohvus4wsJn57byT1QnY2RGU3UhhV7aWdGzZsoMsaRBh2nDx5Hw6fm9LdjekVuPwGPEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1wuzifzXENrwqrBybyWSMXfK3C12ZDfKtfLb1gsFXy8LCwE4coRkBpXt2BUHpHR7GbsdEj1k5s7KL3WWJd6vAv",
  "key1": "39AsXbcQWk9iZLcuwMiA1CrX713GjD6Cq52AMtRZoLSvzkgNS4RfJYJQNyRpDZ3aNTeyzABCijFe3zFT2kcXH9ed",
  "key2": "1MsLg4YBWCqNEojkx2jeu9wF3KchAvixZnfKmHYqM8DmbbzYGZjbo71Y6siuMFaFcEyab1AgeBnGvMyPgTgohGu",
  "key3": "aafsR8wvuGNVFNW9jTrWQb8ZJiJagx21wFeyFiSUWPgiWxqWnherDpAUmbhnoe8ZnjTtJT5gcvAwyskRvVgLLNz",
  "key4": "21aJUQwZkYbAZR4169fXXkdShcxvd5rjMLYTn9Xi6DE6YcFZyUG25SMzMBjhmKNwyNZ6mvuZbfgP9AZzgbNpsQKN",
  "key5": "KEnoT3Ld8ZBbrjUofHscy9pAYaCMHT1B7BAPrxsDjj3pMewmhbDzri4MesrsTRwSZkr5MNYLiVuVUvjzTSZdg5W",
  "key6": "2BCTLXxSA8Qwunb23Km9NNZmazmZeiSbj1bSg7UX6mhinFcqns4Hzn1B8d58vqt68kiRui1PDhFzFhfSUqXBitrR",
  "key7": "5BF3a1JYvtmJPGuFGV1mT5MCnZtHNb6DZTzGAUXH6mKEPA8wbcXf89gUsyTEAM6R16qRc9mR9ZPTqTTJrwurDqf6",
  "key8": "5CRXXDiPYdUHqoKzAQs7iN6EXundxrxMhkh6KPe2T217iV7PMNbeH4cQuMHLQH4neCFFq2zbWZsy96Ydy6yenZn2",
  "key9": "28u6LbFn3E6XqpULZ3nPyZPzyckg3Xmp8ZF9Q6RMy1isgqS8Z6vXHCZi9aa5uHdtE2bE5SuMQ6GoXTeGDoHASBU8",
  "key10": "49ed1m336n7d97ChZTY2V9tGQQgpuSTy5TvXPzp1NgdkZVscQkNVeTidtXb5DYvFN4NczwkNEsKBppxsJgzDS9Jk",
  "key11": "5kwJsGnmNC49RVaGNfZoRb4rpWnaYzdUPfmKsrzbf1CieUR6ZyhKrUPZk7reZWyXJE6qWveYvZA5Uwp17A1yNR9X",
  "key12": "2gxQGW4ru2fyHxtiihjxBAdBn85X74hbcKdcwMTTXNQLxufhjKbjoBNyUKfSuoyfSr8Ctrc5sZsuW1Pq9N6WTwdw",
  "key13": "4ARpERbb6HwquFzz8u3KEVf5oQ3WANdcGF2QqNN5s8AEMoKC7nHcMtS1XAbe3hKW22y7JLf9HQhajktEhneg8KUT",
  "key14": "QKuR34GKuscsvtUL25f5pYeXdxQPRJoHXKwSs9sjHYdruH8ewmi4gNvMLdgR5jtSEEkzR2ZnpvcqaqVPzAx75nL",
  "key15": "jNoVZwYzg68eE1n5qTnbwpPh8XoWDUwS4NSATb8RAuHJioVFbRMmfFh1vks3a6C2AEWGowpHgcAXr2eS41u15mh",
  "key16": "5UuFE211PThryjSj4suoCxnJhVZz17zVWZ8siiiwmkswJkyUusEBUfzXtKXb8duMViL7K87fnn6q2brwsdADt3NJ",
  "key17": "4gnSBPw8ZokdqAN9dVghSkNH5VR68bDWXfGGhN8Uc6J8dtXWvYESs4rMPuNZXFdanMVCRaf4eZtfVoKATjkrZ95g",
  "key18": "5RNA8Er9DMME9mWmLA7VywWHTxxE2mbLuKqGwwWQuPrdAcPARxDwSkhgXGouJqpMfFT38WPwPjLUVNkn7PWmpqrE",
  "key19": "5ohuaKywWFfboLUgrHdfEBQqJpyFQZJn3oQC5FtjxECGfCS4whapH4aTrgQbgZvFRbBKdiCyKJTgB17NTN6i2GpU",
  "key20": "FgikTGYDafoRxVkpGfiz9fuYZuVbncHxqXyW6bk47asbu5bTgAG7Kf8cmB9jFc8ZRwpaSRk5cWhuKz3kmJiVRtB",
  "key21": "3fnY2dKoWkP7Giy2VHaVWUkgzC2JcCms5kaERL2i32cs1LELs9LaS5Rj5N9iPpdD4aqj7WS8KQ3ennZFyWeZbJBM",
  "key22": "4g1PgThDQC7dC1KoPR2wVQEtFuoVxRVECfQCaxewrVBqZe2S4YTdVJ21VvDEvh25Y9BVhuddfvNnLdRCKRxnATd5",
  "key23": "4Xpuk6C6afTWL3oXFuY9jHcn1Ttju3zZeSvAAk9XqEMgPN5P2Z9mCxpmkNY4LJioDpBN5S9baCXCkRmwvTaesDcp",
  "key24": "5rhmRJnbsGurAFKypCj7EpouYoy5DBC8isCTSUPbTiC525ZMYk3BGfVcVxXi8PFYCtSQMgFBhm9xJbVawj6FWVEA",
  "key25": "c71YJeRoxmiSLUDy6X2xodrdZwYQrBwWJ5p96kwY2V37sFfczQaP2FtNvfJ3XR7Gpdfw8Sqynw9FJCL8SvMLxRD",
  "key26": "2rMJBmJ86FypyYhAimaWYZrBCF1t47NZbvRpd8iChaWaZWtMSwdLkQXy46Aw3uiKAZjMxfEkGnXL8ogkvpNrxFff",
  "key27": "5YFoTzVH4zL7N4s1NyA8APHrSqTUVz1ECQ9SHTEUTjsAnGp9RTJvN4ct7jjyrqVo9sK5H5MVQgyCko3tfEjtcM3B",
  "key28": "ss3WVxyMuzERuRU1dH6AjNaUQxuHLKMe19fSiJ4fyVXSGjw7E9LcU4DTWGnFLpiCACUp5qLRaRaVXpPiSopbyiY",
  "key29": "5BW1jJ4gtFCnDMpVDaedhWSKWdkdav2Se64eawwE6hroCST7QQN2QAUdoSC9G2EzpoSZVdMg3dv463RAMzS3ETtZ",
  "key30": "4cojAgemuTnRZUMQyh7EweAdd6TVHuHPbgEeJKsKnujZeufpLmDhaSFZZXXbr6x2Ei2uKZL7bJboRhBPP11wiZvq",
  "key31": "2mufPJ2aXGip9GgJGAipaqfq8VseHGYoLupt8PUcMz9RxLeJ4urF7fcwjA7rS3nVpHPcNbFmkLrMXZPSBKh3bfw8"
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
