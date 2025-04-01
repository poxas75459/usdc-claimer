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
    "2W3UQmHZiPnhP4jcijQaggADGdYmPUeL9Upf5M19Q8WsM7o2KxQoKAKLQp1kznamZtjd39mT1JaXUg1Z3cQfFybc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efjpXqWvtK2A2mtXzV8qsJdT6Ve4DnWSw2siC9T2yZFsovKkDjky91BzGxeYJPS2DM4GL3Fh4KVQ1hrQTQdhQD5",
  "key1": "3qy1aQAerp9C7UzbZYTV6DAEuHeY67EAUX2rUEZsbnnpbKHwHfxepRVw4G7mnZnvLdttDvSfDBXZqNLzMh3QFoNu",
  "key2": "3MeSa6J2qfkNxiMKRUDATf7GEhNJtWsrwuygEAFiPkh2RNJTDVMUnnT2ELVzm73nKPaWqh9e6APLNakXw7xDFtgL",
  "key3": "4fCs2tfjT2iGcP75zDUjGEseW5oUW2bvHpUqKuJroXFypjjinZWkc7pK2wteT9Wn99c95bvcb5VePC9JbCvwgrCP",
  "key4": "548B5ZWCuBZDUZhMR4QA6mZCaXQvXP8rdHzf2YPpG8kJWcJdZJiysjYi9V4rbtNAMvADCwPpcFkCFS5PjsxEUqTi",
  "key5": "46HEER1uPaJ57o2a1HhQYWxhHKSEb48hsbCQWntdaLjFTRiNGPDJbBe2gYhzSXi62zmPMEZF6e3i6BZEC3BmzZQ2",
  "key6": "47uM9akRqacA9GHCGraYPFy3fYrXVzEMePYkhTKhVmsWkQ8DXuc573UkdMUq3ibwLL3r2h9TCQXNRU6VTR1NZjgE",
  "key7": "E7vZM1PqdgU7R3sYsvsDYBE74GSW2sayTTq3fGBWLk8yW8PU4pjaj9jwnCM8S3q3Vkgt6xncB9WmuX3Yo3g3NT6",
  "key8": "3NYtvaL7xe8mMyF9eaKJowmQYdqJ49aNEcT5duKCNgtiQ9Sf1LkHAR2aQvmYFufxQL8wmDFwCzyNbpWN1TKCXAjQ",
  "key9": "VSusiUDvyx2x47QGyttrSg2pHL9pXTiGt7KWL1m5B4sG42DbbbsjjR2hefY1M9MCZiVPbX8wZwapmidtHJ1o8N8",
  "key10": "5gyoqZx1BxibymBdEyUbpCdvnm73CX65nxavrkSbUrrjUvrYiby1EHoYtCdEKHfAx8RabxvPZcJzBzKZmj4MZQLU",
  "key11": "5FMD9VKBpHjccrx1Ev81CAd9Ebzz8jiNRuM7No1zpYFRf57y9oxBdTSCFpEdEnnjHJMGHCA5DkWLMk7H1TV9K15z",
  "key12": "oYaKfaxDzyt3ocnUAy1xLNHbWJqBnej2afQYs52QV88EHM836rSnN9qesivpja1wF1HEMyaxfwk2PuskBEnAvuR",
  "key13": "3mpW1tdbjFY1ppL73P5AQPsTxA277Gs8yDMXU7uXwncQeMoUFnbFvbLt2ZHGJM8VemeWVHCHToPrqd3NhUi9vKpg",
  "key14": "2Ghn3q5aENWN7ACpqJxt5bJcGyZDBuXB99jCk8rCrRN52Vny6f8TB8EatuXqYByF5FEKfKqrSJMkTmvhWSjjxNTx",
  "key15": "xvPKmgGqakZEzFSv3Z7noUb2EVD7GugURRcrsaNtk1EWNseXj4Zy8gA6oZLodJjaWpd4mGkRUkb7iDKF2i9H3ZZ",
  "key16": "2vhnMATEy2zBxp4M5UwCAfv8WBbYcxXMg41Fec8DmGyvrT3WMWZbZiGWfBJD23qumfki6T2MKKDaxfNwVVKbDxKx",
  "key17": "WNEYFAaJSCeVyKoJAX1JVqpQvG9L858vHD42JiuZeSzvwJzRznn1p9hJ81BnE7kAoMHVpqUsqYeM88hNs8P3ajT",
  "key18": "4J3BsS3S6iUMjjRcHNL3MYhKFvTrVrRgWeQEJBEbNNEcDgnkBp9S7WjLjixbhP2kuwuuWZaZ3y14reKGoi3NNR9V",
  "key19": "5nK7ZVfzA9q61ez9Br5L2cD3gQJzxvSAKwdi26boDtKQju6WsBxvSAZjXpzW12ivVoVH7oRhXMKXGrzLUfKqGZ83",
  "key20": "PDkW1YjWGPs2subcKsbkeyNr3fpDNVDwCSXJFqmpfZQh6sWpUrr3Pw1jZ5SNnjubXTLpnxVeoLFii463hhw8urz",
  "key21": "3eo1DNcxF6udwb5VEi73zQBEPLG7jcALSDB41eUizv5Gvzp2KfoBSeV3QaNLhe6AeRnC3xpJ7DFjT8ELmEApiPq",
  "key22": "3MNhtTz1FZjCYS43W9W1PJZJz7zGU5L9UXxiT2smVoHdAHYT27ZGCFCFNnZ8qH59HRja96VVbyR3HqsEWkbyXjfU",
  "key23": "4s1ujgjjteXHJUk3NXsgZjQpJooJmBbg7yfjBQrA3JH6q1wzEGi45XfrpTWufZvJ7bPDPsEkxFCcAJ8jAcdGX9xt",
  "key24": "27v9YTxSTUWTgf8bEMFoHAQmFzpiNRAnP989w62tzLGsHQouBEqttVxC4DE496y9xTt93UtdSLCe6qvVqwMMEsVw",
  "key25": "4mCqSYCWcDcV8NTzdu2V9qtC69u7eCr2cPD69EfW6q9ZEmVLJuGU3WabJ6vcHGx4TgQJpcvESoCRNbjnpqC4PWzW",
  "key26": "e85aE4x2FtmJSUWiuu1bmKm9FCFBZvRxNhEKPGqR1RrMvEfZyJ756Fmdd3SbHaSHgDDA7guUhjevu1vRpiRsYRR",
  "key27": "3dgixEtXUgvBsHiEgAXWkvZUCcY1KsLB9mcBRxNjsozTSAG1Tyqv9DXxffCHLrpTVarZxMDU77LBDL2ydVJpqE39",
  "key28": "4NaWdSjSABBsDvBwjosV8VCVrNgMRG37Wzazd9Yr5wPk9S3gs9R3YMbqCRGVPT3F4QTJr1N7tuVw1xJ6Lx9fKGbm"
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
