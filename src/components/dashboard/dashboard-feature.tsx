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
    "zQuaiRJYr8nT1B5wQKPvX3tUuGTYn81VsNCXbEVXsyPjZ9tgW2e74mY67QYCgPaY1CRvrp3WnWegq3iPCn2apdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFDZwgLGNPh1krhxCjGip6W7Rh64aTbCeWXyDHaDsjsieakhd6AxzXUV7KqtNzNeCaaScPicDhE6eTERdtbbupz",
  "key1": "SyPvMnfTNWMtyztrDhAhgVZcazvJ4jfQtzRy9k2MuzcrWLEpE4eDecghZEoysiBkshh7E83axAyr7SPcsrgfYHh",
  "key2": "5kyQ11Y3LabLe6pE7Mkn84q9FG978iR5kMs4JAoRDEcxJHYQEqyJRBw8Y5aY7qm6sJs7spQC3FqWZcmmrW74q938",
  "key3": "5eZwTTYTJuakNBGspciLvvf4FcU7R2WS39CSyiSfuUpi7NNqF3Bt1Djks21Sq7YHHy6zBeh2YsGCJGK7KWwNUoz9",
  "key4": "4oSnHdpWSdFTZThmcv29GVoqwP6tVuLayv8vqBhnX9CUUSKxq1hPh5L79zDyoJSS82ifCSww3XEgTHzjRHVhZjc4",
  "key5": "1uX5W6UjZWHgKjsG11dDbfq7DotLTKiQrnUGQr2vXZrH9sCeLJq1nHqjttP9E6MVcQKu7qxebnzx6MrmFkAZ54g",
  "key6": "4ZNYkAwJg4Z5JKwCuwHEwKcqUTr2xGX6jTPGhA5jvQ9jEBm4rKQUAD5s39kkbrd44WpxadEGegFMhM3dyf1kywCm",
  "key7": "3PW7KHZecnjht4EDAkMn5QyKXJdMyCtieWdZr1tx2sCoNopKauv78PbWodijHnPnkoq1jAVhP2r6kuAMKHqiVodT",
  "key8": "3dQaNAQvgXXyKeU78nWZ1sa2kZNn6p5ZoZow4otfWikMq8cKJ175D5rvFsDGQ64snPJ2ZoyYU43sDvy7Uypev1bB",
  "key9": "hCDybVC2trrg6BG2FWhnDHBV2UgZgykz7iRKRm77mUYtf2AoCP7EpgbNS5GNVtS3YmB4oqRKsgtUNAH9xttWbR6",
  "key10": "4BfgA357FFQ3bUjaTH9ABTtseoBSkbetUAKAJpoZjRi2jgYA2b3B3EsTnb5SePkEddHRx8FmX8p4mfQvLhPJsPTZ",
  "key11": "qCTb1s6evzdfVDCRT6FFa3j2PNpspuGohK5eLjjtsoNViDyAySsgi2fJYxhxCsn1ba4vRacQ8bkk6vjxiTFfZVL",
  "key12": "2sTHDUJuCxGhXGmnZeCz8exg1xZu6Na8t73ZPQr5ACL1naVtrw8y3NdApqrYXHnN6MainrvXAeVzeYT5WwVYyrwD",
  "key13": "QR2ZZ8CQSSS9iSzrJoTrfYJdLNftk7UVSvz7Ur1MFqmCVNvjaYe28bUf1hLsDfXnPWqYYggvikMhUEun1duknSa",
  "key14": "2G1WoNzuv2CgdMwq3MonPNjvsWzeW72r8RXbeUY43VtvGtSKqRHdmYqMFkv185xhkfrjMN7R7Uivh7HBeq13qCSd",
  "key15": "2ui1vxyfeJrxpxqdnbgXdVMUbaa7NBmz5xGW32k9eEjpRm3HWm4vSaUnAbmB3xw2ERpEH4XDewCop9SRSVVj285i",
  "key16": "8amXz2UmFzaCnzYPKSyvz5JimqZofJRZHa3C7NwezYPVSx3fjHFoA4yfXUabfGKGbaMo37BNM69a3ZQavq2Do7J",
  "key17": "2kKz3BK7KkXWzgP2JBDwZ9vsELAw1MhQyR1hZHDTVs1w6yNRg7HvEvgP6JF5bbVgfyZFtSxfeodRumYz3Hme9KDW",
  "key18": "4zxhaVPN9uGGC4prPJfAurLp8rQxpZDY4meoEfPJ2RSq8qBaERYCEFsAGzUdkMfDZSTTSdgjcU41ELNAtYCyP6Jn",
  "key19": "4X8itTReLxbZkojZN6MbHqZTKNbESm1GEZEJctuAJ7XVPpcfUec9zAAyD9FZadgixjmj3GHcL6x6NSthNEehgtHB",
  "key20": "33fx3a9MpT4VX2BHEMdzAASV1kWAPMyibBQKbMo3nzMhW1vbzekL54BjTUnpGGh8kuQwpAwX1ncWNXuo6wGW3yHh",
  "key21": "2CkF3P7gzwrUCpnZvjveZtDbUJT389UUJm75Jcbn2BuJS4zG6zFP5v8dkcnok4EHVwhLs8Ky1EfY3ud4qbnbmFpD",
  "key22": "2N26P7RTeJY9XFsWzRP6pvHjZBX1MUBATWGSvEXZyeE9Td24LXDK3Tt1xUkSxDKUpCyE5sBVHfqgs6VZCvVGXd6d",
  "key23": "3WRjT9TZLRzncAdT3N1UXiuMVSaC53tpyPNKVorMgR4b9Qr7V1uSc13NjThjcRzBYXvEXXowzxzG1zAhSA5YQLFC",
  "key24": "2FzxysCffSbGZD8CGbn3pBVsM282pF83xBLYAXv87oLkrmAWgmdLx2WSgA2TMyQ2JgQkSVeFh9smqbmcPCafoBhB",
  "key25": "44eVrFnfxL3L3LDrPwcf1infSi1xj5vYDLZtV1LRDTWNJcjTjj8rESfHXgZkwTsvYM1ST2nupxFw46BwDU5LKD65",
  "key26": "2qZL2v54TKDbfFaHXCYNE1xfanrPFahnHK1NzNwPMnyzh6UR7YemnWxPaLjadUYksuPe9i1susf21dVnpv9oz2v7",
  "key27": "52wkN7RtapcW879NaQMrt5HTopArkfDhEfhJKyymqiYRkecre9jTmmHpaBX3YVpmQQHLTBCXBGgWSzFf7p1XR1hu",
  "key28": "4bQb2ibjEuiiFuFuoTdB3jjaa4gSYSiDUhqTz2a6qycfHmSYvBkb92Qeu5KzGLwnaw1dY8Rg8Mh8yAzeGbGUpAf6",
  "key29": "44JPjghCZywA8PrjLDk8v6WdjeKUXif3ggN7sqJnzRFsDrdBpMxf5UtCJLHkayJXnGBhud2W46Ld9KMuQpqVRtaa",
  "key30": "3mCvyGQ7cLQykmb9mj1zqNLdpyLUP1p2ofnDVThWGgq72TdxtizGDhVz5XvZGtyuBJR1CiZUcDfbWhkF2BuvGLBu",
  "key31": "o8cgrWVJJnCne9Ws5ViC3yv6iXZh5J3cFxYnhubBPKFqcbvLEdPgeyzdajcmtDy5FF2QYkQPCpMdMf1yCKSmFoJ",
  "key32": "63n4jjVY4X6ndWsMHu4KsrFuM2ed1AT8JP1qp8vSw1fxZufi452fNTqVqgZKxmfuiQAHiJ5NKZudk2A5CGHf1U71",
  "key33": "66UJqwbvQPAbMZXzgq5QhGSw7ZXXD4tgVj6Nz1gekGfaoYyPYpxFvb86tq2XYgWctYXWvAzWgyw5S9zMMWYYUfQB",
  "key34": "3nLY1BfiCLdcb2Yr9ZLJwJfexd5kngyqyEjdG7ugg3ZQfUni4CGrF9pC55tKcunZnKD6hetsDwJCHXuMSegsjGvQ",
  "key35": "56Lq92vcFjnAyBKyLcRKY4Bqr1yohh1NWJx4goM8sbRkdwCZehc3JTcoEbFC3hixhTsxsr4k7fyNgJ5SxygsFchr"
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
