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
    "4zfrNL9oUzLWCbzM7vNbQK34tRihtfhoGTH8MkMRDvH4wiV19VEqiRjtVVSLENUnhAhY59rqpPVrRKBnBhATYbUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lua74x9pcwNr5YbAeSWofCNrQfvH7AgG32ToAn71iBWn2a4WAj7rsDiMJxmjK7WKS1AF44b9oeWJg34xNEBGUPK",
  "key1": "efiRGiSoKipHhbXMG8RVHpY7QRjjLoWJjYxA3KqRgxXAak5ZcfKNMkGzpMj4WC9x8gN583EDbDCDCiBc8Z5W3gZ",
  "key2": "3qETZbKWwKB1yGpgAmrMMFEPtnmgCEAMYtgcc7T9yrp8Cy6ZBXDkHVxYcknG2bH9mV475ReZxdFDLdxLnxXHqeXA",
  "key3": "4zFh21hnN9Lbvoe67ymwhKSMRr9ZwYw3osCe78FchdoW9ZTRkzrkUCVXweu64UvYVZjzbW2RbG2DtBdEGXRj6ujW",
  "key4": "2uGHxFGz6BjbLMtwydo7hkbYuy4BuCLeojNJ8hFyvwrAAfqnnw1T9cjPrHJQ572vVX1KsgWjy9bkhTwp3GCJbgWG",
  "key5": "yCaa2CrwgXBLLQVxBq3b4UEr72NEyazp6Keq47UZiEF8ytiR9Ag6KEGMGoJBUipUnz25TZmjzibThSQuVVv5xeu",
  "key6": "4sCcUgXV2ePPPhbsSsHZEdBv7V7oL2prakTrmHXPj3ssmLrtHKqWPYTXSLfD5JSx5CEZgiYCqy44mU3AqwdVhp7G",
  "key7": "EsRXG36TKDb4u7z5AvBbXupYbk9eMzk512BVFhWvV5RmtLP1qGVt4W8HX3zWZo5pscyzubHTcDFVGtJpZPHGWyN",
  "key8": "4TmXEEoNrxcJTEDMXLHq88aAjiS1wuRHP1ut8o11q1h5RVfG25DdBRo17nf9ouwdzsBXix1VqpDTweoYYRm7LtUC",
  "key9": "3xk9Y8qQftJ7JnqhW8ds4Eko68RyErGKB2Rjgj9zvv2CkNAJTdsxPiQYHcpYVyZeDEX9eh8PCLz8osuofUEt4v5P",
  "key10": "5frSNswaK3G9A7ZHKS8AA2b7xHuAjoMNQbMk1NPkpN32aEYfzMhnFb77vaGGznFK3M3SthZyWjY8gjzFKRTVafif",
  "key11": "5cf7QJaWCRYfwxDeHvwDjPGeM9EhmouEsfRDezheG3Tt584YJQLdsUkhErN8tMrE76bpbg6ZtyS7piC7hMjZ1jw1",
  "key12": "3SZzN3kxCGxC2in9tqiD3G6F5bVVMa5TKSGA9SLreoYdp8GyccR9SN6SUKvK8rKERCG7pKz8Gi6iQXHpE3XDsPNb",
  "key13": "31umyqhPNwvjJvKWgrsmrrZEGuNbXdAoP2dSrnurUiVJB3ctdqAJ16Ao6cA9BxdhLs5tQfmtGLgu1gmdU9aEYAXZ",
  "key14": "2QhZ8RVyCZeuwqVgw2GzBmVkQKCLDND4mYnqRg4LVAMUHoYSAqHYvSyAS3KCM4m7WzL8QwAbecaS31Ufa8UKUvVA",
  "key15": "4AqKzPjVwmnvFWeXVUCUi7oSZxXLtwfEM8DmTGNJ3A6bVbHnk3Thg4sc2TirP7dF4xVPQUsm1cCaWXkxiTpEfSmb",
  "key16": "2CVMMMew5LWtUaEGKqVh3v1533hf3eQNWjZZbRU9SAra7TCs1ecAtdjEdd21uogjXqg6Vz4Gdw3ffmB3HMTT9ibB",
  "key17": "3rYDQ1KkZbpq5ArYmyREEFnXYXBfFfKdin1BL4cPzBTnbkeoJoFyxST5guz76XU7ip16oQzUbLcXWqsmatbKYDso",
  "key18": "57WmTa3p2N58GWAhiZzzTuLRSQnBnu3KcDPSb9Z4XVrQayUMqFUwfsf3gfViumVdwvMFmKrV7y1LpfARSQWvueWw",
  "key19": "51XBrYmeJakwPE8wixPNv5A2JERU5EQYoSoe3tD8Kcm3uc3yq9AcdnTFAusWqEaUJkz4nJSGizzXaeqw6dus68cT",
  "key20": "4azLZDWmRMHb62USEShXMWZUorVQS4XCayUKLw1Rv9WuMt5Gtpoa8dgQo7L1R4aksQB3PA8F8iicbuDm6fdSf7af",
  "key21": "3puQV6GToixZZzGc3YwXgrYPfikr6sYUDqG3Ccq9jVeB6ikVdSzcDzLQSUisbXhLqTV2eR9KRqioBuLSMGd581yV",
  "key22": "2hGBsxvjKHWcJC5n6eR23btmbzRKekEeBg4Te3xvcK5tXbPwtcr8GF5bVVeJ54ZE1EP6Dpb9justSBcBWZtJeT5C",
  "key23": "3TwJJ2ENhY7cirGXhPKsXXejcx3VLH2MFAQ12VXNV7o34sToGMx9Zpn3gPTkECKvUgT9fUJek8NdEQFQ23cc7bCf",
  "key24": "mYDZsPXxDqt8aj8oGbaKA2YyeZ3HSAEtyd8CNED4oc1D8RcZB9WnoCayVzQbmW7wAXvmEQNHUvkLgGqWDBXdWvg",
  "key25": "4xuXQq4rcoPEeNtkvvAh7HP3aj6q7JPRZaWQrrK5pgQCR7wg8T9sbJL2SCnYUzveYNjfMmDHnVocpq98CeVc8utp",
  "key26": "2xD6ymJovhJ5zNMNL12EJmorbTyVutRppCQdcLxvWi5dc9L2qywiTWo63cbnwyQVsLFYjLbJEgEmbzZkUy1JFUKa",
  "key27": "36TMjxDA2zWGFotHG6R59fMj4XqkvqUMPLEsEmRKDNKsDguEeMVn1Hzwrp2tEk6CDBcBqSvQPnfYHNqAGHnMM5KC",
  "key28": "3mAaodmuKGhteauEHY2Nub8xhL8bbXcyzuw15qP1k4CSapJGZy7Jt4YsqDRYRVozQtXMia6uiXAgRJkoaSSwnc4p",
  "key29": "31EtjmBAqS49JRXRbcUF8rCvXi9EhsnKmiF1xQjJ7eE5rzQ73AarAHYALUx8GnwCjpM697rVBgQtEfB6fot2V25U",
  "key30": "2MWxLyQk6xam9NrkZQ2bAQ6fR7aQqHBMF6Fr2CqMxmYXcRhMU61nM3JKvMQo2vJYKsACq5hBo2iRzgz3KimvjG8Z",
  "key31": "a4Rz6LxHvkHo2CvRtLSJcbyr34W576rLzghFDr7jrSJjHkyKMEpXMfQ4o1nFppfGcCb6hCx12Qd2wa6PsYj4q19",
  "key32": "4MjaMRhs7zfqygp1RSixDcAVgLYrdcPFYULkWARGdoBantYwxvQFduYEtpzhLbt4Cs5WvRdQXCiLotV2QGQYg449"
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
