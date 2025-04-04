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
    "23NpakVoPxpLAAz2VzTDVp1hir6Q55pwm85kXaSivB4nxYRUUtN66zyvcEJzVmKuKQ3zCbugvmPGxWb4tFT6sUH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1ungU3293aMw44Hjjk3MTpzkfnw8nzy9WjYV99CxcwSZRvUogKTf3Ef6KhUtihgHaqAa8AZNuVfk1yHdWZdotp",
  "key1": "3Bj6bsW17k7zMxxL5QG74dsQYJi6x8jZAwncbjM4QuWZHawD6wWx4iWG8eNzFvsSaMYPZ8B9gLJoetpex9at1qv6",
  "key2": "5M4xqUnoVRwrqVtaAZ5ndPfce726mnrw5JUeQFX4XuAMLBYXFHzsvCBGrTDhgNgpqLonmoNPYFnfZyt8tH5NR7bB",
  "key3": "vYpHWNQKXgz8FtVn9vHjc9bXbHqu9SSjLKUSHV9fonKooSQDKyw1bzFFhWWtcCpDK8Mc7HYYv7rQzhdivRcGty5",
  "key4": "5LtnxSNeyd34SJ5N3wR9Bxgh9WcGNCdaSrvhJNjfHiZcgP1s6sDKFu6VY6MbMTcttU8tJhuxuXB6Vsz3Xpj8bznf",
  "key5": "318u9kHu2zS3sdoNvCw9FEfkhHybafSerfRJsof3paukyuBQRJxr1BhfQZ9XQNGKPZy6xEtgfZDtX7JThLggwuUt",
  "key6": "J2xHs7ugUh9hw4AL7ZHd2QVTQmUx7yTEWnNaCC5EZ3sjy5Gj3UpwbmkUfhShD4BHNnNQPMfRi6xNGpdxsAzvvG5",
  "key7": "4vKUoLCauufyJFSazE9CEBPBUFLAkGK1LdMsDEypz7JaEjuqzcucB7tQ82U4dK2dAPcGgCyqfqkWTewjb4dRJDRJ",
  "key8": "3NWrvX1Eaq41yRXumnVuEcUmRk99BshbbES4mmuq2ipA5MZLmFMsByKB479dxLihWKQb57hGuwX5cF1D9byinQ5t",
  "key9": "5SsikdBkha6srbZB3WJhbzd9wUmBr5GHnp4MSfbAiWKhVp35pQBYJqeKGFFfDm2gunL3bk4qHvQbSiJw7Q43tPiY",
  "key10": "fXkKdBCeEutCfZx4YaVjAhWoaVjEtvYUj7UFTbzs2xBrUzs8z9dp63C6jdQE2p5v4zuyMXuFCxFnGo8vPqkWxdA",
  "key11": "3QDFSzT639yN9uXt22UB2Ut4j42uepXJxnt1XCtPbwighwpebGRgiNvdUeaoKfi7y9fhNVwQD2JZTvHSQFRPxBAS",
  "key12": "2Ja9FSjcziYAr7Kof6Ny8fCGsf7s6UiJr9peXxwPifKBfzCwfPaMYWa6CBoMCUunsSNVGHtHFkhAUMSPySU2J6KT",
  "key13": "3zQdYsBx5BbXd95akt3hrcUZrQTymJu8vm5w7keCKS6rKHqpUAD51xw916AyiGz2rxehVXTPAWwgJJmpmh7uorA5",
  "key14": "4pdqGUZpahPTpD935Qjj5WFhGjxdLBsT6ZnA6Ag1jvEyUbjzfE5BkntsECvUKGid9JHNoukd5kV9rgWfoipTdrhV",
  "key15": "2Te28Pcr4fhGddVnuwtNH5GnKz9jBx87MVKjo2avumJnum5BwTNRpokr2knnfCQcXWHJvFT8Z4TkduQ1QYBRzgHW",
  "key16": "5aVCQxta7UetEuLN4qkTh4Jj4hXC8H6LbmqbD8DwdAbsqraZ8JFCyfH2PAUYLPHEH5dUwsKqrUAtVxEBPhXgXihX",
  "key17": "3hpe4LgjVQ2iAxAqQtvKWGKBKCePCTMAampd7wJadKVXouGeQCkU5h5s6zrsvRj26Lqj9f3YK48SsdYmBNNCkDf1",
  "key18": "iggbTBtKQzgWq1MombfUAhPtLMAKrVTq7tH2rKjphVb38iNkF8dS5eXy8u2tVZJmSsko3vCTJtbWpVvPnquDboX",
  "key19": "pkFgcSqbsE1u4Hrt7Qz6fw1ev5aFGNLxs5829PkRKPY1CBBHbQLSb6T63KUWZgCWyGSC8PT1Z4LUQKY4fp6iL96",
  "key20": "3mFnEFy75Mk1DFzGqepj5SB8C5HtMhrzdHycL2U6h1c8TiBU9Uq3ymdy5b4a2za1cSfrNtWJjcP59be1gkQJ2r9X",
  "key21": "52K9AvpzutJTyzec98f2BQLMH4CnUPiANhNZujPD5mR1sq3Sbr1iJ4t3aRb6QZ6rcjNtMEnGg9aA1h81GqLTXshY",
  "key22": "4NYarXkgqdHUvx1f4evJNWRZJyXbgXZ9ZbxnZ3e4NS4bcRafgjPuGCHobRSgnEok6axK4n8cFgc1We6RgJUTkqE1",
  "key23": "6j8iuBrHmC9wguxExNgvFj8rgJuAAhPC4fm2PqtryDEGT5X3UUg8kUngkCGwXFY5dwsf1GmcGoALJVAtaQp1zh4",
  "key24": "57Ho8rDu8qMNGcoZY5WCwPvSjgDvjt5iEvQsEvpQadAiwHXxZ9k8F7r9Zc1jWtTFQgRSdP4Fj68JkQyXGXgtgtw5",
  "key25": "3VPfDPho5yKiDYAirx16AkrbLB3TsXSvXFsf1Ktim6SKK7tL1VLwCNvSbNTCh4RVnrfNC17HdML1ZsNTbdbeZwsb",
  "key26": "2NBcWtaKoZuq6gM4YNbADbssp36W7vQYdFk8WEevRVX8x9VCVQHcVFvahECLjJ3pPdkJ2LTxTiGaRPSRZVK8jSLb",
  "key27": "5ZX8iafv33dzxVij8Bx7m3X1qYsz7Q12KqXCt9wc9B4XmgytaYqg66oowUmdEouSS8yKJ91k9JfJWR2EF9q2TnMr",
  "key28": "5kSqsVUChabHVyndvqruYGGxZU77REPWzXfJyXjhaYULoX2qzDmJGKPj4QJnGRvmcwr5rTjaYUR1a7RkGc83veVX",
  "key29": "5KYH6TF3BSF6NmrNXYnB5kGHop2qBxQdLLMy4nwDrBi5TtBRF9Wv8vxHYP65tjDGrLZDSfwuCrsyUetqS1yzogKs"
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
