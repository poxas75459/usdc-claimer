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
    "61A5MjJHFcSRUBFA4W6xfPL5hurzoemC65K9qYXw5We2U5cidSZix3guRqMN9sAE9s4rMj8QDwD9yzNn47DtyAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzpaD3H37ghr2cWmEy4tzGz56Xx76Jo1Eh7RzhcZQYkRRPR9vHdYC9ojcx9y6VrNENUXWjT83QWVh9RsXjtwHpW",
  "key1": "3fF6mpQkqYhNaFok2wm7zYmcJDc9f6Vw97a4cjPJj1SieTPBUbBtHUXiucoUDhnVzdFrYkBfysytgJ6gN7pCjdeE",
  "key2": "56X6yBVZi7thkkCXA2d3F9JvFMuwaVtJqE2LyoyfhM6pm42GzfNd7wzGSASw5g4Zy2kiXo3ha8nVbaCtCT61jwMd",
  "key3": "EiTPDM3tXLGjBLugNN1JeULXx7NmvcN8oR5GFjHJ1YMkjAFvGiBaUZ26Po3J3SxBhwioufsQ7q6KNmfdh8U9o4Q",
  "key4": "vW6RSKiioC2xjuNuDoe2xGc3TvQYXsFgxgYWD6SCWPHRiuqiYRQRZogADkVnWYAmofeTx8FLUJjoYyRknuRe2C7",
  "key5": "2d2hpYcUEVwG9DXesFcqxuvc7zpVwX6BfRCyHJcn4pxJg3h8BvJmD3Y6s9SAn2YfoW4DxJdvD6jbinMoPn4R5s7Z",
  "key6": "4KAvGHGkFyWtaCjdFmk85oow9hD6qyKsHN8YSMugRcz9dEi2KAS1TMJ42QHtKbaYJ3Ffjvx8gPhd6ps4v2a6g11m",
  "key7": "4ADEuFrkZawTfsipRhvUR5zXX6CTQSUCiaXQzCMKnuK6cHZUnbEy5wYWrL15Gu4tKTmo8eJSzMFgD6zxV1YEaUCt",
  "key8": "34ZGA35vpLSkESPYRrMNuzQJDZEzc33MVVwHBTMKJd1CMisC5cwNe1d7ivSXR66g5oemaC424251Ha4iNi74fmTb",
  "key9": "3aKtuJvEwcfx2dJPM4AvPA7YGeMcn2CvZEfYVT3aCSzsYr8b1cMtHVB1hofH6d42Mum9oGjH1AqCVwFUEEyiqY2j",
  "key10": "29oyNKJcMjLabimW1xBknKCASmVj13LX4uKzZKU8etspa8JVw9RV2UQSqyqAho9Zaohv6MfY9ej8L3EL6EcKnmtq",
  "key11": "4k83vozYjf93kNCs1ezj1hEebagKQkyr1VrHrA6h3JQBuDnJATsdSwY7hbffmKRBkxK3XqcoypxwQw1e6g4j37gN",
  "key12": "2M1vPgKGJMFUc4wNJJMd8FJ1BtfpJc2DS63XUhuVkWaeB2VETaLSpZeLXKK8G19yMBuoEMY3bemgRs6JDUenJvho",
  "key13": "3KEwjncz4kvdq5mAMSWptF91SfcsK21o2EmFLauovhxyhpVAe7nDuMwVML4DfMGKiMquvkEeLjCwKCJzg4kduGj1",
  "key14": "336XdfkTnV99RwCEz7w4dphsiEj9vdc9zWe9ACVXCeHLeBCxn7YE56W56MXAdf4Z2zodVuSKGVCt2AVHfV4J4qXw",
  "key15": "4U3u2bcHJiRyJuxkZtfiVVDcgxsC7NAhwuwdBvYZP4GByAymYpRcJoMYutDUNeMR8RhVvxos41ZVvoFEKBhdxuZd",
  "key16": "4nxJyxzM3WkHMTZQkLcpCucmkG7Y3YvhBQKEucXNYdU4wYzXWBQiRuuvC2YzJ1PKGjDjUc3MTEHUi6sqhqMAQqe4",
  "key17": "aHLCQmQcEUC6LsjmGFjsURtgAALvqxxoPNAjqDQasjqKjEQd4Fq6RatVdFvCMd5g4APaDY8C3SMXemie8NngN7b",
  "key18": "yAL1nghD7ZAZLo7AapM4BNBeAcMUhYwiA4tUhAtkneKfNftDtjiQpMMBDwXL6vAc5P6M8JGAXynVVju84cvFKzm",
  "key19": "2eHxzJfrqPzmi6P23JQYu7NPrfVL5VS2cwMhom4SamGoU6xtS9Pj6fw3Lg49t8QJQGU5riEKWpg44YpoVPiYrgHC",
  "key20": "363b7wo95XzGCaWjWpWEV6ERXt4p2HhLipRH8b8JtBHjpSAFG24dhTdMipaLy4aYeuDBvzjeWjZZtK7YbbF2uvWM",
  "key21": "2bgUhN4D5vWNCMB7eYPRWG4RBrbZf14a4BQqPNJNPhQj656FvtkKBji5RwHL9RBgXmXC2Z5niUoA43EAqqifJPmU",
  "key22": "5xHNvS9Ng1GpyvA2BnpGE3swRAY1jpY6NMehgvwhAV9EorUET9DD5MZPcoFL7zMKdVhEjMfPwP9YH7fVEYzRp4pn",
  "key23": "52MqpCKiQkSR5zkzHQ3fKjUQ6UFanvvp4p8RTApNWLHra9pRPc7rPWM1QcSmc58LAD7KPpJ9Mb5VmeH6nA7QHzsY",
  "key24": "58igwLyL4QNxioyLam8SfHqfNQzbmUqAukGp1WvezNmsZTopTfNn9VbBeHABZ3reE665orLrHvogbdD2rzHv8wNG",
  "key25": "4AgiGYdtq86zWZNbwsq9pj8Hq2TR16bxia588vdLWnjthuWg9WkLFSgHwi6AbY6f7VEnaPUPdq2svqYALfbgt2DT",
  "key26": "3RAYWUGaBvNU8FiQ5mJ9EdnzRD2PpUSwiUZgpfHyFa7HzAKLzk87WXPzTnLfYVJ7byPM28QmM4Xti6FmhLbS85s6",
  "key27": "3v3t8bw4nU8auZuBZA4DKSXCvP66DRG2idYJBR5GnJ2DxLrCG52NjeTqCuMphj32gTQ2Gi796CKwdPSsHUWSFGz8"
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
