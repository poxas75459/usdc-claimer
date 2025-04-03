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
    "4L4imCHcpEjAtWduYqGRuwzkzNNjnDY1XhjrJbtgc8SyUgttWFpUHrQyzybci32ocfkp8yFPPvpmfSJSrYCzP7YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jN8RsC8njvvZTjHr9VbgitHGLvxvgoCPJz2ydFnn4fekkL39As6Z1ddtd71fkC5PmB9vufVGnhKuvWbFirEou7M",
  "key1": "4zn6PG9i96QCu34TtGpndA9ZLB2SsaN1bWqhmEc2EuxABBVXJ7Jeyd5vqFQbeQYRV4dsqpXSN4hwsUD2yFJiw1Mr",
  "key2": "5su6mDKQP9NdLL5Fw7xaNPo3rcbFjEzeAeGifmTR5uxR9RnmZowomUFaxtSYTyW75xmq1iMvtYMshJF6azaf9YSu",
  "key3": "5FJfNuGid7Jx3hKBhdpjRA1CYd4ap4DK6qLVdRsANzeptFPfBRT1KCw8iYfRrV3WXpGdTBLWB4e6fCX5PneVwKHR",
  "key4": "pE5NmYtMn6fFbnXZPeNfftNSrja3cGgBLPcxqB3VTJHosm33o5kYe1SFFeVXhKFRZouwVh1oPgHBg8joVz2UF6S",
  "key5": "KXytYjZsLfb776aufjdqAXS4mG1BMFob7n7QQBDsFRoL5qJ2NDPACDhwcA454XujN21hzDZhCKrmwj8eBFTf8sV",
  "key6": "557aTACixtSGaXstBJPip7QTEyxoJrnwPdze6uoGLif1nSmBusK7jSoDPF7JQTY7cSYbyhnfbsMRKRQGmFbX1C77",
  "key7": "5N1DvUJZnDhKi9mMMdTM5jfmNanesVo31aWhgaCEW3gsQZ3NkTCK56qUBu27HwQZuYCk5kiSTrcPwfbuAfSxRevS",
  "key8": "2aiHTrTrApRjpqCsPhFXYNHBGpEzsbKdm4pUgA2hhFho3eJuJ32rLgTQGUgnyhgLZYRBFuZYifpvE7FYy39RKiFy",
  "key9": "3YbNgJejy6uezwezeo1DL8tB9eEYTrjV3Y2DYCw3s6HrCRxhLzA6gSEZbhK4PjwZKbgTGua39GUdD9FJF1jSSQVU",
  "key10": "3HrQD5Fs41jjUDFNoEmoS3YSiwijWk41sgqmk8Ri9nMX8DmKvQZHMauj8RSgrrUVDCLGWZsvT1798UUTdGhKqQkX",
  "key11": "5hcNCEiRhhJD1R6RVitUALAuAS3dLDfSXSvuo8XAELvfnimJCoeMtaryskwynCiJaJPrMwJek8cvsgLmYBmDzTKL",
  "key12": "2tzNZVm9a4gRpkTXoAxXjvsEHsnj6x8gjNJyNzB2tSHv8KSt3tJpHvMXkTU7Us6z8ruR6bpZHjReF71eRuDDd7qS",
  "key13": "2Sg8yjE6nfpnQ2qF236unYqyEMg9khiw7N1NvDgE7QnCLowyexzxG61TfwmZxSLZ8BKVuBsKQ6cAXzVp4hH6TeTb",
  "key14": "sW8v1cFqQRh7XQQpr8pjPKADLrySn9LuihxNTWBe3953dDJormFAboUZWgmXnpmVeoSyD2M5GBGcwzdVzpXNuN7",
  "key15": "3HBZZuk5TzMWztGm6FK7Myi7p17WfF8ATPwdXnFcqrjZmAK3wC9S6epBFP63vqaq9AwbHneULnT3Zth8yzainKZE",
  "key16": "5qXt1cnyxTC92MYFsnUaW5GQbsjiKYE85DJ55h8Sjvw3c4YrrSLaJz3hZmD88fcY9qQ56WNTNkR72YXLEMhsRQV4",
  "key17": "4qLRTvqEJp7KSXZsrRuXZjTU9rWRSVXri8wBD4YGeJ1XGG8Lnt5RgEaFim3zo6E3JX2AktH6rnor2kvRghqVo7zz",
  "key18": "5dZMvNmqHarYMZ3DpEHxZxPDt1Tovfys49TkF5xVcEBsvuUDaDjZr4Gk6e1uUSwHaP6YsNxonTKrLgQfLj6wAEB9",
  "key19": "24nsFNh5GFajnzfdF84VbQtmbyxgoV1aCTiLb7SHXGhuaUwQtrLgDbyFL9xZLYE2PPcuSFretmaP9aKkJ9ny6nma",
  "key20": "5KYazspuSrSeL2J57dJqtgzCzTPS4osuew4N5JQDENzsdNny9imxj6v5AsRYrcLkSqSPbHZAcQM17k9zqZ1u8Aa1",
  "key21": "2kFq2jNY1HZtaH7SbgLABqHMvkY5bX2JpJoj4Ae4gzgjkHzszi3D1ppCN7VMahfTLKfJywAMUZCcR5KwhriuNt1s",
  "key22": "LpjEkVkAKykC8nDEGvv1d7dTMePvUvVvNYH3zB94ZqZb7QbYw8qDhvEmHA3tt5DunqqW6WJYDUHLZsGNz1fY3bm",
  "key23": "5AZG37SjmrxVkSMSg8q78egdmWBGmbdFWw2kgErQWjCV6WmTZssem2d6jLdtxh6EkjSnvmJ9s119xJGEyamRqwxD",
  "key24": "616FqcVLiR2iwJfSoj4BvkEHZBkXCMiuvufr4DGdU94uHvdYkfXfnCL8vcFduri6m1V3xSiC7QFSiDzMxC5MhVj3",
  "key25": "2KhAyHgxC8Yor5GdNStGUSdozdTy3ynEpm6gYULo4BVAC4Cb83dCjR4MgFgwKxKn2shvRr8w9VB7tDJDCFBdyfAx",
  "key26": "3ZP2pA1LTvH6dxM5PgcaSYsLBoRxQF2HRj9Rr5hwDhTbGWqkvrnA1AZSE6Wy5Gr5s55HUcyDJ112Za9Aoc1j3T4M"
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
