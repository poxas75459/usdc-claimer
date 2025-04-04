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
    "n2wxnbtVyEKevTYTiPAmvZ8eWuy14G2bKQA2ceJRN4kqWBf1urHXJAEU6iPteztJu4HWjYdgdMzH929Rnq6imrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7kLAD48NyiRdoYy24H8sUgNrPmipGE8xBospCYd3hMS7f9kdJheLYUNu1SrxT8s8mY3dh59S76htATuXrajGtJ",
  "key1": "6VPeQMJGXxQ4jHC7DL8jhZUN8NGqTCCxQn2mHeHcJtmKLYqYyS6NgNq6x8qnh4Mx5w3k2QDUUqZx2KVK7sFjAux",
  "key2": "5PmqqfyYvrNuaWC1UXVouzdzjC1Jft75HiJPMHE2PF697MLVPq6p8omz9iqgqwN8AAqw914sfVFtNDeJcdVoCsj6",
  "key3": "2UBEWVtpuCvgPiEeQ7eyYNxL8oEfHyroBBVoSddLL5eYuDqAbTnwskNbi9kHzsgW6E8bAaWKmuoPKgmCTqufhRHu",
  "key4": "65nYDMUaSnaMbiWGgFqFqaRbd1DRPebvCXLFTZqFow5Qcqr83LYTyxdV2jCx59cumUJ5myutSe7kLuuPbevccEp5",
  "key5": "2wjtG5pgxBTGnXNsSJYjC2EdVZzmHoscoFztsxZR9PMr26fGGkLS3KMXZZojo4a9ZZKnEP7Sntp9SsZWrV3Sg2pr",
  "key6": "4Pxw7rC53Kvefxtv5pbCqqZBNgCXeBQsPnfXogSJPKyzkF2kDxkx1bPokbnRqUyJsf6v8mVURsUdJC8oABrzvXmx",
  "key7": "4A8LAMhaHoXyj8agVhBR5HuSkAn1Tmggh6HV8QzfHpL7Z77ZArHS3TnWmRRpVAD2wb1LA7Zb1V2tXiD9pY9dXLR1",
  "key8": "7nvyBy9cLscES3VMJg7fVKdZTMTLgotVsL2XXSusbCKvgaHBWCU5Lca7hLcjtGBNWUK2yMswtETotHX5VZ4Kbf5",
  "key9": "3tHNEGaKhAeHj3KNZ3FNHDXxmevuoe3Ucx639DhVDdrKcSrSDTFyENTfyw34DFVcpS2R1kNM67MVxQqKPAzLAuty",
  "key10": "2wwe6qLuqCjhF2CPnrbZk3QpQxNaeYm8szwhiuHVvotigPhhUUP4KnBRpzbRGkda9w2ZJK8SvhH9CcKdnKbAUnmg",
  "key11": "5MbHKYfZBWHzDQk88ytoFbWbN42RPDenL8PU2ZsTBjrrd1daVzawpDX5yATL9hJuUcfd1JGC6qJEYkBinRiLJMxq",
  "key12": "3z6JxapmS27mwT9yE4Z3bkNkBo4DP9VziLLep3KVPT1aAGAePwnKQK8K2FDaCqt4iyw59rb8KVbp5FQVeEAZcbGV",
  "key13": "5NNVGEKpVAYRLLdZmNjhTFrighL32qS11Ca1NyWbXJSJtESmDB9pmMh6a6QLhmw7tu7ZUSyyrNa7vH411GDvQXFx",
  "key14": "PKr2r33qwCoc2b7E1qhmpc5d78an58pKTGgAauwyi3KbHpSV8qWXdeFK9soJSQY4wsVj1PBvGX4Rfr944qPgHUE",
  "key15": "3zGqwPGaSHUVatEkkDKw1rsbeWJdCE7s7bWLVitwTNRnfHXr5BQmuCMLVA52zKqgZKgZfYv8oP2D1artpXjNdhgT",
  "key16": "2cYd4akjwamyEynttMG6nqpLqbYHDc4DpNvr8Qyw2cGc7TVNdvTWddxq6G4YKrdnVsAnp5ZhVwssX3mKKdZ3QSyw",
  "key17": "3eJRFqHyZKRTtqwFXLNssL8H85bsgdXQCwUe65PQRNamm3eTdgUqF9wieemcGh6k1Jy799FzFFsuF2maSXqsYB8L",
  "key18": "2xs5T4UF91BqqviPwiwBNfomg8QBrinS45GkrY3GQmUMbovFg9ZDZc3vmUNZ8r1XP1sRHP9pLN8Kbpe6AanYRnAp",
  "key19": "VCiTySoQqvFZ9PJFBKjM8BspTHFNXxVLEygCZRy8PutVLmzKEts8JW1NywcQKdXKCwQsjWrQMSSKQ4dU4xHRkSx",
  "key20": "45pNDZTep9D6bkP7j2jgmAvURn8JT7JuGGEfUwQz4LHCJaNbWyaKsyc39T6A14pV3surw1uhnqJJT7cmxxsHmekq",
  "key21": "2XLjVu6yQ2F3PGNHykX3Zj6632bw8reDj3Uw2kSTSdSjdJ75UVKzLTWPH18z6ckHpEdmkZo4vS6M7euPnCnrQVha",
  "key22": "5Z97EjA458nJEUQrHheHg5ha4DgSJZKbxMLdgaLwGCghdTAPiwe2cADabYMCpppBZWwJL24qykM2sEsxh2YZPatm",
  "key23": "3rWNZs6hqXsmc7RoaabooPYrWHGi7RcVoFDr8dDJTqhZYomjCdxDybdD3QjA47GDwNJAk5F6d4aHAtJWzikP3Zqs",
  "key24": "4QQdpmrqtZ4jM6aBJRRST7wJpPxVjkbXaf1StmDeHEeLkpzppf7HtG66UiRcYr6HvSaBhUArQixY2u1xQ7mz7t7C",
  "key25": "sWEPwTJaNtdiztQPizGMnyhAL2KVeAdmyEhXCZZFiVw9zpF2XGxDvyHUieCeBqMGFBYD8r6pFHXTF5g7PzxgzGT",
  "key26": "2FgSjz9UZYB6ZEzW5c79SUYUgTDPxPJqVXHDjDbjrbYYZeg6f44waY51iJwDAvZC5LxoMfkVn8xgtTeXfdvfY6J7",
  "key27": "4W1JHiZXdhX2E5PjE2prb8kxMs8ZAnpJALGAsh3sFkYNLQzk1mmz3nad7c77G8LRRHtZY5huhfsYvXNGQu4DDqFE",
  "key28": "2ug9hHQSNNmXrGiN2cbQYQmnd2EmFiXJe7825Jmk3xsKX5Upd3MVLv21iMuL3kixcAJ5Fud8bzZzDUfvjqmp76io",
  "key29": "EyUcQcHRrJky4yaibsfa33AP2QDzjd59hZmLvCngG3wHim6GB25aJxUp7gCNPVHTpLroCZikHxi1zg8NmeRbh5U",
  "key30": "2VU13EBvquGSj1wF46mevZuD4CxZsPyjmo9nTyCWH4HeQCXPn246ujGREewYfrNdyjYHAFqgjDRUt9TzABpPRRRb",
  "key31": "4hAuBfjZdtBRrXzeB1PuHzx1JjtwjKFqovhMRYRGutBySbgViGWD8r7CN2AnnixG8evf1DCEXiz6xnYVnBjtFgGh",
  "key32": "2hwxzX7Ypcfp4Z42psWzZXBcLmzTSA7mVMijjaRK4htNndRSatnmy91SfBzxKfkbo6dywntBnRULmwqJ1UEYC9W4",
  "key33": "666vMV33Pt5xEk5p5Ah6y1Kf3A2TyrM1giV7fvEKka8Wva5H7C8q8s4Zztm2SxU9EnCvtvQu17CV1XatCecxyUgR",
  "key34": "44yCya2RwujsQiwYQ1dzWGK9vTMGLPpac5LvnUiUzv8CywpuJQ6jVvo8zJ57R49oDAqSp75uTv8XyG2dmPVYTGPQ",
  "key35": "4Si6JxNUEACHoXhV3fZH6Jc2yUGYxPrFkFQQMMqHPe27XFFjpmPtm5Si8dDKZFzrBGzNvwM7aKJpGQ61DSxgXK9H",
  "key36": "KTrQUgkfiSoT9fMoBMLwxFfnBaVbt9UiFStshT5wKtDSp82Lj2f1LgkHjodZzeX8rctgUe9nSq5yYw6D9Ju66Lk",
  "key37": "82gpMeP95euYNE3bq6V6JDUbAUSDaaVcigaT11EFWgM9hHsbH1JVL3kCeZeaEKhUU6wcQaeZigonrSkQoWKPDmt",
  "key38": "3EQ8tnAqhPqjgVCbL7xCMABnCmFuWCxiYGhZgY16C68nY6P2cxK2MtMVLyRN4vuXBp3dojVgCR9WvupzPMxBrMPf",
  "key39": "2XFTiNWuV8b8Z4x2YfVJHciSASP88jH8VMjjUPKCxXejUZcPMJrTjf9nMRpbXUb35VYQ8vC4VAaV8jTDFx8sxYec",
  "key40": "5mpVzuoHLUNwMD6a5mSxxCoe4X2AZV6jQvtCx8rhDeLekmfJj57s8A18XD1AYdNhURERT9Wj8ZXCkWH38ARK8ArC",
  "key41": "3796RtEqPXWqLRC5HwaVWtvexoS8RvWqfUDabzuDj9iwWEwCuVyMPygqScLtgGjw3HqVe4NikAYY8cTMioo8fngB"
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
