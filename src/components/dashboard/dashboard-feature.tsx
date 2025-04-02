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
    "58iH3PeAtJpBQToWjUvjvHuKwE3iztxkfaxFXaTCV3sQ9ykxfbMVQQ33Qim2xT3iqZfktmQoFCWSK9Li9qK4RXG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsgyjXm5UVGt1GquedVd9JoeAYyL84Bi3biSPJqVV9GZf68ECXZXbHBXLecbXQRAeq297sMdK9MzXu49EedM1QC",
  "key1": "9TKcV91MWASMWMztbZVekj7sw4YSvYg2auCXFXdV5VKMiUfXvDFJDM4nEcqGpPeT3hn1oVyHRKNtSX4VEeMgcom",
  "key2": "3NYztW9q3yiPBPg3ch4wLNqz1J3GzN9GBdG3NqwuaLyAXARB4xu8rVnbi4VHeyNvq26vKWkUzkLuTh7ppyoiMo9F",
  "key3": "4e3abB44d76jEA6rH1nqgp9gq2L8CCwTSnyAg9jtM1JtLg36B1kzw3u4x5YaEV6QKRkcSYzfxse1Srf9McARRovB",
  "key4": "4H3vj4jYvMk5cff4Qk3UtYoyftNQ5yJQk2bPenusjCBn7nYgPooBeXJfRHXyGVJ7na7GMTrv1htpd7HuZLFrdvxS",
  "key5": "5FkWAS3jBYzBM5oAZaJmm7sb9VM6fBYmSVAuJ8BDf1UThhtMa44VjEUQkiuq22GyL2VCAbTmP156HgbVH53cZtQS",
  "key6": "4LRSrrX5arT7wDT3WVaacXQdLJbCGToiYNXiQ1dCsuTYCU5VZm32t5iC1ojrWssM7r7YfvtZyCLuDVpSVmDtLUPX",
  "key7": "5pMxCWzwS9jPXCF2harZL1TpKWy8mcokH9cNzY1XbxAbK5fEK987grtGir9XHpe1vb3abQ2PUdbTcDtteopK3JHR",
  "key8": "g2xMzGaEXyRZGR9JYJsAGn8WdcCBH6sBaerotZmSc3JibrxQCgkmP4C1ueSU1fXU35TaQtbh1yyEgXVrVjgkLPf",
  "key9": "2JsJ2JQLE2L1sa1sXXVMUubA45CPZp2Jp8f6W9Ed2TKGM15CArgWzcbCeNekuYird6Q235Jh6CwyXfhpEJqoFFAK",
  "key10": "yKpmey8ugZS6Vi85T2E5NxtySjwsfAHNHdQ6ViLEkS7fbjqyHw6kLCujukuaeNQXN1Nv71yrg8tJTFazQjwjwVJ",
  "key11": "5THRm8vMzr3HGHeSocUcN7yLfZoc2xFnvm1SLagZEdAW5h3Lr1R11mebmP2ZzetTQsDEQQiu92qNdiwH8rZv1JMy",
  "key12": "desW4pktLZsyARFKGMhXP1icZeyAitmKnfM6Z3RmuUtwptc7exqDFz4rvd1VeMYrq664B1KP6dHR4BcDuegQAGo",
  "key13": "2FJKeATnxoyakFF2jNZugtdse2j2jbuEXGDGCfGjmWFPp1aCc8e5XBqawauZGbWtWrksJD1oQ3ivkHUo95wohVs8",
  "key14": "3r1XdTP7kuiG8GsjsPAqwuxZKgitFEF4ZqKuv7zFrNYfSFdy98cvCebiCTd2A7ZFQMRhHosfvtmqnE1mtAKi2D1z",
  "key15": "2WrzLyKgGhMw92KRpZK5P2yEKWMP5MjjMqRceNzxBZpBmjpkdZRCDUzTSt8Gxt5kBZUMgHykTNjPxX6odQTBekwe",
  "key16": "3V7yWbVC28p9CxJFv64eNhUgojt5RdeGWFFMAws4HfnyJhg9sKXWtsUwLMTbvEfqYpcWbubSBj44H8ZyAWrZGza7",
  "key17": "3eUUsu3ApKAMZDvSD79b18SGB3fPFMePhFE1Fh7Yvc8LZjTXmvU1ffTmNZuFCoZDEuNdjRFs8rjSH5EdXuHELvKz",
  "key18": "5wVMMJTCPX5TypuA85m528p3qBRDnpTZ14q6W3JLxrEHxfnvMpLuiWTgPxb9xdYtCjbccSwrwHaPD4MZxgNNKbUo",
  "key19": "5YWnncBBRyy9JcpPBgsnSLZxd7xrKRxx2rsCPfH69WH6cpuHEx1UmeqnkYn3Jb4y4K7cvjVzt5rjvo8zBiFWDRfS",
  "key20": "4kP6sec46atb1tgUbMyGDgYGLbmDGLjjRA9nXeEM9AfZJEUTJsAy797UxswSbJbjMaaZU2DmwFxNVL23EZX3Hk7C",
  "key21": "2THvZxBaKtFMGqtuvxdknPzFoBXkXfwbMhvzeA5i1fKzrdKNn3hXfKfTAGF25X3Pm7dSjk1rgwVDGmMNZH8dHaBv",
  "key22": "wPu5VC9VK2VZXsxyHWZQGhjhRV5erud3hTNrrheNUMHWCX8McKYpmgBCC969XguSPYmqAdhG9ob86gm4mGjabLT",
  "key23": "4s843XWvrd6jqxETKXvPjXQDrHZKeuBDhgC4T9MwDv8zBUJDMWHKAuJuZBoZ5HA1dR6GX9tk51NYByUmH5ZiqteM",
  "key24": "5HpxwoB7TTSFtJibpXBLxthPhMMAdHUxoCPJgZD72M7AQcHB9qzGAdDpoyPGBWcR4rJgpxuJmaSYiTWGUEFwW8bd",
  "key25": "kySk51vS1ihCgcG8pgETrxuud5J46oAjf1jBWHAJWMjXDoPVVT5PizzUg3idZG2Fht7msGxqcjn6S6Yz4tZHdie",
  "key26": "kGApLgoPiGbndre7oHt7U5DKHwAPyVm8SBhToy1xJ1NBRMLV1MWJvprSYHXzd1XLCEXckJpCPnhLk9MrEeJmoxa",
  "key27": "52TdeTRtw2zThmzFxxd4qXkhFEKnW2FqbAyVTCksG9m5F4ANFgwsEDgrpVKKnF4oTnHtWSmQu5K71GdKr2LRVhTj"
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
