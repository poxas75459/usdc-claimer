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
    "2aaPLq4Wewj3LQNg7RdD7g8HLB218yqTA3BB7aFs9QFNfvr7YkH9mfoPbow6G9B2DRnk8eGxiukTRqi8reiBoUer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uaQcyVuAJVaw5y2aFhkQhdFquh6h9U6iTE8uExmPUkaVeRiGQW8gzTQkBwdMgErV1LbaB1eixhxMDV9R637SAkf",
  "key1": "4Tc9Wc42bT9eGjhfLbwG74hkeYc9Ndug3TwWZkAgXMGtFQ6cXeZ9aExitKczxEpygARCoi6PmNPUDad5p5WJfnkV",
  "key2": "2cp6LgQEDwaUYGukAKKXRmdYsyfEtp3hNyFdcYvvYXtCKsCha2ZSEWR86voQ7XRAc8rGxxJ3w8oXM2UpcT2C2jD2",
  "key3": "2ga1AGKTa5JDoDypcPPQdC2oA4VZL9bWyMNi89Pxr9s9HMT3qTzp8EanbpDbgwC49Jg46fJyWtZFBtoQRLUBiziQ",
  "key4": "3sizhBijT4PZXbKTi8Q33jmfboKQntpQ8rsVyFzvpfiwuFNZhyDaYmgkRX8BPrdF9wgKRvnyc5GRShrT4MedEcGC",
  "key5": "4L47Qq733YV22adMy6zRo6nFhcPTm2bZj7vVniXhQGGY4bgfPPcnfSJXG5FhTJ6UrixAiFzBd9Ab8jiSQTV49mcW",
  "key6": "3monTwReutnh5U89sgh5R6nJvHseeKvuSCVPw6o4fR1i5264goXKNnj7nukuoxC8jwdJxjovKxuZi9nAHCWPLxrt",
  "key7": "3ncSqZEHcgs8cJ6pHJ4Es8GWXnkiybX28HtmC4axvP89KWfmUitv2krYX6X7DstuyRjhxEXCdZRypzJYc3zypKV3",
  "key8": "4bBZcoKJbBQtzqZQMMpck5vnkGnMMfRZeTijynEvrJCFXeKxqfTWDAnm2pUETy3q8UDe5JmY6vawYF7dvcug4aWX",
  "key9": "2Vc4f1wNJVjHhpE39AJUbSwHFFmJ6HdDTVP99MSk5ukNfHpCzAzqgUr6e4rZMHGhWWMcGx1QE984Ut2Ag75dh4zP",
  "key10": "gMuWsjhpkDVfVTG3QuNCKU6TZEFEFCi8YSKpzeSLQLwXsRi9sQqaqPYunY9oUsw97he7mrLhEqYvUXom8AkSxZ3",
  "key11": "3bc9kDzfgsXvmsHBHsotaxdy8YBGnpRxdzppRJuXKuccsbeSK2otHsBGypFA7NrCysBWsBu43VbdzKVbbiFiheC8",
  "key12": "5ucGSHKTUFts9z7Esoo92cCTRGCexEQh915iXvjVGJ7pX64dQFeqDBdMULAHR8M8sHyUAwZvRFdpGJEz27xti85t",
  "key13": "5EnEuhqMgY2rr2RD9Xb6SufZkASmgWPjJtppa3g4ZYwJApPPpQtMgdqSi1dwm9eKnARc95X91ej34UQnBUsQpwDz",
  "key14": "MpzFsvZi8bQ1aKmnsJHa2yzHG3fGBgs1qEKE9yhd17FtuMCgBvu92kagDC92jsYaLu8FQNTHZBT3SGwvMT7kGpq",
  "key15": "45ak1hBrQShds4YKdere2H8H4mXv3c2W69XDTe8SKVqJTBGXF8mSyUuoqj9LtjvPRUabek3f3ZSAHoRWgLx56BHW",
  "key16": "3xQrX6hRiUFmrGWdCRDrtrpVDXVynhYgRXdbybpAftnCAV2wFEiBM6EGjP8kjLNxsuM8nr2MBU6PPE2LPXCfkNUZ",
  "key17": "3XwXsLW4ow7kEZij7TtetuUKVks1otYsdDQsdhyqrBoqT9Rjz5V961DTPHeVFqoqEws1vvw5FdfcFavNthLKaH5p",
  "key18": "67RSwagkov1Nrb6eXLaHHT22SEoQ6nSgAZRs8x5jVuL8FNdtDGCGK8yRGC1fVRRjcKdHzPhMuAN7LLryuh6TGWPK",
  "key19": "2hUp39jfAbRPL2PTNSyCMTHcy3bMrBNVwuq3zJrmYqg2UNbPBrez4jocURmSgrmnXQZp78k8kBPDJEECXgWriWQg",
  "key20": "63uKYR5cTq72heFm1UWwXsLuUDmNxtufhyvrLTyezcYjmZY2gYjzL7ofsKJMbVhxzvkHezwJfP1Xw3YxKSsxJHee",
  "key21": "29WdDZwGdeYUMZXNBipzpxHwMGiGvMACYF4yWVCQsYT5DUdcJNUHM9J311RB9tKeBmSpgxNU89kfFDvfLsnrH1aH",
  "key22": "2aaWwFtp33SpQXE8G8uW4d6fdKLys4fUQ5EoHBCdm359dnEiGSe7Ts3qBAkKUcmPoNrJNergZKJuvTDkoqU6smif",
  "key23": "21qcdKL4t3kfbZNwuJEdptywPUQuAd5wiEhP1LHZWVtQWCcUGPTPADe3TVH8p3jZar4npKTKg589PLwbfVP83Hqj",
  "key24": "5XsNXt1jep8jMTweckmFL6thQNGuoj7my8fVvprnsbjsJxqtp3pVJ3UfNfXoF2G1GHjJE4LoFrfCswv7xNwewc9u",
  "key25": "5JunpzECVNm7pERUfUeHjgiigGLeHXqt19k4AUkE7pqy8Gg5ULEpr4b6JELcGybkhA7AUWERGD37vNQRMjfmW1xk",
  "key26": "4uqpje6ta1rGqUiowvZkBfuuRZJP1JXMj3XnuL6HFRs7awEYUrkjwS7Gks5QHmTG8GHH8kTNUJVJdsQWdH5JuAkg",
  "key27": "4ViL1ZnfHcryK5qKkw5jhSXvSi22f4P1ZkSQWZ7yRKnS4jcwFrVycP52Yszbv2stDuDzPmYfiGtJpssf9ru28DEJ",
  "key28": "4gbScNgjKuRSWuJxRKc1xuJtrAi8TaaQLuZkFim6vkwH334K2M2Ka8jSYGFRS8RgXqJ1qh3k7t9n3FMBETqrEYTW",
  "key29": "3kjhh9HQ1M8CwSNoYbkDGoKkGZEDVLE6dbftPb99tJRSduU4v1FdeN3XS8YCAnwPKTaUmzHG1s3eGBavuMxRrqyE",
  "key30": "2wczD2bmkbD3tsd7bHvZm8ffvxWTyJjHZWwcY7WGTtzunLFEyUhKVMBbjTJZzb5NKBVfTPnM1hAuR785519SQXvi",
  "key31": "3YjMoS99jrLeaMsMPyc9h3rCRYrK5h9ZRfvdecHjL86MZW2H2gmko1fZrFJURpLGZK3UcXEBHTxNJYLEWD56jA6o",
  "key32": "5wF8Bk4is1UxTwRBXGPQ5fij9ACM4hbu442YZJ8gdphZsngwMr4ZME4NzAJE3EevDUtmn4ZSj3mBQy8JPaR2pqzW",
  "key33": "3qhexbT4fiCLFhquoHMT83gtz3k8VuBVvBGcT2xpRsv2e61q3MMQCey1iw8DEZG8p2eQu3kmqiRBnU4QV5SLBYrk",
  "key34": "4aHNiYprT51G77umEcmeqM4TZcPqddHqjHCr4weYrF9f7NoXM4U87NWyaDzy5MtasrWbgGFxJZoQKu3Nr1nZ97Hz",
  "key35": "3fnGmvTqTMALDmBXAHkKV9RvenXVpNGdBooz48qzxixrNPZ6tnW2B1ukUqdfRVTG1QgPXKdTguqYreEaXJgab5Bq",
  "key36": "37dMyim3oEMSWtLEBhcdAYfMGrV6A8bEXCtMieEhnZ3QKjNETNWMsPH7ZXmVD67GWdapeNiXd4Kh2NiEgf7RSV6e",
  "key37": "2TQPAoterGAgJfCzc7chmZeKWtK3h5EyQkEbx12spddorykx9DHdM8aQXCvhfuMhVnxZnC5eLWiTELDujRrxm2aB"
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
