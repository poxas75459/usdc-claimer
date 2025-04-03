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
    "5rAkqu8sEyMTdJUC6zJ6zwZWbs4L8gofQyBvNqJEUkvkADWiLDiSCHFRK2FVQvM4Hdvf4MNbWDbDRL9RbxhmL9Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LkDkwR2wxmJryTAwtbiGwXYENwfCkSQapvpjUcb8nwmMejKqD5SZ1YbFrF29Q7SG2tqrtXg98XhE889D4wfyLtY",
  "key1": "t9eDNistVReads7eav5m3GjEaVkZAqoAoQ3tqstSeEWTx4w4v2wLgP2yRdrecBxLLtHt2ikQsPVWgemfjXA5M9C",
  "key2": "4RniC3H3rwHyt5R1YhChWh24cbPH19ouUQ9SzVoYmh7xhi9F5iPJtWBEeR4V2rYMyY53qtkhuhxiU7KRisX12oYA",
  "key3": "2as6M67PpsmEibu7kAnuNCZshveVuD3DsoPS2oAe17c2Tzm8YtUxy3VFhfmij3vazdykbAHJRyP94TYddNbMhKAB",
  "key4": "GjzQ8Y86eTpsiJ4yEpemRikXhQfs54xWQDgnWUjB4StbWrCxkwtHz2V8FNwnFJKFVdL8kHcXkQo2uAbeJTuFCcn",
  "key5": "5JxiY3FtuHNmwvggSzzvUhdSpiGt2cdaNV2TdnjrmfUmh6XYza7XBfxtFSgJGmRwH6jSFGXvYpVxUHk3pczVniKT",
  "key6": "24R2QS7sa8aPrfusJuLs2yac1xrCHQGv99gAKnG3cjHXgT8CNcx8QfeDU7Hck7n47YvPp1FYGeeJoVYcmP45a789",
  "key7": "4xUwqx3XZq6xvGkDH6R4Ynbwys7hNsPoFhne6NU3y9CQeVHqD353TKZ2p7F22HJrJnCQonbmTuHWPkqfDBn72ygM",
  "key8": "5iyRHw2uPjgN94MfoxNNkkUoaS8eJK4rVhKXuaRFRBpXH3a9Pzy9upkoGhxqzLAFsNjCcPvuKwkJ64TMkz9Z6Giz",
  "key9": "CsCbfhJDMFU2wNNjUdPjQcV8v6Vv3os4fZaCRESWbW2tBczMSATAC96it2FEZybfXK3fute5ntoJvd8cXdERhA7",
  "key10": "48hvX3PJjoHwAvjXtSYifMh9APLGRujSN38vAmUXJdwx7xXiWeQu6TFskx9qjr5zzCuwbF42xJW2SYCJ6QUq4Azr",
  "key11": "2cTptB3PF5vW2XhxVASQBWEVdTmY3b2tYGkgTamUJaDD9QXRmBXSJjjjMxsd786ZZPTP7qkGLbmbVrfDxYppPZ7T",
  "key12": "3FkasGdRKemnnhZNKf3dZ6k7igwcHz3xwKxwuB2VVGNRP4ZAznGCgetDLh3zZk2g8AitqDM9XwfuFZptCTYJd41V",
  "key13": "48KPLhM5WHiRqVauk8wrrNnX51ZzgCC8qvFMyocmETz4LoBrfTKZiKm2iAhUQ4XokkdM8LVV8Wtap8t4p4SqZUeW",
  "key14": "5DNquJzNFmVRrSuRJszFkT21Niv7TMEkijnDM8XZJxFiEHgyDypt1TUX2uPyigHuK15ByfwWpPRkjvVGTWPS1yrz",
  "key15": "2df6A2x25wnUzRqGA93iZXR6PdjwwgpYtFGQsZyxE8x6AnvR3V7NyeYeaMwF5uUyt6eEHZyMs1jfWwb5EdrMWDuo",
  "key16": "53EhNexLKXejkMVTFpdbg5yufENoFY8dhfpvYELuQvqpEXe8Qs7VGz3rggRxAqDo8hPH6GoWcVa7JTUuA1x7DPq8",
  "key17": "46wzU5X8rdZCdW4JuGq1ZNZK7i6wf6vdeU5VzGLvbQqrs8gBHVAsspJZitm2qz1Wrg7hi32DEXykgcunymozYj1F",
  "key18": "4gS3Yh6gTfTw4op971oma5AVkiSPYXL86wws4cE4Mu9cZkwSJ9XZu4dTbbqVZneZ8JtNkSXsLzsgzvUgTdmGxnCZ",
  "key19": "2zawLzSnMfMhUtxu1VzpSu8wZYQ44SDBAC5yxzGsJP4fxhLSuUZcdtgCVpkEd4nokkZV8gpxkxxbrHbTcUoDZwrT",
  "key20": "KWn1cGRZ4cu4RZ6adpu3jbeXNouwck7GZdS48XbQHmvtD4p6rudiU7o4cw3V75ydkSV3GbP5TZQxRrC6BzqJmZW",
  "key21": "32KKPxTPCw5iMqEUFSb8wQnkxRrE7wkqRoLFerTkpqgvGSQsYFGgSNvwHiZFjYk19W6f2YWg7E86AKtEbr3u846x",
  "key22": "4o1V2mPmGemv46XrBxwprficMphKLL5dok3ZBNZY63VDtgdvJVcc7rTsatZpXSkgkrg9DKb8quWjkmMUyVdJLn7X",
  "key23": "593HCAkcSsrWpNqWMi1NxHh3B836mgJk8rJZgNkTm3t4QqAXcXNd2zGWZu9t4iT4tMrP5JZ9q8q3EuTjxeoRmcZJ",
  "key24": "hfLeRD5QmGCM1Ft1Q7SJCDjm1u36kwieuMWqd3XR941gGBuQp86pXpQZQfEku788wEihzrqukt4yM1hevtYFqUL",
  "key25": "3HdDq3U1CGSK2qHG6yGKWefWLzuDAhbwrUn9mbhXU3eiBFvSguBowru4t45CCNvh8CZT5WkttZ6zrdVkeUGogNAi",
  "key26": "2QnCLX5gnT6riApGxK8q5h6qVK34U5cyVtuJX4WE23SpTVfWZ5taGwTszNZzf11yxWqDs5GKyAQsmtQRwa6TqBGR",
  "key27": "WCRcgu6uT2W6qtzBZnNCtWW5edsw7w7YvLupXTADYhJECui9p63ercS88YzaLREiurzxDyiALpuK6DHda4vQK1S",
  "key28": "5jm5HVJeavHuRL1XS9KTvXG8WxbKhApTXtFz43vgyKisNH2hGKeYQtGyaq3VnZVkH5738d5fLTB1vwGrRcckcBfv",
  "key29": "oAwG12nWwvGhnBri4Z3BFvTzeNkxoQRidUGmgDbfPEbLerZerCTaV6aFeVzG4zdb5S5DJvW6Jvm7x12HnMVBVG8",
  "key30": "4xNzWs9ZdjZNPUYryJeAmpoyJE6pfooQGyYTwBZNivufxp3dGpu548nCUm16gphtgURZphEtzvzNghPQi2jj29Z1",
  "key31": "5LRHfr9YkCfvqcg8z24w254RHuLNePAeJsgCb9AZZRyPKgQ1i9Y6Zjo4ACw76huZ5Q6gFwKJVfunKoeMuL4Yvqa5",
  "key32": "4TbbEiQ3DefoaE1N382wUvNX8SrWDZJ9nYn6XqsEJWkDsHt7iThYxzL6UCwhSMmg5kKrDDrNUHkBkzdNLYLLG5TQ",
  "key33": "35JVqu8WckJXg6zQyD7n3TaPX5R5aKuiaZJ1wNCWMVEy3EDeDy7xs7Y1WFWUZGkTSVn76AU98u5UC8PbPEJjQWq7",
  "key34": "3shQEq1dqN3KzchXP1Zh8iyZLDNwjNai31weqzeGeyabvWZoSGExuZmFH812aaS4WNZdrHGZrVfUurSfv2AHBXb2"
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
