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
    "3218yfU12hbFNJR66CjiC1qgkKxcUhC8zTT9t7r4AzUAGyB7KwmpyEPT5Gr1hGcJQ8ciG8P5MF5B6beu64BRdeDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6APMfsT9mza7bes4L2bTRxuS6CiZQQRoNPrBtVuUzZQieuyovGXAAKZZJoskzV7BVATGXWjq2S7p6iTowKFWjG",
  "key1": "3YuHW9kgZvRAdDRtePBJh1uqPX3jzrgLZkcmzmSjkwCCuT7rQ32PrLrR6xUEMSwAhiBR6QFMjYAzCeuu1gQnTPiM",
  "key2": "m7H2TWvYYWZ6RKFLeouCHs7BpikdaGTQx7nc5sNAZKoXT51GpipFCMUET1Hj5KstUZeapKK1aqF8jsGq8MwLzax",
  "key3": "3ySy6z3hudEkHJRGv2fazG4eXiLwXLL6hgeQPGmucwdgs1pexLTn4odE2bX5T2pZQhYqFvoYYXQuX8uKc3mJBnHG",
  "key4": "3CZiCzR6SETHHf7o5Zgn8GPhxuo4BS5QgccaPFi1ck5WzUCRMoSJLdwW3GR15sQYbeWLDG1aM9678VBEYx5siJFR",
  "key5": "3PSN1WSpkdD64bgwp8Q7VDrFDnb2hZWUu72yScPq4oU8KSkDyAMgmU4KdA5j527ggDdyH22jpfhXF4WEfzA6R5qA",
  "key6": "2qigwx8cy9rWb3Dbvf7VDigTvJPBfAS9nH16XXDQn91k5B5tst3GErrtCoYYXEv9m7a3ZDLvBB6bHTCapH9ZfzUC",
  "key7": "2AGc6BvJNA37iPw2MSqvd7t2UnQM2uWk39fCETJg51nXCsxFJoMbC5i5V3AKBgqDujZoh4WrxuMrTKGPNBAyu5xb",
  "key8": "3c1Wv2XCaMwxu1FavXPRQQYLAcEc2L77SpfXcagX3QoG6LWQSQPasQd7YfhvURKNZ8E212B2yMdkWtUaxmkzNapu",
  "key9": "jX6QPNYpD4SET78ZfwycjHcjvfoXatMbBcNca7FrXKAYS9DUnTS2wPAg46aGngWqn6BKJMjpiAz1brkHe7jHD5A",
  "key10": "HFd6mL5iKpqeDRiR9zf3BfUnrspbcej8SfE1SSRuCgaGupSxvnaCs8Nq3aWPo1L6rivqFGbj7oCNqWraByf6qkS",
  "key11": "4v5o4qAuiTdQpa4s2xawrBG1kS8CpRkBsz3JtPGtB2Ji8gYKEAujWw7yS2B5jC4m2z3fVMuPQ95dx238KdFXviRa",
  "key12": "3wM36orERDsakAbUHEtEfLSbvyGDqwMxWAE3TDcks1Gac3cKX2XvkhFcxJCpuyHUuEdJ9JSx3y9PDfZB5yjsbscp",
  "key13": "4ZSKJXn7yTzV4Yb7RwgSToDeKME6TV4avPeeFvdwgWdP7CRL3K35yCRXNT5PtnXhBPqGfNTzf6sqW4d5wAjZYdeP",
  "key14": "2Zbm3m4bGUQzmb1Bhd3s9uDcJgFq5jxhX4pGguvWHAmoqDm28VjWHS8BkLB49fAqhibe8yL6yXbagQxbko8FCbSd",
  "key15": "3Bm1zLipC17riXhD1Bxkz3wBE49cHPEwgfGMNsv5zz6Xap9C2HNR7nmEDEV9K43aBD9mtTtBKB8zBF3s82D8LfVF",
  "key16": "4c2LBxNKbKFHfTjq949dS1VBTPGdZfnVNHW5hQfaiSJr9KgAu8j9BC3mFmSUdqznTxTSE9XtCHKfjDYezt7nbYgC",
  "key17": "3aaY9XBjoDSCCnFAWeFN2ryz35xvvy7GSCAZ9JQGSuPs4qyRA5tkGhzc3FTFAcjd3z2eUckNd4qbJxH5S21cTbWf",
  "key18": "5Khme58oqt3RjiqkREJpn79oezhdrconYcJcy7LPGe64ptmJD45ZW8DHm4p1hSJWFWCCVN4efom8FCkPb43gvH3a",
  "key19": "5qvxM9o9f53ZqM7Mm3hPji7ubYtB2bPuZqFtUyiHB4T1e7eVEenVCz7dqRQDKgLTS2zVMZuGhboSWUS8suGuAoMU",
  "key20": "4PMoJEqnTHbNiDAwUspztSD3QajQMT37WNzY5PdDssagrunaAZ4BfXXKPKQBsUxYTrWxqWg6AP2Q7GxpvYeV3edB",
  "key21": "okHK7pjzYDbKoaFiLugFbABWkNGM8R9hZEbahsuCirQZcL21QQzC5ZLpx4DU8FhRDL54Fks2KbvRbu1ZHyE5kye",
  "key22": "3FwwpQFgozvx7P3u7N62xNMHvVpJjCyay4VjVA2agHXzCZmgGYyWfiXhijJB2LbydBdmu7xYnv5UqGoEV8F3XDtW",
  "key23": "5GQkwr28GvskbFZ1bSD1hs88FQWoBRpLJCioVDkpBdhpnHCtj9u2sDvVjAoT2SHDZe7knyXibyXqhbyZnKSDFhRU",
  "key24": "36NwB2axhMWdxwN5u1vABY9jWPYSto5FCTm1hRU5a1RuzKnXe5fxApV51R53g4y8zFaz7esHwPHS6qp7j1DZgsvM",
  "key25": "4a5XQcSqZrEpufJvcUHvjBzrZSqca5e8JGwCr6RAfbtHvwNjHVBmpw7PLjUD2ceN4LPW1RrJULRiV5eMUNKNHxbZ",
  "key26": "56DCRp5tqp453swa5ZrrPQ7SGgErXzeRmV99CERbBDUT6tXAz6P7QYfU3dnh9g25jNHLnaHkx4eDXnd2avbKF1De"
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
