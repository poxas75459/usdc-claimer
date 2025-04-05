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
    "4T11n66BbLzj4nMRk7SP3axAFDMfvacskehzXtMJcFHfnR9sG4mWqxCx5fFgZkpXMCBNbJuRDyAUwAXUX9bZGFXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jtzpZRBTruNbJr2GGAv4gNEtNCcKr6uFQE7gfxS7GnExF7s5JAP3EzK7E8MeA9HNfHM58iuEi9XvJ86kTGKm3fe",
  "key1": "2QRvuLrzjtTSccgWQdpY9cRsPW5bDNsEqFtxUtUoWxbagPREMeefSSwQZ6zJUhHo3sBUm2jmHtRKpHxxGAmjrXSm",
  "key2": "snfCtnSPapEyj759VuAL16SAcNDHneWF2EgGvNkGp17JQmDeNR6iEYNUJ8xCyQo8cVWJz59xS64UNjAipiDqG3D",
  "key3": "h8EMadmnE4hTSZYsmKcm1JMZEd2LAaE35SqVBoeCAaT79nfUmmH6xJropmbU6cHmZdd5vgQpRoDZgTbUK3mgTtS",
  "key4": "63brEMiJEX7DakppD9yqykEW3PTZBiNbDpuoZ9QGuTUwb1qwFJacPFnxYS85nMx3P7fu2jUpzx27Hk6ooTgmpKV9",
  "key5": "2DDraMpfQjds8t2N86SswMnU5avoLUGBbcXo1YHLYKgg2fm5pop8nccnkPfk7DKdZNfrahM2f7K3Mwm2gcos1rJf",
  "key6": "2kp2v8QHbfD6JBrkJWH4Vv8WoQxQkzFrSPMXMeLDbN5Yc4yhVzHn1C2cfuHg8wxhmNnoCqhUWzVP2vgVGMAMexgE",
  "key7": "3wYSmQqUzeDoeJ46LmSe2YVEU1fQyPkLpgXVrYVJsKtJqhwT3P25NJegtJzffEACh5EB7YgQe94UeGExHvqVcwk5",
  "key8": "4q82yjdcamXEBLXAFF1wVfnqvyfktu15Df8J3eNgd2ArPSKDBcZdujUCYQ3H2Nwyar8hRtniraLz7oGNqBiyrb5A",
  "key9": "44JmP4B8DPqhRnwcnEELHrtocDY2JmoPUsevx5PK1w2ZNu41TJhpaL1ZhtWDafjMVMwKfAj4ANZY8uZJujnCnKzx",
  "key10": "fajKH4zqYeCy8TDhTzrMiQ8witsavaUWov6XsMJvGhrtMyHsD3wGnmMQqPkpiihYknpWQbaTAAKCm9Mny4eBQ9E",
  "key11": "2jEXdEPxzavQXjHorjrha2cwb1uEJXibnfRm4fVn7uVX3NNAa2G8z6VSxJRJ9p8wfCHMAD46Ctzik2FcBA37QGm5",
  "key12": "2MeRkHUPuWYscW6UL9T1ZXrYxec2iTcET8Wy5ctm48kekxmu2as5CvYY7bTUwEmuXD8GYRU8Q2gBpL6pvJ6vkQMX",
  "key13": "4yPy2h9AW1P3YoBhLJcrtm6EtiLRa3oJiEf6hrDJiEL8jCkrBwfNqn5Vspzkn3r7RJ8TDKqk9thMWUPDtXkKagip",
  "key14": "5dXhKJwHvJWSjadVgmvLqfis6MSX6ht2L13W3ksKmkeuYZRdnRKMzrsVZdCFjBeha4ePfGHAGU4UgrMQtWQU7T2c",
  "key15": "5j4NDym8K7vWkBF2vYoricRsZzzYgAR3gAdtWweiJ6ztENAu6jW6XYTJ8PCvEKCeMfgcCCAffN3kD7WxjBdfVdtS",
  "key16": "5FBrnWDfifiKuZhodcLpvHtsdEbDzAcB4qnpZ7p5zeD8PoxtSRP42US43ZvokEQZ7m5ryUcw9snckp24kktr1M8P",
  "key17": "vMcVdNGhJH2ujdi9vKjPknQBnRnCWo26ZGAaDJ1DyPSaHNMMmoHStoC1prTqBFmFY8Jwgyi8RAKqqzD6Z27J5NA",
  "key18": "4cGwEufjU581LUAC3u14KEYwqob9iM5cFB4ohFi3ogtfCF2xSc8k676PufPiri8doQ2MhKNXvHo8oZgFC1yzcFQf",
  "key19": "4DKMeurLYRMxcozespBoMD9cpwigxcNaYkFinJzUZrk4wtEYzMyiE3qzXJD3X8oWdSdJFMzM61ugzKf8FSYKUeeD",
  "key20": "67ffiCwZafDqt1wts1Uk4pQH3DVk2rCmwsr4DrcAeUVu2rNEtEiUyrANewkJQKt3rZZ6XTsFKXpePcL7c3XiHuXp",
  "key21": "2Hs8czao474qaTvPnEtu2CFHpEipoZfx9u724FwkoLZ3QFTnsdW92GY1zRfvmMTfsQ1G3PtD2R3VarWL8FcorqH6",
  "key22": "Xrdw4qdPSjL5XzcQYvHbm4gkvwNdsoKdiBwDkwTegbUcoKF2YJ7979Nay9TwbMgPL7RbJ7ht5NYpe75kar77RzF",
  "key23": "5SHmmTvNFe6kW3sViwaKpQCvLQHRppDTn8xwXoPxZfYRyuNqwrGnMqSzdSXP7Bw2ejjfyiRXcEedQippmn9XtDbk",
  "key24": "4vrWNa6pjjDrAx3NU91cxKhrrwPF9W2T9y2Ji24cmsjDsFAakK42aZjMYqcDME1xjg1xuQgpxYAoBQerPZ3JKvuv",
  "key25": "36nAjYG1Ya3RwV6UWwkmPifvt348ujr3c95ma9bzHfyzF7iz64a1KqShsrYavz1Mgk4cMeWJm5Xk9uMBwjFxSv6u",
  "key26": "4imKE5kc3K5ByniNqQipHVTnFAhJFGAHAKPxS9sBL1Tp76wfVp9Xq7bwCDz5adCVRHoBRtyQ418rVbsVt5vhf7i7",
  "key27": "WaVBRYw5HPKD5myN3nfNnQhhEcxdDZ9d6AfjEGz3hQNiPDQe7NErW5VhTWejXfWWjGqL4QM8xAEWvDMbk3MwLCk",
  "key28": "66ZwEyG57WSyPeFAbsEPLX7SsHziXauWUmpg7wGy4M7Mbca4yjdSd7gVYfetnNn9XiwzoZeqqhscNkhDjUJ5tFGM"
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
