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
    "5XpD8bv3Gx348HaLja4oKjxfbFEvJdSE3CSw1pLgyh1zgbZa6GwTwLVf4GNdKXLn2cn962X5cEqUFvMV5J7iY9X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3bnfs5qFtWpWaxEQ7CxcpgFx1RAu4sdiEiuNGPDZB6rEZhcLCo5fhh2neV8GrqELFhRH1vqkanHqFaaYWHCfJy",
  "key1": "5UqZ6i4uV6Cpq5KrESAomwoaHmi6QkPnMTTHuDnKfDfo3dz5gYKqf5wNgZZBvVdw7ktwk4tGJEYoqSjp34yw9pBN",
  "key2": "PKGqg7QTiA32TEogN6QpJTi5t8QaWVm2rzPie7JU84v1SqwcxwKtaotWFqya4iKeqY5hxcnWdQKrTDCxVkkYpYy",
  "key3": "4oSfy72E62a9BjdZ3YTqnREPskgBiptczbuAVJu4WZQLfveM25DtYGmy3PZu3F1FmZXRHpQXi2amtHUWWSwr4do",
  "key4": "2Rf1SpMtFh33Bgg1UpfS7dAzi7FBR9dodAWYbwV5qVFRjR8YVSxZAav1WFMP7Gh3EoZ1CD2WLmqiJTznrcd6r3Az",
  "key5": "28LZDjjhkLg2Z1RFceCqxQTJs5TFgdk9ArnspCUgTHNVqWUayZr4iafh8BEyLmbmhF6YvdZRvsyYePD7KmB3wDUt",
  "key6": "4wW1ixUexugrBYrdmkZbj4JWk4TbN8RoDvMsEKGsq4GzutLNkLbEcGCrBgzbepw2xosx3Rx63o6vtWtarXRAxnJv",
  "key7": "3FcZhDhk5Xzu2ugxSMoJkpesvPqXCbq6dy6jdJeD7PLfxCNAvvPwnJhFVeV8uxNYDYY9H2UriXF6QoCh3mbC8dk4",
  "key8": "2xdeDr6CKCznjuYm11LXf8kEukfmFA9MSZcUJkkNGgrQKEWnFkodaBFY685M5im63ofjVPVA88Y5pugj24Rb1L5X",
  "key9": "39kVbR5Yt2fBcp2bTLVGk8ScfvtUhJqPhGVN4sZ3DY9PFjQ1Y54Bey4ECziJ6zHyjrcsMZ8zd5KevXBynSJ7pEk1",
  "key10": "2Gb6xLsJm3QH2aaij77ZurSRYEDiLc7AtzYB1vad5xD4xYYE7KBMBj1ysUE8Bvk3XzSae7p8DAPXvPz4qBK5pSwa",
  "key11": "2BNDUTqLtd4YgsociFuijC4eMwwyqcnLzg8ngM72VboutHFoWefTudvDoDsafpuQU2WJHyGYxZaTVNtWZx2v9LuV",
  "key12": "2iUcLooNziy3BKu58RbdNEZ7oEgsLuM2mPp7x4Wd2zg5rtJVcNNjGf9FKqJw2CPfMk1dx5MSzGVGTHKqZAAr25pw",
  "key13": "yBw74FynwQtuSgA8K2yRoT85phX4dGMR3JbCPvCNfT27qQvv3sJ6RGouTGWL2J3n6MVA6q8w2czhrzkqT4W4gwM",
  "key14": "2SecYce8EdG6XdudkDoByAshf49ZJitSxPuCgWAnEvK8aVpv1kHCUycPXCNU3g4EvXLGLUPiqYy91s5neb2fH6bm",
  "key15": "4DZuvKMTwxmzRSVqop4G2BszSzS39rhoWpP2BAYGRwCFjzLRHNjvUYq9hTBRGnmgWMxX6DGASqXzhxgSvZje6ZY1",
  "key16": "5bSWzjeJ6F7jUa97kwtW4p2Xg1geuFEzeeE4RZqaCXTm9vf1PtYBGGSeYhTzKZkS92vUbdVSzdTYe5jdFEBVEKNJ",
  "key17": "8D1dQR1r2R2wW7cMqFq1dCRo5k7DZXninFCppFfWmAUSqwBd7m6EjKdiCxj8S7MA3n91vUSuWRyr1mYZ7LUkHbU",
  "key18": "2tdEo8nhFTLEa4G7Rm6HECiZMq83FegenHpGrcDb1r3KUX6SamYEiBF5bzEovJP5ofgyt7MsmJNG7AQbsw6uEDGo",
  "key19": "3SkZkiXkzSj8ZNcDYVaacSUUehdpMVR6mjCAWCZ5ZdTSaK6Tg9E4hmAFK3Ud54SuiRj1yFDpqfJJ5kENZTxSGVTf",
  "key20": "466JNUgPxCMHpP2P3pwkJC3PBdQY6KgUaHmForM6sAdA1xk7SWMoAKCKCpKvLmmrrANkPk9DJoYpKfTqk98vK8gw",
  "key21": "44kRoCcAHvxohgD7rX5JLhLKwCfzsUNs2EJZyKfrKKPDE25qGrjWH15UdfbE1n56izKjEmnZxsW1vKrRnF7Yhr8Y",
  "key22": "4tgz2gzpoKcWkeLQ4v7HGse81tV6myWmDgXFPYrRfdoSCbPf96pDBcweibWczeBb5bSeRwod2u6F6qe2i6mm82ws",
  "key23": "2ZyFTipyXkMts7juKn7keMH1i5YEyeyVgxpnWwig1GGEp5ktHLVJBiResLSUuKSvNDE8VnbmobtDrAWC97NshJR5",
  "key24": "22iyRhB3fKTsU7R284mUXG75wzUxFs3QHMbne5kEgkvj5evbJB7CvoackToUm33eYZGoM4Gk2mjif2PHFGRX5o6M",
  "key25": "2VTQqc3rxURxvLzGQQ5r2xQBKiA97KErpvmmnMoCdUGfQCSxmHJvyxurpatQhjo9LJ9HH2HoUGGEtpEATrahxg7E",
  "key26": "g3MvN96q1BHqwrGaFJqfGbJ7AUN21PLASXFeM7fNvx3iXgL8pThKWCwEX8Ure44y7LChRS6eEXiHje4TbLWKaoR",
  "key27": "4VzV97o33x2xDUFZ2rt7YcpUx8MwJrsGHKnUHy8uEStrN8TrvgLbce1jUXT3VzsEFkycVkwshwnRVm1i5PDnCMUY",
  "key28": "2oc8dwcLaTNHoNejdndzo7aELjeK8qVPR9P8QuLP3MLg5Jy2ThTvhgJFAFvm4m9TfhgVU3yHhDES5yaWZ1mc9Myn",
  "key29": "4v25us4i8qpyt5xYFsSiZPnXPjoZQvZJXUJfDZaCY2NuQMwyj6NQAoM9bZzeRUo3zpH9QLhgKTdBEq2eTt5LcAVB",
  "key30": "594BDtibDsbKFocYdBvj4Xt4pFMcsm7EtczX6zaoqE5ghH677Q9UHF8oph5F6v25D5sk85fQjV9kSpFwbYfRhpbV",
  "key31": "3ayeJ3VttiVSfTmf9HQWH21pHBTGW63eqgecf1GpbvA82vYpGpAQMG4rDAnfPCjnvqBLnJn6PBC9eFGzZ8McbmBQ",
  "key32": "4LRTYq724JYR8dTMEV6jiD6U6bGHLZ6rB2RLSoedCvTeTJnnCDmR9g424UYn6DNsGekPpyyzpgSSj7p3Mw5yWmfh",
  "key33": "5c6qb7DT9N62PD7amYzekSxfEUYp2Kb4nhyd4SLYMLiXY1ZeX23BpfvhWWWKA8bT13Qe4oabR7BdmPTw6e1r4Src",
  "key34": "5TtahpDSZNVeDtTHB4Rxq6E3u8tGfFnaWUWp4z3x6AAvN2UBz2y6Wa6sz5unSfGWZf1af3JfX9A7zyvmcjX4C51R",
  "key35": "4NtzEaAfCC1T5p8yXSxz33P7faZJgXaGxHk7XdSe6ptgxjdFEeNQLNsrAVdVjG7Jwd4NPcUTPCVAk8fuWNf8KctA",
  "key36": "2HB1chYyoNjs191EnhmauPos8XpaBoS2GHZEnWFYD6vjrZPUDQnb7bQi28JERtGCsVJ24waZCpjgVPrXjTVBMiko",
  "key37": "5rL9LviEvqyRtNL81Jk9w7g5myRrorMduVAMEUWJjW5s83k3X3dvubSj6dY4ZbbzpLkA6DHxLy7fi8tiPahyaDUC",
  "key38": "2QcEXjPBkQDFV9pJHAF9cUjTc6Lqh47Cd1FgZW7ZLoST5i2NCFjH83wEw7M8Z8HAjbuJ3sMr36NKG1PhFUc1c6cB",
  "key39": "N51TmWskZtaKMcb6JixUF1yZuocoM8NdCV5ZSPgaEDr2zqLZa11UEcC5imGnS6Tgp36nbs6z25b6nSRbCRFMegV",
  "key40": "ABB7dePvcvaFQEo7qXCNVRHuHWU4uA71bTsxas2BRdxo34Hy2h6awxnXEVLsMzKCsRXhxnMzRuaAEb5rBMS7Sn9",
  "key41": "2Rn5pFtbhfKEaCLm9NjMACjBUBj8FdUNjv6yJWTbR422h9FiT3pn7L6tTFmNh4gwTf61z6FLEGF7KuERLMAwKigD",
  "key42": "5YbHQzSirYj4wS3rv4ynzW7tXUdZFYpVMe3i1mYvSusXCqVFLe9ttaBUSzwbyXuEdvxiwwFrH4EkmgPNdNRdfZV9",
  "key43": "3JFNWgtQQ83cvJpbxbysZoG3dgMaYos3gVBMGaPZiThwQCqwfM7SNAdZe5uB9faJGSx6gTn6HkBZp3Z3Spas2RLL",
  "key44": "4YTf3LGkuUCju1MtJyZYRYeVEkYv4AwD5PNynT5bniE4bw53WhBMXuJr1iBAfBzMTpYWMvmrU5wVmxxyt7v4ag7v",
  "key45": "2ffoNGjqRNU2H2gYEGj44pd8Vm3xeDpzBvp5oknaMsKdeyhSZBhNYKCTYUjjKs6j1RUiMYkxKvdKymKoBSeskh2n",
  "key46": "2k9GBLjVCHDTCHGB4grpFsSoVj3JWFgCQsNU8rVzmtabYjpegTfMJLdz2mbSxd8Mx9GfiaFqka9wJoPyqpmDEJpb",
  "key47": "4LhuUm3nR2sMaZYnw3qmayB2ZADyG4A262eKhzBRziKBweznyXqMzZtffKrTLjgEYXNxYFAmohVucdRtFSJt6rzD",
  "key48": "3FQgZ8NRgGqUVkhBysEsKsa25ZP6v43HPzNRM8efX5HJUU7SkMHxJtoXqGANfvzUGxN2XHpWHH6pJMzZEa5K548w"
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
