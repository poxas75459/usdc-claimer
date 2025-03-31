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
    "65UQUpC2U7QyVCLq4nxmvZc3knorQw81CQ4LcbgnbRFTbpHrSDTAyP64RVoM8j8F71EesHTWHWbyb64Hvj1Jj1XZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gqzKz81CXKAs3YCnLEp2Wz17Wg7uabogughufk5hrpBEoJec79komsSQryMHWLwM8S4xmWoht236ESe9qXtdyAk",
  "key1": "3nKz2HcneXPv1GEVbxAYZdEdLwgTySWkpm3h5cSGxNhAm9B39twMijjdxX1bgvVf4uw6vYS1jy8YqLBDUa7JtHFq",
  "key2": "5sE3cZqGbAboL8eZtu1zdzFPhmwFmdkKJXieJHvefj1HeDaThMKaemWQJ8ELe8D9gfZU992X11JcQJmrSbP3UTbM",
  "key3": "54myrYDAJUJvSPz6mn9DhGq9sVDN5vjYu3dcWxR6fNKnwYCJb557Mfdu3QtDA7Q5VVKnbhPwHVS2ScAzmVTQHgHk",
  "key4": "4vFSMbxodJn44VewkJiCUkEwEhbEg26onhgrdyc54K9TjDk1vzvHaZfh9PL54p8PWrbucpjn6vcLg8pBktQLLv7y",
  "key5": "5Ng7p7oL3GRztMpBtMtHJhh7K7G4epfcuVx7UYhbcjJv3kEXYzBs9iSEydTJS95cxmAm4miiotKPwtXehQB1BJjo",
  "key6": "3L3x4wF8QCocgm2Ypi3VjFANV6QF7HAfMLojc6JYP9HPka8hDw6Zm8SgNYuhUbVyzXTDkGfnbYNE65e85s63yeYy",
  "key7": "3PNf3G2gn729nTwu6oWJLGXgLMHHFEk6yTmPgaZrsE6jm2MnEoP4ty8fESrhapeTqPyfy4gQGt6avJzFqyGQkdYF",
  "key8": "5DKer7LEpztavmENK6pKgK61j89PkVjMDRcdFWFk7z6CbR5jViCbm5RLBD6wKasgYghnSvnrSQLsdwtDAtcPC4rd",
  "key9": "qvayfoPVJhes89AUZoDzDhQExTNCKYcxaABJjgaS8cqxHHkfVqHYEK8nhwcYf2dD6RiwXxZve8cPkfNv1fG7r9k",
  "key10": "6CvsHC9PkJEz38GphFQ9Ajh6xWzniWEdU1cYvTHjg6T3EL6VRgRsZuGSW7ga8vEaCBms95ym1BDaAvPD9xe4wFq",
  "key11": "5CEBUJCGodHRHPvfgkpEG8oo6peYbNxpT1APoQLy2VE6WPWP8tLEPDoxMGH8i4hiAgLUvYugydRd4fCuhQo4ySTT",
  "key12": "51ZYkeaCZBw5Kc88m2w1PtpQ5uuyMri2uRZuY8DR1wsa2TK94G1au93oo82awrY5c8uTJ5hjXAvyeqDz41pqFRRM",
  "key13": "2h6KZK8YZJP3TGV2wGtJjwRgYAk41igVbCzSjgNmTUGSZ44TEg4C6CaGXE3ttaNH3TpCGZ1AcxoMtABtyjMsv1oA",
  "key14": "4rTn6qco3Qnbr55udZkN82DWawrSKtjE2YPRchvaNPoKiUrqQMmQj8cHUUx7pCobdYeseTxDf82JvuH6gKSorVmu",
  "key15": "2amrFNdruqZQbS4a25SzXvMz3DkHrpTNSEDPMFWGjgjRiQAUoAf4sa5i9R3eFy5rzAcmpHWSpRVTzBsSVdYoGyzH",
  "key16": "1NAVZDuYMKaqQcs6U7pFm6jaAGMhTGfbWF3FttBM8Y6zYhvWTbpjmEG4GMU2PEVBq24apEYuabhRsVWT63KKWHM",
  "key17": "5p1FmukHqQyYTgjq7u75SETQbVJtpES19gWjXNuCo6FFymR2MhaiMX6fwkcDqLnpqCCAJW8tEMGihes3eenV1Mco",
  "key18": "HiStnNHhjQWqgSTRGhp3D3SvYqgLRHgxmxSDG2PuDhE5tz3oyMgkY2mrpz7mymX5BavHRkPgzpEgLJKfnsNB5jC",
  "key19": "63ufP72eCGABEby3pKfvKjTuA349wV7stoMM8ddWv66PSLVHdW6HD8rZvExoS2nGB4LWFvz1Z6JiShD7NRZP54iT",
  "key20": "3J6wSVkvyX7FLh53wpsj6sQbUdme7nzDNzeP73WEhUNA76w4y2aE9uFePzY9dWg25eCoSKzcx9BBRKQY29Y2DVzH",
  "key21": "2ZMRHML8y9QxeErTE2JUK1Fx4qqyPoRaYnVJzFiJqUBMwaGAobcmB8iAk9Zrkw487Z36KZCN8atK8nnhfKN4kR5G",
  "key22": "5sHFmcPiKvFJsNkZkDWLnoVB6QAwuorug7cChBXqSQH6JTZDqnmhyZ9RKFXSHwbLrSCymjMnb4ewxMDm1g75Eksa",
  "key23": "4tYb2P8DXSyHbqhuvy814dEsQBr9giUCnd1q7Puz6s9tshSjpGxLmbgeWnJiFbw27GVFgGNcQHS3YgUU2GzCkHoa",
  "key24": "5hoY5MdYGchtr35sgeEK6x73z74XfoWAAsutqgeGozx6xPJw52rkPh7fQWiDT87eimRCUfwbFXMsEK24yg3SYkZo",
  "key25": "5kig3wCLQDiPDLrDymnW3fewoVKSU3MEBABaRPkgRj7wyNaziNE9nBcqG4fvSC8BUggvYJ4FvEY96Gh4RLLk1MzP",
  "key26": "5zvR8bX9BidTPZE7WEkMrk4urbseSLZL1aEHnsfN7TZrH2iXjvhNyuGzia67jJDibKZm4drXsTT92P5USXoW4yZP",
  "key27": "526Ri1bGewPhgerSfUrFQeeT23pwrQWvPWPH3JqKnUNSMoL666dd15kgje9xGCJwTgnG53GukUANVk73SqjU8ubF",
  "key28": "2oFjgHPyvBFkzvxSV42P8hDnBePXZsJg7sNiMQT4g6MZvNraS9SFBwCYVFzRbgrtAddF1hReSi3Edh1VM1cE8p62",
  "key29": "5Poerb7RGXm5WzdeincSipazHiVdhse6Cm6d4rFWf7u6MVknna3aGcPozxtCY9QmwDV5geopFk8dd6upHWD8J2Pj",
  "key30": "4B1wVnrYuhb8UxDTWTyxLeyZrB3XUCte9TyF7T8h21ANJWJPW7qUU7bszEh1u2ktC2Rzi1hTXbrvsqNvPWinR9ep",
  "key31": "5KNuyexBvv1TPLXYeVMQtS325S3bg3BCqvXszayMzGWbZ57EktijLwPvRdu3DtcgXZuNqLvR6NDAkkv1Ng9Ft7eu",
  "key32": "ZvpLMG4zc4NFDkJ6qrrFn7F76eCgfkKfwEPWPj2a1DUiSvWGjKRJ5sn1umpKxdhGfQR3HFR1Q6S2ANDq1K6nRYQ",
  "key33": "2ckUJuUGFW4UEoqw39KJf16X45suZJiEmypNwEwhPVsZCvFHB3YZDEG3Hsia3mUkGR3xTMvikpA4LQJPTcP8sK72",
  "key34": "4JA4ApspoiW9UAcUMerW4RNQXrGEzzK2ooi5S4jKdoJPY6w4iKpxbTkmkKNTgeABsKRRcmsxKTfQxt9rXhnYReKa",
  "key35": "4kSUR279KeDfUsDPP7uWQPtYbNoy5H11qRLqUzUor9QzqJhG3GteUXS92AtCyZyvepLUKbAvuXsAsdt59vKCpXNG",
  "key36": "3HFU4ztxWmKXKCkY6GLXDPXuFUynsEApJRaTEF9MPPDzjEWakiCN1JCaz4fJsLvj674w6fyYmRVSYZhMByeG7C1o",
  "key37": "5d6inMLNo68oyD2eCJQc5QpfvPMcGRg56zZxaLrk6wYQRWvYz6dUyewkXhHZ2Qs2w5HCVAxE52zbRpiWJ3Js5yyw",
  "key38": "2TLD48UTgeUdjnPK6y7Ac6kFDWnwnJwMSeaaXG3xauRgwx72gdJpH8PZ5m6G8wSjM4SJGr6AGSzdUbg2apvr499i",
  "key39": "5G4xye9HghDiFAhCJHaTRqRKdkAvESSaEdJMe5EfgJrKVjGZpGgFWjWyVwD87uK7P223Mwpk4HwSQnKkYjCP7u5D",
  "key40": "8WjsE4wdif3mDiSVEnNUphzgHCMCPKWioVdXRYq8R3CRE69Ac1zvuzJekc77Gn5R7WQ1bSyNcQngr3iezooBYbG",
  "key41": "4CCXzAHQYksikjRNHAAvkgyp1RpHYvUxxfDR9YKZQDS63vXBZ8NmtC6sXaEmGBcTg8ytf8Whyfq5vfKAP53VKA9P",
  "key42": "d3kbK2ADdndH7AgWErGEZs5KTaSjXitYYbY14Q9N1miBRtMyC98B1FJ1HtoQaAwAQUSCLsJuqwSdcdbvKbBEvEc",
  "key43": "3QKhdCkLJda7xrc1tUf4op2L4RTNwbVvQ7wSJQ9Y292DyCA1h8JHNjkAx1rVnqkcTAtUbb2orc3Pa4HPuVUKTZa6",
  "key44": "MinY9e8GJefzpLxPVyJMDo5h6vs5v9mog78F1D7PuHSbKQELeBEXH1CyA1thDuHcs1q4hwk6EUsZh2kjYHDquZu",
  "key45": "46TjuAaFHQkWpCeHnCALLFVdxgbUvVcPDu3RAdiqVZ5HoZCoSFwrXTgngc5STJYyEfjGzmD8be76A9LLfY8xj682"
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
