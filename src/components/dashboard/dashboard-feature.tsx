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
    "4FdCXDLfNGXpooyyGY58BvZ6xebh5LYtPH2t5MyjcrB8hZyuJnop5dudN7ij7daATsuuDhG1q2rwdSXchCf4PQBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4CQ6RQnXtfqMVsN2GhLpnSnF1iqERVvWjMHsqknjAW1nY7taQuiANF8aU6AzppMYAs9SS3swQFxPKfnLGn3SWB",
  "key1": "5pTAC4Z9WN69vs5rADiPpcHqQ3GZbLkrorfW5ez9VRp5E7zRYy6wiXRbYx2C7sDXDVtKC3odfTsntk8Butvjau1b",
  "key2": "4SdPj8CgAzLDgvZg5WKfQ7zwamHBG7s16nXeNHeBGmjW3KgdhhcDnRQMXmKqnoD5VmWd1d3cwe6xNHXQkFQe7FMo",
  "key3": "2Rh6DSCxYiX8SKn2qBK2tbRVBYBesHuVRG6X9gkmv2cx35ooiXBubsZcNjuVq5kn77g3dTMTg6brq7A3151cAnrX",
  "key4": "33ExMUzfCihZA7jCjNGgczWhmSWeybBbYs4Jr6NDtmG7rr68FxtGpRoVHxrEFWpXxnUFfJ4RnF9jg6EihUgb4Nqp",
  "key5": "3VzD7S969vCM78ERQnLuy77kts5Vb6zKG259Ji2KRcZuWVHBPMA1seBUwETwQk1vRw9c5VZSoC9AMZWomo6WYaE4",
  "key6": "43EQdkPgLjYM5X1iaGja87pVuiujftxKC7D8qQFupJVAqXsMLZm2F8seaoCSG3QemHedv5pquk5n2nU83psMTLEL",
  "key7": "3jKXfq8bAKyxoCuTSaSdv4bU1oRsxLMkgGgpLGkHhDQ1LaqgTqXGN7efK74sKgN4st7WxQouM3bHJjvh43ezFxbQ",
  "key8": "txq8heE8b2tofhsJ3g6nFA65vTaJx4yjBDGZcbR25VNNGPFkayD2Rey2J1PRQCdPEAPnfRQrGaWrdgxLCuXUn7X",
  "key9": "39CjKhakWBRpvPRkQiL6rywwSkApXfcXiiVp5veVRJBpnSkxGfAaTGdXq6T7DUR6U6mgSagoM3k9gqZTHRBTBdFr",
  "key10": "54gHTC1qmNbYU2h5LuVtDNKB2ZRPhm2Thg9JzDbcYTwsUiXu5ZuPZJ7CrZSAezU9zgpXnZhfytJudTosiSqwfRYC",
  "key11": "59jeaLU5SJ3do4ybZDpBuwHiGw9uLwi175BA2zX1okaNrGiWto8SipKNBdKFdrks4JHonu2rN7vJQeQSfGHF2C5e",
  "key12": "2QgPB79SnPMjTQHryZT4xAqJu4vypvP9SC5oRLDtyTGkXAmLwiUYeakCAzqETkdkwJB11GkDTVbwwsX2hWGgVcT1",
  "key13": "4uKuyydbRTAiC21rH44NsEMdcRSVFQ7oApMLXz6VvKoyoWsWxoip2JGDFvWCtPLhKLCaX529a4ApKCwWrA5RKK83",
  "key14": "VMfhzjvxH51zbmz9eLzH98UG4MJ7L4pxq2kLJK1uZiwjoXXuELHUjMYraibM86q6jH68VmBejnqwRg5N3Sf3iPn",
  "key15": "2K9odhmYmTxaNf6A7KXCYT2ftLhsu4KJVcHSEwP88Du9wiE2krw619Jst7uveaQRpZAZbAMSnBXRz3y1mqn8ZzaW",
  "key16": "ZtNYkPMY6ZXTFxFg6Roy987ub3mGDmKfHAWb4ydQiwAbqKkhKaXgtY4Lj8sxEYsqFevd6HkiwwgNKUuGkJp7yY6",
  "key17": "4s9SknQ7Zxp8hpgSzF8e61vbsL643SsNkvQabH3s8GkwiEDRbA7nxVghMtCF2zJrgXSYqqz2oYV1FV6XrnKbk1fa",
  "key18": "2EFVamk4xmmUS9ivfKs3AhjFmExqTdTMKBi8XpKiGU9c8fi732qh7X1bLZfdgXQCJotGEN4ESfnJjENwAceLY1Yt",
  "key19": "2ufincdFLxfpt5wJR3q8ywCawEhjQeHUYKA4UQgPoQrhNdUaf374WbhHEHnJqKW9ezkCgTPj3u2nr6ZaBaq9KjEj",
  "key20": "2oPycYmh76Lw8ow4hVgHZCCfg1MPrrVMcq7qCdYyb9qdJWaGSd9HuiuEEaVTmYVk8H4zyvCHbmvkxoANM9EjiKQQ",
  "key21": "XWex3wdqWW22ao8sWSwMGgyREAtWbdNmHSqv9rzv7AKpMZcd4cbSgVaaz8jzaymDe2nHtx9StvHRnfCvruGCLao",
  "key22": "3g466me2MrugAhHpYwFWh8Ssf7FcDarUP4YqALYDp1eJYmyVZpxcLyEYTacYSQnXHxwhLjAkxrwYK2ypuMU78vCL",
  "key23": "3xcfG8casTjmzduug8cTKLWrmDkyVvJt4VE8wqkEaerMwX5BcgMaSM7evRMfJ142Nncz5hdtgNLgTAdivSDwodHQ",
  "key24": "3fUWJjcrNLxu3BdyszRwdNHxiBEJK4V8Cxy8QYzrUZ7VDJ6yfvDZpjAAa8fAFoHVQ7C37ArUPeknb2W472d9m36c",
  "key25": "4Qa5FFxrVw1jKjj88WH1cUMx4gm8mHQMwiD4NKT8gkZci4fZ5hxc7pnMJ3onwagifY3serXSdawE5YYYxVDAFbd8",
  "key26": "54fTtyBZjjA1KVyx72ZtvvMeftJZk6J1fsW5APuNV1Kb8P8L2sz1KE5WT9aEYWvHB4EuU2ANAxaNUGZQRcPoqzAo",
  "key27": "3ZQz1GeVEvQYo4M9jtcBDWTzfiUNM6jnFw9vdMgxP5UMjVbgMcNYNqmk2MH5gb3d5LxXumYGcvgYJsFmjfGtjZ4Q",
  "key28": "5ydT9YEqWdYKFQvvwktpUtkiyFD9n8DNzKekC4mn5TSuyD9L5LpRpSKWhrDozKnrmgxcoDqWTEmxcZRj3LyvxhNf",
  "key29": "2f9b2CJwZoF1M2YqVzYEGRhbBdZUno3AgnZ3uetDX1FpQZTMyfKGioBDYA3vvfmihfzk54idxiBc5AuujnFqvFx4",
  "key30": "2vgJB5DcKz2YSZnpeBpqczMvUa3dwfbyQC9wmni6YvoqooFEvAxGMFPRnZXCsPXcB2sFpCyXH9x4WEcWf7w1YRYX",
  "key31": "5x1GNmPJAPb9Bg5DbJP5kM5UpSRvwQdY8zShEo1HrAMsJzDGhSpC1sL2L5mxWgZ7QuivmJvwtsWJBmrFBia6Bvqz",
  "key32": "63ffG8oAcf2bFJqXfyxJHBrDo5wKuKJqjYFYcyWyV9HoXuj4JiFfEc4a1nn1dbj1zKYNH8HhKYs4g9rX2KcrfhsJ",
  "key33": "5xiwXSB1QZ2W8tgVUxc6XS79xqpuMjPN8Ar74xgctU4eLy8AB3T62r3fmqr7FXrMTxUMcRv55DhcSZiXaaCSckG7",
  "key34": "4u8ciq6rV3BKGnARsvPeuipCpZ51Q2aAgNxdH9ZaM1Zy75rjxwFeydxkjcGCgnHqUrJ4KvCd2wWaDTMrJJ2pDiFT",
  "key35": "yVgB7QDfsLBr9dgQwdrL4etvcK6tG4nMWZpJHHWgJKCu5FhLnT8tccBzo3HVyByeG9MYyPK2FD6gCe3LkB3Kkaf",
  "key36": "3GbvTcKWiphZ1j6Ebe4WdLubtGhds942KFSN4e4V6tBTQ13SfFFMCwGH9N6YGchqnTNtygSSZqCU1uSargnZXtaz",
  "key37": "4Hp63H9RSURZgd5of6ykkWjNRoC27qMitmYWtVMTPaUyd3dutC8hLkumPmhVmXk344UmAJL9SanhZQtTwUFu5dim",
  "key38": "61pNoezpZNs2bKfJrdrdByS4sZpR5Uccx2Mm2PyyUws4ArXZNrP1Ec4fjWvaVG9fwu5XezbjoFJDPKN4CMLRMdAP",
  "key39": "4q2RXTgFzTGKYAUQcpLb9X6GXhzPL6SvsuhvR5Q3QEM3q4pgAGuvwt8TbXMMT2XcB9CanhWDpYBVtZmZfLS4wNqQ",
  "key40": "2kXM4WNshuHfpNUKqGu45zF2ScUMNEFDYAXZ4iGkshbJ5aZRAJBwyMqPUDJiS3dvkHcgXQNk9NdrDHynrqqi1C1D",
  "key41": "3YRiuQWMrLLFVA5vfG3qtbz5UDuncRm4CdRKk2zad5gAMRouYADHtRKD9Mij6JTEHGyRkGn4rNE8fRgLgnM66DPm",
  "key42": "4bZ82cbcoa3EBMfiP2eZXN9ZE8bEJ2eyEPJfvEeeKQGXuD8qZEvAGVZYUHmsh2CX4syFinFwV2zuNN4K7WM342wh",
  "key43": "3dSyk9dE9agNjQYGuvRLFUaKFQ3CdD9WaGFLtTs76Yig55ZLNCfpwwsz555Si6nLUaRrYZXHr2LGqw9MRkmGxLcQ",
  "key44": "5CBWzPFEAb4o1mRG5xantxWVdhp2CBdRMkPjGBZzERFBq9kRVwUHwVxPtDizuAiUfXu452iH9To5Pn5EZHta12pB",
  "key45": "5aG6H8NwU7kJSEp7ScQXZtoVao142squgKtuRXa8KHygRbfK5KDNq6EY6VcwH39abc6vE1BmtDbfjZ9JREeZ2TVi",
  "key46": "2Q2AxkcfNaJtcNVRADidbmiYrhRTEe79BNFD6kSXo2pWE2rZev6GuKfnB8Kzjqrts1cXC7Jq9PKfzxbPbYFo7hKc",
  "key47": "5Q8oBoZjYKPGmcdptNoVi9h6c9DWfX5BA9q5RHMvXDZZskMY9hAoMbK7uYmUwtkSoTsD5gNCFseFoLcqtMfbxUBE"
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
