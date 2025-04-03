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
    "ZHqNJ7cxyCfUCtyETCfsh8MHb3bkQE5V9vYhV3etVUrR3ijXEs9wB9VQkCfMJmPi7mVRdWXKV3zXZLBVbRFCHVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJeQSfJkJtGUPvJPTjLhA1d69GLtJs6CXAPniZ7LGMsTBaTChT5AaYfWPUeN7pti4uhNDQiPZgjzZFrZjxG6NS1",
  "key1": "Z8Q1KnJcNbAMoNvdp2V6BbJm15n3T1U6pMzmAnKJBYA8y84huWwQuBz1HHoyt3SFv8cunEcVDti1tT4PPy8FEwv",
  "key2": "5Pq143mMNqDNhxkbEsQ3ifcny2RcK7oNcMgeY4fRdZaAGZKGHpPnnD7rNLvEU2bZFyK11jo1vMSeQPog2QwgsESh",
  "key3": "4cv35j9zdwfsDD6ZDivW7EztaWsArwJy2uN2EhRYtReMgM8n2eW98wQvvsZirqqJMmEF8EBY1XKZzQVnxV1E6Vdy",
  "key4": "2Pzyv8raXVZSm4HmikHhMBv8HQjzETaHSYz3GL21hjHWKQ5oRWBRuwKrgKJPC7jpwVjsYkUfWrytBDrDnaZoi54A",
  "key5": "33Wj4ZbY8Y1VUGUhADSLzYt6unZaCWBcQoXNpie7BzcWd8FuNZybPPooctnJhoHGAXDSMadDnktaTVNr7RXxEjv",
  "key6": "4cW5P3hL8wCWrkZpWrytg5Pka7x22tQ1u16BWr8uycS9oNZN8LmtuGAWsqhmhQCTM5YU6AcJ928ce4B5LNmQ2v4B",
  "key7": "PbEDqmVw9wJX3EJQww8Abk6tknWvtuR7aEcBxVCVKHjZqqDCZhwQiWLpJeMbvneeYU36eXMx6donWbqYPdeCzgJ",
  "key8": "4XjeQDqjZE3wRJ1r5MaNMD5o4AxfXpNcekoJiuwTjhd5EniMh6HKHJEbUZu5D6jcKUMeQGEnu3ia4wpT7UrnCNmw",
  "key9": "3zAKZFm8i2CxN7moGkDryf2osLgQA2rttKBY5gMVQDdsNaWRxofdvGtzvApfAJyBb6Fdn9UFkzXDT8yjUad7xZ3C",
  "key10": "226GFergoqySvQ59Rw4kggfuAfwcpecT6LHmrnhgYrJcpdfQuArpbXLzAmydMapebcn87EiHA5u8ZHrLw18dHuGJ",
  "key11": "4FnKaKf3xfX1nR9ewxBQzKpWCPh3eVBTR24ZroyEHbjEe4YTeNNRywJV6d9b3E8BvjzKcTRq8xNkhdpexuNqoKWe",
  "key12": "32mEGSADqaS9i3mgY4NxsWQ5NWMUCmKzL3dWdbVYCQE9EQVsF5nVFRYpHxkCdGkjgPPys15hTEWFCvyAUraoRL9",
  "key13": "5J2FZB4ZGbpkfyxwHfEMgSo7aGKjYGJHzGXbHF17uZbjqNUNfMm3kHjzX2AbNNuCv7LEQAD6uJHTFkUk4oBNafZC",
  "key14": "5ADQU9xwcNZS2i3UYrnWporiTzPWM9cCSPretcuYSKEZeKDT7exETZN7bnvc3Mq2pM2ySLk3S4YFeFntP5WUgLnh",
  "key15": "457iSX9pysmYvtJThW8eBMcDHPx1sMunXBw7Tgp6VAd9syBDpEWZfHZzPMy98sxrS1HnYd9pQJovfbriHspK9jh6",
  "key16": "2kaJBo4oKdvPvZRrEpb9zWyZXANZx7F8GRcpSUX2KiAFXDPLkygmTGLie6WdboLWN2eoa9sRkrKK7NZBiF7X63Bc",
  "key17": "okVrHy4GFM7oQDTqi2VBcrqRF1vTz4AAPqYSRahBKSL5heqmc31Q5JP9uuLycevbXF742bR7R3516wJ76ksuMh6",
  "key18": "675W386VVr6ojwJz9VveSA9qzdBXV686zGkYP531oRmemH79MJSyfoCxffiSG1KALivc7e8xafH1EKs4gL6ru4LZ",
  "key19": "78Y7e5ntrcVty7rTfLx1rxE6HmkwtR1KPekBmVzYNGuBxgW4srxe3cHSQXEAcyYsfrjorqw3jJyNbdQZxj1go4e",
  "key20": "2gqCqHKxYDAfiouYr1HKYgsRahgts2rhBXU8NSx16LNmroNbWh7nS2unJRqL4JfSFrSNQDXvXejDYT6pjp8qtNy3",
  "key21": "2JHd3VKEQoJ3AsqC8ZxdaZys1oPw6mhVbKY762wnXs5kN8dMwfv3cLae458E8aQipUbMxZJYnkFumWwhe129ZLeU",
  "key22": "32fbdgwkajpmPmRHBKBJVNADNX9sAV6DGytDuCPMpJ43r7cZEERCwxKFibookyxeYPnW79Qcct7n6BSabzmLt2dL",
  "key23": "2iaLni8yhyZzDpzoYc51psRMC7bJHDFHydEVXjPJPHyD5RXT1nL6hxRFEeYVHUkfBba2fAKXcUS7HzdgMA3uDpob",
  "key24": "4Tuu1By25z37fggGwoZbn4H2etSFWHKdbxgyz9q6YZEQffVQFZFBR82BQVgKtzRS5qSzoBEFnXjchxBxExm7oMT5",
  "key25": "5wcZy6eLCNSWr9BCZWstNDYUTd5hqUFBKmEgWrjsiguXtogX96ym3xnvim8JbjjKAz5tMENv7t4EwsRpvppCSJxT",
  "key26": "2qmFs6bRz8HCS1v3dLufnGKhhQe9nuxDhCzAEfs3i3Ky2UzwUoT2Ck31GxLBbT8nFm4tW5DkAzSRj1me8Nk8erYc",
  "key27": "t9r2MNPUCB2aBuhpenUn3Dt2uBwSCprdYWxJStZfUDuNF1dEMPkC2W6pJ7eaTRC5JehX8qd1qYbhwdUffufGPc4"
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
