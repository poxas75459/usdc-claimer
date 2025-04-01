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
    "2sxysFoapu466VtsjLdJG98JZGT6h66BKL7LxrcK1kF9VXDxWQAw1vaPSLWNLbbxTAsPSL6aMGXcHirfPjFmJyHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsZiUjmTvzUgKTzybnWqYo3EbuYwRxMW5Gs8rMCvVNHuRfPdmGbk5v2JkosrtGsdAP4Q2hp6cKWhT4Zu5j9s9tA",
  "key1": "5P3FsGxjRkNjFNFq55UF915H1ZLxTgszkxtJSEtBkA6AP8K4mXFioQ4DMWVEGYQB32zSQ3JhWUWnAPaEyEduCbYi",
  "key2": "4KLFQuPxLEjw3PsSV629ne3oTAXguhHQmZ1ztMPsNbJ43BswMV6g4U2GMBPhUwYF4cppo3MyeCnxpBYGkgCRjt76",
  "key3": "2ykN5uKtTELQwDLAmeTceNGM2ZF4CPQCuZ3gdn7PkjpnrEbYEj4SVobaSDiFdPaKp6wPge4opwHDbKewcSkq9wCL",
  "key4": "3didBtMbDEMbnHdXhbqQTrFFfJoDqohaLa7RztkhTHNXjMAuoZWwXknnRs76QgFGfFBrfXB68LwizZLMXhyTVFCy",
  "key5": "Z3XvbuD8kbptdKEnm1kH2jAP3MNCozmEa98xVxbnZ11wDU4NcTN3yb3WCtmTWuPi1NAsYWTY4wUq9yXDfNZkS6U",
  "key6": "5qPoJerFqKfbA1s7esS8GKoAXDrwD7zHQN8qsSXQGi6BpNGteEf31B8kvptfkxX45QuKgWjfR2pn9KypDvsUhb51",
  "key7": "55pL4soTwptTY9P47S94m6Uk9FiVBTwsRHzbMdLYv7zqKmV5uqyGT2RmdfSWNsW7rzFMhXLRJxR3WhACgyGtCYWx",
  "key8": "2NXudfKsVFKHJND35FBwVdh55Nvkpw9SzsR2LWwDAwecAv1cumZTp9pMfu99YkFsGbbnDwm4UK8sUpgPD18sRwDb",
  "key9": "4Qtog5fpykj2TqCPnQHrbYPMzpQXrPmydBsxPsRCQmGJpNzW8hochYoqnWfZ3SZCRHj3tidh8rcdPVkkC6Xrn9XF",
  "key10": "5x5kpixHgVgYZDJ6mTVvvWKMgfNH7ZdQ9CFYkuDuRQNacg6rH6H43S7UL9iMVdG8ehE1ykV1iFLZXQ7LYTRwnnGL",
  "key11": "3X4bKYaLcwUvWBQdMwifx98Y4nossNdffdCdYoaYJaeefzTnANmC9HcBdvwydMmuh7E1Jws3w9iSX1pooFEkKq9v",
  "key12": "p4mD61nJvydAn2MP8cXw9ArMcmrXiM9jdUzxwuHdXtxbDnr56s1V6cB6BC83Lr5Dh6wpTp6M7LTE6FJzkk2i1ss",
  "key13": "4xv1furoeJkvMqkTXJPb2t7oK6Dp2XW3fuiUKQz4WjpxaM3nEZTuWrB5AYGcZYr7cB5mw1cuMf2trTon3iweq8Bo",
  "key14": "YL48U7WNMFb2Tgc5hYVMSakLMFiKVZj9NfGfh8Rx4GV78AQrh5t5pTTgVQuD5e6vHRxnD5aFXj5RUsxhjPzu9LM",
  "key15": "4Yi3AaBZQpe6DQ8SHK9ahR13p2pnVjo2Z3TWUbpjhYk8a2qDu9yQ6qA69u4VmZTtYppuWSRccyBoPT4B2zJdLHgm",
  "key16": "4hpN6xKUk883tKdz68u9LxwLN1ivL7FwduCQ1MH1eiF1sBN7HzWKTHDfJ65A5zMuqo46DLDE264HMEDeB4q4uv9N",
  "key17": "3tgUTZiPXbQ8V1ZD3VNNBhkotf53ZSbt6UTwfiU3viRjD5PaPRMbfK52E2CYbEqbPaQTa3qAzZFLKyKKBB9Emt7L",
  "key18": "3tPr3XfEjmJUw6wxUxNWBfX3u3sB18H45Crr4QecRLsvpJp2SEp8PidMfQpQyGRE1svQfArgUtdtW7vEbH2V46Tm",
  "key19": "4jDy9Q2xqnVNDUJbDLtTb1nPNq5wgVXCaKjRUN6eS3noKrJvjjZtG3EXoYigCEkBuVnuJFjmZAZ5XgySP4iUAFDZ",
  "key20": "3cvdr2eWgUpHC5EExWqetgs9t2jbaRRwQbDmUXPvAPmfnzqZwXUCd15y7qgyBzyqWPmq2RR93bioCgzQ9SBS4V5b",
  "key21": "2Ug5Qe5FyEk2nS7smAbTMVky1owhdRLqgWjenG839VduJ3f43DFPN8PmiBLSVRcoQwJBnRtxnwXXgD7c5SNpZTgL",
  "key22": "3YJZU2d2AJu4RbxXr7PJCqfSF3M4AZyQmtaiFuQMq2679LMR727dAYqWms5zQkA1DQapirBx7U9Qtow4coYdWKi3",
  "key23": "4bUau7eW2CgUvQGgZdJF7cYKUUbibgTSSLRVV2zKxMb5vfPGUSHpzLtPqHsmPBfNabgU9y92BnseVzMaEqtbnAKR",
  "key24": "5yLj2dMptWTUKoJAKH7ANMT83JeS4VnY7N9E3RSuJYfRBEE4QyJGfmBuFtJa52dKp6QARo9vLJB3YxEG44T2XtcU",
  "key25": "fpHciyqfMJsUSm4GubMczikL4ynqshmHFrSyo2Dp8Lit6PeJuP8Nb4E8EQY7gSgeBRn1Gi3wxSTyU9Yt5HkS648",
  "key26": "55Ft9Lts96z9t2zeHJUZ3vQCdUWeiEYw1k8WRTyDUWAmFm6qV3PFn81my1srWhbCWjwdY3TGSPgZZ3VeeEk1eBgg",
  "key27": "5caQS29iaugj6LmEzHkF4gQJmELYSf1x18GNtEie6fLj2BVNSRyKSsJe8qhYe1w8Tr97SjBDVzAAuHS3CZur3y2a",
  "key28": "2cDWBbxoUAKE3dp6fp2PosyHks7bHVVxFxFyqsgnbtrWUSzv7fgqCrRNoT6V2b21n4ZXnutu6Q6b5NDeQ3Hv5X1G",
  "key29": "2R4HABBFvqt48z6am22v7ZjZqTBW3yyJ1AEA98jZcTReP1Krs2ksnBp11EVPo6GzHpuStsaWz2kxbxxqcG7jfHy7"
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
