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
    "TrFiRjT36rgMyNzhbiuJcn4rhhfFAstMWsDWaBoJKsDKM3qKrk4XgfCv1C1EbaK4rS3VUoKMeMz9VoKhXobZezZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Z2eXEi5p6L6BcK4djdH72RWYGP7HFrdi5o1cX16dX6ueVpxd5QenyMKhUMrn8NRtNok74Nv8AyDRS6XyYiPs1L",
  "key1": "67C5yzT7TeXQehueAW9zbnNuFmUiVv4dwd2tkXAAs3y7yDKTos7RDPerEMYPmfpPCxpkthLNXXUkSzfD1LoRcTJY",
  "key2": "5PhPP6vAHvYQEhyAXA2QCkFoiiRbbKT5MUuaqY9vs1hDnu2aQBQzfUsxW2Dgq9vxfChh1Nu6L2bjuSQCv5viMr6k",
  "key3": "3F1a7KHYgw7aGWEvR3WX4cu6RjTQW4ufH9UwJXQjjHYg4UjB86xeVzPSyN4qgjoyLrLhDBQyprTvpyA2uMMfuKzL",
  "key4": "2t8JkjeGiiwwmYn2swyiXzphrjmq29hyhUk15aJJGtqHdKX6uUHFgif6tTH8G1RXvqTyjiEd2mPYKzWQHNV8u66N",
  "key5": "2GhuMmv3i9z4rqq4twqo8i5SwEeSKwBkBSTVcECLMvfHu1uqcY52gZNFRLnSbFA6Zxj1VHCTpk4rKBhBAYxwy86t",
  "key6": "3QahQmzukgAwVwiFwZPm4bzER7AGxUVjcyjegyw4ZatdngZdGUmynewwjyw46JpJPfsL7KKCNu7WJtMJWYe8xu84",
  "key7": "QWwziEBVww9MeQhpv54F36YEmqxY6esEvsHiBbQgQpxAVHXe4QGqdgHyQSvVpSRp3ZxTRZUbbAK7LzaQAPdVTxH",
  "key8": "4ftAb9yMgoMWwquYQqnCGfsCSxo2hT2MhXALdNc5zH4nSsc6tMkYPnzjUxHsUtfvkYvB9Bu3zzjhdp7sjrEJgm5Z",
  "key9": "3nq95QrWgmYUJ9bhUCdKABKpXiJnnpXBEYapNVz9sdFBMz1UP7zAxJ88gzfn2y5s4HULneDbizJHN6RZXXuB6Dwt",
  "key10": "52teJMAkyYsJGqWTxkpjXaeC5cxeHp7D4JRTukUSXNdAEeB9HGVN8Tr8ULiMd1PZ8iHDY6kB11h9rDtnwrdinieX",
  "key11": "sPQoUFmvh871r5MtXiVVycf2vEGGoEGAYZMWTxmf9hU3BEH86DKHVK5YgbgcpvguUcrWUNZkzxryRoosC5Cxv22",
  "key12": "3jyQPQ2A9VwNNCxDU175gGJJiMGQ2Cb3Mc8WPuyfqd2VDyquXJUGTrtaUBJyTJPPi1V9ejLXsDEWCTHUzG4HoRmX",
  "key13": "2pTvTzmKtmmYVGM7NicpvGzeRjtNj8Y2WZhydTMHP1HZXGRt8kqbhNRfd8iYE1jt5TPKjNThxGsRfUd4zx1tFMMY",
  "key14": "4Dn1xT14Yu6GcqMpNEyAy9qDr7u5vWCJcCbPbVdqfEVxeqK9heq2FWcALcWTn2DLqG5gt1RXyHooBaqVFHtEnmr3",
  "key15": "579VFMP7zmZq3SZLBywcG6ZUZd9faqXZrx2yoMoRp8qYRrVjGzipDad3nMFngki55QeuUDztXuXXVv1bXwfwCags",
  "key16": "3DXwEZENumrUf39ym2fDGPrakohuaFC9ja7fHWm8XiWtAiESccjKnvXHL45ot2L7UcxjuMnkbG57DPGsFpf3hMhv",
  "key17": "5qTM6F5ntDxNZ8a8bdjfL7KasxrSRYHGgU85JcPbWu2zNMHnifSMdzza6NV6ZhTRFE1QfGTajqkZaDovpNETXD3W",
  "key18": "3EPUPuvHExGCUxBkLTxjz9TSMFMe6WsMxES9mJuZuv6B1aC5z9cikhFsR4KH7oWAmHCtKg9tYPX2Se2SPLLq8zDf",
  "key19": "4SBpwdoSA8ZSE6Md5VU1RUXWXSYyScndHMGgiynSWrkhVmoZUVmuHfz4cQJjXiexPPceYfe7wV475nXbe2EJgVUA",
  "key20": "4baFuBavdq6P3j4YXTasaBaYVeSMoi7bGDD52CyPR84ceJR9wpU6DXm1gZVUdBViQZK1BL61yc2jT7C6PpSdUGFV",
  "key21": "4gRNuxDECvGBRkcNHFeojutAvgjEHYnBJUubZez843EyJkWt58Fvf8m5Z66xkpgahk88iDAg2AZZybaLQJAfjTzy",
  "key22": "2Aj9fgm91pQ9vLpNBxdVzPf7KZEEkDG9jN577c6BTtGHq6FQeQyW2Dr1LzRskHMKMDAMG21LhJbRLjUFPzcVhw9L",
  "key23": "kt9D9WL9zXhpxeEi7c8gAjq58oNW8g3JZH7kBJ5DJcrQSyX8tj8efFrzsU5idoZsugTc79u6kPPZ2Zfy1iohtJv",
  "key24": "5FamxsirNFvwQfWRrwvKL6FqDS3T35wY2XCMnYEdtEfDaDYmHgZrWfFgg2mGZLi9Qc5hBUzQuaEKE8Bp8yRsk5Ja",
  "key25": "mHRnK4MGLHCxsN2cCDvVSVxeK4rbLye3TebYXgBdByGegHh82dG8aeFTnhxxhbG9qzWeREnU1zwnruSDniYb2NY",
  "key26": "5cVJtUkWL8bKxfGnwoQ4sWhw67paqDjXxMJD1vnmHaNryLi59pk2Tr21xfeXpkfArsjhxk45pnn6t3motN6Kujo5",
  "key27": "jkEA7Ej1S75koGyWMf5RcYD44zH69ibd5gBYpUB2cz6ZHE6rLEXEksChGAKTBdxNAF5GXQyXqbqXdFvRk2BnQAC",
  "key28": "3YS3cAgbvgrDgkEkQFvpGSjLSLzyh8D6Qq1cUmNAmR4JDMiAfTXDB8GXPF6rhVxkJoUheRJQgSgiBcwJxUtjocbV",
  "key29": "3xsg7aU2hJwwZJEG1RxtvyvnXHqXm6jTefokFLjux3Dr3hdcDpbaF6Y64csCCeQuh6EvP9tdAFMXnH7WHbJd35DD",
  "key30": "5oReJHNpixKG5Lj2d6MmUBUKQQruDdGDbwD1ZfjzuAiTeoA7QUEQCKmJqFKYTg7WDbKDouVYoLSUJTvE1oPCngg3",
  "key31": "5pdT96F639cJmyiPGGa9awTy6qFTGx9kcivUrPwN5fsWutP1D9ZYEXfTNb49fRuczzTW2Gwqcotd61ZdqkHhLhZ1",
  "key32": "5U4R2uJ5yD37gUirrCnnDhawyQ8CoLyoTd5XnFPHzWnt9gU7oNyHC671C6gPxkQXv1T3zZeGTE3viRZqKBcq6HU",
  "key33": "3fsQxPAKLr4SnAerWS9pWbovq7NphvrB31Eb4TKNiqkjVJfAHZBQkYAv9EoQPQhTiQJwefhCd8JgAoxQ5hREVqu3",
  "key34": "2GRbCPrnEBEnPLcRtyi8mzoJxEDk5rGmtAnRopAgVmfcg1xxhrjwcyFKe91fpN6zVivHF2dcBriW4fqvBPyLuS1r",
  "key35": "67NtZ5ZjmVf6xpPPmWHaYRL4z8QVVeddHTACXTYhy8U94H2xFhsyyGfpPL8kNsqUq5P2ycs6cnwrQxT4a5Wu83TZ",
  "key36": "2epdembPCbDEm1oehUzXrL34XvnUT57yEobi1CP12VD5mPkyyiD8mv7ghFXS5FGf3m9uZ69trBkw7MFU9kDpw1Ys",
  "key37": "4Fu6DC3TtebN5LdKEMQSe9HHTHKAbfCic6EgA8v3bjJF1T8hWP1tK7om1522A2tWmZ6qBhT61XUGPYMMjvJxzip3",
  "key38": "3AWPZjqp7cezpTc4uq8Q7UMh9jeaoto4jTbfcKSZXXxXczFT5wTU6Ga5nY5hip78kFx6sS9j13gNbHtWhiFqtgpw",
  "key39": "4PGWUsZpPwwdfF5aN547Fee11oCVqny448m3MWDKATF9tFhnWZSw6ogswoM7ynErJ17b8hZ9wS5GYf8FudRtkcku",
  "key40": "3PGeYVgsRrYvLMcL5oYpGgEWcM1d8wdeKGkXSP4ygPgkGdtv6GxCPe8phss4Tz9fNaYibs5vY3Rhwdn9zZqrUher"
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
