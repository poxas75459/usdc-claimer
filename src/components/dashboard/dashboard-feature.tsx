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
    "5NnMejjeqeL8y26aWktzCUtJ4CttTvjaantUpfqzQYbUfx45Wjdc8rB9pDXdjKdVAXZ84xhYwJd5fDt8o5rxb43r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y77AxhUoZ6efpcXW824ncrNoiJDrokFnjdKfVz698PuXyLqv3waQXge6uNLoyXkyh9ZxLtc7uDNkKPUEstKEdTG",
  "key1": "4KnFhF5BTHUxy4zob5kPUDPtMEc9fFRX6YJ1ckSXPCnQkAhdypFQdw96GDCB3R8v6bY5QiTFRBVyguDDyUcRsBmX",
  "key2": "5TQVZVHz31Rs7kSEgtro8PVELeJzJ3xMzb5WkNVTAsZAivk1iXDvE4qwhmxo46PsfHjxasXtTshtTBjPSbtbQhvT",
  "key3": "exrQZ7JwuaDTYTtakBaeho12NuiSzcugtZJrRG23BQLeGeF46bvES9wG8GST2Atb3rxHuJ4L1ZWXgm1xCwLzGzQ",
  "key4": "4adNNQ2vz2sMWk5ffcYp1fywd5W2KMuDr9nG1QHDWSB7TFcQixhnm4tAnaeYrrEiWGSK9u1iAdnbVKFiqd4GTvkB",
  "key5": "4KbPn949zc3XuJ6nd9Yp5z5aJ88x9JL48fUsgKMHPGdiTRzFhoRo2nnP8KhBTYnWCmgmQWY6G48KBK8ShPk6oD2S",
  "key6": "4nYdj25v9hojNvNMSqXfDFm6QxtcMnteEhwS4Hv28XRUxFTsYH2posH1t23GaZ7Spk7mwaqikpRPMx9di8fHg3PR",
  "key7": "55Y2GFoTjg9q6KsG6edZ2vJnq9JdXoYqNjQ6qJkZvGLakMtpEh5M3BvHFGqP9YCuTFEbaTc7hQw1BKC935eci3Ts",
  "key8": "2pJRkuym5i3yvqNYLjx8NkYWFL4UYXUWva5jKUSR2iwVxT31pMzrhCtEMsJjFnXb6qKnvtzQipi8K6V3arwmJDVL",
  "key9": "34BWm7FL7AoGeFjMYHZSN712Kqzno37zkUUiF4TtB8JE8XBpztZHcmrei3qs2ciresnCSLEaqJbi1A78Yd2TFJkf",
  "key10": "2X94G4pX62jhKhYNdojh8HdBzvAMAS5dYvo5RHovmb6EZAN9sTBbDZzFxnu1m9NErcawHDvFxKAb67YNam1Qhr5B",
  "key11": "uahCcZNxTe7LZ7CguJ1366tdLGpqDFrcEe6cbie31Ycj3zwTBcDAvezVD9tzq8bugtA12obZVwPT6J7GM5gAQr9",
  "key12": "4jTkmAaP6k8AKtdnf813YYyZz2HJVrwY1huEAfPVrpyMJbshEZ45Rg3FSY1jgYjqSo9mEtDWgiK1C6W8AFfSHpzp",
  "key13": "3jPMiLck7FG6H86VvJPjJ7WyBW354oUtuRVRDMaoNMnFXUjgeRnYAur9GjLy89LxvHkAM9cRVbfHZWarS2C1G1BN",
  "key14": "4iB2yCRyc2VKKeGARCL7zZBRhYawRUQZCWjhbAGvg56RnW48A7peoS9xyZoUHgVjEp4m9dQcCsPAojm8ZU5u7NBz",
  "key15": "3edwuuSSDXyc6nvxLxNT8pCiDem11QgfYi1dn7sSgJnF5am5mPE8v2R8wrvsvBTnAmxLUeCcNoYsCJhm6M36LHDY",
  "key16": "5DBnvrZzDe3G6TJCT4A35ss95oLnsV36jWK3fUXTXUDuggdGtPKj7y3JEdtFrcTQzTa5jPEpRtRGruozuL2YM5qP",
  "key17": "39UKAT3Y8ud7UhsBnNLzqgrvizmobEZB1j9RAVArG3jAmKDXnfUHSxs96iFyM41RUt79DSmSK5wbMJFHQ4GUEdFm",
  "key18": "e34JNospvXUx26koiDFojp42JWfaBhByBaeUQ8e9utGoUp5yS4tAy4cH3NEFTQt3dYccwMt7bvxavoooGS2yGUy",
  "key19": "4SBYh1YGh7CEAnoxJ33wPpzuNwHXBxp6Xcbb42g37cW4cr6FdYQuyrLVLYgH2qSPdg1cXituHJA479uhLQGrEbVi",
  "key20": "4RBL59SgkhoC8gudkPbjKVMJ5GNBQFn2i6La6reGu93mjYv8FvRqBBXRAVYThBMRhhYtmW7Ld5XmHfe9KqotH6MP",
  "key21": "2mA3oNdB1KBhdg5rMTzjjPDMrffe8YK7hBkobK97sXkFn94qNizudsUyhBvFjtFi4NdTqW5hi6jpCbJmKHd3ynAi",
  "key22": "428QGJky9ow8gkTTK8j4QmnAruHoGro6RDebKwk59NyZTrmAXCvddJmYENM1wvL71hCavSgivSs6vuHyis75FZu7",
  "key23": "2DXpkLrFNyRCnWYHhLAP4j6HH6n2yamUtiNUw6UQZSKUk57FMpz1W6Bb4woXdUzDky2Q45dtFWPHk2j3BYvyjUoV",
  "key24": "2HHYcrd96Nf8LKwP3JckyYRKtGbAbrXcY4KGhZN6UB3kiCwrzLkKjMei1eam1tZQFnNnJRjeZvjLHHcydURtxsDX",
  "key25": "D4HDAV1RxdxJBP8jAVFMMY7mvZ2wjqHCvijWwvvQVC2XnDgTTz73vGGQnx7fUoVJqQc6CMTWmoCWGS1hxjpuu56",
  "key26": "5FXwjFeVWUm9Atu1CfMowXpKDmvrGCv9WbdZLWWPCfBeam5uD35usmT6ta3fd3q5U7e4U1p6T96eWxnEUKDQbHJA",
  "key27": "2bsPT289B5p8EjKLvVwLxMpyKY7Bdgm72SigjD5LDZbQwbgez58KhRBTNxGouWeQTVUmCjYSCFnLFxaH1LQpD68U",
  "key28": "37hzwhywRmx4972BkgeE9UsToc6XypnfjpCT3h3PzZBrEXEBJscMPhMz8tpir66dUE43bbWVxVddhhcFgmZaVcSx",
  "key29": "5sVqMcp5QAsAPzTVfN68iockA1ck8JiQtGhmL7iWorgDMFKriGmY2sTezePEtLr7cmdpmp4NPchk7BAwK6ikmKn2",
  "key30": "3Sgf5sfe5C2BrGGLLYXuf758WuR46hyPkoKh8zFk9gqaug1HdRvm1uuAVJ6MZZQc1pAYxsin6NjXzSZaUV5Qk7Tm",
  "key31": "663Fx2h6W1ioY8CFxDWkUQUr9oFJQRQEFNdkkAQcLN3BjoT7JridMiogu6n4mpBA5CRPyrcr26oGKv2wVNn4tvZB",
  "key32": "64ogjG75e7tmWJWGhWwFyZ5pXrJZrtPmJ6uUK4g6tADTBwoimY7sk3YcfWxV3oTgGv9kdoDHQ6i4sGPp7aheRR9j",
  "key33": "65MFj4UitTvVie6SXGsYPrTvwtNPMPdKsNfFSrLCekoRNcHqUFEALWm8qUweWHJEtkQthQUE6XY2ZuNzAGonq2Y1",
  "key34": "2oWsN316bMRsUBH1WHRKKroAWZfzZyugcUxHLcHTrJD6qMkDUGjG9zTdef2W37pfeBCJgS1axCfEC3t4HRsW28zL",
  "key35": "3gdPGqEexCcQcsLoyM9tcoeanBii42mGcc6gqi1TfUi9LBGzkFu6mRzwKpHeWfMu2mEieZ6K7kNrnuTvmyENybvG",
  "key36": "2g7zTN4GVVPymUxwSneRa9kQ1yYr4zxAhZjehxasZXGfX13GbsiqBU4PLwqtLes7EF8kfGwJpoPAAYEy9nyZw3Dz",
  "key37": "5dPipQAQYAhg7a3seuN1rSg5i3UWVG1DLvXMesfSq6UDgyn5p3zU335h6w4WPPkEWbcvRMq7YfYC8t2q4LGFpLoX",
  "key38": "5KV4wFt65pa3gcLGC8fmFktmeGJrcgQyFRKZoPgfiQAkZNUsd13KTZkdHE9PpJnjccKMsGQw3JuMtCJydr1WNRV9",
  "key39": "5A7TwmJNDVuezXiWwfQWAUyGWDcZ5Rrr8d9hDqUTELfnDvJCu4HeLLrTYXkoWjWDUnLZ8EKpNxGkT41wmk92GygV",
  "key40": "2Kj4oo4EeaxGAhronbx4wMbdNegJKuddeG7iZPowDAvRF4hoGefVCFFppQKzCx9Z6s2YsbJuap8phxGVB18jjkMu",
  "key41": "21iQWWE3runowfBVoakQhDSxy88LKKmTmkDBiCnyHWNgZodg8bSKHPoKdE2kPnrcb2D5YB8UG2F7Wn9HaQrYr1SV"
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
