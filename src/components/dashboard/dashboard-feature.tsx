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
    "2UiAqSXJZFWr9UKuzBTJvd8smxmtvbPd9ZJ3zdeRto7QweCr8RCTbUaoxrXw2siCaysdZ34aXd9kzDVMrARffypX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42PQxNSbo6sX5to3fd2xzG5TNG67bQUBsBPYio4vgTDdzftnSXAphqQ98HdjvoLvGvLCPhgjYBgYQpNAP3WrK7VW",
  "key1": "2zWP7tBtZRFnE9QvbEKLR6gA6M6uQV7UwC7r7qWSDZ8AcCkgAnXZfiwPPeqh7oGdovtGcBxw2rXN1uAfYD1UNrFF",
  "key2": "2jyoapCod17toCKmSuuUuA7J7BCjMxBJR8ZxmaLjCPBNYBBUpPiB1GBwZzE9ahaMZdR9RxTrBV7C6DnhsYEEJd3u",
  "key3": "4vYXayrLA2gBuWhtRSxFom1jzjDHaNHpZN9A1QemRirNsYgKd9FUqEPAt4AzZztTbgtyVi4374P5cGzG4yNHZjTJ",
  "key4": "4P2vCVyrKPtGAkzn4MiwnPeuDgskCPyjjqu2ULdjovfCx6taFLa2DUcuw6WWMJ2NeLTDFQUuXi55YMUfnmfJpPGr",
  "key5": "2xfvtdi56tjB4rEgyt16SpGSP31VWPFUMuQUKFQ53tkiAJJPGcrQCj14Hn1GZ5SVYyJ5k4SGXsmfFDkZ8wkjn4Z8",
  "key6": "3jkTADeWJeExuLinaR1ppEL12xkW9UEURuEm8Ag6CivAE4gqyduyQFs6S96LVcTUk355F44u4uKhgGhHJsmZXaeu",
  "key7": "5ZnxuWG5e93c9Y4R67tGBwY1tD5GBvU1jGMHCgwvrNx8o7HfKRUArau6uTMbm1egjCeEuwmUwgNZQSyS8648HiB7",
  "key8": "37MPqmV5emi5HDZULsijtyKADA9KGrRrWTA9fkYrHRwHfY3CDQPcauTXpQr2WzKezL6JijYywHx96yqvEewBehTq",
  "key9": "2gWYDgWpKWWqhZ7JA9GL95Pi9ft1W2phP2cW4v8nzVtrtxuMP2Vc3MwCCYC5X16pTVa2wjoJrGyzGihCKVK1M4qJ",
  "key10": "2NRAFQARgLWusMn856vSn7id9GCCbK23gQCus9Sk6iuhVXoheXkuwmrXAg116TctWFHevcDqB2UK8AxezFwei8gC",
  "key11": "2z7AorGSU2rLmNjKJdAH4bJ99721NEcA66TBdQKhh3Yt7GPvVvADu2ZsWbhQ2r7BFaeZnxABvioX5mwR3Zkzv7PA",
  "key12": "iUBrPbAr9n8fVrHcYyaeRNFjq2emZdeFjHofj5AvQao8qpbTBXmJAKTBLkDRZ9NyNFZBmh9s8kvsyJfc5jnL9a4",
  "key13": "3xRzUVvPQBgeWejsSzqMG2uDmfxC2eMNoSpzRa2VQe5mXpJVcWDH1P3Y6o3eKvDEU34e16sWqCyjzRBXtEar2SB8",
  "key14": "4dxWFAxqQnpMezQD2JnDLeHZZhVf4xZhYgDjpFhKrWpRyZMQWjKggP4TZRPg7DLa3kHsqMpf7HDdUcCFEDs3G6hS",
  "key15": "63GMfquk6cufPHZttyMHxWzkykNX4FUhZUcT22hWQLpskhdnQx9SM3Sb14SvbYnVpZ9Gd5uY7mTcVxsruPMmMcEa",
  "key16": "3LmY4jbAUjGiA8JyiaDR68yUGi93K7Vfhqy5J2gpKBZf8cQBcD8p6oFiNJGAKYsA9UWkm3EaZu5Cg1HBG3HTyKVm",
  "key17": "zCZ1kpCtGJmsc5tbbcUXv3fJ1i3cetggFMgkCY7J3g3uECDJkgcDDun5GakgnWLp2CKEJ6nZd3jQUWRX9xovPVo",
  "key18": "4An5TvWBAXTpgveeoUM1V2tc96BuqY2LEopv9He5nkJULgoxA6MiyM9typg8KUzP5MfRMMfXzPiBEgenqryJokJw",
  "key19": "KBCnVpbrtXiL5HEhShrZpR3EeAbwYqa8jmnRxeccb1Vgch2xKcKXNUhDZkjNGZfMetHDrZpEpW1S3dqdwy1YF7h",
  "key20": "3MkYCMovSkzfBJK5PDde1x9GrJx1y2n8zMCddvekpwWBuLqt3BFAA4jE6fJNLMPEbqKLk6sR27ykznNg4M3ETj1a",
  "key21": "4rWvw6Hd3hA8Dfj4E18kSHEQjd2Z5PpmmxiNAPnGd6mYYBi5ApmfbHy7PLgbq33zzEWiSaoop4RSzuyZtei2iD6x",
  "key22": "2Vu2Pr1g1cHJ4jSvKy5kbZso6dEYeopjLtj331tAYbLAS5n2kB8dwKTFTxGnzZQwBtCeo44KaioqcMohuBHDnjWw",
  "key23": "2hyeQ5hr2cyWPqMUQtmAwvngPjdFSNsQMtpiWL7rGm4R6cgLWowus7Gwn1zWvDUNEFrWpFg9koMxeSaGY474XH4v",
  "key24": "27TwRzM34mhoNZf2bZv4pvsz4UsxLmrFYqGvx9PVy9WvUMT4eqkL4QfsPdG8S5fYTYHDVgXCYu8N8wwW5ShCKDsv",
  "key25": "mTHj7cZ6UeQCjqy2HPJ651khLrQtRTUWBCkC2jzUtceLTxahLriwTaXFXbuJPXxRox3vUmoGC5YPW5bsDUuuKHn",
  "key26": "2Rc4ZToHuYjzLaySUW6dX61TTLivMDtjGc6prTVEmcW21nsQFK4EasiTeaNcaaULZYdEC1PQqQ7CQzKy8bWmjaHM",
  "key27": "2d4YwzMLhX2S5eQyDbwRdvq2Zewtwfsc8SymC6Uc3h1fBs2EU69kryufkJUnyoV25J2QtyPvfgAoo8mCF2wejUHK",
  "key28": "2VcgHCLGvY1wDGvtLKLcj7cendVK1uUAfwFEwQ48WpPqUPL6YobJJW2UrME1Jn4irzSGRiTrKBxmNxkqLCcxH8ju",
  "key29": "2M2uUmdEREVqrJkMGURAdAJzT1GKeKFXeGTUbMmFsTHv1VQoqPf3nNHtNngXH6b5apN7MXT2hL7je1TknmQH6gZv",
  "key30": "5PXsLwWsLYkNg4w6sZfeoPcNnPjaK1Jnzui8ZXeoVA6wx4MrmYYqGZ13iNB75r6vLAYws3JUkjjF82oU7AH2tRKR"
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
