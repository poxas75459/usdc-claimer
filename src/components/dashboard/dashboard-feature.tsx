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
    "5nJPdK4Jcp5zCpDzyWyfquVs2NnA98JfyBkoMfCDjU9XpE2hCzA1hhryYxA5PakXeeaZx8TDKNoJs37k7RCEesnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHkMfapVxT4SKzG5BzZAt6djbtXAJCeAc1GEKfkvZRx7i2iRXThY6t8ZbdbJphg6MdqiWaWJJLQtoaz5b7nhy2C",
  "key1": "FZipPbzQagWKzxwsrvKQ2LyEiLJt4YCZbTm1mMGYpuqsDbECkVFLhJTiLKheYtty6xR6XL1wP8J5cLmycnjTtBE",
  "key2": "4vYfSz567cy3cDBXbfLj4XPEneY3Le1x3Aw8gRWqbYZJnoGmjqx2kCGFjde5LLkddXAt366ZFfBrLpvfh4noB2L6",
  "key3": "W9CokbgVHobBYZkj5SRbyK8TYJ3AEnoqCEfG1dHbAstLrvMxeRcMA3yjapTRf1K1dPFe6GmbzcefpJgMkERdPYj",
  "key4": "49Eb2CiUPoJqZtQDHBtfdnfBuFQGrknPZmEyxqvYjYbQKeiwTCwvDi4ZtAEwYqUDxULo4uj1e6Zznfv8yX7neHBk",
  "key5": "4cYqNyJCoRKVdYZpzAfzRFMNg6uuiHwji2NoYJnBnzpmBnBdAXGtnPTtjqcPxMvpCMhNUtUnoimMDsPzEytxZd9Z",
  "key6": "hEbebEecE7iESKep5ZdhYFBSd6DBEqMqY5VS9SLQzq9YhrUpvREg4XbSqnXxjE9eqJJDG4R2FYk2h9NV4Ht6Nng",
  "key7": "44naa72xRwTYZitPFze7FiU3XN2KDSBt4VEGSQkERx46bvkKCsxeQXnK6iwdKcSx1Ef8FvQLJYUhanW1fSD6ZDsV",
  "key8": "4cBaZUkotJuMMzLaY3txYKJTVUUKxgW9hqzYTZtjwZC97TsqSMQW1H7bu6Gr9EFCrHkJeGivJzDQft45pcw2CTjX",
  "key9": "5dGnHd1NBMMMfoQTxPYNMbq4fTASwuS1Qw26yMURA5JXuG65nyuwgKwDxPsAcx613BRpMC5YnxvphVa7EH6mvBHo",
  "key10": "34ZnA87iwMqVy6kqZ9KcFYrerdgGnAzPZ6x4FqNtmSLYkmqVVxWZXj99sGaBGCAGwnw14C3hktABFaEaDVu2A8nS",
  "key11": "47PeYJ4RYi7kAftk5EJSBphbL9h87WicmKMzkbxgPbciK5dFKLrNtTMXBwnXWUYUugspoBRDASugKBWGgb2SgGnP",
  "key12": "3fTXUBJETJxcQvj4qVReSy1XbesVPbFkgzKn3W639pe7ovC7BMhp2mgHo7JgG8njid6WUWAXx2gfRraaZ8VGZYcu",
  "key13": "4ba5R6ZFRb45hW4TQXWcjgSN7kpuiFTePtmXgYWU8LWusdZh5U1yVFXK5rpg8CZUVEJRgL4BbksRTgkgrt2jPA65",
  "key14": "cqQVesNHkTuaBQi3HWrGF4nMefPLPUvwrUjDsgNcd4DsBuW5j5oLRktq5ipSS2qX4H9F3r82womMCUZFscfteSz",
  "key15": "4PHbb4bXN7VJV2ggX358bCfvucp2dzRCum9Avw8WSnPZxaxXngPBef7Uynn1UnpvRQe9v3Bkjkjr3trxs3aUo5aR",
  "key16": "bfcH4Zd2nNuz1nAd7bccZmJqLJFe2pwTA3xnihMf9Qygx5rDZXXParrF8Fn2zfDLjdZzrqGwfsoT366ttQWoThV",
  "key17": "5x5WnKbcSeNkpntqHkWzHeBfALbEFBJEFZrkxt99uunEeWpL3F3zNB9A5iZkjg6Ng7jhA985uZfnGzipU9Cnzf2r",
  "key18": "Hmy9XaXvhfd4TaMLKT9gyWdi4xVvaXgr4g6b21e2RzNnE3LRPHXgmBzDhjqdQmjQCQRbPerPU2ix4uQYbTbQ7c4",
  "key19": "4aRckBUDSYgfxtXC84DCAWSNbSBunyy8gpfaKpcksWKJc8qDr2o4jJAbnvLs9hHtgmFnsv3s9jKnqqWhGSz12YUc",
  "key20": "5F4QkxDxTVS7JYLecQBAedeuqwRfGSbZ4qUufHGXGibnUUtSc5wJjbTQrVv2GxhZy8arBNQGi6arC1zxG4SVv9uS",
  "key21": "Uc3tXbjzaLe3bzxJ2rCugQrSL9GzueAT4je7Qyy3YhtZyRDvSbaDQUYB3TkoCW9DZ4JgVs3jx3p9FHBwYJ5yjaA",
  "key22": "3bypLHXKLiSXZKqxmbthrHCK95kN4vH2aiip6cNBFxGpkKR5j62gY9WWrainAyhWRGGmr8HcgudK3dzeg7stGMZp",
  "key23": "4UPnBktD1qwaNzaP9zT1pKNmXigpzdikn4PgjsAdRDsdeY3uKiw1i3rse2AHRz3Y5vud4Siy813XRDtgskDVREc3",
  "key24": "3zaXAnnKffR5a8fDyRezz9sBZDKrtSAbgNq6MynLeKwHLC4njzxLZNmtrtk9mG2WanCadRGJQW4Yt5DMM1iCTAzJ",
  "key25": "5Q7L8DHkW4sZihh1RmBREjSuWNrczvjxfF42tHGP6zMQgkMLDP8wmJimx4wEgXywejYWBYyovUFqR9xwJcveZnKb"
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
