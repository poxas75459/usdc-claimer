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
    "5JkX4FUpa1ggbUoMsbSoNM6ndnTZQqQdX9LGwYVn1WADo13kSwFXXJfhnA7X5HTEUouYz5xxUtquZpKtEtHqoEA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jhtEvpuMggPwUgw7ZVE6zehe81rd9V43187jrfG2byFGiRVji1UDks2qmLSupeg1YTYd7rM78CfJRsRetZykxhd",
  "key1": "33dkKydGofQJdZ3HbWV39iFAskrMt6kTvBY37iJhPLdJE7AeToTkBXRrPYj9ZyPtF1f3kRRqJ882cssErTmoMf2N",
  "key2": "QiSsRkBNSTzGiV2u9tcbSp6fd69WeJaicTcTAGgu5SoGFkbCfzGS7XoN5myTaNdHwbsTSGd5gvHJza25WDq6N4q",
  "key3": "4uZRixxpvXBUHhakGg8jDn9uMFM1NGURXFjB1xEt3yC2kAmT2GkJGYvLiJktPkug7Nc4f8zAiif43nePTxTxXyHt",
  "key4": "4kWvDpvEGqX6DJqHwB3qvuBRZA3uZiRZ1aeRE3mUmd1PQffKpfHjxputsHAqQvGmdycHjaAZwy9QEzjuRnb98M9E",
  "key5": "4sEtxf8Fz9pDcB3KXtpg7wwXtsf7XjQvtuod7h9o5xtWwqRT78Gvc6jWu9guwWgFgqZYgAVnaVmQWBsMbeffS5XS",
  "key6": "jL5Kpti9p2t7S86QbySnJiiNMEHqvQssSWqfpNPj2oA57oAtuUnxzDaUcQGxMgZXzfktKtTtvNLHnhwq6cy88rF",
  "key7": "3oFCkSeeJxQNUdpyxE27JsYMQr97wZne422uM3hCRHTyzyi2nVkUWEB5HPJa9xuKvv1jXfPnVLTCcsVE4hiPXcdt",
  "key8": "3CmFL5cz43iRmGsGKqPLXeJFQ5VWvwjGLHWepUGe5ReMH1VV87QcX6jxwVnynVCniox82fE3JRLXL4aSuUa6VMQs",
  "key9": "5UTWPrXw2y5Ctf1WDXV7Rruaxy8eRcfXWrtmgQNfYf1oAVbAJ9ipgkN5nFGP38PJuiC88YPERotYKi8vvtro7VG5",
  "key10": "fjajNHZJtwjRrRzBd6XShGXQKcakiBs8K3NkhUZJmNXcEj1Vr54AyAUvfpg1m8MsmoHWpfbLVY6JKmaAb45Lzo3",
  "key11": "CtbnMc7QFZeXKu1YBKxrs2h6PEABNeJt8AaxV7rogdEKeBJL1VsSqdecQeAT4uzYHgPGQJNV8s7gmi3veusDbTF",
  "key12": "5Ak843oqwUNDqADpEc61EDfJxB5qzn1PnKmmUEtrTrk88GSv6L6UTaLQv5hLXzZoEkJtZRbEfXzokyGCNbbdQNtx",
  "key13": "4UuYk7U37XGJWYbVN4MkHioxkhizqQP9Fvwe8MWbrKMbxSzeEN3K5crBijCqnGErKaF3gBSA9AZFmQXYYmdbYnY6",
  "key14": "3RT7cCvo5Pfpvu3RM549BVbMTmsYay8jWP643NB5zS3w5DuuSq5fGs9f2tRQkSadCVkvyyvYwDmM9G1oFjuAFsY",
  "key15": "59EPtdM8jdYd5Ez3uKfxK9kPG1QydTqdupBjsMXeCmBS3oTW18EGSKKkg33NmNZifVKxRn98GT2x6XJq5xKtbtrV",
  "key16": "35pgpz9EK6PY5MVPRqnpGwZTNwZyLUNLvvjCAQg1DSZpH4S7JxwypEMyo91qkRWvnqb3f5wDcFEgxX3uxdBEqzGb",
  "key17": "3sMYZz4utu5vgF3hfxT3upGdTCoea8i1qFkcHdwBZeAP1Ek5UMPWod2CXNfpffj2zTXkW9fKbsTKnZgoNCwmGdFp",
  "key18": "4aq99N3oD8566yY4j4q6uDFu6xbu3zrHQ45jrYbDXSpCdvkebpkZyARTa9YHNF4ZZq3zSknDWJK8T9T5aVA8UTfF",
  "key19": "m46Tbf25RziQ3jRgEo4kMZN8SdUxmAjsX4zJJ4tjqkjNj6oTmE911MV5VXFYtQsRncqE4pE2pMCfRCvvnKt4HAZ",
  "key20": "5DBfviZwUPimx4H6ySShiaXrrwuZ1YWEeQbutNqcEciuwWHpH9y2wpb1zHkHBKtZdjkoid57CagzQVH1763HbsZH",
  "key21": "3PKAxXwiMicsErMP3pTLMFvCc3EaoyMyv1w2KaHsPQpJPEYWQaEoLKksTGJBkH8nLzTGygzY8pn7BpwMdMECpjXW",
  "key22": "5M5KcYup7K8YKWgftijvQf2Nq6esYijPxr3sQ56poymRohBiqbuFE7jNWNFVEWpvx4Cnn9eUqPmQZUfXiddTvtoY",
  "key23": "5JzRdhPsz98wsiaZtwcUM9crUvZfgkQJhz3aBsEgdxRJYTgpujan6tV7Uk6abihX59fgg9Emg1z6yGA5vYk3uJgr",
  "key24": "5yaatbSULQeQ7K15gqwPbHeCSxiwttCSCmjE7JNkL74RKo8MgAUQzcgSeCsD3m5ZrWV7ZUGDBxhYWUvyWCEAYx1S",
  "key25": "2vtX7dJ3NeNdGoY8V41SbwXzxAYCGTfpAR4ijSSFfuWE7VzVyEBUHJBduzGpLhTr8Qpic2tQsrNcCBfBqLdNEa8J",
  "key26": "N8QuFYRqq91VSWAqw3ZcQuyEgk6ikuUr8Ry2q4eRUGfXry8jtoRAR57yBTdSBNS2ei79VfWgqMKKsi9B4j85vo6",
  "key27": "4WYsuKaN1msam3QB65hUhUBDKyPQAJpLp9uQMoHiy1jAcbrP8U8QdYRZWd8AUJMSSP1xc2nbD3aj2taNbHhqPTYe",
  "key28": "3XMN5HKnXk7ysjMQexSJPTAAh3b9eT5rTjo7ndbmLscvHgMb46TRe4x9BHEVu4Qrc1czPxLv2gqkei9YrVCBsUi",
  "key29": "624wiLtKgM2KRCjvQCrHJjgyTa1qYxZmxKhYvy2tt1XTEyefBqyaTzCXwxS3qmCs16u6qrpi241FizLsyveCoiDu",
  "key30": "KWXK1vVNG7RBWk7B4gHdVXy8ZNrXCkVyWJgTPVibeFPwdCaCYsSvXXZPekjCfjWw2LUGcvLXT9XniyjeCDpBJTo",
  "key31": "hjqhjB1dE3bVZV6EGzmUcMfHciPkUQ8aj526UByfzJyi9AqjHpjdoKAHXAJ5zv4NwhWFhS3Z5hrivxeTiuEGJQD",
  "key32": "4FfhaXye4aeeD2fDxPcNgQfgprwkfqL4EE2ZNFbS18gmN6os4awtai121FuH4buhMV94FYou5eGhEAMDBPqx5pw4",
  "key33": "4NC3gG73NDQKnTH5KzCqBFGCc1bCizWP7AzoMW7aDWhSduCf1zmqYCacUt64TUX8Ddu7bV1Dbw35YCx6FB8uNQTE"
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
