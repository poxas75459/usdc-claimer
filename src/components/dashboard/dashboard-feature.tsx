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
    "4L7cKoiCPFTbodHUi6RZdvDUqHXmabyBbBz5mp7UyT6yHLg39asLkYTN6TNMDA9Aw8MEjnshs8x8BWsEn3t9kqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yiJF9VgjXLoszkmNf5uNrHn6teXU1rqFx6fk9fk2jWVWPvKzxRScT39HTkECWjt8krM5FwAWtY3t5YW3papBFpb",
  "key1": "496pJHdsEGf414PmxqLt6dy1XTwmCSxQxiBafN1nVodgQnnEeJT5E4MyNNfey35N8pggPx2T6yMsZpmfzMYiyX3e",
  "key2": "21APae6mU1qM4o2Kyrfnp6MDauyrF4PjHYvUFBH2K1YCft4tX4dBn5UzKA2vcmZqyxXRNzvP6ZHm2yNGqyouXGEe",
  "key3": "229kg38cyi1eouiQKc6WezHQevYvub7p7TtpCaN9Ekzaq5PtKTJMnPMdCTswz2ExavhkQGWPZ7Co16VGTMgLNMpV",
  "key4": "T5pceWD5rTvzWvv7w8E7N1uF53Zty3LhVPPT8V7bt2hF1uUauAdXkGe2W262DbMB6cBwrCJVuqS8Hh99m6c3TpQ",
  "key5": "U8x3NuKKrDuT58tcAT9nDgifTnqwkSQ1PcozTqNbdnXakpWPsM2ooxcYEusig7pZLMJpb8q3nnKiCaFzuVvMnnV",
  "key6": "hHPpyqvVQeNrQG3fyPX3n9vDL2sLKzihdZ887Q8XqHciCmQd24H5gEejNRPddYhzGrHD6ThN2Q6Q8mzkNMo6Tb7",
  "key7": "qVDqYFXk5CPYf6j8KyMAhhxRpuM3EpXp5B2JBARPMLMSy4x4sTHghBhvU4phE1jmKNfEbNgYQQcCs9Cnjdtic36",
  "key8": "5MSYJdqW5TW1ARfc1k6mzqNaTTyD1jzHazS3manTzc5JZnfy1vGDoSZ4DjG3rRBFrbfRkX66BCDuBvDNi8FZyEtG",
  "key9": "YnnFBywMWRdn4nB7wM3pkFi1aRgHLDaS6fhL2zSGm8DkFYmDRWTSzpcrb7ymwwPKNTMuM2ofH7eWoWqinUpd6b2",
  "key10": "2y82vgtS3swU12Pnz6CGvC9Nn3NYcwvD2frAs8L1nBhaxANwm5PU3sN7h1Hf1VVoBfwM6tZ2GJxTKUvimiEniu2Q",
  "key11": "3MFvzd1hM7EHrJDMDBBgabPHPD3zN8XZ79Bopn6fdt35edn9ysed6i6195UT4ijEH3Fh1jq6fwzg8p2wZAYh4wFf",
  "key12": "Bn7R6D76q7at7GfNU62qjuQHkFofqbwtjhH96PqFvLE4peFcPfFajHJSSt44ygJb8muKKxybDTcbtZscDeGZCfK",
  "key13": "j6JXmkhBLMvWSuQcNDDemADkcRJ8gs3MtPcgitecfivMzFARBBAtcSzjjMeVYg22DXoRyqQ2yQGbfUhmQahAJ48",
  "key14": "gQiEnVSaAek6qwc818mAdJn9boZH8uCorgiRZaac1qRUzo3iMng16aFC2taKo92DyNwwQT1qncCFkFcP7dyg6zY",
  "key15": "yS3fvAdL8RahQ8UmQvz8UabrbzZcasXxQUtArRjbBQfJV4z13g8nzYjqYrGj4SoWybA6JmN5D1cbLuUbCPF1Kkp",
  "key16": "qALMzC6JVhoMHpvdqNMP9Td2Ngz4GkbR1dDLqm8NgNdez5om7WxGBj4uSz8vjt6m6aYq8qt1DS1bMu2GC3jhZcW",
  "key17": "2QefXPYTaNgSKYQw2AGqgTWD6v3KEQ8WpZgt9VA8e692i1jkbPkaSZqhNgnoVpG5ptBtE7k5VXZcCKFTcAbpqLm5",
  "key18": "5Wvm5Prrdk847ojQRihFWV4W3H5n6ZFWBRbJFxzC16jUGfUGH9MfQtjx1JbvAocTPBhgjD79nQVY91iqMMgHG5cW",
  "key19": "26p5J4B8CNc7h3fa4MsTHjvQhBbn9L5FC97REoNSU73SutuENv45Fjt5Sjwqz58PqAMiBmRfiq7u7WVLdiLumawn",
  "key20": "3RDyu2G3XvtPTrUAGYG7YeBvmYyeUATnvAaHDDSNg48mBwmtRAnGrQYz4KB4ntzjNucrTLbsYgU5Stj9aEaED6ou",
  "key21": "5D6zMq7iyDLJajAhjwx2YevChkY22mLAWiBZhyRE4By4Dcbaogq2Dc5EP5xpqBDSwj9oLYWuQMUBCL3EDNW2xQML",
  "key22": "4DbGCFdubyxCte1jEHCjK7CXBGwDdZrkM8P8qPhAuZ4QjfH8zsmgcBbyZHDU29NbZJ6mHKeEbSTxixKh43jrywGM",
  "key23": "5bUo2CkGwXDhXxcrsfE4Ssp6xAX3SbxGDzAjDQDhQw9ugSwnbNygcNgKUauMLATVmn4obcWca9PnXqhDTy5Bi3rQ",
  "key24": "5zoCTuk9shSdsa7oKktoaWaoFLQkq1SfXsULnaeWx11xj3pskrxeeuba8jxg83832cidkMWD883m5kEc3EjQW7KJ",
  "key25": "3Zc9ACL82YVRpcWVQQSauVTLJcUPeSp1FceXf6211PjadtCTD646d3bySaXhTU7gntmmPLYczDLnQMraD6y2cpsb",
  "key26": "5MF5QpwGDphKuKjAg2vdnmVosFBorFcdpNVtvBijT5yGVWtrnF5hXYzhq4RYFKBpB3PL9S4kL8efysgMHrAiZCJX",
  "key27": "3GAmMKbNJTrgK8HhmfZctFuta6EN7wpGuQgR96SeuxSidSGWG6gXGuicY39ZEnS9ec69tzk3KPfiJrtu3A3kG4DP",
  "key28": "5TGac5ynqWJCz65mEtijACpqavrhta3eFo6YJZ4VsZAJsjpazQnXXYkQNaatytz17YCy7MetCkaTCuV2nbXf3Jhe",
  "key29": "7y9LF1AtpoFtL2xkTYMFG1TqhYdr5mZBtF5UwvrBpfYF9UopttJeLLdgD91LpvcHqKPmf57Bz9mrVJHZjZ8K12R",
  "key30": "5N8wyUJEQrATm3FCS57m5ojewbdWNE8JEotTYR8pHRxFiThN6x5U9PCA2wRn86YPxXpf8c6YTdzNqehCgzpR12b3",
  "key31": "GjwcwNXwWJs3T7of6aqF49FMheykC7rx299zcEZjPDAheeM6HQqtuZPvAkeq2DZnYCqzzQMMLbw1Vq8JEVSpjou",
  "key32": "4QLcJhH6YasdnByVMXGtLBvGRS3wKd5PGmeqFJw8gVj4GpskGiVFBrVobpEh4KaCaHipHGxPwX7PLRGSjaRu6H8q",
  "key33": "3w9vsrsJvYB3jGCRAG2d3rj3tYHC3ewpqc8oBLDe5aMHyRw4WBumgC5yiAiWBxuWUr6uzDWDkG6GGek2g983fSXY"
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
