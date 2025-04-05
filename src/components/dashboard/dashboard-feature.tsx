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
    "5YohwynrXzAsPQZN53Yna71WxzR44BHJkWjKz7zNdGdvwZQx68vXjqcjhDFHporaNH61rEKSkys6VbK2EY4gbG8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMzHTkiZ2NCfFaELQNM67NsVKcrvCio6pZrqE9GtQwsLJ1Ev9cGTtyUL7QLXaDiETSQUquMdafZJWh9vPsKHbhn",
  "key1": "4BgGnG2tGYxZtHuMAEUgqHeyXaG17WV3ecTRMJQe1DwfPW7RqShKz7hCjCyHEQeUiih9N7ACXbqozNi3YoFS9WLn",
  "key2": "uBPZBvzZG3CZ2JWRJCb4wthxnW1qtL3oT7WzVxidS77Zn3WXva8sPur8BbN8yrpPChHmRtapENG2g3acNuf4XdU",
  "key3": "3oa28C5aqbL9pHZGiE9k9RFrKruEZh8D2ugaRE4Apa8CTXdjYnSCMCZxdEYj6NPRnZw7YUkqBgycLdhuLQGDPeoX",
  "key4": "3732daqQ9BCV43bMCiGxunPDzFuDuipo6vLtaMhpHuX7QxSskomu6JJvZa3nB2R8gzrqM3trJ4RnXUaJmmBHYf2n",
  "key5": "4U25jYHwovQenx9YP7KqWw1GmXYHe7fEew4TbvN5jJRTTNU4muN4Z3hoUF3mtEEhnBc3WAjimzgGWEXTGBj1V664",
  "key6": "jpM1TL5usxmpei5JtaLFFLdvb5yMDwVCNMQapXjwQLGTyL27dsqQdELMVTbdYsTNAsMwGMQtUUTkhmpFMwy7Yxj",
  "key7": "5HXcWn1CPrZrptj5kXRceCuL4mXjy3coqE9pTsZuyAJQRUgw3tYsLMiBr1wwqsoHtYzFN33Q2DVKfMMLm2aFAzpe",
  "key8": "5srVNsUfwfgbzYF2FQ7i6ahWqRhKec8zzyJePbawBH99z8wqZEyHaJsLFSFVFWWSnc7wbYXcTvRkFW1ZDp9tZut5",
  "key9": "5RC6uSU2ttZANhgiAkXFFZHYxzEvNxdzaE76wCEX2f4BtRFvX8u8HUZAcv9ijGKARcd77Zk9J1oAS5LgHzfPMFg1",
  "key10": "4o8ZEHx7YTDD3CDwnWUeJLLhCBLkjJMRz5LtWDqtmcoVaNDjLsrPcvAL5F44AQoTKdz2iE8Titz4Dn5yM8bU89pt",
  "key11": "5rFFFRTfU9Y5ssoZSYSk9Cbg74wzXz1k8D3JyfCJmCYSyNCxrzZYWsxbU4Txtcm53pEjqZZbeCuNcFGQBJb3XtbN",
  "key12": "grMKt51WBojCrh2Z9goEZoRuRha6ScRhEBvpoDFoPu8gRjA3RUCK9bPmh3mrDpWxpSShDS7BMZhSkJNN8VdxJw2",
  "key13": "4hoF4bKBNhx4gCFARSbnsR85cdxmGQr8BCpL3fEwFk7rh5YjqwSSgF6KfERG7HCzha49uiLwX8KTaKUizMeepS5B",
  "key14": "3awrD3UKSAbEFsTAttBkLCNb9UkXXFoG1A9qgJgpTYKnigBXtKx8HvafF7Dzkp8rsuQzTibCc2HPDnjz7DL9tEDB",
  "key15": "4H3wKfU6wH7bq4z5GCS4Gs7aJJLiXhA53XUCtTYe1JfyMLitZz1BHeyP1dc7FnB8eKtaurHeGfwmeK18pDex71Ps",
  "key16": "4scMGeK41aewBMrxoVKA3NftHhCc6oT4ZER4wnSTWdGDaMR3uZacD5sqEQx5vcn3Ha6NXQCEw5rLm86YdJxDg9Vc",
  "key17": "FME5K6wH1r4XSPGRvLaYUgt2VQZgribrEbyexxpFZix5UcX1mSXYSei577ChqyhsZ1hwgTxjYuVL3RdQ5eztU6Y",
  "key18": "34w3hbjqUy1GDzm6bZ3iHeGM64hMnEN8t3VKsGJrQBEE9sNJzUrv3ehqHXrhdd8Y45CLARV4pHGzmiZRF4Fci3Yh",
  "key19": "2LN99rX6TQn4JiyRzB68aLsKHdUVtccNQLWyigLnLqD8VtUtjXbZUXDzN1AVVLMAfaN81YFSNwALbUR9Xo3JTTQo",
  "key20": "4zryobnkgCRkz8gPYoVvsY9TAkwH2FxcBEAAY8ZWzmN7TfcJKLzLLtQkJ3V2miV4vrS9kGSZBaqJaz7VPQzq4nnC",
  "key21": "3smTXJweu1pLTPTWz35Kr5fZVraDuRYU7wGKyrEmG2mPUSy8ofx3i4GKRDjSxKmdCV7YWminDZCVd648P7Z7M4jm",
  "key22": "5qDUgWQbhG1XPZYwJPj4528G5QGaxSLcxRjFETTG8vGTcBm9AcsRALrsQ7yww8UtMVyBY265EKc8sGiTgHVeiWwB",
  "key23": "3a9pnCuSHgJwveBF468VvBR19pCSJQVVwiLmAchRv4tBen76PU8bjz5Mzh7z7hAr1LrWJieXmMzEC7NT53XS1YM7",
  "key24": "3tH933QvnHrhTp1bM49e9HWnq6RsKA4NCedwep9PuqZ2mACB8a13fNtuaRwiSLYW8DPdf4KkyAuLMQJsNF1eFRzf",
  "key25": "5bQNFHZYxLRq7BaTi4CkN927LFBz9LSFootoWEdejrDneHEtvjND2prn3bYPpzbVdoxB3QWmCbHTzyGaJyX4N4Rg",
  "key26": "28UpQmEM5XdQdemYry6P1P1yhWjLqKsdLY2XXQvjVVvo9ib43rsqxqvPtaKT33G7je4kkrs6GJw6nB7mDQjWP2De",
  "key27": "t21HXQcVdBRzr585gJEGPNXfVuWLDMNF3w8YtxA43yJjTEeoRWhvRYJfmcLUgdz1hXp9EVNH79PfaEy8L2CdhdN",
  "key28": "4uLNgtFJj6LzhZLUCSNU6D7yorBkJwGriXqqvgcpYHLJKLTdT8QgMWsQHLv5UrShnbyyCPaLhSNiLi39nFDkEC8h",
  "key29": "3mbfLbDKvNyvRajAJ1VtF2fBPPzyvTQLFgrHzuGKWZbGbMPiEx87mBnd6Ge9MFtKnMsnq1sC18zduuupXPK9mFiz",
  "key30": "3uVGLHzybNm2TC9jdhmNw1CamCHpW4DyT7oMb1AgGU3Qmk8VTZCcCPvsHEHKmFaWKFHAjd15XTTnYp3FNYvG7dNn",
  "key31": "4Cas2zupQ3BkrKaiqjExyBc17f7o3Q8wJgGtbVvYUT5iRnLAzMhhGogGR8sJvxqmMqVcFT5VThyXcKL3h8BKn4Fp",
  "key32": "9iy9gGtE8Ebzrd9pevA1gxqqTRDChiqpQtY9SwxDh6j4HWyGc7AoyAkpYAAPwXFcezr71YboXwwrU94QLG6m3rK",
  "key33": "DqN5dpYEU4rvGBYrVRHDF7rbmwD6rGzRzeX2eAhwuzDoS2JjdNoxARXUm2T6ksapE5tUfNqRdRqK5kErzTHFHWC",
  "key34": "4XJBmP6hNKYWq7qaqBXfPqo6QDbJkUU7KD9HdkefRDhb5jFqhe54mz9LsvdBG92H6XgPZSh6xZL5a8iFdRSPUtGN",
  "key35": "3QPffT6C2vHpVDjNDN2ZyFXh5eVSWTipm16ALUuRWkvGjryaCbWmE1sdSfjHVt769tN76X7yykvqLXt7kS8XKLDg",
  "key36": "4gdBgjWj6JfN1ARFCBBztPRxNBL9XtGyjjmZYhSvFqXnvyDE9w6NVPq7trNLpXdyqXYaf1V1UVgRqakmpsq4Bx9M",
  "key37": "3VADnXKNZuHbRHGxwekXMy96wb2L6iiHhnEXMEhyy5fSJAyRu3p91TkQp2PWWsonX98TcxLh6ju35T7JdG37LsmH",
  "key38": "RzA7QUDqFv7NtucNfVWA6h8aAYR9snYkmcDtGq1Q2hJRZrdHTVtBpHuJqJ1zT9mnb1VdZwUGR8EeoVq3GApVqJA",
  "key39": "2rexf6iwdy6i7K7o1wAeg5GrpEf5qyJ3XwSUtsimmArhpwC1VbBs9mjmKHaXMKsVXJjx4p8tj173WYaTSkA3dzb2",
  "key40": "44SMafvUJUVXMFjpV4du89NctEXKcuquASKCmPW8QEeLJMbJkwvxNbBPYS6aThnxUFNpw1TY3zezRPphnXKzW4zR",
  "key41": "4VVL3tpawsbw67fMD9qvQgo1SCcSwrcZZgsbD4KgL32qv5NWNJPyYtxdoL2BkuVc9DjVB8vPi1NXT1EGtmQtuKsH",
  "key42": "3Ff2JmQMwtgrUArNp9yKmBX1AYc3g3DJNnyrnayYGfhCE5KUYnZoCUjdD8dXESqwmiaEn81JPQzVptbQjJ7UwMiT",
  "key43": "4KoDgGfRC1C5Ph7EfVfVVwyKsxho3T11vsL2ovqJesP3ECrmne5AEr23wSJLxw63Zj97xQvMZFHtsp48VuEtq3zS",
  "key44": "4ishUynHDiwJaDjLhCM4M92Qa5qYNtn7gCuubXVLUnDKvp45q2aXsHrfBTh4cUCMkz9nXBCpbsDN8gmNuDpCPZCt"
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
