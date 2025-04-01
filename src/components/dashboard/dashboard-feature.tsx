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
    "5yqJv9Tz3T6gYJv6iU9MsurvWVnucBwpXb32hch15LRyDzDkdzvxtkf5cD1K3KELrtPDjW8L69JiLbZ7ap86mb7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NoWuAeHXcMGnxTvdSR7WQUeWGyMghdKaSH3YLwDYuRx9yn7J6QSvwoAPGb6bW6C2tfr6APq7FNJjddgfSUFZikc",
  "key1": "2N8UoZy2Ge8rpK1JEzA4jZjgtNZbEcBsfK6rwbZCrM1syvdPdEcHvHS2Ko5SWBWWEncBk3aYXrnXBguHckK93sLE",
  "key2": "3gQDJZ9AJtpJhC5ZnYg87HaYuivavemneYxkQh7wuHWVEit1AQG12W5nP4m4EWQ8R8FCc1qasfFLNwxKtW6ZpHnm",
  "key3": "5PsA9cuNJU1B2qnZVdNeirBeNmJsrRfeH8FchC5K9o4XJwBbPL46yN5N3ZJUsVnRDMoj2rBAVJ6EvuX8BV2yEE6Z",
  "key4": "3dJtFPAMcHtKUVJoWSjDHumtBbn9YHxD35WaHS1hEy3QVtkqLvDV5qYJrecFfQN7uTFmBiQS3xcH7k6UwxBVmuym",
  "key5": "4GCEXLVKdkMwH2mREmfXPb5L5jsRNcx8wurTEX3bANRE7PxMyHQWMwY2bpVryxN41MpvdEK3KoryaraToVY1s56M",
  "key6": "3DpGhm7RwMpdgqQA3CtyLkiRw1o2MX6Grp6tHJr9Qh5Y3h3Su51PZKaNAAZUSreazvHtqu1JbgFdNU2aTaFTTKK6",
  "key7": "2drGHkv6Q4LMLVG3P6uLgeZppurdFCeMuEbS4d3VjccV8sb7h31CGSdHV4639PRAr3EUwGaEyHDWGqq9i5wKHGc3",
  "key8": "4wg7dxwf8RfT3JMK5E4ruTtEFDwRMVMNY31y7yutuT4gbkFYLa68HE9ibEf376mdQpyuBm8p6LKTWYwHUgh8B7PN",
  "key9": "oSw5B9xJr9sMCmuYtakPeNMyimGPiMKC2qsraGrZy2MLzuB4MU2kenG3kxFkMr7TDve3fGxRzhzBBbqphtAcpMb",
  "key10": "336b9VbTPwqFdAtKhAH786zFtMBue5NE97MUXyfDQTU17fVoE9f7ST7XX8hJBku33rvw9HhGvTCt2Lok3MgsWu4f",
  "key11": "67dEw3MeEWrfLH9RSok2bJh58bmZWWYv1ZdgqCzWmz3JUa6eAHvKWkutzNsQ7JeHdMsXagohgp59T2ab9ad341HF",
  "key12": "yLgAof9AJ4X4QyVp3jvmdFhUA7nUzWp3XvYyUtJz49F43K6jWZriX9PPzr2nsQzbi2jmENLcMd8rBDmtmT1EGJf",
  "key13": "4pdNYcuLUww3SjDAij8rJdgD5rsGHeUjEyuufJKz5TXD5FLZFEzeqhY7uarYf9aETAfPA7S4bE7UbuqD7EaALqnq",
  "key14": "3k9z3Fzf8BBLZcRir43bLgdv817aeqpe3EQF6z4GgrYJ6kMTPAMWyTgxpoDaXk9humopsheCzcoLMBw9VESJqRxk",
  "key15": "2HwFauRumxLk5mUvo4486C3LhmDZnspgmmNyKQEiCBD5DbPgJ5yHGtxzYg7rh4E4SkSaKLkFnoAtvGkr4KFXoPx5",
  "key16": "2gcyo5pdzmYApUC3EPLFWng7z5cFpKwy6vxhq3SHrKcKK8xVzuuU6EmhbJ8P9oQ6BMd5cqhGvKjnkRa6aFg8Br3N",
  "key17": "UDko2aHU5scnd7ix55kB3whHdQKgBXwbHnFc3pku4HqP4tY52JmEU5A24rKrbwtHnoJZpMPMpV1VdpghPR63zyb",
  "key18": "2LWnh4S3iJoNd3VLcdseBbsckC3YNazbsQJnAYyD97LkgWRkYQbVtX6Wa8WMAvBLUkConarLJZ22hrsw8B3PCHHT",
  "key19": "4bucRjCECcymNMT2DPj9JoZrZEevmNU6XFm8phjQmcfusDLEwhAJGNaZEvUeoLDyM5yvjN719cz8wTH22yHfSFTD",
  "key20": "2No4ZW4gRY1JWJCgRD6osivBeyMDVXxdagPw1paGAxamVb79WUBVF2f9J72dWKbGmUQ6ybDSZZVYBwZD3xkskCtY",
  "key21": "4QpD7btUX9TEtyPiYMn4ferN7tmzPp3NGVSgWTR33rcNQgG7CA5tnJ9zXrb9KoP1gL57fNqMCZJ8t6xYdd99STFo",
  "key22": "5XgbEHKJdzyEruFvGCPcHHNxWGDdDTPZz4xnr8J487UoB7AMn1UtoKhav86WZQhzThsyCk3Y7WVMgYjdPeqQ9Qoa",
  "key23": "3Y5opVR3s1os9mFaZYKcR9Y2WYSEfTyCJUM8KMQD7mwW3ETj7EUmx8Rvs4DgtQzyRzxes7LRw95Ygu27SKPgRgpq",
  "key24": "5afeqS8pmtYbinUY4mb8MLhURqF2DWTu7g6yjWN5KnV18y3WZUHq3rTpXUG7KEcTHpJJRi7soPEtnDS94w7cYkBw",
  "key25": "58zNpXdki2hVMVik9rrha8X9j9uU8p75vdJDUuBKX72DTHYi8BZHn2TbGkDir7ANWiRPgTUnBuXUjtYe3VEkxRKm",
  "key26": "2AX7F3ghU4P65NcaYzhJmQJn7a5Kbdp1SNSrPPsW9RVY3Q6B3x1tLqbNJy1MXoRZoDre5ghQVi5Km2vnSkvZ9FHy",
  "key27": "3ZWb7fdG9Ury7ktigo5JtECMMBStgdYdMv3kVP32TYgNJGGPWfKrfvn6Lync8gFEGXv8cwafzU9W59haE46Gn4CA",
  "key28": "3wEZ3Fdsk6t4x9PPsWwMkSBwzZrAuJ3eCqM4AYfH5E79thtRya4PjBnHyx41Ptu4GNSs7Q9gnJ5jSktURRQAZFDm",
  "key29": "5Meh8k82Yd4ZaZEJHG9eXNgYSGt4wcKdtFFcgRxdRDJRjycziMnWcSswHjs3wARmBpaiFPfbSj8Z2CtdqTSRHAzy",
  "key30": "4uYg6xahmzTPuhztCi23oaQnQLauLSGHE5GnsKNwQCfMRW1TDUoLG2EFvNHRrrKQZKhXUTJneXnRFxV7fCidKvTd",
  "key31": "3Ld2pn7mGkpYvLL7ww7gvcqn1efCsGNAvSp6Bwo59CmEztWKzbWEme9LgQ3iXpK7biB5qpGpNyZHz2fNUfqfqFCY"
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
