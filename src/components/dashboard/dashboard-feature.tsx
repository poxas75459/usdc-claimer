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
    "2iDa6cRgyvxFN3AtDhGMBBTPftzoQCXPP667fuH6M7M76krU9wVZBQWMPXvV6dTH8wesEnNuphuvZFgoL1KsdsEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wpcagzv8NRka5rwfQjKQ1RwYyEofuAezhc98mjZibt7aYXmouxTvPTa8zPceSkSeb1Vt7U8QBkWJt1oXCKnuCnJ",
  "key1": "3es16Gxbp4q7KGLSj3k8wSLzNkF56BTn9nrTGL5BvDfwoN9gLUUB8ULBDoaiLSKP6UzJwbYPJxgphwUBnkofvwQg",
  "key2": "3YC69cKam4xZGwkv5Xb1GzPKQ6En2zeTEybALXV29ioZmFMQGkPWJ6EoCM9w2TShDvTQoQpaYVQw4jJHLQ1XF8hC",
  "key3": "2CC1pW7MWudYAdsPfAsoRGjxqwkVEi7PdudKJT971rG2dfNyjM1ui7u2iaf1mbEFLG3ZthqqvUwyUdVdRp27nSyB",
  "key4": "5Q9XvMvJ56iRTJ1bBMLAq8vXTkhRAeytBQ8R1uS77tHpqgiBmEj5soprR21pvbcGvoGZkrwjMKhAuB2XaD1e2NTt",
  "key5": "3VjuuB918T8s6BFuiiw4xqbVKTfjQMR3qxHB5gbgnQJLSsB1BpRqpw1G8ZyoVCgNpomumXFmNtNtHsft8SXp3hsx",
  "key6": "5bx1qdwwUWHsVqxJ9A8rEhq4k3qo9Jm4whCKKQ6r1GehtApDvCzhKTMPMkknNsd3a692iufPC42mHiZ6kCE12rs7",
  "key7": "5dthmVVRUNZZQH5nUdFAyzK9MtVNLVcNXLG9yiJL2jPfE8bHwHmbFpARHq9TVMTDegtYWat3P6KyzjSS2w8VEfDf",
  "key8": "3hvaMhq9ermKtZ5pFDhA7B1b4GmvnNTWFXcVFTXkJ1KG4qg3KVVjjEKLbQxpj4orbCBdYEBHcNKSKLJCWNy6AKL1",
  "key9": "2H9jPuPkV1ggEHYBPJV1dj9oVMnNBSckjeaKNgWh4KKXtHbu3SGaMQpqvR3pzWz4eTSksLa1LpBtHtPPLGwZk6Qz",
  "key10": "3ym2Ar26RXGPKrtoYhbJwUp9jpZ36ZwJmnhsPEo8B5geeCJpnUB6ZtNm2HPXuwbeugScoMeFzbjwgHFjeYRpQATk",
  "key11": "46iScDv4r63HBDLf6rs2ndYWQByEkKeMikvg2wvJf4HtzSSFu6rGY4Pv8BGA1b3ivHjUbkBVXPM58EyBuP39mrkx",
  "key12": "DC1FjJvXznTQ4r2SR8SDWrGTitVcDZeoNg2qnFLFaRU6SEBUgzc4WZyYzxbFmiLyubk2LV5yumCNuphRtjn6gi4",
  "key13": "F7MD6MjN3xUrZVFk3VFAeJ4YcBhNVknf46ijg5HVfxttA4gJgBDtznEmhv1vZ4tvUbKjgs5pZqKFER9KodzKqqa",
  "key14": "4n8hXTnvthXgTSNK8gMY4hkm2QzcS4VjiYApQew4f3t63W7Q3M1XJbg9gXE8GE1JJmfvYsm1NCihoCjRUBJruzoY",
  "key15": "2sBHp9pxfEdHraNkf3jqe8NXm2oorMbvKsxhHh46H2eQnBwaGE5Cd35MzCi3sGDeb53EeU2xKvmg6QPMJzNt8X96",
  "key16": "2MYLaPpsUA79jhsKmvqp3E8CfNhZKD5V5jCMy1sg67avoqv5AcqBJssr2YfUggb6Z8X9SbPSkL1Wbp3kngLr7Scs",
  "key17": "2pnQN4SmzzgB3R6hUQSNWJixiZ2M7FKDQcvCZft57rMBdmkqnpp14aHDSMY475bCGcDwyBCcrjERg1ANnJ25iUi6",
  "key18": "2BvLUoq2SuvfpQ6BdAv3JHyMDzYmEQ2tT8wj5ZnJJu6YJ3ePhSPHHfoRAvghtELdAn7GLpnJRCJ7hzAjf5BNFh1Z",
  "key19": "mRBEfErLwHNwDfFfpunRLPpAZBw4pCiFcc8fjuKtJqX6c3LuqiMPYaMqfmNr1hZtwrZv494gGJFWBEuo118AftY",
  "key20": "444C67U6n8MvbF4u8bSLvfbfH4EGEfed9FE5eaewnYDAtAsMx6uRNoT3ML64dhnrQF3YXZBoQF76LTgKY2pFjr4o",
  "key21": "4F9NFRuGhM4MTCjXwfyojVx3RhzD29FoDZwuQCbbmYpfLgebrZfLDhpUe9m7AvDU6qz3Uan1uPiCK2TYeUfwLi4K",
  "key22": "xk92Ksh6omZ6CWw22JN7xZmbzqmaZCSVwchrV39KFo3WX1vzijqYvVDgJYKVRdMtAncRwK5SzKiYErKWcjneZ3f",
  "key23": "638P8QpGJaYdAtPRbHgNp29N9ndVPUUc3yfQnYSxYMop52JvMbVbpsSVoxbFQYkLCr6aPnHiHjHEvBHLv2Wuvgj8",
  "key24": "5BvTaWBMn5w3eUJqoyaxYJCaU5A9VMxTRs4FbcT6QncRRywxJqNbtZBr47wSDzFLydyJk1YygnuqmDgzjqKcpKrp",
  "key25": "2JyrBrgYDJEKxbpV2Ej81VjWSAWoxgYHLTyv9pgjsqWfLfXBdboS5ix4WfmRPMALC2kdePRQFa77e94sb6UW7c8e",
  "key26": "1VeifUkg6hf6CKxh116ivJLrX4EV2shfXqTQAk9jmZ6YD7qVcMG7jtWxmKhwk6dRwGkJXdHBvv5WGDka4mfvWEU",
  "key27": "rvkqfSKqzhkn1hk1Y4dqhyMNzjNbEuc9VfUNqjEYUh4GnPWdfytas6Q5nghNJGBvD8LRxxBvG3mYTsWm3w1PFaM",
  "key28": "4LdCUC6G1J49RF57bWV79Ln8Er6ZDmqfvHAuvkryxxSp6riZ9aNE2m6pPRUUFpj8GQEuZbixjGdh8VbXAtsLcpsC",
  "key29": "3m61oRgVVjZj6RUg9jF3fT4VdojkomY3UetKVAG54PDknsWrZvQnumqFsznW1EKjkmJ7qbGkrV2UuF1xdujccQog",
  "key30": "4Ej8Mdmpb7aeyJdWFqNyey8HnuECXAzVc6xZfRN6HQsv7uxk9szG3SjByqVgoofFMvndq448FFdzdrPRw1HRLt4Y",
  "key31": "2anfyfJWqxJLHrMi1VURu9FQY4xZuGodT7Y9jYsrwr4XZ2PrZD7UuV2tLqf5JSNQjNNLkEumyJrmXkTPPdUEaUDk",
  "key32": "38357TGS1GCfx2MYTtxSPK7YaYhcEkY5jZqeXCqe7T6fyPLxQFDJziZxk6LeSCtUnQjSG71FXEGZZReMZy5AFaat"
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
