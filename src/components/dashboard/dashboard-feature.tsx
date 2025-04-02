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
    "3BmxQ2z9RXJKUUqmZbqyRqAssHfswobtK43eSToAYHrMUbTgX1DMAsshioLgGps25LmDn1zqrn5UUzvvLCjtmm1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXw4BkU84kU5nHSzXzUCe1jAvs5Avi2PpDjWCpgMD9UtBnMSY69TkmPsnrCGD2EYmxC7eSqvSuh3Ug2dsw5bSaj",
  "key1": "Ur56LMu9BRvzoLk9UjpeafBvBmnDLF3cFTfTykA2rEx1MsfbFr4sNejuGkKx2H2uTrk1kJrKQVNnoGqd3EEkfwh",
  "key2": "3bKGFLgkMzUv54dvV4cpBG2F9zZ18qmbCqkHVmPbXqeZsFo1cxEZsaa1eLnMUzGpjMET2iq6CcVZUzdRN9kDYmuQ",
  "key3": "4ZMABRXqm7DipvCJaELKgdh95PUk3QuqeowfjPDKGaLHicJfShmgWNVeV8Pbi68E89UxFYnrWTufgxapgZF81Tae",
  "key4": "2dog7rv5nshExuBURXsoKk4s9TKguqycZ8PqjVW7fbZ1iLSmxg52jinhV2ZD2NCb8K9mwnTTTNyUSehYjzfcfzEv",
  "key5": "ec3HkeXUJcg5px4RGk2HomFFuutQVn2njy3uQjrtYC9pvVVpUYbdxDeVVyoPWozbK1irRDxShRQVPpajB5Fe3rz",
  "key6": "4c9B4aRWs6RqcS2g1Rr3CEg6bkFnUNmQMYQeyj1uVgSC3BmRv16YJdsg9uGUNiw4FHpHz2i9Ww2YVjjnkYbkoa3D",
  "key7": "2Mx1nfRAxcMPU2wAgCPnN4TsJdEUwZVSDtSXqwcHSDgbjXNPsGEDnovYRY3YnVYVDHoJBczmbSvagrCi1y7LSc7r",
  "key8": "RRyVeFciHZyttHsh4a3EW9mUMcDhBcTcs6kLLTVxouLH2ekh8zcVnHrVnVH8SvmkpBLqdUoNVbjMHpkq59Y94DJ",
  "key9": "5G233N2GeNgShcwziJSTqznafQmttHoQszwC5JTrjbZtiUbXqzZdF5MZgpwtzXtjcXua2Ti9s46VFiLh7MQVxewo",
  "key10": "25idbXZTRyYpxihiG4vN4vd1sDYCxH4VBybrwKGprynLDYFZC18ALJjhXufEryAardALyftFPD15iMMUyYkkwDWZ",
  "key11": "2NKFwZyTfMdQQpXtrTsfKb23MXeXwDwkU11kfLDywLSacWSNxLQvBqa8FDAmCUXyDELdViYSkfV2v5HUX3NVjzEC",
  "key12": "54JwWRFi5RPZ2CGybt6fMXggVemwYNJGFuruSP4xNpL3jmA6Sf75hVqeTZVLV81FLt46Tr7HFzjT9Au5nvbrcASa",
  "key13": "2DynguU5RRSEekpsw1wRi1ujZRCJN2QeKrLLtfsx7yGyizfTA1Vqy5yoNeWQQV3E962sbWypdX5dP1Upk1o5fVCT",
  "key14": "QRqFj1BuJTVEq8C5JN5Zc9mYkQJfirxrA8NN44qzwv8N4oGxcYFfG6hwRtUeWDR2z7Y9H4zB5N7avHJ2mM9p2KK",
  "key15": "3GBQvdzCcdNaS1wF9c964xZp4HbzF3DWjcGET5i5E6ZN1fv75ycg6amcoasSNS6v24q8cHAq4QiGMYsnmDM9nfVd",
  "key16": "2dMcrsUGXZh9AvgAvkuwE6W9gk14Rbq7ii1yGT5pUDvrDD67KY8u35aXWtiJvmbsXXxKkhSD2PV3HhvSHq9hBBLR",
  "key17": "4rjoVt4bNPjWzsMapxwahHqHTb6bWmzEqcSSFRb7CHkxgmL85CFHNJH5QizVezwZ8xbKURUU5mWGguzwC58Mdjrz",
  "key18": "Ydg6PMcFsGjABC6gAwgAfUkndY3gPuqf8oHGf7a2T391CsmUw2mwQAXLaRyJhYXbn7qqr9JmLh6C9AcwrPCbtSy",
  "key19": "3aUdQMb2Pk5aZrND3U8WzBmkwGYxaZRs7rYLdJfhE6BEJBmn5j88gWVmmz1ign7Pd49AiK4zFRdZL594rQBD13AG",
  "key20": "9wz8K42DhrB9kaxrsjXTh47jPQdpNirG8jtrRhh4FkAuwhCcUDMTDG8MzVL3TBMiHTSsMsf8uZVsd5ZxKGSY3U6",
  "key21": "3xnjU4vhCrxEA222z3WZLAVfgzRQJBpqr1tNFoiEzJJmioqtDgz9Z8pDHF1MYGiaX49i9qCMKTUqj564sqz6FiE8",
  "key22": "sj4UcdmvNQdUFNsMoPtcgF8Ek9tKbAYF44ubyBonKaNRH7jbt3xtNVu65JufqjupVzcAqU51okgkswGLW2ng7B3",
  "key23": "2Bbr8WStaoLETHmBmtxbp5NJwjSJfHvzUtSuKZVmBoDEBdLRHuKmE6JFYZLPjw9GU4riko7msXKRuTa3YUGu9CqS",
  "key24": "3fyrXxs5fjiZZV29Pbep2yC7RcBTfdmnJvQBMcTgXYQvDvxXc41GmUGbxEmCMfUzTkxrD7YmKAQuRpqkJnABsioP",
  "key25": "2iBz9rxwACEpDnXBsBPCqsTtnTbc365PDbYEkGQMwwkChrzutB5gNVfbefuzMnbHb1khZTUs19s7eE3qRPfzkgzB",
  "key26": "YkREhcphWSfhJ1KpqXy7pP1aqSU92xY13APL7EbBQG7sttirDqeFDaV5a8jPjDpyHhCGTphDKw1kWACidXZgwaW",
  "key27": "4pczXvRSJVH8iWLd1HNv8dLNXwyq2dtEf6JXZ7dursaxmnG2tCiH7AsVAipu2vSRsaAhQmgHYWfmuMpHMkGB5CHy",
  "key28": "4EKe8a3mgpQ7wMt4pGKro3SVt2y86KZvZvJbFy2Ecue4E4e6wKhC618a8qEmNC9SH17CfnrCH7h88PAQAf7w9oX7",
  "key29": "2bhNeTup2FF9kZNd56V1zDyJsjfDfKaLLXej7G9C1Uq53iMZaw2PGTYiH2YUAkxeZxzWYhE7kCjHEUPft6k6FJMR",
  "key30": "2hEBtj5jxEaEUbL1CEHuN3u95UTxU1pZ21eN4dXDpNV33tVnp4ZyKG8Q3zj2MhZsouf2tsydde7iqFtvYyxkfcHU",
  "key31": "HVZaK93uMVNQvPGiPCmVF67WMf8rQd7x645X8odq5YeCVcrXUoqngdAXUUaynKxWyvYvaYgZges7R7n1hSBQERX",
  "key32": "5ChFc5JRR8kooq4crALRri1yRFKzZtHUnQL7fGE5GZtyAHg3696CBt3i1VDyZ84cMm6A7cLTuqhmQSWHQ6EtwR5h",
  "key33": "Wygc8AF7RAyK4pKwzYWPX46yDPnwTqqsgU54UWbnTYJb3vzNxjBxX7qHpkwArv3HjYbjzUFCnCVcQHyBV3Cxjtj",
  "key34": "48i14vwzkWP1ZpR8d7CTDkx9MHGYLQJyBh3VEs77juoMqiSifUYXr8MVBykUWCoYJJnNiqtcMmNEZxxsM51SAX7T",
  "key35": "3Wgad3CX1XdjUozT3tG4RhVRc4pLkHJJnaaF8biJhr6RcofQV52CVLi5fjApEqSQ4UyNQPt58BbZjdy1e79UDegd",
  "key36": "25RXNa1rzNsT2xWm9LcLoU9evsLc6yKws5whYGPxZ6E118xG8kQgXccPeXugQLQnHfti4bjRvyJkprv9FxVnVo1y",
  "key37": "3FBpimB4rHC2kDPdSyadUrnNXowiXPDsAAE6bGGjs6UGn9Efzs6kvEbPvbaMVVUUPdyoAufsFhw7vGw2EN1frX9W",
  "key38": "2rrQ1RJfSygsLrA4FXTvYUzxEXZ9HNaEosaEpkEGJRUbFiqaeskJwW1CTRbRyqTWEfAM5UtTCfVTqRHi8sNvNPQx",
  "key39": "2Uv7i2yG2mJhK9XQ8MRagsuK9uFbqSERaiYEYaqv6kmfVv7Tqf27BBQCamCL5Gjfm2H4pyikvL5XUtLjkWRd9FCS",
  "key40": "3mGf41nhuFYdfjGg6L2WH7DK4C3LkJCF7kGq7ETp9WHfY1MAHmFG4ujWunriqMTSRWayjAMqXDv59F9gkjGvgvtS",
  "key41": "4Hahonvb2CYd2FJUCUr2FnQcV4X6nqqS37oRNjMLNM8Uqnm2GKhNeULeDefGyLFLxa6CzHNn2rXjrseUSnxocEXz",
  "key42": "3o8c7yxn6LkH9tPbrJ4TJpTmH4Nf4HrQ7NwpB7XEPFsSaYqYaLTPT7u4kUJdDWFWPqe6i56KF1qNsBhvL57DHpDa",
  "key43": "3YFnML4Nv89id82jzdsMChUw6bYyf38wKY7ywmrcx5U3eBJUzYjNcZhHBubDhiGwnqHB8BhDyQGity8Fdn86LfNY",
  "key44": "EbAzx2LUQNjaqTQxizEHTvhhSX1sqG6UMwgq9B27cdeBxMf92fYo94UVnPEJFvPXemRBL2zPgizUzqn3qZNDCRT",
  "key45": "3juHfyBop2jAduwvJRZFJCrYqk9z9NyQGaW5b62379ecCxjn4LzE6dHsy8kCENrGDNJNCckCQeRr5CL8eoD75YnU",
  "key46": "1F8F7JK7JpFh1oCgtR4pzTRiKJDXiL96LbupJFzLQEEihSQx5naJkBLDaXmA8DAtPgwjoNRKCYPmsmyNUPsCrk3"
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
