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
    "HaYM1aZWDwaHUUAMZxeA1zosUKBgZLhQjnBkHncfECnp39ztBjT6S4p1UZ2q2CcuRnU4vTgEamgy1Dqty4jd18d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1jRgkwadcN4Jh2s77vfNekFRUj11MECbKP5snD2wjAghp5MjiTE8y3SnjnsFnz7sxREEckFDYqXPms3wPuySdk",
  "key1": "3EpqNzvsUuokWQtnBh87wCpbqrxf9V9ZxrovsFfwzAt4v6TEjnMGS3gSdNCXiXzjkX29XboZhCAc2tkSChhyneQQ",
  "key2": "63RHWVggNF98ihQ3GtrSoyhDH3hPQkw5s48odeUkK39psbxJJSi2odBBYV5E3SozP74U67uKQ3VWcMxr7c1PAkb8",
  "key3": "9a4xN6omXfhQDa8YjxR2rM8ALmo4swraoKnFXLk2XeLHrHr9mR9sQMKdhtSVbmqEb2DDGfwNG5YoX5h3mZ2iBnm",
  "key4": "3boe1QSEpK7VmAxrPx71fnJaXf97NckzprWy7XQdpPizUmZk9ZXnNc4GnkjpcyGRd4c95cDoUWjuzP98E3gcoSGa",
  "key5": "25qYjztfw7zAqyZqtRDZVEh6Z8pU6tJUhsxiKQANWqmKxGMaWLCsGphVQgXQx4c46Z1xZuZYcGQArys7dW9b12Pf",
  "key6": "5ArdnCZBhrKhFvBP3kXcfmddZVME9dJuu14L4MsJq5gPRVP6qoEBXNjf8poW3xSENT8T9guhm3xdFxTETEAiZquq",
  "key7": "pTo5RncL3iw3XJCdfmYfY3MoJ4WySY2e9PVwVyzoaBSRypQGpBLQ7XGkRSvM2zHXxeuWKaZvPtkuSpuvmpgtr7b",
  "key8": "58YWqs4n4XRumRxpCx9ktxJKy1AKr3jg6LqApNsap2m5QmCXAGTeFU41RCo5zRdCUnSRresiHcsQXe3Phom3xRP3",
  "key9": "3VVkFHYW4qTwNKjiNDN6ueUZnB2qxX3NZZVjmJhqQuWuh8sx1vsgEZVNmSv9rqzyfwd6u9zQdFSKmZgARMehQR5T",
  "key10": "jreK6PFwgm2r9BrAFeGXeWcnYchGuCfq3PEK9qnzWxuU4bbT2kA2HKvcKNryM9F1RxZUWVDxGg3NWMUjSF4aeA5",
  "key11": "2pDmQkF1jDVfxSzroM12bzTDUtJz9A6WAiVB9CBKHa1yxXta6VxbPLQEvAgZiuivjEDndEZJoWaBeQjpwGpfink7",
  "key12": "SYFxZi7HMijUjUPZLitLp9NuHQ8sxXPuh3qcYs4wqUqrRwReenP9f7GiSVhiNZ33L6PkpkUWj3LKJkVZPKeXSae",
  "key13": "381wQ7n5UwKUMMdkAew96xZaZYUxZkUW2MTDXxWZLGA5GxMKPvBRfTTpb8Ug2kB6F9z3HM9gvQpicD5d97GqYeq3",
  "key14": "2Spf5XoLwvGZ6X2bGZmaV95L9smtxUodA6yNxrmnPLXuufaw4YKYGQKtyE5jDPmMz3wkBEteq4D4Z7Y4woP1BBLd",
  "key15": "35zZhqiNCo3qhSJfMtWso59XWdYveLiiUSkHFHrZtmAMPgMWb9p3mqRVY7BeMzYFYHtXoZq1NURQGnuwZfnrthmh",
  "key16": "iAs3kqZVb1i9p1dB5EHbJEcG1FCJURrywbfB2JqR5SeFw5c7ZMPcHgKqv3LJBPnVdaGokXTJga5qkPxCMSNaM3f",
  "key17": "2Cmw8BNwXYueEwMFJi4ojRWTQSGUTVjLEzhFe2pmxTzLvGTSjzBq2wRJJxLRofCgmNiMqQ9zSxw9xWPcFaYWFmcn",
  "key18": "5pRSAfgE7m8Se5KXoV9BiPLSyCEN8cP8mNz4Q9mWm26d6HbeBc2pLoZ33S5Mm1AnfzN2iUEbQy7uxKAf8jDBBaXN",
  "key19": "2d4qxX1iDLxRoZM2jPYdp7WFLTXkmUWWAZ4wTt4EQkbMjFtrjmZRpKBoxy6itVKt731wLHxinFh6CvG8qNBUD93d",
  "key20": "5XZPPSXBnnLtWqueqjC87fzKiRjXWKrJyuo3XuaW5mJc1xqx2eYN5XaqAAGWqTRWXHqR4QnDSZ8yTJqCd3P2VGtr",
  "key21": "2U29e3cDqKQsgh7oTo62u7ZRYKJLSqMMmc2etmRgqPYTPeERu4eCyYVUhBPXB26EkhXP7TwRmzNGZaURzCHT9nhY",
  "key22": "5Vzu5sENP13iYw6BqsCp44drVKiF2oe4rtfMs25DfW5XanEvpFwC9Lqrbcero4Yn2kPXWREd7vKPWCCL2ipRQMt7",
  "key23": "4A7AxM2dKmdw5F9m5CLe7NXfQ8GQMwSE3BpbXcdsJUe8cArK5j5AhrRJiAMVZcmmhyzDziaoYvMdr9cWWT15mJjt",
  "key24": "2MULR2p6BcAuP5caS6sSYsGYKtZfzePiVGdG5fKsvscGD5X7T1kSAhcGe7XFQJSgtFCq5FQqAb6KvaoGjM4AQDLa",
  "key25": "QVvL9zQLfL97zgG2aZBrbYoPfpeac2pzJBz4ZQBm3stpx8Ncf81E1EKnhqksmx28gBZMizyRoKNb8y8NrhBjcna",
  "key26": "4zZE73ivyXioCU3Y6fW5xvPq7GyVyf3SKNhND9ES1gAvfCe2bTCafRUdJBoWpMNzqG76U1sX9PFbyxWkRWwmzUFw",
  "key27": "nibRFuSgcLb1rRTTBELmt33PiZKUxNNu2MiJnUhN7FdvwQY6KPJPjDmtNqDSioQ4udPt9W7B8EjXS13pjVAjzAe"
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
