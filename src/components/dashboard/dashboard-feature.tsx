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
    "5FZM3kYoHnaG7R8h6vXTea581HpWpBUipj2k3oq7uVVJAWTozL9SMK43ST53DeXcCcs9ECjuCJoiLNrdPbYyXKoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjykVt98GmFeyBk6LE9PSikZTg5ofxeDaPCVf8kH3b4FDUcQUaQkjjcUWtMdH6c6hu61Uejx9UbnUYbngrNYwHA",
  "key1": "4Tf8NDXBPtg72qpnbMnAyycDPpzroXLUEx1rhsLwex8XpFZo6KcwsuAAae4rSPEqowoSwWAYYtejpSttFSfQiyND",
  "key2": "4YcuFBy9oZ9PyJ8sNNe5abVGmPZcZAwYJnF3EzsoqPWv9FSA73xwKhXPqehp81tubvTt7azFZPZRjFDJiqV2ubG5",
  "key3": "2pVuMup3rnLS7n32mcKAn1p8KNjnxFNWfRLoaNMBN8v19TNhZbyiYCRfnLQCtLpwXMfyNpGHxNF14t5g92dCVyQA",
  "key4": "65AZNWQZ2LGwZ2Phdo4kBZvtZBqKirFary1aMYx34frfjwVDKR3gZSQMVeGYdNU8pTZgLDCMjEAbffJ6X5ZAg4bu",
  "key5": "2k978wGjkzeCgzpt6dmr9bbQoYXksutXfHQRevbAHCw7dRaZHzqSqLbFcE1TV2MhowirY5RwMuT6M1VkkqLG3gFH",
  "key6": "L3UNzfGdGyegB9c3tp2sCtDdBNxMLmeFMPRBLzQHvy1WBhyUQhwomkomGNuprAVgTFeJxniCcDDBkauUg6r7RFy",
  "key7": "4BhGVkQ196MQ7AxDnqbPW5ZbqwQYQRrgDMHJk91FDW5q5P8MjJ1p9y2fDCWXfLscvodBw7P65492Fg8CiMGXPzX5",
  "key8": "3tYF4WHqkdyfYeBrt2tCTnQpJFCKurhS8JBpqmtB82d51qx3xR1EEiE648bpQybqjTKF8arXkp5kU6hGajsHgVgA",
  "key9": "GXra4CXpCNbwPqbvq6ry2QkZxvr4D915w7YmTxmpA29SYP6Ny2Yi4CGPjYJxTSi8i8Xg1RbmFMcY2NKDycJV7Fs",
  "key10": "2NDQcMBYuCZZVU5MvR25NSquRpswTk76Hssd2HYQDvyJKEhinsdXy9ejnGjaT7RUKcNtbiojAZQXd7aPckfe7WeL",
  "key11": "VrsPVSa2bVcLW5W1Enn5mxkwhVzMxAvxTNDHVy2XnLX5xHpYkSpcfZ1LKHAK11GQFLJAyyTW8ZUjf9BPY9nZzoQ",
  "key12": "5Cpaf2Z8yQMEr64Fbe48EYcV8YkowtG7WMwvfn1HBVicHuyXeDNt4w7LpaLYoQfEK7QXoUqhS6mM42UrZAXf2ECq",
  "key13": "5pSkbnCoSX2nCDyyaP2Rp9FJdLRw4Wdj5x3gcWhm94sbWVPY6FPktVNQXTMRJszP8uXPyvpQg8mmdAFMwtN542hi",
  "key14": "5TYETvyUMuseFuW4UiyYNeWZJUskVmtG6wRGnjhLXN5xTtSMVurJJoxwK1brSHeX4JNGXtDQBpJg9CAeiVxYJ61s",
  "key15": "5CEFaY3757W78BQhUPXAUZmeAWat3JGuviSJVz7CtTpN4BynPmvZAFFyYe7LtREUWe29Wq4Q7fj75LjF4Uai4QB9",
  "key16": "NiRd9nXGRuahtZaH5rxXFajuqjH6CFMA98ggoMEJ3QERWCNuc5wyjtjLSgEqhZN5fKjXqYfxeHjJCvUi7Ysm1aT",
  "key17": "5TEgy1zeQmVPp46bBHTbbiKL1XHPESMy42z4Ziez4SsNtPC9aNnAHGEfPEQo9t6KXrFL4NY8SyxG91iLBAfUdnCF",
  "key18": "2vjy1Q4xFEG67Btmk7dH52TzsEnHeFm4p5bstKUoobqDEWdNFQNt5XF36Niu7ZA3acYaB6jxMhHPCBUYxv1Ga4Vf",
  "key19": "3vipy5bZuwR5KmdyFRUZSPEyi3wpeLvzbwzi3aHhBdJiZg1fSaPZEnmpmwqeoy66uoD6qQEHHPCpAZoBoSLkkFBw",
  "key20": "4D1NwxCThqbQZ5FKo26UANXGraoTwA2NX5W48EHfaWHAjAtyz9nKSv6pgBE483HpuXihn6uZ1bnyJXQWxScBqYwu",
  "key21": "ossGM79mC8Apru9DqXtEQ2cUQ2im2daQWj1V2xUQsx8zFYXHBEnT7cofda7W8Ud7c5MWpJJ6ct2iHNoQzn8xuBb",
  "key22": "6RWHu4YWb6Ur2PDwQ2MLLZw2xPai9j7ErgRLxcSmCi44Tg3E6ZVdhm2fm8mpCXVmUey94LDDG8vBddz7nWaqXCg",
  "key23": "45jHizMSMm6qWEaer2otHDuTKfttkjA7bEd6D3ibFvXd8Z8ZgZaHXcAjs4H1cJqE3bEU2uwcKBiNtuXjAnys9Tcy",
  "key24": "ctm21SE7xTCojAAX6db4q6cuWQRqQqDiWvyYhzCj9H6wgrPs6L84b5jP9M4Xwe8cKSvRi9xfgC4kPkVgu9bBiPD",
  "key25": "27PNBCQyRa1TdoMbqigCE9XokutpPU3HUNEKwQoD71CPdfAh4kFKyEG7fx4GJsLk2FqiL6pLACG16XRVxUtqf35e",
  "key26": "3881GoAnaRmvGW93qcVyhPSLf2fRZaCTVNk9QQxgLBpaDnsQxZapQuEenkZPtRizt6G6ePD6N5THWpUYsZXWeTXE",
  "key27": "52tkSjScfKD6dNJNYt3SfqBrypqSbPDTPeFuZZnFm6SAXoWbNPAZv8KH9pJcxxfW3kmwShvXgd1SnioG6CZP3GRE",
  "key28": "PgL9hkffxG4HqA63PWq4ywApP7ysKGfsybSvBZCV4yVFPdRvWziq7G4ucTEjtYmq97S3YPtwGkjrHvUaHKuNvWd",
  "key29": "5BMBTq8NR9iB6tAVPT584JUBxw6s44N55pKRE3LDzzALwNqw7SnfzWnAUUfi1pSVTGpF7X6Z5qxFqwJZ8jR85YQH",
  "key30": "4pWWah9oQHANarLchfVirgcBBigU3svWumjeWnTjA5XvaEMxmPndFpec3QqbdWsShgobN994BRVj5Y7DXADBAxdM",
  "key31": "2K6rJ51VMvzAiSzHr2BGzB7syDtPKXHtpBhZJGejE98sheZ1uLjWkig4BpTZJ9WygaSGnbdJJ4gp8qbxUHdyLZys",
  "key32": "5xts4Af3tfPzwh4b22KZzzGrUko6KNYjTWQEN5V3ZSGX6vzAW14i4YxFwN82Jv1Wd2czVXafDFy2fba9mNf775j5",
  "key33": "4Ysa7nCpLC4Aa97UF4q1J1xwDxyyJ4Dgdcq9pBbcv49eWSNYeTf6zBkWqab9C76NBPQTUbfcujHtn3P75gQt7Pz6",
  "key34": "4jWyLSjjs2q3zvdJg5UCK5QzSkwxGP6vrtXkKhXoeN9124u88vwfyvVSvxMFd7599Cvn6xywaT4LRncNeXkVdBQb",
  "key35": "4k9Kxp2FJQBkJJpuDTJnyejqDtFJJhefrGtEACWTeGnk6xwgeGZPG7Rooa6Y3uhaLyi2Kp4yASHN6YXE9jLKCsd8",
  "key36": "w5v8uJJFCcPah88eYwUyknueSVkWajht5vXx4XgCi4WVW8fqUuxeojDmrUfVKMJkBH62TCZGgun3REQb17d8Sdx"
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
