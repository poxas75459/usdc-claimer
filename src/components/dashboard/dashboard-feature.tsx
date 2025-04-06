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
    "4EFQwsHgfYmB7URtBiAPT6AC1XVY8SAL3ra7sQ4WzmgBS6f9QGwz6vHVafojA9Bb7fasbfKMiGpVZijJWhAdfAQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xcqhCEYqfn7Dnihm3cQuCpJvmwuUx7GmYxhAPsj7cu69TQKroJt6omYxJ76z2HCwdEVGGBL5SPo4f8EkjoFSa6y",
  "key1": "5b6EiXaNZjJyeeHZBotusuBZR6uHsvtkpDWFvUuY2D4ttTWe52AMj8yy5PSDcSf8iATtWYefWq5tSVhpcNGdtM78",
  "key2": "Tuwokigp97Rtj2Z9Qwctk5LR5M8QQFkDXupDzxNmDDsYkuw6Ft1TdYhk6TPwS17caPZWM5wv5wFL2ZaJpWrh9b6",
  "key3": "42wyWSv2vg5cXzN65P5og4mEa32KYu3dsABqWxmreYv3HZRGi6MLBsn4qMJnWUTGCQKaoeyWC2i9xcMF9W4wdzw",
  "key4": "3RnduZXKsXzccjnxT9b7pgYQxrxf2GNjuxrwPUC7Pjo8as6pDJHfgg57wWAgLVcztDdWPTyRpcQixbaginQdGvN8",
  "key5": "EMizydsw8Qjs6v3RMxMRoeaUc25tPWMoL9JraGVGK3JNJ6jeQnwWhCsFxAqLh2HuoQicL55YQ4mB4npxR8k2F78",
  "key6": "44zc1ot2ggvoy3LBCJv7S8e9Dr4D8UqoYvCuPB7HdLY59eqxFMBhxGmQEjUKADhuPGKWzwiHbBsGxEmqvDd1cszi",
  "key7": "a6XM9VkfMPJ4VTKgTXQNFG7Q94b2huomSnQcyCD3AnnYCvKFU9h5DQTiPXoYmgUo6SVo9R6MNteuiFjEy4PX8Nt",
  "key8": "52snpcBXmohjt9vLbAB2mhGMSwXuNVhwKE4T84ir9Ntehqs2KfHmyvwHdJbJuszZ3pi5Cucyh6KzfRbFA7sPgx4d",
  "key9": "2ThQAhAxy2ZNp1PgMQ6YARsGuNHzCyKgogJ3igbcyiZHn1JzUZ7u54NWtagrAmk3ZVH1XFiKFuhv3JyYdGpCMNTA",
  "key10": "4jjJKTM6rAp2QxUMVeSZhQT34HTRoywtuq26ps9BUxDMvW6Mhmr6XEx1gtHnXTwYXqx4uJFQXwVLrRupWwsj3wZc",
  "key11": "34CwdEJJeGCB2YgG74ALx9xDs6gZTnwwDES1WW2Qj2HHwnmYbfqWhwbjPsCGNi6US1y7miMjh34tbUC1zJQDtxq9",
  "key12": "2ppqPviEMig386tDY6GYcRNeaJ6LwN6oB2YTbVAsPx4t5LsvABWR7fqtj1gi1eo64e1PGH4TRZEAxJ62aWrdcSLt",
  "key13": "B4eVjwxAB4sZsuvUyjSNGobiY4PHZGjmpfG4roAg1Xtdihuiq4jJuXMaR9vigR3ULTmChHWkPS9sE4ZE4USpQ3V",
  "key14": "2jwr8f4xftHMuLh3b5GYbDegnrYcCnmG6gMwLek5Pfc5KEXP21bD5eeLsTtt26EqQpRhSe1ZjsPWQm2XauHAnFBz",
  "key15": "3jKqErwj72VKU1oFukrCBmhTtwxdUuPWWgUkEGZX2v9aU68do8od91avZ8oF9DgVHk4WRZmfK6RH87qzYfWSCQEU",
  "key16": "bYZ9UJPwnWiTfRJpMvPg3mWaCZnbsywvwfV7gUVVtumTkNVuJiU4K91QjUuaxCYjHSF6VJ7dYpvS8P8QSH8YYSz",
  "key17": "3yVw7a1dHoyS8qEwSW8Lxs4ztXm8Rduj48jU19hP6Gddj9k2KVP3fW3HngTpmw135Agy6XbbCDTZTP7kBdufFQKa",
  "key18": "3vGnNzFrHELmwoex6xdJ9sFjLnK9GCMyHxmUpDBbzRP8XTyUcSAEXutSs9xPPGS5WgzetxdYpn2VbArrwYA7puv4",
  "key19": "2AoGQ5qthBwiYrUQqrxNHh6k6cXX6hXuBZJob4yz7rUN9pdbLgDBxtk9uuEK55jy24jVcLYsAqRw3SR29g6jHh7Y",
  "key20": "5A9TDuSyWM6AF1Wd5bedAx8uXmKd1h6av5yWmysgyg4NTeSeLRHmBt8oKBS4irjpZgFMum7U2svSi2wVbRPwoE5i",
  "key21": "4y2HW9qDH3WMNpeaVjEa3qXd5RsPrAynJ1AfmthiEBjsqQ2v9zSdTdVDcjTBtmSV1FxXKsDsQoGoHqa2tBuVdnU3",
  "key22": "2214J51WZhY7BMiZNTVMojGF9tVompb6qce3YtiMbH7Wut4SQ3THjwYH2RtN7k1vfGD9tTzLNeFW7wda6YqbaLXg",
  "key23": "2FWafPrCFdgNi144fKMvx6NeL1Y1ZzU8Bj9tNvPueF4M4SptnVwHx1gzhrpGpCRbHHmLV9y1RA3QWjsvaHBdmQjm",
  "key24": "5r7szfNFsWMUF1wvgcZd4hGNMBMaG1CTDRZJARp2urC4cSrZ9fq87YxNw5uHSokzGxQbjsC1iP6c1vcv75mcqu9z",
  "key25": "3kz1ZNoimoTzCQdzgLL7Ug7sm9zHdqjTj3YfvsgVx1K9Eut8WmdTHC9gHes9T77qr23rXuQ4AKB74QvXTVTpLev7",
  "key26": "avrmbxZa9urmEHwxRHUU4i2DaRz4UBnRZfvCQLWxvsnzeGbfrEVvHomGuXEcSFE9oagsm5ajKrDwxDAXivwArCk",
  "key27": "2nmQG9MfdZG4LVkUGh3JxdzdSpooQvMwGNVPGYHB6Pz9WadV9cmmvyYXGYEzGejyR1Jniq5bMYkpoaPCbjbZbbBG"
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
