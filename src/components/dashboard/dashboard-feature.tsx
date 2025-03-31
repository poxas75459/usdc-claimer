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
    "4BhNjd5MVcgWPyXaJWfxCHMRSuTyG63hSfDAuSP9zeRykCnnqvsNzG8gd7C2fgKZAvsg1ykCWUkY4yQjDHkNJdqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QhjXPFEgTo3N2v2RyFGGQ1gsn2ZFDW4kLM5wVAaBVkaquJJ8Cr46ruzcTKkczUPYsxnt1n9WMYeXvLCrQfK6Ed",
  "key1": "5FzH8jA2cuxj4AmeLkcZZcdwhTsnRC5GNuBH127Xr6Ez245WnbwRAverkc19LdvmMqDiVDtskUgq4gLXQVuNzxNE",
  "key2": "25uWLs8UopyCQwr8FkKatBVFReww8kJ1bWn6v5hjQJFPP5VSqNRNgTUT7GhSeQq1JnmPaq64AX8gD7giueMhJVf9",
  "key3": "5UZshqMRX45xmQ5PR628oq2oqU4qekHgjkb5TvxqyWCMmQ31CzmUxmPXCjLeTrAksUmH8LKsbXJgBnpr63jem2N3",
  "key4": "4irVkXzGYJCRcwxvY2JwovSwefcHaui246kyyqapzLZ3MLiY7iu3mW1E2idVAcVBU19qrhQoKojdwg8cgFzWAyAS",
  "key5": "4wxYiGV4p884ypAaUqwyfmyNs1nh64xkpqpuNEnihmDPi8xRzG7r77vN57D2pJSgB3DUveZKwaeKmatWw7o9WUW5",
  "key6": "4ZhkZkFyY7L42nMX5pEuqwio64DJGCjwhLCQFbYMJREyAep6iFdZMm5eqK9hkHPBzWALq6V74qQ2aagz4TPDD236",
  "key7": "2DbK9gdh4KtZ9qTVRW7DKd2m4VHKLvqHAvsnUHYWdt6abQiGh2StWYpX3ux6S3tQbndgnarnMPHqAB3VMeBFWQzv",
  "key8": "44yMXeg41md1B6a5vnVr2PgfTgRFcSYkZpNHDDiyLYkC82EXTcmyuUyCLAnQosgX4axjUUqUKwYefgr7DLvhcEfK",
  "key9": "sU1gGkgtZMLZRFBQREHyL6khZu2vysPx7rw4eiuU6U3dkRP7LwyUTS1KmVREYdQqkPs5j7DHVKMRj5oSep8kkot",
  "key10": "5q94rwd46xoGzT44TKjJEsitpfFSovRYyw6GEGJyhyJ5BmM7mhPMdoeYQeRqsAq8nmmUWrrX9vxxCtiq13Gub7TT",
  "key11": "4rv6aAuAN2zLeLDRN7fJUUC5sFfP2Q53T3FA8sMFiqZ55Kor1L7SGRmKW3k7ChrGUXHUvxR3CLLUNfv7NgGVa3wg",
  "key12": "5CBcwYa4JDauPxYRkm3cXmtL7aezHPUmx5BArX5dDbKsozCKG3j3eDuKNzvRXQ641JYnPwM1upUbWXBzAZSeWoTb",
  "key13": "CP4fgCRJrDiDDpdx3ZqkDnShGqZnXwzM2A7qCxVJzUkFvZqEnG5wqcZCTJJkAx26EPxeiDXqN9URy61Q2hPmTW8",
  "key14": "2wqZdKRX7CehfWh4CnfGaqsdFBzCPK8U4Q6WpCLw3zVEyuHbiWzcnhYDPE2rVuhbnaNptHdB1YqBa9B4fD12HjFf",
  "key15": "59Wt7KMzcmnzQzZ7oTUt1fcFtHwHoU1fQAYpBtS1fj3Enkb5Prbv4gY8tSo7EDWQBJReo6kFx2zzGqpKdgBqq8d9",
  "key16": "4cbHvv5UWbSqJgAD9MuD6CFctJoAnicdVhuchvc7BcEu5uWGq8uJznV79oeLoWZAckrL7dj9cuknbcWAnqtv67G",
  "key17": "2FBrzdToM2UihbN5tJfxiPhruV3eQoBhAogDWJhEwpouhemiL1FvA1AzobsQ3SMHG1m2cU2PmJa2CaMwPsBMuYgt",
  "key18": "4FCHgTozdFhnaGBExVV99gLLpWffG9DST7GCM9UM3BkFqgggaWWY4jQJaxkThEDDEgVtNu9noks5mQfe5PrsH2DP",
  "key19": "3FsDcnrZLxvaR2yaE64TMg9ysveQMrhBfbpQ3dK9epktf49YgNqvcVFCPdRuuRwtDRDYk8edUxBY87TN6vJdAZwZ",
  "key20": "3enMbUtwmf8bKeWJxKyMet7QxvL8pTwxESE8ebAKWhQqLBijjJjinUp7FCJZaaUJRVtRnNjPtnn5Aqkaq9chK7m9",
  "key21": "8PphwEbbLhbWTW12RN3fLouAReqQEKPezhNoUH9dxT8fPTPsru4fw9daJRVn8m1o3ryo76a3P4Z9513vk7aBbgS",
  "key22": "64BUU6jbBUZBfoBwHwZfXtn8RPUdpqtQ48H8XFRTjBif51rka5oxwXsdqvwwixk1NSUQmQoGNQKNkrKyyWS4rkaa",
  "key23": "27Dfdo64pkJoV5saacZ7G2dt6Aw5YVgWR1XT4HfKrAZ9XFBvs3us8qTmwBVNJpYWCiCHNo2SZetmxT7buU5WJZHs",
  "key24": "56SGByGUCdT7mSfmYj5AMhEfxCSiceSUjVD9FGFyzLX8QgzfiPK7xzpS1ULjyd1cr4TaX5RYPF7pWVaLTZAuL2Z1",
  "key25": "KDNSAhzwZPfmZ58t7kYLbnxuBkrkUQmwEMJKv4AJrEPpjPU9Uz8LLSNRj3mBFNCF7WFgscnpssPdEjtECPmg55o",
  "key26": "5HerdzU6CiJmrFFGioXMC75LepW4RX3BjpL1mnD22EZERHvbkWeZe4fbUkBynBJgqdtTeCkW5Ehtc8VmnYAav48x",
  "key27": "33Wt1g7qi9nFfGLXds7BBcQWhwKbLnK2XTesFYZQAEpzx6PQeMeLCc7KuWSCW3YrmVSSUoHZaUWAaVnJtkTXQBYg",
  "key28": "5TK8J8ZNnNMHQUqBzhNJrWEcPWNzHFGL4PJnxk4b6riuwa45VFqiwsNDRSrUUCvv9stxAPXuUacvAmxNGgNS6NTQ",
  "key29": "5aGqBSJANLD2jczgmgkkWBmu83vhQPhUXpSK5BpMAF4jrfMVT33dmAvNiyEvhb51MwG4zkadzPo8KrZuGBUdrLWG",
  "key30": "2yTcVoW3a5SMo2KvsBKt63UwYpgcqRUyq7S7rn5muVAgDQ5GBg9wzw3bu5hYr8VVskdd4nwxCQVQYFm2oukd74SF",
  "key31": "44guMEFtE786pjT6871UVxrbf5AzBaTuEmKE6wK2DZJ2UeQsjPJgmwcum4FSa1oJAkJtdb1i341cdKmCfqkbRciV",
  "key32": "3jimPrcNGJhQ1oWzJ7icynzMxgcY6k1bmqh26vmfjWLwJe5ACndqYHVbNcCS7N4NBVzzM4jXJTqw7rEzGsufRkeT",
  "key33": "5zDHmkrKCmRZFkew9t4wKbY9qb2LRnueX12AoLN72b4Q7fSWwJypBKx5ostL7rhhKtaJGpxQyUDUMdeghfP2xd4j",
  "key34": "4SBhwwKXzA7sQaxNkZ6UKir5U37o4udrjMFuNURK2UcL1uQTnEEySCfh5LetwSXBNAMXvKgXv5JrVP3euHoXNUEW",
  "key35": "3icxb9jXRDZsv1SVhe3frLYKkZ2aU5h4d7wh2J6vShQEbQjDti6tE457f442X7juYN4BEpRtSLPXHfGdNycXyjbw",
  "key36": "3NVFowGgiAN7KBJitSief8XzhwWU7pvhLxC7XKuDaDQgDMeGFogUUuggNzjer4QqpYJ1Yhn5cph4gVmTLpbHAJrt",
  "key37": "5NNWFEkDAC9FAWZVWBV6Bcgnr9zEtrqmmhLvjbsyqWwokwwDyoBzKH3ZkeTNicVEPHLipP3W3XNUTQmBzujt5Jrd",
  "key38": "3yKiRFzWEkfeUtwBZXDTn3KUbGbsWkgPm6eWJnUj72Cohnznm1C2XsEmSvZmme7DivNqTkHGNewUCjnHuZ8g45xs"
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
