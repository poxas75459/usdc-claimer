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
    "3DonQVv42BLpxP5zVBCYVyZEXnaBCxc2BKcFFzrcgotUiS3JDwDZLeyKs92u2XTUsUZy9UAZit3yHu5Y53V2koCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSBkuydHCTJWBn1iVD8VV1An7uLjDvfmtCZn6MpdXBQ9r5HdJPDWBxZjZekVrMAcC81eM7BHSz4zu4N2iFEem7Y",
  "key1": "5J1xuoirEr2vB9vqTH3g73fcp8bLYQT9dYrBnBwBTW4iUqYecZfjbs9EYD5m21qERyeE9HuJBprMJuPMsuBMkCsF",
  "key2": "2f5Tdbpuxkg5Mkvn9LkxFEzaTuTxgwFV4gWzJ7C2XTFSGvZEzPBmrof6nDxYyzzJvCqSxtmZN9kgu8jNfVK71cEV",
  "key3": "5DNwctKcotqt96HSrc5pX1JTMMhgwbzyTMHHdXfHSBiTvwuwH4bEkgm9muZHHAVUwrY3vwKh1ZsL1W184yBqqJ2Z",
  "key4": "3VBwPbgz6YTehfNedruEdzmf9ZcXxNNvxuCgSQsBiubiuJHdeKV7hEGf3SbpQaEyvEs9nphrMy2atKGmKDRthH6E",
  "key5": "45yxu3t4NUErGmjB9Gb8GVrY99a4Rw1GwGHjQ1CxLtmLwAYXdqQ1HH3yndk7tghXTjzPSEPFVa34FzupH6pdFjLr",
  "key6": "2DAsGVTzx81Bs7KEPaiRD8MXf8c5zwhVPSd6mWS4D3XtcXr8rvUY4diBE1xMQpiXLcjoCC7gBaXZEEHQEDoRHmB",
  "key7": "3YjfG7i9VTowYrTr4Rwb41JsiGG5AfnqefK52xbhyb3uzdnba3rNTy2GdCAMHz4TUKmhZ4vob7YkTxT1kJq5WoCz",
  "key8": "3E2BDkmEcQyeju88wpxdsgMsUcF8evjNma14tgC7P83Xg1f1m34j4iTiGCGtuFSkAirQzRq7AaTcgUfVr3yCG4aK",
  "key9": "3MiqoRNzzgYuj949VFkNkLbNQsWAX1bDuCs2nVeUm4n5aM9hnY5eytya4qx6ZUT3pRuYW6rj6rfTMPo2sajRh8U8",
  "key10": "3SoepZfHLTUD7Phw7pNSJu9qa8nojCXCY6wSgmpUkcrdUGY2EfRkaT8oPajVPA77ehxT43RyG7hdoTZhsRf6AgfQ",
  "key11": "5NNwR9Z98yx9rVvZKSp3bZivHmJAVcnrnhjKd8Yrf9uqoH9EqPqz6wzhH7tPUFBPmNbsqWKNXAb83bPx74koyrqk",
  "key12": "2q8TmXpg38SDwb2GXx1XWYUrZyBu1wcy2m6MYBUjoi9djUHRFjP94osdiJxbT4BQYYTEYpF91QAFcKTvuuxMHnsb",
  "key13": "24iV6Kabf7EDYBtCTAJiQbmapp7TDxFtE2zwHn2Cq4qg2pwV9Z89XiQgZ8CpwCm4hYv98ApyrFkcPqkoNUtZj5yn",
  "key14": "4MZ8gAKWCE3VEJEM842fj1SFbtFSKCGshrcpMrM4dveBEnYxW5W7RC13SeoaXKgt7r8Vb7hTuNzjmYq5W1BZ14jv",
  "key15": "NuADcMHN9J3rF5CFxRatnUdgkMr59MPQd7Jk9X83SXjWAwToJ3pdgbqHxDGSyzachvBj7Hds92PyVKXoEGCUFcv",
  "key16": "23vnh28SijWc9ch9KviGjVsXzc1gmy6d1JSNpFx1LEchYG1DwSLrixLZHNAvCDMkvaSwso9AhvVbbN9Da8S2YetU",
  "key17": "2tUZVtqXdBNUq2cd39agMnT3o1jchHdpqqpXUiumYdmj44LeKVbzQjr4U8WRutorUA71j9FESAwjtqefAinvtAmj",
  "key18": "55FF5u9VnaiFPPw9U8DGZosDNS8DfJzttkMkEwQwrwmKnGY2YqRnyxMBTKRbzRTGNav7ZnhMwAqCFmLEczmQ8To6",
  "key19": "4fVGSPMt9bpSGaqbn2NsQ9zeZytUbeXJ9ZBTJarjsXTMx1PZkq5KZ5Vh565VTaGrtrdw5u4rdXR7A5ycRnZs37fZ",
  "key20": "zziP14LfzVDASpbcqG4MyV6buHCg4S7pDyhTeAQnZRYCHSNvXWdjiQopj4KUY1EWEv9aaUEtemDzvuKQcNtq3f7",
  "key21": "36r3v4herPGHzzqzDt3pYoKm7ZMX1hZHz25mkqsLBQHwsUUSrjopZnpqG5964rDETJSDdyuXfZbghfSygZnANPi4",
  "key22": "3641KGrXmQWzmY7P5CvTc4AkYqctrKr3WSU1jQeD5XxUc3PTi8pShrVZBaAote8GdNrM7NVTVBZn1kxPwQqXkPER",
  "key23": "5Yr6VHh7uX6cAHKHmoTb6hkc91RBJEhFHwQCRCZbAbZ2U7jzBczb7BSRQigTRi6u3uwYsN4GGMwYKgduR9LzwzxY",
  "key24": "5UWzRZYpLAsfnLC2bBkr4B32gHSuR9Pf1sW6oZh8wCyTRDkjpDTfnXh7AtXznSSgNpTaC1hZJML9iJV63RTNBdN3",
  "key25": "z8bih5eenRLUEkNfr7Lif6rmMGBgZJeEPjTQDWckU1VCDCKK9iZbr5DZU7Vdn4mH2VW4TK4fQ5vb9BTZdfiXtyp",
  "key26": "PXUGCP643rHCp4VKtaEWzkVDVics6vxhsqymVevJPMGnGyP9XpNfHktb5p8Zym19aAm6iyD9s5jNeZ5RCYMUCjD",
  "key27": "62sNEJoCLQGduKwMqeArk2vdVztLJb1rXTDdoFgwGXyD9we3R1PXMpHW3oj9vFooCwfGihHJXjNAN1LCx1EbADeW",
  "key28": "MuRWaRnqbq4bidkF4mLnYkjZdzkAzpdNNAgp2refS19PRQvqdowecrbxjvLuU7D6PSBx11w2wrJnpY6pZKcr73m",
  "key29": "pri3c7XhTcftg2ZZRZtGeXF7YG85SzWZ47xLprqtbhwiMHszBDLgDpZxpwpoNagUqJm9dac97fQgUKcHrD85nNV",
  "key30": "2K1aSvhHWxdgRK4YT1ZzgZRY5kr6YHzesKu2mSeBhwLjccCcATs4BPu8rm44tD3TrofLZAroKdbUcdFmnZMJpquE",
  "key31": "GnFRb8RMup4GxMpzZ2SjKfWS2A51rB9pzZRQCEbFDaCeBmS5P7ZUGb2gxe8PDqfn93Tq9MpU7gbtpb4BE8wsrSP",
  "key32": "43LtVSRkj2YMFZTEz28BacpNRNfbTNTthDMdj4B35M2YVtt8yc7DCK8qkFpe6aNzrSFY13gp1xrpx3nT54bPDo4u",
  "key33": "3eZ9BgVkjyH3YCQmwfPjX8XFozcDGQUyNFCit1q9eF8iVMo9WexXQtcqPSLjWKXRfnbtdfoMRHEnJ5YjYwJTWRdV",
  "key34": "3pHb4yfrskSPEAZ4bQEAsqFDcgSfPkD1P2s9CyzmnHNkcFCVE86ZXz2SKFXCxU1xT5rSusXWrWyBLwMye6cnkjV2",
  "key35": "4YMaJnj2x1DgW1sj27ctkKvRR1dGW74iBRwH8uNwamK4PH14voudNsJJ85yZTtXnzZSboMtDNf1GGyg9RRJV7Pqa",
  "key36": "2RdrCWQYf9BzdEoASfjrUVVNMuJLGRrhdbHZg54Cv3W2qaLEfLr1Yd169aQB8JAPCmtkZKP5tob4PJsBRdL3x8zP",
  "key37": "4Wr3vDQjyAZ9TeRVJbvZBhQLQPj2G2fD84jsMSNwqxAC41M8HidZcENN5xeAu7iF5gtR5AGFyqquprsk8MeRzY8f",
  "key38": "2Jb5CYXxzNrVV2qWF2rvHZ7UtZDkBMXMS4k3JfMzp57YJ1r1zdwjcSQ2LBf3WeV5mo95tSwHJUhfDkTFHokrvjBt",
  "key39": "5yvqQKK8ECrFxS8i33u1uVj3CA4rFfXcTeUSqJrGceMSVRfNGjfzpSCobY6D66aqQRFRb9H7eAX6Q55JVBV39zoQ",
  "key40": "2sVEEYBkazXkXoW7P1c3vU5mp32BhUozPYvNwi88wbX7uCSYgSJsk1vr1SoBHXSciSwssWbRdtnKuuEpXw8rarei",
  "key41": "2RF23zmWkpnYTSyMZpUu3BQXPjYGVPk89tdzH8aKtJvFzwQX4NTED7v9kBebPiVRWGwr4faxqgc3GcCsecd6mKND",
  "key42": "3LcQLpaHzgoucxddZNzPtgQ6XYR5J7bnnshru5HJxY5kfhdrAndq2k9iHv4fWrxFV8nG3T7dLDPTaQZH3WtQpLTN",
  "key43": "5tUBbMwNGTKwf4zGKLhZT6NLoU7u9t4o952cQ2SiSPPYYm9Ts9ygVbAbbS4BFVNvLnMr6eCihCEvVzEjAqrsXH2a",
  "key44": "4iL9Jxrf4rg8joz61hrW29hv6WkX1cWSkZyQ1ruKqpXQYAaoZvQA2nBRTWhZSCpcsyBN7UA1Y4zcVWAEZPYYdZFJ",
  "key45": "2sYFDZ3jpo3b7j9Y6DjeVLBBTuPHvMFSyisCH4qtJBWbxkCqvUvSUrjy7asBfNpkK1z9Yf9uPt9eNDRfAmw2QAq8",
  "key46": "33XaTGqJKYfX3RHG4ZCmLKHtqHzuh5MoS4wzJNr6AhbtbDiyCZK2zHxm28zs2yhqmtzHVvaQgbm5vXWcRv8PXfqA",
  "key47": "37zCkdt2QRsHZdQxXPugzK1r5Hhk2iKxQp2d2ZAnJ6XyFHoJAgvB1x4LegoLX7yZjPgaUsDPsHxKbyM68gadNZ3Y"
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
