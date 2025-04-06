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
    "2pLyES85vrJENSw8hCU4XRekTKBPzviyK5fqh2jhwkd2JfJzobJy8ZfssH123rEsrNKrXS677UzRN592Fh5rBZ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pET4jh8N8T1untjSZpT8e1DLyB95hasRPRn1TkfyJcQH23rHwbGtJbkjV2gw1eEZ2GcNy2JasbVHzFvVA3JBctj",
  "key1": "2T8e2zxPNhxqDhaYaecCPomFiMCqJoKBnxm6SF8pF3gR5g2aNHgEaw5gpvn9c1PnHeVG5yDp5Kuk4NcPgrRQvuu5",
  "key2": "kx2hGV5e5s3d1M2j18tXCcLnR8eWsMqdCfv8NwmoSUWcuUugXDTdSjYMfCJETgBedE6JoiqTKZPDbHjzA4BGYhB",
  "key3": "h7K2CnrZUv43pGZ5wZwuCqoeUYHsTHrhLY67Jsni3Xw8koeJo8dZUnRNFCorFAmVLCtoi3eT6qHabFEWrFJ46Y1",
  "key4": "2dgbB49tmLXAYq8J2LUsRUjvRkNhMTP4kexZtmD1GyC1P3fJKuj8mrrxAMwo2NhSWgVRSHwfwKPkRmaejRPJAChD",
  "key5": "5PSNZMLnMxGW5XnZE4Qt9wbvFgTpNwfjVttWCoj2P6FYrPBWBjRTaiHfMa62FbHL3kmKzVGmcZCjT89423ziEQuo",
  "key6": "fgF6oVcjn1b2xBUb7246VhChuiKyEw8CWuDrtT6CWd61NStyNjpiDDSXu45tRKMVFDSbKEJmBxpyV77Qz21Z17R",
  "key7": "2KMQzpqm7Q6tVuWXK2MjcEC8gKPcVCBYSMBxTz6t6VE2pRsq4vMALorQFHpW2jfABkDuz7p4XiCNxT8dtFtHEAQC",
  "key8": "3GdiuACFVmBCVqBGabDxMSUDU9t3fJ3wgXzdabDMFYm5WQyqZnTiuXupz9q9YzRYt5iyAt7sT2HEb2fQ9xgKt2S1",
  "key9": "TN3eBxtwfEWYdFtvqMCG7mRkUY3Kte9qnJgD8txBJzZs49cKdpiYwHEzKwJrm2s2XMJq9wPAKr3fTBsKATwG3tX",
  "key10": "5qui8eA77U59NmAeA9z6dYWKoRKTSZukjTqzEbNT5hSZmMz3UmsgAoMbR7o12pzh2Pyn1mra9uJ32s45Ufp7nDjh",
  "key11": "3FGxfa3A85k2AHyXaXuEhTtgnmhuKGvZWs8UQ6vHrZSNDUCVpGTa9tMJAqSbtdFgp6tGk3TEn8jqPm39qCkXnV1i",
  "key12": "3Ev4ibA57UhhKNbdnnNpGB9yGH4vs4pRatARfCHXS9hbdwoKC9wvkMEWC44AupYaRkAU8ywtU2GQ9KgTm14xaMWH",
  "key13": "4RD2fprKvZq9eUcyx2sfHqfx1ybMAxhyAu12cUdXWe6GEY1KSqK3ZCu72E3nQWoaa4h39rzrRgLhuXS92157L4S8",
  "key14": "3AL8G1yrXkugojfG4cchWw54UF5d6rvfXJED9xgcQRP9okxEZAW1ARCBj51fsWsxyLYsspmx44nFTC33Q1TrpMKf",
  "key15": "z4XRqzPoiqAyY38qj8RQ4rZWzb8eWqEun6DGJWxLDdM2Mb71da7LKtxb4fBF2vUGCdCMhdjBavMp7NWFWdcRb6z",
  "key16": "5p686u9iBvWMX4QnpGVx5reCC6RNTVTx3X7gLqHRsbXPFF2r5AjeYYFZVZscNr2A5Fnab6AzZ8okDyzbNXcEst4V",
  "key17": "5QMksDA8HEta7pduJ8uCXmkHx44PYXDeSUiKwT2tXexksdHVFFD2U4PAexM2Gh3fYBCrQJ2bL17xTkqBV5mnmjEW",
  "key18": "3fkrNeCRnovcjcCfcJoz5FmqQbcgrK1VRsL9sw8pzuLQAWZaifX53GAcmfMSw2TGziAzwWJJoPZDrup9PszcvcWJ",
  "key19": "2CZ49R9HvRGSzfKsccdFBfdR1CiEEFyzpCERqWw9HdeQtZFUgKW4ssiNjmbqAfSMK6CwkE22JQxpiBiPyBQ3BMQQ",
  "key20": "4jqJTKE85JX6KwPwJCx9hFRoo21m7jUuRFbDVaVQkiWmhi6sa8cwYA6xKDkp5GQJd7WCA4XnVvNskDBKvUQpyf8u",
  "key21": "5gQeoF4NdJvordDbqAntdsLD1YxvXtVCkNtc98f9BML26DhqErTmjNiUswFCxwRE2S3XHJP733Uryu7D4s5Z6YeM",
  "key22": "5t6ytziQfrwY8c53fWbhLjUmJXwpZdTzaEZ3vSpu1wV6vjJgrPv8Hz3jkn1FViLLA8AmgkwBdnrRSHKHrcN8npT4",
  "key23": "57wsSKhDb6HiAfSwPepxa2vySaUj5zZYCGFaTXhaGj5bFT3xrgXr3cCkz9b7KbDsW9oJrFv596D8iVSfKsHghKqV",
  "key24": "654wXXj5NJzYW14q8z4M2TuoMoP9FTn4yS8K2bMHqD2tprLgsd7FTbMJo62qgj8kLadVqDBrjVRSLoPaNCT1MEX5",
  "key25": "4dnUCMqzX5NWfxvaqWDCPp9gqWnm4PR3NmJB7rJAykApkrev7bEeiLHmX1MApoG6hzM1e5gWre9TXWbo78ifYshv",
  "key26": "4vGndvCz2i6JMersNbMdHmqwxhbmNcDRfLx5gN8JYA7PmfruHF9rWnWphgdDHxR4X9HhtoUMznQey2z726Eo27F6",
  "key27": "2uhTcbCPHpxioUKpu11mS31UtrpK7Ny6C4kB5psUEoFic7JEaNVDU158Gts4b1TVu7NyGenSx5WMANQbei6wWbLk",
  "key28": "2WEZ6czo14ifHPURLUdW2ctVGPZqCEWiqpf5iynQoqHNTqrTDVFJyKX95ftVLYzARnpxjHdZ9oAkvKSZ9VmTKisZ",
  "key29": "2HyRUzMtmdmrGiTAJh4dNKv6zmr1ckqctF3J91Zipk9AB4Rnhm5rjAD6PWiod1Wv34v4kmBQ3F5v9WqXAgm2TUGG",
  "key30": "3ajumyc5bZvVHNzGcKepQi9wRcuduaQE9fJUeY6Ycwr9Pat1n1xFAdVhf59x6XJzvhniH9zUvyjpC2whhwQmvX2L",
  "key31": "3cRNNfxtsUMdgMcdKuEZ5kEzBT6YrWpZiYekSo2XBRErMahKTRNCp4VDiSbQHY7KdDXjVJV1HJZ4prpnzBjkYz68",
  "key32": "4NEd7UHNyYXeGPEQLciwgnvTdKjva71Z3G6mTFHzMEGH6a3GjLdLanAs9FUAQSeEFxYDvMdey2EkuQjquQJRgGcf",
  "key33": "4vs6vMKpbinn3JsdJo6PkTQH6dtQspZA145bbTxiPu6LogisaFX5M4oM9ckAV8SyRXGDYBG9w7wgmEwH5XJCdBjx",
  "key34": "3fpLNBMGnA2i9NnufAiJ4w4cxF3YejkyLtj49kywBqH2WQaiQy1ePgnGGST2piwCizNSR6Xo1pcuUvhh5iXv7vw5",
  "key35": "XxGBCoWJLM6cbRnWmmTcYrGxuKfXNFPK5jmA85SynhBiiEqefQpYMDBTJA4G8FhoPvhb3BkQiD22GW4mwpZSjfP",
  "key36": "2jBUtH55YCptZ7CAscymrYihUVGzqsKceBeLykxB5CjEGr5qcgrL4xuk426UMcZrsgMeNRdpvcFkWh3Z5NA3CGzh",
  "key37": "4YdkxnkycBa9VT47GQQSZDUWbD97PGiyPAmEtVcxj5eVWzCA4i6tfwA5r56fzCiANkg1DAMuqQ8dtANGZ9vhXdNL",
  "key38": "2WgKUwXD1rd32BGnxrvvqYF7V55YXDogDrjBN63jbybqdSBgec9kGb1Bozehu5AG4Y7hcFS8ghPCqQjXSwvy2dEw",
  "key39": "63vEbZUBdg1Fx2F3SEdHzxJyaRs8fvneCA8Cb4KyMY82QjakS8isqM6sryF99QM1Xx4p6ZLYVeWrMPJvVyEKTAHb",
  "key40": "aQCpZng3xEVX1L84jD9SaVHsCKik4fsgfBSb53X4k2ZVVwRompgN5AqsopZVTwBHKgoZesg2C6FUvSPkip1qKWd",
  "key41": "5GS8DT7ofeeFvRpiSJiGfH4RMwQBiBqaFsmMTWhFfh58bKGdL5ewA1tRhWs6JRzYpED3fM2ae5oSk4MEeuoiTn5Z"
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
