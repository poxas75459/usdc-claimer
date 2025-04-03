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
    "5aperNt7mdhM3nwdcaSBduXwNzUnSrNnSdaavE98Z2ujjhFoJibnQtbTH7EQvVMJs83YGB4yvs5qaL8gC4ny1c9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5rEDYo3iKrtRCUotNHpxY74sqq7smxDPyXYWqc3ZFF2dCD9Y2yPrL7jfey7evpE7e8WgXJH4PnTT2XnxAgf5qy",
  "key1": "3Z7V16yhaB9RLWRxFMqhdecHVHrbimMReqsg98uoBoHa3SCZ6p8xXDptZgzLkCoWb7KYDBza7aQgp7FUBkwo1cQV",
  "key2": "525bLX5N2S8hwGWNM6DsDH46bx3k2ZGnPzXmiSc3vHmdgNStA6URECLAqFtnvJN2kAGw29fHcGhd4mK15PsP3d8Q",
  "key3": "38DLKLUPPsAtki1wgRVVVW2pmbpGBhDvSjQ5mg1KwwmqhxW2HTJpUncyVaiijmK2pahYYBTQBoZBfLX9VY8SfpvH",
  "key4": "2NGjLZw5yx6P3CozhLSM3E7JjMCXagVgppDJ5DP9eCQv7T8fdingAXTy51shx78FqrKexs9Dj5WAoGpkifM1JKC3",
  "key5": "5HwygJkkEaq6v5gbbG4gHYxFQHUBZKQURHikzRMCeds8ztPTgmLTGwcFshX5TppaDaz2Z3vAdgxLiJPrGVsV7foN",
  "key6": "3UnyT12Xj9rsmZd3T9D21PR1uEFt8fjCrHBbgBdNx3HRpKYG1L7S5AJugcaLiRK3ZyjbqEqzsVkaj8LoBmuQDnTN",
  "key7": "4Newp8yvZCU6NkqyRfXKZUnaeaafPb8gfs4jJXUjThGj1pLZPHxrBDJBPiWxp4vTXbzzre9TZfDb7U9JvSi85rff",
  "key8": "3NvGFLZPtL8M8kyw8Vo9d4woR3rY2m8rVaCfywoci7Eyb35zQ9hPiwCjJAty2mDU7kdrGqGgfwYa1Hb2zQ8r5deR",
  "key9": "MsGxp1RxMFf2qpScTBcDqqFEuYKQQXBkmLwocCbd65yGfq3LY1JtUH9HJBmNCCUkq7Vp6PW1jDhVUzUfyyjE52x",
  "key10": "378TpuFxeZt9tcfn4Lfrx7xxyyfZi3qKPpnvcTqN2kQEFUMdMks1FfSxe9Z1ekdew2XdZv9yy6gadmRTt1t8mjpw",
  "key11": "5NQyWN5DVp57t7Kt5DC4MYx7BB1zne2jNA3uweZrN7VEKVDRnjRSqxnf9j8kerskR6wzkfKdawG1ftxL3zmQxFhB",
  "key12": "4Cgon6aMgNyTJ1EyXJkQXHghiHuLMXpdD2MKvB4Uvhm5uUfSBj9anPJv9av7vTjgRmXUvzTCAoBE5uK3bB43AA9K",
  "key13": "3867WjDTUkh3fRe6wMDWqJCnxjsq3qYUbeyyiUorXe2PcCa5HZLmkKDPiQfWC1fsknjhxTSyJDWhnmynVyYzeGgG",
  "key14": "4QdFstxsPTesNs7ZhpnTNioaSTX4A8hsnuNogaUHKxLDKGeXEp5awAuXoUPzuB8HMJDBpeky3MYHN3fTRoxzypaK",
  "key15": "2GCwfsHiohQMvN8FZ9tx11hfMqi4SwHU81YprXf8reBhZeWC2Q4XZL3GESjTJ3LRFEzGUvFoskgCzaS4QSCrccnm",
  "key16": "Qpxigvg632JkRjdaUikkK7VVwmaUJ3mzVJ1Auuj82SmiaFh3ut9exnd2Tynx27mnvz9LynMX2oT4zVZbNjwuGuJ",
  "key17": "4GWm2e664FGCuhEFB5irYpzSoCVvhshh1yZjVfsW1eS3K2abnoz8ASpYZnFLXq8ZaGd2ccQUZkYiLrj3tjYFa23H",
  "key18": "2zqAgbFoJSMKuBtcYB9d8uNVA4Ge9FtyJKCpTqWSc6fDdUDihn6cLpVWcfihQibJEspfkJLfApb6Z6vi6hLJLSwP",
  "key19": "WXo5BjzRLotuFs7SwEYiPTEzX9FK1sr3LpB76PXzEakvjA15RFBu3myctpPxTHLsSwDxjsMNgGQrf3M5UXSxkT1",
  "key20": "vsLK8KzPMBxAY43NZBha9fybaZTcuaiX2tysLHetxn2BYaecotSa1PDyvtQqC4Qe2rTSeFFk8YkkRVtcjqeXM4L",
  "key21": "FTrhrmJJNbv6W9uEWjQxLwAxdZgm9UPzGXVhnaoVKXFSKo17amSGcyoGVzm42ZBj4QNHrxgBFotYJQpwQgaoRhE",
  "key22": "5tUhM96XPsWB1pdeige4TTCxZNA7Gjf9kRvN6xrM5m2QYnSr1EQt489Ca2tVJ2s8dacvShVjRh3E1mmVFAcEdFUn",
  "key23": "2bYDq4tgFvUJKqu1ujiS8wcaVfAQQM8mhSzU25Hea9nGTDGfx9PXTBKmejwPhWZiAmZN2Eya9YDFEzEurWxp8ngS",
  "key24": "3x4oj5tcvSUN5MHNEXhvcsxkBUz3QXoZi5seJPPnS3ccJTuvgrMwi62ykD3NQEBe64shJp3hCKwAvZVEqCxzsdxq",
  "key25": "2azejzV5LdmJc6gdyuRuF8Ss5G917azvRvEyaVxfPBcAgKcaNcT7iZrC1MvfrReGUMi9pruKR5jq5h9Sk1duXkvv",
  "key26": "64tbTpHiQrHYLEJpHTHksn6He441t4e7AhFeVbnz7j6Cgh5EKtzxAGDT2TDtPFkYnt9QDBLPJ9bA7SThtKuaKvPb",
  "key27": "4tXkPtyVwYSZ2CtxFcao9pKu2YLDNx7kQ64ZktSxnybPVBpdA9FJJsggRTF6uz8WoNqdgC58EZV2Kh2Lnmi2q6vw",
  "key28": "4F3q3Q7oDayx8yj51rAd2JHs6Aefcp5aX2YbdxDd7izzCTvd1DgRP8X49sz2QSpWzqLutRGiNhYbfvxCrfv6FNkD",
  "key29": "3UL1aqhi8129ZZUWVQb2XEkCBpBW2kyuvRzm36fcjdnYw6c8aKUA6yJgR1CJM9K1Vnh3kzN36dp1izMp9vjZeYuT",
  "key30": "25pVx84duFcCDTp5bMZJLJtKSm7HK8J83NUwK5ngTLRSmkMn93HnrZoAXdXkE5ZsJW3rnTgdWzdc6j2VoTRzz1Bn",
  "key31": "2vFSw64MDBtUKHcXeudkbCaXs8uNCt4y4j8uqD57iqwgFk3xQS2T57Kuek94UqP34Cx8KUADjNCi9mTyzQSGLtiE",
  "key32": "5xxiAwzEFPzCFucEJwjo7o5UtvC4vLBkf6UsXvB7iPd51gxaw4K5FU2oV8cS9gck2EpWzcXxcceiL1ARh4gxXGMK",
  "key33": "29BvaM32gZ2BZVD8RpB9kN8kGJaKiPfaZ45r4nFRmGkHoWbQy2DNPmKnJQVyDb9YsqB8zbJs97zZm7fqAYHJ6X7B",
  "key34": "2dWkcNuKqLmzY6sndTSwLncvaWWaG7A7N9ge2PBc8W5Q3kG5LxZNnEpNTzbVM3QH9hLTFojmBp3CprJDMxFy9UNF",
  "key35": "2RX6u4fbkJBy6ZUBdVNYFWw3PqXViU9EKqFexy3DjaAaycNXqyAfCDDYgWSkcbX4ojZsQJD2kgYc7YSEUXwvkd4G",
  "key36": "26cp6Guk4yrCs6bDJ3sEnhCHXzLZLjG6MghmRsetq6sqWVe2QpbVDWxbQ4xFZzP3dFXapCpqpFuumQWhfLki8ccv",
  "key37": "5J5E18MHBo27VmMGmXF9R9676KguywJTC9kQjz5ZzM9zLnmJ9ZU7RuzsfDSh8d1UkY7VUB6n31ePoBv3tPGyMW6p",
  "key38": "2VzV16nCEgnQcBp1jxBxGnVRYExir6L5qvoi5aQVHWoHva1gZd9w8z3P3t6f7bFrLruSxhD2xHPtLEP2RNuUH7zL",
  "key39": "Jzv39JemwRJVnPApLbgRBxjpLbr4Ls5u4PKqD6nVmW1cvYzyuLAgSLAk7Qf1BF9TwoUqNZSoUt9qFkGWWqKkxan",
  "key40": "k8WXbmvyYiRd5oiJ4cZjxzNbkoqQx6zQceKuzptmLTuoDUWjNPiY7FsYnu87YGWcTvzYnZ5R3xKhSg79nYwbDbv",
  "key41": "3iRpmnEify5QwQf99z5VarSUPfCBqz5Wt5JoZgHAGYvEmdUaP3akkhLoSVBU8R4q6ZpxRJCT2669RmeCVgr2x3Uj",
  "key42": "VeNagvFtAyDJ7GdduxzJLj59MWEnMmpFYPvJHjgyGQpQrmH2Wf7DXEZoN7nB1UFsSPaZwT3KyTsRYR25s4v6JPG",
  "key43": "3B8s3uWgeuBA3SmhK1J4WVPYfdaf3xfXE1Fefwmq2okoKZgDUxDyzkyazKzaFoMwRXeYv7BkxS3gGP4wG9Tkg3Rk"
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
