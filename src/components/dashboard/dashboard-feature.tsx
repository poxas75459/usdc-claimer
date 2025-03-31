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
    "5SEBypx5PYzuQ2hFUztTjA26ESJ3dAV1epSgfu5es9iaCoNYnAJ3v3KA6mCNkioKUnzd776k9Fqe2ohGvJp8Xvnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uo3xv8nCf8TFvsqYxhxucNXDHETmheQvhLyNdwed3QhWhMcvZeFC9m1NamDXbTixXUCu7Loq3QT8bX4fCNmEMfF",
  "key1": "5WFiJFv2EjvLYs3ZrNzkPUxD9fvfem9DwifR8ths3W8mBPaNFg6hQou7Dq69dotpn2PPsDTFtYLyQGJheWKgqZzD",
  "key2": "3jnt9KLdYGj1Zd7GY41SfNcntVsQqw4HwcDkm9wenpqH8E2Ns9c1kFkLky8x5hMjvz4EtiyM8rVfRxE63kx7UFNF",
  "key3": "aXQHfB7DbUipD5iBUZU5VxEcsjNPrbKeBE3sEZJhuTBvD6Wwp2PH1f7gvyt3AGrS994LBdWPKxeixmW92DPmWUW",
  "key4": "RD1BfjKnmMSoUJzr48NmGoDWpBy36a1mskAaMj6nkHgQ5GCrkwUub4y26gNfWiNB2VQjvV5RLqsqyJ38yNdfjTQ",
  "key5": "Vr52AeXe3uSfdzUbLo4FmwNnT3XAfRjaLrUXTCPL9yKD48QXMMSfu3otBHNerN6wgA9nN5GD2KoQ7TuYo3isaUU",
  "key6": "4SkbZ8nX6feUDx5DkiVrZrdmeXF757xr6RNnpYeTdv4t9Xi2dzPd9Fp8rZsPu6QFXuJHYCx1gsjjycrye6784bQ6",
  "key7": "4Dj8xJgpSYLjVYj3hwFjzfdEZxXDZbse6fCsbVBLUie6Axv5ctzLYrvCQUKyPWfJrGMaYYB5eEhJpsuf9tQFWUzv",
  "key8": "5UEikHxq22RPTbyCB72eMrX2UWyiD4krBTWr4WcPBY6VeKfdRx8qiDn2ZydaDk3HBdTtFu4BYgCn3VNVv7UC4zrs",
  "key9": "5KSMyfumBj9K1Jif7cV2x1JhgqzUopW2UvbnPCqyfU2hsAuREEXUu84oE23z3QjvpmWK3BAziWNRM8jR5oVVKJHd",
  "key10": "2X3YbP6aFg3nSEQtphQVVTmk5jWXW77xzo4po4Jmytq1LDswjaxgCUR5TTuAagjyNwsUzXu95d7Y8CzZ2bfRgb7q",
  "key11": "4DWsxeD4XxiZ3jqv9T8x2FH6LCEkJg6VX24TEGbwHfNYSXrU9Q1H9uWhFdcNu3nW7Z7SdWwem6gKWSgWhruSzd5R",
  "key12": "2mh5gHJtmgit95dCAPhqvTDpaeg3coHsp6Jdu4V7evnsahWxaoAni4tu38tR2cdiYiYHV2cggiLSYJYhfCDj89yi",
  "key13": "3FtQr4w6zeUVpcMBK3ypwrXdRMG7xsdMH3AugBq8wNb9q3FgmyrLQbXAMY6DEt5JZ1jgbpXMAyFH3F7HH5MhmfUw",
  "key14": "2CnLoHDCz2PCnpuR6LGCnEk25JDdajSENwbK5Cx37Z1rH7YiZEr47MSWLXYZPMh6hBqETkATh3gApfnrNarFb8zE",
  "key15": "2DGoATvfScgAfTzMzARvqVCQwC5SKBmhaH7TjBR1dGFESRxCs9vq4UyKTU3Bc4bbwd7oQ8ysJNeqBxNyDkatcb9q",
  "key16": "2nuC7poqzRRvnKmvk3vKqABa9Lvo78m4djTz1eFCak6MEh1cQ7iTrJi3Xpny5EfNjVpRiRshmrdLAbHh2gFJNFmH",
  "key17": "2t9nMmxRubpPjLa6ik6iEUHJdb38fBbcyPTzicB4pRi5LvwGeNWPwe53EqwF31uq9GbjJvXB2QJT8WinYeeME1No",
  "key18": "ehHJ8YPkoSKVQ6q9EaYkKEoaCYe7KkwzmgqyaDc8F41T1UophHVNvd7hdiYNt2MKtntgQA3Jo4pkyhuXwMvtCUs",
  "key19": "2XXBNsvfQLSbTWZHRqS5UQd5aDDtRMtjP6kFWuZrm13QiPz4gZEpgVG99hM12tU9aCJZXRaYrjeHD3VVXy4k2jNN",
  "key20": "5Fcqbu1mgCSFQBDKvz1b9D7f1Fw5BmXGdUFETeVp3wTcQUHHKUxW8yyymYbVjkN4JkhWVuJ53isHnakdanajEFkR",
  "key21": "4LJcYdyiC4tv1w5d1nDkMXoHkPDYQcpm3cT2mb2dhFHq5ax1cy9oHDMUQdJjUxnko3sLYZk1WpAwBKeuhWMNbih8",
  "key22": "2uEKDsMQF2KjqMyyhe9GbGxq4NYyrQCU8M99X6vgwwRzNBa5jdTbWwYbKfZ3ArXHWd9PamZVijAaBr6VQVKnw6s2",
  "key23": "jLuxpvWtANgg28Hzc1ptPnEouwVqeqCHmpvFZrNUKM7ZLjj6GJEmB1WrXM7J1rDQPAhhqow3Y8V9eBMgRDfYZFC",
  "key24": "TRr2tp1KQZuyMTPYzzetyfSoLeJPdaod8TGUrwjBSWxUb92r1nit83zTx3SgcaKS6BuzeNBFZXVXHwvaFTnJTKH",
  "key25": "6E6kxVM6yHKUUJfGwn7KefaRoHFLWuGVhhLr316d5cmVkTVRd4p3W6QK6sjW7bBoRmkjSTmJgkA1GGp3AJqF6SL",
  "key26": "5whGT8cRK9xRhuvZgDYw9mNWLdkZBUtoPbM8Wb4hmiDxbBRx7uy77by3weRi2dK4mDsjLWPNj1yrnta5y116b1xc",
  "key27": "2WGSpkwt7Bf3kR5L1Eg8htjKx7vv4Ag16BFBJ2ETSGoNduQMdNgmdoeGGePPM7TzVeuEMztabQRd1H35EvFQhHUN",
  "key28": "4sncutGv32jWYDKoSdTKD6kGcKRrKuSgJaqwJkAgwXibdJDB2XsVap1GrMvhZqgZ8QTs4ipttZ3d5AgGQcXSF8q9",
  "key29": "5j8isxBMnEKtS6fTaEQ3FFrCcXsntpweTA9REn9o3KxY7Q1JJZAGCE3mcPapFYM1zzE2CVXg3SuSbtjfae6aF5dy",
  "key30": "4vi5KNiMiZ3MR9a4vuBD43YCo3WUHcXqPQXwcNCx6ipnhqghqoVWJDjw41aXDJFSHto69cayMCQp3aqm1CpMt4Xj",
  "key31": "PLJz4jGjWxVLo7FDRvQgVZ5Gzex7mbTGRrqq4wNSTBPaJr6abZC1KxJdFzhWKZnhDZEyFAQX4TLqTNBnbFdiuBu",
  "key32": "KySVzYi1YnCbrHE9j2mTNYMi842GNwFqt27vXT2WTiESqLfbH7nm3ttWEgrrpNRLmkseNs7sjjknMA7v7LG6uFZ",
  "key33": "4DVYaWZByoCTDhPyt7UuMUg6PW5NpXVjoRmD2K4iM6YCXpwEXwtCdF1Mh9CwuFQYxMZ4qz1jJKmJrUHbm9vimzCi",
  "key34": "Egjvr3pgmiVLrizrxEYiNhnZN7edmZdBuqrrsHeBgJiwJd1nM2voZo96B8rE8QdgQNoaXp2Gi4EcPsKWZcY9rvp",
  "key35": "5uSG2r4T1GLrJSFD9xwoFSoQSB8MXXxd8Dj7y6WbaxVPdiiRPJcV5Q1ofzm6ghiniQ9oogNULZ3gdCR7LS3eEEZv",
  "key36": "2sZkhtWaVxxnbJ5tZ2gvg6P1jaysk4YfopUDcdk9Zc7JEYQuxd2th13zgyMC7vmTpSh7iLDZm8DJPAkYVaYENaub",
  "key37": "2zw9Uj3SLqt1qqioz2YpP7d6aPu5jkbsYwqbw4Meh6CMg639vru7Rct8AR7J3u5oAxh8Q1rSH8SYuZiCB2PncH5v",
  "key38": "27SE4vihtNwgifgLja45KP1VZGHVEfMxGccayhmsAjfKLqLpM7DDcFAWyJsHNmeUq7rxZYsXW51KUaz4MLepMkmT",
  "key39": "4kf6U8v8XRsFRNEsBzVu7Gc13oH6JQjtZDDr1WTLsTHn888f87JSS3XrGcfb3NfxykA2ze52pi44CHbemu2V9rho"
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
