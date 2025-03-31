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
    "VhYSfACwpaT5uYjB8x5X5hbwXk3976undVBqsEhugVMAjBrydJ3S6geYCoQVuMfitE7mpGjwioWH2D1hgpcwd3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZuTM94Ki4ieFJP3KttPfmGjKG3h5UKTs6JJUguFy7w56DL7vXJUb3gDFvwY1DpgrG8YfAdf8hSsy4cETKc9WRm",
  "key1": "2WtXeudmkYkoFo4JGbZXxoJXt3gVkvbPwL1zBH75KRE87ZYrGAiAqfxhP19bTifYSDXMCKTvmjevt2djfxayMUu7",
  "key2": "4XoQHNTXxE26yfi885sJmQ6um3Cri42AYrDcKdXG3Vzporpr5s7VGm6x5TT8shJh8UpPqYyUZns6TZwKmRu8FJcr",
  "key3": "3dZk3j8ZEgM81NmYJQsn7qcrwLtcDkTZvNYh99JunjdD72WsBid6igFsbAVw6dTg4vywzWf5XBSCYQjtcoPK9fVU",
  "key4": "4uWK4LQvkURvQ2SxD9CHugQLLzLptMrEamF725xQsFoXWKy3w3gvDgcxKx82TKR3UvwTusyzrV9d3FdhkRi9CSDj",
  "key5": "2YytbBvQKRYnKmavQBhaLZXmMWbqDUJsZtAtPPErpKEu8Z36d94NpPenc2QQCQGY73BDEfEeRZnbTtKLNWcjRmJM",
  "key6": "27eQQwe47jJQWRTXvVtGFiLjvrUW95pCgqghy5X8VpT3MJuFBLE1X6ZfJtGkmmpsFGePGjeXx8zDKsz4abE5A3yg",
  "key7": "2D5xMmXTVMm2n7ESTynkcdS43miNZEj4VcTTu4riyMGVAHHuveN4a6ruKPtg2pDUTAvh5RQkpJ77vAzPuaw446LX",
  "key8": "3JRJ95bjFExQ1o1bEJGZJ83Sn6nLprdtZDSo2vJ71brdzFZmexLTDumA4UxzH3LdaKD8cm3tWQmmSemTxndRQbvM",
  "key9": "5PD2dtBSxL1zHct431SUaqVhEvnYC2CAPBXKGHe5fPuR2xhBNtBi4WzuFfFyJHmUqcbeHjKGPCpDJZBoyF3v71an",
  "key10": "327kiskxUkLUvVu7X7eZqtWy2avceHPyvoEMcHWi8D4kPnSgZsP7ToM9D5vsfeQNFfJ1GUN9ynqRnqcL5QUQVLcx",
  "key11": "3uokHQ8kWBMrgHJoFoEPZdjQ9qnqyrVJM3p9zyse7SJX4BD4nPSQQaLLbQ7jcQHP4V14CVf9YmyudcVak3h89Bx6",
  "key12": "hqFbWHsVBswjFiNmpLbh2vpPAwAQ4fJMdNhRQLEzTcfMRsQ6g3Vt4uEe3RQ7pW9UZdm2itak3hN9Z74QUJCo9Zo",
  "key13": "xP9ZZ9UYUYQ5aMBFpV4Y1QBYTAnwUSvNAzYePUxTptEu8k9JwGctczCbnwK4Fw4CaJQ36AbTDVjX5TqdNpLspcV",
  "key14": "5CeCoSUdt9DutXDvs2qaNvLST9Zng6HCfa3xpzoni4KSQGXy8evgRWRUojUSK1b49uWyNPaKL9JGwpeVSUd1D4sz",
  "key15": "3RhJ7wE8tuNWjVr64Zgk26uFqNwsC5rMU99CWifQAx9zmMwj5n1WCSUqtSELJLjHp8H9t3U4YvyFTcxJgPJHaZXv",
  "key16": "39WYwDhYyyaoGhxinaNCFCzutTwD8auMFpjTFDPGbKgX21Ck2F7HPRr9jDGxuc3aqbGX6U17gqMFukmRE2gWZvUd",
  "key17": "5QpmgTn4Mbb9UCWpwHMg3HdpbguSvAZkvdKtTKxUADqi88wWas9dtfPqu81Zy5AjYzuy9ENMWsK7QmQU1YVQ3kr9",
  "key18": "2aZcYQT4pApwWcsJtVcAUayngx6nNadAtn2phBowEZKxyF45GyNnKaJozSBw2sit78XjPH7ScNfyrhLVv5HmzkkK",
  "key19": "4M2CNwc8PEVRcNmTCcEa54Q2ifEwB44wUQzhptNuGFELyoB6ff73JvjdJou8apjVU5SWV8L7ktfeT79FQ4ZrMKHh",
  "key20": "4VWrLZgj7WrT32qdUU2LoFVUf1BqDgDWA4jwpkDjnMkFNUiPUu52dTpy2gv5nPtKMUYFX83uLcNVMrUsZfRN6WN4",
  "key21": "292PaNKpqVCxQpGEkR8Tugz6PePvTLuLBh7ucJxBRwAQnRgGhmouRHCNR3pLBcvTQkmEYnDgKfZPiDZxQf38U9BS",
  "key22": "4ru4hNVQNp5wbQDxk28Z1z2S5bHhHPf7BQ7MFct91y7QM7boHSrkrKS4fmJ3tATA5wtgAWaX4jVE4A2DZaCrpcEY",
  "key23": "3b7MC3ZtaGPQcg5135NiyVedBYaJQu1SjgoxmQjyZE5zghqAQpG8atudDhq7UAT7GzhpV55uYozLZRsv2bo1GDAQ",
  "key24": "5LuBg1M1sjhjiH5tQCBu7ggMdQ3NxV8GtAbtwLTte8bHbvvbyYgBhYWLUGBzSNZsuZGzR8WkqbrXArK9E3vmHdEU",
  "key25": "62gGtRadXsyT5xAFGcQCZYqPmyUNHxHUhbCB4MgNtSQbd4pRGJoa4XYdwbZovaCSATTe2qcmc79iGcXX4TNkQ2Vq",
  "key26": "2uT7QeRNqLYpYyGD89LofEV96cokQjdW5Kpwfzo1MR4wDXAgMnupoban1BXJo6aUcthwqyMdCdYWw944JprBUKo",
  "key27": "2QYqwa7HfpRaPuMzpNujXYFDX8sovqsBgTfAod5yqGu7K3z2L42fmZrKgivrXVuDT4gBVXns1GKgdYi1j7jvHhJ2",
  "key28": "4ajufKRCa2NRsotQ2rSKqmqEFDMg7CrfYFivzqMwguDX524hbGSsZ5CBfqRr1f9ASafB8RETei1ZceC71qfizrQh",
  "key29": "o9cW9Y77gFLT9LjfE5uiHqWBWxixGWGP7EELAcCdruo1KNFRdD5f4MpFCL9zK4ME1WQGU1boc1dJ36Dy8oRtQnK",
  "key30": "3qaXx5gHzXYoFpAxGPVnLn2uxyEX1siJ4ZvRVsjdxrKNCMvYUM8gFVkYi5yVhJpyazBRNswDGECrVAgb82im3K5q",
  "key31": "2DCGMK9fshtw7AspQzv3oaAp51cgCuxo5ZgFkXzUdrX3hMuHyiSGjS3Da3pxiiGoyVfH86g4MDKhfLVikfG8NtyF",
  "key32": "4ewC66f2Ve9UTaCeYgWzt5n6w3XJpzG1aQgx2TZH7Tq4VpZvL1CdyaGMUvn8NExJ9GfQZ5zqZXrzEdihm3H6Jq1o",
  "key33": "5dckzqrVy4eEE3JBVgdvUJDLqudk36fJcWxNWy1BW35RuCFAk7vjccPFyiEdju2Tf2KMsohsYovUFSv4ZHESCmSq",
  "key34": "2StFGKVeRdw8UEBvx8caT83zSsWbebR6mDtMrNKCdnDKz54XoUHcThHfaFpfEGUjpEuFyaKXbaWg7fzGG5ektwxW",
  "key35": "5f71Eu914QPjiiTej1c9CYRnzxZ36XEaZoaJmakuchhNqybomV11rK8UQX8RM3RakcZHCesE3mA4JGSSbAJnveca",
  "key36": "95mmqwmCyCmr5dTWo2R2pALVqXnyrWcShoG5dHS6MtPjhVoCDsnJTcF9QrhNW5cC5AfK8cuNsf9ESZ3Sz1LFdkQ",
  "key37": "jwQqDgWBUcfsLcpyLX5TSBuXSDcP1j9WVdT4mgmfxw4TjkWaYoM6GjsnMyqgTzHf96G1eihGkEVFFthQd4JmHdN",
  "key38": "4xCCeKbYoFWPkeZt3nwctakxe5aYopE7C6HevcNN9eyXuKVycwN3HDLSpxyAacqPdKw3x9JfCHTsu42koER8yYNw",
  "key39": "2WB78nkA4Xqjym6ZAnjzpVY4yNRFVovfW9s5iMen8p4xPxrHfDfgzZfQaAmg9b5eko4YKHc3Va2r3hxCbjMGu6Ww",
  "key40": "3GYxTYRLYzX8Mar8R8zHXkqUqPxpctm18TwYRpmyQ5pfdwqafBsqtvR28ujFZnsLBVbxBtecGMcRKtai9TGjeRMi",
  "key41": "xKRnVuWYUdRK8xxVVZ7oSmFkSDBNYjJocBWTefaaSzXC3j4fLXYVX8UKMhTWmpXNzur5gZvM2M4kUgraNCq5ZVt",
  "key42": "32xh4vK7adFBAUHJbHA6T5upe2RS9YxiJGWgpm4wr9v3w64LgWkF3WtYvWbVTjH27uFArLXa9H4LQJrgzZrvtfm7",
  "key43": "3JFrLPwiJ8vCGvM5YYDMAf4Dka3AJWKJC2oGz5sGU25WbwzUBPdXaKBoYUdYUVkE4GrfDahfo85ssnk81adADhqh",
  "key44": "4Vdgn82xqRNZR5FdJm2jCwjnwc7sTPsqzWjNid4UQ4CMehfTSFQwFpgyNPTg1dGHSfof2FQHFUE63LQf82w39zup",
  "key45": "672s7qcxaXYZbu2b5ErKauqkEnsTW6SjuVNkiE9ymcpJxp8umUa1rNnmpW6PsWc9JBaViX48CsWpYmARPy5bRY21",
  "key46": "4ZHacmmKyRfwiyYyuPMnVgciD5rijk5g3mb2kYB5G9Fb9EoV4SgN9NVLLZoeeL2Xngym4SWkwTv1ozKAb6RWiSHm",
  "key47": "59Cdmqrw5iHgReZhVjwLkdxSsFxcFK79WiZbpEAf8cScQnXWEhEudYNpUT39WY9kvtMUMHhTiwCwKuFT7zbx8tuu",
  "key48": "3HU9D2cjeQe2ua6kTPe1Cgeq4jQQ7u8yUq1hcJE8i5PEscCyV7uTN5cRMv6nAZpPToxeiGDT1dDxWzWGvDjvCJ7D"
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
