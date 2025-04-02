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
    "xh39uo7DS529vS6zJ6eZxDs3ezVX7Bm1VkvMJ3VfxYf5BqyS2X5nStkYTKyk5W44gu8AAL97VhTrSh1HhiGyLNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXT8WsYKjFikhEjVtCXSromPjYiLN6n26F3gjAXGLCUrgFZz3P44UtQNWKU8n8Axcf3A5eXfrzwujEnXh6Xt7mw",
  "key1": "48Q97qDDcJA6qxhKXcDWxvCneWWGGWN6MBypGfppYY6YqNmNAhqJCL7wsF1rJtT63zkx5Cy8qNJt2mjW7fpTwyr8",
  "key2": "2E1f5wXpWFbMA9rA4CbS6gowxvZSFugkZ2Weh2YMFQ2cQ4H5tgbeqTuTigzqkXbUJpKG2SZdNve8RHsSpUq2zeuE",
  "key3": "5kehUPzMwihq9J7biBbx8sFMwsbhtwhRkwxAtSBysjF37HjzmxhWAXJWCgWhpGjfJkPDNkbMe4mGDRifHgPrs6Nm",
  "key4": "jGH2o9jbYsbB3dvBejxve3rg3c1Bta1bngo8zqtbzPx6iC9brADF1gX138ejUvUwJ4aQSirc5DgrgaNwHrBx4EZ",
  "key5": "3cNgDv6LPw9A9NqatedT8HieaMuhmwUtzRzGL8VQH9PTpxbxoTKqiMq2iLCBKpBeKJJT15rMjEXnwwUkxatqLy37",
  "key6": "4uJcq3GNa4vDTzEYCyDJ9rMLQnxNxBMhErQJb3fZXgznnEe7qamoLnfc4kRPM7ZVAiLoNxaqoMU5K9z84228i8jy",
  "key7": "RYmEB39Do8qAthU4HzX84ZmrdYbfQuRY6mFC1pPuQY6STbpsNjTtJ7NDUdRQvae1jy3whuVA2jF2jmLMBvDZ9cr",
  "key8": "2tsy5uC8sQHmjjwFuhq5RaBSAMz1ZbPUDN9kpBLneUvr8hLy6dMWZCrcMaK4df5tT59b5YJaasNFesBNNoYdgxxo",
  "key9": "5t4HHL2V5SYaULquthr2Xz5EuSEtKbB27X1js4SR3cudrWRKB1vy9uiNKQwWtCAesAedhowHCMN3rHasS1eirgza",
  "key10": "2fZEMuFYJUX8E779a4nxBct2cqAJhcttoygnqrHQHFbtWC2PZu7cSDqdXk8gtCpSXqvAHZ9mwSiviCWJF4QYfpe3",
  "key11": "3oF65pMcdXapwRBYqmNjFduaABwfpMbXyWJcYNKVpxBGQySVwW5ds4CRL3Vyh6bSSnU8jdsv1pQidA5UTMzKDyEb",
  "key12": "3PhKBfL5fQLvf46cNKgs12yeLJGxFQWmCVdyqUAmDF1CMczabXVELdGSTcPR6DqaRJf75M5Fxpb3G1gCZv7QkwL1",
  "key13": "449fq57yVKJzc15SGq8u5aHSALavzT4yWhgByUQUrEtmRkVovi3SS8uEPHUWX8JYi3d1oUHTjxmmdsyS4nFymP3T",
  "key14": "5V6LdGJUyHWgCq1KwpGNEmRNXz6R6n2Ka8R51XdeQti6Do8d7qvWZqWEW5d3P6cr4R4ZZH71A2xGSDxsaJu6y3bW",
  "key15": "2hfXVgqdkhHm42WmGkEPyvj4pZKj1vtpZfzHy7RNGT9iSbSnTWkiEnrsYN6XD28oSencwAH5kgQsktRfW8XG1c1c",
  "key16": "4UqHamThETuXyidrPbXFcfT4KCs1PyNmdGg8M7qzU4wNmbQC3KRasJw2Er7DbtuakAJxJqWGbAD5UiJ2mLAi38oh",
  "key17": "37BM4vA1L1L6YF6XziyPtcNQSfq9nVApcWjFN7NVtEk4zbVHvYCUoBxJKAjfRh2LVfUud5MjYotbzBjY1R5yUeLB",
  "key18": "2zn2u6ZiQ3mTV2zheoDY75wvBvVjjC5wGKVpy73w3PvFt6iW3uNaXVubSzeLSCcYePkdtKcryPdsp7DGiKkU2Kfk",
  "key19": "22zZsMN4Dq16rkpRy9ctkN5LQ7jAXGiiM6RrJBXwgWpcEnE3pw7vUcJTA5DwCZvPzbDUHnGnWTd4YJ447NX7DtSJ",
  "key20": "3CAa8GjFVeLQjuUHL9Rq53LZukv78mk1CaLCdedmpYJWNZ4oP2hrZpaWii2ju9J59vHJHox4L4YQ382mQ8pcVznx",
  "key21": "tc9bhYhhKRXvYQnVpBXJTrZuN25N49S7X6ET4XecRtkyhz1KhCJ9tstDtiiJqSBwN9sWHrevMMu2qK93ogtzDEm",
  "key22": "3EwaJhG7Y49ebezCKbjvxLLdzbGYnDg34sWRbrjQGeuEfbB4aZ68CNbC8DEDZ4RkhZ79PQXMM7WJnH2yqe45fpBT",
  "key23": "4t9HAkLCK3WBTjZL5zrGjWV5TPqbwDnWYuWEZgBbQEQjbViCKnpQXz1WSZJpm4N9kCQSqjzdrMZMr31ZjkjB2nTY",
  "key24": "5oYJghUFhqKUEYcjvUmVVhMAvte8N89DJgP8zkkBJBsx3ojpxsw9v2ebjFHkecmFCUpJbr761QvhJJ6439g39ZeZ",
  "key25": "62bBtFCDKNx1KBPvhYuKEzCYderUzo1Wey4KQPYn7RCjK8vYVX8M8WqWkGEGsJhjy869UNuZbYAwKgyKmVk9t5wy",
  "key26": "35Wi9xbBxiRNPKRcDgvcbPTVafpou2NNuZubWvaXJwEU74n8DsqxctCeEQSnFwyGqHTA9xExaCj3XLmrFARcuvtu",
  "key27": "5i6nxZFeb7wkYrEm5meuRgt5nPJvDMFiVie26Az3EYvRWZ8NygrQA5C4fxgiFRw4UK21qrnmckhqx8zapoM8x4UR",
  "key28": "JwVpM1oMUe8tewyM6qrJK53im4z8rQpEBDECjNafuAXqMCh25qtVVpjTJLRJLvL37Uncn3tz6PrdEjLKbQJhJ9k",
  "key29": "4nZa5MYRiQUFa5Hi5jfB3zmcE2o5pqWDJKamzk5T9HUAjRrNebFpSHT4VVeXzoEyn9TEnsr6mGCjbnAWPHj6dVWu",
  "key30": "2mAzycKx221CguScCUh5qpBPUW9tb3getZArtW4uWGaTNL8uaKTP3EMajwKCoyaCdrySMQvL9qsvMuJ5FDcBowz",
  "key31": "3AjhaTQDtL6ZujggwfakK2Xi3scyZnhe1mCAyJCHK686edTAGPyQ1ewLUeaV2SBKAkLQE7ottuXU8dKcbfyGcPh1"
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
