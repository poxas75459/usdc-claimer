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
    "2nBnwZoCydTs8Cfjk36GM8G6xE7xzVtgA5RmKrE1V1Trbu8NKELDzs836rBg9KdhYCstrQd8exjToghUP6DmM52H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zw68uXazYD76bGE69YENNAXkuX4g7BAMUR1EgLYM52AeQu8kGAayA3Kq7cNVr2fmBaD75UWf2p9noE4TXtjzZHx",
  "key1": "3y2t5m6VaojnGRsxh2Px9JRU8KY3Y3HQqT9D4oE7RkoefGxQMmbzby6bxRMDpjVEAemrsY4EnuemmyDqNfvQqB1P",
  "key2": "5umFfgT6KK8YURiLq776hqiz6aojevoBWC4LZdWeZk9AXPVe4LMXqD9ERGTEBrmcEMGS1MEqUrWEh9BLqgDdtFJ5",
  "key3": "54C6NXq6YNPGf7T2MtPUDQskgyhg7uFox1DLBLwotSR6PCdkKLUXU4bH6t1fnY81dRJvxd5uLP94umSNCKBW8qax",
  "key4": "2edXzGW8JA5DUFFJTWsV8K3Ra2iFBDWWmNHoyTu8SdrKqf1H6yQMXHaBqTrkwaJ2Jc5khmrQ2M8R22vwyu27m5YB",
  "key5": "4Nz1xUWBRFgb3X1z2amR1RzxGeNCcGxneApD8fQeE8WdJ45iPm81rapPYhK7A5fGLRWeM5KTo3yRD6hwnLjfBjEh",
  "key6": "AsSPohMstbVTFmmoEUkD3cbcUF2Fxqb1yZero3jaJEpjcAKS3fEMYA74ywcJ39K9o87mq5PjmcGPfFh9UsodAX7",
  "key7": "4jCJPEXFgx6MNE2YsbUXcAgX31RsNfVkKvRkEHjiKS5yAmPJ8BLoJfuKbXSz86p3M3c7M3vVKQEAHqSTEwjsnqw2",
  "key8": "5tHAWus5ZqfSQb73ujh6cWNun5WXqxgAkbxscbFEvzfuagXcG91ZK4iRiDbaBQwijBe7i4gqVuHUw5gCtzJCmVn5",
  "key9": "3aMJjbP1qQtCypftCFXASqK1BRQqZ1Ec1Z63KKQkvdpdCArdXUBmj6z5VmvC9sw9RTBGswwTu6Y3no8gHegKBfqa",
  "key10": "59k3RNbmsJmSh1oNKiFPSg3WAbmhEhvTvHBnsV9kEcEZqDRc38XtJL3YArciNHcPjpRbnsNFCyo7DoTjmq1kofLu",
  "key11": "4FMPrgK8oy4tKTTTComzEbD7cFnQY1fsP6shHY1rAfbA64krvtXHGAntyam3spKV94bijGQcbn2PJ17Fb6RuErQD",
  "key12": "2XMSkRCgdbjsvENJF4PjBupsnmgLYp5zbiw1zbzuzhfo8dQgXajCPgxUkHSWWAqsNHjNHYQc5AnKXjbLoxDemNRV",
  "key13": "3UTRFgqz2WH5N7Vk8SpVTaBKbGFnAhkoMUWnWF238Lw7MWde7nhBzuAedvL1eKxRfRCiDLxSoQ7aNJ5qgvUjvgtK",
  "key14": "471HSM9fnji497Rnkrxx7rMjEkZK5C9UMqHCMQWsL9Zcv3pY5RtqA3Vzeuqr3uFs1VYKDBCF2d3Mbm1iTy2XXtcw",
  "key15": "3bvB7f3dWeegkYCaNapMjLP5nNsCx1wWFipyvAAYaf8s5CMdpsPCaCFKdcicTQfzquhnzhaEZnFGMejy4a5Dbzk7",
  "key16": "3PE9VYyEKyhay8SuoZmMuqDsEmfgMqok6QPHxYmQajNBz9JcwEVMi4MgyigzCRE5gBLmpQTqJjg6imopNeMGsFhf",
  "key17": "RSGWRSPkVR6NpWr7mEfJjpngChPZggYGc2jhXzFCaKScxjYt2oXPB3uLU1UQXwLKBJBuvXv7HibgXJZh5byRNQr",
  "key18": "5eZRfw9jspZu3WpaWGNgFMo88VvW6MtiPgM7D2bPTsWWjJiuX1ziVgfAsDkf3on63514ktZwn71HQkuqnzgwyfUa",
  "key19": "2A8XAqYmHBmG2prg23TQ1VnZJMCSEZjoXggRZyPXQsff5Q9fim7KcDkLY812xaDaMnE6BWf1orTi25ZygwQ8tPz2",
  "key20": "5YjEi1uw327aShwX3Cma2K7UHqhCDvLLUMwkLuK8cih3wpeLe5GVeRf2r58x8meegEZHbbKr9VKzPKsR4Fw4tcVj",
  "key21": "4nvA5vp5377LjCrfjU7c5bPeN1NxuVoZYyDfdHkvbeGWVpivyiMTH38fvYYKZdKJ2g6HL1jaVcqaaQcRkE1dDJhb",
  "key22": "3nZoU1ebVLqtNrF3aiDtTkks2tQssNxFDwVC5iq4jiYtuPQfxoy1wdjaSyKF9CjLFzUC7XnTrUvEanxqKSqboxyu",
  "key23": "4Ewp5XVNqXcZFeh1NDaVGCpbibUgLuXUk3Efsa96D6CgMAqmsFLC5E6DL99xFD1prT1uTPzizyYiaDShRMUHg9F4",
  "key24": "4iVhXmVstWUk6B8X1unBhkMfePXnWrAUrcXu8ePe97U6pX2k9MfknQi2rQuTRjDC3ty5PgqSst6rjDaZKMsBbpGR",
  "key25": "3gZ7zSHvervKSVrM5uFpzbZW8rfhBk3YYfWeqNxEkeVajbQQTGVxFfJ3YDpEwLPj8jBVeE83HU18zgk3hwphiHid",
  "key26": "3ALaTZkjB6tZJCAmNQfSjD1KyWNXZypbFcc5NmfdkScEfPctmvxSoN9eLDjSMwyxz51tczNrVKojHNq9bhs9Z1nq",
  "key27": "5TP8j37pc4SkDr6tbqLrbyE88rzKVA3AvcPzoGvVtZzEXrfEE2hdFkizcgYjRn7r5jLmFiPn4bxw1C9zeX5VCK8Q",
  "key28": "J7pGLF49cGF2CxWVC9Ldr9ktFAXbF7t86rhYvAwmWD1DwQX2LM8Z1tAr3SCQjx1qhsLpkg1tWw6bWfA5iHtkJ7k",
  "key29": "7yyezeDreApKmP2PhBgPZysuXpXM5zZtf8YSCV5LenEQRku3ytu2d7Fi3d1E8x9XiGuvvy6hidXBMNzwHaeYAzP",
  "key30": "2NLhdAxi8jXzFKQ2V8HUfQFFRsaSg881H4W4zWirPx136qbYBiRATgX7LWRvro4RC5NdratAY547gdGwB2ZaEj1E",
  "key31": "2Dk3TWxDpqJzbhhXoMXbXDjA2Z1R6BuojgyfgYGGmLEQU2ijvQRqoubZFcS7uKGFK7HJt5TxvRyc1JMqgUAXqziw",
  "key32": "5uDUcvhmzHKDaEsAZbqhXFskczWPeia9GDZvG39A9EEejbd1fDZCfaxmQ96KC4EbYfabrQKfTRdNwWKJ1tQbyQmr",
  "key33": "4Uw5FLCJjLyNTiizgJey4TJFLXH8r7LSTFzbETTYS1fbt9eYP8jqFT9xojcb35bkiw78K3B1q1khKmnfe4LWQsAd",
  "key34": "51uSqg9snB1PPaW4uBpDM9Ug8cE8CKoXVGzVL7WukN2BU3WkQo4pskCJMa9srac1fMhbvhwr5sZkRZo8TRpESfvW",
  "key35": "smsR5woiq5jieLoTFwiNsMK1PpyGrXep16W5xB3dzYx8295RPa4gc5W2fwb3YJ2fi37VJ5rDc9nswwncturpgRL",
  "key36": "4oX3kdr39JxCqAuoQaiyGaR6MusbpgAy1Ce5cwQaz45VNcirYR4DDh6QHSKGTraVfsAXRVvPWFrT1yd4bz8mbqVP",
  "key37": "3VNoXiAKMWyqVYnhwdnPWn2r6CUqvtUTocrrWqvodYiudA4fuNQKHoygvJhJ4JQevQ7V5wYDdwC7YKcMfCALLdsX",
  "key38": "i4nELbJKpdCnhPmfn9RsYZzssbyFnQ3MdG96AEA7pxy9UvtXxz1CesbGMDg6dw98ZTLmfLsGV5BkD71jFZ4Xeup"
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
