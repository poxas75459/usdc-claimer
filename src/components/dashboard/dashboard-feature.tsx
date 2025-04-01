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
    "4z53qXt1T7EZiaecTtCVSC536yMijSJ73N31VjkZpU1wtd59sYmpLSSvZ1UAXhUsjWMpJWEUYYssYW1eGfChwL1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MEZ1ZuD7NrKnGe3Ghwi1QGXoAd6BaNekK4WbhWwU8ykyRj8zxtyxpsvzF2CEZE8rqcCEopa4WbiNcfX1sD8MhSn",
  "key1": "4eE8msMrJQaGH5aJwqopC2rXXbk5H2UbiDpZhfksR4re2GHGZ7NZsaRN1P6HAk3phY6RscHv3CB1659tWSJ5t62T",
  "key2": "5wWCBYgBptR93B3b6H2WkijbZT2kZCMgN3x7k2BzLxL6DuJpg4fXLS4m9K6izc7hfQ4fPZUXHM5KG1PN95GMvhu",
  "key3": "wpZ36qAh2F1i5BVcYQAhWmVDYazfB11ztdf8WdZQRFELzauQFcdaXQwuc2wJLMQEG7VkW9zE8GavicEbeoTz8N7",
  "key4": "5pYdfKF5twwDVCrpKjEtRjjB1CNjHvLyyVtaazmwmQjd6UCud34REHZLAcU8Ka7dV9yxX9bnjMjiDmftTkiL19j8",
  "key5": "58kKJx4PX5vz2Z9eKMpP9hN3tmojr8Cgd4SKEaVWtvDeWsSCcsAkY2YVJD9jnLAgzbXJ7iJ9gQhmBL3dLcfaGPzK",
  "key6": "2epYGjnN4SF4Jds3vRKoDEa26wxeCwqYu4NDcGVQ1owob1ADkMtJXQDVfg9EtsBpjNivvBo2SrpZLkrMoQKsLX3P",
  "key7": "4CgUyQtdawq65KxmtzvQHGBaeC28xS3wS6xXVc15FUWpkUNNoxQNJToHMFantgwbTMUzY8ziPk6soq7Es7no858d",
  "key8": "4cXQi16owYeuvM7w7Cb2aVbhJkdknrKW35fAcxcDTTNJPK5xHh9SStjtSopF6JxMXEPshGAuBXzWkGy8gApJCHuX",
  "key9": "441UQk6BoCgm8tnnaYt5NYKrfJSkN6t8ahSSxgvYpc4TvDoz6JUydyiRKibD42dupyTrZkXoGWAVFWLHNDyAtBnT",
  "key10": "MMNuXtuX2J8m5MoZrRx8UEXGQjzP28Zvf8XaPWG2a38fn1Q2y3gxzFT5cgvcNzV5ycUoUVynNqo5djbm2vrNCdX",
  "key11": "5wPHie1Z3qJZM5LceGEHKnYbyFqS58dXv516iT2ch3rR1czUDkQRUHCreYpBhgApG7PmVra1cuC97nk1x9bS59cv",
  "key12": "5JNG6ziiZEuKnFDBFUa1vo4iLJi7EeS7k3DTEYdLB2qw3yRjWraoyw4Zz29JnZFVJiybHf4MFRfRx27KDT1gn2Pt",
  "key13": "3JzcZShPmTDScvHEKtjH4ETFgzB9AkQCJUyRfonN8DzJDoT9Y9FjQDq3PYxbTmf4UGeEUuKcwFL3fdaaAqRWtmBx",
  "key14": "3ynzsuEKK89PGQVXDJsW2FAEpjeh4xhVRdyx3pd4NHfbTWtqZdRWakvt4EFhJMrnvqtyzFWvyp3ZMP5NSdMUdqHW",
  "key15": "2zwxQM6MrnxipHjetjPnc7XVDYipZzKQaz6byYgRBBAVb6G7bcAQsDAUEFhKvr72DZ32BDeid4vEeWfxkciGbWkH",
  "key16": "5r2idGxfBC8x2cBtSXfAnoyFg3tzDaNANqG55Yq1WsX4zZL9CYcFv5K42oq32tD5Td5V7tgWWmFj1QhWmFpsPjXe",
  "key17": "kCMtVDg4DL4ikfdm88cZhWPANsWqxxG8Ux6itsqZ6nkaCUxpFRzjL5zrdjNrQ6SKnfziYtBYFfzgKBMKqRpJjUu",
  "key18": "6Q9U4xdGm6iYaztNCYpFnp88BTyxxnt8TxxvNGCsHEV84rVivc52XRMcy1tz55u3Nd8j9ytmi35s4ZjD11JGQ8E",
  "key19": "oCgxqSe15cDNpETucLoGRgdJsyrK4EZfktHG8CLSA9rzty7Cma1FY7Znex4DTccJNBgcSqbG3p9kVGTm5LBkdMd",
  "key20": "3EbU9ojgGQQaRCW576XuCmENNxzkxckhtKVjMFRNZNHjhNaEHA9pCZxSJsEkCt9MbYz7KmVStrw9TYyA5DEbpuPQ",
  "key21": "5nV1qki5ueWhrAqynityTMEGJj8cNWd2CR17JjgqueUnRBoxGUMQ1EnPATS3cUB5fPXGuteyThpnvUuVw6zpNMMH",
  "key22": "oySt1EnUKycDCdL2tN1iiPReP3nGyCaGYShNQa6Eza9gTFBxrSu2XpzzSxhzWcfqD7dowZwjxhGs3Y339cV6GL7",
  "key23": "3pSvxWe1RhM8Dhk6g9Yhd964n1fMZBXMJmBosyAsnsD8vUYZzvF4KCoQCCchKfGAbEFs2UV4hkMjywKXmb2BgLkt",
  "key24": "2X38QtVUo7nVPG1M3RsHTNvLWgCTefAtd8hcc1aTMk8cHC6kNCpj1buisVs8TMZmqhB5XMNSuFxsGjjbPAbh4C9A",
  "key25": "5WxoZpgjWdD4DCkSwhUMqwjsVTtV98viiUqCYt5hMN1a3s4VYSfdde6TsF2QypWpoWs1Dzys4a7iTXrZLt8U9FQg",
  "key26": "4mfFetnabrr93JnaQADUHYGLCZLTcLNFa6Kv9A5Yk8yvHwut4K7dpxs4dnEHBniV6jzg4KEZsnD7zd5JSvUExkL1",
  "key27": "57HKYRyg7Kq46dzXwyMAn1Yk89cZ9NGaThG7kdinntSLUMu9dAUE3fsX9RQ3UUMQtJimEpKfLvoTJSEqzceenSk4",
  "key28": "4RevBYimoiQNrvP54p1WWm6BQBmtGkhY5rAQWchL5fr6EWZoxXrF5ec2ibKc4MvBwaY8NVwEU2VJEcrgjstobvuN",
  "key29": "54fccGNXVze8TUBr8BtqFuTA6iwGXfMA3W4Qi1ZQzfdssQNJGTFcE3T6cda52MKNhdg7QS3KWcN7XxwUaySxNuDg",
  "key30": "3YcRFzzo8TCsCepxMghGw9pz9EXskQkfXYC6fvPCNnyEKtDhtFAj9Yg6p2ai7kLEQbUuQ8faLqpAP1XoYTMnfk3p",
  "key31": "3Zh9h9saY6vyGmitoGhWvrqgorXGV198PhKHsa9xwNBEmyTbBShQT7VdiuNp4MemhrCHJMoc9K3dHTi8BoetjFmt",
  "key32": "5Cx46y9AevTzRvW9GLFWxn2uhjyRpCMGEjTJXCHuqBpW5M7KtYrSrdVvsXY54YkscxeSxv386VnFim4gdqD5AZ1y",
  "key33": "32Mao6dvrBzwXePMoa1cytKc28wz6haNJ7EyrpWXL1eG2PAmjwtKUqgjSMqXJLD9h1w7rHo81Ki4SD8xLcLjVSQo",
  "key34": "2jXqAtU76WFYqNUrjPpg6SUkZMViHZHG53pEJTLCsp1uP8BQ7vPxB1hXaErxZNnqN8etEd7UGAr5y4dGbjRZwkcU",
  "key35": "579zhUE3yxBMyQBtaZQYkdYe9h7cRG49TaRWkHgpDaGqy5e5QDwqoTZmzbLCqpHpuhAFL3MAgCqgDJ1jv2FU7nKe",
  "key36": "3NR4JPMgmCVr6vhHihKXf7kXYSYvJE6eiAVTTVuzdZsSqXckzdfuv5HVtZSf1RjR8Qwtadj2tCrAaT4W2mexM9J3",
  "key37": "43DK4uTnRVwqdQN5bHBtNmpct3ss5d1PYD7fgtCYmBqPcuvjwdosCUz5Af2rLyPFSVv3DzY9DrF7CFSfYQiR5Tvm",
  "key38": "4kbPNzE25xQFZcxVx8qqmR6mh2YLfBYNqz5e4LKHX5Hb2sm5uLnEo4XFT9TTUvi5fxbgZxHxY5sD2u9KgG3Vbtxc",
  "key39": "4Fg8DbYPPMNakENx3vJG47ebJHNkMhSty8Mad2mWQyxehSWganT3TPaHYMPzb876BNEcNEJCdvouQmJpUoyuZTu8"
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
