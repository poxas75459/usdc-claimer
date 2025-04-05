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
    "4qrCqCxN26N9YnhrKD1YKbfe4uXkxTtnQvWjVAhzzwcr3BZeaRA3QNFM1GBU1E94yF4Sq15qN4aaHectyWT6csyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waNN6wGmaYjBhcEEKGWALY85sfzk59drQ6ymNaCVhPT5CFDjRJGaFYheqmedGGeJR1ZhoThGnUftprDjA4Dg49U",
  "key1": "47392sybJDsfArbP3LFNJMTSSwNcoMSKcZVX5gbnydgxahzPVAu4yhkKfwngyxCaFHXhRw6x3qi9QE28kxguqVZU",
  "key2": "ArLGAR4xVbEyrtHQUdk17QQpvjwFQTjriitHTSLTeyLx4mpGvedypEdDKdu4xSx5S9R5zC18uqUjRWKPXumgeGX",
  "key3": "5pX7g3FxUWkCrdjTHSDJPuLFCHpW5SW2u6sSy8krLtuZ9byUbYATUBFrc4iHbF4LDJex5VTRySZYUwaPzsrLzXte",
  "key4": "5SXghWymMPXRMS32wUmHv6ynAnG6P5xWG7sfaAZKumdHkDxY6xAmEXC6XVErJWAreSh1nVWwkANhv6WgPGazRbsB",
  "key5": "2AjfZbrzATHbX2KCtEKQDZCsWRuoKAHW9nYGTc3iHZRR38F2k6SJTR3PFMwYc52XXfakGrgiZD3XKoFugiD2oSL3",
  "key6": "4toAF6bkPGXQEbTQkYEgUCXbm7cd1FA1pEAaaSrstP4MDR7p7jHYMpcYEXHhyXcnsPbMC92wgw9nMp2ngqFCrFPk",
  "key7": "ociPTvuC44xh8VkK1uHD7XsxuXHWbLsfyHwpGDnbK6zXj8jqyJawNLTwLyUEwwABQpQqDjkGbSXFxppzyiLb9tx",
  "key8": "59UobGxRuxYa1WwU8hPdoC1U26iNJ72ddkYQF1UQEXVDSetxFP1qN4eSe2oL5ejPrvz6VTyEgGWLvXMFqpahUzjB",
  "key9": "oZBN2fU9zRYoCX9ktqukp3tS4zW4RbEAzjogo7iiSAZ5K9fSrNfaoNQTcAcfLse2Q6iU5jiSyMbKZJ89cfATAhm",
  "key10": "4BXEgW4oix8yYhEjyF26A7SG6G1mA9mzuj2HywJgdgFfGMd6kAxZqWCTJ4gVFT9pZetFZsh97bXLSidkESZ7QiKj",
  "key11": "4pZUZaxBiDTXLeGoTaMK9FxUa8QfAecBwwZy3yR8HWdLwUxaHCVNDiro1rpWWBqbjtCt3J1fzrmvZcXWswLgDAXG",
  "key12": "3fsHtqbWxf6RJDsgxe9uz7wS97YoCjQ5XpLZipcwxg8K3pvDszEUthX1CVNPyqtkm6NHvnV2JNVZSYiZMhQwo7D8",
  "key13": "21W1toVzxvk31c9kyQDTtEhiaCEh5BrMkxbvKLYUGeJ84vWT98u8TZL3pN9jQwqd3Vwg4YU4CQeW1moWyfYWtZmW",
  "key14": "3FtyuMX2Vta2wHu9MNtp11hv9UrhztQLQtpPFQ3Svzaddk2e2c22xaLjNPinSCXdHUZvbLQParwe1D7JJ4BuDyzw",
  "key15": "4EoAUN1QQjNe35MXnaXwgb8JVwikUA1R8roYQZdnd6htNAryaGDpm8X77zjcbos7hCkLA2wz95253waZuwZiUXCo",
  "key16": "4C8rDyaqMeKWCGUdqP1VQffguymffWF1SXvQsdB5D2BRaEbsrbARPh7QnNB3wJxeRN24JTm5Dm6o6r2VwUDa2nhA",
  "key17": "2Cqp4ZsP7STQWLDPzA5QW87ksxT3oa1EKDamzADCYW6PpPREKA1RpEye6PNqeEEo3zq65tJG61DyrVHkGTfbpc9d",
  "key18": "4XSewfHz32iyjC461dMejxtF5ratx46UkUjngWBtMDREeV4GhHPPtFjVH7JAuozUohoJCQD4TpH4rq8wFHsunENJ",
  "key19": "25pGCNkob5hLWHurYicZNgqXdRYCjUZfJtd93q9bzhMKLrhVDKHYtx6VfxfAY8ZsMUDy8YU21mSL5rLMkxTBrLT4",
  "key20": "24vYZNzShtsTZhPT9fMsBJMgX6x372JfNxpbHpAcqD8uYxDjuofqqcr1rDoXp86d7Uf3hx6rFoiTywqvwVHebjzV",
  "key21": "5WrJmvJCwXCTL23md8uQiSscNW3c2ogPtxuHu7558HHdmPXfeHcMNehuJEFdYTtymqKQYocHCczFqyhVQHnYvag3",
  "key22": "3cRL1aj7jxvAJ5hQfs4PHHKjhMrMx7EiVkyQhtSQf3v6ZaiEo9L35YvepQGqfip3Z5vL8hEaudgAkGTpc1Au8mFK",
  "key23": "f6fRNbG6Naz8bo4o9esgvegQESW4TFXALM3PhB1Fb2FChUVKr1EmPsmNp9nXDE34V82TUuDEPwy8DqtMVL7qcsY",
  "key24": "574JLHyQQwDVQuGeR2jNnRfHkvxNapHX8ZNDzUQ4pQjZsJEfw1o4RHLf3KrBuGf9FNybUoiUJSoUMm1Ku25Grk6M",
  "key25": "34hifJ6zsWxv1U4oiZCRvE8e1aygSi5FJCkvrtv38hMhfQYSKSQVECqhpXEpNVSxFnMzM39KyqfLq5Q39Zs2Zw44",
  "key26": "39kpVGDspUko6wMgSUYfvBsGzSkwvLLJ7ZchHNEQqQfCa6sQ4MjhzuPMhUeWDmHsLsJPnxsYYob8kC6v8Afavzxm",
  "key27": "G6xMJ6yhuLfbBmvQtYwWzzu62HBHRYgeHozzUqm8XeRv8zhBqMft7phM98vA6bofmXmNctELseDzut8jYLQ1Dbs",
  "key28": "2ouu13wMULLHZFhkSNPrkLgiTdqp7urU3rxC7ekyZT9zpG12oWuwWAiUxEJ78a3WBzNoi9erWPUo2G8nBWosa1uv",
  "key29": "2vhMcSjA4oAqWCM1Jjr6DWaD5kuYmEKNUokBdfT3DPedavK6uHVwHJpVjyz8oFiKytnX89wi25mmCgAwn3UDp2fh",
  "key30": "2WzXzUj4C2okMu4mxpH1WtNWqwaaQUZgaXHyZsSLDtcbUMSCRkfm8aWzY3hvHXEW4waMExM7iVh6qmyWbEwo5bLb",
  "key31": "4zCEsMvadFLUrULyT79e5KcSmukT84jENx8htJ2Ckc7oRTX2tMDnAX8hvyZwRUketm8bjuHpf1f7SRbcB3LbjWcR"
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
