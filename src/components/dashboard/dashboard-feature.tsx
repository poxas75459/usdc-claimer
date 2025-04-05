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
    "3Vgv9M6gN9sdbu8b4NUggnatcFc6r13XXXnC9asywsU8t7eBcXFqcsE6PpX9TmKX9ZW6SNturjiAtzbCZuZUVeLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S652HHJPb9kYYhgqifCNADYRQifiaMXyDNm8g7nihrB2w1DtVyQmRGBcUG726odEEybT48iMM2gRnjNd7XkU45U",
  "key1": "5v2ychWQvBw1KE63XPDWruMSk2Zdtpi5hh1LTzQh7V6Jx9UHbbAzigfYQgRJEED8D2mAz8HdLtp8ZjbTWVnaXuFQ",
  "key2": "2QL9Nkf2aivfTnPwHkmEgEekdhVP4HpAmhn1pRGWRmXonUCVYa5DaEypum7RoRy3EPQaDJVgsSLzSsC7LGQ4jYgy",
  "key3": "2ezCdZd8aTJYPkFoDLEQrsceRo83QQB5mmW4nsrdYJNujEJF1LUzkhaJiEtLZFXKPxp3nsprjxGjXM7yinT7ifgf",
  "key4": "VoXWV9wgAcPT95LCZiJYEea1ig8AYHLfeZjhgC1PVAfNNRktMDNW4peBjbJPDB3GTLWvryLrTdi9XBQFXaaTAtj",
  "key5": "2q1Nwiiq6qgkmqzjaXqUccsx85s7zHbEpCGQGRMNxX3Z1cD1iVaRJmtSHxMcG8rzmJ6vv4823xZyKTZWTKxLYqnk",
  "key6": "42Fiq9g2JaAupcAtz89rGCHXcEfo3hXLDvjo3Zm2p3hMgGbTqS89ssUjPUhpyZuYDNaHe7dreRcW5Du6AVt6J33Z",
  "key7": "3qKne5DhFFxe7ex1VR6PVRsB9ujkJ4icbBF2HVE8CmDw67RdLryKkkHE3nwJ6dV2DR3Re3Gz9qZhRdv4agA62L4j",
  "key8": "5QcNe9xnCvdftWpbKePhHtFWkUT5gyNQJ1Skidqcjyj9F6KPCjypVwA7mu8PUf5eeyS3A6PieJ7p4SZFHxnkZYAL",
  "key9": "KMae7rT6DBC9uE5AeKc7Pb7fRCAgFmjRgSvrqE5BBZpQrZi9WG5dZ7LUm1BCi4cVivjgznTcwtJbbXuT9YXix9K",
  "key10": "59eF3aCWmkLnmtew9HMm3ss2zYgRoJhQaNtsuTiRKwxRkBQh1EB5ppDTRF6xmoWTpWyLnTeNsBMbDJTyLkbpGtDF",
  "key11": "3H2AveigdoEpeyMcu8s9XDKihW1NDwnGWhsXF6bmhMmgxMQ7A6BvKCtBaLhvo9HksL8MsbCdaszX8kqshXg7JiGL",
  "key12": "4FVJ8DkAVo6oKNmGGzmzyjT2smH361apAsnM7R9KydbXL13oQrWsTuSHw9eGJm2Gv3bgzUbfBZkhEcWChuZjxk3t",
  "key13": "5UZmBAgFZimCF2aLqN3DQwJ45B3vd1sCvpN7BFSD93FaDWwsJD1JwyN2hepX6Vbu1uRtRcqMwPGLAJ2sLZUPg9mD",
  "key14": "R5Kqh8UdN5AbsA75uwn6D3JpdvZpKVfDMHdMwPaVRGEvZzijwo17BCFTju7dUmLqt4aspAuXU2TwmKNK5X3U399",
  "key15": "q215E57jtJWpkEmNwStMnwR5soLLKp7KdSRmgacKQUFs6JGLpg4GrXDgFvbPNrNxcxv33tPL1gUPZbsKeXWVP7c",
  "key16": "2Bp95ninzU7n79NNtrRfSjZHPv4gx5zhKRXgGpEdL4Ve28nLpeaQmvmeihkgNWWCZ8H86wnkLKaYEtrC9GqvsAAG",
  "key17": "4qkFo2v1k7MpcrhDfdYvRievNkTgEe2pEMszvBnpfn7FsFHo7fBRqadGCMqgd31wMidpEFLf5KjzceHG9xA5B4Tb",
  "key18": "4Pw75Un7AcD76gUtLUQMbGyk9WCuqfjEcU1tx83CamQFYyfh9HXEjjbmV1VuTuvr8nQqYJQS9JPgzF74MLny35QR",
  "key19": "CoYaUUor1sPiXenz2gnAqNjDmHPW4gf2b1G84nT4DG8TSL3CX5bRUomg3xomCd2cm7By64JhDjimpfg9cYVtfZW",
  "key20": "3gWBnQXfhJXh9eDYZnT1Lcrm8LGCReusTezPgRFsK1BMiBLdB1bxTZbCu4V9vz9erXTH7d6ApGo4sx36vXafs47W",
  "key21": "AQAGHVQL2uRBa5Cr2URPf5QH4PWzHxzzH1zEhpV67jF55RNXjLyF39UXhbjVWL7MMf4VTQyd9riFGfSUCG5GF9e",
  "key22": "4qi8x3qTakGY62PwCpSyjnNYkfU6BuHDXeLZoMejKNR8wTRADqBa3MjSLBVrtDQWmSmcHfUwzsxjjdj55YP34q2y",
  "key23": "3bP5NfAgVUV1WGCVHH6iqVV3RvLZtGts3nhonMMdzv3jKbekmn2vzdpFRnDbRAi5DLMXAMTtRgQQRaDYEeKKUrzh",
  "key24": "2pWDC69a9fPxMyGMjKbBXnstZnNKzz1Co2K2J6ES5KrApufdyWUteaLiXGTJhEzurWKBtz1icBiBN4ckvsBc7own",
  "key25": "2wb5ahv4aNFnCde3NdcjiuGL86nRkVLddMfMBqD5SPYWyVBJCY85wHLuqRoBQMy6yTFmRcxmC7gaYFZKYr7ya1Bq",
  "key26": "2XbyR9JrK6zBCMtYHiWphwhFxNQBWZPoEHQeU98YuaYP1curUsm8ybYbM7Z5k6sD4v6fX9ePv5Xf62j1dn2y4HuR",
  "key27": "WYvzHxyAucpx48tXjVvaxXittErbzZvtCdg2TU4x1U7nsqDYfq5XxVCVzC83KFyWkY69VejeAajeqvp9E769bVB",
  "key28": "48zUGNTHrvFGE6UPdo9dZAfS31sTmVZFAV5T42JTbq7MTYcDsPT1Wm77qqUh7K5yKUjxaQdHt6nh2XzcZrf2AnBc",
  "key29": "239is58jRzUnc2nJhCFkgeyUUDxqhMBwgGY66xTJ599jThpufGDT8sXgG63WPSKR9JDtBvU9jt4sb6w2peE77Juv",
  "key30": "46Ys3AT3jo6FkU2fbB2izkDwWp1bxkfBkhr5sSKeq8GbhUYXWHbMHTgDrbJCAooeTevfYvPu22FC1bTTyJvnFzqA",
  "key31": "4PZiLitaRNr5Nm8c86zWM15PU8NmHYtn5cq9scnTAiQFXJ2GxoNUjGQ5gE5LCk82jH4ueiG5kZJCD1hsokF6HjqY",
  "key32": "4p5oGjzypB9JdiefCU3y3wpgPNQFSH7gp9YxLeQJ6QmvNDNtUfkM4iZa1Uc6pde2qssKG89LSuwLBkJzHDcMaZRx",
  "key33": "NzQ96mvbq3c2a3828WDrwg8UG8qhse3LbLJmexrLe2jJGhoWtdADAabtdvsqU13zWtxTZvR4q7eUA29LvTR5uyi",
  "key34": "4JarVfGF7qGw1MVrZnwNNr8ymCLGWeLGWisxjj12DFTEdrCWjsf9c2ZFCFNfusyMrqKks8Fu6k9ihogFjyVwvuPZ",
  "key35": "33KTFA7Jt8ZwNFzHqTTFneNkPZAKhG2VddvaKvuA9jySWRdCKRpy3USLLaMwet2TkH9nyeaASEmYQjTQsZJh3TXL",
  "key36": "63ubSFzaqPV98i1zdUQBu8yNE2sWZ7SKfkcCc2fHbAa1u5pdWcr1maN262PUfHn9XiD6FPBe1Tm5DMb1Spiw3GhB",
  "key37": "3mQ6bWmU3ufDeFVrhGfVCTqg9QAsGDGRyCQPYYHuGcBjX9Q9wrwkznCnD7L6HkvZyUYWCqC3Gdvz3zR5iBQhosHz",
  "key38": "ZPFWVgaqZj87yQyR8keDromUEeUsDg7Mgk7eb6joZMM3qdCgkpogXjXDBRDsryD5ckjvsPgMNURFpzJ8KypqbZi",
  "key39": "5PJr1xfWa2qAExhwEVU4t4zQEBmAB5gwwERQZv63wUsQzQpV3Ce8X24HQxLpyu5NBPf5tRd2reVB56U8x6ZboUzX",
  "key40": "4DocWFZs9RKykrzderCBrfyYGAM687itxyrfDAUqDB25Nft3e9SgwGbECMAWRc1q6qW2jMoWeZJMLQkLhFUHsGyo",
  "key41": "39yVvhmPxb7RdWPc8Qm8i3bfuX49jK3cdyRHEcoh5Nh7Qp8r5XZfxv2XSHB5tsvTYZkEC5fhCtNcNjdxwHmJZ4MA",
  "key42": "4Edsj1inxSKxffKKYXvc9p9eKjNdUSPRbNUKXSWJjJSbVskWN7fbS4fvfL8m4RXeQxo9ke361zFAKx25XGw6jqDg",
  "key43": "32gLNkCTX6GdLta9ZAMEScALNzkmHVuS78SJd7iDYyZYuMkBFzFe77zyuaD4JucUTNWtWChbehQ9vYLCUin9fQNv"
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
