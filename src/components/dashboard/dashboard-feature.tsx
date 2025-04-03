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
    "3pE5NmKVMXeuqtZYQSgaLXy6AWANyJACKcAKeY27LX5tbQuuPQAj4bfM8Q7rn5uVu9GqEWoeVA49AXsUx4BKuHqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64c1dYe5xtsHidpqU7LptgvZK49JZ2D8y83ywjMYNmVgZqGsZngrsi8qb6FJ945E6JWnaXAJSL7Bhh9xPAuANBH6",
  "key1": "YnxEo51psNs8GmwUGb6U3XeN6NPbyeiZ7JUYjfHdYxGD8SYCUPPscY9Dskc4SGgWPUwLAbooV6p5KUrtTxXFuh2",
  "key2": "bunFaswX9xDE66k1uFH3jPVTTvkZ78xc9YtuCxy6CokYY4CihpRFXxHqwCf3GeybvZwBJZbxx3wegNEWyZG8seT",
  "key3": "82t9v5ojwe3pB7XXyAirKGE9wC7zjcYXeRhh8RnmkikU6TZUfAF12JAeNmb8J2khmDowzPCyXerSrLsP3N1z1Uh",
  "key4": "4RdTjshd7RRvzRXKtGBYeWWzeGktaWxc4W3QGeCA6NwHvNuHnDqVRziJsoQVtMXKWfqMi7k49GvtdBTRUu9gW9iU",
  "key5": "5p16ZLSdQDBasZ3Y81ZmixLwwPudzDsPDV6WwWfvrzZjQc4z4EZbdA56Yj3DXRe1W1u3Z6adBDZ14wjau8iGsuYX",
  "key6": "2wk1DZhPsfxwpjH8YdWPeXmTRWXyGVpi6QC6b2e1eZ8YUd4r5QG4JytVt9rx2pFqE7C4AtinUCXQS3so8AvJCCLw",
  "key7": "4CYre6DHSqUNtBe1mFj8NMQjFWz18Rry5EJhcyyiKMkKCUtGjRzCsrzSf75iPvzYZumDUgpeswNtunK4z5SnM4Q6",
  "key8": "28xjQsxudYNKHoJhcsX8e8BqVxUZ5JDkDG67rK1JkCG9qm32wymZKtKZgdy45dv7E18qTG7Dgvh6wzZatQesm5b5",
  "key9": "5bJiHfq1CKdFxAVkqg7hxQLUexmiSoZB46TjryDMoYi4PPz4vqbkjwCw2VbKPXKL7RJ7v2EfzAQpduJ3CipzJ7aT",
  "key10": "PJeDoKSjecsWWj7sphcw8txKhBDdcLmUFvwJ4Q52mX9rBmW4hX3QmG7LghsvkJL6LBCsKP2TnJpbsmgmkRte5Rd",
  "key11": "2DjWz1bebcYh4YaHsZYvovGyJ8dZ3Ns86SAe9WFMMX3oM5pqNCh3TsMHydHBLpHw9FXbDoTUsDMFFDPN2xvLtxRt",
  "key12": "a9yyECB5L8DHwaEbbKwuVYdD2tHyGG9onAdVHJhJP7GU8JdJSRT1kA4TyAfmnjzsTvwLyT3NXPog8ByxsXPxbUy",
  "key13": "4k8rBymVUvWGRXhLBbbSxNuFXnCzx6eTGHZQYCddUquiWSEvCQjNhrKBdjchqZYshdBcsdWtTy3wKLQ7MZHMG8V9",
  "key14": "6534H1GDLTcHALdkdVLo3Y9tYszMNJ44nv8WuzEUKgwTneLwuBZ7nwLQ4ukyHQGZ1xFqC43cn2AYe3CWcBnR1VMR",
  "key15": "x66gcnVXZkhZpMbrN5towjKpwp7N1JB8FUdBZMdhXZUgVzuPeJ9jX9p79cE12rMHncbqk6L6ALzF7u4QjWekpga",
  "key16": "3ANs3QE4KRZ35d4V7QcA1o6saDeg5VwEFJse61W2j4UPqjM1FnZUGQp3tMhZpjg31GjYkpfLwPkFPtEbhNvsgW2g",
  "key17": "62a9hRWLaDu1WUx9DnxcH7Cwc8VmdTRpvaTXTKq97KVHEdoHbfDUh6eSMttPHa6o9o5YAZ2M6A2e2a5j1JRBYNop",
  "key18": "2ybWmxBva69obXYFmWbSqTSiju6M746X7mKfbnauWiibKnwDZJdSDSM3ADumq4a72ecFrvzsTUQg4Pt7kpAbgdXE",
  "key19": "3ubgxsfJdsCoLNRMK2DfvbTMcqA7kDgy4g2VNFtTXkTpueSBj2HA8NsfUsao72oxFZYnicz5MUWBrwGPxcCMQZfL",
  "key20": "5Uk6zHmcX8Dm1MqJnkxxFf4ozsxKbY8vBNNcFMpvfZ4V6hS2oJ2ynyseyeBFZUUjWMNp2xELvLoNMZo9oFmLGnoB",
  "key21": "3Kmzyw4vXWvTc9JAmnkaM67hBVULkLNMTDnJHZAXG4FXwmZQh4N2GcNaU2PkeHbGp3E5nBZ9t86dhvTpLjTyH8mS",
  "key22": "2PgjZyjxJF6sYnUxmtF7Y9gKBuJ9pGaNPEaeJsNCXa9TkwizvyLHDcW4EQCJgrup9u3hNoE87B1xBbbeC4zG8xF2",
  "key23": "YX2sWGWoADs6ZS2yXbUcDWu1i6S2iatpCGDaRW9oMbxUrM1DEU9F6HMafq4yesAipURo4PDxAN7GAw4D1VkgS3r",
  "key24": "5HHBCk5pF893e99fwRyjR2QyQnv5DvUXGZxGooh26i5sRpChr8NzPsn7NgV7HM5qums1wJxwTqy1r8td4nHpdYvK",
  "key25": "8r6gqh3rJkHjR5DUkMHEUj7SX5UMMUyynZRNBkNYSTBdLkApexSAgmoNB8XqyqTRoYqAvEytLP76iwiiz7k2vbV"
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
