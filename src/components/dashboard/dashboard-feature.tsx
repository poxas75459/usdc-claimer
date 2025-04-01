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
    "4yhz63Kgk5fY8KE2X3ZDQeruB2Qtm9UaE4CsiAFjh3CiEGPTVwgFWKMaTw9TS3pkBUGT8bLynTaHkLcWGek9EjkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X7B8xRzAWiscm2LsgmvTJmTcnP8EtKBBcwTvpEhpNxMFryZSwHd4h2AkD33G3TnYDxnGLBWHdgA5hjA28uPbm7W",
  "key1": "5ARNqjzMN4oGLvpoSEGnGoUZvNMsusjb7kfxMwFDouMYwzaKE1oVyEEUyAntVsAH9zPCaTGTHh1MnBY9nnxoVzvk",
  "key2": "85s3wHEB8GacgAmn1joNvURDRU9pSN3eGauAsB3JqsCfoKZyUNh9GxdzCEX37hdMtutdhCbfk4q8bPpQfivnHXo",
  "key3": "9MA9ZcmR26Yc5nzcYPVD7pXg9DkZDtSDJ3MnkCsKKeksjCFCxxyHsnD2nXXB9r3dtUSfc2dJbymDRNYGCVAGAVs",
  "key4": "58Ux9RSaftjKB9duPnR8kq9NGYy5xLg67QfB6WumUXJu3f8Bjj3TdSh4A3UnZSix8djTjxMX7aKxLn3oZJmRhBFS",
  "key5": "2pyXkQVdBz8SopVzD91eatgsuYKGPSLrFttbQXRGkcqP3MBPQWM3uhkWQFRpJwgRyZp2U1cvC1mjSHLKxyG8bUqG",
  "key6": "3SWTYRSvZMNao1NiQoCU1zNGS996KjvuQVSBztaHSxkEVZj4ay66fGdLDZ3teEuyCfnSLJ2HJyuFCdMusGdESEEL",
  "key7": "19ej5WH2LHitjQpZNdekWKWcmCUh1ZYXbrNWQtMyYUj9HdGRfTda6gZg75RXCbg4DaZzS9pXsvriDmLZ4nAuJ7N",
  "key8": "8gjgrpGJ1f59fNMAzwMA1K3GJsXqrqhEzAsinJBWajjyJWCvWavRj9mRckBWtJr6dBUoaGoMCMqUJDHVAQtT8bu",
  "key9": "4LDqCdnngWwiFpgMmGDQZBpdejDJtQSi1XvtPupufGGCGKvSJ1HFi4vfFUfgox4TUshmEbSGkCz1RCuu4dsSF957",
  "key10": "2ftekcYgp5GRBoSefVU4MGmLpMGyL4VvxQJHCapnph34yFNVQXA3CzZ3PtzsXP1aLv6M4tDsK8Dkop7sNbqj7nGp",
  "key11": "5h3LWPxZXCmw42s6aStp4LiqeYGcFHBxypwV7n8HH4FwYQzhVNbkZGcUvrGzaodAxrnGZoy6B4yK1iC4UVsakMar",
  "key12": "ocF3TiRwLsngg2YbdexgViLC7oNJvgt2uX8Gdypm3YRjV1yTbRzperGNQ6Txr9bzg63s2kWFhAjcS1G1PF1ZWn2",
  "key13": "EgTnUFKhsJQziD67PG1qMWyatRouczsN8XuD5A6eZAPH7MLsJgEDF7CsCEMr6erTT6uxW7QmuBQ96w3M4b4g99K",
  "key14": "5s9Hk6F3gjTCwZMBSXhc1ZEfdQ4V9G9Bb8gw984BwkwVEnbJqY9u7HcJGsHUJWTUcMdPqT5tZJHHgS12bASMzoH1",
  "key15": "4KmrZNiJoTbLHeYfRRvZ37QvLNDxrq6VLSa4YHSGPKTc1A1QyMgw66RDUwprWZwWzXSNVKp2wC5vBmpmtF4DVLn7",
  "key16": "3WorJErUGxnNnJxz3fXFqbhmjVyBhzMM1upPCBcnHAtv9iLiQAxZe5XvkCWYjapsxytS36ZMea19jQbZiRmKYyBA",
  "key17": "3cBBgVaa6bS54qP2tYDLKcjsVoGwf7i6NJAKwDnvcY7KfL65DEhNi3RanjwAueiSn5d53MXq83VnwNUyrdRJzGnt",
  "key18": "4SosgQ6g3N9mYsGLBEEE6qnAbriBpDkM2zQzAHsaP5Tx4VMYaxBfKPJLgzjAdT9ZYCL2d5c9SyFNyaAZZcH4g4ky",
  "key19": "5JBfAtRSxt43qpXRZmtz7F5kxLsd4ARZMzbeSnubYQdXCBf89iAEc7nSLzF7S9Ph9EhDpV8bxbKd1iH5cWvpM2z",
  "key20": "2rWq2M1QteLYN11opHjnBMwgYATXrEcjPG6QfdYw3f7Haj7jk6vfNdz5pNs2WNoiPUfgm1cVxssCHXk1ABFAbkcm",
  "key21": "35EngJviUjGbEhcpenAJpdo1HxHJG8UjHMLBnuCybyf8s4SJuSK9eET7MKw4hhxvqPKgc4ebyiAGCEuGfG79i2T7",
  "key22": "5yQnLVmmtBwE6thCT9sP8oxzVv5gCAMFwhJYESnBaarnxWZG7VB2SQPgp2mZ146intAjunfVEJ9SrVdxKGCcK1nz",
  "key23": "4Mpk3wZ3DPpcjW2kihHVNGwXBwFZYW75dZEKMHJP3At6JeZpTqTXBEW3T4DJAS9yCGhLH2cKprjdCs9EpmxeZzdU",
  "key24": "2sktT5xxQvC7ahMB48RXFGPjaXkSeNjW7kQkgsKiPBARvTYQq6bpMaJGxWvYgKsZA1k4aE4FCkdCFa5NuYBYe9yD",
  "key25": "31gyrQTXuHBH8drfH1chwNEBo8c845is9MeQfaZJw1wEFnPLCc3LLUJTJYmtowf6SP9d3XiHXxcgygA9n7mA6YuM",
  "key26": "3XrX61trKjRkSjSLE4yxY1xy7avNdF6KmUuspiKPjvANWVFYUsxcAa8a8sGWo8NkYsXT2bSwATL73q3mwzL5Hrj3"
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
