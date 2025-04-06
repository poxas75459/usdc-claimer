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
    "2fJ6niK5d1zdLypdsGJU5CrvoXre3i9i9bosxeEYwix95g3XfRi96oKMG2m9T6FHENk8wt49r5BMCM5qSz4zTyka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ig7j7biwptb41gk2obdsBzbHGNAEbGLJpQbkkXMyxWTFiwkX2Rb6TEh9isXzuYf36hEAyDkkMaxYizpqZY69Zm4",
  "key1": "4FT2k4pssJxLaFLT5VGHsnwibctvZbx6LQNX21msxkVgJFzmpQVmDMbxH4fwSR2KhvbhLPCv6661sB1wU6DHC5jB",
  "key2": "2HJCy8Kip63f3rJsFW6QBsdYXWpvGmcy93jZfQtBYiQHCWZek1Jg7DiaxtoeyC2arVitbyFeungym2HobwmiJxfG",
  "key3": "3U1riFLPjwt3wMdxmK6r2J7JuuBhmnuptSGjJwMp5MNLegsqTbkWSb5oWYC73diwvE5fuANNdR8bMM1FsmZJENss",
  "key4": "3BxEZJfUpT9n89FEMmQd17KRQxQ7GfSkx5ZqncRaae3HNVz796CGm2vKDyafYywWjUenrZ1VDXEkB9ZKZbfuMa3V",
  "key5": "5AFPBUZr5wbGr9viGLnDbHTz8uZyqXMEdjn6EBGWcsAEuYnejHYRQEcLEyKBq7j18Lu5zP5saBDkzbmWoaUCYgaM",
  "key6": "2guHRNba1f5JMzQyktTrVhAVvPtMxbEa79ezvCfttbPEpitK9CDTwnBugggTz7NS7DyEPELKXWmHDtirZ7v5ktRu",
  "key7": "3dWTYU4N8ZDvgbxwQm6pNMGzVVkmUePh4kgsd4c3a4wVua1tTzWGWcY3rfxJMwCw5n18n29JucvuE19sXsCWAryi",
  "key8": "1Fd9xXorcHRC26XdMWuUb39QUePcgy1h9hSBUruigvPkbeyMQDbVT4vgnZdvFaE5erFmGX5e83hKLp99YjXifuN",
  "key9": "3h785Dsbe6sHuRfArCgR4R8JNdnfGxwHQLPtV1e9NG5uVmaZyqRHa6dpGcYxeg2Xrm7thXxC4oEVZH7Wc1nmS4iG",
  "key10": "2FvgQAouCALaG3NNixHtsBCSZty8ZjgzeoGxnVHDLeSYo4R8iU13hKXfVrN9M9LW5xFfweEnHVjYFQd9xTgRGSYP",
  "key11": "2co66KxGxa5gZyXDC2EbSNvANqWfPnASnSRdc6fczTedoin8F66kcY1STjZuNFWYpZ69Ert3ih4EGkBA99rdiMP5",
  "key12": "54XbJMQ7ppe9sjn9YhDFSvjQgywXNJeQHJa1HZS4H4Q1RMfevTWL4SBMD8AoMwdqnaZHHqGAMTP3pdPn7o1vCUpj",
  "key13": "24tUP52eXqE2H3tBS3pjRRbSRs5MefYxDZLhNjhpQ8SSPATRvf6iwcfPn6s253y28GK7J5QitGJtCzVmaF2TVdPA",
  "key14": "5UHwNe6JiHkssdDEWXqL6seffzo7T2KGEmQfUb6pWuzZcJVe9LM1pTcLB2tP7qteBRWjCcs4N7igQdahjSkootPS",
  "key15": "YYRsQReJPxdg6L1RnhHR4Kzz628sS21hMeojzk8XrRmN5GshvgVGW2CTdyKZ5UNtpJPYW1GHU97pNxeXiyZKueZ",
  "key16": "4jaJcAy6bJPeuAmhHoAsQQcsMmVDY3xiipARHSyi9XP9eEVRzPntSN5xwC45iuFi14G5DMmgKS5s66bGNuhmsCsi",
  "key17": "4nuZjmv8n8stjcqhhPYqxPEz2yWjDEKBPzXLTdjEw7rieSt7pkExXd4MSLDkmLxxVRzSXg8PYyJ4Q3KPqfQ7sNd4",
  "key18": "2S79WzprQrmG1kTSdyiZNBVX6HBCDymyFvaHDdoELo3jnSsAAy7oppzpeKevd8ZtmZnNobMBdSMSQ4h5pSduJTN1",
  "key19": "4ugGGcp7hPZsjN1jVfqk5v5TUNFJMrjWDhsVP3dNGoJyHYAhAhBRJeYnoMbuYiYs1WVR2oVyUcSknvSGQcfF6jxa",
  "key20": "5uKBQDZZQFovWXkgmJcUEra3iNneQVhreJstR4K368rVi3bsWfTGJuVJvUxGGDtqiB8ANkbnpYKfnEenJ9MMuEay",
  "key21": "5G5sK1XPEaiVUuuA9ktCscwcQfw4fMEvTY86xMiPUYDUNbk9k8UBctJNXi4D43dD4qTWTCB58et1EqzJGbq6DNdn",
  "key22": "2hXFu69pekjDZPnYZeMELvBTGmnndPCRyz4jAihzgVLrrrfBiK47NTypzX77t5UMvzH1MBZeb1raZXcVvNg3cGhN",
  "key23": "djQazRB39EZxxHz7k4CKqmBedVpB3RTmqxrscMNHkWK8CtkCyFv5U5Pto7P17J7P7wt1yPqbpVMqonD9iJmPobZ",
  "key24": "2ifwWkf6WWga7svjZZXLcftJWBVMzXyjq2MKfEfGcNyYorLCqVSvZw7gW6G4o1aZBqDVGyjEri4mch8K7wRgKx3k",
  "key25": "3V8ujDX9y915Rz7ZZeE4Q7HPCAs338KYd2V4QjHXsuHC7Li6GysVytujaSseZsRQ1aYzcKaAA1zhfDRYkCM3zJZv",
  "key26": "RrbPBRrVwZTyt12deEGyghNGDgJTZUXm6isNi1Msyg3oHNuaiKrCWWTjRTkx22u1XhL5gixKbiUZms63aVTsyjU",
  "key27": "caDzF5dHMrb3a8VhRjD1ifre1oHjW5stcgVDMeVpSGtH5f6UbfFvdU5eQZWD5kZrRJXkjNGnsLucjQRhcuqwHx5",
  "key28": "EWzL48FB82ZxCamoDJ97KFdxWhkQPNnceZki9rJ6RWuENJdgsEU94S1oRLjudaZrYc2L8gQ1BBbs6V3dmA99Qck",
  "key29": "4fR4zuh8SW5ScrLNGKbXkWACFtm4ErJs8pczCP5VeaWeAHi4EgQyS94K6rKVnkd3Msn5t9C1w9RHxdm2piKX7CJ",
  "key30": "VMajf2Jz9Skhf6Y2c7Y4q6EMKsA97JRoz4UGEYe9Y6gJuUvinHsff6XSrkqjNmbLFjfdBM4VVwr91WGYxX38hQr",
  "key31": "47CstU9Q8VnvFcQjYM11KNUK7fAuGre2iGGLd2qkYdZ6G2azqfbTQWn81Bu3WJecuWrcsJDc4qxuv2cdv3QQfF5p",
  "key32": "2urDNHH5hzpGF3FwdiKYEh49Pie86eHaMcTwk1JdfkZnfGgGMbNLGesXm6gkGAnYa658VLjsPXkGn1xRTCbdVmAT",
  "key33": "53pubN2vbixCTfd5mMLYP6u1WS6Sjsw3axY7NUhaQw1aT7Rb72xqEey3iht9vMoEPXTapG7zLbBzxvqGqnPocKwb",
  "key34": "5yNSXYGqmRiZWonGEW4ZgFWq8y3QMXhT47n5qDaAneSoGcdVnCAYjNGUui9xfYprhwtuKKt6NkSaqqu5qxp2AcNq",
  "key35": "38bfMpo5QZc2XVCvv72akVRtdDTxRMjNfuZ4urojTHoJWzjMtJVKpcGqX7A16xuY4z5YemcxCwaPVPtvBVCy54bn",
  "key36": "4f852FFPT9TYUWk5dJC2oRvYZipkiyYNcXDn5Eu1CPavfU5kg7WjzKT9mcqKHf1gR36q6z9na8nerUyjm3edAkfa",
  "key37": "3F7gjAMyRhECqVpyvetRVnThUAb7jFe9GP1wrvWGuAtHbywTmSMun4PrGEaHzYPb62bAtCG5oEPaa8a679seF932",
  "key38": "4GaNqq6uTPj32VPxnzhipgjnYftVjeKkkWpJriNnSv5bs1fyR36eFFgA1yKUw7R3hQbewb7vxw4aC24rCvyUAe2f",
  "key39": "4QtSJ8M5C3EpNsTSkTKLpxZGzXRHnKDfFQ5TZYsvmQfgb9rEQmCihBVgpdTCBDTh6vyBTTq6owJSx3GqtnzogUGm",
  "key40": "2awpFUHKqpZSRSPUGWY7UtBjNLe98xt7iERubgUQkxPVyyNTRvLBXTEKQcTfYTB3cnZmQHpBrKPJAdPafYFBvebW",
  "key41": "33SDMSHysbQQSnxuMki6MM5uWQMZZWT2WGyReJj6rmuNaXJ7HkwkPcPX5gJD39aSaoyMHC6jeCnuJhYRi8355rYt",
  "key42": "2yXPg7uxHpehYxNWuTUMJA667J4dFkr3GZLYowEXhj6sUZWmARpAfDrbF2Vah99TrXmSHPhVAxaALq9RS6uQ1uRB",
  "key43": "4tB599Ryf9ikERSkY7hPrmetyfyWMwHBtxqUWUGgykfTizXuMZyGd52P2UePCHyn7ZohzhWDmANMgUipM6VdR69F",
  "key44": "31KJHpRZrxR32J3Sb6m2HgkeBkNEo6Qnwx6JatSy36yMZ1nAENRyshD3dXj362maw9ktrBVuK5LzAMJaRvUxjRqo",
  "key45": "7cPV7T3m3TizNabY219UsU4BFmxB4oB9e122PfEfw9rkPyEztFnfkCPAqunEi9pRVbaastT7HzGyir2L1BJznrg",
  "key46": "4XZoXfyWwtGhYBDtbyKdvpyhkJYjXio91QgY8b1RgaafqoM5mq8FfywqXVZB6hhkFM5uKAsMyFJfKA6Ftj1eB2F4",
  "key47": "9up9sVina1G1vyokXJ9wHTHjSuyY6Fi5jeF7Rvfj4x5N7ThZDLsBPDGHpi1V2nmQJCnSCkzwARgidNPbYPHfMag",
  "key48": "4255CJxscoLAUyNeBs75vvdmNTq2uYdysE3Y2PNGhZr2kmPmu2jC9yoqYsY1u7ZBJAeRtReDNqB7s6ZaVfBBAUdz"
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
