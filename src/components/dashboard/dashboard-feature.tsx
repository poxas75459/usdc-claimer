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
    "3qHoWXQgwKbBDLiotQKoYexv97cdKfzxG5SJQrrx5zhZHkSAaGH9pS3um2RAPz8AgDkDDcnWsyfT8NcUqMdwYq3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfxLpqeYPq863wvqfb6Q1nfefem3yGyBuSMArSV6aVycDNnjiX1JUZN7tRRVSdgMWNoGK7pJUUsTKLxCPTStE3s",
  "key1": "5is58CVhxQ22d7Gs1bZuLgHMiyzgAyf1VJgtYmAGAwRN2gqoEcp5V6VCPrqLvUvG3FbdFUMLvDYovmtksQVobbrF",
  "key2": "3EJtC4jGWTnFYHmBKHyxoCi3hfYFfuDqAQvhEtbq1pVcZZTnt2TQxhLuM35afSEmsJaeXUCHjqN68TvsiGBf1kfb",
  "key3": "ebBueeS3sbJhzF8Li3AhZkN82xyJSGazphfxvyXzBYpJQqt6hBfPZjcU1PRxrDWg1KEzn6w2sdKiSgYySTctnNY",
  "key4": "XyV35kQ4AUWVZAPTak9B7yHWs9wJ1SFNL73bBoGRhoUznwr9JZLWmvGNezKSoUGD37MwmFoFJvFseYKMoijjyV2",
  "key5": "z4WaFwrzD8bSonZBWABt3nSS38Wpb6arbvUPow5zexpC8QVNXReYNzgU1XiMQwh2QQaHwWP3cwBG3p6ZcVsBy7V",
  "key6": "2N1w7m5jTLQzaUcSH3DPPkQBYCJrCSMLFf5HSgvaNTJmfDJXPfWEWsVw1qW2RvFtmq4nYwhjZmT9ru7P7niLLMNd",
  "key7": "5aECb9LubP3Spe9oWzZRLL7dt2jFv6hK3qWRpARZm91wirxk9s84uUsgQUdsa8LFpEvooJuMFKYoZ3ppNpFeaASJ",
  "key8": "jLPit3CnjsqQpgTvWtAw3ETb1WEf9V7UPMtwPx73HEe3o4g7EGD43imWE5cm3BBQ5EBtnhcEDbqKGTysL1ddFav",
  "key9": "5kN2qFnXwP1DBW3AppNjtDB3gGjEfCXLtFhRdVPzCqyC4kVd4P4YNybGmtLhHb3K9GWVyKa1HTzMktNQVtvNHpi6",
  "key10": "3p7kMVDyU1TkX5ToF8Uudgu6b3izPs5vAv8Pze292H61sEyePke26NNv1377VzeD2Fsfy6LPL7GceoyukLF9iRrC",
  "key11": "22S7d4m9WTT6CttVTrTSojWy1MGLU6p4mbz2FjRr9x3Yp4VxzjR9ZqaYdXvPGZXgKFrgVhmU7Fekv99tHhBumV6D",
  "key12": "54vepokv5y9ZHpxqCdzpfZRXYMyVhdtq8AVmkYeQYLvZV6Af9gJ5o6PTUCbRmzhhJLKHNPftHuH7Ync5bRp6FdXX",
  "key13": "iBKN7tG6GF1eH21qjoaYQ7P1QW31f7yWeB8veFNwe9DKJ538YGN3PHxgeCjwyXVChkqt5cyz6qUYztoABLsGMjn",
  "key14": "2X2F3PhEWHehTvgoHSkCk85B6frQHJAM87izey19vMw7u8bBTDKfjYRToPKEKgVVS3ANw9raKYDdQNAHeL7EHzeS",
  "key15": "Ri8h6Ge5Liiachqu3GBbm7r1Qie5uP5Xyb1ygYknocr2NYQyv9VKFYcH1e2yZ5fvmXNrrptPTZMd5BfyJyr639H",
  "key16": "299k1gzmRuBAU3EkaVw4f4LnsqrLnQ1RVUAzEhoRBwZBo1cePa9H2J2ruHKiMU8r9dDcxpSYwzKg7hZKYn3kf9hJ",
  "key17": "5kiEN7K22SrQ6MG2QaPKix9416HLSkhkg3cKSFk9hAacfnzRLx2AJfiY9WxK5DSkZNtPxdxWjTzhAd75jhSotPF9",
  "key18": "65TiFMy7J6h3jLSk9d8Hy9CzwXeReNrbRyEZ5sQbzo25xnpuMyD3NKvoUfuhxKWm1oGVmaAtCmUbwAhi8SSjc5gH",
  "key19": "3sgrPrwbGRtT3MXiM3VWTXwK6HmCgYTjYy4NzRhZk9CH1N7c6mtMnyVnE3a9nKNcJRp7NWxWTze52geSmkEPQP7r",
  "key20": "4NY11MGHQZrmBewSGPUSvQp2fJBN69PBeyyT6gZnN3JpTbJ1g3XC8ZtaDwBu2Vg7ez3jDqDARovpGLHwKxN3c1Dm",
  "key21": "5yhffFUxspf9dZgtPRBHds5TKkqRkTXvKGJa4yXDXASZY6rMmh9H1TX2i8ZkcgrceeuQSoWcAe4nAajW3cKwTB3c",
  "key22": "4hzQWQd8QHYpD3JE7VJzSE1zgPy5pDEziCt8dM8fnuYUgsR7K838xqKDN2HiRsLGq9uqWM3bFXe8qnmKJ9tQT9yS",
  "key23": "2s9JLEaFaiBwEtEogDbmUNYkR5HK6KwMHxrsdJEZ99XXXFbyGdAqxAhyihf6pvBpGn3Uk7doVJUVAYWufNMxDBAD",
  "key24": "5f1PcgMKw72WuRneT19WipBjUZz2CcfbZUU1A9rAwy5n95nVEUFsYB9myu8HLd9ZgtCxm1sH1q6AG3UiQB6jf4n2",
  "key25": "64DpGRyMtSBDJed6a8aMtVF4CBGgQk9mdG5dYCj8t2PNWjNKKAuUfZePF1mEgmkijiFk5auhoTfEJuBjbZgr8rZv",
  "key26": "2wuiGHvY5vL5cngpq5DTZjbjCFxrikesvzuXBuNRjjwTxLAZ5bt6dafxqfda32HshCgZUBwD4BX51o5BLZq4L1st",
  "key27": "5nim2MJPm67v7RcFo8ST6oJT9EZ4hwbUnVsHVvweDCAGvhUJY1cKzdUQMPgCL4xkAomgLJP711GBJ2VKppD9MkNK",
  "key28": "2vbK36SmcCwQLGbbqRbJUNvYDbqtzntogevQ2EvFytLiK44Mpc2FVjtUyqwmY6jawXThhJi7VuENed1ukkomi8Fz",
  "key29": "2vP9Kq49m3FERr2uwQUG3YGiAkuCZtFxFBJzT8e41gcALUbtujLX5HgmB3PpswdPuPeQnrhM2pqYaC2C8MWGKB4v",
  "key30": "EcQynpD7Kqf4WtHhUuaK7DrkEYvaZ4Umjsi79qf8E8bevuXkviqsGFUa1Ukv78DXoohUFYcHCc3eqKQesF3AMDo",
  "key31": "3poFnWdiKStshUkP5mxXqsEz9L3HsBqsQ32WwVNhntA2gfZVFhxbXuW5WcPaQU7UEkZwSSeZwjF8HZzndh7GsM7q",
  "key32": "3ZUG7kJ5pGVdFNSSay4wwqUmDW9MeYsvxBd2ZUa7ZyiG8dUjaeAgGT695Rzf5zE97PVYTZ5QdMcQycyisQjdqdQS",
  "key33": "36rQRhABPqGJcDTKpbcwBM4EEktgsWf3A4hionzLRVtRUcs4LDyQAQ7HS5HsdhskHCUYbS3k41C8wfMnBnaeEzYo",
  "key34": "3xJCvKwuKQkmWFyGWWSwr6MGztAtwSLw1mXynY7sJLDTK75BE77wJ4QMaKSP4ESsUnUnHQGxhCdG7mzpNATCAv9E",
  "key35": "61cJRB5cSLw9aYWrsYTGkbJKk9kWnLWZoUPFki7wDR2va87Tmi2LHgC8oKUvzeU3BWUmSRRbRB3Sut5h13DVi5rV",
  "key36": "3kejjmvf4ykPCzES9noqngKWV99rJVAHajjxPSaa6UNDkJQkHtBGKfKBT9fS52vR7Vow4rrPWYyQ7oVAHJ8CX4op",
  "key37": "zdcMY4UsAL37pgHVRKn4S2rokpT8rVVa6jCtgatU3E6dj5RwD7Wr1sRc7xZMRpQaSGtiB1APsW3yo6x64ai5RVr",
  "key38": "3esFF2FV1YZ5PWU4fVkWuzXbgdJiBVeWb2KQzBeBpwWpLtF35ZdtHpo3SdCGTZgBghT7VtRwMMNbanBYA8ZpRGSH",
  "key39": "2oPakdZ4F58X7WCMDJnqqVEipfNAA2NV1ohsZGNxxpXXjLVZwK3ZcmvKpSBizwczrGGbBjoXpbyZkKZBvMA4khps",
  "key40": "5mMtU8XngGqB882uPZDkQcftHmW8hXCMLZKcohVETi13bEK1EV6kckjkeU3GhG1omngivUGVxCN5vtoXsrSb495x",
  "key41": "48zfTSLudchWqUqE1vYJFHNqtKWPCvXMsAsybaE2AA5aUx2BJ4Bg5FtnDRPfF2SE7ZjL6bAgcQNDYp6QU3PcWBKY"
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
