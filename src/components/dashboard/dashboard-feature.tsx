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
    "M45vutxB7xcmGH9V5G6Wmfdb4b5Rs6GWs8iMdmu8Pjqzny8GVAUwYpkrhquume6KhKcSEogWSgqDFgT71jYBdxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAjMWnWhDuRS4c1mtNjDH4dSW2wbZSYGPu3rNDjoxEhiNWdsUb3ML1qrXnCXgjohn7UuLwZ1WqxDeWx8QsBF58H",
  "key1": "65VPbHTHwYhxfVg9anpPMf9JoNmzSWccazQ9xJXhGw1djEtXsaEr5vKJ1XbXfiA2kf3NdTaV4B4zU5nq4KS8Npi1",
  "key2": "2aXvdgbsZeYo4gdjGDQK2dLSvXBip48Zm6T79CTUEeFmNeH9zWQ3E6L9xsPjUWYTGY4shhdnHR4ExZDZcSGS39ix",
  "key3": "2d2P7kFSxN126KhLtkebKTMsuczJ1RTnWf4jdCc7w7PfLS6V8p7uUhRBAcMrSGCSYTX2Red7P9RarLRCG9cVtvDQ",
  "key4": "5YYKUZ7qe3xT6NnvrPosMnYUtJvfnapqsZBKsugunfB3MQy9AX1t8RsMuTWJgqYpKDy9RGE1Lb8dabRTefd48eio",
  "key5": "4H2PE5smKeva9mjqZXwuvdVNSS5ZJcUfDxUZX8RqwDyTLZBQwjbXeE6mQtonusB5Rfxa3KdjByxrdUcpHL1aYsES",
  "key6": "2DcizH2Shos9cXuqBekZD5HCSwmBwH34iKbfKzYXp9nfDjRPMFo7MxhUZkxBXRQw9eJCVTuBGyEBuUDXDdwsbkLS",
  "key7": "2js4ZmAqGJ4TQmTbuUYMV2iPLNCT3G4zFXHxKiNbjWALUov2iTDtBffRatf1UK7RjBdw2TxKyh79zgTAQpXH3kwj",
  "key8": "4xtHpdA7ce4hrHjRSMo73NE51FJyyRQmr2iz6JjSnKgJMQnZmdr6yCrwty4sUZqaK82QepjwebxjxyF34kzHh6rz",
  "key9": "3zM7o7LPaz74YRcWEU5FNSX1JajT9vhN9qVotV9B6c3xgPdhoQ6snsdFDvGEE1hn4ihEF9aBBzTuHyGzF8usresN",
  "key10": "3h1W2ecxoYhdvppXVrYP7p8QDjHF9B7ZUfjNSgfbrxkFGy9aaLXbtJPpNpEaEZg9hSZk9fBf8KqvpQATSwbifg1g",
  "key11": "4feDmsBangBabxhVYZpUXpFTx7AcTFnXtmeMe9PFkeW9QCVqzjy8YZcp1ycwutxAmy3z1eY7YaadJfE4CGKNNhKH",
  "key12": "4hEvBaqrr41i62kws5kjeAfzHYeMSqBxEK6doBq1v88x2xWbJZ6SY7qEmuma6YSXsvcYVJRbKtxnrT2rUcxjooaE",
  "key13": "2ZZXBy5RNYwHiDiZb6jccjCDyZbdrnJW1UqTDJS6cLyNUYYhzD4w7LfY93tbUKhXd1KBajdnaQ34XiS55MWpZMT3",
  "key14": "35ecbj4qXqZkvR6cEaLPUTKfdJaU3mhM8CZ2TYiavDQSoMety2jm8BE7DJ9QUvN6nPkHmMqnmfnmfa87qiow5Qto",
  "key15": "4tD9pirn7QvEdZm6V89zLCqN34Qun8SZ4gfzE5uwYqtnfPDLJzxsmCKdKG44R5Te9ou6mfNgaK3HC3Rhz9Bjrc9E",
  "key16": "5NdNqxyzjQbY62kEe2V92vKLXcUjDSRZ7js2KEnFZM8j8eyrAbLHau5iaBSpABvXiPSvJ2uBZ9Kbya5oAeynHZAK",
  "key17": "581ejhYRUQig1C1CAw31QsS9uoHXU5kZbfaVWu9FjVzrHQetgx3QYW5c8PL1gjCzYqsaS92gaecccZSvvQq5pUpb",
  "key18": "5rWLAeXKoAb96MPxqe1uKgbGWkaJq96ZrxjPYtfuYoxZgYiamDRcd5BGL9FTwRp3ihVgmvvdqJDBGphQu1B3hJCS",
  "key19": "31XJYvyncZDbchoAau6u5fJ4sg7xWyVfv8DVaUh9KQGChgd1grCSY6oBZ84N9sjMiibh6yQ3GLzYqAHrhGRN3ob6",
  "key20": "4a3EMRm8SK5ZfvWwbGUAFzcxYdSaS5iuYFD83J1QCXUdyT9PrKJagkXtbqhGXnfKwaxoY2NZU46oxa8ngopnvpUL",
  "key21": "tNMfHyVg9rA6nRoH3BxhyCfwTUjH9HtU5evQhkv5wwZ1pEUPdo3kZuk4Z53ziE17zbGMqujBpFsFSmmkNxX4VNA",
  "key22": "53Vi5t4jmkqXTxgMDdbm6XgG9racELZcDNZM26bbR97XMd6Y3fJUtm1QptqoWMoUmdsEDPkuyJPnJbdt9vKzYcGS",
  "key23": "2cDZmEEhoqBDVeMfy9MuW8B4ScJiUwjKYeuf35MwbJGpFj7LeWjfrCLLyqpH6btHoeR7yvQ452XW8mcfRgjPWFbR",
  "key24": "2LbfoomLtTNoBc1MdfzuGauVLv99DJfwBSvyMw4L8AzM5YDEKsTC9qKgtMnJdy24yXfwM9VUb3q2TzjF7MNffpgb",
  "key25": "3o2u4gZekmDq64tCz6CnoR4kMv5buFbbHAH3ig3nZtwmuVnXpB8L4wxGTjiHX2YBm7uTJfXA4irV9JXhL48wLLSi",
  "key26": "3XrNKxMkUd1Y8vyKbXwfnwaspubjBajhsfCjkXHs7ZbCdBfh4kUjG1yjzGHyakB92JCJg9iEdaGnKViX1cmKTXT4",
  "key27": "U4Br6VxPydrzhX9TdJn2JXpKson6rMyTF43QN5Hznu6Y4WbeePfymuhvfJP5deTAttXEiYnfP5QJjS53EeJYv9c",
  "key28": "3N3rroryupDEA7GyWgdwB3nMTiA6TEzgpo188G5F6DzrFifftEAhgB8taVJBZepWRNr5uEfQVifJgzhdpht8tPDi",
  "key29": "5FR21PArC1mxtdJxzLih3qi6kysPpEabeUerm7SrPGmxQbc2JxNhb4MkBnXRAi28RG9UT7L94AQTME8Pm3vcTiuZ",
  "key30": "2YKQrrQ12x6AcvDoh9yXyrNnoLXfDuSjEKErhRgiFQsNM92bW3pjVTWr1TXFseGP4FoRH2gDMnDRwhSg7enGQdFu",
  "key31": "2PXVEdWpMvfxZoVYRTpWLyh7yUkR9YLFxFZsok392oQHtJWi83RyksJNS67Y9trXG5eyhUCCNog6DH3Ca2MmhPin"
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
