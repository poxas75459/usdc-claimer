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
    "5GTZy9Nku7MCNX5t6x19QpShvAdxxPZpQeNcu4fm96SB4q2vtCNeTzyg8ktCA6ZHyaS2LE1nXQ2CdFdmrnj1qbiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2fWKRvm33WXGhcjtyQV1Cc9XgcLngeDA4V4C2YsXiVyA4nrUYxi7CEVbw677BLHMkkVo5SWkkCaJ5v9jEXL9ZJ",
  "key1": "4m2vdFvnN1fr4RoaHenohQZjUKkVessjn5NBK52bAjBKxVeeaatrTxTJspRevvDmvavT4HPyBzxQ115DXaRXFm94",
  "key2": "5N17yWDacKJxS4XHKcBpXa8LBEtj9okcZwHYv2G4S5FJqVY2kKi5KRTkuccRRq8GzcZbj22dpCAfbvbaN4yf4cUg",
  "key3": "PBfoQoaC2ANuXW8xDF2nuYTHdCpMEMnEL5Zv36qJig8eomCNrbyVDFhrrkxKToWkzTowVWaxcRYettGYDeSKfGP",
  "key4": "Ae3oKnrAUUWVmzahMcYw9Yp82bsZLAo5zKip6y2gFBMr8y2yYEWZhbBG434epNACRhqeXp8cRijB4HquDxX9be6",
  "key5": "2SgHSgVgWC5VouJ1LgsMwc9yGL7Kd97SQpHobt4NGNFLQjimm3wUoCCwCu5erzSS7Tezg9TUso87mGXMW8DKS1SQ",
  "key6": "SXbeWbMwSzh245WtBryLKCvQE5ic2gnKzH5vddDKW1f4WDwNTSobgnKw3LX6EcgTw3G1zoCUXXVf2gobZhbQ6Gh",
  "key7": "3eNHMscvh6XMtWpDwgmm5DPQhY4GMj79jpL1MTsXFU7Si1X5ssuFtUUeg5BkRg8XDTX3rBJEkiqdRBAHrnRpXeoV",
  "key8": "4Z6CRVuFwTjCG8SRn14fGqEoEMuPLY6hyG8Y5YMhuAgW44KJvKPP8qtjDDAbXHmL6eYwtTwzDgtDNsaqosMXrQif",
  "key9": "5QyF2vBr2SYeaKXmxFSmhW14S8Wc2ecvrrrCY8GHSoX2LaGSB6hJuD4wTstEVySWPgavkTzvdWms1qVF8PSAsMTE",
  "key10": "4PKNeNVqhPsGGHuddgY1b7pCsSAZSfTck7MfiTQ1fQiTTBhZnoaP993eRWLqRCRCdjzEYoZjYi4wLzLbZ5A7fsrM",
  "key11": "3hy1DzPTqrJ7nJHxqeKstiD4rE4YtJjSmZkhMtoWrmYaezBpSyYquqfsX35k2cKB7oPnAD71E5ENQ5JEWqgkRCqS",
  "key12": "5unpWhdcdttRH9JY7ECeHWFFBGWoWE9JQxkSC4awwjBMp5XstzdfC8XH2FJUvwxU9E9JQfohmVxpRuSYSSxe6NNY",
  "key13": "5giwXrqw8pK1zbJdU8tYmiNqvDWWgEeAqAueYuyjxNXgfSisk31pZ5Nwfq4w1m2e4P6JzynvGYvvvGSsWLcUhCu4",
  "key14": "913SQYdBfDgd9mGrAVapVnu2Yjc8XyUBj9zffuxY86wqvJuxW3xFQxFjAFsS1DBqb8SfNuU2ZcxQnBezA4t12pB",
  "key15": "BYwrUrQdqcec8iWCGdQzhpTACY5v6VpfoZQa5ajVFZUe8PUcYrzpDrk5MzH2VguaNn9xX5AgBda756tZdbhMjfP",
  "key16": "5tzsXpvx3j9U5Xan6PW2cfcY5PebqUtQsV1yj6s5B6vMtPR62uAawqKq3fx7Fkn3isCRuN4i3KtZTJ61J7aFquYL",
  "key17": "3HF7sdNrG1PUMmhYxq9e8AWYyqnbVajV1Mto6VkecXXVkyJc7AiJv5fQ8nmN7qCkPMF1JpEsoXXHL3r6EdSHChD4",
  "key18": "5CPQquX6MdNXkyFdYMXRHp5hzEECMeFDRvNRV4jMeMtKsNNx17Q8CpBxdz19fNyphoe7nDh24uJvCw6NjCxc7Nwz",
  "key19": "4UemyMfH8q9MDmeFkyNkr5gbYeHJYwJM4hrJ991qVp7qR3c5M6mHPQ1PS7xi4YuvzgP77y5n5grQJUFSAV85V5AU",
  "key20": "A7DoJrBYSZcx231h2X1QkRuiS5pkMLoJSr5tjTuTErBFXkX8pf2pYoPwwkqMW6hwKSMfihZAUjDLP6PrjZur5XN",
  "key21": "5Nzyuh1f3TB46VttmkyRvGm5o6FHrSh8hv2WhAxHCMFJfknccxR3Ci4cJKTXtmeiuKxSLFNnFNFrtRmz6Zr2Thfz",
  "key22": "2tx8NzEBAejWEpGZHtjxaDFi6JeALhnc3wAkfXw4LwUCdyEd9bjEmLnmAtxJtQ8QoCP3vvhjhcLuSsLWV3vTxASQ",
  "key23": "43UBuEa9Wz3sf3a3hgexqyoB2JPiQKTKLiqxR7VvwHJKtQiMTJ1HGM9d6WX7Wxt9EvXd2giyJurAxiAx1zxQUneQ",
  "key24": "eKmWjcfSXXMteXNTz143qBBby4Ds4GJGCQQsBS3Xaq7SjMLsJTTLfdcQ8jV9uZ6N5sHGiE8ykJkWW3h7mMF8861",
  "key25": "3XNsKUNLd7xivueKUT1teUULAuKDosdWGmbyQfeJmSNKsDYXyf3M8WfJJJg8BvTWo6FDHvT2UdNDupfquky7pRH5",
  "key26": "63d3Qjgw8km3jBjZ2xSyArmxmm5xKbYujDfvjWc8XSAEu1bCHyyui8fxrkLCBH2zAcfYSYoBh36pm76n5tPM3ZsU",
  "key27": "2Epy2gxFZ95kGarEPL6eoweYHDRJ74zZ3wygaCnLHgq1KYooXTnrUJrB8wCNF1kmPEKK5Y8o1HJ9t4DRxHUt61fR",
  "key28": "43kQPo38xrEWQRZmA2aydmtFsk8VudpiTvrgKwVfxcpePuGF9wGjhwhGfoRSRVcRBuiYs8t3kSprzqSx1oK9Rbi7",
  "key29": "479vtFaBuCUXgcdWwDXHEv1SbzbdAqjFYhCiZSTr6zkjyF7qtNvniLBephDKjw4HfTLQuFXQvhXfreH4mgDpZ257",
  "key30": "3ym1DHhzhbq18LEQRRwvdQbcorp3jyBUmiqiBPy25QhfbDUBHAx8gXJ95P4fEMEURAUF5tnV6kC3it6XF6dTsLwf",
  "key31": "4RTbwuwq7hMLHAbCjoe76TXzqD3FD2reMQtaYjGWU3PsdM8UbhCfxJ4Tc1XoqR9cchzysP6DGtxkQJcxDnQ8JAf6",
  "key32": "2BwSEw5SgHKazy67rPFftPfz6uYFyYxmYokLnzwJm4S7VZcDHdmJoMQLQ4M65VPcWVRbqWEkWKyy33B4LK6gqEyE",
  "key33": "5sXtkgeweVeDKyVTZ5riA5iro63JGKfNM5GoCXkTHRL4dVfZ858uZqpo6fBRuTZw8Wzo53AvCArkfh39m99vX1Yv",
  "key34": "57AcPSbdsGsn1nsC9CpPtM3Cx7yNBoA4QkiD1cxY6NwQ73WDgkG8jKGsZJtFniHf9FA27w2VvdqUa5DWq8cN122C",
  "key35": "4Civ4TDLUXfnW5DfDyJC7cwW9BJiwcTUqQeZfAbsQjmNEBPdW9nMFUb3YQ2NgDTuQAbb6YsWZABWAGa1qimvDt2R",
  "key36": "Ccvuri3Fn4KSf629N54MQNTaZTrCA9KFCmhSkTKaKfUUAAtbQy2wJuptCipPC3T1aBh3DX2FRg99arL3yn3ngWs",
  "key37": "4DnYWP1Jrau9wQYNjSyATG5B1ZX9GuvHZNewzxg35dGWKC9t9YfSKHhPgxgkYzffcBUkUQLvoy41mMs351dx6aFV",
  "key38": "2XhuvbgD5dwX2ZGvixfcYmR2tJzC6Ef5MDN7fjmVyPZiQnZv5pNeja2E8CBDCFaEUEkBUPq2rEJ9UV6W1Mv3pcDS",
  "key39": "2PcmvNHyv8Wmuu5KmecAprDuMfoxGSnNswToyw8fmZvXpttPconJZsgH9H4MsCfh5CU7nsiZosD2GkeddsH4GHAs",
  "key40": "3S7Wcknzd5VQdW3SrzpLpDe6AMTLAqrtnF6TQKhDzfGBonrtTWBBXF4RtTZcebQ8DAE3jha9gaNDQb16rTjqZCA1",
  "key41": "28zX7gZfUoYNvRsdxpjzjLeXwMYYpF5atoHmgxZzKX1D3nSfFfVxFqyHssL4Udv3TFGXFRh8Ba55WMWxizeUjJ4V"
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
