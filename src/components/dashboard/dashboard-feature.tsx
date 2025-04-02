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
    "WPJeLpQXsC7FEoapwdwWBzZ1tnTjXdjC3oiSofUTKmUG4nAGDiezL1h4mJvo7WAyuBrfXnGgjQPQ6iTp5phW2sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onNVqAmbfcju8MESZZZw56irC7uBYN6oQ51fKpHkd59bacDopipFLDyXxRqrNxWSRwKmCbyB78C9d3gFBUt4y8G",
  "key1": "KfxZnWkm62HL1wxRHHUBj5qEMKRBZAN5z4vQVTrwbAE7eez6HvtcErtKjLAvQWyCk9FCAdqGVTXmG6R1KnZx7F4",
  "key2": "h2yMyEZ7nb1o12hbbxPAxsmr3VtXU2ZKxb5TNNBmLDNFH3Wuu5PXP1FMaMGDYhyjwpTZ6Nf7fgoja7sxfP4Xp2H",
  "key3": "5G8XwEmkmr9S1nuajkdWmvmfjpRPsdqsTBb7VCgimp7p4Q3f2onqDu3rL9vnXNgwsBoqRRGPXgpDmA7ghSV2eSjw",
  "key4": "2XJ4r1iYvi2pUDVjG1Ts4WQ2wyrKxJMzyLq6SraXsgdBE3nJvraZkqBqpaQ6AYCdUQJSynehZiCrsFEJ8K1hChvz",
  "key5": "3CVC3hPWb3MP1F8Y8fuuq2ZWgYFmnAXW3iQHfW9Y4veTeEqMS2xyxQ8cBhMThYKVfF4Jj48VdbWhbxawacqGKAZK",
  "key6": "4HLxQtuxQMzR3FErKpTBPkMos3nsgaaSwkcvDZndu841qVKxUqr2ZeEXvH9pebWDVnXqPePkNABWKmDJ37dPZcBD",
  "key7": "3EbHmxp2yfmuWeNHc4EbhYxExicd7vZXUMxNTmZ2Dw2SfVNrG8bfvtvYLe4yWgCbESWoUAXwsmgdaWhGPjnBoZBE",
  "key8": "5Mgj4X2mwx2xMwV3xu1tdGDDJ2P7ubB7THKn1J4p91oZs7JLyrnBFaTNADBHwuPsE15ktret7zp15bPrLWXPkrLu",
  "key9": "4x9y7TjXvXikorrbbTYMFB7ky4qnb9uqk1defG6YgbZnrp4TishaHexoGGj65fdq1Hm1hK2QeaFGyhdHqAVK4b4V",
  "key10": "3RhBpyXAyfMtH2Y7pDe2RpCwp3vYoBo3Rk5roKTdG8UqoW3cbynGjH9qCHQoqnz73hru46PkSJ8zXkdRfNDSRnwn",
  "key11": "qXn1LVDorziE8g2XhSkomGLFQwMCS27TR7YhuTm1KD2AjEqmgacHvn5zufhao1FkxesSsMgJQzS7feRhSmBRfYA",
  "key12": "5eDtDxYx7Z8hwvyeC9NzzEw8Cf4w4Ai1FwXEPxZyBZFfEiDZCKkcTqjLqQvu4or285sAvEmryVD63vDzYafBXiqB",
  "key13": "23WUAUe5BuzaerQWV6AFrAuPZyL8hnatcMXTdVgHjpLwJ31tQQqXD6VFVmb91G6ouatBRrZGLxrzaDqxFmH4rgGG",
  "key14": "4PakbvuhMnAGzV9VfYtSzM9CJBQu8F5EA12kcjmGUVe1rykih5LXo89Vs9Jruh3pkJ5hTzXDuv113aLhyPCAUyST",
  "key15": "QquFQHKXLKDAeWYXSuEoHTfWLJS8naTNoNkZc3czzJRNedU1j1TnKtYMQtNsRTSNF92P9iBYZseZDTN9VSsQBAK",
  "key16": "53XXfsSixUUdPB2vMLrsDNdCJYRQ2dTgfyT9susT1M24fti5m5KvHh2Ax6RpiRxc917UxLNHXfDf6RXjXpHTULy8",
  "key17": "2C4pMyeGaz1qDdhGcAU5qS3UnSYtkwrRvvLWYfCwFccJtK5ra3upTqgPaK6RS983fewzyNzUq1YjKgrshXskGHCA",
  "key18": "2QVvLkE9Ew4PxwW8G79t1MpRT8YY2dvpXekfMimSDeG3qesh3ak9qS63AgBGjo74q53rRyzx9sRRJnFLBNsLpADd",
  "key19": "3AdtNSCrg6P31A3eSBzMEWntwKYkNdhXbwrD42xJNoEUu8fgUwnzFisGEMsYNY6MGrXzF8PKcWxCiGj4527SP6Bn",
  "key20": "TMrFSdTZpuQjUiJkoFx3gJXZ5Lbg8c73WdjRkSAoTUAr5kyLCm3rNRNBYez2NZc7wkqyUr75vG7kShWiyYgDdSs",
  "key21": "4pPBmW5LYoXqf7DgAVisQerbShhLAkRThGdD26SWBrE13nbyc9LkWRa7R7L5YRiu9Rc6v9HUu85SRJ3f3vBhjLML",
  "key22": "2YtpxieqvjhZTktHk99QqKwxwxxZYFBGESzUbUsf1pxdyHY7BmJDba32svFpJ5VyJavBQqwg8K7rxaSCevh2mfq7",
  "key23": "4k2qaQBuHutAcndcAf25i4T2sSjq5hvKqxhP3v61n25YBcfidu2MBSNmrHYDwujVa5KKYmTXpnjLb5TFFtAPpDjh",
  "key24": "cndbNZLXfZag2HX6xePnwXpz7up4CLYukTi34UTSVZp5L1yPApmeXpKRrq1tMnox82AhsRN6kroHGWSkz7PZjP3",
  "key25": "2Y4Q6dMjBSyckH9Ladu1j4WAg7kMZiR8BY5N4nMzPmzH7UGa9aqyMn1gV9PKpmatscMF79FaTt1cT35GDQLpH12o",
  "key26": "BeB7dsASnNzmwZW6P4MsUf2ooQKfbVuz4Y2AS4HwZxRN2eMnUQvsmJxBmB6UwBGgsM7NbHM73tzy1C4gdc78Dzg",
  "key27": "99ULrLkrhsZZz6r6DNS2DpQMSybSGrFoLytxvBEUWSqPiy4ForVdNjxmKWjq6y1zTRuVH7bfV5aMTz9roDNnkeM",
  "key28": "oKTYHcBYfay2VqYxrpaJoBgBeD9mcrSWyH3g6jpdNervbiFi1JWu46qcEfRJ1HSS989RgYgpSGVnw5QKZWGSiyT",
  "key29": "jec6oTXBh8h1JGv1VzqcfLwH9Y8x6zHskiKfgRs9LiuYwp81TqbtFsUtVBqq5H14LjkDmZwtShHseGaecrBsxEQ",
  "key30": "64yYeezt2LNN1BNnXEUB7wDCZxBv3pvdnAr3SwhFjuwdTMq3s2yc5KRj3w6fmwzcpWwsrnNdUBZLfuvGpt5bad3X",
  "key31": "32kDM3YDauUC2HrnyZ7NkXHw8YwJxkC4GGCa6TQmuD3Z2GbpYs9MhiR7u93vd8QLLpMMucfo7SLsv2CVQkLYTm4t",
  "key32": "2ZnQ6iMrkYrNRoWisUFmtRmUJKqThrbTKQm9YutLZm95Y3zKn9R8kHhSDN9eayk1fhbY7nt67VK211c6cGqJ7gF9",
  "key33": "3EzYrETSLjncyviebKRVVoW3qunNbc3KhjaQzZwv32tnd4W44NdL7mo9xQtL6frGFBb9wq23ADD6QnKhHAb2DBLR",
  "key34": "4Yx1FXmALM5NRqe13oLmhNfdnA6kc7C1iThBLpqcYPDDAtGDcdEm6jSJavFj7mE4rcEJoYQHnrxkaAx5cDo7ZZBP",
  "key35": "4J8rBsXmRSCpQv2jTJRVWADE572Bjr6vmkiX8m5vuFWR8GZeRjwS4M6n6KM6PiRq7f6epz7WEMrrFzWviMfvvp6p",
  "key36": "4BcUjnbHHcw3DVG81LpvxsBpfTh5fc2FoRpBTSsYrK87gMtnf3guHbkdK8xY1q91ppaiokM2RMFZaC7B5dchC2cs",
  "key37": "2bKJ2mSE7m6aafU8g4vHrr6NZoRxMkrxdUFtk3XiRwYwSPSLPB5ttC54NUy93ucmvVquwiMg4vBjkCchd4ESmewm",
  "key38": "4RmAFh2QvhCjZxqVGEXdZBWNxZaP7vBfhHuogxYqMazoqnkxzd5L49quEdj95joxcc74j2ZNb6FFxR2RQPQEWK14",
  "key39": "5BNg44xoL37Rd5zLKHxoDkK4ofYSxn41kmuGmaYLf4WFvWvq5SG7V93hmHvh2RaKzaThi2PA5FucgS13Zx7LLgzK"
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
