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
    "61BV1gk2NkUy9NEuSu8XdHjGK4u6a1594LS99qNWbnxMPFCxnZQRZadm5MamLAbmu96Z1Xht8tFc4pfRyQthGgjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1LwwyCPEEKdrtyxCWJg1hTeCMcbr3o32WFre62Zrg4ZzMuvCy6BCdXJXGzNq3ZYY7NaPUoxk82jCs7nV3NwTm6",
  "key1": "24YBNGQasnnNS8brSheCtZAuhn6gnmhSgHCFWvRxeSUNn7oiTVnxqxeHxeMYibfXB9fXknWFjNco4JwcZxbk5SB7",
  "key2": "5gxSC4QSo6wVrNWn2FNwTEf3uenfdZocMYzmhrLcq8Nax5w6fT3yjsQtUQiv5e4sqXXqnzJwEzNSHazPe3pMqCtU",
  "key3": "5sSoQQSk9dJ3V8bm9umug2gpPCxybZaqPqr9QJPCYEfuGJdNWTkgE5JiAtvz83dQ91Ty8LVwepbCnPGYz47XXQeh",
  "key4": "1fBHKrSSgZ49gRYQLeui8N5WHQYtZc2Pdj8WNUEHRe2aB5b8SAz996YBc7xA3chLVa9PWzPjGVfuU2UcPKXJ3Cu",
  "key5": "53Xu1jqGgQq7EbDxrrSzCtZBU8HVqPwWvKe3VyD17yhZrjUpSKMriAQrT4GM8KCA5RCtuAZ9BB15MB297cYJUCTF",
  "key6": "gWas5Ye6CzUqMwChEyBJv4gqYWHcS8TrVxE25iQFFMkVV43hdgySQNcbts6LNKTEcSYbfQ1uyg7CkxopWSt9Kbe",
  "key7": "2mF4oahXWCHA4jk7HpvAUVpKgwPheijVEXYjVVTta3hCyvcYvfnJSyUWzLvSMVWtBDYwB3HwEjYpiY9w15VKY6o2",
  "key8": "4Sp6rZ9KTxdSHoDMEULnXfPFdi4cU9eQuhxxKAZED6MuhJtfNAgmnLBsw5ALceYShpR6AoRJyTVWgxjpbVgfGEzQ",
  "key9": "2ybjp9pZ4Vzhmwtynhyj21EMDJ8puR5mCytpb3P7RV2bVdNHDoytzNPFkWF5DkdDNGsRJP2tJtjSsGYMMnJJEX7X",
  "key10": "35XsjubMaaxAJAg4GXmxwdkupBJhSZVTq5hn9S1E1Z8yt2CP5JqWowQs8dXN7FqhbitLdNyXLUq1xzYkCv3nsyo5",
  "key11": "3nG4oMVJ96trRh2tqeUCwDdz78PCdz3LJfgoBvKs2pH9LQfqoQwVab2q8br3xTjiQ2pqfpMsKh8p2jvWxM6V5Lfd",
  "key12": "67TD3fAZ3D5bpK9Wxda6esyK1foCbdpXijqXcqpbTGDb4wi4A7RfNT3GHz7b2cwhEjQ4AV144CaNgFMELCtjNrTq",
  "key13": "4fMMW43CzvKChrXwAJju1LnbX45JvpwBZQzteieiTr5p62oZ5B8kqtx7g7kQn5B8UdKwS9u32K7b6cFgsFvyeQyH",
  "key14": "YvxrExQBcMzzHzY5Cdk4PdG6Gr4JU5f5p9HcBk7Q1eDxXwuHhoSkRPMdanXpBBcFPWMDxmbAFj9xJTcKVCDWpLY",
  "key15": "4EwJTZyLzSGiMpWAigjRe4GrRjhc19DApzsaih5dw7YdVJ2grz5531gbuoKYJw8gRbb7BmxwfBA4rBPS9ACH7hCN",
  "key16": "5uwJRMd2y767AkBHu85a8xy36G7JWn4xQPDJBHE65TbBvui2Gi2imbKHYovtsFXQo8aWH7HYMrHq34hESg4UpBbE",
  "key17": "41hYctagp11mX1vZoyRqYT8ymjwhXkdgMD1wZ6fvQ71KtgMgifPxNp53siUTLt34QNe7v9oxsuarGp2pkKYFpkhU",
  "key18": "4Qa47rtnBqeMeGfHDoGQcziu8X1gni2TW4UzjfSVnFciGUrryfAizKU8SrfU4VnzP7NbzUGu7Eu1xtGeLHMaEFso",
  "key19": "3SC74nuKyhJuFZGjv8n9BZaeXGWQygK65tc25rcpY1irU9rFA7L5VHMdCLmY7SDb1iUrFoAzGzLaC8eWowKJ4mxD",
  "key20": "zKiu15WocosUJZKyAXvXg5qRbbq6ob3mU6QsbHxyyJfaa8fwxA5WZnfsMxqaURwhBTgNAhtAELJgsJp8NYfZ9PP",
  "key21": "ceb133DhT7MDy1HpjH3WwCAUGo5pPTY4Qbypxfvnoc6RN8bMYLqh97VopYoRx9VLGMqLk6bXWamTDRF5mqjpUTg",
  "key22": "vcNjLHWH5uEh8pgNnuJFJKzxb2zMu8bMU8p2Kvb8Tve9qUvWhoRVDsf8x99nfYoZ3h9s3h59zT5Dx8TmZ8vovmF",
  "key23": "2sVxJYSVcy5gZWQTweAty19ystM6bm9kz8VYGhL9K78hZvee5bondctiwCgWU6eZeFXxSUuV7uHznwimcLGZqSqj",
  "key24": "3TKYpveNYPQE3WSt9UGH9rV3oz5CyUnotcTR4nFfdC6XKtxhZSQ3QuXKSn6uSQdDBCTsftKmqj3eCdjQZJB7L9KS",
  "key25": "RDzMmwxjEcisgGGmPfz3UUPkEbpoKrVPyso7ZDufCewZBgYNsCKW8EfJsbNM21TWPm7m4nJRAKJ1GewQH8QF7VA",
  "key26": "3fbVw4MjRD4FgeQnxoopfrgdMYGJE72pJBMfwLVR3diBFN65Je8uXcNZnNsJ9rcXrRjehDUEqejCoDPi9wj5fZbQ",
  "key27": "4zAB8wvBdMXo1s6MDbsnPLp7URbeCJMBuWBzhhchGtMTGEo3sWbTMSAD74oGU9GSpoCM1XNeGeL5arTYyoKZNzH2",
  "key28": "SW9waPx39hYupXR4dBKi7Xdqz6zYDXa12oiX6ajanmf92u3vkeBZX44YgX6e8Hifb8iNzEtWK8k5rvNnwA7TEa6",
  "key29": "4hK5yw9waVUb5AmXb3oLnq19kgiNpVCVDyDqUnVdd3ssxxSnyJLp15tT9yBrPTP48SEuHzHk9ghzYGfGpA9nKts3",
  "key30": "4MvMdjRoSVM4PNBznVgMwDmLBYdhv19Fq59QKFKqoGaFUm4vsNJzymgCS4bdiYQRwYdR9gDUcdLmjn9JJQrErHrR",
  "key31": "8EgLYMgQnBCHYbJm1n7M1eix6wWpuM5CGXH5GbNf27cdyuGxYUTz7p1igVYmDmdm9FcSWTfoM1QxFz9rtYzD48h",
  "key32": "DRYGvUZK3ycML4gSBveZs6wbnHDzUYGuaK1mY6fH3XFQMWY97XkbAPBeLVkcV8Y9Y5GySjPk6Yagx4hQBQmgzry",
  "key33": "4TxoPFt5VJ4bvwRoVk5K2sppLNEzkescgpve1qvivXMLVb457pYtqoCUMbLb7oqLZbwRJzUArjPLcfmLy4bidTpj",
  "key34": "kSiGzKYJfGt4b5UueJC6RXS8T6nfi9oZ7m8k2YKWBQTCMkJfqa98mHwwSVP5hLwagqGZYRLcTEntdfPrRYsBrmx",
  "key35": "2rPFA4jmsQ4BzauLRKcTbk8Xmzj8gSvghnP8aREfqdurJ3CHfqyCtgsoDJ5e7vwu65eF1m7emgB4Z8HYxQcLZRhX"
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
