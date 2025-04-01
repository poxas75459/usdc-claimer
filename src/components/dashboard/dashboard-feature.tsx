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
    "3qQ2w46Tm1hZSJGbVcc1tFvBSw3pS8edBZfyrkKb4FRZ7dvRPW81R8ffoE5wFMNvcae8YLzwRWCDmyU3Nh39JEi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fE4wxcehWHhj3cDAnBdC38VHY6LYrrk1hjY34oazAac3KxZsxKzoxFDY3KrG9bBYFx7GfDovfkv9Scfv41Jaej",
  "key1": "3nfeGVyre6TVvfUF3U7fNDLhRYPxXEDeAB5KsQ8CDg153531SaWW4mBg9LL7yetkze1EZcYJ5Y315mKeHfXZpDUz",
  "key2": "2YKPnPxnNdzbuEn6NsnszFvcGEkKD54W7ezqoihMU7VhGzgh6GSgtRnihHgrTrWeHRYLeedzUXEZMHtKmdieboTE",
  "key3": "3e5ZV48YA9t1B58hrxSnJqqUBhKHxXumMRymiLPEpfV4gDUa1sQv9VQPFRxBQVmdpKqWbY7dsVGa2BaWTtzzmhEc",
  "key4": "3ga58mFqeQLb4HNbJMKw76dF4E9uLHTSPprdZpazkanwtcuqV2QFQw61SVsAVeEcrQkFajn2hYpQUikMRg8DeW4b",
  "key5": "28XnNd8m62UJF6gT1kUVja2vwi8rQtWJsi8RwfN4wTtAjVA89Zra6rBmGjuwMnNWkuHR8mpq3yZMZRSbAor1D3vk",
  "key6": "5xaWjfqpWMsq5eXWw4w26ntm2jGPWb6v3AtxRuonptCuogj8SxBEJMzuGxhyKCcLd8j62WYnz8LGUwgZrTub7qV5",
  "key7": "2qmDGHmrYUfuVcRxwyEWsMCDromk1rz9re9XpUSzkxGcfnrF3n9MwC4W5ggtnYYbzqkCsvKTvn5bi6CWadWKfQrx",
  "key8": "2W5qg22XYhuG5yk1ArTAoGaDtV7MEoePWtJA63TGtt4Pg919gVsfX6oSSsquXLXNZ9Aw7oPrutWGshK39LfdWhfe",
  "key9": "5sEw8VvsXbPyF9NcyLu9xGYQ2pkMJY1SjaELemKf9EY12hdKZ9s22cKjEGUMj7z3ci17RuMkSXJiXVFJJBYSibE5",
  "key10": "2esywdcVFWAk7MrPMSFm9P6m6sc4kAsbD8TuiwB7QBRJXaCB9YF5GAJcTbjLGurL2D4DwDJ3TMLUmGo6Ln2FCWHz",
  "key11": "3iPZha6yHjwcN8jPXDTb2JGLXa7MAA23wiP2eVKYompg9n1rHdyScJg1MUVV4ABfkfa4nH5x5maq9F7KtkeraZPj",
  "key12": "mTwuEpNk2Ccf2q49DoJgsdQVLAg4T6VzNJmsziqd9zmzDuKxB2LZsgRt2zCK9EHut3BXFYSdbHTuHJLmZwgWi2a",
  "key13": "tSYsSnxqZ29uxdF3cXonQkrSTLpJNCkQ6G9Lyy9RniroFJbPgn2qWfeLxqbLKJBpv4wZKTet4W5UMKoctLcgPRv",
  "key14": "21cFcUuZ8gm8uQPgyHunycXG7eKqtDXUTnGSqy4SGrEbBhiSnvMZR9JZZuQzXWdF8JjH1fo2G1ZAc4GZoQPVm4u9",
  "key15": "4g7gMPfT4xs6cQDgAHbKerB8x88LWdegmCGtQyu2Ku2xMfuBN1go5nd4cUkJsHGFQtm9NVzM9tf7cFaxNrmQ4nCv",
  "key16": "2XF4rxWBsWxnq2E9oy6BTGW9PyagJGqe8mdDQGfDACwAYDqEPd2GbCNqagRgunRLo3WqpQPkNG6BCkTDukXyQszF",
  "key17": "3PHGaGFdJD9WS3rU1SW9pMiS1Qz8zEPr9s7pKPEMcqRxXvSzXN8r84T2r95HcGoD2Tkz9ZXQAZopwkBZqRYx6Wtx",
  "key18": "34uV8XfZekySb32n7icqk2d4k7NZ5npjrvp1StMawX3ZwNk6cjx1yEaKAeRxMWTdSjwNLzWDmrrNaJGRhG6Z5JXN",
  "key19": "3SMqztbNtPwPpupD134kmZVvqmMDG8Trz8Ngdf76ihMNrQrkmMmgAZAdg2R31PUpqHWhkq2vP9uhGECgQh7WWCoq",
  "key20": "3U5hV9kkSyoeaLQveRF29whjzXAC6QVyxJSeTbBK5uFFHpigrSqNJFpKic3pmZgK6cKdxovZ2GrEk8hW8UyVp6mA",
  "key21": "WScS7yhX9yYLwXcitsT5UK666s8FRwfMwRpYD9KWtR1TzPMtsxtN9GsrnrAtrhnV9JCWz9StCDgxW7YqxMPAJU5",
  "key22": "gftboCiSh3HEZc6fck4xXeiRyJiDYJyiap8KukwuXETgAUALeYHKCGG3dBvd8ACNW19wNJhZEuJ9xB5rdEPiYgH",
  "key23": "3D42qwT9JJYejPoULLuMQ6srVdL3UrcuG1TYQBoJjd6dayQXJ3wUgyfo2gXnuMKQxqcDhiE9unxrxySDhprRn8NP",
  "key24": "4ggr6LgW6DEnb5L7p1aH6qWwT2cGdbsoSbXwgw1AeTq2SbRutnVGnPTQ1FSYnjmMthWzHXLZFfZbL4E9XztjtfFC",
  "key25": "5NLxxRBYXLjxVmupJKFgrKi5kq36d59Tn2owMnwb7zJAaYgH1dCiydesyCwHYEbuDYNkQKdu3PAESK6sbtuDwkDh",
  "key26": "LXkQBuW45JAbE3SB3J2HGGonN4Qb2DeWW37GP64DcLMEb6rHRkfr2kaRxXyVAwrvosk52HCR8NhHVKpBBTzpDTr",
  "key27": "Qhodsksz1qCTpTujQhq7dXSsLCyUmYgKNnHAfWDnGKmgtwiUsTBnQyj3RQxQ2Ya1CwtFL58qfYsPq1rD3KjnyLo"
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
