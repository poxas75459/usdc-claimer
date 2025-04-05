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
    "5pu8rsBU1FP2SaXLcqtimSZBQbctf1rZYpvtZykpWDC2bbwtfNBP8pTgZEgeza9ga5c91D8DVktAxc5sCu4rf3fF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vadNSM2i7xKY7eAJeNpZgMWQcPisfw3ZYQEmYZBgYGxedADRtN7nbA8jCHR3WhxXqDLTjQ1V1ZJy94Xb68T1ey3",
  "key1": "21TDf4bAgruwTJ3JbEo5ebjy68mHPZpe7mz357EUZrQDJKdZ5rmuAVgEjzWPs7uih4pK2e4Yd3fFtWkvYttqYrxu",
  "key2": "5q9WA5yuzLZLrbBky4pGjqrmKR89e8b5bMLm9wXrhybC7hqrRK78h6u2mtgHBkC4xUTzu4UDeAzFa9eZ6zWvt4bW",
  "key3": "5hcG494SZQRfWjtGzasavUz5YUbqEJWUvhUqtkAs9oRdydfWaDSuL1tv97AMaH6ErQ1vBu298JYDmzAT5oozHZ3K",
  "key4": "3U7C2En4BhefcA6GvzWMY3FzaXjpNPDFJQCkEPsYJD2mF1B8EJTusxQyuLYUw9qC7LbeR3spZJD4v1C4WNSb1dox",
  "key5": "2S7XZz1Mxe49Wr9R4W73U1435aZGxsycuX3prvr2MNVLXUnMooU7nqFwCg1QHNX6F4vq9Z3YvLNtEPjqGCyD8sAH",
  "key6": "24ZpEZ3FadqyYpdmJ8Hav8L4Dj4zQ5zmABwyMekDs29QggnjhFb5ttagcRdDKEnnxxAJay8D9qrh9tyiG3AzycBH",
  "key7": "3GwfLLg5aeukMJMN1EV3qbntn1yZVH5BWN81NWt2eAXFwGF2LcCi5HortzPfmNvKzg7NKbdgEytQNywY8Pmby9vi",
  "key8": "5BqZ6iLfmnk6FfuDcxbySa9i275oqxSmqF1RvWXeLdf8td2jAmL31ZcySFxWMx2Z2H7Syb5jPa6g82DRiZ4C6zet",
  "key9": "2tzXRsCja8TtDmduh8o3E9Un4PxJLu5wLQdtNYygUy4QRqAQtQyxaGRMkyveTtMmsUrQM5vkYgVQDEbaskBBi4Ht",
  "key10": "3Eqzz3iKR4RW36QP1LZwMHyMLk6hq8CJUgQ2Xfu958rbYRcmfscbrvVaE9LkdfvA4sPb2hRKrHdDGUzfw9neaBRx",
  "key11": "MHfmjcubgvgZ6rze2iz1tAKi5Hqu4JK3kSPTpHniKqwmCdNvokP6pYqu1gResdysYSa6pSLm8wnV7ebo6oAdpyi",
  "key12": "4JiirRguf9qYR2FthWRGbBaHQP6npZPTwhFWJyZejynb1J8ChCeLFSsKNQRc5Uvg3GTZCiZjH5DV3fN5zL9XXRxc",
  "key13": "49pBDPsREypRKBs2tMkFYy1ymZLU9MoXQTPQdTw6Jk1tJpFrGcMT9jzfRegiAV1NDWFbFzHiFS7qcqNZrJerQt4B",
  "key14": "phhC3QJLbH3nypm3stfY5YKxmGrTs1KUDMAjL8UR84oDFVzAsiAaVEdvQyPWZRT98sRa1VvWgWnfm4cY52waD7p",
  "key15": "QuRhKHFmTaJGWtPg44uRghxXhouTKvSLxCPB7Z4fRoaQoTRyZajfUcZRAzXQzLpKs8vzyky38HWNXa77UBKm7Sj",
  "key16": "oCkvMmBmqdcgrkvhdE4tt18Q7yiqh9hAirucRMHFFxwxGsAcMaxqpqVsjSu6W3S2MUZH9CLbUmDrfrT3hyPWvX6",
  "key17": "5FKfDqBdqqZYqtGyGN52FaF8itGRx2btfh5AXk1jpMnvRDYVisqFZPyXAiCVjyRyTL6qLR5jxrVwEjsKDHhcxs8",
  "key18": "4mFieo5dwkWfqyaGNgT6PydvmVVxvHmYeYY97VA9A9KsNAdSnT7WjXVDBwm3nNEa1ur6aL3x3XKgcCJV4J6AvqbJ",
  "key19": "5zSRyz6QtpmKUM7LJEsU54TS3EZSFW3VdN4yxBtTU6wozcNsH6H8v1Y9yuL3nPPhJcEgJZo6CBhjsuKW3icZtR9w",
  "key20": "xAiqVRC6uGN9Qd2bAW1zpoqVqDXuEXWChxGNr6coqKhrqPgeZcA1XPNcBiRWvRWanpWvevJyvo1qhZDA5wGGAHs",
  "key21": "4M9PLNXf1zqdc3E23nMkv1VLHaZPWcarJ5NCLjajMgg4E9PD3sNMn96WtKhe73MNWsjf2ypW1GrChBTqK4ccEQtT",
  "key22": "NBJZtcmUXMbBL92wq2k5rKcnnmSpXWytegMS3vALTYyrM5dUafiHskqtocuAyM92Cf3ohXZ3AQivxGTYgy4dMaY",
  "key23": "2xuhhUJTSAAyxJkYEGhuFdreQZ9vFQxCwucPJ5WD2DTc4tZCn857ExddXut4PsKS1JFsrakMw26iuLUYhDfeuVHd",
  "key24": "2tAdsrgMvPakQDAXsFFb5FYgRASmJwDUmNeVRxx3QJiTJxtFF9kbFXbLgZzWcFKC1i7vvzCw9p52JcE6tzzZdsN2",
  "key25": "5uvzFJERpKn6oGesptY7nMoMErzYnrySyxPe8Ekzg5XoRnN89Wk6fJsE4RCtgqW85Uzm5x1jcM4wprWrwP8ECg7v",
  "key26": "4Vg75cf6v6bJodFtn5pxSFce886mhLJN51atq5CP2jwNGaDa8eNCMR7sdf356M7h3687WSaBUK2k3LToBgSR4G4s",
  "key27": "zL8zPkBNuv8bdgE1tsnix6Px1ZUKRnNVdzoGRnDKRNvBDu3g8fCnf4bFDXdmaWHmTJ2PkrBPQr1BnaRUQTf84Qx",
  "key28": "2pbxxs5V6iCvcfn2BptaAu7M5tLxnvMsahqwa6SoPvsXZzQ9NLezuoZSER5ggMiQfxwrruJBuWxqMSAVmvYXstaB",
  "key29": "2kJ73mEdnDhccCDnDDTuy9zp9aGpHVxLJFTvy9zACT85xyuPmTTVW2h7FKMPGmfvs3usGvWwyefeV3i935hKQuhy",
  "key30": "51RkX476J6iwreWUMF2JN8RK7VFtVsDRTxNn4cW2u1ppG66ruzi2Mivj5gtdYTBqzHqGdqrnmg1QP5AuxYgRuQqL",
  "key31": "FH6bq7yrmKNgMygmtemsG5Dc2TaaqUrENETE1dbtz9dZNgXxoae5vpiZZ7Cm9LHCeXy7p7e42dMKtkk7gw9d17f",
  "key32": "VMHko8esPHD76yFZmVgzUKGM6JtHL38L9f8F2oQEmhrQnm4Q7J8XvJZVcfMXquPt17NJuf41qKnshcQK5c6QGuX",
  "key33": "62UL2gAdZdZVTJ2EnRzopbFVbUZbo4L95y8egQy5zdEnBuF6ssYagHHAjyKWN1VEe8KHYiGzqVM19d3SNVVbSJ5t",
  "key34": "5XWfX78PibDJHJJ3nSgfW3XpvdFjs57C7npZ9U53ZGGCH3hnTeSsx7f1j1PE4QFnHTggxh8f2RvxqvQW4Eh4KdXt",
  "key35": "4REtxfZ3JtHK8x2F2WJ7dDiiHKjYYGF4uQaSUPojSF5Fhg95UGFNbKsG33Jij8UEhDxYpZaMU2BbchmuNK7RhqQX",
  "key36": "3okubsxEuaDPNUg4rCf5V9TmheYbAWGLz4a6Y4cbUsGRop4LjrXbcRyBhP4aGvGN9GnjtN5v37awvEQD5dtVLuaR",
  "key37": "22PG6djrdguhYqzYJvxWWLLWP3fpTydTseBVoFmgfRfWeezZdFbXL8kfHrfMy9ogERftr7o8MwA95ZQfWxRTTZYf",
  "key38": "4YshX3htaLUvHJvQivhp1H6sAf3fckSTVgnNdDRN3RBVHSFbUCSWi9qU6HxMQadvKJuDCvRnsBqkXFtQGAUcPLn6",
  "key39": "5bjXbPiPHDaN7kPe4P78ed8Chc1gFWgYoqtWvsh7aagrfYbgafyMYCrVSTMMWADa48NKQoiYedV3LwGYPssdJfg8"
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
