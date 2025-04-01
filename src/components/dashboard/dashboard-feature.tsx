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
    "6sGmzMEH6U1S1tY8YDD6LgqS8nUPt3nvMmSYxbnBvBp27AedPnvHbrzpSaxxWQzXJXSXS37pMMFswXqtQ6jfLYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mErpe9jheEbeW2Y4gnfJJx7pzg23JchecrMv34ye2UHBQAZBoK5cL8VSFJtJjWdsnzqM3N6Hu1yFbRNLYKwUmEi",
  "key1": "4LgEeJFtGh7HBvoar9h8dzuxy1g81LaX6pwALr2gN3nesah7tYfmF6Cuzx6xdcwXtQrWpXBxaCN6ntspnTef7LhQ",
  "key2": "22KzgfWSyt5KFqD9Zy3nNBsaBThswMCVmJVkBnvoL2gAdMQGZTUyC4LNkZW4E5TaSvtRTxXj799iVFxpjKfAzkp7",
  "key3": "37cjJY1u1HKHED7gEecSCAz5KhassSwiK5QyjYf7xkK95gzHNedV8acyubBwrv61zkDk1HircjdBj95MCXt9iJPe",
  "key4": "3X8XkrgNwuDeXi219pYNdmcDEBJbzqmsAcfG7UutXza2a1NwxhKQihqQs3NcA3FAaq7KAtgr3m5qMEiEGEv27g5m",
  "key5": "3jGgfCyheT5PkGDGb7cYGL4ueauCEKTdfLNz973SMByxicPA2fCJmN67a6VnoVhtoK1xZmhwDRre5NFovuTJjZih",
  "key6": "5eDt3CV251sp635LpVAkVSJkmyvQazqnDMZcz8yAGJ5gz6NWgJgKJNQSbU7tgSUNwwNHw3oQRtvT9UB6eiA7ysGU",
  "key7": "5cnH8YgHce4ueRf8TBcPWpWYcPgkdeRTmWwrPfCxmD2z1Lmgpb4QZbTUA3hknzkwxbBrg7uyyh7NW97ZXWnr1Qb8",
  "key8": "3uxAwDb5JsqbJcYPEiBythajummzac3bC2ByJxnn93VQxMfgdDhLskEvtgvHJj3gesa3Qu1DZzqNKP38kpf8fNfr",
  "key9": "46pNQP8uN5T8XPdpRF3oWH81iCMstKxzFZAeCRGumhZ7E5j1xezc4d4qXBGhx2q3yYDYq3bzfvyRVEw6Sb77YEn",
  "key10": "5S5KixGbJPsMWbTs9bv6VQyUvHRZRqysS9ufG6Ak6sAgjKU6a3unQCPs622dEeKXJQePCg4Sji7espdL8Charh9D",
  "key11": "5EVKLwvu3bC41hW33GgybS4QDYiLYanhg61q7m7Ci5zFxRBLZbjdwhdAWmrfoxuvyLKDWEjJbBGAyxVBXsnXmoSr",
  "key12": "2h1QxM9iMnv9fm7BjCXmNVXJXNhAXrBLpujihqCBSZ9srXeef9FMCygA17RFbde15PvQ36y5kkTvq66yLKDxVz7C",
  "key13": "4wpUn1ovmGS27owSq9Q6e5oHh84qPt94k8VC26doRzN9f5hAMbrVhCcnzsFyu16C6XitgJn1i77raW7UVWEV5FML",
  "key14": "55GMuBrp58isREi7XuCBBp38H5gxMK462Dw8YeeogReKx2JabXd6zpqeo4Q6m8UfdmWvPNErxmhdgSkHsxJnWonr",
  "key15": "5geKcK2jmZ79r2PnsxTCFF4mtuhFjuhTivFokctGSAxJadecWJpDT83bwkhBTAHh7ZkWdToYPHLpE5HFYHJCuyqn",
  "key16": "4N3A4wcgmdvbH6uQANkVdQTQKSwjwWVE95THjvpXPYjM9de8K8hYBz1gNPGLBSX3pQipxcybVzeDSmFGtzfLP96d",
  "key17": "2eoyCNWVnMjUeSwGh7d6Xn6zMHXYMwBEGzpgcc59J6fJDhXu2FRVdxLaxk6jwNU3U3h8Hvu6CsH51D6TK6Y6rJXq",
  "key18": "3PiGYsqjMDP5gLBK1pVVxh9UAJEeS8tQeokx6phHbCch7hRuahZ6NHDMZYtT1J72jchx36YAjSBWcDqq7sBbtRmm",
  "key19": "2jam9xFFeQ4AwSm4gu6F3fN8ttHRRyxDwXjkmY5FGAaYf9fht8yDEgX471TBRuUZNSmJ8Uf1yMmuHsgbK6Hd63yM",
  "key20": "UkERawpurECkgU6M6oFuLYzvpW9Z3R853vHbGenc656srAJBajxFtASYMDFqyBnRej5ckDzKwfs4biU1vTpTdGg",
  "key21": "Uzo1ejLxEGU1vyJf7eWc89zagKXZzkYYmSbsvT5Z6V9DcEG4anNcMpNUyLrDjEYzAdKwyhZxCbCKigF59RWzGrf",
  "key22": "61MYeADGhsLcY5ceyojy5vEfwB4bucLXoRa1zZgfgtHrEDWQKPUFJ9qMtw59ggNMjDZjZ7h2NSswjhsSpBNDP9cu",
  "key23": "33QXeMsoU2w5qi79xbNb3srJTw8JCspbteWxVdNd1P3QKi8bwQYgzg8z5tLe8jKcLXmzsDJsnvKhFZmqPBxLjMZ9",
  "key24": "5qE64vrpvjBb6dDZgNS1da9K5eqbUsBu2MiratBcFrcCob7o6qMLwscVGcYp2rQvY6gKyvKY3U2JsZW9GBDJVXVW",
  "key25": "5JgHQBheW6eZW7rBXDezptsc1tGTi7kb3R2jBcqTUiX9YJv1dq6dbs7T6ndN43Rwqb5yoSXJy5shJSxuoFb63biu",
  "key26": "3TVG6RQUmJi24j3K7sbpaT2e8sw5YPc8v4es4mjRiCAkBWpsJyjM6Q8y43n8ihxNFKCrZtHmcTS37hFPzPbCsJ6k",
  "key27": "23jrpWVbKsr7YXTDqyHMvCYat7HiYzsAJS7cWu3KhrvakvE3cYNCvzAAtW7pzERX3RnWhARPjPmA6VVxJediM8Td",
  "key28": "R8qvRps7kYpoghqGZrZdKi8dn96ZpirgN4ZXMXm37m15ACCStp6EKRsCxXSrf9WFsKQ5Y6XwSRNuZj4YdoT3hxN"
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
