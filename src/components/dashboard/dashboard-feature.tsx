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
    "5rRapHmDqu3F3Pu1TUBKwgFY3mqxmgoRi1qKjXbPvH4WPedz77uM4ekpAi893bB53ab1C2XpFB79ifqyV9T7npRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXZC3YsuK5VwjQ2rdcqRaNi8n4Qzabh1oKXH5Uq3QqjSJz6ucuDNBJwKNsShJZqCSkiCMvWYJRFbyneBRCqXHhr",
  "key1": "4n9pTjsp6xoCDfbiLbQDag2vGFaXGEwMqFtrZ9a8weVNDBSctjXwFryccja8QaKCVHRu5rV4tZyUHaRE9BSF9uua",
  "key2": "4RdhrGVRjyFnD68gQX6mek4JzqeGTxjVUAtvbXhka9TeXTS1Uj98c3NJHwunoEcb3SZQZNha5D8hUg6a4vZmjgft",
  "key3": "dXbXsvj2KRXojyuaRQnhnCWMYcyazSthZJujS7YKEg4TN7R3THGsiAawdiG6jNX4tsgX89R1Eq6ZXWfjSxwAe2Y",
  "key4": "3vNpMHbbruK7tztye3hyEb4MwdRnkwMWybcyXqDrRmPkwavyaReWHG8fvT8bgUtoxBdx7HzPgowmZQ8yuH2ewNrs",
  "key5": "NjWDCxcL84W4vA43VZpZbvfdPrMMaP9nf96rdmrqTWzGWkJM164iTS5A9zTKzoGuVBXgva1JwM1nmVG6k8qqbCf",
  "key6": "2N1cgBwE78xdZvu6rkktWZCaWSY7spVW11VStWtgS1TaNN4YYekzDXNtrqYnCSsV7JkTJNFzcXWBcU82PVPMxbux",
  "key7": "55Jg2B9HZFTV4PyVpDytR4fVEfAJE1QZ72xPc3Z4SWBwr3zET5euhuzQGTAP2LL3yqyEFTLVEXhWStuifrTNae7a",
  "key8": "JCs95YgFrH86CDSm1tzUCMMb9x9gZpWp9oi2QrjUdogxagbUqynn7TrUQFjpUC2WLmEmDoXS1L5Css1maxBTfEB",
  "key9": "5AbnnH1Hw1Js9ibPUvmssL3CDXMFEGDw3cqx37NwLbo2qqWDU44UXkk1CJJgn7fKkUFWpJoHwtjE99Dk7jCPohUj",
  "key10": "28utJLCpwTXJVSydKkdjREoMQwVE1mgadjWVmUDWrZW8CXi5B4US2qHctBL84weW8H4hSdaUVoRGJN41o7Fw4nyo",
  "key11": "gSQAzNVd4Xq6CAXRKPEwFLa4GtxNa8yMJTiFME97a4DDiUgPxbXWGVgS4fGaVSax9RUNHMBuh7dXVZYwU7X1Q6T",
  "key12": "bUtjjkkCoo8WcwJgo3sGXoNXVTXs5hW6hknZyKSCQLeqv9V5DzRvixsSNCRrCWgzKqtZAfqwNqApefY9uy8JspX",
  "key13": "4T87zwe9W4W2Zrv4snzh7275TzmNTxPwPxUTzp57fcjygpv95CP2NXUEzyW8RS2jY2fyGYazjbpmG77UjAkTXzw5",
  "key14": "25NkkhMawns75DZuWqFPRfqEnSJjZzME2pSqrbt8ftowNxPVryLCwTXYa5on46Y6EgyKd7SEVs2zWCfwNLbo3qaQ",
  "key15": "2mB98rkuGBjtcFa3xKDxLobL4g4pHcQiToCZ3TV4Sik6TjdBmuQ8nw3bcqdC2P8gQQGq5DmTePNb7H3apD3CGKNH",
  "key16": "2fA6CNKdX2kUnst8WwkQ9iy5vnByNN4XhJUeLaawKKryg89x54hxaGfZQQAbFm6zQ75S4V6fqZw9MFDcBXPXm2bx",
  "key17": "5Q6iAMR1gFokkymqkwuBUJVoTiHx64oJ7PGmUdR8XJucBzxo832omVHpPF6YWJMnzf3KMAHb3jU6CPYmCW7rm8Uc",
  "key18": "5CmXFRJVgq2BrzENmFpT72VzYmoP553D115Mt1cz9KLT4gXzUCdHQV1Vay4k6npTnAaYL6MLutcGyZQu5Mg5N9Lx",
  "key19": "2ekdXL5mhXbcEQDW4dwe2NAsMijWE49pARTLTkF5Mg1qGkTfRLNU8Mn6qnajPAv1cP6vijxuo3iQWaAYQ1difyHe",
  "key20": "661PAWfMyNQ6dXWoVyUAi1nmxwxNAegGXssDUnTg99T9tc5wbwc69WNkJXi9CBzxYgk9Da3xqPzJ2iakjTW2v8ag",
  "key21": "3poux1LV3WSpZkrQxKVJnpS35NCeYsUrcunHZfqzGJZ3m4r727RW2to3QqnNsAdSBsx8cQV8REzCw23jf3Hb3HaA",
  "key22": "52efdR5d3YR4VX5yD4JtM8wHURD78YN5uJJrwAZwizFKaS7jdjgtsXCwUBYhMTvgCw2weTM1BUYLwDwEm7NqheTh",
  "key23": "hkRDT8C9B9bFduKyyGjMWrafQZp9c1iphCmBhoQbSTZCq6HCwMiEtYZx8foNCvZyD7SSXRGyoFAZLAvnMbz5jz8",
  "key24": "ZFvx49kaoiH9ZLmcvAqmdiFCD7MPgHLVDDfQCnm4TMgFfZ6VCDJsdH1yrF6GicPuqsYeEDWhjPXqvk13Dy6cFes",
  "key25": "3towoh8K8NW5soXNCksL2skoDVcQmyAFzAo74y4m1N6DS1GByYCsffS3ho3fau6fXftit7cWZKXcYHVrF1grPeKE",
  "key26": "2VNq8gyHDj8PKxZVuocn4je7hw6AGSHZF5LjhvSrvLPnstoG6UbXxj5UvKHuZhH9jsWMNs3EDQsJQo9ggko2AyQH",
  "key27": "5iECdMNGMhwnbcGVpojneEkGaZSrw63MtzoF6Xon2ve3aSkscw2zqQ7aziUZG5PMqg3u3y614E4rYFekLNwrKvk8",
  "key28": "3LecJ9r7EC5JLNCJR1dfv6xZgMB7WyzCS6TAY6qA43j8CmpyFrtJUNzbEYGcfoNqrj9RYwRitn78mor3QN5HAG3x",
  "key29": "2rRVuB5qhxzXwPwLA7oUEN1B6L4TBpZbGR1n4J99f79oAJJWFtDH3SMEsEMRWdjHc5ak5fjBBYhqCRWxjBtNJWFT",
  "key30": "JVaBBd5cizduXXXEcNbpkw2rhScsbafygc9g7rqMGJHGU9LMMDycHroTWXjtb3y45zSb48UKakv5usnWC9h24w7",
  "key31": "5oRjjfyVYZNyZr4zgnHcmtD4esSbA8z8xZmEJKoLY8QcFydKz4jghM1kibQ2PJJkEZK2QTptqZiB3xR9TFNKstip",
  "key32": "3XuH9fCvMQgL4xdo4fZ4R7zLknSG9T9osx6HZj45U1JZxYxeZnRWLRvpKFgQwGxpMwU1qHXYrmX7coTEniiZo1N1",
  "key33": "4SKX21gAPHUP8fvTQ6uQcg8HzWSGF9UEccLRZcZ1TStZkrqronMDugkB6CtjEvfCgGJi2LERQmsNRm8Pjc3kHm7b",
  "key34": "27LPq5Crp6UGvNhvJ1ML3iNkaeJ65pFyTS4ANLYFdT63RgZpu9KP8QmnATMNGEvjBz9dwb8ZF9RyZgk9TRYaYTEn",
  "key35": "3qUwV8TujgadTAbwPmWuhAcm2FQNbmunQxu77xFtLgDUN4PTBAK1QwqDxW6Tu4pAChzQvRvzYGgpx4fNkoxS6GBG",
  "key36": "3c42NwDZx5jS2XwFfKtnsTcH8XiE67imobDinJQwkzMGTn3Cm5qv9nHDT86M8ArCarZjVqLeHe1o6o6FSgQbgA6V",
  "key37": "34LB9AFMWb1VAkvRypso7i19a91ctCxCsigJZEPXGgcLNZTH3kjmCCZAxgmyJEhqG3mkgU2N5Dj34WdrNCogmGDE",
  "key38": "2mE2qcRsucibWdEpu5n55641ASHgP9PsvwbrR6WT4c1qcKqvZEtKSsCXfQGyVkqLs65bzAzrNoGma5MpnVHJmBns",
  "key39": "4uN4NG1xPX5DZmZ3cgrRVMavTcZa7szNq4FC962oPET83TYuTGZGCbUvuWHewStqFzDz1gbBUeeWFo7uM4FjLRFp",
  "key40": "2Dd9N8dXzoiFotkSLm3LR1WowHSQrtCHwfNB1yBhPJx7uM2PA7D3rbUT6Ysu4pmDM6v5u3ynNLGKF1oNLkhgx4rs",
  "key41": "9W5UvMtr9ZaZuGaJq3s4gYkQ8yebskFBARmuSKc23w3coAcwqxis3B4dfopXWj9f4pWwYpZzXFRgiYZfUshpC84",
  "key42": "AZkue45PjFkRNXmhu1agpcEGitUJ4s1ioDYxn7k7ibH7GoBKrMwbcVTf7X9bY2vMkPuY3nBpWLGMLmxGBR6BwB8",
  "key43": "3t9bkYDpePPvNBYN9WUmWXRe6zocwsgXvWpyGfFzGrqc4smeGoFLAdz4Ln9ZEAmw39yr6ckyq3vYq2mzhuDMjQQy"
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
