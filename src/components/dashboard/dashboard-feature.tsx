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
    "3FgepqGdhY1mmG6LEk4mNcKyRtTQwJizjRj9fg1uGCPBtKE9UFtbHuMQ1UvwU1xqcxW4Q6B64tSF9fC7ktKuMTGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVXrYH3fJ8BYryhz7EYhsqykSje3B35yFmKD8ww3NhQq8fVyCbZ7p3RKQaXMrYmQRohqgmZ5UHjbyiRjFGer8MP",
  "key1": "2nhgm9hfEkCnYAnCY91KVJpLXJdmUDhTvzmKj2KgTmU59Z37oQU5Yrw4C3m4EGU3pQkxUwo7pHhiwhiKkJPZMV7u",
  "key2": "4wCUetheHpmjwCUhMfKscv3Jt7KVSQCgKU6YwPtJZPHstetDQqgDJx3euL5rgfCt5NzVSpvNAbezL4mAG7Bg8svb",
  "key3": "4LEHQrShtjTzsX74ektSEMtxsUJVF7Soz8TcLzdZKC6H3rCVeXQpwLZFigAqG5aB6h6itebkpWpMPJ2CT3bvCTHQ",
  "key4": "4zTmVR5hd5NeutGaWusciX7xcpsCYArUPDByzTKkxJmiTiPZrB9BxRSpExUU1SFyMUDfYZbYyViw2gTzctittsSA",
  "key5": "5m3Sw43MG16peD7tQBnqvJfMFnLzCCVKvx3r6po45Zp9dMe1uGRNbpwAEvWDTLFeYzWZLwpgC163f9ivrLHp67p2",
  "key6": "4dJHaBrkCcNn8c7qVorSrRrNdpm47nyd2Z5eXF6qh1qySpFf9GtMfEuSGzSy9uaPbn7mkD4iwLZATC6xEgQk7crB",
  "key7": "2FKoeiB7Ne6Ywc9dFTnwUKDBC5vb8TtVRQoSSpdCgtzf9rt2UeKDKyRxfsfuwFMf61HLETRcHYF9EPFA8FypUQs6",
  "key8": "3ucf5Uie83PFsASYawJ4KtoA7b43hCGw6vcR2d62mR96iCGc5a9o5ZusC2jwL9ZzeAStje6Mc2eKM1om7TUzzdAX",
  "key9": "gYbHkuxBVajfSsFKW7GApMYExuzbcRGvd5uLHmeAUPvkPjVbgGBGBc5xTuFMdeQaGkQd7CpDi6xBb31RKonGFBa",
  "key10": "53KyhkLAHtYK5KGWYQH6eH5d9EcjaucuBHN3Vj3oFbz6M4wWZM3T5d8tPKtQvnaLyizWmijcWEnsbcf4WFuAMpXG",
  "key11": "2MRTTjuPpa8ZmmdNiRfeeCJJg3Ls5zkiBtQ2FfnbxEF8Pz2kaYwcEJGjqX5Xms8K4dejJJi6vprhPmwLsYkyXRvB",
  "key12": "3uo4Qjnwy9diVbQc6ApfXNMP6zL1C4NVKfzvSVJE2euojyMjUpWpYBHT9opD5JJFYGUg2xTNq56584dxpWCfhgKp",
  "key13": "2unaEqqYfvBLFCrYSjHpFgQEC9ixRJTaFRU493wDJA6KrtxnJysraNHr8EbxGfaAR9THe1HW61ViQdXhepbg96kN",
  "key14": "3VMRkdjoeVtW7teuFm9r5xzwBBSqtRXvNA26cKgTMQ2Pdk94orj3gejWAdyuV6cQrvqxtyKcMDadH3HnczcSzwQD",
  "key15": "4cQKbodHf8K2PWWjW9VoKXb9fDtujVsa7uBPFLmMtfNHonB3ASuVAZ4Td8KP1iuuyBj51U58CsmCNVSWHxLD5Jwp",
  "key16": "3xQCffsMaRDWEWp4RsxJso2yJVSCdc5BXUXxE4hjBLtjW6hfsDTzKuHEjRxeUiYf5tBazREDo7qXCB4oBF9kqf5G",
  "key17": "3z7iw44NrfZ3mtGBqYB9dJDeuSncrcRy9E8xahmqKT8rcv58QdZm7RFKx24YGLMB8e2oPF6HGW3rx3wUNqevUwGx",
  "key18": "mSEki5JzMqdKdPFk6v51RaEYTu9eXSrDmR6wQtqKRnZe9vGYrdD82uVhFJYUj6gXqrZdJHdq17RR2bF6ruYWFjK",
  "key19": "2D7mnmmPoPDXfC2j4ManABVYCByWqPed3uVDEBGUTq3BSnWe5dEokCeGNLuwRsYZMVaNMxJXhxkLxga5HWsBRZnY",
  "key20": "3JkvsL7g66orycnnLoqY4VbpdBrXmvZ1aC8uaYgCvtfKWEFQzbxL5ErgZ6ujobzY3eQCMkhnCTrWaT5gHGRXKXax",
  "key21": "2wbM25VcN8sQYGFL5F2xXvb9Upk5PPqX9zfSEcMRzRzCFsQrKPA4us2DoGH5CGSj4VZBY4tb9uJkTVdUfKm87XZW",
  "key22": "TJKAkPHRWTwyDeiqejgqYLiBfupzTibdxt3YbpvS2u6wGpY4E4tbjgXE5hghCZzgEMuaWZJZ7RAi6RhwpSRhYeL",
  "key23": "4L6QgcGVSDHPZZAqw7DKDZpyHRZw5hqi6HX4AChR7vZXXRiZhMUDhHFMBfMt2wRypr9NqXEs7rAJYYDYcH5JExS3",
  "key24": "iAxCGswrUhL8qvPiequ2gxmDqN4rS4n7JN8Kqo9Cz9BWwwZewMdD13Ren5sj4g4SnibwhgJWJeCWYeWszwuDxgy"
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
