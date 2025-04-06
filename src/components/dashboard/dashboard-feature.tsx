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
    "5tqxqjP2ZgbFMt7dE9qKx8mDvfGaGF37MYFoi19HGDHQPEN1rq14isQ7PTGoz6svRPCmiKkvD8dBDMH3zN7zd4uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39airKep5GoWfdroKJHZ5dZAmhESpUc9N7K8yrb3tMthizXf1uz48y3tFWbKyHGc9tkpjkfFxz6ex19jYEQqvsCa",
  "key1": "2oYuwZ9FVHccSo3t2zW5nsZfmdpic4h3SkjtiScpeFSXnGLbB7jGrAbeG9q4HuwFxH5LuM7PyywJyYcGqfiS8M3q",
  "key2": "3Q12hY4sCRayEkGb87iiwKNzBHNVuRRmV3dJ2NGoFzn6rdLm5HJKabA9HbXvdGu5kZGU3kX9khG2TKEvp4PHxVfv",
  "key3": "4a1q8VUMtVJAENEYirafy5LcVY3RzTJeFBvH9sfoecDZY1yh8N1w8TujzJcW46ZHGD3vqgiZWQ6818KL2mBEwAWP",
  "key4": "4obY9Prr5QSQmtBoM5C7LQ5V2pVThnfktZ7wEf2Yz7uLYAXTWDRGxd6dbTwqWbgCXDXF5hmLgRgwzZ2wsPrZry9E",
  "key5": "5M4Vdy4ePNm52oZVrew6o1i78aMjinGV25gjVfs16AtCKCXsTp2s3WbcY9T1uwMLFPySGLuLbT3ciD3dBezYzxxC",
  "key6": "45uNvNX3rS3nNeQCkFJQ2GsknnL3852Dj71dX8GFjPgeoztzkx1ppYV8wJh7buBaes9M5ybQVW27jHv8UzCLEuRP",
  "key7": "5HLWNTvLrsmmfFjEchXJpGxcZvvHijwT9M9w63xAhsmN6NBuQCSawHVWA8NRtaJGXZdafcDAdQU8qgBuujtWe1jE",
  "key8": "4bMkt28yqDfsVeRtMc2XwTB9GLZ27vMUfheWu9X3UjUXVR4DR7VjwbBueqyk551BXHwdYFzHAEgGb1SXJSTT1AD1",
  "key9": "3JnJTW1R1h6aor4x1Tr5ywpUG2VaHmBxYWVBedZjP5syeM7gcjvhUxDjmX5X1Yaqej3mMsW9eBGMeY5qq7xpae1S",
  "key10": "5jyHxPXqxzEUSEzfze9j9tTEfrofm6Did8piy7n3gQyf27WhPufaNtnCxx9ZVgmD6scdVWFZSAARAM2GML7QYXUg",
  "key11": "4CGeNjeeyY56DxiFtq3NoLMhqT8XwdowiMLRSrUYSECS1nckHXRSxYNWDkavAqbjarFuoCt3W6SiCvWGNaTRKxCY",
  "key12": "YTuGeQAU9P9S1uB4iuzRqvhxsYKkvXiNk63b64P8o3G4vtVnhnDmnzZzwtMbq1XSPHuc3vc7Gvi7JFunkaqaeEe",
  "key13": "4EvHrfEi2QTNx3JYxWtrDSGpd2Lau5CakgDtdd8RW4TYWJ3cBoDXnJTnXhhDnLrQeZknPGwfxJ9zHgNgbsX5L9BZ",
  "key14": "bzZUQ3G8zoaWxToGYWWf8q93S5XAYMfEjW7uQtVn58kxWzSYyekWYF6Qi16hBj9eGriaEeRUgyYnH7Uo39upmqi",
  "key15": "3PoFbAnB9BPth3H7GingftDHttr9uTpQrxwMbiv77PpvC4pDLethnwURTiCjNhb6wB3Wnxp1ooFzuh9pwBMcgVpW",
  "key16": "sGQUKA6GUeSjwZPgyeoRG11ar46swKUDcGTSQ5fdi9cgdeMmqcJR79bvcJjbvBy4oRfLNheYb6b9wZEq6CysEHK",
  "key17": "cobRafceR2uebzByt7tvxzDtgACdxuz1JwjCvYJiofFG9RGCSJDLsSj2LJjuHNLQbiUHT9hJEUuFRznE12Y2K6L",
  "key18": "2LETjQ6uU8y9TV84FWqNWDb5g2VbwHhgWbSSW2i1pwXX9sMBCLtbX6iorKnGkdf2LNDRKztvijP1oYQm9A1d2xkq",
  "key19": "3WrCvJkLmdbYGy4WEHB5NBhTbgdfujXTbZy8ZqMoVyN63mePCwAQRAYLq1Gb52F6wGQjvQnKw2tL1SLXJQ98gd8u",
  "key20": "3NkrZUCnHEF1fnzEFnLRRLurjQS8wPJFiqFm8BsQYswLxfeRpn89gsueTGUhWt35JhMvPS317QvdCQF2HXe2bcJc",
  "key21": "4f9TicTYKT6PvVMKw8zhHXKsHyNKiCE33szPjsTo6XzCvHAsaJx53z8Kdm7XWpnjCcQjadAn8B27QkM8FNnxjGux",
  "key22": "4SKhBzfKmAMpnHLai8t8RuU9uqn2cyv3AhHFNBrGYecELRs76pa4uMmzWKTu9T9EvCBqqEJ3sW1Qpu7p5UyyzMmF",
  "key23": "3z6vJrhGVBr8QaGVJkts5dPbhPELJgrHcS3CC2HYntNtKBKiKGfhtwasdYAvagsDNU77MGih3mZ6pz7XYwXF5CYd",
  "key24": "4GuYiQnKEoHSAq7cL28NNQRkFh8bohDrjL7c4GiJGxLCS9i5zuESyxVuZBhNvswgjF1TSzWNS7G367Jkt5ZQBghK",
  "key25": "4tL2XepRjfpo8w1ESA18pM6vpXp1weWtCZSxMa6i1hHwsebaiUJuVjLD8DjGZTYAhAcr6eFCDiHMqnBfDGnafzNK"
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
