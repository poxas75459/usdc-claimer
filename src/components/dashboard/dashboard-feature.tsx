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
    "3inPwFV7Y6zgJMFNPV53tzLMv9368E1MQT9wLbagkDG2YNXTt74US4yd3vvcDvgBu46Qt7DvVwX6xnb8mm76x4gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mrqz8i8MdX4x7TdcnebHRj8g8Knp4exPBqGqtJXm2VhPwYddbGZm5pYEN4ps2Vi1CVU2GMzXVVurtoKAUjkZ5TT",
  "key1": "3s89RhKjWwGQTKU7MV37PwURM2XaAqUL1hRY1wC99HG8DeWBERnrCpzHwZWRJmHfexD3aBzUFvWhysKTHebm7BGb",
  "key2": "2LtWJxT7MBqx3v9TRFKur1282gzP6MJYJbg188okGpNhEUUre6Tpcw4c4i9qYrMPtRC8xRX9VGGo1CuCesi2BJH3",
  "key3": "4euGAcszhkAFgSDZt7FCooAUcek5B7dnxJr4v96wq22nnPCaQhPb1sjqByNV8Vn255nSk2Np4J8Z9WNU8S4QiVwK",
  "key4": "3zJimrAFLf4brHAwFboNk3JpWZrHidt4E5anQecM4ySJmQHRxADcux7KUGw89LgwQXWdMaWaQkWax74hhG9vZpVE",
  "key5": "66GnXBuX9jjeX3xqFy95mnngKtyzZtaDjp4jeNpSzvwDWnkdG9KSeQYg2Hd9Kq3eL824h4FGfv1Lvdu4dZM3Gda4",
  "key6": "32aYn23Du98Fo7rTyby7EwUXAgXvJ51JMH6ege5LcuVZABZL7yqcZfxEiY6Hen7o3kuZhaS6UM1uuSzvk67kj9Ad",
  "key7": "3D8yDidwnFGigK5ckuL63XrogXJsN7fchpzyXBJ8DxKyybnCdkbvXhPs4xBKPXd6vpysQ5nbQXCRZTXzbv5h8ndJ",
  "key8": "2EptDEZKBijvbRPynRoRiXt8UvkpjEym6kRdvQBZMr41YTNRohBqj8iLQf1qzvf7Nx8cQTuGHkTRpjcdJb2Lgdno",
  "key9": "3hHUzVmPodHKMW5Cv8uvxvohH4dCAiup6eWffhfZDyFDoowtbE4XYg36NUQwYkXsmTGZPzhcjJL64EzA4aR3FyX6",
  "key10": "4fWPKR7boGBhCLfSUwiPywxdfJ9YtycW13huuBWZfnr2j8bVU7tUAMTjqUHaDKSo6SH6EabLvWiXhMWhcoP5ZF2K",
  "key11": "ef9pTsTRFWJ8SJTRwx6zUJ17AUeU331UKvUw6eTordcDD9MnNFtrQ42BDKvdzzrH9XHmzizBeN9EB5tEQfYYQZU",
  "key12": "3sdNAH89uEjTvmQWNQGtQysMSSRi3ffxaZFEcjYJiHuutusYwojsZiZbh4wuHkzi74fRZKoUgTjSfCcpKFmMBD3p",
  "key13": "31mVzSw1WggQCAiQbxC6ejuorUghgHjRRfqwFYqXn1HRxUr4udAsRmL35QoK8thiLVdXbCfWSqzDnc3cYzsniqz8",
  "key14": "2yajgj8XmA7d1sg8Sm6Z3fbikQkX64q9Wp7DK3o6LL6moFtvQUTwgoTuVsRXd8Q6cX3HmdSyxeNnk7aYSj9hE8As",
  "key15": "2WimYh5Rso4Y4Scq7hXfzhwfWbtFncxR1QPmeruCeQDSVQB5DKMRRQK1ayxsSJ7Pb9RoZ3dFGt6bjosNEvbfDG5E",
  "key16": "3qW9vFwgJ4TaGEaAgKX71fmxkAraWciHNuCWuTPU1ip4n9RbRu9juAkGdus4mHaAkRR3KkxwSsu6mjZA5kgxWbes",
  "key17": "22D7eS3jVjjYtNSWnaQkzkYr5HWZjTUEJbHY5ihNRkUKUstFRnzUkENhnvf4nprBsT7iNWYPFBKBSNkbmDaZ4fUW",
  "key18": "3Q7ojvnuc3zSnYpvSFqGr2xnQDvwUQJHwXceVjHJgCi8y2ZfkHtdgvTDDd1ok56ALC4kB3bZ3rykPJqzvy4sWEMn",
  "key19": "4inn3Uoi5hkhxAvMDsgsHzd9xFKVL3dSuMsYiYdacgEc5U5FRTmpesqh61AoRUpU2UE1ogV4wdyYP65Y2Si6bujR",
  "key20": "5C1Am4wTN9TmqaaPEbP3Vakhk6BvURTn74uRYyNVh4qNPZHHatB61pSzhc22qCzaZ57W69ZJFrL7teBP3zQGoBeM",
  "key21": "ssWusK3ASr1nbjjNViMS6zDpHqZMZwhZML58cdrMh5ktyH5eLA9ESGkrBzr16cXTbijePrcvgVkE3gYd2wXT7hc",
  "key22": "4xMCu5j9gRKHqeYWiDRPaag2LNAegB8phV7jKTgLChe5uJXuhsS9BzooKiCkSiSQQLztZiGdpr4rEhqhqdvQ8QKN",
  "key23": "3r9EwdfnPs1AwekgQzLoRjyt2KU8M9Jj8KNbLwLGvpEfjv3gSyFf5Bgpqo3tgLYQh4r2XPESs8q3XpKmtoZiNNyf",
  "key24": "4WqMawnetpPMbcbsxKoV7QWKqSpVUY1Ledb8LzaGfuKctzRMeonm4m2bBNVr8k945e6sxNVsLC7UsAZbh3AbYxYx"
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
