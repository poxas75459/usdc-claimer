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
    "2aDFdLoVk38o3FY7iix8H9jrnTMEG5fHkQTR2EkXdPdTEcBPHC8ZwrHcvB3SwZ8B7vX9tGqzBPJ223a135oFirDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCYK7VmsKPxHtdqf3dejhpKRaUDFMAQ7yQS1iQk9KVNphh8s5JBiTmTmHoWvvnWqnae6mmG3WcgBLnpzHbth3vB",
  "key1": "JvfNtE7LPeqXsmVjgX7Pbb87TGvn2pRcBjKig5C2aytKU1e5wo6donganSfSQnG3zUE1N8N982XxRFpXcfTojom",
  "key2": "3yxynDaikS631Uuqzmnn6Bdp3hZsg2mbSYE3ZVgLrmPNkhRAAedd6WC16KJyRQY33bvpZMkQmCzHVSjorZRD1Pqz",
  "key3": "4EFd6JNnMKTTQA66AAUDNaNYzZZV7ETeAh51DkVyvdyUuqwmUKPotBynMHwgXpXakvWrd7beCrw2CFJY9YdmaENy",
  "key4": "2cLze9FWbcniBwohwxoLaXMwMrnAhGdS4ckHvTNwhim1WA7FHxbSi8Dgyug1QeRhbKzzYMhc7rqt8GMVDtpcVfsS",
  "key5": "2s96E2AAxqUyWDD6R6Jo7jH3QcgHMxyxh3reKPmXmEMJYDCd1Sw34V7uP7GxY3vFVWmYwScskgXSnZ48rN5fnrc5",
  "key6": "3NzLm4aDNzpjLVi26gRp9wUj7xibzChqyGfsm1gsfZmKz8YC7tDTEDWxFaXvhGfPKmwG6dwjrGKKhqTWyskRwyBL",
  "key7": "2EgFg23fSERCee5SiwmAbCDZ2HW24QNnB4xhywYGAbhDN67cXPBK87Pha1dC3HEdtXZ867HiZHkxtEjJDQcvNeNP",
  "key8": "52SpchWF1W6FvdLJrcN1m75giZS9LAPkfP8iwySYUPbJ9H8GVZ6Phh9rF4nSFjhWGw3dxtaqLTU2wUYjYGySwE5o",
  "key9": "251tqB7gSggXBbjPp4xJgKvAP5EbWBxUu98n2AK2Ch7DaZm8pifZViJwfe3agx2tmRFVzmwXZeMBLnjuwRY1A8tc",
  "key10": "39itJXxYHy2YtUkcX6xhx6uPKpGPPRFvrFzZMoPpkzkFvp1TZ8Bk3MZ2sDU5vgCzgwgNsmA4ckeL3rWqxk38s5z",
  "key11": "4rRrhZNjvwu9osa7WwABCaCdfRRwsyo1eN15Woy1ZkSfuPDnQERBgfs9DiwfQ15XuJ1nP2cV48FLj1cKSfB9Zr3Q",
  "key12": "bp4gX3uNncL25s8LrnZPEBot9B4z9q6KRtDziTNLb1udvFgbkCbiezq4vaDZRQzRM9da6nCsd5Wdhhb6pXsPHck",
  "key13": "4zDLqgqMDsd4rAku4BzSEAzSMeezKv63k2MZeS1yTjHpuEBWixM1G9RTvCm6JBACXTiogEdFkDRw14ckhzBoGpzc",
  "key14": "4wyyFYvgtHWSPYaLvuyFNz8pDacdF8pgon6dj4pmRneM3HSV76GkbAoNh8DdsYD4HL7CmAKqo6tH3DANhtKL6H9p",
  "key15": "21nwwhR5k5QCdFi4MZwEJsuv1eXtsNQ9CKmAiJxefQZpFemkRKucDV6VJEV6fFW8bSR5kLqxQxVESKHUEeicQ1Dw",
  "key16": "34Jpef7hXmqKk8dDnQ43CnWssuYD6nZ6SnS1jyH6SNRfvVHxdDQ68KQwAjUTR3zzba5LNA8KSy7yKbNcK1gGWRSr",
  "key17": "37wC4j2PQ4R9MfVGYJYU7t5rYg1xFhS2LtMpfn6AE3R633g6QCZtZc3HGhAP9Sbg38u6GxTKJgbcpj2d32rjymUD",
  "key18": "2oq33ZZtivHCXKLRVWPWH1rqGLHq3p6gBDYzQR4ab18Kwb2RvsX7tiwBjuy3aB9zT4sfrgVxTfffJ1hjztE4oaSQ",
  "key19": "4psnzJjkDLPf4XFAeRHLVzSUeP7uYxHmfX4xpxY6xs5nmbwpaw2p9votM5UfvP2QEH9sw5BuHtg5TrypcoNYzTJT",
  "key20": "yRT2AC3pffbCrXM6sSA8erizyLFM4qcGbprg7WFZQHWRg8G9wQfYdE7jvDc9VRqEc1YmCMdqqrpYcEJLuQJHY7B",
  "key21": "E1QGodw1BzCNBMfDAKaQ8XGwCxPyCpHyVwZt7E34vRsfbkVgdBoVoC9o9M3ypzjC6JXHZYhYkhZHYaTgo2B18S9",
  "key22": "2vgF5ph6a4AuRexfTJAF5hzyY6wjiB3xt3uBNFaJWkVWR2mbCxsKjLAdFR4xodrUzJRGMNvCwYbwH3RkhVCfxhU5",
  "key23": "3j5ZvTt2x1QTd2JzPR47wrhnL5Xizv8zFmWMTZLdU2muoQsy2MqEh2gLBwzb8nkfVrfX34ARuGD35qknBUt5jGp",
  "key24": "nPqwWYUNfkMZr4dxHx7EGog5E5PkjGtnK1T8EjLYTHf1Yjkad2Eey7uSzzN1daJEQWzuTJt6AHPDZLPZrbnKv1n",
  "key25": "4vPkGUYU7GtCmNy9EaP98cCCMpRon7cRfGkBaqda76hkac94R9kRHLVwwDjxG7jBmDxUB9VUEXDaKbT74swn3GiS",
  "key26": "3jo6K9Tb4rLxgs8bWbTopSvyEd9PKezF5FVF1SrBKaMqL7wTyBsGhB4yiN7ERavztgiyS6RMPLFMB8E5mPdPzdGk",
  "key27": "3sYfh2XQo6Y989skHDBhk1Z11BiMkdMvTtd9rCjadKVUqcFs8mDDGwEhTGcAAyWNiVjHxtqxAeBVL5kbUf3NjpLf"
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
