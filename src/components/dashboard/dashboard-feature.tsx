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
    "4XjQ1jNCMfdWKWZYL9jXig9NoisNS6Mgh5ApNs1YiFyABnWuxYpMD8N53MMAN4FqCtGU5pdNjs7HbCj22jDcB3o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUp8Xbq2FaUyQR7rvuL33ekULF69heo6xWt6hamvsXHgeu9MwU1LXFbEqSKU9ogMCqCLqgv9ycRzTp9H24YPGqp",
  "key1": "38v3yGWoroGmyTyqBsQimq1VJr7jc2WqABdggEVgFgzRS9BwUrjRxJFSBu5pxoVh3b5FM2FKB3f2UqMZFTpvLPKE",
  "key2": "XwmPgo5otfF574XsjPWMwGGReioh1aGS4y6KeM7NfuDBuoVAgRAn7FvbbUvdDjVd3tHHiG37hqtdgs4rFc7HcDa",
  "key3": "3emvaoUG5NSaoNF3h4AE5jD5TwBuxzxJzujWWtEiKn2GZHR8PkK1AXWASSz4K2qB2jJn2pQjcnqPg9gcec6MJAqv",
  "key4": "25XqV2QVN3dsoRVc4Jyx9mUfwCMvqXCAoCk6F3pDrLaZ1W9Dgjkmv4ZfpQ2jQBY4hFAfwWMLAVq2ovgSBzShGx8v",
  "key5": "3PaALm5sNYUTbSxFdyxvtgn7X9iSPSVZ2nhF2DyVEgL1EJPhwuoGaRyZEUD1oFLxQk5qQwfmKwb4sRQgwRAihosU",
  "key6": "55kf7ymAT5SLqPg72F4bm8aEvBKoWUFZ9L48Qf4qZcW8X8VMUurGPp731yQaDCCGUWxZ7PwxwdEnYvGW6ope9s5T",
  "key7": "3tjCWigNJLgLCVFBembrQRuu9o8a6viNf7jiEVVeXEWRTpub3tqj4FZCMRArFsLRkmdcMKAtXuLGjNhGSXQAqcEp",
  "key8": "2ZLY6s6WiJWjvU8xvcdzLq1RLpqnLi6hwdnArUwagPqDmAQibFdF6JF6C1VDugimw4eLeJQEfoZLQKJnT2GkYLaX",
  "key9": "64Hr5ZLkNfULazufWPDpR8UJKNpe895J1NKY5fhgz9H2ycxqwXKPYw3gAKvdj9iTFdAAtkqvz1sCdXtpKjcC8CGc",
  "key10": "4JGoSfphcRsQQmAAsErXTuiR2nN9HSavk4mYoEiCL4KdYE3KZEnL4afgEEtsh1ztBaR5fvV1ZjhGfzntCemeFMkF",
  "key11": "4DKni2kpoMQGwe5oCbDLvg9ohyegZPCdPjKaBmZawhorjRkBFvg1ktBT83vezNviFaxfBiRfvaf9zSSEACfS1B3j",
  "key12": "2FtmYwkcF3KqAi1SYUFvB9fvWz7WBmq5bjhqUn2xDoHkPGBwsj71cX9sUzYmr6EuabX3gunqQ2SsXQfgVQWK4Snf",
  "key13": "2vCbmmnGz6MEzAiXpYygsmwa9uF3Wdrc2SCibmuGTCtYTb4zYkdfkjw4F8bcHaKo2bdnE3iY3p57XCoLiruVvFwV",
  "key14": "4ShyXdJDDyM2Que1mE8pxmkGfV9FZ7eHE5rAcCvCzqeaBW7LP5jKSxvp3EybLw9qpRGpMKKb5y6nXYwrP1Vom7YU",
  "key15": "TmMc1VsStnnCCKq4pNSSvo6kmKrcW4Rmb3UQREeochjVtmDrk7XqxyGFh9z1Wmx27MtZKPJj3dsww49WpQUMit2",
  "key16": "5bTxBj3RAYfFxzWJrsFPyogeRMVzD5faCLMgYHq9Yo3ZNjVjByEuPPhRiiXmqXNJfTiubUCY7e3kqvkHvx6ZPwrd",
  "key17": "5GfF3vyLgqYDWmUxd6DAPFE2QvNdi2Zpw2nZGzmCHJkFzoY3ioKe6cTcsqwV13qsFQNKkXcgm1eAY9rJhgfwLbQ8",
  "key18": "62CjxeUFd5mpnMSxvRPu6PkQwax5HdnrsevTEatVDUdEDqiU6Acwaib8EdHmkjtn8PnCkWbSsd3GcK8ShrJ2cb4j",
  "key19": "3NHyDFhSfZBWuKkwiBHu3adk5qTr1HmhFUyDanvK3tNjb3vWKDAJRimQrXjqkNHL1i1gAUmi6uKJjGwvdTaHx549",
  "key20": "V68sZNhHmA22YXeXFfZ5jAQLjDcGniD582FbN5T2oYfRmJbKDYB1b82CECeSDeeKzqqyJZeWsys4R5dAyzywE1f",
  "key21": "2CZBBxUFNZhnK18UU85T2xt3mRRChQhwQ5yrZdAALhDRmSAznba8r5kc9ei5NtVinAeR8SkSJtW59C1aeTjgLMMW",
  "key22": "4ZLBM3VHuF8HmkSF1AcE4Cw1Du7Ez4TqfMfdmVQiAtab5KjcFAzcRkeRodnfd4RKv2w7YD7uY7DzjcvnmEmPzvQM",
  "key23": "5mshkswVuaDrbBeUoLdpxGNd79k6g4LZRV9u2v2vr7ee7HUqCCREe8oSV8dWnDhZ7pfLVkUki9ZuTPHKvUVq5wwL",
  "key24": "43jMZTN17yRLXCZvgxQ1sGM7VA1phnTvAwTuNAo3hyodKVGcunADN4VLquuoCyusNH415DB6pBQPTXWpUyScRckA",
  "key25": "tHTj9suWyuQXpQkP2Vdb5JCabbmgP28E4HvRZ2TA4RMwHz4kDpWbCNY9nsaWGkXTt6NbqDbmVAP5mtYRjZgnVQt",
  "key26": "YxPmsyQMF44VaqojwHZBEShJWi58S5wE2eWk4tbGsk8JEjCvL5Z52sCFn82oE9ZFbTxtKmcjUBKwbCBfU1kN78q",
  "key27": "55BUbJGnHMrB97yzVPuMLjTGgmNE8yRjSTNeWmcZNJCwKLUHHmNLehfghDt1qNGZBbA296DNZakKyZ89FfVMnNiF",
  "key28": "Uu8qnkg28mc117o4sm4bbypbhPgvmkAaUXfmYXfQQBTVKuLoBiksDXqAeP4mYz9CeRTGFeBsPwS63ykP1suzSNM",
  "key29": "218fGqKPqRHmWiubPZN8fjtKKFs8ZLmnFq3xLifSqCpz91xJAKx6ERZQWd48Lea7EJksCaNEKrjec96D3VMfbDH6",
  "key30": "4d4G8Hi8YhaUpTgxKDFfzdnqyJhGjxL7Cj5tBffeHRXVsQrUZFSdjvykRZrHYdfVN331kMBPxbsUF97VbntnrHCv",
  "key31": "4vyLhM3S59VKUVU1wwPEVX4sexwcWRXHCnG9rsDYoWCJDscibStT6MGYVMiWfpxddLJZKPdQHXXtxa7DXtBVKdt6",
  "key32": "5spMfgvRL6GbLJ6rabJKZwXHw7KX2bVLdqVh9uakW9nKMdJZU4YzrScT5uTTWDLP167kwCMQq8gXNWHc2iBqQ9U4",
  "key33": "2jwjCLrwa1X4ac1dFajRZE2cvVs6YBnTqmuZ5BdAsJoCNueZmEFDrT8g712M18C7gqwWnBFiGBt8a78K2osDCkkc",
  "key34": "2CCedLx1MYH7yJuaeBQgjAsbWfmAsqZSH8XtYqweWFUozhyopJz9XsACKanJEv3Af79Wbg1LSfSnCuVMytbeFtUX"
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
