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
    "WTf289EGF68nqWnvVqKjyZf4P3JALjB9PH7ovZUXT55ALSSSkFtoMpR76Ymgjs2cBByQER7o56dD65By53x4GmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ynB3WDGRqQ7rNaXFW2XvYHL92dQ5DGNi4AdGqSjcPMWjxECLxj2vtX6MUNjrTFXnQFkxA24MJ7P1Wmam17aCtjT",
  "key1": "vRScR2kStDcq9sW882DdXXRHDRFWoz76kFqxEekUZQDcoTBYVJTr6XFUaWeUsCaJ48aPcqmv9eiYYTu8coTwkBW",
  "key2": "VPP4uncj3HUdXaRCfVfwUgP6haE6gqv5mLyTcC8A7XX1mARSuW6XKqz9NpXfyNAuKrtBxwx19WbKtNU79yVpNw2",
  "key3": "4jGdnmsAfoFTFgGVjTqns1AiSkvRVHRGqoCgjPsn5vCUUDBLARJrovzmWvUgPMq9ty444ZxGnzefiWJusYdM3n1Q",
  "key4": "3jdcUm2hiXwTdGW7TegcRhCKZjkDDeDyar7qYwxMMThQXaE5XRaEuaFUUDm6wkR4qXQc5m6LcPAqUzugHenZ1wnf",
  "key5": "2kf3zpdvSj1C2w3NBYmjRnhotWchzh1JQJs8acyCpSsBsV84guSUjsi1fBMfYhD9CZDK4Qf2dhrpPM4BxDQYGQfZ",
  "key6": "Wq4jWq69PBGPmWSrrvhKChLLnYjM3pNTGUmnKGePB7aKkeFwiTzszZ55zbAzEo6BMxGX5ptKKhZwNpo8BUu2Qxf",
  "key7": "63HxWYT6UkMqn6SWpyqWS5DpUCcNzCpCKGMnP2m5xwUL9YARjAwzRwzkBF9rzNktFSP9xiZpiVhJpb8h5gCSgQHu",
  "key8": "4HxRG2MZF3zXfeKCrw5YUwaeM6nSzRgMFV8ekwBg6GS5D5X2XKz7sNjmwWWahW7r7RLfaTGPz3vLhzp6ttKQcs77",
  "key9": "5tAyEjh9qamMJHhaCrZoujpxy4LQGMfuz27tkG641uxQg8ouqiX7iDBcqwv2Hk61QJn3eP37sgqWHQuC8CFeCzCv",
  "key10": "4ZtgwsRD1X2Xs36TssRmt2yyp6Z47KJGCfVqx2sh6ifvTgiZC9faiJX5nRrDWs6QFgD47yNw1PNBEDP1qD4MmZCk",
  "key11": "orzmQxq8QKD3LEn1RF7e2tZR4NK9usiyrEQXFECxQRq1GwxgKyz8N526AXcBLG2BemR6e9uF6UzJDXyUiJ9snz1",
  "key12": "33TibsV63BHqGZcZ3TFko5ecgirFE2qQnJTpP7TDVHbQbcBTmUhe4jpTYSY3ANZPMadmEk6WTjuDTAqFgEVq3iqr",
  "key13": "4PanTU6EHcax1PTAqAB9oQSNF2xzkk3DKuWrZRT4mTVJ2Hx1xDyau7fCAuLBwdkdshSra8rTAfKh98iN8SY9Gdap",
  "key14": "bs8rC7LurMnZdN9oCoXH2Lpbn8oAvFTKqDP2kmUti9bPCaSLrU1E5Ye8D2CYdxAAPJF3wnwE9xcD1fHHSNRWoej",
  "key15": "4KNFTzpzYryMiahoCzyqw2CWzmNpSx2nrHVigqMhHCMZikMsLwUKD7tfzDbfciG3WSwRGtUMDB96djLTXYUG8LcA",
  "key16": "56gYrgPD86rd9pDwh1Y4TkPRbajp3wbTXj6GZWofcxNvF7YSgkRRbeoP3iYB3G4ULyK3S5VKwKJX3pK3RPpefnpf",
  "key17": "4sEjZ28FbEdvjQtsYoybpYnCgrUehWm9HhaVsU77MioNmBSS6UzeUmnYXWmzFPAuD9PG5bvfdmRxiELNBu5Auyt6",
  "key18": "4aYLgcAnsshbeBKzp9d8pK1qpAxc8JCfNhmHcAPEV1YGCi7Qun3nd5W34qgrQ3gAMRraZoz3uKst2SS7oNRF98Ng",
  "key19": "4fyLLUTmGhYxxvsqGcVXQAnMUNegip5zovQsn6n52XdBYuN7ACp76YYCfSieCA9X26Mk1yaTE62sSV3hDsTa5Pvg",
  "key20": "4ea3duUxkutj7kz8CEzMwodGQC6YGwsab8t5SktsStNxKiAxPKp9SEcZgLw992zBjkozHVH5yHhoKeLEgv3ZSjjf",
  "key21": "2T5BXSNbhKaE1jerrfzuw7BfPj2e23uFYkQBd4WjvCVFe2nS7JDBFBMWF3pKXbJ4pvoBHmbedHtBktJ9VLNmwcGs",
  "key22": "5Z9vzprXw7qukNVW2Crjk2jS56xUFXq7S27CjspNERpZx4LSxaiqz3o68H4kKPgD5qT87Nihk5HGbDonup97GbV8",
  "key23": "Zh87ptViX8mAXCNFKfvfND1WzTVhjCPKZFdueA2kznC13DqHmPTqj4V55yAYRX9Hhug97hZ6i6VHdgQPbV48fKV",
  "key24": "5EPCuzEbPEbEhoqBhCQvq6EqJU2miN2Qjm2H17Tz9ZPNtNUoD2ixja7bLDFymDCge2SKLB9WwYCcgMJvUi2WZmVV",
  "key25": "5N5NAg9rVTwYeeq43DadKcpEUJEyf6jHeSGNvFWNCrtPc9dYRPXLGLMcxTY1iC3MFcc5ZPv6J3FnJ1jsq5Cw6GQh",
  "key26": "4NVqn2962Mxrib6FL7iDfYiX6zRzd8N4JJ7ZjDpEN73f4sYbTp4RF6dkhkNrYGRVgWAPM3RCU2383ENFzdiiLJCf",
  "key27": "4MNRmuRrGsr1XFaL5GPoHCu5s2fw66WmBCKz4vsosgZCeWEWqDQFz6PKWj3i3zsBSzaUJ6GufpbDXbktAMkwuVFD",
  "key28": "34JngaNvAFtuoxgSUKJhYLB6y3WY1rYuVJwJriDLgLFbQzLjMRJgx2GwKeQK5MyF5f2UAS7xMkesPXUpqxD12cHf",
  "key29": "8dJAg6EpHi13t1BtqoMFVLCMUXzX6YSbwophwHBysfDzthhQgUceGW1xxfuC7b32z5UG79dB5FX3cth8Djeph1S",
  "key30": "3VRvaaPDgYKGhAsZA9Pty7HZuXaTkUkynLsRBPbd753uDZ69oQbm5YoJKGwUhGWkTTLWAT9PiPbYCgihK9pt6J2J",
  "key31": "2yg433kLPvudMCV67BbpxNk4vfnLTi2MFCVMZ3gq6SfJtfc6SH6ZuKAZZq8o3pBTB6fGpD8TaCRAK9eABzximZ7J",
  "key32": "4ipr31jf9Qajaaco5zoFh7q1tktGaoUa6xueLAqzwvWmeLXmL2amPATqQK6UVRnZKmm3NUFY6XrqZDtZFX8LE5Zs",
  "key33": "zA6Jy58ZV3VXiys1K9JF84UxkZy9QB61owv4XP2gSSRHmNbCAKnQwi7KGryDiMDm74KA4pEAkUEN1qNg5pmEhcd",
  "key34": "35r8iqyMCv7MrLnUdYENtsxYMYLYVkrgyuWMUkeJXSiJuaxMgKAGZadmxwx9kU8bsYFJtYBxcY9cWCTUc8MdvgNU",
  "key35": "PJcGwjgnNAk3M1JpnAdPRTTo89fRKeukuvATv5X861ZC3w6rj4t83CTjXxJKh8PfikVVqrUt62dNmQNQEAjHV4a",
  "key36": "4SzWswfpNfLxNgP4r61V3KKhSp6q7PiMrcweeKxNwX3SeGGQ2iQmfJcFr27iUEFTMe2pj5ZXw6LNaX1vfj7Gwi9r",
  "key37": "581R4oEBk4FujeGjF5KviwHU5BiR2uNS5GjE1Aij1dYg6NnLjpyvBTQ12e1f8mVdt3mHDuGNsPcgbEceJmBUHDBj",
  "key38": "5i6j12DtQXf6DUWGEamN4YMknw93hxV3gSjP4HSp9P7tFBJ1jUFdoyF2CKzuDi8H2UJ8QGvRwoytNHQbvBWwGCx2",
  "key39": "4PaK294YTak4pWo9zioNuv9fWLE7BhCb9z4XUQaRPMEvr3k5w1G6n6dgJhRNJeaATzsJzJSrRHjwVS2ZnLrg4KUi",
  "key40": "E3Xtd81WZEXCXtXMcBV762tcGn3QpeMxtwkqLpWRRTEwdYht8pXWjh4Zfj2eibVD42wyyMrTBef8bK2Qv5QSiAC",
  "key41": "SpH2sM9Hmqc5gQv8Jd2s1dMt9DYdiZwH8BtHYZEMYYYbpuUxX4sJ3S2qGaCrkUr7MGKSg8TWRPZnzu6f9aPAoFt",
  "key42": "3djfox8ihVmHc2Bc8hJWsnmE2DE5FDp8FkiGAT7m3frG2MMsTuVQMgMx23p8ZhiZvQqwUyudY3mcM7KhiifGEUbp",
  "key43": "3M9iHvPwB39HtB4keVoFuqT2jWQ973NNKr5zvmtX7FFa6PsunRLwqRJT9Esibm9AHZm2Sw6zrDcfBqeFgBCD22Lc",
  "key44": "5UMckWxd9NeRDU3UJSKd7thyD3fFJazThFBfWziK42GNFYH3N4SXNBzkTewpDuqUB5x1HqrwD9Apifr15pqpNWVX"
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
