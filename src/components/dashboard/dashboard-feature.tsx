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
    "kzUQeZHtnbHvFuNWYcuU8gpQnV8y1Q9e5TJoJRVttES4PZQc1t6oRC33ZFZZoqhJraYeVRAsVLCih7deLpFjjHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41cMUnMexWhsLjw4ZbdWXsqje3srBCDLyoMWNXt8REieJHiyx3eebpkaywkn5eqTrKFhV26JPrZtYttU8bkGQTWM",
  "key1": "4QR8iDxpzhzdFLMRdWZQm5W1PbQZ6WruNZk3PgE2dto6BWmL8SbGfZDFeApt8JRqtE26neLy2dWcvZmncZDGUNvf",
  "key2": "5euETwUqcTv3gRGxYYH9ZdQEMarn12tGxvKJLLprwykTkZHUmo29zoBYX9zERoGEXM3Dmet2Ph9RF3xhsEipR8CC",
  "key3": "2zFenvauzg1jdxz7WJRokP28Q2Dh6CSL8TgXmLg7G4KqLQ3fdPZtuAP7AaG1qYi1mKZrCWnqQUs786jt3Ps6JuEh",
  "key4": "56vDVT12RjwhH5pteD5ktU2nYZbxY9rsUauDVPqd5vnmAnUsYhf1egFDVPDFECGiM8jWEjyLw8y2MKAkJZD5FaNw",
  "key5": "2hktDzEbiVgL4sLoERsmVKCQGbTdvXnMie9gz6hhAH1MjhJrRqnUqNXsAJ2i4digtpujFxr6NJ8ru8ie3iw6VZVD",
  "key6": "55U1Rr6QNtqLGafXWcSLHq9K4zsbCm5LNTjELnMF9NyBsAM7Zuvu2haSzwPYxiuU3Qs4CBUuwwxmFfCkms1iMo8b",
  "key7": "33N4udjGBCVoLXfcmMeExJ9zLzPxiS6tQKjV6mfxTYEoUwwojKip8jW9rabgn16Bb6zb16QTabL48DwAwB3YT22W",
  "key8": "3hs2dU6Pn1CzT7MzsBqWt2xJTNhQ6V8MM7VzKEHgqETpfpQe51fYSvUEKv5sHcTPjAp5ZY8yQtVFi6KvEsi1PxqZ",
  "key9": "5b688ZaqnKxJJwskiTftqMQxBAYtW3kWxEeEiu9B1XVAaDHNjHu8dTWA3UWu17LCkgAaSw3zVJk213oQJygHdna9",
  "key10": "3GjipJFMaZnn58vbYuQG4EAui6n6eLVYX7bxgVqNowirEDTka7vNbwHopY86imNRuxFz1QB4hnTzgrN1MR1yivEV",
  "key11": "4K6wkfPXbgdJ6wBsnek628huMWi6k2H6BYuX9WzQHwb7ySXA6hDb3E4qVtyBSE6uWi8ubim6suaoRecNmuEjjqji",
  "key12": "VYRH4HQeFVj1aByNbKGjycA91kYhQSk3jgREovJSixZJjm68tH4CjCZksFHvqnzwewbSjkYFXHeZsfcZUVb2ekP",
  "key13": "2Mv6MgK8C4RKisaSckXEqMjqqzmrWpnStRhoqHqjhwE9ESL8VkiNib9G9VAPjnBQ4i8FzVhVtkMhixehDdMqqNub",
  "key14": "2SaPtQRAYJKHQjwSEMcygasCk5Lsepx8rjpPE8j8sFBSANNDnDAFB3iU4VT3JWHzA9dqYNKmcAbWGksBSwW7PS5c",
  "key15": "3khcugAknMVsAJzzB4C3i5PthuUxRbmhKriyXu8rw6hL84MaiJyWBLmVeoA7nZAUmpvF1EU32QVq6EZfqX1UA5XR",
  "key16": "5z1zWWDvjTYC55CWr8TEGR5dTw8Zij7BEUJdhX7yrWgzrX7yHdUfWUrRFVYXxVngXiTUMoe6U91j2Dp3rehVem5g",
  "key17": "2EMgJv7jBLeM1jq7sVRbqbNzkMc7KGWXHy1ZdP3x7nT52972HNsPYwvVsfYXzuWFDw5KnM14G1StHxiPgNcFQnAD",
  "key18": "emx9cWQztwDgknyvw7Nu8hR38Eq982wur9HGkZYypZ9hrqD4aHLoRAcVD7wNPCVYF3Tsp7kBsKY4N5NiASZuuR9",
  "key19": "Ksbquc83rwVhMvWpp4FZBgg7UPCjTRxoxHaDGPNc23SpTLZygcJPyAojVkKWxWj1uYkTL5bfE25VNVioEEtkxDC",
  "key20": "VHptQxFioPf1GEkrDguLRYmfDMAsuGeUYyo78JjDVycAyB9496Z3yMhMVf79M1xzWUXQnnUUXQqVqrzCTXqNwYW",
  "key21": "9MhmsT9j54DAaj8LxEyeidryzYbwnW7x6hapfmnGTykF8YurjQDGzaGgDS9gkJPc7MD5t6nhRpvV6gLrrMyfBGm",
  "key22": "23r2L2oBs5CCp81DBfv2o6L58x682ZypaDeHZ9kFACJkbuzqkJNvJqesS4JRUFd5jdRA6RhuN3WNYmNTsWEKhKmc",
  "key23": "4tcpcnuU3Ze9DF83S44gV5mhfStXHo233YFpQsjb5YQupeqpECzHS8iKcABtZyGpGvGKR8fnXjiuqvwyTdHdQZH1",
  "key24": "3wg5X4EK61rib4WdktTa5x26fBNUWoXcUghzkUzZKqPvoX3RvfeNCzNFrSJ3weq3RZqcvqoZCz7B9zjBT2zsBbX4",
  "key25": "4rUwSjd4X9SDQjRHJxV5VMQG3bpn3VEedjk4JHjgcuiPZWJsYHgpncyaezyXATEg97Qj4Bbm4RZd1ZjK5KGzsBDE",
  "key26": "5BV7UfpEGdZJwREH4qbBuyxELdwZrKQ3fFbePFCWbp1taNjutFtcg4M5hoFY5XK9T88qnRAnifmwTRgkRuRqsD6g"
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
