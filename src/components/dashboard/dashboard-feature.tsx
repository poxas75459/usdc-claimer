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
    "4AJa4jCTxPNUFNpSiakzJTFe5EyVK3kgGQx7a67gTXZvKmfDC1GocrcxQRCStHGGzPGszCkK3kFBN12a3aK6qj1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5cJ7aEUSbS7g4KDz4rgE5eovyFbzz9yzH6MCmBiz1v7YXCgHmKyYmfFx8hKXBMzZsJRYKTCPdKW1EkjN8187pc",
  "key1": "5sAu5EzXrcRNqdK1KFoTXFp2UMyC4STpyj3rojWbfPKYJCXz8GNiqKcLv7PjFjjnNYsZjVkGxMVEmKC351k6D1M6",
  "key2": "29dYR2Lfuj74VhQXsmyeGnXPEwGTtBLfTY3QUdd5pTzp1XxqPkZpHyqUktoS3FgrANGCdFh2Z9oW7dJ6XG1hhQm5",
  "key3": "5A6AdkZ8KfEshx9eHGRwyMJ2ooCtrb5x1ETpq89db4Sdh6gUXrPqxTA16gSEPYjjAeQvUB5w2hHx9fM3xesFg2YR",
  "key4": "4T3j7a7yr2yGmHGL7djJcHu9M8TKNbdKwV849nMoy26PofogW3EUYcHHk9JA87d1HirZoRyccpc2HpLTEsW37DZD",
  "key5": "5PhtQZrEvGCj3P7rPix11c6FFe5WPohj6iUyCwc8DUoiqSZ31f8JY6qz75gnDBbRzvM7ecTp7ZUq7Hc6xBYQ4eiK",
  "key6": "5V52K1mRcULxdoBqfuiki3ze4M4fu2Ei7z6n1NH8q6biwNyXX1KPmJSxSMYe4kseMtTfPj1LRCickCQsohprMing",
  "key7": "3UKjmSqVM5bXjFFy85HJL8svaC3jjDmfzCbTGmAkGGqeyzzPVv65dFLNa8KFAmig2mju57MbaUCDBRHfboYCzaRx",
  "key8": "2NtPGp83oWHJGhdhpgvhRDEuEsHuYNoEXkcGjMshTYzMj8zt5cMDvEtmYb9NZctueAMRtZrM5VU7TNwKSLjJcPpj",
  "key9": "2CXcaiS2bpL5bekuUWKB2Z8W5RNhHsAQ239VZrhJHfH3hVx5wtDyr9AdkYgCshGxDNQHaobggUr3GnjZ5S9oLZJy",
  "key10": "x2uagSvC9yW171E9qaZFkujh3khfwgSVcmFmUHAWW9mLxYgD2sFAnnnqLSgy1ohBBVzjwV4t9KV8gRr4d66wM9o",
  "key11": "2tkTmNAcsjrhmaFBX8NqeSj5RNbwMgZCCYWBbZJRvMQUTnNYUByyqDoHS1fLYy1q3bMibKGuSXrmL7wiqAPPR89P",
  "key12": "5uAmSNDeWz9NCmMBPcBqbLaZakMqbbPyBRBcqGQS5tgWU81iQgB7Tjp4BavE5XaA1P6tpkoZZBQbEPTh27TMSGhi",
  "key13": "4Fc3qB3P5qax9wKFDKkj6ZieDxndURLwBAeFPNKKRWdaG9WkKnmxcRsfdPSyDsGBsGTr1yEjiz3UFENitTLg3bE1",
  "key14": "45cESUphupXhWriQ6Qvu68V7aAH2gBgmqL6n2XvfhSvKRdZ9cHnbYMADgqNkbt91BVi5qX7swRdUtDccfMzgGqpy",
  "key15": "4kWLJRWABVuAb2UFHSQFywC5SDM3rYnuurtVkevop3i6uUeVLmevZJT85MpChp3e1BQFZjK5riqqNZhoMV1GrDFb",
  "key16": "4dsDuDQgodFYBno6tVjrZPcPDFmiELinxwU7r3bfaGb6HPGkdLNpVHeADo1B4M9rodCsML3pspCvvBuSSkKN86nk",
  "key17": "7tKpJKZUZQrkHY4qZbxHDHUy44nFZy6nuBgsbMUmXGfaYmhCMamasLiih1hLhFhcx5WVKwwLLJcM1XgZPPSwdx6",
  "key18": "36V3yh3aY5cCSwBW8wJMwEQWUghbGEUVb4XcgrsUee71CGvB77v8n1VyT2WMmbA9s9po2txginNY8GX6qajHQoN8",
  "key19": "65iitMPL6w234fnzx9FNQ7nYt47UahnGuDM5cmNyi8FciNLUuRk49rCuhfYBN8nfHxTzkmWqvBpj7xdsNdp2BiiA",
  "key20": "67nP3WYheeJsLYWTEmLq5VxwaxKPMapcuQdg4f7xver6VTUvpxQgAT7BpiEX2RjmdS39XNKnXCu8ahQYFfYg8nzx",
  "key21": "2MPNbtdXV4tq7rxduHPBzPCJiYaP7aqXrn1b4bSqkawC9KAnqutWH4kRLo9YV8Vp8F6CJv1VR3EPpNiQm7TuyWvA",
  "key22": "5kd8mFETNQbMJBPcGPSTAg5bK7mCNXPpgPMCcAPemXvVf3qKG6tMrsia46q3D9XQzStjPestdbjcRAhQSss7sHzn",
  "key23": "SxUWJ7vqRp7bPLLcBgaDS5M1kfHqFy1LCDkNLWvVJFMJR2jfV47djUoa42CQc69t1Miar3gz4UoXUW3tTXroyBV",
  "key24": "4DtM4YT9PKpDtH8NMqgUwX8vLuPj9HwfzmGHhT6mSzCJZVCTh26KU43kZxhCprYEBbCH7qt7VAHyvDzmN5D1JhJz",
  "key25": "5Srz7cLPM5E825vC74xVQRztntWBEvnf6mgEpPwr7nSPyhBLzLFv1n8EuVHVWJKoXc1B2XeK2zgnpp7hpCThkj6",
  "key26": "3BcfBFha6R3Y4VT75MJeWy4YwQ3G48XEQrf7HQyrvPrNmMPqnppBVbrrS9rxZ67iyrsVZ5TyuxhdaLmX8k2F1pAo",
  "key27": "2dBmE3ctBkDuYy2qVpKkQhyCcFto3bptrrbga9YFJUQ4BaQwvf8o8u1Ebg43xqeCJQPPkdQjf6EQeGVZHwyFGL9k",
  "key28": "4fKmWfPAf8MaV9oNZwu4G5TK1EHJPj1xaB7vg3CTNykCM8RnUkWKvSZXJ8MqEwU5w3jqvehNizdswHHDNKxSxxpJ",
  "key29": "VLySMTSMrH7QdWkhEaSkAFdopacdhqeiw8XfeKDQioV3tLsCH97n49pS2xv1KJoMH69wFFrwjauTu6J6LccVwjS",
  "key30": "3PJhizxVSRuvAX9zAsjzLrHTVLkfCHCF3rhgwc7MTYcHxAWXENwZpppKt5hAXkA5ynk64KeiZyWeaaasBHAr7XVm",
  "key31": "AjTpT8kWGPn99TBppKEYVA3HnGvwWv7aVZZd8GVCRhAa6WkvSCJ65DUv7Dea37GUHqjpuXbaW2ynx9dxJ8Nj6nv",
  "key32": "2uVDTAFNeQS2Nz1965beFxoDrLTr1c4pWo4MSjozQHB492iU23mjseXJU2aWVGxnxEK3atXNFfXV3KjGb1GGyLu1",
  "key33": "4VfXDUgyDyvBapCXsqp2xCSZJG6cDPMkBUFaU8zwaLS4SmNXtgLa2df5EwftS3ghBQLwYc4UaH6nzr3m5LLqt87E",
  "key34": "4AUE9nMzHL89V6bXTtFJpHfj7FXt8By4VbQ5wdaJbFJEVZNmAwSiQeNj2Y8UXUDYZvr2uPnx6HmxDwY6toquBjKz",
  "key35": "4eKSLT5oWbDDRBvyusreHFzXTxixFKpZn9HrPRLgTe3hjw5qhwVAQofEkswsamBeiavdFuDWieuLhqm2QRQJEBvB",
  "key36": "5qUj5PRVBKC2r7jXkWVWfPQHfcomUPrwsuCTRviywQeDijPFFY5EYRMHLv1xowHakMME5vkFEfyEKUXF6xicasxc",
  "key37": "2ocPgPvLdfdLALyJeti3gAzDrFN7pv1xmfMwMNtxBsqWQDg73sxSoPsPf2Pcrc8FXWumHD96HWFJyr3jU4Nyb4W4",
  "key38": "4GNEY4EzeHv9hb8xXNbhSXaxvSkrgfrd9kb6NB1R9gXRpoJX1pXGpKjwiTuCRhEjkavLAAP59EFmzcBimRaZMFgq",
  "key39": "2PGWBCyHH58YPx9wEVRXyKH2RECEE43UvpqVoW7tESsbrZKE1TBR8FpDFWAGZLZpoLWZUqnznGD5RHpvW9xr8uyb",
  "key40": "5jFFSbQGqKWULpbnh28SNy9XcfQBgxdf7WQT5rqjwbicpQ2A9xRJHBTGc57RWmiMHv9xA4jhxytYjqr5ekU4uM7X",
  "key41": "3yd1DbZw3KSfGV1hqbFhdGAiSXFmEuYiVGWGaTwyt8MA9F8niMMeub2Wyd5FwMKCeCzxPvqTvLvbwvLZVT7ZaR6t",
  "key42": "59iuJHKVWo8P72Y1XsqrJwhxqb63bkBb9SfU1mufj3HFeJ7XjK4ww2nYZ4abvoaCvvdpEhEcyXaNTbvsXzadBtcN",
  "key43": "4cSRRW9uTD1y814Bsp2eXmXhKzGuxhPsU9gw9iWBd8DqZjqMSFw8dvfs7HPogARv86dbhjfMTZPYexfvCP1ygz8d",
  "key44": "2XmRCaZJTVKq9Yvyu5irLC6Xubc5NuuKt4yEamWJhRdJDRJYEEkzUAsGZ8KTXUWpg2vtbMzFXJtwbev7cw2fFsa2",
  "key45": "3jT3NGxRVq7GCPeqMZRsvVjV89FFEdnnp7f8jxiB5ym5DAZp35eU5imUMaf5FdV4iL6CZJauE4fvBAjERLnVkCoD",
  "key46": "y8Aof9b6WKz8vjPKMJvuxpQpEEkp32Tr1A8sMYJs98LKb9XGuAawzCB9RmAaFLxsDDZgujGojoPkj279wQHfmN6",
  "key47": "5sAMBZB9AcTeXYG1gSoTyPfmQpY8sfbGv8ZdNa2WFSRpMJu2FSV6FViMCoZ3nZR1Rt3PPbvT8cxq9BBVvztTrZgC",
  "key48": "2UvBo7qhAxBW8hTJ6Ykey1qSR3LXGpxaRbT7mcqyHEkYNEC3rJenSE32X2hYGiwJwrNvsYaD92cX2wmosyUt9SAj"
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
