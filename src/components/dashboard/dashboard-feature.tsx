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
    "5xbjP4i3uQz9qiF73ksNX8qg9VCmU371eRCs7LKAeNg7X861is2xiQQZ3LBJ92yvxcJMkTcqna8zcNPRyVvTcAFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CycbxLUjJj7fpiSR8SpVF8Vi4FZh5Zfiy11TPJc7HKMjgm2x94rUpB94iTmPK9JwNCfDQHktTRRgV1g463rJ54Q",
  "key1": "5BJo23nLUx2gaVmMkD59ARtZVSzH1v2SLv2VSeizDHXhw1dFNRhJ7CtexKxCProi7L2V6nmEFBG4pJwzQhSkpMUn",
  "key2": "4hBNoYqGHnKNpMei2tU3t9ESvVzJgVTjechZe3iZ7Wcw7QHRn1QcrAboXCcdcAwjPK9K69EFQJx6woMoWvthHU4w",
  "key3": "3qcEkeAVaZcyd9wvbao76B2LoJ3NMMgBis68bWHWFnYanvNy449mksNLjiRwSMMLWcmHSkVbZEQEd6g5pat7BKt4",
  "key4": "vvSLSY2oRpiTiJmfWPj526g5XAd13G6TRcYSqttkgt1GqTvMfzNk8MPyoQpUHvWFAYxABUVQ4modJzXjZfqKpgz",
  "key5": "3Pgwhy8UwQqNgUsGAjBpUyY9vqNGVNWVLJRh5fwvrhZj5NZU4kjCZRZcC3EnEXq7R6iLbDpP6nq5tL8HbwuPsPzt",
  "key6": "4fXDf9d74c9gRwQc34dthgEag1xXTFxQ5VCtfQCAYcbD4q11wZzGcuqL8f8Wfk9RJGmReujF6XP2TztSegkD1gUF",
  "key7": "BLWLyx3U4SsrX7R2TULYz5ufKxitBmEQH8GLvP3ojXnyFDv4QE6nrLFVm8DqwRWUQEG3nTnaTtn1LwdbgPpPJA8",
  "key8": "4PxowWZC52sgPzbRi8FVR7C8qtinfbnsamQ94SjUc2oCwMWWsAnYvRaDLzq1ZuFhXVyu7ScnS2YtwHJmAzJGcvVk",
  "key9": "3ne7RReq5NXhUtiNxtmJ9B4i5KhKrhLi71fCB2rxj1sUwMGdqG455aiSj2CPX8k7iiUkRDWbGLLqCXpqEFpcrb1a",
  "key10": "4LY4mcserVqpncTqzGnw2QF39QKUSwhi4NVBHN2BVNSyY1AH17cnbJhQ4vLCbVLFu1LmF733H4JRZ7T5reH7dkYi",
  "key11": "5uqSdeXRhinKbnf86CJNWXfyq2PCMtPfQ7TzHpzoLLMXnWXjZEpT7TfZcLV6eEzUtBbdic1AnNtDMDF4PnbpuigR",
  "key12": "2GjngRhJ4b55n86rRq3ouz6FTPRjUCrsce5iKC7jVJugvtUd1vuvsu1fdjbCoAYjMioRkDKQNWY5nMNYiNFZfUaF",
  "key13": "5xtqVZdSd9ryD2kALJ9SSJUJkaCsZGuYMZ7PLPRRrdtv8eQKZ1VJ28WR5747pqAbSavVSY4VauMPrZtXGjuk1TqN",
  "key14": "56RPagzk2cfcxuMZ19SKrsqcbasbvSD9mUwZNTqyqeewhAU1ty2dwrD1izVTJpTwDb9dPcuJn1M67Rk5eX1iZPkH",
  "key15": "58GiW5ABxgdaZTwEVLqbbgpW85Z8U86eYdp5rfvkPWHnhYW48HcKWWvyGTeq6KCYA616jsNseuZtfx7qkft46Uyv",
  "key16": "t7hPWBTRz3Zca3ZhdoVnzRmBHuduzWBT6jzTg8uDQMF2yTw4o7qLvT9RuQ6Rhq37VAed6ToR2Le37AsT9ip1veh",
  "key17": "5uk6vF4NSjrdAPKMgL46dytsreJ9NaU4wmgSjDFu3PAZh8mYzrs9dJt2mVtHDe8v5xaVfKboueBS5TeAumGcASrx",
  "key18": "WQcDVkv9KaNtWWxGMXBLLAQS2fvfqkn8NFqypDpadDvPEvmP6UcmpNuE8eW1A8vDzGaf5SKZmSppyNBudcXnT4H",
  "key19": "3fALx5zrBztiy3vA2sdy6S4ocjWiNAmHkr2zH5aiAbaXBJRXgoipYYoQC5oyRZxmATVFRWFidNxA6pVvXdRyharu",
  "key20": "4Q1D9TpGAHtBbm9casqYRDirxNSNQTCsgUJodF3UUADki5sALpVKxkKeyEdekTudSaVpbtdUE1gcbMLwNY1Zcpfe",
  "key21": "3TyftgXu6ZWYAJ3156Y7WWus2LhvzcKNDy1mwYsiYGH4d58ABBfT7tXxXpbyH9UMcR4Fzgv1sXm3dTTN9BfCrhxH",
  "key22": "2HNfF53jVALBPDYRpyknJmQmRfwFxfNSXjvSpucfBDmvC13FAjegPxnqQk2PVboxyKRPPvzGAXUmaxAeYJoLogUf",
  "key23": "2UQodHviK78bWY3RisL6WEEb7W58413EDt5vswVJ1DBxeXFw241UZPfxPtAWAYawGgB9wrRBYAY3qAzq7fLJLs2J",
  "key24": "4sn4sFGSbfL888sRnGjaoZJx3SZfLB6PraBZgqJKE9i2odHgP8Bvwk6NwR5HJL28upVgwXqM7ZuenqqWSzcdYAPa",
  "key25": "3wP5g9sPj1cXpxpJW47JyLWHxZa4yMe8917TUSw2Fdr6ZYpYaRc3zYTrpnR9GbBhNpAihW7D3e5n5RL9v3VBRujS",
  "key26": "5pTpVpKdTBYQshKjXD1YFkAy8L9wq5YhAP8n3MMuCnRrUGfH3Kcr6oi1tcHHgFF8kzCc9nxu95Rw82EbdwYay5u9",
  "key27": "5YQ1CVQKZ9aLfjNxpuYpVJt4FpWzTbdxLcjAF6dV2rVFmivqwxKSNDrcW54HwzAeyMQRKbnvaQqJ6piWoL1L7CUC",
  "key28": "3imw2NbRqCGMQTqGF3xFphotsWoaZFT81vWSw1jsL37QydZSPu9Jkw5suHLWtE1AzvBEE6HpA68cbPVXUev2Vu4f",
  "key29": "2QwgUhaweSaxYibGkrYMaMRrWPtomufPMd7wRS8HsjdYc9vpWEhv6PGhNWd2AxNQZJiTV2Tx2F4nwYgctGsmTfUS",
  "key30": "2ppJjKtdtMLgwncoHtuJLVs8582VhECTQrvhmuZnnne6cL8nDCkLdamwLsGWiyvaCKp1sytMPrxAUXRfPjsc2Wq",
  "key31": "31T4RRLiBpRschmLZ3FmjkH9rHghC1GEKJsfhRZG8aNWgQUAoFKu3PAykngYkNjbKxJgCmQgr6EVTmmczi3pyxeB",
  "key32": "5cPnpENsm3sKVBwqNBNUJbzTywJNyNaoei5HEApuFsjT4JGmtRw5Z22wCD3DuLGxZqE5aREYjnudf8JHXzFSWDkW",
  "key33": "3GR5rWaTZGbC14qVtYypL493CMTJEay3xXkfCBqA4aMpBat7qpMJNFv1cJ3sLmPLCHSEeA85QUDP4CPyd951FosA",
  "key34": "61NZFYL9UZnjn9uqhysSkt4jz4sfD93DeErxQYe6vgZWHWH2r3ezohBQpZo8MTqFJ4fJ4YJERh9sjiD3qzKNkHsH",
  "key35": "2hTZAP9yPiyb3RYtfsqHnR4gw1v12ev2qVksZkeMgAnJYQYNN7169FxRPCXzizQkK1jB2xJsmwRavi1LKrqrYdoK",
  "key36": "5eF4b6poQvffCKV9APvgT3BvboNqH8xqMyMjEJN2AyVDKcgwJ3ou8phDAwgthmSCv55HmSiWa6H1LjScess4f8gA",
  "key37": "2tSuE4gKz51yUTtxNH3KTjwAaE3hJHySfzwUp1UqVMbCADE5TX1q6DnvxSkfRwvxhocRn2TqaXnPeSuy8PhihJxN",
  "key38": "3WyGbARkaxeiF2jy8hitRybj744gHVtZNDKuS98fUafJgweUwN2MCEAKXsxJqZEsCqU27AsLHcEnPdKGgGZyNy9v",
  "key39": "4QK55AYwoE5f9Kae3qdabfmHvSdasq7jCCSBoiJsALP9jsSgUP723dZ9VbhdP9BtAT1TNTfuruA6WgDGcc9Gxjhk",
  "key40": "4vjwxZ73T2BSyA2a4gUkh5hBYjeAqqEr8y9AfwmNppobtpxQuyZZDhmqeWXUHrFhmPQjxjTUtaNAFdRVDHE276Sj",
  "key41": "2aDw67gMsmevr8TzwZVP7EvZuzKX1cff7Tm8TPQZuGQpjhmVSHokZN473LHD2XTCivBAN4Wowbh8TdX6qx8w12Et",
  "key42": "3xzWCwjUcNtTGuVNxw5sjHmUbkGdaaHhaB7FNu75PtRduj54wWZ37TQsMh5krerD8LTvJ9UAWnZBDsePfotgdfS",
  "key43": "5G3cfffF1GebxgnmTaec5iQkYGebfmxHjje3eVzetErANJbHUvn2MEpdQavTRestfuCFgcP8C5TUWFwKytLC1eAh",
  "key44": "3wMEkMxmMejKmUaqD7R2RzRWVkp9x4T18SkC42ZYjQzj9MrPXpQuacsPNQRx45wghCkMaBCxg2d3SHZf9jpkHaEG",
  "key45": "3gxivvD9dAzCoF7gS4DEJDHx43Km4jvNeRxxSb7xx9KdHghBwP6eYNrL4esSeTncBBzENZeTgs7F1NR7omQW2Y6i",
  "key46": "2soXixtwRvVu2YW8W1eTtDoR8LHeLjUo9wS1YqcXeUbXszUBq6trWNqpMtwVUSXa5DWyoC4pqdVucyr7Vj5k7MMz",
  "key47": "2mzqN8MHi8sAvQZYGk2bPhBaxhVgWndq4HMFqRtczejBsmtXwBu5t9un44V3XGpaJ61SFi6qo3masV18tta9uPJa",
  "key48": "39UwSb8zu95sgzFXMNRuHKpC4b3bXoe6FMfCAx9swzeTG9e7i1y2wDjzyy3Q5SJd2frw3FVbsvZPGyJzeDDorAa5",
  "key49": "4FCeVc4zXKpu9GyNUQ3q8ieP8uir8K2pr5NNSptSZ53CFTyGW6qNp1cxx49RZR1eQ8sUhCvmLY6uWbh4XweyFgPq"
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
