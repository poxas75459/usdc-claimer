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
    "2sypAtkASm2RD3HViXuEDYQFW7h2hM8Pntjdi3KawyQj3F88SiHksBXYqYU5gL9bKRrUg33HMm5kAQki7cTP6ccW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kitmRhU7u3UDgiE8owvipAtkeYyW98TWLGqR1weRUVTVKvTGAbGSGVZsuU2jCTULayNUaFfTmwJtj3hCzguL3F",
  "key1": "4E4LSrwSffL3Uxhrs4sA37U4DqpPv55Bg9Z3BeiddUE15xYVXJ2kkaDPzx9iQk9GfTqUJkxgiP8zMUY8UC1oDnWd",
  "key2": "ELDM3udJuj7M1W7k1FrR6wXYCBcsr3EM3FB18DdWcjxhyEW3vsasbzcq1sGTVhRL4KuP4aT7QVmtuqAkpXrMm9k",
  "key3": "2P8yet8cE84roETgm6RJmzJCKA3VrTYEci3AoAmrGQ8LdFsSkWxQaRRWKekgtLi76AYczjYC6ksFjZTEkbCC7aJC",
  "key4": "4o9u4fSDq2PPW8jPbsT82kyfNQwTFh13QLa9Qq2NgnM78SNDnyrxVNSyWkp2Sjm6MZKPGPNodskACNRWm5BGsVJY",
  "key5": "3R2qYud55dwFj35gJUkr9wwHfSSfJ4Qeoy5Xfa5tgzDh6Z45CQR1MuhbgJRsCbfGepJwPPmFva9GgFdMgdTUvrRf",
  "key6": "66m2kFYW7chRH6eF7kAW3vgsF6ncznonCxRriCi4xLFFFkbBJSP8dHDNh6LKmm4fJ5NJZzPFQwrihCzEzoRaeyB7",
  "key7": "5ENaNDURW18vtAinJxLdQGuNdQChhkgri8iNgVsvNqrsi99RuiA9yFVdRXSzXfw1S8qf95JvjGbCgR1BU96TWur",
  "key8": "2cn6d93tKhJwVQ7p78WchYhSkpjxXwK58k8QG7Ewh16gkVvh8hwqEQCTgHpny756KbYKGVpmGyaWxBS3ov5KD9DF",
  "key9": "3ZNuCFehvkAySPyQ7bKjMjPVEhPmRnBiXS7fbZRtseNMBC5i4va2pdp2yLYoVbriM13hCTxERYGj5YUDg5HgqfhG",
  "key10": "3Jqop9zKtEzRzzHyHAzs9K6M2yhFuWipzGiYf4bmGJPavdZWMDMJiciHEKnnMTcxydpuBFShrKSRhUFBSTXPV5JP",
  "key11": "4nLRHYKErtwYG7eTyEQEjcDzV6VhwufwK3rJfYQsKxWkJ2sb5Guc33ojQScKgfLHWaknHa2fnZTaXs9Qgf5jLsSV",
  "key12": "46vWthgMZUSk8KLBcj2HvxKhYMXM4RznBibNxuPFdHe2uCuL8kWvw5fCpRfVko6UUN9d8tyR8E5nzgvnBfcQms5z",
  "key13": "57LV5QRXSTq1TYBhadeT67b6s7aG35fxxjY9wnDRWuj3xJ1jidoNAYypTzXpUVqpVQ2FN1waPPAcEc3mhWtQLWK1",
  "key14": "5FyD1ens5JowNaPKTw5aJaaVA6PdGGad3TvXsZ6UL6pSvL43UiE1L1gKj3B2ZxBGB271GfWvvfcZgwr8JENAKbhe",
  "key15": "4NRA2B4mexNYiPJd52wstsJLr2daox2CWTTFyaABWB7rJhYMb7vJQjxHKkWg64QLCbs5Sk7pqCqjyWWCN9NT4Mas",
  "key16": "2ZbrCxKSPcyhm8J1sA15B5i1ipv5g2Yd9cK2VUo5NyVA2cicatUUTgNAPLLQtaVzsfwwPw6jiBesnHhXxCyFcP7B",
  "key17": "59T8Q8DqCdpSZ8UeJs1fYMhXqJwBJCbiFCzcoTA6CsMNMzEV7VLXHA5HYMJcBmnqFnJNrJhocCvpCC94vjjPKqry",
  "key18": "48YGFX3z1HtrWPqkXpwHiKY1KnoTFsNr3hF8jUiBRawZNRnAAywDxzVYQ1DJpkQqMUS7wLSf5P9EivnGiKt4DFK1",
  "key19": "5mdsaa3ErQwE2U2c2W1XMuhqAXPE8xzcdGZfZvaR5KQUr5meKQyYod3wtvEdVt9ZL5XKgY6z4Wau6TjF42gojBca",
  "key20": "5e8V8wzc5U65J6nHGEpri1yMbNyjiPbNNnfUDDuiscpPwHnUsHnTgLFMrdYVPJDgMNKsNnkCxvEDGTZLumyBir5F",
  "key21": "21gMkg8RpoWWhLwVMdSrtm1SWveHHf7gcibNDTibqH7UwCw5L6EFiXoUzwp5zEMFrHZHns2vDKdbY6MtqUpU2gop",
  "key22": "4czYzWQTMPmAmxRtAUq5JooXBzVv4FzENEF8R9Zi954Dqh1hxP6EiYY2eVAsqGR8qcRdPwm1VEtzKvin4Xb3Bxcs",
  "key23": "2rKX5Et2dYgnSi5h1ShPuveZjCKrSaQp5EwEwovq65jNu2P4t3AMHGLbutFiy4iRX1CnKWCjZrJ8K6P9qmGPdVhR",
  "key24": "2ZsBcTy33poHtePKDRcraxD5T3zM9oXKVSHmvaxY5ZNXpct8gSwuR3Q1ujsxGHyq2Fnu9e7rWY25GpSBJJbjABhY",
  "key25": "2L2QdiFe2x65pJFP9wpNddpUGBPAE3HwjSsD8SPa7ufrFLio3q5Wvu2pNP9oqMPePXVJiauEXCprwwRkBn7GHbnt"
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
