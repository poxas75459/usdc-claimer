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
    "4j1jjRWwC2MaLFsVMhgfGKFBYmyV2TQZuEWAgpBKJNZuJDK5a8BUUgY5dJcRuKDMw9BsfSomuceMXJ7ekHc4NxBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yKTBhxVwkJo5uZpcanU1SfzKGknqLRZKRpgCjrum3m4jrq8YrqJ7xkKKz9u3uYbtRcPZdaMwSt1VW3jRHcm24Tf",
  "key1": "5TtUKp7eLUA5cBBZByANK1tYKVSFAMCTgVDU6ngNAtg9DX57YD7XSc1kqDcoofnut14aAzk8CQ3BZcUBr2Vokzwp",
  "key2": "3knvNg7LJFggkp4PYPSMWYTkFpv6qTVcfzfepgPQv9h4YYrxKo2oA17DnHZa3i6K1Rwdn3TJDv1jW1sEHr6DoV6J",
  "key3": "SEjTWY8hYgoYgEMKFPnFqRjnyX4F4aspyj5PR8iEWtDJTrjSNuYSHaRZ5uH47nEf5rZsB9vwVfs5xrhhoiRU8En",
  "key4": "2UboBhrbobMdVZheST1jYZPJfThyY7JDDAkVu4ppsqa388Kt3uXNbvB8QaQN5rVL4ScPRxn6fz1HzRXwPB3wFTz2",
  "key5": "5DUVoFPuqMN5547zTkZKTGcsvbvP9XgvsVknVtTLtcSNBc8BkFP8uDi786wBdQrNYFtLLjpNmKLXPpj6keSLrJDN",
  "key6": "5Lq2TUoR2XBSMtJGgDTJYxKSeG4XtEjEhgD2HJ7apTHDoi7wu6UaT4xXiQZdb86UXk7FVM4avnjw3SL89ecBU2tS",
  "key7": "2SrzDzRmC8mDoeKzJQwVesCQR2s9hfdgzUk5ojcQFpah1DS5CMChayDTYkPeu6bqGm7zhkdMQUdVr9ESw8YpzwsM",
  "key8": "24YjAj32AiYSQXYkz8WXX9mScQnzoCrfWKD1sDYT5io3MpiDYPySSvU4UXctdWRZ3HxjitQEgqq9CpsDFGTF15Wo",
  "key9": "ueVPAStjQ9sCSo31qsR2P6F41M8WaDex2VXboxUpa1sCJzoCLhQpmhv68g921ny96zMUdGxtZBTDe3AhHWAkroG",
  "key10": "tfFmfGPDu9UCDKZuGvG3eAjQngUrVyYPz29bGVucBaHF8mwUqBN75NgBhZ7Usqy32YyudrNcNrrMSMq2dAg9kKH",
  "key11": "SBhBWz58CfsH2jG6uRzgctgps17mf7fgZ4S8U8XhvpeFPXM5aGgSBMPTK7Ypj1mHcEYBtVyVqLqjsuayeCkCMt2",
  "key12": "rekAusg3cXoTXuF5FtuHdS4x9wLUXP6Xtj55TFt6bL5wzqsqAbcDS7F1nfNn1hvApxYjR3QDhW9wwanWvvVFZeQ",
  "key13": "3HJCbdQuXAaHwuFyqgNMMwgXvYXJrncHmQzg7j5BK3cbBUgWoyfb58pFoiyig15uCisSuavga4TofHfNcsU3hoTq",
  "key14": "21zQjskmgavdDoNm9dqUhoAqAkwM9bQQaV2EdMgKtXyiDGtRoX9SPjLGZxeurEyBdC2DQJBnceoaYACLQB2oVjgt",
  "key15": "3WRkZTzoGuTpCHdsc7nhtRgvBLCEVA7DLj1aj4GRBiuasySyL5TL5o1yfRSkmnFGnztnzhUMeFxsU1ZZ4HTvZTpE",
  "key16": "5aEybfcbQeSFBsJBEgWd68QcZY9jEzZ1WbXadzc9b39twPkq3G2sFEZfrxhZ1XrL7hDbSMSbfvwzeMFBnVoVJkRZ",
  "key17": "4qCxUUJWvwfpbZ1R7REwPuZdF1yDFSrnuYm2Puh5dSFAPd5p97iB5XsotQE4mikUr7vZ25EPQG99GGBC4gc9KYXS",
  "key18": "4UAjJ1hKdmsBrUvtCeqE2MpJeUhCaumkFh4mtNYt2sPqcPqS6StCDWvSc5DUaLa8u5ohauz6rnmmixkvsnp8SK5s",
  "key19": "Bibz4uQBrGEsGdocDuWn51UkngGPWEWUYDmLgEXKEFwWEToLWTYQb1sg81594NvB6q58z4gQrW5umcw4rn4nxR5",
  "key20": "5dxJAQWcPcShwrxj8YpAWD2bZg7uvGZDdR98D6qvfxA56KwiZM8eyPFH6TTcSAtLpAp6WZoi5vRrwt9vZQGrpiC4",
  "key21": "65ejLJUpEAE6jRWfm4BUJVy3MVf9n1Qzz8y7fY1i5L1arz1J6k8eBoR8yQcxbePHAj3yr7iT3JEGzSKC66tcjVFo",
  "key22": "5BCtL9Yr2ttuGWPKNre5c76T19yarW5GWnaYVyJE7xYuWYdA8bw4baaUUnmR518pH8DW3tLaxFdNeAE2mmhTxG3V",
  "key23": "Rj8urAMapz7zUCABsKCFSUHoFm6DEVcf4DCFLV6DQBvxBHZT1o115cPaVmthW5AVGGPWgwG7dZL3Qnms5wBEBxQ",
  "key24": "5uKpvUZG5dQbzZmCAEs7xvAWBNVVtJ7P2FeTtJTAsv28YoR5BKLyvhkyBQfskgDhaxooCqzqQk4xMwSKkdiHnDFZ",
  "key25": "4XVa14cMqiN8sJEBe2vbmUHTWv4B7EQdQCzW6eGgvYCet4BxHFyV6hDynMPLzVGNmzdv5LzCwya92n3BM7SNSvob",
  "key26": "2KkijVgSkVA1mBjncQRyp8fz97a77QRjSgmj6K8Y31hBN7K6BL4LzcR7YPsDo5tCqidjr15BkS4YR3tpg8cj9J5r",
  "key27": "WKT7r9j6jpiAjD2mtCpwjaYsextgWvoeewZW42eqymJPUDsgxoW4vbVUJfQDnhq3u7YEPdJcWZyfv7LHR3ygxZs",
  "key28": "4KzADePciGZ8gomkCnA5RYhyJLT3zMMoJXa9RUXZkrrgybfE2bj9TTEQCgb7zZYKaQ9TtRgGy8s2tMEzgiGRJ5Ab",
  "key29": "25cfpHmbmtf4VMdYmBt283zw4nFzW8Gr2P8YRkL5pGxRptsyLSUsBUccNg8gY4B41CpwwaZmrjUMNB49BoDik4g5",
  "key30": "3bQFtFkcFvwWJ5cFB7ybZRzjxG3dcJUsvbouZnbmeEJApcrNvYq6SKJnMPj1iU4B8J8eu5H3rZk3YMmswGzBX5s5",
  "key31": "5KSUa3TF5QSvGshb8h2kZwbLCX7k2rpemy7azAUSMsGrd8iSdUzxkRhMLKEyfQdNy9LdcuwrJGERhS1pLzBBaYFB",
  "key32": "65yjFMYEB3tqWCf7Z8aZzt99ZDxHSi41DUzSU7tL7r62VFJsULyRN1dpUbBpr3mnW4QPC8oYLFho6knGWAqbQQVL",
  "key33": "569Fbgd4jHfcoahTnuNL75hKLieVSQAYd3oes156LacMyDzS6nEKAE5NtUHd6VvPrwvSD4gMXoaRfAKnqkuCnAqC",
  "key34": "21zxRWuk2sW3UQpY5c384qGpH5bqyMZX1VbZnKSWrthnBtSZsNwM8fmJj46YjWrPmSjqYQEc5BZKDeXJ9oYkGNs1",
  "key35": "2vyBaB1jUdttbpaya8T5zshR7C2mEzMzSjAaRAjnLeWBLhfvMFxr9g1j3hBA9nNvmFyKkAmx9gBXJV5hdBR2cQfb"
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
