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
    "U1zyojN623hrFSekajUGzGjs1NDhrYpX5mLPQiPTnaT9p73roiSvSXrqcctGCaz4kLjnYypypRcJJQr9m5Q3NQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gYDbEsBzDqwBht7cwkY1rPjsvCdxk2bU3hFrQfpQZi6TAV94GxmXeMxfSySshrWezUQkg6UZms7NsgW1uvJQBn",
  "key1": "2EuNZ18g3KaCgYEUbkqmVVWyX1PdKb2nMLS5RNE3LbVKgM48BEoL12mJWaVfZzZhn6qCLRRRMaafUZHzh9So3sXq",
  "key2": "29HN1PxfbxzC8hsfGrQgq9KBtaBjNYmfPazVkwJaMG74m2UbNasqt6FHiRyYozh1V9hbCdRccFaUXRThxZLYM76h",
  "key3": "spB66cAAiKbT4CSazBh9wTqaTkw9AyKQ6TZnY4LCrMAbS8FYFPZg1YRWLLCFk8CfkrSu6HLQkaqvaQuLqbrg5LS",
  "key4": "3qujfSWQf3srSQbGKZ19w6CwwrvMH4oFYQoqhDzXH9HXbTTXefr6P6XdXnd2gwD5eug3GKKuhFfowHDw6ia1yp9t",
  "key5": "2G1vYrK4pBMJYbKribDNzCSZD7EXrW6LCayW3HdBW22Ys44yK7rrX77k34MZfHsuG5HMSj59MdBkBbcdruoxxsdw",
  "key6": "26EZkmqACyZo6UZdxJGuoGbozHLT9U1ua9tU6JkusUqmsz7ujaGEM9j8jBw71LZkxWM7HtUNRVBj1mXSAvGYAgZo",
  "key7": "5vmb7nChMCB5SUkU1fwrEEAGVN57mgn6Fnvb2cU7biYg6ZDBM8K2BiHqiZX5AX2FhkeukAmhe47d47AfqMaJeEic",
  "key8": "masGAxB6PE6cYe295KMEMj2JYWbHjtN8QGyXnHXdddEZQ9JVxzt8Ss8ky4TnWeCo5umFbpTpbKh9E4pZZCgzXGP",
  "key9": "22kiNB3roiUqXj57vvk6jqZydJ7ZrXxGcMECc5WuedKBXW7cxkhWTSfeXx7wWt3ZgmNJk6RFaD5BhbwRKhbwc3EJ",
  "key10": "3cFuAgWjeSzjU9UPAHrX6srJnNwnq4WEziQWENfSHn4hB1CuTNRqM6GW3a2iKpMkJLk5nhQ3YvcSb8VeyXH3eUfR",
  "key11": "29HAbcC4BbcQPQV9Mfsg3GkL12Fu2hkViemcXMCfRuHPzZBTh4SQYdiFniVWs5Kz5HJKRnKSWzaCn9uQQmdZYPrX",
  "key12": "44jQefef8sqexRUqKmfnJAdPpzHz18zLprpSPsdJEATuZbHQL1iNEf5rBwbuytoCe6BxgQ4MueADWwZTt4M6Us91",
  "key13": "22qYgQicnx8vw62GUA8oEQyRnpW1bsPb2NcV7VxnG1MrhEyAoB8rJxM7V7BWCS5zSxnTv9tQQrgJ6oKLtqa91Rkk",
  "key14": "2pvLNsvQcU3ayW3atr2qL3ren3cTka9RLGsMPsri5c2Ud9NpBo9kmisU2cq3gnSjjqZ4wM57u7tisxwAt2xCSofx",
  "key15": "5NaBSfGLY9g5q819bSGmyXTDfXCEJi26cowtdHQJ8oYdMA6LVA3VjJco3BzTyZ2dKyooSHXD7Cqs3nkZtdE5kTJs",
  "key16": "4X5F5ufPb59EEYsFwehQMz5iWg4zHJeuAz5CpCmZZjJYxzG3H9fRVuxedBJXCTDkDiXDwvAPvmzQk53rCQaEcCjY",
  "key17": "2RSU387anxCrJw4QtYJRAYg4cnLu33ivnQfgvAGZX2dikvahTbU1GCVzVBQes8xWi1GKk8bnHrzRDprNSSoswK9r",
  "key18": "2cJHdTdJtzc1UpBRr2zbCBfXFK1CufsQQDBbNVioKJwNpe6cVVd8aH2CnfM5AiHMtSuY2nc6D4konU3WTNScXHbK",
  "key19": "51pzmp24A6r9CEvGwUqmZbfYvTULAg8FREn5qeSVoPPwu5X1i3AgqMh8prrZ4CfbFjVTTsopiPh9HfQpFeBGfVDK",
  "key20": "2he7xFxsVMqd1Rqz76SgxohxHJjEBNkLZaAvwbDhTQLcmBCjM2xkVpPCAiZPfTZTz4xrtkGsGCBWwvfu8FQTdiwc",
  "key21": "WKCASo3Exk2omZfVTrLspJpZv279FmoHjc2upCWw9KHKqRh2EVa2UwveoWWRoYZoixo63vJbLP5qaN3v28QS7Qb",
  "key22": "5njHgPvs8yNjbBbBikGpvBszFXAKJbtxHG5atcG7NzKdiSc4PZBnibJXwbM2qseYQEbXV7KKZx2LS6ApRdZozbXm",
  "key23": "2pp9gW9oZTpC33UbpPnWFcgaDY6vQMLrsP2sVgfurKmpvGFJg5QvrsatDBQBMkaGfw3YpnTa95t6mnyqfSaart42",
  "key24": "4sSWinjbbinXW2Gk9rN3ZV77YFi3EWwThTY1KnDtHfV98kK8BcxSXeWnixLfTYfF4ZEWfzDMJGBpPmcXvpy57jj3",
  "key25": "35gi54kQmxTV28J7cGRJFgVocLhsnDNcpSFXprr1dTosmcSHVAHnJixFfomMe8hBqqVPE8JehB4tgTvY1dKjeVkA",
  "key26": "5LsaHHcYY6D6s3M8uLXsLNCLcBzYtagVyQqGpy1YdLdeRR7rzn89nt4Lp5bDHGCkiagaCK1p39n86Y6NquYhTSY3",
  "key27": "3cy9ryjfPNstPV4afRLfeCNzDkWsizXHYTuTBYwiG1RsH1ZAAspD69uU6kXGk1tc6yAwm2GKBxDciyZ39ZB3Mzjv",
  "key28": "2QvsdMmCkT3C89jQeetY7PXJZ78oApcK2V1wMuPtiDueDx4kA9PTsPtbEoQgbNKJ9Cr75eoNBtUj5DYFKuvRWMLx",
  "key29": "4DRiLrD3A8WnXhQaUcUNCAtER2BDcRyKV2uqzGJAYC5rgE8ibzvE6QtKbECb2pFPRD9iVNsUvxzuBo79TKXTECxB",
  "key30": "5rNnU4PEkF2QmcBTcNtCeJV4ZjZ7kzmwJAzAv2MXkqfBAJvjbXDjBWgihD2qSJEeSB9RvkQcLyuvRWXmddu47oMf",
  "key31": "5Yn65Y4EFhnoevgoWhHbnw8WKhPakdMAQBwW97o4vSBumwBQ6MTZh98KRWPzUhpobTDpQyUraBqgEMyvQ1i4HrdF",
  "key32": "55iAugnQumUxSNLcrw7seWAEuSCzasmarNQxSUdLBXKVFAHLepvKj54UGMhMyM7oCgK7nMMfiXjrJDfB768fdmdQ",
  "key33": "2GArot5wJbjtiS59YCYtrjaEHMHdwbq3zrXxvHjPe7JYW3XHF3ES1yMSiaVD9UU3HP1DxrpGCGK234LogTDQ4UQG",
  "key34": "3Qhxg3Mv39aWbw2StNyaPoVvBaCeLEGhRC46kX5LWMob8kuk4SkJbbuhShcbRLfRWBiTNnKnoy4Vxboxpfwzhyw2",
  "key35": "tsKVK8MXgHB8GDrT1JogBGCJMMGpx3ikxTNnFis5zkb1Q7Jh49WvUgexR96nmpVQg99mtNXPwcRZs39nYkBgXw8",
  "key36": "3vcHhgKqnpk5utwLohifzZhKyc9WH6qmmKvaBRYTUHYoXkGj49iHhthhB5KhGpUx9meP77KM1Fye5Nz2Aa2VhvQT",
  "key37": "BRSby2x7UnJCaM5ZeXfaesZFPGL5RiZfUUiWrfnjRB7uvwPyyYMnUMdWaVz7WBgBXrtRAzUNY2GtZVKzL4vpGKR"
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
