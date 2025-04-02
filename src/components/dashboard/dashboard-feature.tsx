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
    "51VcMAHG7Gov1VjFk1aF7P1WZAZcEZk3R4L2m8WKTSqEZzS71WAhGdyQ1uB4Cifc2F4yw2iojRzW2BdnFhDrTvW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPkDN6h2Enj9WxBNsAu6mDTUfv9rdU6HDRxZn9CEdSDJvrv8xJxzDgja3qvF2sFcvrXEV3j6f1gctwTJqLz43X6",
  "key1": "efLvXvTSyqz1gZ5Z5qbt6gvqVWU1A9hTTfMhbLPbsfLhRB9YFuonsobYzmtXwX2v3UbiGpBL9uELeJ6xsMKBxpz",
  "key2": "gxHTTmBMsd2XvfrJdyzfCZ7HQRENYjkyL6pdDhAuanKyf23Z71rhG84efnVow98r1UTPRBqgxCdWRfwRKVwCG9k",
  "key3": "WQKDGALZwUJBkFTauhkoPkggScdqpZisJBaG9E6BLXXAakkwZfD15XcvSxXPRsp18FswrbB1EMySDgDSJ8LB558",
  "key4": "FF7UpPHYDQV6bLmfLaptuksmNRXFi9kxwfZChBfMsHMVpWRj4MUWXXCvzC4y6qC2oge4jNpgfqJGMrkYBzVLcVU",
  "key5": "4w3B4o58ub2FTBr8mTLdLkYyPSGTQJBF1BAmRYwxdZvAHRSuxFh2qhsdWUUXqRAJewdZ4YZMp6tbA9KtJAWhHkAT",
  "key6": "33nUhPDD5p6uERvc2tQre8sHeGgMFvEmE6JNA5LSXgXrKhDdCuyZeErVMSuEz9xkCzY4W7ysossnpAfUQo7vQYVK",
  "key7": "2UAeLFEtBQUP6BvZJiP73BxZmXedkFToDEnKKwxRYA64sWzqeaQFCJnzxQcRfCHjYXAtuDxNo9MHXkxfq9Agiw4u",
  "key8": "3hWafZCQcgU47YiMR5ta3EyUPk3gwFPpgbYZD5sNxedpUZzajuob2BeEJatpDitbfVZnvVgtPVvfAFHhkAzguQNn",
  "key9": "2sCYLmZb9EzJmm4MK7s2bV1soh52xirwhWYztDNTimLhEK27FmBWvS7DDaBCC6U4muAe8smypsXkDmmM6eMbwBuU",
  "key10": "3vt99Teo3ZFJhEjDsdWV4SJfTwrbn5PQpjQg1jyMZdeLDBeZkAbPFcEgz4PPbHCkKkS5KNwxnvTxnsN6xSJTNRbg",
  "key11": "552QB65vRQYSsyertaqynsbbXbaqwEjTorUKQFzUA3HX6FwhuxFojCwHnFkMBJjLot6HzHVrMmTmSLDc4TXVKh8S",
  "key12": "7KQYJ2vexoqjnMnoTubVipKNj1Qjoxzh6Fi4jEQBQUKhRyRoxfG5KMhjbLyNe1wU318s28QitKQCdsJHPapWpKr",
  "key13": "24LWXyjWxij3MamhbPHVPufCFe4PcHXuyLCNAFnhbmYBuJoLHYCbYMVD7CiQWs9Ub4yKVn9p4G9or1FnPEEVVCMS",
  "key14": "2jsoYif6bruMxPouLmHmhJaQfuKQigQRgKgxr6yb2C3VqRghVC87xgTTXygDSVLndVFuLqo1ixZqZuoCsB6j2Qk2",
  "key15": "KCQdtMsfHR2x5ybSCyGf2G8M3uzshmyi1Py9zQh9wAcnYisbvKcRpzVD7KtPfmfEbP27V1xmtEFgK1Sc86Hwi3N",
  "key16": "stbj9cWm9UnvNqDkmDYP1puTZ6jpMoxL6rmrW745oemAnZ7LYo2TA47ovdkngR1sQFzyXZTyvLteSAWzUfSMRuQ",
  "key17": "4KmY5zgrhQo3eAJa6Ctcut3dp7V8Twd8Fs7whtk5sSciHqBVB9dCHcQdoXSBGGK4q1wDaTC8etisqgZqJJFqKUFR",
  "key18": "2U1McQb1UDFr2RuR2y9snDeqjg9KKp6xBTfQrNKTRxP11VJTcTpRceYZA1ZtpdkTw1cQe7YD9fnVLyU3CkohWXkg",
  "key19": "46EzBFuPJhzYTSuJEV7PYxWNnmYgwK9fyATSXoFfqLhPUw5y9uTxcemfPgWytBybwqxLPzYwXeuvaNdFeFKz8Nw3",
  "key20": "5vwpB9tjxBdQaC4JX1vLNecLjde5yjNVR2MVkMXnKnWfDxcfRGR5Wkd4vsgPZMmmgWiSsWj8s5gKFtSc1Ca5UGyy",
  "key21": "4pRotrkr3bApBcGLrz4hZJyu1fenqyzQxzbN1xh2jZ7r4KmxPsRsbxruESyeWdS9iUbdsmjfrzG2NcjXMjRwJQcD",
  "key22": "5cQF9M3W5LiuxZbATgr9kXx6mUHEf6CtW3hKoaokU1nJt3X857sTRKBQdxNayhJHYzARWqahBdAoidracucoNT44",
  "key23": "2YYWEgoxGi7iQCfU8rJy53nk3UZR3yXvWNChauzSKfrxJmYP4ERfJvXBU3kyd4cRksxZBjk1Pm6zJvhFbgFo9U3S",
  "key24": "4BCKU4Q3QdniSTSRUxK2eKGZdZ2jTP4fi7dYwkSXuJ3hKyLsksk8374eKgf7ocKys267SMA4FdUgYt6BdZcSAAFk",
  "key25": "4qtBTPLbJvwxZBPRGscD2Ru4yUESj1jDg4JYM7g3MNWssJVJgABGSrpqFED72y2y39SdUBVzmFAzeCKz7W3xXDKk",
  "key26": "2MaPHtiMoB7D6AdCkz7PMwzReC44WMFQvgdNouhfqsk5n52ffZaiuxay7CcXgQWC8n23bD1hqpHLTVEwJB5xFsR5",
  "key27": "5dq5tPek4Mn2b6cjbEjeZ4eBF3XvpcdmrSEMGQHPnwbadKLuhc3oFFWbmv992qv7Z3EukuxXmHdPPa9Bm8pqK7my",
  "key28": "khTAwzyZngMdf815VhEo2cuSPqUzimEHznmUrYtcYcSRvg72V2fvEWJzgobT2bgGbWRwc3JQy8J9H66WExWqZAG",
  "key29": "2i9P5g6MpUiMWThXZjwiA6crfoABiQc43WrbVHV9Nv6dQMZ4J878dJRUeRJCC4Leud3UrZ8pcGae5kayQwXYTUZr",
  "key30": "379fVMWbqHrFiJT8wtr5ZqnmnTW66UPeTmqYX2sskA8ckGdZu3LFn5GX5MXcSxeAkstqwRbfFweU7Ge2DcSLunqM",
  "key31": "4vpuNqvjswmcHzaLC1UoRs1nEUhyt1UmgLknkwvvXQ7FDY5SPVp5vrPAsW2Q8vcUyWCm8NgWmqxJ4faMDCEFr5tp",
  "key32": "2Q91CjDP1jaPVU3B3sciX6mudHUue946FpQh82eC1Whaw5tJTRzKxAQ9ELgLKBE221cfnZreQqu6Rs4VB26o3615",
  "key33": "5qdeB9L7oqoNjGEzCLenFtPPfadMUmbRnCBsLd6rH3EpMXdySC14TWHdFjiPcmGSVxHEYW3euhAG4tZQMSCbnB2f",
  "key34": "aNt3LYQCc5g1ohe2CC7d7az4icpWkNy9WViCqSjxYqdHPD4XyNHC9p4G6RQEtvCttmkCx9ycM2EB2YnQU2DT2qq",
  "key35": "sqLz2oDyS4ratj4zPaDyuWeMnoBJ4EpUukW8erceYB5Ti8ZAeTN36JPGMJrRiwP6UwYHTuVNoL5iovawUae9MQg"
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
