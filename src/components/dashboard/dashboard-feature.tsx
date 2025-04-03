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
    "cSapsuDg5xitReGWrQnNYKSPLVx3DqvT1iMLSa3bp49YS5t4FuaPS9Tfqmnjy3TQsZLcQPXDA2J79PxuYZTnTW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4KPFwy7F8yM34ZhGgYP5ewViTAGY8v4U3LfNP1zs6QsMziQbeH9RKqiZC4AWR2kq2bwDszXGeW3CQYtahJNtgQ",
  "key1": "2Wu5811XPbgAGVBthWKhmptakVsr8WRbxbrqQigEhqWULS51GESGdcYQiNALmUNFbcW61KoM42v1H66X1PTDGNc1",
  "key2": "SQXZqXKBJBEHKYofBF8F6NFeYBCAFTFnATqvvEZfAkHqKm47oSBqA5m5QjiveJz8YTwe8SB9D4fF5SWDDLPn4Zz",
  "key3": "3EAkfzKi5rvhNxBe6CwzEa3tCaRHd5xXVoL7dsqDrRj5g3mFexNQA5hZAXcC5et4UpatUiHWDFVNwzwhWjZVVshq",
  "key4": "3eESHDbypFMfYwo3UPgAKi44EArj4WFHDHcyG7AbGeeHmjMh3oPc1kFW8XB2UEm8Ui26uDA4PY9JD6pwCWGm7U73",
  "key5": "5iMvn8ipzZGXMjtyBKpt5pzts6YyAhrvUMEEW9tTiQJBP8ETqayzi3x6SfsZvYNePcRT9RWf9LxdjTW16etUWXBC",
  "key6": "2r2NGHEjzawFT7yfztSsQbUjM44nn6bwzVrtHDprZQVwCZQ1cqAD1pK3AP8jygSkWvdEAZ1Sg2C52hjbadCKGM7p",
  "key7": "2Hi6pWmsssLq1oAVoerVGuhPQAzft6Zvh5hSGCAJ6Aur6MUif6AK5biba9JZYFad2EBk4WAPCaGZ4tjrJteTLfQ4",
  "key8": "3CVpf9W314MXkv91vMg4LJVQia8Ge2BvoFhwMmqf6EVUZXuZNAXo8yUGbiHQomqPhmKg38MWNkruaUh3bpfapWBY",
  "key9": "4ekA81mWiH8XKMiRvmTqWEv4erVNT4LxWrUihtz2yavidUZvW4E1z89cZW9sxQgPTy4t2RbZ2FcswFgZSocaeN2L",
  "key10": "2anQjGvnmvdcRQiHfh56FjvCezi1CicdpZ7KSdrSxyvU1ycM4zeGvtDAKjHrtbvBhQZN3FPgTgqbaF4QNppYAaiw",
  "key11": "3CZAACgrnzZcvtdhDCCbwKxfSbofa2rnpYH3mKFWavjJjg2HtwSnwaxj8tDTFRxjTyXF4V2TRXEuFpRshWP7AUJS",
  "key12": "3mGcjcTMdu81C9krC9WCzYpY3Gc3owtxeEpabWJJCmbF4juQTu4L9KZQxqHn5hfmu9wQKRYbayL7yauCa48oMeHJ",
  "key13": "5rzE779J2xx9nrMw22r1A8dxG2ZxZdyxmKMorUnWqdnqfxe3X5RBYi9cJ1C2bCfFwLQQSjqF7Q2GgtiJnhtMfiHi",
  "key14": "2nXWGTrhMKCw9xMZ4rgZAztyuYyLsiXsccKcqtKY4QWnBTK8sjSkkaUpn8gMHNn2XKtidLndLXtcLmGxUR6drv9U",
  "key15": "fBAABmgQDida7H2hCLsCEcWL7sT96kkH4txuKhfxyA67ZaWwA5pLHMgLEGTMEdyQNqdjynub9j4GJRvRXQUa2Te",
  "key16": "3j4G7D8BLbnPgan6etdsL1KXBUe67WpfUemQ3A88VMgBJdXKi95TLKMaev9LKD7AvHv39YXczU3scdwVaweXAkBf",
  "key17": "34pVNijpqz3zghMcMEXp37io9UPjsEFfDPqXPNyRuFqMc2627woSPyDZnitnh4M8iZWynoT2zjPC4rXL3CtEkks9",
  "key18": "G9jb7Dm1AryWZAH8NuoRCeQrSDfjDKq3pm2ZggwxZnBaNsQFrVp9TWUH7YDysuS3FFB86onn71ZivZzo8RquXQv",
  "key19": "26ConNj4cszgKAxxULWRWRbm6HRcgo1zvvnsDDZ9j1WLLVJVPXxrWAYLbj2msPvbNHrxWwCmcELD9FqsJVnRcY2P",
  "key20": "2ccCRd1PA4mheZr1888grQLS9ThRbgbtiHVLudeprmoboFJFTWNTjKa6YFWtV225FSvWKhMhKBN5rAndvwTYBYsu",
  "key21": "2VPPDZemL5nAvkDQgJsoBTaqQwQaJva3t2PSncJ1o7jCN7GfQLHSsHA1VhajguRDKyn5MpEne4bZA4Uw6SHAXXUp",
  "key22": "2NeowGcYv3LJyQR2jePePZ4xqaqbFsNrPJ979wDLtzDvM9MKBPUuP8FvF4ShYR8kAwM5PVNzox3pLgNqQqt7LzgZ",
  "key23": "3yBejKfcfmvFvAARoDvniR3vQbzcz7mFVgcsXpjo5wmKVzou5EQWTsfarRz24Drp4Z5JkByXNHtLBm8vLimMzni2",
  "key24": "B6FE6tUkJDMF6Zq8w8tQSytErqCDePfwgis6v4ei442SR1VnoLbEpNVNaLa5cPgbEFVd7W4ca6VmcVXLhZE9zfH",
  "key25": "2dJ2jHrAPm3WZj8u9YaCiBTe5ekQatcfCrpLa5HTEVRVAsdjrkVNCnyYq5nftLvJVg9HJSbv9XgDt16dXCUhYBT4",
  "key26": "gJt2sDracCTxfWGo1JWqKjdicFJk375LRtihY4iuK66Ai35NVCgwjrN1mxKKswniMamHdmFC7yLHjjKU9NLsghN",
  "key27": "7xBXvTVJuPLQ5Yk7ip6y6KUpgCZEop9gh5EDbTZR6kPeyEqKxnq4r1tZey1ntCMkMNDFmknxygHB5a1oMAib4dc",
  "key28": "4UsycCgKcvHGNXjY3fhxwKykZ8CrKHph2vFULkyYtAUFF9h1AZ1upTSw8kTv7npZJtkXxBApFJALweMiCDgWJjyi",
  "key29": "4beZu3LhQKsR7Rqh8nfia8aULDt3rCXAgubbE8HiBDSndWG67mt3aSzVPM9pQ9LgPn3vxLdHH1MrW256V97Zoncg",
  "key30": "DFGd7zVBJGpypjDELMoer7RaTh3jhSihVSSLcrJSVp7zaecjgPkfkyXBmmUAY5rRKWzEGFGL1pU7PpaeafAbzrq",
  "key31": "4x9TpjsiuyD2bh71CkhkQTzSVBNUuyBdvJcNefg19fFSeezht7sk1YhfHyLRU8n1mBXuu11nmEdDgcCxtu6vL6pT",
  "key32": "54JJLk6RdcM8BjAWXXRTgneL2GsQip4DYnsLKf28DQPUKkpBmqurT3nDXr7oQgmgrJhNZTd6MoZDx1gaAzBY5sEK",
  "key33": "5ACdWyaau4rVaCK7xiTzm7EJHwukEVkn4nQBysNojL2PFadUvQA6E62iCDQc31Q833Xa7N7ecia43SoTyVPh4gnj",
  "key34": "2YBnkyNrG1J1nXWQRYzRN44ezETtiCRrgAJwBJrqw6cnfV97GNn9uvz3YrYWWg1qhksvKd54gwwtSGXVTu96EZS6",
  "key35": "3KKXY2xaeQMHACzvAQojbRFMM2vnocxe5AU7doeZDDS32V9ZYiunhRHNtwonpAAgMajKFFB3EXkAWHJP1P7F6cje",
  "key36": "3K5yv8J1T88dZSiYWNPQNkfrpbZRdUgdab4co5W8cYFa8FtPfJpdEKFBNbdQNExnS1c1YbPDcpe23zNsKEBrVRxX",
  "key37": "gCfRyvLyAEv8Bj37FgksHT1EjFuigPUmA6Am5Zvz4uaZvF2uRijnQN6NiuSAe1JNcaUZjw2FdBwrUANrv8yhp9Q",
  "key38": "56v1iGmFBhpppVL3nHSdRNMLJWfBErevbkcr7d7FSQ4X8DwH7yEYjLvFpDzG6Ve2sVRRMgN2MgeQvGN7xS73sE7E",
  "key39": "51h62NJB9Cpb9c6AJEquYBYMVZunPwb9DEU8ptPmLczHD1K4ZZy1YMJiMEisYshPcpSab44YKuvdMGVuTDz8BPCK",
  "key40": "4PUjZHM7ybMGyJmwQkzDGFBzmDks66M1t1V4JUPeY8fPM1WCqAXV2tAMBaqrKqvBhrnbxRd3Cqf8EvNbwkPnTZeR",
  "key41": "3oS4R5EEDFvRJkcT2ypDo2BmSBLqyQpoN1ZuhGiZJWaVmsrbauyJbPF6S119FGH4NhrTceK7NNbPWZTgHgyXaR16",
  "key42": "21Z5kDfewbbFHo5AyccAZD9iYRRrf64Nj7qe3jDQVRqpHLXZ4HUV1h6iL9YvhYGNPzTLfJGNwAbUnNMPDGQCwN2E",
  "key43": "4uhx3DZBHfVD3rbd2TGuBR1UUrSgcjEDDQ9K3pUJcaqnoCnVBXCSvahg9EgcDD9n5X2wwTVV3d77p2Ng4XXTQvwv",
  "key44": "2zZNQdyjVCDvoPiBVSq48R6DiVDS2yDsgnNksA5qGU6xMLDaf1SLeWbotLczrGRUSymJsQ8CrrttbmFZHkEK48rf",
  "key45": "3XMUb7QcfW9jyNUbnV9LxhjjrHbdfqXcPh1rc4xi481ei7isFRSjjEms9UXRfPF1CVfq6MLBBtFu9r5gnv1UZXzy",
  "key46": "s5SYydE8764zrZwkpxM8oxRAqbUoFN2yVT2EJVKfYwW7f7kFi7gSD4f8gHDobLPWmeeVpGbTBMpwf4GvtjG5EcN",
  "key47": "5QhV7ybQiW12rAkVayksDetCkcaTdifwZrFKaHMxSqWQc78BwWduzg48bxceE1ALHk7hdCKYbNJPVqHJuUFEbVA5",
  "key48": "58oPMgRhDer8u8BMmNhMBV7o8LRVYgbyNZv3zauaHthxQYj6eeaaBs36NypzEGbj6J3k1rGXzkQ2NzvvT3Gx2ebm",
  "key49": "25SNtZvyh2pedExU6TokxH7kCs7Fms2jnPZ7rtvbM6mWhpaRqE6qUgpwHK6a6B5PioC2BiETJZLbUxzLK4kpAoCc"
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
