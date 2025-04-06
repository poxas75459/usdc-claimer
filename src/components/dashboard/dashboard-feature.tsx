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
    "5U5nrvh3NgzfnyEHwFDSGighKy1TwvGqszh9PZhy6bfYj91bYi6YU6EtV5LZyVTvtwmrRsUmBUqHAFz1tvfPYjrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJB4qGhkbDivDp7R292yETTw4ufXA9MkQf2LRqPDVvWVD5YKJdkY3QstLmckm1oTxqVSvzNQoHNdDvUVwSyjxC7",
  "key1": "2Tt5K5xevLwCpHFxZPEszGmsaPjE37xqYoXN4zh9jjKVVqh7mMEZoCykwm2StQ2H9LdS5bB9ap591wP3Z7vKYJK9",
  "key2": "4KyMEeNe5aUtpLQdV2idisCGrbreGAyfg9RRTDUFtaVaKBrEv1RFRnFE3rT2wuGCSgBpvQYbMLqP9o47888Lo8MD",
  "key3": "4YecQRxr9ebhNAGMnBC3rPcAcQ9iSr72WhKyi8gJv88usFTP5TpLAzdQUWxK23PzWPrUfZxwMhEam2TfWGWVaTX4",
  "key4": "3JFKVo8BbMJRRnAcfVBoQXcSRMSwFYQTmd5nFoi1Y6Cb9qNpQSWkUS9uYLk8dvinRDTC3JBgmnHUmev2aJqgPnhM",
  "key5": "4KSxiU6UsN75PQ24RaF86FtZPKHVUKw8ZqJEvbZQXtBeaibsVHVzS6W7K7znNPyYNc3LronZ5BnydmxpQJGvARCZ",
  "key6": "4YecoaYQZfiPPLrfA25QvjJmZDjSD2yx4cGr36BAHq5YWNvqA4UzTuaznDyKBkC1tmKfe2VCNfe14rf6UvU91yPb",
  "key7": "3EiDY8wshdyGzz71SgoaVxoqd67KKzoquMKvmxy8unuc2jUHD1baLwZykDm7Bg9zGkvCGsrmDEeuGcZsKUiyqNy",
  "key8": "3Kng8inZtssciiVhjnvBdYtk2QNE6UK7KRmJ6ExYbWvyVjXVQVudEhdzVnA6phisvwBHwpDgmP3cxyLqhC3dKCCC",
  "key9": "22FYRugbZWgnGRXUtBtpTKH8MdjWeDLEfidxLZcdd7NGLnCS2bdMV3c5xNGi4mv1SEK6piC3kUsz7ckQzYG8oWCW",
  "key10": "3ZECccmxw4YA5EF3eHhHHdnr1QL7fZLF4pczpmU9rniPPMy79jjug2eq4EmtymNKanFXFvk9211Css2Rau2XGiwW",
  "key11": "5dzqE48SzpQXg5T43t9JUKh8kJAVYyeAeUu47k42XhiBEMMVBmDnm445aSL62ndemcWDcdXSH25xaUZmvT7zcCk4",
  "key12": "E82SAqsJgHPnJFV3faG4sku817oJ3nZZd52Wp4RBMRiXyivng535x9997FPLHACA3GngysuvBD7vbjWgob4yyTn",
  "key13": "LsAGCBFspDqnTiAu8Fjaw3Sfn2p6vG4uajy48aujv1KG7TtHHES75YwKV7j6LL3sbdq4hSgpHVcfR3aGXHCgF4R",
  "key14": "4T22zBsLytEBu1kor2HAfMx8P4ETFyeoMtb5mHLBgL2yjo4b5LUKtrv1VXvj1yxY4mKXs9aUKjKKQ9E2Tg7ZxA9n",
  "key15": "5dxqDpATS6e4oZ8ymRdFUG82w94LDaor4B4EqVdtxbk9dnxXggn4yDQwk6pJaQd2XEuny3eQ1PkRPBUTQU35qbRy",
  "key16": "3uQp5qQ7WeGoiLVbtEkB8TFdcPBdmmYAeixv9J4UXxVa6vLh5ts9JN3RxxG4qwktq8X59txvZ3zEvP97oUTAJuqc",
  "key17": "5A3UzoiibGJLN1gweKW4da4f3GmoShfxQUcLETnwLGS5eNUhg7txBZMsr5HpLBUFvTi8acgFAmi2hpMMBA1Y2Gjw",
  "key18": "gtZZGwDbWXVfVD1L1P3NxgA9JayRF6RK8EFeYgMe5KdzbGStwbZDvSSgS2e9i8fapjEBY73qVYhU7w52HruyCuv",
  "key19": "52niJRZhwXWyPRk2BpWUvzBo8EGVWbkeQWzmkreGa8QHhyGetbVjhuNsxysf27agkSwoSEHLXpXoCpRJw9oV4g1V",
  "key20": "3r6UKSk8ZGwYcERees2p3yuH8Wb5sJZafwpEgTAJMUSML2b39xaxW7TSxtRLjDF4bEvmWt75aEEDN47yYbjkwHDA",
  "key21": "bZCVyLQnGX7wsb3LtNJToPsphzAh8egoRpHAqY29a53Xe8eVhgGqmPJpnBGx24jhBwWPkzja2fgMAWyS2T6SVrb",
  "key22": "2FMm2FZwZNhFdTWMnMyrAW2GVe4XoWyzb7iaZVfT7T12q1aMqYpGsBTWCYogVpcRDFATtDfW9XQ8HBaf8woqvMi9",
  "key23": "5q7Jj76JRRza4TKifpA4aE8XMY26v6Y4vV53SHC7gk8QhgapmN6DyB1mVdUosvgYGrMTt34sAmsXhhF3dUHyyXnF",
  "key24": "njBhkMAg6LtnUfHhUGqQ2zgTkNfdfEUUSXjGs1xkP2Dt6EccXJm4EWQen3fCDEygAhQ4sHNNVJgbAQTSb6apocM",
  "key25": "5nQQv86YXGA5ytzYUAE69VQrwC8k2fXZDxKQHs7j6qNk7VHAsrRbCrbT8NbfhR1n6Kp2brE8hqw4FuNXbHfBU7wi"
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
