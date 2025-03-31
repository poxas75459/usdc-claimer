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
    "4PjHT1wu6zQBnrkJAQr5sW8iMaeqGN5HwQX6vQvBW8zN89Nq8gZPewcrhTmVZ5F8QQtZA1hAotx5gkx1SW3ByBG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1p19hJ7ED5P1bL6rntMpCbB4wCr4dS8XyTqJhuvnJxANqhLYigducfCCrDizHQ4q4tc31yStbxQgf2kQH7b8Crs",
  "key1": "Tk527mMjrDMNF2k6NbDSAUoYhAzF7dtDyU6fkmKLkBJqvZMT9Zb98eaK6PSKN1qXY76LWSzLk4ohgGuhdHtYbzn",
  "key2": "2ckateHT4fmi5cfuZX3Ky9Ys4mTYF9C5uHoBRHSvb1oPHhYJK7n6qPrbpVBDVcPzD8FbD2ZPKHFfBDCHaYsMRmQ9",
  "key3": "5iqwJjBPjYpuwQe7Tu1B2oH3Vv6yt9mVL6D1a6jTLhbNENbusHHJ7G7AvdaxEWQeu6DiVhrsxgAS6mHj6r7vf2P3",
  "key4": "4tYQKnV5CSBcfck9FcaANervUEmYdS6MYcYuCwuiSBsQxW3vzEd9LrrPCLa5zZSuq7vQ8SDWh1K9TAGpVoRETHLE",
  "key5": "35Ks9dTnHu4UtoSG5h4Zw9D5fzu5JytjE2SBQRX6L2kA63ygA3wNPMuojP2nE6VhUpo69EBL6RrkcXfTzoyarRrm",
  "key6": "3xNX1C1RdhDsWyrvLu5cAieue1QncCqkQKP42vgR2A6qKYoazhEg6SVRW2Bw6wTVvymvqG3o69wa1K5ak8AQ2DBL",
  "key7": "2esCRuBL62fFUTvv8gkj6BwhdsmUhJNrB9F1rgYjywsRxgWW79gSJhXG8rJzwQ4TBqQEc1bpE8ivEEZMW23hdnbt",
  "key8": "3NW6xGMtybkNnym7nufZSmMBSyeL4jP69GLHBHJXnck7JTZpomiUafb7LdDAgEZMhVC1Z5jTp4yCnbMnL9ftMdDw",
  "key9": "48Jtnt6zu8G4Rztq5SURzAKBZQMZqREeJYxGQ6J9DfMYzTG5kxckicrScuQfJqudw6yPQ1FEaZ4Vof2mfBdixs2h",
  "key10": "3PNTJgmzv6SY5atqydWFMvfjAjAbqbVpvviNtfnmHJPMJ94fFWNVuEU38wxBHEBzY2iFsCi6yUvw5gynMntM38Wv",
  "key11": "CvNtmHkmC316csAD34cmK6JU5owS8srdGDyxyeEyDL1eRinpdzJXbwDeiJUTnf7hhsWD44gMN5Kd1SxTfcBbL1S",
  "key12": "2Rs8M7eMri32PeAgF7HAX895ReNj7TEQabtrRcuiGd1xdKcD6vjDiXqcL91rFAg8YYx5SEBbwkPApTWUaDYEeVHB",
  "key13": "5JZ8crE3s9p2YqwWcB2v3Xj6VsPjGbtavEVCrZBSsP7q4GXeVLQjmVVQeTNCTSZ1ZyZMhZ3uH8JeoQY7qEcGou8V",
  "key14": "3pLYPa1ipqp7tfXuRqJJcZKou3gWinLuPgrqNyqzGHcYBbk9JTYvnVPvWqgmTqpbkXNiCSwLLse68qxjGJ9omCdS",
  "key15": "63wkCxL5hdpPCDazwRF11wWvqVezEAvRkZncGxwELW7cariUompLTQkcATdvuTCRB6WcYiKrH6kjkAEQ19GT7fMM",
  "key16": "2maWBfJpFFZd7H59JznksD4Bjz8b7mSk2gsicaq2hL3Ah4ZYKf5SWW3NtSZaLKakx1aPaeQMXTA51JLL96fttkrR",
  "key17": "4cgNp8y3YhSMNbjfMvTQzEENVkajmafLA72VvDj9Sicq8cxGD7xmhCfsDqL7Djij3AxxvPPNnuZcLEMimFG7mTZr",
  "key18": "3WCgxQhGtf8L76Gr9zi6Ca2JYcDrRqY5Z4i73yWzmxtwvbV3xMUZ28sFdu9GdFty5YLxBcjPGgxqm3SPaRbKKWw4",
  "key19": "5uXajC9PJB6HjCrktHGhAVnrVhN9cL8LSRjLGDWXeEBGydVjPh3zpJ5xnZW1QAp81BuPX7gLQX7i8PzN5km3srcE",
  "key20": "2Txy5NVbsDVH8f6Ad7Av8XCp7bDQG8XfoSD2KLNXbt4JGqQ6qxBksanbboC2qw7nXohVNLXvRKAa3FY3hE1Jw8aE",
  "key21": "4MdvnmSm9Fef6TVHmdNUYHqnrdvQfFCZfg6G71Aq8uQu5ymXN6r51scB8e3VguQxShwRiyNmHBCvXdqv1sxD9mFC",
  "key22": "8CRPtFhuLZSKRA3UxV5Zkouw8DVKv1o5PGKagQ4P7SzamrBPTCbPCA9foD3CyGHhcnJd3NcPSEAZG2wBs5FsQ8t",
  "key23": "2GYtESJn5fMWYFBTEhC61AFsyZj3vKKBzAZcRe718PtRWe6UtKjKAmVxGEeqLQTnaCrwyWaumtyjeocVmUYior11",
  "key24": "2CDZBdSgkGa8rqc6wsi2Q6TAX2Stwr4kQdrgXJLR68LBSSk8AsdZmNPTtZwuzavrZj8tXUNxxmebVCxrjcsVraMK",
  "key25": "2Bjrp2PJsvLiuiRceGYRsx94phkFmEackieWUm67CE888fgf1Y8eSnsFp8rjaZjC7dopFeyN5Mn6FDQtyGrJigqp",
  "key26": "NVgH9PbseeLACPL3Rtk8ruovwoDwiR3gCDFCpMn9xVP1BnJjrR3rZ1tLqXwo26Brh4pJeq6BtA6WSaAGHq3sQR8",
  "key27": "3BsxYCyi6s5BTHvoecqdZBHRQmZvMJ7tQNF92gKQ96fErTFBtAjAgB1crH4k5zQTksBo96G5RLi3ZZVTpVjFyGnq",
  "key28": "DJARbJQqEjWRG4D1RZntxFq9bruPrPqRRknvEahPvdfV1f2FEZm6ZCwXTNoxho6sWEu3CPKvnMKW6MuHCYVprcN",
  "key29": "4JgXamJKDWggnsLvcXhQSh5h4xBSz58itA3MVZN2Z3huyXNMTsEzWCAuhsKRVH9iKbb76237AV1DpektMN2zYAXw",
  "key30": "2Y4ZMZWh7nTaaanqQNB6VsXPKCF56mTPy7qq8VE8WLArswvoaAtMRUjLP6Tum7YYT3QZZ1Rz49DTcz2eeu9XB1qy",
  "key31": "4fLigWwQhJJNSKim3739nfdMofDz75iyCKek9NSDzextN8mNDJ4cjaNcxXkgV6CvVBzWwEC4SC2WJfmm29Ds6dYJ",
  "key32": "3jUsJPNyF32ZZWT9AJPwubwBpPpNJbSza1HreiqPGvM6rvrmwj8gM62reWdRKcjaCnnUG4KqxDctV5UXTw4EV6mV",
  "key33": "4Kohm1JbQGG1aLXodn9yw5dQQmqYGVFWTRE34Xatt7Ug4LxqMJVdpQBGCqyv4zKqbZeHZfn8uJd3Uk4tS1i493Yv",
  "key34": "5kxeQS8YNdCydmvryCZran9HvkehUiRKVzYs81r4vwTzSNeTokQdTc1KUiQwvdX3G1qFLddd4GbXR48nytEW43ZW",
  "key35": "2842RAk3QUD2tNToTivfJJgr9r4vgw5ET1c6S6AXLNWXWLVj5nnkQRjZds7PGHdqAxQmJswHBBKKrpynL3AnV3ae",
  "key36": "2snLBd2BYtUVGyAPGMZngtVopWSHXuNvGNLXnS3BkggAkAa1gAoHkbaL1GzqCQbkw3u3nseYBHK28jnCnD9UgfNX",
  "key37": "4GsdPf3HiWrBrByPZzsYF5hrxnjmTFFoqdyecDvATPyNyd3aVq6m5PsRnfVD2GXpJNkJT6DoD9BV9VTrSVFnPuom",
  "key38": "3YQYEhmv1WLbjxZSxoYXnsxULdaLVZRDpavcuTzWyfXH1ecfzvDR5vQNPpCqaZmfwwbkhcSdE3GEHEYjSPDGFVtH",
  "key39": "2aARDHdndQ2cm9kz5p4u6mBkbXpPFAjbcWMEZccS9xhf8dmjAbZvzFdUV8zu8koqRJSkjHgnavDiDNRXv4HeVEEk",
  "key40": "2jjb2CU3sHtMJBRExh9NiKZdAGM3Usxr4JZaGVnjjzovKgkgzYC3DnxP3ibz54azDwkHSb8vdqchwgwYhVxry7UH",
  "key41": "4bTjwip424GUo7voA43jL4b86SWTfKJHdZ17z3ZJL78GLavYNwbb9PfDcpCZPuCZuFTenoESDyHc65gsnq9npc8M"
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
