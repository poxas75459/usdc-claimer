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
    "xXayfCMdjoq6t3AincB2mVbhbsUNmPzEPic9uCdsjCxLYqsRXXtMdR6C63LV4a16wwEz3XTfXy3S7JffbiNCWHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qh5MfzvwyQY6nMj2LwTbFDpU5mnoTq5EWqwLm7jUcUN7BksnLMFgo2kJccv5S6hrdEaYLmoNsxwWpxaoJfBYDFA",
  "key1": "5WdSwaPz2JD7DU6KANFPrWyDam6bEztDb4EEStgdyh2rj1Uy5tnqp6ExeKBC8pSxrE5ek8c6uCQvH6aK7kyYBRzS",
  "key2": "3Z6A8XJ1NnbWc4imBiLxJkDB2D5hftCwR4HQzXzHdSG6XgvhpYyUUfn3Ru7mezkFq6yT1oxKzeJWAWJfcFZunWtm",
  "key3": "5oVGskGmK81NcDu754CBmHCrxe5ou7ku9GDCFTUTZ3y2wWsn2mMeFfJ9KoYssQNx1nLkJmBkxTuSBCy892obMvwf",
  "key4": "44HM1jZnRRG2ovfNLgbT4yXutXqmiTS1RtxqHeLV4f3HmpNr8PwpghvxxK4ABAs48hXg1T4dCeL518RyKawMXRq3",
  "key5": "4JULxemQ1jVnALwwNMkhgitXhSuYJJt8K7JVZCkptSKrsTKJjKZ2hrSmUUuYYLR9WjFx1pssDs4G4yNrjGbjtMb3",
  "key6": "5QjW9DsE7QEmYK5D2sncTFC7q5Pjk6wrnTVGXjQUvJc8yg3ECdyWyVaJ7KEzGUa74A8UHuJa81RGvWqrN4vatH2T",
  "key7": "GZ7KxPPj4UPYGffaqye5ZZFErmmEnnCHCSjwUeDg91cRBuLLxk5Urhh4pnh1Ms5M4XeGKAqSb9moxG8syLHV66j",
  "key8": "5w1CySUrF93FHgkKnCEphakm59DiGhS6Z53b6QamfM2d7BQ5DX89DYD2E397ew9SHEVcC6KitL9pjKpTMXMbihmx",
  "key9": "2P1XLsfZ1bR6DUhb9U9f7Ujmdf3hpXwyQjVmCciDpPvDvroaULrwEQ1tQQgZybUfkx7GFU1bhnjRhsZhF9ZhjbU2",
  "key10": "4svcUGmPyGzQhcBRwihcm4Snhctc4JiYghm2mfaqGNZypekUbrq2E5fqnzF4VdhTYByPQ3j95LBrLJRVin8T6vXS",
  "key11": "rWE3nAB5kWejNk9Tj2qWvhN8WdoJW9mq7he5Jb4TDZR7QH5j94L7ax6EXHv5GeAR63PCgskXgYUHb6nBZw1eQcZ",
  "key12": "HGXxHUdjcQ8QroQ6PoxRPqv2jHLsWkGsPbWofL7jw4e3Xjb4m8fYgu8N6r4WwpRshZCPjC9R9bkm7paQyMGxijw",
  "key13": "5sKHadyhhJgvpaSS3bYuM57TXRoo2DBjajpwUrCiUvVWRC9DGs4X6D9uHcBF8BsN6xx8GsZwKuHe1vWyiJMNzXyv",
  "key14": "21JGnk6QcqPWGq9JoVCitzaucnbUaHqCEdahVjpJZBzEVxKShH8rktSBZsNEYGJL7No81j8AeBrmMFd8DL1HXf3D",
  "key15": "5HefiRxzbMurryVXKFVCAnfhESAReKDmTtH7Zr52fFAidj1TSYPfD1oDa1DZ3j6waihNFFf818H5aX9dg9xebx55",
  "key16": "2AJueJj77GkdNs2oxxkt6CJaUxqZA6629Ks2BKsPXZo9NZEyy7jWKmTXGHoQuB241TFwaYJdkkUx2y6UpsLaHwCa",
  "key17": "3ZTC661FAytGfCDWaHcP7HM9FxivfwTzsDFqJrb9Lv9xCHSodEjQtmTUbrQX77VaFrkDYnhQVgL9aHaPh6hGvW6q",
  "key18": "zPurPzxB2xKFoy62h1CWYrFHxhsA4zddquADpiHfiwuAW4f14svn9EsvVZYeYcWBRPDiKVp3eddfAamoKWY3Lry",
  "key19": "4tEweCsUSv2iJDfb7V2wnybn349pkVBraviY6GUs2i1FrAvaQ1zL1iWsFVXry2HRNef5fhFDMAK75dJPxsiPBcbJ",
  "key20": "xs3fxWgqRicoVN7uUwHu5NQTtF4e2tDfs48NUYgjQtnx2J68fL4PX914wnxravcUVGWiSYrBwkLPnmeGC7RAdSG",
  "key21": "4UHU4XrKNJ88H8Y9mm2VD6JKk6GwvY3zDLhzZ6krGaWE4YDTaQBYc4b9AM5Gx9NfNCm2aEEiResuA4jnFrMrQ25L",
  "key22": "dVWV68NfUJo2gGHEgwC72kJ23JwRmWGeSJCni2zX4tMNaReYjmUoL1teEgT3fGVjwnreAsAnuEkS1sF4spfPKui",
  "key23": "4MLN2c5qP6ha36UE16z9s9i446psaBdEcLPGrBjNbcTqeFBQumSuGUZ9kQMtB9eowGGZXhbKNXpmvD6gr34gnygH",
  "key24": "3Ku4J6bmfiaKxAiWVruNosB13uDYSvg7gjoQbjgqAzXLnhCWG1DgqxataAdJYRdaBTHbgti1VV5ZW6mVCPbMdM3W",
  "key25": "2w8CLYHcS3QzKJ24d7D4CgBgXmkf7M17KKpEYJkSeejaVPkimsxLzYx6GdEbsj9CgBWvrNV1eFBF3nUUBnFL4tAB",
  "key26": "4hEmGwaZ8QXBnnTLwj3tbkdCCr8bvNs8xL4vomDsEmyLLtyVfpnzWV71HseCcBwLC4jPn2S8uoJ19tGtCiKi9Qmd",
  "key27": "MkKxz2gsMoZg19V6t9DvCbMsoLRHqsAj5Mc5Ytc9f7cT4J9d4iejAM4U561EuEiqUVWEyZLcPneStDhu3L5pSUA",
  "key28": "5qmSiCT4kdS61JetFNafhRtGzr7k4oE717anQWZYM47MRtoACdH16WT21MLQKh1J6PceyCUpUQYigRkw6925AGXF",
  "key29": "zXjLfe1Df9obVmevwVMTiyvzwFCVrNCcRpSDrETK7g1pHrgQBKXYf1H4UpL3MbSty7ToJ7vN9j9aACyvwfARKH7",
  "key30": "2ENeMFscRGNDf5jPr3k7pj5iGZX2g17nzZZpfgzQ6AKFidQP7zCcKJGANBcUY2woDKUib72pMMn9VanYbmThQGpa",
  "key31": "5joPEkruyAa75dX1aRmzeqzfGQYrVaHemnZFatyUVQP4RdNm5TtPcwB3nduXqCTqPr73kGvTgwNGmzMZf8WoScqQ",
  "key32": "2PW2CDyGCj6uezifs5xQFdwZtTAXyq1LFPTzRfwDTj5k2b1xzW1B64W5zmequ5MSFBunc7DiPmCE17ArTPTBYYrk",
  "key33": "4xnNQvNkp7LErTm5QWNyVotqVdBruFAzLpZmUg2on9qrL1GzTtsjmJr5dRwt1GwwRWrVk2VeYiMM95JnBbZ6TN2x",
  "key34": "TRzmDjnVbWQziWjFt9bLXwjbwTrFXuHEhRBr1YiuASXfGVnyyGXp1HxHMphxprUdJQVoZNogc9eqkvUX1y5W4XS",
  "key35": "3o8TkBRSH2VTCDUh4FVeUkGHoYwSzSsSPGozZqtkL4q641WQXxL8gQiCAxYAKX23a6ofMvHfjGCs6AosLm5BWq44",
  "key36": "5F4ewFSJ6E1iTuEdzApmdNKe6XMfCmScVNGiTCAeveSGHPdbmewXm7iDV7RXwbvJAgBXb4UXiJVFNbkSpynncRE3",
  "key37": "Xve6qgsPq8sP5HVQZxSzPWjed4THDojWDTs1yV6ykD9C7Emj83XGjR94dc3EUMfsjsXw4uhhYfi47imoT5LA55i",
  "key38": "2ojRe2t3B7f7nJVJvkLsVgqfKCWLq9gTUQpPArRbWci3RF2oZnxm9aTSMEU6FJHFhDYqdVG7wkxhvKKKrr5zK4i2"
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
