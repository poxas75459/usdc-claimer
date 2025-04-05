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
    "2BhY3co1peBNLQwNkhqByzZ1zfRN1ut4riTAmnuFMYgnoWbCV3MKnzktGJ7omXp6tJrACwEukGAKYJEoY3DYNPNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRpoyJNwjZkhwVge8KBY3gQX4awtTe89iSke2E2LTsGtaX1sXxiWJV5TAnQ9USAbqfhb8ZussgfwyqT8Kha6ptu",
  "key1": "4rAvTtCxZ3dDpf2tZJSXAiNJTjn6etdt5z8oAXsQss6oPTgEWuGXJ3KX4Scmmb9Mc89eM9hgfHK5UUkjnAcs7Mse",
  "key2": "2eAHmm2SPTrZtWingZnwje2a4hpRw9Rib6xDk8zaSuHb2WU2hJgYyUjnUUpkWgGb3QY5DEvS6SF56xJqfrgZ2CK6",
  "key3": "aAv7nHNyhF3GUn43LqE6GKVMLhkrBQHVkQpSqSdsLdqTFB6Z5S14pZgqEPH1mskJeUmsoNhQWWRqVLRHaWmEufV",
  "key4": "3tkfBc3gJWoyK3chZwrFnjrZgcTvCRwyrkL9dfZ9LDNiVqVGC7mWggcwTqc92986p6nKYZFLYkSKeTnZGjPmNRgE",
  "key5": "3ndyj1a1Xj2oESuR427tr4PzrqL35TTPDBFSfnKgc52vs3afA1HN6F9ueNuWw7D9iQbKuVxPNYPwPkCADoTqPiqq",
  "key6": "2BTLfeD1euHwLpD1H6R9VXoRpr2bNi22RaqvHhCyh7tkQfMX439o7NWZqYPdKxsV3sb7UtNYvRQnCJPH39ex7HAd",
  "key7": "2brJ2VcyMxWQPhQRP9uNecWKsHbe3h3YDE8oj876adEbMihCFDaLPRWW3HCcNvbs28NdC6ieMdWQ9HoACA9UAuPa",
  "key8": "2Mgr9Px3ksQkgojyCJM25foWyQANMUrxZJe1pZU9E24CReAp69hJh26qNnPBVdEwciJk8gyfJPdsX3uXbkMSqiHr",
  "key9": "4EytuGNmSeiSChzi6dsRtEhqH9Av5279wTM6HSAQpbnfK8j8gw4nL9kkQEyQdkk9uZfzd6axvF5XzJWb8EEiC2Qq",
  "key10": "5rrY8fbFS8jxcbSHPskQD7uWhveUSLEBMjr2yc5t2odFozuzZuTfditxzvDjALQz7mmQUHwEPYtpqEQVzEidoZ6p",
  "key11": "4Rp7YYYv1e69Wyzj1b2SbDJvvpjs4YTQTyNYaJdZVqUcBHTVFbmDDmLo4kidFBX71vRbT5VdBVS1Ui9ET4QLPo8q",
  "key12": "cqRCHhEGwk6NdYivteJwS5ogSw9tgJ3xi4cpkCno1c9NesKtMJbokuk9sTYU5jvm2LvNbhRNxftS9NAufLFnpyR",
  "key13": "3DFv22Dgafs5pQwzQTW6eW12xaFF45PUuVsrSy8sxADNmndqPBBwSQ1YZz1ffh9cRjovQXuqSJqXwQDkCGZjY4XG",
  "key14": "4EKpuFtynhrjy4Pxq8EMctxD6gFa5HPSKEn5fcA5c47jWxibkokDsYsREVM4E3kpkXJ374e8nKsUvc7dQtcVtTT",
  "key15": "3XcwLvHAETp5KpWJQuuYf2SKGiJneoshYx6mYWgbCynZNaSRhw4nw7hqDRQ45TBuH1gZ19eKuWREmRSjfVpHxeNb",
  "key16": "5YAw4nS7amQo7R2RJAxuG93UyVV2w8en4b4dRdQawPUHB3zVHfvoJaUgXqBpz6NLLZonrBjn8yapsWLswLzWfTP9",
  "key17": "65jRCwTKdpkt6i3paGWJAcWS1Jitzp6RBzb97uRDQKUyYcXaevwBJBiGAn8QhBPmhpuh7HzzWXtVdKB95m5X3hA8",
  "key18": "2zFByK2kVGqperNZ9Purye6Ziq68xDEXqUkHZvquKu6gwJUgfhL3v5tdQQnCKLHhWNkb49vAfhbjjLGXdjeFyNKZ",
  "key19": "4u8AdrdbZvYu7hk9LdZKVNMhbCuXTfbfBqcpc1xZCyBZtrUffb4ZeHbekLpkrYNsMgYxfgn2U1uYLiRqUzUwQcFt",
  "key20": "54pj9k3wF1j3tj6vEHjgZAEQ6zvBd1tywtRHkzbF8bpjhqhoDRQ7UHQHNCXRyKHTaC6vUiYogCPwC3wme9ksiEM6",
  "key21": "4TNmB16NdzSPPSygAavsKuVjqywj2bz2wrNiZcrBP49u3eg7F9UsGzyYv1ghaRjEqHGTi6jUbpTJbxza5XPBdKBE",
  "key22": "4zdsgsZQaiQDArs8biXruVimmWin7Q4nUepBzcLr4eBSz5P2sKnnQYzXX2VSkspHsdriiLRX2Su6anMegauzYRZu",
  "key23": "3UvFzhqwUU5XkX8a83HrdHrfoKcJYKyvia4W2AHSfyidBsLsWgqpFV43fJqkJdiWyHb4tbM1ANp4qTpsGBpz7XRw",
  "key24": "34r71sEdcXWSjjRPCfHKj2Tk7o9Em1PWN8jZqCTnWtGuW9DBiEabABpTwfKhTXJv79vo1Zvq5cYzY4BjifB92MBT",
  "key25": "2LYnii1L6638b8j7mbUUzywCP5Mbv3DNkNwm2nmiAYiHw35vKTf2qqjoEbcnqLRPBCdV473KVaaKrE5rYN2hzxmH",
  "key26": "gmkvz2MjNYZNbbase68yUVzw156p9gcAYo38gxdknTegnhaPWCy9D9RsFhMwC44i6dtorhCvi2VRNw7MzGMmiHX",
  "key27": "WhvUdpabhjJ8RUH9cga6V2HKGSr5GkioAk2oYLVAZdSHRHE12jbAtyeEpKU1mUsgaiyb6TwELUSzhwLN8GDHGzn",
  "key28": "4esxxTTPt16Ww3Bn2hddBhP8mmAJX8WLbjBXUTwKChsnJeNUHEDiYhPRg14nJ3xw4rh8UpsA4yjLqFChAHLmS5TE",
  "key29": "2ewAvmP8g44bzKfUPbV55HQUxYb7Qd7e9dGamYhegKfbJPBr7hbrnxkY4FKNKs1cGv1XZ2nAzf5V9PZZJ77cCqmm",
  "key30": "5gmaBiNH8NKBAJEN22iqvmWQPLHGvVvqkLXgs91Eu6DLrquZJGQh4qMwx36xpeEKoQUSh6FQVditYQJSg3TXPh1n",
  "key31": "5XSydUBz1GjteQLjoDwXaREqUwU6z9RJWVAhAyAwtR1WF6KVsxfqr5MkHyi8B7Tfa6rM8y22JiohkRczAHZCYoHW",
  "key32": "353szvyZQAhXZh3GG5x5ritsamFGdFubRbvB9Nmajg8LqW8pXYP6RBEicXxefkTxKRJVpDpXm5FsyWk5ZTvCGCXz",
  "key33": "wZfYpEhZLbDdZ74tufo9k8rZWbVtyTm8QHzKGVuEVPBHrhbMnQhCe6KmpLhBLo3zFwCXFmyQwgPRL11zuTiDpGm",
  "key34": "2RbZEsN1HQ9GTCHopvYRT1ybon2qYHopbh6WP5FdDevhesYkDr7tKRV6iLAUepKViz6NNfF9P1GMZxxGpHRqUrvs",
  "key35": "5X5yepVT8xJhD7EjuyoQmMdktswHCyWsq12cQCUwoFCEEuLNbWeej9j3nVEQDfsvhsqeJyxB4cJJnwdQEZ4mzPds",
  "key36": "44tLtSR4Qtx8KEMKHspjR6dMfeHQc9PiWdntttJwLzKy7AEmeGM6tUnggWDNGJdEbx5YDx72i1NLA6DyZyutg5c8",
  "key37": "3j9WVpTGEdmsEqZ6FPmCs16qV8f11iTtqFbxv4UGWqwjp3H9W1L94qubTsjjMUkhgGphA1zAiPjEJHHdD9QesBTf",
  "key38": "j8DWkKTZebTZC6PvkPrwoFc1yvB2aKLwHFbHbUhEE4jqQoRaFzQATiCSnSeUPJoq5SwWGsiwQNYyZE7bhEWc5G9",
  "key39": "3byvVCfvrTGDoTV23xGQ78ynDVhUVUbfxVkCisTXgds3Yq1mZ2knYn24W3mRQsknpXVpxC7W967ifT73V7kZn8PF"
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
