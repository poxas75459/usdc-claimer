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
    "61n3iAafFtF292pErPwmEb4Q1KJUKvDu6BoH7ch3KAJpDJXu4yXW9HxfkpHqM4T7ApwGSZea84xSS9xX4m6zNRYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fx653MWpFFU9GoYu6B1RL3CHYyUBXW91wavKcKDLojTtViY9jQYGemCBjN6jNmaunF44NvcAyrdzFKLDs23ZEZc",
  "key1": "4omUroUrNpPPXMCXNc5h3YAJVVTod7kABGA89PvNNVKBVfVWrK3nBdUiRCQzNkYVU1nzFHRRZQ7LGMDjGbGsbczU",
  "key2": "4KYgM7QVL53zx95ibw4oUwTLfzEkATZJtt8oU9moaZXYijuPMcLFrFKADHTYmvd7ddjxecuidZ1htjpZtKc9bwoX",
  "key3": "5WWLqnfi8xXNXB3S2vFNj1YZCrYTVWxuq5xgeSAuvj234aWBh3A9RVuvRLVVm4UUpjQPt4j9AA1mByj3n9LqyEFZ",
  "key4": "5ipaR4eoi5ucAvqKQCKTk5FdG3EKSKsiY4596sQRTPgsfqcGTeMcuP8iEdfXtHXfxy2n6po1ubHDMEP7FHKP8igB",
  "key5": "2onQtwFjZPJxrzjmi4JSiKzQ6Xa4Uvj5YbbT7kvD3th8siesTX4HY2gLBCfn526ETeQ3T8yFQvDmtuDYmZzwuZcB",
  "key6": "3tFAP6nXFDReXpL4QSNWbgByt2vyQLbsYHuu4BxEnZSvTfJiCnkf8mBtFT7E83RVAUZasjqx6qja1L134Mxa8Spd",
  "key7": "3P3Mz75mp34chHvULU8hhacB5rBa222z8FcnFg1UdLtKJge9ukeVt71Rc42oc6K9YBKKNgfK62VzV1MqQvcTC8r6",
  "key8": "LPbRVUmgrnsZcU5HCAiXYxpLk4kQyVab5khXrWK1QN7wDDju4NqiJczqkSkFwqjEGw37dmqvAwguxE2QeYsMXZf",
  "key9": "2WvtuZG3VN36eJKUt8FbBMsao2NqN7ZYrnM6wx2f6uMefzP9WYKSBpeBQ8katcVEgGFuFnW1nnEXzVu1GZ4E7Vqp",
  "key10": "4gK9WkDoKsUcV3v8zHHh8bmxdtN7ZZFNRPiBUmcsCY529N1KBBgKHWt6pnfauHor2CEm3o1NgE4XJZicxh43i8qu",
  "key11": "KGKWVU5pDBsdp5EfYeJxdTqwLXDqw8MGjk1WSFt87pupgrQBVVN3j5uzNkKHwYxp7jNbaEy2ohprWxRVyS4Mbv8",
  "key12": "7zvVDP49sf2YPb4iriYLD4UHyLoPKStUDPguh84xRYQNGAPdP9wd69cs3ug3YDTbtUbeXEm26VXS4vLyinVuWhQ",
  "key13": "3wjvRs5kwt7TgVQvaskkVboX8bTX8qBDwcoXXePgxXxQRNatbfRKL6jaf19pjKdSo5N1K6jWkqmtYPGKahD5VX2t",
  "key14": "5s4RTvxR32bPtU3Ucgd8MWYbRFdmfrdHMeDBDQPG6brevGVNJA4mBitYPfhGWAL7YqpZ9EyM7UkxdZqkfa7QAPF6",
  "key15": "5yhDe4K51bTCVisgF49ZpnBiRMPqQ1FidddFKNAnEXXJqUTaVWkYrrT45DQsgtNED6aAcPZa2yNyS67As8BZnbMd",
  "key16": "4PipZjZC67EHJMjSqQtPpnzSPFUBUdhDBJjiq25KcBSTQYTBYSx4iKdKMHwExzGKU416BtKXQy8RjdLwq4AbbzY6",
  "key17": "49bHqhEyDhTJ1SjinTFdVto2JzBJUDyS9c9qWbG5Xrbe8or9hDez852auaBCTDCo4pZnFVp8XLiG5k6tUYr7oRAc",
  "key18": "47PpxpeH1n7ygdcG2df8T5jY7cRZ6Vjibo1WYapj9fsWT7qxd5cKG1a3mM5hP6oqG6KwNx31SUGJkNVfxhdbiS5v",
  "key19": "4qwFygikFAQfY3i7AhHLH65yTTR7zBStftNf4UC1W3FEkzU4J3BXK17K1kxYdQsuuxp1cH9QAJNsTnipdDNHahGy",
  "key20": "mudmseHxmBgomHtdki56pySMt2HEW21RjQR5zYPc2hNVj8ZPbbVy5pkQdieZypk7UN1toARVERRxRvU1hY4Pf9x",
  "key21": "2v74HMp9k3QTP3ubcy3a2seWjj5Y83CFhxBMpkvvk69ymcNg8qa3BT3XoQuZRCgwkj4UvuGvqD38FFt4PdjYxkHX",
  "key22": "AzhLdNNFuoQmDfWhnGbXPMKZVcmbJifKNZeprP3MHpFvA7QL4y2gxauPMRrhhDctR9ExBeEATncjEL7TfNyKWgA",
  "key23": "5vadUmXunjJRWsnrxt8n7PJPD47rwcf1Q6PGC9vBnhjJPwqsmATWqzW8hoPzCtZntX5dwa5tYQ6RT7868dDjwSh6",
  "key24": "3Ugp74J8SWoGrerUk46y9nSEMoGdKhbqzaZMxGFNSw3qVs781hRoxixexjpNFRSFkpkj4B4CGkNmC1kBFj2LiUTJ",
  "key25": "4bfD2K3RAfNf3mCAx6zSaXQUYysETBgLk12B4PLE5wUiepdVWu5Mr5USw3JcpXyiMrZzf4vBxZAKWFd5p3gYHWm7"
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
