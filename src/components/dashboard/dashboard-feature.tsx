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
    "3yHmwGoxk5NuqfoFcvjXf7Jg93fDYduhTG6SeWMTfdsXigvjQKo33suwDtkB6J5FV1qZDdSKvbN8AKVLHbiFnCi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zk37cnA6c5zH5VEn9v24hVz1H6ShgG13aFARGc9HLdHU4EQi1Nu3Dsv6nGX1XYUYRJAmmLrwuZwgCKXUZubRqzg",
  "key1": "41cYZJZa3pm1ed8WDwKN9DPzLJEzrsvSxeZv2ZPTKavnvHc3eHFr7euXZ3qxNcvrRt9VgnR8y8bQ5ts43gqGfiiF",
  "key2": "2Px1NbCipmcK7LHctWsW34zcPqKQMySnV5eXPvWvJygM7JMtXB7zvvqrpbdMdkX6T7neHiktYKwf9LZCUWDu2ht3",
  "key3": "5SQMh5jCUzCxGtNBTZD6HTtGTatXuhzVbB4skTCmteHJM9MSvA6ffWnUqNiw25K3LyuEbhLezXLUmzKvuUSacyfg",
  "key4": "2xpdsUgqDRUCTo7USYsWb9DV1wP2V5PtAr53AaAe9oVkGfadyBfRnJwKEtGEmNkMpeJouGjB46oWCQpJvhKCtR4v",
  "key5": "3suEFa6Kw4RyvfJuz1bt3P3K4BTMmpqK9Dt8Cp21JtGRaacGSQAB2GVPoKrZZg3Uyn5YR3mQzPETMHrbGsQ1PmwE",
  "key6": "4EvktV6332q7dJidj5QQjQn2xzRBpAg7QYNUrEq87EikF1eJqRCT2Q8AMMVh1nW3oJRDpuZEKBHfyroAjEbaeWN3",
  "key7": "3nGThNpASk1a8w92AjjppxHBh5k5W5n8PCjNoKEPxui7ojVKCp8P22iMJAp3n5Sa1MchGcKkxUx4XiYUvei7fEbz",
  "key8": "3DBt74g9UQ8juwP86da3qpoGxprFazmjGkxM7qQS7U6UJS7zUW4zPkBx3JieCmLrky6B4ocSdXNmXKxwj67Fff3Y",
  "key9": "2EZfPLdrvpNdgUVrLDzpfDnnw7L67ZoLZ7cdfiaeuoePZXfN8RsFamvviL1bLi8wz5CaZ6n6P2S1oGY27uu9uMyB",
  "key10": "5NaPXrxi1NvxaNqygpu8PeBvF9PyKbvFF28ufwxof7ce9sEJdDyRxrrdvZNyXbaFDD1o9na3SBhyjMV8sz2fNnqG",
  "key11": "46N7snHQNA5Q7SFSeCybeXA9yq5DJUvyRzAi3tjfY39TewPj3a32zShBeCf1meMMjFwrqxrt9Ezt8fAchmRtHs9M",
  "key12": "5VRiGWncTQ74sfZ6LJWrMeHndDX9c8V2NPycAJzZYitktmhKcNXDVXyWn9EqnCKvxyX64TPah3Cjx4jZpMgCEYLi",
  "key13": "Xecayp3qyDBgG1GsfrvYFnJatpGFjUaPdkAuHE2M11GjKm545jcz6P5BhwSzuGijnhUaNUFRTpkAHcWuhUWfe8a",
  "key14": "3SwyxbmxxbuEQXSdk7K8v4mA2xX6gyBgWZ29aqsEJ8iHVVJ8LKiJmtACHvyfFZJNCgg9sVLikD6YjgUGn2Dz8ukn",
  "key15": "4CiFrooEKXzoRjtCNz8KBJuYQPLigTWg1o5L2zXkxYec2aoFVh8Vzzm154mmvTSZ2NvN9C9ddSm6z9KzYG1bc4ay",
  "key16": "5ZkZzxk1omvY4xukM93GUhifDJpTQQGLPLJroUJAHxGe5kSHo9y9p1yY11CTMkJQAsf13jKdFcMNUPdBiq1xQy4C",
  "key17": "3amcs9jMmaZBKD7EJqRRYXtbtf73xxmzxErc22nVyHbNymi7LDjCwDySPwyabF2Yw38B6zMvY8EhG9QcJzZFUGTL",
  "key18": "4ohRrJSq35d472W7VAqntAg1LtPcYiNsDNkSZXZmXNsmUnsny4c4aCLaceCYV1VdpEusKK3yKHfeDXauv6ipcsVR",
  "key19": "3QM1HVpbF8x6Fv2b59V7ySEdccDdE86xGKzDKJmwfREKN26j3EhxWgiJ8nXqCkhKeYLL9TwerZwQxVd1QhtMD2ug",
  "key20": "3swGX4MJZuuy3z9nfpmZLgSkMvRLtcF5rqh3ghEkZmxri1YjYfdo6gS6PbyEvJxeCSdCdTGkyLQEzgShf1dePfvh",
  "key21": "5zfDKcE8ScbFGm7YPK55rwcyLxzpc2nvbZEq55x5rowgPEudofU6ntwXrttXrJxjpjBLCSCYEyi3P9JaoNhgEsCi",
  "key22": "aifQfhhZeNTKw8gVFiBZE4a89BCycJFamGWny5pqc56hbvLdA7Z86NfM613Cm7hEVxvrHccEiLRZBQVMa7S4R3V",
  "key23": "26XvQtcrF4uahLb3kUKMV6b1nLLHFp4E8yvwFdy54jBC6FQpqXuHpGtxtS2qe7nNpBzVwWTSjo1VwQHhE2SshYN6",
  "key24": "YZxHSkLbzanL9bGx8pR4PQgADriwQ4BkcEUmTKPhEJHhhUGVTeWyakqktJ2UYPhQ2qLwfR7TERsW4tq175wsqxJ",
  "key25": "d48tE3sN1fk342gfvWD7XCYCCY3za4wj8GZP71bybthvuyzLPWN3UAG81QA8nf7TKyBfyJFHnp2LC32kar79pGR",
  "key26": "55A8wkjw1bfbavvLwJBndFMFYUJWpZtXojpwbd5QbvAa2q2i1d9qK8NgfFTGDsHAyHSvirZkaAWbayNynjQqEQUj",
  "key27": "33TBx2CXUnzHt3sBkYoz85sbdoQujrh9dNXpqh4n54JDKH75MADWPRhAHwVRHpkhSFWKgZ5FgR8abE8FsSUfCe72",
  "key28": "PXdAVhqZSCmGQe8sxLNmztvedmKmCmEFvNYVjxAP6DWQdSDdbK5xNaD2yifxM8gbouzUKRYP8fyewpFyDGj1XXf",
  "key29": "2CkGPfNsHKigWFhnvo9qppZhTmpDjvpB9d6D1wtUPeKryicN38L5T8DYKnU9C1ScnCBwjuYgmyevUCaWyTm9jNde",
  "key30": "xQwws8xLK1ckDLf3Pv74p8AHXZgGb1gSvgWV8FnzPCFFVXU89xmNimsPHMyohhghntdRR7fg6MrcVhSTeik5cem",
  "key31": "enBKdu9MSwG5mq87WRtayV5L7UNTkW3xDrhc4FAqvm1pvsy2P86tiUarpoAc7u96KzkFHZtTD97yh9yiH46SAru",
  "key32": "3arN4Kj6hVwVeCUN5szHSB49jWFvaE4AYbLqEdbdmje9B8FUjv1eXG5MgRDd7ZJJVJYwmynqXnTwS2z7WCMcqbwN",
  "key33": "3CUQBT7G2z5rvUhAFzGDeHAHcid6i6QrhNugVtLyzVWRodQJLqZ1h1fCsrWFsrRe284MRYJXnxCEa3H3DtkUGWgQ",
  "key34": "3jbg9vUQS5Vv17Vj6S87B45kS63hfxcSnUmCfxdjZWxSowo1n3BsiRoKEVzTtu5LgTHNcwHCWNy4uw9ZUZgYEVUo",
  "key35": "yRo1jduWr59NQYEdURth9RCwQBGEAtkPXzRc5yBYeQVM85KBsCpvbDx9Hc8eC1DMowCMfkBYJJdBz1iEyvHD91j",
  "key36": "5XgvFWPvhfMFkpvf1x4VNaRw23dX4fEUySVkYnyFvrTx1wPZSuS1psY6ZesDcHp5ihDUbVzGuDN2X2vntrUWrRfV",
  "key37": "64YceNV3MnxMWg8RNc9w7CV15fwATEXypi6CRmFGC3e4AbjMPe1ULax5hospcRZbvYJHZ7sDWuPJandweistszYn",
  "key38": "3JrJgmUs3pyoZTF7kFso79VpGVqLMzWz5749o4uFYsBNr6nC4kpVRpDLkttyYfV6D4BDys1EPyX5e2ZfEs5NnhB4",
  "key39": "5ReZJox8YUdufi6BXAcx1gHtqSPRvg4PEtmuXQ7yZiGppptEiJuLXqNfF54neeA6BNBrgVmWGLjypwYZUf6qqrd8",
  "key40": "doTWLBUpUuJzGT8bVw8Qbrg3TS8ztaDD7LQ2yUAcrwLJy2ZrMrn5AX9DdjyCGkENd9E2Dqfzu5Htrc4LduLuafG",
  "key41": "5857CSjVGUWnSBnwedZXgkfb8Ts3hseQsse7c2fPzq39AVWdyUhyBXg7gxEatAhYwEueqh59rHfy19abvmEzBMPj",
  "key42": "2nJ8vc6UwHzHKqGPhhpjuWqbMGW2ixafDtbrBkZeBqxD8fzqFgNUAkKyERsbEpsEYJSRzL5TGPk1LhsXB3iRZAF1",
  "key43": "3EeDosqk6fzZwp7MGj2u75gggVcRTLy1TUcoMnyhZos3d3KfkZtek5kf7k3tBBmdgBcsRJxhKDaM2NtbV5rH5Fjb"
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
