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
    "33Zi3vMXVZr7KfNCsHBABgybb1VjbNA7B9mwbKhnmbeKThSjmfsLP5PY5bhaE7dh2uPDnKQQXahkcNdK8ZLrYeJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dirz9UtY27Ev7KZph79YbT7YyoQwXH4Lgx3rAoiYKetD5J3LTmTPfmDAk2MGW8v7oLiHiqy2fZ7xc5fEjSvzTND",
  "key1": "52GXsqb3bmUX83E2qE4HgPxUW5nZhPTxqhPt4gz3SrmTTbG55LuG6nEs74gxjGHM7Wrc2bfneQn72HGE1cmjnZGA",
  "key2": "2tqtNSd5ePaLxs7gtyqTtdGWXDB57bYzvXZWsbK6f3TPv5kgJCYWTYckD9Umpz28Zuqb6VScBMa9981a6GqpM2bd",
  "key3": "52nwxzxMredGJaRLm7dS3pDxVVtofTXLE8ckKGQBLZTaY1DAsv9qFn4J2bsGXtS88fnfV9Hi29QBiQp1qf1vfoMM",
  "key4": "2tMN4v8wGXvc2UbAKrS9GR5L5ecQmFXev47dJmFouRuj46cU3J7pq78GANYb3jVfh38sJgm737d4DmDB2q6EQXLW",
  "key5": "5UokoBa5kx27RGW3eRpDsKYBnY12RTXXW1Wquh7tuXxxCYXBY9TgVpETHPNtHP4Ykz9bqzEtawbSAzPgD1Ei51z6",
  "key6": "3uD4qQh934cQdgKXbShb6kAGjAj99xAUhhY5Wm3pvcvcymW3UWEkEUwMAc4Sz7HG4kTkkThjUsHgWWDzjgsxYPtG",
  "key7": "66z1LafxMCzR8FL7Ymjk8Eb4nG6VbBDCLtUdLygPDnpiTVXdpfxcLZFQuhGHUrfZkJi6MARTSQEfFwBBGAciBc16",
  "key8": "5ewPR5QAmhUtfYicaXWpHsAWRr1YGFPq5NNuVAdu2Jd5z9CWLbJ93XRHnqEgAoRskLipKXA6KE8KWkjtXe6u7cLS",
  "key9": "42rsPmiyn8nnDHq829x92yzPBKbNDKBrcsy4gdvuPzZhWoNFiuYbGb6kvMnpvpbEGdN6SJTZg4j1HGN6zGXS54PR",
  "key10": "3UrLM4rWL3Hj7WraS5Wa1WqC4DddN5QFv3aH51tvCYqjujHSt1SMmUTZiox1eSNTBFu36tczhv6rr1fFm6Yo7GYr",
  "key11": "5JdQx8exYMWjrv2V8t5iNCHmETdnfaY4rvmua2sovPp2YQsLZhpgRp1sibFB82VjtvSVVzUXH1Vv5hhNDmXLiYQM",
  "key12": "5MvTQJrQpJqNpZh9VXp89179mntx2vP8AQncke9GSHsTBFS5WqKJzstTYndRE4jpDKBNdjh9LGozdpXBBMLTtPP9",
  "key13": "4quSF5K39w9oLC6rM6Nm3RjxtvELEnFYwq5t9ZZnZ8chs7zpPmB2kgTm4BspCbJxHv5cdtepPvhAuCmUU7cTaEGL",
  "key14": "XeqDtUuP4CF2i9HWRKL4j4TJ841VJLxV2eiL1WZgJp7s6mcMN8vavad2HKqaDi8XmMt84c41tuGYzvadcfGK1tj",
  "key15": "2shxWk1sVKWef6gZjfhbGfKi6ijbMaCvEStXzeHR8jSny4Z9yaEJ7w7ecd6T2VzHUEqPcWNXQaqYGoGah1gFBsPN",
  "key16": "xfq3J9QGLXjNiC7nDs68bMGj4iG8HwxFTRuGpqkTAofpAYRGhnnKxPm5xbj5MNzFSJcxdbP7BgasMiAN6vYrabo",
  "key17": "5oDijE6xLvcCPHfn6gbCRB3hQEsbQLkzGpWESwLaWH9gybT1DD2koYAuPpuTufSwseVfXfGmTr6rGgVxMhE7ZQxH",
  "key18": "43Q9G2mqDAvHR66zatrTnSWiwezhEvhGbPHqzkG15eu8vYPRqyxD1h9KBTYm8JE5dqcW9dFoEsp6mVrrMfLaiZPe",
  "key19": "jyfB5DnMX8oey2WH2iv2Awp16FqVP1RiYiQ5y4p93zV23CNe4tKzuP39cCHcJc9DwkCxDnJbUgdCKNGpdCacvxd",
  "key20": "mHCAPiLpKkSJxUYWq5WiRWohQ9PHC7fpgHbsrXiGjEDBfDuemEuhkPw6bfyJ8DRGRHopeygB8pYnYMHgpwS6Hdx",
  "key21": "y1smJUcmTY33f6okhVFg4isehtgsmuMFaHgqZ2dyxUbjaW8L7MW9tNMAZgv3se3WPaKBayVS7MeCos6FU5xo4fC",
  "key22": "3BVAgR38rToa1nHkPLLD5L2AFxeLURi6C8yNKmx2GLkL4j6v9apzRyjTkToyPfE8zPgzJ9Lb8eGTgx8sBZG15gX8",
  "key23": "E4oFfYMYUfWXj25hPKHdHGgKQCsPRaoTNaWr2cgEhMUpapgut3pfvXshX8sjGdbRhJZ2wcXU9JuzGj6wRjsnDkf",
  "key24": "62fdFKefZ41n9LZYq89FodkmmokDpVHfks4JKa545znnXsyz2TLYFfK8bcmhvJyLeEqEYE1H2PeRpEYsvFKKY6UP",
  "key25": "4boeuDroBn8kKCq5MngdFKdLUy7r9UT1xLYQV9fVibahfHm2DM5ryGZ85gxZ7XXqZNXv7ArfEr8FCfoyNkWpJN5Q",
  "key26": "3pFKGa91iuGAUWe5WW2Kxmm9nHtQKTiKRxGasKbDj8MSvG71fgJptA1FUKzVy4mHKCfy6JBjqbhPfQ7T5bcLSoTc",
  "key27": "5jQnzvJvWkAtSDYh3XAvmN23MPik9xyjuWsdSMcbcEvJL9sC97uhdCNb6iC6nyH6LBMNhyLKL5p6dBLuz6PNqMWs",
  "key28": "4keSrKhh3VUJYzbac55tXQ7ybJ3j3p3RzSPr4Ss8JdXsaHZFBiqPKQhq4wmheQnC9TvujKH4wsqvGk9324yEa8ML",
  "key29": "oisYv4KhpPqU9dmPVQHsqhBXdTpuxrqWKJNfQfSd2G7EQaqGyiqqHE8PvGUjS5Tyqd1DC389JrCx1ogBSu9Rv6i",
  "key30": "cfc7woFqP9YxWUtKmMHURZJH7YzBH1JrdKS1MPfoTeJwTtTUo1Nvgtmi3ivVP7kuBDoJF3As4hDctebUVYzUZ85",
  "key31": "5v1C7Y57qzyAa7vw1QK849iVdKW8huhwUSEQnz3XuqHrBjT7zRhzApWes7B6q5jDkXYER4MUNe2VtinvSmxbkxgb",
  "key32": "3ZNWKckDcpcaKBksQ4ZP85zCkNyfHvYUagfD5Me39Z8QSooj8g9ikrz5kmZ8cppTbyn2V2yufoS7LW8AengW91U9",
  "key33": "xTHjjmi7CWfVvAkurAgrCcCf4MKe4R4o4ngiPcDyRUvm4VkTYnfsog9V6MphTT42gPBUzygSWbbXSuH79J96hXk"
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
