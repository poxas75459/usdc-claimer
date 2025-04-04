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
    "4v1gtgPQ4ron1LpCgtKHj2D6p8VYaGB3WYmMg1YPQnXWw1FtA5XWebpHNP4JLBzcqxUKCJ49GA74xRngt118wkRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PeyhxCurkdsnKKSDQdBV7FGusUSdEuzQjmqkTL61rRVbQA3YEGfKrg7r8BeCDBmFQFEqFhzLgE7VMYdPN2MMiZR",
  "key1": "3rcTRuuxZge6wiecmJHYXXDGKt4Ux8wuZPfytzHaJvZcagw81tBnDHZSJKGKPU6hppeS8r23JC6e7goHsV5KZ9ng",
  "key2": "3PsxontY3BGF1QyNddYQV3eKpeMCScpzUAY8hypyxfXNVE1fg2Tyq77UvuniggMv8hz6VdqeXrmaruCEnAJkdzbn",
  "key3": "5ZxcNsWrcZGXdEzDzYyFktuKEW3yR5Kgdf6DBZe8hPuiZsc1ukr6JnjeeEBV561mrZsFS3ufm6c7x57L5t9M9FRp",
  "key4": "3FqgHLzYk8LM1HSkv7QiopGvfSghBDUFDNfrAedWpHNy5ULb8qU1RgVbhgJe2XD7v31U7PHQ5xxe8gGfSV5YxLAm",
  "key5": "5FTa6MKgcBrvGSdsp7ZuAH1wK7PSFD7KTCbDn7KVcWtnEisa5kYLSQomG6J5hwkg2oVgjNLt3q9jYrXjTao5RxQc",
  "key6": "5dXjzgMHiMBwwPYFUxrHXUbBDKLzYAMeGNF5oxRkUAtmA6iCFfGNHpcEqkhuaUaiXLwmsPJwz9xLVkyqHvAKYh3U",
  "key7": "5vhqA7S1uuG6xGNRMQbSqnDe9EzefAbYx3ysJfeqgztWqnfojVVYcwNKAiQA5FahEbKVGUMkEnxTLZE6ioyzoy6s",
  "key8": "cu8Usnfi6TSBsszrD3fJP6A2S5zGgfZfoFz7izdW4EwFRLz77Yi7nUbnUtFTeDbBwRCbKAi7FrpTXZU9ix6CE6Y",
  "key9": "22LqqUmHLC6bihyU4fJm5KAnQBpwvZgP5jPt8BYhdj8LaDcN58zNzmEexmLh9pfBDZAwhb219mVW3PoznsAanirw",
  "key10": "3dQjQyzw2jowTt9cpFk8BQpLLsY4HJZ6rm1VmgxaZvS7scizhobtGj8qXRJX9xA9BaUHUu4nVVzXfVsNzTFU5GXm",
  "key11": "3XU2EX6ifGuD4FkSNcKQP9M9kroJjt74uaRMWzuqRk5Vjf5uJ78VE8qWYEGVNDqqs5MhX2AQ6jHyEbhXfL2KEV9W",
  "key12": "4PjvpjmHSwDwWJFUEsP6gfxenSSRchxVsqomErZNUvtfqyS9kDr51htJgQPMkKqLczMuXxvFRFSk93MZgD9jxsn9",
  "key13": "4ADKT8Kk8AbdftnJJY1LbJ1eToiCtP5MDRRuriyUmVEmAns81GHvi21hBkVfENuvSuLiEHiZQTrtbmVjqFcCBNW2",
  "key14": "vUbyC9yBYJ64ikGcV2sUJAWabg48dJb5Bae1fbtN1RjRz78JuMCyBYy395GQ2URH35rkpostZdcEL1NU2Yrvw3T",
  "key15": "5bPXGBc2bAijWW9qKHszf3xxK51u3i8wyppwkDv2yLWBPnVDf7pXYmpbVSBwzCd2QiVgr2oFFDVfjSXyZUYhta99",
  "key16": "3deJxqzQ3z2BTNk493Q7Xk7iEDk3aacADbRJS6g2BjJiA2ptsGAxL1zcCovBdTWezAC4ddqgU7x8tAVhBk4D8Fk",
  "key17": "29tCv8u9cSTWxUnsAQ7uNF758q83RacS6QPoF5af5ao8YgGmJcBUwy9tDwxLYqw6vjF6tyftRhgcPwLodPteaXox",
  "key18": "4UtE4LHtZmP5cby7MrHKw4AiGYKwt86ZR6ffFvgY5Anwi9pXwnxC43GkzFxA1GCnduffBGWe2nWah55BWB7KUr5x",
  "key19": "5zcqGbhAcSL5Jziq7q2Z7qSDBku1vrxqwsYuhPjgSNUup1iotHHfre6dDZ4vYSJX8UQKymy1oAZ7zMWxWzJUEFC4",
  "key20": "Fmzm6WAJoHzPqKSyPhi6rgk7h7aZbBtGLRwBeTpcVo6LwTvyp7iPfWz1kQhDAKkaTCC4tLVKxtyXKs2B3wVhWH1",
  "key21": "3aEr6L7rAbkwhMA19RpXCauiGcj8UdvfjAou782rxy4Y4Vb1TPXqN8zZW85GEjXSWosfadMcCGXVzShXnjA3AM7H",
  "key22": "4Bu2DhyHTffeFiGGevMP686FoMgtfrbfSR6CsycuvQ3uExzX4RhHGu3M4wzL92GAvksvBZrx2yQq68XmPNZcrect",
  "key23": "12A1AyjeM9CsoeUAaiWKWyTnoZzuZ6wL3k9CKpXQ9JgPxTtC7KviHRFY8pJD2ziyMWmmg7ptLp8FoA2twS3tA6Vr",
  "key24": "4K2tw6JYAEpvc8k376JRqERux1XCJ5L4NcpkRjwUHvCS347kvwB6znxXWkBN3SQqDin32sSBvpSpPAV3Z2ritJF",
  "key25": "2uSnb4CaGBmzjhKxiaSBezGbqhELmpsXVB79QtftWnh6DA4DTNehUFsdnGbQodPvidZ4R4ccjRHH1yp5a1pCZXuY",
  "key26": "473AvyanFJDpGJMKmRHuavDAvbhMtVjDNft6r2dMRBa2gwshXkcmAiUys4qXkKZ2VLCFeFKNw6oQmYPKGRdhpg8r"
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
