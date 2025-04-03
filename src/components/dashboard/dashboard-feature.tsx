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
    "5BJJLQw997assvjiTYNA4CvpgapioBjweSJRd2gBuVfTsXmKFTzoRLgNCGkght3XGNLvkg5CoGaLsFLXYEBe4j6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBFYUkV7WpKGJvixVMGhLxqY3hUHVER7dbRcpU8MxhAFefdkJgpE7JMCyg7oBs6ZVELFDBctihJ93sNx963uTAe",
  "key1": "5ZcFzGrG3M2oFFW9cMTSC4KcVBHhBLimHMgq8tncfFpT4QSJsG6BGXLoXdbxd2pYhJjxWqhfgpaHYgSAucuXR4by",
  "key2": "5x8qSEGzi9Cy4NqzkUPGNFL5c9SzzZhrsbVC5nAURNEwUFvnwsfpLY7VNLdHiiQDdpbeC34cxQk3wKPYb8GWLGX7",
  "key3": "RfCdYZgw5EL2hRysK3HnJJ9tVp5ZNBNkU1aYPkNTNXg4AoGvsesWzL4Cn74669rXbTfrXbUPcimreGx6PgmZhfF",
  "key4": "3xEY6Da1X1PgPKENHtLAjVeTrUNvEX35w7CY7HthfvERbKrEk5xNsKc6tDUqLNt1NzxaVGyUCf8shCLR28qXMyo4",
  "key5": "3KwH2VLMDKgeN6dVjtQb83W7iWjRwDfMmdLvLvVgChzD6WSVsVWpq2rfWQzeNtjbQZWaf5CrVWbgr1sZE9gDhAnf",
  "key6": "4Jzxj39cWrky5kXH3LhAQV8wZzvjCDLG3qL2UZHV4H4L1WypygnabhupLrnfUiN4voPRRhCEE1SoQZVF1auvSDXW",
  "key7": "4JgoeDp3cLSWEAd9GEbtWmSWMbraAa9oVQpX54JineQULWbAL5g5WeQ4E4Myk8rpEnqKwjxwZnzbtNZDb8v5PDDX",
  "key8": "3EzPUUdVP1ezJ2eCVgwovHBMPpnotjUeXrN12wGUEa19dHKBscnpszxfmtWxQvzNg8wwZ3Ayfy68Lk7ZGaNJyvYS",
  "key9": "3iqUpg26nmQdi2QtaLA5K5CB5Jnta2j3wRnmnC19V23BXeDzdkj9ahmpjYtPu8PG5wFeaofam3DbevQ79MNxFfnk",
  "key10": "5nV8iaPqHrqayizxonQkjKhfcW4jL71R8ZRRbpYKGDpwCkwAFzyZ6jgQY1VGAoKYJKkVq3n61R699bBWVgFBa2cM",
  "key11": "5vuYrdQ14u6RHsd5QmkuDF8DkHFjjtciZ7BPRZPq96dvkFZ1gS21LNEzR29iFoZNyFk3C8wjSQcxjmsNQf9xX9vd",
  "key12": "5uZytQA5FzsJ8i1PSxzf8ufwtJdN8WDd2pGLqg7C2ptxwsdcyUpmz7nB7z855fihpH9UgZ4pq5wdAFTn32UV5pNq",
  "key13": "56rSfBYjbsKnstkZyE3c8shHqs2emHhSMnxH4ufpa4BhaxTwwNh5cftJpYZfnQbcwDJkgPyogyXbx5NV9qtT5NeE",
  "key14": "2RvvcB5iXid4nP9yCspuCFokzZdPWJazp1PyHV23vHBoDmhfauTCdLg8iv6Rxb4xXSB6MrrRepKEH4ETnpNvcn3N",
  "key15": "57Ff5K92UVQ7dPM6PJ9ryQF6t8tfZBeJ1VP68J4tQsi7aZCfWVrc7pNUL7uJo7y62C1KoBtF2LvobKGQj1Jdt3oP",
  "key16": "2gtoSDqBAbP5Zd2mFhR6Z67upCpKMoagS49W4CL5gJnm6ttWA5fBNQXoqkiVzuRj3bHaRZS3Fj1FpTxW6dykV5QP",
  "key17": "rBmdX3tRAJgfPFrjb2gGWdW9Du9U5v4Ei8uFMRZJLf8wSDNL3GU2NE4phNZnvgEEsZNUHGMx7E2xTdNNrBnQdL1",
  "key18": "2Nbe3uKABanDW8DsV5CnU7S7dfNXmDmZ3k8zGre4JmEeqYLDfvP3XGqnWaPZ6k6RyktAkHsdnEZr4xKUbuagW63M",
  "key19": "3gvLSfTbuF7YHiTGyefUjQucsy6dGxj3D6iPAdG5j232KfLB7aseTfHopDqRaL5QxRpMbquZwCtpRrepkbJLzR3t",
  "key20": "3LdeNkrrPq9ksAz52XS1ij5Qo9FPKJXAKzPjKMNseAiDsTK58zVaqpSrNZSsNMtX4A6x7hHdnPmBPY9cD9ZUkRaU",
  "key21": "2phQfPAqEZJ9nxoRvNr89wtUPH9SnhJtkCvg8MJmQAXRWJyfdSuz6mRazheHtHGei65HnTPH4xHJhMFurNjG8gDx",
  "key22": "36J5MGv8dNMGJgW3aNqTy6Fg74szsNzQPW36W6ZpZSoKV3R4bNLqC8vnTNrGKdWjxCp9SqQN5hvFaCxwZdE6Z9XR",
  "key23": "55DVmpDDn7Vn9fNn3BSfgcWw5KA8DmRkakSJLvZGqTgBZrUsagSKP3UF9vE3w7ybuCQCBb2uT6F5MRd1AAYER9sn",
  "key24": "JdiuisqzNU2vVjYXN17KuXMVQsTS3p5czzkqn3Q77ZnjJtrmrDXKrjk3XwgUkw2AQxrWN7qyizn7P6gTFQrxNZX",
  "key25": "3RBMLJ848yrTCsNuzxX9VCzaaRhdLxWCiv6Z5dAb7EowxjV1QXJ6CwkjD1Go8EB43mG2iRpjSRext5Y5Yq4jrpcW",
  "key26": "3qXkD1kgjDbxsTgWHfvX29tWU8MZQaFGR1iougnJ78B9QmFCyBx2dnfubWBqUm9CnBN2Spw5U1fTmFtjhT3RaWG6",
  "key27": "637av2a7vPmLUqcYLcGWkpStb2Hawd1iVKGXi7RtBhDtXXX8TQ6KzLgV9ZnUPZNDJH19uKhzG7GKkdq8XhVBedDR",
  "key28": "QP7uNiBMXYermDCSLqXPLE32H3r9rHuNHmvWxCQjp8HAfnCX5UM87UHDUnWS4bGBqFiwHp3RqeLmCN9fcs9P65b",
  "key29": "4Wq6mRuSBYmsqebSxEsrjaTnYtPNJ2qc2nytmxniKUNVwoqgkGwYUXLsmX59uws4Zq5hciBxhxurivscBGMCYbnf",
  "key30": "2GfuN4TM55i7KLtB1UTqbNVRXaba2VBhrNu8Ebzu5n5CUdZAPoUadmzX24Sz3EuhmNYYXXFSaU9pjqkZbsiB5qac"
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
