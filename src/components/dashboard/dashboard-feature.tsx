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
    "5uscHtYWvmiGU5Tv3JtMS4d4qLxsYRwsSGP7H8sFvJDracLLVmdJktHUo671u1dknKLdkFKy5Ujzyr6E3spj1R1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YS8Zy6sZ3F8TqsQrLfH7pvwupdYRPQWE83NWV84nCdenw5k6JcbQzNZvsT1JiWuJ1VwZi9xCYorttZ7vXt37nPH",
  "key1": "64KNGRd26Z179e5q6G2HdrvMHL1ZmrwhMGdpgsh8Suv7kYcBB95rBFanaGwd3cLGkWyYrHSqKw9K6gb4FJobjM6c",
  "key2": "3UxwbB6bTGfSG3TH848RB9ZsMQjTn9PQqUJ3Ez8zQuxJdKFZtKQJ49i94gr2s1XaEUBCopjsQ4CZ2eqSPpBLsMkV",
  "key3": "5R1jZG9W2VgsN1CzCZZtoFXccBFv3jfsWJcELW8ndut9UtEarRXDosJs4vpuwH9xmQYmhi7BE3Bf8LSbUj9pRh4u",
  "key4": "5qeGomfExnG7NRoTPyWTLQu3iGna5ZqkFhJzxBoW4eDVgAH1pPt6dMqa4a5moszwg8CP9SSxFEb5VekMDC7h24Ri",
  "key5": "4EtioddbEBhfvRYKygq9vRiHQJMe5ztNLpZb5ss6XvkEZoeG3bFfLrshs7RrEEiffrgB3736aMwnDagmuBkk4fyT",
  "key6": "5eu6JNYjk9enRmDp6UAajgxp5Ecb3ChjeQDYb3UrGK3r5b19548unfqzf3y2JPs3FwLsV8EVu2HiSVuX1fEatRBK",
  "key7": "65FtSL5eg9Sa3WJeNthaNtH8FgEss5FQ7YRU9PpvrqWtuxnLVp1WpkNeVQLfa3bSg2hBdUvEM7Pk9fMzoECMypUV",
  "key8": "3D3aMWn5zMfUh9nTN69H6CeRuqgnSXQXgxMDqCBwrXLTNTceQuJf75fjys2VeijJ96Tiqk8gyt7s7Dep3iBM1G16",
  "key9": "2p2jNs8CSxmqosM8rRxUfvDoaTvPegV8Lixb61iz4jjF94thEQqqjJPwg69eAoZWnZZeqkkCVMLXibhr3PxS3VQv",
  "key10": "5ufP3LLuuNt7b241j5Qk711WTDS3AXYAGVneyv8pv1KRJNiTWoRVEjG5skbQEgMi22Lydod53FvrpoBxdjKZkA78",
  "key11": "mGZAXZTcrFgBWkBwLrwanRU55vw2zvj3VbP1MACpddUKSrrfjdA1CWUXFMfnmiXctnSHLPyCEDYcSKjknwPVzN3",
  "key12": "2gMXbEgvnqrUhVqYmrJYYsbVXuZV6DXtuD674B8Xugqe6yaZJvWGYW6sEARgf8AfEkf65snqKHNPyNx4jEAHJqxq",
  "key13": "3F5CeracZoj3vT1hjJKb9651p9QAnPoyZG5FUfrnDDbHofej5eGeNrxqZfhNFo31o5He1xWSRQwTveQqjEcEFUjR",
  "key14": "3zdp7Q2FQb4j2YgKFnEV8BbGy838Gzwjk196Bj46Rsr8iiF2AGjJMzioreqp2fEwqkyMTDtFqLBPrVG9yuNA8D1Q",
  "key15": "43KC1SwKCvQE1yJvKTzdocjHrZpXESU7yN9D8oAthLKUqCQc8dq6g5mH7rfnd6fNnYc9ZZZt6mGzgFTHJwLEy9pv",
  "key16": "cBzfrxGnjBvMP62rWz3SLPS2qMJ8roFM3WqM9hPFEV2h4Jzr6SdFuNJNaypV1NGXapejnqN6QZb7tMi773VTHET",
  "key17": "3ktd3YpaBzJyvxKaujdDkjXCUDUi54VSZsjxsiehJNko2K3s3tNANVQhiY3F5RaVZroDe6BiVFW59ZDmsw4QRtZz",
  "key18": "4Hpdfu1bhsJDhRdm7BNLsLAu8pd38YWfdeSvqRZBX6LorGTM4zW9PUKfeXn9x4JsvNiny2wdnJyxanCKma9oGnXi",
  "key19": "4Vd2QDLvNgw4bgUWa6SrrWTDapHYRvsdva9znJSVveqpbAfu2kTu1zzYLMXpSPTU72eohukQnDJ6HWr4zLZTYgJe",
  "key20": "2zu1oufLrAS8eM1gEgvWL9YRVARaVBM3FjWdo7r6joiXeAHhNbuZvm1yznTHt8FyGDKAEecxmW4Tr7xpkdb1aKva",
  "key21": "5bHSJLxENnByu8QxW89z3sfhGfHT1iDzQp4yuKnx2DE3Ui1DL6VTHnnD4QSyqxESavuvkH24cndmkAzFsrD6G2Lr",
  "key22": "34EEAgdnFWwGrbTJf1RxX9TgNBBV7FFsDQu5kSA8YGErLgZRAtEH7r2M6tchpbjzPmP8ze2HVsp1Wgpasa8FCkn3",
  "key23": "66xUBpa2rqCohXQRryweHHA3fvi3MAgNLHDi8KsgQmvjbY58irKPHy1WC5jGcZ2Xgp7Nn4kFuLxTUpyHPcQVzjRa",
  "key24": "4QeMY7n3Ritcxo8A8XgSrRzec3LfSbWVXYZzAwDCWHv2NuV6f1a89AC7ncxUHEsyUqqFRLfSVZNJK4a78sBNNbgi",
  "key25": "3nysavS8egSnLFxcQVhUFFCVe6sDajjerWq2ayay5EmJDsmpjJSU9xu6SNRFkAEH3aUayoYAAY8f1wTyKYAbX3iG",
  "key26": "4zjawbiKcFfYb5VZzFh9HsEcS1FQi7Xe53GmusK87KHkpYM534U3uXDNMWHgXKJEZ7zwqfMd7igg4x1b4W282fiZ",
  "key27": "4JXyHzS1npLZLUK4yUBfCjJmLCpw2e5zCpz8Gbgwx3QmpfXiqpmNYCgGDD6XKedEp5bqppG9CnTj9idP2ReLgEJh",
  "key28": "g2o3fma43iJuaNbm1vDH7s4bfV2q66xN1saS1fYqkvffVwv8sqiesb4n1mzo9XR64EZapE7TrbUt7xEPbYxKdjP",
  "key29": "426AXMj6HHFETwixmZP2tXJsUkfJU6VdaZXAx5LD6XYadXtzxJqH1e7XdwQwAXsgFAvw6x5VHWQmVubLYDKqfuvT",
  "key30": "yuYyt8BgpvL33t6f4buDJN4H5fXuwAy2nxjxvx88QkDar1mMB2w8AffUhm8zrignopTw69QqDDKeV3KMbnCswwQ",
  "key31": "59UWMTNGuTZCVC5tHHQKZmBsA5SDapnHTAXft1GcX6z96Jfd6ZDK4aJHzhE2Hepza12ubMkwLJ2SWStxpBahujD1",
  "key32": "2LEaVQt8EFumtDW4GY8ruN2jwgHrpsC6GvyQ46qHwwhzzfqCP5zrGEhMVxdayy23vQFudMzU62axFF9F6kRNEV1D",
  "key33": "4GCdaN2mcEs9ESvqKw2NrUnpc82nND9VAznM8hUvR8JtMAfyLFZ3GazEoKhN69XKDFyMVjjvkQZQnvjMCoc1u7JD",
  "key34": "3pMJczogFsFNYqDVFRQtokriWP17owsYp6kZ1vxzohmwqsyejL5TFQqgXDjrysMfVFY5k4h6G3GZp9browWywLZw",
  "key35": "5DFaD6S7QrBdwCPX5upnwam9Ujabyouo2wXM8p9Ym2mxEYyxaoSt345p3NmCG7Rb4ys3H1zsER3NBQSFpy6ZsAYf",
  "key36": "3gbijQHDNEBYnmSUWTSsD4THL2y3pZcHMbAddEbTmFQwRwpzMyJUU4Mvgk2E61QQm8Fwambngf6C7M7vMW4X2hhP",
  "key37": "4ALLUuqa1z2XE4w6STDxicenKEoMhdSw68cf2KEeWtUXRPPvJXJDRLDbjoBLrzarLy8ZirQr3BGB2CYzMTD7LU4H",
  "key38": "5Wj85qBc5eWq3Q8zJuamSwozrj2HgTtLKsQ8dEJne8BD13r5wCKxaoSGyZj17DNdvUhJGibhtVWS5TBWtJQ4geJU",
  "key39": "2eNvEeu3AznZE5VxxKLhX8c2PWKvWCphfktHADa8eZAzhfHi96KiASiRxHWydSZD1nZ3D89yo59vmuM38f14Dz4a",
  "key40": "i6XP59B6aZrGV1dbwbhwcRxLsLRSYx9rbzb8jCePq1XV9XF29gPA7Xq2TSbUiypHiTDNoS5jVkHj3mnqXzt7tAo",
  "key41": "3iuCeoTLFcBPRGxoJQNfd7cDoVVpdeCdAGr6915mja2YcKnmYnhbDykmTveFqp7eF74JcXTvpqF8AxiSYxWLPiaR",
  "key42": "3WPwFU1L1Zk5WSTzdmfQKmDuYFfmDDbtf5HuE4tdes8GuvDDmg6pKrfqLhUfo137J9yAMfUjbmictC3JNydzLVXz",
  "key43": "3WrWPRXAnobTXK2FE1dtXGTAVT8aRat5Bxxb4hunNFtc7DfZpMAF3wXecJc8azk4TuGuxLGARJAzjEGt6fLturTM",
  "key44": "4rpAVudCYujF6mbEvD6Y94WjuNPnzBbotqVvdaceQAC4SeXamTEZiBjbBfa2iVSUA8JTbydDMYbGkA54fVh8iq36",
  "key45": "DvXms1X1eXbgVLK2FUwQpSCzYTTPh2S3VqJmsitF2yZyz7uMraAhSvz1dMQV7Zt5ykeFhQSxtiX83o5KcrXqdsE",
  "key46": "2k9Kq6yMEeUw1rrxtQQdd1svcDdNJ8vCpLFpssJhSvk6oPunR7tBo5utwqrFV1JL44Rv4vdGXXVkCN7YpSxWQziB",
  "key47": "2XCBDSt18RzZpZNAa6sakJWHrxLVeSn1SxukDe4gQHyLWt5n5av9Ctc41bqg9PKvXah66fq8ET2ra8n8Xx5149Wh",
  "key48": "4fXPNBhv8qU7acyuVp1R5ekY9vuyw7MrHES5Fy2Pdm3kRZeYYhq7S6rG97QCmqGpFVCK2LfQrFd2opdP7zxr12Uy"
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
