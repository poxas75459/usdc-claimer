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
    "657dVrqn8ujW1akAnbfHF2nsDLoSYdWVN3q9w2SRC5VJQdX7HbCD7sxnKJSPLKzA1SbPtKPmjndfC2YQz7Dp7kfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfyV8mixja7zEmk9vvnPkbpkokcwYdVoBE8LWPmCQnraU6peUGLNbHxq3Bmp6KUnwh91bJzUDmHFgedvVvPh5gQ",
  "key1": "3Lok8pK1eT3cyesH8KtFRW5JfMMDfRGSUmk8hreeiEfqVUgrYGqvWDuFj6iDzSJgFsGU8DMEDoa4uXyT4VJtAJCY",
  "key2": "5hmGnWvjG7EB58WnVYDHeRzeTNKtpppc23XJTtRaUBYA4T7fJNxQWTfmtH5pdtKfVLdgGVrCkNSSJd5p288uzUv6",
  "key3": "xvuvSMD7DVd2gke8LpuG54bRgwa1w6j5L2ogR5LEE3zemb1muXwDdYwZ3VxCWyA9gBxnvkT3q86oDohhuNPpfnq",
  "key4": "2H16afRq4FWDepCFVtNM6XbtS9bMv1MvZ7nLuPS8Sdd8WcnRPAijQQUc39fH7EDJMqvLwbebhvDaEFNofCK1Xm98",
  "key5": "5ZisXWbHehAv6PA2paodoWY46vyamLb2cpdgF8FTGLii6fnQUYnyg34HcdYfrE9brUBthLPmqqZYpKzBjEYxD8mc",
  "key6": "A4g4wVZepXkhtbEYhaE2znfu7W9Hy4qXniQ6pdQxBPa7v56GLKW4zgY7hybkegi4pwNWmekA7UX2MxpRE2WahtC",
  "key7": "32faEMsxd2Z8pivhVcK4SQBjQ2kzevD4xb8jPA2BpTa8XGeuUjwYSzT36cM6Rza8g3Ep3UwBuoz391KGFND13DYQ",
  "key8": "27NzGikbEJcTxJArkRdN6Gi3aRV3bWe6DBhTptDxcj4M7nE1BtLDtDpqnTZhbJ7aMFqQt61AfdnKBYmDdLAEJK5B",
  "key9": "5BcLTjeP1UZgvKEnjkCMP96E4DXUGYwnnKhAtNaERp2t34x2i8Xk77QyHoG5HUVsxvggLSiDJHxiFxhSZCHGvHwy",
  "key10": "53fdoV4B2o8KApWZgdLjHSse9aKiyPKmPqMGxFWiGNZA1uj872ZCjRSPWm6hGAqhwRtP3ygu5c6Mged4axXyU1Bk",
  "key11": "4sqF8zQVwQGB2hjmLSVd9f73xvvZbr5DvVCEpC6ehc11bqTdv6XgT7pfBfKZkbP98tq5pCteoCtXxWz65RBAc2Kp",
  "key12": "2eGpX3151C2AKuRMfYnsvUsEk8Z1VHRz9dvygEyWnR88zQxXC5jC99ZyE1FduyujCKMLKqXsYHaucX5GHHrhxu3F",
  "key13": "4EN4MU4WigBdkXdXLCh993iNepPeqt9hWdF8AoTdWx65sarn2tsH6Bbf3QWpP82Ccy2YH4PpX5mJTMzFXocdUi2r",
  "key14": "5fhPjduJqYj3Nq8kkALPGogtUURwuDC8DdHNAnKUJmftboVugGU6hYTEFG9e4dhNcfdEGWp3Rc5WnoP4P2YuCG5S",
  "key15": "4KU7LKXYFGeKUgtKFZHkHUZregd7NQAGWcfdv6cnob4z36ruiCgCKyVVXvzrB42Bw7TxR92xeQcfTcTuqkMjExTv",
  "key16": "4bq4zh5ErKwd2H8CTBHsr4E1TARKhQgpD7XdsqcL8WJaX4raWWXMbxmS4zpd1y6ytRXBLNmBbpFzWJkBWAts1y5W",
  "key17": "4vgGLCPTE297P6WpQPX8in4gR2qRZy3zE9Gmpgmd3sTiCcPZLY8f3PM6gfjmih23nyQBdMcPtJXFR4EAKpz2kKiy",
  "key18": "5RTx6jZXuvcxz3TFr8YPWvLpSD9KyuWD7Dj3ZW28syfKonWfCKGSGLGkdJ81QwgWjLMNkFC6LRfYRpfuMaAuzJuX",
  "key19": "2NAfeMDjwGaw1hrpyiSRkF11ep6TppVXiaasuAresFQTJAgdt4K2YpSyfP5uQ5Cb8Y61SJhoVLZEW1jmCz2D5dAk",
  "key20": "ZSRjqEs4oV3U2SLaUkKUQQcCV4NcdMsDE5dWtYBVByq9KYgtdR2Hut8ptGG4aJh2ezZXJihxHZVoSjFt5vZ5fPg",
  "key21": "31FCAUSDjR2QV1LdiYEq46AH81XscxmFXXCNKBn6XuY71we45gSyL9K3fRmw9rvJ2r1zN5yzbtioXjMHX2jmJEFu",
  "key22": "226jUSXVvLVVEKn5VpGRNsmCwMDe3v1hZf9mGzg8J5N6BWiai7pD9Ebu5A179oKbcoCF6Lr3H1pYrUk5sLgMRuKb",
  "key23": "67KbCvZj2p7DE1r4RQNhUordJYimPM4NnfVvEMGCsqGauPJRv2tkAnLYySJdSe3pfbKxFytk3eVTBgc1sfN9ScWt",
  "key24": "52RuNehawN4yaZbkC1nsDcNykHBDuUVBjhTenWURgzQeGxz7AW7PtwssbHDcUy3ymbHrRcu3YF1rBEhCr7obgA9E",
  "key25": "44fDQaDgG4MNVFRRTEmHoqNd7UUe1TPUc5bU9NRaLePJz5ZFudXXWrgWaBMmUcGdN8T6t8cxNjfVmiTQ25tECoi5",
  "key26": "5wcto2PbmbFo2tqGSBwEcsh3YmrZh8mSkcCQCcQKtdgLE9hWfVPcgHtPkkMicWJYyLYVVtJDA6WVNB2wJL6D6f4W",
  "key27": "2onXa95PT4XkGBHbTnfobEs6SQuj5Wr3NFm9XbFJmyKQKEAfupXtjPUvKZAFogGrcJN7uabuW3r11svd9cM7dSPj",
  "key28": "3n6Vw5KxjWyug4FJGPuN1QjhaEqgu3HhP36FfoMzDXg6sjVwAjnC6WgMe6jFhRjJiBn1jfzFEwsaTunLKBby9f26",
  "key29": "4gDVnEKZbqoKYRgzci5y22pWskoHnkcFji8tY55m9876eKJEq6UjxPPhRkDF2ewEQ4umcFZEcYhS6zC6UWnF3AB8",
  "key30": "2spQds7LZY7EFqJjs79VXZRiPPAJ6Udvn82VRRaMN8UVfXjJz8JQmBn9fCFzyKwzGAK2eWci2c6rBtkkM1ix5J9u",
  "key31": "4oi8476bwBFKDeoQkhUb7NZGSCK6Y47vjiQChaCE49m9FRTDqdnv6F8fNMGBMfmWUGubAfeL9wUwCwsqs3yV4VQU",
  "key32": "hbDCrAWRfoMvreC6rXrEM17d4bbBMxrVSDF4FTDeng7PuVcxMaunVXbmxCDpba1pntMWPeEzeMRuvKzMXAcmroE",
  "key33": "NM5EZ13farN8HbSeatJb4VQt4TdZPCHaQaJRFB5i1FS3wdwZ1utk6N2A3oDZ7NVVv2hTXFcmKQmQbV964zPNsPd",
  "key34": "3pZd9A1tr5cRbTKNM8wc3jXrH46zk4Db8MoHqNvPNF6xUyyfE6AE97jYBQXWXscjBhjziiHssY7VqbZBiPBpW9YZ",
  "key35": "B3ZELvdWaVDUm647pk5bFsjCx9P9FhQ33AodudFEwgZtEF7yPg6aGYXx9dMUVrNaCrefR5fC8Qtjn3vJfFGB3FR",
  "key36": "4DjoRSvuL3RGnV5HEkdaVRve5LqMv8WGi82rm6p1p51TA7b8h4TqqY9HrR2Zz6K3b25ekumVjqa6R7wbKK5okaxF",
  "key37": "5LHnGsFs8BrPsFBAT6FKZuzwHmC9qsApNtGLCUa7RgA8Mow8FKzmhXgqwh8ZWgm2SdX3YAgfCXcgRxC1J1Rr33h3",
  "key38": "kQHu82BNJpUMiq9T8QdeqfbVYq4SRxiECKEYAiWFrVL4Tq7DuhpFdLnQkTyHZkMQeMUsRcVvCeV215sEXzvyVR8",
  "key39": "5JEx4gsphApbXBEodKdync9z76FFynRmr5gKXLpTnW1g9vw97DabF5BSVEPQaUKSWxTQ5pVygfH2hWBmZ1vwmkbM",
  "key40": "52qUM6yNvW7EeFz1ZHMA5YH1z4D9jn9h7ADeEL8CSzLBEJc6XAMxThT67s3MDxCAiGxV9WBMoWFaNm9A1kviMirK",
  "key41": "5hQ5R9rfHir1S7dEtRTjktBA9Yf4W6Vt7doCqGs9B8fVJf95nuatiyTeVNGUCUjxSvUY8SJ6rza97HfarFPdUiYj",
  "key42": "CVBeHtgwg3mxMer9FVghX7EMRQPEVK7Y8VZKWgNtWv4vMyhatD38GGhS4PFS3rhAd2EvDrdrnEJUGFNJnzSPK1V",
  "key43": "3WehNHJBK4qxbiHY6VMt7sBNLV1Kt8T6FRoirrFMkox9Htqgb57VZiAjTPkhUuhs2oNGjgGjC9BTLvJ8fkXCDLwy",
  "key44": "2kK2VdMAwGvoMSPKpU6UuEA2RmJHUHLMT3pTERb7pnj5eyHcN3qcgVhLXCuvHo6AUBNhRqQiak29KMLxDDV1zs3M",
  "key45": "4ezhRi2BzZsq9UqJe6vNs4X2DkcCcX6pnJWiDm2rgkb5tTEa8Q9j8diZdji3cm6xW55Wv3UJi6FTyGUCH6BATJvp",
  "key46": "5hguP1Uw1GTjtTzMkxh8noDFVQXKQdn6gm53WWkH5P8TkHLSZXdfcSW3iwxtaFigpfxPaDDxkNibuXodhVNabffz",
  "key47": "5XwFjkPEjrrjfRXDVWggT3JsRLuTaMF3KF7NBPt9DdAGNSQcJvXATGn7h7s2TYrzpMXwKR2zS9Xttnafi16jxsgx",
  "key48": "2F4BCr8BuLjsgvr31ecnA9eyVJaVf8CxxybZusUBfSbbXuETDDAPb72fsWDKrfFw5AJ3hRUPHhXhvDTnoadrnEms"
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
