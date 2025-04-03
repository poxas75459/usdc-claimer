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
    "3PBi5XDwfjckyGWQPv5pARACdvYCorPTQtgdukJgY6UoUXsBktCf4p6Pg1n4i7VNMjofdX7u8WJ9SSGtTNnDxH2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XndjeCfGR74xF29KgjvjMeH6aV3ZsALyN9LihGCnK1hv6uXkMXtpZ9MnXvjHo69CahvdUifeP2skPaWJ5oUxVPg",
  "key1": "24t4CuVBNFgjhNCGb8seBKAsgjmyxj71rd9CRWjpVUWf6CC1H858AiDRYCC9GN5cFLpwePxexCQykZAmmgQrXhxo",
  "key2": "5Z3rrZzoKkauX7KEUkd5RpMBJRwGf5GGaiAtt7zusns2VSw1Dr3HfueVhZcFMavfRhZbBJTdYPGQS9ChMFea2Kop",
  "key3": "3sRh9ZL5WSqmPDRxcgcFTDrjzS5vqfbyrNEz9KywS6Kg4buU3Ua9mHVmykQcz2eK6qFvvs5f5nTchAiWUh13VYYv",
  "key4": "3D4uYogKk7RpB94CJiyGi81qTUPmS3wQptKYrjjdd2mTApzjAxsQ6XZzecLBBuKXGgSneKPypBysLtrCKnrNdrdd",
  "key5": "3PmxKntXeCo434YCMjxyW27D2s3rueBHzUxuC7F7ofQM2vN6WvrPATi7UVCiUZRMJK31Q4zeEfKSbEf7vvgWqLQ5",
  "key6": "2ChyKLywZeEiCUJ78cbvzUUZPeg4WskpApJGiBDybTFjUscmuWKUANk3Ks4m4jj2EDQbj66wwEdvuhk5QfVmVQeb",
  "key7": "41CspqW7SJXaSbt9P3S3Th3yU9dDjNmb2Pzn8bUiENP1gmaJWYiwnLxTpzoPZkC9ivDtTWJV3sD63aitm9QycUXU",
  "key8": "5RDwk3bCwVvypXUt7mTpPhWvsXRCgeWpg5Uvj1mYwfvvnTBLqhnCE6jsg23RKJf2hmsaT1aws4ssFKUrBQhaqMAH",
  "key9": "4mPhP4U41ubEeUzGt9JCDw5o9zWK5ZCnRkejr12GgNq7jwCKCA4EoPRSn3chTYoZTYTheUCnwCS68cUEoYB2qnk2",
  "key10": "7k12Sq83DYMnEU2fBbaXDgxSTbFSXD3vCPHvNoFCgJUEKT8zRcDPQVShx4LGkHps57JRrGbCPBaAEdczq4subzb",
  "key11": "414eRk9Hq2mEQP5BFiqB5n53FUAcfK7JWbwrJZjJJ5dbNs5XkyEGCPVfTB3VdsDeiHFKNs96JT4DV6ENDnQDeUgE",
  "key12": "5xcqzZ5jQuNbsxAMjHfuxL4zNPP4Eyy4VDCM3Qb6kMAgeyRBPxJ1QGXm71Go61Tye9BTjwm1por6fgSUWvZpMgMg",
  "key13": "4oBLUDGmHmFmM8wA1SrUbLhaffVphHD44XKVHtWojcJdwRNrzUjuweScbadZneBk3EiETDkWeEbyadzGyQM3ePeu",
  "key14": "3rEFGkaFRRCodz359jTxoe82QTUJk7YbogPRA4M7n7a3WZ7ttGfeon714wqHTW1bzj9ge6hMxU9xUpJQdbwu4crn",
  "key15": "McHFiib4FWFznha4UWx4fXj6sqAHSwqYcxcV2vvkupPtSseqatbwX29AiLSBPmdQ9915NP1kkcDABbWosdrcvh7",
  "key16": "28TGveXf4fiRnEnuMXZdBkAAnpiLuEM7Z9s1cP85E9UL99XpUFWcfYuVaQzUVD1yHYz4DDD7tFvC8eKwwamLcTyK",
  "key17": "29Edmk6zz1JMVhUCRf7tkTxqg9TAcvu5dk4pvPpm3eEJUZyxUtecfi8fFQmRcqDpTZBW2ZqGuGj6N4TU7ahaqpLc",
  "key18": "5DrMDwPtv92DFEPWyuZ95Jg7xy7SLZ6QDuKYxS1iKTLGxnaoCtNLeRPsLkKbuzMSVGSTu8F8dy3SUWuDgr3ejza5",
  "key19": "4Hu2zBUZyhNMQJQgaZMfzW6goSgPX9pntAyAfc3H6DDUFefYUr78JS4GXKfs9MVwPmo1oxTm4M1zBjfG2svSmNc5",
  "key20": "DfmjirNhb1HnLeztk6n8VzKzyPBv1SKZPL9zEt4Rn4WkUFPcdLSUexBBTsPqMjwxE1ro2BMvVDqqa47cUQtDqfD",
  "key21": "e8943cssi7dqcMsgZiRWECHMasHe9XY7S9BNb5riegkN8YiHK5UvtDjdKRSwjEdmb63uTDPMFi9YFTaEWWgmVGP",
  "key22": "33CY9jdFsaBwaMKXcjMesxL5nWsFDQeVL9GtvVFBtiQ4pY3bkvwJnHLYy8nBErUbbjVTsfKXtXW4TaDCQmfeLvHy",
  "key23": "3GgnuFQRs24mgsoMYPA6sj8UWv6p5KheYssReQdPUfDRLbdVFT5n22ZvYJGfmnLbpXHeBXUNVDUhakkSQmHfztHS",
  "key24": "2GGFnjq11DaR2J9up2T4Rfzb53MeBQJqCk5UzNCpxtwVjDqkJmigAV2rWT8R1SXLkBWv1pEW1asHYx4bYwcjEJKg",
  "key25": "31SEmNVp9sqYvkJdXa8j9vpzcdpv1J2w2mUvpjBpNYFiSufjMqDEpfYEfLQNCMki6UH7dz4Bc6qfr1PRb8foVqp5",
  "key26": "5R8Rn4ekok4mt1XALu8RwFiLJE4Vna1qvupS1onA8sdjuwyMf5T5uQ5QQVqNhv54zS9qWLtUW43NgHbNoNKMcEr",
  "key27": "2C52L8JcDdXs5XRXZzKZxkJE2d5ALPuf659ac9XjXpZS293UbWU65teY8WVr3qpAUDp6XDNT2P23QtHAH9qGdtCc",
  "key28": "3zbs5Xrh3SAdCFTzREXMWoP9Sq4Yh5DySgawJFxsEhCc7uqk3LnBcggyXHSQXDWL5uMDasoxax6k77TjXnonJrga",
  "key29": "3rZEtSxXgEtdVY44yy1R52pCPbgVYsysKmZ8GCx9Q3Cedczj3WRqfNooW1YH5GPneVALSLd9zJjWCUG8apYN48wL",
  "key30": "3sugG6CnYjPdFfUEku6wEZENbazEHhXhhohdutF5b4yVKxqah4NBrTgn4xDiWkVE7NC7LJnkZxD1MwWs2XGe5QVD",
  "key31": "3mK2Kzm6mF5UDQ9txcwRe93SNomdDaXyP6TfPZDppYG48qgXLtp7dSxjayo27TMemkamyoitggPhmXPAuktGYo2z",
  "key32": "vwJJseKBvs699szSVq9DHrPuX6ZkHgUbdnR7kNPvksZhdqbJSVgotJzEr18SpSmsEFoy3kuMTwoGpEujSfh9261",
  "key33": "4ViSeKzjb2tnqtzWBWDfTojgtb9ystVBPrjuHmiNyvB5HCCmDNCGuLR8SL6GadgoGRFF9DBeJxArCg4AkY8sQDkC",
  "key34": "5Fxu2p8yf1SPm5gZikdQ7URzt8HSu6NbzzfDPQ5ToE9RphXmizcXKXKR28HejjdwsgEvAJq7rydD5yrKib1WfmsL",
  "key35": "3jZFfeKsjgG23dJK7ENSwxv7WvpYJN4m9GNPTZJUkQ4UMHis616jEnMk4W4ahufN8eKbD5jAaLYeguzmsRdhWPbx",
  "key36": "3hHoW7mKRp6XufPoxLM7WJ2setLo3whptQ8hk86dQ2rJrsprHuMyuYtdT7eep25buY9Hzk9iL7oRD4Kz4cLYomAy",
  "key37": "QoiAMpdXa7mkpzHVB584rUoMFbRcT9NgGPYsK1xH1QhJ9UcFui9m1Vx6bGhrpDEde4zqoPWnpq6UVpkSDkEtSyb",
  "key38": "TYFK1UoggY9eBnbY59qBbrzWJ6ddPfYB28CaZoKxsC9CWKm3HdrnPfwprS7ms37hxGV9BaPQApbsiBktrSGatXj",
  "key39": "4EHdRQYDZ5ytKYpW6iGRgWCcGgqZqXaJx47W81TyzXELEf6TwhZPznygxh4T9wSnCMai277y2DwYF2mnGYfgwQXB",
  "key40": "5aky4uE1Xdx4qCtgV2Sd9fHZqs7XZ4n3s8ydikWQCiCamgBSWakJZTSaND8ifNu823XeZvorZE4jesfnRuT5HXrU",
  "key41": "KrLTBzD2ns8Zrj1M1mXh8LHVCqsuMNTHYcgs9ZURt4QtkanmEvSyaFeGvU65dY2FzBNB43Tk7Fy3mAXziHmNKkn",
  "key42": "pUsrYoEzbCUqakrS94i84yAaJxSao7NJYmLvv8zgPC8PDkJrh987WgjpEJQRKKZTTSuXpFeEVSNCxv98FfNortv",
  "key43": "57267bWd4YjUDuo57Ma76YCjcH75M5yDhGtBAUENiQfBp8VBu9SELcriiCEbNffeMMHK8fXqNnmhohsx6Y5R3yt3",
  "key44": "41TDavkBaqFcw8FFqFvuQMVmoXDNCz3XkJC6T1TNVQvsijgmGRmzeZpiTJm9KgJyMbVGGzpYNfALof2odwBrHRoz"
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
