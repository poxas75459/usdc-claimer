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
    "534nL4StRjDPXihmsuCFDLzmFWq3M86r64aFh2fWu9huSDY4hHVYg9HW6Y86jUmaHxnXETE2zDrpqBn5cWkLga4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXd2mMwYmQbTQRy8Q3vmdxNnDDzjp3YZD5o1J6YrKZkhivtovyqtLgoLgnputP5m5QwDVb4up5evX4J1Ndc1ZVj",
  "key1": "47xCeXECENiHfMJZiYn6d7j54fxrsHYiLoMnpX6JBkkhb2JvBv8GFELg7e8Zdsoy1BAr8UZJ5JRfCeWnfDyEhL6N",
  "key2": "5fNDR25bWdCTcpdbTXXqB3ngpkPTT1ceq3kkuYjFwa6FBgWqja1CWG9r1y2mcrGqyWPG8ouaUeM5BoCYcvA3yrza",
  "key3": "5g6PBLX9UtqV44Va6NBqFdPutKN7jFvKuvPEruVFavpTcDGSJkHQjWvKoXvkX4MCCpkAhuhfGTN2JiSiaTUhpapM",
  "key4": "3oCRhfSgcuYCTHoLktKUHDxJqBj45JarGEErgJDCV4Er4dBYSfZ2RJ9NDdfEQDjdaCy8EfT5g24Q9SAZWFpembub",
  "key5": "5HU7cpHeQiYNe9PmfUFmPNkqLEkQuRPko7JhSGHeWTy3zt11T9jY93TcDavbcnN9rY5j5wJLKZYSzqFncpctknNv",
  "key6": "3ketn1ud3Mmd7fTmJSfM86icMj32A835xTcvECnd5YmDX6A2ePACBWJFAFst925Vw2RnrSE4UQNMBzhzP89ZPEWT",
  "key7": "2vxnoF2scyKEiikiHQunmU4mRg53faKC4rGT7UmkBxtPUFcGJWXNNbbi98UdZs1S9NLPYpZAE8cU54qLJpMXeomC",
  "key8": "2Xj9AZMdBBX9Xj3W9QBJoFf1oVwh4WqwfJd65MhSDoNGf7fQfqzw12KnuVEDU7KUXXSwc2GF2fsbXMevqS7EmS8A",
  "key9": "2YCsNGuPCm5G3SiNx9FTmQ7vVEAtWqF1zJQCk8x83cMca4Ms6xP2Y8mQrt9g2aPWoxpdvSvnBrqdFdG5qoR6bKq",
  "key10": "MBsegcbuKaJoPbhTqkycis7po8ctxoaq4DwTvawh7er1hRkVzJs8WC7VYvcxHD4egQ4WJFoi9W6YVyVatLnrGRw",
  "key11": "4xHmfa63gxmpM5yU83bxUScu3tFr4GbvwkE9mmAjjKBxbtWZmfh6jXXr23eKZA3XC7khG3PtMsZgs1yHpUa8s8Z1",
  "key12": "RLu9p7o5GJrRFpd59RJc3g8xFvjp8UVYh6dsuv4WzzvByJfm19CDy5m2N7qzJJrF1jeZXR89p5rTEkxzKjYurhY",
  "key13": "i6y8aaka1AtVc69Bfoid648LmVAX2RFqD7nsqUhL8jHTfuj6hsnYmJefwoZBQRYAnpAfwexieCfBkA2NG5gj5Zu",
  "key14": "2mX3zZi1ohv1f2iKNeQw2nsfSEmvsprXXG5btg2jRD7DgCkrPRoxB743TmSxxmjn52UtfPA3hu5CXyh9KyUL4pDz",
  "key15": "2qjtnecgvAXsN9FAt6t7zcyjY2xBjs6GWzjjkCkeQDwUq8VAVwJ5BpRnSoBQqwH1Gyqohu2Cs6Z2ZyP381nCXx7h",
  "key16": "3UGA7BYsLGU3yBg55eWnupuBTAFTKw2mkVER7GuPrH1wKhK5gKwm6MK3ZycjS1ordFeNbZ3De6jU3AxLorSmGxg",
  "key17": "3Kti38hk5sDGLtGwXHeAL3VnJKVAt4D1Ez9MpaxZk837eYQpmX58KCGwMR4fSZLFiLCQFKesRdaTfSynhbDSkzix",
  "key18": "PD6DniZ6GqdcUgpqeRohdUx4L8exBjs2TApDxeQdzWnqZGPq93CNeZawAdRk8iwUuD2dDDiFXb4HoDQbzv4Cih2",
  "key19": "5kFsCn8aiFiTADER8zaKFYRhpA9oRCd5dR5zY3HuyAimtSxhHCQft7QZpmPEANFcYubQzdDgdFMdDnJMdCj49fDH",
  "key20": "5tpP7apcaVTFPdmzuNgG4gCGbnkDie8XtWYbjNqZ4WSGZrWxA2tRvcMoHLfGsTLVosZBhy2b8oKSkiVBGGXaHecB",
  "key21": "3d6udSZ4sSKu7ouGapmp4fMCrb64ginUz1fFNMvFmkPPpTFhHEKsh2dUABPtvE58raFfVNvaCddTEzgPMdTroAkX",
  "key22": "3hiGAaZZiRHqzBU691vFXdcQUPpRfvAAV5mEKuSJG7E8JfFtwr2HTeX3sAfYtNax4Tp1stg83hP5fzkWcpDyEfen",
  "key23": "5zf19ZvQmBgNsTgwBdcNMS5DyT8a1qdEtmCg2D7GsVrBxPMqSZpYvcp46eaakGRbeirAHoFgGD6zKSSwjbV7SPue",
  "key24": "5MZxsTv5JxfBNfXaAer28cs2MyyUn4vu2JLCTEoRUeV3gUU38Urrk1ANSYjrg6EWfDYMz2QCEcpEE7pB1kWWsrWF",
  "key25": "2XGRQ51eiYXx85LZwzWWxD8RDQUrUGYNU7LPqDmpwVLk6MuPwYiwGXzUphvRY9KW5CJ4oUU3JKQs5wn1Atib2Kch",
  "key26": "4d8fik8LhpkebjpGZfQr23XkEJRw4RqRRBDoo2acJ5NxjQ8bSvATcFP4nyVzPEKVLrjkJHsoFZ3S2Xut4tADhg6b",
  "key27": "Vqhqdm3qiwk1yWoLHhzeqsFRF2xVMhm2iQxSjyfeU5JD31kDhs9xNztSvJJbHpgPPKD7KLK3tySY8n6WU6NZcMu",
  "key28": "24THhw5bdNN7a1DMoBNVXtRtCuUhdtfunwoXKbap2DgpZ8Ryudfsj7z6LE2kv1oZH1SXqXmg8QyfFgyMTsz8rLvu",
  "key29": "3PkeAdds9Nu4oTuDNSF3VpPAtEdrD5HwtC3MrNsDWQDYWGdyaNLBbB5K7UCopWAWkQuWw4WwVzppCxECqYYsVGWT",
  "key30": "33r1Bo9Dbt2E9aQKGv1SJzF2p7stAGfCNLDfRFC2rHfkBMfEdDPvg7XCeXCjCVgG6nezTvxvMCcypEZUmuswr8RD",
  "key31": "2rBTje5ZkymW3KkauqGxVYWZeJSHbPcULT65fzTHFmp8RP2EQWdgoGcL3mMcidQK6jmURrF5EMAMJrWoRCLhMf99",
  "key32": "52z56YBgWUTp2GanRXj9EkerGkzh3mBiLdgvbZsuJJfRe551Az1F5E5hRT7Wij1HQzaG96voaDc1svqEDLB9Rgqx",
  "key33": "3LKsrvzmUHV2u22PybMrQebfzXqAdjRK85541Sr99Ag453iYc49evYLgdhU4ShWxSWkM9e8wSUr7ygqcvcW6XFV5",
  "key34": "59YsWhjjiWLTS734FidC1hMoJ4p3joqdVuKEiZLNTJ454NuAUDAe7dxTvPR7Uq9R3ox1CaJwVx9EA6Zw146vnSsp",
  "key35": "3jeXPL8W3ibhhQFRnrDxr4NX7t8TZYMsN1Xi3H2ZtjuhRnoyAihUjpeDcvmjJcBS1yRW1xsA4p4yrzdWqtThZnEe",
  "key36": "2M4ZRTBjFNMTbHM7Np6EyhrcyTp8gUDr5uDthLiy9jrot2nzcSESkbqncsYf8PcZ7wwWdfUArMnirayoJSNECGfz",
  "key37": "FSi8ZV2KoXohL2pxdP1d51YYo13yBRKsUUDH78i2raJAMHGaxvhbRVPajURxkAJxMShbXu2CnjVJunABHqMi6qo",
  "key38": "4QFcjYPihhpq4vUCZsfunPFoHGaaxVfkgALe4XAou9Xe7KGGuHj8LjDFMzVwppaAaYv1Pe7BhFuiE4SviTPsGQFA",
  "key39": "64jGQbqLZahZsTRVbmDpADB8rfEPx1Tn7W4NHsBGNeAsg29JQZuB9Q9RHSPpJ7mDe8wYHGVs6Lfv4ViuVH5hQ7at",
  "key40": "2Qp88oSPTexbBRQETKzpd2B7PPHLDrohPhZZXNnosNsDBxF8kJs5TYVvMADy1Bw25eNPXZ7k9GHF9493CqBkkQSN",
  "key41": "523YvDgoqyKx2BU5XmUerFHdfhBLCiNTJGfrc4zeLP9kD32USRSTnQ9brWoER9DNJfYJWWHu4jQk1XFzfgK7YCKj",
  "key42": "DEP3DYTQ6BSvSFJpHExA7seXVD7GLo8T4McHQB1dJdKfrWo1oKUmnZAG8wafaGRxFkCqdyiqR1dMe4js1wERcNG",
  "key43": "4YgHc8ZdwGDtqxwdtSsHt1iMrKTJEXva5JG7UodNb2vZLhVNEiKEf4PYkMjBV5v1HTfYNV8xTi6TEgt9aJ2hortp",
  "key44": "3HiLRVtX9sei1dcZShx8y2K81ja8EUMRJ4NjwuG216ApEVAcFrDztxxNsGfntP9BEn6JzfVb6DDMN5tdHQNSzCvQ",
  "key45": "s7VL5dL5kzph8aRMQu5qkD9KaMU7N1cBUgzwyyFUoHU9cgHsDaBb4V4xamW7Ve2EqoVuLaoLUCz2Fqy6aQjq2LA",
  "key46": "43v8SXBBk6WJU7UReUjAJmiAqyb1K9W2bjvR1TnqrZcLrQ8YS3ZpLDay7FpKffDwxszqQsmxNgpKu3rrjoSfZxnn",
  "key47": "jesn9XXPY7sX1RTzjpD2ppZ2gfWn98RnHgWKfbDYKz99PFiNfEHyFSpzVuQwALMb4ieTUabojYhtPrDESGeTwtf"
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
