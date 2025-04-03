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
    "4BUd8fRBbZoBgWAFYU6znJ5FDrJzT4zY5uoBKNwmjTZ1EJ58ZYzmWiCV8sAfkZWdD128PFLM7Aq1fYQess8d9VD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FKT2K7xNBRi4fxLEF3gqghQUUHijRehxodoYkaFohTJrhPwzhwzyT2oEKarPyL87KKs6UTy6dRZpuejZuwFJYo",
  "key1": "nNRYHT47mLjjni2moUgbdue22N6fVbGJeP1NLRV4Yo2qos5qPnrvxs1KMFpM8rMZyYiBAvJMxKrV3bkQMejCJpi",
  "key2": "1RgiWYbP8GL4D9YBnMXKewW1uYBjhfkU785wtiaLUxPVBapb1YY2k1yVC7XC2HmfVgFWDMSaCPerTGtNZmF2mjW",
  "key3": "iwwLFuDZkzaNwFU2tEg5uTg7W86NsaoL7P3D6NFfonV4CMXvZzyxaH8j93BAPHjLKCnJKWGdnBJxLjeMBWyjZP1",
  "key4": "2rkwtD6ACMrfqCRHVEVCcXWFDQfFQs3HMD7fUvjnKbiZhgSayRXyNCd3edU3s5inxoYcck8vH7vXhWwxAeLEHGiJ",
  "key5": "6wiBspZKubgvz3tEuW5pD9bidwHFtkw9vvCuUb92m3JSqrz9xjoyd1aVwr2Pm2xguCV4ickcWWwqHNujMJi3uB6",
  "key6": "2m7vLuLcQHKMXVU7PFmKnQwXXrHXZVrq6SCjwpU9aDHQdeBp1nV7jsNXEyJnsndoU6MsVXLuoR3ZgvCTX4tDM4Bq",
  "key7": "FEd163EPqdeMmdkzinZ1DyAa1gFx6jatQLR1dGRu5rL32CfESE1rqkQG5uRphT1cEmpUeNP3oPHw1gQyGXNDog9",
  "key8": "2TFhytZZ7UDdUv2wi3hgCn9X4AWkgxLNMmsLYyJEfECjqT6ZX295qFGP1L6bUXCo2joax1fDG1PqEB5gQGKQ8BFK",
  "key9": "5mWECaiJ9NL2dj4JtNhnLwRecG7nq7NZhTby3WbrmV1xYaiWdUuuHvJRmaSKXSnjaPdWiDUWMobujgfhUrmAPFX6",
  "key10": "yRwRYm1m8zY9pRSuUjsenoLkxD7vKkUEuJDqpSnVZRjYzZGS8zsVvhLVH1JmVAiHpcCPrTC7ev3sx2Pcchs6dNm",
  "key11": "3JNGaF5R98QQk2mHqvYmNy1SCdueAMXC2GTX9QkRJJfzPxTm8AgkBkqGHJSyj4mCHaMVpusWexvj6bPjkNvon1fL",
  "key12": "wEJGyxpweJoWRHPxTccJRB8GTY3mgkXMwMZ4ofoDouE1nToaFYx5hRgvDRSwLCF3eZ6wdX1EVo2BZyhCQqW5K47",
  "key13": "4qqbjgjS3DgnrrfHiU9n2xMv4whFhxGzy7YXh2f1Em5EPenA4ygvcavCSK11zv5nw7xXBo6tNA5FaBq8vKp6iXoa",
  "key14": "AUVLNfX1vxcCa92MpnqzbAcXYvHQ8apVQQNgXJWinmsyCfWuGzDBRVmPiV4r9vNzEvMpfGj7VFqs6aifwo13HVJ",
  "key15": "3y28jyycvTb1cP2C2HDY88UDW79noUeUxi35xnxqbKYHmBJ4fVb5wTksDapcziP2Ku1ZrZKnEw7GB9MqsQKdJsdd",
  "key16": "5TnhX9jDrjYSg2D13MExBsqNWCfyPHbHNHgMW1w7mHc1P6FeNFwr4djaSRivba2hK5xp9HQTzhFZKttcxCm4eQRs",
  "key17": "2cHEhxiPeKEN54ucjPqtcc2BH1fx5v9ukbSUSNL3NXoF3cacv9zUXZmGEHXRV9LzquA9baPjp2mLDPB7gN81agLk",
  "key18": "8vHN3XWwYWpvzji1f21q9oqNn9JYmzTrn3GBgB9rTm4h6R4shiFHR7LfT7bkcwE2eSC84MVpv5v2duryNZ65o7A",
  "key19": "5CujyzpmoUBdUMpLktAbN2r4QfYDDHnNjnfyxerP4a7pEMnTxYLb9mayeKPcfopvhurowA5ws5sQ2oTa4oVLi1GT",
  "key20": "57dPH3MCdH5b4YiWDyrUzxbAeReJQKWFoiWi9LGm62LXptnVZfJjudVGE22k91W15zhy6amCSqk4cj8YBaUVZoRc",
  "key21": "3UHorsSAivHgFxsjyU8J2dT1s6LAGvAcsPMV2arLCRN7KDkv5cEQtgHaqWj5rXFMXc5BdfJwecptefH9vtcdXJgc",
  "key22": "2RaXWRxfe9UM32ZYCpGm81A4HUhXHk2VnvEfXDF4Ly55owdBUiUaELhHGLFct9f1kYyg9jgEXR4touQSS9Us8HSS",
  "key23": "5aqfeHL6ciCniiAz9PyJg47WG4yKeUcd3FNmYgMsUuUXXu4jWFexAd98N8tu7bnDFm5C5P7dvEKpKFAawdioMdqX",
  "key24": "xtoVF5mkpfyH24B6ue7kRSZXAAxkpWEKVwRwowxcyRFBZYpYMJRxLwNS9h32kooTZCjgGJMH3XaXL7bYcd1eeKL",
  "key25": "AjpkvjNFH1jFvAJgFmQfw2KqPZRzaDytNaiRhqAHej6TrP7sTGdtp3dLKXBsybPyen2iM8YtwVZFBh2BFtfCw8F",
  "key26": "ociBRseP3yk9kJMicPGismhgPqahXV555iLS1vyqFu5JWCxW9hupUhvV9ULid3Rxw4UeuBNt1YWUzhve6Xg325i",
  "key27": "JECEYmezEq27BmwFeRR6KXDXxAvvuB8meKr1pUZVcit2RrpNrAxzjmkkYVjUyQZLHgkNNp1Qug9JDhZNvCCG57K",
  "key28": "4zMjGa37UxzPRo8ZYtBzDTF4ZcNvfh51y3tCA8XmJbVmDUEigmQvmpv8yZ9Wu8jC21ZTNYS2f7NrSuScLr3hKz2Q",
  "key29": "Q9t1RPMmCcADJXBAmFRt83WNJxbJ3EyQWPiNBq5eHDcMLNsswKBK8ux3YBqHhF8uSkU9MPgP8fFymnrfzq1qmMo",
  "key30": "4RX8QWqhiZh4zZcTHXPYE6Sje1KLWTpUjXuSVoB1kjoRh85jCqT2H7CHkEAN9ifhyfQ5K3mw2BCzjzmvhch465HN",
  "key31": "2Fkeq9xDcuRGytCUZEzGZW895TLd4M8oPxoTGPvTPANDudqUUPzXcxeESWYQFogufuenfPc5XmXdTQh2KRUiHpZT",
  "key32": "4W6VNRHMFj1Ct2wA3STedstA3REuEB9aKEdsx3FMu5SuNzmba9aVNdwQRiw2w5a4A5spGy64BeZT2MgmQc4ryNnK",
  "key33": "Bx1TBktT8BPqALp2FVBDXWCfaQo1pDWQ1ZfMDyscQYs4ty59kCAKtF2347irE4EZpnBzMJojudh2Bo3iqBAtB1w",
  "key34": "UsBDuR8gv5tpnWZDGZTFV6evzTj9RAXDmuw1vNNTGXnHhtb9AtmUgH7YLcKWzk7y2c4NwaCXfqmaLLsW4K419wm",
  "key35": "4HezciwY2MGJpBj8x8K3D7hDGevEgRGsjWrDezMmHBe8Q2bXpinH5wK8UmczA1ZAyDm3TvMz6c4NtBhjLd8BEWmq",
  "key36": "79FSZAApnWn4mvV4ur2dohENc5X3t587TTXDFJ7Fm4okszKkYMyvg9qky1Zr7Wqx2FXgZpvfakocLfYcxs9RR3a",
  "key37": "4fJsdtrYbzLGYD2w6oPUW5DJ8i9idb2XPnkTvD5A6dXbNomM3pF6zG43FhbBdKiM7ei88tqqKogaRyJ1jXrnAbGk",
  "key38": "434yRu3xh5uznNU9aCqxmM7jgf4xJR1HMz1NMumFpjanigoEuStW43mycMp8LnKmYWwebPmRr2WARw24tjhV6tVZ",
  "key39": "Bi2YrZAecYASp6nEQJjJH3C2PZCAQxxPLmCsrYGPmcQ785Ao6JGzR7UXCEL1izBGaD6Qt8SS98XbhacifU5DMyt"
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
