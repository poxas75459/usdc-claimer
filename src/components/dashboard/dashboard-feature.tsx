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
    "JUSqyEkHZQJqFmTc5ujhZ7BUKjrDvrV5mLFsdZkDPh8Mis18MXJhpbRbA3rpYmbCkiYVKWkeWAQyit2LJ5iiVz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPkWkf9oeKen4rofUM373B2gJ9eknMk24nyUnEVni9cEU1Es6vZwiGMXUF8txwYWmMjW4WSoj5ysmoELgC9ERxt",
  "key1": "5TGSEdiMUXyMqUE9QvPdsAjvTaunVBhF5o6z2F1rmfWFvfWXtehKipAN6LQrpUWiaBrw6VBLNvVJryQBKmXHWv92",
  "key2": "511AA5B4X2q2ZqhKU39ieBVVU1wPtq9WN7evcmHLLLaZpJ7P3r7y3TuE4n8DbTaNGLjzUhM8SyqwNdZjRaGjAKic",
  "key3": "52ZyqoiHVqqhHpXBizCDR17Fq6dbLJ8rrFsrdo1Y7MVbspgnhsQFAGmaEr6vHKrYgGoEGT2FQUjEpwUpYfHZhBSG",
  "key4": "WjCxbK71ZDHJ4oMG2REe2TSFA6Vrwnce95AS9CCMCYJL4XKgYJa8qPdjr71f9Ghd6hqudQQAX5Ege8guwV8vVgw",
  "key5": "4j667cNbWoCy3YWdy5mQcXEYYmBJfhTTksNY8ZRD8ho2D1vJqYnjAQho8GyeX9mp7YEcRMsnjXqXkM2HiL8ynbyn",
  "key6": "5DTkYeen5gtGwWHbDH6Y6gNKF3Un6nAjW93JqUnktcd6ETscUvfdkxu6P7QuVggpqvzRuvDWzibmynYbvREj8fu3",
  "key7": "2WBfoJmmCwfq9AQc8YVJNoukeFRe8jR4tjt2qHPRgF4ZFCZoxAwtsrkk3WoHsfL1XxsnUtNLX5c9BeEHST7tuXs2",
  "key8": "HqJBmME8NBUpSX1jEKs3d3QAJXkvHVkfA4AxfXLXMvCziyL6NZHiTB1gBnexgvweoNft2ukmiRcpTaT7HKeKJt4",
  "key9": "5LGWpDsnPgAbDhS4HUZZhg5E2WSuAneBp99Jbip5kRUYMcpH2R8ioHgJwZVt58EZAuGR7TyVx3JK3h2qmZG9AkYc",
  "key10": "aHetHBxWck7sVogReuFznZDcTtuP8WVgv95g9u8btXZbmPU5M91uzsQtgSqwbwUJkQA973euUkeJ7f1yiQL7gNR",
  "key11": "4Gih5iQotG5CHcRWjQVaCrjGatMHtBdnYinArp6QJm4nruWn3vdyQ9VURaMnP6pBZhS7dREFp2t8SjLZHrLgX6g9",
  "key12": "2T8fWcnwbQiDePPMRXtstw8WuLqKsjiAc5DTScsVEcJVtLjrb6XeGsFCBuqWwWrKy7dC67zGG5WHfDmDSPYJfwxs",
  "key13": "4cV5bdoqo2eiba7FDcuKGyTtvh4PCWo5JcGfyoMiEB5ryfEkbNmuk4TWFeuHdJUoCGrmwpGFNAscFytJZeNWeCst",
  "key14": "2QdjBgREmVsr576KEK54FVdJLmxjkgbTuYDQDysPLFovW8iBeimzjfXEcZEgJNJWakSiid1YRQumBriAMrWzHkw5",
  "key15": "4NLpVz1LgVekv6pNU7k36tfAW9j6F5w8Zxdkd6ZPArMyNiomuLPtUhWohzKiT2gkTUGUsSUNcAL4KjrJQJpFX3s5",
  "key16": "3L48CxDT79VxKBMrFDRua2diTuTW8VtS7dZGFDx7YjtMRydSZRD2UdvANmbXUgfQYTmURzPtmshZPeM1oWnKSWwo",
  "key17": "3c1hryxjHtNLmG9RYQrwbhSLzxG7bFnRukgbM5nVmCqVjXBvF2ghRQ9TBk9DDHAzcLsRcB2ptQSGmPVgUoaQCRqi",
  "key18": "5p6cGc4Z1oDPJhPdyGe4FiUrPW1strKJrT72EUbeBjesipJ7EAnCLTxacieqYGLvZsV2Zbxwuwa4uxBCjGiS3qDL",
  "key19": "8w42RZ6zfvHVDEnyBS1P5NCFuQ8SBvtFxQrEWDyThmZCdMURSqtEjd78vyF18YowELzhUHAWrxqLUkVdMTzqZBX",
  "key20": "34U6cS5emLXgi3LRyNm5axK2jUoPnvLUB2XsvDD6LQpJ2Wa6jAreDenrJXojuDwHLcc1k4xbYSSrSiwDdMNv9LHk",
  "key21": "5yWYhvKAM1GEtMRMeNzwH1zmcmsPXyTnehKZDrrwC3hTGwkmhAdXxRp48YhKPPK3Ak1fL8RZCL8P1cV4JqHnuHnD",
  "key22": "4CS2CccJme8zJPYYVr9GkY1b8Wx5dwZTis7sQGnoqR8Z2MigRnBazBBLvHRGzsKBpB7Yybk1DsBkP74HzmcFXUZL",
  "key23": "66ViQJuLpkazommYEexsW2aeQPnMoGEA74nQErGzmn4ohjrZbf9L88CACbT6ax6ACizyKn4EoYBeeMvFp2hNbsV5",
  "key24": "2C5pq5sgNnvr8B9P9BSHrNQzJ8NaETqn7Q8NhgV8sBFbos8ZPkfbbfVLCtTdB3tJfgSsAW1gCi66bafMaCKBESAP"
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
