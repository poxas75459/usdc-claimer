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
    "UbM74j9fAds8NcreCm38768y67wFLBbpHmW39VvwmC8LNXsZ1qBD9iEZHfMjW6aGhD6GvyfKX9TyuPBdsAj2dM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H35x7WkfEmEs4XfQGMnC53Wm8MRruRpAAssf9t1BK9NWxYNRT9DYFExzePe6YxUamVQPjeC7AFg9HUTr2huS94z",
  "key1": "3MJGfd2zrEqAQw1GEysy7PRV6cNFHGhSvGpoUCuZ71TUWTj8yEYdfzG4hFsRfCDzWCimfn3Ecz5mVwP6gyAwQKwy",
  "key2": "23HPFaDBdGD5N1RBAoQ7qmoXUUjAA4A4EFpjFcJme2oUs3BsdRL3ksHYMiJ2nTLW4BQo69BysdzV9nmkzebat1sb",
  "key3": "wysWK4nPT5csVfnULfQb6WNjMDbb8QwPE2guz5EaewkQ4o2WWR1xd92ddRPS9YdwAdUsBgkscnLr8CeU1Dwm4A1",
  "key4": "2hdYyDa6QqdbZphfTYsJ34ZLFTwyJtoEUp35KGPkcKre3SkgaUNQcQyRDfUFYBbBAiTXBEgtHSq4RoH5TRngn4Cb",
  "key5": "67XJvLN4QrtbFBb7bfUWX8vwynUZb35kTxrmJorBW9bNFunhiHkZpsY4SLDfYJXUhkDdseGs5xztWnoxecv7ixs",
  "key6": "24g3qLHtbjV5ssEzoxQxoY6sVhbNnC47jWfvvGz2DH6v79EUHFtXX97MgrEmtG5MZixsaeRr2x9U24FYN5CDvbvP",
  "key7": "2rZeBM3fBeLpbNNp1idEFVHjZ5tGGmWoNrcrA59UTxNh4YFjw3ZFKPVsRRZ6ej8k37AYSsc63xkCti44vw31kyfP",
  "key8": "4KTVjrZUwxFkW5ED1GNpiP8HkHgKgyasMEhb4Nzcjdfg5WWYcYmqYrBKwEui2f8Cw1P45SjckEn41jy4cqBUo4Ww",
  "key9": "2Lwv11Jb5jUmUYWV727E8znSURQDD4f28Y4pzu3a8iqLZzv4zWkPtWyMRb54UctR68ikY2XTeVNJ1EJjGvEyrPBY",
  "key10": "67rLciHEkeB7NXGgvGiinnmNZ9m6MT8zfRATGLq5r8FY3VF9D1xAigHN6Fib7yzGUU5XGpCtVAyb3aK58LqWVyMy",
  "key11": "gCrkvcntT88p3ZxCvTAGazyJruaAktSY8NbYkgz8r7Let42soRveqGzufP64CdAQkhUxaLfmMBzowRsu1qJDch5",
  "key12": "5wW2gWen6fDZCRQCxtJy5aTfwVErBTg3ZEa64PvMZzRZ4YB7NbtHvYHTpqHUwWcX82rXrMg1UWLUDo9WSyNWLo72",
  "key13": "3zssxYCxbkYeyYoGw98VenkywRwA48xTJFGvajN2FdneLfdENrk6DAjKMtTcxTduCttPkgHMjhUStpaF5FMu2e9c",
  "key14": "2BNvir8qucsGjtE7kiHtKFJhsceweoYfd6xNh2UsMNRuu1D9FmrtakjjGpAqX39XkZHz8RqPXzSrGFzsvkzdqZQR",
  "key15": "2QkU9wptmnYQA5FvpDXyJhUjjPjGCHywENoscBK5JUZUxSHf9K9icQn4aBZhmYpAQViv8afU6LmDDmwygDfWqyC9",
  "key16": "2DSgZZBnwSwaDS5hTpigXKTcHMEzHLMJrsmUhgNiU8AjvidMbGaa1UyoJ59TeDasRsKkcs6Rh8xj4yA5PBKCVf6p",
  "key17": "2ZmRep2xRHCXEVaqXeJvtaw9Gz18HDdtyfueAy3iykYuWCd82pSTRaJo2z8bAgZT7QhHZpLrBReQvp7AEvtzcnZC",
  "key18": "2RXSmpF4jTr58euzjDQPZxvjE8V4kuarZmj1YXsYnJAza4BXPVn6R4BNpTcifnHGF5ostbsEneVBQ8pHHwsqc1Nw",
  "key19": "5WevUL7PVWdJyHuzZiMuAHge3S89XsEUR5vuAbaRBUvjiGCKdB3pUNeJV7rv5KxjVM3LBNk1Jbme5LzaiMprVLJ",
  "key20": "48eBXWjaKGmxQVByvAmmw6cUirgQKbPUkvWK7J6mxMJRMwVcx2GoWTU4ireJ4NsiV74uV9kp3Wa9T9TMLRjdzk6A",
  "key21": "hrvum2vBmukHFwNYPMCQy7yznBH4KEQQo2vx61C9kREY1FnvkVt5QPeZqyp3whxiHnfgKPGced69eVFZHMo2hxE",
  "key22": "5wS8X3ukmN38Qkj66CRf9cVe8yNU571tpdG8Q2hBwStnc3NmcUtMBNbbZeEqqqcr7NQik2z58nCH6gY4HyctiYEa",
  "key23": "4ALaeQmZJHSkHmzYrh8rvricQFrJG4aUrvp8EfHJjRyuVE73PFsZgTkDZ2vedtfDc3YCWFNJhgdQsYWZFkbysmgA",
  "key24": "5rpDjmkoWBTE1f3JByRivaK2FzqygGUDAYga2xDPypT31vARqkiKNcrPQhd1DrBaeZmppEnJWJbtamxgK6yGQ6Bj",
  "key25": "TSVgb2BTQd3bAJVo7bkK6eBRDsSwQCfQWVLi7pwccnTP1a1mTFiVQqi1xdeU3DySwmw8pSXipMHTWp7hUXPhyPV",
  "key26": "2cmhxqRfS9Rx7HFPikgKQN8Urpb2UavubHueQTALW4EL3aC8ucydjaDyj9B9curJD6SLjRWJP33Kgzgmch6hf2En",
  "key27": "3R5jJgBW4QyyY9XZXynNyndNVpPY6XyCJRh4A5rEVR41AYvfSmZGh4Rd3ALp9UjR8hW4UxVJ7TWaZziUNgq8sNKx",
  "key28": "3jaKGGpGvmBXSKNZpc6iHGkvCytn8tYWwjZ4iLpTySHCNoMtzLdmkQD1KqQALppnG2aTNfpDtE1JgFHPhhvQ58QN",
  "key29": "5AyiQrzrzAqPySsy7MY1a9AaYwAQkp5CHqve8VRyDfoXrqYvCsJKcXE92yM7t9rXtMh1Ztb9YacQy3L1FVB6PhZP",
  "key30": "5dyWLRn6FwT82tJUcKvenkX79xqRZA18H4GDKfNRwPawSPE83t4ge8wKoziHm4epfRD5QnJvC3tuZK8JkkhM4xBu",
  "key31": "LWKxLSpZQf5M5ToqmyBRupUiPyMYnpSmAWfA9GtdjvqkPkHPH6GcZebFs47rPGepRezfdijo1Mh7hCzxsYDMnYJ",
  "key32": "3NS6Dx4AhFokjFJ6ajVoZJRpnk5xZyCeQdSeC1SYcmgMYEngNJmw15nXhsdNz3rEKFEvTMpxhtUap1nJPUWPNKU4",
  "key33": "2rSqj352BfZME6um5caVuHyHL4qSRyYRzADSvb6VLBbD6gU2VBxKeBA4iqaFj8Lv1LajSdWAxZd2CmyKLNDsRxbj",
  "key34": "5h7Zkzo6fkLEzAyM2pwASJSVcqHAZJV7a54Q1FhWRccx96QkkuUNdTN3yyDznDppCXUKGan5X9tMyff9y1Sp8LHG",
  "key35": "2n7QW3WSsEnVH8J6JqnsmoHBcRzTCMzKwmAba7SE4ruVn87rdGDnTnfqBrVNNELtXB3py8VTrvX8Cp1A1ozJ3MhL",
  "key36": "2AbfCsyTHyAYAqdK8Xk6fi3HQs9CtvMB12CvNfsN1awZY61a9kXyALkFP3uUqDaFTUJs1YJNoRah2CyRStkEerkW",
  "key37": "2wo1b71SWFjuir8GCGB4aS9bjohoQYCZnxcyb2YLpHLWGSrh42yfgGuWHDq5UNiWgAaWUqAonENU2AJTcHVxz9ix",
  "key38": "4M2XNf4CVBniNtTtBMeL39iQ7iAmKFS6d6hj6wFEF63FgJnxKM2XFFme6fbnzwKZsdKZ83gCQ1iPyMbnxsBUjS2W",
  "key39": "4Tbs5XRLedrkRVtqTKgxgyQUgSCcRz1iKbz4iQMGgrkY2QZeXb5dx1WmLFSaBRgpUqpgyFLgA6kK8veNtVC5yiyi",
  "key40": "4sbyd3FFu7zL9XGRjjBKFEq8fwsYV2a4c9aWDARFvSFHeUygzGREEt4jE5JMbufb24fdDHcxHP1mePraCaQwvQTF",
  "key41": "a4XCrjBQAe6mDhgPAXVcXnJAwqwN5jqosKjrZEV3aEUpMsCPLjNWGiJNXnvGRWDxyaAMbvPzsKic896hmNbKnNm",
  "key42": "rBaoz4EP6Y5djWmZZuquDER9fgfZ3NLpNrjL9C5cVW9qN9Z66byfNXVZX5kJ6nCSkM99XttoFWMocuLdZqgFL5K"
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
