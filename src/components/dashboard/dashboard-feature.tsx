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
    "5kucuHMyQaSS67kYUSMyEzKnMk4YFPWCSgY7HQfssRVhhDNGrtCjUmygQn7AWCHXuG3WM5PV1knxmUQae6QXVExW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TiBwbYfhePtZLQDK3WbS4QgZbEueh1kYaYwqsu9FkHjXcKUZThSrLr18bKDy7nuY8nC48JSmFoHmWkvvMPoxWH4",
  "key1": "53zq5xnhuDEanqVFALnSsEu7D2dYK7wj2JLufmMwH6LiaU14ApRzup3qzmFx49f4GsbtcCxa6jTuXt8z3YAQJNv9",
  "key2": "3qRMjuRce7hfJMeyqU6k4vBNwe3655qRjGE49ksnBdiMVJVed6fayxQRYfciheCwmerRQ4RujrDorDLDGKuT8zei",
  "key3": "s1d12YoUmYrX2poh84hPn6bu1aHsrCBeVw9y1tRn5gLmNVyr7dk5Te7uSBhrzjuhop1d8GuvKSr9Joy1KHeU5Kp",
  "key4": "5kPyVv3qAV3ygFL5nmDKXhNHrAj9R9EKJ1HVvSTaNEsL8p3YCUo2o7hkeEQVbzvVGWuXeXnyoQkJ8uR9zbRa4xDb",
  "key5": "3X1d8LVGnWzdwstgdzrMeceqK5Fb16cZuGKXxGQoijkCVWHduV3dSXN8mW3QNthwm2WbxVLeWuo68NEzFnqQMZ2v",
  "key6": "5mzU1YPpMhaurgepQFeQzFZnhQ98Df9LoKNHeHVX68AFmY1AdT5nDVsTwX6AdqjSP7TNYzNmjai87pbQHKDZf3BU",
  "key7": "4EyyDpn4C4uSa2bDBw85JWJpM9bZzPogsUP2BdBYuWLd9yEaumcKvwcSypPy8megQRohekAXaNSU6yjDa8GmLEai",
  "key8": "3Z7Z3Js7BG89FXSt46tfzP8vStW8j9JhBspwzsFxUBwoUY2s5ZicJ974DdJXCcXGHaPSrcTX2x5bUDfHrR9TwjGe",
  "key9": "2BZoTqHREqiCTRNyNPXEHa6shFgsGizMWtZxgeCk7MZ7vWRcb85heoYyzcy4YNBtjQvPhRLS31cFKgdbLWFfXZpi",
  "key10": "54CpnLuvFZoE3eyg7myoey1q9cmZVUPiaLrpkXw4y8jDN2wioX2NckQhvw7tx8e3ssvw4M7RUgpSwEGVRNSydFWw",
  "key11": "5gEPzTkY2HXeGZLjnFH9UDtMD3cssTn984KjYxViNyoCguk2ceQMfVpaad38apkLi3C5eTVCamZERum24RMRAHed",
  "key12": "4cx4qYT5dSRgoMbsTwAnN9Ytcj9N746HHHmmBxw2VHqQoVMuwFXauZYNkaVSzykyUPhj4rDGLCNtmYNFz8qRxTfx",
  "key13": "ozgmbqS6deQExNKMGJa8rF7AkVGzXdKihr1AK1cNmLNs1F5hXFy7rYXrJHSJuiU1vBDJJAmQ2MSGcjgKye836mA",
  "key14": "5QFt24YUTsaYgDmVeDfBc97a8ZcdatQyb4CjkqQRXDxT2sFji6tLAHqmpbEeRSpD7Ku3s7GqMWRs22UNKh9YXg1J",
  "key15": "TsMpZAHTvEdV7RfaTLKj1N5nfx8gZWrv3cfGCptJpSnf5kWjQKB1se2ckSfx2fzWcuQZZvvdWUPxf3Nz7q2ospr",
  "key16": "5gtG1wFoWp8Ur3ys6xcrs64v8mN5VN6Us5AnSM1FUjBa2MbrsxwetLrQNrQzYU4FNM39STKpQfupz8XMoCQdLZQj",
  "key17": "5ChEorBZbaS8F4vnMNjJ6yxJjNwNmcwN18ZJxjQ319NvAjNfQFQad1dXhWTDYEgAoeFRcN1oUyAEf5j9ve6BQwi",
  "key18": "2TgXcrMAQxuVWxnTPyGdz5W7GzZjC4VHEoMDFv9TFjCS2xaE1Cvc3jVVPxwWf2dbugCAx3FDbQSQDbAk3tjhgoQi",
  "key19": "5mMSADf9Thue9ZYV2NkcunBGedPhsMEC9MxZ6FSfeHUS9ew8nUdo2wG1MLWn9U4snPEBxxSYf9Mph5EGVrpUUiPr",
  "key20": "5qdW3VzuV2wcefMRQ8hFkndKGvA9yaUwy3jhbvYWkrJFnyFn9dXmcm4ZRMsGiPQQYLKcG3ZTk41yeapzwG5wdBEP",
  "key21": "2fKPX4fuNYixqzD7nTU71JLT1DUR2ow8B2DfvPTKyaxL1gKd8fEheHZW4kRtCqHBHTEZweJh1C341ZX45XfpbX2r",
  "key22": "4EunRjgRe3rudCx529wtC9JCuKxjrwFxDzQ8x7jMsPpUkrXqRB2CR6oW8Z9QBoWC1dgcyvJZZqPtCLmy6QvHHW6J",
  "key23": "3jwuHfdmVtQRZE89Q88hufm27gt9fPMw588vDAHPRPwvL8H3N6w2DBtSV8gnzJesqaw2d4HVzBiSABGWsu4wFpub",
  "key24": "5QEDqd5FDLtjb9MfmJzMvqQdUJMBTt1oTtFPCQ1z6GRQs3EResCd2bHNBaVQF9H6NMfuaY7MusPCzx5urjPLPPvj",
  "key25": "3vtkA2pfGummQnLBNxa3WBSJ9E2bDh1XhGsrVUTRRwJ2T5jrSZ6qRrQAWDDesFgcLwx55iDPrBSTs3ihKNpjWxyv",
  "key26": "2dhioEpFoW1gjQ4isoqUDNip5PZJBr6CWJVe9SYfXxp8xcPButSC8Q4MbwjmRJQXhunvok7TtWmUPVbRYVgWDsmc",
  "key27": "1bk6jgzU4ePzH2ne7JQzKJQzysWRm9X6nf3DPsay5wKjCnmG7QQ8Pj9CEmvBHUy5J6CECiXDUxaC1nVU9hA6yzu",
  "key28": "2z5LGgGUN2b12RT3DSgcRiTJWWRHmLH2ggmch7DoKiTqhMHenWDKjbm1b3ZmFMJL3yxkQHJawZc9zy5mpaUrHKVT",
  "key29": "2BtEcmw5Nq1gWg6a43bRXjEnHUhF1MD5kdtf4HMbbDN4Zbr4fQw6RQrmrjAiViYrAuejX47ofEmatsTRqeRx7rpw",
  "key30": "VqJWo2rzTJb5cuDDsjcdUy64GMELauPBYuqcYUH9CYm9wzipkZUCBqMThLcacRhAsEAC7bmsqNWebmjvUA26woZ",
  "key31": "3KaJEAhGBp331QoyXgNjTVD9sFcux3VkuZEGN4mfdVNJefgP2bNU564Ts8e7kjZud5a2RWLJ1EwMSwkysGcWgpGe",
  "key32": "FFNwj1fUvtiZn68FBkYZzn2oEZNLfUieahCae3km6sE1efdjTtnSTGU4MQAGr4zfDKznYVDvKZmHvpoDUWJyzCb",
  "key33": "2Y6z18rr4bJ61FsV6L7U5EtVZhgavxmYaM6YHsaa2KR6ymQ9iMqUhkmneP9HHiN8ENEDUBi34adv6q8Z1jqeYpLn",
  "key34": "29BXKquLjMVsB3BWERmhJuALD5WVrS92LHVpTemGURbRf9VYbvNc6psFqA85a6HTaZeRhGSx7bi8hhDfi5M8RZ58",
  "key35": "36tcui1iDCjNPnEHWtutV6rDhDYjMMxVjXqbQU9QTBcKCfw1FuAryVgi1mDTiECTeXz6he6tK96SscGhSPeZKbsy",
  "key36": "3voWTrVDZjW6wZxXp4neb56yekZcbpznrZ4yAxpTWL88Kps8wwiSS9iJPpCLntUKAoGCxtbTG9vcCp1ZjpRJ2Yo4",
  "key37": "2TRKn9a31R92rnAfyWeni1KhoA6ECBFAzVzRe2dkxT1NK36DTR7Cp9juUG97PoXXH5rBfX6BujLiVNhPgY4PKsGf"
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
