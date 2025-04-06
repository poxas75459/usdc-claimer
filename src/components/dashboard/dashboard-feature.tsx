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
    "3zF8H4PBcoiVPbRMWfx7isG2jXuctdJcvZN4nkZq1bjAF7Tb1B5Nt9x7bmW8Ht2Ef7Ze2HwG6sQbQ9Uz1isnzYQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkXyYd9ptJvQ1Q96VTea6p63nHXm5x58pbDhgcGicY1APQti5MWxox47yBDagyL6sM4uZchkuZ1Do7RPN3FTSh9",
  "key1": "2KPzJwRjRcK4sEBT3rmD7t1dNZvMAWvwkxsRyGTFv5y8c1XjBbyDRKUhottCFh94oTpVsvy92fJwi1bAz6supBji",
  "key2": "5eTNu4axpR9zDtSXeai5wiPKYY1jV8Cteo8FRcqyvdthHnZNL5sQwsdDYuZ2jkD3F2S8EnQFihtnNfiCrsgTizJx",
  "key3": "24fvZcdByzyiVgN9urZymQ4D6Emr34svSsVRvooUSM21XatswMYgPSUv2Bwt3NP8x4Q1WqAerh8W67NXAvwTm4mh",
  "key4": "n4oVAco5hXFRjQ13bFqMYiM8eHg5821fmSUKKERCv9KasKukP2NhPd9obxHsnSjLe1NwgXySZEFKcJk3wbqikuR",
  "key5": "35bD7JMnTkteLxCZxA4KJuxamBejieYLj79coPx2rybnUv81qr5C5L4c8RHJFqMo8stLwPVzCExzExJvgvPVYZvP",
  "key6": "4X5ocNk8ZbN4p6tPeYKa65DmNXqkyWzcX1tadyQZdej7WyryG9xtE7eNau2B3tfPC1Vco3U8Uk41D9rrrLFX9feY",
  "key7": "3dn22LTPgF56SrwncyHiTupJetx83hugyFiDZXH7JJKnQGtmaDCuoTL8yYMoTV3YnSskTaBhcSQKgLk2cWZRYY3d",
  "key8": "SRnW6wXEqgPmFsjJbkQdWXq8gFgn8ovz9UHeuqDhR35TmnbZkh5D4TdS1fNzqPUHavEa58wdQbfhJdomD4Kazsf",
  "key9": "3iPfc2QrxDYjuZzTCFQ38YHrsrYN74Tv6k2xtNSJ2sDjMvxiu9y3x5rYgd8C3CQunXbGKkcGEHwMvxUFSNhbS2dC",
  "key10": "4h78HUvjzP8mXT2tTMnnVuerdCDxz6iHBDhHSSCPcMB7ncVpreKZsWZgvpGGwLWyKMS4tA5uyH8qLJHH9hGQDZET",
  "key11": "3p7nNrJbswJRvSJN6KRYqDwNc3jhVi8JAriGb1Tn9sjdCaa2BrFUv653KHUtPHcKGsJzEKwLyMMWJwo2bk7CSs7A",
  "key12": "58VLRGq4BjnNAanaLXcaCiRZobvCotqhz1ycPVaYmXs4YUiNuUxaFqFsUgCxsaJhup2VtEDskU8AoZJmC47GYfsS",
  "key13": "5z8k5M6NbsX5bveGmSXEwyY2YXTRmdb72owm9hy4VfTbdtXfeRGtfaUEihmd3VznUPNRDRge7ktQRZHe723gWFPN",
  "key14": "4nNriQNxxTHuLuB5VeVckrWQzAr1WrSZybPBUSv8dxpTnQhisSAHGLQpeaUj8WAPiRDPjrYVqQiu4x7GQiasMxaC",
  "key15": "52rnV6AwW44QtC8n4W5TxP6g9MYE25gf1Lni8VyP2qce3YZLw3ixbyAeDEpHT9rvY7Xb3xd6Zz43tjRSn8wwhWiq",
  "key16": "5Xk4L5i9fBvQHmoiSN9V6nsyx4NnWfC7Ry9VY1z2RuwNWx9FhjB4k7BnpyK5SnfTzzytjs3JuG1ZD58uEncPq5UH",
  "key17": "4vuzmgZPuThU3aQbGvSMZxfiiU3ijoxjSxtYFPECG8di4vX5RS2BkuF4d97bA2j5YiejMr7oFi5FaNeHL911ZqKe",
  "key18": "4EY7asRjuJpBrCKMW9pPW7fV5pp26b7AYWaghPP2wgKNrsHdt1zyXaKAta8Wx2dBX7g7ehmyHgPhvBfuVbW95Fgt",
  "key19": "db8RD3r8CrN1uuzEeP8Km29noFk3qYpYz5AW9p3uFpyVgH9Jkqk7NbiMWNNfQKTKLpd5mKAFsref55bWEg4pb3E",
  "key20": "zodQBYcyXWKfKQVoFaF9xfQT4chZfCDsdaP54C7qs1NR29CEtdjzYogDRhcWWBQXXaCPseqwgDeoPEwVaFJV3H2",
  "key21": "7CmaxEvRPxgJ6ZJJAU7cYmrK1XWbDm8cH6ESQy9Cyr4FR4pJuXHX37QZpoatk4JBWtNsHQdodVCudpmPrX6ie1E",
  "key22": "3RijdSo27TAGeGyzywq8wW7B4ieivGxEpeJ4dDwbkRPpDeeXUuvnv9ac1AHi6kgQpBUG5yNp8hfqkVU7DmRaG1YY",
  "key23": "dQyHJxcRZMo79sVJZGVkxmaM9dfb1xf39htgyUVcbQizX9QseXfy3esSpKgtnxTf6qKSED4hEvFURj6oSzmBXFZ",
  "key24": "3vSw7FqMPv9Sb4daoCJK8b5PF58tuDWoqyYjmciAcrVUhQbceMihNXTjjoydRU1mAtiLJNesyMNuMLT1coYgKbP5",
  "key25": "4qB3NpNEy8uqxJvMDsnN3pJm7vK8DiVuKkNZbUVB23MCQvrcW8pFGzFGvneGsqk3ZD8pkmuUDihKgfvViMbZMwYQ",
  "key26": "4PNMWH7wy3HwMAPoEJLXUCnG4pNBYFN1ZctCATbkKpMsxVZvnPy3FqZvZgYrqwgaoJWxvfhXd44fGkHpAzFqKDo8"
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
