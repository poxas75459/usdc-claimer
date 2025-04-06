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
    "3RaufHaqrcod5Lm57tWDHXDFwnUieZAjdmApDM8zvK3rEjBU5tzL2fiqWoHZMAznooFYFPiPFYUAZxWaeuZ6RwfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RVfzz2qfdRZ75dB1s8i5N3rdEjx2rwyToveETP2UjgPWAYZseWx3tDsfGqi6VKnVTQv4nBv6XAdRewD16yQBR1q",
  "key1": "JXEL75at3j8RfoJq6jUtVCshZCEk9cAAWqCxQpSfJMU6BFqeenJrq9mHHdA29XYasv2FfAWn7swMMQHquwSwpSG",
  "key2": "64AfqxU3AWX6FTSTudwEhCnbL6FC3fbojGWEaVmnpitYk55CwqQfh6vBbpYMWM6UsMyZqd3Wkbj2AhgbBNXmeV5q",
  "key3": "26mtmPCbGTivfGX5KEfvEjNnjMiRJMPrwcGKCxZQr2WYToqYUBdE4gd31mrk1PqrBWwAkzSkhEYL2HcJZ6YvXWuV",
  "key4": "4bMrYbX5MpntaVrojmiQYAE1efWYHpywSVRdGNH1d2v5szgz5dA7T9fZgsVjdWecZzc9ixSN7Psw43kLLAsPa6Px",
  "key5": "4EEBpSEudX4CgWoqDMXQwDbKCctA9MwWXA3uthSmgfWRFv3BF3hVgHPFs8QrAzSSVoNXWPBuXaCmwYRonFQJHfBM",
  "key6": "5VDzsbpkDcV3rumUBWJU4v4zfHWNQCaMn4aGnec1dqUgXaRfwkF6JyL5agXvtvuXnWCvEQj5rvFFHV3aiHfQ5ipd",
  "key7": "5RBKk63no7vcL2SGPnk6bX5UD6NAcNkKu3PRe1Fgyui4kqedUvMMd8JisaLvb43eC2khhhH8sE3BRrrhGUHqQW6Y",
  "key8": "3Nf4EMHgfMLerfdVC5PJrtqFnXw4QagB75se9U7dLGiMwc3nJvkpMNvUVJXgmpxEgG9otKLGdkx1xm2S2341J8U4",
  "key9": "8xmrHugps9NXrFFD7orUXSqbyQFyfzvgpcSjwfPksDX13yu72y2fxqAKhWGqMap89GEPqhZzmFDSzVwNMD2FG1f",
  "key10": "R2arD5tzWm8vPnvEJvB2G2TYn7RmqNiuL8VWHreG2Pwos9HfZtBMba6jUFAkxCFSHLRN6TGqHZggDAdjHCAiv92",
  "key11": "5ZMQ9eUPCLKiDiKf5Hke5tGupwkFrM81Jbjh7Pn2E9NfuceDukgh9GscHJdtN5Nm7j6tgfPWSGoZjNpujk3RharF",
  "key12": "3AMVvDxmW9FWnXDFNSLFN6BuC5vHtgTvGfgbG9ZgeLrZ9WSvYpHqTjDUym3jSM7it9mLkJi1BB1t2jX7NDz8Zxq7",
  "key13": "4MFbKvyudqVx1VBtpWotBvULmjNkQQxX9YF6RfpBEz5zVS96CYkf5GJuexAZzMC2rMdhFdqw1rFWFBWUgMumc3PR",
  "key14": "4WansUim9jdAwWoPhRAoQaL39HjNadLKEVJno1qgRnfgt7YwkGPbQ16MpfG99JnR64vwmofz5ZBxma3hS1CNjU6p",
  "key15": "5AK4cJP1YFqwRYnJnyoo4BDqezdFPP7L1cnS5iFLwttsDW8evuTumyARbKBZQFYdvR28Efn6J6JST4PrnrkE7gYG",
  "key16": "4FvqrufxsAFW8X3g5b8aKXvUnVzzvTA1hkNLkuVVmajM2ARrP2srBugdvUZku97WbxNFUA7JXxag6QfRfMFt17mF",
  "key17": "3oQoeQnjuRdqT8jWi4LcQmFz69YtZNaMhkg6RoMafUFefd7F6mG93UN4JbMRrLkpLinDcG9CjyJmPRTmGWpqHDc",
  "key18": "CEL8tERG2Wop3VceLDAodRavLuKTZK3wjMmUW9b7kxkg927evxAZUU8N1beozkRbGMgesXMs6ynme56qzi39vx3",
  "key19": "3G24hbtXdAYCciWEVpeJgQ63PkUgq84EorfA2XDJyJGN6GE7UcdrUUECU9wDASK1i6ndRAXzorH9Jsu1rRSvgrqi",
  "key20": "26AupKiTZzSERhsjWKfn75SWWBoB9BS7GSNCX6QT9jfJtr7HTysNjTCSMfzwfMi42ALBrpVN26Dj6rZWaqQR7q1M",
  "key21": "2RNsyu3fcxNfpCBg7nT8Xycbj1LEkngC2ZWoqSVX8L1MciEC47KzgLVXAKoknPpnK5teANRH6yckaPsg8cz2t2DK",
  "key22": "5u4vn1fcLMcBRaQHPjLMZDnpF5DHV4H21nXNPzzHuXMWJuKXRUahD8jrYmFsEY6MzLT8Ak2L2GmC9fCRK3Hs1okT",
  "key23": "AuNZRvEVRc2x7Ag4GHEu937VhAHKnA2LKV6DzXFuNE1Mr6ZBZPRsBqXhex84XTNQrbuoocvL7yAhhJgWe5yLvQv",
  "key24": "33LuAm7ptoLPdqsDwBxzkVoY16oiUVU41r1jmM9HCJtdHGQ1YYzTwYZSr84PewtDy8wFLbACvmYnheYevARqXrh7",
  "key25": "27zhMQFQcFxNUD2JHBB2ZffViUWCRrxHDWwvb683m4YTDeM7ekLkUaRnUHanpY6kPnCTmQ3Q15JvRL2Dj8LaniFm",
  "key26": "21rk64iJVfwCThDa1Uewwn2B1RdHbG7HyVHKe1vqV6GhadgdkMHqaE2hv2vQKK5CBdvqaUKF5z9QM8fwY4PjfDTK",
  "key27": "oaBWbZCL2PtDNAzqdVFNjRH9zR5nVQ8QQnhVer6vfWckHB6s2E9v9mQDvLNHyfc9Tpo46fwDi3uUxbnLahtmUSL",
  "key28": "46ugAK4GFyjHFnaVnvjYRKHCXRQzvd1TSpe1pRt9gjdmkFFWDXNsict2Jjtf6xKkqVqyyYw1k4TGnGd4Sfg1BC7v",
  "key29": "3PuKheBy7FtiptCNmswwhaPSuXwRVozvvtc9nB7gqUK4agbtio21xpipiM6NEPMMLp7rhVcMpEHx6zXC7F7XEuFb",
  "key30": "rsGfyzB3WZo7czDEk9oRjWKoGXpVxXYpb6CWj989pRPoKpNomUXYC8zS44kVcpXLmBxYj3VGv84jNzJUjJ6MjqT",
  "key31": "3ZBm56wb5EiRtRLtcxnRuz8Dp3MZ3Zsp3ctFfi8gontVEfqAVsWxqmUg2Bmc6rHcmCjTzRmw6BKMVC4BBWjo4hco",
  "key32": "5sWKq6ochUtXtTFKsUdEWQ1cjXE68JosxBu2dWUnqntPt5MmxG2hHHSmzUqbZYFHwGJ6ESW6CimqUgxN8wVppSjf"
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
