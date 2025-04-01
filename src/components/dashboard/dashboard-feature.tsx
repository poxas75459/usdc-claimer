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
    "irbBR8WCpnYFz7cJo3LBdSNgmU1MqodaJsPSR1hcaBF4yE9TL23rZw5LjMpsLcShKsmzqZ6XkQjgp84iVtLDbtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FLWyAs8TU7w1HdM4qLgz5E2jFivJaGbZMfQGgkeLjoAaH6h8Dp3rLfwTRJLygHZXf4SPSzLS37nwj6fAvRWhTPx",
  "key1": "4WUMcw753kKmNfk4D2MMR12wYK7tUfuZd6Q23BawsHsqCDFdVtZkSUoYpkfDPJT4e8JRRJwnkJpEDTUzotTB6Pi8",
  "key2": "2G5Gg3VofFrLFo9KuMEwRqFpwVmSP26tzQ4y2xi6iPoiSc9TQ6ibgpqTLM3CvuHS67Wi1Ldnahm7hGfMknSGKwYh",
  "key3": "zGT9N1LpSTv4Yj7DErFkrsGBwkJV8bUcFEKqR795xnLDNJtzbccaqJYQ1mjCyZrtUKEDcRpY9Nr3JTTFBL7r6t4",
  "key4": "csSnRwQbPFwyakgVejxcXW7ydp4bL9Cn3HrwkWhKLD4gupD8U3rc8VgU7ZktJCNdbK27owuQAExYyTQYJWQZ6fb",
  "key5": "N4jTV8mVbPgBWXNwbpzFbifa2B1J8PnJDKeunjXRqAmapu2ezsruh14UbCuRdikj5JA51dpvyutPnYHShR5a9zm",
  "key6": "wcHSJeegJPDZ9DAjjgSciMY4WQ7qYjZJbo2nWsdgfpRUwYcwHAV9PQeyiVRAFv4mNtA5SB2AqP6MevXEcpjiHtz",
  "key7": "3YohKrWfGLDcZ6NHsphK4YkLEqHNzwnhUNwfiJt5EFzU5eNWHvXZfQrzQVcf3ybFtcKzSoGR6aLZkin2wyqhmJHd",
  "key8": "3r3szwGXxxA2fd3aAvuTUAU3kcgnpT5svmvohqmWov5MqRaZRLXyYiokLuJgW3cjC2hEvzvkfroBQMYQHv39q9my",
  "key9": "2sXV3zwebmz2RfotyzCXSry6PT6raynsw6ueg4RSNLLYiJt1getRhjar9bvSQ6Ni1c4mSiTGm8LfJMQxQhBcXejm",
  "key10": "4bq1FUb5HBGZgC1SPCXYc3BUy6f4CQK22TvMSPsZZo5WbhwwgcDSQYTbTppfUBJcqdxLRoVhMPcFSGyfmKixPdZq",
  "key11": "56Feqna1XCFBXxbJ4UisNXnjDdqa5gRa1AsBBASXDrL7upRz7WVreZzfyHwwVAA9X4LpcU9w21m14AtNAnLSZ1GV",
  "key12": "EgDo14vcqpB8PvwkUxjHx1uGCSVgnCpx5rGReB26uujAnr5mgsKBKgMRqqeKrKZabJZkgCsjrn64vnPkXvNNrtU",
  "key13": "miBRpGmuRNboh7vhG5xPB8fh8G7ukbR6aUk7u7dfw6qdX4c47usnoCoZs33GuMadxuQAexB9N1TGMQxHLM3YVyX",
  "key14": "XAJB6tAokXp5XJXstafpgWwLCCuyHuHpXUb21sQsbAS6PcuCLepBovm9AWXShdcsKzaQQwpMvFgut1qDVgidbEz",
  "key15": "558352ZEY1hZhiMA8kh7MSnS7udSfonxZLNC9zdP4wXxyu6G1sswryKQK2nBbQXXUCF7CpoBzGqqaX5FngrzS4DC",
  "key16": "3ftQKvNvxpfXgPigosrQKxA5wogzw43u2QTzqR22o11ekqNnmKDRK52yMGX1GYU5fzPHMFnWaCMwV7xhTMpFLUAG",
  "key17": "2s1DZudhYPFxCUAYxzekidZAGry1NaNEkoeyU26GJwWPTbqW46jqFxZn9CZmkprwa2a4P7LuD2KkL3xuKARFq939",
  "key18": "2kVWnhK3dDoLn7yhS7NXk8fBECuXvQVn6o5F1tYVXHmk5D5tThqGkc4poNQAZrZwQ6U3SwK8K2MyivjACftx5m1X",
  "key19": "48UbT2obpjBGswtn2FJHwqgdQBoM9XRZAo4JaYX2kMbhgSsU9LbdkGD12Un5k2pjfZGbDi6xSNErGtwEQoFkZ4Jy",
  "key20": "4MbwpLeyqRjEiBgmkkAnmAvgpGRZ5PowUFWLW2KpAwgfc42ok9qvaoBsYnAfzTqfTUZ9LC4JGSk79YPXSfa12KHM",
  "key21": "4QNT3Vz9HdFibTRsQNHqw2wnxvX3VqN7bUzeLKbk4PqXC1rG2ff4o5GknUzkMeReDePT369zK9d9wBvsu13ZJaA6",
  "key22": "3PjH3tPke6hYFmmTiMeLvEKQTPAdn79CSUjt9Dm73A33ch8tFR9cCLoAUt7iWSyYJ8DcC5TZBunT7PzgmdzD1oqQ",
  "key23": "37D2oK1Xo9rFEUKDXJ7Fix5UyC14FDe9kVUQ6bSwTNX2ano3HsveNADLhrdQnvABgftd2RMw8DKyC2acpiKw2mXh",
  "key24": "5oYJ9Zinp41DYqtCo6uau4fBpdwZUPGupXwKfQMf34MPLGBQNUy7sNFPzv2xsHRUmoQdeKRQSZkWzeRaLqtcUmu4",
  "key25": "2E5iKCrgRS7d3aNvbjCuYqQqXcgNPNVzeSt6rKp9MDaVaPtGNRBanfPF2gfbiGq8FHCw3iw9fHpJso77DMHC5Nzc",
  "key26": "5SEjKkFX6HtpAjFhMJa1qrLb6vzj4tHaFRvL2XCkrNahEfb4dRCVKRn8F843E5e1RRGSTR25vvy8aTHPZYcuTqoG",
  "key27": "3wwHQMC2JH1SksLrh5MKFTohQDVuJNzuUQjkamz36yuith2h7iKdmY8KkcZgLVMN2imsEPc7VDhAJFvz7wHQ6Qfp",
  "key28": "2VHmPnJFyd2HeqWvHccCD1svb1BEg7pRrnVcT8SUKskwNGfmW6wcqP8HEp2qUyBYUEbPM6pMtnCbob1Be3WLbdJg",
  "key29": "66PyFExe53yQYpPUX52tcuZfACuopsxS5ZrpNXAFmFNBPQAbnAYTq4TQAGizZiscWGgduSzFfTpBfC2B4Lav7J5A",
  "key30": "4NwneMusS9pbhZBz7VaJihBdgY62eaTwz29UAdStgUWW5x1wGE4t88ibWDnjvenCJySD4JFMJvhMsfaLPzCg8S97"
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
