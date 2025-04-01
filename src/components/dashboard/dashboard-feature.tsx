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
    "51CKXvbua1LG5h8WrjhH867mi3oDLxr8G2mqLQUBqo57fumu2QTKj1kjJstKxnximWUDnxynTPoYoxpQevp1Ps8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CV21cbe4CoPRXUj1H69vJPeLqyj5f9JbwsDek2A9fWjUp773vvo38NkaVqKCDdvcTJbXsJoQ2jPo7JTxSNuzc5C",
  "key1": "4QCyEB3PTKogVdhLS2exkGyzH4jGYW9WVEAzA5w1KHEJRdoV8KAztpNsqdd87GgX963PKUDugzmEyE9Lybg4BqyL",
  "key2": "5xR4Gxo9NptWG6yNCwQewssCetVZnd6oiK6iBwWjyqTKCnDqKeen5zimaf2a2vA9UWocz2NDEsiysAyNXRUze62V",
  "key3": "3D97tEHESEibX9uWjHn529fwNrJUA2bHVv31kekqcWvVKZG2TovAsWQ2dQpNuM1pWwu91zSJZemqvECFfHHTuA2z",
  "key4": "5MYyc5dhNMi24frqH2aie6m8xK3F1fMYcxWMHa1vck7xs5T4gUL21H1ZAACzq7GowYvvHttYfBfDwE27w3rBzji8",
  "key5": "4JhHQ5phXiEdKYz2VWYm4azgKnnhLrzz9yiw8dShFvCPL8AXPveHxbrB1VKESanUu3xLVpcpYbGu7jWiiWrVDpkN",
  "key6": "2BErmQafWxAdmQ9rP3AmvBHcm1BCpSwGfFn2JXbQeogBzbUHwC67yHoTPqTmgbGTwYeLu6fMCJVWzYdLGsKEU1Qw",
  "key7": "c7oej9M6SMbhMooBo8L2zTWoHmgKUSq5JB5tbTiPbG5Vud1MBPCo184amZdfC6ZkaHJVM7zjAhHodXiXnZvtawb",
  "key8": "9f8kFeiyVLze44BkpMfQnU6xA2BvyJZr6AaqKd1GrmmvBgxRJZZDqiG7sT63vGGovEyXXKBukXvLg8GeMaYXqkP",
  "key9": "5fkFV4Zma7XN8xETMBBRSRasgtjzGS8YjSMgd928wNFg1NRBxhcGwjNeAYasn3jbjPM5jBvgy1ANPudy8xnRmEz4",
  "key10": "sAwMKchjqGFVrJoiGrLmx2TVTi7UaS6J5zWnMqj3aiaTQePM9WMeCoz1viHWQsC1JRNtKs58muAsbHY19pWyTNa",
  "key11": "2VsSabchNeeHWY7p9P2BmqThrfBvo4nu1HuXAntxRfPubc3kAwrUK57NrjdZ8FxqfuhspWL3AsUcoHxnbKDijfZE",
  "key12": "MeQBrhctK7FFNQPrxpA4EfkXvR5e498qXTtbys3udsTuQuV39pKYYsxFkAw3shws8k2Z1DCju7pEcWoLcpsv6Lv",
  "key13": "J2JUVmJTTvbswamD7VAt9tQWrKbNz6XsmTJfQoZRYisEDbTwKkgqidgnPsszgQfypPb2BHjTn7Hu8CmmoitTLhG",
  "key14": "3tLs3W8gLXCVg21wRFbiwEFZkhKkboD5pAebvbQ6PgS8taLgvNRJ8WzGuyHqCPZVG47YYJJbfK7vufaTydsnGup9",
  "key15": "FndqyanAfBqTczCDxzsYu216vnVFpqcizkDqBq4VXvb8vYjcehdqgT81JR7XemcfaycN2tGFbhQEXik1RsuFLgo",
  "key16": "3Y4VT8L48sariv2G4DB43H2FptnfSBRrrS9F7L4h7EX39hWtAUSrsWfPZNbpbECUvQPLgSVXFeeAjvGYGfNUXKea",
  "key17": "2JHMGrKYSN6nBUGkZpcxxrDGsa14AN9wQfn1XPvZ3TG2GDVWDBJvgfJXs6iwipUfy9L8WsuV1N3vu3C6uiY9YxNP",
  "key18": "3w2PPuneskdiyaYC7hppwnJiXK2ECuoKm1sdtWvMCjmGeTuCyX3WRC1QEQ4uPKrCkGzUhB6v1jwsG1myd6giXEpn",
  "key19": "5tsFTsAodoyWvQ4d4zYrq2XcNz4vY8PNmxEeBEcKBVrg6AQrGjrnQZ7HPGmowzMdMUDUjyX3KuGdQ52iFTx4qriU",
  "key20": "4ZCtVPauuaSg6SBoqansJzZNSGYgyLfKAZDXXHffrthanGH2pHoiw9uqGgTCGGk7Hb6hQmbzpNWR7Pzqd34oSS1R",
  "key21": "5yqHLxaa4kcHPMEdu8hd8JVchdNHc5gHBVhtPPQ8Lv2y5dFGPnkeRGxMWLttHePiJbYhyVSSUEFpd9HskCgFj5zg",
  "key22": "6xU5QqsvuHimj6JxEC11oUVBiK4RzoNPCwMcowtmCi85UgqUJhiWtU4ws7fPdyiTzALYtuR4XWGurNk3t9GSvF7",
  "key23": "5bxw1PjNpqCncE2Aixzj1yBzqPptfBjmAGiArkDY2B1sTkEUQTFxY4U77xAipTddZ9yn8U1gtEMELnWbtjjZjyub",
  "key24": "LyRG29zKbaAzaSzkLqnzkD5ZPEUP3UG9ZvBBhm2QPgrWgsuYgEtNFJ8UBwEVs1jV7ax1nYaEFuYZjnyideoecva",
  "key25": "2ZuirzeM4n89DAyftwhd8xii7qUPNoq2AgfUYbSonhHfB2831PNbxKbWRw61yGJAfhmiSQwKUh7LHhzbgr6YRKwU",
  "key26": "4zjPAppqHJvRoDfo8J16RC2A5TvxtPKyVtGpUoNtixPdjn5VYezRwme8itAmmTsV5FndV5b7vLeWNaJFxPsWascg",
  "key27": "5gKqmHFod2oYu643A8HD2t9z15w4aNqn8X8n7TZTMNdBUMg6T4H9oRXrZDiojFTf4NN16H7A98DezTYBUvQYDh2t",
  "key28": "z6Neci8usNBQHwL7Jq7rWZsVVcw2TdBoQQkje6PGxcQ6i2GRSp1cFNJZhYk5sJx4hP3VyZHN8HstzoFZfHyXDDe",
  "key29": "46Yo3xHfqLFFQx79ZZoYe4GGdHJMEjHt7924mfFSZR2Em4zgj8pQgfrDwDAwS9Vugx44xQ3pMSKADHTLimBNRrYt",
  "key30": "2H41gKgLqtamj7Ft9Ag7ikdmCYVNkaW18tDgMQFYGoWz9aXT878TgtuXS6d9GiwwU8phfEgF8BNQTmwSJvCsp81S",
  "key31": "bT89D1GnuA6Xy1rzWybW9MMwF3W87yLjeeCx3f5ep56yNAeVGCaNc6fmQVs3y3nnXmU3fYZULzMYZ6vtUUYuJwS",
  "key32": "5WgCqRXheAp5VJdpq2GCZefAryLDau5kPaiCi9HFjmSz22LRGL7k9ce67RtVX3vJvqX7hvn1YqdgUK6gZojjyMgT",
  "key33": "4qYoEwy6G6d89wngPd8Csz5wPEYc7Sn5PCNGEsbUKtr3pGfUeb7aF4LXUyrKJ26Aqg4fqFckR8uJLGq6T4HQ9Np"
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
