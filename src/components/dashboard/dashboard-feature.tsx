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
    "5Nidwr8kAADsqMLWmar3kgkYpiKrJxScA56PWbvprB2CuxPNahH7p4fgd1ULbKotbq32gNCx8cRnkvveGxjaAvtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umjCgFxDr59gnZdaXqgKWfpV6idUQSyw7xFuczLBWKoFLSwxW31UMk6EJL2iZ9vmYpoBTqXaRWkk2urcrtksrJN",
  "key1": "4b3QkzGm9gF1eLPFvSJKsqETyQnMVBksjzdmS2G1EzSyw7ZxvkuL3kFSnDTTFGCsqDRvLnKfGi5YNfxJG25rj4r6",
  "key2": "2YcVs2AcJJED7J2ga2uyLo77zdUYY2h6MR5xZwfF437zZLSNLE53RzQRSxHprukm6GZm8Sx7DH1NHmLdu9DUvZ66",
  "key3": "331rUEwS6uTX3RqUeDNgNYwQFKWxjZgT7scxK1PxwPrbKLaNWnGAacJpHiRQaLeCEA5TowX8utRryLrMNVNuFMW7",
  "key4": "4aYRqwHuD6sU6VZer7TFguHFkXKm9mZJf9xzBEFRf46FrFyeGxCwhcqZPKyNFoSxZvMigqXVcSXy7Qb5LcvNepbN",
  "key5": "516vzgebKvi4jKAvoWkfvYy2oc8ZWW6hHY6pSvKoJYJVQwEWEmBfSHjNtnJMSEmKVhRffN4UVhetbuwVnV9UW2vo",
  "key6": "3S654RiFAKd4jRkB4czap8McrrkCVzir9y4tzziJy4Nj8UEcug7zHVWfpJqSMffgYkumQUv4Fd16bgoWCyKvLJqr",
  "key7": "3JgEMtEy7mJuA7D3aNW3HaJtpPJ5MMFSSLAUXw3EawPUohWvor4yxWx86e3QmD4sDp6i3hAzDEqC1AkB3aM199AN",
  "key8": "4JkArRNEuFN4nSG96ZZ4wTDSUVBHkRcAqhi3RkM6PJKC9F1J96a8LBo93UWnA2hYNvAuVLTZyc1W8c8mNFWg1mBk",
  "key9": "VUdxeikHsoBvqEHeGWV6fL1tF67vSNoKbiSfCaKUa5tXFUVGixSJavZev86F7tMbQokqgtVeZfnGDhpH1tNQMm6",
  "key10": "2PNVmUf9M31k7j1RwAbXtDRPmRNiEsP4CQzm3UUJTd2hAeaugar7f8x8Ex7D38ZZVXgwhssq8WWaaXMCASLzh9i2",
  "key11": "2LNazSnb347MgDqJPZ5ACmcFr6ZXb1wL2exFtJuNEYvbwY2BsCpdy3Z8dG6t8DjrQijGYu8fXe8akqUkcMrSnTgW",
  "key12": "4ttFwnj2ynPxt51WT4Bw8pCiyVMxFbpKc2iZjwtSf23KAdhNwd15VA7TieSEG2LEkKG814Vm7cnvXqgKMvyM74nN",
  "key13": "2BzyahtUZavRdD5JuogRhnv27MPzhF7o1LuhyxoyrLCdc2x3T9EyLENbGWZbtovktATsCdf4SSGszogZB3C1uhZy",
  "key14": "4Qra48Xk3ZL5ahouCQE4RpnH4FBrjsrLQoQLzo7FyX8NgqHQQJSVKHum6saADTi3SgxAK6KT64dTaCogRTPqShhk",
  "key15": "3iRjDQKqRjE3ZZyj5PyRaEPgtenTVebGMqDKt9dkRP1EEJXn7NPoiJZzsBUdHiQvSNMdiNbFkEaNBs5CiqRETRHu",
  "key16": "2QkTWsrX7f3azXaVNw9shc5qoik5w9LByjkNN851BeYbiybDkfkri7RdoeBGQt5qyY5LcVxotq9idQXtZrei94bU",
  "key17": "2CytP8iw5ZEFTwzhWEsWkzpc1wNJZptSbkRZvcWjhj55SsyRJbkxmWYEDa6r1tFBtUJtQW6ZSWV7uvbMdPgtSjsN",
  "key18": "5AxDaMVWEn22hXs71S5Rqiw4N11YP1x72B68YbvusY88S7syER29csGAZ2CAETACkG7r5sBoBTVtovdUbp6sVT4n",
  "key19": "35oJuZzRkty2dW1YEi9jS6ZSZ9nZ4HedGUZB3PMQezuTYasPgnvqkDqchVGCvWmSihaT3x7VnrCA7mj9PEbuLLRr",
  "key20": "35vEd5MRiZakWfkJfF7QAwZwMeFFqRfFZF2tajVyWo15Vup3ZTgQFXCHGkMbK1t37z5X3qrbjpHJCnQBHd59DdLo",
  "key21": "5Xxh9dQZ2frSaspWqC9rtioBJYkJAz5jvKi1UwsFW3VEsyKQj3wjaAHChMeMWTTmErRvAXFcdZHgd42DrNbfteX5",
  "key22": "5x39doL9mGTjRqhwuhF1bHwQ1YMrsfsZ5gfF9sLR4Php9eZVyPjxbPqmABHFPXWRLNxXk4xFprY8E26EdqNcZ4XF",
  "key23": "5T2x4dAKeZ8quHNE4MNkLRmbnceqMx8eDhRpLqTd2k8viXy8xfitSvjBHmUQ4BfFfsdEdU6csJovkEwTugytkvhD",
  "key24": "4eyKomTE51nhwdZd8MtKXsPyb2wJUT8GxnntUrjt8UvJjE6XeyV3MoHdb8LbMKV16gdi6fZBpVCxM7FyoHVP6HT4",
  "key25": "2wzdv6BZy7193mPjKyPXU7FRwy4yxtQf9S8krY7HEHPbq7VfpZueHqsnFkx8U7pSHUmKx9U6Rk7izJoUCUjwvaUT",
  "key26": "4AW83ZaTY8odXWFYfF9AEDZBCfSH49MgL6j3kUMyC4cSQXxYNuvsRxhXfXEJVp9LZf5cnVxcFr3bza45Kc9wyYpb",
  "key27": "fa8o6eqAyoEWWLxm7TArpbiTeBdJkvViPwf6dwbHawmgueg3R35xc1C6vuChTKNtF2ypyeUn8uVDnS4s5Gm3i9J",
  "key28": "3MvK51SjPQHdJxJk6Es3dV3dwrvKmNSWEWGECdxCP6vQkZzJRVNrxYHdnWKkXLpHHDiHPRrrXHgTeC8s288LZ7W3",
  "key29": "3SiR82BQzgxTwUeg6mrZ5DPbYBmd859MtWNpJ81qJUKa5FCrQBvdeBt31c2nj5hAoV4zRwLtqS5Xpwz9rZcWD36M",
  "key30": "5rnZeNi1KC84AhsQmP2uaCDeqmvUnsFWnHXirciTBPcbD8dY6wqmDumQw2Fqs78CzREPgnsqr6yRmiAV9wbu75RB",
  "key31": "5Y4BNXXZpaSm8AV5EUStTezyy38tPkD6RvVfp4MymBGBnM843N69AXBE71ktDaZkAPdfMepZZiSqyJs7nksnQhT9",
  "key32": "H88BxHfE6jRiZaBpibTgiU2UD66iK3eAmsXJCdcSHw6kzN81BwnGWE4RGirdufJvAG85AufpoakVq8oUbmqQNkd",
  "key33": "4PmB9fevRQbtULjt2hzcaeBjyDsGDCvG6Vvj92BAQppebAZwBnWzNfDig7eW74BuRRiFLuGUt1qezHLCSCZd5fcN",
  "key34": "5NQCEHjR3QDEn33ANiYMv3Psswqe6dX1mA3xVs5fr6VDtzqm5Nn3HkDTVeKNVosz9s1TtZoyNJ7qF71jZn65TzGT",
  "key35": "s7FDKEyunNSUpfQF7ugBxVNn1W5PTWL4QXJfHGtfDXV3446E2mvr9zCU9uk1qCaZBxJR8neH3gwgVPTUNX1TtfG",
  "key36": "32BMvVnoXxc6Mh9pPSwZ5c7maaxyfztTYDksL3rMwscymF2kZcuUkLCAUhDyexH9TkY3BQcNegfvtyLzDFtdGPF7",
  "key37": "2Mg8VcqcxVTrcbXteooTWcc3pnHFtcwxXCmpF48QohSMEGUoroMkoXZUZfo9mNqs9XmqfXEcdky7NUgzx9CRJXJr",
  "key38": "3SyNJA951wzxxCLPFS9Bx5kkuTvPHceQ9HrTiXKtFtZwCqaGVgL3AfyScpiL3oJMCcE2AQsvCNsMY6CTigg5vcg2",
  "key39": "4Hg3d6qsC2XSaJ5TPdhniiUMrRUAnp266oQhPDYU2A9YU7Ttxqt7NiMDUq4bXeKXbBYFJn3Wb7oEini2hm28DVHW",
  "key40": "2ZX6HXAxFQPTtsfnQrfabnWqznSCwS57xfZm6xukjATXGRtoeXipvppxygDRPsafzhLBEBkVuwbPXgYdJJtL7LHA",
  "key41": "3mdiJaW28qZS4RJK9X1GLMYSTdG3KgwPhcEvKQr6YNm5cKDqzRoeayEDoP4kacWEDFiEuw66XGgnuXsfuqfy8hqH"
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
