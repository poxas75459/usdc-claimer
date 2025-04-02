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
    "5Wq8dU9Mw9kq4Rp7gtAL5nBxzstj5HYn1os8EX9nBotAK8mth2Kuzo5hyo6cuk4vaSFGxme2CLN3zYEUtdCgPAtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfFChe9M3pZUSbUCsbfcpEqDhvUYqg7pn2tN3kMA1ewu1z6KGnN5xDTSpoztvtzaSeTSbMXjTobSfwjdehR5Xzf",
  "key1": "5Aij34vjTi2oGuwLouEUtFB1yuad5GmeNr5LAxsvT5vnjtupBPCrwRFMftGCDqCKyYcxVGn5GDHJZetNb3FS4XwA",
  "key2": "39q4QZ29tHRHtUPEmxNGhWqkc8KFJnJ6V37v5t72sNQeuEMY3SxCxurRdddiayUpnxb5J1KEDq6257wN9Mrmgakj",
  "key3": "2AgEa61GhQQSTxV9YiRUjxdzceQnHhJDorqek9SfBL5eYHF6N5WBBAs38Y6HYzZMeFY12EWbcttf6c9aWJCrkLhy",
  "key4": "2sTG8Ysp6rjtmKV44NJBEYJNEeYrJW2tgp6jJkCshBpC7SRgNxixh7nmj2GC4TFdpM3S4Z3ZQ656V1G6LzN24R2s",
  "key5": "2KYri9dWoBzbQHs9GRvQRxioEqTMnQCf4C6bRBriGSmDBFe72v7ztK91q2vpQvZgZLRxKnyub74p4LPmRmu4dNSg",
  "key6": "3yAeoVjDE4tEymRjAedrb2uKYPRdqj1MUPQbUzHZf59krtr3aCqkT1bjhZK3cxf39vKeSmA9u97u8b6QVZ4Tek1A",
  "key7": "5MV8jyemm5NN8LdDzsuBrTvXz9mSSv9sGvmG79mzVYppZcUWjxSCs8AskS7dzE7aHQQVM6mr7SRxgsHuLh7LhJhD",
  "key8": "21ncKedhkzHDaWMBpncd5jz5WUj82JV63VQ9tqAjxst9i9nbNVMqpXeYpAwLhUHwQNuRNdTJY5TgfE9FN7Hr3qUd",
  "key9": "3vE5S3SFnx195iRLXuwZuuG3J9ZjHt6ZA7z9k9AByAky6qXeoNEGUYyU62tDqz2bH9ftvN7cL2hm7AgmB6ydYL7G",
  "key10": "29dxHP8Fu9X1Y7vb2RVgesmA29Fmq7KySdbntHxT5HZbaJYiRmaQHe7Q6KHv6kf9nmpgVqhvA8xAq31BogW9HG8K",
  "key11": "4z8dHjUQU9ybNJSh7s5botDHrdPCGJwZV6jdad4wVqZcvLYh6YoZZYHjpak7JUHeiLC8UpWNtsBFcam4DaeBJDuc",
  "key12": "5KGNbJetQ1upr2sZsspXhSrN6dEbNqQHZ3VPAPNGPsZ6RXumt6zeb8kkQGuxWEzNqZRYK29w7QJEvt1FXWXkYuwk",
  "key13": "5xkFpgPhozu2CaMjXTcs66TPG3NC6qHWtX6u8VZXUc2cLsfABnJmNAQWwm4BsVWqtYcmhoUkVtfQeV1d4zDTpmrW",
  "key14": "3nvScKNo92y2qTVzZkTswWYS2aN9CtKR2wwhvKuBVqXuVga98wS873krq5WU9JbXoXwXboDRuHxtE12tJwqZfW9m",
  "key15": "3n9VHSj5sHyfvTgHpCAUJ9hV3of6D61N93TrKMNnowRVPLGzfWFeoS3DkVXHQNzKzDhFzVzPUXaH2pskQjVTC1rq",
  "key16": "3dJ3CUvfn8ZdnJK4Ru1ZGk4WAvDP8iXaAMPQMJPjobhavd9xUEyLh5k7beQbS8XG6ksX2XGwy2wBjro4F8WzEkCn",
  "key17": "wK8MNeXendWrbQSkNXWjKzXWYAUb5J33Hs92EXvvkJwTJcYtyyGtiJFxFCbx2pYLa3wRRqViuY3jqJB926eStXV",
  "key18": "4ptpwKyUgNrDJmBaiRdq4kq9fdR3k9PBFTuCtemVAegWr3wmUncivPR8wwzaiUqyyVvPPMzghX6Sfu66oy9DjcyJ",
  "key19": "65EDmgAoZf2ymgrwfFpu4wFSQQrss7ksk2i7MroLRxsaP2anuvsHU8ZMDvHBwUQYJEjnySe2XFKHoBWJW1xqTw6f",
  "key20": "37cocBxLJrkW7y88ovt4r7Z3GSM9cL1KvGBrDFmvCgquXfNZuBv51u3cb5Eio8gEh9BkasiEzZn3by44UoQkbXAx",
  "key21": "MXxb8rHT1QWPPHLgPmnHhde2nSd3gftDkCcpSAQjbV8vwDTLFZ4wgwBhmPrbcgUfd4G9Yus4z5VUGyW21JQo8jo",
  "key22": "5zRhwnrpSBnqy6xBycusuGnsukSTvCbLHLoeP3vR6h3A9CSQnTjWibZ6QF7sV9Xfewo36vr2kQHXoorG2yKDfh2R",
  "key23": "2k4w2eLBohXW5y5ZjLC2vU8oH1XAmNDRGsHsHKU8s8geCPK4vzZiDCNiNQstiGHioRMAygJXrjVkC84iRqpCkCeA",
  "key24": "D7EEa2kwkadLAcSyxfJEKGaCaCZu9WmBPfcYUemsWNUQK9Hfgz9ZsBAJreubpAqXnsh39fpAroChHMP37e67Niw",
  "key25": "49f5YZrHXDDRiiYWZyp5wFAF9FqvDWPTpa5WQbjHKf1CwBKXQvqs2Qw8rhdESs9TVsm9xmiMLBhPs1LN5SCjLttC",
  "key26": "2PyZHWwgzqny1CzjH6WUuBZpppdopLMY4ccC7P3v7p67AqrQFcxZ3Pt1wirxyjRsHHvwUdVUHFqobNo8NoPUZHR",
  "key27": "25F2az2Z4YgzSNT65gL3TvxywDAGrNFJogJPpyh8xoHom9b3KRhqX6Eie9MMre5Sse3TGK2RZv77cziuo2NPhFRE",
  "key28": "64nf1ZvYGDZr34KKdARzwgFcRk8V6mccwPqNdDtkkdW6YzPCYPBCU7ZpACVjogKts85UktXzWvLFMZaqs3UgaghK",
  "key29": "2n9iSrpbm3M2xALenDkp6SLji3rg3GX6D4XtMHQbFsyVdx8WyLWS6fcBGZUwKzBVk1RdQtrzavDtZSJcVYhq1a3s",
  "key30": "3pmpiE1sMajogtWwLMsKiRdpvio8WGUiNSN7diCcKVzJYmATXhxrifujhQjB1Dcg2JxgM7VZ9qr8qCX7vdN8thvM",
  "key31": "42gzA2VZ1NG23PiEbZyUfdqbHF8qDxdQgHWbpbtvLMzyQwKbHKqQ6JLJ9F38fSdCRtxRQe5dSzMYtELEucBKeKCW",
  "key32": "44MZSJBQoh2aUs4D1Z3jr7vUz2Uu5otUKbXS371ij8ST4a84Nm1gZ4QWdsqkV6LBH1bvynozcjgT6vzncYRS89oq"
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
