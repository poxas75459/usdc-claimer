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
    "2McGykUVdnGW6urv2Rkqrhni48YQZ1vVyB1SNY6fCBJikcWcWefXaxzoUx3yNfANtuRVoX91wiDrZPFZmyEfJaAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkSBNfUVzEWMXDunkTu4gYLNKtGtxWTbFWUghtUY9Bb6y7iDruBpNBM9FabmQc3RBAjRVY1745B2C1kS4BE5NpJ",
  "key1": "N4AM1Z4ueetqejjB7tVeXjyC9FzyMgqwnMuSix1PBpRzztpXaWW9nB1yw14B1kxwNZG8pFqdK1FovaU8fdrpfYp",
  "key2": "2nNdFyGNZ8BbyH7982jUZ1MRpSZh6UXBF2SPaksj9XPim2tKj3QWEyQiYkPaWENbPosiBm6vdkTjFdN1eyLxBSxw",
  "key3": "4NpTJNuBicEGWaA4WbEfZ64VNwZL4PgcN2hJLxE5SDU4TeeWUpes1vp2SY8jJ1nTeoNqu58vcYQ4kA99JSvF8rm9",
  "key4": "3bwt5WYLypnxxDnazWhaT82YRsYQamvDNsEno8jF2g6QPk1U9Vh6UoUj6YN86TUnu7CGcuZEmeaqCxdKPk3DeBUb",
  "key5": "2DLRszdqpSQh3D9CMmhF4kkXW8tHt6JZAnJy827P9svwVGRQzrfSJsyV7Mjk29ww116vi3Pku7bs9pSCAV8rrTvV",
  "key6": "5TfrEXzP4bbe2hBZbNpHs7tBJ8YSRDXt6n3tg3HUJsCX5j2AeQCZnnzyRvrxFa4zGmA2SrxYXRZCQ66z3onkqqLw",
  "key7": "TxxvRSatA4aizctriMFmaDc3TTjL6gcTwvfAffzZPWByBpDVrxGJSQ4dWYKBH6fsM25LyhRQ8KXMMhR17nbyneo",
  "key8": "3ZWExz1Esk8qhJwdG6XSwvRrKYEiprf58PmJHtuGTPxB5pJgSYcPNw64uasTg6BV6WXfC9icoYMpCs99Xf43KZBX",
  "key9": "jbDM1FczC1C9Vk2P8YKB2uDtNuBq9Bemyutj1JZu2e6UaRuEEjJuwEW24RwUce4u4WjiZUcXSpXERqF3dZ9MvEa",
  "key10": "FbnbK2p7T7KoD4kPNEFs8VTmmfpFRDjMB93ae1WAA5Ef8yFGSEr6qt7xrQDDrCr4msHhsPR3ciYNTsuzgHfMcaF",
  "key11": "jKkoAikH3L11UkHCqJYX13fjhfDPVRjwwqqyJfU2itc1V9yvMBNmSivgdx2uSpzCmYCHdpvdqcpryY4Bby7k1Ui",
  "key12": "4K4SR5KVrFi91ur1CEfUmpbKtpB4z5FDRptLQFvJFi26VopeDoeqvZ2wzLkwosKELdyuVfPW5KLBkp3tYZhjws4U",
  "key13": "5dxXAwLN2arfjMUXnNfRNzcfZGgVuS4XWFKHFuGKmxiwMPktKUdbMkRXJmcZUnAcRo28R8sAaZhLTUPGq362BgkS",
  "key14": "29VtTJX12WKAy4VAj2ze1VmNhXWHZ7g3ohoxeXZ34rEADjLnUwZ3Rfzrmu2JXTa9Hqd1SUj9j7CAZk2oqyLNSYp7",
  "key15": "3Cv197wT9RMVsta81EPdvjyU7teTYGRiYJ3EEQTeMGJgAZmW9yUrc52frpVkyo25uPhVZyfvyTm5RKwBCw451zDv",
  "key16": "4HEqHV1SGdgPap149jX1YHwcav151svc7bhAiQFsjqVkX64AULZJC7ZXC24r6yoCkUzBEpFoQqg1zjYoNeTmyyjN",
  "key17": "3AKr8UipYX72gnmZ4wU4AiuXVYcDmhE4pfDUKiiGQ6Pgv3TnbpdD6oFVcQ12CxDxEg8ymGRVg7RqYuNBPMsZY93H",
  "key18": "2vHi5tQKP5PwciXGbc3Pz7yJuQe4PTt3885ms92yjNy2PSVVBKpQDQhMPU4m3r9gVXyUVAMZ3yGmL6eoP1yMNYQb",
  "key19": "54mto23dzKCbkhquoNcf7ejVwbwaY5RwRuoVoc8MhscMTxG46872K6vdN32zZ6JkAD2fxxNZG3T7sqEDZD1yWu1p",
  "key20": "4bM23UCwHu1cihWc17VAdFFTrPpiHvBKbtT5eYgLtW6x1Bc74c2bctLymJ9qS6YqNfr3UJnRT6Rtu6TTDCproN2W",
  "key21": "5ENMfWEKaLo66GMnQSzktarycNd17osx43iEcD8ZUe7ZZEEHbCfjoj9JyDHeTgoeXBGGE2yWBR7hv37mvPp3jq6k",
  "key22": "3SY9a43AzYAwjA7RsaZHBPJ7NVeoeuGThxgDY1EPaGFedz4mqzG2udTbQG9mkDpA4aw1ozEK4Gxw2w8tD1xq57bZ",
  "key23": "3DoNXXEoPdRvKcjjtpqjopfiCDkn7aeB4rp9FHxLZTCMyL5PEaCHfGhSpu5jsoit4w8Cj4GPPWcCMkaFkccoihUR",
  "key24": "3Mkf7YSoYeaLMrCj2gexej6Xkin8aBFcJup6wyD3sK15FnvpSipq3gFmxdz9bCdUpvdrr4JTctLkdSqMxSmDRuFu",
  "key25": "5AKRXewUeJgrBfCNuoTmApFWuWmeha9utMo2rHwiT9yqBiwffLtcu634bPMrxtq7EL4PrcwW1qyUvFb87GewfGgr",
  "key26": "44nrfDmwQq6VuzbUvf5eRJL8aogypZYPBXUf9EyBuVQsucYrFPRhMiCK8YHrJ2e8SE21FFXqDZ6hmS6XZbaBo5Kj",
  "key27": "33nd1no9Q2Pnoq3BiPNHFA7VH3YyBemXYV1VxJi5FGXTz3WZjNG39MjoMc42pF8vhF6Y3QqU8AAMGw72RiFnKZbL",
  "key28": "r4cPCFex5WqeLRdsokVr7ECM9UeWgYAKFSdArQr9Uk5j4PU7FJuwqzCFDpdrVczVGicbXDBvAe2MnPVXaHGqgpm",
  "key29": "2ohxVSKBWLnaM7BsUL7nHTyipvNRb42E6Lk9CJRwrcnLTqk37VbzTLjSBuuSsSedayuKoce1PRZDAvHBFNqi8Rns",
  "key30": "4RKdpGrPziazqnpmdrcoGNcSm8TbXPVF7MXzS8JDe9BYux5KH8Gava8BK6JucEhkAyS1sy6Qq8RuZ3DXAWTcX829",
  "key31": "2mp46uZ2SRzSmk4tdqg6crZYcXy12tpF3iXEYq4qNevz7nayXfRsYbAwPhV6zGh9mKa3Z86b4Y9pLsA8tQ1VqBdn",
  "key32": "4eAh3dRqGzAy91kExw3jQQP45tSJXPBMMjCYLgpzfsY29c4TWbKAnxEXJ3DqNU2amqMMdrCuC1mQ9ihJcronyVJd",
  "key33": "2bMn4nnvoSFWxvBnMETK9t2cQbLTyJUPc9GeCvSpzhezVyvaHw2DKFTFtQKFx9v8FYfWJV5bcuAYHoNrs5KU5v2z",
  "key34": "4j9w7hakaiD1cTReShx8n4xqjypyUAo9tweFeAm6MgKn4DKnjxzMEjXNMstZghNYwJtUwEEDyazXJxwr7LhHqtuJ",
  "key35": "38RhtKDNVcTtKqjEsnPJ3pnoXJaYRpspBGuAPppwYRDL6BHjALUdshHafPStFwfpQo44SQN2M5DZsDmCC3HoJnMV",
  "key36": "3sQYrtmQ3EMKPvkG2gU78ykxqmEXFdihHdtRodg5jd4pfrxJtRyDKeg2KGi5M2uEM6jfFHXZxwPjQDFzzcW7ADgj",
  "key37": "5wALDdTTJebqayB2mVP4wnrWf2Y8ufUoDcewMBJzYNHLfMoZMyBm5mxAVCphKrQ15sTFFX1FuA7PBHFkzLGqwAWg",
  "key38": "55jBqDY4Few4s8rdgJgDjBJjASRafz39MG7fUUjUBvFeEdggPpTyfzG7pUaLA4cdaYyX97z5bPQtiTye4EJ1rL3n",
  "key39": "1eToyfCa4FoW3wcEQ5qsSQVLDwXMEmEvsTqwC5acL9gqEZazmtxr85Mpa5koxhfuTXA4nwmh5YBvH36sQJ8HLo5"
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
