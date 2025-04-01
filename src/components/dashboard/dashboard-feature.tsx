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
    "3iApukFWGKJgZjh1CNvBx86p7jVXXqP5ddcstxECi49bwtK7ZDgk11pjFNYKJMC7ydmye6xBDF14YfL7rezoJTNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PXxXsCEy6LfmonPA6EmR6yeUGo4Kg4HSxjkWZ8JMncLvLNKDq3wjzeNnTK7DeqWGwr7AWvLkrQgSmgFE6cnRW8j",
  "key1": "5qQqzCUxDk1pW645vGTNjCVAe3m7DyCAigGpeXedyGmxBT3HioBSg5dfYYJS6KcTmNznnQ419mrUwJGWqQ6dCQ6M",
  "key2": "4s69S2FCYTKH4gDQcPgYZPxrfyNtzBCLLZSYTZycNbjqwEYyXwmLkvvk9ZWgqJiKWRE81Qbq6Cr1eZmEsm8S758t",
  "key3": "3HLmtxR6DZCPrGeDcuQev5Thk9yrs21NTTgMgAetrUyW3bPnkk7Q5rNJAiSHAWCq8BtcuC5PX7t17YgfoMCsiK5J",
  "key4": "b3kYmDCDPu7cHPcNGKD7m5cE8tDhCB6iwrPVk2cbnpS9HsdekC7ZLYZhav1ph5pLVGvtChY4hAQS5FdWatLmoTe",
  "key5": "3ZG2L4mHWbupssRYtiRCsDW9jXP5zm5X7qyT2EGjEY9Pp4j3MSVV15sAWBuwymJdFQu2J5BwFcHN4sr33PYKdA8S",
  "key6": "4PwFg72oUNSxUznGVNLSpifcvk3p27aQoKWbQ2aJJzfKsLKVkSHzkL28eZmT6T8wBC2tX6CQdjAQRjCnMU1Xe2rA",
  "key7": "41WZJxwQzSKxsGFv8S21edhdA4ppCTc5fkwbbiJoCvW6opHtXiG7miUkZ95SwFHtiBeCn92CdRDcM4ZQdkeZqYJv",
  "key8": "22NbMpWW1VLuiCjcZFXGETAU3g5sjYKD5axpqzssdMsjarGVSxDjhKU9DbQxVt1RFAvYwas6EYQ5RY49s5RY9or9",
  "key9": "4jeVv85t2mu6ooGGm2PrQngbNy92zeytehNDEGTZ6PEhzaPMifVHsg2GqgCM8vGbajVPCqTQfGfJaj1CStrjKzXn",
  "key10": "3FtkjWigb4Rxc9C6cviiMzdPci66hhFNXeydEbRiskkxcSiMzjVeZBgMVKaWuafQrdvrLUXcDpY24Ehk3F5fSxRt",
  "key11": "3escw2Bmx1RTjQTz7BZQPhUf58nWao78c7dpB5suc6u8nGPiqvC6Kut4Vyuogdxkw73M3hf2N3pBLgN2RoGCHWx7",
  "key12": "5EKjC7sCVB4Qqszn6hf7VymMt3ojqrAkkagQZeLvKiXHdWqVQ4WxxwMPE3WQ8x5YdbCFVY8bNQxvYCjXbExFFHzK",
  "key13": "4yRYPSWP7zxED6uW76T9WCFkfTVZ9zomXxMx4vu1cYpeC3ocSPhHL4LRs8BqaoB6kBthreiFFjhgpECnKEkjGnm7",
  "key14": "5gLvkyKgz7P7CMbTt1iP1vzMHhNhEP9GBjR8EYGf1DLv83fRkv9HVTUtt6Wq7wBSe5JpRrhAJWGUWzoysnUxBYLJ",
  "key15": "4UUg9DhqkEAFsQQfsL6CeWAWWwkrVEFbZzM63p32w9WPLqSuGsaNtQcry7UrqwieFKFJWjyVsAokCJokuKxwi8R3",
  "key16": "3zyGd9PbtcVq4XRfvxzgAjq2tErhcpgayHpd2mozXejCQEXs2Su8nxWNGovK3GaHqPC4Tbe92WoSgKHuVgKRxvNC",
  "key17": "3PFtDGDgBsfiwsgfTZq4PvFx1ES8wqSvgaLotGXvoYX5RkeAPtNEe1kLf97s62fJ5CVqVvvPZx3vPa9p86mubVAY",
  "key18": "4AouYEfcYtt5XNrsH5EUje3Xbf9YmpvjDChu51vUgYS6LAgjXsUwEKNXcUJuZXy6HkCzG1damNPpksy6kxjaxxhg",
  "key19": "3H9Gw7mXKLZhAhChd2fGoVxhAv6NeTFDb8VwmP63ihmWVZSVYg3pp2dgaaq8NM7r7CKwdnBE94Wpn5iSdmztozSA",
  "key20": "487UJNgBHQMGPczm2sn2BgxwVxbwscn3gbSMTZqSbu9NpN8SuNUV9Tgcq77peTRTMudB8pSaqxsQxH6bPLavmt8o",
  "key21": "2jHNfAfgmCiwGoBdukmUNsi5GK5EpUPgZvT985rFvxT4YtVUVkKwymgUyV6otpZsLLcQK54wp8FC4Hs7Q4XVUsda",
  "key22": "2frw9shyGgUffYb5M3dxN26v5Uz23t7aKQSwLumam4THSLNS2Fmbjb9LMoEVW7mWdFnFUBY8sHBo9noDoJ3oNTkA",
  "key23": "2HPBtSPuNBVQ8M1o455wAV6QoXZXY4ZutX1EsibJhKPnZuXLbMesk1m7ArSKMqDTLyJjc7D83GWtNagMaVdboB7P",
  "key24": "3CojjeVHDYUR7JJyYffC2SeZQXjB9chkXV33vQGDgVJEeurJfBNbDYdQ6yCrR5n1yydw7Ng8QG1TgrSAYGApTPmT",
  "key25": "67QxfqY8eSbb9sAqAVq4nhnz8UREz3zcci7q99Gd1ZLSdntG8ZvUSBQj2S6Gwpr6df1ZW8LRTwFVFFanwPG4dig9",
  "key26": "329TWGmqy7MmpFt7X9jQC9BDi2zWyLa7pv9jqQgmfMcbqH8t18gsPDVdPQ5EbVus4Si4V3L4n2Bqb62W76xrsqHY",
  "key27": "2Smfuu72V7pyabKGyJiM23AkWVwSmng1EtTDZq7UAKYatt1tUHunpKk1SeZhkMsz8TspDHRaFFKNaWReGygzLHTs",
  "key28": "4nUW35uQTAyzWQ9o8WqVYZujMuBycCCwYvjyGnVPiREXg7rUGic36aREN5aniMViuwxEFAyoZNwJfTeJXSqAuCoi",
  "key29": "2DbGDgrFAKm3yHRkaqDQTrFBFmPzaQz3rj8x7b6GGLr5RqRxHK9SxKn536BQUQRU7bbUJLf16cMhhMR8UMe3qHfN",
  "key30": "4SCuvJKY7NzJnfCZFGQGpa85CX5WUsgdycXF9eKphGZbXDHnAPZerMLejz9pnC8zax7JwM6Y7iPK8p7RtWCosd6W",
  "key31": "2vcpZR5eGJC14shFtPoNoGmHaspSSKXL7Zhxs6poZc8Da8rxrDL7TDBcdfThR8wXeRBhWgsChHYi1XJDrCpoJMfG",
  "key32": "4m9VXRYVnC2dL6KsYttJdHj6VnvGLriFbPNUMyfGKtBcqX8tM4NGaMcWC7WNXv8d3hNcZveBoQ4Ce1q6jAgDwtcY",
  "key33": "3154AffE169kFZcr6esjBa33qwooiMaVmqvemQU6mWNxcGZq5truJ2fnVkFkHbGCP5aagPufomdaBSAprwLe3p8A",
  "key34": "5s7vqt2dscXQczgeipGYwVMNokVQoYQcDURE1VcRupjw8bgF8Xv6CUcMACAJon85jVSkeaRLkSPai3bx1kaMBqzT"
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
