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
    "4c7mAiem3WCL13EiHoRK5AWFgMugt2faWf4YchbPA3NXRuVwpRpfLavVhDdyHqzrZzhran3EH6fTK9tTMg2uZ9t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pVrGTRm51VMRh8GUCpaKJR7hf6h13qywuug9VDysVqFYF6CKzhMg4ZZMdCr91PQop55UKt5ka4L1udbg42ppH6",
  "key1": "2hBTQpn3PaVcNHBd4KrVXQTkjFGf98wdKn7ADPrh8JtyZSLd3bu9ZgKHELGUsfo3R6Sor9jq4znVmuSxLrjvPfdn",
  "key2": "G46QXweRyoxqBky4pmmL9WJ1KdH5NxDHim7G9z1ftmitDcPnWX7RXC5mgDfMZ1tmdPs2kYXpTw6mttVUw4HJhpZ",
  "key3": "4sNs7yCSXj7dR3pDarF7ujvQQYY8BwqzwqiHjScJGHNes2CrikaJhq8JdUoo5gnkgqdhByLV9sYr9As1EUu67kcw",
  "key4": "5nZYvtwGtxvYTLEQzn25LPR73tyZMtKK7J4aEeMixTDLP3cXq18tYYbiHCJrpYaoruXjVYvyQe7VfQ7Px4Z9TZSj",
  "key5": "4wm1qeunsQFvtmhYA7ug8KsPicEiWcQ38bTtZ9HbWwXf7fNyLeH3oGQvPPV48F9KHfqZjmPTL9TpqyYURBUcmF2d",
  "key6": "sN7NTytq4uUisVZGV5gZ9Q49AvCS8gYuvx3ZHd4vLUs47MPavS4nMjRYsztFEW26gzSu75uM5qvmWvVFiLwKEAb",
  "key7": "416MYM1eqKHjHb3WQjg3r227rQ5FZVihqhaaz3QG3MmrTjJRRS3DmJ9v2nyi2at6jQg5vjE7zfaDRYqqnXiit71Y",
  "key8": "2EukKGy3qitG1f1wTcSSNwctr6Y42UUViGmWwzeMzZFHfyFiZVnhr6kwehLCiV9yFtikMRNnSPmdXCLuQU3Wju8Q",
  "key9": "3sdnd9fLqRxpn59eekjcDaY9WWLe12kzSiyiLUqvAiFjc3gDPzfW7de2zZ5iEuM9iNfuS92K1jk7GwkLrAiCay7N",
  "key10": "sgYSHXC1fN5C7aRctTkFw51HH3635Y4ahEPZLkyTD3VmVyacquSNYLsEeUwMAjDupxk7T543iXa97aaoX3ZGAQz",
  "key11": "4Cz8DeE857DWQJCGSwHKzR1355ucGaUDjyFaqSEjf3wRa2m9ZLzJR4hPCN3hvQnodwYjMqYf9qhhuHedR3pCD1Tp",
  "key12": "3YuxAM5mSN8Sz1ijUwuFwEaxJg2i9RX2Z51B6edskE37VMjbffnbvZuYw3fJCrEoUrLH9XgmjVH3YCdj5F6gb3hY",
  "key13": "47vDZcuypABYtZuXJbL5JoYctj4X2Qv2NLHRvvV2wATWV7KzqacrzwNpf5rLv4srzm6DM7hh3ti4JTdwKmx63bmy",
  "key14": "4CLZaVWGHtrZc6H2Xh3PZVncovyJk6DbY1SJAEqHXvrmpWGVZtctUi7gEtBnJJWdLgYexTt1fB6NbJ9oNV9p5AkF",
  "key15": "4WS2EivkaErNb8Ko7hEaAXano7jBtjGEVd68DRvPA97LKv5BVCR9Gby5MoQa7fKS71wAq7zt12tLGHTqD675bvVE",
  "key16": "4B7hEo4XggakhKAYFPrFjhRoU5quvoFMztCwN37cUELZernguh53Duech4ohVGFtvXRreBKekVeQUZsGJV82sfzn",
  "key17": "5rR2Yo34FDgzyi7rXGVJu9Vj25gfhVFpydP943obWzXXzVZh4Qfddfabcq3bPSqPadaNmYqoPqt4m1RjCEWEjyYw",
  "key18": "2Epjh8GwXw8bDt3DAjfAcvv5N8EnxkXiT1FF6nAwV7iYcaKcD2sD52VjKG8GBs19bKfGL4jB82gEXqLyDjwpNmiP",
  "key19": "4Cxu7bTB9xEarNqfJtz2TkNM1Xd8AcUREXQJUb6ypUwkCExkD5FEeWCXv8Koq9cem1VeRmLzPRnh7DxxYVsqFXec",
  "key20": "4wyGphr9sRSMW5rxpcYPcLZXMrGjuEDZqBqppC9Bk7AFjdPyFoFEeY15iMbkPVkVX1PnQv2hRcCpg64igUfkpxp6",
  "key21": "66C1Vg7eCH7UuY8H7gcukkzwrkDD4sBEZCrAmxSszbRTudrGUJRQE221kGmaVL6C1DYXKkTgUjquMqXSMW7Nr58C",
  "key22": "2VhXpyABqRoNPfRprPFt8jnczB8ez55fjoHvzu4QJTR6FW1cjzzzrqJddiNFJgjRHsFENqgQ9YgQsAMffgfwcq1E",
  "key23": "36gQUiYCNCsxdMSmaWF45NwX1VDNfanhnHAKdLLbENFVQ3r4Xmr4FstNtbfFNf7FCiH1sgbDiP9nF1jsRY2Eh59K",
  "key24": "5Be8s9HCzDWyCRYkUMD9QjnzDtDRvnypwJ8S3iRvp5GHfCcTT331KeNPCx1f9aUvEoHkd93XLiS7r2CqY96TyBug",
  "key25": "5GaDgx8v9NcaBCxavJKyvS3DsG6DRUfQxF4Tr4KPTipBLbFZAH7PLgsBmhDG5L11eLciHcR17ZA8HZ6k3APc7TUo",
  "key26": "3iC9icSh7Hqr82o76EQWeqnQ1Q9PUi1WenPJzwZCaehJit6Qqd8ePYJCasSzyMHvTR2s44ysKHxL1xnTZzteDiii",
  "key27": "3FYyTFjSWk8UmXEgqcyyHMdjASA9egnUNggVH2Zq7iFzc9mHMg1XUbUFkPxTtVz6jtrtVbrFUgPoJQr3qAoPsEGH",
  "key28": "2QLLfDmE5xpKiXmEEBZKbYBA5tG1LmFsCLpNp9NxhdqKRdTpawYPpoyEkZaRy1vUWmdkAvr3iVXyqusvMjhz25EF"
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
