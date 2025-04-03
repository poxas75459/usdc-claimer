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
    "64H1kEF3tBqsEAe88R3HoAxarH9yub6ThbXeQtG57hRXz2nqdv71N79gdL1csTJpUBs4pLzGB47CFSu8sbemKcQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NstmQKaR637sW1zGiDcPHnWwtzDmxRDbAY4xGaZMuZ8KFokCqXPEKZ7MM3MnVMkA67EGJUVbC1yaXo44RHX4nQo",
  "key1": "58EFkahNJ3mN6oJ5R5pAYhqRJGJMozNeVYCgLHxPKvLk8MWviPSw27d1R7ycbw93PWeER1YRGBMPnSE71o48tSsp",
  "key2": "hQHuUhCKstbP12b6svfg8brasT4obBxLSWyRdnwwxKBJ3VFRqvC9hmtuDdkioe4AcxakQShohP8S7Jt65jzaAa6",
  "key3": "4hWmsF4WeGmTAtHp46fU5wTuyuKxXBkRHTdfzoc47G74XJ4cc5hewDKEbJwAn56aZNMSNwhZdwNGP2w2srSyNKvN",
  "key4": "2VKzrLUPmMBUVwtKWbGVK21hSSqqUHxHLudfGHGJ1oMevPXpczhZg25mgp14n7ue3cduE37RQWLjqjwmiccmy5m",
  "key5": "MYhhRHxwbzsY2sSbvFLVBe3V11qPW1j19ZRBGBfUgukM7M4rGCmRJFw5DcgVPB28QfosfCNvhG9utc8VoBvq21b",
  "key6": "3J623zW3f9ysMrbMv3fnt2xA8k1k2PXGtEgz7Y9WzwG8RkFeHB4qQCquEFSmGgecA16FkYJZgh6GxZVWBjGNmq4H",
  "key7": "26jpCoUYjNYvTRkgyFrkqvyk8dAzuteEXJPhy2DjC5YDF8o6nggs85EWJEtHqerFtgXb1Z6Ju83UGcurTwuUSkxB",
  "key8": "54DMSqWj1FAz2MM4zKazzcbyUxgaTFGVKp9HpyzGghHwd4Mw5HemXDH3zJDLfyMd7VR8wwJ4PFf5XEzEEdf33ZVk",
  "key9": "5iQRc5fNzGv4CNqr2BZmvVrFyFVBm1dcUEzC9SxYMypYTbYdRejRwRNq9HTrSLuN4cwTwJn5C7tNdJpWdBV1yZfu",
  "key10": "5S9UJxLDy3sj6YSjm6urywzoNMaejivoN42WmALXEUs5qJbTM3tUGetd12Y68Bqr8nZRAFL9vh9C2QGo1hqpaPcE",
  "key11": "3i7RUNUJuc6iFyzrytL2R9rhn8vsFwDueJ7Ws9YtqqQeGX6iEmaFJhD1o5kTwhiq4gNH1BgSDsoxBykaHdHxbhcd",
  "key12": "5DKUWH1r1wj6tdBSfN5nDyWAA6idPHRKp4oSrBbkZwdjjFG84XC8Rvi3SMhyuM8ZhPCGpn8PQGm3ZN5ppmok6G9d",
  "key13": "2AhqwUK1thSuxz7RN6vrjWKhynYAzkh5byUYcCqv49VKNTATZasdct4b1nvuJbE7BVhK8qaPiAvMBoTZ3cL7mxtz",
  "key14": "8BReAmogZYnwoMhgwmcbq5eRFqWivyRv4eWhiFWcPDgVM5bZSEnTwsDN4AYfx9dVqbgoSyFGsZENPDJtH1zz3bk",
  "key15": "34XQypfkcjJwWvjib6NWNS1NNv1VcsRWqEEGGthQRZhBVa1C5K13sYEWnqi7W8MqYDa1gQWCSkHcHs9GeikeRRDq",
  "key16": "3rDwjHmzUJsjELvtr1fyS8GdL3oxMFkBrgo7G2CBMPLEuNCGkdB9DgT2XY5Z1vVLLp5UVvg5ShaFdAXeozSC2DK4",
  "key17": "4QDbwfpr84NDD2UhU6XHE2yAdF4bkTd8g3Lw2rKHG8dKhVVziyns9Abm7ML1jt4nFEysRFtdS2VyHKqzM9xSTDYo",
  "key18": "3nVv6R3XBQ8sh9YBEMySMhZYrfeHimadDuqYuNPXDLVdRtNpm5nC3Sbsf38oR8N3gzQnD67KeTdrRdMHM1WZfUs4",
  "key19": "H47VjDLMXdUnTU21ZtJBpkSXi17hhVC521k5nSQfRa7Pv5d55HrPGnDxeSypNtVYb68KaWv5NywhM9i2jvTXA2C",
  "key20": "3NUJyAuFHmX1ATv4qLRUpdEC7ewKWX1SLxqBeU9T3YJAWsHbY85Yxv4YFnf7124JAEcw5jweMtS5A1WhU6SH7k2f",
  "key21": "3xcqHNbAP5WCa1Z1KU3qaYCFRoEY7xKwyrtZ5bmGfguTqToRwzFuxMY8SBkCQTu1ntv9hJn6rVcmLScahvidV2ce",
  "key22": "3ofA8bUNpA2dkKEFBACXBvwachCyQfEu1nTCeWgPRtF8MTaGKwin94Nzs8ET7yxAvdu81TgGoaAfYdRuQ1hKLRHU",
  "key23": "4QVFS1KFebtHG8PyMrVAXxRK1Wh6yuiceo5jJGARf77rAATiSQ4sUdPywF4krmwDp2LKTzM9ADtQBzn2gAyL9vTU",
  "key24": "3SiHoJWtCHXko4Wkh2s3EUKzrG2KDZ5TgX2pSarCE1kjz8W2485XgktgZZRoqDnZvCTtQYhfi9m29MbU9n7EHCvh",
  "key25": "5xC7suaSM3q82DeiaPVNwGbxcA7khqM8KBrkwHk3Wx2EUhAozU2FzAEsdnW9PrVxYdxdS6GwdmaMZsu8BF1aFmB5",
  "key26": "S8sXGi1AZictEa27if8m7oc9oupJQe92z9r1AfhZcHoCndFvdmK64EArBAj8UkmKKQkWGH9t7hucFsJkcATkrvi",
  "key27": "zg1wVBvGFHqmNZ16h85D1xNPpyKwHNw4mwn9nuaiAGDiPzsfP5H4x8qsojfon76quPaVDK1E1iVFmSmBPK7Ab2r",
  "key28": "4RXAEMpKV5Z1ZhnSGvXXWeoD9oyVWEH74wv1gQeWGyJxP3mHdLBti2NfboyvfKRKQm6LPrZCfn6PyHpHCxt2WTvu",
  "key29": "3tV5ytFNw1DQDqBkEJSxwMabuJSu83X5TyHMauh9a3U6p4MiMpz3GNPT3eXzGFr7SAJnSEn6M4pxDm6h8EVsSvtv",
  "key30": "4jew265YHf1cnvEWAtSsGBZ35FRYNMqHxKEfmj2t9eg9DtwBesrwFgDk6RroFfrKY2115FcheR1aX5JXKUfEWKbK",
  "key31": "2GNJJqjJaRcZ9oNyoUgd3arTTZatUrnU7wpC9paz8YMf9hC1ZpPNXvBkgVNpBbU8TgduSiRrde4h7P6YFMtTdcJr",
  "key32": "cVBWjc7KndWj3uvZSZFn8bvySy5k6Z1uTQ3t3AcKNFFL1cE9BPdtQXBRWXtnoteSN3UMZPt3mso9MydrXC9w8F6",
  "key33": "46trShaEzh3SEvZAjB7U2CUUYD2P66wvTznFWto5FSbjmYckPKje63ahPxSAEMnfEd1XdKoUa6c7L2Bx6sm1bgAU",
  "key34": "56APQWsEwJzMx1mJ85BLBqqWfSFYRZCpm5fFHfLTN4aKB5vz8QXcsGY5e7t7Ma4a4d34Lrzn2vWYfxhXRUgLJfeg",
  "key35": "2uceuxLuunffuFyucYY7saYiUQXAQzs4VtBNGxLoT6oFrJCezMfDi1R51Y89FPxtCc8uHLdgpn1bfy42m6oamTix",
  "key36": "2jdgMfNRWrwh58jN1DQUe1XzYEfqsfhgoqYPEirBsmQN3jnAEjELPDgeGD5tjDZiqBFV9tkVoqsVKxPYqrJwC6g2",
  "key37": "4nSPTd4pPBKmHkdZFFN3E7zzrac1i8ffafgVKDzoKwDxJJsWrAMZ794gU9hKwhkH6xQZYS19BZv55ZPZkSAciS9Q",
  "key38": "3hBQREpBgwS6JaUbqUasG2QmNL8UrcrDiKyVfAtNEHocZQkZLy4Q7cQ2u6tKRzVShjkXmUwjkjKLhRgdDQFUYsCn",
  "key39": "3Lm54gW5VLdSSmzatJNmxK1f9WC76LFqUwbnutgsKepjC9mUV3LQG425omd3swSrPtD9nHFiMGkzoPmy4ssz9DQs",
  "key40": "25rtGFdgwAKsY2y4n4ixXvdnDf4pp1L7dxjM84KeSWvm5qR2mY3bKaQbzEUjx88RajDPs8VT5cLEJ5qTXdV6aCae",
  "key41": "2sugCYr9FtwBWpyMowizgsmvkGzLKdR5fpqW9uf43uXAmAqCmb7JXoEomtqt5uAXEubvkcQKwfJYu2bTKPhh6YNN"
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
