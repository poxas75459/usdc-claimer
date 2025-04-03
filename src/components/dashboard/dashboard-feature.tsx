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
    "3fDeDCDXKKbqeX2y3y4AAPUzeAGGnrDmiHqwjTs7TMgj4B7rCP1BtDzs1d17XLowoUcAwSt9Jr45kiBAtTBuq2yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwYLdZnJQKVJ4havprFsyutFnyWf9MnCt8EcTvTVwNVfH2ZeMS1dPLvERSKP6pUbnHAdLfCx47cuuu9oZGTV1Yc",
  "key1": "5H2sxZovTdV2srjXxUeFJxUGELWd7ueAJD9utbKEyt43YJiTU4bdirjYBx8KxDvQYEerZSyYSwZwAf7wQweaBFRb",
  "key2": "1ubw6apVDAbv66fBs7B8Z6tH4rsNNS7fUNd51DJ57y1JFq5wqvcCsA4mBU4dPexfqhsVry6VU98aBs6vhVm8fwX",
  "key3": "2Ks1uVn4R6H71T5CJ36QdrreRDMGrHhY26usmuzLnRfNemBrnQgwyXBPde69PRquSFYgivzk2bvaZ5nP6Buy2rTh",
  "key4": "3uFa3sm6VrEvaLvUqeBNTBRopXNvHJPxVtYgGSEewMKqCHVEWQzToZGQU6jnoDzovMPWv2pF73zHomWSfJCNGLWT",
  "key5": "61fmB91Q7wRUBXHKQqeKP4Jchik9NJw7RkMDA1fbNhyRxMJKFqsPFnx7gs9pfwoePoTk5HzvAKdtdjGy9958qpYX",
  "key6": "3SNVzmeXzoLKMwibxPAAKAMN8SvKhpj24uv4EAANb3xMYtM835R6DfgCZJvCmSxMRL28MDd5jUCDSU2C3e9PcMyg",
  "key7": "2BMFNLEwUm7VXM3B8enfSjbjYZCAG2CmzvnZavBSovgekH1kkMHKpTS4ARX5GSibabrEkFqaS7VJGEJNegRFKAa6",
  "key8": "4jSSYsYsiRwTz6w9uC4ACantDJ4Un2AngqgLKEGqQZDGzqquCGjibpUWXzqbYsjSCobLGu9x3FeoDG799nbe5F3P",
  "key9": "Vetcn8fsk9ubeh2UBYRLadMa5JnSEvWmbBQ2n9pYajJNkYdGSAg41cTXU4XCegG8i8SKQzb91Z8NNcEoPAuh6Jm",
  "key10": "AXYfmK5ywweXkhBeN8BxqB8SAa6r54W9osDNhTEXaGd3UvAjgBjziqGBhpjj96USWk9jERCbYPQnik8UhejsDHU",
  "key11": "44AJZkBfFxhgo8XWwqR7YAgHji1gRAfc2zGG4GiLkdT7RDk3wyqit7gQcAftAhqHwyHmSR1mgLX3ry5WDZuesyNv",
  "key12": "4vkz2729j6pWY7aSr2NYM9gedx6gLEJbcmBgrzkFx6FxsCAjxjxDipQ9mKCJgYBdNGvXYxL6xcLkpcsJVq6B11zg",
  "key13": "2TuiE5V6BGn3T85LsAUk3dXbpCh8hPvD3AANSSLkhkWXz9YhzvhZXLzBpCET6KJ7cmDErJpjAZLnuZNusCMdhLtH",
  "key14": "4onRAZWGdMbyu2jEbu1reGbYRNmNvoL2zA1ofwd24iPGovtYoeh7vgf2G8Zvx47S14acvjNfATaeRpFoae4xd9JL",
  "key15": "2U7yrWte1whf7L4pwAZtjozbcstWRMDZsUa8j7FY1tpNDNPh6AGYnGJDtid549EZpc9CrDJYFWCkEppR5j7YHTzz",
  "key16": "4PJ1KiHuyZE5q4VrsPGT49jgjXPVbKjgpg3ANnxmG9rQ3ysGvbY1mze8yv75DXcd6YTABh4DZUsk5oNvhm9Qj7QX",
  "key17": "2wRbB1Gpm9m1idAKEj1xer24P7JWx5pXMxDaR1fK73vbff9MDixDZTTqZ2YhdzVAMN1SDR7H46AFNMvjRYt34Y6C",
  "key18": "3SS1cCL8f33nXPfKgtSnhf7d5u8KJWwLFqf5R6a9KhYfhsr2mS9eQ8ayLo5xsCwNDxRxdrGBo1Cp7v2QKSpi9HNy",
  "key19": "5hVwvwyUiKwTBifxSJYH51ctEUES6BcxsKdx9UvBdPiurz3WbsJuVR3RBYvUedgY4AmJ5XWRNtHhWra5eZoprJn5",
  "key20": "3VkwQthXGcnJZeuGFZrA4VMNdVWb85vq7XcbEsho6DiJM6bsJSNcfmzMhAWV3xnTSHV2fFF9jraAaZJLMYFaDUj6",
  "key21": "217E2muzZB49PWxbpeqWodq6bbQQo8oKrYg7pnQMcqEft6VeNzKPJLvwiEV2UhwsynMnbQzYer5B1qUz5jDrvfao",
  "key22": "27AbsnjVvG47UBBfhCBBLZuTrE6RsN8e43vSTUaXhLUQaMNaUzkoYnvtrrH4bCs4anUpL6jv6gX3XQ7JyjGSaa5M",
  "key23": "3bKFCWY9iG2oGwiJ18ySNdDkJQPAb61aPD6oQyrMitN5xcTBruHgrVucQ7WZJHYpV4CqjUrayCQbC7uQAtREXPH3",
  "key24": "4zCaTeRcaCWAzLws6tMHMKL1hbY7niPg4t3M7ZKnFoAdgVANYop94reDdEV8wTSbnErCSfj9eUrc1KaghZMS184Q",
  "key25": "2UFQ2bqDbfgQFnAZwJyS9mfBhcAubXDrXtNVJXnr9BM6SNXVMMtsh2qTK7J4KyZMhFmNjZkTQt9j2fP9EJPHjufw",
  "key26": "RRPhE85BrVxtgmdJryyiQb8CC28WJ4LeVseKSphxdkVbg69JCv32dAW5KvpR8p7Adm8unDoyPRZRX32dCSE8LL4",
  "key27": "2eDAg4qwEchdjhEs2obwxC4UyHehu9WMSrTRWqhHRg4ZoGHV88CqBLJYMcmNcsaT7M5BcBoqZVZ6nhMdubBZGMQ4",
  "key28": "3EFeiyHxNoiXyY11SrRr9abTncfwBLxmUK1RjmD9wMr2aTi4RpLZZq6AxhSv7E8n73UmSvGJfWeUnzinBdwk6DRc",
  "key29": "4ixzTr63AQuLohZuV2VDbHpvC2e2xVrVj3wjTN8jm6WmsMRc7FMHs7rmfo8u6LubrsWCL8tP1xeS1jT6hDVdb6ke"
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
