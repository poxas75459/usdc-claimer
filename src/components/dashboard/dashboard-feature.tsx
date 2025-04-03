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
    "4NSsC6MFq7WoZfthUYkVfPaqK7ZQ4H9TWhM7z67pMkdJRF7gSGXq3J5pqumGnPFpgUDbYUDu9Vm8arRafiWU8VGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ks8bo4N7QtHGnWXc5TM2DDc1ktpqLDzGR65Ztj8hPP4HyfaJZFgtt81by8DQLDFJpmJXLJLCtyJQCx27JMtjL8K",
  "key1": "42CaJei1tCj5zSxcKy8nDdp5YmBssFP5LenCZx7TD6C3eYrs9dXT4ZpF6WwmyR12Bi7Tfi2oM1aumDGRZZBvPU5d",
  "key2": "3grEkGES7WS5EiK6juGwSBvDe3L46RZ5FjqW9G9SDsSDGuVN1Uhv7gj4fcRLp7BUiNUfKhSnxXBdAadEeaY2AoPg",
  "key3": "4vo42uGTTPoa6Er4mF8s9gw64t1zNegLUMUmKCbMuKhTByQcj4HXmW3QYmKekzifozGVkubPkDLTuRaaBf4jaNQ",
  "key4": "3DRm8oeJfsonEkXvGQUFGBnzfhKVvshUpEzkzMy6zmXKbZy7D48osBmthh2xBd1UVt2FyEKQNXGk2PCWCmf8KYdu",
  "key5": "4gYNfMnBEMV9zPyJNUKwAS78Dsj12jPZeUFPo7mzxtKgA6mbxnn23SB26kbFbKteuCBwBepJWfbPBZTY6Ku6hcgk",
  "key6": "2AyTEyEYKWfNhFucCj2QYX3hdNpdyoHczjbx3rLiQqo4FpGbumJooHu4yS1GLRMf6N8VWK3DLyewnUjhJNSPG3ZW",
  "key7": "27R22T5rF3TFYhKHNvEgr1h3grXdWut7fd9aa1WVEg3NzjokJGZrM6U1ULoEcmSgAkqKzBaSvHuyKrZMZtWFVDC6",
  "key8": "3CmQ5XyErqLf5kYnJCDbqzcu17k7TX6xAMuPQNJwSvztgoDvzfSBACDg65g6PbeNXHacZVMsBGEerMvUZ9xwykXR",
  "key9": "2CQ2ZUhGcP8K2Y8RPntGSSjgKmXWC656t57R1byo8VYttK8i9z23RzhJ9PN4Gi9JCnN7uVFwed3GvQQr6cZKheJi",
  "key10": "2k41pnWe3Qig5CafaeBgWzz2ktg7Lw15bGbxKTD25wk36ByHP5Gxo8cn1XgNmu394C4HUyQPgZWN2Bqf6uyGHH3G",
  "key11": "2d7ULa3vmbcuCHok51ZU4PsQvCuWuascLkpSTXxaueJ6PpZVmnAuLfnCNR6Rzk2pYvdUAAWYBR1uzK7TddMGgbvb",
  "key12": "4aXQsiAWxZP3GTtHB7M3BbMEu9GrAf8G9EnanuReSrpFtPKSmQDdWf9amMPa92N3yg7eQwXjGhWCg622qdpTgU5J",
  "key13": "3xwg6gxTxfNfvVt145G6LPodMTGRg9BDeXKuPvkmu2sDDL1G1LaBaCZxmYNhMSYrxnmWCuTrKXtcTeLoYqZ8zz3b",
  "key14": "5yCFjjbaP3H3LKQvAwmS3u8z2ZoWK6kMoPW2WzrpY3QyPMAvnsoXETzAFuUy2ZSy9b8BvxxNPLHg42T7mgY76U9c",
  "key15": "3ybN4wewR6dbJLDYHrMy7LY3Uo6JNTGe6NCxBNnXzKjbZu6rXgeBdj6hb6mpu3dEKXTep99QKmtEwgk5T1YzJvf6",
  "key16": "daYZVgeB51GJ8qi2sLVKasaC3XW81SdzpDvFw8sSwsYxY4xoZ7WBp56fqsaaZGasHuaW15rxfghgBUn9yQoBTbv",
  "key17": "4RdSh7NN7MhV5o4GmKt1HvxQ2zZQFiYNw4RZtBdS8TqDwM5xRc4VaTrRw8UWz6ggMGWsFMM2gCEh5XJTi7YA9ULr",
  "key18": "2GgpJPPmDmfFZEf4xAcTdvDdvg1zBsoVQfAxfBpuQymbSGx9Pbz5uxkoVktVMe2aPW9kxfJGy7rkMJv6Fue7aFXx",
  "key19": "35k5CgxGhG6dFVQshioAYvx8zdw9YbZCRVaqUJ8Qrt17wLoqiFiQx4yUivws61gfJZtFnkEBtcEA13HUJtYxks8H",
  "key20": "2HvRtXmPR7jLmXNfwW6KtZe5A3tQgzoEw5fQm29VLUZA9CeMqBS49VXskFFjXiWzsoFAvPN5V2HSChiYmbWAhEwe",
  "key21": "4oRKKn57kkGc1JVV33UCZ4cMeZ2MVG8zdw3qm7Uh7teAAduJdQXAuq6V98aVqzVcYT4JSXQF4Q5u1jGAqdaE92PJ",
  "key22": "64gsCVfXs6eYpKrjso9vq85fvwAiRLWoDKQzMZUb7Lw82BGHUH9jmxzsLxWAkDe4hz6fraShaooocvbvtnPhyUYT",
  "key23": "2iNq5Rynfxchi4kuEPg256reQRt6SktdwBmdUKF52ddqQkwRoQjcx4cKPenvEWoEGfXMUQXEyCucSSzjNaCyRJv7",
  "key24": "nxPGo8aYWpQW3Hd63214bH5zXMT8EjJ3hEJb5vtip5xj5jEiVj8wy852NPRxhpZAvPY6VjWchcrzDtDWQqG3thh",
  "key25": "3AJn2MtJBK84GmTCMBhZB84BuWsYVzPVTZkDhAzWR73xj5qtsZ3ZoT681FEoqW8QaeMjv4RofYm11S4ijtN8BKLA",
  "key26": "kBMcYgiudSEfTen4nYnFMetVvVHj5iteXGrHPznxrCoJf2VQatYvq5rTbwj2VQvVUhJzEBPQxRK9QBfdwKkzC73",
  "key27": "2v1TqL986hrS8hhVEDPDtDjAzRjsATvesDtP2AtHbjqqTwGMLesRkygbcc5E2CRGHME97ta3qs6U8bgwSEb5jiU6",
  "key28": "iprVRN4GX5GZyrsgNVgiaX4U4fKWg1TJEVQfRmBKzhQkcJoPoXoAGhhun4V5zvBtBUD1wveVLumzB8tuca7SwKM",
  "key29": "4cnwjmf1iEXMUiHz6LArGWzqVMH4xnR4NZTfedD9oGVsUdPwy6fFgN4N2ErmSzN4uUmEHoYUepAwsSkAZ8NrLsRQ",
  "key30": "5PZz2xB7eFcjzHtc7ixctHaAv94gSnVFtedNFmAsVSZn8TLZog9WUddS85G4fRkuP8UuoVymkPTQG23DMAfRcU94",
  "key31": "UEvzV6TTvpSC8WsxnnUhWRzcpS3FueVvsq71ghkTLQ99kNovDETpCNNpkU9dd8KM3qzX2KB6H7BV1646Yu5Jvex",
  "key32": "2aCTr4RXN16ZK2qDLmtCaq1eomXJVrRBcWcuPp84EnvuHnbaJqKQnJ4f8KVAbCd3WHWtv7DkcbYuw4veCoE2fqd5",
  "key33": "33C4hu2zNUpxDjt8QE3QMpJ3cMef8iEwL6XQaGbNE4t98NLa1mnrQb2NJwWgLpqc39TiFj8p765QmEB6PHVTo8HN",
  "key34": "28kHohprtrrYG7mpNKFwmtuqLLgDdyLQWJGgzho5m3bFgd7ZfoHS4dTwVKiMf8NR99zNPvDaEZQkhgyNCuaK7Dcz",
  "key35": "2FkwVuWasrNN8rfPeR6MTE9mRs51cbNMwcYPdFuLvPTbzimUAsBDme3kqMD885LeUsUDLRm1ES1JtpRiNgBceBwJ"
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
