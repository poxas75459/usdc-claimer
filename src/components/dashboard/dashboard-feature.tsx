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
    "3HMBwxUFCFzmv4MJQ11hzBxja6RBnT7Avo5B1GAZ7yTnTVaqTAv2t45QDcwZnbCqGzqHPysMHU1vPCdJZFVRPofj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZpr7HdorGn7xZrUL1BWMZnfM1dMBtaULsT1WVBVBr6vMQvJ9mEYW3QVhGBgvJzVicdDkeQFCCf5pzeaQZhPXAo",
  "key1": "S38TvC6na76ibHAY5d1W7zPvB6bE7NGfytX8cnzPWX6x3uSAtEAGaw6767Y4kU61uU18pZZXW4aNXuej9kBnFPa",
  "key2": "4JhNQmPhpVoMZYx5ruVeZwyN6jBeFPfHzhtwNUeDotqBDUnvRVui6cCTr7TaXqcgHuCkdV7pzECd9Gd3Zyijyk6X",
  "key3": "4Hhq7MUPkyp2ttXbU7QnmugwP2wypfpPBfQdXfwgRP6f2vigTkKDUPKzBtbRfbzwLnhghbEkpzXeY3mX1RMn1XhN",
  "key4": "3VNJ7wmK639U5gR13M4SDa9r8jT9xEQfopZWBwgXCYa9J7zmcAWtNz5vWXhhPCrxRVorZKAfPcUwqJMqn7YWJCkk",
  "key5": "qcJEhriARXrEpv6vLdxqTxnwjGs1ArujjvtEiJrwq2XeHvxrYbuYsEoX5RKPBWhfVRvXEQc9wsvT4cyZrSTdn5Q",
  "key6": "5VqP8ieY7yXMJdxAY9fnhXmD3Nc1x1C8QFq3UH4LKHn7EyCWkDVMVB4yPmQJu7AbPH6i8TD5DWpVSGAqoK6q4nfA",
  "key7": "3NU8QQVGdV6jPd5USnDkYqMxziaMx4CBYHP3gyencZQAin33peXhWAtbm4dPhKY2SD2mYBZoNeqYRwreBm3qs6qR",
  "key8": "25eV5BdenYbxeYsoF1sRzufuaCyKXcX9MtrY6Ei6k4JNJKvNmQULQMZEHzfxUZJiQf4af1K6FKza1FogvPV2Hkei",
  "key9": "4NZJfBWAMSSKKtcGxvnQ7SfEPJW2Gd6dwBDitVu4GtiJ4cUmuX3eviMiueojMaJ9G5JVmGqqZWwUPytm78tXjWxs",
  "key10": "2tBotpvhH4yawj646qjMAvEhXpJJfMi6thPAtsXXz9hwMpynd1Ab7q8WJJsWAeBopjJhVX1CNzVPwqmQu9iSofJC",
  "key11": "3czuirehjvbVF74W2QYeRnhZpkh9uJk1gobWZWabqWNMfiduwFGxvu32VKAdAgsr1w6EqJgod1WdjAvaoS5UHqhX",
  "key12": "47j1xEfyy2PG2b7Nmwga114UsTNxcuJQ9iia9dnNHpWXTVTeYA9ujjNq8sAksVrDHnCwHi7dUHsDjPchqUXr8Jch",
  "key13": "4T4fpBrAv3Z4BcXNajABt8Gw3A5EtXwqtGn2NY46DfV8ovGpPXZMx1FBxzjFykqS192pwpEPxnyvB37uQAErXShW",
  "key14": "2CcZWXnJMz8Qi5Mb8eQxTYyKoXDRrAj1rDAA42o5qEAVLBLtsx8xwx8xpfaFHaaXxiLQEnnEHZHShhSeVWNvoot1",
  "key15": "2pCR3EppiSnKxqBksSqjn4JG9stXPJv7AU7iCkGvVM2ypUDrFQCPG1FLyX4nzqThakhr1rJin2iQT1cz17dsaaow",
  "key16": "3bpvgJENmWWfFyyRHdepJVkjuYuMzt8AxFQF62jgqxr8JFcM9WEPA8ASTgQbtxWpwADLWYpYcMUMk2GR2tYWZxg8",
  "key17": "28MHTbp5Kaz8mHw8L8VLUVViWuV81tPDQ6osJsGC7WzLSqtbxCmvSnG6EmfwTnPh68CW7v82YZCcwbVGEpFJ1a9x",
  "key18": "37hPoHJdsPkhTtcm1eXERGin2gGoSAuuyHkDgj866FjSraYMss6DLVjZibTFhqiyHDha8fgW6VnB2pabowbCtLvc",
  "key19": "sjxiNwXhWDiKMQEPs9sxBFCubG9U5fvXyL4yCDXUctqRgv6SxpFxuATKmGeB2aG5spQgigdZPfeQ3R9ipK552pg",
  "key20": "5ygRqbMgKwxttiMFWovTX3bRZRLneZSVYbUHgXFVFK2x1yvTriVqJnzEBwSF8Sq8v4paYxLFZFpoKD3bQ5XSNaqi",
  "key21": "4cnU23w6yZqFezFdyC6KZ35z4g3hsjwBA7BZHZ5BAgefgP5PiQ4SU9GBRJpggcqKUt4rGZAKXZxKEsfNEoQ7dznX",
  "key22": "5U9Mm8GNSbtmHe911yAhMkv8nDpxNsTm9nFydx7XmJERnbt7ZErjEM3tpKqZVupNSSvjTes1z1HoYhnsnkd2RiDV",
  "key23": "4UKz51yBFMjbvUbfdkxvQUWu1R2YgyHo4yNjQNj88tyUqX7CKx3JtRuTqch1SAwbJjS6ot1CcjYKUh3PiwZq8Kmd",
  "key24": "jDJaorCopwkpaD9iA6CNfocEMiKh95g5g6L5XqDW6oSxt3yu2RECr7gfvfy1jU49t6pPmpSdAcYb9PkgmSsCWGJ",
  "key25": "27hxxTukQVvkR9juAqFPhzDPjizAeVJroogW2Tf9iDpZYj3RNGmkDDseUZKJApEJ2XY6rwbokH41si3w194hugDz",
  "key26": "67oRy6SKUz1FvhRyVvr8ukEUAYx1nWQ5SoaJu233ft34HUSQfzKi1Q3kBLCnKeCB1LESo6KPHb855b7W571XJPsn",
  "key27": "2DPLjR3fJC7d1i5642rPU7BuLauH3UXCiWfwsp698nuMBFFzJFXShJ7TvyfaEf13rScqRaswbRdfBpGtPFzirFPK",
  "key28": "4hk4X5zhn5U2WaGrKyRwBGGmMica7AsXdHZpESZvf1YFfevckgh9mgUwA4oq5diLjB1Vg73FJCVcFS5ZdCV8Cxf8",
  "key29": "3iVSHmwgR4Y2hM8RRJoBoLXox6xfCrLPCLTFAmcSKSgDZcnRVt7ER9GTWXWwFeMdsyaFyrL5tNSfurwh3TLEgLVs"
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
