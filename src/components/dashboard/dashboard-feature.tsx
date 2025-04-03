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
    "4Qga2nPeo3B1QQd3x2GLKUcyWUnXHBz6GJWotx7dhd7PK4WMf8M88fLXYPc4EpwwRGVMbZjppJ3SnBEthTFhkZq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dcLgvPZG3gdL1qprtC94yZSuGr28bsokWPzVTgPUye9yKXYz3j7cAnUgarxSmGWrghBXThZMicgJoVsTowaWz8",
  "key1": "3yJ7LFQWiBm6ed9Z99tPNYPBwgzZfJqCb12qTHx1BwPbuEUuutH2esyRixCSurY4quLYRjLPe3GGgtvuQPXAPZJQ",
  "key2": "3jpAtvybYr3sraByXhT4PUW57mv9stp1wnHC869Ns29dMrRCJtANAnzpp3U3kGoUuyw8XsG3PKyTwkmUwozeL4be",
  "key3": "3eB5AYsSEpnN7BDwxR5VeqLqsrzCvpnkrama66boHvJq4GnWg6RNvXjp8o6apdeqPGwynvQ2T5WGRw43b5pYj73Y",
  "key4": "2TTUicFzEj6UocLNJJ74NzRDj81LdcNMjsk8zGU3HF8zY4dj4MLBtPu6Q5B7Wy3vYmQzLVDpyqHLPsDUPLLEuzeQ",
  "key5": "557GaJ7aAYVPdp9pNXwEdLEoDU6G6sXetjvR4xtzTETWvYEKwjRnePqaifjez7akdK3MaPaegxc76rkvfgtJ67Tj",
  "key6": "2k3R6Qct24Ezn1hprEH72CRrP4VvSix2uAhgdmGYauj2wxyUA628T2h71Eow8uH9mTbSvRLrPoDdXfxX8T57wBBP",
  "key7": "3VSd8BWjGwYzRtoKgcWwnXYKttyKvozsUMRvoG7wi41eAVaLPYGbetScs58aSqZrcVnZXmJPzgmw13fmaXTcyGWc",
  "key8": "4pU1sVNgwuycbPSxVdWBv3gCnVTkYnVUXoq6poxU7sgNUJAhWEtKCHvpv6z4hrvYBCyW5HZW67RPex1r97vSTCfT",
  "key9": "64Qweb3gesxXEXXLGRFVJQuTkfp4hzfdYo9CV7oJgSB8Kh2QoJ1zC3kjFq6WEQBiW9XhYA9LXmcJwn1CG3RX4Bh9",
  "key10": "wuC6eSBKexg6J4jm71RDEfVAyJv9w7nFPZhYWNUkXoik8mMLVkgX3xKV5fkZZmVcauSY6yTSoo25L63zvwyi39t",
  "key11": "5MbVnRL9Mg2oss8MdMyRq3K9RMWFtcWnG5sQKkc8H9koVd6fR5FqrV4sZUoPoNVsjJbY2LKzgXezvmHjZBxhKb4Z",
  "key12": "378HqrmXNXxQ3UnVCXdQWrjdw2L8YoVpFfMEDNqPj4WKVW9eMFX6sgSSu7a67WTBTokazcx6CYDxfRPrq9HFJHnM",
  "key13": "DR7gS8DSh1keT1xBHa1WBxZdxqxhhSy7eLnT7fCLp9RnrJr5Qgv5mthRb8mkK3A5HwX4aY9NJkYBDgfmVqGdmG3",
  "key14": "2MBYVciw27Uc7ZmVSLezXs3Tqp3mBYj7oJX1s1AkE2fXypYtZyPPB4yVWWFSxWF2w1JhahaT6SWdQ7omgXJqXkNr",
  "key15": "3wycryvvmpMuDYzX29FTAszvA4BPRmyT7hCs5LLCgA8H2bVKTVjLC4qHVuNh7KwcVciYE6YQoixy9b9yd9gZQYv7",
  "key16": "5WdC7Y5BR3YrUd2TqkpBDcKwuQ5L5As97eAyTpxKu3pJoAVqfiTMsrsiveodQsZNppSvekqM6bcdCdkqqstSDa91",
  "key17": "3QbpZU4WQ7bwFDYDgP8WaKmLi9ud6DmVW2jac5YRjy87kkzgF7W7oV58kz2nYJskSKfH2YLEGQN3Ek4mpEChGHhY",
  "key18": "iXhVSvf9jJtVq6x36tMEvyd6226bBFFeSmEJGt2qadaZcE5UNFF8T3BHiNtRorEGpqzHEjiBhUFuWstkGTobXdr",
  "key19": "481xCqGHkhnoXNUTH81aX1Z8bSTXAitCahPVEPvAgzwwzz3iJzs4RkRvX8NjsecXHye4BP8HfeH9bhkfhT2p4W4y",
  "key20": "33DtF2UVac37bZLGUdP6cM6Vfd54Yw1wmWHxiVfzCG2ADnnH1Cky1kQGEK1WRDPyZjKS68r36kNtEjFrWwzjdLyA",
  "key21": "5MQNXaz5UrgiUWVKsPKqnh7Vi44KSgSmpEM1viREmXueQeS1tD5rtAV2uckShsMXt5gVbKnzUbRM1Z4fbAG6xsU2",
  "key22": "24ffsSrb6ZCW2odVQH5Nvqene17SQj7yMx6n1vXazFGFtdHnv4qCqzY6KLZTK7AXAtgw3NctieT96Dy6uwBYArvT",
  "key23": "4YFC4RmvqRNkk7u2cmZioCaNiTBx8WNfozJwADHWYz3bNKVUfLoACWayjz2SLc4d3pgNqbWnQpU9kGkmzcS3k5C9",
  "key24": "3YRVduEnRyszkaWrYJtoxoydXNbNPMRJMfuDfPRq5kvYUxnHEFmCi7xv6MMem8FfTgu91FdpWR1dGuXLFTHnMBfb",
  "key25": "3hi6AmQisvz8ViU3UYRQ6ZTaHo7aRJ7n4x47GekZvzNdYEqsUzuDPWwQwFjTGyXGUsEqku11dH94TdszPEaH8Y1w",
  "key26": "3A8yHwmaYgTrGsnDxJBY9kbJVedGXQvqNEZZ2qJ98eJwPbZzvQHpmkpqmKV1gipcv4V9YQ8eRzf6srv8Pahhs9Js",
  "key27": "5axi1HjnKbXxeV9FmnJw24z4nxG9oUHgKAZ5RwuoJC7fQRmnfEPxFczjxhaSpq14N23ReMLXFH88fUiUrmRuNu5y",
  "key28": "3sEirq6Hx9tpeghr4CiZ4mDmm46K1qQKSPvfwsveHhKi5EF9PHTJ8bxNBAFvXNhrDiLD4GZN1N7yDFjeiZD2H4vZ",
  "key29": "4dtAzgx396RXbRopbbosVn17wYkhMwRg6ePFEb1VxSpLjTSPfaCie4DozzSxeqn55z2Ls8HFEjFPn7ytkyRZ94SS",
  "key30": "3F9Yk68dxk5bvtZzY31vKH7CkGiMLxGevx2p3t7BesnMtG8khGf1dVcnFNjYDvuRmeYdQzM2y9gL3rzvkQdoMMGS"
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
