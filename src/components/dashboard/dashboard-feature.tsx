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
    "2M27SLoysbDdyW6Ai3cUrhtAXWrqSX9Yahn9KYVkBQWvmFpfvzb1YvmD3B2y3KshswGj2LwqhiRZZ8rkUJSSPKRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24E2UnYPqMc2VpuyR2ZKVDtAimywDoKUvsv49w4gpVoYhivxnnd1JABAxYdDUjzpoUEKDD8Q4k35vXtzCP1NDWBZ",
  "key1": "4DFeDi2JnZZW9555ENRDpLQjksYZLVHzFpSamvonPgpnZBvk7HLAcb3Z6RuQuyVgW6qQAEXQLsCrXdBNW25rDuoq",
  "key2": "3Q27JoC3BnaHPRMeajjJNVq27ugjUkkktKodDyY1LuoZZrPwsrYtEJAYjiSEQijTDtkv5DUQoYb514kFA6Po87Wn",
  "key3": "Pv2hC1zWMyWVKWLZvfyyL5rjMMMfVxR4TzDjjg5rF8czGiLjL6uyPYA2J694SonyKebRcXe79t3N67VP6XYrjNy",
  "key4": "2ymY2rddgKVz1TDeaTEWajy2BJYkryLnXUuMGWNFz5xnacikREwEqecWtdy7bT2x6w8V8UBzZ3tdb65wKZ4J3DVz",
  "key5": "SE73gKBtmbZHkroza87b3dAsA2GjtzZUTTCiTBmDPb15N8ofgpFvPgoVcSZSKTyZmoENsTTxmx3FNP5MrACyUso",
  "key6": "3cAyBMRdgWxNa5cr7Jq4V7DFeuoUy9rNNDrJJNP47EZ4qMXd22t9NkFoN6e4ssD2DvA4p2qcZJ6e4RnbiMgzEHEt",
  "key7": "5s6PBDY1ubHNeSwXDcCsLQhsaXAF1ujuqYdggL3wWRUksKaYfMrEa5nokVZotmEw1MpDf9Fb6DxqyLJijdmh6fMp",
  "key8": "diVUZwefZmM573cTue4eSfXkJ5qrqUtTULpHGm2GSvw9qVXDSSCsDrPtwgwjV7UNJCxfQCb9fMH7sQhce1NC9Ur",
  "key9": "42gjtMsGZSvp5AUu3CbFF86ky7NxaKDgryntQLZnsPSFReefUBLvuqZvTUfEwXMNNv2m5XgrtHrfGTpTrKLXjLE9",
  "key10": "iyJP1GMhqzbGwh2CkhdR56ZKa5xHfT2C74D5uK3JdHAHHAsfeh4sMoh7faVGWYxX1aAb45tocwud1ZhHyKBd6qA",
  "key11": "3ZFi7pZ2UFT7jJoZUwCCheAzQPrajZPT1CXRtLfK8fJpfwB31K6rtPhh9ZrGUyzcr9QdUs3PWVALyJdpk5VtHgs8",
  "key12": "CAATBS2ccpoMqUXqi4SM2s8XtTyhmaZXpYKEePoj3vpvQbQcMMUaVaDfg7JauuaH7hJCh6sQWxUxxMV7sACHAQ8",
  "key13": "4VHadEfkXYnEJ1yRUYC1mprgpeFnVdpidhJ4H46QaDkD5PV9HD16FwFQktv7bEiugYcJrJ9vTv6svdrWrK6Ju2Sz",
  "key14": "4t5AZjJJcgi5QQbWPFjKzSxucidJPHfNfmNKrQ3FAzacSa2fqDopxu3nHphS41xhm7Z3E6bn4sV7y2YT4hre9Cpr",
  "key15": "2gwcdoMV9siN4UfZtkES8K7YA7sxgNit7o7pKeRDTEY4Y29AMmen71diEsTRSmpngMvKJsNd1zmHRzfaUkAPMNgH",
  "key16": "47hgqstPXmR4RNtYd97ffXNrC4QuBHWH3JB4Bb5DFceypgJ5Lx3FLREP8iidtEer3W34mJGSPYjrzYDJVitvx2qj",
  "key17": "kUMtkiDZMLxMNyVBqfMiRAW2pnhae2ypANT5GtrtEXeECsfDCB4VETtjT7QbpBa314GJjtqqd3mjmQM5ELuxQG7",
  "key18": "4boexit8yb9YH8qkKTaUqD8U9MkKRmpSJq4UsVaFYzMYWGJLWabJwXnTThyq13NY8yEJZCRNoptrwXZStWCDM816",
  "key19": "5JQr45UGU9EkpvsFtVL9yoJnaZMcgHTQYizRNfKkrxmCC1qbiizSgHGiaSUbfVvHaM7dxJoa6i61wKxuid9eQM5z",
  "key20": "48oBtzTc6hjzLkUdH9QELBRZcPfvcSKso91YCqRF46sm8T4iBcfHmf2NBa2iXurbWWQ9UsB9YRWvYb5J6NxnABGu",
  "key21": "92ndSjgE8pnZe2YJrxtDyULaZ2gTvSdBcMLeZ4UrkaTMaWkvtRb9x6mALsAkzgmvssxRSc6eCf31oBksJ3sJhSB",
  "key22": "5NDqdEmZtTfV8uqFbfnjBUiLMkuGbTiYNaujm67RpRdh3zsecdtQgrTG3TYzrfvfraefBx7y5YvKQMp88QsPtEX3",
  "key23": "4ZSA9uN69SHUReUJuDCwpEc7qqvwWcPvVQmvx15VTxu6HKnWwp3VbM92c6bzAYgRqNvoSu69uYavfzHJoM4AWnVm",
  "key24": "2jBaDtJZxT5JeaMjFJA8rb64jZHRATyfSt8qo7Ev33qDntgasfKPG2gdLUpxWtXPBHZvLLFYT8tcr94XmrkT8RtZ",
  "key25": "4oWmuJMbkHNLqRkHbrnceJZfnBWyKv7BKKZnpjosr4ydXwU7gFFQBefDMkL5q9He8AB6Np9r9JCxKyvwmw2MLfGJ",
  "key26": "iNYN2cvv8y6D79A9JyHfRy679yCyuGmoxTjv3bf795Zu8jRYHWiFnSWpQ5mwHv6DaHLzzz48rbRZRzg4Dt9zXrL",
  "key27": "2KZvBHPuK2UGoyXrLMnrmrEtrkNzyjUXxszcKaQQUj9geZi153bPWiHGpncMsfvhezPdXgEwVLrXyydHiFqph66x"
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
