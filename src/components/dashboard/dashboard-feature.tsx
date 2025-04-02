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
    "5GDbY7TedFzYuZp3fsSirUNDcwGvLAJWGKfzJTDtCoU4fiznuvPGMYaamefQrmGXMWb7riAMf2yoMv4AdEwWis7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ohrKYrLmKFzbExXmoWyV5XN2eD7mRHCcGag11kBcYGJHM9ZfrPCHJGFSqNhnR9vDMrw7p3ozvxHBkV8XayaDfWa",
  "key1": "YFy5Z6FXk9tZ5aXoP2yW4mdKXJ4bzGrHSwQCKFUDj1aS5batFs68XdLPdpZLx5iRkKpXrnT4974HmSmimpttyRZ",
  "key2": "2iXk6C2tncJEdWcKsY2bR3PFhyFJiKcvERTzAtBtHwYecy1gL8nsKz2rdzwCN9esL6LswahqqUSUAmryxeoLLB2a",
  "key3": "5Fy5guCUUM2wwDvJNv8W23UTGekDpw21ojb1whfyrUZhMGK446KGzNKE3yeTxE3g6bR8gQkzcgTvJkNgcD3sNevS",
  "key4": "4h7qpkS767GPfQ1pxai9FSwxwmgn8gkFyHNAmBDnrr4TxYn5K2sx9rQw3zRFhNReKHhALyhWxq6XCURD28MS9uFF",
  "key5": "gCHstmsAA3ueVexkQwGUD2qgkvT98WYYaukosyGCvTzDjT8ufPRiiNzWdbbb3oPCVFLVpFpnZf937BdV8n1zxJK",
  "key6": "2gJcHHqQSyC6uxbcRfzLZPwkWh6ek5iPvAnEgPmF9MFmCmeYSeo8an9kiueQwm8ay2f3QcxhnG4jGDdqZ2tebiLs",
  "key7": "5EcDpRGnsSx6wNFe6PY89Mwa5Emo98yz1mhUoK4MK8S1Jcw7bvFhUiVuCnpDuVireVyTqeUWAoXBsRttd1UTZ7LX",
  "key8": "2EFY69YwzrFvDNcmjovdQZrny6NXrEAjCWHx7nnHBC8Wnuz9c6WMDGN9rVNKYFmEnmkgJgr9LdVdmfH1S21s8wGu",
  "key9": "J6TcYCoioQiE5FQ175xWWTXoWNBvNpVHxfQ43TZSCoQnu2CAdBBVw9ZgbvffbYkqZVH5YuT6u42h9rHNKAWAqbw",
  "key10": "qeGXxJ5mEfkFpPH6kLYbyfueE97rScf62VcH1EhQv55ehbWWDgd5Uoudqr3FndTVGxoNiQyBALbaPoQEtN8k3wk",
  "key11": "6518ajc25nqdVBxADhgJTiBeJiCELwvfvTDBfgnz9BnXc4nTWhwvGLqeUZbBC5cqT5jMVjb5cWS8U9R9bCjMnS62",
  "key12": "24tywi6LcRR41GDMzzVvDyb5oY499N4DAS4grs1mAPUgyoe74rGpdZd3wcv8LvDZbiSL6tFHLQWeWXHPxXUnNt77",
  "key13": "V4rZuGc3UeLC458Ga5GccxG2rg9MuskTELjWMG2D2gCg7Qji83bDFBE6DovMezLoix8ASdTsRZdK1mBoKqCpz7i",
  "key14": "3b9zTeN4s6Jn3zpKHJUifRsX4bXh4TC4mnhjFMDBwqfsvJVznjvPrcqwDu9zyz8vpVEdm8XwqM7aaKDL5GXD4aH2",
  "key15": "3cwVKZTLGpb2ZddwMTQ2tsgCAyhEcEJMwPdN5wESuLdZ4n4wSRgaaLwfrMMiwZLoPpNXQNX1MBP6BvDDdGBxszwK",
  "key16": "2SSKhAZfRmLPgD3dCW2wQmwpaESjzfGZWVL1hqkgBkU5QcRG7qZpNM8i2AP231nPwDj43Jia2pBmVP2Msejv411V",
  "key17": "2Q9vyQFmUbD1nP5R5tEf7ti4iubjwZ5Q3Kf82Jdz5WjY3cwuunbaSqxXXVBerkkiuRuGnVMsrRxy4c28acNxQh9o",
  "key18": "2WcRzqrCAfFN9RuuyvPLQvV6cywJg96iYDr9zocZJTweRr63ASehGnpQQ6a6D5UMicWptXDkPaAUn8hepSn7rrE8",
  "key19": "4nGpCt3sfvjGAVaFb54mGfLt8jZ8pTTorGTcxGGCq5GdfjStMhksMKxRCQFmpPWhWfG4YbRp9JW64HoEdSdPbwge",
  "key20": "2zRkX6HZEk96nbm98exAZWpX5Rf5TzuEy5pi1ScKb41p3MRcUJM2endbNStF2qF9Vjm4jBXnpVBkaFCy1vna2yE8",
  "key21": "24ZmHX2iwEBwEaY979vyrCpxcHxKnGXdTfYEJPD6ear45qJEYBCbtcuqES5RwvH3qcm8j7v3rW7Egs88RHM6CKP6",
  "key22": "4BFLB61Ra7NyVxg2XUSSVgCLBvqSR2kBfw13YemAUg1HMZbfZytSDiWJT8JcF7pTvLXBvGPAUEnqHmHq8eZvzjoN",
  "key23": "36VNdNHVCML8fZm6ZWGRXDN8CdCKdx929dbeNPkB544VyyoRjkprJ1bwtcYiHG4GnsTxBuhKBzcLVAFQh966qSbU",
  "key24": "f54hgkWN1UrcPPSiWzi4GtTiVztwTttZCvvY8V8QMY8iAo6pLgVfLQ5jZ2KQaWa6Eb99WfpQiNfsUL3KsAHkNnA",
  "key25": "3kfrLJmC1kcsDyRvtw2B3sXePHgozeQ77HiRuTdxxFz7GGkdim6Tu9piHc5VcDPwDhpBZn3wyUbrN31AZfPV6Vix",
  "key26": "rYZm77i5n6yevB9Qwprbap72meW1NxB9PdSJYsKsXScUVfAezH2FRbjd3js9xZto7ehahdDb3394NbmiTS9S6nN",
  "key27": "5E9wMBNRhNnujDXQz4etehZNgjJY8mVqbPFDkrnTKW4yLzUUcQrEPsNfkcyFvFcJWh2KjS9nhLrQT9ys4Ygi6mW4",
  "key28": "54PmH6MZEyo1xSaaCHFq7Pp3zjCRdNY6sGYcUhUPT2EJFnQE2VkJWnbjwVXCVQdxD86QxhP6TmkbCsaTXqCNoo8w",
  "key29": "48yKzQLSuEQdQh1bFTytiFbPoU9rVXXR5MeJ4myFyeWvac3sHtmwkyXuUeWvuMfxma3vxLk5er9yGKonyUHaW2AZ",
  "key30": "2FoXwBNbPhQSMXTREuepFYDBrK91GJET2yQfzfPRvTCZAVdXxJ2pid6g4Py1soTpdiiCrN6AdaHYD1i43hwiJSzv",
  "key31": "4GJDVAQtc6cyShqRdiZm3cbxSrDCAPtFpJCaMXzPbLDYvStXsWBEvS5UiCVoshdVmHLADiserYUrHsxTnpg6uwLK",
  "key32": "mCUmRsJ6FdxagNxjsBRMaXcrKJXok4vci1nzLUwaNBf8KRmu4VTThFHWneYJFu9nrMo65cmdZ1s6hFrjc12k3pa",
  "key33": "5PzZzBTnNb3WqZGjbnrecV9FQv89MGorNyfPAdd3opDc35qAPcSHH9TVizR4nUqqb4HgstHUr98wSXPhUS6PkqiP",
  "key34": "2xCGNdfZ6Si9ifP48HZe3qArzjqtcNa55iAGoPuVshGpXQRZBBFcTo794HxQusst7vxoLKP3t1rjaZVe4Nngu6wZ",
  "key35": "4DvLbqap6wXxNMydUC1NfpStuum7m2tq4gkFCijf4hAWcvGHdvQzJmZCBpN7ZrEUtmCfyGLgCFQsLnQDKiAvjjpV",
  "key36": "2xhcFNvbp45v6XE825JGA61QfKGmv1LkSf2Vw5uxXmCSFyHQgNtF3veKbey2EveU8S1PkHHfxH7bQSHTWYKtVyNw"
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
