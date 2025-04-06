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
    "4nJzWjFimYQtudtnhjbd2uusEV4xb6LWajM8T1mWKtK24BwvfFQ46vvCG6VXkX5LpsvpATFNhA6T7GL3Yw2B3Rgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YeCjCHgbWX9vwiZQWHNSzBg2wJrdud8ows4zBgaFEZhx6BVYS9PTbea6FTPswDDboA2pjZL17efLkfSeDDc3SEj",
  "key1": "4aasMLqNcHiwRx2JYDwSZQuwXcBVo9bRiffErXAdufg9xbjZRgnrcHM2VxMtaskkBRrYwgWDLwQW2egx6zprWQRK",
  "key2": "4UusVyDcVmSayzouWacn14YKPAvBMytu3EoWwwuWHBqnvA7bhNDW5wg23jx7tFC1tMshfCsAEbxWpcivNcPBKVuy",
  "key3": "4cL7cmNc7jSDGX5mcdziV6BDeU7xGWP1tb69PMx2jce2pZyDMpCWoGbRDC1ik6hD9xs6SaMaUYZ6pYjgZRdEgpzW",
  "key4": "2oXg3GzVPqws539hf4Vvabw8W7N7Xmb4MJoHgjYcYyzD9kQsWkwJU2FjD9YJKf6DxbmEHcg2Bo9828exeXz6rt8r",
  "key5": "3sJyzgTWYKXTouAtboqUiXFvuQ1SGfT5BYdE5VKb2qCCpwThG7a5ciCLQZX7onGYE6DoaEoeUwEZD3z5DHbA6RyG",
  "key6": "4sd4jgr4tamEu6UZf6jfpVzusHqQrtkZQ49zvtigEsaeg8azvzcTujNetmoKVJ5xtUvBTsQe3iqFxLzjWikY8MYz",
  "key7": "3Zcunqwhz9u8XTQVMz4BFJQXEqqSKGHgtjuqsATUNzxx5rNG2vus6nXPLjzGdtY3KDTVyCfmTcqaie36LtxAzC7d",
  "key8": "3JAi6VxCGAB5d35WqfKt73vzcLtcRbAZeg19c3KMVVQbf41WEeuswVedhSiArw4bFH1Sg5ZFAE895k5CWDPjeJxW",
  "key9": "3rPatUNpALxn1DaGQi7ek1r6GRfKhYXe8wT8RvQ7tKqoJ9nbT79awgLZvbVtSW5Mqbp7DwacYKnFuBCwPmXYjxuS",
  "key10": "c3qsfJDwS5FyLXqD8vVMxMuLKjsdkZJG8i5eJAiX4aCgawF2XXkUnvrytXPotgSgo36JmKy2LwzSk6LjtF9AWLH",
  "key11": "g9WAD1a5n7FwcCeFEZEoHwtjDruvsk3kvHjyCUvScqx7LbXnJDob7VEFPad4ez7nEsmdmzsmMakMN9hUjNavuMw",
  "key12": "3nKgUYC3QtTaQqE9KVoWGhJyc4CoMWRSfUjxwRZnXzigPLrY8giEB7Q7YGGAnZrLrQoMxDprwcc96jH3NZ2AjTYM",
  "key13": "3wQbvJ6C4PvQR1WeRWCUicNL6qeFP3D1H9wdmTmUoxAQa2T226MbzptoN5Lvm51vpyftvZCoWMFcpqBEW2yJfRws",
  "key14": "5NDMEupdyABFyQcnNRA6Mh5Z6BnAJSrZT67jB58hxMnaKsjp44SakykDjUU77ovdPEs5r3KXP1NzWqMV4A7HisPz",
  "key15": "2rnB9sfPEuYy8q19jA5r4JJ4oQghqXY4ySPJJRrPtPaYPHWatY8JjcioTeDumoiapWMVpsi6ahBEQdKHMVHJGA1R",
  "key16": "2R6qUuGeux1o6Eur5u2AjtTygiFiqyCjXyNnE3vgiVgv8yAaC2nxpmRoZc2TjBSJXdJcLUCY7AALGfbAf3YJLedo",
  "key17": "57m1R75yWhywiBUYmfpzZ7b5htb23PYczhLPnMkMbeHNXP3FjGyPKpCWSsgywfAsAAiuxxLBWAJQbvorA1dapTPt",
  "key18": "4956i97pFag3P4zAsnbpbUTVCHAk4WH7gzWkcroz9a8is65LiLAyfXEgUyAXcYg4xkgmaa4ZX5XJiNx4b8U6J13A",
  "key19": "67r9ctRQbxJrKCCuRMumd53GGRov14f6fqjPPZ6jFFi1sHnoGdTQe1gEJCWkxz8ooBhaEjEeBxj8mfTNJpQvD9Tk",
  "key20": "2CGxtXRmeNedGTf8s9KJwc4YSnBt1P73cJqCMLRi1g5hGULPfkgRbuKTswBiVQmrqmLJKMAUo13cKgMTrQPdLYkq",
  "key21": "2yrzHgVg7nRK8v3QJjteiowyGf8Ffz2BuZnvnL9tbBiwobEoo2HmqovPuKeTd4nF1cp4ZiCqJg23CVDfmYEBE8DQ",
  "key22": "9To8vFDHM3yVUkavp29r6DxF7YTZ89V621LQHcMiCUVeSRd9vmbTSmJfMos1oQcUAtcXQtica1fJTmks67DsMzs",
  "key23": "z7LWEr6Z62LYxW1A5kqd2f7LZ8ne8ArnSyt8LyfeH2vt1RxXBhzJ6zgHWyHvLHCargR3X4N7jYFPcxC13duqXHG",
  "key24": "61A5heHcRu7e3XLsMYbzkvgnv5aVnND7XKHvp1bDfGxTwSJ9UXyuCGLKoSnD1SHqH5CLkWZQy8uVZ9pyGsuLBgw2",
  "key25": "5kZ42As5nUqNAtXFf2BXYLbEw8McY5RJQz611v6HC6bjs4uKcCT1KKcG2vcMFSjVrF2xk7G5dCcr4RFnBRgNXnwt",
  "key26": "2EGS3tMidgxmiRPPsK8pbyhG7YHxGPGsVSc4S2wQDdoTbwi5NpANd2tibSfV6Zy4tjCNGB8KnkWgbRQFx8NS3xC3",
  "key27": "4gYoRip7V21jBRb5dnTBFRoaBdxTuYcABbamoJU38KhA2Bm1ZzBJevBrTxgpTkwSLuNKyPdmwkjLYhGo5fE3B1yW",
  "key28": "4umjgmYmBpzpmmXqpTxqWLDHCUwwNKUwcRXNpac3biENSDZKFpgNMZWXy4YiBBitjtv5Fgf8sr5G8Hn7Cyjh84hD",
  "key29": "2ssWSwxKnm5KJueXcNQyX41Q55cKxTs2tgPqtAMKNP48Mb1jycPR7apoBj8QGA5KY2cpZK81ZrabYsQg2tAbVLr2",
  "key30": "3Nju9erkRbA6oDTWfnoMtHGRgUKnhU4jFkMxfbqAnJpjPzpFdiLaUdUNvsudhyQjSaEQqTvZH55wwXCpqZVi3FjY",
  "key31": "3vjNwQmiL8kVuQ5e94nPSBswRWdvsULcVMcE8h7TuVCFNCpwCQchXzU6uhaP8xE6i54qUbMehLRzbSkHmCNg5cQT"
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
