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
    "4KfMakJDYU97Z6uSTPUF9CR4un37q3PcaWQiBSJR4FqMM6nif2Qa1vcU21jhvUpoU41tJp6ds36CG8U9bj6qj4KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iXbWhKQp9xnLJnLyi2QPq8mfowTjPYq1T8SrrueKDYLHmrDr6RP8s7qPrA8mTAGDa3uR43jH3V6mCi8hkPe7qTg",
  "key1": "fvgkMo2PxwJpAGKPU8y7bSEQgffJefuSuYBydUhAPCR4Z9SQoAczMnNZJqdBHGrARZNkZpYcbBULicrKVBq45U6",
  "key2": "vyshbAkxVg3VkymV5dpp5JKeGsVVTEZCPKgDitsNHzS5XjrhzvEyMpuacgmPF4awz2zodWk2nuuX2t8agUi4sTq",
  "key3": "58NyrrTV8cFAPx6UC62wu4vxE93UEMVuCS8ZyL6r6r2N3wuSdBrH9nda6Hgm9MZ4viwV62AaxgG7aRnc1Fv6seL9",
  "key4": "25qB6Sq4wvJdosm6FRNvrFUKvzY2wjT642bwMBqUYimPGabRyJiyk99XCA58nTLyvMVNixRgU47F5zusLRHezJWd",
  "key5": "5o45aNgr9Loj353vr3fEbzPFFAUR4YeYBJsYYE85Pb3GWCFy6xopxZfVDoBSkNQfFJgdC3J56y3SQueduL5d2XJn",
  "key6": "2TS9tJWYLj8DfpYYmwSn7vPGd5kx882SMYgrP7DRNrWpQBvaVVTaj21YW5Q4oxnmtnWDGJ1tLzUbymFm2iB4B4zF",
  "key7": "2MGttpym3uXAV7WDiB2p9vhkCnbFVfJKCuAQssLAtcsyEAXbRXZyfwDQA2upX1fggr77KzEaHoV2H6hSf7C2W4mx",
  "key8": "VpGdPV6uh1En1VzNuXyiVDqCDGNXUXQHcnwqMXBrMBPWGKwyRb95L3JnWNqcdCLrBwsXXjssE8xkuazUwotYNsh",
  "key9": "3uHTC3ouDbu8ByBq4YxWS8QtUy7Pt8yJB5XP2yRbQiVCh47zLZTdjSQ1f1wZieKuh5SNvEW6PeqrjkW1MzBieg2Y",
  "key10": "72D4P2GNpzC25uMt8q26TCuM6WmHV5Vcbitio7UQBnnr4VJufHwa2FQFY5u6BHzqXP6kQwKWCV62ykzjkNYhytx",
  "key11": "4WXkRG7Kbe6iP5DrPepVZ9EmVLJAaYes5cKE5u7uzECjwdKp7LRBLCCSWiDKE6x5uEgKDzikgXm5UquzS5P8VE5h",
  "key12": "65pVXwd4stTRz7EjQ4PznpQcdhqkyKiKd4DcWUgdtqfvBJB63R3CP5Wd2MmxrXaM8AaB8fDZMCCeuTvzvFLYFU1h",
  "key13": "3JNXxpmMqCqnbzpw8h8AMioTXvUpE5D43HoBDXh79wA553wcDjRV4qjuRASQVmwUjJJoHzzG2ivUk7xoaxPePZtQ",
  "key14": "4q8MutFk4GknHB2FsTgNFUbLCYezrX3vWG6UBm5SrNZDPek9WwpqeexGKVXcBJvsHJezTHvYtwett39M9j4y99N3",
  "key15": "5VB5Vcb6XVvbHyzDWaxk6EoH4D8qJoFteUAtvWxTQ7MJrShgnqGXxqL6rfGNXW7fFauGSJrUaJaS4niLv7JaNmsx",
  "key16": "33NApugec3xFdcsJp3gNCzEHexw4uQ6Ks6bk6WanzmGT3qCMjLPxBSY5gXLhsk37LnHMDqWM12cVA9PdKf1Ga497",
  "key17": "5mBCqMGftUvz5bKrzQU4QMM1t9vuux8EmhprDPibkQ7CT5cVPrYX8o4Xq9XNdJcZy7ugmMQeJYTroPfveadNk6Q4",
  "key18": "4s8HdN3Us8UBAb99io1sXFAbXEyxbbL6rtAGC4uxVTEUw9K8s4k6g5zefLmixLqdV8CJ9ruDJr6EiVadTBAFh9WT",
  "key19": "2DmPEu9tG8nUDLEFxmMfXKsGvBN8RvjyTuKKiU9e21fhbZgsctjxrCb5wDoxHk2bQkHNNJPd8H91rcMbydGMrP8f",
  "key20": "4v1RA9ZqkqVx7Gi9kWeVxJSkGXDvX2A2issZaFK3FWimDJcrjAJkbuRnw3Dj2bp6Q4dZch9o3GXJgp3S2cheuDgS",
  "key21": "gPvqJjkYKqAH37pxSKHf5Lg4WghDKAQG6ZFUbhRb3dhCCBpSrXtRKNY5MnzRjGu6iiNVCZhd3gufDHMrFE3476k",
  "key22": "3vqiUGMoWSCPJhhcnTHqrCMb6k6qpC6E1WaGiZghvB1QnGwugggFVLv8qV2iYyLe7kdKHBLUbBi2ohfrw9TWSXRn",
  "key23": "2Jxw7JioefjJs3cq4W33hgbJmtchjB6pJ1c7QVLqnuggTFQwauexWk6UEa8PZQ6dcxinyUze2ZpZWVHHnES5Pw94",
  "key24": "3tnAGTtfhkYZu18Ni3QQHRhvUgiCC8D8RYDciSc6mmXsnYxMitSqZSeaaAcFuiKumnnEwrhFDdT6mY8byv6W4QWu",
  "key25": "3rU4LW8ioJiGuDn7k16Xzma6xkuPv62HppNLxix1c1hmHd5cU5cgD5NrKqyqA2W1KMAA7cmqDhtNh2C1TYGNyUkR"
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
