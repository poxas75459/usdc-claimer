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
    "5xdbhYWgz5FoBTWXE3Q8iNqWBXATW5r1dTD67eCJfVAeejgYqmTgFsE3ZZBQHTmGxwV1QLCpVDS4CEVoFV4vki5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUmd6GHd2UjjLRpNfJ4MfoKGYrYwjWnJD9Jhxij9KBY3vLmnMC24FZM8dvJ5E6TtdcKGh8FdMu7yujoThnT6qKx",
  "key1": "5LoLadQfZCPXyERToCNPPkcm5jfdBHA7Qv1knvTzGhkREUm1CJHcyNQ8X7E454Eqej5YjSsjDZxcvZFw4MK3CLsn",
  "key2": "4Gb4XLq3m5Fc5LKa6VrWnycfeKbFkMT9rX43qE412qGTCyd8xqFLjd9Cx9f8NWieT3or8KRWohnoF4zeAU8FwBSp",
  "key3": "p9Y5WtoSfXCqfnr1WbyiyLgKrsehoSyL6svRz2tZgjgUpVLKrhfDeYH3Zym5YTBYG7dTvmwM9LzVKi3ART4yecC",
  "key4": "3Pi9ZnhXEvyoQnNcEunpApUCr9P5yFi2HV3ueFRorRQWtP7XTLK3Yqd2xznMktoW6UBykBBTartuG7zLR4GzM5jc",
  "key5": "4bjhzZ5oqsjPnFgrL5coS9LTkorvjMkymGyCkeEiJsWbT4a9Rq4KtbNHmUpaRkHzxABkEdpQuATmZtrXyBWu97ST",
  "key6": "3YTfh2WDsnXjd3TeJfJQSnFRdAzcVJTGoyLCYsSaYQGgQ1jde3WxM9XrEB37cZkXskddrK3D81A4PTt5htYWyiMV",
  "key7": "ndHqJpdL77MFrgz5KLwkrcChEKWFrKQuaThwHonBMwF2hKUFQwbzUWtwAycTdDT3QaAF5Ad8N5yKNdmFxYYg9Fe",
  "key8": "CFATuGVyQqzC3nUBE1N7hYCxE7bVCUMBGgeSGf3No5uCwLgtDXsmWL7yJKGsJAbYPdbViLiSGWRVhqkC58QbnbC",
  "key9": "3S8WuYqG2o6jpA8ZLq2B5aNLtrDHMXRAvt9rJRsv82zLMPG8PriuuTJk8uAASexHEcBdjwdvAQinHg8t4puiAy7D",
  "key10": "4kJKqxm47aoaeJR42QnoPrTUsCDdNTQv8mVahYsvthVCbWHYzyLbfw6CpJon7VSLgT33zhNUzjrERwKRvzouNsem",
  "key11": "5K3zZHJUAyqrTWeg4oXK8Dt8HEtyffVMKvTYo91KS5ndLEgetTTEcggtfQv5KKQGLiVqAdkPWFt2bigQmDkpifWm",
  "key12": "4tcZxxcayPnbVjreyxZE6ZiX5WbYemh3BYPpsDWpn4ekgEycyzgRqgvqF893oRpfLmbuKFFnFrZp6iTwaL4eLTbb",
  "key13": "3WzKvdfdmTdBFe7Zpnt59tNgCngn9wAAVg3Xb7aMBg52mbtbMtLCjDizEiBxKzhUAxznkQd3Me19EfxB9q1TXfgc",
  "key14": "4P9YP1yqu3iy78dPTgSGNd5nhBfTtAj6kz56Cf4Qi9gQLs9SKuo3jQ4SNNFKHXdiCkt9eDSRjzEMruqVnAA8GeoG",
  "key15": "DHqaBo9sRdy1onFM87kkWEb6XafHDJ815ni7CqpnSRjszvsvexsJZkwdcc2DkLwGpXS2SQGUpp1W4e5VTxcspCh",
  "key16": "589acCWUaZ3qtHbKkShjUN6ShMgntNnZV3J9zGiNrFK7GfogAWK4iCiQqreQS3kevsyNeZm8UhSmqnxACEbGQStt",
  "key17": "2DxmxYs57pEgL9fYsWt4Fi2CmUrssy9XSD5U7WFw86GeXkSkGoi8EKAGnLZiGNuWgCCeiCd27QhL2mYHcuFGZBRL",
  "key18": "2gCpEq7F3G7YGj9R3DQk1ivnRxnojaF1X3zYRH5c1JMdD2uGCsPXNUMHj6NRjAk2aCrLXePA45QZDsPT6ifeWsmS",
  "key19": "2P5SQfkpnuPkMaFtfkRQwctkpotQDEQPYxiWPrdZt2aDSqixDahigHPyAXKhYYnhpjmNx3gWchEjGtK5UvaRbvjS",
  "key20": "mhssfoabk9ixUT3joWAfYp1fHWe3rCFENhUPRtopBBiB9VP14PcFTKucwAtKJGjXQEye7cJKC7UxzaMcTMKNUdq",
  "key21": "2cbk6PjX8L1F7oGvZsQmza9SWPrrb6miAaCRcomrzei94zWkHKeh1YTYjRCmdxXC1JRZJLGfVJH8BXgNkt8FmgTq",
  "key22": "62NEhfqCYrGXBCynCjmhfiQBFLLC3xP5LvKXW75iHoxu5scM6VsMsqUx77WprK1g6cqGUzHGiRjFPAm6YgLyyCPm",
  "key23": "5Yot4ioGgQCMFfQxZJd1fa5R88Ti5RMMV6UY4bG2koe4uqx36euGZkB7WZazgDs2HtJA1VNidDWieAWB4KFicJDD",
  "key24": "3np7MjvdCGokjbmPDvAWGXb28pxLrxJmwgWATML8zFE8Sae1Mn5X8UsCUZskBrtr1td9ReYJZDVWEoFQH7ee2cMr",
  "key25": "uQkEfyZoAkCaccVA65EkuCPhbUdyKx2wRX9XDQP91EwLT8bzzMeJh4uMZTYMeCgSQf7R1uduF6L2yrvQ1XLjo2c",
  "key26": "2ZWaUwu1b2vbRJRYP7kXs91hUZ6m9Ubg9jnUWY3janfRrHB7gS7BJECFcdeG1i9Ur6E8tKLhJ1vAskX8CCvgJm9L",
  "key27": "3PBt5xA41ho1Dv78UR36B6uBQbvnd9BgJm2hvNfJGVxqgfZ4v4ur2yJZ5RoXPF6jJSdfdPPXnMXqeuruBwicLsPW",
  "key28": "2LPrGxv4WZALE4m73WQvp4obwxR395NS98iPv7mzG2CSXK2kwN8JH5HpEXy9Lw2gk353AXW6ZdWEAev4cytat26H",
  "key29": "5Rw1S5iRPtZAaJhnfkaCkKeh8Cq8ooLRG5vMX8wkJE4fiZ7JuiAEy3sVoXeBiz94h3i5HrqMqpCz9ZQkTfFJhKu1"
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
