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
    "2JtPLkbAcTa9Y2AzH3dgN3mrjhSoG4rJLx6jLAmfo42q8GHqCXNvGLnKo9V3nYEecNoq7NViSdi1QPXgqa7hP6kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UinHov4kdNhPuooizzx8U1jmVXdpyKgGk1BKsDuypSJpKEerpvdszTvmiyJp7h6UB6zQKqTwUvRDor1anGWjN9q",
  "key1": "55wsHJTcbQtfmR9DJVeS2wEsmActw1wXfcENYuUMJKrSxPAEWWBGAcfTYeQz93mHi76iZjNLJbQcZjNQJecB6ttC",
  "key2": "4Z3ZggV7ttq8Co6T8hjpddVAhCEf3HZcxistPD9t5hV9FwnaE9nBzTSeuvSgKhTozX6wBVx5eTaGeAxf9shyMxrw",
  "key3": "577bQVBfAtJwJdz1WwZvoSKz12qneunPGAUUin3PrkR1ea4AMTrqXxpxA4HTNr7URdH7Hw5xBLk6pj7ZFjS9FqdB",
  "key4": "3cyn2EbsN6LoNq4UVeBs7cJvpFQcnQqHP38U6QX2peMYFJAAjnCS7quFQ9QfKACwKrTVuZsT269VzhUa3iBY7TwJ",
  "key5": "4jFodGyv7s2Tx6FpTDp5WMCquZ7SVKzpcbdJEqX4tjnP7TCSwXFxGYueaKxCgPFbNxzfmYkVb98kT6KHxk6TGgPi",
  "key6": "32CTsg7k4tv4VDXjgJHbfQzPfQFgEPuR2ATZLULhru6cYZuZm1eWRBeuEiGSxLBvceGTGiQBynaCAj16kvUDKSJk",
  "key7": "4ZrjKMu1vUt7GVZbDTbEdPbzDER9jgPPwYtq9RufhWP6Xtb1XaZXvP3qddGJR1BA36z7ihY4ijS2TXdx6RB4B1Df",
  "key8": "3nR6DjUt3to7FYwkrddiXv1prgDFFA6ePq7esf8MoJJp8w5AZJZw8ywoCrXLWKbeh8NAc52oDBZ3veg81mHejtLF",
  "key9": "2UNym4RoYK2M29k6bwDvj1BMEYpSZMvZ4ARTTAAieAiUi4kJsGgXLygTRi2nd3iB3sQTD9tg4X9ynFRtiHFYGZ4h",
  "key10": "ZW5W7rdRHDPKwxhHZGCr4ch8eWbQSBuJXwi2VtVxEnQb5Zn2BKr3DeuhZkPKVDMUxhuLKmAdLrf41toLBJuXuJE",
  "key11": "4BUrarGNdJTSgcE8USCZFp9gzSCB7ZcDdzmLxTT6BRXCwh7tGqYXzQCjDcK2Srob3YReqNymv4fnwHaPZuvWcnRt",
  "key12": "3gjbBVbhaDJ3s4JneUWJYEosPHKwm5nSF3pSWG6u7W8Et6Z8TLUsQE3zV2XtV8sFWdzFAwmQNYJEyYVvwHhzHYeX",
  "key13": "p41YKNKBoqsFNweHZ4AEhbqdNQ4BQC6QHexSytWMiJ8MGHrEpvkUBNxPnGjEoA9bfj7TAZCqcm6qtjZPwvL2mcW",
  "key14": "4NBbr2HjZiDUE35r5QhYjVoQpAui3n4E8fXD4vZodL2oQuPptuK5YSrDASDgVZYJnd8KubVupdemedvP6Js82sW5",
  "key15": "3jDSeyJ2hDWkkkAjKGyEDyasQwGRa9x47xs3ZASJLcA62oSsstBRjSSMhd1pQTxBQgF13ziMATKDBKR95cbVVzyb",
  "key16": "2m6QXgpyv65Rnfs91m7JPTr8ZYZe33j6rbyd4c6ojuSNRRHjWkdb2emfhesXnfZGGvBDUC54ThANMyDYcYJMQdwd",
  "key17": "5QEF95G3jWaMNfANJYuc2TNFaT1d2KKBGbsRHaPMgUj14bDhi4WCuNfavh3xKjKzMaTKetaVbF4B52XuVUWz2N98",
  "key18": "3ViSsPQX3VFznJ31eHogSYvNqTBg99VeBMgSedELYCoammkroyScRLkJoryCB5jtny19DxnYFQyj9A2cjNW11zza",
  "key19": "3J1jjL9N6enMhVcsxXzkDAk9zFPvYSndKtct6ToBQgokBPdCGfmcYjhQEr8d6YEo92T3VfjFQwvhK87uE2JVHVRw",
  "key20": "39JDgckBdf8yJjrhDaJauhCASvLeQggtGSLfmVwJ3oshiH2YT2BQdZGJWBVkzpSb4k4hbhCrsiR1ehSKNrSxetKq",
  "key21": "4h21DttB3jsoVccHsrBjSjMygDBjFPjpHLeW8V1y35f4tm7ZJNCc3hzHu7c6MQbiYkHmRyPu8LU16S5FMz9ddUUQ",
  "key22": "5t6cj3B6KUK42D3CLrHE1uatcV9ivZAVV2hTmk7JyGK3CQRVaySPk5TKvCAP4aisheJYmexCXUaooMom1m5qSvBE",
  "key23": "2hX7KqW6xTADLfL3b3ixXXaBEY5vHjatrfyejtJ6csVLoLo9yJ8ci4ViS8zXbvK1TR97nPHiED8JvhVqEo2H8z1f",
  "key24": "QpBV3YkTLbR98MgY9Kc5FeGH83tiuxzQ2DkByRXeinzV51se3hvnxAv5w3RRFqP7zs2TjAHd1nfVCEHjdYNUkKw",
  "key25": "3psBSnuKNiX4dUQY9DGBvhJieBPdcerPQHiTkqpByB5iFYBH5jXZiMcpsg8vNRyVavHeYtXHdJnXmcUbX1ifdLjs"
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
