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
    "wFvPHx9KbUXkHnq1bukDfcDwSYxiucqVzN83cXLVC63Rg88VbUhfhzTci8gWpTFUJ1h1QAv1fSiU6hz7jjcJchw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xmYhb6QWSGYcas6XR6HQ3ZThoL3byNowYMu3chpncSYiL2JHbKrtLynWFwsYzk31VxkuRg8pyHZqobAMPrudbSu",
  "key1": "4hfCSLyHA6rYSQwGryFBBirwr4hnuqgwLGx3C7MzQzn4iTzLM2nPJTWpHQFmceH5N1K83arKUvQQYBE6MQTjZzkc",
  "key2": "23pC9mh8BNmnwru8fTPymPJy842FJgPEwZwWNUqXW7rLAEeLjWR8NGcbz17zNuH2nNNXBMBfg1TxhtjxQGhnzBNN",
  "key3": "2s3qSmrP43SWPBsAiSq8xy5gY3P1c3Ubvxq6p2JspKYDJKDv3N9KhPhbZsZSk4nRQnUtqRFs5JT5VuwYBikrMo2P",
  "key4": "33L5kCLsPbqRksSW2C1XRGRLUN5mdVPYQq1BqXZoEKsrYJfDZjUbNWgdVk3CnGTnsXYiorqC4cN4vK8Tuow6Dukr",
  "key5": "4yhWdGp23LbK96VEW49sg5RngZifCR4vjN9JxdfSvdkzDx7Z1QrbMvH3f2r3kJ85FizFKtWgDMWXtozmv62ipNm5",
  "key6": "55ADXnurzMoEvQVBgU6Xqkin7wcwtLcuCPBusRQuCRKU25a6m6Fm4tFBPStNHHTLC7X8Ga6rztCj1Nqk1hEkjN2x",
  "key7": "mXH9mzjZtFdLiqoyaW6M31Hg586YmU9QzgAX2ryCAFSGcqwY2exwSASczN2RZzDMqUEojnM2ZrEaYCpYUrpn8mh",
  "key8": "4biTrjq7ScAoLc3APayPu3vNcBRQwhmKttrqwhyWSf4TtYCeCSPebk1dRrzBkzDfc5PdKM9JS266qhkzA18ka2Hu",
  "key9": "4CKMTn3jrDzMjuAmbVUV9iyc3ndRgTt8EPtFsVkqWjmyFi9B2CdtJ7p68Df78LbTCW7CaoeFps36zwXWwvF1oNpK",
  "key10": "3g2jWniWPyTgosYLH8RNyR97zpGhmEKsxTDv8FM1XRW5mkdiN1g7Kqm3Q7YqAwvhLHYutxkf7RDnXzSqp4CcDyKe",
  "key11": "3afa5wCHTxGBba8nJJz1ynrKMW5jakHTpL8oifbYt35Fj5ySLc2P5KGHcw253r88oB7Na2PqU7Tua9A781wbryjJ",
  "key12": "4vCvHW3X8tH7SnB4K1VC7Kdy4SDhWSS6vw3AJNYSDz7KzEHWeGKR96N6LSLujhD6bFm2ndSZ143CraJqzEkhimqk",
  "key13": "mBzkVoZdtpmmRJSeo8ZcVntdcebsT4nfJXxn1LxEPquTCcYUoLYvSNpUxpqsuJKX5QM1MGTwcz2HYVa5cGiN5Yk",
  "key14": "3QRtA7Y32DfyUozYVpouVp61xarQtotWtFxQkGW5eWkizM5FB3dDq19KYowTT9H3QD1TF83zsPsQTbDSwMJLAwTq",
  "key15": "5FQzGSUM6ZwYMwNSsxY8xs6NENX6FQp5PCrQhrzA5SrcFjD6zcjCuBATw761u7m92FYLA25DYaBv5trmMSoAwyKX",
  "key16": "5nn5d8bXfVXNyf2VETejzPt8AHBEQNaQXTPDYuojgxbhZCFQibKaS58yo1d2Cu7tftye2Lg6Ag7u8ofPLVbnDtLU",
  "key17": "3gG7ZD3sqaxA6R8jVkkpv63PdN8VDc1kthovQbyBtvSsV5qLtCnC4DesAojPmGjuZhdnnWQNJZLAu7jRorPmDozp",
  "key18": "3oeWdzzwE9i4Hsh1pjbpTdLrxf83npPrp8b1g1KjA8QQ77S9DkQs181UCsi3hVFzF78M1hz8svMtVm3tJPvzJjVw",
  "key19": "3saRqSGFZs2c8eUg6ByWq6LudnbzNgyoANU1LUZVEcuVpRsE8TxAT1hagMjiytVzCACo9vJrp8TxufcX5kCYCKKH",
  "key20": "5rKpgKrFbcNUNEqfDvBjFiwwkYV7VC1FLd4QsC6pi3wKqE6iYUj2HnbHzbmUA4nafqYfsS92QH5kcM7dTaAGRSzy",
  "key21": "3GiRUE6LLdewubzerdatVfPCVuEBP41fvfvxgWpb98BEPXyG69ZzGpq5Coh7JHuRr4gaBPhP5rNSSr8BaYnBsaLQ",
  "key22": "uvZuu9rDDYnMEEy3zGgHQhfMgdE7qb5arqWzZDUQnTnzNd89azMYujNepnpvofw8JMPgrfqhw5cnDHmHSrTYR9H",
  "key23": "3rikjE78BUdomxQaaNW3w4SvDMxf6ZTCiWXVdVxecktGXximbcWFXoyPN9t5Ci1n7ZMzjGDg1AUaGyFbwg6qoRgd",
  "key24": "4z7StSeqA3uoUDodPKKjHCrmpqQ2AjVaMtqWnDaj188ubkU6N2k5JQh8Fv5hzBwg7W8auNxChV7cdgwUZN7tssXg",
  "key25": "485EUEVJ2W6Ug5pt7eRm4oMBHQiZjRQvPQtpfDsePT7bKNGapK28tfERZbavu9n34P8oPhvgR7oNawX9N1kA9Cww",
  "key26": "61Gv39Wg5FvMap6jhy1Mgs6NEYrKtnVqujSD39Wd8SkkgMWpFn3tdhrnVo466VVg2DXVkv35ZeAzJ7vxutQ8qs5Q"
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
