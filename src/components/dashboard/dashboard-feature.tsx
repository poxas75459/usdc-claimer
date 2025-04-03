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
    "5aA18qZJj5rmQziEornMhh1cUmZTARQYPmLP5FaNR3smc1maTFLniKjdVamz9kCcLK9BsaM1f41NuuMsTDpRZg11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67kR6FGfW9h1KUkXMxooSDV8wKggWC7oZeHNyX3LYzqcJMjbSzNyRkAtZWvu9ZUJuuqcvTqoB59tYUvwQTzyBQKu",
  "key1": "4mFGapNQBCWXVodAG9GMZkGFxAvgUuyVw2cJ9tYVpTbxd6gn7wWbAiED1xmrLD8wQ34tAt2UtEPe9KuR1tJibWtA",
  "key2": "5YEzeeUXdjrBXMTzB8vDT1RwL2jtdVkocNBqZyocWeAuSzHA82fvRp32MYZQkb48WYMdhQCeHxVc3axhoxNLFprF",
  "key3": "4aCKdfxC2XnuHnEhs3Dwsp1sVrnfwiHV6ZfEnLrPR2bse3C2m8Sa2CVW8S2hLjrqZ5qSKHfiWfrek2dNuU6oVWKD",
  "key4": "6yoP8svqVBGxcWbSTDDeTrNqdnUQgvSBTehzjZYEZZKMmmAQec8fF1aAUw7qg8skBdqjGgDrru8JGJhsojmGi4X",
  "key5": "4W8pQcc3jWMm3ZS7T9hFDKGVDBxiV5r2Q5kyx6GR1319MkESNvA3WW8D6Uz7LojQQpsTWu1bcKkpB6B26qyZxnRS",
  "key6": "4L7xeVGf6dLzEnZRzZpF2B76G2HftUmZ8W8APM2yfMwbwZVLGa3CkUXyxh2MuerQnNYnujiHZ2VzXZAHysdNhZhg",
  "key7": "4Zj3D3Yzogt19pTnHF3XAu6FXyzz8CZzaaSygohKyVL79EfBcVpP72knAmbHGj1B1oA6NmPYWK1ZyKMX3xEgyS4G",
  "key8": "4T5g5euZsNJuc2yMsStaeLv9HFvAiZVhfia7rw1sRgZBADKLvoKoBhje3J3yjKh2KJPBmb6CSGRYRcCQwaunSUGu",
  "key9": "31NeiDRDpahUVaN8nT8hzzQvJg5XkiF5kvYyPurm3mKpvujrtYG9bSSMkwJx2s4f5GXjKEFWzo4BXZhrFQ2G89C",
  "key10": "5Yg22jGi4ymELyitua7LUaGVzs2LJkS7fhUSDTzvfM6CtdEUstxeV2GuGuhm7r3nAgF8zas61cyzLgZfPryahqBt",
  "key11": "4gHCM7rLh6uKAFp5Hct6PJwam2mBhwN2Z4kC1DZ2dmCZ8rEvS9sjqThcYDQM2txyCve9aqvNX3EogLoM8tYgHLvQ",
  "key12": "5L31DNVNJj5Uiec9k1CnfnYkL1G1PcALa3RUTMQnBhbzB3JxCgBGBnHB6ETdRR11Hy9YYXGXPkaZL6RUiAa5yFjb",
  "key13": "2ifyDYzcDSwCFBwgbgq5uz2d1BhFcEFwSJ5rfrW4ZB2A3WM3pLkP5FNJgjEvUYbb4xDnDfgkYRX2SVYFoQQxU7sz",
  "key14": "3hhUattPFp3bfVFwkooBoT7kWGjC7jSHcVfeFGLQNnV9zm89QKeoaWF3skeaTL9azGS7k5RsDoZEn2in6Wo9mcak",
  "key15": "4EUFgEqxnMpSSEwekrG7Bahqx2XN4MDMzf77fjtfDFNkhNv6wvDg8CBBTnBALfGxj8qCgcPHKUqshvMNSNt6SPfb",
  "key16": "3fK4Dm53etektKHGuS4FCaLei774ndJNAbeqREDSkomV9KVp2tFTX8igEDaafKefPBpjpyxnMJyZm2bQyuLS4pBJ",
  "key17": "2Q9BwjyiozbuoZPjDuBGLC35TDvhXVvpqFeoAb4vryzWwua9PuRSXfBzwTG82EZjGXybhAubeCGSkSBqTkkHHqxy",
  "key18": "2hqNqTuREku296TNTJ7tBcRQbfWcYonHDdcNzCQPZYaQ5BsWD5A9bJHgaDAQ2nvE1JmfkzYERaz6BqknPX7wCFXj",
  "key19": "3iVaZd344UX3u9eQUgj99eEAjsvLb88X2xR8NsDGNTCtzBGZF8sLmHvrBATwRQmi4p6NtxX5ospLMTet11SxWhTc",
  "key20": "ACvt3L2G7fbDiGDdsVv46MVEHZVLY1gJiC7NWNHwxiWWL47XfbQkbHt3TCg2fjSceTFYqoEnL6CsoxAErkb9wKQ",
  "key21": "2HQ1kcP4Jp8vx739rdGmLFPmpGiPTXuSNCvtyrh3QBQb2jtYC72Y1oDcUBnmfDaobtN9fjX1v9BgKsmQ5Dm3bF3L",
  "key22": "4tF5wXiu3WrdhEeq5meMWLwTejtJkX3hpDUNakS1rUJrQEuaaSRwvk5vqcBQ1u6NuMuWgpbxJVd5doTguYonExHw",
  "key23": "JdRZp9KaH7tamTKR6aBM1Bs72KJ6Am5ffQH29XYzXJXT1c2w4U7JbVVRuhf2dghVf7CX2vHBsckH8HYn45c8kVv",
  "key24": "42dHpE1D24o8ZkCX6jFWe7m5LyFscMVeopJzLjj7Ri4T3utiYgCpZpWCQqKXqegDACosvYjEbpVrAMjd6Qqxi2PU",
  "key25": "4yZsxuv7WTvDo2dE1wjkp83jjAL3pMgjp1EbLJLc1ow4ZJkxyT7QbBbJEh6BP53eDZcQAd4mwH8Sf4bvwxMvk1xr"
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
