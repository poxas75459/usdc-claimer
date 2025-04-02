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
    "5Azq43RVvTFP6euY4tJG1w3n3ijY7Jo3ahLmDqxE4bj9eoMR1jbziMMaqeouuEggk6uSk1tJtF3CTfa2UPTrNaXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41v3MdVi6gzedBQEqHkkGtRoqtdDqu3Rn3PahNqcbAj9UYbP7yLz6RYQM4rgemkkwt3w4ZHfmW6qQM4zXtWNGySM",
  "key1": "3xGJMBMoERtMSe1cNKfwvdkShzcv1FQYn5JmggRVPKFiXCdLUNj2cnrZHHTubTirvEAVXCRvTu4qfgiqy5TLmGYL",
  "key2": "4g33i13Vh6bSeVXxXffxdJRrgdokRm7miESXZk4vVTXYd1kyksUoEyfhDcpb3ypiZoGNbC6VFJtmqJuM8FCztci",
  "key3": "5QdrgdGFxP9PTd2QurQ6S4o2bPKHk215jGtrkQKACbWvHW5ejj923UffhC7NxtShGWQwFHbUhuYPM6nFLsXNfnwy",
  "key4": "35xiGEmfeSVjuYrGMnPdRrqDPPEyVCAnTwH2fnTMuPdGTL3mo2ACjn2JFH3877w3LgZ9sM947chLQUgp7CrZ51tg",
  "key5": "3ekMwtoU1HsDvP4MkoXmBBv1kxpWncg2UNf7zB5w9k5Godt3E15QJpxW5X5bFMWTiUGtA82B2inZzExxVqJ4tDDV",
  "key6": "2eBaHfr4V3KgMdBr6GYrXwozCo9SYF5BHDYTaZFmGitGGRBc8LNPsS3QLX4YYPay1tJZ5VRtV2a14fsTdNbb6cx1",
  "key7": "3ewGFXnUxptkDm5iUVH8e7w4fvcJufFb6MN9wwFTeN1yPDLzTfMm5V6bh8PrKCqc8ZicznuKgsTrG1qwZK73gEDD",
  "key8": "9Wf5aJhoreFQBcRCAekapqnsY7jLPXxwawdRetLFfhCa3unnNXDdd931ib2soBHNQTEZakLC1APL5Sz8ga5oqC1",
  "key9": "4vm5kN1Yfpv83xWBnAMEjkJMKVkctr67jL1ZVZ9dS32A8XNvB1twwBqGkqFdDjp8AeqGSoivMQAwAQR9K5qkY2KS",
  "key10": "24tNJ6kWSQZvTAfnx1P12YzuGn6A8Uw8gZK8MokmEMR3NAb7DiLmdnYYQm8btra6ZGhPRubJnfpuw6FZXSYixa97",
  "key11": "2tvJmZ8C8BaStoCtBr5RgxE4eKuddMm9RyBE4y6zYJ9HrpSaRrAGuuieg4mvG4CfWhCQvf4o5qWgtZ3vtnXZRZsa",
  "key12": "2Rzn8VSQQ1mBMEvWbyMMTDprFKvfjNYnZnWge2QjUYdD6NN7aeYKQFyPpowiPWNsCcsf1tBJyttoVRB8dwD9JmtK",
  "key13": "21r5iqh4MXYU2Q8VYdY8KAxgsh9tyhVb3cuSkizpyB7yfFRqgrHGx7mZA5Xwzp6Z2VUTgGkPdKavtAgUeJKbckBj",
  "key14": "5N1BrDGMme3q7VNn4WDmWnJ3XM6h79PuJs7PqacwFaZoALbhSVx71AQgVbF7nvRef55Q1exxBjjMidYerNKrwM1C",
  "key15": "5gwNzTHvpuSSSrcQk1SuFZcfov61Znr4MSrTSRGfiGVxLFhgPXzMEKHevEkWN5CkNa2vKZLc2dE5HHqtv6CbFxqj",
  "key16": "3GAPgYxQ5rm3dBsUseQdumjxypVRmkQp8LwYG8m7T5ungxGv1qSf7v2TkMoF3ct7Z2HNs4fch1Yg7Z58Nu7J6nyW",
  "key17": "3brKm3gqz8RdxZZ3p5LeEPXEcvxDVaR9hmAa6HAJ8WVJL53vETXiC6g5Q5opXtm8osA7H3FShLitjnHfbEdLABEJ",
  "key18": "5o82udVUjAb1YnDT1orwmfzqXywvQMaeZ3c1aE5RomrnDJaDGN6nJGABT1JyigpAg5DPm73mFHSEpTnKXnJgTaJU",
  "key19": "gSZaEYcSgxS78McR2o9eb8cqo2NMdDR7ox11QJPvLQruRreSt6UFm9jAW1UDVkAJd6ouy36ebDBLNAAjW8bdYdW",
  "key20": "39S18Q3LRZDThFbeVdMw1XSxMFuc7coTuqXTcsPYThm2NQ91w3qCBT1RsUc8oujj2amk5NSqH4bFBB2U98pa43Zs",
  "key21": "3i8B5WDiSgdkU7eMZ9vuYumcPZqVx8vAinYsjh8wt8ACG6Cnvxt5iCSaUgCeKecQBdRF4xJkBMMi7zjcNLNNcz1U",
  "key22": "HubuMYswPNSt3Je5Pr6VhVWBXnnyVX5pwEiD4ALJwum15uSWpkmhB4SdJdbxX3XVhYdAVJVJr4zZSLFRkPjXq8T",
  "key23": "5u15aNS15X3MBhtNaS7VCPWpcZ9eTrSpFn8j5k7QuVqyHA2yVWN3Jj9sgtAAbwqPcqkSjdmnTLRYcLqSDwuchF24",
  "key24": "63oUEhbNihqyiCaxeb8243dLxojaD5LXamZVtMatvhRx1XJGqBteNg5vHEVbsg4krTBcAnSVZzJ35A8uNV51kP1j",
  "key25": "5tyYog1bMxown4eEsbUVmibkdxNBY3zdXfDhxTvDF8R6U8MoRmqUaVeGySA7k1LVCw1fMhE6cXxtX9a8ce4Z4a8Y"
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
