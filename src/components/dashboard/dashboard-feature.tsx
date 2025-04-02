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
    "4kbWPagqfeJZc3pHXAuV3FbSDcm8mKLAy5S6akCRBy3JAQKdy8ruxQSAyGzh1oQyYXiYKh1bcgn1NjUaw1HjYPiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzTVtKvj89XJWs7GYpnnLbtdz8oeDKrZ1uN9bVngN5RAocimrZXNeJdy6GXRYt83SB13SwwcMskvn7HaBFtKPxU",
  "key1": "18E36rbBC9ptHWh5ze9Ywi1cuw72xbz8rM8GsuBNeqRPdAU5ZfABr2VMV98TqiSNGje3uuAn89FzrDZvdWaAgpR",
  "key2": "32hW9Njeqoqc6cofhLnsgX8LYUtKqChuFWsUKns1ueuKmv2ncEvwvtXuUjEfHB6m4Tc36tDKZCMwGKAV3rzCdVVm",
  "key3": "2nrTDrGDmJqFs8tzCtFfsfkC7gnXvtiLpPgsW8BJp7qYckVqrc8LK54N6645PYf8Zk3KV84R8mMtEnrcBwvF4v4r",
  "key4": "3XX5Pambw3CsTFHcBXVeVNxzyurCyMnCpBX2Kg2GrYjD2myDoGHEPnxT93EqpEH7qG2u7Vxd93GEng4uM2esunBg",
  "key5": "3HbEVVL8s4ZZt8AqqbRgykHDo4GBghMLW9r87MMgFsoV6NuiUz984EdE7dAUxdEj44UqvWWVVk95ZvgckZ55jKNu",
  "key6": "55aH9P98S7Zs8h1GuXWmQGsf6VYgimWgMaWE4QiVi7n2ctrh5tscu5sMB9ZwVod6yWMWGucEf64wzq2zsnPfvR6Y",
  "key7": "4am62dXGuiBvf5zBQcByzSgRWYofhQswnBp9aLhzTyq8rENSgnBH22zWC3BmCc13svx3EMvWkZ7ThjpXEg9aAXoL",
  "key8": "5wUtvem1VBiMjR7gbY734pGxCJZR3MWK1gRb9em79WFappjECme3Q6oPeHakkj8uVp74E33L6yW5obTwCaDPEVGQ",
  "key9": "X3He3Kz8vyXrpJfccmdBgUNTCx6i3cFpCQj2Ru7wVCTAyf5ez925Y3XchzZSmJf2uJKRLJhZcLcxw2AbbtxC7TJ",
  "key10": "3hHthFLQzeaMhMWCTC7Ds93QMzJVRgQ4GLwcp8yrzqahHfn4RPm8uK5C3PJxeqJtMHmLU47o67RZYuod3nf26wRZ",
  "key11": "Gbv84jBq9LtNGLBx9cgbXn4DLSYgAK61e6hxShEjTe4XC6jgUmoFToDNSYWGYLkEuuMxJSFPQU7skUiWQUe3aoT",
  "key12": "242PupJsjzdZ1xPyPTHVXhvTYzytYWDqRHqrQF8HQJTsCtUxkgpzz1QaWCbqd6QHigg9ZtJgnxjdfr9D2nMfYEk3",
  "key13": "4VWtvJfrPBR156jgGM19pNK5pCFw2wYSPb8WNMnBkBbxVgczyfgkeW1RVyktsrBn1JMTopt7JSVKfqPqqmHH4BCX",
  "key14": "2PGHrSC34xyfUcf1yhAF917i6dXDMihUGrujY3vR5f3xuJZoqaaq1wsmShn3eNDHYXPKTu3bDpGqKy1hkWdcJ4mv",
  "key15": "3wv1yWnEX519uoLZmC4kYi253Cy3dFqy2ERamvXdX9jjR21cCUc2KucQGRx1goSvaddRiLgDTM8YxpiJ9iYwvbJq",
  "key16": "2UuwTf8VhWbgBNy8or7HfkG9ztLUMidThpYfz6ySiMnYHvM1Xy2Xmp4oQ7VS4hsD8urEHTXbhhNwxmSptFzxmEZX",
  "key17": "5e4M2cMp6zuYRrjqzRtfS31tHB5x22YT137DEge98D7rBx7BqtUAaV3hFqfEPJq8o26gKU6Sgoj5WRiQgoyWhNed",
  "key18": "w53QPTqXRFw2RGRgwpgXwJvZGvm89RNiyYkSa8VyTMF4CiYdVunh2XDWVf5uRMxNn9UfpH8KEUCTV7oXfsfNAn8",
  "key19": "2PwtBAVY7HsQDvhTZowQS8rr7pRhwpuzyFp9kt9cD5LKqzybRiLtDDiHhYPDRoBMxxFsD8APKmWBSLksgzG3LAYe",
  "key20": "2ZoLVe96wuRCiXwXHZdM4PuTSeGa8qAr3qtKx2ZBmdePNg34QiB6LWrcRJ8zRCtbuFN4VbfbuAVMrXiaVTqQJVrL",
  "key21": "3ES5Qi9bTUjcbh7BPyHBb4mycbLTWHWDBqYgfBnVkrC1YdHRyQB4N2zkGA3AGgd2odi4LA5T4NjioW1c5GD6bg7e",
  "key22": "3pF6iqtJdfTRuyes7FJkuqPiv4CY2fq6GK1nyhfEqrfdXyMcqLr6Czcd7Qa6M9WESXXsoukM2Ka3R9WpGY8B2mZf",
  "key23": "5XMKgNEWNjckQ1mtMPkcaQeiyF1HDtXTNZJyJPzJUt1fkbL8VKEpeqsZydDKx3Y2WL7ccAjuguShHobwFr8WD2uJ",
  "key24": "3TVGBXKVoZWr9roACy1qDbC3J1iQp1Xu9UhUHpx9MxeNY2dwHh8eH591AZtkjrZw2bR9tGYyuNfpDczG4ryQSji2",
  "key25": "6cz19q3uBtpW3Ay4sgirURQuFXsyXvz7GVDa9s36f3kjYh4fMPeJKpNstsK8xVXPu4E4zRgiwjnkKGWqj6nvsst",
  "key26": "48PRGxvUfwFvJqSdHQz5vwrPD3qSHhCLXVWeYdFdkSxBwVbweuCjQxAsBMsMQRMgR86m9Uvu21c9twZwFAhafEb2",
  "key27": "2s9JFChbwFkwQWarDadnhqoa3r4QqVJF7yEfsXKBn4Pa2skxmPm7b4aotVdYF4YLMtfC6BBdz6MK2xBJhwdzPX2G",
  "key28": "4CsQP6dKe2uHd9tBemjt1mqbNupQP6fh5V9v8HqqKYJjKJDBoeTM95nhEz7jbiLP5uitSPbogFHNCTxoPGAjrjpc",
  "key29": "49BNS1gxoEXPUnZC1fNdA2AxRHpAtVfekfRSYuGey1avsJtPu7G7BGXVrNq2Dy7qXpGguMQqgJq3E1Fsu4p1SpQ6",
  "key30": "36wn4qyTHBtQ8NQPDzdKAiaHf5q1Kz5fhiAtAuCspDWqG4xxfQLqTG2M91FoiQCwFdt9mTvZhF8MAwK42RtT9jP9",
  "key31": "qWsjF5gaBcK7AaJRtF36yM12mYL4pHzDV4a24xtQXzSYm2fTPxDtAjQhwxgZEC183EnfSJNcKZhEHjVLJsX8ULd",
  "key32": "3fmu6TdzAVaNzKAEtRVcatUEkNnwU5rwqCiARQYuZy1wKCtEyw4hN8YEY6r73fhVESzajyUB4fQVYvLpn7UbMayK",
  "key33": "4ttJr653BCbDiMREb7AXoQMTBo2hDnr8xXrhyuiAvPzp1FMBtQB7WVKmpsCBBs7KKS1BR7ncBwSxJomd9S3v7xev",
  "key34": "2Nf4V9wVwJAMKxhFskUrzqsBjW2FGhcERQY6tFiuZmre9aDQYkAvRgPLpQA4ijw9wh3enZeHoXp4DzTmdDbPfZ7Q"
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
