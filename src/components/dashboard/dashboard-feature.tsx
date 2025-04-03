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
    "61cf22nAUSdoZCkATUpfY4nvZWppn6n9BZeckkiQQ1fQani8w268PMMsMvxQPGrFaZPxXdUfYYM7bb1BpnFM7htZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvapnSmPLLVDixJEvNzQtUKmZZXatd1rVNw3VANizoj6GuvDxFmq72FY8KnBUU1kW46Va1HsRdQLKpDKHu4jKY4",
  "key1": "jx23FGbrzM5Wp3aiJsGCdHQ2qExdHwBdTKMaMaa9gRo7i5HvKTd6oeZ9E3DTV5yx1hFaXY4FyKnyEsa1vktfr64",
  "key2": "3TPELKkRVuyL4MpzavzaPRUvip6jxcr3n4a7kcmW9erMpT82ZQ8EnrBK6XxRMQsiMhpssYT5YBEc9e9ZvdMXkfdK",
  "key3": "2MWzA8AeypcEfm7YFyghY3tdvGC8jYR67Tes8pcek3vPaQ4bQED7wYYM3qixVSWnDpRi9coeQRL9PD19UtSDdsHi",
  "key4": "3PUtenxEkiTCdbNb5XXVidW24sykBq8qkxeYw6aFK4FyK7aPWTSjHK8QpWoYqXNavPBGHGPwx6Y92NUX1abeop2",
  "key5": "665nsDyKf6X3rR7KmghvF1o95bzTq8H9w65HnJw3xKhUx9hPyncHed3eBBYeTqWs8nvD5AMYY9v9iKihFCyQP1NU",
  "key6": "4EUDR8guZ2rAn6B5SJvrtKYkqmfhj5GCdZxTsiFurkVUUyDJ5AUfv9vGjXybKJ2pb3BuRyxWKEMvZLFEvg9aVYVx",
  "key7": "5cuHNJ65Ti741J3ZjuzpbEKbW1J8UKFqeBekUjXeJFyVfvetQLA59MVUFYu4hWZCEooithEogQtQKJLdJYhq7pXJ",
  "key8": "3rU84khXNU9298Vc8P77NDZJwnue724pQzpZ4oXaiGyBBhGTtALtuhViXpapENciPjDSp6EAW2sNe4PrUMSMJk3e",
  "key9": "5RSmrmtgP5ZCJ9Q4QXP73fm7Jv21SVQJrRjtAiqfbUPK1nD4PP7MTH428MTLKaDggiXWtNtkW4MuvfX6uk2vcSw7",
  "key10": "5NtGtxDv9BXTqtDfAfVduWhu1Pp1Kf4qbPtKxy1QgMictkzp7D79fZyTFvmuryFJLQ18Hm84KDtus3xakSwSGeYB",
  "key11": "4tT1ujohugaFrEmGLQQwscxwehbgGQybeLTcEXHxVQg8K2bMuKkjMdeXuW1xmqb966wwwhaqrD7kNkBnq3BHLqyr",
  "key12": "suDE1jF2SyMLqFZJUTi2D9dD1c5NuZkk1aMaswDQhCiGfDnTbv7PF4g6skyY43UASqKYoJSJumH7tXE9Z4KnJmJ",
  "key13": "3QfNTAUZgJnfccPkn32CAahAcwFmv9sHTCpGEXPXAFc7hKhXb4pzESoFojzHQr8t7bbCbyyeLQqhzYEKr1K5MqEU",
  "key14": "3c8esQ4a7dZNFx4h1SkouuzB76Bo5fbB6C1hZkT4n5PQjzMMYMXk9fTvrPvYowxfNpqjHUj9dZqJh3Hy688nRm34",
  "key15": "J7JCLT2nftnU7H1rperyqZ6e5bmMHFax8Tq1Pw6ABWHaznkaqD6C9qzSGFZnMmQvkGaen7ZtKs6guzVKpYSxu5w",
  "key16": "3RqXyNEHuUxYCzKh3BqHP5ciBBhUnRgSWX13z6bnuWHjhVo7KTqGaTtErBWtEjXKf81x8qD5ZUkvyXXTjkqRdfg5",
  "key17": "2KJbyDA5rMeQYC9ASDZ3HoNzxDiKUbew5ibynEyze7CM61mDHpXYP7WukSVV32DYc8PDPZk91TEdkH2ahuzsLFwR",
  "key18": "5tSWVic9P7U9TKfBELsK5cqck6XnytihB4sHfCmEQxwQeq1ejdA8VHMeru7PYzHuswrtPJ5c8NhMcfHEio6MVjHr",
  "key19": "4M57tc57PU2B15WNoa9EcFXQd6WYWLh8bB24bWgdNk9hNqKi3VxtKAbWLKRvxYHNJ4kPEZTewZukrsAV1BDsQbPe",
  "key20": "4fE3CVFnDhjbcB3DYUJbzKRTezaJc2crmZ1HEWvrau2q9xkwQMgrGiQB6iH2NJ71udDAhKsA3yWtrSc21YAxacUa",
  "key21": "4tkkYKvoCKztsuXRVaEFaFdw6yEYPMijieYisjVfN57Xyr7rhQFy3yWnvPBfUH8FtzkwiXGeZNNV79x45Sa4wbMw",
  "key22": "3PJqWNooRhKbeQqF4nbNPC7Hd2WHtsfhGbN27DEo7xDiC5amzzd8LkhcayE5KjiMBGu44qv8mDu8SdVc5UUCLyP5",
  "key23": "2rcq8LWA1pi34LzrbvP9JbNhvps97AykWVcabazqVeKjVmcuUVAtVFyz4YKmeAkZAzzDqHzc3vediQWtBaRxPwkX",
  "key24": "4tgEBxfL2n97ybPfAYzVWbV5kvh1XuQvmG68vU7A6ks7cymoR3E23mXUyuFTRPXTGra5L31HP5ZGSiU6T28NRZEW",
  "key25": "3PpzJbbPyLUSRZF3iZQwknhBvjTT3b1MzSrxTz2decwUBDQqMyucoTMbhNb6oTLj5Cq4vxt2kj5eXLurwyP6E1RC",
  "key26": "3sNsJA3TnZ1yEqpLUY3Cmg2a6Bu2TY9G9NfKynHdt6QmYbrDShaXT2LTyVHjBejADtB93BY6civQCTVjqtd2nkNk",
  "key27": "4xGmYYrB9MRKUeEkxpUMuNs18gfYJFgNorrkFf6MUe7EDGRqizz4H4JTdjFz3831zTDc9pzFsZsb4hFHGYUSeo85"
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
