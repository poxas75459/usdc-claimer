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
    "3XFud63AMyj9LVrTZNgS4yssfg39JffDxYHH12HP9NXqCggnJ5obtUhU1niZtyfzV55oXHE8ygcvQ86PrshApFF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64k9S6Fga33juCdFKJRNKLYTcmBau2nD1K41LDKMbRx7WzpABs97Kq3AvUqKyTBUCq6X9E78WWXyEZftGymADFVQ",
  "key1": "4AxLCyV58ynYPmTABw1pifapWUMZMt7z3aGu7toPGtndvKz2qCyxqgyc25QafoAGkQvpWg8wMu6uhvzCorqU9w1u",
  "key2": "63HqNaJqDJLtdzpWBL1PFNNT7HEPSxtr5EuZb7KZpYuJa7YDhihdbLPg8W4xZ6fGKA2tba4hLM38cBS4fDY7nTcJ",
  "key3": "4tEt8TYVx8GwfTM8VrGnFFY8nNQD7ZAu9ax8gs1r8jYLXHHf8P21eKA6pv8rNyGF7FwGGEKNwYxrVfqfukLuVLkg",
  "key4": "5pMdYgqkVkNF18t5VnvHPoP5D7f6NLWrTY56GYeXjCW7PUkzNkaVrmBH86XgAMHbMWffmawaajHpqLM7P7yZVYEk",
  "key5": "5sA2P2f8izz1RUu4Jr7NxquLe6GFLRk62fWVmg3uzewb2UVkHAJrMmaJCJgQSVwCvVar1aQDKTQYRWT35EEqMUCp",
  "key6": "dq1iMAxqUjmFCBf66R9MyGZexv5xibbQneTj7pdMFkUrPxW2eDWPraFNibNyWDEUFF8qtCVYdhpQYPKzh4mPRXj",
  "key7": "2BuCQ8HV44xab25S2hNvCU6Eq8hh8Jx5Goi1DbQ1freeqgUSJDDd3TRzRjaoxV2p9k3Eh6FwNAAq7vZhXWtDsK33",
  "key8": "4iDmwR2gLBjTvjrT7GMgSAT3yBGzQWrLZEiUihvu5LeQUL4f8YPytgU8niTAEkSJwt5gjZe5L1nbudvNocrHtohM",
  "key9": "2BqCTUKeQmpQaoznz8kLNaTSrzgFs2yT2LqNpikAkHhqyPdzLncXFrDV9FpChk2XtPjwEYkrakewEB3ZCbhwxyLE",
  "key10": "5EXVCFBCCv1Jz467UpKnruahxLkTxbyW6D3j4Ptk3pDtifD1HV5eZG3vzyXqqR7faVJEpVvmjqMFajPrr2Mcfjvo",
  "key11": "EdH3TWv5fSBXyRpFh1Q7biyF2p629goxoYta76imx52ARmFAnTm5kkiFcMv85xhDpx31VdcSAygEtz9yMiUUTYn",
  "key12": "2K45izYZncDe8VKGzM2Qb76QwnPC2Vw31NwjXKQWE3riPA3XdscAHpw4hCtcYGhHaHbyz8fgqT1Jxep4PWEULMGP",
  "key13": "2LsHMLMVXBfwj16Fi6Z2pLAL43wbtZuGU4wEaFvmYBNu5wct697pWLKf8kxqCSyN9TmbtuFbrVrnzqTWecMzH2rK",
  "key14": "2vAEHqxvGAM8hGU59CwX5Vy1rjkFExLowbUoGZoumj2PauiT4TohkMZbGteb7nwEoBWiWtYC1xn86BMqywrLfYtn",
  "key15": "3BviiJAqPpHQLQUHGzFFoywurhbXwJ75sSAAAtymsWGwukvMuDXWJvomVaERPnWiKcZrwJiTaz1vuHndCQo9GT9p",
  "key16": "5iCxPbbRdaUyLq1qDqn6v8pY6iMgVGUGizJoyDUJgGeLX5qb3SkHdXZdqRrevotBj9Q3VVqXY1sJFBfmtLX8ksbF",
  "key17": "3q1gtRXtjsv28Y7WK3uCZXhFLpg43zuegPeW6CMVLTJufxuvpTwyCTzhARppRmoX8nsNqyfeZbCh3deSBLmHcER7",
  "key18": "2PAMtzYRwWzSTsis7wARYFeEta3hm9r49nMcrx2NjwfVD8RkQ6N2ULXcV4UKwEutRctdPtjV7u1cwwziNNXVW8g7",
  "key19": "2JvrH4427a7J3AWAma1Sy1eGha4sBBz2yGRcTcxZGxAzQvgghBg4heiwSyy6KB4nTjSdt7jahGJiknFDDtzZ4XxM",
  "key20": "4ZMVJhAQgNEcdgkaYhvXkT2xBSMbGseVBZzsxhRbzYdweBg6mCzw1274TQ6SkovTRKXpY8Hhz2DNhpmViGkjzPyu",
  "key21": "2RPfRK8z11FyuAjVJTN1y6wZ7UMZY36ou5KwvEzpDXT8WifRW7GrurxdBPLGV4vqrhbp7nZBftRXecW7oESFsPhi",
  "key22": "2psVnVxQi7HzfoT9QLaHbaBw5gTuFcYMYG9Ee2TJe63fBFoocd2MavinRG9vFcV7i8CyGv1CN7fh2AKo8T62MagT",
  "key23": "4btQFfCmicprnimZ7YKFd6XpgrXq4wcg4pfbhAgoB3cJ8tarwzVnrc6EcJQa4SFZ99ixQo1tAjve3CFMfhmhk6dH",
  "key24": "2ysWMC45VTQThqoGMBFQa76aJy4NXQmF4dMsGgKb1zs3czNFSEmKHhwGnK2mJePZJFUCg66UhZiNL34Ewf7aUsGV",
  "key25": "3yV8ABhk5ERMiaHnTm2Ea6gmdtWkGvy6s5jVvxJLnyMQfuom2U9623p5hztQPHBgDXkquzbBiwaoV5TvujqZK1pH",
  "key26": "3QdygZ4mYRoaiBdw8eNZRc1UL2G8unxibvVG9nHeyian5hXAtZ9rZvSbtjtARdpACAprGkbbmNch325vZCT3GSrT"
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
