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
    "5uWYnQp43CHqxyNDZi2R61Dnxb1Q8AcfnGHaase73HJi2eVVJ9RPruEm5Qa8xRRBekQqKAE1oHoS8F8GgYj7RxZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tz1suTW92JUt9Gb2Tafb7Mdiv2aLxmeksaznmij8zhRjcyvFAbBZGshBg76MNwJJPDvuVi2EVmCcNqfoKSCXAEW",
  "key1": "5jQUG4QyGe7N8mB8Ugh1gmWbJKtLeEp9B9qCPCW6gkzQqFnUu4a9ALYS9Xn7GGso2ZbyEYeJogxp2a3Mck7WD2FV",
  "key2": "2o4KHP3Xb2DJxsx2YCFWcCXfbCwqRHkJdmJ6U6cxoyEsTuFVsjgFoe7Y1UQ1kq4CzNVecjztjzeQnCULit4Gbgyn",
  "key3": "5S4UJb3apbGnMUTnyQfe52cZbeKVJ1e2HYL8jgGU166GcWQhbBoEP3gUhJTbLsDbbdkQALUp6X2g5LZUt5XVvxxS",
  "key4": "2qzDdSAAPBL2EWhrd1TwBQznvn85V4HCwSJU5s3oT1EaHE4ZVKBfWToKXASJdiMqDqzaNjKociuHCrwT4M9yDnzb",
  "key5": "5PGzuduseyEyPkiwuKQyNHD93oojGALCfUoPiQw3sZBzZ1gt4oAPRTLFTewo4NsdQw53CWcwBRGFuimdo3z7FQrg",
  "key6": "32eapveJhYCWZyGa6RieE1rBTxSbUzww7i9SsBgc5b1coihYzytXvArrGtvRNa2nvczL5g99Ui6yPSeR1DR9u8dk",
  "key7": "245qDa3E8epsNRw4R3RLziMaevCLB8LrSjLGWxXSsAL4Xuo44mFef2X6cCC6ffFQZ7p57FjFMx8bkePytYJfzJpk",
  "key8": "25hPADu32q5Ug4WKGNJMEZks2DWPkyq1n3Z4K8Zn2MgSVxM1qYJX3YqLdNVz2zCqSVtUpmeUWXjBehixJkXcwE5T",
  "key9": "3E3e7cWyTF9TEKC7QzY8R8odHvFUjvow1mS89912nHnnVZ4ibmJesRVrfYupdV46HjmNre9CVQztpsT66vjFrstL",
  "key10": "4dDLyagDrYqpReTCDjCu1qPjmDEv5zSKy8CfjjyTvRf1UYBWoeKRpfFFfC51q5pt4KnWRKSdXZP1dsNFdYKPGtMn",
  "key11": "3DMUUgr2AoDt9yKVgXPsz6cinLcGa98zXpssdLBgFLE85KMTDmpj6VAUw82H9AJrZyY4o9YMMTJm3gSaeW4P8p2o",
  "key12": "3H9QTKoAr6PFgQ33M97yTZVpguSrGZAZc8HL8QP9eMgZaHMyYV5fXSZpHJbLpv3jWTwL5H6cNKW6eXocKHxkB8JZ",
  "key13": "5tiZ5q42aZ79mjbhYCydZFmBrSaKqU5Zrj6bsBevcyzcguD64PPwEhuGe9g2RBxnFpYSHiG1VdFMipERbTVtuyEH",
  "key14": "4rMWRQYzjpwqYV9XS7N6nyNCFhV7cnh9LYJe9MiSsW3gyEzF1DUivrVu636Zioy8iBVZzouheGbcPxtvjaAxvnhq",
  "key15": "47xFXYLjLJB9iuCfEeZ3BRwBNT5xFcWN8WGY3exNnhg8V6jcJ7zqGWCZgJGyoKsEDGa59dcMTp8LCL8BghhQBigg",
  "key16": "5AuTyU9LC7Q4TnJSfXyfu1AjinZhUBjCHDQ5JeZQ5Z6jACx3DXqTzCn2JXJsqV8QVkUCMgCALptJBSNcekMqjR8D",
  "key17": "5zay55HNKqvr7X14FmVVgDD6kyXY1oDrSnzaKRmSSxD783Rk4mhyby7MD3hhzZkhrMFWkjJYfDu3VvrP64xo69QZ",
  "key18": "5h3Dc1E8uSwv7ze8y6U2YhMDdiStER5ogFkDC7mR4qTDFaFXXNnonFezNKAdvEcerRHbW1WDxYu2vyGEBqSwhVFU",
  "key19": "2qMfzpWrs6cCoSTRfhGv1Gi99eSz4BD9Ys2gfpPcoKqxkPNcuiFg4GSmd5EPpRY4EGYw5wKsGnB3b64xMaTqLF6",
  "key20": "JVxcMpWm4DteDtvP9yvedTegYCE4U6NjezBgpLkGNWQzms3ds391x19YYgjq9YgFb7HPKNH89H5sqkZb2JrfNnt",
  "key21": "2uLJBYfZSxTfDvJn3BHDSCfMgySZfYD8qGACt7KCNFaHPtZ9yKT6cAPKcwFCXAL4BgFDL84Yvh2pZ1YYie7bEUxf",
  "key22": "63C1vkoC7Qkjv4SmLkcGGkypV1WrxumEGeXodHsuXos6gn4b9ywwwujvHaRkkgHwXM6JQdKYoNG3aekTzgi7ix9F",
  "key23": "4QAUyxLwe89wM165aiWt8KuR4JWxSeZBQ5i6Q38KW5LiyfpDSzRWpLesXiqrj4ZJNZ3AofJafxeWtCqWwqRuNSd5",
  "key24": "5Hr3b1b6MGFZLsRMH4WjKGdvHydyCiRgRVH8wenAFDcerwf1xMQgmaRw6cssUxdH3S17BQMg1zEFWghM1Po1fdSM",
  "key25": "3Gy4EwWcNiraCuHtjmRaT7QPAFscKeu7WXqaxPCCgVcGdziYThJ7Z9PAtQzk9b8QwgxDHm1wWxbxZxBT176bju5d",
  "key26": "3AF16kBr5cw8YwE7cWYerAgfn9PtimJ2LejpghEsTnVPaMRmtPzCjXjcU6UQk6W8eviSxTaCT1wYPJG4VdrH9ZPs",
  "key27": "5xrnYivqBd6HYvJwdUsNppxeLaNzX5ZvPT4d16NJ2ix78e16e4PMgS63g4BKGC3n5ZLv2f2K2cD8Zjh3Sz7EVA4"
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
