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
    "5WhrfhLwvXQ9qKV4PcMB2ZATDw6tfZcXQkGZ1pH1yPXrKe1re1AyDRqtkD7NzXm38sbWcQfL3qD898Z7AUQEXdzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAonw7oXQZEQ31ScXKC97m2yUeSccURtDti4bJHbM7xTq1Kew6fg4wKzRuL7DFiKpL2D69msHDkGGcHUiybTMtG",
  "key1": "2FS5n6VDJdZGfEqdkFKCpfwXxU5nr5ycfSxmXAHBuQtmQ3cuq5oc3XC3KRfxRUtyKmqJRC2GofAQd1e5F4DBkUq7",
  "key2": "P1zuh5xj6tZ6uZVXHwFr9KPjefJuDSwRszbZ5qd4NQmYKgRH22ye7r9Kw9dsgjtzLfxfj2JL7Gdhu6inZYcfMnX",
  "key3": "2Z5zdNkJ28YLLiNRoyvTmD3uhwvPkq8AoXvBoAD1TggbfnV9DnnyuDxr2BiTL4nmvf2S2VVc69Hz8XtTFnw6WVod",
  "key4": "4iEE7kZqzAFKCrkGEnU2SKU5BgYSJk4weKsz6H1XpZwi424XQTFQmPC9NzGaP1Ab3KAbdcLp3ZaNMouakNkNTgNV",
  "key5": "33sBah3meZCpDRHxaNzqzVPgmoXQGnv1KaoEUoh4eGXypGxfVHC3UjPWR8NKaVy5H9rfqh2YfCJ4riaUJ2sBJqMf",
  "key6": "2pHDvL1sb35mPvSq6Bdrbg2YyDo49K1mxyMYFQ7mg3VaZKpt2L9P2qQFubAGh88dsBFjUV2dfdpj2hnDzZcXhaHB",
  "key7": "33VUGjs4p1LQkb8GpQn488qZ64dnKQX39JisSQMwpAiqQPSikpQgwWyzw7r3UHojXQVhF5XiHNibCX6R3BRsTWrV",
  "key8": "5M47TVC5CLQFRvYg8xRBDBfbwvGnkkvXRzcE2aPH6EX6qi1ks9EUobkrmqKpobNsYL7idxR7E3vfsFAeXKFk1YEv",
  "key9": "4jsxnN1x2xUEi8H2CV7Kb4tbZ5YZ8U3rxmPFEJmy7FQctLwMoVZ6t8cPG8J1HVL7xMDnMVkDPht3gSGik2zy4bAr",
  "key10": "3cZgWdbqNxnH3fDkerj7SSXJ2JsQgf7rVHERwi1gzu643sBzW8i3LbPimDamstUzvg51DFu8egKfNzz8xZYkQRz5",
  "key11": "NBJxG5tVNvBXraUPTGbBXJ9KipTEYkNF2v1TYrdc14kbHuva4WdRpizUaJPtRSfX3QybYvjYeA2XkuUSgzJo4H9",
  "key12": "4eSL3gTSV8CMU1JY8Hkot1YxEFuLdYgycv8Egyuu4iUBonN8gTrG1jgSFaNBbRZSShavEjzH2i7xXcQG6UagyapC",
  "key13": "21TqwHrxba91VfzHkw4F2cEvrXzXvzPDiteZzSg9yDjfy3AdvkDhyoKbtAn1n3hxiLvX8CNPpyizSYtET2tdyWPt",
  "key14": "f7sjhk1jXWbayawRrMiPsb8QvF6o2GbqdCq4dAbnz3PE3A4PkTbNSj1KQrDLkav2Urw3kbMxVkPYwSZmTL6c8uz",
  "key15": "5g9ZWB5k3f5oVHtQWK6m84STwacGXHEZASDxmHfW8ALWBW9XRqeR4pzaP8ywZwYQe4wnnZYf5BdiBuarGcp9wG22",
  "key16": "27AwP4oDZXyq388o9uXTbiNcxUou3kMYfvu1bYfu7h8kuUnzRVPbKUxZaieAPuiygiCTssWvoWLpBMCx1q3EMnyi",
  "key17": "5679qG92ukEpv6bmEwwxJa4qByRZnP5tGkpVzzgSRMgYVDuK4QhCCdxyr1AA1QULBnL6Nc5Ai67dBYWKKnaJXW8B",
  "key18": "5Ngnf4YqWUGFWEmCU19wafYWMwzKUQAtVvCWnVgs9ULAbFnb3KeGzSZMQ3JwkrQGJjDWsrf3b3EcsLd4vvxFjTA6",
  "key19": "3skQAMVmkN2cvJcA5RwUPni9Q5NTMFRrYULQvK7u5wz2vipamgiqhcMsaqBDXRdViM6BLNkv6qhd8U54EszPzBFu",
  "key20": "3h4VKQ1FTAr8UDnMvtYpwtWx7uaJuktcvUf2giyW6a79TM7hQB1fWfuZ4zMt7RvpxKXmbT8epeLqnbAAKMn3KCDW",
  "key21": "vKs36RpdYy6r1EfmMuzEJWicind6AGPfpY19TZkEBq1MJAYPYTVqD1T5VpH1a8VTz7H9G9zsxa2vB75hpx9fiTU",
  "key22": "34WwVb8KEcYWi7LapcmevoYnGNjj3Bg3V5u5ewz6EoycywV8RzVBdKaRVzawj1nzcpqqcoSSrvA4jjAxPKbATtyX",
  "key23": "2z9W7nQtzAvYPyDwYhGgyi7CRSi8fTtCjrjiQ2WVgaYKx1Wet4xa5uDV7gBM4chBLdCTVy6naR31ELxdpvk14KJ3",
  "key24": "2w7nDk1862NYKApC7fedorrAf4buqfzFaX7vNmwcHSrPKsrHFpzxtvDNQwwd4wddrGRgaAckWCYVSGk9HBxPYPL9",
  "key25": "NcvYkvVRJscJFAP91ARz3FheefQSVakV4hqcqBVjJihzsuqpSzY7yzj4kNcda6kyaVx7kYCNYVnB7UyD8NXVZKt",
  "key26": "3jtmpko7oWGfzPMMcMZkDhPuLw1EK4S4whYVxSAUQKnHz25VmSkdwhCPxREm35HuDxW59EfrRXaXF3YZP1iiKg7q",
  "key27": "DAPeEjWmEG69edH4sEGrRk9dR2gs7edgWQBhkoG8kAiWS3NRnZ6cWYVPbjdhZqx5HyzqooTwCwyrqtgXCsJW8Yy",
  "key28": "4DcrKXoDkb1nVvv6bif9mzz8kDDUCsL3AaAYoaqmczTydqgS9W2UNiNTFFbsYKHxEiZ5Avi69K3o9fK5yHHoGpDo",
  "key29": "eFxSoNapodGZLATbsdXmx7VXQHdTBUKw1Eb1cG2GLBaKB7g6Xu7NssE7wadS31pUxzSNuHFXhzMvqNBwkFGDBu1",
  "key30": "3wJQ227hETGjGJ8cMLh139aJFodbZfDVsKFuGUPXS1uwrhCwGZCaKxhC3vACqK25b14mScaLRWJLdJ82adzffHcS",
  "key31": "zauM9u2amiZGQ7ngnJEBrUvDprpFZtzL4gnnRmmPQGQJNzSYWjsoZsYKn3pEMDUiU4zcuj28jwxBAp5eYkjvDXi",
  "key32": "3AEBMeVsKTAWTXYWgV6EWbZZvcRyUxYkrNKcNji196Yzy8CH6TMTtF2UwYsMrhuLP6wBcqumEBbe1tnVze9opkuh",
  "key33": "5VbxjWFRMUZp6PwiS1vWxep1n5FVjwUL9NiRTnsSdboGyxYuRZjZDNitjvxJRsPC6XjuvAEqs63GsmNESQHYtSqi",
  "key34": "hEZNR9dzp7nijcgZT2N3Y6SNa6SecYXt515qjQAhuW1KEJNhfZHBzuMuVbjwLaziqMcjfHXWFBBiLVpZFfFH3US",
  "key35": "26BmJUcYjW55GR8KtdRbPbUiC2KL6tXtUFxLwkR85t8JbLNLhQQS6di8wauWwCriJAmfa77DqCZFDybYvDfSxJHa",
  "key36": "5U3tPPK1xzLtzBP6SJXqA5K1xL74uKZgSWbmfHgWdB1URALQ4BcN52XK5H8mA4HXTCAfGMeyMDBbVxAsRdqqM4gQ",
  "key37": "5ELH9MNrxj7stRHkoLqJAb1K7p84XehSskrp4mXx44UJBYRc2kUEtCCPaXqgEzw4SERPk1zN8Vtxs4pYr2K53UbW",
  "key38": "39vUUkdHBchQgRiQCxrfqZeo4wKqrCcY6efi5tEb4F8omxkkhwUzJKobZXquUsvBRbGWCpZTGrgrGCoUaQhQ6z2s",
  "key39": "63GJCLzZssysbLLVVHXTGucosCmi4Yb19vJ22KpeK9gPUrLdYB74xbg2JQVDttjV5wanCzw4yKX1B6Gi1hPkdcBm",
  "key40": "5oDFGCs9QWz8d7tM83PczAZHq4fJzFY6A7VnpBy9GDn3HJqVAb317PVAC8Uze1uxkz3fFDDmqsmsHivzmn9JawHC",
  "key41": "21DHuFPFXAsekr56bVVm3TgZqAe4CW4ximDt2jKkJkaFpnjzpxDKdxnwSmsLj1xQ7kzXE1aBjpkNKjkoPh2L49VR",
  "key42": "kZNpAM1ugWNSbebijCPFDsuzwRAKM9QWaUAZZZdqck2nUvbFe9UkPMqqD2HBk3uhDuBEbaMK3kSXFy46N1X2cX9",
  "key43": "2KDbJ3j1Ldg64UFA1CQDinB8X7zoTTTsVcs38h9f9MSCciyj8DjDxS1c5NdxRH6biDkf1o6F9WQi3dQRnocAYEEE"
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
