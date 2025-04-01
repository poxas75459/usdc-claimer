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
    "5tYp8ucWfB6fmrrhVTZGy48kxJ6fymGz9yCVAE7ezNp98i2rtpyYfHUGjuaD5iAST7pftxBC1LKCiMHC938VoEJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p25RuTHEYs68g7hCxQusp5m79vyoZMn975CWoaYfkWcCNi8oHFwnjbWk9CQHVTJjizjDLrm6SprREsdbQryF5tV",
  "key1": "26WhSyCkLwQphtb5NTqGQiJzRYC6n6x66gByTpAEwuqd8oZF18V6EgApE9pdqc7BCRmBPt5A6cTVw3SF54jNSzqa",
  "key2": "bgDVL9cwRUDVb8QxauwgZUecpkrBTCiFZEp7zbDK9QEXiyN4zHpjwUvkCjwXuAs6QtmtETuZ45eEqNYVcx5JH7U",
  "key3": "2WnTukkm4eTXxWvRCA26xGPYDNJJqnne7rjvT2nupBzxxMbqZAGZCiwCc7Yi7iaNTTVzad9aZagLdA5Nw8Ln4vc",
  "key4": "43dd4igZ365hqtL6taKqztbknkWgDjakV4LkXM98RuRmFAmvoVZ5LTf8ripw8nM16gzAXTzNKuGPK1KE6T8qgFr",
  "key5": "3s5HoLTtaEKobEUawKyVUbFemiZpFCJ5dAf5HnxWA6VUBUgNiPYust17UuYMciUhm1FDyymV6vzbmfKZGq7dP3bR",
  "key6": "5vNcoaAHigoiCf6LQAvEbhnzMu3manGuxmZ7DfhkxVu3XXXHX6pYHgLKpy9rVzz68xDEbp9acS5GjCzEmFeRfN3R",
  "key7": "2qo6WyhXwYgXGvStCR7iNYYBb9MwVYq5EYsSJDoToUrQFu9SLAQ1V7mEQbJw9b8PZVPtMgbYym2r5cFqwPjyJ1pt",
  "key8": "3uMir7GjkSifyg64ScHbsa3zQKMmnYh1cgbZFhyjKznteKbKazu5JYNscnsQcMKAxbrMxyP7e5gvVwCdKsxLuySF",
  "key9": "4hrwYoi1GHVrmb1NeE2dBoXTgZDTwRnRBpCphLcrXxPpzX8fHPbZJAMnWTFkYSJgRjwrPjVAdozJ6MHF4dwvTavn",
  "key10": "4zKwFBUvaF3uGJJWPFsJDHDWqHaMgcRs4pwRxNoWyRhDQzrJ89eVSXqYQcGYd3jWmzDnCWubZGfnEDC7C1mx5kEH",
  "key11": "2dQXXExK7KwQXb7gdDJEbhn1T9UP596hHCXCRdPHDS8ahd76h2ZyodL4vngjiDEyS4E7jeyZagHafiNX8WtvsSvi",
  "key12": "5JUvz5wcBxyfnDNP4KkfKiBWBQKKDuksG4YSFi3ZBbyJWFXf8mC1Q4r1aiFThLvfsr7aNQvLP77PKdVy1LFHCLRS",
  "key13": "sJ3WW9YXyKBxrm9KWcD8mxycGjzYovCN4wgyPPJBLkdSUjkigeNWw7rV8S9tSB5tjfZFhxS8RgjeDQ75yg98hDq",
  "key14": "28JbxSzexj3LmPa252ksarkAW9bGyfNLmWXRXVSHDZSxYE2iMXDyaeakin19GxCLLiAxvvZN6r5kyhHo8SY5rAwq",
  "key15": "5krEkP5YSQaNtBHaFtazXt2mS54791nsNbytBKYZMZ2ejRjK5kuA7WQq9mvEj7tRVvuRgrgkHHsTkbLdcnCi6cMQ",
  "key16": "39hZ6oedyvRfckLZyeuLqLxnpEjbQBfsfMfnTmjAs6YDnfRMnU2C6CM7QCtxyffijJD37av9Dn8hmjjdoUB2j5r6",
  "key17": "2nVj2Kz6gUCuwAUeaj48ctR2nTieyeGdTLGaDb6ufP5DaPBXgJLDj2K9dAP3ANAnYBWcNwjBs6nBmz1X23a86JLP",
  "key18": "TTQMArBgegMnm15NTshGbouKdHPxZnzEb8gm9W6hYpnZUuwxVKU6dG1SGFQBYCfe5WTL3P88mg5uLNXW1XrhnWD",
  "key19": "2jzy5mBfC8gkJrzYXbUgyacBGwaY4ya3peEukXWFKDAfwkZpAbkzFm7mbgx2TdhD5skoU1rTP47ncup9pBUP5LGE",
  "key20": "4HArhgYxkSGymLSSHBkVLBL1piXKLLq3RVLe1NUsJu7dZ2TUqSyKxrixiztRCnNRUXjcedbvsaq948qh5WJQ2iYi",
  "key21": "3hZgZAEPuVTz5eRg9tmZ8HoA3m9aqGMA9bcAs9GYaECf8ykHBXvcvsZD8o8mHpUNTxBbjU6VdDceoBjWqbcREYkc",
  "key22": "3N2q42jyWFH5uUjbUPe4TNEvru7CDy3cUnVf6vRmw8YTaNXZWjBWaPNvQBY6MUxwZjXmPCgaSeerPQ9XTRztgLWd",
  "key23": "2wWFfrTt1cJNM8DgqzyKkJXWzTWet3JZ87pC7m5GWXC3eHFo3676pNEginNWhcTSmRGdudcWu18fCsrpya6MUPHk",
  "key24": "2c6FEEWyd8ExzoTaj1wtaw7vnxXVt7AqXqCs6GgXDXzosNfrudx2BTtMQspazrHo2AWM6prEvtEwv7moVG4afYg8",
  "key25": "5cTsGi6LaV5rXJVC9GzHeEtj9M5Qguad9JPMXbzmCVaHebaJfPjmKMz2JRPboLAYcavVDD1Ch5HgyWWfcwchVxJj",
  "key26": "4W9irmfzcU9YJBuvezKGtXwrYSCTZ77Lo2krJz7bYtYN3KUhQkx5YefcCXoiBvmsL7ufJNhYZSuAd3QwACZ7VgPb",
  "key27": "5ByVLZr2AAXRw5wxZBgCifgKUNvMQPBWmFNMWh5p7bnbUWMN1BgyE7G8ATP3MKYH89rCmbnXtHXu1E39i9Bxp2he",
  "key28": "zwarkgJdHQqyRmUSAU5xGcpu4t6bSGueH4JcBKi3xX4iPLj7BDrRmZVTUBkUDUQvSfKrRY1dqqPFAtnT4YyudLs",
  "key29": "R6jNeCpzSKLvwjEG7igiHd3Ny4yzFSjvUnTDBJFZJEEiSNG3QDSwgCn78TYqdCeqAw3oHL3WTTD4ZLt77ZqA9Pw",
  "key30": "2W67d9C2XWG5frAoMoB4undAPfx7SQUjyrGTMd1kJVoptpBKfMeyBnSpHiwKciKEJvg3SE7kusVpVifyy1QFyzwR",
  "key31": "28Y7kan1dMSAgmYSUHtbNUaP5NDNBGdGAwhqjLsu2JHbiMcMCVx35KK1njbqiRTzDYT5KJn3ZKw1UQgR6LgzNhUV"
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
