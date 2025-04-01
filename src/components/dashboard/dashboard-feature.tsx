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
    "mZTKBj19SgXKqFn4g7U1upaXWbZBkrKUwPoJMhUrGTme4K4Rzr9eJBRSrgcW89PeUwUoiqixoiE1Xn2D2iSbfii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXsVaXzYWcHBDhSKFrHXmfYYYTvf7VNhbzqsUqeQB3cchHhBtihSGFELNVyxM6piFeSpdHzdzk2Z16gP6MHoCBs",
  "key1": "4N9VyTcaFRQAXzywSsGNg9ppfWSQfNqWPzXMn34JVGbXVN2jSEm87xERFPqzLfK6DfCZM3hwjxzJVvFceZ6RWoJr",
  "key2": "HVTpdMq4NvfSeqmJ72cCzxH5rTq46CRue5kNgxSWcjtmX6BJ82yujs7mVgXJ5tbibgeGcm74ZxVRk4SJGzGEopo",
  "key3": "3cbF6BngtSYY4fkMjhnr2miF5doCnkxJV3JYEShA9sBZeyvJkMvmox5YmeWDh4vwkkR7X65AXf8ssqhYZ6FyjuBT",
  "key4": "3LmMtYKx1vWckPe9QhB1KMd235RMrB9esKujdqSdcRR6j2JaoNAoXvo9fKGkaQobtrAqX6x3p3ocDmHdaJfMC5WF",
  "key5": "5vsGe8uEVJxnFgNjcVii7rwuKsvCEFMZzgY1n1Zdm2TWRgesoqAT4DoFEc6wDHjGF8HXqLWaFJ2nvF8FEkS3Yv3x",
  "key6": "23a5nYTSaYKo6vp4qhE1yRL78LnLmttpn2igYdBzqTYrrNaUFWjeyLRW3yf17UU5LPF8JNNbKQQB8ivRCJR1tLfo",
  "key7": "2JqEQsBH2avSk8zQBLvRNgMbhzmM9Q7Lg6xMrWGBSzqNwSmt8rPPP1X4EAbX9Kof6rTdVRxT83ZKm6nrhYQwGE7j",
  "key8": "37Nq3CbW73pe4VAFRHqWdNZhkMLWtARy4arsNGiLoPL91DHPyivbQaG5QG93WUbJbC6etDhJEuStPz6PctUUXuQm",
  "key9": "58M73Nxwwin2nUQ1ggRZzZZwzzsKLwGWonWwQH6AVcra4xR49Cet6yH5iUMUNmRCnZf2ft4kPi2VRX1FCM11u2Tv",
  "key10": "2rdUC84ZDjvzjTMN4vdxyrnVP2NHr5q52x9atpuiCkHMyv9qhGQbzNdVDDDeGRnheAznUZtkfPAgSQ8YUNxT9xpJ",
  "key11": "57WTsik85va5u31oGswhR6MFZ7TW1VNbKNGimtPmuspUMnMiouudhrZp1RudAEyfcdLGidU4J4u9zmV35KhF5P2s",
  "key12": "5mp46tZXzJ1TXRMYbcrTGz1Ja4S7QQUJ4Uo7amN6PghdvmLVPatWCT9e2446hVqaxzMQNLzSLHo5yJQjV8kfsqyJ",
  "key13": "5s1oYm5iNy5FpxtpZZyoYiyNUncsTFJieRWtkfgjbi8ya8xxj8Ebuoj2gnwS6ovtJxxAqsuYUrzgT2pVoSkGnRt9",
  "key14": "VyMWAThVqa6gwNM9yLjk7q4SVNZMX1KgdoD5x2ss2bs68XSUEVRcUjbqYPMdXzduNQNz9uzh67d9PzrAPHdVpHf",
  "key15": "62KyUFMX4Df8axP6YvyPLRRLVFfwvYFcXSZxKivdq62ViN4Eevw1UEFn7JWnNi2Mhpt1JE6GB6QEdUzm4qpMC54V",
  "key16": "3tLGVo7YTHNuWqkcJCdVS1Bwm9nx8tK4DzQofqPpCw3dndxpifBZQnv64pxMmXeCU7kz7AGBacZQKxjAysvtQNrY",
  "key17": "2A79CRSEF4SEVZ5mB4caXKVttJzmRXs1QPm6hTV3yFMg9SeXeij2kGSqM32rD3GYLK1DxbUV58i376JG2UHpeDeY",
  "key18": "5rzPr4o8U1hK54qjU7yc3LhM8zob18GufHpjrDCyGt5ATgbmCqQ2vgtzCFrUzUfPAxzxUahFf1ouE83tAAo1xPcm",
  "key19": "2PGA7DwWEp3ZZtinWqjxbrt4KqpnAfeWmHkiCJpZ59ZXJzmABfN8bmNntbDZhxcPtPjMzRQgXfYJt9df165w3zpa",
  "key20": "2AMi8nTyQ1pD6nBngZRFLh6GQpVu9aypMBPuUZBpQ8BuknC6MEARMF8aeQ5QrJbkULhfSWvTMsmSc88gyFoXiHkb",
  "key21": "KfoWyPfDNvViDitMu8AtfYkEgbeE6pgtovnbpuGnRaep9q8M6p8AnfFYzbQ7oEMQVu9Nau3nSMCm5Myid5BVpeW",
  "key22": "VSAknWRDK5kdjVZkkZjcU8oJzd8UEMMSNFqXGitYYvWaPSLccjeLDquPwJANEQwusKWGFxSVx3xkRkdrvZzpSGb",
  "key23": "WAYeJmXYA8sUi3RncrsG7Lfmv7ysL89mbgEKdY38xCtQw27PhaThJe8DEeRh5hxXoBCf29KoRBKxxS91uNipkyN",
  "key24": "35DE8KvbwGxSbE2HBhn6kvVV6KX8Q8ZZyfHt6vMuwxrGg3hkHZJ68F1Dgwo2c4LYiEbj6eJYdsP5g9qnZeWeYio3",
  "key25": "3EcRyg6jvdyJLSaUGErUMXs4wNZknEU2awPznzboctjhh8BKidRZ8xHTLT6EfD7LmhXzobiNHGe5XvAsbp41g2co",
  "key26": "5SxhRMcVZ6aQuRjdjHu4SnAvym9id9qAnryuK5qfQQJFW6ucYsFw2Mzr6L5dBwQvd2uddWQZP17DVdQNP1846CBd"
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
