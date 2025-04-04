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
    "66AncHykj1H5xDMVKE38o476yJ6drKvyeANZj3aRpdMH8DGmWpqSREQMSB56uvxAQkR9CdnVDMPJ3SUpju1yJ2gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4viMtK88GZRXNyhZSrRxFqugJMyRjB6jEhG8dmFCjSkUDBNzfJCe948CPuFLU3SDwTSQzU8qGRtwd1jFgSgDjT7i",
  "key1": "4ykkVRwNQVipHZvjGX9z5kUHDMWTKrT5YtQTMiRLV39AjqwVEV35wWkv4gY24M7N2t4ZGxAhRpPmfNBkbkSJx5Rr",
  "key2": "5dDfD9Hrve9FKM1S8RdEsuDXiAPrcvJnG6T8aS2172vdhFs9c73XiaBjc3NCKU7Vr8RfTn8V3xGVKBrEmaAE695L",
  "key3": "3xFHAvkwRZgk1uMpTXgXbZyUhLCzXdB2gYwQG9242HThWsBTgvxecJ3E6JgXjNaZnZcfdTG5diq7s85biYWm2CWR",
  "key4": "28K7iEzY1KHagDho5rFAPok8wYCa5b5LUURBdpBku8qtCyzKXqfK3j5MNwsZ9TFFdiQk4uhBeQ1fwhjuSoEFD4Uu",
  "key5": "44LvTr4F5as3SfTmepG3h7re61gUEoA1W5ThN6TewgQpGBSGbfW6QcdVC1YkLhtSbzjLKMPNW3e9AmeCfXz7dJB2",
  "key6": "3goQrDJp5FMsURhq8afPE4cvxdZRE95zLkm9162fKzJvsBzrti2XXvC8zwko1urG33TPuerQQw1UNHKPMWac9muE",
  "key7": "5vwREzEbCfHt2d4TnrwJQPCzubYaaXQi7pcWHWwVuzcYUdck5y1bnU6Nt4iEBSZoJs9UPesmRGkdmPM4wydABL3b",
  "key8": "2cwm6BJzj3juWuLv45oxp3BeqtXNQgY6wMm9zErqDMwtdr9ZaZgpQQ3Pr4ajwXWogxwfG8akWjwAfPg4L1WjJ67L",
  "key9": "262hvcqkT1H93LUEFfFNwKxYKG1fGuet2uMiwTp6uYwvcLaSYdLnBMex1tob74NMoVEr2dR5SD1RBWFbrwr4qehH",
  "key10": "3sABXsyfgpMgwFVCYjhhVndAhUq6PsF75KRw8K6bCpTKVNjpy1LdhC9K396caemZDawxayD5mtmJjcLyCHbez8G7",
  "key11": "32FgRhLUUwFnm91EoUcS1L67geC1mQ67DAYMS2HHGNz56Lodw7S8qMnLSYmfpLbVYfenHJmP29zN6YZfNSzqs6aM",
  "key12": "3PtLV7xXTLUZm68iGwbbRMe5janJ1P376GvYU7mvH1GbCYyx2aWHLo7WUXMzL5MHFhQLeaefo8EYdkH6sYwMmVZU",
  "key13": "3A4y2KUW4L9h9425DEcwDaM2P6QmAoy7AiHjhpbzFgNquwkueT7vGzKA4sVykna8zWjeq7HypWLQZTpyz6aE2J6z",
  "key14": "3x5KkmqdeKYPw4wAP28JTuupwg7mu9TFoCeByiqkNK9h9WymE5wmY6C5WgCWtKEB2U2fxSvDDrsrK3zgd486jTme",
  "key15": "zu1CEr74fMWPNqKK1vUxBz883ps7KqneSWrJuT8C7Kut7kdgcDNDEYRvFYcsX3wcckWBAU82BEqXnHTxvtShtMA",
  "key16": "5PCcA3Y3CFDCs4uFqaxtGetM9tGuR54WmqC4G7zBdV5rNwHTDAFB9ZWTxsSELtbHnuiAEm3TJSf6TYZPuQLeHvZo",
  "key17": "2PTZr7cewWeMVsKRRHwHJp1ineMes5GBbdgHWWdqieuZwsVsNswYVCNBJ6c4fWRuChSE86StZVKjF7tZbfJSJVt4",
  "key18": "kBpGXHcH7vmi92tRzkK3sZ4xABCcydsxkeroVWCTEzp6XNfUHMQQpntvQPq55wafMVQg6k2nx63ZThWNbx1G4rQ",
  "key19": "GDG7u7CdevvpudwAYqaBHLxyicoKttCMSQyK74hiF4bcegEGVciLErnZ8objPeafW7owBrbngBU9EEPuPetB3Mk",
  "key20": "2A5jK1cLq7aEnFH39yUjjP29ngjRFup44KhkG1ov1oJh6b7RyTcZyQNeJ4CHkwR5eD3TWmtozeaugKNDQVAVnFqU",
  "key21": "5WwRqPArQRKcF5R5ziFzNp2XUcRHDzBvEVDNyeaYbFo4Nsb5k48mNR5YdMQXRcUHLLXKXcBAGrxcJT1AVPzHurd8",
  "key22": "58AYrzRe4TihvfuZT6URcjMhwShZbXGwbBMh9khFbhxWsYR4fp5RK8AoZWK4biS1QuseAWHiXJqN5jbNEWTp5WTp",
  "key23": "1m5jSo2oy1NjEndWofgLoQKB5rQD476rNiEDW2E4W5f1iw3XXZHKeicHKaeTKJ5W6XeAmAr8xnqMkpLoSMakKFk",
  "key24": "3tVp1Rvw5JhfkcEyKeZ4oVbfFMTtboZ647uK9CdJSjVV9iZESqLXTcxPRxsMHuojHSoNNpzZRf5CooFvdrhE8nyV",
  "key25": "5tH1jj8S1SnL31rpeSuphQhwZPcV2DA4YJpEQqhJajdQt9pdTLEnUfWCPHc1GxTHQoCTjN8gfezfP4qFFQBw9PZv",
  "key26": "43wopRdFdz9TY3reEt5uh2Wi56Zm52XdBAy1xe1PqRxFFRUiXtVpccnUFnytSngnGZuba1Aa4m6voaqN4Y4rs4qP",
  "key27": "4cSWXFPgHiFNQkSinUrqquS1HDZNb6KiLaPZqtktCTBggdDRAa2RZPoYdYqEki6vSSgdCyHj9J211HY7TksFxwED",
  "key28": "2Taqbvqi5GhCy2doBCH7nCVM6Qhz3QD2Ma89WskvcY1S8ri7nCkmKXoGMYtRkUMo2viJ62eigE39jmKtm6PQEStW",
  "key29": "5GeUcd2ZWQjbDhcWrsrp6xXCTRuvdUXr4zqn4oYfJQZ4UEioFGfXWFmtdDV9MpkGPn2zwUn2bY1P1uRJtf4ZenbT",
  "key30": "4wC2mSMj8qnoGmwYUnDD3B4nzAReir9CMKyBnPRnDdmmyAEuCWknWfeAUW1g5eDsrX8VTf1fDy8qPpS5dWC3RGfR",
  "key31": "4eNfduZiKPAwxwv69vGF7wfiAdMT27DhazicZmAqeAUC2Bmeqw2xUCGcid6upeTLLJtfoFE4r3JXxaqV1RNQhPiJ",
  "key32": "43v5cz1mNtwgWUBqrwj47kDEY41eCWsT3vu2U436EBsykCjGgGzARyuieSUJpcq3AwvUohcEeYbFKeTubPzYXhLh",
  "key33": "3M2dM7ni5nZ2ioqNXknYczTppv3MCn8ZCiXc1WHFKPyuTEHdp7N5FwV9TKJjJPH4YYhTzdRjaScSy9ya98J25jkx",
  "key34": "UZyz3KHtyieDevD5xZvRCv9eZmw6h9UVWw4qiHxvgRCDPdBb36PRoVJtQE6LAkgRsBBVv7Ao4sWpN5zwyroh8gX",
  "key35": "3YNHnMDjyvp4K3fievMYJmqMGhZZ1AEKiD3qkiX1pnR2HuiSsJ88YTKrs8w4K9Ne6gjkHNMXizz91yX143SVQGQx",
  "key36": "JCk7JayjsGxuVajZt814wMTqf597zTw3MREPJhT1ao3s6NpyzFGrANFy1KiE5FAd4nP2G7yU7MgBsmwyY99sueg",
  "key37": "VDf1dwDtNZNNjBse8AC7nWEExgg4V4XZnhPnBo2HFgMQYMreDV3uHaufM4fjNXqsJMJ4mkgQ6HTDbDek8SF8uGt",
  "key38": "3UZVjDAjxmBimsLzANt7yw1iNHE9DxUi9HkYQZ4jHJAD2Z6BPHsC7fcVd4HNYTqBro2FwMKn2wstJrAneD8WdVFV",
  "key39": "s4eaHemntgcfjHTUNdt51g3rrYp2YJoiX9UQ46rvnBVWGCvmm7yb21hehZRLEbYPXf8VQfA44uu4VrPvTheV5bK",
  "key40": "4Z29tdx3KY9ewYb51mMBeMXH3eHQTFfgHLy1XuxgUvvc9SW2p33somtfbny69RFopgfZm6MX1wPDwXpLurWpkEAQ"
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
