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
    "2224zb38K9JHXApoW29esYHRfZxVk2P68k57RiM9oLnd5ku4ijVDoxgCBWsbj7RWvCQTcWU85FDT7jvZVPtSrM9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEWC4GGuynndA2PTZjxqZWnoEm1ZVJkXzYMBEsf8NvbhfrDJcx9bkfHSDbDo9i6MSGW1Xzpd4vLbM6QnSnUVuYw",
  "key1": "4Z5fPGE9uBtJemmTZUHib9ErPEECt98rz81QMmGVeCdDdAKGk3xsvvcQLT2cszG4uiYmv11531A22nXKKp5pDWYu",
  "key2": "2aMaiWSgmyucbBcUz359acQ1Q3YGHYNT6GmhxZzhGTa9oc4wgde8KaAfdTDrBDQsCxRvY87Se8SeHGszhgfwHn2E",
  "key3": "5q5ynK2BWJug5oCnY2NaVc177YA2CAe4TnVMNC8VGVoDxG874ABxWCsPUYJamaKfku5dr7u64E8Px3jK2AgzWQz8",
  "key4": "3os73dtwXfMzsAna9vGTpeUdj5GepyEZeY8kUbdNWEAUEU5aj1mawU4t6FLDhUVYAfnmpq8ghF4WTX3xjYeVZKx6",
  "key5": "5srjyHht7aWeRsBmXMeiR3gAx7U4TGYN5GjTEK7XGAUNnQsK1gR5PrrwCFkjakrXTvZQbZGNnXimRCnucDj3E2c5",
  "key6": "543jjrPsRFHyMy2eyLh8jv6aa3uBQH4GhVHw4kkDtkdp8vGySRxhyTquLcZwfKwgPWNX4Pcjjfx9EwfDQKCcpjYD",
  "key7": "i6Ben7RWwEmytWjjvSeGxkmygJHPQjpbepnsPnsdYpcHGuQLFKpA9k7vVgUdgjF6qGgEYiUHJRcvkztsHetF94j",
  "key8": "FD9284t2K6KxnECn3nzGEgB5cJdnHBjTx9tnuqpLTw9STXxEEigJJ4LQsCughtNei2KUA92PPrnk3tg8vJgYWSK",
  "key9": "4JNmfg1KTd3ZKAgGGy7TuNPwaeCn3V4eCWuhT25z5DSetvbkydJZQ5GiuLeepDE1hJBoLUUG71PGrNMtsw8c6WxZ",
  "key10": "5SjNHja4RzsiBqpg5DsVA2hZkWa8c2nLhmM7mHEDkaKsPq1UGgN173hcCYigoeFFxTxM8D4QaHGzdjkynE1hynQS",
  "key11": "Hp77Jrxhsvnnhth4NaHzbNfeZ2FXrfW4K67n76CVfmvNUD53fCFDP8AxFbnReFhHrMrPpuFhsMzqxxdwZjrvK7C",
  "key12": "4tvSCwZqYnMpbMydZu7Pf6W2SJsdxqNSP84FaYYeNJs4TCe5pgHDvxEpABhGBYwd28BM3Z4tjhMZfMzGEFjzBnQm",
  "key13": "i4KS5fywYEQCUNyo5JCgaU6sXDSVr8TKGCz2sALvuH2RW77kruv4FENE48gdj7JHxz92ff1KdMDM7C5p8z6iSjs",
  "key14": "3ivccU6qVtvyzMdSrRMkXtLHMJg38tNjVDN7W8Dh6iJZAuABHPE9gVBvzEwZgipXEGTzUDMzMdkEfjRXdYkcVvE6",
  "key15": "46eGa9B4WLCvYi9hWjXZJ6Hcs9VRxDtPa9zbtDRbWNyqjr16LK3Bhrom9AhbysddGEz3nR39jsr4rhZNs1qzkgcJ",
  "key16": "5xstgi62JtnScLivpqeJtVB5pAcuvf5BxhfYvmvWU59m86vTL6dVLJSvL6bVReno48Lj6daEL8ibsMvsZFG2CjF5",
  "key17": "3W6fCp7Zt1zWDKiewrwEccP2TyzvNTZy9FLa8KzmFPjyh6msbUR9tRrxYEX22y9QAuUKfbHPdYe2nybn1CsDxQK3",
  "key18": "25pNi554mzkvtcaNe8juzMQ6qbN7xcFmWcCKeeDV8BGt6MfVxAqAr4stt7abGzaYg1JSSes7QePu5vDMTN8pRdpu",
  "key19": "3YYKz5bqh3Bsk2BfCXxWpj4abx9BH2AgCarCiRRUeBss7oiRZkePRRMV4WJ28XSMLzBC5PYB6HppkVhu6HGR7wSh",
  "key20": "2G7rq7Y9scd8srW4tc6rVh5JRp1A7Gjx3gn4waCz5gMws35a57YNUVEmRid5WcsQchn8jFuDGpE3N3D7JmBLmLBA",
  "key21": "66Km9nbEHQBdheEyfJ9aS52tZqi4ymK84MHPTe8U9f5KnVw5UDgd3PjouwmG4HGsDCxsi7u7hmz2wnjpG5mDMw5e",
  "key22": "FomNvphRhS5gXvM5e3GvHRex2w2ARPnHVjmVTYJJRUcc43w2xfnM3X7idP2eT2DdnVb3J4oLnxgwnDjkSLmgEPf",
  "key23": "4BTDZCn4D5RY83ZZDMhWLz2mekdJkygYFSdaaS4EivgKkoWbwCfPrTcyN9AwVJQX32Wr9it2j7BtwrTQoFWd4o55",
  "key24": "med5rcE65ysu4RBqpuckk3oRVuY2rip1KiKSPfyhoT1aJriGd3AVyWmrgdNWsj3iK61H2t9sAqzWpNDjY9wHosR",
  "key25": "45SeFb5i9sTz9mnDu8VZtNadtLJ2tLwUyjd5EbTQbLzTe1jHHeygQKxXFDPchQ7Wuju4tqHrQ38dTWHTDszqqgNm",
  "key26": "4jLgpbUXbuoMdNvmaJfoPoJdWD1JahrdBYNEHYj54pMpRPRwWVBVWFqoN49YiAjoUNZbaAnk24KssznhGwBHjfM1",
  "key27": "HJA9yU7wKV9Bzhb4foKB1KGM95ZUvgEhzZLK7FcoFsWqUicczF1cMjUaG2oGqvgCC3wXjxykdjnShGfKDxTCWWt"
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
