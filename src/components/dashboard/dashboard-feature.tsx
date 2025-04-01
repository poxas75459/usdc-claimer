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
    "5sBxnftHcvfNsp5Um7Aq719ZLBV6qnHDYjyEUqcPgUspgWpFm2R9LVYJHFo1ZUgmtrhogrjdP7wJWU5WSHRkArw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aia5UhdrPgRq1PPK84KpAAe8oZGTRzZbX5NMhFkwGrrQXGK3bZNtKGy8YioD8ZF7xohmkYZuZ5WspUCf9XPgmWW",
  "key1": "m5Zh2Mpo3gvjtR6pTK2Fb9uPTwJDC8WpuNHWX73mXaUmw5HPcYiEhfRbjPBKzR38BhR5tC2mGouaTWV2dQQFQMp",
  "key2": "5LZP6xkxEw9QrDTt8TUJoHhaNYVbhybpZRojxwgUmjNRP5MaGggYTqxg2c3BQxDHWyBwctdiM5CBxEK8xz6bzC6S",
  "key3": "3ijM1NAeWpCyJ2xKJdRKryjRkX2kWbm7rSsJVJH9Q3A9F26hJNyGFxt16Vwfq4JsST38zX56eKjDsqiZeNvW8ppy",
  "key4": "5ycC4Z73JwUqxV4bM7xMG8U2zNEN778YpCUeS7nZ4UXwZttgJJ9QVYfkXoWN8y5dx4T5ciEtrYQ2uxLy5PD6Asop",
  "key5": "2iyDwoPtZjCFVJJe2cYfn3cLThe1CSRywZM1LRG1u9kH4Nnh4AU7vaGrjX2QeSEcqQ4JKVyEencZTaeWgKGMiw7E",
  "key6": "2g49qVCSqebt7h5y6hFzFoRuX1gvcW3xbuiJBcgTkX2UzN8WjEcWsVdc9phUL8GWP9S4kcXPBrtNUpT6VUvWQgKo",
  "key7": "3yhmgsWXSbcUhmLuN1uZqBKoXkiWuxgB2M32DCtNz3pXQ5TmttcUpGRmd4toa6emRDgPnyztbdRJWwQmacLJ7BAE",
  "key8": "pi4ea9jCtqSSDfzTKpbRMxruQsF82nKhHY83RDTq7YvdV6VBQK4K8TjvrUuQRzMWGjuWmBSPnw5HtY39JQoqYKN",
  "key9": "5Yrpkdup6LGCB9QLPa5HZDQRVGTVVntG8yLAwuS7M6rKmig9KpAV8DuU4PU1ziDVyJ2bwrVdGHveSLCJawgWMJGN",
  "key10": "2xEX1v6kniPTYs99pbv9JwFWNH57zZHje1CBens8idpKKcm8YCwRzcmDB34RsxFQwHwdETuJ4feB2h6iEZWGnMJa",
  "key11": "34Xot6jLDrJtawFai7y98Ce2NLs6MrzxR3Vp9EtpXA1tj6TGA5KjBJtGJirKHwgvjHs6TGnJaikw8tGgGpRKtASa",
  "key12": "5MxdSRBBBNuGp5B9BWPYYW6JFBAC9mv7d9Y44JffVbpT3uWnzJJRBVVV43Zkeo4MR76uWV7B1SPZtkW226y5opQL",
  "key13": "3BhPsPN9E5QkMbySPrNqkRz6A5KqjRo5Ku1Gifjrpct3ZmL4KntE8z8LwL9qKWZUU8XAYy5hSrzNUsqcoR2S1Nu5",
  "key14": "5koj1cXgt5tBxLHZMmkr4t122eQiUrWS3qqd98Xzk7zefjyqgSojkwuuekm9KdKu24b6oUEFGuEp6PqgjRVno1b6",
  "key15": "48RxBLXE838mKcqEyu32YrYWBsYUr2T341Kw8CuCEuLXx964UpXXLm69FRVrQDe8ce9jkwsSD77tdiUgW2DWkToi",
  "key16": "5HunRNM8WDXSiJBKEfFRsxo7beof1ZhygRjD5VS9nK8paKy38Ak4ymPggLUhxMhASfQb3Pvxv57M2SdG7rfWj9H8",
  "key17": "HmXLhnJJxMSuYXhU6bxZrs1fxTEX6ABrtK5tGET9EEn1nvoVfEH55ZGsntsnSAtiHMENikMj2g4Y7ic47YhF53L",
  "key18": "3ydN6LqWpX6egWFyoYPurUa85J14daLhfHzodqz3JFRNNyoh1mZGNJcXiLmiCeeXWUd7hd11nEmhjdd5K7zsBLAQ",
  "key19": "3HWab5gFUE3Z7s8CfPRJ7znP8yLeBv1c3CA9B7sxJjx6SnN8xe47W1oyLCrbW8jgjPxGNMme2XxqsAZUhEueT7f9",
  "key20": "3qWES5CqSP4w5KTR45W7PMPMiT1ZR13HXQe958ZUuHRpz97HiUz3vwbJF3q3J2sD2BYjiNLFgfGy9wpKURpCUw4S",
  "key21": "2sGou5fZDqVb9oPYxusE8T5CZoKtsyqEeG3Pbw4tA97g6ynfYWJJMdiRPDbozG9nJ1Vos53BNAdhKN9LnJWcDjjd",
  "key22": "22d96GxMEqM4zm1KWab4ZVQhrMYR6CxnYHNPRy9dM1DZJ3hn6PjDSSbWPz2Kihi8hvr4pPJ6zQ6o8a4MmSEMbkvc",
  "key23": "4yc5WKM9jNDLwwi2PCKyy7hAdBFiF9Jbff2cNiiPVQkVq4kitXLc2Fz4KKiySEDK3etQv8opdk5rx5ZKabEBpYDA",
  "key24": "357Guvcbn8Nk6c1XfxDoZZiUe3mf7TXYyKDAHXjeVbGaHUFcaYLj8eqQxf7QcimCFzzzV13avi6kzdK19ZFZyBEa",
  "key25": "3BHu7UKoMTbwioDYNQ5voXRRfX2TaZC5AmGXxEJFbXXiaGMr3o4qCD8GQVBrmUCDGTjTaYbivmaXvU4Y8EKBp5zB",
  "key26": "64VCXimdenmQXRRrhCBxKXCtHBK6gTbMUQgkeQNnr4WKdo4gJgC1FR4LVm7hf2CmEiQGRDsU7tjbT1deDEeaSaYq",
  "key27": "XoR6zbjrAMWMuzZohDbXS34L3GbRury8xomJMTweyL7n8aRAx4DEd6GqsHuGwLnL3vMHEuXBt8hkTf22vmbzHa2",
  "key28": "2osTEnRqXGj3cpjKyx87ZhWAWyUQCdxMVw84mv14ogjUdTHm3e5h8aGSffPuSSGQnVLQdH3BngPpJm288vmjtnPy",
  "key29": "2SqWRoHuuRqSsmgiLbiyfuqmR4Cz3Ax2E9zaKsC4LMoGDbzHUQMe2HKbEgtzxQG9pKP7qDG91zJ1gSYLUTMcyRaN",
  "key30": "5VXNdG76L9SeJdZp6oDAH46FkiqLKPXQBPH6taiGHMXPY85YY1T9HwYovvZK62Aj5dYsS4mFV71heP9DVo9WL8cS",
  "key31": "3BeSXZsonGijc42bimVq3UnQq8bvJLj4nFUMAYSNHEhcm6DQqVY8zVFVE3mmNrsFRLjaka97qptfVJ8Z2SMTLcxZ",
  "key32": "5iqgjyHTeMbei59MsDvvxYKxxfUcAFAGjmoQYezyDMuQgnBq9KTZQyFvpiBHsfiSPzdhv218yhmA9ikqqhkhgFQY",
  "key33": "3XUH3wRz8xzTVgXB4ju2j8J89ub3xfMzkxwC1jYfGm93Jv531dMyazznzRVRfDmTAss9TzyyopWbp131HabDLvTV"
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
