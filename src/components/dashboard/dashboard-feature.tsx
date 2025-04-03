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
    "4AbApnNrLyFLVVbdR7pfZrME2Tu6mwX4ix6fafkC8K2AJ6yCnUirJ6qFVMirHjZLRN4zg1Ubje3Tb9yiKexWGiyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2uVzuXetCBhErTdc4DyLFtkRNb38hG5YkfBv6VuoLGTcFmgBC8QkAsq36LC84EWgcCq83v8p8XFFELmMsCG6NZ",
  "key1": "fABanMz3daG5ebzpbRJ26qbPcP3u5CNXaubsCXe8r7qiwxpxp9VjEcSFwLbnvfT8kT2cwByVqcrsJshfgh4npsN",
  "key2": "29mXwPG1jPHgE5ChPQinRaL3tH86MmoDh4rkhB2g5ci3LmrjuWb9S6rBBCpNkaX8B7hENfQ8JZ34vAxSf2icgQHG",
  "key3": "2binoVvGYA6hwV5aPCNKKhYnhPpc27rYarybgLM1X1KZXYYRDrxuHEGsn5kVAwg5DF5QvJ45AfWrE5vQ67yr7cUf",
  "key4": "2HYxVq5eW1qdTTSEWvuq3vM7nheqGyJgihandARMkjVWpbnqLgrAsipKs5a7ifLKNUoKbHdRY26KE4BqTrE5LUMd",
  "key5": "2T1tsHX5STqHy7jZk423Jq62TqmtyRLCn46ggYFMHpYMH5i2CeJiZ7rcVA9cnMvSP9A1VzsvnwiwmSt2zpjjE87R",
  "key6": "66zZqrT5eSmFdpfaAK59xPjdACZDFwKHPQCUV7o9JhPTZUcLxTZuwY91LbA8jh3y3dQu4UqMHywTnf1HH5HkQxBQ",
  "key7": "64exiE8PdjRmE5PLsY9cZeKhL8QPYE3vModUu851TB21xg67HrEi8z8ddiRLLKToHt2uPDQKjQnLC5nvMTAAoc2a",
  "key8": "2L9dHEwBkgnoEgrR7qpESaozidF3tX2PzXynaFMfXKXsSL5bJXLn681UPrLrw4Piw6myFGBRNyc385n9LM69geai",
  "key9": "5YJrXvnREk978fErESnxsr75DrmgDTEYAW7bRoAa4jXPv1JmvtwLtXcve1mRLwf4hRpkiQoxKDqP7AL53y5mywz8",
  "key10": "3B4TF7EQjX6sVJftdEfMfHAkpmf82fVc5Uh8pxGwYrbzYfo6R6C6zkKzE6cSFCddp8CDy9ymyJbiH51WmRcdV34i",
  "key11": "3kcwGFeZikWuMCyZZJk96vaNgqd1X3P7AAJzzSv1GyCFfUNBYqtKg5sWACvxFksa5ftZw4tmPm2hKwetmG2zhpBw",
  "key12": "dySEPZMhu1oBUDRJfkAZw6bmXtxskCp9pmSUspcrPRRKk2vWAe9TdgJJG1YkMRJeA4Pp79qGvMMKm6TCMq6MaT9",
  "key13": "2NW83fVdJYAgxb1pJrDM8dbRhHB7ta7mo5yAhjQMytYBZZNAHQGNBt63g9TzwersPyF1TFDcsuX5TV4WZuva86Jp",
  "key14": "2i1R7HcvTcAhbaE7X56xG6cGnDRRQLM4FXSstH8bXxuqCvTmkpSMBRJ4fDPWdd3BQ2zMW9Hix1VADQC8b1kz1KxQ",
  "key15": "VUm9mhDTXwB7ASgG5urmuJmuXgjmtSDESdReoPvTnuzWDGxoVTiksuZjaWe4vEmDCfHrokZSGCUpgNXFZhKttDr",
  "key16": "3bnyRUmbR8LF4Lb7QMxbN6xu7GcuKN1bsWz2R1KSSEUruasHU6SMNfFmaWY7RqrP31khq744vx4kvWLqmwt3cPPn",
  "key17": "c1ifGocKWE3MBJ8KyLbgVdZCkpWLG9eNRB636WnbKNB2cEcphX9p7ymDYQQ8LzRwWknbF24APokWnNq5XmshB9t",
  "key18": "4dzn5rJHyUKkoHnvTsXaZypLB1Txkdj1zk6t6fyx6SgA34xe9EGTgGG8YD96yNsirtBwrtNi7txmaZ9LBTvMiMqh",
  "key19": "5NTF2Q8aw6hemF7Upuubkh3adFZszVtFVPAEkkNjci1JvshD39cuA5Pw5WkHgLBp5eKgrDLPftpPXUdVKeEA3v6u",
  "key20": "2teNtFHfsTnunyFjx8aESG1amJeYnKDWVdC2DqEjVVE7qfoMoaRWT5xravEYAVt9k955Tabb7HBW47aPXtVLdWyQ",
  "key21": "4m9S1a5rrBZuCMwGmBcLdYVdTeie3FwSeeH8kLfs6u4mMC3bjUw2cHtjjoHJqQ5w9xTvNLb6ETPrZJfedHFSqV6k",
  "key22": "4jM5qbZZjH4utAUpviEtBzGYJ9tTqdVa1pnxofF6Sr5UTuZpQGTcfSr2JqxEe77vqqiFW8WAF79VWddWap3cmi9j",
  "key23": "41b8Sosg2LWtmhCfYDTEn1mBVZg5yX8EQGpifZQRrDcq2HAvUsN66gzz4cV22Jex2jW3yY7PXuUr6VZrsbmKGBZE",
  "key24": "59BMqm2HJ5WQD9WbyskCW3yJenrb7F1r47KCB5stLAtiuuqkRgT1oYBQvc6Xw7HZtR9KfK284bj3ciAx66pckBMg",
  "key25": "59db1UeVqNWPb4pSkgsxwHCDhnuxoTNeGfomSd5MAMoVZ8CkJSUejSHZQGSoq2zhR96BNod5CT64ZiqWyanrEU1s",
  "key26": "34NRf1Vi7xPN6oX8JEjrgKkcjN4NkAK6c5VyBr3EqKLZHRg9fwhhd7apbFAzGGvh68YMtMn4by4HEtdyB7jAyCZB",
  "key27": "3a1oQWmigoLtH99HeSyAxSeqx1b4uNDaiqLnj2iTzmg1e2gPEz28qrMeJkjBCw9izdUxirRyqqxJQsqDxBcb9PRZ",
  "key28": "5BQdSepjKVHhA4meFceioPhBdEg4rNE2X1PJpbQ9ACazxWbZgbw3g1HgurVLLumSx7sqh8T8tZBRzgMPyfvQwgrS",
  "key29": "4Uaa2Ci89m3yc2hfgVRExiFco5SA1QJx196Aykzg4HAAL5MCmPnDgM3zWdEKizfGazXuLyVXaV8SiYLWsBXj73zz",
  "key30": "4hu9daWdk2ocRG3M6hv6SMXDUJC2jdnvwxtMkxUfj54UaSMyhn6FzpEToYHK2EixsgfyMmKkxC9gCtFF5SBCNNuj",
  "key31": "3y4qL84K7zZhHYbUenPJ4npsfZpoH8Y126c6DgsGgkYcpseWToyLEkjxEWHQoo7i83ugKRaapHphDWQ2RFn1ef4M",
  "key32": "2aYU4q6wm3hH4iGYZEbhxMzdLESNXWtiTaK8nx13ZuEzW5fHKC5yiv41FRJDG2QBsjAEktoTDkeFsBeHwuvYEp5h",
  "key33": "5ECaq2wWAWjtPFfwbthzxsLx8T369LriSB9hs2nETFXnxY843eDFGqreiSAuSH5K1vMngUhfuyfRLskEfhHPmccE",
  "key34": "3AGuaJLwjWLDmVVrotv7X8ZeCCoUW4wXsiumdKV7EY2XVjo6C94ZR1tezHJJMBKAcZs4M6rLhtkgWq6V2mrXjjYT",
  "key35": "4WxFjdanPam2qZNFEuuLxGXXpaVWYgtMpfJMmJfkD1Abjy2miqzn3mXjYL3dD9EciFtZxqgWn8fjbPGLhQyyyPtK",
  "key36": "f8D398hDpFVpBpVdeBTzokxk83eA5319aRfqCx2HZcEh4wkAtcUEJoM19dsbNEgTpoPauniC2Jvgva3aedKzk1R",
  "key37": "49evbPHqeSe2Up5aqQEJ4HkjiMbk2eEzu6woju3F5qMNZzLTBVCcaQ8zukqXSg9i2DFjQv6BLctQmKV4AhR2eUbS",
  "key38": "5tzjCQKHEYMktVXU97WjCAQXTHqk4fp6VJe3V8FQp6zTz6DrHSHaya2AgCBeCnZyP1aG6dvpGV7B8KLxyYBKm2iq",
  "key39": "Xpde6sWJeHQrcBmPTA227qwtoQhZsd3t1DYsTjrpD8YtSToHCxGAarFfcqinC86iZEhFytXwK5roFQcC9FbwB3A"
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
