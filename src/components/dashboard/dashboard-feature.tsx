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
    "ukJ2oFKGb9qSCkpAqhoCX6vQ93q6u7ZG9Zbw64Y7zfzZVXNPux9drYdCQNDHhqbsn55qjnusVcu2aj3s18pckEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynErCPzYG5ZsXWZqAWaeZ1mENHxWfj8b8XKRSBqzY4hAWep7dpuJQQ9oSrMqw5SU7u4u1URMpweJUEkZDH68iwU",
  "key1": "LGc1fLKqXETHrAMNwCnMVgZZfnP6VgY4rgwY6EQGQZkZdaHjTLGKhgEEn3WjSv2RSXtNVpLKZtEgXwh9y7LzKuF",
  "key2": "EECxzzmYF8A2pxx4LH62ADBreWVhbFLcSNTsPhmYgruuJG8P5NKxYATk21CiVJktJjYYvWbqKzy5vCCao9fPNvX",
  "key3": "2qjvtmRj6XrSur95Z37qMUwUu6f7ExvY1J413UVTgZv8Z4HKer1MCCDUxJ2Vw5bvmcfYrAqzE7Sv4fgBLueMrqYc",
  "key4": "37seK6EUuFGUoWAU3FzipmdsZX9Vmqr5JXEt6EVTkdSHrZAt3Ddk85LNGQuxVgjeSZCF9qMdGedy1pMYQR8JCSSQ",
  "key5": "47T9RBKKh9FNJVLYKW1tm8FuAnNT4Ziv1ES8YPrRg4ePX42Ddma9jHk3RpJWRutyHQDdDfi1dhnA1hEDi5xYTjPp",
  "key6": "qEk1pPmXb1XEpUuoagzfC8prjdaKgr9jS7pRffHYg1gDboGHS4P3w4Bhs1Vntj2sQjAKaooAccakFfvvpy2Ximz",
  "key7": "5pzkAVUWrad7MSs6UmYCpDcBc3g9a2h3DTKwnTrgMgoTLUbiMMm2rthTspYJw69HNiSAUSJWcH3r2kJVZ7vQXfb9",
  "key8": "4TDZ6YZGbwCJFaHEARUmFDAAkVQHtdztdC1nYEjPWvmf4HcnMz7Me8LQXykvcfoeW3n87akfmATQW9wiBjHGfNvs",
  "key9": "3RtBrDrB2ebdPhnLBwiSfzGsoRydxagyvSD6JMqmm3sPgnBh89ME5L7vCv73MeYY3Z6NAREBFhPXKnpLb94tK8rm",
  "key10": "jfUtrh5bg1mbqonv9EVRUgNT7SqJ3eSgvyMeucMn7QpWvXeNZmYyV1Hrz7EKNytk97bmFjrcUdnNqNnZyXkwnJK",
  "key11": "3EUiqbhQaiqsmqe9MLp4wkvE4f2tjmUECx2sit1yU1MXaF1wpf9EfRo1H6JxhkTdj2ebQmnbE5wJfmgJaWaufJbT",
  "key12": "4fciaXYvERmqRp91avYAVBhiiuGRJ571fkKgNYnTPbK2ZhWpHR3TkR9wR85P2qnxTEzLdq5a6s3ZUUan4rW5SMxA",
  "key13": "2tcqmxk113bTf3DWGDtTWraddZdXQoqLk4dbHXzoqaX3acQm28JejXShZJmW9tpXdVqNFqDE1GR84zvLR4oPr341",
  "key14": "65KZyZxjodkDWnMus36kAGjupLVCM82rr8TJ6R2k3B7Pba4exRJiM9mH57BkXwijnFafHLTrN8EhE5wZ4YhYKbT6",
  "key15": "4EptX6dMJeQmEwJdnVGUYQUaid141Pu8md1x6RDcTHZqQqWpr8BF9yZDMGmuNR8KGeDmpBjBc8gZ2AN6pyAyLUVo",
  "key16": "4Qy4xDvATqQ8CNByt6o8ocmSLEJ619DHCUVNKZcNbyoaMqmLcsqivF6FTvB6gg9JZUkwvyt1NSrvked4mDhwTuqU",
  "key17": "3eZYayUsF7g4zZ6Vrb59LLWExU1feNjfvo7pQbg24okJY8eYXJuKk7avS3beYN6LVQp9aypvR7nuRkWp4RHsL6H4",
  "key18": "4KxAgRY3175nRms1kHVnwFvkBHTwK651nWHH7KeiyHfXnNxWK46edu6F2B8SDFMPvTYfVQFYS2N8yTj4U81oiuqQ",
  "key19": "zT9L5DAs7UHyedQcGoo7rxyCSXcNbkR2iiJEoyLcE579N1e3T8o4HudZyUf26ajgYpZk1CFaJCbnPRvDcpFgY8X",
  "key20": "67XZ9wWjE1Fu99Q4JLFe7xmQL2B6N6UoPv3PbvKN86GSMEkPBGbByLYc5xuSmXFqJBeS9jrXCgkEfH2iJ4bPVJ8a",
  "key21": "3FwcpigdbHcZZ7QNGxkEHkX4yMGQe21p3GoSL4HgPcZ6KKb5wAXm1xa4gZ6PLgfipArUaMfCLr5mq4FRh1vKDRmJ",
  "key22": "66EB3GsCx9cuFjWD7F1aGKUBRkWo4J74hpieRc8yfPsbpTA3BsUxRCJiLpm5WHFGpM96VbyzZ1hykstZoTzMmA3A",
  "key23": "2R8ASG2fn9J3fNi5fSj8Frkw4aQcS3jvkrzQZxmfjuTNuE2QbFsDesE4hozTdy4e7jRamraNBiJg44MzFaTQyMRr",
  "key24": "4SNsjtFeYnQGEsd7KMiDSqd3gDfAXR3DgGMtWYnTc8kvx6WYDmAm5fvSXtrWhqqqTPjJuDhQEo52RxfXacribnW1",
  "key25": "cB9fhdwcnK4MpXU66sEd7SFUNEuBXDWGKktcsNBdxCsaTrrKFPoPngC1yrzpyoUPjxP5epoy2WQc7p4Vbwc6Geq",
  "key26": "tEj6pJLoHs7vZB7pvsMbEvzk6FvEG8rM48qhMpMb1zvR3Lb5VHMr4i5xN9Q9jBqSX3XSToxA3anNbeAtmaNBqRy"
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
