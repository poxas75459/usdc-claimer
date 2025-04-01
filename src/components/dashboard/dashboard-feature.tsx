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
    "3P8RPPJfGgZY5WpxZamQVrN6kiSoa5E7bhEpR6AsZF5Tg741k2irQwV2mJ98EenwTEAgmBuyPKdXrRbQ2iSXwJEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wo1DxzSoRr8b1Qrpv3QamHJbqszH2wAWdJAUdswJmeenUAU7muQyMkibCWNcDU2MwDkivg5PoqEWVT3MdCMRyFR",
  "key1": "ZQ5NEv7pGJJfXwy432dqE6yue8cuSg6iTNzdqvdkDDgkqJtuaxdowjJnkfoFpDvAnybtkxvGM71tW2KmrjCLEXH",
  "key2": "5LAdWxZ7ynvRWcwZcyQSkRKV1FkPUFYzsfRBF6YQQhJh8gKCKWYoU2CZ7R6q72RqiJP9teVDrbo1h6SLv2N8VXry",
  "key3": "2LJmh7D7GchmLo4F3nWY3t8VymVx7Hvv2uzGacY951Ze5irEbEpmfLsmqbZQRjNDEbsuHhKT5rmtuBrNd3dMK8Z2",
  "key4": "mCXkC3qa7JiUcoLuSdnLiBSP1UD2HLZ8bUm4SBenVficSrvb94PJQ37tZLKA87fzfr5CtqJfz8yqiZMEcmp5Ei8",
  "key5": "4LvyPchGB4CocU8R9gDabqVVUwnYwUVjfvL7X9ELcsoQHmw4YkbDrY1eMGtuegnig1wi51mrN7YohYPwbok79wEr",
  "key6": "3wxyyDRDgLvdEMTT9DPdEZXyNFTAnBz3Fha6GALjRjDjtnWidLFXuZJVKbJs3iM4gpmcLT5WikNw1azh7xHDQYeA",
  "key7": "4iHNdBQ1H86doHByne46KmdY4Nju2zLLPYwFoKS44ZLWmBeFCuNoqkzVDdhAzyPkV8yntR3egcN7GsQCe3GZzRCx",
  "key8": "5B3VhdTAK7hUZHUAu7gFnsFksu5k6WNF3zsQtj5z6aQPVE8ufSW2GdPvyA7K9yV8yAaJFPQiq141TZtpC9M5p6rx",
  "key9": "14FcD36o6XrinxjMJQS9Rr5NyLHhu5oCdNyrxjiebbJXq37xPG4PxP2LfuShje4nL22Pp8Svw9PZrWvioc3L7xL",
  "key10": "obt8hU9uMdo8ctgD61YCN9WLgCWeud1unoHDsK5DS2tt7jyRsrV5kHukg4acbWEMRW5tYg8D8UraMRyuxMtp23z",
  "key11": "38T6hwpatfM7t1ciKg3F44wZ2xdNPCBoRoaDs533jFLdmiTRxS5exbRZ6zM9sCeSE9RzhmgemgvNdAB4UwzjdBcY",
  "key12": "33yaLH36H6H41Cdnha1TaDvStQ2GrG2fu4WqBHwqrSDuyZ8iaaon378Ebx73AcxN2tJ8PRJjU3LSLmBLuviAfRTf",
  "key13": "2kvoj99B9REz4iRsYhupwfF4kNYTzKUw4D8GvjRC7yYPiKCNASP4kdjDURDtsq2ZykjhdRWXaUiTBSuMiouPUz3y",
  "key14": "EtGRHkJxqKUWVUP68gKdx5NssH4vn7U6JuKkyyfxewLKRKo3SzVbuetws5juW4dH2ifCSCHRTFrxaniNtUAhyUR",
  "key15": "4F8NE2hVQfxDqKH7iS2qaFJLfG2PqNpa8G1fbF8QLeYRXJ5rWBc8Xki46ahSRhQqGVkwUWKQ54njRBxuFoh57qmE",
  "key16": "5FPLDxwW5gD72ManJ5u3MrnuCkwADF5Gd2LwpgtNVzXq8AT6iaqw48mj7NVsQsvjUe22x8kw8K69xjcUBF79odFx",
  "key17": "Lgp8Ewr3xZ2eCmEd7yndtwP6JqQ1JeT3jfVMh9g83XqE4jgKPMCjnBHKuBBzbntVhtSDHqSMNi4uci4hA8PVwZM",
  "key18": "2vzHqb2v98eN19LVS91oTTyU6jm5ZUvEVaTRtgH8H5FxqNkxkAGaJ5HpVEwo5qe1YTQD3XQkB187P7aRLS9Hrtc6",
  "key19": "4pHTbyiVtEpErjibPmqQiT5Hgx3iokGBxcgMrb2mDMYG6Nhemx7e6KWPzB2XqvziLZ84dMY5pjtT8K33f4ar5A4s",
  "key20": "5fdtkbPJ4Pozz1zgQJzsz6qcHKFYh1B55XaZwpPeT1WGemGArKMUAr9e1eQiVwZ9VfTPZVuyYd99SAcrqdRgNxbj",
  "key21": "32bC8Eg52WqBP14bjrSMAhkoYubHQM3s8zGMwqg6zQqMcGxVS5a8fvZtbUX87nUBsR8pJfLqpvgEi13qKAMN52FL",
  "key22": "622poREmQ9z6no6D6qWFN5BfjndPhCrjr4DT3BYtQAzndCXPhSZgeX8xwq5dPARSsAVBKiv4KiWZU3uZFzBaa1Kf",
  "key23": "vf3NbdFdABYnDUugTvghHrfMykUGzpw5j99GatRW9x9nXLEUDEjUjZE6Y3rLJzUNxkrap945RT3sceYWVHzqF5V",
  "key24": "5W7EPFGnhHLc6kkvLJiLUs9QoBRDeEWvHgCS7BxJFVA6qN31QNcgLussUTCxfQcUBBwaF7oPfzPpsUT4iMQ9Xvyz",
  "key25": "24ubXHnjzQVRPgMfhW6TkEPg5HQRmadATsoXLWZpbdx52jK4PauSxoY3gZwr84i5ja8wT5oYtm1Gq21Y7nthD2gf",
  "key26": "2jUQ4dA8154C88ZPFGkTg1akoLYYpyMkFqusEapMSXxkL6xTrnF6qckNyW1WEvLvbwReSG2R3ypxehbdfa3Z6jGx",
  "key27": "3YF5KCB8jor9ENSQ9HCAh6u957ztJqhVCufYULGWoyccRuT11mTPDFahzWAS767iPZPeegtDKy7Mh4MtxcR8F9e8",
  "key28": "2sND9R3HAKzMaStBkodCTbktHH4tJ5Ku6XXLfv5CyXi9Pv5LQnVrHbnup9jtSxxBf8i9XXz1n1fKc3b8UnRBXHEw",
  "key29": "4Ah2tdqkyo1posxSo1Le1uXHc2iJn9ecjL4pACyWLpJMoWJuS98pir2BLMz7zgdNGMdN7CXe9YehT5H6xLL5Cy6n",
  "key30": "YJDwNWQW9tQLw46B6wvpFpsrW9Psdk7vyTad48DmswTCEYDJ4pR9qR3aMNxRfX7oBo6aHfsT5Y7MGM6h4zuswX3",
  "key31": "2umTUcQ2g96RU2tWTndNA14pRDnbzgWx1JMXZ8azBHUY2w9toLb7iP83QJ4ef8ShyrtUwih1pxHjHoRwDwnn8kVv",
  "key32": "25QgLAWxPAMm853tvdy6ipcDMrmHJZc1Ai6npuMqSXzHpe5Nz1rLMNnvTwTVmnEiAW1VkFVPW2k9KhQCWwDxczw9",
  "key33": "4Mv21ag6dg3Fiy3vE7wm7jiWS4H8HB93gKmLzaDcZVWtmQE4ZvFSgm3bizpUwBWV3o9X3ChEsjtcASoKXapnsmEf",
  "key34": "5JEXMYu5Rz821b6yiTRU8rwc1D6Gzfe9WCmdPNGFKy1QkhppSK5iXdrUgr2vx1uBai61ayRonSv2cF9rPRffs1dg",
  "key35": "398W89ZhXVsg8DY99yP1cHzZ3UfYqt21tuLMQeJVrdHK7aFxaLo676VPWo48BKTRWYRHVTa6Ee7ach57vWtN1syH",
  "key36": "38UXYeXyifwBzX19GHydrsZC9aV3PXQLH2kxPZeyto5cazLsQnUYo53fzHbHodFjzuc3YshKqwjJ3scsMpMXTQfv",
  "key37": "58KsEm427F7aB7xubBXXVe1hzXPjQkKEvXijmMc2xsJnjsTRMqoZBQH946gjtTU4yhBXRYQBp2QXwBJDdBUfbnNg",
  "key38": "4KpHcS2DrooTe4C3TyRVsQkeGP8JkcoGGHowZ4hKzK59viWBsLwMCCvcCCEGjZBM7Gu1swYJzz5ytmUF9hBL1Yjk",
  "key39": "8CLWxV4yRsEoEZZJK6jZ9kcceD6DwyfQA3ENDr1h478rjtzc8cgkSEu9NKDXrABPU8oVgkwKZQ4r9E6upGzT4b1",
  "key40": "2U3hX14XxSUzTkMXftxpwNZbTWDnqgeAMgFSLKMezoyZTqhZG7dAAPwYPnRzZBrbsck7wGHqjy37PWqnuAMthxoF",
  "key41": "2vpNHXqg5gDNdX9EXC5Wk9cDKvhYs57ic1NAtECsaduAFySbYSV34WPm6ppFX2ZksmUwmw1ULsoLXrvL817pZqcN",
  "key42": "3uVZ2D2nujrGLhi9rV8mhjVxqzY1s7PXMQFm9m5FSD9H9AFbCJ5NF69Bpbx9MdrrWs7tuV4yJuS8frbVC7ET5dsV",
  "key43": "2faEbxjVoE77PuKRNz5i6GNDT9dR1GH27mMHjPcWWmHttpbHFKAwpk9MZgBotTrbkvPqq7XsuejHYhXEmYrvSjJ4"
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
