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
    "3nFuxFEUSmfCryMdz1gFJVYrV5udebarQmQss5tUEvMVDmQkfFcE9q8oQ1zigeyXr1y4NYKFGaB7HDgpyFDbQQb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4UV8x3JNBXTrnjY7ikMuuy6JxB3MbTW9YPuw9DEJfsvtVYj6ca3zPqTrML68TJnYmsqT4WZNJMTDBvZB7b1APr",
  "key1": "2aHVt2h2UBYmi4YcymftrPYe7a7FoLxN43xWMsZTdnbmeSh9eM4FwLgcXGc6XKxwC7gXNAJBEcFuCsfzGqEj5CxF",
  "key2": "4d8HcF6jmqixcAAvYaU6qmYXdmqJrr7WxWX5nxiYCXGjvpLjbM2MZ4Jg251Y6FARwr8DxCRvhhWYdBgqxz2uPovv",
  "key3": "5KRRLtAUTANxAdcPZnf1iuKQosCAaMyXpALFfvbAr99MHvZtjyRrp6JyffsJrWy8pkjTdre9FsTPhNoXEni97mCS",
  "key4": "4AXfCxcYgzvZw4RRLKqMqj6aFTdYqhxbpaeNUd3qpqf4hZHXrior8Y7SkMXCB1fBtNHr6rzfxL3ZKY92rdXMKTEV",
  "key5": "2z5xWTsRzHLqrxvNfDKjHAqD2PXe46ShkwrRzhcUVWr9adz3ocrHL3FTbTckZwJywL6aSpsUcJDMfJhwv5ZDSiPG",
  "key6": "4ayzgpKFZ9r4GU6tzfXduLthW3Kttf2qwJpRoRDNJdM783N2YepdbdfSzgPEh4Mv3Z5Jv1c4woUUfwLvAYSiyNwc",
  "key7": "4BgyDBgQsqHzo26vSrEL2LmThFXxBxsPrPWDJJXrxxfZgNMVh49N6qsmCUkyZ1bZFqci2VNyiHmLHodjbgncVCUp",
  "key8": "4U5jDzbAfQfp3kTi4d6QEJxKfTdJDMPEyZA5y9tVsJeMEXhnA6Bh6arPV8FCmQLxufuFsLXntPZBiLLMhkxQTxBx",
  "key9": "3tfXM3EXqqpys3XroQ1HYPgHGEQta2VwWrAB7Pw3ar99pjhARWL14Q9FmymEvNSWFX81J6BoVUqCHvu3TjY5rmMn",
  "key10": "2HFpdo4apuin5LPVnAtL515dbKx4JkhzXTANwRPP7gSw6Aoa42cs61dccBQ1keNZ3eYuRtpnaNufHxe3ArbEgEBR",
  "key11": "1b1fkCRvGMTSPDJxEykdQBfEHFV1vuQDw3tNgxDje92UTvpTBbPLkbYzMJXiNR1DtDMMjnCbxL7gY8RoYKz5VZq",
  "key12": "e3v6xBRbeij3y3odEQYsm9szqjZX5AECYFVFcuoKN385DERRgpJXJCehNE3FfnGNeCB8Y42NpzWGJtphdfFBQ9X",
  "key13": "pyiVycRxkDmPoGMxdbnNLyVaQwGr9JabtLz8YKV1DLYKwnat1GgkhvoLsCFUdAWuoGBpZWdjUgMEndMRActVmUJ",
  "key14": "5zyaguCoVk9iNDFgKuS9Fxy3JEbqodEqhmXptHgRfAm328tRTfH6oytFa2ppZUxwx3NNDmKK7wG9UhHXiQH1P7ud",
  "key15": "4HmjNTUhEooHVDYembRzFLFw43CHgo5PwduWzq8b1vqrDVaC7RjKKjjv9ViBUz4KXEauBvTFn74gfBWaHNfUTabY",
  "key16": "43Ry6NUEMtN44Td1EWLjKKmh8Dfct9R1t1HaeV9dWXdzxhWfaiBmnwJDisd4qvYPayKCuvn4b9dhc3ytyA1QfjDa",
  "key17": "4ujTuoN8jR8oYG7Gt3BkQzMKt9Aj1DRnpFiHARUCjQx28g7CKSsKYTdCCXxYfRS6fWodzceD4Y9ws8g1E6HYL7A7",
  "key18": "51xYnjREbdd1tgzhU9yoLTa3PwWEt1d8G3B2yGZ62gT5o9rMk2qD7pCwpV4x3uAEAUsXsByTnivKpkdoE5nYBsHM",
  "key19": "3u3Lp9uMWKmJvYeG4PowcUtHBc1RLN2xAy3SXinXMZK7kkDYbr9Hyoj8UugvTUweP8iT1zo5bD9ArmnASJzArP4p",
  "key20": "4LjfRmkQzWVMjYtFm38zabrkL3pYCFSQRhq1GxEkMSY7g9mDkvaDPsaQ5zTHJ6R36nMkH5tQmtZoS9RB4Ko9L9p8",
  "key21": "2JSNhSjbFyLKVEmPigT3Uaygb2cBJeSoLnFZWS5iiZB2jgB3pFLoPkC4E9WhoeuNhW5NK6wwgxVW43dfHtVfPJyE",
  "key22": "5y4D1Wix4idS83QaWgmVD9jDJ9h6M8pujhnEtPn4o77tNYPzWgXow4RcVFxMHrEnAVgXdWQAVDgJG43LS7LdGoAc",
  "key23": "5RFqsEX8otZc5Px7A5kG6bxN2QypzQkCaQrgxBRUgk3w5Rr1CrcsquNKjPJhkERvqh5355gHbQVp3cMQZSZL9gnE",
  "key24": "4EHskErtnTSALcswqnN4s6SCDj1gPNyfuaVuFM9CYnmwXavGEG1YuQ7QUSyoAxe5hhYH65YnpYfMjtW8M9zfUSHs",
  "key25": "42ZpfKq3WRdD2KxzwEyTbFZa82RjNnYWMr1HHsuPbDAaVNJsWhVmxU41omFxYCbpfGKhqCYyZdCzFH7Tb65yx2C2",
  "key26": "3KkepfXoPpg8VryEs1rxk8hMi2P4SyFtrQb2gsdMkpb1nUxUt8apR724vpNLQ8BuSrfXdk4m4L71qkKDQxPdHQzq",
  "key27": "yC1h1WrAKKmYH6oGHZo8nEuDnhBiQeXXwa9qMGXgChn3b3Q5JwqnvCLo9C4Knvcy1KyyxjMLmPuvZByJCoCwLv1",
  "key28": "5U1bqpsxCu9HjFnXwzdLfqJw6cRFZFHcZcidFfa253aqNRmaQjgcUJctgr3hRLh1eoLWqCvg83zMyZFj2KAKford",
  "key29": "3ySgUbgNGPc2QZyx3ZbKDHA44Skeua2tr31CW4iUWQQJxfLwWx8W4HTUFLT7V2vmNaWKiK53DBsWrozynuKLM797",
  "key30": "48MhUwJmMFp2pkkgXyVKQz2bPGqi3coxfBWygCWrowVMYBKexLSuHUfpcwYdc953JvGyknk2KGVKwo3YF38tT5Zv",
  "key31": "3F98BfjndNvV7y6ofnXp2v4ycNvpAW7VHCgbqpBqH1Z6u8G88KWduSqV7VCZP5y2pGVEAmptimuLxNZCxw93B6z5",
  "key32": "2xPwtUxXcQwjLnT2sMLcsXjpW6coXjpDqSLndHNCradpiGeBWCUKrt9rBbNrw9ZYRYgfDDMDzqR35AE2TPM1XAQ8",
  "key33": "2ocvQavzQdpyt3eK9HzDQwQAXKfnM8DLBuDE6g5SuwPQHo3NqXg8Ni83K5gh182iwy57pLdSQUzTF6vXqDgsgMgG",
  "key34": "23akd55du2j3N4HqYDTAYZ1UW45Nb918bpimEA8RwaxuxrTysYHnSRdthczVyeu4B9xf7NGEcvPhu9pTvYRYEgtx"
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
