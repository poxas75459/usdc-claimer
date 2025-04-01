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
    "47eUTJTi2vaeZw1ZEjGAVe5xvv8Mv66Ex1wy2T86G8kWVG8qYRqkvTsFkdiGZ8J7P26Uumbef84KxBhZ87dacbPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrjGtkZR2ynyNGL6ckCixMtPWm6YfR99mdFsCEoyzogWzAVNmynBssoefhZJMMuG9UE2njTKDVJrqHTpyPJWXce",
  "key1": "5cTZinJTHUd6hqDWayZ8Yx8pzXdYGtJnZtQRGJp83rtv5radCjsNyS8DZGm31NX1CwrbLfuXPuBuuM9jk2SnoqGX",
  "key2": "5UFFybYyyZwsPigN4hiTvsoXwWux8byxudWEMxtFt79raVMEA2ja4TVkppLYjnYsd15YjjfR8kdbJG3STxqme1oN",
  "key3": "3NAeaSP2h9yQHrUPFNyJBYrDJC9LafhoLZi183kTWc4B5ViV1UwjpRMY8uQSwT5jQENSsSkHjdcXpM14FZt3WkSC",
  "key4": "3LSHp9mfZ2Kra6xxSDf8sPMrrWnKVFT4dhekWWxidMNWLAdtCxaRJhTJfUFKxp3TKSZtcnuEeDnLhyNVeEbnPdKb",
  "key5": "2XgDdBVxTWVigq66pxbofK5KA9eieycS8LT6oBRD6gp4NSEtQZsyAgzBSwj9f969yDpEuUbBDosFbKpk7qyHpg9o",
  "key6": "P9FSGC5pXSWRmFoERfS7qTsuGNbionUK5iErMcpcqZq7wmTQWsqQ2AuWLChNauo6J3PaertCYY6FCrQXVQPrYvU",
  "key7": "2915uTvkFEAibSyrhFwjtqNTWyfmGkJkUY4dUx9p7CMYpCyongQvyQWZX1SG1sucKFifTB5rdYTfbZxX2uwGeXEs",
  "key8": "3ABsumWEAttW7VgMEJYEzLhVKhZmodhpK1ZPPibxVANKA7Se1Bpk8tNKqpYqnrzNQYj3dHb3jthCCEKaAsQgJSwo",
  "key9": "4SduZRVV7tA2wJwsZFWhJi1xKgSGwp8FSzLhNCGjxj1MfBfh3JgChndmt6RKNf2f15z3bcV6JiPNb9YrBm4HaBrt",
  "key10": "2KeC1ct5B7mmpHpk5954BZRyYThxrYfhjHSsTEu4Qo9dx9sNU62L5F3Baa9XfCYAuqY4ep7BD5ryJ47qpCPq3d4k",
  "key11": "4fkZ9SFKq17sC637xKWKfpwkeeU78ZXC65pWRr6pu7KSmBMu3zPrXtr1GtNTPEnzBYrMuaGCgLZK53zxfMw4ZHMR",
  "key12": "621JQZsDTnZ5ppE58YDWfNsRzbTMoKz9Kv2U9yaxNijVnM3RbHQmBSaxJ1Jbeu5yiiAAxuFZcWqoXn5TihbSELoT",
  "key13": "3n7JvsiWjtKjKjZ97XT2zDZZvEZNUG5Tx4TZsedbLdbX52wBgyCDzeZNd9hcCUKhu1zTztMVpQCg5bdBGuMbvVtn",
  "key14": "64Lhh1W8eNQTQEjoxbmsKdu9kMYhJbgvEZUwwkki5Bk6FYtZYkwbfdhiEF9AMYrbtCHgS1ArgSkgAKutVSHy8z6w",
  "key15": "2ni8i11ELjEzpc8VRzBwMdgDoKU8LGR65b34ANnf1oh1LarRWHJAXQiauEdKaPu3fqhhaEybSws4Ua5BuCZWtycc",
  "key16": "4oXLWDiLPzGTaKKwtKQhnMmNdnS8rMCurrFRHSzXuqCrqFcKZHxGBezTmGg5Jzufx78WiLhJqbZnjWGE98u7kcQb",
  "key17": "m1D7X6Qu7d971hunv73EqWexv4gfU4k7Jb1GrQdMJbdApS5vZ51uf8vx1oRagJyQoF8T5dDNq9ha74wEgkUYLkt",
  "key18": "4rZCjtiZZkHW5uhAQANxMM3dNcVj9FAHcMgN3Lyw45xvkkdkdv3dyy2QEw5uXyvVgSQREF515m2FJY5AjkRGdA8s",
  "key19": "2Xowb3bQSrwgX2FwuioTF5B5jDPyYgeAvfJNRxy2ki11kQrsM4ixykgtmS27uEDGaUyAbRNVLz69kcjGhs1qGvez",
  "key20": "5EzkLoT2q2PEzy8wTNH6xpRtJZMwJwsRB4naMmNgWwnsACZYxCpvNExir4DxRT1bFKvLAU39f3YPh38rLJEVY68a",
  "key21": "2yhSPLMyoiZuieqxUYgAoXhi44m7mAjgtCW8SnnFrc4TkT5t65xFumnnBNUSq88mgZpYKTffGPtbGRaoAB9LHbuU",
  "key22": "282TBScmyMB3YsKfDeK8NdYXuDhm3pTmQgTwARKKp7EscJZqnGXKrwihFmjeYdtyFiPsYCjHtFTbrSMSk9uVRHdu",
  "key23": "5JxKa7QMhkG6xBFefUnDqUdJbFhYTi2r2ik8SfpinAKaM9dQW8iZsorPHnW1SqNTMuLwLbVaqkjEFi8PwbQizwM6",
  "key24": "2N8ocLRBtrEXi6XDMBGcS1PPoruJDoDAtxDLUbxKVGT9LHVvpKtBkAL8sNoKNN4Fw5vxFgAgFf4TBWhkC7NCBDWH",
  "key25": "5zbk8NwDYBLbmdKEagmkauDsbSAkZDqaTz8Wq4ha7oD6e3YK1zSKXwc4FVnRtN7eyrXwNB5QD3KPcs2yGGovM1R7",
  "key26": "3wzjPpYEQyHSTmEXkh1j5bCq8d3QiQUG9unTvk4JfSYZNybPAW7VnFq9LPVBmeKsFt8UauJ8kkuDYGBRMUbXw7zF",
  "key27": "5D1MF6GvW3rRMJh6M1qMtLANn87caqBbQUeMywEc2ajcJNB7diBkZpQkiSDJUejUuHP7DqbmEbw1k4tKexMu863q",
  "key28": "5CeRfeLMPrjPc2fqBKjfyzz2SVhF6unbw1ZyDKcjkB6ohYbrPNg9D3BZUpkpkmiY8wJkMon8RqzjYamHVLCAjWo",
  "key29": "4qbeud1723iTe3wtnDXSgaZ2ncqzVmisfbCCzyav7gGZbWgrrGMYBPcjJAsyQvvrQKEwWZnkwxNNLJfKnLqYCT1W",
  "key30": "5Q9AroS8cSAjGE9jzpxCBkLMoqdXJCn2omkBxz2EQSBQcpohtjZeNkSYYrA66Yp8DzZmnquWtJ1iACbjZn5ssCYr",
  "key31": "3tMmrhnY2A2VoSWUYWWYFa4gNbhiYrYUFt3ZXTiHMcn69mcPk3Tr9HhMNim4L53fwCBHBHxLaXYjjK7Zy1ZbEmDG",
  "key32": "4t5Mnw1ypzfhwSo6aTsoFEuryBGrXUYy6CUz1tsfYYhvqz9Qpc5X11pvXK6w3PLqaQBAvx5m5UGBuCgALasfasFU",
  "key33": "7op8gVZcc6NMdJECWL6gBL9zdVesY1TUvWiBicjxzZxRnaxE3VpPwGJncs7S3ottCWxvtNobCXHoEfT21ap79Vf",
  "key34": "44rnfjonRLHGciWsrxPY3EU8g9JMCDwCamBhksxQWQKhG16Lb25EXKifHCKYKKPTE9h6rw1SxMKunJBYjR2iwZbz",
  "key35": "5zLZPxJkw1kkCUVnyfTpUWDu9mqvFdJaZpxN9AkSs86VpZhL23qCE6rooHPFEvb4hHHgWTWq869zZ4yfRa2iuy7z",
  "key36": "632vW31GRPqGHWXsSbywNkY5N9jYBxNvdYw2fhC4sqMc4rEj2UHqpY16YaeDAKV1ccPUPHc4K5DKbzoAbKTBR7gP",
  "key37": "4PJURX747XfZQmrjA6rtbA25zWJYsNucjihin6UjPgyCBhH9VZ1CiLhVFU5Q5E5eiLZNYjwp8Z4MXgogdbVtfsUE",
  "key38": "3X6EAWocXqdsihSB4s3z5A1p6pU6y5noh9grC6Qy2EiPvixGZZKR78o3BJXCM8eMPQ5gHmhYJ4zwe3MLCyJPKMTK",
  "key39": "298XesNYXRas4rgsyf3K6mmcSGaGHXfnkce3X1bQcSwvUSKjPzfDWQS6VJdYQEHkqcaUbyV34NBh3xUfmCh52nXY",
  "key40": "3SDuHpGiXTNcHLMHDinm9tgqkrJHyU2stmimVo5ERa8JsFXtJUMnwnR3G5W42AzUAi8Rj5iq8cdnfpim26tBEnxi",
  "key41": "5HQS19xCzbBtChncNoDM1V4Voxui7xSRnCaR37FhbPoz8ae9ZNAzue5gEzb9F2Rh8rCmfefpEq1bgWFEQU1Wsp4E",
  "key42": "2vbHYGjdULbzFt6nn4UduCu3SzaWTRAqUMe2k5bAJbfzJckYFVmSauLFfqP494BHTNbePXfZQ866QZ4Mjku7kXhQ",
  "key43": "tojtePPMHNkJnjt5oumj7YfFtv54wMowCMPe17MvQ2XLk9BysqRpmcRN9t9uosG7ztT1Q8dQxY894JpirgtEUjV",
  "key44": "5vKm2pv4V14MoKMcumhCZxqEgzfkd6wsimT8XkLuPf8SzNKfhNRZ9BMjd9rqKrcoadm7vUwRApkgT7MGLJyxrJsJ",
  "key45": "4UjGv6qgnasU7dj5DxzKeCGftbF8AzP9nZvqZ7nAstLQrqapZkj85M6LGfWwfRK8FFz7JkfqZL7j6pb8UxPZSwqF"
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
