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
    "28nR4AgdJqksf7wkHRcJUAF5U2t7EdoZvQVYoq4tbmy6WztVHM5z49vZXVWbQqaGjTteTGFJouFkWY9jEPdFpjj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rPe32U8aBK6Mj7ajcHtFjwmkqwrci5CaddtGLizd6fh2CTfEAAr31NXanXnJFj2jhrnuTtSNy5rzBrhNVUaqxW",
  "key1": "4S2CZQenHKf95w2LvxVXuRb8r52L3e4t1LtV3MnzEic6thW6ek8QNU1LpLCbfqs7SyNKVhepcDad4pwNdW7UjuHW",
  "key2": "4nBLMVYmJEfKoQ7XMk9EhEz2w6y97VoeRrfKzU4csCaSyvN38J28x5reWDWYN1unRS8FKgvGPfwGEaqmzVVAjL25",
  "key3": "32jsJBw7KGfJ71gNiJAtaXoG5fm6vNuxX8i3Cx4sEZX58a8LcXYVHfdLd6zUBhne84eV1Y325DcF7FSL8WQpscAc",
  "key4": "5eieSHowBvje9xCrS82GBXRzoGwvD3x4wPytFvpwkKMwuoYEVVwdkRz9aBcWCiKJx49jhqUNbfS4BhGHeRY2U17E",
  "key5": "26LWQcy3kiD3fKsn62Tw77ZeUiitDRdtNxgc9gD5reQXTvKxRnS6DrpXTKHjGNM8NNi2zmzokfZYLjBykvJDTzu1",
  "key6": "5kbK5LcWQDEJJ2i5QQ33eZcvGUajS24btpwW88cLRjiY9TxdakyYmH6cmu2MRwZgGKQCvqRzCAtdD3H6ryVdpQex",
  "key7": "5PVN4rdUJr21rYjLxDBQ5y67sTcb3LzssYFiZK4HXtJCGZywRf6y3Q2n74doMWFKHyzAH1sgM8Q3pS6QktPg3iWj",
  "key8": "18wBvwXXxisnp9wPjSF8M1iDHHrvPT9heDhm5secAzAyNWNNQnLZKjxQkn1WSD69inGcjRmcYWfEXJTFpRXdKfa",
  "key9": "2yufqrvmbyWNif5MzWe2F2kAXXFanvL29qV51erZCjgDQY2JFn5YAe5FLnvoKTNm1xnGL4mz1BJ5kqL2Zge5vNV6",
  "key10": "2MDewzoR83eRSrN6dJUexp7yuJE6ku6DgsT3Erjeb9w3aPzx1p5uqVK9uaM2ewHqbUo3GJs6BUagBFzF465uXRuQ",
  "key11": "37hSQDJVCbyg7CPFAew2YAthjmHkKytstZFEnkiKD4q2V3zJCeyQfcj2s8QwVUMu4iDdmg98y7HaaLkXu3pu2ndA",
  "key12": "3rztJ2BHgRAx4sTFjMiorZ1Wi5NUETZu8TB2neuC6BmhYyr9XdMNKuXmfgFmj5J615SnexBRzKoYqai4KuTx54r9",
  "key13": "rYM63yAYhQNxs82ZBEaXnysY4tDmpcCBQNknFwcP8HqmWnpSH3G5ZXAToD4iMCHDBZoRYk1zCmErcf7qyy8kb3P",
  "key14": "37N1Fzp42zR7dMksxfJjwzC9uqewXz6XSsoAv2cWoXbAZpDAb8XpGzzxCew9yEF9H6VdNxo4cVmQKG6HvMMWM6iW",
  "key15": "4KzsTcADydmdx2DbY55mCepR5cP1CQiUwTpcBJMANvFeuUTJHvWcREcvf7e5xY4RfRdrta4TkTYWRAsSrS194pfL",
  "key16": "5UVQhmAhbJVLvZd9c3u64uSorAwDqUD4RGu2UpWMpRhEidg1yhyXHcU1gqygMBRPoEdpqC2NBB27rNPpYMq6Rnnu",
  "key17": "3zu3XKQFYvcEL4oszP7eg49Z6thdFYD2cQP8EFCgrs7yPp3yKDDndWKFpLVVfSFFQYUcrPM7uD85hBPpjiHNqNgp",
  "key18": "56wXYZ4uFmJZLu7ugEaN27n3odS9EdPBEvjjsYPEG3JYD8y81Q7cuTRL7T8F9fcxdfuMLNhAyJiGPE6XLekRrBJb",
  "key19": "2eqqSqyhzxy3Ege81TqXRC24WPMxuMDqfUWKZDr5XvAJCzXJ3WnsY6vk6gGLMX2PvRP3S6B5mkU8XNtu7U68Myey",
  "key20": "4SqTQHUkSKx3VG9BVcTp7wsXmns48GFbw9Zd9miPbNh5shjfpzzySSBpU2ZkaWAubXyhHvR8gcMMN2v8PMsJ94D6",
  "key21": "4Be2rVHTUKMSSb8PJLfCEJJHdCU5DaKx7MN4w5CM7WsHdSUQgi7a4AFsMgJ3b33NZfz9cQcM6JWY1EhFHqS1qA9s",
  "key22": "57CmgRTGAUQswz3HeayHL8nX1m1uZFdofUxtpTE9C9LLhpTrfBUy6HYU9xu6YJBd2MvuiZ3k1yfKBzMnjBzQ1TXg",
  "key23": "2HE6JRTPWBaB1orEvHw6sXKERseYLQLTF5GxQa34BiJe565zYjcnMHYu9WBX8YfnLd6CMEH4k2fLng3dYZbQYH5m",
  "key24": "wPUSJEMomXcDsZuFUCD52ziXDcJ2kRKiQFByhpW4bAwi1RczkDywxJci6brSpktQG3pNuUsmNWftfggd7JR1D5C",
  "key25": "5fqreABHixiDrKAWGiJWcKC5fSBFcYDtLLBdeiry5FaPfki1dgXoQqgQjk7GMgzfTVmj9wemnUaZo8nCvjbUmJ31",
  "key26": "2QQGSjcHYG9Qn91cL2ffPetmGsLR289hRDFgbuUzRNTCkQ6W25BdAhBQEXzWbVDeXQZNrbTKtctPRoU57rTTR6wP",
  "key27": "4rgLWEy5ruJ3Ykvuhe3diu1CDFkAU6ZzRjEGsoc4V8RffShp3KPBP74hUxDDxqTQS9Tikncrtk28pKX2scwrRaHg"
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
