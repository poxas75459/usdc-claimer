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
    "5xftYaaNKWYC3tCPsdGZYZNwDC2Cj3BXapLwDGT91DpkYqSNeNNw6Mu5DRht6CACSkTquCJTBqbqH9iGcHZ5uEos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54KiBQtD8dABkiAastwuANNkoZDcXVG9qqRtye28sR1qea5kjYjEmVDTFfeXupvNRWEb9ooHXYDxDZX6PmJwpMVW",
  "key1": "5wpVe15z1HMcZ5DUFf9bXoVKhrHyreSQLPfoA1nc6MFSaAyF3iVWsD1ZjWM4xZ2bdwqxiNv7MzRfEggn6ZqZJtca",
  "key2": "387sFyYDDSKCBxNELdnYBTZoeEkHim7vLRaEhkj5fYABUBPKRsG8LyPnNwHutReQz2R2QNwWxacRKZ96KndC1AKf",
  "key3": "5NUHJBgCPuRsW52huLuJfKbHGdsdZSAj59J18CSVv7SgMzjAg7Cq3AwmA9quJQ4Xnwy2h1AHPJuJtnfRVKKVaYNW",
  "key4": "2qu4zrf9qgdjPuJzjkNsXtMae9qGUq2B6E2qAp2FMS7w7YRwaRmVHxaQb7XhDrEjBnGDy5w1VqeQgpaFwNDwTqF6",
  "key5": "4TYBBmwZzLYGVsKb7Cb554dko7iGKLfhoWty78U2gu5fbWp82UhcPRsJpTusEErqtqWPBe7hpVxjuBYiwQRaAtaD",
  "key6": "wVgZfD4pH3JBKVgoYei932qTwKeoHvr4Gkweb2o1RwtnbvJKBqzeuykfVjxx171sYdHRFFsPsLJapJ9ZgdcRuuu",
  "key7": "28iBEqe6v9sBMdLm3bUaWzbM88Eb7UWBLxdt15aQAR3HFt2J4228GvRgGAB9dkvSBgWuidGErdQ8Wct5TNUe1Q2o",
  "key8": "2V755hipabYfAL2rQJ7SAz9RJqEuMRXz1JZ2myc1mi198FMBzYYLGoMb2AZG5EDTSdxnHYjcxTuS3mwi59GzpJy8",
  "key9": "25qf1JnyBM8anLapDQQuo5S2QYrcDmUUq4yenJyJYKjGrW4CfpoeGgHZjaYN21dTMw4CdxmhvbkeX7eUSfm4DwTb",
  "key10": "iGE28ADhyEqjcpGMkvXw1b3DuR9poQfyHa8VSt6YfaoYtgZVuC5XqBABEEtcPBB5pA1fAR8YpGcsbhwH5ixQRRm",
  "key11": "2CKbXwGUdKDFC9i8pU27XRywD5BPdDGViVVQ7MynkBqoKJJ3xNVZYm1Zu2AWKzr8BP8SZEaw9rrhMLTazxfBHh5b",
  "key12": "4MGQw9EjS3pqQZVjW98REVPmjWLAZdrGiYNoyUf3VXnYkGTvJMm5Hd5A4gBfzcEMPbcu1uNdQokjsjcBHyAciFP8",
  "key13": "SFYSe3TnUP9CenaijgeTxLfrncSpnzKZQu1k3Htjf98enF5G7buVKPuyPZu5bZ6CXjGtETUj2ALFnSeng1qHDuA",
  "key14": "282pyjzEtDC4jkAjxNzoLkGD6Nu5VG1HwovcHLMNHXFRaN47VD7SQFzgdGysRjvRqEMy46z1XjZbfSnQ5JA1EbRM",
  "key15": "2zDUs4tA2GdLtVBrEiWSLZp6iTcm7DSPe7uhFFicSJUgZWnTSvhDAhAEEMcj8b8a2f69HxFuRSQ2hHWQo1JH5Xw9",
  "key16": "2weH8fgrntUhfDAWxxBH64SkPcuDXaFNTnZ2SXA6f2Cz8M4yzpwE7pwVNd6qWYA9xXNy4jG7K8WGtESRYJkmC6X9",
  "key17": "rBqMAnXmw5c8asbA8LFYoqB6Cs716RAiWFLqrRKJiwXMGJjx3FsUJFsqBWqWZA6ZTB8LYJUZG3Q1TJEowK3ALmu",
  "key18": "4jQrkKBuUTx4Tv2RSeV4CqtGsZEPCV9pAFGZZQNL3ThoLbCPC4bZyBDjFQ5iCr1prH6Qbhpci8NgXYgjVUC75YK2",
  "key19": "5Mc9p3bK7oKQqZW3kQjkuPjfF4ptoJyfEaCA4cmWJrjGZSpipjE9aDKzm1xcfdjkBvxrAEqNmL2vJYD5NN494mjm",
  "key20": "3WmQrucy9iysJmVRzbhy7yGR7oYEDATGqhrGcNEb6WD6N4ZBhKrbp1TStXMddTtetEt8r9wH1Kdor3ajGX1pKULb",
  "key21": "NGqHfoeeXvuRw372nCkxJDhebYQdCGsgEgSQrViFTWZ2fVnhvWTevuBBFo5Yf6s7oVvJ8Au1mc1YCvbhpLA91vd",
  "key22": "5vCbDWiZnRsdANyfu5xdWQLG6U3tNge6wAYS29zv6Bb4GMYSfv1AHJdtdoB84P8zNvQi3NEjfrUwcAHSYyPSg9Xd",
  "key23": "5CJvu1qVbyBPfaGicYmdBmh7diK5rrDxgC61gNU6gKyeqcSsVmPM87jzRg1DkXihA4JmY3zkt8xaZVAg7Tb7Jc87",
  "key24": "2MvDYczNe4Yscb2JtVkJ2Cr1GN3BXEmSaTvZ3aHDpnDxCE71fqh2tgKC4bkdf4boGEVzuKx5Gdop6T2VBfLdFxbE"
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
