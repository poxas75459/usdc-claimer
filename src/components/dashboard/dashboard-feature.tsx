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
    "67eaN774jnLGFb1V4LfZ4uemJUVrqEU2y1gPr2jymWNbpUMibzdjbpCGCGht4DP5HXDaMR4z2SGUsz1uMg1P7MZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r69Z2x8kfMePgo9CPJkSD8EgnxBR6xDWLYHnmfPrrDK9AsWkwR1rDZq9pZD1aqfxoLmpthVHmqLTVkeR9oYHwa9",
  "key1": "5Bc8XkuHaoZMMSNyJ12h32nxcH4zjg8RqxiBNbw5EL1eKs9n8J97DLudvz1P4oQVpu9brQ8iWWxxhreKS6gR9kHm",
  "key2": "3h6RK8mY4jyR4xa76JxDz7JMkRCtLei4aXSgmZqG6TYShjoxfUtrjTPiPoAqjDrpkqsJuuAXTSGQ7uVv9jVV6o2F",
  "key3": "5mpoyMabqAScxHhyJQBmSt4R76bJ5CUBH1JZxan9jyWyHaKysd99vWCq9MJssC7jRsHgeWAgdnePJvN7PDVdhJuQ",
  "key4": "2YfPN5BC5E5sQgbxK2osDyebAg6o573cpNejAuM4RdozBLgEn8NnahZvFvR5Ju3AA6MjgWKcyVpRydQSFLLAvjek",
  "key5": "2sEi6Hxx8WeqHmw4gEAoS7TnUPYf8B5FGHBA1rGFrzdHdAHNA83b4mGvHsLWJZ8khs7bex6mZVQNDu4qBjtJmrYm",
  "key6": "3MHnVay5D5wMNk3wvUrR9fU7vKAtzWgvsiUCJKBYRSLeTSJrx7fKgEoQXtieneBT8ziQqpMNmD933xPCM9YJzbDG",
  "key7": "ABv7gSqAMeXe2iVbdQmh33ArZDcj67AbEnQaKnHJyeR5SZbHVoUgJg2KDNjimdaa9XmA31KjP4vWSrpvTn3bE4y",
  "key8": "4Fc66P6tiHUcue2gjz3bRcsSurYJBj6Xv9ZZsyiVX978u1gYktwbCYFdjJ8MRqt2YEnzXHri7uDFCmSXdVsDoJ4a",
  "key9": "3FccSLcZFBJCFuCjqJxescYmTZUjZvKNjDHshgjHuXFhFit8tNd2HJc5Raw9HUQAqFrrdfAHUjHFJMZ3BZiKHYRZ",
  "key10": "3dbVH3CYR9NeWjfvFYAdQ1b8DV83zK7ghM7CNzhKtBSMLjA9mzVnhUGM6jAdUcfe7x5JKthbF1Jp2DDzCwxSYDVv",
  "key11": "3TVAjyKhzuqZ1vdwjHWymQKGGoSpj1wH7bfyN5Swy3QSo3CULHgEJ5AreNtsY2jkwGa6bhiarXFPgWwuVj8DkwKA",
  "key12": "2wwbj2J4HSmE8zMNJZsAqd819X1PP4nh6nZhh7JvrJKMosBHpcUdHnxDNHrpv4ANeaGDd1piM1ynRsyVae4BKJwq",
  "key13": "2CU39ArqhQp6VfG2RHnMo1cy59oUnMbnsh3pQNP8Ugx6tTyCRCxkCcPG1QzcxLAEvnvLLtgQG1yn1BDgHRow5fce",
  "key14": "4qRhx8Sj62LdhLEp7vCJDoCbnK7Nywi4uavVK8Dr8aSgELUaUc4ZeQjh4MQULFvKJmraSrmvtXxCrBWwjwhuHN2X",
  "key15": "5LZQKWjK7GdciNLM4qgbsKdZoKCeYks58qiBo7YmfNFRN5qhb3xCocZq3idbEuMCAC6PAbvQJmfasMAfuTHuyHby",
  "key16": "xYEdyhxDQQSTErian1RTefu4FmCMj67MWFqkLLoPbZC3axRM7R9CiS9wQ5kGomsPRbhKdwQjqwbw3RXQsSWimyt",
  "key17": "482Wi6iD2oZ9JFQGv8PHW9au9HNKA8jJMZfFUEK6vG5smnkv2Wzifwcjy3SXzehxL1Jmsosr8tHSHScLZtUb9SwP",
  "key18": "3ckfRGNqBmxqE7tLWyHEybA2FomS8KRmTq7v51j1tzusKQvr593PaenghfSd1BiuAj27jXTptUe6HkZVejZ73HSB",
  "key19": "2wgeGr5hKDd15BnYYXCPMySqsBvtSRRCXkhX5gMrPHqjmFWLzXvo4c9oZ4aavwD2YXFcS3rBvvDtefAZuer9nMdD",
  "key20": "VtNZUHDC63Fz2XDHaTGPg73iD7UcRCWFfstsJqMPippLedGggtKoDGBstSJcUqFa328dS6tKsd1t4t3B3h6iHWp",
  "key21": "PrZRV9SoDxBF1F8qmnHZUFLRDScRMJpyiqGqQq6ua2KBdJfMoAvUwg4vqL4KZdS2AnSeSiokjqpkACeeKW6LBJ2",
  "key22": "gikRYFj1UZ8qHnjbLdievSCce8feASizTedokCc6DJ2WBHGUoQwRvAKhXTw1YGXqcXHs6FSM3i2mDyGGEHtoz41",
  "key23": "5CLb32NB9BZSdCZUWnLi7bZHdvfa9d3tNBBRnaCAfmfuTNGtebNFwYLgkCy3gCnNdBfqP1YKEh43xeKdDJh7ZCnZ",
  "key24": "4zLeVryqLCoC15v7SnEkV4eGo8d1pgrr5ZZqk8Rpa9ZdDtYbnFbFeTpuzSxfWaL4nfdJgU4RBUSXjsuNQ8Y9BUwJ",
  "key25": "4ie3YnQSSXPMyLsXFfZbhS4hjEzmgtyrKbA6xxcRSv1xLoKK2kupKQtv42HdEfT1cfNkph8wJzbCaTsoiTaxnSez",
  "key26": "WAz3CNrjhM9wzfKbTAWDWsUAqKeRGHNuhTscHsmdZD1sKWEPVGMYfjNseZ7rzQcHiUnksqevHBhd9RNVS5eY61p",
  "key27": "2bK3djQsXzzczHey9rraz5Undyb4XBzTuGB3Wvxva53EPeCq8ATCi1RgWddqtTUjMByW2DJ3XzU7xUa3d4qW2kQM",
  "key28": "VvgyZ2uQAsiVncPzYSYnTRxXp88ao5ijjPnY96tkNc1GPcrFKkLEC8FFanVjES8peeYG7aci25x1oMYaw6b5YFJ",
  "key29": "5D5DTSCjLKbiJsagkFTp4UZEgaqMm9QCT7YN4UpZLGsZ9ioapRSMhAhvTrHb7zVc8DW5rp6PhnjP2LE89G3VfSf2",
  "key30": "5nGZvkw4ykpnpYd31chBiBEa98CS23SSZnLJRkULbCaUzsmBxJ8SMR5oHcJitQy8FZdJ5dNzUEkayCzeZu3QcUXt",
  "key31": "2LvD5WMRPrpFwhSZBe6MZpDuegtVckpw1ehRFvWbN4ouVf42oFvq6jQRa6sf4ECdf7uptF4q8RbEpEtS7bYe4EB5",
  "key32": "3Tc6vt5MjjW11jYF2ytmoA1dBoRYJmTuHLd4htQbcpKFh22BzXHgyNbRm9QF4ofLCtD8Ago3hpfkyMuwc1s2gLfS",
  "key33": "RZEywtqb1ZLz81kimw2DLcSJPMGSGp15xEh27KY2ropnvpHXYcpgbHtYDT6wx3SktmmbV8t6Q7uaYfSme5rA83x",
  "key34": "pnLMZyVPk7qAnkbgJqntsLog1pgpKZDh2c43zeep97UXy6XCEyzmW5FbAKM7LG74fscvLCybsRg46dtV7wU4kkQ",
  "key35": "4BC71SRALBAwYHnCBE6RUcHTA31ANACdxgwbE9U25mhpw76J1D9pi5QWShu63afweBVcmwZCwo4jaSqQhczSCDfU",
  "key36": "UzJCAYNrKxDkhdqG382B6DS6wJ25Azwu5ALnmdEKuCC5QiCFEFaq9RDc979twouyqDBKXiVoWUtGcu6Nm69fect",
  "key37": "4ZcqSuPpkdUFeUJyFPa5t2EcAhhLMmmL1VGMLgmcmjZwSSgf2busGKvmWuGw4vGgkJN44TvFVgABJCRxqADmGn6g",
  "key38": "3SALALjL7875Zum521N86FiDVkrvGgh1uDDg1tzZJaCwkVY2fNc9v4Yz5gX8DaecCJxsABvV2AEBg7VtTPXMkGsJ",
  "key39": "3D2k4MKJ8c5PTjh8PsUwdqU7EBoCJGG9ZfZmgxFE3XhSQXJStcgvaKA9Fhzr9gTAA7zGUEZyQuNdFXTvbxP7TKrY",
  "key40": "2hAAhQSa522XdTmMouUZoPTBgMGosnxmJfiWMqy8GXpDg51cwMVQqqAdzjizMCsb5APcX8hc9T9Eiij6nYNTSaZP"
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
