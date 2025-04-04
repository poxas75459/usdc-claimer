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
    "4AiQsBj5HScwEe9iGPJ9iQtomM9g1QxvkyaG4czHVWfin6yeNPmcSB48FY4RFzN7TM7GxAzYN6WpuBk6n8HT55Gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UYSLuuDKV7YcDR5F9wptE8Mu28eGiezF6rMXDNZ9ZFa3eyuACVjXRo33shiZrthzcaTskDE2nnvD6p4Hf5Tje85",
  "key1": "5fHzQx2sUGa6AX7CpZANfLE7nKp119b8dJ5vRJbexAhyraRAWYAAkdXYD3AcTxXyNfbQftn6PoLp4bVK6MGvyyxa",
  "key2": "4CjAvwcAUApn46FESfjB8w8RSXuHRHY62uBdMABGhLicwU34XYvw6xxhn6DQTobn5fuF4rPkaPQM83thP74k9vQX",
  "key3": "4jGVTmq7grrhLhcdfzsLHa2WsQbCPi8biri6PzmwrXH4qeXwJvoDEaWqHrHYSrKMPyyVNmrvFxYJQq6Qgnm1vYD7",
  "key4": "DtiPC5L37rgGa1ejoC8to78jRe3idWTTELsrsz7Qe6pTX7BtBx9By2uyPX28JJJmvkcmpWuwukjh4JXJf3PjgHS",
  "key5": "3kuKhBy9mmY38BRYYgiEx9huSEWtGWdf5EQJR7zGnmyikdtiqEGNBcuVJbQQZW2VKwYa1syGGb56xHsH3PuL3DpQ",
  "key6": "2difzSqhbrkVxmkzqvaVa11fPg68HnkDmp3Ei5rxqyV4QNbW8HdG34oKrfJ4x3osT3NnWLSc8Ygj3dxNBTYeXwRs",
  "key7": "2bCrNVYR8k95hSLBEgjoiFfnpubZvERYm3nqWsg4BNM7vHkkMZhwLKX7LopCrHTnDBg3wdUNvH1hQ2NzYePQyy9A",
  "key8": "29F8FHp2S4ChNP8mqRj8DrxY3683rTfEUqcwjqCKrCiunwubSYFjLroVX3RJjXDxkea9uy25ivLuzngujnvdA674",
  "key9": "3UJkcyBLunaQxumcRbVNNZD2rPTQAwesH9oG8VhVpkMpzSczR287PJ3xLTG87f23cDGGdrTD6YzJSntcn3rwUwhW",
  "key10": "5d6rDtfr9EenzDBx3YjGUq69aJV3pbGvMc48sGxD2uUVCmKt8DgnpNZSCpr6KoUGyKxPadG4cV7XVaj7jQdjEjsQ",
  "key11": "jVq5yKh537xw48cMAEtf995RpgD8TnKwsRiLUJijhunaZBLcseETVswUmy5Eom2QEJEUjGyb7DaygWv3H3pGfN8",
  "key12": "4FCKpy6VqcCsNr7g6d1Re4pxkhwC2einugCTcuLNRwtDYwHfKkCfLTgnUTiRYHTuychZuhpsEBo1j7RgWucofX72",
  "key13": "4AEuxvCardJgtdV6gLUySFiU66tn352wtjeXeqmaBEnpXgkrQ2WAsr9iE5hjKttbnyCgsUnAEDAgqiryLtAP1MNg",
  "key14": "4ae6MxkJp45FggeG17NBPHiFouQhtkWGzJW47LTGhqCM6hB44BMEoKz4dTqm7k91ZfGx2fkrkQ6UxgSXr3FGrpTp",
  "key15": "2zwxk2jHxTQhWfbLGkepabpsg3o8ew3Ug1H7RiSNczMrR6q5T1jYmq1SJusnczdYFV4GaweFQZWxrMaHYigy8sh6",
  "key16": "rogzGZDMeWWT7PxMZvkJWqN55DdXYQW4iXcjqJeMf6vDvYCwgwQ9YseMDg7apripbq3xyXCXYzBgvQXmpzz6xwL",
  "key17": "72iDkRYWMXvdLY8yW4N32Pku7ZXNmdKcnUSKxt3RmB3fmGuDyu6vWJTKDFQoizMcFjY7Ftyd6WNa73WihuYdu5N",
  "key18": "2ga1eqcXxogBTKoUk2cBAzPR2a9weXQXgJK1ebcDAXCS5v1M34smKmKSrgNt9QGh9anebyc8rwzofT1N4eD7xzmH",
  "key19": "4hmJikaiAxCj8mM5T9Jst4ZiJHHdXjWFbKRjGyjZd6zxCCwVcwqWSzqwKxzXkFbKKy1bsS1pvu29w2MS2vZceoex",
  "key20": "39UgjgkZXTPyvz99kQ5qprZVriu91W8w5TVjbDbY1L8z1QUGkBr1b6cfsh69qTWyviMEawgiomXAWArgztFwZDZj",
  "key21": "2SnP7zkNCCBsz6E253eX1mydEw7a1qRiFwFdposn32iSLHr1zrNAooQFVAREcKSevUVHj5oK2HEBJesJKcrKpDnb",
  "key22": "5Dk1p2ERh1MjguuTUTWEJAPz7bArSt1xUGyjvns6knSEBSu7DNSPMQQS2rJirHkn4thfGhaDoCR1cntd3M8NcesX",
  "key23": "24caWQtGgCHqkxdnwJyUbrW65YcWBriuLcrkiwmUfGF1bu9ZEwJaMUCEv8jz6aTWehRpbUMHahkXygbzPBPKifmU",
  "key24": "2FxnTBxwKnCxjivoRKRsWSWw8oMCCsDraphdiaxT1bLd1MTUA7yuZQ9pZMYauV5fiP1gEvoBJqgmRJzb5tqXyh1f",
  "key25": "3ZAwEwDwCpzX62eP7spcq5TYsKrMCpGs7oaLaudKWYtYSAqhnytYDTPu4wqf8RDkxkhgKX3cepjXfVDa1GK3jsKb",
  "key26": "34UVPgKy4PtVazUdxUJ35AN1i8Zwvxxdpp9b4VAhnwggERndX4osqXUkTBPChMiUzGmpLfw6vwB3Gs1rdfNgwv4K",
  "key27": "45ptccRWbG8Gdn9XajBH8qGjYeW6bk5Phou2PnaaH2jc3nwSNPo4q19fU4jPj2xEswCVgsRV3QctN8yPF6GUh5Mq",
  "key28": "32RfmGeRf5Vprv7zWYiVypZUndCtT4ow4osU7yg64DfxEDgyDk7kiciSKFGqQM4FahTpzLp6RtYm54YEmXzWeBdF",
  "key29": "3s5k6Sy5EKorsyX6sjZ1Rj5D2GRFCB6SLdet7FCv7z2uQk8vaHNLfVjQduUXs8f2AQbS17EYybBmFsSyoDCwLr3x",
  "key30": "4aTUiecW8UW3mxXBUGWLqy3tmcVaRiZSoqFQypwsfoSZbrXisfM6sfdoY5VYBjpnEh6njmgJsS5evo2X6vUTnbjN",
  "key31": "5rhznS1428WiRvxrP84oZEp6sLnEKJVjWuLLrtGYEwvja121vYRZAPoFMLfM9umRLy9pTNgcT47rDATCweNpSd2R",
  "key32": "CSR6fc6GS8NSbuLhGM1Y8VjvaTJvk7YyAxTciewtBX2g1LW5GXYpu8GXH9bLHKDvYy2ECK1smsWVNUdxsMaJubJ",
  "key33": "2rbgSFTjgCxkfxChjQQbKsGaCAZNCLYf4K69gGhJuDgeW3dxfGJyjq1gTtwA4q6FuMoiJTtdnxmW9mooXB3NLgE1",
  "key34": "2uKbBM7qBBsNHizn1VBycbC6pTDANQW1RxM23DU6k1W2XZnmgkS13zZQkmBpNmcKnmoQBmJTMSJZu4Um8GqXCaFR",
  "key35": "DHaGMCrV5hN2yx63ZWT3oFcwJNa63Ym9Wa8S3UNYMQ4HAQXi1o47CxiTxQ2rAnfuW4REQfMjubF5U2nnavwheTv",
  "key36": "3Na1ojD95se7xCDixU9G9XdGjW8yGuavys6SYtfbQJE6UPnFjhSJui9J8TisutNnZNa5NwrYJsfWXPu1tUotfH76",
  "key37": "U4AGk7fF1x6hkJRfPkjSvKNmrzCjTJoi4sWCPSYC6LvtTaZdMi99rsQ2RnKshmmb8ABGbsSoXCsnMdwKcvm6VZp",
  "key38": "2fPZErYJrLi9Uc1Hd2fWdDCpfRTY1ti8T5afygLjVaEE7heBd1fMh1y95NPDwFpWcUkmU9SRCodezundT1fF8QFk",
  "key39": "4CTirB2jbJBMtpuhdUNS2Ap3hMa85pZDGAm71YGK9HpYVmA52Z94FTX2qbXNZwXEtPxRWcqQVZ7GDpKWqfBAM99e",
  "key40": "E5w53RyKgiUAMyQHhfHqMDrvya9oP2GfdT1sS5BG6nM39q9QzwHz5UuNPq7CYagcWfTH3TecuUzSTmXJWr9PpJQ",
  "key41": "4NmRpGBUgdyeCDiTB5icFb2F6qriei7ooPL7W8odsxuDmK4ZxgtUewyX1dyP8s89gcsFrd61EdPL1RTE8FhPyhzA",
  "key42": "3o5QEE4y9Z6LzugV1Qh8FejvwamzXkQtS11rGhCQJFZUTUWbFUGmWAi2LwjN6hCGAKY9N8n15hbuow7YqbqEfTeZ",
  "key43": "5X1cFdZuAYsKVWeuat4acqGvtsEFPg5x1e3CXrSQdSvxqCr3qru8bbx15NLTD6pNBtmeCBqHaQgErQVgkHmUBU8u",
  "key44": "waGFKGrP7sDSH94JFMmJ4gUSZ1M4pFnCZ5EoT62LVDX3gFqP33BoqCvYfMQyyDMRFqMF81aSvywxZUXKR3rJxEB",
  "key45": "4VUbqzvFgQgbC4xipCkpwDR5jMkemSmn7ZvG5hN8GB5YFG7NLVVsMGFVfySXWEgAG1riV8GHALC4vKT8vNM3uMa7",
  "key46": "4oRrW9Rnvk3QpDFNiSZtmjumK7P5qG9TLv1rrq8wnbfTRHjnX1F6Phh6qLzt414hvoNM6tRyURZphHAE4fqfipRo",
  "key47": "iMCCmPstwG4NaD93CrfWrjkBcqsQhhiYqpsDQb8M9zy2vtqhC4QpwTLhHeUtMYDzmhb4gPQJwFxMuQNtBEtz8Hk"
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
