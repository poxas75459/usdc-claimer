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
    "5aAcPU6oTTrWLL7oZwS883Va1gAiyPWFvufRFEYGxGJm2HAwB55pDRR3yQ4FMKWAPHe9vivgkFz5ejxMWMJ6oyTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLZuqYAcxyR4ozc75vdQCXhmv3j3fWahkYZ8g3dK3cmbPxuH9Z95qnvGrvd3ho4ohmQwK22f5i7MiEFAtSgmPEN",
  "key1": "2JK78hQqKNw5tgh3uHCzkW5118ZdeKHX8nSz1wBsJW9b6ojSfFg9F8BAMAGMRz5dc32JJrWY3x9uurwVvd9XPfPV",
  "key2": "5K9aWRBA7qjBZyKwGtQnGZgN5QavKGWiQtjGUHD7fzhZBAS9xJ1Db4euiVjifNRHBixZ3NFNCDLaRJJj9dj6VhwJ",
  "key3": "2New4ovdC44FgDpH5vHqMwQtZ3C3pLudqMzwDUtWzM6uwRC4rLbDEmT9Td3xmueBzFHtYQfMG9FiB3PW6JgfJShQ",
  "key4": "w8CPcGTx2DmWaDLsJmQ5wFCq1gd5QCo6xr8kJGvDZUj5ANecwPfZDG4zZrza3YX6JyaVEvJnu869C6VYbrfjtqp",
  "key5": "3Cf525irchav4KX2wvY9k8TciE3EEZxtqoX1n1ofE2ZG829d7QpCp71W9QU45d775nJR9VszJeCu7YokX85UCyyE",
  "key6": "3hMasJvDtgFj7S5SZLMkE9TfNixtHtd1cQMaSkTQCVNgxFCiYbzAuCqzGF17GQpuk2HFuRyMxuaGbfTbQh53CVb7",
  "key7": "3kzy2GtBxm3MPwuopmzvsrQqj12BNLWaQZrWgVQYdGkX79GmQH29RAUfmMyZXgfkCwKcoo11wzRPiMGkrW2HSFE3",
  "key8": "5TtU78h96uLuWWtAztQ852hEtZSCwytT9zFSHbs24HBFiHUsqRSsEjASik8Jmm2WSt2zgDVorxZfhodNQ4agJkv1",
  "key9": "TkX1WZW2wxEAUmgefidE4sYfAadyvbUxSGKNnz5k2JezQ4eNJuGduGwinu9uzPCuHTe8EDTBo473BaGDWsF8cKy",
  "key10": "4Cg2ywCncBrDd7uvYouc79SsAv7yqmEPTrpnarNnkXFhFLSDPLgMdkgxkM14kaFErZJuwrvgc9eYPzKDXTWHNXpq",
  "key11": "4EWXLYcrJx3xBucMVvtN7HhpGEX7KCXPnpPYkouQYSeDBsDFQCd26tjZ7235xDxUPW3Dm6gxCwUxAwv8wEVk7te",
  "key12": "4UjswEhBX6G65NcvS56VnCQC5rz4ndQ75KQGE3GEDmMjRWt91uX94wiiCN54BRqvU6niS3tjnSGP7qGBTymqcSeX",
  "key13": "3oniWzjJZJ2tvPCf18ctc69ZAo54d6HpuRDuZzivXCQPPNozvXb8EBtosKmFQdN5LfkdxinE6fnWgC2fgyVGLZe6",
  "key14": "2fGm5FnihbxAnKUt4cK6hb2Y5QsQBUJh9CSfd7TZKewz47gHqAgQi6rQSfGfjEf77dVCyxxDmZkC3b3DLi398133",
  "key15": "4SypGCmo1JdZY5AqhzsQHq8j5wgAnXoeCZJSP57J8rqXywX1zunyCvxPuWyECPnQKF9ueSheKZL1QbTwNfScjrUy",
  "key16": "vqddDQ9526vAqBJAMtiCae8vo4ge5WRTV8Cvyk7edbBdWvf6NjjDu3d2ufjcLzgo88qteB75PGeN1zZeyiSpWyg",
  "key17": "3aXEqbR58dWiUVEgAajkFJDEvNZK5DWfkp6S1NzjAyfFuUXbSBMEXNrAHjwhc22jJXeqrEMeQ1Eckfuyy5JoQiTY",
  "key18": "4nzosUzNkUZrhG7y41Wqu6ZB6UBcfcRpTyhPo6sSYUCBZ3VDnM2Pc6L19MbRmiTiePyJRQQqif9ziiPzrbReK89u",
  "key19": "4Lysz49xFg5oCSnBw33TfWTzsjuMW1MoCCUUsat9k1En9fiueYNUbp7En2qp8SshTRhvufqmyLVga6f9JoZfCHdM",
  "key20": "FreR2XNwxZBNdrALhCJXX8YW2rZVzt38UCydKHo8vJ4WjjWFCMJRVtFWRTtAgSWe7QKVSgjpKL1SFVfaqpHsCFM",
  "key21": "XZ7qCCeXM5LuqkSZef7gQbFgDhHm2UX9ktcY2t73HmABfQspWFM3uT7yqgdTHVvjtPehJdoYbEPttYNogo2QTfm",
  "key22": "3hwEzPCAehHALFGfCjCHchD95D5s4XuNC37CjvVqG8RKbDVjXeuFLLVFGRjGJeFSwpkXKLzGEf2uuDXgWrU8JuWx",
  "key23": "51tSaonMuZ8rpByp4M8PhJWEAb3KGCTENVnUgdR7TJgXGvxSfMBRYhHdbyTYg7X8rzyTstcbvJyRurFqCehN8A4L",
  "key24": "2CAbE333bNP7GJKQNkVVJ1SUCVNfrUghAHt8RECyruwuy47iFW5o3DPWfUXK28Gm2unbhZB48LudbCW4zXnGjjwJ",
  "key25": "4RG9tRdXBwyZpupB5ohJxGa2owB9ArUMxs1q21XnTPTnGtKHhjW6i6P9PiuDBuQcVYCLEEyNc7PRgtCDM2tuTWVG",
  "key26": "2p9u6cQ55Cki8c28GbUf2y64r3imxgFVwnkcpCVkvmz3GFhsN9Vns1tp19JVsWYHFvdExmTwHhq1s5Uf2cFVws2u",
  "key27": "3YVdxt4V5dMR3Hz8t7acdURVkh2uavKtnq3tEQHbfuNFFfj5dtpeTkrFWiQHnhU7B7u9oUmu1GxEBBsTL74S68xf",
  "key28": "3BNZKERw5BBtmhwRMXTzFsygHSSHDs8hNKbuhtxefnkqXJxmkHd3PB4DJbKJmjdM9xKgi7oWjJ3YnjxyKQVpmKzg",
  "key29": "3Rdh98C9xkRqKNadmLUcBFvzWiEzarMvEzpzyWDaaRdKrY6VjzwBFLRzqohgqzZrEoGLPt9G7UKr2X8CKuYKushu",
  "key30": "38oyq9GbL1WZmqeMpx1qoX2YZr6yC2DMiFQfWsKWkxe8ASyDAHZEKNdxjrdvZauiSkZYceQfrriWDofZhdB34jPP",
  "key31": "29EMqW5G5t37YK8i3BRkF3fXFvAgk6Mm4dxfsHDpMMpyMffDv42M82gVBykUQq67noqn2UC2fW4GGnpJR35svp9t"
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
