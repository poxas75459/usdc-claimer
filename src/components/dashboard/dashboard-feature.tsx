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
    "2A5aW5D8WLshr5sgWuDayKqjVUZfJy2eGH3WGAANULuX84UmuE9DKtMmf4MjRCZ2E6wov9hcTRyKLEycHFoxAEAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoePAnRnzBDjcjgPbms3E5qfUYr4p6UP6fQg2WvBCALdmo75KXVq4CQGKrpPYARcv2VAY6tB9EobcnXiaqcU8QC",
  "key1": "4fxunoRDZDM4efw9xUVUUsxrpe4RrFYXSNYjiNj2jTnfG5iMDLycFws5wkFaecAeWbAm47X9hndBZRF4ftn1PqFH",
  "key2": "3hMpSq3cxvia62arwUNuCiGocRUGriRc2eNHsb1C973jQYH3UTrzXK1iasQgWU2YUFSCYboTAoXiNi7oNSMrJSQL",
  "key3": "5XzyCnyuNDVCLEcKWBxj4rLX6YjEqL2go7wqYeFYA4pPKiyk8nsAyCJbJWhMUGscuEVQLvLz2G5Nb7KVZpFBeuA3",
  "key4": "2QAFQqw5fntSm1o55HY2oo1H4k4Th8hjYrBF3jkWiHrqB78uRC5oKZH2wMXLLZbNkJ47Nb1aee8RygjdEAkG3NnX",
  "key5": "5YpUwB6K7Nynz9XZSf6WXWGQsVp5y24iZR83x74DGrYPzdDCEwYpG7Zz1Ljw2qiSBK6kkuXdyw1987JRtcbMM9mJ",
  "key6": "27ZmviQX1g25BQVDuTqSvBNRQbW85qxSRwDtN75F3UBD1WPUs1BvMvqWGfP4r4UCJTyGSTYHk2kAYsmScFyFejq3",
  "key7": "2JMDduUCFz3RYVbEgwvSxX5MUUfrTBZ7bQ4Pik5VUTvxPVhzfmo8ZQNTDm7Kw3Ajzk44s6ueSSuJGnnUuFM7WjKz",
  "key8": "3NnxK7ugb7ixBZM3hvosXaPgTMFXMDNEYornzEhxgVpGZ9eUbt861v3awvBdewveJBJ8PaZPzqJD8vxMEsnKS6Xw",
  "key9": "2zhfaojBf47Ufg9YhqaVpHV9h9ASSYkgkGUSEsh8c8Wsxp71yjpYBQLP5dVGE9sAoCSgZKd2CaATZib6YbsH3uo6",
  "key10": "5giVgm1WnhczNrmWyXs53FPkNReeWrr3n34kvwqqiuEcDxqGuJ5hy5dkQRqgZcuTh1eVNBkf52fcNqJUuU8brWYC",
  "key11": "LSu4YnFcTfnwLaPravbTLuRSVyUH85xWN8zCTtRmJHnozrgxCM4tx4ZvpBzMdYRNWFRquo2hFUC9tReXejbecMa",
  "key12": "2C7DD3T5N9XS4w4XNpyfz22sorXDu7y1FSbMq9rH4kHgwpn2QTJjt6xzVZJNotQXTY4w1CVzkWYMctLVApHkb3pz",
  "key13": "4DRcw3hh9t7WnqT6aikzbQM5jFqGjbEYHR9Zz6Tsh2sFUzj4Lh5KuRnFFmtcko9cUFGiFbiUiDmWuPGheZm1RjBN",
  "key14": "3ErNNQKRLz7oJ8s75Tq6HPRCVCXQTz8yn25E1VuhDi3kovnyo1dDJv1NQooxxAJoZCMDky5V7Q5c7YenyQdPEELh",
  "key15": "jes58c7p5mBSkP2Yxo3RnByXN8wwGbBtbHvMQ9mdK2huJ4UXbgBi2DUYq1qE9KvYpA6ByRTvngpNteBJey1hYJY",
  "key16": "3UovmBuEQ8PmEsUiPyLiWRE1d8DJZQtissALkZpATriqgYGN1FpMkxAEAMSurCdaoDvK5nrvQ4XyxMjp6aUokF2t",
  "key17": "1Ui8sW2LNHEWehuac3bGf5cW5s6ydbfNfyPYib4g6Gk43iseW6tkGG9ZKEqWYBwNSb86fdtkGtnPqp742kkKjx6",
  "key18": "4pyCDT6URerdP7PFeNiuZzscsynf6KwL7AU1unWvDJWUqGckhXeURtT1ZYem8HtbXBhVuznUu5DbH2mHKJN6rRpP",
  "key19": "5ZNwhewmyo6eJKDuVCfMeona3GY3EPtya94g3yyYRU7Ugy8c9VJ5qh8Ujg1GdCvXtnFpC2dTrvecsheBBWhX1wWf",
  "key20": "3EbGoD5sUynk9bszkeKmPgwKsCyrkwCnfygfM6JmA8ymSjxUfgBevfMMV9vFFKrwPDB29sU1gQ2PRzwnLNDKQvzY",
  "key21": "4DmPDN83Nn3Z233g6KJp3WEpeWiwgLPWVrdZ3La3zgXSZQURDAW5am6b5oJRZpnjuf9MSaqYaZ2CFdkF8V7uTTw",
  "key22": "K7CNNUn5onrXDQEGZk2oy2v3GRy3NVbb4DFNeudNWcQTkkwFmjL2Wu19Zc1C77eTSXiEw94oFu9A4rPneEgf7u1",
  "key23": "ZvJAEjhhRzwBDEo4NBvN9vBoHx1SnDKQADce6cvuBqxdc8jzeUTL5q6V7e9uNm7UA1YbrerCguAeGKGPPWV3VkF",
  "key24": "4Fa65Vah7Nr3MJn8WB6k5gBsyQQPfhyJCWiszcGbsfaWT1Y1y7yWYffz2ExHq17FLUa7F7fKoPDhzrCdvYEdMZrL",
  "key25": "UdWFWL3RPb8Qp9pSVrJjueTFKnYXymdY5UZKDgizxkUttPSVde2QyRUp4RNpvAP8rm5sYyyBwRXjqXQHmrVBaNi",
  "key26": "4JjvWYhcbwpEdJCDgDF1M3k9dTDy7CtQDFJLfmbKkfQiu6MNdCxfn61p1jzi4wSTWr6hW1rT69tEzQvGVyy5Bo3A",
  "key27": "4zkBWuG1CQkkC55kBYmyTzV6eb8vXKeSdNuaeLRwWrQfMrERJBP9WBy86sYt2y74uDmKQ28xDK8UoPuW7mw7mweH",
  "key28": "4H6PEZiLkvxiAu4GcCzasdBRszE2995mWWytMFci84w5fYYdDkGG495TVTVy8gwFi2VLSKhZg3Gt79b7vAXADFJj",
  "key29": "4uAeMy9Pc9sSxGCBj3QNsA3N9azmEmVdtRJNnor6eCYxyEVGpZJKY8Dj7HtPJu9hTbB1XPQPNwG3wreuPKc46RJg",
  "key30": "5rnPNHfDtEUF89tFQhhCPgTroC5uDw56xkyLZQQHnCwpQD7sU2A2y6aiHoki7g92ScssuxMB8CBmr3yeJppobwLF",
  "key31": "4Pg6mt6e92K1sS9Bwwig2D8bB6wf2FvSKkoRyrfbQz7CJny8FYRV9sQQb1aWMigokkfKftDJ4vf9oUkLRBoQWQaa",
  "key32": "46vcScCWBvEUFdNUgfoS97pdJc7TpVkY7vWAk4WNTW5zZfxtKeHNP16UebvLNZsM9q4612ibnnFNa99wM3CDZjLE",
  "key33": "nprph1rGWLyVPRopw1Sq7w3zghBaVbsMdnRfiSidaMC4TjBZSnJp7B9Hbqsy3RpgiixJxA582fwwPcheLD7WTii",
  "key34": "4G1W3QPLUds3g7Dx3NfL8m47bZxUFXYs2PU7aqePkoNEDMk8woSX3Be5tRyC9MFUfhSNEiKooSSJ5Ne9mEUB64rG",
  "key35": "64PTciPQPyP2Uj8FAaMukr8Z1NU2T8NH2daeMLpyNssAq8UMoFnsv32U4BK833azo5geGJZJt3WvqyeRD4fCnHVt",
  "key36": "tnh426hzTU3aYDSWHEjfF3mnSNC3TH9dVkYjdRMfLRKmRJv68Rg3vW5mUtDYe3KL1EaYwjUzXzrxUSbNhr77cCu",
  "key37": "WH9ueTadpRtysft9CNc56BXTpkTiEZSTyfgAu7BmQBHgWNtUoRhvSH6SgwhAcamegXt1kPZB2CHdLJFT6AxFQrc",
  "key38": "4Rgxd7swC23G4K8sGfLRg7DqVPDoN4itQUtb11MXCtTrJ8z8mUfKoAWYnmNBeHQz84qFdnKpvv2Nye7yDgDZaZzK",
  "key39": "5c2vz9RXW6FCdFver2WqZwSemDALGq5L1fdtx6AXP2uD7X4pwi1EowUWrdMgTnseavhhHrpBeABamdVRaqRN3bx2"
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
