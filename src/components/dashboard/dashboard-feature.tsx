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
    "4uhDrxvaZBFzMLdFkR6rhhm71n5L5skhwwUAbiay9V8pcaGDzQiLfLpsjFxKuyNQYW9kFUXeHwnHty6TeFpbXvLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zqVyzrxCYAo4gpQdU14X46MhrmP8WDYh84DzUUqBsWmZs4YLSj8BjK3BiiPtM2pkD4n1mMwpsrjHAXaTnB7fhqD",
  "key1": "4ozSUQvemoo2n8dognj84TuP7xY3SafcviVcuFFbyBfuQbFSEveY51hUDjoqbnrZvxR6DLQo66MWi72KMEHR9HSJ",
  "key2": "36Zdtw5xVBEXBfZxy8C4HFRL2DyqUrmDuqu1QrYctuVN3ctDsRtaF73Rv2G8FABAzhYchBgVBEQZ5MyNaqVXDETf",
  "key3": "5winEZRgQpfDF8SJnZrBS4KUJp2F13xFUwCzC5Sis51uXFDUZGwwr4U4WSZBXrohuo375FuhTddXUsGxjcorW7ni",
  "key4": "56ZZ3oLDoh1xH1upzo7npmntneLjdth4EFC8C49jbi8YsMzcLYVLQQLaz5oQ24HZpxe3NbGEpwnu51JfL6xpmzwT",
  "key5": "kKcmnztqujsKotZjWJdcWRH5VA4AZz7nJ2PaTjrT8w92hVFLtswB6S5ax8NnMpkLCBJyjwX4iNqiszmoFJZNnhQ",
  "key6": "34G9Ds7zGAqC7bHiHLVmLM3G1gEtEcCNW6qngcX6hZpbfeeDf5Kz248RskLui9nZPX6zebmTXrGNNFgy4VkMds4y",
  "key7": "aVCXKyxhqGffdD2qMMFjjeu1kWMhDfBpbEhGqxjcUNkdWnDndb2Mew7rgRydVRfUyEA4XUWHNWywGFc6CozrdLF",
  "key8": "3fuPMNEVqvdD59j9xEV4GQuUM1TGiGjhugn2PVf9aZMcjaBDnFNUCaLAcwDsCcRyjXgf7xxfBfZuFdQWFeyeWteD",
  "key9": "3YQHaix7PttdQtbZJ3oZ63RjvBmDtnR5nEoDX5XKLsuaBC1vYVMeESYbP1KCwPzRFs8VU1fTFwRLHCVgRakSKNP1",
  "key10": "65kBHVWnmEf378MkwyxJbHmPZasWgyezqJcFuzJTntXskoWztMJTC53eVkYpV8SVBUFAS98b1AtjZYzgHjhjK1gt",
  "key11": "CzkyMDKqEVRzUhm2GUChSTtvpa9tyJd972XhMSWgx874notYNzNj1JUJkw4AJp9cLXvGB3yzQE6BYYR3dbsbvDH",
  "key12": "56waqfddYy9QL3CaCcUEPvKfq6s5vo4kxPsqBdMxJT6U2qcQQXoeXvn2t3Q42B3EGtkQRtkuhP88VGjSpRKkhSPj",
  "key13": "2fpq8gZPtLxnn27abELGarVHsUoAN9MkZ4PVHDwkAtLJruE7vfC3ciojpQ9wLjA2BRa3G9ntmTnVoNB12AfDkwg6",
  "key14": "5UAgBPK4KjttyFPYHKRywvKmchHvhEVAewUGQmhhzGQLxzaFLXgocNXqnVHypjuUq2qm1ZC1yArD75isBjxQRAFw",
  "key15": "5cHCRm6wtoahwMqfDSxjPXpnL12KNq6bAMubyzTKjeHbTCvyG9EQ9HkCgJRjPykFrn97cfkWNV9TUe1aZtJFDzaX",
  "key16": "3fE3qMmafjNUwLkgkF4spQrH9k1npAUaShvyixSYSB5qcZZfLYToGPC2GMaJc1oYjUvbGqSkiZAZLm4stas2uD7n",
  "key17": "Jj1L6anfW3kBjKPBz9arnuSC6EiTtobyZ9Wkep7odn1EJv7Vui2bgTMefCKNfRt3frCwXZDTeSSAvHEFHFQSWAW",
  "key18": "3vwPzuzVNRUxXt97FKhNzPezfDGeQrg4mXL6rhfFUUedhn9uJQswi5pwJTHBeeapjfy3uVbzAV5ZRYytYZgwG6xY",
  "key19": "Tt7QkaWe5z6guF9aubrzUXtJoEBWxtDpYZCtwJDbQ6bNFbeTXfiUd7kiHyoNYxHQuoS3FAT1gx4LZDwjKxi5Uvo",
  "key20": "2qTZob96AHg7rtxphZGpZQLR7tp9T6JbPRyaTQ8NdneCbyuXLeLX98BgyHzf8pFvJAjjPZLrH9admXknKXVpNRxn",
  "key21": "3sGejKTWnXWBVYDR1PZ25WLr7euCeYUfrxsHPWc224fUKUjB2m2CLQPS42gd7QhPCLYZxHRxHVL4Q4RFstUY4gsp",
  "key22": "5Y4PCtZ8wYWUd9LErFXkNaS8oAe9GzYq9Ypm2tUzEeViziJLqAjtZvUnvP5zWH51Q4XPHGxCXXAvxz74FksbPpAX",
  "key23": "4moEuotfhXWPyGh1PFLqhzNRPCBofSGcRNwD3G7ou828D8fq8C9Sauhtg59BDgHZCevGUxhwe4yBPRCXucG6nDjo",
  "key24": "2nupZDXapx53DsDRt8DoU1WZr7Mymv4wzPbPXJTDartmPUEG29UwC9JbgfUdYRqbGT9HWCPKRrtxkWUXKAVyEEif",
  "key25": "2i86GeCgy1mtSp1cUtNZ9n9Ekw74YtJvghNeXRi5mrRWyhwMthm1tJB8hKF5qg66Px9NhDqfhVsCAaERHGqgeAAb",
  "key26": "5GRrMTErp4wcRSLLrzNpWspcahqrbiUwsuMP5H8oQqHsWAdefj8etKCExP8QQh5qVAg3XoqjB8MgLMitio1j8mLY",
  "key27": "4WUTZwGtnYEunEGtcPdoxiKrVMWUsjxcmJaw6r2DtjrMQmvoFSda3mKjVND6X5CeNmmYozEY3uYok6cZjuSjdmpj",
  "key28": "4TBA4ZHfArxKFLSdinsi6WAMpWqZEj38WBX3e5dYixtWxnrAHYfAWSxWdygHEZwnCKMReUDk69PkdaAW47ZquqZ5"
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
