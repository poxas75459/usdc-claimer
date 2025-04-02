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
    "2uW4yY2EwKqq9F2SpGZRifwwMuj2HWacYjXs1D7QQGhyJHUafaR7fNW2dKrrKS2iDrkCdvgTN2493NdWGUhB2DzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TwRU5T8vDBwp2tNTbBd2jyWCRwcAq2NhQu3SnkdcWkVEuSEfQ2WLLqxahfYAwg2oSJhYgfBpV1zkJGaUsg6eX4Y",
  "key1": "5ByrLw25hvkRZFYPTJDG9Du1acYaRQhgWQE9Wj6enyhfwczehj4fFTherh6apgtkmsPhSsQ6Mm8n9ocUGLAvDgRs",
  "key2": "4sBpWejTM8RXoeh1P86uiLiXrmkjAtDVn5ayXG3z4k7ThBGyk8rUaTKNRQEJaiVhYexc4f8JNkGA9qmyQf8dovwr",
  "key3": "4fnM9wFQQFgqj246NfyZNoBmq2jtGdpAVnadLyqguSPdiVztHcw14FFLzCJaDYs3Liw8Aycw24Ph9P5wX3oAeVRj",
  "key4": "3NdyyMN78MUSxCXnU923RdKUso7qiHpN73xjZkNGDtKK5xHNdj8zv1v4LBunTJM6z9BpP7FSE5uL2xkvstGWyHsb",
  "key5": "qVEzESWMj67aqRkwWq35zV2mZFzHuWjZymzyVMtRkm1vQ1HNPRgwSM3Qecz63XToAEKnDB4errtEUBoupyNRq6w",
  "key6": "2pL5RxrApBPYCkBLEaKoV9726Lh4fZ5KGNwfZyWF6GKsMNVdmKr45GmCihX8ZP8NRysiV7qtXZC3yfGXGRpq8Y25",
  "key7": "3cSG4CvhQJZapEFyvRzqubjXEvEjysqRfbEguzGys8MbjMJ3a2Cujj6rniR4WXYwtQQCx9s7HnEgyUvX9kTthSMv",
  "key8": "5yQcGxpEQf8JpHVMZe3Tdzx9B4zBQPgeQeztxk5aWdSBXosrawHibeHbeG8bV71Q9zZtN2PHTWrXyjCjXfHfTsQ2",
  "key9": "2Bz1RE9fm5Zr3UivNRo3bN6LohwHrME83tTP2X9DgTA82ZPPRGDSFYjFJLxBVSabkn62uyPQ1hb23m31tNQAK3gB",
  "key10": "b7idPWqbnqN4FvDzhzowba6d3BJQAnJSQrY2qYF5Uwtb1NhKL1UQLPxgfsCZs5fNZJ8FzLxEbkqWnEBB8AFbctr",
  "key11": "2h5QrTaQK9TDX4MYEYrzvcdwEjzXg12zK2agJPpNb6KSxWHqckEjNenesATsPsudGLUadMMJd4ikcGeBDM93N7D7",
  "key12": "3CD9efSQvsontwALU9Gw665t3Yfyo9jtrSteFZtHyjx6LVcmo1eT6dwawjGhqCosG5rqySKzWuaSyjzWFpUTj2P3",
  "key13": "LfVzLC2SGevBvmu2yMUCAnfPTfipkUpZ7a7iiWqzMekrzdnxMvP1y31LkJvwBxJwqmoGrkPDytZAhtXUEzbL1E1",
  "key14": "3E6SUioQYC7Y5iWT3hupNYyhGooRbCnKp9Ff1emE95HbnMyhfyH51LdYfUWhZhRKLyLtPr6wefJb5JmeeDtouNL1",
  "key15": "31rp8JpMFj5R8Ycv1n4MoEADLaZf6LRER242xWUYXKtdDHyHWoySXko2LBDRNxUsQRnz3SPWZhwLbE8HVg88AH7c",
  "key16": "5HincYRKSPLmSbQQbgvXhxfrNpHqbC7uCb3jspbwqzHtBhTrf6FtTRBR8JMjgXgjyoMnmTFPQWJFkQ7oEyfWTP5",
  "key17": "5h8BChVpLPZqBKmF1y1jQgZzfqSjERtWo1o2qaS5DcGEnSdy1QETZ9Td9FXQFNnpZibkCjWPdsK3Tqi3jbRMmhZH",
  "key18": "4VL3Wk1uTh1sRVuuu8VwkgSfTRmVLTz9fyAKX7ehaoJ3ZxwmPKtSsTwpSDbc8kJbWpcxJSoZGxQrtQMyopNCgkqb",
  "key19": "t9QybeYsxvxpfPEY22nA2GFnLL7iQRz9tZMFS3ZM4N8RYoqTbZFW9WosDEhppyH3eBsZwZAZS82LEDA2GD2kTXf",
  "key20": "4Q7TcgHcjrzqtrMHdVDXrgkzkqZbkf37pAdZFVTK556W3fga4Fz54KL9T5xRzEhQmR3WvQ6iwg5WtYHieb8ZdBn9",
  "key21": "2roL3Dv5YeVgwkVGUmWK6h1v6CBq29QouT4Cv6Bi8KtAFBs7jugTLqGX7HG7uy4viPEZUVqZNwKhidYwBzmKZAxF",
  "key22": "5amkAvnwXHVcF74zDuifoPvB5i6J75jm6m5ciuHLNGyRZD1pPrCSMSxAQLoa758gUgKkr7NB6c9DUeXAQFQ3J27q",
  "key23": "YpDLB5mSFQLoUwumrChQH2GrbVPywzHAaYc9evSp13AfVzixYpaST1Hpyc2neyuhcg8nu2JuwrJTznaUENkZ9s4",
  "key24": "4ULghoZ6EsPVnhQxPX33XWMovS6pArH76aRmTcAdRcYWjikuspPt3HqqgSg9XyjtGqmZ5DH19hMzWCZiFfCoydqz",
  "key25": "2kNidDxVnnkueQB4CxhPWomfZ9Rkixfv1En4LfDC6J38Ekw1dPCcCc9CsNM4YnVu5rBcH7eyuC8RHg75tvjighpW",
  "key26": "4Lc56g4xUNpmVp8TNG7XoXLUHworyYciuccmWe1bKCbRcYGbbnHFbcEtzU8MZ5XoLcfoeveVERkEAHyvTFFsSay1",
  "key27": "64nzWQHCHnmja9P5EB8txATVgXU5wpXjQsqbjVwC4av99omx7eEj1ZBCPKPJj368Ayt1SdwH49zWoxgt3zzwqgtv",
  "key28": "3piwiZBK89nZ5EhYM8fCGnhB2MrWAiBYkXk88JeCF4SrB3CQHiee57aVfU7BCyKK8F2iTDzihrRzQbgJEyEXyazV",
  "key29": "R6b7eWX7XdrEvfof1n4aGdtiByqKWqoVH13c8VoBx2hg7Zrdq4mmyLScibQZ3EnDiN1QYRz3CJZjBczWnFAo7z8",
  "key30": "5mZ22pyyyDpYqYjVdg5eGv6F4ALMJvKbtttNh1ZLFR8gwaVA4h4CjDCZHZtTP413CZGWuc9jYGtJjrEvFsLB45vs",
  "key31": "5JQrk9uNt8Hz7G2fZbafDcVMroHvDYxcetjJ6ZLMwukH3DmEPoDR3RwPEj1Nw7d8w7nFoiHXi3RCrzpNoxgdyNB3"
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
