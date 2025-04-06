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
    "3FhfvMBX7W51a5qPujaSPWHNpGcaKUPkVFFbfaaSJ8JuydRLSPgDJEvwT7ecYkidCcJpMLwR7DP1pC2Lh2bGwrSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21LhyGe9LoQyYMCeC6okRZ9LytT9cZBEgdcVvRP3su7KYxK2hRrtbJH8c7YH2sCZHEjhU7NkUTGthFE6SEH1kKvv",
  "key1": "3xGrDN2Ake5dKMghNbgu5M7v8yfypwaAyEzPhEBds6pjT6atA6Agr227LDbdKbTqKASN5nD6qBXY7v1WzZfHnzK7",
  "key2": "4GhLRxiZy23MMg3m7oR4hwrq5qhzKc6qm487JEd9axJhrAp6cHdwUMvj7JLJqsLH55eprxM96SSmg3NwNy4Jgnhm",
  "key3": "2yWHvc8Um113oybjpqU4bMVV1BLBybSQ2jvwMP9dmB1pH4W3UfCjPYNHRdqwDwzVVBHeXRvenq4c5vSAxpxRBNsY",
  "key4": "5NVg5s3fmuwtsEfzxECpZsX2p4joZZSi6RpXJbXPQozgNXHmjj9uXMnYUiWZC4wWwk2a6zveBv3kqVWtLsR6hSGG",
  "key5": "4iD15itds8dLKY695UZxXmN24jE75W6yyDZd9M39i4Afqa7rpvTmAu3tmUuhN7VMHhR1fbG8JdDTCT53HaCdEs8S",
  "key6": "2uRSbWUMYxNSKY6APxei4BS3Ca23taNrkDybxiRv2sc9CSVNjTGZfP7rWDR2B2tNxnMeEkMuWCo4f5cnKN2dZocA",
  "key7": "2cf5eY9Ai5CT2sXZbCZnEkwMLH9iHpP9s94Nz5zy1nDsiyiaW3x2rc21Zf2ZJubW5YiXLQ31CbrKJcjevJJsqn1h",
  "key8": "26bo6MvniuhKzAPji6gBwaY9EkuHrCqf1y6cPKgKGVAMVTczUwq1qqmoUxF19oi4KgcqDkNSA7gDyTAnWEfpi8bC",
  "key9": "cnLVGj3zB9zDJTtvsnPDYpwngmqacEjcwu6bFdDZy7a2qt6niSV39ctu78R9sDJqRianz6ZxPd1jHbWhTR9MWZt",
  "key10": "4MBAKgoUf7bbMZikuZucS3a8cwNsc6CzLP9WWDRGzNRxLaeGyKf84n1f8hVdi2zmwEBNL2Aq7nj9yUoFSVFNX5og",
  "key11": "3ZrMcygxRdSUULTZCb9VEAuHnVtE1WigvL3jL3KL3WkBYQpJwTNgfemhuuqH9UnBfdyVsFET35NAEVWDHYK1w1gg",
  "key12": "5HiKj2uYobR1yLkq3EK4nZKPjiJSNGetgNEvcZtdSsKkAzrbuhgSJB4SxncNDbyFWxmiCWWqbvixGVwi1ymg7n75",
  "key13": "4P9gLuRVCGVnGuwNfbSsxZfPVre7psckFTZzGWxyn14T3SP8f474W758hmRU3euyU59MPWzRVdom6Hib1fY7TZwE",
  "key14": "476t9eUvU2EMg65K7kBM8RLHhXwkDZmXtubUUk5uqntEF7j9sb4Yp1gf48945wkh9P6Bjeaq3YeDAcRMd9fpfrry",
  "key15": "5fpnjg6YVYGkeqkwxPMeuWzgKwQoyzu8eJWV8ctS8dWwshiVT55bJC9f2uGYfWr78j3YfPzxs76LF3zLSi76o88J",
  "key16": "5KaWB26R71yCiv8zmKMygLXv5NyKPgegHJLUYDgLpYGwKuPrSBvgwjdZCXPcUjqoZ5ErRkgqArZeVGhPwkkEbAVG",
  "key17": "KpeDsUkqbxBGMD64zRohkk6CKRXz6CbzFpnkob3CFzciF4wmwrHeJtQbzMvPVSMzoGzK1dKZeJ4CwbHWkj431Zi",
  "key18": "3Q6np2g3ht8HqRBGQDEg4CWUtLQC177VYSu6i2LEvGa7kiMYGAqKthYhJ6awsTDVfWZQY2mvPyYnXSuKYn1NJZ9m",
  "key19": "5BQm54wKX2uQaXkQBTvWpaKANuNAfBBdL7T4gREBJptPXfME6EpHpfn17cZMBWqdGjT6BTCoc2Zjq8jkRaNBgw4b",
  "key20": "5umhjvhbLNXcktMYvzQu8GaPc3bMi5Jxa4boZGwHdhcZX5SMwswGosCnB1dfP1536jJU1LMpAKfYeuJnNnWQQQ6v",
  "key21": "5hGpQcDbnMACDk8Y9ZYD9Y3a5D2hsnjHtwJUe5Q2KzZNjpqGZX7mo2xwqnLAhpi26epwipWFUNmD9pjgVTy8Pckm",
  "key22": "2okuBDTsVm1Wt76mYkLpwtHTGB4hjBNFMPkgJB7yzD4FkurBscgcfk9AvHmDFXuU4FJbAy6Sw1bTC9Z69GMPSbdw",
  "key23": "3SMWNAHYv3XCMcsQfo3idEqRWLN3KFznDAjrptdFsKmcxAeq6noUreYTxBKkfygUMdXgMC3equwiaUWwMiRigwM7",
  "key24": "5MepACax19ojsFhXBFSrYVuBkTHoDQaE8fvSHD2DioanfB3eRxChUE3HhaAeKDWwUzGk2HzGvZYFNVFj4EXpPxgy",
  "key25": "cJYe6PF7U1i2tybpP5Dk4RgehGXT8nchjNqhN4TBuEgFU2eTRH9R8b8W5GLGpa4tHcLZGd58M5y7gyCKXucF8Pr",
  "key26": "2FgQJydQkBReEACD2RA2AFgTbjQoAUbb1FsQbm3qnHwKBPnDXow9J74jgcFdK6xrzBxBxeeuD16RasTWmzGvcEwn",
  "key27": "Qs1GV4d34VsPkBqZGAPBAguZv1MUtrbV1cdNKSkmzq848C7y6jvVaLLzFAAUeLowRAvfD4Qrbnonm6HbYNXNDRu",
  "key28": "2tFELEinvkQF1ju2pcdJciTmQTCAAadqvRep19rZqrTpF6hshvHZzxeHPrbzug77NKcgGtXsiydENUBR7C9VGkb5",
  "key29": "L68j7HexRCDj6vDHxxHdp8TVJd2wTDAscmKho3PZuBwV6phLo5UcNcQ8CXfPRWX4wV5BZCyfwQqxVQLQxjGx8vj",
  "key30": "4KvpVMXUAnEdL9Ze1PzSFAK31nYSF9SQ7zeHTX941QRW9NMMB6oAbreBr75T1Aia78kiK6PHZ9GtBtbdF94wXaCu",
  "key31": "DVW2xP3vGtCwgXQzQwybr1eh8EBA4Gos1uqXR5732miG3Wh8iRj9wQiVAKmBRpWVaLYLA8P8Pyebx9VwPtGZZpm",
  "key32": "565J9NiHBpSXQyVBLPaA8FQUboXC4Ua4NxzXmAjQgZ4KpNCS7gEnMkMXTtjQSjM6TpDYr3JpYgd27zDUX4mrPEGF",
  "key33": "5CbMpcioW94SyQnevvokpGF6dCZyEGokLdxKSRtKvpDw7fd6MiCFeyGdj2XvbpwG9xm5ALxFRBL5BbNiNqd3cnk6",
  "key34": "3vZ3TMTfUgdg669hkNYHmn3wNS9BAnKeNsGYmacnY4vSX4j8hKpSJHGLxnutz5ws6xsBFSmi5JqnoDdyanvzoMPZ",
  "key35": "zwFoYM53P5eQCLEiXSfpo3jsEzuE5kT1vLbp49mhvb11MooegMffopTJ5GfgUrR6SEyWdfPehFxv3ujv3vCDMEE",
  "key36": "2uf35LKjnuT6PL32U2XV3G9FxRWrTK9dPeBR91km1FJMr6j3G7APRv88Cbm1fu4udTjXEPBu6aab9kc94DeYUXFz",
  "key37": "38rauw5PPbWTvx3RxAb5VL7NdfM1DdjKLBwCxtJh2fgsipTqtr14Gvr8qu6cD77VgQ3c7FzqHDJGZQ8p1xGbmm2R",
  "key38": "2yUb4dgvkWRWtXKfj6wE8mnj8yrKxUeNp95E8G9evvCQFjSgzyaMJR7nqqYSzXbPtNMSQNUDV6NB79L9aiJFjRT3"
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
