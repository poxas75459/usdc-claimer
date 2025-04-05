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
    "4w5bu5hTbHK6gKzGEWm5sqK9VeKEQpCDGtU7oZXVtj6AsNpo17TuP75Riz5WHWbGyfQLyYcM1qYZc9esG6TVfcAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsAvoEeP1xyThiddva7qEKmd3x2uhdwiVBii4KULPP892aqA1vj6B1fRbj1DeZnaxmSWwPQCjV2wrTfQrkg28R",
  "key1": "5ZyJmwmT92NDbnQecRBRJZezDv4PiKrYrFxxwcWuBL5b8cwYor5i7abkmyktQetNT435bUgJrcfp6LsLQzgi5kWP",
  "key2": "3JtNJzcAV5wJq5YA4A2TKtW83vZPFU3wfdiFCsCMYJv1ShPLXpXW4nKZ5REjNVhYBPCrUiajTQebzoHX4mKmwhqX",
  "key3": "57Y5LNi2AxUMp3jJXfdecKwUXkCuCix99svuhJeXQWN1Q5LxtLjrnpk27sgV3iCyKQqGdte6dXoFJ8f3JR7wAWBo",
  "key4": "RTRjvqJJYMd9puBb9i8mTvYpGurfobewjpp2bHJSNcp566jkXeYYwUGicVFgNZcCK5AvZZjTPhinjpFyBRuxjCb",
  "key5": "M5mi2rkzN6FyKmGtpWSCBrVnPoZZFQTBzWXr7xb8XejTc85GQdiit3nJAx852XAEBmqJUcHSbdNKVKGecq2tQf5",
  "key6": "47UefqSExxSatgTewuzV4LxPiodTBLoS7hf8BPQjZYS5fMQwK392DAWwsYCdfqogDvHjcB9tEHoWnm1RqUUyNPHP",
  "key7": "4y7FHRe9N7MdZDggDrhjpkBSMa1vz4qqeraicrH49J4taWFW9D4GLuLUvnNa5ijnXZivFffL88CgpYZLXqpp8LUB",
  "key8": "pWKdqYBzVd9bFu5F9pwuekN7HhmMCJNJzWb8Gv4J51Z9EMJoFpDdLpDVe9KFnfJ8PU9UuiivPFbYKJa8Wb8GpgU",
  "key9": "2BFARRJ63pNkd8Znke2kyMxp4TN17uPiVq3K4iyoZGqWurWAY8ugXHGA8WpkZZjvgMPrGfXj84v97kzafrLYprdE",
  "key10": "bdEhwyBkmP5gnxd4wWyeKUD8uVrK462GV5RYtnQDVmJxoM2FFixKpV6EE139BThQSKonrwBXsXC7KsNgcpdARi1",
  "key11": "3mNHAuYQYbgsVim2eAdGyS3E37LTiV7iMA6unVJGxKtkTrvKg73igHU8X3tEgXu6zrkn8F3s6ZHbkZeGweEYdfHJ",
  "key12": "4z3CHn16Xv7ff2xV8i6WxsfmTK7ZSxQ49sDq4PrwKUeYZAvUV2ErmEDnWZXD6gs8y4zUd872m6yrekHfjqy8SCSf",
  "key13": "4uNjqDNhEP3PYnFbsHWB5NBcLByyAXa4fJZSzAfmpCtmKpMuWJtvijHiYR2zEpwNXGPcwnEbT2ztixiAuQgHi5Fs",
  "key14": "4dybpjJM55fkYuiuGC2mfjFRqMwdnsyjhWWJqX6Ka4wpLUjuoATh6T6sqapYbLXH4LN61ADDQvcZJrnvSzQE8tER",
  "key15": "d4fScXuRYn8yKttx9Ghe6hStL3B7F2VvwpDUvZ7tcEMwr9gq3w3LvfEyayA4vwmbQ1c21DFqrjGfuaQepmLscLZ",
  "key16": "3GQvkybTX6WzNDXDmVSk7Z2NSCbKagkg7Ym5KFrceqE7qNV9BEt4hmdwe5krK2zqyQeaeYqYWjLiXG98SofEt57X",
  "key17": "3ntGX7fiQw5Y575FB7ys4ZihUQ9nMtpEWzF3zhgwSwBvzK79DfTf2LEb6dxjknMbDFtUapLCBRDc7jW6F7GsCvpb",
  "key18": "3F2TRRGiaEr7T2pnF3N453VYNMFKsoDJbZoaZku47iRzV4ywppK5z8Ff7h3Ht5YnyUW5LmrX25jMQyzzpE1sgCCL",
  "key19": "49ijeK3f6QRiv4pYRAHErEqEbu431md2U96jmXXjs3Vagtqv89ES51HTUgwz8icrw5TGGxjLux5w31J4hQRSYTcV",
  "key20": "2VRzeGpccd5sZ3H43GuiJ456zJfy281gsz5W7Jc8ptZWpKHsrhKqNnTJgLKr8T31qrgX1WPtK23coAGNUKNwH4VW",
  "key21": "5isCuAfc8dVJufQGpTzMB3tCHBDUw1uMKZndFwAMKrM736reNWwPrj2uPNNRZiapn14famYD2LW9QgHzKC7pRpwp",
  "key22": "5BWPbVTSZkfWbB9KDEvytzbmAs4G3MnJcYQnic5dJ3J79r4Ce7FML134ZqfSv3tyQryxH7Aps53bdUm7jFfNYA5i",
  "key23": "xx8TTwwvB2S3gVQqwHi15NvP1ucZdzipsdboha7TwKRVtL5ygZWEncJBikEvusfuxGsNhLCfXERVHC4ncGajU1g",
  "key24": "35YoKQKBP7exceFfT2rgJ4A8shKxkzx9vTHs9ZLgoFxnuwxTSPYctDCdzG9LGJS9PyEt5xdD3mAmbRkYegL91mx7",
  "key25": "48UoVC2z33Y7Bkn8rkiTakcyDCfnDiX6NRJA1ycNL8qwFc6iPiNtNYJA6SsmsKNYQXy4d7YKJ8HQ32sdM6kFcTZp",
  "key26": "4xn8M1NPk8dsQZDTH8f3v41sGUhEcHQqcsNXAim5nt8nWvAnuxmHPeszZLSobBZ8bC8SFCMtU1kdDJ73AQqjGSuD",
  "key27": "5gyEpXhVMDufrkEQCH26ALnouat1aqaRfUkDd4FDm2jvzMzxaz6eRbmn4FP2ArH6wcsxg3pTbTiZfeAe7zazYkMK",
  "key28": "2PHEAKvdyrYCk3at3MrkEgP7s6iPT6FTmSxyzn8wZMkmf6HLUcezWUMbjiBpZX689Qzt3n7KRYBpavqo6GkSnj6Y",
  "key29": "3xTK8hfzcoKfhoKUEJEWarjkRkxifJtjvciXqXw6aBNFk6D4NPpefnB2oqupueE5xfV74Rxj1MEchd57v3w9GnUC"
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
