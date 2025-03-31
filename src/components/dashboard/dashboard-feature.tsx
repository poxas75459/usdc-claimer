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
    "5YosfmLvvakZVTwcWJji6KDwDSN1frpKSkDNeNQ7PAbFmXF2rQgSB6tEmq1k83LkP46vjTaspU2MzQi5HSo2AgRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQSrFbKBCLRkr2nTPidpWVkMLhwvWHdt84hAzwK4SUDhiN3c3mRBvZbCfc8EjMwVbokMixyyiupZ5ZJW81uW8TH",
  "key1": "5wohZXKSXPytCwZ2XxArjEcLt6vGWgCsgn5Xrij9ENTcD4bJkvFb1fqyXbGZHdfxGH6szDN84sz4S5Ny8Z5cjYtZ",
  "key2": "5Y7ayHqCZxoM8KansJmkoEUJ4rAntZktdaQpBPgakU7GsYi1AyM4LDBHAUmEQtKV1CbnWkzAFFQUdsutLVxDuXin",
  "key3": "3XyLQZji2a72NTEFDTZcCbjyGqTVuk3XcqDbCCbM6aMqLSk29x822cyKrzX7aMwL4kk164bDonBwdQojXXZYAtS9",
  "key4": "3CBpGNn6bs5nFMhSDkE1WTCiFdaPBcuP6nTFFazBuT5B1Uw1TDZjPy5oLaXvSooMg7yVL6wAVKxJ9b5o2JMB2dNm",
  "key5": "4LPCdA2tqTJpGFZNDxMAB5puWRLQYhLhinbXYvhXB3Kgob4CCdmFqfCQthHP2UGRSq64CLWfTz8eiDRhfpixGDo9",
  "key6": "uDewAFMWUwrbeM3yD9qaztvcgvFQ1exB6SB3KpA9eaZmSTKWehZ3LgrSFW3ehNEJECPJrtJc4EVjEZhPNZgC891",
  "key7": "2kCwwhGr7r9CK4q1Sf189mfw6ox4N4N2Agj43Ab4dj84y6qf32Ln6jt1imrug4fi2mkZtapy7rRc1BrdTVNt818p",
  "key8": "3SnwkPguk8diai5uv42fF4sZcdur5cV9QNTFiYJw5VNzxFYWVEZhEfG9pGTXZ92dZL8UeNqyx9gasVCEspG9Zw2U",
  "key9": "2zDSAzmaEtsCpLgeBPmVF7F3YBK7quf3obAYywQPojUbyDXoHMciuHDvhvVQ6wU64bcueKZwMP6YfMwekFcaY8RT",
  "key10": "4MkX5j7FQ3roj9LEqh9KXoq69Rf5DGBmL42UbBKYVw4MrGzwbqBi2arL9SaBjnQjZe18mYEnYjPbutxwtmdgXtTa",
  "key11": "3a5xStHTT6rizBFZMZNPLVypGp3nc6tjM7kV86ZHnUGmeQRupqjvrVrpbVKVeCDBap6Pb264Mqh3Lsu3Cr6PBg4q",
  "key12": "5duDouXSkVtMccjKbJLNkSEejfsvha73sCogq2Nmx7Nb3x4jkPTfx9c6ha5StdemMnFarAU2vNGGijYnr5mFuY9p",
  "key13": "4BPsUZDSdsMBfvcb7D5jUByDzwQcPWGKEhiC5XA4HEr8Rr6mnKzxWr3vLDpA8K9dxevPGB7t42fuMKc5mS2zebS5",
  "key14": "52R4p6Ku1kf2o2Vwqs5bqfEsVmPKFF9awfMo6pfHBdsWWcNLrRMYvB6NTtCYKTGpwwEXdWYX7h7PcdkirGouQWxN",
  "key15": "pJEW6zPGtsjn2NhVVYGWHuosCjYZ3yJuyH1AMrykZMm4XunEnQ32jivVqSgyGpru5j6tT9djpETGsvNLqFQQ4LJ",
  "key16": "ukWmitHGpSQohhdZUqgXSvitdUehdRrqqPheJDCQ9M6xYydNQbWwPXgJQDawDdazoypeAjQeJxrbFPpNGazHD8k",
  "key17": "3UGEgQraDAjx17CU8GFftn9uRPNT2KWr74aWrJffGhKnbdUcx3QD1d8R1tN5nUeYZDBS9hb9zsyipKexGSDCDH9W",
  "key18": "3KCpbEwWc8ZaShkfxLCx8uyBZfzCu8p3xdKQhyDodmpJXjhohAWT3STiV3Quv9Fa2QBtaH1ND8C7woSfCVY35HkM",
  "key19": "BF6PfaFjJaiY7DqohPPQc5zWvGDeeB8U9Uj9xPYJcRYBQv5aB3Ae1oZv1HwEJUPdbRmed4zz3jWLDVmJT7XQQaH",
  "key20": "4Lzo7W1E7VY95Na3etgxSiPBMe5U1SsTkgT69zUz16FXp6m4LtKfcPq6veZYodZ2mW8WkpaHC5rE6tqrFNc7kVTN",
  "key21": "E8eGGbaheeRqQEtDYqH8gBMHgKQV2nJNcaHaP6LXb88vEp8Qehm5NHJHhoEAc7jj7VN2tWEtB3a2SwW1YoKk4S5",
  "key22": "5p9WeunZRnGSZtg2rFza1B5qbDgvYFnork72ifZa5P2YmaHFx5bFv9xHZZn6mS9Lth9PLV2mGPrHKTCxmErSHdoZ",
  "key23": "25hc3diKaRYH9xTXSwhPj5owojcWYdop5bQvsCV4yBpfdoU2QmypkZhLW3Fq358Q8D5DdhLaqiptbLo8xo2oP2KH",
  "key24": "5WPGiG8kW9NqBHqv8ZQEJywuoCcw6if8eXpyy55sCAmeqfEhtivnbfu6U1ysdHtyHYcNh1ZFnes1mto1NeXdUEfm",
  "key25": "2a2yQJu47Cmd1eEvZTQkDrwfAu4EYNhttWdZGEndtyJKyqkN685ZhofM3msHd3wSfwHYqnaXpATfqc3iqP96TT1F",
  "key26": "gtprJdsmFW47QdMaAHLUfdemhNP8iqRes2xK3dfBVvD7aUiW28Gki9EqXb83xRJMshD3LEAn4od954Tr4JUW4P3",
  "key27": "328QzftwoX3YRHSsHfSYLdBoyE214EFENw9ByFXAY7yo8wbfixh4evHywn5GJG6q7gziiELv7UPYD4dtYDeFPRqg",
  "key28": "2KadNaRhHajt7BmknAQcALX9xHF8PUiRDvGYFric7CSHvNwsDwAVpByiobv97MaZ8u6eVUdYEgyfM2zoat8HwF8P",
  "key29": "4amzHsN62bCw9qZYxcY1Yu2r3nXLGP41UiXmvhrG5QaKfbZWuH5d3aWYfJ4QYVBEfQ1QQoM9DArPjumgN6c4mefv",
  "key30": "3wRzScGn5wNA6NafmG3jZnNQwwu78kxDFTnQ7QPToXFrdrzo7fpNLWEzs7GdrRq34yqDnThCbC8d3Nzp3RjW9prA"
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
