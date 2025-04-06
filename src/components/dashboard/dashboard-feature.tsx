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
    "4gedfAQXNBN9gtAeRhsEKPdg2kR2kD5uw7tjEymigLPyzYZc7a712cxKygmKFcmzaA2TKwZEmutoE2ZXJK5u3Awc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRqf7q481AwamHWoFKzgFCrY4rRfjGdZdu4PhtLmZwjxY2ECkjTzcStwpTPhsfxCCPP9iQCRTmCcDVhtWzW5SSk",
  "key1": "5c3iVL9ntaa2ibLZ49DfrMTYo2LKxMvqbpovXxfHC1anb2iLdDSxemvCK2xx5N4irn8136bTUCHGGvs8tDpCc2M6",
  "key2": "55jryH4qMBPrMx438mFhAu25QqxYb9quyjcHsssACiNXNZboT6fdWBVMNASt5QXLAaFinKyoapu558iNZiPeG3ea",
  "key3": "5Nor2GHAzWvxVeFUhZaLSitEEFZoR96MzzpphngDEn1UPNuhq8836Nat66pqnuiGdg4PHb94qJwiqSxK2wf4e71Z",
  "key4": "3r26L9vUh5iB8VSPgfWzCgMq9frzBQSiNLF6KjDKizh3Dtsp3pXwJJ7JWPUbLqfgEg9ueUdnSyMtuCyrHcQRyZNS",
  "key5": "B6qVYu1dG4VB9XHwU9KmLjCEq96ZDagoDJz5CfbJiz3qmSd26R8qKUWVgGgUZMqXGzVKhq4iQ8xLnP27FDY9Cnm",
  "key6": "3FQM3YpaDr3hzEV7rydV2ux3v4T8cfv47ZVURui3TXae13mPSbsaMWwYZXp3u6hnLzUWBJPaBs4ZcxNnC3ta3DuM",
  "key7": "4kWUa5nWMDwbCWS876RTGeApCF1t8mNMHgh5pMPeDwL4dcmt4kdGiXT6T8B2Q9aSgjQEwnjvqQY3meZEShuewUHX",
  "key8": "h3tAFNrUutEGHR1hYES6JbKsAKmjLZLzedyx6P2Jfm1bcTSXQkN8tbfC94nA9KFzj4FLwi4pBDaDyAbtk4QRsBk",
  "key9": "52AkkHKUfHzQQhV3GENkBbWGFs5MLHmEZFjSwb1bCYcqzwPxp2YMkZ8yj8f1JrpE7DLor5B6eQAKjU4v2MULiC1K",
  "key10": "YrfFgxpYEaksiyQyJijore4CEJsuNuZ8rZ9cFtkoysMgMGFQzGkp258T9ERyuL8enw5ZYsW2zDdZQQmksrUFpYs",
  "key11": "hkGS6DhaxsE1789VmXtvEdh6M8wGn42n7hv5tAt4SkQMH1g5kXxsW61yVUsv6r6V9kfYjedkyUfutPsau4VErYj",
  "key12": "39hb1814AdBnZvdZfvsEqJKE2tCdTwVKbamRPBMhoY858zKXEddrzBBu2MXkHeARBR1HVQAHVKgzSLx6DB78avdq",
  "key13": "5Z4gPDLSE6EDvUEDaTftLD6gZFHSWRP1NkSshvhmnrvxUWHgx5pAh6vsZFN7sBL7eo52ZZKyWWKwXyTymf8VPmBY",
  "key14": "55EBQDGA1fcTXtMshD3PTYY39ynuPK5Pks3PtYdsGCZ1fu5i8ZMWDS8x9keb8fLhdVNeqwXDGhLZW9q2eCCRAXB8",
  "key15": "3DL7CYcUavFRsqQ735WHFV8NHg3GVPhYwojYfTuqvK2iCewoAW12bfDZq5S2eXYqfzKsHDZhcpkKZrmpgg3nwpQp",
  "key16": "5C7tn98LjXmLjMMCCLGnz5nyZJyx8y1wwkcmCCXpP6YWnuZxwCX6SJwBXtmyuiw51wqnPW8Nybmkmd8w8BmPcfxu",
  "key17": "3p2At7pqpEUuGu6QEpmDWTTACfFgMBJYrHyRo5ZpaWPfR2UncXsTNS7nWvqhRLVHzwWzyNzH78xUWpKdjRE29LU1",
  "key18": "2Jjb7jQWeur7HC4RLt6hTB8hZsxrWfy9uFuzTtRn2iwQiRvgMNiZoyRoFkphPbgYhnpEk1FppiS8djjesAFoSbio",
  "key19": "5VpWothqxMFYkhHvL4PJrdHqSZ24z4KJsN6astjQiVDtYsagguihqtgH7PdhKLFRjLJETyuJxuxPZeb73BywgNnp",
  "key20": "2xt2bCnDSPez5uL5JD3CdSfcz2XPquTUoanCP6VC5aTKrPeB43PpyGMSHWi7jLQVoRrz41AZ3QepdR6cYmimeua",
  "key21": "dYvExsotdjFbTsQh672Kyh2TSHSTQJSSBeYxZxPWy98hHxYMZVFGoHQZXqrZZrpxwkg6sXaPX4WT1xbE88Mbdc1",
  "key22": "63Yq66acnq2gnMJpjmqqMuYfoscLYfmVmeZQJ22iotyKxVXfz1QcpLD16HdZ2Du4tUjzaW2Lb9ryDM8Pjfkpz2st",
  "key23": "5SvBUG1aPFUUF3MNvdzLR19P31TyXCue9qcBdutY9S4etnxA3ZRWoQmWgAJc2QeYAMXGD6v5y8rpdrAXV8ovWMQA",
  "key24": "28gFNWx2ta4mhAatgMubSYQ72d1qmyETsjJMbMx1RqjK5Hzy27aSW5jnU7cVV9C5tEBPNqfptngVjFzdmWPTZTwG",
  "key25": "qqyPDTFn454EvdzNDKJCDWnmpRNz3TiYpfAx9jEBVgvjr4cRjUHJsFr7VsyAjcHrLiPe8tugLG1HiR4DjLAYLzr",
  "key26": "5eJqgFg2ftcKQCwRTvxP1XQfdhUkartuSn9DJ1EtyQXkD4X5E2suHHauUbcfb8hUs1SW8rchXjQjY1Y1hoCP9sVM",
  "key27": "3iZsJ44emB4wR55bkAfvkKduH7g5H2iHKtiJHQZDC8gLdGCHV2PsUBgP58Gu2kAJXVD3yzSfRQtaeKe4cFNC3kZL",
  "key28": "3pi8GBLjQvKNudnRwtwofbc8CjWzFqMh6RWDm98vqHpL5HXN5MDcjjfq6V39v5ZmqnWcRN9TfihugjScUYAxispG",
  "key29": "5m2cDeqdTjTBzWQfJFQTVwcxYUKjrYN2gaJQvrwNWxhE9SdcPZ5A2QHCaycQxiEk2rfoMR48c4LQuvA9qyEjTtj1",
  "key30": "JvZebamBfrLgWyLTYWQJf4dwsNTG7oSJ7iS1j2HPGDj4RajXprqqgDkuy9XrGasnAWLHTBy84UQ5imGxQVk6McZ",
  "key31": "2xLZSWm9HYdU9YDza8bcA2PAgmb6ussEgZpEcXxBzAkbjexL7VwT4aTXU1yVW5YFKaSHccFKtytEJgrd3y7hCVKA",
  "key32": "5sVZpVB426ycobL6XSaAvowwoHT2QnFC1hbUahbA51RNZgU5rUCGtDHbor4FddSQrqyPwoZSWsgfNttzstLXcMrF",
  "key33": "5kXus8yWnMd5A5xiHuLuXMSKBYy4FGJcdYa8oTuxXeUVu5WnhUJAiXhhSRhKgMLxQ1TeUwCkob6uVJQNLpuw9iA9",
  "key34": "2wtHncTPyczLYY6GFSLtnYcwTZjMSwfCoDfT5cmag6FXJ2LS84zZFvRwABq9sg8vvav1t5UZe8qPZv6cv8Fksrig",
  "key35": "3uPomSYKA4Qm4hYQCChbf5xNjEbJR7K7HjxGV6QU6TDuNhrZw39PYk27MUyJxv1xY5RP9oVgpa1CTkW7DF49Zcf7",
  "key36": "5z855f3c9Vvh2yXt1Fve3mbUVj3fT96Md6YLmPABRfiMHRDBJJSyzBmwSKBfEGLysJKCVG1Vc99mjYmPwZHLgiJk",
  "key37": "5dga7TTzpUL2ouD2fU4kvtKGV3YXJqPygxWFbFnadmggiEpcnc5MMd35vgLgBYniaT8eZepfKU1U9yiav6YSbNU4",
  "key38": "45TqYSCuFf8MijB2XhxMMz3AKGwqMwiNoydUiiM6n7FMe1tV6M5j77CbV7ZAfrWJpWN2TMvNoGrUm8Evjr57mfXs",
  "key39": "SmugcfPp6zKbS3sV27gD9raYsph2QqiCNaaUnbxMCCRK1vje4bncuuRoith6LgPa727aibj7d45UQs5VR5yMnma"
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
