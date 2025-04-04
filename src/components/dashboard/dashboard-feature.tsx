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
    "5tTTBf6H7U7WAG1nrkjJn5KcWhrWx6nLvsPDa27jurz2NctCLpk5718W1NQSGthN7KTkVQoy4PvNiiKam29Y3xGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Me5nXcu5tediQVZiV52Me98r528uH3vyRSWCautX2PrjBRcEvkVGpX1ppDRyMwdYdYzV6rHDP3amHoqpdhQrBhj",
  "key1": "3p1NSbYbcwVa1iAJwvd8y8vewwoFaUfxbwWZDD45JTXdQTTNanU9YBxm7sszNwJ7yLZ8QmpuyWwbto9TRYCxG9Sh",
  "key2": "33zxWum3WWhN7VT1otTVaW8un38HLUUZ2zcBYew5DMLfdAqV3fifsrz3Xc3tJvDrhq5j7ewRnKTjCKPs5aizhS2T",
  "key3": "4FB7pKdyXWovmnSnaRB6ZbqSU7snfNNiPRhpij3LTmzXWkm4iQ3nkDSSh8tdwnoWiUbMyDq1NrR1WmXGHPfDgqpM",
  "key4": "5cNhp828WcRkT5xxWP4bfNrk28BVDf3rYENDyKYtaMZsxjxY5X8dzxhV1tEr2AkBGGhREVyQ9goitdNVNJsyDi8Q",
  "key5": "2vLGydRFzD6UP4QvB9gUR3q5Q4bDWj4LCCmcvjH97zNNKwNgwqK6Xz3ZGXFr28VVk3mZNzFy8wAoPsURna62n9oa",
  "key6": "5RabJyFErdQnx3SChkTGzSNq7oQuZyDSf2zEVSFw5YFXrxQbaq9VisT4T9KMPy77JUeu2vciAUGyJnEdYs1nxFPM",
  "key7": "4TssNpZ4ZmaioQaqpw51zNPEJgWapaFRfvPhHsBcwW7SKqYW4ok9J648668Vxy96UftbL9aYoMVsgvZ4aSddmavM",
  "key8": "4R24YkcGana2Q5J7hiXZWVp1pv52dfCjyy7zvUuVoxMxr9sSGfYg23PFXPJCkuNQXbEKNoKTN1JGE9kTyDXqJqTf",
  "key9": "32Z441DxuwEUBUMvBZDXN6K8cKMHiDT2BJdYYckLtMmyBFAxyyZ4XfKTZhKY6AWuj3dQFCqmYhSWPnrsmAfYrfYx",
  "key10": "KGeq2oKrPEfuPhfmnuDvHfCh1pJQwAVvrEjKSZKtg2472NgNWu7RsMDksEskfRmvfJwHmXPL44s9s9bEEFfw9VU",
  "key11": "5Zw53oN2tM1NGf9AWVvbpvnqdygiVuD4M3BCWsLdPoDhvnrwfSM1HK1LozHVbsdTTAvckXpJRDvD58tj9cMR9eHB",
  "key12": "2hFo9eXrWZzU1g8rLJ7r65yk5Wz1AyQmm65QgMtkGgGvhYar4fnveUzYKEP1RG22DxcAZ8FumV1E21B8be8hrCeE",
  "key13": "26pqbKd6jjYscUaf6ms1LSHGNNysAVzKmx8XoiX1N4YKiihywxUNgsrae76MRL82W6gmVZeMrHBCQWzCri34Gcy9",
  "key14": "5dg7SbnY3Gho9JSfXY2YqGJ9LQDM76xPXWiXgeruCRDxXFAYrEG7P85T5Qfi3ULS89zNCUQghKoDCLYKc1CBSt5s",
  "key15": "4ZKVfQcsPXt5xz2tVEi7VpJDJPrFaGUYzHuSQdmwn7LtEFjFZuekf74g3T1SSCE5P9kU4T24rU12NoUAdCD8SsEk",
  "key16": "5TcCpQxAcbRBNepFaHTu5Yz4KpdqP9D3Cj5TaQocDhwa5Fz5AhHuhYzoKcAg4p1FHepKDSMq6dg7o6yF4YYEYyL9",
  "key17": "5XhwGJ6SuTRSLdz1Dpyu5BiRXm628Bi6giBL2GosRksEWyXJtQxGc3AbKmNgYci1jZ93SjnnqTzyVBCWWK92zDtn",
  "key18": "2ZS9sur3eakd9r9RgaZfopxBUhRjt2mfAi2Kg1LdisC7nHyz5xWXRy4unXMW6BzBHG3snmWwLxNrvpDRacFA99ZG",
  "key19": "2DfqDFze9tVWZPT1xe92Q57DQM8j9JnYzLGfsJuTbYBbvSD6e6THhgfyFmZ2dbTuxKqGyKkmnNCJBh9D3Z5sPHsy",
  "key20": "s6UGpxMi5LK66NZxXwu2TgXLRaKTYJRptiWV2r54Uvt94pNShHe1ZukCEd34LhsZwpxVbufDGAHxxEG5T517QkJ",
  "key21": "5gzuhAP6pdPoYeZuPY5uwMKMmiaNPGnyXR3n9oaoqdUCzASNs5Y4X5kqCUErFMTz6GkGmFnmN3T8WHkPBFVhbZDG",
  "key22": "hpfrSTpJ9fPXmCNgYybhpoeujSVq8CaCCM9vxXT5ZXUyMjrwMAsqbdiafQg9DAfDjp2EFMwHgwRfHBv7yaTiiAh",
  "key23": "5EoabDMvFqwgo6QmSWRbHCEJqsgP9WfqVq3SWNbtAJMJETMTxEYBq53LLLNy5JyWdn1p3pHTWq7haj57Uxpcmb6Y",
  "key24": "4wNr5qxMHWiSxe4u91xoBFGAordchyY8kk5HvSgRR2JPV9t9xcW2RG3f4Go7eFXESLQ8jL7naXsv99SJTJU34Hvz",
  "key25": "5kBeE1mhHuDZumTxp8jduPGegnVKTYjTg9koKTCtGVNNVbzfwV9zsKm5FojxZDqHEJgLuSz6UJqwnAJ1f2sc4Rav",
  "key26": "4bfqGbdggRT5Y3TcL4foWSwBRjuzS5JjDDgtuQR9ws8JGDkzVvMyyxCurJXN4MzNhZJVK4TYpiZRZMXPojbd8m5j",
  "key27": "5WzQSmNDMrPijB82azSMJwWXa9QndYPJ7WvMnUhsCN5HYFAGH34QBsu2eUCTzXvDWrq2xNwYDSPhdgm5zgfyL1LS",
  "key28": "4GbLPENcv2xJvmDVEyjKbVh5gnQVcxtodWsFsU6B1EWNpe1aNXskB1i97P7TWMe5PqB1W9XKkr8NdooxusLzS2cu",
  "key29": "qSQbxPifedrkbGk8S1RV4yDiTWSgxksvWQT6PSZnmYSBFQb9JT4V7wCD6sWNWvtj1d1diZhoFgKAXR62oC2EtBT",
  "key30": "eNrzzravNTpUwaQoDDEnjPt7V38jxwqWSiq4XTq7t9x7CEoWcWa6J9obKwEVJZ4BddddzUE5Em3bFPtUzYVZBYi",
  "key31": "5hdxHM7xENYKcPD4D1yK2EWEdNu6CJZVFf4a8GrRM7i3dzhore7c7WQDyyCHcU534ZWhTCVS7qpimseq5C3M2fyM",
  "key32": "3X3DEGmnUoiuUYWqgoofF4nFBTdFmer31BUqsjDNi3Rse2ABK3ZFcXdXXREvHkd6CQCoj7wjjp4SPRrg4bStcbqe",
  "key33": "2DAK79J2J5KP3NA7sSZ9JHBeig1PYFgzPdgT4qxqx5WAu7HuRAzgTwN5e4DNJ1nLdp1XdoyMYnvCyMhQevam4iFw",
  "key34": "nNayn6s2y6DJbZuAkHDFX3wDeqvK4ZS56RdFU7u22sbMUhTxa7T1Dyhn1CA23JWuv1emuwjQzUVciUD6A5xtCBm",
  "key35": "4mPTnbtK7zmmohwFHdoowvxuKeu6P1h8NhFM1xYLL9T9ENF5Fv2DK3AAuxWPLWBejXQZezeWbrX3zM6Ddsdjao1D",
  "key36": "XoLCKUQE3peXuqzD7xQURuxtbgkuUB8pZiGNf4F72k3yfwpSU6LdhjnyvGaXsjVsoCSLKpB9QK2nqtJVWBEZhmZ",
  "key37": "5qvWzksHnYjwE2V9FDZCJRmRtJG68FEEcbuULXySwRHkXD9yhZLHUjVSEEGGwZEUfZ95SqpQk9125xF4H9S3Hic9",
  "key38": "2NxAw9kXL1vL8rp3uefSn1EgEePEPVHpHhWjnMgtuG3PgDvTkjUdLFdMujZLpRkSkwcqfuPqqyrgVUYvPcXBx4VG",
  "key39": "4c7MSeJYjiG5ZF8BVVtAwquhRqYfgG5phmCNEE9SCtvf1VrrJstJe4dW1zN5c2j7F1bYFrTWM6jg2fLG3r1MhKvs",
  "key40": "3KeVXUptkL5UFsLHN6zAG4YAgjyA9VfKbuWSJX4wg9Gcy2gc8v5UCDxVS5GZL9iFtUSqCseemKaUAe9Mzkjk5Y23",
  "key41": "4GF5kQqiRjbN77xGwK5nCByqe7Mb3LcXYKbxPw7ba6cYqGKJLEc8C3FMKRPvco48ryKotGovApCrbdRYaT2hio8a",
  "key42": "FK5yMbFRVUMktJidmmgxdViC4Kz6ne3JXvT314Vgn65KEVGkkgWNh6gkJ4VPiaeAVjxDXgiyCJoFRbVM2C186Z1",
  "key43": "5smD4wLLJjA6ZpWPiLUcg9fGrvVAB6VVH6abpwJb1TZ4N2FqCHH1Zo3gJLWTtCamkHsEA4P6nKvA4v62RgayK1bS",
  "key44": "3aHtLRcgsNPUxtiDE6v1AUHhT82AirQe9SBV36mkUFX3xdULgEyokgknMCPgnS816ug1udhfu7G4GQZG6BVmPZ9U"
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
