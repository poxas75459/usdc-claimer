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
    "2K1YuZi6k1T7uiNmSSjbWiPPEs43haNQvxoUVxFk2QQd3HijwvQuzoy5tGuydpWGw3fih1DjEjDAikYnRJWJ4UDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjBNhs2QKE3oAq4Tn4cxUhtyN2mYoAe7tp9acwRFTmjhJ75K8MwVKLdtN7uxEZLTZbQRNNiDzKvav8F2KkMUVMR",
  "key1": "4vXSuzPDCfRtpmx8kTJFwe2pT8Q2tMDkUscvDU8HxVvUhhackGDFA1nuGHodM1iA52dSZUcd7CVzWKfmXWjmhG29",
  "key2": "4fUiQkL8Y5jb1VxjRCXEZQP3eaKBiUUjTTmFS4e855orkbjrUSjYaUKudn8ybpPXTbwFBbkfNsbEMqFaVwtnUWn2",
  "key3": "285kqR6txEE9oiaiZK3RY4HSAmSp2pBuXBdnVuhK9voCcS6nFbEmVw26tPhYJopuC5tHw8qph1FAGnWmfpQLbfrA",
  "key4": "46cK3JtT2jcgGvo6q3zf7PYZ7uGK5Lzrp8LPZpWKsshDUTik8bBXq51JVhCeo8Hu1naAywc7AyotYkswXJPKtH7b",
  "key5": "5mrW8N5AVDHBZHbQYcBwYo23PjFJzaA54r2deEUwZaMbgM5DDiaYLkmWFKNCXtuvwyn25fz3SNdQX5o2mDPbaUBN",
  "key6": "2ai7bzJCXVfWnVV9sSiabWkS17zok7meDN39215YDnECdVkssP3nXPjTN8kpkoHXPg6zDTzmU6cPWk9ZwXzE9hGt",
  "key7": "282wLDBx3feWLcxZoTVVHxG3CWHRkxbg2yDG3RNepU8fAEt5cKSLYKupBSB3bYHNqMqgGuConVzd1t2gzACzsKoP",
  "key8": "2yLhZtjEBiE94y82mpzvAnZLpPxPHU5gjcNCzWLT9nK3xqu8M2canJTx4AQKUK42hJ8WjNabuDzU7QW9kNbm5Nme",
  "key9": "3iqa82KECYadtbNbp8hPsQRnG7JsPLpNyKTB2bQU5s5Gg5pesHokXYWS2UL7wmJ8SvfT2TD7SKCq93RwLMpZdmjW",
  "key10": "45Rj7ysmuqCtHZYTFQmC9vx1xViK6kgNshC2uUoh3R9zjCYy9cB93g5mfWdyK3kDF3xYzxpqUkmdqBednUK8tnz5",
  "key11": "LL8J4gDQthrRm9qF9SuzKYdr69MRZDa9KNcBn8uh5T6PbecD8NG32XNthybt9eEPnWximH4pvT1dS2uX5H5HWsf",
  "key12": "35quYMeQQr6JrWHurTcZNVzT7zC9nTeMip2MrhGUVypEFYiF1n1uRKyZqJKk5QAsjmrbkeGv3ScBcEXcfy66NnEf",
  "key13": "5j7ZsMrYii8L74PDbKDbamBYgkT6hLkCySSX7TRe1UFhtqmJ8qdMQ6Q8VvFnshTsHtCcBqpLmAWtDDXaEUjZjj7J",
  "key14": "48d5NBzzUjDQYPpKdGy38yzqQiVtkYFSwXGbMg2sH39JqKH1xeF7ukUcdVCCVTL96oVHedRtXx6L8o3cY7t6Zi6V",
  "key15": "5ZMgRKVrHi7rJfTKELTZtGnB2bDSr4dfT8ii1CwBLLjcXucUiJWQpbg1RN8xQL56E965MERcRLQPpAkdFg7HFqYA",
  "key16": "4BmE41is5XjGatDpxHzsP9eiCw3Yg9gT84YAehjvfeUda5gzfFRQEcUbYeRFCQBmbJhPdCA61fQBhsxPLWwwbUje",
  "key17": "42uMZqzMkg5zA8qeiTmUwcNwnRRkb2Ym41WPakWagC4ZEivMx5sCn2S5T8F2naDafD944WaSNkAQxEEJF6dNaB7e",
  "key18": "m2dm1rcs2vX1UG4XzfT64TTFA9DSxtQcfFt5zzvurfLTb7ga1vTUvR18YC46W2fiYNPbC2Dw7hB85p662LjZZRH",
  "key19": "3pgANm7J31scYAeqq1g37SbgZ7khZf9JxosASv5VB63rkZYgKmR9TyByAvd7qk8VbUhkhcVQfVWQfFq4r9jXKxL9",
  "key20": "2XnYKHouHhqPDm1SaQ8KxWuZjkk3BV2uLuWGtngxUx66HXoktWhQ2GFzDrCUPjF5u46mdUYekq2pNBGVsY1XeHps",
  "key21": "2g6HL7GsJ3yZxSaosr2jTaRobPzJuFMmGAjoT2qebEHPGbWHseM8ec9R1Wjh2Xij6evWM1bWohVQzKTCxX5qfwon",
  "key22": "3aig5DCES4WJsJkXVxLcwN1uEWHKNypTyY6C73o53Wcte77w7nFv6ct1dRQHWf2pqzNE5RHd9haaSLtLYLYv2kRz",
  "key23": "3bosdLdihr3KJmWb53HUCk9XT9qgj1AraQtFD4MFADtrAw5aTDjLJRtQCwnMrvW3Aa9KDHBoXNEq1HStsXg3GsCY",
  "key24": "62UWhPPRQmBKSuGBYfgCENTm9j74R76cCqYguuwNffm6uqLu6Ji7ui5HN1WiPmxVmmcqMTHC321E79APtvoaMxT4",
  "key25": "3YPrw6R1WjDJ5XAVDn7JNwfFLUV23PwkEuQAH3SpEwEZ89VMNUWN7BfwrcQv4uonUnCHToa2ySG9eaapgAk3cBgT",
  "key26": "43fLPBRC5CyaP4CPceBuK399v1SPVHDbLBPZHeWaPr4YdwAkJLD88ugdDpF2j3i1u6kdEcTo6J2f1vk2PjAVdUe1",
  "key27": "AGAcWtaLv2CEktFwTVpxBe6TtGRgzhY7qAX14NFz6STDdA68zNm5TdRspXrjqptCeupiVfsfEU9Px9ZCBCWAfAP",
  "key28": "2NbyRVmFaTBbrYof6w1dZb6nxA4tKGGJR89wUqVwZqJvSvXy93PCCkZs1SErHMMsQY8PrrNhehZqFABrHTenHSn7",
  "key29": "2fwhFMH6awM1gtNKg6UtgzAc8zAMMphvv8nRJs6hii7edFHu2TjXCxUrMAP15HPG7Wy9tYqrnXwXHy8oF2LkMo7w",
  "key30": "2er1kGDdw4iK6c7BT2mcE55FhEeEkNNSqr1TkNrFmudc4YDEN4xT5pcoScDwTk7FfWmXHKhRJf555vVY95qRnAha",
  "key31": "CNjdzZrAP8XpD8FPw4ZCrB3ZfVwp7gwVQQmkmYKPMnFEML5h6vjgtkJcxhnHmjJbWHRreWT6fvLyZcJ5ayzkhPk",
  "key32": "4SR3R9wUSUa3uGtmKHw8faJ1CnPrkM85aXDnwDe7Go52VZBqCnVXVgEMkjyJudfHHnEaTutXk3a6keUFYsi45gsw",
  "key33": "EgeUAnAC9SsRX4EdwBzDvEMR6T1joUMvwdG4FWxttH3AjDJPyBPYH6SqGhVnrmRZa9rwBiZGmHS3PXS7FgQCoT8",
  "key34": "34tw7AjV1fq8QSiLAatAEfSjPER1ZTi6WZRToWjKfyqzeMbEjinojhpwWLX9gZB3TSAUtySYrpck9E18LbZXN2wB",
  "key35": "4M4Yk6NBvmHdrnDa8Rx2jSdhu4bQuvUknBdSHbYuiBL79d5cRLry3Ds7PvoVCTAzYWA2MWCrcsvzPqqw7r3G8DHm",
  "key36": "4SthRiQsEVb9jSbfL51tjUZ4v6NjZrQg5wGvCxC6Fg3U1qMBKXmgw6FFBzmZMwFV8CcjvJiaKbzFr6J9djBn1gMh",
  "key37": "3XKCCW6bSaPUNFrppp3HEr6YLhWF5hXvYWUNNXgtjw2Z3D1PHQfPyomDDiqW8nemo3B5v5Hikh8vsG6gJtMKWfxV"
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
