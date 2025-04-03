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
    "3WCEnPchSm3PTvoS9reQwp3EQfMb3pzPi96JsbVqHTrYhezsDZzSVSyRhk9ExeBguii72YwuszqgirhUCYHiZB85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C13FNWgQ3uUjkUJYx5paiKEdcFBYxHAMTLN3DEMcdMYqsaqp6H17F5HvkHwT15hgfwXW7k8g3DR4WHeYv7MWEVr",
  "key1": "5p8q4sGKRrFqp9u5vYHbH4h7KnPV8c1r4f1Tv74tAegghpaUY5RrmLiFpRJMnQKDwXKrdNgWy64yoqmWgYH75iBj",
  "key2": "6o54tuJ2rQAtdFqRdFE4jY9HW3wa3ufnaAKcg1b4yrUkCMiQLhALj3NAaqUzB5w3rzvMyBVSaX7cDkFHDsfYg8n",
  "key3": "3s9LzWY8t3niFEvQ9gTrrUhVcYcCnFrkZ3dgzCnvnBKUbFUMxrNqCFsUv3XQe6Qn8kZoiptCq3Xu3f79SAZ6JT1w",
  "key4": "5MsaAujXcHqVFA7F8shf2PUA2rbNa8YAZjAESUhztPAsGNe6xs9kh7pZFXEqr6kFdjQLToV7RQShxUzqwfs1c1Nr",
  "key5": "5YSkwpwTaDHGQbcuVd1Js5gTArs7arvN1D348a2SAvx2VdFZm1eFFycdr9xrBKySUDZZJyU3ib6pezcmjwbefNYa",
  "key6": "WJKtvRPfztDk2TVJ8P5Hep6Cvz5cTxYfdqx4P3mcarn2gQ8YTssGAnQxfA5RnTvPenJEvaGaDFFHv558wu1ppBv",
  "key7": "4gYSYttenbHHBXuMh361QekfkwbhHqd4PNWEQJEb9Th9VYaNnUjM2eUfpRAF53DZi9C1rFkWVV6yPdCeejXTyxAn",
  "key8": "5DsuLqbYKFozkEwxkwwxPYrnNC5URaaiTHyskgJz7xT4eWqQXYFUV1ciA6Vrg4gTpUBJPn9sTiS61xjSSpveqsPp",
  "key9": "3TGiWQexE4mavac83h8Pwbqd89s3iXyxeS2REMkh1nocf3mGoMwzbDbBJFwWSxnqYF9JePA6qbDBEzW7T9oMaFSi",
  "key10": "RgtdGtfgVAXeYG5rExKzbJhK9Mmgcf22sMEGEZyZuroYhhVEJQJ6qL5uLDW7RDyBZ5q5VdNYHU9eVJ2JrjB3jY2",
  "key11": "5zHA8p6FCmhCrL9DRMWEm4utvaatRGeX5GqznFqbaiyBQ9NG2PVHtYeFmQNFRzVDgyKdtkWYTytaQTem22Zi1exC",
  "key12": "4wHzqeSLVCn5jAdgW9oShE8zxZeMZVUa7kfpYajszYWXtEkvJtiRpVsu411WU8X6eaFAFNdVcZuYVaRW9wgj6kaW",
  "key13": "fUK33nFNwdxEqb3QJfqMe5Xsy8YGdHPU91HgUrrY9SgEPPZZ5rMzXzkpw3VsdtrLLBz19hJ8WMLp9oBKk3bfx3K",
  "key14": "S5313Se72MxMLSrtDVjqETX5GoPzsyrJobsVrfLqSrSs3WdtiLahv5tRvdJG6t5EKBck2Cxvvi8vN7uWtS7woPm",
  "key15": "5HvvZjX2S5jFUMaA6gTvT8t3SmpJUzqDzob3mHFXdrkL7hNL6TACeLXAfro8EVDmRyqBXjEeGmejxFbcbWvYBKME",
  "key16": "4j6SiSAkzZyDFdCArLEN7hPvSto9fUtTpNmWb12vHrA47YDDFEWqymhi1yCtuFB2bVzTk1x77GqkAZYVa1jWFmos",
  "key17": "5ZoKfPGMc4kNCVGMauRnBxnFv3T1XYjwunQg5VtZtDZpc3Z4K8QX32BCg4Umcz5nR7ZT7BchgihaHKrPk6yZ8ico",
  "key18": "5t4DrGj6Ef5BfKupYgx3HkatntQVCJ86KGxyMVTYAV9i9diiF35JMgrrPd6evSWsAdBea6nFotVT2Nvm2zjFqco7",
  "key19": "2PNnwRUyX94TST9kYoxoJxnCbeQcAPswg57Y8gDaHfi5PtyHLGLb1vXFZE7KCsHz17fS7nZrjWu3TNnxaaN4VCxS",
  "key20": "59wqN2J973srhqCA6EszDr8QQGzmbGhKK9Q9i5miCGiQzSxUPhjHqVRArAjUjRTF8Dza6bgxe5v4F9eAwzd6ra67",
  "key21": "4N6QAZatjhReEY8mD8pc8AuY3F6EXYDfVrVBoskQ4Rm5ZBCRXAhNJXcWHkMfrpHPMvKqkMWwnxy7Ck2Mrcj9K68t",
  "key22": "5dUcoauZpMCgviGHwNnTey4xZVd1wDffz2fxYSZWytUwxn6766VMw837ECvMuUS85tYb1CJk1URXpR1ZGriceq7o",
  "key23": "2KVnrruNPFvhAnTJTHfd2nu4sxAnNzcGXa128CjEw5de7AFJtsLVNDbK8A8qN7b8CP5Us3zDmXmTBeG9EBqzDqbY",
  "key24": "pASjA4zt5pVsDzibxPhXRbBMYJpqRN5rzEUs3fBHRphg2EyrqxBPW7AA9mNPcTXMitYTRCqzAzZiA5H4ZhDkAHu",
  "key25": "4KhJvfiMz9HGuTV74tRo2MoafkPHReCs7roo7atHnsrVW77La2QXghDrvah1uChWn4sid7fB9sBUn8HoTdsfAjga",
  "key26": "3nh1aDbsgLwRED4yJK3vga3GXzZveL8Ku9cynM3u4cXjm1rosKTiMmJJ3hwdYMuLAu1MLogxBqQqPUuzx8tYS2No",
  "key27": "5TGHz1G4nkZUS6H8H4tqKcZtDoLoPhESUGaDS2ARspp2Uod61peYgT5RzoCze5T86AKYMWQmNxq4dporsCBmEPsC",
  "key28": "4Jpk3oHAAPrRDMvGwNhcqu7w5WnWXoYJe2nskeqjpFahqctDxuZbnfeqhzQneqXPia1WnnxSd37xivFUZKtEJxko",
  "key29": "5huca3VVKoErhkRGHdUHp5wYw32MzoC22JXyoBejVc4kAKdVUbyAN6kVxKXZdTjtyUFsNTdQed4ZXHL898hSVMUN",
  "key30": "4hqoice9PqD8bAVyDdiFRnhfeuJ2zogtRUpeB6tS64JBCQW1gfWRm1GoNydBWivUQj843XBrdZZbzoXvkCCKFgZL"
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
