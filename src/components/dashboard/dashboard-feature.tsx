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
    "5hjqmwe2WqrLZsN1g7m4VFD2yeAv4ksZtsoZDV8y1ScR8McPNCULyRs5qrmY5FH8WiRi5xger51LX1UTy93Li9Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSh9aif34Rcd5QtQZGoF2EL9QGiqvXJZPr4cJLRcFw5xeEhkDBjdTjoEt6irYtcTgGfUKen6ZnC3ofaq9gbJM9V",
  "key1": "44xWqvHukpXrPhvtUZ3kLvKRGsTAcYe21zFeYQCxJnuyzKwNWvrPbbq2QxQa7q7cmxeguEML6SYHz9qUq6mKJ2YM",
  "key2": "ybJrgvYUjb8TuL1Ma7pSVm88ux5dH9oC1HYCwE5f5xMEMXwP71MG7iWXXdTPbmE4dk88KbmrUyyCx2GUsbnoW3M",
  "key3": "4YD5ipH225DTj5ptCPH2zBrk5SArXXkfyMBigfZrJR52hrXo6XgU54gWcMcu11jfAxTTPisPqwe9qRtFKqbVpgcM",
  "key4": "5UYzFxHU7UwHiFE6HQL98cfrDJnYTJjB25sq8E1idRcUkhBoMdh3Kb1GVYQUAXuPaY574U3SLHTWB1BZbemA7Zyz",
  "key5": "4k3iTrMV6fc2a1z6Dp9Nc6i1FLkBc6n58nFm4atNsRgDsQUZpA8QEqgdaHf8vMk4CNYE1rSZaokeR4LFCfZHGEbN",
  "key6": "4swkZKhfWFxVBwNcL7135i9C4zQArr2jnfxhi8xcM4mVRDQTtK7EXXDhxGFpyVcQCKVv5ye1yKzWtCK51JLmySZQ",
  "key7": "2h7j1ejfNcAL7XVRVKXSgN6xLGr8zXzmgny2xY6Q9ejPYQz14HzCv45CemRN1zNQVoaU3yn15PWkoUpKkRSsJZwT",
  "key8": "5SBkwNXwuEWpnoo1ws7GfEMRCYixsxX6b2oKqE6LHMkQ8NriZmpQjmDWpSa9wo3aEFAjMF4wM8xiaQoJvMvjpwj5",
  "key9": "42VH9W6UFujz6sCNkJYRoK1SPbokhY8ZEJT59HuPusUpageANd7fDwx6McLnmpGEaR5Vv8w4Yih2WLqL8uRqihmN",
  "key10": "yaVGP1idQow91AGNnKoHvwRYhkqTKJMhMsHA3im6ptyrsPCrB1hsi1nAAijCcr3Kd3A8qBe3g26TUckd78YsAtp",
  "key11": "4rVm4f2zCw7SToANSaFZLZKCQxq6hN67ZNHymXmHcX8LUHaWQGotUvUU6vCKW7XtwijCAkBYyCc7BtKXkSVhStz7",
  "key12": "27oHHTkRi667mdxG3RPavzJHQT7f15QZBXLpHUMNYzUjYXQTgH74TsSGiugCyZUriP66obAR9U2p9oRpYbr44BdY",
  "key13": "2xnFvoE6uxPL6aJR5qQ6PQmy1bJrEKdsQGAWdQhFx6udMpNc6Ppk3J1g3FRrW9oREPggbUN46abCEX7RwffM6D4n",
  "key14": "cMybQu2VxXcJfkhbqsEj9tiJxGnaA1MHhZZZPAaARgXKm97aBgWbckfj3jgghr8mFS8qdZ1gnzd6RDBgyjKjF5y",
  "key15": "47yrda7YnJc7ibK67fHjoKSQW3MKbd95s3iNAFTcJ8gjJ1tV4s749pRRp7T3NFGQNxjutDnxovg22kwCyTBsy6J1",
  "key16": "4f8ibfN58ZfMPW1LCdtGnMimpBhmgQ5QqnqscMudwXWhFxoZ7YAr7esSvZUNdazuCoDBGQEaUNUsEsFnoFCT6ziV",
  "key17": "5oLitWr2rvgTZ1JLCaRNWYUCMntB9DUBhBL3MQVLQVnapBYUmwj85ihJ4AT1gGpPhVz1CynH6pbEKLEZyPcwpw3S",
  "key18": "2c4C9cZzxHqYvTkwJgGSdWtT8Hw2iZVMKg5R9jB6LSyzjJ82VgeYS15joJ6hZUtDhEPLAdwcQQfhGCaXV4yUniF1",
  "key19": "3cxSvVszgHjj4puM1ucfdPiGMJsGWkQgSNKC7BwcHrBaVCHmLirMuBDssPoBNbzeZoWkcWraXFUJCGb7nNerSXsF",
  "key20": "2sAiXArGUWL4EhEiPaP8hJt8w1Lq5ePT27gndTn9fTLBKkkJapLpsjABKLNtLHCVmn7BNUo4s1qa96miwAQBKmxa",
  "key21": "2pyYPrhcyuvLWFAkZBXkwioqD6zAVRYm6LgmZNZB55YuQiEhYL4Tw8iJvMaaUKTsAKcGCCCZk1EmPdTqXd5C8iHm",
  "key22": "34ztqVDt5CzCsrgAvVrjB5vVGPJH9TBrwDMAYzAiCxci6xxK8M7weEJUxvFWbC2eXFB9sGLwgmC5FTfva4jjS5sG",
  "key23": "3Zwmkn6uAjK1iStqMFb8gd7ToQg13iL7Ygb4NddDvNW29a1iduN5BKCxizTvLFCDo4SSsqcC5cJcPE7wvco2FSh2",
  "key24": "t2EyXniB6wkWjvWmU6nqUDUbmvjGHD9saDRUULUB65f5uCiFmv1ywchtkF7fFYZP4gMctA6w5hkLAsjEW9FC7XT",
  "key25": "4Q8vdvfmHq7B6Dbgj54UQdFbMACEHx5Ev1UYH6q7FnC3j5MuD7DAKVvTCR64nP7yHSpZNDVwkUFFYuGMCs3Fvrzd",
  "key26": "2XGTdr8xxoHBFBYPB3K669ctYTDTuKdkxsb62PF38HBD6vfTBvUatVBVzJityPSRFNEEiQYzN3hUzAoNEiNSom3Q",
  "key27": "x8CX9Hp7yBMefMuJeEF3NNPNwxMGss4ocrLaUQzKGrHFbq7Ei7u5SngNCSxfYmx7ekcK1rwRgpkhtSgYCeXc9Pw",
  "key28": "CiFmWPmZ6tFFvWd72yPFipEigy38jDGSsYVEZo2ctbUhhVSLTfMGEfeNT8FPze4zeDa2Q8AFfUcbFDNowGWzcvL",
  "key29": "pGrVyKvrWA26S115sKTzV5CscKWicfPaUvobFKvAoezHJUT41WTSrqLQQeixqcy5qthPVL2W9MCCLtZZp4PkJL4",
  "key30": "2paWzzfaNeZJUPzmYanuufZD8pzYngnbnvdwsjRR8iFK1r4tR7bdV2v6RH5NiAnRmCMdycdYJ6xxqynVybEwBvoX",
  "key31": "4xrHu5CgQBbYzXCT6kKersca2JqMdwAapthSjcsjfRfZbEc49uEkbeUCxpupJFgTdKyE1t3AMfYZkv2c2H3rgoZh",
  "key32": "3DRVKTG7CEKWUMeCYrrY77LZoGM5w87LL4udr7MTToiho9ekaWZkda7SYGS4mrfbxayUiheie2RLKQGUw8n4nBCa",
  "key33": "Lnk1N4HBJhuU2wiwF29fujnSV8ErDXnhA5rJbcgmEnUdZmLy7FGWfhsCNH7XS5q3rh658eWP852ocvNuwF4dYrG",
  "key34": "EsL51YagxZcKkQDdFjCo56UBMtjKD1SeQ1CNGxNta2XqPSZQ637uE6E9YyNwqjcka332HCofVd1fwmVpYSsrjZq",
  "key35": "NxaxRmTsVme8FzMeB2x9sp2uoy1Ju5yu2CG5Wwuu7prm45inSm6wevuyLjLfsr7k9bD42RGFEjrKA1tg6dCRg9G",
  "key36": "2PD2HBuq7uGGGf9toNmqDs6DzQG6qkmbSieXZ2WpMG3VKq25kGDH8g3qYSPzahoNtC7RJdj6pdVQTcd8ygEZhKAa",
  "key37": "4W6TgCnTXxFShHNqb5yoVUv8DghoGLnKTmTUYkBQU2h1f9cR6pLEeX26ZLww3LZF2fBffe9nhnstoCWkGuW2DR3g",
  "key38": "2ATYUH88rBMS3eYUhvJp2JkQstpbAGWF18oMiVjTmT7ja2dMBBLxRgX1qsAKvHtgiUTAciq4ox3fcrKPGgVihVUa"
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
