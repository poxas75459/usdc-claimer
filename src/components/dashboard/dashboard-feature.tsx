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
    "66snS5FtQCPeJEYzZHS9AQAwB3NrHFM5Ncb3gdsA8tKj6aR5CBZtEaroGE1LexRX6ywgCiAj8Ha5sGqH2X4N1qnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2csdUgt2KADEzRk66keEjQHw2bfqXSnRpMWqcr5S1kmwyK2nmtAVuVxe6wyCspmuwbJLfE29ejNhLNkizAXkpQCC",
  "key1": "5NkDdW1NtRRHkXMD14GUfvMzZ2Tr4R59iVwqY8z26LAsCVXxwHBH3eVwJDURTppEsbgu4SRKGRyV4npZqogPWP7E",
  "key2": "56cwWoYcDiR1aG1BZtvR8tDH5GzdwvupD6mC869VCvJ9Yy7sEpjaga7e4MoFBPpPGxvRZ6uWojStJBfvqAtWcrvc",
  "key3": "khKZ4HmMz42nSeFNALpHFZP2QVo4WoCk1HU78zAGQVUHR3FWjMfHRZ2qydFnKorF8pK3p1mQze2fij6qwqTtyxC",
  "key4": "4L9wBYBzB16F4F9E7BJ8EqucbsVytRdt1FZiQaLBG7PidW7eeqNLiDq91toA1adY4EKPu1H2Us8Vda9pSVrKcf4h",
  "key5": "5wfcyfnN5kcGGg198dczvC5MZmzv1swAPYatuxYQZMVaf5raDKp4VyTJBRPyhTRFN3kxH1ycCjApjHiL3SFYAVQg",
  "key6": "2ZQGGmi6vtvSgb3hd4HibVWrzC3WMo5TLzqvkdixWhJUDgFM5xHmVRhYiQGRG6BU3YPGDmjfTjAKYxzUSNaD8c9e",
  "key7": "26avjvPTZpsb6B12LKMPQRVirVHtJvKnwdndCQcaj25oe37vuN2QAv3mbRXMppxCdNhdAS2pYsWSPEFHspEe84sR",
  "key8": "47nCsA71CbGMjHu2jq47ATuijAVZZjr7ALfY3KWTKqJRu1SBLcwicQSArCJLCh454KWMVtX91UXZ5f9DmT3yyVvh",
  "key9": "2sKLjeehCsaCwzqUBQx9zB8MYH9jo1WWsz9pBPpEPeMvf1undJybV5UFwcmVkNTFvpJxefbtQb9hFJ5tAzfAnVgD",
  "key10": "4PLFnvumzLmDdoTJmbhwYccHuR9jijj2Da5Tq3NxUKJfyEQh9ys8LvNZJUeUD3a8qrULeTqJuoKNRGuBME2jDrXG",
  "key11": "3q3r4pgMuJiYSMwiYJSjoST55dmu7KimWnBRvf8ycXwZsGsgPWqFHkWXDVz7TzbtJ6hwYxq15Hgx3qHwMkRFBe47",
  "key12": "3QyGVSBguk5bQdyELSBKjmk9y2uesynvkKnDqt7uNdrgtnZ47qLpbsPJkf3NTcGhocuC4optL3upSevVRwTKy1AV",
  "key13": "41EwMNJpbumnhU4jvCErixRdGuaDyLtXg6ZVdTKqJuKappGqXkFmmmAJRYAeHMcyuNKtKksgk1mpHSGkNdYXrq5P",
  "key14": "3oH6HFw4zcEQ2ppRGgXyV3Mgatd8Px6XDDgJk2X4T2P5p1P4jWdNfHVaFn1pQNfLnPo3hSaRssYnuXmyNaYzBMhS",
  "key15": "2zBdoAbvB6voTPvt3KYxzNSg3fqzqajvaiBiyNUvMorK2vRewhTvX2fLfiUQMuPHdLveKPw4adUnAQsQDF9tv5Pi",
  "key16": "2VqXJf4z5zT5yfGRrT4kBWubgygjF4oeQJuqLKy4iJMvb4NQZVUFX47rAqCMDmBEqfYRPLXn6ZCBDQzug8y1u7FF",
  "key17": "5iJgnVrRLanG64tNdJeZRRcMqyW6bgoptaDhbXZb9EU621omzu4t27PFa6D42KLHAsshn2Eofbv3UWtsUPZtnMuR",
  "key18": "k9yyBMiqxpV85PcCKue8XLoCfovqnedr98RsZHVHWekDfyxbyC5HeZxSpQFNRNgzhbrQXi6rCmb3hYchUcd7ALV",
  "key19": "dQccBKCAB2GZHDqNre9kL2Xeo8yYeY9yW8QN5k6NWni5Tzdm6VmCLgjrZwJXXFfWv6p2VdwQ66Csiz76FTgNumk",
  "key20": "64gP6KKZPYBqWS2fKP2KyxB1KbWQXyEaBspWM7LL3ZWQegZL7YzHw24PeLnKUmB7CZcoUfFHSMfDWMDQQwJBdP4M",
  "key21": "2PudxwFcnpVcMkA3xfKoam2pskVBwVX72bhLJkiE3ZVbDsZ8qH63nZAwgj5j1rDWorJpKnjvYu6ewW1JsJXQNYam",
  "key22": "4R4gbToDrThgxKARNTSDXfHsb2keHpd6hLRfjGDeFTdZEiD2dR7GpaqtW6woAGoeAffeb625k4y8rTbaGnnT3Vmr",
  "key23": "5cT2ycKwsC6MLNaXC9L1xExdwyjdxsZJD4pfEDjnbbGpKMjXFkTd9ZXDgJLvVrVjqYsTReQRCKsP3Sbvdx6c6PEF",
  "key24": "3zUNmnXJ1Ls464pfvsHM5ZL1VwhqBv6evBE82gZytbUxNi22xGydtJZkY9pVaafPqxiUQZgJTfumB8s1rvrKJuno",
  "key25": "XX7RD6xB4qLQtYBdYnqH1P15Gz5WMTvfv4SKeTpkvnWs2RFkEuyRanc4qZh8ERkXWeTcpGQZmPxtTYgJfvMFVEC",
  "key26": "4Ru1bxvE7zdfTLkV25ntZwrTEcGHrSdZuS2tBgYvHnBbPdFPzxUK3jTB3NTsySGWKVNih8mMWjhNs22P7u925FmF",
  "key27": "3V6ciXVFvCRpSQB11fYZqX1jhYkx1PU3aeLt76LmbUH7KMto96nLLmG3TUvYu3Rv5ovtwM94UFAAgNXSvUFfM2Vj",
  "key28": "dWZoRxRZ7Abcj4i5irb4TM8BefBthFa6KjHZuJaZ1B7dmpDQeLQH5Rv3mVp9pXH5CgeyXxJPU3chdPs8ifuA7Qo",
  "key29": "3wmAGVRWH5Md3iw3uvZfjU2uDBfbcaaEgsT6Di6ieZT9vv7Xgz34NYG6aaqfA77pBZmHjzj7TA5gxDxUaJfnDNCx",
  "key30": "pjbFEs6HcvLcp893umRAxUFbKyHYnAcrQot4MKk4cQ4CUQYecjd622qzzF4NDxsVJBFUUqadvzkKPnd3ugwoJdr",
  "key31": "4WdVwwh11d15oyyJVNLpe2B3F41J4WZnE5Q4pQe1CMcJuz4k9KQQQaHJNRasmi2VonSdfcQ6xoneAjQ5Cd3wwjGe"
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
