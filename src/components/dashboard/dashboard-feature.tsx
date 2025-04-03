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
    "5CCcf4Xg4yjy1TrFoSbmHqieiUdv4dukKuNpEPVVeFaZegKGE61HDekfTjbxBfTpGcxhesqCkB4oSuX4tKcPP6MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKueb7e5zQ51oXPAsyA9Mib2ZdxpxxvkT4izhN7QUL3cJwuSTzxhmWfW4R7mfjdtyej6M17BiLVVmicpLe9VCfX",
  "key1": "2nhjEJqF4RgbDy6HDqiopyFUm5JVGepH6S1iEaAZbjPYMnf2hJd4GKiQ7oeviTtbBucpuURsr6nQuWoLk8ktk9pQ",
  "key2": "Givm6HKbshwnthnSqvbp3jGYCFXr7n38CbbUDptvWLdXz4C4QciVMpxPdwumHqkM2zTHyRLJ9cnGjfD9mJnXqoi",
  "key3": "2A48FYaANgLC3DAWKXA72pEfn6MaJ1LNHHmTzD1t99qKaLdZTSSXm3exuwHeecRwxYwqGqsxoA7LXK8GkseJAKMF",
  "key4": "3bjESturbQGstvyzc6ru1yCG8f7piobxrS53FhuA2L82jakc9bUc6GXHepbUfUA4NH2WDf4sMBx99M8j9Pw7BPYU",
  "key5": "37s2a2wAc4bZH5FxSLQTYu22pSWniHXgTufcM6urjwrJ8euxid1xdfkpFceA5r5ErF96z3VEfGrJ7XdqmevYAc2S",
  "key6": "22NSnfQ79ejNK4D4vi1EFFDYsfgNEu8mDdxpm69GKrGPgNVDWfBwVHZgdcjv8HRyjynJU7vhetuKt8tqRJVLpG35",
  "key7": "3H56fBh4sb2S1tgD3gKHxFgooVP9NF5Zsx5rq9NeB9rcZ8js83D9CF1B13VgpLLSsqHethWb4eMJpVbWtQu4xzxA",
  "key8": "3wdomPcVWfKCaE94AVYuCosK1jLycWEJPaQHMYxMTP3F4hJtEDTDFu31g5YtKQH2wsGvoYs293TW254cdoYHnQjb",
  "key9": "3HZhCTZ17Xz2iWqaxoivX8UYfrmWJi6AdJbG6AK3TFdzJoxasZeSgJJ3X85cYhamghVeYJsXFGqvycqsFpGwxtkr",
  "key10": "9HPQB8XDC3Z8prtxq5DyBDtzCQoF9ApY2NGmr1NpKSTy85eupwmKirRMKyWPMxqWkiokjjJmYFEyMt3yTcryy9x",
  "key11": "295MRMtU8uDZhCkt7SMe9SJbzvQtL26xnywJuRcBCj6KceSTJYyt7N6H2ZjwYfYfM6WCyjwJ2SoHKr52Bp83GriM",
  "key12": "25UxLJDsHvPFYAgzrARZkdMMAeWVr8EqhewWSHoNG8URxmkH48PMkUd7GRE6gChjqmiby9qUEwvrJZZ6G1m5p3xs",
  "key13": "3LMXBfHsy5cyVGkTpv9Bpx5QoobbjFNR9H31itrnxcasuzewyjfsAdCBB4A3GQh76eHCYAiZfLKnve8WtM8zRPiG",
  "key14": "5fMPgiJGHps6cw6od8c99FKdtkJ9AkwjvYFZAeeLg9WdvousnoNKuNVPcsw4uTmjc5kiadgo5Bfq9Rvn18XHx6kt",
  "key15": "2WabSM113AUD41e3PyEPHsHGa8or5WxjoQaunea5qzYV43H6jgr3eStrijkegVMqhgvEGiMPqddGBzFAzXhaRNgv",
  "key16": "2UXGYkj7SQqd1Uf1ytFmXsuhh39TyWmAM4DyGd86o4uzmBHnkYZWi5BCsHvw4Vc4QjGZhijmJmvMthxj9QWHwDLB",
  "key17": "4SP9cV3xyXcq48qgQLNcNjbSkgFKw2RmBTG1XeZvKrqLnYFf9nGy2wtRrqkkpNSPQe9BzLXygLz5Lr6uhK2dNQXh",
  "key18": "24eimc5eVeFCEGzhgAriEoMqk1kSXJUjptNQ4iRK3ZkAe4yutUYtvybwd6hbLJVQjZVbiekRDnjZXkZEvcV4zrGo",
  "key19": "2MJqNhA8EkWc1WSUKRW867ZgkcaYXaHoZ99woZLojMHDb6Q2krLfTwmVUYzs4TnNkjKX85yhxNsH1uMhZqwGtpcw",
  "key20": "2YYZdGhYepf3BbAAEnuTywd1hxrQy4Q4XGKjbixKYQtP1EZJKeLgsZccTeSVnwogq12vDaZKMZjD9pmYXbKjpAdw",
  "key21": "2D6di3bvH62rGwgU3atK7HwgvRp2pCGPwWv844JoE8obUrzds3oASrvxESDShetQMGevBz1nEjqbifMhuhJ4dhmq",
  "key22": "5wKfJhUxAyCww3TbRXWAYd3Qezh95rQW8ENT7E2SjrzJqhU8tgdn3UewpuMXr8v4RU6TSEZgbVvb9eDrHgjPysDq",
  "key23": "5CXU5teiHHtGmKiiYZLYwHPNDdnnobSmfs2aeMArHhxHfiU7hW4A3CpLnhX2nsrqyajjEkK1xAoLCoPtzzJz2K2E",
  "key24": "3wnKrxGmcFVfp8Admdsa7d7LxDbQwcD2mBm8mCAK3QaiCLdoQpQQ3j9Ux3nuNtTio8xV4DVzaLQToEfYYUzCrTGE",
  "key25": "5T8GvXqhouvSPmjcM1NfhSUiHfxepxL8tPfagJC88oLmeEn67ERdxFuP9ZUPcge3jXNYCF1S9TUVshkJdvnfj91A",
  "key26": "4D12jhNCqzt3Tcn79Ks6p1A95ToBcJa4jc2xEg9ZLnHBnrF5BFu3o8NvxP3ENJsCABPJGPcBAui2hUiGmNMoTXKv",
  "key27": "2dqrH9FfiBTuPMMzgXbXvoqeuY699f761MJvqtTeggiYjD4JUsu1i5M5hDK38EicgxjdrNbWcjYCuHay2k9DxqbY",
  "key28": "5Pg15v3FCbjDRSZq741PMeVeHc45XJ4DiQfgejk4JqRNjQAqmSEZqJhGmd6EKXa7ooipsgPo9o3owEucZBxa15YS",
  "key29": "2X58mQCTVCGn9kx1QJ7t1wcRfqHtgv2cJ4UMJpEGJsKwTTMKVdR1Yq2vgCQrHJ2XtQqHToH1LXiggPWMKaxs2XRP",
  "key30": "2tedKuVTaM37GkYgJEjv8tYnuGLJkhL5hg9BZ4wZWzGR7nzZKsCBgyqp6fXtqVZs2FUfzxv7LxNRg6oeXAq8NixT",
  "key31": "2DjLz6MkZ84eoyxdwQ16CwMygStbFyM9p36YW3FBKeTAXQt54EcQ1EFFiKrfCBKn5Np4zaYdiJ6ugq5yz7bYh4m9",
  "key32": "5eWvhK1v6UiLo39Wg52uRf21X4FV6GPN3SffpSXgXQkj9jjdWw28LLG4fiHAMthoXYwW8DWruZgBCSeqmgD9mCN6",
  "key33": "4MUqxqEfQEf2A9H624pstPx8SyEpeqzNtbdrArT3UNDCiNyYUYfhTobeQ1ATzzV1eHVRh5JKM7YWgwrqdk53oi1L",
  "key34": "41zTqGZKHQMtTHBiEa1tx6cqE4KWg641PgZyDsfXVjVCZWPMpNmcLoJUjqcCeF9Xq6oWKUvHMYWppwVzTZoXoyc5",
  "key35": "5Wx3D8jkPNJRTcun67cb6Ek7CPZpzJyXEtrTSU5QmQFM9wVPgz1W7TEZrQkVBLc4H33PAh1XyJoDPkgHdBvSsG6H",
  "key36": "tL8pWy1NsYukeeeh1P6Zrvc6nBtw1tcLCu7rJosEFotNY2W9tRhewGsJXitEYg5f5Qaw5n2HJyM4e7Fgva895nK",
  "key37": "foxnfsFaaHTXDxBhm7uWd55BW6ZfRtwZqa5ZmxWbnLNjDW2BRQPaNdRmXxG4FVWf8pehz4Qs5qEJkbF2YyxLDGr",
  "key38": "3bM6gKm1rg2NM8n33rweU9PtsncPBoAFRZhAr9VCPJ4nx3UvB3kh9gAKHhiXdJPDQjLsV4GTjHMJuXeUuY4NcVaX",
  "key39": "53RpnhPJ9BPrZQJYPjrZmucNbvPUTJAHLdYfAqKK1r1KEVKCbE2dDRzsBmRvsA4iYqTbWELC2K2kzV9VoBqmEmFm",
  "key40": "3FSsW5TDJPWHwZ7v21L9nhPyoL2MEfqm2pVTbNkrEWU6g9bKPTJQGp47vzUreC5Bs4StqVRN91murM6TmG6VjT7Q",
  "key41": "55q4gK7sschm4piViK2QU2uiqBSBV8r4wuCxQZ5n3W8dmGPhMY6nyF9oJ6NeZ95aEqAhRMoBGKmtAwo7hYNVzqTx",
  "key42": "2nb6uzVaFaoQdYjByv275UiLbix6zcF4RFc5sSPv769yyPh9w1dLsYGwnoABHEgWosXnunkzBwRnGNQC6b2K7Wox"
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
