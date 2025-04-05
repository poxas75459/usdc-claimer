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
    "5dfBvh2JUb7ZDuupj4k5PGqK6qjRyKNqxDGKCF7GPmwZEJXMo2ZrJe3bw1BSrJtA2xBL7ctn2ufZeaACbcooSizV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nC3xmAfmLh6kettFWaKRHVFvPXw9Rdxaohb9jaemRusNcytohvpNRSn15e5K5NGLotN2NtZiENG7FhLmGxtndhe",
  "key1": "4rBnS6c8sFSh4e31B75LriUBzVuFYCQ7MA7T8ttDWakr1g39WDVhSRqUB7sg3VWxDDAufAaTpWurudeRER96CHpC",
  "key2": "3A9mZSave2FgkKqw2eRM6m6PLBTb1LCB7GwiuxRze9c7ZqREDKfB37773KYkJy5bkpg7dHhDTkQL1a8HvYzcAbAC",
  "key3": "3CS9KtkytAyNjgvprqE9Z3tN39i7yvgJHsyYXGBCM3iPTGXgHTdzfcbTnnYsn3kBtSiq3KE7fT6RjqTMXkGyMfFN",
  "key4": "5DGWBu2gUxdg42eB9vv6dE8iUmPeYS1odxbotzZuASGFyeiCJiNhcnXPLbMb4LqHkGsAWD1Pv5RU4dbTknfwicVY",
  "key5": "3ADDECtwpyBdyFoaGmvLAK37kuGWKvCYd4bBRADsQ5qCFwBdxg4mjuFp94TMZ9bN1F4Us6Nn3J6eAseW1sT4f7c3",
  "key6": "5gZCM1gj4TuRLFbWfwxMkHGN7nDKCnDcqN5JXLFPGCg5JvmBgwJmq1byVLTL1dCFYfU6YeQhNfFtFRubm2tZ7TL2",
  "key7": "3iatft43CZc12bv2uBpnPui3m3utoKLX7iGbUdzcYVKNSBZSCWpaJKPhih7q9QSfNzFKk8jBNXQSUGdwbpmbT8sU",
  "key8": "vcT7YQZq1DMEczk4esJcRuif4ca5unzVxTF8aeLt3LNMdUyw5MCgfR61cNNVoRxPNkqLWoqkjgwHW7EGsMbgNSZ",
  "key9": "2UQQ6thUYsfPvw8w7YNHji1RAAbwGj7yZUvnJEEyBzMpSDt4Tv8698YCXrBDLo1wJxMpgMNLeAM4oE9kFmSVePi",
  "key10": "46ftwFV6ViScT41EJPMh9c8XUxmq16t67PEgFht243i1r6y63MVKWxzaaqKUdcUXGjRH91C4VVFUoHtCe8A6sJXT",
  "key11": "58CXAEByHx478MkKY2etEdtdzEDS29qmSQYn8aju7wsJtMamQbcQznJVdJNMHGYPaChSroaPi8BFdyh3eLmQWVbw",
  "key12": "vXxn7UxpnK41jdC9YLxUWVaZuCtNALogyvfQxrVnC2nZHkuSLqUW7fJxgbD4Xb5FpEZwhDWhXmv3ov8aMPRdUfB",
  "key13": "4wUmXYL3MLwVTBQRu6iok35dGMNtGGMCZQKjZyRzNqzEyeNdrSZDxMfq7DrdK8WapEaawG1GDLQvNw5u7vxcdySa",
  "key14": "4p8efKoLkXYAd6XGKz83wTd7ZASxCw4ZRT4LVxQeGuujH5zJN5mC1KcBuv2AJSUm5TG4tR1RYGkj2yx8kGLUTaRv",
  "key15": "23c3q4e1GzeBv5hvcBqRxt15JeFWrN3Nm65QKAhHsU3CfS6kwhU1bHsV1uhFe6vr43Sov3xhNcGhdtWcMNx8AHna",
  "key16": "5FiNEH9qup2ohdKsk1h1AUksdEcMt25ryf1fNxLvYgQBKnPpUoSh3HRS7z8MJ3MDv6HfchWSFB1oj2AFaDMGJ9T8",
  "key17": "3RqgnNyjp3MWFb5Wo8fzm27Hvu57MZGJnw9cSUs8J7GBxVNnA5cYpQBtH6a31dRZadMc22rto3uGYo2QRqfq5cTE",
  "key18": "3dHVAgC4EsiVXdbHeWqp1hNuC8Kv7Anm9VEohjx5GqHXSDNZrSuq95bbBXVqSqhU7T4XEgAhUhEz1BARYZbQgizw",
  "key19": "4T22uZPijAJqXyQFCmsogu4mr26UdGHPXuSZn3VCcT6ozWitHFs31p81jdT11YaRM4hU6xRSfagKqDS5rENsHpQ7",
  "key20": "3VtNHRSYTsCVydbHmDvKXs7VDtneV5MBuPXqXVXVhWHexmgV1iSmuhE7j7mBuVagiqEMBEyDqUVaK2r1pSezHuki",
  "key21": "5UZiJmaGYr8fF2sDJVWjH2FzUgWGs6HDLk4cz2Shx8sDpkgdnr6CQLdazZYtKdCbRndvZVFcoDXSyrSLJ9PmgVAx",
  "key22": "3JSpuxTY432c5XVXAnxDLvEU1CHZmSF1tP4D2m8uoUpy3MnL2ZNG9HpNAooJ1ifheRtRqGTxt8PpKAgVQjNHog5c",
  "key23": "2NeeK47rzctCF3WVxwsj8xJp97yrTsrftHgyG42G6o67soKEV8HSmryhskDciu4JxGT8byrwnmgWyBjcqApGeR77",
  "key24": "m1n9RoP8DH23DxptDUWVMnYxz8hqdbDhqamRJWNw3iDgzmN4daVrXYG7bJvxPawBSQHb5zsgYVsZ1SY7uV5qAnB",
  "key25": "3YrcFf7NQUTfHUgRjRxL419xkYeFcmPYGR8xn3GWWLsui2kwozq3ZocUV9S1KLSrwvz9K3FP73MHg69BmUiYAXHm",
  "key26": "5b4bRs5as7K1UzYDfu7q14JiA5RFuWQgn3F1wtLdpnZxC3PkSxw7SQt1CYz4ZKTi6DeZ7FoCT8UueJqNKzWbEZmc",
  "key27": "4FEWjAGL1N29viBRjxvxCPy1y1kSWqCFHdkESQTY2pW6CLfJXp2csCZrruLQ4cU5GG9acQFWQbCRmwZVzAhLRvP7",
  "key28": "4eyLBCD4Vq6aYrcSDuwSdsJsBQTYANGX5Xf55YLk66bzhkUjcZxamC8Gcu1sUjVdq8q1ZNfvcf5NpTne5Adbqk9z",
  "key29": "5TYYSsH5EJyfUnpAcKY6WsMxaC7ygS1GKtGFdySgcgS95LtqHcVTFY6GtkFQwrGpLqUPYS4fFAb3vkW9aMozAGuA",
  "key30": "4na3uRnKX7hFYh8vPJznDUXFASXo6HmRAGwdMAUoxmhj8YZrvUgFV9HNWoDwo8LVk7ZNVdsDEHssmZZooUGqfPYJ",
  "key31": "2qw92QHE9uo6D8aW7Q7ZLShCfd1xD3YVKo9NKxiHsuHo4BnWqehFLFdb2U37DjGFvqztjFqGpJt321oankm7WWJg",
  "key32": "4CQjyfTu6qRcBUsmuHhkhJPHYqf5HDSrVD6nuNgHHNGy43c3ZiCXJhQoXZbGo9WzqMBMRdKbqE571AuaY5UK9osn",
  "key33": "5pqAUBnB948AsJ8fzgDdmWaMhV7aXC6W4u3FNpUzd6PW2SpJpEgCnrrEFonmfUSLHX9ox8bbEzcGAa2hCF86Jyri",
  "key34": "549JgPFpm1j9uEunAByUKWcGbmhLeyGoRC9pjNSjv8ck6AmgFhaqhyu9nUUQ8MMjERLzAoh6pth2HzDH1suZMLNJ",
  "key35": "2yW3C1E2wJG3LUBRZVEzMv1HmxbhhEaiPci4LYtJ65orvYGTQwzL4ZBHyjoCG1VBKNAgQghjrrvd8mYBeMbALVmR",
  "key36": "3Y89DXw8kRHtXFGzmQSTeEoAF4bUfAPqrL5CRRzqiMu1mWJyjko8GhzPF5EtqH4fz7hv7MSka3aLYeXGgmeQj8Je",
  "key37": "3dMXcVgoaK1t4i5dApD2DgkcMrvjHVZw1bYbrYX31V1WTqFXWgfjjVzPc2azRoXp74pHj2cewuNHTAwos6qHyTwJ",
  "key38": "5qauQ9Szr5zwzTnvdA6UMgjpCygFukv48j56YFWUNCHWbCoEPTv3tgKTLKB8SXN1VrBdnT7ZbawqhwCLmNVRzHY5",
  "key39": "5Hza5fUoLAfHtrBkpsFc5r1eU3bLqEWpNwsUhgvsfMRup3hddfhQhP3REwJHKahUgwKHThcv1BVAmF9VCPwA3VrA",
  "key40": "5XFbK4umbJw7fRJ9UJhTgGTZeL5rNKyrmUYEGizfs7Cu7KrH11Yhxx5587K52qK6fQb8ZH3Mntab1EHB8iviHMjQ",
  "key41": "3H3Uf8wwJpQV6D95F8ALxT9dTaZF1vevYpixyaxYxyPudC3p36reE9XiDE4Su5SVxmXDnKE7N6nZqwtx2MpVYz6n",
  "key42": "2Y44PwNUPDhktmGGvpmK6sSj5fDdWaEVrkdTnSw7YbvUc4ZH4g48kw9EJE7cYyViZRj8J8kkC4MfonGfi6dcH18o"
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
