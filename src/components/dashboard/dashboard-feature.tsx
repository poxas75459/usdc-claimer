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
    "SzemaM7B2gCHtjQVD9ZodKnr3UiMoz5F6xmdAJwU449DibD11cyQpTHUS6yqXFU7xZYXexATMwQ1mXCVvwzbJCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cW7yqsrX7mZuEMFcPQymSCkVJ1jx5ZFBPhE9RQqsJDToC6Xxb2zoCLkcSJ1GPMNXEx6u5DukBn4TzRurXu2o63c",
  "key1": "6AXBY35JJT92AgFBLW9RRpkH6tqcDyArxkKE2H23DbcUQR5HMmx8bk5Tea7FKxy6QNzKy2thprp5J2H4MqEJ11G",
  "key2": "4thYysdrnQbzkMPeqhYfP4sZj2fj9xCxRUZEQ3CTW7ZhK6jCYbSiZZCoqkBGiHthYDVFY9cXH4Bw5Vi9prLwUGGd",
  "key3": "3v3gSE3DxWPUd3dKcennxtr4YgFohPvbytHAX9DZjnt1jcFiL1ngbtAAb9SAWie87dd7abcopJ6BWa7mv3a9nF9G",
  "key4": "5oXb37hwz7awe69cotGD5A1B42dVHcjCj5LjKkgi2sJ8rF3pfrvavdLTwSBSqNjHcN7fFK8DGUXjieZGWJshpvqR",
  "key5": "3jfx7cji7qfijWpR27K3YDnQAvimp6267ty486BMhej9HiNSFqH1VR3iLq8c77aaNAiKwB9aoMtU4RFmGyR1duUt",
  "key6": "35ZTuNyh4yWKKxcapr76NP2unxSU58LVLS4NB6Ja8ZfMy4nDU7uYFwp1pfi6W24ngN8kypPdQEKQY6XkgULfFvLy",
  "key7": "JuzeFXXK5RTrpqfwSiyhhkaHMJY2thYrK72YdANMAypzWd6pB4LaK5LC9hAm16MaN6ox4A7vKrEvR1JF2nmWKy2",
  "key8": "3tsEhdPq1aQkFagUvNGimbsebcbavwNvp48L4KYo7zBn4FEWNZaJM84iWVFiarEX7NSfYegTq7YMoEmv4UpX4p1T",
  "key9": "4qvpsgjg8k4kjjjKeKkTAw9MvhVgxzVPbQzZwAfieVQEKmv8o9JUzVyreacZzGriVe9JLqhfZ2HBCEnSy3bwmP13",
  "key10": "2NjiWcUgSvbZwDwLKoSZcHBTuo9Nb8vEgGLLENN1wJ1zMfVQxjcub7BFf4V5hMhDHvd3mejg21FoxAoQr8BeMYbS",
  "key11": "evUAMnTBSNDSnkgF5hEY56zFHx1p29WUdC6myQzWfHDU7vXwtwSj1WHKSD4eJikbnTAq1674pQ2Nws9Xd4fNCRQ",
  "key12": "2jzG1ezLvCEBt25r2qp1uzKR9AsN1mQaFK3THYkC73jgynECgD1TKUpwZudyf3JnKEXmM5QpekY7iJgyyBz4DraT",
  "key13": "2m4yejMYcmbYtgQ7qKLTFd7HjjXbSZzfUktjUAEuYbaMGNnfdrsKJvVAj7L9N2pNLftmUNdu6uZtoc7jkt8MRi3V",
  "key14": "4juYMsgST2zaJF9Gn64ZDLwEo85gDzr59DgCbHpDehLZGVSiu9QjAnXuYPkMk5NbrLUhL6Yn2mGCzuXg1uRmcDaM",
  "key15": "5KQYbrJ5pEtjXq8nFRPXMzXV2Gdxetg1ZPYpNTKugbmTH92DweKqixhEqYW6ga8pe7eHba1Nt56DuTqJ7ZiN931i",
  "key16": "3VMQsMdcPMBRrk1nGdGzycJN9rZ6S6CjZw7YpKfREBx7oLqZ5P4LYYd6pgnEpb3JXC8AXwM9KKeCpn2w1EgizWWg",
  "key17": "342cWSoPWxBx4AVLtnjroGiw34rHG2BAkTkN5NxP5nGpEyzHVUEYo4RNp4CYt8XbiweTY7L3EMFiRCwL41D1cxNk",
  "key18": "4oYZ65UFGXgjxJZdn5Wx1J2oPs4RCpgorHkFc4chyTwSuvDSRFtdzmgn2QF5c83tqPZrmXfAiYpbY1A6KWNkmUBx",
  "key19": "3rQovfk9tnarX8nDdvSJHx2iK85bb8X3UPiBzvM7nE22MfxExz7RX5ZCnC5i26QJBJ3YvCmMear9omwsWMoiLjDA",
  "key20": "AWHkQDyMv4knopd9d2EXi5wB2PV5TLr2YKgRXuWVDXu3jZoERNxGNf3nVysBQkRinvmProPMX7PV9W65NBjEKLU",
  "key21": "4G142fbQwpGkPuYa2E2YmWn2CbbCaVyo1E9cy4Rca39xpXZ1yYMbSPKx1SQxR6tLqvDE62z9tbZiuAe4eikFTPfk",
  "key22": "4ahMAvQdHRqrzi4PyqrJJ41rBa7GyGqLooNseG6aFx8SRexDF3yV8r3PDM68pYjFqMiJ5p94e7D5g1qGkGdQz1Ez",
  "key23": "wuC9u13VvrswvuPcYKcw13KarPk6sfmdffwwb2MjF6jLtsGjKbSoWfnQaz46GoQUBKqcAM9ue1FrdDkguzRTNvN",
  "key24": "46hZhJv4zghowdPU3Ae5DrUN9QvZPG2h5HpXMJjjiEb3YkCddY2cKjpvHwvCM91rTQNaB7FkQZ8y2hQbuEuqchQS"
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
