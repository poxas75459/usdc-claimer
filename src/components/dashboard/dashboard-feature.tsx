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
    "5JqvQxADarqGa5CVYxvBjzSEjcgGDWqnvN5pkVaPypdp7GkgVy1h9K6iaG61S7HZ9eZQ2mspNF9yb7DZmYjRkzP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hsqa8dpDD5kdMyLv8FKAHivi2sJZj3b3ySq6cr5gp4u3TiYqxsnZivu1GQ8FAdp4sXtrx89WHFN6p4WXoMkc6zE",
  "key1": "5dphBuQXUP5izfD7oDBJMzYrNtYiLJz3UHXohRHKseM7Cd7u9tf7CSDArzu2qZCvfBaeiede7zrg1b8ufVU4Bi1N",
  "key2": "3GcugMnMzkzujqptTAYhLeGnerfSDGXE1FQc2A4qEsh2uHeQYWbPU7B3tHNw6enurLYmG7zzM725kCkwbr6ygESQ",
  "key3": "5Det33yESA28bLE7vbnhB6zXoDbMDYsRNthAUogfxgoe1pLoB6hcjV1ZmwzcEfx4rXm1sc5WYHCiNjXZAp3bPEG4",
  "key4": "61ed3ePRwjCvfPWCdKLMpEWSBTCQ7LYTcA8pvjAJgwCByJc8Rk1Ag9XJfMkwQUwR1mbgCB4AhmnKMeTSjW6ShvVS",
  "key5": "3RgYsMNaVrDSzW69gZWKhaoWkpveAApFfTQXBeiQtvjkYjYXvFoUtKBGWFkCjw5mgmFZKwqGNArrspqc7DsQQJ2x",
  "key6": "dAXrz2rGi17n2hWkqkGhzLWokh6NvjqarfFxzb9LZH5VLF6Lb8KoWBZTH5vLkoPhpioXCBxhQYgV35AQJvoT4Rz",
  "key7": "2ftpAbhtho5aPFteCFThrUTp9zMhpQEhJc6ckyTHxMRVS9fQsThqWzscsMuHgxZuswfrEXEoQpcwxNr3aMcYD2Jy",
  "key8": "4mfaJmt8oLyc7KLmCtEggst1ZwNfiAhXSPj6gbmw3yh2zs4YaMyPXY7mX8EJipMyL95Tc8p2RvaGiS58KR39KnFS",
  "key9": "tyxEPUwRExsnhTsMHo3Xfass4vJbaPb8KRWrmrnPe9WsUPbonTkgywDGC4f1ARUwimT2G46y16f4KqYUySe2pMh",
  "key10": "4ECNnmwFbQk8vgzBJ3FpkScXD8ebzbYPpqxNqNZJd2aqWqRyETbnGMgD52qz1zpLXVjhKu5SeZNTr29u5gLgwhDF",
  "key11": "fWcyZSAYfKNUHemccTaanifSqmjdTKg8voL1McmUVybak4gQwJkEcPEQxEAZHvpVB5ZDMLkhsUzXD38FSpkUe54",
  "key12": "26rWJtWiTUbLKkwq2CqtUwEraQFQDgd9EGGhCM2cuidgsM2Yzt63vZjsGhXD8ij1xbY1mGApALNJdE5z3se4mqPz",
  "key13": "23rvLXxcYHSmDUtaPyEa8AhtXE1nxm7br2SEwnpGKJKEocDpBN35cZr488RFmzTWHunRgp3vbJLh7YiXdayxzYGB",
  "key14": "26vG47CdPdKy47E3AfsfnZVMGUJcWsPyTRpJEjrBczmUv7SfYSJJpAP1W86yrgZL7e9dpGCzuqm9u6qwXA7MGkxn",
  "key15": "PZb94HHop2pohYNBubgEBRoACa8CkBrDXVmf9QJQidgfwy7Q6CmKwHSJhUgn82z2XKnHtkuLvcQ3aeMKgHjgRxS",
  "key16": "NQctLu4RbaU1mQ8bvzCLgGTur78YUAXJvz8r9iVJr7DVUm918gQsN3rQnDLwf1Z9r4jsFHSWYgGAd9yaBTDJz9d",
  "key17": "5FKt7cfKv8eg6gc6e3Sjx8CpsnCxjhjS8Uo3TVEnLx1FnW1gHhpE2qJqu4GjsTDrQaLynGwso7hHQ8diP9cFiXms",
  "key18": "cKLoCroAHiWenEZv9SC7AUxYHrLHpj7vVzWf4GV5zKPki2m36qQwz5Ye56sUxRXMYC9SHitFBN1wf8Ej1GexBMQ",
  "key19": "Ewit8VwgNMDd2BpZmGbDMdjC1cxVrkK9UypQbwWEi57cvHt54UQJ3zBXcRfQuY9chdUGGwNpEu87YMBuqUk2dD2",
  "key20": "5K8MBLXDQt6wDsFPiBFM1MUxCfVaffZXh7Uzhih5rZLd5u1AHNMqGUrZvHWQBJqjHTCkibT16FdPDETxzNBXLSwd",
  "key21": "2WKnyE69FAcRZsPfjpvxgYDjsYZ3cWjgNvmDjJttTDcH66rb2b5iy8CPnX3VdZb2MnppipbzH6N5XtcstpPNHfU8",
  "key22": "U81rtkUhEKZPnqJWzUtoQduKZF5FhyLVZYqHWuR655VCWBTxqN9U3qn7fBuS1a8igUKD6mFMdgFHzhJB2coGB55",
  "key23": "3JuZ9Ry3XMtpx97Z59ixA7BPUFaKPCU75ztG8QkLQLLVoHqrvS2nv1PJ98H8cKmpeREfzZdFsNcJU3PaafnTVaKc",
  "key24": "3EoNou9FLiGRfT5ZbhcGXyaaiWHBDU9gKSJs5P3Q73hLWbKQiZG2FBoefVgcJuV7fe2z5kD9CfZ82KNBtp7GWXLM",
  "key25": "N7T3UEDm9ySJREF79PLW4n42kS7ioN5HpaeCG3w4WDMpVHzcTmDF4L1xX2h6rzE5LaGmX71QiRLUUkX4XSGDEA1",
  "key26": "4VM6HeLgPxYqCPf5LSAQgy76fMkzFyMF1sgYvBdgV6kL9tVoRM4SSxhyZheukQpqbLYjnu362o3dK6Re7ZHVRuj8",
  "key27": "4w5DurjJFvtLGRECFDfxLAi59t3WdCzq4ePfhjGaDQegEe1P16bhWG4uZ6ZowkCGd4X9ZMAn31ay1XLdZuvx6JS7",
  "key28": "2EVf9ukbwHkSC2ZZYwvv9aA1CVhQejRPn3GHe1FXWP6gVhS6Mq2vXUVo1mdwsNBZ6jb67dHbzu24B3DK5TM6uCa2",
  "key29": "5oXWdNMANq6o6bTFQy38ugQju9ifZQh1TEPnw9H1Um8Z1Jfq7H7ogWs2d658kRj7CFVLJ2ZrnoXqZLq7ZqamCews",
  "key30": "3g2wn7LD59Ft7M8tqqoaw2VFr71hebScxS1hkv1i6VqMpXoWfLn5wVtFsGud9mfa8fYgqJNrQkmDyVMAuPb3udBS",
  "key31": "42WN87rRiakdj6gy3V8BVu79ML6yHQztww2nXuYwtaYaAmBewsav44fxBDhxpVDivLFLn5r2Zh4wEc1hEYJqDAbt",
  "key32": "2Kd2kAGKvoRUYbnFmj17NegdD69C2QpiVgkvzNuT7R7UW9tSZFvdVehhmUeGrauAPsN4D15rJ52ae6NaGLyv8iuz",
  "key33": "2zdYumYDaKMrC5tnNujKsWb52dD32urtuFCQKb8owpwZJmrmrTzkZCQpxrD5yPrMS2J3Dep7N8NuzZTnfkAqfZ8G",
  "key34": "59tMHSXygngB12mCPCfFTAEJPd5wq7RDqmsrUAUtwiKGSn7KRN2KBRZZsiK7u1BdkxQBuRt5Gh9gojM6tv7TeeBN",
  "key35": "4sG1737vpJXetiKXtaG9dQWFtjqxxP7hjeBirV2EZxB6qz8zyysvZXi3XrMoSZmiaxe3xYLqzNhGhvE4ooAaBbSj",
  "key36": "239cNhhfESqXXAKUPoRtw5PndB2kSSWktJBoNEjQV8Z7C2rX7EP8cMiouDunoYU1HTuE9iMLa4w9Pab2PonVM1Cn",
  "key37": "3ptpGgRAy8DA88FzFiRbFWjVxhWTvhkamNCYKDePt6UGCT2ABLRkNLPk5BrMbjanSjW4EjzLpuTcAwRQ3ApVKw5Y",
  "key38": "3mPngjfYZ1jJpRPw7hshkv3ShoEHkZHqSnMtffEQPYhou2cirwBJP7fU1JL7rw96qte9z34cAN2tp7NH3q8qtCdp",
  "key39": "3V96zwihS1sukxTCSw8PnC5syKLxbhGyHLq62eedyMmJnYLK84RUb91dMtLxEqWHKEQF1XseciyHSWcvKaZ54h5Z",
  "key40": "4Mg9iTbeg6RuRLFS4xMMhxWXLxhYFVP2SE9eFk7VQV7VyLMdgHqyjnhrGCkUQfm71q4Rj3TK69s5yiHjTJs4NnmG"
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
