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
    "5c5DUAXhooR7ahCdorkn995AYGihc8N7DGNK5mA6Uja3EFYd4JnegGV7BDkzUtg15dSmvnSkKdQon2DvT5NEfBiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NzZhYzb6GiwYt2UQHQSxcde6rzardUWkMg38psUS1DFqvXujAJdxV7x7CNEvqpmo8gjyE72s1E5TEcPSv6xZgyF",
  "key1": "44kPTPMGfsMYHveJvyKsP8GWsZk4cJ4ZZPJpp7a3RaLnpfBXmCvLWoWgFgqtxrKCSSwhwqtF6rhg1NYdfqMNzutV",
  "key2": "kJf2yvhWcovCjtHVP8ovMhShTiaY4BMNSpMJcCvUoGyzhcieZRH6gPVVgirtQrCieVvjLNpcLpbdwEuiaLxJNn4",
  "key3": "rUC6T41K3fmnzQLJu87N6BoANHgAUwFdqfUNJx9sA5A6DSimCEhfY2qahDjiPovE4x3P8aC5RPAdFzHSz5DtMN5",
  "key4": "2bjNHrPM15ApcxTjmxHvbp9Eg5LEgjU3gv3mKpvjySA78y1E8B37C4QGU7qhCUTd8CXbFydvZm6degh5eZjJYWxm",
  "key5": "2WdVmp3ZRq6fz5b1XwG3fcFFmAeaPRShQsEBoutYAJBzXjbtzh8GqbvmhUJc3dvXpV81FPJKm9v7wpwUEvxE2vUs",
  "key6": "5PgEHosy3SGD9gW7YpcxMvLQo2TVXvYZh3FgejNYT9kUS3fvQs9hs7EFtcCKTRSX2CGzgVA8RDKrDsSzAFy887LE",
  "key7": "KL9UZqviEs2CXA3mq8x8ycsMhKeuCWocdccjLjys2UT8CaSgJBjBC8iciLufVU2cG8gX4BSr9izHcqobWehvhiu",
  "key8": "2Dsw7QTHhfNY2TNHQ8Z6LNg4sPypqrrJWJVxxU4pvRCAUgKNj2Zx1YQLALSbXjyvwcU7C1f3gjM1zb6ex8MwpSDN",
  "key9": "hcKZH8LregKitEYfwcEVHBYevQ448ufkEeHn3w9xdEs1xYp5yK85JxQmWbtha9cAr36N9CMM8i9orqTUikHQz21",
  "key10": "63c5gsN8WynyXe3HyYYFA9XMDvCYLWtDxTZPL9CrVC4jwModGjTpL1Uq5WoqUgTDc5rNApfWRYR2Ws5ZmtyXRrHU",
  "key11": "rHeYNkaJhuBgJZ2HUeMK4mxV1GD7Ko26jmsMfceLCviKHC3YDsL9TNaA2txxhQwpoHC1eS2pVpybfxa2GZE8aaV",
  "key12": "5sykFvNSpvYcJ4kXqW5RqfnTLdj9UtaN4VdAdQ1YivBE22RUV8e8mPJajRNoWqgvayEygAPCYcyG2bM7kcYrEzuU",
  "key13": "2Zd9Ma3CQjRxoyiAtobFdhPbkPXw6FxWFFZyhGzJKXMZh1VWgnjUCj8oReYofmjvn2kZXuc9z3BsahjHTMHvv3ib",
  "key14": "5YiPkmoQmrtKMSmWbZjgwTUvRK7DPwDpRb5vDBgoRyaHXEtxy62BF2Xpbi573T9wW6pAdgBifBJwFzWWH2j3zdYD",
  "key15": "2nNJvqYinLVwKGcQdpEhoWrcgQ4AREUMhzuahYJs6uokS3S4JxVFMvqEG6JbNuT7EiwYavxPJ6qavR1gFT7wCA8k",
  "key16": "iCYxtU1yb5WRRLZWUnFfxuZSU6cqPFWuaZwtwUcEQT54HS5crzv4L1zoUAPxht6hWYwMYvbPqWUoKntKTQUqvwC",
  "key17": "jsjThwAuLhCPmBJmWdy7WmYmKkhZ9kJZRBdKYjm1SwnHQB25nuezYRuT82RUmC9uNckPb7My1zPuhXo6wQ2vXUw",
  "key18": "5mfpuF77bbgu233odABtcR67h3Pc5X3rb68g2wvJRBUGk7pZE1cf52itvy9UjtfpM5dBfxcEzXmf1n4RjVrW3zxt",
  "key19": "2ceFrdLaTpCg1ZnmBWHNiFRQ1yqpptHB89yfGWYupTmnhzWymMPCtRM2NqM32Hiccg3da5DJkJTuVS5TEyKrWtTQ",
  "key20": "27gMA3r3GsxPecxPDUVQpPHSjExvXEDsPKiYakD2SMaTxRcabKVuiwnzKn65gL7UCUfe1nXBToyQy1EtmXGiUmnd",
  "key21": "49LpYwmbPS9knvMWGcQNiz6MZaAQ1iUMJQY5wUAa3TVyuBSPBdz1NLuTfVq9ZbWMAqFjRUk954YFWG9fvVGCjrcs",
  "key22": "45bBENjr9xqnnPh5qBhJkJw2fHkjEvVohGEQbcFGuMHgtnvanGqBbJWpGftUDow14LNDKAcaXMdqRx3cirU31xFy",
  "key23": "3bsoxdMEqdt6TBBFHbJCb7XAtqjZWkDRNxiHxmD8L4ArXEs6ZFKwZRKH8arYvpMQLwxkUvDjAuTMfWUYPJaMdY5d",
  "key24": "fR1RkujFG6g6WadWiypwmmNg9d4PyAcvYDT2suFAAiKqHL7ySnN1a4ZWa8kzySP6MPMTeqUn3hCjXe4XfjWvvgz",
  "key25": "2dJVhdzPXojrtaQN84Y6XMQERnxKVfMuw2zBZLd7iRuhhe2YtMhxihvRZvQKYmpkFVHyyPmChZj2yEXxMBk5eez8",
  "key26": "5jGzbXyJHKdwTdJctP62GErXDiUnShvm6UgrYb9xzC4gK1QzNGBWKsQwNyYBn7fnDHN59FVHuKX1rrnUYJXp8W7b",
  "key27": "3hBvLb2VakR9rbTs1kcY9YTXWPUZboAMp8GitMna7Rbs1hrobiPBwa7FG9BLrybBLN1dLCjQuNEt2xnLmTFhLz1d",
  "key28": "iLUZmHTdH3dqrBiyyh6bVKLKmR8wSntwhiQQJRFuME9tEEhMNEn931poioZQv27vgoGygJCJ8quhkB7iuDYEu19"
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
