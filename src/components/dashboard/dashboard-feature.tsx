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
    "4y8tPN8o3LokqVV65hSDCWrT6DXUy4iaAZkaxc5SDqDtrFExpSL6ZioNSYsF2BifvgMgoK1ioJyim1jetHEH1FKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJ4XKvXAVdVL3SvVKyeyFonJvux582BmFtfLmQv4BekLWtm7fHFo3wYz6xkXtgv9tmPwx3sjshBUJi6zGytUkkV",
  "key1": "256xVzWo2nn6ZR95TGcrAko9yAoopq4Ae3vgh6hEbpQ9m7HA4aipvU7q3RsRL88KAsFhkVQCMSfiLPkKAG1MdCLy",
  "key2": "2gcVGYnKfvy8EtS3ppHWhjRFRDKwta9XJ1oSVYVJ5rT8CqsktvQRuGs9CbXQEba1JZ4J9846p9HG8RSDsnd8t1S4",
  "key3": "3jSbADrvubSwbj3BYQ2YMHrV6EEM2wtM6MEXxiNZw4UDrkJexC4Fiz5fGxqdCJVkR1UGHSyjfaKMZqukgV8bqgeR",
  "key4": "mT8gmCsWSjevY6m2KVdJamX6UAfkS9jizCLbr6aD9UVFd88VJrnN9aZtrfTkJ1aTpPLKtDR7b8NFsw8sFzzmkjp",
  "key5": "3MriYDKXUx1ASUmgnCFxcj7WHk7muKfANtPfVY89SWosaKorHoKGw71TwvpbeFTJcGzdHuEdQKwVbsKJuiX2wk6q",
  "key6": "2ycFpVzn2eEARsjSF2SPztk19TBXY8h6ekT4CDQT7WkqD48wHYBqkNiNSwYScdnbkkXmUBWgJ1ENbXCr2bHKtTrf",
  "key7": "xWZimcKPges59Y8Hp9pEVHjiftFVQK6utJikTK4FJqg4UhqNDB6NF6UNKB41u5Z9XTV8GAEVN1TUhQQkSyGEEJx",
  "key8": "UYTSbzSdnHh6nkzFQbd5n8cGSFJeVujc7cpkGKvM7Dk9g1KBPoYKRankAgWhjU6Tx8ZhhdbYfSLKv7DWebBYr6g",
  "key9": "554kY4vpRfoc2ZBwWyJSguus7ubLaV7WavB4RwbkCAoFFutKyxdgqsVWdynBo8keY6vprFVaSditdVpTZHDfMSEp",
  "key10": "Ax6Mv6hRxjtLe491BLHBZKsofsMT3cVqTZXV2FJ6GRDP66RY5gEEGwNNuhyiuRhs7xDMKra84uLfTPcSichvEGD",
  "key11": "2vzuvA3xS52Yc1poowfnPBppVMJMq7iQpijs7zEGnYnj1EGvtrqm514KTZBWzawoVDBVebDEYzwky7Em9Q6cFCWo",
  "key12": "jj7LdB7oebLCWNi9zTzgEcvwzuMxe54FfW4kDGtSLSNEJA4ChhCvN8dhmYh1SN4gQYZrCR2wz9tFjEjPhevqgjs",
  "key13": "66j2UFGgGfK63qqYa6SwfmgtF7tS3cZ7sdmjyuNwFhT8zFYR3z9vQei8ersn6DGbeqd4Jv91KCo6HVwPjXmsz2YZ",
  "key14": "4g3EFkWgDSCuwnWHZGawrm2SVyHmCSQRGsagAJbEaDqLuec5ZZ5uttdV5AZBU7QVnfeb5AZg3uzXKygikGZTd4wH",
  "key15": "3X5mPabMZ7d7SjuPQBbxjskjYPDLmRzQSRZX554jv8xHHYtXPbSgxMVbeqsegRZt3AXaMsCCCnbxQdy3iwzBSP14",
  "key16": "3tPZjicsXa8ARSTpNAfSJvLGRzHCCb6q5QL82T3BxSN7hsTHxfLfcZPHjCoMniXj8H24c9Xw4FFvTkaXJjqu2CWW",
  "key17": "4xHykDxL6W8biM1HcMVmsVSNzw493ozkvP6zywAoeZtvHeNW1xuW7jLYiSTVxjkUBhS4zS2vrEDb7WhPxLkfY6ZW",
  "key18": "5oEAzrKnE6dbmpgjzbRh8xUYXXzJexrfiNE5vQH55hUtPHSNeFahhXJMuTFjqZM8W2taF92NCrqYP8T1AZQroVoo",
  "key19": "5tn5PgRUbA1cncQuzoVf5VkYo6oirfHLMd3qwR5HmVheJ9yBgsJSfrnEZ2HAgsxbTHapXH1n92KiK9ddDRfwSNbm",
  "key20": "4YDDDTsyW8SQFtY39FVnkJnmALb4EFWgCbx6tJfd2huCbP1DQrFafLnrSwHuC5Tp9VehMter1fju8k1i5w9rSEfG",
  "key21": "j5yq3jd5rqSs7xQs5CeJfssbP6NfmcLBTSsnqiAD5qG49BfF2cwYpLinCj4foZoXVndxoeaVQbewonM9Lb9yM59",
  "key22": "58juXTwacpYEKduHf2XQcLAhqVtmMzwnLTMbF7Cc8dGzH6jqNKt2PEZgncoCMPujaQnRsnNunpsfxL4Q6WTDBBPf",
  "key23": "65BEZbAhcU1LaC3MvTW1f6F44MW78YZDrzs4maoCYBZSDBgZtSFQPJ2aixJEWkfc4haE4vkYK1yE1wT3ooEK9j4a",
  "key24": "65hwzP2Nz59Xq6JSqmXVP4f2VRMSAesgwrgZhEhAZfBVzPAhvY4aHmzKWDwqwPrDZxaTW58t2NhSaEbqkRgL6hoT"
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
