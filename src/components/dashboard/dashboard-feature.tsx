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
    "fXVSooXZHKugY65skob41XnhYtKnKKoQPCGk59EYVoPyytCixxxaibSo6XYPmjJdH3FLa2dN6mKEW3fgJR2d2iJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWmsm7oqnBX1GM3dPf2LmVgGZapXELVcKsvUDEwhWesiBGFnrkiq21Lhd2GYgW8J9noemMiNEMJDYCuZD3giJ9T",
  "key1": "5Sev1i49zLcT16YB9yw3pxZoWiaSzjdyk3BbVgAJuHjQC3Vnc96Wjz5A55UY2FQ7r9Wvcxhb72hdZCoZaSUMk1Vp",
  "key2": "4c1yP92KSCN9bQfovxsA7Fb1ZBs8XN8qXvMesh6P3DEpXQ2XMsGTP2qbspyQuXHghSUetxenZXrGca55pKKGscWR",
  "key3": "3LhkXcrdxqqqs4fQKSVLetDpqf82t9GX4EhBPSdvtQ8GYh5UZc6pxgMuwrZYK9xLHE1hberBb8iVN6m1NpQotQ2x",
  "key4": "2aAP2YYfsyd4taHEaDvNmSFa8sohqtYjt1xXA9k6MBQPq3v5h5o1euoEEGFSNQRssJncbsPybarQvGrQmEYHDkGq",
  "key5": "38XtArLmAoXKyup9EQZNDfdW4DXkQySbbrQDUH5XAt5td8qMfPUVd8W2RmJbUBwYbvCAV6HQYuLFNBZNVSJ2uKFK",
  "key6": "574SBdFm7HUaaLCbEbpRPuzj6GmDye4ehA4BczZwUu3xW1qqw4qjQ1Vnxzu3J5bp3q4Xt34Jx9VqdagD8pRSYgiR",
  "key7": "5U2BBeBPAzF9gLpND49GkghZRPPAmwNLyMoKvVvn15gReDv8PdvZtmwXvKy4usfZ41wvVG2Gn8rpBC5qcgkFoRJm",
  "key8": "5siBwfRUR9m4Xs51f5jddxoP4tTEBDN5HGRaqTPfG86VYNAAdP8ioEWE9QKdyYkFmTT8KFT1ytHzagf8CfDQXZP6",
  "key9": "2w3yJJYRAhyBtypiZpNoYSWA4Cg2aCBJWZPeSjYkpWmeLKjn2CDtZfVqVhfuzCMikhYePq6w8isdUsSxCpHhoGgx",
  "key10": "517AkduAwNBktzziYjmmevXcELihXSMMe2o81vP652oHceiuzhyriEq61scvtkLSY8ECAhbxc4PCyjVPZiY22NJq",
  "key11": "5Vr5zFmxAn6Nd3ABS9YomeZZgBXZidyD881ovru1bDR6fri3us8Fenf6cnGDWHSf2fA4dZFCXMaif689Bgrjq17X",
  "key12": "2Rj7rVRmbsUcvGJy2w6fcPFH2fVfDxzyZnmxAsxAjJ8kYosz1AQksZzU6ErT9wJm1Mq35NZD15xxNki8WY1vHm81",
  "key13": "oU43DUz5VBkk51GVt8mbiZYuPWsPyqfFMd7qwCs4RjjSno3HjBCweJXbVSwc4qw3r98gvJnWdp6kLsC8nA3HYnQ",
  "key14": "39fN8SZPtrU3uhnB1EGEfnKDuDHxA6gVs9Nn8KJhJizKVih41HHtjThrdvH5cJgxjN1kNCHzDxZQJfX5JAsRBrbW",
  "key15": "43pxP3FmTNnMnDmncmqkepmmw14gX8FHL8getyFWSFK32SWwc1HUfeRcFcphpHxN6zY6XrBG5LEp6N1vZAp76Gh3",
  "key16": "63ffibktgvVzLnuCbbUJ66eGNtyGrjRCLgkpSps9LeHovdPdGKtKe5t46BViEWTq5vDY5o5MU79798P61BYnaZju",
  "key17": "5f7ohwNhj7n9eFEqA76Jv29MVbLHshN83YEGAevM5p9ZoNxRj2Lz6MiFoJSRSAJow4eqXqq54N5HrEu4Mi43iMwt",
  "key18": "2gr1JqFmeLfg8BF7vtS4CowguHPCbwoUr7t6tzJm6dziNZvqamcYrKjFt3Khrq9RRy3jpeqeMdgNhiXjmh8zAZsd",
  "key19": "VLMGtFEv4LVToNnbuAdBzdmvvYNDFu74TMrVCSbCYUxQJCjS2dGaNKLAAzWvDLYcBksXoeyh1b8RxgYYWE17ciX",
  "key20": "4DzjfrNaRrDbWLdDpHAEEdBsy7Fcd3KwuFtvirDRCJhCj7APJiQfuqMAwV11vEdup7psfbdqQ9M1YY9pLBfve9YF",
  "key21": "3qLwp96kYQVQyegf1X4v7VHjejAwu74YALXY1RZu7HXYnVP7r73CSW5FvLbagpMVuaENX5sFG6DY3czvQg7CX46V",
  "key22": "h1yb94nHUw4ixLV6GgpopVDqWWBrJ2d5q8vmW8Av5RrHnkKnV5EJCdGZXtT1BM17LqgifWQNAgixzkBG33ZqUc1",
  "key23": "ywmRrdb2Ws4F6fAX58zs9Q6cUEsTzGGCAjsttDeV8nQpUqwtcSdBaUh2riXvPEkmFWhe8rkpEvmnRBmhL3E26zA",
  "key24": "g1QnAkEc7mUiUiFnFSnMGBf61JEZDWEwyPXTrxkZJLbVqDo5HjtCb1pUhd7kD6E4k8htDsnd7vREkeoWffUA27C",
  "key25": "5n6DbBXZu3GLkh6ydXQ8Qh9XLogPNeZahKn8XVCb1TZv4jJXinzDscmpkNGuUr4P2RQQ4v6VLLKAcCGBVCcPTAyT",
  "key26": "sZHysTxfWjjQqCQ5ddPgpohpvk9q5c6oy5pYu1nZatH3gCPyXPpM4seR1PzjCyg7w2qEYjgP1EynKjD9PRvNE3m",
  "key27": "2tK2gxXUZ7YK4DnYvhsCFKfzp8RasGchBgkgbwbPzAzhNJ4hLGQQ8db12tozjqQfgVWHJHtkzKdGrcqsBL6Kk4gk",
  "key28": "mk4PUEzeuh5NaR3CXWcWLxTCJsUDcSQwgyDBgLD83m4hcFnvKYjsRHGXNC4iccmZZUcSgqVndJyeGDbNWrR6K6q",
  "key29": "2awsopJjvBEEXwnrzkp9AiuuUpymis3WDJ4otZpLUwsnXd17cYCc3KVuhn7SCG5Ef6Ngsga3BWXUgygNbLyiuYZ3",
  "key30": "4GtJmjhzhMfCEHvZKKXNv8KbkvvZUbpzrMAv4GnWLFBhiN2C8nLUu3hRVffc5wox25aBLEVPjdTVFLwcws2c8Qqw",
  "key31": "owSCbwZrqscS4h3DW35T3QWYVs9rMERrjfz2SRYgbaeCV1QDALXYbLiz1ov3b6b9vYSQHm7RPLrtFx5XXqqaEMV",
  "key32": "4RYcUG3FACvSHV7AMsnwbqYmotYYYB4K6x7Nodd6JqZFevxhqXBnkmXm2BwFR8P8eyboezdr7ngEfrwXDx5DiZFs",
  "key33": "4YJsg7FJBy6MWXR1PXSKbJsRbXkrpeWdyt9FkgWyr8zxqTd9rZHfrBeZcVFgqrQHor8h6i4fRvYLU1XCXZnaPeE1",
  "key34": "66xkmNZQmuW6T51LCwLPaZaduQVX2itsavV3ePhTebzNDSJhLQJcLsyhA3xxAz5gYKQD7PTs7cFZTiUpxpamTxst",
  "key35": "4G42tmu5WaCqU26fX2LfZviB8WiMdJeBMYPDP3VECzC1tDGt9v3U9ZnP1cxLtmG5iphv8L2hgn61uf1ZL5kzmJQa",
  "key36": "5NapqnFi86vU8VdyZdpDwXPeteuuWXqYfRWNpkTkw4gaXYvhyGHiWepeHb1YHDvFEE4vj4Pm3RCe2qBAd8AFxFAT",
  "key37": "TCXLMxJWgtEh579JGCRPUDEXbMMCbyP2iPETPJNkJGaUsDqjFHgQrJDMCVU8MN2aQV5HVHFLfKVDE1f29PRYhWs"
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
