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
    "5T9aaUoDyw3GcBBqsUaGttiq2cMV4vpmPUYd8SAXnoXn1bXdtg5mzGBx7EfiQTatAnJuZGCD3Sby1LzNkfTZv5c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uij4Aaa9s56igv4H1ZCAnvG86FqfqVEV5SF1Uxj5yN9Xa44bZzk6epNjviw2L4kpwU7CKJA28zanNPs52tXAkDk",
  "key1": "4NVKAbqztfw1QAYDAyQu8w76JdJGriAwaSnmvy8uGtMD4rv9Yh4KbY6DTxjCUJQenZTNTCNfdCNbwFXwcAVoQ2nH",
  "key2": "4e3E26mcWtSTwG1RzmvH1AtWd7eEomvNvzjLPof5a345zLe6XmWYG9RCKws66amneNuT67imss93xqkbQFgRQZvg",
  "key3": "n6NSRk1V76xaYuwahP5NVTdHvd3QXoJer4fmk6ZVEcoN3QnQcpzxX4996rBD3UKNFkhsgBhDKVK9KPfHrjh5eR4",
  "key4": "4KsTCeRnUABinPNLkXQZ3KkEoJtZwkvLxab5yeMXzzgDX1RG3DJdmXy61QtQ4JAUwhhDsTWZad1iU2g5ajz7Xjue",
  "key5": "3WyMsbhZKKVc1ESXZYwkCntZnayg5KK3UaqdMQB1ctJMVT8sYRUPuvBnmGjToMQ3cUVBGSdx7vQktjAyTsWBbN4b",
  "key6": "2NXDCnMyPJp5CjMajHAh8kabHLJHQD9LsWmdRmfxT6PYJWaBWFogCgYVVXbJD5NxG36Y53NHCfBkJ3LwnHd2DJsT",
  "key7": "2uDDYyneSfa2g4d3wVn7BDHVpZYtAospsoZhB7uYF1jG72ktTXc4waQqcj9e1wdctZt8FRb9JRUTio5Bg88vc8k4",
  "key8": "2fa8JzpmsL4bq4JJeMRW7RvCPNrAvKiiySSwDYwgjjm9P3Vatcri8dafovX7kDDixUx5sw1EootrA4FqxZvDBtdb",
  "key9": "3FjvHvrTJgAn57Le4eGHS2d3M2LJaZnvfE1x14eoJb2LHSEnZLt37ks8sp6UDBSGm2LNve9XBGwKawcb8Lp7DWns",
  "key10": "4RCGHSc3YjNNR7ZRMXRSk4XbogGsdBsYaNM3Cx8U5JhBTnEQN1ZmfUb5G8rtxEaEKY1B8msUtPsrSfjcSeFC1PP9",
  "key11": "XzC5HnemtLrLmpRMtytyB2yYiGcjaHTpDmhYLvhtEgYrHAdhrMcmSjgcgFTSyVat6vKDCvQFTwUAZc8gdoPg6cG",
  "key12": "3QyQF4MVogtYoX8R6YKVHFLx72cDWkofrx1qeF9Dfkgo5HrKgqD4E9eKHETYAPQqTzrfsd5dY2TjfxctUXLqEzed",
  "key13": "4my2CW2JyEQL5sjdCtUjQYvg6aAm1ahnt3n6AYNfgb5a5hJVe9XB4zCTWEdn1F1oyCg9XBcjosp9urahztV7gWwJ",
  "key14": "5mPKrhGAYpN7s1YTaXTVLGDzpBkj2vkFt8H825ZjYmYC8cbZaLNitrEWXEwfFE1yDfTWjSnyxxGDkWReGc5KSKGg",
  "key15": "29WCZU1W2KxP7WqL7TK875y1ERELK3WN4cqoCuHr5SsEJguX8daLg2JmyiTRvZhGxHP4cEiDYxku6rQkjhEppf1X",
  "key16": "3t2C5RypbxMHuvvuFvmG2JGxRhUxuumxmGyfUrcTRkK4rbAtAfAiV81bceqABgePmkDYHYaLcJt1C3Mt7tUry6ya",
  "key17": "5yxppZLgYLvCrvKeiT1k6Q2QFQDnd613ZVdzXXXDPSgeJyfY13dGzWSLhan5E6JD5TQncFzPPZU3NtKWjGRJqFQN",
  "key18": "4td9RTV6AS7V3c4E9PS527wS6cBjdPzbuwZJn4yuhHbXNuf2tiqpJ33QxCVmgxevGLqrsZVq8VBb2yGKtdChETNr",
  "key19": "3cz8ZJXkH8UTFBdj15WqTCZ5sfKTVeR1zxYPE8jVQRgTGUcip3VxAqdNUiC7eTpEvNSHWkYusN2PQoWp6ptXHNUa",
  "key20": "2rNyVCMYFFA3Dp6zZks1nL8oLXiWKk7aFimhsHgpc1Jtio7hMjLqJ5kDjBVzhVYreCE5tL9fYUQKgKP1pBYziMCs",
  "key21": "2gciLazbyPf3baJMVbsjQJYEDPCnAPwBz71vkyzRxbkLGQJkPfUmSC3GTjJGFh5xcVFMS78NkiG6xbgATknssn7t",
  "key22": "51PYJJrGYAZSfn88aEL5ec8tPjWUkXyoxZfVnibPrce3bP7L3mNSz6uDSX1FqjqsCtEA7PZNEy3Eppp2DnjcJDg6",
  "key23": "4icvwZM9oGZ4PgEb3yYpPhKR7izUQ9PtSjMWUMJJkMhSm7PwFALjLH6ib6CM9dzeRGzm31VujdZjPtRppehHmqpk",
  "key24": "C4tFCdG3NkGuEHFVh1ULWDzN4bF1CmuW6eyiqdBLppRvneqG452icaD1wK4bQ4a34dgZFJkFdRofKy2FBgn2cfb",
  "key25": "5PQCNVkmAc3UKXDrmKGDYamst97U1WFng231nSCojeca2vKRnmGFMziMK3WxxVDpwKVQP5EbyKGNJqJ1FjyJbMHA",
  "key26": "JgTxehXGmpcxCeqSRwhH99Hyu7woZ4v3BcWipNHCeCiciZ4bqeYKcf1U2dT9QaBerTqjxsHJWNEzuaYJK2W5Ktm"
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
