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
    "3zXG3APv4VMxh4F3yfsV9EeudFwomKHjocHaFKS73kFWB5kkEoKNkaJ5wQrU5Qa7afqzkV1r5rLkEk6635vb9b2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36n8b7caXfS4tSStLjWtT8hoNbgeEYtxg99eMCzgfNJZUUjTkaWQoKA11gFBGTcinkgu5E15SicyqY1gqrbzjkVV",
  "key1": "5vKGv1ayYyiPjjNx9fy3B1Bvi4XhtVEGHNHT2smCCRAJ6fYDVJdyw18yUTPtpTgujBxi2zzaFh8BgpCuSLniCptR",
  "key2": "4bC5nfAaDvJDfRqzL9UHXzmqtdnaRbKMvmc7WzLmh359FcHKWFY184zdfkwboTUYvHr8RMc7E1HgFx3CLfs1whAz",
  "key3": "3R5osoR4hdcyBfk5YdpFjZqgV5stAi2ECMHURavvnoQgnjYfxSv5eGnHEyfGB7AXD6Wk4pWBGuMf75aUjybY3fb9",
  "key4": "2qv8Mzk4uwonQpXivaLpjqroEr7AGTRotjfkUxQ9LDHY565ajbudFFLznszXBJJsNS4MvQkCTnnAVp34CXGxb1t2",
  "key5": "5EWvRqX1QuYwNoHGoDwHm7CuaoE2HuAjVbASvoCQTap8LpggwRngA4utYi3y8AzfapZuavTLKEoBBko9ZU4mwVVc",
  "key6": "4det8CxYf1G3h6E6orTrS3MxQ8inyaQSUSjF42nDXqv91XaR3dWhvGQrpghPu3hremeZ2v9HBC2rRoUAWGdi757E",
  "key7": "3MBwLZ1z7Burs4TBUJAt3ettZzmw1QuuBPqkh36atb5WJbhdsLtod9i8swWJaQ5vBcd1eKTxWZZnkxxXvtPYNAfv",
  "key8": "2foNW39D8g3TWtWYytmdatfAXqvhfHujZjvpYrFtLzVEMPsDpXEPxZ9k9FQuSYtxHGDZUF7vvWArHz5qtdwt13tf",
  "key9": "4roevkMsaaSfn75F7ngTbGcRswrdaNvXZJCpbcqaDp9GNJqoQmMg2DK4r1KyyGZZKTDezcUG4YFi7rcgmQA5nwoV",
  "key10": "2xh21xoF4izVDXiitPaX9VfN3XLEBP7cW9tAUjcxFFy9797BUdwgkFux6YfLCYAQ2VyhzkdtWHXx522PA37s4j4d",
  "key11": "GMVYNpXJhxtPCom6APbt9x1AhWrxNuijC3gDjUs82n6nFUiURTh5T7J3djRfHgQXMptfJLb5cHyGkGPdWJmTp5m",
  "key12": "3yVcDibTVwSC6gxf27Y67PChHXFXLTdeNoPupMXbqboT8tYfDbfPLcksNZDq5rnQVawjm3Ea3CdSDG8M7E6LodKw",
  "key13": "PEtvmfP3W1UyE58eyBJjAdRiuVVPVbzf4YDpkqxdFRXYEgkgekeHrcj8sVCLEVnndaKGFQM5ke1jo4HHXfTmWyj",
  "key14": "2rAtVDgVbXPxFnQARMFUNyXpMvrW5JupiosLtJ43aEEakQ8PZHrKew1y3qiirGN3z4db8vUW41ybh9HSQsv3qoMc",
  "key15": "2LgKvXhZP7mVUeruHL3vPxLWGt3fxTFGz1nwFphAmapqaarWHJ5Jphtuqnrhgwj257jmLtt15AEEXNTA4bb9iVvF",
  "key16": "9jGsXnsNwzXLkyWhE4nvPtFtm2DKM24aKNwK5QrPVEc1z9vcdNFngyYTxtpWpyzyWt29r5ccwb92D9zkZy1ZcHQ",
  "key17": "2mvdbbbAkeuT8vSqMkSytvAAxGAwePMAhdwfVCi6W4qfawU1B7PP2eUq5QcUqHhjuhN65yhksBpYwsYKjTvSE1Sw",
  "key18": "5MyR6tomFFAtc64sqfFqXDNg6KsikxvF3n2auB7sbqRX8DfJvXBsEZwCDb9zgjqFH8ZznX3ChQJJ7JaxPJ7TSdAt",
  "key19": "3Ba9rUpVA9FoKt4JpKxkCsHzPDQhNSE9UxWHfkfHgN41pRv2bmjw2rZ7BpqLgviEKRKR8K7UrwXaoUM1Q7z3XFea",
  "key20": "3z241pnn7uVnn6GuGDpQimvN67Jqy6sfYjTiECdQKJqvkVbQz1ZwpoB87yUdqqmHXY1NVoamVP7SLu3JqPgNAGrj",
  "key21": "5V7Q3FLMmvAouX2z1YGgoPbfJxrPVDXr8TgumZWzpjaY3DAyfh7tkaesXQ75tjgqFPaY8XG2BJBVd6w5Jgvx5VBD",
  "key22": "CTXhKkZpCvkvGFafxp1wv1K8umqgJfQeEfr27y3DrybkKHqGRngft5YC4JKXPRvPGxRapQrXvuUpEWkoUrpmbsw",
  "key23": "bmhtqrrm48TdCP9CUzAXidUfDpyGpAE4q91CHzXGM4fFRCgMJCZ1rFwR1jZ7hVKiwDjgRGfd56GDJxzm7TPJTNW",
  "key24": "2dzLezC76wsS41VCD9tq3o8EKA8566RJoauim9HCYb2RJbJ9dV2KqfRjqZPYd9bpqW8JcNHBwY4vVPhhhPiGmbVr"
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
