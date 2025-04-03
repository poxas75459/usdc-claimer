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
    "2KKXUNsUYmDB3ngUQFzimAjtEDNHMvovykFao4D7TJiyh6Z3teqxTpyY2LqoJPfx386igu4cQF28KodEyRRArY9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4koJZ77nycfHqnPFmYJZdfkF8LVo8k3GMixksvq4iYtLpJYfToBtCsveUXqKxui7ngon4mptyXFEVo7FFK3yJ3QW",
  "key1": "2beEqJSnHYDJ89ynW9N8hffD7wsnzqnKFjBjbNZrMGBnSNkQsW7cwXhu5VUjJip8ePtesWMkLCwW5hf2sArvtbSJ",
  "key2": "GnDeptaPDLbyhtV2VZLyYpoA8tYyFJeX2q2xbZN1vfy6eXwtRzpwCct6cKJzbxpf4EqJahxFB2NMppfj3t9EHxp",
  "key3": "4nuStt9NpVZGEZtYKggfpbiFLBMgp915B3Zcqsg3rbXseQ9ZdXnasVMLXs5UEFw826viUHAKxap7WBCaydoHTwNF",
  "key4": "2PMthwnUtzA2R5FNnejH7kGfepNzRAHxxHbDpwPG6M2AN3SbFESJ74HtTFL9hcW2NbY1CxKYJt7BwJj17Evti5UW",
  "key5": "5q78vambmtxQbgfQh8vhS2RfjReHGKvQaAHuDM6iAsmaY8qfvFzCZyZdkY9kfnu6AUQwq7io3VJmARpk5xHP1p42",
  "key6": "5SUckjtzwKJkCRFbgwsgMWfmBnF3hpMPxVQgu2D6guDUNzUj14qomgtSWaa2UzP9JuH8AZiQS5hx9bKq48sR39Da",
  "key7": "U6XRhjdMFpCoAfhJTE5iCYbrzgypdfttj5fGVJ1krDFqtsvXZkTQhhZvsasgAX2zNyZfyyLSz6VT8ywJEJgJQCj",
  "key8": "2nmJgZ12gCQ3aDCGMmkhrYfaS2DxXW8RXXp86i16T72T1yuHBso4w6LbPBroZkQaeAkiaiFsZZ5Huad2mWygcEG4",
  "key9": "3oGRiseLZ3VDAf3pWqbQBuDxFhJ2ZQETX79y2KEg6i1NYF9SQGXgpmtRqdUGfVyiTSsD9uPE2TJnQNn1wedgbUfb",
  "key10": "2d5XGzTv8KaViSnVj6QyqRd6rpYafzuB77gfS8nq9y4o8b5Q2jakLG7zknyWHzdUi9BqgAaU2LbUP5jxpN4VRy56",
  "key11": "23pDnbPXurGRuyBgURytn3Zi69TAei3JE4FPwwwsEZvFHRcjyPFZYicLDdWWNx4Mhk3xVP7ZKhK5gWFXVppf4oyn",
  "key12": "3m8eYaT2TritR3CSvSfDxsoSYTGpkeV79mFwmkozRZbhki25x3GQWbwvB2i4kHtneA8oRxTASavfZhPP8rK3rKgp",
  "key13": "3LWJsaYTfjxdKQBp94Zsvs6hXjQi7kpUn4K5doPWC1rWGiSGUZnra8FhsEC1uphNdBQFAeAW6fiGMg2tfDidki7T",
  "key14": "nCeJEx6wg22mJmvaxZpjRvZF3pJrNJeSAgHki8XkuZDq2naTPz5gMo6LMbyt43mskhmghVQ9wZNWB3FHYGBMuWL",
  "key15": "3DEztH9pxTTbLGguMqTkKPENyaNXYiq4fsGD2xPzhnaMwR64SVHCPN7Lsm6YGLkJc8J73rxDwBazWaigS7UaByX6",
  "key16": "4XuA7LqNYejfTzVVQQcixHXF3f1GwwnTvv1WKw7ehAK7kTuVwQZkaVh6XdjebJtXisNAnPDowMpqqGHc4SJ51RRy",
  "key17": "3WRKLFiEdfekwUvJE9uf1aSfJgUs1y3zo5DHbdJpyWdM9VDdCiKWPjGBzr542uqZXVp8r8AvRdiqQm8rdvhpnk3U",
  "key18": "5vNvQq4thvWJtuMHdjKB6sv1nKtiaMESjdhbchXJYCCzC1b4VJy9bUNsYRKQy4qnKzKp2MHVW3muytmCZ3NGCjgr",
  "key19": "41EuTXsmALYGu1goKrCJxAcABZ6ipNm19pKgEP6g8ha7JKEH8No4ejUrggC3yKDx5QuRUEavuBfMkuYvZytPU27J",
  "key20": "TRSS7WheEFb1itBNieBniFbdEdMBzc5KHwcufUxr6vurZmLhnAvxvhVDiKZNjdyV2djWBkSLr27hXVBgqJoFMkK",
  "key21": "4wZPpPvJgiM2KobJpCQMgeC64mBFBXY6u3tDmnDKxbHMmf6ir1va66pjSHx1skFzY8uvSJbHdCcZNawNGc8DpfLx",
  "key22": "2NcBHLyconM1MFDBuE6FBBo56ESJjc2nq9GaDz1fhHt6kGQWHFiHjgtcNnX8FRBGtkbkL1YeKeqACuBpE1dtGrmR",
  "key23": "4bb4mVhH6Mc7WiKkiY327CjjpBQWmPdKoRhhntR9eAum897TvUgDCLUuY9ddSQLwcrDr4FrnSpw8tQzgiGbBMD31",
  "key24": "4ewjAGqEjsPrtwyfJMBjCsoDUusno24Jwo2DQfNUappFA5nRvwZVeHvXC757a3w1YEjn2kEB6DzH6gcXENHUKYo3",
  "key25": "3mbG9UUb3cxtEam9DhFXKfiKgtfyWU6YJeL9np8JBSA3pgjRbAgyG597HH3hUf9KH6fxEd27KJzg7q5moSEQJ9hJ",
  "key26": "3cYUkoy7q1yRsrEdyNuhZQWTmxgzxGnZ3ZKVm82qpDdvwQTGDsoPGiXtUP4UgrcdoiqGMFnoG9ps8Dq3c5x6RnRx",
  "key27": "65eiU1XacjwPwik5jH8KYs6UcWwphXU57xao9ZnNJkjtHE8WYSANbFcj2JDp8Wcy8WGfj5EnUPhSnoEZ2fa2pxk6",
  "key28": "64oYUixA3VVXgC8UZrstYMb6XetvfuPcnkkzakNvBgrJ5ySPbb5Yxb52ELivKEFfsTVMLYBpZZQDL3WVwTNsD9fi",
  "key29": "47ctbc28VZk25GhPSoqUw1kddrMVpEA4X3NSuTEqBgq1Z4yVVNopaSjVoJ7DrVjSdHPmGVF58VVivAQaVqhq8mxs",
  "key30": "3oxi1f9dSYf6GzfzHzdbd4e6xqAXFwvCDvxH7NjwkDERQan5Bto5P1RMQjXEfFLTxKCmTnTejd28WXnqB1hU5Lyu",
  "key31": "j37g4CFQbxDAVELEgq5FG68hn3zJ4vHKjg9n9WtREzqvzmHFQXPCFgJoVqpmJku8fNQXekwqcDqkGLoEHjJn8Er",
  "key32": "5Acm4VufHgxrTVgQDH3wHs88zgxjuyywS26V5uiooRZ31xUN9PKHbsfEwehj3aV3F6ve4bYiD76v6fquzKUqjQsj",
  "key33": "35WnuKyLCAY34HCkhG3iYMVhVw5G6m87pPCbw3F4hZHLkzbaRQmvg3CcivxNbaXVmfYVmc43MLFHHMxL2QJwX5X4",
  "key34": "5JER3fjMEeFpZcq2RFYsVrYsxXitnw3PDpfDdSqekfBgS7v3YDTqJLsNRU8QxxexEV8druSEaZGuTpAE3ts9ZbhQ",
  "key35": "3Tx5cKoVtQPK3PUcsefZmnVYE5bspXGGS8ZuougRcDQrj33e2EQweDd5huAKXPqwj3jntQ4PvmursfKwqGZU3qv2",
  "key36": "4tYtFixdRv6EscSEQH8yDyK9oREV1oRcgmHps71vUMwWAagY7ash4HwFaU3WkRyAsnByULMGEhciQnW3wqf5bCnJ",
  "key37": "4zZMuKEWo9w9yW7Kqkc3MSNRzAEPW9BUZrVUErZQ8Auj8qfuVepow7nwbKYs4XtM8CS3XJPktaVPcQQnsUGNDRCP",
  "key38": "4nbv4JZyTRwAjRi7LW8yVstTet8YLqqE8XDZYPjbLzBn9mGRHGcS2XdYGxBEUmjngWzdcf3xSWmG8DBNVsjirxZM",
  "key39": "2ArsYFxrEzgwKQZjTfuzTobioASpbXiHdx4yHiEbdm318C5wvpGYYjcE5178EZvUvqi33gNYVezaKdcSirVTwPjP",
  "key40": "479hL8p4F3LEW9cB5WE6zfPsGPhq4pmpaeJm2fyiJbRGGvfEsXGY2U3TTVkCZWQagMvZwrLVf5wS4WmTPh9SvRvb",
  "key41": "3AdWCfanTLveruXGHXVyUdq6pzQpNYte1ghvJZkpJhLpweDjkzZthkEv5KwQMYbFjS6WVTRAVRWrVBHpjovQC5oq",
  "key42": "65jdQZzjwsEo5N8ywk2fW2VqY7QAXy2NKKShgQGWWwAEYh3LFc9e6yQK4eTV4STy5TEs7ox588i4yCb1VeZpvzBz",
  "key43": "jZR98RhsAZNW4RSEBqfnxuytcw61sRmgXzzisH54qB3naYPEMQ5P5NyFDBp1LsvbfqTnqKYXt3edcZjtXfFYnyd",
  "key44": "2dCG9XhKYEJgrNvro3U5gkikmeioy9i32EhC3WhmBKyVVrcieoyFUNnhv5rZBU8DDHj2yJEaQbFJ23Ykb7ps7kma",
  "key45": "44G3gTzdHf5fLvVWoKdnJnMLbZxe5zQuQPgbpvwQcrXcrSn8bbi3yZDec7WENqg3NpPgfQ7PVctZMARLLKxe5Do",
  "key46": "5P9Hawn3eLFdbApvxz1wYv76CLfwhqJAgQNBUAdvkk6VKBNVsM2wiA9wLQjn4w4BtKMmTU7LiHbXfL63RwQ2ECzL",
  "key47": "4cHnavpS3fUKaBoXj17AfVdhrYtCMjAuwTtyhk326NZe3sCQvaRGpDe5aw8WZW9wi4bV6txghnJAYMfZX1ebUv5Q",
  "key48": "4fqMnsnDYDfJna7d5i2bYfLCUs4wwrTXgiwUsJF2YX9WRJZU3275tBWyNZWeZdNJuuWbR7WxQ9E7pJDBhT4kG645",
  "key49": "25EsU2BVeiS9Y5zWAxbmzp3Piy7LZeymoRtbvEDkEAzVEZySgFGkJAAvE5Cfx2TFX4PWptE5UufUkYtYgan4StM1"
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
