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
    "3ZcXi9VtaJb2xoddSF6TCotbrMVjxhfCwnsSpK5spZZHgZmmRQhSAvK3M22oskcrZxUby5Q6Z4bvBxaasg1zhDva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WK6RgsA2mt8R4S4S465jXvBAD3xb1t5q4bUyGe7kgxG2C5HAswgMSvDis9tJ4J6bmkJQhnGHpZiZ3p3yXhjSpcE",
  "key1": "2dRdCdBCSws7wg9a6WarBGAUjuoYj6gzADz9WRH6NaEBgFw9jMgrTk7BhCmWB7gdr2RHvixPpobURHSxSJQG5qY1",
  "key2": "3mBggoPnCztUpiyykbKJoUNmBsgoAJsM3M5fu4LHKipiX3hmB2F9s1VwKySUWqCL238cm19AjCdfyuKxNRBSvdYe",
  "key3": "39HDm2mDHX5b5B2uUymY6Ca5Yxx1STZdtqaDBt2CFfoXnFJGKUgdey4NsXrh27rSLGHVp6YDyu3EpNEvwCbQx4Jg",
  "key4": "5PzBYVqZPGQEjmTTrkNcpT24PNTkPgR1uavj1xdHCoEVJ8EFmDu3ng9SR15umSFEswdAekAogm32sbWKH5PZRCy4",
  "key5": "2tr9CSgjYPAfSP1vaZf44U7CspZ8r9LPsGhDbHJzJmdH3wGDTyi8oZDy74yEaRGVSNpnZk9iq3EX4Gp8gBgVqZVH",
  "key6": "iRAvejFMZfnKSBkLVET4rsmnev7x4X3h3CdawDcd2p3ENBLxqFncnRa81S2zZsc1xbMZVCgDV6hHefdHyLsH9Y3",
  "key7": "3HdTnGRax4AMHav5fNmmpxbn1NrsScLKB6sfc8tfgYgZddmcxPX8KZ82U5ppEC1hfXazbb2KTRB28zZcmphAq4jX",
  "key8": "4dcHAN8RU33jfacze65dSVjFELDBuuNukvXgWqzdLyoGMxzFGoQ9cX18GLrZz16ERiMuVhU6yNLqhGHXW1jo2NCV",
  "key9": "3FX6pK6yoWfBM36y2gYkRTQpiKPJ86U5EJqnf6wop6Nc4XbMqQkxTf9ypESxRrMGGvSUbC9FTSjSfPCcg1fYyFiu",
  "key10": "ZU37KsU88DEBQrm3BH9GifRjXy6g2w7Ybn4XGMupkg4umiLCS4ii9tAoA5Tdo6oA6gizaBDyeA6zo7rxiiZkyKE",
  "key11": "5HxJrtupcAA7iyghT5caeHczr8xo42SHzE9d4U9nsymcHBwiuzZti82AqZgjPMbhXfKnVmzTRkPmAeKQat3y5Hur",
  "key12": "2FwTf6rKrHF8mrSs4encuKJM4NcBJgUQRJCpyzWPQ8gNykkevn9YSeQ2uGFRvNvY4YdY11XTARStr4ovU9sveUzC",
  "key13": "4R5DKbzmhfPPDTVb1k1M9WGCPJs4FLcjvtEZcv83RE8koZANoYyuvwwo196aSjAyf699YLWLHjvfeWtGuRu9XdVm",
  "key14": "3ttcg7ViqLh4jPPfaXF7Ppf2zrM33sDU3bCPbYqzRu3WwCC3iQWxBubznbp9ZnL85uZXsZAvtYUrgUmosAH1ZY5V",
  "key15": "tiwjX8HzBC8nvQ938VMbiwqpYUQC14PYsJ9549EmPcV2a46hHCPVoFqFn54r4itQPozdG9bu1HwNzhbSnH4aU1h",
  "key16": "3g1ZEtk6GgwiTLvosweDNQ8aRUnb36aSd1w57LM7bYUQxRj27EeyW91oXufZKH63225R4KytCKwLijHxEtdgyS8i",
  "key17": "3yF13URZmPaou3aqnq626Hcx59ZvwoQvmdwZAV9DDpoweP7TCsRD5pqoWJRZfSNs71pZyPbnwdbSzwQ85LqJegp9",
  "key18": "abAJZHtDQUs1kHYDxeFLJh7P94F3tc1iDy7KzKzR38EeqHstjWQ1RxkVSiL5JRvj4RTP8rLZqc8jMGZxDU9kHrW",
  "key19": "zCkgYiLK1jsdGpzgGUswtG33DHwCJfHUFtFqpy6T81jZVnbrU2eTCzKyvS9vm33bMr7KEEFt88YmP3PVmP6Ym85",
  "key20": "UdgCtkFgdiKouTWqjtdN2q5eKskEQA9xypDGxvqtHEHZHDiuf5nmheDtZ5WCLgzoaRAbUpHQiNfF3Y81XWvd5Md",
  "key21": "ucPnZNQVFd4HgnybGPq7D3RURB6o52TQLa2oVHwUyEaAmGeFe4xWVzHQNdVYj4YCktBu1cEr915gHefFLKetfhG",
  "key22": "5QkdhwcWoPoM3buvChkoKiuQ8yCbxnt382r7uBRjaqKbKtnvUhnV5ekQfsRWwUu3zQToJw4aWPC6t3ajVtj5Btaw",
  "key23": "5N6cHAJeQXXjh4nnrcQw8QW9hLsGSZE9bFMpExCXDVrgfjCprM6Xkyq2uWt1aYqc6hWKpQVosdgf6BcRgt66NRxc",
  "key24": "2Mwd6K3Qo2jzNCs9QY61hMq7DPtcpL8UPB5iPSG1ZBCH2SoaarMHGm3DqP9HLd4DvsztxfxzgbaytuffZ7EiKeBU",
  "key25": "2hLVzzmQMqxMXpqQ1QZbjFpjdy5f2C1c5BLGyM9KgVfnhVY2aDktWjVLfASXoVDrHEUkJqv6m6kFJ4EezzrXaog6",
  "key26": "3T5MQPXywE8grU9PkNYb7JfE2ja7dvgcR5KgWS1dbUCJ9GVUqWsAZp3eG4BUfequUZH976nYPjemz4m7SaCaApTV",
  "key27": "4qbtweUoYTFm19HJFyfdRDXHxor5BbUgSfrX3RweAEgAiSAyF86FPtQXX91T2PNFwCtiDVBqNJkQ8tKVZoRSmHus",
  "key28": "5YBDapy1JproyVHuS9YykaRGJc6qQcnAstSoqLSZU7b1GrEHxV3WPxYr1DMMN8SwwTgwjNDLq9RUBguTQPzZ5bgg",
  "key29": "Xp8zsosCm48VjR6B3xMv5DmwsQffHMJ4SZjHHCGejJ6LDAi7bmvTdWecrsHAh1Jg2iEtVB7sLBJY2YmjnSVsaCX",
  "key30": "Yw5uazTq1zG2tKYe5BzmPTojeNGjK2PxmQnbZPhWsAena83sucT8Ay56CbSWoHf6RCxTuNBwVivKMqAhvV4HXvH",
  "key31": "6CotjMV8CLrg14pcSzvaWQUiiLToUV6cJcJiDYLBYGeYVRxfghhjBzGonRHsKRsDPDvRnwJU4BRMfwf5NZmof3H",
  "key32": "4z2u5cpV36hmEVFU9bBfiRfYDxzvsya69t8gJS9RoZmSPG842ZpqDkrRjynEBFuqHcKJTnNHUfdzMwaficntFjge",
  "key33": "5qqNBMy8wGfkndYBihGqFsaE7DDKcf4Ui4rn2PpeWCMN2FeyhUFhqExoUVb2DewmD5Tq9BxjN6WkZtPQ8b5NUum3",
  "key34": "2r14Z5nVrvamRYKs1GfFQKtDNEtvX7EqW4FBCnc8BD2HdQrv7Qe2g8Eia5oWUXU4VT9oEwnHjc86D9pcQtsrARfj",
  "key35": "dTenTQc75jPkEkH6XE5PNo3SuZ8Wvaf5DPNWUyWHAxV2ispMDYKU3697ivfEymKf9idyToUuEM7Nw1qSuQwDkTa",
  "key36": "HZh5TSY97f5VtqBzkEzxzgTksXHHwbEyvXjKyC5v4WhsFXJxFqjD3xWELAeDxHufGzU2GDz5MtHEF4pmt6ab6hd",
  "key37": "34mWzxg5ZPjvYyzTfcu1Lf6gB6RNBxkwp2NccYPpeKMoMAgyJdx8PBorGbAg3rL3jQ5yGE3ypu4yC3sXMSakXv7N"
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
