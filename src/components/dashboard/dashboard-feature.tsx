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
    "4YCJGnn8Y256yv2creBVFDBcZYLZuA3uNKvwtmYbkmCg1Ed4fyvn8BDkaFAgq4fcCLhAByPSs4Hjwrn3nEADneSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VrG2BHoSBTDwsNugQrwvkj3A3i2CDzqWax8bqx4oiB29A7aYtZypizSZupzv1rp5J2FzWkfCq8jGADqeu7kkrZk",
  "key1": "4G6EytUgs35hFrpv2fhnV3VbPdyeJJ5T3RUk7fasvW1V8pJ25SnJufS6DgzqYS65BK4KvtTdnm8zUcuEAayfax93",
  "key2": "4zAnSC6q2diVk2ovnsknqn8ytHGtdxC6giSvWtVQeS5S4wwoodcrCcDcL8WwHs72MveiWQhyZZSsYhV9BhtakHPz",
  "key3": "3SnPgkeNuF2FrgkBKpLR7qnU4nurYqkLPVg7B5QvGhMY9mxZ9FJTLwUoWdbfZqStqm2ej5myp8ha46n4HkEpWiiA",
  "key4": "2RcjjAnYbcwXbvnmcZ1snW6k9jaPwuuFSRbWwHoSPJf4hEfZeS53t29d6W1HKcpFyDacPQrPwSoxt5EfDT1XVpdU",
  "key5": "4t5cPL8MV1G2BJovGAq7NqQx9ZcDFGZk223g8feLvWzh4qV6mQzHu4x1b24zJYj9jKhXHa9WXRi6PsYFty2nEAbd",
  "key6": "ur9pJMunJDVkGdUPHW6EYGoUXBMmfDeArVivztzY5K3fxxQKvTJWmcp7JZzh2w5bikp3xSvNTQ1dY3gkKaS8N7v",
  "key7": "5rhYXQqp4r2AW1wehA4Pi8kQjhm8bUwuty6CvDsXpA7G2Rn8ibfBqV9XoQm7qisGhgtMEL4jvySua4xRCpEcE8T1",
  "key8": "5MEMVRshFxm7YtWjE2jutLr9B2166w34z1nAcCyvyB2mZiNqRJds6258GBHkTiHoiRaJCiaX15qQSq12P4t53f3Y",
  "key9": "5WQbaGynUGW5F5Bzhjb9wTcMeqM1VwSDrfi24YfP5xuuu7PEnb7ieYXSN9JNZb8LbytVpjNz5XJEHRxCiLAF7yP9",
  "key10": "3U9uQBFaJ2VqENwMuyYfDmfnzovWevLpKjkDTZLgurrRtHAmK2xedTPZmvM5gFSLL5yntBPSyvcTJZeSv8Ha4DXq",
  "key11": "2gBe5BjtAShjkpLHe5RMiWySuFdZ2K1vZw3nNZfTL8FQRikNgwi7thpkFPhZEZostiTtnKX6nbBB8totVuaM3PGV",
  "key12": "2G4QmPGy4A5VgBx9jg475qqdNKHatTEgh6qXccPQoUkMMcTmT1NyRqiCD6qPHbSkorZDb62LSWHSq152r93Q94oF",
  "key13": "2t7e3xrU26ct1KZSAeRsaqbVyXzTY6J2a4y7of9hU1T4iGpPh2naS51dKXbV5mw93RtqVHDqPUA85yPUetykMiiB",
  "key14": "5ziLTiD5mQk5XkftiWHjKkxiiG1Sfj8ksd8SwXFCfdSvdp3TTmY4tgWQoStWtNdPAe5xMxsxpHpGA7FwQnNyMvVv",
  "key15": "63ChSo2MSkGFMED94o9SbonmXYGCQdjnzbJTLsL1WMx6fprXFETFTYqezMNkQgsz43oQV1sWKSsYJV4G2VTe5cuN",
  "key16": "5uEwRM9QkVc2v8WNAzttzXpC8s7jJcSUSfuNeGWpxLxwoCbRhgew8Uc6XyV7frKsaVJNM7962abC9fAKv7vcXzxR",
  "key17": "2sFtwecsfXdoQr162bxEvMYXYU3rE1GKH7KfWukDkeKBt8yDY1MW6qyzaG822jz5nYgRDgq3wrHqUuiMU58vyjyz",
  "key18": "nm8Hya3YeN6FfGHALj8FqYnoriN5PbygsVMTpR4xJ53viVYwXAhLeYhRFYJPFKuxNnGTo5ehK7cFhDW76fBkuQM",
  "key19": "fEcTsiG8a64dN8jga77u5b1BumGC5LZWn6P1D7tERpXAqM8PLxvXfCsAGbtnof6SYv3y1euk3T2jRGJBsppKGSQ",
  "key20": "36U4GBSaFbXV51NvoSR7s5Bgv5Ug9W5uezjwvdLM5pcEwxjzvpMspArh9y8pH8kDvgHtwFJ5KU8oGexm33UDEVkk",
  "key21": "5RvPz5c6HL2aJFV98KwGeXTwSjDsCsSRDncQKE2uuDTDaC5kzvLpZnomhbiZ2sX7RA3HvRqBXbVxKhtvJDvUGsbK",
  "key22": "QczH6D28mvmVcrk8cmfPhZCfpKpTip5gHRJDME4vjeSb5v75YedWd621zB3dvRDrbBLNDzL3umAt7DTkY3EtyVf",
  "key23": "4fMFsMzZR5R2EqhMWiDjcxjdvjQaxmn2FvYBE7J4AXwm7crjjNSiyLCC8Zpm4dTpSSuUCc477mUbwGPFCVvHhgpJ",
  "key24": "3jrYKBBjMju2EceqrcuavorJCCvp3gPAc73ob834WaebfDfPzFTYe3AMhLAhL6oqgwbU7Aw7xNicR1ggkh3BVCF",
  "key25": "WQxhGLfHBEMwjTfqnqvZYX93sXKhoCWEjR3DgZBFnvZnMyhGTsJ5s8QKN5GHyxREhAr8ivnfoKoS8LkpK1REQ3R",
  "key26": "rYhVY6C3HvZnTAuy4JQKqfkDPb1mVqE3tKGuSU22RziWTdzqSHEdVwBkiCSrS6ptPhH4veJ2piWCqEEw1ASYE26",
  "key27": "659bQMiyHk4DrxVdgayDw19dXioPYttfvoLoiR7nPYQ8wpm6bQTvba4skdCBf9SKMhuyBjRPLaLncBR6HsbbgyV7",
  "key28": "27RNmEuRE9EZQoyViERMcCATzKYaRjs3e7DqsQkbFTxt4Sdz8VCBSUsBtzoeaN2EXBBEKWFVrPSX7U8kWfLR2x8B",
  "key29": "48X9bW1J7EfuWkTfmwDhjbcp8UegLBNrjZxKWsdZXjehcdiC8Uz8HjrpWDyTrEs4vjf6dGxeAZ6oSPH5Rt3JZgN6",
  "key30": "31BqUjZ7xoLvqKQeCbLG46HWphpAqdhE5oBvMXvbp1Gsffegnc5fnbkNNNqNVs9ErrzYvteRfmb8WAMBeUYTwFmJ",
  "key31": "wyVunAv6FsKxGrQbXXn1Jria8dJJLQBwaucoMThwzMXtqEWyaFoAcrEH4BJW4h6rVxB8qV8ju7vrMLmphMpoZjz",
  "key32": "2sukebE1k8bLvUpnkoYQyrUNgbcRHuvrbHedETJPiVJwwZYaBs9RFrpHuPfuPqfZYc9VpTsJUnv3GhiysCE49xSD",
  "key33": "hGjDdyVaxfGsJg7E56BwxWkuPEKM1DbugAhA4jcNhsuVTHQLFRgT9MKS2j3ksN9Xb1LmdbEsFVsjzxvcX3svVsp",
  "key34": "2Fy9pWnTPSSsCzd9VZXL6rDK4B1V9Wrs5buyrfTbcdxPe995mKVN23nsh5WUv3PVxb8eLcihJU4VAoREd3vvd3nB",
  "key35": "2BgEL6tWJq57GPfGQ9ZnCMM7AM5d9iebstgpaczZnD1nuzeJgiF3FPugU1ejry5CxHPRVBcf9QrTF9AYErtDzNGE"
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
