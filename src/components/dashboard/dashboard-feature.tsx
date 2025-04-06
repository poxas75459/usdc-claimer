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
    "6KSfuX9gahcG1JHHBQbdMj83gZx4u72PpzHCUZT7StTdjQoP1ZnfLMbwrHZ1e9sCXKc9eWGevL9Yej8qaiW99Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nejH1H2v2DYnAnrL2fYejupsmXR796Z9Kis3bEVkpj8pNdEUhhTvCQHgDt9D8Y5QeyLAy22NnQVyfwRs8h2TfNq",
  "key1": "4RJDWuqtErWARSDAQFy2uFBeSVRiJx1tKJveuWtKMNGcLjeYNmT4jDfk1x5zSPYThfLPYAWZEf23PaseYoh45tF2",
  "key2": "5M2CVMQqbqoPGziLF41RcRy9Uzoq4fG4AH8MyAQgpwCSenMwgXzxA3T73boQsHz8VXtr3KhNvDguFwaW4YomG4rD",
  "key3": "29CEMdqAqas8DjPFdeoDDtWPjc4ugdf2haGNzU775UAHri9qkQiQG99THc4NvKycwvaLRYsK8z7wsoDvtRj1efjB",
  "key4": "RBjCBrC5sNZ2hD5n4FHPehH5ppnbpE5udKnG7JutGD38pz4gHzQ5gP7AUtoJHTmBhLuG9km9kMG93RyZsgsDgAz",
  "key5": "26qXKsLweQJQPvhxgtYiUUdX3jBmmkLAzxqjaaYVmqgvQ4Fwux8LEedBWTncf5GdsXv3mvJa634uPB8dRDmtk8ea",
  "key6": "4aTtjyorzzMFjCoSTYgSTQL3Q6XPLiLCJBeFVr5xVT2npLcPFPA3T1vyi6rWnqszKPRChtAJF3vMEPUVHwcRQn79",
  "key7": "4BKCsMwp3dMUov8q6zqd3bMqRSAfnBsXtqpqAb8rFRv7ZNCpbquDbRjQ5wW8y81q6X6fHv7kgSaqVvqYYU7wcMAA",
  "key8": "5DURP5d1eiYHKjL2p1298kKMm5D9SSmXu4Yb1TrxVAScL4euJawGtWMGGPiutevxcb2xv2dJ7DKGvwXXqrP75Vsn",
  "key9": "4EjdaHYH4V3fbeP56FZrEUFrvLNNPVPiTUYYyFNBqi7B4CPPt4zEz4m12EVCUqG2odJzERmpjMNJtFbAbtP8r7Jk",
  "key10": "2nSS9USEvNi8hhJr4h7dtE6JT16XVVxWVA8o5JzTY758BvtuivTqC2nss6v75pYdtKhEGKUsgxXNToBbHoS56D2E",
  "key11": "4L8b1FR49a2AfZnKz9Hb4u5CZj6Fqf8VLjPquVCGptdMiHADU7kQjkABrQX6ebQKS4pL5jyNBoKYYDf6YmShydoG",
  "key12": "2pqueyJws6c1SU1d2UGG9FM9Gq8RzLGzxc5BEy7z7nVYNAKyVo798cfg49UiFxqMQNSL7rUDh4HfBUr4uGt95CKS",
  "key13": "iJ5igHD5r4ZTFCWFgZJ2h9FLv52b2oRCp1js1kimjVCpVRULsHbCD2H6SoJAJ89JkTzrytamNu3XqkwJCY6jPyZ",
  "key14": "4yhEX3hELhNdGtKiiDpUAqU9DtVwk2u5Ky5198Rx59SKHiiXE63tuWsJk2SdUDUeKxNSMx7SA2btZe3y1bpXwkwR",
  "key15": "rsEJNhpoP5KgswBySY441z4gakjRdNJYmAoD4KNkFnRfSgTHKU16MEGWg3wr3fXvHU1Svtp2ZdqxQEbH4TVdFHn",
  "key16": "3cHhmaqAFtZ2cAgPXLEf7AwbnsaLqvZE5rRd6Hc9C7TQwUgKaKC5JHJq7ov64STcACU5eq89n2ZPBHEdNivbodHQ",
  "key17": "59Z5sxbcWia4PEccfbnhRko7QaMPybwVDGefk5q4pSMthyoS8EAtSdbnswpck9dTERpZWRyyevovML8koCR76t6s",
  "key18": "qbZcDJ6p2v8d3j1fgz1hLKpxf5DwXuMsgVU9RV1H2g4miN1yQQkfd8R3VFncBmehRY9M7Rpp7YD5QVoZLcBkJx2",
  "key19": "5TspWDTeWyNLGQjPZV3ak1hRsDL1HqdpW1cVmLi3VF2pDs3CCx3GbM5o92MW97xKbYsS6PYby2vshATBbueDqtDS",
  "key20": "3jyEnkadQxotZ5HRWMt9DE4ZgvJtFeDoLG1cr43NrFpQvG1xi9XvbM7reMQw1hLqBMbssh7pggjzYa5idEPDTRFF",
  "key21": "2e6yuqFcCbKLXKwYGNkoKB4KcoVVtpwvVdTt4aBw7iZUPbF8tzAC6y1rJoBEpAVHmi15vkJACFrjf7SA1RAxYaTn",
  "key22": "5n3QawgjRD7p1s9jK9Jc9wRjHwFaVGJswH2AierYoB4o7QU2yx1sA2dpbSG56pS1wXT4vcp8veAThSo1Mp6wyFbn",
  "key23": "5y8M8ZD2AkiBrr2GH1y6SKUg7HU6m3zks5AgLsrUyMxHYuaKFLPMbBymP6FqTyWzwqFjhzZkdszPBHVJx9btMNvS",
  "key24": "tekprzy9ykpq7WEvSnErvmptxSgrHNeobVABg3tqtnN4wRb5Pkx2fqfyqPVmGJ7LVFDy8xX6cyKDCY957qq5hre",
  "key25": "3cvvMextsn6kpQxFPs3KVQJvMko5ue7BYQGb4VbrroP2d6DYRWB7ENjbYXPn6NVsH5h5nj3C4KGiqj6yZ8228PjT",
  "key26": "4Vpapo8A22Q7EUMUpSouWZetQkU9dLCSy6YTF9KbMNESqtGoTV9iGgZegE5NCcD1azvmfoW6sPMJrESxYQ6djLes",
  "key27": "2KsByE11nreFH6hpKkZJ1n34d5C3DJ8TuUoYBBAxee57Qmy4E1uxdmCDn6dQdReBiUFujY4h18AcD3cnRyzh1xKM",
  "key28": "EmoGAG3R4d9LdREXnw74NFcdjY2v2KM5Lb1ja86tyNskz1AcgEK5c9pB6VbQQqM7aQRWwNfhudWGkiw55uY3iYM",
  "key29": "9F2Ko2MgbKHrqs7Wjg8HRSCL7a8tq5bqLJWPvQn1QUuDJmUr82VKeb7ZSvJL3MtrKmwYQ7D3BtQV7TvLxMvFTZh",
  "key30": "4gGCdboiCJfpCgGPFq7SPmiCXXoGYd3Q9E5qfXZvTDzazUXoiXpYgTaGY859zBZCuEQMo9b3ZtvcpSMbXQu9RYoN",
  "key31": "2To7R4eBu5JhyBghCjUoMXaxfkqNvcwcPK2nPvCZx6vN1MzFyK65j9Y3kkRGhKyfobWtQahB7SY7drpcoVUDpXQ7",
  "key32": "kHc84a1iCSTg4WfJeqACwHFcTTZvEqR3V2qvojH1kxjthLVD4CkmMmH3py9DWkvXAyDHavUmgGsguiNWrmzwwTX",
  "key33": "2einVKXqRKtSVk6TeRVpaUTAdgJU7vLZ7z5tf1W4wc55hYDBx9nKJV24SF1yG2Q6A9yHL1ELk1S2igpmCCJM4jEY",
  "key34": "dPqG97Nya1UUUVN7Lt8TgRSaJsyoYgriArRvDFtYP2D22gobu5WSDuki7KhZULWYf1UCnbhJUyk6kXaCnrDN1Hj",
  "key35": "4WWJF1ara8sR88vpP8YRbkNLUd2rucc1BegXyxouEips8cwmzBCfDC6wfS3n2feTaorop9JzTDvzxQDrKB9ZJERr",
  "key36": "49M2apirJcUaGauDooXPxxJa7CmXpNqQ8pttL1jmX6FURqp7HqGrmk95zCUApDBvbxKSUubGAirrh3RXEvsgNujp",
  "key37": "2vzwm7ykzTshfGs8yNBjjWDJsfTF7wfaTrPwNSfu8GHhshnRCrsWDT9YCoSL7wSDvoHnnmosz2MdNsdnBUHkogiR",
  "key38": "511QERxhJc5QzskUvuScVBtXx8DzJgVPTZ75cAW9czdWaqoQFAA7fan86JAU4pxtu4ffoHNq2WtgvqNGmw65PUxy",
  "key39": "4aTW7jYCszdpYC9xJNTiWoCaRvZTbrZAPXfXdyExDVobcqJhbKWoCx1LTmQZdN85o5oBt3DBhS4GyKh7nZpK6ocp",
  "key40": "2SRkYiQGmGaTcVkCCYJySXUC9NgCQKiYci4yFkmw4rJQUAH7XqRhMi5MN4ko9ceM4DZdF5Na4mgHr6xHx3KdfBfQ"
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
