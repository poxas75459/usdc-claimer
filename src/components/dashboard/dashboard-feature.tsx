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
    "4w3iwUVyJkgAVoxx9tS5qoXts2pfHM3dQb14mc7CWdw8FprqJTDanHLhhNoXTK9SGAi61CSjNhYyLWvzvcWE4kYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zu9tUuyDVixDQde1aRWCzL59GBbx1Q3UY7BfDxUmuyTpsgkRqPUzS4MzeBHyjKdwjfRLsSaPj3GMYRBJQhuJVHP",
  "key1": "45otcMAcCYqGxKJ3pCRxCNuguR6RAPYcTj7pqFdveXDZ2SVwBZya5xxZAsXBSiwrw7LPEF5v82qM4HFtdzWKyF7B",
  "key2": "5tNuUUzJCMei7gRJA4s4foQDtyxdSrKxbbmMv9DyfTuTjSXmGU3ACoawaYXaK2pQ63w1tKDUxgXFTC6zWQ9HQskU",
  "key3": "4LJBECVh96xo2Ngsy6jpHGfo7w85NQyK3SVfHCw7FQvxcTH2GXqdqUda7v2CLZT8NGmSyeWzzk6ZP1cY3yDZjvXa",
  "key4": "GZwzG7NFD6C6jSRshcGAXyzTAvxzNBvtoHDn44QRx1dhexSGrK7gHrcCsH9jHgbs2QXJZTjatQbkP9ezZy4byLf",
  "key5": "4V8xoUb2GbzbsEc3TrnrLHQWDENAc5SrBTP9N1hnPzDZ38MqNLM3bA6hm3YYfx3jkFCoWxFvWu56cYsXAjTxnNRH",
  "key6": "5Tvc6HGbH1utigG7dMyHB99Q5JThQVMMYPc9BdVYnKEwTAvaYoASCsjk5W2jspGfaA9yS5zwUW8qk7ykzNG3sVAB",
  "key7": "4jSzTz8b6bM26j97z3nvRJDrEsgFhqBWp3Hrw7n4815aPFfJAuPsSAf1jqZsepj3cDCYd4NXRKJEVP9kwpyTsZuq",
  "key8": "2ssaitV2Vav56FA6TpWZdvH6bMQHYNyc9n9o8ou3pS4kCCTSKJsLGiEhJ3oaALhMG4wU9winMMXnwbtb5ZkUaKCD",
  "key9": "4PFVBtBMMqxf7QtNcdK94ewTfWoJTfDutics8fu9TcWYATVfb1dm2rLB1tzdwVAcRAxy4CS272pNMDCxGXFHaXFv",
  "key10": "2BPFFhBq2BwrDN3piqQwAvfBYqZUjYnkNTKguVPsaZY8Vncde2EpZkRd6uvNx2BcVngbBF9by6t3KK23tEfTJNB6",
  "key11": "67mJzeR4WKz2k5V5PK99G5Wp7sQdEyoNGrUGRsBmTtztivYKUuv429vAVvydKX4tRvBLgrj6cgoMDJMqtsL8FueE",
  "key12": "3ENEHPDzCjwmnvFDDCdqM1xU4gVBVirfRTLkdptVdXJLSSXzc6MECGfcc7SgKY15J6ncmRU6rNK8s5AEbiAkyX7S",
  "key13": "ESeC1XiyEyfRdhRx5TY2cruEwPmNGFXgBm5JrRv7vGRje1py5hspBCwQ9jtnnHd2QhVZzRuuJUtRnM6S85CY9SU",
  "key14": "22Piw3f3UM3Nvyos4FYpkVqLEw3msDnA31F2kccrgjepX16PXbPqpSe2sLdxYLsLa62x5GsUF8chXme7QMmWTcoq",
  "key15": "3iGfpneDzEZYLTg8imQx6hG5weRWD25F1vHxWLZxyFtCj8yQhK9VBxKyFi5JieY1L9VdFpoAAqX4B32QTotdQsfe",
  "key16": "5sd8DGJa67mLgShxrGKC4boitZW7X4duJXMvzFDd6HQLn3Ahrk8MRkXNJQx9HhUTE6THxPhecqQNMyequWavk11h",
  "key17": "397d7KWpJ9m6oUdjKaCqbfT9uxxsKkbFyorzaPnDVj6TRqd8Znnvq4F9HX6Xet2CKNVjxnPUoH6vKHP4Dp1dNa9w",
  "key18": "4Vj4Tj8YVvbAiSrKZKULbWaEktbLEBrVy7fbZFPypeRuqcty18Aa8QYwyPsZGdtbnRykowCHmoh6YaGpyV3hLzBi",
  "key19": "2g9oTRR3jFdevA61YzCtXeZ6LJXYjxbSPiG9Pq9h2vBBEXiGB6FBFFqErropYeWWd5R6NdujHR1dzuoiz1TjMpWM",
  "key20": "uDG2m9DXewD2hA4hngGysJixdYYp4PcFBurQXLdMrWHD1LXhMaCbdY9FQDkFAMUeZhRoPVqMhKVcb1k277pYjuA",
  "key21": "2uxJ5oDMGhrNhmZkeVXt1uXkqZKPWgwnvPGLLe4p5LwYzhNrS2oFbVRNDjnZrK5kPCdQGdokbMgfiTdN3er81q4A",
  "key22": "2uex4jHw4bxB1YzPhAxYhTTQ88rYQnKnms9FmFiQcqTfeZhmwXL4CY1SrYkcbHDDtMHHK73vT9NVCjtCuVKybikv",
  "key23": "4ArbxD4jXa5MAWvSdGEGhUnTKD9XAfupkMAoGp3GdeVD1n4EsxPMiCj2yBKR8mKsgqcyjW6bBxAsiAkZLLmEMy2M",
  "key24": "52JXHwa3gJSRurY7EGqoSws1UTzAcwbyuX6MvXUQAqSHimwv1A9V7nxxQ1WosSoptwE8quJzFTBYos1x6erw8JQy",
  "key25": "5eZUe2xcg58FFkPtXJCS47oXv5tEScLG4iuSnFTgxvRwPFQybHuqaqazVaukXPLvZm6hkwuYAyczyEYt8KdTrLkq",
  "key26": "27ek67JSUfwzH1XnLpBRGkEQXF33urNSWdcqYES2uNB7s3ocw1hnGeihWvJRSMknFb1MddRygdNN4yCUt9znsN1R",
  "key27": "3aRsZtE6d6V2raViURRhNemiu72T3t6NjgWCTaD2z2uXB1Smft4Ma8JLtbvevyVjcfbracda5t1oXuGgJMEKzovq",
  "key28": "3ZdPkjsKxQWDWhGfopSCcS6S9jbKTaXxnWvTURyzKroUH8y1Df5dBW2krL6UDwcXM79yPZcUPso3Xz456EwfoJ2F",
  "key29": "3CtAUeQ1Pcja9qa6qBmHbqtPU9fpm32zJUjSDYeERbKK5MHNcUBJwMuzpzc4jFASPGaCRsFhytL12NX6yy7b1Tct",
  "key30": "5xUyPCs9BWAQpewh5BHNHgYZAqbN9dN4JJuV1Am2WVBUVMH2VUxXSfaQx2LmYF9oiSqj5M5jtDMufrcGXRx6baQn",
  "key31": "3tQsQZzbPDJtHz5gwF8V5dkaBSSjUeCfDQnmeEvCXbLwsgdi7tuNgV1bvkiEeoV8857rE8LqkykEMAy3PKTAsi5N",
  "key32": "DMC2748kmdmskFoxwup9ftDd7KH8yjuBNzcDoXpSE2K6TtANLraCc1ZM61ZZG6RcaezrPnpT37tzr5ZQP5uWzuX",
  "key33": "2f4Bqs8TaZhSWc3sUf2QccdzZBYNAaDfaYBE1rgPAWf5pd2z5zZxAUT4StfQFSo9CGbS5PoGRK13BaPDAAUfXaQ6",
  "key34": "4hwfeDtW9Xs27eAuCTZYxUtHvugQpynZ7Tj5LJe3pntekPsMMvydGPPdkErWxfBPuN2ocBdVEAowjGS3CGdaNA8r",
  "key35": "4KSBPLA4N8LZjrTzuE9nzXGYzmk3EGMi3n55YrA4QNwydbNSzkvXMYjKxhgyCbzbUonM3ScpS4Bb8NszyEq546pv"
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
