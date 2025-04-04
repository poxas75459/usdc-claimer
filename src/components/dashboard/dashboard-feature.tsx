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
    "4kqZzCoLJFZY7PUFccFkbgAMQpZtfz2tgMvBLARPGw9FkNjhSNN51JqYGTxzKedWkU5NzkxPseVStKVn46537FA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELEf5q4akrzxu81ijuLL5PS7Wk5rCcXmuMTahNhgCm2bvmAbV6xHptT543VCTRPLgDyHxRamYBMQuaT9Wx2BgQ2",
  "key1": "46q1fjXKVyb5JsaNktYapWMQgHTVe7Wg9CuMU8idrEFPYktGTSKkZzUvtFejcGjFN7pvmKb8UEGh7MCMGRGQiHPP",
  "key2": "5AEFRu5RXuJdmdwHpCwR8zoTn1qaYrbHtraifea8XXPJS22C4UhYDXaSotooFvYFrwztz7CeeiH1Gsf1Dm6vzfsb",
  "key3": "rMUKNccU2AFBfyx5m4obZMoA4sMwACRwosyH9QZBmKJ3h9oNNpigPJwUgVb26EEUMVrpiNNGFgHmU3Fh4pSD1tS",
  "key4": "3gjEYs2nAjtZYuCV7gN4JzESndCQLe3uopzYsGv9u6mNzyTVUDytU6JU7uU8Zbx54T5sV78TKXuCni7GJ5CJqT9g",
  "key5": "4zAecchQcS7nLuRyfCnDz25zg1DRHFXTiGgpAgyMdQBdw7CB3SmHwVZU9GHyfMwdzAKPkGGHBhcaxxDjU9xx19qA",
  "key6": "3XCMNGG8q6nAdTFrxpR5Wh2eL1RVDx6APGoKNjwRFNJ5AEEbjBpBM1X6HkyUvayKYxQtbyA9bRJXwN8HEgFLPNTp",
  "key7": "42ork7BZcBAgXFJdQV3zRmzuVRUgnU3mg24tzHfQ8xEz6HyU8Vt7zvC6tfSK91kCNvEY91ZDxdBs9rgJU5689VxT",
  "key8": "2j7w3XjhqphtcohNdpLcQEs1vt1ZGNBToJcfsfiUv7YgJMx57FUwWqKGcHkiKSKHBmLVRHi3twk1RXhSuzucP2kA",
  "key9": "VtAR8hvxxrYgA4VgNTGWXdMcLKTHA5ninfNxLiU2Rx9KjCse5X2EnZFAm3Wx3F3w8cqe8QdztHWB8wgsde8tCqK",
  "key10": "2nkRo1uMM95J2zQTFc6Mf12W29TQ96UNt5mtcYZPoUJUMsw9dRDPCca7RgEmoEoFfoGxY1UKFMjAzk4cjbBn1jsK",
  "key11": "5RjnfH8TFcWVATB3okkNoSgTs1VBeYRwJoL7qeMSh2go1VQuUcmwwEpWgjv8ugj29tVa3Q3m6xz1k9vNs9q1hN9J",
  "key12": "2hDwsFV6oBqMpXxQEYjL4m81X4tmQgs24fwytqQPf8AUgEPVm1Vh1VUbARSrUi4Guwo6cKFJu6faQJaz8hDLbhwf",
  "key13": "n3srWkuYXEftavq6jHxP9CKK6wFYXyVsz2LG6ej8fzBZVz3ti9LcuGF1JFn8kQBfTfKzwEVaTfeni3RuQ73ysZk",
  "key14": "5vkEncYhroqUMVe8L62yEwf5SsJ5U3hVSrzc7ofM2r2dWGwAoEafKzFAvLFVQ5nZggASWBi1jWYaZDf5J53cdhfJ",
  "key15": "4T2MZEAiLvhQtwkrj925rmYvZnaezjQDirjtCASKREDKcdMXUvareRdWP9Nkr4ufh6wSH1zJn7skovnKqfiJ8y6d",
  "key16": "rKEJY6Uh1RHxsy9f2ybFkZLyZ3TPUK3Q3C6TzrG6v9vGb7bpvU7QviBtfZ4T5mewuCWg2gKAjtmBjZbDDph23x2",
  "key17": "AWR412zyRaxATqHZ5bbW9ddxLw9FcLuv2krNegM9jHW6d9K1T4sJDLDiAbqFutFYtmRpmxdVpH2QDDWaHZzbL8T",
  "key18": "3HgynG9btAaoK4Rvrm6zXnGvyNnViBfXQ4UP8pfqapxFxPqWz3BgPqiwwsAa891rRg1WsH92ivs1HyxRB14ko5EK",
  "key19": "FtbevjopfdBPQttWz1JbzDARbyD7PA62fKxSczxfo8z5vMr7dtRjCvBMUpbaVJSYSDvpahDvA9jwAJC3vpDmcD8",
  "key20": "2RKsmAbuFw5nUZVVMVmqb2k9EcT71iG3cXrsHdqJLLvHw9y5edib1GLAfhg6nDNhCdbHQJPWibPsFvGadsXgcEyP",
  "key21": "5K7qKHHYVdYXgSEuiuJ7TGmeqdQ7Ge3QYT3TXM77ZEQtpxHtMpADmurtcXZycnYGw6W9ao8koJSWmwzy7r16PhUo",
  "key22": "49k1vmMHmHHbTnc2AR3EvEizUpaEMkXHLe6oBadKcH2eDE5dMEGJVAJAmxoRfwua6WVgy6T14BHRYTdPrJdEC3zd",
  "key23": "34KVHQ1B7LUh7ZvzSg1GwczGEEtGYTsnWHvVoFUBd39spXcTDBhYGyC2QQ8S3Bxa1a9VrmxkRAqUKQEp5NowinGG",
  "key24": "2yXASCWWoHwBLNu6RyLJAvcueqwUVGvbVQdo9BmqEcNsACZz5ykyN5SaTYZa4aZ4NMFiszhecLH3Vkuo7U39EfqZ",
  "key25": "2QZxPmwk25RC4BskWKvVkPWZm1Wv9kebyYLAjfibKMSVY6VkgnvbXhi4MhnGX3Y8tGiGCQ1ip2wyKEqCrCzpo3D6",
  "key26": "337j65dQMh8zedGLAhZLG6Jca7AB8LgoX6LGFx1HNaN1zedTNXwvtk3csDkkyg7E8GfqNT5Lf4tXxqztxnMKyprt",
  "key27": "JQMvoEpeAap78PFXHCZB2cLa4pihFLgpg4ryhY44UYY7nkxnG66oMKwS5AXvUvDmcTEzRbEqdHthHTQDnua9S4H",
  "key28": "o15vuxVJasXVvcPqBvoiax547uJMEXzFjkXmfa2yjYYTQZyRLJVbAUmFy6J3Vv3jT7qMNQtR7ELEVSib8xn7Lz3"
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
