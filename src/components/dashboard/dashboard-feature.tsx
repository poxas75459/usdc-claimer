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
    "22bRjo7QBAJBbMLdk9U9G7XaaNjYeQvu2WXZnjPMb1vZTdyKbS74cnusmb4bUjmp4L3KG4ZuvpV8EhMW2iy42fEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5gY3SrVYi9dyS4wZ6KNuFF2wV4ZeEefc1w3AK4GKYnvET6PdGvNq22ZPpus7dBPqjUBKA2M7HEP9CKdGkaFVmk",
  "key1": "2gia1Z7B7XkksGewurP8c72kcBST6UeTY6wL2ThZUai2NSwd1hyccMYZVZYZ3AJ2fA8x1pY1UqqekUZWsJMojTX9",
  "key2": "3WX2FweAuZ78fkXgSRpc9koHwYUUyxfdiUVDY2E7hXhWqDccfAMk1CigAyQMBNR5SyCt1YcVRjggbfCFhre22oCb",
  "key3": "4C9oycoFnVcmMWfopcYcphwzNEYmmf1B2UQ49QnXJ3LzxE8yvNaA1Djjnn9mWwaywjXtpHfVG2rxbyPYVd431VYR",
  "key4": "4hENUyGirJzMoRp9n25CCfqyaWuG8RdjT7iZcGxrLfhsBaxLoaeWX9KBpus315Aa7KpY43RUDz9yty8NQ6Y9dEp3",
  "key5": "4eCfSAhP8oKn2iX6RkfkADHPUhrmitkqNudK1BFgiPcEwK1YDHYx88rqfXbetYFpeQFvjgUaJxYhXT4eenD7hCHa",
  "key6": "59oFtKS7cidFgw9QWPJ6zZYY26r7ztWqu3QLFaUKki2ouzYcqMNuxZThTpiNP3goDZiEsUhBSnJzJYkv4UGbbNop",
  "key7": "2kq7eRAu4WwkCUK6QyrKAFrh5dBhCTXBHsP969756AXfzcnpzNVVWghBoAVMv8WsnhyVCGpjk1JEydyRSZPx9uN6",
  "key8": "4WF8s7N7gN3E2WEGEftdzakcmBgLhDPUgniQfwotAncFPWftXzvHjYq2Bo3Jook7SJCsvztMBZFxCaDm9JrAVKB",
  "key9": "2AKnEHcqS1Ef5JYxEvTyUeM5ukYwj9fRp46EBA8kFaS81x7bsbzU49a2hVRxz9QvnPVk8yNRAGR7qzibqUGGsA3",
  "key10": "4fVftVXRNH4XRkhvhNQJ1AhpP76HBUbWLuPgAD7b11MjP3PwV8xNF3ic7k9woYntVDc4eAC3r1fTaQiushNivWhu",
  "key11": "2g6s9RJ5KjpM56Y9pTorimeTQzR5zPqaum93rm5su2eELF7rHMnWb15ruyzAKfxAcEnyUCESsrvbi1bA8PYgHjhg",
  "key12": "3u8stt9n3BDwsmL357Mz1fwxxviDuA5xRBzHaZwtt2W5uzupkgiavYeykHB3j92hA7ggRdFpHfTjBBMDgbRouroF",
  "key13": "4WWnHN8SgrMe3vVQCmVSVknLWnVLUjHhbPBTvJzGgt8mtyQbvMiUvQN8KZ9vPHwFKPYVsiyU1Az29S6zXFA9hgky",
  "key14": "unsam4L6WJ1UzG5FSy7iyWSuV7gCGoF1CXNTNbDZ6JhumtWEofQW4sP1PRgewZp4jAnMCks2NFLsYtrwfa3AbxD",
  "key15": "5LUX1UwgaawaLKCorgpjp1DcxpdJs6tjwfrEHKWMviWmnLuKCJkwUjyeCdSGWkvGcg6hpCzc3sn8kAumqpBA6q79",
  "key16": "38Nusxw6nBoQEMmioySUW3m8CtCWrKiMLRBCtzwh8WghvxXBQHW1ALaRFjUmvbimS4QWzcmGjCAT53nPTQeCeSWk",
  "key17": "4jLP9RDM2JYoyfR5mUiBLf3yENWtxCTscCcg3YXLhPCVb4ChcsUJs22ry44E7WqGYGynw2jDpifo69ebaq3yPvJF",
  "key18": "5nEzYT5qWrwNMP27qnCDBsX5cepRXnkQjYVkwg2BveF3tKrhdvf5FHXrQ5zyzbWYCqyFiMTCiVadQLcfi8KSouan",
  "key19": "4gyWJbzkc8qqk2e2aV3ezGthk8LT2pMivPWonHd41vn6DLPfX8hX9GQKBnEDVSkZYoF1dZ7Q7nGT6zcv3fidorgy",
  "key20": "35HV9EyRJw4JBDw7NnbY6tr5Jw177e14xuThhKZqQg1aoJA3kRj7eheVCE3cYjznQeJNHwAtLJDpxqQM3erziZEP",
  "key21": "58Hbs2njRhvQdSfnA7A9rjptSomFJYGUAp9GHsSSSXh9AUoEV1qgnMPfwDdx74ARML6izhycPLLpSFgg7oiE53zv",
  "key22": "VKcmGGCSiiHWG4Rr2ctzqHi2AdZoDu2B87JrkieNZzmcrXwzQW8rJX1k8RMVGrpB8h23by4PGnMtZNi99P9HDWX",
  "key23": "4tFP4WsmgnAMHHDKvHQf7bnb5h3t6MyF4pMmuYp8gEtig3a6yK4Wu9T2kMdyTsoSjP8q5PxFun6NhJji4XLeNBH4",
  "key24": "3swnVBDURYdSBd1mb764XRaAdrEkHiWhynKCpmab1RMX5J1BK1XM2VZ2oqxrUWhEChaonX96A3AWp3eoFMuodVh9",
  "key25": "tDhpm5wZwFe9Y4ed76TReL4gwFAoiQnsYGn6tYnpVLkS1KmN6m4M9QU2pdjbJcb3kbsUx5R8pTp6Q6QUaBUsVHn",
  "key26": "56uEKMxbiPJYdV4aR4S9FZqh2LrUwuudubirJF71ZM5ynzxM9rVArt3ReK9vyKLR4jhB9mW7tN77JGj1NVAUL441",
  "key27": "djpe3Pp2MMF7ijo3SnQSD1J54QQTBs13LMwiBeRiajFqmpLrGSLfNNEA9u79UVu8ctJvMddaLKrhEWFwm3T8WrD",
  "key28": "krsKpFJoZcm756vyVBnFWzKMhxtGYLGFcVhVB6cxAiLd9RnYwZkoLhWaq1fS6TpTHkFdupvVy2zKxG34GipFLgd",
  "key29": "2TyfvpmFd3JB7rUWERVqWinBarNq6wmyUjyR4y83SAcagEsWimqXEpQUK6uJiasuSgFeRvWb3ZSRnbF1R3rVZiFu",
  "key30": "5psB2wK1nbSzu8dc2WCvLwU7G1ideZtiB9un7h3rJqSgEMryu1kg9AM8Qp2zUMeg6S5M8fbriwH5ctYTjGiPRNLS",
  "key31": "EJUwXDvbvyARsXKAEYnrudUwb9TT9vT6aSe9Upzwixv6rseQ3bGCdwGCHYXv4bz4Hs3JRjiyRn8YzKB5ZLoCF1S",
  "key32": "5HE1oQB6FGbk54qjCs2wZiUDE6Ym14KPhQJspT7CFQxqum58mBr8Zave56LHsiUErSx1b1yxLnecw7K8BxRU6oze",
  "key33": "TtyXZav7KmAedH2pvgrrmE4og1GLjGJkMPa8sQy62ZtH2TJRQYkfQNSRQWNrVzRczC6jhFafU8ePVzH3FCikr5R",
  "key34": "2p9U4RayfJCJmHwvEqGgKeZrBy6o6JsyMfb4eMTZLjLMfFBfAUMtYvwEuVBGWwMFjQYJM7M47GkDacxoLkfsDrhA"
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
