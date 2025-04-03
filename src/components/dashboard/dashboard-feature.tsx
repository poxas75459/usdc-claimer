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
    "2xFJMxktzGcsfn4x72dYWf8WSL5hYhYaUnKzYVVPL3SR7f9NJYK8RhYBX7NhhNQH6bWtMUFxZxYuTetNWMKpFsKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CHf51PqLvdD817hAsKiYBt9QtBSjjdooWu7RJXAuHf3DHWd3u8ox7Ku1okkqEHuzdvpeWQKGMs8vy9mGTxVfQh2",
  "key1": "5xddeFFY1MfGHKsYuS8uE64K87kkjkxprLQjq9JmczCsQKDHErTy1dAf382CCehrMFHSaNWWn63wxrK3gWXuHX3r",
  "key2": "4MdTTdeDboJ7ZWayPzYT3a58T27gKXpCunkziCcp2Ersptgy9mx4D8GhiMoH3d3tGf5JziGcnj2WLvUNfjvzK5k3",
  "key3": "3YF6xGEWupC9jqV7o9DZhSxsBhkhREK4Df8dyAgbsjK8tKatiAbo5RgQz6TeVtFy65YYZmHM9mtkbmZgyaua9QJE",
  "key4": "2q2v2iKdLi8LsQKnWxZXesDK9aHrUXt5xYUiVki4t79cz38Z9upwj5ksdkhmNiiEpiYNJgv3UFeUrXdtZD277S8f",
  "key5": "25knEgRhoN6fX3dtLNn97YgFWXnJRLu1KLBEDspBJi6jUHuP4EA8znA4DDgmoCB6czW8HCEnuhZbEPk8x3z13whc",
  "key6": "3PdzYYdJug41EdGW4rSsdAYbwiNP6pfzrQsukce3GMr7U33JVsGopS1aiQu3n9HYPTeda7nQP8c7feP1Ca7wWtN3",
  "key7": "2SkQ8KvPdKo7ZUHtUyjqZerEMxuafFPuUj9Dq6rgmK7HVvBphx3DHFrp5SZ1KAsZwL5PQtfQyXkhWXs5kGFtTF8h",
  "key8": "4JgPn3Vq9zEo6JGYTaSGjFfXT5HC6Y63LMZ9Mnc8VujDaBJfXfXZQctkwyfVGVqAVQeCMoMLjQTeoLwhobp2o1D",
  "key9": "4wH4JdQZcvqceSi7nG9UnTcDW3FuBtWB4qb8gCpbGai41Auzz3gqiTD61RkjjovD5p8VRVkMEMiEVevqkv3Wja9i",
  "key10": "2nqhwTTU9L1bsShuga6YvubXyNauLmtPDaAZ2N2HivvXku8Q3QMKPwm1ReAFXPwJALmHKMLQU6Jkisq7AePxjDDi",
  "key11": "23DPpSjR3GRP7QzRK55q689LaimLUye8JqqmQGjex6CB6LSAGAZj3h57oX9oqK1qFFpm4g5n79Jc4xLobE3FY4a5",
  "key12": "4SMSvvMcwU6EHQwENkyngHKE8RfiMTv27VeJwt2N58X8HdjJWeaF5ANCvUzMKPLRSuocnF5eNzXgyH6iJpppc5ie",
  "key13": "2ZZ83Ke4K87gYY9bHAtGJAyM1vM66qam11oaMhZv8VsacMAdzhrESRaWkHV38EfVwFhf2PDG7Xuebbz77gKQJ1sz",
  "key14": "Lys6vbokppMaxzWbdVCDuis8pWA7vp5u7nMDN5xc61WGukfkH2fBWik4j3pKNhcUFGzbFkWRKCL8seQFRT7iXTX",
  "key15": "5M1He8Cxy38nfyNHomVgjdUvHMAPeT2v7nHX8c3eN1nqZTWrWdBLQCUth9UV2DDfX2f65xQpYZwG6W3Ctq628nXX",
  "key16": "ncJjPf6NHXE43AzRWSzJViw2dVbWDsFSPhR6j3eee56rh7ebzr5ZmAUmoqh2nN3oagSsSBmjFjYLGuoU1hYxrR7",
  "key17": "d65o3Rz5fhLtw3JzfyqhnpBEwi5e2eFazMYSpiHJaqdAHCJEeGzxZBAfn8ZKtshJBs8bQkpdH6J1i8uu1ERoh1b",
  "key18": "5tEGQMYurp2jKoarm9Zmu8gmPpeEf4vnEbS559xfnT9Z1Uz5Yi8bkw5DAwkUSPhUP82qL7xbXQVSabWVmT5r2Dpf",
  "key19": "2q1AzHWKMAL3yhG5gUbK259VzYk5HmySgRrxwgGbUzPTQB73eeQBzaHbvkr4YwsSy9wY3TVpZYrpmvW4CLAvujLh",
  "key20": "5b48Z3kyLVmUs477io5h55JBbEm59ow19dVaWjeeF3KUcT8SEB7vMNBeJrsYG1vh4KVNCb87mmAbj7psE32DgG2U",
  "key21": "4XZDhNpn7W4nJYZJVfMStWMYZm9jtsNqzx1fGXNu7pCjvwpvXZFywZkrihNuXqXzubVFZggaJwUuueUnhhtVxmjw",
  "key22": "5wXcgZv7erKosugbh9ELJyapig5jhsWuMe6WCAu8tPSrA7Zg2sWuhvF7eLwXQ3eHYdjuPF5dy54jVNekNjXZaVBH",
  "key23": "2nHRN4cZDcFwda2mnvNzXWRB35HXLA3igZkYxaStbRx6bKqpXckc4joXRHpCiyZuFhK7yXEZeTw1KatcgRX5qD3f",
  "key24": "2BjK1Sc877eFrRb7LwnkZw8RsPYBeXbbmA4wN1HH2mYcdRzU9eNdfENKALZYzFvzJcn2BwdzqCCxVPbSbGX8G97f",
  "key25": "2TryK7Fx9a2AzQetvkj7cEgtDNUp3WELcoxwPHSjMMaYdjLEjaCgRaat7t8YRBggH11TJEXTwWQQSyfVju8hxy4j",
  "key26": "26vphxXNTAhm6mYTL1qaMpG9MBk7v1pkQZKYSTZucCfTbyieiMc3SF76AbYWHLVeoMjQxxmmBfncYisgGcjqCwmF",
  "key27": "4zTH7jjYurN376zBU3sWZ8ykDhAHVSDiyd6KAYT9esY2NfM5NTd2rzFmcsgS7HRTXHWyBfNW9YQbeihABqzaAivM"
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
