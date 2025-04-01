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
    "58RoYgdhGLsB59jtSCh8UkVLv6S5bhKVVU1KzB8TnWqMRTqyoaTJPrhFdV26mbo88fRaKNvB6eUD4N9m9rEod9mF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HugSndBuzxvyZyY5xv2xby1X8uDugP1rbLTa4J5VTMU3KZUw3N8Mixv1GAnrSRZDu9ZC7aFBV3BE42dujBHTddp",
  "key1": "2NU7GWrYTbJu6jKxFLBBECJAChyT3yFcMTkNT8R5myjCd7ivEi89eNEkeDkizcXBa4EVNw2TePvFr62ubLtYtuNw",
  "key2": "5tKswSYvGKrwqKJevAnamMBCyJmb1Vvs6htgJSCoDbMkuVDMtvXfVeF14paL9mUP9nVUEFfbesaRaLpqHHqQee9G",
  "key3": "45Paw2SPHXNejBiLPD69Wh5X3Jo7dDbYGzoQMq9y4MCfYTvnSVTjUm6dTeaW7FBEXSWNDr3oDHVMhVkvAfyvSmcR",
  "key4": "53a5872EvWpvKTqZ6X4pDeZG5ZwAvvbtRLjLAwSNNgCURFeeN2D1JbyiycVeVxPYcXj6qTP8k2nv1ggcfK8tKxft",
  "key5": "Xwt5hAWaF1ZEaUEruvFaQJpK9dRyyYw2QKLuvma8bzLJsTrKkRXaoF1AWBsE7D4voqcMFMNmfKtupxevDgKiFqp",
  "key6": "3htaV9hg587kToUNwBPgJhGGsfT4DRmGgksjLdubsDxevtkRrET5pRzFArEB2SCMYjoPnCkiyRDijkQHxu91D9aX",
  "key7": "2zmh64jyPNPPWNhUSzLX8UtVpMWx2SjG6w8vyK7w2kDJT296JbmpGsDzarEFHEiPvJNgdow57S5CVPGUdScd6Sr8",
  "key8": "66Kk1YgDFbZZNgAJMWVNmkYyUeCbV3E67dVMZCvcUx8zgXuDMkwX56dw3syAdKuXRGiKSqMfHT2Cww2aggUaapHU",
  "key9": "2cLQdh7CiLs9Gy3nuZCFEhad3UcqwjWHBDBQRd1uoAJ4ydbt2DQrNtMcG5ss8ter2uUWtL51tKAn7FneXbC3Xw6Z",
  "key10": "3pNPRSggTJv34TJTtwVjQuzWtCycu8bfv5Sur5Pvus2AqpcUMWRMmVhefbDzJzJnS1emYvBEViuGZ8ZVyAVMX7jR",
  "key11": "3SCeydFJXV7qsrkdXqVLghRWri59qhQFcNLn5vqfZSTyywZgT6CqU5R6RKvrn1H7RACr33XUkMEYWqcaL9LpWFhC",
  "key12": "2VciiAop2LyQnmW5ths4UC9CMcgKsb398wK3kMhskhVFJSwz4bsxJkveDWKbF3bwoKvXqhdjnrd3ooLHRKv3LB5o",
  "key13": "4y7nAZsDGNDF4pqnVruD4byHYconA38u5vysn7DFsK8VmmwiZsAJKxaHxhEU2bmq6GdLATpDEwyZvbtZnTQHQaAX",
  "key14": "2UrT2iz8gq11iefLnYfwjWxD7H29ewxESD9tJLq1VjcjNWJkov4MEi6dwmuDtAw99qrCVtAKAevoECNmqBwE5ox6",
  "key15": "3ax18hMdMqdvx5kFXycPF1QR1T2gpUjVGwooBXxdggn1UKGcrfnuTAoqeZyP4z6G8dSr4j9saB2cZu1rRUwZcS4T",
  "key16": "4e8ZVF2aQh2yLgNaL4xUToyMGox2GPwGXPkAFUitSyA4y6tSkzfHoSmJZ5nijexxcQsos9DqgazLtJhc8NyYEbnb",
  "key17": "2jvs1dEi9UmojxJskgKJbbzbVjmCMoVFBZipkJVsuELthgYJ3DZvWLMmXY1iewCr2gTynPWcRCKRrBdboN3M1BCH",
  "key18": "421rFqp55nR1TZ2Vy2Fe5Kcfs4pGpjdLPFt68Xy9ti3zu62pHcrH3MfbQE3EcJoCKuHi3M9edGX5NjuXzttF1zH1",
  "key19": "2PXidub3Rm4VkFVUJZUwFVHHqetEUwiwSDGVXBbctagkU2njNeKKDcnvMYdyFG2JRWA2BGVuVZ2juA6WxPzQUHHo",
  "key20": "4GAe4GfNuVaEw3xaB1cRyXh2ureWQcWb6bAB1zLV6a3dmZfZCQb8VDCcULG7HGW2eWC1vAMJgYHchMCkmP3gB6yo",
  "key21": "3GkJEude5F2bnUUqLDWutMFgKJdcZtmQzPLeCsZY6Ei9yCXubZAcAo2hokEFMskHxX3CacqMdgEdK2DKGYp1uf2c",
  "key22": "ca3ncFeo5e8jdwnYF3iuDkaQQRdvdKSFaiVZds7EzD4umTNbu1hLb4xPBpS3J922DFhJcWsy1r4iRM7hbo5bfV7",
  "key23": "RAAXhAc7jjffBYpAFDqGdehZwrGR7GVs5gD5qWDdM4DZ9tHhZdae6Y4UwVpL3A4aTfYxHKnxLek5D9fK6LQaYmw",
  "key24": "58we9vcFc3DJYgTssVsmbkLW5A8bqQZEppWzCcD3fsrD3zp6oovGviNwABxRHsj47S1nzwFvKhmY18NQgxNReYN4",
  "key25": "4BkaKjFq5zUoih9St27WHpkBguq5CVQUoAmbhAmNCTWp98R5QsrWNAFELecSMLWB4kXuUEfy6hTKjYzXLbicqX7q",
  "key26": "3gxP4B8SqWNYsLubdupekwgxpYW4x6DDXajCkf9qUg2yowy67ZnxDs1Tmbpas1g29XnAxLW8hQs9J4RHnke5rVun",
  "key27": "4AgSajMvUSdLJj5Zp11M2pLrJGNmY1B8aTVq5UT4qsVte2CFrXgBYYb7MbwU2SUgmcr4A9uWt1mQqRB6rq9Hesgx",
  "key28": "3QbNAghLHczrgNjMTpct8FeL6Pyz9c9dY2xmKv9G495uamQ66A6WtkKU86uCRbciBJUsDo3XZJLWjm4gDVF8VXZ4",
  "key29": "5eu3dLFHi6zm8WvrP8xAUxrcMkfRDbXh9LSm66adTtcaR31W4pNTUt2g8Gws3zgbE6wgVMWMHQ83YCTUFLmSeFf9",
  "key30": "4mjCjTHHAWkeBJgLFHxdBeZBCTM3FeQuTHm8UzkEUVhTksTqK6ybwq5LfsDeuqP2TytdWxM1GpBe4vUoK72AaD13",
  "key31": "45Em6ccz4nGR83bc6SCLVpTSoXRrPpBBTP5jDnDv99kDUrsqd9LdSsqK8ZuBQzAoMcKJVgY5gGj1KcSaj9VwxL1W",
  "key32": "2gygS9ezemqNki722wNhPjV6ZxXsdMfXVgkpC1rtXM2ofJkihfoUkHdM7PMjAN6d5yPbA4TyTiKajjwsGowUnyuF",
  "key33": "3mF3TPCPphCd3nFEj9EN7RfQXmbdDTTEDXG3P5Vxp68Ek8Ch5R7fCkVwxXWiT7H19B9y3DbZUhRqFwLvdYdi99SN",
  "key34": "3UZ4XnDMDEwZEFZ3XNkJB1JzeXDmKYsCsStcTbcmyhi8oBWWaw6n6791u4VFzimn1BsGMZujJaLKg4MsFzkTRF3g",
  "key35": "Svy9hKMqyGwnobZ5MQSuyFUH3V3iViuxPrrHAkV67fYNVodNxkYqx2kNksAw9UXuCi56TeFWVbCCYN1HFMcfJeX",
  "key36": "gKVrM57FdwrGPwuEy8B1g2cQshdGhuYns5NTqT8rF7jQZn7AMNq5bYiByh5GWDmF3LM6o9WgtmhRy7hAQMTab1M",
  "key37": "37nzoHcZ34okJuKxUrny1v8NbuxN78wuWKZQ5gvuki6YkquLvab9bfd17oArwnnjyavsgGR9kWfyF74ppYZtHnwc",
  "key38": "2YQaxk7UnZPEaco3k7HTbJvQdoKFqzbghbkwywrttb4EiXQ5eWeVB6o94ajw2pHXWZ6RQJGzRsDbqXxXs2judhtx",
  "key39": "3pHDqeNmhPKD42KbkNmr3FaAXQLJwuxnELWmZmCZHmCZ59haPPnNXdcyAYzDncCxkLdMN57ZJVYvGVr3rKducqE1",
  "key40": "41DgEfsSS2vX96VMwf6aTPuCLmoabJPSqf3HR7BYkQTkgYNDW2vypmAyGxAid78os9NJKDfXUiKhq5ZSSrGCFNLU",
  "key41": "3pk5XEjyL4t5F6x28ypjFdrQBZBW4YccPUMaDv86zDMSzKcuNvHjhVioVJDnZ2UDdr8A27jcfBx3akCeGhi444Wf",
  "key42": "4qnsv7E6Nw5ARpcSVsBCMQoKdcpVY55vaJ1ik1XBenoBuZY2DDimGdyRf5YZxzb1tBbeDQu5sXWkvqCPGpD32yux"
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
