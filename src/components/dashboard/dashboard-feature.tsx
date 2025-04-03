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
    "CmbCRjud6CpRkoYGASHUAcLDNwKBbvtfbDMm7x3oBkAf9CfUqeLVb5UaztmzmY6TGepwT7amfokha95dWME5Cmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufv2SDN5SqWAjpUAYVsUrWHJgmgJfr775Xn3FUW3g2GdpNWxSFNRTobi1jr516C772FjUg21xXwidMizSrDdUBP",
  "key1": "fMyzTQoLnngXU1TG4wM9Wzp62JHU5h7kqLC4SfnrHnxNa4d825BwnkwjSiA6xA1mCLsCZk3aGHkx7VMntXK7tzk",
  "key2": "126UaCaztvNbDQwN76QQpPutFMZjagJAB7Z1kTXuy4HU32uV1XTdayA7Y9XxfEuiKExqJQCq2EmYSZrzP5mzWERG",
  "key3": "3RoaMyVVj9kT59h61c2s5Y9yZiJ3GmkfSvj1WfGZTWvmQVjqWVfmFqVzUbDdyss2NmxGnd2MoHhQkSmzZbQBY7cx",
  "key4": "3UfSG1g5V4qTG9moBhYTKKjVk678yJsW18CU1CCQ3GaLNkWDBd8tEnhZvnUjh6pPDikax1giw1c2Cgub5iq9781t",
  "key5": "42p5LqLH12NRYzPp1b6b8ECAAMzcTtS2B286w8zv3nbhaSDRh52dKLx1Nwgm55MvHV151AdygE8PLWWCRDTFse12",
  "key6": "4ciFz3Wn3kfLHfrV6M9D3rvCstKKuyeP7pYwoANUZpfLi3WdZxjGhsP9Hs8F63bwhWEpY4arwvijk4QEb2y4eqyL",
  "key7": "5mkMTwC1kkaezP13gkpQ14cY18s8ev86GusmB6hUfdkLBrLrstyj4dFRd8icJJRkXPwiaERuTHne7Lv897D7aRMY",
  "key8": "2xHwB1GbFmoG7mgHcE1gkpLvrC9yLcKyUSDe5JmbHFcZrxSqauRBfQEDg2AGC57YWzFdbUHzb6YA3GuW9NsfLLsD",
  "key9": "2s2efPbFe9FkeZKPyGLBCD5aqfwcR1gDGkAtLgxhSxn3U1Xp7Wbxsx9XqE1gD88D8xjzpmEBvCNiMoGbcimcwD8f",
  "key10": "58yi7gpFh6pQrcpJ8ATXMohsLvHYBNgQrhxbMCcawx1kbdmaVQUCRi8VVdtbHbsEEojjMmBENjNjnyFEoc6vF3Yn",
  "key11": "2GNgdDzCSAGp5SmS9P2wLAn3yF7VPCt7991va8CgYLfB7wX37vW25y5BsKHN9jukBbsXoqDrb2aXGk6cuJTA9din",
  "key12": "42GxSr7KtsDHzU5hMaRjTTdJppLDXq1uRbZRu7nvuThz2qqsb2wHaxt6XAdVjHmsS5frPpRZ9uYuYdT95UvvoYk5",
  "key13": "b98GVEmUuNk93NKNTdqmdgKwEPn9ZjC8kVShwa9Z1VNU3h9WSHJTAbU4dq2sr23wvVZa7WQrSqU2RyKViv1p78y",
  "key14": "4z1ukpPHx2G9iefqFy5ERMQmKTeX6UzuEtsSf6udRpSmCV5G8RJRoeEyBdHtR3B8GhAPwy5yNqcPcn8Kj57XJtyk",
  "key15": "BpNyutEfAHuKKwcqvSJuB1s3yW31GuQ6N6ks99SjbM2XP3vJ62gR8VdvykUEdZkhM37TfTggr8rcanKWn5ka4Uw",
  "key16": "4Gy8gLTsVU6M2Mb2fiq18A7sWnHXU9kV842Gcv1SE5U5EprBin4Rrmxm9k1c7r3EqJLmo9frCsSqVu4KMLX9wtQq",
  "key17": "5SUv7PpY6BcuouPz518kyqVUw6VkDUoHqQtTn838W6UBtXgGTUyqSaPEpJGG6Z6ictdYVsBXAtWaZYsakDJwCsKH",
  "key18": "5c61GZQ51rptQpebPkbaDgZHGGwQc6YFKgy65bjwgu2CQWA1cHtSEi96cMaUb7LETL2bM1CBeieYJnioNabPfDCP",
  "key19": "4D8YQRRW3dKPwyKwaminWdK6rAhtWWj2LKrTf2gWZp7DjpvoijbApuPAQqd4vxVHU6fBMsKwmNdVNgsQ7eSNyELr",
  "key20": "5aEoJPEnm8KLebfaPpGyGWf9g29dQnuN7qZfp1ZyRFu2jyLfLrdkVvoH8cGEkrj8QvmZ8QPhLjP5GBQcV8DpcrZ3",
  "key21": "5ogmf4H6pTZRpkTAUBxPWjn61acK4ht7dBfCup8tyih1jzMiDfe6DFX7Q1gLWjTMgZEg6PTsVYPUPqZbCTzaaGXY",
  "key22": "4fCSy92tjnDPTZvzFsM6ujAYEPTmPVctWfeiPQ85oUDyvTuy12pZooYbKHx9BvyHVpqDELwdPJnwmyHC6TkuYpfm",
  "key23": "5viYpJtyzQCNk43BPyDBEeYYzb6JPTaQ2bkc7WABUozqLxCjJJ8g5GWqg18V7SuQNP6XqiNZzqin6ys1x1vq4v3",
  "key24": "wzRqPRE2DJaaUZvVUT42Qr88TBJseG2pbNKmNbkLUQkDJcMT6PYjkQV7FTjZM8B1YZHEpKmjD7skpAr1ZRXP22K",
  "key25": "h9n25FSpM6Ks6SreNv9QCGeZCBZpNJiZQnDQrAmXcTHRfCvujp7qj8SFmc7d5jQuFY9w92wHCNvqyBH6xQEinAz",
  "key26": "4kK2L2VZiGL1VihkGPCXYWAwRxnuS3tZKWsrgjy3TtcjeJ7qi2wYPbjTxfzu7KRGNscTsQuJ5uz72UjMFcrS3poe",
  "key27": "3dzG7tSpjuFRXda1TexTy72f4tTuQSPq64UW2drjpQQZVbCaoQ1X8y3rcuLezX1hfvJzQpMSt8e4Ceh7MSivJSAB",
  "key28": "2ihgb4Kncufx4kCry7hX8n3UtPKKfjPkPKS9doAwXRMfWNSuwSFNnU37BPL8dZV3icU3s6vMyctYT4rmb33N6FoJ",
  "key29": "vkVhossqxsVML5YkFuoqtHCbT9b5FnsnQTHPZ4cTMJMhd69Mm9G9m9vqSVrd7QFsbG2UkuHCaKPFjFhGfbcBwzV",
  "key30": "55TyqyZLNGTs9QTiEixA3bmEMWzTSYKAfWAMkYpLxsbfQ5PLwD3aB43SaybPtU8zGgc4GTJ2d3rKofHHFp5pYghh",
  "key31": "2FbMXHQR325s4jhLKKEetrJR6uS1ExRsuwWykFaoDJCULgkt4NNnTVzUw1UMYEBLJJdYb9rMXZDANigcUBTgFsh3",
  "key32": "3doVmwsaump3fEtNXcSud9VNXc6m1dnUkJGne2paHM7Ut2heBqUfZC24GKXeBUzbGxuwFepEotUVApuk3LVtCWGU",
  "key33": "3VT7T3BFvGbNoSvPLUJmmpLmWrE55LVMez4brb8LqWcDY1rruBZTMdCxGEMK6BQC1NVe6uBssvv1gvYdLHpfB1dr",
  "key34": "26LTafixALVxniJBdnMT54HQa3jQzfj3eppJ1sgnnm6pnKPTtJQXScm1PAfJ4ZkrFTFQ1G6PnFnu3Ux54goMeASN",
  "key35": "V3uaGuqtfWPvV5zUKzTWPrZFczJAiDp8KCSR26vdMcwbTnbGsVtjibVgRX8wgCEJfzqZwTHLL1r1cH8jeSjHhxF",
  "key36": "teCU7Ydii5n9qoq1nhHxdbJAMMD27Cc6zNfQcz5wLpBAMsHNeHYRPY6rvVjbLXVegBgp5oBypz1fDnjWHUEgxjQ"
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
