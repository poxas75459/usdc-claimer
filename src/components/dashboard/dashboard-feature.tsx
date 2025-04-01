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
    "3VE3jfbApZdWLZW21SgECvKb8pzJuTRRyFauQZFqV4SW6HLX2JbZTR4MwCrXre5oWvaCSMPgxZ5w5UGDTrRvvimo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLdt3yTBC8oaWUQeEBsMWiEi9JFVV6PmpDM2QBRZM9bYB1x5JyhdyZ9Em75PMBgPQqCND5YqzQNhEjNWPRHHTfN",
  "key1": "3A1Bk1DpsjyxrwBX8WZ5NJ9umXFctBRCjBj5uosjmgTduR8SnG7cLPeqZLwoPW6eqA6p5SCEwLWSHicWSePpPgNL",
  "key2": "4TMGMkPCkKnPg7iULbgeqCHB9qQr83yaPk9DKKbRgKtEvXGRZbGL6nh53Y25D5ncUr5irwJrwdRvnTR2RrwuRwaN",
  "key3": "423YT98rtP6AL6aTb1uYP7fyCmsUi7QyKQufjA9k14pjVFCuiqTDgMAbeMEw62MQggHwuFUs9HnqKm2P3bBWNaDW",
  "key4": "2Suhi7Lpuuhx2dkkGFvNnt78mruF2CVsD4fv62ryqbMBJUCDvzH3FjNqHpQghuyWwyXNqeDy7B5HYdaAcbhL25BA",
  "key5": "4DCQ2rjkEg4sjFZ9Kxji6phPW17rSycPUgPhtCcFDVS6Mpx7cUqdAwMiQqtN4fuwvEoN5jXrjv6dnCQxrzXuqsDs",
  "key6": "5anZRgjFfRgTr5CGAbs1b5mCkMdhm7iUmgQ3yibzyujMg5ynQZK5vQxBFVSuuSHH5MvDW1iqsGiGSVGDshiwDFZo",
  "key7": "23Evm8zpiqL7iqr9EN8DhLePeZRDboy55QoNg2iDLGYR5qLZhJ73Q83NYxuq1v7zbcVn2mQZnigEmWGUp26rzT85",
  "key8": "9WgRCKYPjkwr4Z5avgKxQsp5P1Db3tkSZSQ5We71vqKG1EfzSVZWgYA78qZPKKH36A2jryUyLDavSsh8QCG3B97",
  "key9": "m1PnEsyWUNdBZQjYjVv2Fc45c1ftXCYdb2VT8RqdKpru2bLCiH6B8R6CcMRYKCwmWtN37tgvg9DnHMhXcUaQjXQ",
  "key10": "28ZNrY7hAzgNVCBZnE3ZvsuzjCE9S864LCsAbW1jH9w9v9QXcfxZcqCNy6LDRDHF9TZvbNbb8v3hejpy64Ek8A2C",
  "key11": "ThU31R5Qx3ZszWckNCUoTBKMPum3iLj6xSvociiJv8LhrpcgLwJF4yXzrFrxL2nu2oo4kveuFLggQ2ezwnbdqac",
  "key12": "2cgjLHsfhqsJ6omazmHwMHM8c6cPxbMzgi6m842LHwepG6T8YJj8cv2K92vxFUSPbRD2Mu3mvQmSx1KVQ6sPSUnw",
  "key13": "5fsAXiSpZNZSfmbreGAfUzk1zQRaZ4tofVGFKFnG4DYoCMarusAz1Udkb6Du7EVpnkSyA7SjNqLerwacKaoEhzzK",
  "key14": "4cDPqDuxbx9sosUkL8Mn5we5XzXT7gruS35mFjDJTe6e9cH4C13C8ex7VfRNS37oh4H8tnovRgFT7RKGGVPJa3Sb",
  "key15": "zWEYmmobyKj5CSEvxY7bn3wXApPe5kogd7iEdeGDzP5J7Wckxfz7PMaFQX44HroCjZwEsUVWkyU76C54yGJryVb",
  "key16": "k3azB3Ei4i9uEdLicog6sGyc5jXAtwfRHpy3dnuv1u8vg6bnfj1PZxWTMtEcq31dNTMJqcPF3SAYSB6KyNah9WK",
  "key17": "4NqZDiDttb9GjTsJgTHy8bqbkrVwczuDW9GJNmERcv8tyuqcQ5T8xUK8CXvM8KTLnz6Xzj3rQU68c1CXH8JDND51",
  "key18": "3KP7JifU6SurdSR16T4w5dwRU5MiGyq4nxMRJa8vJMpXQgrXhVpYScpZpqfNCuF1ezKUcXvGaz4FSzuDcVy2Zey1",
  "key19": "2yBoffjeE5x5545NRoxBExmehh5QryU7zcgXovYdW6XrxL7mM6HsDctuekY5ZX3UdZQvhF6gX6r4xVMkKZ9FEHJ2",
  "key20": "38hrKjUNfaxqrf7BwsESrL9fgGi8h3eQ72dcQ7SeVwupqb7rjKrwPtFUDyNmtjaq5dNPm15zCBGqvUUhPxeFnj2V",
  "key21": "3JpEdcCtNwES5sUsRDPmf7Vy2PSUY3gYzACQaNvCA71rCW3KSqMtTkLmWBc53n8LPTmbd8eo1SjSCTG5QDn3XTNC",
  "key22": "TSPwNM9AdcntHdgfvpsBaTTvBmoiodLBmZBjQNDZH4KUnYAoYmoLNuV9EqN5Ktj6jTn5ktzBmk7gXKG9kRzqs57",
  "key23": "4fGRiKvRweyuS7sRA7BkHeXpNqbCwXbw6xDhByr6d78GTsD1SeKiqfh8qcYhB6u1xr3ezcNKEBpJqXQnck1pcUWy",
  "key24": "3PPUfV8UURczvJEGBbmaKF3h8Zy55HeitvFLf5iUwjPsNxZuhwYCNKgUAFgDPj1yjbB9K5bMDnhdQw2CPNKWk5qa",
  "key25": "3hnZk3mhium8wcG6dBLgQTeTtsUsbDRHcKhiLSHNxRJ9t5kf2bmoH9mNjxZqoEn9FB6hxpAFwi1yS7SRkqpZVmRE",
  "key26": "3eZewBWyGvRjZ9knoLBejv8NEke7iT1fbwZM4HiSdZCVQTsqPCz2jZXLnPy5A2PcD82u4dZyw3CwpxK3ZM8Et5aR",
  "key27": "3BstF6NzWo92zMGp1WRaLVPFbXELJJJxnpRA1kMAwpVFWmRUxPWEpYusUgr21315kBVvgu5usu3xVCeE63URV7dt",
  "key28": "XRbiRVPLs2zBUYPUKbiLybeyJXTQvcXxp6k3wUMKAuVH9hihAA74NESxNGC4nvgszjU7YjAKgeU372kjr37RAb1",
  "key29": "57Jhwhqd6hnD4gBfewmaubUVo41pobG5ip1aY89iNUjto7bJXH9mjzbWvS6HFmmjbHeNUoBj9C7dqVYwTDRM38z3",
  "key30": "3x66MoVgkqdxPyrpXLchcgw1G9haVACEJCKUdM4CaHEr8HwU3Qqf45vYEap6qVVTLZWMuXZc6qzg64dUCaVoVue1",
  "key31": "3UBV6HLVRuWY9sVXYpeqwFJAos5ehYvGsBusE4WjkwxZ1hnYZtGTy2mYs7HLzQiKnUqs2GfbGaPQGBxa77vNpCGy",
  "key32": "4hDE9YG2G2W1DJXbd6ADkNtmEA9pSoSdcUZCEX1FHicqpqmD8Mrj4LY8bnXHaJpQSL39PzzRVgo6b8xVdqinX4W2",
  "key33": "2W9uRc7QufgezVNzqrEsCFk1ah2Za1RxNJ2NGBw4zVov7WtJQHXZCgUsHQjYxYVPyBTqwh9iKZfdgMSUuTeTqs2f",
  "key34": "QS8nm2xmfpTUxg1VioVQ83VXxuGCeRD9WgN5TRbpXS4o5ZzvFB4YpesRyYcATBknQScuwEHJm53eDB2JLM6eouD",
  "key35": "Lv4jBjci5TrSvnLfyw17qx1JUsEdSuiN5ZwUG2zE2jCdSLUKj11LVXd9dGSVfaZxeZgEDyWkb89oi27qXsp9Dgw",
  "key36": "4Mi86fs9VpAhXuquQAQfVott5ctLh1W8p8hWLFuVywjpzM4EJR4wTwMu9eXDPd3CFpBFECc5JaLdiJVRFn7XHuoE",
  "key37": "5FMUZrco4FCoN3gV9k6VZUuaYskwR4eDMuc4tT5XWc5qJyMvcBSk8gZ8H4vGjbR5rtWi8GvDd7S3yYmpHQFa1tpV",
  "key38": "4W9H3qtuRm6heX41xE4DziVKbbtBfbPQCYe8Rfaqwr1WiHSgxTuLEHsYxpYKca6t6iLQhCkNaDH5TExjbXPYZk3o",
  "key39": "4k1T4TbtCavyYUZwma1Gtg6FY7ZPw9SdDjh71yCngD6q1D4jDdGBt4ZbtJqLMT9zBszcuw673kdZ8p9AqU7fJ69n",
  "key40": "RnhfUBmXh7CFwXAan8PxKQME7NKj6UbZFxEnRrrjxhYwcRSPkYfimh2VJpcyGpfT5mExJVyPGe7kQeYuRQqhX3g",
  "key41": "5X7XYKaSzJYWErLLnt3Yto33kEZjvRdC8LmANUk2hpWtabq51YVKf7i244Swm5g5Etpo4Ltu4Xcp8pywqfXwTeQ7",
  "key42": "2GnRGazW7f5Hmhp1UuoLmgntdqZUTJBNBZockSZKPUgNqNbnAmWz53irbipT8KXfDrhB9nq5ofTx9hu1J3dZdNpq",
  "key43": "58jwuNgtsGdaxLjMzri88emYWb48UmgsXAaj9SDtZcTpehP2ucUpTy6BqC2Sb3wMywUAdR2Sfz6i2z4y8LZ5y3sy",
  "key44": "2wBe1hFq1XfQLEk7QzYGL5MpgrGybCVMytfNgFUSBDjwKtbRy5Mw7juJEg42wVi5kptTyEnhqXxGNa4ufy6BNKjF",
  "key45": "3qVXFZrWeWtD5ApEAHKF4NLZbLwBhuW41dz3qifW8V8uEyBBn7cFF9ZbbNRivEwb6XDBoG4k7XG5oyRx9CWzksko",
  "key46": "65ob5T4cYRrnQN9cRuKxHeoBD9vtYuEYz3nJQcQKYY81eJuDzovr3e9FPbVTxKMuNgQmrbvZBchdj47VUCk9YM8E",
  "key47": "3tck49XcVv8yr3Q5nzxNJKfcGokMk6PpTaQQ1F81zzwFM7dJ92BNAKRdhgSB6F8CjfRiskVxX6Ruggrsdpw12RzJ",
  "key48": "4hfqzn46NeDddH6oCL9QhHr27MyecSY2sS7Jc4jANvdyqruq4rqU3Usz3h7HWitgaPU5eAZRGKkUvSgPwAeWkHjX"
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
