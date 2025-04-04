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
    "2QgUTpYF3KRcVmpSk4u9bjwiEmBiqDyh3kPzjfSDvtjBm7RdneXcz3QEc9AZrkiMSbCYnHjyX95ZtbvgbJ4vQTYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4miLT4g9rU5vkEhxY6VEUUzYSVtTfRD45yoSNyBYV5eds1pkcmBF1ErsMPduf3QSLVSSACxbyE8JMFmCT9wSkVeg",
  "key1": "2k69eZ6c1yLBNCmDBvZkbNK3N3QzYGXubofZc3z2Aa91pbMFiUeFotSX59Da8rsPUEXa3grYmTEw9xBcBfxBYNpy",
  "key2": "4d1w8f1Hbrw96yUcoeV9ZpLPSSfo9SBY1MsMQFd1PtnerGaR5DkTDukdyH9S1yxCw7aC6NZqAaxwkArfYK2Eu7Xz",
  "key3": "RWQjH14Cyps11LcGscp2mkBCEmeZ4419eGZNZEEDgCUsEfWoHUhfnsspLJP3LhXkQh9zSjan1ovWVkTrwgRMC7A",
  "key4": "5hwGiMPKGV31uFvQLUD8X3s2nd1DM56ARVSt2YGHvjdZySsppFQhtojf6XcbMMSrMMkm3smv52UgdQYL6f8pM6RH",
  "key5": "xvg3h92Y7SUAbwFgpCTShktjCD45ENQTGe3Gf2Lq1hJdJ5veR2fiyvKGuMe4kPqSJNnS5QRiNrHJH8YehXXqW2m",
  "key6": "4oigriuHhJfREBSJVEJ5XG2mDB8aex2nKMy1YfnGGVJbGbDDsbEZFkMQZutX3hkxooaE1bAXGyNP27KJjB3epbEk",
  "key7": "3PveV8JFpEfairvPwTXWkxijKZ6EBtHjZYDhkpx6P49K63Gv8KLraojFVYYvkyKVpLwYYRN4MDjhykK71K5K2t4k",
  "key8": "3TqWM9MnybiqvfePzzkQ7NYUpxo82evNmfxrJi7tZ8xKpnbea8tmE2FvamhrZHqAp9dHmZ9wcCKqJqqxcgQ4v5us",
  "key9": "5FEikMDrfYNRUxe7AKc92zaLMq8w6HBSr7ZLGe9mvNWMNg5DtPRjtTRQpeny5zKdR7r9eMAW1tfwN47bkbVVSS3Y",
  "key10": "3CFfkvtZjaUwJEGuTmSX39NkJnMFvKyFhdiKZavK1G8i7jHym527Nh4piiu4XLPGTV2FhbPVoWhNWiju9CSgkxbS",
  "key11": "mt9rLqLgcs7vk7YzrgTPm71ckjYYtqgsS9zoFS1BneQc9nbZkeyjETfbXEHuWahDU839kNqcoxFsVz4jiwusSR1",
  "key12": "UFDyqQYWTF9m9vQ7zqr51kJfXjKxtyVbkdorovUJ2XHUWtQuzPjLrNhNo8RVXp5UoYuz9heJRddWVBJfsHdCDyb",
  "key13": "26K8DmVNVE1DChy6K92RJM7D7jKED4C8zqNTcF99FZeYZyD1Rj6z2ofw8rTSjkJGYjRSxYbq8nGDCJwFcJNXh2y9",
  "key14": "aerAfMzfZJMJrCRPAMs7AStyeefvB7YbhHrbKWMhGktp7g6Rsrs5bQ5swhRpw1rtksCgYF2JmT1A4evkqRx1XkQ",
  "key15": "QR9qma2tmcvcm2vVZhyCYbNLvyB97SAMdPJXMmkaNjk8VAtcTHgJpq2GdFD1YMbziatMC1MkhwtrbB77jmdZwTg",
  "key16": "518SPTb4eMmwi6aL9rP8Zq1L15DzsVDbVWJ6GC7ZPFxmN2uFoyncWgCgqPQp5PxRh1mbE462PXEZobRoJjFLfr2i",
  "key17": "3m8SDk4CFXCZE8Wnuuub8KrhEWR7zzQUXiaTXX8ZDn7pvVvCUsByk1qTxornvHNnJzYMtcHTD4HNjFF3PParm2Ek",
  "key18": "4ACxUzmSLZsFyN9RH1pacTWPy5uJSEPKvzj1H7odSGkKkVDVu11UtKHPTTn9uX8KWJA7ivs9C3RKsYMURCSQAANW",
  "key19": "487Jw8HiViAw8Qk2t7H7bdas8yJ8hSKFrHGDtxGgAxZeCPyjXHdR4j8GEeZkBsB1PhpU9yjw6c47S45MALKmimkH",
  "key20": "38jBvUsM3JpqjnmSwn33ihQaiJbdd1LZeAyzDghQ7Aj4RYiaYaQaixqUPmE9UmQnddwUt5XLBGUSHDjbYFz3afq",
  "key21": "4Wrc66QfH87ugYF5Hj74QGn6A6NVc3CdgYNbXvHsroZ6u1Ri2R5r3pG17X3Vij1jqV6Q6cKPBwwFHKqL6HW4PD91",
  "key22": "aaaeMYjK44LTj1XZoLzuZ4fudC5rCtD3Qmi7q3uzxU5YnejRdgxXpQKVEpK93Knz3sSXicAMu8uDspgFyvCbeEu",
  "key23": "5Sz6pTiMnCxWvgibjT6Yfjauotu9Npa58C85QFYoJovHNtkSSAotdfL3jhCuPQ84eUv7Z4FtLHjvvsse18KL6W8m",
  "key24": "2sVoXbmxooswjubWu8uT3xhidLxJR8W5vWjVGD2uJDypfiQo3e2nYDJYcbcUB7b6yG8UmxEqzWj6kxNHwXnuHR4q",
  "key25": "2T9jefrbhVPkHDdkiz42a6Vm9aafepi3ntqrebfjVpYsKHMpzcit8TmPJpYE9Jw6WenjV7V9MhscZBLC8WiRcnvW",
  "key26": "3QCP7KJNpPPrfUhZwVzDemTBiFQ1KAVZrTg8vcJ7gLDrjkpA1ne6Ap8zDw7qGMQp1MSQjDyuZHwbZjL6GPoGGkn9"
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
