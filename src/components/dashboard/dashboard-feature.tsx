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
    "5HCvRNscyo8JAPgbycbdpnqgJp7NeEoE6bQW6HbGMquDjYzxi6TgPT6uWm46pWi7JwoSU2LFeTvEx8AXsn4fP1Hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vcneXeWXeb7qCM1k6ftjd9VaRjwkmvmzDSCyfL3WNGgTHCVS3uSpGUMB5F9ApLGvbsCejspcyXMSwwvuRR6Le7y",
  "key1": "5gNSQDUnTq4MMsg6BmF26jJ31tefuCbuqoQbZzPUy5qe952AgxQhjwE4Q1pVV4VnkxjrSf5itbLWDf6WKCwmuBfH",
  "key2": "2RvGE3BDjCNBjq9n74LCpqn6oLkXVi6eYCacZEPmWExAuzLdTzvohue8Kbt24qrK4p6s4dBksUGKmoRbE7X8WjV2",
  "key3": "c2U9GXHtpvdCBGW68ai8K8xsDQG8NXwuCKi1fDFF4AGDSEfQUFmigHM9vnNCweUQjVciNcsGT63TWPbpz7LmBG4",
  "key4": "2SpqwvdKn7SgUfGh21qpKcx8jQTMRpKsAMhnkFvRvwiHpshD8xgj7N5Vm8zemN8t4vVbacQExvjzAn6ZpqHUt4go",
  "key5": "124RhzFSQC2ung94sg47owqExJiNU8ggcHwsL5VXQaiWZZfaY79aVLBJkim4jZTJ2NyiFdUyttptKxRi8hcFhQQ5",
  "key6": "4FKRRuiGz2ppVABt75JUnGxHngMZcnbU8MCQmFzp1nCrkTEj7PFV9x6B5auPxPBDK4kxzBZ6syQzWfU9aiGazWgm",
  "key7": "4eRyzV9PtyKsDWkf5PutLEtzB8ZoquFM3v2mW86QYg1qXhF8eZN5feY1eXMi7akmWsBapDYA3coPPBZgmBuv7KSG",
  "key8": "2qPww9cfNejBUiYZLFuScHUrSszqudYJgCt2Au2pWvGT4VXwax6gWWRPixoRj7qTufxnLyoJDdyxUVh9pCHBfExj",
  "key9": "581GJ2K14xKto8bFUYbMdbR8j5ev45DPPjEbe8E8AdBHDBsUKzvQ78unb8wuQ5QFZnmhJRQxWjUxZ21vs6HZp9wg",
  "key10": "3D4fwc6V7RToTXswsR6UdLpCSY6E1yXPiArrotTrJ1KAGR2P6X75CPJSdmyL9rnJxePhWwGbHAnQUPB5WsHx3NLp",
  "key11": "5c1YWwhFLawb2Vaj9QcEy9oUREZ4KFiwadt5KSDS58UwHxWwjJkyCX1iYnSWdfhNsfyuL2N1xw7BzNLXLCSek1zp",
  "key12": "XYhGhiAJS2PXNPDNxnZ6pLpspEtXhmR2q28WKNrEct6Pc99MZDdeWh9Ugzwo86xqGdFMdK1Dwx584T2x3Vivyk1",
  "key13": "3tBNFfuSrRznYu7EqW1FWQdTrETQovMnvQghHMWHkDz4Q1ChtPa3jQfFht1dL4KSex88Av4SGwcXQHeQQ2KCZb3A",
  "key14": "3pRjdY2G5s6mJexmQphN7V7rMx6h1iRMTsX2UWTi8HcpfsTpV5zRKkogjPZxeANtot5khdZPma8qZjfxkDwHQycK",
  "key15": "hRJcz6kyXV6dce31JLtbJxKGA2F7c2Pfn6mWH298Di5mKiMjua8wWPvwAzPEXzzet5faVUeeN688tZ2VvHJFnPS",
  "key16": "35a63WN4cDhfFYzDZfBTPtA9aXzRDwUj4RQairRRf5x4gPm8v8hGNScXELdd3ixZqJk9gUrCd9hEFgYRuUGeazpt",
  "key17": "wtU8Xzwumuup9QEHKS2vqW16JwFJ98Ggd43BAUj6M7LnNFhZYZx2yExGt8FTkHeGi8skhr9wUqWs9NCpnJevtKm",
  "key18": "2bu4A28q2APBrGxahrvMhEY4GcUj4xvLdtW6Y9s4tRtftRjKy5wPeuPfqQdpqfyD4W72zF3LDdRgnRDbheDDPTns",
  "key19": "59RvA188EghpRtnZAniKs5N5tPp8j3UvSprJVu2y8xWigGSG2TVmZwWNm41YXUnnskmbXpMzP8NESFNDoYPfwDez",
  "key20": "65zJiaa9yi3iMn4YgHrYwsJbMEHxuhQtMyZbkRSWB56tckx26zr3Uiewdz6ocLPpsjWLft5RVW97hGMJW5VrBRyS",
  "key21": "3q3hePfpYhqz6rCsmSiCwraAttaQmLUjkehWgGiu5bz1RLMC4qAww3jfrT4soCZzcnuJ5nY5WfjfnugLAn7tWRZW",
  "key22": "4msRujTLtTVmxXDoH63sxD7o2mvDwmnY2J4ST9KfiafAZF8jX9nuTPQvyEpPZDDf8g7TzKgiGdm3BFRMx2xGCW5k",
  "key23": "5Ne8cbpRVjTJmaoiBtdBEcpsrU73ZzHvHaZJBzCcZhbU8yFkHo8dxCsBsMxjgz6Ys4zc3tgDsBghEbK7pVPoWHBa",
  "key24": "3RhuQUmGYGRLdW5B7VuPfvS6k8WwLr32EGKaWmwyoJyFbiU8CXwe4peqWfVvK8hgnaM889AbnKG2JbFoqfpJtKyJ",
  "key25": "5jwzr1kSC3qjeCZS4e9gvp9hj7FStu53fNigyypMkPmeYTotnqyd5diGo8X6fjPGRb6Qf4V5eYXaN1T1Dq9q1bip",
  "key26": "3r4fETwupvqScQHTjeLzRwJ21fC8CSJdjmVu7v7RCLMfmi11BGaAgumef6fKa1CgKENyR5S6qRh4tABz4y9UJNZi",
  "key27": "a6Cer1SH6X3wBGY7p6FECyVP4WrhkNFnHMsH8hNBXXGQy5D9y6dD1nyNfEbn5nmcd8bTS91Bqi6MwKkWdiATTpC",
  "key28": "4XAwJBGbsk3vgjxRzroVQpWciueL3ZF2cfeMNhwVksnUFG7igUBNMJ2AbnoaLRK1WV1KVD4dF4US3ZoDStUjc5eG",
  "key29": "4V2n1U6Pugqi7CJHu3Y9gavNZLjSUw7bwauniD9EfnQi1UCihnadeR4KkN1YexWLocEnoau9NMa9YQs8dLhbxTdj"
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
