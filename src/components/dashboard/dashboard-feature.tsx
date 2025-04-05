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
    "2DyrtZD48xo7BnEn1TagRcgXQNn4P35o9KACSRXur8uNQviUf2KhtYRyXvsxseF3SH7KM7mcvGAxYE3UkwoMnK4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qCesxDSk1meD8huFL4dAH9SqTyMZpi6Tt3LQT4RGrEim2kf9ntYVytHxEis48gPVtM246GxobdLoMUjWk4tuxbe",
  "key1": "5BCj23HbzCQgU35erpvLWDKViyx6BTubQo1GE6bZeWVgxrkBXpEFpzohxqmGjVrcHbhyBPs75e22Hg9x7do5LTDW",
  "key2": "5TQKtgTjzwV94iECobLesppPPAn8mcRJJ1FXauRin91MofKBvW1WRsiwx6H8YKZvBoUP3oHrEJZA5ssdbngmWuJC",
  "key3": "5HZD86rf1Hw3LjsmbBzJ6fWE7DZ3GXDeT41jujpeniv44JSqCnWLjXdF9v9vNN8V4LwDjSWQeQhBLN9jGUwPGaEa",
  "key4": "5XhPhfMabNshJMv6hUKG4ZxXDdYY5F8f6stPR6gEXfC7QER45Wd5H2VJgArwupnXk6BpyR9f1LaihysZz6QL8EE4",
  "key5": "5jwz2zBWdvdH5EFSMdF3C4u5BXrPHNqSk3an14V9MGJWvUf8FZVvBHRbLXpSimfeVMHDcUWe6sWCBWUdk2Qb7qLb",
  "key6": "21GfxD9KJAE6zLwsVHDT2kyGCnjyeqds6DiMFmLJi9yQBonLzpZ5HP7ToRY2zUbFjYUnqSTJ5kfeUL21z8GYP7UB",
  "key7": "4UCmNti2tMsoT3pjWkHycx2r5RDEziT2DCy7goCxHuvnsWoHfXuicPsDaZHsc1rbE7UrqcnbBZxCRtEjUzf2Kdro",
  "key8": "2Ls8zVaWsFchVL6zDThXMmArYJ1LeEUmf4ThVfmTGvRJNoZp9zaX6c9gx3SkrdDTAixmuAFo59F264xBXTo6Pqr4",
  "key9": "2LoAgweeY3fbBcMvdq6U2CrahSPVa3xK4btrqEBfLzKdSE42n4z22BJg9iWzRNTdb7K4rSzsNtMcM14bxUg84eKL",
  "key10": "4b9jaHdU1w7QT5zyYqXbQ5b5NXMpD6ip9S19pSYcXBpGLTANEnJjX5X9njP3fSnozBTqhyuiEWnXkm2peHt66wai",
  "key11": "64Re9d5nF6zHMvpDnEpfAf1wfa8WXf2yysK7Qz9SZMUjM2NNsVomE9qGSXmkuRbvYABKTjE1ZLUUTbB5ugwJo63X",
  "key12": "ctFMy3FN53VFy9CkS8FrsBFNowNETg8rDd5CMqsAfGZYWwt6Jmd7r9dNmhLREMZE1CSJXUL1RqNdUqDaSrud2Ut",
  "key13": "2FWhPtXZ97BdAaeYy9rxCu4rCaKN1TD85ijXwMtoZ24n1RQnmcFuE6svCzaCS1uhB654xkjgfpqH42jpWt8dGhpw",
  "key14": "35gT1VY7s8gomVt4MEZrtS9erZQrF1JNiXqPPUnpXM2DFnRp8kf9kuRi8gEahow2259RTbA6qDU5gVQrwRNvLaU9",
  "key15": "4iQ3T5P5JMPr3i8czN8cDBeEMfEE8WvnfaTmQTAH1CzLjZWiK5JsysxLs6dm7hymvatSYjMjYdFZz64oggCTdXEy",
  "key16": "5xekVi4gsJbesSoLxDz9Hge5Yuv4BbmLCD6ffKYQnbF1uiGpsELwhkX6VxWqnqUcdVUVcBVWaErvUXUPK1JhWbhk",
  "key17": "5jkpBMVFGvQ6QNEZGQ9QM45VixwSLgrkjGx1nr1PF9aKfKsnnmNEKgZFrgzbcgXpXNpCNeUGqVmowZzrVwcsaqoA",
  "key18": "2ZqUyqVezpyLJtkX3XPHDnDoruMdjrEsoHUwePeEkmdxdTbxGVmYWMciDEptCTj7u3i1g9jVF7yJM9jywYqGQ4of",
  "key19": "xv7sCtq1H4xRegEwDcQCNGiB8MKUXHcxy5gNv2e8f3QQHvkz2ATmTvYahdhfjEUEavZmXpWiKHFxK8PMQ4PxTFX",
  "key20": "4sxQzY7sdLHKRjq91V5e9REXxWkJeefyYrmwy3NvYpy4orZXRM6DarLgvCPtvf3AjGtZYUa7TSPoaHM4CQswP2n4",
  "key21": "wcVGG9tEWsJsabH231LJsRxRN2a8oKBXdMod9ZbGxxFF129JSo29LiUvApn5dvwpWEjEe2DcyGyRs4ua7cRGcYk",
  "key22": "37vB635KyBL77ZsygxFMnAKpSMUEAYTHYupSZtnp2Czv2rdouMctmGhcwBQ9oRJvxyKZLXy8WU8PdNM8MyP88YJZ",
  "key23": "6cpTPssFKEWBsq5ECXVMW8Ybtv7Mt85wfVLAgE8JPQVAeTKSbXtzbinaViGn1Doeep7c3tJXF7N5d1Km2CNoL4f",
  "key24": "5Y8riijx7KEyVqayMRXXHxATcrgJNhkz9Y3DNxUQXNUF9h6pEuAc6hPWBmQKGG5XiXxHX2PzJuJyQdMPm8vpa7aJ",
  "key25": "3Sn9yJZrP2ANSaUvDtmQZtFvZdQ66VzjEGs77CCudnv5LKWv1zxdHh6WbuVGzA1SaRUq3wyhQ5hRw4XF86Yp18SU",
  "key26": "3d5SHPovhuvNwRGn2yEtMtRf39fhrYGsm1SUMC8fmr5UbxcjjPndf1vqCAgSz1F7xtUXPGWAnzZx1Xvv9RY7FqAM",
  "key27": "2iXayMqj7DfhFkiZZyahbqzjNUJGrJtYWcGPU83sJQ1PnKheVTQec8vRvKLxeATmU4SRLCi14Lv8JZwNq4UeS5mC",
  "key28": "ya773YShw597ReNvJJaA55mFZiQ4gVvCiU7yQfzFnkZPZ8CRqt6LYvZGtgbB9jX7cMScud8pcfT4hrkxm31a9pE",
  "key29": "46KPqoBCXPmM3UTMcUVef1kkjwsby9ZNPY7LxvBGWEHG1XLFbED8JvM41miGtM4kHNYty9KUiZbMsJUjxaDeNeHc",
  "key30": "2c9wonQNEb3aNvdvrhGRvBsARAZ6qB2yuMUzzczbUgayyzSya6ZtYtVcQZzKNSDAwWv7Ja6TSG51FWGoUSznb2Zb",
  "key31": "3nSueNhK2nYahuhG8grSzxbYUt58g7DfiTJNtLGaoev21tJiTMskWusCdepz3WPBmnQkVRZ16fKTRu1woqJvJxwS",
  "key32": "3CkT1NUL7MWxFtjmwsjRKsvJpWD2eQJ2Egw2UMuuBdJGHBSnW8DXeMLkW9ESrcxcoyhJstrAKSTvDoG8iRYRFGac",
  "key33": "4RqUN8doqgB5B8jY7PVFM2F84hhvRxSH1FvewFuHZyvbccKi1kpnEVAtWHnGhbrGUFiVneU8otz4Px7UtKXGwCJN",
  "key34": "2JD1s9vLesJa5c4hJ3BT9TBQ5ZhnoNHRBTXvCPLQGFJjCsogLYNS1LLtt7RzqoRrMvE8X8RuB87yMPSYKYWgV9cN",
  "key35": "5wUNPAfLC9RjiStB5b6DNa7DsyMkVvQ2kjWLYbSndyPWKGfnQKTX9R4vf9xKcw6arNK2yQghSMb2PyUte1CEnW7t"
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
