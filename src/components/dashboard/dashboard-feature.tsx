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
    "5baSuw9FmLXSbJxdECZsEQcKrhXSTp72xzhdaurkVY7J2J3h8uTDGzUfbGCgvXRBZYDnqBntmUPt8WNGxrxYKtJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKu59g2WUtG3zE2S5g61HStoitKy3GhXyRbmGipFqGfgZmBASbeFJGdpSJQuypxQKsKnQSHUYC8ezj4ZVuh4gwR",
  "key1": "5JS3sawth3hLbrHb7Bf8VqQvxASTsENA2w1i5aNxBDEUcDqaWEgRiKBsgzAmCtrAbhFg6vBYrQTFk6JfZdQLkePA",
  "key2": "3hp6oGFyZy5GLChy9YDCc7baVCYYu3ERM2STp7cz54WXYiAg1au8S8imboztDjQwHtgePzEoA1ZnRmoTLyPpDBhj",
  "key3": "5AVvHuNPJbuQ9gEcDmQnJ6oyrpTsuzwKqabchsHwuiUrLw8u9woVQmGdS7Lt6PgZa2RbvgByEZhfu9gFYjkREGHx",
  "key4": "54D4mg5m8tbyZW6W53QvJDGgdTNfPNCbvNuSas7J3J8KdD3M63XQm14yUixeXLcaed1hwAyeXVdSgn7Aua9izvWV",
  "key5": "2Wyc7yV8Gn4siKPkGn9HC6hRmYgxRoYhbDGAYeBtv8vGefAj1gVUe7orTJRxF14BAovW1EyZvMMA5nCosWr7i24f",
  "key6": "33tNbEZEBFACs8CJrsbyAqrAkCJPBAgmw9VFNGyJ312MTgQHPBtUSD1Ae78Z14X1WN2ycM63aHKoW18xhDERuyNP",
  "key7": "4jMjYTAgMN9LwCHbVsBs3rDhP9qSuewRqg3WgBJ1hwgLkHxziMZwRdU4Jk5v4q4gHr13x6JaNFakbeZmR5okyp16",
  "key8": "3tX79r5L2nj7iDyU5YYVaDXtHgWTXPjCKbSMdRwCxNeHYQDcLubmMSQnXKcSYTqd1ivuws5pbKxFpeGTHNep2rag",
  "key9": "5KHG2q9hBNGSssDWoXN7wzqXwERb6AjPfpWETH8rsM5SEY8STjF7JpKtFrJnKPiECAtN6SFR5S9jXWGPVextbXEY",
  "key10": "4NXPnRKa4ipdVEsAY9YNphF6SKkzjuXHQF2EFLrMZyCvHHp1fL5X6hQaTVfEnfYw6saaXQDxiKBs9QLVpPUkX6kh",
  "key11": "3yu7HXRhSPUYNt3QpvB6oUkofE7ianJUA1n4LmC7efdcUefhaGfqWKPEqu7TmoJ7vetBzmuq9kYR1DzP3rvPG4F9",
  "key12": "5yqizwfWB6eLKSUKKDgExp9cQs8tnRtyWXSvntdjUjw919WoiNkzbwky3ySpmhcooeHtw9jFn19Brxr9uHL2CgB6",
  "key13": "d56pFUCwbJZ27ndg9Nqdo7tsdriChXD26xceGvgMuc6ocCMAPXsZ1XuHsfXPJyQrB5jvDHHLxDBbFA9e6PrVyeA",
  "key14": "5VmTaKoC1CdoTvm2VnvZ4Ev8ZXxi1sFjy3g3gFAbSbgq4khVg4kNq86bjFoiTYhByYHKJg3cinhPJC2N68T3YdVx",
  "key15": "43VNacp5vG6aT9tGsudT9Bo6ZCQeNxd4ZigJmo2CffKJU8wgr7mKyYjteDgSmWcheQmgJEB7YWPxhhAuFTNxEeQb",
  "key16": "3fwagRLArvRPPM4UXwgsVMhqD2TqKN6Yfa8ogdLf5Gj8Rbs1mLzoxxoWRqLD6HnZGi8UzLSMvzrpdkNMA7TpecJQ",
  "key17": "hPABtfNkrBqoQdhgZLuRMyvUXr8ytzjcgfFU1XqcHZzaR1r4vETH2hnFcnjbEK3TY2D5LhBf8S7GUaJD3ZP8ehr",
  "key18": "5pBcbFmyzhpc3iKx87HNooXneP2iRZDHHmgCbA3jx7gzR9qYbfuzPLntiK9DBAVeTGSkYpsuu6cuG9AHudPxzJRv",
  "key19": "4Mk4kB1jp9FtL3QmxUiURH5fFyZU5fJpoxddWad1HuFKakdXiT7ANeitQq8j1ms55JqVPfccwTiRCyQGWj11ZhFL",
  "key20": "45xMLrFUgunwnB2a7V6QFTyt8AJhqjpftqaibw5RNhYwj9MaF5p6Q31ekhntyvT7uDTbEjDyD1zyNwYeUXJ7T7U2",
  "key21": "2kUR6GNwniPKBXqciy2yo1iv2DRsQU3QP7nejwBaSf6MNJeXZAFXvqYUi6dpv7tkUb7Kg45ucuArVX28r2CKifNu",
  "key22": "463jwQBVFDG3BcZF1bC4N34RTEygXk3Jxs6fESvwTAtfZmm3CmN3xybvTkPH34UsVYtNmJqXG7M4X1M1zioJraTQ",
  "key23": "4F4rcWkni9UMCy1o7ZJ9aXQct9XHRsYxUiZqt571HGPNCaBNULXsFt8AfYQuKoGHQch89RWCNW1m5qPHGBbyUaFV",
  "key24": "5z4MocZAYv1apT695NXdAi9zXfgix82mD8N81WVkVChQ3rpa1xeYDMBcMMM1NYuCBsrix6i7XHreYLTD43oxtsiR",
  "key25": "3CyyYKMqrZwdR85k3E2N4MbHWsQjQ4ZH72xizznsa2R33hHxYfVT5YnReH8hxEZuGdbEi9XLgFUUmKmW99SiokXr",
  "key26": "JC27YdYxWQXDwqhhegBvcBsb1fHDWLazSiSYeHUKcbeD7x6yUBFzW9RACpoNThMinTvFfDWM87tUDobzVUfGFxP"
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
