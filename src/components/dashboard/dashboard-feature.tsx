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
    "4UjvoivsB5Xd1Q59kxf4Mojug9GEdV9tzoQQADa9VGwnqhgyHMYrvW45786aZQj2yZV41EN8rgY1uS8otFtKhzC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MPXn9HwtGcvpywx3HNqjnteBY365gamr73xAqnx37gFihF5pZgg9PCpGc7nE9TgUni48pgh5t6BoRCU8eYGgsGY",
  "key1": "53Qq9mjSaq9uWeQiqPnUPhSVLJEJ5HPF2ZXxp6UK8s6ANobXWD6WtWZQMrq8kwbo2PKbshW6KGVcM5nAxAZbZxKg",
  "key2": "4zshddB43uuyArDsn4o47oksWz4eUa4hrydTvdAhiPKX6TsNDQbd2jChNKU61geoGTqbSR5MhwDSgFMszwnwESrZ",
  "key3": "2uLCbpU285fbu2nTkDEeMNjZgqzhKNxsD3LQMY658xa4H5TkQJof6gSTqNfHfnyJrvYivEzyLKbPsthKhqRgAtXQ",
  "key4": "2n9BkWENrnPpvaxz2CiS4hmm17p4eFdjC4NrRqBxWVYTe8R75taGmZ3BtxuBVVQxyRtgJYaqvvKy1FQcxcXpcrjW",
  "key5": "42tod3xZZmnUEP9bjzZFid913VFd8sPZbcgPT6ySEYcUgs3LtERLKBQU9CjmV9QN4W8GVVCzx1qbfhpfrqophzg4",
  "key6": "4WhFr1zTw7BqGmeZbetQCn7tBYnT649rnELfVMziPjCAb4z9oNYqMCkszY1j1Hr6EQrkKCVEX6fkBdJBR7jif25W",
  "key7": "4T95B8mvhTutrp1HgAANmwruAB5KKMikqjcYQeZXHhT6x5X9FCVECRQESyLrqW4KvhDxHQ2aqwV9oDEQHHXH22Hw",
  "key8": "3wMrcDE3H66kdbFYCyFUcNNGJkWodUhJxYjqvXNHQHXF1rQvUJFo12v6ZsUTvWW2GLaySLRHpebe8Z8ShdY6PSqH",
  "key9": "3ogTiJojCvMw45pcUn8cULdVDZ9SBRMHDWbHMR4pAVakpgdsxmttU7cM5cBTfFUaH99eRhzCEKeVNfHv7ADDNfAk",
  "key10": "61N4CLT7oQJx66iGdgxbMEGEcHUF6h2HwGdnAYntk8tgWqPh98ZzBt6mwaTh5g3BQFqBXud54WkKxfWfUbjMgSZU",
  "key11": "2fYK8eQmQZYfH5DVfLT4XtDhakCJx7yuSSm9Vipf663Z2ZQto6SG2AGcaP9W8pSzTpfxAXR5iAiGi4DCuL5NiwwC",
  "key12": "2BtRpta9qYvSqYJ4SdgWwaxZeoJZDisDUNcHyJPjZCZ55hLm6mRQa9QVw6XQ4FSxEhTgy6FaiqCGXpf6L1UZRuuY",
  "key13": "ZH5jgDfNkSYPzAu8rgS1rKyVCQaVE9CfrErpg7boEcoRtALQzzPBcbxQBPgC6KZDLaxJbuLEadDAajt5DJ3oHPE",
  "key14": "49tTaQXibRwft2bmaQkprN65F23Ukabhrp5TdFbvDjTndiTiTGRQizXfAGYoo83GmRtR7h9LFuiKAkqH68ykxRVU",
  "key15": "2byabWgHT7qrZ57d25FwLZF9ZpD266B4JhT5yPFmxmqbsrDaDG6MXFmehKUshx1r2U9Sk2mn9vutV1Y2GjMaA6ZN",
  "key16": "44rScfZ7wYKJLqaRfF5T24JpY2MgsTdyMk4rwgG3Ms6JpX1mQvvpHfrBx45WXs5hzehe1qSVjDhzDrJaGj1v6q38",
  "key17": "TQdqJPPK4ASSCuM9x4z1Lqd9omyCGSRKRjSoME3HMSJfaTXe5jeBuDbmyeuBBxxh5BWDCHFbeLogekZ24cGzebb",
  "key18": "3a2ujAgkh9AcLwVuVaCnc9QgMvqUa5cK4WQLTGx1LyqhbPRFUfctuS3rdFrhXtFuByCviHehd3p3U5KNgYvs1M5D",
  "key19": "zze1aS5aMQfHw7zdsRnnEsgj4YntqFi1kURqoBM8eXNgWA5o199k8wLgAjqbWibQakzSC5R4cyMCpks3tc7DNxt",
  "key20": "3qGKBpYYqr521qzUkGeW5NghsMpMfPPEo8Dpxqr9p83dRXZEsFaDAaHMLKevCiwNB7R6yQd2uM895GV33SAFRKYA",
  "key21": "5LLKmgYQXKysUTE2oW9rQGwpoZWJSbtdFxaH8pHkCHt5L2zojFPBwxxwQLbQ31u4JvRKMmFLDe8ypy3nwjyhQVsX",
  "key22": "384HVn7Ecyh5izSANh26xFADoDazk767NTwmQ6LCfaRT8ayPRY6KHSRfqdzKirhnbKJfMQq3XY6874WSyStR4wt4",
  "key23": "2F83GbYCgENEYTpycjW1VTZYRFfLvGppHoBtzgfhJv8wTW5h9wrWPqRi5xCiKcAydTry3XGvSNsBuNBgfakzDWDd",
  "key24": "2QoHpemJPmYatkuxgWyYjjqaXjbv6Bq3kCXiAZL8Q1KTmbwPqT9dCRjsoJt8RXcRBv9tukPDE6TT4nsjiDCwXC28",
  "key25": "49zgf8gJm6z24q6mkLjVrRMUS2KScYbEUyrzkUm9r7zpvXUg3a3Din5JvChNMAvgP6VNYjVniAFRL315BwZJ3R8g",
  "key26": "x5BRYd6FcesyJN5AR1ub3SwK58UwXPkiR6kutmA9zuSkYcL4PzMDKufypWZzdAVL1zr7VatH6oV6KNUXkWsPxi8",
  "key27": "27WAJc4wiZt3swGvxef5c4bDtTsa3ZwLVpkBSWKAq2Mv4qcWiStSYS9TJbUD9JSg7jPWAWKq76zvHaDh7NH3mNUB",
  "key28": "mbnNMiZXZ4J99F1ixQn6RXJUn9cu5Sqvimfqn4aCgd5pqFKYx8qdYpRsSS9uKutRh639v3YtoT7qoTiScuSyRHF",
  "key29": "5RjeEVzzKLcCoUGZV3fRKzfEkTrqaM88BuiW8uJfMdnqphd2HDkNjgKby2atkAjWna9pPtzo1axuxBKWpXq3waMV",
  "key30": "5pr69DygDudQKKh6t2SuWctvQ6sjrGqoZvLyVQbLcbK6mBgpGhw34CrgTqfc8Sr9RkV8Q7ZW7d7rVcYyqKzBnndo",
  "key31": "5SQtE6Xnihi4jKjUxYHWKr377B1DfgbSVc5JXt2P9msV3YQX2uf6Lz2Whvk4XErjHbD4KXkzC4rBw4pRRYqWSNLq",
  "key32": "5gjrVM3oUbktM3Tohw1WRGorUTpPr82FaMxK9MUWbFBAEiX94cQ36vyNju2Y7MaZEfnWoU2wBbnYQBofmMW3LrzU",
  "key33": "3MbWc1328XhxZM4G8ai7Wn74QGzpJ3TTjRBCEyCQxSyqVBv5ahkDmLo4uz3pCBrSP98TZjTRjPYo9Z8SgpjKbrnR",
  "key34": "3Qe6Ceau9bGbJL28TdDZgguPFqWqPkBrzDU41YQ4DWzPhEbhnJX4hF4uQVtrxvzrAXnoAzbzq6rnUh2yQbyNvEc3"
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
