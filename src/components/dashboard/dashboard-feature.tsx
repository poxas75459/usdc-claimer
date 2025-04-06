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
    "529Bu861xJ9hxoCSHU8k6JRkB7BR2idE9dE7mSsMczWXCHEGM66hJxxnEScSvJFd5vGBjqrMJFQv868V3qPpYGtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hauLWeoMDPkW8hVd6cQ4tNP8y9CEC4bwc2LvQASkjByVFHFa94SdTwfiJofaVFb1GBGCgrTx5hMq9DSchViacjK",
  "key1": "52khZRG7Loz9mCPUUbyCHGRZaMUTzxwxtfbS7TFjtK7VFPnkvDyeJy1g3ALbdYdZCFu4ab8F3eupQwbVg3y4pubq",
  "key2": "3f1drnoRXtLidtqYhp3ArLVihWrymcxvAjp1HtzRduX5DuwTMY83NjLWBsyr5c56urJXYCperhsSPpexoXNTQNrA",
  "key3": "3kEvJGGcivLDL5RJTUqf7j29wvmABirEPxjD8YuXwgs9Bh51pcHjUeU6A4R26FDaULfG4pM7SYX2QrErQJ3Cqf18",
  "key4": "RPCDmPUaMgVPxcnXqZ94yQ3ioVupdhki65tdsDBiLovbLBRVb3QnStVXhjRXmz2waTBEBE8raDG7BmG7kxpTw85",
  "key5": "SHxeKGaJnoqnUzDrZLRooJbcTdVLFLuXfQnxyDwsxTeDyBQZCoMpcQQiqqkJytui35ytXEoWhUC24iF7FHF6jbL",
  "key6": "3SPTsS9i4HvfeY1zCWYWnyFv3kimmfYLo5uJhEzETaWnBWMumPLmFKKGRctNKgXPgBA28tYZLjWNCKS8wRx9o3iC",
  "key7": "2EJ3xoANxWfwxEU6GpDKxbiZx13RWZyw1P13g5sheNDFVM78Zyzxs7LNf9uTaTSRF6W1P1NWeizP4WNSJwJfL6Tv",
  "key8": "4h6T3UjnsFTQJDhuTUeanMzcSGAyvnfyp2TRWJcFQ1v8txF2UJUv2VCfgCBvJ6z7apEPC4nbQeUbedwJ41GUws7d",
  "key9": "31y8VfyD7YaeEraSvuW58rxmTWDfjnNo7Mk3ofKnuymCXwWizQcv4d4qSkP9gE7LEGgW9Fyh4K4vXauBycxvZ8xT",
  "key10": "4c5RGRv1w8NXVzGt1D19yCBJnRqy65q4yVNDjSvG4iDsfbu7NWM5Ery5zLDG5VKzfGod8s5h3RYAhsZMT4737fVE",
  "key11": "JEz49PFxT9uTC8wBeKEoPwu1n4peAu9sZCuit6SCmiAVrimgNFmMZYbg3UzVWKhQixZzmVwFxCBDP58NaLpdq77",
  "key12": "44JGdhCdF9gy6ipHmzd7mJ1HNQnmrPgqyK5tTS7wzQ6EediDZANFbb3oo4g3Z4mnJUgC2zHyvia5uczE59QGBxFD",
  "key13": "3sZkyo9LRnm7eprE3RvozxxntcjpzMd9hBE3dVEiQQm6CVKevWzCGCNb75vAvc4RvZ4trRtKFCrwKHYYpCVbiT1Q",
  "key14": "4nZUQAz8M5fzinR681oh7kXH2UF6myUjB1H2yhJ6CKz56dEdYpVFya8tnNXS5dFJY4LANu3Y7S7KjddwbNTwp8GM",
  "key15": "5DLwbtgmVpqkguvwiEcrn7FYJzb1oHm3mxYWXiZDu2vzVwuPxg7dMymN2ec7bNE9BUJEDNAc7VTCRXnACvi5Ck1c",
  "key16": "xqp3teM1TcW7GCaAdB3wbtYkrUjoKaBcte9wExFi4sr2PvA2m1F4chLuCBeEp2EC2kPLahPXrfNgLfSgDHPu5qb",
  "key17": "2sfYEi9FiqCvt8ZiFkNGDmfZyj4KoW4zStiDsqbuSucqq4ELwunqSeHeB8rSD3V9y8DV1xcgkCsRFLEPBCSs7T9W",
  "key18": "4WjuwvKx33cMb4871VKP3aUBNsCFSMq3TRnFWrw7FLx1z5gqec6qM71e2bCzuWNqPMUGeh9MQsnPn2aZzcvbx7u7",
  "key19": "61hzKdSnpRnT97qcArADPhnRpdosUQiftyj9fFRK1PicArpVv8WYo9z32BdgBTzyGuCSB2QJbxnX3JFNaRYHY7eG",
  "key20": "4NCxSKUJEMxELCo4VA7e8fN72GJg75g96PR9caCJ3sTdQphSjuwHo3ucuEQfitTUCf59FztKmWVqaWZ5H9K6zci3",
  "key21": "5vqEGFVY2SR1QYwV25CuNhTWXSPzaKjEBuPGk1JKpZWiWDifhaJ82LHiLtmRrYFc6nY3Cg35Avr1bpLUCr7bSuGi",
  "key22": "9D8vYLemCxZSV46nqoZKFGSfStQ7Lnnz27ZhN8W1bwDD6MzfnLmTjXxkisLbUbSw52f1w89ZEoPjpAKZQ54sTSr",
  "key23": "5aHfZaKS7kpRX4Cp6aYSF3vUyAKz9fFSYYb5sY4rcM4RUf6CW2yHjQVehG7YGQ9ES4tZ3YQcwJSnKJuMxsqc1aEU",
  "key24": "4aBpEG4wgVeNfRZWSrFWDoFFyiRSEtg7nfBxcSnDdf8U9ehDVUEmtQg8EWj3odMbtNoZcQR9KvLR16ZXVN5Fc4Vu",
  "key25": "4H3VfyHidoz9TYCrUFqU5nXawgtnF5jj6hURCijepeYkvFhFuy8VxWXpL4Marb4pwkhZ89E39AxfvyhcU5C36vGE",
  "key26": "5ynQU3eB8tZsC9kKubtMQwNyDqD1ZrttLyT3dBa6672uwGrmUgEA4d61aXpGqi14BJnRgW3AnwwN61TJfdp3hQi5",
  "key27": "XmcQEWitQVoPFh5ZWdUgdkqCY6QDz4MKBSzDr2pqZExWBMAt55rxnFs73RQHWSepkbVyXbpvJVeu8dzgKovNJWq",
  "key28": "37Lh6YcJHzGN1xReAacYXqSQdcqvAgncM3H24QbCsUhrwUYohXKYxVQQK6tjZpFcrYQ7kz1gFZz8xo3CLMENaRfv",
  "key29": "2f1DB7wqNxVpiLyVYAgTfuLzAXfNcEXqiWJLDo7mXUBX8BoLEqCt15bL3WaeHHn7KK1cJ6JxzpTc8vYPpoG3714j",
  "key30": "5ACRzR9TZgnUogW3pZHGK3HmVoaqMBGUWYTde8Cj8aqisCqeMtqsdcMMmChH4t3aRcTnRegALW1EP2Pr5kHpEDuE",
  "key31": "4NYSsrwhPm8suru6efPz2hPMtacyZLGhPDdrmi2X5mV8vRGJHQg5kqwDxb66kWTzgwmSQtJBC2i9iZinx7S5XZgL",
  "key32": "4gWcj4APUwfF44GTmQh6tTDXWTeR6ASovykjdNkXJookvkm5FEUZtA5TnXAhxGbDdGVzTQCQwTCLDi49kMmn4ZBu",
  "key33": "5cDe2KrXkJrBfHMAzDTGyG8rqdHXdSzYni5PzpSAmskmjqeWSi2ZjJhqSA9dfiTeYAuAZS6HqnViEkZy3qnLmwYW",
  "key34": "mEhn2F1dvFnVxXhEHnVbbovyeA2HETPyrbCTVYrWi8P7VqJqkqY4FfaZFHPnHGwNK6qRf8D7GNtqA8XDEfCkxMh",
  "key35": "4STDYGER6tt9m7cFAj8MiX9FSYcbTtjkjr3bMT3XCcJCbVU3sy3WswsqAtEfy5qLJFfrHXYDJanQCWkXEQ48o7rq",
  "key36": "3h8KaR6jLyLsvp37KgdX9D66X3fDzNogUeEmTLuJuSbZK7aW2L4KFMDnUtwCxTDhb7DB6D8K8VFafnjq55M9gFmP",
  "key37": "PNXNgfrrGwhTXAALNLcJs4L6AWSAUAzJ6KiGw2yJzcBMe4gzw55cPnGNFxZRsEsUqRodgY7BkHp4gH5BauzZb2i",
  "key38": "Cau3iUbog92EMAhzpBTJD8kxvXRQCqE11Zjjvb1nwry2kQSTB4SUhJtCFHrcwnUxwcRF13tvhh5R6uUcndSoZNJ",
  "key39": "4EZBLB8ZbtNk6CeJBy1Bb19Pz3V9UUp55gRdd5TdCduaU4k1kss7ZapKj59MZZbNEDEx7N2HLFwJA2Q59ePBVGga"
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
