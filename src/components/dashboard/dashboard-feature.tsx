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
    "2d8a44gikpZZmoTBGA4yrc49rAhFtbbjoL7A1yzgWzAwjxC1wst5HPrAHZfLhGQkD2t7jYjpn654znWi3ZGwfe5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUZ7H7xaXbKcVeKfPqqvDg6BxQ7B7BS6bQMQqAn4bf7a6AudB6Yedte69EbXqaVct7PWH62ZUhQEtTT7eJ8ERci",
  "key1": "2nNEZBvTxDyGU5qgULKbjydKFSGkxYvpMvkSa5eUuV6aJgCjB9sRqoJ24YqQeNJNT2QhrHx7pSVkod8KvLYxcHkq",
  "key2": "62F7Aimwk3bwzYRNG1CNu4iSKMRdSej5LfYMcdqR9Qcv92N9zCyupjDxHp8jZYYi6JL2DcHXgpvUZBWwgkpTTTUk",
  "key3": "Sugb9Lt9MwsffujhEXYmbPqVvRADsAP6b1De4Tvj3ieppny6vdqDY6giRvdHvATnjkwgz3NivmznjXcwaYPfpq8",
  "key4": "5v5Yeu78VQkWw2rZaZ41USQHmy1yVZT9zvD31NQdFRDzfPgtt2j49a8hfgBWtrUTRsxkb9Jtie6Ck7XeHsVqHbpm",
  "key5": "4FZaoqXATTtoWdmzrdTWiSFQSe4t3kLs7JcyyZv4EcFCXPHvqcViTaeNsxBBUXiZ43KdDDGFH2rgQspZFCXjxzvX",
  "key6": "Y8mQBgQXuvxtJ8AoNy8w8gyMyo42NhMvX2kh3PxJLXQU2sZtvt92ZBsLZ24FZ4s2bDQjxbQFPff4h6VGWMTb9Zv",
  "key7": "2gtXY8ihQHr2KJEViSc5w9ampqVdcXoAKSKiXJkrrvXwbW6ywCwoHjXigzwg32J6QHT7ibHGujF7A5T9YRja3jig",
  "key8": "MfLKmScVq5Zw5p1qhzbhjRgjRMkU6BwLfM1QsKdNiaAbpHi8DRbLXRNgZ57oJ1k6YUXckuiPLt9RRpG1mhzM8zh",
  "key9": "5fWzdiPetqGfWHU6QHMwgUVadmqLJr4yaAfAAAwWbAzWuf2bCVzoe4NvxFLcZGp6sKdDyjQrciptw3EKWHTWYdE2",
  "key10": "pZt4GAFCZoJCJe9buhHiZWW8aJwWFTanjq1q1xKwS4HCbcTrHcrZyq8Qz95vofoAQGzJMDxxqmzCneDdHxpz5b4",
  "key11": "5LbceBggdLbxaCKJT4jcNtGkta7EMJA8k4EnFQ4CgmLe8WR8Tgjh2P3RgDMmUNtV1ozuy2tdm6ZpD83pzvYX66cT",
  "key12": "3TTCsCqoubwc8axS5QhcT5EfWYnuQMdyjjKABNLc5w5SbCNgdL7uFAGGotfrKwBKZnjiQvXx1gPqDssJ65xq63pV",
  "key13": "3mv5zNM54Rh1JLT8qYLLGoTooyDTe2BZ2t3wguXFaJn7rZduExBZuxizQeHLPXRZpdWwaxkbggoiPphAZj6QBdW1",
  "key14": "3HbsmMm4TePLnnDhGrzisjgk6EPdw3Mg1XSjDE9i9q3tDANJivE9mQXgsdJJA7oPdMranNwHyn5jzfuWoYftMtns",
  "key15": "vbSqo1jLdaRwcRhgWc5UWtKPTqj6QLS3vTvTeKiDExnXVk7cdA69qsLxdxSHxyzx3EnQhyyWGKFQ3a8M939nk9u",
  "key16": "VsvxttbZLkQrwMBbUZA4Mz1H1ezraoQx8Lh8hQDFNwPFaw5v5WwnBAi1W8nUryGMEGwWEHCHGAaPdhnFrHVjNWt",
  "key17": "3B6qf7jc8o7bY8XTS4gjwWRaYG4XDmoiXaCToZd9pSXAFv87aiCnQHGocv64RL4mAnpMke3YpVQzmAHQk9kxyQBx",
  "key18": "3xZR3FF5qN9qU1Pwt3kbNWKDbPKHbxLZGpyFctnGb4E12ATPSVciSFYkE1sfjyDnopNA7h3cWHNP7GgKEPwAzAuB",
  "key19": "2JnduuuX2ub3kRwi12D1mVvwEP2oHEfMUjSKztgE6HZTg9jXSYCEExTLmDGUsgPw8qNESMHCWw4cAYUmZ3yvy3bh",
  "key20": "31G2xB2rkMAPs4mFWVnmnBYaT3JNeXkfiDHoP3ktdj4mrFgTHxxiTeLLdcm4neLBRag2LfqYVd2rmtPgJCZ27WPF",
  "key21": "bmgKQFJRDQxB9cRSqCdgC2Q5b5hbL5paosxXaW6MrVguxW1ccFkTHoYq5EiWXm32z4BBBWqPF7tYZBT7onzJxKQ",
  "key22": "2fEDs3Qfs7D2Swx9ZzHXSQKnnMUBvkEKSb6Kf2yryjmfkvr8mkJ8z2mGDvdrPkS3NDspyA84PrpmjWr3LDvAf2EA",
  "key23": "5PL2jCMeXTs9gqpdYLobVv7VxqRu1ztDvuVazkdCMmwqaGcmDsQzKn39hRrtXPi7V9ydBxhWf7ekuKFXd5dv8Btd",
  "key24": "5sPKacG3Vo5Y2qu99tEBNYrW559d41ToSFqLuwJ11bPr1gD46riUkL6ufYDfnTGSncuUmZ2p9pXw3Vp3g18BHyCR",
  "key25": "46CXYXCmGhQnLfN7N82vm5qAXVm4xNimnwvxrMb2zs9py427pYFuYxDBbmFW9RmXqXeAQyNKLiFUqF5WRe5uChXW",
  "key26": "4kM66xx2UgqN6N56f9U9PZVBYX77guc9sXg9DGySFy5eWzfzFS58a7SyhxmYzdgu2zXia1JLSqrk7nw5ZLeKZuDX",
  "key27": "3AcvgdLrq8RrYyMPkHMbQ652VFsbTciDvJnRcwuDxRgUtkQJJtbjBX4TAqAaoBQRsTdka2spfiwKcCwhkdR39EZz",
  "key28": "35N1zJ1DEVFHmYr8Hwzb3txj3gVgdmXJfknNkGm14wEsjZDPEGpwVMtbLfZE4RTnD7MsPnjedpeirfX2FSdEMGBh",
  "key29": "2iyRijNdg7Av1ESsRNcvauBpEV9LX83AqWh4YNJuywY6QcETV29Y1a6dBJoca7bwBY9U8iZnPpvCbLqjHMDR8NNQ"
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
