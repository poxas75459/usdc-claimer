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
    "5Zz3HqgzqjaoFtNJcJ1C3j8quUsnn9knLnDjznDSioad41CLSd2nK322oxU6icu9zAKF44FLZLQeugfcJGM3xgCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jv4TPWaNDtrHoAXBZCSdFz34QQ8mLnLeg4UdhTXWEALbtHnPwS8y1DvTQmEk7rGXexJ7dK6cqyNrnNg7at5Np3T",
  "key1": "5TtfBaYNYcGAz2uptnkD4spz7hryEMZTKXtvmAQzVyjLeneDoGsmnJ4VQ5S6zGLGKAJpM6oznWCD1dtHZbhK2yEo",
  "key2": "5Uy6LCaAHYdja7r7RWGFZDHpypeDjJQgyxFuf32nsj7W43ZifKZC6eGrzVUKgjMzyFXczkBA671BcL2CtBBgxPPo",
  "key3": "5auabEWKoP1B3uuGhdt5zshSnrNwhGcWnJS2ST2KdsBLoBhPZWLY3zcfh1WfxUupHBT6fNL3j9MZnbmBvouhyuaD",
  "key4": "mC5rrCwrummRuTRuDWtCos8AY6dBnQJm1W48U9H9HXnBRMbFaoZSKfQrHs2StkideBV5ihBzWy3XyMkJXJudevK",
  "key5": "3orqR2BExn3nGB7bLNE6GiZdwpvV8efCskzG8z1rSxyvVvkqQicAnGNkcDYzyy1Ap2VtJvCs8Aem6gEox1Cs7ssb",
  "key6": "4kQrUmfGg3M62Ve1E2jckp5FyY6MvtdZv43XQaD51LozE7vUyNE4FpBJRwJviFJBzEpSq1Y1Gwzr6HPmvCcP2M3x",
  "key7": "2n3e2wfqMWUjhwXwBzEZxtzQuVCXUp4KXSESHr4YaaQqBGyg35nVcj3LXogq8wVtQbG7SAP723zzzdKwTY62226g",
  "key8": "3V8xxR2JGnY7NNzzeDN6dFU8u45hE4DjJRf5rZdbMt77s62T2Ybj5FNhNYQ91t1wPTE5aoG9yxHkYaY5gcFq6spX",
  "key9": "67CeDGvaK2GhQyKdM7VaNdMHVrk1XzWYDxqnTHb8McLWE7NRVrRayTebamzGbYoA9x1htY7HgYp73JuuQvxvS7Cw",
  "key10": "2JFwTGCoUbF7kmYyLHK5dTh5LyXEtmvdgZ5EiLnni1uDcD29atkzuccPotacYHNpZsSA8EXjWMofnoizn63seVa2",
  "key11": "2rhjcUWBCSjr6wxFN6aKxdpvNaX9y9iovTn4Mfm6tEZ3oWg6rcpEkhZAuwqZRBmb1sr7NvU723ePWscYHhFreHig",
  "key12": "2onAVBtkhdzsXewYuQ7XVg4Dnmuf6KTrrjnuBiMmCARNkmaF17PKZstwKDSZuZSr8EyRNBssUwPbdQUM8a4GbJpW",
  "key13": "2VkNgf4CsPqL33NdUaW2sBn7Gb8PK2AUBVnnpDsS1SdMmGSbfqFNo2j6FQFeoC2n6fgqsvt4wNuo6q7iytASkwa5",
  "key14": "5fnQiZvZnSWZBD2hVZQsQPQdU99a3KXsBV2YUYS3yo4ahHjoK3VBwJZjbRmaaqzpBbMHRFs7MJoNDXLWLXqvGLkk",
  "key15": "5HsvDajf5NbJNLq8UcunykirVQhuoX1KiFEQ5VWufcqDJSrvs8M2q1AXisAk9Lk7Cgb9MVuDV6JyiW4fGnwmLH1h",
  "key16": "2oTeDYzgMK6PnEfaH4Z1xAHJD4wCzYpcGNitfviRm3zabeUo7E7A8fDMTcNaxpF1M91o3YR3Mk94yEenpzLUA418",
  "key17": "48kncijTeCLR984n5rotGQLsDeCTqZRwJoqZtxicjj45vyeYGbga4TG9Cy9mL64kkAfHCZkyBE1iR3vuUmWc9aZq",
  "key18": "4aSHQ1wy7NeQYeXFGcFZPo3ti8grXs64RooQ4ETwrRHpBqXzWdU1szhDZoKA7AHmPycPT8Mcf7JGMznm7P26d3Bu",
  "key19": "5trS2FjQQP1XvSNFyXH89d6zzQanz42EELfj7AZubnQRAUg5gdiKctMHvCJgPRCB1rxZCgtqQ7wzBCWaG2CUn1vk",
  "key20": "4D7Su2YwkuBNhnhwHvcrJygCu1zXbd4gZ9Rek6b8vP8BzMr2k43VD5aeZY3zRAMK6yBxzdJ6CjHBXGpeQbpTZfJG",
  "key21": "54bDsTBf31GpY9MnNsrTGRpHMeAdJ3Nc8UpHtzAwTLRo5ojctqBtnht6FSTMBR2oUmdtbMxzQPcS4axC7TRBtxQw",
  "key22": "5DFaoGm7vhvi7j4fiuDyJsAYuxnoKgL2mZkzzkRpF6fBPdrVF7d7Ad8rFdgMyP6siFvs5WbNJ3Q85WVMQkx98YcB",
  "key23": "5qGukyZm8wF5FSrbB7Pifq47dpauovNHJrZq9dY8u4XPZ8s2dFEx9tvetRcBcs5PEDEG2qAHPoxtiuKRHUXamujK",
  "key24": "3gCszpjjkiqq2satcPtbcBVtL2vtimrD7f2gUgmRiTm9G7YD7x6bUq2ed9HbsmTw9vL3R5MLZoPLzyWYjy2aJR5S",
  "key25": "4pMTPZbJaTdAG83MfJAvV2JsAs9NMZC2D3z1qM1TkDrZ1t65rH3hvroK9vo8KHh64YFK9hQ7RZQBsUXaud26Pcyf",
  "key26": "9vxMCBAaADBYg5yZ32F4wCCNbLUyH3kR6VPCi97Kh6pBGp5F8MsjqxJ61CYoqXMB7mKNxpBa9WhVbmtvqkzNaFi",
  "key27": "22SgDH3zZyn7rY75BtmJcyjpDdeZwoiDg8UZtxsVb4FvwAmCDUSABdkVP2rv4JUrAuNAAUCBHvFDkCuHmfy3Z5Jf",
  "key28": "vie8pAh68bMgFSCLVbWM16PMb1LFDovM5Cn1mXCfH58w3ZPapjcQ3VBVdDzvopyLpM85soxD6g53Pt7xqM8GVyT",
  "key29": "5j6V1uTqYk5GQrVSQLkfEKwR35Tt79jR7RaC4xT5PjTqVnJ65pNaasgtxhDkRBmN516ELnrk5CR11aKE2aTAQWb8",
  "key30": "4pDGT3y4oXSyJGzvZdYvUNsLs7BTMcZcxHdKgGtvWo6JXcB5A7enWVmscwMU7X6HV2t7m9x2PMRQH5GnGuxUqMTX",
  "key31": "5ngZ16XTff6C8bhb3HE12jM1Qjp8SqAvRHfKKvtEUDyszL4AWnVjUuirWzRZ2bYUozeHzbmgQA6sVjWtySU4w5gB",
  "key32": "2cmJvt8ooJrGfAkgn9eUksW19LZrofxMtFVpPUEghQJJY7vffDUvqVoYPzGyVs39mGWF4tvKdChycmG8t2HK51n3",
  "key33": "2RxgakftzR6SBhSqBUDgtNiZ3w7fvc414wk43qticUhX3GD43CqzeX2ic27HX4J3FabwWwGfWNAAQYTFWRQ3Rbow",
  "key34": "2yEbRZtfkefvBPRp8RiqWYekonT9psT5dLJy7req29apJxikinvxnrYzyCtHGZkgEGVWHo2f5qiU7Do6oGnsysf6",
  "key35": "44wtZQbawJVH76uLb3pyWj3HF3oQvgM2whjPe4BvNxPbu4Z8TawMpDAHvEEXQyjJAcWmbyB1oM9Ci5y6MeYtQ7Fm",
  "key36": "5sHFXhkKzkB2unNsCe3jfn5WdSVe9RbCrZbDttSxxaXiHwEtBxDfyYiRWi6gWA5HNbd8jvtTM3p4EhMjyJFNh6ky",
  "key37": "KYKiXZpoqh8Pn4eR8nUEkSWxdRYiPVqvsb2FvdnpyCapkypQk7U57uYR94BqoXYnLVpQoqU9oQ1vGk88X8Nu6v7",
  "key38": "4yuvut6YtCGK8adMctrPZDZXjzUtS1ay5UnrpLCELfxWzpMSheS1ixZfR8hN5fhDBQvukCE3Fo3ksTM6CzHcV8D2",
  "key39": "5ftJJ5PtWazwiVvHDNESmEm5HHR4nzSTJhTSs4p53CqW5vap9bVj7foyQieSGWDkfYbbbP5RaNeq8JkKkfLhrEga",
  "key40": "4kcCXidoobiGyyueTsbTnRVEeV5FQBAwwJ2GghVnb43ARJwc3VXtf9NYgPdB7HQvzcody9ERYZ86cp1Y9bhL5F6t"
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
