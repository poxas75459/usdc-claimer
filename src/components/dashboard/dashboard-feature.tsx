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
    "3afACGcYLvyLLDWto8FmrFWRz57XRdSzP3dq5FfVoMqyJVC8t86sDxZzCc9FWoWARbittDbLzpg7nuUR6yreAJoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJNzsiNqtX3bbQLJ8jLofLLnpttFpZt3gPsiSZCeAhRf6fLyrUVonmW1yd34G6L6LS5aYkkPoDiXSDFmspGdQP",
  "key1": "5VP5M4Yb2zMDEVA3vBJ8vbiX6bRFLVQUrm1GuKkJJqQuYij9sBbyB3t2T5BroZgv1y5FnNiGXuJ8aUqoKBuoWRM6",
  "key2": "G99m6oR2GZqP94WKjwZKgSQzYuzgfoMfZaMxLcXbaHWCqxf7YLmjpUQvJDEwcvwUyWHvXnb2voaWuCQctzA2rsm",
  "key3": "3NXRKZv9htbfYdaNECB4nGNRNzEZsjtKfP7GRoDoDDRnXp39Y3cZoq1g1GiTsu84MWCSFGNG9hSAUaR8kAxD6vJJ",
  "key4": "3D4RyxZDjWn3VEzCBJmQzasJii1Z1GMWc2k6Zddb6fnWw66tNkbgSmpEC51YFCayrFNPYWBdEs9TVKWNhqNKYohk",
  "key5": "upcVjLusQ56kdRabZPockCRyUDjdNFSJZm1A3BtRWR4YGaysgJHZvAWEtN2Tyi6jnmNTUCaXYPp7QLyGmBtADZX",
  "key6": "2Z11mp5FMkL8XRB9RNLE1nYQVjZjrfm5FJzmn8ZWVAQa1q4DMdxTgxzzsNdTD7Pv8FFaY9HJ2TU9RMdasqRUaQHc",
  "key7": "5kseTtg8P53giPdzT5dzBKUCM3ysyrtZJEr2KGo9Z1SiBwKkr5WnHtLe1CZdTD9GwybyfYcq2ACpz4v7fXDmmYZb",
  "key8": "bYxXujCinMTLSqSeoJoGdxgbQf2Zjbt2eN2jpf4gKvWhFy8cY1WhpMNP3oXRNkk72MtWv11g15CRvoAtfWhV1EC",
  "key9": "2tfebPf131UyRGdpPy6XMarXfGDEPBGHxMBq1QzdgBHEtcPWvByxAZUh1ei5NzmVFf1tZGvH2YsH3KdWpodXzvfS",
  "key10": "3TEWa9rbHifWAdHGukoGEzMupmpjJcnJTosE7FSK1fKSC7ZWVjD2CmdAQ6BQ8erup7G86x2Dnon8syurLsUKdNi6",
  "key11": "59ofVbodjyewD5UQ2kG11cB1o8FmADuGji5YS1RBeGj3ufvKJMDLxPB7oQW9QdjeqPpHxJ37Tg39updYLgoAVuV1",
  "key12": "5UTKHPMWQM3Uatv7jPXrvZk9p5gFJB4P8s2yHG5hqZduto2JZmyYB6JT68cCR1sYSUs6HfxpyCWbM5BS7KA2iSi2",
  "key13": "35Cu7T2XCNSUmpPws9ez2PrByXHMU7wmYAqGGiiyTP1APjGwJnA6oeDATPs9gEJGd7jkjarTa7MKYdjZhWrY7LMR",
  "key14": "2omEHoEiwRxtLLTzRA1i8JPWc16Brfc5Fq3TBJ1xhtNLEFmFeXLM3M56vfv5Mq9EfcW98XeULzxQRbVL7uhNueey",
  "key15": "NC2da6BejgLXxE2atyGUENK3HAmK5AeHNna7JpZHYHWavspoCo6cTdu1ZDwfyLabGSp4DBzTYAG2o3zPwoviY6x",
  "key16": "5sZ93nzcJoDckQGyUxw11BSV62CGfG2bY64Ssg3nXur9K5E7egtd16mnun7GPA4EPmexAVpCEXzPFnGSUwxW8EkW",
  "key17": "5ZwquQXHLPiUmsXZr5SQbpG51Qf9D4pKRFdnuEZYZM8AMivCeXsB5n6Tthk2zDiyoHBjH96hC3bv8kmwZR57nBTT",
  "key18": "2WkcrKkG8fvu8zE2YgaKih7KNjRdYGqEf2x1paiR3aAcm961hXc8FWGR4ewmfMFCVvv4bopezSseasdAbyUaaKa1",
  "key19": "XC4hmU98GMC6FvR56VNcy85Yk58PQM5TWzoExSSdqesEGrvKmQQm9AwBGa7kzKy9ozMb6THWrK2MH3ZxzJ72oMn",
  "key20": "58tYJVRVVGVDbsdQkomNZiQLmBAHKXitsA2eHbQWpr2SfPCUK84LsPTEU4wiSEoLWmtHkYD7phJfppdHczVA5bmq",
  "key21": "4XFrXftoABZepEABxhMYCcGzJMxnuQs4Jzsa79JP85Lu6tfaTr8cWb3ZsWvYffK4rwZ9hUAgsdkKSP5xJqxWCaeF",
  "key22": "eAV1NhpgH3bzGMJ8R1UBscJrZ7akwZfmFfaVrkERcAeVS6dNTfWxpYa9ScJY1dWRzqQwcg61srTY1rQ22fz5BtT",
  "key23": "2o2WA5F1K8mBifX2w5rBv3bdyMR9QUaBKgmxGnFK7URxvVgfSWTijh2Js3iT6gpJCfCALntcCuoRZwehQxoiCZdC",
  "key24": "4HDJdS6HNEQ2tcFBoEvm8mDpdKCdwPgynQ3arjDycnNGrSSmpeVg1W4RR8SHrPS8effuwwQc5QQhuaeetTKNGiDr",
  "key25": "2kfmEc1b3UNyEY6gQWTs3Kf9pEKehhAJQzYp5bNdu7c4TyTBcNmQ1Gc18fqQ7DV4zjLgJPuNr5oJeoufYz2zKWz1",
  "key26": "4sCVoyrNMEASDFHk8XteSPSEY49Gf1FCP1UqnHAZpnsbDGiBqbtCFnBvPdPfTxftu28wubxdeVZvtsNH7o3rbLv4",
  "key27": "5xuHeii7cDacW8Dn9xaeE7UHZFduHUNA2Sbs6e3icpiDpD3mgafqjbhEbMDu2ghknCbbh7B7bop5dNUGEVJxPhoc",
  "key28": "4D2YLTPmCKAGaWD2knH9gQjXDwXJ8Agg3N9dTuYGLbsxQLvJyMcvS4Dq1TEmt8RLcu4gK1Aiqx5QMwNmnRzNjJGC",
  "key29": "5MfJwCUzUVJbqgqyy5CobnqQEkggW3KCs2XTJAq73MaxTESvYspwoiGLs8LvrRVZnzMWGC9iJU3GwUz6TuQCamNF",
  "key30": "4PWnce91uCYmgyMj9Eb34c524WNmAkhhsoKmMtNcbEXQZPzjoNhfiagzpgtot6V58PJpVUpoBtrkcn8oJ8vgBcJM",
  "key31": "5xVxRMYYh2DcFTbUnjB5CnFWougbZCNx6ZLtuHH7gckczfRoTH3JrnjRs3fmwUMPYRmd1B3fw5cc83FerQ7NJA6S",
  "key32": "GCnfLRAjd3Y92ZAwdjcUBEjonc4yHCQVaXjPsxHyhg4KcBPQrPPapsUEac7f7hzUSdphptWqmVsksZKBsQHtzAd",
  "key33": "5WyRpHUVD2vcmJoXmBFxN7omEM89JS4bD3i8fss6YGK2qY56nZKmKdZu6S9SXEBoKKMs6QrTBrfNwLFhRBstXoFk",
  "key34": "2YYFYAvcVbZiLZALeWfSe3rXBeZ4VWmyjFb5DGaT3YJuBLJyenbHbBEBx3w2V1JrKVVctwVRknH86rBqpe2wPGWj",
  "key35": "n7HXFi9UkCHjbrJXqTnEQY14MaStEGH1D7sRc4kyhAZ2RyKfsKx41r2geiuhLyUxvxFbecpQvssMWA4SPv4REqo",
  "key36": "5tA71sY6qNwre7PPAzLAjQe637QQhkz1ZQ2JoWPhqCWFZGMBcF8rgWxh1dCh5Jkxa4bzLanB2EzaDSWr5QHeXtTT",
  "key37": "24LRFGxxayvxfg6FaKhUQBuPZHVExzMLpAuPw4UG3wjEKYo5VeJABqM5ve47xQ5a7c8UsrvzmtsW4S3H8NaQUzZV",
  "key38": "34YDfLr64YbGauJvG4XrUS343UA9RoLQGDL28WSkWFFAwZgp7e2cDm5tJNowPUEmKzE99KadJ2j2HvY1fdSGQHSC",
  "key39": "4thAvhtnWSp5XXGYrJz5BGrVtWUpXWp1uY2wUZJcZt2XB6iiLrMSrh7oZBGxzkEhNkqKsh5WaDZmjcy5fm42H4Av",
  "key40": "5bx6PARRXw9cxzibSB4PeQyPUVWP9HHCj493649vjRvVyyRpgkNjzmuLD5rziDEUcVaNVaitKXJu9bdNHkVWqiEN",
  "key41": "5HWmX1mxYfQvtLfzmcrdw9zWWUZBbtqUoxTMAUHqxyj5QNRbbFKs3tJiERhqYrfY9UKDsuE3kCZQDy1b9a8gw1b5",
  "key42": "icikHm4f7eUeFZmxTnFoG91toDDF67R88teetC5EzZqy9zjVi58p1BJEEJDwea5GBucb3KwHSY5EWLtJHcFRgcy",
  "key43": "3K5uTUr5FwDpXjNe5jF7jjvmBRnaCQCwvhevPEUvVE84s4SU6Ej3zWuBzRjY7XSVUgis6xZK4fmFEUM1LGuG2s2x"
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
