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
    "4GoTwjf9R19d2TULiemChAgfmn8kzJXQvhJJKD1wPWd1Thj7YPZAGaEtpRCjqwuVUbWH5mKYQkb84MryVAJEwWi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ykwvzMLCnKDM9P3bCVgZ1pYJ1bwErNxsv3aLskdftgCnisze2SLKPSDkY91wmCQcHXxwuB6xLKyPMjUUj4KuE6",
  "key1": "5XCDjnJMVogeDwEpN2H2dJiEGMZJykc5qfnBiuaG3xeAUrn8pFAKX43Z2WvAAc4vTkP5XK8Pp5Dp3iBCW7baLcve",
  "key2": "5WrBi5NKjV7ZCNiDFHFLe2XwrMsp5ZWZqvKE2EnafuBAY4xcB5MuCo2YKnsq6hAPPcp5W9Z1qkJ8TD1GCeSZyfh",
  "key3": "45UtZs6XptvQjKoCTvmUfJq1gYD4MFjNrka9een1BNStCaJTNNTpsnWaSHVhXYEDJ6VXBbVeE67FhNppS2uEaARx",
  "key4": "9BTTXxWepDQ1HF5jvMbFV7hMnNW4XoDRLG9NrM33eVFfkwpgXEYMWsWwHhzUTStWrGTePrc9oPFVnyrBe9kRvVy",
  "key5": "2yUTmrN8kq3x6hT9TMBHHatabWz6zikXFk4hzJKpTc84eRCWimhPd84rLspmaw5j6W9MGmVSXSKk7vWXPeBwC7Dk",
  "key6": "W28oDYnW1dE7AKPZ5QjbET5XSFKeSHi9wLuWkqxRSqBu53iwMkftN4tGMok6fvHwBH2nM8HtnhchgETBZZeamTA",
  "key7": "nqd52VNb7ng12EQ8dbkAXacVMxhQkZE2DaHPjETeWZp86DB9W8BDn8hJ5UVb82vMr6cEyMejuXkvkPsKGeFeiD6",
  "key8": "5YXVr9nur835kqqZ9mBrXJRNDdGU2nFTBusG3qnV8MxDy1oeShdejdmiva4j5bzspdZfHoAGt2jbNNrzo6fLfEFz",
  "key9": "XGzm7yPGLgXm9qrTvtjU6ppYmgYPykKy8MbHS7Kuj41Wq15zP34SRLQu6FJr8YiyzEhzTMaE74hC9YsvmTmLHAs",
  "key10": "5Vd8EsfaEjWxgTTx4x6Z5BzVDWcgQk3JVvayZJc2SkMWPuZggxbn8Jxn1o478yPfyihrigggARzVg7Z7Qtgp1xSS",
  "key11": "3tRpA9rfDAFDGQMJKA1fey7t3k6AxNc3n7XPssPiJFphywdyxLWVec81hiY6kBfPwVLQPxq7P5qgEZM1LZu8pgyp",
  "key12": "4KvrpTmEAprQRuebscU9N8sfX9ZfJhTbBKqnUus6EP4KAxTHiFqzKd7VKj8MnomxMNwHLLXRMcosmYNNohTe6rkU",
  "key13": "chXXb1K6Y76czCBaXP1Kzr2THUqqzcArFMHK1AWe2tifYXRAFwWXDerQDtPwNPj833GHHaUichhQbpCmW3W4MjS",
  "key14": "5KqEeQLk2Bz9Uo9f7Wdd5K7bY2sXnT9WP6DUD56iwr9P5wbbXoq3YU9vMTS3FU5RQaUCo1jiiWcxcreg58wSsNxK",
  "key15": "bMAUhSVeeTU8TFPLnwgEwMmWJk1iKAaXipdri8MBDfTesYjdtQ7WU7fi9zBbVR2d7TMJoF2uNSQVWMDXSZ3PdqE",
  "key16": "2hhyC2AMBiJTnF4UCwPQa6kDSZJT5adQZyMmivzoVTw2zArPp9AfmLf5CpCcLN7sKxiuqNzxfjYiZYtyj9388FDH",
  "key17": "566eqwndsmwWyFwXhHohRwM3y5GF1w3htKkCSGdmkvn1bUf4DRCMqdZM87utLwW4rXVsiLx99R73pU6BgRj5KfM2",
  "key18": "4yw1cgm7ENi6D4mYxCHXYitkpufFD53VFCjdrouauywMgvNFQAGwpXVyMvkUHdF3RkF8172FaELM43pn4B4BH7ot",
  "key19": "5QREbtzeXx8nuroHBBa8nrhemsvSd2YmyLeumhs3GWp35KAfyciDyPoTKWvrTNmZEGLAERjCFeeEqdcqA7HJs7oB",
  "key20": "5Da3s7cKQrzWYrqCgtXpk4MS64yxVLCPzNWE5w7Syd8uSD5M3XgzmzBYrPpEoysbcXpx1oD8Dmt8b7a2eZXxpoQ7",
  "key21": "4bz41WYqfHGbntjhjfRQCnU995A5kAETGoBMwL6Dt1exBkZA1CzXN5tQwNPxg1CL6egbMVsgHgJjuSFLmkhx7qsK",
  "key22": "3c3Nh9PcDqSJMnq4pCPzeCM5HFg4cez1jTEg4JwDhB4ie5fE2J5cdkrQ421MnqqHxH9K7ZZUCzVby5eC7mw2bMhJ",
  "key23": "4jZki5ST9QWQVGsfTZjSBoHNUcFUB5x2HNedUfSw8uHC6NvcfNQXTbUxMhU4xRRQeq7BUf531d33cwx6UKMZcbYG",
  "key24": "3AAx2PbTtb2X9pQWmMFanPpv8yoAET2ehiBGZrTQ5rQe36C8hEJxWQpLgkuXaMGwaceCVapiYR7A4CgNgRUNxqKG",
  "key25": "zyBrk3rVM6eroQSc1TyNLNEX1MQnM3KiTeFZozPL9AoFwPjCccWeqrJ8dFN5Qpj3ZdEwHeXnxkLGAUfJEQBZfzw",
  "key26": "vn4mn2mMSUsMqbY8r5mHvkhfxnGrjpo3jYPpzNVSXBoCSejzxLoznB3JST2vAFqJFhakbV6hWcy44edc25DpxTJ",
  "key27": "3Q2pRLG2nsJhbHGe8jG4WNvfKwu4jLk6peps4M1JgRGwJNSf2sP1oMBZ97EExWuxAGvf4onRgzetNVK5dnESFnqX",
  "key28": "5Gep7twGrkpLnBmC162fqJphK21g8cAh3EhwjDWizxsGxEH1GhALWecQfPdqxKcATd2BQufPYAqVA3vprNE2ZaXm",
  "key29": "d66UV29N3CmxRwrPFgipbyJfwYWTD8H1QcyWwPHuoT3pEtDu1ELG8Yz7MGASSy1kBoLvMDquuts31Bk1bYmHfyQ",
  "key30": "31sJVCJFVoWp6ZiQp99MaHoMmYAZLxNNn3hrAhn321LeRQKirm8ALJWW3fdiTFuXxjPj2h4wzs3XX6EUC8dc97HA",
  "key31": "2wrG1U3UyoyrgbWNZy6g8QyN3ZeG6kxXWKSLhEgTHaegSi7HatUojZitcZzuvK1SbBQVrQvqmJM6tp2yMejMEQrt",
  "key32": "cQjCfpyvg9x3nbXUEjpFFbv9X2mie6ra5uShQCygWtqAPoKKnfTc5mY5aTZSy3MgyWQCpTwG7C3fnLwTZPJmdvb"
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
