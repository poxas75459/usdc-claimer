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
    "3wpnpv4XgNYkCHJSYY6yZvc6NQPYCvKf7Qvmg9Xoige931VgW8KiEBxGdKH3enXX5UZd2qM6hxDSnzeJb4M1c3be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pCdt1znEnMyrMwrL3N4f9vA4Gnt66xZ4ehmeXYw6Fmkqwc3acfqRGvLiUWMC8NJ3soQ7gQtqoPEARTzM3sdyH24",
  "key1": "3FjzXCdtvMtcyeFkgMYqMeLzNB8qjkAruuC9baSPnUdQHUMQ17Xz7SZv7qvR4LYr7haNEPF32pQw44k1CcQ112x3",
  "key2": "5j23uTyrEUkkFqCuUBZ9Z2oaSA3AuskEkaeLLcLESqsB9U2nSDXQMddnmZ2K2TNpQG2buEhoQjCcJsSjA6UAsYAB",
  "key3": "2Hz9pjfsGmTf4kGCnKok89rDy4z17qBQxaGtaHm7jSsKxaXDLrRRqgaECcNAxSiiBD9eYWpucMWdWQeg7yLw3YFD",
  "key4": "1EJgvz41P6TUnJZyUeNrJYHuHWnrYN5uMkQEeCroNcYiaLuU4doCwiNwoXTCA3siv1xuFUZ3uomTDw9s2c3XFAW",
  "key5": "2P86rFioiVFQEEwX9W9X8gAzMaGG7NpCfDZ6ukjDnMZWEFTCYqdt5d2VXv4nrgrkYhjzuVs7UfMKvPJpXKDbN4dh",
  "key6": "35rgkze9dnXzpzDet6h33qGpVa2VvVBR8wn8yokrB1cxW7FZeBmw4JqAuUE7UBshxvhzhh13jWXABkT3yc1YYHdC",
  "key7": "4dJqSAqtzp14tnRyy3PEr4HCfG8UUJaiz1YyygB1xMLPJ4LbxPZsKbse6wjsZscwm16VJ3SCn85Kxu73pXBFuZH1",
  "key8": "kZrv7r7qJgKreEAgdY7XK7EdbRkv5AfJnQbkVDxDkUXyFTq8fwwxth6WWCVixBVkYAHysLeCUpWxBbzQ8h28d9P",
  "key9": "42Ftp8omus2tBBBHraCBhNPnbZwuEpzbM2BE3fxg3TR7NUFdymJjfky56RY1EbbcPazcK5yT9Udr194AZdgKBLqr",
  "key10": "3Fp6XU3K9NkDwFjtHfskoqiPmu4xs4hzgphZFrM3QeS2cBMMDaks8NMUZ4ik7JXpvpwEKKV59gCXeJoS49ituVK7",
  "key11": "2nfQ3Zo3QyW4EPU79zPNhNVswjUVMyaw6yMGNGRimy7vVybnZsA5HxBRtHJGfDV6pV2r4pdVuZpPGWZLkU27xdHK",
  "key12": "f8Cigw3Ps7J5ahhnr36TQopAELKAAVGEoGE3hvQFsLj9tDcF2UdSB4u8eKiqy2c6hCdTwZeKKxyrcsyHgi29Z9B",
  "key13": "2sNx6gihkuWQnADFFu6q4trKHdipjPAwnUhq7MgzE2Hh68KJY4kKHmbbf5rN7Jb1tVvNFjBNzRUvHLak3w2vhseV",
  "key14": "2sbcqk5siifGH8HxTY9MN6jfmp9b7USyQAJCoGmyCL2c7x7zCDkYP864UG8YFgg8GWVZztGJfHjXdEtL1wWUaKDp",
  "key15": "Pve1YwYM1zEJSKojCuctm24PnX6Bw4jMwLeVMQ8LMbfHZ45VbS1aXYKGprqcPUS45SoDB7j3LTYHDkKHJLGMKzW",
  "key16": "46pQSo8w4bCY8JVxrWREkRy8ptopkEmdqjzdJtgggCkxywdsrEQghkWgrdpn4aCniFmyRvTha1wJCtKypqyYVRYe",
  "key17": "5isKA8QUKfQhWF4FLHFa2iKzPbqwd8RFF3WdyhGcSrR3atrhd5295QTCFNr7urTdcao7uY2hxVVj8DrFzjhmJwtA",
  "key18": "2gQWWGWK5wzwqnzYLMV1owYdD39iaqNCYyYSjZvzNDuigJ4AwFkzHFH2rzPtpyFxsodFKVju3LYUKkDKjxFvGq9Q",
  "key19": "57nfxnYo9y83vY9M6bTm55XhgRvgQHNnnFcgRk2UTjkgkLuctcaqD9LDoW41kU7MqaM323o4ZwfzVrEHUwmLo4G1",
  "key20": "Vhkb4Utz4MbhdD9PrBDpwrTtLRNPnQHdNNH6TQPqDf4dTHLLVtKFY64TvB5kHEBq5w7a53RPqg9fsmsE1eu1zBc",
  "key21": "3DcDYa6AsgvrQfv6urpPXD7ZtU7uc15Tzf5SHNfX9d5zwRgLBDNzvEwfLVFN66hsctVtWHi8PEGFTH97z8hQusVR",
  "key22": "V94jbQF4XkrgCtKpSJViHjVinG2ttWZ862yESWpsYBYEKGiN4nKNW6k7jJ7m614wBeEEC3bYU1WaXdsKsTmf2Pa",
  "key23": "pr7Mj99rSS7DgyHvR3HwR6Fof8fLnRABCEw9vpyaDqSgrR1CA9D3rrEwg9xZ44JknkW6LXhHDjctNkHDAkHHtyD",
  "key24": "4jAcoAtYyf8AdwHbJgPLTmeYbVVhgtEH7meVYgScWKngwb2vKeiL1oTUrUcowNhUPbkDPHqwi81RqQEqT9J3jcm5",
  "key25": "5fyJkQiAJDqzn58MKtMdhyMb2DB4KadykDwrFZdVgRdAWkodBgy8xyG4po13fLC85TXu7TjAqKAL5dNsvHz1BPgj",
  "key26": "5Nov6wKJxEP8DQmQXSaDLCi3xTPGPLtnD4WpX69LwrQeFErwqVKqaBbwwbYhE8xxgDGc4MG7n2JMZ17LP1EddVVQ",
  "key27": "3mLrFbJ2Va3DgRJtDHC41B66rE4t4v4PsixQdNUP5efHakRjpaJyhgWpX3YQ96AvopLkMQYyTaFN7a52ba7A2SJv",
  "key28": "2f9PKiveeS9Zy63k33neXHpHwFRzn7zUaExyAZv8gKHnRrRj3rKLrqmqLk779iFAEXVyu9sCd8mjcjPNKtNMqkhZ"
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
