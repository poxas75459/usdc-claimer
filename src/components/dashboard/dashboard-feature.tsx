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
    "3cRjp2Xq27xbiGdkfS2JCC6hDa8Ugu3229aT6EUjv8ZD9euTYrvB7o7NHxUD5QmEGmZ24X5nKuRFSRbEGwqRPkki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58CEYpXPM8JdWLkGkB1x1y8pr1pCmoHjw8zSUPkqHUjbgJU24KVCfMYjXp3T2r5AnWuWNyNC2hNepF9YzimFFvFq",
  "key1": "4DFr76pREWH86D1qWwDrtbDUA1HFmbHmJTEknRpKRDYi1ze1x3NyBaUrZpcLxFVaGaRDVBbciZWGW6E2fnARqdZP",
  "key2": "2mqdjrCbKbAwvirfH1L8MxKTYHmTjrtuKRNhM8D9J5WkcvV7wMiE2yHfMMNzeq998nnSQxhoSFAQT4hbWnRXwuqP",
  "key3": "ybxSwHLanj8gk1WgueY6hTJQvBq5r5Cbjoi7BhePWkHB9FBbxNv2sWvPZwxUx3W1eAfEi9NpE7ooAZ3vVjGBpLj",
  "key4": "2n5JWiYysm3XrPmeT7CM2FVUzeByML3uAtNkoE5BXbWnB3Q6pdoMNVMLpFowa7t6PmzStJCPeLXgfEJvePe1ZtJC",
  "key5": "4tUUmcqeNHZWhMvxERxf8qJmdXBqBR3YD9dPb9VHVfCkCaP7NkXgNWA32HeDt4Zhs2Z1ZTMuBwHAqZdbHm6DKojA",
  "key6": "45ufVaNEAuCz8cwcffiymvTrAjcGdz4YJffeYSRJKKRPnup49ADC3AEnarWkdAgc1dm2fRyN3NfwyZg31poKEHiF",
  "key7": "2krZfc3HBckNMosiKBNLb9AHEmRpRHEx6i6CDw5g88FUP9pNutLA9Fr4JgATexbBkkN3HrmPFz5eAP3rDmyLHhSf",
  "key8": "1fEdF4fHaRUxF4SUvFcFxaSgFFhPC2PK8SjDVZZhRQqZU2m4a2fC1fKvPoEnGpxnGjY7UqfgEHV7s54yRUzMNeA",
  "key9": "2J8K8xTnh1EVRziNoJGL1V2dEooMzFWpaumD2NFa7qgNWXiREYE49Vba4dYNSGZY1EQAycGJZnb7DzfSmuLtSNGR",
  "key10": "3KndajpgCvZVv1ta1UHFQBkSQZuqho7tw2A1DavLCUnVAi48fgvmkDPLETmF9pgaVJizhqNVtBC9X8tWMNdf6rSe",
  "key11": "4wWC9QL77a9h1yTzUjFWNM3qcoHfCXn9nnD5k4kdyYzBM8NcfKH3grenewhsz41HawjHxZWbKo9h65o7GD5qNSPN",
  "key12": "39tPFJUWPxGXCuUndQx9ak9M4Bp8UXJQZFYaLt196QhkuSdK3m1HuH8cfMMF4h2RiFCZTgc6b4tcsjUBeqQuzWmt",
  "key13": "2iDD3CcgiJkEvawGgQHxfVziRUuGL4jeTGsdfJvu118PyVVT95NrDEVimsmNnbi9AA1zPnRpHovkT4zkGuTVaRX6",
  "key14": "5X3FtHpQMZL4KULML9NBnsVWFnJYgYNEVY1U8F7tdT6PSVX2ujNL6DJ7sn7ZMKfr9rnRox3Nr6N5R6kDb952oPfg",
  "key15": "66ukpG88AV73ct8Y1QgyLobyXvqSLCMcS2WjxrTeAkBzK2byGHHMQy1gNGEnrCN47UFoKjwV3n7eKa9Y75yJRbar",
  "key16": "2RjLf47cZGXU2jjbTxwnZ4UC3HE1s3PRavVPxa7eLhXTziPG1yjMknBbt14BZCTzXPHfWtroGvz3wHwXapbdyDr5",
  "key17": "2BbFJ1xuoymcDgCQEGDRibtYZJUyzVDsV5nrDmH8Aq2GLKLiUmQRpozsDRG8gZVETVSyQe14mUwzhBCNi3k9pbfr",
  "key18": "2x95n7uH4jpktZw5jhngn1wn62yLjbhGox1Ev2Prtabz6QUKu9RKjVLf15JaMybgVhSXBQ67jyWsVfhA87YgjBXT",
  "key19": "YmQaTLNCb3M5w8EbN3WAPhW66QQkx7Qf6zSCVjT3Voj7Dmzsfp1RNQ1882EDDwQarhi5TqfViUQQVpNM4viqLMi",
  "key20": "2qMoqnQRH3G66McanioDcp4iExgJg6oX55mbU6V9XBmqumaygNfR3xt1ZHA4r17s5VeN9XrEo9Cv7KrGh71kKgVf",
  "key21": "2yQQMX9u49JU1MtBUrufk9g87q5MioUNkmNbGAH8Lpkhd6rQUkXccmFcunzSDvQ7SYtYi9yRgdApYRmyGYAcfQtr",
  "key22": "3UV3D9HTYxZQrbGAUH5SVtMkJTwz6D8wvV7DaQGmXJvxoU7W5Rzq1AVKB8ngqHHZpjkpDWtQMD9BKf4p6BW5P8P9",
  "key23": "3A56pU6UyKH3zowEF3vtsy63xKdVVm3feXvD3DmKguh8rGwWyrDo8wPqmiFt14hwUmAxQbEXxsfgBjg2Mh36451A",
  "key24": "52zVrzp4s48xXGSJw6oLdSRwnXZA2hTQx43L1i6rcaCkaL16DhDjP54T6oFJJRzbu8PfpredTCmL5L2UxRXiyvVD",
  "key25": "5goMGEranZD7Fuqjp29Qq84Jw27EmzYrPfEAZLeLLE3CQNu36nv3MPDeKboax65VjF8iWP27UaioLFnLJ3VAV2om",
  "key26": "5qckqTMzWyJrE7jYLrUwc9h8ebGuoNoK5fSgfgbp3364koU8QntgATagef84YkwjSRscf45zf9aeiLkx14Eee3JP"
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
