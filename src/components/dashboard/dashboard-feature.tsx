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
    "ShnSQwz6FgDCuJauHAM2wqfhXm2wCu4w5WpdGKRDKgRu7FQ6UuufnL8hp7iW2G9KZ1nGJdabZaxebj89fYP8Gfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y4ChurjpXmQhEvqyj5Zj1LaiqiFaNH1JtKg5QJdzHi2v6daGutKmUxsqPBrWmYXBDw1KCTXjyUemgW2Z4y4oRf8",
  "key1": "4Fas3raWKbUwHn2fkGLAwuycvV1CBEfmZut7n7qdA4VSn8tUGoU86tYKaPUjF2kqSkkV1Nn238AXYEfJ3RaMYoAC",
  "key2": "4p5X6pPmUY4UfGNXw2hf4XYDs3DpiCnVXeMvEAwqpxyh9cdy81SiGjR23xRd6urBC23PJXMi2FD1QKua33TFWGEN",
  "key3": "4TmC6jPHqGvG1vREZi3vTE3oVXeQ8CkjW45deUoXuRqZBZacJNL71EQE1fdznTEcf5GogTQQGkrsNF5auwVy4j53",
  "key4": "gBhrAwvX4taEnw5Y4kAufWCBmwP9Q5CHGosAbikPVs4ocrGXKuR28zkss9c7FSJVVHBoaQbspUWG9XwdPPPC7JY",
  "key5": "2Xj8FCnLa5EoKZcGT8czZPnxUMNUHMZeXNCPd68R7Yi9somDE1GneUeTzq4LuBfGaJ2DXyme75v7m1mNNjrXy7U8",
  "key6": "55HtASwsLQ9ACqm7yDdQVD4z7z2BsZNiQ7c7Dh5ZCiXXQbVyPKsAr7ifYmvzkFNqZ2bjNa9GgdoagZjCnJzsGXox",
  "key7": "4xZ1qciGke7zFtq8BMm5UKdoxRxBjhqqqXd8zQEbmuzfd8aBAamMmaMLgrwvwSJt5x77XQ5Lz57dEgD5yr2icWN8",
  "key8": "vtF7cKAyriPQQGuj91rUMHyXW7jFrSbdFSQa6Psnq3wpvJPsENNtQqLtbac1DyWY8Vw1J8w51oxNiCezxbsXBX4",
  "key9": "3y8AEmVDkPWks7goskJWKs3cUg9MmuWQBz3Ri7EkzGLZQefLhkxsJ1pBkyRpSQn4VbEaXw2WRr1zwumvE2aaZiHK",
  "key10": "2S73C5LUkrQdgNcwFoKceek5WTpHAP4EyvFC94uJLPrrPFHNtxXihwVPtbGTUjfjb8ZEtieX9N4o54uYtRGvPxMH",
  "key11": "31VAZKUGJRLEVDavcsYwDxvHpzpLynqbCg6ZUbSTrLZvw872LoaWbwdD23wECskSTN2aaB3FTxMtAcEWpXJPiW9j",
  "key12": "3zHnprYEWHsbW8nqW4wgAPBW4ymeQPq3JVBKcaG2c6MwLibzw2dToxphTEQsatQ4Bzy3hnccPn74UhM1XvqR6NrU",
  "key13": "4wdjJ73xxpeMv31KXdga3yfKZQkNB7NDSGjQ6dmNqfm49m3AJqgzyGhzQxjYFgE92JzxXmpzd6sCYYo8m6kQudWY",
  "key14": "4anfFFFq3ooNwfe86SgaiLYUtjiDFKmpQXbgsbD7waVCFXjTjawrrZ5Z1EBj3b38qYeS5ACNXzCNEeWmR8QxaqmE",
  "key15": "5fLTFbUgCFDgAwhEhoo3T46bVajc5ACJFFdjM8Dr7xRwTb3pj8fzcZ7hK3MmkNTe4E6sfU12XNYPPiQPBoedbWLQ",
  "key16": "3fRbuMPQzfhN3VNZqDJioiQopfGS7DZn7LVqZ8FLi4xyXDghs2BhE7XJqnm6EfEPvRBxqtZGddH56QsazdMuQNfX",
  "key17": "vYPxta3rvFaXD6z5YZNnkkNV4mgLPsbSKGcgnko29QGpmuNLJKfMN97VU7S1CHFs78P6hdreecromiqyGggkVaj",
  "key18": "3fQybsBRcwyUXwpWscTnLndhPnwzgr1XwWFUa6uMxvCSjPzqc8mjDGDpLptaEy7V8tFzcfoj2smAMv9toy3RWFqK",
  "key19": "5BLovvyuLbsK8xPkHr7dLg8UK1Gdsx1Yqmf2jpTTdfquvh3BjnqCVdDUz96iXPgxTLeLcwzWVNnRxh1gHnW4hNMN",
  "key20": "3K2ExxvpE5RWTEavtH7GAhFfkWmYHxzdDQfZaiHw6diK1Rbg7SZqNwnY6GpmjQvFyJaohpNBaVN4DzKtE9YKN3Vi",
  "key21": "4R7gHrJMk7nocRtiC49FWZt2KtH7WsMb7bKmtDNTzz5seM3pxHtJdSm7AULeG5fvk9j6FrZEwTrdhngcPWqn3j3o",
  "key22": "2xYKaWuFgCGBB9ACtUPiDd19nv7cm5znbSLMTSo5hMpX9e9iU5ccKteGDDB2QdR8BowB2ReNYmhUb1zpsEcHQTeS",
  "key23": "c6fjEdyyznCFkNq49AwDXdYwTGRgpbjhTGrZ7ENh26fsD4AH9BjTUyJogE3YZNvUu7Go3SsaNSiuLECp1cKoEZ8",
  "key24": "4fCV7aaqdHhBnipmFCQzztaUn59AERKr98xBCeGrEuxAwRRABgmmR4S9ZXWPXhQJUXMngcvb1FMEiXooCzCYcUx4",
  "key25": "2afXFSU5wTsWV69xgzzqWJu8U48kJNzrKcCTxUPiHCS2TtG2QuWXsKpzu141vGDwBNFGaACmiqZFFn2jhNwRormC",
  "key26": "sDbG7uD1Qi54WqNx8E4so94rS7nr6xW6TYXLipjB5Hz8NVHH8HTuh2dYy69uSMdWjqSitrTn5xNoUqVbSTCDeYc"
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
