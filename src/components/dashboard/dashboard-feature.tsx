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
    "2JeTgVfof4xP4nh3X2gcBG4LBm3mzXM2vABjCjwR8tMg9CSzG1p1Jmw7WtAFhtvCKLeezWHncqoWkJN3f15nJhBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UoJbNQyhGfkGViE7oTHgd1A7CNVPxNJ52NZoudQwYqnvMjeMjLtEHyXPi2aB9Cn1xVDQQTettfUenEvY2kMgHir",
  "key1": "5X5eoBakyiRqPBFwzVxA6wr5pmnJx9jc1sS9F3wPpvsWyzBLxSF75txBeWLepriXFN5zQUimGkrBYPx66nP5wZhB",
  "key2": "5xNmmYfaZDb1KP2Y91FVzJ9aVvn6CwJBq6c1j5rwDhFTwAWi4MZFpPoNxxpJaNCwZwLZRbevT1cVxNjbiXPdpTEH",
  "key3": "4A1b4xGYaz1vseWhHi2Hvb37DMQzf2W38zemaDxvedu7D6tGdQWNrefSWRETHF5aH9d8hrgni9Azw5CQxhDNRQN4",
  "key4": "4V4dGqJHzTvQDDBFQWFJ7ofWo5cWuRNkP4a8eZJ6A44FdvsszVDNdZDGXJygm5KxT745f6cDV3YwtDtxe3wNdvK1",
  "key5": "2Am1EiHQFFQT5Eh7eMSWBuepU6iarTxwwKPotVrvFMEhbXYEgC4Kk1kYJQQjYgRFFrmFTcXwm1NJrdaVZx3Ge9n7",
  "key6": "5TJfVJWfthc84YtW9hKgHbrhDVD7LNn5SvXdtnKVDseA9D82aLMgpqpggv7RQ4ng8Xpy6KWyAmRPypDfdiGFVzep",
  "key7": "3FL5xDdBoHRcrbEhd1o8MwfCygHW7QjxVJitigtSwN2yrKhojq1higuMYd2LZkzrt4s9zmVsU2T3EPfLYHbRP31z",
  "key8": "BnTZTyC7K7Pdd2SBWDxn5ZEJgbZJiLXn8r4Cjywg9D2AXQZVmV24af5q7VL7rG3vXfWvgKXxYGiEhXdWjdFKn9C",
  "key9": "2UgirK7x1Z28siyDs2W96jgQspyE6hMVhCEwPEKLL81NXggVj7dzoUbn2RPcW177WFNZyfpu6KQLwMLqaa3pfECv",
  "key10": "4LJtXp9xKKeoV36Ug5caXovQW8XHjX9aTYTG55aNxU91sRa54StL5ANRmXB1928sHmk8XNdV3viq62NTeHMWmQkj",
  "key11": "5s24WkD7DFQyjeMPwWVYWWbXQtFq61rvkM8Xh8MCSxnDsqAunjXcAHwttUduMXJVBE1We6vEyL4Kr8cbVtD358ad",
  "key12": "jv3SMnPuXsGGzrmxygQ1V5FGmHbArccrCugijw4GbCTPZkk4Y7conm1VvWjADfhhkZ4Y7kMkw24aW4SmmSc9x7W",
  "key13": "5ggoeJrnghmDRFpikd1RWAPz8rAPzXfuZogMXXTnnXiCBRvACNMptdWNqD4wg9U2YdFgpqSyfR8NET4WrPJfuZem",
  "key14": "4Juwa1yT9rRwfy5aM3BtsBTxfX5WFjgk36H1LdiquttTccj2qSmFZe78SSrW2JCF24EQNS23uR7wJEU6Z3UVhyQ1",
  "key15": "4Gufk3oxH1c5htngmGtW7GZQmkNxYdDzqp8gkTQ4YfytyhmE99hsJuUvWxjsL7SMB58a2pWKHtn59DpTqByRCef2",
  "key16": "3Jq6ymsLJCE4T8cscstqnw1j5vQna6qxvCYkVV6D2EwviLnyNMjx1gF7WPYj5wFj32SRBTxb8X5jaDkRSEb1YFcL",
  "key17": "4rwNbjdhFtAPbfx6Cu5PWuMoUBofS6yQHWxpzAzKX9nDmkKuPLwXSJJnqNAnYSWaAZSnkPEud8YRQKS1vdJG8f5L",
  "key18": "sRQCLNmChcFPhbFKhjzfs7PtDrRYXKWGTEobLy8NtT7nH6Ueoxg6L7zKbMMUxzRVk7u6TT8urQNZjbp6a8RQ6CD",
  "key19": "FWmKsTj6iL9qDskw2hQJmCwSAMeHyW3VezdoSH2B2FJbM9fApH3BKhZdo8RZRmAZ6vXePitDokq5jyFXLfoDhtR",
  "key20": "fpJSQK2MUicwdLdmmJxPVtY7LLxa9Yi8ySS8PVt3hy9e24nuZxqRipGyzQhrRE7cKcdTTwgLnwJKxiYFtGJzMas",
  "key21": "3aXVPJ6NkSQX68xRNTfEaByG5Xpuoj2kikbHz3nmk5pKNydH8TnR9EPgutpX1feu7Yy5Qf9Q22A6GLMMrNwpy8Th",
  "key22": "4S2wmujygw9bumXaoDL9WvxT226sfFbQxNBfuq6W5gj7CRn1TvpjqQYU87oTgmf7fvcsyc6d5T2UNK7BMhvHt4Zd",
  "key23": "51ttoZxuKSLT4ZSazUBrB36eHNbLuqQAcaBVM175nnYPhCzuGDqcgQnJu9VbE4QbgZmq6df4YEG5WWQusrXetGF6",
  "key24": "4aRnZ3yNb5sRbTBDh1Rg5PxNLkf7YVeD8gJxz6ZAfRdPfAKEALqhgLxwyLQi8avpdDiT62DroBhSLhrpPSG73UcB",
  "key25": "4AC9Unr6EDFZbmUFoVPgQnuUbC3Qn2UupcQymGjGxJwSxCVLXgT3QkTtoqh2dv56pdeAXad7VTntFZRmJgz7fsq1",
  "key26": "2YXfuzU9modAYVAsag2xmgfxFVUXqmowdb5CDW8y261Ug2kJeG822gn3HdbFC9tLHozBR2isuVxXBZoSkUr5k7Dj"
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
