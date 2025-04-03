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
    "JxsD6wwmg9ktLDEtowPMYNQM1NFb94GLZbmZviSjUiEBsHNzkVYhGRybxvmRCoxPqCNL4baqadhLvUzLQUKbD6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFiQzGNUfLCwkkG86FtoSTz2iZQ7FBUQvZ7hHFnzRV5ZvHciNF4PdWqDSsNoLYcAPDQHZUccNjMYakDkyJ4PeQq",
  "key1": "3poTwonuENK3qvUXYL55YjnFGMDeQEnnvenn8da36BYZMpeXCbJGEgTXhfHwWZ3hyjSk7dgAQUciaQH8BGF3gGF7",
  "key2": "D5hLnh8LxtZov4khxrfya5N43RxFf6cvGSREJFzrdN3dRm4ixYMwfxW3tanPBJubv4Gq84ghSX7S4SFjjYAKnuJ",
  "key3": "3RNRDKuvR9XQJk98zgVjMNUovi8Gzg2aDGTb4onEJnK7DpuAdZr6g5PabHvdDANtYNyLVCxew5fWPHfhn1QFoJw3",
  "key4": "iSsa1YRGkPttG1uyJyEEa97DRd2zcsw48Q6C94pvjqzAPACMB2LV3kBU5eS5Uxqk15uNNvEo1sHDCcCz6bur6GC",
  "key5": "6QnyKVAxBRx71hTwoYwLSQh4hUTLJ29E4cFGJDcJBCGzZBnnNMZBLWTsg8SAZwpJrMs94JZnSonvZjr96KHBqt4",
  "key6": "3cTZ5B9jD4aEb2CQVrZkvwNEApkm4GYTYHgFnt2cKBewJK7MmPmaszbx39fdoshXuwSbbu8u1TfFkF31ZtFk7AKv",
  "key7": "4SYuh3hBnDqsAJmYFyZZ62KJKVhtCSJ32VEzYtMTpxvp81s8sZCZmHYqR6SWKxJKcB8Ywn1ePjsrNurV2KhCPDd2",
  "key8": "5sQqZZD8xZzKDuWTzvxUEQ9UqhTPv2HiQFmbMC9LFEMHyWGb7dh4AqYaZHFqN5fuNdhXc5rcj811NaaKx4d6u1vE",
  "key9": "2ARKbba7vrkcyxErtNeY8z1HqPyehGNudETW19b5j76CpQ1aVxFRqgu1QQzGsQnxSaZNWSGHTKVQa5Fxvuyj6KRT",
  "key10": "5KxkZv9XMLdz981TrGEKw2ReuzX9rykgqiHDQrpxhNLfyjAKvFYYU6LZW5ymBM7KdtJDNcqyTABtzvdQpErsD4KR",
  "key11": "MRmunvE9sHkNQf4nDwNvtMuRupqFH42FNJqjJiEgxBCx1HGsn7LDNdAXurEG2qUbtaWdJjMFsezDbMotKiyvqZf",
  "key12": "BDuoKm2v9j9agoGvSN1L35Fs45ynfBgm9sLg36xFGifRftiqjwWzeSK1AKswEcxeCiipx3fzYeKEqVmc8S8hZFK",
  "key13": "5HcPdXxuThqdYaxnoKrctobrPCHNtMzKhx8VX8YUqocFJmVEaFRgtx4awLuvsgmfnbBh4zCdijub5JToSzcEPEGS",
  "key14": "E19vLhVyTGAsr8fT8iGavNR8fjH2zERvQCvzJiEAHXJmhcBe48UfQsWTvfP32QwHBAnMqH2tHqnZg4p8pe6WTUJ",
  "key15": "67ehH52Zo3HCMG985cxusLswrUeojLM67ijfJQ5NrdgytLqzLbpLYhQmE5f4zJwckxESabZS2KXLaEbMuDCT4CHy",
  "key16": "3myTnggYLyB38aBAXAX4FCHXGBTTbWqAqGKXHvtgsHn5H6TXDh6S7kcnW98DWfRx53EGYRFS2cRZzLSbFSpS4b11",
  "key17": "3RattyW1STTRxGUzscnjwaosJSYmPF5tkShodrAhcQS7p8J8utdLBVtoKHtGNHhLRgP1aL2brkEvcs4LpHPq3E2t",
  "key18": "PNKP8B18AVh7TfPcd41Lk6DFP2AJxH6ws2vYd5wZNzEMZfyknLCbW6YDkhokvb21bXESJbeXR7Vd4qb6BciWwQn",
  "key19": "4k35EmGv8HBBbf9DaDkyPAQaDv7Gs4xZDEWckwCQcaZWTww8oARsVhALjeP37aybmUF4fHQYnmQj1XgeanmbqGJ8",
  "key20": "5towVqrJpfamnChVv68TKwGzxiY2f6K2TaBBehRbdVMWB6ygHYR16VYRPmHFv2bV2nCmJBK73a1XTaVaSWN5aPT7",
  "key21": "64rMovPaLr6EcVPPqXrkVbH3i2g8zLV8inCZyHpZqNSJAkEEmcKKJZacZk4bUv5H7bZAS8aTfxmBzvff6rpYGGig",
  "key22": "f8Ar3HjXBQZBKHxnLs1qBjPU3xgBvXJeP7SZC8m82Dse3aQWzKnqM9j6SSbSYUYmTUMFtLHWNJSjGic5pZtFoTm",
  "key23": "2HiCqkckh98SvEQ4d6VvYhsdQ7Xw3eT27WrPLQbijRkdFNo32q4SDuiUS2HXDzehVLHcfuWC4xVxw9m47d38Lezv",
  "key24": "5xezjE5e8fCs5hDjxw761SEcT1fKEg72nj2jcbMR1JFbAp72Y6ZVDhK8KJW6hCBCK3SBAiXScDHa1bfRjoxVCrhN",
  "key25": "5GF46tQ7GwAsv8ReFphWvawfKNp9DeXxXviqMRKLzyP74aFhtkCSE6DurrRK9Ciit2MMsBB3qtwfLpi4Zy47Y4TE",
  "key26": "4hqQ3V3q1aqLuTdj7VRYuaHM6wWGzy8rXJUtpwZcbyMNTUgcj9yFy2erajMM2CzAqaAWHMZg4oEjYRVhwbDrAgHt",
  "key27": "4Cgys9MyEk9EFaZQXQLZhtHzQu5Zf6xUT6NjEgFAo8jxgPcFkapkBXqyNLaYHWmy2VUVbantcKHsZAWGFQkbSPV7",
  "key28": "2hqHyhCW8mhbypjTqPep11LoKytCvFRdakkfz9dWj7qEhynUXLcUq58yjZmDkRa19fRFZicnqcBrjraDn98b9KTB",
  "key29": "5tK2H8noyT93FBzyLGbwjUR6v2AYbKac59zV2W7nYC6icbJMWFgUzTMH5cNznnT8YngRZiH7a6uqDJrn53MPHcQD",
  "key30": "5BtqTnJnr4uxXF5B4kwZNMmFc7udGYB2kJyjdZEdNmHEeNWgCUygqF1tuJRCh24bBDbcdX1L7bhqrsRFiUzqBcrd",
  "key31": "3r2jmnTp52eavGApCbUxQ5Mb8EaNWYyAQDVGDdYqgDxtaDYhxXqNKZvb7ZYMg532L8tffLpbpG8XUsqFGDmw1zkc",
  "key32": "5NKaXxt493mPCYJWVmwS5PTtxbJcoCEWE1Fsi4EVdYwUWH8SHAo7Stp1978TvTJ8d2yxSn6zKyxL7P8eWbA4gNHa",
  "key33": "4gQH6doEZ4HnsM1YyVQXxPvfeuszhpYYL8TicyYqXCiDcbHuxyisvZRXTKP8VHEgW4KQ2iWPyng7hQ814az6SEna",
  "key34": "hW7nzZgrn7wx5gCZaFFjasALeDQ3NQwzituq4Rw8k4GW6MhVcxo1qMxiEJAGzeJazhk1Db9tPaD67ERHRCyMjQo",
  "key35": "2B565TvD8BDXJaBt6nrMMbsggzKn16w4CJBKXkBTHouS1g9uLif67BduCCMjpwcEzWKhYJxEMrK5kBETRFy4V9jZ",
  "key36": "4kcCXV421LH7DR8JCF9RedpWTbVFHhubuSpmeDzpyPoQYnmeJzrrJR34rx6gLfBCJm5uTreEVzfojK3SaYgkR3kG",
  "key37": "3U1ub2HVwK2R7V3LFDP7gHNK92qyXEsumhykJ4NVDSVtUCjy9Z4AmPF65mVNFe1TGzg1DYfZMr9bQUH93g8Up482",
  "key38": "5S4bvY7fyKZvNTxZRsvpdJYjJkmXuBgqU8s9Zmb5ecEJKfd28aFFFzVFSsZwB19JSxbQbAzLv9dNFhxqMK25MiU9",
  "key39": "59FmkQ51b4ePNJjiVS2UfaURcZoEEATJCoTBX1aqqrgK8iLjCNrpJfXjqB3TcShwFjZMR4d1XEBNYfYasbxwJYjK",
  "key40": "3j1BCLkxvzwW91w6w5AngyzZhddV4PiA2EWE4XmKVJoXDvDbphdnmbFXBRKQsPsKSrVi3iesFmMoQ1ZQT35fSWN9"
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
