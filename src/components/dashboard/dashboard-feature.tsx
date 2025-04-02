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
    "5BXJo8JqwM45HgeLy1AWxNgZEdxZEDLzndbmpNyo9xstsNTj9tViWgKseHEdpnbUBc75bPPMN7xwBrTxQuar3uog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jAE2srgoKt3Nuue8HG2bCfddXDBcvk6xrAB9MpLBiuaSGfxkSSaFmzzBBHsUQCDVNZdHEauDrJ9DkmAU4cEWto",
  "key1": "4sXfmbk3tYLPvVkcdi8q2Sigc7HtdrSeWBw4GrqW4GNhraGUopsqnzbHurgdb5sBAoyMst7MezyW1zTnKqgnxLqP",
  "key2": "5JtugAdcujrfpCWFx5JoB3BShFny5xrXgpxB6TPPucrnk4cL9wzLEHHAFooCMY4Bi6awnFAUiFssPhPwwkQmgZED",
  "key3": "4XYKUxmqRV1QwRkVApaVNKumbtFVHFtZ8kATMrSStRCAWzjx7QVi9gS4e641rCMhGgF1Dtni9Xt3HmbnJHZHomKA",
  "key4": "2d92xEAWSJQASCFAH9fn196LLfU3uRGMkZrjSEx7Q4a6YETZiC3cNvA2cddkJwjoXyWvkzfsL4ur1ptjCPWkYsLD",
  "key5": "3EwVzdbgJu3q9iRyQmv3ko1HbU9rRbJVzq3THsUWaHnDWEoH7ND9QGobnB2wmSC5D29xqN5gh5vaLLKBG9BbHwuX",
  "key6": "3gNrhWm7kLhofNb6UBxwM8AazGZ8hrmRB3SRxWwWBJH211774ms47VLBXBLL1HegyGHnsyW4AQQkS15tWke1uA4E",
  "key7": "5mG8pEuXvJZr8RHdPtqGUezrsen1hnxb5K5jozhsJyypdAeHhLrU3Xi7xTtnagWDwBzqg8akzXeKJhnoi6vkjWMJ",
  "key8": "5fVNKDALsXbkpra5AV53dFbVhSSD5jUeCdfWvt1d46SnPY1eUct5Dw7T6d9735vLLpZSq295vaRrqKeLb7esseSE",
  "key9": "5JGMtq5MEhTSNEsXKNhCzn959LS2bJFdkJmaBBiMRXp2wBx4AoJw4hkJLqDH82SYe4nvZtqdubJjASybbVEZgWqB",
  "key10": "4VXra5Vg5FGqdDGN2vbJgN4qfWC53EyCmTAgR3bnKHGe4p1G8LTfwThTv5EidxejvWmznxmL82vUezKB5LL5REH6",
  "key11": "3iTrU38gP73GvmFcv5ZsUN8mqp4Bw6xm8dy1VtMChxk9vKC35tqQECMY4RN5KAHvxPHN5VQGuZCJ9q8m6hVmSLHS",
  "key12": "38u5dZ9w8dfH79JqJy51RuQwd5oRKa3v77NBQn3QKCxWHcNy6i5kBhtb2Dxffg315xqiYdi1wN8oA3WD5p2JzxA2",
  "key13": "XkaPZBENbvPWGduxhGNzx3KXsifTkFjRJjH5nYGhPBkXrDr3uqXPLybxE3dLwMbfwPrXpJgygF79f6JNt2CvKnJ",
  "key14": "2cd7HFA6sq6XeakJxfAU6b2JCTxMtfDRrAUgXfvHzx6f5PCaQxD677ThhipbUfARyc18ZTRZWLcRTfRysDcsXJLA",
  "key15": "3gExDG4ZMzQELQWU6b9WJVPwjDmWumyqEp31GkpqEY94w2soLLwYLuQX7yvhX1UM6JxuLxfgn6DA12xgMhn4EfcS",
  "key16": "3oU98UCKK438fMAhk6tAEdwWqKEWGyxNhkvFG9KRgHnNjcLwfFG6evRq6n1cdvnZpHaq5RPmP7EdoRN1EYLmGZBM",
  "key17": "4UtVx5Mc9K7qni3e8jzoFUD7v28Ek4mHDVzbHzbMf2oew5gsvybz6KMMhJYG1KMWWhfMh2M5fXvwxoiD2ifTZs1Y",
  "key18": "5HqTRomuaquTpeVqhMWcjk4Z4N6axfibz1c19qKJLsrWY47ja3aBCvAgAZCNfadNajt3o6LNocHf8vGeP4kTVxro",
  "key19": "2uRNG4dScusHth6p48gbnB5WRE1iHHRK5E1sMNaxppxqbGj7kx9b8PQNHg42uyJpYTnt8pPitPtVRRakZ5NBzV5t",
  "key20": "5kPeaHRCAQPugdCmLMEYwVgCf1Sktyz1PrrW9X8E4D9MRAiZN5uFTPi1WQBK8ZnjHZAdBizDmwZL8S2e5jGUJC5p",
  "key21": "5U1VASV5BEoDrCb48cdDykQoBFDTMAwF4WtWhYGaqE3WM83TWAX4ymfDDhM1qnRmpJZQmAUEd4cehYDmzFQAA4gN",
  "key22": "4WF1H5sMidV8SZRYXsfpEkB5vxAruttYqtVvqXLpVLgyUXtLjDe7V8v4y8jRodiU16CG2RP3BeM7XNfBV5ZwYsF7",
  "key23": "3N3dUHEU5WzWcF3wQBA3crcRzKAq5PSpDCpJf93wtds8btooB4wQr8yVhRUHNtzW26ZhAkjWKZVNjvhuYSJBCrAg",
  "key24": "5vPA45aFjuLLkEwt2nccsrfkVbJbqyuUbmivYTeF6U3JDb2zv4anx6TAxcy6HCHB1kGKCyzYkVUbbZKMPGHEAkHt",
  "key25": "2CoGLjfJb5eJPUkHB9ELKKhRQgoshAcL228wQzVAYR8cYtgvuC8Mi8jvoT3nKTukCsY97C6HQQhgoxX7Tsx3abav",
  "key26": "2xygSsBQspXC7nmCVQEF3xnKAud4Libkt7yrJSyruz61pRfRRgsppEjoNQAEyH7XKGADPCyhmLvJbi1g57szsGu4",
  "key27": "5XemoYw2QZD3WC6wPDxm5d24dN5CNzeybhgD38YZkX2eS4qPqDBdqzS2PJjSrepdVyhpwVhqtvYxsikVKLt53yAW",
  "key28": "2u1PY7LgKd9my1tDny3jZ2mYVMPE77bWc4xurbujVWCtrrTjWKtAYmJpK1n4pDMyhVBMfu9ffnQjH241vBMzLuLU",
  "key29": "jwCk8uV3ZSmLxUJqqcXcJ8t29xbeLEgkJCjVgiHd9x9s4jt3iNJsko5sqxqxrxFWxto7fMhnuLeikV3na1svwAv",
  "key30": "3bNogTEQegaX4NLE8t5ppUcvDZxq3uZDiD7NQ9RazYbPAwzMHRayEuwLjbu45pBQAy7kgMTUk6VrWk8XMr34JEG9",
  "key31": "2YLjgXZ7uSHxsU3FRhiXfwjrhPrhJjByreDvUqoU1cBPxC46nJB9DPeLxrMsB1g4cXkbiokTLYk1YvMspokfFHrG",
  "key32": "2aTgoemjf3c12uN823rekEM9BQXb4uHKbANZGfh7RdXSapmPAczHidrGJquQv3jdzCQB76QXfmuYyoD15diAuVjv",
  "key33": "M4i2xiXEy4qq2A5MBSQC3fttszFUQXRQ3eaDJjABpmTZ1C3isXF1pzHebVZpb62Jto7De29DsrwuWy3nd8Bbdan",
  "key34": "3Jyisg44A49jLc1GYvfNLbpxCi6ZKDFMAinqK2Rass2eCTF9f8Cf1u7GMLWPtxznyFQMaJ5z4LbABzZexS3Wc13f",
  "key35": "3bkFnmnuTt4igEm8Zv2A5kczNAx621SbEfsSBvCN7Kc488WFSwDk6Whsh1sigu4X7N8Mx9SwiUeFruPwyAy6WGRr",
  "key36": "3AEwgzsDj8yXRHY62BpomhG8W65r3Lr8HW3YTiupgh9JggrriEs7PAWTvRG4WCnWJV1yCs2Ghf3nkUneZQ6pV6zx",
  "key37": "8aNpgoRdDpKZCtpyPmdr6o75NiD7kBHWB3EDrveqB29N1wuNKmEzo75nYmLuf1Y6URPqyREmdW8mB3Cj6rSnwBe",
  "key38": "9vUyVu4nq1qx965GWKHjxEWFUeDdCxu5thUbv3XfwAjimYitYRykaHPwbtzkRc7B9yRczktyYFKPnxv32guG6mw",
  "key39": "579UvypDgPcujYY4uGgU2Y8Jj88YiEXE73iytdNt2vYqU5FACr1GrC5UEwQhtwHzQpiXXFSyJK563JJCjU2MC7Yv",
  "key40": "4EzefGE7NNTTANh1RhcPpVRiqN6dEPgB6RwvrMBT5sLNFWwhxKCc1TtGpVrTtWCaCxray735o5DX3gea7rHCuGwt"
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
