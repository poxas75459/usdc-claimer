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
    "5fpQ77D6NdTFfNY5DD87GebuQYJRLZ3fEZDw6syfFo3VrMgW5JwoxkjKysREAdnypo1GP89ApXiifTadmsWApwF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44d4tmPpKouz6RPanM32Wjzf7LiwX1S3wCXzpVXwBX3AZmro4NbVb6ZDRkqzyx8YrbtBdyYkzcZTQbzuWGKD6aki",
  "key1": "2jGvA3q1CceconxoemPPQhQB9atJDtpAXZv3c161E59mwp6LxfqnZaXjFa7MEhiDWxpJJbNDRbBStWyFZNgSh2Pq",
  "key2": "5pdcR61hkHvXtp35XBeHuyGyaJXa34CTGETugzAheD7s4onfLXPC21tj7CswhBBim76pUUc7kyKUo5FcYjLh9woE",
  "key3": "5TJUnEtmKtfLnnVELT5ZSss57XGvKa2LwpTEueqJnnNWPD9u6acxkvLqjPV26aetgEb1GQsjmy1Gn9VnAWr8Nk81",
  "key4": "4Ez89egAgYxcq6VjEMQMgCCFwbXwtk6U44ZS1jso9mViNJAVFXqHg6a9PQXEfZdUCBJRx7uFScBcZMCUkNCpo6vK",
  "key5": "29rNaaMyRj6zKNi6u5HiDqLA9kx54bi5mu9yBdQjr3NxgKz7FKEkUkHcsqfA1FpAmSQPENG6iZq6mbGBHP5tYS1k",
  "key6": "21s7WPh7BuQLxQxpNmQjGQtryRLjZXx64x8yyzqjCUma8ph9CW1zhwDqycoP4DtrdJVnKAmZTVVv4d1vBvrLt8to",
  "key7": "5PQoYMawqzHSKYPJWpwvMa1bhyr77GSr3snZAKQcwrMDgBs6bgzYBhcRN8ZiZsQBtmPFDicg1NACYX4My6uHYzL",
  "key8": "2vZEnydgmfD8Z6Si7X9vKDTFcMJHcJaZGdTNWnG5QcNwPuDAiWnwSrAfm8w8wAcyRH3C1K3JxD2LwmR8kgKPaH9n",
  "key9": "3FhmpihUAPXC1guEFhgi8n15vTjZX8AmXnYwmq4G45GaEiaKLKVvdNNNFEVjAewrHWkGYVPFvGm47EzpANdbenEB",
  "key10": "3FYjhBE8hStjvaV4vuJUccinXwtZwjGmYrftnCS1o9BGEkiTV7T41C3SKe51nd55fbhNVN6sjDFGzxQGPqqKLQGS",
  "key11": "3wPSFnefMDJ4NxNGpRA8gvCfnBCT28thNZAbPhto6S3zsfhb4WDJqLEX5S2SR37jWafCFwus9t3NEdzXAXhgu4gV",
  "key12": "2kpJXDwU1TPZmRZrtPcLjkqnccr696y2mnG6QWdfCTqs94d8aTVJPj7qSHwrpZdiNUdHeZFVK514yNxEevm8DJXu",
  "key13": "2NTPEpNTJNkHVzYG6AwunxHS2La2EEDELmWsyMfccJjgPjT2qmjrks4LgEDM8Wa37iWTqqtYcV5TioJ5uzmLrnUt",
  "key14": "4Nn4vhRkuQHR4QWghgTGjZgvQrD7MmFCRBMZYZh68fXYTRfLPSCNVPesvyeb88dnR2d41t4AnZpLvhqbZx6sMK3E",
  "key15": "N4nRw6G39CWwQcZvoggGkKVqJFje5xXQxvhcwF8taT7ujCXFcU47Uf6GYj1Ka1yhHEJ6d8DMAw2zo7Exn7yEfBA",
  "key16": "4tXACVAuxTghnUivkiEBmUAX2V6Kci6QuvDjRS6WJ9L6JXU7vkZyDiE3YCQocVZcDcCWjmUBaKwVwW6GfEfzGa9F",
  "key17": "2fFQfzrE4dT1JsT2QXb8FHC9iVvnNQR1rneE4DYBcGDRH6wWh8EA8gzJEh6ZJ8TW6H99szMJgQzXsQU8vRKBHFVM",
  "key18": "3dzqrsagB3VZ6R7dPZiXDNtmR16Qm8Lmi8GtswpErTbFu37UVDecQaWvgpwRGDDsNgEDVVKfLxUQUtb7ETgDjCox",
  "key19": "3B17h52Wg1ebxetvf4kCo12yuXMuhFE2HhVRZtz3dmxWE5FLM5aY1aUpkVUGvb3T3ZNcEns2WvwWf7vNgnqhDgXa",
  "key20": "5LrafrqWHHEVuvHpUZvfz8vAS6ed4khkJrUw3obs7tpcQxk9v1g14PKUUf4mX8RAW8Qgt2APckM5CZvnj9bP9E3P",
  "key21": "3uGMirJxBK19pJDJtpNboDNeVdsbEi9maQ6UAEeMs8ooFwbWV4x1y2vEumYDeiUCCq6JypXs9LYRMkFyT7epXqZM",
  "key22": "2PN8BUFoZhgVpL9zB5y5uUhdbSVzSdbyAJDPkvWGBcdYXA4YTjuH2M9xN9ZjnXwyWiVJNJPrWyefGU7PHEtCP5Qg",
  "key23": "qxf1ggUdAGWhbZevd9J45TqHJKy3hHhqs7VmNNUopdGN9ecfhijZ8xArAwsSPdMz3CiksebbTpaJdzFnA9ivBcn",
  "key24": "2Hu2bjy5gJjoQooh3ZvTZL8P2chn4JURSdj48NnjnwFuXdgnweVRzVr9g9J1jAp8BCiVaaBenUxQwhosNV5tftRN",
  "key25": "5DKs7xvJsJWwceekCNpPgQqnqQf3tvP978qWiYxFot6zzb5vuA1p7GA9BUXXjp4ySHKPmY1JXFS9vp297iCxSsm9",
  "key26": "3amvJmDxHJVi8Q2CUBeWcM9RetXQLqr52amgUsxY9QGwSrUpAFFfBEqnSyuZ7ycav5w9J6DoxcKWmqZ4RFXZ5WCz",
  "key27": "3T5jsqktJyiyKbCSMB3joE9QxN2iSr7aB649Gth3BN4C8EzWcXBT426mEzJUcs2w41ohqP61Bi77LqzbdwuvfHQM",
  "key28": "cP7xDu4pTuzXGMUTppkTECsXEqhyNy2bUak5k5cijpXJ3TU16XdLWLyZ5KCjQjzN865sofY5A7xvq1NySCTnC4S",
  "key29": "5KHKp4BvPo9ZB4d8r2Abr93D7z3Dt876aSmEbEjtPdAp8JQKK24nbSfQK752zT4VQnQzm33LxPXyYJPHkA1fcfXQ",
  "key30": "3rpc3VgQnbTviurudoz1dbnfRr93iHFekSQF7L1J8XbR6mHCV3QP87ugFZdcCexSSqdvfUtbKZUdMb4r6NrzVNZR",
  "key31": "5FzFjC1DCJZASwrkoSze9BFPWhViNu5LmXBRd2TboWyxyix2HiK3N3XzzPouvFj9CnSZ7fM56Mn4nHjUskrND4q",
  "key32": "5khRb7vcNscfufW5oBxEtG3YwMuAz5BuWfz6yuYCXVXvEC3wSHDuNqGSWTHExeEraNbpq41HDjKSLuL5jvTjffeJ",
  "key33": "44o2PxtGbZVyR9bSaQUpha3z4jvq92tdDr6DgnRHSfvt79Ty5M1tb11dY9yDUCoDhUM39aPidP9Q2ZnLnzAqCXcb",
  "key34": "hWF5KnQhzD6fowFeg42kq7Z7vYdmLhtVczPzh8WdTrqPUyAf3KFpwtiFAV9DQc914ZmkFqCHdDzCRAb6yce7EVc",
  "key35": "5qng2u4GV45fG8XF2K1zvr3zfjwY35R6WVghKgn1V58VULUBhNfPG44YjinKZjCCMjWxLeegFwAFGH2EUaNUA8Qd",
  "key36": "3tXiz2nHXgRVUvg42nhsiMw86m34oa9yAfyRRgKafffdkfaKEXu7fz5TPMFNdKCgLj7Ak9ZGrNrfZNpeWTpGyrnj",
  "key37": "4A35ZPHkco11vWMR7rBQDSySQWtNUApaWD9WLoAwsNhC1K62XQ7Wc5qqfLUPDG9pUGz24wktidAgkQbTG4TqcaVH",
  "key38": "4TynYYbkfpfU34zxognJVs5tXaMv3XzaY3z8LVVarvvWj316yqsRXdEbvZfjKnkZRg64WcKrj7YJyULka8Lzkg4Y",
  "key39": "4TRttQqo6PMKjx4hUTmN7mJK5P19tSVhmbbkcE9V4k85TGWP92dU5YLqfd8aEcZW9RWoRtoABLGw8oTck31NsYvq",
  "key40": "5FkiX1KYd6jqVKwH62jKV4hNDoKhyX7aTAJwPiWwkA2AhMqYt6xc6kPAJonRPMmeVoaoXNvEN1Kec9FfVzd7LcQJ"
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
