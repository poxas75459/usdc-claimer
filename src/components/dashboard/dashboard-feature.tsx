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
    "538qAjVTjg52dSufcfPuhBmj6b1ny8zrLcXmxfVvZCi5VGqfzDGQkbqimdA86Wi3w7FLHMJN3HLeeNQwECZVGpHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gg7wBuDB9EerN9sWZcJsuWABREnfz74w7wDTCSy6UuNgQ9KAZkyD2JMosR7DYk5tpPuL27ur4S1xMUknpY7vMKZ",
  "key1": "5JF3tT5rcXDknJ72yA4tadqfAxmDPkQeWqPyZPQ14fJNEWpsLEj7mkzyXmMPoqytxZA93U8N8BJkBnzSBoSyjLjp",
  "key2": "42WJX8GvTYbFtURJgqueMAxP6E5LaDdiAzLJ79h7GfcqfgaztKuJ6eskxp19ns4u7v15ihyYdzwsWEd1payx6JXw",
  "key3": "5Lz4JqTdNP8bmJ1onSLmMGqWTTYUbvjSjKbTryraJx9pPqrNKyQoGUZytG1dQQTqcqw19LbeeywkGRqS52gX4b2v",
  "key4": "2Y61g8DPmsx5bvgciP1S9AxtZj4viLfLT3GCFuSrHKnwvE8ubucuJkAhysq64MVbfS2kbr1nEmjdcGCr3jo8zJyX",
  "key5": "4ZRSmdTV1g3PaAHSXX2D5XQWwXoN8WP1faQHqPAcapgEsiaHRBmApAVdUrVvb8A6vi9xoo8szueCPjVYiS1w2BGy",
  "key6": "37pdXyfMDhMAyRg6WGYeMNzwvjrv1WPcX9etL8oZzEyiB2QZpCtjLmsJhLHqFDRH7zbETWD9RR9frKEBfwLT6AoM",
  "key7": "2X2H6YKWWQMzRZt1QzhUc3xcTTjoMBZPn2fNr3LJUfL4xjNYuVVAgqqnojZB9D2HcFvgvcJgD82uZihaZ2GwHdie",
  "key8": "2SjKq3GwiKKgBRngwvYzCQQ3RCDB173dKjPinM6Pi9eNWdYbM7f2Z5ZyBzFTUMptYEuyj52ShYEscHuLKcj7nbvF",
  "key9": "5A19mNRx2RbK2j4vHBLeSUdJFvyDmjfqfsa9ZPqmqFAqJaQxyYKTm8BmD8T4HzK2kvQk6tBoZuwa9pn8URSvYv6K",
  "key10": "3bkGthf92r98fHiEqNRge3PVD56MFBjEQNzZnodzXxXEqGFwkEL8QVjhQcGXa2cE9htnTyCx83srrw6d2yBC5EDW",
  "key11": "2jB17ZmwVQbomb8NdxKbcboEgnfUEazXtwZxBj3r63dVDpD4ZNK7cQFF7nT7TL16VCgQx7UZFZ2vTXSsQNrsq9wr",
  "key12": "4hDVyDQvgESvS4nPiPbE1wwsznLxRPAgRH3xbm1rXTvUPTGgCTjVEHGVbSMgevoxptNFcfu9Vsbj9iUjkwuLgUMd",
  "key13": "26T1eY7dxRfuoRQbdo438xvamELzkAsm3U7yxCyVngbL5pQemUL7gH5TVghYSZ9ZfAZF4GZNYt5nuNnYoEaxk8s6",
  "key14": "2WRQTt69taaW8Pfoeo1Js3ypo7ELpi214W6oe3UVrpEgwidb9kqrnMhfDbn1wNxNsMwkDCo1iENVw1QL9QJJzd4b",
  "key15": "3qYPw9A9eaX4i6o8M13iJzf7HJgdJRJemEsM4sCBA7ujU85foLq2BZWr458EQtrz6oUpVt33WXxKxvEkpZ66XXiP",
  "key16": "2vdjddS5xVTMsEDNmNUBbpRP74Bo94xPmNkeKakJvteoDfXCftFY5xcqKsr1ZafAiyxREZjJFqxXfYmgWcYBRiG4",
  "key17": "4fKwLpYNf8BbvrsmGUFyYcuLnAfc1oLWf8biynqDzK7EsPAMjwRYp2ivUZJb1XH6Xj7tx2J7scRGH8focHcQMnme",
  "key18": "545pMbuAhWXcK5EN8uHJJ1seQsW1zKRbqrQHD82vfpLgXGxtfGTPvj349eaeggH9RBuiC4TDZApyV4rGtVVjEnzA",
  "key19": "4499xEGvrJHBTYbix5aJ3X5yfPTMM3ZLGqsHMY5YgwCZtmUPQFPvG8PgqKt3DPjMfpjejYa4RYZn3s2k5mnUrsQ1",
  "key20": "4hPWDMZ1EyJqPaKYdfMiizt5snj1PRiWSzCZYTrwm53WC4TJZ54AZpGXQq7mCj6ccjSZ3CByB8QTi9NrMs8iWPqh",
  "key21": "4dksV3PH7t3Y6qdj89EjKrm55Fkv5PgZeqVJMwyB8tr3Q6aU8SCAmKRhT1gvyMwqALsYeKqpazsoNGQcZtqt5its",
  "key22": "3nrCVWtUAgsyedrjnHfzSFEARBqu8DNsqnDrww72jwGEJzoFbDeyfUB1dhKnZ4WDGxJ63CkPMm5X3dai31CPSYB8",
  "key23": "4QsaijkDtnG6BtT6nDkxuxkk9fgVdtSWMbqVtUev7pP5FMvMdsQdoWbY8avQL7fBvkBHLCMgK9DBQdvDumeMzcWv",
  "key24": "531NYDbnjAyBnB17HjM111ujBTZKpVDbgdH3gBkGUrYx6CfXtBNbis3jtE49DPhoAAYsjnW1H4vNiPP6i7zYvmKA",
  "key25": "2tTUpYibJiKo3wipk9pAHXP5SZGEUbUcGwma2Ex3SQUs9TGHNzTzWZzpWP4J3pg8a8HvUxY59NdUJD7gmy71EZds",
  "key26": "9DdD1qAoFKYv7W4SB7KNhnKxK9EuuXWYtWMHXhqk4dznS5XFADa4HoGyVTumEu14JeMnrpCNfU51SqG1fUaDwhi",
  "key27": "1XbBWsm2UDscynhD18F3maxX2ErvSUKFFa3ewF8gqRCTgCKtDiQ222KqFjw51JbyJaZzEhsxD2obfCgquNZJsoy",
  "key28": "sRFkzvoLoTNbLVevgWWV3pL6k9WtpicZBGq7rRvjEGLTn1EGM3DfGB5vgvHmVpcDqwcVyT2ZdmvnSJWCeh1cGmf",
  "key29": "2RU7EaLhqMssrNXVg1vvKGVZkJtnG4UFzRQH1cUnXCmnPG2zB9s3DXSCRDyBESJFA5AtNZ3YR7iWry6198fgnaKP",
  "key30": "2e93M9VuztYuf91dVhr79aFBXAgZkqmMnEyfPi3T1WoHPmCkk1ZCM9cERxb3McZxWyeZoToEQi3qtNJp2oxBuKt4",
  "key31": "2rDz8jvc74aJsTxuLwB7c7y2DiBNSmrNsaFduZssmZM3GsFgSeZJWfpk2QqvpAk1U7vAritwGgTkitqTCoPPEnob",
  "key32": "4k8TBne4xe6LDV6M5QS8GEc4KWLKskmXAL2Jyc6pwDoJtPMTXqnzVWej5dfqhfhPRszfef4GQkugGtDrb72zBP55",
  "key33": "2wDTybcKh1ssB6GjLM42BTF9tJVcBQWmRWoShf7i7EF81S7gBjL96Q2KXzzsnjtFCmwHim9zFAqWaMEqo4QmNQUa",
  "key34": "2e5XeCaNWYeud4y119gPXyp6nR85bm9uvRweiLoGzv2j7SFhRqRCktvYijMHgkkHbwN8BLhpxQ5qjDg4gkbW3k3V",
  "key35": "2hfAUgGeRPUN9pAJALyAcqezmTeErWJWCEtwfCAZ8Ak18fB3crj9DojzfUuqAZcNx3xV8QDuE31A8R6h15pWhvfR",
  "key36": "4EmWyRBkM9EBJuiyfY7S4JBMZgAnViWi9niXhSGvFoq8QFP3EU25fPBnnrZppt628XEaFcKiw9Jv7HjyUp8x5VUZ",
  "key37": "3Bx2qpxxA6oszd2A1zMnGpMZx4fcfr8cYDtDcem4GWCAeaV8M9jxewL1Ls2sifrsBpxojHyCxNi6ysx2VYhs1LkE",
  "key38": "y8fUnkdSp3r5wpCXuSQWQVRpMobNuFz3VJ3DvWNRbMiWfJ24dK3CBCQ9uz9f5eiisUvFwHFk65wCn2VcixK54RE",
  "key39": "28JsfLHeqCRUhaar3oB2mHCazBMvoJuRsaV1DBaSpfyh3qAnQt8XH3G1QKQMaG8ZoJdQESWXhLYVbokuhuDjV8vv"
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
