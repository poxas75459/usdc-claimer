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
    "hJnsf3DUqP8zd4KaxtFF94dAHyacHPzsXDQRwdix1kTNNhosXEoVsipaMAu4yfukugH4j5tjLVxRVyM6Y7tcxYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Ho5k9EbnMVEJhaPSUDdQRiTvXdQg4sFtj4VAAWSH4XiY5s2zRrQcym3xw8vBtoLBFNJcqmqDpiFyZN26cJe3aa",
  "key1": "5fwA4G73opEgRMcwcnJWTnJZKDeEFAmHqfJJgUJksmx2ecKbGJg3T98TRwA8iCtsnouMuBMDo1P76TwX8DVcez2g",
  "key2": "8ZZGSXvZ96xzhsbkJaqQEVeNs6HFL1xiYsuzXcViJRiGfEDsJE7kxsHPgRdF7A5wJuJnKQi1E9jnK8W9v7281TH",
  "key3": "5rJonggEMP7a3fNCanTzoRx1BAvDySW3Mtyvjd2gY5CRqw16wUtB6n6QC5j1DrarCrgHRfMxruUdNfYpFEkNBsKQ",
  "key4": "4Jupii9tdLDS7ucsc4LhFauZoAZZrREwH6YNpusiDP4vM4GxWueGw2GqyEykAhdogZF3Lo1FRzEZLz7MWg4i7prE",
  "key5": "4jfd5zmy4UTrBM3dN2NaEUjNQgjsLRoFGG3983L7xxNJBz3ig6pAWTkotc52rF9nCAnQHBVPZ9tKwkobKTfT37j6",
  "key6": "54nyY51np6wtoqGpYiuAyYoDpUaMsktUe36y7i2BB5XZKZ5YyRDV9X7ovTtxJj1zZHGD8qEYWSpUXXHJYmxiAJ95",
  "key7": "2XdH2JqVLULycbohSpm5RdLHXDqjUrWw59DCfyy6h4cK6Hwr2zKNXaP3YTjHJxRB4Z2muXQ2q7jTik29wZRSRcVc",
  "key8": "3h3ojkEc1gJQQmusbtTQCXm1WzeGuKpt4PHYC7rPraRKP4h5psCnnehyixg6kDiDPPjiZFPoR6VEx5ta5cKj149j",
  "key9": "554vx51XfrCeXkX3kACkv9Jdn34ChuQRmrPH1qfMSdrbmc8sovf23R9iudXZDEMxTqT7XVHqtPwqqAQZpk5TsKJS",
  "key10": "xzhy3tJayqU3ZSj9ZhqUHKVUpXG9kFFxLyyAaz94xpGP544YUFaRCotxk48qRvUwq9nwpCR2XDtSr5zyWVy7oaW",
  "key11": "4udiKac6wDcPMzwRpyDshMWAjJg3QpjadkzJwpzUt1e4b1w1gfVdhyeq4GotBvoDoTKAUJPHja3oguZkVjUKNHuV",
  "key12": "KpB95W8UqX5713ChJZzCjFdRsZC9ZbtjLUCKT8VDbeqJqgQXthFDCWhVp8ZYNyY9YJVKTheppwcPP1gBqx2Y3wN",
  "key13": "dDDei9uDPb8vJXDYXGPCPWeGQu7sbcnPeUYdWrWqoR2g4qY3AGVkiVWKtbPCwfoD5SUFkAejGup6ZibdiaRP2ZQ",
  "key14": "4knUbGkxBTwARNrgZhrRXg1BEt2LnkZe1ANA9DHAJd2GyLARt2gpU4Rhq5k3sSixDDZ7MpKrcuvjjtuBhDtN1Tzu",
  "key15": "3ZTy9te3eMrtfeM85A9WNHzv8hP5vz9krH1cepVCxsjMPBwvMTBgeT2nFCpThiFFqb48nH3ZwH231CrommJQLFos",
  "key16": "4oGpLUDN3GFBcQ4MWQcjxfXArQXS4RAxPHBeghtm8cjctKhExMa3krhiBDo17Sw882kLzK56Kjw9dehj7vQPM1bb",
  "key17": "QWQk8bcYY99FKH3iHMo3NVCkWySvgoYD7t8izzSbmnPcxcnZur9cyysyhsaazxLr6xZ2bVmLRYPkLpm7PHT6Xej",
  "key18": "38tjnGXx4eNmCruVGJJpvmS8rc3FzbMUJFCs54MhLJJh7RDu1awkBWuNc3zXokQVka2JFimCmVUEzYNDqtE9ApJW",
  "key19": "4hVmCAXjmFFQEJtMBKmGXJpEZ5HmuNjKAFFqMceVVvKWTobaSv4g3faLb3iEf37X4dGCobK4QK3A47t2xXnD9YYQ",
  "key20": "5vXgJjbtRSfN4N3HwoJ36a9ScoEmteTj9RB2TvRnfjR9mXkre6mRYVK6fZRhN9hCoidWQotZSVuHWGdBFMPj3DFT",
  "key21": "wGHaWtgmR5anuq81n2NrwqdpTpXemaBG8BaksfvP1gHwqvEydNvytDFkYnSg5wJynncwE9kyY6keMQCX1ggY7NL",
  "key22": "HKgruni5TnQMr9p4X2coCkHwoBRvcN8CKxYmH2rHB6gALTv1EApqtrZh78Xg8bMzifgZ6tD5Xo1EgWYQQ7n3Ukp",
  "key23": "UMtJf1rTdFj3bGCR1oAEKim1SqvXzeA67ZtFpU238dAsqurre1N2Ls3TwRt6ezXyMeFETeJpev1xKXURegiQhwe",
  "key24": "5WPCtWE7kLdHHmywXoHTPV8mbLu8GauX8eqquwmcQY3a6PXxfQ7ghnMcfxzuAZKqMs41XJVwmCzfsn8UcfQYVeSN",
  "key25": "3Ystq9AYmmkid6JP9YH4mHGYBraGb1HHqcwzibrXPYJ2w9m7mXVX1G5Uf1pqG8fB5QH7LnWMJymuMpXQ1dvRLrt1",
  "key26": "bJDgnRFaRnsPgELUduZonoyHeR4E6nfbs9uVFo2yB4f7WmYJDFrp5PhBsMYiH6Ajhwi1oJqS7t63anLC5o7SNr9",
  "key27": "4CzpE5kDva8ErCyvVPoHuH55d5krS84eRX6g1AwYYfYzQHbosfnedLE9srkiS5Wg7F1d9mKw48hojyuBLdPGjHwZ",
  "key28": "4NWo5kWpGXNbX5JRPKgkymz1jtJNQdvzBLMFFhQnzJSZHFycPmjH3nZPDYWbiH2rHTf1jpVtRafgjn4cP3o2k2m5",
  "key29": "43wjv42Br1GFCxt1GXhRGZ27YqKLrVZZo3wGmEiRZzBpL7FtebjK1fFs4C7scmGC5M2nqD29DrVSuetk1BouSBQX",
  "key30": "VdAQDJxXH2b9sjGb8xSDaetR2fZNohG7ip4NUzJC2d6K31d5kDtWuCxBWPdmxfLzciCMNY5idQxzxAb9PeFTro5",
  "key31": "3pycxSk7U3GhqpHdt6PYKth3whcqvmU3UrhXo2xgLQKWy1LMeg1BSRf8rbCt2hszjPeRg49wGgvzi2Qset32vB2J",
  "key32": "5FmKbKYp1XoL8RZqW376YMbuFbwxvT4v2tEdzhKwyTMgqZ7LEXPrZuPdEQ5gZBwpG11e464NWwzmxZat78vP7a5W",
  "key33": "2UrYHfbwbmpnpvAtMtfYzdPXF21fupFNTSbdX89XQHuv6p3B6kVb1R4ytjvZoYaAtD1zeW4eseKWPEZages12KZx",
  "key34": "3ATY8J62CN6gSbTMw4zD3kEynKtG4ZZQz6L8LUcPK1J7UohjQHS4JKCUZiwh6wDnifs9XTNtyv2Gm2Ndr4NmWPxs",
  "key35": "c1Yh4JijCpAjwmDboiJyL7ssEwMcWnKNFsno72tXZVpDqxsJBwCiNP1zY41C1VGbUMcRUQTRwvcfuCfsQrz8V6p"
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
