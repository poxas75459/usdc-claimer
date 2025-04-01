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
    "3SfKqkfSBEDGuRqXZ2egEZzB83VQQQ5mWSiBLeFMSmKNkpWKh2Em5EyCwMhCPS3VzsvMVwyidpUhYT5qGbZYm61D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6ZAvJ1mWM6DfA5wwYMGEAXwhRBujD1inzQLiyhA2wktYJcY71FQY9gsCXwBzB7Hc5LkwZF46SSvtFgew7ehj5J",
  "key1": "s7Hbxjfqe54RHdTMvm7JmEB5b6TYGuuBNmxP7sTe5EHhZVPRsRUuDguMY3wzYHcaVSmoePW4Q6ZLEvWxiHT1bnW",
  "key2": "5DZFWpANW2XagfQ274C1F5ad2GJM6tVNgCjWJsHEWj5o9g69ytnddjwrfbTscUJMY7eHnsFzqdmexjm67vycbnGa",
  "key3": "4m2ghnpzbpheN2dh6ads5uYqjtvQ4Mtrz4Fan8TXwVshyKqZ4NANHVHmbaMNXpeT3PHWfbadVq8gfCkMbtyKYNaU",
  "key4": "vjfaCKRwRuimoRNLpY6iwmoYbAjyFhd7n7xrCHz8KV6sHTCFi13oyXWaLDWMjDHB5sJHJWMQ4XCxZ7T6pqjoPdh",
  "key5": "5RbhYt2GtuxYHWDUo4okZ9nS8N7P8thusm4dAvB2uwo83GB3HvZGtAVhfBrLVhKgWNo4N3WVAds7NBv347x6uksz",
  "key6": "3k8mT9Jy8DXZxuqoxGoA6Qy6XrY9zb1y9YgYKqNJRt3hv1PH9kgpTGj7WYDb96wWfcfNC4LttCPHETvxdTSmSHwj",
  "key7": "391mGKb32qQ22vLBa9zn1WWgYnp31aUWYKBe3zLsqyEzunKeGX5vJxcEDxuRRs98MQKsUTPeAFN8VYpT86aTYxvr",
  "key8": "5eEZXtQrhCXgiarAaZZddSLdE6F5mQFUnNC5xDgsK9YswBJaWHwBR86vV1KZawYgoBoLUR6Lg2wmQUb7zQ4aL37f",
  "key9": "5cGLaUSPchsC64o5CUMEWwwirRkGQFaouKfSnapB33FcMNib5fJ3svRCHuqSkSKsmQEMhMaHt3u6h7vDm4fYUyqk",
  "key10": "3bjXdFbzXqfxzo8MZLCV4xM6boyt9hFJ9ofzFvQXn2xKpEfrZbG65SwzdizyXkmkp4dBsU1vhmykSxBdrt9AP3gF",
  "key11": "3UeDJ4mBrpT8hZJ3L7rLe4xHvo8sZHaiibxvqEztW6NNKQNSQ1rP5WHmfTkQzDwPdB8ykL7nyfjCr5CcBhNh9oHb",
  "key12": "4SMeY4iNtwqkmmku2dq8owQDxmSRBYs4d95GcgfQn6dMbX3PSE7zPCg423uZw2A21mUUuaPWTiDCSHX1g38DKK27",
  "key13": "5WUN2nDiNkgzqPY8FUUamhFd5RwPY72eGGuhjWDMXg8QT27gFS1zASacentCWUwfxNAANsLC8aiXQBMtDRkPupmv",
  "key14": "5aSbYsxDfvcKukzppXSGNK2NZw4mAVkZUj1F1wwcZjJoLM2SD1qFEyBcYjHukojmSTqaNTd4LqkZxLH1v1n3mQPJ",
  "key15": "3fjqwae8WGxk1DejM7S1PFzTvDncuEfQhyQTT2QEDobyRvcEPRNWjcgJ2mSEAmbYB9tDcMtjgSRDjHnmcEy4MzC5",
  "key16": "4EeA3KTfzCEdPEpDCmyzs1aQumr2HNJbSHMmDGm1wYBvmWCYYMUfVNGpmXDNNyCisS2uUVpeV4GH1aMmtpTCtpN8",
  "key17": "2mmetoYSGs8SrjLveQseZBtsoWjCnbK7rUZpWtk5rFPzd1sQxL1VtEB3L1ZQK7C6v7p6nPPpHeKygcgTuGC6oNvL",
  "key18": "2QWcNJSMNwkvBF4Bb97SFbiwhByFqZzHgtbdKbKL7pw4WK9omTAaBbftNgsNNqzfHuyBfCAorNem8bvLHrBg48qP",
  "key19": "555pY8GDnmxpyPNG7Xrv8XRnLvdBySYdoWtQZai9cCnvGZG7NYj8uGCdcS7rwDCTno5VWxMaWk8NkytSfa4fRcq4",
  "key20": "4JLVLo2meKooARqLaQCRj5P226JRx2BtSgvJe5FH5ppc83mG12N2L64UwY6nZZStcut7RXu1SmpfXsGLjGS4DH99",
  "key21": "5NMYfeRyWkapRvrN9PCN6ga6dG4SNwgpJ7p3iLpccRDfaNRBGjiM7vBbquTArmeotxMyP2b5iSsVDmo1Utx1cK2e",
  "key22": "xDHBMAGUYcvXbzQ1YdLTaKAwwvkyKivZP4xofZ3KkM7d9S9b3WXkyrkxGK5R7QJ21oom3uxjm82DpyBtb7Xdehx",
  "key23": "3cbWmpGBurJDei8N3cGC96agt3Lrd4Dwy7r3tUvLwdK2RyvZ5xLnVwvjC2a6N4ZYV16gjd9UMVuZ6uuv8Shy7xnL",
  "key24": "46bFoAkZKPqTfrNCvrA5vQnw2TimbVHF9vZgr1jbqZVdkqLCTF4dD4JBkZJnNGBvpyWcEUNVjvAcduWW2Xp53uAG",
  "key25": "5xf6oKPvxCqGVJBFAZr7qvvoEBdhPQRiTPDfmJrz6n1RzPfqV86bmikb7KagokkUb267NDMCBNM9zvynMag236ik",
  "key26": "4mg6W6DdCaUCXFPXmKQZAwXe8oGMZRxsHQ85ct4G7h6ZmVovCki6nLtnWxqb1qzDud5njRpPCodzwBb6rTixMXYg",
  "key27": "2wwMTsDHQ1MnzWghnnfCPsaV8YBRnnUyc3indsqxLbgsToYCQwV8jCEUf6TELyibDBGHEfY1wya3sppTiL9duQVW",
  "key28": "4WdexYXQHXXKrGuDjUqgThtZttQkEPa2uZkXoSxEq4apm7xqMKyyvWVaaKBqPKRHHzfqqfWUXFc6ibp1KdL7SAon",
  "key29": "3mpF9P2WcYwrkpU8xvoxX6aD5cyu6t3da3fvk7a56FGpMSYk9UL7UPA59zkhZcGQHtcT2weqG57quCSmNbe32Cot",
  "key30": "61HHW1oVk76bk4ymSWZgHDk49dq75eJ64hTZ3fKno4rua6whfTR7SpA4GwJH69ZxMeqns2ySmcuot6TnNx9Bxa85",
  "key31": "2MVXyTsM1YjiGQpyqvNLZqk6ggjjjRyQ6cEYwN1GyUtAEQVtqUhRdSzmdyCKJggnDnpXJCxJh97BCEWE8gcctej9",
  "key32": "3CN9YrqbpTFSQRM4ox8oDZNaLuRMGf5CH2Z1ZVTRnxFre2iGmCWy8uMhPJKTP2UYU5tjq3CrA3KuJMPCGdt7MAD9",
  "key33": "3CCjpfHEpDQFUuX479WY7aXYzRgp9YPFZvMTC2VxTuzeBszPi7Jfztwp53dxarKArPFE7h1kphRfe28Ssp85pbEo",
  "key34": "ctxcRmyUBtB7px9vTwthNcDQQQdaCSFpYB1bE2qMN9NBGr827Ufid9VofP7J8qcLiww4BzuyxAhb7rw73jpsh9S",
  "key35": "3aNVt94seNhoEk8Dv7V4a9tr3uCLinikdcrcmXo98p72j4nm53qSPvJtHE6UiZdECfnNN6RSrW2ENtapnYEGvd4j",
  "key36": "3akwVVCvGKaSexoErJYdZRQpuvueeavVzdposHic4am9ucLdXdoD4mVAyCXCiRFdkm9XALPat79UkN5ZqimmjYPR",
  "key37": "5MYWM6Y2LFtCFDwiAZ5tdxVF6oFswsVXA3vRxcTnAp6oWHtFNff6u24xAFkahPLZdEAQN5AmPePDCC2t2hwWJpkg",
  "key38": "R24niJ5ehGUditFdNgu1BY1FbSYuB7JGyh4Yh7skGKNJbT5uJihuz1aWEGjtFbHMtMWn6et3uAvWF49taNC2JmA",
  "key39": "56uBDHZPm7JZ5SUKPw476os38mHwpXH5UD1uMK3wRtyiHne4fmTRU2hNbmNJD4hcmcpUG2Xqsn6CXoEbs1toAoUq",
  "key40": "4tXvWvrhBRNKSdZ2cbqccshiUUzB87tirSPJxTDNpg37BpLXLSUq93b5gYYDmgazEbZeQCC1kXirGGMeCSwJ4iJx",
  "key41": "4SV136rcaiYRKENDxkqK6PP5XCf97xVSSQxgTy5xqTgCsHU8SXRHiUVHb5waS8q6YdW1Rv9u3hQhEgMVtJAzL1sa",
  "key42": "4AyUcBn25i8Rd228gtJ9Rsdgg9HSSuFUcwq9SXUuadUAZnbBUyMWohdHzL5hTCnjKtp5zbXMSLZ4sFWeXQnhAhjq",
  "key43": "TbeWhGc5hqksW9X3q7myGGzZnbWBPDb5sC7Mp7Vo8nbkE3HChehRi8emByCSn6MZnsPawc1JGoQvFxjWzKTn6sc",
  "key44": "3Knp6JFWCibKvc38FjwAenihSN5cgYnGf1XqjJ74QSptQHhE4TRDatwAEHJM3unsxDiiCY3Jgsyf91fFYZLGeA5D",
  "key45": "5qj9uay9JpNei36xk8ix4AyWbkZMTP7hhpDPsHj4x7PkTy7mzs8Q18MdC699SNABbXKMaXFzGQwUZbcSY32NdTAm",
  "key46": "2xodTfzijC75sEHf4hzTsQz2VVnzLJoXbYT7y5xmaXma35dy44UB3Gs3o5ynkaC6hxagoeZgNsvxJS3appJDMnJ7",
  "key47": "5Zhg5PBX5yuX98eN2YTEkxpunqXktRwYVn2qQLtmygDngaNXMXCSqfaesaLrf7cLSY7de6Me1gZR1XBscwXSSnkN"
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
