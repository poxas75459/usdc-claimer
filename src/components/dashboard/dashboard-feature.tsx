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
    "64dfFQWdPPhPQHEVaWADRYdsLrR912MDXU1c3Ri7KzBdcLtwC9wCV4NUk9WQbqMbf39z35GTaC1sZbgoNAzn1HMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7a6s4G4DhAcq498AMf4az3oDtxP8EApiqKmw8j6VxV6fQtm5KJLCTC73Q7RKj5pd93qKHuUgWq7Wh7fMQypmDJ6",
  "key1": "Xxh6MV6U2JUB4R8UDXx6A2g6E8DQA6frdYzBPy5GJbq3Tc3Hy5iYiyM2RdPJvMaQeSaLTh2udV54WyYEHtAj8AF",
  "key2": "4qNoG91kA4LdS7SpsgsCVY3wRqPnnAdTj4Ai4E7XH47fkxzL6WG8UnK2ixGYAXqgj3owzgW1twyj3GyDiJhZ5zWc",
  "key3": "2GyiSrp5nygyap7hBbM5Y4caEmwUHYcsfNdScVUFWcPVPfxdXSe4UGX1Gzm7jRKajxjehysK5uDtwkYzr5p65bBm",
  "key4": "34Cay9TZApLEmkKikCf89WwAuvnXJFQcfqpTXisDK4cZ2QkAXZHLCuRh9kUQUfeFQpmygGtGETmxCHMaceuwJFp8",
  "key5": "3YawVBYVTis71AJVJT2dYXfi9y2QJsvKSCve2FxXSKW2fPCwH82sqctAoEKCqgT9zipHe4p8qHfgCbJDK3gFtca6",
  "key6": "uj4MsUBbB5cpojWrqkpnDxHco9RP1EKaxtepmPxqX4uMRWbcr7FzHvUm2TAnjbZCzgqFNKqyXpv9WpWfybBJroD",
  "key7": "LSjtWDhYY5trxHcqSw9AQiExEXMShZmZq4RNAciJ78xpt6ngrsYghAWkSx9vLWoDtQ57yyg536WCjYaE6DRQ4cv",
  "key8": "3QHNwv5MmNhzKBSBgohjuQpKm7FVkzVVH7NwfqSibhxy3PW5H89xUmWxdu5WGVL1zWeXhdSQFkwy79EPutgB6LBt",
  "key9": "5R6HdQR8KbhJo3jUHjcp6BWV6azCkT3LXaTgLx9YEzH6FTMGWRtgAtQiZBzFfATdBnLW8GNeFsppZgehiqFWWHSy",
  "key10": "4au3Czbh1Sa7d2huG6uFsPmY3wdxQfQpPDmB1AVkbLueJ4L84TsLhw4YRqMFiGs4vsULUSh3WnJYQWXmmtDCEjt6",
  "key11": "2SzmEWSprYvvibNZtoP3vQub8srZN2DeT488jZwduzmrzcXLWfYYSpCGvLDHGVsoEYhjv1b279wDC3CPSQUHDV6W",
  "key12": "67ftDdNJ9URyoe1JxrC6MZ2VDYJhs7oEXu88BFt6AMT8G9r5WuH4VZ6ZvJ3uYt1GErqa6sJ3cWdgP7y4vQzq5WpD",
  "key13": "4s6axHiaZisXF1MFiCobisEdrAtdddhQ3kgQM8mMeokGxNPWjfCxXkXe8xDMjrbr5QTnvw3HDvh45jf2siPN8fVC",
  "key14": "tFKoHCKGYRDbP48QHzJjd86eLGiW6SPfu9YCBHvpCrUBbHM6myizRgqADdftPPvZvB17ATSpNYwDwLqoGRWUWeu",
  "key15": "4Xy1rRyzewSQ11BQh9tQKYMw3eHzVsTX74KiP1a2CGTQuedxkquvp2eUzBqGYBR28pMJjM6fPQRM1V6xegAGpHeW",
  "key16": "fi18CBFw6ay37ph5rjFKR8GFqazkRg9iNey83gZJo5SHg6ZYqckfG3tBt5WjU1dTuCTX3oaoTJVFPrJaCg5XxUL",
  "key17": "3DkfqMJSWFoFCHPJ464ZHrYcbEJNzBjzgihEha6d4dhqMkmWcSkUFzmdr8xtpouLETyL32jpPsf6MtMSxpbmaNyx",
  "key18": "4X3dHMzcw1sRhnj9FfWnKCkQ5nniJTibFsgjzZsyYdJXUppCW4uwLghwjPmt7vfmr1WkGzZHcKa8ZF9EYNDTPU24",
  "key19": "3ms6DcBtZ6EAQBJmskm3jGk5KZMNiSMPWxxML5VyrP4iP7HfZYEmtnSf6z627Qtp8rbZNUpNteLB1YkgWqC3Dy8P",
  "key20": "o1TJXPPJpaHahhoHjx9Eo9iiVoPLDLJbHTgg24VzWwUCKaxj9XTduBpL27eEAebXSKxoNbUjEiHEiYm273kPJqg",
  "key21": "4HQJM95hp6DiRKfx6jarLQg7h6PukrmG1we2o8j4nPHroiVLvWgx6teHFYGJa4tXHpKEutpXgLMebBHMVibe98Ky",
  "key22": "AU7VGnqCV81XfuBm7Yx8Zz6AwUnn16CUVsmFEAP5juhAEPiDBW2UwNqsGDTYnMc34SbY12MK2xWftGPBLLPASep",
  "key23": "3eYJYPaWz7RGA9uDjDLmgbUZg1PvMoz3KKgDKQY2UUjAByhRR4tLqtSM9JACsXQPcGCqXhsgEeTRF3JRbACKp6bB",
  "key24": "VxTS3cHpsPxRBGgCENi5v9ruGnNVgD9sVJA5bhky1CyUBqQkL8mFENQgvbiV1nRaG2tPRomxGHu2spyHqdS8BM5"
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
