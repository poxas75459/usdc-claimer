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
    "LfLSzzBJMwsXpbZcjnNpPG1UGsa4ST4cPzukdfF3QvyyWUNJ1L61arEBEXvxMYg249Tf6Ee6uaiZ6BjJ6TuNBNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELGHdBfHNw9LcyaA5pMDGKy5nVY8MdVVhsCDBoKYRpSpJU8ERoCDJ8HDx4tLMAniRzZ8Jmok8tyeYWAGHxP2tWh",
  "key1": "3EbP4mxxMyXkNS8VyAixqU5EkvXnhpFDWHjy2NB5cCLzhVFexkeeF14Ls6we5wfRbdgVS33M8QFLrGM5tf8WNvvo",
  "key2": "srmD4eLYRUUJsjeuCZAZtEtjLZVX8CPhVDL1VrcqcV4FxNovxPPw3KcGLLoTBjNZo5uFBFoqDCdNdPq6H5tQGLT",
  "key3": "21FJBDHxH74GnXqt3t5H73xbfviJNxXTrLXYW8PZqoVCVxDm6xJQD6wDjPaYQR9myp6Sf9HuC7B9mC8eftPdMSid",
  "key4": "3wfSt8C6gmq5CTEbZf6LQq7suo984eJkiwApz1Nhk4kGXMAY4LwAwPrMcF1R4FouAkATzSB8hc8wDqPWav4N2cvq",
  "key5": "45dtfPTbqe4pu2eaDP5WkfZLswsr86Hc3yWkDgMzr8BCqjA5azrUDzMnVdMUZQCBRzQFVmSiafH7jQrXcsm4TWi8",
  "key6": "E56ExdQYtnRsSpoJVGcysrxfXE9bSphATJeinjX5Qe7enuX22VeiMEgsXCSVbVNcQvTA6H13hggbztw1tzDHai5",
  "key7": "5k28B3UjPe9VNJxxfKPCpKWCBZNtN8g3vYczPdDWc4caFyoDzTr1pmLY2hHFqbvxorhYpHZndeA2zmcwz8cooDEQ",
  "key8": "2JZ1LDvw9pkGwgc796W7EG6Na2YHwTB655LT4dEZNaKm4bQtihh6WYpkrdnsqnrcGft7pK8m4Y9LfjUW2FdAKZCE",
  "key9": "cBPSMipgjCz2yCLt8XyKCGcMAL1qELpWBkoNcXPuHZkDfeTarByyJdkXXXGdK7A9DvwSNcxAz8ipqJwufaMDQ9z",
  "key10": "5zQxofhg5TnxwtnUgXeBKfuaphcxhgbC6PJ6YeeNvk89GQkihxJYtM3w1JaSWQkUgcc3zWEfErp9sGgUvT9umHLE",
  "key11": "dkpELT67VcW7g5DWaM9RpbAwhPFEAzNfLSuGdu9uxnCzHMMCto4kwtUDL5VD5E56as2QstPmSAJ4aLheGY3Rv11",
  "key12": "bDqmxqSr1w1jsBYcSGAGmsm8bLmycAPb4Cset9eugwkcy2RNGRg9QfRayegZb9YAnWpAvxqLdU531GTp7Kdmci3",
  "key13": "5SwHskoyAU4QoiD81qWiGV7ZBRecqexyReKoWbUycygNTXMXRuXZUimKU5Wx4LonKPMdG418e6H6JF5y6LEFAhM3",
  "key14": "2AJKwUsM6U7MQuqe6P3MN5sguFf18wKoFsVTZX1HoPsnrQJT5tXnLd5HFKmS9BayFu5L6cj6BCH9qEwdcEBgaT2c",
  "key15": "3PY9UG8CMG2FH2mYt8PojYrnba1kFUtosctoedCavnWXL4ZpEVNnXDqLuuXQ3bxB7v552h3hwTVHBXkki93A1MAf",
  "key16": "4ysP1b6a8Gm5eDWwhbH1wrxm6Spe7azA5Lmz9o3zcL8b8V8qjxKQDB79BnTQ6Px8UNn7NJ1mejcuJJNY6sPomj6N",
  "key17": "45B5DDca5VwNPGNDATM2xUkgvXihTxUhCFqpxZ88oFbv2VTaCXUjphyygjASxXXMYhmnYQDNM57NcE6qJMaUMYWQ",
  "key18": "ThBgh7QRUQ8UTCCsPHokU6XvR7wQCv1guUJXxhYB4APHHGKb6N8znP5BUdRKkSUPKX8xYqCxDzbCkfWJkt8gArz",
  "key19": "S6MkfTJyfT5WcsV91iaFUE9RihBmegyqJCam8fYxqJGwrXLE3H8Wco1tDVQBtPiGKtuJKd5nLX2NP5bhSdcKbd7",
  "key20": "54GnWUn8wLW88PDAuUwKwytRp6vpDeVwVyuDkFto6wHxE5gUd6ejxDe5hcD57C542H3gFuGSq1kAwH3xdypWxuG4",
  "key21": "66KUfjGuG4GfCfEge84Fa6fmQkzDYmFNLjRfssLGXSn92Pj1kfpiKiikc2Uqka9TPr9mJRYXrUwDGhJPWMCZ5hXN",
  "key22": "Q4JrFC8j4qEb6QqGA2CUcLQR9hvfqi2eCpd6AF7t7VS1ozxG4BYbs68bgT3pGy7GK7MoYBWGjb4wdqRRxC6CsFY",
  "key23": "2q3SUqreRngvHdTsf5DKTjqBfUHHqEr1pb5DpvXTpcS4uVgUbXHk6HkAEApKHXKKVjkwTDL6TdBWmiytA7vgapGz",
  "key24": "56kUaxGtXzNkfKrrpTRjoAq9tem21QYyNM7za5xZSD6YLuNtH6xaogNhT7tsWP1Nj8ZaUmayZFgWzfbq1DwJ7H7b"
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
