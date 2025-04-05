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
    "2FZEc3vGQrNNFNVHEuroZWW7ZD6kRt5sLziiCMvAJnzXh3M2YQHHFgs85PK19DwJCJHfr19LhEHkjzGR1pXmL7zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4kwxhYYTAWdLoUFmm14Nn51drCtHPVoCbUZGzvK7cx4XfSVpvLqRPkPbve7thqijbHPtoNewFEq3xVzxMU9aFf",
  "key1": "4ozqqMs2MfsePeAuannD5zXTqyAJSrD9EnDPfAruy6KbGRywQho5dfJwa3h1HeR6BqSdkvgPjfKC5RVtDP622G35",
  "key2": "2qetHV8uuyp48ZCj9Lx4NRJwwFN6oMHacwWQ5TeVNk7iBndPk62Ndq4LrXtZJPvHfbUTvCB4rUnSMtEw37qv4jm4",
  "key3": "QRo1rGnRWsaBiLsSvHX4kv8M131Ke4XSFf9rZ8Yhytv6w1Z76QQVNs3K3vwLmCYxDBPmiybZx8r4cSVQYVZaJYv",
  "key4": "2CBT7mqMcxDQtn9wG7M67kE2kjm7uZ1YE7sM6BKetzvJ4sLRtdKvxbAJMLLFgHyaUcRRirxDmFKKYmNPV76ffYPN",
  "key5": "2nHdPHmXQR7Eg6vKwSszYduJQCnXWvn1JzHNcU29biELvHCJguGdnTu1jeFySwiz6L46zsWGhxmk4HR91rVWH9vR",
  "key6": "4iefu3tSr65s8Nwd7V2Djod4pcNzcnY3hUgnxkWxDNpE4oi8EdMezf9xzN4q7JiNof8zyNWvAxesAed6makGTpGn",
  "key7": "3K1MYp6dfmPfPM5DdYYdbPg6or1Ayc4syGAmQpz5zx4FnnHntLzrZP3HgAgx9gdDJTaFB2VhrNwwu61RWr9UwNRY",
  "key8": "4jTRvcFpUpoHEjHX4ELpAQemfRTeAikRW1AEnLoqhnzQWEmYbEshumcWjvksWUBdd8sPU54hbW1WriMZYNCKSkej",
  "key9": "3VgECzfLeqXG8s2Pey52Hf22DrGBXaMFPTunejQmTZsTgxSaKQY28JYev6Pg5EcdULYm5PuWuqu4DvT9QNYuRs8n",
  "key10": "5zBa3x4nUzit26cftZBvFvKj5Lgx9F74jsvs89jDNngcvT9kd1du3ooKE5SDn3GD39rkY9ztPX1ocP9d6bBaaUV1",
  "key11": "svJTr4thKXhLfPGGT6yKSeMxiNUv693De1Ku1Qjgdqhpxa6JceWh38sxnj2auRxf81dK6DD5TsXV14hzvdnTgkS",
  "key12": "3oT5Ytqsr1n9dcc32p63c6ukNYWJjeggKrBoQRLN9S2YWc7F59STECzw7ZzWkXapMEE3jyGCNLibBkpFJ7aYCbE5",
  "key13": "3oZPb7RusCTbvgrM9rEgEbfhkbxPNjN3RxkHtSTVTZgxCufjMAH39GKSGQtTMvgEobFmf9JrhH6poKLAHqz6NMx6",
  "key14": "5uiGCumKbdT4kW3ayUNY9EnGXpeDpxwVjjX2PN6nX5LFGWvxvqYRb2jfETTwE7N334bT8Pw9KiQqgmnoAAcApQ6y",
  "key15": "9Y91VFineNQ2wK2R15Xy9ZUpB3xRqHv5hw2MfLvvbjHFktRtrQAYHt1jLR3f76RmMJbQKuUSzYsM37Z8J5Sbt9r",
  "key16": "3t1knacScaPNCCwKucV2BSvyo1msg2auWJGjqNWuvvguFkD4YtVXEqNQK1hvGbKbEKhU2DwXKjQE7m9rDfCsuo13",
  "key17": "2GTLk3sGbrppDWuYr7n7z2hbhmokpFQcy6WGhfgqWwruiUN5xfdz4uE8LYeKCAZr73gvBq8ezctNEGEaYprNHdCw",
  "key18": "4mK4mWEaVsjWdfjtPbArxa7fKEM291KrUpWLvWjmxoD8a2DxBksPqr23CBf2JmWAfZLMGT5ttaxxjwr8iUNtUmhJ",
  "key19": "HFt3NJwi89gWNEz97heMXV9AFLvUijUaSDbQTpVDinQJa9rJHZfKyz7MEuuRsmJZp5S7S9oENiGK71Aok8k5VKZ",
  "key20": "2BUXCYfQ5kn8eSBvap4Www3xn534AzFUZ6tnEJu3WkqK4LkVHuNKQp1E9uEEgmoF7c3ToAoa43k6oBQ6EmhVazvL",
  "key21": "MVpWefn47mJodBjxEkiF1cuKBZ2wcfu2svUt7C3RYU7xGYEsL6hmgo2L2eDkJFFyN2cdNbSe8dNyxSvtytbfNxQ",
  "key22": "5MrgNSAZxWio8NSHxg9ySPfuNm5P4Tuh3cLhnqVQLC9bFtsXbwBRruUWhuWcLdFpcVYAUBEk7b5VtYhpBiGvwGd3",
  "key23": "5mKgc4ePfVNfoWgmnysZtKU9qhaUVpQmnUGFZM5YmHZkc5X39ET4vyxBds7h9y4msnyN32MBRbcQy5hutnvtNyGZ",
  "key24": "67P8S1cY5XD8EkkWpcU6dsgmSmXSLhiyaHUoknWSfmUXtkGChWGXn1ZQti4nhkJK79cH36HePeWmQNqMrCQPrhPY",
  "key25": "jeJBoCvucgCJRC7GLLJWDL5wdDmvAhum6G8q23Ee7BmWTpY3U4uVBG7PkzEEzUq2xJWzNLdbpXMAnphiiC1ai5Y",
  "key26": "2iNRw4zzoHSVNfEJFwpcHhVzei9UYRb8u1YHPkv2r11Bt3R2qZQND8JRPpPdvm7WdjaM5n7hsU25a954gKzrppGo",
  "key27": "4y8Hag7j2KnDPDDt3TPF6EsDMSjmjUbSnJrx6YZegkY7HEKU8CaA56i4f9muk8i3dmTJmURyNvnryZQwPXa2jFHA",
  "key28": "sfw4mSkygQC6dwD4SpKFAgExXbSPRk1EoEzbC9MZfv299r5GuWgDydYkR5YgjeEqd9RjrdYQwfDmpk467NzE98Y",
  "key29": "3HXJCiRmWSG1oCjxnfVGd28nQYamcsH8Hpt6yfhYj2mxg6pyYoyf8VmsGz7r588YpkfHi36X5on7qVMVMKJs3Qpu",
  "key30": "5NchQptXjt3vbgEei39q3uZE2x8GkEjGwpqndBGU9ZTJTmNvM2ryhio9YQXUvincKviKhQnEZ3qawvjrSXRWgeLP",
  "key31": "33LTiRuqJ4YPvm2vXHsnzdyn114JFsZXhRxrXkbcX9qYEkGBhoeZb57KGG5nuaAYAQ6KRRL7b4tgaC45RKFUAjfL"
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
