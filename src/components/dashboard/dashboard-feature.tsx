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
    "57kTMKkTCqSKaVpe1ziei5REDADpRrVQLMaYZfMK8byoiDVpQZ9mL22ZZhBwLkvpAjZdf8WDwX3v3y5ykwDqyUdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffbkP7mZ7Q3PL5PtFhMEB6L29hB7mzHHeNYJXnELmvpFUPgCpyRkcucGQ8UGfMApQgxUaXZsqU7cynct6P6oNrN",
  "key1": "zATxXmA51EmW28fsmXKzJ3pHDYimZdd6yrcVjaKJSEXSaJ4d4preJAQPHaCjGS93uYKLWAZkBmXQQtjzh5SBhnP",
  "key2": "3wCs2b2MH9aMq47qF4Tbtd5oVvrEfCZDPyamsQr9aJjXfopXXAcBsA3sid24b7foEai1ww6RfeCmsRZLbTimgRgT",
  "key3": "4G9wPdJF7Q15y7jT9SkMFBAfKkCejgCJPuzBjJGTuKsX9uqaeZMfCxoQRmsR45L3dRgS1862kKDthKNqEy1e7WCY",
  "key4": "5weaPSKg9CnH9WeUcs1qcz7mgBXwH4BvZP3iW9K46yxnWpgt9Y8UQWrec4Lw1UeLBfudEYkauNZ8CWWtLKvxXqxk",
  "key5": "4wbC2YYbh4NFKM4sLE2AzLzPgHTSpLVA1s83xg2GvrFQNQgajvLwcHTu6mgM5YwhwR9J8N3htqBAKzR8PuPMHHCM",
  "key6": "2yFaecyJLtKFaWLj2u1kstj48gFkmhKELABNPwCj1rndqJAjDiS71gMc5eDYNU8fs2427PugYKq8SMLCWPgjykrq",
  "key7": "2ZLc6QyT2MrFwozSZJEhzXUCcYdFeHuffKoAmH3R9XS98qi7TyGRgrNadTLmHjs5ZkxeKxKvPvtvsqiFMaH1ntic",
  "key8": "2Anp3MbEWgb7VQkQGW7P4aq1DZxWrDCNhfiqYJ18GtiWfKuMJ89Y8foDu2JQNoj1CYEkbBDWfWW5kBQEeY4YqTYN",
  "key9": "4nDcaB6na1BuxFFVcds7q53x7KjtaGSPp8Nbh7gCDppcsN254JdB6u2b2FpPYoCBHpyNM4ta48hr21nDZ2nCeh2k",
  "key10": "a7aSL8ekRkAUbi1jq6sYwnYcvkDDcjceFaWiXPSf6N3GpmWuXZ7RE1mFpWw6ci3cf4L8PStsoNPncJh44w9YtRM",
  "key11": "3VP72AY2cbA8r9gDb1nPndXCrEBotbHbqBptaDXWFPvAGbeVgAhtLaUPTWQBRJTQz8yuRQ5nDamNFhFpTBS77qZS",
  "key12": "2wNrjKLFLBERrFWZFbiwpRfvo7SkhSGbLa7TBrcjBjwVc51CkvL9oktfi5Y2sraZwaonY7pEKWQ9ZfGttWCnL4ij",
  "key13": "2Jx2iAUG5V1jsat74GaBrMf6U7W7J3BNbonA3XeK9GE8DpEsHTrDtM5FybWowNsqpu9tpkQsDYPybyr5WcPg6uvz",
  "key14": "263xzWK3bU6xZYu59gYbNG7a5FQaCxjGb8UQ7YLwfDM3sPR85aY5JwsB6D7a6VYMjCDihWsP5mbC1yRgcVyqQh2x",
  "key15": "4hcowkfWH9o86kKHXDDrgTCqK8eKSmUSeQymggLgEPdTVgCUBV5Vk9B9wDg7LK21sbTjQ1EMtndmHrNfq4kbRVvV",
  "key16": "3qmSjrzFTkHbHgw6EiMwfSWe4vZG7n7zbmtz1D9uKWz64eo9ojeFbVcAYZWoVwN6PdezpG11bh9a5xt6ydQbW1HW",
  "key17": "2JFG6AxqC81UJjjeUXTdBpy9a5RLjspAAE95qBSouzyBiTGXLASQvgTKbBWNjaKEPRfxw7zGL215dVhYqxYutjP6",
  "key18": "4HKe9UakfUxpwm5baPmoUcUkeMes7KRgi9gNz9JDuj2ZxXEnhzz9nhPgpTkS4p3ndo96MNRUHhfbRMEeVK8RbMhX",
  "key19": "P6z5deZoNo6KYvJAnujgNo322TMd1NZhwCxLWwmb7YJB4e9DoeUuMg7wz56PJaNQiQtCJyjUVVwmLH6VqzKaSVC",
  "key20": "23W4p1EuNGVcCnJ1FTVbkHsGdk3L9FnJezFW3EfWjHPaYQUY6ckynSycZiUVLYMA3aAhafuSQT9BuaMuFiTsiLV1",
  "key21": "2X7GWiJRGSQvRy2b6Db9S2aC85tc4x7QNuDxQnvc1rKZN95QHrTRp5P9nniHtZt6zsMtm7JKbArscstuHs9McCWP",
  "key22": "wodPgMevfMyG2vnmucAYTqthoj98x9STtuttTVpvLyToa6wXobz3bYPmrwTspQqW4USRBnHaFBj9o53fgFg2R2W",
  "key23": "4CCqpb59NvZ1NQR1boGcWSq2QpFRbhuC17YKgivLLgeXL8LuHBFAtVQ2dK2En1ZDKyLqTdZLu439nZMiWwnc49eM",
  "key24": "4UidAjBDmiqCFJgySRjGMeiiG96durKXbz3HFP66myuvau2N8msGjVNt6MvMR65ZtEkKJMxDfWH6fNtV7BWpKx3B"
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
