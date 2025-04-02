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
    "2fsq41TMTwo1BVG1eQTZyyXBGYSG9o8xiTexkriavT4mKGxJxhBP6PBVTnwRbPZfGjJurx3tzUNAm1oLuYS8ih4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrQhM8B6q896jYL1jU2rCqAmDysAgzBztpe6Wqhaw1rQfA71HrxDW2BUYszBjR91iBVzTA8tT4ggwuSuJqLHHSk",
  "key1": "2f1RucSHLKHnQmT6WfBVJx6UHFnKwGtfw9qYxP3cW667W1JFoo4x2jHJKTmVMmxmvGcYx5cx9Aadpr2a9UALtuhy",
  "key2": "4aaiBgaPs8A4zFrqyn8uYbFHZ4AL8CwdPz4xzTi24uXnfdhX5fhYtCwzrfEBPYtJpXmcdPWDpkEVxaKigEPWt3no",
  "key3": "rmFHtjtdoHKhqMWjcjKnj1RmdbX57YPAisjqVhnL7N8GpZzdnKcAyQx8YKboGBwLnLgXwyuC2DhxPUZ9CixQsVo",
  "key4": "4tyshQEX8vfRsT5hP5BuMuLLJxADzeMre1xwSJ7TtF5zqnNQJx8LKMKyXeB4jqmTu1LMVTYFtWmR2VYwVjoCbwU8",
  "key5": "33DVP7rr8jrafNC8GFBm5RRA94nmnTbxkpchxLZ9UPEajBYACkBPrRDAGc4wx6r4wmWKvwPusC5RmL7ytjddUiXu",
  "key6": "3fa7ir8x9eLe986FFwiygk9mfW3TJfhqbo53AgFKRvHkZ9XXzDgbQ8EfuHcXGg84XaXmHE3F4n357AsAHEMqF4FJ",
  "key7": "4zYXcR1nXSQ8GmJMcBPcWCJWBKEKtn4FLuKnqKSL4UeZxA6fkSeMmtRMCcEuv3TiQBoDEnfThFmikU9Ak8w4vzoP",
  "key8": "33rkS7TTX1H1oSg5vmft4VGe7QQCWbwHB3QtnveGqSQPFXg7bzQTgJbLkqPKvC2gKzuDEY6czUKj1DWkNFmQaiL8",
  "key9": "GrLRhey2BN9okcwEBmDW3xEq4fYFvAnzwLkyBezbT9C7LohFTm7uPtZeC9FGT9zYFoMDFUUqfu7uCnhAQRyBmXc",
  "key10": "3S8grgtvLeDtUmPpMWC99SLJFQ5c4vnSw1zsXePSLr2ZHrmTPZ73WPjSv5edXFuNqsJi3hB6cL4tbAVt9GXfL55c",
  "key11": "3A7PS4LQkjfUz1r9k61kJB4aja84X9uZSQfeGWVZqyCGtcetvrRcnaVKPLvfTjTKg8Gy9k2jephVCQ573UnoHSrY",
  "key12": "3Hv6CrqhnQdUsDJMP9D2KUkJc6DnqBCDTL6F5WkwGgRiYifGMBBPRjcsJyBzRoKEQrtpD1Vn3itMXs1M9pSkC4oz",
  "key13": "38XWScnpcHiZqyWXgaTkwzQoe6fRWWhixnKMfEA99XdAMumWiq9hpJaM7Tpb2auqFRXSBekwEh8kSd1iMb3uLQMU",
  "key14": "29QJvkPTzYiS42nJ6AuHiFsopHeY3HdxVPSNygH8pcx91MhAxfVNUMrMdeBqpaKCeHGhZzq8UesDVAf2H6fpz3FN",
  "key15": "2u9dQHXRuhSfyv2yV868NCfVG2vs3dx7JCZ212n1DYJn8o3VTbt5EGW3FPgkpcXKCJnpdLgAsUZZdM1cWdMmxkuj",
  "key16": "4E7VnMBDqQ3VzBY6EcaNa57Q4s7nh1JrafknVaL6brL4AheJFqzizor3xxosB4cLhCKhmGctX9g1V8BAWad6vTyf",
  "key17": "3sWp7eVCiKe17fqs2meQSJ2Wifopc2yG88rysSrDFRFyGDqKcaYSgaySBMyyo1XZGtkXEMHns6oLJ5g5wyqPc4CH",
  "key18": "FsrNGJBsk9C14XLL4fnrk5g6L7YJ6fDo3fgwFixw2P8oqLUsj6biDw8eU8kyV8mAwkLAeTHRDDVx3WnWoGzQXQC",
  "key19": "4vHdEZnriqtghCmXEqo2WYakCibcttw2fRz8PL36bdCxZ3AGbNthDfaBmsfzeu8ov7aFTNfh3qnzkPmVhRL34JDW",
  "key20": "4SerMn6gx4BZBRBe8PpdpUeiFC9HUP5AqpTw65kkiMCUdio4CqeEGeMZCdUX2Z8SY5pcdHSn39Wbhj2Qyhq8RXDP",
  "key21": "2AWFhxmk45iqgB8RwAZ1Cqgfeqwhn5EbmtPy9SSYvNsLCKMRtWq4qfcoA2Wr4ZVPNeVx9vfBsrXQ4vAXsvK2R7i8",
  "key22": "4ynUtKDuQJ8YUyFod1dWU7BfXzKz2Gh36uBiBobiE1n8CE7KBLagGgG43nr73DiUg1JWFMzsJqK6RbtsXxkfTCjB",
  "key23": "53bvFcG1fRgiU4671nizBhWCastcrtsA7ZgRS9T9gAsF2wwXKkmh2oiUVLfNmooPDBtSbgNXrpFZmxyRy7nvbboJ",
  "key24": "66MiEybzpKfir7u6c84BLfqpNymsps8AnTTab4NeB7PSnhZ197whEkkxNwpDXiZbCUTLsXSdA62zMGU2SWydVzbP",
  "key25": "4aZfNgaW2qZKbDH64W68uzknrPPZEDvqcdz9ubUUpseMCgSXRhjP5GV92j6TxaSySrwwXYHsRrFKHVnNKRS9gNjJ",
  "key26": "4ysBVP27vEyNrZBTrWRYCGFu6EZAFageNrx6beYaCXc7iNWg2tmshykXJbdUn5bE5Voq1jsDmwjFiVFMt4sxc11",
  "key27": "A96tJxnyc1fRs4RjCn7jHv2T8mgu9FoCHkk8nNhPgbHmUKFct4Xy3RXkmXt1ePmy3XqqVf6Kc1jXDd34QGAZ3PA"
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
