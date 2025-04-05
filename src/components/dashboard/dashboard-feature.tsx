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
    "5FdQbubHdnTQeGu7J9gCZRjc3A7zBmiyoPPc1bCZzg3gyr2WQijYNPf4duNgb87uVU86P9cxwPQRcpARccZk3VXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5reUai4vxFszVLN759Hz3KNRsfvYv92JvHBF2ixP3hsLt7KozcmfT7cWjR9qV8HHgB9rZEWs58AUyrZ98Vh12CMu",
  "key1": "53p4vn3fqCNat2pUNC129Lo5W57UmGQjTaVHVVKRo4SPkgsAmBDWQJLhGavUMGTw4NwWzuhDmbXgGqjj9Y5HDQUv",
  "key2": "5RzAnKxdwh3QiduCurwiYQMUHuk91nHEk8uKa87wCeNuMUQLJjhPXyGSTwvwu6XLaCZ3LJJ1s1nGm4M4hmqh6Pbz",
  "key3": "4sUzeNWLmRWk3L8vVCVubXMHPbwLQGqLp1i2Kw4sTJQe5RDMcdjipLqUgHDYcCZWTCvGYwQYkADrE5QQvcaesmvr",
  "key4": "tBFuz1NsPE4yGKKEisV19eNkSMwanHTN4f6ACxyjynaaYASS1N6ptmdj2edVg75Fng1M1iEKGffvwbkFLhW3iS3",
  "key5": "5t3nskFW2KPMP5Hgqmh7UV5psBuBbetDFREJ8Nrt4gCxQnf8k3ZDhKDGp6hFT6XbXaeEtmqS6kqgQWphUnx8U6m2",
  "key6": "2nKF35dK5mJqZdKYKSubkoMz5dKSfr325LE2qKneQbsRTVye7x1sLkraPzW86nnEPrCNrMuBm3oCVVQUC9cP597C",
  "key7": "5JE8UsLivHLDoxpduD27G4u9fcCujd1bCuMycGLV1kHfXp9DhFDRiXkscvDkuY342QawecC8tSv9x1t6tUcqDoTf",
  "key8": "2qbwY9nrtgtpaqXhHjaBzo7w8EbkCcuajwTD6RZELR3GLZHcyi2uXwEZvQPkydeBgFnewDuPLH5fegtpHrmyxGJ",
  "key9": "62Hbxv64XYZqcS61LNqh3rmUH8yWmTkgBxkJBtS4LqkwTgGSWWkxfzLQDETg9a6ETsKLGceqxht5auTuD2F9tCxM",
  "key10": "3ZUrWM6Uxrh6bNRP6ueky8eWUUhAgLYd9kmF92UKi5pfyigkgAtSHDCxUbGrJbRqDyijRNw33y9eWh6Ny4X5fgLr",
  "key11": "2NpU3ftJ6NQ7fLfy82LsnGmNA96xKoy3ggvugyqY5jn8QxBf4cSrFtmaac1jfuYA5igctArLXQcLBHzCy4BTcX5j",
  "key12": "2ABL6wsHMemSbnHSAWaWU4MEyRP273VDPkqKd5TrG16k5X68So7KcKpGKGxyvGMgweNsYJPWHziEppJdhsPVHey6",
  "key13": "4YAZeodFXLAJB36NKLRyneBjU6k5YjQ9Hnff6Y6s81K7G32TX6S41ydspsg61ixf6vxmkq5gLrxsm1P5CDUQxL5n",
  "key14": "2wyNRmhKZEAwKPg3BkTmZeGfNpZRfajQgcWYrJs9RxEeDeeTxGEEJnQKUpEn5oxydV6FjAxBpCqfma3Lhr6oxXs5",
  "key15": "3wKoGG3HR5k3xbU6b3k8JjFEGaPDvJo3XeUvV8um5jBHxfsyy88bqzq2Pt3uCai4yAN7UaqCntuSRoaTzJ5Cr5vW",
  "key16": "23yZZbM8ZzixwgAM8NEF5q4iWtkfPBidd7gfeqpzCymF7RtwBaqA8tRZzcan2T7HdYsqP71Rgso1s4AUD8Cx2kAa",
  "key17": "37oQqcq8NUJbVYWfraNi6swozStJJBDR7nqe5hKg7zRJYgnTQgqmxDTGae9UXFRx8JuRMw1xZuVws5nY9HSnv8X2",
  "key18": "37MkqVW2RyVRFgBhRHnBkovfy7FqRQDjs2ZBTE5GqGrveMMm4PEtpV3zUAw3QAt52RQCV56x8jRq9bQ9XsZpkLKo",
  "key19": "2K49cKcESTQ7fzYSxZR1aQWWAWKYkehXmEgJMnyi8Vo4CHLDkzSY7gTMFNdBs8HgQRKPUJs7qA4srHp79ZQ1jNJa",
  "key20": "4kP1V8ipbPA69Qd4xshusdhYfu5bdXdijkViifdcH1p272r6Wh6XHoGK4e6a1zAgEwD7a4G1HKV85qfmpvScr9jx",
  "key21": "55zKaS1hzgcScr1pB9UMDVWmPjPcoS5Y2jN6uDDZA2hJRpe9gSpV89xB8DtbCC3uokm8pgXSM2oiizPUofP36ZqM",
  "key22": "3XNrkKe6gjjLk9pzZbW8Nes81c4CWRekB8kv6ZRJv94Uhn8hpLyaeZNQrU3SQnRPocejZzzHtf1m4Ywe1ePnKTRS",
  "key23": "dKDp8Zy2uDMZCpvJjcFd89QamNu86uySkwerZ9FMheQHEmdmiq753TvmkPBM5RCcP5zGpFC6MkL1i4AauYKzmjE",
  "key24": "LESVBufGSDmfHzfw7tDnGZt1BMQ6tWQuHkAeWaCwwbWdMRGvPxbMKN7pPJXSvdBdt1e1i7BtqLsF9KN4MD2bXyc",
  "key25": "c5w9iHHC1Q88FQk9FkoV8qa5RY32QpVG57zAbfXMZrLsVxWM2MHRLU46VfP699X3bg5AEw8PgJnAtJHN2GdR5k3",
  "key26": "41UKAFFenhoyRMPn6nMimLmWdXFgZmF17THPBcPhLNZPeoJ3xDGXQ3MQ1Wh66xvmzsbzE3HNSPJJzqrXF51aLEct",
  "key27": "4q2RuffHDrg2QkoWBEegYzUsbdBdtp93a8kkwqqGze1K5NsAEPjfmYgdyX5SNSju2KT464zBEVGZW84GMZpa755q",
  "key28": "hSVG1fsfd1SJBRvEDwHDB5zVLJWtvmQKUKbUUoGywN4KFaHMa8fEZmo6KsbjW1Vz7SnjHuDFwUfkCGjTKNxfxcV",
  "key29": "37pauV88Wfzv5rr2gHRSbnGzTBhig6o299fo2HNCtvovaS7JM7kZMxy2UQgMBvF5CyepXBPmmfXyYZacDKrDjhmX",
  "key30": "3YtkeD5zbKDbfEd2aLE94hwbL2NiPq6z73ihFErs26nUkwm5NSvMiBevPa7nxUfdZmZqTWmsvXW63xgCeduK7oa4",
  "key31": "3YHbfFHZDgbADZycvQJeWPhg1qU6rwGMQsHGuNFg5sxUs9DGvBghjysy6jotRXDyvmFvQDaVzXXUDMAFMSLyhVsF",
  "key32": "5oNZU25cPQfy1u22tBj3Mq5yc3NPQy4DQWkuHimDwDSw6Fd5b3s54cxbEWABYpYXMDE7fjMDM1WbA17jn8fJ4RGG",
  "key33": "5TNm8EJas7dvgim6irqmjpq52ixKRsac98vNfDYgtA5dubDh1aCJMdbn8X6bMm9D3i84gBKXJxoaURkEYbHwDNTa",
  "key34": "3ykyyRvqKxzja6C37HD4AaV25ZDeidXAywE7Bhn4o4hyMy3MCzgTjNCrE5HhQ8rSUAdr18coPHZKc4LXPDEqz5tw",
  "key35": "57LB56edQ5bNwjDrtGo6h714Q7i5teSVBzDXfH5ZkZRaZyGu8Xcf8MyELySHnjWterbLCmgx8bvWXkSave4xpKQQ",
  "key36": "3j8QptguW9WbfSCNTBMhDgzeK5Wqz6TGaS85ZAs3djtzSkHUyCGhyxmjfDrgbCcFUztTULKx6yALd5WHS8vrYwcz",
  "key37": "3yR8V2PG4xKzmLkQ5vAqTXuR2DBwRmmg71P6t4DDVczth6atqYNb4phPTmJqNu79k7eayc1QM4UJf83XHw6dGtdF",
  "key38": "3VYhZLiPdc29Wyd9j2Em3mZm8izEQrMBJ1umHR7t3dMgvTrtMst7BLR7LQWCBsHk2H1TV7UwK5CTMf1YRGdWHqVc",
  "key39": "3wLt8WzWa2fRY1ThdP5HBtCedZb7WVwHXcxJ6z75tU9RqVDJru19K63x9PYETsahV4iDtQQZ9DhyPWyFPfsVvAGc",
  "key40": "2JSa5CXyRuUgHqdDTj3y1L42F4V4dPakeBYTP2KN27HCLTQgxYTMNjsuXG82wfchhhaXGEQLzN9etAshMqLqo4FA",
  "key41": "2z1PQUjn4gJUbMERmdqDkxL4eqcrWUeQsj2bVMeHreWvnGaMUAjhHfGYtexwgkw3H1JJGtk7gZ9PC8AAQDbHoceo"
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
