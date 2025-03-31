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
    "2e8Wda5YErZoUpRxqNoyahhksDSumQtkuHx3H6pG8qW5H4ogTEysWPbq9HLLcTHooQQnEZ91jFWhj2PvqirdXeMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yD4BMhFapso2iC4j4vaCyAFoDo2rtmdEjs2963UfX5ohkSigC8fGKQf1153fudmsB34es81pPPCd6F32HxuafVH",
  "key1": "r7f37kKRhUypCDvbnVA8GJCVwiLAz3CxrQQUT1Tu9SVXhB5CdWhpFE8a6Xm2WdWbMn4sFybSa61Xg8xyND85Cp9",
  "key2": "4Ju1sWapYGwBCrpzTqKwr7mkVf6oEFWV6Bu8CnsTUSsnpHzxiVYDiZ49LWQBbGkvsm7Gy4rXCpktKfKfwVsZNMLG",
  "key3": "HCLUXx7TsVKn9X3YuxLvNJ4dT8JsZ7qCbrciBDa4WQmWNE8zdVWsjrfLjjGj6atrGY8TgradxuCtNe2GrVYde23",
  "key4": "4ZJwK3t2uqiJfkgPBHSH41gen1Z3FfZCsQDwiMEiE9mxgDQSLpZjjy78zXoURNvqrSAwR3uJuGoTNm2Zb2MKjYvp",
  "key5": "24ZAk2WZEKsEH3u8jwtrYoZNSSoNasaehjZMUd8ZXM4YruE2GR6ZUegGb2oLKotc22ktsvrx4hMXqK9WYqvrqmHL",
  "key6": "2S7AkSNJxHRn8jwFowmm7Tvft26srLhdjUTVzphUncgb2zyb31hoFG8LUM6g2XF27opLbPXaTJWdh1P5uPiminAz",
  "key7": "5dY4YSToJZShpgHcNuCKYpecNygD5mycsUSgcAdHCd8jmL4ow4nUoh5fTy967XRHinFqZwD3Nyw4L6haBi8V86yc",
  "key8": "Jg2jGhjtUqYh3cbFWE1Hym6kngAFRmkk3JMJytNaYhPmNfkrDYxBPHcA7qCmSaum2865dhP2ogo581fUQZ1UfH4",
  "key9": "5U3qgJyvxtVQwQFBa3uKUV4RjfPZKU45KvXbHpwmzUAaxxdc89LVaRZuaUrYHv62XNXeiL3xcVHRqRwZhw8ctbbE",
  "key10": "3JFn3R5PKo3RMFEd7QQ5TSk51wpYW8LBp9uGCXF5cBXCoDHVkXHsNRE7JFJNXa2NrytvaJRLiUZgq3HpzioLopEF",
  "key11": "4VWMQ8ZoXfx2fM76Vb4q4rLnyBhmrZZ6CcxzN1LKgqBwHBXp1XRfh27FTRWrBvyanj2xqBEuwAuF7v4rnhnzTyh8",
  "key12": "4eHPc1zzEL9Jah5K5s95AMXySiRzcH5h17h9C7JUH4khcB8f5A4qaxxHH3FSoxowxNJ5z4TWMsjRGECSqBAf6v6A",
  "key13": "4KH5Rx352BY1BosMFoWocZyHS4mAFB7KB7Wh9QRfRxdgQrF5ZzBtc7qAp1zEAKQExVpr9BAdEMkfbnjr2b244Zmq",
  "key14": "21xqJsBVa2YuVzPRWiCgqCZjjYbvoeqbUXeF3WizVbXy6CdcNH6UycEHVymsAHRMmH8Xo6KkJYdAHkz59tAXK7Hm",
  "key15": "2zdHSZm1iu9L8GpB1mbErwLeuSpKTLadY649RHENTR6cYZeF6Ge1HVWtkr242LTjKUJavfx79F79MfVqXQejixye",
  "key16": "5CvaVNSFjM4pPxvaAnBP6pLjN7JrTD3Amku5fAEc2x2XLBP3gn5woWeyY7dBUv1aDPeUsZ1wzoWtZ6iea5iNawQG",
  "key17": "5WoiaY3XUNL66Prgiaygty4BrKQXp1Hx2ws1juPH6MJRsxkRGAFgk6t9QHis7seNPdZ6EwNHAtrY47cLYJLc3CLJ",
  "key18": "2NoTY3pc1DPiHdMh8ecM7Gt9TGZ8YT7ToTrkCUeHNru7ECnnt8h8ZNck6K8obyK9qHwZZ1G2qxLY1jnXvHK2h8g5",
  "key19": "4aquSFf2P7PjjSs5WdEEReBMpgZnizYyU8WEdVAfFEH29F8f3fpH6s9Nx2MwJuhxAtN2B2impK3M1WJCpB89k1Ss",
  "key20": "3JGVg5WFGuVAxjumshP4EZS2K6HZT45MKFzZG9t21NPZbEURScxw98DTjQSdHZVvVg2uDMC6Vh9br4j6mJYXZML5",
  "key21": "5HmRand47H35j2pBb1seoSUzLwakDKLcDi231J6K8fhK17hadnhD67GFk9sk5g5foa1ojwXM88d7r6PjzM5PsuCp",
  "key22": "5Boe9S6FM22r5o6vFV7TnSra7xfPBTVLF6SqjrUnrTJrkfYKtm2ZcU6WpPsrDKqpeGtzRuVHvzAwZRsnEsCtbeFC",
  "key23": "3ieNPzZnS1gUaGY9ngBi8zFzoSrZxnEusQ8bnZJdyrxbZH3DDWQ19VvZdJzjiso1Ueet88NAEUzyAFCxD7Vm1Rq6",
  "key24": "5vrZCKQ3f9oxwGCtqTyYE4m1VFi8mFYKLUsSNz2XTsyv8KwpxSBjfZYQva6U2ueNXeZkyt2V4xFKnJzRmbHKzGaB",
  "key25": "w6aF4a1JPEX484cCsLZrjB6UuS2Zb2e2ETwnoWwPsm9VvJ6WQ1z3Yy3vWXPKV16RPq8Ei81NARYRDrLWC5DTBop",
  "key26": "wLzDG9PAH8z9nPEZ4TYaEBNtddkjrSnUgqxJKZuUuCM1tEP2xajMqbZfargSzXimD9LfCF52koGBuwwXNGGQQTz",
  "key27": "5FJDXxu8tZqPvk2B39Sgs78G68UM7GcUEKvBQgrMxz9DoYeqUR5L2qrzYTKwvLgAdJSsbZSsea4VBv1APyu5hjj1",
  "key28": "7HNoA7ec1E66SMHNJsG7aHukrSuUKqKwmfmdPs4CtkubKX56fZZBBuA6mb5qddxmixATPCEbC9ojputRFMBsJeh",
  "key29": "4fxie6AesnyqNsFHrAeaWakfn2YVBPikpzEsjdRqypauv5fQQngkwEEb1DScXSjAgitWgK6yLoZtsNvb4Tp9cEqz",
  "key30": "5VBq967NpUgJNWrJn3edsMdghQJLJRFVMkUALAG8QGaZFH9mty6xbUydTpjMW6HAQpvet6PcNpyeUvKgXpwx4V2q",
  "key31": "3SMKyW9S22RQnvhQSyZnAjYnMqT32Udt9g7hXzyUubvbmK4m7zJ7XdP5merE6vtiHNmE9w7USdXF5NTysMsf6WbB",
  "key32": "2JG2oeobngJUhDpeATLc1ZeZ5KWgAVhZqTCdGQQLnvwspRC5ap4rSbBPsh5fwLxX7hGXD99TDwxGP9mxGq7ywXBa",
  "key33": "5Lqu3FPz5UBzQzyye5U9ZWcNo3nzFpTL5oqh3aSDbcPAPjytP4ri8BvbmBqtAGrSq7acaGyeHM6E4tAgC2y3Tste"
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
