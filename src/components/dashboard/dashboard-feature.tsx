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
    "H63UGgAaYZAQL68tbadMhTCyrshDp1ZCcjRpBzwiAS66iYABgDzD3bws22htD3opQrzm4HmTjUG3EMtAC77zYvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271Ddc8C9oQ8wefiWct8dyEKooKoNQTDWQHq8GiUxUsVmbiNN7Rszb3nPpzwPcAds28ojP5CSGPkptZjTVEvncVE",
  "key1": "gFSPLXBPtGg6X13viudzC87ChEpGDPYPvVb7fbqu4rNzhR1GMpPrFCqbaWBM32v5H2eFazM4axLhoXRTWCPrFxh",
  "key2": "2r3PBqVsNcazopqzAisdokWsEMsXHefMKXL7JBpeqrYUBRiAwgWpe9jWfCAhPazRDNvr4tDjXzivXZcr3BrFcvj8",
  "key3": "3QV15LzSk1rbWfPtJUXZayRVgYWVwf7rVdGN9ijTSoyHRzwchiYzkSd8Vh3p3ArzZdaXupGsE2Hsz3gS9c5N2Sdv",
  "key4": "4GQoQKRhKfaXTpZJFDqTgAdgbAQFCy3YjRjw6vijfhedSqe2SWS6E5To5YWi3t3zFRdQbjTioYSWMVxzNW2x7hoC",
  "key5": "SchHJrbBi9CyJTcdq2BZDJuGhphZdpvkntKcuGqrNPwmbE9eMoj7tfdCudtDWbwG3VNR9NyT9x9KVsJCXyV5GdP",
  "key6": "4c5gAjtWKAdhtYvPZqqNq8PToVf2F2qiLcP7LUqgyDXSmTuVURDWYXNSSPz7hsn4jkzFAagVdXbnX3u1QpBuC55b",
  "key7": "41yNGEGHStsPG8Po4Jx5rg9h3tctpvy8soGpzmhvxm4LMG9R1w4Kh5j57H42amNrUREqPbPiUXS6RKL4vz3uW5t6",
  "key8": "2tKwmN4Fs8ypByG15q4Uvi5W63VbFpKp4yMfYUR9uqq8tRQ7m46wj645t12nNzibnBfKE5MJ9qE85PhGsVzRKHxk",
  "key9": "3ex3JzmCx8YLKNYoosUV12Hfji4H2gTWHQLjBV8zH9Ar2a3HXh3gicAc8r2FQezSeW1Wo5gUadjDE7hc2VFozisF",
  "key10": "44onre7amSBs5EVZXJGtJo36bGpeVmKtffXEai1CaYxZFCzg8r2pardyhyXRHtS3oR48aafFKn6bPiuoJ53vGYAy",
  "key11": "2oskEYdj69vuYQaze8p7zWutDQ16k29fmebJWTR8LoF8UGK24V3Sb2kWdXmhfdpioUJUo9mfuh6KNqZbV3uTyVof",
  "key12": "tYrueRS96QxNYtKWhE1KGSj9ux2opMxVU7qhrTSf3rkaEuQYqd9yPHHV5BiWkXjgaEnx5DcZzjVEZm9z7MWVDRm",
  "key13": "3z7gfDenvG6xrPYaqUTW1HuSg3bJgPX34CC8iwJ7wiX1td6MhY6wCnF1xcbytPxRJwo559hvAC6Rf4Eq3TmkzQNq",
  "key14": "5dBoerthAXTVwGBaMFjwAdR1YvfvGfFjGUma6oLyjF1dQ85p6CEKwYcbwGkNPx1LWFJK8JeajQ9BUAA2UVY6L3MB",
  "key15": "3APxECjo7t8w7jFxPJjbncDfZXnfzfDixGtgDQ6gejxBxdKTpH5ZkjfEqdvSgrtipe9hkMLJf8gjqyPkSnJbCNFd",
  "key16": "3SDYWdTtgm1o728QHs9aBxTbVHpDAZKTLgM8UXsbdy2PAhHEvF4SYb1VvvQLyw8YunhNGB5kmakqWdkSGbfphP3q",
  "key17": "3VycMaiRqtgst7DL9WaMGBaDJnr7jebPjo25XiSXfJNCjxhChKFjo6t1bCWyynyHXKfMRALHM7DwdgfoTD4vmGcm",
  "key18": "HdY8uChbZPHYj4m1f2nrLWKzZ5v8a6bWwJjCZJmCdgNH6R6tM1PGbbgEhZsXiVjSBg3uPeoTqmkf6A3iweSAbeW",
  "key19": "49GW6kRXpnddag85eUydqzedXiA8obHfdmZ14GFNrgfHigWMqCuAzjjJ13yujoNxMr1RAR4bAeHHhH9jQ6rurJKk",
  "key20": "33sqo5QcRLKzTjziRWQywSL5bqrGsQrUjMTfwV2dJvvuf4bf3QzeXquh8UvjR9zCnygC8djtg36NbFKUZLCRCE6j",
  "key21": "5hPmrR5VAwqipXtCb3CBmTUvxXdGLtPG6FFteA68zj43uwRufBLk7m2YkjjYJL43fqpycFyfRqkPLZ5XFXtZ3gcf",
  "key22": "NihJrbHTwe55TBjSeir7jLmVVD1TR89D31YzppRYv5zS7BbCFiCMkVevCrFcLdR8QYdZNv1BJ2iAAGiqCLqcptb",
  "key23": "aj9cQZw6fJd6ZT4xzGeuwhfSKAivajj43LB7pg5aUnPKd2rLiTAc3LDBqXTSowQ4PksH1RuSJt5wdP6wMTSFH5w",
  "key24": "44U5dbYsbWu3dvV9S7sZwEDQSVdmLGExXwrLZkhR2mNL5iBzaXLSspWGt7ckoY4phH4uo9LuEinBMUC2SpVa1gjL",
  "key25": "KKSuzLhUsewRYBhpGCHyxuU4CX3di5LqmDJQWgUYVkaWRg8KwU5objMuZQudnR2B3GANfB4t3PdBzmATniQwLMT",
  "key26": "3UAN46NTWyzXL3CHWunjfN2t18dh1NU92uXpYfGjEmyZPXTs4u2NyD7uAMQBvrzsKdYQmMqLXCfNKYKvjDUms3Kw",
  "key27": "26FfCfshWSqHs7xCUbeBrarKq88k2NpDNPgqvBvTw2HejnKsgg4LDAHD6WfRCmUjnD4nNEV7Fqb8fdQjJmHN4M6w",
  "key28": "5cZyJdtVpdTXy11mWwGVcWSMaNMHKWDi6Y9QRDiyfZvJA4zJLTbJtbaXD7PHPgBDuiD8neMpWEucR5JRdUsR7w8x",
  "key29": "WbA8vEX2uwfffWEGcJRHXU9nSEMDAapzeNjiLVWM2omVWPMfvm4uKJsvSwm3naHTFPxjbcX967tZMKZZCd2oCFe",
  "key30": "4TTkbBaAHFA49rnezxuD2fmi1wAB4FRFW1fqQHvkD5T6n8Z5hRRbBGEdCSVHvza24WTvUmjEcJHwjXMv1R14mDrY"
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
