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
    "26Rk2gHv3ZQ5zpDMHVMdeHEWqU5HrUXseYnLvMZkmzCEJMYcNZC3qTHgtd7GcvFiou3ncVHfBvpep93Vqzzuuc19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNRNiFgsFA41vePUgD5G2YzbhVv6GEHf4PAduoXuwpC7xgyJyNvNCdfC3bhQBSSBupbHTaobRxp2uuBqhTRjZmE",
  "key1": "3j9sMtWK3mgtgZWpEQzbpBQiHGszEAca8PyjpAPas89ETRWMsvWjPJEzNHNX6cwvCNyLJpdqPRvJg8wPegdoV5kt",
  "key2": "5cCoXrt9LvEtSrNG5jK8U9jKfGefAERBb39s13LAybHdp2FLrTfsFwDGToeNXrFWnhYxrjLAfm28BJVvEwp6zygE",
  "key3": "3k5QvXrVcCDbzHuH9vcCpheqWrptNiXimDhiAQVXnUBEdLtbLmrMGhFLVfxwuCuJ2UzrxTg1yyqsKajTTQdUJTSB",
  "key4": "5TnwfeYijvuPxveYA5H2m8wUnD6beMfv7FGhqtjGVe3L31DCaRGiBZKovYLmRRujUZBDwow2qbKrNv7N15Q2PGUv",
  "key5": "9CvbhNXbwCzshp8j4M9dEytc2wfxBUjCinAnHdw3q9KG8NGFCtoMmKo6EWCfKNMpifo9zHTmaschVfZPadYt3Be",
  "key6": "B4MAzKfyqAGL7TPkQr9jzbJcrZ5kweL73L1MRyDXcpEQQgL7KJBfNA2YvQAyEwqRsGnehzKAmksWoVHZGrox5Xw",
  "key7": "5AoxiJpUJE11jKuLYqmqsCeAfiQ8qDYdrjAfRgauv9xy8dTRk3FJrduLVA6LYsFTWdbiQ9iEGB5NnCoPFvCib1Kn",
  "key8": "5CQVmAyM7dUbV2ed1tMNB3FRiJXRjuGG2pWbc1YwiYEDZH7mSHtVz2wYYnqUnEJD5CRWMt9yTFuDcyP3ixBcaXsN",
  "key9": "5bpfBk8B4tRWh5vJiUbWTZCSvuYP6TdQuZarPQhevrnkBkhcVStkRz2MKUUx7HmfBPJLkxJXxZnvvYCkRtetrrH3",
  "key10": "5dBDpmgArpHTLzkZFA8PX32QwVZoHqTnyeeWvh9Wr1VP9ADy4ghz5zuwfvH1ZGU32BPAu18QEgsKBPhimGv7xina",
  "key11": "39UwEDa8mmp4UQb4H3xxh3S8cFh4bnQNDo7Hq8N8h54JKPFJeuQFmdoZLYyBo1PFukv7bq18xv5FDCmnT39sV5FG",
  "key12": "5D8Zxk4ykFGQifyHw5fedzVMy1h5KESbXKCZ5sLSq3pEWnBbwMqGcuM2bSRUEwrwFhiwBWmRaRrSb9FS8CQ4VEYH",
  "key13": "hjmvKF6ZGWGQbxQRFFt5YzJGgfaowrMtxyPXSd2Pr4miKtBLzBZH7ceo87b7PdtTK7vzvsGvGAbAyBMAuq3tfH3",
  "key14": "2824M9GLVbWgHLpsrAUPBDc2suj6FxBPbczWQXk5eBhykDYM99XkCYqu4EoNu4bkym861JGnR7jrs6aw2KPw8FzR",
  "key15": "3w8KGQ4MVrNgYLrCTwNbaFh2HJBPkWAcpiY5rZD8VWMZRFgVc4wSA4AtwYkeL9eFfQnezqH9mE9bdf5BCDEMffE7",
  "key16": "3jLo483SaucyKtLPwo3U1jL6Ec1TaGBdfPQMZNz2ijVsKLhdNnwppTWneVt8quKKCcQHnFMuvhPccbrSGkckpJZQ",
  "key17": "5YiWj1wwhWBjV3y1tYtDFjQivgjN9JoweW88DKJoxMqASXMCVyXkDd2LWFcAWaqB9xqhUyY3CBxwRRHBhBCYPG7W",
  "key18": "2RzUFzaqFGksFfoGoY7rZ1o6JcGJkvSHriZ5qebDdwjVKRjLdzwj21HZSkVRgm7c3h3AHHuJNRrhJq2ca2Whd81X",
  "key19": "4DNkmALGHtY5tW6fs7x6UZf3xKo3i51og2F5LFekU3cDxBfivtQ6N8VpVEF6DbedRDt37grkVDbqSKHCYwqW5TzQ",
  "key20": "2TRpLZsTVyUoVYecgXKbNEoze8cee3jnwQ38yqHbK1GW8QNCJaCJXDSwKvu6SaxxYXjWFgX1uALM9vUh2jNovTzq",
  "key21": "3FtgmVw3NbDaTwhRHDdfdkQxfcU5PiJsnE6c9N3oaRrNAfLqjBSDVbGdA5WLSJpSKXn7BARTVVtDXT5CWMcUMQJV",
  "key22": "4pvLtQJoqvh2PeCegPnSP4X68dMV6cZp7caEnZW2njJ53PVdrgZhfKaU8H2nFnBnyrEnM5uiqF4uKjUXBumZB34X",
  "key23": "5BCKUGCgLEuW18f3MRB46xe69bjkC6JkvcniJKRrJgAbSgJuPJVDGkof3FMSwNVBefkbMUCUEmfpbg53sjWFPCaG",
  "key24": "xZTCJSLRbJgumkY5g2K9AcjVq2FW6pEMPcEmKpW4dg7D4nSqrb1ZmygDJkfcXQu8HvnR4wCMcQ7NQg5DbzeQEgd",
  "key25": "4KcKdJtk6drsMDkHZ7Xh4MFT5MVB38x2D14UN9ZE57sToiRC1H23LGuPP5FcEfxEh7r79kLdcf2Dym8LUa6vjDuq",
  "key26": "2wTshewr7E6sDbrebmd9ncbv3kkBcv3JrdFE1LsG3GCgmqoHg7geMAp8jckBRCHLxU9basvGjmVvaDhBmScXWVVs",
  "key27": "29AD34V5Fdd7a9V8XQjuJU7YZA5kNTfpDt8eBAxEyAm3wcyKfK4x6YivphnLpfcWtcUnYkemTVtQpQYVVK8idnTu",
  "key28": "94qGHiXehnroaARFcH2QfWCXSheHcjBwvTSmXJJmYoymLrkEzvHEPLwbcHXVesnKA3nGPtsHzNQf6Z2A3HLkxUJ",
  "key29": "VWJvD2mz1ubnsV1Wgtfga59CjYwTKuDxSQZNVNqWcBBA6Ex2kPcNWYYW8Akd4LvMuiFJXZTvV3D9zuYuLwGLgQ2",
  "key30": "59U3dgkR85kdKVULuFdPQiytJPm6DzfgAxuC7f1LGyowk18Fnz5zxkQsak3rWXZdKcGHDhjYvXbBurp3qm5xMMSf",
  "key31": "66UJ3FoDURjiX2JXCCyUoyqD3X54rXaLxtvZTSZDyDvQ7BiWF4o9qTrABeCEn2iC5TrJDfrfwQogrWvQBQsWYo9C",
  "key32": "3f9jGjsfguBhP1UQ51dp8A5KnzEfPWPBujePW5QZQ1mR9hDUvFqy3mJp6d4XakEvSEQi9bu5bxoXcUj5KZqMuzUi",
  "key33": "3raxCyb3KHtXpHCheuhs4dN31ejARcFavU1iFePPQuGB2bXC1JcxcuZQMxHE8kijGWuEwnoGgYYkJWo8E6wNywsy",
  "key34": "64cwzWfbvE8Z2sCoyKdo6WiVnTU33MAxqwSXG9DMecwa37JHs3mydKRR1xi36y6wioYwrWKbPpvheyH8qWu8VmiS",
  "key35": "4EFMHqhd7bu6k2pMaNxhqp1HToqdF5wFhE6d5Xuxy5ZTUcf16eWHHFvBjZ8Ark93JLZVipEGrTbk4HyePwtVSznc",
  "key36": "FChJWVgmutGrGtHSkiXz5h9XM9WkBMmfGPkAM5TFFkBEU5iQ7mzQ2jDCBWF75Qb9Hm5kHUovfTexVYhN1vtLZTt",
  "key37": "fRCG5iPSRTQtknaDtUj3uojq4XAH7PckbKcCWQnaCtQNi5Qc7h3WddGEoQ4AKKZ7mwCxPQQ8MtsybSfKZk1qfKT",
  "key38": "5dg1x2bL63Mis3ALg3eukWuXi63XWhjVzjpekh6gJkV5KRr4Mki1zxeW9iXNZqTi2ycmGSH24Mape2B7VadfaDQL",
  "key39": "5S1KH4TvbV5fSHSpQkByD92GsJVSnoWztZpPT8tsWsjxqYqy626SoFJkmvCgyaxiF3XCewzMLJWzqtw3aFVi2Wzx",
  "key40": "EiDgzpAS14toq35GjHBu5UQspyoAVc4JutWiokrcnBQsYsb3gyPEdt6MJa6GNaEa26kBay9dfUQYNBFfAieD8Kz"
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
