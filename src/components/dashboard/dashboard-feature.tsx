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
    "4JeZ3W21b7F99Rvsfa4jJ2eSFqi6a9b4aVcSVKuznebVLe5Fx5T9AR2ChBmrjvgFoZdoi7DyqTTTpX3fGNZkE5qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9RT96RBFXrYL2agSJkj9gC8aZzjUpeacrq4W1bd7BakYR3xiJ8jhNB49ujcgRGVUZXnW21nEtkWA9CPcDWWWBGv",
  "key1": "47M9uqxay9vr8p3pX5xhN1c83LpHcE6ttMNTUAZXPUuWzX9UGjuJV4ytvuEi1mUwTRzFKHCGnW3o3rtfZqCiigJH",
  "key2": "3Un1MQMeij3zQaiXi7CnF9sjiKeg9SxxzyzTk2VDrw4HqL3gGivDpECQLwKvjQUQChaQhFfNRxFxHmXmnqdF5vCg",
  "key3": "BkP1CthzefrenENvKfwALTud5PEJo9nmYczgDwC4bPSbdRPyA8kprobyskfTe6vd4pB1RT9iZ3ycTYPmxXJTeaN",
  "key4": "2GL1orVYTGmzaQhDorUBUZHi42bvpcx5wjPejMWjfss6j9ndEpRifpPdh38TcoeV3KgNDSPEs7WFVHV4QJytYVhE",
  "key5": "2eVrCiamEtvVBmXD2A85WUTRfrXZcXWRMrZmTuqWrumYYnoQauWHwnTqPrQmdD5RRfa4w6U1vHd66ajHHUBPa3m6",
  "key6": "5YZniAsTEHq8Kqkyi1LyDkFQUHSAsL3FWXpAvDDvRTFbycMdQVxhffsdeVvB5akTMibHV6vDnQPJCkm2UNrhGTQm",
  "key7": "y5SShmcQD4Dvc2LyntL4jfJ81o2ZvhKV5PbKTRgo7AL42KhKVMbme4NmdtfewYKtEo58K16jTWjukrZyoTHgdkX",
  "key8": "2WEZSSS9wJPnLtxxTSLd28MsrdNf2zZHuPBzDp9mkvdqZz4UfjMLE3W8hrBw13CRiUyNk7fiEFKzxMWeB5JzG3vh",
  "key9": "5sGL2nELZgtmD5GRJepJS2oZZHHH4jPsWNLCTTPwCa5yBTxKQPkCDcpJjqhgWF6T2sEJ8iPM5NeVRdWhGcZ9S9cZ",
  "key10": "8ZNfrNtLXqo7Rv5nXoJfcBMEcqpEeWhJZ3BG3jFQpY3nD8QBC2KHJrXcY5u9sHAVXBgxJ4MYGQenkJD5BwCwsaZ",
  "key11": "5kUMA32EfGAE7R2YkLRVLYPziRoiHAZRAegCNN1r6Pi9yHquyGKE3fUcH47KJgZXYp2kBSDhHJ6pQNQUSmWgTrk4",
  "key12": "5ZvHiiQei5wGHujiR8C6gQjc2rojaKePnjjw1woTbNDVekEaFjeXq4wu9EFHshjW9CoMm9zvABZXSHoXJsGWziqF",
  "key13": "4aHyjHTASgsjPNQSVhqAPGuQYPZhQ6uuGMyw6VUyNx5xrtTFGZhoF3aH6VhrMei1q7m9YCHeyHEjfMfxBXGR1yyp",
  "key14": "4iSbZ8PV1pwiULUE2BF7Z53jAPLNVJyH5mJxBKD5RCYDEaUkfVE7eCCbQhCikoCxM39WNkuDZ1EWPZ7JFwQzjqfH",
  "key15": "3fgNUDFdQAyhDsMPLuaKfbKbj8Kje2BSA554oWdJiQCrTBvtCMCRybonGzHapRVvUwNQ9z7cMUjvPxMJ3tCsAN9K",
  "key16": "3UsipsrxBNLMGoXPnYX3wJfJLJnQQhv6taNcChHY1XBsHb1AtCdoabQX8h6uwnd1QELrFWGEwrWVgFMeRPNGEYtL",
  "key17": "477xw5YDzsdEsGyuxsHsK4pawrofMGLPRNMggmaLmE5M8DEHhtuHP3huSCVVDhA8TYPYjqLNvnCvyN7o2EZtcnG7",
  "key18": "5K676SPUAzwpzcZsqKQih95T53Z5MHAtoi39xyWymoBqhzbNsBK9Htrtoa1vcmQ9BXCFCGpFMz7ZZCuuU9Bne3pJ",
  "key19": "enrkgAiUKiBYUcs8y97wwz4eXpzw5z2GhNK7qr9ddnLR5BLTaQ5JAjHs5ZQ4S1Etyhofw8qmhmSYurHQJSGD7cc",
  "key20": "2fqB2U82Fe6p5HcjysvwY6p2zfSDcGycY7kikVpKMo7sD83uxTp2gmAXUm7UXreKcK2KghjinRgucj9GgCrgUhMy",
  "key21": "3F7FagfBRoJ6xqrb13QVzBtbip813EHtvm6FynhU5QKZWQjNM21mfuTkPM3ks7trzGCvhoswa9RrHUNPu9Q1KDWA",
  "key22": "436rzyuKhqiMuLewiS58ZAu4jAWGfNmmSgAnvQHJcZkH5qMuSP4WX6df6yyPyTL2rWH8UkM47Zm2Y6TNyNukBsKv",
  "key23": "5gBgxLcB62ABnndRJ7dH142qtkuScsBG9U6U97e55S7G61ZxTEZETdxBKoECENotwHDErsMwYv7Dtb1SnS6pPn3x",
  "key24": "4hz7CeviPAVH98RM8xtcDq5uDsYwoKboXTduUcLXFvjfaaGWi4v2oHdyZn1P7iriD3ovr549oevEPQcNA41EwMWQ",
  "key25": "B15b8j7ytsApn1HK85wohytL3qgPj1ZZExrVnG1Gr65V5Lp6CTraqKvm4UpCo7YPsm5yxsUNDAoLbeCpE9uJDn7",
  "key26": "4Qo34XMLHkiD3uVxcaktHqsu73gbcUw1At1cGYjY4DcBFj8mQutNzfX1S3kQY46JB1Stc1QimLjv3f9hraXrcqaW",
  "key27": "2j7cYTaAJhqeuBf3e7Dc7WKbJiBkCShC18vrTb8ebrDsHKtJRujYrQ5AP2uivMhpS7EvqPjbcP7tdWUbUcZhkHDV",
  "key28": "3y3nWA6FK3SsezsUKfb2ZAjUDJugEzDz8NYojy2QtMpSmFcrkvgKV6YjVY4UD2ggS2hoH5dfJsxHxezSGimLcXHu",
  "key29": "3gsskHqgybML4RpP7uC4nq8xVSmsVU86oRmzaE3gfKousy2vnzQ9TWKSQoBX54cRZmF1HoQKRJQHjF47XnTKVhqg",
  "key30": "5TzX8RDQE7eVgDxhwFznCMtpP8JJCSBzPCdv8rTbRMygmGX5nzB1TkmvEoSJogEuLnXjZ3F844h4STxijzpEjtGj",
  "key31": "5rtRJs3RydzAikZaRxMbcM8UwJywRR7J3Mo2w61fTF6sJGscqro8VyK9GvL6tkow3J9bEPpC2ncvt5kTqVqPsPwC",
  "key32": "2T7UoW17mCBWE71ecUbfCmYJNaefnjzt8RmHSShJ7rDxPdy7jZt7tFoj3JJdyXZWhtiQXEeKkTo1VrHbq85jY8WW",
  "key33": "3no5uWmbemvSfBKaRWxb6TqH5pLDKbHwPqxk2SgqRMznCvwGgpb2qDxToziCr6Lf9BWfpQryEECm7v72RmYJgMQZ"
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
