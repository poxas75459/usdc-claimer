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
    "3vD6HzhePH4o3QFdEkQx7duUDLLQe4ed77WjbUj6Yjs2nQz1ja563G6dHN1icmdUaCXU7U6jKSSB3VukJVzYDfz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kAYWYFEXvsb9uM2UwXHkZJo8cLkywvxwiK2dNxxvZoGwzuEPdv3Tru5fZqFw73oWwNWq1oJF7bvWiFmMznoKWH",
  "key1": "39ivhzXdvNF1YhPWrh821GQR992R54wqJiMabxSVajyM9M7Ubhf73wCELojtYqzLnpHXVN7WuSzvVZTD4fVAiijT",
  "key2": "67E6x7CzGhZzqitySZHn9RAXiPUUqEVswBB8KybvvhkBP1MtQSg1bgEfkoMTiH1AX6U8C9CR8Qo11UFeLq8Q7Par",
  "key3": "5hfDp3uwp763noqxUkeMvXd5ThgYGUv5SbFxPm6mLHt54sct9baAz2c9iXK5THKUvkQPXewD1vK2919XtoSh4Dku",
  "key4": "Sb9ay8JTyo7FAer28dvLsyM9ASqBSdGmNXu3w2fdP31JxKm9gE3U7tC4LK6tTKd1GbtyT3oJY1Sm4YicCYPNohk",
  "key5": "5d4CTvX3ufktgJ1vn9MJ7Uu7siNc2zivxSia2mcBHjJ4TqWQbhTMJwBP6oCFsJ3WSp6nSPXjUMbkNzcKZLwR9n8z",
  "key6": "5nfEVNp9THZTMEQnfAusmVsnq5jw5ukexii8KAPdsi34KQSatUYucLNdK7pmr2ZrDvjFe9Qvno6FJhhUtmSwqfoK",
  "key7": "4WcAq1jj7Drn3m7Ys3Woo4KD4mPNuQu5Z6h7GYUpK6ny1U8uKgmhYR26cXzLsuucEkHeiBzrC9p9Xixv9iKjhsek",
  "key8": "qgS1bGTh7B7ycdc6JpUgk1FFcZjXaNf8reeSLjAhHLgyFBf53KLjrSbQ3gscw3324gMay1urb6J5GC6UHQFpMwS",
  "key9": "52LqLmioCj7iMCFmigMJVT9xRchdY57QVvQNPfsFy9r9eAVcLJAqbp6nBtttiBDnULEJHFhwCP7Zv1GNAFpjSj2P",
  "key10": "3jDAYwWtyg1uHv7rteAWUgbsKDpsMFTp9sYK4oQafnGjK2jbrDkfjosEMbWoucNE3kLNui2snaF5QtuQWF5RSzff",
  "key11": "2akNB5Xmto9M6eMy3i7of9Tkb6miTxwmxzW7p197V2Ejr5QZbZwZ6ubKQXmeqffemvGDG9DG6tXNtoNEemem2Z82",
  "key12": "52Z8Eg2D2c1iUm3stqYNG3fEW6dfj7ovDC6iPqaKPGvNcZGUXiehVRhq6Mv96rEyPCLEjawowdKDi2wCi1uByGis",
  "key13": "4jVDNxzk4EHtQeyGYWj2iXsXQzrtUzYy4tdFdvfVySZDhGoRYSM4oWKmUHDnSGeKpUfFBv319eRom6QppE8zZVPC",
  "key14": "4j5VoqXtCGKRXskMMt2vFMYcb6rYP2KuEzVeUwuhUKm79ky8i4vtJo9HGu4JZkAitEUfJsHjS7QxGLJ8YBaiFNfh",
  "key15": "324gDba7scCat2c3D2BVKsjJcdmpxeisKeZt4XEzVSzPEwcEUtRLbxHrxF1mG8okpbZG6DS71aX9bUzMai1HvpjE",
  "key16": "5sryETFms5SnqNrkwWP7NUcrAnNvVYJ3s1PZNLoAUkn2ih7x8RJcZkQxmhiPFsCPKuyGGNfxe6hvUhiT64kVSTZV",
  "key17": "2WqgYZZn3XKHLMGGESFFaNPrpkpgSb4er6c2ruibjG7fgQjUAHyb15AAd89WNqFgUQUDnxhEvBkWdu9fQ8NreoDi",
  "key18": "4VbRZ3nszucNS3g3w5A4qvhTMsWsGen6vSXi5rFdEpe5sNG41PFkombEpLnEYrF2d6gbaQNTbocjaZoNz2cdFziN",
  "key19": "SUmfQ9SLzRRxKzsdnjCi7RpVz2NS3D4ftTp2vNxFhNp2SbtkqrNQGsnbcchroDhJV5XZanw4fRrJAUHq6NVSd1d",
  "key20": "3tpTaxqF4caHMw3FysjHuUZCuyqnFSzUnzdMfcchWF5dKnqBL3dTktHbSwyRxGYKjDX6yHWvKJuzqTFQBgEQZWq6",
  "key21": "rDPfwhEJmxER7Qvupa5rxtdY1T9MsFsKNSBxB78V1ZAQePg6TrpHj96KAMTe1TQ46WAtQeVkuusFGdVukW5NTuJ",
  "key22": "QMwNaJ3kANaDrKfd1BTjids6j12Zyka22uUz8nJMovnqDrTdvfboZPm78JLuUeo7acZSg5qUC86D8isoenR2hRq",
  "key23": "3h4EtauqmjLHLHAX1Vi5yD1SHJwaEf3BQedJy2xKX2kACR1Hi3ExCHKTtf94yZZVwCysjML3xdTb1h4aTpJ6RZRH",
  "key24": "4uah2uxrjCrjZTLn4Gz1yGQbi9JpNtxxmEp3JzN29xR8nicUprdptCvHdSaPen8KJ3pPLYf2dADsHP1hZjZe2E8j",
  "key25": "4biX93oxCVrygoRed8LZ3wZPLgKJPsXjfYQA75FLFr11o8WA5FPBQfHbRwtLPfwZCLKANCaZRZS6iAxrZ6BwMhGi",
  "key26": "3W7BPVaf8WzhtLDzRERHC1pPzeKxReWHibtVcB2ghcPrZngkB5FzSZemeHioa8aqihiLdShzGtJx94F3NnxLGxva",
  "key27": "5YDidN2yApb9MGsgDVBEZ3bwFFQHbD2TaSUt2vW1yszu9wuWct1zPzNDDqamVAMnvzUDzQ6SKf91dKHvT8jvWPM8",
  "key28": "5odK5V5PVBdhViFDr4NQZnYbJzA1bJf4Gczc5WXPn9tDiUckECXYjtmCeHm3ZKRd61qL8PNShTvtuWxKMUwaVhsy",
  "key29": "34zcMJPvEKFrxp7ZohohyT2V4j4gYUJj1gMk4ZxjVWi9sohjp1CfpKXTPESMEoTsfRyxLpNqfVYkMyGH7kEAGz4N",
  "key30": "2axP1pFamQTGQ7ZhbfTH19JY3JL7xs7XFW52ys4xJKFzrPL4MNyhMHhB6THD9141huSTpeTvrEEKjFfXVXvJnyxY",
  "key31": "4Dnps1GHXNoM5GBXnE37c299XwzQrHp7FLeE9kJX59mEDVUj178wgrZyhcjct7VqpCiUHw66pQHijo9GucfF6wWR",
  "key32": "per5L1km1FAd7WJtZoCehaFDtUSY9GD73q6Nwo22c7VQQPMimq23MsvkWBR6fa9bRqEEyyJKCsP1gDWFMDbiU3i",
  "key33": "345yVjhJJTazeMkZpNGjAyiRvXAxzkFuZ13jA1gXBMCiXEN8V6yDtTTLCxSLVKkgzdNy7HQFfQfJzbxz1HhnsxgG",
  "key34": "3aDaceumMkV8Awb7EzpfGMh2EsTUKVWR8HSkAmAKeLe8oUrK5SEa2p7q1ttNArBtC9dvsKsGaPPVt15BcySWEDg",
  "key35": "2JtoUKE9jBKf9cXoXrjrVDtpzeGdyEL1iFo1zZby1NC3MLm691LjtuDFKHwGBGaqBmBpGQPee7mZ5kw78whWMH1h",
  "key36": "muvnQiu5umhX5f3TnrEV9uQjnmrME15nJphTmEhT44Jeag24DBztpdDvuc969dSu9uyCLWmXHPePK4ajg1HxM8H",
  "key37": "3TRtrAHnCwEq1aPkbBE2Ekm1hy9CahznSShjPv42tNhSdt6xivNbDEHEJaenbfLshRci58oZ4AyE3aMBox4aVwi4",
  "key38": "66xBMPeks9RURy7NRcMhN2y2ejYRECfZJgUM4KWr2PLTQf3RdLZX3c9xuCgxpptBcwzjhDHK7EbQ28279ZUQkehf",
  "key39": "4Bz8XhZUMmGJRNNp2bE39ZkLLH4uh4G6sZyQW4JsfjEtQRByH9rqXicJppatqGiJRs35uCAjZmT13RKCqN7oJNfL",
  "key40": "3bV9KiBnkVorN3ETGH1BhT5ps3kJw7jNFwN5eHHFVFaSvrZCdR2e9qCZ2NA5awUscrDZHcaNNmvoYGKYDCWHUtiX",
  "key41": "4Whs6WE4osENYfy5hDs9UBH7U9tv4fGvoEi7a4NExeGdL58jw641jw4QAR8vSVsV4qRYX8zmbuWMXRADJnKgy6AY",
  "key42": "PzMuEmzqvSUSSYcHNqPtTB5Hgw5H4XKjwL16rs8RBAkHvyVQK2YhTLmfDAezPxEJq2Qk9PaZfSNK6mAsFezWGR6",
  "key43": "4MNnFpVdffsSRoKitm4LVWTWodDiqm2uP25HnbhBN34Q8JRLeGLndyJ3ZD7SR42njLm7iPTyqeRptMEaATZYFFn",
  "key44": "2aEKNN2x7guUcofwWHkRF7Q3AX4mxmZU73Gpj4LXWYTLWDtYJywKaWQ7pT2maEPwvLABcyt6FVbNu7TgSVzp7sqq",
  "key45": "2H4XaWs8G1Pcy4k521Mv8tUjLvWW4qYoD2Jg4cu9vL3tgpW9QWqvhEpyoZ6VkBbScyWnvPRqnFRihgMkFFcAsguZ",
  "key46": "Yn8AJbgyUz9CEWD5g5QmrxQQktMJsuE3pf82ZF1tuDRXgPD8h3XiyWQRjqevMkQMj8USGu1cATUe4Hj2twaJcVF",
  "key47": "2XLuhpvwriSS4ERruPVA1cBKAzWEn3NMF6giEYq2tcEqa1rK2h9ESDZEnzoxYHdhYokAtaQTbqUbcJVqBvFipoZz",
  "key48": "4WHaPbWEfQ6vnHx54xpCY6kU1ZW4WCTSW6WXxATwjUYgYX2RvtHxbaJX6rUaz8RnDTh4vFt3kcVwhsjzzqSDT3D2"
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
