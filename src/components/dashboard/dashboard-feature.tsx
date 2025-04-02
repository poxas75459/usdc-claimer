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
    "2NGw24zHZT1cztQKpZEqNgMxJfkGvknSLUdufaeoQetS7EVprMixzKU9Ghy82kbtM4VeJDRkLAAaeYpYEx2uJ7q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61B31UF8RP2finwVJDLqg7BXA9QGs12qLkMnTfzaqAkEFqijYAzCvvVXsDpnz6bQUmDwwsC2t6Z2o579nVF4HXpU",
  "key1": "3BV5o1YD2FRLDWjpVhh1xzTMboVyTt2zj7xhkfZTkeQZDYVBPa7fYUPtrRvBztvoiAjAkxgAaJzo62yCUVrXQRjp",
  "key2": "3vGpviVJugDG1tK8sqB7AT4YWZ1cNqvSnXh1K9rZULhKMCL8SX4N4e3Z1q5qq5KsUvVBt4CCmF22Qkh59y8eYPpr",
  "key3": "2pJkBuW3bmetvnPGyB4UzpoarXmNnb4881XUkmUifPKj6asFvuR814XmYKLepn5Ym8cqvk2pUdTa7cRLiosm1bpt",
  "key4": "oQXH78wu9jcW6oT9pPeDwKzMwazsriTHg4UzyB7Pem4S3zdNreTfcSDHTAVhM83xQiJJp11hACC8xWHHRkCQkzg",
  "key5": "5Qv6VHPHVKg4QTVdgx3yRJK5aSUochC5PiFsyLaioBYubA5xCedR1PDHPNg7yd3SyDqhzuDnzKSzRDkuGZYMp287",
  "key6": "5Q9MVywqa21dT2ciW74d18XAEhvmPEsEBNEu5eqJzn3B3AETuJ3WkjZcVyGXy9fQ9AF6reBTvNiTaDGvUDapnwHh",
  "key7": "5WPBMuhpXzfQ3QR74DyaNf7H635RvRxoTWvyBzdFH3m2HekyCyYZ6L8US2RtrXenjG7EYC8dH186Bp8Maoc3VyEg",
  "key8": "LNjnPZEEBmjb8V5EQ8HeE1XSxXzwXSmCiDVMncGrS7ePqfPB3XXhPdLQy1mVtW4N7diveDPd4j4GMVcivMBGKEc",
  "key9": "4uqyzvUjXQZ2tjZQ6DkBkVWtMcnGRkWfw6o6XLwFF24d2N1N5ZdBpfDZsQg8DzUSX2b5wKWpBJiatmJTbkqKEU9Y",
  "key10": "KvWZPenzXMKct6c4awz76zUFWzyme35jpSwuntRDpNKyh6HeYJoj28ByyQsJhjAxV52TSXWxs2remTBhBEnjvAt",
  "key11": "5Sv1L9xbW7oUAANDT4o3Yzi7CjnL9Sj9rHdye14ivPbXTLVCyFmVtoQyFa1tFdtRoZBNw9oPA9CeXH4UZxZBxv8w",
  "key12": "4dU3QURV5AwVLS3APHU4aJiT5nyMZ5ph1cCeecSwyw66dMKKSFAfyKH7gMMQ4T1gkEEkfLHUiLDW54ZPb1AC4v15",
  "key13": "3dk99c1ZVj3YZR8G539dLhiQPnpgu6MNRqs1AqD2jRx9LJunB3KE5ocFhXbt5Z7W3sMiXezDhMRRNJkk7SsKiv3j",
  "key14": "pYNrgddfW5qLdbqxag391THunGEaHxBanKhSFXusk2z21xEB6LBGwg7DsYYkpFLNaE8W18xGFbNtEj3xWp5MSKz",
  "key15": "2mD9Bhiok9MTwKPcavtsAEBvFJhid4HKaC5nFaVuZTosp8EBDSE8odW1rhh6KVn2iqorEL2ckhxRyVnbBCrngxWx",
  "key16": "2R9emAffdZhsMy5F3azCvsoPWEGnuot9wz3nmRLwetQnZ9nkVM8zuZHsGrurgA4uMXvChtQfoB45L4ihZHhyfymh",
  "key17": "5ZCWBBmma9yNW1iX2EsAsXEmQmAMrBi4QQf3did7Gg6K1nK1s7yv5NC6JcesjzZyVnwijnobWBY6AmCp1PJQu9xz",
  "key18": "4yMr9XyEvP2GAncTcxxYBDk6moqBRwRSqFe6nKixqTsNXHYBAZGZXvaGGq8camHgo5kvb4D148TTmVRPKH8wWaZB",
  "key19": "2ZvULNujJMi4TEXyf8HcRxPvmhmH9u18uFNxULh7gpkqKz15xSLMeqCz1wVPBzCSUmGv92Qwdsk3f33wtwFFMVWH",
  "key20": "4EGvBj98YqoXsaphxJ2CePdevdZUcz7wzU7whSyGiNTbaZN5wzTn4wE2A4FPp2UGeaySdjomBSbbgKDCGDyfBg7W",
  "key21": "5Q5uRhnaoe7C8oQQMosQK4Art7QZGwy33tEWBAbQ796zz4TGbRDtFEULiH8FrW2DAUKHmfdF2uBrG13fJR2BjUda",
  "key22": "45yeTkAfbRDzzdXiEjAB8taRmzeApQJ2f8RGRR9RcLeSrzycLMnbg4KyD2o2fFhAFUUaPcx8dhFqf1EvqyKWj7DC",
  "key23": "4UyyF28xYfNyktJAMWhWVp7AT1QEUYUEwmF8eqiXCAtTyZQo1i4LDmx1GNWMe8i2TBiHwLSkjAw7y3QkQ31f5EA4",
  "key24": "3UpqS61Vw2uUpy8zoJf3SZEND7YccW9rUExSve1fE3eTVHvPf9H5B5fbr6ccMUbPp9EnqgnXpJiBZPSRgjADzWCU"
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
