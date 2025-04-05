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
    "4KA7PUmGtAcM2PyupQ3ACZkN1ZjaXzUuZooXkh5WuvvFox4JnQxzNabGZMcEmtMTEzgLgDDxqFP9F8ekXvcup2XC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQvgGePbf1ocQoVVzFvx6QingEY7eKjJNZ3swMevfu5EBfjobr6yQKxzBP2hZGNMbya36ukiMv5XuNdigonZ7j6",
  "key1": "2W5rdGNokXxexhVrwGYzxc3uJV38ZJ1XFvXbBviGeFaLjkBNJcNGZ5wCsPbyTw9TkEJmQBHYX8cD9BLsavmYHMMs",
  "key2": "2rJdcwKQScrnzu9XRDe2YvMd3iUzXfw5vFcSGAFWfsmoPGxvXTdeV1oBwxNKBj9rKRhDuKpkDwiCbo27UKhnFjf3",
  "key3": "5Tj9SDEpEcGQ59ft6iJWfaAHq11dwDjibJKFuRbpt12cXS4uVY2bKBPw15gTwpF6dpsXGiGxsQSJATWBNqGBshfF",
  "key4": "3BWoAAPumwYiFEX4KQ7FhrPHJNAXunP3sBSLvC8JhzVGManbeaXSZqhfeeX9h9Q7k3AduktzHkZVuUpzfWDDuuiG",
  "key5": "ergBHQKKovyBH8deVXuXe9o1GjS7dBoWqGKjr1pewxAjxDbHHnrvxZNabHMSqUbhbSobbuT4zyNjTtZe7Tn1PdS",
  "key6": "3wuurHzAo9D159uresAoYa1DZfB75ByGSR4gfzJaKfbgbmh59Cb8aenP4nr5WRaqqDPz4BRBPr2hoN3igcL5ndVs",
  "key7": "2bWhwt8Gb2ZoB5NkTzdgFYbzQXgYL14ruGwfFG4gkxxaDqvTAMkLEYtEeqKtBXeCHbQfWJ6afwFeU22esj5nGEn5",
  "key8": "28XqU2y4vQKwcMKmdrgJALZSyYL4258TLhzT1KL5GmdTZ1Wdz6n8MTZmMXy2LuEsx4TNgG1g46jrDC9JV7PBTjyH",
  "key9": "41GL7uSvzA6fq8oU6AdhLAsGM1kH4Li7mWpShGGZdxw8tEL4Zw5CeZVDEjmgMKyEbXtMN2CngYZVufi4bMU1eggt",
  "key10": "5wEVDonygNFNShE4bsTiA4NFsk9H3D2zynnbHXvHXAyx1UHKb9CPwFEVDg8ULXKmekAEEwQKHLEAf9x5YdFPSNAp",
  "key11": "2yuvrogaXWU3vMbmpfPgwywvptAYn5Nxq3qT1o9MCJ4cr5oY1316tMzsg7mwwWchMa9KdaRd5FxDvKDkn5vfuYd9",
  "key12": "2NH6KDFW1Qvy2J556qzJoykFUqkBiEEcdM6BWMgF3cLNDiN5hE9fujrputmXbw4kWcEaU1xZgYjBevzuHpMBgUuW",
  "key13": "3ZqmT4tFXME26MBzVuWpLMQNRKYTruMMT2gPwMFWiyt8fbgnFs7Vd7oDhS3baHbC6cciJ2Eghg9U7pewar9RJjcA",
  "key14": "2WjvLH8MjCMRv8LqA6pYSURN8kZ3A5T6uegbb1KqDpZgJcFoemftbxdwfYHHdUrAfCBuBAWzoCgKFpku9cBJxZWx",
  "key15": "3NryBh752f1ZuB2ukH5YTbqxv5CteFWYKJANe9ioCWiQADkok86FJ2mVvc1V18xao5sgfh45o1KtyEbobBDLkmrp",
  "key16": "37RCG4UJ9pQ7d4AUxq2uDLTiZpffVX1WcBusj5PG2HbehpmZ3eWAc5GVQuj3aTzxuXy4DUwWgibjKdrBU5Lm8UYf",
  "key17": "4aMkv9rLfKW3sNcyryB6gXqTG727hKNWSxaoCpFAxF6Kqv8dgJW7YyrjaqabxhzRNEMsF4LGrFg9ctfyd21dCNy",
  "key18": "48Ga9Wzupce6ABshbUWFa21crDi2XWc622mW6BfvLrvYpSQSKjNxw2xkaFeemDVXaivVZgvgVfN9J8GzCKSpMDSD",
  "key19": "5hZ82ntUQCKgQotTB6RRs5EgT2BaxhMoymrXt7sBhvWQDfRPB7JNhoEPF5RuUgqikfZmnNij8n5qjoE5QbHAjbCB",
  "key20": "59WFX9A5YMfZkLrowovyYpVaanzDVcm51gEBayCYq6wJWLxgqW7vBDs9ZxGdZqnJaoAFjhXivnLRSXyyru2Jz7BG",
  "key21": "24whiDQYuQ6UXktXrQevtESX5d1XzaLiEnYurjpzL5VwAF3CjvwafbaQ68QsmT1NHgiD7QEbgQJ2rrfCGb35bA3m",
  "key22": "MRZtGnkXRLUNaxZpc7DfV9yDHm3maVuX2D5h8xWFCAJk7miiK2rv2NCC2qkz4MbLwZhTEqMMZzTsFSbBymgZqYw",
  "key23": "663mUBrChbu8E8SmJwLPnmueaFrP3quBdsqzfP4bhzbiKNNSoeot96e7iAP7c8w3wtMS6p6JwNWbYu4WJCtYZsfJ",
  "key24": "3MBXezwfzhYKVFKsxjeKzAKbFC3BhRN3oVQsJMBaprqMtGJtXQ8C1qhuRk8VqYnX8ryjtbiKks7Tq7G8vrNggDvn",
  "key25": "3TP2Sham5jdvMFwPA6Ct6JorzyhpXRDDyqRGmRB9bLnNeERFmqRCQuxUhDgbm11nzsvGdbqvEw4uPQ7pKZAc7w6D",
  "key26": "3E2BDKa9WqS1kV7vTjRkz7voyfMAWxzhewScaD12emh8T6red4pUwviWMB3rwKg2wGMzSyMFiuuFCeHpGBMf6FsS"
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
