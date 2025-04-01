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
    "3KvnVsmXLnTEAkchR46f1ykwq5Qp7iNiJNvKmPGdatTqXKdS9NxkLiA2i1mfWp7ThpL3T3JEsfhAoBVb7WmdR16p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2oyCwZ7CivNPsfAXvrtnu2quLVH9mmyraq7pYdzZFmiyLS8g5Q3Sdq5hMsEZ6HsQAxvaWmZJajnDrRLNT2pU5j",
  "key1": "59KNrN3cbpPhv7NjjrYRvd5U4ZKWLxCzZWAMbWm5Wamh5DYVFKaCByoA5ZMM3sK4ynU8vDCgjQTJMivKeiAkosUP",
  "key2": "HRsGBzdCdjgi48fKqJB28kUzqmn5uU9xrV1deLa121bC6ATb7gMw3spfS62yj1PNeBVjcwbDMhN43LJbvpKesFq",
  "key3": "5Qmyv121yyWdW6Z1pSQtwDrUGZNmDr37KV79qeMxDQXyLPJn2V1mfstf1gL66AG65S82LWW9H1F2Jaa7A38q5JTx",
  "key4": "2SfTWvZpr77C8KGp4h8LxbSQ7LnTgTBeEfGCScHF7JtqJodWf8MDUgNVbkiccGYfPEWza5uhVfeXJscuAdftjaJz",
  "key5": "35LAWAja2QuRgoXyQw9HJL1D9PTJ3Lk27kMT8taBMfa8jvteHpcNszosYDd3uyv9ykeATz8MQtB2cVS1q6S27jCf",
  "key6": "pGx92TCDEEnfePdniCNQa1qgwjbHVQMx2VR9ksFpNgyQ8SyjWMXntYEH7Ui4E6ZvEVSMnKVeZDA47Y3wPcV8Rsx",
  "key7": "4cK36rrmSqrpmBUKHTdn3yunrP6JrWFhDFBo7WoAg5HuNvDNEvWVYfYkp3DrVRix1cFREr3zshoKWtRiTcm1dMfk",
  "key8": "3Q8s3p2AjtxAhjntUo4r2vKtTGhqJ4EV4gjGarGY3EaKj8tWK5QPECKjy5mHsRjh34KvhhCuEEBH7J3imBpnvtKg",
  "key9": "xqShzirc6U6JAevpAdA9qHVF7uX1e1JNSUEvopVWsufok5gE6mBh5sTGUX3t7fpzUHNaGDrQeb6RBNjBVaKkb2W",
  "key10": "4v5jZyAc3gnaPA8GEszCHymjz1B5eFn3cHmsTpoKKBha9eq6qKMVBGoqJq5ZCKrd1a8JgNWiJzdUw7Xveua5CRtU",
  "key11": "2sfYr4z7m47fryhU4kdNXiZ9SUzCU5gdqFBENqWwzrbbLJv29sUkGR2Xajpw497m43NfxDeqY75AdBUtuRQPH9qp",
  "key12": "2TZJZK9wPf4F1bBo6rsCJR676U9N4Ngd34d5peq6W76bRv98AkmjtTc5L5yzkSW3pPEUD8yPooPi7So7XQSAtuRd",
  "key13": "5r4ywcXYDyhcwTs1dig1oxScgK2Nxr3JbCzY475rhbzGVydm6bZyG9KYuuawxFzFLHdaaufBtEVUf54hmsbjVaZm",
  "key14": "4THFCCvCaRzRb9xFjPBgG46RpphMVHy75EdDF3KvYEPwwN1RsUEnR7neXf8CzXpSQRMDowmD5pmEmS9HPFiDe2jy",
  "key15": "Fp9vEVpDDobgn5MWkqmmMs7bTsEik6FgiwUuarJDBeDeSWmzA7sxqtGrEVtBSpLzCjcXENeZAMYrxjvDXz9URVL",
  "key16": "26PKFJhef3z81zkEsygjXYXSQp7Z7MZVkkqD93R9YEHS2ccNSfB98kpyzTsTDSnQGwd8Sm2iVpdkJqBqEdxK3tHp",
  "key17": "3BQYwQfPBHmfpGws6hCJv6ECWZ4oZ7No5H9YGGkkSHjZD6JrRBoLbtLhdHCgty675DQwGBh68ioBN4T6bY6Mkru4",
  "key18": "22fAT7dpXfVHTrRYa2kjsTET6zsRBUcCBPjLdGMiVPgibR7WUDHkxe7XbJnnQxSKDyW4wfE9v8hdzL6xGHQKrnQw",
  "key19": "5ZpA6Y7CvuqRcEfYSoMAgEZkVCvAut33NRCpPSwWeo5S1ZcYE2dE7LUQru6KEkWAQRBoYh8D2b2ouJJwYcyZP4rF",
  "key20": "2isbdQzwme9keMGMN1Wm1i7B71KVs1eLiUjJxFzdp6DyCsUqC9nbY7cdQM2p5nfapK22VjxhTWZNWvvdhjZnZuhH",
  "key21": "5w6zRurUcDXfiEvt5TNqzinwbmyF1ngZ3WGss9BC4kazPuDEvh3NiBsiyz2cCfdfdrZVQEp4TaPW9USsp3Bvwz9H",
  "key22": "3jVwQin6iH7GYpdExUvXw6y3Fddn3aRWuKFaBUSVfcvQ7okGdjphWJcaPmY3tZ1r681r3QFd4PzVH5btBaKe7rMW",
  "key23": "2Zr73pMbcAfEtMEDcPNgD95a4MTgP5zG3ZTgAEA68R8kfoqAKbycLSymV4fybHYx45aVzRtPnUsZqYoWK9WfkYND",
  "key24": "5Q3z8MaJzqtrZziP2B9NGqDRkqcT5w9j1EhfaGLXTgXV2aJ2uQEVSTbvP2a4r7tfnMHvX5HHRF92CemE1oHBnDki",
  "key25": "tuC8dNorddb1jHwNr4n5Rd3X1F9yWD7pkiBG3Hycs5jLd5H6HELeVniFiV6spjStpgXQ8EbpHr9rt8qgWCFE2ez",
  "key26": "4Z35XVFv1cKYqE9rv3a1AYvzsWmJn55GyYPX3Gow4JxNGRfrDLz7GhPqZXGdQGCsEh1vQ5khRS94WivpesGTAzfZ",
  "key27": "41AzV9EcCekojEWjsduBD3CnhEWVjXUdJxE1k72577hKfp5SWKvAeRusP38ujBB9y21SpZMhwq1XQeNaDs7tkQ9r",
  "key28": "2cvHqf7pEHRDr21U87ESSLVjjcG9zAhfozbKW8NBobK8KJrLm8YZiKQoc4S4NWS8kT7n9XFmuzWbZd58JzxezyiB",
  "key29": "5nprB3ijTjwXstAdFkouvGudpjfHnwtVLr17Rs8dpcXKLKwy9TUysv9xtABDYQm43aPgFagXxeRpQZeActVP6T3A",
  "key30": "Hx3M3PU3tVGK4L2hpgcY9PKrio7u2H8unWiW83ZwijZNQ9Ud11sXuUwYjxiFm6uJVLMtzk86zEhDeZZg6PEKsXg",
  "key31": "5VhWynncv2ES7nsPsJcwYyYvz5URqLujbRHC3EKSSbfvVtrGYUohQT3fEFzeK8UZUmGo57ZweSwzwU2djubDSCZE",
  "key32": "5Se89cKtaRoYcbX9QsS9CkZsWEbPo4eeHcCPq5D2YijyesavNTz2WtbdKdGVkzX4tPMJdLYe69BMUVGnguchD5U7",
  "key33": "2xpeaEXrvtgBAbAngFF1gV5tpqe4j8kiTtzDvLx5P7yfkKHDKWn8hxM1BPpJ4a5YRYEXdTmeAocFF4vVAEgtD7vx",
  "key34": "2eGhLPnmMuRFu5JZ2rQV3Q9gA8USWjXAdiBKaLuq91XQRPnqAvEvKhM1AqjCNb3nWE5UAKyuB2Eg6MNgcR3uZBfs",
  "key35": "3S7niTuQJeB3FRjN394A3SXbxEfLcCAwe3819xoUHi79wPaY3d9BS7FxcJj9fz15feoogwkE2ep1yZybkhn6ofRM",
  "key36": "4uRKRK6ifrL45SxYebKatTMpK7yXdEMiZrdFRGuAjEgMLskbgtNkwrNHr9ad5F7WM7MB8HcRYo1PYiqcP2KMwVoN",
  "key37": "5GgR8uXxVYLSPvPto298RZuAPe1jWtedLDZN8MpLfQLHPQSvUj87xFCEKgY5iYUBu4jjqz8Ddj7u1sY7ZSEDBRiU",
  "key38": "5CudneAoLzNeX9UKucqJPyLjj6F6PJn11uhodtjpWJ7XAHZFxA3HJjpxcMNHGgYUnczE2wwLVZtzY7woD8U67QDV",
  "key39": "3wFYPBF1bGZVan2cwYfPnccQ5rgPQKStDem1kRLH9G4vLgELdFGUpTwcxsEqNiEaJfVYZKKzHBUC46ebdiVre7Vi",
  "key40": "32tFs8NcnEDPCBsAWv6bN2G2w4t9nSL9qBdXttHdAfDctqVdhUHg6VkLzRxYrbtRNgLwbiX3V7DkbbYA1poD814c",
  "key41": "5BxDQKk6p5YwQQSez5tjgfQVozyB7UQ4Vz9HqPLMEGgrrpbXvG48hP929Lzot6nvVTUFHSzU6NWor4wTreXiJ2XU",
  "key42": "49joQ1xkQWj9HyKZuMNbWReiZMwznGsbxxuRZZ2Y7htLFVC399EQfWYChdp98Js9Cv5gcqia1NoNMgF194prsJpJ",
  "key43": "qoaHhCBiKW5X8NrDUAowNz8hCt8S24mWa3npeW9kWHZiVCXCuZ2uH8ZxSqYbN4WML5pcZoRoGdsWfBZsGtKPd8D",
  "key44": "4ncGk17BrrWMwR2cQ9aAyPuimnEFvd5pvqwpNVmCtjPAHTWyucnjTRNgRqQBziWQ6kX84f5MYfvuvYwKZ1uJmoZR",
  "key45": "9Gtaw6b8KLPjdCEThoBpyPEkF3NEBqhnBSnh3JGbSr6sYUqNbPAHjxkzMoCqYsXuARvewXbg9zDXM2GVaJt4Av5",
  "key46": "551Pn9MdZdzAgjwesTFKMwbMmsiRp5XZuxA7PT7uy5ZxjGAXCA1f4K5HbrpKEXaT32Hm4FZDYU4fpkekDSdLrP7J",
  "key47": "5Ggmd8o6QpMPmsBVJDw63Dh9Gpray3AMfTdAP4ZfV1m5od8G2KxSNobgRwCRbgnnzbP2shiLQ9UhfZ6hagBWKMZF"
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
