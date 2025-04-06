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
    "uh3CXBgPezKYvL4nsuxsQnmU72G8uDfnxaLdSHb8ik9ctszwsKcw7opwsxsPi2nFMdxMDjGPLNamAgog1zoxbcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3spLSLs22fePVQVyZo7yvnf5HqtnYMZ2grT6d3gJGbW7juwvaNXmE7CXyiAxgzavsERcxVkdZTNcZZjJxtHXCNro",
  "key1": "3iKXKkQoXpGFmiTUHLJjzxPkYqZjQGiWXA9q6tMX71EuqkB5JWeLX8JK6WZMUKBo83CUv4oJ7Jsp1q3FZTPPHJ5D",
  "key2": "5Cj6eFDQLD6h49AGP1b59Jwa1ePLELoBTw1JovEkdd6HTpWez4v6McQgaJXock1cPcNhYtm7WC3GzTjnvnNSuvVP",
  "key3": "Yo6veXVcBgkuqszW77z8DGAb1Y9qvEeNUombsBUxgehyshZ25dWwPHNSLQ3YBJAEyoUbmvZgvfY4NDVKMtccKsq",
  "key4": "4PhxTvkceKqH86A51jb9nCJ2HvMBnYTbRRtgTJNwHkWtb9FPHAJDDwDvfBFG1ftJxNRv9LP3mmoux1AdCowj37pp",
  "key5": "pMam378qUVFCDmS4E5q7AdKowbouCguKgSC4EvYt7d7Gv876U7nViXjsNs54oAz7Vbxagc1pbwAggXNJoXscxmy",
  "key6": "2fmmpayBVdtCk9FhWiT2KpMHgQWK8ENJPTersq3afkQPhkHtHsqgFuqYqfvLYMzPAgVGT7Joz6N38bFGYiMBx3Kj",
  "key7": "4W7MuT7Bbv2BA8nGMNAJyfXQxLnfDWEaHHd8AyR5SToGUwsHWmKAURCB5LrXkZGDEDXCFWgPkySQJ7ULJ2CNptX7",
  "key8": "hysneBLd4YQW3R1HRHWUCysqmkTdojyuKyGy2reGhRyGTiFvM2tjcydA3JH4d7ZBoekJXGuD4urq1NQGJBsmViS",
  "key9": "58Vwq4VA1wB789FGfcwkAoZvwFHh2Yas8E6BtA7xa6od1ehGnwMqww61uxZPBNokTvrJbb2aaAwRFKYJFbHZXUEu",
  "key10": "3PAyh4JryALgKGP7RjyCv8DKk1mfb9fBFHh954G52bFzMmzAzihQirAGGPKNMmGvKzcAaDUzgYL2xrJgRg5dnNSX",
  "key11": "kzburzLWUcFGC2eSBbRxe2eUrnDckbkFBqpVerPq7CUu7L18dPhDePY1VmwxXM9kdGUnSWsWLaYMrbyqpojXGoJ",
  "key12": "5vxfKM8zEBsTi8y7C6izsrTxZcDyVskpkubdx7vjYNbE8Ku5h3UxZZfo5XaZqnMoZP7dBn47anypBMVT5bWzUDiy",
  "key13": "2fQvREcYk4GUMgzVUD5k1b2WNpXaV8kJS1iU8TTtjn65WG5nc6NehoPyjXL9Ba4gwVnbmFYh8KqeMQbK4tCoGMYX",
  "key14": "3sEow3Dz9GcEfCcWJSMfTGgRXvHdpw3T6W7gWwMVwDwKUVXXZAZv8xGJ8sajzrgeechNFJTT2nMgBpcUxwYNcpGj",
  "key15": "57gVxFLUwb7HTsB6eRaBvwLDwvfBonNw3Agt8Jvqfndankwf2EJhdgQ9iVDVjj4wsDFTVJuJwhH9XJVwmtvk7Fx8",
  "key16": "3cxi55eyx5mj28EpbTHWoPq9CetsrJEFL7RAPSwysvbNBfGCki6ixHCJpHMqjTCVTLebF6684qUwimRuA41zLdR8",
  "key17": "5JTDCjNuaYfeoAe8YsoJbFH7yFyD7sTQ6bPeELGEid1vZJus5Pszmns3azeUy6AMQHcF6QmA5k87e6D7T1KpE4jG",
  "key18": "44zGzqsGAbHCAgMv2aFKhtEW78qt1L89sS9SP2ctWMz4G8UJzBGXBEp9sFH6dDLP4mi9Pt96wRVF98LSqpyLQAZU",
  "key19": "5ah5hcFgNUDFfMmFSHKPBnHpne6GAQFz5iXyhjchQ1y7BF3XQ7D9o7H8VfJFskXn3FejQCjjiKyf8ithpVd2WnKD",
  "key20": "4sozCuzsPHMy9wxhvYSVct3jn97FJhfhUpHhbinioKgQqHka1s11kXRJyZMbnSpS2aZAtv9SHMCEJuKT2EKsQaK7",
  "key21": "3Ew9wf1Fo2MuCxGhvTcdFMCbj2112s7jqV1Chy4QaEi9MHCraK2gTjChzTj65AkAYGqQLHccvNdURWmvNftUcpbK",
  "key22": "5uTmVMHmciqgbv2AhqANEqCr7BRLUTM3vtx217dEifo4eY6phaJfduXqFmpTFdbACNy2r5kGxgeEccf82Xuk9bXP",
  "key23": "5ryV11848Fn17mwN2LNi9kvAKvBGzH9fGR4CbyZRVr9HZckUHvpVzdnJpUa9avYWp78qCk6j9NrEZ9CmBXhTQ3wg",
  "key24": "2dDY8RX673JAnKz6o1ginyyDbjRCXsBiUaYDx9MFYRcqmiHudbAGLGaJ4bfzzqdfFkrCuZ53hdA9p1qnXqDiGhWp",
  "key25": "5pFtKWWJXQo1cpFooiwx8jb5t3ab5ENL9WFYbMr6xMiacanHrmoAeKq1W7GBi5R9jQtLtehrMDybNfzdFPdREPgm",
  "key26": "379vMmKefiNAptw2W5qkXvbhRiJjd3pGfGV5asJxrJViHycqibALpDKKpVNrj2WZUvUQWKvNTtD7oDWNxEyYZheW",
  "key27": "XsPuuNr6N8rbSPCi8hXimrkJNbv9PWZJDQLDMd1z1HssXDJj7v8HhTCzWLVo4jXauLVw37cqSPfo82KpvjpHeJP",
  "key28": "sxyeM3Qr65ieJmGpzaSXjyj6fxoaBFoSGc8DcCkbXsbbwYCGrm3GPBK71mp82KpZEtJbew5WHs6KiykoYkheELs",
  "key29": "4ddWf6XP53RfqcZtpGdV8XRrGnm5L428jzfFmY9jRKLkNnBARb37yMCBbFqsFVrieN3yjMfP1E651mq8ELsnZnbp"
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
