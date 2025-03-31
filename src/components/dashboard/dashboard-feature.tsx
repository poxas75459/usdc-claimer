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
    "2DGFr1YJVph6cXfadiWQghKeTMZ34ntUF43nKeHnCKiizf7rYHuaZhfDwaUpc1zx9nwMT4g6uoNUSZdGJZZewVMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNZfFPPmaQgUWrsHeKuD7h84PWeDn2XJYYbwRfAxZxjsFK9woPBBfRD8NQGTV9mVTVnPoaoWAEzDCwRYafjwPjx",
  "key1": "2BZLDkuffhVAaw22hzDgjUhH2u3MhyrXiAmZYrMPLZxANxCtzhLyNewDZK7J72ybfiBEaVNT7ruLpgqwKZ7NVap7",
  "key2": "39Wk3xmNBqozhejUNpEjXhPjqADVYbm8Brvjc5tqPiKymwxe1Frra2fpKLSMLYFmyhFxMF5rAJZ8va69PCJHHJcF",
  "key3": "2z6gSGCzTQxHvbTLKB4e2PWoRzWdVBf7wcv8o8Uq9zXQMVN6LEyFU7w7ihJ4it5cfzy3TARU88ph3e7t1NjCbEQL",
  "key4": "MTyqJXhwyA7aiNXPP99kDzP3L4VHYBksao6qxU1jnbogmaTR4391rMgGxZG9Ea7ehErFt7KUxRZUiFEGApLwpb5",
  "key5": "21c9UAQKz8dvY2zdXHgve8a2NVeo1s9YRhdYKCWm1sfU8FiBDPnS8dTN3x3qu7BNBKBiwYtrkRqs6Z3TLzkrJFg7",
  "key6": "rceN8zdxKbuJBbBiAY7Z9QGCTetkaFTZ3hB94WMvdXGHKC8YRdGxAeYMQZiGa2EcC8B6bzGBgFx3BhdRPCK4WWi",
  "key7": "UoXENTfVgxgQBXD8XMRN2YAJfD2FgQo4Mkv86TLgvLGCGc1kw9YfsxHqvnkYAb8RcaxqNuzr2ZH2Wzg4wBqMVJY",
  "key8": "4GUXHXTpPA3Q4vPHRRVs9JQKE1gBW2azyGSmvtycuitNeH2UzWMg67bXhEC5THTBS3rW1W1WwoSQCA287b51zHdu",
  "key9": "5YYv9PRwyRVLJQs7DZZYPT1crDogiwapAJBYcokPtmtBakuciijQWFZKEtzgjsKb7JKBou92HNRcWB45YQ1BnHC1",
  "key10": "7omQx9ZHdvtsEge6iPvcYHsLijyzsG4CRQQ8CNkokHgpk1SgibDBSVTq7gisQ6Zzy7YL9aVQdHG4XQtYy5yJfp7",
  "key11": "24S6d7tTpRe23Z72Kj226TE66cStDRYJMG46pba3cyJcHm7w99U8xAidD1MkhsgQvrnZgToGQhcDMq46R6pyyCRv",
  "key12": "3cGGjM6UEVsBr1jTouXxFupp57KMWhBrjKE5My8tLpdmG8kunUcThsGZSwnpcB3Gu1bkF65gTEiQj954ZVy8Hdtp",
  "key13": "4vkFCECtBrsXhXip4kmbgxs8nkt2RLddHZjkmzvbZgKgdMtyozuYuwyFsBvUsz5BwxGPgNfWqREYSNa8bdY25FKr",
  "key14": "4BYHgkvEiBEqbnfdLmHPBwTKMHWPdMDqkFQV1gdJaWhKHKfAKVeSEyuF4E4Y6TQGani6rJrtAybr2jkZJNppxEzM",
  "key15": "5aRYsPdzuKfRSRhP7hrHev4bCBhJo5ndoSxsNpMmNPNP5oBK7pbpN7BtWg5XBPorcABZy5mbqeaLSTK3XfHNJ5tr",
  "key16": "4niQyuqgqDYd696msZN19Haf7ZnKcc5NYyGWjVqSp5Q1vbELxq7fp38puXNz8gzfPmkc97Jt8wzpAYy33odSD9nL",
  "key17": "2ZZ9DuVJLcymUENkwYLY6HCa9BCstn69ByTjjih7qAiDH8K7ZEDySC8K9dRqys5GizuAfHj7skcF9c13kMLCqZ8n",
  "key18": "23BfTmdE2WEGXEBhzby1Sux1TywMuGmtqQMkEPVchHK96woyQ2GPPQ5j8EnMXzcTdPCTLzcUNtCH8vwm8Hxeic6M",
  "key19": "5oJogbL42URMCHRwkbnVh4EPZsT4XAqRmnykV26aJ9zunFgBcwDWd4ZYyGhQqD7Z72zBSZF2xtWgBXBozxSMKRkg",
  "key20": "61NBdXsvkJpgp88QtSS3BizZmtkgRB9EJCwfPWkXmNAt7e7jhMdYxkkRHxLzw1y7g2SQyajTxH87KkqVnibiFyiJ",
  "key21": "4Agmy7u7B3p3WfNkS9NJ8LsQiHd6A6tD7DmLvTy3BCZBYfrva4TrGc3j5BqHs62PH5fjgXa43njvctisy5oRKSSg",
  "key22": "4yeAjwfyfhwqMN8fvei8mvedh9tYTyfLqu7xoWMFa4gmp2btRZDNYcPkiwnhb8R2sPH3onaLgki12SH3TewkBDUX",
  "key23": "FWhv412XLNrbsxFNbm7L1REScG6dGQTUMNvGqXcRKVreaA3DJ3YFsw6bMiRoGJden2Cw74F8aZWG6Bem2JZb3RL",
  "key24": "5MNkYgcz24cWy8i7sKuDhfs4mUQxZR4NKyMupFF1dy9GFzLWFLdHSeVWU1zRp648BhQb17E9uHawanSAjfGzdF1P",
  "key25": "fsFcRzDedfRHeT1PNXzFdEMWJYNUxg7A5NebyGRqHQSDvZLqdfrcW2Hss1vjD6H8uUTyx6mh8he9iwRqZfNNAA5",
  "key26": "KYvG33d46A7WFvA1GtQPcYzp7Vmo2fMM5P6FVRKzMRFQvjSmsk5gUcs6BdBF365NRFGjhqxcAVfH7rC73YyxwJk",
  "key27": "3F1rzK2mtJ2pAAiXufyUd2sJrmdAErvhvLcnKNxSEbeRxmKkGLXXAEd83ct1amqzKfR2s55akc8x58pAHY3B9M8x",
  "key28": "3AYfjBwv9QtLaLQ3eeVz1s5qNRzJf46jtwmijhteeFS3d9Z4pwqdqL7PsoG698osgb8senHKS6H225abK1g7ACUv",
  "key29": "5EXx7JCDmfQvkGWPbYSsYE7t4r9on5enYezZsm94YTsbtLYVuwPcx4CnL11rhDiPTWx8gFUD2szBCWBosYKCL8ok",
  "key30": "5JtZaz1GLhJhQfLtuR2VyLSWggM2xgDJUS6jX4p3nTzzXKZSwgMBMps8EdUrv2rKEcRi3b7hzf7vsqeJGywFBm9A",
  "key31": "34Jrb7GS1TCXBdQ28xYapTG9oHg7gFL2mLF3NA4B3LX7u7CmytS9ZvbXWjMGXGeTPAwPRUP6M7tJixKvpwvncgGe",
  "key32": "5ZY7mQnZKU4f2mbNZkEbuZGysJWLKgMKozhrW4NyeUjvrPdwpNVefRRbsrBSAXDDZcyJ1hFgpLue6tW3neFLUQ2r"
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
