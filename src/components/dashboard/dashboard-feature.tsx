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
    "3GQuVmaGxMXTLuZm4Lhb2yALJf5w4v8SfWxHQoKbR1d3GiqYc9YAMazn7asvdTcUkr2KX3Nn5eRSFuLGfeCEJZEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSEdcE8D27fuRCL6Mu2NwKHvCRt7uQ3K4WLHgJx5hu8nS24m9Qjasktm8DzgcTuVjDFFcauhVGNANojFR1igMdm",
  "key1": "5ZeXjeh91Wz6MABjUNCQ6qtMVk8uSQhiobqz9juAHmAMZmaS16b6v6LCR6qPfV7kd8XnH5U5UG2csaBgdQsKS69j",
  "key2": "QKgdsWxozPkxZ2ttpf5DjazjDCBBcKU3Gg3E4qhJuZdMbsLjsKeJtfw3NSzeWSWekp5FHeSXKBPmjKCwhoUvEDR",
  "key3": "5QKVbQWXgSnY3K61Ekji6SE3hhJAe9h8i7DKvnbnrYhJJYix5wdc72cRrjKCZxmEFfWYKjkUBniPgNwk6UsxDaV9",
  "key4": "ucKHvNf2njb34gGmE5819UBNqvfRVhXQRYCsjU6ZLwA7QnP7ZBCKekGF2oea6upM8a3jZmzsbBMWwzNtc3r3ETL",
  "key5": "ZcFHwtJqxaUWQUuTsH5jgrhRo6Jp2RYW5vuRoeGENTcoqFwP3GGzzH9eqtapySEs34p1D5HGCtVQ6FjTvnQ1sx7",
  "key6": "2dUjdihJGgR3gEjYoLymU1UsvPwj2WHL3kcRUk543NUuhEcNgpWBx434kkHGaucne3F6PCxE8GUz5xvse4tRKsdC",
  "key7": "JfDsj23mMoygsfusJxvo55nmypMN5ETN7sP3VizxyKwKsr2qpqn3BRtuoUy9w4ftTh9CQgXSLqN2sUEgDWtqETZ",
  "key8": "29XheXePwVJZGh9oLBB31KnTnkwkU8zBuq2aJBxeCCgW2T1xzdGPzb5qQqDnmYhXwEwgb1vemmxWvXV11DngC2Xa",
  "key9": "3WssfpMAh8oEZAdze9SxzMuPfXN2Gt5mASVXEL3CkJUiX7mBrbomMvmTSJFxbjZd8rWvegzu1xgdtYktAj7dvxvo",
  "key10": "5w1ExPkqSgbsnThRrsdwbLiqXNbXmPz1qW8kgbAVSDaQAQv3u965F8JjRoxatXPEcWa6JiT9eSHgtXoj945S4dA5",
  "key11": "65igWjT6vsnyWuENvVd7kjB9HbggvjuHdby2XBTkVSdThaqebbRTG7tSoK1LqCUvXJjTzDbRLCNNvFpqKAJVCMk8",
  "key12": "2XQQ2MGRQdqiqosGhgX3TSmXDPMC6pH3ZvC6LZgMdrf3vmQexsmA1QAci1MruEmybvtxiBWzN5GenSTtiWv1iqiJ",
  "key13": "2YCy1E8cmg7e1ktwxhYbwZMW6LkTphVPuW42yW53z4zHNDLmdmEbTSL12boKSTgt7puHPw4qDeSyWVmDQAHQA8XC",
  "key14": "66TN9rkxJx9quRXgu8Q9JnuKFMqMYGR6tD8TXqPi6Mm77JRnbhT75PjEFPDqUZqbhXzQZHd2V6wyWxsMDqShmFxA",
  "key15": "4MMjta8vGwZ4TRwahFp9m2TyJmDBWN6zoRv6pqewEzcL6EZ78yUb3VnSx5NV5yKdB6jUd8HHRsakXev9kUM6fNfU",
  "key16": "4fB5vvDYaU86s6X3WZPiHfaYs5TPPUiJVp7ymV8Yrcy5aWJN2mDcdwJ9nJ4T9QgtDadqKDqgv8wqWBaoPHHSkzW3",
  "key17": "2iWFc77zauDgms9DhpgQJj5UbhXNgnXgYnCf9nApNVujg2227Eoe6rhLAX6jffhou1U4RuSDyxue9GGmM3LquoHZ",
  "key18": "2ap1XaHmHH66oAga914jPbjvxa8cbHuHJESbcuGoTwsXSek76CrZLn398f7CXK9S57xru24n8cDX25xjwYDP1AP9",
  "key19": "mZX1EypTSmNAZuZGNg5fa6umUhtLxQ4gpgLwEvC98GnYsgx6kjCX69kGs1LF4qrTBGGV9BBDAuRREMttzCtE8po",
  "key20": "62sHqPjJBYm7aPREao1LHXjeGji5F8kqGztu1DH7QnKvvmXWgxGd5NQ3vckiDqf49eoHc4ZW3fZ3CjnjtBdPn5sx",
  "key21": "2M3YSEofX8ri4mi4jac9mXxnCDbWuAT5P7gr6EPQ49c91zx8wpEdW7UA7Vx1eSGdtcwEj83HapjqCLJWCzLYMJFb",
  "key22": "51zmM91shn81WwNBAQzVzRZ6VN818xvGNg7e4rbNy1bdWBQAtJT82vAW1fZ3kSwaU7zMudGioahFJBqPyo9nHNVm",
  "key23": "4Cp9LQ3tqPMeoVwXt5vBz3PDgRaxATgkBpY9pvLf6MbY67bEytm3fXSMfMonYYXLQnh95wHhH9hFYaAfFQGL271g",
  "key24": "2redvBxpRQc3PymGjFKAy4fyqFTYscmuyUBGZbfTnyh3zK3yc9y9wbQmSd8RpJaCrDrcALwrUnNgCjf5WdppF9ha",
  "key25": "4FtwG98DvjWJhYTjbubkEho2c29izqGF9nwXZKisDRnYFEaz2VuMcKhnkWMRDD1gX1rHQqkXf6TmHAp6x7RtR1mz",
  "key26": "53x11ahqEC7Nc6zdHEK7KNX513k1LqspXaKUGetY9Lms3n4M4pfAp6LSRa4PBRgL6FYiJLud12AENzrySfJ8GL6g",
  "key27": "3DH5VNXeZSeYnYTHNgPq4TNq9yCNz9g9kpZXD4Ua7qUVu1C4RqkPaUUn2oXPw7ZsbTEdj3c7LfG5Ybgn71dH4VaS",
  "key28": "5ZHD6zu4CaiERmKzBy7khPtuRNYaYDU14K1xtff4Z94QBFd95fHfqvrUWJt8WnzLN5THx4faaLsA2HWatjbru6rW",
  "key29": "3Ff7xRfCs23vwq4qe5K9wXMpqS4cz7ypDtzxm4Wkd2d46WF3hxBmb7vsey63oTDGpvWzdusnvJKUBgskBvkMXmaY",
  "key30": "4RadHpMcUsQuHq7Kbsr2hjrK2jfyAwQmP9yp8J5gJx29gfpvD22CULykq4G7QfY6AugrPPYyqHy3cyMFQvbQstyP",
  "key31": "45636SVJ5axKgNVK18TMWD7xnioxd4JVuVarhT5Nu144gA8ms3ieckVLLCNPqfFzsnoaj8rT3b4iGKzUzRb39va8"
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
