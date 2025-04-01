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
    "5eWyPrLFTc2o2f8XeQoCn79rLeArVmWvBEgTRT6KyGBKjQQTfkApFmkbmZFfU1NWgFB7WHKETcQoKmFkWFsG6XUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WcmLftufaR9kjMMf2jKhwg98mgt8vNRPtezxQeLJDvzB6K78jUEAqxjSY97WPe3AvMGbXnJso9jMfmnCqaEMtQ8",
  "key1": "2mDaEHPb3EnR7xZ3qkhp7thdVjuowAquiHGjQxKGxajz3ZEYeLTZvQXSDs61mr4xKxPvULVqt6ndtSWH3VQLe9SF",
  "key2": "56o7PkXGGTmHZV2eCRAGJetm8pi7zqf4P4wy1nJeKh3PPGBgDbjc1d7vhnZJmHDL5CrUUugujkga6LL4TNrwL2bE",
  "key3": "3QQYyYzqMiT4Utx4zRhaUzmZrHPh5B1amQSvtt7iww5prr3WvxQ6sgqmYPcr6vXmSvGZ8ZMYu2CJr5URmrhMQbjV",
  "key4": "cfLHZ4xm8t2uHhieBY9YBk44TTNgfGLfVxAt8SpEd2TzAjvKXooZz8j7NXSzuY2Sxcp3p9nsTjCtMKeqaDaALL2",
  "key5": "4nRVW2oiroNRMzzgBCMzs6uY941oT56nu8B74XW6EmNBm4D7tjA441eqeF4oPgWcHPQXoaLv3Mi6SzijPUvsgdeD",
  "key6": "39LtbBi9KNctDyTGL3bAW2ikAjw87v12k5TsqyWu1nXfQu8V5fuKbcMjjtjXPN4Y9f8qRdzCtAG3efkzYzr1XcqN",
  "key7": "2X6RXnbJNJhMadAfn6YcmX6kXFFAE4rGbmQ4QvHTiTRPziAiAZjzBjEzbCXQS322AG9XFxhHHRHebUMxQ9A1Bqez",
  "key8": "5uPJkgsAcfoMPL86EFm8CLZTeubCqveciPZccDzTWXtMNjJ635BixujFBXqqqtZLJjVK6RA97rDRUkbUaY9AkNMW",
  "key9": "4fj8otQqGZBhUy1XHFDcqicqQeWKqfkwWDq16rEeUBTjP5aTEhBUF5RvhW9pbYU4nbxpcy4uXgbQA3NaFNbWWdmH",
  "key10": "N6FcB2f8PrxM2kLDTH39skjkdWUvjQUkCm4oLuasZsQMf2ro7fgC2uSbn4FyrfB1bsTrNH5qENojt89TAkEdAgh",
  "key11": "2kx5HJuAZDg5EnJnXoax13WFjQuVwcKNQBZhkFfo88TPMNiLaePdzyGvA4n2swZpm38Ykak9J4yZE5U2CZ19Pyxj",
  "key12": "5qaexwtftETdFid6wKoP1a2AbEQoPdX1FQJgaKf5pU3zrGvz4ZJtbP9vF2G8a25VGQX2kfYRZPKMeVgB5XthfoPg",
  "key13": "4mCCySuaccQ5ESSZ8aVbgogqLFzZCJkSmvhksSikM4CiD4kJARwExthhbf3a3ZCmRzuaVqhtjtKtPo6tYGaCZ7F4",
  "key14": "37gkAbApC18DWEFU2ypFaaLYriWYyuyKdbnnqW7JRwNmkU3WRKsQcryt4CNb73cNPgFhGtR4UGKXAvACX1zHgw6A",
  "key15": "ejsAPfRFAttuJM45eFm4tQNzMkEHeXGQgTYs19KPFRJtNKn51e3TQgjTdVZaa3McP7ApSGFVX6TRBgJ6s6jvGW7",
  "key16": "4Y6G9GNL6HnuGSxMqmdiTyKJ55d6QsfwHS8XJmUaQLty3wbqsneJGYdmLsPbh4c8QYvHVK4DhqZKrGAJ6yEhvnfT",
  "key17": "2YdXTRA2VSwgHEGVQbAE4qK68MfYBa8A9DPd9zAZF3irqoZY9pHmsC4svu7yxmQxKPeG7W7xgbQ75YoSpzJXouRo",
  "key18": "4hqjgWidQW7exBJ5AhBxb6pmkKJoyXpBcFTLjFVsaXq1Tfnm4MfN8C6seoGjGRWmPwVidtPG7GXvsP84xYRRWeyV",
  "key19": "2QVuDsrGBumFaHkgM2Q7JFqffk8jh1AXwFpa7h1BGHvMpYAjQGoK9xdLnvrgrzYEJh7HD8pr8Pm9ndRUHUdjZPrs",
  "key20": "6JJ3MV4a8dTM9FbWewpT3YtwaAaPyWpGSyKvimVRs822nYs1fpo5GKdfDa9vLtef7nBpPeTUVM4bhKDM35baivZ",
  "key21": "3eh5yL9VLi6vYFUZF88QnQd2fbF2s2oTBE3Ht8BR6JwH3AHDyj9Na3S1hjnKMNFJsn1Z88fFj9z1DkJ8KPSJkp1Y",
  "key22": "5mqtVw9iqzhGZ9GBdooUWWxxQEmeqdAjmP8YaLezyVQ3zoUESBk7A6WGRGLtZqPJjkxyurLGEhJ64rJgXdG9gfzo",
  "key23": "2XrgXTW5RB5jPL4365UCuY4Mb9zjApgZ6dXG4pw62EtUigJJW5f6Gas53xsXECRbmMEj7zrZ6fNazbNMuXPsF7N",
  "key24": "4eLafoKKMEqM8ZcuKawttJqukJb3LnpEJqABMAKY5TXx9Byf1qP5D92yyjgTiB3SRYS4LQUagnFaw5mihcPDLfsX",
  "key25": "5Jbb585DcrnDBVcezUUdwKdhQ56qMBTsnDa8GUBjX85pxphE8S4eDQBxd6oeJUGHkbjsWqhHZMhiNhKBSFpNRZzU",
  "key26": "5L5Uc4AAVY8JFXFx5xSnmn6FqopLDenh7MejyLfcXkPqHS3bJ9vdkRRVkGwzzkSX2M3t6oeKjoZg14fqHhucKnzW",
  "key27": "3PAyRxzxaxbCdtee5pezNoHTdA43VNXuUECN4ySPZG7U5ocuorY4StU1DYk74BAYr35KHC7x2AUDMbiXT1aBD2N8",
  "key28": "52TzuKovsNujMLF4fRZnigcpFFYWuXmamiRU4Qkinpg9quXvGw88UmwrvZT9oyN8Jjqb9NC1qpY71XvMwXCdR9Cr"
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
