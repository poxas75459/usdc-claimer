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
    "3reMFr6CAxUJf6dt1HXDxQ8pxMsdEPzqsv9PFAcSYGxQ58AzajKmAJqtPn425KnGZeiyRYEfRECEBkvXUnDSCpNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybBURVuh6R8KzQNLtfhfSXHHDufG2K6UQFvD7qoomcHSopSxC43aettmnbdzcEucnTRSLsKM2FjURWqonwwLfER",
  "key1": "QYL9sVjAAD2ZCRUKy71nMSQNTxFqP1yvJtg3igRELgG53ts4HskW8CFkhByaU2esJSSxYM5N27jT8BkJ231vs33",
  "key2": "MW6wn4aLJxYPFQ8i56UPJqwu5CdwanUnGoYcwiMT45mWnqFTk2RpWiYjmKKnQfgtpP5SYfe5B8FgYiVBxLSaatf",
  "key3": "2DCQgsMZA1BvkaaQ5vRXNABK2NJiTVWqJcAeYkNrcWaCSP2JUBuG15bRjDDar5ULiaApsSvEFPWSLRWACdKAYAyX",
  "key4": "3yQNJGVfu8BKvzNGD2RH33fStJkfbMWxhMcGFYwFvBUMewi9bxSUViJaGxUvGEMVQZXnrtrND1FV123t2sh7tiWf",
  "key5": "43WHDtjz4buPJWNzNJMvGWTLsLrD6gP23SkCLa1ggtUHRe2Vsevi394LYkrDcR2z2ReQqmj4cc2hUHpJ3GUHcYWj",
  "key6": "3VbCPv7H3sUfBJxwVtWsSQ18kWkS2FSYuaR8ZW1pfACjJKX8zGESUfic9jEAjzRq1sKQgEbM2i7n2mhvDDDX1fo3",
  "key7": "3YPQqzufhxtGhGEadyaCfYnuNdUKwQdtZBF38tbDMs1wBpg4QAB6XYvqf51ELmaaqRhAGJeULFGL89fHnGN9GCUm",
  "key8": "5yqSFQSpysDUQETyo3GSEoSRZpfzkmQQVd4Xu5QkNCAJUzzpx9x2fRYzb98EFPQa8QvpCDY1ggfEyehMAjbSyvjp",
  "key9": "2ttRqvKLr3ahy9gxM8ammQKLyTCrvHycyXDTtQnuWJM5q14nPivwN98EWqiuth2vy4AzgcF9iX5BtETntKfACR4f",
  "key10": "ME1Nh6XtY4hEhiEeVkvXNYA5TmpN7WEryAKVWxZTcxJuSyoGRTC6y3UeHfQMzVPzNJ2LE4abCpdf3wNTGtXiUid",
  "key11": "4EdtgZ9Gy67WwsDfueHqL6D1i7d97DDGNKvge2nNZwBPA2DsBTRZUCJCG2xVfBPDsfzXjN1fGppidUjteRf8Fwh1",
  "key12": "5KrMWrgh7ehmH71u5uFmx8AgaHaFuk5LKZeQw2RsZwCwJtSxaT8Hk56G332ydKgouuBAuoVMpmtjVJquHYYDGKRj",
  "key13": "2pzRchHBYBdcdytZg6DeRKrcvV4JDtRpWjiahwiAWmvvBkgFXhfzSbRPsRFAgvBwH4dFnr7PVKyGgthBL8nVdg8j",
  "key14": "3k6265WLdvmKamQctbHv4n5vVFRiF6rGH7FDYsj4EBU6MzgDy49xJFi5rgqETg5UCtUaAr5VvZwkdStMRZdq5AC",
  "key15": "2n3RaCp3cvyCXfJhE9DLYik3EYz3n2GWxqFwhhy4sLNxYgsNReGoeXE2GbnAZqaZUSqFcYtspPnUPSiGcypcZfvt",
  "key16": "2waErfZbfaFysQZ24kah5yaWt5rYMkYc8m1yW66qVzpuRAjRmUroz9tmNvamNEwr7PbUZ5xCDKYY57HqBzMrcSQk",
  "key17": "4o8rtYzyeTsiB9JUa9tTbPuQEMzFSS6nFLXmRpJmEiDBTx51FBiFZiHMDaUjPS9mRuVQRLZxnu5jAEgMXgMF8Ua6",
  "key18": "4c62krPf5dxE1XeV1KwazhqQrEkcv8pTWWJBr6ah9ERqaw6Wy4Fc1U7LCuxGbTzjTdHErA2p9LCNGChXtzK99tw4",
  "key19": "53yPLFezseh4aq6xoXboU8UquHQNTzAHK9MVyiATT8p2frBt9zQFgVmcB93AgyJCHviLWvpX8CNQrbkLKYY38ut6",
  "key20": "2axUCzrMQSBhw3E7beNcdTKHPqMPM1ew9Ny1w26WN8NBZ8FxmLLxzgGtkmryedeycwg2AY4Zjfww8d8WzHerFFnD",
  "key21": "uAKgBS8fvzVMRA8a1YJ6FGsKeZFyV6WgAXKjBdkgRTAa7kWqqNgPuGg5cRrkz9wEPCPKRjo2wKbCYsq5nW3Umcr",
  "key22": "4LQFYNT4sDKpay6g2mU12ezeaHmuVAWS3fuoDpUwYgttm4GH3auVC9tDKFpXsBNT6VnDivMZXiwzsqYPLN1gTpGr",
  "key23": "4qfUFDa54jyUvErr3z6xBdTHMSsF71tain6q2uaAb6Ue2jGRWoaHZAGYJtYhuXPtnekZwcfmB3h5YHnoNvRsiSoh",
  "key24": "4mZEfCyuZkNBYhjciGb2nrekVYBb8WiG8kAtTsVxkivep4pSn81iQK3ujHz2ZPCpRKGNUeVaid7vNtEQqQrahsSj",
  "key25": "3Q5JWkVYFN9K1gzcKYZG1Drn6g9Rcr6rSLqfyQViZjaN9NcYn8EQULU4C6JcJF9LvUzBxFU9SNPWQcaRKLoxuZx2"
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
