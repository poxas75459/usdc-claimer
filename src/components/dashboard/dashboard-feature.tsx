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
    "5e2PorEag77D75xHQzDcdTHWrWMns5r2mwQ8QvfFcULiTiCDaXsFbUHYYrDZfbcu7ySWdXJHEdLymnj2fszMnQLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQQCNTARKjmUBwhcNZcW266sYZTitTxZc2iZcN6hBg7VAig75UsMc9kFi6UgAifqivdcPfmukaZx5tWouVgGiyy",
  "key1": "3TNee73aNyP43K4wpMWzL9fsfPGoHJua4yLBVnHh6GDLSnx7bxieotQt2XpJWrrkq2AEN4hvsYYY4XnLNbpViqS",
  "key2": "3CduQz6PvbYLSS5NspWjcU2KRRr7Nnbd4mRZTZE1jtXeCHbgyqKLxV4Ex8GNJERJKw89biWSW4pspNWhQmWPD1ch",
  "key3": "5DUovToMNPYDr6e82Zi2Di4Y1eFBsqWa7riTB1v9kZrjMH598zmMQxGe4eYW3mzQHFHi1egfhoHXo9SzG9MjRdfw",
  "key4": "3ZY5TckH1ouXU1QcE5i7VCHJ2xpJkpyKPcbsWzcY5Fdf5JQBfng5fmt5ZuEHMezFqzhn8raa3eixvCnNLe4tpu52",
  "key5": "2B3CtGTAWN72LKZmPP6CzRCroini1fHNZJB3n6kZicF1oedTckzVkTaMkpbC76AEpNyJsDQikg74RrxnNm5QJ93k",
  "key6": "d6BdsinUBbhrixsGSJfLzwfiVNu8rFKikqSYR7nweYEDH2SN1QJTQvt9UnfXX4tGoZfXsEmn3wc5gqUCQn6EGHL",
  "key7": "JN7YXw4pdfW985ceU28Y1d6rAw2FbY7dKUF2Z2LDDRDgzSGBrea1MZyKAycVN41CE4ndNzPxQxa7JG9CeDmqNJe",
  "key8": "2WoTb5n7DKh6pQrTVvx24hJUopeAeRhZSNbcUdjccvPo9L72cfUYxx7aNGQd4jPTFrAam2wFeBPvwQDpShK3kib2",
  "key9": "5er5NJnGpcwjLx7J17ujczrAMbMdMpg7C66wVkegZGDecy4c5bDY3t8cq932FePpKRxx5AdVUGsxtvZzw6uoPc7S",
  "key10": "3ynjNR8fFc68e7oU816q83e2c4Y37Ze5P5YX3BG1TSYhaBs6SNRcXSmWkKbsFG41z5BEkh4FAKtyCm5xstYjY5Sk",
  "key11": "25vPSqQRu5rTC9MdGjwfCMbpQWkxe7y3n771eG1i4GMnXyPgBXu2Vz5jJTULht3QHCFVwXirqSoUQNuB9y1GGusi",
  "key12": "EhwvQZ21KrXoJsw3UxvMkacZ7ctqPTQXoJskGneE915157cCWxRBshMGGGvkY4ZJFcyJg2iRWuLwRkFwP5zEp31",
  "key13": "24uAREpu8sVmAFhnR94pfV1KUphUJ1ijFs5E27p1VeV3zf36k4GUSzDpj23JULMSiTynqKZy2Cy1rUqVEZiSX3m1",
  "key14": "673Xwt6bo1y36GFa6cdjMmQ8qwXKaaKsVV5vf9P89Xtx6TXADtQzr3eEccS3rkhZpXfTuzL7bJV59aeckiDsA92a",
  "key15": "rTirpcNfQ7CVt94svvH4PFahktrJxjfge9SnaCthPWTTMJNCfMCj5E9ysmtmXeHErYs8YdAe9dTZ7NBk6SrNyrK",
  "key16": "y8sLYb8oKiswN3Y4z3NbVZUahZAdULyoM3MaDQ1ekL7qZsrqS7yCikyFhGeiC4zUkxvRbimbCwMKuAqN1nPuPmH",
  "key17": "49zGex3xgZKt6rWmHCjz9MkksFxbqsrmUkqhu7y9GmQvhsYQ3m1zyDJRNA3Zk3ZoPZQuw69mZdk2UfZB7AzAyTUR",
  "key18": "5GkhPiTqhZBg2hVLmMdDuePEWec3KVDYGhZUp5nwYuv2irarS9pMYfDScxhypenUW1Q4iS8bxBAjqjAy13djByMN",
  "key19": "5hnVaTokAs4dahKhdBUJR38jFY8tf9vSkKM5NzPvmtfeSHNoxRb4dwGCnMRG4bPvGgRxGLjqcK2u5ujFFZm7QvyF",
  "key20": "5J3xARZ4YekFNFiN41MVPxLbgUT7WBuqoZjt43ZwUpdsWRoau2J3DTFkj71gMgzniRBKmjaTQfUvFyDfvLjkMgsB",
  "key21": "HmcTobwmjF316Bn3LVSerByZ5GZyHAAZJmJvPpY79vP7ahcL8GxnNUStB75FXZrVut4uvheMrPEXSbGa7rWEs3E",
  "key22": "BmPyJTCHBFX75YxzUo4ZPznu8pYNouo55Hvm7hDVmhjHNAZ3hBasefn12BrSKt4PWLHgHtG9GojxMq6qAVG4UsQ",
  "key23": "2ojU7iANKvtpcZhq5iduJChmwHuiuGfD88aBJBgpu6mDzCKkGqSY6z7ZwKWq4VZQ1vUVfkFvX9aRWftgqcYzoC6Q",
  "key24": "5vtzoMr74KcmbE4abfn2yfjbMxhRS7Q177g5ayswR5pKGzedyeet9Bv5HK1UdMttdsKbNJMWf8NGCc6fYbzA1A5U",
  "key25": "CstAV1wc1BTCHaMrspQuxWaGqx9SYgGdPtwDw191pqJqE9PaPr5YFvRzD7mDAmqkW1FFiQwQY3irbw9TbFYnjL5",
  "key26": "4dXR4UpBUPGEBXSYq3f5hmwEK66jR1VTU6oCxid9VnU4pAEzQB31U8fCWv8DbB9KULpcB33zkAcgWw1Q42xMcbsP",
  "key27": "3FeFRNHsLx5MsTxc85VuVadF5RfdcsQYt1FqctTaxnND9mKAxZf6cVwCbd1z8VWacaiHo4MHrXGcVGKFT2jRkZ6S",
  "key28": "5dy1xiDMcAza6nBTuC45Gt9QR7ctVnVoNrDJjCjwafEuUQW25mq8UzGJLnCm6dHUaf7GvJLApV2Y9ZT3WJ8jabob"
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
