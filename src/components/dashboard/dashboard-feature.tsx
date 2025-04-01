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
    "5LPoDcJpoMSRnMuNMaTTkxVEi48SupFyupXeLDg9WJoePsz8mAHG3H9bW14ta9tqHKX5yBPpMghXKaaj1hB8qX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNrGpXcBrKXfjYNdT921i6iZpnQft7hkd75e7PHZUwB3spficSjMB6VQdEeo6ZHUWU3iDUKZxHGrvmmSgjuGcXw",
  "key1": "5aUScu5GJ2LYpomixVbz78Rtv5UioV2Lsmh1PPtxyaSkku2G3heqmZVz2jj1d46bSqEMjn5ZJp4FxWDgkde9LkHF",
  "key2": "5EcBiyBqBL57UvDKeEXHpsVYLopLN5xDUE7Gk5dapF3Hah64thsr1hfr6U4ovj4fhU3JUrTDXXLyWGec9u9Xfsn1",
  "key3": "YmGPixHkggrfeTf8dKkiqki5HgUARPWwsS8Dnwjnqp8bhBjygWX9WSETKx7deZZyKgdgj5StUyuzPVT2dW6fMJq",
  "key4": "4givpFbgpNrAwZRJqtJZJs6aeu1h7xnA1A6b55DG8umTRqWdH43855zYqrJ1JHnzBcrmFNZtpceEKuu79TyKgy4q",
  "key5": "5jgwcH7bYAZnh8hSJX59YTpDXqAS8U6oaaRDkDY2SD32fBZDJVMWvkH2gC2uNvSrdpw3eVJjnqstUPEszD5QzZnS",
  "key6": "ST1fwhuQWG8B5dBNgYW9BTDbdk4J1DsKtKhFW7YWmV6y6C6v4FkUFMRephqStfHyfBZz4Wwo4Fte8RbmaAM3ky8",
  "key7": "2UnGNxfJTeEtMhFEcDkFFiDD4BaJc2VspxWWW7pKFBiMM7d8dw84bu8HgrL8RYrgxv1nikUYnxwMW8T5BFfGrFJ",
  "key8": "487ubHMnXNoGqL1GtGbtNDG4edfzzb4VufGGb7qDDsqfREXEA51Gq1wA3ttD9hoD3EzpRC12WPp3VD22utJ6MhEB",
  "key9": "2PxThWt6Km2S2igwDvYhs2szjr88zzv7J7PMdmNkpRJ1rKWrBbHYHTYb9kYkLzUQ39W7hV6igJZW5YMeDtFShkfy",
  "key10": "5GvPRRYp34uLG12grzSKbg1WosE2ogLVh9BB7v3W13pXqhxhCg9ux8ko8zhnkXHuW466THALJKN3Fk8WrJNq4qcR",
  "key11": "2Ssp8qYs2Tqg7q8Rysre5mEBJyyqURRJDkTJW1PnW4taZXZ45P9cNvMDdYBDbs181fmTsmZj37oYyRYU8p6VXr8E",
  "key12": "51XfBjLhjpPhYBskTUFPtRk8DZdoHcXqXSp7bdsuedcg6jD4DQjsaPaCmhvFUWyGvqjW17dGzfFtP1EQymMpzaSS",
  "key13": "4XJxg8uwvDm65Cfg4kJ2pTbBuGBWQVAsTY73N8zVytiJ6au8XNJCMCaituFrfTqbCh4NViJx9JChebYvRj6nBSgF",
  "key14": "3AVmDpti6W2GyXzd3i5PBEDJYosy36tduaCJVybGW2J8zxXm5SW3JrnkdqjzMSJCnSoAbQM31XRQ6Y67QgfMPjfs",
  "key15": "2Wo9KQrP9X31omWYxytpwgP6uVT2Ehw5eido1BRV1Q8KXkVSEHUxAuJ2gvw3W9qWZahr8sfLqCTuENnCuUo6pa7i",
  "key16": "dNj1VQFErR66BKfT8FrumhtaHwrpgEePshVAHsvi96i2PrCQtm8tYhYvtRvKCwDobEiAvej8LHMgPYxazNXyzFs",
  "key17": "3yahy1ec63h8q7QEj7WyXBHA6CdMkLfmhDjWjjSeSFQPZSTJn4FPWp6J6j1UM3mHo4Jz5Ww1yB5KEkMCTVVpMJ3m",
  "key18": "f8bxg4emgykqXL8LwhT2qCzwbGdGBGUcyZgqMLakcSc67tzHscvUu1iituGZG2vUE86TDCv5EqVDEMcNntMS4Le",
  "key19": "3LjCQamsEiHEym97APTEJQ4Nt7trz4UiCKhTh3ErN4V1HURZ9hhdk2RdirwNcZQ335Xoi8SCeMvGBjRsoSF1rrn",
  "key20": "2XvHzxVmFwARvR9EnuvgYa4fNfYLV2TZ1iRQoA8pE1bsy4BQafDDyeMFeEUJXh9bT5eG6y9XW4idqyTqXppzaZFa",
  "key21": "4n6eXMn8XBa7x8rx4rCX3qoHJ2b8V7ZNkxB9cwE7CkubWcDsX3zkWM29AwvnHLGjAB959F6aetvbeTfeuSxQmMbM",
  "key22": "4peTzGiVzSXoX8H2DMScYSfJVXQaVvbV1bRgTQafgupVzpPzJ3xSqUNe6rCRfAZbCZadNPTvzUAhWiQP4wy2VaJg",
  "key23": "Nd7FZcYKbqa7TY753jo4tDFt7eCPpQQqWjmURq6h4z3zp9WJFfGpLwgfetxHWUZ2XtYNcBWVkWu9wepmzbgZA2K",
  "key24": "ACoYjyjXbBg7EfPYRLfVU85RNTrpkUu7Nhs67AsRC7eByr3u9JtS8CiFnk5L1YJRAmGVQaPRYCGua1P5GSWi8rc",
  "key25": "5yfYx1VNYTNbcTiUR9cJgUhZYty5uWC72EjQMAaBhcuLndQdZ5E8x6Yf8VNbvEjo2wXWW536tLK7qLQ3uwv3MM9H",
  "key26": "3PgEo18BCEvLRymiwifduqpkG2yRnFMdovHqk9ZjBgiV1X6Qmt4saUpvoCchjpTkyv6nuA3ho7U5xfiJu51aVN2B",
  "key27": "473i2rRECixS86mWzz8Co38MDgN51V1EVMsZVgifeZNNFak7B5jbVe2pjsaHkhX8nZ4wArJ1KqSqFHqzaTUuPzCt",
  "key28": "331vFA2DSEEpdVeK2FGGMbc4jGPsNqsT3yXWowGRCmrQVhCGEcs6RMCbHF1PTPF6qYYDmT2ph3pcLPydvAomyrRu",
  "key29": "yGzvyzoEnkozZyDjzwkDiqvEEf6KijyrjtmR2ihDqvSSjswgYqudrmzBaTumihSMrDoJ9XgotF9mSND655TWadr",
  "key30": "XZzeAJb6jsWgArQHtQQpKcUoXWtDkZoCpoquYKMpmqXASqRkCBGLuYGbfQEQ82UpCi92cAWi7JcoZYArvUE2E6J",
  "key31": "kyvSxc3cvbSeJKRL2eUZA1E7ym83SfXaeYJGqFHiSeTuwaGZTUyYJmh2ivg3RWhbqMTC7MmxqvoKXiyi918TZf2",
  "key32": "3vdwckj4ZNu3NNiWL6EQteZbBHi68eSocHdrf5enXsmTWix296abK31tAAYgTbbutFixR3YpT4Qq7bPe1KDZfdcd",
  "key33": "bKd3knBErcyEjYbyChzER3Ayjhz7G3Q8hfmEskKfqCkrgqnZVpTUoi7h9JToZus4bZCmzsBQMHas9xaYoynYJbZ",
  "key34": "2fa3GkR9azxJBAXQH98EA1a9Y5HSgqZbbkNfvPsyQVb65rDFMqyH5gHqNyjAgd7StDmDyHoPSEmN94aMLj8v4bpk",
  "key35": "3bjJiPvduapzK5ajr2NUZu6b7T9CzyoVMHd9QC12i8DmADjbRAJPEEuNexgeH8Sv959paV4tUZUnVhjP46JWeaPs",
  "key36": "3YdYZkTsthEvDbPqo9XmTfLFjxHfTeGV4jHHNzJtSwmpZGfabSJi8FfV1KRyQmpBaHWAAWjGzpK3aYW9ZAEbb8T6",
  "key37": "56odSVpghiSe3yNNPSkjRGYJfnREvSjr2HDABExkhXQZaFELiQxKDLYeJxpPbPRPVpyaMSSV7oVwFR69CbtdPSnS"
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
