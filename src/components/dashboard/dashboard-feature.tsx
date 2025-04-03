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
    "29NjA4iAuCAPgDLqi92NHxnEao32mtTqbJMzayUcbCFieYEYR1MvsRjJtEq3A9DvoXSob7TAo96sSdz7JKVKb4Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34P3c9g4Pkeeur7nsKbPbXQkvSasvibJxKGoLBNx97VUdVGR5DM2wYGkGVVAoEjWAQYZqfAcUCEV5yyhg81Rmt5j",
  "key1": "yrDqoKQs2rDJAK9DuK9rpNHRYEFCy8cwKvFJ5fUJ5wdmGb7EH5rPyZGhgjuNHnBUuVGFZmWJ9AZpq8MDXrBwzFG",
  "key2": "i2KLgBKtSmfFr9AGhsEK7z5WeHooJGv5GdGKPmZVo6853u5L6LbpRAbyDaBC917skNtycaXbztZsjqiJwJa2Vi8",
  "key3": "44X1LbrHoVXTwB5SMEHzaAqyrLGSAXcmEawbujBWXViSUuWW7hBQq2tY4NuN4wSYRBTVTxwQ7YweVjkB7D2ba8rw",
  "key4": "24pd8zX4DiTfTzX7ndQKSJhXg7YoyvHccY1XE87uyaXQHY2nfZge4jXzx4neSjef9D3TnTY7A2hhEkHjidVkiZww",
  "key5": "3QjBReEtNUZjVrpJzvntsLe7DGLfy5C7C4fWXxSCygVsLViXR4BWcoVKvhY53MbbHWv6bTpgKjmzMspBDbiv2N2g",
  "key6": "3MgRPWzmMsLpD1cuBRfTP94TNXSqqRZ2WyMHDNRHbDRWSh6i7XYa3GskYEwbxrmQPCZTvqhzgvbzCF2Feuh2vjLt",
  "key7": "TqeqkaaucP7R29XrAma48wnUexUiXKZPfxbgKmf5xzDCNqY9bQZaZ78fwiP7DRwfPeb2FVbbJaM7zMXh5GwKznm",
  "key8": "3GMQXENc7Wia8bL19sgGqYHy2QeLWYjzys4PfDzrcxJH16scs4Dqvz7ArnfYozgmXVUBATziEJdQXUBed7CbQpbc",
  "key9": "41U7swz2qteCxuLTiUiXJ5wNJuqNQ94umdViasvEHpsmbecdU4ReYn4K3qXRYrhnhQaaL8dmzpwzJ6GKeH2VLjfz",
  "key10": "2Jo9mCo3nTJ2ihp1T1HyEg7hf5CFc9wPL3GjH3EjEuSVoVHmAdYe9GXYRxevFUR1cZJdgy6kbmb3ipqPyZejKGvE",
  "key11": "4LgKxmvbfiEVGv1Wd21KGj926Q6XDcYjYMno6x5LgiVoYDTXgNP8tLFPE48pB4aS4NoC9YnFVaUJpMawc8TzPKyh",
  "key12": "4CmjhNzNdXkntMVbvQNz7J3VBiPKMazdui8VBJcXPgz8Zi5kVAzsCoJaPGk9Tp85ZDMRt3JicsU9wS8SHCFQdqbJ",
  "key13": "tbgaJoWdY9wCQRSC4nkHuKN2dffm3jLDjk6TLyPguq1KaCUYDFTThCtmwGys8vdg9k9qVXDcrF5FDK5YkLh7uPR",
  "key14": "4GtUmqkHYhkpLtWFCF5sBA4wpAsskT5hrhx7HpiKaoKDcfRXfSu8J3rCrVWfrb2ZAYUtfyKP3qf1ddw4cdPrDu2w",
  "key15": "3dLvskW6jFB5cosAneZU59EY94Aht9zxxCNNM5m7rkJ6Dm39f5wKwY522tEsC8zbZxMkBec6FdTiUtp4EJExb6dJ",
  "key16": "2pdoKR7MgKiZMSxVet35inB59czdMnLy8Hsy1vrTfJh3txTmUqFc5gv2JUabN5KJeJcYfrvEKsiTCGmgQokQERKH",
  "key17": "51sC5qphGjQbMK87u2sXEWrtpBm5dnh3BBpFFf8R2WMa4t3M5yUAWGGExXQ4kGCCNzao1yFunQr39ZAuaKviXMgQ",
  "key18": "2vteCVExJ5uUEZ5kQGkjgDDZeDCLnGpREtaEAZhHpqwxV3AbnhdJin1ouX31etTwNuKDgSFf9JRC9bznboQzrgbc",
  "key19": "3WeAQBB2SQ5JrTzy4JD7fSi1XbGkgWk27M6674dkiuhhurUa8ZoXbgmmxQjDnQNoqa7RNQji1CX4NUdJiayZ1Hhd",
  "key20": "52BrvYaqJypyHQzYSp9sYp1aao738fnUKRb4myCxE8h7r5bMUhqQMWC9LDYToB7K2DtA5ceYtdsXvthiqQZCEqz4",
  "key21": "2USTXUo3FABorm4ps2tN6gzs6jJ8QcgAWmQn6qq9mz7ACxVRJmYRuQNnzEz4FXzYxVcGzZbWtvpK4ctDxtrTpnVk",
  "key22": "45gnTASqZHwW2FgVKZqWUFn4zKdX9b3w8Wv1qnbU5uUzQUJ4SeTWPP7NGS2PRS4FVGG2QproF8gcXB2hS44wAWJD",
  "key23": "4cs6ubcTz2rgzpHuyDzQnQg1dPkDE3nH55MUhFLsDt52dFaFyvFPPjwXNrki47p8ijJcLtK8acsQhD43ju1pCCLa",
  "key24": "5mS5ouBf7tZQ4UiwBUosjcwRypvV75HFmu4oBbHJKCSGqAYz1g73iXcKto6u8X1W83yGtgmJe738CTUpq8MHHCzS",
  "key25": "54UMp8EKFQDK42u4ZBcQUbTGKyZ2q9i8ckFeK7gnbsjyazmCf8bB8UKtzgzA4HDgncUYsjtBtq8zG79e2nqoMnnm",
  "key26": "5EL4fMN8gLRcsLNdBZvtXcPXTUoAouafD3mNJ1xo9ouH9Wb9LPmdNRgeBmVAPRrCU1E6zLQB7zxAEqhEdLeqfeE4"
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
