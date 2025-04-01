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
    "gdBe1RA6yHgbdYq4f8d18wuFwKBf6jqxbpsoCpdSspwfiPATswmRCwKdKvgaAztvPXPCy8murp81eoN8mqCYYwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgfHHNuhezcsqKG4y8cWQvg7m6kAeiL1k976pEECvxB7oLJ2vBPgvrxa1uucUP8M8PEA2ZqcPfJnTb5URkSWLPd",
  "key1": "4kwNajiEmuv8aYqPxGSfJJdHT3BzkBpa3SwDF4NVBj8v9JrgXFdCKFyuwegtSbDXRzzjJcrinu3W46aFnwPXzr7Z",
  "key2": "444MyGiZB4Subw1GdAcjzF5CgmUx8P8VsBWx8SHCRZPA1BaYgn4YjBxskfe8BaG6c3WaJG18ihGA7r8ETXgwLz1s",
  "key3": "365vfFmRLFirLsstji52NtbpH9u8eCR15gSH4qUdpyyNcTVVhovyxfKkb9H6W9bJ1NA3rwdsCMx6btACorvUvGy7",
  "key4": "2XwMXYo2j9e3ABazJBzvtJMFJrvQZAvkrT81HRok1XHiGdGMaeuRGvGALSYPVxhzbDHynhdodh9e8MxBkgdUkrEE",
  "key5": "gSQtZYEjyCZ12odLrpctwxGC1L9z6rLM1tU6VfgCnywo4qL94GA9nQm3C8L6bVz3Kp5DVMTNximgqMnn6DardF6",
  "key6": "4QuZHvfVwAoVu9yRJjZafzbUNUVQ9x1zPRrT2HnsDb4KSLTS7mNcAHYKmxgpTk36BaUD9V9az5FsGqqtkL3RjCq1",
  "key7": "3TLzzC6c78vVoPqbRtkp2cKue8Fzc9xc3VFkUTD7Kmb6DhSQe8Z7zu8f5Bv7rhgLkSPhMPx8MFTk1vkkQaGfavLo",
  "key8": "2mm1RYJC1voQoYrjJo6pPV7GRtB7UxRouGrixDSXrQSHzvicMw68VPhCt9ymRKkAhDqmkNVvN7jpgPn4BzmksdEk",
  "key9": "33qdrjM1aFpydVtUmyXtxkjuyzFDCbLVCXKG6bnLvK4oipSj7hJYSYpCVyYUYSwA9BWY9tbFQAouXBSnqGmVDd8E",
  "key10": "3h4v8F6qHkitRPR2tF1zp4kvKs5e5HD2rBeptgHgkVkPBgeNoKH2Dj5cgdXLnyLUT6c7p4cXLrobg92MjspPV5Ay",
  "key11": "477dzFLZRBnaYopqDJex831DQM3zHsuDkRfqCQ2tqCUpGn7BYYU1ERX9fpKZTAACbAxnHQftgHbK7AiX7tqSfXKM",
  "key12": "2EsBW9ShK1wfLkM1WyVVLqBRJERh9U3NTAeD5ZiEMMFUEsfCBNHyTUrDeGqTKiWMfPAjA8Zz76obDHJcnxe9yvgk",
  "key13": "zBGm8LSii4vNspSGKA1vbqWotGLWGsFj8VKHCzKrd7N45gMyiGRqudU7LWFgmdMC7nuuteavAX5aPrbDGzGajxU",
  "key14": "s2TEq1uAdfzwLSYMyV9Fox4FK6HyRcijNkcroEpV9JCzBA13KHEMQD6sGzAJVRm1d9xazsKtoN4xYrJ8V6gDGJS",
  "key15": "2Ma2t5zMzY6auq4tNfh8mTBCTZb7FLe9XVrvsV8nFWxf6kKhShxojBhqMnVF3c2dQb9Eody88U6gFnoyw6DsHicE",
  "key16": "2Bc515a4wNWLuc9yvxwo8T9XFBBXqcZZcUXxqhC9NsYpgSQepmQK2c5GGhmXqvd6tDdT8NiR3CwQENRUf7wvK1vt",
  "key17": "3aGm4VuniG7eZJqZR616qxvpv4KmP8ppyTxiBw8XEmgWcRnysNH3HohPDvFr5M8Em9cx8uGimeo8K4e9mNiY3jJZ",
  "key18": "3gtc82rguMC7Si4NQssYR6cLV8ZGZEyJ1hLgrpGwoJaSUWaviHhMWF6T3gsRrKoXLAjeiZx9crxmQQiw9vzZdkck",
  "key19": "2ZERPAnCr4gTpALjaDs7xa3Km7f83RPVM4Q2oYvFe5wdky1RF9Q2ybhJsjAGvY7iyugknqg637ee81ihmpM35EY6",
  "key20": "2KvMZaSRkBCJbVwQoB2iYDcSZAGPQEcEq4fVNEGxgquWRkr45RM6hM6PpRUc3TQenBEVU1GqVJrMzVnb17UumyFA",
  "key21": "2vSF3MumucfKJC1mve879quCFqxwHNohWJmeFBZRKMi8YY2kG4MEdf2iBpzbf3s8kXkxrYeQDUHaPRztDcQWRSow",
  "key22": "5EPs2gtx9V2Jag4SSZ7fMWR17e5MPu68xVQ5hxRWUMZbkLQfpGqNB68iCRk29pb37ckaEKXVUYE2N4C3zFrHvD7N",
  "key23": "QGLyTwi9EPNpht1PCGukANMrQqJTFtGHymfUj9UFyvpFVrMTbz9f6uv1YTLJuiAtY7F5Xjugb8qgQir3vPpUiJq",
  "key24": "56rkaqa5776kgbT1sEw4ULC6KiThsTtZ13URDYsF2q7z9rf5dZpRvZELTHd8xpvNxDPuiiv3sRZNy54WXgULBLv2",
  "key25": "49ET4EbCbBJXnsP6uR7RdYoucwrWhd9cmMsbWyJqZX3oLtypYNtm1bv2FM9kGfDMfARNZMPd5Z6CsAoWF1D2txJ8",
  "key26": "cMydXKRRmijaMFVsqoPcEP9JbrRBamH6ANpUoUVwKWGo2GPYDyhCQpEXFp4W49G1vjffSS1EzQsWuMz8fXWGZg4",
  "key27": "5a7WPymthj5QMaJqnytt6AHcoN1J6FdEqjDA5vZeHwYFjDjUxNrrmsAYt5CRcFEw1aKiCbHkWXDip1BEMJ1NqRMR",
  "key28": "2gDMLv8WEeost6eMzm7rGuBhssKYbuegu7nUodfDvT7mb4LdKuSEjkHA28g8iQSqRhmpebQmXj19sKu2ZMk7cLaz",
  "key29": "5RfPXigry5wm8N5buyti2Y5VGpyAYVG4xcrfdMVrFkx5McXApT5MEoznBjrjf98vb6ayZ8XT8m7LpCw5uUGga2Td",
  "key30": "2iaSxtW1sa1XdXMvpB6EHfPq3THM9G5FbfMU5ZNbEh3CJSEoxzMxmmX92QWsKzBrhFKRR59h7TSwX7W3tTskFfH2",
  "key31": "23qEwSmc6f7efFLnZaHsr64CdRoUaxfsrt1eK3ea8DkEENukA6MTrCuVHKDth3CFaLgKUDwhmjEDDxRcMFtG3qjJ",
  "key32": "4Cc7zw16rS9cPST26uTyCsHLKJFSyLv6kNuJuuFdSgbJegPXReAAoCR4rUaiQeq3JffqiBFE7chUwo9RcVxgptBf",
  "key33": "5WPGC8Efh7aGu6wLP6pi759G6994uYygqcpX1SqRrSwtv7MAgHwnLL2R2sZxzFYeZeAeiLgsLtkTt8oyGQSKJ81",
  "key34": "HJW1pkkDAat6DM1RRQkmZGaxjHBt4BZzbf1VCsJSNgNuSAF5mTaf2UjQwPFk1s4GCgv6aDSLVCjaTkcpkDKEMPW",
  "key35": "4qiNhrzVVhpUyCxGHP1Z1WzZSyEN9H3dewoJiEF4xsYq7755TJPrcAPEb4Ecg8zMAtKXBGspNwL4XmJEjCUNULfv",
  "key36": "529fAJQaWyn83HMZEMXM5MT25d4YAJpE5rYYciLgCnJH2yAJAB8TeyTkmFnBQWTmxTFVZ3p8WKWWtt5kxGvan5Qh",
  "key37": "5uQriquwtbgZFnKwsgKmfpNStLi722yzY3fxSTJd5X7BP9A2hi7MSQ1TzyKR8q7bvCFv6yoeuFCoWE239EspS3So",
  "key38": "55WSggo1dcajKukgeBsecZyviuCFB1PXaJgcRvFFoWJzC8p4EV6PLGD1dPmxjjatnpn11GpRX3k4gogD4fP5eshH",
  "key39": "3YBkxPAaxzHrNtvrE26qWaDpi8dS92wdBsM7SNL6zzTxDrB2rCoKi4V2e2zATkesQgU4shr9NnoCGoDDHgskGrLi",
  "key40": "Cj1gve3esM7p3jjmnFpfu4xJbgsTqNPxsk2vA9NmGFMarKePdMQ2dXaE852gbcWHoWjs7sQZQox2NZw7RHmqiK7",
  "key41": "2YuJVyMg3SdYt8WiJz8cu3YdhuEiBd3K2iWDnSb2fnUxoJgz81cb868cumXrRQNj5LPGDcbYAj2eqwMxMBw4CKZK",
  "key42": "4QqyuhVVWNSVSeeetASVjBoJVgHt7AJjFEvw9A49wkyUmqu2kARoG8ibEwQjPQmCXP1ndkYfgQuBC1sGbxgNHbsE",
  "key43": "4ReCTAttD1KLYAJcP9SsNtECbGP4AP4eoKD1UYwnkYfrJ4h9pgn5ykdvdZTVFwKLr9wHqkg6w35Fe6wuaittqwgc",
  "key44": "j8whz96D6Ah1CAtBSD1wbNRFEAe56q2tGwx2QtrYvB4PVBG9ZpSrFDMzcTXq4Ch68U7MGF8Koc3NVjshRyfVMYW",
  "key45": "511hfdkhY5CNKvLor46egh8TYVQMfBFzq4YsxcVsy4UwXZE4XxLmRBja9pxDsvVPHRnbkDNz1oWv8FAQvad3VeH5",
  "key46": "3316v57iuvnvhF8EcfNZTDft93G5N282ztE8nTjW769Q8kHqJK9ZDaZ8Yb25eG2vV8DHDyprWHMDMjASdR5kLqug",
  "key47": "4YQt54GiMM9ctuxyzCNdV6u2s4VSFZsEWLv8FvZqFk73jtrqhQNe9LTWEGSC5rUp2cmycFBdiiyEf5FBqxPmbvhA",
  "key48": "3rmPNiK39sw1KwnSbyDxEJT1kkeu8HkptrrRDicGeTBJW3kSn1f8hxSoWwiGcJdT9VFicSJA1Ak6PM9dBtJ86aZB"
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
