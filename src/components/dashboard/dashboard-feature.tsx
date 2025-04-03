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
    "6ajKFW7vC9wUBGY7f6MrTX9txwMqpqX98zgvNJrZU4NA778T263rCfuQjkZQJZJPLduVCJkUvrjtrSNphvWsdzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6GuVk3C7URnWWeNjsrLenhbokEg7psxnhK9WbMoeDZGydMr86G1sWKfEHcUBeeohjM6F8ECvChG6Qers3RUo2H",
  "key1": "5T6yX7LCwNdercPdXprhUsEKadiH9TZEGhfBpPekJZwZdDSiaR3c8v5FGcn3DKeB95LhpmAUBUQCz8egcHs4bLjA",
  "key2": "2f7T56uAE8cHxnHwvF4o7Sy72ikLWjHSCXj3qwkCsU12kMa886xdJKwR4BH7z8yrxKrpQ5JzVxhC6BDfquh3s1Ty",
  "key3": "3ZCNxzqETVG91ebvXAjKJyrs5aZZZ2w3Py2S2rxmZkKLZKXjzCNFRK4TzWmJH4dvAEi9a3abWf8pW8hy9ARm5Uk2",
  "key4": "5y2t58irrq993dPgiEJvwNY1U4fgfeBAvpp88H7xnm9jkwLnb68J8v54sU8e17XCtL3XSgomiLz1doiKP43h7qq7",
  "key5": "Ep6wmiZCQgJi2y6gVMDr8DprxLij6ixyG3CE37rdhNoSwhaVbJNQh1rXiY526kcpbNMZQg32zw84i2DaojeoUpZ",
  "key6": "32ANH1GnfmGJxU5NekTPikYPKgzCLJvT1CKUW89tD25uY2WZSpnqUxDbU6FHhyS17LgSqpuwDb6yiNYjf9H2aLFA",
  "key7": "2qXUxgrGBqbFZYtMCxPVWVj62iDRhRr16yWR8joqAsGVkAeqfk3kDkQHJREfDFsjD5HMiUTYCLRhdMUumjBbfZ7R",
  "key8": "AFWfQaB5QDSjJUPeEGHWDRFuXLQuGUKpf5zHNUsqaWcmz4143PkzPdbLTgb2JJV4hb5P7iE9yqSU3Tyr7hPzxue",
  "key9": "2WN49ebkrWsUJ2U4PBWh3gve9BnHWimxySAp1JYdqUD3d4ZWS1zo5LhVMcgP8DgPmjRyZ4XiuTJ2BV47kZrbJBpe",
  "key10": "3uDVyUcEi83VEF4ntbbnNP9ZpBtt3xDUi2gzRWZwiHBoLkQv37YuRsKwryssygBu48cmiGw9z53rsRDS7XQ7FdzQ",
  "key11": "217FUjWaM9gb89iN4KSHNbGfwiamGMxdxYkL6q7tpCsHRdJox5gLjmer7bU1FfrnSbTmzPC13ckPfJiYRXWDhXUn",
  "key12": "5wnoH3rWNtwG2DV8ra4eS1Lm3e6hCYJSGLWT7veaqKd2rAshgCKNZSRizjpLB52nMgx55wBnhyDLDzNRPujgJmZF",
  "key13": "4s1ZdshnE4i154xTL4if1d7mVe3sjpPcqpyBk2KSGh1KZUv3nj7b7CDU6sh3w8ivnucbUnsfyjRh9czy23cAUU1F",
  "key14": "WnsiDu6HF63YMg1a5v52jWY8qszN5MXp36adY1eupvUhXm7beKnm3CSRqLKfkff8rfbxYBUyGs2vSxXvrrJesSr",
  "key15": "2cc1RPgNxQZs4vRXivGS9ivF1EfXFxH5LEcdnun8GP2rcmYwQTwXvRYcoCDGiD2TGAFRckN1GUz9aUMbHBxja41a",
  "key16": "2gRGEDFFnsJaZe9sDt5iV7EptqvwKCTurw8yYD1ygyP6bFdYgE6eqQBMS7p2VA8Ys9UXYagvdcedmmCds8YffX2W",
  "key17": "2y5CZy4jSAXcz4oXntqoXXmRjZxFvR1xRoU7BYeCFkstg2VfAY2K4EmdtVc2An7NPryZJWQuTBjTfPb1gnvcN6Tx",
  "key18": "q3B4neBsKskZV3anttSAYvpvGRRDtWmxoyQCgUyAjX71GSi8hKwRwy5x848Qv9vgA3FaXESYGziMN6zK79Nptso",
  "key19": "VxEg7HVKWstUEL2QDSF23AUzQdKzLRNo5jimfz13frnx2qiAhpfe8etoAfhckf6Gf2GGjnj1q2e1sbs9YtwapHP",
  "key20": "2STvM9CELKz7YeCqM7Jok6nhCS3VF9vz5ougmCkfwMoV3ejk2CiR8iJjjfhtAgTDrbd1qtE9uDZ9JJcKPjfZLabo",
  "key21": "5fpHMcwmmKhxYm4ybZLVYKNgJQQPrJpALSUyZVvMf4nSK4eHNJR1xR6hRbKMdzVnjsAifRABxtKASqjPhvQC8izb",
  "key22": "2W2LbuDTUWs3EBXEote5ozYaiFHpPaEaBikqtpeV7aAt2Zw7uR2p6CLkfc8N8jxV1GiUhXa3Amejqqnr3MZ31g5t",
  "key23": "4JK2xVtmUeqaSnAw7o6nZ4ZZuRatWVKCUmhJn6urReDnuEHtcxb8kSwAX6Yy1tcxVATrsbHsCsxjH6KvNh391X4H",
  "key24": "8FZLDMk637pvMnR6awmyMUYCFeZQjpnm3aSMWpbMM3aiWJggTGbWiqzeb1wLFah98XAmj5BDaNcq7RhMpwW7dPU",
  "key25": "3vUez5azmjfu63sQkMcaU3L9HEd8n129UYC5SjH5f88YeaUw4HYFWwVd61ZABeKEzzzeAmKt5v8mRxbErkxf59gz",
  "key26": "hSEPrLtmcHYsYX6raC75prrDhsawp5nTnEfhfx63dGjKLFuJBbjUJmbVx76yBe22CMHrRC7AyHjveJiEBYGv67u",
  "key27": "f3wJPguXTQsr8rQFLxKa8yP3xhu4DbdoNJTgAruLPzx6KCPLsSMFKqnVGzsJrZMpuEaoAD58ySQZsSux4ZJWb38",
  "key28": "2hnnjba7ecxGnmUyn4fvNePHk7uDyVGg49thZJtkWBPekrFuiwirX2xoeQqeNLL564a3NQXEfqG6hTgLeVUwBpqB",
  "key29": "4pC4ReKcfkbL9QhY1QaR3j7anekKML4eWHMKZWNU1p3T692KFHx44fVWEPn8ZUr1FVqXYtWpB1MZh1Mut8gya87B",
  "key30": "3a7J7cinV2giLHrwhVeAdit7ZbKHwTQkNuwmDbtX1gv53pC1rqRnu4AtkDenRM2Gm4uzMaEQLMmj9BovHkDKWAKT"
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
