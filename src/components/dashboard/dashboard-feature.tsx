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
    "5UwJbzHqHah2vL8JqWTdyVLYAGinaCPSHSFd8jR3kfvWJqfHyyPcuUwPh9uyu1DeTBZtfwz64BCrZNLB6jCZqvnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVteUVuQZc7LKtj7AooyScmamnw7Vbx82kQw7fu4h1osEPAuzXSFqXoXiAKDUUbuLaS9vbXes6X84McQkU3qFyT",
  "key1": "4XX8Qc1bPRQqXTr94S3VasYnGZHMGevyim2JeN4mZZy3eQwfomJNkDKgiPVAmNZS7V1UTu8oyaNxLhjjeYPepxq5",
  "key2": "5s5LwtcwpCypd4SKgN469kfVpEw7EaodKZZjAv6cEgpVzB1WXVSvpfRQr5oZ1b6wd6rioDidaE51WsJKLWiTrUKr",
  "key3": "j22vghXJT1bj1coQ1Y37232tKBdPbKYiGFDtccd1LzLAqkoDH5Jrfc12DjXqRLDNHKoRLC63zQvKiykv59QVQ7v",
  "key4": "DJG3W1uCYdkFPVH6rz1iyMt15YAFDFLye8Bh1gJsuGgizfgktBZoLyX9nX4fkLgJsdgHxKGvqXN4TamaeSevpJ9",
  "key5": "5xZgzeNf238TCfc6q452YVqkoaRc93oqmsByivW8gE3oC4j35PUwD8b7U9gQXGPTnseUZ44rhUXKyxc296oFA9mj",
  "key6": "3pzRYP9czEZscgX8XcBsqBKsDvVRx1UcDXzcGRPrq63ozPmqSYinmFFdLzRmDfxJynjoXHeKyjGqSEcdazENTVMz",
  "key7": "Ah64EVRTMbCJ7YjnfXeAwYQ6AGH5gr4WqbhKj778w6ZdnkX1PzmXbVbaiztyUFjvYrBvV9JGVb97zMgJ5cY33hV",
  "key8": "vsiqGzXccMbHkirBZt6VNgchA19AAjNnC1wqhyqS1jiFCz8stjR1cYhtLih1yf1bPz9F5PaJhbFM6trNCnbBbmX",
  "key9": "5C4opWJ9QRsQgJffy127S665m2LxE9skZjqzPm2t4gxTKAda9v3o3yZHkNCMcbqH53Hha1MiLttGVzMXLvxfSZHa",
  "key10": "5miWL4agZj2WKC4Z81Uv3QLoumj5ZKoeU7LbRuGd9pKk8cJUAkXJ59ygMWxh3R237NFGQgrHppD2ZBcVhvhaoRJu",
  "key11": "3P1zZRT5B6FmrmPudKmvkZ8VPLM34v43Mwgx3kLKsCc4whcZrGpxczKxpcHjDdKonC3YDgQqhCaEN9du7qsRhxcF",
  "key12": "jSv2gnMoi7QKPKAbvCxzYPFZkraZ1Q1T2ZXpCHAd7JBXMJhScSokZCtZLc24WaGPC5YKfgryhq6Sfe9dbBXkahE",
  "key13": "2v4tgsv3amyhMonjvFpy2iLVwQLKgd6ZUCdcqtpsgUZZee5EzvsPWjsRrCcrdjK35TVVweLrNkSDKXdmcKjzZXek",
  "key14": "2zjfuzwvvfLtyDoG1Wu3Lh4KkhGP4DoW65w1QhWf46WyBHkzP9L1ZB4TU9ihW4EFNcDAXafaUX1KCZoMz5sKUqWb",
  "key15": "4iS95nsTnhucAoR9bscnGr475yHDri8i5UrUKq3dt1WfTG2mTLNfLnPAPKpgsCbQYrL5TePd7uvxoJgJYnUgu3vZ",
  "key16": "56dxKrugFs2SynhgxevLFyViuSUqUU5B9cx28HzEbiZeJeRu1xMwUnFgYLHD3Yc76hspHx9HfEmk7RWhUNbTCPV1",
  "key17": "32bGgXi1LjVerAJLCRatenyeXH3fooZFgLsXx1gP23Uv5Gs8w7NHL22Dws7gMhCN1QB3bJDcoHm7jL4Kh373DQ77",
  "key18": "5gny9gM4YAknGiLE5dAfq7Sus4vPKDebfHTEWVDMxE833csCn4qAEb7BFH4GHqDJWB9GmJcEajyUYrKmD83rxy4z",
  "key19": "5uP1YztvCR7HHSvSHM2ZpJKHYUkYQaKkgyduUYtojh6DmiEbgtrVDN2cLmH95fMQ4bRomemU43NcYub8RZ8vjHdD",
  "key20": "4cAEUCq5YC33i4dewfmCsPNJfjLja9ArGfQCWWvvJ8k9M5528dLZYRh6xtyEH7CYoGyNPnmPS41TVvHk5z2q61bc",
  "key21": "29ecyDJG8N7SoHr5Git2d5sK34eAPxUt7skNAr7KVRBNpqnYvVLWRFbppUBadXpqtSmQZopyan3kdEAK2TUhnAyw",
  "key22": "D2q5tdGsNgDc3vvnC1BSyPRdXWR6vYLQUezWKCdUMYsLfpYiDujWZcgP4vaWqM2Sri8dmB8NQv7GJzcb35JUtNd",
  "key23": "3zBoawmX8uLnVdUzeMtEoePM4ep9eeJpti48jFG3dGNPhKVtyp53QMRtwvq7ZFwvAGmFfTwnZ46gFQ5xRgJ1kYNE",
  "key24": "5JbKUFVp2dr6LKv3aK3FULcaSXFns9vWJiDQFwLLsY6zGNtq2vco6upmfH7F5mgGtfpwZYDfz3bzjeFp6dYRrB1A",
  "key25": "2iqTTWGP179rtP47pDnEAp4FfKqHzdfb2SSBgu91wWjYGURthiBvLYxowpCETbmjpg2beBkdsAGadWxqHE6Y3u5X",
  "key26": "4sd5qV2CyCUkVARPjAQG4ZjPX2TpYUS8NYsxMahwd42Qz7bQmKeXLk9FRKXmc68MPs63sxpydtQgYGbXwQWMstWd",
  "key27": "28DpuamvpqNiZARkuv2pNh6NX3Ub6sBYioQjgLh8E1w1rqMCANbp5L4mWqPfBhkPMvNzDq51Sn8G9JwTjo4AhDra",
  "key28": "3pQC5G7RbsMrstg53Nna1ArWWAihze8uuT21ySMCnTGjg2o3Qv2225kzr4jmuLWvsjejBtyhh2erprQv1xQTE8e1",
  "key29": "4E1niXgghFYXBzgb6GUbiQcWt2VyR8rkec2dTeFPfA3XYShR5roD2HWQCkT6b5Zto2zDwjLpgv1Gx3JMKP5umesa",
  "key30": "4zcy5zvTtR3ZP8rDVFQ3Mo5t8jLp7TgcVdskcPB5BZnnb5wQ4KvA73MCT1rYT894zMdKBLBLnaPZB3TKD8DAeENr",
  "key31": "5ALpuZnhtFYaS7CuPbq5c878mZagkzK6YydHxfXRT4ZztBHjjsdrk9hzaYDHrExaZyhoM5An6DpKAmDHrsMrdMkZ",
  "key32": "2oSnvbhvNaaddq3LxZyaUwja1WhuYneumFosAcqKjH4RgWr7eFfUuMLFw76VkoNxAgKdzHr8f9yL5ajosmQK8kN4",
  "key33": "5xRPjSwJu3fXgzhR9Q6qkDtpiDZtvCBd5AjCd6LQznWEJx4TTwqRRJJ1ymNchPdUiskdkx6sd2NtQZhi4P8kXDPf",
  "key34": "5QwMVgVmELxeHWj2U3ab7U6XzDmHB5rajMqFZhG3mVGSV83N7j9mV9Uqn7YGF9zGv2SsqpeXmBvyvi9hAAJpMeFD",
  "key35": "BugZ23dcb6t5uBraHjpG6or8SZMBg8eavYNduUckLphqVUdYfBWKQL5JrsAsAjAuSo4YSaSbm4u2u8V1E7nwuTh",
  "key36": "UCyQgzMRrttVHyJSLqX6DUbwx7h3XvumeSXhpYZnDRnCjeZgCtgqEjMQmf6B9EafQVU4HkQKA76kE2XxutxoRsG",
  "key37": "3TFc453Yz5NJwi4smbkJypRsGDMdxn9tHeJdb2oECbj1xbEN7HoQmiKRUHpr2BH7y6KR13qANg3ykSed5HEPMv8z",
  "key38": "SDp7UKM9qjgJPX7TYqeTJFtPGEUcXjUYZMm5XpKopN7q4JHpJSet6ZTK5TwV2UWuwApk3e21AcrwTDvggSETH6G",
  "key39": "2GRgnci8SGjnRShrkfmhaGEN2YYxktHkUvkrvRr3SQY8YsXW86ds2pkby5YJk3gNKsxcMKmGvet1RZeB8y4hPYeY"
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
