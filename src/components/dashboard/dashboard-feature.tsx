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
    "4rFrhxJcCJVHtxHM4fpR6tPV9unYHw5nWEeDbrJJKa4e42m9aHSYv7aUzVXk4P2XusQnrhA9y4PpvkKX7Suu14UZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qvcpcg9r8ZBhgo2dTbDYJuLSu5B2e7ZR7DuuPS3qGHoXoJepH522oVM2Bayz4Nr4nqQAfUvBgrPcwsdZnodfSZ6",
  "key1": "3QYJhLmL1hvxC3zDPV4radffv4t66D2g5DAuWiPS4WAWknNSr7rCdteRQcKFox1B6o9L7Tje3xrWo8cxXNcu3n1",
  "key2": "4bFDi12m9JhMT8eSFM2J8qwh4FJ4rL3AryqK1Hpyvev3P9g3FVVVm1GrVGeyJaSsmjTSorUc6UXCrpCatRjte2k1",
  "key3": "4GkxUjNig2ntweKDUcyftvwW2ZYigH2NWz4sRCqR8mQ1fJ4ZsVSDtcA2HT3fKawDMW9ERocwSWenr4LfWXs2u5HZ",
  "key4": "4TsSwv7okaNgHLRV1V3GZCRV3D6ZSr8pk7wteedBTm9ESBrn1U8eZB8wmM3UX4ZfQ6rLd9CUpWnZEspqBKtf6Qcz",
  "key5": "kmrUgnsWhoyKKmDDBadptypgPU2o9DR9z7mgf5fqrWma7V4wvWsEXnDjrWz98M5Y6C8hVU7yP73FqECscPsX61h",
  "key6": "noPncVHMngE9rdyQ3oVsd8ygQ9rHm1BnNXyerwGj5ehVbQsZ8fJrcAwt1NoGuqEewocuuEHHS3h2CUtXQq4Dvr8",
  "key7": "4PCh8Gf2fGZeBqnmsJ33JCjBwrhffmYPfwssc6mEUi2Sdoq4q9zydEAbrNfX5VDJwE5gwbdmKYAoq1DdR1Pmfw4H",
  "key8": "5YbGaeyXqFSFw5Z3ZaVS8aKCcVCwoidRL8Y6LjvZrETZM4uLyrw4KoP9DisbDCwx5WA82aU5pDT35xHvhVsSr87s",
  "key9": "2t5LKEP39cnNAnVaDBHYCo2M7jn8FyBC9Y1fpqADdtMgJKVEAgiy8tjsfsntexudmQpB9mNL3BP55NQxNM8SQi8P",
  "key10": "PjU1myftbtFyQuKDnDEpvYefxebmj9CMZx7pNUib3wvb6LiPTgdPqqnuPmgmSxAWZ1shqL4aNg1C7eU5QBAHsWw",
  "key11": "WrrLBTFJZbC4f7aeHRvwQuypPVU889Wj1qET1hp4iYDv9cMP18Fcf4anD4myPSFg2tsUBKpPuR4mWcVsgGbe4jQ",
  "key12": "3c8SEmG6MYyEefqwAS9Hi2XrbGggyfSVYnDpzj2TcARteWEiQQhKZYUiArfNzq3YNswBJgnGF4CeWWrVpw45ZbRw",
  "key13": "3WNReCW5EhoDMNjeE2Z9vDsEgRHNgo582GaH4sZos1CiiGf2znvmXhxJwNjqm4YZCDLuRenxXsSeHBp3GVuBdcbf",
  "key14": "4WVu7kawE62oHqLpRRnbhPCTJjQiUBTp7cfhUWJo3VXTTQj8UiTEp1JLQDJx5fTuSEdAvaJwr2zpPDYmhkaAAv4x",
  "key15": "2VqKPrYkUGry4aRUkDwyc7dyuLhC4TBexMuNohskviMGzEBTuyJWwaZo4tC3pFtcSPQ5fsYPMest5fDa79LoWu84",
  "key16": "emUhHPUsdEbaXWSbkbM6Gkt7RYPPSRbNDu45cch5fQEZSYPN2LHdzVu3NNm2AHqYGnYs2zV4BjC9H3k9RWx39CB",
  "key17": "57ZSa5MNteB7y9aYnPKShcpw6KXdwx76UHiqsKffeMGZbZ42dPuMH7PkyuW3kjVjZg11RgmssjLscK1Qz7fRY8x2",
  "key18": "4crszqdmLes6YTaGtrRt2LG7e3ptRxCxLerXa8mMqj3tsT6TbEBy6WoeJHN62sgZRL2G6DTYYFfuuwtGYPgdzdhg",
  "key19": "U9UJaBwUN6gig1A29Dbby5fS1PidBV9wXKPN6Eos9UF9FLwcdy1bAnrh4wVHfJ3fk7EgFwzhWqPxnpz7vNjqsZ3",
  "key20": "LngzLpnRszPKSGR1hQMmPbSzxmr6zteqQRfkXmjknN5tDjkxAU1V8sdWrS2zsHEas8i11M6Mw9spZUzSCEURfxx",
  "key21": "sp2esbcstdF8aYF6LwpUUuKGj2dsuSnqEXm7kNGH1Hpxgr6f7BhyydbMeAYHABcHep3fHweFYiZ3jatnSyPcLPN",
  "key22": "5Mxixcy54hfLo5ERJBpqcYRY6YZxEw9A8VHiNK5G3XZZ7ut1xZH9DJX13LpN8QZQUue1a1U1M3GreLmPcft6y5AZ",
  "key23": "2VdKdq5ejN1eCjhsH1HBoXYK5eKYDZPSay7vRMq13yXJCoGoGsE3XPQaNAkD3fZR6iKgZ4DKHxfg9MY9QTtt5zu6",
  "key24": "38dF5LkYxRc28xD4yB1MxmgKAWSUTPHoSRagUgAoSha5hE5dLwhZgqiasiRSxNLjVQZRwPHbff7YVbFu4nf12rLv",
  "key25": "47RpXJC4d5K4493byLsrqdXxUvghy5dSru1wWcBCxxu67brxnF24rSQEboMgsDtYa7J9YKpTr5Js3kvG84JgdWnu",
  "key26": "2pCV982ps7UckXw1pTE58pcuW5tg9Mr4vn8PKJv48foyZ7FAEPf5iSGATWZyjqe9bUX2dvshVPJap89PGridvNWg",
  "key27": "3fTmwJmHJkNW6gqXv9DZVwzwRxdaLYSXVPVGeRHDPhSSBBKRbjygEcaTufzyqs7XLcHAX7SLb3gpXMvbNqUUJVn9",
  "key28": "4LNy25Gt5f4XeGMBF6Dh2hP279vSprmuCLix6pRgSqi1r7JF1C6RcwR4H47TsCGKRnTarRArdopDxYxEnPPnPtnG",
  "key29": "4u52fAksmKHJkd98B5djRToCwoDru3dycn4MtwCKa6wfjjHSWjqt9yiCBxZyGpA6w7zu7CWGHfNFQrpyhXBNeUv1",
  "key30": "3iSZgUzkSE9CdWFfXBj58K8tCQ6SoDFccWkSoDLi9opfVyhaX6eXavFJnzn8z3pZpeAyeNNFxVwBETZSSNw2MfJ4",
  "key31": "67TbPHZAQykPy71mNw6STvACf9g79Xppxgg8i2bTMhrKxX86aFCKsvbwjGzACrHeEAXLKc4NcWPxo2n8m3kcUz9R",
  "key32": "wWH7P2VUawCPVpynqNgiWhs4nLXqxABLsHkSSug2JPn8haNWsoLkgQK84pVT8yo6S69xruc2vSkFVbHFmraVvBB",
  "key33": "4vcGcFuMhXRhN2DowsDanzrEo8cNbhyHu6yoeDz5PKXmoB2CqFRQH5P29HtCWuuHNUkVmu1bxbW5QRq7rsKD3QjX",
  "key34": "5JWTyDZcbD3R2KaAz9ayjduHiDUv7dPjduotohWwn29soJn3tM1Lq38djfE1fehHA6VwSkdsY3yUX8FAz2Hr5Syi",
  "key35": "2SntgCW6hHBSNHwDNFLzY9yFQg64c3jt9GzB3YznfVDE1P5GKr67aXQpidv7qETjC8oCn6eaN2pKywXbNF4seYvG",
  "key36": "3KZWKNacFuSaEHKikB5vH5NXk6sb5EaXJNW93FVjBsd1uVmV346Ug5xShtXVSLtmMhxzXCXPN2dY3eHtH9UoWJ9A",
  "key37": "5ARzhgpbgwG4y43CiEY99eocdzTtNYwRAf7qSTdbAvSb7LNVsmLDmWrgEqkfMFKpvrDEuuELJQAYFydW4KoRr8fd",
  "key38": "8beS558ocwFxx5SN9HRFbs6KvZQ65cRLzM2TsU8fuTDtZcnPkYH11ipSDGg1cZUUUB1GcxdWB1Ad3xBodRuAKXr"
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
