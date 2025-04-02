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
    "34sAimfSRD6vvh9sMDskozWL2sNzXLPxMWBqWBFKNGTfHFoL2wpgqRmc6aDjidytLRPh2HKPBYEgAeEeKH9VdD2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqAoniHJDvEH8p3GJzE2isZbBkPNZcs3kEv4CwkbfRyubTB7GZtxSVMLCxWtf4dmnibJdJD6vBFXZgf14kdAwWz",
  "key1": "28mazNh53HNfSArU3GTs23pF6rwnyE7NCH79i9EG9y49J53TMHsbHvVtEj1UdiF19wtVHY5uRmWdCgrAq5YGLQxC",
  "key2": "5VukdWx35vYyVpFUAHqDLmLxwSqKUDqb1mUPtEqxsLi8B2zbY5Db39QwoannkSYCMHtHFwoQh7rLhnvbzTefZQkr",
  "key3": "4UwGHQT6NDoX7VAD4rbBixH8yWc23hxJCRgRYcXJzKUupPkSuqApQVThUUFT5ujm7L9YNG38PRgmteQ3DikbNjmq",
  "key4": "3ogaFfLiWH7pRRck5DuHXxy62MuyrhfaphNKBvRDhYpry44FCzeALM8UzXEUMittxEHRnZZETiYYf7LkXfHB1FYo",
  "key5": "4ECEuzSbmKUd2vJ7dCQ5U1T69pXLJEtPGMpLUCQzZQLht1YhjB91uWVSLHw4KEC4tXsSbrrUPmuMbX1r3SBjhco2",
  "key6": "33MPb9wa99SoQJhbdg3aKgWeAAyaVGKfpKkUrTnozGRkPL9d8treq1M9MkK9mRcpKM6mejd8y3WrDKXBXkMYeKQJ",
  "key7": "4ZYkztGcqKzEtnMu5vSppEDzDFLL9fujSggzCodjzPhvktH12ZZGDeRQGownArSJBrYo6fZtmnkaaTpnASmNYxT2",
  "key8": "2xfXdtR8pDMKrcdoheMJZhh5dNVPiqNaCui9HrD9T6aLH9SyprT98RFBSfBM3nVLgNoHqPSmj6ZrLqCAHu3sX7BF",
  "key9": "3wrMXNYvhmjVUjTpFfojun8vdzoXmcQN8icQXwrg9s2VULXp4tYnnvwqop4NkvZDzbycqv6y8yqsGKs9udEHzct",
  "key10": "61x7ppwq6Vjhbxm9bXTae2ZNJY7Aou6EuCwfqyfeqy7KrJqLM8L117i1EbUr2K8AZAwqpstumQc5CwUKM8SFhKcu",
  "key11": "4noiUx7SoFVoBp8edABtcPVVWG3Vt9ZhYGk7CtcAhxgHLaVYq2sdpDvR4QzssuGEYFdEUmRGHuLgW3S7VWMjvJg",
  "key12": "3RkV8pZiwrcvDRKUwwEdzwPvXMYNCD57nos6WTME8rSuwGyABjpD4vhxhUDMXrXGh5mgPcbgZcToVyWQsV85ow54",
  "key13": "4tdn5SNpVSgrrHqFrwuTCe8iVjs7JhFRF3DWk9Knxru8chkSKByiZkkFKU7gzSGkKCmdJ7TQhii2DMNb8jLYzo2W",
  "key14": "2HJbFYwYySJcRuqu9WbuqLJj2A8aJopueZYxMo6ShGrxgR8Nwp96SksRbYVsrUeqsnvQzVmCujaMFXTPe8MrapNz",
  "key15": "65NXBpgXTJJSmfVM5UNXjVqjcP2uMPKSbXb8UnvmA6g1GpmQQjqsPrCADRc5USds1boHCJZJG3feVJu8F3KUEcR3",
  "key16": "563boayikyaMt4ZBbWPxsa9tmMkvRW3oFYMhA2dYmGL78UFg3gya3FC8eSPuBUC4QZWuQ93xdAKNE8ar5oGi1KcY",
  "key17": "2iV3qYLHL25cNN3A3oxZHJb4mPLBrSRetZdgfRiN2rJeK7ak3KYYSFTUE2cHA3FhsTEq1rGojLE2cSEQjcqbwGpK",
  "key18": "2eNfk4cpg46hZ2cCUEbjdEVTvRhcHhjpC1kVTQLRAsPPoEY4wKePhfVpsFUC2xoLTCL3ioZ7ZXR5H9gp8XdQ3c76",
  "key19": "3vvazhjjn7szQtUj2hcqBkRo6gsMk62eAANqNRjxXXayjnWed1zP7WHPgbzaQcaKum1azomHD5BcaP5jDqjS5xK6",
  "key20": "2vRNvd5ujZPUyog1ZwSywHDX5wViLTnitZsZs1Xhnq5AH4G2CNfnXnxza982yoXkTxke4RAyh44Sj1WjUnucz5MZ",
  "key21": "3ci3TT9VpAiC2QEvDZGd8mkPycCkvfPLnjcWcLphmuUyKoSbgU7mshM2en6Y4BQviQ7BMtW4xrLSK48USABVDey3",
  "key22": "nUrs5Z3bYQV1Wy1VKo1QNKCszF3MAPawmJXvYuY8rrL8xhxFQjAy9J4v5aHtFV7gktNHUWKPjTBLmJXLW9niyEa",
  "key23": "3b1HpLxyUPCW8CcB8q5Ef1ixHPZZ4vhuxr9H8sw7FcMsrY5jtrcCetxH5aXGntE6RvsD4Dro5wS9qH7eZGoJm7X6",
  "key24": "3UEPJkVB2NFcEh1Zgj5HT8D2rueMicnSsbQ7VdVzjjWxP489d95a2SZmtT1JLLJsHRWgPa3u93socz4his3DjcV3",
  "key25": "3Ui57CFNyqtGJKdxJmFUC6mqo5ZrMa3zmPTmSjqgTYsn238AhVC8PGbRpM6CyBAJvKzuzGbGjb6sxANwry7NTKnG",
  "key26": "5bG4g1zzwC7W2PNcRLVVA5rJQyUpVaeJnsZSNByzoDonRBHvYxKeBskN7cFvH2HKeekjfZNxLPxxzpiHZS9yrLdd",
  "key27": "FM7gnafoChHJRptdPAzay5EJSD62kN7xV4zpekCoRQdaGPEkxkmJSkdbJ5sXxSLVdU6fymyQrcB3HCNJw7HZwW7",
  "key28": "3U5xhSG6L4FnhaTM9wJJQsU82t3FgCgykQ7FubfjUtv4XfT84ViUhAbUtB26LBtUvVAKFQG5qjpxrAMWWtiRGAQD",
  "key29": "4KjfVHgJ1C3L6kQNw4RdNhWpTUCZRk2KArgJ8ATXrzcye5QazFRT9zBkdYpDnymsvnYXTGp7RaPUd5SFANggY9kj",
  "key30": "5nqvwaPLpAsVoMnpcoRHnuiqYFUQBEmVUQEnr3Bmk6Wg4fDUPmTg6nTkVrvowfo2HtpspTihnJjU67dfZKJ7y7gJ",
  "key31": "pUoJnaYvLdyhH7bjrXtFdHgJBteUtgQD2xBRfmX4EA5zRDTxp9UdC2yE4mAgaVEHZraSzwc5w7zrtMT9aXPknUU",
  "key32": "447YyUsHp4XkrA49zUGJimjACn68fTrXnxi1kKcjTgFm749XDRRw3V7yHTSFSui6Dx2twhFk2GMwpw9VSaLK4ZpL",
  "key33": "3JotYWqCH8j9SHqpHem14VEttaR99ZQFrd461tMUPn1ypSZUMyhVo8q4VhWoyHVDJSVA61Yk2uUwx7ftgo2fQQbY",
  "key34": "5Tf4eceiAS5kvPspV9jh1G7i7QqZ1kQAmBuwF4E6wmgVasf6jQnHPSjQahcKQu6i1QqueV78KTZD4BkKS7aQV8NN",
  "key35": "2EiqbUcpiatK2YCMruZqH8ETDWZdCz462A4ssiUM1BcmnzL7kNXZtL3y8iLQzXfGd5a2XysCbFM5Kkv4P5wxm2yE",
  "key36": "debLz5DHaGMPHtMAckF3oGfGTNgpyh27dkeE6Pe64N8UjC4oEykQbK98dtdhamVrF7ALxzJ4C92dkJQdBBwzp34",
  "key37": "4jaXbHZcXur9GeCq7UQxzUaQraGKred9gkyFVwnYmbFsptNrG6xRRxXHDmZhQUwfkeXkqh6gpCNkYD6EQqRPx39r",
  "key38": "63RN3wLzC8hCbutYTVgvGHkcEHH96uVdZThanM7JbZdgtKEwuh2XgyzTkN7DFDJSyjD1WPdEqmnRyHmgFhzAwWJV",
  "key39": "2ExbqQRFoqXXYfzSfeaVVNcvwBcZ3bQJA8UhBgugpyFYPo7PpDaTrP2iAQgxJxCxVHUpyWLhxvzLmR4xzLkDcUCr",
  "key40": "4S1PuxNcjXEXTDH4JRiLnUV2RR8xEPx81ua9YbxFHqsCTecKmQH5GwZtHNUHiR1GtCaSVw9GzgjDBE51nekFJbrQ"
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
