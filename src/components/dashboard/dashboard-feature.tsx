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
    "5vMCCaLpjHiNc4m4qVYby61Te7GNhmNtaMhQZ8ozhmuVUFMbSoh1iQe8g5cNkhZkVd6gFdmddMXY5CM2Mv6gjo6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vePr3dejouxQWdZj2Kz5Jt5vrQJ5iwDjTbh5p3YpdVeL6bMjDCsjweUrr4kSF55MMV5zMd4rxRw2hPoDS4TrHEq",
  "key1": "4ZS62KprMGSLdXZiiPv8MheiCXSCnYtRpiHmVjQrCiXa9C3otYaqvVYfKfzzRqL5eWth58U6C6WLaaVwUMWvxD1d",
  "key2": "v9UZGX6KunarbEfZ835Rw3C3fqJQzjaZKjbTo4uMmdBAfvRozpYYTxV6z3H1PSciJUdqvo2XigfsHpvixHwK7yY",
  "key3": "2vLeGjcFJaUk3pHLvZUyTGmi28Fz2N9cVsuYinZJivZF9FEcv2C41NYV8RgeMtQ63x4SJ7D4nXRfVatwyYC4mzMV",
  "key4": "2N5FrQsTfK3R9dwqYNHrvhCu3R1CbnaSyFFaYGTaN9A1bw5cLGa6NAfNC98rFvqM1hpX8rg6kSKDe9hJMo1qeFbM",
  "key5": "3XN2xnoFGYmYg2KfPKmJzqtXKzFwtd82bcLHm9tXMvpbYa6Bximoi73om3xDgzahgYKdgUXpzv5px9cgTGH7QBN5",
  "key6": "56fzJfKV3kYUS2HYz3KqonMAG1cw7aLZqzDXWoDDbx8dYyajsi37hB1FLdX9QTGwSwbXNP8bhKsPdEbS37W1QKef",
  "key7": "22XvCYvtRL4iYMvSHWeJjWHqt9YoWP3YcFNVbbyBYzow3xC2JKaZwCfU7Ma76uU1GXp17MGr2C3jEVNy7YDJE3ig",
  "key8": "41pcXF3dYGefHRMaYxM9KHzxa19BykMHK8uBcRbPyh82ThvjdAicpx9he69NWSVaXzm8NunjrLeWjd2KGnDj6DYh",
  "key9": "5cbcyJjVkn8Y9LfyTUBRoPTDQpY3LBNkJdPMjckXiHY5URPdFKPnKMJPQcMwjZEqPZgxQZKyKQRMdbUiyp3ZK3o5",
  "key10": "2fu1nU998F8UDpjGn6ZRbgTqt7h1VKMxDdX23PdXxZorcZHhxwXqC1vXaW1EH4919DWSbdXATKTfyfTbcDg4V6qk",
  "key11": "48mB6PHhxpLsdwHNqfP1VyTsTVpzT5QuLTMX9Gj2DcXEbyBCW9pCVsUz5AXmud7hvpdGddS6oAFM7xoNTLPgmiGt",
  "key12": "3iwTwHGNsvFex51U9tHu7B4oXjrGvjzbp5hxLHQCsbKEj9LZ1JzTSdqhYGLBnPs6NrqmoPG8dmAE72Lp5yetGt9V",
  "key13": "5grw5nUHHs3Zb7fiK1n4p4EULHoFZgxH1M4rdcyJjyN8dddaqks5NeibuneQDaP9idEpAioTYstBYgMKttf4rivE",
  "key14": "4FtwKnBceL26ka9QTBv6YEJdVpcAZxVf3RNZxijzquV9hGH8DCK7MNnjpwG9XF9hW8h2ukuSoCHqE3ehh6VeEbps",
  "key15": "3jNsNeXMmfWXazJYBxDCGZ3cXEzQg4PUmbhx8YHMv2wYEzE5G1PhznJi2mPrq2Wu3RyfFCrg8zVdZFJGAQDBHmaJ",
  "key16": "2Uj2vdC1XPgPf3i5s939E65LK1jC4YNmAegjftPYcjjPH4dKHyH9TF8BrkYBPbjNBFUEHNRbvX8c51JJa4hmCRTE",
  "key17": "56vqbemDh5qGWtEjhUz3BKGcDw9pRnaoCdNN7KvEmNkEu2Mq4RJe2M9nKTXv6jFAV4jxtmykUGoy1Tzhd7oP1K4",
  "key18": "u1ojYWofgswGng8yKWeimmLR8dJnSNy6auZnrcKdWJzgKAWra1NHic6y5WGrux7jJ9qADVC8vSYUiRBMvLjkSjF",
  "key19": "4rcXGU1SCk6nQ5aJ2rW8s4LXuRGEDqvYm1ds73E3rAytDnSKC38mU8hqQiQZ1zVNi3j9yeAuAGP3U8zRNNKw4mec",
  "key20": "2YxRpA1E8RcxpLkdNcZE6eU5hLNpqTTCtZpoxT21AX2gCs7hRiuZXXpzrkBKiuPDaaGMWVKX5ogVtcSpPwrUYBsV",
  "key21": "5cr26eDpPvkgQhgMjCFgUjky9QHCT7ZpnCrikaGC6tryijqXCTZ6cUgqdGTA7dA8GyVLx1TmrvKVoS8rgb3a4pFs",
  "key22": "4iVKFizxjQEA8tQ7LDwRj3nPDMhBGus9E2gYt2yeqKSmc2FxsLNwGFjAXyQHMx2LHhECobeJDEYjFL5NCNsZ9Phn",
  "key23": "gE5fkGsqp6BQmHXpCrfpREWgid4W7EB5etTj2m8V8jGYettLLG84bNmoPpjpCHW57U3kcHk91sY5y3ueC86Ltgf",
  "key24": "2DcNVKFJnzZCpKbm1DbLF79zaam8Vb539tkQAusxicDFNp6zsTHfw2ebzmE4WCrvDo5BiHTCrYTDZXzu8tgnxXcN",
  "key25": "4RZfQvUrEU4J8wT9kNpDarXkYebyq7aqsdtHoDo1PD3wZJ3HeuGvVRN582cYU4BuPyrraA5kFkrt9WG6fXaY2MZS",
  "key26": "5J2s72VWTiUZYGFc3rbFBNipd5QEwTcKXivxr36z3TboWFhwBQLyydkRPmpJYvcFJZLPmUQQUTx8iiAWh2p3Sctr",
  "key27": "2knkTDm9zLwvbV4mZeWCFn1omSGUeqmLFqiFj7Em7kncCSzfRPrWUq7wQiQBzZUD2Eeu5uWS4fUKQ3kJ2XmocXGS",
  "key28": "3ini7gg2vLmnf6W6m4YH3ikAopAKsysriKm2nK85PycwSHfZRQd94FUnnxFKWrSfQYrJ8dfA1dMAGyks8pM77uHq",
  "key29": "2B6j31zPJ6nQHuy4nXwjgyr4S6rXLGJBQoqYrjK3mrZNQDdKRQ415chWJMMsHNrvuPxYwptQxi2znhDTxGLeoLDf",
  "key30": "41sREiDzaAKWzuKqiQbrbSjSffhDxPTATVrT56urtiMj9gmy2MMeTwpeoKRjotYAzWtyEFoCd6aHR5zifQHYkaJD",
  "key31": "J4V4NzXPou51nDzGVnU8YQMiXNmGSN9dET3rCYPwFynXtfbauSjedfQ5a6paP489dPpAcuwYf5SrdCW5eufgRyM"
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
