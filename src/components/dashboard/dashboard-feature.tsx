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
    "3dQxfeykmeC4R9y1pYC5iod1y3LA67UvzuV82Mx25N2SMYEarrpNNUPhavjbzeJyELBVmvErSb3336nZRLr3hsVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbiFm9AXbCNec4LBxxjnVuox3GG6C97NXtyitn4XbaFsb6q41hPX12MjQrmmmbSF9uTphGMzuRBTeBWkskc1jSq",
  "key1": "2Pxt6CA9ubof53yLWFYmK5rVcFfkfxQuLtE4PtLAKJYNiYTwJ9s6TPyUGDorZXPKzx1GXpz2dm5e9QVJNNjWyzpX",
  "key2": "AWwJ6cBhtv4m5FaANeLBbcRhWsoPW5cyo42oCqnnjcogq4GShfUP6XwPFH2EDfUgsDPKYgHRsA9tLwKo6Nit6w3",
  "key3": "3gSK4ccY6KpU2PdRexWAAxfqTKb4ndRLbHSsVr8fTLsL8nBaKBKuPZ2BLF2zk3bGqqWoa79Cv8nAW31DxwC525BK",
  "key4": "3ZMMe2K6WC3CkenBSghDYzutSTDFZiMwZ4KupRLhGt6Fc8qZQWgWyEEoQ2fWAF5pEUB35gVVwNg5AWUnHA5pfAPo",
  "key5": "2u6477R31zmPQkXwPMar1yCeVvpsuCQAE2XkmMPaAXavY32QUe8XzfUHo8N1j7onq7NotNbYuikT1M3iSZnCWV5",
  "key6": "3tRXAp8FMu6REmBHXK1menZ23ch2TKkrrd8gs3LYtFL1xcmPeXBsCLVicxNXkuj7m6pUz4aox8tFkNgvkTEzsuk7",
  "key7": "36xks8wF4tPDWAYjjqmw8WTzrvfAoDxAa39TizPQQ8TJsmWmSD1jPj3WLmMTnFYwba9q6yW5UXrLYrtWQcqkUtYd",
  "key8": "2tekybMcdsyEgvn4s3uhVXbZUyMvrQMRdLRg5aTQfcovCwfL9g9mUpPDJNskWLZGfDDZpFATqpHDe8RpG1GugMqp",
  "key9": "5R3SHnrzGtzMRqjxTq6VFbuwgeQzJkHVtr7qQhkRF9otQNUCVWU6xEDgpbphKRc6pW2WU4VXd6ZYKST1KKk5uXqL",
  "key10": "4t92HJSiW1KbRBJ1b5PpidKoiTLsQutwKPobceqZJZhAFqDd2q9r1mjJZvmdWFqTxEg9Z6ETswKjwVtPgXripTt2",
  "key11": "38U1bxASG7gLtntMWcbJGWP1Cwrc1q3ZabX9cX24PbFcNk6vPyC4HDazJxs7TNr96ESFypmNkY748uYABNSjGewH",
  "key12": "9Tr83oq6mZWethrtujUqkt1FQp9V3riARrMwCb6ss87LTUZF3x8VF9gtPNic6yD8yUZPfTQcYr37CEJNB3wGTgk",
  "key13": "jy3eCdY2fMA7QbvUh1HacqBYLHJkmBToNsMaou8Szy8FcBmV2hiQyWKtNjkZcqdmb1atVuRGBXFHbBFyrvRhpHr",
  "key14": "2YgLevUn653duUH2amVxtbtuE3SWmYJoHCk8zEoERKKDYod4v6Nx18XttPfT4FvEeJvs1FmXMFywPcS4GjJ6aFy3",
  "key15": "UFWjRFmNXhxRAjHnkqD3mb64RUcEqKBwn6yMZ6JSM9wJXbqFyuwbWP1rPasd3tUQH6xu7JUdQrroMRHNnasR2Ac",
  "key16": "58ZGPhNPjbru3eBHL3GzVRpZyNqzwmx7jE2tzeVjwSMdhQ18dY9j7BN24knZjog4JFqm871FvLdZhfHaJc8udkbP",
  "key17": "3H5TuNK57hB7U3sP1dG6mYESCDsVYY7HHw7oLYCv6J2AQFyZbfjTw8vNXFV7XnKyefTMASiUXg6C7pr2aPVoomE7",
  "key18": "3GV4zo715eQ5coFGJNmASwE6dQh41Urifsv2RqGMGhqHPPwihL8vdKZUpAsJJ2NEYpHkC7m849HK7aA5ditbNGcL",
  "key19": "5XcNUTxM5FWuRcNzaxDaezDMdGnBMMZPHxYtYWWzaF9uJqZXovKnJ1qEk6etN2KipDAmZeEgPzdfMtgWAcNEz6Z6",
  "key20": "5itcxkxLvqxCtsDSAXLYA2qqPfk2RVGnZFYFAJgSFUreLtEurybU554iJ3X4exaH15L5Xkb7QSJmce88bK3Jjrj3",
  "key21": "QoNZnkqFZrAkoQhjsKobznBtRv3wQwV73FdxUNfBj4dTH4ty5w2hHwHxKoph9ML1rKP15bz39FC7W7Lcmwf1fsd",
  "key22": "24VkteHepPmGpCjXFu1NBPJhGM3BCG5jVTNzUk2pzbqEwKqV9BVunQ9MV8FGyjeTL3uBpHzKcSJ8U3FnHq7G2kM7",
  "key23": "3nkK2h8cbTyzEGLcf6y2ijWaqYHDzypE4UNefWsdG9WuxQkfiiCq2LcNSkAhjeHTd7oXoA2rnVU5oYP7Z8RV8gkn",
  "key24": "4N9amS549DVRn1jg84fhpEomoCr5AeLQVTiMjVKPk7YRxC7GhKcyPRDqBoxoCru8As5TQvwpXVAHLD8BgZyf2pNZ",
  "key25": "56cnHRG8dUVLQT5oVbKW8S6hM3ZkU8KDBSNN8Ba8n8XDP5qHLuLAhZ78HPDcpvhd8sWKXJGgCYGpddoLb9sDC7UL",
  "key26": "4qTxqT7LVrjyaHjgezqYjYdX2a4n8mB1tKUCL4dKjcZ51MR1cz2A7SqmPGJnTDHrVqgQzCkJNVgVi1SSu6JD9VsN",
  "key27": "2htfTqoVfWJAHP8jRUSB6R2BVCrhHDsLKknLaWUkHXQ2ij2gB1xwWr1FENJqGWsNrWVWxDB3b6WtSchZGuwdW4bF",
  "key28": "2wg6voyF7Mdybb9G3SPGZF1qk4gdcNj8KRpXAAbRqoDYuiAFxoKqcqc7jkedB6pszSDErcQxjzufxSJM2NbeKjpr",
  "key29": "3TLT4Zzp7AXi2fx8WXSPArpnkHytxRU7LS5gPRB9AxXgjFLYS3NVM9WvYJou3nMSnurKVG4C3eC9S2nhytzBeGbX",
  "key30": "48occGQFY6QQdJhqySCWgCyFpR4TWiPfzdLqMdYZ1wk9HMhK93Pw9jKTvNYsRPLh4XPoXQnd7ZwB2LaS7otizhrY",
  "key31": "3ejoHkueQeqzH7G6Vx57AQnCtUUDddwNscdd3HPLJP2LEt6LoYkhWmw68tSMLJ3yyHcFEPw1Zz69mcCYXvaPfqtM",
  "key32": "66VnkBLE713PZRrMkAZxeR7zdEZsCiBm7mLbLBLtpr6F1K8BHZuREu5DsMrGsmjfhMRDin2D4uhMoofV98WDG9md",
  "key33": "4H7SsERoPjSeuikRAdr74qNznaUezkCUAS1pqUuJvBwYPVUNm97HxFAkUiMdtfS1Hd9t4eToTDQHsU6wZsrZzyjM",
  "key34": "5ZA13cPe73rdw7R97EnCxFnseT6azs35Hvy1zZF7S3pn6onDYSd2Se2stR5F4KW2iUMQtbCQz8VyhG14DVpYryRU",
  "key35": "4eFkWkK327PoQ3auWqxuzanFWziaqncnPe7SQBCJCdoxYHVgMTM4BWVeUWvjnTPosmQ8mFkfuYAeRBx1MAYzcXEN",
  "key36": "59fdea16c6TuGzvRVidDHYDC8pKNGhr9q3cTSwnKLwDcKGzgC367sntFEfqFsuindwALVqwwWHSH5gTZo34qD413",
  "key37": "5jjpfHjSygPWWJfbDJZXZ3tzMYd98cv9wVQow4i98Q1xEE617siL992epJ7XrqNzx7uxHHJBEmWRybwjeouNgrr8",
  "key38": "5ys2sDhqt3oWeb5xeGynLTcXgar4jjZ7uG5KteXusT1Z9aAvD8X2hazWj8LeJGnvNaSkHpffFX1TdeCjw2KPNU7x",
  "key39": "3bMsqBRDPMmF1qiroLKApA6fcswVxDBMdpUFmdyQFzCUd69P6RWSNFusRpysnvVGGCVsMtbzMBxgB9pKdWs31Pdr",
  "key40": "5j3J7qdCxg4KXaovpQwqBwJPEBuNYYp8RnRyQ42pQXsv7XngR7LKkT2w2KGHCNr1CQgxsANDhHG8Hjck5mn4GdD5"
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
