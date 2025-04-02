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
    "2RhNdWv6EN986KiwbBDBDX1LcNWjFLcMx7nNfkr987zFSu9rP7TnwBmHVpAkcZassEr7NpLxeaywGsae8qw8PMAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S8bKf8wSsaVponDSVXFibTHgwXYRDHAMqoF4GCa41BS9wXp9fzYQKgafbsxvZxSSSituoSvJ5otsGaMwP7nWjjv",
  "key1": "4YheVq9VospHagCQfoRWywoLnejZ2MgaysPj5kZdtk1zW5Ct9nRgREDuqgi3pJoizkgV4cx2zrdxd8i7sSjq7Kng",
  "key2": "4kEURxAsoBRaHRxQmZMQgsiTn8AAwbtR7FHXt69EAZkkP3tfGthoGy4RXM4WUto5Vncq1aYua7mmEx6FUwdk3DBC",
  "key3": "4GP5o7FRqRjj3FSfNDvtaQyMsQXgctFx7vx3NAJtXvt3fHoZqk7cks7RZod3g2kHsUBzhftoL8Cit7kt91WFV4ug",
  "key4": "5t83Zi2uv74u74mfMQBEjgtfJWxzMCSNYTNdVUb6V66EHRRdRVGcQ3DmWjQqbocxyg5RRHHpnX2UFMTCENT9Ttwx",
  "key5": "5uTFxuVjdEzmZYzux2ezWZA1yyNKZSV3PBpMzfbUHLAs5QMyj7mpoPXhpGYgc2T32T3QoCwQVVqPu4LgojX38CPe",
  "key6": "fLsVQNYnkZXSC3qJvyMDmfQ21TRn6amf9MaguUsSyvyZX6rBPmrpstUjezT9sBaQUXA15T6YscASr5hLy2sdaVH",
  "key7": "4aRCa5qLYgKLF2drrHwZ41ij9JP5Zc2GkK1dXmHgpVvaVWiAx1H8EcYM6KusvHrT8B5oYPvCHv6HDHpzygwCbje8",
  "key8": "2jgAvGQsK1vAtTUTuRNFonybaxW5WEQFWKhxGL8PpSj2pgsaGasgnMGYEbMmJ4druLwm3cpi6HRSv416xG29pxk6",
  "key9": "5RkS3ifEjykHLRvyE85yfhHR8FaT6TRCeGTjBBgHvJhjb1rpFG9L9UUtvePB2HeyY2JadM9MTH2WpoV4RTHTCNFh",
  "key10": "2g2EFZ3xNeNNxbz3ykaDNWXEPtgC9eQEdZxVCtUKDFs3pY5JXiRX3wQEGQuUuBy7hiyHXWPbCqR61Syo8ZZMmzCH",
  "key11": "3ww7W4bkv2haCydzpyShrqWUtxqx9DE2idqa3hu3TQh49sYSj4borRqHAmEz7ReA2Ed3NBfxp4QbcGraKgvHdAFF",
  "key12": "4zzFDusP8rPNeVN8xAWkeNiT2mBKLvF8N6WWBSb3iriz4E3sDxpS7ZKAYJttACtZHWuSfkKmuBuXf8rjS6v2sLzN",
  "key13": "4vPnYNUQvagRHfiYXcctfXg3TdXGkuh6Www8Cd6JhmQJ8B4WuHnEqSmSdHoJ2fK3sqDw5eSTqA9qD9S7urFRQQvn",
  "key14": "2ZnQyzLDEoEJfgzWvUaUFfg89mgoZ2tT4FEuuPWnwPvE7rLq5SAFWEU7oqrAGEyYmMn7fAPjNMTW9h9K7N7BwXtc",
  "key15": "hTAZXogd9HgdfoCWGceGG7ER43an9GFMfGTHNwVgNZN4wNaTBt3ad9djVDZNfR2gSWVf7sXhZG5vbEdRQ2Hg2S8",
  "key16": "42jydYBgDzGQuyo3jRudN9LMyFJNXhCWt8tEAWnmv3aQzu1AYhgYrgQzHN82xYcL73LzJZmHhPKRP6q4mFFUAFQt",
  "key17": "3wZqrSBALXK55Bukrps4EeA8nGCHpSs5EDbzJKq6Z1oEoXyjSE5e2M1puw6CiC5yewwr6TQQwD6WtiFwt3VWTMKR",
  "key18": "2s7JNLRx6ko5hiba7c4sc7xoSjJEX8MBv7a1HXxc3oNdc5YuN2wyRwTsavxdd44uJAoDFviBiB8R9LKek8n8nYtt",
  "key19": "2NKDYaFotyeYYnzW7EGPdczV3wpZ123TbsXFrGzzFMVnZ8RFV52qwKtTXQ9jUmiU5RVH2jDKrVL1tcSYzg5Ltkq4",
  "key20": "3RFyUwqGh17vtJ1b5pcfN6UumYtprLcBGmmPjYZ6NE7438kwNMHCGXUGEsvWrLdeEcVBJS8yS4SmavK9PbNA3QFR",
  "key21": "3Rt5y3RbAEkoePUicP82jF4mYCmBzs9ybyC5YNVK2LhnGvtrqefVWdQ8aphbYDfUJp2QfNfyGo8gCdxepT6NA8uA",
  "key22": "5VMyDHBFWiTxvjw1qp19Ddeivy82GxXxXkdnShz1Ysv6tHP7YW7j7WdfDaCjEg389bk3o2wxzYkUvYHB9LGnv6Rz",
  "key23": "3HaBbBJzNZx8AvZJ2XX8oBfioDdXbijoyxEWxkHefuNNcfq6jMgtHXEt9wRZso5wWahbRxdjRYwSwoMQRXBQK6s2",
  "key24": "2ubdK1snthri6PdordxLKM8YW65s42vr22gp2kcUhuNyNV5c6hRx4GRqsFZyJxsPo8rRjozUf4TUyoyeJmau6wGN",
  "key25": "4txufY1wtggdvKURLvw8osVAgnB6N3vN928533GFfq6oZ5d2mfGGvCiP6SXMaB6dMuqxoS8gqDxfDu5bBwKdcWHV",
  "key26": "4XbfV1nD3BP97zau2cdv6TRo1DPWJAMjFvgc24tZ4uS2LqwgRrjgJmHaMc9AdHigGdaq3i7pPv8Cz66BJMhEYoiw",
  "key27": "LSGZE3UfKa9cv2EaKNYfbrtJiE3Ra7BjVRFKXBHd97bFL5m5YjeWcDecrpqCzL8nvXe1mTKj5BJRnVyR9N4sniF",
  "key28": "3FbtLpsuUTJV12wb9bDy8GQkZRJyvnfXr83RmhfeaNKRYD7Y1Ee5JfbJi6a8LKkbF19Vdz7vA6ghqy4ewRWExw7P",
  "key29": "3UrGWLSeFkT1qyw5P9x9tXGn7k6k5tYwFfqcgCmsX6wfMLhPnzcuWo9DJFJ1NbLiFXu785MB2DCFXNE8YppHzW3q",
  "key30": "3EWn93DxztFpbf4yPpbrwzKV1Azxatnujf9jNu9BxkNbmbv47rkLX6fRxydie3crGGF1FVDW1VHRQUBGkMubAvan",
  "key31": "KS6yuUiVN3Tcx632JfR8Q1imP9jZxwFFt6r1ZxA7Zck2Ta5ZVaAYQEkVmV3831TdYbxudYk69UmThGwR2HqwSPS",
  "key32": "22HqgQaWwTcJeQSDg2FmKwuxnoyia4Afgp8Lx12Ws5urXtz9QnKHBE2WRfuau4S4ZVd9KGLDnYGpyf6dTpsrhDSK",
  "key33": "3Z42ADBkwN42d4rc6jgpABAssTkcsyiUgA9yPe9SqiPwUYYjpx2YCqDUMzWXJvmpZKtaojkf3HqijxpMSPvic6SB",
  "key34": "56WGyFqJPmSwsgejL92xrQQpFBGwoYrrxEmYrWpQHSuRTTvMkLGAybs5NNHjUh9b7EfLxJPQYu1poxbUGdP43ZqF",
  "key35": "5RK56G5LpwNGrrEBvfskC3b2nRnoiV5tFQ9Rfjs7Tg8bbbmJGvFfqcRphsxQcR6SAzaruTqkDNR1XAgMRfhH54dx",
  "key36": "3eRLDFu3VKCycVwvs7pU8hd6EAg4K3EnzucCdubgp1gmtnHmwnCcfBaoZWk6uATtw54oDte6im9v5t5SAVBPEhWa",
  "key37": "4nJQXfzRU2gcy3Unzam4WVFwyaGJdcdR5ofxXxUzspDjL97qHtetaQ1gZHEEh9sajEZbEg5CwRrtdXZsJh1TXZ8R",
  "key38": "LFN4J4pJYMz5AabKf2uXpmdAuqbTBrzGjsSbk3hd3uDXjrCm5qgR8bwSxs2FdLsoh6SArPxFkN5xFzpwhSWnWnd",
  "key39": "2XUFTbME24T5TceimmHWzKMT3QRGMAhqt4A74z5jRq69nGbLgyjfUc47sUhsckZWx9i271eMXszKYdGky5Yw67Ue",
  "key40": "21hrryGPxgTWKNdj9mig1DXFixSEGEU2fw8yrhDvXHse8v96vLzXGXciaVUQweGPj7cfr9L9fWXdi8MEuYeNcwuS",
  "key41": "2CEPEzv5yJoQQcMszXUuSBKjMFqBanFyBSFVmRR1HM2tnbwpncfqN9t2mkM8FhbWY5X6A9WYWrVJT4Mb8nFzsmH9",
  "key42": "49CGSYjZiJ9AKFcP33ZMxDb3ABbtyAX99e7ZAjbusNzhBteKRshUELk7noyPUabZk1tKHQMPGe2MGH8AdzT6iroz",
  "key43": "3p3Ya28FFAHihw4iEe5T9UCLKZCvFphkXCTVUMVKm7eZ98nT9ZbFnbHxsfVnKFoJwN1LKfzT4sMDoVjGLBydcyJM"
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
