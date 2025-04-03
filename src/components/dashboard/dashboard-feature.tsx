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
    "3ruiuuaQMfAyBEb61JrvwbGfSYaWDwqdYJ9SqHoom8DwSvfsDwXY2WsQUhBzYZXkDitEmVzXQXYS9HQBufe3bQWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XJ2vdx5zq2pZgDmk6zW1ABUfSD2fYLqaGMoLWSRfTTkhV1iAc4gjDWfrCNazkJ1acgjnF9k4PYmdn1akbcAPY5Z",
  "key1": "5ptQXvDJgFB5BVpxniEttqVCB5z8VkrjqA7jJQkL6i25yFDoeKuWenMSzz6z7aGfXFPWiVxTfaPjpG6ULFAJe6ks",
  "key2": "5m18h2n6BbRZj9PpJ6dC4ogWPMfsatvUTyXnnpCSdsqJQwN4JyHvBWK26g3NnoX6yePQ8xSzg5RDwA76Mski8wr3",
  "key3": "41fkyaoirXgJhGgp6YT5d66gGizdYSNVqnAJqF8QUAukbcUmZq4YNPXmE5UwbcRnTXpL3HBRKBKjck49Zb3fxft2",
  "key4": "5Npe8yHLp5mhYd3Gq6TUe3gnVGpSijezhXCaz2fsUnQGw95zhSbmNB6XW8VrPbEcJ1zqCgXojXyHy4ZxFb1P7pbo",
  "key5": "7ennjE1pRsHqohNkxsH4JzAfFTndzBXh6L8XsLz9w8joR8NPeQCTUR9D52KZ63mBn9GLZmc8RKQVDfooB5mcvve",
  "key6": "VzHBmZng2udTRfg3kda1h41NRGWeosk2KzH8kNfocqTnaCRbk9vgerLNyqQpLW9sS4iLVwW4DivGCB8UWKm9k1Q",
  "key7": "3wZ81cGkbkUvMJieJ1KUYqq4QWf57Mw3JG1vkDWedFP1cFb2yr2Mg2KQnwtYSHnJxxCq3wQDKUsXLCV394MeHuq2",
  "key8": "2xwSCCN4QyxyVHSUhWELpTbBSNgFGT5FaRqSvWS71bnJh49gmKMqc2YcAHSGwBh2XSxmspX2pwqGYntwPnParAws",
  "key9": "2FgBJgBXrRWCP3qVxX2UvDZQrooF6vKr371kBir8ypLeoygV2CZpXXie9Hf74wk7JyDnhPUdeWQij6g1BMRgFRWT",
  "key10": "3W5ozwQEdippxQcxsyJsF7knjjg16Q6emHFzwwTjiWjft8AQ7xL93fQ6ZN1wt4iJRRjdsr2B4uCKvCBgJg8kg75L",
  "key11": "2gqq6XvFE11PvDm6P4hpH1BMM4pMAkY2ZXeVSymDxfnugJpDiximk6UA3GHXhbYW7Ce8drSk6AFJm6eWXYHd4HtS",
  "key12": "28Bxw4skLWeBZLrJ2ThzmzkRqrjTZEQem2NkBtweBypZmhfRJNCzNcVokZSJpLL8vjBRsHvssMTmhdEv6nqECxPf",
  "key13": "nYiLGy1hLQvoCLX2TQ5JV61yHbPsRPkCUviaMuERmeAkohaxLwdRadRJrmymofEcuyNCBRH75iGVaXcuwqagyqX",
  "key14": "4kmGZnEEFyrrckG33wFjoDnNhb5ZJBr2b3ySyHJ5tV2HE9wPdiERbx77r6dXYMjyUvsLBZ3pMWaBqVP5sAsDqunQ",
  "key15": "4FNTV7HuDy52dtdo5MupyWLfnMimXSqtM3AHek1ozQoPx5z5iQqzhVwoJNd3EebsNC9Apk8VskYYqmGtUwMUc6dD",
  "key16": "3hpLxq7x2KeuZzZrzNmHjiUYVcUiWP3qHrwRFuFF7LNg613jVPAcmt4qSajX6RLtyoytvJPmS6MV2C2z6osgJ6hb",
  "key17": "43Bvheu4C2t5ayBsw4nMxZKCG35bJgF56Mj99whk87XpbmtsXXMGtEEoy7yV58F3khytC958xLRfQ2oc5b7YEZ1m",
  "key18": "3dMxksuP1yZdoQyk8vgV4gaGjmZjX4LVuFb9ShhfLoBa9mj9zPGaaJSPRWjPW8W5xfnr5Mv7j8ToC4WsfmYgg2Ey",
  "key19": "FXQhsEuMsBabKjmT7knXyxVEa2FJ9TMcz6VrUxnBRMu66mjQkZstWJVvu4oxR7hkkvh5kUGBnTa6BYDg8svGzy1",
  "key20": "5MXenVHcGpG2RmS3vMp61YGqsrZJsxpW4EYuh9quudBE6mJ16c8S7DkUdMLXTqsM65gTH6YwL8p3KqZW17wBzDXp",
  "key21": "vkLNVh9Y9ANS7TUcE1h3KpRM7YW1YxFDG9KaVZnjZ2zeCW3kwWNzDbBFTzNVqeXTgr67ecRAEi6KXvvfZYb9HZM",
  "key22": "ZEKQycvNKSB8ovUWFbrtHpS4MYW63HBAviKRmrjT7TdcirgEH9CwLjxxPt6h1v9chxbxNppEadM37ocZoiHRNWV",
  "key23": "4NP5usvmh6aU9AMWeTk5iSW4M87NCQfEZH5bgxDfTveFTNbtr5aaRJ5GSbNPAtekU3QndoXroYj7rSAZKWdyrGYF",
  "key24": "2JU2mTy8grA1CzmsBc2ZHcdd1onRKxc47JKjCdSfZoU1wjV3awXxREj2PKs4VhoJvT9oBojrJzEoKGuVad67Brzg",
  "key25": "jbcKyw3zgLz11K9q8LPSqN2q7AgS9RKvJxcBRT3Exd51Tp6VA8bQxRcei7RviD2WEk6HnNnjmesGYnaQSENdAnr",
  "key26": "3UYrAvBC2FmDTgJ3D8Cy3a7ovN3DiB8KkyHHoZsJTTev6ZobxNCDtiADAoPJummSnsHLrdyqU6M3ZibgCc27uVv8",
  "key27": "2dazEhfDTP4sxrUnQDtWxdsCtRRVdfbeKacWC3npgqh8CDYEXGKoWhUGZkQRADiodvzNnhEHjB8fmjW8ySR1CNGQ",
  "key28": "3WwiRn3gbifpY7rwGhu84EUMHcVjRU4L98sbU2KW1VkkYT7Jg9szvRAbYwBSpM5TgyvaR9Zhrh77uEMfsXwFhEEu",
  "key29": "2vz22EvfmFEHoi6hLNALz4Vv6ZoszjG7LJdov7wBt1h9BAbwcJrF4WMhLbM4hxqmNjov1wQMTqvTxyCehJuo913Q",
  "key30": "ZSVQFCVK9DCgERa9nEAfmAR147NNfFUc6YiwyLx3wq4L6CdSegi9Kqd1U8cZY3gnQth7vnQkJK3wzt4NqY53QR7",
  "key31": "4otkFga98QqzhSRx3FamZoKkjcawNqZYP6jeN3sqAY6nKKWf2GtbXirvoNEkwhPJG5tToMS4YETRCer52rpuwWWF",
  "key32": "56exnvLDsXCnKbY9WAdZKKJMFXRavu8YEWRPpASaritTX7i4Z7m735JLnuJ3sReavt5XkUp939r4hNoGNKvDUdh",
  "key33": "3fd2As5pFrJR6gsG2VTN4Hdv4sMjJwUuHrrL8Uu9zebVwvyTqkuz6vaLpUFFC7ANGtjPcn9FBCrr12yUtoY6ZNpd",
  "key34": "bviDeMT7PjVpy4xKVoXZ2X9hLxKWm9S3PGX1XVAV1eHfTvrTgJzCso9MkX3tGet7m2W1BLkdD3ZNxP6VHhr3p5g",
  "key35": "2Q3CaVJYzpjQc9E4kJc9Yp32ruvRSyNJb86gzkenkcPn68GC5t4ZqdQNyoUXdTSWD3rRcPviZEsVMQHKWWmX8VX9",
  "key36": "4ifgHfSWysps1GyG8HhyUGiVD5Q44N8HirKrtkGpeRFaXXo1Kni32RdwPaUQQmDwkb5tMvVf8qyFEMSZjAiJLn3m",
  "key37": "4BGNeeLAr91SWRpvyYppYtsPHZm6VAabv5jvaurvp3KXm37LzRsKLncPDwyGSYuvWV43i1Cn9PoTi97aXWS6YifS",
  "key38": "4y5cZBEZAzjKMko8dY4btujfhELsmedpyycjQtwzEqpVzVd6SzkJqZrSFJaduMCW53DxB4aqmYu5xcvJDNpeAoGq",
  "key39": "2kfNbvQ3aWq4SSGL253JkjyKqai6VdHxXViC4AEhZejjfqJ33DJKMqgvXnAkERL3mC2Tmg3jjwKmNk6ott7iv6B3"
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
