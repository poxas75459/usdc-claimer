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
    "4A6KPEgUZUyaqxfGYoEsEcuFmuotS86fxC8TFgXfd5MWCJbSYyc3w3csZ3xEGNcVvxHdqAmBpt7F1qk7XFJDkPBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4VM98RAgwJbZBpfyX6UoJgX7Cu7qNJvf5xkxztoePFo6YDf18oftrK2Dcae4DEEFae7JxuT79bPo92tk5FKtZv",
  "key1": "2JLZBejCZdW7UmKT32JXvmtLeRFxUJC6GPZ3cUd8j4avkF7SKswxVUY8E9jRRu9W41mVNosJi73QCEwxFdCVL8aV",
  "key2": "4YSUDPB1Ujo7sCs1nXT6vALyFYc7EdqZjYKHJcoknivcBY4B2cd182yRjYkZnitZewwKtv1uESNCJeVyriZXyNmq",
  "key3": "zNJLMhjUnfqK48Wr24BH2U48roBXugGQEFHpP447eAUnRognT7Spky4SNeXAyQfwfUMAiHDvRiF3D6wpLT5XsjF",
  "key4": "4o8V1fU1kzdS4sJrWinX9DnueHrwATGxjybDGt6rc6GHQLfFcFdk5R4wm9ypugGnHZD61G1Jm52ifS4E1NXLSGk4",
  "key5": "39syX9YhQKwpvZGQnbnq6ogbeZCCwddLZBYwmVAJFk8U8tAgFi8vtyEKpAGmfbMmxf54Y6oVLT1rWaMChUxADCbr",
  "key6": "43zmZeLkyMYYqHok5re5r2eunx5hscHoikNPrd6nm1DXtWNrzQysxjtR1zEk1H3yvEP2stRuPV4zy5VhSrrBSfyc",
  "key7": "iU7omPy7rW92pEhjEBQ8F8Y8QpRW7cordDHznHJg8VYdkQyXBnYLQttLffa87JJZdVL5ReCA13A5KSe9cMCmWy4",
  "key8": "5RCmFiNw9Xeeyz1BQQqN5nFMN8Ub3Htuye2UoVhoA7Nykep2swkaFXoxeAZpdvBTAEkT2HJxmT9hTwQb29R8NBeL",
  "key9": "drWLhRhHWi6Dg2Y14B6qaHB4NaSFtjEE71KsAcCzsd1vaCpRDUqTXK3ub93EzwMN77qsyRFRxWFDLc3ARrfuGHf",
  "key10": "wZHiYbdBTpzPLgp4FWhXgtL7XgarNLn3rRWvoMkG8VZMuhJEXMpjNMvqoPU2TJuNdg1pFBT9XJq7nmaJMYiqp8B",
  "key11": "3zHtZkyT3T61vQvWzUA2SwCdMBDrLiScdiAavzzn5qZdaR7yD4rq1sG7vdVu2WLoRBacaV6XkcEhVJo4zKBzvbCe",
  "key12": "5gg9iHSn9fEmKRk5kR4u47PYWxb3i9KkVQNUpA1da6GFFv1DDYjfYkwYdDJwX3gTzpsjTmuPWjEVhemeUe4TamPq",
  "key13": "4fAbn18FWwXoXN8LqPiEm9UfJXQFiAto6EbYHDsVGXDoJaSbHqJLgwp4X2GSE9V4kPeAaYb27gtVVdAdASQe6gQ1",
  "key14": "2aQ3PyeMSaAvqn7vwkpAggWQVeQPpK499GRuGbaw5eTbF1TWkyXWUbmZtwa7rg8kQdXWxeCxisnUQgWut7s7JXpU",
  "key15": "3UkX88NRyGGqU2isaaW9XxyDdDVjDdzoCs8A5XZmuKQhczJpbJKJVuqTuuqU6te7G9uYcdgmSuK297VefDYXBiDi",
  "key16": "2xow1Qa4Y6HwRHi7KdHXQJ11bHE11fJUqzudNX1pEB8hs73mAGbwanphcfmSeXTZBqqy4AQjY5XdZ83Au6Rm9SJJ",
  "key17": "3bT5tCwg6a6SZY6Hxnr97CrZqrR8cfCeKUiV2AQUSuW29BgDh3BHJ8bBhW2RfZVWdZWn4jigTtXGJdeoFKzL7Xiu",
  "key18": "4srh9kXHARsB8Yjh6ksb68azqwjgswDvGRVoGbZKCELFrd3XZSv3YyzAoYZdJZck85VoHh6eZBKXu7Gyubt3JcHk",
  "key19": "1ThutUYCdGcUA7taJWhWePLmUF5RXjWcmbFHFjNs6RNEbSK9Et1bvCzNeyQcZodRQqiRuPaxpc2aovYo5wGPQmK",
  "key20": "5ztjnyoPqWqFEjfVqrVxed9wEqAHcVGqLU69RKWzgBpwW1qzz1FTrghkU9teyj3iet5q4jM4CM1CQUtNpCMCux4z",
  "key21": "2c9qFxNWkHkAJHefFNsT1P4622eMRvo1UZRQ76eLSDofJdJz4ZKshFjRdEjkjwYTRduWU4aVRxvsbHMwDeSCVZDz",
  "key22": "3fgbyPPQL2mwP7hRrprMxHJq2wqzUdDsebaxM2iYLAk3Bw17eRJtk53r8wWbd37VCt3D5S2KCrqBQLugDzBo5nKU",
  "key23": "2v8PBfGQtuEriK7C69cXL8tq2rWmKmPB4QeRuZS95A319uB6yU5qZhuaybusHXNW8HfumEeVvgu1JQ63oqUNechp",
  "key24": "25L4Leuk2R1rbK5swzrGv4cPkWEpwSJkDFc5VSJMybQkLHzTjDU916pR2tWakpNnQKPEaqbxxFUKRinK5835isaL",
  "key25": "2HnuRjgLy6HgaR2JeAkxW4R8TTMTHfUgZ7kq58o1216xmMURGc3RZ2Fb9hDG6vEYDbykP1nFkYjwCuqXKDXVzAgZ",
  "key26": "2qpJDiDjGfFKBmVcxubiVWFmsVnNaRdJ2BQwWnDqGmTRjH4yGTACfhJoCJevgw38CtkA8SsAKHmHVz8v1vtS4xAN",
  "key27": "2nqFkyuH8KNZs51CSisnBg6rhtjHZqEnpr45kfrbeQBugKxvf9a1iwP8Hf1jEzkq6nhc2ZFMv6psDxzWyYXk6gjM",
  "key28": "36HZFSCjGiFtQsvaC3tTVrpfZERtNi9iidDpy8QCqak2xuZ2wCBzUtew88jcFR4QCVF4JuKFkCBeuoGNYuyM3wR4",
  "key29": "5xeTuxLY2ohe6XJX8SBnZWWxQVsSYZHzwLY1g6pZHmm8pYv1qUmGhjW8EXxsStrpQDHxVLYSCuPAu3gyGDscQpfP",
  "key30": "4bGU2j3a5fS6iMPSfMLLGK6LDVWeBmLvDs8ahFd56QQPAM3MtPhtgADA62BkG7YainzXGbr9YqXmEfuW3sVqwmma",
  "key31": "4THXAwibsChnzEwGMG8grujHLYfZ72kxXPspG4WxxAv9fi3KwLwicVrH3T67W1wsuuSf5Pum3EnCaArciwjXcZBZ",
  "key32": "oDBedWPuPvR6TLsrxPwkbRUHVbcAgREgDHxYaVr1LitzWHrL95kVhUvCnuQPGhnQDMY6RmYZ1LwB9DEwwjDG1pp",
  "key33": "WmpacD85EJkd2AiWQPefhD45THi1wDTW8vz2NjiAMUB8FYyeCkJo4fcZFBX7EGN2Lg7YcXbZkVdpSjEYRjXQxeZ",
  "key34": "27gL5KAhYNnsQ28s5cxUHdWcM5bhsss8zFFCYE4uxse4mZHcHJEdGpC7PCMDZokXrGSoxr6kMGsdNj1vRuccrdgB",
  "key35": "5sexif5C1Hgo2vWXpukFVbfTMpV6XMwCvb3e9P2wFPq6vNoPMEMRM7xCMHZqSuMSfGVuSiSog8NEm7KcRWu4WFpY"
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
