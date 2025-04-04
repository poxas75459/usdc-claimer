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
    "23wBoE91U392nENT2AzBuXYX5mnyVxrVRMwQRqvSwweXJjtcu6AiuATzL3YcSBpxD3YPzjaGLUygpNvMfTEHt4ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUykBhWNscMootF2vm5Wo2oeugWz1t23VHiDDfApRMTd7Pk4npmWwBDicukz1iQMiVafbQxfukCc28TYgCQAQpQ",
  "key1": "H9i1Tjz4yykx4bLMepvb5EuDo66bGoTgn7vgoJJLHa9ihQGHD64Mv1GWWr1LgiWBE9WSPmxoxt8TVB92fJUSLLs",
  "key2": "3dSEYbb6JWeogaH2wAGvJwUuvqHMwop29YiT19UML7mYySwaG2aveXXEwBzHnPo8Lrdwjf96zSCWTMj6MyqcXQH",
  "key3": "35qAUevf2AAGk5cfU2B6uCQnC132mJ85ZWnPDZd5BGAkMguSXfkeXKYoxD2KMR3Edec4SW5oXC9VAL26TzXJmTHr",
  "key4": "S2CdsEChucauFh1HSbMUMMyyqH9eVngt82YSdMku8SzEziWY8uf1HkEb6GqFWTMpTeXWK2fGy2m1Qan54CLBwmc",
  "key5": "5S5aDETymc8TPC9mPJthwvyDAMRTDYbbibkJDJYmB2gPsECSYPQLBvNyZiYs8prD6M4YnZpk8G9NXBwf5H1eNedr",
  "key6": "x2UTn6Hneb3PYNrYvSyms6schsk3znVqRDAM487B1BNXQQ68c46BnFoNQBR1zGCury1kUCoKa2AaRqXNLYeDWwa",
  "key7": "62Rrvbfyb2aXbdieGVgKkVyEakQbpfns7HCbfuJjBK8S4Vr6vM6pPEDk1HmqxT5XRoTzZ4H4XVyQV5FNsSU2yngZ",
  "key8": "5WHvUjDgGpHH5KLJEXDkUPi2Nhx5nL4ZaRcVLV365pzzqewTK61wNMm5bQueV5m7fzYf7LmaKmoYGyjqB9kpxRXE",
  "key9": "YL4pgx9MNpFeucU2D7aMhtwKNyASzdCCdLb7LZgxgREsxJ3Vhp3ZyGfuYEryrLziEtowZyFPW9eyf2E4y5jfy7h",
  "key10": "5BEoffg7QNd6rQxHYCRS1dfpXM7p2oDELaSkDo5M2tkgro1Vq5PTu8TSfn8w9iDijisLVv8j2zix8mAqKjKPR8a1",
  "key11": "5sxY2UsXhyaRi4xMbbaSGTQ9TbXxvaHjSN9JjkoP3UkL1oHSJBSgMoRCYPaPrsXcrtGnwrD69H9Lc6pHfBGLQRF8",
  "key12": "1bddtrCi3rWh24f8mwe7hXzGSM3Z33dD3cGudBhw1ZqFLdBz4kz8VmP5Mx7StS5SToyagaCmbD4cJAMKiM8ZceB",
  "key13": "4uwRoB9FqDgpEUcWR5GTRKmbyna2R8LvQuCjPQqpcKiFZ6ZUcsoJTbkdQqbwqPjYDAQXDbTV2BeBUbecFqm1JmXq",
  "key14": "3EvJF9TJpDkLT8B7cQRXq8a2skdM8Ej598zZ4x4hsLvNeX8Kcado6iKNFgPDKjgjLadd7mD869j5fkB1g1CKyDgL",
  "key15": "41uq4n2uuBcsPZ1hAVpHQbKeQqAzVnXDaK6eoU8gJNiMm3y4vfihsD8kLNNktk3pfQmE5KKR4RrTwsTxmNjYmtuX",
  "key16": "2LboDKfm4P9N8y72Z5BaoWxESg9FDDC8uYnTguGM9kXoT1z8dTfvEf3edHNoLZ1aMCwWA1WyxTqfer9M2B733R91",
  "key17": "2Hcc81WjawKGnuSaFRH2Cq9R43Lq24ycGrv4s1eTY5rdCvK1rJX6dvtfKUoyA6ykvueFMQCzdYTy1H4GZFiF9yLF",
  "key18": "3u99NGJ6nn6CMcYuwjSb2Nk9iFeNZGjFSmhCjPnDYm6KAoP7P8RsD9YYU3GcjaeHjFckZFJKdD6wEjbB53zz4n7K",
  "key19": "F7HHCMyeCuExRKBxRN2J9NC7Bj6k5j9adZdSef5m9Y2kffboipAGJ32WXQM9ZpeMRzMgXUbAvgrs3Us4btNe9YG",
  "key20": "36WmA86osAGnPVBVKBXrBDmHaeQeTnK3Tr4kmCQ3TtnEeZQEWBP7s54kEv5SSjtUcgDJ9vz7HLpqJdgSpWxsxhwu",
  "key21": "66NR9aRFX1C2hXb1uoECTp6pBdr3YMhMajTPh7fGQh2gPH7g6ebDswKCzavR6K5cPyUYVjFKRShTzwwKht5K4WGc",
  "key22": "5xGPz87xBYwWvpad9swjS4zB9Z7qpkDpyJWgm3GJijoDZ36FVEdT1cVyGTiL65D2tA8DAWzbeEehzrXgLajK3RUg",
  "key23": "5J4Q2etVtLvsqFgZUPewCZWxdHGQa4Bx3G6Snq9MgUSGvGc5iQKRciktu3fsEaUP2zjGASjW9tcsx7Y6TM8WxY8R",
  "key24": "3TDUcAMZJVBcEwUSbFx2b53BtCWfjumfxZRefZY8r1TzrPby3dCHt2DBsKZwU3benG9ysk1Jj27TsyxpYWPG8yJ5",
  "key25": "2oLqqNaCHbMwXYsRii4CsLpPtDWds7NyrWxe6RMgNyfN6t1RKDoDBQWUsXN9PUzJJV3syQLjxUeut1HpovirMYqP",
  "key26": "S4HHitZ6vRC7brY5ExDBeUbTUhEjx3yEg3fy3MzzqeX3PL7s6ANquEJUo65Hndp4pp6G1Bb1vJUPLZunz7N8XJd",
  "key27": "5WMEWoqKqxjo89hS2WhkY8WdJN4KdDbmux2seKfjBGiZ8hmpbWSXp1z333G9BJsqkhHo2khYV2Mio1a9K1RXR8sV",
  "key28": "2BeZp4tKyfMVCnSHXxjJGSfbUQcSjgADxuzHAckGWMJRj6aGsSzCocpJ5UwiH4koQgkax8orwMwY1GevaQSx6Ag4",
  "key29": "4kmbURWc222WdUz9fiUj5g3ikGJAAjKjMKnj9fQV9RrkpDzdvbmAvZavmfC7WxHgVrY3bkD2E46N3M7bjBYopdbW",
  "key30": "2dFyFmNE5iKMxxKqEDq57vJvWS4bwAg7h8MS7ETpaf8hxiCy3pZGQLg8NdPTYsTu8aXM1xzY9G6d8KE4zBvugnuR",
  "key31": "3HVzaYRBp7Kg8U7vDzENg4FSuPrTz57iYmKwrxWXov7XhSprU7mJTLDRF1qjfSrKupnmWEr54P75qWMu9vAopwCy",
  "key32": "54RKu6kbgyyDviW3Dw3a9A7T1J2bxJgyGR3z8Qk8Z4jBdgZePDD5LW4roZy9TbCkFbh9WwbFTy18Rg2SkvdSCquL",
  "key33": "2LWQQuw9yjVq6cKhgDvFDGXdEGwk71QE3ARFBt5bAebQExbbWxJ2pqycpvHY4WR6LQwZJYHtv7Vw3r3mVvbmd7c9",
  "key34": "4srtQLC6dqZ1D1gvDqyVe9y4DHRThKK4TxkTtf8pn3MieLYFispDZpWQonEopsbBvw4P4BA8AnQkPVcqvcJ3UU75",
  "key35": "kTVCKGinWqKcojrQDhZLTmXtsSejLgZrKEYpeWfBQ1Tyf83grMubsDzHs5xXMRh9ikjndXu9Gp2QsHBz58q889x",
  "key36": "USimcpgHdDDBm2AjJuFnAV28ffAoXaHJhstFHCWGSQoRVDQTdHjmUXCJ3uYcKNaoZoiVnyMSfErihLLz1RDTMEb",
  "key37": "5wUa8aJSRXsGASE261SNjuxhknRkXz6FJowJHvJh4SnC5vcruyenbJ1YGzAnNova5A1Qm78AcgWHrVFUGAgZ7uYt",
  "key38": "3bg2S3RgeMD7Z2UxYkLLtvBQtpBVpkCszjRmMHNE5YUCcKTsitGZgUhHDpNxTZ6ere6FTP3Mb6z2nUrYu9NjJShU",
  "key39": "5NKprwz5crvVBoF4Rk2Pv8zLtN2WUJmKmKKWPs8ADdqih5ogpA8YJDTqvQyWmtNfZXhFFdqCsSEnfvHwWxqsjcFS",
  "key40": "5WSdvWioE86wVY8zy2au3G7EDe8i8Rs878c5ztKgDtoGAFhRySMJFWNzxZs58QvRyFkqGB1v6n4WMqCjHX2L5xWq",
  "key41": "3cfDR8wt5xAHRW54mgRY88BM8hk44wwYPqyhmEk4F2fjaVzHyo3w6N5Tt74fcbWoM5sCWnoQqi3YvM1fWpHBXPyW",
  "key42": "3eTYdW9a1VY9w3GSvhzAVR5m9WwdJCo2N8Z6wiSURBpYN6bKokVCD97kF1mw8fDJ75MjJUswH8pT3FAC4aEoCUzD",
  "key43": "L3iHwDEBo8Mx7rdmZGu13VcJPAjCYQ3KLbkW1LojNybY96YPimTAeFNrc5jdx1gY9vQKDno5sV972Yo4srDRXnM"
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
