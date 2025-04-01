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
    "61TzoXVBku1bzWS1sJ5dUVV42LDLxAWqyocRUqKd3SpmARyypNB1BmqPCmJyTMZ9rCv3J2KdXSAKCvWBqS4UaBD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pEz3WdZ5H6gczLJ2hb24aQbSe7CXNry4rfg27JEH5VwetRoUYuTGyJroTuEyvyaBcr2SGzLY2ufQFdvQzQG19N",
  "key1": "2QpxWpGKTuihx8Akyd8RtFKhB62MWQ7XbmtMcA3cbGEwZdNvaPCKqXZ7EB4JRrDKusTgJRh98rsDL6WZeLgTFovb",
  "key2": "4KsdciBCFhHjcVgP6oBppeiapncSbBt6YgeCCC4BBzbpzrQdGY2AnU6kPf2ywfZrcLuj4WBZpTBaaSCHw1EYmSoe",
  "key3": "667PR1EdmoedVjrxLPY4rNnEEBr3esk79UADQEyMsSutRTxhB5rExeYy9ZRt91uvi3cmXqRWdAPH6jyevXwwE4un",
  "key4": "2gRwGfGhUfyEXtJcSNjcryPc6vJj6ZWPV6g7FoWuXQpFyfbGm16RpTbgg9AAqxfkyA3bb6oawQPban7u5obfeCV4",
  "key5": "4MEqTQjnsusBFmFSzQb3KdyVjb49FFeMxhGvXhdYzusKEi5mqvnRXHrkYZcLcgd46Z5GSjsnseUiLV3Xfx1CEkZQ",
  "key6": "48qLRdLaGNMmGascpsyjuzVT3RhPSoaARsoms43JRCMZWRi5Y23uBZgJiWKthsAwgfVKXMcSoAdWTbMci4vSmjrx",
  "key7": "AchYDYXD4gBJzfC75sEHsw3g7BSwojSqgHKCqZRGvdfHotWgD8igDPW5k3zxYzvZ1SuSXAP1pSmxDDec2AS47BQ",
  "key8": "483Jmc3ue5KgQd6ywRqZ7su51q7Q4jVUERyT4q34qqHkNxvCHx9y9y6aurQg8itwRzx9tEdaedWSRYeE5qkyqADK",
  "key9": "2VTWrZT5UcG3tcQ3Z3wgoXyH7rdGnQGoFBgcErHumwjd4sQzcEcBF7s6kBMyzdG9i6TohEbtHQShBkDSirtynnwB",
  "key10": "5BNPdPfjBywP1AmyUQAtYc23BrUtmAMsDeGVoDH8fQfAELfnGZtKVE2C9GxrA8txZEFkzwjAvaTyaRfXUkD3zgqT",
  "key11": "4wv4ocachnWZc8pMVAwzUfjDVyDL5NLmYmYjg8QYtLAcby59j7qD2UZquohD4eroZYmmG7zqbtanth4UPaPnrVH",
  "key12": "4x8MCm86eP1q4EW1ii9ehNfRqZz1LnFWZrUh5Ds2pJDGixdHshZwsFuPjFdHppcSymszZ1JzLS9br2FeXWff53ww",
  "key13": "2m4Ub25zhokjsRyvkxNwddxNAkZ8kvTibuKk9yr4cfK9GnJibE1i5aaex5F9eV8D8X6o9AENFbeWEFPC9uG4nrtA",
  "key14": "3CCU2dVjneFaV5n826FLEeP1y7WtgFuKCgGJTSx2wB84xieFfjR6b62d4iCRe4pcrS32jwx9rWJRZN3kQkisJmWZ",
  "key15": "48BVxEhW9qAKVdMiqud6A6X9xrHMgqUipGxPwNRoyHCU2JyXdD58eWJcku8UXNwUCxFNjBkghwnyp5sGBYQNGhRv",
  "key16": "3Z4eiL1Kjo4qQ7m6JFEgnx5rWay1TGbuc1Rz5XpjkWQy1BdPk2Mt4uVZgK5HVBbQdxtfZ5QzxkwhaVtFkpQMQmJg",
  "key17": "4yc4QLSSy3sDd2Jq4EUb2ZTyfHXdHr33uNetQ2eJr1ZFxAYfmjMdbZkFg3QHvRf1N7MWSKwSWaq2ssmvkvkMMwS8",
  "key18": "4co4dt7AZ1rpmv1jB77R3kpZbgFj8bposwV5qRctg3YgeK28zA1xJ41HkF1tUR4rzbmps5RytDVTfqocJgQufp3o",
  "key19": "2xeVRdTXBRChzhZR9ECevAabn44uFdW4k8sAYSwKQgdfq4kpssA4zT8Jch9orZoBBq3PdxPU8viCVunm5sPaXJxH",
  "key20": "4tYoKujzoFN4snN5eDv1ZERkF2zuv1Wp6bUxWp2Bz3UhYro4jX59eCir5E13zhmvo51xFsnwkjCT5FNoT7tYX2DF",
  "key21": "Ta3JKPv2uJ6vS5A2EUVyez1VwX1QA1NXhHrKcAxPQoe7LySc6LJRzRVobNL3ef8UEKn13YrEboYnUKGiBvNsJ8h",
  "key22": "2MASDPkyBYrCRDQgzgBpaUzXTbgMZEzzuMrXTqnXBMjiRaWoXLJqgvaoniCYphHem57QCEokWpDDhww16SZ2k8EL",
  "key23": "5ahA1S4HrmGsWZX4zxXtEdWN6Jbo6D5NekyZ14EMYJAFmDHHMCPqaUsigoWNgJg23cisi6q8Jx9Q5JeUNuSaRgHS",
  "key24": "2iN2NDU8xBUAU2MZQN8HPgm9R3eFnV4gNGNnbshSJwvb6VHWXoo2ncLvEeLFFwsD7w2DXyYbatucQfsLpBEPJB3k",
  "key25": "h5DWYD3FdQZDGvvmxbTytYQQ2YvcDgquCTRJJtmGveP1Z9bNgYRSqg8yncsd9Qam8MhRbNQqBFQX1JCEFRuhn7f",
  "key26": "63zXrie2PG3yH1rinWfCpp3AR6vkd3f2CYsUD5wokjv275NtJEeeA1sU7E7rZq2JY1rn4nNjPehb3uMVk9HTAanB",
  "key27": "2c8aq3PHQKrzLrpB4of3s856X7dm2NjVmTEvbCTpsm3yqkwtzWXZH1ABxQ2VMEUX7fV8Jm16HpCit8acQ1AL7Qqo",
  "key28": "4mMCH1hjpciDbHeqxKmHmUzCUpwRk9m2mUPg8zBTNBgTA8PSoAcdJCBxVPGBKFz2nABXGPatRnLaxmrXtG47vskf",
  "key29": "2FWzAcSDuMPC7G7gHu34is7Jir2Qvk4JqkSagprUffWSNf3gmPWTiPmxwBC6fUcQXaQRSNPJyZxJcrc9GZQsSQBG",
  "key30": "4EDeHvYR3zhQo5r9HGwEcVyXRdgkwydAjnMtuwhB29peFrEsApz3z1pV4dUBVQDYAKFiU12y6pvdrE1CgVfmvNLA",
  "key31": "3N8arnC72jyhkAFmpfyNuHbPvoF92EN4xDzvmki8JEm7HYn1DWRmrCaRcXngjcCfBr6b1xVRdb6ATStY77qA6btr",
  "key32": "5j4RKzft2xyb1DAEakx3Tq9neffyE9nF3w2eTBDLZKcb4fiYbySdHFYYoPa27jXUmDgCS9pcFkX3YhmyUoXKokfR",
  "key33": "2frU9HjndPUTZdpTrpxEqvmu8bFpiqFr2ehYYAzv9oun3T19jM2v4yzCxfx5M7amjjL7DrQDxYmZLi4FYE2XX3GZ",
  "key34": "DNEicX2Aoi4s2y5fjzBZoytQ3Qw9MqTD1565rhXNbewCzXqTcAZoWgYUwccMSHBh9XDqkiSr9Hmbdf7wvTapQwj",
  "key35": "3Tk7kvvPYLTyvgLrupRHSSY8YiTDBFAfJTkvLxYguj3bU8dFMVahVvbJmNfQMiv3cFUpBTprPyw1g3oWPQuA3Nu2",
  "key36": "5iZhAfnDnT96ZNp977EJ45fyTwr2RxpoKCXtdPNKG7U3onL4aRFz5upDKSsQmWjut8DXzwjy8iEz67gNcaXhBxKG",
  "key37": "3vfrxj3LMvbgaNUbcRJvzrkg5TiNe3kzdKDvk5emv2zSBZ32z3qom91rBgPdbXAmKmpYCfycAvksCyZF36CLgPTi",
  "key38": "d5skQqCXvKRKJpzGMbt68Sf3sQ99HCpwGw2fXbu46aSyQyLhnjDNVchd9sHoroENzbuwuCTGy4bTjoGQdMJLepW",
  "key39": "xbxzZrvpV4ENgB8MqduFb8twVvi9eQ2uQbbPPn9xGhKDhcBamiiaSxnEfKBBs2YZ7RagdmxMsxqACMJt5QurN9Z",
  "key40": "3ZNvXVzmEwasyyakCus4ZgAStWVBCFMDJ2spHeCkWHVv4xY7DZLe4rNXyyWhP1oSZeqh6HbFTp7Dqm351RaK4Uee",
  "key41": "4aTmpB7EgQRqFiWMG7nr49aowzh5mwVhTXFKSTMDhprctzfoHT2Mq1fiGX3PQRwymAQG27swB24TauL5aCM4bdpv",
  "key42": "SE9HRTNZD31UMTph74Hb88pD5G8zriob2zJaHAzwAEifvhC3e6ki9ko1d7NRxWfLKTPJjAUfzBXjs6WZEoJDy6e",
  "key43": "TGxxGtBEX2JtqieM3oNTZ3qCm5jYJRdoY45y78gkzKkXTGoERDes5wAykcWcNZjMeenTLjJDiFi7nt5i3FMQwix",
  "key44": "98g51NVe6peQ1f4z6fucydU1kRR2m8rz5EbJJNb2rAuJRk49nvb5D4sARogC7zGge4yyXXSB2jmuqqb3pnBPRnU",
  "key45": "gMcQ3XRpBbuNZ84J83PABY9cQssY4qBMzjEPf7omt6F6K7mGd83pgtvtwBm3mpEqxAxRQHG1nLYBGfU3x6EeqWM",
  "key46": "5uHgB3LzG4wp3FFzHQpWNXFeK8SjyxKhY7Yczp2pu7oJ8upUtCCBgGGv7qtU1KxFPUJptupwWEWUaswFY4NL8Z6L",
  "key47": "5X4wRWbKXfvMt9nQoa7KP5pUBUVZnSvHUqJEynvYbPswHtFrCxf41Gz6hC1Xz9tu24Afw4zFezUzLBLopHJ6MdrH",
  "key48": "9GSujT8Nqm5v2DTafSrF3cehgjiSRKhvtMRz2YoC2VquhWQ6nXzQb3WRyVqypCNnhgYS6ZsnoXaLDL3QvsNjBGg"
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
