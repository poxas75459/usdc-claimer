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
    "3YW3fVFdJAXUBjAtHwP3hUgRzSUkmUA7JmV137Uettrg1Zj8uboBvC1nQhoX9Mx23GMHKv1m6AWG8T5BiTKvjmW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTrVDxaFLU5DbHtZHh2TkQsZ5fSyveoDvZE2joSY9ddhxP9yycWPf7fuQnPNUUSAoKDrm57jjfFq38qgzSMEmty",
  "key1": "2Dsi1S7DxgM51QxmPVjoSXYL9Jw469jqxPxvPtQgFEL8cJNC8WHGo1Ex91tQfjN7D48J6b8LG7aR5FjQ86zRNgfH",
  "key2": "3trUeg1CEJCH36ZEAqHteTuNLpTUghmCjgK97fSkBaEqoWXGLGYuGEoS4iCCwduX1d9VcE6YqcURzzGHcWkmiQbs",
  "key3": "2nEGpLfa8FpJRERuyai72QQ9Aw4jhc5hfNxxGn2s1Wu6uVEbV5oBwopV1AF9WvG2NNvZD1h7P7CH4wNpJv3HJaMg",
  "key4": "23pw9d2VGxppBhpPUt9au4P1jKTQkqNYaq5WbGUHTP8K5KDBk2Gk21oqMrHjgXSinL5GZaepzK3yvMTPZE13URPB",
  "key5": "3ERQXkRJPyGzUYxXNzJG9zMFYxHdRrTq5JZWBjWUmnvfcTzx9WJSEfZ6s1EQPzLdkp4ms5Beeup1dokhL2WaMKqz",
  "key6": "3uL5A6jUJV9LWPFteebebRJoTwnfBCqxEgmKicG23qrS4H8z13Ss5bPbhqBvmcQTbW8Hg8qArEaL4yzTZyT2Tpf4",
  "key7": "2mnfrNjZGtxGthARypNpKStndj91k5GcfGbc5149cAvNN9CrXkTrdNCuA4Wqgc7CNwjPahqgEsRNMs2T7teQZZ3W",
  "key8": "4eAJzc6eNXPiwKysXrc2DASLCdktM4Pk1qskDYgySgwrUS6cfRNJng1DwvMXS2fJXcdbykDN994XUu6zR5JLJugi",
  "key9": "3ugbDy2akdpNRs3DcrhgPmHKFzAyznqpS3jRzKQvqE1BeVZhu4okBRCtwXyycmWDpVJGoh1Tp1dWgGmZ9z7wgdJr",
  "key10": "fYWn1t3aNQERj73hoy1BiXLppU2oGNmoiYUcKfW2R4xVgBDtbSpvnsbX5NigT7Xn8dfckKmtfgRPjxYo3w3ag6N",
  "key11": "5SP2XdyGB7aqQ9ZtZVqSDCoMYh6fxhEX7t4u6D3nfmAW46bH9SoLwb7QtmU1rB7MUbENfRMDooM5giUhYdbVdFYn",
  "key12": "5QfDfoefrnFvXGePoiH7Z7ttPZLmGrghqNQchLepec3E2BPytMJMB1j4HeV3R3xeKFF2k6b5ss8pKdDijNHHUMga",
  "key13": "i8LqfSgQzwmM4bTanV7nhMqq1Fq1qSbsfA7CvpBwLnMgwrZi12L4YVGXkx59x4FuWHkA62pdao8jv9fD2vTSeq7",
  "key14": "5YZiE7F77rrpkRCiBeWSLfdL1Pg3MjMbdzmfC4WPc9Hw9X4zyTi69tTSRFbiC3FVBLR4brfL9sRrHJT1vihtsrmY",
  "key15": "4yscXDiAJ6eKtMiPsSGyJZKGoM6z22cqcpTq3DxraXcAgoT8rgoyBysahsaR3Afbzqtq7h4PZdnQii4mYAJyMYYD",
  "key16": "2z4WBrQw1RyBu9vKfzmBMyU6nHMeqF7NcgS6ZpvHz3b7j4eehB3iQmffYhYJDecXqsSXvDGU9eUQJX4w9UtwDZ9D",
  "key17": "3GSGaAqAbprNdLEZJizivF7mwN1f6tTVjE3WJZG3nVvYArovFLAWj2E76LKZ627886xQyPDH6bqUQVx2J2Pv5HkF",
  "key18": "5BALSWnVGnBpuSb4RaYTPNgYQgNGX9QcQw1GnbAuwe1uGQfbCzKdg52ZsLwduG4b6oxbb8Yao2frVDWLJ3tFWc6e",
  "key19": "44uwjihVfFJyJdmsUTaJEgCvpXP2NsC4JLd1DZaAZKtmS8iLPgy9vrfAZdXyt3emmRgjKdV2oZ6FtiKWnAQDSNoZ",
  "key20": "3cecef4yZifVUg9iWLN3gx2Dj1o82SWoHz2EthV8ohPm8GUnyxC6dUnZfZTVJidNpB8UiKXk6uFZJW9ev3NWNvwk",
  "key21": "8bCTQ91aZNNhPknsCZEUfAtHLNpQkyAGHnB4oxcaUmrp1XnTnqGzonh4zU6UEPiCtSJropthXED97uDh4u4TcuB",
  "key22": "3EUe36jpkwmoSBL2tNgNpUm2q3v2YVqQycMZEXJySjeHYrDyowkgfn3yjMyPoYtkjsJ1L8P8Y845pkpKD9SLnftU",
  "key23": "5jUyiy3d8kg8n79DyTRFNTpz4R2NM5orL6g4SHkz6Dftxrx5vqPHuMnfQYuzv1RsmC5cpC8d5J7uPciYJ4bGeZBA",
  "key24": "3DJkJAi1K26nXMYn25XYjrUd8D6nFaL3kd5un1fepLgsfgGCV5gaPghuW8FR3bzTY5Vt69z1kKxho1EqFEjEGvDB",
  "key25": "3545TjMBtpKhDGtsz5PScdiceWLhxRczB8VrczcgmU4bVkuEP3A69H6R22f7HLdmp1JJ2stKNFAfCv9GynpgQvcs",
  "key26": "2SpiKBPSBzYbKLxJ1ApUXPQfnQMawX1tkWCGfhsgJbMgWZTrGmF7qUKQnVQdfxkPbzFQcZ8rzvoDH8ZANKRqfAXM",
  "key27": "5h93P84gc5SisFYzUX1YnUtEFqb74zrQ7g3v8VNc1D6Mf74TzgDJjcYpNtmCKypAqCPWNa3sKFvBxYLwKDvyJszg",
  "key28": "YqmdW9qZCGKCdxrSUgPDSLrcXugucrE4apHk3AXgSL8X4rrb31EowNdM5ihF3X5ikoWgLbXzbs4NDXFAJfSRA2C",
  "key29": "4ptg6frSMteVyQKXKVQtSaQYCtEsy86jn9bZW9utz9AHCYK1tQ5Wz6CqudDeA6YNLYgwE8ZHR9u24gAJK7FjYZNF",
  "key30": "5d1BqDXgNkoa9SDrwb4NcZbkexrQRZpFuQ5VSXuFRdAxUA9db4owZcgSz24ogtdU3zN8Gwh6ent1cW6BtZeMhpqh",
  "key31": "KJbP3b4NihBgMncLJhm3oJctZ9sFmWQ2kK1EiPcADViphVSBWhqf4xcu7moj3uXszUnURF7BPMk63MyT7vs2H8k",
  "key32": "4Yy7X6w9GhnkbkXEgFBNLruyPMPxynVcGgD2ewiQUYoHLKH2JvwKU3ZtMUHNYEuPXaNrUrUy9LcLfLxFtKVnBWcL",
  "key33": "VLNi5g7aciuRAm2F7k98EsaFLWXPmBDRg6m3LnoaX2bZSf89pnpzrU6a4oN7EYXsan7MNEjpYjEkzZ7vw1h21Wu",
  "key34": "58GPHHW8WePVGCdsC3H1FP7bL9WWvNXiD7Q5WejGc444sTg6b33o9WgTHnD7THTQhU6zXHAnyuhKMN4mi1Aznazb",
  "key35": "xcxDxv9ZR71Fv5EMij247MDJ6vW4VQmKmntqSJHzvrFMnBhQmscvtUJ4a9Fg9U6NyD3dj2pubL1W7YsX6BTC8w3",
  "key36": "CMhjEx36n4nme35h4QEfsFWFxZAsCEF4LxqGfXZ6WEjwACahmxoLZr6b2rEbomfncTbVRBpQFVH1AZj16AcDY9Z",
  "key37": "5wJBqGmoQ4QzLLnficGLsmeJuNFripu2qyyNexYnZRPywD4WeK7LYsxiHV6kYoumAAiE2GnQRVZg6HZTdQywXxaG",
  "key38": "4Z8ctbREJ5CRoHFfM3DUJo7w78bmQPwMzPrGiKDfqVC51RQ5PuUcauJTV8KkXjNsoFqATcZ7fTqiBkM548CeEsEo",
  "key39": "673TxvzvNyz1sUD7hMhSPcuTEgDpGwjiVWTxTp3Ptm29DMhDDAtQTssXPTNekgQ2BmcpKQCtA4FzqF1PzZKJvpYW",
  "key40": "42MhXdbDAmuno6QBne8YM4Z4jcvu1z7bGJh1YkC7EtvinYv5U5ecPL3CzsbwxxXtiY5Km4pt383VfybDC7yBNmty",
  "key41": "5kCqsYypGvkUN6vy4cYXCxDLYV5oALdduuTrP7kHnk45TaLZhUvGwjiUVYWLQ2JXA8qfhfBH4gLd5jWXqE3Z3x2a",
  "key42": "125KL4AMyEjoSzSZG9tff6ANv3GNfNH7msWDitYG5VEzmiiPR7BTmDHa6aLTDFCf5tRjyBj44KhvmshAyhjPFAzD",
  "key43": "49Qkw419LtXnEe7X9MBrN7DRvFiKms13m4VoNpsUoq3ehpWohrnt6Fgo55ZDujLpwyGrJrM2yJHfYRnkjWB2KapB",
  "key44": "5ruLhEpnShE7youQ4rCH8DW4XrGJsqjspr5ZBBHEAwu6Gkv1Yh6AiWvd7wGAWDqnMmbSC5A86ie2pAfs9ZH9YXbS",
  "key45": "54yCBqmGARhh69X1BnZG6AeQmx15aNB3nygxUa1ZooLi838c3tBv89JRnEWZypiP8nNS6nEVmnn8Am5trNVagSGC",
  "key46": "2CutfD3xKcAME4MZoZwqSebUS1tyD52ou7h2BHDubqbH5mgnmZY7XyD22fFJJNQJHuJh2oNmLxugKhaxoYu5HmJc",
  "key47": "5HdxbR1j5LzhEPXE9WH1mzWGBqjph2h8t39YFsbiytvNLZsG2dndAXD6AYYNM3ww3hgQFQ162JZND1ja6fdcbeeH",
  "key48": "59wGkf74oiG4hqU1HMMAZ18rFGBqfP7iwvoW7FazLJUAr3FhKSVP1CykeN1wYcebr6g8ernxLWXxv82ENfiV6Ec"
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
