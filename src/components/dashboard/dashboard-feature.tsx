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
    "3QBEXmcDoTT9EMFo8sBkKropPJBbZAWPbV84MsoStv1jULz7aZdNR7BGd2ddTbHAw81euKmDfdhiabC9vKQyrhyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QDXVYzyaMXhtin2GJfbYN9e1igztxPS3EPX6AJ4UueWXqq5c5gQsTNLSXzzNdAn8P5EccPJBUvaSA1j2WN5S6Gp",
  "key1": "3h2yE9PD3kGNxg5Rq6rue4XmtbMQrzEhKR7KZcnwM5iZsMnhdukCU7QCeZCnCxgMGWyrhMRfAnyRMBtNWumWMjVX",
  "key2": "5pnem6m7AaGmfbFehgShVzwdFKMTK3UEErzqL9A167RRfbf6AXkd6u3UBppvgjbygjdNPjBh2pCwC9UToeE7xJi7",
  "key3": "3zgNYEXCCcc1uucorWgXv7A1uViMGWSyXRtyShavwwzTzUnC6XtNkEcPActVHf24kJXPJTAnisGTfazLaMCn26Md",
  "key4": "5Mk5y4Z5GbELfRhBwbLF5CmpBRGfXy2sjJ7YZcPFqCnDEwCZjpDrscA4jAhWXqip1yFSJhYv53Ee4QJx3M8zRjLY",
  "key5": "5FMKjmctTibvPHrgzsxnZ6LcqtJmiQC93ZLWsvrwiegPTpnQZj4LpG7pJgAwo6YsnaqeyKupBEh4nS3XUQ4XtFs3",
  "key6": "2vVgkhQErmfxsWRwMVThTccsfZ2eoujwtoaWkspGLXKMAdCfNi6FuEZrPKJZu7DpTQsrS5v6Dv84PGLp4va1AhGx",
  "key7": "38YR4VBGuVPjqwmB2QGtdajP2sN2k6c1eFXmSgNfEwvgLZZgyWnf5k1Krf4MNeM1f65kFqoJajBeCJ5YTP1zuiBe",
  "key8": "2omw3XzM5uZp5tGMSSNT9RoniHafBMX5aJFEFrHmaNWb3KyTqnA67b6npQqmMASa8qX6yoXLzDn2yj9cMCVyeDqc",
  "key9": "GUa6ZVLKQCUwpQCjiZ2NCyRcpXUUnnPseTRGkn5wxbLMKgPveSPjieTq7PXH6gjnfFmZDN2djxGEhxTgwbheQsB",
  "key10": "4C4krTucFNkLpLnpNrqZx97cd6NHKvTTcmqeydFHxRkSemJwwaFQhu9fmD26zChGbZ1644mZjy8HuW6NkBAgWVTY",
  "key11": "5SJxc49yPPoJxK6zMdKRaLg6uM15Wc8HuKm6RmDzgS1UdP6gZ7rSCccgSA1bcgYQ5zi3cXLSp8gW4d8BsdejDegM",
  "key12": "5Cic9nGvQeYcPEuZJonWrRYerecNeWesRv9oD6r3czYJ92FFbMKRzQ7UP7mFmqMysQLW9KSYR6UBNFaLyoRtyged",
  "key13": "3j3vAxeZanyizEdHrvJKvMKcQFXNK5yqcNdJkbVWbt9qWPn7CWJvvrEddaR7kspypvDK73WNgASsxnQLh3ML8BEA",
  "key14": "tPTTLe5B8NpKFg6y2P8hcG639TqgigVoMbF3Ceeg151M52eywQWJHvfHMNY2FH4Cjkzdi6GMU5LqXNLasVwewsx",
  "key15": "wyznHcBLYFiv1McmVtHMjBAuB4joJsxevBr3HEhkCC2HgWJWfsMVPpCWUqzkQ8JSutE5h5BYUq1VySWPkvSc6ug",
  "key16": "2T5UFzjjGcZnGPvEYnyBRqozpNb6cKY2r3AgMoJpTR2BkywCnEC9oGjj8s59Q6DitvMwtkfaAyH37zHY4LNFS7Jt",
  "key17": "65REPsuFCn71k5GNGj4Lfy6V447SaaUgkRoPVz8iA8GeEdPJ8Gxj8yLaN4LfFcykMZv5h7aAfsMGbfWMFpS1F15b",
  "key18": "5pZZaamrejP4c1mW8AbGxh3Mz71BHhNKUZiCQ8p19RWnQkKScmpYw57GN99bViHNxQR5gE3v5E6iKFxSRnTRKbvF",
  "key19": "4aqbnxrD6Dzye1uTGgX18LfdvjLioaJbpGxWF5hC1ufcCk7TG6UGKic2DXdf2mG95zBC8TuKoBwQSbNS3io242y4",
  "key20": "3twKgWwxGokfSgupgMo3SRS6N5JV3qEkQHKaJv519dgHYtBYKc94Eb5mbqoQ67SAfs2AZZrgv3LUvbJxjsbeVvMW",
  "key21": "45Syb8tjNvrgwkFs3SwaYXD3j5A9n9qi8PHm4TpgyekQ74gHfHg9D8fEUFzgybLcP9uaVdHJcURMkf6z111NTzBT",
  "key22": "3u7mouKhofyqQ6V3GzdJs9vaoEHcJjH892EZds9vyPg3u1747mahNqqszYeVu6fVVbpSsfVxKxZ8B3hySYUzx3Vb",
  "key23": "3LuxnYBzqZH7pgCr2CSGMyT3ztg2kfYvaTg4YXkAbHbx1ALwsspe5j3xYWuBfuy799y3BdXTq7TjfmeSFvRVd7ZZ",
  "key24": "39jaHojqE9fhkpzigeooEUbYUseyFgaFBHkfapSyApamWbgYYnn1YdoPAUhH1GStHgDjQ1v9hAN6GP2NfAX3zKnc",
  "key25": "2Pu7WPoG1fBQSCWgXYV2r7PTJCWqJWYKBgpfRrDH8TjniEAqGzmMaPUeexC2L9ndM6h79qznAAiAWvEjUs3rt1pu",
  "key26": "4gJ7L9ExPkEuLHPLpQPNdenWcTnm4fgDmqx3Exx1jMSX7uxMLrxAVGCDKySmGAsPa1NHXJBVrSC6RQ6Q7RXLKmfz",
  "key27": "3HfYDwTLLMoUcvsFjZmwXACq5eJnmFuqZV7kYLURGyzEJjTS4aZEDkKcqkn6F3ZiecoqiPAu4AvNTZ1SK4dsXnGj",
  "key28": "4bKmpvfsPV1D47m65srHxByW4nJyfS6Lv6rmvjwiFk4gxfCHwaHjSbmHrJBwPyNQP1zGb3rgd2QcSEu4FkPL9qMG",
  "key29": "5BfJ42WioXcSUsvpzJ4yhndi6r8Aqhfy6xofWb1PbDSoCyVp4N1rXByBDKSwsDsu1rFQy3ib5eyHhMbSPkTMbNgW"
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
