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
    "4NRh88AjArSkgLMXXbFAzvaQUgGKvdvQ3wguFL42YRoNu8PoCPtYdoBZg3cobXtddVPRSwUTabmuWWH5egU7RASi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YS6eegLn3KCvzmGuV5p7TByroqgmNPxirdKBPz5inV1KoGSQWwtUCiZHNfp2PB7dWtKYBjp7t7Xv5EC73kLA3iy",
  "key1": "59BBmQagMVyemaeeoNQwaB7YKAguAZxvQtS6bSiPenX6fsRBKMtdK2NebaJTXDh18gaPbGRQCV6BDfkiP5gJh9iG",
  "key2": "4wy6a9DMu6Skv7e8eyig5FTPNp7vgxbmBp9K9BqCgMismtjwtjL1JUmxGvJDbi4Tw573TUSCZyntnimqzZRpqjCc",
  "key3": "53pURNBurnN23sQTGw44re4piDwyvqu1nyWDk6qGPxUeJPHkGyXdu2mvw6hRBNfrHaKkpzuGJZ1xmYuCMeTPnE2g",
  "key4": "4qHERxExvZCcmbXkzktT15gPvaK8VwWeU8E836kojgEc6QANkwxd4TNyr7NvNzjNQagms8eqKuq8vfh788bjhgEn",
  "key5": "2R9V8xsBF49nMJjFF5i1Rr2TrRk21q5ccxa5rdkFsRKkMAFh8g8FTzxCRA1T7V2i4NNUFpSZCsSvPzWj1sx89HVZ",
  "key6": "2gSoBAiq9x7zBKksxbSuqvMgKskQBX8fswpibdEXoahAV3uG55fip5KDUQ6ps5k9xpmY3ePrSJFToPVSJRsanbNC",
  "key7": "57mLzakPNeXTtjdbsw95M216zHb1N5BRZC9jzz1H7YvjN3Yo5fWaogpXPQjcRZeopAmuBM3P63BLTky6GMsmz3Nr",
  "key8": "4Rikq41eN1yvF8LeBSxaTRuiq3YkT1zVfGXFVJXp2vDHXXnaQh2nVGWJpkDXKSm9HgB68zzLNurDL3Wq8rMq3RK7",
  "key9": "LBw33AAVVUon5ETRB7Zysq9iZNbTxKgtfqrKcdVf5XhnL4mmsKBBts98iThoYDnEsP5K7ZtdqswqvcieY3GEfL8",
  "key10": "dqKQv9fZWewcoi1uG9hS36FwjRC1TwVxep2j6yJmcjxYtqnPjHPa3kT2jtUKqVjydW4vTS1qf7ScbqBTk5jgWk5",
  "key11": "KtHkWWrL3dwm6nRagvmrM4cBfrhoAZTygkjYfZe4Vm9figS7iUBeNsrYwwHzQDgcw7PMb8qwKRimF8UnhdSXDXs",
  "key12": "5r4KNgEfVYCXH61XdMT1UnyW4HQ4FuYcK8MyVnqCf4iJoNFMwCqc8SQrtUHaMKRFXEKJ8WJCnW2X9bRLqNxrTtdP",
  "key13": "63B44fd5mzMWug7JH5Fzupk9ycEY9yCS5jpJzgG95X6nDg5QD7keSwxCdcrozQammDfUoeDToyz3Hg3pxxMGDUac",
  "key14": "4yDMMPthZwMQvmad1DuvUm54cLmmCw7y7gXvbADWKFgVbB9VrPNCJCkXnXxBMjEa4xxo4wHsbmXE6yGf9zcAQTrR",
  "key15": "24o7ZgpwHuvF2JfPh5jipUZb9gTkUu1ZRe794mexPGphu8Yi2nrxszR27UoJNXYozSVqNRw9H2UG9X9HgWSku1PL",
  "key16": "67XbBSMasyR98stFk847xsvS4zrb7RiLoG22GTEAWUZK1UNrimxQEEQCFLtYZVDoNHm8bw3DpVaePG7oCf1zBkBb",
  "key17": "5suCaG8p1xGtCfU2vsn3Efu1mTgCvCrsZuS4E9xMjLN7JrGSWpcyYXW9ZLY2hwoh7siEwVZ6G9LrWUXgTbEXNNeC",
  "key18": "5gSxy5tvSzX18PaGDGuFJH9HNayQLPa9rf9nRvuencyeEmJEzVopaKAnQ5RHMAvqd1AjXvFXsVMPkRsnHzDJAPL2",
  "key19": "26gHrFAnVJcHdQ1HXuC5oT1zbtv7M1DrEpHe1bULZtfXCQzoxkS4mHsjXZuK2hnyy4txPkW618xxmf2WhBb4cf5P",
  "key20": "26cRW3x5oBRat3Pj3tEKvN2w57ZXiqPBfpWkhxgeifwnf8WgsYvVYBttKjqMphK7eWAvyZGVoE5Ji3JgHzWTqdUE",
  "key21": "5LHof9KtrYuKokeme5FJvKpnryCsVgnWF23B4Je9iXnjYagEaPqBwU61DZtbhuHUxbuiFjUqfN4FASgATKC2tvue",
  "key22": "4Qz1SqLG8cxADpHZZtcwHpwUWCbHXCJgPrt7snRUfSzfoyaV28JZpMq9diXwbCCe6ZvBoa4RbMkWNpVZp6nBBYSy",
  "key23": "5fbAM9vkxEkcUqn9EJR4cNPDeBjcyZZGqTBiGreW7k2dSU2D7c5V9NbVcDDXyTcerkMP3gtAPFKVqVXqGwuix1bK",
  "key24": "5ayS2nhPFKy2ufYtciy8R3bMvmntzuCrU6Vo1vPoJsThFZvJCFve3zbi7Q7v3TaPRQMdYvzHvh27imYaF8sCdZqY",
  "key25": "5VD6BCgVoFeGcn7JtQQYnHUVcM28juqE4etvewk9HCCqt7LX5zVgb8cCodQRkY63mjmjyp3FmSyraWAB8Uxwe5Mm",
  "key26": "4uBsmkCA2N7WkoiNKQwioAxvK9FNZYGAGryguArxe18sV1B8oL94FeG1yZsmXK9Cr2mvBykfHjVSvzz8wBZRjUKD"
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
