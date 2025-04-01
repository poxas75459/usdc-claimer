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
    "2Vv3s53JPyMVNvVP7fZW56x1R4djJPVqju6gTsqxujyMDzJ8V4M12uCaQhAy6ZYaaSTGRCoGAscM8q2RyS4wVPam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2844VuzRm66baecJ3PwwRkx2bZPC8bS8brVr5tYUMY5xoGQcP8E3RnrPJmaLREcbrdciDo6UM4yzzq7uUdMoztWm",
  "key1": "5uPpSZhS3SSsyV3NBG5DpuWpnByj1ABeb5EjnhKXSanx8Uf2X9GNfViegsMiFMNWQSwoSFb5RbzNCKWDWMa5w6zY",
  "key2": "4upxtdu7nb96iAU7FhVLYnm4BBuwssMbyDBArwLjHqXUTBUVMW3mWySKMWT6WYe8LELomvCSgsrHtx8MSkGXQGMF",
  "key3": "8mfJ49JsZYgPedf8zop2ns4b6gQ3Ku4TtEWt6D3K4DDa5p6ZSoqDkpSmkjnjGchAd3mLEzM8FFPXXWXvJMkMJZC",
  "key4": "4H2wTaebqhMrhgUPjNCiL98542AKSMTPVB3bUtgTc7gzvcEBbM9KMKGnCTFCdxMAvd5rrx1CRMfJz8sJ2zoJWVh1",
  "key5": "4hoSKpNkL31Lx8VW1hcKC3uiySU14ZDuDx8qDDcWkbtBKfmpEag2Au3SVtz83qFUAyWY82McjPWS7P8y7Y73sDm3",
  "key6": "3eiRM7qLJJKdvSC6bYipVHw1JAnWVuwm6RSo2np1sjXjYSonwCF1cvLVkaFzV7VNCrqg8aEBpRtvQ1oEhufqVwSJ",
  "key7": "fHrFTjt85iQtNFQbTrg7mMjgzVU7TqUDaDCXvKSaet6nEQ2zrX38cEGmKyUExLZHbQ5tGQxRu5YyWa29DKtTdSa",
  "key8": "3goYv3hBjZRnkBmc8Bni4jnxRJomd8rq7sdGbvfzs9V6dwg6Cri4Abu59C41yHnkjESwFxtWCvAGFSAyfrpcWMEH",
  "key9": "4YKMonDEUAttdArthwWES4PNDa58ZereZ3U1nDNfUmx3wWrkvKqsrUkW7GJ1EvmCTU84wz9oiEwUf48YAp23rvhg",
  "key10": "5V7AetbMMox1jtd3N9P8bG8Tqk5B9XgGayQ2UDfqQcHGZPWEHF5gqnpd1aFZcNf4PysbbnywRN6sde1Hd6HZqkqN",
  "key11": "4fXjPYrRLdGpN3wqEvtVxGYfUu1mTi9uCcFUooDdbXh75mfhnRMHy1rC7Us1Yxs18LKt9LChXxUshSRYwnDqeMRA",
  "key12": "4g9xYT46PMXCoDSj4Wf5KhDnSU9hC1NFbWu5htRZ6mvB3JV3uNKFbPGkReDe9RiA2PSxENQUnANQN7XCWxumhCy",
  "key13": "2GNESxRbFt1Yn3wD3eC5HaqFSpvukCtsuW3Svh4wqRffE41wFMS9cy7ZQQXDYmmVGPhSYPHhmYEvoHiPk7AfgcX5",
  "key14": "3YuSiwj71qLpnspk9U1T5FG5bSYWMQyfuqJUD4MM5CLCMb5RdcnPMbAuM2uD5R1F546CdLNW9PzC8mgnBAEiPZsa",
  "key15": "34EnDCnEDjybZPi9yda997KsxGyWvNDKG4BW5rFL3HPKNY9EyfhpEfnKe18qhoJy4SsqnjHVDHT9EqgH23dMYd83",
  "key16": "5R51cC7L13SuZJ1uCcaumrMUJ5fBEqu29G2M1pdgHV5bMLgfpJbjeULhqFYmToAisLaNvS6MiHLDDMtGVwApYb2V",
  "key17": "5xeZGX1a3UXebuvKCqAmDW73PRtiw1RT9hZANLCiTTvqvoFBwZLuANTmAAiLs3y1cs1o5PrA8zpTkCYBz9Dos8Ms",
  "key18": "5ieajtREM2xrDNBurYViGoVjesx2jKU7tTjPrMj8gvUrszsdJQFykAG585QuyMkPAyJWzyuGVvvtfRFvX8VQytvK",
  "key19": "3pMQYHqnMm4cWbikKFiy9vtXdwQrpqTJeYQx7XfEJRkWRckpy3i6d4fVXAihGK6CktT13WzW1enwpc3Sp2DE9AoA",
  "key20": "2MQZg72mjefRCXmbR2b4mjUTwvdHScee9ZHKy3ZyG6G4HMyPE76x8aj2vFx8dPCJFaTgjbQ7XxptuPeM88dMf1gB",
  "key21": "4MGFgZCEtQvUZqnzmjAFxTo7mdUfAcCFgSx3AzDBCbQUL1N3gxfDhxZaoYsWPoE3bFybATGVugY5ebDnao6hjWPS",
  "key22": "3xm99S4P2MENvgSsCxSCouY47qrkxKqJ3WtNSFCtx7JQ6bNE4iTX9bFkZ5eTuJ4RZqBNPV4jDqyYKfMkbyRknZbp",
  "key23": "4Kg1hSZKzYVc4ENBsWXcRdyKC243FcktcxT8sH6mKgKdQhx8KCM3BsJzGD5BCUv9VTBetxASWkdJVHNab1vj6TY5",
  "key24": "2oRFXT843WNrHXXQkG9mZd22caWULUUnjMnSFMrpGkC2ACoV2MoGsCDWc4zMViMHixXKvZWfB3DivHKb9SgwUzoX",
  "key25": "33rYFR8PSN2LD7Y8rMdos7qNRqhS7BHArv16BVKkGnCdQxe6obHCP3xXcev6EucMm1kd3yAeyX4or6Yjyrvu9Kqm",
  "key26": "itpLCvisaHofuHVUvCPQ61ghdkaw5CNL9H6EhdDz68vZ3itBoY4UBiua1Wq3SeBDfB4iqq84YsHhN28EWViQ3ni",
  "key27": "VruNmhKe24y4r46PHVPy4TXTZkAYyWAv563ZKzL9VTax1WboNBLEcKW7moCB2AxbGGjWiihiJnH2s4kuMw2dq6T",
  "key28": "3LNmqbYASLmhfgB7Ci41CjbTLBFQ7ai49Tjanj2tf92KUaT9YFXoYQViNmnntsSeDjzswyS36GdxKizxjBdDZwFG",
  "key29": "2yMaqcqJG1YmVv8476Awq1tKnUgQwJxdEuBGUBcQcpfLk2yfpvsCqtJBFRLVoKjQC6ZgPW9shotqf1smD21dLbth",
  "key30": "xEfs4xthStuCgvi5UUGBbk8Sr9DXmmqer8VLKvdsfdshh9dXcEosAqu8jPT77KFDrPnyVaTvEfjn2qp7cN7VVm4",
  "key31": "2JCBxngeBnJx3eWDMtKg1oN8pStVD9hTyBXKxqEKmsKsS7GKEWGzpMmij7bN87LvLkCPHhZ6HUSK7oj1JJpaBFg5",
  "key32": "2Kww148J8FXmVUecJTLnUM2A2huAgVyWDsVTcL3jXvv5TwUXwizs12UUPGYzMaab15Fpwu5PGiofydeP1qGRRwQA",
  "key33": "2hW5aMNgexARHv8eGVHgz6FUEGPXKLnra6zvry5M5L2grseCLy66XskWJkySzTyCovPVSZjQJoudw6uEqfF56N7d",
  "key34": "5BewZET7DmaE2AiZV6fPxCR7P78y9qM6EeUM3qJND3osHQ4VQMjNnfA8utsu8DKeagM39mDQ6hYhGuFJKpoMRsps",
  "key35": "4ceybhcsb71JAtAk9BuAZfJyFXRiDKeKv3F4HCXYpnGz1DQb7zs5XvLbzFfBhW4praU4Hn9Pixa75XDRvSRaWuuN",
  "key36": "4mCJVrC7TLft1DozwZVV44Vo6AMqtZPGdkHZUoqu9sBgS1sEuMzYKxhk3v3nLSvkQidEqsU9nf4RPUByJWQcsMfW",
  "key37": "2LezDwH6cArfnD1YoeXJnH4eeJZLXQXWT95qhLxK3RqgeDvtEH9ZLzgvuN2hUuyfuaRpBym1PrPDc5DyoGiRm8ZD",
  "key38": "59yGxXJrbVWgX2GxNXs6ffCPDbsQXV7M5hPKyRhrEBx351EbSgzFVJ2x8TDBrtSRz3mzn3Ed9CEWRrq6gbooaSSw",
  "key39": "5RV2i1kpZbfRxqqmrtdr4o62Lotsa6LxaJdgY7hH45A1azhpLCf2rep7Xn5g1mtcUVtdcWyNkKbHhu8dKN3SnKXw",
  "key40": "5sANL9pPYNR9Ft4K1nhUZtjR6wSERtHpawuA8J19fEuVkhLsAZLJbsqTNTupkBNZPBKuRi9qWS2KdfYUGpKjzuqg",
  "key41": "26AgDf3H9s5nrPq7jvrHeA2UWwPbS9FTocahDQEM3CfKS7Uvu7dAV2xgC75NMjqeTRn1W3e4BFxc8AWAoyA1i7iF",
  "key42": "2e5HxFCPy9iuM5bDsEYRH162mAobzMtN3ih5q4xDNRdiZ5AbqYKZpiS95LEVdhdfaX77jTKdMJPfLATRPYmR5V6B",
  "key43": "4ZonvbdE833jfZNQmQgXimHqmz5ZqExMMGYhKY8yDUUHrNshSwGTYeVvyKHjZXbQqWiPs1jX4YmeQdS2rpWZxjrH",
  "key44": "5yNrqpXuTUHHd3J19rWzdxJpHhpschqFGjbrCwXx7bjbPXybgjie9Z9y81fxkZLfAGGvNVeecdv83esPKBGWsncV",
  "key45": "5SXLJdrT2EY3YxGD14hveHwScNc7f7wkgNSWbeaqNtqZd55Ct6i8qfuk6xmWpYAXZJQzSD9FQN1qHoB5qa7XPXp8",
  "key46": "PAEbsjWivQZm5A7dAKVyJwem21GvNZQU1ucgHrh7eDx6fR2atRsCQq4UaozSYvchqfWLMpGBTd89r49oCHySkNC",
  "key47": "2ZoBvmSPEbyHPzyUhvtV9bsQ4cnuQu4rYtyPahYeK955e6mjTzWMJxVmnwEoBtmsoQtsAJvbzdnpfP5jepoNFqN1",
  "key48": "3Y2EopE4zrM4ChgCzV2b6hP9Q8wMxUYBPmNnX6ENwqYdAwFrRgX7NyHtNViGgGSqR3v46c5T5yMrBLZYeds9KoEc",
  "key49": "3cBvLdtsb4KkwVLZagLfd9ffBGAhCgVVyeK6xeP9TF1vKPjv4taZjzYWC7jFJ6dXT9x46byyB5qS7siZ7XwAaeUT"
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
