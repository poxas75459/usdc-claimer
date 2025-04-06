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
    "bE9YVuQf6jxpZsF7QHzkUEXPY8tBk5KhMQfbkkFCJPbyJ3EiLGi9pHGo78k7D3A5BPxWAehSUJHfLXcKQduMn5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdDTZpDBWi8fpTDfYzvupx3djjzygyrU69u4qe4AYiRQjddYm9BSmzx9eXtq9kSbM8XFSNxHpfwKB8swv6rUiHm",
  "key1": "4Knbxa9YfZYJjiHsgw3nvMumuBQDjfnHUPH4MncMYZD7sryowxn98vTonJmmqbFQA2TGtCrxbAsrUwT8C8u31QaD",
  "key2": "35EF92gRzmzLpXeePnjwpz1GX16zA25G1oa5cgjKPWoLUo6qfHyU2H8GbSi5KVSuEmW4tsFXGPtLu2VRiyaHW4Pz",
  "key3": "2P7mxhGSE9wF4oKeiWfNKTTwwjjTS8kgqFbHhDj2MgUyc4wjw6PQ5CYASbTMPjEVoubhqRdkiygZerYYh1FbWMBs",
  "key4": "2WLFaCBTYPRqg71Mmfw5yvtsiVwe7YUnG1GrGw86JwsbfgFqag2TUkzweE8PuZtCcXMe4B32cex1pfU5dshuy6aX",
  "key5": "77DpWubViMUURMaS42wLAeHhUweVAwZViEhMmGCr5nMGj5gpi67jBqPeYwJSzGPRDMgXMyGVDkVPtWYiazf42by",
  "key6": "4MYUR7zLkZgZya2Ei2H3qauSNvUTiVNNsEow3Pj97afP3YNns9rRMVPzwwkhuAFY6ncrgJCE6CG4fwC3U7LjVxgA",
  "key7": "btp8bHnAeEZoZUJvUiDJ1VkTvKSqBqwgkSJxUpwq7gytk4bQTjbyAN1uCoKmDd9iaoPv7yawoBR69ofizAToHYR",
  "key8": "2mUNRZVKaLUyC1C5ZeoKuG4c9gFMAYBbTG8nHTiEYHMsdmoEpwwhyh9jdkwGPF97GZiNXhsRDN7S7R2kwC4DS17x",
  "key9": "28txTvoMWsVF3E5eeqjBi4D65BYuAAnHi6itFBEdfjWjyFH5ikXDDrww66xqQxuZagLaw8p2HM9XFNmZsFJAotCD",
  "key10": "5cefzEpHQ4fmcquPURyDN7fYFtWAjmBFZxGRUsHNrEGcCdNQNJy6ppLtbPCWqFfbmGMDnMK7Ti7rff1pe6nkJZio",
  "key11": "5pezVbUrVmkmGBKoFJjsLPNfr8ci3Xif6GbiYZmaiY7i17sctmz1MJeDo3srm5iAGnr9w3dMT5nAQfn58hKcXR3w",
  "key12": "3WRcryeN3L8V3juE4EwrDD5hfUmftQ1HgXVYitNfGRxgcVkerMqJwgzGMd7kCU3RsVisV4sKfzS3EM5Ywrg8wN1U",
  "key13": "3fm99iUfbLRa8PKPDr3yUjNeqaWJ1ff8HJv8tLHZsnWzNyHZ5SWNWUQDctxkHRhxvgEUxRgr5w1CqRdEMNtJcCYN",
  "key14": "2qXSLXfaEHhvpFELyZNS2pcCL7wN8WAveZeERVNrpSsGyYb8dQ7AqSAngcrfAffKdUK1E6pNqnmteXHKqPZGz6BS",
  "key15": "Nywso3FcHJ1D7RH2viM5o1dRY7SLtrQuVfDSxX9FXrgVtebyqGKnya8S14UxMPiMekzWP8BS3LyG4BYTba11csz",
  "key16": "2qKnEaHQ9opb2UPioFUV1mKrwFc7keQKRaiDUKxLZPzLLRZDuiukW5WgL2D2fB3tPNiveak5XGYjJMw4VvNSd5qU",
  "key17": "5FPcigdWX1fcpZv1gsS2i5Begfcrx385jMMt1dFSYmjDPnj5baHNzEsZBT7qhzbEVtEr5jmpzXbnWtUjCL5c83T7",
  "key18": "451SEyqv3Rt2ismcn18tPbQTKXu1KL4EQwgkiVAsDSUS6JkHnoMdo4cufxYuwLVLRqXGpYyhC9t4DZ8CQpzXrc53",
  "key19": "4CnswZ52WYgHtqPa7THq4kn9vLmn4F4FMpvWD4UNCC3Tceb3XNQCiDBYifqzQrQpYiNyahtxhupmyCHpjiyzuqz2",
  "key20": "58A1G2uyDvqQzBFBLNzNWDJgajC2JUA4kC3s7J813ww1Yzi2j65iqTLacCn5v7P3DTBdMoEDso9SkW1fEeeYdKJW",
  "key21": "3RETDqFGUYqi2hHj9FACM31AR5PjjZjnTnBqF4h3N8uV6S9t9u6tjWwJeJMWW84escX8T4vxDaCLPt1rVTMP2hAz",
  "key22": "3PyFhmvAQvJWLf7YLLmtANjXvzXRK8JwLC1gMJTWT95aUnod1Yk21dCx5Kho6XYzrh5t1LUNmbkbB3kF4dQRTJCr",
  "key23": "2yJHY5uxfZGEpRRy4vsqBrHAsHuXsYCDbAdumBJ8w6WDYbaJaLkx1vjqmn1NWTtATvxV3gyoezaMKj3zHh4G4Bg",
  "key24": "4Q3bRrZN2Sa9Ph7xzbKRaoqadrYmmH3KGJCC2u6AnYKnxxyiwb8dG8Qdtsx3nxcKFjAXPqXnqTAzouAbGPoCVetQ",
  "key25": "3R8y6b7H1qhU5i9Qc5vZq5j9g65wKm3MijmyYLA5Ywexe9PiBWBmHZtzkgRLNnRSvQagah1WZUuLP1e2XBipXE5e",
  "key26": "66TRsFd34e7c1VvN2D9HgYs8c52yuAnskEVdtK1ddTbY419GaDWu9ZVEXPNHYnPVVmmBXY9kausa15N5D4agKWAy",
  "key27": "5BHU9zwZ9VKchCCxycWbEAZYmdmmd2xEk2VBT8FEQPDFeG2Sqr1gfY1ngQhoQgnESqB8AtSf4SiYMar261SqRATz",
  "key28": "5pPv5Qwn53U6kxCPMyJNdqXwWWmUdzyLRrTi2T4JWMZRLsHYkTsokdWh8y4ZRs9uPDswaDu84qKEoPdEZkUDcXJu",
  "key29": "3BFVEYtXbHYpj8A4HQYDtfL7ifvLeNjxD2waBH7Kboxi3ENZN8M2n6kM7W9EEQBr3eaeNytS9RGPi3G4ESzjocXg",
  "key30": "mE4wJDqkNzKBWhJgetcPwzksvS7veGmdaBQmfeJ1kmNeqvCA8hjWeEYkHR4GS9vBhxkCEThiZCbeibSybuHi5VA",
  "key31": "3KaSLYUpWuUJ7bnd6MJnCRKHEdV1t9iiWD5KqLo2NjEVhkTEA4aB5V7vwqo7qNmYTuBYAVFqY6r6pm41v5JhpPNf",
  "key32": "62QbkhgjLTTNZyX7JaudhKQcjRLmZZUMMS5AVMSzK89ABYaTyDQHwGFz8AVxueEDmNmtPPxQYxJg63roCiV14ebP",
  "key33": "4D9YwZdzJAScEjwSwmbi1AaMPEv5vmg2BPtYABu7fg7SULoXzM739CKQS3rJVfqd9UzBDbXyMn88kxEjbebSpxD2",
  "key34": "2AYu4NV22W7fZzvhX7XUM1RNPCWtdj3dKwo8Aw6GTm3jU5jthgmMDdWdLrweiQ2iuNztDLx6Dcy1Y7F4MA5noSu4",
  "key35": "hCLkF7aPcxkfNd6L7VTdKA5RdYPfvmWYcJws2Gw6TULrVXpiymL1dvQ1ZJPHT9WcT1Mv9TS5XeN4BSG82uVkHGP",
  "key36": "5RZdGTod5gYsyNAoo29Xh61pF9Wfawcz8vSAbhfqDMBSdhejLiedvU5dn8NJCP5dvtcqGoU88puZVGjcWBC8UmNx",
  "key37": "4vc5j2y97TZyMucVTo2xFrfPjbFaRKSYpXbvWMwg3KK7TWJG26PrRkued2Rq22svN2GoFX3LUN6oqPotrN3uFXUh",
  "key38": "5xrmbgvVrWTbAPG6Nw6mQ4Nr1f26GWDhmpLyVzyonbFSwwxQ5hwrdYhNYXmi8suXR3eYjnj1J1hKastBbGMXCCem",
  "key39": "4BxxjDSFbuCwZT9ZaStKBSEdWmdeoFj7ipsUfHFBDgK5JyiVtN9NU8M7y58XwNX3kcRLBE3Qw4SU8TumMCMyXVK5",
  "key40": "WDx1qT4XgBaqjYL5wcpNwAaGi1DzaxccuDGjypVETCWKLsn7x3CGnH3fgbfVbFqiU8VoLPbfqxcBRTENsJeZcHX",
  "key41": "2GhtQmEs1sd89tMZ5r2K8zEUhpnSf1A9EbqpCHyeHrb8F9yAH49JKuR8nGaL8gKZsGERGa2d7kQmsUA4RdZEgoDd",
  "key42": "5hMAubaboQ7eJKd5xGt2BDM4t3YTPkG7dep5358nSPpqdvbvPsgMKfr6HNJHKMoZDkV6YT3k3NKswAxVSDk6CtGe",
  "key43": "4qVZ7MhVXn4dzdybLxQGfpGyKeQpacERqNJwMMV5N6peyAs2MqbPfURFWGhYyiAJNZCF7or7vfb8Fatg4yrRSmkN",
  "key44": "5u9ASa6PipRs2jgduYAPSe6SoHg2RWyf3fp22HbvC3wCPagAzSgEV9YZxeVmcE9uFmvDrA3PStBP9Yb8FyA2y7Xt",
  "key45": "pvp68u4DJsYaw8zyUGCx5skNkG3s9YVRcEcREhUgLPMN9HNMYgkXa5oGLLsTNFqtxyPpH7vgmuVZwowtqgmHr6D",
  "key46": "39Hmc5Zz2XwN8jQHAAFd1pXVUm4guJisiXEycvYpMsZdfPJ2YR5MF6ca2UJFfcjnjBfztZ5khivducsqSRccSWG9",
  "key47": "CcRavwTrccqZkJjnxrjNTXqL4oZZ6T4fa4XmN8G2jm2Eqz6yYEx1wvhDLjMMFKiaKQepzkqRfurcUHbiNYuUzHU",
  "key48": "5h6JQwh2euzYxGMoaSTY8FMVgzmrA12cS49xpkGC4voTLmN9X9d1akRrJKjFkhxD2MCRUVyrCCZAJvoGGfXEoKJZ",
  "key49": "58G5vPgbU1v1A2HBteUWiggW1cefAajuWy4jC1tznSrVy7aXHVtjMoQBkkxL3RQeN9d2HpeznamCM9tbPmf43ub1"
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
