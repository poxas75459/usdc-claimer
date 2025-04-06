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
    "5QiJWq5Exsu4ZuAuaVJ8HH6aNGh855sqayzswDT4FwZzBDtxtFdm6a23KAGGoHsSVrpp6sikHeKQ9g8wYUey1rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxjSAoH99UiMXXemUrGmKU6NQCdmf1cb7LGv73JyNY2GFdR2eDPRKS7CQgghTPjuTd9QayZTzUUkVERR51ZV9Se",
  "key1": "3TA39crbd9cfGw2tsxCmqXQp74pA6GFwBtPMfbNwMe3A7eGJSPQDmDnAGTCCg2dEdvvFMqHuxvEYUY37amNyVErS",
  "key2": "BG5xdtduRKQkXV5EJsNR2FqSQDNYtJujXSFs1yGapH47CxsbCuuGKJAA2yvDijRprA4qrCdZvgBDs58AgrxoXT6",
  "key3": "28nyX74RKYgGvUDarQTQa7SdtPcgFq3wuHkZuvdtp4H3GCJwiav1VzMn8UML36ccSdCTmkUMYqAEjPyM1xRtwdSL",
  "key4": "51zJs2RRGs3RhnWcJRne8f2WQehGtCjsmmuJJFfQJvKs5chSFAmrs1CxUEaJ2PUu1QfGtqxNZHK6X1E9F93L7oaw",
  "key5": "2emvtxSAasfBZcpKyALDD6B5h8ez7EePLhw8tEQiDir56F7gDo9zf1ofp7avsk34Kg1f41teJvNyfvhPN52PHdbA",
  "key6": "BiSYALcviP4cFcBBD7fWdUhyhic7UQJ3NqrzqMmcpqoR7oi4xSKfULJHDxtwf31yWKm7Nx1BfJCkwPjXQ6bTzAm",
  "key7": "5YCNwfKJ8AiLMxHYYGoeEXrDCSw8QWfZkzmM2t2MGM3sexNwzsuPkD9tt7xmEbRWJLEXDAJGW9H4P8fpuN4aG4i6",
  "key8": "yYepwqjVUTRyfas2LigJ2WWTDWCerJm6doN5uvAuBWJPf68UMtYMyu882mnSnZVAJ1WLyEnZozMZPoWNAh1ppzE",
  "key9": "5Hxiom8fjc3sLXXu1nr2EQHQ81BZptdyjr2bWknPGuzwV1WC3WAoB6HnLbqeo6ySnXppqMUWaB88KEKhXzrf3kB2",
  "key10": "34CVcMEjADHfBjXDpgckYfbukxxSLqRYHoMvsTo9jm1SJpSoGw5ecYpCZyqHxuzH9PVWjvXPp6sXWoYeJWDvtNWu",
  "key11": "1ZKbvgwiAM3bJHXdQ3n14CT4LVGJnKAygcYpZArsQd96Te9vXe5wzjzuNYBttrnmptdqNMG9vJSmH1J79AVRoj7",
  "key12": "4o8hrdMkL6MivzYgCmY6u6UEDyZVrynG28ANZwQgVuvZzBDbs2LQC7YKkheXZeGfMTbjhb1sj74npsnXJdf7CxLi",
  "key13": "24Y8tZeRD8isd4EDjiGi91G2RZTCqLZGBucBrEb1sL2zfieRP7mttmocuqifyuhuYTCpKiTgBNgsgpqUr3C8fSdL",
  "key14": "4xHdXg6E2o5p5AC142ZLp4nrZLhMbEUkjsJBH8fDwQFwmynW956LrrCV5PB2iojESn7xREobSvKT5pf2SjchywRV",
  "key15": "GaKNLEqazgqq8MbVUwAVugh8uDtMB6aPNhxuCQCQ3GhgvGQTYxvRyLB11CydeobfqQKdovZ2CTW9gT2cGNpWh75",
  "key16": "3jw9eVLzWUyZL7Wn3VCM7wDU62THoKbG1RqMYYkmLs1BaX1y3q4r7ndc5QGEhKwxC6E423VxBjCMmxYKc9trCWT7",
  "key17": "53UDVis8AifnTmKwBUfdG8CptzxjTReyZxmRER4WPqqvUXjsyR7xJfCVyXgbCHXpz1jJrcC4dDRevDQF8ajK3DDc",
  "key18": "5j6Kn5pxXonyXdjYyRNm6siBjHkwEKh8MScZcBMpYhA7UohUg7C6aGpLPFdj35foWVe2YKxF9iTHe4kkMo3qPWtF",
  "key19": "2WSGEbSgwtuBTi7NxJRGgwwxexqNj66ZSi4uWqPxPrKgpqmnykhGaTDHfqfqU7sUy8NGjyBJquPobtv4EeraosUo",
  "key20": "4m5e7p1mRcfWQixb8KhBZzvX688cdRaqy3svk6hAbbCtQL3M7Kmaz2RkwNEv7DZbfYi2G4PGc3VwkYQm1mW6qviL",
  "key21": "3RwdL2Zz349UvkDCbyac4NXKkBLQUthVJdofWDBGs4dEboqBNMeHknqcU8ndZDDVYhv23oLh1HPRWGavL8fcsczQ",
  "key22": "5nTC8E9i3LiiAWHLoPZZCncv3wr6V7cAJyBVHZondcspbQo7yRdfe4zjNTJV6xYyvCUMMqks7WW6fGeuePJXuG3G",
  "key23": "2Lh12gBaGMb8U8nbzU9nCA1rWU5AgLNBNYCnt4a8BvaN1pTcrP2TFks2E4o3zhPLBQwf9CcfT3M4M71v59svUsuc",
  "key24": "35sADkpeNxb9VSbdKSNVjCtpVzyDXK9it69F8zky8Myomq2i6VkcFXDd5oS4oCAEVGmrLrgUuMuBssxQUgtbiwQj",
  "key25": "3KphfbHN8QWzHPYBacRect9vRbPapoQ6r71oR2XVHCdPgStewnNAhxGGWw5aoankaSCkuyRAgaQarKpBuxWk1u2M",
  "key26": "4RLMqbhQVyCAeFMR9dTsRkNYFLxrHStT5XKfNwTcLV1o3Q1sGkZzVhGbv9vuXL1cPbwHYtJDRxnWnhM7NvnQtzYD",
  "key27": "5kMP9aWy5fUJkaq8Smo7PPeqjQaW5TPw6PRRUdgoHbjVGPeRJPZTNY3xN7EN4QYtJrURUeJaw54FjamcM8nn8Dvu",
  "key28": "3EaDRsEuFA2PaqbPVVCJKJgwYrDJMPXqJRAVTNeob2PsyfKUbszuYEz2bV4n8yuzEMS1Zk4zC5SJcXx736GLvAPp",
  "key29": "5eMBmQgk4NCzvCjDfg77Ad6pbxUWQTKZ74yqLWBu8i8ZR1L7BoXqndoPahcmEsCq6xyhCBHZLPGbYpfSWPLGCzbw",
  "key30": "4ZTHzECjjX4rPCb3HYa95nRHU3JvH7Qt2rNouKAFp39f3Ec6nqBGHqXj1cd97AkZJh6zHYSJDcgS8gcmZh5vK1eD",
  "key31": "o7cSECRZb61YUTM7BWerivZcFPRH8CVepFf9T6NB1yVxJNWToKsjCo3rW8Dh4CV1ygqA81EaRbTm7e1Y1VuZXVi",
  "key32": "2aXtwvgwEcbGtdibXJ4NjE3Xwz6kFJZac9EQ6QUGeAZLFDTZUQti4tooU5X9FEi53w1Rd6bageneEENDDWkUhDyo",
  "key33": "cWK5wSUZNR2jDenNhAdphfpDDWVNKMSdWSYUjqGYVJgAnJweyx1UyMWFhMfpHq6rAS6nAt1fHjCi1qNsQ8vhGLz",
  "key34": "6792mCud7LSv6SNNZJf6msezEyrCawPdoWsCWp4VmCNvikuQ6ey8sZqS9tJnJrzwgZ5RVkiyvxuSECJ4XkgtuSog",
  "key35": "2GMFoydgf2DoHfMjVskKaRJzriQTJELNcMchcwMzweHxLLpDbcHpVF8Zx25bQX5pafGEHFnJtUpNjn8r6Na1VYbE",
  "key36": "4T6b7Bfs4Ji7ZrnQReFoKqfPrTRECaEbrqAKGbCE5D6jXKCYFHwwRkn3tV4J8Z4umvtgyMSviXozSZzL51TdNWj5",
  "key37": "3bYgvMUa87FoDsbRvnPJGYydtXVSGattjsg8M5k4xQUb9DezLfD2koGF6GZNJLc9AYv3RWeNJv7Y5XmYjrodykKg",
  "key38": "2bLCzq9nsuWZMPDKmbCussPcWVSXS9EGHLvJFawwmiLaXPDKrJNg6nGDMvsyQWYYZDWVmjXyFh2saKXybdUJ48Gx",
  "key39": "3pjyuhxCGgUSqu9LrqWXyFozBCSjNU6LZmZgqeMqVWwGyJNweu3wS6U43WwiWqU53m9Jz2qoqrWrekLz8XsAVcHU",
  "key40": "32pMQY5dTAWip4qgdzKCw8uCkXS1spqssM5SUjURUc66xyVdZTnMWQpmZ9wnoi5W3k16RkBAWaHSrSQZNH4b2oUE",
  "key41": "b9BBP5gMaPyufTeb8Lw1azrSRqYaYn3B4XxXKmJDKrhGWHF4VRssBMwYxpxafnQQnyW45JEfVD7rGUW5cpY9Y4n",
  "key42": "wfgXf9CXZagXxLk5D2QHWT2XKmzAPDYHoHbdiWhHKWSYZPbqaTdXsiTJ37ucehbKX7q4wF9TXaYQUTuzeERKm36",
  "key43": "fbLxkJBxGQZZDiRttxtqDQnetTbQR4QLm9rC15iX5EUS6RNkLoWXMFJ5tPtLCY4xfg8ZCtcfQAQMeWKEerTdmjB",
  "key44": "yVFsizx6qvcvNUq1XtbJMajpPT5m9uyMVUqZgXNt57SUn6ZrrM8XUA8DYTBnZtrcnFZ1GTLqcdRi5hQhfv3gqQh"
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
