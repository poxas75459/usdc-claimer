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
    "2HADYBDDcryy1AfEsVuHED62397Mih6JtHcwfMY8XcC7HVHZQBqXXTDCvd52Zu9ShfM6C5FxaCAUp96ceMZVohdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8mDMbsbq8CPcSbeG5tSABmGXUMjh7qS6Hf7CgrNhYwSAz5MqmjJHBUzg76cRpUmQtQmwFc9WFEyNZ2NEXCSqn1",
  "key1": "4ofzbQWfEGNnJCxUVp1JABbinAA1voL31uxEwAeYSkHpKghkswHLGWb1VvwPxdgiNDoYDpnuBNCBUw6Az6SUBDF2",
  "key2": "3F6UZGU1ftexkphSd53SU7rAP8fzEABrWSU8VsF1BtLf4TuQaArRxSMvGQK2XfyvAS4nSpSLDjk3GQfRojx82SEH",
  "key3": "4fxAj9kttnP8Rk6eVpdvviNWrodCFAB8yLQarVPMR1TMFCg7AXgAg2eXGqyXUrphjH5i18tEFeyxj3sZqgSiqsob",
  "key4": "4zyH4EjHRWriDB9bryc1twRXKmz62VpUKXFPAqs7nXj3ur8ebbxDeqZNPqzqiXyMfZNo9La6tkAyuAgyrFsa24rU",
  "key5": "3JKjGGxrYnkenUo7sXSL3E8Fm5TvM6W2w6F6cJPbkNBQebMvrU61hFnu5KNmWa5NQoEvFPn9L55wC8i8MsUMuuN6",
  "key6": "2huUj7D3LuvtuadBDi1ckQctPfAxqzdcqxEnaRp5pAvAeV1QtmQQAmh4posEBoGs9mQNFDctf89kC8TBr1qST7E5",
  "key7": "4HhFekgrvg668kiTb5bLdoy3feA4F1gy82wsrvHYRHWp8RRB51r3PnP7qaMWanzoGidnNLYh4tbHN9TvxEUYYxQr",
  "key8": "5Enguv8kJiJxSu9gsYTKX8YgG9nLHrCxP8H1koaBhkM7AMcMKc7NAqZnRtSLsn8aikFSkVQbJ6sLDLqF6Fydztxz",
  "key9": "3AM3rEAioHUnRDj4Ew8vuDWRjJrZC8kcadyPgioaB4VV4GXPCebzHUWXp9gSyDoEe2DPjbcqhEHUrPQZFDnypmZ1",
  "key10": "28ZvNQxGt78nGde9WfVwxdRaoEgrwo8oSYJ9ukyhGVk89NYPpT49Tewn9ahHmR6HdrM5E3S5NvFM7FdEhzKbPgUC",
  "key11": "63S2mhgq6TYGxjZJn4BrsxNHjgKqqC4FEbgQrdnttiBfh8MSt3rG9gziFeTVRmYeeL3CwN1eyd4jbc4tCtksVJPd",
  "key12": "3u7b3vqSzdg9czSFuPz1keL8v8bm5P68fQkuMBMyEHzFq5PA8cVMoEtdzyEEMSP54YEvKpjuQMTmrPWdDFz4amZU",
  "key13": "3S5hMYHK9N5pHatuaWaRhtNnB2xBJTLs5KYBst33FWNoNcJ3YY8WLbPfCTZ1WjVXjWwvsd6M7EPcTPWo3sq2WjM5",
  "key14": "FRyZ9HHsJRMqdRYHMCRfErtJ8fu1MdoseSwLoUr8VdA9TM9Xfx6ixo9KTJCnJiVDDmJd7NRsKZ8U2Zh1fTppkat",
  "key15": "42LtWZcifg9hmFNTeceNXEPyFFNy2yDDW6ake4WTFkAYm3D9UeF19oFBE5fpncUyEPB7SuPgG2TcoHbDBG2njEi6",
  "key16": "4E4MdcuicTGhYWautFcg5rE1CgC7Ckeev98UW6kAxxpGXDvmKSjHN99TRrtjKehEWpbfeQ2SfmmeXsFqJxacUcn2",
  "key17": "3pHXZPGGjZqovoTKdaqdQDazAVKJhaSbaMKrzCb7iKXXFJ7GGfRZwnegeoLrGxk4QvqvExSFY7JwECVBtm35rLGf",
  "key18": "4WXiEiQQ13GTZ9ohaXMmmF672beacHVGX7HopZj66chuVWtYGnbUd8DDRzxQw9uoD17tfeB4pbStaFjYcBYPJpWT",
  "key19": "4Gy7FQ63zGXhfvV3yQanfn8H3UvBoQK44gmwpnxS5sXxG1HAQWSMxbfRLTu3x7apAPFQf1UJUygHQeUpsaRnbmKU",
  "key20": "5pN7GrGjGiH2ozRQHguUaZhWdfL98hUBjErw2vCFgKehEJPGCEbCBCXZahbXrxuPvEPvMWf7Ai9hZ1XxVjPPPmJ6",
  "key21": "3tUZsp1ru4TmnCeL6ir6WRBkP5AiUrCwoZ97WmdAf19DoZpQYXoGB3QTxa1fAzDKxokQf4mcyckNnzteRPUpLNr4",
  "key22": "26yujXrXoJH1w7QKP5QWBuf3gQE3QC3qBvMbj8U78pjzq4ZxkYfTJeEEJxhAELmT7xtuP7qAn24XjaPGuX8nJCzd",
  "key23": "4NwX86emEJdSw1qPEk6G748gN8oPtWoY9EzXnABAdmoKU2oBuoRhrMBaFYq17f7tC1Af2tv6ww6GKwtbHKScUgi8",
  "key24": "3ngUfWT39iNjsk8tuHCEScfwxWF1scjJ6B4tzEuofNsCjEN2d3Z5i9ybs94SKbCje2ocPaajACmUaUBiugK1NLRG",
  "key25": "3PLYVLjfXU9rwJUtxSymsUxyuhUcwfTWjZUM4VeMuEgBknnemMwd6CX8G3gNiYyGhuDkHDdtCGFPLj9auUR9RsBa",
  "key26": "3he5BtgYdahrFMk1Ypp9MHL8fkH6MZnUdrFeyPXALVxgvAp8WZPnnB9LYCCDtgBbkPiNwLfHm8CPByYJSWsNYcBV",
  "key27": "F8cnW5g2dMQAfJYZrDoomjjBYWSXPa6V4z4yhxgB6MKB5LSNQ9jCAijym9UjdQ9mQK4j4cTj2uyGA3aCXsQwUo1",
  "key28": "49geSzpbPXZk243ZcWAU1KRVTGQcYazLiDRD8QS37o9fvYZKix4rrBwwMvCrFBzXuJK4rjgnzsEoQqyFq2r8bjaR",
  "key29": "2YA8umr845Mc1qba1BQANNrMuuHVjRtQ9qYeBs3gWFwLDANA8nX9Q7eFmu7Us1WUG2Twrr3fyqki5j8DAQChUERx",
  "key30": "5TqboSwqy4ydJNj4Zh96EXHwfrZrBtbzfs5VmToKW17wXjAionRF7SJ9YssidTXSU4G4EFZgUDAAvfhji56cTk4h",
  "key31": "61CFgCZ8jn4dNTnT7hnvBgMNQizNYuhcHF3WVMRF5rn4aoZV6cxbBfE6qbNhz5s4fgvq8sKtKesBAmhwE3mvcWKy",
  "key32": "39MymVZWimF222LcuUob4bxiU7d2LrRuSKukB2usugHmhdefsRFaqzSTounoLD1GFu8QRQ2x3SEZ4d5tstgKkgLN",
  "key33": "yyeTcXsSJZUGDu1Hugt158M9C8jgHBTuueMxwT3fZsgVTGRX4yEKo1Pydo2iRzhgmW5iTku2bFF1vjHG6J4Hrvr",
  "key34": "5xQTxii1DcWd84dT8BMHhFwpPvU9HEWiwegr4tdzM3i4VHZUvaqR3k8Q5ouJ1hrPWVoaNuzmLznTtqLMyLG325Um",
  "key35": "51p7UJArUEYsxodhWBKzkeetxaaAhHWAzZLGywYok7cbiHUXLeoMwEyExdpQoC4KxFFRVvGsd3JEcwc2xcUGbHW",
  "key36": "3WCuRUFhFNsZPMbZXns5gWCMVFmUGssWX8QRjxn3WxtRTHUTZpPeseq3MSpPJnuLP8rMBVo1eqYQRF5qxys1Mt3S",
  "key37": "2ydndjANv8VorAeQLwvS8HCLjaJuhqzWK19rSYwMjvmYrtjjiprd4FUynnkB8wQ78RQZcFvBQ3eHZRUDgkvzPDs7",
  "key38": "5VbGNEWkmKx5bMRM3dWsQag4YTWtdGkUHhyEzMzjxPdHJufefSRAkr6mPXJz3oaUzt4AERjGe8gcJGi3jSkUEb9b",
  "key39": "4DcNVeTjKmjSsKQg2FHzFBjGen7kpjrsJZ76RHBVx2wcCYXnmK3Gy44CMaAV7QQaCxS2sDFCvMtbm9Qmm249RzF6",
  "key40": "5YFghZGLBf1TRJXDASpZaMGk8Tdz2nHCipnYpppLBeYwGqWCGLzN6FmiwXvNUhmPEAM2rWvi3boALrXXuCEjLDYy",
  "key41": "2VE2bsqe4ZvZnJGdZaSjoZ39jB6WzmZYEh7WU8ZJxBNumbfHnkk4Avq7JEoKv3weehYQCFjtSWntSNQ8bWbfh8Ek"
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
