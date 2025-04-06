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
    "3fMgUkicp8Rnz5dXYZ6SvBz4MDMrhZcAkkTiy92FgERmAroQgVYfQhmd9reoX6znV1LDMveXjrDieod6oFpG3NH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FS2KFKfvwFNhWjQiCjgJUX1oJUNNNQpRFhyJozAa1N11gdiTiq8fUKLD5P61zMiTMPLL5Mke7SJLAC68F1y2t1",
  "key1": "2KQ8pGxk2o6skaL5Ha1wC5YLddzJuMTMs7UtX9ZWXnV6zfTxP2ypvHVsQYNn2XqHCu65FSbhjPKnCsCXA2LtLDgj",
  "key2": "3aFhKLzsR5u1mG1cMUWqWp5Ke5NceLcHjkeLRYo6j1ZZKtng9TQaXx1tTGzxBbfSN57i9yoaiQ5Ae5jpo3iWL8eQ",
  "key3": "2QiTFBmvgTTtdqcF5GeUtBHWRYzhEDAXveKq24HDe3X1KSjrE2Qm54UQy91ndqSfCjUMfcbPUsUQtsVMwboidHz1",
  "key4": "2448Wm5eThrAjfaQQf3m8XNQYJ8HM2V9HxFWVcFBv8fpeTC3qH6K2wREfjHDvkGTaM3n8xdCMnxoPd3gAU5g6aMw",
  "key5": "5rkCev4ThabETcrtBY9eQYYdvxq22tD55soAAAmDRWRbnSWNRKJ19XRwuw44f43S5F5zLs1ykDb8RzvmsijAr4TR",
  "key6": "5pBd1nBqnRMHV5Ba7Rwb2hQd8XSo6NWXuJKw4oZCxyLHFiP2JFrrd3RKU8LiuYPm4cCSKctUFZpehf4a9Q6QEBwT",
  "key7": "3RWeMgpskEGyXa16iCAriWapP1VYYvA1FhhxwAFtmrRFJpVG1PoCxw7yntRj5ieU2Phh9zTpncahiWgErpwxrpNz",
  "key8": "2Z6CJJqGLLUEGf5A3bFaYjb2dhTHRMv4gW9qBVCK8NnP7ayc3nRNrjmwp1Q1aGAK9kA5Ra1PvqjyPcWb8mYv7Ccq",
  "key9": "2sh3uKdw1AheEXRQftGN9oXcmJiEk9beJCbEu8VQY3yhKoRSTeiFSoD3M17Hzi9NyNXRT82vTnLKzAG1jxbFtyXw",
  "key10": "4x9pqRcqgL8FSdTWT9PZ6VSmxSKJAtds9HvhLpjjE4rjdCThh1Jo8PKGLkyXVfodE555JSNNTAKvBgpRLN6hNMZ5",
  "key11": "5FfNwap5XZwVjM9xykk3rcQjD1pY5gb8HGdHie7VhcqMBMQhudgh2mr3NakMNG9LcZBaimtWSfEwTpJAyfPXULzT",
  "key12": "4wQGkme4ZQn5CnvNgaXar6mULLSSYoJ5V9eGViDwbALfDtvKgERq6C4YQ3XdyZGHSRcUW7mQMvMNr93wyzi4Dqaw",
  "key13": "LS4TkU6ezjz5BEFxphSB1RfbHPnHpzE7MeKT6FWWNwqPfa6eMEeCWy9WASf8bVCyQdBbuPymhV5W892jQVkchvU",
  "key14": "dnaZxtbUR8DY2QjTg3UceWL8C3LtSbDDqcBNRk6aSZ5iJYH5fUYpVRhLbzk5niuzqeSwhjRHVn1xKKhbgodsQkv",
  "key15": "diY9At1z2UKHgdvhMAgSLLCcgD8hP5pLt1bst14KqcSd9Qg7r7PQ3GN38xtEzM65PHtUVoRns56TP7SAdNUUo9L",
  "key16": "5vUiTJDnYpayVGccJR97S2TJrywGqrJBAM3kKZ2ctF31RpnmrmpC6KmbE9LNxgxNp6HTLAWdHdjHBrQ1x6cFXF45",
  "key17": "2EvCS7jU6zQcY7XC4mqM6dNddSx13jCPtmgVHm4xcBRVnirNy2kHkXbSgxVS39RBobZfYoS9xWNK5oRKAgBkycNn",
  "key18": "4FT5HKSypuUM1VjS7CJuCH8T9ZdUMF5LoJWNKd1HTQk3VtmNtEQaaiFDyENhegw5SB5WCZHWNxE15K5sVqK6KmXv",
  "key19": "2kXB3cP6dnJqJwDr4SLA48Wzk2CSS8cVxQnG5oHx4RsDCKJYcGhyGaeN6NZpYkZRRm4bejAFaGVuVFhnA4CD3PQo",
  "key20": "vUrNZCbi6Fj3T1drhXZnocBEacoDRBE5hB2ezsYXnCfMpqWJjmX4mBabHQF9BweznjxaavwWuxvvqCVC2GDVKoU",
  "key21": "5wAGXv1xm6QCcBuYFJaX8Az13ozmTFbuGXPEEVmgkqDDR5A9DrKizpucfYeDFbE5w9RjGJQRfa1CAqaDiWyj2rAR",
  "key22": "2maSeeRy7TUHY1ERw6zc9hkVrB8dsXG36v1e3d8jnE6wfHLwU4tLHxzm8gYy9WXv7yiJP6VECM4qCQqspzfuHPBU",
  "key23": "EAeaHwGULARQm8sChkWfPssCZAnseJ2LHSWjctFfx9zJVWQo7xyzxJRh5qxiQ1bZ2cXAdcJht64gsbaHVXjHsUe",
  "key24": "32w7mhgpqWQd36uwZWghnFbq9vipm82tLzWJsGaxQ5zgc48ZS4H9yJsWL3pXjCVbTk8g6gu7fQfNiv8ZF5tXpuES",
  "key25": "2Xu5vEJTaXWaffA3NGqTVxuELcKiwBECSQu7fUDhn2mBL142Ka4XQciuxytVxVCKtNWvex2vCaBzXUa9AkzVifCJ",
  "key26": "2Tnoyowz2inyzvLFwTv5KSTCY6eaKUEQSRpkoC5PUUBTygGmzygjPkC9X4LN4bxqFPYSccn3en8C6pCVE1To465D",
  "key27": "36Rd1gy6VFDFsN16PEVKAFfX4wG2yQZUD5QzMa465JFVNRFUgK57yzNDb3PaPMXYe8xPxV7fEiWWMSad1Rzd6Xqa",
  "key28": "54T49BW5C7WN9nAjsqpxfVBTL4xKJwhnnq5J9uFxXLCWd8h2wHpYyVKdVYtk3sejmzcnUzhFuudubm5KekeYe2Hy",
  "key29": "6kZmjtRLbtbk72kjeEKMqscbL7JdPfYsT4hQyPP3UWkZQ98C6GcJrp3X9ndsw6MgAgcWU6mPKJ1SrrYfdnAVv6p",
  "key30": "54RhCnKfYV7Jcqj31vJarNpv3bjHvra1K17icyfFpVijARYYkAex7aYdDjALS8peuX9o1kj8aXpJbriPvaYhAeDG"
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
