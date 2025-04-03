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
    "bTKTpNQoNRD6oMa49eV9H9BEgNRQgzsfVU8eJAKJbyZ45oggE3aJekWSzuR7DTSJz3HSD2tnnFXt3gJHjtpUZJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XuuN6qyNtKPwxLYzUe6Ru1zGecvt8uJymKNtfnp2arQDL5XbGrXuHMVJbAXW8A9AMRQbRGXvLbhPg4ZuU6RWqu",
  "key1": "4SRK9idrs8Kf8VBxz3XB1iHxBhSBBysw68WZLXqXv6i3E8J2RtX14RkBJH9GEWDycWoZp2YGaFmBTm7K4Eab3Vun",
  "key2": "5L4icMjALcNMEh37RTRR5osYofE7pGoKyVmSpZD49U31a4mUMyVadqNksigHZHeKpoMgYrCbkuiBqhh9en2iELY7",
  "key3": "2XFAqdL2xkgss2oLoRqL97S9Gcq96y4WzBKBnBAZWruT2JgBxX4xaMVGQVgjMeppBfe9Y3mNSrDCvAfV5B5rGU8q",
  "key4": "5efAep4F6Tu26uNuawZ9Vqq2hj6CngaMFFTDnC13JWVCmGuXmiLa3xMHn9sS25MswszuzjvqChu7iX1mRrQ2Sj2w",
  "key5": "ckE5iVk3g2JBVwpHa1r65xqdgW4ZZqfUGKTP1qVEuDwzmbkJHMfzws8yGgRQJDNEB1YiRCTbG3rCWuL2Gvq52rY",
  "key6": "4A6YqT2StLWvVqNUyLc6QM2TRdJWQE4jC3StLkpZDjP7FyKCkMUqw97gpRpJpQE7ypWdGvF2SC6pbVdFe4tL9vgW",
  "key7": "2j4jUzdcEEANCBGFmFz8Z6YjgDRTPQ8ffyScuFBwzbZ7yT1GyWRae9tzAm8Qie9xjgT9foq6KAizEHYNTHRa5TmL",
  "key8": "2Mg2QS5dpckfHbYi1RR9h7QaCBZsQR6nkPAN6ysysTGoDMv29PWyfgCnxtSEgPBcNZeEakWbNA5Yp6QZ6AqszCML",
  "key9": "2doo4d5EwHA1DjVXFQExeim5BACZ64bPe8iNPCDbGjkWXtiphMqGv8U3mjxchRksHgTFwyrjo1Jc8VeKU6PhJQTX",
  "key10": "267mr2Mk42sXrqEL7cs6ya7yGtkpyVw6FRKUHp3Eqm5WhjYJqU2UfNWNcbQBDgMKYFBF9cWjPn22CQv8maYJKpTj",
  "key11": "3wVi5q4njWBfB8z3jq9wVmrVH8L4Dw1RXoM8Q9QrPoex5QgzkhocifP8AZw4vX8L8cyQyEMNfufkWsLi97DuZPcr",
  "key12": "4oYFN6Gq8KRoSQiYK6h2fhw9FrAimvAuHmkiEr7FmEKBjVHhfAuWERexh9XLvovCaKZBMNb3Q8uNrjRxapdbwLc8",
  "key13": "CHwSyPhFWH9Wi5B4SiSFNzqiK63EEztZ2htQgTPhAdEXX7JYQ1ZHHoQzG58hCDAeYcmLg3yjMhhVqky7hUTAoH5",
  "key14": "VSrhAgkrQbPd3FqxTdgHGMp3nomsq5XyK8e4WMuCCySEm59PG8qUDhKEPp4LzHvrdXb7uoWiYAfAfnxsNFTEx7z",
  "key15": "65XDrvFghHxtr1JEbxrbqtVDmRcHu1kh9uq7BcXiAYcRfCqgHbMdunsyXe3m2hAnU93Hf8rTyy3eDep6TPjezSea",
  "key16": "q7HVdV7LvYes54GYCasMPMZ6kyJTvXNSZ3ZwojEZkoZZKwwqk92QaJxdZoWXaUxmocBct3i6WFhPxpt7t9s4BQQ",
  "key17": "A6BuyzB6brsyn4f5GvNjHV8CvDUUMU8qCKoj6yR48gzPR1bYeKBWog4ZrCBwdapKKrDtrGr9NX4dP2eMWKhdkmF",
  "key18": "5amapvZVYCDqWgn25GQit6YvnK3xbAibSNjAtMV382rNBDaQQYSkwFNhFuRUGHK9C36sVRGV76AKKz3jsqbb6YkP",
  "key19": "tKaqyWbF6D7UsUaZAsp9fpfpmQMRvkrAtFScdJJTZrrYasK7CDVesWmXGwV5pfrDpTDrnUe68AqyRHWxkVwtme8",
  "key20": "4VnfUoNpxECVdNR7KQ53QsH4Bnf8LM5RZrtANXdzrmA3BL3eeKN6HomCZ355GY8LW1SZtATTHw8J7oCKfBCUa4Zo",
  "key21": "5ZRpDKThsRv3Am6ves8rhZBgnFTpBfUbohn4Xp8ig2GtUKwrLU7WKxbpe6Zvx5Kyt1U6doVfj77hakRDh3CMSSYX",
  "key22": "2cm9v6fEnp5TUHDMFabr13mrY49k2yZdUk1oG7gm9NTo4opTaHGAbo2wG42XfJS4m26Pxytp4NAijUihAv8MW5xn",
  "key23": "4ovYb1jXe3JaVjKr6D9fpz7Z8MXdZLNB3218FA4yDF5cmBWSz5p1JSsRtaqcn9XnT3jAQAPcaRnQKY1kqB8hj7uP",
  "key24": "46DjwxsBu4VbqfymETY9t2PKgvSqURsfqwRz4Rk2T4VSBcBVVkcmQLphgB68wAUWujCK9NLHFyK5eNJenajU9E9o",
  "key25": "CQ7DUFochZzaBQXRxbkcmo8kVS1FsKJHJMy1XRsYjJFxcrP2MHUy644GxLsUc5MViriFvJDg4TvbcYRPmYipCsx",
  "key26": "3GYmD7G34yzQKfdskRfJrvo3iheoggCxmxwueaa9qzphNTf1yoDNmixJBTJRCk5JwVdtQDQD636s3N1LYQdQMgRA",
  "key27": "4dB2FNWheqtYAgKWSAb6QJ5cJUKXcV5oHvm1PN8NHbWsVgvTpNBJ6uSnZoUPFogk8Z46R534GgNhKVZ1iF3iCHAP",
  "key28": "SzMdp3qNR2dPr7rj5u8KRYCs9ZqUnG8XGK1eEP39HbYNHAXxQ5r5FGx5C8ArhTnaoze3h9dMyPoZXyf77ERkXAq",
  "key29": "2wZu1heWWJKwYZ7961KukGLkw91fYcEym9YAAG8jDwjNEMy2bnbmht6879hCSbA3Aef36VWfUmnGhZ5v45wQ8nFG",
  "key30": "4yXwpjZhy9dHtUNTzCQDxBmgKnLYPLQPttUKPAMqEAXhrFHCTd5fu4GrYaC5mAGr9AtwVC2gjzFg8dFNG32zYkPn",
  "key31": "63EtSWN5XHq9GP3P7uykt2eoJdPcuHFTHBqoWWb9U4S8vkwc8ATi3S63VU8i7SmRnEjtiW957hr9Rmt8diEpQ3RC",
  "key32": "2zcAscCfMVWfBKEAYH4nLXK2JSUZ28y5ykePLsEfEerBXXmffpBLb3JJU4uKo5MfCV6N5s5G8kauvE7sQU9RrDw5",
  "key33": "2wG3i9WS4z6hkBpLZPVyq4WzmXKeSh9V4eUbq7CWiAQrMUNRZ8AVtB4u9cmeV9QDKQhNhnJCxWAzKxnm189cEYtw",
  "key34": "2jg3hw78Xvg3wxHuKWoM1TMgDGggdhgwgsERYmqzAcKQ2xvDMo2ZTC6Y1akDbgCygswpZcreUbmZ6oDS9hNkDjzT",
  "key35": "TDzGgGMGtBLx5KuLMk4GMNjHzWestH4LU596jeTR2CMdY5fyFppc2gQqW6Sad79o4aN91P2UvDGrHsN9Jx1hg9x",
  "key36": "4HJyfeyQW413wwEK9CG3NpFNMq99KBNsSLzDtT2Hwo9m744qP5imEmHD5hdLb2ohqjXeXoZm4bwea6CYNYcrCmH4",
  "key37": "56oavDDcEAHi56bxjfJDW7etGfSw3xstWfT3KawHPXp1Cgq1Yn2LLgWRYUkVGKgaCSRW7BSHs91grrRfEaGPWysB",
  "key38": "4mNPRasAcs4CcmZr2VzKfErdKFkfeVMDJ643gjEk5M13wmTjjidyRrjP7GJjGoYXCuQQMCUnCfQzq3YZZsB1zWXr",
  "key39": "5czruVWQzxxh52nz2EZphjDvM3sANTutJRhhi8KZ8BhotZcnAczDS6Ny4QgSSEEaL6FeudyEtZXRyrVxUdf7D2nP",
  "key40": "y5JKGcss6i3nEWJ2nBPzj1EEnBTDoBRegbjgoks8CVaKgrMLj7hgeFzCsvpCzpy9CfksrPF7G6Fk3LT2SVSFiTa",
  "key41": "vbiJA5XDyiCPjtiS4HABWPSLgUNzuQEwC6H1gw5xF8WhJRJXNwqwQiTDasZyQr1iNc9D5jihN6jZSvWozNfyVzk"
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
