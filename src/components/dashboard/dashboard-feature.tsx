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
    "5kfdeZ12LL3dnugaYRKVzyjgS2pDy4Rgxi7pbMpYyX6BP58rjsqJKS1oP6q31sxehSpHLAkDir3jhvhF8fUtGgdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Psbb85gRCQyDXuSRUQqZvUgLHS2pXss51RpHthjwTbY2QC1Mg7cZ6XTCjzhNQmsRNpVWJ1rtQEEaPvMaTqW6XKG",
  "key1": "shEsEj5VvugKdJMQMDkrysWArHEV33nUyneq26SEsZWRteJuR8mJ1bnfW4iCP3MtjS4JcHs7fvrdbcqqXAFRpcP",
  "key2": "3tyJEymd6Vcy945YA8StJoowCczfqApNH9ZkJUnyZdFTf2P1yEfrgmcLQm3tbJhtbZzpTQhF67BBdDnG9qrveB9z",
  "key3": "2MSEZzcmWHLyULDHDdqsJTVJwYdWHynvgxM5TJVBoqxcXf8v7DQpLe6FxJ7DgFYE14qPzYgEadAFWGpXoTP2aig5",
  "key4": "XPCNR9w4dXZiTp8ToLoLHvEwmqEkHNes52s4rsTgpg8uiVt2HBi5DpUzBN1hyy8N4GDHPsM2evDYjt1oLe4CRmL",
  "key5": "29X8c3amL8zqh7423WNB9UauxRZAgdXsVckcSewbvt2zNcKqVJC21oQvyrst9FhAKaKm4osX63oem7YfLaPb9YRN",
  "key6": "5JQQH1X8dqZdtMVUnbzDgRvfrNEHyc2RUFnWrDRT6ZiLK2sDd72NDJdMmsTvt6MjEKB2ba1pj7kihCCMUtqUPtj7",
  "key7": "2zb4sAdbVycxu13B4AZPPkbassPBgGnJ1rTzw5RuVsZDo9eqRrkBW6Kna5uDgKCP1xzMeZhE2Nh1poXmuMb551Ee",
  "key8": "3EkBH85tLikYLsmdBsJVdrugFBb626fGBqv3pzxEpu7Td3HEptdSF1SSU3YrWrsdbwngRuz8KtiZ9ogLU1Z3acdr",
  "key9": "5WcDuYrTRzu9kecUYoQipzrv6z57VFjRBrEW7KdGjAQcN7c2WYXW9uSsE7FnosxY88ujW4RgR6EbBYuc42jiqQUw",
  "key10": "2Ahty4gRbSVqoodfRn69bW2F3tMM6GFxLjfrqnwPyY1N524HLsuU6Bp7bYTwTGohMGibSqrSaQeUePAGz2vMHiCF",
  "key11": "4B5oiKe3YddAzyBr8ufUKDwyfEGcXsWpw6ZJuk6eEXUpfqfXGKvZUX1erJ5AW7TV8C7Cf9pM9oDhrUyPbAvKWfVk",
  "key12": "xeUgjiHMqRW5iF2WL9WDa4Zzn8qwtED21bAk4RoG4vMiEdrqJnqkjx2kqkz3onrmwWrwe4i427WrvWtykDBpJgX",
  "key13": "4RFBhpQRbGbVFgtRTkFn2Mg9Suth8FwgiLU8Qn8KT2KCWLBbQzowGJ9FP5pa4ta76VDrAJRzmAywvY3a7EZEqA8t",
  "key14": "41StMcn3cu92WiHh5EemqPNu5wBRhSqhLR3SXjwy9R1SXhwtQzZf42YpHss7BbJCteugxRzAKP3Zg3rwC5FX4Ryf",
  "key15": "5hsUpuTyYamSwkAiSbTJi2aPk6wXNDwcWYQAFLGTQKRTcK6bLY6zPF2WxjyuQizzfa9GXUt4CDfjNU4bdFJb22Qc",
  "key16": "4w8DiNbTkZP3YpmeCgz7vMN7AmoNKyfFZaXKZcJdZkHAPy3xRCUa9GQRDEa8nMQoPMPZtVez55JyHqHPSRMccRJK",
  "key17": "614ph7MPWV7WQ5n6C5SEVhYZLq2jBMTAeBEvJSjin2cGNfxxdEn5YqqopXg7JgBk2kp7Wy64BX3QNKMZp4GS634B",
  "key18": "QXgkjTBh48DR9ue1RkB7gxtjagH1vz4mwfeVuJYJtp5BAzhiThMxPm3des3oJcUwtd8dJCCKoSYS4zMqDquuB7g",
  "key19": "5hHjuVgYgsLqSjCfzeyG9MfKS12De3S5TXydZQZ8Efxv2W6LcDmC5e2VSDwiFFQeDvynqirEegrpFMeGoqujqHbZ",
  "key20": "5gD91b3my25UoDgK3Zk4mrq6ESYhwRVfkRHt4D2XyYujk8uzVVPht53zJ4oQvGzV2j37uq8wCHiFegGhHonSuY6U",
  "key21": "5bG8YKcQXcjeNzg7rwbAGuG4jW7J5ZVfgydGTHX6DEJAPHsDFcbBq7gN4P8nfMq3Z21CDKqwCpwe2FjDddiBBPcU",
  "key22": "TbZ6skVTCe6sN3n8MF3qy9unxWzVGKjVEwwzKyhb8ZPcWHZ1JX6K1JEJPJWPo2tmW3NYoj9ZRbYUd25qTTkJZ8Y",
  "key23": "485RKT8DZk6bpAqwZQ69QcJVsBMJziqAyqP5MGE2BKNcKQ6y4Ys3odYLTktJn2AqHWLeadH7WuE1e8ikWUT84ovq",
  "key24": "3Dy793SkHRpc1ZBNwJN3YTp77oggdwbeHvmqyVo3PuQUEN3fsvJCutdDVHSyv8YNwKjmJW67TTbCBgVN6iYy6gw4",
  "key25": "4HJ2uMx43BBQtBgBFMknFN4sFxtwDvAtL97tZDXQALpaCaB44F4MPe5xgcPw4h2VgvhBShpFMdFkS4ij4Z918H9A",
  "key26": "4xTZqq3ZsSTjbk7QUs57abnaWyJP8ByUQU6gTxApbP4eKzEpH4jMT3TUrLostcQKYfZmQn6RdsagokQGoNENCYsh",
  "key27": "5gz6vSHYVPCbVpBmKHVyuM4n2FTznd9yFVXJvW1APMAz1bCQoPjYVQyAbdABPaqfRVCFACFtrDhejinVijXSL3RC",
  "key28": "2ohbMCGo2hQCnW7W4dwxVABEVFWDQtTQHTE3YXZcBGWGEVsQawcAyYwreZxMRUeUz6hehYFfkz9u3wwEEvWjgzQM",
  "key29": "DHZ2RuWbBU1hdp7uf545b7Lo9kPeJJSgkw3FaQbZBhs7CdLGGbpCBHu2nWY21ZabDpwB4Bi1g4CWWoZ3o3EvjHZ",
  "key30": "3C7ftErmv2aq5cwJjcjyf5HaF9dC6BW3GwdKNBJCoFYCkGV4FLQYG5LdZu16kZkAoTmRrJtdcahVSjBM2zbwzFfd",
  "key31": "29ScBy5uRWytBbcph7GvspT2sfQ9hpt4UAHPK3TyC7rHj1JfbByZ3yyEd7o4i468iWAytmfNoJTwt1zzF2ziyMjb",
  "key32": "5FHRzqNioEK8pSmXSQjYfkeoSt9nCGfvPqrqVJJ4W4uU6wjrA3x6muXsBeBSKQdG6dbewwzC2GK8PxvXSN4Svu1z"
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
