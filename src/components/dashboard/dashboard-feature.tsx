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
    "2eVYsFXVNRPx2oRhNDHSmRJgJKiearY12yqtBV1xKMz6d7e9qtANo8FhqHbd6xgFBRyyZrkcDRdo2stte79x2FrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMgPPhYXYdBc4QEUj8X1qfXZG7mgT4pMX8U6C6FpetuyjttCkzUu6DXDxQd677bZyBdboApPgMWFosKfoMcsD9r",
  "key1": "jNqP5E8HacNPUuTTh5iUzwAxbeE74H1wksdqAraPHXhBVq5gkfa2dm1SE93Jv9VsquoTDBmsXZC5qdKUAHiA73H",
  "key2": "2qRDgK9pfy4fmpEYpfBQwyDLBf9kRgN91iNXYLnB9iE5R6JVmaBrojCEZyGTyWuDXkSfTEnTLsddh4X4Y8mxfWis",
  "key3": "2gXsD67dY26LY6aSVCTEBpkbxNpn9nFQghBHD5uVqN1n7iyqadPxLLV5Qeu2FWHY584MjJAKdxcwYivMZSU91oy1",
  "key4": "N2Vg5Hb7J1ZH3PRRZRuKHi5k37fw1JPVbC2euVwX4XqFLmHTR8BTGdkbqNMXPwZyFhFP3dKisrUydwfikhfBkgE",
  "key5": "m5MtiiLpqncn9UKRuSrFLyq6mirW6MBwbuu1jWftKo4e3tPPBHD9sGUVrhMgAe2YRvDxhN14RNFidKhcezmnGPG",
  "key6": "5on3bKdR8no7XHuBgHux5cox3bN89nxYZGJCHNqcPfLgpCZwjqFqeon952QjZAErwd2Gt8hpUJs6xPDMoaHKQRBQ",
  "key7": "2jYrwifEZUMbaskW1MPdYtNCj8DgqgjJrxrRemaXsm8KkTFYQ8YTK94ausc9XWKjE95yzfncye58V2pRuQtmMqmj",
  "key8": "4DmbYE2e8uYaA8MiVnFCswrSnbM16U72dQceVpYiCa326AnXNjKX651mx66CTEUrL9Jyh1PxToHGZZ6Qeyqhxmhk",
  "key9": "4Us45ZrPvLvbawd7WzdVPbVhmf56YdEHAEjkcgHgX1nTYmwNGnFmQWSmkuFq7fUJNjDsFCbWKsyXdAFyTjsSrEXz",
  "key10": "5gY4PDPNhP4iJh3RM4f49ApSuQ5VuPqdwUKArmMKJUvhZPQn1GpuJ9pRoXXzViyEkeJuw985TH7cyYA9MkAMAm75",
  "key11": "4CZg7GX5Xtc8yQQpWPpVuDN12M57RVUJ1Q8eTT2wsRBf763zSDQcjTYkKU72KL6AKGpzCDG2UMFpXYyBeeEw86a9",
  "key12": "3qeGveHodoyEEp9FTh12jrUXX9bz9rdGbGrrNjy8YkJ3xbL4F1d2hJThscD5oJS6eqTGwehW4rRopsMiBHce4Stv",
  "key13": "1akyeRPYpwZfoJ2wE6xqDFWbJMvwF1QRE4uz54Q9kqMzHmAvPTwo3F8pXLNJEK8xiAUcj7AzdhYinbLwHGeWP6r",
  "key14": "3aL74h2CPp2ePXmVUgjUa8w5n6aT3iRaHwMLuZMYcwVU5qEpiNMxQDdZgN99QaJfmcoNXwbxN9drPvYfyWqebhgX",
  "key15": "4Ep6iTCFKwchC8Xfix731Ld5SjPEoot3oveHdu7MQnoDhh1vbE6mD4uxQT2WFS5PYf3Xh7kF6WQ1HhWdRqSG8HBK",
  "key16": "3Kkg7zxSYASRBghGtdVMTTex6VQmQ9pS4sQ9L4ri6nvKWdM3io2UxK9BeUUJeLnoKKG8Ba7TVnnoVbnS2KQn8N2A",
  "key17": "5fD2tjVWnpHgJnW9Qj8XxicWuXbKgzMbxsRDY4T28mZnzkvnA8hJQ2zzAvr4makcwwN3cAK3Nx1sc3hyWhYMGd8R",
  "key18": "51fjfYka4vjNDRp6WR9eBg5FmVQVGkm62QVRdJc1FtbcUQofnm2rs5XhPmPTiYAAZ75V96Xf1fd9DeodBHjH4DhM",
  "key19": "3HdkkGEycCH4rdzyufNsSHFg1cSTBzSid64aqQPscUhRwoJV3ntDYn86qiNi4RSpNHrVyJaonZjEqXDitBoiWN6z",
  "key20": "62sVbeP9Js8b7mGs5T8EYVnPpE6YoLzSnsjTF7UH3RfKHJC4FgpprCvcczTzCdYU3mcvr3SA6xd4xqiYGF25M2eT",
  "key21": "4z99QsBK74L3jHNjEFs9W7KM9HUtziZeN4HWy9X1FSSTdpT4f7e7grmqnPVfcABkX2pe5qAxfteWsNechqqv59eX",
  "key22": "2sxE6Xq4URTKGTBBTH59Cwr1a9t62frDmD5MosnC2KsGbqnfqgVwv2LSvj1XCrGxG3vjU4HZZfGvrTvKZg8NhHJz",
  "key23": "PdRx9a58qZvWrYSJThfdbuN2gNXKot4BDQZBfMywS5q4MyZg56LQbnPR2X5WNCjtZcC7rZfdZREbWViLnFGH1ok",
  "key24": "5jZ7Vxo5JimVhvfDZU8YHGeEwfvEaLBT7KUixQFyyboQbC3WmotqEoYfjJBhUDz9LNCSACi28vqtpNF77zQQhSSQ",
  "key25": "5VSqKS45i4VbLBnTsRdCJHYZ1xVanonFHeTvGLx56vGnEPZVQYfSiEczzKMmQUKATo7K3s6My9WCtDgsFskche4x",
  "key26": "uwdZ48BsUX26SrxS5UHQfPsCMrP2SCGxw7PQC3aZdv28iVkYSQ1zWtFcmVRfFtjYDfrXca1UFShrHCoockCuqj8",
  "key27": "4bRJ1RvZXm9acAfrXBaNYLodBmy6EmWuNCjvbTUojvyYvUWTsCHmGQiAT4nYWEGiiZHEbB3bAbdBUcfPSbKQqKYZ",
  "key28": "a4bSMZJ816AdB5MrSXBzmmdNZ3wteRwtU5BeRPiNgCswRzvDxo3MQsgAUoPzkLXkgwG9GfAsYr8SGnKvJJcdic5",
  "key29": "2mWAc8VDsRkEuPuu1JRqs7Snj8DvL8zx6oLikQSLyWvuSULN5GzqY8CNiPc39u9gvH6ZV9CEFywjLbfZ4Jxkp5LV",
  "key30": "66BK2LEBcmqFy7Vi2jcFWygH8gh52gSoEh6AsjPaTMVanvL3WKEKeP7ZxgRHMoEyLm7Hb6dvEFF74Dp8c1vusRhp"
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
