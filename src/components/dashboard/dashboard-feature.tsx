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
    "3pgmeTqZ9hix226EXMb7Jcb7NLUE7ATbZcgWtTyQFZ2UGMjpyK7oP7qKiGn6XVRMkDy7kmpYLmNZKdu9u5Bb44S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55defBPch3mjS7vi2eoAprWW5KmN4VchCWjNUv65nXxEVEyhX5sKrnJwpGniVzqNkgWMYnKvpshxBe8hHph5SqLy",
  "key1": "2ivpugGZXaYaRkmpLmSCwEjwFATVmYBsH4J5cb63HPBbPPwN2SR2YHfAdxCcfxNskYf4rvHMKwBne7ppFFuMPo1v",
  "key2": "3Q96bEzMw6veCyAUmXGUw9MZxxRoT7PdxbW6ZvG1QXmkDdGKvksx9RcNypp37EBDDdufu747Y8Gq859VBt7n3MTJ",
  "key3": "3CW6cHk2Zg2MnaJftYCWkcPhXkwBYnRqXxTMKhvcQ6Jhbcge92ChTTGARuW5e1FfrPbkSBrbWs6FqfL1JrHTQCt7",
  "key4": "3vSpVKjA8FPR6ksutGcrXE5zhuC8weuAxYRGRo4w5KALStrDNQ6LhRpAZSfMBFpoinDHdCSzEvZJEfrQF79CToyk",
  "key5": "UhyLThAGGLAeBv6FDSrfgRFQCSzRdyWM7We68puTBjmjrtZUMBKkzXiUk3yCgrKcXCfbuNAUeu75MHryUMHTVgm",
  "key6": "36AwyaUn7utgZ4d15DLYoWrkcEqKpUNTefGUV3VFUgyXU8UPKa1W8whBUjmBhcReb8239FrsrxrA1HDuyt8C1zAH",
  "key7": "1TPkeCv4xru3CofroUhPArzcmHUmo4XRmPeKXugnQ3oB5mWtSkzqEFXfs9tAx2wg4X2MsarC7CJuH31BaDnJZe1",
  "key8": "KJzAzQhCfyhj8w5hzKnXxW5uXB8JLQ1Mge9iAD7mQug1xWQhu8kvtzF6Cb9bGzjVjXBqY1KKoky3kEqYkMfdVgs",
  "key9": "4fL9YFcBQG423Ut3tUmeSWNf1wMZgvPhRRcH7UhKcPXsTHmHuMYuKGUDppS2gXP6aB9z7ZvfuzgdHjuQdgvAfgJK",
  "key10": "5ydrjC97b83SpL83U1cUrAa4nrdGGmRszUZ39sPNVpGHpLoHXyYmXZYNB5BLnTq6cm3EVVaK8ZPW8wqsLmfiXTjU",
  "key11": "4h5DQnves3fP9N6xfa5MwGBvGXrLjYcuWnMZtGWueFRJ9qJLVj63sPoYbn3g4md9rRF6P4PBPMNGTzpZNLNVs57h",
  "key12": "3CBRhntuZvJWomRy2N4j7Y5PGQ7P8gvRqRS3T3wa8d9cmyHt4zpG1rMqERsm4fECDgfcZ8ZXb9nYFxzzGWhh3Htr",
  "key13": "62ifgKfx2m4GbgSxQmYwCPL1JNE1BwZyAHr3ypfD8CVcbCMtCCg3u9HJdLUGjpT9tyHWVqTCwVHyMyQmv3LhphhY",
  "key14": "5CC6MtDNU1RRojrz8u4nvzYJPRGZn5X8jgQoJD995WWhHHXAmz9DnADgW4ePMkK3B8AmaHh5WxkFFVE4drzi3EHm",
  "key15": "3NBeL9XLWsodyMGgawuDvVWxHSya3JnDB2w9Smpq8BSymUf9WFcYrACwFV8hptexwcCZUKBcPEVwPpro42obwRnJ",
  "key16": "2AgMhwiau6F9fYEdJkVq2xbcjqerW7J54geoqier9hejjBu7KyBEPLVttDUNoxURVFCW1jhSkbmpTtZX77B6BtS8",
  "key17": "3UVWQEFXLh9VxoXux1LHAv4zv9vn5x5jbsAcWm3nCTctxuBvJiRgmQfEr6jKx7RTiNLfse1aaks7zh1Ff36CdoAK",
  "key18": "KukQfSQei3nbr2saTb8xvmE7LM94EqXp1Ky4kNbcRBZMwvZ7E3D6eGQhAHLSEadUyPuS5ti9XhwQMiPYZ1D4oBU",
  "key19": "5Qw4UAHpfMUxW29gw38ZiSh29HDQMnpDfqHfGwUvtYWWAL7FF77pz1QutCjPdRMCwo1CqsNCWHQRZqEhxLChgMek",
  "key20": "2CmNnqk2Hef6WTod9LoZjTsULa98yLxo6GVkLjFq3PGxcNPrZoBsmdZS4uMTWsn1fBcNgznxJWYxHhQ2Xt7QL3zG",
  "key21": "5m9Kimuh3CXjiyGdEDfhX5ypypwC2rC13a6xktwFJENhcAzBmfepjrxrsuzGs5PuESq1p3XiaswdGSLRCodNTvRE",
  "key22": "5Aep5ifxS49hoct5ZVE61LkxTHKn5QMFyUUsd292rhu6du6t1XpfrhqoP94DAh9nmxo1n4oRVBBCSsCimbgw2NVs",
  "key23": "5L7jfmVTnCpBQLik51QXcrs6445P8Z8Wqj5XKBKkaY9xHsEuYsHa3v6E8aZDU5fF2H26TFVB9dJZsf8o51W7yMJe",
  "key24": "2dXjqpeYCGN22HNJqELXM23wc4gtRzofmNZKrYsA4B1ccF7JoUfSQaA1XcxvrthmFwPwGrKzbG8DW8apn63t4vzL",
  "key25": "25W6Qd28Av3tRtCzJ4LESvPFCLvVucgYjoFRCcT2RSAMqJQ3cSXY3uK96d14LsEErqtGWKnkTTs78ZySow65Z18R",
  "key26": "2vq37CtJTjqju67VjM2pLbWDDrNQSrjnPZ6uofVDCnpBL5xxkxGr6uwSwhb8mzAzU99i5qwuB5vupXrMkbXcdXxB"
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
