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
    "2bcvCpCJ4UGQYn5LCq87rWqiT3WMBorN13hz9mVSrbyUH4frbqGsjWVwtfRwR3agLgmauLF3C6vds3RmAc4NhBXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJsSS4Bo9ykMMLRYdRAH8u96EwktkDKeergLDceKnRq2iqCD9GYcMeuGG5oJ6eJHYiNfiG8a8ZrQVvLyZTRpvGQ",
  "key1": "4jzqrYPQfkXMXb6oTix123LoTaR3vs4CZQxoprExB1Vm7nGJkRgVGPhrnavV1huKQ8KnthWGNKVveGnGE1rSN3UC",
  "key2": "3rYs3EmtXPccaNbZZJ5RjdPGTJmR4WFRnr4LCxuJY4ztxWWiDd69UqjcTVYtXeX3SNCKXH2yJqoNwXPbszo4yoTS",
  "key3": "2fbYJmej7zfqhFSQSfBmXMZz7q3HcYu4a2d4UqgxiH6a5c7Xw7DJT61TMgQhLj8NunUcj76hhgcjcdEWkUkriPWm",
  "key4": "4JzZvpDynTVcx47MphRB9rB4ayomhvbYenK1ijxrH5Y14SfZHz6wJRZ92AHGEACnxJKA5HBzV5tf2rrTtKi2FJNG",
  "key5": "2T2pz7yTgFyfpViS49XzPrA1Up8W13Ar4PjuiuqfcFurnnRaA8uESNTmpZdPRFZsygGgTsAFeNJyicj7GHgGfL5B",
  "key6": "4wTQt3y3PCDJYuNf59akcw4X3emKu1pJRiqnudAu5gvoTpoJLBxK3FdyzgxBey7js2EDUbycaP3e81U1y3cXnCZe",
  "key7": "3ZPhv69RRZQE3zHA1T8sZrNQNvPiGy6uLrp4rjZ7uvkqqJruH4K2vwMZkeKpW4gm7u7uXGUoRaAuQWyTaedeMSpe",
  "key8": "3aiwyJwwuyxP5MBiQ5QNAxw8MjBNttohX7gCBRGXx5SA29UMigfBjFF2KSd1jDjRc7UyFpTs5ednDFqa8xextUGC",
  "key9": "5QKUW1i7fiCeRvDkFvYFX4T5yi295d6VnQkU8bJtm23SaSKVRrWM5F6WCRGKYHqRqkF5vDZgwwcrM732rULafxuP",
  "key10": "5Ea5QefTKw7RzXAhEuxyPvu7DYRw991bgGeFTPaa23Usot8SwbNtjyp35JshCetKpACcLQgMBafFu12Wf3dBWE2z",
  "key11": "5VwigTsX5jCS1XpWnwMtJKFbzrLq2gsonhzdcFsgT9VUfjapw8AmnBZUD86AkzsQrT2ofD5tRBGrQf1Ju7HgsiX4",
  "key12": "3CaRY13KA2MPNboXTvZBXemhDuyGFziDZJgnHbMc6NkRSw2dZPhnrWCf662RNgYnnb8eAt4PeUFufPSS7LLg3Htw",
  "key13": "4ru4Sdidd2Y9gsNvxrRK7f6c22VoCYSuyAKRYpQGZhZHZnU9Bv9aR8qnUf4V7jHT3hK7BifgArFmVKwA7tsSVHKa",
  "key14": "3tJB6fqDFMVLYEF2N3XmswpH3FZ7J3i86UMBDYMkQPAfzK1xi9bhVFcqbT2cJrH9AzNBsB1DnNhjfCu6rLZ4piXM",
  "key15": "3XvBrCB5MymfbBSVfCKJyL61mggkt3vRbQtoMjD6ETuXq7HW91Av5e79T2ZEtic5ZMVWnNkYvFyMhZQSt8WAHVrt",
  "key16": "4R3fvfpky6mHHQDmmnbnakgBidyo2aQSQ4w2S6ah8QhGPwWr6RJPtjCGv7YtwEA7F58Nd5Jz95QaQPyZieqpxj1w",
  "key17": "4PAUpBXfhUuyeFRXALuzsyqV6A8jQc6Wr48szCkGMVHLATeLCrvBbngS88HBZLiE6XSnxwGtVKWLCYap1Geqt9te",
  "key18": "R3mDRsE9tRP5DS1XQ5qxPCEkGuNhN8uzM2JjtVmvw7VCLViSMkmo3gJGZ2tzBRxGLS5t44T9eeWXsDC5XGbxKLQ",
  "key19": "3mJgZojmY4GmzNJfmAzdD2uKPjyx6nJFjciAfqonnb2QtgygygErZYgqPn561gQ3vGptKVZcc2ci7dgMfTNGtMHA",
  "key20": "3MejzVen4fiBWtbvpgj9bUta38agEYJkTJqiT9fym6HkUAsYXQcEoTWLVkUhmaMN9Nqnvy6xDzbrz4dpReS4cgg5",
  "key21": "2niegn8eHHawEytDRTJUoKFHUbQaipiXq7HbqcMY5xDLWDTaNNE2zXAhRuoWWm8sLWqh3fV9nyDzwJU3SHNcfA4U",
  "key22": "uro8x6rmFyAUC2wAAfrZea2NF5aMQ93vQtPWNdQRrxnmYisUMzzx63CdS1z7LB8bcxCWsvQJSEx4mJf11wQDWUY",
  "key23": "3yeuUHCEqofcqUWFnrmhC3cTTkkq72L16BwfU37t4VrBbrSJs4gdR64PyXtfK3MLHAtSdpjpskeRXo9jZFwSaBUQ",
  "key24": "4ndoGfnkm7ETQMkk1Jxana34co9VWV38yfpeBzABVCkPyoPfZRU3nq5zrb9uQi4R6Gm2BfmdYVfJ17ySw6ti6847",
  "key25": "5uixRz6trbyanU3pGPKTJsjLUm6PTH8pPogUC623T7LzLEVo7tdCKBvm8jCNnVi5jnp7vcWBwBwF1ryrs2DTphLo",
  "key26": "JV4E8Qygpehc4aVTtkrYpp7RPDFU4JKHL18X55gEkCNEZd8uE7FTs8qQctkUnWBZ9N7gJ53ByZLsgHj4x41mBEZ",
  "key27": "2w8R4fB7pyMWGyQJBtViDfH4MkT2Fi77x6oSgPmFQae4syLEY6xRGuByoshq2sw4kfUof42PufqMXsbZRWwBuTbW",
  "key28": "3xmiJti7XYunviDY4dPUA4xEa8a4SFy1xCvJ49noGG6U9yr1dqg9CstCuzFRemHiJZzbhBeEpazWfNY9HBZh6CWN",
  "key29": "49FTr6543mdxye7Mec4Q8UzEXrUXYtVqzCbzXrqGPBkyhWpQW4iKfuq1sN7HhstVFMoWeAWVCrWoX8YiBfiUzjnU",
  "key30": "5iwfncaKcGWMM4M9q4GvLvWN8phVKdguF1W72WF2EyY8xZvBepMyuYtyywa6LRL6r4nmvzQqu8Rgo7XDPmq5gjDh",
  "key31": "3U8rMV19Ly3ayHEz1jRsyr95SMgEuLRv1GowEPbvDkqgqm9b8o6daZFwrdjWn8AospTTqmRBw5EktUuwUL9192GW",
  "key32": "5EpX2VNCPz1B4dWxSZs76EPpjBXjBPcXHkj8JcDSR1JU9na8q2Y9RBrPAEd3ceKXCnLojoMiczkunSyH6aDRJNTd",
  "key33": "4C4BHEtxMp6FYVAtgz5q7p2JJR7e3ugtfEbi3Q2jU7Pxzc8VrC2rgvdXPfBiWK6Y8vwBpCGKnXckdwzSD2dVd7Ea",
  "key34": "2BeP9LZ1CuwdxHHw5j4D2NiC3xTtySmNWoqPRCngBYTn6LNDgRLuRKVWBT93yVkdGbwMRoTR8BvvrbqikMWe9Ez3",
  "key35": "3mJ3xnWRqJkviRyVgFu6qTLUNcbFVqPffiBcUAMa5dfxPf3NmJ9iDDkg5xFEDQpvJ8sbrFGDpwC7cn6tqMQjHqJu",
  "key36": "3xRwAEGYNUL3ExfHEAwf7Z6H6E8c5rpivU69W4AXCm6r5L8usqmBxBpjyMEXdHddgR98FnHa1dE13jdNYU9qDcL2",
  "key37": "2LKQPwxfMemQfNof6uVjwHxPBXdMNUdCbC2j1FWxBUSQwEcUfijaAmxFpbYiZNzXC6VuEJThLfpocMQMnu1Feogm",
  "key38": "3j6EBsSgnoF9b9wxtZwN37PVuGfQjCyXu4WDL4TLt8YwB9sMcENc9W79rz9Y52SHr1kXr9i3YmV4jVKLfPmdd8Xf",
  "key39": "2vavmzSzjMVR5NkxY7tVxuMneEm9ExaZbXUBX6dwSi8FpPT4KSECmgyg7tTyZMrW74HyQyueeWiURsTrupij4THY",
  "key40": "3XDpF5BtaWyokEJSkYCXYHQbtV6ksHqXD7dBcMkc1xo4fRuz243aSFstihpHfHsQiiRLjhZTNfJTDhd9miLwKzvM",
  "key41": "2fgWBpkPGijQ8fnBsJSYVHaj5WWef2LazuZPoKvzDQWYM8cgjGhH5bCqVybG4ES8GijVSR96faXgQDpxJFu46qFd",
  "key42": "iS9aTHWzUBmADu2xB45swSWbBitqw8XWfvRyz2fv1YK6jtpXjgXx3brh4eyzbzZEL5be4gVeasBdsubcMsC5iWg"
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
