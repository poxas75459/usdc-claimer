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
    "r45RJquioYKbVeD8HDmHvwMRw3VZrwse3rKisCwa7qKaGKEcwZe1s6wwuvuwu3NWLSS5pkwU2NGVnCjBCkdTQ4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyTrxYuVyM4CWcMDjRDShd51vZUbubFHGPav1pCwagTS1ajis23rjZq76QdEX4yBw5sBibPJgspJx8SpyvYTYhr",
  "key1": "4bx86caxYbRfoWyMF9EWgXocg4zkRrxLEBFRJ7iap9A2xNjkKnz2Q1JSk42bLUxnXqQBMmytPgkWH55j82pngdb4",
  "key2": "BiCASa7MtkWMdfDr6w5Xxw2NUWUMtcgessro2cpffFuDDCyCUwVwa7BCS7KvNUD8E7jCkCPAuXFGMxNzawxrLNR",
  "key3": "51h6WoU7WVUvVea4XPvqtvyCEuES74XBQuJpadTvT7rmCRZi4uhxNEBhK7XGQzPEXCoa5zVd3b9YKDuAMkNx9arX",
  "key4": "9pXy2MixQw1wfuZmzuvnRBo8env5qEbLEkw2KcucFzv7abiQAWQoMUeAMhDzLRtGLNCYMmkay3dthCMq1kDcToS",
  "key5": "5rKGjzybPied5ch7oQCrzREJ9KhKwojRT1rpSJeZEwiaQtMhMMmmV6bSBwLusgAB2uyhjQd3o2fTiUHwsqcQe2HU",
  "key6": "2t8MnTvWGgxEyUGacSjc6TAfkKG3XLPB2jcbeKUgoBodWscb1EPVCGaaLLGc1zBN5XLVnnZnxPFohr3BM7wjgCxx",
  "key7": "RNrTkpYPW3DtKacuTAKg9iNBeUBH3gxE8rFFzHZhEhuJps34arP1oXDPmU5n8c2rJwYBtT9kq8LniuFnKkc8dVQ",
  "key8": "29gHoACBwRz2LLMvXF463LUtrCZwcMoSieg9fQGH8QJ5SyTqfbEShnQ5tiLYCoQPAKbD5DACrTPZRXKRGmgJJhPH",
  "key9": "4Fb3pH48jPjacK7ExijRy1Bh7bo1fC31ryz7gzfmoyMjkAEXt6AvK8i9SuWREW41aB6sgt9UKqyUNMTe7a84Hp4c",
  "key10": "D6n1S19ewcGqLQQYueZfeakKWThVX2DnNmQCpWLVmEJXH9VkhBqqzgNMpwinkxKnJVK2mFBj28qD7GcKuFNCwe1",
  "key11": "5i11N8KzWzTbEpBYaCyQfnMtsEavM8j9vCN85TTkrgP98ZxgPLC5YQCcovGRv5fwJazbvPSzFETD5zG9mUE8Eb8N",
  "key12": "3MCkXjGZ84Qb8hqpr8RtAm1anaaJH4kwqeoTbP8ECHaC5x1oo7V17z2NuJtLrLZ822JWWViJ1wswDrjDwhWJW9dp",
  "key13": "3gfKE4kVsTXXy9ku32sfirYVB9c5WaFGrRUCXzuxTLNP5t5rFA8XnBJbQyqkZcRLzH59UxV7bs1Qe9WoNKSTCsaP",
  "key14": "32Y2YyPCpYka1uoyKRoZ321twuGUBRpTmmrUAdhdKjK3ZrhbMzsy1P6CbWXHffNgxbkKH573qpksv9ffADhNgDbD",
  "key15": "2aVX5CnEkKwPHD8vgLJr7b73BNmNArHVPLifavKNwpE9RHz81t2n6CaFR8p9unSp9BUarF1c5RjJViGagSbmfSPc",
  "key16": "4gKDUCGW82uyEiJWYW6P6RDHLyyc8pQ2vgwYn4dgE4zGyfvyEhRTGHUjx21zXDzaghawmBnBu68nhdTypEFFKqBD",
  "key17": "22Gzso6MwYqF6HpvfSBiAcr122YNYNLWboARtaX1aPsA4we1yYaKRL3Ce6YKzV2SwXvek14no92HFPrFCY3496bB",
  "key18": "5xjW1nB4T1XYSsyiDQXZtJRAtqtWkkHohAhtm38aRydE4B7dV4ZBCc5svA5vbjKWXd6e2UHk5Zg99iG1JYc7J4tv",
  "key19": "6DZ1q4jBXR4nGitoUXNPhehHXbkf5HN28Qi24D8CjkorbatDGQcDk8NkB8MSsHJQzJWx5G92NhuaqsVye625jKt",
  "key20": "4EQbzdUCYvBKCLMUyAZUWT7gfJYF8utJryqJbmCgfosn9wwKoFgFRKbq7prAw4dqN2z8M4rqCzkLvLW6GN93R45E",
  "key21": "4SxP37SjEH3Arr9kYf9HtkzF2yjsihMvEBhgu3yXhPsPE21zEcJwXsKCebTUykPHNSVa8jSURyH5CsjDU5NevSeU",
  "key22": "5hq494whCnkmss3G9HFBX5YJ2GWgwsBw3SJvmxNjtzs48m6SQgacdQtboj7icRGV4UAEji3qSrpQfSSgYZBV81zC",
  "key23": "4RLbfEqyz139A58HWaeoiF1hVgYmKxtg4kChHhKCasbVaZNmNNshWUAYa9oUcibGAz4xBqAqcVxkjNk6PaMzUdob",
  "key24": "sxmtN3LxjBSX3exu8GNfHfJ5N5pAcFaq8PnEFDLoBNmVwh8HaCsGhC36bBoWeheD5RUsp8CNdwkNcpvsropKSZn",
  "key25": "3LtmW3ratgi3vW24zHD29eDYjxtjVJLPXYRyKwYUBNpygvLtygo4VmUuoGhuDjJoNJsfj8K16pYshRLWm9PqqCv",
  "key26": "3LKGqi4aj7FVZTkvgZuBbanAay6FbPaV8Z9NWWAotgpXJ2x9iCvUUnvoXprTq275xs1rAZTwHDsiQN9pidXnWaR3",
  "key27": "2cYzc7BcwkBvCGuQj4VVc8xykQXXEFrZ3UJ9fCnpbJinYTKDrhKUhUEmTVQLuBgqyqVdbk6SrovyaR4x7wkvUgQN",
  "key28": "jn95CLGFNHTk9LmHC8h46gS8SmCqxh5uBKGXXySBPEwK7icq7JQBNdkWi6sb6WxbAmggqBy8KHC3VbWFZSt4Khc",
  "key29": "42CuM3F4GyiB2edqpzwCDZmvMDGgUhuaKWj9a4PzgHeij1n91BNvspuT4EtuwDf2BBoqEK92tNPdsNdirwLpfjmY",
  "key30": "5Pvw2XsmJYTaAyJ7eHQZ18vSxYUTbtaDdx7ZPcvpSf5PJWj2AoumwKgGGY8cXs41QxHYSkx9NqSCe7dwbmPF9i3X",
  "key31": "3K5FV5hh5jV5Bj3nGkBNcsp1cinSyiUDAwcCKXtUsWqwro7jzgsWmheKSqBAJJQBVaQc8P4r4yFrHhKTjq7J7AiD"
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
