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
    "3SnMZfFJd6VyGyZoztSvEHTWmBSLN68bKGDCUkTYU2wRontYiw3dhYZjJ8sk6LWZ6p6c6bpo6gWqfSuKfQZ5SDSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umRyUpgf1axSqwR2NEsof8ooxC7tq8Q3zbhLKhM44Hrak1jxVP5WjCMKNfM9soAXyPma3z3gEwrc4AketVcqk3y",
  "key1": "25fZrXWEWzsAx8UmS9g5Jd2SYWELmZP3aeMwao4mvidfJNEXEQxsKvB4KmLGYo4e6ZgS7icDJbsXfGHcWKMSHyEF",
  "key2": "2bYruMGKqwwi4sgGGwMY1xPnaE8AD1fisuTMWxz4ZDk5Tpkh3RwbBLh69LBm624oyJgPqBPCA7229jJc39y4brHP",
  "key3": "vfxNZuEsZnR2BH9edHj9Bo9xWQjE7Dsfdh6sJJPnBiJtVr8nu1RCHu9PTyvE3v4uevUNWV5eVNyLCZxoGwiAPy3",
  "key4": "2E6QWxwfTAqu462K8wL4Tu2prMwWmubrwKSJsJoPftgqvk22po4ThZ9HfoVrzCadUEkTdgpLY9vzrVCZL1aGAovD",
  "key5": "5QRQbFhorGCJrY6jLhP8pyYF3EDyAeYcxqQwuBjZ1M89KCB8g95CTzJ4w12zbNMig1e3Ftt7t9ArfAzdDgFMJqY7",
  "key6": "2xk3JGiAmxRaA7SsHgw6Vfbu7zmoJcXUphXwdkzXYh4rBkXuBWFQkmk7VP8K8jakTyfWQ5oZEYzaXmweMjGBYkrk",
  "key7": "51ybhuf6LtvTZYcTpjZALjTVyVv1cE9Cet6rv7eBg94qcnZoBx2tiZHY8icQE7BVFSk3uE4EZSniquY9A3azTdDC",
  "key8": "M1cpZaDWNf6TVB5Szn9J8tycs8zti6sBtZxR758JYvYbzSxAguaDYrqXyv6FtnbPzSN6uVrtkkvQ5Wr6amaRrjw",
  "key9": "3K4FDYbm3mrGny6Ac1ok2YQDrsEKsrAPLkZmcuX2DK3ZAxMZzj53i2Y1bo7kJNDJzzx3fT9aSzih6tDA8cXvJC4f",
  "key10": "45XswexwP3ouW4yu2VxaDcp6yVk6hbF8AgUtxGaGU9rF6mmG4vD1ZHBoke7aL5M7hqN3vdPNAuRW21sueeJftXkf",
  "key11": "3s2qHBFtwK3zaShyjWYF1R2F8FcVvGNKd7jfoAnV8xHfKskHT9NKBEKFSsVTK3kQSdDcuPRDhn4XGXLMHds7usGQ",
  "key12": "3wmz3D1KVFcQMj9XbmPTqtyqDogkmkwNSToGBkBELDrBEV8xyD4x9ctcAjCM3Aa57aqKkeA6j1sM2JDTRuLb2hJM",
  "key13": "2AkNxfZTc5U1Y8925HfhZzQQaUvLpEsZZpEnuMt6sSycwA8EniCt4kUFKwn8PRMuBg2yrVKpLKDumc99QH7paonA",
  "key14": "5zzzX9v9TN3AEi3hvj3eEqwZfzjHn5LDkMkHeGwsfTqDYFz1gKec1yGAymH8isnD75F5MgHNrahSyDJqY2W4YGY3",
  "key15": "3dMbjhQpzFS5W3vSFxszSwLzgKg7sDRbK6iyVwNw6cTADLN1fdwKkupcNbkERoRJe5LozuCuMUoHtVAX9ifh3WbJ",
  "key16": "2kYov6mvSUNh9dELvUvZAsx8ya6EoxkXdJf3EbcwBNZss3irWWAJ7EL1rXtW6bXsHCpHG7mov3XYEqWvCxfxP36r",
  "key17": "5GeZV82ow6VQTv8cG5vxKg55Yd5RV38GEHRLwkUedg2vY6P3w6v3MaUqkfD9xHBQMCPu8SGFnuYzSfcvNU9tiVGt",
  "key18": "3RdEnZqpXRpkpnFMHyzBCSsqFYzQQ16ExaRb6kpo3DMPbz9t9DEs467oM6da2u3qBJ6hxdRA2j9j2vMX5FGP1CXd",
  "key19": "28XQqKW8YuXua4735RiqJ3ccueygDKGZYpCJXDrVVeSxYYjsBfKnGLZj4xnLPYxY4tyevyxcmHmaooeYoWnESJsf",
  "key20": "h6h8v3oCLQ4g74qTGjcpt1XiJjnUWAeywTUc8JRYYDP1pu1n29V1DFsY6Kvb8NXmZtssm2NKQymfDZXhuLgAD8r",
  "key21": "2VV8x24HeTo9capQkHF4sosQhtqqpmfQPABvLu2FzuqUqRz2Fc363sfy56VuUYSaMRWyiQKL8fYkrEXALFA91KWA",
  "key22": "5YtQDUveujSW9t3LyxFEisczqptLZqXx2zqxDXRY32tmWzvWG8zN4MdxKLgwNe586ZwvLPVUb1LpTBr2dPMdiVUw",
  "key23": "mi15Wh7PH3YLb4eYfr1eXXHpPJR3KHnH447CrkqBwiUC8RC7n4hXRvtYQmcZZNrR7B9utJP4pfUtRB7HQgbsZyK",
  "key24": "2XbQ1XfW2RRanS3mqXTuj8AUmepNW2o6g57R3UToJb3YRKWw4bGd5Nptush5ok7DPXZvb8J9JokH9wKsWoAicK1o",
  "key25": "2oBK5x7D4aJEDVaGAx3jzo3bpcdbPX7A47kFRv3sHmXKFDf7W9ytR3m68HvGMeXYsEJaaaexdBA2WV8J41rVhxw4"
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
