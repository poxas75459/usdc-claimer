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
    "9KkjbnBWse4zNGfPqQKq82kxiBJGD8atSVbcjfgi3gykJQfh9xLiTsnMYSsid9AASjznNmsunQsf1LQj7nRjDb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrYDGLakca7fRFGUCLgyGTfeCaBMg6ivx1y4DUK3K8FtiwrbedP5CCFYh3V5erWubC967iWRvEBUC9HGRBpBpea",
  "key1": "5EykaqcruDsy9aCzfrWDfSffWStVjUDzj5jzZa3pVmmstY4jRfgD8Ny59ssNNGpBdE5YhSZ9TSE1VP2KuZxzoYMF",
  "key2": "5QCZ69oGv14m1jjfEDVSWe1gg2GsUC6XKTFd7xA41Tri3rrbBDbbV76zaAxbbzZ9SRRfr5474KnEYomjjETS48xc",
  "key3": "4PR7JAtLNFviQjmt5RAtaKaegQpuLn8vu1D4xrD7oGRf3i7yLCDG4isSWhRL9gZ4ZdsTur4XwfenuzjVx4eg4Hfd",
  "key4": "5SCrQkuR7BuDNJHZ3hwWkCYh5Przy6NJXzd7xRnQtVqBvdTReiLuAVT65E4vjQGEi7k6kCMe2T5Nmztc4CjMuDaN",
  "key5": "3pCwydQo9oSAefuEdVofghdmvHRbPN6D7S8yAgNFBob8EpY6thRwvdLZozaideKpJgNmBDJyU6TP8coDMH6veRxm",
  "key6": "JjSMCu8DRPt6NUkGcPmq7CE4Et2iVRyZP9HgnDKnpsD415TkyGSjobMkKSUM3dmwgnT31bv9rYfj7QEWWx4vWky",
  "key7": "5KNwJucUsM1uGmQmvL178HxKJW3pTrgG3WbKCTk5ruxhCimJK5AcZtTzfuzumY2LyQ6qk3G1xkwm6a7iVsSthR6p",
  "key8": "2f8ckAX6mfjUK4meii7RuiShZmJBHyu67aEgxNgauQp4xv1yph2wzG6ZrzHwcj86YT1jaF2LNYi2d85dRpTA6Uet",
  "key9": "4CDLHxhokkTFfU6kSDWRZdiGYmu4aTq3T3RdgKJMDn7oSJMGCkHzYrpFBJYFX6Bk7wRm5vP6bDewtcsyB7JsKMqP",
  "key10": "4CFqdLbeM1LaNbtkWBwfXfQEnH5wEVLbNh1wfgSUc95MyptSnyYQtYPBaFjcEDXPCTYnbPcsNpHitCiYxS5gqivb",
  "key11": "5kbRGneVjHUYohFm5X4LJaR5BKjX8KYSf1oKTCGf5nRqtX6CthcjQ8xdDYWBrVdWgv7ZHX9JcAgWXFvNqR8MQLRf",
  "key12": "43GypV1vs5qjqLoYL1wZQqVq9sJpJMHNGrDELYyFMvbCXCJLUrkEhvA7YnDKQBG1EnoGH4YqAo9bcVgpUfT945Nd",
  "key13": "RQR1j5U83sZHdEntat2c2f2gF4ZvMGzAeyZP9b6BjKtgpFtWoVCRJXVvm53osZEzDbvfKUnJg6jAmVQykUuX6TQ",
  "key14": "5HU3iNtG62gWp4MyxkZF1ajVsqynJ8R6cP8bRC1kPduVYKEANe6MkfZTibJYhmscjVb9jeBdgS9GYWcpK8bBUF5r",
  "key15": "4HJaFxwwYZL6Zfx9rR4GBxLnE5HjK6B89ukEkp892TERgjgxsNVUoqpG7kpjWPvunZ3pvXHpnesH4EC89opcsHiS",
  "key16": "9FVTZBx8iwdZpXFnUYWawccxUC9kLYLDz4PqpowXe8VFR4fC6PaZBjZKr3AeFAJSvquPpYBLN9X2cqMNGmrvEmG",
  "key17": "2WH4vjLVnDZErCjZeALoQabhQf3D4x6zo2dzPt5Ydi8FhVRK63DswyXHJWgpfXzQRF1LKuhQmRWpk8v6sWYp1WYq",
  "key18": "3ZgUGGQY69jda3MGL9gKx5Z46KrdkJhxeiwYUB8G3pL35NLhkkZGoHvVBGNa9gMm8bhyyhcTKENRaZFL71zVjjAH",
  "key19": "5YKQzCanex7PNkjNK7TUCAFjApMP3cd3NCFdgXNrQ4B3uLEktR7br7e1yXoPCFxtM1T3kUFisoMrUzj6acdhamz5",
  "key20": "5imJdgZQAds4FyXPozHjeKvcf6JaE9eWTYuydwEjaUHd5NWkMAnrrSuUv8anMKmHdLygmc9FVVXHTmnZd58mHKUi",
  "key21": "HYgfmAEZGaDGa5iCGR2MPcMxJRNBVpzTTPAoub8ybB9yQuuUs4yk1kaWBG4R4jPAum3w51H5X1u65XL9eJShaPP",
  "key22": "3b6JZg7wiX4CcKf2WR6siM4WBESvmp7yfTtPwFivVmT48afjiT4WaSB3tgfnv4mSrBpBfZDJZU3fAMQmQqxiapWD",
  "key23": "422VT6wwcVgTSKHugcEyvd672aH12QvWoGCntLBQQHr83oZo9B13pMhgLuUZ9o3fBwMejSaMWdmyaA127W1kVjqx",
  "key24": "2dZwnxd3Uaqsb9FoXxhmKr9oAGmbCSDpaEwtsMmsLnUzbyEwfSfQSgyUouFuCX8ECTYPqzAMrDn2R9CxRhfEywqZ",
  "key25": "29BeDTB76K2dP3cax7xGFyRyAKNukwPMV54KmgKBBWXFQFMnQvrcNBXptoCEVLQh3GMzgvTMy3ofg6fBNWg5nsog",
  "key26": "55QJoshQ9HGcJp81Hq1M4KbKHKeA4EZTxrgpdrmCYz5dwqPyYfkKVZ5gUFh767Suugnq5aNDeqC6KskRa4pUCcSF",
  "key27": "5QYC2WAZUAKVy5sAmYKgm2DBa1HXc1KyHR2bV7pbUdsn7DHZU63dUs5XnZrk13bkB4J5kQT5m7Yyofx8oEzYRv3H",
  "key28": "26A8i1p9yaPh815F9TUzgbKgDME13GT4gQfDxUbnyoMg7b8pSmzJTvdBaNW9oPc88n8pmArfeFNsva19NMA1fB3m",
  "key29": "3AMNki2NsYPPR1bCgUAUbWz7nCymWBLZMhyS6Jdb3HYw9dRYrL3g7NSLQa3A5JJ3P4DhDGhUcnQmEem7wVs3vzpF",
  "key30": "2csJx4ZrQ4hTqmS99iEEksa6rwLYRagoBf6sG9AsXamKS3cNEdoa15sZVq4377iHJjeHJVP7ao39G26BPJ7wPX7Y",
  "key31": "3A4pTexWVpSfmFcDWEaF9zyXjX7v1MLQnYtMi2DH9TZhuvqP3xBYm3oYXdB3HTZHvUsU4gNV2pgrR2KuJNR85sZB",
  "key32": "2TGbZ4jLz6EpoMWUnzGPD9xiirfGEswU7nqSpym2W4K1AE7w8ZoMjsjV22syuN876h1Tw2YofhBehsGDj8TU9att",
  "key33": "45YSe3qvQ8fbZMhJKCV6m2peQSQu2kcfzegwqAWDKMfijv7sGwizmxRbA6mp7ogA7ocCCDGUd8wFw2Y8ChdPnNpp",
  "key34": "NsP8EhVbMAsn1Rpyq58jGNhe2JcprsDbPM1VmvP7q3YMFdFEU6tyjaxG3ZLMNyZ1tsd1VbzmSepivFiqAyzvgZu"
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
