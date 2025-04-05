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
    "2n1BfuYyzg5mdhKpGTiiHsU6u6amus2NFdTNw3LWFjHGzGJ1Cyuk912RSizgtNMace3HgPAhfmwM3qbjQztgovbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xbtqvn8cfrRMv3rwEf2KcdkP1jkYLVDHkSnvaeKu3RZ8LU5fUsrZfiaYHR8KHEpor78DGP64CtuDSEyFJHyfpNs",
  "key1": "5YxDb7i3BGcz3xAti9VzYyJss38YCzzqBdef3LNp62TFCzRDNfWVBYcp3Ru47V4gsryU76dv2xeGZKm5H9kXf5Ja",
  "key2": "4A7azgHm9AKtaeGMV1mmY7CuZc2Nq7THijqhsKRTDMBp7p2gQKQpTJpMpD3AsxggyAvWVzEM9nhpL7ZKzziGErmd",
  "key3": "4726P6vAZB5x5gvVLkoJzSGhvFmppTcghhFCa58vrJgxdTp1rbEDKy5k5p62tXPFntKJpNA8KME8GPR3rq4Xpq7V",
  "key4": "5be2NFR4WJCYdiSRkSWmqragqKswyxEMedFdak6Shy14dvzDhsrEjvy5e85dBQPGmy969FZHsADogbT9CxjLQYHV",
  "key5": "K3wMbWtAa9FxoBj4CQcWiBitwrSyMj3sUFADTsudsxp34M73MNpx5iK4FHgAA6KrmS7S1E46xwKWk2fejfimzxs",
  "key6": "41GzFjYqrb4Ra7okmsFSAFTB2v6Dg3b4tJdvez8SFvyJgPKUCDaCEz1rbbs7yUu41cjd4ia4G9p5G1ramM8a7Fh2",
  "key7": "Ke8scBWfG44dnJki9RmFzgtJNsmTLBDrKJW87uVkyZsqYVKtB2QtTKabhSbN4UhmF8uncaFfwgG1h46nPhRft7s",
  "key8": "2mRm6HzmYrUT4nZF65xYdxc8jWLjqep9UeEkFwKy78s3RCCnWiaSRCZfiwqNWCwpVM65b4NWJvjq83C7snKLhCTy",
  "key9": "yjs7evyrjPtUiJtDxA57gq7meD2FdiM3DmGe1bqKbkBEyrYHobCucDi2SR1qx3beGWGXEwjg5ATkM1cGTKxgG7h",
  "key10": "UQ4VwJohk1KVFtx75Q9e6xvma1GwPJNFWeHgtweJkLg2ghRC7Ahnk2iirA2mSMiQZ8myQgNdz1FxpEW6us6oL6R",
  "key11": "4FAtwN9wBCaQDa9qaonCcUZtQpQjX8X7cdmzpkWR7bkUSXr3BRLYtqtsnjW2PeSieKgC7MCqtv8AztkAqW4d4kXS",
  "key12": "BXxtRTj2zkwQRVh9tZHAaU5s3rpU8Jjr6WmwkdTjRNQgXS1aBGhmzxscmeq2K1mUQotR86L6teq5cgE2V3irnSW",
  "key13": "44qUe5cC6DXPd6qHsnv2VN34cfEDViPUequ8emAhNayCjWkvqVVQ4CN1xKQ8rhvb3K8FunJ5nvFto3G5HQGLZaQt",
  "key14": "2qGoC1WA1Ma9a6k9Rf7B3WdVnGFkmxwC2TRMZt9uo1o7q566p9NV8D3ZKczUkMwqXSo6yEPWNGXy6xJ1fk7FGkKd",
  "key15": "4ZtUBvy2AwHA9aHSyoRXRyxQvVHFkLjx5JRbHghr8mdnYnet2Diq32qHJF8SbXmZK8fPc4TBmMh8kSZWMano6F5c",
  "key16": "5Ny9JczDtijTJ7GtSkU5f4GzwyKRQDQBvCK6AbPLvU1d62G6md21vzxUWBwQATUYfFW1F7VXYGp373RLnW3r2dgg",
  "key17": "5grAhBk9GzMRfuEAkPwqzxVoqvcRqPDjWavw1iLsBqQ2XXeGuhQKkZCtQLqjgKw38ztsKAFcR2wzmk6ojKKfwf85",
  "key18": "5HvN3y4Kfaq66Bp68vqDbk5e4qjN6QUaTwSSuSayyrgUSQ8ib4shM6mLADEa7oceE7t1phANuEokNUvT5XCoB5sU",
  "key19": "EcntBnpLzwW13TTfi4BqN8uDRq4TWGpaEu1JikxEqZWPJviWVkVgdfbVkms6PaWqpcdnK63npynDurvVKZuGiQ4",
  "key20": "3oSwFfK1prsReNJiu2T757Ys9ye2WaChKU3qgUYXS8Bj9C4G8tGv6MZFKvKiApFvQJECCzZnniUUCv7gJExwBm6h",
  "key21": "3SpZpHSbM6kEGy78K6DNCWbFm56bYHmXNt658NqNitGsBDQPCtZTRo7tEqKegbPxfkCVooe5Mu6ZrrSzHTBQYKAh",
  "key22": "5RmrJTfNrq8Mq7NMCtu59KrzEX14AgSmG9qjwzrXBMajSmhYDN7W36PV8uFLVL3pqpvJ9SAQreNNzarTJS5a9KZC",
  "key23": "61dC5u5BTUAMd32bhV3y7WL9EyvfYFR5sHxJk4wuDjcvDj4Sjtd3mppFGMaLLLEzpE1VbP8y4MA3ywnL2mbC277M",
  "key24": "4RMwVgC4sbBJgebocvEpQSrZCWJ2t12RL61Q365m4AzAGzmebCDjdpDdSoVNFrDSV58VqPH58E1jJZDPPUndeDdc",
  "key25": "2gT7KybE7jt8DUhSuiJrnFDkMmiDJi1n2stLCupXHZWhP7Yeok6hrCvRHU8KZ4czTAua2DCCzWhLoVW9LtGyRUVv",
  "key26": "65jukL5vq2F64xtsPu1eELBhQJ4vEV1RQsme1LLB6qNv78FAmuhkJKDUddXXUgSR4PAqJDWrSFDE3xs4Wwe3HTtA",
  "key27": "2HswqTwcE3ZDo35SCjHrjpwaUoadLhEqqyTi1gxRQo1VefR7nCzQu7beayFj14znpfoX3gEsVFwrWzK1QmhXJUyC",
  "key28": "5Sn2oqxRZNzd7954VtXGcmKE9Xj1wfXcp1AUJk3yiruJjbDKb6tCy1zPA9jBkN8KRMTy9tJdn1GKt1AGXHYNKRQg",
  "key29": "2mxtUBqzjRZKxsWfPJL9xvWngbwGCWGM2v5VEaayVtgLrARJN3hEWECbTJocuJieodcsnov4mLxJi3gwoVBQN7rz",
  "key30": "5U9gbRm8NBkS47JBhqWvPHkdx98cxrivP3DXaWz9SFgbTS6z1EMH3nypmL65JeXbVjGq856GQg7pxN7jktjavs2W",
  "key31": "5TFAmgJK5Hr61bXP3YsaiAPrUnaJfhZVYeFHAX7TnkLyghAZd94KfoKMUVBbi3F36YXJ9mBrcKn7PkTB2v81AUBZ",
  "key32": "2SkjxtRSDeikCJTzUUxXgbvn75nySPdrb2VEn56cWYtnVepRFVPeapH2XUFyvHMWZvcMcmyDW4FEJqRq2bq5XQVr"
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
