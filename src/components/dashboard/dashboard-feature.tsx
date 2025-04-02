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
    "MWzL7ah2mDJoSGofTgpu3pdZf1Sc8QiZi8ZGBY9FWSf5Bj3fyFn9N73NBGR1w88oyfZsYGdqprBJRWthcZ5zCya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1W1L9HhXDzdzJXEivo3eMK9u6UngLmhds2G56PSyoqgFmFTvi83e9WUye8DAwtmcYNLTfVekivr3pjSKxXkDjA",
  "key1": "4GoXpqK4rymz2nZeBZY8CMKcRsDQqteXJFVNi5BEWJcn3VpYaEGkcjwhZ9AU1zrZatLUW5VwwKwL9AMyw8Zt7guP",
  "key2": "2xt7V3nh4MLwpGn8HbmAMy4zdkRV6szdtZLsZh7PdHhip8yhzkvSgkZsnWjeepYdXiM6FbTCJFjcatE45YuUhk8s",
  "key3": "yxrrebAHeGkZtyWQ6AFn7dUSXmS4X83NvKBAJaSz5UM9yxpA6mqqGJ3w3MtsBFEjQ5UEmH2QTo1zaoPAaDn79bs",
  "key4": "64jHZFVAu72Vvo4xCWcMQS3ZAbY2UvMmtTv5tPd4khYHkwewjGMPFFKGuBRr388WfTjNAB3TomLLFEvbMbkinvsY",
  "key5": "3NQxBrd5t3CY8v6zEHCTPSeUZEMUraqWwjRtRcpaA3AtbTosEWi5kGEjuAvN5nCUW5rzdr3FYBoNKbK7LGMayKgf",
  "key6": "419qNjA2XQberyk4J67QV4fEPdvCV1QQx5C16ZnedvCQx3wXrLB1fwdsNo4PdehUKEdJvYXkrvdqJ2nXQL52S8KF",
  "key7": "5ZCkvo5uPeeTM9oQSKNmFhRf8SoMpebSojjE7AG5r14BBzEVAHueUtWdqdygCxfW7BmTrNJDgiTseaMPv82kqxVd",
  "key8": "3in32zDLXhBrbAFmdQXJcjis8XQjECenwwrGDHah7zu8ZVX8ZqYoQgSw7AFgzzwoNdnZcKssagHarg5dRLkM28eB",
  "key9": "5xWwcBShNxEBnLXP9gu6M9jdg3qHkzKDoPHpXyfmxZfUwEk8KPPGC1xpKcqzDwYtQTwudWyeECmTDQajWUnKgz13",
  "key10": "svgGJ9AzWD8ZCVSvu38sg85A1YUbWsu4Wwzf4hV3x8xDgjTHF8Mzsx7X7dX5y2czwRfrq3Rhug9v1j4QWKGRG8z",
  "key11": "5RASbbaCbgoLkJfysyDuaAA4vs4RBUVnm2cG8LZWvFxbheNwGVw8Jfyp6HgS5LTzcjpJQPeZXyLNTpoaJgCf782o",
  "key12": "3PxX2Gt7QLyjVE4qsjTsrn5W7GC5vzAEAucYQoSQeaappqVcSVbWQxPKNP1Axj7ibPfnRhGmDS7wWMFDi3hx5sPg",
  "key13": "5DSY53HD46kXNqXzFJMDxxaE4toSdiGZzoQuAzncVgsaqJ2UuiDAErF7MDk9CiZnavYt6qKy6ngj1v4Y4YKgSyC3",
  "key14": "2JZgFWczytb1QaHHwPi7y4eCYwPCRyMSFqkAh5xUPaiA7ukjG4BXrN7RJyyTRm75qJDYKfBhbRYhvBAp4mqeDhk9",
  "key15": "5M6gA3vS7fuHsdN768rehxQya6pqFRmJa6ANFuxuhAgVrtmsP23HrxaPoktikhu8PK7d11Zgd5muMvWM5vDjoao7",
  "key16": "2ATUGkAAF5JJ6s95fuumgELSq4H6GzZnZcJVNLvXzbhoN331MmfBF3n69utoEFRFRV8xvVAyVovngaYSz6Apq2YF",
  "key17": "5DPZGnULXxsaR97jWuEyxDy5EirR4n3PgYyNBffndKEhC8Gk66KZAtf5fALe6eXjCSTbvjmrCsNeYZGScNX58AzL",
  "key18": "2TqK9aENtLekErY95RowoX2hcNR58Sbxjq1hxvBJWBvniURNsX24dFjF9KjMLnQuXGSaK3MT91ppsRyRYTgqSATa",
  "key19": "38XQDYEMQW4VHFxN5L7Jx3CSAZM6q2Hzqmax8MNeHK1xRXk5oKnQkLGnKgTXvqZAjmt4nqNoFHNfejjkAV97K8J5",
  "key20": "XiVvTyHpM4WU1G1oT9iU1QTdGvjgDPmwYFdgAEhZWHfBhTyaG2VT7qvGEdmY9L8cmsiBmNQafCRNoqvTxoKa9km",
  "key21": "2X9ems2GnXJmedq6TFgJ1fiuBNAVK4LepducnG1Sn83C2STNCYNWhNCuoYzLebwotYZ3rmpi73onLPUrYDXhiuW3",
  "key22": "5uQgG9NtfbDpryYrGtU7VR2Pe6BZLs4s5uYBr7KTPqG6voq6fbrCz1gVbUPDbBU2DanfhtYoJcWyzhjya2ztSDDw",
  "key23": "3aw8tBpAGNoYAgZ871K8ADJsNRgKpKV3NJ52itm1iC9d5QvFvRZvH2fntYCZabdL2DJQYaVZFMPXVLYReUXiufv1",
  "key24": "3xgWsB87WLqgvUdNUiPnNh5chG6vAWZH6FUFUVv17Z5LyR2mo6KYpjUAoAqx8BRTwk3gPQEBrm2mthScvaupYoLJ",
  "key25": "4XjkT1gMQeLAW2ZHmjYAkTzJnu14vkr3K4NZZVHT3zcJNmuR4UamWcWn9GDnE2N3J7V4vbqk9YXTJ2oCP2sQwuvp",
  "key26": "6fNhjJ5egQdvA8111CtdcxHdhxYLupozfGBPSqx8NAG2FiuwJb1yDrH3Xrxxu8bRDQjb51ahfB8A6TsPRWH6eBZ",
  "key27": "4JAW1N53wLVv7WJqcW6LvJZ1ds1ob9tkbRfUHUjUcihiJEevXhRe6vRQ4DUG7wqWoueoCv9jSgBnQztbsCfVJoo6"
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
