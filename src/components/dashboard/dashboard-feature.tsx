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
    "4o9KiyabKWKP1J9VbmnWYeZfpPCf2xQhgsz9cDGncbNAr82MU7Y8iuSr44cFWBr9npcM8P6W3qSRb1ptqX5pFWpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaTt2f71JBCa5RX1UqY9jA9fgTFD66YRfQGDQMWQXuUGr69pSN3MfJAgpGoaH8pdiKFLxsCjM4Y2xtEibqoFdh7",
  "key1": "8gQu7QbYdVLfaMFHoQJFXtpN8fPoDEfV84mfV6rgmYCwpCtnHp5hjdHCfiBiFosFd7BajJmtkuksb81Qm5wmeeE",
  "key2": "VyoeaxeF88AGxnzjRTkj9cYWuxSQqu18QCxHeUMLvvFtmLmf9yNXokbkQuwbRDGywkV45xUCbyMv242WnkLYDeB",
  "key3": "uyn6j8aRnEeWMekYtK8YedFHEALdCZrVij9nfEvZw7xjoxamLhpJw4v3qPJZYm1JtWZUL44z1bSRCgF7E3iejzp",
  "key4": "5uEcb3s61DZatLZWfZsKbUjvVUfzaGUYCZWTNar5sQNnQMVugghsajiAFkYeRrkmf78aQBGesnikdk6u6kpuwG6r",
  "key5": "37dznTyzGNGJ8p34UoWaj2HG2HbkkfNQ4kj6SqUvaLuaZa5sLiz27moc8oUDh429k514zteWmz1BqNGwxw22d3Ty",
  "key6": "2ww56d32LwQkJcgJjR3QDTZTDte5n5xdoPiXoDp6Tc6bQrw3rsNAYGSDAFBqsEFppCgNW9szEqAsfHKwzVfmSijz",
  "key7": "4XDLooURzyvV6CK43BTXb4jaBDQ6jPM2ozXfRkSSheAd9HJc8C2hnV4E4KDyxWsAWVsXwUq8TDYn9zbW7gqbq8oG",
  "key8": "5vR4QmxMagcqjFtpNYncbF6iFbFYY1LyQemJLFfh9Hv1nAq2v4xn2hLzyLQBP2mJm8A4TZhqcYZBmtkxFZtUecEL",
  "key9": "5EdSEYP3a5m5DxNRQpcxcqkJ56AiC9MwQ8uiGcr9eqCmDMMWvnFHx9YDh4tNb4iojCDpVayyN3RDm4hoWPi4sYe6",
  "key10": "mc3TmoAf92BfQy8dj9uJXNE73zge1D5heq2gdH8f9rEXwMeNqkzUYgGvowgSwrQ9woKt14hsJMPuZjGor8Hxrnx",
  "key11": "2XruqFUgYiVjUTuZJiasnFK5vH4c8ymVUBCpxmjVvvUtSTnSYXJqwpsvWHamsD7HU3Z2i1Rx9rTNCZsonpF4jAD9",
  "key12": "P9Addm4hxmGWPDHv7qw4F6npGtdDeHWCAy8JgUMen6y6nqfK1mFFYLqRpNCrh1CLPtia9wTXZJuWfqa7dLA32dh",
  "key13": "HPfuCXnCzxzQPPwRpuvnbMWfqDF9ZNE1TzhbHsUWH1QHDt2zvbSkQz5KEEkdqGDReAg3mFBCGy6juYLa6K2bhHj",
  "key14": "419diHGfn3ALzJQ2nfb6orATP5AjBLBNS46FvDyfj1xMiwHaM1sZdkjDJcTSJXfLyyi6krFJWVVdAEyg6WhoHAg8",
  "key15": "4AaSfTmv5JXSh7WF77byxbyi7oS3QMyAPg77xuJG2nFMLEGEahoosoNPUsMFuXWSdU926c1ETNTXfjh2Y1Fno828",
  "key16": "4D7sgQudA7HAYeF5q48ParzVMow1HfUDWnFqSuKWNJrzgLtBe984t1eoY2QCtyAFm89Z2gP1goLjPDPumR9SabFs",
  "key17": "FspYVwf7RNS273EhWybF3b3YwhrZ8yEVxWQUfbWNsnYSHMsUgoM1jnspYibFJsxtzUUSR51vZ3AaT1C6vrFZ2Lt",
  "key18": "4s55Ms9MfJXhMyMcfReAiZDrckbKFoLKp66D8hVLkd4tNvYu6ct3m74yjqhq8xBVAqeYa2Eb5LYQoFb1iLSRp1Qn",
  "key19": "3BLds911DfBAiwTJEZWJ6k1HW1GMSAwdeHHAaBkZevoKYgcKTChmb16c3QjcxorxXTesxvhn4XM6L7UNhq44aMQg",
  "key20": "26UaCgZ1thsgCq9U8w8TZThAKzsCmnXKWq8PkcVhw77Vr5RPN79UhnvTu9vnVHWWw1Zy6t5NcLLQYwsCTeivPrKh",
  "key21": "3YqnSdabj4zbg9xVVJS3HgZwT3A9D7rDEjgsR4yZmMDDLukP7N3pjry6Ze7kyAn5hgv4a6cVLPB7QQbjKg72LgBe",
  "key22": "4eudZX7dVbD7PesXacFjXDYy1ZoC1dkFmdVLaEyrJj6HjGH1hvP3F5gsU6CCL7d4HsQkz5wkWSKPxCX5GtgYFaAL",
  "key23": "4ZLukrmSjijTawmrnisaNrpYmCGPqhiEerkXfRqr7gzPUF3eASStwAeDf6m8forDnaKSjdNo6rhdzqoGg2drWQFz",
  "key24": "27TQsfzY4U2ahxMFF5H4Wu1G7AuiNTEXgX4sRZq7zAH5dUqw91enpax276y6axxLRxuC8JFx6VrTs2dHKsSdtPMB",
  "key25": "3mdS5ixc6z4cypyb5c8tZfAmqVFhFXfuVaprzyTKDr54iuUJh6ydcAU3VT8fFyQ7n1VG29uypRjXwUFq8QRKKeJy",
  "key26": "2HBjVYkBLodm1kS8o9DXE7JCg44oq92siJ6GysUzQj2fvFqcTtACFBUhSkkuet5XkEzPAUd4JYLsy8KRrD27Nv4f",
  "key27": "48wU6zCbVy6425hhxMiwX3yeqdSbB6BejMu8xVVrruSxtCd1KvMKLADQDgaEQHLMQE6qk2yjBuR7ipV3WGfqFLGr",
  "key28": "5M18X95nymLsWpCrzL7f2wcXEPh4A9vX449QQPvRpbfunDBefdNgSPezk2Gc9Yh5PxmXovb5pSqbbr7vvZgBLPsd",
  "key29": "39eKrafe6r6Mpd4WkJV6qT34aUTHsbUL12ETtRH18weAakbTUMkUse9KEFwmuiiqXV8RfrKyScJhicpbzDKPn8pn",
  "key30": "2ZPmDFQ9rZ62QZtqrhmaqCrUC5nK3qMGtwq1Fu1NpXsVwTetvcm5yNrf441AaBRLmRrpoKbbnknHjkhj4DasstZs",
  "key31": "7aFTVFLMTKc1k3Hws56WprUVNWvxtfRJBADWTVbNdGmDEkh8m3bGQfhj2XHUZCQvsKdZJzqnL8Dptz2ffNAoVZt",
  "key32": "2kqoSTNwPiE8EsyRswGkVszdZkD94thueX7SerYEJqUyu4aNUGaj8Zw4oJwyuvFm6cdxG8a1VizB8mezwjPr63mb",
  "key33": "5Q5nTUAeUhi9sPQ5udmBPZjwHjH6XARreFpL19i7FtbQzRan5imJUtiC7skjf6FqdgLCdoUex1t89FJLsKjYz68x",
  "key34": "yDjnD5pz638WTRGuwMx5LyJ9dVdWnGAFDVp16Hghf6uFxHhiCpZT7wjZoH4RgDADzkjoGzioJqug5KR84XszmjB",
  "key35": "28k6G6fd64opgiqbHJm3xnGK9S7EQGMdnDsVgPCqVmTAVUr3F9unxhboHn7KLCNodo1g3fZwBtr6YubjZCNnkeqU",
  "key36": "3pRWJKG1SJ4DTJXyGDd7dP4XeMAU9NzdEeN1qjFBJCtdRTV53wi9zjufFj3u3GXeeEAhxskRhVFFpvmmpNDmjLvB",
  "key37": "Hz4yb687RKxRA1atW914eftLuvJ68R4KsfNFYZWPTXmdM2toBLqT9MdVuP7TmLGq6dwfaq72NYYRXSqjunW5y5P",
  "key38": "3JubprwkaHesDGbGdrXUer6paF79MwBx3h9cDjWUoi38MVP7a5ABpRp2XGqgJbyvRyNuysm8dkjyd5visPdQCyBF",
  "key39": "8U8gLZiYTpWiCbLELJoraDquVYEd6Bp9Kg7Yw2ovTFiEisWmu9bEQvbN9vwb4HhnbELNFqCKgmZasygCFTSCG6a",
  "key40": "2rrbEo5gc597VQKrHKpzPENh2DdajLAgK285v7HPV7V9VvhZ9B8hdwEyC3pgZgQQkkeyiXAx4H3zzLvPfLFuLMU7"
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
