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
    "5Ev9ZGU2JQwnC2VG6EXpbgbAFSFVQ3sEBvbKDzUADm2kn5wxrVRmp1xbCa8QLqtsx7JfzH6nQHibbetygAXgk3E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uwZKaWdg45dXd6rbuRrZemiWA6QxfsP24yCBjrLDshCud75QNYL3mzXZn4hLHryTMjiyoczK9Gy2GCWaBtPQADR",
  "key1": "3AdcKJ1bXhSWxsYRhJ7mftNfXG5C3eN78rsih5QD9osnyxSRKeksn3HPyoShs8vZc5vg5oBpV3UJA1csuiqDQQSz",
  "key2": "4xbGWJVHmsLQxceXE6PXZyYgjqvejCo64DJg8ds5oQ6a8m7YvN8qn3eLag6CwGytXSCfYmFFVXK4zP2NPSzP32s2",
  "key3": "4oJ9PSFVGJxWGPAwh1LWEkF7ZQ6N7M1MUAb9k6eJkHZpWup3nNsT1zLBoZZ6ChwPJPdNo6hV6rHxPCztWoEjSisa",
  "key4": "5nsz6zNRsWkSX13CDosyBfsEzSW8kaHLcHumFE5ogoUABhGStGr5UmxtkJcjV9fsuh5XvNhJUYrJibYf2uavy6ce",
  "key5": "4dpRdJwozcjBisTbSL7ZM9B7vfv7vDVEXs4huSDscRmPRtkofQUypeg1gU4fZecbheeCs5SmEbhudfECzX9YewK9",
  "key6": "5nsfDKzXRT7X6CxKyB5665KVEUmJbrUQVg5KwT7ipA3fjA2hhnVDbkaxJQvaGasUKHU6HjKcPbK32wvc7cX6dAQv",
  "key7": "35iQHiPvhEkxmEAu3FF6DjkPgC7Sru4eTZcmcoExpSLYLJfm9t7nyES8FKauyRHeu8eo5PZVbsP3ywA9haEkiNF3",
  "key8": "48tWsYXnEszayJpsf9kQrs8d5o44Ys5MfX1UChb1CBCfAnLtG7Z68DKkZCpnDEcnjzPtd53d3NHY7YQRVC5D3FBt",
  "key9": "4rt6T3Tz6Xyapdi7W8585PfqXBwm1DaD9A33oeHufSREXbZHzkggHuanp336X8hciY6KnHqU6ggn1EmmeZHEpRke",
  "key10": "3vGcYGPYEjDiQWGzLNw5MPCV23qn5tkAdiw7KK89SQBQXuDxMyssY8ACdq1yV7p3KiAJ6REmCQmdDbXL8axp4o2g",
  "key11": "24gUe8v3ws6SoFSEsquPXKkqrhqS8KPb2uxsG9NUB9SMphLJEvcbXwiwCHgTkkFndZBqzkDEFtJCMkbJ4zaftesP",
  "key12": "2CiWfC28yQgCqLLG4strL2d3UjKwjNBQTHS5BVEti1qyFvpdrT7jm4dowYjPMWsRuPzWost8iZayVkkwMq6eiGFq",
  "key13": "k9HF7Rf1fFcTwbWR4xnMTiA5eHHf1FPNanfLNrY71CqQLFqQYMvDDHBkCbBuYsswcXGdNJbVe1K6yt2MGEUFJju",
  "key14": "4a1VXehz5xg3eUYWhhbVSc52oVDGeDq6nzDWLS8N8xUnd1zs5u5y6mxhuzDEG3QThGzNAshMsVrQqPyv78rbKuGT",
  "key15": "43FKVDtH4aQvv7EmVuCQ4reeFeuUKgZddGfk32ap9fq1sreaYcnMN4UMda1yixCxq5Y8jj8tyxBRZhyrutyEiAYR",
  "key16": "3X5EUbmYfuQidGeCNMDuxNFHCChrX68BzCxy3ZE8MyTNDdHagu7962jj8pr3Z1hrHEhpfSVnXPAXd35rhLRh9QmS",
  "key17": "4iz4R5bfo7tP4UKaWwsKQYtHiWLPU2fYupg5azHz46ai6iiGNE9847yb9xFZQqAwAqRrNPficc3MgVuaQDcZGNPX",
  "key18": "4QRiR9SM4naYt949bKmhEJgHBGdXtgVsDDRKjrGPNXfFTbujmcBkKc6JSNLRS2YJjizZctrMG4XVjVcZov347ihU",
  "key19": "3urK3PVqodU5rkWXGCD7TfyBbpCZGmaozmnjwBDPunz8agCYLEk9iTRrbuqE7pcoGowVLHGGMTQSDSdB7DYT7Woz",
  "key20": "ZmRJbDqunEgBNnuRNmVxZhPq323nv5JjcS1sMc7Fz4ihvsJJmpLBZ9n3HEPLeEpA1bTSp5cpHyzVkKjbPs6gAas",
  "key21": "2Y6evrR7B4Thhz4u6WFs8yDoexzQBdx9kFeofjvk5dMQx7uwJQgDfvw2zxckrgHcgMR7raD1RbZVmiNckVFVzZEY",
  "key22": "2SaqpLxE1CnrFxFi5ufuG1M5Ja5LkroY9ihvgg7Aoi6Rv6rfTAPWeDxuGcejib9ra8YeYAoHySoNfb3f9aBi23cW",
  "key23": "3KsFVU5v9NTzGjgLDPacm6DzvPxNadpJYT7gue3V474geXr9XMdx2o4KF78Q4eBSyFLZJkPDbW4mXmGAP5XgLcR1",
  "key24": "2TSA4RfBVtGp1pL8kJDvgFiPVPzu3acjCbfc2Kxr6UWRv7CM3RXXhLitm1VUF322Aug2AAV2aGJwSMYgGbWaeThK",
  "key25": "4toKntCny1Ye4GwEuhiFW6K5Jj1Vt2zLP9DdzPLsuDuwPtwpKvKVbSAfyRUasgK8bCWfRmFW8a9Kub8npqMx452g",
  "key26": "5jC3dJqu8sZbei1WVWHHnGg5ji6Lpz2EDBDzVnVcmtpJq5QWotFPSq8V1pghS7wufxDv451QKgkxvkA2gp96ngva",
  "key27": "3atxJrKgPxHUHqBTAfELegfRQa1eEeGanXcHV7e3VThSWiLN1L68TQDffmmY4QZkWXLkRLZxwt3WZ1LdyQunExuV",
  "key28": "3NobeSQ3ttgpe8tTv4MyBCUbawZ7N8suWrKdPAS1th3gVubTZDKegVKX31HyQDhcp2awoeTiiAuAFjbBbF5NBUTH",
  "key29": "4FapXtJ8DuWWQFmdFbti5ciHUHnHrS6H2CQBxSH7wkjzLkPq5whabWia6ZT4s7k2LgKndLuChJSW4BYUTpeyu865",
  "key30": "2pqih77jQGtuZttk6X4SqkHjakrKxohr5FH4JeUfiBhBxW6UnhEQnT5WYbkrxMRcqU4TpH5NHQiEtkL3vh28BgDB",
  "key31": "4YS8UxfXsF3X2sDSCSu6HKL4UbTFyryg5FXx4voKonQzD8smowTyUyecM2iHabXcSMmiKaCAjyJVGJTYTekEUEKr",
  "key32": "44Rqkn951RxmU8pWr6dsTskVS7UVdAuduk5TEuL5MVA533teaiHGMmwBFTVVEdo831Z7kD2bioSz42SnMbAtPiUr",
  "key33": "4SivmCCaFCn9hiENXAHYeqazf27Jgn5YHh1uVbfSdWZ8oS6rhbyZhUtTLMuW5SwRXWXjkk4ozBEvxEjqbH4KwMQW",
  "key34": "3C9PL8Mv6N1ay7DAcQLop1wJV44bCLZZrdwSVDftjTyAMJrZEV2weunRKPiiDjsQor4mjjaV2guApn4VGV8f7W2H",
  "key35": "571ekqPaKbGMoVLVvofxH7Sn4MfFSdrEzBbTSb2Q4yNHzFKWXyQucpKcNC1h5yxt2CXgNzksRUhVEiWsY59icFXJ",
  "key36": "2BE2QnUkJRkaaQhSG9YVxm2n3qZNr1Swt7fBYBQtkkobCtbgt11qAaMUqNp23V6CWQ1ECCVtAGGB7Z6BuytQVKfy"
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
