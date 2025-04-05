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
    "5jWrSnGxrGgp4rfpU7CW7DCe72Ga7Mjh96CNEQeHsEMxQNmNW78g1fchb5brvgyJRk4VjLd779qJwzcn5Py8MJWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XhnMB95WSGoTpKUDEmzj9NbULsNnzX3pKVU6CHLmURWRpk5YoSqcEMx5zTz4jSs1enNA584ej5cdFM2LKzFmz8H",
  "key1": "5ZJs2FpjbEyFuuaNXVbKngmBgteuyrjMjkUBxsAHHNegqGGJC6i4CZ4VhUHxt2CqMFs5KDK9GxgN9e6XFMtMW8Mf",
  "key2": "3WjUUecdT4gax3rfm3kGZy7FQnMoUWe26574fA765gA9ocjeemp1B4pFDAbqEvQUSy66hfHLjsqntJDKZ5HXvmPT",
  "key3": "5voDhKhneosyr6fJAeyaaYp4CRBVzffY3shPZeWeZWoDjNP22tLU8hqrcETvcPjw5xeE9RHhQMPm6BzbWqydsjgP",
  "key4": "2GZQTE6dvXamrNsxLAnY3RKWQ26Jq9qf5RGyy6CNaiKPKggV6AkRMsHBt2Bb8PKLpnwLdku5oNh95XLqyHu5GyNT",
  "key5": "3tGxPjBGZQiF8u1nj7tUZfV2MT45uUFbLj5YZYv8UzeMRcf5hHYuVXQf9nMAUeaUzhTwXGKvJ9WNYtA4gNMjwVXD",
  "key6": "3qEw4D9nMYsA44JmT5KnRuSFJAHBKw6w9rKJmbgdPNdBckZKmAjJLBfRmSfxcWLczbrA16aFkPkDuTStVnaTsDqd",
  "key7": "2vReVG7dUjqk4cQeoRrmAZFKiyhU7MvNPia7JFCVUASeqs8QsnGMUqueuSyEinGVMG1yUsLbkkLyXHob2NTBFJPq",
  "key8": "VBuBnu1mWffK55CJpK6TL6xjXfNtotYyzSnFy7G7W6Sow7CXCfXypvXGQAKnuMuLAX26FMBXbXUtrM6VZVneonW",
  "key9": "62wiKci36EmjMnN7SUTgK4pd2EGZcADWzpLBWF4r1XxgpkVP9cj2hYyzYwMoWx5EWgKfQgQeH1yvZUyDToj3jocP",
  "key10": "39BkVoWctQ1JGEXs3k5ep8iFkjCmSm5T4Bfy9Fo8cH5u87SPCF83S8NiUW1LhhpoEArXsxWvNoU3gRBRyijji3A3",
  "key11": "5f1w8LuZJfzUy3AdvL3Z2gXd1PgPd2uwaykJ3GhZHBFPMG4Sn5t8qVqsxgRWyMRpKw12jmGW3jyZHu3qZrRAzYG8",
  "key12": "59er8e7o9MFUmARAHz3YEMioRVK1GraDxK3dcWuW8r1pXVcJGBTJ3xk72k9yop4YmFxJVcZKapEDzqj2qvRVhjTd",
  "key13": "61GxbHWtToRnyvgPiDZ1ZUcKECAcevbGsS9rJ8mCJnAUp1xncEWSByJaPJkxeREjMAgfiQaU5hP8KgBkC61M7tiD",
  "key14": "4ymPB2cYsrCUGSptqNLsM9ZY1nu8uN58n7ZrgdN1iGfT6UFzL3e2FRfsVY7HbBT7xpkNX4Dbf4ZifXWbM9Fojhp9",
  "key15": "3h5x97bpSMQMRv5S6RxeEuFPGabP6gq6qePZr8kYAimkCDCAp3kCMHTqjCqJy1UvZiGPLDPG4HuEdakz3qRZ7dRR",
  "key16": "5vDGNKcKxG9fdZZVCjqrVpg5DK2XDg6JmxDL8PxpbF4T6EtvFNAVafyK7rJQgh1J5Xawur2WFEVTWEQkefak58fR",
  "key17": "2iby4WCtURygapkdxpKLsFEG2afiBhXks3J6832kTy8XmfNXwZyFMaDN3f8Rfb6nYsyQABZGeevNNd4ChtrGBfUY",
  "key18": "QuBorhLFER5zcTzex7QWJWgNCpH3dPRaVLPjiWy6QBb8wBmyKjev21LiY5ixRFSht6RqpWYQqUAfFc1aF6gzPJe",
  "key19": "4yQa9qwdgXTCid9tD24CJZpvpuB1xMy9egr8FKdHLFuPjeJaD4NPD34Qszx2GNspSHbdLkyS6zZ12M4T3Jx26Shr",
  "key20": "3GFxyuDzFSL1boDaogukZbVco36VhoCbqtAkb75yHikcFAHPUHG3ASS1mL8fWw2BCzGgMrV7c2J8WbDUHLRexA82",
  "key21": "3XPdqgYNYf3D6KKn7imKsRYPVfM2VYgfWu7aTZtddpVG1cFQuV13McRJQHA2rMthagRgtVVoFi87pbwB5LrDXBmy",
  "key22": "5jL6yj1CG3BTZ1de3y1MB14VkpyeYDtX4fwmdpvkhicdQPrA5KpCZ6LU5LoSDREHLAoNP1fu6wGVDNWMdsGstdvW",
  "key23": "3MtvedTGr71SQPN9QG5xH3jNnFZpMnpjU6L3FGZfvYi1vP3EqZoFbKb5VMYc4MmYVWLHNnmy8mVsooTSir99kbK6",
  "key24": "5EC7qgfCVUXJ4ffQ3wZ7wQ74Yvm4Uo6f3KKxGuJ31s6ZyEzD4BXfsmTpTg7F46mw8qKLcuhmBnoBjSuUyGjHDx3C",
  "key25": "43tyD4hFVD1wvJwrFwHrMZFUHa64JDQXSQj7qfy8si6GY5eCuSnTbYbb4ZQrWKG8ooKHNWjkkEH2zCVX5CaLjtYz",
  "key26": "4Kacm6VtfgQPkvjF3dAda5MCrnToUMvT4H23d2gxfvXbQMP7QZb4Wd5vFNvGF7hMvKHqu7pbB84PnTD61gjxke6g",
  "key27": "5jdWAJUc8mG4ihy9XqGeDGwgGYfgMEZhDuyJjEqaoZsaKqcLr75Ae5oigWiuhYyR1u7voRssrvekHoPp85sYv7VV",
  "key28": "4Bi1iUzfQR2D5cY2LtDW9XF6CGruwrFqJfTLXB6rojh473NZQMzAYPvQCFD2x8m6SCCBJz2EqduPpyE29pY6FX6N",
  "key29": "5pHKAmWofY9cMD2z5zhTg9obcJczqh3ytqyuvEUS6wrCF8Q238i2rJLEa5ynSTGMt3gCHw5hzN6nhyvaTCygDwa4",
  "key30": "3bFppoJwYuhCtM2Vi2mk2sUfA5Hpi4XbgXyqmisR41zobNPEzB1EwcfgEzdnSZcuWTXQ8cW9yKNu83wLLFAUptEc",
  "key31": "2VzpPicUXrhEQifaw471kmmx6JuJmmAvrmuWQBZC4MCn2rHLwoTqsv9ckTX5KDcMf5NrjAuZa5C6sLaCLe1WLCwX",
  "key32": "43rFnEHpSv8FXW1k9x4VxBpeYSnCDvgQDt9sD3QVNbwexWCSCNdkoZNYtouMXQAFpEJtbymJr6D7Lqr7ejL1D33y",
  "key33": "3hxCN7PJohXy4a7gfrWaB16mBGbeLqjKACbiMRoc94kqiNH6JVSXJW1Lar4NFqFNqx3P6M5gFJN7zHUzAFHPmUnd",
  "key34": "3PaNFpHrnuFyKxF6cjrEfH7feZatBhbAbqG9uUdVfMBcHgc3wpswWHvJFbT78KhiAJF8fY42R45duocsYP3cLFNa",
  "key35": "4Mfeigw3zXgHbuZTA9bpgQ3YpjCHUj94UAmfi7Uhi967MxE6GbLXR87X4hZis9kEg3CaktXBfB6zYfRC2wrSRzSw"
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
