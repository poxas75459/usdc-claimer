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
    "3idUia2TVQ2RQCYMFiXfH6s34pp5Vr6k6iCmUByRTeNJvQJ9GyrYKU4XtUkm5ZN5NCxrLuTW1APHE2Z7EHygg9KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeDB8MCKJ527kYgws5aoNMa7z4ghVDgGfirYa996L9ENs4igE2U1GSypugi7ezVuuFeCXEkthJUmLhdxv4qqnBo",
  "key1": "3NTfCjb3Z4wfcAwfyHUdnoLJ2aaVfQRegaTRWMnjjUyLRN658gE2buCDLAYJ7KUG8SZT3MpMrcsGTRvrusLmpXks",
  "key2": "3uQpiu7swdAb2vEY2CPvqB1f2o5hABdNCTKNHEm5QFBDu584M6j3eDgzAF3sB1hyftG6skgksXosmR8ZxaFo1gmw",
  "key3": "xU9R4nkMEXRfwE2hWFWcJEHVg6dNwYBiE4imorqjK7q3sWSyWcbAUQkaEQomWkpZpgEHUujLmArsP4Fro2K29YU",
  "key4": "kWtuRNUWsUA7mSk1y5eVz4UEqR88r5WTnYZ8HsBJJymFM8VXzDhumymN36x8TpGSi3dZmXNdkT7536T68LVHiKp",
  "key5": "2mD1nRqBRxnjAiSARbkfY2hazHBXki9BVKAUboQ5kS7mhaBJA826JW4M5DG7icoESJe1WX98oSLvSEwSEaPdFaWA",
  "key6": "5NaepPPtJ5nzALByBKPrqWn5TawrowTE9gj25QdUJufHf4N4CyMDdW9u8QdtfDDtfMjFDNuup4etkRXKdAhneRdh",
  "key7": "4GDUW8FvcPLE23DqHymMQpi52PrnwmLNQhkvgDEqFbk8LfJSFFnJiwPyLDgp2HPd6pR1mmGH2MyNh86iiXEkKQey",
  "key8": "2i8KHXind1SYCAT5Cmu6xit2oSGkL8cVAAT8GhmR9dU48VmrvjZszipwJq86rZUe4UieDEzHBjWkh4aiVb7Ko7hv",
  "key9": "whtvNLBiDgeeZSHnCd9s6m7xov6y6WxJBVnMar8yXUL7ZFbMT1pNbWJq34Upk8jgNSAsLn6rcNyKyH4YPeRcAyc",
  "key10": "2tn8DP1E5wsvnk8Rftsd8gxAgQMJEcUDLp6vvXPkYY9NvmgftygSxMf88JQsbXX84Ee3KJW5CjnHqYejBJzBXrcG",
  "key11": "49Jr9KpWZHXFH85WYVENC33wstnB47qq8LUS6hs8sHp1kpUC8XCBNDJ8tyPzRW3iK5143sQjzKFZcczmEDUXQD1S",
  "key12": "3E3cSzhj8KGaDLaJgAusdvgh943gL4KCNfqTvNLXi194f2urmg3h2EB9RyMVBEkv2fDcB4v5oV21psUAfmhsXV3",
  "key13": "WB4nyiBLWrVSgEirqYeUUzHDXdnMdrpyCLbRiTyoTBQ4oJfDnmBwq5aXneSj3cjEexquZA3uufri3QdX17GbvNg",
  "key14": "2SMAKkqK2x85Batpm1FwYAPDJqu9QhpFVp1ab2spKqSHub6efyV8fBdXDH1Mc2JJYxJ1uRJTGsmZcKeqfP8sn2KR",
  "key15": "3o21gVir9VCxKmhnmvhd7fk1EERSpsj5KXPDXjp6nwEybdvURwciafe6xNiPuqhTquioEX2pNi7C8eCGtRpYJQHS",
  "key16": "KE6cQ6fTaxr8wMxii8Z5ESMZXo2ZUPV2zqp8HEKaH2VvvV9ZBRZ9Q5srvJis1pk8hQnx54vCuwQ5GA7rYb4oHsd",
  "key17": "3qQ6BYztmyUTxn9RWiwMcuDL55Gc7ctTT33PvLTjJEruppBiictW66p8RgNDMtmyN3kdCWyWgQn8eSDyQp2yGBTB",
  "key18": "4QgcVn8tXduCh6FajoBF4Ac7JXYfGtdBnFBfASSVBS4TuaaZUSAvnmrRbXzP7Rgc3pHKNDjhiEmaqqUvmcnZ4E9R",
  "key19": "HBVWgU97mNNTNPbMwPEs6X99YXGTfAGt4XpcuvEKQ74GwjdT2rjsmV2D2QiNNtqXEkpwrHkhNVARuFuXNZhjv1w",
  "key20": "45B5D8vV3Vwv414iewepK4FvFHfXMhoKPdNsXDxBNGeYRXBuMbASmLaebaFH1mbyhHcyKvBNAeB7DgBVfRDkP4YE",
  "key21": "3zvDTdD5pVscgtBKwk6uq5tWdmGtkkf8eK7MXPeo3ppTf9VEL342LxfnqBb8aNgQfJMgadTo5irpPy6nbRWnUnTG",
  "key22": "5FBdyVqJyRgJKvCkkPnn1nnbU5FJfkryUJ38kTE3zsawRf6BECy3rdkEjpPHpMWf6f2t1qC9zmgWG98LKb2ACe7K",
  "key23": "5NX6XzxiWpRDyezbCEKpJEzSafSQWhqJgdfqmXB8HpdFRJLvymV1dJx7yJLifyAitx6JsfEGcw7VWYgbzB6pUoS5",
  "key24": "zBsVTUrqhXDeyGtjVUTRmhrBMAZD115cbTy9qS7aBBZ4AR4yEFAEQr8e7f4DGUBgMse4sqCiJHXdg7hGEZCoQw8"
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
