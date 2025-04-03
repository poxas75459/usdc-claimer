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
    "41onLGQgGHDnaPd9iobiZqciRfUemEN621Xd7v1KTPxwTxqpaicQtHhs2riyHCPeDeZ8BeFJ9wEzxMu7Y4T7TNNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6FmT3oYW7QhBvstF7ZBxt1Fek9Gd1QgvSBG4z5dJWAsVvtzuraetcbUj5RqhPNgNj18FvXXmHukAdTtJ8qeYVg",
  "key1": "26R8wZN84qw1gBw1dZ2fBEy8hNmnJu8EKZYLYetTZDcqNLbChwVZSe112WpqMYBBKstAwN7rXy8pXpP9cQAie4FU",
  "key2": "3n7t6RCXwCTiZwHTmJT36XQwWScLiXdyRFpnhM6RwnAG3UpTcBLJbFy95UjMS4R5uuG5vnGF4YYn7qxCSCobP9mQ",
  "key3": "5mupzzGkMfqFAon5y1m2TiRjddXEZdnqr15PbpqY77yZfPqvt4TBRqMCJqgiPHPFPvtUbrbd1M7XghXJ3XEpw44Q",
  "key4": "Rh7jf8cjgQfeQqVkgVZkyALsNwCdWgmSAaFSXwthkD1NN4783jmBk8K1GYH7yokZstpoGr7mHoSUstT2CaGzCFL",
  "key5": "JQGr88xkkU2v9KrSpRJDedDFYVe2kcm7w9bQxGNYvv17pWHM8PpA8iMvZzwXyfR4jk8PoweefSpT1Qo7cwNJ1fh",
  "key6": "5XVDweXQNGbuiuABxG7BSPyJoe8nudTJYnNBi91GAZ3Ys42qDjWJpxNevnQD9rCq84yBABieRra8zJ6FPkgJ1Pb4",
  "key7": "5MiB15LEyjT854sdXKjdGh4cFJ3mTarcKj3HjTwqCJoGLGPscUTBqzPtP6h9xQ8DrBrnHMHw6WKi2MAo3ocsT1Ts",
  "key8": "3qz8VsoamoHqLxmy7Db9P7YRunUsqR28NGojst22BeJi22bH7CPsFDz9xPCtvY92bZB4wb8LY9RK5TiSs3ex1VvU",
  "key9": "3tpJmLwWEcFR6aPuR2FsBbqmSioacxxdctD3LrQ7BErS62cejx831Ab6gx5bjSEMTVvAjqcuduvCBtH5dePotWsb",
  "key10": "AQvHGWqLjUwpoqYJTfCSDmAthX7FCXksfZpCPZ7Jbs488SQDZxQrg2DTRxjYRsKbAdZ3kNdBH8kLMU9GGGQgPH3",
  "key11": "kTNj6EQ1sMExm3PNdV6g7A12yUeabP6RZtSQrMYNqQoWoifL92m24WP8ae523ft74CXrfNwTf3jWsXFEAoicT7R",
  "key12": "4YXSDvM4ymeyUdtGM2KMiML2DtvfKhMVyG5erFKG6w94hpV48naHNWkiwseYHeghPitjv5NSxBbukddMFLT2i993",
  "key13": "3xUct2SD1VwHPTsCnhyddcepDcDaH3X3Vb6eNp47GLbYnUwTCK66w6Cdh1RZdy9GLrYzVRHcmqKN3aJ7ouksCQBk",
  "key14": "2iHWnEbwTe4yj5UpGNVMHkLkEkKwcmyGYqAgkBAfV5xbKjk7WtM4aiJpqJzvJsghMCN1sapNB36E1ReY7YfbDwfM",
  "key15": "mLPAgGa87CYC6VBu16sG336JiCTb3QsUBGnCG8hUnyRYR21xkgdZJM4TtNMsBLRvtPRsghW7qnFrehg2ivCRJqs",
  "key16": "5iEaqzc1jjLJRnKuHt1PcgNrrZWWdjRzW4vc7xjeyFQZUusSaqbLvSD9BN29pk6fJnh4PwQV4WsL1uFv5k3ib3HF",
  "key17": "2TWM35nC869eiW2fasGck7kpbSeFej9g8FrK1FcU2mi38bLzxCjpL6QWWG811KnFMbG85zqHpnhrbUxPYJ3RZfMk",
  "key18": "URgYzq3HX7a1KveNQogCBrJNDxNLfYBuZBQHD27kattdutU4Cjq2hBUgrGLvuJ44qshx9Qv6nZpmLroyCX3c3u3",
  "key19": "2EcaQ71aFSrUt5aGTv1BSatiQFggNig2VU4EbwX21ucqBNixF4C1ApnjiggkuDdGrpbdkiaJHDK8uLe9jks4Si5x",
  "key20": "479uGAgxLzxmugjUbnpHyBHvSmYJNwbUCM5JRF6o3WfqBNigu5GiFtvPEUEZCSQVZNBC6o831gL3U3CFc6oEFER5",
  "key21": "4JJ3VgMFqGqJ4DoUUBJR7uHuVL2xEPwKGtdUAAZAfiVfoHEUtVfpkU8ugxgPiNbvx1M6XCnGxyY3RrcD7E18M8zX",
  "key22": "3ER4V6ShiHdhXVzRyHPaqfEXPrubq86UzDiUnEmFKq5hoSYT2S6R9eWAS7Nbvr4JktLRJRt3D2s25PUbuphWymKU",
  "key23": "31aq1qktw4dSXiyPejSVhMHTDHUFzt2k2BbMYMHMjE3aZazMpX32khJtqFX8EMvgskMvPpNKv4spSXsYwW7nd4k5",
  "key24": "4YUtpLZipzURdSzpob6R5LkTemtxSWGihrfmWA3maZQe7ERcxZZtchNb4hG2ypkqyDaXVVWAxQ9JwKS5iWrg2ZkU",
  "key25": "5mtpfTKG1AdmBssbQvS8b5Q3JLHFiXCEZ7CrusLpELQhk6SLsxrs64K7SrLAUeM6QJ4BdDnBw2wydAgrGYVUDQLC",
  "key26": "2eDEaKPrcQGrVbbWouzBXv1KUQELrxEYmyVMFBV6zfBfvidJnLj6rLoMj6S3o8BvHCLYkQYaP5DpGn9Waqb4SjcD",
  "key27": "UCBS4cvhycNhCkTNsmM4EKiWpANRuRmPCCcH2UjrZZATDjqTGZobntQ7gaRfFRer5bbx9Mn5TGTH4ci45HyjgCc",
  "key28": "28nDw8B7qhfBks1sY8mWqqKNBed8PUEZ16cabAXo7JknmKbrLfNXXX7w3gPEyAomTy4m9pJpYcZKB5YgjY7t2Upw",
  "key29": "5fpRebEXxrTs3rkRrWYkxDiUQRTVw2XP8Rxj65qarNmJwSUvoxwqEopcekrCXoQ3wCt29oKRKS45eTFdXFKga6F1",
  "key30": "5qAXetLqpVVdVGyE94X8adon1npc1XJr7YGMhbDpBMFjrdXVZkcHPCjY7yidSyXaWWchQXsQ2boCJBZVNVrm9Xj2",
  "key31": "53T7AtFSsd6eKXUmieVhBQAEEyJZg4WbwWbu5qMWcEiRt4rxC2TRSoe1EB4XdcJp5bkXdWBXEnnjKWgh587XXLLX",
  "key32": "3FwPenH3nh7qy1Tp6jMGACCjtqUgejSwrb2nvpWSK5hwnVjQreL1yQEshnZcjfk3NSFcTB5AH2xsKW3jhodJEXsj",
  "key33": "4WbNKYzctuLwPeDRsRnUbvTrVMSsAPJthhZeruM3uAwD5rB48aFnYGogdoWHf13RfjTEdG4hZXuE4QCGyriyaiB4",
  "key34": "2nhi5GKbrCN7MQRVFBejaARU5ZEceriUUcxRWWcN2idqrJKUXjDyoxZYkYJtauC7kpyVn1mAY17LQ1LutzXZ6ujV",
  "key35": "4UVUozKzLHdYuCGZtTYEH2pzMhgwibYiPAaGGKF6eDwfSAjnKsxfc5CY5Te11uzz2nc1psPDQyswejgBqSaQn8k1",
  "key36": "5fFcYKxQK534R33vHf1VPUh8pFUFMkQLMiA53Mv3zFx2mSog2rhQC2AiwJ6qhNTQfQCCDAqvDUCVJJNcS8KY782X",
  "key37": "4RPkPh4r85VNiVZW2tmfd1zxWTLYFUYVYtysCgLqTWbTPXr7qhWCNKB2hXuXMZc5vCqz2Yx2E8mJa8VkoQ8hJYJm",
  "key38": "2i9kmu4ex7WDcshGUSUrXsCbtKiV1HT9LW4vbtSoYByvLuHEGanUnbX1fT8HVGsQ2c6hAHip3EmiKxEktew3knbm",
  "key39": "3NtT5wTR7nms5Qsab6dp9MDrTYMjtJLThPCV11jMHDo7kiwY6p5EH5ahMMkyGudeVhC1uiYyTPShuJw4JBNh3z1A",
  "key40": "mS1EwtoRKJVGLYC939ABWZy5N3BNJCz8enS4Wx6i1eooGtWnj3uNYQQXrddzj2UDRSXFy4uHj2fCXqh8tk9Qfwd",
  "key41": "3uMfo1FMQwDwJ4uLBoF3tez926ceiWZRhhbVQZwRNnHLxFAQ6RjY6RCTfjFW3xVuv2j8SSm5sPhkrMBwq6J196Bh",
  "key42": "5bjV5HQ8BLSaiyedJ1rsznfts2DvYt4zqqtmvd86zvbs9Y4911xqL84tNf2G3d5GTqKrfndDkfKCxATmUAexNBeo",
  "key43": "2o4j6b6b31mG1nJ5BnYfKX27Qw5NszQzJt7Hg4bXoXPSF5hwTpGv9FDmVfcJ3qK2BEKA3D9NqLdk4hdMzZUYieKY"
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
