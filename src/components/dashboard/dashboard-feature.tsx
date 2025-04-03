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
    "5x6FCwqcXYzjvnCc5xmSvAYzJmbNC6Xf7DbEetBMKeFDQZSjnq6dmDBnXYt8iYbPYCe3mcw4GRScMQrr16cz9L5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ac7VKrM1nce7cDBNeYo7qkJjrE5JrdProYT1dwZr3LwTUeab6gqgeZ3SDxSVtyc6RDPD52hVu4uQajb4WYmxK9",
  "key1": "5BVmrSei2u369kY9VAzMPYcvaxho8LRqFRhhbBgoaunhHBPApNXxsxns65m1Kz2m3eRVDZgzkz6DKoHi2Bg6N8T2",
  "key2": "2jxeaZQAJPpdaw2thMjqcJdJVJUBdSq8C2ABpqsbMdWpLG3EW7HZLAn37LHt7vb4jzFpUuGkkX39po6RUFDYh9a9",
  "key3": "5fCZuDzCQvqNYKAnu6QEiC9Mnqy7WVoR6demSYckgfdnDiHUCfc9j7ofWT8tWfFhABC4182dZnUqrqSiSaJBrAtY",
  "key4": "4AZyZSUTDG24vEnpEa9mbAKv6kiXuBTUwg9fNKR4WopnBapyBVWAzCSoYrmwMibQm5vyQDWyARfGvciRN73pJS7Z",
  "key5": "3gPPTmZSBYdyv6q6YJ3yQYX1X1UnEaBtiah8Lsp6AhJBgQEyqqyg9eXApx43bQTPmgVSD6dZ8XgENVTARffw7Tvh",
  "key6": "32LJ6zzmYgSbYQYHqoHmix4Mo1WJAeY2Eu7TpiShHf3qPZFrRZw1ufHJBaqpfiCb9Wyji1aBN11nDEDUvs4jTvQk",
  "key7": "2WMRQU7z9KppoBUqmcXoA28V8pgGQjb3maeExE4yQbemprt7h3A5FmHpudR3qr6MCceVG8LDr89BHXPDbhX9K9cJ",
  "key8": "3dT2Cqi2sj7JEBBfcCoekiQSVE82nRXTSqottGyjDD9PpzHLCxDwBd7fMXtktio8Hpw9HdWBbtyXy7JYQXGiX3Mv",
  "key9": "w4qQEs1NVBnADXoszSTGBuqjFKrcmVQ1HAyaWiC2RvfkXUsYAfhCiR4SdTCff3P9rDyN1DsDvZQA2xvZjKPmd6j",
  "key10": "5NvdZ1PakdVXzRg3724uQUopTfRyk9DqEgdBxe6JNchsmWtsJHVq847sB4HWu6Kg9WszbJnJnvcbFT6eage5oU31",
  "key11": "3zmExPbVGVc7fsBni4eb2Zi3W3xhgHghjV1V2R7eRLBvUHoNgFm5nkWZGdjoeVtqT67qForyG8VWbufGTMTa84if",
  "key12": "97SYkRfKVS5HA5XUf99ZKgMea7Hcmrv6hxKfXv1WWE9HMc9D634idrTAUXYuwQsZg3c8po3iqiYCYM3jdk5GGtE",
  "key13": "4a5p58Vg1PakMDPCnkeNV8BK199cRzskQxzWJmpv24xUgg8mi1j8ynUj3WrCtDZwBbG3ZunacYtekgTjCmYU6UWm",
  "key14": "4B6opPhMtU5WewrWqN6jqZy4P1vgyWkyU1SQtnW8njtzQvvsRk6f2mhhTjD75TH1DKowfyftL1zmaeiyY3nEGjLJ",
  "key15": "2f2EagMHYLxhsEVa2KshboVLkhen6Ki8QrivD92qRz1UqK1da1RQMGgXZkSwpbzobfFK2THDnFc6hbbVYKjoUN9o",
  "key16": "55qkbLRZ3KFM2ys29BAuosB2cnyzCV8yayVQpzdKWEWiKPSciF2NdD8mNHkcnxH3ZsN4eHHjcURLc2T1z3FaHW49",
  "key17": "5ueM5KvU4JxHpo4yctg4BKBd9SRGHVwPkFMsyoKJQLCSGbeW8DBspjnWgVyfuVpbAGYdp3z6AnpgdaQi1JiCxmq6",
  "key18": "5mhrbtT6DnMj7ncSVjad7yEa7GSszTKEyDYVsr1uB7oWAHmV7r2DPTzGt3MfJXn9hmqmm6GQqehjbcoG58q7pUCw",
  "key19": "64WYuiwxTDLn6tuaoYUtYcbpXwGPQt9YZ1ggUxhTSCgPXapzRCzooQmh8gzppuuTwyF9Vps1mpfDdhbipasNZAWi",
  "key20": "36iy8rb9PWpqXnxXf1xeo8vevAoFLjGetdFi1TYyrDrnSfVvtdysoxFGjEzvBP44CzjM8ZdKwUBhabt8Vg5iUXZr",
  "key21": "2ZYkb1iykBFxsuSGspNr2avRA9mwRL4zNzYYd7m3skEzPdjhHMJcbNQf5aq5tmyWwFNSQPbahBk2BnguZLNQ4qJU",
  "key22": "g4PvWFvtZfKTKyoo24V3vb9HYNa9B56RtCfYgWWdbd7UqDNdKMrvtVBfYFFqEmyJhSvB2hQa4erH1Sxoyfm2JTu",
  "key23": "63phabniv5c7uAJvncyqQj8EVGqHWnjub7QFakHHnooVU4E1GYFyZeYuagvvJpL9N6Rk1h2VRmaetjqdY2Y9CMZ2",
  "key24": "2b54kh1HDPC58igmg4BcogGVwRf1AoDFN5i2SdYptVVkQ34bNHVuMmquFaLa9kBdHh5atdDaFFTWkd2F2Zoqftkv",
  "key25": "37kRufqY7haWfhQDru3jBdaosTGFVv3YUHMiJgoNdZddKspo1HcxKAH6ija4ubrHF3UBcZQwig8aLtjSq94M74UZ",
  "key26": "5WDALzRdM3G7F1MsjKDM7n7eWaBdEDMogFFcUSJWKPLUBTVWZmGu4zM4odFy365AmvfT5d1mxxDCVufbezfXkUry",
  "key27": "bW2XjwG5ZXhw3pEWcvKaSyN4jpnLUhb47uBFdqn2fs3cSt9z5DB2bFA9Qz5ARCTnzsMqfPARzak7AbBChXH9i44"
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
