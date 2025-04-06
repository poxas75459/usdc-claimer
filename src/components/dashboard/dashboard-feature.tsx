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
    "4F4zjAdLbMPrvPRVzLSfWhrNng8D3jH6puNgiE7H7Evd9Nqf9qzwJEFpuerh1nGRvQmho2YwDZaFn8Bxu36BtCia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tAYo3qVCJpYh1Vz79zWagqMLALdCZkJwpQSQhrx1jSDctE7vBVWYg9BaqjQGgJf2X29QqtSXXLCzRvnm8ovb8Vk",
  "key1": "4NfXUEvcUMJcsuH4AWwNKFgzVQsfU9qHAHPy3SvDyZomV9ugmABBmPmghmp5HMkoHyYLiai3NCEJhWitNULeSm6r",
  "key2": "3WrCooffAnXMVQYS5nvt621cF4QCHDngVVLJiXRFGxA2wMNq3sHUV1iLCknq6tvn3wDShpVM85vaTcA9HDj9X8qJ",
  "key3": "4ESfweMaeunJVppBziVqzuRQu182aMDCRNEr84Wekc66TMj65Z5HB9zbhyYHX6w4MVtDT4A5pyL8Ct7a45SPU6fn",
  "key4": "6cPhBRoxN4ppGNUj2THVcS7DT48hpSUBjiS8xnto9KwL9g87yPnMxgGogEHViAJGuTuFsm8GZMhtnpnUc5EFrgc",
  "key5": "3m6egCwWPpNKxDfVa4EKhim1FdZe3jUndsZhzvCDFeegF7BMkJciwpsuSiEMijE8ra7Mx2bRSWZdtmz8XRXUAJqw",
  "key6": "2uq4GeRcnL7daDV6MVNc1BfGjkbuAFYCSEhi7QgvhFNNs2MzChNpfwEuERYrtNq9YDSDTo6ntu7kR1HxJ1XFnk9U",
  "key7": "5W7EeRUT6MkBSD7ENwvkhaW2Q1jRJ1v3Ykz5nropkWvodbT9VywCQTKCoccCAN9SEkVALvBa8N37nhjqdE5hXNRZ",
  "key8": "6VS1y5EsEUipHewdmxa8qPpiQvThXdThfn6xZ3pyeqtNb2jCHjJZtVR7kd6zM5aprsMURBznzmqfwrPMgesUgz7",
  "key9": "4kAKnv8G5SbhE6SprLbKYHAxgkZMD1Vnrn11qrLqT3zirAoLXJfZhW6hU7YiMJxngFtG5j9bPFtwJbd12RQA2DJc",
  "key10": "5mFc5RurqUKkZQD7G7j6rfZKmUTE85tHVmR1wGTB7uMXbDcxxUHWkKpjE9pwhfwyXUqGWtjWyCa6MgCkdLwuwhBz",
  "key11": "jKoVz5samMbc6ELMVdpjFNgHEJZ65crYfRgt4wDyJXsS3ehGYcSmPw8sWSTd1HMxijp6GmtJTzMcDXFJnMjk9Ai",
  "key12": "3rc7DwcpzLtgzEPNZoFUmaJ2auctqfCcdaEey9NNgKsT5hPFDm986hHJaWiYxi8oTgaBQ7LhadXh6gkxfaYhR7YP",
  "key13": "4WKxeypH7nWA3HLm3yj6sJn9mSMQ9YikLQyrWC6kSp42EahezauXj4Dtt7b8z54TNDd1vJTDXn99wiZBbqLBMFiA",
  "key14": "3jgxrsHG9yHjAN8d8uZ875Wf9RWgscKe2mnmSnfshpEJWrQaGjU8Q3ZDE5tjxB4zT1eFovscdZ5JGXrPzBw1ccN",
  "key15": "2t8Lx8wfdzPewVnriockTHFX3Gw8U1KE58xHA5rHLYhqJXJiNkWSfrt8EJrSdHAtb1gGdXDwajarxTS8ZhkyRNgp",
  "key16": "3H3gDdcT9FvQWqkb1eTiyNeQgxGzGBkuKAiNBgyXUcFeUvD1w46jfwpd9jZXx9zTyrcVsKyF3ASmCgV3smgnVFmk",
  "key17": "4PrH1VwRFvUyMbbxX4n6XmMcsxTJHXsWJuRKtpokJ51BRFtukyDAPt6FAQUofhqPUR1tgyW6Lt65FG1RG1xJeNmA",
  "key18": "2deS2v2rf2vXHdu5a9VEMiRjsdQUbGZ3UWBVx4nKoyg4MVDv6RzKXVAQEVSMNhyCSH7r4y9E4Zagdy5mVkbmg1eq",
  "key19": "3oGdqHk1AVUCaF6f3zCaMriqEGkFCKkQrfJozDbZ8WzL6pGDamyRvebUfu4Zbpug7MiFLrt32gwzA6b2FaT6jvS1",
  "key20": "2eWyo8sunorU5Fr1QudLZ6fb9PMUbsTqgTWi5544KUFy8WcmPGMY1gkQrBZgVE9w7ZRzRDVWcQSyt9ZW1unmGm9k",
  "key21": "FxMufXPmBgqnzwEMFBBYNcJZAK3rWyNf18AAeRpoGtYFZujXQT9nW6GLjJryVdvVcrM9yQp3qnZkyqgahgZ7Y6i",
  "key22": "aXerDSxwj1c1CzPKe2K9xCXWNYzqEDaVboQqQvuV7VJscgCVUVTBi6rjpyzR5q1wjZ25AUcKd2CrBZtGPi7LDsT",
  "key23": "4GdtCBukDaXKbwffyWwm6CzvriMin6fHfCcrDbAdtVbfzqs1S4gX2KJPug6tNvbzHsiiWLqtPFyCRAyggdqWRrxh",
  "key24": "Hkezt7uJts4Y8NsFKwhPB1u4MUqw9tpGPwaV5Gb5m6wGYRvXbABKafT5qAJFZJ6PkL1CuasnsYDjdjHNXvTyWrq",
  "key25": "4VR9eZ3nPj2ntNxdVLB48UTjKuZXkPHW4yFo7SwNgwoDNs2Sn95dy8dspLYiJUFS1iAnYVEaFCbeDCXuPfbhurGn",
  "key26": "5PdLcKaRJTbhXcdAmZYkWGGnsV2PJtN72ckgp3TWqoM4XrbTb6ZJZvXvH8ZWZU1VKPAmz3Cj2jPtvkK1pZvJHnjg",
  "key27": "3x8hANaDNgSRPjrxDLcW5ijSRkLpm8PZoPfxCqhyEx7TrpdLKBhcE2bierpF9bF3NHAAbWN21wZMBx8DfotpZWC5"
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
