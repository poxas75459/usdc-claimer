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
    "xq9RRdkb6n6ABxYv2eWn48EWBL6Wqa5HjVM8La3Lfsf5p7x8E6UepUZtMrZfr1bBYnGbS8t5pUfCR6xhxWXSgpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dvP8MEeB6FCGXpidhWfZnWeoWcdqQvpKN2ZeCJF3Djor39W8kK2tYPHLnSnEVy6UryEBtN4Sbc9N9FUiQ3Qnkn",
  "key1": "u6mPpS59wwB7R9RNbWpWRbz7dm1ezAH3j8PZdLn8cY1PWXuQBVGx3KvnkbrpALZxozmSnhBgTyWMpEdJMRGwyQJ",
  "key2": "5JkzNAu9sfs3jDvLHRmU6WwaWKWB4DAz37HxwBSt5RgsFSpByyqyXLDTXsBavNxYJixTu1kqRZ7KJiHUe45Y5LCB",
  "key3": "3C9rKwyZPcNJBfiJLtmBm9RcDWULL6oZ6TagiZkPArnDDgt6ivbXKPYqvQvTY22QmFykEreHzKkZWJESU3WUmV6V",
  "key4": "2Qzgc4JXzEdm8TExFduF1B5S9QkKDQ276sDkFvXoDYV387obZDaGwgNRoPMrT7qPT1UfmabU4V66t46q9gHgmES6",
  "key5": "29D4DUHUX6ebMwVegwXMbtDuK1BXijm7xn6qKYADwyUMinoJUq7XUQkD6AFF5jo9Ty2fYWKHKknd6nzogGKwz82M",
  "key6": "5FZQrpPENaHN9PFW9GUzexYSWXNyHmD5rFX5mRpzoVCH5TY58qtfpKn1GkecCamSSMRhSFkuza6iJtABzDCvFx7a",
  "key7": "2HFaocLvfVXbwKGSL2Xquf8LJrq3qUkMHXoQzJKJZ4QoEnaLykCpoYMJuwUMPWU9ZyNV42hvoBDENTj6Ch5uFitN",
  "key8": "2xHcZ1nrbBYKoQ2e3w3q8Jjtq5JxhVCfqvzfjYkV2Dct3HbN1vi7bxD3UvXGJdNW9mFQpRtLur7G34yo8VkFLBpT",
  "key9": "5hzwopp4wZQ5gPbHsQrUVH4Yrw5aVtxEzFdUrdLeqTv1yrKSf6iuxsi3sjfUcRsQnWfhy5nG162JXxGeWcBvS8AL",
  "key10": "qVupahqsTF3w4JuG314FK3Jp1DGfa41JXahwrGwubPQXGZWuR2uELk74a77GpkArG8UvsE7uaAFYj8zVoYnLRPi",
  "key11": "qw1kfycp8mkBssL7gCTLwLQp9zB6E42X3jn6ngmwvTsBsENjiqn3aYuzt4hDEDgj8hy9ri4R5V7ZQ7QbgJzR2fV",
  "key12": "3GpGbSxZJsy7K5aaV4LrsiEbxUtVXwd7YJY1MmH8qgM8P9hpLJdgGzFjBdiWppcuH8bGMczhPmfgwHSDfnL9FfUX",
  "key13": "2eLufkfJg67ye226ptYx98QoaRafSBvGvYuR3o9jzQKAzqXemLFMZ3ZaRcj6UCV36UieC9QdBTxDuKh5qT8szEbD",
  "key14": "XSXpZFXMZovN2jtiTKRS5G2rqospc5AoSsPSVnjNcATmg2NbxGyjfpNiLJMqx49bFNL6XcK9wALYs1QMis6t4oM",
  "key15": "3iEA1AzazC9iVqQQWThiSSaoRsfaYhXQSmyZh4CGy91PA82j4nkx4kiB6QWP9QQXooEFXHFqg2qvz5mE4QAXisX2",
  "key16": "2ADViGiQkDdqSZCPzbb6SJotFL6mikfvbhGFAMQ3MBknLrdKNGbEsz6Sqp2idawvSremcSCHPVswVDeqKnuye2s6",
  "key17": "3vmjn21WGpfAJ5GGJLh6LyUjWGpTzVY3ZnAjRmnpv7b8jZqZoD5pQ3QgWbxDhd5DaWVbSkthsCudjBzfDXRmv76v",
  "key18": "4xxLsQijgjzEqbtyqwvzcf8TjUckHGP34mui8jtP7FZWcGbBf4rbNDvSRyyFU7qQm1KeicSqrtsramNMDRmaHYYP",
  "key19": "3R2UStsGQ3mysLd7e8CHFbHMcxvURhANchNevmUnWv7JCLiABeeVXnAQStat4XjQHu5hHSY115nnivRR4cXeFKSE",
  "key20": "1erXAHjrigNj1tRDLY3ggzRiH5yEod2Uf1egCgtyxaWZK38xQ5mM46Fdtox8PtrpEGDuqaaYVcdxRFDwvpAxs4o",
  "key21": "4JwS24Ttp5vdrVxccyszDerGSuWpTwwNEFXoPhY1rAjPjZSgKEcfX3GcNzJH3ekorvseezqstxZRbzitXQL3UxVb",
  "key22": "39jHgw2tiMiCJNnKn5BzzHYBzP7pxvKrRT5jMD7Vziyyd3s8jMZE3uEkbNNne9gbwyRtGvbcdKmoNojQJP88dMwg",
  "key23": "C7HJctdfU4HvCJ9NwZrB3JXcu1SR2FPqm8mpVt75SEahKCXe6sbKEHcsD6cyAugJ6rPEwSJNoDqs5K6bgn8vyM5",
  "key24": "mCjBjiuNWMaRWWq86jQ9PWoWR6qPXANrLc2RC5uYrWgtdewXEZbrv9nLT8Bqe8aCTxW7RPMpC3hXRo9YhM3xXB2",
  "key25": "51HXNjYdRW61LJyeZPk5j4BdVyaNo1JS6S53ammPBGC3rC53jo2XqxCPo9nTBaUmSZFWuq7QsGTw6K7L6RqVVVYH",
  "key26": "3T8LogmkroQpzbBw4RsNcws9S2zyvVfJsyiA3WSN4J87kjVgoVjz9zXkmgmjbooh5jGz4kyhinyF7yFwgfg4cztK",
  "key27": "4MgyXPzCzT4QC3Jg7pbnmdcWFfZDkKGThHFYvcBp3zoWPg1K59WFA9FdJUDB9EpU9EEpCNuFBzopV1yaRxXStPeJ",
  "key28": "j2UcqvotwvSeubq7v7uYhUNCRy4QzWx42ZjZSSQYw5g8opmRCsKmxWPQVxwtghoD6joy2hcLBGnyVazvkWgFWuc",
  "key29": "3yYQptZGejTCj6yWHHPVLFvJHQFqLkB7FS6AR44ijqjKCJ96bJ186w1HkhUNwMMoTiHma16yTp99938kxCTRQgEp"
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
