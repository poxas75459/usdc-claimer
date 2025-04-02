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
    "44NmYhy58Uki8zU9hnqu5EQ5L6XSfyfE5NZYC918xZ9hhCq716TXeyvmocfee2f64Y2ZEkvp7hYf7oBX8THGEKSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zts4gRXvxgFhD35FpsP1T85yNzXyaDVUa25pRbWSdRVNbFTUzktSbfCzYLQEx9TwGHKHB8F7CrZJxtdCx44NaMA",
  "key1": "2bA7K3XmCwK2buYeugAdJdxu4rwU6BUDnKVrpHAXTZ7pNzbvqLFzzCoBK5M86d1km3o618QLM5zHJUhaUZA7Q2Jt",
  "key2": "4wbfBHbkuz45RnGQvXRiXZfdV9wYAEzEot28yG1s9QpPvmAtZPY3oLqHr6JaYxoeaAPjmA25Hiwy7po5ytLYoAYx",
  "key3": "2NUX6N7ERkv7abnE3kiwr5nUmXLK5xBL72nMGWNYDHPbmPDgWa6NEHafWnNcN63vWJexa5EGNmyi8B3CDWb8yeX6",
  "key4": "iae4ra7toYp4VRL97EUNgZEsMx8rHERqTv4WfSH58hDnnfYYtNLssGYFTNWLVFXDjznUhYY32KtFAFkMutvaun5",
  "key5": "2BzJ2NJmAUxh522WojbaagCtWpALJvvvL3gbx9JJWberBTKuMs9c1eA3Hou9R2yGh7KYw2MGiR7XRqmpndeMpLWB",
  "key6": "8rS1a8XL7FVrRFMqUEUFK3NRz2qfd21zjnRzB83A6qX3JmNE8vssT4xmMqUZZztVjD5puq2Gwgvi6t8LVPXUGNK",
  "key7": "3sAaoULXX6RPqJre5SYwzQAfUCrt7Kg63TjYhbKhuXHBnhnEJHLnERb2igLgpLWMTNp8oWgJH6nhysMctUjJtA1r",
  "key8": "RP8Y99scGf1FKDnwnoAhKhoY51wcb4Q595x4Zbty1ZZCdaK16MKQU1hScDZ6CKMn17sTfQ4CwCW9BThy9dTnTow",
  "key9": "5PMLqLEDC94CDmZuRbRt7nbR3fsCo6A1rPqWa7CpNdMfVB9YEe8skoewmdGFXNUtq5j6YTdiSDGBsDwfstHtXxas",
  "key10": "4XeBHmAGt8mW6GCavXzTr1cEaRHVVvbwkNvmssguWwNHX2nkqB34fhoMEdYawzwX4Kp7TBJnQZa84sqdNnHJnEcd",
  "key11": "438zn9nrdy4CTw5wpoH68rjUY2sBE14J9EPvSpzzXLSyrBeCqAjZyCJ2Uxsd2g9MMmifYYq3xJrk3q6yd9prGUpZ",
  "key12": "3m4qPkg3LZAK4PF9WBMn1mk3o4XcWQw4eZDx9WvBEf1EkS3mX5TPuRRkqr5sqVyrpT7XTEESBiFHUNYnHSCpLjj",
  "key13": "2f5zqjkHSSFMQrcqtd3ZZk2HsWtPCWQbKc38fDxCUtJQvx4EYNq5UzyKHYsYKFGSRmnx7TNu4o3Amdg1UQKGLu27",
  "key14": "62QYd537wrokt8VU7ac7UVZXGdwsPRd2GC6VBnBzUDB9MiALP8TEdoWPaivnFdjX7Lvk6mfXTb7btqwcA9cvZVwT",
  "key15": "384VFfcqwNtejan74c7smtTqVLvBGS87xXvyENJ5sYCbWM4NybvpXu5Ph9DKwdSrDg1DYmDsHbRPZ6CZ4p5Gu8h1",
  "key16": "4zX3LRZJLnSoAGUMYgb8GA7b7H2n7MvtTT33qfv3o6igJkCu4TC5TxW6kXhWoozSeZomBbx8q6rUk4CoPs6fFYdD",
  "key17": "4nVQnqfbuzHio9k6Bq9zYvxjxxnGYAt3PCzXXbRmsFEXwnwzdGcbMh58eVtRqBG9AxvT4Hi11SHhUjv7S6fZh3U7",
  "key18": "3R7SBrKC1kts3KBEhCq9fUYHd2EvcDbwVh48XicZ8Ry8ebt1cGjr4MaY374SsC4yYHPLNpLQrgd8xmhUrcbPN2gP",
  "key19": "ouGCAJpawsUYPopYSQZRzWKZxoUtMNXu1ocWGwYEZQp7nTJtCavVn3DD184NeVz94ybr4nVArNzRvNdSAssbgM6",
  "key20": "42rbjJZsmXnRwedBhXnHH8x2UfrNSNja7sJdiwNdqviAXm3UTJ3NfZbZrz8zuexdGPrXWrW69cCqdC7jFW1FmQT9",
  "key21": "5BuscrppNsS4pSZyt3dJk1XizLfGWD6NftMde3Kbo8N9kXXZjUYH3kTE4sNCL9rjcoescQgG8gaTG89FrRtvvr5j",
  "key22": "332gFkVfswkkZVz6VW3s6HgT2RqnFj7AwiwthcCYx9m5E444fo6s2z3yZSLfPqpySrvLEPVgFe9ACkkw7wHvV1v8",
  "key23": "632hVBqaEhcxK3amLwaEatUHrn6HvC8fzXvXRy5y7z8rpR5f4h1rmEVdpWmbWtJ6JnKQNFJt4WmrQ9JHJ8nMsxaA",
  "key24": "sRNeFiyEbd8M6XZmtC648QTXJFsyWYxqjsTKUZGUizgvR85U7zJdtv2aip6u8M2DyH6GeR5wpu7XYwYrKJk6ekU",
  "key25": "wnvzueMBj6Ca3QmZ3eKREaiMioR4f2SSDLzBgES7ZS5aaHsQTQhy85PLsuNcvCFPnRYooWURmvuoDaNCSJc6DP5",
  "key26": "1Jgd9g4nSEWJtJQhLUoFbMecVMKtScpwKFtDuzqCyoT9Wb7Gu8ei8nzKrRKg4imma49HeTNrii24qVBzESMNdjC",
  "key27": "4Qg9uY1fuHVN2fsC65rtmT6WffFjvXW4khUzqvLXYd63KEBoYqEW5tLyu1eFxxgzHTw8HXWu4ozjsQdMnHdhf2d1",
  "key28": "5KfpNaP9CbZBLrpHEqEbPB1J8NUEhfARN593WKn8ajBoJW5kW8aLeUd3By9E3vdReeaoVFEc2D4MUhjjS7ggV25s",
  "key29": "4EQAsKUS2UTnwLDGitd9nLW3muhMb5qLaub1ERvyM2Lmrm7xQVf1rQGa1NenBSDyqcYZVXXFHRgypsReouwKe6PX",
  "key30": "3QUhR21grTBQ7KwqddsLHYTW9mH9VQ6TJpTGDSGkDBsbzZoiLnud1UynbjH22tZ65pf8AfKExE99ZdH2JegemwZ"
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
