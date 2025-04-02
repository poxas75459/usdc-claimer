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
    "5rsXtWgYiXirVNCMpqfFHRTEY3VKDHwL6CkekFyAQvTJigEHhJntEH4YpvQBBBWfpfQsRiuJA97L2AbTqB76GrPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwFSzdE5dNXwAFzvFS7F8RdgbMdEfPao9pUWjsEqHL5jVcWaGYzHTt9nGspamL6YorgFLccRS2zgFy1QmXE6Zmm",
  "key1": "5aQjRiD9Z5gregNhmxRyuX1hUd2QJjT2kiRAPN6b4USxZLQkZDA3wqGTdtorJ6A6t8HC9Dnw4tibp743W6qccyh7",
  "key2": "3LHsu8nRF8eDMtAbH9qv6YvQKxD5919nnytkrGjbF9ML17aKE1dpTFiNpeX8vCpBLgaEurH9pmvy1hDNF2WVVYr5",
  "key3": "5dnZDq1SEC7qvVSN36vXEDZxSqTN2ZuHUvTJLoNiAKBzT5wLN6aqAThSihTzDVkBdF6otDD9QGcvjfy1hz4BHNAJ",
  "key4": "3dXCYW7daKBn4YsvTE99yGrM2BTi9e4K9ykmfxkH7gNmNJvLxBPv8vEcB5AVgDibfLZyYrYqu8yhHPAnnAKgR2fJ",
  "key5": "uUn5Xu4T6yCGStiopjGtMZYQK5NcyHPT1BKUDGw9NxjhjwbjGynq1x42aaETSV6BwgFhFY7oSVXy1N3UJ5rWhen",
  "key6": "6hBN4osMVSdmdjCGjBgSJQ1KwtDKLdPiZespWjFyQLP6XCj2xaripEnrguHp9bV8B1GkyVLjyVV4F2tptfUULMP",
  "key7": "gkxCmK53EQwYWQDuPRKrBPtWK48y6PM7jFvAHSyxcXRfUdNnJCkYpjYPmEhWASL5qxYvmYHzV84YYQ1PTY95L9C",
  "key8": "53AtZD4txjfQinHQTeYLR4JAjoTDgiEXAQYGCfezePArzjwquqbgHrzFdfDmkhYEgPPwZRS8Azifyx5drQn5Yn8L",
  "key9": "5bhsbnPM5wqoxn5bmRAqdbL3uXei7iAZppxktctx4eTemBeuHUvLGrx9eRG44KizsiWRMPgpKCtrxYAJX13prdiY",
  "key10": "3QsZEqKu65cm2AmHeGqUmsaBGFepme8kJnJmU7HRuhFdvKa9wGfiP9D9UKJqNW7ReaahGmTSEVex7jG5CM1MML37",
  "key11": "518Jvbch26pExMa1sruawiaMu8B1bdRuRSe3ddWnenxZycAWYfw2UtKpmjduSLyrEZRkyE3mGSpsDPmoikRY9Ytf",
  "key12": "2ZXmihRBCcWdEAh74F1qVVTAfYbs6QR5HWDdHXzugg1Jxg1aiM2VFH6fwYvUY1DCKdGPxYVRDtvZqXaJzdsNvdLe",
  "key13": "3s7gpZSuGK7Tm8jUiDgbSW6uZRygrrrG3fk6NH8UdUwf6KMBkaAAHswYwqdsqQsaUvf7NPYaZYnPbipKk3bqhFgc",
  "key14": "4Rf9hNR1eePQ2WN8zzZQHfWA7zqUZAaHJgeKEzKKnoeYB1PqWrgr3taNwxeUxL81qJa3mw9AADx3u98246NpjTMG",
  "key15": "LX1jXZsyFD5mcYHHEuQvXz9a6aYai7ikoiy8ygVFymU6Ph1M4jew69zGP1MmFhwVPsh44mHAMJMzvPVpANq47QJ",
  "key16": "5TT2JSKoc5FPZ7EVKCSnWTgm1ABwKVUWZ9Y4TqDVCGbyJq2eMXWctUfWU6gRCooUYBXgi5yq2Z2aiN422whywbjs",
  "key17": "3T1mHmo2FAgkd97CgsGNGXZwCc1epSYJfNYoPRFbQSkzcvL7iL2Y3M9KpkNbbETdSRmFnx2W4DgAFDABJHdTYg5C",
  "key18": "3sREZJnQFwhWacxiAeRgTsivMQAo4F9XHT5mPB9uSYu91jVfGzRewxS98F1BTJctD1qtjCPo2Z36VFpQLnFNNyKg",
  "key19": "25g3rRj4VPiUz9VHRzhKVCEtUG7LZgq7yMgaNoG8TsSN3r5uHs6SxymkqiTsyWCtzyrmZ8ARZMvwqmZUuuVGoEBB",
  "key20": "3i7Ag8oKLM5p9f341nmBNAweMsQgqLffMjizMDnPngivvqToxHNXE57Moh5BujpKQQ5xNxhW9nZZfjNJEprng1vw",
  "key21": "5N7ZRRfWw1mQVMAhDvzuxBxqNJTYZwp5vjPByS4fJS9aMLcaioXbPaE78ZinPRb1s8xJoF46HR44kYpVgYSX3Cwv",
  "key22": "5BpUp44SFqbPkcnbVuwwTs1dJQ6zHKxaqtYCj4tVRB8xf9P8xqN3vh1P7yBoavpLtvSWg9REwvxqQEDQSY1AVVS1",
  "key23": "5cQHi8BfkS4b4vHDvAW2t3VvSCTbNm2qfDEYpgacsbeM6F9cqFdsyVmBWqAhPc52HwNBmGWHKwHSb179EbAtNYuQ",
  "key24": "3ApaWDpY2VptM5TV4EgGsVVU4dKnqxWX2Ywd86bzSTLSAGXgoAAaU14A8wkkwwQmiwt5KenHjNhU7KgyiML1Azuj",
  "key25": "5zx5phSKbGfZQ3ybfMwqXAumn5VtkvboQBaCFnBAnZVbNun8gUuhPMsMFw1QZ6bMHDbTeDLQbfwHscC5Bst3NZ1E",
  "key26": "4SdDqRaZQvbgsvdeXenmgZyNMJxsMpvA29iQwP3GhXZrS6pQJ57eBC55h8hzQWLqeCuzyb1HTeBxoU64rQueuCuN",
  "key27": "4rScTugTk42J4nAx2VCZTKoUVWmbdMD9fyYdTjxCLZaMGv9k6U9aY4h7VSLgjrWafiKAGp8TjwcWsKhAncHUr8wp",
  "key28": "4WKuKKUSbhpBjjVHcoTTJm5tUBd36rzMXDehA5gpTCMbxdsrtEVWjGadLXvW6GKmVPJ1FR5YMSde5v8niKQ9tYH3",
  "key29": "WdFh39YTwqMJKaTAehYaYPBPtvaZKZfdTGS7dohYuiMyg1CpfrMykuGNYkzNKdDwKoi4umCSEXJNkS2i7seacJr",
  "key30": "2NY8eeLdeoxztTGrNi77f2MQ5tSH8uJ4uy2n5rvQwbSCRGeCCLZACGwnQB53ysHLrEprGzfmPH8yNkHhXCboV2Uk",
  "key31": "JA8qyMNzKj2tLB5VJxaBhCuCvwK6iy4Z4iwiapFa83e4TyfFzFvduTGQcnoiFYk316zVGh4fX5Wcqii6nNmJswU",
  "key32": "4bB3PznEcDAc8cDvwHdWjSXSpkqNKGJBqMJxU6c7ppAt4tj18kRZPk4uwkPQej2Txrzqo8ijSATyXdAv2nvAZ1tC",
  "key33": "B5Jw6vNCYofxASnp2hTFUyiBxsqqe57tm3f7Pjm8Ns9U53vBgWkFhC6atd9Pr2CuS7ip9ju35rQgvx2rZR8uF7s",
  "key34": "4RsZTqBsgsgPmBQgvvxUS8YfCREwX8brDJe5zYsz6k5fayGBV3iURTxqWnLiGMUxSkCsyo1cZcgM61hU1Zjzk8NB",
  "key35": "56PayiM8XJaBD8j4V3VVQFhjUFCW2UQGikKwNB9PgAmiRCaFVpFxcoZ8ERpGyw2qXasubZnzVa1Z2CWpZiurW3Xr",
  "key36": "2VEkLfrjZopeAwS6zKPekXHjSWUfLXG3Zoeg85PEh5RdMRTJHfUw3tUaeqZhWqysrwGEeib6WKBsaHyTh8Qnmp1j",
  "key37": "43ub4k3tHwvZgLqWmmpXfqPwi1bA8MQFEx4E5s1AFcCQmCeNmHJkHSw4vssXJaRzPRyUHbuCiNjn494TkgrLgWMJ"
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
