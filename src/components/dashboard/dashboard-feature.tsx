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
    "42siHtc1HuFXq6AjPh8Wa7Map1nHsP9XhdJGcYVwwEzQz2fMzN45RddhVDxNrBwXHLof7koCZDBvkanwqRiroPJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAuQYm1sdhft8LguJroQrG88YyhGLjn26ngoZncp5mh2NJPvZrPUK2iYQSSSCaVQSGDYLu77ume9YHoW6axgTT1",
  "key1": "2xr6LyPvH2XErBKcgWffY2GkAaouL3txCrBUG9J8JSWVncBFfGiDRrWbkjxwY48XJNsbD1ppT6u5hNqqYJK1SHwa",
  "key2": "2d6mnxXh5BgRdCEDDhvF5LptT4wVz2Bdr8Qn52rVxzQrx7cJufxEoSDAjy4UsNA2MUD3gxvXvCoUGxieikvDTWoC",
  "key3": "47DH8zRAYsohFL8swEMrcGiWAZL3wU8zcgAe9R7S2xW4qp2y5XbLidNTCP9UmoaQZRx6wa4SEVMUc5o54F52zgpQ",
  "key4": "26Y7eXMB82ujxPbHxxMwuT4HJTpRARh6UNEUxtvAiEHEVuboWxApnJqkp8gX22dP2ECWusPtqkCGU2fEt3F1B3SU",
  "key5": "4dwBvnXin45ARXbi7sQFCZgwJfQChhvvRTnJB4xssFPQBzAthoe8bq2PfRk9eYwhtnqRB7wSBW7u2CEVwPVJY4WG",
  "key6": "65Bjp9o42hM6Zvcr7eMaoLW1JCTh9qujZiurwfK6k7knz9ASS3SMHpb65PCTorZyDLrGNEpe7reNnAavhNXrC82J",
  "key7": "3mzxiWWSYFBfawDrJHZyqjY6UHkNfc9Rq6YKeWKGxFzQTZMRVo2NZivgZeYGHgcQ4Ut2LAGj7rAPfqbFM8fKxhZo",
  "key8": "2dPfv1xMNC3TyXoNSAjiXxf5Qvv2wbPsU4VBbYjQZzJcYGshZRohsJvCz5Ki8vYcxQCDHAxScTWvozJC4znQNvgD",
  "key9": "wWnueMBpA5j4N8guSXy5LuoswKkFpFDr2YpH4U5w4JQPpJ57FQiwBxBq23a9eeREyaDWe2kJo5SSg2Ss5LJvgVH",
  "key10": "5CRPXYswypf21g94dBUiPAjkiWbdjYES42bAYSpfqFDnQhKd5sxsNQtDydjqhRKAY6WtBebySNzBVZumdFYZpqVi",
  "key11": "ATDtDCBeeNRzRUXHg1BrvuVYhzawcg5mLqGGFRCPmp1hPS7CoRbU3d7oDqhTXzY4wPr3gm1gyYMfgy1Ke2m5Pbr",
  "key12": "2H6tE5goPxnj4Lhj2iaEKYHqtMhHCEreFvcLkUM6w8BjdxMwqgfGsQxpFTLDDL3Uz81iEdu9ePnHiacBJQRakNhs",
  "key13": "4kge7RbMuEyZHEkZf1zSZK7LNHn147jjgbDK4g93Cczf6JQ6U6GBw1Am3Shi416MnHDdbVUVU9NXJJUM2ox69PXV",
  "key14": "2TxesyRDxXShXbV1nbzuY7vBURaurmubVxy3vseGdnjWGSnKQ8s11BN9GHiv978Bg3d7yEt31VdaYE8zvFz73Znf",
  "key15": "2tVMbmKhUmrjd3nrp3P1TKGfjCTSBiTFMiH2VuXaWBN4BQu2r3mKoNwPy22xP4Y2ffnx3wW75FjH7ui2NAev5649",
  "key16": "2JhJDvEV2kQ8Z7t31aPRJ8JvxjxJEvWLwPdy9dGrvnbbpDuCvhsbycAGUU7gdHreokNtDN4cyE5aTaqcph4yMxGx",
  "key17": "44SN7kG9tJ8ihGFi5kBDJ27Mx31zgbQcP8PjSuyFzA6sdES8tcaDyV6isqmqbGtprbtxvtUT92VaaMfv14eKXxBE",
  "key18": "4YhDj6WpsctGvFZJ3y437gPczTDzzAoDA73csyAFuLqPQULwVgmgsPYqz4KVYQMJdwYGi2ATt79k6tLMmzzhU84r",
  "key19": "2jRiggnfyAbb16qyNCoT71JJpmp1bNXpGMHhXz44MitvU8pWaJ3QvJ21GHUviiWtQviEB8PtSNabuRs15WxkHYRL",
  "key20": "4jjxinz6eUMLUjcudQT1rk31BqnnvAqEw36RQRat1KYtxCazybKiXdzWdAaM98GwaqA47Dx9u42R5JiZP9NdzYfj",
  "key21": "VJ1rNRXuJ4cWY36YUNpgqh1umcGPkYX15XKfbqSof682U2zHWPTS9cvmvLquwLHogSyq4neznvYzoPhkKDHnDgL",
  "key22": "5Q31Gk32DmE2T44MdjCV4dY4d3cSYcHeGmwtB73uA2t5mhqFeWgzpLTM1XspNs9PP2ipmXPggkgizksfLNA1Pigd",
  "key23": "3Mr53Rvtrnrb9Dp5FSZNuMwohGvKqpTQ9TytkeGW3cS2pG3CWffkdLgiFMaNzHNhNGNdxbkMTmCLUNAobTgoq519",
  "key24": "4QkDnuKzfC2v5Lzoucv4Z12aJBeUeYpG7jaARvfbTtMa2Hf5vGtVfpS2tAtXP14vbUmZ8LUj6pMDG8LeKZ2T9FiF",
  "key25": "2cKe2NG4bc5AUacjY8WLWiLAjDZ39am1um58BY1bTrzwxQCcBwwqSQYg8b9TqbwM66npq5hi9mPKK942nazgNTgY",
  "key26": "4VMs4dYUTjXEjgJu7StAX1SYLpZvgb8dDWCqaftzXv4JmiqVepm9qEkL4yyyMayCtMjQPs4NQea3zDTjxkTRN6p7",
  "key27": "4dwUWrE6v3CK6DwZVpbWQsLnfBZ7hWzpmHKxor9bPiEVymTSSba7m7DCuWvDnXcdeaDssp3ZGCipJ87PqGMgj1zp",
  "key28": "5LFevtwsKV9thr7peYGjT4Q63G4WfiD73keKDrLg7xf3F47eDycFYbSnAjZTD171uA1RpMqo62VPaDBwjnS417L2",
  "key29": "3e3AFjmb12k2aaNsBSjvaUvBHJ6UifX3JbqyshdyhknkhAnq3HghCUo5PAeAWb3ZQ25bLtWw2RVnUpi6QxBEH7Ee",
  "key30": "4eoUvBsCAvHeWJiRQJvz8wdkBB1WxNxdAzpgj8njZ2J2qXTdZD6GykXD3pidwGxLrdwjVETTnxm2yNrcLmLsuGSx",
  "key31": "2Ph15xoc4mFbQQcte61ehm9LhTsu1SrwzvzE8VdjqjXM6WePJJ6jDrjsdRQBXUiiL6q8ffZH8sqQt6vEF94mwLp5",
  "key32": "4FyoDPzMnv82qtTAzLnVFFccdQSDDY7cnaZgxfZxhiKsX2iLuHASaio6uUxaqZkqEqrutEMKHhnudsaf8s6XM52F",
  "key33": "4YJHJkgCGAJz4Jf2c2ziCqafNaSbLz12D2fj5LAwFLkqmXLhkLou7jdUJa1UuKWEyPSxAf5PXBq4VYZXzjqSp9p2",
  "key34": "4kQrTvwexHbPGGpW9USmvD5uNL5HuvvD3pzd93eq8u1ZxqGX4f6nJr4iuZuYNaW622FYFn65GW2jchaj3NcpqMKJ",
  "key35": "2kbvJ1e693t9dtcyyyCyDhSTxYF7TZFAPWETmzj6b5XytW5yRYQ93EbGSgZJRZfwUE5jAV9dbPzPkEz5QBjfC5cZ",
  "key36": "U6ev3nZ5nXAurjssUGsFadx2CxMrXjQ3Hm417HqR1JHjCxRYQMkaKsLf1Jf8YEAYiinAQTcwue6dQvpSKXiQQM9",
  "key37": "2PSC54JPd5Yw4Xevb39ioVsUciTN7h7u9P92ZvbZntf4zx5pNh1w2csC4iAwfDxiwcHM8QMohDSpT8cjV8DSqik2",
  "key38": "5bx7QBJtndrBr64m1sUq1C2KKzJ5xFPcjPqbRgp6a6KzT21m6cUTk8HQZcDBQZUCZP9FGLraPLWgNdqFUEwnQXfA",
  "key39": "2H8MVrKHZh9LcsGQjadzDKbhnUdiniWF3jDAnY8DHJDGgZpShoAn5zVDrTDBgKdqLJKVSubamnTkLudzTMrpGaQ6",
  "key40": "4PWSY7axrYLuURtVATcJABJvD39mncm8rmJPLQxdDH2VS6dJjku67N27qGCNDMa7wiY5MNK2RWhk31jbYTFhqiWT",
  "key41": "2Jmh1pNY9wzVwFsX5KzhTbo2BCAGM2Ao4V3q51GSnhKHLCjGAZL21vRkiyLpeCkXnCXEkMRQ4D56jrTdstbghgD6",
  "key42": "4uTJLTQkJ1GQcZysWJrdCXh37Nij13VHVZQkffsrxEWxuU29ccbXKuyL37wami2sK9FjNtcoxpM7Dxi2SSXiRpgP"
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
