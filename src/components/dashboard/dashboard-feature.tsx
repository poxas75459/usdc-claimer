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
    "zKEroJLr9JVAdKbYz2xfVNcT9a64s1DTxtfTNjnFKmuku419actpWJ7YRjbqQWsvmSL7nUsC2ZHAeNQ1mPQ5gbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59wx8TqkVuzGnEtRMaAVQL9JJpsgmGi6jqjpTtXLTWpxbSBGnVUSkt6Au2ifvRjqcTDAhbvK7N1og8dLUwEEQJwo",
  "key1": "2cwZN3zefJWhzpQr5xApqPnvZiH7iquf5Qq6Bes3opVRxmxCGQCY6p1cjfzUt5GqSZwYWtmS9H291AwuHHg5hsgS",
  "key2": "5mQjw7FZBTVog1pR3nKdyuinStDfS4gzvycDoPqmntQTNhhL9cRx8ordHkFEZgM1SWX6GBq8t3pZuQCbDS9pp4Nx",
  "key3": "xkd7trUPfGhpF3Fn5zYb5vknBEnkMFH3akjZ7JdYHVCq8UvtReci65ZKSSdLcBCc3Liu1Jw2VvMXjs5QarikfZp",
  "key4": "34FDfYh2rDwbWNi8CwSyJ5zChGWL6wCuqH8NouxCQ2zXj8BfZx97PD9q8SUTszfJzbfVBvcfbNJ1vkSFmyqRBSea",
  "key5": "wGWYjwVjVfr2ana3gbBB3R47KdhkgRpbMid1Y3kSX1LXnxnkR6C2Z1ajFz7nQoeQ2vg4YjMzMce7XJzSvVKdbQ3",
  "key6": "3pQ7mhvydfaeXdZcTv5CNZGrH7ohFmXddrDRHrirRNPV3rgzyrfvSuUdFWG1jUn7FzwETrQFCEGimTMx3rUajcHE",
  "key7": "4CHP3NpnwbfSqo2v8JPuJsbsLW5FQ5yG5KchLpBCo7W5NmU5io3KCY7PATrprggK2WUGYYiF5aU1vQfER8egVVF",
  "key8": "61ym6ihr8YSubjQsXd2srTKz6LnFWLGZ5FyKNdUzg6kAGtdG9fB7gjdPZELbtKHUnaijnKur3tjKjvFMo8reSviU",
  "key9": "ak2yE3FW9zrLNsTp1LsHR5LE2a7DaNoKDtt7HRzDrEQcdQ5FmjE3cN25yYfsS2QwLADPcaGhKpD12hohW8b2Lht",
  "key10": "5Tyfw3TL3rVGPbWegjRGQ9Cvp1jhV4xRNKehNifBKz5X51DTpQBm4qt8iQWGT1SksQFvNVmDsg9NJUGzFpzFcYcK",
  "key11": "65UTyaYNqQfZ3CPebtLGPoeNvvKHRxx5wm3f2ZALLttZVaEJbSygpoPegCBgs3upu62vKPAzEQxotnCXW1MA9ULd",
  "key12": "61NgcqRsmqJc9DLK6baUnYHdrTrtAA45EUFvLD24qijSDDU9LV9oeAg32L9XRvYeQ3a5mii47TTzhuHjZZcopeHP",
  "key13": "2YTSwKVvjjCfCwLMvgMrYaipCXjHEcu4obBKQmec6breZA99vn9T8VEftv8uAjQSKvbY2kZxNKSaiwa9uc9rfi8R",
  "key14": "5P1T4XoHZYvum3MBNEaEVc1MJRzvPwfm8Y4fewzq1ZHMj92zLH66VT5ubZsRb8K1xro8MMgky1WhwwEy4DxHFUTd",
  "key15": "2eK991GxgqANzY6THpnCzSSAwiZw8YXpwKdxDNo13ULkC6zvyXA5ApUp6rAPwkeWjvhcG7hWDXe5Qo1WbDAhFRve",
  "key16": "2ocoWTSn98jMF2YPZDenFDQjDuYezWin9Ru2NidYzHrnkpDdNnzZSjGYLeAVWtFQVhjwZ8PdREHMX8Nyd54fjUv6",
  "key17": "5cBRNa4YguYaJEXDrvxTGftF9nkLLpWhcKQuMJ7Z6aacasDmqWnvQKuUb9an11jGpXBmz9umPZpN91mGJUBxAXpu",
  "key18": "4MYYDY9NQhx4fPgZJMm2iqv6AsLTAHkz1boq8GBNuKSV8VrZcmvhiVyJMkxKXXDfMjDNaoeo8FGAFArQH9vo5CTP",
  "key19": "5yihqBD21vNYwzdVZsmzPsHARaWw7Wiit55W7v9AsFKXNLMHMBN2igiJWpE8jVMdqH1NVByRxyZvD8vzCC21PoRz",
  "key20": "42TtHXMhKsZj46fbmZWQsLkCJR2HkJaDxUK6ibZ6ghN2KBko4Wy11cT7381L5Y4Covp1zPBtpbB7mSgLyyezNQuU",
  "key21": "5Lxsi35PFhHvGmkLsQq8bamk2v2uuvVTBVUAnVARhAdzPc6sqmWSYnkd5Rnoi7dC7vyZHyV2zEa3h9oLAGLfN1yF",
  "key22": "2k3te7VjqqAhac4y7isNmn3GNvA882EoEWHzyw43o5CRVeEkC7rphDxEtBKXGAq9AN9TkVsUoWjUPBWuVRUyTtDQ",
  "key23": "2xN4fXrhz8XgtmLaRTzc2hiZc1sAYDMQHacYavos6A3QrUGUs2jc6qPKAEYKXtn1tsLdEFdoRqLndUca5KqNFBHb",
  "key24": "wq9QYj5BSRuiSxi8k6PqRMvRBXm9xbkwpq2bx8NgGuV4qHXBHbgmG1W7GpBjajExF9jdEMqXSdLpQj4RKfG3qUo",
  "key25": "ZsBvhtYR2QS7BH6wBF8knADJB38J6kSLp79AzMgnyHHeZsRYGBFWwJgVtSeFyzakgqEMPF2x8SrXctRjukJr4HJ",
  "key26": "571xDyFSbYUrqS32ogwLHN8rFJQCUKCSa5BCDgTtydMV397S7zJvtbVdu165KQ818DpRJbtxi98uF6nrLR4tQgZV",
  "key27": "va54jSCsA4VjgK1FMx4cmRQCFHbxzWhhapDGYE9VDsAKaERGUVWM2fnm7VhW9fLoASkDBPCzpPU8ziJmNsC6CHR",
  "key28": "5255bwaaYSCBAY2JZCnGUcC21SAuqCP1W18nLUSQ8ZqCKoT7B2dmPEJortx83QWrihMGXR9QdWV5jkGga9Ebyrhk",
  "key29": "23Coy3A1FnjDcSoZtVqJfEKuEhdmBtC47Nra89HsbhjmqQe3DxEb3W37X4XJ2AMxpmfuyNbXcvRPGKCTQMxreaEm",
  "key30": "4QsMWqrYEfQhpdnooRmrASpkpfkWbQrxDHfDvg5Djuhjt3bwtaLtNYDE12tLQqAQMP97gCUtih83D92h5KHCWTx8",
  "key31": "4rSM6Cb6DgmffNBJ38vwHSTzYQPq8c19VRpEMzdbVho79q7m6Smsc396spVQXPRddMS9STMGsP3pMUWB1ZZa2ffp",
  "key32": "4fMHpDMtWwboc1KSvrk9TCsBJnMK4GvxLNizx9mvuGG92iPvZJBP6kt62LTq4xRXQ9JkiTHdvEYqLghjT2KahGyy"
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
