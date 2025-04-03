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
    "SLCChXRSYSBD53VeGjsQJKMytTF3rpmpEUiWCAcXrBWTVFoDCHAPMvACDc1BN3NS5CtELJe34G91tqH4zcc3ErL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jVcm2GKEsLivyjfvNp8u6Wini2p6LomDiysuBPZLdftJ3vPo98EyXNWiDHtNNz5ijHTgTRqSBMBRmWRDeq9TNrL",
  "key1": "4LQ4bpSm7ndgZMEACbavN5cf7GX3eCKEsEuHbvnyabvD4hyocHgvwKZjtYrnFH6q6Umtkk3W1ZsW3UGvDZcPwg4K",
  "key2": "23ZMkqD1oLYn1hppFvi23c9Gzv8zK99Auv1aV3CAJvRnZeNkw64xmTGCryZ9Se1NkymtPMsw9NLmPvsGcdzAsQQq",
  "key3": "678amafjWjgnta5b9gjTA8BucawByWpH8HWqo3oadXY5d2Aig5xGqdPYDLdkkLWg2C5vPFd4qQW7waKUvuJwUVfF",
  "key4": "iM3vDm6a5CGg6fV4Eabk9wUoNTCt3oQxCcfX1RCHFLpo4qxCgTpFQ5fdvj5ABhhuCGV3Z4LFXGZVXysXE9g1g1F",
  "key5": "5pLWffwM2Nh8rLraj4c5SDrV7oSogRk6EDKMk2fAD43u2fNbZkax5E85P99geLYbw8Pbg5upBNKX95tLBAz3RSaF",
  "key6": "6MyKkk2dKc66LNJ5Vji8wvjBYnH6rHBaqh2nhx8u64wFN3m3ysJWu8nShuUaGNVebTtxij4NrRHYFdQWCbMYwNU",
  "key7": "4gaSb1Tz4caLkEVyS7sEZn6ethdi983n35eWVQGg9aJWLFn1SYiUR24SbXqhWRU8nwo1EvEogiXoKgeyNcxUNTzp",
  "key8": "2cYMotaBQhgNx45bQZK7PVC5taLynHxrHEYFLnZhdebKAd8w5Lv1DHsnUkDJsAimC6q6UzGsYLkjR3JGMftk9gE1",
  "key9": "2uXaZe9SaCAwkh7eRQMmZkVyqZ2Vcfmn7qAfvoFDHc7em4nxDuvJb5VmmNFgZE4mtsVxzYTUe97Qs9NrKrRiqeh5",
  "key10": "5TmW9tTdiPBunQedJjKZ73PWDmqva2eYTvk4VcKTzpgWw5YMYvjLE8GXaRWAyVvhzMgu235UrcvJNdzWLHtb1dsY",
  "key11": "5DyTMubss7MznemmY4yHHdDM6v69QxXfA8WDDBEXWrsEcZXpZx7miqXxpnanHTuAxuGvSbrp5XqiseYo8Xmih2M4",
  "key12": "3yvw9bvheAjcfbGSzpzRVcULjLz1fYxaJizWG6GPxJg3sLUPCSzK6MYhCtAmBbFZZ7Z4LCDcR445RBmayz1EuCKr",
  "key13": "JLgAV4gfSudvD9oRWE6zgHtvh3ZcqxcuZL4oK8bVcbBdQN9QiifLSUoDRRQgMx89u7v9qJTxx4AaXyM3Pecb9LL",
  "key14": "iHKCy875GbbmgL6Xi1mMqy18wCpGfXTXD6qV858hQwVm3YiMYrVhgxBVkpbmyfScYzwW2yQVge11QngsSDWVpsB",
  "key15": "5E4EdjJEzYfvDSp9EAF6qyS9qfJygap1gjXsD1DmvFHHuid9hQVxn9aFVnEpz5dXcPsHD3DQReTSdHwAZLLaVLwQ",
  "key16": "3pk91WPfVgpYwBgCcCCirYphhdHtGpRprmUpTp3pQ7a2pEiwp67KT2jwLSmD64FCNm5ZUdvZHAfq6VJkEvVvBBsZ",
  "key17": "27mkcXrAJR8iJyuR3NEncn7s39KrwCSSZPU7G46VTtrEM3B3aHKA7jQsQn8k72CAynj7GuUgAMmQKGkz2uij5KZo",
  "key18": "4v75fghwPagPEd6FZE6jSyhCQVc1WQY8cvW3ej5YL7RsYCtixQ7od9P4haARCtEccLDGwog2Gfc4aVF9cwDufSL2",
  "key19": "2Ne5Ab69VKYwCBegm6jv9BeqbjD5m9RXMLTdKppxryEzu3eqfeKfUNA58145Y9WaE8bm5aSqBn9Jo25SCiXuTuY5",
  "key20": "2JQaUUpNoYTC81QuQSNk3h1FZbPPtKbXUmmeoKKKX3b84Fk3G3A5B1KJP1dMsHKRbSUmG24uVcJMiLUhZwpHA7yK",
  "key21": "5LUFe3Ay8R8pzPQhrR2NvqiNwZutBawZiRa6pPbFjdrW4muoZqGNDwSgxV2C9n7N8UYRMRr1HBHzVA2Z1VB2mCR2",
  "key22": "d6ectZpSABgCrNHhcp48FBGLkc9v59dwoFzW9QAdDEL9Yx77yZQnowiavKQ5twotSdRPA4t8Fv86JYFQz4NGF2u",
  "key23": "4d4Mv1AG5JsQadyPRtifGLPRBLnT3JMoLrZ2PoArosLKzY2BLhAsssxTUzohMwjUv6rhcx4SHvcWQL9Bd4NEpHuC",
  "key24": "2EwhRnEce3k82tjR9FXwhiDra3ynZsvFaQ687dDBxYs28Wu4DchLjmLTguV2yhsi5xBWMHQctkW1eQjYPbcHKfic",
  "key25": "mAU31fJRSzsYHaxteJMjkerZbDb7WKweDG4Fs2psJWbtAcYtNUmrvQLKnxEPj4H7B3pk62Zed33fXF62kibud9Z",
  "key26": "5TTZENiXv6uTZS3UvFL5oXx4nUKyQ75oavWQA5UyuhhfbKTcU8YH98SwxViDsHBDEhh3HJLtAJNCNUeimtH2CXGi",
  "key27": "3q8omjkXJJRwhSVqrnwwpG8wtrCVsZBMQBGfPJgFkc8aTmcypGMkpkJrPKKMa8DED1taVJMLd2MpSS9mSWzisvEr",
  "key28": "2SQNhDeSRpQomqx61Gp9fnqhxaG3cmfSXu7CuG1tXMNZN27CJNUDcZrgujgAp2tZsK2JVciBfx4gRQN24GUTYeX3",
  "key29": "2LYXR4hdMLNcLNUXLWAv9AJ8XRLqR52Z6bbXqNeCs7e9s9q3PjiPb1DapsQui5aQxPxXYsDeKPLgXQKLpqEVTdzy",
  "key30": "KbC2a7wRaHW5eCEWBmez2Y94cQFNKbc3mtRe6B8SFKW7jpwSJT7XP7EGY1XevR4pr44mUowB2dYgL3Z6tcKSRuB",
  "key31": "465SGNJ3T8bRXBfqLoaMG5yFp35RHtZFMpoJroiPry4QZUNRmKuNCN47dcWEUMLjj8bCpLTRpUSGCF9YEiGEruXT",
  "key32": "4sbiuDJsp26Kqt8pHb1vwPcHWHzreM9UgQgWnGqyqUAgVp9eqmNzA52frto8ANACqZwZ7YLHFHWUY5js213R2gZw",
  "key33": "2i6Kt1oU4EmGYcXGkAEbfje7Cj3gEdZUfbjkxpKTH5Ck1Xpze3A4BzTj8K5DoETdx9sjH6rescUaxufotG7RnmWt",
  "key34": "9k81ByJDJF8pr5dhGQge5AfedekKTDYzoc2ozf6M5MKdsorJ8WJcFDNYwVYPWzvVNCx4RyxjqH1V8SXmPQABNmS",
  "key35": "5sNxxei28Kx9LkGkdJJ9kQpwTXmYXLJeBGwFaDNLb9PZ8idaeDQy2RZUvfpqnFqhuRsY5YL7KtQnEkQo28btV4N4",
  "key36": "2dsCBFrZ3JA6zDnUkreaQxteHR2w3N9m5Dyw2QsE33yoA6QRf8TvisoFZqGpTNLZJekz5NMxfJpxSKuqsxAS5nQn",
  "key37": "4HWZTss45GpFtGnQUw3fmBQZyRkod1W56KPufEZLaKFBGvUPLL1fa21iQ4bpCqqk2VQe5Xf4yjQoze5o68dXJDYR",
  "key38": "2ChgiFRiA1NeiDphYTFWTMkYaRtZpGL6YApRnaAQeFN18KWCYhk3yGQaUYkM7vHAw3RGYF4s9nmiyh6WwBK9dR7d",
  "key39": "38zvTPnjMiFXrQKqCTNMeqqAeRSvTxCEaw2RPMmGsbJW5QpzMKqGFvM4dhv2fUDKao7YpZszzATQKzRf6ABFFTb7",
  "key40": "3nBLqyRw25ka5Uuf5aW6tWchpTWSMn39J8KrLfHquCcmVT5rJsGG6Xv2zZ428P5e1LqsbuDDeu69tEfTWsz6juBf",
  "key41": "42vxH7SeUtTw7MRJKdKSJkpFWnUDVKjWfiFrP7ZYRJjzLoMYiaAY1Rjq9Se7fSYy3Kera49WZRx4JNpkMC61uqDQ",
  "key42": "58947HNvmXL9bnyPhaqRrGGY5iWN73UsnpujzgTa2bu5AJFCeJ57i33YfRdNjwKXcc3xkS7V5gf5YTvFNFMTLq8e",
  "key43": "hVgdwgLjAiFQJRLsv48iMWyFJLViTkefQdGBMNNxEhLKwxBxVvAvbPeYdKyguQHyqh6LmpZ4rAngkj7wiLoaGDR",
  "key44": "23zNs1zbQqxfXtMPcBLGjbLfbcEciKrVKBbGjA8nhsTrWj4ij37kvNWcJAdoXmVtGgu6vcLx2onmXqEjoHXvMjgq",
  "key45": "5mmwAxQzoYyiC23QH2PXx4i4TbuGYpozk9EjLfGvXXjZxCZqB8trQ3dvCEEuhcpw1NuPdyxnQFrm3J2SW1A91MVH",
  "key46": "3YsSBkaAWk3yweA9UfTfD2JWtVc2hSxLuxDhii8AUuhVb2UzPQjWksnsSAHbnwLr18RodhaeNZYC2rGK3AP7ZNFo",
  "key47": "2Rkqa382JbWAzNiWYRvieb8yZRBqGbeFuFnt58K612kc24eMRgJuXFfdhLkEJ1RkS62JBYCb4EfG1hWt9c7k2tJi",
  "key48": "zewqHcqDqMSHX7BMRPcdohQDuLBKX7MZEsWoKyvJbnUcZfir35EXQ3HQAdDEzcPAkz7AkYDJbLQfKBMFZ14icPF",
  "key49": "2mFFRwDZzy1uRKfZageWjid3P4x4rGxWUXqnpsejbTC7wYXZVVVrp4GLz76c3PBeJPb8KRr6XbT6fJyNb2PzDX2D"
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
