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
    "4TwL1aR1v1sxUda8hDdkB6HQ7XFPdi6fkaHUmGtpLVGxxb3yjj6qXDPpa7162PHD7tWEBWtNtKxDMZbKxhERjPEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEcAx3B2s8EhYcwdAPDydZRjj67i1C27tuzq42qHDNpy3boQ9HKwupUYXS9L28YegWLJh2ZX5XQ54VbYzhmT88F",
  "key1": "3VBTTvbhn2wc6th2wWKtjRTVn3v4C3cU8uDe1WkWCJ4TBxGwjfJagkoyevk3Wf5cGKeYVuPAFrLy3o52xm1aSUnX",
  "key2": "2muA9R41XjG9KVJvxKTJpG39hxWES1ZSqEJPxZLQ1oxvTGLptmWHCTqZqG2dtvRLu4xivGZSQejGwXa1qVmPLife",
  "key3": "2HiV9GXkeJx1iZRWWT5XGiiGovVGD9TcYE4GBedo1D1RLgz1ERC7QM1SKKNeFREmP5tQbHENSAh1AESUCD6Jb4j9",
  "key4": "2BTkzdjT7LwEa1mfaUEEohpHWiGm1j3B14PgHMVhmBZebp5RMXnWbgdvsaPpAbBYWBegs65eKZqvCNh5p4z7fNK",
  "key5": "49CnjBYnin1fkLjQH2o8mHmvSzCrTwmotZtQcDp4ejgZAF51ZKw4fTVEZ4MdECsSFXptdzYTt5bSLQwvtus8unMC",
  "key6": "4mrREVGiaq9LHZZE2cuEq2TQKfkiT2KbNe5CGJWVXCigXChWBtCujcXpWqZt8KCj1j9c6VeRzTzsEzThqSrm8jnM",
  "key7": "Fgy7xDkZpG83yvSFjaWrwfDmWwkJYFakWwt1TkyrMvZoDVsJk8saxcwfSuYZfRJvrP9NsdUjKs7LGd7VPBBNnqK",
  "key8": "5WEw65jetT6s8iJejkLFpQ2de4AV12JFfrS1mEHYEq1dmg5NgNVadRoY2X6xAcNt3VdxFAzJhJVYrWdoPAS2C9gh",
  "key9": "5M3ETNaxY432VGdJTzSV3iBJhfkYQhpyqi32KdMKDuVHpYH3F3DF6jCMRWH3xTpaGoXZLiqJ7DPVjnsAsYpr4o4m",
  "key10": "2G3M99SsqH6rMr9A4mAjGgPUiYr59KPWWjRLbbs6Q9DckQ5m5zrynGEnTmv3VwpW5SAjRNeBmfrBM6VThmL7Cn3z",
  "key11": "5qkXNPiuAvErNxWrmu6TNMVPLi3ZhexMpJ6ue2iwtE6oE4ucvVawZUw5nY7uy2ugZheAJBsv9m3njeX5eUDwmAnG",
  "key12": "3tkEiF9XJmGdBEBpsmu6wRpwxT73L3nus8FCj1eSZmbKPpZw3NyeigSfECwCzhsYodpbiGTvohUouj3gX8TxpHhW",
  "key13": "5a28nP6ZGh7JPpn53Kza4ZtNBsiTvskMQZstZ4GZikRaxpyM8tG5ZkzNvUW9EbmxFrR28MAsXfcHFty52MGivFLm",
  "key14": "3Dm8p9UKRKwn5CPuLWEyWS9TobKDBuFprNA3s5LztPqvD68pepLXAjgRCJGCsnmrxHdEhFMfp7XnwoVVFfQJ36vE",
  "key15": "5R21snVWaMFuQyBXUNE1oJHbptVZM64MLnYiw5ZJdLb852v6y37P7ZP1AegQvZJrxjXUw5nzqEJxRrhK4em3E33t",
  "key16": "qvGFH4rUrdRA7W7ZWuGo7iCTbqU87XjJzpwtBYXJKMqYGLNTNvonyN6MCQsAs9Fi2DUVHcjwmss1tGHatDeucQH",
  "key17": "2QsGfYzbFwvffPJRGVdZ1XqrnEBHHgk1xHnan9kHtjqjM1hXT6JxhmFc7WGYvcgfZLAk5toaG45jie5jyTZ6bg6R",
  "key18": "289KxtJGqBDv4vjDvnCEMH7horhEfiqVWoeuH9v8vrXhi8PAop1pFYDGUgApKeN1MvXF9N4tMcS31bTXcnktqNAR",
  "key19": "3Xof39NJ9V8TgNHezEtQTfWQDCwo1zJs9MA5QiqNwEKz6uvHrwpptwxzTtXGuZbyDVVDTLerEwCKmXuo37Q3Mypy",
  "key20": "2LpZwS8MDf5gRF9cvgS8BY45TSHaD7guY7nHu31uUAgbruEhwrr6cutL1DpEv6LbPcwkVxWRk4zcQjqiJkBEEiGb",
  "key21": "4oxyNVe7o7uQDvfE8BKhmyNtJLStf31k8V9nChfgsgVpXheYvr63Cn9NrFk7M6Do4CtvNRf8o6dRfju84ApAm5P4",
  "key22": "3pNRag776B5QMSZh8D5NxS8KqCCYPMSKYWfjS5mjoMtMD9WooHnirEYjaGFSb7ReXsx462zj4MgSqHu5GRyXoWzP",
  "key23": "3d6T1y4B3JARPnRP8UGgHyXyGWgW4DLPHDza6iXPkCmW8AtM54q366EH1vPueQi9sr8uxfKx98KVdfKTSY5qtu5R",
  "key24": "2AMky21pd9tkq8aJuhU7asjzDoGhRaT1WF4b1ArvHiAafehFygdfVWV7Ao65ZGYMxALubXQGhjf5ECrDpsLUJfTw",
  "key25": "2mq9mRFofjrMyLdGqi18Ji9Ed7eePcgNstAD5LMNUXLXUXWJ7w2e9UHSejmzN63u16toAMRZPFXkR5R3fPybJEkA",
  "key26": "4WGnHzVfo2gTcvjpK16SsqenpBNPNeP3NN8nXFXWzeAq7KvvF8rDw36X7ybqR8zfY8Afp6RJuyNg3sgTD57e3BjZ",
  "key27": "4FuiSqvFTmKeb2cHyNBKLwX4MVwHYBuK3wKz7L4nd95itArA1G5j9De8xJhj9adPa8BJNu84z1k57XxdLkE4neY4",
  "key28": "k9PUPuRJ7qp1cyhy7FUhsTaEs9Crpt6jAwm8fBPnKgfFV7S4quVN18XTWw3haVyrfYJghad2MbcAAHpawXaGsnA",
  "key29": "RKYFgtpG4GXiDkeZof1ySGAaJX9aF8bFcCH4MSEvYiQ1ofXnnCbTtqnyNzZwoyDucT8wzELeadxAxks3v8VX89W",
  "key30": "MS63giShfRVVuBLePy8t7MRPC7QdoWk8cNZCC8hwKPqE1ZxrQEeDPHvG5RNty7WWpFiAk88aqud117bpGJyGdTa",
  "key31": "2toYAKs9QH9WWxFrWXohomaSMBj33rTxrf95yTs8SyMfeRsHWdcJtJcEtqBuxFxS9WDvhnFUBKdMQFYBmRHbhyzM",
  "key32": "4L64jyQV6FN6UDKRnBJ2D22ZNHNCebhQS4n6EuhLTCEiwAzjR2duLLcDCRzzeoA4qncLpUCCrgYCqWfAcetwmKTQ",
  "key33": "2RDCRpNi8vQGpR47KpR8thrVyuAEWKjYkRUhBJ9xqetBPgx31Bq8f5nSjMKC1GBuEfmP2NYkftW2N8dVhy4y9LBs",
  "key34": "3q5dZk1DzCxykBaEK98um29cZcCcii5tSYGnD2Jaap7A31D9Qu3VXwCQd98Wn3QbXSC2WdjzQL26HERSAiU8eHeT",
  "key35": "5PsDdYGbb9xAHjHuJQAq2Yk1rnqP4oKaFyjEKLWLwiHZDWmFvMsXJQEz7XyuwTiEDFu921SyxNKxD4o3PSVXJVfu",
  "key36": "4PLC7fcd2DLtLSLBzEZEzFGv7zRUoqt2mucQbx6UTkcarnX7eKCcVd2Bnnwa9NsDv6uVXBon8kBBZVbdKG25RYrC",
  "key37": "25fdWJAZN7j1JT4FFEPDoFpjLDnFSyiBCHfw38ErykUfLoaPVW43iJdXgqH8cfV3tQXM9aQ1hsv6cfKno1PxYYYt",
  "key38": "62wL1BoKYCLLXUK84r9bLPHeGHgvDFVDkE49wgpfuDCzNY9wZW2ZJgUr4HbYSeuehgPqJ4F2D215frQnYS1RWELf",
  "key39": "31qbcEry8N892qfki9KjkbRDWW2C11vLh84XPEDPiWovK85HuoK8vmR3Bnzj2fdZReE8et2mF1QAzks6pNe8PMsV"
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
