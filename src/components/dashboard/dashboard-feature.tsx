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
    "5mJ3S1oVGC2yPRi8c9j42UaCRXj2jiwt9bnj4FWG65ZEofwLRCSgnZa269QQ8W9Z9BLEqwP7VaMm24a7PwunwNzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ayiTxXithrC8nXeDaKUFViCVGgGnep7ionD81juL3zzWRWzc2B4JZucePriDFyegJoymz7YaeHpzWLFfVmJWvxv",
  "key1": "5378DZfRgmWQF2LxM7jG7uwsj2hDvXzJQ8JNBR8Qgyuvz69rYU76sSceAqQMBNhmdu4egtBjYPBKe8UPSLuoHtc9",
  "key2": "5eexaxnk4jxiYSrTp5nLoXFBZPqCjdTCBycpnLqwphcHKxmoRhf552mjFvHzibBxGYYgB6JzPpQkf9YH72URxoeE",
  "key3": "67GguJHNxxFCFfh5zxwxf4hGcokakjiiG1QdTCJ93PKckaWtSEpCp3sYQWBq5e1R9FZAa2v76VE46Yt8MCGWEjRJ",
  "key4": "fovWXZYEjqcsWj9zGz9hZ6AswJHTchUWiahs8YGEZQ2vUc5FVHwjXu3S5Z7FayqV4oZcHLwQowugqhJ1aZaikuS",
  "key5": "2QkrcazmZLLTiARFtkr2sdsKsF7YFgVLjii2kHhVWhxZ2PxLVBBD6KV9Shy31X1m49EHV3w3mdKUbwb3deYFVHvU",
  "key6": "XtZ4jxcvY1EWCfFLL1oN9Z8EEvRACsKWiCuv854NKaHK6D5Na6DwyArk1N13BMZ8uYR56Wi7t9YDts8AxQKU264",
  "key7": "Mq7mVndrLHrxpBeEFChLSdnmuz5e5noifD5FqGsBT2BwmAtWchJc7a5r8C28nC2tnqA2rn9u3GJrE35L9eXrBJv",
  "key8": "5zEqWt9zeYVfamsSsv5MbGz7fPVYEqib2mz25GR9JXdpFY8QVYie4wLgGciKxjEg8rNK5wTwChDxP9HEJLcj6ZES",
  "key9": "4v64BiVSKAPFqHXHiZpnXMfcrfShBTKiXdqPuJCHteQjcEWgf5P8MQWC2DicDwe8p2YrJvGkTKGzvq1ffWcZSBsc",
  "key10": "HDTht1dyKNaL1krt2B1iBh2x7eGvFrbFef9JwPxipQzKyuSoav8vJzr1SyTnxLynxTav93cYK3mfEertD9Nh9Ju",
  "key11": "3B2wmE5hAYxFhSBhBAzD7XQW7eBTm58eZqGAi9CAakhi8yH2GJH9246oBz8dE5puP1xSbFSCMjR2URR6mVZAbHbD",
  "key12": "47CdA2ao5UZzqr3bYBkFeSt9S95h3W9XrwyvxfR1PmWq2p4fF3HY4yQR4heuszKF9LtDMnScXoQxhkbBWq8LHtCn",
  "key13": "4cUcBTQNn2eu53TfqeevvW9f355ZWmM4XFCNUTcELGn3Z1EgVFKbqUP4n4PZBdQTyCFDoPe2uL81yArdunTdcnSN",
  "key14": "3SxxCczMmpAmZQ7k8FDYiMwXp1tbeufZ82ENfDGoPYWxpBKgonHCGqEPYk3zoNriubpgBP57QTiHBhTtnkaP6MN5",
  "key15": "F6Wmr1YHaeoUdNfpqnUMDFoBoChAnfgPUGA83n3nejPMZPVWBPDroTquLJp6eWMhSsVZYP59kKgHXkkbqs6eYjg",
  "key16": "4utWfzAbU2TzQTE3z1ZnTQMj1ZEwawUxva6VkrRWjyxA8UR3zZSyFXeq9LgG7ZvDB1HhqFg1zvQpucY6FMxUrKRz",
  "key17": "4zk3DQuaTAWHbp5NeVZKsfxgkfhGMDr5bX4WRpSgMa4sf34kEFSzfky4YycM4QJ3tEqagnDbrCfo8FABH1ovD5sK",
  "key18": "5Box6aBA46C6VtwDmiWMDZiX9QtnrCTnjrfjYCT3HPLcxShkCMnRXxAYU893T215S6XAfwuX6SZnaMWQthtx5yzh",
  "key19": "5L1sEWFheeK2sAjt13x5wyUCABTWPyEWaGwnpEDASitEvZeGGWvePzBjbpbEJyULyQZVRCDnBVbYz5B27b8Pq56K",
  "key20": "3x8tRaZhmXRAeSwjPDxeVTYVqnMb7dfu9umCVyFzTSTf9pCPXBR146zQVJjRp9hNjgv5CtJFiUAEio15evsKUCu9",
  "key21": "3QHtt6CWdXRkhdZaLwNDkmkWqBhnsBSE3AXWpzkWpHf8teQ3vtFX5HnMPVRZPNUoH8bvLMzg1WdHvP2v85FVgheU",
  "key22": "3cLJUekJEutvBqYp3o4MRE12y7pX7evevgJaApppzYcKMJ2wBYHoD1NvrBhTuUiVGGhFMzRb88Mt6LYbs7V5kEdm",
  "key23": "2hebiX3yBgKu1vJM5XesvQKasCc3KARN4Xuedc94GPFtJHJ3by21hbW6h6JsxPVFVHky3xqZNC6orF38TzLSavR1",
  "key24": "rTnemNKKrCxLCgscD7kLHBK7A19NebFV2PQHUtuBX36ou4y2bmq9ajkosymPmYDFnzcfT9m6tFZb1d5eN74ZTmM",
  "key25": "3dDW3PM7xR55BPZA4dwfkd3pruFLSPNVArTi4oiescAmzr9LVyDFo3ZqmS3mWL1Z1ehvGHe1foj81tyxGYcFT9eE",
  "key26": "2LLvh6HCFQTckBh4CxK2SuPtfEB9Yw1E3ajMNkDVywRh5oV8Uv5K8A37L2fvEirBVHBq9C54oTTnviZnZ3WeWHTw",
  "key27": "3iRBQU9zLcy4tKCepvZVjRxTYCZGVLN9BeJho731D9NEVbVF45xMQxiwcUGZ85MUayKeeN7UH7AVCPtGaPdrnVT1",
  "key28": "s11yrCU3C1ECSngaJb5a3FdC3PwSnSxggaHGowekfD2Nm8MZ7wEDo7bRRBqTbqYG7wjLTT7NrxtJyBaXgtg8eAc",
  "key29": "35wA1D5n6WTLQ2kToqhBLWMa6oTDninQveWpTqkxoA5ghS3N2ftAEza87u4Krvij66Ak37JHNRx5WMaV5VSH7LTf",
  "key30": "61R7T5jHLVo92RtkAe39x9CExY2fLxmtBiGVn8xtdk2Q9EitDbFe1QABGJFV9oEF7SaXA1KHsjJhSUHWgHYrTye9",
  "key31": "2YGvDmu7Ut3zD6G8wbvV2BXKmX5vHwBnFDRvcCwxcUv5SExVU2m3AXcBgQF2hxN8tV1z59Ksqz8HsRJU6zjWVkVq",
  "key32": "28ukcdtvpZo1YK4TVv6ePcr5c4KiHioxJPChfrFwHvetu7rFnWuBESSQ8wbAiWwD3qBh6Dvm6c58n37fmvzepAkt",
  "key33": "mRsz4ofPYENuA9VddDTByUoF2auJiP7VkgQW6pM5HbG7iqeQsGVmDH56ded7SYh3MDrcowe6EVPnDjJuA7qL3Vw",
  "key34": "4mCRLo26tsMRNHR8DCBdRWVdNLU9Yg84p45JqxfjVgE4ppisW2dPibE5yNPoRc1gS5Gc2697uZDnKhPTNN1FqGAz",
  "key35": "582PWWuJVLqAN4hiSwU7K13FWfFaVaJT35kjFnURteHXQ248xnDxXFafcH4VuP7qT9DRLZjoChxhPg6SK6ksbLi1",
  "key36": "5VCecGps8e8xBXJdGhwDJz5J9zDfGasFR26drS3oWRSfzHaKWhBJnESBiN9kogZezYhEa3ZdpBk5cU6X5hFYsVN4",
  "key37": "4Yew8gNzQ6BaMaoDU7x9nDVjVPimQZUxyZUjpqjG3pjnYmTJMdp79YbNrCUqHEJrHzay3gW4odzbNk8X58KesQ2f",
  "key38": "5PY2GvMK4NGrGrUHf7p1mQdqR9NgCw3PPBiAv5UPdhECsmRkBvBD3ac2JhHvWyLuoqvbUArMkK6QNuBtmmdeVPn6",
  "key39": "18C7Ep9VZLfQzaKnHhr1U2FH3DKVc7nEWP5EntdsKFNoBXQmhtb99NtfX7E7wjiaMrTbc6nTzBJsU6qwZHek1P7",
  "key40": "4WqfynFjxwhhakzNGKXTANLNWoFnsbQneNnu3TvBzkMQk3CRYpQXRBPfvgNFnHZHNNoShBESUJ4bEWpj8W5ejUt6",
  "key41": "5nuAVMGKfeTXRaJkqChFwgyQtigaBHio2TWWJWJg7FyLXKMP6QLhxchnKR5HnCRQ5VmpKv6hZdK1nJDG7eqdEKo",
  "key42": "3TZbtG8uVoEDaGGcFmZn6xgyKbuGKpcPG9BHWbyw7iiju5ZZ9Yc3rPxrvgBYTzYcjsDZmEVB84ASV136YE2ij2Jw",
  "key43": "4Uy3DjB2BuPNmDQRbNRufejPyWhcD75TM7jS3P9jJqRrAHLixV9Z8t9TyWiYCfBnoe395rD87coqyHmfdqF7JGfe",
  "key44": "4fVtj7Nbfo7Yy9cizimbnNtLmQNinM1sjdkqBCGbqM19zgokD82t4aHmCeHsuxct9KvNnvUa6BuPATXa4AYTjypN",
  "key45": "3QDCx4XDzgxd8SCwzzxyv2TZsunbZQvjexBSmeV4K6F7t2xR86xgmSYiBG4T4qvUigBzojMbYQDe5bgNSw1oQACC",
  "key46": "652zwubtyd8NoxgnFHLmTpxhbpJ6Y9No6J5sVSRXrntHPJbQ3odCkKEACuR9szRKk9C6o4uKcj1hzpUVY7nTvGHK",
  "key47": "5FDrBttETpMEpeQhTW3hyCtHzGUrsFvjVnzq3nepPTN2xLErk74kpLf8MHQ84VEuQPi75daRQ3jxUFBu39r6wAUk",
  "key48": "5UmipFEXCERYLnF6tnpkkECsNCPQi32SkKGnDuP9Y3Hc6MiicYc7XP6pxZAXdpcRz1dqn1815SWRL1YJkc4QswHy"
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
