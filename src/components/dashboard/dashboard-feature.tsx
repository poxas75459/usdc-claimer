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
    "3GFQcPbGevJco45Xx3pwyRmCNBBdiS8e36o1REt72kNn16vpWUxvJhXoQDMUioswt8Fz5HndfsKbs2rHAJezGRF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mh5o1DaiHpfKfWzNGZJMjhCpPiL9LNtFSn4oFLQ6xpkeUbH6msCBFH3Xbmw8cWD9f1piTb82eXcjQCjS6pgQZ1",
  "key1": "2E1ZLVvzPUL2netVwAM8KT3jpYR82EPECzD271fGm4sMHTStfhjpoNKG7uEFHdQP6785k93ZswWhknWzRfZcf1DU",
  "key2": "4TcvrC5vhfZt1jFWcCa1zxP9nzn696Hmz4hTPp5FV2jbfvyzSEwHLmuuqGmVBRjTiF1A8Ba9A2znzVVpd77DCLNi",
  "key3": "4KbCtnCMKf4a5UMg6ZkT92bU7xazX95LEqvN48u6LULxnxXJm6V4g2JtaY51htchenGKAKd5fmMkWKUrshafkV9w",
  "key4": "RkxKvbWD396UDvvxv4Jco8CifsMqjQMsbfEXgiPjpw4vjGWSz5PyNtn2HBqN232XQPcHmsUEKVcNvrCtKkRnjDF",
  "key5": "2VSJzGLNyZzTSQx4HE5XNy1CGf71xz3RM9zqrbU9LkmdZDaEqwSzG8CuQ77Em269tcnMLwE8cxDCdjH3UEYHX4wj",
  "key6": "3ttaxeSSzf7nE4YsApbxDyuYBfP5UhJQDtZH2VPLGNNCD8qED31UadgKsYMxUtQgGS4UwwoxyapYvuzMBf1erexL",
  "key7": "63Rjtd33JMG5VKJKPw5PpCK2TCmqxxsqzRZVSqun1eeqAgPAjeoebpJyebFdSf3PwoSxxfSJ2T2r3YcKZHLQqVnB",
  "key8": "2qYZrdhetZhGjZvfFYkWCZSnHKmsUVLNGQPuwLyXTJqE3Be3Jg5tKna4VymTG53jAgRrv8NwoEDmwR9dPJTeQayG",
  "key9": "3Q34dJhEsReFjw39jpfdVbVtSk8wxBwuqxttzn8oq5vy1AYGNAogzQUoPegZ2dV5sc7N569YL1LfuMjkhUQNFGz5",
  "key10": "3GbY987gjRgvziRL4UfjU3be6F5vUFiD9puuAbrr6drUVe91RtG5qynXiUikjUf4GNqVisSGvDLsrRXYx9AeNBqX",
  "key11": "2poVh72Y7tNTzSpsHGWuoD3QyGvFhEg53Kvh3mPXFCZEj5vd4X1G9VLmhUswMtGfKQchgt7jqa83GNikwoiM63Pu",
  "key12": "4mRcU6YaxHvgci9pnMTgBCxmPbQP3arT6qKHLCf8CgxrXUpCXT6n4vH4CxKH3RMoNFX5x7uGQyLdfBW3vkqawbp5",
  "key13": "nMFbuhAwEXk3k7AUCrstztw4weVXjZhwZp4GEWKrHKaVTQRhxwTr8DQi9x2ESCXfiycDQYgABLUGqfNuXqoDs6J",
  "key14": "4zrXBqdJwib1iDE27nJEq5sbiTZWXdDvY9nSqLoKFKaQCHSnHcf5JJsknGuBVmRgV1kMwaDDyCjhsydkxXCgH8fa",
  "key15": "qpPGUMCnj5vmSW5NC4DkjhNrcZJwqY85DPG8Bw38617kzcq5b4XgeTVtHp8Us2vz3HEoQsYBvWubRB6nMT81232",
  "key16": "2P2KpHPz8TQYYDNoKSHkrcbUgmMh2vyj35itPjKNcKFhvvw86Ue7E5vzx9QTv4ZRDARrXgAUcMsgwYU2pQibDRea",
  "key17": "rBSEGqJAiszErbV8oed3XQGnqHnL2G5yWobow7Cux5wEuXYZNueJDQXw4PA7n943LajbxH9E4Y5b5FpkbhDxm7n",
  "key18": "2VuAQnpZUX2GW4cJXc3MkiRfXGQhhpYmFLYPxfSS93iGhnub2RhRRqnXgrkh1hLuYLLKvz5Hj8M5uRmLje1M92ki",
  "key19": "48GcZpBWvwkduReKtzWb1vRH1VtRANBFti7uch1sKA8UyXFnjkuXthKEB9tx3To5dQ6HiBYy6dZELb2VtD1YAqKq",
  "key20": "2r5wSNyPZKsPSU3BgSKPwH6xKf2xfMfBzrsf8wJaiSFtEHTFX59jXvxf4YSZSpitELQC9qfDkSoSvUiYtq3MDUFU",
  "key21": "38obM5Mna6GWEBQvDUufrgzvdZrrgTXxmnp1KgpC2Cf239kJDJyfSXDWrEEUL7bXP1u5dwc8LfwRxsV8G96VtJxo",
  "key22": "5rSsLGuJMtMdB6yxx5hCYP9vLKLh2wj18Tcnfiy3N7h5mrzrainpk72xA8bKsVmfGv7GercYRhMzVozzoPC7TLXu",
  "key23": "4pz3UugJuni1gRiv5vs5ANvzWyQcedKfBBUffVdkGFtYXvuDTc1movA4yAUwXY7nkJQuq5W9BYaExQrfHSmMR9A5",
  "key24": "NhHiCC9VtMDe8qfbdkAdC7cdEJvzPQqQA9Lkdb2tDLZft1uJHUbPkHSC2tsKgVgbB7mgAfJY5jwhtpuoqzF7ndU",
  "key25": "QuPxXzY3tLcJSTNQP3bsH4wGbQJ7wXDJXr7GuYwm9RAJ1E6jPoskfhnyRDqwGw8hCcF9MsPMHUgkPs4JPETyG65",
  "key26": "2VGmLPTw2tq4ovvUDZoFbFC6zTHApz14qrYANuejvzgTtU6n3wJLs3z8YgcxynYGRtqjn3KDgT7PJDD57d9QGuZz",
  "key27": "PX7PCiSBRfyY4AAuE1UUwzPctzUMYJs4c7qL4EXgdD82cYMTL59gNaVU65HF6q1xXkZExWCnNnE22ku4XKvz2aN",
  "key28": "3BnCWpAxGr4cCwXhqD6s4pWbRjCrzVhiGCNsDvohuFe8WxGsBqS3j2w8VLckgh3yEpsJ7C8X38nS7kyKtd9tMWLF",
  "key29": "465opAygA7nq1znWEKX7RsnPytSQJcDUw5MeFyPAojBPfph4Fi3LEfKZHfT1cGkvNmaQutou67kYGjQRRFhpTkBU",
  "key30": "HTHhM4Z9ZyuWpotRCEr6hHaZieRcH28KDoKwpggjNuZzpJFkoxJ4oFKtTafgg5uYFtTsyGFAg9Ho72cZsxe4fnz",
  "key31": "4jUt4ye929bZhtiFwtPJ3VfQgkm7k5Pjh5xAw15kMSMa2nSkW6kXsyvdn6frQ3UMcGKQJXLyLQfn493o9kjEGurA",
  "key32": "sZ4nuM97NaCuPHwqSaAG72GSNvuGSx814abAqwoNFUY7mHYuNNM5MfhUGzoN2mmoAHeVJRAzTHkCYhcYZa565kx",
  "key33": "umpbywnsTFMgbkx7soVMCWEDGj8YyPZRm6Xp34ELm3wC5AbNiwfE4xbyzHQw32DUFxFc4Lf4RhkCG4s8WNE7JrQ",
  "key34": "55TL9kr2kGVwpEHcWdV1aLXjzfy1qJXrfJTYFGXeV5DLRYUDnZ7NtKABqmAbQgLfVvmNLvbHRZeEtt4XQYvwBhqV",
  "key35": "2AoV7YhZJW1XPAqtFYbHfwtA5p1Yrs5y18zQQRcCQA4ToJFyjjKaShrrfJooUC1pkuxSLPCfbQRr7JAKjfRtyh7D",
  "key36": "Zh7dhiJNSV1zAnLF1VsSvbpyky4vETT74eDXGJJDdvNdRZj21W18F8vgmM9G56giFRUhfVH7iTEXFoxGQRA2UUy",
  "key37": "2qnj1CqdhVQYhVa7ZaPvqsTs8QRNgqHhBezAxEvYgDefKdoP666r6KpMJsPdGfQdBsMSab6fvVuHTV3uzwzn6n4D",
  "key38": "45RzdSVoCEmLaFU66orR1LebQ5WBNJrVx1FabefkjmXejsySFp5HZan9MzcTsJf77aQrjQGiDNsa2HAzjFjpNAou",
  "key39": "7k4AmQcWwzjFvF5WnCKytFk3htdSY8LMXWn9oxBQDh6FLCsYyPfPgQVSyHgA7pcDDRGVBXuWvE5JzCdnRu8gMiT",
  "key40": "5Fko6Lm9hEUb4K9aHD145MNUEkseEmPSsFg29x5nQrvtCVZteQDBAAaTPAAzeZRKfbUzuhEWpMNpj532v2zpHwWY"
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
