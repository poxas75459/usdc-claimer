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
    "4gDRQUq2oif6WqitpaMHNgLavwZwDxiU81kfGPexmd5HLynLthiybYNb6UqofnDocLKraVRMGfVDc6HiWRLmDQmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTkHya5qF7FL1LMqtDj7tgyfp9aubuWPgXgz15HXuNW6rn2PMKZBJN1GEbEfqWST3Rc9TTjcL3HiWG8wn1oBXen",
  "key1": "3PQZewTt2wmhzVHLdCDhnGYiKVFYYJj7SGfB3v8KqS6yGRVRap32vbhRvTGKetbraosiH6EszSkkCP4UyC4JauZH",
  "key2": "48a1iV2QXvDQ48GeNSmTw9b9hxM2ahqmX4uedysnN4QSaRyUpgqDxyWxcPacn9o7eH9jCVDacYrN89AwqaVvbX3v",
  "key3": "5yPxqNDy5ouPsKusr697GQYGHHkhPKMfusjAYVxUG7k8yEQhG1n8XYC23AupJ2jYH9DkUMn9VM4ZaBkX351YA5HR",
  "key4": "3pohJGKxnnrfr4PM62qRDi6uUd43tMiWamCAdgoZ4tqh7a8k4qgPWqoJmshUovxAknFeaRobxjoKkL2AQ2MQc8D4",
  "key5": "2LFFjVAQSPrLpuUa4ML5s9JXkToR32c3PSYrUAxuoZ1AYQs4Xoq81Tfpb7RbakiQsnh5eHEE5uPo3TDHymoFM4Sg",
  "key6": "481hvj2qk2CfFsoh71X4XEeF9KXUr1JHQJryumdau99qLTHDrpKDcJ4tErNqnrQQyPPSg8LYzXY4vFkFyRqKPyQP",
  "key7": "2fRxN1w6qnY6HG1q4van3vdsmKqq7fJbP9bWLmjD35rNV9abF3AG55oA7X8qfcXuUfTLEAWtQnMADXUcDiTjjwcc",
  "key8": "2nozvMN3LNK3ADcVYHEYNgGpGBF4jMJQm5D5CQYLVyA6Ph9gpciC98LdWCJTKmJHHbcWy3Zsxr93WriciwkdV7a2",
  "key9": "37DbFf5mUGBRBY8zC5NSMmGDRLPb5DcE7agBGngvKDKMBMtoVtewqJTUQN8ixoTWH2MedTapuoJRSkGLeeRkHQrZ",
  "key10": "uYyAQqQtxzX2zGgXZAFYfokZNDvNsnDdkNQCekPQF5GVdd2yoNsFKXsC4PTANLbGqAeLgTAsYyRiWzQrtv2Gct9",
  "key11": "4anGkVeXc4gSQScNYhFpgwKHhbjgzgVbBJa6Nqbrubb5j6XYctHvR82roa8MZyCSPdwUoNkaHXNH7QXbmkv5Ykyt",
  "key12": "2UbzUzMn1ctcVi85khgfUAJgwT8gNNFgVEKjXEjT1wXJUosN6TndEcfafi9h1N81GFyXEg1AQx62d6S14tvQZttK",
  "key13": "44TBj9XGPApdY2MiEttaFPjGFzqtfeapjJhpzsbY8eEjgDbGVGtWvnRFj881oH1P6oUZadgd9HJBzofQ12awhbX6",
  "key14": "63pNEgoHK4kXHzx6yVayPsrJFU4dXBhpXR87nLLAydWyR292gee3tZyHKmnR3JL41eJ2EafmHJMdgyHmDuyjed4P",
  "key15": "2BvsQd3x3jjc9QHa3pEWVq25wPyoQ9wit5WtCRK8ma7eW5zNMp3dC9kWVdUhNSy1b1GBuUiEywcq27RQmndShJjj",
  "key16": "65FapxkBtvBBd7VLxh2gQNF5U838gRv5djRG2aXnfN1TgMB7Xh9cG2effUJa3r8nwzaa7XNydHM8iHjq6kTQFP1h",
  "key17": "DJXyfMNM5B23GCJsdAkFHvvV38GgCrQNfvzLMagsYzLBT5kP85naKhU7SMhgqHKpcPTFZAD2T1orZcoooMs9Zc1",
  "key18": "Ah6qucKuTMdxLhErdbMKokrCxZdb41DV8t6DSFfuTMPq98Ujp7Ru5J8pFrj9H1bUfcpJQuD1dj34KRBodbpzbT1",
  "key19": "22q7PyqPHw7Nfcq7eKBMAexBPJEt8obRd6Jvkyc3EfEUFRxyy7JBxVohHnXS2XGt5DKtr3BZBriTK6tENpgwmx4s",
  "key20": "6sGbM2Jzzdh2aJNxGJ48rtF4sv957xbgFdCTYybfqJpbgjbu37Nx8QSmyWFxjZbMWW26cPuFEY5uTJecAGufwN3",
  "key21": "5KSBoGBGtDvxEgfohedGmHQLfNdxgpDMHqPkFcXGcJCG5poeoRRPBvuGZWNahiyoABYTMst7JpxhCEFVf2q7jSCW",
  "key22": "5cyvHZ52mLMoguxjMsPmKn6qRkNamDPAc8sP5RTdPDTRi7XFreFDhAECwnGqFAcQGGqq93fW2P5arCYZyN5rNVL5",
  "key23": "epnA4wXEc1qbqj833s2n43D6G2c46CQRoC4HNNKRuyyzeQz3TceJP3BPN54yBSKfVWU1GTREkFpJtPNr5CWi9Nj",
  "key24": "62r5H98Zxnc1nqyoRxoxmr9Y8MEsZi3BApg2bsRd6TuJm4n87zYLDHcX9SUG35WsuGVuk8dYucxPVe87hE6pf2iV",
  "key25": "5Z3YRz6BmPZ289M8rbVWXcDPZYhSfQdB87k7HZKRGesmvPjnbxWocpVCxpyZM8MR5DaM28rDJnHcAdp6VQxguzqW",
  "key26": "5tsfmcdXi4fN7xvCzQxS3Qw61ECcCX59GMhzcCvVyAtpUDf1ao3dipfv6S4CQLk291NMzRwTMyzLJqGnHHwqnXSj",
  "key27": "5kD6spQqbSUJ28zVizN1vKH9AYa57oiEZzitSCkzCgqHG6WFufQjoVMnHgkxu3JVWLj49cvKgmi84qxaZapt8QZA",
  "key28": "5MwYGre6eQHPiTuWTKfZjQY3DLEUknVJhgN4vU6UJiJYqC5UVCVCy5yZUwfbBy1ugaPmUSxfBt7HBN9KmQ2Hr8wP",
  "key29": "2FoEwQ7W1bDERFv7Nm8D2Bogo4mzdycqwCUKBaL6PEmU3d4Z5GEiMBvHa2czsocyB4N9RGm37FWjLXcm92T73KgN",
  "key30": "3C3PgNutDyaPQNXNdZDhTE6nrwPKJ1NK9xhZkVjh75uWvvXrChno8EzSGyizRQ5eHQcgchg6xiMHLcicwwqq8R6N",
  "key31": "5MefKtqHZbT4JhjRLn4fGUNQcsWoPcKW2svEV8ihevf5kZj1TY9QqXi2H9FGhY4GrEvHPXfR6JNkSMwmXURc4W1e",
  "key32": "3oMS2wGVwdCUXMobdum6z8Hsfwoww7eNcwrgFyqhPTZPxrd6DuteMXWPsBY2DDPh6uJcCfoZeoDbgYhmmt1VsKDk"
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
