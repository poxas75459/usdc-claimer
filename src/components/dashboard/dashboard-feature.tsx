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
    "2tjx4p1vWC8mQViqfL6TCRkFvnCc8LbtuMPZGScb7JD6pho8KX6VcoNnbKFX9yGoksjzfQW1DCXqbLpNwfFabDAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ach6KApiw755bKSJTF7wFw4ZCPDr4PP8oXCXnZRyKynHqAmqKQWKBYqsj2sXnHYeZjuWtd72RLsrMJp4LJzkDtS",
  "key1": "4mn5D61e31zz6UtwbzhjDx4UgQhJEjh1vkiBeoSC6yAJzosqAPs3FyBbgaChbg8mjx7xJhcjbrHTwaq9UpYWtF1e",
  "key2": "4JGPVNNkiVV1g71vvuzFprvA1eShV4EKmqeFAgr6PdM2UNCfb2LZZksarQ2FfyCuRdJxVrSTwwQuespQWrCUktKm",
  "key3": "3MuacbqmcfRcVJfQHHqFABUYUGcwYyEJG9THbxtrqFeSEDEJwJfrTy8Ts2acPrikbwzmi3fcKEer67vKMPyHcUeY",
  "key4": "Ziuose7xpCAaHeXMtJUrXRHJdnz43eHjKHL3TEEefi7WoZZu9Md9ofP2iBChyNncTvLh7gJ3kCqyLjeYXXofTNb",
  "key5": "fyH4VrqcRRo7cJwPpvWnf4dZUCQJRhuwQiP6aA6P3RPhrgp8zGnLKgGTQ2q5gYo4i5eUKq4HjPrdDCdbNLDKKs4",
  "key6": "3jtrpYZaypHRMKmrqQcwYr9i3o8H6NZLgFVz7SFQb68Z5st67M3XP2XegKnwR4eBJzu27gKWGKdDU6Ngt9bhy1fo",
  "key7": "38gM4xw7vK2VsMkDkqk5tEbYm66UDP6qnRG3NgfADTQKMUSffS3U2jLggxcxfaQeEGy9buuxphmXRuKyCSdCRc4h",
  "key8": "2MfgMH1yJPAZ2XaDExwbZQba46aGPMHvAcgmWnxeg3SUKbyqRo8yQsgxSiCJTJoFzSEukUrnVQN2jWJjaL5NChnz",
  "key9": "4vSSosMFMB8AgdybP98CnZF8b3LQBtmTE8GtcH8eqACE5CbwqSVA8XoyycMKSi3wjhSrGCtVEBzBSw3KPRbbXNR1",
  "key10": "48k4UJfnH73NtV8HVCDgnp8vHrVrYWDpCBN2pcsLRBec83u497UT8oHTKWsJnLD2RLMfnTXTeD8Ung6As7qXeB8g",
  "key11": "3K2MWxWaWYYi9YHnM1EhGf37KtQ8EsU6v32qL32cu2ch7BW9ga6V91Ra1MhhGckjoGwAeHUntahRPinHsLhNk73W",
  "key12": "2ELuwcewYbhcY9vApL4j3NXJe5uUPKK5vCQhkEZ7NErWf4FbWM5WRopngKfG9fQ5MrXZXrNSgeNxxMbxeZ8bbcgS",
  "key13": "3F2rxrZUu6cMEYqJQ4nLyrjLb8SbaaDDiXLzfeUA8RygTqFxw5Xt9iZ6TRVyDQybUk3HtAu8kaDEFrupT2UZ4vfs",
  "key14": "3dEH7MCYhtEnRXZr396wYyt4Ys7kaPwUWLGEgrMe5iwduMbMCN7eLremASUvGhzh4437pMckeF77RAFLecaU3KUo",
  "key15": "i5tAxR2Gd8Fvxg7ZQ4Py427G7gf7anU3jL6LZSYfHhzZFE7AhRdVRL74URKRVJFPvoBwZCvn4ahjavYuG6v9Cew",
  "key16": "49tvedbhwYW9qM3BZuGSfWEvvxZYbhxMwnDBF6wQsDX7YJrYJhLnug1DwMZuVCyFBjPqMpduDESLbiogfK5Hrks7",
  "key17": "5mzFYP7WUhf2RJAHHQvZ8zjmBiQMyPj5aoq3GYQrLRPYB3v7b8e7t841oQ5s6dQU7sU8v7BoLNkdRNfnSymEybJ",
  "key18": "5Sx7ErLLxnvWhn8dvGMDsy5qppt9ig6P9T184zsTADkXZeKiUXa4XcSpQS3HSvfXTbshFcMZwM8ce7Z6D1i782s",
  "key19": "6N7cR7rnQuDwZzmnahamZi17e3qnYf5dVrWsPGijYqna3vguD8H2oEAEoPk3WGqBwq11RHh5atnXL4BDUPZ7U3v",
  "key20": "2Jf6DbaxWQt85XM717edyCm1gktXGJBUH19sPUQsveQCsLzZ1E6BQznJM2StiEexxXjDphCxvvfdmxPcj3EtVH2w",
  "key21": "65zPeJjd1gYiFSQnSQQFXEsnwqNV8DPsjgcj4ggWncJ2QaWocJP4t456RoGwSy1iuVhPpdLbvqdH8MybCkXcxqq9",
  "key22": "4eTnPyz1ZN2t68Y2q6zsUJ31ZyHAFhcyixNzL7yZGwvsWY1M9GPooxooNof77sdULFNNpnXdVsk6LKAohWtn3im",
  "key23": "2ZjcfiEagyZTv9E235Puv12AGirTNDhqgvFBzwJtHYaLXzbKowYPSv27BqkWw4aktAkXVwL1cqhzxLHxhCKByj9o",
  "key24": "3GtjWxFU41zu2FAGa73yc7tLKr69JnQW86A9FiRRgpjWLsSnudfeqpf2iU7gDf9e2kcrKuK19K2qrEu8SUeZJSYZ",
  "key25": "2QcqawTaQmoJ7wWYnYgugLg3cmRaHcxZfTYqbtcQhgvFHgH12kfgD4EmvAYKVMSyyQhUy2YZaiVN3zG1qceogSh3",
  "key26": "5MDDea8aa5WWnfo2u4KPtwuSTGjFzQ7CcsnsT5cphZyPZjqGVgK2xkhUx68Cm3VPbDGAyLMrNbx625tX1q4ndCVa",
  "key27": "3ZDt7NKrJY2t5AH1L3dikCU7o1oGuu2DFfkMhNtNzW1ivCwYbMZp5mLV31ZW56e7BQ75NCC8RnoxmVU2tpweUAtH",
  "key28": "3frh8HQ65aXsGRxJfWEvZ8s7Lz9DErTHkw8wsXWxQ8UXkA5QfACxEjCBEdKwSFjhryuMNs2HrPoFeUjNc5wxD6Rs",
  "key29": "2juBWk3DVNurtUbNDihb6mC3X4YXBfKJuhUFnGgLtcY8TjgyiLvXQPwdRpC1dHxeyiSZkFrHYxUPzMoSLrvxk7Qi",
  "key30": "3AsAFRvW3uinLWW1qJyx5BdwYnu8upK4gbFjNNJbxrqeU7nwLW6XAfX4PUdLwivrfwUC3cPXCWTJbAwrE2qi5wfU",
  "key31": "4EJyB1JrPVpD7XQRZqoG2tExahDc1uBRQyQHWfp2cBwoqqiEtk1u8k4AaNcz2MXWzNp4rw1GYCWdCzeTWaAW59pj",
  "key32": "4tGsf6mexzPgMPoQweijYWj6WwhUPNnxwKBhy4tjcwJtKVqk1FtxoP9GGJtsyBJBTHStwGTpBBFHTHsXMt8GnEN2",
  "key33": "3opBXfgf9qLpPYjdhWgn1esaNLsg2876wFQXuuoGXFXf4vmkkBtttBVjb5P7idBmHHeQLgqQfsVq1Re8F3HdYzkg",
  "key34": "3vJwSUeb3LxTKQKrANqDw5LR17XgX1fUJLmPJZw3bZjdkrLBDwMqi7AiZyqRBZoVKchZXY476hsVZizECinECyFB",
  "key35": "421vRPcgUTkn317dpR91AvJFsckXwqTnugDNRXTBLTLfmuGwzQW7AJBnm6JPRdQnC38Ju1tm4tY6EFFMx2G8U4VX",
  "key36": "5KgFnx7gaHzTuTWDYTGvgq7h6v58cXh2gC9H5Zoy2WJmJS1WvKGYpXghDf3sgeucEBK9SngBL6j2YVLfDLQHq7Bu",
  "key37": "5hLbigGC5tpdVR4cmeurf7mebm1nmKkEdQECaWhh5vUL7Sss3B9RjUx4iuuUqAcdP1FFwVzom9BG5SZUCeJ74Tfv",
  "key38": "iKYXLf9vPZjm2koaWoHA1YNcBsPMfVWFpzaZVxAUe8WhCRbBmgqUS77xaesGRy47xTtzy5pT1PSDkMGioW3LPLX",
  "key39": "4R2q8DuJYu92vnoBQ8UBivt77LKXRpqCLNrEeozqcQxjkpMyqsrAKwewam7bTNALCCUDdpYfksbnixw5ziV2APb8",
  "key40": "37rELLAwDfyCUDSxLCVyR8jNJbGdjXbcuB27DYEdS41C7eh8zg9T6dqGDt5agUGR7UQMTebp5qzetTFRxPCxvMmQ"
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
