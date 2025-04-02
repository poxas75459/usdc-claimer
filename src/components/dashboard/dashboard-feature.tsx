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
    "48eSV1wEaFi5K3Lad62UFLSQ4ZqgPzwKB2qXmDSSPKBa5oqVLLg66BCEhGEk3gWdHZWDcVzEfRrspASeWtkgPdRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5dEx8noGmbWH5pt9DsAgdE4j5jLGa4Jb2MxV4JsmXKoiNtbXAZEHxfPWppmHZXpB6DxA1Z7DfT5c3fJv9SM49d",
  "key1": "4vf1nEK5YBaLxwLkcpnD4d4Nb3kjstLASpXh2F6kNB7M6yxavZdXgajaiFEztBr9H65eQu2nK9iXdBiVwWhg7fp6",
  "key2": "59Q1DdT3GEZjPD6s2FeavME4ozdZRucQAWCuAFcso89SwHB6ydVDKsTMgoyE3v4QJTssZR2PQjzxdoUjnCtNmx6q",
  "key3": "2SveWLqDyB8kNFWRkhjbyN1oFDRzzJVTKrBF9yaSqHkNceYGxW9NBqcf7AjtGcfU1rX2Jz7Qd6xijRixNzf4skR8",
  "key4": "3MqguH9exT2eaqd85f8iZDvSf4sFGDDM9vR5C2GrjTj7bnwrtPYwy5DMcWRiHonzQKmy38pwVh66u9GQ9aZoh2Q4",
  "key5": "2BYGtfdktoqA43kjXhaMr213eDLHp4cYZaCkwZjJSYTFDYBnNAZZZzhPC5BJYPKWMHxHNTZZiY89E6W7koFsjgAx",
  "key6": "67CCBYA5u3DUFewXLo9y7921E6J3cCzKzFZ4x2qv45NNJcUFehJRgRNS9croWYSAhX2dMejJqkq3tMTbYdJRK3jN",
  "key7": "3owp9fJFS3pDinEXuh95kMCSrWbNTgvxyHV9zgEAT4Fqkzuo54KpCayFEXdzNT1zXgKcJZHab9VdjjZcj84ZtXkV",
  "key8": "HXy1Qwke7qhtULd2WRX6Y1nUQxPxppWkFTTunQeDXsMSaNCZFPeq4LdNP9YkEbFVMnVijYQG3qFVypwH54s1teu",
  "key9": "3ug6ArsnHLxURE1hKyqkzWSnmZ7TwR7RMhsGsNAd2G4X8PkzNmVkoKe6QNNEQMksM4d4VJQN7Yb4TPdUWhPCziQC",
  "key10": "25in8eEhTFYXZMRLZUPfNo2RpQCRwf4wTDXqaLbRHBtk2tQZxFhZ7uBm94ukFrQ2Z27eiEndWmA66qt7sVqGfQwh",
  "key11": "X9HykssJZsCNAQvLStubJfTzFnUwPTJg8xFhcawwY5R12u3rZNZmtnyZc2gKBWWmkWeQCVyHW7xtpJvofoGrqiN",
  "key12": "f2S3UgQb5P5vK29KEkaQT2g6U3N1wTvfK3nDU26SixyJMsuU9U8jRdyDCBMhqu9TzqyH9gB7qm2TXXJ3UxH7mZ3",
  "key13": "5p7cxAuJiwNRC3xspfnjJ3noPsi7g43zokMGBQ5Mthk6of2B5qL5DRgDgbMAUde9m22MNjxW1LnHND5RjaBb32xB",
  "key14": "3zQJfKH7bWQ2m15y5mF7bMyYwV95rAuzuRS7t4MpQU3T5NWQdEDd6YU6qx85TQzLFBgeZWYMk2AbEp3ZVbMi9mvn",
  "key15": "24SZBNqXzAZKZ3cCCrG6Aj1Wi51HaUMRmtyJWw13URNN9CiZjsqMCgFMcWbXW4yWiu57ZRtkbprKNNZWhjQh4sv8",
  "key16": "4BejvMWTDcbkeCSq1vBh3YuF7Bji3jtTH9BoJcxupvP9kNYnPbbnyrJHERp9tyjhTPy6tZEedqFdCFuJZPRbLkG2",
  "key17": "3q2GgkryKji9iXYBb1RGaAeDiz2w9ZKhSyM4r9dF2ZSYrZ4RNrvLyCiucN2CfStY3AhRp1QVb8zgSGaCgNhZu3ub",
  "key18": "2sqQZhKV19sSm86U2RR4iaK7yjRaKtTJByBz2gd3tQ626FKm38KUf5kMKhPeazb24j3ZafwFDTCgBdxnC66Pc78",
  "key19": "LsDVrbbvqfPP1d5svyLBFnv4teF68g9n2q9P2B5SKbF3YXj6dM9VzBqxd9o2SeYSqzwsb55fvvmX75CLieoSAKE",
  "key20": "4dDWdzbZcwtvetgu4cbsaQuhUAwiSY3jorLpkX8Scwsf1wFeN1J64FaygzMvUZAU7Ayzzf7omyhEMCdcKHAmx1Zc",
  "key21": "36pYvo5bv67mg2isXrA88Hgzk3oAT2mQPYpFn4oyYzdgowmJUruehzyGRChsuQcSTE19wVw5FNYJMtnyCNyF2oLR",
  "key22": "5PhBe3kGZEyvRANdowEnjMxkRTauBrTk4nQDtei2zpDNyGLfCF19WtNu8fv7rnd6pNvNG8mJ95TAWn8Vm3TsSXcU",
  "key23": "2ZRKZt41PziHNXR3fXVJy5QsoVQpwT8iem1BAkCmvz5B1nCj1gDQ8kFApfan2rcmfuXeU4MpfHgKaABm5fsbrH8H",
  "key24": "3UDAJYMe32xeTPvQYWPnzCmULufkngzPZH4crMWTJWBWk3ySKUHffaXAitge4xrTP11f7LkcZTWAPqGppszsqSrw",
  "key25": "UNTYMxPpeyKPiR3k4wnNPyizym68EuWo2qEkdrUWRcBFXbDkoGoCC9djoijk2TYXmd35ux1Jvtnkd5ode4s7XtS",
  "key26": "56Kmeb3TPcaD9KGi2n96mifSrhg55jLaH59ffs9L2adxDoM5mbSmBGrsthGYZB29aurC8gHdmGZ6j5xBw53sNu7y",
  "key27": "4mqocr8GZi5VeJ8F9osPFvGhzkHE2WZJDeZi53JetFuQL5GpLjUDHfYQzThdVuPjiXCWo4d5vHj1tSJ6DZtvUbYE",
  "key28": "3Vkm3eHwHuniUQYtqtLu8C1MwadXJE8pLGWmRcLucGERF4Jdgf825eY4wgXvbX26YWd2ykPfR7cCCuXLExUmHEvB",
  "key29": "7zZaRwj8GhF3eS3hLgc9gT9otxaT52wrJKvuST3sEhknxGoNzn5HyZBaahjtAiFzuVguAHoTBXtGdcodkgJthW9",
  "key30": "2tNHvXoZqf4zLGNAZ3R1RrLcgZKsJNDv9qmAsmbGT4qmgzk7G6CKEWn1uLQrjszUhxjUukdpWh6Ae5f1c2bGPP4o",
  "key31": "3aXfYR1NNVJ2jvAnFfrrrj73K9GFBKYddgL8tASLfFm9zm1P8ViRDmtMAoGCHdr27HP4qYnH614yRQpvvW4YRS3y",
  "key32": "WkjVZdbPphmEBDBqf7HyRAhoP6qaFEx8LsPpy6cK6uTH9DS6Knt9QnNbkCWfYgRzKgyfFThEe5vKkCAFZRYgXxh",
  "key33": "49jJ93zQMNr3a49XK78E3DnnAnTStsVznQaFVPdiE6ToR1fd38ECJPQcgsadGCZnXR3MwL1Kv1f9azr2PDBuHPGL",
  "key34": "4Y42QdrSEq4WLUv8qDuaAncLPGC2zCksEnsehm3UnbHST8x99McmQdRonwFgFZwaZNgcnDt2ZDobEyJwYGqo3iSU"
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
