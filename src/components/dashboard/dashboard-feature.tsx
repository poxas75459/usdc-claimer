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
    "5PkJEYP5oYVVbydT4CtLNkfmPp5okCFASLK333ccdqPrD8jUunkcZErXjz7RPfFVhsPYaPMkShawm1rfaZKNRoKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikzqrn6eapCng6tZdPpzpWoXZdFcBR7Ag6n5cP2jQe96Z7jrYUkynd6Ei7xdvWpDM8sdSxy8o8yKnbxHRLpgdAb",
  "key1": "2JLPpMdjdkGV9mA9XZDh7yAgYzBD2VgEf8Me6wWvjrSqcNJ5gr4cG6CYKajgqEQB5rTqskSzHN857eNK1sBUaTu7",
  "key2": "5hwCkynkfGdjbhrmYGCjNR1etKkFRSYLc8UkKHM6rSiAXqwvyN4fGvkYVByuLoqzRkxPhyAV1ZYu1du9ofNPoTJP",
  "key3": "2x93xJezb2QUMZGAKokJggxm5zcjUNgFXJZYR6UDtwZcgqx8wnbzBvpaxWFDUW23aVWVdnagtzM7JEWakAqSTV6E",
  "key4": "651xcccXXXZQUcstgWvstXs8Nm9RWEXjUJtFMWudbpEKDLGCFkB316ZHzwcSj4SWcQuEYvKqVhiPUqaRFGCtaAi1",
  "key5": "2DXr29U6H1t1T2VrA12wvXzaHgEa1oiX3cXt7ymdqPhjniMtKVeYJfJir3XYBSuRqEp8E5khndpMdW7zQZHjTKwB",
  "key6": "xdGnZzXz6oyRBTXBc6CvxCYJuNyxZ7G48xfHYV8fZiDnc5xS9r6trQDZQw8emhch47NyxMY6CXfPVAKixPcfcVm",
  "key7": "2zifD9KPkXBPEKzw19xh2EEPRMAaPQ4Kgqn8D6rKChxWLrvkdbpL8yt4jok322g9wxqJKuhfUYsJwdftdkcd6TMf",
  "key8": "41ZijyfKuzEaKYPpkqS41wEm73YE2hkcRw8j7m24YfTFmtqLkTWkDJqG7D86WmKLZkBuAJmH2nBZRM72PT3kK8mH",
  "key9": "2RzRL7uN3iD7F5nHNU8zcQbeBMpyXWrNQPmvLzhm2cJV7qRnBEGzkGo5vrXjkmmNWEofEM76hEmKDKAa6LyV5c8Y",
  "key10": "3Jbswe6sYvvZrWfRB46bVp33ZFW3WEAZj3L9pUW33VEozoPxQu1ucQFtV2skb232CvheUzu1yEHwD1DRvknp6f4U",
  "key11": "2x7q2Kc5V9JpUTZDT5KMsfFBbJ7vRn7jtnPtckwxVNEkmDifDjSqjFZ4naTjtz2ZZRi9C71GQG5GB6PzGeQDtEbr",
  "key12": "52UuMoGntcdTYNtrfqtXRkpxgtUti1vxrcpLnwi31ngXTT3haF5jpYNqX5Uv9GndxqbaV2KhyXXi5NFPESqRPqmH",
  "key13": "dKdq6MZkATiKmfwfMnBgZWssJVKaSGfKq4ovgfw7Jw6DgbMiSYiD8YtDY854EoKozSn3eKKzZgNp8aR23JcfD66",
  "key14": "2bMj5Gucq5uE3YH9XyyA6QUctRQZ1Q15fUBRQEyT4zSmYhrEMefSBHcuyu7YgvFTGVoCsZhqpwd55MgNLUCjk8Jk",
  "key15": "4Nhbig9pg6ukXc9y4RLurF5UHJpZCU4ZbxVRTrZTJrHW43uSoqdnHqFubV4Ydd5PrMe2jawiFPHtbELhk6bfLGiF",
  "key16": "3SGDyJHMTPRzUNHkwKZdkWFPgEM41UPqWZ2ZKRyz3F44MAe8VzfSzV9qz9pkdbeEZYmBPencrrdqK2ZrTotbN6xQ",
  "key17": "2v8hoLyuuqvNeYsvsm8jfXEA7obD5o8VwATPC3TySgi35BKjb6RtgPCMtyZseBRW1ynS48L8wW1LM7zVX8EUYdHf",
  "key18": "3v8SHr2Wc61FD9GWQQsov8KXCzjvrjY2VFfNVheAHwuicqARVAbS4Zbj3S74CGSnuaUtL3zomZDCSDkYyrkVDkz6",
  "key19": "4GLeEiofJGD36fq9D77EcLmc6bqEx9i1jbv1zVqyhbQSSb71CSmiYw4wU2uXbqyGtU5Z59mkombwo8VWLjtCKGF6",
  "key20": "4zQXQ4gcQBot4Z1JZXGkFgXVU6cckuBGDquzsMxQnVfq78eLSVyYNRcEKeWez5sXQqK1FLJ6xxjqeSBVe94yw5eU",
  "key21": "2wamePt81FNNpDRzXyV5aBD7xv8UEjAwsF6ERUUDSkj3yhrJ6SkoE3C4cYdNcb27ZL2mdM3EgQewnRwabhESAAAW",
  "key22": "3zahDPLebqNqPPxXBqjDcnYU5jaupjS1zHSBxgHbQWojQgsT7UnC3nXX3cN1PNQ8dabHQuRHpRQ4fjc7F1FP4h9K",
  "key23": "4HuLCAgb63iDVQM9m9ESuzPNggxCUMQdn5A5shXyBPg97kFLUfkKdRAM7ZL1TxT28HjZ243dFgLGL3cWNoX1koBy",
  "key24": "4LwE4MkywYzQZX6f1qeu1uTdCwfDG2KToXZmKphvw4izKhVYySqjgWp9RprRfPtRT8zbhpw4EVC22BLE2FXsPHTG",
  "key25": "4rw13CoWxtarRSiFqwDFm9XSksbKwvehixgGc9WuXqVxthS6LwXRPaXiQnDHNauTHvfK3NUGdc1DM66LzYEveDP4",
  "key26": "931xk4PUN1fPZU5vSNWuwDnFeSs899z5Zi5HZphzR3537teCv2csupE2RiL3Dqy5Co1e1oQ8Vb9TQH6s7vSbF7k",
  "key27": "2m8jsyX32roRGVJpjxWSzLFgvGy59wFjqyYsZfopaXrRTuxsWfArMsK7vJPXaGeAZsWrFX6w7dHzTw2iDG6UJ718",
  "key28": "2uAJ9JGX1KLVmYvYnPQNcHGPbTdK9ZoZku3qNSvjti1mBsf5UhxHpzCjgwuD7q32Qqe9945FWGtu588yXEEXF9YR",
  "key29": "5S2gQeJ2DhV3MdoemTTrABmcw2Rcuw5kMMfVoeJhhCQ3hEQjjqu3iLZCxDT5BKy4dk59iJeiHTBdsYBUPBmn28EU",
  "key30": "4duCydSqXwP51ayXjNgQFVh6Yk76ND3MJFsukAMUZ9TeTwJpuTDKgyXBLCoZfYPE9XhR2NkUHQ25xmn4cNqxWqcg",
  "key31": "2GC66DonqwNtA4cMjvGy7W3heYd81ULxkxpZXAWhnDukv9wy4T5yxCRcBam2oHkvPcmCRJDHyctfg9UbBDrSAcSy",
  "key32": "2y5cB57KwvZiXcNqGxV5yzEJcGHK3tK2uJQKFbqw8HB96pViLPRwVoCmrjwdUeViFtmP38yWVzMPYqG4T3DnkDTK",
  "key33": "5hVzYUHRQA8bmMUKeTwnrREUydAiXaLek98WF2SmZHMmXmbbDnmmWswLmUhc3mHBLmhy9H6XEah8eFpzQBnFCKb3",
  "key34": "5MYxzuyPpRXMMbMyBE9nQBo6X16BGSUumUufNeT9tBVEcqfWuBSz1HPF83AXDVtkr9KA4VeySriUVb9o3dCaYg11",
  "key35": "4YUSW6vdzXwZ4y3No8YmUrjxYjQHvN5vtt4fJkHkhPVs27r3iZBSqurnvBnirSrVwjYiyBrxiiow6PVFLWRFTK5D",
  "key36": "tbsWusAi6twLFov1ixDSymA9oXFFZ1Bh6gvHSZ3L6WHNAteGM1dXybyKffb98mmPKFNEKwMwAHMcovga89eiYzw",
  "key37": "HmasXbpF83v6gGPq4cmQEL2mXgfgpFy6m7bzce2yeckaARbrCb8sR9VXfMa3ZVbTYNBruGPETW5BU9Yxuip12wq",
  "key38": "4NVZnDpyW1BRmBN3Mm8zC3Sdg5aGdtNnZoq1soNDYXZxC8aEKnP4tTBNg7tA2SzhHn3PE2t1mJPdgZ7v4W62Dwtw",
  "key39": "5BT9EN5FjP1tQVRf4k9uGU5cvghWp4oZ1R3eHX3224Xsv9EPxM8XBoCkFhqZPZTCqDPpjx2KRLhw3qnrSJ5otF2h"
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
