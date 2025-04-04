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
    "Dte7545zasD2iVyc3wj6jt9sHTn3BGeG9ikjWwv6W5ZbsmG82TiMYZXBEjGXyrArQbvVUKWyn5kGFuFuWpCRM3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNaPKpm1igL7TZaNzDYLdCFeexCBFZawAekxNtkgTVTenFXbHnodGmYMhMKGfoQCR84gWhHPxHm9JRRfh7PQg5F",
  "key1": "3M4KUE6ABqvqCLZBztbAsqdGEmy7dRi3DN1nkJ13uezXReyH9sPah3mtUxC3x8TCKqQhLwD19Wygft1wEt63rzjB",
  "key2": "cjyExBJjDga89ihJtEYaaUdP7MZfqq6swrqP8MkjWxX3X6KgE8YHbjQvqUut6m3veohN6yXHQyq1Ndi4FuTzUTt",
  "key3": "9pyeiWpV1dHvzmnQvTJxLav5bXy4hN4fx8VuF8Fos2XYukbVLV7VZXrRquWEvLtNAcFgRPpRn5HgDrJXUU7dbWf",
  "key4": "3En3KhPNcHAy1Cb7NJSYo7J6PPjdS8jeaahy1stT6cRAad1KPj4NWEzfQDa54FGUADnATbU8kvSkFstWAZedCamE",
  "key5": "51XEH4167qUjA13fUsMn1EiEnFb3ZkQnTwwmNwYZx6tibszxvVoMnV4LW8XD2wgUNXjR3UQUq1sKrBzmbJ14X8dh",
  "key6": "7rtCxSDX2UHd1XF2xgukVM6h9Q9Vr741zEnLpjA6tvNogvP7UZydJJRRQAkev85ZcjmNuetJZS7hcBh8ZDocv4i",
  "key7": "2uhPjbENAiguaRh6YFdetTJhYouhG6e1rQVa2sdrRDmf8L42GSq9KFAYUxfgQjK3d9HhNGazu51kubR4vwoSS8aa",
  "key8": "3p2bJDv9YhXddeHWhA1dq2DBjTiJdutaUH5Svr5Sa3UWfX1JH6NH37PGMYr54fwvyVweLZed4zLzwUMwLGyg5xN6",
  "key9": "ESr5Pui39jrLB5QLFbaxxnKQvwWb1qG3A4uPtf7Nge3miwdFP5CkHE9wvvVwjxmj6NoJAP77T4eLMrJFgEdK4UM",
  "key10": "32XaPcRqT1su6bZgn3EGYUDMZxJWP5DCEw26FmqH5Ayieo4xbK1wm8PKHwLBbMWD7zTdm4rCJetH6DEPgrRARw5b",
  "key11": "438SjRHoX3d8FFDhHbQjdTipHp11tiyex7Yn3gy3ZwnDnRgw9sYfY7yUZuzMEXuZstBfXvw4Zi3S9afm3NeHwces",
  "key12": "2LqEc2W4nPiiQRCUWRwopCb7TwzpoKPjXzNZ2uL2s7uzDN4WqBsHMHDTpH6eVpRWD4CZWapcqSBTuwoC2gr8ktM4",
  "key13": "2KDTsfyqy15ySfb1nHcXJY1DGvsZLsA7nYbRa37ZqDvye1pasujsfbe2ZgJhBMtuoAxbYhfQdPtpSDxZnKxNVU8g",
  "key14": "4XDkpjJ5CXHvHCB3JjN8FiywWKpynT53BrGvmHDxx3Fy9K7j4WjoJM8sCVVBZe45h9RMwQ3s5WVqZsW3TmB51kLj",
  "key15": "4eC6Jk7TSZkCq7uYdL63N1gbskuC23MNjaT6BHdb5nystFVzV3XYkcEQ4qG8fcSnPYEHYeaZDDuPw6N2UqcwqG81",
  "key16": "4ArJ8eSQs6HfTt9qMoZrUho1ibHNYFQaZ3f6j3sQRXQbj4KiYYgrYus27x1RU7YovEaG7p6v1e4sXkaDRaU4hdWF",
  "key17": "5ey3XLqEhz9DdJsLQuycYJvmVCXpN36rS1PTg4tYmarjY9Bs8bX7WovKZ5c1C7WyZ4RK2gUrCUM4Zz7iqeJ6BsgN",
  "key18": "42A4pMUVQas2zzzTC8s2NLZLAZhDUuXPxBLTBD81N3WDGy4AVsaatjpfyJtZobPX3hC28r1DMrZZYEJfjKT51g9o",
  "key19": "nVDCjk62c9qqtckaYbMkWDv6R4wJ1KMRYucvJYoqtyezcE22YTXZgRvdJJ9gmYb1ZgJYXkr68S1JU9PrzZnPgZx",
  "key20": "5eDT1GzCGZVuHyiC5Pp8kdTQcNkuM4UechervEabomgYSYufEnPSYjEfNc6MWGvPNZ3kt2mcLXB8rVDQ19ghUevA",
  "key21": "2uiyHkBuCaWvERxgYh7XroaJM8UTVAoXSLxhrKFPogwTb7C5qt1u3K36fNY1McRAc566kczM9avrWf8Zu5Q46Wie",
  "key22": "2aEWkR1h4VRq57gzVPLgYdMswqUHrdu4aEyodvMpKTdoWnhdiha291WTd37nHAd7fsnzUas5hWNFzcqWCXrsN6nY",
  "key23": "45zH4YwYCAg1ZE3RPdJ9gHQ3xxN6z471HUC6n8ABUvq81aVEDsHhpqxmdD8J6gspe6V4F653g1MzYzPtbkXHUSJx",
  "key24": "ijhYwqdR36x4zh263NsfArVj8PLPCpN2KWbeZv2ZNSZektwgDzgYcPwjcFis9yYWhCGLT4otPKcQp8P7TSp39P3",
  "key25": "2e49pGhMEYaJvvZefH6GDX8bDXnZJQnWHqcGvdqG9eFisuDiHCuquNvy17ese8N11qW8syAsNaqhcWBYzNhEPT5y"
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
