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
    "5RGnnjQ4j2VBPVfGvDNfYBRer6KWP44df1JUcVW7JTc5NbLb7buPnEgPDFGPz9od4EwKhPQgFN8o64yVuwVPGvrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwUCUDe7GbfbEB7k3bBWLhVqd5ecEkA1wi2UP2sp3vpUCSbW47cE11qkGbTiTnUZqaJcHWXWV3S7VaK5CpfcHZb",
  "key1": "4GwLTdgCZenWzQ8mLeRQsjeAeu8sKrUxsmizVzga9GZgdRna9VwvUbKTJcYutCK3DgLyF6SpGzYaCS8J81UQNW3F",
  "key2": "5Dr7rhvWX2wr4565dUNfw44qay4QAvEmcS8mPFCB3YEb6gsmuGFUxx9WxtskDwkt7ymAxmkYHugfEaU2hMSDpSYz",
  "key3": "rcMWsbFuUhGn1bwbrRXXAmrdJ7ZbJwHRScQ7CuRgZ31gKve29rW6RDwFYPATTrQfhLt2etUjabbqRvYKAU7Zviw",
  "key4": "6T4SDdMWgDvFNfs7VvqAnG1YG5QtkLUtbEGjCdD1rrZbF8KJDofVHLwBUQWQ3ous5qMk7TDmoL1jhdvmuWcrnPG",
  "key5": "4zm79FACNpKwxqxgwWphLwAJ1RMYQJU11ixZ68WvkhB1RAqjRRcS6SF1Wiu4aM2uc8yvTHXZgfjh2E9cYkoUdA6L",
  "key6": "38GDoGViYQWmzgozDkprNjVA4xZryrxDsitY2NjiAm14qTsgxaYgfw4kMtmRr2hdxp3r5zsP5XeNngA4QD8se86c",
  "key7": "2QupYGna6vg5cniM9b58ttWpEgFVC6vWeJidafFvGuzV2NMswpokUWWuPf8ccYfwk76YCzF5TmLitbDZsnXGDgCu",
  "key8": "qR97zoWK8oNe8yg9QdMBwT5gMLhbk2CStnw7RpjCSp4RYcncVwWkfgZAEEsFNMycfzFdSbEux4Lycqvo9tn5d9h",
  "key9": "2UxaBMqwpx12f67fe3YrkTpvDxKiL7hYTFkbrpduLvRmP8A8bmwJc6J8s1u8M5BmzvEXf9B2JsT8UZQ1jn2wtkgE",
  "key10": "4CuvUnBj8LSTAZcNUwqyVCzyb6Kqv7pgFfwXsgJLuvSsF29AQY17ZpeMCrHANXiofD4CANTkyPirQyrkEaN4i29J",
  "key11": "5uRdCzS5YN4nMQWh6eKuD2yy238iZwFWTKcTCwtwDMhCFEcyNXniW5XYi3qgWirs8fPpt3HjRCjbTVAB9mpZVfcy",
  "key12": "56VduwVokMSY7mUud3RprmcwGu5AhMxTeu2KFkb2EtXaqmyuRoEp5Sc68HPrHjuM9iBS5RmQwpg4JQ2FtTwwpXc",
  "key13": "4eCXu8NQaaXsuC9uUkRY8Ge1JcathbA7z4CFMwwr1eiec1d9fLfU4Vs63EJDD4xpGTwrtv9vrwJnGRCiWSfEvZdH",
  "key14": "4rWPK7GxbexfS2hd5Z5LEUDdLSS1Au6xFbStgNmJEcSqhBLEp9VH9mC1GpLKRXgXvHjVq89rJL5WydghwwAQwBBV",
  "key15": "5ZrXqVSDFumo3UFySdN1vLbDXmb8mkku5BDs7RXJ8wYbqHmzS7opjfvQAZjtpo4KNeqNiCPvmwRG9opKKr4YWK4y",
  "key16": "FPXegNAYo9aYMXZ3toZ83S6qvSJgET1KgfwwizckbXz52Wf8kFeDBBzGx4ZpGeMJGi9vsnNrfTTEKcyix96pSko",
  "key17": "4PeFPgv9JUAkK3cqCWNmJQuHHJhwFYqgrA5pbYn9NrTavJshCKW9shzYpmBvPVuzgQqZYEibRH8LUADgrdKK6vmj",
  "key18": "NaPMpVtTfDfBiorQjcEkhXbMNJCYsZG73zTAE6Mb4NpAbebLutH4b8iv6ogvVaLuAdUXV5D3urHHxRJePEKiTwD",
  "key19": "ESGCozWZH8kPTvXYk5uVz8nFwG81PEnkezapVijLxxjDymAbNJF6J7nNgNmNToMMorHGiDEEffwYofvGDzVngPC",
  "key20": "5sAHu3FPZfEaewbfwEzHUyWZ6vFzND37XQMQZQD1up9w337E1nLTSfWc6sZxqroGdzWsrbVN4pZ8gqYgjDTfsGbc",
  "key21": "2fyuRqB7gpMmCbPQmBEqPKV3ZSsEKDSAHDnzN48yKcjFNCzKmdj3bZdpkKNntrFDAxVHebBrHhUbKLvJKhdWdLtN",
  "key22": "2aAHwBMsTJPNmxhs7zQYs7CFJCETw4swAYhd6n4DfaDNapCHoRfEtNF6eQhkjYJrcTdBob1Q1d75pb6kg8pVGp3u",
  "key23": "uLym3BBgZgv8Wi3EVPs3HS6WMvXYwdqGxD3X1TEMKQPDp9mCsLxp4Xixb1ZBFULpuSsvWxgFx2Mx9gQCfdcY7Pp",
  "key24": "675P8eEi6XwX2Cx23PmCiX9m9bVCWhYkqd3GnCULkP5puyq4Mg12FnmL3w3MqJkwtK5Ew83deSipzPayfcS1HUiq",
  "key25": "3SAWNqKbEbqPWZqkquTspvCicd1tmj16V32XXZ1SQf8yjsjtdC53Mnpuuh6nXVBAtpBr2H5YWYAh6s7etX8AELop",
  "key26": "5p7gehowe2fPmdxp47FR7Aq3GLUBTCtYAPVdVNq8tzWrvG9KrXVVXgqNr7SNxJxjo9ptsBsryxYoBrg1KKuS9BSh",
  "key27": "2fbqktf6wNuUDkLtHi2nSUgL4UNon8rEuNLqMgmgmvVSRGXysMoTTL5xK5gNFVrKb4qvGfW1pBzCkSgLoYdw9pfD",
  "key28": "2RCgDgrwq9ZRn9SE7cH2GJ3uWZWvN9PWcgXWHanzX5SUdarHG3hAHWSLXJ3JndnYTZHzEyWUwU2rbCDiFPCXzGfs"
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
