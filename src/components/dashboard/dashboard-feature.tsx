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
    "5uALX65yk4HcD3G4T7qkkHU2sYzNXS4hsMGrPznsoqLTxRxJGaxxkMFYkD6uHJZu2cUqYjGDNSz7mP2oCNGbZN1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGHAGDdhYvBVKjK1h3tVCzYVdVFGDKE6imJ64Vp76szZC2ff9jHgaU9GJDCtKqwSUk6h6eKxLbXFMR461c3USXS",
  "key1": "qS8VtTZzZ1khwCbUCPck1WbxjZnpEkfJJWsxujEAJZEKFqNMjgijS8kVe1mRXu6W9yuEKeaDPBLZppKSkA8te2E",
  "key2": "3Tgfx5WeTNT1rYXX2zPtyp2AsGqE2D8Bgw4K38biBzDzrvXm4qwhc5FLL8A58SkKZbP9CGajwU77mdkfeZAEioQo",
  "key3": "LqRWfFRH5p6sbKMVEkCLgM4HCpPsk3iEiE6XAXsWw2zTjBGciGdfVGY2NApR6BHpT3cxkdoRES54i6bmgPASdf2",
  "key4": "2xZUvr6oXan2otcdHRMspSPHJPiGchzHHTUqcmQdbuDcw4opse9QBVHZ3fE2f72r9UkXmg7iiTmGDfF73NNPgDfR",
  "key5": "2rYKYxWhCpsFCfz4YCCthPt33BBkpaumb5cDbjuq9fCeLZA79yjjkFpUxfPYtm2SYdToRCVuN5VW7UQrKgrZLEzJ",
  "key6": "oRe4a1aEnURk4hMXA763RfVR6CVbkHodHuG4pqxbnpFoyRKYB5ErfrEMRjxnGR8mYRYy4VQLVYHeAnHYJkF8obk",
  "key7": "2wwshTCr98N15UpNDuk3KoFfUudnCVPPmyGeGfDHxnMJc5sRbyPhXW9cqEotNLjgQzQgwVq41BFTQX1CiVaBisk",
  "key8": "3JF4myTfWTCdmYvXZCJbXgR9beivZTn2VboZm2y6eiV2VE14pqjtnCAehkGSvGwueJUvoebtayZMg4uRpYzVPPuM",
  "key9": "khmHgYn76SMcosjrkPAGC1iwxnF6BchxoNiaMZ1n4hCEvkCqmTz2RF3Qtk9crwCUM9N8jvZQwa153buLD8PEeH9",
  "key10": "3GWNw2a2sjVroyC3fVD3Dpxrripi8g4B9FwW5hFPoRRzsiU8aHCV4KTsg4zd9ouDuCEqjy72pXXmiS8sHxKiQpD5",
  "key11": "5ADd5Wr7HYSbDeHZ9Tu48UZn3R29UhhFQMdb62PDHvuqTdsobWNefU66yckUA4GjRTuY5xhHS3KaZt5okoTFftc1",
  "key12": "2MJZgSQcyLXbP3i1G1k5m8tVDu8TxRiuYKACs5afd6319wi3cdwBrRzJ79qGPzGzUwres2ycSmt6jFYY8UYquGh8",
  "key13": "2ESt6ULVMLY5fV6HBADBNf6dvzXyDjUYgZeeWrvNDXM7PNjk8gX6VewUi4ewokBCsSH63wEfUWmz6XbwWEE2drVs",
  "key14": "567GpGpybiSr9t4Qeabz8V9GkRjqc3EnWCjgwF4ymTdVaSiuTKWZ5EaWZAmChaKDx98gsUm9qtkKPhxNbfrJLCng",
  "key15": "3Az2F2o4BAL7zo4XsxAu3ZNx3ZV28zbcTHH2Mv3HfZD3bVaUGqtQP7PAK8uMYiJdNhgsz9UTFiMSgpBU4jneefeW",
  "key16": "5z63pwKo99FMDrmUPnPG6rUkF1arJTX9YjA8zb2KqbF8FXnXjfNnBLAXhLnbjUE5tZtAVHPHDqi3rkBddySNVHXX",
  "key17": "43F3BNqL8reDgirSUuzLZgvGUtXdp9HhEVoGtXxYQSjE8xignXvEiqe73YxPFfDSn2e1t72Un7baA4msYqUWz4wG",
  "key18": "KtBETMaQQ53iJiRPUGXQjP7FHp6uf6imQ8CT5nXf4dthJSA7DmxiRXsSYri3KPqtsb6qynxvVMWXVjXv6RTWkeJ",
  "key19": "37vecReVsZvmdNshUYcf1TtDnzMKxdAanX1ZX7QynLFqgHyPykypv84vd7gN3BbrVtJL15fKs4iJN5sVELQ4ksjw",
  "key20": "5zSeHRiYyuiJT2sUr1Rp6f9yHBQ8qWTi7cmHB6oGkWnRnujPiHS8rytjRTuQNid7GBZuRzB3NAVcxH2f2MqsGR1u",
  "key21": "3gXKQs88FfzSJFUzbSn3fGFcpmSyTWgKZzvtJntJwaqXkd1ffWNU5taKZCtgvDrQnvQH5E5g2aWuE9K3gJMfuYes",
  "key22": "3uJAcbEy4j5hw7hdGbM2Xv6sfppEvk2tozuWd86mPoVokfPV8CKa59vbJjjy2NGWFRapB9WzxktWedBLfhhTAU3a",
  "key23": "4jGRjxoVh1gQoa7h8yD2ubc3oejjaqic72CGnbqiWjr31hyCVCFGD7qNSesaW55LEumeHyaGGyG3gsQaC6cv5z7B",
  "key24": "5EN1kL6Zobyq7FQiK2KDE1tqfBnVSTNqhbhfiBjTrXsdj9CVk4ghuprGv8KEKmSebSEwtUfTk6fF2vSgJV7K6Afm",
  "key25": "5CMtobmdy9FJ7aSf6R4SpxCt3oGtH7jP1R3EUtXcX7cL3XwM2YQWGBeBsqH1QM8sWULrGPzb1mZcxuvNiPTqwj4J",
  "key26": "4d2CqWMXbtnhW8CARxeHMKrNMPM7iabnjRysaMsPpWqF3TApjjYaBy5T8nGWpqvJ7oSUVN7S2HBHBDCzkPHa5WVR",
  "key27": "2FHnBW9CXsdtAHm53xBsoKvMWT3NdbQ8uKDhqRnEFmQ4oYe9hCyED4WBkL1YoUQWGYZbtVmhSkaTz67dT7qCQSNW",
  "key28": "5Vktw2dGNeB9dzqyx8btsTashDUxdqxgWEEs3oWqTc2k2gzT4w313LEZbBeDin7Wecpxs9E12N3B6wCRiWxUVQfZ",
  "key29": "2BzW3cuU7JarvTJX4YM9esRRBGTtptiJu6enpaiS6RusioK86ZnQeygY8JHdm7dfsVmxa3pk2ZaSd4iVpfPXUWXL",
  "key30": "3b3xLkoXa1fgZGSuG3NRuApsoamQphExAx4zwRirEMkneL7DUjhsEcdB17TMJVoVcejzzScygWWeEuyPJwdLhkAL"
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
