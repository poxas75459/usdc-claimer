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
    "23dtej3bdXapxEofbGHZWDzVS2Lut5Z8Qpxxte1YsukhwNu9V1sUNegRmcLHYhH6QCCAEKLi1GhAB3eGcYsJwDVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vpoHRyBuJNX7upQUWe4AFR1QiaNpoNWxPcSDCumbrVVz4cttzsNWsTfrMges5Kr4vvyu5CSYwRqKXDVbBgnAAH",
  "key1": "4Yzv6CUdDno8oHAxkoywMvwNbKXrfh1qaqc93cYnNaUGGhppWqpwBd9r4EnQW5JZMjBnxTz9pnASRYTpxMEGfyE",
  "key2": "6grr5qFgNysj1dsREvd3U4epZ4uy4YUk5tdmP2ixvA3WFTENwv2JGEAMLKcH3UNSfAuNStKhB3tSUZ62TXKZq9C",
  "key3": "477svCf1vDzWGH4qFapUgTCrRZoXrURB9GypzMFqPFttuDLB2XjyiPLtLpEvjMi9XmkiF2WhFqNh8d6GCsdjRB2g",
  "key4": "2yXcLzfv842yaU2HHs7AYHjDUaFnURGz3FwXvCxe1g7t86AcrtmdDKUYu1Yzq59mK21QXeuLCVkQPc79SAfTfXK3",
  "key5": "59PJ78burb7DyqZTDfxNBpWt3Mqpf2DzHXcmW15K86p6Hg7kC6763PjsgCc1CnMXMen2cj24ojHJqkwnsAndVrhY",
  "key6": "8ji62QuNhmRzmJukbPjvv3yxcfPFK1beNHfR4MjGw7fkuPJL174YfjcNP27DsuV9D6xeZPH885C5vAhnu6QN771",
  "key7": "4LiNoVD5GBscM2qjxbN6y4pbiNQnM2NGQ1x8jX5MTh73hFxXzMb6YGFwmr8NovsWcYntuXBqWvqCoDC9h85B1r4a",
  "key8": "Ff1SNf64HtR3CuFCQfSE7DZjjeQa1WQLnkMY3o4o7aM3cBvEjaCkNErNf5zEj5BKS4YEtqgRNSUvSa3gPDCvKsA",
  "key9": "2tEVdkPHd72BxNywcghSfo8xNuEJK7VBNkf8Ue9ueFPqXQQiKsFGGaZCBabzCwcs5ZxK9VQmR2kt3cL6Nxe7Lfw1",
  "key10": "2NTkxUES5CoWZ2975zFvK8UohKyANPkuqF8pGMF7LWpaywdEeBVVCFaerfy7dH8QjEBC24zxprFES3ySrL6w6uxJ",
  "key11": "4WbPfaM3hNQ5QjQTYY7mojMEWqCcVeXeFrgEXUDTirzuKUHmdSdpm7sbtjEEXDZQ1WdYPyKLx8fpwXaD7TEBku5c",
  "key12": "3bQNQF7DdhTDXovLvLGatZ6qvskBtfvy8S8dxiKkZ67gE4txZ6hCJS1EZcDovSXVQWWS18NGYcfc7114SCAegNdc",
  "key13": "5Jc3v32dz6GfMvdecJXiaSm8HMYqd8NighRywuGu8HsiNiiDcjxWzsFS6wkaAFc3y9FhK8hWSorzZq8SA9eBDzTD",
  "key14": "2TaUc7TFA1z5CYJJqSsnHWWJKhbkZHuF5VfvU1ai6JES88F1U1Q5gHU3cgdDP82e8fmy5Y3eyf7dhAPXk8PgwS5E",
  "key15": "3xf7ohenJCHTxu36BPdX85MaV2F7ctAqBpJLCVjnrtXw7QSk3DayjZSs3Vc7Xefb1az1rWvJvPHG14WasTvh77RD",
  "key16": "2cP3WMEK3tUC6HaN9fD2nPGbV4rQpT8EEdYc2WD2MTsh1Pu1v6Hc9Pe7ETj5tRT7G31EQMeiUCDG72NQcavc4g5v",
  "key17": "5EdcjdkYFXpQ2qsUrtM1aQSpiMjZEdhW22dqkimENif7uMD83MN4NRzyRNxZvyefUaTopjruvPPnYpjbVbnD7yDk",
  "key18": "fZi7siLbx4468Qq1kriCAG21SDw3BBUxbnsPay3cE9pgVjTABLzKJL4YzuufyoiE2yHq6BQT3PrXTDzSvxLh8sx",
  "key19": "kjTbgvcMQyGaCmvdT25KsHMbs6ASbFdL1bw9a5gNV7t5aSKyp51dw9q8G82XHhmWbMMYEoXr6y7M8GxCSX4qzSg",
  "key20": "fGJ6nS7oLddf55QB46aQ1yWKTSBXh5iaaazCseLR2kqhpYc7RYWRkAmxkrgsAtZGvBejdh5pw7xqeFKUEQH7w9f",
  "key21": "2KjA4a2JqPLnN5rs9xWdNRcQdya726YwEqrQ5u79k2cV4mhCPh6pPMA8kjTKENPBVDpk8t9PFbeWdUKM9CPfpjzZ",
  "key22": "3bAhWxmPtCAx1xXfaPPEK141tVMFAyhJawNh13cgC8pQcFM1bpZwgBsaNXssz1mSXubVhAsSZX3MbdhMDytmm3zi",
  "key23": "4Tkk8LS4i5kKhPXWMYk7cgYEwubpULXaPPos42cr52q2u9twexWfn3Dpn2ARfEjQgwHBitTY7cFbJSRBgT9kFCxh",
  "key24": "3T3F7vFHG2hawnsTRc1fADTbP3wpimzMcPkiEbXc27yENEDboX3cwYtn19Rrbn2SfM4VB6WtGUTjmiqezWmQ4ETp",
  "key25": "2PdJFoxCUoH5DywsN1MpRdZ4tpjqNJuqmtEzdVBumuGTwNs3vZ3s5fryathDm6uP1nbkEvW2LKTXRVsb6GCdFpVH",
  "key26": "ErXNFGaH9SFSiwHNzxJH3UdSQVgoG5MpwFzAyahvjQ8cpJPgSH5bjfbjrvnSX1WdY6uYksF1yVMs2QFidsY5X3i",
  "key27": "3G82qVcxoTeD5YSPuPMejf3E3HvepABRjN5zNDRLpZe4hWL1kizuXEZEPnrbitYNu8E1xHoeVyK6ggq7eM5UgKHg",
  "key28": "2KcVCAKkp4qCtT2NpANJ7y1YVcJ5otSgvXW1H4TokbG3xRx1oQ9XtkcsgCM9BYfgLwgSPfN6ZEVbTGLrdpvSPu6e",
  "key29": "5ZyEzyaSs947wHSyPjgBhRHWg1C9sYEW9tpA8XMaLkccakrCASBZfYgqoRcvoJhU7LCn2xbQ3U29SptkTccFLqoq",
  "key30": "eRqH3Uc2JfPhg7ryoAMYuWjubk94Ug8Xh52scBUkVQR8eCMoZwD2SG6swsD52TRhNQWJht9HugdntuXReEpLTNr",
  "key31": "FNvVexzD3jHTdxyAzuHWvgEr5K6CkZeVmUdBwVHsc6zqh2FmWsXSY5Z7YXFDn2VZNQArjtcixE9dTLHwsnFFmfx",
  "key32": "4BseJYHHFZhAFDrQdAtTG6PCdSg4eiWm4bh5qyGkU8yRsDGS6AGvnSKUGheVnmpPFADTjrz8CVBrtH5wwTKArMhz",
  "key33": "2WVewAotxyLnFuH7GECuSh8bBt88bzcZpLWgUfCi1qQ3eZTWMbZmFBCwYhqdS7KcTYPXv1mV3d7wdEtrFhGKPmQE",
  "key34": "62qNMP6m9uyZCumQxtvFNTEZzjRmhixHwSJLTDRQ9siCq2FWawbguSFeGGqEu6Efjx5sDsXW8RWkRAGKZqUk5tQK",
  "key35": "2ACLVywiLR8YP5TehKTRnvvKB8Q46XouzggvFM1Qo5xf9bEQiHH6WhQd3LUKJRXDa9XJezmLKgRuckT9ENFMZPM5",
  "key36": "4rNFZCkGuoCp774pnTYnMYGy8Rcyc8gMNs3NsZCe3kysfU44xnyUFUaV9aKLmkfAiCSNqHw1rJWzpH7Yqogo3MU6",
  "key37": "3mJrZYj9ZomdAENMpUm9pN21w3eviBDPzhLvNqzRfg5gNGzUQW5wdAGxMh9VvbNjdX3WDvnSfzLLHikuN4EQwjWt",
  "key38": "2Yss8UkmazLc5Ku3vK5fC3FCiqtyCK5xDVZsrDoXF8oEUzGYvDGxcYxMoKkf9PYhrS9xXFki4sjNgtxNPiuyEHxa",
  "key39": "53FzUsinVad8vFYn4kDRuaBc9jC1pyn3eE4oyEH5WQr2uPZBmjCE1mp3N8PUpm4BGSQQCmpaPAX4NKtZxKkwiknd",
  "key40": "2c2AkpdvvDwNHiBo5WxarGJSEqHdJDLmcBtdpRCz3TrjjT3TFUU4JiuGosMPBC5vze8Bqi79AATT5MH6q2F2dPi8",
  "key41": "4hs2R8huqQBn1SNQj39aD9LsQGZYoHuFHydCe1kKKh7hPTRiHFxF9CUCxDm8KRvP7iLmZRumrT1h4catBet6z5QF",
  "key42": "5rxrN3cb8tn7Lo8krXAJYm2SZFU6UGdiQfN4SBvGVyLimjDh7ab9sfcoXfZjrXXTFukyPtd5sffK6L9oaupZi3Mu",
  "key43": "4QCJL2TboRSBErMz19XwZtMuw9F1zAZfyVMHmWXvdrFjZyYUXheHuGQWFJFhSckQUmt2M5WALfZ7DPVqXuVRWSPA",
  "key44": "4bVWLfro23GH2iSR2g7jjgpbpPo8fvgPRqhWBq3VYi1NcxCLJGWhV9t2KFmKZTqipGWZcpfwfbQvRBe7nGewtN5W",
  "key45": "2gC7XGEmnDCsuYExQpVyPdtwqME9fyrPa3h3crmFEptYKt74wSycnpKNbfEWACVVVn4fAtkkYAzKzEQzbUjXPKeE",
  "key46": "3C4jT9DcdzxrVUB1xa5p1GE5turnYbzqCy7VjpV5nXY9xnZEht2rxQA7GbjdLRM7VcGbVp7ZBsgY3kCwLaMqQGKS",
  "key47": "5bs6EwpVj4RyX4pV68WzkNayTP69qcgma1LdbiFA26QmNbSEeL6ZNU9uBgQEhuVEsqwGRcxBXbr2zjUk8M4ciTtN",
  "key48": "25sNJkXbkj2zLrHx5MjXhgMv93tcvRzqhiRp8wnWE2HsydtaEbbMSFsc4pkK5ixBVK3K9krP67A8fvdi6d2TiivH",
  "key49": "4BXxiyf8Desz8bWYTnpMxF57ZiW5uHcrZyWr2DkmNX7HoyHfKTXk7iofCnA6DHRif1QQ14oQ54Gkgv3sxrTdcvGS"
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
