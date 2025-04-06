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
    "jVaTF1Yw7JoR36D3SbP1ennzzdBqL8BEi7oYQ6Yo5oUQSaoKnE3xScTw39fBbLTvnfM7rV8nBj4F5BHJzrxaRUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrv81wUosrF6hTFfaX1cXJhJSDGxmGoyZM3iZQ6RHrvmwd5r1HvGLzeE7L6aneV7qavtT3wqGAMTst34su56Aqh",
  "key1": "2DYDT1GNUHcJn4SnNTbMdYaxLT9EAxUBzM4qX1mpMRQgwexiYJ848rYsDt7zki6eQza1z77X1NRTq6HjnTBj1MHY",
  "key2": "3QmGcpC1z9ySXHX8tixe8VC7wc5Eqw7j3p1LaKmz58G8Se73Epc322RdiAnYaL8Yw5kCMhUwMYscs6AMtcxHBBoN",
  "key3": "g1JKyXn8g4dKHD3edPurojMareNV1efBi959wcyX4reLcvo8KUBrsejKiE5UyG7XfJTMAwh6FSWiAZ76GWJ18xE",
  "key4": "2aSa7Losh9r7JdMUtwB1FZEmJedQBN7uFAorqchyEJjisg5VQH6sYWuy8FKEJsedWqyQDq1WYsEMThQfW1JiRRym",
  "key5": "2e3dEBaTWXYx1ryoqSe41PXQxQcaj9YEFARaMt9HZQYmvEDos3GR68ZXMxnMKvfmbdDvV65Jju4msJ71zsozBZkX",
  "key6": "5NAe6XDEfNCSbTaeuqJx7f57TQVfohZiKhCKQaSxpSYUsjAL11cCqmQLrn7Be1v9ixbVjhcY3UVsnXjj2ah6uwvf",
  "key7": "2Q1FKF7w9Vj5rE7EUgVGAZkh3CsaydVhW8ZTfL6tNzA3t14N5jNP1dP8nxCYRVBW8BKTfZ4NmjqUwtamTKYcjg6g",
  "key8": "4zWaGf8zNgyH1madrk8iqcpdJcuLSikRjRjiFscTh5v4txJd5RQb3hgZh2odj8Xn7TujJSKVoZWjLNKNUmh9nmBp",
  "key9": "2xhnZbuY9ZU7kv9vTxjTtjqQMmXy4nbRG1XyKT8dDiaLX2aXNxSsCnmvE8tMhPZjczwBr5hM1yrP8ZGWCowD8JHo",
  "key10": "3qyo1MKq91syG5AVHQWHZRE1LqNG86NCmG5wtJj4GBbNvnytAyzPGmzJBuPL1AaKCzv6PvkcwMb5ApG2Betgbc6q",
  "key11": "376kAhnvitt6fzpRWxCwZTW38WnpsMfdVS9SuGrjR5i3CCQHxwhJrsPyfFZ7t3sM5ysoyJ12TxwM8NknQv3SgUyh",
  "key12": "5d7dbth7H5DCvqhSgTnYPxcGcyU1SLKKDjXMLbNBWgp122Ggp3ECae9d8PVptc4nVPYCa3UQvTegfkjUYjj6VXVz",
  "key13": "2GXnJDHRoFixGSYrTg34zLzPmrBJefGwiMmEdgJd22pN65fsVRaUCNfaYtagXZXj2f4fL7JqXsa8RkSZUv4TZkfg",
  "key14": "TgH9SETMvy4HUMzQrmSmoTKBWfDJmUQv5yh2mX1WwpiY5X5Nok4xbWXBeJbomcufYqd2apWzCbbLVShxn5ozFaM",
  "key15": "4u7P9kx4pkGLMa68fvNBsAHuLNvE9VRNHfDoYiV3DX52qFNhtvnm8b7Thw8dTUKSLSYM4K3r2shKVfaDk2Dgo3Ez",
  "key16": "4Y8ANp87T9F5GMgKvhL4tYQRUpPUddzSDtHyP2PeAaBPympzUU3zP37gnarAV517TiJ7X3U7DjEzUWBHBNVfUaVj",
  "key17": "PcB6bySjADEuLm777RAzTsxkCLi61rUm1ntanK6FkAQ498n2HiutbKK8v94s8W7SnmiZf1N6zZdVjdT1L3fUsVu",
  "key18": "42i1s1bHSCNaDoMRqWJBTuvzL3DHSo38RuXykTSFT4guWao32aKiqxvujHW2CGUPLiAj6gUyQ8CRmVxFpVqYGV4Z",
  "key19": "5q1Q4PC7rVoZhRjXEH4AZpxVWUVcpNdekFDvHD7NQAFs5L2md6hw4XsSHKBmjCEYHj2wCqfYTfXBd3nHrB7xUgaW",
  "key20": "2aSbWY4tbYjee7chBMqGxDTcUE1Z2C4kA2eGX7ZQGseMQzpezMRrje2jKNk8QVgAQbzZytk9oanEmYKiUjYHP8m5",
  "key21": "ASgNedFoExKAD4ub9qvAMfQTiFATQ5cZkCiUbgZHf21nCjRo1gsEsuYoYS93vqx8nuWD4xqjBsFPkjsJQ7JgW3F",
  "key22": "3DedEGsuH1pemXk6KbcH7bAYrcVfAMBifFV1C9ychyWVZGsC9UsSB4x1iXYfB1eG3hJhTBZWrqhZLnCUZAYP7WYo",
  "key23": "3n2TvYDPujsJotxtbri8YbCsMBbF2g1vSAEPqXtPj87812XmnmwYujWo4DmR5Gd4fVWcRGhqHopMwriNoTENPdMp",
  "key24": "2sJv1kxH7myWxnfBuCMDBJkxgDfbHdmpvUXTDcJQdVafb7n22SWyHb4vrsgFyK4GPXSsFCESLQfL4RUP32f9FM9m",
  "key25": "4n2EkHjkC83VbQirtbzBGEHQqHdSFKtoEP5qKH1E4jF7HEs7KQuPVfk51mJP4sXMBmArTfngk8Eor5V9zLd98wXg",
  "key26": "5N22zKzQoswdUVcuHtRxDC2GztmTpjVwTMEtoQGoMMSZtU8CetzaNV6ACMh8kJyzJ732DwaywmhpNcGZcoqEHWxk",
  "key27": "2rfjCxBJHbagnFU8juran55MgYkF655Djnd9L1rd2SY2NPbj2nyD9L8P918Zpqu8sMji2dpW8RD2iDQ2RbNvdwyE",
  "key28": "2Yera8AZFax4SWVFLDX6k825WCWDcsAdfXj1cxZMEsTHvYDckhwGyQSWMBKPPXFNakq277mhgnyLzGWi7GbjFnqz",
  "key29": "23szyjH1S6HmHrigJxNvZ4HZpAURWhaVZjqAxQAVPaEWfshY1Lfc6eqmnJh4b39opF9CUHmbRSM4HPxiEJd45DP5",
  "key30": "2ySYjVuULUi6eRdMZcfEWvMH7CH7PSN7rzY9eyukBFgRyGhvoEBx7VR8AE5YYvznrE1dyEVqXAYWxAvPyKGFdC1Z",
  "key31": "53r44Yg11foVbSRTGf1rrpUsQ7ZvDfXa2bzTwK7U6snb4u4pvKXzH6oQP8keSsueCCbsEdRtCWuQTbxLdBjsfkAB"
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
