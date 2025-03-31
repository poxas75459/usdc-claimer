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
    "48ukC1vxfN6QxXLRZw2U1ze2RbNxnw9QRmNtyhTdPCWB3bxpKESFUZkuPEFVDpizXDRftL2TzUXNosAoJRw8kBW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGYPG66rPcv3yBjZxphHJxdzTnvDUC9HbDevRUwkdYHzEYv5ssAXD3WPyP6WpawHhYUrhRfybRJVQ5RViPhnwX6",
  "key1": "5X4De7cLxt8qnjbcQAtUs9z8vprVLyonPpjgP3BbgV6RR18usNJndTdfspZLnLFPrsMtBB2Jo2BSkecXVx4k17DA",
  "key2": "2hWsUafg52iamUSCJVJ9GPhzhcQrmpEFbPaHrLgbTTfqBaugbUcaUjgEhfKBEP3wG6FA6kGPwz87hnRzMqxjhCgo",
  "key3": "2yH2ZpgJJJxLGSNrQxtLkaLCYCPHemiQQqtW6eG1yjNKm5hr1MzFQ2hPK21vFAXf1TDDtuBPYWLY1xsb6ea5USWw",
  "key4": "28jTny2758ascELRqVupqrZ43EQ6Z9RUKVPrkcoPiVwnjbdsNwuGQ5VEJHcE72u5Tb3jmF4xqW4ikwi5225n7qTF",
  "key5": "2Cj7ayWZMAuyLoSvHFDDM91wFpz5RD7yMJvHw1WyEGkMH3awQuGgLbmbDmZjxGPaPjzXgDNyEovFtUREY9pKhdtd",
  "key6": "2hv5u8t5CPw84t3wXDxrEZ56abHpjuo84ePfqLpwtXFVuhprdYwDh7TFJjCZJ9nGWmH5V8nVxRxKjpvouG9HLhPc",
  "key7": "5uQZtwpNp5r9gGSoAEzVuZ1oSXq3oiVYLK3ojqBmuoV4nV6rEa2jrs6V3EyskfXw4KCbWhsPZXWJa3wXGnPaJx1q",
  "key8": "2htYKNSapijkqDjpbmTDTb1YwX871CpQ3dMRZnRkaJkL2PcdoyFYeogDDzSUaEmiwvFbnpE9eo6db5xFSBTWnshP",
  "key9": "G9uUJPDSQTCGo9Yq6tkAHnNBywhhMJLcYofmxBggJXfox53WUqgEvq9USaxvXp86VEeXzJnwjmz6KqUDK2Qwzsm",
  "key10": "PJ2zoyoeFRNs5mGpvPGoaiyAZ4cqizMkEMBv4CvKiG2DNmMcs1PaKNn6dKnmKWopwRGeYNXXjTTyErpCSvwENj1",
  "key11": "2oanAW87Hs6hyu5SgxLRk24dJUeQBy1GMMBUm5wt2UyQbVUazo2Vk5EFKCEDE8Beot1LYnoREwN72hQ328JGbwtb",
  "key12": "3oDYxgYBWCWBeGBm4xZWKS97N4FRxdpSq8qLkZbMLbiigAs8kBMcATenXvdHegjr8V2cyytCdbmazqHdZFDhDCxu",
  "key13": "4eqmSVCX8bYsYaEyeymJw4hzfvT3hyBXzUWbmWeQGeTFCXiGGnNwMoGQjFaVQdJNqu82FwQ7S8WvRTCEsL8G9T4q",
  "key14": "3SoW2UNLGNWK9qW1y8ptyLUnzNJsGbQ7vNazaoDkkYMdjF6c9NwFGpH5qqL7ywGtxsABgA2WokB26dp6air2R9Es",
  "key15": "5AwZFCk9QPcQgJZJkttgCsFHZC3UAdKtjX188Wktwa4gCajPwJ6uUbMti5p59KcXX9hHqd5Pj8mjYTCr3s3y9sd2",
  "key16": "4UP1SCNwE9BK22u6jcCyek4SQ2g5zQap3VWGEY8jp8D7U83qbxd1a4BriuZSVVh89jW2nXu2MBxYeFVmAdfW6vpy",
  "key17": "3cwgoXbySP2DthHnw6TNxZou8p4bXza9Ew5zoMN96Fexb8TmnKuVYLuDHa2NWdAhuPvjG82uF1sahTsPMc2mhNRK",
  "key18": "qWH4mMraViEVp2mgqYZT6VanxXDsWkfxfp9ypnbyNZWCd2BXvDUBayj8JKG9qvUUP69CH1zn5foNqFdyaBXMCQJ",
  "key19": "2pH7dAYZGPDz4XmrEMxuQCA22G64XhvZbHk2BiwpK2QhWXkYhY5mX4cWtkxkKUMhZKc3fD2NtV2TXSCMmyqqPh7b",
  "key20": "5UMghYAAndz9BuoD8MpjY8ZGvAv5uWg5oggA6mPDN1qxLPRL2C1SaEGzEP7rce3a88QaguNUQfwWvdwhzW1fHv4P",
  "key21": "5h94JxpksvK7a9rXGJDsnMoswqaThXzPAAAh5wwViV9hzNfpgAEtqo1dFQaZknUapAMnBTVSfdku6Ss4j2No2rJo",
  "key22": "43yWAciA7vV6tWBd4Y2P3zdx6pLoGoJeXy32WNPYNsKJuGq4YhnNdL13KBWH8W9tTYLgAkQh2irjZ3Bzyt1ZMdYF",
  "key23": "FMXEdLcAz2LTARPn4wuYDDKpHiEkSJsPStmCeQGQonYmXTdLpEJ5N8Vcest4qPsxwNxFKT3LUfTcCGXLUdeuENw",
  "key24": "4mKiKcMZZ1SVrwi4DmgnzkWdFZAEUiDhSYbcM9mt1GHU1iJWqmvL6bTTC5b4bar8o7ejUPY6sd93NjfP3SGkhHPL",
  "key25": "4JKopxHja3HAmAz1U4YjeKYcVQjRYUwMmMDNGqYhayjuwYYy8QJoDs5Vc9eVJARq42pxFh9WCwH4ijDRmTcpQnn",
  "key26": "3DQWMWN5t6zTGZEbMUiYeGTqTRSmxQe6SfUhbNTK52PWxzucev5QSjx2Px1hZW4ozJxyLh9TyhMv2zfAeM9vQm1s",
  "key27": "3NQqwqUdY5vSgsDB5tLSx6kQdpGQWuM72TCrtm57ReRrGyKeXUCfZNyKHyd8ujKRcW2zTxQFP4tdDYfZUfqDv8gZ",
  "key28": "5B8uXQbqUPSuJuhm1gHMJJd7pdtVFp7vxjicuYxf8NgKmATHMvUdkueB8BmQ89t9PNcyMVbL4K3pGGsbdYVe8kRv",
  "key29": "VED7sCZJ2Fiy41Kz5etGC4Efb1CzNEXcRwHHZjf8cukN5fRZFGYcsVf8EBM87tddoDVLWJhmUi5Po4XSrvZUaVN",
  "key30": "5BDBoGpYZaUjzzDYMNsZc7o7vDZHKcqwHBKyyzY8mtK2EwNLY134U1CLGKgw1wgbJ2fBEt5zUgC5jFsaTtw2CRoA",
  "key31": "5SSKc7svvn2pDhPVQH9fTfFibWuqZobtoXkStJ8Te2GMSHTZqev315fYokrymSKE4JqfakpgQoyqhu4Vh7NULaNy",
  "key32": "36izeff5DpUCBtC54YLL5ftc2pz27LCSuWAhJSawjyDznDuiaPxDjwU1d9LsrBiGFXbwENTjW1jJaYTsmdf578JY"
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
