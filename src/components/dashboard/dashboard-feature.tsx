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
    "3APUKdEPS9p3bYXK8DD6kV7ntmFYjS3gzv6oMRrTiLfAtkAytukHUYDRRVxFMsard2TfYHQCtCj5FmPUeoFy29B3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fGCbKV5gyTCA8ni3TnbBRRgamfkUHJDStVSSdiYpsY6a6vyK5fggR9k2me7hQDoERgQBz6VEa7E2AHhLUZ1aWqq",
  "key1": "3hycpuUpi4HZNRLBa4QKQEHtaJy9AD9ahxHahQMFFpzVgQG3rt3son6qLbd1R4A5r2RacSY529w6zQTyZ3sneXQb",
  "key2": "kkWGhMAG3DEBQ4ZP6WqVMC2hxgrgRcivcJu2eKKFX2GJgtTNc6nhVsdWhCeXe3LE7Kuj3sKeCqyAuzBtLD6zTi1",
  "key3": "yK6UP5MUHBzrGhxtDxSZJr1VZkWN6SzC3CFGYXPAfCRCT7okqA8eq31PrQmdvDVUoot39TayPVDJoZa6TKDZ2KX",
  "key4": "33FjNmfBL4rZmMHfJosQ5iPCk3UY7iW17CXgRUdm9uPaTSE2nJxNPyCe5JuPCChK1ZpBdTDHscbUZdc2pN2qay4g",
  "key5": "54TwN65A1ZoBrEiqDUcwD9tWWFzZbsdM1tp9X1cS74EVHYPbJGcKngNP2NJvJ5cv4YREKBhrSWTsAzzdMWiupxN1",
  "key6": "5afSivQBtHNyfLJiR3Yt1YkuotKze5zQhCi5xQxFixsR4WEieUJfPRVyXedb918uzgCopSWwDPw3tbdGiYsmWJaY",
  "key7": "4Dpg8WmvMgFGj9xkX9rTn2uqp8CeoWsFiCUdAtWxXMkvt4SDuLhpuoXbD82aNZKD6prZG1r1vr654mgeAqEc42zS",
  "key8": "ky28Cc6XuhAazdqVwrv34cGA5GMcmMCXTMWPLnHQYurvUKUED5C1wFh8kbqg4KSkbTJbZgypdNcpqRvkza5WEfm",
  "key9": "5JAr9gNjVTJUbzf3wzGJt8o3f6xoGJoBHkhaiGfi9EGy9cHNV9yrogPbZVXCPcyEWq7R9BbPrnkWhkvixzW5EycU",
  "key10": "5hc5Zs5p5zgzixGFsRqDgTbmAVxTj3pcYD4joV9Hx3Dym43GZdmAq4Z6o1AWYQkWngStY1FGGJmv7usugvqbWPGT",
  "key11": "48pMzHj1C2G2hEro7cFtkgVqwfTrFmVwhWTNnNgJm9kZrJkFcB5W3pab4eC2NMWTg6jzyE3KRMXVvk1zJQsCh4ZZ",
  "key12": "mJuRgjEryW65wm81qFVNjJGJHHBkZ7vYYBoVpqQ1eXj2iVhkXhnCXmZQgXzjpNpzteQY1fzupRu4sFoa6zzJUmX",
  "key13": "4JZcdckfCQmhodTFWybCRYLEnmckCGru5dfvsBHVge3vyczEVMvNDCzqBmnSGHiX77dd2KmgNZYbLjoGygGujyu4",
  "key14": "CyH4dF5knd7NvRVbdJFktyKTzH2JQFw6k9JtP4G1vSy3qA1St5kWgLSG14UyzrK7pMdAkCtzX2ZzNsPsLMJL6Jq",
  "key15": "4PyZHTMF7rCm6ZZeNDDs9dvX8UGGUFHARoorWboz4nxkWdNZPxw8RHtgbVUbTG8vXD5HtiHo28dk6C6YdihCQpFy",
  "key16": "57AakEnACwXMGCVhofp45sns93we1gLAAn45cirFycdhcgtBJSFVAzPMxkTCeYmk42mn9XPNArUzPsarzjE76koX",
  "key17": "3ANFEnzPy6NRSD7Ni614kmkYqcV78nMHFRdDx7dZUipY1jhgD7j1TYVe1SJcyKCydir5CBtgBCuUrhhvg6pcApjx",
  "key18": "5rDA8gNU7X3TztqLkdvk6qXjSJz3EWk9bNbtJ2LcE7yioPmPsU8LYGcaZqZEmVyuS6b5vXiQv4LJJ1DhHBpaEWCn",
  "key19": "5pMCwckhB5dCeTGDgUxwDgWp1h5CHtaif7yBd7uLF4c5LXgrLrWiHPua6KYmr4zj2YY5PYr7KY5Crh54ZMaigoXK",
  "key20": "5jGDPfXhmr9wpVjTyvdD9Yu9Lz2SBn66ZPXca3yuUy6Ndf65wcrCeYoSbbB4XCWX4cdrsZdJd9eS2BDC8ifuuX9W",
  "key21": "3MbchNKSrkkQtAou9NP5f38HNcifSMUyLHa2s3T7ex7RFHNim9Bkq8FB9gCYrRuy3w4QS2LN5ZdAb6SDkHZGYkm1",
  "key22": "oDTr467gaiaxHDFSVeoJSd7wXU1mGMkFvMEQYEYKfcjQ1G1ULvttjgeUMaoVQ46XDofBahdiaaa4YtaXaAKoxPq",
  "key23": "3TjXLSnhuuvpknC9ecFuKtbFX26jz5Q93L9v46ApMi4bMrHhGcLwfu3TXpCrzngqYDuNdHDAqzJ4G4zG4MqBCNBE",
  "key24": "41cnrVNGSymbdF2UMspBnoUKgn9ZUv9XJpvtt8VW36Yr8SCDh79neXT1BJqhkExJptviqgU5yfsfkLP3ihaM47ea",
  "key25": "2XRCPGBaZGt6jvdjQx6N2qdvRjJydrxazBE6K6dt4BJctrrLYfksGZjTV5T9TUQoYfG5UtAevBTiPpBR5BMv2X51",
  "key26": "4Fa1oQM3Lm3ZdPxqmn455s1N28rybHFnyjP1ERB8tatpRuD6UtjqKntrzccPr9RUacauRid5tBKwmcwdzHuvsFuU"
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
