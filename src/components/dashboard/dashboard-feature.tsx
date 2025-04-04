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
    "2F4x9igcdAdtv2awJgFogk5R6fYGimfSjbENGmsZyFmJwZFBQG5yQS5GDDBN7dd4WqA75rFjbKh1crhyCbxQqqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5fsEPXMu1gQ9ebAyvckWMpv8iM68VXFWCXjqJD36e9zDAir4r7ahrMJUNMvSViFEKiTtCMAsiQVCMi6sJdY5q8",
  "key1": "4h6cEuBn9cqp35s2fQzyCS2JbNJfmY22WJShrGrdxfAZ4Qd2nGLy4Vbz8PZN6HJACt5rbDjFPZekiTYmNfNCoGA9",
  "key2": "2iFdeqMKfu7jSuWdNVb3R7BhB2g8MctEXvCe4SCQNGe1LYy5G7iDuaEpe6VspSXMEjR9Fc3YbRnc2fKVUktgNKj9",
  "key3": "oxQEWpVPCnozZrxEhPxAproebGqw2JSZz1FUSjMpU8GzaXtiSqcGb6gjwx3JK1uLt5TVD7hudJAyLDSLzjpPmD4",
  "key4": "3GnJdxW9ReD8JxKpK4w9PpZy1Y8z7a2ZJkS9gtaic2k87zMXPRhJaoEuJ5Mrx5qU8bmuu4YvGWtyUpJUvkvdrRvS",
  "key5": "YunTGBw3gnD7jPgaVWgwMSWUNo7dhRBAEXZaWmBN4a9PmuBjTqKHFnB1sGFm1GJmhEdSjLrcVUzYjCDwZBRDc2A",
  "key6": "4mFBQo2kVHeDXKJDTkfwauAiyy4DaAuBUTxfxfHPAEfmX6esA4QY1i1ifgaWMdfPygL21EY3Lnz4fibvsuVvMcLd",
  "key7": "5hZ56Y1f55tBNFEiTZSSky1Um6bjXJTTbE7MQacBUv3XPsubpTKzYRfGepz1Rb54c1cJSa2QzJCYMW1VmDNH9c6b",
  "key8": "4B9LtasPrhsixkZjzTmYVpL4gLhdYAnzBg4boEakfJYJmXpo7VxR2v8oX6FkDRysADxfEpLmRoqEaz6wGshkMzFE",
  "key9": "5bPTgw9oFkA4RfcLNEEjM6s2sdPjPiopCLNNm1TFenwp5m3zh5Eb9nJP1kk3toa9LVuDcDizXfd4sJdRDu8GH6su",
  "key10": "AxAxdubmZUw7fALDee7cnyGD6fr2fYHoGqJhNfxiGvMLCq2wZQLGvntwMuRK6b3kHUao8k6dUPhYVXw9uUoycAP",
  "key11": "4JG5424DNr2XVcjEhQejwsyCznSUp1pXz4co8dyw1eEYU8oozHQH59byzbiM9MqNjc5skcwk2KhwxGDbrVPB43DN",
  "key12": "3FhcWh1hTqYryZc3DGGptFnZjt3cTjRmEiEp1Xd4c5c23HRUPVWyZCGyVa6f5gWAKHhJQbtYniBo8GLJW3iBiAqQ",
  "key13": "5w3PPhjB4C4wEDSDcznvygpSDfUL34Wadenh5iFtnzhzu7KyWCMWgUm7kkyrzjxEqKDoWm7DET6obwMg6e26PJUk",
  "key14": "48SsYQxDGNG4fZuTYYVTtXo6wdSxzzT6NKK7MCmjXGjocdToSnNfcf9Fj8JvFjjbVPMM3kyJurByZkqJEPohYDP4",
  "key15": "3NnYyusN1GsAMam8ZeY5aoF5d7ACkSuDxiqvvGy35ospGZdcGMxVh9fRLXcTffnitjh2Sz5Pu6Kc5cxb6fMU4isb",
  "key16": "2JBc4FujPqsp7qsS98knjNZun85m2gQdBmdoCqH1Rq71fwhNfvJJbGyEBca7NnUDSo6QxoJbP3aZ9pZPgXe25jxs",
  "key17": "3hVZfR4kTnd71j2bVQJyLEaaUxTM4sBQ1WYUVyRCLR9REPGWHRDnWkMtFrh7sVm5gRF7BVB3YHT89bdBAtZQq4Ct",
  "key18": "669fscQrARnqN2zdJdjQftAPJ73UcRtKScrrmGQeasVc8T1MbWx31rEPMziZbfe3FQLh5kSTQ6zgbZJsSohxgYJf",
  "key19": "4dkxr8UR2Z1LpZjJ3gk57qFHMhqzFMRKP9mfwYrEzLKSBJc1zWoryt2E8NDuPekmSDahJ1m5M9XNRsEp86sxzwjA",
  "key20": "4EbRh365JTQRS3yfWRUdSo9FXoTp5nPTL2AmbtSD44b7Dma5q9PyekMb7knhYH66f6SBioE7R8hLidrNSeGiewAb",
  "key21": "3VCdQt5usvV3okbwsZtgKnhRewTfToeeFnwBXbcupaTeUZ7ED9JHuhF3JnTTVinmgFjcxt2vkxUzzHQcDZqeofZT",
  "key22": "3naKDmBzideXjyfT4AP8hQbEm8NpEC8FrYdKgFDq5k7ykYLQiaLi9wTkM7WC6yJp7SH1AdhDvJvYkLu1aoLMPUyh",
  "key23": "4gT1EeCRrr3gkwoqyvBYUXhmRk8DEZst4aFCnzCxPbBojQuW1XM9uMQCFvWr7hqBq7GWTANtdDTEFWAYihGu6mFe",
  "key24": "2jdRtcKTPa7j6KA4pGatWCUQ6FrzJ3soovGc9Mo5z9aJFiZ9LmYmb1XYUaj7kgytF65Hf2JAcWGF3xXUUhATCrwd",
  "key25": "2wYrZn5F9gXhsmwDLrSf3AzFsR3xmCQTb2PQ2iTXamXexusXFskcnhmED4FHM6ad9GHhMGkgTmHGdhgh5a6of5sB",
  "key26": "4unmRcM3jw6GBzEz28e75o5UDFoDRPHcoF1fz3Zqp2GaAAvtCjiE81iFDRxQv2bajv5PBBKEsWm3XD6Rhmx3u9mR",
  "key27": "5sWRnknFrMiTRdBok4rcwu5m32YT6k4P9TwhV7mfoPCRHVahrCveyoJWGC7i4NDZ1qgnvtxZ2xrX1hErhc9YdhXp",
  "key28": "2PR4oLiEcM6iYnjX4fLfpawqfqcWLRqBKciLbqa7gMS4SS4rqiryB4uG2pqngjyuoKXgerBMqg5Yz3TbR5SX2ZEQ",
  "key29": "5tyXwAteZuu5CKToV4826X4ACSczP9Az4zoKGfbE5ndUhSiiTWF2LvegdkzV2jrnjuKviqRpqbP5fQr4Kx6Mz7HL",
  "key30": "4Z9PHn4TuUhkrTfupUWgVkDxzH1AEzrVeZfik8ziRrjS3G9JcKn9BjPNSbExrgxqnXeGy7j4rTZtxV2Gkz2owuVJ",
  "key31": "4EnT5gGxoo1fGWSaSc7LbK8CBoc19MrM6td568Sb2xoBk8gg4G2nvBZtHtqmufP7L1RsQvdmfnWM1MwCLBEAyrPr",
  "key32": "4LC1jUn9XJwLV9tW1kgzmBh1deppaH9mwvHL2ETsM7czt91merze6shoW5aCGzSKfkRgAfEjqMcCqfYwgkd9cWaM",
  "key33": "3JRz2N7sDdKx3qEDyGmEYQncmXBzUsypR8yqq6oLV8VsRTND3UjSXzgVG8Q2s4dwGMpxKbrbUGcpa65AXZzNhBAq",
  "key34": "4oh2J8cAyFpeBUuzVyMkrzRxKkwHXL6eNGxS2KcHJYB1rxN8ngr32MmwZeG9XigzSfgUgMukYvnHCiv1Y2DFqe7r",
  "key35": "2BCsouVod4isnKQDbDFFWX2HBYwKTYoWP7J2phQD7TwqAa8UML4aJSv1TkE4W5sMZgZpf8aGDUWiVezoJv9sKzb5",
  "key36": "M7XSwAUNd8hoxeHY3EbZvkp6Y6WufJh9uykQotH28eNurTYxroge8DiQBaPicDK4QhV53Mu2xGHyKkVUJyuLAbk",
  "key37": "pxmecc9ng4tJv8x3P9vFfK4Lt9fvEu7RH8D4fKy4LZQmfds8BQum91nghZkX1gfshAv2HZmA4LfUfBKPE7v897b",
  "key38": "2JYpEpfavadh5eWXtwVGyQyMGhtDHXx3HdftoacLu1gUhS7K4pyVW1RFo9PfU7BcRP35rg2HJ4Dg5m8u3wtGhpAz",
  "key39": "3PYy4XFhfnzR84VovUgno9gX2WKExP2eunQxV5xcwyfcuiLPgmCi5UyFebTcrjAPUS7jmKQY4sGGxiGobgsgnu2H",
  "key40": "d8HuEb4j5ZxfGjRxLEhVf5dhTKmHhnTMy9BAmqPnphSyexJNHkQyvkf2sFtkUZWH9w5vCfzzKHFyeGVocUnvFak",
  "key41": "3HdXHjmzEX3F7CyLcwumoGnYqQKVKth7ukvyjDjVXos5cBF3KJ4eRWEtSCdmtws8HuruJ9PBhWazSygwyiQKMH1d",
  "key42": "5DW9podgahbf8EyWvZsnktQZ3vLU7P9TiK4EQq2vjimMjYdcnKh8i68mfmArx4HzVt3ePLfsmjBeU8MKF6k1rdQu",
  "key43": "3A6SJYCB4znKrRGs7unexhQWaNT1H4rLqn3QpVqGjpGEKt1dEiJZ96SsVyaBRyskQbHwt9iMQ4dKKTT7Aonru3wf",
  "key44": "5Do3ibaZD1QR5gSyk5kiu2s2oFj1ruqiFebXTVh4SPoziK7CYfFF9XLdxr5e9JYwmCoqNVamPAZjpzuwjZjWW4yZ",
  "key45": "5YQ9poLr5uWCHKz8QqXTfsfgE9ne15nmpWE8ffiFpr5xda7i41S6yhoMLQeUnEjkeaea1sgF7KQDbamwYcia7r3d",
  "key46": "4qQJ6yjaXR4L3ZnCHvUreVr1AhGwDxV8fdxD6jspLGcqVCQvAYzZs5m4M2cVm8DboEfdP1nDS6k65RPeHjZ9U5Qe",
  "key47": "QdTkZU2Ej77cB4WvrLPC5WTowpikwwwjerCtQCAtvtny2HkSp4mLGkiVbYh2HYFABYwzMQo6VQc5H2bKunKnjBg"
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
