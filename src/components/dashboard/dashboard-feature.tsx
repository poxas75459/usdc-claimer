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
    "2L2rnytpBrxzK7fc9J92RxWSP65MBJqWuhPu6RznQ5sy7cU7j5ynTnM2jhMcTGjVHCfi53TwS5eZfzCL88FYyyCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tes3x63ygYjjyTNsy7jhFeKiqQg79CxfkgWqL49QKn2NYhXsV81q4Lcstkzd8NvnU9JKpruJmfYFXu63vDYYZAi",
  "key1": "3K88Z4hFsjqC2GBFd7UQMHsUmjj6qGGA6wnhfnxKBJFUwdeGiY7nnX8DNgLnFpBvLEw3sxaAfxqUF5S9Y8GPJtDJ",
  "key2": "2sQGvZxBCs9BwCyiEoayF7iYNZ6wJJyZBjf3FJgp3Lgvo8Ffxpgc7eBMJUMeR516AW2xbTyxF8543nN6asrz4Xyh",
  "key3": "2Yn4fwmFUPRmZokAhpeHrcWFm9qvC8JdGWrS6vaKCXJt2UDN64D5KYUQskf6FStqvcgqjGzaejGQZjXoBcJBJGjB",
  "key4": "5AThQNSNzjQrNkJ41yTthNWxpGme8ouJJVUH2ahGvkMezFcv8pLRf8pKCG1aZFvGgt2mME2KVrB6ePcqWdbVh2Tg",
  "key5": "59SE4frHvqhJ2SpSyxP3HT8r62XJCwGoCqb5ht7wS4Fxy9gBDcbUQw4HJserXz9eg1JjM1qqvTZGuK63phY3ZJjB",
  "key6": "2vHERr6qJyauLrLjoRtGYrHkPzA96RCUFMqjmRJk3TMsmZGdzZVWUpvrBarhNqungLdNbb9amCNsctjVrjKWk1CM",
  "key7": "4f8bhdYRhPpPyG1S9pt9eRy6gAVQtM6eAJFJqjadjkzWWkhLbK92e4qJ5GgebuFHMfLx3Y68pa5tErT2WkX8qbpY",
  "key8": "31uapg5DkenzRdC4n6U77pk6TSKSmyGXMcBhJH2wDJ72BPv579jijyJnNsDAUXeWssbySjA538EWPmSFXutvkdzZ",
  "key9": "2cNK7Vo5SKNHcyFioMoKJLbJg8yExo6CpDFgQZLpS6J8ssoRavo34YwhY3YKciD61pgBhb6kvbTfQu7t4bTcUEPg",
  "key10": "5Pkkm2ew8R8zxvNJfchrUw9EDtS2rcwjqgXdidFwfcHv8yYdo75x4sRbDDSS3nJj2Yhnx8kLMLF1QQSKHNYLrtEz",
  "key11": "65mi7pKwcNb57qXLQFZkNhnirJiEFWv9emxvQwpBERzGpUMFUZdCGShpedNgASssex86f77mz3ELbsRX7ekWkpmN",
  "key12": "44jsvFGpmvsFPLZuBhKnem9bsbCD44X23nVHyaY2SeFd8eVYi6ydscDFpDkzRBsa8HHT3KBKJ3TwwQADDz7rnDms",
  "key13": "ngiGcUW3tJpy8K7sn9hB3Gmm5rAZ8kXAqmT6gftGTdjfLE9Pkvom6JynwcuhRFN4KbLqenmszVuuU9MDsHHC9gA",
  "key14": "3uPevX49AJUPkYtFSG1Gd46vTswEFQNdwupRsGPSKsF2SyB62enPnrmXWw8D9tsnQbQXJNxn8ffgRR67tHXPYKkZ",
  "key15": "5B3F4CwRa4PPnnKh5usXW6JfD2QagtGHDti2YkoMTNnM4UE8mbDTJm8YVYLeJjCaWvJoSp6Tf3d8nCGPPYTkoHky",
  "key16": "3cc2TooGFKkEFCnx3a6YfbdauKVjcHYA5XB7NTsN9B4ku8SDHKPk2H62Be8C8xgkr6WRERJd8LLKCTYurm31kDQN",
  "key17": "2S8YWVAHqEKAGUhfSMyi2D4FZEJP1yBkzY5iePuoKiNACSDDxTy19baALpBaroSTCsuiew3TgtiKL76vtMA7tLi",
  "key18": "2JKXWtkiRrGo6q9yHxNrg4ijaacuCR9wMeFS6DDQvi8a2M8UrfF1BmhYwAWeQrvbmw1bwpv9iVrgbVFwKCrQzzQf",
  "key19": "3wewXc1kJ747L1RCVd5w2RdxdW5igWBsQzaqEvdmLVXU5gfTYb6SmGgEiFiLwHvg5ChSGEKa1aaYJQDc7nz3owHR",
  "key20": "49NPNGhUQRh2eQLq2Uyr6YqTkCUj3cvcV1qLEeqUT35JJpDP3EPs5usLJwcHFgmn1xjgKqK5hvyVM1Km5o9frbkU",
  "key21": "2v8h1tAWEjRhAjjnQXwbywmzZoYWohayjxk3TxY6kX2LZACLbht889y69mJm7pGdTiEHkMpcsSo6BmJ8pBzQMR5Q",
  "key22": "2c6QUAD4DeXdVzWHd9FHLMMVdjbwTEA9Bjaf43Q83KL9UrG1BHE8sNfewU4RnVDZ2oKzfy97fghwUyBk6W1HjZps",
  "key23": "3ufyrnvgrepmJPWJiK3sBwkoa6VZZ2Gjfaw6tEFh73buTGceHhar17zpzySGBAaBkcQE4ExWwSRgfNQnNR42sAPP",
  "key24": "32kFW2UoZMGPG7CmZg8Vcwsnkk4CvBDmPQ9vtJGE9rWWKrU9G849vkG76MRRzmGtYQZWEDzYJf3vDxd3ogQjLRHs",
  "key25": "4JPDPwQRi5G176oc1xREgt9aiYrZ42ejeHx2ft2yb8szpvwSP4tiNbyFKQZFvhRGm7m62rYYbZdFRAUeUqeHVeXd",
  "key26": "4im7BspHXGU9EbmCmQvYDFzL4DcAoAW34Rrm5uR2aEmMLNPoLr8ccFZpxzuZgstuNFea6BgowCw4ht6qEeQUwL6S",
  "key27": "BENirPuagf9rPwEHmELNWNfEdi64tgng5k6a1VJoNAZENNegamjjbrXZLv5ezMBkJ8Jyg1dfeT577hnZvCdZF6j",
  "key28": "32sot12CGkLza7myW4HChourYk3tWyYeR1aLWGSjUWWWbNPLqkLjPpmmtR5mzdG4ruiNRnLt25JWvcfwqmXYx71B",
  "key29": "5TSfWRMFs8C7qYRdRfCibfSKkCwB1GZ72xKZCKFjRBtZ3afxs8w9CxRty8rCPy4xqvqUi8UUeHuh4Twye4MnGrLG",
  "key30": "4EE5Ez76YphRipdHep8WF5PLAyHS32k5uj6rkYcHXzEMEwYaxfMpFmkAcaWV7w6HNfVjqZa6VKAk3XdyBDHPreky"
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
