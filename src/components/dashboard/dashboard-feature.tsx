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
    "5F8NQMdgTPgP5ZVLv5NxY9WZr1aetGnwsSJfai4LMJ18z1nPDDRsVYxTHwoU5G5Nen1rbDfgMm5paqBm3GX11548"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQcwqAaSJGvFPMwN4aaexPred29HwAenitoeAMptbMoxdyLezMeBs713hwBzxRkYm4gksQjpUrYcxDA1xxmzvn9",
  "key1": "52rJPkFjaAPLtbqRnuW3QPqSKkCiL82twohVvYCmBxPM3TrP8S2A4Jdv4xAk3huBNYaWuEH5eoLiZNxnG32gT7DZ",
  "key2": "2u1EN4SCdcHrMbN2hAJDegsZuru1jgCtvaT9VMJTz6PVj3fUHMaq7ncHwEwr3Wjb3qjXyk1aihuTdxoSX6jfr7NS",
  "key3": "8JpA3FTQTdSEJ8xxeQFqP16TYiknFJmv6UxT4bes1k7MvFemebXZ5Yi5BLW2Snk4s81gqod3Cb3S2jb8GMaoFhS",
  "key4": "5knn8yz4Aqa28kXuqbvRWLeXQ9rCnxf4DdSZxCn64QWongjbnXdWf2E2M2nZiyLe9huT8kvZUdx49osbE36tbtiN",
  "key5": "3AvDPVtwXp6Zd9mCdrKoqjXa8CaD1s5LY2KCTBVgyj9Wpn59HTrmEw5ErErWaGQHUu4m6GPe1gQa6BrfXQwpFQiY",
  "key6": "3gMz7uFHxut3i13UFxUSmrGJauJa5wTdAjbXc5WqKhSEPgr4BdkTA6RzLS9bPe52f5okUVnfAJ1Rcc2jHYkeZwz2",
  "key7": "5N3fAYrfYvTrawpoFNjk7H2gpAqoRVpy1UuSGPg33D3EEcG3qXjYquWneZb82YjRKXzSepdT1fKryzE5c6N2Y53E",
  "key8": "3zTzwuEZMveZQfbxUAqSMdsjr3LM6iwk9VPaBqRST5Y9MhWuADd14zfvyV4uhgGyG7SEEAUttrV9VwMqmozgbK67",
  "key9": "2UJAgwnThcLq6ByKN8V6zNfUHX4TgvEGFwu8ArtvWENjmBPpgaJXne4vqZKkKTot4ZLqmYkKWW1UmVLdguhuTG1m",
  "key10": "4UnmiDNE4ajMPy8SZ7CLNr4aGtAfB1TmLT2H5oVrFNooZvzTuCE6ukzqQ67rWhPew5F8uWo4Vc7YXbjEwGfvnkwZ",
  "key11": "5DMszwd4neo3V3Wz4mfZ3sUeQWZmG3thj8jkySzPh8QvnDrVCeL9t6pSrHpPCFGEWG3L2RM2xbotJr8CUfN9hsjS",
  "key12": "2pEX4XZGPKZmDhB1KEm57VkQCVjTLbi7tRCha3EJtzGaWxpKNRkHGSxy7YiqobqY3Uwm5HsbejcRzdxd1LLxM5Vw",
  "key13": "1jU8e2fKL7B5nmko46vn4hBxv6MB9b8H7JNsBm78LJnx8DYb4nL9dLHUvC8LzSYmNLgwWu8fQksg6BA6rv2Q8SN",
  "key14": "42RgEHD1b4syUYDgjh81CATJkceynLaaHu6eTjzdBLd32WkHYwMN8sPA6XeYLS4hmw4yhY5n17m3q7d6RpK43pfP",
  "key15": "2Z3rZK2TEuY7nvhnGXqZzbrnpVJA3dNMYhfiBzA5LcgSeThsy9X79DB4eXZW6LWePifmHPqk8bkEU6RHSgSYpXm7",
  "key16": "5R4uWNzBfWis6aBA1mvFK4KkwmZrjpPGqdNf8u7mwVGLvCFnKmsmtXDb3Pm9h4yaZ41zoNtVqg4XJcS99RCTjKMW",
  "key17": "5LqXSYjK3MRWsrzC8Vpm6Yo5augHo8miWKCNpZhPFoihnU9covRY6sgfnH6T4FydrTvubACL2oLMAyTeixQSBbzd",
  "key18": "5tdV1M6wCs5hnCJUUtDH7mVa8fQCQ3y9K2boZwknBKVpVUnX181ofdjGQEfQRagFrcifvyfGsp5U15DvEXQNWBR1",
  "key19": "3U7cMm7EbhLt2xBt1XnQr49cxgW2KTEwFRSSxjXDV6sYvnrWK31qz7e3M4SBwif2DTqQ9QVg1MM24R2C7VVE9KYd",
  "key20": "b2EJJH7vMTTK9Cs8TQCiRNcioLvaq8rVvhYo5jM2WPx77dJoTspToYGUnM3AmNR5Pbanhxp2SQ3GgEtzjk78aTu",
  "key21": "gkQ14CY1mkDisoJAPU4Z8gZCowzdsuFaerHWwVgvjrWNUXUb1SzV6rvH5dW2istyaDyJjWu3gUwZRS6LUAViFqH",
  "key22": "2pX6wF9Pi6Jmh2vEASVocDEDyNaoS5di3MaXvWPUBRYKVnt2Ma45PddHGxoaimGbb85i4crJ5T8vAEVefa9MYkbz",
  "key23": "3xxgKt12BfVbWkKFbdhgaaVbPXDz5Kkpg17Ez7WfnUpiauTHWM9FsXtzR7ZBZ2JeZ7T2NzPfAp9V75cVoTNjP49D",
  "key24": "31Mw6jSf8C9j2Gn8naQhRuF8J9TemsgXaE2hPkqGXUbCLgHXdi8ggQhVNnAiTxo2PDLXPpUws5LTcmrdDUjgXkJk",
  "key25": "GwyaH5vou5NdtFE7s9pMc7DB825Un28GPkCJnFRVQHDKdN6CrTGWU8xy6Dum2afzAii3CgeMAVX4vQ3B4KNzWBw",
  "key26": "4TBGk1bmqr4RzURdEAZm2GCZJGqKHhBgejjPoAQYYyGenRivNhQXXHTEgGHLEo2KbxUTc9kd7SDSCc3ZYZcbQxNw",
  "key27": "2bcuQEYUD35kwMbb8zXMqP7FJHauXG7gWtWbDZ8W6BEKXmSMrmG79RWkoUZCSsYSXCVQCnij5vjKjz8QMS6Z2XCm",
  "key28": "dXvVkD9zDPQr2k6bxCSy1bY6BwmWqfPKSZrRGhsKG1HEq9NLiv56GXiYZqJxtSJJ9iRRfxVfiVXujtgygetKS6V",
  "key29": "5Z22wz8AYPWQ1jN833f5mCZLcecX3TH59ax4uzkfG6VFqj1RZ8bzw7NjoFufWxiWoR5fw26i4ShDQTJN1W9iswNn",
  "key30": "46Va8HNYqjpjYtfdCxMPY8kL3Nxa2LjGm53azoyDMYZs15vKFzjGccqwj1UjFRXNEYCE79hPxCx6Bd648k6si5BZ",
  "key31": "2yfZnqZaGePFGNxqRQ79MezrqnaUB9u4R1Nvxd4u5KdgdfWiGXBB4MGV1FVk3UWEbhUaFEUS3JWMx4j42wr4AL61",
  "key32": "2RUnVPGF4Qermm9sE3kcKFZszx5LKTXoKd3io7Hsmc3AFDjGDmfAZgZSxE16F1qj5hA7qd8QZ4LEYBNgHGZ1ffqp",
  "key33": "4KkEijgDSDT96LsYmPNaSSbgfFpznk3ifstjmPpTDvho5NV344ZRiSkMKZTmAFBbASboFwXrj9LNS18Drd7AdMdJ",
  "key34": "7DfJhZJSnEfP19HjXx4d3bpJqxnRCvCn9FJ69UgJb1khcoXUeguNADvLdS5ApEiEiMYa1NkJgM1b1vBB1v63GEb",
  "key35": "4ptimMkuTdSYkhAgmbH7276GwtNMhtSFKhuAMdSzqj4Hownd4zaLv3BQy4mhjfduVSBmBvGjpimbX8L5zBuaxAoE",
  "key36": "3qCegscjLc37L1Rcwo38zntz7TeHuoiA1Jnt3J9D2rXHbGdGRvVdMvyVqn2ch5xrQqWW4SQWSbLJ6mJuQMkfX9gE",
  "key37": "4W77RxyYZMY5RaNp8HUgacQh1JCmPNWC2LZLFWsZTbp9eUBr36kiN3m6cpj2JfD5tPquYnzN4VcTvxHvmPZUK1AX",
  "key38": "5oKx9b3JPBPMWy6weohVRz2GSLKMXLwBTWTQWQj85tL4BybLHJdijQMN3EQdQQZyvQzEdwv9nrQpYAhGDn1wSgWT",
  "key39": "5CA8qUUCQfPg6TxpdABP9uF3USaNk1YtJ21rR3Gi4kSZu4yGxqRVBss7xFcFup2WkGQu6XXnoqtRmS9HvytDyYGU",
  "key40": "2M9uF2yWWq6T7PyvRZgjeGWHFMQv4W9cp9hhBvfTGKenVWwPV59t269MSvhF8m8pdw8gFKkgg4RoYupRUP6NMn5m",
  "key41": "3gmz6pCq2mMndpxAWAR74bQekngEz2yT5A21ob5FpuRHLZorrZBMfBbaQ4dU2keYbaG5koHn9KHV8PVg7aX96Tyq",
  "key42": "5i6ziEympyjSt5U1YB1pWxAPXsfDFDgoj6AX1XsjDpcGpFSfuzn5mKacH4WVXreRP8bEeSp8zu8Ka4jULfiZtZbZ",
  "key43": "KYrkeBeowKYQwUTbUgujZEBbd1t9mFbXx1eEiJmKbSbpJZrktkcph8gUaRzgVcEei2Qzr3i1G3extkVhkBuXF3U",
  "key44": "4YC6wTJVSKdy2qdbsUheKNYTKgSgEPEwgNvd3YX9BgrMXcjXGdG4tWovLY2BxXmsHW392EJ2FdeHh8M4SgJ7SZfG",
  "key45": "co1rYymw88zxb5QM2DfhS3pvT6vJdj6uWjYYfdsw3mm1nRygGdmWWE1UxoMQ5uZE1MPf45MXnDUGRY2ifM9FPcW",
  "key46": "2FaRitKq3bjP3AdrqRWxLuJUwLEWxgaF1ZALiNCeEfYZs8wPjnMmSihbQinJc4oNeztSddXNs6tFW9gqGMjsBrKN"
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
