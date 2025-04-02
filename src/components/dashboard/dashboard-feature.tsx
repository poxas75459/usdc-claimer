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
    "2N1Wd55bj35xdWd9g2dPujwKRBLn51e99EJEJzRCDwKUUQ7EJVFx6q4Nj9uvDVJHs8dwtURCgym5JkFA2oFXEYv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHWhBzWfwYdEu9y21xjBynyjinv2meDBemEaCuGpNtk6UtawKJgu3oeYLwnWFv7UXDWvpRK4rXuudekLBFGES6h",
  "key1": "5bsfmcM8qGUELDqaT3GxwnMnVhu2kHjbFqzjWUJgmUBsL2P9asCsuxThdsvcpuPJmTpK4ebqyKhp5fAk33wk5pa3",
  "key2": "5iDLumFxAkuaLkXSZqbzVcLudA3Yy82WnyMK6pJhs7CdfgMMRbjJS5W3GaH5jHdxaE8JkXQN42M22rHCG2RwoExG",
  "key3": "3vvgxbd1KtSVbYF9kUk12o22eHSLX4ZieBCfYBTqmSER1N7kTuYyopv7k3zsYnSMdaZWm6uSq8FJQPRsSeSXSdxJ",
  "key4": "egLxwou1UPbkC111GswuXPWsetXBMmnRAeFR8WQfcZhmBk3XGVRcnZBzAXhaiMj3pBLDy8X1Sn2QiSDX3r6aM42",
  "key5": "43gHoyCE2R8GKnxScRrmTq3bSoQbD4cfPr9jo8mAaPeMkzLjBSfcG7HoWAr6EdXvLkGBcX9RNvCzjTLLLoatvLp2",
  "key6": "5XfaLTNtpsGu2Lm3Vd5bFjUC9CXHdHoeBNafv6VhAeJScGhbQpiZRkk4tZnmZoDtcwzu12X3E7pmRL3Lhi6L7mf6",
  "key7": "32oVbLZzqLppv1AFSvJz23xtwFgSeLDB3PoS9mNHUscG8gfkft7JnW3LXvHigr5MR3uX4LVc2ikC7XimDvE5DQW1",
  "key8": "XLANDfPCYFYwMw8Stj1KnM23LSQkNA4AAxJWpeBKGNpDnK9GcXNHKxy2FP3GYJX7ytYKYH1WtVhq2C9iVjkS6ud",
  "key9": "5az8brjgU4P7MjYcVKjLNFTbvfjEvZMLf8NG9WCUXLAnuwU4n5PTmaJd7c1CqyFGH9vhG3eu2pS3M4aZV1XgyHpC",
  "key10": "42QdEL8GzHzw5cPh1gu1exmr2iEwVF92UUs9K7piqfYUuUDxm3SAdr3FMRAyEdT3UpLg8NjzoGvBQjK6gmjRaKbA",
  "key11": "3LBtB2FGWtJEDxq1aZ3xio8SNht2XNPhZAGsphRdKc7EsvEHHEC1kDwoohB6JpQVNTa7ZWj8icEt3UXRaHu4NxvW",
  "key12": "cgbvf4KUsJiiTpLF7X4mgpZeuNksGGssGnRX78R3VC7VbP5g3oBYyKwXteX94t74qGpqc6GPMmm3vJJBsRzsWAY",
  "key13": "56hka4sDoaUrLJjnVXCAb6aEzVYGn3DGsswMJBg7JhmpLkgpfp7KmPmtkyWgfiNkFdFWoGR47FU21xG2KgcS8YmZ",
  "key14": "k44vDPPWyx9XGqt8x7omgFnF9hcFTPSTQz5EMaDnv4vvo9RTyHXw3mVjKS143kTFh1rGkEasSqo7LQf1BFmPRMj",
  "key15": "29SPuv16qZo1DvAxbQStJDyPvprFN8qGKUZRaEfrq32eX5TShs8hhYPymkiXqYkhawNLpH3D1QLCuqnMuHCxyg9D",
  "key16": "4JM8QytozaUYt47B4qywF89MjpFu1yLtvu88AsjFNxn8v1i1FUgE17ZRt5j7NZCCSKxJdT2XZ4LbmscYPxsQ3QHj",
  "key17": "XwoNHh5953mcq5HVsFZrpGgvY8dcQ5ii4GWE8fdBiLvwpMRUztiq3ZXfVPYJegyv3ZxcrV6YBP4MKXgQiLqrteh",
  "key18": "4JvAq7rCt1ebe9eVpc7JbgxbhsfbH92D9va2yfPuKMjNrVcQUy4spXN7EMCquFpUj9N6bbcAgVRPPykuNgTV8Mnd",
  "key19": "4sdJ5G4Mwy7UgAcjVTLtNjrgH2rkMVW8YkqjtT2sroRUsrJk27CZBpWvW1F2epUu3aVW38eET8qhUdXFu1gyBdhp",
  "key20": "4nFv5DA2xDSR7ehjdDVjWpEYob5evdcqYVVgDF9Tp4GzU1BiZiTo5byF8ijraH8uLBZh4pJqbRppoF2YXNBZXEpN",
  "key21": "5WQM87MLXPF6TzTfkTHQnYN1x3oysD9SVecxgQVEUcrHatHmH5m7DMCnjnrvpgUp4sHr5sM9M8uqx6RNz7qn8JLb",
  "key22": "297tE1rPdwcFJRGJhcnXNbShk5nPdZ8kPpocygX8AucG23xya4ZXfSid1hxQ2mLakDAc753yWpcLEKu1zVFxyBQT",
  "key23": "2Zeqr77uLctDsE2WeMtDEWqrAVZNcKWXLT7WPf5qjtJyvdjSie7ATQGa3Z7yTMceThaSGwDvKeB8s5frkxLsVMr9",
  "key24": "45SZ4jnVTufPMKBitDMoUoDLNiHT85VKbXf6hR2zzEnUVNJZZw3A9SPEDj4KqjE5WjHZjkB1uBBF6pzgA75UMj93",
  "key25": "48hSLyjMS813n6fUT4j9tNaRpAWgWC6HgcPfunKwAougB9ZxswWCjhXo6yU2BcaQmTVWLZfzard9uyhT2CCWsGnr",
  "key26": "5JZke39pji2Vr2aLb4Sc1bRgGD1dX83NfzUVFNxtMCGhmxubFSpgq7ZBdyEoM7ERDBZWgkFgSyut8WQoL738afjp",
  "key27": "oX8thmKJUdkmXVPqqbCMtfPomxhbkdyL1FGcpbj44J2pud6uw1YYiDnb1hUU6MvpsRFAQEKcyaQbn9puPS6mBQU",
  "key28": "4zphwLRSMfXqBcmNL6AKH4X7tbpwieR6rhtDbgeCRvNqQm83oTCgQSAxWAvVWbJRkzL26ZSDC2NRKtxsCkFHG3gF",
  "key29": "Bwuv1FrkBhR9QSdHdayFaL2TroA4C8LQ238wVnERGDLuxBMaCfqkQkNX8YDDgqBSHeiAzZjWw5khKUZ8AB4tUjy",
  "key30": "4ndHt9zkpgbcQcsygRBtMVnzyfUgAKGq9TK5vj9RfGYCSSEukzKp6PYq42SghcNcHbihJ9cYzT4su5FpvwYYt2dn",
  "key31": "4zhNn6ncWH3qYCEtmWkJ1Nma78mDKXXzP44QJrnXsRGTxZvBXQbjCGBVv8w1cWazp2jzPEQPJcUZahggaXqzAGVU",
  "key32": "SPiDMJAfGPyx6Bydns4HGA9XFy47x9T7FDeQ1Jqd1LSwkzF37Nb56jenrhvawmeeY5D8bgEyrUPLeUe1CsAUJmU",
  "key33": "XtsDo7tY989BnPq8m2uscPdHqXVHtd1w8ZbAu49Ke1EL6Pxyjk8tX4MVUcaPYvp1PKdcvGCNwjSACVvsTkRaSqH",
  "key34": "4La5Dpqx2CaLfqfh2H2913TyXwM1bMYzT2mNMgSqb37kCFem78EiDy86jeRq3M2qCxP8Fc92VahxbR72h4ry9znn",
  "key35": "eKqho5R3uX6cE7tpUySQX3n8ezWdZdjC63e5Tgbhf6MBRnSSG2BRvkJT5deKemAfK9aAPCchnuvM6MrnPf2xNPs",
  "key36": "3PgVp7XLfhUwaW4dETCt2n7QbgZejqRcwMUM47TGuRt9FgCuyAvWtypYbRj3S314xbPGQePm6WFMBjARrD8Pqw41",
  "key37": "5BDdHeZpYUHWV4fYePSYoA1VkB3tHbefTPf2RzZAh4n6ukXKybaytrnDvpppcpzzbgprusaPRDZjiKoMyEyDT9Cn",
  "key38": "nAU2Z1ea5a3WRFPGBMCmwXaVMYr426aodwjUhTm6yzXMCYuLCvxSPizAdD11VCj79PFAmnNJut9U7FUK4SX68AL",
  "key39": "4vt9TcScC5aY5DrWuGqRmJJzNiBSRm1uMWMPAGzEP4P7Wr9FEcVshr8n1ih61WLh4YMyMXdN6V25Ua9EE7mrxsbt",
  "key40": "xWoq3tanx1LGXVFxcYjz7SxXgfcboW2FLVkwN5g3qjxMUzPNwzHo7Q6m23pWdLEYKMkXxbdd9zeSVa8zH7MjEiY",
  "key41": "3rw3ruJ1nEfgBT64S8haKnhztLwjBCWp21JFaNp3yJkEg5g81qMA6gqUn9pPCf2XjHgoiF1vsFU7p1hivxW8jMzf",
  "key42": "5uGpPnEXhefijcK9SMvhWnLWG9MVR18w8i47WdJy5WbtLXWXa4VbdMAGwgnMiMQMF5oUKEmvgrhxKWP6oyut4AW9",
  "key43": "4DnHxrPtAqjNfe2Mw1A37SWpdWM4VdihWi5AiiYBkzd9RCkqAoLdBebajKG5aP6bEtzkpDmjznqHX2TBEyXiHe3C",
  "key44": "ou62mGhA3g6dHNnTaWK6bUa6dLXYcs7wJd26esG456MsCqHNkZukAgTRJa6vRtpm54FD9r68oHWP8SLTWiCZW3t"
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
