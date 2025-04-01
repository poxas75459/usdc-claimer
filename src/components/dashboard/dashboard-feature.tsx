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
    "58ngxhVierX7fM2kBYRq5WCvyhuZbmGZPUVHfSZeySRvTELhJqgcTpMWbhqWvo8meH6WXC844E61zUitDz5fMP2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyqhsnvWxxSBDB8D7ZfGaxT1obsL3fwyXj29yf6vcGGNgNQLWxbVdZ9DEy88jdiE9dgiQNT3hvQrXg7LsSfHB9y",
  "key1": "4YjPZ2iX17gYMD3B9g5zPf5FV7zSLjxJXYAv7u8WMa2Rcf1SuzxesvFQLXwK9a2wLusRmfWPLM1WpAvodqvqwa5X",
  "key2": "5CmdZKc4u1AGiJdHkvH1Yken7pAHF5nXmkQ39SaWwzrwKM1MNvejZtuekMZzbjDKM18MnzVeE7SfeQispuDYcpF8",
  "key3": "5zGWXW92LeGBgfnAhKrnVhTn9Xde71L6DFaJTena8rNNimAm5hh4izuBDkQxtaZgMzVDtXJDi4ZjBwiQSonY3Y6E",
  "key4": "28vb81Bp9WqfFMg9aZtmwFdnXEQ7WXXduJxRJjcDe9XF2aUxDXmebjg3MKpRumbcnNL4NWczpkKUE4SQVM6JQdcW",
  "key5": "3MTTJDg2iLTNvV36spY6nXbpkEUX1LZSSnnuoFYXkwq4iMtN28BpZ44vn12Cj4oGb6nWc2hWuwforkx5o5BawnKb",
  "key6": "QQigzbT6vAFveanQguXHm6uznFh2ibzJYR6K7rmpA5v7szrCdrCzMK6VY5igQ1gyvw56eGWU5cjUg5AVMuxxqMD",
  "key7": "4BVu6bQzvhc6s1h12D6TntARzXtNqMxjd8Fp1JNY167gUzfoTb89NmKkKJksHWNGaJZfBuaQZWHr2a7144AwiFj6",
  "key8": "3pxbmosttBRMKhvabsYLj8UAa8KARbAefAm3AXpziJKnNV5MdAAMHtEdc3vAgDKwnBBxfJXVE3nCUATmf4rRwfPY",
  "key9": "5jSkc6ZQtRQhygGzX7AuMsZv69uYJVwbgYiM4NFB1z6SAB6DCRYmiXBwcZPZRVoAELdA8ejjGqfmGuC8UZ6wxGE9",
  "key10": "4MhCmo68MgqsF2CSNiDiKHo55JjViNBkFYRNtACtwUPnn7xKmjCt7nwCEus6diCdgEqYNcPK1qsfK8Q3HvDDaLGJ",
  "key11": "55vjyne4mk4u3C5twMLDMCJjfGxooB2MS4ysXFKSZzQ94UTkQ6vRvtGyEgT1VKhQ3mVYs49pYCv8e7M5qW6Ke14D",
  "key12": "5aU1ARguULDG2u4Uo2Ac6nQ9iwt1wvzzW9aZQhEAq4MGEhRth61hpNR5QXqE5gWswLLw7bgvxMrHSvzRn4Tz3oeY",
  "key13": "uQgkZEhhfRET6GwZ5FqRbwcREZE6D75eBXGfM5AXLZ1QHNGCAJhU9WP7nA2DGXFfvTeKaURXv7SuYnv3JNJjvFx",
  "key14": "3Q1imctHGBpyUp98HpHaLEdpxhr7UvB8KM8aMH4GR95Um69cP9gQfDBm6u4ndtFTjngdYE5KSptS9RGuwAnsBDmU",
  "key15": "5qUUFP3x37Fanp6m74WyHysDyuAjANxyrgzdTYfG48XepnnAhSRdBSmR4bKYagW6BVXiN8Rkthnkfi9qrGZL3Vmz",
  "key16": "2a5CVRFt7Amr4HTbdeu1DAtVXWTACUvnvH7fQxKvKYmprxabuhWY2PhmDzf3bsRHouBaZKA87PLZykYmTEkv6PsK",
  "key17": "2HtVuNn39Beqs4i81m21qv58jww8u9MvgTDGJva22hCwQaQjYf1Ds8Nv1LwdcrF3HuRoYV2fFQCxKdWD7bpxQ76r",
  "key18": "46gts1BKXUvajYwwCFMDpFdgBuPi99i1JC41x9HWPqHJ1QWQKrEYNXHjh7UZ1FGa8h7zyPzt6i4RHJD2LbTxMrSb",
  "key19": "VyoZwxBtk2343fqMzNx31u3nz5FC8Dm8vLLpgWzjHqLYxJooBBHqi7UAwj9mTqCBZY5Dcdp9kLcDHvis2bEEhrT",
  "key20": "5n8JYKxa4eeVXY3JX3yXy6ZkxATnk29Re83uqrzq4tAFJ5rfmizvhdvsn5zkNdWk4ARxcfzEMCsaXmfaTDEHnPK8",
  "key21": "4DDMj4z1DtsVxSJnGbSusqCbHRHoXU3PVfDZE2RwBTTfVtSu2z3JYruHbnAPxvqr4UjH7XZaBWX1TRGw9ds2aDuq",
  "key22": "2FZLRJhwdn8VUxN6w2ojmv73iRnR2N5GR7PrfdhDguvxvoStHnK4Hdutbr23vz1AVxfh1Fb6qvrvMBLqjRgSrVU7",
  "key23": "5wA8gt9CmrqiMEZQ5rRgNfzbwQ6CawjTTD2EuHb5p5pvc6YQhrMTuHXjiZhZKBf5JNQc5FkPcNzzPADGy3TErCBD",
  "key24": "28E3DZ9geyXdFUTsfyCDWSwxerwe7kNGAc7Xc3N8qzAAAXQw3XhTGz5REm3H1R9arYbhGb8vh5etKfqJxpfhr9tt",
  "key25": "UM2H8LuAWmEASZGjzJCUTDBY6fMrCePnGyoaSRtZfgTBGUDrFCbE2hTzuYrpvW8bahN7pyJQtPfKSy2svFJe75z",
  "key26": "5bpboFVgR4p2QZJkxvPzMEgWr4hgNShohFzqpwvfsNecgdgDv9dZ9PVyEqoNaF1rBdvRVtWFYhhSTtqKqHBnoTkw",
  "key27": "d5yE9WpWfipLSiAUqfLU1TJBeUrCeJEiqcYEn9i2WNBXSeVr9P3ygdWKs7Tw4GQqHsLyPxuKTf8FVXpDCdxxfnG",
  "key28": "42NP5kR6jXGtpmZpTDuZcU76LjKKtgWQ4S16qe4jV9tiocYSEkdGnuoQNKEMq66ZhfZcvnRS9jEAgBJdH8uA3Qoh",
  "key29": "2i4Qu3k5auvrEte3x8K72tLUKUt1YQkL9dtSeYyiSxZZq3Eu6zYM6XbhjPTwF1pckK4ysaKt3iBi9ThRSbrQZDdw"
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
