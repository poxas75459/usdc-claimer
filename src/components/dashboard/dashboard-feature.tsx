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
    "4ig2EsJTeAnHhn3Nr118ECMpCSUKwESxjVDnT5LJMWPmz9QGMYniqcniyFnaCxkkBJwjsVdfC2vLKt352xRLyg4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Joe7aSHEJugYJc28AJawkSRipEFMT2d88oKDsG2jW8t1f5g1qggRuY7EKu2oegqBBDATx66UA6PTg1Bg3xW7GUN",
  "key1": "2n91LarN23GiQvMHSC6kQDSU2mNjwg2wHZKZoTfCuzgQNqWeaJeHrkayeJJzgFNfXP9748oGrJ3kXjsck16VJbbE",
  "key2": "3ueauW7vT7371W77i3pmdMgAyvaXpZoLdekoxBLJgerfmqaVski4uXd688jwTz3dJRhRZkRs2EYY441gD7iLbQco",
  "key3": "wUENrNQEiY4VL25bv2vKDshydBfGuEMZVWw7LxnUvm8vFuvEUZPvegwwTzMLEy4xssNj3d1UaRLSqrBQvefsPTB",
  "key4": "wyDHHmyTiAWyy7aYfFaZ56F6xGZrD1KFPu3gERgPnzG3Ck3smRRETptSQVm6o6kEua56zzQs8C95m1ERgXwh8t7",
  "key5": "43sP8b7B1rGeoiieY89T3M2nFSaDsLS1H1ixh57oQFUPpbd1nyriG5gpj5ZgS2eUQv74zmeFJYj7NZP7NPo6yWXt",
  "key6": "377GfN1dPk2WTiYPwDHtzTHxrJ8wHm2D59mmMLC9TL8AqSNNkDKaixih1A5MAnK54dJXjsZcpeSo7DJQxqPxFnE9",
  "key7": "UQFBjHPsTsyqCwAW4fUZhnwSKBXDkkqURzfgixjHZp2AEqeT1Wnt4BgiYELJDW1n9HotcY2WgnDhQ4ArgjANVV8",
  "key8": "4PnZgQb99V6ywZb5tvXAv2KR9XB7nQvfPToeupp35gvRxhoEJJpXqsYbWFotjhqsuzMGjnfvLUAPjem6x2fNZFjb",
  "key9": "45CMTSu2UBGrLDoQ5FpTSf9DNX6dWJckogxCmT5SWAD8A8cdRhVpycTpubz7B7gXDYof7wjSKwgkL1v9AGtyzTPF",
  "key10": "3JSCSo1EgwMiqiT6p77kroUT8BH9UMcm68byufirFKuqC6Ei74AHCG9Y2hAiMiMXRD6hVqPcLPv6jaXkFSbDkcno",
  "key11": "2F6q555zMwWf3UnmDNEo4LooFym64XZA44PirHbBfMbJXtf7Yu9Ytz2B32k3AmZLy5j1FdDyEzkm5Ai3LB3WJT2C",
  "key12": "45qMixGbRtgQ1KMxk1pAkEhuEqzSU6P3uWtdq4tmMqTzZybGLG5CShNULzsG4R4254737wLjJ8hptZSDirZSCLmP",
  "key13": "3fwWbrS29LBYea3ySXqaKdD3hBLcorXABAMpM4oBYH4cA8rCF1fqBXeTJQb3FHK8Ydc8QRGZraSbUWBcj51xitgh",
  "key14": "4kGYYMRajPUgdZ3djY24UtJSpvPbpE6rGEZewynEzuqvPrHoQmcUVWNUyyCp4vAawdi1dfKgqN3UqB8dasdHV1Tr",
  "key15": "5f8o3rEbywKYgEJDboLRtwJYARfA2nKypPLiWH7rGWa6jWPQF3RPAHi8heqhB9ea3GLKAknEwvh5ApcDyv9job5L",
  "key16": "36fX8ZJhi2nAzwBmN3a8cRJ9mGE8qMnKjNDhxZJkm13jpADrDrRDuYzSjnksAF2B2kGy7JEdaddF2zHXWTs48ptK",
  "key17": "2HkCtMWsn6usNVB8e3oCwaTg7Qrc6h6NZWsPHbD1iaZYe6eMdcNrtA2YByWXXPKhPLBsPZs5LsetpjxpJzc7cuuU",
  "key18": "5RGUtfwsye5Ub5MHgJYrsXmkxs5giqDEyQx93UWkQ1pz4RM1FV5hvaQSBdgX6gkfURWKpgAE9wq4W1FCLfuHadN6",
  "key19": "4XbGq2ah5WpZJ9DbYKFNqCskU6RQNGbmUpayTMXAZpdSbyHNL72v2S7P6TuCTA4mD5HBFpRLUwmWUEZDGYaEejks",
  "key20": "2QNfi663jhoy1UanGnXN1mzq8uec7nb7W3FtHcmKEimGH9zCp6CKTywrzL85WVkue4tpTLG6icbuJt6Lgy6tDUUW",
  "key21": "1fA82xdqwQKVs8cChW8MY5mwHyNk9R7NQ6353Rbg7tZ9fN6kXxKqVQHgRsYiUXnXLn49wtfKeUf8z89u9rh75F7",
  "key22": "2Fqui6uYjFSqNGXnafkE9Gy2fDkkNWN9NFSp4anHRmjW2yro54qQHyY6byHC4awCpcVnC84qvXDwfXBejr1eZ4r",
  "key23": "3tcX1nNrCc88X42PvoH7e7SRD3TiKrMdQUe4BEYxNvYeWBKms23UFTFZxrCTp1Qb4zyrUZo2L5z7PZV9qpYAgchN",
  "key24": "4mx8sv6L1iQLKUXAQjQujzb3xizRzQb8VwSQuJRgbq4cnJN3txCMjHE7wmLaLMyfJfVasUAmuWQmJAqqACHXDdqf",
  "key25": "5UL22fV31k27UFdBp4goJoZm3UyGePnCPtwdQ3u1H34t4XvyBEd7eMaiSQeKX5KNPnJz7pDEk7X7hHjmAFJStVmq",
  "key26": "4hZGWe2JTRmZzqFps7jijNox6CyqkGjVA22PEtxKcNf9ZLCmUoGgHwA76QCGKFNM1TrbieRGXKvT35Tawad8gGRr",
  "key27": "3nuv74RqJL4hQYTMBoqWq3PgqEUR8wVxgyZcu1sTH6xRFxwUmsoeHtcmnZSJqrL14ZVxguY4yyxYswzBgrffpZCo",
  "key28": "4ZGLVbpqZ4h5THPfdJvbz1dAEFKsshVJpuuMETBMBDEPcCnaN8YCeMtnn3KfBwSSb4ruKXvxUgUhuzHRuxT4Hg5r",
  "key29": "5TLdocbwZCYTtxKcycBDmZbqK5DYwi6GU9fbuY3a6So721G7HFwHATczies47exHCed4zbgJBkCBEamw3V3k1C6E",
  "key30": "2qPH4byS1YmodTSg79xvtMKdzrbpDYEAZgmuKBnbMyoGFc6c7DFi2eSD6zzMjgNGC6pYiHphYMaKjpeUffJ16NYJ",
  "key31": "3Ns6HvxTvTw8YrGemg7EypgpzBR9Ap4uvVbPY4uYN2yMQNQBKWwe9tqQqFbv7uobKvxNyoHwjcbWUsLFqAhZmiN3",
  "key32": "5ZrPnW2Ydtn5pegtSqV2eB6q8ZMxemQbk5jtzVfVuaGfHdEfSHko22NvL3FGw9kLY9spU5CH9Jop8rp8D1wdrfC1"
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
