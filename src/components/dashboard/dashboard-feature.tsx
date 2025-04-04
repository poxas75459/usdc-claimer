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
    "4H2LtHLJCrHMbWQFNifBw1aXx3enQe8VmSuXrSeAJR1z31kdrUNuAaJDgG4ptxhmht446MkdbukU6dohCMJMXKnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3GeJouCkGGZSto4EuUYTzwpibhw5n3H1HpBvuvy2D6Ge3MiXy4MEQYLtyMYnMxMBipEnu7tEZLcQDzWRejsCyH",
  "key1": "2ixpjKgCQYJQrYScpCH97ZcfcRTjTb7fE42ifsUTQSoemynKmuYsoHDqedyCwgQGn6D3dpVAZGa9m1GfEpdgoUyK",
  "key2": "2nLgLdBi8NiuvEs67jBf3K8FTBz8yKriEZ44mC25SQEQstv3sr9bgTWaMiAabwWrW4a3SzWywuazVfRFfmVCHH67",
  "key3": "5ifyrZaUkk7x8a6VzjLK8RhiikTKQz959ehZFXTHvJhqqL3eG5XmF1wksWY9o5bWhCnev5WhX86LF3pkJMpqdK2X",
  "key4": "3ivUBqCaphz6mgdQL19XmUAofoRE4hM7t7jcwnUX9RrZ8uFfJjR7bM1xKW1eGFf6Vx6tEanwschkC8Z2pN9QSN9n",
  "key5": "ta24TMc8DVvXAw67SC4pjqPDnwikUSSKVsqegXKnaqzhCzpS7a6UKWEDp62N9MRE2gMcBaYtAerZpQLTReZYFpT",
  "key6": "5gyYbXDhrisnfHgBHnt5uxeNnsRQ9MGsBaaRTxgQhqfNeighBkZim1ucEEKGC4feftKUT3sKPEVCq3ZYnSeShkvH",
  "key7": "6LQ5fCfcehwj3gBHe8CiqJbSiqH6E2by962Ng7re6FHTjLND3R5TJbdkoXKBBfixDKq4hsQTeHfHKfyHDygLq4u",
  "key8": "3dsxEYNWZRfqkFdZHLiKfCAUzC2Ln1yS91uKZQiZhG6WJCKJLCgKscLhNzg4VNrxyPpDB9XyKg6PcdCHycuUZfxv",
  "key9": "2TkCmT1m9srfkf4u4PhvMcF61bs4GS4WggP6c3eypEqvbiimeQ2E1GqFqXkpdQPy35qKSbJMapnyL5e6GF7hCgnA",
  "key10": "22oNhXsu1RVdfe2dE84XDTkDCHF8GKtjA1XnDKpw8suW5XxL21FH9xU3KXGU3yBtqBs9TezkeSKe1jEw5v4Nqgw8",
  "key11": "26k4PLB5NA9zuzvr6tNAEZBRF5mv7BVjgDz53Ti758BNHgWFwcJqECuBVR7TDAUm2Ms9zs6FjufNohsQYtJK65sr",
  "key12": "669KqiNGKZDz2RHW58fDtypEsWseDioeAepEQu56dB9smarZWtdBzuPdP4r3UvUnxWJxN99Z8YZoeJ1FxviVS25B",
  "key13": "4BH5HtF4ohqeG8rnpu7WgAGobwH7qp73W7kj1i16Ez61VhvudoQT7JofQEH1J34bRouQVgN3rfAmRKVY8ePn7jjE",
  "key14": "27Vwa2nw3Ru2pWrW5tqBzBZLyBPszSCwC35yrcZsbpq9enrQPZHedW3eJGcaRshbRtHHZqZKddV8pqoXBZ6rvXoY",
  "key15": "4oTRsbvhEMa6ARLPaKBEbMc4kZDXa6u7f2JeZgeayshKxAAt3fkeYbtETVhA5fJXHwXpt66FWDTevZGtR5CYeuHv",
  "key16": "5ACmmKNDahRo7y7z2578L7EmCQkrk4NV9bn8ChhaydkkaAsvYFtGDSBbPesTJj9tSGnw8e4oUBjp73ZuaR2AGBPW",
  "key17": "4YfkvqVXtdf6TizKqpQX79c6AEvR99L6YANKCXuUpBh2SfVDWWHkB8eH8GAVBj99ow2AQhiuCu6QhYp5tz8cxmMh",
  "key18": "2R2o4ZR3GBzMFCHjVXrAsVZ9sBAY8PtVJhQRZ9eBffNHPnwaZex6JnS9nocgVRvEaKZyMjg5PaxxELPLooTQoodo",
  "key19": "26jRoUzLH1bHWKr66CjfES57UiAB7beqD7KvRdGJ6VzeKUfRWUTzJLsGGFsuhCb7KVb4kVpbRbKuMBJPJA9L7di2",
  "key20": "GdW5QXQ2xoa4mwDRPc58CYKcmRbK9dPHUjVmMv3EjZTCsRaJFssm5fZ5mAb6u48d45f2Ys8Fojjb4ySMm6sUuW1",
  "key21": "4NkaFT927XLeGdXdpLTDucArgV6UxMKsXdGdMRveBjwxodYBaG8FKuYJ2J1m9zCVrZn51ksGTYTwuXKxv4y4y8SB",
  "key22": "D8BTdQrLZcx8Y86U19X99i3tqJ6ZpX1zdydki9Fk5Xu81nWrShTp8gujr4bcHC2CoxUJeK2eAN1m1srau3CFSws",
  "key23": "EeYjnMtkaaitoZMi1RzizYCSGiyEKcUS2a2KGrB9Den4Gtr34SvAvsWGaHFYCWqGQehEu3Jwxr7v1N5vyRw3Mwk",
  "key24": "2atsoCm3eS7hKySLYQqwuGx7ayvLZweWjNoo54rCKrJ6B4ZebamAbbPUDZRFWEbY5Q2KPuD5Kt64VrQ48moV1Pn9",
  "key25": "4P3NosCsdfyov836GwGkrXwfmUnppWzMxFk22zbzqrpKajLeAvfBTKXdRYgz6FRhbpjEwGne2zS7NQ1bpQJsbwqW",
  "key26": "5SdQgrnLf8itf69PUmo5W7t3BqDU5Wh6w4TovHepXDjXK2zH9GhbtgxEgxeZL5hbXvwMo2mYjGc5gaytR2wMBH8A",
  "key27": "3iLJMtRd511qE2Y5XpSq3ZdAh8rGZCxGo32MPpGufNeBovtHdA7SwnxuCnENNnqTt98VaDqsPycY4zyJ1wtHn81s",
  "key28": "P4b43huyLuxgFPrs6RYMfgr9NXf6ZmbKTZuQhKk2M2QooAs2SqFrt7w48pBRRDWUz8sX5AEYy28PN7zmMef4dL3"
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
