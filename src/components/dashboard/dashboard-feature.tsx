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
    "2u6wHP37SeDA6QBCjaU1TumhU8AyWvJ2yc6nbhnRX9G9HGwWiPhuorNpMQJWCtzjy3Nppq2bDLF6VFA36hVGTPTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjrVwm9qrYqbbHsEkhvtnct7BHp8rfKUDbfAYdFZiPY74gNHmJEJweohZDAVHgA41SbiVsUfFUjD299K6qKYx9Q",
  "key1": "4BUijyHbprZUuvwouxabtksUh8DSWC8y7bUUXYyUpK7MztLmrxXp9c8DxQ7S6vqTtVPCYXqPuqaSgvBYKhmiq4xD",
  "key2": "3eZx8o8XDBUJ5qsTPazS7G8mEKzbWcJBRvbmxm8dP2RVyKAcXzU7gE1C73iBHgVGAtiTwJ6Ljfx7YKtixzLycP9N",
  "key3": "p9Y4TiRrsjd5oraYqgQqCFktscmNHAL2ZEXPeVVo1aJrAfsnntBSsAYHs9Dv2ibjN8Tro7oDSHydyoPWp6iSyf3",
  "key4": "3txYqhZPs4hBA4KNjWs3qramKdz66parw8qKgHTh4YpXCgFpcmoHh9SrkXWyFWUvt5ArMbs4sNE3cpnLZqfCVpmf",
  "key5": "iErjJvu2YXN7CdSaAZPjUeZUhHXMNCT4zZCYoMYFNve2aUspY39Fk8TgUUgMQvMyiPRtZJqNQk8xnWaEoufawXq",
  "key6": "5b3zbTDN9VPkJbkQN4yoQ9C2moVWT5ZDjDBxe3SLMFGUYUi4o1eU4KsjaHebs2XAbb6AUrHzRK3WntUmPFvUfXrd",
  "key7": "4U4NrT444xHSXhCfZrQTHVfJj5J2je1YyAiEWAYSeKtvHpuLpVcXCQ1SKESeRdQa4ypEf3avTosnA6fPeyJaP9cd",
  "key8": "5WpkgKsARHYWuNHzW1THPqkqY1CxLymhKfmnBJ62sfytoXUpJaG889YinmNjn2dWABvtpUfMqET8zxr3yfy8qajo",
  "key9": "5RCSSsaVZgfQi6EP2G8RNYrLuvc9n12Uu8nLZFDZTdjoFbbxgBQrxdRNgugsyrwK9cSXDGGGxkc9QTipZn7nmtbn",
  "key10": "LUdjFWmK4zmbJP2ahCho27E1teEjMXFYJLLpDTjgJMRLQmd2eWiBhdDi9HptnVtVLjYBL6yr5kJqdmEP9QRa2Bp",
  "key11": "VraAkvCcHKWG1wAzzNZAR9RVyC8okRFVZHeREKK2HJRSax7yWshpAgWWe1rqcSopouHSz1DW4nfczgLjgdF4zQV",
  "key12": "38cYma5mPcXZM9DgdhPcfGTRnA6PkiVnKWpHG8W6FaBWRDw6u8vbG8tyD5i6dboJxTz5T9feRPdzVcLZD7foeTK9",
  "key13": "28hskFtXhV32iGa9otiN6UP42Yotw8U1kYRK5z4XKmm7D3eSBGExdE6VDLqSpKWs6oGJYqbb1Rdns3sB172UMtaE",
  "key14": "4ij53KsBL1PVhDKh88axQamZwaQv1mG61s1dgcfKHDrxHQ5JzipNu2dUio68BGcnYaV2vQHAWCUzgt1zhc3tDbtM",
  "key15": "5MCN8bb3J2RNVt63JFJ85beQ5AjfNSgYikSzeqdppYLYZ85JgULTgEHqHyCPUtFQg6r2Lu3WZY6qxZ2CN2ocaXqB",
  "key16": "3ypfZvoWB8xxNiAJwkSfJ88ov43KeerYwNph6BghdcQn9HK9PkgSBZ4otnE1UUQ8NMz4rSQ6bbH8xozobHMZDRo1",
  "key17": "2RTB3UJGLGVBPa2EHq5PR2BStiu1f2PndMtwejsr7Sb3z6wUN6UcLyRxysGhPLzbmKTebb1tQdD1f9fgLpQA2uhX",
  "key18": "3MZMStHSW7qBEpNV1t1pG9edgoFixdmsQhoy7brWK72Rys6QgYtJETxBBBc3EKMd4dN42HGtHjtWyFTYH4TrAggT",
  "key19": "41SUX9NmyqEUk2bjfPhCh2TwXRWofD2syjqt7B2AM4bEfe2af8v2BRQkTwrLoZAwhjpV4SUPkQrM1QBAjzaJEeuc",
  "key20": "EyAQAwGp3NYmSNvfgx4rn9EdhsRmokKDedM6ufSZTHvEV2jBhXBw3MpoyQyrgCTjBkL6SegF4UBkAJnaqmezGrG",
  "key21": "5ioTGMLpqSqbeXWZrF9BaBKvJXES8ovxUqaeasHGXBrDECLBsrFYFRgqeSekknzaEuPPwr1WGAtd6vr1d7KhtjFK",
  "key22": "5PPWfYsZH5YRCGvEVcC96reAqcGNtPprEZNaZh2pDLvdvGNRUpQo1zbhxtfKh9o2rwaLwJNR6JNEJYjrgrzqnKTC",
  "key23": "2upvaey5ZniNAyq2KYDnN3cgLaSQcpUqLfMxUrVeFGNCLzKmmTgoHHRXZXwxPwpAXFa5VcNymiyL7ok9xAMYmE9e",
  "key24": "n62EToZLRiv9PksPFbRv6n3tBYSU8bW1dXEibQDhfAk4vBNULuU7sXXm8znfUndt56ioBFfiQgtfieG8D7EfYJE",
  "key25": "44ADLJodtzHkYEGMKijYQv2BkpUeKPXn2YqVwSweixTGTaLm6z8JXhR6L1Z5oyN3SYQt4BcaGdhmNfwQEYJ5xpnz",
  "key26": "2YYinEeNGSxugWzZawWQTd2DKsK7Bo1oAZ126anz4Am1jVY3VKUvvdt6p3Hvg3R9a8Qbdic6f995FdaLwRbPNdbv",
  "key27": "2v3dwNBiUJzLP7GktNiuCqjpWmcFnynmV5eAzUZGquWuoZTHN7N5vnmVLZ13zch45pwiRyaNrWu8gki9Ghwwkqhp",
  "key28": "48HwkM2BH5qNu4Jj7NWFcjGauCx4qNsBTTiNTEVrCprLWSTyrLE6h35ehVJiUEm9VUweZcKVVe8abtSQ3fWyS5en",
  "key29": "65xB9Wbym3Gk6pgYTK3ymfvi97hxNxp1CxEsoBPCjmYzUzkDM8YMRonf84XieZcQGDFsPCAQ4nmfyCojGW5VgpaU",
  "key30": "PDgepdsTnGkjn4vUqupk8LyXigLuP6CUYFFrCXm38Pe9aVrk26KezzZTajXnpHbbz2ngrpGtXxmxsfTGUxutn5z",
  "key31": "5ozzEhbh9rr9Hh2R8Lue1HvAXyMaPcejSrsUigASzKv3T9SPJWceMaNZJpDvHafECKGpRGfHzeLT6VFYdxZDjPgQ",
  "key32": "5YtVH74Yo9F3C9gje77hPWTvBqiF6vGq1Sr6PJ7ipoJMeqcfDJMqxtUHBd9SKbA6f8vPtyWeT42ZEhAJwQvFAEzr",
  "key33": "242hgnfpts7yZ47FbxNAfHBWnJcFA5xoPEJtS8s9iVvnGjXoyL459vH97EKqhjNaWcvMzpL5RkCXysH8pRAb6YJ4",
  "key34": "5fcptiXSfYtDmroZaRP99My8iQGVhm1Mu5CsEuZaWB6k8P59oXXiufREyZ4DBkXLhedokrhL8365xRmqsrhv6AKM",
  "key35": "4MaD26pTeYpitXMCYVh5Bu4Dv4u1kYbJyAFjCoFfRa8CKHBFEjhgZfWQdtNW8H76kJJTECkUcfBY9tYgrEsYzZJg",
  "key36": "3bfkkcvnLvNZQ3nQvRHVvixjZ3v5pQgcG18cwc7nbCQYtz4pk92fCyDudg7Zbbya3w9Z7uEbhPeFSTVXYPLiNs1n",
  "key37": "B1nE99w6qaSFtoiCekv7Rf73cScVM5H9gzTaqKg5MZXBbw1yaqi4d6pfvXsrPLhEUeSYfJAZxJAd2j4kstXzZGB",
  "key38": "38q616tPuP1cb7xepfGdBaYFvjK6R9DU2d4ZCHKxTTpJy56KUN2HGLBECWDu9W8x91B3NT4QyjbbzRXfSZXbQ6YG",
  "key39": "3tDPYuGwySKE7iJDRCCuDSyQH1hUfPn3MiSprzXr1vTjuTrddGLpa8YF14kD6wsxEoEEAn16o6ZowHoUNSjpADir",
  "key40": "62VzbNeKgEBXMDvrpAuA9niM6eJejb1zm6ifjGjKfUSg1vEJy9Z72VBMWSYwo36tLqrRM7CuazgvFRinTcViKyqr",
  "key41": "23Rt275uzTxvY1UKModoK9eqLA6aEoaDzX5in7KTnA4x8b4cNPjs8FCBTtehXU57tYtei4PjQZExauGitUJbQsLA",
  "key42": "2JNH5Bk4GPrBo2XCAJZnu8XhDwueBVBi85beJN1AKntZS6M79y1ztssVYtsMwRHRzQxRkRFufggkD2267vnKwNBQ",
  "key43": "3Vh5HDsqDrKNnLtBQP487n61AXTug3LszZurWNtt1wChz1JxfLkFUR55BRAZFoEAS1sS3cqvMjDq9tUK5PbcyiQZ",
  "key44": "65EV6c8tscxXxgNGAjgcUGZrWPGDn6P789oV3MxEogj6S76LEDdJQV21uxiWsfxyaR7siXmGbNu6EUiwjAfRd3AQ",
  "key45": "5mPzhEruJsfv2YPS7kR3uGP4Lje8ZtXsK6SkkoqZZaZQ9vueqd7uoDVNhB4wDJBe2zRnJPEfV3J71ekonx4ZFdDt",
  "key46": "5Hk2kBc6qjCHHJ6k3aTvbH9c3ATSanoGanduqMR2svtDEz5d5RXm3LPw4cvCDyfR4p6Fuu1xp3dNocfskjn7xFWf"
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
