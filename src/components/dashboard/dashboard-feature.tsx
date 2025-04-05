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
    "5696JQD2eiyUsJUJsdqZ1J3SLqnNr3pJwvh6R8jWBhs5zhL3z1bqRLntnPtR51hhBTEfAgeuAbNeCZ9UkTb7nSBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbnWAU6ZAuRRbdgT27Hb1mLpTUxVXV4z4ZvXzFwjdYJfkAsUr41kEcNFtm5Gqf8DGs83XncbmuvaXpLKzs8RnkU",
  "key1": "5umdiE9q5ona3wxgEDHiKH4ubC38FqSJMTj8A8FKop25gVQy3Jz8JrJ8pV1GWYgWLRMEv5vRDQL1vubhmb4coemV",
  "key2": "39GhT5AQo9tHq1x1iyzb2oKJ7CaBoGwnjyMspzhEBVobbsjYZPF9BSUi25ugFeeUsmseyJ3e4H1STnSJJTecoE2m",
  "key3": "mmGW9PuZv8QdtVc9uvMrKzsznRiebpWLnm3znXqdQqHN6uRFoxtmy2CebH6DFybxwESnAQu9pQ6Ewm6GaqWhVqC",
  "key4": "5dCKgMKXCYBfobiziPZ1GDxp8hfMTYqsCpDCsUFpqnmz6xHisMK12Cn6nRaQS4C5pCcVV6uamq6aN1PvomjmVcH2",
  "key5": "3XgrThtfD2mV7yBSRYGQrn4AxgmqbZmU9J7cXKq9tfWjVwax8dgrw3rB7u7NCzkZBjWJ2YuhvF39hT6ByNDVA8Ue",
  "key6": "3zuPxo1GHWw32KKAAfS76PQPLUHUbMnyLH7UuUFyjVNJBvwLyCNiUNEKowzMLXE4wy9XvMisp8x9dQWfdWtpNaBY",
  "key7": "3mnUemtmUbncbFATi4nqn9D6rdZZ8pKRvp51sLrpeu2dv7Zuf7a9z6sddhenJCYpj1omD7kRyRhvCpskHT7Do7Zf",
  "key8": "k5Egg46bVAB3xy2SRwhm82WH2DLcHGbd7QZ39pukfqWnMHyfv9K9GLPGhDim54ResnmEWVpW242Yzkb3kWsPGfX",
  "key9": "4SQ95pq47nfnxWJsZU4u1LWymsT9hbMKVszqsf7mcpdS9ZqsrmmNdCTtrwNCRuwrSQenKH9r5tVC8uvAHhwjRCxM",
  "key10": "2bz8dH6AGsd6xms8QD9NtRKBTiiHU6K7vW5ACifPuELDyMwVzZtuQA1KqPDRiUqJXhjQkJ7hBfrnL8K3cMd9Yrxq",
  "key11": "2ZdZ97snHEWJiaonVHgqFhUnThnxk6brdWW8do1xxLQFgRMtcjqfGzzSxRKMUsHWk23AFPW8rW2TyAxMySRSZ1TL",
  "key12": "5ujdaUXNBYhCcefkK2wzXoqANZDYim88V2z71hhDaDt4cQHzXagzE1mctUrHz2Lja959F4ZpV94MRUQ3NtPw5Jt8",
  "key13": "3qADe8g5kRuLZ5E2qrVVJHkFhvmadBQL4GpWZ1KCDhSagwFm3SCy81ZDbS5T4wFbtxqfKnzQ523KsBNXA5T8r51B",
  "key14": "22NabL8ByeUDrKLdeKYuDLPQi7wkVWBmwAJM3RBQv4mJveuAvqg6nG6P8C54fGnMETaR8cLzpYvCZXKxKWonM8L3",
  "key15": "3AkxFGStJzLYNvFSqqJX6Lhc1K7qtc2uVWL1C7iLcvHs4WUZb34SmKXwAt9vXkTPpuPJerR8aBVu1JMiWkYhsz3n",
  "key16": "4pkgtsjcvmJLa8bKE6kVutAHD7ujVBaBAGDswE7D4wLbKMrVnJqEbW51Ryo9eVQPPG19bwSwbGbeckB7ZQhwx3DW",
  "key17": "5YMYtapyN6ZFGmUzbtEJTByXvGo6nQz9zYREeiR9xyTfeRDF1H9Tuh3TxDYj1nz5a4qN6QSZfvisBf5ftmJiAxmp",
  "key18": "5ptUFmKRj14RnUGRZuxZLwY3tVeGbFgB5sETPi9N8SACBiNSsVaVoCnW9mTMpgwZJQEEk7fPN67ZNj2gYfXtVCN8",
  "key19": "3s4xw7PgvitzmD6X93R8RiciByBTrAGMfNvjiKNA5qmtm9dQoLybcqeAvXcLZCUkWuDBSg4YU8LkS1VouARxG8uN",
  "key20": "3pP1N7cdexBtaiUekXCGDAbGJyWGDn5bTewYXLKrpZGuVfD41iZpuJqYxmedYCnfpX2qSAyxHYWfPxjhAWY91cPp",
  "key21": "MQYfVHJz2PkjsoJtxWcSW7JgHexBtnPBSHmpS2yPF1MotGQh2Z3eHrAAV2V1R8YJUf7xkXPqbWUJj4j3nwsFLNg",
  "key22": "3baBgYqJWkkXUeMkK219zp6VB1HVFRW2JxkB9ieqTZm11tf68WafqdLuQEhPHiTq4UwqgQT9QEhZEj6FP7mMvgs5",
  "key23": "4tAzdCLYWud7t2g9sgsEmupgeuH3UFx29y4ZVwvkYpHtESX6hq8WuJyuPZ8Nxq4YqVSoouxikt5HZUgpXmY448xA",
  "key24": "oiJTtg68nArgzUENYurcBDguX572UQiB3wVBE5hZqMwkPstDkcfKcdNtKE54pJ53j3sYvYEGJWzqAS4AD2MWeXB",
  "key25": "4xHStxcFDSPhEV8QVf1P3wsdGj6VophTEFEq39sgR6NBSQfHX2vzfreN5xnAJyaPKqA6WdnzLzfyH6skBuTQ3Hvg",
  "key26": "4tgMk726cP5pq4ptpDv4FU2gchATSpsShm7WCfbHgDzEuJM9UtZLHhHvHzgkJnfRxMTkpQ5XaFxvdrqhFstYq7Ep",
  "key27": "3vHn7iDbwTKh1sGECtBfFHvYnH7dG4NvJbWY9uNtjcvQrCxMmqBKVzKQmNtJHm1fVYZ9Up9z97QX4u7ew9s4Rnxx",
  "key28": "3bg3C2WZPhASXYUHrp1VvTmgrSFafRNJWjTHKe46jyKNtBxtfS2k1Nzo7bqpZxVc6pczwYmsTNxySHF3xfoLSZU2",
  "key29": "3MtKZtm78Ji85fTJuC2gLsPgt8iiVvKVTGkdVESrPTC7T6Zs5B29DH95wR2U9jnhcp5HZTSrbhXUPTKkYUdwpYzy",
  "key30": "4bkoajsK1qnor3ZoT2TCyDy9W8BmwfxW5HZHraA3hXoZQkEEdK7Rksp78hnkatQM9DBJvfNqm1UstoQBexm2WKwG",
  "key31": "5gxLKQLgCENGyWrY5RJDGNydwmAWpZLCDs7SF2St8DxHnsLQfuRATKw3WPVfedG3qihm5NMbF4aG5Hmwm5ssDUce",
  "key32": "p2HsYNirDGkNukf5Krqgy4PXqDwBtWQg8VF9ZUVjfHy9TuYUaukXXp1jfPsWhnWcWCF8HHFQjZoSpYgnNnbUa39",
  "key33": "4CyQdhiAzVVWVbtwJFNrXFauYBmSL4oFRV6DDEJdimkbjg51gjMxmPRua9PkbLkXvktVPtBqP8kQuVGWYV52ZYUH"
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
