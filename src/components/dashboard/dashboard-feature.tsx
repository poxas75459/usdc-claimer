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
    "2D1LvHT3EGz9u8f6astbfcqBNyzJEsRAqvqVYLTfLpEmGoDZ3P4dT32LMxYpY463KLE8X2nQC1eEsM3tJz1LKWuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGe7TeqtpgPmEGsjWp9ZzW5EwwVRtFozDAsjkT9zATUBmCJdcRXrfKodY7SaJyEYqkhomV3oLTPEtE84WbJqwbM",
  "key1": "2TFQ85Jm8y3TewEFVDh2Rj7zxyvAwSTB114Haz3v462YzbM9Qh3m7pP2rucr15tKuhQ6nNVrMh9msy2oHjB3Diq5",
  "key2": "N2tJHnYBtYoFVW39fLLMajxALawyjAhMRadjHAWqoSu2sD4y9fVuj3h4TaZXmAes1tb5MCFjAgU48Evf6Kt5kdq",
  "key3": "3oW4UP51FmerjvRYDzMPftVs3zvacNGFuUnuRMrLHD72F85a9Hpz3WWGdEUV5NPYZTZEw3xJ99fRXgncKFrtPypQ",
  "key4": "45QYCo9h1CkH9FpaUWikkFk5Fg3gVv97DujC8GecqCS774FwJ7ESnRZ2ePHrZYvETNjBAeShp3ij6P9XEdd1vA2J",
  "key5": "5XKmpwr62skT771rXUNSxhe3nzDxQeECwpwfgh4Way6tFiPhHcdde891tbaX78FmgD8f4dPeVqLdnv6Yba1Bj9Jr",
  "key6": "29AqT4A1LXbeF18bHU5a1M99xSgcYF97WVNm8twZP5b7DbVKq8gAfApH3py2NprqPEbGLTxMoG1MvYzvwKXvCBVM",
  "key7": "4vTDdEsPRTEuJMnMQngHXixuKmr9v1iAB3oY2u2ipTEBMyy4t4L14Yc4rQoyS9Kpcmo2gGJhiMkwViP4Woe2VTKg",
  "key8": "5vLJYZCouUH1bEWCKDRuQYtEbRsC4dYky552msveBTGgLPf29Ajen4M1LB11CcGALVCjhc3st3PrC3cwNNvLnoE1",
  "key9": "2f9TKxqobS67WLpWVFucsvj9WGHm5jcNaPRGzLs5RYsqJFSEUBVdmbo5Bn2xBNQ1DbgtG2zo14eT8GoBR5gwH54Z",
  "key10": "5rjAUgQUgoQvGDScgPj4EWzZ8BvEACQrwixHgQ3m8nJFr3RZfrxnepVkWPdi31kZHQQDW9Zp7jB9saptRS6iZvsg",
  "key11": "4Ry5Eun2sz3VhvdPmVEy65Ca95nBeLdHSr8RFq6oFMMvAA3PXXPEvheynLstsGeh94yghJ21M2Yd8XUhXGHYnpw7",
  "key12": "57yj3s2E3LquKyJif6gFwcsAbsNfvFQ5BwiMZjJcY5dGxZrj6MXwPCMNpohr41NreRvb171zqKtevBfNQMwxczbf",
  "key13": "3FVjgqfoY9Q9Auw6AyYPGcRKB83UADvGvr6KDwczJGShYhjRQ1UPLYafqfKSF6uDHJzr3bLdVmjyDeybdvFDdTJ4",
  "key14": "vJbiEWSQtz18Y2VGAEiJtsA6BXmDP2ef23MZszG9zbUhQXy3AMiE51XvpE2ZmLQSp61dnov3q8xnVjcTDXvMRDB",
  "key15": "wQB5eUgjqAVeLqrAZx4pSNJxXiKBYVHnW5t1pxE9ZnLdphMjYUy1dyjxx44YwPYvAbdyY5aqBMve72vdMQdy6r9",
  "key16": "3DCjANiSXMYmKP4LVVpdA5aqxAxh7MgV8xwmcVcGwzQSqA7kfiiJHBn4jqHHvQsPbyeEBLuZKrQ5gvuDF9VTC7uE",
  "key17": "4PMBy9qoMB1FVkKs5Fu8vu8rHLzxYUHDAhfytsHXfXjzmib5h1Eo1cA62CPeW5cqzK5ajSrgsH1RuZquTkwkMthb",
  "key18": "TFwykh9u9qcUABxqMwX6jfbXXwh2bUKKo8Fd1XyKq4xg3aTuyFqiDdPfTayHv4MfqusNobdkiDbQjBSUwW4vEun",
  "key19": "2S6X5DB8NXF3PgG85oTtHJYjJGFiiH3DR2ovu1MGhEbNcrhpEiyQwotg8KGSraN1jYzYKBfYEoTMKexwMxsyvR8G",
  "key20": "59r7zPhiqKiMez4srxqgtfFPspa8VXiV13MTP666WHuqagyxWu81uc6TdvC5n3nMU69Q2ujPAuc8D7YdHjiGVoPc",
  "key21": "USY3qi69hVxdXNFzqJC5smVaUjnM5bEuzADYRUYjZRgLgpGfbkvwb5CRHyozH8J6En1ey3CUDCShX35zmScnfRV",
  "key22": "48Uxssqjhm5Lwkyb6qWvW4WQP5JjL9959HAihBuC7Sv7ExNcyqvyJs54VPVerX1cs4QbQ7KxoDHujZDKh7ZbRyJ4",
  "key23": "58VqtkhxgRZhpYMP5exeWiNSow5TXxsRyzyxUvcsP1L5bAPtkhioNBQvVdtc3JjKz1iRtmFQkHoevEpvnT2c2t5k",
  "key24": "3YPswAj7uoyYkABmHXn4aBAfxs6b2DSL3ZxFfvRXz7dySBYHPeU41GP5VMi2P2KsUQwJuPkNvP1qYjmFS6ZTWDF6",
  "key25": "5ebesiEiLRwBb5p3Zxr9biRAwRkWnxSF1Es5y7JQLToYzWWjuWh3HU189gnu2q1mN6zVt6yninZFSSUt7pdcLvUb",
  "key26": "9XPXoZgXrdss5F5draSPdmXXW4iSKy5JiCvD7HQrrwnbnBDiDo48D8H7aBFRECTa1YJefqwfSgSBrPoQs7yE3tY",
  "key27": "PkFmZjFuUSRkiJF3NUcYWVrhRWMn6sxg1uHarEnn7RxWmgWUTxAzQgqGwMFycDSqdyVFuxvcMjH9zYtRpZoMQDj",
  "key28": "Gr5o1MJfoei1iKe1brx2UvaBxQWEBEokZ25BPcoa4TCFnywEpK1Ss9JvNLbqkBgNrtm7UNeYNkuyHPDxsDFBUFz",
  "key29": "4XinEoVAQD6FaFDrqz6bjtHkfU4cWYNUrnHefbpMhiocvKzxCJkLeqjCNaRa4AcFpL5EmjjzP7Z92Ud6iFhMzR6H",
  "key30": "5Ejbtzc7Aqn6BJH33tvCdaRWymp9WjiYsEiSxyjFkBVD5ZZ9hr2ArGTFvCtdMpJthgsjTcSzogd7HZc6ReGd1Qx",
  "key31": "xdwmNxdRgeMStBs6g8areowNyiR2RfdQZH4SMYBNUqeFhAztqg6hC35hwu88vBuaQTc1UZWqS3J3xDZiMkEV43c",
  "key32": "5HjGeTdKbA2ixJKgsuD6CMvGMCpGUqn8FpVmzyvo2Do75XjUQ6Mn3GGtRXTVqNdZv1xZR9t1Sx6udenGVKABixYz",
  "key33": "2K6NLteVGLoZiV5AtZYARTV1JbvukketZotBbsSUFoY7rbX6MYSVH8Gg68VZfT1wuJy4xMCEhyEdNKQYMwGzeM95",
  "key34": "62QzURFudrFvAoy5u3TpQ2efHepwHgYnhe92ZfhDdo7AQ7cdW2xuLQbTLcNTX1DKXLwFtLyyCNUEP1MGU1qgFh2V",
  "key35": "yb5sGdUGX2YHyQuH1ji224GQiJSQxrj5xWX5uVb6vRBiuHjiok9E2WQEaBHRQBt6Hit7d5YGEFr5G1op8a7mXmZ",
  "key36": "2k2GzP8VbmuzTRkS9L3c3T64vkVCENB9dTqfRUiYbqYNiPsMQus7sEYrqopN9N96vfQL9fXZJikYyCMj3f3dDZoh",
  "key37": "3Ugw6RVvnftBBWhSVssgQj27AYPMxgDSynE4YYK3Wayx9ZphnDWuYNRFzwN43Ls9jKiLgu4Yk42FvqoLS4V3gf9t",
  "key38": "319vQ6V9RAmfTFmx5KKmg7zQ91v6jpSEYCAxzNt9grD2Kb4jdMVYScvNcFn3XCCzhpZh1sc6UG6NFhYoWNGqWQph",
  "key39": "LqhexAXXjfHjjkxPNgs35PoRvVQp45FpPkQ168aWBh2sc5prtzsPjHBn1XBcvZp4ff56F6yc25umj2kUQW6TN9S"
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
