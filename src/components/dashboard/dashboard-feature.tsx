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
    "5Z8TVih6LokrNKGvveqCcekrJ2H6Ysuica4qLrQX29KSw4eNk5nxDMzXw5QjD86iaazA3FoQYGCC6cJTgqGuHCvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBNBUK61rqSwLfjxpGReohw7o6f4zACrVMMN73f2PcPtA8h7K1qYvxRZUgy1J7NVPa5ibchvah4Nvu1WbfGkWtr",
  "key1": "3LFDCsKKxnS9ASBVEijPD6N3U5vW1ND3DTULndTwoeohmaWa873kQY27jbQ4vFtk3B3YnDfSXcJ1Ko8RA7ocPQwn",
  "key2": "2dWM3qb1CGe8Y9wbicW5XLXQ8rPYDiMEdTVMjUdzLoVSDjTkQYvyQ36JpchhVo863Gie5kMCdti8PgJiB1kGcmtp",
  "key3": "5WbBy41xG7rKrGQxrWwajy6WM5iwXptRPjpjwx7nRyoc3wTmnFFU7LELNQdjtLPJX8igmnKgW1yXoyDQTUt6WqLA",
  "key4": "3PPPunr6kSW9bpT5xACfYpwrfFgqYK4zkz5fbTHG6nBZPkUnELufxidsVr9944gDVH9Mf7KxegX5MqVLYTfouKck",
  "key5": "5KMEt7EcdyVxZyMjcfEzXjd4kFQiubto1SYt25LYqQ8zvm2LvkvDgc1TnDwjLLzJWo68vAyrZ8uXGDu1oFzWgNkw",
  "key6": "4BsebPpEtHXbZo4c8bZGAGKAFyvmbovNhKpa4hwPfuwxQRHzkijS4biyNhuqYYSazgGpZWxBcVhbxxdY4jEJ8ARW",
  "key7": "4AgtWJLMKYpd1HmffvrY4xD3HaeUGUJzpTUwdJUzhngEpkbJbuNRv6jfdMmJ9M5CfxaTiWiHEykDLddFyTNh5abf",
  "key8": "2nBGtpB1YECYq3AK4CjvRiSaGAMMcTGsruEQhyfP8unsnah4FMiH1W1UDfanYTNgwwRS1KFk8upZsRzmvRsAFc6H",
  "key9": "67ZfYqCjF8ncziCuqgQYaa9SYGAbXLPEw7TJP6WJu9hXMsAwUNhqgLcddFft2YcsHahH6anRZErzjGSFdZaa63Vx",
  "key10": "5Goaei2jyZf443i43B46UebpsgUdA6ifraqPdCEkCGAcDwm2zXsDYh7nCfgfP9U97rZFXoBwD6hpCQHbC3192rg3",
  "key11": "5rSmZyc2R64W7Vt9zNQS3Nn2qv78HcixgzHTRwMZc86PGdGGWg5VHGDNZhfRcLRF5HJDworhWfpwzMjqyiwy3QRM",
  "key12": "5jre7CsmZJcCq1GvEpQsjb9Qyq53ATmdWQ1gwxr4jEaJvBLXVf9rMDHuavWUnmYRFKUvuMEYAnvyCMvjPLHsH2Mw",
  "key13": "4rmfiYpnoyt2gqLXeZXJ8kKszUoynsa8ThJyB3rwURD9AhnYmFyvUsqDfipFB4wSMbKHqegLEYhxVSLUa8SAg4vs",
  "key14": "HZSjiCRz3Wo9eGqMZPNdVPcoJfRsuZK7hrPQPxKTLYnWYem6bDNfht8mEzxDCVPBnsvdthYYqsqt8hbsHwozeQ3",
  "key15": "3JWyTXabuytD1h8DXdodXcQXaxjfb1h35VQ37jXtRFvJnts3mBf96Za4vZ9U9XPLZBtYFeP28f2rY9tAWkrmn6rX",
  "key16": "2Zt5fREdRWjq3WNVvaZjVkR4HSTV1t8vFMhf5cYFUcx7HHEwhnDeoYKPHK34M1Y9QS3kSVYSNBeq3MX9QnLfccgc",
  "key17": "56t9zqwnvfGbxmXSCcoyFVVLtRf1orenRRVvDi3gfNojHghnuBxAc3SEv6dEbrAmQMPh4aSV4v8yLf4HKFMuCXJJ",
  "key18": "47sq22jhMa2GxGAHB9kh5oPuHAP83JZ4cgqGP8AjfNwxcpWTuAZ2AZu6LFiGToqdms5oYbTtpG5wcnHPofmzR39f",
  "key19": "p9HqbjeXg9zxqSR89gwgkmg2FzisKeEBWKhW1UzsyZr6gpkzbCa9YUj5C2DWjDjPdyhRT47jAZcgEGDG38utCdP",
  "key20": "64QzgnLi1i13w1uX6tbyqDs5LkGECNWGfAr4S5imHqnBjJh8Mj3UD3cpuHG5V4E4CvJ1HsAJkxGWBkUVRdZRTJve",
  "key21": "2ANN6NTBwSfecNmce7WhdPhs9WQDNBvAyQDzytSCEkH2sBwuaXxrTpAH9tJNVM5aakbhmLqfvMG1f82Hos1N1jci",
  "key22": "27ARRFtidaSjiwaxj4gg42KPnMksgfuQKbuVoZcEJaSosVzLaZgcQTjBtTX54abRvGbwAQcah6FXLMsYR1WmJ5Zm",
  "key23": "yN38hS3LsbvgSLUZqm3mWKEx76L8Pm7Geqcfv8agyozZdheGzk3PHkPwpKJ19MwZEzE9EXkBP1bGaH2Pk8CKMWC",
  "key24": "BB73B935k2xPUvgr3RUJygsbx4jWjrBKadpkjmFJ8MXVen4ER9Reqqr61Uy6A4vSR9FsGVwgFdSWmov3XDKqCUq",
  "key25": "3EkGFbzJciTyNGLDvZo44JJERsoWoUWFsfUkMHMsa8WiQ58W21W8TXpTQJ9HdvMsbPoAphadi3ZT2r5rVPK4Ne2w",
  "key26": "Ei46aSd9BXWWdpP6NQTH7jWhkiJgtejVK57G64ua2RwTpGd1RuR8uxC7hbDaTBEMAYoKHbNwujbs1xULD6mhE2R",
  "key27": "2Z4UjZktqMcQvYu4rmCXnKH2esnArde8Wei44qT2RK5emqUmpV3ZTRYy9CGzm3hsqBs9Gydv4HKhsqtjHsQj6B3n",
  "key28": "2FHn7iDjKC5Egza89FdFDbY123kvFqiAJMBK4TDgnm2obsrL1xbCD1EKKieM2jxuiiRofWboyeiJ58SozcAbWacf",
  "key29": "5XNEaCSVTkRSYhtSQbdwbcGCdDcc54NQJEbbog2YCEV5W11cwzd6F1gj7WJGV5rxHSFJ3AChVRSbawbfC3VPWoxB",
  "key30": "Kvyd5kwjtzMAyvjz37MWvZoX6UHzFjdz1GouMc5Ebvp7TrY9QsKB1aUoaPEm7SA88stCg1z3NBTvGzLSrvB94rK",
  "key31": "RCrm8uZv3omjDbs5eVUEygipJQco72dCudFobE562MnBHqLMFPD66HQutTdC9D6L3Dtq958E9k6L8BH1bxMuxN3",
  "key32": "3fTusEfZRcMVi6UN8WSqePnnUFM4ykD3ZuxiU2fwowQfWrcmqLqPGSFTDnY69w1vaczfWqvdjFtdsMyyzAMQeQm8"
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
