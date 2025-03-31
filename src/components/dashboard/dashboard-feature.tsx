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
    "5zKADxJRyWsERRR7bQaRJyn4o5wohCHi3qwu9bn9sUvxpEaCHW2oxgcBdcnCaMH3qjSu9GgFJzGLPGRGq1MAo9GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XvLwzkwwXwqm3V9GMuCHosJBA5NPV74BD9Qk2zZNjCmUXaBu7E5hry7Frvs3rWuAZm63cfto41j84KMmX1notbA",
  "key1": "5nvV4G5vRJELhyWAFvfrJn8MeHBupciCoQz8MCAFaBuBjWAivugQxUjSRLbvnuh6fCX8E7kQuNuQBXvbxY1oAMz7",
  "key2": "3JA3sy7rpmB8dpQAujLsGdsEG9oeK8QAtLHueyNYuKBWPTe3qPeJDEmwRSa9tTZ9mWTET7kGttkDXcHqmRqGRbhu",
  "key3": "44fFQHJoK2mdT5du2MCVMJLA6oosFhYfn2eToS1u1kLVScqGbyYbdsR2HWHvwtk25ecvBs8kisu4NWTCz5cNyyqs",
  "key4": "3qsWs39hxarA2v5PdMX7QGrc2QbQvTJrDDT6Yx6hGtzJsb7v9dKg8cAUd9YMeEaGzsZhTErek7VM7zo2w4bL6XVh",
  "key5": "2TgpqpFAfheczparKetuYfAUr6dHyAivNPpY1EvhQraFqfqHNVXbhW9vhpNdxSBgFUmXzPSWotoYQMiWa3L5SNNZ",
  "key6": "2A4T8M8zp6F9PfTUv3W5dgnK3Kk3FaHPm3JBKxV9fXDyDGicMJ1dExy9pGtPDwEG8MftE9AavL5jTuS2rJsdkGSH",
  "key7": "61x2HPwBgD1aYNMT7Jc6cQShD2bXXpXHFqB8E3t8dY9KchfeR7GwRVYF3Je65kkr2tu9tNvtPCmX24K6pPfW3DrN",
  "key8": "25PDka49mr3JLJKK7H9jb6gn7VNgN1xy1mmNdMsu3SBYv9ac56pCet9kpaioXTgZ8aiJSqpyd8J2eKjVoAuDhoPS",
  "key9": "5cGGq2oj3caqRPahLBSCxAru25fZc5cJpEXN1VWmLvSGuTZkydjsuPKHJURgKE4tE5KWCjh66wxNeiC8QtuBoFKp",
  "key10": "2hP2QRbieA2vtx75zqZ8bzcFnHwcJ9Zg1SRnjnBxyD4DjyCQGZw1bAkAURvSwArg8dDXE6fYnD8cuBuLa3ZLew26",
  "key11": "CJdA8Ms1zYa9DmXvTFpFqkGTEgXGsyCuqUtQaRRtV4tJXfovkyM8iV1kcPX14WJWsxBQFErSqJ1vHeM3maeyXAY",
  "key12": "3dfwE1gKJweuCspGsM59jx89AH5rMVSpvJXfJkTvxVWiiZQVs1N7ajrdBoKBq5KL1a6p4ug4tGc8zn79BbTwSbWR",
  "key13": "DdwoyX7KKngRb9tnmSNebyWr52FZjxi161iF6GHSjxHL3uiGr9HLQpAok59rUaPFqbmw9z7kpWWbeoLMM9PbRVU",
  "key14": "4Hi3QKtkN5XTn1VFAN95Gaocjp7LKjR9nSmoMinSvmhwpy4Gwx49EtPgNRK2H4De7f5tnAaciPh5GCqG6WZGshFh",
  "key15": "2uZ7QEcpBWAsXSXcZMmMPGoWdtLDkLEX2wJRvQxmyyodpsvi84F6YzjBK2QHqQZ8ii4hrRF1aqJRRW6ihHYcD7GE",
  "key16": "3nMHpumx4wyKWbVKbkju8Ww3ig5tkZN2rRKHfQaTrdTZtxYXFAHBTwMUGgcfko5q8QKiMZiE1tpufh3mrAtdFbo7",
  "key17": "3NL6HVtVQSVF92DazXPsbMBtZt2133tHFbrbGSrb8gArnfdvrhJ3iHho46waSKMdD86EZ7y4jATixAqJHJUv6ikj",
  "key18": "4izpLCjZZLWxv5rLdKiER6P22PJTTRnY5jsE2zkP9TMq9qkx3oXMftYMv5ioQvBWpZmSRamEmiko79xpiCCL5Bah",
  "key19": "5MThqrdpMLmUszgteF1rkprUG5CtmGgrnASgJoRoZM2gvgvJvSFzBbWZq1VYVbiasV6adjZyMHiBLjgk79BhjfLa",
  "key20": "4gXf51HFwvnjQeL493WX3ufQAnHBcmUf7RvgRbFY9ujvNTaZXF8pxaDzBeSWdekGBbLz13BSzpaDzCL6k69EnCri",
  "key21": "5HnrMfmBBptUHUtoaS93271yWcg35fgra6AHoL6QewMaf5Fjsg2tPf1dFjByM5kKkHEtgWKmzazprn2PWr1sefFY",
  "key22": "2aUp2qyUvwvpRx1xaRqRJvhMEGNhVw9k9Pp2WrcHWQS4xD8QSRwkBD6jCYAthcuxgx3jZYiZg3ta1sZ1X6t4Qu7p",
  "key23": "2ipsUrpHMBxBwT5ofwXNDwv5qT8hkK6Td3Ngv5TxFiJZQAJDAYzt3KURU2mBVy4uhAYpeHxxQAXKg8RCVzJ9BM6s",
  "key24": "2AqZSrbaUNzgUesyhbFfTWFdAcceu69VRtvkKptaDvE92saWAMbycGsA5EJzVA2YC6GYb2Bc1JdrQmwDbNfqmerX",
  "key25": "2WGtqFDKYKtjqwtgUiURL1kyKeQgBV1XbLC3qMEP8gYC47W9Zi1TPkgNrhbsvhnu7Jz25J45iSTXs8gQ6jDhrpzb",
  "key26": "4wg9nAWFhx1uYKA83cffbnHoVV7R72UXCvJA5bEbYVpteS24vUceX34JZwHD4uU88Hn78R2j6cCekQZURJgy81X5",
  "key27": "5hSHyBmnnxzt5Nj8UoegxjL6HKbEPgMCxBFenFzQxj4UeyJEcLhCM4PC9ndrSomTo61oFwAxSfxT8Xd6c4SXRAJ1",
  "key28": "65db5diZfwJ4TGB6koRHrb9YxhvXuCfPh3pwDdnGPCoBaJiseFNqegAoPwzNpcgWCvgJRkC81Yjg5gV2DWSzuPvG",
  "key29": "KvKBh3QQFgzNgfm6NuStMDSMT5gvLwwWcJpVuNrsDoziDr3mUwwbmrFmPg3MDWpFAD7Q45td89TYFQViGbjMQiM",
  "key30": "3pJrmi93sJZ9E61NxJpqTDwpJNVXcH8nCzynYNXcDSLvPSeKgdbgMKmq1DzCVPWRRHQxHS3ynfikhFk2xMFxAsy",
  "key31": "2v5ZYsAQP4ENGZjHbkg5iAuee7yyJuUPXGgLU2xuH5cCrUc8HD2uAEK72kpz1Rscc7kgJP7wZJ5Td3KndztND4Cw",
  "key32": "3UTxWZfR15RM1QHAN5rBzCGSNX2F7pSEygyY9xJHkdju3GvPwsaF65z3zux3gr17txfJ37apxpte4SsSsBCodRJU",
  "key33": "4HQ1XxjXh1grLoND1drTMest2Sik1KjsZjEBckyWYLy5L79MLhm9EXZhZE8yBTTyY3kNJSXLUVAuc9SuPhhezr3p",
  "key34": "4kvivny24JXw4UWcFfvfZ9CoPV21AeWhfVAhiXwq4g8mQcFL5j4inDRo3bDXfawUSMxnJZ6EkZumcVCYKPPv3fqw",
  "key35": "4sXmVAZNd7gMEJFnyj3EWzDvpAwdkw5VT43zYVTJHptFH2UVgU83bbQsXmYvmhQnewZDdc7zfRBefwNQZJX18mi8",
  "key36": "2XbtD3BqcrYwVdpyDPWCnqEoTxDZWRva3iEEsv5c3HeUurHUrSixYLmv1YE33H9aH1YLG9SwUvvpGwKLeTacbMPf",
  "key37": "4RZfwwFYN9jcidBD4M64bN4SKafxKTQtn1ArGWKBRewXtkpUdotreRRqumq3cfBcHK49H4nXaJyYzJBdvoLuq16D",
  "key38": "3tm5HBrWm7wSsUxMopFymPMLANehicYgSGmdnwUHigL2vbDtCVwYNA3Ty7M7D7HU4ehVToPCfZRZTkg9jGu8pqJh",
  "key39": "23mdYBaFYADJKb8dHTrjC2jeL5ZnHsRVvkJpo8Qnd7A4ioadLv2scatUxGbkv9FZ3QdhFpQdvfPyuLwFMT7hdFyX",
  "key40": "3bKdumFweK96rTvUWbmpPeCQ1a7pu7ciuywpfk7JgNkuHcNN7tmLJNQm32ax6X4wbc5VsbNejBD3svn9xRvVq78k",
  "key41": "24W13mJn3UNxMQ2rdTYjKW9SDTSj4BZv5SexmzNCmahJiF1tpRSEGmnBrnw3LZUjWJyH7qBoGi23PMihiw1c9nXS",
  "key42": "3vdFy8viFBqQVD48E53e5F4g22WTQ6sMnVyx9oAbWXipSUZAV4eiqpyiUwLfdNVfffeDeWLiWJA6XmBj6UfZ52if",
  "key43": "4TCRHddrXKSv2vSUTHko5LPfkoZ4nT3VdwnG4NBUJZDAKjEgiwN99DHA6aQSZ31prNyqWqeyuLye6cANQjZ6Rm1x",
  "key44": "iTvhX6TNNvKHBHFWPVY4s8JUfvBanXH73SHc9PtUcjfuMKp5EtUcGA4g8QKqy5RTBKkpqadMfC1gVnCraZBj3pC",
  "key45": "3q97D3YZN6khdQfjWu8htSiZg666AjiFDsCbknF5mLFAR4rWnyWpsYxe1n4RQHpJy8d1mURcY15u11qsp41884LX",
  "key46": "3MVec6iNFrM3Ek78TyHiedDgjY5aSmdG7tKcqbdcTjaufkj7C5CtAn9rWzxP9MBrqxWuSBKCVxGPSvzoJtnKSzcs",
  "key47": "ht2JEh1iysKYqr5z61N1aK6NZ3KHyREmvcg8HfPRHmTGyXy9Us5rowxxNGDTsvCzXu5r8omhbKQwJyLGRqMxdYU",
  "key48": "aPbt6kS61G8vNQqCjiivqTpLzDXBC3oayuTBbuiPAs88eGFjT6ssPLHZxJz3kVSUfRxwHn2RWbDKiVdzPgLWjTM"
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
