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
    "P5RQYa6QG5V2k1RYbcfn6C8bndSuBkoUnyRMEBR4rzMDStNYEzwMxN6V6Ea7pycy4h3ueJxRQ2BuCbErmfAze5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSRDjbhxfn1HkNSqCF72fXeqe6t7QAZaBpKNBe9T7UE3vwEdS7xN8Dk46r7BAiVNGyThkaFaarH6kW5YAQ7tD5K",
  "key1": "yr3Zk6ft8siqYjo8z7WWQtppCzqkopoqQ6ZY8nk2w8ckNFWDQNmdxMs59g9cpWEiTAhCDMP9WZAjpLV27vb8x6Z",
  "key2": "4AY8Tu1hKCaqCUq9sq8FDMLZJg6r3Pa6xxAJSj15zcVrfxTUvVdTDduzD8VgjWZwq6Vyo7enoPBb4bHPipNLEKHY",
  "key3": "3svaqNyZoXZq2XhgmBoP4sZ8mTC7hTsWhLa7FyXdQMRruaSiD8Ssi6xRQZqb3XgEs8oM2oNJP2eb2GN3VRP5HjEw",
  "key4": "oqXgynbG5iZqkfwnh9oC2qh3Hzmy6YSfmXeQRmYnYtukxocJasgSsqX9c64HXHtdDjb4bfpUEJP3oNUNguUT9T8",
  "key5": "2BkJCshA2WKDRKKbEz18RpC92kmyyUr6S5MGArZZEvbVgRjUuvEpCKuvv2jhr4AhZy3wc5pZrD2Lp2tr5sg6fxau",
  "key6": "5QRUp3Pw7LWpviDTNMx4ACYrWEm2wV2F6ezENzWmN1g63HFRDrmkYt856rZj3VuC1eCSYTHLitNftWuDyVzgF8Dx",
  "key7": "24X9ZxD4TZcVfkZUM7d8ujUWn7b6fDKahSFzMPdw7ZPjAaSDp7is8XpsAr84p8L5Fv6Gh3wjwZ6hDeMcwkh8P9Ew",
  "key8": "5udEeMdKJMnY9GLSWxLuzEQpV2FRSK5vs1nKBxe5tifqKxb6W4QCQURh8nFaKsExdLyv6U55MDmmgLfPhkR7bsRh",
  "key9": "5bNo6zia1F8wAVHDeRiNhkpqVoyKmAWD2pUjhks9phxLTdhsAQaexFqGbJdEtGKY8TF58gLvDSkxVuGofZs8uBmV",
  "key10": "DTAZLzUvqNKPTbnCvUC9pVF2XsXMovtuvxb2t39CS2ahyb2UuWcTY92NbA3h1XBN6oLQGJ6MDezoTasJWdBCNSR",
  "key11": "43xZG23Z7nnZ8ZwNjZkkQiYCWjV4PUvugiwsv5U779WtUGkqf1mhVERoyg1pZVppmpoiotW1ECj7MBS88GXxcwcm",
  "key12": "5cpUjkZbkYAQEHeuucGwE3rxsQDubxL5kQaDjc3GpMjCwhWYE3JeHUgUzpHxZdJynTUePxteWQ8GUtHjfSTDpuN2",
  "key13": "dozCGoT71v9Xak1S2kt3RV9JtnnKZCqmDiP3dn8PG8Qc5h1VE2WnKqKTNjCdPSWNNEs1ag4cNA2TKRRWmZS3gVk",
  "key14": "2pDaHMuPZwjLHYCR7MXJwbXA1bhc8r99FHPiibof5YFUfW3HYTLjCL9ihbukmanYMcCq3YTUFr421pAGt8uDWBQx",
  "key15": "2hFRxxZ26BWFPedV3jg7d7iYjueidAN7m9fTpWonUc4ms9VziDBqAcAJao7K19g3tNu6LPvjQV2zTkXiFn1ePNMg",
  "key16": "4d3NhRnenTxvprwgv8Q3qAf4tGDSdNKYZxcT775jCFVKEszEbvcD54ptpvA1cXsdSpsewtU282qJHQproFerMovh",
  "key17": "4GnAZZ3HLhyoKs2C5ixU55Ws8D9R1X8JgA8nnYB4sQxwwSVv8wtLiVBHb7J1gTzX57MrR7iWiftBCWiEkqGMZdjk",
  "key18": "5eQ1w1qvhPbxmbbRQRFu6g2a7iCtigjK7ZwgM4VDJLkcEp5okQdXcSSHyfFThY5cdJXMSbpNb1vZwEugUWHRb7at",
  "key19": "39gy8YfzNiVLWWEsEZFXtWZJTGKuaVyFoTiNhUEEr5iJdMUUGang4tPkhydcDys43WF69fTESSbvL2rpuHgrrPDq",
  "key20": "26j1GCT4CzsTzLJbhU4Jcs8z6DLWyGKW3Wf4djMVezqrN3VinFARCwrfoxqS3JJfwGNYH2947DQAPXG9D35MgJ34",
  "key21": "2zHBxjZMx4ip5YFzBfTXuV5XLS1TppWmqrPEpBFh4w9hDuXvJJ3cvZPRMdJokD2qua58EdumQnnysvG75E5gWM9",
  "key22": "3KNRsJwDHM1jHxeTUX94YQd3awhj62U96KNtdV6XZ2H325FhQ3GWr1Hzf9xkk9nuzDueXK6k3thEichXWmnDyekF",
  "key23": "5bhK23diQoENZBJFaGvPupSmwgDe1fr9YXFvVnwwNLjH5atPV6sSgek73qoqz7wQthpiuUdMWjwaPi9P2tTEcy8n",
  "key24": "725DR2shEQV9ZCML49ZDBy3X4ZkR2ZQc1PmA3vUqYSKxivhmKWAsSeDjdm7gRfGAdMcoq5TtGKGMrx3N2Vff4r4",
  "key25": "ep3uqwfBc5pUC1h5mwGE1Cvj4iwUVWp7BtWu2TbDkodo5rdobVTQyJXbydone4VaoDmwmG4oJq7okrQetaCf8LH",
  "key26": "3JDDHZhWp7Ay9UBrnUQP4sVpdd88YqsrhsZk11MVevYg3phTvSCRSUiuVTTkCYJG9oaTGWCagbhrwqyhXWp6vnG3",
  "key27": "616XgusRtaJSLfxDs4ZEMiAGEqG1ZxowPKzjqVS1mUqL9FW5jdiMvjF3RSRz8g1XJ9bQmp7wrCRfWRQeBiPzSY6t",
  "key28": "3u142GaigNDHxvpuDoSVXUm6Amm1GksX7gDphsAzZyU4fdEtFiDQG5qeNx64iLGMkKwgdGFR3CkXgZ95gGR5JSDT",
  "key29": "58FAoGuxn6yf7uWz3uqdeJxsumWZrpwjCm5fY8hSGYmaXj5yVHrY4Fe8iGPe1UFAX4b6bKJPi3DFNEgeXXWRRn2C"
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
