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
    "4JXs7XveYioEjyewEHtmwVAsLHG1n4NuGH6wk6GdMUiFErDF8otYcnQggeomR9ZsVffBMis6UmPZsX8dzvAWiUkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZrpSxPLLSZo3hU4fuwFKpXnvuYDs99THZtMZPBdjtrh2YUR9haWsedhMxK8w6YytjYJMCw3dgcwmKMpc4SRmcx",
  "key1": "35Q9Hx3ytc81C8g6Yj1NTECNTZw12aiGG2ixuiPnmPKmSxGG2XK2A3ehEmGLP5DLCaNKpWAqu1K1YNSWf3VodvKx",
  "key2": "4dGyCmq2XqM4HmDNhbqXosiDWsnkNwLL8ME8kPkHngWrmJicAfCntjPWnRpt5Yy7YKPR5iYDsGDfBZBnUJJjxagM",
  "key3": "4WVYKnzUiPRn8juCwm1iPfE224xTVH9Yoa25eG9DJHdy7rZmNPTBcSktFQT1iBQp5hjpYkD9HzKC9eUvE7TKkdpp",
  "key4": "2Zfsvwj2aRmuzkRBy1JKmX3rydymd9kHzkdbquC6RqPJbe5bXJCRpNjAMwyNhJ6ofeCzQx64nZtpNHus6gcY7bEF",
  "key5": "2TYwRRdewovkfJDTJJCX8vLjbBha1U6mqSxY3qeK3hznYUTdjime9AQJ1SE8555nZjt1xSJ2a4rwH9CRPcUd6qJU",
  "key6": "F4ynHWDtwj9udkg3F8KFpmQnFpTWmRYaMC12kaHxufgJ2sCLdHWrfPXnZ64y84sz7qbetRjaNvQvRKn2jFSXj6r",
  "key7": "ioCeyiyzrnK52G2yQPBA6N7it3LLued9ErmuPtLni9LHqMW9t2NW5B2T3GNKNHsYibJcoN6Qw44UXUb3pZCnGs8",
  "key8": "xRA5SJ6TDVr1w3rmQpqmNYVbsfVrzpnh8jKJehKwrgykRuPaiAfGxmRKwwzccxAjXQRkkKKSe7CtVy8soy8Gd34",
  "key9": "41kTfAuVvWzwwEjiZbd39S8PtjkYo4ypXjoSuLUwnswmCihULks39jtpxV8JUCZ45rsFXNp56kDctEGZeydkvVo6",
  "key10": "4AyXhDVdFJvnsDHj6Ht3aop4L2gmiKYei3TdbJoV4mVRwWyuAhbMriNMgoJ8eQgqyEAd4Krv8UoudZmC2FWuosTz",
  "key11": "3e1dQKAAtFX1AZo7X23xR7iYEykrH47WR7DdVaXe6F6GKPwhi7DQbuQMQDk3ZAe7U7hW1sBcjVHPpUhU1cd3msk1",
  "key12": "5JXoFUWuq8QG6VufQ3MGKVDexX4m7LboPUy9zJoaRjQQypX5msMCfJHU7pPBcwaj3S7hpyjg1fzhuxfGUPyjci9o",
  "key13": "5ADSxRNBELwCiAogkot4zBx3UHBshDmj6AHmk41Z5hH7ZzZSPZqHyNa75xPMqhZ2HKRz1QLztWZbyG9bgGYsyWxs",
  "key14": "2uupS2XzLs2VQSjs3fQfAuFxcoR9CERfq5RZWtMyvoqgwA6G1GV2KdTFa1LUcNsz2kaV8pBhj1KiXrndcVNWKuRG",
  "key15": "ACF3AZkwEMmGYQAfzDcpUpvDMJPeorWpo9vm8JniRAAZk5mDApGvaaPukzKeGzwvhZn2fmCQuR9KNzaHVdPdcg9",
  "key16": "5oHbVcmN1PnQfMkvL6KoJv2FxQXnm4ALnrWMAb8TNyzzwzD23iPYoJpwjQekofNNDYRoy1BWVMMKJjBx4qF5dxag",
  "key17": "4QdugEEd9wWe6PdPMsjTQhu8peoEtyZGzBXdkZSuYWxrHr2hFFF6uptzB3Ui2d8d4SBwKnhkEdZYyQbaWYSUNTKE",
  "key18": "5X16rcSXtsWuF1p6bhsMqYXmHn2kBftA8WSSHh8ssC4twcPxWhPkggwV7iyANGTwzmy9gcZWftmuPSjFd5gBAsfu",
  "key19": "2CZLwPPmrm5wZpAujkg6d9WPedMXqUdmLywQoXt7CsvaSaGPTuVRfTaE2DAMbzNWMB2T328jPDRVBMGKK4MFGqdG",
  "key20": "mYk8xGZ2k3iZ6WMqTQGfPy3Swuhhp4YGxkzxMDmsNAZ8mR9AXit1xCw47DNyu9iY3GqMqxa9v6fSXZbjLzHaA35",
  "key21": "tZ76RCEvsHn41WB3pjeGyh2LrYYzNorhfFPNkTMxK5MzvThn9iDwAJG4HB9VAc3XCLWkgs3u5LVyeZb8Lxjvwbx",
  "key22": "65DhZ9hgiaofaGHFBb14ou9ySsjm88dv9U6jpQMbsekuV7tuRUuuPTpDe5npPemBVPJrzymTXEv1RHNUyKRQ32LR",
  "key23": "5pEY1gL5FUJNMmqEFDATUurR3hJ35v9rKGzkYFQNzY7EE6N8fabGhAuHXndLX1w7rAv78RuRQsLxgBRiANBP5Vh8",
  "key24": "3hTrgHD7p4wbickaCquYbMafg5xk41JsAYMgArGhjCf97CQGjMX3Wggz5AJBqZtKkY6bvteCMM3mPugFYtUZVgD8",
  "key25": "2FRKBc2grQcJAe8ignHYfgcqkkCoFTSS1Rry3wtY6CWCZBF7GZXtMQWeNEwVgTYZzB7rmpcdNR9VMiuQiLn4BmhZ",
  "key26": "4YTQJdaY9e9WvEsdxogJKVkKG8Vtmrdi7UADDexESjbJqY4fCcrUL1nbYwivErwdhXehxAPJiqpkHw7qoXXpGPDa",
  "key27": "3TL6PeqnQTL2jbzNi6UEaqo2q9W4BP9FPafTpvpchvrPk5K2itidZkB62GZcXhBuBS3sUxZYBPGwuubxYAxgefHX",
  "key28": "39tSrTYSwf5sU1GgNso4vVdDviTu6tsQpN21Zpd8yKdpRfPiyMkFQx8ezY2WCrfh5K5krniWvDkFL6cfqRzZkTXc",
  "key29": "5H68GVazQCS1FoKwTCEPHjqTtejxT5XDuC12etStpuAexnUXFGWQ9JEZkPupo7m9wDiFriRWDU2SUeDxhkVzZRfJ",
  "key30": "4pKYCJjZQK7V8Ma222bJypFWSvx2mczVUhswUkqmRAztqhn1f2tVRFhF5x9jTxkmUFLYhh9r3iEXfUmpE3SyNUEs",
  "key31": "2J72goq5TonJAFAcyfti88HbH173ucBvXp1Qg65pczhPyPupe7kW8xaCXkSV4NiTFfh2wQjTQnfNZoQSSqgZAqoG",
  "key32": "oUAT2sW2PygUGQAiowLSEqPFk5cNRvCoSo71oN9p7L1V4fTHB6cMS1ENFhvsky3zHL8rXosD7DV5XEKRH9ffewT",
  "key33": "4Lf392wKJcvntQ5YEYjc14xvMQvSo7kDGFZ2SThPfJZX76b4t7yaARMBSftDs8HMmsbhTVa3Lg99LMEYnwmukXd8",
  "key34": "22Bn2groNSJa6yGmTCwQLB9Ma52ovNrzq5cdJfxLryxBcXKQMb8kqc6kydqFktxz96sZuT8wu343MEHDUbJSdHFA",
  "key35": "iYbbP7kZEpcoaJe85HyTCUFfso9nchJ7amkMVLCBiFRUkypijBZLF3s21TTvjZ5ZP88stTuH6sPzuayEq5sEUJX"
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
