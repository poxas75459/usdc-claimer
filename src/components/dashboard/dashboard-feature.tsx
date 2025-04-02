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
    "2zGoShyqDTUifZvGeLxfMMXCKxT9LqQ6mSVqPo3MACJFNgpPao4zEZxSbVdkto3yGNnStWL8ir8ArauKqbrEgcF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jr6iN1bzRwz3MYeVLKdW8gVLyGKkd5UYMjQnyY2AadRoNqsiRLwcztztVcFpCFEbabyBRmSFR5F2bisxRYYG2At",
  "key1": "3Ss9fQ6zfBy9ULSHEQiF3yuVqsWZzGUZPsL9X4DnNWofpQnHpoA2xosfR4Pv2x8BEpmXinFryD77dtb6zbxSnApd",
  "key2": "3CwpBgW3Ryzo8kVovRf5pxNwRdMQPgEz7znZY85VCgkSFrMPCUNunM752jo9LTeNkqASkPnQ19xCujfroXLMD6mU",
  "key3": "5iAb8CLjqBDZPL3roMwk71LkyQHtYC4NyNTC1uguq3hKLtHoVLpauaQ3iTyBsSYTTznnZmeqBja1h3Rv7GBufckv",
  "key4": "4vsJQUqsagfrdSF55DBzC3KqT3KrRMk7fNHXJzhen8vvW9jzGwZ1E3qMUemHjB2fhPbXatNrvpnaEYv4gtWiXH5T",
  "key5": "3bkcnmBoKwJ6o91PDrdT91UU1Qfx24gRpzj33cwqHMFyLgg5uWPYcrL4tqZWDSxteBejwn8sxBdthACzRacGbc8t",
  "key6": "5MLxU2FBFh1tVGvGtZEjoRj88ACdtHaCMK4wvCbApzP3hUnQ1UMLxA529hXBCoUXXdDgwW6oA1wQzZs4VxhcupGq",
  "key7": "5JT1H6FXWKz2TEXaeS6MGiuWmWe9EoyZHyKecCS73idgrAEhgcwpz1xBczE73yA4UKtGYYh776KxcGf2LJ3Yp7C7",
  "key8": "2GHG1EACTz2miuv67kaLKZoVWQ95ABdCEuwrEnbTXtq6qrKbnysCZf9u5DnaCR6b9YvdYYu1HvE33TDYTDPLBULE",
  "key9": "5Nkw4mnZTCE8kosM8FcGiHk5zFr9Yao3yA59qgSYpeqKQqr3bQDpRt4oM2WnmtEztwP4hJTdWqGSedUk2fwYMMsE",
  "key10": "5kGEpMN5Jv1jMqjfsSo2AkHq5mz3sboPiJ2N3qfhuRZwqqMkxwiaGLWwkjcULCm76jopuPj7Z2GHyDfC9YSAbopK",
  "key11": "2MoXDFCX1s4WnMJmFRT9bUt3kQoyPgrLHgKMDdNZTrSGFAYMXhCBWvxR4bLDfP7bSiryD74tmHsLBtceLvYK7tta",
  "key12": "3jutcDwWcPHDRygzVvP7r4jM4Xye4te6nm4twHrExAdsoGN5xjZkBC27hvruQfiX6dxokJmdRj4GMqUWxGSRL5VE",
  "key13": "3QNPxJGAQHjD2yHEiUzt8MES8bVG7SjGxq8AEgHU3NqzweX9mw3RvxwwtqeGN1mhibyUuXpA4ajU9puYXgoyZeF6",
  "key14": "2PrtokfU1hydTN2ZJbokkUf2DxAXf4rP8rLCrVnTEyPG8yZZw3VrXGUaJ4W5vNSRkP5WybKEtZXZwVBUFNU9WVf",
  "key15": "NYiTvhNPWB1RgiosPScLHB4rwzx5Zaq81ne15Xf5w2HprYzdiYURJsp8bmBrdaEerfykmB86ZPdHN6Tv6sMReCq",
  "key16": "3oUc7KjdDL4oYCEbTertpFSXcsz6Zvp7icnGSK6PXxcBdNNSG8AM74cTUFGm2TxGBFN7emh8B4LAmo3AcTv7Ao4p",
  "key17": "57T1Yh2pP9fgDw7pvRud42TxP9WX7X2v2drorg6UtkubpsTxzWthG6NRvkXm5RvufPBnkdvcZXWdQXqJWrnabVD2",
  "key18": "3ooLBHCdW3eLeWsEYnHdLZ8McXPGnXMSCYAX7USV48X83q9Ypz6dtcXVr1ouZrEBRG43MEQRcgKyFFPSopaxhLPN",
  "key19": "5Vmy2V6gwfeTYvyz6Ud4nTdz6TtRaU1rUrjVW83BPWtoyVCWXKHF3Gco6fcz7EjZhLuiGybPHmqcocypCZn1awPg",
  "key20": "pVN4hBfyit9hkNKhbpQn6UtnYWR15Mmb3KKLVNoQfJPyi1vqtVYjaABSJGe6C4wF1KeLpL6Q9WNGjFk7mxphK18",
  "key21": "55pn4M4r6iycUkvus3wfEtMUYQvL5TjYqKCrzMJaSCA2WPvSyMt8ZJEh6ohxhhKU2GTSYbQjgw8zrgVUvN2MNzRE",
  "key22": "5wcDzAk3R7mrPnkuaBruzWzkLTmht8BA3LLXTGn1xHgfwGhwpR8eSKr6BNpVMJ44twqxxqSunjVLPD2cdKwnr4aK",
  "key23": "5rvc4hPEvPH5mekfNUzmKzf2V2j5aizoRjveHCx5zNMgRPfpGLScYjkPcA8Z9AZGwMJSPkqyvgDLKR6FSgFDxjKL",
  "key24": "3EzXVnPfgYXG38dpo7cWsJEXfQ1Xaz6Kg5oyGVR5V8jfoRXu12X3DdFYZKsM9LnaZdksdEikoksFr8mHvaaEb3Qr",
  "key25": "45UWriwgg3EvvZu5wP3Z8TVeT5JMAZszoNMV2kMR5Adi9MxymUFDLFeiRF6Jp2VpRqr6NBdwDzGBLZDfbUu43GMq",
  "key26": "53Dzr9CjMBKVwbMcB5xXinCXKoo1bJ1E3U5E1MHKhAcok4wNHzix4ZJapFdsErhsLyFRiitGgy8TMNXmPrekurW8",
  "key27": "4TPDxnfFkYx4vKZ32264zShHvKC1HkQ6dRZQUKjW5sBMHvXtvtqztSfgppNbdw8GnRD4QgdHjUep5mx1HKUV7RUF",
  "key28": "dE2MWSPQhuFz5eAs4omqMVHGkTYvnJPHg2Jcws4uMa5Cj1VuQZBeYGCkBF4JfUpBQc2kTFQBvEW1AkDcPDkx1z1",
  "key29": "499HeALPomPmnZqzVZda8fQsFwj5V47WmSUopUJqBLFsmYjjgtsRxczTSSNZsLUfFzWoUcmTc4zkScnKpyZuHLu",
  "key30": "5mKmMbwSfA1wksgddiM22aQzDGsHU9WFjnnBGhKhmEq5VEYVkGqbvgEri6GZbMs8fBR5r92q7iKFWkLsr1PkJ93g",
  "key31": "4kZac8fYwBr7exHh7UzYedt2yxHmMTi5WkeX7qGt6TT41Q5Bn5yoix31XBmnD1VFQbMWiJHZRrxHmyLpxcV5tVLi",
  "key32": "661ZwCHhCCgUF8KPN2CkEsJUPYN2svELbp51zxr3SZqRHL6tJSJPF7ux1iWT8mKcvsts82UxUm8e6WkrG7uM1At5",
  "key33": "3wnL4nz641wFWLQncHMYeaJMGctn3eZV78rqQdmznfoWfhWLzLzGfxRt9c8mvEeh8Y1Jb79UGX97vGvEiptodvnP",
  "key34": "5SE4Rt3zdWJpNjd9WjcWswAM7kqnzHUZeh9erziXQWT77q3JGef5smHFzKbcnbKUuvJX14WZu69RKgthaWmNw8MN",
  "key35": "3Wdt8CkVXG68htBMffFkF8YYRvDUfbkZJFCRNehszjB17rC59SzhDLSMksHLTy963zBSopECGabpHZ5Pv4qMGSNC",
  "key36": "268yzA6sWEUHEaVcMPJxgtQDyTzp52jA2DoUjuhebpERhn3oZgSY6jiZ2qutZ3t6dFb4LgGHyEJyifjHexUu2bbQ"
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
