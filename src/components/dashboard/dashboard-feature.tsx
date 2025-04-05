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
    "2yBpMjgzmX8o4VLvw3mr1kV8ogrwSU6fpCfYge7nDi83hsuTTsZLJo3GTSgjZgbXQpesNQdfMTCq6sFEbXd1E89Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bsfEa37Y98SziefgQR4Bi1jkj4zhgpGKiNpLBKKjGpu9r6mLGVppKaRzZUpjVYqejUoRr7dxBQLVofv8ZgXK8N",
  "key1": "3wLxyuaGps8cZ77jTSXKLcVz3rpQde69tXGyCc4ay5KbhCVpGhrXnWEEzPDjGCSmzxT1d6ajfjC4FE7yCUWJrLBv",
  "key2": "4zTRHUhUQpTmJQ9R9nZpwLbf42X1B5Q4KhdhyNbFQhg57QpQfG8CKn8BiX8emge28m5wqwXDYeWGMkKPggxwvCi5",
  "key3": "4aSWFQYfnDH2jmXzcF3DzZP5h8SU2U2iSNgR9TT9xqUd1N4W1zD65iKzaNMi5zWpwveDzcDShvD4Pk2nvemmR4vp",
  "key4": "5SZKeVKq5Nd1w1j7qN5aUmDFfFCGemJ7ZaHXM8ouoX4Qvx2SkWHY3wfkeZ1EfiomafFCu38zw8z6EPUmxWra5BUR",
  "key5": "2YQ8oSKVSGbY1bhW691BPTskxnHHhPY16iEyFWa6UCpFXmJwkEq9m6pGn2JhWZzp9Gp7LMffEKsBnPjVXKZw367g",
  "key6": "2Sf9uc2YWaZjmEhXqx8MbLxkazsB3bTCZHVBiSkqm1VqkLMLq4TzJtUPJjU1DRQxQ3a3CLWbjNjzQSqzBj1jfJiW",
  "key7": "2zNED4m1QKPHZ3W8865oCXiN7iT2muZbfHqo2NRk6DcfPtT6JH9YynUtBwzr7g9eeAupM7PAs3SUVA554vRxMPsv",
  "key8": "3KkQTHLU4sxzbhwGWAxTNQF47Cu91FPaHeyiSPAyvCLLaQBfGYBJSK3iCq8kpUuf7SegASX7skBmKWFq4MB3rJ8t",
  "key9": "2NvPL49zVcK5g29HenFLvUp4j3tdrjy7dUSRvDzbFsqbMZTHBKRDyhicxsBJb86NqdVVivqiYwXHYQJjFgJk9jG7",
  "key10": "1ecDZF6WfctsMLWXNYeGkTqbVja6L6jfwXMVn9CQjzfjLDWuKpj6GjmDkLY15foD8yiSFudvddYP34Zpwz6wvKo",
  "key11": "3oo2B2Zme7155FX2owvnhmC9rP8KsmUXAk4bJLMk5AgE8zHaZefRXrduysqjM4nQjpFD3sdmGuK91a1XEudN4Kwy",
  "key12": "3m8T79RR8sg3gBYcBji1JvLUyyzPFe9ZPzYpChSnPYo5gmyma1qQEXQ2YqEx7kWiFZzzMeRCFTf3pCC1L6ffRMet",
  "key13": "3hr8NfZMsxvayhQKLeu2szrt49N3qBngLvsyYTHCqMYLxdv3hTCwhPHwW5gaUe84eJJaj5vDTBC6isZQd6o8SWKW",
  "key14": "4hsMJ5AQ3zdEpCjQeyPovbuey3wGzFbkE1MtCkVTZo2nY8XV72nK7cCXS335twExvYcJwPGint2eE8EzVbqdPdpg",
  "key15": "hPCZtZMZRATFumJCtrhm9j61WkUyvRBotxVGHAWDh9gTjaZkCGXhkgiEUcrtvQvLdtHTLMZSHA2qfmKvUuwQUKs",
  "key16": "3iqLDTCUwZ74iTzqQDTCLjVgXn1Wn8YwYq3yBNQKahMSBK7rzJkQkJ3wmyRj1ne3n6JXaLKfLdkJcNKXhX8enQ5g",
  "key17": "FvzufX7gbru4DDzEvWyjaDRkjpFGtuWKgBpaxLYZba71ujz8CKDVqij6xB61h2f9E5UmBrvS7UJPrzicXDfQkyL",
  "key18": "EehdvVEVAssFrySDX9BEsNa1tEd7YLTRTmRL33pSRYSQB7Y7MX4sbgRXXi3JK12iwbuwfAj6eQUwnogEFvFbWKb",
  "key19": "3KdiTuE43zCAYVWKQtxxgtwFWsfmxCtvEjujniuKSEqG2UQt764atyApX2BtwikpwPrAJFHQ9v8HwRuALqESeSAK",
  "key20": "4behjg1CTzaBqh8ajBfp6QtmuQkeApMXGUnYF5s4ohzo8qkHovTZ81ZY5DTXbkNGwsn79wzMuUjXM1C9mbBSwbqC",
  "key21": "2puZFu2xzVUNXFbHSoaZ5nH3RnJEFmSa23ZBAB2qhcemCDNCXBMtcJMMpLEFhVqD1QFAu64NTsP41f8umZwrzZ2u",
  "key22": "2oY3MF8er4UUwUWiZ7GU1pDJTb4QxoCADsoTWyZnKTA361MR7QWeSweKrbWKknYREixTQJGFrpUBD7XFYfVugLxW",
  "key23": "2i3HhX8EMa4W95PkkKS5aPWrUZXEuLz3AichN6PaQyHCJHpZ1B8VbXvRY3EWSKWhwkhnDpGz3URuueK1QjNYy5Dh",
  "key24": "2nuNCniXYEMNxo8TM69NiMwzxY41kZEFc4XZnhpFxVRJGvEQ8ZQrntxpieihJ31yCxnqMngppEUFogbxZQUNrMr3",
  "key25": "2f2dih7eWT8gFv5aaL4mNL7KyHgPxCa6jMDLM1YYxZfDUZgqEg4uEJgTXPiceFYMyBRumS65hKLDQBvXGBvHG26d",
  "key26": "2ngwvukntWzHE7KBKEHezf7FhVXxFA4RKUviJ89tRZxYECmL1bwBPBCXdsvxRbpzzUnJbogLedB4fHPm6PEZerbA",
  "key27": "4gz7m5asjgCZksXC4V7aUjLsAts2mz5dpYPVe6wHc8KAgsyZktuqN4cG5kAVatP2jZbWBMTyWx5EJ1LXSrPXLGNr"
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
