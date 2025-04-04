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
    "2TUmatnFzg4TjwSRL2Fe5foBjLof5oknJDbUsfbHqXC5GELcQpX47Sa8kv4ykpNYYdz8bYNK9HZvsYYBJgeXV8NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9bbpv6DVEzTmwwopxmvwGD61CFvjBQM2iF56v668ZL6r4ekCHjkVYA8UHVNAynEYKAPjqBqm8mw1h7FA3Tj2kd",
  "key1": "28StBSp5BVk1r6SzcRNS8Qcf39TPgLgGBP33rNFqejDRh6NUEyvhAcqgYWgFY6V6UDXm45f9hQbeZkPVqF5dy6Ck",
  "key2": "4LeXCTGXCCZSPJHTTzHGztjF6j6yHg8rF8UFSovaKSDSJRW5ZEyDp5mudURhL7DnVrvZiExwfoXb5Ds7WcHJqmQq",
  "key3": "5eUcm4TRD13qdPcvgvWBnXN97pDXVU8MLSUoBxDZA5LgwRRgqYSs5iJfmvVYAYrVW94nqvU5Lp1qTVLJRu975s7Y",
  "key4": "bw2AjrPHAxhabV97BZTC79R3pARiPNxhDHf58GpwmaFbxWSPKiN5i36RHHUZszLPfTBocVd5dvs8JbsAyBY89gN",
  "key5": "5QM567bYUakrfGM2jUV9DZCaKUmiADGJF7sWs6tEYRTZpBcHkLd4F8r2mgsbF5Ex2m1ePW9GNfiF6Q9ob2BBPEvP",
  "key6": "4eFiYh17fyogo2JAuiX9Ajz33zo5eR2JTTRFrAGau2j6zi9JJnBuc9oUPg7XrS4KmkVbZRuPnppqLBCDP72H4SUM",
  "key7": "eK5o57HqnqF3xKLAsaY8RkGwLQX4Yw5oH2faKTUokqAqSvSZoXdobnV6pHbjD7sAWHdznLu3mCBuiDJ9iYeuHZ6",
  "key8": "S32iCBQPgk1ZXAN9vW91s7xaTZpVbQppdwVxwTK8p7Ukx1byKsuGf1Bz3W8MgrZiqA44ivVKwpm5p75zpVudD5a",
  "key9": "2aPBW6kr3Yh9WR4k8egZg8LaFrQs7ueL6ddk7A7bYLj42foyDTdrGUjnhvAQteUaVmGBsfu4hnFiXKp5U9PcumDn",
  "key10": "48nNL5Tk95C6aSHVm44UnKx4Dx4WHKHDNosdSVxRC4LM5oBLbonzXumXDy9rgic8EcxQ7JMAVPqndA1mKYvSz2vm",
  "key11": "3Yw4yx18LqPm8AeWNdAzQEnogrDJRWKViAseY6LDmKmMgYwz4p713uvXXumUzPX6h3jBJ8jFG4iAbqHFuxB6yaF6",
  "key12": "knnLBn1XDnJeWDsp7BJGLxAoHZHLabEWdDhsH8CLHACaMtNuCmTjKvNm9dxf19qrQ6zfBdbL4rYqVJnhWxpjWeu",
  "key13": "5PP5xjLQDax5AWxR8DiM57FPkmYF8EwHZxegEnqNVtMZKtkubHATqUc7ay5RgxZNEd642YtTQPpiKZpoVKL6NU6p",
  "key14": "4y2q1DKzKZYwUggaFVgGPxKMFx6AuiENhh16Lfy2WkokjGAsJXJ52S8rRbuBDo4Rwpxy6G7J6ZvMHtwyp3b9AL7g",
  "key15": "3ZkYVXDhVu7xqCyUMzVczshFXeKX5ToLcLk4mLfn13E4UofMeNKAeoPomxWD5jg3KzuMDcB5qTLQukHd5WNGTigK",
  "key16": "yH6oKxz5gs2ciW2VAbLPAuBh4UtUazpdJ7wHE6eAs5r5DcRNR9zwWSfwzGL5vrwGaTCUHm8kum1iywKrJ5gd9S4",
  "key17": "4EgbGVKjBxUWkCNbebpVM33FkzyMViZDuYyRdw6oqjwVn5Zbo1TywYewK7Hgrem4v6uRJww12XgCrLFehttyzGgg",
  "key18": "41g4keBs4x1ptCQ8rgFYzFwUHLb7hWCnqJkKqGQeD15UVkDpK54nJS9XfGME2Snm2vY5FNv4PQSbHh64gpQ7AjV1",
  "key19": "4AoKkQodq9QaQDBV57crS2gkPs3dcyHxHvd1dUmPUzdfjZ9QeKXk3vMHbddyTxtcHpi8A6bXVqRjB4TSiyxH7X9",
  "key20": "5NbvwUSSy5rvNE7WbYqCmWAuMPejvrQCxiNTjyVUa1t2G86pHtibmqanHFVSBELHyUiZkjT9HGafByPqGsSKS4fJ",
  "key21": "5f6griWWBFNpuySSDXYB69n5hMv7N3CY9hJ37zkNLjtLhrfmgeBe5UEnJfcWma2ou7ApbWBkWEfyhuBEctDTUAdN",
  "key22": "5uCLFLH1ozBgCR6sM95ccEFTZXDzxC9LhDAJz7diQyPs2mHdFewn7Guf3LsTf1GsACcsRsDfbmPncxWWAYWnjy7T",
  "key23": "fNgxgBoDzGFPjWeChgVsYYPMRiB2B4ibbP1XQmwaRrstfBVUZ8LVJAHvhyceWWktuGuZRK1YGbXazgc5vG6iwbR",
  "key24": "4M3m1grtQBZUohuLKngvKnLtnkEjqQ6nd8XjvFrQdmBHnkDQdJvttfxWpwtBJxNSgbZRw5jZwZcKsmy9rW189wtD",
  "key25": "extAxXB9VPsjS2nnwHdkqLn3mM6GrzuaZwWiNwiysgT4roPJNwm5CkzxyzBrMKncEKuGdYhxem4mRYsnJckQamB",
  "key26": "4k3QLkKVuuH7hrkxz8Ufja7yYoFTssJPSi9pfqWSzcUwqbLa7TGxK5UeLA7cnauS293ATayhEpSgpjLfuetB2pUj",
  "key27": "5N2wLQswZqecoo9isLpNWg8RY91mrF4nzuwFeC38MCvGJhojxJn8P1f1kt6uovSb1NMqcumgpUNfzubLmL1Uxxk9",
  "key28": "59NpC6jn7Q39QXAVvUnJP424bSU23xDwduDdXZhGWB2QmYZ351Eia8KhoUqY5N7FWULmnj5STSUkASwqHMwNUZRR",
  "key29": "2sHrfkoN5MuzTi1ARCV2S9a9qbULM1QYbsQptpXvbwUxdRMjZJx4yq4SjhTmScPWFviZTbApbQScAbLnJFJUrARM",
  "key30": "63EkdkwrGE9b7Wf9ktjbhQFRjygtyijYzqKUnnbPWjGqaNuw6iNbryddsp5gE6HnwCwpzxjeXdpqk8Po69dcKXjY",
  "key31": "3YFnSwBciXjqRXwHp4j3hyRF4HX4LGXv1hzS1V6Ffx7HL2LErwMwQmy9nkA2dhsX3itxtd54KEEtHwXsxWJXJgKX",
  "key32": "57CUWCDbhWMRax1t1CYTHzzSmd3dM9CgxT7Q44AAnpGkTAbXQnHWGjg16EjbotPzYUvWLpjzpEhsrschHyFpQnA9",
  "key33": "46X7HgzYinM5rZzr2CUJxVrJ5a3q6EZsPTxbo3LuffK4MxisHBAg8n5LBXELnVMSd1qxyAUmVpbJmoCfNzjkS6UH",
  "key34": "5L4wLhz4gLSWVA6Zbn2n8zeWmJNzVHpS7uS93SYxbLKjgGEWoHkvVvHnJUfNiEAkuunoQd4rmwmTmDfk5i3JvJBp",
  "key35": "qu7BsLtyZ2ZN28emrkWfy7oi63sVzLmENU6BUQakmJpAbNuSTGJjsJhy1YEkyKQRwPaHcCMCBbKtnB3CBXfbaXv",
  "key36": "Y8niPJbjKVmG7xxDsgxRPNPN4yHugJtJJwQKeChSaB3YYmwm3uhSV4arar5qgXMzzpauF3KkducPGucftLsg5sV",
  "key37": "2tu1vu4dMU3gF87neG2McTdxmZ5YZVNK25TJhW8CDVZzNVnpjsuvX59p1sHWtg7qrfCknUh7Dugm1FLy6mtJGZHZ",
  "key38": "3uij2XRBr3yyMGd27qgTYD6LPV8N4XtkkUqxeTGaqhace1NMEWvATCDpmzmcEoYfZTS53Ta4Px96HzJgV5JBoE6L",
  "key39": "nrfwVXbxFx1bDegAYboCF5zVHToGD66P9Y5bDtM7pDELWgcCjWwR4TYRCF7QeqS78zxa5KVdme3sdik4dpvxHe3",
  "key40": "5V5Y3uj3DDZ7ULtQ762hDVyBZqXnwwza4aZRdk1AEgs5ZqMCRvZi9512oxx3nvgUBi74uRCsgxghyGeCxXdUeATf",
  "key41": "3EB41dDyy3ArtbGe9KG6C4fRM5hEtXGbjMx1bs7F7bREHusA552zGn2YdNKjP71ubGCEDLGJybRCMWzHhQthGstW",
  "key42": "54cT784M2ks1acKgAai6JhxhwSC7GRrkaWxqr8VxzohbehtBcrc5dJst8R9z6jkZ4wiZ3d1TdkcpJ8zpgv85mTjC",
  "key43": "tLJSyfkwH5Bu39wzWXny2g2HycB9JpKT8ryBTwJxv2cbb9gBsASW9gQ8s9adt8bcQ7Zy8Z9KtX5PVC7joNC1qcA",
  "key44": "63kZfxs5Di9rZDaa3fP3CRB8ry9FTJjPknyvWmg72Ey9ufSipNQz6u76vJ8SSTf5Hi6r9vnrphmiQQ3XGA8bxiFx",
  "key45": "2V5nvz8vQ8GwTnzYodHQEt83bcA1zjhS5kub8NbaTQAxQYNPhZA3QbitVxwdu1ZVfcwWMgiDr6miMStGZgYo7Vw4",
  "key46": "3dhabfgEJineM29y7jPbPwWRpEXyJETTUoWoq2cLFZiSYKwY9HWoP7eng7Y4h6E4wCDMdKMpougiMJ2sA4t6R8gC",
  "key47": "2qvcrH2CUb5bvrRM9mkdHRxeDMGmprjfowLG24q4HDjZg4iGVEBGarCjuvr2o7Hozm3byoieW93dYjVmBr3u8DX7",
  "key48": "2pFter2k5nHzKmbgH6Tk25iL6ZBWA8HoSeiTknc691yf2RMTe1JJMBgKSm5eqfky8Nrz3xWXBYF5pQCKQhFkPfP1",
  "key49": "hTVjRHjaMRYqQQvWRoGbbxu1Bs65pW3GAiHkG2CcXDXKvYqun47RskMdyGJnSmnXMyd3cBWhTEqYKJJARpvkYBc"
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
