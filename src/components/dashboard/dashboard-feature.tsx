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
    "5nQixE1Xcd88h3Z1nc6vymnK4tWqosog9fQyLbQADQPsVP9XHMSviTPRWQEdprhRMtrYeJ8q1XfbUhKNgy5kMTWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SBTmhXD3RmBTupkmq9ywTbzNZCCCAc7ni7W5xfawiAHbMWpVnm9RUasXWZp6fHFMjCzZaNnbHnVAyof3uQpe2ZE",
  "key1": "4jEWBSoS6qCddFSfDq5kiLJGGgJ53t6XJC9QmNoLd8GxQDaqMZQLK2rrSpUgPaD6p6tnVebXo1xRPe8R3Gu9xNAY",
  "key2": "4UewK8KVUuNqxJBDoFz1v8Q6xE2WP1ZYPuJiZkJbL5n8s4UzVgHRgtUN2s2fvkfx5uhq5MQYL5CzGV6GhmFD7yEs",
  "key3": "SEBGq1JVRJc1BD72HKGPqrmMFSzrWNxE2w95cQAiyreKPpnaqKN33KcStww4Msr8BD8Pp7YtbVjQNQdAhQu8DVd",
  "key4": "s5pUgLbWRD8gu5mgtpnbU2rekpDUbebbB7syxsqMAiBW2yvq1esNaDYbZEXZv4pjjtWwNZ9JLjZiJAAM6zCYUwQ",
  "key5": "2eYZb985HA3gEoN8aHZ9hv94136vpF9GZXCZ6o4htCUpsdQjj2ZoZgmFauxQAYkg2MquDqE2UZLT3gAKsufB3L9p",
  "key6": "2zrk8Gm93dYrMzprAiK6HsSRhf2QD7v6dKUAPNzygPtNPLwvYQcUbD2GpXps5YNnqNHQqmFW8axPpS6WFBWQtwqT",
  "key7": "4SB6KdegQP79GaNjwoSdJVYtbg993LQEpYg8ejX3RyxFNh6iGY3G5kMyt2KYHCNnyu8EQNyHF6Eekk9pDmEVDKMS",
  "key8": "3paD6NhTH6AUiWJiEkfxVqoEzxdZ6QAoLChLxRrVGbSRNSNWPGtzEZtnSUf8ngKutQWh6tgS25VU97EcrN3Mjama",
  "key9": "3rTfYcpQsFAuCkUUcDyk1WA3C1mfvCc9vjrfSgXxLGLnZ98M3dRmoi4yXYfz9fUeNxBW2h76TRrvCxvxMnFknJdo",
  "key10": "zLGX17qgFCsAWFATzNUGqLtuWXpt4H3beAe6cjNomn2TmVqx852xftxGZ88woFX6uXdbobgyK8ijK7eHyviJmDF",
  "key11": "21Gkbm8BYLeZw1Xa4CqmzADJYpkC2qZbgrpNhvEdmmXaUXLmwhMqq1r9PnF5mA7NyFf1h4rrpXu3DBJSM4GDA6cA",
  "key12": "2PcpmAsbDyEAGed1BQBp8cnVcKfPQD51eWhThRbBhHym5kWL5g5g1u6xCRtUfH9hfQwtBKWqFtrf8gjpYjmiviA5",
  "key13": "2XGXssou1PHfjCKzVQVeSnBdXn51uJJSANKknbSeVvFm3DMmfUKMBfNBFX5ZGTSK5TxhT72V7RyXApUaubxpbic1",
  "key14": "Lnaswt9VpcJfAkxUbHfc4W3qfj7M1F72XQa3nhpQ1CkqAEzmpQKXe69dJmR8c5AY4Bwbfc97CtQVD2rwocDTqVB",
  "key15": "34Zd41nQSAxM4Erc1JKndB8NNi7QA1f9XjZE7NmGRfPh4Ce4JtBvgfbqztWorw6QaACASb8jBnUj4X4bJYtJdZej",
  "key16": "4tAkKmP7aqCCdfSEmDnid7BB7EdiHAFp8Q5pwEsWxdmCmyiX7HEshCTp8t8VDNuJY2xpsYWWLGSCJ27Bz7yJWq43",
  "key17": "3497ZAkAaF9qB8pteMojyRCkjtsNbAVsKCUtbsN4TXMMP2q29XCcPxroK51aXYLCAMAMJntm6qdfL66P42NDM2RF",
  "key18": "46vUpm9c32g2zfw2dp5MdWsRbBF8Ttswp7QsoG3id75RqyLTNgd2qwXtWG1zRa7MNnFpkLVZfEanKwN9SHZLrYdz",
  "key19": "2uLRgELYDtrvLARyaMc2MMkLgQXmY6L5g85ptsmW2w54weJxk9DE7a1tZPwHxahCQBv5tuhdEpDCuN3SYywez9Wh",
  "key20": "4MD8TiQddaVKbt1DwjrL6EnHxqMNb2waZy92z7JiAu42K173azy2sGJm2Zb8x9KsPrDC9Ay5Pi2eq2VxJ9sXSkSF",
  "key21": "2RSYca1PR8GNAwciyW7LayEU4yap1D9UVCVKzUTpXmnZkuP37DqdjeZEgzrGhXog6PPPRVRchWgHv6PUe5EPm7P8",
  "key22": "4KRrDvE38sNy5N944J2JcRh79P49J9fRYBCxuvwfivrg5oLhyaBC1J8fPNutn36fWVj2K8b5eyWtZrTb57YxCkWK",
  "key23": "5aHCCb83zJmQtQH58AG87ckoAffCS8VpHvZAZVvi48wVD6JpdvUZepAvUQroXmVELY6WrU1BfH1qAcx462LjQqjB",
  "key24": "3r1PWXZofDeqzzXk51D6eLvYSEVgrLdf6sGfyXyfz5yDG7a79jSUP1tx45DhDhWGBEXpQBC4kUYQe7qVqUi53e4L",
  "key25": "66LvJTF1qS5PRgLtqrmVb1CwcKV8faSLhqxpTDWRXBPLogypqqPaDg3zLXmwTvn9NmwZRSwjGbNtUHqztcVnXEvH",
  "key26": "53HuRFdaMc4W526kxTDkvyPcLqaAKMxYyxiAoWNNwPGU77ZepGWywJwbkVB3QjE6mermuoBw6CbByr26W7o7FEdj",
  "key27": "5rGaVAvSxctvPkKAMQVMfqZW88QyFMsuLkJMyYytsBUmqPmvKcgCSw4xhvsVrDxjAifSmwqeLQVX918hhBnPcnqc",
  "key28": "4UNZaeZESbjmikdYyzYoPpKushSAgvwQhiCGUwd37Z6uXTRKApKvA5stfBKEksr4dFjDeArNmJnwaPC77Q1JQMbw",
  "key29": "4cZRC9qyo9dTfYh23yPzrB26xHyoMom4riG7FDYVZo21An6RdGovcb39rFE18sSZwB3GF7zVD9KqvcLUSwJhLjLj",
  "key30": "3J828ei7bbYAP5RuU5kZ6HirPqVCaEaCHhYa8zJd7Cf7Q9ZZGokTertXh6Upy8arykFuz5f6XvpynuN5qrGbHjgf",
  "key31": "3yeTbWkzrSAAskASXbGwdELYf1bMx9zkK1J3kzzbURb3jus8x5222KmCApcvTmaGBjqTfTCjENdW4f4EqXKFcXuP",
  "key32": "34jXohQRnoMugbFr2vLEYJkNrbSXc4X7ebsdmCdz2BN9fRyTZP5RTWMoAoL2F5Yx2DmR34pMHctpLFYtBeyHKM7c",
  "key33": "5QYbuJGf1Tw8q3rqkFdzxQaU3K2YZXsFindHE4eMvTZaAo43sLcp44eXDPUWBvKka78zsq55Lt7HSKY1K8xgtRhE",
  "key34": "4qaNGWv4RNXvr89pwqhNkpDmpA46Yo7F3irnLmN9d9LpQpoJWwRs7fydhbvNDBrM8hMXc6kgbfmU2w48CXXfvvgD",
  "key35": "4XbcDwUKN12ZZ669VHWxxx79D1qrsgaZL8xgk3r7ZTB4si7dGoMhgLyUG7Mo6Wwo7cVgnYifMKRZSrCavCuLdGF5",
  "key36": "23igtYoAssSD6neiohbufXWBAbipK6aop3wMW5M9bL9YcE86LHnEjXWeJc5w4AMfH2pYFmsCYFJe5eP2stEQchqf",
  "key37": "5yicVEQpSRF7B92UaRuibuSwwLfKZF5wDjmnjHmdjEUrNCbKn5hCGwPF1MLpJDhVosZvXrBmVG3zGd3VMPEbnqyE",
  "key38": "3FQ1Eq8RjDaCEwGtEZLcjCSdpFrAUHn8Hej1xpgbpuyfJU4oCKoLJZwAPKQBSUAopcAofAvvpmc79MFhXcPCUtJc",
  "key39": "SmPNVQPYNDPz7X8oUy1GHGzcu2UpjRjfHuPZWV2qHNPkGumPkiT9wZtznSVzmPz5pePBHrMjFnai1aqeRd3tdc3",
  "key40": "64SFZEGhXAyjVHkEbNnzTi9hrfxcMf7M7tWpUH3KxiR5eQNKiL1o3hMn5HsFpg1RwsS38idbUzksmmXNyxg7YDNN",
  "key41": "3Z1zaveHrAg6vm2hjhixmCh8tbAEEtAxifkHWTdo75zzX98tkWcSgzLJR8woWAXb2u6tzEV3XNvTRsMPQqbQJAw9",
  "key42": "2BRXroSu1BcFB9tBZFLqtR2NVXVYx1c9Fvm8mWjb955bp3rxHiWEKjRA2EvJGGywQBLh5u6gZc28tYznsWztvoxW",
  "key43": "4hNEFYUtv4DPrsgneZWLGGpwfR4LjaCrQaYgKz2rhDrfxoKXNqtaMarNeYcacCqxFFcLdYP3yxLJK6saGPC3knkT",
  "key44": "2wbDuUBzqxt4w72PscvrPvxpgd4dWqJFDnFCNMbWwHVq6tWDZj6k2JMdpdUy8vAbepwKFztCT4H8jtxbyTXMbnkR",
  "key45": "5tYkUxxwW1198LxDPwaLv8C2eubrLB1hUaHo8nHGcQWUvqecU4fp16qcHvwZgqdK1hGDokYCmupnzaEHvR6PxjYm",
  "key46": "47qv7fopFc2AcF3PSzyrTMDPNchNpUpJmoNZHiTrpH6teDJvFfBVZT2nE7tbCzjFp1tTXpP5FiJRgJHRCi47yUQE",
  "key47": "35BAuJ4UUw336uw4WJVS5CJ1KuPjwJf3FyXBrHEEYNSTGSpnLd7VW6sutguUZi6M9pwjAuN99LzzkAWagYabFAPd",
  "key48": "erqiq3KmxqwuQC1Mn2MXPmcwBZAN6UAH3mbkHRqQamfMzqp8R7ZUFifVQGG2W3PQYYFfFX3txWKeFPSzVGNzcpQ"
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
