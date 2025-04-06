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
    "5XpUtmBpykueawSGKLn4sdjnuwCCp39z2S4uksq4iWsGaTanmTy82nbukc5XQyxArJsgDnkf1NaC8RiLzCmE654F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hzBQQ52j3xbKYrX5JD7tu17QmkbVx7xT8RfeeqgTP2V7ACWBuZPDnwBCB2C84jWYttCXhiPj9PEKPTmz7vtBRa",
  "key1": "4DepAXRfGdFHJHHVJkNjdwke1m4DQdjMUojnm93W7CD4gfiK9Vy3PXxhy8HCvNHnTJJEjtR1wbZiBnpuyFGYB6cp",
  "key2": "4rUJQhr9tjQJaxPzYPV1eirbJBQXysSEic9WzUFMPUUkecFD3q76kmGtPA569YFEcybr44395rbKqSJowq8A16Cz",
  "key3": "3JB88cnGctPM8FgB1EtLvnVq2Fob3gVqbYkKxN2AgAUWdBCtiYczfkiBMtNL9BgCDetMvSEpHrpUmWaqQKHE1tQe",
  "key4": "3G9B1HY58WBkbaMc5EZTCuThoP5FJmhuDRqiaSLZunJ7jxCX7c9uhFzsf8uX7wJPqEfDqDk47wXFcvJkqtgj7fSS",
  "key5": "4wc5i6M56fsSFFsnBePnwUu8TR321PR7NLTuvhr99ZibSpTYdrZ5nqeXMmj5p49b7DCLse2Ra9MNSCsjNGsDNmJT",
  "key6": "4wh3qUz2mBVBGpm4j1zYC5tGVopUks8nkijEYW7re21GB3QdA5PdSkQV2Hah4dc9TXPiBg3mnrv9jo7HDn7t3T2v",
  "key7": "5RDr6BpeSaxAviG9jydo36CagdcGUDgcDfLM5sBjfSMrUaY4jAD1s1nzojd2W8t27NkddifD4qgV3dqG3ncStaiq",
  "key8": "5sycvnijfFfvyqozmgDLXwxkzMyL3YC6yogKXYsmB42yzDoYMeZu48VMp7vvrDhJpDXuaTqp82w6qG2ytR789BHn",
  "key9": "5bNZgVybWtz7QaTAoLHVXjzRY8iKjGmPXiX93ur3xDvf1U9qQ8HdsEXef37x4KbwAKmfYH8d8mkDd5VU5URnBa6y",
  "key10": "2RcFEa5BxLVLwB6Zi6aybwPY7EQ5RQ1MSmWMQeBSssZU7aBqjJV8ynoQCEDob5sAW1DLycKGSethvFWUHmJVhRF6",
  "key11": "3yAHcBYkHAFgBNEwUzkvxTX3dWbasYPTW1u3T13xbHcxaEkuC16DwDMiVxvAafuT4yr6Qy2zyHR1zfhRe5bTtFYM",
  "key12": "4n9Z4p3M91M7Lux172Rm3iakzQbyBVcimTTzNNcUDgUMbpSh4V33rPMuJ6QGUD4CxfNs5uLcxt5tMkfQyC5Nz1UR",
  "key13": "J1GUBjChdpYmuBZZBp9QdvWh6BbCjyP6FVhrhA9ktyTZqZRTtDW7bNo1Fxn9ydV2Wg7FRXGdKTzYEN9qEGYzS8R",
  "key14": "2CTbKY4rz4zR2DH2BmRCCscKbgK4DEWYapLhku3FjAPy7VjL9xa3FvcdKuCjmq76F2diTtJ41asLtVTJc8Noburc",
  "key15": "3QNH5SY6h6jfSn2kX5aoHQ1C8hjHxahRcZKiiSSzjKyq8jDsv4VUPQaQrWZuAGbfmf8cp7AGecSCkkR6ebtDnab6",
  "key16": "2rqA4Zda6rvKz9yfuJgo3LDvSbmtxEBoCF8E3w9MjN9cbhYs1hPp1Wjy6Nti912xabf8B3wEHMAewXhQkR2iy7YG",
  "key17": "2d5pvZik3qHHPP5GQSg9b9o3MjJdazpysV84c19TyUoFjzHMQgQPWyhxLsaqA1XRqWDDp1XByFv2qptegFynuwBn",
  "key18": "4mjr2RPvfk7hkiByQjPQKyhST7kZQNM8uCFNCh2rgFfdCYdat4p6ySJHYuLzkjY7a6mS1epjUrbCSVERpG3QV7VA",
  "key19": "2TyeMY4Cp7iMEwH7m6S8ZtTCmXTxH8pvqoabtxfmxq9HAqLPFfT54WbjE3iBgjvWotDmwxMrdiDBNgMLsacfmJtM",
  "key20": "497Z5nX1Q5pgfQPDiUdbwkfeKoAB3n5igpMN1fe7RtzxmmY4Q8xoZMoi1k4x2ZxhfK54ZMnqfxu2NYX6x7N8xzzh",
  "key21": "62dMeRRLTULdF31PTG3jmrr8QkqEUnzYcMR4rqjTwSLyAjXQ7iPSFNQXV897awsFcF24oGNfwjq1w1rHRsBfkrPd",
  "key22": "5TgkMAmY3kKD5DFigfKWBKLS1UbNhhwTqSkipaxTPgqGvxZG9ubH2DwDzhUXPzbFTQtRHTQernbCTrELVDg6PHQY",
  "key23": "5HmdizgEnPFQSsVE7Ehrkw2TnySmoXbdEVWd6sx268AoPM46xZk3H6rRG9fXHgyKM8Uq7Teu4XDYz4RETvVUejSN",
  "key24": "3Rk5SEfoVUZXtvTFkmsk4aqJraqWY2rJ1DethhqPwZZAm6V4BtjwNn47BNUmkaX2UC4236vQpgn27sN61D7J93k8",
  "key25": "1kMQKBZ5UUHGYo91cYi6dvwedGJw47Kx78wKq92j2nqGoqCVreH1DRff5LyzXnWRo125z7MQk4o17yX95ChHDRD",
  "key26": "h4NQTn6GnYDZ6xN1Adu7R7RZMBAsWYtwNZUuekKMPkkxZBQE2huyBjwb8rHReBzRrHgQkgaYnB6JQtjXdXYWFUF",
  "key27": "2EJFyCAk3Qkn7hzzjNk8Eh6S6zmfuctgAituGPh9R6K9BcNG9G4UBaNDzqXHCnuug5KyMcAAjCK9yGjct1agbDrn",
  "key28": "5xndV82qFsRAEWeWtSadAcQUKwfpZsYhGjTcbTejB8pG8sPWQQTrFeDt3iCuwXjWgDZDGi4WNwE84DQAMP43mGf4"
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
