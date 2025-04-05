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
    "4JN78phRskktdb1z6SJG4W9bbGKDHUrTs7q8dM8A7xVHCBaz7PCqzuG5rwKD4zLfeFYgad3nZqe8Jvg2yiAruUa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pA8A4n3hWAJWrBdSpR6ggVccYZKb6Lng2ub9UngcJjXFCFr8oKGzodCjS6bCzKZk5PDgFGEwiteiASPaYWePoFH",
  "key1": "hLDgQkgCDJh3BpzjcvwK5k1ERuhThf8W3vzKFKokBQJhDz7j6VCu9XnC7UyseZQmb4Y1SUdvmfRKyxFNiTh3XuC",
  "key2": "3xvJsvQYyXo3jYMTTBkTKW8Jx5rhT192RQUBx3y2SFjJm19MtCwyHxJiw9p95NcZcL3saaqvWC8EYp3poaKcpF52",
  "key3": "25xqsoiQSSFMoGZwySSzPt57SzvqwCNgZUJsSZKerTV8ZdJTyuSDZBzFQnhV9fxVStnNDajjK16j4faqAv6LB71f",
  "key4": "2YubwkBkfXgCSoG4S8bBuertHXJFMmRzyDBJyDvEgZm9ccbCYnHHR1HzMxDsvPojgRWYoFpDrg6ozkZZ3t3GwNoX",
  "key5": "4mu238wCi5i89eYKKURRDdhgkho2Aqv2LeZAozj5CtKiQB3WBY9K7EnBgPTbF4DpXrPRTZVmsHA5szrPGb9GkMJA",
  "key6": "61Aqdto3UhftmVekhYjevmb5zSM9SxTNkGHeeNLHtwgCDPPPvFMX1SPhZgoD4JTEDKSK9W2J9cQsaGg5GZCoaKDo",
  "key7": "YvDbPEWRNcA4uhetBi8ajuD3i2syXuyDLqfsuvh6to6J2tQcG4RNQL8NMF3mQUh38JBvwZHBGxSewekQP97mzXV",
  "key8": "TggcHdDjjaUgzTQeA6jHeUp1QHvqkeE8JrJRS4kBKPG4a6cc8LAvLWQgWp3hdcn8fTrS2gUMTbgRHL5gfbPZz3r",
  "key9": "8BUHaCFRNb4U2qUGXmnytj91BHPnownh4UVWSHGMNX6AWfA9hHSxt5ixnXsLyFFTWYqRHo9p24RTVmGMqWytyBZ",
  "key10": "gv9YboDDLKBbykmu8Frm5gUhb5nRLDrYqdBj3TZfrzMYwqnbH3hXNBeeKUDZnMpRTErjbTMADz8ZETuvZDXJBbF",
  "key11": "2sQBiVycPfRYa9Ebe7dNzzGp29PAaLjWCzyTSxfG9zoXUPoyuMYbauiseEnCj13wUMZxxmwGmt3NTxbcDgE6gZvy",
  "key12": "25VqgiayEMRXRPvK24F3UrzjtSLiQiGs77KptGN3XHSY6PNopqGgvCh7Z9qPTqKXDrSuWYQz8x1E2SdvwDZzmMkb",
  "key13": "FTQMaSu7K9PWMAHMtoYZDtHxVxv7uTbK995RTqrzXaKPoPPojCiSAEp8DxJ4tzeri3juNr6eZ7GSxCUSDhAtLi7",
  "key14": "5x7Mmg3ifHszAMYaaYpS8PVjHa6KD6jyvz33ytiJJxdSArpNFWDfWLWrhRHK9CSsViHNSMNPLtLXH9aWZudT7fPG",
  "key15": "4qsZJGjeEEuJ7Hi5Wx2YrMFbqmDdYeitcAPascQvEGqSZ4vESL4K6ZfkdaxMiQmhDDLKaCfzYDXsxPHu6dhUUyQJ",
  "key16": "4EVJYrmt7L4Et6Z9CjHncwbmimbyyzwzdmLcE37mtAnd2aV4Wwd2jwerd6TEB7XejyBzYfrZfnb6BtMZqppaVdWy",
  "key17": "37F4BmBEtNxMxcwoRK2yWwmr34vrF6Av5koSMfPS2qQt2zeiqtN6T4x2psGvzpKg5zcajv3VMuiMDM4LUTbvdaWy",
  "key18": "5Bz8wZeMdycVGKfzgTWHhf7qX1NeNFKsRZg55L1JeciZAapUFEzrGF4uvZH1gaDB3KN1fAdWSpfYARMrm7SMXNCi",
  "key19": "4zg9VAyfzWvm7veCsadinmjXR9eCpCSSWroqfeQiMPcnFNtYwueABHnUzQZbraRB7K5jhJ4M1TVXsm8NvLgDTLgU",
  "key20": "5DDQnvCtvkm41C2feSBoUewRAjpZLBuECBEccnd1n2zRMrJ5gccuGeLTYrir4SNDs9SKB8FLrDp9QWs4oCnC2cgg",
  "key21": "bFMmRmEUdPkzoGv8FTAD3KB9RcphD2SScvk9o7NCDPodC6y59mvx76nduxWTLuD2czW1jqQXJ4bYqxcqkkG43Kw",
  "key22": "25zNRUGGXq8dqD9xk5odwrcGUoRwUf2wBu8qC4CcdArNUXPsi7etbLq2KpQuqYYZkMLzhiezNdTek7eEAdvZ3T6E",
  "key23": "uk2EukKoAbUA6XwCXZJHP5J9b2V32PKrj2pYLp7nd92z8jfs4z971xQ6axs3og5ygH3qFZSDQqWeS6YpKmFXc2p",
  "key24": "22x8gy3KpzUcSKYe1mcorsj2xiGCica1jka7Mt61qDwtFGrhkemwEa778is9uGRyCH3eQtbF1omAydN1Tc8Tf9vQ",
  "key25": "4L2Mghwzg8h1XjQxd2oEtvzzu7aYvV7yE115kW3fjsaVZc1skr96CCTeNhmPTw4G3brxeBsDYKsrwhim86t66iwt",
  "key26": "gA3fDbeChkazjfijirPjDZphQnxQXQ57fzF1Fs1hMC6nBE4nrUNy6SLf5zL1goTm8X2hwXQchsLfAjeveXTdnGr",
  "key27": "4mqigDLsntp82cwBdigcwCN1QaZXS3oZkucQsUzfn33bjHAEu7CZsvQJDWd13onkf1eyFmMcXEfDSoFiehkQHMDa",
  "key28": "2m1cdpMYcm2K8pzV6PDN6qwVx6ffiLrMGDrZCbbAbiKjCNd198KtooJF6kWaNBVhJggbzXGFfReyb1aSbqyThNu3",
  "key29": "4JgnyjH5Udihvo4P6fLMtH7wzvkUUqzitA5633Wwa59a6Co4nTTZwyiMzGATp13qdWsurMQzPNBvRfXBDBVvjfkB",
  "key30": "QCKaRFRSc27N98FoQRW7LAXrnz7SUkWS2fJvWfbvkawr8cSGFSsfkbv6DwZ1bJuHukJetVah4C1mQ43pWzyruFh",
  "key31": "jYLkp7zzRdG2fqWnnqM3JNV2ia7JRU91M39MTaMsPtn4cu1Ci66qVLy4frNhj7Fft9XycR3Ux8Av7e7utTFHiqj",
  "key32": "4s156fCbNgWH45byyMQaQx5QJ9ffJjsM4qcX7rpL9czpG6L32EzYpWTSCo9iDHiAsym23JUu7pwscvFwh5vf2WvC",
  "key33": "2S4W92a33pfgGn1qNSTG6uP8h488h7EMUBTU8drrgymkSWK1rfJ3Kdx5BYiXCZ6exk68gjJ4J3oWqJwMZjYmaeSs",
  "key34": "sQTj37ZeRKFRiN2G5U7KtgWp4M37J9fQqUz1xY4DTrNJb2RBKJ1U89AWw17eCw3q6UpJJh7m5LGTqTDaFyuM9Zb",
  "key35": "3cJkJGmBF84q3ninRTrsUuAJFnyrTj6nzdXkqvmJFB54ZZDPzWRtJcAoAwJRHWuWN8jHoh8oK9cRtLAcEZvtPNfF",
  "key36": "hLcPpyMWxnreZUwCLv5P1Arym4g3e5bq13sCcdyqHQrpW7JEKa4JWAY6kM6LQq9m3d6giM7vq6PsA6yUm8rUyEY",
  "key37": "4ihLtySftGot3ajG3jq1W5XZy1C78hDA8bYuuzkiA8crSSq7fpCh9rBnkshajbk4XgXzEjP396ji7oKpVo7yY2Rb",
  "key38": "5126dvtxBZXLt6K28w7ehtoN5r97axY156vhZPtFTYrV6bKEh5nFk4B6XJwKNxXZaETfGHtGpg86mSWtoxw3SXfC",
  "key39": "e8u1UueuAoeGhESFArqScZtd6kkLYB5fMLSnsGKGRbLrhMBpBA17TvAy98stEEs75ddGxEgsJUqY5CNcyzsYaXV",
  "key40": "4XRSvm9xEcPD6H7J3ZxCt3zpMC3GqraYqVJBnz7sgJQwxycZB9B4MXaspKENWiHy2bW2Rpvv49FiBjLuzQyMC6ki",
  "key41": "2hALHKZvhCmCN45prMVzFWcJSP8LvqoThbqqPBt1b1UftehccjVdeqNQ5n1fNZMoXYKhEXDR9tAwircdad5LQtLp",
  "key42": "nJLVxckEwQqj9tKFEfHSES2U1hnVkv3Fm38jssqAbzZnyaGq6wDZWPs6WdaMLx8LeVBiBAYqq2YBF4dEx8Utzwz",
  "key43": "3g3TKfeHLFAbYWSzV1H2mgH1nmvPR7LuFK8nTfsaU2arMCu8qpeiyDyk2HTYMYUnrD6peHzCh37hJhXMu8Gp4hKR",
  "key44": "2ge35herqQpj6HfE73TeUhkYBAtRrU7GHxVHaH6EKUtsP3v5dWGMQqDwWDQxbAVHU1k2NLLX9fQpEQU4iPKxeM2V"
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
