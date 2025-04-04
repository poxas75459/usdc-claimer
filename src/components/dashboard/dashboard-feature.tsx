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
    "3jpjjabZBa4AppcgpSeeW3Zd9BZu87y416Qv6ds9Z8F8Jgb3dhZHLLCyLoFM6gAgG2LzJ6o1FgbHcX6jwWhnUGf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnmWywxh7JqKKYCejcsjguX9ebT68HSscajLrLnWsCe7WUWWjZPohSzPxuFgDCHH5bjtZyZfEKBWFAeeiTnUSnS",
  "key1": "4sBSimxemMhWQatC9s3SJbBfCFFtGG7inZQZeSKj9tkpM3qGXERTmtbZEAECR9ezgeyb6L6JFMRkLH6j3ksJwWZr",
  "key2": "UcrBcF67TMF8CJSEjbyQDp47heEgPk4dzvh4zoacHxcJ3nVaiQBg69cfsfdQ8tGDfYMBEFFqdpaXdUWjxHnkFtT",
  "key3": "64Jrc1BreWLNGusLCvZxBqhAE3BUB3tuqnYksK5qEWgaR9swFyEyvRxhvdPp5T57Uw2ydZ7nJ1U3d6TFhHgjLXct",
  "key4": "2USXeWcJinaLo7ajAks2eycLQgD55PYX8d9ESzqHZLDYyQiHoijcMENsARf2EhWZaREPzrkuaYw27zgpTxyojsms",
  "key5": "S3FtBB3sSao9ogur3EERuSXz65BAHiJNL6rJgGug92XfJSDfY5BuA91739AG9ZQNE2K8BLUXyHYauofMqa1gbEA",
  "key6": "5HjE6agPdLmEtCtJbNDmH57rwVMSJXxy4L3MNUnW95oSc8qCQ4nBkLLuHn1mN5NNCgrdzwZ6XdT4P94Ebrgryg8Q",
  "key7": "2irtVyN18xZ7nZLrJvyXqqvk7gG1u4TnPyingrBVMhkt9LJ8WpDuH9oRi8eYYk62cMoyQvU5yJvcLhus9XAzsvf",
  "key8": "2vEUNYFyJApUvoiJP9tu9guNWo3yHcjj2FcUvUNDW7uczWwKhX19bheSuzzJNN1uWE9hnXCmT85kdE9YDhuqA1Fu",
  "key9": "2snshXsYSC3pzHMrVCmmjUchk6rC7xAt88ReRx4ZvC2cPBmdwyb5eJxQMfR68Mvv9rUFJuNwUeiVmWYfzpZQ8ZFw",
  "key10": "3JuTsxXqzuk1gvMhRgJgDBeYujeX8b4U95EcjwcV4GuzVKyy5mMB9BPJktELr9axsoRoA1LA7gcVjrQm2AcdBLLB",
  "key11": "67Qad9PLeeXaxwkNJbjWwBZckNPgJeGaUpA8o67cdULid7ZzSWCagV9S6PthDCC4kqfFaHsHCUFEDvvfaib5zh8a",
  "key12": "61ivjqKMkKYki1fq8nHXR9w46sDFPFM83ypFvUDX6Fhx5u6azwN74Lgafn3iJxRB4T541aqNiGysEeuiNFHUESWX",
  "key13": "2MBdMycSNLZw3nALQniK74tTx6F6dhdeLPn2umG4zjAwLRwB8SC3zUmUTQqmvhYx2QormcF6fcYJcsFY7xuVAPaS",
  "key14": "57rcif2DUEUVHHi8WhJJShxifchFKNs4meoi7z8Gu61gwPbnMQoBnzkv9bzcSxmWyyr8xFsMcpRgN2JUpYArmgzR",
  "key15": "4bgwnzTiJnrLebgGgKKi4277JCQGin3eYYXect7sE4twoaa8atBFj5PYQhajWpQCtKLb2y87XT9SePvHP1b5iiki",
  "key16": "2BAjLHjzB5yLACv2d8BUi1QBVMaxvbzcDLYq4JchvvfwzZKexnSkuWgAawbkmSdRMFweGHv7vvLreDeEsVZhijz3",
  "key17": "42LaWoU8j4txWs5XPbgC1DFdjLrzMQfE3LZNoYNnSEpgTgdZ4KBpiss5Yjk32nwUqx7veq6w2GAYHpymXvhwzRdJ",
  "key18": "623ck8AbY5iz63dHn82azrtN8RZ5TYSoHG3LdDQa7LXyCFqD5ASCu2EarjEE89eMS3qFbhQK91BJx7pzbeXpAoTJ",
  "key19": "sFtKyBBd9K3vr3tJdj1uHwhG5PkQpDPyZ4muqhH49CrZV6MDsNrijuQ494VrrPivR3SyN5M7qFHcUNeaAWowJza",
  "key20": "T9ckVyiLLHvoxRYgnc4MSmAvrxzAH3hBUasAxVqNupoxaeGCU8Zvk8TWL95coaCr5kL6pudcCxY9QoAMLaW54Ki",
  "key21": "3bGx5LkJ5RPFQrBryNXVRh41RDay71e4KHDXu2zYBcAnL2sSkRCMFvfVnuiRZ8uQySbZQg4qcvKjFRdMR4DPkBmy",
  "key22": "5sV6HanhdfNmNSGvcghhrhNi8BCJgCMUqzFRCBgurSei3BDB8QfCSBy98JK1HYAG7AbBGVv1PnnvqvL2B463TbWT",
  "key23": "394ThkxNWizuDWRYmdsSuCt2GfQ7YQpyQXD8zB56RQnjCMobTdHaLkfKBq4sMseZ5gXbSgLvGUKLCjuCHBLK7jV4",
  "key24": "cVeMhRZfp5tYjoTuVtqPoZFswud1SYJYN32QmkseRBTQCe9U2ZCzjXNajPjTn36nAmQzRosDQiQyR8jkoiqvoV4",
  "key25": "2H8w7uMQfiKfLAiFFEcJyeQxUwxJgpZrwU4DqXPpeWdjwSpT7eVGNFBCoB3HHUzLcBV3hNuSRtci5pd36kYyxW2J",
  "key26": "3mG8u3YMbAUj5rC6XirCVt52GdiXu9atCH72dMES2boDRWgnHNans5X2F6fhHLd99fLRRzb3fet4i3kKJwjPsBPv",
  "key27": "4tHhKCfd95vZmydZgLrCrKrJRHddC358HQR9aREbquH1hR2Fp2XzZNfepcrk3mNzhkvmeGyqdeaw8qEqc7bV4tGV",
  "key28": "4kgDpBVH6t9BemHKvD6PiykFVZyBbFPD6tH8pQMZ8LfynN6igQJTUAAtmEwCpxEFDHf4BhCK1iom6Mm6mUmPgPas",
  "key29": "2RmwohcEXeUUJJRWHgVotgE3VLe9y9CWqNRmyiuGCcfFbrj1bKctMho2BQDRGpeTJhr2HD7GNJ77zKQMVtRwDnhu",
  "key30": "3m6R5yarTJyL5SKkmtJ1PwX1AsfVympRjPK9fZf2iEC7WKyzJkcND9waUUJTjFRobYHEwCvehYSqcLH5Mreb9RRX",
  "key31": "2CLZVXcntDmEyb1nbyTsXDiwEyUKUvff7cKtPT24Cy21w3wS8nQWN3isngGCAffZKEMMaEqogoNwEj3atDjNmdyQ",
  "key32": "4H3Q5mmEdZ9VVt3H5Psj1p2gRcnuzHXoDWSfCS2uHNdw8Y2b91feAqmQXFZjpWzQ6YEyBqHbVa11fYCWGSztP1sC",
  "key33": "trRvzrnCt9EAUmyjeXt6UNVUrb3i9jV7dyLPicwjib5JrbcVok73YhcM4JLQ9eQXoPNW1pGL6JoDbNVh6KLQLXz",
  "key34": "XPBjEm9r4s2eZfbRgqg25BLRKoWmynArqvCzGa5TNMq7dDwdhAboB4mtnDCDd31EqGcqiCHHde9DUZwD6Q2BTmN",
  "key35": "3HQ1nxGXoXe47tVWfxUmwobLViKXHtZMn8SouTXXuEMB3vrdT7P8WhWfDqb3Dfcc7awMreYtEvTBWo7WugSdCoxm",
  "key36": "TumEWmVzQXmYUsTibQbe1yDK8NvGUYVjM9xYGPRFk3WXaYCt6qekUScb1Sr1ekypxmFGH6A9PyD9C5z2tek3pgE",
  "key37": "5RBfoFWzfFJ5Kwh4YgjBq1TCvqoPxGNsSNqDcBmpAfFAtof1AabG6kecSk2ecjhZF1xhz2XzjV76NPq4epmBo7MN",
  "key38": "NT8AJ5FyyYGVvVkbSiR4zYLyXHqFmkQxRqxT7HRFqVXoqLg2zEhsVGQcgP5hjSFH3YzHKoDdkr9tvaHfDGTsiX2",
  "key39": "4BKP2qDomopkH3rJv1gB9Fk55eGU84CWk7wXwXEjicbZCzWYjfhpBjMjoyHP2pLejEuYqRy8WJ5S6p8pCSAo7uDP",
  "key40": "8BJZNQ5oboh7JwHePmByZbUg4uUoVm2p6sq8jfKPY4RkPgySqcJXCer4JNoAJUhrwqsp1JxhBS27NV2Mj7u9eym",
  "key41": "3Fkv21fmRYd3B84qetvXjXzCcND1ejfXJQtjhxjk7ZYJTTBeaXcMQKd8hCBdnNSPMaoHJa6oDeFztTfYy8aKZva1",
  "key42": "4ZYvxoCe4yJUCDMJSXFrAf1XxVdp1cuAJsibCNDCR7w3ogM5LDYE5kRCrWsx3VpScLn8DmJxHLC3FvUkMMqN22tv",
  "key43": "4YsybH1inKL8RSmvvmt7DfdLZMm5oLcgUpKkmbQ27idDTJ5J8ywPWDcwrF1rEaRhTAm2yauc2Kvbm5Ge74QXYcpa",
  "key44": "2QEFnyZqvZ6pgpvBQUsWicvu5uNxC8RrGR7TrwGUgfQuprz4dbYr8qqGV4SwRkVjw8nSBx4G6wz8nRR8Ki9w8AxN"
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
