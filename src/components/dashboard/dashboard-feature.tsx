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
    "467TPCbdEDVbGiNY1C5umEK4poBLaj5gqQeF54MCWeMpTLCiFeS3DKJPApnbZZei9Bp74f5rE89vYQRGKQh6NbbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26c1xxZ8rgt3pa1ipsKmRR5W3Lo18gkZYLkACcveyaqrEfLfW8hMcGq5UZtLV1Gn51EaK5pRnaVMt1vChRbju7ru",
  "key1": "wPUhGe8JdTsAWzMd4n4vT6dW1JpVqKNyPkvSa65hBFJfnhv5FTRxKgUzsFEBEMAMu1f7z5A1h6kvE9CCuj8wuVY",
  "key2": "Bgdab6D1P4MxtnVNj8itM7aNEUvxerkLXGXkVZNFHK2Lx4Pf3g19Ypxayeab2c2eeWviLRcJrBqFfGvWbUq21Tz",
  "key3": "3ajMHhqDhxyBvxvyTg948VdsYDsaTZR1hJpJ1DVkaowvpjdnTbHx1P78osimzYcQqoLHYoBy3Qdbp1fj7Noj8JSW",
  "key4": "37go6uicaAnnMtdwMbWdr3NBGEqoGBQMjm4o5bQv2kwfcoJMVW9PFg2cNi4EAwxN8ZrSLNY2cCj9d8TP9MNz7hf3",
  "key5": "3dpYzzrMEYZ3DNB2oVg6QAYymS4UQy27bfG6Eoh1WUL3JyuNdzEUi7zhBDrZaVQ5LEhEpB3EyVQkuLjrZmV81uwH",
  "key6": "3cVUrT5H7GSsS9CtgUfbkLfiqurvwyGMnNx9hC9eApuZ8UWU3faNy9D3yxeHeUYDqmzvLfnZAaqqCugP2ToqumHf",
  "key7": "E2eLBJKc8XiWVSb3GCLbqbrNgBQkV7oxpFpZKbJNTGJ81Ba5iphUu6u2ZwVzaiqdpjnoZqmUcbZTAsAuE7cPf4v",
  "key8": "3ioVeCMcBk1vWPwCspe8dNqHhv2w7S8UX1oYKiu1iDPU96GRBvUnLmNThB8Srw7spdqfrNiidM6oSf4EC72EBD3K",
  "key9": "5ArHfjDhzCebjNJKaG2R5b4mnwweExeTKj9yCds4v4feMkDypEUn1LusREtxTS6uYonnav1PbBUzF2vh9mQpUNKp",
  "key10": "127FkTZgDSBLo91VWkDrBjd2HFG3GMD3FtKNYT3CqSduPgFUaWEUspLKkmLpBxJwH9L5pvgHS2XVWWgYBBFfkMzt",
  "key11": "3EVhfQvnWch77xGazSnDWqF9g6UHRjQNpXQudkzwhYF3niZpyGNWLJudPC3x3jGjusQg1CyAj4MCYgikggdA5YyU",
  "key12": "2Ejzkf2JJcpkBKLEkXRMputXafRe1feyeaNS26FL4EMBBJsKCjdHR172JFLwxSMFih5kv27ocyeYHAFVHcJwcBE5",
  "key13": "5ikFuV6QSuucE5Bmu4BZcNuHW9abGdLMDrMvTSjYvg6Etgv69GQcdEopUr3SpXtVUHnFw6P7gA3QQoM1UoswGRd5",
  "key14": "4YeZe9vS1Bd98vkb6ZqmXyZuqGTxEhJ3qZM9UB9ce1QHs1BTeqvLC6geuFwDRBpFr7CeHdbvcZHrDG4t9GAHXDvY",
  "key15": "wr7X8Gxj7YCh6pmrszZWfhqdzjpRMP5CgEymooaMRcVBzdafXpD8yem4TvL2qRtppemxqBCio1PRhR7N1xTheP7",
  "key16": "4B8LvZ75QRps9CUvCzQs7SgTxvhJCmzE8skjUrUXLf2AFxGoZ6aU8MrEaia15QeRCjjozQiNg3m89ZPXg13GvVAk",
  "key17": "4MnhMf1NVJFYbazLRS7ADQz7ux9PSvXyuod3qf8TheCsBUu4HrXBobczdA3Wj3qWR7nkMmPob9sXH9H6L3mq2zCp",
  "key18": "2koiSVmwxXorreFjQSoGrvF5zDRj1bwRh6DFxmeyVmSqoyuHARZAQU2VnRkkYRYUPt9XJWqajsComqJxqHqFMiXN",
  "key19": "2swPJr7oY6SpKEmGdZRRMaHujn4RKRGEvJS15XDnY8zWfdodv4XfMrTvbpNXNtEMwYnVzpNgbxV61rXvN9CyKt9R",
  "key20": "vSx6VAumHoSL8ShDvqgAvN2fto96N6ETHC5hz5Vec6dTztSQkiw7jSQC1TMKxrHD9qBtnJFLPpi8wLkCFyuUciL",
  "key21": "4hMTs2mHmPxbQth7JhDkXSNwCmfkqW7y4DD3NpLo5eZK2UMF5rnEFrkzzVZb3i4kDwaNQHMZdJU1kj7hbEdiEA2f",
  "key22": "28WBhcoaXrmtatwgfsc59FTkW9Yxv9oF1atVevhSzR59xBdiFfbwzP2teqwjq9ec6Toeoti3bU9mMWH3yhKxGw8k",
  "key23": "5gm72e2fzoR1rpSjHvf7gLikSH1jqAw84L7JNvnjYyrbxGPGKP59k94qNBTXG2BxCqNzspB611aMVTuQCcwr7896",
  "key24": "fBhqtNJ57swmDH6MAUdSoBS1hof6gSCa8zMnXNV5x8veN2NuRbYt4bReJsb1cRYTaKXqbDn77ruf3DA15e5Um5v",
  "key25": "5NmMCKa2ZLjEn3HdvPRTehuArjrBNnpj5SXggruvm9VaMBW8JJQXDXssNBopeZTHeakTQyTCjdvkmgERU2exSwHp",
  "key26": "3so7WMrdw2MTk82S1yaCvP6M3XhPUutSAUHz4a3mTEgrmmsEQKyTe9UdChMn9aTBcsCZg8i2xYuVYTDdnsFCwtzV",
  "key27": "61UzpHf2t9cyG2npRrZ6SA6oUAC79aisWGeCZgHV6syfeDkGKU4KdexvLeJqMSDoN5ZAurDk8Huj1neoQ3i3NYMq",
  "key28": "3jdzSf7e3KLWjbAxCEq1VFkEk5nZJp9e16ihtSheLiB5EM998RFFRUu1GpSCwxJE9t1VkdPvPiqAvXPdA58Rn2Sb",
  "key29": "4CxLRTrx3EpzkkNjYRWrXQY8ezZLiESpcZ4Jx1Avszt4XaLQr9NnhPwZrPvyM2TU4RzaTCMfkQvdhibSbgoARn4L",
  "key30": "4cRNYmP9Db6r3iVJg6vKyNWqQ7k6pnuECXiqwpyBoYs8aFUG59rWzZHHzb21ioJUHfHwpNUx7UiyFtaTM2LaPerP",
  "key31": "44VodWhJMyD8YXSyZzDQaxUUDC5cxFyaPS3W9mEVncdyoke4YwXoiZx7nChwzbgahXCJShWTzPAHb6FXVM35rwVs",
  "key32": "4cbv1txMi2SYRGcQaAUEgHXPBWkYDMxSu1uBqP859ATzYbdhiKnM29cJGJnAG5ZRyvGKywMbbcY5fSNBkVvi7MLE",
  "key33": "svWt8ax6mxidTHEroNe2t66SxDbj41grin4oNv7wx7xFDVy8WyHBfgKYkUgvYrNorqBqroJaDCZSPa4qd8yYpav",
  "key34": "4m6SFPoAHnnGFso8ZbY6ZAPSkiQzGMhdujzdR61LCT5rxXGDLN7F7Gf3bmrtvM7ro3tzAe9wQWaKXJm8Qt2xuRGw",
  "key35": "baXEdjW3vE4QXVHkY6rjVDRVCfAiFRFfY87hq52oiXEzg2SGZnGJyAJ51397aatMSDoocYtLwE9BgQPaC2pYbPR",
  "key36": "DStHRVc3NxA2EZk8zaDkfyKh6zX1kBMpLECDGmqqcbbXEZMciSoKvY9JxRktyBCnyr9iRX2fepVXSqhnNssCqNe",
  "key37": "2xuU5DbTbMwd4BKSN5RruMqBgNPcMzzEidAcWgJFsFJdZ9xcH3borc5TuKNgp2GmxSCDw7XxhByDmrPnJUp9ZtPC",
  "key38": "2VvVjojkEyRhdsH3W22npumz5Hi1xNjMYjQ8T1TttJ2HcciYhf8D1CCopwnTFWN589WQfq5YPUjpqPe4Hrhzt5ZE",
  "key39": "hBv1Fw4j889aYybBd5jZFqJXoA4n6oEEzsaEHv8nxWCk6DXtHwKFxqnXmyk6Th6fBR7sHuoscB4vJvDS53pjpyP"
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
