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
    "3XXpXeHBEdbXDwyFGRdtXsnaYMC2ahFxR1gmTLtK5X3SH8tjN9qWyNhC5PWwsa9wxp67yuzgxuWJFLYidyRgWhaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vY9tx2XSEzRMWy4uBASAqanTKnxedKJNkgQWHQ9wwdQnaLa9bPR7UThe7aSY31NALBepw4SKkRpR7HswV82c4dL",
  "key1": "xM7aZPqaCMuGjV9syoy56iYEcqeGVuqxf6J85z2MoPB3YrWqfBsy21hygwkj1YvQqmW7JaeZLTuKzEpVAbbQJ1M",
  "key2": "2DNJDHXTmwv9VTvpYwFJphNzKBexuANQipPv6ZGJznjcjDxndeBMZUdHobvWsYWKjM6uF1wGQLEYNzHwsWwL9aeA",
  "key3": "2pXP96GJMwTa7Mz2aXn3SBkMmkbFKiGUPPfU2VpBK3TyTZoGqM6ajorueJ1XXSTfKGdLtB5AUtcKdbxHxjFkNuZX",
  "key4": "2HvqHdHwFWXLYYD5WcCBSvmQSW1dQrE9twsFBJzr7zxJjJEsEy2Jzj4qkmRguXqEwGSQDDYcDLpLvwEVuC2FBGn8",
  "key5": "9ib2QtcTLfWaXzZvsyGe4fJQnbYRy26BA5RGaJtgSpDYM3xRnUckRgTWRJ55kXvy2PUtrsULunxT2zodGRs3mCu",
  "key6": "4topa8dGdvsJZHci41pnVYZg2RYetJECdxkB61H2g8zgoqNqmLYyJaLQd4RVv8m6a6Z5NJszouvpVA84autzJ6h2",
  "key7": "3rjcfg2djeybDGcKNdbBfvY9Xy9HYHGojTMHZfxUPq2C55NqRbLnBkLoNVXEQTu9ZPhLuyo2aSjubhbxQdZgpiDY",
  "key8": "4fptasx5cdYnBcesgGVismyPnW5kGCw3TpwrFwoG5u5jB9NKM5Wb1GYvYXYsWMNVNAEquX3oGNZGRhoUeH2WftCm",
  "key9": "34puTh5yt23oiMNiVRAAvF9kubgzaNEvHXuEdxsNdLN1ueim8bBE5bzZ7KsACDNEsWVuRyR6y9pzvfPmtGRGM1mL",
  "key10": "2dEH2NCucjkmorTbGxoeughwUSyZBLtMTneAYFsVkpAVTBYXoWgxSUvrZ5hEpkncUCarkBNTXSV4jJNteYTR88a2",
  "key11": "3DqaF3DDX99bo3cZ3KaFGf68pavG1MQZRAmb9rUMK9UGWETpxhASWg9oAVEQkZsU7J7MuyAX3JmFfAnbkB96Xuq6",
  "key12": "2iNUxQugC9K1TMmV53hvr7bCpsqrZibqxAjieaMmNBVpMy1nzskje3fZYZyzkDHm49rzzmsTv7QcBKAvdRdcQU9L",
  "key13": "64mWGRsWZ6G3bS75NsEdeLoazjCHrWnPdRNNu5FrCQbvAKKbyF2QeQNYRGomsaaJU9MFagr65d8JK2M7Z5256WsC",
  "key14": "57f5ThseGgGS9ootmrx1ia9Qs4AwDJ2fXZEeVYEAapHKY4MMfuha1DNojEMG3fDJprZdJ9xEGcXVDsS85VACN2Sb",
  "key15": "33ZnSvWude1nYr3xk9UArmtr2drxCdN1GyFWZMu6NVyRBjqm7aTyKC2TJftnSf6538seYGA8cLPw2d3wyknETwj5",
  "key16": "3LWio9ZaWSH8VdbMpj1JDT4YLzMCrgtpPX5ffTvwMEBFA1pWA7kbJrFDChxitDmfWsVR1xC3nHrGhqrMa4YHFpdU",
  "key17": "5KyoDeZyzWMjYqs4ngesvRXNShWsxFeejJXVsiXXgG82UPBWSkxGAqro7y8pxbakmvX3ctExBrjcvWhsth98DMvF",
  "key18": "47K1XHKUn2rdZ3gnh8FCVahyZvQyEKxQmummg7VnMxfHZSU6rTedBqBQRUYDBsBuqQuq27WvTezT3qP9rBtqNMXN",
  "key19": "5HszsJuBPQNLvE37YaDkKYfFhz6Wd1muKo4fYHMdtKzkpsfu22iGCwBHZAwEPpZhtvcmPw31NCacc7rqeBn1mM8i",
  "key20": "2Csi4DNEhQCwu3qwuSyHkF9JYX4ArDTR9eVobXdTUY868aWRD5jjmLgoG6fn9csi6N7iP2Lf1EHBY5Edhqbh1CST",
  "key21": "3e8TfN5Z37K9SSrd2sfYNPDuJjjxkG69KMAnVvxizEctM4aPzFurjMj9EH9XCFjdW4Gbww9Lb49QSbWpMwqcYwpX",
  "key22": "4wA4itqddGj17UqK383Pd1UMYyUg21nWsMa8Rv9rU92qarqv42htnNRYsctC3bFnLHHAFYbkiDTM7YTLYt4y83i5",
  "key23": "3Xdjtv1rD5725oGEXHrPJpEr4C93dRzKGwL1gXJa66fVdrdsvaz7aXn4jTZ6K8F3tdRWo5NqAXbjRqSGLZPm3EtA",
  "key24": "5oQ8N7L7jos8Vmqpmkq3ivBAmPySMHWAwTxCvabLGdxkGFPoZSYKQq6TGxfupZ9DeLbB75FQCeCv9kZya33Dmtj",
  "key25": "35sUKpqRyVs1LXQXucQVaBLRp6xGpY8Wg47rFPh5ANboKGS7D4gJJLHGfV9mGrkH3EYypnQeRn5jE5hWTCVQDnBM",
  "key26": "4L2NNpHdY8Ex6qjHsP1hPxVrom2HvTijDrv1ZhY1qVrmvGeDWtMFgPh5sSUNkeoFBxDSpW1TVmUQwqPBNRFHKvut",
  "key27": "43BVA1GN6eWtS45DpeLQvG6qus5uTqM3ZeLEV8q3HQqxSVMRXYJS9GYGSNHhaDme45wUxGN62HZDpx9N3g2EuYkC"
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
