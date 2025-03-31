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
    "4konjUaFfWkzfHeiXrgHEygwPo7Pv2LZ3AZsuyTyvLTEtGFZC1YQRqGrwP8Mjv7LAXApVKSXzg1xb3VQUHCjTzMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1KD2H8Dyd1bCmaqq76wYFtQqbET7y3Ja7LD9AbhzQFi8whGDF8m7QLumgdx7c9JsWtXEp4jb4NKiV1tyaZMM7b",
  "key1": "2BMD7pp7CYLtXb3H3Q22HrKQsrssmGWuLn5z5EMMv8wjDDku2J7Ry8jyY6isvSY5qmMrV3WEELvtmuh1Df6RNYjA",
  "key2": "5jniHQxFhJy9SEhYXuWkR6cmLQFAg9VfB91X8s7QLuaeCHYD4c8Pb2Xry4x6z3Q5ubw8dnQQoTRdw2XiPip419Tz",
  "key3": "2pSXZNRz4e1T8CR6mKfj72rvuZszVFJeNNoxHi2vjYWRY1X4jFzzD9VFtgWCgyk3KXNPFuaFTLhf6jsxhL1EDB99",
  "key4": "2JW5JYBW9R9Jzu5yXZVrTXSNa8NuTndKnvV2zeBC6DyVC6y1pvBwKCfscGGJvPPMBWet2kdhUiV8L7PP4V5g7AqD",
  "key5": "37FZo9rjSWexn1JgV1wVhLYsKGQe27wqJcEUvT9Kfbvn5su2H169z8Da1zVgyp4iqwkQmTdhnDwaCbg1RHBia8ZJ",
  "key6": "jKLRgoT33ca7n3Vn5wF4EQbEkxJbqN8BdNBPy1uDDmhGhfdqPE3fRV9RE6BfQzCMNLTArkQTJVBrw4vgrrzaGej",
  "key7": "54k7LJ9fvf6RmKKTXzjLDWp2xqYUqvCqbjMWqbrbHCCgE6dyfWko91QNQZtgwPFQs4yRTC3igT66WrJhSzYQrd2Y",
  "key8": "xopAaPwNxP5F6XJUw6ynCit2a7sNUUzcV8BVmn7S6QfwoCayDBCiYW6NxHLS4pa6UK98wzC7pKFE3jj1ohaYquP",
  "key9": "xyKWXVx4cjXrycuYLZg55f6pijCXkP6R5pPLADao4MmVBXs8fvyqo37SmSPnvyK9zoSPah2zmmGEY4oJauohPkM",
  "key10": "9ADUVjG4PNju63C7d3dZGvo7HnwuaMtqAEq1GHexbJ4iaQK2B6AXJRhjwEg3pdnVs7nGWHUrH5PxuivLhERZ9fV",
  "key11": "4eWJxj7H8tns18edSuq5JNey1QnvWPPttZ4HQvhGSYXTtMeWvZbBss9PLvTYWRMpYZe8gbHMkHdhDqt54cZzusrf",
  "key12": "4ZNvkHdTTFCikSekpDsPATnSC1Q76u2Lk86TD1PghiE6dyQUHoyA8RcTT4AyAX4kDRYeCXZVR3FkMufbpVQv3RoA",
  "key13": "528tBdq8z7G2ZC8Dgv4iLnxXvuKT3n6krNfMLFnUpzmKwyvChrfmP8Y2iRHXotMCcXMtavLW2rpwkFZyqMQ18951",
  "key14": "WPvZnj3S47W1nbW1nUrzTQ7yGdRAvgDrkjjzvHUyHVx9PxRmEW213vBWvc3KNNp86uaHpjmPWRNWhj1Jhcw6FDE",
  "key15": "ZqiqgFKXkrpGXFF5Ssp2EozG2QCTJbJ2FcwXXgRwQtX8TyPhkDHhu68KmhAoAt2myrq9Vod96RoTckfuDgGK3KN",
  "key16": "56xWEA2ZYnXvfxeycpr6Jvu8u8rdZpVLb2ttZ3fXSPGyLKshhvjSv6rpw2rYzKTRw2fbag2yrUssj5PoxkAfXXKd",
  "key17": "3Uvo2CwyG8rFMH3Kopu6qVFfhgwP2CXd1k9mskYb1tB6gvohoEzZ3GsBcs8hNobP4HQMJUGuvGqVWFbAUfNobbNh",
  "key18": "3LibmuBS7zzGuikzmqJV67UT14BhvTj8eqgpe3eJ49zSiZziQgkCtuZErT23iqKfqMu3YBAnxP8L4WFGRUhrS5r9",
  "key19": "ehrTS3S4BhZkambMJi6obe8pHvdKUHBJj85zA8nPxeHUCSmpTkdp2wa9ShDeER8Bz58k7Etxj7YvkRqA6BfWKxH",
  "key20": "283Ne5NUJWJkWhG6LmiXDZmmkYKUM2UTBpBMiELSHdUZKB8E874Ee8FuyzatxRtp43TDy1JGz4jweX1KdaAvKrxN",
  "key21": "5w61G3ZtqUGmxFMUFgfegsY11bRwzvLn9n8a8xphYg2vNHmuCJF2v8zar4TTMFaY2aYxrsKhGKqcbVqT72ZF8BF4",
  "key22": "ZK4QHW376ko7FqfNGBLjixnagjMGwx7ZXxHetvFwh8uVCL5Dtkxm5FHTaUShecz8DeT8yopdt5KKSvsP9CsPTHf",
  "key23": "k9ZnDaRwfY4BExYwu1Db197pa4BUHGaWBVzL7wRbiVLV7E37icFUgtGHifyVjJo5LhvDRPpkm7jzx6yVVjx5tzm",
  "key24": "qeAFifddhpADr3FadR2TFmqN1xAvGGWojZP8SwyrEf8unWZLGLsRo4KUGqafd7W1m1NeMfNiJ9NLkYCU3WPwHFw"
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
