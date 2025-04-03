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
    "5HRQwvLYV2fTtdNDNaVbDUgvD255KR6ptKnrHgXLkjU9JhT7qXhp3gg4FhJcwh49oRSaU1SFeCX7nHvwyHT89ECj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u3KGRXe8pFq7BWEAKPcvvMfPJNqc867hgeTBSmDMU1gyhMKutbBKtpHTW1sanqYUizhGpRocddGpabDLoMqPYbA",
  "key1": "2raaRmRuVNdE835uRyZfce4t29raqNGJ6rae5ktrGGtiAs3zc1z9dAUWXsL2KrxFpcGuhXb5qVpe3vzgzCL5Cb6F",
  "key2": "31iKPAVs6HQusm9pjdrUQn7yGJn6d6fgeEEGBcSZBxznLx8X3SaKMyH9WfKBdtmqA2rDfYV28BpMqyVW5fxvncj7",
  "key3": "5nGkjz5th2tQ5PruCL1rGDKFtVo8aaL5dFioFZw9u1yMo8Rf3noMZZw9kycGjrrpko21UeG6JYkyoGNYLH84Y1kM",
  "key4": "3e5SYx7HZewAWSQkHXYpmVcHPuwRRwi8yCMPF1mKgZndsgG5zynpmT7LNrbvKdGTN3vFhfZfcagyxKQqCsuYxWxD",
  "key5": "2n4CVD1xpDLEYSYBEmfarof7RdyZryACUyB3RiAQTGkAE8U3odA47TfWTUgf1oq81Eysd1sGRJSrdSKPuhMg6sQK",
  "key6": "4onc6is7JB5LmxfhhZRYzfuvcxDGmnn1sEgRZNT6AKHNGQcJtDvd8d18ZgjNWB9NTqPAoqdV2YuvhedA3RWZQiQY",
  "key7": "3Gw4oQmL7X2EySqP8a8Ud88mnrb6BuQfLwdSc4Y63Hkb576u37DnXe3STgewhB6RmaNZmRSU8zL5aXZanptZ9w9J",
  "key8": "5Xf6783ibo1aeXTd1HJucSgX2KTQueN2UFMyrfLQmYSthRehoMZyCkv1DBF8roFKrsMKCq8pUCkYwfnNaT4QP75h",
  "key9": "3u8NsofYLdK5U7G4nLNhDpzZPhxGUc1z7dtfjNrXDaFSESZar696kKNMXjDp88aqudSeCvGbdPfHbm7uXp6rFpXw",
  "key10": "5mEU52TmErF6tudPnbeyPWgRJbh83fnDfBoV3tYvmdw1xHmVXHfjhXsBSmp8wcqUnqLMF3USSKqSyjHD2R8hnk9k",
  "key11": "5WsMqkganfDrfvBadTT74fmRRewnPqP52KyAfPsts86ZPpKA7LWLxhifG5opFgqLcR1E5rup9ZfzFGCXLkaaXpQY",
  "key12": "5m8L995f2ynbqx4NPiiaN1VfRE3EeW2pTASWeK7Tr3TPue22A9KkQHjMEJenF5CEDp7Wt9jErHjc8uco5cq9Rp7Z",
  "key13": "5Uda1NovP6VqEzkvXp6SyKhPeXAyuLgrZwuoBuu2FegNvKsendFarvRnydDM5yVbuizmqXeKofPsTYy5Ew4KjkPp",
  "key14": "23jTcrypJ3vnUcKx2gPUaT9AfTS1XNtkFqEdtc1vXQ1rEqcVxRtwarig6SUbve2skmvc6GstmNmvVYdYDysjmVg7",
  "key15": "4NVpcEDt8uS1bhDFNLtpNbc1AhwSat5bHdnPxAtf4ru1jy1fLUxQC4Cen2CfNqNFoPCvaUkbsBsHGXTyyMx85xKH",
  "key16": "5yhhvfVv4VVXQ2kJsDZpt7qCKGRfFRiMMYY1dSActDgfRH3avBPhrJRqizJaRfiAp8zjbjWyh8YKKSFrGocQTyup",
  "key17": "4LaDsursq4vJmU5FbjuXRjsTd7FDaH5TqSKoFwaP4EYKqFxKSBD3YHSGRUh87MTuoXi2vFhuz9n6wEtpXsBGPkyw",
  "key18": "61iHuaSFiu3PKsj7sd9KxrWYwrxwKF1h7PLiXF9F4rbcMcc3TYrzvkLnxGbb2c3VE3qfvV6pGTTMRufZ3nCkiqAz",
  "key19": "34MBihZxrauZoZApMJMgWkwegxXhg9vRZq8Kf9X6tbyGHTfHHvnb2WcPhpUpnmduyrEa7GmLpqQHqpe2xiwhE2q7",
  "key20": "PBwSXHg3skg3QLRhEXzFm7odE5RzFYKdkt8gQXniP6qEUCA8XxWxfNHyXYgZb5G1fCgfbib8Qgs6vP247hhtgGL",
  "key21": "3JBRc7p9QC9AeCs6g9ex387wE8SeMqY27EaEDAZsi9RKHmz2YYwe6baMJkZwR2DLuCwmLTgKFhukMY3kXGQcCEGU",
  "key22": "5uYrWodWeeCg6CComdoXt3pcyChYpzrsPReXrvaqu3ft2nvznomVWhVeb9X9BHCcxQmQfjdq6CRNaohM4YNgKNAg",
  "key23": "2vEXkDwrwEWQugYdhGQmkJrqGFwSyNppBszd1FeGpugwMnErRXNdaPbBXgodR7jFWUEKrRdz1susBCtczte1gV2m",
  "key24": "41AcmCRxhGmekVTC4ufTSBJJePKfSEgLaFaAhoDH444a9UkyGQPjig2BASBPLRERjyANdcZ811XGEDzkkAFHEJRp",
  "key25": "3Fjz1p6aPfo71KfKPPCXR92Gx2LsteYm3VZhguYfFrj7Wupjy9P83sMUHhfJ783aYv5cVUsvyFsHxfg4o46zQhKz",
  "key26": "3Yh4oeVR9q5NCfByociQdW9Z2Axez7Gqos9piEEtpHgcsVncGY7q4qEzMfZ4khzN1atnkuDFNcUbY6tvuysm7sVs",
  "key27": "knaob9hDvRRBFPDmBFjEnZu7RwB1pMYAb9cj5ruCzaqDGRYquRNMt7Fg1UEKoWPYDD8eTRuXDdxxaKfy9sNnsyN",
  "key28": "hx5rotBDGJua5iv7Zgzau4Wyh93eLcUmwn3ETVg4mpLBp5Zqiohh5erXNMsMcWgjrC51XfCW3yYAUgyz7QpoZhR",
  "key29": "5PZSJ4YY7iEEiqj8mxH8KVYuYkTDYb9no2AGkvVbie3WZNEyLWX6XdB8NGvb1iHAKFe5UuAbsqnFVcRpz9XAxva8",
  "key30": "3SuXBwNwciTMaHnbAESLX3zmhgw7VVpT5X8tqG3ZW2XBQTBGu1d5r1LjTiUv8t1fY9vVzkAHw8NNVDNQjRDaqM9F",
  "key31": "4thn4YtcmFsbmPgRATp6cgEmNjWrTWwTTHxEmEu2LaG2kxBDAYtFDhPPepdrx5XvREim3w1hrBcAouKE7WHaHWN2",
  "key32": "xQv3U4LPV3k5uTddBXfmESKTUzTJbFrqGftQCqLLMYGduZ7jWF5YWd9fA9NAe2xqXTxE82PYKVMGMTG2m3KHK5Y",
  "key33": "5sefaX76noifkfugQ5VFdBsW2hegm1Uy2d1PXqKGCwzc5ZqTLmgxqZSdG87r9QZu4JAF7f62zbkNvbfFZyUpCgbD",
  "key34": "4C8z6dQpuBYLS4pqS82JGtZRKVApQ1DQZuP7gBAtKp9rbK35Vaor6onGwztpTAQaE8XhA1Tr93RuQfH1meZ51wuh",
  "key35": "64BQtfjUnDszXQhPqdLY18wD4Mxmf6BS8viPQwi4jTjFYzWryD4gDAsZCvxTTr8AiNhLeeYcbaXrZf72jnZRUv1K",
  "key36": "33iVANoq3p6uXDR9HtZUBByxSqqxUuaAoNw4ZyeCFGYvrT9qm9bFuiLt6UCod123LG2mN1hYpWAQ5nr3rjG1cVL5",
  "key37": "2xPJUicAfyrqX2voSa92oPb8nE2Eu3Mk2K994VAueeuW4mnkntQdWtPssYvGpb9tY5thHwmhHgk1MYmrYtJH2xoa",
  "key38": "5UMuinqVu7U6f4eBy58azNTzdc6EVdHWgPqvxFXM2Sg94hMPomAWYh6KvJtEBfYFVWfYFQuxio6Crq3AcYnGKxJW",
  "key39": "4cnB16YtjAchSQi3yjBWTgyEFZVyY7KBn4GHimmUMqrTRKrdrYPfmyotwg2gEJgRoRB8PAe6NqXggqjspbZrT2Kc",
  "key40": "98BmGtP5HvKys7zaDF5Q113DnYRTuci8ossW9h9CH25NDpswp2qD2cE4v5e3fBsZwgEEXzCAYDhiX6k4iMtKPoB",
  "key41": "2LyhhSYskUF4a6xqXqP1Fm2Sz7UCTkDJRALJFarf2qh3h5piw5FMygCWzZYx3iSuKcAuECFrqDznm1nLh2qkSZz9",
  "key42": "3XCuFneS1vFqktSkFjTHr9ATUHdaYeNwn18WjFnhAdnGNYbyhd6qVLA4yQz5vQUERFuCxuqoc5XaDAzoQR9ipBfa",
  "key43": "5nbnAG7YdoB9fYmrmWTNF2EWJsKEPHKWYZ2yeQHhhvdPTPBjrAcEWf9RZV48HxwAnq6kuyuBehe62iTvfSrXJASt",
  "key44": "72jabHnPAee3PPCnn2UZjJkuAG1PasTtumfhESBi512cGpoJ4yBwSpuaFBg4Sx9smqvtWs1DnxiKECkLhWPKHPX",
  "key45": "RHrFuzRFk9Pi9bvu1GGQ4YMoRfYs1n99RtJCicab29TjFpAJybtwQUiT7jsnNfzsjofnCzxW813Uoqgsp7j5Gbc",
  "key46": "2rkToRGaoK2s4a8jkkmKniZ7hUK9kJBFGfWiPNcHJMtBAsEhS1ueCMGmu1r3BRqPKbC1hbTch6Z3mLqy7zqTwMSf",
  "key47": "37NkYk5WZL1S35CPyiBeQbcBtxchbA3n7jUgoHQBcYzb8nLsQfdfW1JMUyHA7h8ww2p5bM39w3qzeQosvwbkkffs",
  "key48": "6p1s9Y3QUpUZXgpar4wdmqp8qqU6yYjQVhf1GaymF8dpUfmTAQAmJpi66WJA78GgUNaDKW6a72xX9sMqfiM3Amy",
  "key49": "129GP4qfs4e4DeyXgxY4VwndD4emBBSzFWJJP3FDwD8U3KTeRHpd1NKourQGd2feF91UXX7MommHPsYvtcegXvER"
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
