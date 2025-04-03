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
    "4oAm2rLMqyc56xnAhGTyo2TWdf1TDaBv25vv8EPCE7pCBQoTzh6KCdDNdLRzTTtyojVqrR3E6641h2UbtYMiFzaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbBSBgBBtYma4wWTgA7rnEUZsTSq9coXLbYZ9aoW4AYByMETo4xoEN48VdeLmeS1hvWigQW65WfuQfD2YQhDXS4",
  "key1": "5K9wQP748cqiEpaCTJYHB8gVAeZZXairphPFNJcqWJc21zEkfY9STPGV9fnULEFwHmXonjamqhaECyiLmBQ6HRpi",
  "key2": "44uSL5cDJK7hViGY4321r6wKzni6k13A9nqRnuYZ8ziDdSwU9cc6G3qTYrTSQqDu7CsW6RXz2feg4KHHWWdkADXY",
  "key3": "3yMfaJUE81fSDmftNcjc8T1EwKx9hrd91AonpvukcmS4EEKmCbSPivfbJHASJdMDpbDjgLkg1PAg6qtTiwafHTRh",
  "key4": "35WeNxqHh5AWjfrHtjDUw3jfvRgstXQxkXpKaE9X5MPBRspNjTSaewe2b96bDrFTpW3ZqysUgHt59X1omLgA9EEG",
  "key5": "23snTW8HV92HJyDE9VZwZjYGV8ccMo32hkc6nA2i5Qvm1DotdeyVV43sQvpuMczdPsXGjySHqyyYBf88SBYokWmT",
  "key6": "37onXTe7JaY128Tmj4gAB1aFnX14VY4BychhnrM7VZkmY5PgMi3oo68HwprCgd5r1mPB4M9wUEcVAW6cbdtaN7HJ",
  "key7": "5HKujcYVsdEuxGEyDSjC8zD2yPMbPhPrcTruJMdEpXwNwET4hu81pQHxy3bdfKvt3sWUKVqPwZp7XytBL23vQWKL",
  "key8": "4rtzzCcy8gFscPFpQq4y3VmoKHwhuqrKjobBcnzNQcxskVUqBN9Ka7rWtu1FkQey5zpv2kcdsX9Urzux2sn5rsym",
  "key9": "rBBQW71hnJn3Xet4k8q6CabE8ZWhi5xTS6TtXWuMFY24jpycSWeoRbpekvPqAMZtzSnYpXitfxGnupfznQ8w6Xu",
  "key10": "2Uf9afVTuDm8sYR8HS3iPeqho6nRE3XujbG311vncyq4z9Twj2R3t5mFdwZKFNTKCdDJf83q5MtKruaBoxtLUVPC",
  "key11": "464NJMxRLxPrm5ha2iPvsWctfhd7EDykt74hfErR89AA8BREehcs2NnQjarawrE8cHV86wvi1MHLSKSVDHtxCekJ",
  "key12": "4HQHcAxZ3PQ3QPiwsMPjni8kqyxExHubdisWgQ5dNYLmJ5n7Jwha4WuqM8YF27mxnj6tTPdz2hJgc4Yq1FXyFFMf",
  "key13": "4nxFw6LLE1YsxqKTB6yEPBAfP2vzGTj5MyeDmZ9637cFZdswuSubxBvG1u7xUQp8U43VGGNbTUTkk9Pi22aK4MCZ",
  "key14": "33uwMFTccNF85s1EtByyHGmTvfegzX8j8aMR1dTaNhxLBhbjJTYGtV6fk8VDZ9J3atTFmHZcvAknbiZuKykdPBg4",
  "key15": "2bUgFK9gzyxdFwMLr2KkLR8tbXt5bcbMojhS63p41sHELeCKcMpHLpmfJ3yS74NH5Qvqi9Vbf9dznUHevezTKUP2",
  "key16": "4NyAkVBzQvCisbtG6WDnQG4ViwW8awAqNGFBKGHiwiv4oEgwXiQ9qPgLvVAJgeaqfLZLeGESatnPNTdb8BVHXUsx",
  "key17": "7gp9ThjGdPhUJPtNvkR38sco37f7JQ7CaSm4QsjgyTTrYBsDGM75TzMbyQ1bcZkmKUPh5hrKT8sXfefPFzvyuim",
  "key18": "4mg6QFzm8YNNoQ3vf346J8nLsbvfYGsBqM6oRhVhUaNNR9xofU1cy88rPErm2j5LcdT5niWpKBJEosUmZwNw3xKi",
  "key19": "4YpMpwYs9zaSUdVb49noCHJfNyNnALRpNH7bRCeX9EHRLVedaJse6nUeY1WZL6vBZtP8gDwyRP1nJSJ3ofujWvK4",
  "key20": "3ChjNS7dKx4V5yi1bEqm5fw1jhfG5V3LndHTvGj66kag6VXGPumSQm2nx1WdiAY5h8mdQBt9tFgK8ekxdsJRY4dj",
  "key21": "2rmZKioUfnuEi5Jm1DYN6Wka8hktMfAkAd7MD3Avty8esrb6Tp9dby7a7CPArvfRBtp8kHXAgwwNkTyjPjzDEnPp",
  "key22": "61a3tBquus8TqmEznP71zhu1EyQFjrxiT9r3XZVYzVnf2Fp959ovx1tTmAwCBWDNxKKiA5JodU1JWsuAt3x4TcMY",
  "key23": "2Y8oS4bJ1xGYCaAZSZcWC6WGo65V5JK4Gioi8nmAXe1insKsnLe1iGT8KE3ctgTXs4gWqjk839qBmeK5CNuczCV3",
  "key24": "5eJdyaSdtrKqk583hLe6vRdQ3RjV2e868pXLnPuuis8kNPNPk5zkHWjKXsQyZs8WMaHjxJFBqHA7Y8BgJgYeWgGp",
  "key25": "2FCef5JAf4b1AowuRaLqf9h813FMGd2EtFawvy3BgKs7dJjKQcbYmFjJtzJoSEUjHDzSFiwJQay9FvGn4Gw7XdjX",
  "key26": "24NhhbEW758WwxUrJgGboCsydiumeuTRTwT2e2t225XXdBGqfEGN2hDJnudUNrJXsEY71E8yqGv2MdyGvbHxtSGS",
  "key27": "2UPqjc5HmjZim1PwHmxjZhYmaPwDDGAw771o7xuzYo71dZxvmRvYyVBknLnka5EU9bWrDF2fZuzmMTf8kpL6iVGu",
  "key28": "2MWiUaY5dBs2Qx3R9EWu6Zmde5Snia6APHNAZaVcJpo6EiMZa62z1jAuTHnpCQvWspFBytr7bqv6T6UwZYnA8fsj",
  "key29": "5ikda8yiXALTfRXoeY5k31ktPn4KqseZhWWEBcZc7tMKkvWBNJMN91dQxHyuZqNJfBrgF8Ecq9Wgg2eQDUVaSX9V",
  "key30": "B5EDhvUoNze7inDCVyxRkeSQy5P5QAMRScJyKefb4nrNLaQ91qXhTQtN1Nja6d3xJtR5D5FWtDTGDxsaQYGVAmm",
  "key31": "39hWT2oNMQMFnS8ouXnsC8XTYjaidd4bDqeuqWQBBc2WqSufTCkcN4hfbRHHxXFQ1RFthiUwv2uKEzvbzcrdPp8",
  "key32": "2MDy55P3HZ4pUYSa6guHWnLbeNpXf5Qx9DJsv7Qy8kJqPPc6xEnxN6fKDwkRQEai3ZAe8vPgqcyke84mi1yrGJWg",
  "key33": "3HLuFsKTycpohsx55qkPs7gWrJ871svF9XDUWcQuNHP61zNDi4VMqUhbXujtUdnUYJ8GQWHENeuRovCYitjFaFbR",
  "key34": "5gEB1gdY2pzE2Jjh6GGE2nq5TJtN976af8N7wNBbBY1PQ6n9yiArVFsijrEq4PVFDwadh3QTrR7YKpEXS1FBnkiB",
  "key35": "5AZUR34Gj5fg5UDCjL2xWm23zSpC3dU4htdekTp6FFhekzNzzKhKrEMWyL5j1ZeFMMX85D2rRcMPdxNuvV6t9EZM",
  "key36": "54bKauPhv7M3BQPCstqGvLd6c8FjTS7txHsTNk2Q7jqyEz4J1V6RfC6LweM1FxSbURvZqin6qH3iG8PKgTRXZEgE",
  "key37": "4A4UBRf1VVKaNju84aSb4PJrt3S489moNQ62uZEzZUpDHyqrEvC1orrC6fgaLBjB93nQqvztDjv3GJfJSavJxrdW",
  "key38": "2QrJsQcH3oBuAJLxvQKTrxeb6zoxTrF4Dho5sKfrvuiMypuKoMUZivkhKk9xBPL25Uua15LTh3p6uy1rQ8czXow5",
  "key39": "2yktV1vVqpZZ4WLsq3BUhSJDFgo7EmvPEbAiVDFd2Z1xGwDHHF6LeZS2qCPsVJmabeD7CstJgd7ja6WAyKhsun5Q",
  "key40": "3cBBiJTjmM2ztCBSVCPjFz25aGMpy1XBjekPztbyBQCMvLAtDdKuBhScYV5e9VZPheGznp1zZ5etWkgHe3ryxxkm",
  "key41": "3gykTRLPQES2jkm4neWB29uLoZBh1pB4tuPesnmHDGBaHC9yBRL91PsFcpnK6845JzgyYjZEvmFjKe12R7xShkNr",
  "key42": "2w5qYZV3szTxZ3VzbgpmM4r5AVPiswqwEugjWUUzwxzM8ZFTcZvr38ZhcjJXhVYeadL8PSD162omenb9CopQuThm"
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
