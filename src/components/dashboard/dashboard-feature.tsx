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
    "2gHqsXeNh3TFEdcrw1V45VPFDkW4m31m2N66sP5w3YyYvsrVrMumt8nENidXygPNtqvCYRXds1jmQ257hkMX7RKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diJdNMb61z5CWzrXfn8FkqYrd7KqjrJhrgcPo6L8kfFS3gpLT4cb71zFdyAD87fSbgaXZwW32ArAwNMqJrDLAAp",
  "key1": "5pwwtezG5twWfwMqa2BEFsYUJNnR68Hjt6WE4U9y5QaThyk7B6hTtXPDrR4Bn4GHgzUCyJHESyGNsXoqq4f67N53",
  "key2": "2kaTsCMC2G6TRE7GGzSon5giC9itKEY97NANuamA25VoDzpbXnNjzicem3DQZmeHctQKGkxvcDyZ1rWXERxUncBt",
  "key3": "YXgAEW1ZJt272CYuVhcHgGJ21cQjfdDCN4rpG6RF7uAD2qGpNNmNHzH2Do5gDEBNLeRhEBRBK8MQEcUXrChDQi2",
  "key4": "4mgRLfndkdHDYXEehuV3ABMfQpqaLZDZMnq7phuUCvkGWyN9giFpYXnVHhsojf3oNcsi2KBFnziHopJRCvWgmnFs",
  "key5": "kaALmnbUWLSWpVVuemXe3EA2L6fqo8sfPDpxCpF6TZWvLumzjVgDy3gZ2y55r3tLrmSc6EKneDrcPUX2vP6Ziti",
  "key6": "3XMu4nrsSKBKS4bP1wi3xBU1P5u3tJUYSPMsSPt5AgmCtVcWVmTbf5rMJxtgWvNUyKvJyKFMG62gHM4PWvA2yPFp",
  "key7": "3QUpuNZQ2DxBHB6kNGeWnbjxdUUcQ7diCobLo8KFYjxQbEECUGUVnwjGww2agnW6i1UV2ufkqpVKbCUMF4pWaeV4",
  "key8": "4FxThc9TiRnc7HmvT6ahiHeDLRrQSoo1CfStjBNSVJ9g2MmFLzDkxRUB3oeQebBBRxXdGGK7X2Faw8ET5k8uVgfP",
  "key9": "4CuCsYfUG7THQczdemNXtXjfzjC3qDCJYCuWxk9Ribn7s22RnWmpLUiYDtPGBX5JtT2LXG4dSt6uPMmvFq9JQ8d7",
  "key10": "3DFhSTR2VuLjd1YzJzceG4n9JMjyHp39c5W7672tmiMPBtEgSxdLHCWrX2RbmXmfJJzLwQngPPYnay1NWpJZs4ie",
  "key11": "4FPpxEQCiXEojJcB3LDWkmLwLocadSVz3xVgTvGeh5DfW2Q2qFGNufohNjJ917yAUDCAvhucKU91VnX6idpBqesn",
  "key12": "5mCCV7P9ExtggPpNk1wba99gTiJfZJThEP6i44qqaV7ZJYXbhttmB2ExqYmfLo9vsYJxcCLAkgDZAp3iFzdR3qHh",
  "key13": "41GNrDe96heHvs5piPpxqQh34C3JuDTjR4oDHkF9eZmYsKsLe1DG46m46NeeJFA1G136N5vhsoqA9K3Sbx84HB4h",
  "key14": "2Y3tNjnznn6pCK9VdPCimFDbs8Y592a9UZYP5JkXMNBTQk5mvBS3gMPi5owbQt1ue8uBfZSHxHjitUEwtbDmHzPy",
  "key15": "2uMP2oK4JF8YYdCb6epAqeosAf2AubFzWRB3DtDywyJGPpigB9gvKDsRisLK2zHZNMvHCDesDPNzJK8EVocxG5MU",
  "key16": "2E5s73ZFBky3jmRzRK8BExdb6R3mwUR4qdBB4H2qrN41bK8SKf9ZxSnFBYArseLevUKwisfvRpEJJxbsZA11MJL7",
  "key17": "4zvzrrQJwsirushbj48e1pg6kxTbJq5exkyaCarWC9R4AYUQgj6EUnA5DRGtr96iv8B8uA91dSYCLnrNF5LiujPu",
  "key18": "5KbNLuiaq1Y19Fn3Ugs3YZxnHmLvStJUsEuwN8JD2dcZj4tCvKX8khLi2LLkVRwsikM7cVB7aP9KpYUXdXG4CB6G",
  "key19": "4gZ5y7oN4hkPA2YBYrQJpZor3n3a2kCBatpojcFgVyp2kb4rHc836p7NvbH2UfeeMjkZcF4JqugffqH31ybA6RwL",
  "key20": "2PMRGcCSxdjo72zDWpokK6iF3wx5d8inDF93tEHorXesUdPvrRgSNi9G2dF81mFornwWiypFvt9J8ihASAZGuVxy",
  "key21": "243UyS98CJxiLTzwVkwhfnQ9CbCF2LAHEVmjyknnZnKR4DGGdpWAMn2aFLjCTGvAXBKhdBhVKhWCAGb89p97jA5m",
  "key22": "2nntJgZcAv5HfR2MjcGzQ5yjsq4NvV5gNQs38srqd7tiMW4qTpJYnRwtDbwJ5hFpDU9kwoYWPaBMfYgYB9Luk8Ry",
  "key23": "8voUP42KN7BmN3Bf3UeJZ8KkjdmifdhQaoMnTTHJq75cizYgrbiuqTjcPuYk6RbQ83eUsYFE4nKc7WhcCBADEoM",
  "key24": "4kewEduWBLLVoR8rN1ebgzMWLALcH39nsjLxDqzVgTu3cfPk6v2VGRHe6UDXe6juKvmSLWHQKSW4rZjEjiwMSaan",
  "key25": "2cSYZjYGphRNJL5kvv1zAWq2f99qBjHDYDDVX9kMB295dyisBXqwUZB3T3K8HybAWeTReNoE4iSyZCgUFuj76YCk",
  "key26": "2vvn34HQCcb6z6Nbj8YJBveCJhnJBQXsiuk4Dy4aQwb3MWUSyU9iFq1ZKd9WTXzQigt3ZaTCx66fZzUg4mrbFMbD",
  "key27": "4Fb9Qu26qxvQ3do9goeDyGqxMeadD3L2Ltr1rL5fCcQSsDGKmtXKA7xTbdziQcgQPF4CUw7KTZqjYAD6DCbZocAu",
  "key28": "3nMEfvYQyuqDqTsZHb9AiqSEW7nQ3c28Tj7QD4j4W8bBZ4KqqBd7Ys9irF5Mwon6faHnghiEK7hDj8nyvCptzWJV"
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
