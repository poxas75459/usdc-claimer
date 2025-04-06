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
    "3kp3CJK5o9uAUhE2UpkBvsR1CmxYvHup4zfct4yDKyPDLeoGNtf1gRqN7MB5i2sMS2G3CSyJmBUNhMrHazUkW4D7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHWhcBpSh8qA7SF1j2zDaTQFSZR1DVNZxB7Hb242Du7sQH2EYgYGryB7eZLAprJZzrKoUZf62rYFMPisfBetjhL",
  "key1": "2Ztq2JFic1vBTRG3GLJMsZawNWxBf6HSBvdE8uMXmr7CRnSBn4QPTWGYWmxFDrLAX6hCY2j2eMrMxoghhK6P9dpM",
  "key2": "3CPGHnU87s4kv9WLCM2sDQ8stdKWwDbp2Z41KYF7Yxku84oE2Kc731sKWVHfWNbXJ4X1FvjyrK2a82r6R5Bgjhj2",
  "key3": "2JSUNq3rYjuf77vScPLSPpGm8VRX6RSTCZtngEbMWGTinvn7yX9AzrbBKRXd7D8ZgSs8dznuCarv6dbkwf7gmWmP",
  "key4": "2PboTbr2DX3jJFqAsaqsQqfakLpBapyXdmMV5F2RNbPgyFaRUgktXx7CxX8ZSHYZqjf5jFUSHvjpSzXj4Scxgtaf",
  "key5": "TcY7MbgkNRq3nKka98KiM5zpNa5ZV6R1tzkqxVidbfBUG465mkdXZhT756jHGCVCVBjkZBwH73QMMwz2r5d6GdK",
  "key6": "3v6sb2dwSZv6s7KWgvHbyKPm4YocHWd26bGnbHdP5CSmoXr7gWxnaiUo4Z8igk4oyi4HbWNx8ewzLCpUgNrRB4Ne",
  "key7": "4LzhU7JFzUp9JcC6m3J5fLUUKdrqvMTCbfqts2dUbUx3xXztRbvT5sJdddDEGRrJuJsJPM2ohkJACLkC6qv6yrUK",
  "key8": "3vZegVZ2GdC4ZKY9ALq8HWxCxJGAszxuczm2unV3jcyzyNKrRme6qfCHgT3pJUvN3VTfQzymKonyWqXMype4hfA2",
  "key9": "51dpeAd3UmZ7a2GmwgxsCyXoSRSQhDBjmZd6N2AYivEQXha6bzvUNqVujYfueotmN9VecBfE4zvnfEyQRGDfxrDx",
  "key10": "2SbXwPAeaokztv2aDiQWjVbFWGhjXeStHscdoDtAHywxNud4fPd5c4tr2zxc8H73PhXn1HfqdvUh6LcUkM3a2h2z",
  "key11": "BgqyAM2psuyrhbLCPyeXvEUbTfRB5ADMrXgdYB8JkQzBfeeyVgGY3cjkt6FRW21xM4FtFfPp2SSCq2ENbccrdTP",
  "key12": "2HrLLXKG7LR2YiPzYB1MBc3755WzqWDL8NUNwV45W53DKiLHZK4VXqUtgb5zr3nbkrPtW3uV4PcS6z4srhSSW44u",
  "key13": "5LBvXHjCYgysPVg8HaoQFsjTJ8nED2TAPn55qLk93wAmtty92btwwaeEeCwDCrD7tnd3tSXHozQnGxW1nF7S264J",
  "key14": "3Zjau1RYf79vVaB4BHhoEbxzA7QLqTsnePxUSXEFTUgA2CQAuEBEm7e7krChUdkkSpn9mFjsfDaWMY6Eprcn12SP",
  "key15": "4rdaDRqnVJWFJFenHmKCBfpysVH5k9QTz9eRvrQPdCPMhrVRKjDbqnjrh3SExy3S7evobPLfpGvCoeUAD1whCtGz",
  "key16": "MrXjQP7wFcTCSum8SScWvG87qfPgYuJvNSGmakJ71863SWofU5SoX5pGwv9gpfDFW2oFamVyuxi9LiQJgwomYXN",
  "key17": "PUTtnk4SqU8vaFprsvjqfE42cVyNwLwXVJj7kMASbGwZpk69fGWVsvt2D3WU1FjKrKjyfHrh7awaLgw6eFyjkRp",
  "key18": "Dmx6Cb8ZdwNT4j4aZnF9Au2okmNF4LJhwZeL1zh8xQWAef38LuZTEQexmUJHRy1N3NXBZndiEkVf7pFHeTbdQt3",
  "key19": "3p2cq7oLhakt96U9sQjsjZXnh5kHBs5wjVDHFKbxmgXVPe6zGqnqjjoMnnMb4eoBKzGGh8Qx5k9c8adHgDnZPkCo",
  "key20": "4ziP6S3LSJWWRH9mDydDncBxf7iJo8sp44ekFC1hPxY8bSbmR49ufwFg9fbmyyxhhjxPvUR3owDDDWnS9x6PpbAD",
  "key21": "5qHp6SXqSngns96FcCd1Bnye2jbhuNXVTnfGDwtNzzGa7KKbUnqwwJ3TRrsjc5bN7J6nYuCU5pkerVpFiiGDHTCi",
  "key22": "3thvHUzU3DqmvcJxHMxN8BMAreMSWjBYvzFzyx52qyhYBej2R1m1c9xebSFmpt8MEBhD2iwTNNT56xpr2sY5FbJH",
  "key23": "4WkcrLfVKtfPJwmKeUoH13rW3PyCkrXjsaHoSu5x9hZZMF32eMcmeoEiDEE5yschabGs3XSgC1rGprH5ibQ5n6uS",
  "key24": "52ZSqZYBLVw1Vf8SAqutiGvQU67TTYkjiJDCtzCsi3LBSLx7dbzKMTyAVkRhpPQzyhUNDWpNJSAWnBRkHk2ensyL",
  "key25": "25Trai7KPCqVHtpLf63M3sa65bWGRTZrH4b57PMrbRkog42cr6WPQhAa7opgtXGtabNa8XCGGokyJBi94oMUm8qz",
  "key26": "2wst3BKNCBfC5rqBzSpRycp99HfhaosKc2BG8kbLF3TKy8D1c2d3EUxJVNznTCxtrnh5NQragK1MYB91aF9LbJn2",
  "key27": "2ouaAa1TbVxhzwqLnmYvxd1VciNrMtD9ZRZJuS3SabmxwUYt5GPQiba8oX4beHeB25Sfer8jADJ5qzERCCJKmM8k",
  "key28": "4SvCMcZvy5JqynDZUHG6pLo6ZuB7VkNfjnky4q8xiJyYmo9YPQTLiLaKsFu4sXPkfQWdkZ5ea3srkoWTLASn2JYN",
  "key29": "5TsBRbvx7TpAraBfhMJVSnqt5Z8mqsrSZu1RT4qU5W86o5VUBc4d3GD4osPiU33fMtw5YbVjyPRB61F9tJgGBGAp",
  "key30": "4ogZJ6TGSemDa7tAKDvMa9BYvMB61SzCFcx2oK6tysYiUjBkRarneNFWAph8ApvuA1AbQApTJfh94LhS2r8uQWVR",
  "key31": "35jJ3mMJ6xUrNo6WVxYLcqPtWAVqPMpvjrJJKsgv6RgPhakKonC3GcC7gzEM3XcM1ZSH7xUwLnHSUTYSTC12dLNe",
  "key32": "2rr3pNM8azmCZYx46nvv2PA9ikNHzuWsTNKUyAU6ZtrWaLJwNYk1Lygmd4MkPbPSikuZpPf8hiXrQtHBG87y4Ke1"
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
