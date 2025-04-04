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
    "4vkT3fKmy7rUAWozvuNDp5D5MzS3GDzz6K92UmEfCyXBes4PmdEKVZbdzKEmgW9TS83cG6fR3xQE1wnFgRA1Fcgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNVrS8fzT7cuZEaFEVj97wPGwe3C5L15GEGtUSVKGwFbFjAbxnfR1c2nSrMUdsvR492XPtREU4ztGzwUmKisK8D",
  "key1": "4cuKR7D1HQQpC6ss4HMctnMBwFCr5xNkMUFnmrNkdQxwNDM8PGTkkqukYz6d6FVmo6q5FL4SjXf6kUCVSzuZfuQ9",
  "key2": "NUMeR2e1Zk2VGKn8tv3Jf1jw8DHAi22597wnycZh9mHAtrZYWA3kMxyKCQtMZodAe7FneZQXdRsDypq3CtiRqTM",
  "key3": "A5LPfxan4a5yVZgEQ4dS36qfsP5sT2gu634Ce8fHPJjE4rhTJitnV4H5vy6ZA8sj6fL2QKsFY1XdfUjKHBVH6fA",
  "key4": "7CPmtC7z4Lzpyk64Qf36eb5kjNRssDEhqXBTkqdNnsVVESbPMjdKiZTX8vvrCZFBhrkq5GgSh1drvDa75zqGMej",
  "key5": "52ZARH3pRFMZSJfgkgZo8Wxzc4BuSfsL6WdiQum79NCZeQ8A3vT6N2J47HMQVPr5Q69qQqg5W9rog4iXvWcgCH7N",
  "key6": "2GcGVAszJERtk9D81brs14fSJsBTX7NKS2oBSZtzZTKDBh7v1ncrVV4M8DFehMtLUGfrjj5Vsj4HpCYdqKGYyEsn",
  "key7": "4W9FizcKCCWwLuoTtExjPbQAW1EB4Pa6SVc2pzRpHpxtcdcpUf7hvJWuSn3g4dbNpibBvubGKA7aEijn4uesKAvV",
  "key8": "45YH39MNo92UAR8ZyeLwYqGutAGojVACVwDhn79HH4ZJ6QXFHeNxPSeeh42wJZfLkmiczJxS1FMGuGduDPq9rFi9",
  "key9": "5kbXpkWwJeF9RLppX4UfFTeQxHqfRChvZCFuSKC3U1FpgYASgjtu8qvmdCe2ya38bGqYbMag6bf5CAoGiQsgAUcj",
  "key10": "5LLhgisMGiEXQaD4Wpgkn1GQ9DcdGvK5Sn9sNczR5T6PWsDr6ed5f6v5LhyUj4BsXEqfnw7b52KYryzA5MKBhUQ4",
  "key11": "31SKnrsv6YYFpThhk9PMVqjGDgSq3Ue2K8ctLBKnJ3WU34Aw29uJSjwLv1s5H6B65sHv8todmrNiVJh6nGXawPRb",
  "key12": "4nbjCsjwFszoqNurPGGapPpGWvns18SQqFw8pE7ySG5aqYJJj8KyUaF2dyr4JGabkgQzvEjixzFjvU8xGYFEEr56",
  "key13": "3gWWiwD8Fi9acrVC3nksMj3Z61VMZHa2Jpk6aLc6ZzrSP4M2gy6kVFdbkr6KwKvFqEEHTJsAmiCMwqNd2Xxku6Dt",
  "key14": "46dEXmjuvTenDfjnPwVCEwJUYgyxhBvW9NUv7ZeWzuHt8PkJdKqorwjrQGdWuLCnTSx6DzPZZrhLj7dxhN1Ehu2H",
  "key15": "2WPsZiPV4xndCkrfZyLeXXgi9Eq2LMgy5gAxZz1tfVP6azobBpRSQoFXtoxbZq3tmU4ujFu4yMHMyHJvbsjdHDXm",
  "key16": "4mWZshMgL3EfxFbYhgyT9xS4RMvueb2NR5HCLtB73pnCp1MAZ6MJt7wY7NPU1aJZoi9FW5KRUJU8utC1tmEAmEyG",
  "key17": "4kAR53n21ynisxgYCCFrCAJ6aRLh9SPCqJkRJBLNRqw46MCDa5CzAqHnCpFUZCmwiKfpviCVXcP5suEoKt51SsJB",
  "key18": "3v1kDhyQP11sCRcaDTWBsN7XNu6yEsp4K8SDoXp2gThe1JfunaKoUrKiuccmzAyp7mf1b4RcL76vhAVN8MN6YmRS",
  "key19": "4gwe9yksjZVASAvL3121yphbiQTD9RxwSwbNt4GwYQd5DY5bJrQh6LCrwymWwR1VAdyHZEA7FiBXpmv3KnbAWkeX",
  "key20": "2kF6WwjzDtpMzyGr71toPFn9AzczpDeBCZZ6dSqXgvdFAZPEsRPPHgHLCmr6WzUsrSmbu9aFQqFXSNR7hmBQm5r4",
  "key21": "w19tKm6x77m6CDB9bsQtvkdjkjCmWVNYqWs2AggxS4ymiJAeePnprrixhJ7f3BG2GvrPc7TSfe69M2pRw2LSEsz",
  "key22": "5PevXZiYR53fHZJzqL7SrMdgF9JRVwR4Keo9kNLd2X73Eq4nD7Pnj7NTuQWiJcmqDWyQjnJtzdnMSafErcFPL9QX",
  "key23": "37jFDYthHgGyCekNyr7BiDyECNi2fuoieRNXDd1v28GaDh5tSgtc4t4xesnqnTapGxYN1jHnUjRkcA7CF7NRt2Vt",
  "key24": "631GiKm5VCSqT6w4EFZAvJ6R4stjqFfNtFo1yiUJHJxawjTSNH8Y8kjMbxRnqJCMJGpLZnBwLwifNzSAoPfDXeB",
  "key25": "23S13hAb29yq3bv3WNc6VpcxV3T8qiqXE1YqY86PuGnP4MP99L58cjEHiBAiknkj7cSbaDUno1oDCKoxJbWE6seF",
  "key26": "3o4NCJk13w3wHEGLPntju9P6bZ3vwWE1eRXVjZNCuswvEhSsGhPLxRf3Fg8xj5AvVgLZWDLJemUkkwyuZK9t2q6N",
  "key27": "4NvML21kUzBC73JWtmCmJ6y354NwVo9wTUDES5ryWgLHPoVNj8ZZF6fUJsLJLaNsekR9G2RXaWki2trDyLM1EUcJ",
  "key28": "3Jy8QN6hfRgxrj24iQ5AaqwWqh9gAq3TSV5iEnTTGvcV5hgnARL8nGM2VJR71edVo7sAKQQz1oj3Xd7ZGHBcnxm5",
  "key29": "4rNdH5BfncQKxGKHhJQgpUJGzST2EwL2hU2GEAjkp2dsB3rJ5R8CkHTXgUy6fSBcQZq8dG7vpzpcrC5ASduWJv8x",
  "key30": "4an1jhrNGbNSQZoiQr3BmvknEiESivVuph62x8wDwkuXivJ8oqD83YzCELKmHFRNKURGzFTqbjb2aNbuHrboQjGy",
  "key31": "2vyHcgdxvTFZbBGZvG1mk4mk2agPCMz4KmwHUJgzrjMADwKanvC4qvCzqXpZDDvto86yNmBmBhi76yVv9DRBodgP"
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
