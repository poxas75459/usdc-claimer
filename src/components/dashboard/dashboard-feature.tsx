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
    "3SfCbHHWb9JPAWi3oBDcT2tNWyyrf5HsSedTmSSFDhNLZxRSXGdnquC7NVf8iFfM5jLNtPN2NBnKG9mLZJXp3v94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cf4EuW44m1wvM7EMygipceKy63PprWdF6qiqCMS3sxbUazZmDUmVRqtUysWR5A4MinnbSsdQZmDR93TQ2sN6amH",
  "key1": "4ZjibAX18YgCA85m2ioneAHMinanddyKt9W5DSn62Erv9VxjnRaL7tN5t6ZcwcXRn5Ck6rZPdyh5fZjgwDDuxyuo",
  "key2": "3jvghPUoZzZXuH7VRjqr7K2JL7625eU3Jb9acT4yMV6unUXnF4ewXJsFRmjahshJk3LKp2n9HY7Javgj8Gz96CKJ",
  "key3": "zF9mByk6PLZHT8EearAw9wpd6thaMgTtZQ46XKszFVpGkSeDYpWpGAYTc4jv54WENbicm3WatfDwTewVGDZH5Xv",
  "key4": "3GKkGZZd8PyWt5T7S8GPaFv8G9943UhRejJj6LD7iWQZbfSiU7Gw9LBush2C4SCBgVTSV6nxhK6AbRSfyDWxhVKu",
  "key5": "5JLJ31QtRPCydQndsnLmvdRcyKnJRkUBJYRuQ3RxKEqYcKaYAyKdzy7rY2WrdWn6GmGbjV4iyRqF7WDwNw7ViiJ",
  "key6": "2iJdvfCxq3rCAFtWtSBBd5MMpT8hW812vBLNJ2ESiR3R5md6uE4UJWMPEMgDpqa2ps1sSBtn1y9sTnkSbjTBCoKx",
  "key7": "4CoC8eGLETkSDyoxeuiAT2UKYs3bf3LTD7DLuDELRmSoHU7nsoJjViNmeoEht97Wi2yEo3tgJh1aQNTkBAKuGmpw",
  "key8": "3QuE1PMP6jVLkKwgLQv9YWJV4Ffv51shnNyTfw4SZmwQWebLZQVpdryZCYDfyipSX5oYnuBuoaE5hyixhHprerJo",
  "key9": "4FRa52rz3DyfhGcCenPhFZEZWGKgUr4QinJeeGCjpXEwD7Xr4ui5wncMswhDe3AZCQg3A4zoEqu4oaLqRcT1nYAe",
  "key10": "3fqpZxJjd15bBs3a44JzqFv1Zu4LoX4P1MU42hd6XFc4z8VVcahrRFYh7ayFBVv1fEcYz5iRNWWUfgyQToH23wBq",
  "key11": "DoBiyEioUS75kJtSuZQuSu9XUeyLSecSNsjguevNkiCcXeEt9FZCSdhdEQbLC94WnzwckVrYCV5pseEe8uYuQix",
  "key12": "4c3LsEgqPYtQuyhrCaCKtF3ta9gyUf7UsvyqjoE1vXJL6U3ZExhfG8e7sA8wDmDqzaA4FovN6NhWraL6UmfST8QG",
  "key13": "3HeVcSVnGtt4MNuqg1bdwV5svb6q5t7HeYH4eMAMJrktoDTFBrnwsqUXbAKrtMW7KFn2BBnLHkckf2UoTEZPGSSW",
  "key14": "5G2WjCt1CtsoavfVtU9b9RXm631cPx9RHsG7M6MmHEMSSMTxD7Vc8gjBkJRUj8ZLugDb2iDVDZtTyC49s1h6PFRA",
  "key15": "2iYykTTNS26KBCXppVP4pBvd3LJPzcwhT16wikrVp7JdXr4GGcynTKMdfW7fbccYNrogKPELLjeXChRKpSo5T1rR",
  "key16": "5gBzPizFuqa6T4z3nxNd71Jd1JPPTwzGaZzNPMVyjifYVT8vJ1kyrXuc4JD94atWXJPrRrC6q53oGEmpF1zQvJZ4",
  "key17": "4kJ9TRoy529EYsmfPeqnxt6GH68u6GTUepGh8LbwYhir7dayLe9TU91HrW7JiG4on5BoXQEhJaLw6YK3F28XHdXx",
  "key18": "54xdFpJ7axqC68nvYEdsAGa9eD99AgHpZ16wYhjdHf6Rn43YW1FN3ajx5As2TuQWwTqZdPLwYtwBqQje1Dwzhoja",
  "key19": "4D35BS8TUfxjqVB2t1bsKRRgxTJv9BytTwtAHf6vVcEoG6C2wWgcYFLMepEGuRTy17t7N4VUnMMSJrsZ6Jv8HcpJ",
  "key20": "2ocZdyU8bMqspLRRfX35gBJP331aHE8LWopx5QMUXvtq4hPQKbRLckuDRFUv9CbMxrPae9N3QcHceJk4t9e52yw9",
  "key21": "58DeKrJYuAMXHs6nrPCcDxHZTgtUtydUDL12QJyPUmq6bzfuNfddMnYWKm7kMS75FPeGU8wCUdn6wx2BXjgLMkzm",
  "key22": "2yRCchBH6kw2SE6mQ4pxwXGRmArCTRErJZyffEaXkfzi4W24nr2ApjDmT6gFC8xoKoY5KWMLvzuhA3fvf4pFqdy8",
  "key23": "5j5v9cdjysejU9aD8jNTkzKP8LJe2Nzepoq87xzd5fVqC1ohjiL6ZryboQSsdy3dFvnp47C7EnRcFtUk1CcLj8hR",
  "key24": "52jPktMTKGwA4SmqVGpc8SbTVCULzKtT3fHfZcgksw27EzU5cWRwhs5F7ZXJfgcyYX5CTdYjEMmckHp9cYof27c9",
  "key25": "4Bcg1ydMHvVgLpJHXdaRLVA9RHozuUKGJNHFUP1V4xZcoXNUEZcsWjnS2JxRahT1MgcEjB4GAMFfNaFpmCpSwBqo",
  "key26": "9rhwWHuo1oHoJgxwmTwvaT1jwe5ikbRFXHB4Mh6sVTBxYcJ9yDAiCbouFAssBDLeNys9kezRyEKaBXrFTje8q5u",
  "key27": "3tc3cSrxEZmQL5cDMm5GWW8c3pyTMvRPXRvKBESDJ4uDzyMvaRDE2MhkxYmWaL61gEoSS8eD5KCGU2UeawiJDWZd",
  "key28": "4Mz69mKcGZsWiDzeJH5o2qRuvXoJosk17AzKyWsmG7oW6oGSTnG3YRFq17YFh8LA3Po6njfPk3KA352XLU53iTfH",
  "key29": "4puMhcdnkBexBoaaW1vZu6w3rv1gy2Z316PcBYpFbRXyxGhT1aJJCyqr3Xs9UMzLhXXfYoXQvnqk2JwFERMJhWrn",
  "key30": "34LLWQBtLpPLtwDK5rPfKnENCFBoEycZzq2ZAAYgo2mKBPHwDSpZvLwoJKwrU8bEscLNcv7jnbASdSgD5mkuhv9f",
  "key31": "5hd8bgYkQ7fYMfsLruMUTNUbyxXCHjFkzhPxQHwpgeQi9ccSwDkX5n2b2QtxTGi8iV2QT6SCKc3TM2sJHBifwh2J",
  "key32": "2iRNDd9uQjVDMERg8xNBb6XTkDBDGdg6s8RCA84Q1DkF9E2VrzquQu4Wjy1aw3ysh6D6WTpxhutzZGAHFqWXNEbk",
  "key33": "3nSqwRyfqTgqZDkt1JPWvHdmK5iM6weggRYoS3NSZUxQnFPR41hJcCfVifcUUFFBasRmojuLmbQfsR4sRxSHLx9S",
  "key34": "5wHVWvHWAaMn8kg1i3EMrNhBkW2ba9YUqEM4avW66gAdp4RcT3C2VLPbmYFUnzYXEY75E9G2ZY2wR3cL6avoaUUg",
  "key35": "2QZ8YD1PQADXMPHNq6rQPuXD38K27VLpzpEFch1iTzipdqiMvW35FwSSNu8tvF28kEq8qdZ3JXheVSzyyW6wjg7k",
  "key36": "3dcMVvJmSmfzpwy7W8i3YSsXBQoSE4v6SDMPPh6CHUnzJxZzY8A7oNScCaYsKUdPPLE7H1QjUfsE6RirtxZJ5oMR",
  "key37": "Rw1JMQV95Xru6Y6ogCG8gAvwmPBsAqxEgH4STkEPrXTLaQHBwU1Rdn9KMw4S9usjFMcMAtQixWVaC4orYHwyxdN",
  "key38": "wCqiYt4SvS3v5q3ZE9zpUEDTjsB87RMdx6zcwS94mHDJgXBd3UypJDMo1q33T7HLHZ3XnKNTR2xGayYYrwUR3vo",
  "key39": "5SZcNrhvUVJcz254nCzsr6BgeEfmLLx6WmQ4NrrVEwPSRSMGaBpy5dwBd6ud3v5CEwzCsE67tHPhtBC5VwaVhtRh",
  "key40": "4nUc22ox6QD8noUKdzDp8N4N5Zff3oTk5pJsCaiFoKM6cpnNjeKk8aSyyAS24yHrhG2yvDjhy6dGnJqRB255iLs9",
  "key41": "398ZU6B2Bgpj8D3XbgK5gaPzQFWUBxQhehJbZFnxdcBGWoc5xRE1SGGitdMDz4QJ4VG1W2NwW68agAYf4irnsWiZ",
  "key42": "RBJp11y3neeT2eVDfnN2KJArttugnouaMdUMwcKtXKp8kyR3ubjXYgcunvLTkZWkHna62iByVQEgauiaPJxsSq3",
  "key43": "47tRgeDUdJP6E2RzastLwiqZLLU9xDRCz6YQM1a9dYHCgsBJHFhxpYhw9HF4AX4wje1m9FKBexGggsJddg16nJqo",
  "key44": "4MJrbMgyyw72Kxohnwg5VVKmQXY5hDAT2S2MXaFAvq6DuqN5jhkwYkEJJoWRjG24HVbF17CMgkkdKQUH5DNhxnZ1",
  "key45": "53oXafAYmk4s4mCtu8nEUywx5gfeqDtDX3szraJrAD9KAsmhtunxJEjgAoR73E2VPhpfiKMmh6dpLU2hkV6LhPCH",
  "key46": "2WtNDSYgpUunSCoVzpvmYCAXSvfmPHhSkeNHd54BxvU1xgtJAG2UYPUt81WZsLobg4FiFBawSFfMxdkjA23tFSaY"
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
