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
    "qDepAd4ydBnoe1kDHM7yDWmF7mgiWKiHPUusMQMLxPpEH7i3zumrUBurKEoDhKDZC9VUvoSnQxCNSVs41ryHG6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcMJyeUPHNpogdThiYLumgbFJeWuvcZ7FfdhjbHuNsGkPvT5ae6o98828nFKnwTc6zcCsWtNHjYTk8gbzS9vy9k",
  "key1": "4q5p63KSWJaDHn36DArknzjPxdjaNv97jLtQMkY2RZB1NwVBoKuEFGE9FUZb2fs5BstwgsLAiFbNdDCJiUmkE7bU",
  "key2": "59mvGYDrDhX2u61b3ewEW6mHccN1EXbRyUmbCfar5uKepi2TWCWpkGz9iqjLu1yfecwu5jiZvRiM2STU1sbdoaJj",
  "key3": "34kNgR2cmh1FuZQDaFn5KRC2aCxWa7oamB6ejDGrpHgT91Ph71PFjYaDcHGt5HDwyDRVVTStHgVLSCcfbTwyZ7Bp",
  "key4": "4agXG4uVCMJnnUhRAGtUMYrxpkCHZg3UyLMEkxe1zrKApEBW73mtwDD9Mh7NUF1SRvxDQqACim481MCLz8BkmXpg",
  "key5": "3i8Lrcf1yuvuL2sE1JQtZrzkb926WWDw6LL6GBStsUJLtLAJAio6eqKoHg32Na7T8V2anmkjYNvneTggp7YzrjsQ",
  "key6": "iBRJxk8PXgj3bLnhA9FsShruBQWrNAYGRHy5K4N2rLMsgMsRTN1NR1CqwvfYz5RS6VVav54Rv9faSNUnTX1aoXS",
  "key7": "4RfpKcWQ8oU7oiQcv27XrNLvET8coohySLam6iZ4D3kibzLQJuz8o6bB5vbaYhzfY7NJ1pYRQD6p7xKmwiQBtGbx",
  "key8": "4e6ieeo8TfPyg6MNCem4Qqf23gLinPyTA4ociVSiHoH5v2jWH5v5WFfoQ24f6t3xeZFXSg1RCd1Q9VGngeUYKEvf",
  "key9": "2E7rh321qTEW1F6WSs4bqyib8WgrvvExkoQLgiwcAZPfC5dqHsJ3YFrnAYqCQnfqA7agLC1x67Qk2raK2MNmSyxP",
  "key10": "22cnyXRGDCUoprkzkGhg68ToLWbGHxVc3Ub7asv7rT5BHt19RUnvGn8xN9cKJjXJfqdFmDV2j8mr41wXM4K2x35k",
  "key11": "2B45JwJirLhLDBJa7kC7BMVJYYopMnq4SpCCbARNVF3hBMHFFkq5djsbzN75nSwTfdKxH7y5WATn4mXZtUcrimXG",
  "key12": "56FjurKop2MSip1bPQsuKS1Qig6eRBuEDennkyrhgMPMXEohEdS3GAd79nWQtdJ8UrWW3A4UiCX8ewLd4JRfUL4i",
  "key13": "2D9xXFsmLywJvQj7r99bj4qgY4yvTJ8JBZhZFHBsY8DjoHymTU3dQA7TUxbBcaJ3maCqRuYy1JYCcQFzRxEq3zxV",
  "key14": "2uvbLrr7F7Hy3cQhedtoLtJCNg7SraezoSdg4Y5Kgbr6vrUxd8JdHzYnSBsLMTZ31FQQ5xdJFWPECLYGiRqqCGTY",
  "key15": "5gcmggi5hduZEGNg6qCscvg7PkM9SaUXbjiepNNnbgz2EMp649R1zeQgZDhmbtzvDSDawFyhP6HuSkTFjBQ92o3N",
  "key16": "5MBTGqAdhPb2wY2PTSRfhnziS5u9SFqsSaxaCLBYkjZLzqMHiZ8zSsHo2aEWqNJ5ub8WvqpVHoYV7mveDzerGiZS",
  "key17": "5Eh5oFgM57mDUaPXVifM8y86ZT9p6MoFwe7vicREduuK1pZMfKQjmndVKM8wwacNBHvciGvz9i1YdSH7QDBZ8T9N",
  "key18": "Ea2qeqD7veJkMU51j3FyAyoNVmtqcsSfSQjpYuo5U1ZKNichoQJh5ph8NUkW4b4jdzNNm2yByUVGMMKNTtzmJ5A",
  "key19": "4PBuAY6R6ex6ogwqSVAHmnDSLoVsFd1jx8QUF3WDssmpNiTZ8xDUJHQtr4Lzrroyno5ykprXjLTTRXJNHUxn7H1x",
  "key20": "5BomrU9poCbZo16FxpQfEZoFQ9oS88iVuwpGxY63rXm4P16MKGcZgAJCSu7JHRRo8iEX3GjJcLYzZY4cXkeAzFrS",
  "key21": "3wCdtrvQxvzyysmZYWjr6vnd3EYBAdvYrmqWrbF3f4hrXQ58Ty6nrSLo7A8P6yz38UXTtp2YPtUdFbgALZCAxLw9",
  "key22": "5bTfAr4iVxxpMTAmRq76WFpAH9WB5y9WvDqUCTy6UagUNWMjm4XamHhrivgRgBhv8x9QNuULPd81W8YrBfx3PFvL",
  "key23": "4VQsuJWz8XwdYZS5Xh9rWo6Q1X9ozPEPAGyU77MisQqvhGis19BLGoFkqkJEK5is1uG3RZcTkiQZoAkKNc7K5Frp",
  "key24": "4ywGKTRVyJQfdgMjMgcehwTEGm3UMByPDZiKeAPCLruCGQ53h952mepwRSagWXzYzq1fj18ipffaeyXZ4wTb26TQ",
  "key25": "2sKpEv8eyJQ9YS3PCZ8hGCsy9bxRBNfJbf96KT5J9i1Q1U2ABHeKDTP1X5ucpzJyDsUxwr1c7Q79vE6qh3TnMYWb",
  "key26": "2WYry9ia8AWoksvSYkX93GzvXtZFCTK91MNuj5Yr18wMXpAcG7CvPjnsTuaorydpeT6bQsUvr7rmSSS2uXhPmTha",
  "key27": "tP74dmk8Cjc2pkkgDfsYKtrf9xUWnyWxmggrxrtbLjUzncULBEevnUwDA4PgGXRFWyWY4q3zS1u9aevhnBKKrgn",
  "key28": "3S2NEfAbvgD1FNRN3aju4oMybqVXz1UnKsvsG1Q2d2KfoZV4BqYysusdWWvjoHR8dpbBGDxDxSTVtxX4ufGuGqYk",
  "key29": "jWYeoTPvDrZCiwT25C3mi7oCbx3xvA3KM4evRKEcLkLqwbHgj96xGJTcqnV3YLRnD8Xqm6jTeC8p39z4CjUFEvg",
  "key30": "vjsAi3en36CdAzhqoKpATzDLPrPACPtsuAQW1QEoMZNirbskBpn89jMGgXduMLs3ojXizQJdm9QLPmEdQLLw6sr",
  "key31": "2U7KiJxNNyfY2xD2LVYMnAs1VTDTf9N9BH3TremfyrgFBvq22tASPGzgbEJ8mUvZnNJThhyTLAeAjwtnDDERLpCT",
  "key32": "5D14PCmBtDW3Tw4bAfB4oytyu1QHJwnk9mdriRGKxf3LVquLBtNeb2BiW7H9kLi7EFS6ABpD3WzHRK6baVYC316a",
  "key33": "3hFZJWCKptwoUN2XzDDbgVo9XiWK9qRALRiX53WKsGXDMhasStijjKYqanJQY9aSGXVwy4i8yTS6uKAweHEikNxw"
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
