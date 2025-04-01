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
    "2pPXbTGxakK92BL5e2pjGTSAAasWxSSVYVLQ6K7jPmVftRuQh8i3jRAxhnLErYoDy22LX23dcVcnv41VzQJV7bh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ky1n2e3n3okHu5YXdL4aBdiGeX9RTYA8QBH7WGdMrGKAVnicJn8h1Y71XLUAzCXQZLjSzvWQi5RnjPW1fL4HjGj",
  "key1": "4nLkbyEdBQsD7GQMcdFrR5yxBuogw7Y7z99iJPJCVvfTqBeh5FCwu7gsSGRXroXrpqZ5z3TD8kvfm7Uh1WS1hw4v",
  "key2": "3yQ3qTZfTystznVrvxyoQQsm7uc5EpRmGvvZndNfTQEsCWLmwNVNGxsXRTas8746CFWNdTeFRGvb6JxYxvEWBgF2",
  "key3": "2aQsitSPeHUz286FZDYhYG6GqenCzU63HDk5DK1zTrTYq63Y4WPV6xStvNx9o7H9L7nDL9pbubb1jgWTbwQKcuEq",
  "key4": "4c1eysPVjuMwzYS17v9f6Cq1VAVLkhcLCYUn4UqXrwDbYcKgEVbFeSe8kadyMMKKb7sNhEqP2KyHowYmbgvpAy7",
  "key5": "5Z5WF2AphatkcEgzKQSMPTypdZn51wrZWhXD87aL2tFfCML26nY7zSjMzhGK2h8MjsciEUVyyGYyVvtbCHqe8Nud",
  "key6": "4HmDk8NTmRNcHdnKGnfZaBp9qUfLPrbdQDVaijsXPPJCNrQKEsEYDhcHzWiHWYz7RSV4GAcWuHmAo71TDbSsmozA",
  "key7": "4j1osh3XsXxHKPkmHipkgRXUsH6UgNm5jeAQDjwjw86Kn2vGFTLfZo3X4qjLUoWsFoQhtU3GsKDhAmZT5jUGjr9q",
  "key8": "2FSdFb3GPe7rpNYdMe6kjW1oYpwkbSwXsLPTCur69mxFnFMpDEXaZUbRXTQsvANbeSfEguEWvDc6bfCCLTBswaqa",
  "key9": "5B5UhUmMd8QRCdvYCJsEheH1WydoD44dukeRp2Em28FJk9dQPvs3tDGvYUEg9DiVbCJpS2iuwLhDth4eFsY7ZsgA",
  "key10": "mJJxR4spHV6mmUhS9R53X9oTkGyQU5yu4pZCbY8vvCQTMBQG6Wi2ByAW6quKexJJBhZCwkEoc5mVbdzhnFvoe3y",
  "key11": "X5YZTp6tn4YWxdjgG1qrwU9ixrc1EqQTsuML6BoQEDUZcaPitJ1SCqrDCyGC6NrvMghtK4M63mcUZA97f1FLfxX",
  "key12": "kuDGNvEoKSXuKMGVrTRT1hZsiEUmkB7KAHVhLGpxsmqsMhP2g37ZSRcbwmMXocfXaehUZk7Zs9FTxrsFZ4miJ4N",
  "key13": "wnk8HXDH3AdpsHCu6sJDRt9cnggErznRaDqnRQk6FU36Mhiy9X9bEsqJMJkF9ie4FFhdzWGdMoKSKnDeyroe1L5",
  "key14": "2FkBXC2wEsT2tjwszqFNi7JByfrkMSqc25Y8pFuLcQRy6eTamY36mq5X4JrUzXqGnL2JdjygP9LxnThuFwKbgMhr",
  "key15": "2hXyo1PSQQxap6sxWbiibFRgTZzJTxgCe1Sk2dTvnnRDKbVXCPSyCFvu7bAmW4EVcWjNCFiq3FQP8iUozjAbDahY",
  "key16": "3F1YbuuGcHsJMpUv6kdsrhchQah9DU3zHSxxmXXi4JMNt4xHbUptdftePjtcnCmzmPruiEV6g98tmYxqUEFFeYJe",
  "key17": "5MjeBtprCRAM7Ny2BAkDdFHU8FZF6Az5T5WiFAWvxaL3j2Dhnr6dRiYDAmdtSj7WG8ffmCbqgbLL8rdi8MnoNP5J",
  "key18": "3jBJEe1tFLpGSJVhEwUw5AbBztMCrn9YGvJyfdY6nJ7QhPSa9BnnUcsZeTcZ2gxXQsRN9AnFjumBNW1nxo98LHaU",
  "key19": "3chFch1KVkFkHExA946TageuB6UNyEa8pDxheh42KCeN56MvHHSigt31NVJvVn8U5nJ2t2MQ2GqG2MzAec9nZkxP",
  "key20": "2aFDVrcDj7DGk674wQV9uYzmwvQXr7D9fKmmXBm7JhuinCBKKGHsRihWojfpyPv9UJvzj6bCUjdwyzsuaoBsst8e",
  "key21": "4FfhdVtFyVPT4TUMwyE1moCckQjVQEZ3QwhKk3ewRRpfkGbi4AGhgMRyrNfEwmo6NpBU7CpPMTGUzQBFZbvAdsm1",
  "key22": "2oZSzGh8HnMEe2S89VZSmYQqy3pUTMMhYcZnScQwAa3t9LqDqmAc6Exsv5TwbTNYQVvUwbgUkGvkrGytWgjUKCc1",
  "key23": "4R7mzmfsyZZrw6xicB5ZoxHUVehk96n4fNF72aBwFTPXztcQauV1BioA14nYVbLnMApiMqYuXuFeqxMetA6mawAR",
  "key24": "3HDNiHu1LQNsn5wcB7EDrNs89RytVKoexqkfoEajRrHLTiUEVE6VDimL3SXZFq3oaGZwP9KKBSBH9NpmLTfzQ6au",
  "key25": "TDnEBpG8AeztM4e6UmiNEKp6NJtqV56qAkujqsDvrQHQ5ptv8Br7bRCg8Yd5JtUoDpZoJMtUUjjuZBYyoDwDTgT",
  "key26": "Ucf7S4kvhczPTATfR1wUim2JwvnBFdXie2NpLW9JdpCJTwqz6ftsJ6ngmBdY21Lep4SHQYnLa17UT2xns5rbgWs",
  "key27": "3eqc1h6xQcWt6Y7Cv21GiK6bbAo46koCTCsj2xsEkNJnqTFHYWVR7YzwiKQwPkHZEp8H2kLZiumf9veBSN5Ch6o4",
  "key28": "2338Daj2wwBjueyMTM6CbGN5sYycXEmQtfuuYygmkBe3XSZyhiJeR63TAhpeY75gS4zwYczcKrhB7zYjxamN1CrL",
  "key29": "3KaLwbvCWT4m7iPT2nydbcXeFHGjTbKS9ByipWnpHVqaMBqVVCJ9HmMvhVV92gyLYAW2Axhb8nhHTo3KVGrZcRyo",
  "key30": "iwuHmP4cMu6PDjPintAbmQRu1rBfii8WkxAZX7UGMtmBXz7j8p5fv9yX2EhSivccs3h1JcMRpUS95VW56YpFWPh",
  "key31": "5vqLcd6GAYiewddMy7f9YYggTN9vEhQ7wRWaRGVHJocXSdAWEtVKtgaPPxiBEf51XtiPh4hYyior2zyUerMgC29U",
  "key32": "4WAyT9dH8bjWLKN8iagVBFG7fYBP2jqaLqLsHmv8884bJt2YR4zG46Jr9TrW86uSUtnSLrkTajNQsUpBHa8bpM6K",
  "key33": "252JRjd22dWXx6sGsqVW6oC48xJHroTLUQ6jcgKWi7vTA9Tj4Q69gatGjjHZ7DgGPdaew3R8x3AZ2nQn2P7H1yD4",
  "key34": "2cdwta8cF67VDfEdMwdC21ieegWnFXwgf447kAzBYcGUuW95DZ6Sydmsu97b3eCF78RtpAPtQKFkrDgVpN96UxCk",
  "key35": "2WaYikZJZTNHkGZuFaW7Lwk8krqmmTVb2aAEbADAdddoeJLFTkYokPjZcRizXLk9CPZ8SipfUJNnTQcHJQkFrWQx",
  "key36": "3ZSbawjBfgkBVYA5eBXds5F3V88drC9CepPkPZJgrati9XvH7A5DuooAeRNvM887PLHoaFsvsUUu3zrTMH4QcqSS",
  "key37": "3p6x8vYFpdkS9gyuHo5CXtyX3fiEhsugaNsH3eE8VKjPUeKN3g9Gzyo8mjWNW29B1fwdHg3UWGm7EHfakoBTLMDA",
  "key38": "36AyRqP3Jw4DdFc3zQzytvvm4zyLnQWDips8jekFA7ANcKup3dJ4Eod4i3jZeYY57xu6FRtmCNdgz968tk1keF5x",
  "key39": "53SWSu2pXud8FFZyuUZL3PYtauMzuDHepo4nfmPqS7rddjF5aLC9qrmDCfRJc56PhJsXLXeU9JioseEvJ5qxz8oB",
  "key40": "mdYvWDeS897rrYUzNzfnJ4QnuLZsydnKoT4hCpLuUr6A3xmHeoXsBQC1MiE5UdKNTADWbcMJsvAStNtG52rjajP",
  "key41": "3sbqfrZhQ6ULvGNuLpZH4sQMFzndZMaHMTcX2pU3pBVmYwKcBs7nyXpTCEbjA5G3wf4cqUygLDMCt8EAMdiS1poQ",
  "key42": "5L1fjEqugb1BRCbYnddMFAGmuHJW8rymxcv7cPDNXC7VrdFD2L9HU9bQvs2hoWHniF224SBXHEhPfLPnKYrW3nkG",
  "key43": "z9tfjNBSaUmDoDv2qQLiScDoZo8mbr9NARAnfRqqKtWjf5zoJDdL5pQA5GsiFzoa7mc5fVFVBea5fpDH5mPdmNd",
  "key44": "5FsCxD7fmEwrF6GJCSgEMMTRHj56jBHgm4tBX5YMMr6gfZDytP7xnpKPbo4XdCWs7kZ4GGpi2EEcvj6VsdoQKmwQ"
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
