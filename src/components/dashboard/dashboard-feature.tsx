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
    "3usbVFfmRRsvbNKhRjjW7ddR6oJYUJWfn78euuaNGN5281ExsM3VyL8dvtzPGps6UE1WWbvPGFiRnhN1s3MTc6mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjsP6XJqMfUy6qhhqA6XyeHMgZK6T9V9EewhK5ynb6CACVdPvE9gQzTzrSiZhWTTb6ybusppwQySgfWqn2vvogW",
  "key1": "5UUVANHW9173EAfCA28ajLHsYYB7UvCzq2f6ZMVRVSSDKHwgjJ4JwWT7akzZnmJc3jVevKp4hxkMFVr4zUya7KHS",
  "key2": "5AVuLFZsenoYBSdrsVU7Mj4z4GXt8ZHZwg46Hc8Fy8L8Z1cgEoWGKY98DGVgRjWgcVgNm6KoXR839TDsZqx5gVkL",
  "key3": "3sqZJpChaYzucVxUzRbRFvzyqVgFDYfdDRDCQwCMcndaQFft863yWfcuWVRkBKap4o5qDXY4DDHxXkfym14Fu8it",
  "key4": "3rTkeLMUiQf1NL1fyNZwUdLmUUS6Z96ghGi8HdeEcUC42P9GRSjiJSNJMjxHXriXGaRzU2zumMDk477wkiKy4wa3",
  "key5": "4CtU9kSRnLuCcfa4eeWcaL1aSasGYqxJ9G9FwDG8CNyozoxF6CWsvVKfHm7uims5SVmR7fkVuc6a2cWw1JVLkTLJ",
  "key6": "4UjbAq4SV3cEYXxv69xq1b9pXBmzw86p68TMkiFwcfWRV9MUJ6bmTVAQ5LzsmYqi9ahHUt8Fa6RozJ1oZWcoHjFx",
  "key7": "3orKmvKfXvGJBh9rJRHLFfh1AJdzEnZZjsULS4x1L9tGYvo21TrH5e6ACLasY8tufnLuwDCDK69RPTdjfHGiYKci",
  "key8": "5qciM6EP8nyaczo8LbDTi4ufBYopgVhQSms4ZYsbNeGwQ6Y1YhoD9GBh8JjCBZoNSgoa8hcdEmnYRtGG2e3ZYyRJ",
  "key9": "3fQ4jw7HDwcPTRjAeEmb2BdGAoKvVNkQoDHzvY3VD2WonwbopGA7bGafrVD8YAYqHMhqeHUsX2SCRyUyK7BCuo5H",
  "key10": "5eEM1CpQaqoMxQRETcenupMXbY9AetfXndHaNPFKCBYPtUgGbizJGGNk94G5ihsm9tyeXWC2qMiJV34ZnMgpCsPx",
  "key11": "3gteRjv1QsYz6UFFmj4jGi1CK8grsiNQdvypGHxPQpqpK6USurEYZVrphgWyPhqn2Bu5us6L3Ss4SqtT5pHNCcgm",
  "key12": "4meMnMDMy4oqM3whU6MP7bFDrcLE9QW8c33d4rmhKAiU5RVDM8ECzzmDf64TFu6S5znYFzrn6WF8tkfgc43cUe6t",
  "key13": "3swXnZv8XmnB1Zus4XkGo8yo43w16ErAS4nstAs1A8PK54Q6CdxwLt3A8gqS4wfMr8st6foY2AddJHppbeoNdqAs",
  "key14": "3hvA6uvEfzY43YdKYpCApt925UP8xUm5uptK5Tjj48zTbsuWBJpABb8epSgeVSgbhAT6EzP4kknPdmVWw7GKmPnD",
  "key15": "2uNwEz2SV6YhDkHmhRK864fZDmUBgTBUCeRpkmUZ8Tt8gp7Vk1NhM1vSZrk1JwtMAFYAe5HVz315fHCPSYt62gFT",
  "key16": "nkXe4ruhT8zWisk6RE3y953aGkCZbiVcneZHJbQ1V8dc1Vbb3Zru9RGreGaAW3ac8RQ4sgs8KC7TJexzABosMHQ",
  "key17": "zmbM3jTz4UCn6H1p3NRqhMn4bNuveMkVaJtUrhszLgAtm1ABfSXWY8Hhv8bdFUzoD9hKoaMHWXVNhkL4ByX9DRB",
  "key18": "2jUpqfmPJDmskQdpJgGJujQu9Uw4A6TnZRUmMvMQqXVH7xsy87LguTDW4Dnf6KzbyTKhpto2439bgeeCpEGj9vZR",
  "key19": "5bR6Qtcmq9UUB3oBDB3wQkc2KVE9ba62R9AYzfFn8j5SNsGAKmTvhSG3tgfZgsoMF71PjBPC2ek7Jp3RbDXWjLiZ",
  "key20": "3R9Xr3MtHLHx5jeNAcmcC6g7CUa9XeUcFsL6kTdUHM9PweM3JVV2GhUAiFNhKoedmSRZYqB5ypnvsFX3EyqMvVds",
  "key21": "65EqZRt7bJQw2X8No3ba4LEn7Gd7jEbhjSrhXHps514jugmezxDi3LtQ3H6WKngzZ8v67r9NtQvTzZBtmdXxXWaT",
  "key22": "4yiQ2bw7R5F26F2NN18moyXqfUmKXaNW3TaNvtp3Eo9HTc3LCR3wef4fG4jXsknHKHKXKsV3mhawwDYhSRQdnPd4",
  "key23": "i6eBPwZzLN5XkPh4s7anajyYzryyWp5YYHfn2CPsjctF5M4GT4KRLu4MLggCdngsmwxucXUKFeWuMwWfaD2dAv1",
  "key24": "45AiA3TQvPZi7YwKi1dknufiAdC78sg6wPUUyeFPMfrHxWKUiyQBeGEk3PJtPkMHixvEGdV5H3gzy27uBneCfnQv",
  "key25": "2cd6HnzMgxyyyb9nZpmEaSvbLJoVoekhdHPhNiPcA4siEuj4g5KQixGXeDhBPPjV2ZR6pc59Kk9rp7ftccwYL3VH",
  "key26": "5fgKvVFDWHNPgZxGbvRFwT99Rzoct1B8g4xt3knnLkJ37Gv3DkRk1zTi59L8csZfNWytqCsLRhYM5tbMVg8YGMo9",
  "key27": "EcsCE14rCMYtE3vUJmDhF2mw5hgX4ewAbPYcbHWWkZEF7CUPeLTX9aqQmVYv9bxmXvNZtFfe3BboqCURpsZspbC",
  "key28": "3J8eYnqk5F13MqYuUum3VWmf7TSPJpiQDoR5C8ABjkRF4nYbTtTUUL37SzRYuXuGqFzjhojxDPZuuBr3xAVxw8Uu",
  "key29": "2fgCn2mhnXVqmE9khaR69gKXQn1wN16DSZko8W49yUk5Sim4c2SWMfkuYDttvVJpi5Pe4BomnxXpSjMCY9KvZKph",
  "key30": "4aVBtUKSm8HhyUmGy62NrVRt5PctZmVuXAWWmJLpxBAAswr7xYnGQVTfVpuTf1hpzMLNFuQ7KDHor86ZCiuporP5",
  "key31": "4E7jPUCQ1GpP6k6vn6yRyw1Ypo1j79Eo6movN8VDhxKV7jR8apPDUxVuXt24GfQ1DRmV3L632UNsZSRPDdHPZTYk",
  "key32": "1gnR56h8zAxe1APLnF3QGDLMLfa5PSEKEabCgYDTpaiu4RqYUKY3rt8FzccaF3shV3Anc8zZJ7SCEruNE9Yt984",
  "key33": "2RpJY82jqb2aTuU7H953npc6Zgxh1BcgT8EE8RDwb4mp6TTT6tBy4CgyJGWuH6JC8pQwh8dddjBdaM9c34cvRsdf",
  "key34": "odaFiFU9vKDxDAQmoqs6eTs5oP4fk5mpp9ZKJSV3JZpEHgirhwHY1d3Y2Ewi7PaYxfVYpDTAv7vDDxpCMYMn7HX",
  "key35": "54czfqDdg7sNTXLVXVdKnCVQLgSH8aoSU6k6EKh1msmahTCvLbMNAP6FbZPeJoNmqRXGhp2BUjv9upySNGAgqGhF",
  "key36": "5h1ptHZ8yzY3MitbAw1QNr1KRZtnKCFLGF16SsiBXbt6mjNm9z4qqmXKNtWZPHQLBKTnDaifjpRx4tMYZWaymv4M",
  "key37": "PmCH2DHGe142tkhvcuB7d5Vm4EiUaXWyFCu9Rv1aoxVLuSE4xWsAALUVE95G212TJMuFa4TVm7mb5v62o1tALnZ",
  "key38": "uZcaCyHC4vCQJWxivk9QbhZvZfvV1ZKcwjA8QYuJX6sdQ8ucWGnMfBr1XVvYKT9e9LE3kiHnR1U3SNLCLnCV82D",
  "key39": "37rGUxy12fAQFaskfZUp3rn7yLUotSX6kR15fKFADMBAbKS3EHVFwigQaqdEsaAC7rjuhpNPd3Yuuo1EZobA7yeY",
  "key40": "2453YRwBKBb9mrND3qkBo95vm1NfmL8nP8XzowYcGLKhFdB6rcy2oxVeS7vJFGfvLNkrafZiMjnH9b1H7apztjt6",
  "key41": "5Du4DxMh2gcBNwqjKxDbcQ3Z27zqAuk66pKE1Z1t6Pe9b7mJNNcmgaFW5XoRsdhPSMv2ttZXkpkahZoSXEoF8uhn",
  "key42": "3g2mJPPsn2e7E7GLCS8uQrK4oUztD5TzQsQqXNnhMRPvdo2wM1V6su6zymqE5B77bcmyWBTRwYDiiW2LochPZ615",
  "key43": "3gbhzMV13iadzhXyjMLAjgQcwVig6qcfJSt1jiXtYrMRY8DtZ4wrF2ibT9DxXs2AN1aovMmFuN4mbYfoiojCWu44",
  "key44": "QZhycghSLEENREZMwHYCkY2ysXaHEymgNeJjW7iDmFfcB2MsapHsRSes8gCDxAxhZZJsvpqT9yKsGaEZiHVf5cP",
  "key45": "3AJoAKXpaAptvDahVuu5AKzL8ugyreQSLKZGooBg6b5fcAq8ofKz9oBcn8jHM77D2FvWeJQa7YHrRNftHoZScyft"
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
