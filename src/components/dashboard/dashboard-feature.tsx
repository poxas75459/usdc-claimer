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
    "4tPjxnZXmivfjXW5XbnCU64Hht8Drk5o23iV3rF2mX3S1XDuJusREtJnoV2yLNPoNCFxprwGFmJUptAiC6bCb5va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzvNrxM69Lsjm7saRKoNS7tTt5wYahka3bToxT1rTbsEFna1RADYrwTKpRKnYPqVSMaDHu3KgMiXWRCVpgC9QJt",
  "key1": "2iHUBYz37nc1q3C86ZrpFe62oydmM2QTc9YfWUJE5j9Aas4P4BjS2uemxgcngmhEiBVdWUnFd9kF3bJse9xZb9jD",
  "key2": "E4qoWRCH85YcaUag7BvavpPEXTkkDL8mzWx7FZAfd7Wu32qNpCaoCwwfKihFuFjDEVNmkWPCXL2w42cBQ91MLFf",
  "key3": "5ASYqssDLuXRjx1aUhYn6x8a5yEL3kwtyQuS51C6yZSgZa6Ab6jBEicuWJEoRjwHTffduUqVXDn5zaKBxpPtBkZv",
  "key4": "2XtNuyemUxkjkCQcMc6AD579bAyktsresS1fH3Z6A7ZhodYMtVTingEwBuWX5efUSY1U2kEUDV7JkgkFFydUVwkz",
  "key5": "3iEaaHb49Ja3EK11hv6SKNszVrG5nThPqyj3sWtfUjYBpZhV1peyDH8sC1fvUzXvxCasLZ2JGAAZtot36Bww7Nnk",
  "key6": "6j31BWLgt2FC9M1RYeVCTHLfX2b8d5RZPGk1LqbVszJ4N6ZENcu5DEosrfNic9KvXzmnm1iJKHf4TKPC7XbuLvo",
  "key7": "4kWy2byhJqdrNsyKFCiCnqRRc3zhYh99kdty2HAdxXgBeZF62KmN3AQYSnHSH8uoygtQaiWiuSHRqZxuyoakfxuP",
  "key8": "4eo4snAbwVT7XuwpJvgHo6zWHuG2D47GErUffbwLFfwbAzRBNtYpnMzebGdCEfQVZzcpWC7Yrfc9Z33eaBHeN6Dt",
  "key9": "36H1EL3VwEpH4KX6DYMtDD36NQBHMZKTUQ5uwy3czreEvBpxPcxsMVwyz2R2DPgiQPpTyspYoKabjeQqPYWGMtoa",
  "key10": "494GRxF4YFHkp4hoBqBAeWBtdHUcNFShDFzZgQsFDK9otHu58pUThyyZfPF4bBKppNCnTtUAjtaWEoSWJJBT5jwv",
  "key11": "5XDAVVgUKU6tF4Vybm7fKDy9gxkSNtfCkhC3mTsHFRcfrKU7U8hfyL7iicvFzhB7xN7RgeVXFghMHh4oYP2HBPZK",
  "key12": "42QkPVd83ngytd32S9DVjz6YuEy3Gm26EqLeHqXioXSLsnN5QYQviEtnLvUfNvAUerC9c9pjEmufCz6YRAWnD4d2",
  "key13": "4kvcWCR29mWdEZA4gPgYzsyAzNNKHfak8YQyTEPkcqUJZrkyLVryjLogf366J2evjnSp6kUgjRgea517Loa8BQ36",
  "key14": "3p8x3HiTrDRLMvKyDDP86y6SPohDfGDbfmeFxKsSCAbVPku7RAQbHaYfZddm48gWj5kg7en92akCNz59ewxUacJK",
  "key15": "3YZ2FYwsbBCx16uHfDJRYjGavtr2xGtcYL1WDZgVBCVGaZ3F6ZfjZPUBr5AHSZyEQdxDkcaVvRC7z5ENyTWzKAe5",
  "key16": "4GvGJNyVsgaLn2GpJUCJSkWwCzyTY4Bbm21efGBF2e59ASHEnR7tr6g48FcHKmepHNt7d1XmtdFkPZqiNYcbNYKb",
  "key17": "4hRRioNnES7CUnUwG4qjnWoj8is83gtCNiDWo5a5Hv46ojUeBNhwB3hK3vfcbitFuDEFiff96V6a8pNWxpi3bQPw",
  "key18": "ZW9xTEYS51nkR9HXgvm9GQj2X8iD8xjb9NtUwrVed4JNCEzp43r63RVdwABfKm4cBSYMMPcXYW7eLW7xQv9nrk6",
  "key19": "5fKC68BdsnUuLQzRf2y18tfTsCUcSwyq8d5XggqmMspmLDKJMmRf5SpPWc5fNDxoFdGwPS4764XooMHMynLUaeW6",
  "key20": "5qJzaAQEpwUGTYQGds4ziPSX9Uc9D1JbGqzx4zyQVCnfAJ9wBA9eXegMGoTu5UzyTN5qjJSv7Z8sFb4USi5RSLQp",
  "key21": "4PupQxHFEKFSWiHSvKFfJWSz8kzVHkJT3LFzmDBS7d24J9gSY8KD9uMfEmNfn4EPWaxc1majdsGHnmMus3Y8gKEZ",
  "key22": "4yaDqsUcPa7tHEVAksypRTgdyUbYXPks4YSEYET4bvAqo3Qr687YddjH8fcP2BKodir8FpCd5GHS7L7zzkYE4qgK",
  "key23": "4f31Rz32HRtfTaPbMkWaQS1H9frrXin3VQkN9n9G6KwXWxHexjWDxFTm6eR9ZjUFTFbwcu8ESrpitZuc9CjatEgN",
  "key24": "5S1d3ANzAm43th1QnEzNNwCY5ko4mBNQ5uSAdnECxkxdKYzvxSC5o2W6DSwjmSA95GrFoREoA4MYERAbxNnbttVU",
  "key25": "Q6M5UtaghzGZTs4LM5sd2HEFAst4pK2QvLFT5BWg4o5ERo1JRr9aEiAABfvMnbVMViySbc2tJCY68RiCVo5vSrb",
  "key26": "3TmmYzEa1HR7GfivDp7cmwKd3bwAV54faEQmDKt52tVvHyYpxareUDygreFQw8CHVA7UnxeytcXnUyCw74EqTCXe",
  "key27": "5PPMnFTMdwR4fvgbtxXER6GqyeFMMy1ekx5PxeHst245Krh26TPFaQ3ChaDT7AhWkuSR6MLTA27CizMBfVYUZEvX",
  "key28": "23CgFgrovAD6iREsBVMMw9xr3WYyZzEhxG8LWknNc6fdTEuaCqywE9gNBeReox9DZ9R6aj2ybTpiX361FeQxCAD7",
  "key29": "36HxZNicTFiKf48wm7qR4WgmxWszVvNKBB4GTQAUxLgkh5xRiKYPgJiniSy33rWtKVi1qjzkZMkj8eWYFYcU7wMc",
  "key30": "587FMHK31FvJFGc174jiewTygE1NF2CKYsWXdFdYVjWwiDNYsFfKmtM7ZHF52CpzPo9M4igkgoYxnpLXQ6RZ7sae",
  "key31": "5cvDY1goj8ubpWuEdC9WXNMayhHCFq2YiVzfk3YFDbRv6MJt1mYoJVLht6k8A9ULmfKsLk7RCVpFo91G4L2XmXdu",
  "key32": "2qxF8yTPuLe2J79ujjLLDg5534CNvZLvdtzUPtFXwS1EHPBy6cnGU5vxf7NkWKtiYeKqW7qtwhLaHLQcuLDYa8yt",
  "key33": "5J825rAYwQc2jHJD5nzvUG3Q8Qp5QbaJ5RSzauJLNz5vF3KsVpRg7Gqy4EcRsWaTDH7jnVd4kDpGFMyHAR5m9UFF",
  "key34": "4wjek8Xu5J2VMMTKniZCw2HQmCDxyGSZXa7N3Az3W8q3C7tCvX24Wwq7gbm8n4TuVGtfs4tA3P8RF1Nw7o4Fgw4D",
  "key35": "2bWPeC9rui7CXADZdrq3t3aH2u24E6HdKKKf8oqQzdD6s4v8RzFUCKukmohhDKRNZi8KmtFx8VNyvCh759sZCzoK",
  "key36": "2GQBHVW2uZSuyZrtxf2aJFZJiqTHCzy3AyEdd9bBtMLkAyxueFQ7CevTTMU6pyzEXAKxyC3FxwoMYMBWKCxwif9T",
  "key37": "4QhzH1sZRiqisbRB44MNzB2AjjncZ9DUe9bVU5yWkK3qF64AMcuEdWswQNT5W2VDvrJRSdYQ48D1JRkWjV3NK2X7",
  "key38": "3ns5vDSKCnxDkDw8JhVB3rbNLe4s6ewiVFo2FjJhPp36UFQu92H7Z3BBSm3oHVgWUJ6UZ76oPnQUTcmfeV68XGmG"
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
