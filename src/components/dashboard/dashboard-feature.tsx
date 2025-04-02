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
    "3cm5n5hyCSM7zacvs7xkU66RxuwLCc7xyjnSZEK3YSu6zoYiyoY3PsNakBCDqrN76hk5wGbSFQjfZHZGwEeWLESf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Us6FdgyMXEWgsxMiLbx2hi9QBthdk88VY1mMGgyx9wwa1GZabYmNELhnJMV5w9s8iRxs3ZYukd5pdhuELwQRaea",
  "key1": "A8GGaMK8EqFxH1HvcBQFcYY8HUnxPmsXPzCQTR56TgPHB9kGTVsafJT8sDqr847HRBzAZcSgawLNqzaJzEJo6x6",
  "key2": "HX8QNHRXDzrb6r3oCXrxBKiTfHCas9ZAsJS9bDm6dqnzK1S465CAcE5YqLMRn1kFmqEiKzfGawMxeviiKT4ifXu",
  "key3": "4PXt3S7ADhLkrZbt5ibUnWs89kKUzvdwxCtT4FRaR8hmMYVnXhCTHHcugffi6WHuw4fdvJsnVhZpGTwK5jR9oNKx",
  "key4": "5gfnVUkH8pydLy1EwNCoWHvEjs9923kmhmWSivCtDneVwjoVkWx8UyJfdBasHamWN9CkWJ6VLnVZ3mkqeGScJqi7",
  "key5": "4AhWTixNeXsc3JqG11LEtqm4T25zmXddkXeaBUL7aewUN7AfVqKKWUCAc7HmwxmRHkMudjhL94ADiioxHKkWbf1d",
  "key6": "4TLa6jDe3gsp3Gp5stZTMbykNoT9CKa98iaU77HHcL3rfEcxv7WW9ojMwvBj89ndDLNnP8P9BCAV9yGLEWmJDo7A",
  "key7": "25cNAs2ELWsrMwYqA8uVcVg8q4CTEpAHe2BfrehznNxuBc7pVBUmFpY8sMmsBEjC4Qz9KqRtq3Aqz99wghHEQouh",
  "key8": "23odzxt1sky7d8S9tpfT6B3aHRNZ3eF364Ce33gnquhoc8Af3dctccsfbFAqSVyMQ85CXgLgQrV6jTKj9tUurLZn",
  "key9": "5YCuTFY8qa8H6JeSXkusRgkpnjPhLeMWY1z7mGX4A57zmjBdVok87S9nnwofcbGGHfxNzQo95do56AoaPRpvfdW2",
  "key10": "5ZGtUYVT6fiTVA8Kn4mduXNAUvZLQYRkb6kWA5LqCypz4tsudNgqx22LSMccRJAsQ3Pz8ZeZXVKydHxTDoTCWNMY",
  "key11": "2bX418WQwCET6Z7kE5ZfB1QDhDygtViJoLrZTiyU5eXHLeBJVRDARxG6sA8tqjH2UuQMQowHibVVhmQyMfAZ1uMx",
  "key12": "2VjMy3tq1FfRcfBVXNTQhRY9YSSjrVjaUKKtLLgaqFmvaYu4gPApyCXtfywSNBun8Vjb4bbfbbf2gJyJRL1Xq8T4",
  "key13": "5eGcWFeds1XEfR7h2PWkpb7uyVhpNGhZbqrJRuR9Dm7W1KLmDJhZbcLiurwNaTXSrzhJdtDgUye3W7eynXt8mJDL",
  "key14": "4G7xawgEbrgTg9vB1o3HMtoGUMkyVdvjWhh2WPvD1q1myyep2oWmWbF9tCSPkVFof8RixVs3Jdi4CDEJEquTtHG5",
  "key15": "53Yp5oYWiyHGCDLFPGXf1NXMtmRztfGiS91rZY6Nar6ZvXcpEJ6naevMmRXujVKrukcQEESpygnKfpPFeUGp3V3V",
  "key16": "5RhEGn5cbcsiQsvnDYBo3GpvwQqwwafhFxEPHbwCGeMQdUtzQ33RLVZbLjoJH6kaeviy1cCAqR5U6Sgj6oVkjUu8",
  "key17": "42fTG4gpju4sGWZmXH8Mb5oBDnimM5XQMiEt8SnZkbp9zn3NH6ChewBJoyxcDimGTvkm6apCptHC1BUu4rYfocCi",
  "key18": "4n7BrwSUrX5bc2YapSTgQXxHFgh6PSNpWEUDeh89Q4126PyHtofb4fkLwwCeSgrW5G2KpTbRYtw69iDFGcYC7AHk",
  "key19": "8msKfA9rtzky6D8VNwKThPrxeE1nAKLZTYVVbqaXDdX91CK5ovzwMwTRfqWo3apb2d6ZhVPAvqXoL7jP7Mj583j",
  "key20": "24jhyawbDLSTv851nzbVLvXnh5ZC5dLEzY5aBeafJBXa6hWeTg2EsyTd4P2Vwg8xNoAyEg6UuKLC2s94hXHcFSAE",
  "key21": "kivf51rAKdrECCbxm4XipcsfXRfTeQd98Hmo61dwVKtrE1Cvm9csiYzm9ydA7WTjsJDEGGkvsUFuvd3zGPPrZZp",
  "key22": "5Zqj3FPCv9iomYJnVTjQouZFBAwhSkXxPkMC2HZyPX8yVfKeo6Ap9vfD73pFHkpDSgP5yD5wrdxRRvGqQNfEqj8A",
  "key23": "5JjtKqhwCZkc541GTqf2Ug71pGQ8xVtaT1eRSimCmYVijmQ1AFck6rAG9FCe5XWNLizLo4qVPP3iSYikZsXPv7z2",
  "key24": "38rWYfSb2LSF34Ap9ZKZoMVMU9dCwM7izpwTzzmXU6FCpFumj3eKbnyUyWMXf4t6QBWLMfuK9nAvqjx5ezWEGLAJ",
  "key25": "4juA4727c6Zt8eS23K2Eea3iieyZRTaL63PQEMt1N6AC6Gfv5cwAYG5jFVUmoxZ9AsUUcG3eyCYgnuTddMZhL1xW",
  "key26": "4rmGGyaTpxRTPHB8EF9c5184XFKmDtJgFQ44aeBbw4VKPrRjxdVyGKhb1crbWYB7eYb12FMotEKJ2zh3GKdEap78",
  "key27": "WX4ZGfm6j3hkpE96PBBcZQkF7qs91UWb53o8qNUq82FdV3GVkg6ahHfWUCVfvsq71dfm5hrg6Y7cESXCtQDB1G7",
  "key28": "4ExkXGYp6DLXc1obMtM8ckATYJV8biywtg4g5tVPP7znwWGpYbjeVS7bH6TS6MK1AE1MJaQUuHkQaPzan8pNk1Kn",
  "key29": "5tmFohnDScvmAQL9U77odVaZiZku2FaXKMT3NMQGpnyysNyy3BTiFnfq2sKjqXhYpxj5kjmwYHU3MoF8dD2sskKj",
  "key30": "sLUV9RnivM8MVM4ziLto6AMPrVQ25FTsruJWnevtSV6A1qEGjuvuvfwq8veGtDKVaoJXCkfBDpAwpsnpsHrGRvX",
  "key31": "XaTF4df3EdUtNVnsV77maLrgsgWyvc7GHdj3hXraGpFf7AAHUCmudcbrtyKpCkfTZb9odVz2iWLQnzDNX2EuhrP"
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
