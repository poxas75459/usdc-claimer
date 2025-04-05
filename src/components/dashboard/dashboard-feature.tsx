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
    "28fc6bpKogg89WmnFGyJAXMbdz3svrgRWe4G3bafZGwXMDs1Ymgt3Tgy9FigqnBcaj55Y5QKi3q2oeRaHnmgyKHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTkxM4JeiNfMG5Hj3oF82oUtgoVeSTjRTdiZGn8QA7XST6J6DPaaPD35Zj6bhHm6jSgJ33wdJx8LkD9YYCdtWme",
  "key1": "2kkiAeyfAJERRBczQABqZKiB6ThqP8gHagKsYgKr9VjHwL3jaWdPeATrhdyuc9uHEh4QDEs8K88mjDWjCnWpcMwL",
  "key2": "2GQGh8SDQQy2g58GyAzEDakDRJy4X3c45s86SnxQu311ea7Y4aJ3QpT3WpSibk3oPTm63JJSATaneRPobLEg7sv6",
  "key3": "jBdNJ3QdQLWv7UqVpEc9AGE3tf5rB1xvLnpMSJfRkVt2QHx3Tj4D622Smxyo93RqR1GvKtgjbjRoVVceEFabkJX",
  "key4": "CVnN8pa23yi8dA1Q2YU9okZeigVjdQwiTeAfhf8PfDHpUPkcXbsMDu2YXcTndVZrZw1iu3ifxmkXiCJkVST6tH5",
  "key5": "2d19f6sfUPayCiRvUideV7SuPzPELugza6jcM9ZCGLrtNaCkFaWQuemrmbgQCYmAbGNn496FCkp1MLdjrwWrdcg8",
  "key6": "55rvDrg41wAEK8XptAAxLTgMc6Nwuiuevkmg7LLv2fG6Dq18AANNn4YnZZqwCvYGmWPy69PjP6xvh1o3ktH5ctCZ",
  "key7": "Pm2ZYKzu2iJyhbrwMibzXgARspDpApgpt1BAHZCRa4XH7SCDfnJHdcwGW1W6QQH7spv7iMeGmPSKciXhv5Wp28f",
  "key8": "3DnWkUYCxu9hMzb1dsbwqw8wNzeYAS5bij8jW96xt4WSox3E251gqRUsV9Vfug7w4D6wXkzfFdj2oJcAcsQNjUFi",
  "key9": "5ESejb6iTSVWAumTQaCEBnBwoWuNGVL5NajW5CQAfRfmEqwWzaXU4VMiLZJwJEiYJiRU8mvGLAe6oQowuq5yTpJe",
  "key10": "TqJLGnredKaJcmjgiauGMkBGgFq8UimfNVzVx5UyrCBQDyXnDvmw4JeVJ6fgHcBKuvRajVawmKguv97UaY5YXF1",
  "key11": "s8khhtnqn6oEAZNpB7hdDwxhiD5L6vWN2d6M7dWi5L7Fk13B2Ru72eHsaE4L7PoDvPipRbVPxvcQtB3fgHhMpyw",
  "key12": "24KJWtYyPJzwdUS89MQaYfCBAsaddSTa5xybvrvcJWAUe5jtYZBFHDuGUUVLjN6WL1aTbRBfpwZYott5dJUZQmDP",
  "key13": "3X6vQLxcg9sf7WnrppK8Q31xRLiLKbpiNxGcga3cFFg2pjSTgNYGNLpapoSUqW3egr3ZDhDTKVMguyaqWycAqcWq",
  "key14": "4QFE26WV2CYxtAQudsrGrzuqm4tQE3fxM74Hbsw8kGyVZF4CbCv9Njqk85FWtC7sS2gNL3bo4tqYybXtFbxmCmTk",
  "key15": "NGQyukAxM15iFxNV3FA4UoVCutesmVSmTidnErJ2WXf4xZkeW9NTSGsUBadbJK7vuxCupzeqsX1m9oBLXnCfs2n",
  "key16": "2NksTBfoYRu2bdMQ4iSvXoT7wBVWXTYnNXd8AFgV3QVYXCx2WrJYBz5y5ZrrBwb1MFyVnjynVCpewjZDLW9K3CuZ",
  "key17": "5oSi62GofkwfAcAQQM8YPYJJEZZaFcCeCxDQxRgGekuASvrnyFAMWBhac67knSnSUMeA6p3zzDRM3FCRB1jE9sEB",
  "key18": "29i54dH6joPs463W6XLiK8JArvJunVm3Ydgq8EYxruxj5mayDH4P4MDRz1Hfa1aw1dwibGpvRezpAFABLQ3AsuvU",
  "key19": "521fgtcLBeBCnMwShwdDdYyWiEbm7HQzYrXCr14pUPDHxMCrR2zwx4WWytrMsonsB1LYNec21zTHYmaiTmocymPw",
  "key20": "YdT5juVCZo1MMkG8WHNeRf2d3jMiLYr9BQRBK3rQazpqaVBiiwrSHbKZzcEM4ZWmtV13kegeBfFQHKEpfzviFJQ",
  "key21": "3wzyQ9aZoYbR4ZyiEENdr4xAtTskSF8grLcXUgtaTR1CxKkEfomoay1tKJtg5Bypx11M1V78uQDhBPEy5ytzWRWx",
  "key22": "2ntM2pDyDTAQbc2jkTygzNWEEjyh12VH9qMEN7jUq76Wz8VJwddNatXUG9Wtsf9e2o7FEJcLV9zdLF4zp5FZYjyS",
  "key23": "4fSuPh4Mu6VH1e33pEREtUh2GZgUkq76LQkec6yZbGBn3rDRJcWUSZDAogcEt8vGNQqTdyD92shy3D4nom7py3Pf",
  "key24": "4BvGDCsdfZFZnYMosftZLQyyLBKsgNUGQF8zAeDvg7VCLoszc6zBzmHYjmi65k15Pj17wPF5FqviDMmSKdEzgUi7"
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
