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
    "4TF37hmSzYxwNWDfKg51H6zVs5KuRAgtnMuC5R7xUS1DUKGLm7nRLt6GZd8aQJk163twnShaVGvbCmkLXW83hTfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26p7B6nTV6NH9E1TRMBatno2oPQSSQRTixGUXMwYqLYAbX2pMrFmXW9Mx5hehdeTcdUZuiCPZgdZ7rWLCNrHVcqx",
  "key1": "iALcN9xnMBg9xrahL3t4XH5ZDMLnoNdBoXGNGeJ9bnru2eTkS6PaVWgqDo6osPGyKtbP7bJ6DfNy1Qvh2Cvx1DT",
  "key2": "4KNNX3ivX5P17SMyhasqHdzshHFgZTtgPvJPLWM6bBK65P999osGiurpSgkhw1ZqTsMXRUwqEVSTKFJiNsRQQvUH",
  "key3": "6aVMwmF4mwcLHVkjyXkBUfXQeabK3foogSvwXEDksywBmwxWcpDf3GP3vhBRRxqg9SdMDsoUojtWWgENJkXG7FF",
  "key4": "4hReRMN4q2cjPZr6V9PNuNxcSfPRmdw54U6DZ3YBseG6Q6fKqUV4zKNAQTQeBSXwHVyJcwZfbF3P8zCT1FAkoUTQ",
  "key5": "5Lw9BeAsmUecPrmpw1ghXMozzN7N9y4TRC4q43KPNWszwt1tazHfVf3fh3vi3mModcj76f67kjPH3sRkis3YbY7F",
  "key6": "UwERGUUGXnJ1Meyt5huC3v7DzPP5C2UxnKTjG3N4EjSStxgJMUSMKUzLPEUMMJzpaf2LiaSHbAMN6DbJ3wXNSvR",
  "key7": "5yF8qmQ3RZvqCkSc6XCQhf8CNTcG4F4EsjmQbSBojRN7uAuXjkjuj9a6aKmgS7crhKvBG1AhU9jKrchCRGZRBoPc",
  "key8": "2LY9veuJFGqPdati8qNEy3Ds6aJapUanxaUrckjWY47MdK6nwxGhurfJSYXSMtEfniXqd1BmYoTV97v4DuGb6ysv",
  "key9": "4wKMAimeC77QDsgca2tpk93gvYSbVjicDnDSeWAYd6zvngyKm9pqd9Gh8rpfhbu18gXiwz4LexciiBjnMUPURiaj",
  "key10": "qcDqxCyqBsWE5Jfn14fqWKuGarxghSy7kZarKCbUHFujB2SX9vWxCNfkiqvPuSbobE1nJSmtWpyrZ3FADm7Giri",
  "key11": "YHJ2bfHNeygsBsoRwgryzBPk5DNc97XJyUjXjXPHEsKT8vLfsHeCpx5sU1Faz9jhBagbXAg2UP2x9X3WqVNdgaE",
  "key12": "2fbnmSoe7Ycuh8BmErw23jrdq4b8zxD5tgiQqAAxG2mDDA3eZY8R1bcvKjs5CpsAmuTTnqdzQePF3iNWbyXyVYG9",
  "key13": "3xBck8SZBijvZS61CH5Fqmc85ViTRqQnPi9JY6dda8y6b772LrQWheVyuVJ4UUHFYA1YiaV2QKt1xL8EvLVyesvJ",
  "key14": "1fsaDHURg2gVYPmtdQuM9PorySFs8Nq6LUuX1jw2FfVdr7DpXJef8aRv3ugVBrwQjwu1safgtN1r1jLb4unb3Hh",
  "key15": "618Gc2ZRWqgZns4vC2tR2MT4GyYrXhrXvT1SR7Zx1Yh7RhWkJ1GZR2Eo1taPgniRKR4cVySDcQVAQzDUE7Z6Krct",
  "key16": "2ALViNQK8uMu5zcHeEJYYA3QQ24ysAsRFgZkdBgVSXKSV6w1Uc6bxCmYnSjU7Ga4RKbbXxR5iT8Z65RvhbWogqFF",
  "key17": "WVDtX1DF4FuXpuqGynj8J4xNCXHrgsZ5Yogb1LxKtooPCZU78wWFr14GQHXdfrfLtnRpqSKRucQ2g1ae4ezeiCe",
  "key18": "2Ysye4Liak1z4iyGZeMDXf5E3daYyyjj8iT6zZJWaiMjRgSqYcwstGCcJKNzYMH9kSSoSSpddimGyVE13QasDEXm",
  "key19": "5frD7tULcBfkGUy4xxou7dygtqaSNA7CPx6WD6PyzBrnaEmLKcz76egEwfeFVdxPEK4KT4dRtsqJHHSufwv9HDq5",
  "key20": "2w2TvsPHSb7BudFPLdtwoqUdLqJEw2WHVLpL7TL8jApuw6q66kJFxfGhxjM6XmfLVoDcNXXAixceEu3EwNFkpDP2",
  "key21": "2AqGCTpPPLob66qbvE7hEyHSpjf56u7ebVvStTk6VfJv641JsJ1QxiCePpmeXiDZoDgjJzF7DofD9Kt5gW5EGv9r",
  "key22": "4fzpavxZwBnTvkm8baK9ubMoXoqotVjU7i8hN2N8N4BwATmrLJvKB6sfevcf8qTyo5e445c3bNXVr2fW1ah36Cbk",
  "key23": "3zMM4d6vycsiRhuL1ehW1F1wF5KJJKMchaszdj5KTwEcAtzAM3P9MGLDhDVZHd6kfmaC9HFHJPTbBNUTtzFCrFH1",
  "key24": "3LnHuDyB2NdrPyJs8k5a3i9kMrc14aoFfx2ZawRAZsKee8Bh32Z23CMpXbi1oZ678myytTFDw155grXzR37t6hqp",
  "key25": "6jTqeiaVQCU84U4vMupYJkckMeJWXTc3muipxCb9nBHb4y64Qrq1FLHTgMFs7XD8wpj2dmYxGFVKZEbarjPMAXB",
  "key26": "21QgABFRmmBntDC1bstwzDHWAB2r9RfibAEnHs2vondBajMCsD6as3HXg8ga4n1ZBaQ1JUXPA9H3rNitDmGbL6fh",
  "key27": "5VTnRuLrbunxd54cwFYec5piktK6dsN1cRmbk5JmZpyJu92fhfQ4esAzirRizi4i4fhdyBUVqMWZtjm8YjDX2jLo",
  "key28": "3fkbbUPvQaqrcMvPtfjdj93QNAuejb9yM5SgBnMDhLmBVSHBNkgt1rBa88FPFt8mMzQCDVK6EhemoDeahbLWkQEr"
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
