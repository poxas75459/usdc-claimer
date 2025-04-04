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
    "5vX7AUmKSgvKA6iRpicBHuAJQNuHizpt72mozJTjav5neEtranqY1jwHfCM8cd6msQJq1yS7CVY7DArqhwzZctUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwcbURErp24i3CuufgKwGTNqFwCdnBP8GBCLKsfY38DNrtAjx4vVwqp6N6rRKdF1uxx2wWJYwnZZaZZyRdzkbg5",
  "key1": "2VnnXZXcHrQzUz3BB63cCVZn1nPVwUhZfQ4AingFSAob14n7vv6QAgfGzeWMDP6Mb6YTpGzN9KjJssmuDqb7iLwd",
  "key2": "2H6ShsVfoGbcKsF9sRt4VrLikUnS5RB4zLB9boC3jb7i4c5d4jTGobLZ8sLUBv5gkc4s6WUeNcywapxu7r6ARKn3",
  "key3": "2MSUE6rQm5p7hAxcdsVqQFqqMsTYhCtiXKGY7hfRkZ2RpVAnsEjD1ADF1c9tYyiuW7U9EGByzKWDwyGKvunLb6D6",
  "key4": "43KxLkSecwo98QnTURmxANyRssRM1KuyYfndQxPhbR5GQEmQrXytVnuVNdkkANJFP9i7A3RKPdFgDiFiHMtGsXiZ",
  "key5": "3kwuyKs7xY5rfTAa2rMmF1FzknGHH57uJDTpG1P9Jiw6mdgrxA7gvejNEHcx9Gna9DXUZAJ5tSenk6bsug9wGjuD",
  "key6": "5DkqxuMVvijVfsamndqSCBdcEEsWehBxNhLcr6PGWa3D9bm9RjXhW9SgssjT58anuyLgSWC1hALg2uJRdgb3KUwp",
  "key7": "4Uw5f3U3JvWVJUeCSqE6cda4RVvwF7fWGqkSRpgW6YyT9KP5o8KsQSV8H8fUqt6BwaGf7jfE818SyNsSgRVqXRh9",
  "key8": "2PJefkvff4CnejkTSwvJb9mhdGXCei8PwcZFUQDzyQjR1jN1ySTJSK1YxQpmgBsm5u5k79ZQdkuRmAnVVBTmg2an",
  "key9": "42RMexqRztpvszCZgCCaU7XkvGCKv4VHnTSk8CePadJLQMdtd1hvhuC2w8F4PvwmJqrG5GuGCvbXpANAgGBqUJeS",
  "key10": "221uHjQbCxGRv8s1uw9rpS8gozSpC3h9mPPUD5uiTDXrG5qQomBVCtkpRr6zabLuYL8qbZqCDAZJ2H3fpGAVktmi",
  "key11": "3pKiKyC7oPGXHEz9Q9bBADsyKKZbhgGBaSe8zyFt5V2gwVdutVBRUwK6QUa4z65tSt2RqM7sMBfwqknXBtBJ5iqt",
  "key12": "SoCPQUe9wqLj21Cy2SkjLopsFdAGFs2HRVEiqmXFCC3ihQ6vu1f4GpNwVrdEugPXF9xqMnFazzs6Fe4WjfZrv4R",
  "key13": "537WqgdnY6boXaGhYtK4cgqBw4HymVRzLXoujWSpUaHfeexV8nnLSY79XtQM3qUFLmSYC1CkcBH1QZk6JHEsw5uL",
  "key14": "5MR7k37fu5BBspcc83BxY2Kjqtv1rkMjDYkoLiLzoiNXY2RxLhBSe5zBKdriLZhG7c84rDtkdk7Ae9kumvYJ6b6F",
  "key15": "2idt7Zuyp6vVUcQQaWBBMod9iHXGbdqcRZ5191EwhLXxfm6D1SxBPuyRGTmKM5rnccUBA8YGYHVXV6L2AWXfsaF4",
  "key16": "2D5V5y47Lh5yaBEWx3ev2U6BwDZ26uDEcqY9YzauGcfmpmPSRDt6eb8fMmUTnnsaJrNQ6F7CyUSwFzqAp56M7ZXH",
  "key17": "3qTDi3o2yiGmDkQ2ffQeZ8H4qPzpaGnFdn8ru4NAr4t73PqBmn9nuZwDFXZPCT2Hp9qVc4UaDnKxNQpsqysGVHyE",
  "key18": "4Kp8ikZjYiVnVq388kcriTQ67TdF6EZYysRAQBhGLRM6A8afq7SgpeifGveGia81BMVpCEoEwThb7inFQUKcuSXY",
  "key19": "4214qzTQmtw6Yg4vzttShRHKBNbKmMNUG4DtPPCKDUhsStGKLN1Z8byyuc1qbPC2BQsrmRK2mtjH6wLg8ssw7iFQ",
  "key20": "4dDZUZuaDT3CuYfJXYVE5D5DgQmGuFUM41FkQMbpWA55ALTphRuUTf5aGQ97bJRspFccqc3uRPwmNLn3xh2s38bU",
  "key21": "3U1BCDzmN4dL1zwoZZzwidrffRZArEobubGGWdeWF6pdUim6jfVLcEDUpZgGkm86536zcWJuMn4XQdyyCEVta2bi",
  "key22": "3UZG57Mw7cGPhSfcGA61gN2stZw4afHALmeiCryhdtQFAuXvNLiDSgxMKxfPNaNURVVkcbcujtBzc34LEAHbzcTB",
  "key23": "QAfjbP3EHcCM2vtd5HcTf9VS5wbTXUncsSuXTvhkK6StSX5DtWAhT7NDiK3kULwnaYYjgNSp2q3jCjXwkrutzet",
  "key24": "4cHbJzkk6A8h7wqezTJoVtf85AmVpZ2L6aKYEsyumFw6JsaJJQh5Pn9x6WPr9s9G5qL6rKi8iTd2dK83xzvNR6ev",
  "key25": "b3GGkpWciFmDpvigYvQtiiToYPUzioH32qKboeoX6pPiVRyAfmM2ng1tuanjt5y9WQZUFrCdgakUhSBNbkLnEQX",
  "key26": "3u45FwwJ2jo82gWcTxFUKhgfNmmkPFrm6Vp7rmVQxCRNNexwx6GthRcdLVQfeKtutuuYvpkHVttxN12DE19ehVkK",
  "key27": "eGXajYrWVK7t12Xu3NB2HKkqo94XRP6g83jJDuvt1R2tvPfsNCoL6QhD9yYK1synYWyTC3MofBUSL9pFSJo3yW8",
  "key28": "5rkzXgr1saWoCXkwDVJhUDD2aFtMgGjAKnHtsBXgN3Ec1CUdKbSVL9t9RNQGbQrpzNWDxBPh5hdTctDXJpkECEwr",
  "key29": "3CJ1eqeHa67C2eB1WyWQoTKPbD9zfqRipFtSPigCtg7pmKPSo5g7RGVYRf7mTWBNqymuif3YhFmRJfgjiEaj8sbc",
  "key30": "54cv79EUeVU2oswJTtYeiRHDpwYjnDJGBQnP4JCU8gwtoJw9QH4HXVSwSPFj3xQsQxwo8XHQZEcHqpE5wYjrVnZm",
  "key31": "2fwJWdDBPpyKvTU5gQUa3tJjsKSHY55xoz6qdZDrLJbw3yqCPC8R5RccZbQtLhSJNBsYAD7uoiW63w9U8s3J3BbE",
  "key32": "TYLG98V1yTHp3En9wZCQkKm1WUyHxmX4UUXXiTUD2MbAqKHUTbynRWKmCcUg5H5GqKYaQzUTRRZVGfR7yXa2AGf",
  "key33": "5YdjTeKXQaSr6mT78PGu4yXxSSwjSAy6FqeqmAPkgy8DmXtq9s1wzYGdKqruyBth2gJYj7msRVfLa5n7yjcqC7Ek",
  "key34": "4WFpE57i8f3PW58pdbWEPXCsJzpzWVzA8DsRoEwBDnPT7M5yEB9pHG5hp1KzaZSrpPDTxCtobvgNvsuasPCQJqV6",
  "key35": "ryJgj9QPmwhcsn2tgzPkPRgrjMQ1ZwBX8u3hf1GdyjpgttpRj19eBEorkjFwaGtDtQqRSgfSTJ867fRYKgnBxhF",
  "key36": "7Cte7xF5jri1u8CpYaMfQPxr21MFMh7mqZLABWsxoE7CeiG4rJUCrCsbxX9bN5Y1ucD5b11BXxrT3kQmXaETCtd",
  "key37": "5KmBL9QtjfpQuqXsPCtXLDKwLxBkjtfxgMVtfQBxLSLjyS4oddRLNcuiDm4ctbccWJBhFm5TBVZPc5ZPqGfFWXXT",
  "key38": "44AxzVEk75vTXDMYexbMEeF7DCdmRbmCiipJJDmiDbwhgQ4YnLBaG8JLTQ5v615dk6rbXZJf9zpTxPZJ5PCJvSKB",
  "key39": "542CveQJ6bCYReeKXpTkjjwZVgbA4JLkGkamsNeYzVUFw3fo9FY5N5iTDm3oUiUVtPcRu16dsFtbubvFHDUR5pDG",
  "key40": "55EHT7AwVJsEBWkntVY8gJ3z5bzKzdX9h2LmZjJc1bU3bumjqXzohBgEkU8X5Jduph4o5sbKv3JdVsNfcng2X1ra",
  "key41": "3MHLn9owHYCi4c9U3jTiuiNtTx3JcwFACYn3wzQqJofnUqGB5NZhDPJuPqcMnJ4zAVLT7prcPW1udVSnGBq44Fyk",
  "key42": "3tWfz8m5QGcgxXS1W4TmeWKGhXKUhh6dNS4xFFHWMF2dZxn1aXHCn7tfeC75Y9U6kiFttwnm3x9pcp7jbUuHrenP",
  "key43": "N1KYjbZxBKaMuGMQjytTV9tTGZKjLvyzRdeYVemANztMcTDs2vAtLq1hptfUetSbnxrxAQW63hzV5wSJrQAMm5m",
  "key44": "2thjydxHKf9Cg7Vveia9iDVNWgqw5NGMgMRpeJYSxaPv9gCvNHfzFTuD71egYeaGYMBa85SLRReqUkJZLpchiHpi",
  "key45": "49Mr9cbSTgLueNC8esTMgiq7GWZzJBRKigZXtPuMBWZgGEuByoqA3CGreEepCHriv79CFXYuA6HfJ5z1quRVdvh2",
  "key46": "5RJZKrWa8HPRp3jMWCd69uJc5BzKC8Y8jTETFNH7HF3Dyv4VFBvNdntyXXMFdmeD2c5yoLLNGwx8USN8rdRGjuGF",
  "key47": "4fGLZpSJhvfmNVPdgBmFnkJ4f5sVBQN63PML1GHd8LPgx6CkfaZgfZT6EUXaiYMAymQgV6mXvxdqzYoh9NKxfVzz"
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
