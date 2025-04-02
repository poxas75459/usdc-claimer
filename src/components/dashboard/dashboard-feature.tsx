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
    "4mhKwUD5wrNNpj176pJnuw4ZYca9eYJ3UK2Se4QQSqLw77X9NxHc2FAEzPHGd4fGfR8nC1HFfbXGTBwVk39rgNYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61nkTnKe3nkKKsHwS7YvuDz5pfcwEVttu3Aho3JoZbjvaB5CZwFtf4b1t7Tg6X3GF9BEjbH5SEYBVhjN7csHpDQ8",
  "key1": "XEAn8EfFkBULt14ZSe6EWvtwShZ67NPvSB2zQZCRdYrYU2hcxe1iZtp96fpGkZ6JLP2gpUVKxXUpJjRY7e7YvUS",
  "key2": "TJKD78QpKwkQrT8rTbUBcAipECQ7eBBgvLR41mXcYDq8bYYNpLptNGU3kgvoanQ4xniGmYRiz7TqDnUboCXxZoK",
  "key3": "YBy1z2gFCUTWvstfR31Trum3sU8pMBGXPacTTtu2XnY93KSwkwcaej8M7UxgFLuLXykncaw2vF6hKynhiofzXet",
  "key4": "2WEXSo3976v61WuKrF6GZ2qRwS4cj98i5JDxKQ5L5YiqKckbMb4KVwBYUC3VManW3zGH2TbrtpfnpEhnHMwANRmw",
  "key5": "29S7PNbm438B5W3SZKNjApJownitdsn7kKKrNakDxu24v4tLnSecMZ6oaeUfygiDCwXhLVUSranuTZ8tmC17Jwmi",
  "key6": "2kY2P1CoUbCtmpv8HeNkaijiZoMiaJQaxcbxn8BJGaYJhdDruUw6XUqheVcdvDpTqiBfesTsymCCCZTdWLv7RUA3",
  "key7": "5UgPiDp2sUUcN52z9b4gpuJwKHxEXFWjLtoV1pNu1vWGem5MKV2hkFMiS5ZrFfPGh3ZEFGdzeqhH7mKKDJMd1v47",
  "key8": "JsUEeuJHs9zpCAzsNaeDeeZr1MoVaze4so3FPtF1wd42YiLKCaoQ6jCCoZkLugi7uL6ZwPvqEXBgv5tXvfd5bZ1",
  "key9": "29k67rEWuHjv5nZVSB4LVVStkNJBCEQTzPUQr2VN2f3qqY4wwAVh85yHuMYDgLqxRoD2ZCGPYBPRsoQ9KnyHRFDA",
  "key10": "q4gUvZBJ8v6A7zAXXPgH4K6FJsjR7denQ8uWzwmsHRi8NzGxeBcosfUPTXF5UBFJDYhWQiQFebpZqRz8WvgJfmj",
  "key11": "5gqVnpC2H2z2SM4nXyVQucdk9uQ2zBnHZMz4ddfBBwezMW3WzsTvL5714JM94XNTnYZEoyEVwUG842hAGCDC9FBp",
  "key12": "57QYKAq7iVawsHduc2rgqeeFXnJjyDiY5TvdPtmak438bM8YxVqKSU7vqY8KNeK4hHcWEvhsEPx2m1fesaAnuTm1",
  "key13": "3bceAAp1Eg3FEHDgMi3RR6EJReyYdSxDXAHHKGnCeqtrRHuE4sW9DCu6rY7kR6aqUPq3nkjB8Hrv8v75pqcFmMWf",
  "key14": "5T8ZVqDoB2gcdHhLzs6W7ze8oeHZfVS1kWQmmWGrJjJrX1zFkZ2Z8n8zqJgBNouzKGA8QcgCMLQ3obEE21amfVRp",
  "key15": "4gB8sJ6tpm8XwaWDmadSntVEckd656n5cGTfZj2Y3Gj4ZnunN64hLkeuJWux4wJntnG6CgtHweWftsCLE7AE1Cz6",
  "key16": "4wBBTqsocCztKNRD1sWFeCFoEgqnHSsYjpSGxhyFuGDE3Wti5VHpBnEenw4L48sHiKv6ZwrnDpX1z8jYQh2Eyhzt",
  "key17": "43CdoiybLd4dhD1jC6NNeiSMwqsRwq4ATmto7WgdFF2NctfNuksKKYiFZ96wvQuudQRotnJ4zQpyKENMRGAP1ZU2",
  "key18": "3Ew8YLbMNwTyHniYV39UpM9GYuqir9dScfPN1V9h7X8ifAVbmxsT8b2sWq5ZkYisf1ANNctEQzReX6aZUwbK9xEW",
  "key19": "3Upfb6HbguEvoHB9475WgiRUgiAqpY2FZyRgSJ4DPMUySzpfgXErhkWThRrH2UZJ47rrpZjXMjsyCkhTr8Foc3Au",
  "key20": "t6V48gQJyTTqv7E7u6EFff7syBCgd3ZssRcuaxM693V5pdQLXsHytacPYJsccf1SNwGnfJ3EDCwEQ5afMaVPc8y",
  "key21": "21Wom2w6e8uN9Qb2mHXbYGksxtjC5EHextknsSQCowxxaC5SsMN8p11ZfC8tNjDDCdkv5XXe2XDBorLbK9CBMXNQ",
  "key22": "5h5NvwVReC4xvqJ75GBf97W17LEFVGT8SzSTWzuAShv727YUbywuSYvVmPMckj6nZJsTjRTmhDTNh9Uu3X3guChb",
  "key23": "2atddAemqpNSkd4FakzhJwbzoP6A1EPzPETf3N2NUct3qepwJxzSJHKHYmLNTNz1gCCMYyJdKspqSVek6MYQWWDS",
  "key24": "58WnrYvM5knqnTD9wKiyNXXM2wkYf2c1X7FRev93K5RPjKUysGNk3ZVrqVRj5dmNF6NFYKPGvVoMh8Ts39cpKuz5",
  "key25": "4X5JuH8yn961s3xr9jonFKncsw8EncSgVgTQ5HkxzNKzpcbw2gFyRr9KNozEMtMyL7j3SyEMRKySrhhCVkZoBduT",
  "key26": "X7BKuHATz5T3huyG7DW7D3gnkKmDnmSpoKBuMYUkuaN1xMY1CYJHWLio2UMcgZhq23mZCsWda1q4kYcmnf5mmXJ"
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
