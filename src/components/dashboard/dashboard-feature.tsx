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
    "2tFEqy4KguCXRzmG5Bg6KGWpYFnKBKqj293TtxNU8QREYG8mVEa5CaCDXtom2WV8kbibGi5DDEkKUUGWfLBEKyWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cAw1g59tTnSyVb1MtgAe48xFfbiyg2dzVJeEoZwefPWt2QUFKCsAZGjJcVZHynyvSxNCGpdNHX1WhuxCFf1zgcV",
  "key1": "YoEiKrrDxoSyfkvcKkGyrcsvHD8zTVUuCx5PLBd3NzCMYdeV43xaK3gET1aT5BUXJvA4RZrTcSZNZu2mVjzqxp1",
  "key2": "5xPYcbGVeA859nsvqqUeKotnvTmTWKsRxQ8prLah8R2RGfrCFJP4dpM68u4WwooS8j87akdtHP2gpjMtUd1bxrkE",
  "key3": "5cyU2FceReUB4Merm3dhf3QqY9rtoV2b9csdkcqCA3EV4rHMXVfARevH6M35yyuSPeZgdZd1kSG7U6aJkgYgxgho",
  "key4": "4dSuKW8dV7hUCeP7jRh2rUf1fZQP888mZodsG4FYKXyT3PB39XVgB3L69Yx9b5hkc6U7cRmBqetBu91GNtgZTpDH",
  "key5": "66a5w1rUsY1CC5dngLwzUi2i6Mn8jPQNaNt5kuBhjyF9kj9prdDeZaxPHhD1cCv5hwKbYfUyPUGoGV8WnxNbXcvT",
  "key6": "23Uchj2AbW34yXowEjGbGQetsEPUoTADa3dhreJdA6XJbKGHsNkTrgKvz9gDz6R6rQLtEGtXjNvThRbT3kmJkaKT",
  "key7": "5KKbL8JJattLy7jqHN6JpRbcWuoXXvwEG8VjqpfuyBoaKeCeKgQkov6EVyydbGvg5VmNBFzFakgZsArVGkddtfFp",
  "key8": "2DypgtewfDGjJhGA5LX4iitmp6NWL6xURNkErwiWkA1CP2WLca4KVkXLL9ep7Z5HqnWZrKiKBinxJofHwocFinax",
  "key9": "AAXb87DbPwmDgJ79dbwQKpjbwx8evgA7Pv8PKxXxnLM4ZGcpMBuY6BdPK1SyBQatoBYutLVa1sfLNKWfr2z4p7q",
  "key10": "2mTTARjCxXd26Ar1HBDpKe3iY9UdetQb9NwJ92PkgAthCMQ8nC4ucKDefiwwN2nufedUroA5FUgk97r8NTWtRok4",
  "key11": "4eaN6x6VfbMh1e3rYyTJbtkTaVgftKaWkpyXnk23Rw53mSTsiZHcLnsCte8sn4fSXLb8hp8aPMmgeDHrQzNjgznS",
  "key12": "jLbYo4cfJY8cjGoEe1yC5zYQ5qLiJWjg8SCK1eox1ocDmuVRLSKEVhGojrWT4onSnUsjD9pNVG9jq3RGGDZQnH7",
  "key13": "5SRZLywbDrQK66aU83e3YsKmJ8N47cVFTjoT167ubu4dBzVGC7QTKp6a6mY9Ji3XQtaDaTErsuJnhJS2DiWZ6iF9",
  "key14": "5wNJnSqNykhbzAqQtgYDKAYWW6BJZCXEa62HBStrj7wbg1UetZYULKHidhJrxW89jc7JMnwBS1FPQL915Bh3HH89",
  "key15": "5yfhynE1LUK56pprrC6E2GkUQFTAX8pTsfh7gkyhWktZuuf1goPWKU8V6dmuqrqtPqkQZTLj9QPVhDk4hLs2jbS7",
  "key16": "5Z8B1XcjYyMrF31MDckw87iofZjFXBWEh7HPZaPmRok5Rs1mtLhF8oSEJtq2n2Ry4UH8npVjezBU64mW5QfxfKmM",
  "key17": "5qHtq2h4xioTuk6gmp4UkjrbN3SGA7tCLgWBb1L8zJaTUUxVtKwJz5Vxjgikq9XQmd3MWUpjjgdbrQCCqEzPngYR",
  "key18": "32waa52HmDkUnYzJAEtRcgDgA48D7wG1gZaUgXLbFFiSH3PWhp9rgKdsTKAyjsnhxaEuXSGyGvVmbG1nXhZtRvvY",
  "key19": "4KexYPmPX5upbgx6FqLXRtK9zW163XZ8rKUeenvc1vkPPm9GMRqek5MmRDwEWuqCWczzHxb9bEf3qBqMvn8gFYFR",
  "key20": "4N22GrHY3sjUo1fZPYjrBiHpdbwEo7b6WPEXJJ61FVeQcCrHYaNgZWfio9w99ihenoc1ArNbFhxPUu7tCk1sNaoL",
  "key21": "CqUzvrJwt8Gobem6zJHXE8XmAeJkgAZoFULqNefU617K771Jjzc9hBpX6KMWRUUYsuYSYYFtRc9QMt3St1CaEJ5",
  "key22": "2aq2KqRP7QbCSaNK9bmGTSeEvfXHjAhxYxV1yJS4ebZXJxS1njjF6Ue336MzaFi662V2GCU9ksds5CyXqA9z6tTD",
  "key23": "256xXwka5xEKV6bZ1qZ4ZeRgSVsMsizBWZEXwTmAAAMdwxNeS7JGw23HmxQTLUAEZ1qiBZ83ERokoZTxPH2aueB5",
  "key24": "3KgEJAGV8UqQ6NXdc6SMP47CtWcTYZ4KE79j14fZqSBiioVNqy79v3kPq5ezz3bNSA3dMj4Pdi2cxiuwWBF6YowJ",
  "key25": "2sCtADK9rWGEC3drDznwbs4yt9WGcKoEuPD2TRtnHAbjbKhYHhsMQKUMVXsQVRe9xYw7Gsjs2L6FjoZ4bBaWTCkY",
  "key26": "3tLZoDbtTFDG9cBXx4hzewaakLkDBpL3pLuRqA2UMSskxooc6kAfPpQznxffZP92AQqfUG3jxG5oej7RcPHE1tpu",
  "key27": "2SUxSerVoa7Nbk7FXbFnuoAkQPHbqemdKxUjyXCK3EQQH3Ujray3Whp9jgsgJ62HruFdW1SKkvPUi19bCJqAqEp1",
  "key28": "4DZsdNsD7W268jgHE2GaEEfAb62ktRL6JKJZnUGbQjmEkVWSrxVWCF1caSMewDa26mtcaDLQi3pVjbATK2W2rtEF",
  "key29": "5D4moasf2MvHVkSfkCKTafsqpArqZGAJRLRfEF5VjFDyZkDeH3WvBZBUgkF3xJAAWoJ9i6rf2oZ3ApYxbhZokJwS"
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
