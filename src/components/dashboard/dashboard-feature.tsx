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
    "3JBk9L9WtbviGRbhoYXnS657oPAXLUQff14QJ7XxzV1gEWQ8fudMMFmr1dLh5rPSVYwfxExD4GQ3mNrEzq21AVFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NKrVrMhftv7FuKizTCTi2wokYXsprzNvUQw2uvdGZmdQu6W9An7Yr3cJtuGfBTzYPxifuuoAgjh6ViKVbbtok",
  "key1": "3V2gkruxkhzaQebrA38Qr1QK9YTFX8BPaQJ22F7RcBRrKmuRcEip4gFSkj481qL1NgwqZGXvzxDeQ9XG5JZqNLDe",
  "key2": "3pjciqDryxtTpcHrJTU7G7YhVRQRJdzU1NCucq6Vyo3oeboXD1NtkzHbRpA9gpz9LRL3mcS4qB8YgnTN1d95cQUP",
  "key3": "4tVqw6XxtVGMYesro2WUHpF7n68DgTyR4HifjipCrVnebqyswHQaKSv2PbwV7jT2JuHcVdgm24KCFJPPRAthpecL",
  "key4": "3jY9eis8mkZi1UYQZQF4rR4WjVeNYF5DWRkBT6KgtSr87U1FaskFz821ambeaDkkvVF2T4ymy2c1PNYWAxiMQ6jG",
  "key5": "42XHTDjsrBsfp2GRsM7V8GSFfBQGBx5qCU52FmytpVdS4TiaYcMRy2PPAmkqrwx4Dw3EPM6HSxZRpEjuV6dsRyo6",
  "key6": "3Ki95aprURABreH8f7EpxhfqR7hc4JHsvGZUntn2LPcWge2rmoABDa6uETFUbQUjaYGsXfYBK6G62b9kLFegdzW1",
  "key7": "3KktFXMLz34P6SfR2NrVhoCDHKY3N9GDSXZuWNB91NgitdKa6GkrW5z56n5YY9FpNcQKa9MKeXtfWLEnV141JeHn",
  "key8": "3TNSbpLAGN7Bf33fxFKis1Qk46cy88Fqg9ZkmqTedhQwUAvXaTDioH554dSCsxqcw7ihjR3Kp4ydFdDGAtcz7ahb",
  "key9": "4wb2imHicAP673zePTjRD7ehukiuxWy2dVJgNjSGiUAaxQfKU6Aj1a88AQtYAFSZ38BarJLmGBbsCM1w8mvwhfaJ",
  "key10": "3gVEsmpfUaL6o7U5xR31g1hH714xay2LLG5ovYjeRJsr6vHKibfJgcz3FBLFLEjsMTx8jwJHY1NCgg2mC2fobaP5",
  "key11": "3nLCBfZeSTYf83ZZcMdq1TLtW3Pf6WiK6xZxDwuPiGWR6r1mtYAfwFHTLYXCxP6JKf2wQdmEWXJBXFuzgZc9X7Hx",
  "key12": "58CJFpckwUh28qiTKou9wYovTnV927SGSJJXTkMisKPfjXkH32vJRSZt9x3Bc4dHLMZbfEzHXAAaypPPt28TFzkF",
  "key13": "5cTXei4PjZaRpx3vvyovkbfrAneGM129z1YoZfnqJqkfwnGF1eRHz7XViJn28fgjuE4UW6anNvzYZfABUHpYL9Rr",
  "key14": "5EQnrw9nNcYhNyyStWjsUW2Eq3TqW18MzPYSB4tbeeXkgvZsrHGb67zGFtTqCgK7YbiQiLVgkbEB57iYe5k2PBuD",
  "key15": "2choe52PorebphGiJhFGQps1ppVtqu1Zn7Wrqse8teKt8GbfYiw2MD7fvx4G71jsrQQg9otVDs4KqcL2SUP52vMf",
  "key16": "2j1tYgne68r78r3vFFk8uxwounnoTNP3ugd94vrc6jafdwUZUMvpmeTmg43Aqd7vXV4GbGjwRLwxFvKzcFio4RKa",
  "key17": "isYxMFfnR8toxmRrGCJFevq9GdpdJnuNudamoCnyrnPc22nEyRN6hvZxzdkiiXgbUq1pcvKwpeynh2Bc178ASHu",
  "key18": "3U572dbPuwxn5neRdZYuq4Zpb4tjCC66V5M1Ub9uSTpAiVkwvbY4EKPXGSsVpceTEVGzhLjvQeiAywK7hpeCeGCc",
  "key19": "2XWjurw7QXhaUvqEccnFQVHcx9Zbs9kzK2N7kNGpDVTekLrwrvU5BiScwRArHZ52VgKhD44KHDQSeSXMZ1fUyDfL",
  "key20": "5Uoqi9d9yx1FTHz1RYDVqzNHMGBwGPjd7VRSwZ59N4eca4zLBksAoAfuWipFTS7cW6kXU7PrUDm8ixEWudtQpZqA",
  "key21": "5FkZpGVEueFNDAkfZ7kGU38QDWcA4MYRvbYg3sXkJrWdAESXzsxJVDyQuzfSwPnCyFQHcB3kqXGjKDjWg9ZkeqKU",
  "key22": "4936gYPL4GtK6dHibHo89h1PnAZLBDk165TdMbwpqGGNyQWDw6i8Tyuyc2rqxn8ZxY2orZV2JAFabBFQ7PcgHk1p",
  "key23": "2vsWdgA4t6Wwh1xT56wYQCEffWdjKrm6qUvVVG2kPmKSkc6thGigCcJCEq7XrYh7rSUuVobG3h5suMNbovNGrbC1",
  "key24": "5mhyyDGVn2ahfLbPFXBib7sWtfdBGoJgc3JMJ8Da1jdzNFzoK9G5J1oh6tbs9MxssTnKJTHk9k3KFUx6pzAwEL4D",
  "key25": "4XPjrskz4UD1MogAX73356ufdSGgd1cWn3TMyAPLzXvGHKDkAeiocJyerUF1MSjh3vg7GUH5WyfrQsgRe1jL1t7F",
  "key26": "4SGtk3hv5LnNE8oUtAhwMXeUJ48oE27dCRBFut7c63F9wuWL9yP2TP39Hg8rjdMDy5VxRuYqLSeXF3YkTMMB8gBQ",
  "key27": "puN4Xotj5UHX4MEZfxVzz4C5k68YEiHSW9JdiNUGEKJpSXNQ4kLPAQTHZAr6LtEDdqfAxaCpQQ25XbXoDptaAg1",
  "key28": "3U8m9C2geT6csuA9qs3BaYP38CejjCbBDWs53QhfMAnye3TzfzQpsQk1MzXPYWbqixoAe4CbXNnm3B1r9jW9DuYQ",
  "key29": "5sRJFBbcVZE7TpFnBwX1XpZPp2ifeo2BFSbBuThY9HWzhmepfvgpcXutdfaKoVEkZFvikPQxBN8KrEN3w9UGsSNy",
  "key30": "2zFgRHxCvEHvoho6EQCFt8Y57jGqBf5gYRH5ygXYtiyUBdSoJr59qftQQXw2BNyvz9nQcmoieswtuufQG5onH436"
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
