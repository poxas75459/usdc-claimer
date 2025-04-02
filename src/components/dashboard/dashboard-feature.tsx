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
    "2hEPCfRZJSAhb7N6kphYV1ruhQPAYUtt2VFggQ3i4CaNwSTRCBkmfKMofSvTbwF7vqYxUjYjexGE59yCpxvLTe8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NrUktqDz9DyYih31S2zJALZRxXW1cGrz31FDLvaVqbUPSD9559TBDwcB7WvXCVJQHeujWBadk1YiYMnmSePyTcq",
  "key1": "3zviRnBicfohH6X4p9fjZdsEPYFkxCXxU5y9h7Q85weXuAqbUyzJ5eTg8GdE1ybamtyNZjRBbuoedaLE1Xh7aK9n",
  "key2": "2DXXZ6fgMbBBw23jDuZTbAgn2XvpkFZ54ATLU2YhsoszWEHDthK7dDbpwbSmHnMvrHJDDSYLGx1f9YmKAJdQh3X3",
  "key3": "56pE53mk3zEccyc7qjmvaT9Rc5aoRd9S3aZjEXDWTTUbrupN1DPpHdbB6dgCQTGT2GP6ayy3i5Qw97yrFNW2t4if",
  "key4": "3TvJfqGfYPz5aUyrf5Tj2UBmaxk4TGdvh4nMpPGBkvAzv3Dd8Naj355n8rQwSsyma7xr2AVezF46tWXDRC2sMcih",
  "key5": "3VpPhV6Rz6PpxZ4KkxKd7tWuziuWU1hHjXPGNT2Z7a2kFozvsxcKLNTwdTwiU7VT4KByeVRiMCeS9P9pPsJhztNS",
  "key6": "5fdq8vHuLKPmaJ9qa6QYbbCfWJE3YK5svoThJsnewmUtdRQZ2sejRMUfDmXyBLUDzJhP2VZUrvMZvVepooXHTvLF",
  "key7": "4wPM1SF1ijAXEihB57jdrdKor8nTNMREjseZEFgpsWSXPqgpwxYcpCuJb1LuLo6dkmZnmtiAQfueTFvB2eN8NSjX",
  "key8": "2pDj8rb87Lc9uELRoZVRHeNM25XsGfr1mVvBLUw4VPt49xTW6bzBr4rgVEADwHvKKjjhqyC95Bot7YHktRRoDQRe",
  "key9": "5DoUNMNpYHa8cfXT2nuXST3ay7gjgSbLAnwwUZ3CrTodboHvR5mV9cpCu5HAKsoFhLXkA9QvZQa1sSxgw1xbGhLL",
  "key10": "5FChrgu2kBeatxK3VpkVvB388YFMJFpBR3TBe7pMEZmM2MrpTQFJejjiLXA3SdJnZwkJMGYKHYLtMRHyWgXPPqzR",
  "key11": "25w4wKgToVgMDgEzNgHVGh6Fv52bk2qXNb8EwjLgZnQfTtsRUg3fGja7boLBRmjA5rjMj7tCUpjPAsXD3L4W2HJk",
  "key12": "4sg8P4JXEutWcgv6Y4zQV38q6fLpqEZSyyBJ166My6nAE2rdcbYPR1R6ktuZ8FKHBmkEmN35gnRmKaaUuG5oJn1U",
  "key13": "RUYzN1qNvLV59u9avP7nGwbsMjXR62T6JaAgiw6xZbZ2dmFrgioQwcX2L3ZxVod6YRkkBGz6krrmzdePJb9obTJ",
  "key14": "mURZT82aGkG5pcNs1WU9nWYxLsgbgeuLFShKrGitHud8UanKModpr41En526V8Aeg5PLcsDEi7KRjm6yvKgCEi4",
  "key15": "3x3M9Vbw3cT9koRGLDw6kFypPgLTce7y2NH4KUDA54jhKrFRCPDFYay8URqHuWtrsebawT5emBGyqBLuySCKKtcs",
  "key16": "2BhfxrEcF39v3jMv3bmxpXoLid2N5b6KPTDhfR7rTo7noHsymEG4Q2tTpf9CswfhkhxCu7FgYZTMEy4XF1F1bmhY",
  "key17": "21USeMmHgFibF8HzgtSw3rCwwDeQaKA4Z4Ew1nJ5xHt64RhijsKWpcnEsbcUyxHxYyjJAQCvBaevFrFkHNY7Esvv",
  "key18": "5zaJFFRmNQbRmq13MnkpQi8pN33Vj2jyrvRwB6axUu73Ywr2QjjRR7uqYCf4hQE5GqVoSJNmcKHDScYkJkXbwjBi",
  "key19": "3MwrFqxkrVtXubczXeuD4SHHxMfsKVDSm4hhcbxZyRoJcyngu2QarJomdWjQWsFnGHoUw72Takh3wonXKYcFjoJG",
  "key20": "2kqCHYWYfrufCkpg3Aifc4visdB9G5GZyGif2DcphkP3DtBVYQSKaHDiNZYJpqcGw3USxCiUH4dBDWCYtJNStTdg",
  "key21": "4G5yXKy9e5tqwjea1gPo39ztfEYwoyrcZppi41SQp5h6stoeds2hNBMnAxe4KUxoD91GfmQcJQYo9kS9eE74XUVg",
  "key22": "5xCkJ9rTK7g9AyCUJyZPtYqhKDENPn9QGazJk8PjfSXNvwd9WwNcztGAAaNEFQAvUReSUcuc8rfvBUwm6jM9Dkud",
  "key23": "X9cfHeWqMyHkoPaCcNv4m9WkTnv5xu9ixnKsCqyhGSjejWEoVxbJJFFSRTYDQF9w7MYbDsPhg9LHy8tDtVvwQq1",
  "key24": "4223NMcfCoY19WLFks6Sgk7AciwVC3fY9iWeaXZZEvVEWyhArEiLZQzY1JGCjb1h2bo1FG5bAHzHgs8yJKp9bbFV",
  "key25": "3T1as3GQcQySQ2vC4WAk36CHqWdgKVj96P6TpK7xPQfDLcEyFae3FZsyK4LStKdryWPoeZZe376nUTSwvLc48bo9",
  "key26": "5RVAtmYKVtVsgVzVP6dddqH5ZPxyM7nsM3dDetMVHpmksAN9r46eaYMSLc4DHmsTm3Yxf7zyFULcxWav4VM5PEWU",
  "key27": "3rHwNda5poepeMHErfBdDJuYLngEPQ3StR7rpf9uwtbToqXUGy6d5BU5crxA66yBfzbR5Yd8R7rCph68hqs1gb3L",
  "key28": "4vBZw1Gf9Pd484n3nngJ51P9KkDvijbzdjWWR4TuShhS5Hvm4agSAkdqJMFqauR7VSF72KZFbhCqFbtnRZXf8vtX",
  "key29": "46KHnvyPo6NLHfr2JUchPL3yRPymyv3F6UQK3uU5GAf8egViptR8awQ3L1zUaupwpZmHVXGZsGD3Xf3BvqLzH7Hb",
  "key30": "4KcPzJMmGjMQqVwV6m21ag2vKgFykUC4cSA6K7rXcagT1FpNrYsnYZyLh54qAxc7RUoBBG8Z1Ftjru8KmsjvxPP4",
  "key31": "4WKKSnBAYRWFLvhzJsdFYaWNaJaV7G37tRriXiSicrZbbqrFk3WLhLC3frTRSxfLdxjPq5wioMj12Dic2WV18GED",
  "key32": "4174fKyQx3Nz8GKfrPCgW6LqQVrGBY56x7ndzW3qfuwSn29uxTmdngH2sD2w4VJPGPxLDYmus8EHLo5DzP842qr4",
  "key33": "4DnRhEnmvLfXjiLkPhevYHombQ7BF4obX5iXL8xt743Uq8DXe4tMpkWBB2afDbxvasVV9r4Jeoe1RQ3Pzq9mLW8r",
  "key34": "3zdyLf8WnW2DtYbUJXEnt2T3HVn4bLfsmgTi2z2oFLXoPBwb2HeHM9sAz2mmN7jt4Sd7dv8wQgtzyW9M2LdrKLgc",
  "key35": "62TqjZjP6Debk8FosKCMRSwFrsM5jfGhcLT2gARUaJMFiYqXEPeyFje8BvhZepUjNPDWANi4Zm5PizocygfHXEf4",
  "key36": "2PxFrm1G1XWj55cXW1rnPN9HJBPbU7gnfYqaRP93mgFntmL7MHL9vrTcS9kF2MMmfVKoYgdCMtB6XUXcCEGyQD4o",
  "key37": "5Z5GTpQ8XUozGgsfHq5DMZPNaDeU7kvUv42DrCoiAkpnHTH5SHq5Aqatk6uckD9ADTJXxN7m4scjTwKtMB6MtHTK",
  "key38": "4zwRswzmHemBJ2jipGkQKdtRLQYXhYygpguhhutYZ5huwvkpW49RapyMj1CW9sYNJeTqEaxm41Qihry2rcrdMYD7"
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
