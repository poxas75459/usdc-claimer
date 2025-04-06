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
    "BRbqDrCSSrc63e7HJmDyxzHzFHRCPTPQirTBS4A6X431pDFvURQLYmGQoBw4Zo7UszcqTY5YopgwHRt7MgVVWKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvSHatDE4HCzTYKhmHT6DTQuzi1jcSftBajByPokbPbaBehhuy51tpHUhXcnBeR3nPziLKLC3NyoJH3ecxbyAxo",
  "key1": "3MdjVa1fXQXKaLyoA9ocrxnQaLmYvrFEV6FtVfyzPiFnmB1SSx8qfzqgzpsvffNhPfVFyp47gkSicbsrsSEYHzy1",
  "key2": "3tTCg23wDspWDHeXZYG1ae1garCpDexFzpYYXRjtHin4SotqBEpBe68HwfXH4J7CjdBsmNWeUUwBpq7VDSYLZueq",
  "key3": "GEY9pahAcm6wRdqz4C9YxAgnoBkawtCeWdmq6QpUWGC9ZVsTJBH1y7nv1csfNsAKz8p7V1BrtTAaeGJ98gq1d49",
  "key4": "2fALh2bs5x8tRSUrZuDxr1CDeoaeC453N6L9dqceay2PhDrWD9heBKKT8ZD37fnPq6XpopoXN9RjwuaU1QJUAQ6Y",
  "key5": "2A73LEYMzbxKgqDS9UNk8Jivf5hz1SmEd7EquxmUTdeYcWqcxAFGcQAuiNSP9Wbd2cjSFcGMtaNkPbso1UgPfzcX",
  "key6": "2suhDSLmwB71yzEenwYDPv4HS7sLxgkU4QrsQLUfC8kmpy9D2X5TKLx3QLR7samvMDmrmUufLmzwRvg883MpjiLg",
  "key7": "5yV419bB9AXSfH71TKjC181a1jZ9W38KgLX3fdj8cEcp4LYqEPvFUZmeFLVZBcXsR9b7MJyhNfwjJYaWZRTb2hVz",
  "key8": "2SqyQUs3R96hVLmKL79yTTwefTj1fZnxNTCRiuwXaZierCi4mqvjN9pd5STWeKqU8UcqDSq7XVz8UVBYTLXzEKa3",
  "key9": "xzn6Ledz3Jbn9Q3YccLDDRcVRbPnMRxBVMHWwmQbFsRVBzXHQUVn9kV5WR7b97i9bTeXM8zRvTCsHjxW8CJPm8h",
  "key10": "5e6PMPN27hmVeFCNqMDij25BdAewMu19UurqeStEGMiXiQy18u2d2jHBMEo81TRypkZAVCpu8fX2tGPF93Abobek",
  "key11": "3otP9XmtqrNDdgGFZLGGXDLnVppRDPJHiKhbAPhu5372wmezBvE8sNvPubY6Lau9MRM1pjMHfPsHqQCasWr1MrHK",
  "key12": "qiWqsY3cDvmGpoMi2kKPvuYvruSke293eFENYoLuQ4T7ovHuhDFSw9m4Pdn7Nf83o1KoaSyySKmAxhPreiie4Gz",
  "key13": "5VtwdtgAvnKRMKkYHCivDKs6j37c3Pbum98ag6gGmAgJX5ad3g2fHBXvRPEQ3TsApRxXV2A28HwMBry8diHfUat",
  "key14": "oJ2gZYnMhd42DeusENmKdkYZkhFGoR64Gz8qG7XUj3iV3f8GMgHxE5yNLnJ3oLFkTLxuvv1R9C7x2HG96HKZQWy",
  "key15": "3J6gpBrwZLmTsPTqtqj8HExTjK87G8XDNKbjHPoaD63kPaprAzVSr3RNKZV3bhhTvfZMKoY85SjoKzpofceV77jS",
  "key16": "2MKrHSMg2Ae3kkbJM9vujxocApcka43Rg33fVLd19wnwy1xiu1C16cMEEHwoXfpmpD28oWSNBuiViSkLGhWxk8fZ",
  "key17": "42LFRwyARLRcsHzXnak8wUpYhZ4JAdk2cfQfHE1SEvVg11zauCfU1dbZbtJuMQHDyZAXxdAWcatCRY325wH9HnQ4",
  "key18": "ejn6B8T1x3JJMrWndqKmQdeGEWCGcyLUJKchzhZQw9RgRcARbg2cxHfQdrpTPed2p4twsT6nNhdy2aiGo4Jr2v1",
  "key19": "5cEKGXNmC1Tpssc2u79kecSsYk3aXbjx3Wxa7FpRWwBFhB3y9qXupSZy6UmbeiPvUwVFfGcZPYwh3uftNwFzhNLS",
  "key20": "42hivpf5c1euEAr4pLYisWeeGCtJoC2F7akEvS7gsBbX891NSdqzfrknCbJtFkGfujuec6PkzjV52EdThSy9uk9z",
  "key21": "5g4uvzq98PbLs8AUjecd9THqKBnZzL5tfDQkh2D9DKuXKfcuRu3p24MiqzXU3QkANLS7fhjgWS2N97e4WSfnFp3H",
  "key22": "PMDmALaoDGd2YfS6vhHCuRS7ev9qGsEPVhVfXQdm3NGvFmuAJPDZmMg6av8kQXDJspBEjnmk45bZjMgSBLBf8Pt",
  "key23": "S5Evg7H6pkP7qr8UecKrEELM3UgvPcxrCFkBRheaYRbbBERzs79nabx2r5tTvU1QPTmFRE9imq3nXnefrZofSTV",
  "key24": "Gzowck4CWTjuio6kZpay1x83e773KvCgeSLDbhytSD6gkEMZG7gZrWyajaQcjNwpYZYV1LdE4qCUD7uzVzZfjLM",
  "key25": "na1JfKtLDCuvzEc4cLGfmJcc5Ao8dmfWjzbRqA51jevPHsRhp3S6zRq3RcTpcaEcRmUss5JfgCQjFqrPt3mmQpx",
  "key26": "28tsqqqtKKGUsLwHj3xf4pw6qGd8VS31Sb6DQsXv1LQSxs6g3qEfv2ky8mSA5eyYTpjs5ZNPMYb2tQsQ22rGZEwX",
  "key27": "SKmxx8uDhWj6Bwrcx8EptVr8VkBbqmsQ1sop7XHMaBCELB6jRyvPZ3o3E4hPjBmroFha9HNYbgH3qwHtqusZexs",
  "key28": "5uEjnViK1Uy68pjeAtYaAYEtxAmf3PjS6867TDNu1oMcZ5jnnLZhFkAvsP4YsmPqbP7C9PQoDrj2tTiMptiEHFig",
  "key29": "1tpKcb1PSJQ9HWEgd727ZmQxKbvDrCkBH8Fp66AyfJX8bQbhF96jhyCGNaSJTzXjP4DLFTFzbWDeKy1VRCer2oo",
  "key30": "4AAiyT6kahc4aWSSKpmch2xfaTDg58t2VpCaPfEYPGsmEAN96Eufq7QWQRH9kt9irVgdH46yhAQ7Kdzv3J5xSgSX",
  "key31": "3fr9asVqKvQeMsJRR88GuxaDytyfjUiHmFaS93MENATSR1RS4fKZ3zi9b5FzXLGip2VM4oMBTtcVZPoj49xmEagU",
  "key32": "67jYanarjYJ4aM75SbYGum276j27SfgXRkqzXLKaRBZmnDGHdPCUVrTDwRf3SCbkYthCskSgMpVf7ApaBUaLgoGk",
  "key33": "3ACGNsXi8Lyk5ou3g81gsby9H1MRHqNcTFJWdBzQGc53tPAz7GNKzV7iu4jTybBTQjM74fozpQcN8SCCx7kMjaZZ",
  "key34": "5nxNujgNy3bodFayqKSvPa9ioPrpEWNh64nFZ5jDqikEnatcmD1xn41BCXm8NQ62tcXzBRLEi5k32h3aWRATvC1h",
  "key35": "3idfKcFEn2v5CmMsZRTRM7YDFedWsxPkAFW2dZ9izKqDmr5i3RYWsDRKDSEt5ytUMnzPeNSTzRQs96Zqbue7JAYh",
  "key36": "3nxGtSqpcpzkyWee97qLE1YSCTArfj7DbybZYN6k5FRrmxjXX5U978hRyMZQw5pW2ViWBKcTMwhCWWFMDGpMTtrn",
  "key37": "5oDn7dKjULaBGRMHb3UWoVu7dqyCtgZgMZPbVoDSEa4LKHdvbmpaGt6bRyrdwnNCRC4dojMZmpKTipA6iyaR9Xxv",
  "key38": "5rS2kswTmgsgEbctY5WfWYdb8dhEbzdaPAYyU4D66STovWvHfjXA5DmeBnyWJz6ucYGtTa2UtKnqzgwHVn8oYPAn",
  "key39": "3w3nM3gtVT4P497BXvzf6FEJaSbcWZtL9iBvV1JqFh5UFvPAFAP2mfbWhULCQmXY7QpsR3rvrcxciWc4Ds7MALtH",
  "key40": "4TP8Q6TSA7p2CoZfj5Fn17EVtYee7Nr2sV5v2PZXyKy7srgNs3GgpPHsKQhgu267iVgxRZwAH511p8c2urRUXoC7",
  "key41": "2Dh3gQk72FMSd5RikAypPMBo6zHeeeVgVz9hxqnRDULZ4uH1F8TvqmgC1DqA79M2bpcN82e5gkQXQFU7nqLJu9Eq",
  "key42": "TQRdyJnc3CGvQnCvqwNacgd4tGiuoC6dXz2yFZzY7JHR8fZnnrEys7MUc5TzLpPfojhtVf8KRpdjhk6AmhEyXfk",
  "key43": "4M8mZq7egiHevTok1qgYn29vkvyVpP2GXBXE1PgfXMh4pFmysECFYmDu6ZpfZzi9t9oJzE6V5Daox9cRpXxhmS8b",
  "key44": "4R4K7RhnxhEqkuMb6hHBREMgyrAiiezPSeWV8mV9qSvKphsDoxXNL1EihgTr1J1EZUi2M3Tmr2jNhNXEpR8rA8zx"
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
