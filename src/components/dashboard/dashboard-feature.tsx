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
    "2iXLRz2kGWTm83hru6Qt77fPsGsA61MGjW6YBNqoUbiDRktoH8kSgVWQDX4AqawaQFXyKyD3HrP1DbwQfyjGbZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zFuCJyNyRMTrUL9Z1gMk3vjud6h12yJxK4ZcLvxRemeySQf8tg4ULnyiurzQgX48Gg2WzxXZUE7k9rUgTvKWhV",
  "key1": "2gzMWLxosap5gG2x2MQGdbZ3S1ZW9i5Z6Ukd8pps9h5XdBujDhQmp8VVBYuvge4SZbXzesithotiV75AmXqmf4BE",
  "key2": "ixgpBANVP3SezEr9vfZzJcrv7MVW3P7TRbZCoKEZkaNTkmDBakmgcGt4t5ToikUGYYzrncL8G7CJzHggAT2JvgH",
  "key3": "3DDKUVyG7kTrP6fEiZiEtCUFS7apWD9g9MQAR5ta1n14fLoEiVxKmV89FnFcptyjzPkQqJUTzVEpWhQjbLPP6sMr",
  "key4": "3sodMDQDULujKA5gQKZ4JzdCPpzmzghkE6iqwitfo2be2S5Vx1qRhjhHwASDHjCeDkNjkhndyzGftecq7Tq2xavV",
  "key5": "3YMEP34Tn6vQgDDbindoE688t8RFDyfWV9KTdtWX53d7icBhtuPyXLVmjnvZHxhSs5P3T2Vsj8toq8pFn56Uzg3V",
  "key6": "4vioJShuzhbsE2Aev2HrkUvafL4HUKQfXtgnu5JaN3332Sb6pLkGt6UiBjaoRuWykoCeouAS2yNyGE8EcD5pTJon",
  "key7": "4JNybgQtZ5qw3AMwkFDc84zL2pwLgm5mQNZ5cZ1FfXgcdnWhYhcwKu4efT6NJmeyXDt4Ak2oo9YdfMk762KN4ig5",
  "key8": "wgZBjTZvffqzHQLoKddEv8fL2buhSehBACTCbWaouG6M2qiD3jKU4NUYbH8m92GgKpT4eAveymRJ5rcUTS6wYLA",
  "key9": "4tgbQ9YB1EoYRuRnZbCAyss1KA5KVdiosZ4kdEtWKG1aEGGkyvz3dsG1DwWgSh1W62jann9RmkwtZXQ6w22ZJTu2",
  "key10": "3hrfbUXgASLXVMag9YBeQmpzzFGGpsttYQUvSLtwyaKQfCQWmdAQb3kfPvhmgNorHWsuYVyyMr4Xr7WAig7Q1g6T",
  "key11": "47YLDPLVyJHP5s1uKV7ep7N1AJUeEPt73MVvGC1AFNcRDewK24dSYdxCDv2abAQPRi9xFXPm3a8yn5g7KbyZqCSf",
  "key12": "4XZED7Lz2fVYttBvh95XzHNxNU2BN9NqxfuWW6fqfLKgjHyDBQ5qvXbaPLm2oKZ4wNYeTouXRtieCTy4PH3fKPkK",
  "key13": "3nP8uUiqm4niWspmnegvoEsVgLyF2sxR5a2pfWZ5Rif8YguX79ggVNkFr36nX1B97HDV3unnTjeT8GHp1mHqsz5i",
  "key14": "64rGciftCiK8BUzVLga8JMrK4D1aVHGWczEmr8oNVgoZGSuRoyPjQqh4RBAeNKgtnV13BXJv9evpUeRmUS2BR2HQ",
  "key15": "4i9PnxfGkncEyMg62qFgZjbu5ufo7UZUp18222rTwugQ9pQs4g4oM7Spf2bbCubFkJr1Qx8D8M97JWbGbQ9XWfHe",
  "key16": "3GAHSJGZx7wyqtjBKgmnt5k3Up9MbxofoGHkYmfgabkz6bEtig6SUbCt6p6iGTLj8adWiiHDZmBCB8fPDaaEuxHa",
  "key17": "51D9pd5F7DgerYrfxkTF6sFdDFBZRaenA1XPiAFonmsEPa2iZLpGPHDXSzmYxHGVq1AHj46LGKYYJTGoXRotsgFu",
  "key18": "4LyqukLNKZVtqTStA9g5MdWqMCKBdZgojfT1tMWj9i811ExBCD2komxh5rRmUJMKKeiHatkdvQScjuFT3fLFSvzR",
  "key19": "2keGjtPvy29qsgqV6DwZY38sU42JrSXQ6sLhqL7tGQFpMKWar9U4H6Y4wea9dNVRXGaLBqHcAEhVvu7EtuHBkmVw",
  "key20": "2cxu8knMNtjTePeaWMJyTJU93448NAvjTbpY7a7sL3hvEzrEWfN3N5sMVWqRhQMr1QzjCTRCWa5xzQpJcshiMp5A",
  "key21": "2u4jMcFvNQbEsakLmkqxHPwMJ3zkGxtdaNxWBns4yt32PPTvKTmKSTUjzNbXRDAK173Dbu7nzqPpWhdq2t3ottzb",
  "key22": "4ebQvpyG94a8EgjWUHE73BiqzJ8zAZK8oB6G9SDJuA4C7c2JtqTugbRZYVyNQxBWV8GN2nH1aVjbAyea3TVZwjrn",
  "key23": "5AaM36pFCpAnidyzMaJMiuvMfLEtmVNHyATLjxQ8fzhcXa2tUNhgSbNkseNsBNxJz7nfzUECiCCn6iHY4QoZqxKu",
  "key24": "5GJDxPPfpdrbtq3m9uUx9ZHQep4Ue28rBmenMgKG8LD9xXxcVrPa8aRzhT31stawyWW9vFBTd6DqyWyFhd4stBjj",
  "key25": "4muUCFnm9KBNx6isEC7KXyvxZfxmeMtMuai7dAfmb7Y6PgY3uPPMauprN1HH1h9NAJNm6LTCAXoZJ77rs3ANA7Nq",
  "key26": "4AwQYFSSQ7BZnXH9jn91tvsejLnUDx9gWimTqnuZHWH4E5SMUurJUR3DFXi5u5PHLe7zm57JHqtFKFytTih1N2uz",
  "key27": "5vYimkwgMXSY5rvEJxKPr73Aror68kPtuYCcYSY1kCz11bTf6yd2kw16MmSTZTqo4SWkC669pi3VJocVFSSa9hvL",
  "key28": "FbkVeQwuyLggvZUpJgULMA3Tis6ERijTVrP7z9FgAPvABRxjqayrhyu2RZrDcbu6VipPPvwJLHGADocdRz4uF4W",
  "key29": "3bgUzuFP9oeZFzomhjqhREzvXdiVbyEsMbrqcBBc9jhoRCR8yaYcWAjNqSs5J9stTB97ZS2RgzX459tnSx91De2o",
  "key30": "4eS9PAFHquK71bERG9nEHHmx6uGvPTj6ECbpVexi3TMcJbq3s5osEkpqnRymYCKuGZges5ihNbJFMzpQBYuQ2k7",
  "key31": "2zPxgwQjHkNZhZjQdV9Pi7FYwRzoCezGf43W1m75Sep7rRuPsCCDiug5ETKjLGGUr743fVHecwL1z9YYV8xjQwiW",
  "key32": "3PRDeoxWFshdGpqf2fb7XsBELfSfukyr6Vn7A8Mjq4Z8BBjKcski9dD3Mtseuy9btV5BLNjuXMUK7AjD9RwwtRPi",
  "key33": "55dbPfLnh5ZST5CuWwCs26isS7CxAzNsofHYMzRmFVEp8HT7htLoMpKVPqq6WTethqbLL9spDTY7dtQwvuAan7yz",
  "key34": "33ARRkHvDr9Kw6ZZJsKevWrYGz5e1TsXprhmrfrg6XNB3eW2WNMEUG65P4dyKzhHQfaxxBt5gXqZrSNjVy6fNAjb",
  "key35": "48ezQSJYJxnjNdzEQuobKsXmRkMnG5YoGUxykNEg4mM3XrdpRWNDhdSmpChZZ4ggJyhc1CzuVhCqpGgpBNN8tjUb",
  "key36": "4cX7oQ2QmJgKPPqpYsGbmRQCZ1pPX8FKtMu3mgExKADSrrvrkCLJtv5Q5CZ3KavNDzwzEZSfRk1FxsfuuC3nyAsf",
  "key37": "2urzwhJsaesUCew3zc8UErBXSzB7ZadQnLJSHBQbugcJCEZy4e5W6vw6G3CfRJXXzNKEqJsJs3Mfd648Lpqv455Q",
  "key38": "5V2ydwf4t7nHNbMp31oZ66RAhBUzkN6P3g5nyAi4VAAjxijdcbGtBgHYVpHMaTKX7jjd4YkDuGTGYHpMvTZmJnhd",
  "key39": "cFcuwuWFDMUAtWaC1bFKfRxNsWMe5QkLKmu6eYzn1gi7yVArk2QZQfsQjo2jGXnz9snABwNfEXGFvRtRBX9ncHG",
  "key40": "2sKCY1SBWXyAtnuKbzu6cr27JRUhP1NWiRSxaENx9Vz9L3JzyJ6gobsqmMonAoq1Wa58skj3v1NTv2iU219PfsAa",
  "key41": "2M4Dx6CjXmFx92LGanN3uiEidHFAsjv2BVvBVRGB1iMtCfxbt8Q55gbm82eWqcdD6s56A3SiFYffSLfWiU9NSLF",
  "key42": "EqtazVj3epfeV4DhotqmSSvU7SjdTPJ54FWuUxKFzdFH1FcKutscxW81MvZxjeCrEKkiVS3BfNA8fRpYtTp1u73",
  "key43": "3brBgMVCXQZmUU38sbxeuGSWHCqahnq6s4f6tAU7XcXLoeaUso8pqugyLYfM3fvwsLzGfvBmEJBC41nq1jRiGjut",
  "key44": "WJRXuPPAvBrSLqLyPhjtkrrkPqDK83dFB3uycf4B9wLAWj8Ao63FJxcEKR2xvhFzHa4j5kzCYdtvwe6NeZv17xA",
  "key45": "25PaqivQ18zMBYBqSHHZdgNvHZpSGBfV6WYsdcCwHPvP6EAJSbf2S2PkTPdmjg5mwGLJxqwKqMJVWA5XHnq7gunz"
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
