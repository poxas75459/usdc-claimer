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
    "53ywa4nLK6s7VLPsFaMWwdkvr1rmU6N8ABQf4RwcM1UVbrzPULNLXStdqY4K4zL7bMhNGuDcWqSzy8CKVpGHtZ7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611rmvPWvPW43ptmUkyXnyBUYT6HWHXvvDq6VKJHXqBBczRx39CxfJTpgMrX3uYeDdkfEZSo6YkwUbcHSzV1tT23",
  "key1": "F4ufPuTF3sUrpEC4Mv2ayujhcgsLxJV7KYXvUDcJQMXHK1HY7moDaSEnbBQH8LJx13G336Q3Rh8eLnA1RWkChWi",
  "key2": "3oTncq9JPtJjri711BbgBBQs4SvvyvAim1reym3ALuYfG8Feti4URW6NSTPHeDfqSwG1tQ7aSJJZ7rGD5VefNrRL",
  "key3": "3u7x6Tc8YYpBk7qo424u7D7NYzQkxQLG4UnykgTQnkdyFeSepLpmpahTENdGJQaVCyKrcQ2sCpALHw5fM6UDamUt",
  "key4": "4TjeH2NjKwqeyYpAaGab75MMVU95EtcrSiKvGFTAGzd7CXXd4nRaKd1Jtdru6NmwCVuXBGC48HojCDV1eodHaZGd",
  "key5": "qekAMrB4PATreqjc6GMysxxM3Ce8DJHEYwHd48ZJhd4TU5rn1tZtmnmZQ3sovQoCGV6fpKkQG4HuBAyHipjZW5E",
  "key6": "5hLYoB9EFbRiB2jkK3cf8hFezrgtcXFYtC5qFdZUSMtyj6kgb4mweafBGJgxyVjzWg6viTi1so9cjKoAJbCHGr5W",
  "key7": "5Wcuwcgm6Jv9VWzp8jpkNmHfa8dUDB7iV81FdBE4pQoQvoXKrnzSFc1fhNK9mdsF5qqssZKfKBpvPMqEYk6XXaHH",
  "key8": "3NDS3hueVzPnLw8EzEVtk8zGYuFbWA6zUis8C6y9wPUj8K14PmMLxs6aFf9bVVaPQ2G7FttdF2a4jKhvs9MdAuSQ",
  "key9": "2sCA7127ghXaNFWoDxM8cgbo4ppXWSjVce25VuLGiQMqL94Pimm6WZfxMrBXSJxL3StMJGmE3BwEuJHBWndL8TGU",
  "key10": "3JHBoMw2wkZgYdFgt4kg12CJVaq7qrSjgVonEJq6pGTXaGhSzygkURxhHEVMP6R9kAPpY2YbsRrZNccsAujGAKyX",
  "key11": "4gUxMXqfpeRW1S23GH3aLaMk9oWeCYAqXuCJudtdd3dYFwpCMobepEDw8ApMV2wEv3uC2YJpqjniK3ZKc7PZ8WGa",
  "key12": "2M1KAg4ENSr6grK8w14bagrVbNvK5yvspQNjVLFke3FDmEQg3c9muT6AB7D8C1meWCiDVRzXQFiq8Gg6TB46A8B7",
  "key13": "Woocj7Wty1vVX7RdnXjqshA6BGJmFd9bHMkK9c18JbJ4Gnw8rhovttcjsyzThit8a4oskeRpoQV6RMVzBKVYdLu",
  "key14": "5grshXxyA9sSF8qBuwEHUWXUsGqmfo2QKgcMdPpMaMpgWgCT5Kb55qN8f8CaojQbF7sLEd34wXk37WAQVAYocZ3d",
  "key15": "bpHtzoAEaq9CH6xGgikck7vBZscLH317WyR568LcgHwFJygy1HfwQjTudogSjMY2iJkWib1s6DYAh45em5wiGoo",
  "key16": "5cLUT7B6mpPuvPK63R7Xr3NzpzTFqct9y83LWbxjp6F1dXr61a9PAAmDupheFUCkXZN9Kr1o3Fsza5WRFVAdAXup",
  "key17": "4zxUgKafzKf8kSFJvXkaVTJQhLiECL1cZKwXpJjL9ZF9eXKqWmuQArTJQpYxunYLKUVPCqEFihgfZtm19Pddseb7",
  "key18": "3oTT1rNGoFEL9AiogHeBTiGZ6UmR8d8HBaBZWSggcihwZhRBoqaifyUPTsPSpwc47Zs4rEHmu4ECdq7WZY8baCQX",
  "key19": "5xymCi9v8H6TVSPgJQxCSiHuCY5usSCnHLqCWvKcTygNWQPzF5p3tFdUc15atC8E2pwQidSDqALbwzSFGiZcgKVF",
  "key20": "Lvq3JHYzKWYhrsWrd1d6cV3g6hrkaYnTnd8H4M7Z5GZBvDYDS79FhNjKSQPugwXREr3CYiX9uio6g6VL5eRWUdY",
  "key21": "2tdSdMTWtNfTewLhAd6Q6Rv8Rr2mif1Mjn4WdMkPMEqtDK5tPkhmnfWEBcDT5ufHXYhMoga7gL9n4onZVXiNKoWp",
  "key22": "232gMJaUaXg4T1hHfzcGPMjgvRdLiS2oLQpqU8ZMsx494QtWi7cNQSF8aRN6UcLiTGkmZ1fPMcXa7xZuXWt6scPG",
  "key23": "4ZJJStYGbc8qxxteo74Whc3xjRnD5M6BE6J1dgZCc5sThomjfW4neyVfyZqNZSxbM6aKq3nzjGTJa5PgnF6x2DQV",
  "key24": "5ZiRPzkJn6FjJDMEQ36oCGq2F7RP4psytEExnUBpr3WbHHJnutoNKa1yXphyRVe4jpD5XDYD8bgnTEJsNb1GkATG",
  "key25": "5JnBMW8Y2JeZfkCjMbgomfGGjhac5EJzP5MLCkjktUE6cvspcBfwC3euWdX35fCGQPTfjPp3LJWoLms6uLh8CATE",
  "key26": "2hCGZuk78XqcErhKca6qU4mdzCGENxVodmdYVJxzsKHru6h8V1WcjkSQ51YnddWt5nXQgd2EkUNZRSoScsRZeh2F",
  "key27": "4rpuxXxo2ytwBwVLQh6w57NQxRbcckqVAPLTEQugCBNW1QoafdDG84sa3RPWFzRRsNN7eEeP132z8TpTtGwgvqLG"
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
