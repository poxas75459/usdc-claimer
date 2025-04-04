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
    "3n3K4uQpzLkXbxsZqsC5s95RQLEmuU8Ev7eLGqE1n4hdxRWMrxnGQPicyAKNX1sPJRqikNDZ85JmcWdiv58fojw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRgBdFYx5r6PQBZF1rdUcpwS9ATubXWn84ZURC7t2rsViaP1bmBavSPiCku7oEaPcHbbw9n1tUSQmxTTArQSCx",
  "key1": "3e1KL3o31WKWohgbU8rvQ7NBrcjxNz4ernPmRoSyxg8MAG3DbAPreW7BRYbNhfD7VaZTJpaL8S52UpfbSRmVLxBs",
  "key2": "2eVTYUYGKoHUrGvqVN8oj6tvRUAjARiaYYjZ5thWjTAg8z5HdxJEMn1FALDVNrMwXP7jM89RfV8Ga5PvLLH6B4pB",
  "key3": "3HyA3sYPgNVQyDtw24o4mBMnTTZdEmvFeZ8CvcPjzJLmv7cNGZybXobZAUG3GRUQcWrffjUW3ueb776fRExo8xeh",
  "key4": "2ZMqD7iN8WS6G38fBe8ZnHi5boB2CZcyHmubTZSYzjTPB6UWKVpR8q4S9iGneSNiJq3mewKY29sgWSkEY48H5sSx",
  "key5": "55GcdaVgRMywFAo8PoDnxU8wN1rYCyKpYoW14KwTtUY2Rb4RaKzgtkNm7shf7weRG7rh4K92Qm7MbaUa1kLiJqa5",
  "key6": "2ndNczWGdWdfZLzopa7UUgFpnJC6KyNPNsPaFqFXDNWHzhz3xizXK1h6BxCkAXstYEto514HqUqG7nSvDkY3iHLL",
  "key7": "rXnV236Sdyssvf21676DziRNmbsMJ51mWpJj3n4mBsUYV72gPRTngF29CrtomtiFmH1oE4juytftRbxXTNHnU1Y",
  "key8": "HH9nPG784e9fkezLQAsPKxzXXvLeUz5WtDcmuJD84YKwnyFmsA6FFa1uhzDv44rC4zGV7ABTQHrcrnjKjKw9p2q",
  "key9": "3T4pYn9KyB7WRDd67ieDKSjAsc39ntcZYRfwQX9nvscqrH9CRELzrtLsVKcKkaZfJ7VXXHGFGA8UfTbU8PQ8NbX2",
  "key10": "5pZPUXtF8GGRjgeFsW4Y3sP7fwRJF1AtDxSe9qZ3eF1wLUq3TiavEUky9MQgz5N4QtpBuvzqam6gvtyKQqHUbKrY",
  "key11": "3Fd6tcZH9i6fjCaHLDZfawA2oCRiaJXTYVYEW9YesCBnabqwqEMg1Ge9FEgjNnZvJETLwgSVfY52ctSDd7iZM9p1",
  "key12": "PMtmZ9cfQi33UhhRN96Up456H7bKg5ExUjSkh4Unb8RjgcPbgU4jnMzYeMNGEpDZ2Qq2dpB2EYEDbfHaXpVbiy1",
  "key13": "1vwWu57uzkH2UuApUo37QuXdbPpQtsMAb2KzdvYNEFQifE1DeXZvRMHs7qiKLMZSdK3XHLwNxmmFUdcC6SEthdp",
  "key14": "5XQQDrK69rUHCdquwifVfVx9W89FgRdSnzsMmRwY5DpLFRDXgAmUaFEFxovXkeuFh1jrySdjBeZMCsKxkdUdriP3",
  "key15": "24KNrX3U2YiLjwmbdBoQnQKwXPBPbdzLKGWEsbeXDKB6LYZhJa6bryBgYurW2YLDQrwJqZiHGXgY4s3u6fWFtbKk",
  "key16": "4QSTQRFDqvEw6zMq63oX4N2JYzdVR3kL7iYKiD5EcpxWNJ3BXjvAcXgTW7DLmqqK2ZsKb8QgbtYS8NTicDJbCNsQ",
  "key17": "uqgt759H3Gz6TdQMWVzKV72vvHgRFZD5qfoCEnTiXxKu2oXBQCb34962Ghc9ZMpjXfty7wtEwarwkfwkVwRRRC8",
  "key18": "2jES2zqvgWVpwftHv8G9feN3EaXZeYU8hpkQFzwQSxyAi7yZYVSboJTz61Q5xS4rfzCyB57DGHuBZ51AL7MQ5yhY",
  "key19": "2AuBNDDzg8eaqpod1MjBrBZASn27o8BjhVkqSpWiFN887rcaEEamATWB43pavB9D87nXPVmuTuVvnANmZkr7ZNPf",
  "key20": "5cs7AgwPWhU5L8uigq1BANuYatdZachDsBBXmCiERZx128XCS7HmF9uFSFPXMKGK1CuayPSnzmh991DVBA9D6kS",
  "key21": "41n1LYQPdyE58mr9M1CFFdNqw3M3CEr2KN9DqXSj7QaMFVGyMDKtfNb9ksdsrSPPi6tNfgwJx93GeUi1fUDfyaQB",
  "key22": "3N18qRVbEkzmDXsrFsSLRDe1cUHttrbAajBsTo8pGx8By7DqpSB2iyPnw63RSnqpmCeFzo8UGgDqp53Kd3Av9eQ6",
  "key23": "4Bzda8afHFcsMPWjHgt1o78xhQsNdd14zZjxdiKuJRfq5Aq8mMG3CsAJKNsRgbisJsdCBHmb1t9fS9jkw45ZQQxy",
  "key24": "329FRFWbJjGPQLfmpUkAmj1dTMi7tgUo2cBZncKWhCvtaMAaYcCVkjTz1dxz6P1d6V6pM22ByfETo1rsyYy5bBoS",
  "key25": "3mNv2cLUbVHJzFbwuFT1oKCJpVNETfNKBZ8kdXExoukkwbxEmdwNnE34jXEvrcLYoxtopAA8zZ5hfCSm4SDLGVXA",
  "key26": "2QyTWs63JjD2Zz9vPn289JtmMppjhiPTdwE1GZ2uttFuVxa8Q2wAzrk89XyJ2oCfWG26EcX5phjPGNMW8NigNVNw",
  "key27": "4cUViN1cpr2KREqz95XmGKmpymkgU8TWS9En8k4YeK8NUeu5HjchPFkXxZAugzJ3t4rGCMCXPrLSxaxb53kFckD6",
  "key28": "2WyQ8X24kvGAWq6MdNoDFgT3yegYj261NW7BrtNuiSdBogFRCuokzc9UWaE7fabwA8D2AdURF4SWNkqBftkeu3sX",
  "key29": "4hnTLVhFmbMHmYZSs9KMFVF2rXfWB1ReQEXs5Fhyg2F3aPqMDsrk2MuS9eSDVMeHomc7sJ3fF7CnsPdHxUpVLsPD",
  "key30": "2V2dmbWYYZqrP4YoTWhSA5TxKJiopjpiREvwxZvYwa6Q5DSLTewuLWovWDzuKsUrtP3LN8sS9Cwkrz84BjjnwuK8"
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
