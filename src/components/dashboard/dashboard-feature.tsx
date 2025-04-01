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
    "3FVMtyQMvPQnwNXGvyedAijMSdyShJPt1EPYfdwFTkdbq4SvHi119V5WKywCNVQFEG27jX8dVeYUgBYh8zLBdqsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQzh3ftZmmd5U3fRptaZMRP8q6s4v1J2j37s1kmDgBicg4pNL3YtAGnSJXKM9vfDYyDtAiyPABRXbCdVujERAfb",
  "key1": "41LCSV9785upc5HGj1qHjEdGVqCTRkGZvuC9N79DXcdpYz57mJRMY5t3Vxs1cbxRW9J6QUvEHFDEDa2nwap17qfA",
  "key2": "w8EH3YzjjyEFjPwc7E6TrpyumnYxtTX6HNtZnFN1fPZ2UKohRe9kodc3weSeD3ozGVSvmtM1p1E65DMHPNe8XTL",
  "key3": "5qmH4Z7zgDEbWbRzTNgwQAzphWpLa8ijYk2XdK46fJXZJWdwqZ1WbAnHdq3D1c5QrFF1uG63E95VbjUwVeCVRzwT",
  "key4": "2STJwk9UzYZ9Yh9SQgrWszggigcwYQ8G8zc88G1NnVQw8vHGj7n2xVRgymxC1FLmQktVmzP5bLDCuBckkGD3VCEA",
  "key5": "3gqk3LNNmib6RnpcC2k1vRRHjVSyaahJvcaBxF41q1Z3guRVoaYFQZyZZfQkXPrgnAJPHwqbzPQq4zSF2ZEgcnsu",
  "key6": "47P5K8EAHuDR3LV8yEvfmGQfMRV2PdBrFgk8xBj9CNCRUVGrAW7eNWZuYXPQbtRGU5EGUKuCtNNaRwBdWvvaXgXV",
  "key7": "2ZGUrcMczs6AW9jd8uuaVFYBqnRiuVTnK2xmf8NSpgMdBQvuGSTLv3LXqDYHuRUsb5jkKDYnnGYpSidASGSAEb5R",
  "key8": "2qpWu6Xbq2ij8wNCFXk8NpSWSj9NuYtoqvjWV7ydBce2uyLPpCwqXs487SFncsfeMVFzyMzGLsLRN8Jsu8pTC86E",
  "key9": "5evvJHj2zmdpBJWoveUwoo93DtJd5VhheePmTFiTNhRXz1VTcFDHE4cLKmSU8f4UgzFsY47BqWYaUwYzDAToSFZE",
  "key10": "4yCJJctzUkB9jZeL5s7vB5mvnaK1RyUfqAoymfoJCE59vJK8TtkpiG1AK5baVjR92EWQLMoQ5jhxCMHsfXbxtbiV",
  "key11": "62HNDfvZtx5inxR92NZhVjDTREHmK3tiKjJakLqG5Csn3tvEa1m991Z6ayEPRnph2F8JDJA9qPzQoK6AkJukYGyR",
  "key12": "2fEWRC8EYf5rYriYZLv3oVEsdyH2C7V11gFzZE6Z1iryYhhVJBKEPeGBzMoLbntDseZcgkf3gR3gp9Umxm8qYbAd",
  "key13": "5aPcuXRU9EvcAmnZcRAHAvVGdoMWsoaHwnNq5wETbv8s62MY5rs9oyEZ72gJ8UYDpTiqJrQafCwodTyeXoYqrwwH",
  "key14": "2h7VwVR6H8kgJMUMniswJZvMsodfhRFrShwnTRq22MYWdUE9XM5HDDkrtvd6EeKoNu5C1tfo7q3hx83thxrqgq48",
  "key15": "5GRCodgtQKAgM7ooAxzqgsTzj4J42WxuyGB3arenyTsBeqpJdjbiLHYAWHiXeK5nyg9kZaXpnhxUHwXJh2btVAD5",
  "key16": "62MCUwvX8cG52SFETNG3UDD5j8EKSkR2uKz6s2omRyA82YPihAefekEmvMXdcPufsxyT7FyojFTfsScDABvVJsBa",
  "key17": "4xTa2HjsEtkkSWx6SD4vovj8we69kdJs1VeybuAuo7W8QdUTRLcar1d9zqAY3jgPxPkqH2B2h2WGYGuoyxB4vzNk",
  "key18": "3wVDDgKU9ZGbUKYsYw74GECq2KMrZjufkqw2C3KMwW7Xnt1MgNMSMbjL3QbUxthywLjfXWbmd23KYZz4CRPh1moA",
  "key19": "hmfo56RNSSdEe8JybyGw6kwhY3Qqf2yVD1WNuBSvN4asZLd5rsSHsbfKCkTzBZyPuG7xmytAa279sc53iDSYpVr",
  "key20": "5eqQ2QmRnF1qsVc5R5Fapsb3MXcPXnsHc395YGV5CtJzqrytWXAce95zSHmt2rF1DyeRuUkCbi5ufNiMfZWk53sS",
  "key21": "4PrmzkNpSsVree69zADr3Bhd5XwR8BN8zRmyNm7FDZjRaNsbwh8g3wLcAn6Tj64hHW3unebiPWxQ7GWyXqaZcbpx",
  "key22": "2cY1dgf5t8L8UYmKRWCBo77heC25WxwCJyvvJHEiPE7TeyvxaWNhUXmZzVTDN2MZEWhmsGUazRDsk5yYz5Rv5htu",
  "key23": "4QJkoApQF7R8pwWpqTBoeNF1jwgyQJ5beqtapMt2KoPnD1jYCYMNZttSTZDXXL65jGfjLRrtnFxFi64eR4qEWstS",
  "key24": "5hotFjWG4RfC8CjGi152SckSMUcW4LZXd9voJ8BLGSmYE4dUg7MiVMYdG8xkSp1KXe9qb4Z1kH4H4ARmBjjbBcZH",
  "key25": "4USiagmxfL1Wg6wZV3CQ1tzxDdKQSdNvp6GUHdm4AgGvfpurGKZMvvApde44LpjDSdyiTHtWqggjAPgmCxVvvAg6",
  "key26": "5u4gbaWRURNSbCPxA3zCfYzidoumxW9KiWKJ6MXDGpqdKKJv2xHPpJ8fGcWKCfPe7saeUES9KG4m66ufwf8rqXGN",
  "key27": "4jGrGYjiSnRYY7nRUD2fLPJHgqYuNKGt9rFkGbnFDZWVj12QHyHyixwg57FAzrpmLzLViibwLt94ewxih4GeuBM4",
  "key28": "2vfZjmfxsuPsWSw7ruCHecNS1hJ2yoQwFypGRF6hUHG1TYjc3vHVuudVnvKs5VCVgvyeMtADTvnijG9jpJfaLDk2",
  "key29": "CrdHrFegMJGCVeEGwmUS7fupYwYjjbicuiMM2f5e8RhPGMH8ZTSAupnYPbsWGFS6dYhAdxgKtiy5J18wjWcmFgc",
  "key30": "KEELAkPuyJLSH8wwRH4rwbstqVG6YzUPSqByKWtN7TSJgpK44xHQVY6vfxwRDUW51ez1j9fTdSMh6hhXTEYq43x",
  "key31": "5p1GwWfnUzW4iC56gizj7KbFVxx5YJ8LjNuvysbrxTYr5bY1xepoxCKcGHWy5n7yNESih3FkUbBstZAuPfqnHvxZ",
  "key32": "49i7ojCpE3iFSwrSC57j2QGAAieJ2xbZvnBVzQh9DQLPjSGHNeXv2pdb1bFLYTLW8P3HifMHH1kZDBViLUuWwNQe"
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
