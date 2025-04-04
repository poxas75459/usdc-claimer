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
    "ANrT5DazT7mHtno12sn7ybwej4EQDuoTN3XG51wLykh2hxYqS9PYcofeQVU2AGidPJcf6E5FMsWjMxpJ9i6X5Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bhA8y6k7bi1dCrbH73ph5DQdeoRi3gssGp5b93etrzFWZMXMVbhpMUR9XUB7Q8BsKR8Nu5w92NyWKcXkBC7wJbH",
  "key1": "4Ee2p5rKKZCFkVwN9oKpDcQE9B9hoXv2an98Gu2D5F6ewzZPjfjeXKY4zpJ56XBUBEYmmR8vrAa93vNRcCxtiQXb",
  "key2": "2t8sA7XDWyXkPZZyehMYbo1Nrh6UnLYQeBfqZDouYiRaYGvdaGtJgNUGJHS8eHvcnNBzsnUB4QJxGKheLR2b3Tef",
  "key3": "3MsuvvvAdWn1PZKvkQDDdLkJKuuWL6gCqbwfLG8ccD5SKKtLM8PTaoXDx64MfMts6H2wBysnSPabYrJA7aEvwEx5",
  "key4": "23DbXpngrkxwRnN5vyJg5X5tDo5wi2zEYAiohUMBw9z7EW4zR8oHfw9yPULgpzYT84Ub3oaKCMUbE4MPeQ7fnJr2",
  "key5": "3Hum37x7D5QBJeJM14w1CLjNemSrYjwGHea9rfJ2Fj73naGm7wXHGV4NBKvxuMzwmY66JXMFrkdSUwQ3ERaJEmdR",
  "key6": "61gCZMBV4avjbkhbv41eTzttjSvaQDwLvuVg9XDLiX3QzRDZsbK6JRa9aujMQdBMkgEUg7uG6r9LnJ76hdXxkuxi",
  "key7": "guv94SZdc4emdAGM3rzcgDXpFmTfZWT8kwpXZy9DGabtgSwKDWPvov3qps3gFCDzGXqYa1Htn7KD2dEXWL8DfNC",
  "key8": "DFzwiy5XZUe9V2U2dHig8UB1pMjVY2Za6yJvFBoram5n6GRQ9cG7CfagkdHWXoYrqZkaQdecdJmmgtnhraeBTQ8",
  "key9": "3QLT7QEaSeFzZMyKfpveLgkwGsqbxmKKNngvgvcFjHRCYuuLaZLaGGbpMnkxDfcFvdKBnEx8nDhvMtJdGeEioqy4",
  "key10": "45ztwUjyVSsBCMaDHGmz8PXETwcdAq64egfp6hWHeLLw6UfhDQG6rkwFizwxGUrHfFirRxnKTEJJxrEG3PBNg5Vo",
  "key11": "5HmoNPcQKqBoiWf3r3cFznuT1bs3oTYQBUD2G8vDEMp8weU3p5iEnaktxWowVS6Pf1q8xvYwZVjUpJqBZdh28pnH",
  "key12": "22AgUKV72AF1U6Mz8JTe3DFPUkzgMTqBrBJguao4VWkioFgcs2vVyZbeVQm5VnJVbjVEHDtnnDEsLw4FEESnVUUP",
  "key13": "pNcmQpiXwbFiYHZhqeB7kuUgfynw4TUMoTG2ozTLDaSxkw1Vxgge4N5Wx5soS5NY3v37ZSaYEY6LQXWyqk5iKfv",
  "key14": "3NPbGcEuoViUAwgRu2RDUEikaNZ6smCjtRWJCY9ypsu9wEotaqN9SQoWJnjh4cjTj6NFXwB61UDcT63j3ry64d6D",
  "key15": "3WWsSof661kiBRUSTgTnK95r38g7kPC5ZmbVojVGtF9m5rdBjy1syhtzp5JkHkbKBNNURCY5kdNTuLcFeCKKeKDb",
  "key16": "26q1RmWBP5M4RCQ8dimRQxoY27BGk2sSVi2hPZntjZp3B27yuoaxvLwD7Pco4A7EsAk9KspXX1HspmwL9qCz8tWe",
  "key17": "5LjYU9yKWJbH1UokNsrdSRuspYJvQSTbLxx2ebd9fHYP8poyy9iC7neYribT5CjKbcaUpU3mJdUBac48Uch6HZL3",
  "key18": "3pFsfEVx74a2PHa53dHqUu9sB7WdH3GURfTSyVVYyP87UgjM8SGdaBTQ9X1J6mrY6zbuQjJG7HRmUzeY5UciMAmK",
  "key19": "YXx3uchzDtnj3T9PSwVriSTVHondiLqkx4TsYT7evtgcaydPmcqjEsKGemVAasmh5r7HCt84xJyhqBHLUxELtUC",
  "key20": "42eSzEXFwbADtJ2yqvavkohaNsdNQVC9rdGxAAKLuP5aLWSRBbJZeqKSV8WAFaXmjc8ygvPhkins7FM4g5TfFu8U",
  "key21": "nQwA9tg7pF1D1ZBNFczAmi5XdrCWrnLjZdTvYe9dY1YbnRr2LCNjB97DBvB5teSsnbbTRfEcuM65kx78mLUFAUV",
  "key22": "5VyavaXmR73BUpgE9CiVNoe4ENgoXRw7VwjjtRj2dxTwRFZNjiTV98bWEx2DRTNHxwkUtpKZPk1iZLuonNFxSiGY",
  "key23": "3v2Gr1G96nuth8ix72UNAVVXDB1iRP6a4GwS4tJ2cWWDqbmTKjaZyj2NMNwX1hNLUkUTWRU1JnvqZZQ8uCgBeeqf",
  "key24": "4TNSTTYxEVtWMASAWC6YmbvmuLVYdMSFV4pTnX6ha2dYVH8QcYGeAnTTkn7s4qxNC7unJJRY5JojGUpEuwbmk2Mz",
  "key25": "D8tkXn2J7TNWGeb6n7CmSy55WQwMoKdujnQ1VknyZ1XbyAEkGtTdFXtCi49hiqH5pDkdaPvBwUDuRxqKa7wvRR9",
  "key26": "23kqRXRMJZRFgfNe2vA85ERJpbJgHREGiYY11aK21EPVTokLaKAvMiTKLAJdoQeXAe14JQqhYUsGTdN87r1oBMaj",
  "key27": "21jqgrrjtJ8i7m5u8we4uMCX9ixNLZmQNSXLCGHJLBcmM44AMVsffwaepRf9zE9yDgPZZnNqXWTnHd9FjgJzUpNu",
  "key28": "2axF6Wow5RN9tNyRjtwZGVFhWrDWVqk1Wqjuq7bthNxt2immo7Sbg3dLV7MW9VakGgziTUMEVuRKceT1AR338xhd",
  "key29": "cAfHEBh4S1jVc4EzedwrciFMrEX68u53VgwqF3jRcKw2KnEE8bP85MFBdY36kk8TjKoMyK5cSQYkMGk3nPKpwre",
  "key30": "HUf2TfdL1Dt7sqfkYzSzZptAEtGm7qYKpBZdWCW2rZuvKv3AHcD4k2r54HfMnNhHYncqGctstvxzmuQDVe2diJF"
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
