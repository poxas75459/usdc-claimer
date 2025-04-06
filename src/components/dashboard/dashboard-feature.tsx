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
    "6mHDXog8GAk8LUtVUWzqo9HBhV48kGbvPaEqdiDDLPbrsWQDUoJKz8vshZGEMEzma1V338LwXEen4Xyw1gxgWHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YFuCjSruiceYDNnSojpPf5Sb7tJV6cpmVwVuiVUuCUG4pdU7HmspgMELnjJTsJUPSd9zVSZc2bNAu68KhmSDVF1",
  "key1": "5dNrZRZBr3adJEuvByviPXgvCZDPUQiiHcuUr2Dog3A2paubgksa65W4E4wUP8cCLdKRo7qQWZ6wJFEb82DWwQ2e",
  "key2": "3MbAzdg8qV73qZ4efpXYCCKiUD3YMDzwSz9QvvV68opUv4ogFZXimt498oHgjxMU1WwNgDkBGSdj3T4jay7EfJeG",
  "key3": "4dgayd5SX2SoDppepB1ignahsTfMyLvwFUqL4xmTg7HsNq8w6NALj7SxE5w6rmD5oGf4scoGvvqV2m6QpN1QwK9G",
  "key4": "3eXBquMLoUh6zYjHSw6dKCBRk1YErnMMobMr5EyFwHoHyFMebUrsUujWBg2KgFDFdStHXLxT4R6p1o9pLrX6oU6B",
  "key5": "3QibgLczZN28mQDtvz1shhSqUNn2Ksowb6rNTghDSp25v24u3zTZBERWd4eR59snr7cJ1QrMy4phbbRgr1k7pgCt",
  "key6": "3w1DyP6v7y62Ggv6nJgDMaAfhnLchzXfUGcEpLLooZ3fvcZaYXWLwEK3hrNykERCxX2w3vnCL6kGV4DW5oGhgUbm",
  "key7": "4zuiRyxjSAzpRQMpM2ZYB6bYmWibzjF38amKW6Wm6Vd7xPHEeeVyBMxAJXk4MDimZDUAzB7Tpbj8jcx3n7DvF32W",
  "key8": "5MC4YReZuAbusnt3MYavFiZirKLVbRPG4hQ4476TwXD9m4GPkRC1ZXpGyrmbwtQrFsSM7pQTS6BoTZ1fmujCmyRR",
  "key9": "4HQZqovLxJBdSSBTCMyAbAFjHTrxGAneYepcR7R8DrSpdkFGsSEr51ENzomMiU3gHNk2qbAFneJxyZ8YGAjaCcpz",
  "key10": "vsgwU9DF6cL5UYvuLXKCRM4JAJfGJvjt13DLBQw5rVBjNfatunBgs7TKmcw9bHwHFxFMk5SN4LBAB1K8kt193gi",
  "key11": "2eejZ25KHoY2Ms1ueM3zVi56hdTM7PLJLXaw9ar6SCY9H678P9VFoniNT6ZNUfbxgkoJg1EkWXf8a2QMVcqdf3Vh",
  "key12": "gnEJyj9Yjeh7DSvjwsFTZoW2NCJx1WMPwXMTqrxsrFXGmTdn5gk57WqhgwY19oWm35rYnMUnvR8WrbyPzZWuw2F",
  "key13": "2gCWvHNe3T8ysg3pYxCqRoW8jr1XhDjXsCXkiP1ZNqPNRh6mbCZ5mfxc1Crg9wTaJV92niaYyxoXKS3XULVHNVnK",
  "key14": "5okGrBfx2WganxaezySezQoVZLcfn1SskpoUmtuPaTGcqvYAEgtecSQ36qKchBJ99kdYhjFtLo4MDqg7q5LhPKwm",
  "key15": "2MHVqnVYLTNgN9kvUgCZweuSksgtJRrEnVLuMgRQNhc5p3TfceN7H42K4fm2b1qTRHKczNFfPH83aZRtPKgybMc7",
  "key16": "36qfMqFjg2jpuTR2RATZpn45HtGTQ59q9v4rvrREdG9FBdXfvS8ojWT6diBNvBU7KkXxmfH6hsDDRZmACyKwqeFg",
  "key17": "2Gz8HcTNZvqKENhZhsdAe1vyQtLznY2uomHrF4DQ2iMh7xeCtafuqe7AZWbpm33h6QDczeyNUUFgaMTkXChfnA9P",
  "key18": "3QUR6upNa7iYgUgNjDtV57WGhgsegiztbc47T4Dz5MsS6FuWb349ZR6Y7BMLaLFJWv8pHBz5E5Hce8JVmoB9GXWR",
  "key19": "341b4rkbhHZsiH5sw7iDXVjYSD7jQZEYH85s8ieGG1ZpiRNDSRagLdhHycV6zksU1HTGqzWx8dbEYewXvoDDiHnc",
  "key20": "62Lpg5sknTZoHQPtBnTxki79aLjshjRge2zt8WLjbWwW2hutDKTN8S5YoFeGuMWhQJES9X79M3mNrCPvTZjW5MKe",
  "key21": "5mSWdmg2G47iGH23VZWUd1tJiESegxYzJw7BmoCgwkAsNuk5qfyuW1eod3NUSMb9ootdKJaK6grDeZuCuRGsaDfu",
  "key22": "3umNfRFarVhTsJmYBzoV9PNXfLKRmZVrAcy9aspF6KESyfmU4sYxkqRY9WAsYfDzgtPSQrFWw57inRHeN8fFATWh",
  "key23": "35XR8DWe6mv9dvGYja8Pi2UvC9mKZjAijMq8uuMfcApt3VhagVr7DdE1Ah7m9WdC2HNy2vMuHvubd7rc8E7c6C3D",
  "key24": "5s3zEQQRurKR6YVsSHxWcqXcGY7JHHxi5z7i4YYYywFoneeDZgWpPhv9zp9RTSWsVKUBgTEbBBfd9hDJELiwAkse",
  "key25": "2WVQzYLnBXpT4wQb96vg7DbnNNJk5VYm5axu7ButyW91W61vL7D33CAmNYDXC63uqQzFQVJkf9JEL6KkLVdMA2uY",
  "key26": "42N9hjgqFBiKqVJ1gNYuaPiGeBmAYseCz52yZSDdhVj2owY1QyPByCKDkvgxCnWWRjJb77NYy4132Lj4scR6eYER",
  "key27": "46JgUvczvfFSRsxg67B6eKhpae5xU8MysAnDW8W8kn9vZMhdASR4ZH7x7dnAmU58qNM62VS1uoMhy3y2oZC7sYR9",
  "key28": "4cJuy9rjXFQ8nkWekSLeCkAu11eD54YouRpCmephBFrr16QeJFgxRihK8ASMZS96ZqFJjrYyxvQMgGyghRkW6P3v",
  "key29": "A8f15zBk3P8giteHvqo8gYfNHVXST4muy5qXtTN6BV9wyyAHBxMtj5jWMyfoaYMRZL2fSujgJfV4kanGtNUqhPA",
  "key30": "2HV2KoEESE9jkdtVV85aenUi9kBoVDfvfiaRMskpnc7Q77PSkwf3RHwZvcBmxa6k7Jzg5KJckLXr4B74LbgHA6g9",
  "key31": "tkpKY5qiV2TnGbbWYatC5ugVNCggDGmN6pBeh4MBAPxp48qETdTLjMem1rmE6NDRpZ5pnRMQu9iBCcZtLScMU9K",
  "key32": "4ZDxXTj7GmtQ3gLsBA3ErDRBG2PxL6rcqgFoRXovmXYCmF77pUGWL95nc3qJof4DQ1tDjuB6yTWMyKdv3wQ2D9u6",
  "key33": "4YK9CE4tpkzv31ddk6APDYVM58RnFnAjJ5b2njsSunyryWip2FweAAVeTjKcPE1PdEVKg1ZFh57Jm6VefatponLx",
  "key34": "QNTkyXW9sizXpzv7f3MJHMQL91PpPqhn2XSFqHYH92Xx13aJWWu35vm2oy6AZw8zqvrkvgKreErujSjhvafjw2v",
  "key35": "BVsE33iy4DFTHc3mWn89VpRoTAwtTVyanpuYkK3jW4my18Hf7bUuZ1P4PRKc4Kk4sBRufHh8EiyND3j2fUMTZxZ",
  "key36": "k44tmpq2d31HDVoSyiLMfdCVVz4qY5v2EJy1CGvaL3c2B7FKiVfVc7yQSGPRnMPM21jRKM8UFggsRBZPR2mSKwr",
  "key37": "2jViKds6mMXfDhfmfXF1urwDCsG4evcaDDdSVbSQVc47tGG8AFaWHzErFBKf1sjPUDDAr2mnC7E8jnCuNZ5FhKXZ",
  "key38": "5QqayKm2V47xDYL4PNeWP47k2wboJTaWyd7nqRhi4eSktaCHsKTXDmw1KNNLv1v2HWuqgJzbtstF2eoJifwVC6K7",
  "key39": "5sLRhAyR4ugN311qnZwfyqeWqERWZ8tuo7nAxufMMcaKpkHnDegV4gsBrYA7429EsziaE1x7U9skjh6YqrofpzZQ",
  "key40": "3bkz5oQF8MTdVScJndVVJkHdupeKfAxBH5831TN7A5C1YUqjjwpoVH2mmoRYe5wbby8CmTkRaazg7RxLzz7QM8X9",
  "key41": "FEWHY4hejgL9fVhDEM8mhtDcx7vLVhcnQ83ySfWsxnKbjb6EopDhyQ4WKJvBNeBYAF47dqMWRuBBLT1JhcyF4G2",
  "key42": "2SgKGwVdKJBGamHSMMfJmfKJ2m7V9iCt838rFsUcgb36W3KU6qLJstJF5wxYAmGzVzYLPeD4xKoDSt3Z1RRxHzmA",
  "key43": "671LzzLR3xWmpsZF2ZvVc5nL5NxAQEsAXE6HPKuKwKMckzo8vNUVtGDddauAXaR2h4WJmfh8b7h6WnurU3FYzH2Y"
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
